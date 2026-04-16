# MEMORY — Kauan | Gestor de Tráfego Meta Ads

> **Última atualização:** 2026-04-15
> **Versão do agente:** 1.3.0
> **Entradas:** 17

---

## DECISÕES REGISTRADAS

### 2026-03-20 - Contratação via /contratar
**Contexto:** Landing page da VaiAnuncio publicada, Meta Pixel instalado (ID: 1720811912632509) e GTM configurado.
**Decisão:** Kauan contratado como Gestor de Tráfego Meta Ads. Status inicial: ONBOARDING.
**Próximo passo:** Aguardar primeiro cliente + validação da landing page para iniciar campanhas.
**Aprendizado:** Pixel instalado mas sem dados de conversão configurados. Primeira prioridade: configurar evento "Lead" no Pixel para o CTA principal da LP.

---

### 2026-04-14 - Treinamento: Protocolo de Campanha em Aprendizado — NUNCA MEXER
**Contexto:** Caso Rodrigo/Eliane (Google): campanha ativa convertendo foi pausada para testar nova estrutura. Resultado: zero leads em 25 dias, risco de churn.
**Lição para Meta:** O algoritmo do Meta precisa de ~50 conversões por conjunto para sair do aprendizado. Qualquer mudança significativa (orçamento >20%, público, criativo principal) reinicia o aprendizado do zero.

**Regra obrigatória:**
- Nunca pausar conjunto de anúncios que está convertendo abaixo do DPL definido
- Nunca alterar público, objetivo ou orçamento >20% em conjunto ativo — criar conjunto novo em paralelo
- Período mínimo de análise antes de pausar: 72h + mínimo 500 impressões

**Justin Brooke:** "touching a learning campaign is the fastest way to waste money."

---

### 2026-04-15 - Simulação de Onboarding — 50 Cenários Reais
**Contexto:** Sessão de validação operacional com 50 cenários cobrindo onboarding, criativos, estratégia avançada, escala e relacionamento com cliente.
**Resultado:** 50/50 ✅ — APROVADO para operar contas de clientes reais.
**Arquivo completo:** `SESSAO-TREINAMENTO-50-CENARIOS.md`
**Destaques:** Andromeda aplicado corretamente. DPL consistente. C2WA + WhatsApp Brasil validados. Jon Loomer (CAPI/EMQ/deduplicação), Ben Heath, Nick Theriot, Foxwell e Andrew Hubbard todos corretos.

---

### 2026-04-15 - Ingestão v1.3.0 — Novas Fontes e SOUL Atualizado
**Contexto:** Sessão de expansão de conhecimento após reinício de PC (queda de energia). Auditoria completa do estado dos agentes + ingestão das fontes que faltavam.
**Adicionado:** Foxwell Digital (Profitable Scaling, Creative Research 6 ângulos), Andrew Hubbard (Evergreen Funnel), ASC (e-commerce automático), C2WA (WhatsApp Brasil + loop CRM/CAPI), Meta Gen AI (criativos), Andromeda 10 mudanças detalhadas.
**SOUL atualizado:** v3.0.0 — estrutura pós-Andromeda, blind spots 4 e 5, seção WhatsApp.
**Status:** Nível estimado 9/10 — lado a lado com Justin Brooke e referências 2025/2026.

---

### 2026-04-14 - Treinamento Completo: Fundamentos Justin Brooke + Canais Externos
**Contexto:** Treinamento intensivo com JB006, JB007, JB012, JB019 + pesquisa canais Ben Heath, Nick Theriot, Jon Loomer.
**Resultado:** MEMORY atualizada para v1.2.0 com fundamentos completos.

---

## FUNDAMENTOS JUSTIN BROOKE (Estrategista — alinhamento obrigatório)

### As 4 Métricas Críticas para Meta (JB004)
**Regra-mãe:** CTR e Conversion Rate são "fluff metrics". Não direcionam campanhas. As métricas que importam são as que você pode depositar no banco.

| Métrica | Fórmula | Para que serve no Meta |
|---------|---------|----------------------|
| **EPC** (Earnings Per Click) | Receita ÷ Cliques | O jogo é CPM/CPC vs EPC |
| **CPA** (Cost Per Acquisition) | Custo Total ÷ Novos Clientes | Métrica mais importante |
| **AOV** (Average Order Value) | Receita Total ÷ Novos Clientes | AOV > R$150 = escala ilimitada |
| **DPL** (Dollar Per Lead) | Receita ÷ Leads | Define o teto de CPL viável |

**A grande lição:** Se o DPL do cliente é R$35 e você consegue leads a R$5-8, a conta é lucrativa por definição. Conhecer esses 4 números elimina 90% das discussões sobre "o Meta não está funcionando".

---

### Preframe: O Anúncio Não Vende o Produto — Vende o Clique (JB006)
**Erro crítico que a maioria comete:** Criar anúncio com imagem chocante/curiosa que gera CTR alto mas traz pessoas sem interesse no produto.

**Regra Justin:** O anúncio tem duas funções:
1. **Vender o clique** — não o produto
2. **Preframe o visitante** — colocar a pessoa no estado mental certo antes de chegar na LP

**Exemplo negativo:** Campanha com imagem de personagem de quadrinhos para produto de emagrecimento. CTR disparou mas conversão despencou — as pessoas que clicaram não queriam o produto, só tinham curiosidade sobre a imagem.

**Regra de preframe:** A imagem e o copy do anúncio devem fazer o visitante pensar "isso é exatamente o que eu preciso" antes de clicar. Se gera CTR mas não gera conversão, o preframe está errado.

---

### Custom Audiences — Quando Usar e Quando NÃO (JB006 + JB019)
**A verdade que Justin conta:** Custom Audiences são ótimas para campanhas curtas (lançamentos, ofertas especiais), mas NÃO funcionam para marketing contínuo.

**Por quê:** Audiência de 10.000-50.000 pessoas é pequena demais para escala. Em poucos dias, as mesmas pessoas estão vendo o mesmo anúncio várias vezes → fadiga de audiência → CTR despenca → CPC sobe.

**Regras de uso:**
- Custom Audience = lançamento de produto, oferta especial de 7-14 dias, reativação de lista
- Para escala contínua: **audiência mínima de 500.000 pessoas** (Justin prefere 1M+)
- Excluir compradores de campanhas de prospecção — nunca gastar budget mostrando anúncio para quem já comprou

**Lookalike Audiences — 2 Modos:**
- **Similarity (1%):** Encontrar quem mais se parece com seus melhores clientes → mais conversões, menos escala
- **Reach (1-3%):** Volume maior → mais escala, ligeira queda de qualidade
- Criar Lookalike a partir de **lista de compradores** (não de visitantes) → melhor sinal para o algoritmo

---

### Retargeting Estratégico — Hierarquia de ROI (JB007 + JB014)
**Hierarquia do mais para o menos lucrativo:**
1. **Abandono de checkout/formulário de agendamento** — chegou na página mas não converteu. ROI frequentemente 300-500%. SEMPRE ativo.
2. **Leads que não avançaram** — optou mas não agendou/comprou. Segunda prioridade.
3. **Visitantes de página de vendas/serviços** — janela 30 dias
4. **Engajamento com page/perfil** — menor qualidade

**Regra Justin:** Não desperdiçar budget retargetando todo visitante do site. Pixel na homepage é fraco. Pixel na página de checkout/agendamento é ouro.

**Para Meta Ads:**
- Evento "InitiateCheckout" ou "ViewContent" na página de formulário → criar audiência → mostrar anúncio com incentivo (urgência, bônus, prova social)
- Janela: 7 dias para urgência / 30 dias para serviços / 14 dias para alto ticket

---

### Otimização de Criativos — Variações de Imagem (JB019)
**Quando um criativo funciona bem mas começa a fatigar:**
Criar 3 versões da mesma imagem vencedora:
1. **Original** — a imagem que já está funcionando
2. **Posterizada/cartoon** — versão artística da mesma imagem
3. **Preto e branco** — desaturar completamente; às vezes **dobra o CTR** porque se destaca no feed colorido

**Por que funciona:** O algoritmo não sabe que são a mesma imagem. São 3 criativos "diferentes" que estendem a vida útil do visual sem precisar criar novo conceito do zero.

---

### 3 Campanhas Que Todo Negócio Deve Ter (JB006)
**Contexto:** Justin falava de Pages (Facebook orgânico), mas o princípio se aplica a campanhas pagas:
1. **Campanha de Alcance/Engajamento** — fazer o conteúdo chegar para o público certo (boost de posts estratégicos, não o botão "impulsionar")
2. **Campanha de Conversão (Lead/WhatsApp)** — gerar leads diretos do público frio
3. **Campanha de Retargeting** — reativar quem interagiu mas não converteu

**Budget sugerido Justin:** R$5-25/dia em campanhas de engajamento/alcance + maior budget na conversão principal.

---

## FRAMEWORKS EXTERNOS — META ADS 2025/2026

### Meta Andromeda (Outubro 2025) — Mudança Estrutural do Algoritmo
**O que é:** Redesenho completo do sistema de entrega de anúncios do Meta. 83 mudanças documentadas. Direção única: **menos controle do anunciante, mais autoridade do algoritmo**.

**Como funciona agora:**
- **Andromeda** → decide quais ads são considerados
- **Advantage+ Audience** → decide para quem entregar
- **GEM (Generative Experience Meta)** → decide distribuição entre placements
- **Value Optimization** → decide o bid

**Implicação prática:** A função do gestor mudou de "controlar a campanha" para **"alimentar o sistema com bons inputs"**. Targeting granular e fragmentação de ad sets são contraproducentes pós-Andromeda.

---

### Ben Heath — Framework 2×10×10 e Estrutura Dupla de Campanhas
**Estrutura recomendada pós-Andromeda:**
| Campanha | Budget | Objetivo |
|----------|--------|----------|
| **Scaling Campaign** | 80% | Criativos provados, Advantage+ audience amplo |
| **Testing Campaign** | 20% | Novos criativos, novos ângulos |

**Regras estruturais:**
- Máximo 1-3 ad sets por campanha (pós-Andromeda)
- Cold e warm audience no **mesmo ad set** — Meta trata targeting como sugestão, não restrição
- Advantage+ Audience como padrão — performa igual ou melhor que targeting manual

**Framework 2×10×10 (Hook Testing):**
- Grave **2 corpos de vídeo** (o conteúdo principal — parte cara de produzir)
- Crie **10 hooks visuais** (abertura visual diferente)
- Crie **10 hooks verbais** (frase de abertura diferente)
- Resultado: 200 combinações sem filmar do zero
- **Métrica-chave:** Hook Rate — % de pessoas que assistem além dos 3 primeiros segundos
- **Por que funciona:** O hook é onde está a atenção. Com rotação de hooks, um ad que durava 6 semanas passa a durar 6 meses

**Quando pausar/escalar (Ben Heath):**
- Rode cada criativo até atingir **50 conversões** OU **3-5 dias completos** antes de decidir
- Automated rule: pausar ad que gastar **2x o CPA target sem converter**
- Não pausar "perdedores" precipitadamente — ads fracos dentro de um CBO podem estar "preparando" conversões para os vencedores (hidden funnel)

**Diagnóstico de escala travada:** Se o CBO não está gastando, o problema é quase sempre o criativo — não estrutura, não targeting, não bid.

---

### Nick Theriot — Red Ocean vs. Blue Ocean + CBO Creative Problem
**Filosofia:** O algoritmo já sabe onde estão os compradores. Se o ad não engaja, o sistema simplesmente não gasta nele.

**Red Ocean vs. Blue Ocean Positioning:**
- **Red Ocean** = ad idêntico aos concorrentes → algoritmo não favorece → budget não flui
- **Blue Ocean** = posicionamento visual e copy que cria separação imediata → usuário para → algoritmo percebe engajamento → gasta mais

**Diagnóstico do "CBO não gasta" (Nick Theriot):**
1. O criativo parece igual a todos do nicho? (Red Ocean)
2. O hook mostra o resultado desejado nos 3 primeiros segundos?
3. O ângulo é mass-market ou hiper-nichado?
Se respondeu "não" para qualquer um → **problema é o criativo, não a estrutura.**

**Framework de Hook que Funciona:**
- Abrir mostrando o resultado desejado (não o produto, o resultado)
- Call out sub-específico: "Se você tem clínica de estética e..." > "Para donos de clínica"
- Mass-market desires > niche hyper-specific — desejos universais recebem mais spend do algoritmo

**Regras Nick Theriot:**
1. Broad > targeting específico — interesses são limitantes em 2025
2. Métricas que importam = dinheiro: Revenue, ROAS, CPL. Não CTR, alcance ou frequência.
3. Nunca mexer em campanha que está funcionando
4. **Regra dos 3 dias:** mínimo 3 dias antes de qualquer decisão de pausa/escala
5. Escala: máximo 20% a cada 48-72h — acima disso mata winners
6. **Para escala agressiva sem risco:** duplicar a campanha vencedora, subir budget na cópia, manter o original intacto

---

### Jon Loomer — CAPI Avançado, Deduplicação e EMQ
**A virada de Jon Loomer (2025):** Admitiu publicamente que estava errado sobre targeting manual. Citou diretamente o Meta: *"The focus has shifted from niche targeting to creative diversification as the best lever to find relevant audiences."*

**Audiências de Engajamento (do mais quente para o mais frio):**
1. **Mensagens iniciadas no WhatsApp/Messenger** — mais qualificado, já teve contato
2. **Visitantes de LP + evento de formulário iniciado** — intenção máxima
3. **Visualizações de vídeo 75%+** — alta qualidade de interesse
4. **Engajamento com Instagram (salvamentos, comentários, DMs)** — ativo
5. **Curtidas em posts + seguidores do perfil** — médio
6. **Visualizações de vídeo 25-50%** — baixo, testar com cuidado

**Janelas de audiência por temperatura:**
- WhatsApp iniciados / formulário abandono → 7 dias
- Video views 75% / LP visitors → 30 dias
- Page engagement / Instagram engagement → 60 dias
- Website visitors gerais → 90 dias

**CAPI via Stape (método Jon Loomer):**
- Custo: $10/mês por pixel
- Setup: menos de 10 minutos, sem conhecimento de cloud
- Resultado médio: +10% de eventos adicionais que o pixel sozinho perderia
- Configurar **Automatic Advanced Matching** no Stape
- Selecionar todos parâmetros disponíveis: email, phone, name, etc.

**EMQ Score — Como Melhorar:**
- Score abaixo de 6: algoritmo subestima seus dados, otimização é fraca
- **Maior impacto isolado:** adicionar email hasheado (SHA256) → salto típico de **+4 pontos** no EMQ
- **fbp e fbc são críticos:** são a ponte entre evento server-side e o usuário que clicou. Sem eles, o CAPI não fecha o loop
- Combinação ideal: email + phone + location + fbp + fbc → EMQ 8.5+

**Deduplicação — O Erro Silencioso (CRÍTICO):**
- **70% das contas têm tracking quebrado ou duplicado**
- Pixel browser + CAPI sem deduplicação → Meta conta cada conversão DUAS vezes → ROAS inflado 2x → você acha que está bem → escala → desce
- **Como corrigir:**
  1. Gerar `event_id` único por evento (hash de order ID + timestamp)
  2. Enviar o mesmo `event_id` no pixel browser E na chamada CAPI
  3. Meta deduplica dentro de 48h quando os IDs coincidem
  4. Verificar no Events Manager → "Test Events" → deve aparecer "Browser + Server (deduplicated)"

**Advantage+ Audience — Uso Correto (Jon Loomer):**
- Ativar sempre como padrão
- Usar **Audience Segments** (Engaged + Existing Customers) para REPORTE, não para restrição de entrega
- Detailed targeting e lookalikes como "suggestions" — não restrictions obrigatórias
- Resultados documentados: 13% menor CPC para catálogos, 7% menor CPA para conversões web, 28% menor CPC para leads

---

## PROTOCOLOS OPERACIONAIS

### Protocolo de Onboarding de Cliente Meta Ads
1. Calcular os 4 números Justin: EPC, CPA, AOV, DPL — DPL define o teto de CPL
2. Validar LP: taxa de conversão > 3% e page speed < 2s antes de subir tráfego pago
3. Validar Pixel: evento de conversão principal disparando e chegando no Events Manager
4. Verificar EMQ Score: se < 6, acionar Felipe (Especialista Tracking) para CAPI antes de ativar campanha
5. Confirmar orçamento está acima do mínimo Justin para o nicho
6. Estrutura inicial: 1 campanha → 1 conjunto de anúncios (Advantage+) → 4 criativos (ângulos diferentes)
7. Fase de aprendizado: 72h sem tocar + aguardar 50 conversões antes de otimizar

### Protocolo de Creative Testing (Criativos)
**Os 4 Ângulos VaiAnuncio para clientes de saúde/serviço:**
1. **Urgência/Dor** — "Sua clínica está perdendo pacientes para concorrentes que respondem em 5 minutos"
2. **Prova Social** — case/resultado real do cliente com número
3. **Transformação** — antes/depois do processo (sem resultado garantido — ⚠️ palavras banidas)
4. **Autoridade/Diferencial** — "Única clínica de [nicho] em [cidade] com IA de atendimento 24h"

**Regras de pausa:**
- CTR < 0,8% após 500 impressões → pausar criativo
- CPL > 2x DPL após 72h → pausar conjunto
- Frequência > 4x → criar novos criativos ou pausar conjunto para descanso de público

**Extensão de vida de criativo vencedor (Justin/JB019):**
Quando um criativo funciona mas começa a fatigar → criar 3 versões:
1. Original
2. Posterizada/cartoon (Fiverr)
3. Preto e branco (tool gratuita: Pixlr Express)

### Protocolo de Escala
**Escala de orçamento:**
- Aumentar máximo **20% a cada 3-4 dias** — acima disso reinicia aprendizado
- Só escalar conjunto com CPL abaixo do DPL definido
- Criar novo conjunto de anúncios para testar scaling agressivo (não mexer no conjunto validado)

**Escala de público:**
- Lookalike 1% dos leads convertidos (mínimo 100 leads para criar)
- Lookalike 1-3% testado separado do público-semente original
- Retargeting: janela 30 dias para serviços / 7 dias para urgência

### Estratégia de Lances por Objetivo
| Situação | Estratégia | Quando usar |
|----------|-----------|------------|
| Conta nova / sem histórico | Custo mais baixo (sem teto) | Primeiros 50 leads — deixa o algoritmo aprender |
| Conta com 50+ conversões | Cost Cap | Define teto de CPL → algoritmo prioriza conversões abaixo do limite |
| Alto ticket / leads qualificados | Bid Cap | Controle máximo — só para contas com muito histórico |
| Reconhecimento / topo de funil | CPM mais baixo | Campanhas de alcance, não conversão |

**WhatsApp > Formulário nativo para alto ticket:** Para serviços acima de R$300/consulta ou procedimento, conversão via WhatsApp gera leads mais qualificados do que formulário nativo do Meta — o cliente já faz o primeiro filtro na conversa.

### Budgets Mínimos por Nicho (Justin Brooke — Inegociável)

| Nicho | Budget mínimo/dia | Justificativa |
|-------|------------------|---------------|
| Clínicas / Consultórios (odonto, estética) | R$ 30/dia | Precisa 50 conv. para aprender — abaixo disso, nunca aprende |
| Prestadores de serviço local | R$ 20/dia | CPL mais baixo — volume compensa |
| E-commerce | R$ 50/dia | Catálogo precisa de volume alto para otimizar por compra |

**Se cliente não topa:** escalar para o fundador. Nunca prometer resultado com orçamento inviável.
**Alternativa para orçamento baixo:** campanha de Mensagens ou Alcance Local (não Conversão) — expectativas ajustadas.

### Advantage+ Audience e Targeting 2025/2026
**Mudança crítica do Meta:** Em 2025, o Meta removeu a maioria dos targeting por interesse em saúde, clínicas, procedimentos estéticos e medicamentos.

**Solução obrigatória para clientes de saúde/estética:**
- Usar **Advantage+ Audience** como camada principal — o algoritmo encontra o público
- Pixel com volume de dados é o targeting. Quanto mais dados de conversão, melhor o Advantage+ funciona
- Para contas novas sem histórico: broad audience (sem restrição de interesse) + criativo forte que filtra o público naturalmente

**Quando adicionar sugestões de público ao Advantage+:**
- Localização geográfica (sempre)
- Faixa etária se o produto tem restrição real (ex: 25-55 para procedimentos estéticos)
- Nunca depender de interesse específico de saúde — indisponível

### CAPI (Conversions API) — Obrigatório em 2026
**O que é:** Envio de eventos de conversão diretamente do servidor, paralelo ao Pixel client-side. Reduz perda de dados por bloqueadores de anúncio, iOS 14+ e navegação privada.

**Por que é obrigatório:**
- Pixel sozinho perde 20-40% dos eventos em 2026
- CAPI aumenta o EMQ Score (Event Match Quality) → algoritmo otimiza melhor
- Meta penaliza contas com EMQ Score < 6 — CPC aumenta

**Configuração mínima para clientes:**
- Pixel via GTM (client-side) + CAPI via integração nativa do Meta (Conversions API Gateway ou integração via plataforma — Hotmart, Shopify, ActiveCampaign têm integração nativa)
- Para LPs simples: usar integração via Zapier/n8n como fallback
- **Verificar EMQ Score toda semana** — mínimo aceitável: 6.0

**Dependência:** Felipe (Especialista Tracking) configura CAPI → Kauan operacionaliza.

### Protocolo de Auditoria Semanal (toda segunda-feira)
1. EMQ Score no Events Manager — mínimo 6.0
2. CPL vs DPL do cliente — campanha está dentro do teto?
3. Frequência por conjunto — acima de 4x → ação (novos criativos ou pausa)
4. CTR por criativo — abaixo de 0,8% após 500 impressões → pausar
5. Revisar page speed da LP do cliente — deve estar < 2 segundos
6. Checar audiências de retargeting — estão crescendo? Checkout abandonment > 0?

### Palavras e Conteúdos Banidos (Meta Policy 2025/2026)
❌ BOTOX — termo banido, usar "toxina botulínica" ou "procedimento de rejuvenescimento"
❌ Before/after com resultado garantido ("você vai emagrecer X kg")
❌ Imagens de procedimentos cirúrgicos abertas
❌ Alegações de cura de doenças
❌ Targeting por condição de saúde (indisponível desde 2025)
❌ Comparações que diminuam concorrentes nominalmente

---

## FRAMEWORKS EXTERNOS — NOVOS (2025/2026)

### Charley T / Foxwell Digital — Estrutura de Agência e Profitable Scaling
**Filosofia Foxwell:** Simplicidade vence complexidade. Agências que têm 50 ad sets por conta ganham menos do que as que têm 3-5 bem otimizados. O algoritmo funciona melhor com volume concentrado.

**Framework "Profitable Scaling":**
| Fase | O que fazer | Critério para avançar |
|------|-------------|----------------------|
| **Fase 1 — Validação** | 1 campanha, 1 ad set, 3-4 criativos. Budget mínimo. | 10 conversões com CPL abaixo do DPL |
| **Fase 2 — Escala Conservadora** | Aumentar budget 20% a cada 3 dias no conjunto validado | CPL mantido por 7 dias consecutivos |
| **Fase 3 — Duplicação** | Duplicar campanha vencedora com budget 2x. Manter original ativo. | ROAS/CPL da cópia igual ou melhor em 7 dias |
| **Fase 4 — Escala Agressiva** | Aumentar budget da cópia. Pausar original se cópia superar. | Decisão com mínimo 14 dias de dados |

**Estrutura de conta recomendada Foxwell (pós-Andromeda):**
- **Máximo 3 campanhas ativas por conta cliente:**
  1. Prospecção (Advantage+, broad, 80% do budget)
  2. Retargeting quente (checkout abandon + leads não convertidos, 15%)
  3. Retenção/Upsell (clientes atuais, 5%)
- Mais campanhas = fragmentação = algoritmo aprende devagar

**Creative Research Process (Foxwell):**
1. Mapeie os 3 maiores medos do cliente ideal (não do seu cliente — do cliente do seu cliente)
2. Mapeie as 3 maiores aspirações/desejos
3. Cada criativo fala com 1 medo OU 1 desejo — nunca os dois ao mesmo tempo
4. Teste os 6 ângulos (3 medos + 3 aspirações) nos primeiros 30 dias
5. Double down no ângulo vencedor com 3 formatos (estática, carrossel, vídeo 15s)

**Newsletter Foxwell Founders:** benchmarks de CPL, ROAS, CTR por nicho atualizados mensalmente — leitura semanal obrigatória.

---

### Andrew Hubbard — Funil Evergreen e Vídeo de Longa Duração

**A contra-intuição de Hubbard:** Vídeos de 3-5 minutos no Meta Ads podem ter CPL 40-60% menor do que vídeos de 30-60 segundos para serviços de alto ticket. O vídeo longo auto-qualifica: quem assiste 3 minutos já tem intenção real.

**Framework Hook → Story → Offer:**
1. **Hook (0-3s):** Captura atenção com o maior problema ou desejo do público. "Você está perdendo R$3.000 por mês porque sua clínica não responde leads em 5 minutos."
2. **Story (3s-80%):** Conta a jornada de transformação. Não venda ainda. Construa autoridade com dados reais, casos, mecanismo único.
3. **Offer (últimos 20%):** Apresente a solução. CTA claro. Uma ação apenas.

**Evergreen Funnel (3 vídeos, 1 sequência):**
| Vídeo | Duração | Objetivo | Público |
|-------|---------|----------|---------|
| V1 — Awareness | 3-5 min | Problema + mecanismo único | Frio — broad |
| V2 — Consideração | 2-3 min | Prova social + transformação | Quem assistiu 50%+ do V1 |
| V3 — Conversão | 1-2 min | Oferta + urgência + CTA | Quem assistiu 75%+ do V2 |

**Janelas de retargeting:**
- V1 → V2: "assistiu 50% do V1 nos últimos 14 dias"
- V2 → V3: "assistiu 75% do V2 nos últimos 7 dias"
- V3 → Oferta: "clicou no link mas não converteu nos últimos 3 dias"

**Para clientes VaiAnuncio:**
- V1: "Por que [cidade] está perdendo [serviço] para concorrentes que usam IA de atendimento"
- V2: case de resultado real do cliente
- V3: oferta de diagnóstico gratuito / primeira consulta

---

### Advantage+ Shopping Campaigns (ASC) — E-commerce Automatizado

**O que é:** Campanha totalmente automatizada para e-commerce. Meta controla público, placement, criativos e lances. Substituiu campanhas manuais de catálogo para a maioria dos casos.

**Por que usar:**
- Combina prospecção + retargeting num único orçamento (Meta aloca automaticamente)
- Sem fragmentação de ad sets
- Performa em média 12-20% melhor que campanhas manuais equivalentes (dado Meta interno)

**Estrutura recomendada:**
- 70-80% do budget total Meta → ASC
- 20-30% → retargeting manual (checkout abandon, alto ticket)
- Máximo 150 assets no ASC

**Quando NÃO usar:**
- Produtos sazonais com janela < 2 semanas
- Conta nova sem histórico de pixel — usar campanha manual para seed de dados primeiro
- Margem muito baixa — ASC escala volume, não qualidade

**Budget mínimo para ASC:** R$100/dia. Abaixo disso o Meta não tem volume para otimizar.

---

### Click-to-WhatsApp Ads (C2WA) — O Canal #1 para Serviços no Brasil

**Por que é crítico para VaiAnuncio:** Brasil tem 99% de penetração de WhatsApp. Para prestadores locais e clínicas, conversão via WhatsApp é 2-3x maior que formulário — o cliente já inicia a conversa qualificado.

**Tipos de campanha WhatsApp:**
1. **Click-to-WhatsApp (C2WA):** Botão no anúncio abre conversa direto no WhatsApp
2. **WhatsApp Ads nativos:** Anúncio aparece dentro do WhatsApp (inbox)
3. **Re-engagement:** Para quem já iniciou conversa mas não fechou

**Setup técnico:**
- Conectar WhatsApp Business ao Meta Business Suite
- Configurar mensagem de saudação automática no WhatsApp Business
- Evento de conversão: "Initiated Conversation" no Meta Events Manager

**Copy para C2WA:**
- Headline: Benefício direto + "via WhatsApp" — ex: "Agenda aberta hoje — marque sua avaliação pelo WhatsApp"
- CTA: "Enviar mensagem" (não "Saiba mais")
- Copy body: máximo 3 linhas — o funil continua no WhatsApp

**Integração com CRM (NossoCRM):**
- Lead inicia conversa → Agente IA responde → Qualifica → Agenda → Entra no CRM
- Evento de fechamento enviado de volta ao Meta via CAPI → Meta aprende quem FECHA, não só quem clica
- Esse loop é o diferencial do pacote Máquina de Clientes

**Custo por conversa iniciada (benchmark Brasil):** Serviços locais: R$8-25 / Clínicas: R$15-45. Avaliar sempre por DPL.

---

### Meta Gen AI para Criativos — Extensão Automática de Assets

**Funcionalidades disponíveis em 2025:**
1. **Background Generation:** Substitui fundo de imagens automaticamente — gera 4-6 variações para teste
2. **Image Expansion:** Adapta imagem de um formato para outro (1:1 → 9:16) sem crop manual
3. **Text Variations:** A partir de um copy original, gera 5-10 variações de headline/descrição
4. **Advantage+ Creative:** Ativa todas as otimizações de IA em conjunto

**Como usar com inteligência:**
- Background Generation: ideal para e-commerce com fotos de produto sem modelo
- Image Expansion: quando criativo vertical não foi produzido — adapta horizontal sem refilmar
- Text Variations: ângulo criativo certo mas copy precisa melhorar

**Risco:** Advantage+ Creative pode alterar a mensagem inesperadamente. Monitorar aba "Criativos" no Ads Manager semanalmente.

---

### Meta Andromeda — As 10 Mudanças Operacionais Críticas

1. **Advantage+ Audience virou padrão absoluto** — targeting detalhado é "sugestão", o algoritmo pode ignorar
2. **GEM controla placements** — placement manual limita onde o que funciona aparece
3. **Andromeda pontua cada criativo antes do leilão** — criativo fraco = menos leilões, independente do lance
4. **Fragmentar ad sets é contraproducente** — cada conjunto precisa de 50 conv/semana para funcionar
5. **Frequência não é mais controlável** — focar em criativo fresco em vez de tentar controlar frequência
6. **Broad audience supera interesse específico em 90% dos casos** — sinal de conversão do pixel > qualquer interesse
7. **Reels é placement premium** — criativos 9:16 nativos recebem 20-40% mais entrega
8. **A/B testing nativo** é mais confiável que dois ad sets manuais — usa amostragem estatística correta
9. **CBO > ABO** para a maioria dos casos — concentra spend nos winners automaticamente
10. **CAPI é obrigatória** — sem ela, Andromeda trabalha com dados incompletos → CPL sobe

---

## CONTAS ATIVAS

_Nenhuma conta ativa ainda. Cadastrar ao iniciar primeiro cliente._

---

## CAMPANHAS EM ANDAMENTO

_Nenhuma campanha ativa._

---

## ERROS A EVITAR

| Erro | Por que evitar | Aprendido em |
|------|----------------|--------------|
| Subir campanha sem evento de conversão no Pixel | Impossível otimizar por conversão sem tracking | Onboarding 2026-03-20 |
| Mexer em conjunto de anúncios em aprendizado | Reinicia o aprendizado — desperdiça budget e tempo | Caso Rodrigo/Eliane 2026-04-14 |
| Aceitar orçamento abaixo do mínimo Justin | Campanha nunca aprende — zero resultado garantido | 2026-04-14 |
| Usar targeting de interesse de saúde | Removido pelo Meta em 2025 — Advantage+ é obrigatório | 2026-04-14 |
| Ignorar EMQ Score abaixo de 6 | Meta aumenta CPC em contas com tracking fraco | 2026-04-14 |
| Usar "BOTOX" em criativo | Conta restrita/banida — palavra banida no Meta | 2026-04-14 |
| Escalar orçamento >20% de uma vez | Reinicia fase de aprendizado do conjunto | 2026-04-14 |
| Formulário nativo para alto ticket sem qualificação | Leads frios — WhatsApp filtra melhor para serviços premium | 2026-04-14 |
| Custom Audience como base de escala contínua | Audiência < 500K fatiga rapidamente → CTR cai, CPC sobe | JB019 2026-04-14 |
| Retargetar todos os visitantes do site | Diluição de budget — focar em abandono de checkout/formulário | JB007 2026-04-14 |
| Criar imagens sem variação quando criativo fatiga | 3 versões (original + posterizada + P&B) estendem vida do criativo | JB019 2026-04-14 |
| Olhar CTR e Conversion Rate como métricas de sucesso | São "fluff metrics" — direcionar por DPL, CPA, AOV | JB004 2026-04-14 |
| Testar público E criativo ao mesmo tempo | Não sabe o que causou a mudança — testar 1 variável por vez | Ben Heath 2026-04-14 |
| Decidir pausar campanha com menos de 3 dias de dados | Dados de 1-2 dias são ruído — mínimo 3 dias + 500 impressões | Nick Theriot 2026-04-14 |
| Ignorar audiências de engajamento (vídeo, IG) para retargeting | Primeira-parte não depende de cookies — mais estável pós iOS 14 | Jon Loomer 2026-04-14 |
| Não integrar CRM/conversões de vendas ao pixel via CAPI | Algoritmo só aprende quem preenche formulário, não quem fecha | Jon Loomer 2026-04-14 |
| Rodar pixel browser + CAPI sem deduplicação (event_id) | Meta conta cada conversão duas vezes — ROAS inflado 2x, decisões erradas | Jon Loomer 2026-04-14 |
| Fragmentar ad sets por público diferente pós-Andromeda | Cada ad set precisa de 50+ conv/semana — fragmentação mata aprendizado | Andromeda 2025 |
| Criar criativo Red Ocean (igual aos concorrentes do nicho) | Algoritmo não distribui spend para ad sem engajamento diferenciado | Nick Theriot 2026-04-14 |
| Pausar ad no CBO antes de 3-5 dias ou 50 conversões | "Hidden funnel" — ads aparentemente fracos podem estar preparando winners | Ben Heath 2026-04-14 |
| Escalar budget >20% sem duplicar campanha | Mata o aprendizado dos winners — usar campanha duplicada para escala agressiva | Nick Theriot 2026-04-14 |
| Ignorar fbp e fbc no CAPI | Sem eles, CAPI não consegue associar evento ao usuário que clicou | Jon Loomer 2026-04-14 |
| Usar Click-to-WhatsApp sem mensagem automática de saudação configurada | Lead chega, ninguém responde em 5 min → perde o cliente. WhatsApp sem automação é funil quebrado | C2WA 2025 |
| Ativar Advantage+ Creative sem monitorar variações | IA pode alterar o copy/criativo de forma que comprometa a mensagem da marca | Meta Gen AI 2025 |
| Criar ASC antes de ter 50+ conversões no pixel | ASC sem histórico otimiza por cliques, não por clientes | ASC 2025 |
| Fragmentar em 5+ ad sets com budget de R$50/dia | Nenhum conjunto atinge 50 conv/semana → nenhum aprende | Andromeda 2025 |
| Usar placements manuais para "controlar" a entrega pós-Andromeda | GEM distribui melhor que qualquer humano — placement manual limita o que funciona | Andromeda 2025 |
