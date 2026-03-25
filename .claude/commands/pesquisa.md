---
description: Barredura de mercado antes de executar qualquer insight do time ou conselho
argument-hint: [insight ou tema] - Ex: "implementar modelo de assinatura $19.99/mês"
---

# /pesquisa - Research Before Execution

## Descrição
Executa uma barredura completa de mercado antes de agir sobre qualquer insight do time ou conselho.
Valida com dados reais o que existe, o que funciona e o que os líderes de mercado fazem.

## Uso
```
/pesquisa [insight ou tema]
```

## Exemplos
```
/pesquisa "implementar modelo de assinatura $19.99/mês"
/pesquisa "criar plataforma de conteúdo para agências de tráfego"
/pesquisa "usar Supabase como backend da plataforma"
/pesquisa "melhores ferramentas de automação de email 2026"
```

---

## INSTRUCOES DE EXECUCAO

> **Skill de referência:** `.claude/skills/research-first/SKILL.md`
> **Prioridade:** ALTA — nenhuma execução começa sem esta validação

```
═══════════════════════════════════════════════════════════════════════════════
RESEARCH-FIRST PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

INSIGHT: {tema ou insight recebido}
ORIGEM: {quem trouxe — Conselho / Time / Fundador}
DATA: {data atual}

═══════════════════════════════════════════════════════════════════════════════
PASSO 1 — EXISTE? (Checagem de existência)
═══════════════════════════════════════════════════════════════════════════════

Antes de construir ou implementar qualquer coisa:

WebSearch: "{tema} open source GitHub"
WebSearch: "{tema} software tool SaaS 2025 2026"
WebSearch: "{tema} npm package OR PyPI OR marketplace"

RESULTADO:
[ ] Existe solução consolidada → apresentar opções antes de criar do zero
[ ] Não existe → seguir para barredura

SE EXISTE:
┌─────────────────────────────────────────────────────────────────────────────┐
│ SOLUÇÕES ENCONTRADAS                                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. {Nome} — {URL} — Stars/Adoção: {dado}                                   │
│ 2. {Nome} — {URL} — Stars/Adoção: {dado}                                   │
│ 3. {Nome} — {URL} — Stars/Adoção: {dado}                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ RECOMENDAÇÃO: Usar {X} vs Construir do zero                                 │
│ MOTIVO: {justificativa com dado}                                            │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
PASSO 2 — BARREDURA MULTI-ÂNGULO
═══════════════════════════════════════════════════════════════════════════════

Disparar 5 buscas em paralelo com ângulos diferentes:

Busca 1 (PT): "{tema} melhores práticas 2025 2026"
Busca 2 (PT): "{tema} tutorial site:dev.to OR site:medium.com"
Busca 3 (EN): "{topic} best practices approach 2026"
Busca 4 (EN): "{topic} benchmark comparison alternatives"
Busca 5 (EN): "{topic} case study results"

FONTES COLETADAS:
• {Fonte 1} — {resumo do que diz}
• {Fonte 2} — {resumo do que diz}
• {Fonte 3} — {resumo do que diz}
• {Fonte 4} — {resumo do que diz}
• {Fonte 5} — {resumo do que diz}

PADRÕES EMERGENTES:
→ {O que aparece repetidamente entre as fontes}

═══════════════════════════════════════════════════════════════════════════════
PASSO 3 — BENCHMARK
═══════════════════════════════════════════════════════════════════════════════

Com base na barredura — o que os LÍDERES de mercado fazem:

| Solução / Abordagem | Vantagem | Desvantagem | Adotado por |
|---------------------|----------|-------------|-------------|
| {Opção A}           | {dado}   | {dado}      | {empresas}  |
| {Opção B}           | {dado}   | {dado}      | {empresas}  |
| {Opção C}           | {dado}   | {dado}      | {empresas}  |

PADRÃO DOS LÍDERES:
{O que os melhores têm em comum — não o mais popular, mas o que os melhores usam}

═══════════════════════════════════════════════════════════════════════════════
PASSO 4 — DEEP RESEARCH (quando necessário)
═══════════════════════════════════════════════════════════════════════════════

Ativar quando:
[ ] A decisão afeta arquitetura ou modelo de negócio
[ ] Há dados contraditórios na barredura
[ ] O tema evoluiu nos últimos 6 meses

Se ativo:
WebFetch: {artigo técnico mais relevante do Passo 2}
WebSearch: "{claim específico} site:arxiv.org OR site:hbr.org OR site:substack.com"

ACHADOS DO DEEP RESEARCH:
• {Dado validado 1} — Fonte: {URL}
• {Dado validado 2} — Fonte: {URL}

═══════════════════════════════════════════════════════════════════════════════
PASSO 5 — SÍNTESE E VEREDITO
═══════════════════════════════════════════════════════════════════════════════

VEREDITO:
[ ] ✅ PROSSEGUIR — o insight está validado pelo mercado
[ ] ⚠️  ADAPTAR — prosseguir com modificações (detalhadas abaixo)
[ ] ❌ DESCARTAR — existe razão clara para não executar

ABORDAGEM RECOMENDADA:
"Baseado na pesquisa:
- {Solução/abordagem X} é o padrão atual porque {fonte}
- {Alternativa Y} foi descartada porque {motivo com dado}
- Implementar com {abordagem específica}"

MODIFICAÇÕES SUGERIDAS AO INSIGHT ORIGINAL:
• {O que manter do insight}
• {O que ajustar e por quê}
• {O que descartar e por quê}

PRÓXIMOS PASSOS SE APROVADO:
1. {Ação concreta} — Responsável: {quem} — Prazo: {quando}
2. {Ação concreta} — Responsável: {quem} — Prazo: {quando}

═══════════════════════════════════════════════════════════════════════════════
📊 DECLARAÇÃO DE CONFIANÇA
═══════════════════════════════════════════════════════════════════════════════

FONTES DESTA PESQUISA:
• {Fonte 1 — link ou título}
• {Fonte 2 — link ou título}
• {Fonte 3 — link ou título}

⏱️  Data das fontes: {mês/ano das fontes mais recentes}
🎯 Confiança: ALTA / MÉDIA / BAIXA
📌 Motivo do nível de confiança: {justificativa}

═══════════════════════════════════════════════════════════════════════════════
```

---

## QUANDO NÃO ATIVAR

- Tarefa simples e direta (ex: "formata esse JSON", "edita esse texto")
- Pergunta conceitual sem decisão técnica ou estratégica envolvida
- Pesquisa já foi feita nesta sessão para o mesmo tema
- Refatoração de código já existente sem mudança de abordagem

---

## INTEGRAÇÃO COM O CONSELHO

O `/pesquisa` é o **gate obrigatório** entre o insight do Conselho e a execução:

```
/conclave [decisão] → insight gerado → /pesquisa [insight] → execução
```

Insights do Conselho são baseados no DNA de especialistas (dados de treinamento).
O `/pesquisa` valida com o mercado real de 2025/2026 antes de agir.

---

*RESEARCH-FIRST SKILL v1.0.0 · Mega Brain · 2026-03-15*
