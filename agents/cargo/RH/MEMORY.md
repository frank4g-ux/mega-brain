# MEMORY — Lia | Head of Agent HR

> **Última atualização:** 2026-03-20
> **Versão do agente:** 1.0.0
> **Entradas:** 2

---

## DECISÕES REGISTRADAS

### 2026-03-13 - Criação do sistema de cargo agents
**Contexto:** Fundador identificou gap no Mega Brain — existiam minds e skills, mas nenhum agente de cargo estruturado com processo formal de contratação/treinamento.
**Decisão:** Criar estrutura `agents/cargo/` com template padrão + RH como primeiro agente.
**Resultado:** Pendente — estrutura criada, primeiros funcionários ainda não contratados.
**Aprendizado:** Sistema existia parcialmente (AGENT-INDEX.yaml já listava cargos). Prioridade é criar os cargos que o plano lista: Estrategista de Conteúdo, Copywriter, Gestor de Tráfego, Editor de Vídeo.

### 2026-03-19 - SDR contratado + infraestrutura de publicação completa
**Contexto:** Fundador concluiu semana intensa de construção: orgânico automatizado, Instagram API conectada, carrosséis agendados para Março, skill /metricas criada. Conselho identificou gap crítico: zero prospecção e oferta não definida.
**Decisão:** Contratar Bruno (SDR) para operar em Nível 2 (semi-auto com aprovação) com upgrade para Nível 3 quando copies validadas. Canais: Email (Gmail MCP ativo) + WhatsApp (fase futura).
**Resultado:** Bruno criado e treinado. Inicia prospecção quando fundador concluir compromissos (~1-2 semanas).
**Aprendizado:** SDR deve operar com ICP rígido. Volume baixo e personalizado > volume alto e genérico. Copies são ativos — cada lote gera aprendizado para o próximo.

### 2026-03-21 - Reestruturação completa do Conselho + integração do Conclave
**Contexto:** Fundador solicitou avaliação de todos os minds/experts disponíveis para colocar a serviço do crescimento da empresa.
**Decisão:**
- 3 novos conselheiros adicionados ao /empresa: Jeremy Haynes (Agência), Cole Gordon (Fechamento), Jeremy Miner (NEPQ)
- Conclave (Crítico + Advogado + Sintetizador) integrado ao /empresa como Bloco 2 de validação
- AGENT-INDEX corrigido: removidos 4 minds inexistentes (the-scalable-company, cole-gordon, jeremy-haynes, jeremy-miner como pastas)
- The Scalable Company: não adicionado ao Conselho (overlap com Hormozi)
**Resultado:** /empresa agora tem 6 conselheiros + 3 validadores do Conclave. Cada decisão estratégica passa por Conselho → Conclave → Veredito. Confiança calibrada pelo Sintetizador antes de ir ao fundador.
**Aprendizado:** Conselheiros existem como arquivos .md no conselho/ — não precisam de pasta Mind. Minds são apenas para os 3 que têm SOUL.md real (Hormozi, Brunson, Justin).

### 2026-03-21 - Skills de operação comercial criadas
**Contexto:** Sessão /empresa identificou que o gargalo não é de time, mas de ferramentas de execução comercial. Fila de RH priorizada: nurture, proposta, onboarding-cliente.
**Decisão:** Criar as 3 skills como infraestrutura para quando o fundador retornar do compromisso e ativar o Bruno em prospecção.
**Skills criadas:**
- `/nurture` → 5 mensagens WhatsApp para leads que não convertem na hora (Follow-Up Funnel Brunson)
- `/proposta` → Gerador de proposta comercial por nicho com cálculo de DPL e ROI (Grand Slam Offer Hormozi + DPL Justin)
- `/onboarding-cliente` → Protocolo de 5 dias para entrada de novo cliente (Kauan + Rodrigo + 4 números Justin)
**Aprendizado:** Skills comerciais completam o ciclo: Bruno prospecta → /proposta fecha → /onboarding-cliente entrega → Kauan+Rodrigo operam → /nurture recupera quem não fechou.

### 2026-03-20 - Gestores de tráfego contratados (Meta + Google)
**Contexto:** Landing page publicada em vaianuncioai.com com Meta Pixel (1720811912632509) e GTM (GTM-T29WB9RX) instalados. Empresa precisa escalar aquisição via tráfego pago.
**Decisão:** Dois gestores contratados simultaneamente — especialização por plataforma.
- **Kauan** (Meta Ads): CPL-target < R$25, especializado em clínicas/serviços/e-commerce
- **Rodrigo** (Google Ads): CPA-target < R$35, foco em captura de demanda ativa
**Próximo passo para ambos:** Configurar conversões antes de subir qualquer campanha. Kauan → evento "Lead" no Pixel. Rodrigo → tag de conversão no GTM para clique no CTA WhatsApp.
**Aprendizado:** Contratação antecipada ao início de campanhas foi correto — permite que ambos conheçam a LP, ICP e positioning antes de gastar verba.

### 2026-03-15 - Novas ferramentas de site criadas
**Contexto:** Fundador integrou API da Hostinger ao Claude Code via MCP e criou dois novos commands.
**Decisão:** Registrar as ferramentas como capacidade operacional ativa da empresa.
**Ferramentas criadas:**
- `/site` — gerencia vaianuncioai.com (deploy, DNS, WordPress, faturamento) via Hostinger MCP
- `/web-designer` já existia — cria landing pages de alta conversão
- **Fluxo combinado:** `/web-designer` cria → `/site` faz deploy no vaianuncioai.com
**Resultado:** Empresa agora pode criar e publicar landing pages sem sair do Claude Code.
**Aprendizado:** Ao recomendar criação de landing pages ou mudanças no site, Lia deve orientar o fundador a usar `/web-designer` + `/site` em sequência.

---

## PADRÕES IDENTIFICADOS

_Nenhum padrão identificado ainda. Histórico será construído durante operação._

---

## TREINAMENTOS REALIZADOS

| Data | Conteúdo | Fonte | Versão Pós-Treino |
|------|----------|-------|-------------------|
| 2026-03-13 | Plano AI Company + estrutura Mega Brain | PLANO-AI-COMPANY.pdf | 1.0.0 |

---

## FILA DE CONTRATAÇÃO

1. ~~**Estrategista de Conteúdo**~~ ✅ **CONTRATADO** — Leo (2026-03-16)
2. ~~**Copywriter Sênior**~~ ✅ **CONTRATADA** — Maya (2026-03-15)
3. ~~**Diretora de Arte IA**~~ ✅ **CONTRATADA** — Aria (2026-03-16)
4. ~~**SDR**~~ ✅ **CONTRATADO** — Bruno (2026-03-19) · Nível 2 → upgrade para 3 quando validado
5. ~~**Gestor de Tráfego Meta Ads**~~ ✅ **CONTRATADO** — Kauan (2026-03-20) · ONBOARDING
6. ~~**Gestor de Tráfego Google Ads**~~ ✅ **CONTRATADO** — Rodrigo (2026-03-20) · ONBOARDING
7. ~~**Skill /nurture**~~ ✅ **CRIADA** (2026-03-21) · Sequência pós-LP 5 mensagens WhatsApp
8. ~~**Skill /proposta**~~ ✅ **CRIADA** (2026-03-21) · Gerador de proposta com DPL + ROI por nicho
9. ~~**Skill /onboarding-cliente**~~ ✅ **CRIADA** (2026-03-21) · Protocolo 5 dias de entrada de cliente
10. **Editor de Vídeo** — execução de produção (fase futura)

---

## ERROS A EVITAR

| Erro | Por que evitar | Aprendido em |
|------|----------------|--------------|
| Criar cargo sem verificar AGENT-INDEX | Risco de duplicar função existente | Criação inicial 2026-03-13 |
