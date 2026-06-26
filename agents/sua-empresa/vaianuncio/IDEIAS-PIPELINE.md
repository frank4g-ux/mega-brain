# IDEIAS PIPELINE — VaiAnuncio
> Banco de ideias estratégicas para executar. Cada ideia tem container próprio na memória do Spike.
> Atualizado: 2026-06-25

---

## IDEIA A — Sistema de Vídeo Automatizado
**Status:** Planejado | Container: `project_video_automation.md`

Ambiente local onde Frank grava e o vídeo sai pronto, editado, legendado e publicado automaticamente.

**Stack:**
- Gravação: OBS Studio + obs-cli
- Transcrição: faster-whisper (turbo, PT-BR)
- Corte: auto-editor + script-matcher custom (diferencial — corta o que saiu do roteiro)
- Legenda: whisper_autosrt + FFmpeg burn
- Filtro de cor: LUT + FFmpeg
- Clipes virais: OpenShorts (open source, face tracking YOLOv8)
- Auto-post: YouTube Data API v3 + instagrapi (Instagram)
- Notificação: WhatsApp avisa Frank quando publicado

**Tempo gravar → publicar:** menos de 5 minutos sem tocar em nada

**Referência chave:** OpenMontage (lançado 22/jun/2026) — primeiro sistema agêntico open source de produção de vídeo. Integra com Claude Code.

**Plano de build:**
- Semana 1: OBS + faster-whisper + pipeline básico
- Semana 2: auto-editor + script-matcher + legenda
- Semana 3: OpenShorts + poster.py + WhatsApp

---

## IDEIA B — Painel IA: Infraestrutura Empacotada para Venda
**Status:** Planejado | Container: `project_painel_ia.md`

Produto digital: painel desktop (Electron) que qualquer pessoa instala e configura sua própria IA de negócios, sem saber programar.

**O produto:**
1. Painel com botões de instalação passo a passo (MegaBrain + AiOx + configs)
2. Vídeo tutorial ensinando a criar conta Claude e conectar
3. Skill de onboarding: IA pergunta nome, negócio do usuário → gera COMPANY-PROFILE.md dele
4. Lock de licença por hardware fingerprint (não por IP)

**Diferencial de mercado:** nenhuma plataforma faz onboarding que configura a IA para o negócio específico do usuário.

**Plataforma de venda:** Kirvano (PIX cai 90% no D0 — mesmo dia)
**Plataforma escala:** Doppus (taxa zero por venda, paga mensalidade, dinheiro direto via BTG)

**Custo para lançar:** ~R$50 (só domínio — resto já existe)
**Preço de lançamento:** R$197
**Margem por venda:** 91% (R$180,25 líquido após Kirvano)

**Integrações necessárias:**
- Webhook Kirvano → Node.js → gera licença no Supabase → envia WhatsApp + email com download
- Skill `onboarding-ia` no MegaBrain (construir primeiro — é o coração do produto)
- Skill `product-launch` no MegaBrain (guia criação de novos produtos)

**Projeção conservadora (20 vendas/mês):** ~R$3.600 líquido/mês
**Projeção crescimento (50 vendas/mês a R$297):** ~R$13.600 líquido/mês

---

## IDEIA C — Negócios Locais: Estrutura de IA para Clientes
**Status:** Em execução — novo cliente entrando 2026-06-26
**Ver:** briefing de amanhã com Frank

Estrutura de IA + Meta Ads aplicada a negócios locais.
Kauan = gestor de tráfego Meta Ads do cliente.
Frank enviará página e dados do cliente para personalizar briefing.

---

## IDEIAS ANTERIORES (já registradas no banco de memória)

- **Ideia 1 — Argumento GPT Maker vs infra própria:** usar custo GPT Maker como argumento de fechamento do pacote Máquina
- **Ideia 2 — Evolution API:** migrar whatsapp-web.js para Evolution API ao escalar (fechar Palhares = gatilho)
- **Ideia 3 — Standard descontinuado:** Evolution API como base interna para todos os clientes
