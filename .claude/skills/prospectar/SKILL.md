# SKILL: /prospectar
## Sistema de Prospecção Ativa — VaiAnuncio

> **Auto-Trigger:** /prospectar, "prospectar", "buscar leads", "lista de prospects", "quem abordar hoje", "montar lista", "prospecção ativa"
> **Keywords:** prospectar, prospect, lead frio, cold outreach, lista de contatos, disparo WhatsApp, abordagem
> **Agente responsável:** Bruno (SDR)
> **Nível atual:** 1 — Claude gera lista + scripts, Fran envia manualmente
> **Validado por:** Jeremy Miner (NEPQ) · Cole Gordon (Qualificação) · Hormozi (Oferta)

---

## O QUE ESSA SKILL FAZ

1. Gera lista de prospects por nicho e cidade
2. Personaliza o script para cada prospect (nome, nicho, dor específica)
3. Organiza a fila do dia (20 contatos/dia)
4. Gera follow-up para quem não respondeu
5. Registra resultado de cada disparo

**O que ela NÃO faz (ainda):** enviar as mensagens. Isso é feito manualmente pelo Fran no WhatsApp.

---

## COMO INVOCAR

```
/prospectar --nicho "clínica odonto" --cidade "Curitiba" --servico "trafego"
/prospectar --nicho "petshop" --cidade "São Paulo" --servico "ia"
/prospectar --nicho "estética" --cidade "Campinas" --servico "combo"
/prospectar --followup --dias 2
/prospectar --relatorio
```

**Parâmetros:**
- `--nicho` → segmento alvo (obrigatório)
- `--cidade` → cidade alvo (obrigatório)
- `--servico` → `trafego` | `ia` | `combo` (padrão: combo)
- `--followup` → gera sequência de follow-up para leads sem resposta
- `--dias` → dias sem resposta para acionar follow-up (padrão: 2)
- `--relatorio` → mostra pipeline atual (enviados, respondidos, em negociação)

---

## NICHOS VALIDADOS

| Nicho | Serviço ideal | Resultado âncora | Dor principal |
|-------|--------------|-----------------|---------------|
| Clínica Odontológica | Combo | 47 agendamentos/semana | Lead some sem resposta rápida |
| Clínica de Estética | Combo | Agenda lotada em 2 dias | Leads fora do horário sem atendimento |
| Psicólogos | IA | Semanas inteiras agendadas | Primeiro contato perdido |
| Nutricionistas | IA + Tráfego | Atendimentos em alta | Captação manual e lenta |
| Petshop | Tráfego | Clientes novos e recorrentes | Dias fracos na semana |
| Delivery | IA | Recorde em horário fraco | Atendimento não escala no pico |
| Óticas | Tráfego | Agenda de teste de visão cheia em 5 dias | Baixo movimento espontâneo |
| Negócios Locais | Combo | Varia por nicho | Sem sistema de captação |

---

## ONDE BUSCAR OS PROSPECTS

### Fonte 1 — Google Maps (gratuito, melhor qualidade)
```
Busca: "[nicho] [cidade]"
Ex: "clínica odontológica Curitiba"

O que coletar por prospect:
- Nome do estabelecimento
- Telefone (WhatsApp)
- Nome do dono (tentar via site/Instagram)
- Avaliação (4+ estrelas = negócio ativo)
- Se tem site ou Instagram ativo
```

### Fonte 2 — CNPJ.biz (para nome do decisor)
```
URL: https://cnpj.biz/
Buscar pelo CNPJ ou razão social
Retorna: nome do sócio/proprietário — usar no script
```

### Fonte 3 — Instagram
```
Busca: #[nicho][cidade] ou "[nicho] [cidade]" na busca
Filtra: perfis com 500–10.000 seguidores (negócio real, ainda sem estrutura grande)
Evita: perfis sem posts recentes (negócio parado)
```

---

## REGRAS DE QUALIFICAÇÃO MÍNIMA (antes de entrar na lista)

Antes de adicionar qualquer prospect à lista, verificar:

```
[ ] Tem WhatsApp (número visível no Google Maps ou Instagram)
[ ] Está ativo (posts recentes ou avaliações recentes)
[ ] Tem entre 1-20 funcionários (não é rede grande, não é micro demais)
[ ] Não é concorrente direto
[ ] Não foi abordado nos últimos 30 dias
```

Se falhar em qualquer item → descarta.

---

## SCRIPTS POR NICHO — VALIDADOS PELO CONSELHO

> **Regras de ouro (Jeremy Miner):**
> 1. Sempre abre com pergunta de situação — nunca com apresentação
> 2. Termina com UMA única pergunta — nunca com lista de opções
> 3. Máximo 3 linhas por mensagem — se for maior, o lead não lê

---

### CLÍNICA ODONTOLÓGICA

**IA:**
```
Oi, tudo certo? Aqui é o Fran.
Quando um paciente manda mensagem perguntando sobre clareamento ou implante — qual é o tempo médio de resposta aí na clínica?
```
*(aguarda resposta — só continua se responder)*
```
Perguntei porque clínicas que demoram mais de 10 minutos perdem o lead pra concorrência na maioria das vezes.
Tenho um sistema que responde em segundos, qualifica e já agenda automaticamente. Uma clínica daqui bateu 47 agendamentos em uma semana.
Como tá sua agenda essa semana pra eu te mostrar?
```

**Tráfego:**
```
Oi, tudo certo? Aqui é o Fran.
Vocês já rodaram anúncio no Instagram focado em algum procedimento específico, tipo clareamento ou ortodontia?
```
*(aguarda)*
```
Perguntei porque tenho um método com foco em procedimento específico que tá lotando agenda.
Uma clínica aqui bateu 47 agendamentos em uma semana só com anúncio bem direcionado.
Posso te mostrar rapidinho como aplicaria aí?
```

---

### CLÍNICA DE ESTÉTICA

**IA:**
```
Oi, tudo certo? Aqui é o Fran.
Quando chega mensagem pedindo informação sobre botox ou preenchimento fora do horário — alguém da clínica responde na hora ou fica pra depois?
```
*(aguarda)*
```
Perguntei porque tenho implantado um sistema em clínicas da região que responde automaticamente, qualifica a cliente e já marca na agenda — sem precisar de atendente.
Tá convertendo 30%+ nos procedimentos. Queria só te mostrar como funcionaria aí. Tem como me chamar rapidinho?
```

**Tráfego:**
```
Oi, tudo certo? Aqui é o Fran.
Vocês já fizeram algum anúncio focado num procedimento específico, tipo botox ou limpeza de pele?
```
*(aguarda)*
```
Perguntei porque tenho um método focado em procedimento específico que tá lotando agenda.
Uma clínica aqui fechou a semana inteira em dois dias só com anúncio no Instagram.
Posso te mostrar rapidinho como aplicaria aí?
```

---

### PSICÓLOGOS

**IA:**
```
Oi, tudo certo? Aqui é o Fran.
Quando um paciente novo tenta entrar em contato fora do seu horário de atendimento — como funciona hoje?
```
*(aguarda)*
```
A maioria dos psicólogos perde esse lead porque não tem como responder na hora.
Tenho ajudado profissionais aqui da região com um sistema que organiza o primeiro contato, responde dúvidas e facilita o agendamento automaticamente — sem você precisar estar disponível.
Posso te mostrar como funciona?
```

---

### NUTRICIONISTAS

**IA:**
```
Oi, tudo certo? Aqui é o Fran.
Quando alguém te manda mensagem perguntando sobre consulta ou plano alimentar — você consegue responder na hora ou fica pra quando tiver tempo?
```
*(aguarda)*
```
Perguntei porque tenho ajudado nutricionistas da região com um sistema de IA que cuida do primeiro contato e do agendamento automaticamente.
O pessoal tá conseguindo mais consultas sem precisar ficar colado no celular. Posso te mandar como funciona?
```

---

### PETSHOP

**Tráfego:**
```
Oi, tudo certo? Aqui é o Fran.
O petshop de vocês tem mais movimento em algum dia específico da semana, ou é bem distribuído?
```
*(aguarda)*
```
Perguntei porque tenho rodado campanhas pra petshops com foco em banho e tosa e vacinação que preenchem justamente os dias mais fracos.
Tá trazendo bastante cliente novo e recorrente. Posso te explicar rapidinho como funcionaria aí?
```

---

### DELIVERY

**IA:**
```
Oi, tudo certo? Aqui é o Fran.
Nos horários de pico aí — o atendimento no WhatsApp consegue dar conta ou fica gente esperando resposta?
```
*(aguarda)*
```
Perguntei porque tenho automatizado o atendimento de alguns deliveries da região com IA que atende, vende e acompanha pedido sem depender de atendente.
O pessoal tá aumentando as vendas nos horários que antes eram fracos. Me avisa se posso te chamar pra mostrar como funciona?
```

---

### ÓTICAS

**Tráfego:**
```
Oi, tudo certo? Aqui é o Fran.
Vocês recebem bastante cliente espontâneo ou a maioria vem por indicação?
```
*(aguarda)*
```
Perguntei porque tenho rodado campanhas pra óticas da região com foco em teste de visão e armações premium.
Uma ótica aqui lotou os agendamentos de teste de visão em 5 dias só com anúncio no Instagram.
Queria te mostrar rapidinho como aplicaria aí. Tem como me chamar?
```

---

### NEGÓCIOS LOCAIS — Cold Call com Secretária

```
Bom dia, com quem eu falo?

[Nome], prazer, aqui é o Fran. Tenho uma proposta de parceria
e queria saber com quem posso tratar sobre isso aí.

[Se perguntar que tipo de parceria:]
Trabalho com empresas desse segmento aumentando o volume de
vendas — e o melhor: sem precisar investir em mais equipe.
Estou selecionando algumas empresas aqui na cidade pra ser
referência. Você sabe me dizer quem seria a pessoa certa pra
conversar?
```

---

### NEGÓCIOS LOCAIS — Cold Call Direto com o Dono

*(Buscar nome do sócio antes em cnpj.biz)*

```
Olá, é o [nome do dono]?
Aqui é o Fran. Vou ser direto — não fui indicado,
achei seu contato e decidi ligar porque trabalhei
com empresas muito parecidas com a sua e o resultado
foi bem fora do comum.

[nome], vocês já têm alguma estratégia de marketing
rodando hoje, ou ainda não chegaram nessa parte?
```
*(se sim → qualifica / se não → "quanto seria confortável investir por mês em marketing?")*

---

## SEQUÊNCIA DE FOLLOW-UP

> Usar quando lead respondeu positivamente mas sumiu, ou não respondeu a primeira mensagem.

**Dia 2 — sem resposta:**
```
Oi [nome], só passando pra saber se você viu minha mensagem.
Sem compromisso nenhum — queria só entender se faz sentido pra vocês.
```

**Dia 5 — ainda sem resposta:**
```
[Nome], vou deixar aqui pra você decidir na hora certa.
Se quiser entender como [resultado âncora do nicho], é só me chamar.
```

**Dia 10 — encerramento:**
```
[Nome], vou encerrar por aqui pra não tomar seu tempo.
Se em algum momento quiser conversar sobre crescimento,
é só me chamar. Terei prazer em ajudar.
```

---

## ROTINA DIÁRIA DE PROSPECÇÃO

```
MANHÃ (30 min — antes das 10h)
[ ] Montar lista do dia: 20 prospects novos via Google Maps
[ ] Buscar nome do decisor (CNPJ.biz ou Instagram)
[ ] Gerar scripts personalizados com /prospectar

TARDE (20 min — entre 13h e 15h)
[ ] Enviar os 20 disparos manualmente no WhatsApp
[ ] Registrar quem respondeu

FIM DO DIA (10 min)
[ ] Atualizar pipeline: respondeu / não respondeu / marcou reunião
[ ] Gerar follow-up do dia com /prospectar --followup
```

**Meta diária:** 20 disparos → 4-6 respostas → 1-2 reuniões agendadas → 0,5 fechamento

---

## PIPELINE — COMO REGISTRAR

Após cada disparo, registrar em formato simples:

```
| Nome | Nicho | Cidade | Status | Data | Próximo passo |
|------|-------|--------|--------|------|---------------|
| Clínica X | Odonto | CWB | Respondeu | 25/03 | Reunião 27/03 |
| Pet Y | Petshop | SP | Sem resposta | 25/03 | Follow D2 |
| Estética Z | Estética | CWB | Reunião marcada | 25/03 | /reuniao-vendas |
```

---

## FLUXO COMPLETO

```
/prospectar (gera lista + scripts)
  → Fran envia manualmente no WhatsApp
    → Lead responde → micro-qualificação
      → Lead qualificado → /proposta ou /reuniao-vendas
      → Lead não qualificado → descarta
    → Lead não responde → /prospectar --followup
      → Responde no follow-up → retoma fluxo
      → Não responde em 10 dias → arquivo morto
```

---

## MICRO-QUALIFICAÇÃO — após resposta positiva

Antes de marcar reunião, confirmar 2 perguntas:

```
1. "Vocês já investem em alguma forma de marketing hoje?"
   → Se nunca investiu nada → alerta (pode não ter orçamento)

2. "Você é quem decide sobre esse tipo de investimento aí?"
   → Se não → pedir para falar com quem decide antes de marcar reunião
```

Lead que passa nas 2 → agenda reunião → usar /reuniao-vendas

---

## INTEGRAÇÃO COM OUTRAS SKILLS

| Situação | Skill a usar |
|----------|-------------|
| Lead qualificado, precisa de proposta formal | `/proposta` |
| Reunião marcada | `/reuniao-vendas` |
| Lead respondeu mas não quer reunião agora | `/nurture` |
| Quer pesquisar o nicho antes de prospectar | `/research-first` |
| Fechou — precisa onboarding | `/onboarding-cliente` |
