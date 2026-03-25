# PLANO: AI COMPANY NO MEGA BRAIN
# Como replicar o sistema de "funcionários IA" via terminal/Claude

> Gerado por JARVIS | Baseado em: Desktop 2026.03.12 - 20.44.41.02.mp4
> Data: 2026-03-13

---

## O QUE O VÍDEO MOSTRA (resumo)

O criador construiu uma empresa com agentes IA como funcionários reais:
- Cada agente tem cargo, senioridade, skills, knowledge base
- Existe um processo formal de "contratação" (~40 min por agente)
- Agentes se entrevistam antes de contratar alguém novo
- Agentes são "treinados" com novos cursos/conteúdos
- Existe o "Grid" — workspace no Notion só para agentes
- Pipeline de criação de vídeo 100% autônomo (15 etapas, só uma foto)
- Visão: marketplace de funcionários IA treinados

---

## DIAGNÓSTICO: O QUE VOCÊ JÁ TEM

| Conceito do Vídeo         | Mega Brain Equivalente              | Status     |
|---------------------------|-------------------------------------|------------|
| Company Profile           | agents/sua-empresa/ + ask-company   | EXISTE     |
| Agentes de Pessoa (minds) | agents/minds/ (Hormozi, Brunson)    | EXISTE     |
| Skills System             | .claude/skills/ (~40+ skills)       | EXISTE     |
| Pipeline de Conhecimento  | process-jarvis / process-inbox      | EXISTE     |
| The Grid (workspace IA)   | knowledge/ + artifacts/             | PARCIAL    |
| Agentes de Cargo          | agents/cargo/ — VAZIO               | FALTA      |
| Processo de Contratação   | Skill /contratar — não existe       | FALTA      |
| Processo de Treinamento   | Skill /treinar — não existe         | FALTA      |
| Pipeline de Vídeo         | Não construído                      | FALTA      |
| RH Agent                  | Não existe                          | FALTA      |

---

## ROADMAP — 4 FASES

```
FASE 1 (Fundação)     → Estrutura base + RH Agent
FASE 2 (Processos)    → Contratar + Treinar + Demitir
FASE 3 (Operações)    → Primeiros Funcionários (3-5 agentes)
FASE 4 (Automação)    → Pipeline de conteúdo autônomo
```

---

## FASE 1 — FUNDAÇÃO (faça isso primeiro)

### 1.1 Criar estrutura agents/cargo/

```
agents/
└── cargo/
    ├── _TEMPLATE/         ← template padrão de cargo
    │   ├── AGENT.md
    │   ├── SOUL.md
    │   ├── MEMORY.md
    │   └── DNA-CONFIG.yaml
    ├── RH/                ← primeiro funcionário
    ├── GESTOR-TRAFEGO/
    ├── COPYWRITER/
    └── EDITOR-VIDEO/
```

### 1.2 Criar o RH Agent (Lia / seu equivalente)

O RH é o primeiro agente. Ele:
- Conhece o company profile
- Faz pesquisa de cargo antes de contratar
- Entrevista agentes existentes sobre o novo cargo
- Define skills necessárias
- Valida gaps nos agentes existentes

**Criar via:**
```
/create-agent
cargo: RH
nome: [o que você quiser]
responsabilidades: contratação, onboarding, treinamento de agentes
```

### 1.3 Company Profile — verificar e completar

O RH precisa saber:
- Produto, nicho, faixa de preço
- Stack técnico (quais plataformas usa)
- Canais de aquisição
- Público-alvo
- Funil atual

**Arquivo:** agents/sua-empresa/ (já existe — revisar se está completo)

---

## FASE 2 — OS PROCESSOS

### 2.1 Skill /contratar

Processo formal em 6 etapas (igual ao vídeo):

```
ETAPA 1: BRIEFING DO CARGO
  → Qual cargo? Senioridade? O que faz?

ETAPA 2: PESQUISA DE SKILLS EXISTENTES
  → Verificar .claude/skills/ — já existe algo útil?
  → Verificar agents/cargo/ — cargo similar já existe?

ETAPA 3: ENTREVISTA COM O TIME
  → Consultar agentes que vão trabalhar COM esse cargo
  → "O que você precisa dessa pessoa?"
  → "O que você transferiria para ela?"

ETAPA 4: SÍNTESE DO PERFIL
  → Consolidar o que o time pediu
  → Definir skills obrigatórias vs. desejáveis

ETAPA 5: CRIAR O AGENTE
  → Seguir template V3 (agents/_templates/)
  → Popular SOUL.md com identidade do cargo
  → Popular DNA-CONFIG.yaml com fontes de conhecimento

ETAPA 6: ONBOARDING (período de experiência)
  → Testar o agente em 3 situações reais
  → Ajustar SOUL.md e MEMORY.md com feedback
  → Aprovar ou demitir
```

**Criar skill:** .claude/skills/contratar/SKILL.md

### 2.2 Skill /treinar

Quando: novo curso lançado, nova documentação de plataforma, etc.

```
ETAPA 1: IDENTIFICAR AGENTE + CONTEÚDO
  → Qual agente precisa ser treinado?
  → Qual material novo? (URL, PDF, áudio)

ETAPA 2: INGERIR O CONTEÚDO
  → /ingest [material]
  → Pipeline Jarvis extrai DNA cognitivo

ETAPA 3: ATUALIZAR MEMORY.md DO AGENTE
  → Adicionar novos insights
  → Incrementar versão do agente

ETAPA 4: REVALIDAR
  → Testar agente com pergunta relacionada ao novo conteúdo
  → Confirmar que absorveu o conhecimento
```

**Criar skill:** .claude/skills/treinar/SKILL.md

### 2.3 Skill /demitir

Simples:
```
→ Arquivar AGENT.md em agents/cargo/_ARQUIVO/
→ Remover do AGENT-INDEX.yaml
→ Notificar agentes que trabalhavam com ele
```

---

## FASE 3 — PRIMEIROS FUNCIONÁRIOS

Ordem sugerida (igual ao vídeo — lógica de dependência):

```
1. RH (contrata os outros)
2. Estrategista de Conteúdo (define direção)
3. Copywriter (cria conceitos e roteiros)
4. Gestor de Tráfego (Meta Ads)
5. Editor de Vídeo (executa produção)
```

### Como contratar cada um via terminal:

```bash
# No Warp/Claude:
/contratar

# Responda as perguntas:
# - Qual cargo? → Copywriter
# - Senioridade? → Sênior
# - Foco principal? → Conteúdo para infoproduto, Meta Ads
```

O processo vai:
1. Verificar skills existentes (.claude/skills/)
2. Consultar agentes do time sobre o perfil
3. Criar agents/cargo/COPYWRITER/ completo

---

## FASE 4 — PIPELINE DE CONTEÚDO AUTÔNOMO

O que o criador do vídeo fez (pipeline de 15 etapas):

```
INPUT:  1 foto + contexto da empresa
OUTPUT: vídeo pronto para publicar

ETAPAS (reconstruídas do vídeo):
 1. Briefing do conteúdo (tema, objetivo, ICP)
 2. Pesquisa de referências (Grid/inbox)
 3. Escolha do formato (review, tutorial, framework, etc.)
 4. Roteiro (copy agent)
 5. Hook (copy agent — variações A/B/C)
 6. Story
 7. Oferta/CTA
 8. Especificações de produção (Meta placement specs)
 9. Brief visual para editor
10. Edição / montagem
11. Legenda
12. Thumbnail / capa
13. Revisão (estrategista aprova)
14. Agendamento
15. Loop de feedback com gestor de tráfego
```

**Para construir no Mega Brain:**
```
/brainstorming
→ tema: pipeline de criação de conteúdo autônomo
→ depois: /gsd:new-project para estruturar as fases
```

---

## O "GRID" NO MEGA BRAIN

O "Grid" do vídeo (Notion só para agentes) equivale a:

```
knowledge/                  ← base de conhecimento estruturada
├── sources/                ← fontes processadas por pessoa
├── dna/                    ← DNA cognitivo extraído
└── [sua-empresa]/          ← conhecimento operacional

artifacts/                  ← outputs do pipeline
├── insights/               ← insights extraídos
└── chunks/                 ← chunks de transcrição

inbox/                      ← entrada de novos materiais
```

**Regra equivalente ao "Grid":**
- Input bruto → inbox/ (nunca modificar)
- Conhecimento processado → knowledge/
- Agentes lêem de knowledge/, não de inbox/

---

## MARKETPLACE (visão de futuro)

O que ele quer construir:
> "Agente de gestor de tráfego que já gerenciou R$2M — você pode usar o meu"

No Mega Brain, isso seria:
- agents/cargo/GESTOR-TRAFEGO/ com DNA de Hormozi + Brunson + conteúdo próprio
- Exportável como pacote (AGENT.md + SOUL.md + DNA-CONFIG.yaml + MEMORY.md)
- Outros usuários do Mega Brain poderiam importar

**Hoje não é possível automaticamente — mas os arquivos já são portáteis.**

---

## PRÓXIMO PASSO IMEDIATO

Execute na ordem:

```bash
# 1. Ver o que já existe de empresa
/ask-company

# 2. Criar estrutura de cargos
mkdir -p f:/FUTURO/mega-brain/agents/cargo/_TEMPLATE

# 3. Criar primeiro agente (RH)
/create-agent

# 4. Criar skill de contratação
# Me peça: "Jarvis, cria a skill /contratar"
```

---

## RESUMO EXECUTIVO

```
O sistema do vídeo é basicamente o Mega Brain
com a camada de "empresa" mais desenvolvida.

Você já tem:  pipeline, minds, skills, company profile
Falta:        cargo agents + processos formais (contratar/treinar)

Estimativa para ter o sistema básico funcionando:
- 1 sessão: Estrutura + RH Agent
- 2-3 sessões: 4-5 funcionários contratados
- 1 semana: Pipeline de conteúdo funcionando
```

---

*JARVIS — Mega Brain | 2026-03-13*
