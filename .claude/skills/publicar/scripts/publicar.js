/**
 * /publicar — VaiAnuncio Instagram Publisher
 * Posta carrossel no @frank.b2b com @vaianuncioai como colaborador
 *
 * Uso:
 *   node publicar.js --pasta "C:\...\gerados\20"
 *   node publicar.js --pasta "C:\...\gerados\20" --agendar "2026-03-20T18:00:00"
 */

const http    = require('http');
const https   = require('https');
const fs      = require('fs');
const path    = require('path');
const { execSync, spawn } = require('child_process');

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const ENV_PATH = path.join(__dirname, '..', '.env');
const env = {};
fs.readFileSync(ENV_PATH, 'utf8').split('\n').forEach(line => {
  const m = line.match(/^([A-Z_]+)=(.+)/);
  if (m) env[m[1]] = m[2].trim();
});

const IG_ID        = env.IG_FRANK_ID;          // quem posta
const PAGE_TOKEN   = env.PAGE_FRANK_TOKEN;     // token da Page
const COLLABORATOR = 'vaianuncioai';           // collab username

const GRAPH = 'https://graph.facebook.com/v25.0';

// ─── ARGS ─────────────────────────────────────────────────────────────────────

const args    = process.argv.slice(2);
const getArg  = n => { const i = args.indexOf(n); return i !== -1 ? args[i+1] : null; };

const pasta     = getArg('--pasta');
const agendar   = getArg('--agendar'); // ISO string ex: "2026-03-20T18:00:00"

if (!pasta) { console.error('❌ --pasta é obrigatório'); process.exit(1); }
if (!fs.existsSync(pasta)) { console.error(`❌ Pasta não encontrada: ${pasta}`); process.exit(1); }

// ─── HTTP HELPERS ─────────────────────────────────────────────────────────────

function post(url, body) {
  return new Promise((res, rej) => {
    const data = JSON.stringify(body);
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname, port: 443,
      path: u.pathname + u.search, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    });
    req.on('error', rej);
    req.write(data); req.end();
  });
}

function get(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    }).on('error', rej);
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── TUNNEL (localtunnel) ──────────────────────────────────────────────────────

async function startTunnel(port) {
  console.log('🔗 Iniciando tunnel público para servir imagens...');
  return new Promise((res, rej) => {
    // Instala localtunnel se necessário
    try { require.resolve('localtunnel'); } catch {
      console.log('  📦 Instalando localtunnel...');
      execSync('npm install localtunnel --prefix "' + path.join(__dirname, '..') + '"', { stdio: 'pipe' });
    }
    const lt = require(path.join(__dirname, '..', 'node_modules', 'localtunnel'));
    lt({ port }).then(tunnel => {
      console.log(`  ✅ Tunnel: ${tunnel.url}`);
      res(tunnel);
    }).catch(rej);
  });
}

// ─── LOCAL HTTP SERVER ────────────────────────────────────────────────────────

function startServer(dir, port) {
  const server = http.createServer((req, res) => {
    const filePath = path.join(dir, decodeURIComponent(req.url.slice(1)));
    if (!fs.existsSync(filePath)) { res.writeHead(404); res.end(); return; }
    const ext = path.extname(filePath).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.jpg' ? 'image/jpeg' : 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  });
  return new Promise(res => server.listen(port, () => res(server)));
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  // 1. Coleta slides
  const slides = fs.readdirSync(pasta)
    .filter(f => f.match(/^Slide-\d+.*\.png$/i))
    .sort()
    .map(f => path.join(pasta, f));

  if (slides.length < 2) {
    console.error(`❌ Menos de 2 slides encontrados em: ${pasta}`);
    process.exit(1);
  }
  console.log(`📸 ${slides.length} slides encontrados`);

  // 2. Lê legenda
  const legendaPath = path.join(pasta, 'Legenda.txt');
  let legenda = '';
  if (fs.existsSync(legendaPath)) {
    const raw = fs.readFileSync(legendaPath, 'utf8');
    // Extrai só o bloco da legenda (depois de "📝 LEGENDA:")
    const match = raw.match(/📝 LEGENDA:\n\n([\s\S]+)/);
    legenda = match ? match[1].trim() : raw.trim();
  } else {
    console.warn('⚠️  Legenda.txt não encontrada — postando sem caption');
  }

  // 3. Sobe servidor local + tunnel
  const PORT = 19876;
  const server = await startServer(pasta, PORT);
  let tunnel;
  try {
    tunnel = await startTunnel(PORT);
  } catch (e) {
    server.close();
    console.error('❌ Tunnel falhou:', e.message);
    console.error('💡 Tenta instalar ngrok e usar --tunnel-url manualmente');
    process.exit(1);
  }

  const baseUrl = tunnel.url;

  try {
    // 4. Cria containers para cada slide
    console.log('\n📤 Criando containers de mídia...');
    const childIds = [];
    for (const slide of slides) {
      const filename = path.basename(slide);
      const imageUrl = `${baseUrl}/${encodeURIComponent(filename)}`;
      console.log(`  → ${filename}`);

      const result = await post(`${GRAPH}/${IG_ID}/media`, {
        image_url: imageUrl,
        is_carousel_item: true,
        access_token: PAGE_TOKEN
      });

      if (!result.id) {
        console.error(`  ❌ Erro no slide ${filename}:`, JSON.stringify(result));
        throw new Error('Falha ao criar container de mídia');
      }
      childIds.push(result.id);
      await sleep(500);
    }
    console.log(`  ✅ ${childIds.length} containers criados`);

    // 5. Cria container do carrossel
    console.log('\n🎠 Criando carrossel...');
    const carouselBody = {
      media_type: 'CAROUSEL',
      children: childIds.join(','),
      caption: legenda,
      collaborators: [COLLABORATOR],
      access_token: PAGE_TOKEN
    };

    if (agendar) {
      const ts = Math.floor(new Date(agendar).getTime() / 1000);
      carouselBody.published = false;
      carouselBody.scheduled_publish_time = ts;
      console.log(`  📅 Agendando para: ${agendar}`);
    }

    const carousel = await post(`${GRAPH}/${IG_ID}/media`, carouselBody);
    if (!carousel.id) {
      console.error('❌ Erro ao criar carrossel:', JSON.stringify(carousel));
      throw new Error('Falha ao criar container do carrossel');
    }
    console.log(`  ✅ Carrossel container: ${carousel.id}`);

    // 6. Publica
    if (!agendar) {
      console.log('\n🚀 Publicando...');
      await sleep(2000);
      const pub = await post(`${GRAPH}/${IG_ID}/media_publish`, {
        creation_id: carousel.id,
        access_token: PAGE_TOKEN
      });
      if (pub.id) {
        console.log(`\n✅ PUBLICADO com sucesso!`);
        console.log(`  Post ID: ${pub.id}`);
        console.log(`  Conta: @frank.b2b`);
        console.log(`  Collab: @vaianuncioai`);
      } else {
        console.error('❌ Erro ao publicar:', JSON.stringify(pub));
      }
    } else {
      console.log(`\n✅ AGENDADO com sucesso!`);
      console.log(`  Container ID: ${carousel.id}`);
      console.log(`  Horário: ${agendar}`);
      console.log(`  Conta: @frank.b2b | Collab: @vaianuncioai`);
    }

  } finally {
    tunnel.close();
    server.close();
  }
}

main().catch(e => {
  console.error('❌', e.message);
  process.exit(1);
});
