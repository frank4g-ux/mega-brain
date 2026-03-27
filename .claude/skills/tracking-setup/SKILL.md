# SKILL: /tracking-setup
## Setup Completo de Tracking & SEO — VaiAnuncio + Clientes

> **Auto-Trigger:** /tracking-setup, "configurar tracking", "instalar pixel", "setup analytics", "rastreamento", "configurar conversão", "UTM", "instalar tag"
> **Agente responsável:** Felipe (Especialista Tracking & SEO)
> **Aplica para:** VaiAnuncio (agência) + todos os clientes onboarded
> **Pré-requisito:** Acesso ao GTM + acesso às contas de mídia (Google, Meta, TikTok, LinkedIn)

---

## O QUE ESSA SKILL FAZ

Configura do zero (ou audita) todo o ecossistema de tracking de um site/LP:

1. GTM — hub central de todas as tags
2. GA4 — analytics completo com eventos de conversão
3. Google Ads — conversão importada do GA4
4. Meta Pixel + CAPI — rastreamento client-side + server-side
5. TikTok Pixel — rastreamento para campanhas TikTok
6. LinkedIn Insight Tag — rastreamento B2B
7. Microsoft Clarity — comportamento do usuário (heatmap + gravação)
8. UTM Strategy — nomenclatura padronizada para todos os canais
9. SEO Técnico — GSC + sitemap + Core Web Vitals

---

## COMO INVOCAR

```
/tracking-setup --modo novo --cliente "VaiAnuncio" --url "vaianuncioai.com"
/tracking-setup --modo novo --cliente "Clínica X" --url "clinicax.com.br" --nicho "odonto"
/tracking-setup --modo auditoria --cliente "nome" --url "site"
/tracking-setup --modulo gtm
/tracking-setup --modulo meta
/tracking-setup --modulo seo
```

**Parâmetros:**
- `--modo novo` → setup do zero
- `--modo auditoria` → verifica o que existe e o que está quebrado
- `--cliente` → nome do cliente (VaiAnuncio para uso próprio)
- `--url` → URL do site/LP
- `--nicho` → nicho do cliente (ajusta eventos por nicho)
- `--modulo` → roda só um módulo específico

---

## MÓDULO 1 — GTM (HUB CENTRAL)

### Para VaiAnuncio
Container já existe: **GTM-T29WB9RX**
Instalado na LP. Verificar se está em TODAS as páginas.

### Para cliente novo
1. Acessa tagmanager.google.com
2. Cria nova conta → nome: "[Cliente] — VaiAnuncio"
3. Cria container → nome: "[domínio do cliente]" → Web
4. Copia o snippet de instalação (parte no `<head>` + parte no `<body>`)
5. Instala no site do cliente (WordPress: plugin GTM4WP / HTML direto)

### Nomenclatura padrão de tags

```
Formato: [Tipo] — [Plataforma] — [Evento]

Exemplos:
GA4 — Config — All Pages
GA4 — Event — Lead WhatsApp
Meta Pixel — PageView
Meta Pixel — Event — Lead
Google Ads — Conversion — Lead
TikTok Pixel — PageView
TikTok Pixel — Event — Contact
LinkedIn — Insight Tag
Clarity — Config
```

### Verificação obrigatória antes de publicar
- [ ] Modo debug ativado
- [ ] Todos os eventos disparando nas páginas corretas
- [ ] Nenhuma tag duplicada
- [ ] Preview testado em mobile + desktop

---

## MÓDULO 2 — GA4

### Setup novo
1. Acessa analytics.google.com
2. Cria propriedade → nome: "[Cliente] — VaiAnuncio"
3. Fuso horário: Brasília (UTC-3)
4. Moeda: BRL
5. Copia o Measurement ID (G-XXXXXXXXXX)

### Tags no GTM

**Tag 1 — GA4 Configuration (obrigatória)**
```
Tipo: Google Analytics: GA4 Configuration
Measurement ID: G-XXXXXXXXXX
Trigger: All Pages
```

**Tag 2 — GA4 Event — Lead WhatsApp**
```
Tipo: Google Analytics: GA4 Event
Event Name: generate_lead
Parâmetros:
  lead_source: {{Page URL}}
  lead_type: whatsapp
Trigger: Clique no botão WhatsApp (CTA principal)
```

**Tag 3 — GA4 Event — Lead Formulário** (se tiver formulário)
```
Event Name: generate_lead
Parâmetros:
  lead_type: form
Trigger: Form Submission Success
```

### Conversões no GA4
1. GA4 → Admin → Events
2. Marcar como conversão: `generate_lead`
3. Verificar após 24h se está registrando

### Vinculação GA4 × Google Ads
1. GA4 → Admin → Google Ads Links
2. Conecta a conta Google Ads do cliente
3. Ativa importação de conversões no Google Ads

---

## MÓDULO 3 — GOOGLE ADS CONVERSION TRACKING

### Método recomendado: Importar do GA4
1. Google Ads → Ferramentas → Conversões
2. Nova conversão → Importar → Google Analytics 4
3. Seleciona o evento `generate_lead`
4. Categoria: Lead
5. Valor: usar valor do lead por nicho (ver tabela abaixo)

### Valores de conversão por nicho (referência)
| Nicho | Valor estimado por lead |
|-------|------------------------|
| Clínica Odontológica | R$ 80 |
| Clínica de Estética | R$ 60 |
| Psicólogo | R$ 50 |
| Petshop | R$ 30 |
| Delivery | R$ 15 |
| Prestador de serviço local | R$ 40 |

### Tag direta (alternativa ao GA4)
```
Tipo: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXXX
Conversion Label: [gerado pelo Google Ads]
Trigger: Clique no CTA WhatsApp
```

---

## MÓDULO 4 — META PIXEL + CAPI

### 4.1 Criar pixel
1. Meta Business Manager → Events Manager
2. Conectar fontes de dados → Web → Pixel Meta
3. Nome: "[Cliente] — VaiAnuncio"
4. URL: [domínio do cliente]

### 4.2 Tags no GTM

**Tag 1 — Meta Pixel — PageView**
```
Tipo: HTML personalizado
Código:
<!-- Meta Pixel Base Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
Trigger: All Pages
```

**Tag 2 — Meta Pixel — Lead**
```
Tipo: HTML personalizado
Código:
<script>fbq('track', 'Lead');</script>
Trigger: Clique no CTA WhatsApp
```

**Tag 3 — Meta Pixel — Contact** (para clique em telefone)
```
<script>fbq('track', 'Contact');</script>
Trigger: Clique em número de telefone
```

### 4.3 CAPI — Conversions API (obrigatório em 2026)

> O iOS 14+ e bloqueadores de anúncios bloqueiam o pixel client-side.
> CAPI envia eventos direto do servidor — recupera 20-40% de conversões perdidas.

**Opção mais simples — via Meta nativo:**
1. Events Manager → Configurações → Conversions API
2. Ativa "Configuração Sem Código" (se o site for WordPress/Shopify)
3. Conecta via parceiro nativo

**Para sites customizados:**
Requer endpoint server-side — configurar via n8n no VPS (mesmo servidor da prospecção).

### 4.4 Verificar EMQ Score
1. Events Manager → Qualidade dos eventos
2. Meta quanto de correspondência de eventos (EMQ)
3. Target: acima de 6.0
4. Abaixo de 6: adicionar parâmetros de cliente (email hash, telefone hash)

---

## MÓDULO 5 — TIKTOK PIXEL

### 5.1 Criar pixel
1. TikTok Ads Manager → Ativos → Eventos → Web Events
2. Criar pixel → nome: "[Cliente] — VaiAnuncio"
3. Método: GTM (mais fácil)

### 5.2 Instalar via GTM

**Tag 1 — TikTok Pixel — Base Code**
```
Tipo: HTML personalizado
Código: [gerado pelo TikTok Ads Manager]
Trigger: All Pages
```

**Tag 2 — TikTok Pixel — Contact (Lead)**
```
Tipo: HTML personalizado
<script>
ttq.track('Contact', {
  'content_type': 'lead',
  'content_name': '{{Page Title}}'
});
</script>
Trigger: Clique no CTA WhatsApp
```

### 5.3 Verificar no TikTok Pixel Helper
Extensão Chrome — confirma eventos disparando corretamente.

---

## MÓDULO 6 — LINKEDIN INSIGHT TAG

> Relevante para clientes B2B e para rastrear profissionais que visitam a LP da VaiAnuncio.

### 6.1 Obter tag
1. LinkedIn Campaign Manager → Ativos → Insight Tag
2. Copia o Partner ID

### 6.2 Instalar via GTM
```
Tipo: HTML personalizado
Código:
<script type="text/javascript">
_linkedin_partner_id = "SEU_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
Trigger: All Pages
```

### 6.3 Conversão LinkedIn
1. Campaign Manager → Conversões → Criar conversão
2. Tipo: Lead
3. Conecta ao Insight Tag
4. Configura trigger no GTM para o CTA

---

## MÓDULO 7 — MICROSOFT CLARITY (COMPORTAMENTO)

> Gratuito. Grava sessões e gera heatmaps. Identifica onde o usuário desiste na LP.

### 7.1 Criar projeto
1. clarity.microsoft.com → Novo projeto
2. Nome: "[Cliente] — VaiAnuncio"
3. URL: [domínio]
4. Copia o Clarity ID

### 7.2 Instalar via GTM
```
Tipo: HTML personalizado
Código:
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "SEU_CLARITY_ID");
</script>
Trigger: All Pages
```

**Para que serve na prática:**
- Ver onde os usuários clicam e o que ignoram
- Identificar se o CTA está em posição ruim
- Ver onde o usuário desiste no formulário
- Embasar decisões de otimização de LP com dados reais

---

## MÓDULO 8 — ESTRATÉGIA UTM

> UTM sem padrão = relatórios ilegíveis. Com padrão = sabe exatamente de onde veio cada lead.

### Nomenclatura padrão VaiAnuncio

```
utm_source    → plataforma: google / meta / tiktok / linkedin / whatsapp / email / organico
utm_medium    → tipo: paid / cpc / social / organic / referral / direct
utm_campaign  → nome da campanha: [nicho]-[objetivo]-[data]
utm_content   → criativo/variação: [descricao-criativo]
utm_term      → keyword (só Google): [palavra-chave]
```

### Exemplos prontos

**Google Ads — Clínica Odonto:**
```
?utm_source=google&utm_medium=cpc&utm_campaign=odonto-leads-mar26&utm_term=dentista+curitiba
```

**Meta Ads — Estética:**
```
?utm_source=meta&utm_medium=paid&utm_campaign=estetica-leads-mar26&utm_content=video-antes-depois
```

**TikTok Ads:**
```
?utm_source=tiktok&utm_medium=paid&utm_campaign=odonto-leads-mar26&utm_content=hook-pergunta
```

**WhatsApp orgânico (link na bio):**
```
?utm_source=instagram&utm_medium=organic&utm_campaign=bio-link
```

**Email:**
```
?utm_source=email&utm_medium=email&utm_campaign=nurture-leads-mar26
```

### Gerador de UTM
Usa: **ga-dev-tools.web.app/campaign-url-builder**
Ou pede para o Felipe gerar o link completo com UTM.

---

## MÓDULO 9 — SEO TÉCNICO BÁSICO

### 9.1 Google Search Console
1. search.google.com/search-console
2. Adicionar propriedade → URL prefix → [domínio]
3. Verificar propriedade via GTM (método mais fácil)
4. Enviar sitemap: [domínio]/sitemap.xml

### 9.2 Sitemap
- WordPress: plugin Yoast ou Rank Math gera automaticamente
- HTML estático: criar sitemap.xml manualmente ou via xml-sitemaps.com

### 9.3 Verificações técnicas essenciais
```
[ ] Site carrega em menos de 3 segundos (testar: pagespeed.web.dev)
[ ] LCP < 2.5s (maior elemento visível carregando rápido)
[ ] CLS < 0.1 (sem elementos pulando na tela)
[ ] Site tem HTTPS (cadeado verde)
[ ] Versão mobile funcionando
[ ] robots.txt não bloqueando páginas importantes
[ ] Meta title e description únicos em cada página
[ ] Imagens com alt text
```

### 9.4 SEO Local (para clientes com negócio físico)
```
[ ] Google Business Profile criado e verificado
[ ] NAP consistente (Nome, Endereço, Telefone — igual em todo lugar)
[ ] Categoria principal correta no Google Business
[ ] Fotos de qualidade no perfil (mínimo 10)
[ ] Responder avaliações (aumenta relevância local)
[ ] Citar cidade + bairro na LP ("[Serviço] em [Cidade]")
```

---

## CHECKLIST COMPLETO DE ENTREGA

### Para cada cliente novo (ou VaiAnuncio):

**GTM**
- [ ] Container criado/verificado
- [ ] Instalado em todas as páginas
- [ ] Nomenclatura padrão aplicada

**GA4**
- [ ] Propriedade criada
- [ ] Measurement ID no GTM
- [ ] Evento `generate_lead` configurado e marcado como conversão
- [ ] Vinculado ao Google Ads

**Google Ads**
- [ ] Conversão importada do GA4
- [ ] Testada com clique real (aparece "1 conversão recente")

**Meta Pixel**
- [ ] Pixel criado no Events Manager
- [ ] PageView disparando em todas as páginas
- [ ] Evento Lead disparando no CTA
- [ ] EMQ Score acima de 6
- [ ] CAPI configurado (quando possível)

**TikTok Pixel**
- [ ] Pixel criado
- [ ] PageView + Contact configurados
- [ ] Verificado no Pixel Helper

**LinkedIn**
- [ ] Insight Tag instalado
- [ ] Conversão configurada

**Clarity**
- [ ] Projeto criado
- [ ] Tag instalada
- [ ] Gravações aparecendo no painel

**UTM**
- [ ] Nomenclatura padrão documentada para o cliente
- [ ] Todos os links de campanha com UTM correto

**SEO**
- [ ] GSC conectado
- [ ] Sitemap enviado
- [ ] PageSpeed acima de 70 mobile
- [ ] Google Business Profile (se negócio local)

---

## AUDITORIA — QUANDO USAR

Quando um cliente já tem alguma coisa configurada, rodar auditoria antes de mexer em nada:

```
/tracking-setup --modo auditoria --cliente "nome" --url "site"
```

Felipe verifica:
1. GTM está instalado? Em todas as páginas?
2. Eventos estão disparando corretamente?
3. Há duplicações de pixels?
4. UTMs estão sendo usados?
5. GA4 está recebendo dados?
6. Conversões estão chegando nas plataformas?

Entrega relatório: **"O que está ok / O que está quebrado / O que está faltando"**

---

## INTEGRAÇÃO COM OUTRAS SKILLS

| Situação | Skill |
|----------|-------|
| Cliente novo assinando | `/onboarding-cliente` → inclui `/tracking-setup` |
| Antes de subir campanha Google | Rodrigo chama Felipe para validar conversão |
| Antes de subir campanha Meta | Kauan chama Felipe para validar EMQ do pixel |
| LP nova criada | `/web-designer` → Felipe instala tracking |
| Relatório de performance | Felipe fornece dados de qualidade para Rodrigo + Kauan |
