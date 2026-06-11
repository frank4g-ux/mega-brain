# SOP — Integração NossoCRM por Etapa do Processo

> Este documento define **o que fazer no CRM em cada momento** do funil,
> do primeiro contato até o cliente ativo no mês 3+.

---

## ESTRUTURA DO BOARD (padrão para todos os clientes)

```
🟡 Novo Lead → 📞 Tentativa de Contato → 💬 Em Conversa → 📅 Consulta Agendada → ✅ Fechado → ❌ Perdido
```

---

## MAPA: SKILL → AÇÃO NO CRM

### 1. /prospectar — Primeiro contato enviado

| Evento | Ação no CRM |
|--------|-------------|
| Bruno enviou primeira mensagem para o lead | Criar card → coluna **🟡 Novo Lead** |
| Lead não respondeu em 48h | Adicionar nota: "D0 — sem resposta. Nurture D2 agendado." |
| Lead respondeu com interesse | Mover para **📞 Tentativa de Contato** + nota com o que disse |

**Campos obrigatórios no card:**
- Nome do lead / empresa
- Nicho
- Cidade
- Canal de origem (Instagram, Google Maps, indicação...)
- Data do primeiro contato

---

### 2. /nurture — Follow-up automático

| Evento | Ação no CRM |
|--------|-------------|
| Mensagem D2 enviada | Nota na timeline: "D2 — nurture enviado" |
| Mensagem D5 enviada | Nota: "D5 — nurture enviado" |
| Lead responde em qualquer ponto | Mover para **💬 Em Conversa** + nota com resposta |
| Lead chega ao D21 sem resposta | Mover para **❌ Perdido** + nota: "Nurture esgotado — sem resposta em 21 dias" |

---

### 3. /reuniao-vendas — Reunião agendada

| Evento | Ação no CRM |
|--------|-------------|
| Lead confirmou data/hora da reunião | Mover para **💬 Em Conversa** + nota: "Reunião agendada para DD/MM às HH:00" |
| Reunião realizada | Adicionar nota com: objeções levantadas, pacote de interesse, próximo passo combinado |
| Lead pediu proposta | Nota: "Proposta solicitada — enviando em 24h" |
| Lead não compareceu | Nota: "No-show. Follow-up agendado para D+1" |

---

### 4. /proposta — Proposta enviada

| Evento | Ação no CRM |
|--------|-------------|
| Proposta enviada | Nota: "Proposta enviada — [pacote] R$[X]/mês" + data de follow-up |
| Lead visualizou/confirmou recebimento | Nota com feedback inicial se houver |
| Lead pediu desconto ou condição especial | Nota com o que pediu + decisão tomada |
| Lead fechou | Mover para **✅ Fechado** + alterar valor do card para o MRR do pacote |
| Lead recusou | Mover para **❌ Perdido** + nota com motivo |

**Campos a preencher ao fechar:**
- Pacote contratado (Starter / Growth / Máquina)
- MRR (R$1.500 / R$2.500 / R$3.500)
- Setup cobrado (R$0 / R$1.000 / R$2.000)
- Data de início do contrato
- Data prevista de término (3 meses)

---

### 5. Onboarding — Cliente ativo

> Quando o lead vira cliente, o card no board de prospecção não some —
> ele vai para **✅ Fechado**. O acompanhamento mensal acontece
> em um **board separado por cliente** (criado no onboarding).

**Board do cliente ativo (criado no kickoff):**
```
📋 Backlog → 🔧 Em Andamento → ✅ Entregue → 📌 Recorrente
```

| Etapa | Ação no CRM do cliente |
|-------|------------------------|
| Kickoff realizado | Card: "Kickoff Mês 1 — [data]" → Entregue |
| Pixel + GTM instalados | Card: "Rastreamento" → Entregue |
| LP no ar | Card: "Landing Page" → Entregue |
| Campanha ativa | Card: "Campanha Mês 1" → Entregue |
| Relatório semanal enviado | Card recorrente: "Relatório Semana [N]" → Entregue |
| Reunião Dia 30 realizada | Card: "Reunião Dia 30 — Resultado + Upsell" → Entregue |

---

### 6. Sofia (Pacote Máquina) — Automático via Webhook

Quando o webhook está configurado, a Sofia cria cards **automaticamente** no CRM do cliente.

| Evento | Ação automática |
|--------|----------------|
| Lead inicia conversa no WhatsApp | Card criado em **🟡 Novo Lead** com nome e contato |
| Lead informa interesse em procedimento | Nota adicionada: procedimento de interesse |
| Lead manifesta intenção de agendar | Card movido para **📅 Consulta Agendada** |

> Papel do humano (recepcionista): confirmar o horário e mover para **✅ Fechado** após consulta realizada.

---

## REGRAS GERAIS DO CRM

1. **Todo lead que chega entra no CRM no mesmo dia** — sem exceção
2. **Toda nota deve ter data** — para reconstruir o histórico se necessário
3. **Nunca deletar card** — mover para Perdido com motivo documentado
4. **Atualizar valor do card** ao fechar — permite calcular MRR total no dashboard
5. **Card de follow-up pendente** = sempre deixar uma nota de "próximo passo + data"

---

## ACESSO RÁPIDO — NOSSOCRM

- URL padrão: `https://[cliente].vercel.app`
- Login: email configurado no wizard de instalação
- API Key: gerada em Configurações → API (formato: `ncrm_xxxx`)
- Deploy central: nossocrm-nine-rho.vercel.app (instância de demo/referência)
