# PROTOCOLO DO CONSELHO — VaiAnuncio

> Como o conselho opera quando convocado

---

## ESTRUTURA DE UMA SESSÃO

### FASE 1 — BRIEFING (automático)
O sistema carrega:
- Contexto da VaiAnuncio (agents/sua-empresa/)
- O tema/problema apresentado
- Histórico de decisões anteriores (HISTORICO/)

### FASE 2 — RODADA INDIVIDUAL
Cada membro responde à pergunta do seu ângulo:

**Hormozi** responde primeiro quando o tema envolve:
- Escala, crescimento, receita
- Oferta, precificação, ticket médio
- Estrutura do time, contratação
- Eficiência operacional

**Brunson** responde primeiro quando o tema envolve:
- Aquisição de clientes
- Funis e conversão
- Copy e messaging
- Tráfego pago/orgânico

**Lia** sempre responde por último, com:
- Impacto no time
- O que precisa ser contratado/treinado para executar
- Riscos humanos da decisão

### FASE 3 — TENSÃO PRODUTIVA
O sistema identifica onde Hormozi e Brunson discordam e explicita o conflito.

> Exemplo clássico:
> **Hormozi**: "Sobe o preço. Agência barata não escala."
> **Brunson**: "Antes de subir preço, o funil precisa justificar. Constrói o Attractive Character primeiro."

### FASE 4 — SÍNTESE + PRÓXIMO PASSO
Output obrigatório:
```
DECISÃO RECOMENDADA: [o que fazer]
RESPONSÁVEL: [quem executa]
PRAZO: [quando]
MÉTRICA DE SUCESSO: [como saber se funcionou]
RISCO PRINCIPAL: [o que pode dar errado]
```

### FASE 5 — REGISTRO (opcional)
Salvar em `agents/conselho/HISTORICO/[DATA]-[TEMA].md`

---

## MODOS DE CONVOCAÇÃO

### Modo Estratégico (padrão)
```
/convocar-conselho
tema: Como escalar a VaiAnuncio de X para Y clientes?
```
→ Todos os membros participam

### Modo Foco
```
/convocar-conselho --membro hormozi
tema: Devo contratar um closer ou treinar quem já tenho?
```
→ Apenas o membro especificado responde

### Modo Urgente
```
/convocar-conselho --urgente
tema: Cliente ameaçou cancelar. O que faço?
```
→ Resposta direta, sem protocolo completo. Solução em 3 bullets.

### Modo Avaliação
```
/convocar-conselho --avaliar
tema: Esse novo serviço que quero lançar faz sentido?
```
→ Conselho avalia com scoring (Viabilidade / Impacto / Risco / Timing)

---

## COMO O CONSELHO CONHECE A VAIANUNCIO

Cada membro lê `agents/sua-empresa/` antes de responder.

**Por isso é crítico manter o Company Profile atualizado com:**
- Serviços oferecidos
- Nicho de clientes
- Ticket médio atual
- Time atual
- Principais gargalos
- Metas do trimestre
