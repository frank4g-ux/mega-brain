# Checklist — Pacote Máquina (R$3.500/mês)
## Setup Completo em 4 Dias + Go Live no Dia 5

> **Premissa:** Fran faz as partes comerciais e de relacionamento. Spike (Claude) executa todo o técnico via API/GitHub.
> Não pular etapa — a sequência evita retrabalho.
> Pré-requisito: Kickoff realizado, 4 Números coletados.

---

## MODELO DE INFRAESTRUTURA (definido 2026-06-22)

```
┌─────────────────────────────────────────────────────────────────────┐
│  INFRAESTRUTURA: conta VaiAnuncio (Vercel + Supabase de Frank)      │
│  NossoCRM: 1 instância por cliente, hospedada na conta de Frank     │
│  Supabase: 1 projeto por cliente (conta de Frank)                   │
│  Vercel: 1 projeto por cliente (conta de Frank)                     │
│                                                                     │
│  QUEM FAZ O QUÊ:                                                    │
│  Fran  → kickoff, relacionamento, relatórios, reuniões              │
│  Spike → deploy CRM, Sofia, webhooks, tracking, tudo técnico        │
│  Cliente → APENAS conectar WhatsApp (escanear QR Code)             │
│                                                                     │
│  TOKENS NECESSÁRIOS (Frank fornece uma vez):                        │
│  [ ] Vercel API Token  → vercel.com/account/tokens                  │
│  [ ] Supabase Management API → supabase.com/dashboard/account/tokens│
└─────────────────────────────────────────────────────────────────────┘
```

---

## ✅ PRÉ-SETUP (antes do Dia 1 — no kickoff ou logo após)

```
[ ] FRAN — Dados coletados no kickoff:
    [ ] Nome da clínica + nome do responsável
    [ ] WhatsApp Business da clínica (número que vai conectar a Sofia)
         ⚠️ Precisa ser WhatsApp Business (não pessoal)
    [ ] Procedimento(s) principal(is) a anunciar
    [ ] Ticket médio + taxa de fechamento estimada
    [ ] Budget mensal aprovado (ads + gestão)
    [ ] Horário de funcionamento
    [ ] Endereço completo
    [ ] Formas de pagamento + planos aceitos
    [ ] Tom de atendimento (formal / descontraído)
    [ ] Domínio desejado (Frank registra no registro.br em nome do cliente)

[ ] FRAN — Acesso a contas de ads (solicitado por ligação, nunca WhatsApp):
    [ ] Convidar frank@vaianuncioai.com como admin no Meta Business Manager do cliente
    [ ] Convidar frank@vaianuncioai.com como admin no Google Ads do cliente
         (ou criar contas novas caso o cliente não tenha)

[ ] FRAN — Comercial:
    [ ] Pagamento recebido (setup R$2.000 + 1ª mensalidade R$3.500)
    [ ] Contrato assinado
    [ ] Card criado no NossoCRM de prospecção → ✅ Fechado

[ ] SPIKE — Setup automático iniciado (após tokens configurados):
    [ ] Informar Spike: "Novo cliente — [Nome] — nicho [X] — WA: [número]"
    → Spike cria: Supabase project + Vercel deploy + NossoCRM configurado
    → Spike entrega: URL do CRM + login + senha
```

---

## DIA 1 — LP + Início da Sofia (~3h)

**BLOCO A — Hospedagem e LP (1h30)**
```
[ ] Hostinger hPanel → adicionar domínio do cliente como addon domain
[ ] Apontar nameservers do domínio para Hostinger (aguardar propagação ~1h)
[ ] /web-designer → gerar LP focada no procedimento principal do kickoff
[ ] Deploy via /site no domínio do cliente
[ ] Verificar SSL (cadeado verde)
[ ] Enviar URL para cliente aprovação (máx 24h para feedback)
```

**BLOCO B — Criar e Configurar Sofia (1h30)**
```
[ ] /gptmaker → criar agente:
    Nome: Sofia - [Nome da Clínica]
    Workspace: Frank Dias (ID: 3EFE3959F9E140C847E43E2070591279)
    Tipo: SALE
    Comunicação: NORMAL

[ ] /gptmaker → configurar settings:
    Modelo: CLAUDE_3_5_SONNET
    maxDailyMessages: 500
    enabledEmoji: true
    splitMessages: true
    enabledHumanTransfer: true
    resumeTransferHumanAI: true
    knowledgeByFunction: true
    enabledReminder: true

[ ] Copiar ID do agente criado (usar nos webhooks no Dia 3)
```

---

## DIA 2 — GTM/Pixel/GA4 + Behavior da Sofia (~3h)

> ⚠️ Só iniciar rastreamento após SSL ativo e LP aprovada (ou provisória aceita)

**BLOCO C — Rastreamento (1h30)**
```
[ ] GTM instalado na LP (via /site ou manual)
[ ] Meta Pixel configurado via GTM → evento Lead no submit do formulário
[ ] GA4 configurado via GTM → evento lead_form_submit
[ ] Validar no Tag Assistant: abrir a LP e verificar disparo dos 3 tags
[ ] Pixel de conversão Google Ads vinculado ao GA4 (importar conversão)
[ ] UTM configurado em todos os links de anúncio (template: utm_source / utm_medium / utm_campaign)
```

**BLOCO D — Behavior da Sofia (1h30)**
```
[ ] Montar prompt mestre com dados do kickoff:
    [ ] Nome da clínica + responsável
    [ ] Procedimentos + faixa de preço (NUNCA preço exato)
    [ ] Horário de funcionamento
    [ ] Endereço + WhatsApp
    [ ] Formas de pagamento + planos
    [ ] Tom de atendimento

[ ] Fluxo obrigatório no behavior:
    1. Boas-vindas + perguntar nome
    2. Identificar procedimento de interesse
    3. Informar avaliação GRATUITA e sem compromisso
    4. Coletar data e horário preferido
    5. "Vou registrar. Nossa equipe confirma em até 1h."
    6. Confirmar nome, contato e intenção
    7. Encerrar com entusiasmo
    ❌ NUNCA confirmar horário sozinha
    ❌ SE dúvida técnica / reclamação → transferir para humano

[ ] Colar behavior no agente via /gptmaker → behavior do agente
[ ] Inserir URL da LP no campo jobSite do agente
```

---

## DIA 3 — Campanhas + Conexão WhatsApp (~4h)

**BLOCO E — Google Ads (1h30)**
```
[ ] Logar na conta Google Ads do cliente
[ ] GA4 vinculado ao Google Ads
[ ] Configurar conversões ANTES do primeiro R$:
    [ ] Formulário/WhatsApp na LP
    [ ] Chamada telefônica (se aplicável)
[ ] Campanha Search por procedimento principal (60-70% budget):
    [ ] Ad Group 1: [procedimento] + "preço" / "quanto custa" / "agendar"
    [ ] Ad Group 2: variações do procedimento
[ ] Keywords: Exact Match + Phrase Match — NUNCA Broad Match
[ ] Lista de negativos padrão carregada (ver SKILL.md seção DIA 3-4)
[ ] Lances: CPC Manual (fase 1 — manter até 20 conversões)
[ ] Extensões: sitelinks, callout, chamada, localização, preço
[ ] Raio: 15-20km interior / 10km capital
[ ] Ajuste mobile: +20%
[ ] Horário: 7h-21h
[ ] Status: PAUSADA (ativa no Dia 5 junto com tudo)
```

**BLOCO F — Meta Ads (1h)**
```
[ ] Conta Meta Business Manager acessada
[ ] Campanha: objetivo Leads → clique para WhatsApp
[ ] 2-3 criativos (ângulo dor / resultado / CTA direto)
[ ] Conjunto Advantage+: raio + faixa etária 25-55
[ ] Orçamento conforme tier (ver tabela PLAYBOOK ADAPTÁVEL no SKILL.md)
[ ] Status: PAUSADA (ativa no Dia 5)
```

**BLOCO G — Conexão WhatsApp + Sofia (1h)**
```
[ ] GPTMaker → conectar agente ao WhatsApp Business do cliente
[ ] Aguardar QR Code → cliente escaneia com o celular da clínica
[ ] Confirmar que Sofia responde uma mensagem de teste simples
[ ] Testar transferência para humano (enviar palavra gatilho)
```

---

## DIA 4 — NossoCRM + Webhooks + Teste Completo (~3h)

**BLOCO H — NossoCRM (executado por SPIKE via API — ~10 min)**
```
→ Spike executa automaticamente ao receber: nome do cliente + nicho

[ ] SPIKE — Deploy automático:
    1. Criar projeto Supabase na conta VaiAnuncio via Management API
       (região: São Paulo | nome: crm-[nome-cliente])
    2. Criar projeto Vercel na conta VaiAnuncio via API
       (fork frank4g-ux/nossocrm | nome: crm-[nome-cliente])
    3. Rodar wizard via API: nome, email, senha do cliente
    4. Criar board "Pipeline Clínica":
       🟡 Novo Lead → 📞 Tentativa de Contato → 💬 Em Conversa
       → 📅 Consulta Agendada → ✅ Fechado → ❌ Perdido
    5. Gerar API Key do NossoCRM
    6. Ativar Gemini IA (aistudio → Get API Key → colar em Configurações → IA)

→ Spike entrega para Fran:
   URL: https://crm-[cliente].vercel.app
   Login: [email]
   Senha: [senha temporária]
   API Key: ncrm_xxxx
   Board Key: [chave]
```

**BLOCO I — Webhook Sofia → CRM (executado por SPIKE — ~10 min)**
```
[ ] SPIKE — Deploy automático do webhook:
    1. Vercel → New Project → importar sofia-webhook-template/ (conta VaiAnuncio)
    2. Configurar env vars:
       NOSSOCRM_URL     = https://crm-[cliente].vercel.app
       NOSSOCRM_API_KEY = ncrm_xxxx (gerado no Bloco H)
       BOARD_KEY        = [board_key do Bloco H]
       SOFIA_SECRET     = [string aleatória gerada por Spike]
    3. Deploy → copiar URL gerada
    4. GPTMaker PUT /v2/agent/{id}/webhooks → onCreateEvent = URL gerada
```

**BLOCO J — Teste Completo (45 min)**
```
[ ] Simular lead do anúncio:
    1. Abrir LP → clicar no CTA do WhatsApp
    2. Enviar mensagem como se fosse paciente
    3. Verificar que Sofia responde em < 30 segundos
    4. Informar interesse em procedimento
    5. Verificar que Sofia pergunta data/horário
    6. Verificar que card aparece no NossoCRM → 🟡 Novo Lead
    7. Testar transferência para humano

[ ] Verificar que Pixel disparou (Facebook Events Manager)
[ ] Verificar que GA4 registrou a sessão
[ ] Verificar que o card do CRM tem nome + contato + procedimento
[ ] SE algum passo falhou → corrigir antes do Dia 5
```

---

## DIA 5 — GO LIVE (~30 min)

```
[ ] Revisar LP uma última vez (texto, CTA, WhatsApp funcionando)
[ ] Ativar campanha Google Ads
[ ] Ativar campanha Meta Ads
[ ] Enviar mensagem de confirmação para o cliente:

    "Tudo no ar! 🚀
    ✅ Landing page: [URL]
    ✅ Google Ads: ativo
    ✅ Meta Ads: ativo
    ✅ Sofia (IA 24h): ativa no WhatsApp
    ✅ CRM: [URL do CRM]

    Os primeiros 7 dias são de aprendizado do algoritmo.
    Leads vão chegar, mas o CPL tende a ser mais alto no início
    e melhora nas semanas 2 e 3.

    Toda terça você recebe o relatório da semana.
    Qualquer dúvida, é só chamar 👊"

[ ] Registros obrigatórios:
    [ ] COMPANY-PROFILE.md: novo cliente ativo + MRR R$3.500
    [ ] NossoCRM (prospecção): card movido para ✅ Fechado
    [ ] Kauan MEMORY: conta Meta + ID pixel + budget + públicos
    [ ] Rodrigo MEMORY: conta Google + ID conversão + keywords
```

---

## RESUMO VISUAL DO SETUP

```
DIA 1 (3h)    DIA 2 (3h)    DIA 3 (4h)    DIA 4 (3h)    DIA 5 (30min)
───────────   ───────────   ───────────   ───────────   ────────────
LP + Deploy   Rastreamento  Google Ads    NossoCRM      GO LIVE
Criar Sofia   Behavior      Meta Ads      Webhooks      Confirmação
              Sofia         Conectar WA   Teste         Registros
```

**Carga total estimada: ~13h30 distribuídas em 5 dias.**
Com prática (2º cliente em diante): ~8-9h.
