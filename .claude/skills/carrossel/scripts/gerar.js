/**
 * Gerador de Carrossel — VaiAnuncio
 * Formato: 1080x1350 (4:5 portrait) — máximo engajamento Instagram
 * Viewport: 540x675 × deviceScaleFactor 2 = 1080x1350
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Parse args
const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(name);
  return idx !== -1 ? args[idx + 1] : null;
};

const tema    = getArg('--tema') || 'carrossel';
const slidesJson = getArg('--slides');
const imagemCapa = getArg('--imagem-capa') || null;
const imagemDark = getArg('--imagem-dark') || null;
const imagemCta  = getArg('--imagem-cta')  || null;
const legenda    = getArg('--legenda') || null;

if (!slidesJson) {
  console.error('❌ Parâmetro --slides é obrigatório');
  process.exit(1);
}

const slides = JSON.parse(slidesJson);
// Preserva nome descritivo da pasta (ex: "Postar no dia 19 - 18h - IA Clinicas")
const slug = tema.replace(/[<>:"/\\|?*\n\r]/g, '').trim();
const outputDir = `C:\\Users\\FranSa\\Pictures\\carrossel\\gerados\\${slug}`;
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Converte imagem local para base64
function imgToBase64(imgPath) {
  if (!imgPath || !fs.existsSync(imgPath)) return null;
  const ext = path.extname(imgPath).slice(1).replace('jpg', 'jpeg');
  const data = fs.readFileSync(imgPath).toString('base64');
  return `data:image/${ext};base64,${data}`;
}

const b64Capa = imgToBase64(imagemCapa);
const b64Dark = imgToBase64(imagemDark);
const b64Cta  = imgToBase64(imagemCta);

const BRAND = {
  teal:    '#65c2cd',
  black:   '#1A1A1A',
  darkBg:  '#0d0d0d',
  lightBg: '#f0f0f0',
  h1:      '@vaianuncioai',
  h2:      '@frank.B2B',
};

// ─── COMPONENTES REUTILIZÁVEIS ────────────────────────────────────────────────

const header = (dark = true) => `
  <div class="header">
    <div>
      <span class="ht">Marketing educative</span>
      <span class="hs">Conteúdo elaborado com IA</span>
    </div>
    <div style="text-align:right">
      <span class="ht">Copyright © 2026</span>
      <span class="hs">${BRAND.h2}</span>
    </div>
  </div>`;

const pills = (arrasta = true, dark = true) => `
  <div class="footer">
    <div class="pills">
      <span class="pill pt">${BRAND.h1}</span>
      <span class="pill pb">${BRAND.h2}</span>
    </div>
    ${arrasta ? `<span class="arr">Arrasta para o lado &gt;</span>` : ''}
  </div>`;

// Estilos base — 4:5 (540×675)
const base = (bg, fg) => `
  *{margin:0;padding:0;box-sizing:border-box}
  body{
    width:540px;height:675px;
    background:${bg};color:${fg};
    font-family:'Inter','Segoe UI',Arial,sans-serif;
    display:flex;flex-direction:column;
    position:relative;overflow:hidden;
  }
  .header{
    display:flex;justify-content:space-between;align-items:flex-start;
    padding:20px 26px 0;
  }
  .ht{display:block;font-size:10px;font-weight:600;opacity:.65;}
  .hs{display:block;font-size:9px;opacity:.45;margin-top:1px;}
  .footer{
    display:flex;justify-content:space-between;align-items:center;
    padding:0 26px 22px;margin-top:auto;
  }
  .pills{display:flex;gap:8px;}
  .pill{padding:7px 16px;border-radius:50px;font-size:12px;font-weight:700;}
  .pt{background:${BRAND.teal};color:#fff;}
  .pb{background:${BRAND.black};color:#fff;}
  .arr{font-size:11px;opacity:.45;}
`;

// ─── TEMPLATES ────────────────────────────────────────────────────────────────

// Slide 1 — Capa (information gap)
function slideCapa(d) {
  const bg = b64Capa
    ? `url('${b64Capa}') center/cover no-repeat`
    : `linear-gradient(160deg,#0d1b2a 0%,#1b2838 50%,#0f3460 100%)`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    ${base(BRAND.darkBg,'#fff')}
    body{background:${bg};}
    body::after{
      content:'';position:absolute;inset:0;
      background:linear-gradient(to top,rgba(0,0,0,.88) 0%,rgba(0,0,0,.3) 55%,transparent 100%);
    }
    .c{
      position:absolute;bottom:90px;left:0;right:0;
      padding:0 30px;z-index:2;text-align:center;
    }
    .tag{
      display:inline-block;background:${BRAND.teal};color:#fff;
      padding:5px 14px;border-radius:50px;font-size:11px;font-weight:700;
      margin-bottom:14px;letter-spacing:.3px;
    }
    .hook{font-size:36px;font-weight:900;line-height:1.15;letter-spacing:-.5px;}
    .hook em{color:${BRAND.teal};font-style:normal;}
    .sub{font-size:11px;opacity:.6;margin-top:12px;}
    .footer{position:absolute;bottom:0;left:0;right:0;z-index:2;}
  </style></head><body>
    <div class="c">
      <div class="tag">${BRAND.h1}</div>
      <div class="hook">${d.hook}</div>
      <div class="sub">${BRAND.h2}</div>
    </div>
    ${pills(true)}
  </body></html>`;
}

// Slides dark (2, 3, 4)
function slideDark(d, showImg = false) {
  if (showImg) {
    // Layout com imagem: imagem no topo, texto centralizado abaixo
    const imgContent = b64Dark
      ? `<img src="${b64Dark}" style="width:100%;height:100%;object-fit:cover;display:block;"/>`
      : '';
    const imgBg = b64Dark ? '' : 'background:#1a1a1a;';
    return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      ${base(BRAND.darkBg,'#fff')}
      .img-w{height:245px;overflow:hidden;flex-shrink:0;margin-top:10px;${imgBg}}
      .c{padding:18px 32px 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
      .hl{font-size:30px;font-weight:900;line-height:1.15;margin-bottom:16px;letter-spacing:-.3px;}
      .hl em{color:${BRAND.teal};font-style:normal;}
      .bd{font-size:17px;line-height:1.7;opacity:.88;}
      .bd strong{color:#fff;font-size:19px;}
    </style></head><body>
      ${header(true)}
      <div class="img-w">${imgContent}</div>
      <div class="c">
        <div class="hl">${d.headline}</div>
        <div class="bd">${d.body.replace(/\n/g,'<br>')}</div>
      </div>
      ${pills(true)}
    </body></html>`;
  } else {
    // Layout sem imagem: texto centralizado vertical e horizontal
    return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      ${base(BRAND.darkBg,'#fff')}
      .c{padding:14px 36px 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
      .hl{font-size:34px;font-weight:900;line-height:1.15;margin-bottom:20px;letter-spacing:-.3px;}
      .hl em{color:${BRAND.teal};font-style:normal;}
      .bd{font-size:19px;line-height:1.75;opacity:.88;}
      .bd strong{color:#fff;font-size:21px;}
    </style></head><body>
      ${header(true)}
      <div class="c">
        <div class="hl">${d.headline}</div>
        <div class="bd">${d.body.replace(/\n/g,'<br>')}</div>
      </div>
      ${pills(true)}
    </body></html>`;
  }
}

// Slides light (5, 6, 8, 9)
function slideLight(d, softCta = null, arrasta = true) {
  const ctaBlock = softCta
    ? `<div class="scta">${softCta}</div>` : '';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    ${base(BRAND.lightBg, BRAND.black)}
    .c{padding:14px 36px 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
    .hl{font-size:40px;font-weight:900;line-height:1.05;margin-bottom:22px;letter-spacing:-.8px;}
    .hl em{color:${BRAND.teal};font-style:normal;}
    .bd{font-size:20px;line-height:1.75;color:#333;}
    .bd strong{font-size:22px;color:#111;display:block;margin-bottom:6px;}
    .scta{
      margin:14px 36px 0;
      font-size:18px;font-weight:800;color:${BRAND.black};
      text-align:center;line-height:1.4;
    }
    .arr{color:#999;}
  </style></head><body>
    ${header(false)}
    <div class="c">
      <div class="hl">${d.headline}</div>
      <div class="bd">${d.body.replace(/\n/g,'<br>')}</div>
    </div>
    ${ctaBlock}
    ${pills(arrasta, false)}
  </body></html>`;
}

// Slide 7 — Dado/Estatística (destaque especial)
function slideDado(d) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    ${base(BRAND.lightBg, BRAND.black)}
    .c{padding:16px 32px 0;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
    .num{
      font-size:80px;font-weight:900;color:${BRAND.teal};
      line-height:1;letter-spacing:-2px;margin-bottom:12px;
    }
    .hl{font-size:24px;font-weight:800;margin-bottom:18px;line-height:1.2;}
    .bd{font-size:18px;line-height:1.7;color:#555;max-width:420px;}
    .fonte{
      margin-top:12px;font-size:10px;color:#999;
      border-top:1px solid #ddd;padding-top:8px;width:100%;
    }
    .arr{color:#999;}
  </style></head><body>
    ${header(false)}
    <div class="c">
      <div class="num">${d.numero}</div>
      <div class="hl">${d.headline}</div>
      <div class="bd">${d.body.replace(/\n/g,'<br>')}</div>
      ${d.fonte ? `<div class="fonte">Fonte: ${d.fonte}</div>` : ''}
    </div>
    ${pills(true, false)}
  </body></html>`;
}

// Slide 10 — CTA interativo final
function slideCta(d) {
  const bg = b64Cta
    ? `url('${b64Cta}') center/cover no-repeat`
    : `linear-gradient(160deg,#1a0505 0%,#3d0000 60%,#1a0505 100%)`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    ${base(BRAND.darkBg,'#fff')}
    body{background:${bg};}
    body::after{
      content:'';position:absolute;inset:0;
      background:linear-gradient(to top,rgba(0,0,0,.92) 0%,rgba(0,0,0,.4) 55%,transparent 100%);
    }
    .c{
      position:absolute;bottom:90px;left:0;right:0;
      padding:0 32px;z-index:2;text-align:center;
    }
    .soft{font-size:19px;opacity:.75;margin-bottom:22px;line-height:1.6;letter-spacing:.2px;}
    .cta{font-size:38px;font-weight:900;line-height:1.1;letter-spacing:-.5px;margin-bottom:24px;}
    .cta em{color:${BRAND.teal};font-style:normal;display:block;font-size:44px;}
    .handle-row{display:flex;justify-content:center;gap:10px;margin-top:4px;}
    .htag{padding:8px 20px;border-radius:50px;font-size:13px;font-weight:700;}
    .htag-t{background:${BRAND.teal};color:#fff;}
    .htag-b{background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);}
    .footer{position:absolute;bottom:0;left:0;right:0;z-index:2;}
  </style></head><body>
    <div class="c">
      <div class="soft">${d.texto_suave}</div>
      <div class="cta">${d.cta_bold}</div>
      <div class="handle-row">
        <span class="htag htag-t">${BRAND.h1}</span>
        <span class="htag htag-b">${BRAND.h2}</span>
      </div>
    </div>
  </body></html>`;
}

// ─── RENDER ──────────────────────────────────────────────────────────────────

// Estrutura 7 slides (Leo — sweet spot engajamento + conclusão)
// 1 CAPA → 2 PROBLEMA (dark+img) → 3 AGRAVAMENTO (dark)
// 4 VIRADA (dark) → 5 SOLUÇÃO+DADO (light) → 6 SÍNTESE (light) → 7 CTA
async function render() {
  const htmlSlides = [
    slideCapa(slides[0]),                              // 1 — Capa
    slideDark(slides[1], true),                        // 2 — Problema (dark + imagem)
    slideDark(slides[2], false),                       // 3 — Agravamento (dark)
    slideDark(slides[3], false),                       // 4 — Virada (dark)
    slideDado(slides[4]),                              // 5 — Solução + Dado ⭐
    slideLight(slides[5], slides[5].soft_cta || null), // 6 — Síntese + Soft CTA
    slideCta(slides[6]),                               // 7 — CTA interativo
  ];

  const labels = [
    'capa','problema','agravamento','virada','dado','sintese','cta'
  ];

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // 4:5 — viewport 540×675 × scale 2 = 1080×1350
  await page.setViewport({ width: 540, height: 675, deviceScaleFactor: 2 });

  for (let i = 0; i < htmlSlides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const filename = `Slide-${num}-${labels[i]}.png`;
    const outPath = path.join(outputDir, filename);

    await page.setContent(htmlSlides[i], { waitUntil: 'domcontentloaded', timeout: 15000 });
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: outPath, type: 'png' });
    console.log(`✅ ${filename}`);
  }

  await browser.close();
  console.log(`\n📁 Slides salvos em: ${outputDir}`);
  console.log(`📐 Formato: 1080×1350px (4:5 portrait — otimizado para Instagram)`);

  // Salva Legenda.txt
  if (legenda) {
    const legendaPath = path.join(outputDir, 'Legenda.txt');
    fs.writeFileSync(legendaPath, legenda, 'utf8');
    console.log(`📝 Legenda.txt salva em: ${legendaPath}`);
  }

  // Gera preview.html
  gerarPreview(outputDir, labels, tema);
  console.log(`🌐 Preview: ${path.join(outputDir, 'preview.html')}`);
}

function gerarPreview(dir, labels, tema) {
  const files = labels.map((l, i) => `Slide-${String(i+1).padStart(2,'0')}-${l}.png`);
  const nomes = [
    '01 — Capa','02 — Problema','03 — Agravamento','04 — Virada',
    '05 — Dado / Solução','06 — Síntese + Soft CTA','07 — CTA Final'
  ];

  const thumbs = files.map((f, i) => `
    <div class="thumb ${i===0?'active':''}" onclick="go(${i})" title="${nomes[i]}">
      <img src="${f}" alt="${nomes[i]}">
      <span>${i+1}</span>
    </div>`).join('');

  const html = `<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8">
<title>Preview — ${tema}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#111;color:#fff;font-family:'Segoe UI',Arial,sans-serif;height:100vh;display:flex;flex-direction:column;overflow:hidden}

  /* TOPO */
  header{background:#1a1a1a;border-bottom:1px solid #333;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
  header h1{font-size:15px;font-weight:700;color:#65c2cd;letter-spacing:.3px}
  header span{font-size:12px;color:#666}
  .counter{background:#65c2cd;color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:700}

  /* ÁREA PRINCIPAL */
  .main{flex:1;display:flex;overflow:hidden}

  /* SLIDE CENTRAL — PHONE MOCKUP */
  .stage{flex:1;display:flex;align-items:center;justify-content:center;position:relative;padding:16px}
  .phone-wrap{display:flex;flex-direction:column;align-items:center;gap:10px;}
  .phone{
    width:340px;
    background:#000;border-radius:36px;
    box-shadow:0 0 0 8px #1e1e1e,0 0 0 11px #2e2e2e,0 24px 60px rgba(0,0,0,.9);
    overflow:hidden;position:relative;flex-shrink:0;
  }
  .phone-top{
    height:32px;background:#000;
    display:flex;align-items:center;justify-content:center;
    flex-shrink:0;
  }
  .phone-notch{
    width:90px;height:18px;background:#111;
    border-radius:0 0 14px 14px;
  }
  .phone-screen{
    width:100%;aspect-ratio:4/5;overflow:hidden;position:relative;
  }
  .phone-screen img{width:100%;height:100%;object-fit:cover;display:block;transition:opacity .2s;}
  .phone-bottom{height:24px;background:#000;display:flex;align-items:center;justify-content:center;}
  .phone-bar{width:80px;height:4px;background:#333;border-radius:4px;}

  /* SETAS */
  .arrow{
    position:absolute;top:50%;transform:translateY(-50%);
    width:44px;height:44px;border-radius:50%;
    background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);
    color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;
    transition:background .2s;user-select:none;
  }
  .arrow:hover{background:rgba(101,194,205,.3);border-color:#65c2cd}
  .arrow.left{left:20px}
  .arrow.right{right:20px}

  /* INFO LATERAL */
  .info{width:280px;background:#1a1a1a;border-left:1px solid #2a2a2a;padding:20px;overflow-y:auto;flex-shrink:0}
  .info h2{font-size:12px;color:#65c2cd;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px}
  .slide-name{font-size:16px;font-weight:700;margin-bottom:8px;line-height:1.3}
  .slide-tip{font-size:12px;color:#888;line-height:1.6;margin-bottom:20px}
  .divider{height:1px;background:#2a2a2a;margin:16px 0}
  .stat{margin-bottom:12px}
  .stat-label{font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px}
  .stat-val{font-size:13px;color:#ccc}
  .badge{display:inline-block;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;margin-top:4px}
  .badge-green{background:#1a3a1a;color:#4caf50}
  .badge-teal{background:#0e2e30;color:#65c2cd}
  .badge-orange{background:#3a2000;color:#ff9800}

  /* THUMBNAILS */
  .strip{
    background:#161616;border-top:1px solid #2a2a2a;
    padding:12px 20px;display:flex;gap:8px;overflow-x:auto;flex-shrink:0;
    scrollbar-width:thin;scrollbar-color:#333 transparent;
  }
  .thumb{
    flex-shrink:0;width:44px;cursor:pointer;
    border:2px solid transparent;border-radius:8px;overflow:hidden;
    transition:border-color .2s,transform .2s;position:relative;
  }
  .thumb:hover{transform:translateY(-3px)}
  .thumb.active{border-color:#65c2cd}
  .thumb img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block}
  .thumb span{
    position:absolute;bottom:2px;right:3px;
    font-size:9px;font-weight:700;color:#fff;
    text-shadow:0 1px 3px rgba(0,0,0,.8);
  }

  /* KEYBOARD HINT */
  .kbd{font-size:10px;color:#444;text-align:center;padding:6px;flex-shrink:0}
  kbd{background:#222;border:1px solid #444;border-radius:3px;padding:1px 5px;font-size:9px}
</style>
</head>
<body>

<header>
  <h1>📱 Carrossel Preview — ${tema}</h1>
  <div style="display:flex;align-items:center;gap:12px">
    <span>1080×1350px · 4:5 · Instagram</span>
    <div class="counter" id="ctr">1 / ${files.length}</div>
  </div>
</header>

<div class="main">
  <div class="stage">
    <div class="arrow left" onclick="go(cur-1)">&#8592;</div>
    <div class="phone-wrap">
      <div class="phone">
        <div class="phone-top"><div class="phone-notch"></div></div>
        <div class="phone-screen">
          <img id="main-img" src="${files[0]}" alt="">
        </div>
        <div class="phone-bottom"><div class="phone-bar"></div></div>
      </div>
    </div>
    <div class="arrow right" onclick="go(cur+1)">&#8594;</div>
  </div>

  <div class="info">
    <h2>Análise do Slide</h2>
    <div class="slide-name" id="sname">${nomes[0]}</div>
    <div class="slide-tip" id="stip"></div>
    <div class="divider"></div>
    <div class="stat"><div class="stat-label">Formato</div><div class="stat-val">1080 × 1350px (4:5)</div></div>
    <div class="stat"><div class="stat-label">Engajamento esperado</div><div class="badge badge-teal" id="seng"></div></div>
    <div class="stat"><div class="stat-label">Função</div><div class="badge badge-green" id="sfun"></div></div>
    <div class="divider"></div>
    <div class="stat"><div class="stat-label">Dica de otimização</div><div class="stat-val" id="sdica" style="font-size:12px;color:#888;line-height:1.6"></div></div>
  </div>
</div>

<div class="strip">${thumbs}</div>
<div class="kbd">Navegar: <kbd>←</kbd> <kbd>→</kbd> &nbsp;|&nbsp; Selecionar thumbnail para ir direto</div>

<script>
let cur = 0;
const total = ${files.length};
const files = ${JSON.stringify(files)};
const nomes = ${JSON.stringify(nomes)};
const meta = [
  {eng:'⭐⭐⭐⭐⭐ Crítico',fun:'Para o scroll',tip:'80% do resultado do carrossel vem deste slide. Hook deve criar curiosidade em 0.7s.'},
  {eng:'⭐⭐⭐⭐ Alto',fun:'Nomeia a dor',tip:'Fundo escuro + imagem cinematográfica cria contraste emocional. Headline deve soar como verdade óbvia que o avatar ignorava.'},
  {eng:'⭐⭐⭐⭐ Alto',fun:'Agrava o problema',tip:'Aumenta a urgência sem ser manipulativo. O leitor deve pensar "isso está acontecendo comigo".'},
  {eng:'⭐⭐⭐⭐ Alto',fun:'Virada narrativa',tip:'O ponto de inflexão. Apresenta que existe solução sem entregar tudo. Cria antecipação para os próximos slides.'},
  {eng:'⭐⭐⭐⭐⭐ Boost +27%',fun:'Dado + Solução',tip:'Dado real com número grande em teal + solução direta. Combo de credibilidade e valor — maior gerador de saves.'},
  {eng:'⭐⭐⭐⭐ Alto',fun:'Síntese + Soft CTA',tip:'Resume tudo em uma frase de impacto. Soft CTA captura quem ainda não salvou antes do CTA final.'},
  {eng:'⭐⭐⭐⭐⭐ Conversão',fun:'CTA Interativo',tip:'CTA de comentário converte 20-30% mais que CTA passivo. A pergunta específica reduz fricção para comentar.'},
];

function go(n) {
  cur = ((n % total) + total) % total;
  document.getElementById('main-img').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('main-img').src = files[cur];
    document.getElementById('main-img').style.opacity = 1;
  }, 120);
  document.getElementById('ctr').textContent = (cur+1) + ' / ' + total;
  document.getElementById('sname').textContent = nomes[cur];
  document.getElementById('stip').textContent = '';
  document.getElementById('seng').textContent = meta[cur].eng;
  document.getElementById('sfun').textContent = meta[cur].fun;
  document.getElementById('sdica').textContent = meta[cur].tip;
  document.querySelectorAll('.thumb').forEach((t,i) => t.classList.toggle('active', i===cur));
  document.querySelectorAll('.thumb')[cur].scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') go(cur+1);
  if (e.key === 'ArrowLeft')  go(cur-1);
});

go(0);
</script>
</body></html>`;

  fs.writeFileSync(path.join(dir, 'preview.html'), html, 'utf8');
}

render().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});
