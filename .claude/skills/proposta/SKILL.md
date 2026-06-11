# SKILL: /proposta
## Gerador de Proposta Comercial VaiAnuncio por Nicho

> **Auto-Trigger:** /proposta, "gerar proposta", "montar proposta", "proposta comercial", "enviar proposta para cliente"
> **Keywords:** proposta, commercial proposal, orçamento, pacote, ROI, apresentação comercial
> **Agente responsável:** Maya (copy) + Kauan + Rodrigo (números de tráfego) + Bruno (contexto do lead)
> **Prioridade:** ALTA

---

## PROPÓSITO

Gerar propostas comerciais personalizadas por nicho que incluem:
- Diagnóstico do problema do cliente
- Solução específica (tráfego + IA)
- Projeção de ROI com base no DPL calculado (framework Justin Brooke)
- Preço + garantia (estrutura Grand Slam Offer do Hormozi)

**Regra do Hormozi:** ticket mínimo R$1.500/mês. Nunca mais R$300.

---

## QUANDO USAR

### ✅ USAR quando:
- Lead passou pela qualificação do Bruno e está pronto para receber proposta
- Fundador vai a uma reunião e precisa de material de apresentação
- Lead pediu "me manda um orçamento"

### ❌ NÃO USAR quando:
- Lead ainda não foi qualificado (usar `/nurture` primeiro)
- Lead disse que não tem interesse
- Não há nicho definido — a proposta é específica por nicho

---

## COMO INVOCAR

```
/proposta --nicho "clínica odonto" --cidade "São Paulo" --ticket-alvo "2500"
/proposta --nicho "elétrica" --cidade "Campinas" --ticket-alvo "1800"
/proposta --nicho "ecommerce" --produto "moda" --ticket-alvo "3000"
/proposta --lead "Nome do Lead" --nicho "X" --contexto "o que Bruno descobriu"
```

---

## ESTRUTURA DA PROPOSTA

A proposta é entregue como documento formatado (pode ser colado no WhatsApp, enviado por email ou salvo como PDF).

---

### BLOCO 1 — DIAGNÓSTICO (personalizado por nicho)

```
════════════════════════════════════════════
PROPOSTA VAIANUNCIO × [NOME DO NEGÓCIO]
Preparada por: Frank · VaiAnuncioAí
Data: [DATA]
════════════════════════════════════════════

📍 O QUE IDENTIFICAMOS NO SEU NEGÓCIO

[Preencher com o que Bruno descobriu na pesquisa. Se não houver, usar
o diagnóstico padrão por nicho abaixo:]

CLÍNICAS:
"A maioria das clínicas perde 40-60% dos leads fora do horário
comercial — ligações, mensagens e WhatsApp que ficam sem resposta
até o dia seguinte. Quando você responde, o paciente já agendou
com o concorrente."

PRESTADORES DE SERVIÇO:
"Serviços de urgência perdem o job no momento em que o cliente liga
e cai na caixa postal. O primeiro a responder fica com o serviço.
Sem atendimento 24h, você está entregando clientes para o concorrente."

E-COMMERCE:
"67% dos carrinhos abandonados nunca recebem follow-up personalizado.
SDR humano não consegue escalar. SDR de IA qualifica e recupera
em minutos, não em dias."
```

---

### BLOCO 2 — A SOLUÇÃO VAIANUNCIO

```
🛠️ O QUE A VAIANUNCIO ENTREGA

[Montar combinação de serviços baseada no nicho e no contexto do lead]

────────────────────────────────────────
PACOTE RECOMENDADO: [NOME DO PACOTE]
────────────────────────────────────────

✅ TRÁFEGO PAGO
   [Escolher baseado no nicho e no DPL calculado:]

   Para CLÍNICAS / PRESTADORES (urgência local):
   → Google Ads Search — captura quem está buscando agora
     (Rodrigo — benchmark: CPA R$25-40, QS>7, CTR>5%)
   → Meta Ads Lead Gen — cria demanda + retargeting
     (Kauan — benchmark: CPL R$20-35, fase aprendizado 7 dias)

   Para E-COMMERCE:
   → Meta Ads Catálogo + Retargeting — ROAS target >3x
     (Kauan — Performance Max opcional com Rodrigo)

✅ IA DE ATENDIMENTO 24H
   → Agente de atendimento no WhatsApp Business
   → Responde perguntas frequentes, agenda consultas/visitas
   → Funciona enquanto você está fechado, dormindo ou atendendo
   → Configuração: 48-72h após onboarding

✅ SDR DE IA (pacotes avançados)
   → Qualifica leads antes do vendedor humano tocar
   → Pergunta as perguntas certas, filtra interessados de curiosos
   → Entrega lead quente direto para o fechamento

✅ RELATÓRIO MENSAL
   → KPIs: CPL, CPA, QS, ROAS, leads gerados, taxa de conversão
   → Baseado nos 4 números (EPC, CPA, AOV, DPL)
   → Reunião de alinhamento mensal com o fundador
```

---

### BLOCO 3 — PROJEÇÃO DE ROI (Framework Justin Brooke)

```
📊 O QUE OS NÚMEROS DIZEM

[Calcular com base nos dados do lead. Se não tiver dados reais, usar
benchmark do nicho e deixar explícito que é estimativa conservadora.]

────────────────────────────────────────
CÁLCULO DO SEU DPL (Dollars Per Lead)
────────────────────────────────────────

Ticket médio do seu serviço:          R$ [X]
Taxa de fechamento estimada:          [Y]%
→ DPL (valor por lead qualificado):  R$ [X × Y/100]

Benchmark de CPL para [nicho]:        R$ [Z] (Meta) / R$ [W] (Google)
→ Margem por lead:                    R$ [DPL - CPL médio]
→ ROI projetado:                      [DPL/CPL médio]x

────────────────────────────────────────
EXEMPLO CONSERVADOR — PRIMEIRO MÊS
────────────────────────────────────────

Investimento em ads:                   R$ [budget mensal]
Leads gerados (estimativa):            [budget ÷ CPL médio]
Taxa de fechamento ([Y]%):             [N] clientes novos
Receita nova estimada:                 R$ [N × ticket]
Custo total (gestão + ads):            R$ [gestão + budget]
→ Retorno estimado sobre investimento: [receita/custo]x

⚠️ Nota: Essas projeções são estimativas baseadas em benchmarks
do nicho. Resultados reais dependem do funil, da qualidade do
atendimento e do mercado local. Trabalhamos com dados reais
após os primeiros 30 dias.
```

---

### BLOCO 4 — INVESTIMENTO + GARANTIA (Grand Slam Offer)

```
💰 INVESTIMENTO

[Apresentar sempre os 3 pacotes. Prospect escolhe. Nunca apresentar só 1.]

────────────────────────────────────────
PACOTE STARTER — R$ 1.500/mês
"Tráfego Inteligente"
────────────────────────────────────────
✅ 1 canal de tráfego pago (Google OU Meta)
✅ Landing page de alta conversão
✅ Pixel + conversão configurados
✅ Relatório mensal com KPIs
✅ Suporte via WhatsApp

PROMESSA: Leads qualificados chegando toda semana
SETUP: Grátis no 1º mês
IDEAL PARA: quem nunca fez tráfego ou quer testar antes de escalar

────────────────────────────────────────
PACOTE GROWTH — R$ 2.500/mês
"Tráfego + CRM"
────────────────────────────────────────
✅ 2 canais de tráfego (Google + Meta)
✅ Landing page de alta conversão
✅ CRM configurado pro seu negócio (funil + tags + campos do nicho)
✅ Treinamento nas 3 abas principais do CRM (1h)
✅ Relatório mensal + reunião de alinhamento
✅ Suporte prioritário

PROMESSA: Você não perde mais nenhum lead
SETUP: R$1.000 (único)
IDEAL PARA: quem já sabe que perde lead e quer organizar a operação

────────────────────────────────────────
PACOTE MÁQUINA DE CLIENTES — R$ 3.500/mês
────────────────────────────────────────
✅ Tudo do Growth
✅ Agente de IA 24h no WhatsApp
   → Responde cada lead em < 2 minutos
   → Qualifica, agenda e filtra automaticamente
   → Funciona enquanto você dorme
✅ Integração IA → CRM (lead entra automático)
✅ Reunião quinzenal de performance

PROMESSA: Atende, qualifica e fecha no piloto automático
SETUP: R$2.000 (único)
IDEAL PARA: quem quer crescer sem contratar mais pessoas

────────────────────────────────────────
GARANTIA (todos os pacotes)
────────────────────────────────────────
Se nos primeiros 30 dias os resultados ficarem abaixo do
benchmark mínimo do nicho (CPL ou CPA), trabalhamos mais
30 dias sem custo de gestão.

Somos pagos para gerar resultado — não para ter reunião.
```

---

### BLOCO 5 — PRÓXIMOS PASSOS

```
🚀 COMO COMEÇAR

1. Confirmar o pacote escolhido
2. Assinatura do contrato (enviado em até 24h)
3. Pagamento do setup (se aplicável) para liberar o onboarding
4. Onboarding em até 48h após contrato assinado:
   - Acesso à conta de ads (Google + Meta)
   - Instalação do Pixel + GTM (se ainda não tiver)
   - Configuração do agente de IA no WhatsApp (Máquina)

────────────────────────────────────────
TIMELINE POR PACOTE
────────────────────────────────────────

STARTER
→ Dia 1-2: Setup LP + Pixel + GTM
→ Dia 3-4: Campanha configurada e revisada
→ Dia 5:   Campanha no ar
→ Dia 7-14: Primeiros leads chegando

GROWTH
→ Dia 1-2: Setup LP + Pixel + GTM + CRM
→ Dia 3-4: Google Ads + Meta Ads configurados
→ Dia 5:   Campanhas no ar
→ Dia 5-7: Treinamento CRM (1h)
→ Dia 7-14: Primeiros leads no CRM

MÁQUINA DE CLIENTES
→ Dia 1-2: Setup LP + Pixel + GTM + CRM
→ Dia 3-4: Google Ads + Meta Ads configurados
→ Dia 3-4: Agente de IA configurado e integrado ao CRM
→ Dia 5:   Tudo no ar — leads entram, IA atende, CRM registra
→ Dia 7-14: Primeiros leads qualificados automaticamente

⚡ Benchmark: clientes com setup completo geram os primeiros
leads entre o 7º e o 14º dia. Otimizações acontecem nas
semanas 2 e 3 com base nos dados reais.

Para confirmar ou tirar dúvidas:
📱 WhatsApp: (11) 96014-5026 (agência) / (11) 99897-6931 (Frank)
🌐 vaianuncioai.com

Frank · VaiAnuncioAí
```

---

## TABELA DE REFERÊNCIA — BENCHMARKS POR NICHO

| Nicho | CPL Meta | CPA Google | Budget mínimo | Pacote sugerido |
|-------|----------|------------|---------------|-----------------|
| Clínica odonto / estética | R$20-35 | R$25-45 | R$60/dia | Crescimento+ |
| Prestador de urgência | R$15-25 | R$20-40 | R$50/dia | Starter+ |
| E-commerce moda/calçados | R$25-40 | R$30-50 | R$80/dia | Crescimento+ |
| Consultório médico | R$30-50 | R$35-60 | R$70/dia | Crescimento+ |
| Academia / wellness | R$15-30 | R$20-40 | R$50/dia | Starter+ |

---

## REGRAS

1. **Ticket mínimo: R$1.500/mês** — nunca abaixo (Hormozi)
2. **Sempre incluir cálculo de ROI** — mesmo que estimado (Justin)
3. **Personalizar com dado real do lead** — se Bruno pesquisou, usar (Brunson)
4. **Garantia sempre presente** — reduz risco percebido e aumenta conversão
5. **Nunca prometer resultado exato** — usar "estimativa baseada em benchmarks"
6. **Kauan e Rodrigo revisam os benchmarks de tráfego** antes de enviar proposta com números

---

## TEMPLATES DE E-MAIL

Quando o prospect pedir para receber a proposta por e-mail, usar os templates:

| Template | Arquivo | Quando |
|----------|---------|--------|
| Proposta por e-mail | `EMAIL-PROPOSTA.md` | Prospect pediu proposta por e-mail |
| Follow-up de proposta | `EMAIL-FOLLOWUP.md` | 3–4 dias sem resposta após envio |
| 2º Follow-up / encerramento | `EMAIL-FOLLOWUP.md` (seção 2) | 7 dias sem resposta após follow-up 1 |

**Diferença do formato e-mail vs WhatsApp/documento:**
- E-mail: apresenta **1 pacote recomendado** (Growth) para evitar paralisia de escolha
- WhatsApp/documento presencial: apresenta os 3 pacotes (prospect já está engajado na conversa)

Os rascunhos ficam salvos no Gmail (bmdaagenciaforms@gmail.com) com assunto iniciando em "📋 TEMPLATE" para fácil localização.

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-20
- **Agente dono:** Maya (copy) + time de tráfego para validar números
- **Framework base:** Grand Slam Offer (Hormozi) + DPL Framework (Justin Brooke) + Value Ladder (Brunson)
- **Dependências:** agents/cargo/COPYWRITER/, agents/cargo/GESTOR-TRAFEGO-META/, agents/cargo/GESTOR-TRAFEGO-GOOGLE/
