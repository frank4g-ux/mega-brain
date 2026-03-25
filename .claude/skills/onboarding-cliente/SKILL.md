# SKILL: /onboarding-cliente
## Protocolo Completo de Entrada de Novo Cliente VaiAnuncio

> **Auto-Trigger:** /onboarding-cliente, "novo cliente entrou", "cliente fechou", "começar a atender cliente", "onboarding de cliente"
> **Keywords:** onboarding, cliente novo, entrada de cliente, setup cliente, configurar cliente, começar projeto
> **Agente responsável:** Kauan (Meta) + Rodrigo (Google) + Bruno (SDR passa o bastão) + Fundador
> **Prioridade:** ALTA

---

## PROPÓSITO

Garantir que todo cliente que entra na VaiAnuncio passe por um processo estruturado e completo nos primeiros 5 dias úteis — com tracking configurado, os 4 números calculados, campanha estruturada e expectativas alinhadas. Baseado no Protocolo VaiAnuncio definido por Justin × Kauan × Rodrigo.

**Regra principal:** Nenhuma campanha vai ao ar sem tracking validado e os 4 números conhecidos.

---

## COMO INVOCAR

```
/onboarding-cliente --cliente "Nome do Negócio" --nicho "clínica" --pacote "Crescimento"
/onboarding-cliente --cliente "Nome" --nicho "prestador" --canais "google,meta"
/onboarding-cliente --cliente "Nome" --nicho "ecommerce" --canais "meta"
```

---

## CHECKLIST RÁPIDO DE DEPLOY — NOVO CLIENTE (20-40 min)

> Use isso ANTES de iniciar o onboarding completo.
> Para cada novo cliente, execute na ordem abaixo.

```
CLIENTE: _____________________ NICHO: _____________ DATA: _______
PACOTE: [ ] Starter  [ ] Growth  [ ] Máquina de Clientes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASE 1 — INFRAESTRUTURA (Todos os pacotes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Fork do nossocrm no GitHub (se Growth ou Máquina)
[ ] Novo projeto Vercel criado (nossocrm-[cliente].vercel.app)
[ ] Novo projeto Supabase criado (região: São Paulo)
[ ] Wizard /install executado com sucesso
[ ] Login admin criado (email + senha anotados)
[ ] LP do cliente criada via /web-designer
[ ] LP deployada em vaianuncioai.com/[cliente] via /site

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASE 2 — CRM CONFIGURADO (Growth + Máquina)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Board criado com funil do nicho
    Colunas: Lead Chegou → Contato → Proposta → Fechado → Perdido
[ ] Tags criadas (mínimo 3 do nicho)
    Ex. desentupidora: Urgente / Residencial / Comercial
[ ] Campos personalizados do nicho criados
    Ex. desentupidora: Tipo de Serviço / Endereço / Urgência
[ ] Página inicial configurada como "Boards"
[ ] Login do cliente criado (Configurações → Equipe)
[ ] Treinamento de 1h agendado (3 abas: Inbox, Visão Geral, Boards)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASE 3 — AGENTE DE IA (Máquina de Clientes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Agente criado no GPTMaker via /gptmaker
[ ] Persona configurada (nome + tom + nicho)
[ ] FAQ do nicho alimentado (mínimo 10 perguntas/respostas)
[ ] Fluxo de qualificação configurado (NEPQ básico)
[ ] WhatsApp Business vinculado ao agente
[ ] Teste de conversa realizado (5 perguntas simuladas)
[ ] Handoff humano configurado (quando agente não sabe → chama o dono)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASE 4 — TRACKING (Todos os pacotes)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Meta Pixel instalado na LP
[ ] Evento Lead disparando nos CTAs
[ ] Google Ads conversion tag instalada
[ ] GTM verificado (Tag Assistant)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASE 5 — GO LIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Cliente recebeu: URL do CRM + login + senha
[ ] Cliente recebeu: URL da LP
[ ] Treinamento CRM realizado (Growth/Máquina)
[ ] Campanhas no ar
[ ] Primeiro relatório agendado (D+7)
[ ] Registrado no COMPANY-PROFILE como cliente ativo
[ ] Faturamento atualizado no perfil da empresa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TEMPO ESTIMADO:
  Starter:           ~1h (LP + tracking + campanhas)
  Growth:            ~2h30 (+ CRM configurado + treinamento)
  Máquina:           ~4h (+ agente IA + WhatsApp vinculado)
```

---

## ETAPA 1 — HANDOFF DO BRUNO (Dia 0)

Quando o contrato for assinado, Bruno passa o bastão com um briefing completo:

```
════════════════════════════════════════════
HANDOFF — NOVO CLIENTE
════════════════════════════════════════════
Cliente:         [Nome do negócio]
Decisor:         [Nome do responsável]
Nicho:           [Nicho específico]
Pacote:          [Starter / Crescimento / Escala]
Canais:          [Google / Meta / Ambos]
Contato:         [WhatsApp / Email]
Cidade:          [Cidade]
─────────────────────────────────
O QUE BRUNO DESCOBRIU NA PESQUISA:
Dor principal:   [O que mais incomoda esse cliente]
Situação atual:  [Está rodando ads? Tem site? Tem WhatsApp Business?]
Concorrentes:    [Quem identificou como concorrente]
Observação:      [Qualquer info relevante da conversa de venda]
─────────────────────────────────
ACESSO SOLICITADO AO CLIENTE:
[ ] Google Ads (conta existente ou criar nova)
[ ] Meta Business Manager
[ ] Google Analytics 4 (conta existente ou criar nova)
[ ] Google Tag Manager (instalar no site se não tiver)
[ ] WhatsApp Business (acesso para configurar agente de IA)
[ ] Site/LP do cliente (para instalar pixels e tags)
════════════════════════════════════════════
```

---

## ETAPA 2 — DIAGNÓSTICO DOS 4 NÚMEROS (Dia 1)

Kauan e Rodrigo calculam os 4 números (Framework Justin Brooke) com o cliente antes de tocar em qualquer campanha:

```
════════════════════════════════════════════
DIAGNÓSTICO — 4 NÚMEROS — [CLIENTE]
Data: [DATA]
════════════════════════════════════════════

① EPC — Earnings Per Click
   Receita mensal atual:        R$ [X]
   Visitas mensais estimadas:   [N]
   → EPC atual:                 R$ [X ÷ N]
   → CPC máximo que posso pagar: R$ [EPC × 0,3] (regra 30%)

② AOV — Average Order Value (Ticket Médio)
   Ticket médio do serviço:     R$ [X]
   Variação (menor/maior):      R$ [X] – R$ [Y]
   → Ticket usado para projeção: R$ [X conservador]

③ DPL — Dollars Per Lead
   Ticket médio (AOV):          R$ [X]
   Taxa de fechamento estimada: [Y]%
   → DPL:                       R$ [X × Y/100]
   → CPL máximo aceitável:      R$ [DPL × 0,4] (regra 40%)

④ CPA — Cost Per Acquisition
   Meta de novos clientes/mês:  [N]
   Budget disponível para ads:  R$ [X]
   → CPA máximo:                R$ [X ÷ N]
   → Comparar com LTV:          R$ [LTV estimado]
   → Saudável se CPA < LTV ÷ 3

────────────────────────────────────────
VEREDICTO:
[ ] ✅ VERDE — Números viáveis. Pode iniciar campanhas.
[ ] ⚠️ AMARELO — Ticket baixo ou taxa de fechamento incerta.
    → Ajustar expectativas antes de começar.
[ ] 🔴 VERMELHO — CPA máximo < benchmark do nicho.
    → Conversar com cliente sobre ticket ou melhorar funil antes de ads.
════════════════════════════════════════════
```

---

## ETAPA 3 — CONFIGURAÇÃO TÉCNICA (Dia 1-2)

### 3A — RODRIGO: Google Ads + GA4 + GTM

```
CHECKLIST GOOGLE — [CLIENTE]
─────────────────────────────────────────
[ ] Google Ads: conta criada/acessada
[ ] GA4: property criada/acessada
[ ] Vinculação GA4 ↔ Google Ads confirmada
[ ] GTM: container instalado no site do cliente
    → Testar com Tag Assistant: <all tags firing?>

[ ] TAGS GTM OBRIGATÓRIAS:
    [ ] GA4 Configuration Tag (todas as páginas)
    [ ] Google Ads Conversion — "Lead" (clique no CTA principal)
    [ ] Google Ads Conversion — "Call" (clique em telefone, se houver)
    [ ] [E-commerce apenas] Enhanced Ecommerce Tag

[ ] TESTE DE CONVERSÃO:
    → Simular clique no CTA → verificar se GA4 e Google Ads registram
    → Confirmar com Rodrigo antes de avançar

[ ] STATUS: ✅ Tracking validado / ❌ Pendente
─────────────────────────────────────────
```

### 3B — KAUAN: Meta Pixel + Conversions API

```
CHECKLIST META — [CLIENTE]
─────────────────────────────────────────
[ ] Meta Business Manager: acesso confirmado
[ ] Pixel instalado:
    → Via GTM (preferencial) OU código direto no site
    → ID do Pixel registrado: [ID]

[ ] EVENTOS OBRIGATÓRIOS:
    [ ] PageView (automático com base code)
    [ ] Lead — dispara no clique do CTA WhatsApp ou envio de formulário
    [ ] Contact — dispara em ligações (se houver)
    [ ] [E-commerce] Purchase, AddToCart, InitiateCheckout

[ ] VALIDAÇÃO com Meta Pixel Helper:
    → Acessar o site → verificar eventos disparando corretamente

[ ] CONVERSIONS API (se possível):
    → Configura servidor-side para compensar iOS privacy

[ ] TESTE DE EVENTO:
    → Meta Events Manager → Test Events → Simular Lead
    → Confirmar que o evento aparece antes de avançar

[ ] STATUS: ✅ Pixel validado / ❌ Pendente
─────────────────────────────────────────
```

---

## ETAPA 4 — ESTRUTURA DE CAMPANHA INICIAL (Dia 3)

Baseado nos benchmarks do nicho e nos 4 números calculados:

### Rodrigo — Google Ads (estrutura inicial)

```
ESTRUTURA GOOGLE — [CLIENTE] — [NICHO]
─────────────────────────────────────────
Campanha: Search — Objetivo: Leads / Ligações
Budget diário: R$ [budget ÷ 30] (baseado no CPA target)
Estratégia de lance: CPC Manual (fase inicial → migra para tCPA após 30 conversões)

Grupo 1 — Keywords de Alta Intenção
  [Inserir 5-10 keywords de urgência/agendamento do nicho]
  Match type: Phrase + Exact (nunca Broad no início)

Grupo 2 — Keywords de Comparação/Pesquisa
  [Inserir 5-10 keywords de pesquisa de serviço]

Negative Keywords iniciais:
  [Lista padrão por nicho — ver SOUL.md do Rodrigo]

Extensões:
  [ ] Sitelinks (Agendar, Sobre nós, Ver casos, WhatsApp)
  [ ] Callout (Atende 24h, Sem fila, Resultado garantido)
  [ ] Estruturadas (Serviços: [lista])
  [ ] Chamada (número de telefone do cliente)

─────────────────────────────────────────
REGRA: Não sair do CPC manual antes de 30 conversões registradas
─────────────────────────────────────────
```

### Kauan — Meta Ads (estrutura inicial)

```
ESTRUTURA META — [CLIENTE] — [NICHO]
─────────────────────────────────────────
Campanha: Lead Generation / Mensagens
Objetivo de conversão: Lead (evento do Pixel validado)
Budget: R$ [budget ÷ 30]/dia por conjunto

Conjunto 1 — Público Frio (Interesse)
  Interesses: [3-5 interesses relevantes para o nicho]
  Comportamentos: [se aplicável]
  Idade: [faixa baseada no ICP do cliente]
  Localização: [cidade + raio, ou região]

Conjunto 2 — Lookalike (após ter dados suficientes — semana 3+)
  Fonte: lista de clientes do cliente (se tiver 100+)
  Ou: visitantes da LP (após 200+ visitantes com Pixel)

Conjunto 3 — Retargeting (após LP ter tráfego)
  Público: visitou LP nos últimos 30 dias mas não converteu

Criativos por conjunto: mínimo 3 (ângulos diferentes)
  Ângulo 1: Dor/Problema
  Ângulo 2: Resultado/Prova social
  Ângulo 3: Oferta/CTA direto

─────────────────────────────────────────
REGRA: Não tocar na campanha durante 7 dias de aprendizado
─────────────────────────────────────────
```

---

## ETAPA 5 — ALINHAMENTO COM O CLIENTE (Dia 4)

Reunião de 30 minutos com o decisor para alinhar expectativas:

```
PAUTA DA REUNIÃO DE ALINHAMENTO
─────────────────────────────────────────
1. Os 4 números calculados — apresentar e confirmar com o cliente
2. Estrutura das campanhas — explicar o que vai ao ar e por quê
3. A fase de aprendizado — explicar os 7-14 dias iniciais
   ("As campanhas precisam de dados para otimizar. Nos primeiros 7 dias,
   não vamos mexer na estrutura mesmo se o CPL parecer alto.")
4. O que monitorar — métricas que o cliente vai receber no relatório
5. Canais de comunicação — como o cliente reporta urgências, como a
   VaiAnuncio reporta resultados
─────────────────────────────────────────
EXPECTATIVAS A ALINHAR:
❌ "Vou ter resultado no primeiro dia" → NÃO
✅ "Primeiros dados em 7 dias, primeiras otimizações em 14 dias,
   resultados consistentes a partir do mês 2"
─────────────────────────────────────────
```

---

## ETAPA 6 — GO LIVE (Dia 5)

```
CHECKLIST GO LIVE — [CLIENTE]
─────────────────────────────────────────
[ ] Todos os 4 números calculados e documentados
[ ] Pixel Meta validado (eventos disparando)
[ ] GA4 + Google Ads vinculados e conversão registrando
[ ] Campanha Google criada, revisada, aprovada → ATIVA
[ ] Campanha Meta criada, revisada, aprovada → ATIVA
[ ] Agente de IA WhatsApp configurado (se no pacote)
[ ] Primeiro relatório agendado (D+7)
[ ] Cliente informado: "Campanhas no ar. Primeiros dados em 7 dias."

─────────────────────────────────────────
REGISTROS OBRIGATÓRIOS:
[ ] Kauan registra em MEMORY.md: conta Meta, ID pixel, budget, públicos
[ ] Rodrigo registra em MEMORY.md: conta Google, ID conversão, budget, keywords
[ ] Lia atualiza AGENT-INDEX.yaml com novo cliente ativo
[ ] Fundador registra no COMPANY-PROFILE novo cliente e faturamento
─────────────────────────────────────────
```

---

## CRONOGRAMA RESUMIDO

| Dia | Quem | O que faz |
|-----|------|-----------|
| 0 | Bruno | Handoff completo para Kauan, Rodrigo e Fran |
| 1 | Kauan + Rodrigo | Calculam os 4 números + solicitam acessos |
| 1-2 | Rodrigo | Configura GTM + GA4 + Google Ads conversion |
| 1-2 | Kauan | Instala Pixel + configura eventos Meta |
| 3 | Kauan + Rodrigo | Montam estrutura das campanhas para revisão do Fran |
| 4 | Fran | Reunião de alinhamento com o cliente |
| 5 | Kauan + Rodrigo | Go live — campanhas ativas |
| 7 | Kauan + Rodrigo | Primeiro check de dados (não otimiza — só monitora anomalias) |
| 14 | Kauan + Rodrigo | Primeira rodada de otimização baseada em dados reais |
| 30 | Kauan + Rodrigo | Relatório mensal completo + reunião com cliente |

---

## REGRAS INVIOLÁVEIS

1. **Zero campanha sem tracking validado** — é a regra 1 de Rodrigo e Kauan
2. **4 números antes de qualquer lance** — é a regra 1 de Justin
3. **Fase de aprendizado é sagrada** — 7 dias sem tocar na estrutura
4. **Reunião de alinhamento é obrigatória** — expectativas desalinhadas matam contratos
5. **Registrar tudo** — MEMORY.md de Kauan + Rodrigo + COMPANY-PROFILE atualizado

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-20
- **Agente dono:** Kauan (Meta) + Rodrigo (Google) — revisado pelo fundador
- **Framework base:** Protocolo VaiAnuncio (Justin × Kauan × Rodrigo) — ver SESSAO-ALINHAMENTO-JUSTIN.md
- **Dependências:** agents/cargo/GESTOR-TRAFEGO-META/, agents/cargo/GESTOR-TRAFEGO-GOOGLE/, agents/cargo/SDR/
