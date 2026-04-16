/**
 * agendar-imgur — VaiAnuncio Instagram Scheduler (via Imgur)
 * Faz upload dos slides pro Imgur, agenda carrossel no Instagram via Meta API
 * O agendamento é server-side — PC pode ser desligado após execução.
 *
 * Uso:
 *   node agendar-imgur.js --pasta "C:\...\gerados\tema" --agendar "2026-04-02T19:00:00-03:00"
 */

const https   = require('https');
const fs      = require('fs');
const path    = require('path');

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const ENV_PATH = path.join(__dirname, '..', '.env');
const env = {};
fs.readFileSync(ENV_PATH, 'utf8').split('\n').forEach(line => {
  const m = line.match(/^([A-Z_]+)=(.+)/);
  if (m) env[m[1]] = m[2].trim();
});

const IG_ID        = env.IG_FRANK_ID;
const PAGE_TOKEN   = env.PAGE_FRANK_TOKEN;
const COLLABORATOR = 'vaianuncioai';
const IMGUR_CLIENT = '546c25a59c58ad7';
const GRAPH        = 'https://graph.facebook.com/v25.0';

// ─── ARGS ─────────────────────────────────────────────────────────────────────

const args   = process.argv.slice(2);
const getArg = n => { const i = args.indexOf(n); return i !== -1 ? args[i+1] : null; };

const pasta   = getArg('--pasta');
const agendar = getArg('--agendar'); // ISO ex: "2026-04-02T19:00:00-03:00"

if (!pasta)   { console.error('❌ --pasta é obrigatório');   process.exit(1); }
if (!agendar) { console.error('❌ --agendar é obrigatório'); process.exit(1); }
if (!fs.existsSync(pasta)) { console.error(`❌ Pasta não encontrada: ${pasta}`); process.exit(1); }

const scheduleTs = Math.floor(new Date(agendar).getTime() / 1000);
if (isNaN(scheduleTs)) { console.error('❌ Data inválida:', agendar); process.exit(1); }

// ─── HTTP HELPERS ─────────────────────────────────────────────────────────────

function httpsPost(hostname, urlPath, headers, body) {
  return new Promise((res, rej) => {
    const data = typeof body === 'string' ? body : JSON.stringify(body);
    const req = https.request({
      hostname, port: 443, path: urlPath, method: 'POST',
      headers: { ...headers, 'Content-Length': Buffer.byteLength(data) }
    }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    });
    req.on('error', rej);
    req.write(data); req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── IMGUR UPLOAD ─────────────────────────────────────────────────────────────

async function uploadImgur(filePath) {
  const base64 = fs.readFileSync(filePath).toString('base64');
  const result = await httpsPost(
    'api.imgur.com', '/3/image',
    { 'Authorization': `Client-ID ${IMGUR_CLIENT}`, 'Content-Type': 'application/json' },
    JSON.stringify({ image: base64, type: 'base64' })
  );
  if (!result.data?.link) throw new Error(`Imgur falhou: ${JSON.stringify(result)}`);
  return result.data.link;
}

// ─── META GRAPH ───────────────────────────────────────────────────────────────

async function graphPost(endpoint, body) {
  return httpsPost(
    'graph.facebook.com', `/v25.0/${endpoint}`,
    { 'Content-Type': 'application/json' },
    { ...body, access_token: PAGE_TOKEN }
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n📅 Agendando post para: ${new Date(agendar).toLocaleString('pt-BR')} (${agendar})`);

  // 1. Coleta slides
  const slides = fs.readdirSync(pasta)
    .filter(f => f.match(/^Slide-\d+.*\.png$/i))
    .sort()
    .map(f => path.join(pasta, f));

  if (slides.length < 2) { console.error('❌ Menos de 2 slides encontrados'); process.exit(1); }
  console.log(`📸 ${slides.length} slides`);

  // 2. Lê legenda
  const legendaPath = path.join(pasta, 'Legenda.txt');
  let legenda = '';
  if (fs.existsSync(legendaPath)) {
    const raw = fs.readFileSync(legendaPath, 'utf8');
    const match = raw.match(/📝 LEGENDA:\n\n([\s\S]+)/);
    legenda = match ? match[1].trim() : raw.trim();
    legenda = legenda.split(/\n\s*---/)[0].trim();
    console.log('📝 Legenda carregada');
  }

  // 3. Upload Imgur
  console.log('\n☁️  Upload para Imgur...');
  const imageUrls = [];
  for (const slide of slides) {
    process.stdout.write(`  → ${path.basename(slide)} ... `);
    const url = await uploadImgur(slide);
    imageUrls.push(url);
    console.log('✅');
    await sleep(600);
  }

  // 4. Containers individuais
  console.log('\n📤 Criando containers...');
  const childIds = [];
  for (let i = 0; i < imageUrls.length; i++) {
    process.stdout.write(`  → Slide ${i+1} ... `);
    let result = await graphPost(`${IG_ID}/media`, {
      image_url: imageUrls[i],
      is_carousel_item: true
    });
    if (!result.id) {
      await sleep(4000);
      result = await graphPost(`${IG_ID}/media`, { image_url: imageUrls[i], is_carousel_item: true });
      if (!result.id) { console.error('\n❌', JSON.stringify(result)); throw new Error('Falha container'); }
    }
    childIds.push(result.id);
    console.log('✅', result.id);
    await sleep(1500);
  }

  // 5. Container do carrossel (agendado)
  console.log('\n🎠 Criando carrossel agendado...');
  const carousel = await graphPost(`${IG_ID}/media`, {
    media_type:             'CAROUSEL',
    children:               childIds.join(','),
    caption:                legenda,
    collaborators:          [COLLABORATOR],
    published:              false,
    scheduled_publish_time: scheduleTs
  });

  if (!carousel.id) {
    console.error('❌ Erro ao criar carrossel:', JSON.stringify(carousel));
    process.exit(1);
  }
  console.log(`  ✅ Container: ${carousel.id}`);

  // 6. Envia para fila de agendamento
  console.log('\n⏰ Enviando para fila de agendamento...');
  await sleep(2000);
  const pub = await graphPost(`${IG_ID}/media_publish`, {
    creation_id: carousel.id
  });

  if (pub.id) {
    console.log(`\n✅ AGENDADO com sucesso!`);
    console.log(`  Post ID:  ${pub.id}`);
    console.log(`  Horário:  ${new Date(agendar).toLocaleString('pt-BR')}`);
    console.log(`  Conta:    @frank.b2b`);
    console.log(`  Collab:   @vaianuncioai`);
  } else {
    console.error('❌ Erro no agendamento:', JSON.stringify(pub));
    process.exit(1);
  }
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
