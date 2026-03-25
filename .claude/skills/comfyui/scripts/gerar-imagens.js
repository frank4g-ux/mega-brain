/**
 * ComfyUI Image Generator — VaiAnuncio
 * Gera 3 imagens para o carrossel: capa, dark e cta
 * API: http://127.0.0.1:8188
 */

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');
const { execSync, spawn } = require('child_process');

const COMFY_URL   = 'http://127.0.0.1:8188';
const COMFY_DIR   = 'C:\\Users\\FranSa\\Downloads\\comfyui\\ComfyUI_windows_portable';
const OUTPUT_DIR  = path.join(COMFY_DIR, 'ComfyUI', 'output');
const CHECKPOINT  = 'dreamshaper_8.safetensors';

// Parse args
const args = process.argv.slice(2);
const getArg = (n) => { const i = args.indexOf(n); return i !== -1 ? args[i+1] : null; };

const tema   = getArg('--tema') || 'carrossel';
const mood   = getArg('--mood') || 'cinematic';
const promptsJson = getArg('--prompts');

if (!promptsJson) { console.error('❌ --prompts é obrigatório'); process.exit(1); }

const prompts = JSON.parse(promptsJson);

const NEG = '(worst quality, low quality:1.4), (bad anatomy), text, watermark, logo, ' +
            'signature, blurry, deformed, ugly, out of frame, cropped, extra limbs, ' +
            'bad proportions, jpeg artifacts, nsfw';

// ─── HTTP helpers ─────────────────────────────────────────────────────────────

function httpGet(url) {
  return new Promise((res, rej) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    }).on('error', rej);
  });
}

function httpPost(url, body) {
  return new Promise((res, rej) => {
    const data = JSON.stringify(body);
    const opts = new URL(url);
    const req = http.request({
      hostname: opts.hostname, port: opts.port,
      path: opts.pathname, method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    }, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    });
    req.on('error', rej);
    req.write(data);
    req.end();
  });
}

function downloadFile(url, dest) {
  return new Promise((res, rej) => {
    const file = fs.createWriteStream(dest);
    http.get(url, r => { r.pipe(file); file.on('finish', () => { file.close(); res(dest); }); })
       .on('error', e => { fs.unlink(dest, () => {}); rej(e); });
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── COMFYUI STARTUP ──────────────────────────────────────────────────────────

async function isOnline() {
  try { await httpGet(`${COMFY_URL}/system_stats`); return true; } catch { return false; }
}

async function startComfyUI() {
  if (await isOnline()) { console.log('✅ ComfyUI já está rodando'); return; }

  console.log('🚀 Iniciando ComfyUI...');
  spawn('cmd', ['/c', path.join(COMFY_DIR, 'run_nvidia_gpu.bat')], {
    detached: true, stdio: 'ignore', cwd: COMFY_DIR
  }).unref();

  // Aguarda até 90s
  for (let i = 0; i < 90; i++) {
    await sleep(1000);
    if (await isOnline()) { console.log(`✅ ComfyUI online (${i+1}s)`); return; }
    if (i % 10 === 9) console.log(`⏳ Aguardando ComfyUI... (${i+1}s)`);
  }
  throw new Error('ComfyUI não respondeu em 90 segundos. Abra manualmente e tente de novo.');
}

// ─── WORKFLOW ─────────────────────────────────────────────────────────────────

function buildWorkflow(positivePrompt, prefix, width = 768, height = 960) {
  const seed = Math.floor(Math.random() * 9999999999);
  return {
    "1": {
      "class_type": "CheckpointLoaderSimple",
      "inputs": { "ckpt_name": CHECKPOINT }
    },
    "2": {
      "class_type": "CLIPTextEncode",
      "inputs": {
        "text": positivePrompt,
        "clip": ["1", 1]
      }
    },
    "3": {
      "class_type": "CLIPTextEncode",
      "inputs": {
        "text": NEG,
        "clip": ["1", 1]
      }
    },
    "4": {
      "class_type": "EmptyLatentImage",
      "inputs": { "width": width, "height": height, "batch_size": 1 }
    },
    "5": {
      "class_type": "KSampler",
      "inputs": {
        "model": ["1", 0],
        "positive": ["2", 0],
        "negative": ["3", 0],
        "latent_image": ["4", 0],
        "seed": seed,
        "steps": 20,
        "cfg": 7,
        "sampler_name": "dpmpp_2m_sde",
        "scheduler": "karras",
        "denoise": 1.0
      }
    },
    "6": {
      "class_type": "VAEDecode",
      "inputs": { "samples": ["5", 0], "vae": ["1", 2] }
    },
    "7": {
      "class_type": "SaveImage",
      "inputs": { "images": ["6", 0], "filename_prefix": prefix }
    }
  };
}

// ─── GERAÇÃO ──────────────────────────────────────────────────────────────────

async function gerarImagem(positivePrompt, tipo) {
  const prefix = `carrossel_${tipo}_${Date.now()}`;
  const workflow = buildWorkflow(positivePrompt, prefix);

  console.log(`🎨 Gerando imagem: ${tipo}...`);
  const result = await httpPost(`${COMFY_URL}/prompt`, { prompt: workflow });

  if (!result.prompt_id) throw new Error(`Erro ao enviar prompt: ${JSON.stringify(result)}`);
  const promptId = result.prompt_id;

  // Poll até completar
  for (let i = 0; i < 120; i++) {
    await sleep(2000);
    const history = await httpGet(`${COMFY_URL}/history/${promptId}`);
    if (history[promptId]?.status?.completed) {
      const outputs = history[promptId].outputs;
      const nodeOut = Object.values(outputs).find(o => o.images);
      if (nodeOut) {
        const img = nodeOut.images[0];
        const url = `${COMFY_URL}/view?filename=${img.filename}&subfolder=${img.subfolder || ''}&type=${img.type}`;
        const dest = path.join(OUTPUT_DIR, img.filename);
        if (!fs.existsSync(dest)) await downloadFile(url, dest);
        console.log(`  ✅ ${tipo}: ${img.filename}`);
        return dest;
      }
    }
    if (i % 10 === 9) console.log(`  ⏳ Aguardando geração de "${tipo}"... (${(i+1)*2}s)`);
  }
  throw new Error(`Timeout aguardando imagem: ${tipo}`);
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  await startComfyUI();

  // Prompts enriquecidos com estilo editorial
  const estilo = {
    capa: `${prompts.capa}, editorial photography, cinematic lighting, moody atmosphere, ` +
          `shallow depth of field, professional portrait, high contrast, film grain, 4:5 ratio`,
    dark: `${prompts.dark}, cinematic still photography, dark moody atmosphere, ` +
          `low key lighting, chiaroscuro, professional, high contrast, editorial style`,
    cta:  `${prompts.cta}, dramatic editorial photography, strong rim light, dark background, ` +
          `person with determined expression, high contrast, cinematic, impactful composition`
  };

  const capa = await gerarImagem(estilo.capa, 'capa');
  const dark = await gerarImagem(estilo.dark, 'dark');
  const cta  = await gerarImagem(estilo.cta,  'cta');

  const resultado = { capa, dark, cta };
  console.log('\n📦 Imagens geradas:');
  console.log(JSON.stringify(resultado, null, 2));

  // Salva resultado em arquivo para o gerar.js consumir
  const resultFile = path.join(OUTPUT_DIR, `carrossel_resultado_${Date.now()}.json`);
  fs.writeFileSync(resultFile, JSON.stringify(resultado));
  console.log(`\n📄 Resultado salvo em: ${resultFile}`);
  console.log(`__RESULTADO__:${resultFile}`);
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
