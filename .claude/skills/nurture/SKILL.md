# SKILL: /nurture
## Sequência de Nurture para Leads Pós-LP VaiAnuncio

> **Auto-Trigger:** /nurture, "sequência de nurture", "follow-up de lead", "lead não converteu", "recuperar lead", "mensagem para quem visitou"
> **Keywords:** nurture, follow-up, sequência, lead frio, retargeting, recuperar, WhatsApp nurture
> **Agente responsável:** Bruno (SDR) + Maya (Copywriter)
> **Prioridade:** ALTA

---

## PROPÓSITO

Converter leads que chegaram pela LP (`vaianuncioai.com`) via CTA WhatsApp ou qualquer outro canal, mas **não fecharam na primeira conversa**. Baseado no Follow-Up Funnel do Brunson: *"O dinheiro está no follow-up — $16,49 para cada $1 do front-end."*

---

## QUANDO USAR

### ✅ USAR quando:
- Lead iniciou conversa no WhatsApp mas sumiu sem marcar reunião
- Lead visitou a LP (identificado via Pixel retargeting) mas não clicou no CTA
- Lead recebeu proposta e não respondeu em 48h
- Lead disse "vou pensar" e ficou em silêncio

### ❌ NÃO USAR quando:
- Lead disse explicitamente "não tenho interesse"
- Lead acabou de receber a primeira mensagem (aguardar 24h)
- Lead já está com reunião marcada

---

## COMO INVOCAR

```
/nurture --lead "Nome" --nicho "clínica" --status "sumiu após primeiro contato"
/nurture --lead "Nome" --nicho "prestador" --status "recebeu proposta, sem resposta"
/nurture --lead "Nome" --nicho "ecommerce" --status "visitou LP, não clicou"
```

---

## SEQUÊNCIA COMPLETA — 5 MENSAGENS

A sequência foi desenhada para WhatsApp. Adapta para email se esse for o canal do lead.

---

### MENSAGEM 1 — Dia 2 após silêncio
**Gatilho:** Lead sumiu após primeiro contato
**Ângulo:** Valor imediato, sem pressão

```
[Nome], tudo bem?

Te mando algo rápido que pode ser útil independente de a gente fechar ou não.

[Escolher UM dos conteúdos abaixo baseado no nicho:]

📌 CLÍNICAS:
Fizemos um diagnóstico rápido em 3 clínicas aqui em SP. As três estavam perdendo entre 40-60% dos leads porque ninguém atendia fora do horário comercial. Um bot de atendimento resolveu isso em 48h.

📌 PRESTADORES DE SERVIÇO:
A maioria das desentupidoras, elétricas e hidráulicas que atendemos perde job no momento em que o cliente liga e cai na caixa postal. O concorrente que atende em 2 minutos fica com o serviço.

📌 E-COMMERCE:
SDR de IA recupera carrinho abandonado e qualifica lead antes do vendedor humano tocar. Taxa de conversão sobe 18-25% nos primeiros 30 dias segundo nossos clientes.

Se faz sentido pro seu negócio, posso te mostrar como ficaria na prática.
```

---

### MENSAGEM 2 — Dia 5 após silêncio
**Gatilho:** Ainda sem resposta
**Ângulo:** Prova social + especificidade

```
[Nome], só mais um ponto rápido.

[Escolher UM case abaixo baseado no nicho:]

🦷 CLÍNICA ODONTO (São Paulo):
Atendimento 24h por IA → 37 consultas agendadas fora do horário comercial no primeiro mês.
Investimento: R$1.800/mês. Retorno: +R$18.500 em procedimentos.

⚡ ELÉTRICA (Grande SP):
SDR de IA qualificando leads via WhatsApp → tempo de resposta caiu de "quando dá" para 2 minutos.
Taxa de conversão: +31%.

👢 E-COMMERCE DE MODA:
SDR IA qualificando lead antes do vendedor humano → ciclo de venda caiu de 4 dias para 6 horas.

O [nicho do lead] que a gente atende tem resultados parecidos.
Quando seria bom conversar 20 minutos sobre o seu caso?
```

---

### MENSAGEM 3 — Dia 9 após silêncio
**Gatilho:** Ainda sem resposta
**Ângulo:** Pergunta direta + abertura de objeção

```
[Nome], última mensagem por enquanto.

Quero entender se é o momento certo ou se tem algo que não ficou claro.

É alguma dessas situações?

A) Orçamento não está no radar agora
B) Preciso ver resultado de outra empresa antes de decidir
C) Quero mas preciso de mais informação
D) Não é prioridade agora

Me fala qual — sem pressão. Assim eu sei como te ajudar melhor ou quando voltar a falar.
```

---

### MENSAGEM 4 — Dia 15 (se respondeu C ou D)
**Gatilho:** Lead pediu mais informação ou "não é o momento agora"
**Ângulo:** Conteúdo de valor + manutenção de relacionamento

```
[Nome], sem pressa. Quando chegar o momento, a VaiAnuncio continua aqui.

Enquanto isso, deixa eu te mandar algo que ajuda a pensar:

[LINK para carrossel mais relevante do Instagram — Leo define qual]

É uma série que a gente faz sobre como negócios como o seu estão usando IA no atendimento. Sem vender nada — só conteúdo de resultado.

Qualquer coisa, é só chamar.

Fran · VaiAnuncio
```

---

### MENSAGEM 5 — Dia 21 (mensagem de breakup com reversão)
**Gatilho:** Nenhuma resposta após 21 dias
**Ângulo:** Fechamento + CTA suave que reabre conversa

```
[Nome], vou encerrar o contato por aqui para não incomodar.

Se em algum momento o [nicho] quiser crescer com tráfego pago + IA de atendimento, me manda mensagem aqui.

Antes de sair, uma última coisa: um dos [nicho] da nossa carteira estava exatamente na mesma situação que você está agora — 1 cliente pago, agenda irregular, sem sistema. Em 90 dias fechou R$[X] em novos procedimentos/serviços usando o que fazemos aqui.

Se quiser saber como, estou aqui.

Fran · VaiAnuncio
vaianuncioai.com
```

---

## VARIÁVEIS OBRIGATÓRIAS AO EXECUTAR

Antes de gerar a sequência, confirmar:

| Variável | Onde encontrar |
|----------|----------------|
| `[Nome]` | Dado do lead no CRM/conversa |
| `[Nicho]` | Informado pelo fundador ou Bruno |
| `[Status]` | Motivo do silêncio (sumiu / proposta / visitou LP) |
| `[Case relevante]` | Escolher o mais próximo do nicho do lead |

---

## INTEGRAÇÃO COM O TIME

| Agente | Papel nesta skill |
|--------|-------------------|
| **Bruno (SDR)** | Executa o envio, monitora respostas, decide qual mensagem enviar baseado no status |
| **Maya (Copywriter)** | Adapta o tom se o lead tem perfil mais formal (clínica) ou mais direto (prestador) |
| **Leo (Estrategista)** | Indica qual carrossel do Instagram usar na Mensagem 4 |
| **Kauan** | Configura retargeting Meta para leads que visitaram a LP e não converteram (paralelo ao nurture WhatsApp) |
| **Rodrigo** | Configura retargeting Google Display para mesmo público |

---

## REGRAS

1. **Nunca enviar mais de 1 mensagem por dia** — parece spam
2. **Sempre personalizar com dado real do lead** — nome do negócio, cidade, algo específico
3. **Nunca repetir o mesmo ângulo duas vezes** — cada mensagem tem um ângulo diferente
4. **Se lead pedir para parar** — Bruno registra como "sem interesse" e remove da sequência imediatamente
5. **Após reunião marcada** — sequência para. Passa para `/onboarding-cliente` quando fechar.

---

## META-INFORMAÇÃO

- **Versão:** 1.0.0
- **Criado:** 2026-03-20
- **Agente dono:** Bruno (SDR) com supervisão do fundador
- **Framework base:** Follow-Up Funnel (Russell Brunson) + Soap Opera Sequence
- **Dependências:** agents/cargo/SDR/AGENT.md, agents/cargo/COPYWRITER/AGENT.md
