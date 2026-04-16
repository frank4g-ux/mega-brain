# MEMORY — Rodrigo | Gestor de Tráfego Google Ads

> **Última atualização:** 2026-04-15
> **Versão do agente:** 1.3.0
> **Entradas:** 16

---

## DECISÕES REGISTRADAS

### 2026-03-20 - Contratação via /contratar
**Contexto:** Landing page da VaiAnuncio publicada com GTM (GTM-T29WB9RX) e GA4 disponível para configuração.
**Decisão:** Rodrigo contratado como Gestor de Tráfego Google Ads. Status inicial: ONBOARDING.
**Próximo passo:** Configurar Google Ads account + vincular GA4 + configurar conversão principal.
**Aprendizado:** GTM instalado mas conversões Google Ads ainda não configuradas. Primeira prioridade: criar tag de conversão no GTM para o CTA principal da LP.

---

### 2026-04-14 - Caso Eliane (Desentupidora) — ERRO CRÍTICO REGISTRADO
**Contexto:** Cliente Eliane estava recebendo resultados via Smart Campaign. Rodrigo recomendou pausar e migrar para campanha Search para ter "mais controle". A Search rodou com R$15/dia (abaixo do mínimo Justin para o nicho) e gerou zero conversões em 25 dias. Cliente perguntou quando vence o contrato — risco real de churn.
**Erro:** Pausar campanha ativa sem garantir que a substituta já converte. Violação das próprias regras acordadas com Justin.
**Lição registrada:** SE UMA CAMPANHA ESTÁ CONVERTENDO, NÃO MEXE. Migração só acontece se a nova campanha superar a atual em 14 dias consecutivos rodando em paralelo.
**Status atual:** Decisão do fundador pendente — reativar Smart ou corrigir Search com orçamento correto.

---

### 2026-04-15 - Simulação de Onboarding — 50 Cenários Reais
**Contexto:** Sessão de validação operacional com 50 cenários cobrindo onboarding, otimização, estratégia avançada, escala e relacionamento com cliente.
**Resultado:** 50/50 ✅ — APROVADO para operar contas de clientes reais.
**Arquivo completo:** `SESSAO-TREINAMENTO-50-CENARIOS.md`
**Destaques:** Protocolo Eliane (migração) aplicado corretamente. 4 números Justin consistentes. GML 2025, Thomas Eccel, Mike Rhodes, Demand Gen todos validados.

---

### 2026-04-15 - Ingestão v1.3.0 — Novas Fontes e SOUL Atualizado
**Contexto:** Sessão de expansão de conhecimento após reinício de PC (queda de energia). Auditoria completa do estado dos agentes + ingestão das fontes que faltavam.
**Adicionado:** Mike Rhodes (scripts/guardrails), Demand Gen, GML 2025 (AI Max completo, PMax brand controls, ACA, DDA), First-Party Data (Enhanced Conversions, Customer Match), Thomas Eccel (Google Ads local).
**SOUL atualizado:** v3.0.0 — LSA adicionado à arquitetura, blind spots do caso Eliane, seção Demand Gen.
**Status:** Nível estimado 9/10 — lado a lado com Justin Brooke e referências 2025/2026.

---

### 2026-04-14 - Treinamento Completo: Fundamentos Justin Brooke + Canais Externos
**Contexto:** Treinamento intensivo com todos os materiais disponíveis: JB004, JB005, JB007, JB012, JB014 + pesquisa canais Solutions 8, Aaron Young, Jyll Saskin Gales.
**Resultado:** MEMORY atualizada para v1.2.0 com fundamentos completos.

---

## FUNDAMENTOS JUSTIN BROOKE (Estrategista — alinhamento obrigatório)

### As 4 Métricas Críticas (JB004)
**Regra-mãe:** CTR e Conversion Rate são "fluff metrics". Não direcionam campanhas. As métricas que importam são as que você pode depositar no banco.

| Métrica | Fórmula | Para que serve |
|---------|---------|---------------|
| **EPC** (Earnings Per Click) | Receita ÷ Cliques | O jogo é CPC vs EPC. O gap é o lucro |
| **CPA** (Cost Per Acquisition) | Custo Total ÷ Novos Clientes | A métrica mais importante do negócio |
| **AOV** (Average Order Value) | Receita Total ÷ Novos Clientes | Se < R$50, problema no funil. Se > R$150, escala ilimitada |
| **DPL** (Dollar Per Lead) | Receita ÷ Leads | Define o teto de CPL viável |

**A grande lição:** Aumentar EPC + diminuir CPC = escala ilimitada. Quem tem EPC maior pode pagar mais por clique e vencer qualquer concorrente.

**Sobre AOV:** AOV abaixo de R$50 = inviável para tráfego pago na maioria dos nichos. Justin não aceita clientes com AOV abaixo desse nível. AOV acima de R$150 = acesso a escala massiva.

**Sobre DPL:** Justin sabia que seu DPL era $35. Ele podia pagar $1-3 por lead no Facebook. Conhecer o DPL define instantaneamente se a campanha é lucrativa ou não.

---

### Estrutura "Wins Every Time" — Google Ads (JB005)
**Hierarquia obrigatória:**
- **Conta** → **Campanha** (nomeada pelo site/produto) → **Grupo de Anúncios** (nomeado pela keyword) → **Anúncios + Keyword + LP**

**Regras inegociáveis:**
1. **1 keyword por grupo de anúncios** — extra trabalho que quase ninguém faz, recompensa com QS altíssimo
2. **1 landing page por grupo de anúncios** — a LP deve conter a keyword no URL, title tag e H1
3. **3 anúncios por grupo** — split test metodológico:
   - **Anúncio 1 (controle):** headline original + descrição original
   - **Anúncio 2:** headline diferente + descrição igual ao controle
   - **Anúncio 3:** headline igual ao controle + descrição diferente
   - Resultado: isolamento de variável — sabe-se exatamente o que mudou o resultado
4. **Nunca enviar para homepage** — sempre para LP dedicada à keyword

**5 Formas de Otimizar ROI (JB005):**
1. Split test ads (controle + variação de headline + variação de descrição)
2. Split test Mobile On/Off — para clínicas locais: Mobile On. Para negócios B2B: testar Off
3. Otimizar horários de pico — verificar relatório de horário, desativar em períodos de baixa conversão
4. Otimizar por localização — identificar cidades/regiões que mais convertem e concentrar budget
5. Negative keywords — adicionar termos que não convertem (ex: "escola", "curso", "emprego" para desentupidora)

---

### Quality Score — Como Dominar (JB005)
**QS é o "câmbio" do Google:** QS alto → custo por clique menor → mais ROI. QS baixo → custo alto → perda de dinheiro.

**Escala prática:**
- QS 1-3: anúncios podem não aparecer
- QS 4-6: resultados mediocres, custo alto
- QS 7+: bom. É aqui que se quer estar
- QS 8-9: excelente — custos baixos, ROI forte

**10 Formas de Aumentar QS:**
1. Privacy policy visível na LP
2. Página de contato na LP (Google quer ver negócio real)
3. Número de telefone na LP (aumenta confiança do usuário E do Google)
4. Keyword no URL da LP
5. Keyword no Title Tag da LP
6. Keyword no H1 da LP
7. Conteúdo educacional na LP (não só venda direta)
8. **1 keyword por grupo de anúncios** (o mais impactante)
9. Keyword no texto do anúncio (relevância)
10. Bounce rate baixo + page speed rápido (< 2 segundos para carregar)

**Referência Jyll Saskin Gales:** QS 7+ = excelente. Não otimizar para chegar em 10 — otimizar para manter 7+. Ad Strength (verde) ≠ Quality Score — são métricas diferentes, não confundir.

---

### Retargeting Estratégico (JB007 + JB012)
**Erro comum:** Retargetar todo mundo que visitou o site. Isso dilui o orçamento.

**Hierarquia de rentabilidade do retargeting (do mais para o menos lucrativo):**
1. **Abandonadores de checkout/formulário** — pessoa chegou na página de compra/agendamento mas não converteu. ROI frequentemente 300-500%. SEMPRE ativo.
2. **Leads que viraram leads mas não avançaram** — pessoa preencheu formulário mas não agendou/comprou. Segunda prioridade.
3. **Visitantes que leram conteúdo qualificado** — pessoas que passaram tempo real no conteúdo. Terceira prioridade.
4. **Todo tráfego do site** — último recurso, menor ROI por diluição.

**Regra Justin:** "Você seria louco se não estivesse fazendo retargeting de checkout. Toda vez que rodei essa campanha para clientes, foi lucrativa — às vezes 300-500% ROI."

**Para Google Ads (RLSA — Remarketing Lists for Search Ads):**
- Criar lista de visitantes de LP → licitar mais alto (bid modifier +50-100%) quando esse público buscar os termos
- Criar lista de visitantes de página de agendamento/contato → campanha separada com mensagem de urgência

---

### Landing Page e Conversão (JB012)
**Page Speed é CRÍTICO:**
- LP carregando em 4.2 segundos → conversão 15%
- LP carregando em 1.7 segundos (mesma página, host melhor) → conversão 33%
- Diferença: mesmo anúncio, mesmo público, mesmo copy — apenas velocidade
- **Regra Justin:** Se a LP demorar mais de 2 segundos para carregar, está perdendo conversões

**EPC da LP > Conversion Rate da LP:**
- Uma LP com 60% de opt-in que gera pouca receita perde para uma LP com 30% de opt-in que gera o dobro de receita por lead
- Testar LPs pelo DPL (quanto dinheiro por lead), não pelo % de conversão

**Offer Wall para aumentar EPC:**
- Se cliente tem múltiplos serviços/procedimentos, criar página pós-lead com oferta de outros serviços
- Não necessariamente venda imediata — pode ser captação de interesse para follow-up
- Quanto maior o AOV, mais se pode pagar por clique

---

## FRAMEWORKS EXTERNOS — GOOGLE ADS 2025/2026

### Solutions 8 (Kasim Aslam) — Performance Max & Estrutura Avançada
**6 Tipos de Campanha Google (ordem de implementação por maturidade de conta):**
1. Smart Campaign / LSA → para contas novas sem histórico
2. Search → keyword intent, controle manual
3. Display → awareness e retargeting
4. Shopping → e-commerce
5. YouTube → vídeo awareness + intent
6. Performance Max (PMax) → orquestração automática (requer histórico de conversão)

**Regras PMax (Solutions 8):**
- **Asset Group = 1 tipo de audiência** — nunca misturar públicos diferentes no mesmo asset group
- **Brand Campaign obrigatória** separada do PMax — PMax sem brand exclusion "rouba" cliques de marca barata
- **OCT (Offline Conversion Tracking) obrigatório para lead gen PMax** — sem OCT, o algoritmo do PMax otimiza por microconversões (cliques) em vez de leads reais
- **Brand exclusion list** no PMax de prospecção — proteger eficiência do orçamento
- **Regra de escala de budget:**
  - Aumento > 50% → período de aprendizado: 4 semanas
  - Aumento < 50% → período de aprendizado: 2 semanas
  - Nunca escalar PMax sem aguardar o período completo

**Diagnóstico de PMax com problemas:**
- Verificar Impression Share por canal (se 90% for em Display → problema de sinal)
- Asset report: assets com "Poor" → substituir imediatamente
- Buscar "Search themes" e comparar com Search campaigns para overlap

---

### Aaron Young (Definitive Google Ads) — S.T.A.B. Framework + Bidding
**S.T.A.B. Framework (para diagnóstico de qualquer campanha):**
- **S**tructure — a estrutura da campanha está correta? (1 tema por ad group, match types adequados)
- **T**argeting — estamos atingindo as pessoas certas? (keywords, audiências, localizações)
- **A**ds — os anúncios são relevantes e estão sendo rotacionados corretamente?
- **B**idding — a estratégia de lances está alinhada com o volume de conversões disponível?

**Progressão de Estratégia de Lances (gatilhos quantitativos):**

| Conversões no período | Estratégia | Justificativa |
|----------------------|------------|---------------|
| 0–19 | Maximize Clicks (CPC Manual) | Coletar dados sem Smart Bidding |
| 20–29 | Maximize Conversions | Algoritmo começa a aprender |
| 30–49 | tCPA (opcional) | Pode testar — ainda instável |
| 50+ | **tCPA** | Volume suficiente — define meta de CPL |
| 75-100+ | tROAS | Para e-commerce com valores variados |

**Auditoria de Search Terms — obrigatória a cada 72h:**
1. Abrir relatório de termos de pesquisa
2. Identificar termos irrelevantes → negative keywords
3. Identificar termos com alto volume sem conversão → negative ou ajuste de lance
4. Identificar termos com conversão alta e baixo volume → expandir com variações
5. Nunca deixar campanha Search rodar > 1 semana sem auditar search terms

**Regra de Broad Match:** Broad Match SÓ com Smart Bidding (tCPA ou tROAS) + histórico de conversões. Sem histórico de conversão, Broad Match = dinheiro no lixo.

---

### Jyll Saskin Gales — Google Ads 2025/2026 Atual
**AI Max (2025):**
- Não é tipo de campanha novo — é conjunto de features modulares ativáveis em Search
- Pode ativar/desativar: URL expansion, search themes, image assets
- Recomendação: testar AI Max features individualmente, não em bloco
- Contas com QS alto e estrutura rígida (1 kw/ad group): testar AI Max com cuidado

**Ad Strength vs Quality Score:**
- Ad Strength = feedback do Google sobre diversidade de assets (verde = bom, mas não é QS)
- Quality Score = relevância real para quem busca (afeta custo por clique diretamente)
- Focar em QS, não Ad Strength. São métricas completamente diferentes.

**Broad Match + Smart Bidding (2025):**
- Em 2025, Broad Match dentro de campanhas tCPA pode superar Exact Match em escala
- Condição: pelo menos 30+ conversões no período + tCPA ativo
- Teste: criar ad group com 1 keyword em broad match + 1 em exact, comparar CPA em 30 dias

---

### Thomas Eccel — Google Ads para Negócios Locais e Pequenas Contas

**Foco:** Especialista em Google Ads para pequenas e médias empresas locais — o nicho exato da VaiAnuncio (clínicas, prestadores, serviços locais).

**Filosofia:** Contas pequenas precisam de estratégia diferente de contas grandes. O que funciona para e-commerce com R$10k/mês de budget quebra com R$30/dia.

**Framework "Local Intent Capture":**
- Foco total em keywords de **intenção local + urgência**: "[serviço] + [cidade]", "[serviço] perto de mim", "[serviço] 24h"
- Evitar keywords genéricas sem modificador geográfico — CPC alto, conversão baixa
- Extensão de localização obrigatória: endereço + raio de atendimento visível no anúncio

**Estrutura recomendada para contas locais com orçamento limitado:**
1. **1 campanha Search** com 2-3 grupos de anúncios (urgência / serviço específico / nome do bairro)
2. **Extensões obrigatórias:** chamada + localização + sitelinks (Agendar, Área de atendimento, Sobre nós)
3. **Nenhum Display, nenhum PMax** até que a Search prove conversão — não diluir budget pequeno
4. **Horário de veiculação:** ativar só nos horários em que o cliente realmente atende — não pagar por cliques que não podem ser atendidos

**Negative keywords para contas locais (complemento à lista JB005):**
- Cidades fora da área de atendimento — adicionar todas as cidades vizinhas que o cliente NÃO atende
- "online", "virtual", "remoto" — se o serviço é presencial
- Nomes de concorrentes — protege o budget de cliques de reconhecimento de marca do concorrente

**Estratégia de lance para contas pequenas (Thomas Eccel):**
- Budget < R$30/dia → **Maximize Clicks com CPC máximo definido** (não Smart Bidding — sem dados suficientes)
- Budget R$30-60/dia → **Maximize Conversions** após 15+ conversões registradas
- Budget > R$60/dia → seguir progressão Aaron Young (S.T.A.B.)

**Diagnóstico rápido de conta local que não converte:**
1. Keywords têm modificador geográfico? ("dentista SP" não é o mesmo que "dentista")
2. LP carrega em menos de 2s no celular? (>60% do tráfego local é mobile)
3. Número de telefone clicável na LP? (usuário de urgência quer ligar, não preencher formulário)
4. Horário de veiculação cobre os horários de pico do nicho? (desentupidora: madrugada / clínica: manhã e tarde)
5. Extensão de chamada está ativa com número real? (não número de formulário)

**Insight crítico Thomas Eccel:** Para prestadores locais, o **clique no número de telefone é a conversão mais valiosa** — não o formulário. Configurar extensão de chamada + rastrear cliques em telefone como conversão principal, não como conversão secundária.

---

## PROTOCOLOS OPERACIONAIS

### Protocolo de Onboarding de Cliente Google Ads
1. Calcular os 4 números Justin: EPC, CPA, AOV, DPL — **DPL define o teto de CPL**
2. Validar LP: taxa de conversão > 3% e page speed < 2s antes de subir tráfego pago
3. Configurar tracking: GTM → GA4 → conversão principal → testar evento ao vivo
4. Confirmar que o evento de conversão está chegando no Google Ads antes de ativar
5. Definir canal ideal: **LSA primeiro** para prestadores locais / Smart para contas novas / Search para contas com histórico
6. Budget confirmado com cliente e acima do mínimo Justin para o nicho
7. Período de aprendizado: **não mexer nas campanhas por 14 dias**, monitorar só anomalias

### Protocolo de Migração de Campanha
**Regra obrigatória antes de qualquer migração (Smart → Search, Search → PMax, CPC → tCPA):**
1. Rodar nova campanha em paralelo por mínimo **14 dias**
2. Nova campanha precisa de conversões reais registradas antes de pausar a antiga
3. CPA da nova < CPA da antiga por pelo menos **7 dias consecutivos**
4. Nunca pausar campanha ativa sem aprovação explícita do fundador
5. Budget da nova precisa respeitar o mínimo Justin para o nicho

**Regra de ouro Justin Brooke:** "touching a learning campaign is the fastest way to waste money."

### Protocolo de Tracking de Ligações
**"Leads de chamada" registra conversão APENAS quando:**
- Fonte configurada como "Chamadas de anúncios" → rastreia cliques diretos no número do anúncio (extensão de chamada com número Google Forwarding)
- Fonte "Chamadas do site" → rastreia ligações do número na LP via tag GTM (número dinâmico Google)
- **Duração mínima configurada: 30 segundos** (não 60s — muita chamada curta qualificada é perdida)

**Se cliente atende por ligação:** SEMPRE configurar extensão de chamada com número Google Forwarding no anúncio. Não depender só do número na LP.

### Protocolo de Auditoria Semanal (toda segunda-feira)
1. Quality Score médio da conta — alvo: ≥ 7
2. Search Term Report — remover irrelevantes, identificar oportunidades
3. Impression Share — se < 60% em termos principais, investigar (budget limitado? QS baixo? Ad rank?)
4. CPA vs DPL do cliente — campanha está dentro do teto de lucratividade?
5. Page speed da LP do cliente — ainda < 2 segundos?
6. EMQ Score de conversões — verificar se todos os eventos estão disparando

### Gatilhos de Mudança de Estratégia de Lances
| Conversões no período | Ação recomendada |
|----------------------|-----------------|
| 0–19 | Maximizar Cliques — coleta dados sem Smart Bidding |
| 20–49 | Maximizar Conversões — algoritmo começa a aprender |
| 50+ | tCPA — define meta de custo por conversão |
| 100+ | tROAS — para e-commerce com valores diferentes por produto |

### Budgets Mínimos por Nicho (Justin Brooke — Inegociável)

| Nicho | Budget mínimo/dia | Justificativa |
|-------|------------------|---------------|
| Clínicas / Consultórios | R$ 25/dia | QS alto compensa custo menor |
| Prestadores de serviço local (desentupidora, elétrica, hidráulica) | **R$ 30/dia** | Alta concorrência + urgência = CPC alto |
| E-commerce | R$ 40/dia | Precisa de volume para Shopping aprender |

**Se cliente não topa o mínimo:** escalar para o fundador. Nunca rodar abaixo e prometer resultado.
**Caso Eliane:** R$15/dia para desentupidora é matematicamente inviável — ~4 cliques/dia, zero margem para conversão.

### Local Services Ads (LSA) — Primeira Recomendação para Prestadores
**O que é:** Canal do Google para prestadores de serviço local. Cobra por lead qualificado (ligação real), não por clique.

**Quando usar:** Desentupidora, eletricista, encanador, serviços de emergência local.
**Vantagens sobre Search:**
- Paga por lead, não por clique — zero desperdício com tráfego irrelevante
- Badge "Google Garantido" aumenta conversão
- Aparece ACIMA dos anúncios Search e do pacote local
- Ligações são gravadas e o Google valida se é lead real

**Configuração:** Google Business Profile verificado → solicitar inscrição LSA → Google faz triagem → badge ativo.

**Regra:** Para qualquer cliente prestador de serviço local, **LSA é a PRIMEIRA recomendação**. Search é complementar.

### Smart Campaign — Quando Usar e Quando NÃO Migrar

**Smart Campaign é a escolha CORRETA quando:**
- Cliente tem orçamento < R$ 30/dia
- Não tem LP dedicada (usa o perfil do Google Business)
- Nicho local com baixo ticket de configuração
- Não há histórico de conversão para alimentar Smart Bidding manual

**Migrar para Search APENAS quando:**
- Smart Campaign tem pelo menos **20 conversões registradas**
- Fundador aprova a mudança com justificativa de dados
- Nova campanha Search roda em **paralelo por 14 dias** antes de pausar a Smart
- Budget aumenta junto com a migração

**NUNCA migrar de Smart para Search só porque "quer mais controle" sem dados. — Caso Eliane.**

### Negative Keywords — Expansão por Nicho
**Desentupidora/Prestadores:**
grátis, gratuito, curso, faculdade, emprego, vaga, freelancer, tutorial, como fazer, DIY, você mesmo, manual, passo a passo, barato demais (<R$50 qualquer serviço)

**Clínicas/Saúde:**
plano de saúde, SUS, INSS, convênio, concurso, faculdade de medicina, estágio, residência médica, gratuito

---

## FRAMEWORKS EXTERNOS — NOVOS (2025/2026)

### Mike Rhodes (AgencySavvy) — Scripts, IA e Automação Inteligente
**Filosofia:** Não lute contra a IA do Google — guie ela com guardrails. Scripts são a camada de controle humano sobre o algoritmo.

**Scripts obrigatórios para qualquer conta:**
1. **Budget Pacing Script** — distribui o orçamento ao longo do mês, evitando gastar tudo nos primeiros dias e ficar offline no fim do período
2. **Anomaly Detection Script** — alerta por email se CPA subir >50% em 24h, impressões caírem >70%, ou CTR despencar — detecção antes do cliente perceber
3. **Quality Score Monitor** — exporta QS de todas as keywords semanalmente para planilha — permite ver tendência ao longo do tempo
4. **Search Term Harvester** — identifica automaticamente termos com conversões que ainda não estão como keywords exatas — oportunidade de expansão

**AI Bidding com guardrails (método Rhodes):**
- Smart Bidding (tCPA/tROAS) + Script de teto de CPC = melhor dos dois mundos
- Script define CPC máximo por keyword → impede que o algoritmo pague absurdo em termos novos
- Target: algoritmo decide o lance dentro do limite humano definido
- Resultado documentado: 15-25% de eficiência a mais vs. Smart Bidding puro em contas com histórico < 6 meses

**PMax com feed otimizado (Rhodes):**
- Qualidade do feed de produtos = 80% do resultado em Shopping/PMax
- 5 campos que mais impactam: título, imagem principal, preço, categoria Google, disponibilidade
- Título ideal: [Marca] + [Produto] + [Atributo principal] + [Tamanho/cor se relevante]
- Script de auditoria de feed: identifica produtos com baixo CTR → títulos para otimizar primeiro

---

### Demand Gen — O Meio do Funil que o Google Criou para Competir com Meta
**O que é:** Tipo de campanha lançado em 2024 que substituiu Discovery. Veiculação em YouTube (feed + Shorts), Gmail e Discover. É o canal de interrupção do Google — diferente de Search (captura), Demand Gen *cria* demanda.

**Quando usar:**
- Cliente com produto/serviço que o público não está buscando ativamente ainda
- Retargeting visual de quem visitou a LP mas não converteu
- Público similar (lookalike nativo) baseado em lista de clientes existentes

**Estrutura recomendada:**

| Conjunto | Público | Objetivo |
|----------|---------|----------|
| Prospecção | Lookalike 1-3% de lista de clientes | Awareness + tráfego qualificado |
| Retargeting 30 dias | Visitantes da LP sem conversão | Reativar com prova social |
| Retargeting 7 dias | Visitantes da página de agendamento | Urgência — quase converteu |

**Criativos para Demand Gen:**
- Formato vertical (9:16) para YouTube Shorts — obrigatório em 2025
- Imagens com pessoas reais performam 3x melhor que ilustrações (dado Google interno)
- Copy: não use copy de Search — escreva como Meta, interrupção com gancho

**Métricas:** CPM (alcance), CPC (tráfego), CPL (conversão). Benchmark Brasil: CPL R$15-40 para serviços locais.

**Sinergia:** Demand Gen aquece → Search captura. Usar RLSA para licitar mais alto no Search para quem já viu o anúncio Demand Gen.

---

### Google Marketing Live 2025 — As Mudanças que Definem 2025/2026

**AI Max para Search (lançado GML 2025):**
- Conjunto de features modulares ativáveis em campanhas Search existentes
- **URL Expansion:** Google escolhe qual página enviar o usuário além da LP definida — DESATIVAR para a maioria dos clientes até que todo o site seja validado
- **Search Themes:** Fornece até 25 temas → Google expande keywords — alternativa mais controlada que Broad Match puro
- **Text Asset Generation:** Google escreve headlines/descrições com IA baseado na LP — revisar sempre antes de publicar
- **Recomendação:** Ativar Search Themes para contas com orçamento limitado. Manter URL Expansion desativada.

**PMax com Brand Controls (GML 2025 — aguardado desde 2023):**
- Finalmente possível: excluir termos de marca da campanha PMax de prospecção
- Criar Brand Campaign separada → excluir brand do PMax → Budget do PMax vai 100% para novos clientes
- Sem brand exclusion: PMax consome cliques baratos de marca e infla métricas sem gerar clientes novos

**Automatically Created Assets (ACA):**
- Google cria headlines/descrições com IA baseado na LP e histórico da conta
- Monitorar aba "Assets" semanalmente — se ACA performa pior que assets manuais → desativar
- Não confundir com RSA — ACA são assets gerados automaticamente, não os que você escreveu

**Data-Driven Attribution como padrão:**
- Google migrou todas as contas para DDA em 2024 — Last-click morreu
- DDA distribui crédito por todos os pontos de contato — Search captura menos crédito "na ponta"
- Impacto: CPA aparente pode subir — não significa que a campanha piorou. Verificar Revenue/Lead total.

---

### First-Party Data e Privacy — O Novo Targeting do Google

**Enhanced Conversions for Web:**
- Tag de conversão envia email/telefone hasheado (SHA-256) junto com a conversão
- Google cruza com conta logada → melhora qualidade do sinal de conversão
- Impacto: até 30% mais conversões registradas vs. tag padrão
- Setup: ativar no Google Ads → configurar no GTM com variável de email do formulário

**Enhanced Conversions for Leads (Offline):**
- Importa dados de conversão offline (CRM → lead que virou cliente)
- Permite otimizar por "lead que fechou", não só "lead que preencheu formulário"
- Para VaiAnuncio: quando cliente tem NossoCRM → importar fechamentos mensais

**Customer Match:**
- Upload de lista de clientes (email/telefone) → Google cria audiência
- Usos: excluir clientes atuais de prospecção / criar lookalike / reativar churned clients
- Requisito: conta com histórico de gastos e boa reputação

---

## CONTAS ATIVAS

| Cliente | Nicho | Status | Budget/dia | CPA atual | Meta |
|---------|-------|--------|-----------|-----------|------|
| Eliane | Desentupidora | ⚠️ Recuperação — decisão pendente | R$15 (abaixo do mínimo) | R$0 (0 conversões) | R$35 |

---

## CAMPANHAS EM ANDAMENTO

| Campanha | Cliente | Tipo | Status | Observação |
|----------|---------|------|--------|-----------|
| [PESQ][24-03][4CIDADES] | Eliane | Search | Ativa - Limitada pelo orçamento | 0 conversões em 25 dias — recuperação em andamento |

---

## ERROS A EVITAR

| Erro | Por que evitar | Aprendido em |
|------|----------------|--------------|
| Ativar campanha sem conversão vinculada ao GA4 | Smart Bidding não funciona sem dados de conversão | Onboarding 2026-03-20 |
| Pausar campanha ativa sem a substituta convertendo | Causa zero resultado e risco de churn — caso Eliane | 2026-04-14 |
| Aceitar orçamento abaixo do mínimo Justin | Matematicamente inviável gerar resultado — caso Eliane (R$15 vs R$30 mínimo) | 2026-04-14 |
| Migrar Smart → Search só para "ter mais controle" | Smart pode superar Search em contas pequenas com pouco histórico | 2026-04-14 |
| Configurar "Leads de chamada" sem definir a fonte correta | Chamadas reais não são registradas — zero conversão no painel | 2026-04-14 |
| Mudar estratégia de lances sem atingir gatilho quantitativo | Smart Bidding sem volume suficiente é pior que CPC manual | 2026-04-14 |
| Ter múltiplas keywords por grupo de anúncios | Dilui relevância → QS baixo → custo alto | JB005 2026-04-14 |
| Enviar tráfego para homepage | LP dedicada sempre → relevância + conversão | JB005 2026-04-14 |
| Não auditar Search Terms em 72h | Termos irrelevantes consomem budget silenciosamente | Aaron Young 2026-04-14 |
| Ativar PMax sem OCT para lead gen | Algoritmo otimiza por cliques em vez de leads reais | Solutions 8 2026-04-14 |
| Rodar Broad Match sem Smart Bidding | Broad sem tCPA/tROAS = tráfego completamente irrelevante | Aaron Young/Jyll 2026-04-14 |
| Confundir Ad Strength com Quality Score | São métricas diferentes — QS afeta custo, Ad Strength não | Jyll Saskin Gales 2026-04-14 |
| Olhar CTR e Conversion Rate como métricas principais | São "fluff metrics" — direcionar por EPC, CPA, DPL, AOV | JB004 2026-04-14 |
| Escalar budget PMax > 50% em semana única | Reinicia aprendizado — aguardar 4 semanas após aumento > 50% | Solutions 8 2026-04-14 |
| Ativar URL Expansion do AI Max sem validar todas as páginas do site | Google pode enviar tráfego para páginas de baixa conversão — dilui a LP dedicada | GML 2025 |
| Rodar PMax sem brand exclusion | PMax consome budget em buscas de marca baratas — infla ROAS, não gera clientes novos | GML 2025 |
| Ignorar Enhanced Conversions | Tag padrão perde até 30% das conversões — Smart Bidding aprende com dados incompletos | First-Party Data 2025 |
| Rodar Demand Gen com copy de Search | Demand Gen é interrupção — precisa de gancho visual, não copy de intenção comercial | Mike Rhodes 2025 |
| Não usar scripts de anomaly detection | Campanha pode degradar por 3-5 dias sem que ninguém perceba | Mike Rhodes |
