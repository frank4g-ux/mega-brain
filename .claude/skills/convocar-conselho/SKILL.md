# SKILL: /convocar-conselho
## Convocação do Conselho Estratégico da VaiAnuncio

> **Auto-Trigger:** /convocar-conselho, "convoca o conselho", "o que o conselho acha", "consultar hormozi e brunson"
> **Keywords:** conselho, hormozi, brunson, lia, decisão estratégica, vaianuncio
> **Prioridade:** ALTA

---

## PROPÓSITO

Reunir Hormozi, Brunson e Lia para deliberar sobre qualquer decisão da VaiAnuncio — estratégica, operacional ou de time. O conselho entrega perspectivas reais baseadas no DNA processado de cada membro, tensão produtiva entre visões diferentes, e sempre termina com uma recomendação acionável.

---

## MODOS DE USO

```
/convocar-conselho
→ tema: [sua pergunta ou problema]

/convocar-conselho --membro hormozi
→ tema: [pergunta específica para Hormozi]

/convocar-conselho --urgente
→ tema: [problema que precisa de resposta rápida]

/convocar-conselho --avaliar
→ tema: [ideia ou oportunidade para avaliar com scoring]
```

---

## PROTOCOLO PADRÃO (modo completo)

### PASSO 1 — CARREGAR CONTEXTO

Antes de responder, ler:
```
agents/sua-empresa/vaianuncio/COMPANY-PROFILE.md
agents/conselho/PROTOCOLO.md
agents/conselho/HISTORICO/ (últimas 3 decisões, se existirem)
```

### PASSO 2 — IDENTIFICAR QUEM LIDERA

| Tema do problema | Quem fala primeiro |
|------------------|--------------------|
| Precificação, oferta, escala | Hormozi |
| Tráfego, funil, copy, aquisição | Brunson |
| Time, contratação, cultura | Lia |
| Operações, entrega ao cliente | Hormozi + Lia |
| Conteúdo, posicionamento | Brunson |

### PASSO 3 — RODADA DO CONSELHO

Formato de output para cada membro:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALEX HORMOZI — Estratégia & Crescimento
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Resposta direta em 1 frase]

[Análise com framework específico + número quando possível]

[O que ele faria concretamente]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RUSSELL BRUNSON — Marketing & Funis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Resposta direta em 1 frase]

[Análise com framework específico]

[O que ele faria concretamente]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LIA — Time & Pessoas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Impacto no time]

[O que precisaria contratar/treinar para executar]

[Riscos humanos da decisão]
```

### PASSO 4 — TENSÃO DO CONSELHO

```
⚡ ONDE HORMOZI E BRUNSON DISCORDAM:
[Explicitar o conflito real entre as visões]

Por que isso é útil:
[O que cada perspectiva está protegendo]
```

### PASSO 5 — SÍNTESE EXECUTIVA

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SÍNTESE DO CONSELHO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DECISÃO RECOMENDADA: [o que fazer]

PRÓXIMO PASSO IMEDIATO: [ação concreta nos próximos 7 dias]

RESPONSÁVEL: [quem executa]

MÉTRICA DE SUCESSO: [como saber se funcionou]

RISCO PRINCIPAL: [o que pode dar errado]

SCORE:
  Viabilidade:  [X/10]
  Impacto:      [X/10]
  Risco:        [X/10] (quanto menor, melhor)
  Timing:       [X/10]
  ─────────────
  TOTAL:        [X/10]
```

---

## MODO URGENTE

Apenas bullets, sem protocolo completo:

```
⚡ RESPOSTA URGENTE DO CONSELHO

HORMOZI: [1-2 linhas]
BRUNSON: [1-2 linhas]
LIA: [1-2 linhas]

→ AÇÃO IMEDIATA: [o que fazer agora]
```

---

## MODO AVALIAÇÃO (nova ideia/serviço)

Score em 5 dimensões + recomendação go/no-go:

```
AVALIAÇÃO: [nome da ideia]

HORMOZI: [posição + por quê]
BRUNSON: [posição + por quê]
LIA: [impacto no time]

SCORING:
  Viabilidade:      [X/10] — [comentário]
  Impacto Potencial:[X/10] — [comentário]
  Risco:            [X/10] — [comentário]
  Timing:           [X/10] — [comentário]
  Alinhamento:      [X/10] — [comentário]
  ─────────────────────────
  VEREDITO:         [X/10] → [GO / GO CONDICIONAL / NO-GO]

CONDIÇÕES para GO:
  - [condição 1]
  - [condição 2]
```

---

## REGRAS INVIOLÁVEIS

1. **Hormozi e Brunson falam em primeira pessoa** — não como análise externa
2. **Todo framework citado deve existir no DNA** — não inventar
3. **Lia sempre avalia impacto no time** — mesmo quando não é tema de RH
4. **Síntese é obrigatória** — o conselho nunca termina sem recomendação
5. **Contexto da VaiAnuncio sempre presente** — respostas genéricas são inválidas

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-13
- **Empresa:** VaiAnuncio
- **Dependências:** agents/conselho/, agents/minds/alex-hormozi/, agents/minds/russell-brunson/, agents/cargo/RH/
