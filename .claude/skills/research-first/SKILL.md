> **Auto-Trigger:** Antes de criar, implementar, ou responder qualquer pergunta técnica que envolva escolha de stack, arquitetura, ou melhores práticas
> **Keywords:** "pesquisa", "benchmark", "research", "existe no GitHub", "melhores práticas", "best practices", "qual stack", "como implementar", "criar um", "comparar", "análise de mercado", "deep research", "melhor ferramenta", "como fazer"
> **Prioridade:** ALTA
> **Tools:** WebSearch, WebFetch, Bash, Agent

---

# RESEARCH-FIRST SKILL

## O Problema que Esta Skill Resolve

A IA inventa quando não tem contexto atual.

Sem pesquisa, a IA usa dados de treinamento desatualizados (corte 2024/2025), escolhe stacks erradas, reinventa soluções que já existem, e produz recomendações genéricas que não refletem o estado atual do mercado.

**Esta skill elimina ~70% desses erros.**

---

## Quando NÃO Ativar

- Tarefa simples e direta (ex: "formata esse JSON")
- Pergunta conceitual sem decisão técnica envolvida
- Já existe contexto suficiente na conversa (pesquisa já foi feita)
- Tarefa de edição/refatoração de código já existente

---

## O Fluxo: PESQUISA → BENCHMARK → EXECUÇÃO

### PASSO 1 — EXISTE? (Checagem de existência)

Antes de construir qualquer coisa:

```
WebSearch: "[problema] open source GitHub"
WebSearch: "[problema] npm package / PyPI"
Bash: gh search repos "[keywords]" --limit 5
```

- SE EXISTE algo consolidado → apresentar opções antes de criar do zero
- SE NÃO EXISTE → seguir para benchmark

---

### PASSO 2 — BARREDURA MULTI-ÂNGULO

Disparar 3-5 buscas em paralelo com ângulos diferentes:

```
Busca 1: "[tema] best practices 2025 2026"
Busca 2: "[tema] tutorial site:dev.to OR site:medium.com"
Busca 3: "[topic] best approach" (EN)
Busca 4: "[tema] comparação alternativas"
Busca 5: "[topic] benchmark [year]"
```

**Regra:** sempre incluir 1 busca em EN para capturar conteúdo técnico mais denso.

Os resultados se cruzam → elimina viés de fonte única.

---

### PASSO 3 — BENCHMARK

Com os resultados da barredura:

1. Identificar quais soluções/abordagens aparecem repetidamente
2. Extrair o que é **comum entre os líderes** (não o que é mais popular, mas o que os melhores usam)
3. Montar uma tabela comparativa simples:

```
| Solução | Vantagem | Desvantagem | Adotado por |
|---------|----------|-------------|-------------|
| ...     | ...      | ...         | ...         |
```

4. Declarar qual padrão será adotado e **por quê** (com fonte)

---

### PASSO 4 — DEEP RESEARCH (quando necessário)

Para decisões de alto impacto ou temas complexos:

```
WebFetch: artigo técnico mais relevante encontrado no passo 2
WebSearch: "[claim específico] site:arxiv.org OR site:hbr.org"
```

Ou via Perplexity MCP se disponível (dados em tempo real).

**Threshold:** usar deep research quando:
- A decisão afeta arquitetura
- Há dados contraditórios na barredura
- O tema evoluiu muito recentemente (últimos 6 meses)

---

### PASSO 5 — SÍNTESE E EXECUÇÃO

Só então executar — com contexto validado em mãos:

```
"Baseado na pesquisa:
- [Solução X] é o padrão atual porque [fonte]
- [Alternativa Y] foi descartada porque [motivo]
- Implementando com [abordagem]..."
```

Toda decisão técnica deve citar a fonte que a embasou.

---

## Exemplos de Uso

### Exemplo 1 — Criando um CRM do zero

❌ Sem skill:
> "Vou criar um CRM com React + Node + MongoDB"
> *(decisão baseada em preferência pessoal, sem validação)*

✅ Com skill:
> 1. Pesquisa: "CRM open source GitHub 2026" → encontra SuiteCRM, Twenty, Odoo
> 2. Benchmark: extrai features comuns dos 3 líderes
> 3. Decisão: "Baseado no benchmark, as features obrigatórias são X, Y, Z"
> 4. Executa com base nos padrões validados

---

### Exemplo 2 — Melhores técnicas de tráfego pago

❌ Sem skill:
> "As melhores técnicas são retargeting, lookalike audiences e..."
> *(dados do treinamento de 2024, pode estar desatualizado)*

✅ Com skill:
> 1. Barredura: 5 buscas paralelas sobre tráfego pago 2026
> 2. Deep research com Perplexity para dados em tempo real
> 3. Síntese: "Segundo [fonte 1] e [fonte 2], as tendências atuais são..."

---

### Exemplo 3 — Escolha de biblioteca

❌ Sem skill:
> "Use pandas para isso"

✅ Com skill:
> 1. Existe algo melhor? → WebSearch "pandas alternative 2026 performance"
> 2. Benchmark: pandas vs polars vs dask
> 3. Decisão: "Para datasets > 1GB, polars é 10x mais rápido (fonte: benchmark oficial)"

---

## Declaração de Confiança (obrigatória)

Toda resposta gerada com esta skill deve terminar com:

```
📊 FONTES DESTA RESPOSTA:
- [link ou título da fonte 1]
- [link ou título da fonte 2]
⏱️ Data das fontes: [mês/ano]
🎯 Confiança: ALTA / MÉDIA / BAIXA
```

---

## Integração com o Sistema

| Trigger | Ação |
|---------|------|
| "pesquisa X" | Ativa PASSO 2 (barredura) imediatamente |
| "benchmark X" | Ativa PASSO 3 diretamente |
| "cria um X" | Ativa PASSO 1 (verificar existência) primeiro |
| "melhores práticas de X" | Ativa PASSOS 2 + 3 |
| "deep research sobre X" | Ativa PASSOS 2 + 3 + 4 |

---

*RESEARCH-FIRST SKILL v1.0.0 · Mega Brain · 2026-03-15*
*Extraído de: Gravando 2026-03-15 160000.mp4*
