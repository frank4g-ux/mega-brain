# SKILL: /onboarding-cliente
## Protocolo Completo de Entrada de Novo Cliente VaiAnuncio

> **Auto-Trigger:** /onboarding-cliente, "novo cliente entrou", "cliente fechou", "começar a atender cliente", "onboarding de cliente"
> **Keywords:** onboarding, cliente novo, entrada de cliente, setup cliente, configurar cliente, começar projeto
> **Agente responsável:** Fran (fechamento) + Kauan (Meta) + Rodrigo (Google) + Bruno (handoff)
> **Versão:** 2.0.0 · Atualizado: 2026-03-29
> **Validado por:** Conselho completo (Hormozi · Brunson · Justin · Haynes · Cole Gordon · Miner)

---

## PRODUTO A VENDER — PACOTE ENTRADA (validar primeiro)

> **Hormozi:** não venda o combo completo no primeiro cliente. Valide com o mais simples que gera resultado visível em 30 dias. Depois upsell.

```
PACOTE ENTRADA — "Agenda Cheia"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ LP de alta conversão (foco em 1 procedimento)
✅ Gestão de tráfego Meta Ads OU Google Ads (não os dois)
✅ Tracking completo (GTM + Pixel + GA4 — já configurados)

❌ SEM IA de atendimento → upsell mês 2
❌ SEM CRM → upsell mês 3

PREÇO:
  Setup único:    R$ 1.500 (pago antes de começar)
  Gestão mensal:  R$ 1.500/mês
  Mídia:          R$ 600–1.200/mês (conta do cliente)
  Contrato mínimo: 3 meses

RISK REVERSAL (Hormozi):
  "Se em 30 dias não gerarmos nenhum lead, devolvemos o setup."
  → Elimina o risco percebido. Fecha muito mais fácil.

RESULTADO PROMETIDO:
  Primeiros leads em 7–14 dias
  CPL < R$ 80 até o final do mês 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## COMO INVOCAR

```
/onboarding-cliente --cliente "Nome do Negócio" --nicho "odonto" --pacote "Entrada"
/onboarding-cliente --cliente "Nome" --nicho "estetica" --canal "meta"
/onboarding-cliente --cliente "Nome" --nicho "odonto" --canal "google"
```

---

## ETAPA 0 — FECHAMENTO (antes do contrato)

> **Cole Gordon:** a reunião de venda precisa de estrutura. Sem estrutura = improv = baixo close rate.

### Framework Octane (6 etapas da call de venda)

```
1. CONNECT    → rapport rápido. Tom de igual para igual.
2. CLARIFY    → entender a dor real (não a declarada)
3. CONSEQUENCE → amplificar o custo de não resolver
4. CONVINCE   → apresentar solução com prova do nicho
5. COMMIT     → obter confirmação verbal ANTES de falar preço
6. CLOSE      → fechar com confiança, sem pedir desculpa pelo preço
```

### Qualificação obrigatória antes da call (4 pilares — Cole Gordon)

Só avança para reunião o lead que passa nos 4:

```
[ ] DINHEIRO   → tem orçamento de R$600+/mês para mídia?
[ ] DECISÃO    → está falando com o dono/decisor?
[ ] DOR        → a dor é real e agora, não hipotética?
[ ] URGÊNCIA   → por que agora? Sem urgência = fecha "depois" = nunca
```

### Script de objeções (Cole Gordon + Miner)

| Objeção | Resposta NEPQ |
|---------|--------------|
| "Vou pensar" | "Claro. O que especificamente você precisa pensar?" |
| "Tá caro" | "Em comparação com o que você investe hoje para captar pacientes?" |
| "Não é o momento" | "O que precisa mudar para ser o momento certo?" |
| "Preciso falar com meu sócio" | "Se fosse só você, já teria interesse em avançar?" |
| "Não tenho garantia" | "Exatamente por isso — se em 30 dias não gerar nenhum lead, devolvemos o setup." |

### Explicar o contrato de 3 meses (nunca deixar para o papel)

> Falar na reunião, antes de assinar:
> *"A gente trabalha com mínimo de 3 meses porque o algoritmo leva 30 dias para aprender
> e o resultado consistente vem no mês 2. Se você saísse antes, pagaria o setup e não
> veria o resultado. Não faz sentido para os dois."*

---

## ETAPA 1 — DIA DO FECHAMENTO (checklist)

```
[ ] Proposta formal enviada (via /proposta)
[ ] Contrato digital assinado (PandaDoc, Google Docs ou similar)
[ ] Pagamento do setup confirmado
    → PIX preferencial: CNPJ 62.642.010/0001-88 (C6 Bank)
    → Cartão: gerar link via Asaas (taxa repassada ao cliente)
[ ] IMPORTANTE: só inicia setup após pagamento. Sem exceção.
[ ] Kickoff agendado (dentro de 48h após pagamento)
```

### Mensagem de boas-vindas imediata após pagamento (Brunson)

Enviar no WhatsApp logo após confirmar pagamento — reduz arrependimento do comprador:

```
[Nome], bem-vindo! 🎯

Você tomou a decisão certa. Aqui está o que vai acontecer nos próximos 7 dias:

📋 Dia 1-2: sua LP de alta conversão criada e no ar
📊 Dia 3-4: campanha estruturada e aprovada com você
🚀 Dia 5-7: campanhas ativas, primeiros dados chegando

Qualquer dúvida, me chama aqui.
Vamos crescer sua clínica juntos!
```

---

## ETAPA 2 — KICKOFF (Reunião de Diagnóstico — 1h, Dia 1)

> **Haynes:** o alinhamento de expectativa no kickoff é a coisa mais importante do onboarding.
> Churn de agência quase nunca é problema de entrega — é expectativa desalinhada.

### Perguntas NEPQ obrigatórias (Jeremy Miner)

Perguntas que movem, não apenas informam:

```
SITUAÇÃO (entender o contexto):
"Como vocês estão captando pacientes hoje?"
"Qual procedimento, quando fecha, faz mais diferença no seu mês financeiramente?"
"Como está a agenda agora — cheia, com espaço, ou variável?"

PROBLEMA (fazer o prospect verbalizar):
"O que acontece quando alguém tenta marcar consulta fora do horário?"
"Quando um lead chega e ninguém atende na hora — o que acontece com esse lead?"
"Com que frequência vocês perdem paciente para concorrente por demora no retorno?"

IMPLICAÇÃO (escalar a urgência):
"Se isso continuar por mais 6 meses, como você acha que vai estar a situação?"
"Quanto você acha que está deixando na mesa por mês por causa disso?"
"Seus concorrentes estão com o mesmo problema ou já resolveram essa parte?"

NECESSIDADE-PAYOFF (criar visão do resultado — planta o upsell de IA):
"Se cada lead recebesse resposta em menos de 2 minutos, como mudaria sua semana?"
"Se a agenda estivesse preenchida automaticamente, qual seria o impacto no faturamento?"
```

### Output obrigatório do kickoff

```
BRIEFING — [CLIENTE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Procedimento foco:      [qual gera mais receita]
Ticket desse proc:      R$ [X]
Orçamento mídia/mês:    R$ [X]
Canal escolhido:        [ ] Meta  [ ] Google
WhatsApp Business:      [ ] Tem ativo  [ ] Precisa criar
Instagram ativo:        [ ] Sim  [ ] Não
Fotos da clínica:       [ ] Tem  [ ] Usar banco de imagem
Concorrentes citados:   [nomes]
Maior dor verbalizada:  [frase exata que o cliente disse]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Frase de alinhamento de expectativa (obrigatória — Haynes)

Dizer antes de encerrar o kickoff:

> *"Nos primeiros 7 dias o algoritmo está aprendendo. Leads vão aparecer,
> mas o CPL vai ser mais alto. Na semana 2 e 3 começa a melhorar.
> No dia 30 você recebe um relatório completo com tudo documentado.
> Se em 30 dias não tivermos nenhum lead, o setup é devolvido — mas
> isso nunca aconteceu."*

### Frase de ancoragem de autoridade (Brunson)

> *"A maioria das clínicas que a gente trabalha começa achando que
> o problema é falta de anúncio. O que a gente sempre descobre
> é que o problema é o que acontece depois que o lead chega."*

→ Essa frase planta a semente do upsell de IA. Não vende ainda.

---

## ETAPA 3 — OS 4 NÚMEROS (Justin Brooke — obrigatório antes de qualquer campanha)

> "Antes de gastar R$1, conhecer esses números. Sem eles, você não sabe se está ganhando ou perdendo."

```
DIAGNÓSTICO — 4 NÚMEROS — [CLIENTE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
① AOV — Ticket médio do procedimento foco
   Ticket:                  R$ [X]

② DPL — Valor máximo por lead
   Ticket × taxa fechamento estimada (20%): R$ [X × 0,20]
   → CPL máximo aceitável: R$ [DPL × 0,4]
   Exemplo: ticket R$400 × 20% = R$80 DPL → CPL máximo = R$32
   ⚠️ Se CPL ultrapassar esse valor por 2 semanas → parar e diagnosticar

③ CPA — Custo por cliente novo
   Budget mídia ÷ meta de clientes novos/mês
   → Saudável se CPA < ticket ÷ 3

④ EPC — Ganho por clique (referência)
   Receita mensal ÷ visitas estimadas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VEREDICTO:
[ ] ✅ VERDE — Pode iniciar campanhas
[ ] ⚠️ AMARELO — Ajustar expectativas
[ ] 🔴 VERMELHO — Ticket baixo demais — conversar antes de ligar o tráfego
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ETAPA 4 — ENTREGA TÉCNICA (Dias 1-5)

### MODELO DE HOSPEDAGEM — padrão para todos os clientes

> Processo fixo. Igual para todo cliente que entrar na agência.

```
ESTRUTURA:
  Hospedagem centralizada na conta Hostinger da VaiAnuncioAI (plano Business — 50 sites)
  ├── vaianuncioai.com        → site da agência
  ├── [dominio-cliente-1].com.br  → cliente 1
  ├── [dominio-cliente-2].com.br  → cliente 2
  └── ...até 50 sites no mesmo plano

REGRAS:
  Domínio     = sempre do cliente (registrar em registro.br no CPF/CNPJ do cliente)
  Hospedagem  = conta da agência (aponta DNS do domínio do cliente pro servidor Hostinger)
  Cobrança    = INCLUSA no pacote — sem custo adicional para o cliente
                → Posicionar como benefício: "hospedagem grátis enquanto for cliente"
                → Custo real < R$1/cliente (plano Business cobre até 50 sites)

COMO CONFIGURAR:
  1. Cliente registra domínio em registro.br (CPF/CNPJ dele)
  2. Você adiciona o domínio como addon domain no hPanel da Hostinger
  3. Cliente aponta os nameservers do domínio para os da Hostinger
  4. SSL gratuito ativado automaticamente (Let's Encrypt)
  5. Deploy da LP via /site → vaianuncioai.com/[nome-cliente] OU domínio próprio

PROTEÇÃO CONTRATUAL (2 cláusulas obrigatórias no contrato):
  → "O domínio é registrado em nome do CONTRATANTE"
  → "Em caso de rescisão, a CONTRATADA entrega os arquivos do site em até 5 dias úteis"

UPGRADE: ao atingir 6+ clientes → migrar para Hostinger Agency Hosting (~$23/mês)
  → Isola cada site em container separado (um site com problema não derruba os outros)
```

### Checklist completo de deploy

```
CLIENTE: _____________________ NICHO: _____________ DATA: _______
PACOTE:  [ ] Starter (1 canal)   [ ] Growth (2 canais)   [ ] Máquina (2 canais + IA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIA 1-2 — LP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Cliente registra domínio em registro.br (CPF/CNPJ dele)
[ ] Adicionar domínio do cliente como addon domain no hPanel Hostinger
[ ] Apontar nameservers do domínio do cliente para Hostinger
[ ] /web-designer → LP focada no procedimento do kickoff
[ ] 1 rodada de ajuste com cliente (WhatsApp, máx 24h)
[ ] /site → deploy no domínio do cliente (ou vaianuncioai.com/[nome-cliente] provisório)
[ ] SSL ativo (verificar cadeado verde)
[ ] GTM + Meta Pixel + GA4 disparando na LP (validar com Tag Assistant)
[ ] UTM configurado em todos os links

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIA 3-4 — CAMPANHA
  Starter → Google Ads OU Meta Ads (escolher 1 no kickoff)
  Growth e Máquina → Google Ads + Meta Ads (ambos desde o início)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRÉ-REQUISITO — ACESSO À CONTA DO CLIENTE
[ ] Cliente envia login do Google Ads (e-mail + senha) — solicitar por ligação, nunca WhatsApp
[ ] Você loga diretamente na conta dele
[ ] Confirma que a conta está ativa e sem campanhas problemáticas rodando
[ ] A partir daqui, tudo é configurado dentro da conta do cliente (tracking, campanhas, tudo)

⚠️ ANTES DE ESTRUTURAR: verificar o budget real do cliente
→ Adaptar a estrutura abaixo conforme a tabela de adaptação (ver seção PLAYBOOK ADAPTÁVEL)

META:
[ ] Conta Meta Business Manager acessada/criada
[ ] Campanha: objetivo Leads (formulário ou click para WhatsApp)
[ ] 2-3 criativos diferentes (ângulo dor / resultado / CTA direto)
[ ] Orçamento inicial conforme tier do cliente (ver tabela abaixo)
[ ] Público: interesse + localização + raio 15-20km (interior) / 10km (capital)

GOOGLE (estrutura padrão Justin Brooke — validada):
[ ] Conta Google Ads acessada/criada
[ ] GA4 vinculado ao Google Ads
[ ] Conversões configuradas ANTES do primeiro R$: formulário + WhatsApp + telefone
[ ] Campanha Search por procedimento (ver estrutura abaixo)
[ ] Keywords: Exact Match + Phrase Match — NUNCA Broad Match no início
[ ] Lista de negativos padrão carregada no Dia 1
[ ] CPC Manual (fase 1) → migra para tCPA após 30 conversões/mês
[ ] Extensões: sitelinks, callout, chamada, localização, PREÇO
    → Extensão de preço: "Implante a partir de R$X" — filtra lead sem perfil antes do clique, reduz CPL
[ ] Raio: 15-20km interior / 10km capital
[ ] Ajuste mobile: +20%
[ ] Horário: 7h-21h inicialmente

ESTRUTURA GOOGLE ADS — PADRÃO REPLICÁVEL POR CLIENTE:
  Campanha 1: [Procedimento Principal] [Cidade]  → 60-70% do budget
    Ad Group 1.1: [procedimento] + preço / quanto custa / agendar
    Ad Group 1.2: variações (all on 4, protocolo, etc.)
  Campanha 2: [Procedimento 2] [Cidade]          → 20% do budget
  Campanha 3: [Procedimento 3] [Cidade]          → 15-20% do budget
  → Performance Max: só a partir do mês 4 com Search estável

NEGATIVOS PADRÃO (carregar em toda conta nova):
  grátis, gratuito, curso, faculdade, emprego, vaga, como fazer,
  pasta de dente, escova, fio dental, veterinário, pet, animal,
  urgência 24h (exceto se oferece), plano de saúde (exceto se aceita),
  plano odontológico, convênio, SUS, pelo sus, popular, barato, low cost,
  formação, especialização, pós-graduação, residência

⚠️ PALAVRAS BANIDAS NO GOOGLE ADS — SAÚDE (reprovação automática):
  botox → usar: "toxina botulínica", "harmonização facial", "preenchimento"
  Anúncios que prometem resultado garantido → reprovar
  Imagens de antes/depois em cirurgia → proibido pelo Google e CFO/CFM

PROTOCOLO DE LANCES — GATILHOS QUANTITATIVOS (Justin Brooke — validado 2026):
  Fase 1: CPC Manual
    → Usar do Dia 1 até atingir 20 conversões registradas
    → NÃO avançar antes — algoritmo não tem dados suficientes

  Fase 2: Maximizar Conversões (sem meta de CPA)
    → Ativar ao atingir 20+ conversões
    → Manter até atingir 50 conversões/mês
    → Deixa o algoritmo calibrar sem restrição de custo

  Fase 3: tCPA
    → Ativar somente com 50+ conversões/mês
    → Definir tCPA = CPA atual × 1,25 (20-30% acima do atual)
    → Reduzir 10% a cada 2 semanas se estável
    → SE campanha parar de entregar → tCPA muito agressivo, subir 15%
    ⚠️ tCPA com menos de 50 conv/mês oscila e paralisa a campanha

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
META ADS — PLAYBOOK PADRÃO (Growth e Máquina — validado 2026)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OBJETIVO: Leads → clique para WhatsApp
  → WhatsApp converte 40-80% mais que formulário nativo para alto ticket
  → Formulário nativo: testar apenas para clareamento e ortodontia (baixo ticket)

ESTRUTURA DE CAMPANHA:
  Campanha 1: [Procedimento Principal] — 60-70% do budget
    Conjunto 1.1: Advantage+ Audience (deixar Meta otimizar)
      → Sugestão de público: raio + faixa etária 25-55
      → Meta removeu targeting por interesse em saúde em 2025 — Advantage+ compensa
    Conjunto 1.2: Público Frio Manual (localização + raio + idade)
      → Raio: 15-20km interior / 10km capital
      → Excluir: quem já interagiu com a página

  Campanha 2: [Procedimento 2] — 20-25% do budget
    → Mesma estrutura da Campanha 1

  Campanha 3: Retargeting — 10-15% do budget
    → Público: visitou a LP nos últimos 30 dias mas não converteu
    → Criativo: prova social / depoimento / reforço da avaliação gratuita
    → Ativar somente após 500+ visitantes na LP

  Lookalike: ativar somente com 300+ leads na lista source
    → Lookalike com source fraca produz público ruim — não acelerar

CRIATIVOS — 4 ÂNGULOS OBRIGATÓRIOS NO LANÇAMENTO:
  ÂNGULO 1 — DOR:
    "Você está perdendo pacientes porque não responde fora do horário?"
    → Imagem: mensagem não lida / secretária sobrecarregada
    → CTA: "Agende sua avaliação gratuita"

  ÂNGULO 2 — RESULTADO:
    "Sorria com confiança — [X] pacientes atendidos em [Cidade]"
    → Imagem: antes/depois REAL com autorização OU foto profissional da clínica
    → CTA: "Quero meu sorriso novo"

  ÂNGULO 3 — AUTORIDADE:
    "Dr. [Nome] — [X] anos transformando sorrisos em [Cidade]"
    → Imagem: foto profissional do dentista no consultório
    → CTA: "Conhecer a clínica"

  ÂNGULO 4 — OFERTA/URGÊNCIA (o mais conversivo):
    "Avaliação gratuita de implante — [X] vagas esta semana"
    → Imagem: agenda com horários / clínica organizada
    → CTA: "Garantir minha vaga"

  FORMATO: Feed 1080×1350px (4:5) — prioridade no lançamento
  REELS: ativar no mês 2 com criativo vencedor adaptado (30s, gancho nos 3s)
  ROTAÇÃO: novo criativo a cada 3-4 semanas (fadiga rápida no nicho local)

⚠️ PALAVRAS/PRÁTICAS BANIDAS NO META — SAÚDE:
  botox → usar: "toxina botulínica", "harmonização facial"
  Antes/depois que sugira resultado garantido → reprovação automática
  Linguagem que implique diagnóstico → proibido (ex: "cure sua dor")
  Imagens constrangedoras ou chocantes → reprovação
  → Revisar todo criativo contra CFO/CFM antes de subir

PROTOCOLO DE LANCES META — GATILHOS QUANTITATIVOS:
  Fase 1 — Menor Custo (sem limite):
    → Dia 1 até 50 leads gerados
    → NÃO usar Cost Cap nessa fase — mata o aprendizado do algoritmo
    → NÃO mexer no conjunto nas primeiras 72h após lançamento

  Fase 2 — Menor Custo com volume:
    → 50 leads → aumentar orçamento do conjunto vencedor +20%/semana
    → Pausar criativos com CPL > CPL máximo calculado
    → Duplicar conjunto: NUNCA para "escalar rápido" — aumentar o orçamento do original

  Fase 3 — Cost Cap:
    → Ativar com CPL estável por 2 semanas consecutivas
    → Cost Cap inicial = CPL médio atual × 0,8 (conservador)
    → Ajustar semanalmente: -10% se estável, +15% se campanha parar de entregar

BENCHMARKS CPL META — NICHO ODONTO/ESTÉTICA BRASIL 2026:
  Implante:            R$ 35–80
  Facetas/Lente:       R$ 40–90
  Ortodontia:          R$ 20–50
  Clareamento:         R$ 15–35
  Harmonização facial: R$ 30–70
  → CPL acima do limite por 2 semanas = diagnóstico obrigatório antes de qualquer mudança

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLAYBOOK ADAPTÁVEL — A ESTRATÉGIA SE ADAPTA, O FRAMEWORK NÃO MUDA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

> Justin Brooke: "O framework é o mesmo. O que muda é a velocidade de aprendizado.
> Budget menor = mais tempo para coletar dados = paciência maior exigida do cliente."

| Budget Mídia/mês | Tier     | Estrutura de campanhas        | Expectativa de CPL   | Tempo até tCPA |
|------------------|----------|-------------------------------|----------------------|----------------|
| R$ 600 — R$ 800  | MÍNIMO   | 1 campanha só (maior ticket)  | R$ 100 — R$ 200      | 3-4 meses      |
| R$ 800 — R$ 1.500| ENTRADA  | 2 campanhas (maior + segundo) | R$ 60 — R$ 150       | 2-3 meses      |
| R$ 1.500 — R$ 3k | CRESCIMENTO | Estrutura completa 3 camp. | R$ 40 — R$ 100       | 6-8 semanas    |
| R$ 3k+           | ESCALA   | Estrutura completa + PMax     | R$ 35 — R$ 80        | 4-6 semanas    |

REGRAS DE ADAPTAÇÃO:
  Budget MÍNIMO (R$600-800):
  → Foca 100% no procedimento de maior ticket (implante)
  → 1 campanha, 1 ad group, Exact Match puro
  → CPC Manual pelo tempo que for necessário — não força tCPA sem dados
  → Alinha com cliente: "Resultado vai vir, mas em 60-90 dias, não 30"
  → CPL acima de R$200 por 3 semanas = diagnóstico antes de qualquer ação

  Budget ENTRADA (R$800-1.500):
  → 2 campanhas: maior ticket + segundo procedimento
  → Exact + Phrase Match
  → Revisão bi-semanal obrigatória

  Budget CRESCIMENTO+:
  → Estrutura completa 3 campanhas desde o início
  → Pode testar Phrase Match mais aberto a partir do mês 2
  → Segue protocolo de lances padrão

CONVERSA OBRIGATÓRIA COM CLIENTE (antes de ativar):
  "Seu budget de mídia é R$[X]/mês. Com isso, a estrutura ideal é [Y].
   Resultado esperado: [Z] leads/mês com CPL de R$[W].
   Para chegar no resultado ideal precisaríamos de R$[ideal].
   Quer começar assim mesmo e escalar quando vier o resultado?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DIA 5 — REVISÃO E GO LIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Mostrar campanha para cliente aprovar antes de ativar
[ ] Confirmar orçamento diário configurado corretamente
[ ] Confirmar WhatsApp do cliente como destino dos leads
[ ] Ativar campanha
[ ] Confirmar primeiros cliques chegando no GA4
[ ] Mensagem para cliente: "Campanha ativa ✅ Primeiros dados em 7 dias."
```

---

## ETAPA 5 — GESTÃO MENSAL

### Rotina semanal

```
TODO DIA (5 min):
[ ] Métricas: impressões, cliques, leads do dia
[ ] Pixel/GA4 ainda disparando?
[ ] CPL subindo > 20% em relação à média? → investigar antes de escalar

TODA TERÇA-FEIRA (15 min) — RELATÓRIO SEMANAL WHATSAPP:
[ ] Enviar mensagem de relatório rápido para o cliente:
    "Semana [N]: [X] leads | CPL médio: R$[XX] | [destaque da semana]"
    Exemplo: "Semana 2: 14 leads | CPL médio R$42 | melhor criativo: vídeo depoimento"
→ Terça foi escolhida: segunda tem menos atenção (início de semana),
  quarta em diante perde o contexto da semana anterior.
→ Nunca pule — cliente sem informação cria ansiedade e cancela.

REGRA DOS 7 DIAS:
[ ] Não tocar na estrutura da campanha nos primeiros 7 dias
    (algoritmo está aprendendo — interferir estraga o aprendizado)

SEMANA 2:
[ ] Primeira otimização: pausar criativo com pior CPL
[ ] Escalar orçamento do criativo vencedor em +20%

A CADA 15 DIAS — REUNIÃO QUINZENAL (Growth e Máquina):
[ ] 30 min via Google Meet ou WhatsApp chamada de vídeo
[ ] Revisar leads da quinzena: quantos vieram, CPL, quais fecharam
[ ] (Máquina) Revisar Sofia: perguntas sem resposta, horários de pico
[ ] (Máquina) Revisar CRM: cards em cada coluna, gargalo identificado
[ ] Alinhar próximos 15 dias: criativo novo, ajuste de orçamento ou público
[ ] Registrar ata no CRM (nota no card do cliente)
→ Essa reunião não é opcional — é o que diferencia a VaiAnuncio de agências
  que somem depois do setup. Agende já no kickoff, recorrente no calendário.
```

---

## ETAPA 6 — REUNIÃO DO DIA 30 (a mais importante)

> **Haynes:** essa reunião não é para mostrar relatório. É para plantar o upsell.

### Relatório obrigatório (enviar antes da reunião)

```
RELATÓRIO MÊS 1 — [CLIENTE]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total de leads:         [N]
CPL médio:              R$ [X]
Evolução semana a semana: [semana 1 → 4 com CPL]
Melhor criativo:        [nome/descrição]
Investimento total:     R$ [X] (agência + mídia)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Script da Reunião Dia 30 (Haynes + Miner)

```
ABERTURA:
"[Nome], os números estão aqui. [X] leads com CPL de R$[X].
Mas antes de eu te mostrar o que vem no mês 2, tenho uma pergunta."

PERGUNTA DE UPSELL (planta a IA):
"Desses [X] leads que chegaram, quantos você acha que vieram
fora do horário de atendimento?"
→ [aguarda resposta]

"E esses — o que aconteceu com eles?"
→ [se admitir que perdeu alguns]:
"Exatamente. Tenho um sistema que responde esses em segundos,
qualifica e já agenda automaticamente — sem você precisar estar disponível.
Clínicas que a gente instalou converteram 40% a mais dos leads que vinham
fora do horário. Quer ver como ficaria aqui?"

FECHAMENTO DO UPSELL (IA — mês 2):
Preço: R$ 500 setup + R$ 300/mês
→ Incluir no próximo contrato ou aditivo simples
```

---

## ETAPA 7 — UPSELL PROGRESSIVO

```
MÊS 2 — IA de Atendimento
  Trigger: "Os leads chegam mas quem responde fora do horário?"
  Entrega: agente GPTMaker configurado para odonto
  Preço: R$ 500 setup + R$ 300/mês
  Tempo de setup: 2h

MÊS 3 — CRM (PACOTE GROWTH)
  Trigger: "Você tem visibilidade de quem fechou, quem sumiu?"
  Entrega: NossoCRM configurado por nicho
  Preço: R$ 800 setup (ou incluído na mensalidade Growth R$2.500/mês)
  Tempo de implantação: ~1h30

  PASSO A PASSO DE IMPLANTAÇÃO DO CRM:

  1. INFRAESTRUTURA (15 min)
     → Criar projeto no Supabase (supabase.com → New project → São Paulo)
     → Criar projeto no Vercel importando frank4g-ux/nossocrm
     → Aguardar build finalizar

  2. WIZARD DE INSTALAÇÃO (5 min)
     → Acessar [url-cliente].vercel.app/install
     → Capítulo 1: nome, email e senha do cliente
     → Capítulo 2: token Vercel (sua conta)
     → Capítulo 3: URL + token do Supabase criado no passo 1

  3. PIPELINE ODONTO (10 min)
     → Boards → Criar Board → Começar do zero
     → Criar 6 colunas:
        🟡 Novo Lead
        📞 Tentativa de Contato
        💬 Em Conversa
        📅 Consulta Agendada
        ✅ Fechado
        ❌ Perdido

  4. TREINAMENTO RECEPCIONISTA (1h online)
     → Mostrar como criar card para cada lead novo
     → Mover card conforme evolução do atendimento
     → Adicionar notas na timeline (o que foi dito, próximo passo)
     → Usar GANHO/PERDIDO ao finalizar negócio
     → Regra de ouro: "Todo lead que chegar entra no CRM no mesmo dia"

  5. GEMINI IA (opcional — 2 min, grátis)
     → aistudio.google.com → Get API Key → criar chave grátis
     → Colar em Configurações → Inteligência Artificial do CRM
     → Ativa sugestão automática de próximo passo por lead
     → WOW moment na entrega — mostrar ao vivo para o cliente

  ENTREGA AO CLIENTE:
     Link: [url].vercel.app
     Login: [email do cliente]
     Senha: [senha criada no wizard]

  BUGS CONHECIDOS (2026-04-07):
     → Conteúdo da nota não expande na timeline (salva mas não mostra texto)
     → Campo Probabilidade não editável direto no card

EXPANSÃO — Adicionar segundo canal (Meta ou Google)
  Trigger: CPL estável no canal 1 por 2 meses
  Preço: + R$ 500/mês na gestão

MÊS 1 (desde o início) — IA de Atendimento + CRM (PACOTE MÁQUINA)
  Trigger: cliente fecha direto no Máquina — entregue no setup, não como upsell
  Preço: R$ 3.500/mês + R$ 2.000 setup
  Tempo de implantação: ~2h30 (além do setup padrão do Starter)

  O QUE INCLUI ALÉM DO GROWTH:
  ✅ Agente Sofia (IA 24h no WhatsApp via GPTMaker)
  ✅ Lead qualificado e intenção de agendamento capturada automaticamente
  ✅ Card criado no NossoCRM no momento do agendamento (via webhook)
  ✅ Lembrete automático de consulta (nativo GPTMaker)
  ✅ Escalada para humano quando necessário

  PASSO A PASSO — IMPLANTAÇÃO DA SOFIA (IA):

  1. CRIAR O AGENTE (2 min — via /gptmaker)
     → Workspace: Frank Dias (ID: 3EFE3959F9E140C847E43E2070591279)
     → Nome: Sofia - Clínica [Nome do Cliente]
     → Tipo: SALE
     → Comunicação: NORMAL

  2. CONFIGURAR O AGENTE (2 min — via /gptmaker)
     Modelo:               CLAUDE_3_5_SONNET  ← melhor para português
     maxDailyMessages:     500
     enabledEmoji:         true
     splitMessages:        true  ← mensagens naturais, não blocos
     enabledHumanTransfer: true  ← escalada para recepcionista
     resumeTransferHumanAI:true  ← Sofia retoma após humano encerrar
     knowledgeByFunction:  true
     enabledReminder:      true  ← lembrete automático de consulta

  3. BEHAVIOR — PROMPT MESTRE (10 min)
     Coletar no kickoff e montar via /gptmaker:
     → Nome da clínica e do profissional
     → Procedimentos oferecidos + faixa de preço (nunca preço exato antes da avaliação)
     → Horário de funcionamento
     → Endereço e WhatsApp da clínica
     → Formas de pagamento aceitas
     → Planos de saúde aceitos (ou não)
     → Tom de atendimento desejado (formal ou descontraído)

     FLUXO PADRÃO NO BEHAVIOR:
     1. Boas-vindas + perguntar o nome
     2. Identificar procedimento de interesse
     3. Informar que avaliação é GRATUITA e sem compromisso
     4. Coletar data e horário preferido do lead
     5. Informar: "Ótimo! Vou registrar sua solicitação.
                   Nossa equipe confirma o horário em até 1h."
     6. Confirmar nome, contato e intenção registrados
     7. Encerrar com entusiasmo
     → NUNCA confirmar horário sozinha (recepcionista confirma)
     → SE dúvida técnica ou reclamação → transferir para humano imediatamente

  4. JOBSITE — BASE DE CONHECIMENTO (1 min)
     → Inserir URL da LP do cliente no campo jobSite
     → GPTMaker usa o conteúdo do site como contexto adicional automaticamente

  5. WEBHOOKS — INTEGRAÇÃO COM CRM (10 min)
     PASSO A PASSO COMPLETO:

     a) Gerar API Key no NossoCRM do cliente
        → NossoCRM → Configurações → API → Gerar nova chave
        → Copiar (formato: ncrm_xxxxxxxxxxxx)

     b) Descobrir a board_key do board odonto
        → NossoCRM → Boards → editar board → campo "key"
        → Ou via API: GET /api/public/v1/boards (retorna key de cada board)

     c) Deploy da Vercel Function (template em sofia-webhook-template/)
        → Vercel → New Project → importar pasta sofia-webhook-template
        → Configurar env vars:
           NOSSOCRM_URL      = https://[crm-do-cliente].vercel.app
           NOSSOCRM_API_KEY  = ncrm_xxxx (gerado no passo a)
           BOARD_KEY         = [chave do board] (passo b)
           STAGE_LABEL       = Consulta Agendada
        → Deploy → copiar URL gerada

     d) Configurar webhooks no GPTMaker (via /gptmaker ou terminal)
        PUT /v2/agent/{id}/webhooks:
          onCreateEvent  → https://sofia-webhook-[cliente].vercel.app/api/webhook
          onLackKnowLedge → (opcional) URL para te notificar quando Sofia não souber

     e) Testar antes do go live
        → Simular lead: enviar mensagem para Sofia no WhatsApp
        → Sofia agenda → card deve aparecer em "Consulta Agendada" no CRM
        → Confirmado? Go live liberado.

  6. CONECTAR AO WHATSAPP DO CLIENTE (via plataforma GPTMaker)
     → Acessar app.gptmaker.ai → agente criado → Canais → WhatsApp
     → Conectar via QR Code (WhatsApp Business do cliente)
     ⚠️ O número precisa ser WhatsApp Business (não pessoal)
     ⚠️ Feito na interface web, não pelo terminal

  7. TREINAMENTO ADICIONAL (5 min — interface web app.gptmaker.ai)
     → Acessar o agente → Treinamento
     → Adicionar Q&A com perguntas frequentes específicas do nicho
     → Exemplos: "Vocês atendem convênio?", "Quanto custa o implante?",
                  "Qual o endereço?", "Têm horário aos sábados?"

  ENTREGA AO CLIENTE:
     CRM:    [url].vercel.app (login + senha criados no wizard)
     Sofia:  conectada ao WhatsApp Business do cliente
     Teste:  enviar mensagem de teste simulando lead antes de ir ao ar

  ARGUMENTO DE VENDA DA SOFIA (validado por pesquisa de mercado 2026):
     "Velocidade de resposta é o fator número 1 de conversão no seu nicho.
      Lead sem resposta em 5 minutos tem 80% de chance de ir para o
      concorrente — independente de quanto você investiu no anúncio.
      A Sofia responde em segundos, 24 horas por dia, qualifica o lead,
      registra no CRM e manda lembrete da consulta automaticamente.
      Você investe em tráfego — ela garante que nenhum lead seja perdido."

  ⚠️ VALIDAR COM CLIENTE NO KICKOFF:
     Perguntar: "Hoje, quanto tempo demora para responder um lead novo?"
     → Se resposta for > 30 min → esse argumento fecha o Máquina sozinho.
```

---

## CRITÉRIOS DE REVERSÃO

```
SE CPL > CPL máximo calculado por 2 semanas consecutivas
→ Parar campanha, revisar criativo e segmentação antes de continuar

SE cliente não envia material em 48h após kickoff
→ Usar banco de imagem (Unsplash/Pexels), avisar e seguir

SE cliente pede resultado em menos de 14 dias
→ Usar a frase de alinhamento de expectativa do kickoff novamente

SE cliente quer cancelar no mês 1
→ Mostrar relatório de evolução semana a semana
→ Aplicar cláusula do contrato (mínimo 3 meses)
→ Lembrar do risk reversal: "Se em 30 dias não tiver nenhum lead, setup devolvido"

SE você tiver 3+ clientes simultâneos
→ Parar de prospectar até estabilizar entregas. Qualidade > volume.
```

---

## CRONOGRAMA RESUMIDO

### Starter (R$1.500/mês)
| Dia | Quem | O que faz |
|-----|------|-----------|
| 0 | Fran | Fechamento + contrato + pagamento |
| 0 | Fran | Mensagem de boas-vindas imediata (WhatsApp) |
| 1 | Fran | Kickoff (NEPQ + briefing + alinhamento de expectativa) |
| 1 | Fran/Rodrigo/Kauan | Os 4 números calculados |
| 1-2 | Fran | LP criada via /web-designer + deploy via /site |
| 3-4 | Fran/Kauan/Rodrigo | Campanha estruturada + revisão |
| 5 | Fran | Go live + mensagem de confirmação |
| 7 | Fran | Check de dados (não otimiza ainda) |
| 14 | Fran | Primeira otimização |
| Toda segunda | Fran | Relatório WhatsApp semanal |
| 30 | Fran | Relatório completo + Reunião Dia 30 + upsell IA |

### Growth (R$2.500/mês) — tudo do Starter +
| Dia | Quem | O que faz |
|-----|------|-----------|
| 1-2 | Fran | Criar CRM (Supabase + Vercel + wizard) |
| 2 | Fran | Pipeline odonto configurado (6 colunas) |
| 3 | Fran | Treinar recepcionista no CRM (1h online) |
| 3 | Fran | Ativar Gemini IA no CRM (2 min, grátis) |
| 3-4 | Fran/Kauan/Rodrigo | Google Ads + Meta Ads estruturados |
| 5 | Fran | Go live tudo junto: ambas campanhas + CRM |
| Toda terça | Fran | Relatório WhatsApp semanal |
| Dia 15 e 30 | Fran | Reunião quinzenal (30 min — revisar leads, CRM, próximos 15 dias) |

### Máquina (R$3.500/mês) — tudo do Growth +
| Dia | Quem | O que faz |
|-----|------|-----------|
| 1 | Fran | Criar agente Sofia no GPTMaker via /gptmaker |
| 1 | Fran | Configurar modelo (Claude Sonnet), settings e webhooks |
| 2 | Fran | Montar behavior com dados do kickoff |
| 2 | Fran | Inserir jobSite (URL da LP do cliente) |
| 3 | Fran | Conectar Sofia ao WhatsApp Business do cliente |
| 3 | Fran | Treinamento adicional Q&A (interface web) |
| 4 | Fran | Teste completo: simular lead do anúncio até card no CRM |
| 5 | Fran | Go live tudo junto: Google Ads + Meta Ads + Sofia + CRM |
| Toda terça | Fran | Relatório WhatsApp semanal |
| Dia 15 e 30 | Fran | Reunião quinzenal (30 min — leads, Sofia, CRM, próximos 15 dias) |

---

## REGISTROS OBRIGATÓRIOS (após go live)

```
[ ] COMPANY-PROFILE.md atualizado: novo cliente ativo + faturamento
[ ] Bruno MEMORY.md: prospect movido para "fechado"
[ ] Kauan MEMORY.md: conta Meta + ID pixel + budget + públicos
[ ] Rodrigo MEMORY.md: conta Google + ID conversão + keywords
```

---

## REGRAS INVIOLÁVEIS

1. **Zero campanha sem tracking validado** — pixel e GA4 disparando antes de ligar o tráfego
2. **4 números antes de qualquer campanha** — sem eles você não sabe se está ganhando
3. **Pagamento antes do setup** — sem exceção
4. **Alinhamento de expectativa no kickoff** — expectativa desalinhada mata contratos
5. **7 dias de aprendizado sagrados** — não tocar na campanha nesse período
6. **Relatório toda semana** — cliente sem informação cria ansiedade e cancela
7. **Reunião Dia 30 é para upsell** — não só para mostrar número

---

## PENDÊNCIAS — O QUE FALTA CONSTRUIR ANTES DO PRÓXIMO CLIENTE

```
✅ 1. CONTRATOS FORMAIS — CONCLUÍDOS (2026-04-17)
       → Starter, Growth e Máquina gerados em C:\tmp\vaianuncio-estrutura\
       → Cobrem: prazo mínimo, PIX CNPJ C6 Bank + Asaas (cartão), cláusula
         de domínio em nome do cliente, entrega de arquivos em 5 dias úteis,
         hospedagem inclusa, multa por rescisão antecipada

[ ] 2. VERCEL FUNCTION — INTEGRAÇÃO SOFIA → CRM (template pronto, deploy pendente por cliente)
       ✅ Template criado: onboarding-cliente/sofia-webhook-template/
       → DEPLOY POR CLIENTE (5 min):
         1. Abrir Vercel → New Project → Import do template
         2. Configurar env vars (ver .env.example):
            - NOSSOCRM_URL  → URL do CRM do cliente
            - NOSSOCRM_API_KEY → gerar em NossoCRM → Configurações → API
            - BOARD_KEY     → chave do board (ver ao editar o board)
            - STAGE_LABEL   → "Consulta Agendada"
         3. Deploy → copiar URL gerada (ex: sofia-webhook-marcos.vercel.app)
         4. No GPTMaker: PUT /v2/agent/{id}/webhooks
            → onCreateEvent: https://sofia-webhook-[cliente].vercel.app/api/webhook
         5. Testar: simular conversa com Sofia → confirmar card no CRM
       → GERAR API KEY NO NOSSOCRM:
         NossoCRM → Configurações → API → Gerar nova chave → copiar

[ ] 3. TEMPLATE DE RELATÓRIO MENSAL
       → Documento visual (Google Slides ou Canva) enviado antes da
         Reunião do Dia 30 — não é o relatório semanal do WhatsApp
       → Inclui: total leads, CPL semana a semana (gráfico), melhor criativo,
         investimento total (agência + mídia), próximos passos
       → Serve para Growth e Máquina (Máquina inclui coluna de Sofia:
         atendimentos, agendamentos, no-shows evitados)
       ✅ Template HTML criado: onboarding-cliente/relatorio-mensal-template.html

[ ] 4. ESTEIRA DE CAMPANHAS META ADS
       ✅ Playbook completo documentado no checklist DIA 3-4 (validado 2026)
```

---

## META-INFORMAÇÃO

- **Versão:** 4.0.0
- **Criado:** 2026-03-20
- **Atualizado:** 2026-04-17
- **Validado por:** Conselho completo (Hormozi · Brunson · Justin Brooke · Jeremy Haynes · Cole Gordon · Jeremy Miner) + Conclave
- **Nicho principal:** Clínica Odontológica / Estética
- **Dependências:** agents/cargo/GESTOR-TRAFEGO-META/ · agents/cargo/GESTOR-TRAFEGO-GOOGLE/ · agents/cargo/SDR/
