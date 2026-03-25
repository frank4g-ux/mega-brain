# SKILL: /treinar
## Processo de Treinamento de Agentes com Novo Conteúdo

> **Auto-Trigger:** /treinar, "treinar agente", "atualizar agente", "novo curso", "novo material"
> **Keywords:** treinar, atualizar, novo conteúdo, curso, material, versão do agente
> **Agente responsável:** Lia (agents/cargo/RH/)
> **Prioridade:** ALTA

---

## PROPÓSITO

Quando novo conhecimento chega (curso, documentação, case, playbook), garantir que o agente certo absorve esse conhecimento e sua MEMORY.md e DNA-CONFIG são atualizados.

---

## QUANDO USAR

### ✅ USAR quando:
- Novo curso ou material relevante foi processado pelo pipeline Jarvis
- Plataforma lançou nova documentação (Meta Ads, etc.)
- Fundador aprendeu algo novo e quer passar ao agente
- Agente apresentou gap em uma situação real → treinar para cobrir o gap

### ❌ NÃO USAR quando:
- Criando agente novo → usar /contratar
- Material ainda não foi processado pelo pipeline → processar primeiro com /pipeline-jarvis

---

## PROCESSO — 4 ETAPAS

### ETAPA 1: IDENTIFICAR AGENTE + CONTEÚDO

```
Perguntar:
1. Qual agente precisa ser treinado?
   → Verificar em: agents/cargo/ ou agents/minds/
2. Qual material novo?
   → URL, PDF, áudio, transcrição, case real
3. Por que esse agente especificamente?
   → Qual gap ou capacidade isso cobre?
```

---

### ETAPA 2: INGERIR O CONTEÚDO

Se o material ainda não está processado:

```bash
# Colocar no inbox primeiro
# [arquivo] → inbox/[categoria]/

# Processar com o pipeline
/pipeline-jarvis
```

Se já está em `artifacts/insights/` ou `knowledge/`:
- Identificar o ID da fonte (ex: AH023)
- Localizar o arquivo de insights relevante

---

### ETAPA 3: ATUALIZAR O AGENTE

**3a. Atualizar MEMORY.md do agente:**

```markdown
## TREINAMENTOS REALIZADOS
| [DATA] | [Nome do conteúdo] | [Fonte ID] | [nova versão] |
```

**3b. Se o conteúdo muda a forma de operar — atualizar SOUL.md:**
- Adicionar novo framework ou modelo mental
- Atualizar filtros de decisão se necessário

**3c. Atualizar DNA-CONFIG.yaml:**

```yaml
# Adicionar fonte à lista de knowledge_sources
# Incrementar versão
version: "1.1.0"
last_updated: "[DATA]"

# Adicionar ao histórico
versao_historico:
  - versao: "1.1.0"
    data: "[DATA]"
    mudanca: "Treinado com: [nome do conteúdo]"
```

---

### ETAPA 4: REVALIDAR

Testar o agente com pergunta relacionada ao novo conteúdo:

```
PERGUNTA DE TESTE:
"[Pergunta diretamente relacionada ao que foi treinado]"

CRITÉRIO DE APROVAÇÃO:
- Agente usa conceitos do novo material
- Agente cita a fonte ou framework correto
- Resposta é diferente/melhor do que antes do treino
```

Registrar resultado no MEMORY.md:

```markdown
### [DATA] - Revalidação pós-treino: [conteúdo]
**Resultado:** [Aprovado / Ajuste necessário]
**Observação:** [o que mudou na qualidade das respostas]
```

---

## OUTPUT ESPERADO

Após treino completo:
- MEMORY.md atualizado com registro do treinamento
- DNA-CONFIG.yaml com versão incrementada e fonte adicionada
- SOUL.md atualizado (se framework novo foi absorvido)
- Revalidação documentada

---

## ANTI-PATTERNS

1. ❌ Treinar com material não processado pelo pipeline Jarvis
2. ❌ Atualizar SOUL.md (DNA imutável) com informações operacionais → MEMORY.md
3. ❌ Esquecer de incrementar a versão no DNA-CONFIG.yaml
4. ❌ Treinar sem revalidar com pergunta concreta
5. ❌ Treinar agente com material que não é da sua área

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-13
- **Agente dono:** Lia (agents/cargo/RH/)
- **Dependências:** pipeline-jarvis, agents/cargo/[agente]/MEMORY.md, DNA-CONFIG.yaml
