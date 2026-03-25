/**
 * /metricas — VaiAnuncio Instagram Analytics
 * Busca insights dos posts e entrega relatório estratégico
 *
 * Uso:
 *   node metricas.js              → últimos 7 posts
 *   node metricas.js --dias 30    → últimos 30 dias
 *   node metricas.js --post ID    → métricas de um post específico
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

// ─── CONFIG ───────────────────────────────────────────────────────────────────

const ENV_PATH = path.join(__dirname, '..', '..', 'publicar', '.env');
const env = {};
fs.readFileSync(ENV_PATH, 'utf8').split('\n').forEach(line => {
  const m = line.match(/^([A-Z_]+)=(.+)/);
  if (m) env[m[1]] = m[2].trim();
});

const IG_ID      = env.IG_FRANK_ID;
const PAGE_TOKEN = env.PAGE_FRANK_TOKEN;
const GRAPH      = 'https://graph.facebook.com/v25.0';

// ─── ARGS ─────────────────────────────────────────────────────────────────────

const args   = process.argv.slice(2);
const getArg = n => { const i = args.indexOf(n); return i !== -1 ? args[i+1] : null; };
const dias   = parseInt(getArg('--dias') || '30');
const postId = getArg('--post');

// ─── HTTP ─────────────────────────────────────────────────────────────────────

function get(url) {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => { try { res(JSON.parse(d)); } catch { res(d); } });
    }).on('error', rej);
  });
}

function graphGet(endpoint, params = {}) {
  const p = new URLSearchParams({ access_token: PAGE_TOKEN, ...params });
  return get(`${GRAPH}/${endpoint}?${p}`);
}

// ─── FORMATAÇÃO ───────────────────────────────────────────────────────────────

function bar(val, max, len = 20) {
  const n = Math.round((val / Math.max(max, 1)) * len);
  return '█'.repeat(n) + '░'.repeat(len - n);
}

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}

function dataBR(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// ─── MÉTRICAS DE UM POST ──────────────────────────────────────────────────────

async function getPostInsights(mediaId) {
  const metrics = 'saved,reach,impressions,total_interactions,shares';
  const r = await graphGet(`${mediaId}/insights`, { metric: metrics, period: 'lifetime' });
  const result = { saved: 0, reach: 0, impressions: 0, interactions: 0, shares: 0 };
  if (r.data) {
    r.data.forEach(m => {
      if (m.name === 'saved')              result.saved        = m.values?.[0]?.value || 0;
      if (m.name === 'reach')             result.reach        = m.values?.[0]?.value || 0;
      if (m.name === 'impressions')       result.impressions  = m.values?.[0]?.value || 0;
      if (m.name === 'total_interactions')result.interactions = m.values?.[0]?.value || 0;
      if (m.name === 'shares')            result.shares       = m.values?.[0]?.value || 0;
    });
  }
  return result;
}

// ─── RELATÓRIO DE UM POST ─────────────────────────────────────────────────────

async function relatorioPost(post) {
  const ins = await getPostInsights(post.id);
  const likes    = post.like_count    || 0;
  const comments = post.comments_count || 0;
  const saves    = ins.saved;
  const reach    = ins.reach;
  const engRate  = reach > 0 ? (((likes + comments + saves + ins.shares) / reach) * 100).toFixed(1) : '—';

  const caption  = (post.caption || '').split('\n')[0].slice(0, 60);
  const tipo = saves >= likes ? '💾 Save-driver' : comments >= likes ? '💬 Conversa' : '❤️ Like-driver';

  return { post, ins, likes, comments, saves, reach, engRate, caption, tipo };
}

// ─── SCORE DO POST ────────────────────────────────────────────────────────────

function score(r) {
  // Saves valem 3x, comentários 2x, shares 2x, likes 1x
  return r.saves * 3 + r.comments * 2 + r.ins.shares * 2 + r.likes;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n' + '═'.repeat(70));
  console.log('  RELATÓRIO DE MÉTRICAS — @frank.b2b × VaiAnuncio');
  console.log('  Gerado em: ' + new Date().toLocaleString('pt-BR'));
  console.log('═'.repeat(70) + '\n');

  // Post único
  if (postId) {
    const post = await graphGet(postId, {
      fields: 'id,caption,like_count,comments_count,timestamp,permalink'
    });
    const r = await relatorioPost(post);
    printPost(r, 1);
    return;
  }

  // Lista posts recentes
  const since = Math.floor(Date.now() / 1000) - dias * 86400;
  const media = await graphGet(`${IG_ID}/media`, {
    fields: 'id,caption,like_count,comments_count,timestamp,permalink,media_type',
    since,
    limit: 20
  });

  if (!media.data || media.data.length === 0) {
    console.log('Nenhum post encontrado nos últimos', dias, 'dias.');
    return;
  }

  const carrosseis = media.data.filter(p => p.media_type === 'CAROUSEL_ALBUM' || p.media_type === 'IMAGE');
  console.log(`📊 Analisando ${carrosseis.length} posts dos últimos ${dias} dias...\n`);

  const relatorios = [];
  for (const post of carrosseis) {
    process.stdout.write(`  Carregando ${post.id}...`);
    const r = await relatorioPost(post);
    relatorios.push(r);
    process.stdout.write(' ✓\n');
  }

  // Ordena por score
  relatorios.sort((a, b) => score(b) - score(a));

  console.log('\n' + '─'.repeat(70));
  console.log('  RANKING DE PERFORMANCE');
  console.log('─'.repeat(70));

  const maxSaves = Math.max(...relatorios.map(r => r.saves));
  const maxReach = Math.max(...relatorios.map(r => r.reach));

  relatorios.forEach((r, i) => printPost(r, i + 1, maxSaves, maxReach));

  // Totais
  const totalSaves    = relatorios.reduce((a, r) => a + r.saves, 0);
  const totalReach    = relatorios.reduce((a, r) => a + r.reach, 0);
  const totalComments = relatorios.reduce((a, r) => a + r.comments, 0);
  const totalLikes    = relatorios.reduce((a, r) => a + r.likes, 0);
  const avgEng        = relatorios.filter(r => r.engRate !== '—').map(r => parseFloat(r.engRate));
  const mediaEng      = avgEng.length ? (avgEng.reduce((a, b) => a + b, 0) / avgEng.length).toFixed(1) : '—';

  console.log('\n' + '═'.repeat(70));
  console.log('  RESUMO DO PERÍODO');
  console.log('═'.repeat(70));
  console.log(`  Posts analisados:    ${relatorios.length}`);
  console.log(`  Reach total:         ${fmt(totalReach)} pessoas`);
  console.log(`  Saves totais:        ${fmt(totalSaves)}  ← intenção de usar`);
  console.log(`  Comentários totais:  ${fmt(totalComments)}`);
  console.log(`  Likes totais:        ${fmt(totalLikes)}`);
  console.log(`  Engajamento médio:   ${mediaEng}%`);

  // Insights estratégicos
  console.log('\n' + '─'.repeat(70));
  console.log('  INSIGHTS ESTRATÉGICOS (Leo analisa)');
  console.log('─'.repeat(70));

  const melhor = relatorios[0];
  const pior   = relatorios[relatorios.length - 1];

  console.log(`\n  🏆 MELHOR POST: ${melhor.caption}`);
  console.log(`     ${melhor.saves} saves · ${melhor.comments} comentários · Reach ${fmt(melhor.reach)}`);
  console.log(`     → O que funcionou: ${melhor.tipo}`);

  console.log(`\n  📉 MENOR PERFORMANCE: ${pior.caption}`);
  console.log(`     ${pior.saves} saves · ${pior.comments} comentários · Reach ${fmt(pior.reach)}`);

  if (totalSaves / relatorios.length >= 50) {
    console.log(`\n  ✅ Média de saves acima de 50 — conteúdo está gerando intenção real`);
  } else {
    console.log(`\n  ⚠️  Média de saves abaixo de 50 — revisar hook e angle com Leo`);
  }

  if (parseFloat(mediaEng) >= 3) {
    console.log(`  ✅ Engajamento ${mediaEng}% — acima da média de mercado (1-3%)`);
  } else {
    console.log(`  ⚠️  Engajamento ${mediaEng}% — abaixo de 3% → revisar CTA dos slides`);
  }

  console.log('\n' + '═'.repeat(70) + '\n');
}

function printPost(r, pos, maxSaves = r.saves, maxReach = r.reach) {
  console.log(`\n  #${pos} ${r.tipo} — ${dataBR(r.post.timestamp)}`);
  console.log(`  "${r.caption}"`);
  console.log(`  ${r.post.permalink || ''}`);
  console.log(`\n  Saves:        ${bar(r.saves, maxSaves)} ${fmt(r.saves)}`);
  console.log(`  Reach:        ${bar(r.reach, maxReach)} ${fmt(r.reach)}`);
  console.log(`  Comentários:  ${fmt(r.comments)}  |  Likes: ${fmt(r.likes)}  |  Shares: ${fmt(r.ins.shares)}`);
  console.log(`  Engajamento:  ${r.engRate}%`);
  console.log(`  Score Leo:    ${score(r)} pts`);
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
