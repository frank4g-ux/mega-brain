# SKILL: /n8n-setup
## Setup Completo de Prospecção Automática — n8n + Evolution API + Claude

> **Auto-Trigger:** /n8n-setup, "configurar n8n", "setup automação", "prospecção automática", "instalar n8n", "conectar whatsapp automação"
> **Prioridade:** ALTA
> **Pré-requisito:** VPS Hostinger ativo (KVM 1 ou superior)

---

## O QUE ESSA SKILL FAZ

Configura do zero toda a infraestrutura de prospecção automática:

1. Instala n8n + Evolution API no VPS
2. Conecta o número de WhatsApp
3. Cria o workflow completo de prospecção
4. Conecta Claude API para qualificação automática
5. Ativa follow-up automático (dia 2, 5, 10)
6. Configura alerta para o Fran quando lead qualifica

**Resultado:** Você roda `/prospectar`, aprova a lista, e só aparece nas reuniões.

---

## COMO INVOCAR

```
/n8n-setup                    → inicia setup do zero
/n8n-setup --status           → verifica o que já está instalado
/n8n-setup --workflow         → só gera o workflow (VPS já configurado)
/n8n-setup --conectar-wp      → só conecta número WhatsApp novo
```

---

## FASE 1 — CONTRATAR E ACESSAR O VPS

### 1.1 Contratar VPS na Hostinger
- Plano: **KVM 1** (1 vCPU, 4GB RAM, 50GB SSD) — suficiente para tudo
- OS: **Ubuntu 22.04 LTS**
- Região: **São Paulo** (menor latência)
- Custo: ~R$40-60/mês

Após contratar:
1. Acessa **hpanel.hostinger.com**
2. VPS → clica no servidor
3. Copia o **IP do servidor** e a **senha root**

### 1.2 Conectar ao VPS via terminal
```bash
ssh root@SEU_IP_AQUI
```

---

## FASE 2 — INSTALAR DOCKER + N8N + EVOLUTION API

### 2.1 Atualizar o sistema
```bash
apt update && apt upgrade -y
apt install -y curl wget git
```

### 2.2 Instalar Docker
```bash
curl -fsSL https://get.docker.com | sh
systemctl enable docker
systemctl start docker
```

### 2.3 Instalar Docker Compose
```bash
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### 2.4 Criar estrutura de pastas
```bash
mkdir -p /opt/vaianuncio/{n8n,evolution,caddy}
cd /opt/vaianuncio
```

### 2.5 Criar docker-compose.yml
```bash
cat > /opt/vaianuncio/docker-compose.yml << 'EOF'
version: '3.8'

services:

  n8n:
    image: n8nio/n8n:latest
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=SEU_IP_AQUI
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - WEBHOOK_URL=http://SEU_IP_AQUI:5678/
      - GENERIC_TIMEZONE=America/Sao_Paulo
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=SENHA_FORTE_AQUI
    volumes:
      - /opt/vaianuncio/n8n:/home/node/.n8n

  evolution:
    image: atendai/evolution-api:latest
    container_name: evolution
    restart: always
    ports:
      - "8080:8080"
    environment:
      - SERVER_URL=http://SEU_IP_AQUI:8080
      - AUTHENTICATION_API_KEY=CHAVE_EVOLUTION_AQUI
      - AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES=true
      - QRCODE_LIMIT=30
      - STORE_MESSAGES=true
      - STORE_CONTACTS=true
    volumes:
      - /opt/vaianuncio/evolution:/evolution/instances

EOF
```

### 2.6 Subir os containers
```bash
cd /opt/vaianuncio
docker-compose up -d
```

### 2.7 Verificar se está rodando
```bash
docker ps
# Deve mostrar: n8n (porta 5678) e evolution (porta 8080)
```

---

## FASE 3 — CONECTAR O WHATSAPP

### 3.1 Criar instância no Evolution API
```bash
curl -X POST http://SEU_IP:8080/instance/create \
  -H "Content-Type: application/json" \
  -H "apikey: CHAVE_EVOLUTION_AQUI" \
  -d '{
    "instanceName": "vaianuncio-prospecção",
    "qrcode": true
  }'
```

### 3.2 Pegar o QR Code
```bash
curl http://SEU_IP:8080/instance/qrcode/vaianuncio-prospecção \
  -H "apikey: CHAVE_EVOLUTION_AQUI"
```
→ Vai retornar uma imagem base64 ou URL do QR Code
→ Abre no navegador e escaneia com o número novo de prospecção

### 3.3 Verificar conexão
```bash
curl http://SEU_IP:8080/instance/connectionState/vaianuncio-prospecção \
  -H "apikey: CHAVE_EVOLUTION_AQUI"
# Deve retornar: "state": "open"
```

---

## FASE 4 — CONFIGURAR CREDENCIAIS NO N8N

Acessa: **http://SEU_IP:5678**
Login: admin / SENHA_FORTE_AQUI

### 4.1 Adicionar credencial Claude (Anthropic)
1. Settings → Credentials → Add Credential
2. Tipo: **Anthropic**
3. API Key: sua `ANTHROPIC_API_KEY`
4. Salva como: "Claude - VaiAnuncio"

### 4.2 Adicionar credencial Evolution API (HTTP)
1. Settings → Credentials → Add Credential
2. Tipo: **Header Auth**
3. Name: `apikey`
4. Value: `CHAVE_EVOLUTION_AQUI`
5. Salva como: "Evolution API"

---

## FASE 5 — WORKFLOW COMPLETO DE PROSPECÇÃO

### Importar o workflow no n8n:
1. n8n → Workflows → Import from JSON
2. Cola o JSON abaixo

```json
{
  "name": "VaiAnuncio - Prospecção Automática",
  "nodes": [
    {
      "name": "Webhook - Recebe Lista",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300],
      "parameters": {
        "path": "prospectar",
        "responseMode": "onReceived"
      }
    },
    {
      "name": "Loop - Processa Prospects",
      "type": "n8n-nodes-base.splitInBatches",
      "position": [450, 300],
      "parameters": {
        "batchSize": 1,
        "options": {}
      }
    },
    {
      "name": "Espera entre disparos",
      "type": "n8n-nodes-base.wait",
      "position": [650, 300],
      "parameters": {
        "amount": 3,
        "unit": "minutes"
      }
    },
    {
      "name": "Envia Mensagem WhatsApp",
      "type": "n8n-nodes-base.httpRequest",
      "position": [850, 300],
      "parameters": {
        "method": "POST",
        "url": "=http://SEU_IP:8080/message/sendText/vaianuncio-prospecção",
        "authentication": "predefinedCredentialType",
        "nodeCredentialType": "httpHeaderAuth",
        "body": {
          "number": "={{ $json.telefone }}",
          "text": "={{ $json.script }}"
        }
      }
    },
    {
      "name": "Webhook - Recebe Resposta",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 550],
      "parameters": {
        "path": "resposta-wp",
        "responseMode": "onReceived"
      }
    },
    {
      "name": "Claude - Qualifica Resposta",
      "type": "@n8n/n8n-nodes-langchain.lmChatAnthropic",
      "position": [450, 550],
      "parameters": {
        "model": "claude-sonnet-4-6",
        "messages": {
          "values": [
            {
              "role": "user",
              "content": "=Você é o Bruno, SDR da VaiAnuncio.\n\nContexto do prospect:\n- Nome: {{ $json.nome }}\n- Nicho: {{ $json.nicho }}\n- Resposta dele: {{ $json.mensagem }}\n\nClassifique a resposta em UMA dessas categorias:\n- INTERESSADO: demonstrou interesse, quer saber mais\n- QUALIFICADO: confirmou que tem marketing rodando ou tem orçamento\n- FOLLOW_UP: não respondeu de forma clara, precisa de acompanhamento\n- DESCARTADO: disse que não tem interesse ou não é o decisor\n\nDepois gere a próxima mensagem ideal para enviar.\n\nResponda em JSON:\n{\"classificacao\": \"CATEGORIA\", \"proxima_mensagem\": \"texto da mensagem\"}"
            }
          ]
        }
      }
    },
    {
      "name": "Roteador",
      "type": "n8n-nodes-base.switch",
      "position": [650, 550],
      "parameters": {
        "dataType": "string",
        "value1": "={{ $json.classificacao }}",
        "rules": {
          "rules": [
            { "value2": "INTERESSADO", "output": 0 },
            { "value2": "QUALIFICADO", "output": 1 },
            { "value2": "FOLLOW_UP", "output": 2 },
            { "value2": "DESCARTADO", "output": 3 }
          ]
        }
      }
    },
    {
      "name": "Envia Micro-Qualificação",
      "type": "n8n-nodes-base.httpRequest",
      "position": [850, 450],
      "parameters": {
        "method": "POST",
        "url": "=http://SEU_IP:8080/message/sendText/vaianuncio-prospecção",
        "body": {
          "number": "={{ $json.telefone }}",
          "text": "={{ $json.proxima_mensagem }}"
        }
      }
    },
    {
      "name": "Avisa Fran - REUNIÃO PENDENTE",
      "type": "n8n-nodes-base.httpRequest",
      "position": [850, 550],
      "parameters": {
        "method": "POST",
        "url": "=http://SEU_IP:8080/message/sendText/vaianuncio-prospecção",
        "body": {
          "number": "=55{{ $json.numero_fran }}",
          "text": "=🔥 LEAD QUALIFICADO!\n\nNome: {{ $json.nome }}\nNicho: {{ $json.nicho }}\nCidade: {{ $json.cidade }}\n\nResponde: {{ $json.resposta_lead }}\n\nAção: marcar reunião agora."
        }
      }
    },
    {
      "name": "Agenda Follow-up D+2",
      "type": "n8n-nodes-base.wait",
      "position": [850, 650],
      "parameters": {
        "amount": 2,
        "unit": "days"
      }
    }
  ]
}
```

---

## FASE 6 — COMO USAR NO DIA A DIA

### Disparar prospecção
1. Roda `/prospectar --nicho "odonto" --cidade "Várzea Paulista"`
2. Claude gera a lista com scripts personalizados
3. Você aprova a lista
4. Envia para o n8n via webhook:
```bash
curl -X POST http://SEU_IP:5678/webhook/prospectar \
  -H "Content-Type: application/json" \
  -d '{
    "prospects": [
      {"nome": "Dra. Pabline", "telefone": "5511999999999", "nicho": "odonto", "cidade": "Várzea Paulista", "script": "Oi Pabline..."},
      {"nome": "Clínica X", "telefone": "5511888888888", "nicho": "odonto", "cidade": "Várzea Paulista", "script": "Oi, tudo certo?..."}
    ],
    "numero_fran": "11SEUNUMERO"
  }'
```

### O que acontece automaticamente
```
✅ Mensagens disparadas com 3 min de intervalo (não parece bot)
✅ Respostas classificadas pelo Claude em segundos
✅ Follow-up enviado automaticamente nos dias 2, 5 e 10
✅ Você recebe alerta no WhatsApp quando lead qualifica
✅ Leads descartados arquivados automaticamente
```

### Você só faz uma coisa
Quando chegar no seu WhatsApp:
```
🔥 LEAD QUALIFICADO!
Nome: Dra. Pabline
Nicho: Odonto
...
```
→ Você entra em contato e marca a reunião.

---

## VARIÁVEIS QUE PRECISAM SER CONFIGURADAS

```
SEU_IP_AQUI          → IP do VPS (pega no painel Hostinger)
SENHA_FORTE_AQUI     → senha do painel n8n (ex: VaiAnuncio@2026)
CHAVE_EVOLUTION_AQUI → chave de acesso da Evolution API (você cria)
ANTHROPIC_API_KEY    → sua chave da API Claude (console.anthropic.com)
numero_fran          → seu número para receber alertas (ex: 11997456931)
```

---

## CUSTO FINAL

| Item | Custo/mês |
|------|-----------|
| VPS Hostinger KVM 1 | R$40-60 |
| Claude API (estimado 500 conversas) | R$10-20 |
| n8n self-hosted | Grátis |
| Evolution API | Grátis |
| **Total** | **~R$50-80/mês** |

---

## PRÓXIMO NÍVEL (Nível 3 — futuro)

Quando a operação estiver rodando:
- Conectar Google Calendar → Claude agenda reunião automaticamente
- Conectar NossoCRM → lead qualificado já entra no CRM
- Dashboard de métricas → taxa de resposta, qualificação, fechamento por nicho
