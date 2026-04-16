/**
 * Sofia → NossoCRM Webhook
 * Recebe onCreateEvent do GPTMaker e cria deal automaticamente no NossoCRM.
 *
 * Env vars necessárias (configurar no Vercel):
 *   NOSSOCRM_URL       → ex: https://nossocrm-cliente.vercel.app
 *   NOSSOCRM_API_KEY   → chave gerada em Configurações → API do NossoCRM do cliente
 *   BOARD_KEY          → chave do board odonto (ex: "odonto" ou "clinica-marcos")
 *   STAGE_LABEL        → nome exato da coluna destino (ex: "Consulta Agendada")
 *   WEBHOOK_SECRET     → segredo opcional para validar que veio do GPTMaker
 */

const NOSSOCRM_URL   = process.env.NOSSOCRM_URL;
const API_KEY        = process.env.NOSSOCRM_API_KEY;
const BOARD_KEY      = process.env.BOARD_KEY      || 'odonto';
const STAGE_LABEL    = process.env.STAGE_LABEL    || 'Consulta Agendada';
const SECRET         = process.env.WEBHOOK_SECRET || '';

// ── helpers ──────────────────────────────────────────────────────────────────

function extractLeadData(payload) {
  // GPTMaker pode enviar em formatos diferentes dependendo da versão
  // Tentamos extrair nome, telefone e observações de múltiplos campos
  const name  = payload.name
             || payload.contact_name
             || payload.customer_name
             || payload.lead_name
             || 'Lead via Sofia';

  const phone = payload.phone
             || payload.contact_phone
             || payload.customer_phone
             || payload.whatsapp
             || payload.from
             || '';

  const email = payload.email
             || payload.contact_email
             || '';

  // Data/hora preferida que a Sofia coletou
  const scheduledDate = payload.scheduledDate
                     || payload.scheduled_date
                     || payload.event_date
                     || payload.date
                     || '';

  // Contexto da conversa
  const notes = [
    scheduledDate ? `Horário preferido: ${scheduledDate}` : '',
    payload.summary  ? `Resumo: ${payload.summary}`  : '',
    payload.message  ? `Última msg: ${payload.message}` : '',
    payload.interest ? `Interesse: ${payload.interest}` : '',
  ].filter(Boolean).join('\n') || 'Lead agendado via Sofia (IA WhatsApp)';

  return { name, phone, email, notes };
}

async function getStageId(boardKey, stageLabel) {
  const res = await fetch(`${NOSSOCRM_URL}/api/public/v1/boards/${boardKey}/stages`, {
    headers: { 'X-Api-Key': API_KEY }
  });
  if (!res.ok) throw new Error(`Stages fetch failed: ${res.status}`);
  const json = await res.json();
  const stages = json.data || [];
  const match = stages.find(s =>
    (s.label || '').toLowerCase().trim() === stageLabel.toLowerCase().trim()
  );
  return match?.id || null;
}

async function createDeal({ title, phone, email, notes, stageId }) {
  const body = {
    title,
    board_key: BOARD_KEY,
    ...(stageId ? { stage_id: stageId } : {}),
    contact: {
      name: title,
      ...(phone ? { phone } : {}),
      ...(email ? { email } : {}),
    },
  };

  const res = await fetch(`${NOSSOCRM_URL}/api/public/v1/deals`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
    body:    JSON.stringify(body),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(json));
  return json.data;
}

// ── handler principal ─────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // Apenas POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validação de segredo (opcional)
  if (SECRET) {
    const incoming = req.headers['x-webhook-secret'] || req.headers['authorization'] || '';
    if (incoming !== SECRET && incoming !== `Bearer ${SECRET}`) {
      console.warn('[sofia-webhook] secret inválido');
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }

  // Configuração obrigatória
  if (!NOSSOCRM_URL || !API_KEY) {
    console.error('[sofia-webhook] NOSSOCRM_URL ou NOSSOCRM_API_KEY não configurados');
    return res.status(500).json({ error: 'Webhook não configurado corretamente' });
  }

  const payload = req.body || {};
  console.log('[sofia-webhook] payload recebido:', JSON.stringify(payload));

  try {
    const { name, phone, email, notes } = extractLeadData(payload);

    // Buscar ID da coluna destino
    let stageId = null;
    try {
      stageId = await getStageId(BOARD_KEY, STAGE_LABEL);
      if (!stageId) console.warn(`[sofia-webhook] stage "${STAGE_LABEL}" não encontrado — usando primeiro stage`);
    } catch (e) {
      console.warn('[sofia-webhook] erro ao buscar stages:', e.message);
    }

    // Criar deal no NossoCRM
    const deal = await createDeal({ title: name, phone, email, notes, stageId });

    console.log(`[sofia-webhook] deal criado: ${deal.id} — "${deal.title}"`);
    return res.status(200).json({ ok: true, deal_id: deal.id, title: deal.title });

  } catch (err) {
    console.error('[sofia-webhook] erro:', err.message);
    return res.status(500).json({ error: err.message });
  }
}
