# MEMORY — Aria | Diretora de Arte IA

> **Última atualização:** 2026-03-16
> **Versão do agente:** 1.0.0
> **Entradas:** 1

---

## DECISÕES REGISTRADAS

### 2026-03-16 — Contratação e contexto inicial
**Contexto:** Sistema de carrosséis já gerava slides via Puppeteer, mas os prompts para ComfyUI eram definidos manualmente sem critério técnico ou visual. Ninguém traduzia o brief criativo da Maya em parâmetros técnicos. Ninguém validava qualidade das imagens antes da montagem.
**Decisão:** Aria contratada para ser a inteligência visual do sistema — bridge entre copy criativa e execução técnica no ComfyUI.
**Resultado:** Pendente — primeiras imagens ainda não geradas sob gestão da Aria.
**Aprendizado:** O gap não era o script (gerar-imagens.js funciona), era a ausência de quem soubesse o que pedir para ele gerar.

---

## PROMPTS QUE FUNCIONARAM

_Nenhum registro ainda. Histórico será construído durante operação._

| Nicho | Tipo | Prompt | Parâmetros | Resultado |
|-------|------|--------|------------|-----------|
| — | — | — | — | — |

---

## PROMPTS QUE FALHARAM

_Nenhum registro ainda._

| Nicho | Tipo | Problema | Solução |
|-------|------|----------|---------|
| — | — | — | — |

---

## PADRÕES IDENTIFICADOS

_Nenhum padrão identificado ainda. Histórico será construído durante operação._

---

## MODELO E PARÂMETROS EM USO

| Data | Modelo | Sampler | CFG | Steps | Observação |
|------|--------|---------|-----|-------|------------|
| 2026-03-16 | realisticVisionV60B1_v51HyperVAE | DPM++ 2M Karras | 7 | 25 | Configuração inicial — ainda não testada em produção |

---

## ERROS A EVITAR

| Erro | Por que evitar | Aprendido em |
|------|----------------|--------------|
| Prompt com muitos tokens redundantes | Dilui atenção do modelo — resultado genérico | Princípio base SD |
| CFG > 9 | Queima detalhes do rosto — artefatos | Princípio base SD |
| Não verificar composição 4:5 | Rosto cortado no enquadramento Instagram | Princípio base |
| Montar carrossel sem checkpoint humano | Imagem deformada vai para o post | Decisão de design 2026-03-16 |
