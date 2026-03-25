# CONSELHO DA VAIANUNCIO

> **Empresa:** VaiAnuncio — Agência de Marketing Digital
> **Propósito:** Conselho estratégico de advisors para decisões da empresa
> **Convocação:** `/convocar-conselho [tema]`

---

## MEMBROS ATIVOS

| Membro | Papel no Conselho | Foco | Status |
|--------|-------------------|------|--------|
| **Alex Hormozi** | Estratégia de Negócio | Escala, oferta, precificação, time, crescimento | ACTIVE |
| **Russell Brunson** | Marketing & Funis | Tráfego, copy, funis, conversão, audiência | ACTIVE |
| **Lia (RH)** | Pessoas & Time | Contratação, treinamento, cultura do time | ACTIVE |

## CADEIRA ABERTA (próximos membros)

| Cadeira | Foco sugerido | Candidatos |
|---------|---------------|------------|
| Operações / Execução | Processos, entrega, gestão | A definir |
| Finanças / Gestão | Fluxo de caixa, precificação, margens | A definir |
| Conteúdo / Criativo | Posicionamento, branding, narrativa | A definir |

---

## COMO CONVOCAR

```
/convocar-conselho
→ tema: [decisão, problema ou oportunidade]
```

O conselho responde em **3 camadas**:
1. **Perspectiva individual** — cada membro fala do seu ângulo
2. **Pontos de conflito** — onde discordam e por quê
3. **Síntese** — recomendação consolidada com próximo passo

---

## REGRAS DO CONSELHO

1. **Todo membro fala** — nenhuma decisão sem input de todos os presentes
2. **Baseado em fontes** — Hormozi e Brunson citam frameworks reais do seu DNA
3. **Lia valida o impacto no time** — toda decisão estratégica passa pelo filtro de pessoas
4. **Síntese obrigatória** — o conselho sempre termina com uma recomendação acionável
5. **Conflito é saudável** — Hormozi e Brunson frequentemente discordam. Isso é bom.

---

## ARQUITETURA DO SISTEMA

```
agents/conselho/
├── README.md               ← este arquivo
├── HORMOZI-CONSELHEIRO.md  ← papel de Hormozi no conselho
├── BRUNSON-CONSELHEIRO.md  ← papel de Brunson no conselho
├── PROTOCOLO.md            ← como o conselho opera
└── HISTORICO/              ← registro de decisões passadas

agents/minds/
├── alex-hormozi/           ← DNA completo (649 insights)
└── russell-brunson/        ← DNA completo (363 insights)

agents/cargo/RH/            ← Lia — representa o time

.claude/skills/convocar-conselho/SKILL.md  ← skill de convocação
```
