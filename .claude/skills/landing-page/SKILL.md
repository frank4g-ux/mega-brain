# LANDING-PAGE SKILL
## Criação de landing pages de alta conversão para a VaiAnuncio e seus clientes

> **Auto-Trigger:** Quando usuário pedir landing page, página de vendas, página de captura, page de conversão, site para cliente
> **Keywords:** "landing page", "página de vendas", "página de captura", "lp", "site do cliente", "página de conversão", "criar página", "página de agendamento"
> **Prioridade:** ALTA
> **Complementa:** `frontend-design` (estética), `pesquisa` (benchmarking de referências)

---

## O Problema que Esta Skill Resolve

Landing pages genéricas não convertem.
A maioria das páginas criadas por IA são bonitas e inúteis — sem hierarquia de conversão, sem copy focado em dor, sem CTA claro.

**Esta skill garante que toda página criada tenha propósito antes de ter estética.**

---

## Quando NÃO Ativar

- Sistemas internos ou dashboards (use `frontend-design`)
- Componentes isolados sem contexto de conversão
- Página institucional sem objetivo de lead/venda

---

## FASE 0 — BRIEFING OBRIGATÓRIO (antes de escrever 1 linha)

Antes de qualquer código ou copy, coletar:

```
1. QUEM É O CLIENTE DO CLIENTE?
   → Quem vai chegar nessa página? Qual a dor principal?

2. QUAL A ÚNICA AÇÃO QUE A PÁGINA DEVE GERAR?
   → Ligar / Agendar / Preencher formulário / Comprar
   (Uma página = uma ação. Nunca duas.)

3. QUAL A PROVA DE RESULTADO DISPONÍVEL?
   → Depoimentos, números, antes/depois, cases

4. QUAL O DIFERENCIAL DO NEGÓCIO?
   → Por que esse e não o concorrente?

5. QUAL O NICHO / SEGMENTO?
   → Define o tom, urgência e linguagem da copy

6. STACK DEFINIDA?
   → HTML puro / Next.js / outro
```

⚠️ Se algum desses itens não foi respondido, **perguntar antes de continuar**.

---

## ESTRUTURA DE CONVERSÃO (ordem obrigatória)

Toda landing page segue esta hierarquia — independente de estética:

```
┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 1 — ABOVE THE FOLD (o que o usuário vê sem rolar)        │
│                                                                  │
│  • Headline: Resultado que o cliente quer (não o serviço)       │
│    Ex: "Mais pacientes agendados. Sem perder ligação."          │
│    (NÃO: "Gestão de tráfego para clínicas")                     │
│                                                                  │
│  • Subheadline: Como você entrega (em 1 frase)                  │
│  • CTA principal: Botão único e claro                           │
│  • Prova social rápida: número ou logo de cliente               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 2 — DOR / PROBLEMA                                        │
│                                                                  │
│  • Descrever a dor do cliente com as palavras DELE              │
│  • 3 bullets máximo — específicos, não genéricos                │
│  • Ex: "Você para de atender às 18h. Os leads chegam às 20h."  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 3 — SOLUÇÃO + DIFERENCIAIS                               │
│                                                                  │
│  • O que você faz (resumido em 3-4 itens visuais)              │
│  • Como funciona (processo simples: passo 1, 2, 3)             │
│  • Diferencial vs concorrência                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 4 — PROVA SOCIAL                                          │
│                                                                  │
│  • Depoimentos reais (com nome, foto ou empresa)               │
│  • Números concretos: "X leads gerados", "Y% de conversão"     │
│  • Logos de clientes (se tiver)                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 5 — OFERTA + CTA FINAL                                    │
│                                                                  │
│  • Recapitular o que o cliente leva                             │
│  • Garantia (se houver)                                         │
│  • CTA final com urgência ou escassez real                      │
│  • Formulário mínimo (nome + telefone) OU botão de WhatsApp    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SEÇÃO 6 — FAQ (opcional, reduz objeções)                        │
│                                                                  │
│  • 3-5 perguntas que o cliente sempre faz antes de comprar     │
│  • Responder com benefício, não com defesa                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## COPY — REGRAS OBRIGATÓRIAS

```
✅ Headline fala em RESULTADO, não em serviço
   BOM:  "Sua clínica cheia. Sem depender de indicação."
   RUIM: "Gestão de tráfego para clínicas odontológicas"

✅ Usar a linguagem do cliente, não do especialista
   BOM:  "Pare de perder paciente para o concorrente"
   RUIM: "Otimização de funil de aquisição B2C"

✅ CTA específico, não genérico
   BOM:  "Quero agendar meu diagnóstico gratuito"
   RUIM: "Saiba mais" / "Clique aqui"

✅ Uma promessa por página — não prometer tudo
✅ Prova antes de pedir o clique — não inverter a ordem
✅ Mobile first — 70%+ dos acessos são mobile no Brasil
```

---

## TÉCNICA: STACK RECOMENDADA

### Para landing pages de cliente (simples, rápida)
```
HTML + Tailwind CSS + Alpine.js (para interações simples)
Deploy: Netlify, Vercel ou GitHub Pages (gratuito)
Formulário: Formspree ou WhatsApp link direto
```

### Para landing page da própria VaiAnuncio
```
Next.js + Tailwind CSS
Deploy: Vercel
Formulário: conectar com CRM/n8n futuro
```

### Para cliente sem budget técnico
```
Framer ou Webflow (no-code)
Entrega rápida, visual premium, sem hospedagem para gerenciar
```

---

## CHECKLIST ANTES DE ENTREGAR

```
[ ] Headline fala em resultado, não em serviço
[ ] Existe UMA única CTA principal (não duas ou três)
[ ] Above the fold carrega em menos de 3 segundos
[ ] Mobile testado (ou pelo menos responsivo)
[ ] Formulário ou WhatsApp conectado e funcionando
[ ] Seção de prova social existe (mesmo que com 1 depoimento)
[ ] Pixel de rastreamento instalado (Meta/Google)
[ ] URL amigável e sem "index.html"
```

---

## INTEGRAÇÃO COM O SISTEMA

| Trigger | Ação |
|---------|------|
| "Landing page para [cliente]" | Ativar FASE 0 (briefing) primeiro |
| "Página da VaiAnuncio" | Usar stack Next.js + contexto de agents/sua-empresa/ |
| "LP de alta conversão" | Ativar estrutura de 6 seções completa |
| "Cria uma página rápida" | Perguntar stack e briefing mínimo antes |

---

*LANDING-PAGE SKILL v1.0.0 · VaiAnuncio · Mega Brain · 2026-03-15*
