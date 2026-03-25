/**
 * /publicar-imgur — VaiAnuncio Instagram Publisher (via Imgur)
 * Faz upload dos slides pro Imgur, depois posta carrossel no Instagram
 *
 * Uso:
 *   node publicar-imgur.js --pasta "C:\...\gerados\20"
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

const GRAPH = 'https://graph.facebook.com/v25.0';

// ─── ARGS ─────────────────────────────────────────────────────────────────────

const args   = process.argv.slice(2);
const getArg = n => { const i = args.indexOf(n); return i !== -1 ? args[i+1] : null; };
const pasta  = getArg('--pasta');

if (!pasta) { console.error('❌ --pasta é obrigatório'); process.exit(1); }
if (!fs.existsSync(pasta)) { console.error(`❌ Pasta não encontrada: ${pasta}`); process.exit(1); }

// ─── HTTP HELPERS ─────────────────────────────────────────────────────────────

function httpsPost(hostname, path, headers, body) {
  return new Promise((res, rej) => {
    const data = typeof body === 'string' ? body : JSON.stringify(body);
    const req = https.request({
      hostname, port: 443, path, method: 'POST',
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
    'api.imgur.com',
    '/3/image',
    { 'Authorization': `Client-ID ${IMGUR_CLIENT}`, 'Content-Type': 'application/json' },
    JSON.stringify({ image: base64, type: 'base64' })
  );
  if (!result.data?.link) throw new Error(`Imgur falhou: ${JSON.stringify(result)}`);
  return result.data.link;
}

// ─── META GRAPH POST ──────────────────────────────────────────────────────────

async function graphPost(endpoint, body) {
  return httpsPost(
    'graph.facebook.com',
    `/v25.0/${endpoint}`,
    { 'Content-Type': 'application/json' },
    { ...body, access_token: PAGE_TOKEN }
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  // 1. Coleta slides
  const slides = fs.readdirSync(pasta)
    .filter(f => f.match(/^Slide-\d+.*\.png$/i))
    .sort()
    .map(f => path.join(pasta, f));

  if (slides.length < 2) {
    console.error(`❌ Menos de 2 slides em: ${pasta}`);
    process.exit(1);
  }
  console.log(`📸 ${slides.length} slides encontrados`);

  // 2. Lê legenda
  const legendaPath = path.join(pasta, 'Legenda.txt');
  let legenda = '';
  if (fs.existsSync(legendaPath)) {
    const raw = fs.readFileSync(legendaPath, 'utf8');
    const match = raw.match(/📝 LEGENDA:\n\n([\s\S]+)/);
    let full = match ? match[1].trim() : raw.trim();
    // Remove tudo após o separador --- (notas internas do Leo etc)
    legenda = full.split(/\n\s*---/)[0].trim();
    console.log('📝 Legenda carregada');
  } else {
    console.warn('⚠️  Legenda.txt não encontrada');
  }

  // 3. Upload para Imgur
  console.log('\n☁️  Fazendo upload para Imgur...');
  const imageUrls = [];
  for (const slide of slides) {
    const filename = path.basename(slide);
    process.stdout.write(`  → ${filename} ... `);
    const url = await uploadImgur(slide);
    imageUrls.push(url);
    console.log('✅', url);
    await sleep(500);
  }

  // 4. Cria containers no Instagram
  console.log('\n📤 Criando containers no Instagram...');
  const childIds = [];
  for (let i = 0; i < imageUrls.length; i++) {
    const filename = path.basename(slides[i]);
    process.stdout.write(`  → ${filename} ... `);
    const result = await graphPost(`${IG_ID}/media`, {
      image_url: imageUrls[i],
      is_carousel_item: true
    });
    if (!result.id) {
      // retry once
      console.log('\n  ⚠️  Tentando novamente...');
      await sleep(4000);
      const retry = await graphPost(`${IG_ID}/media`, {
        image_url: imageUrls[i],
        is_carousel_item: true
      });
      if (!retry.id) {
        console.error(`\n❌ Erro:`, JSON.stringify(retry));
        throw new Error('Falha ao criar container');
      }
      result.id = retry.id;
    }
    childIds.push(result.id);
    console.log('✅', result.id);
    await sleep(1500);
  }

  // 5. Cria carrossel
  console.log('\n🎠 Criando carrossel...');
  const carousel = await graphPost(`${IG_ID}/media`, {
    media_type: 'CAROUSEL',
    children: childIds.join(','),
    caption: legenda,
    collaborators: [COLLABORATOR]
  });

  if (!carousel.id) {
    console.error('❌ Erro ao criar carrossel:', JSON.stringify(carousel));
    process.exit(1);
  }
  console.log(`  ✅ Container: ${carousel.id}`);

  // 6. Publica
  console.log('\n🚀 Publicando...');
  await sleep(2000);
  const pub = await graphPost(`${IG_ID}/media_publish`, {
    creation_id: carousel.id
  });

  if (pub.id) {
    console.log(`\n✅ PUBLICADO com sucesso!`);
    console.log(`  Post ID: ${pub.id}`);
    console.log(`  Conta: @frank.b2b`);
    console.log(`  Collab: @vaianuncioai`);
  } else {
    console.error('❌ Erro ao publicar:', JSON.stringify(pub));
    process.exit(1);
  }
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
