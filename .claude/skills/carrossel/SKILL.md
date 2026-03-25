# CARROSSEL SKILL
## Geração automática de carrosséis virais para Instagram

> **Auto-Trigger:** carrossel, post instagram, conteúdo para redes, post viral
> **Keywords:** "carrossel", "post", "conteúdo instagram", "criar post", "conteúdo viral"
> **Complementa:** `/pesquisa` (tendências), `Maya` (copy), ComfyUI (imagens IA)

---

## IDENTIDADE VISUAL — VAIANUNCIO

```
Cor primária:     #65c2cd  (teal)
Cor secundária:   #1A1A1A  (preto)
Fundo dark:       #0d0d0d
Fundo light:      #f0f0f0
Handle agência:   @vaianuncioai
Handle fundador:  @frank.B2B
Saída:            C:\Users\FranSa\Pictures\carrossel\gerados\
Logo:             C:\Users\FranSa\Pictures\Agência\LOGO ATUALIZADA\vai (1).png
```

---

## FORMATO OTIMIZADO PARA INSTAGRAM

```
Dimensão:     1080 x 1350px (4:5 portrait)
Motivo:       Ocupa 20% mais espaço no feed → +3.4x saves, +2.1x shares
Slides:       10 fixos (sweet spot para dwell time máximo)
Texto/slide:  máximo 12 palavras no headline, 4 frases no body
```

---

## FLUXO COMPLETO

```
FASE 0 → /pesquisa (tendências atuais do nicho)
    ↓
FASE 1 → Briefing (avatar + temperatura + conta)
    ↓
FASE 2 → Maya escreve copy dos 10 slides
    ↓
FASE 3 → ComfyUI gera imagens IA (se online)
    ↓
FASE 4 → Script Node.js gera os 10 PNGs
    ↓
FASE 5 → Entrega dos arquivos prontos
```

---

## FASE 0 — PESQUISA DE TENDÊNCIAS (OBRIGATÓRIA)

Antes de qualquer copy, executar:

```
/pesquisa "conteúdo viral instagram [nicho] 2026"
/pesquisa "trending topics [nicho] redes sociais março 2026"
```

Usar os resultados para:
- Identificar hooks que estão performando agora no nicho
- Evitar temas saturados
- Incorporar dados/estatísticas recentes (+27% engajamento com dados reais)
- Alinhar o tema com o que o avatar está consumindo hoje

---

## FASE 1 — BRIEFING

Coletar antes de criar:

```
1. TEMA — baseado na pesquisa de tendências + interesse do fundador
2. AVATAR — quem vai ver? qual a dor principal?
3. TEMPERATURA — Cold / Warm / Hot
4. CONTA — VaiAnuncio ou cliente? Se cliente: handle + nicho
5. DADO/STAT — existe alguma estatística real sobre o tema? (usar no Slide 7)
```

---

## FASE 2 — COPY (Maya executa com DNA Brunson)

Estrutura dos 10 slides otimizada para máximo engajamento:

```
SLIDE 1 — CAPA (information gap obrigatório)
  hook: [pergunta que cria curiosidade OU afirmação contraintuitiva]
  regra: responder "É pra mim?" e "O que vou ganhar?" em 0.7 segundos
  max: 10 palavras
  subtexto: "Arrasta para o lado >"

SLIDE 2 — PROBLEMA (dark)
  headline: [afirmação forte que nomeia a dor — máx 8 palavras]
  body: [3-4 frases curtas. Cada frase = 1 ideia]

SLIDE 3 — AGRAVAMENTO (dark)
  headline: [consequência de ignorar — cria urgência]
  body: [por que dói mais do que parece]

SLIDE 4 — VIRADA (dark)
  headline: [existe outro caminho — contraintuitivo]
  body: [introduz a solução sem revelar tudo ainda]

SLIDE 5 — SOLUÇÃO 1 (light)
  headline: [primeiro insight — numerado "1."]
  body: [explicação direta + aplicação prática]

SLIDE 6 — SOLUÇÃO 2 (light)
  headline: [segundo insight — numerado "2."]
  body: [explicação + exemplo concreto]

SLIDE 7 — DADO/ESTATÍSTICA (light — boost de +27% engajamento)
  headline: [número impactante em destaque]
  body: [contexto do dado + o que significa para o avatar]
  fonte: [fonte real do dado — credibilidade]

SLIDE 8 — SOLUÇÃO 3 + SOFT CTA (light)
  headline: [terceiro insight — numerado "3."]
  body: [explicação]
  soft_cta: "Salva esse post — você vai precisar disso."

SLIDE 9 — SÍNTESE (light)
  headline: [frase de impacto que resume tudo — máx 8 palavras]
  body: [call to reflection — faz o avatar pensar]

SLIDE 10 — CTA INTERATIVO FINAL (imagem IA)
  texto_suave: [urgência sutil + razão para agir agora]
  cta_bold: [ação específica: comentar / salvar / marcar alguém]
  exemplo: "Comenta aqui: qual desses 3 erros você comete hoje?"
  regra: CTA interativo (comentário/tag) > CTA passivo (seguir)
```

---

## FASE 3 — IMAGENS IA (Aria + ComfyUI)

**Aria (Diretora de Arte IA)** recebe o brief de Maya e entrega 3 prompts técnicos prontos.
Ver: `f:/FUTURO/mega-brain/agents/cargo/DIRETOR-ARTE-IA/AGENT.md`

Aria define composição, escreve os prompts e executa:

```bash
node "f:/FUTURO/mega-brain/.claude/skills/comfyui/scripts/gerar-imagens.js" \
  --tema "TEMA" \
  --mood "MOOD" \
  --prompts '{
    "capa": "[pessoa + ambiente visual relacionado ao hook]",
    "dark": "[ambiente cinematográfico relacionado ao problema/solução]",
    "cta":  "[pessoa com expressão de determinação/confiança]"
  }'
```

**O script cuida de tudo automaticamente:**
- ✅ Verifica se ComfyUI está rodando
- ✅ Se offline, **inicia automaticamente** (`run_nvidia_gpu.bat`)
- ✅ Aguarda a API ficar disponível
- ✅ Submete os 3 workflows em sequência
- ✅ Faz poll até as imagens ficarem prontas
- ✅ Retorna os 3 caminhos para usar no `gerar.js`

**Capturar os caminhos do output:**
O script imprime uma linha `__RESULTADO__:/caminho/arquivo.json`
Ler esse JSON e extrair `capa`, `dark`, `cta` para passar ao `gerar.js`.

**Se ComfyUI falhar:** usar gradiente como fallback (não bloqueia a geração).

---

## FASE 4 — GERAÇÃO DOS SLIDES

```bash
node "f:/FUTURO/mega-brain/.claude/skills/carrossel/scripts/gerar.js" \
  --tema "TEMA" \
  --slides '{ JSON com copy de todos os slides }' \
  --imagem-capa "caminho/capa.png" \
  --imagem-dark "caminho/dark_mid.png" \
  --imagem-cta "caminho/cta.png"
```

Saída: `C:\Users\FranSa\Pictures\carrossel\gerados\[tema-slug]\`

---

## FASE 5 — ENTREGA

```
✅ Carrossel gerado: [tema]
📁 C:\Users\FranSa\Pictures\carrossel\gerados\[slug]\
🖼️  10 slides 1080x1350px prontos para Instagram

  Slide-01-capa.png        ← Hook / information gap
  Slide-02-problema.png
  Slide-03-agravamento.png
  Slide-04-virada.png
  Slide-05-solucao1.png
  Slide-06-solucao2.png
  Slide-07-dado.png        ← Estatística real (+27% engajamento)
  Slide-08-solucao3.png    ← Soft CTA embutido
  Slide-09-sintese.png
  Slide-10-cta.png         ← CTA interativo (comentário/tag)

💡 Dica de postagem:
  → Primeira hora: responda TODOS os comentários (sinaliza relevância ao algoritmo)
  → Caption: repita o hook da capa + hashtags do nicho (máx 5)
  → Melhor horário: 18h-21h (seg/qua/sex)
```

---

## ANTI-PATTERNS

1. ❌ Criar sem pesquisar tendências primeiro — copy desatualizado não engaja
2. ❌ Hook genérico ("Dicas de marketing") — sem information gap não para scroll
3. ❌ Mais de 12 palavras no headline — mobile lê em 0.7s
4. ❌ CTA passivo no final ("Siga pra mais") — interativo converte 20-30% mais
5. ❌ Nenhum dado/estatística — slides com dados têm +27% engajamento
6. ❌ Dois CTAs no mesmo slide — divide atenção
