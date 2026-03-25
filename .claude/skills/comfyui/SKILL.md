# COMFYUI SKILL
## Geração automática de imagens IA para carrosséis

> **Invocada por:** skill `carrossel` automaticamente na Fase 3
> **Não invocar diretamente** — é uma skill de suporte

---

## CONFIGURAÇÃO

```
Instalação:   C:\Users\FranSa\Downloads\comfyui\ComfyUI_windows_portable
Iniciar:      run_nvidia_gpu.bat
API:          http://127.0.0.1:8188
Modelos:      realisticVisionV60B1_v51HyperVAE.safetensors (padrão para carrossel)
              dreamshaper_8.safetensors (fallback)
Saída:        C:\Users\FranSa\Downloads\comfyui\ComfyUI_windows_portable\ComfyUI\output\
```

---

## EXECUÇÃO

```bash
node "f:/FUTURO/mega-brain/.claude/skills/comfyui/scripts/gerar-imagens.js" \
  --tema "TEMA" \
  --mood "MOOD" \
  --prompts '{"capa":"...","dark":"...","cta":"..."}'
```

Retorna JSON com os caminhos das 3 imagens geradas:
```json
{
  "capa": "C:\\...\\output\\carrossel_capa_xxx.png",
  "dark": "C:\\...\\output\\carrossel_dark_xxx.png",
  "cta":  "C:\\...\\output\\carrossel_cta_xxx.png"
}
```

---

## GERAÇÃO DE PROMPTS

Baseado no tema e copy, gerar 3 prompts diferentes:

### CAPA — Imagem de impacto (para o hook)
```
Estilo: Editorial fashion photography, cinematic
Elementos: Pessoa (adulto, expressão pensativa/intensa), ambiente relacionado ao tema
Lighting: Dramatic side lighting, moody
Resolução: 768x960 (4:5)
```

### DARK SLIDES — Imagem cinematográfica de suporte
```
Estilo: Cinematic still, film grain, muted tones
Elementos: Ambiente/cenário relacionado ao tema, sem pessoa necessariamente
Lighting: Low key, chiaroscuro
Resolução: 768x960 (4:5)
```

### CTA FINAL — Imagem dramática de impacto máximo
```
Estilo: Dramatic editorial, high contrast
Elementos: Pessoa com expressão de determinação/confiança
Lighting: Strong backlight ou rim light, dark background
Resolução: 768x960 (4:5)
```

---

## PROMPT NEGATIVO PADRÃO (sempre usar)

```
(worst quality, low quality:1.4), (bad anatomy), text, watermark, logo,
signature, blurry, deformed, ugly, out of frame, cropped,
extra limbs, bad proportions, jpeg artifacts
```

---

## INICIAR COMFYUI AUTOMATICAMENTE

Se offline, o script inicia o ComfyUI antes de gerar:
```
C:\Users\FranSa\Downloads\comfyui\ComfyUI_windows_portable\run_nvidia_gpu.bat
```
Aguarda até 60 segundos pela API ficar disponível.
