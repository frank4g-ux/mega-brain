# SKILL: /demitir
## Processo de Desativação de Agentes

> **Auto-Trigger:** /demitir, "demitir agente", "remover agente", "desativar cargo"
> **Keywords:** demitir, remover, arquivar, desativar, redundante
> **Agente responsável:** Lia (agents/cargo/RH/)
> **Prioridade:** MEDIA

---

## PROPÓSITO

Remover agentes que não entregam, se tornaram redundantes ou foram substituídos — preservando histórico para referência futura.

---

## QUANDO USAR

- Agente falhou no período de onboarding (menos de 2/3 testes)
- Cargo foi mesclado com outro agente
- Agente ficou desatualizado e não vale re-treinar
- Reestruturação do time

---

## PROCESSO — 3 ETAPAS

### ETAPA 1: DIAGNÓSTICO

Antes de demitir, confirmar:
```
1. O agente falhou ou o cargo estava mal definido?
   → Se cargo mal definido: refazer /contratar com briefing melhor
2. Outro agente cobre essa função?
   → Identificar quem assume as responsabilidades
3. Há histórico valioso na MEMORY.md?
   → Preservar aprendizados antes de arquivar
```

### ETAPA 2: ARQUIVAR

```bash
# Mover pasta para _ARQUIVO
mv f:/FUTURO/mega-brain/agents/cargo/[CARGO] \
   f:/FUTURO/mega-brain/agents/cargo/_ARQUIVO/[CARGO]-[DATA]

# Adicionar nota de demissão no DNA-CONFIG.yaml
status: ARCHIVED
archived_date: "[DATA]"
archived_reason: "[motivo]"
responsibilities_transferred_to: "[cargo que assumiu]"
```

### ETAPA 3: ATUALIZAR REGISTROS

```
1. Remover do AGENT-INDEX.yaml (ou marcar status: archived)
2. Notificar agentes que colaboravam com ele
   → Atualizar MEMORY.md dos agentes afetados
3. Registrar na MEMORY.md da Lia
```

---

## ANTI-PATTERNS

1. ❌ Deletar arquivos — sempre arquivar em `_ARQUIVO/`
2. ❌ Demitir sem transferir responsabilidades
3. ❌ Deixar AGENT-INDEX.yaml com agente arquivado como active

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-13
- **Agente dono:** Lia (agents/cargo/RH/)
