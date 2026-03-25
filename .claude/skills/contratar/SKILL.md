# SKILL: /contratar
## Processo Formal de Contratação de Agentes IA

> **Auto-Trigger:** /contratar, "contratar agente", "novo funcionário IA", "criar cargo"
> **Keywords:** contratar, novo agente, cargo novo, funcionário
> **Agente responsável:** Lia (agents/cargo/RH/)
> **Prioridade:** ALTA

---

## PROPÓSITO

Garantir que cada novo agente seja criado com:
- Cargo bem definido (sem duplicar existentes)
- Perfil validado pelo time atual
- Skills necessárias mapeadas
- Período de experiência estruturado

---

## QUANDO USAR

### ✅ USAR quando:
- Fundador pede novo agente de cargo
- Identificado gap no time que nenhum agente atual cobre
- Cargo existente precisa ser desmembrado em dois

### ❌ NÃO USAR quando:
- Apenas consultando um agente existente
- Criando um Mind (Agent of Person) — usar SKILL-AGENT-CREATION
- Atualizando agente existente — usar /treinar

---

## PROCESSO — 6 ETAPAS

### ETAPA 1: BRIEFING DO CARGO

Perguntar ao fundador:

```
1. Qual cargo? (ex: Copywriter, Gestor de Tráfego, Estrategista)
2. Senioridade? (Junior / Pleno / Senior / Lead)
3. Foco principal? (ex: conteúdo para infoproduto, Meta Ads, vídeo curto)
4. O que travará sem esse agente? (urgência)
```

---

### ETAPA 2: PESQUISA DE DUPLICIDADE

Antes de criar, verificar:

```
# Verificar cargos existentes
cat f:/FUTURO/mega-brain/agents/AGENT-INDEX.yaml

# Verificar se skills cobrem parcialmente
ls f:/FUTURO/mega-brain/.claude/skills/

# Verificar cargo similar
ls f:/FUTURO/mega-brain/agents/cargo/
```

**Regra:** Se já existe algo 70%+ similar → adaptar existente, não criar novo.

---

### ETAPA 3: ENTREVISTA COM O TIME

Consultar agentes que vão trabalhar COM esse cargo:

```
Perguntas padrão para cada agente entrevistado:
- "O que você precisa dessa pessoa para fazer seu trabalho melhor?"
- "O que você transferiria para ela?"
- "Qual a maior dor que esse cargo resolve para você?"
```

Agentes a consultar (conforme o cargo):
- Cargo de conteúdo → consultar CMO, Copywriter existente
- Cargo de vendas → consultar Sales Manager, Closer
- Cargo operacional → consultar COO

---

### ETAPA 4: SÍNTESE DO PERFIL

Consolidar o que o time pediu em:

```
SKILLS OBRIGATÓRIAS:
- [skill 1]
- [skill 2]

SKILLS DESEJÁVEIS:
- [skill A]

ENTREGA ESPERADA NA PRIMEIRA SESSÃO:
- [tarefa concreta que o agente deve conseguir fazer]

MÉTRICAS DE SUCESSO:
- [KPI 1]: [target]
```

---

### ETAPA 5: CRIAR O AGENTE

Seguir template em `agents/cargo/_TEMPLATE/`:

```bash
# 1. Criar pasta do cargo
mkdir -p f:/FUTURO/mega-brain/agents/cargo/[SLUG-CARGO]

# 2. Copiar e popular os 4 arquivos
# AGENT.md — comportamento e responsabilidades
# SOUL.md — identidade em primeira pessoa
# MEMORY.md — histórico (inicialmente vazio)
# DNA-CONFIG.yaml — configuração e metadados

# 3. Atualizar AGENT-INDEX.yaml
```

**Campos obrigatórios no AGENT.md:**
- Cargo, senioridade, status (ONBOARDING)
- Responsabilidades primárias (mín. 3)
- Como invocar (triggers + comando)
- Anti-patterns (o que NÃO faz)

---

### ETAPA 6: ONBOARDING (Período de Experiência)

Testar o agente em **3 situações reais** antes de aprovar:

```
TESTE 1: [Situação básica do cargo]
RESULTADO: [passou / ajuste necessário]

TESTE 2: [Situação intermediária]
RESULTADO: [passou / ajuste necessário]

TESTE 3: [Situação que envolve colaboração com outro agente]
RESULTADO: [passou / ajuste necessário]
```

**Critério de aprovação:** 2 de 3 testes com resultado satisfatório.

Após aprovação:
- Atualizar `status: ACTIVE` no DNA-CONFIG.yaml
- Atualizar `aprovado: true` no DNA-CONFIG.yaml
- Registrar em `AGENT-INDEX.yaml`
- Registrar na MEMORY.md da Lia

**Se não aprovado:** arquivar em `agents/cargo/_ARQUIVO/` e documentar motivo.

---

## OUTPUT ESPERADO

Ao final do processo, devem existir:

```
agents/cargo/[CARGO]/
├── AGENT.md        ← comportamento e responsabilidades
├── SOUL.md         ← identidade (primeira pessoa)
├── MEMORY.md       ← histórico (com entrada do onboarding)
└── DNA-CONFIG.yaml ← config + metadados
```

E `AGENT-INDEX.yaml` atualizado com o novo cargo.

---

## ANTI-PATTERNS

1. ❌ Pular etapa de pesquisa de duplicidade
2. ❌ Criar sem consultar nenhum agente do time
3. ❌ Aprovar sem testar em situação real
4. ❌ Deixar AGENT-INDEX.yaml desatualizado
5. ❌ Status ACTIVE sem `aprovado: true` no DNA-CONFIG

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-13
- **Agente dono:** Lia (agents/cargo/RH/)
- **Dependências:** agents/cargo/_TEMPLATE/, agents/AGENT-INDEX.yaml
