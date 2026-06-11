/**
 * auto-post.js — Upload litterbox + posta carrossel Instagram
 * Uso: node auto-post.js "C:\caminho\para\pasta"
 *
 * Fluxo: upload de cada slide no litterbox → cria containers → publica
 * @frank.b2b com collab @vaianuncioai
 */

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');
const { execFileSync } = require('child_process');

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const IG_ID = '17841458231482202';
const TOKEN = 'EAAh70i0tCZBABQyzrFq0cp0bz8AkpPuG74FainxLmdsjoOx3Qg62z1CZBNXOvqRWXclINrZBZCEUs9999GCj7Ha2QeTQkO8RIeZC7Ee5qWymhc3xYmOnMwqHdyEHeRZAZB74EmvflW6THhHz7hzcp5LS8AeQphn98itAIXMTcIQCGLlZCQwghAEFJrY4hPyZCR8miAxJossIpUZB3Cb3mqRZAup3H3j';
const GRAPH = 'https://graph.facebook.com/v25.0';

// ─── ARGS ─────────────────────────────────────────────────────────────────────
const pasta = process.argv[2];
if (!pasta) { console.error('Uso: node auto-post.js "pasta"'); process.exit(1); }
if (!fs.existsSync(pasta)) { console.error('Pasta nao encontrada:', pasta); process.exit(1); }

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function postJson(url, body) {
  return new Promise((res, rej) => {
    const data = JSON.stringify(body);
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname, port: 443,
      path: u.pathname + u.search, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    });
    req.on('error', rej); req.write(data); req.end();
  });
}

function uploadLitterbox(filePath) {
  return new Promise((res, rej) => {
    try {
      const result = execFileSync('curl', [
        '-s',
        '-F', `files[]=@${filePath}`,
        'https://uguu.se/upload.php'
      ], { encoding: 'utf8' });
      const json = JSON.parse(result.trim());
      if (json.success && json.files && json.files[0] && json.files[0].url) {
        res(json.files[0].url);
      } else {
        rej(new Error('uguu.se upload failed: ' + result));
      }
    } catch (e) {
      rej(e);
    }
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  // 1. Slides
  const slides = fs.readdirSync(pasta)
    .filter(f => /^Slide-\d+.*\.png$/i.test(f))
    .sort()
    .map(f => path.join(pasta, f));

  if (slides.length < 2) { console.error('Menos de 2 slides em:', pasta); process.exit(1); }
  console.log(slides.length + ' slides encontrados');

  // 2. Legenda
  const legendaPath = path.join(pasta, 'Legenda.txt');
  let legenda = '';
  if (fs.existsSync(legendaPath)) {
    const raw = fs.readFileSync(legendaPath, 'utf8');
    const m = raw.match(/📝 LEGENDA:\n\n([\s\S]+)/);
    legenda = m ? m[1].trim() : raw.trim();
  }

  // 3. Upload litterbox
  console.log('\nUpload das imagens...');
  const urls = [];
  for (const slide of slides) {
    const url = await uploadLitterbox(slide);
    if (!url.startsWith('https://')) { console.error('Upload falhou:', url); process.exit(1); }
    console.log('  OK', path.basename(slide), '->', url);
    urls.push(url);
    await sleep(300);
  }

  // 4. Containers
  console.log('\nCriando containers...');
  const childIds = [];
  for (const url of urls) {
    const r = await postJson(GRAPH + '/' + IG_ID + '/media', {
      image_url: url, is_carousel_item: true, access_token: TOKEN
    });
    if (!r.id) { console.error('Container falhou:', JSON.stringify(r)); process.exit(1); }
    childIds.push(r.id);
    await sleep(500);
  }
  console.log('  OK', childIds.length + ' containers');

  // 5. Carrossel
  console.log('\nCriando carrossel...');
  const carousel = await postJson(GRAPH + '/' + IG_ID + '/media', {
    media_type: 'CAROUSEL',
    children: childIds.join(','),
    caption: legenda,
    collaborators: ['vaianuncioai'],
    access_token: TOKEN
  });
  if (!carousel.id) { console.error('Carrossel falhou:', JSON.stringify(carousel)); process.exit(1); }
  console.log('  OK ID:', carousel.id);

  // 6. Publica
  await sleep(2000);
  console.log('\nPublicando...');
  const pub = await postJson(GRAPH + '/' + IG_ID + '/media_publish', {
    creation_id: carousel.id, access_token: TOKEN
  });
  if (!pub.id) { console.error('Publish falhou:', JSON.stringify(pub)); process.exit(1); }

  console.log('\nPUBLICADO COM SUCESSO!');
  console.log('Post ID:', pub.id);
  console.log('@frank.b2b | collab: @vaianuncioai');
}

main().catch(e => { console.error('ERRO:', e.message); process.exit(1); });
