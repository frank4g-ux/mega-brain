# RESEARCH-FIRST — Skill Brief
> **Extraído de:** Gravando 2026-03-15 160000.mp4
> **Data:** 2026-03-15
> **Destino:** Nova skill Claude Code (`/.claude/skills/research-first/`)
> **Status:** RASCUNHO — pronto para execução no Warp

---

## 🎯 O QUE É

Um **modo de operação obrigatório** que elimina ~70% dos erros da IA.

A premissa: antes de construir qualquer coisa, a IA pesquisa, faz benchmark e verifica se já existe — em vez de inventar.

> *"O meu modo é baseado em pesquisa. Pesquisa e benchmark."*

---

## 💡 INSIGHTS EXTRAÍDOS DO VÍDEO

### INSIGHT 1 — O problema raiz da IA: ela inventa
- Quando você pede direto sem contexto, a IA usa dados de treinamento desatualizados
- Corte de dados pode ser 2024/2025 — ela inventa o que não sabe
- Exemplo: pede para criar um app → ela escolhe uma stack errada porque não pesquisou o que está funcionando HOJE
- **Fix:** obrigar pesquisa antes de qualquer execução

---

### INSIGHT 2 — Barredura com múltiplos ângulos (Multi-Agent Search)
- Em vez de 1 busca, disparar vários agentes em paralelo com ângulos diferentes
- Exemplo para "tráfego pago 2026":
  - Agente 1: Meta Ads best practices
  - Agente 2: Google Ads tendências
  - Agente 3: Best paid traffic strategies (EN)
  - Agente 4: Perplexity deep research
- Os resultados se cruzam → elimina viés de uma única fonte
- **Fix:** sempre fazer varredura multi-ângulo antes de responder

---

### INSIGHT 3 — Benchmark antes de construir
- Se vai criar um CRM: pesquisa quais funcionalidades as maiores empresas do mundo usam
- Extrai o que é comum entre os líderes de mercado
- Traz esse benchmark para a IA como contexto
- Resultado: a IA constrói com base em padrões validados, não em suposições
- **Fix:** `pesquisa → benchmark → extrai padrões → executa`

---

### INSIGHT 4 — Verificar se já existe antes de criar
- Antes de qualquer implementação: "já existe isso no GitHub?"
- Se existe → fork/adapt, não invente a roda
- Se não existe → deep research para entender o espaço
- **Fix:** checagem de existência como passo zero de qualquer build

---

### INSIGHT 5 — Deep Research com Perplexity como camada de validação
- Após a barredura inicial, usar Perplexity para validar e aprofundar
- Perplexity acessa dados em tempo real → elimina o problema do corte de dados
- Sequência: Barredura multi-ângulo → Deep Research → Síntese → Execução
- **Fix:** integrar Perplexity (via MCP ou WebSearch) como etapa de validação

---

### INSIGHT 6 — Processo mental que muda o jogo
O usuário chama isso de **"modo de pesquisa"** — é um mindset antes de ser uma skill:
1. **PESQUISA:** o que existe no mercado hoje?
2. **BENCHMARK:** quais os padrões dos líderes?
3. **DEEP RESEARCH:** aprofundamento com dados em tempo real
4. **EXTRAÇÃO:** trazer os padrões validados como contexto para a IA
5. **EXECUÇÃO:** só então construir/responder

---

## 🏗️ ESTRUTURA DA SKILL (PROPOSTA)

```
/.claude/skills/research-first/
├── SKILL.md          ← Instruções (auto-trigger por keywords)
└── README.md         ← Documentação
```

### Keywords para auto-trigger:
```
"pesquisa", "benchmark", "research", "existe no GitHub",
"melhores práticas", "best practices", "stack", "como fazer",
"criar um", "implementar", "comparar", "análise de mercado"
```

### Fluxo da skill:

```
USER REQUEST
     │
     ▼
PASSO 1: EXISTE? ──────────────────────────────────────────────
     │   → Busca GitHub/npm/PyPI por solução existente
     │   → SE EXISTE: apresenta opções antes de criar do zero
     │
     ▼
PASSO 2: BARREDURA MULTI-ÂNGULO ──────────────────────────────
     │   → 3-5 buscas paralelas com ângulos diferentes
     │   → EN + PT, teoria + prática, recente (2025/2026)
     │
     ▼
PASSO 3: BENCHMARK ───────────────────────────────────────────
     │   → Quais padrões os líderes de mercado usam?
     │   → Extrai o que é COMUM entre os tops
     │
     ▼
PASSO 4: DEEP RESEARCH (opcional) ────────────────────────────
     │   → Perplexity ou WebSearch para dados em tempo real
     │   → Valida o que a barredura encontrou
     │
     ▼
PASSO 5: SÍNTESE + EXECUÇÃO ──────────────────────────────────
         → Com contexto validado, executa com confiança
         → Cita fontes das decisões técnicas
```

---

## 📋 PRÓXIMOS PASSOS (Execução no Warp)

1. [ ] Criar `/.claude/skills/research-first/SKILL.md` com o fluxo acima
2. [ ] Adicionar keywords no header (auto-trigger)
3. [ ] Definir seção "Quando NÃO ativar" (tarefas simples/diretas)
4. [ ] Testar com um caso real (ex: "pesquisa melhores libs de PDF em Python")
5. [ ] Adicionar ao `SKILL-INDEX.json` via skill_indexer

---

## 🔗 CONEXÕES COM O SISTEMA

| Componente | Conexão |
|------------|---------|
| `WebSearch` tool | Barredura multi-ângulo |
| `WebFetch` tool | Deep research em páginas específicas |
| `Bash(gh search)` | Verificar existência no GitHub |
| Perplexity MCP | Deep research em tempo real |
| `dispatching-parallel-agents` skill | Múltiplos agentes em paralelo |

---

*Brief gerado automaticamente por JARVIS · 2026-03-15 · Fonte: vídeo de tela 24MB*
