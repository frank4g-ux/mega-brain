# SKILL: /produzir-video
## Transcrição, Corte e Exportação de Vídeo com Legendas Inteligentes por Plataforma

> **Auto-Trigger:** /produzir-video, "editar vídeo", "produzir vídeo", "cortar vídeo", "exportar vídeo"
> **Keywords:** vídeo, editar, cortar, transcrição, exportar, instagram, youtube, tiktok, reels, shorts, legenda
> **Versão:** 2.0
> **Prioridade:** ALTA

---

## PROPÓSITO

Pegar qualquer vídeo bruto e entregá-lo pronto para upload — com legenda queimada no estilo certo para cada plataforma e contexto (orgânico vs. anúncio). A skill transcreve o áudio word-by-word, exibe para seleção de trechos, e exporta com:

- Karaoke automático (palavra destaca amarela conforme a pessoa fala)
- Posição de legenda adaptada à UI de cada plataforma
- SRT gerado junto para importar no CapCut ou Premiere Pro

**Output padrão:** `C:\Users\FranSa\Videos\SKILL EDITADO\VIDEO EDITADO PELA SKILL\`

---

## PLATAFORMAS SUPORTADAS

| ID | Resolução | Proporção | Duração Máx |
|----|-----------|-----------|-------------|
| `instagram-reels` | 1080×1920 | 9:16 | 90s |
| `instagram-feed` | 1080×1350 | 4:5 | 60s |
| `instagram-square` | 1080×1080 | 1:1 | 60s |
| `youtube` | 1920×1080 | 16:9 | sem limite |
| `youtube-shorts` | 1080×1920 | 9:16 | 60s |
| `tiktok` | 1080×1920 | 9:16 | 10min |
| `facebook-reels` | 1080×1920 | 9:16 | 90s |
| `linkedin` | 1920×1080 | 16:9 | 10min |
| `twitter` | 1280×720 | 16:9 | 2m20s |

---

## INTELIGÊNCIA DE LEGENDAS (v2.0)

### Contextos disponíveis

```
--contexto organico   → post orgânico no feed (UI padrão)
--contexto anuncio    → anúncio / boost (UI tem botão CTA extra embaixo)
```

### Por que a posição muda entre orgânico e anúncio?

Nos anúncios, a plataforma sobrepõe elementos na parte inferior da tela:
- Botão CTA (ex: "Saiba Mais")
- Label "Patrocinado" / "Publicidade"
- Nome do anunciante

Se a legenda ficar no mesmo lugar do post orgânico, ela fica **coberta** por esses elementos.

### Tabela de posicionamento (safe zones 2026)

| Plataforma | Orgânico | Anúncio |
|------------|----------|---------|
| Instagram Reels | 17% do fundo (acima dos ícones) | 35% do fundo (acima do CTA) |
| TikTok | 17% do fundo | 35% do fundo |
| YouTube Shorts | 35% do fundo (sidebar mais larga) | 42% do fundo |
| YouTube longo | 7% do fundo (CC padrão) | 12% do fundo |
| Facebook Reels | 17% do fundo | 35% do fundo |
| Instagram Feed | 14% do fundo | 30% do fundo |
| LinkedIn | 9% do fundo | 14% do fundo |

### Estilos de legenda por plataforma

| Plataforma / Contexto | Estilo | Palavras/chunk | Caps | Destaque ativo |
|----------------------|--------|----------------|------|----------------|
| Instagram Reels orgânico | **Karaoke** | 3 | SIM | Amarelo |
| Instagram Reels anúncio | **Karaoke** | 3 | SIM | Amarelo |
| YouTube Shorts | **Karaoke** | 3 | SIM | Amarelo |
| TikTok | **Karaoke** | 3 | SIM | Amarelo |
| Facebook Reels | **Karaoke** | 3 | SIM | Amarelo |
| YouTube longo orgânico | Block | 7 | não | — (CC padrão) |
| YouTube longo anúncio | **Karaoke** | 3 | SIM | Amarelo |
| LinkedIn | Block | 6 | não | — |
| Twitter/X | Block | 6 | não | — |
| Instagram Feed | Block | 4 | não | Amarelo (anúncio) |

**Karaoke** = exibe chunk de 3 palavras, palavra atual destaca amarelo, demais branco.
**Block** = exibe chunk completo, cor única (branco).

### Tamanhos de fonte (px na resolução de saída)

| Tipo de conteúdo | Fonte | Motivo |
|-----------------|-------|--------|
| Vertical 9:16 (Reels/TikTok/Shorts) | 58px | Otimizado para tela de celular em movimento |
| Horizontal 16:9 (YouTube/LinkedIn) | 42px | Padrão CC — não compete com conteúdo |
| Feed 4:5 / 1:1 | 50-52px | Meio-termo |

---

## WORKFLOW COMPLETO

### FASE 1 — TRANSCRIÇÃO

```bash
py "F:\FUTURO\mega-brain\.claude\skills\produzir-video\scripts\produzir-video.py" "CAMINHO_DO_VIDEO" --fase 1
```

O script:
1. Extrai áudio
2. Roda faster-whisper (small, PT-BR) com timestamps por **palavra**
3. Exibe transcrição numerada com timestamps
4. Salva `_transcript.json` com dados word-by-word

**Mostrar o transcript completo ao usuário** (com segmentos numerados e tempo).

---

### FASE 2 — SELEÇÃO DE TRECHOS

Após mostrar a transcrição, perguntar:

> "Quais trechos manter? Pode dizer por segmento (ex: 2 ao 8) ou por tempo (ex: 10-45). Ou 'tudo'."

E também:

> "É para post orgânico ou anúncio?"

---

### FASE 3 — EXPORTAÇÃO

```bash
py "F:\FUTURO\mega-brain\.claude\skills\produzir-video\scripts\produzir-video.py" "CAMINHO" --fase 2 --plataforma PLATAFORMA --contexto CONTEXTO --cortes "CORTES"
```

Exemplos:
```bash
# Reels orgânico — vídeo inteiro
py "...produzir-video.py" "video.mp4" --fase 2 --plataforma instagram-reels --contexto organico --cortes "tudo"

# Reels para anúncio — trecho específico
py "...produzir-video.py" "video.mp4" --fase 2 --plataforma instagram-reels --contexto anuncio --cortes "10-45"

# YouTube orgânico — múltiplos trechos
py "...produzir-video.py" "video.mp4" --fase 2 --plataforma youtube --contexto organico --cortes "0-30,50-90"
```

Outputs gerados:
- `nome_plataforma_contexto.mp4` — vídeo final com legenda queimada
- `nome_plataforma_contexto.srt` — legenda para importar no CapCut ou Premiere

---

### OPÇÃO: PREMIERE / CAPCUT — EDL + SRT

Para editar o vídeo manualmente antes de exportar:

```bash
py "...produzir-video.py" "video.mp4" --premiere --cortes "10-45" --plataforma instagram-reels --contexto organico
```

Gera:
- `video_premiere.edl` — lista de cortes para importar no Premiere (File > Import)
- `video_premiere.srt` — legendas para importar (Window > Captions and Graphics)

**CapCut:**
1. Importe o vídeo original
2. Texto → Auto-Legendas → Importar → selecione o `.srt`
3. Aplique estilo "Karaoke" ou "Word Highlight"

**Premiere Pro:**
1. File > Import → selecione o `.edl`
2. Window > Captions and Graphics → Import Captions → selecione o `.srt`
3. Aplique template via Essential Graphics

---

## INFRAESTRUTURA

| Ferramenta | Versão | Como chamar |
|------------|--------|-------------|
| Python | 3.14.3 | `py` (NUNCA `python`) |
| faster-whisper | 1.2.1 | via `py` |
| FFmpeg | 8.0.1 | `ffmpeg` (global) |

> ⚠️ NUNCA use o Python do ComfyUI. Ele não tem faster-whisper.

---

## HISTÓRICO DE TESTES

| Data | Vídeo | Plataforma | Contexto | Resultado |
|------|-------|------------|----------|-----------|
| 2026-05-27 | Depoimento cliente ebook (57s) | instagram-reels | organico | ✅ OK — karaoke 3 palavras, 58px, safe zone 17% |
| 2026-05-27 | Depoimento cliente ebook (57s) | instagram-reels | anuncio | ✅ OK — karaoke, safe zone 35% |
