#!/usr/bin/env python3
"""
produzir-video.py v2.0 — Spike / VaiAnuncio
Transcreve, corta e exporta vídeo para qualquer plataforma com legendas inteligentes.

Fase 1 (transcrição com timestamps por palavra):
  py produzir-video.py "video.mp4" --fase 1

Fase 2 (exportação com legenda correta para cada plataforma + contexto):
  py produzir-video.py "video.mp4" --fase 2 --plataforma instagram-reels --contexto organico --cortes "tudo"
  py produzir-video.py "video.mp4" --fase 2 --plataforma instagram-reels --contexto anuncio --cortes "10-45"
  py produzir-video.py "video.mp4" --fase 2 --plataforma youtube --contexto organico --cortes "0-30,45-57"

Premiere/CapCut EDL + SRT:
  py produzir-video.py "video.mp4" --premiere --cortes "10-45"
  → gera .edl + .srt para importar nos editores
"""

import sys
import os
import json
import subprocess
import argparse
import tempfile
import shutil
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")


# ─── OUTPUT ──────────────────────────────────────────────────────────────────

OUTPUT_DIR = Path(r"C:\Users\FranSa\Videos\SKILL EDITADO\VIDEO EDITADO PELA SKILL")


# ─── PLATAFORMAS (specs de vídeo) ────────────────────────────────────────────

PLATFORMS = {
    "instagram-reels": {
        "width": 1080, "height": 1920, "max_duration": 90,
        "fps": 30, "video_bitrate": "4000k", "audio_bitrate": "128k", "crf": 20,
        "description": "Instagram Reels (9:16 • máx 90s)",
    },
    "instagram-feed": {
        "width": 1080, "height": 1350, "max_duration": 60,
        "fps": 30, "video_bitrate": "3500k", "audio_bitrate": "128k", "crf": 20,
        "description": "Instagram Feed (4:5 • máx 60s)",
    },
    "instagram-square": {
        "width": 1080, "height": 1080, "max_duration": 60,
        "fps": 30, "video_bitrate": "3500k", "audio_bitrate": "128k", "crf": 20,
        "description": "Instagram Feed Quadrado (1:1 • máx 60s)",
    },
    "youtube": {
        "width": 1920, "height": 1080, "max_duration": None,
        "fps": 30, "video_bitrate": "8000k", "audio_bitrate": "192k", "crf": 18,
        "description": "YouTube Horizontal (16:9)",
    },
    "youtube-shorts": {
        "width": 1080, "height": 1920, "max_duration": 60,
        "fps": 30, "video_bitrate": "4000k", "audio_bitrate": "128k", "crf": 20,
        "description": "YouTube Shorts (9:16 • máx 60s)",
    },
    "tiktok": {
        "width": 1080, "height": 1920, "max_duration": 600,
        "fps": 30, "video_bitrate": "4000k", "audio_bitrate": "128k", "crf": 20,
        "description": "TikTok (9:16 • máx 10min)",
    },
    "facebook-reels": {
        "width": 1080, "height": 1920, "max_duration": 90,
        "fps": 30, "video_bitrate": "4000k", "audio_bitrate": "128k", "crf": 20,
        "description": "Facebook Reels (9:16 • máx 90s)",
    },
    "linkedin": {
        "width": 1920, "height": 1080, "max_duration": 600,
        "fps": 30, "video_bitrate": "5000k", "audio_bitrate": "128k", "crf": 18,
        "description": "LinkedIn (16:9 • máx 10min)",
    },
    "twitter": {
        "width": 1280, "height": 720, "max_duration": 140,
        "fps": 30, "video_bitrate": "5000k", "audio_bitrate": "128k", "crf": 20,
        "description": "Twitter/X (16:9 • máx 2m20s)",
    },
}


# ─── PERFIS DE LEGENDA ───────────────────────────────────────────────────────
#
# Chave: (plataforma, contexto)
# margin_v_ratio: distância do fundo como fração da altura total
#   • Valores baseados em safe zones oficiais 2026:
#   • Meta Reels orgânico: bottom 17% (320px em 1920) — acima de likes/comentários
#   • Meta Reels anúncio: bottom 35% (672px em 1920) — acima de botão CTA + label
#   • YouTube Shorts: bottom 35% (672px em 1920) — mesmo safe zone que TikTok
#   • YouTube longo: bottom 7% (75px em 1080) — posição CC padrão
#   • TikTok orgânico: bottom 17% — acima de sidebar de ícones e caption
#   • TikTok anúncio: bottom 35% — acima de botão CTA
#
# font_size: pixels no espaço PlayRes (igual à resolução de saída)
#   • Vertical (1920h): 58px ≈ tamanho confortável p/ celular sem dominar a tela
#   • Horizontal (1080h): 42px ≈ padrão CC
#
# style: "karaoke" (palavra por palavra c/ destaque) | "block" (chunk completo)
# color_active: cor da palavra atual em ASS format (AABBGGRR, sem #)
#   • Amarelo: &H0000FFFF&  (R=FF G=FF B=00)
#   • Branco:  &H00FFFFFF&

SUBTITLE_PROFILES = {

    # ── Instagram Reels ───────────────────────────────────────────────────────
    ("instagram-reels", "organico"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.167,
        "description": "Reels orgânico — karaoke 3 palavras, safe zone embaixo (17%)",
    },
    ("instagram-reels", "anuncio"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.354,
        "description": "Reels anúncio — karaoke, legenda acima do botão CTA (35%)",
    },

    # ── Instagram Feed ────────────────────────────────────────────────────────
    ("instagram-feed", "organico"): {
        "style": "block",
        "font_size": 52,
        "max_words": 4,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.148,
        "description": "Feed orgânico — block embaixo (14%)",
    },
    ("instagram-feed", "anuncio"): {
        "style": "block",
        "font_size": 52,
        "max_words": 4,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.30,
        "description": "Feed anúncio — block acima do CTA (30%)",
    },

    # ── Instagram Quadrado ────────────────────────────────────────────────────
    ("instagram-square", "organico"): {
        "style": "block",
        "font_size": 50,
        "max_words": 4,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.148,
        "description": "Feed quadrado orgânico — block embaixo",
    },
    ("instagram-square", "anuncio"): {
        "style": "block",
        "font_size": 50,
        "max_words": 4,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.30,
        "description": "Feed quadrado anúncio — block centro-baixo",
    },

    # ── YouTube Longo ─────────────────────────────────────────────────────────
    ("youtube", "organico"): {
        "style": "block",
        "font_size": 42,
        "max_words": 7,
        "all_caps": False, "bold": False,
        "color_active":   "&H00FFFFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.07,
        "description": "YouTube orgânico — CC padrão embaixo (7%)",
    },
    ("youtube", "anuncio"): {
        "style": "karaoke",
        "font_size": 50,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.12,
        "description": "YouTube anúncio — karaoke embaixo (12%)",
    },

    # ── YouTube Shorts ────────────────────────────────────────────────────────
    ("youtube-shorts", "organico"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.35,
        "description": "Shorts orgânico — karaoke, safe zone (35%)",
    },
    ("youtube-shorts", "anuncio"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.42,
        "description": "Shorts anúncio — karaoke acima do CTA (42%)",
    },

    # ── TikTok ────────────────────────────────────────────────────────────────
    ("tiktok", "organico"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.167,
        "description": "TikTok orgânico — karaoke embaixo (17%)",
    },
    ("tiktok", "anuncio"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.354,
        "description": "TikTok anúncio — karaoke acima do CTA (35%)",
    },

    # ── Facebook Reels ────────────────────────────────────────────────────────
    ("facebook-reels", "organico"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.167,
        "description": "Facebook Reels orgânico — karaoke embaixo (17%)",
    },
    ("facebook-reels", "anuncio"): {
        "style": "karaoke",
        "font_size": 58,
        "max_words": 3,
        "all_caps": True, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 3, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.354,
        "description": "Facebook Reels anúncio — karaoke acima do CTA (35%)",
    },

    # ── LinkedIn ──────────────────────────────────────────────────────────────
    ("linkedin", "organico"): {
        "style": "block",
        "font_size": 42,
        "max_words": 6,
        "all_caps": False, "bold": False,
        "color_active":   "&H00FFFFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.09,
        "description": "LinkedIn orgânico — block CC embaixo",
    },
    ("linkedin", "anuncio"): {
        "style": "block",
        "font_size": 44,
        "max_words": 5,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.14,
        "description": "LinkedIn anúncio — block embaixo",
    },

    # ── Twitter/X ─────────────────────────────────────────────────────────────
    ("twitter", "organico"): {
        "style": "block",
        "font_size": 38,
        "max_words": 6,
        "all_caps": False, "bold": False,
        "color_active":   "&H00FFFFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.07,
        "description": "Twitter/X orgânico — block embaixo",
    },
    ("twitter", "anuncio"): {
        "style": "block",
        "font_size": 40,
        "max_words": 5,
        "all_caps": False, "bold": True,
        "color_active":   "&H0000FFFF&",
        "color_inactive": "&H00FFFFFF&",
        "outline": 2, "shadow": 1,
        "alignment": 2,
        "margin_v_ratio": 0.10,
        "description": "Twitter/X anúncio — block embaixo",
    },
}

_DEFAULT_PROFILE = SUBTITLE_PROFILES[("instagram-reels", "organico")]


# ─── UTILS ───────────────────────────────────────────────────────────────────

def ffmpeg_path(p: Path) -> str:
    return str(p).replace("\\", "/")


def parse_time(t: str) -> float:
    t = t.strip()
    if ":" in t:
        parts = t.split(":")
        return float(parts[0]) * 60 + float(parts[1])
    return float(t)


def parse_cortes(cortes_str: str, total_duration: float) -> list:
    if cortes_str.strip().lower() == "tudo":
        return [{"start": 0.0, "end": total_duration}]
    segments = []
    for part in cortes_str.split(","):
        part = part.strip()
        if "-" in part:
            s, e = part.split("-", 1)
            segments.append({"start": parse_time(s), "end": parse_time(e)})
    return segments


def get_duration(video_path: Path) -> float:
    r = subprocess.run(
        ["ffprobe", "-v", "quiet", "-print_format", "json", "-show_format", str(video_path)],
        capture_output=True, text=True
    )
    return float(json.loads(r.stdout)["format"]["duration"])


def seconds_to_ass(s: float) -> str:
    h = int(s // 3600)
    m = int((s % 3600) // 60)
    cs = int((s % 1) * 100)
    return f"{h}:{m:02d}:{int(s % 60):02d}.{cs:02d}"


def seconds_to_srt(s: float) -> str:
    h = int(s // 3600)
    m = int((s % 3600) // 60)
    ms = int((s % 1) * 1000)
    return f"{h:02d}:{m:02d}:{int(s % 60):02d},{ms:03d}"


def get_subtitle_profile(platform: str, contexto: str) -> dict:
    profile = SUBTITLE_PROFILES.get((platform, contexto))
    if not profile:
        print(f"   ⚠️  Sem perfil para ({platform}, {contexto}) — usando padrão (instagram-reels organico)")
        return _DEFAULT_PROFILE
    return profile


# ─── FASE 1: TRANSCRIÇÃO ─────────────────────────────────────────────────────

def fase_1_transcrever(video_path: Path):
    print(f"\n{'='*60}")
    print(f"  FASE 1 — TRANSCRIÇÃO")
    print(f"  Vídeo: {video_path.name}")
    print(f"{'='*60}\n")

    tmp_dir = Path(tempfile.mkdtemp(prefix="prodvideo_"))
    wav_path = tmp_dir / "audio.wav"

    print("Extraindo audio...")
    r = subprocess.run(
        ["ffmpeg", "-y", "-i", str(video_path),
         "-vn", "-ac", "1", "-ar", "16000", "-f", "wav", str(wav_path)],
        capture_output=True, text=True
    )
    if r.returncode != 0:
        print(f"ERRO ao extrair audio:\n{r.stderr}")
        shutil.rmtree(tmp_dir, ignore_errors=True)
        sys.exit(1)

    print("Transcrevendo com faster-whisper (modelo: small, PT-BR)...")
    print("   (1-2 minutos para vídeos de até 1 min)\n")

    try:
        from faster_whisper import WhisperModel
    except ImportError:
        print("ERRO: faster-whisper nao encontrado. Execute: py -m pip install faster-whisper")
        sys.exit(1)

    model = WhisperModel("small", device="cpu", compute_type="int8")
    segments_gen, info = model.transcribe(
        str(wav_path), language="pt", beam_size=5, word_timestamps=True
    )

    segments = []
    all_words = []

    print("TRANSCRIPT:")
    print("-" * 60)
    for i, seg in enumerate(segments_gen, 1):
        words_in_seg = []
        for w in (seg.words or []):
            word_entry = {
                "start": round(w.start, 3),
                "end":   round(w.end, 3),
                "word":  w.word.strip()
            }
            words_in_seg.append(word_entry)
            all_words.append(word_entry)

        entry = {
            "index":  i,
            "start":  round(seg.start, 2),
            "end":    round(seg.end, 2),
            "text":   seg.text.strip(),
            "words":  words_in_seg,
        }
        segments.append(entry)
        print(f"[{i:3d}] {seg.start:6.2f}s → {seg.end:6.2f}s  {seg.text.strip()}")

    print("-" * 60)
    print(f"\n{len(segments)} segmentos | {len(all_words)} palavras | {info.duration:.1f}s total")

    transcript_path = video_path.parent / (video_path.stem + "_transcript.json")
    with open(transcript_path, "w", encoding="utf-8") as f:
        json.dump({
            "video":    str(video_path),
            "duration": info.duration,
            "segments": segments,
            "words":    all_words,
        }, f, ensure_ascii=False, indent=2)

    print(f"\nTranscript salvo em:\n   {transcript_path}")
    print(f"\n{'='*60}")
    print("  PROXIMO PASSO:")
    print("  Diga quais trechos manter (segmento ou tempo)")
    print("  Exemplos: 'segmentos 2 ao 8' | '10-45' | 'tudo'")
    print(f"{'='*60}\n")

    shutil.rmtree(tmp_dir, ignore_errors=True)
    return transcript_path


# ─── CHUNKS DE PALAVRAS ──────────────────────────────────────────────────────

def build_chunks(words: list, max_words: int) -> list:
    """Group word list into chunks of max_words words."""
    chunks = []
    for i in range(0, len(words), max_words):
        group = words[i:i + max_words]
        if not group:
            continue
        chunks.append({
            "start": group[0]["start"],
            "end":   group[-1]["end"],
            "words": group,
        })
    return chunks


# ─── GERADOR DE ASS ──────────────────────────────────────────────────────────

def generate_ass(words_timed: list, profile: dict, width: int, height: int, tmp_dir: Path) -> Path:
    """
    Generate ASS subtitle file.
    style='karaoke': shows current word highlighted yellow, others white.
    style='block':   shows full chunk, all same color.
    """
    ass_path = tmp_dir / "legendas.ass"

    font_size = profile["font_size"]
    margin_v  = int(height * profile["margin_v_ratio"])
    bold_flag = -1 if profile["bold"] else 0
    ca = profile["color_active"]
    ci = profile["color_inactive"]
    outline = profile["outline"]
    shadow  = profile["shadow"]
    alignment = profile["alignment"]

    header = f"""[Script Info]
ScriptType: v4.00+
PlayResX: {width}
PlayResY: {height}
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Arial,{font_size},{ci},{ci},&H00000000&,&HA0000000&,{bold_flag},0,0,0,100,100,0,0,1,{outline},{shadow},{alignment},30,30,{margin_v},1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""

    style = profile.get("style", "karaoke")
    max_words = profile.get("max_words", 3)
    all_caps  = profile.get("all_caps", True)

    def fmt_word(w: str) -> str:
        return w.upper() if all_caps else w

    chunks = build_chunks(words_timed, max_words)
    dialogues = []

    if style == "karaoke":
        for chunk in chunks:
            chunk_words = chunk["words"]
            chunk_texts = [fmt_word(w["word"]) for w in chunk_words]

            for active_idx, active_word in enumerate(chunk_words):
                parts = []
                for j, wt in enumerate(chunk_texts):
                    if j == active_idx:
                        parts.append(f"{{\\c{ca}}}{wt}")
                    else:
                        parts.append(f"{{\\c{ci}}}{wt}")
                # reset color at end of line
                text = " ".join(parts) + f"{{\\c{ci}}}"

                dialogues.append((active_word["start"], active_word["end"], text))

    else:  # block
        for chunk in chunks:
            text = " ".join(fmt_word(w["word"]) for w in chunk["words"])
            dialogues.append((chunk["start"], chunk["end"], text))

    lines = [header]
    for start, end, text in dialogues:
        lines.append(
            f"Dialogue: 0,{seconds_to_ass(start)},{seconds_to_ass(end)},Default,,0,0,0,,{text}\n"
        )

    with open(ass_path, "w", encoding="utf-8") as f:
        f.writelines(lines)

    return ass_path


# ─── GERADOR DE SRT (para CapCut / Premiere) ─────────────────────────────────

def generate_srt(words_timed: list, max_words: int, output_path: Path, all_caps: bool = True):
    """
    Generate SRT file with chunk-level timing for import in CapCut or Premiere Pro.
    """
    chunks = build_chunks(words_timed, max_words)
    lines = []
    for i, chunk in enumerate(chunks, 1):
        text = " ".join(w["word"].upper() if all_caps else w["word"] for w in chunk["words"])
        lines.append(str(i))
        lines.append(f"{seconds_to_srt(chunk['start'])} --> {seconds_to_srt(chunk['end'])}")
        lines.append(text)
        lines.append("")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    return output_path


# ─── FASE 2: EXPORTAÇÃO ──────────────────────────────────────────────────────

def fase_2_exportar(video_path: Path, platform_key: str, contexto: str, cortes_str: str, add_subtitles: bool = True):
    if platform_key not in PLATFORMS:
        print(f"ERRO: plataforma '{platform_key}' desconhecida.")
        print(f"   Opcoes: {', '.join(PLATFORMS.keys())}")
        sys.exit(1)

    spec    = PLATFORMS[platform_key]
    profile = get_subtitle_profile(platform_key, contexto)

    total_duration = get_duration(video_path)
    segments = parse_cortes(cortes_str, total_duration)

    if not segments:
        print("ERRO: nenhum trecho valido.")
        sys.exit(1)

    total_selected = sum(s["end"] - s["start"] for s in segments)

    print(f"\n{'='*60}")
    print(f"  FASE 2 — EXPORTACAO")
    print(f"  Plataforma : {spec['description']}")
    print(f"  Contexto   : {contexto}")
    print(f"  Legenda    : {profile['description']}")
    print(f"  Resolucao  : {spec['width']}x{spec['height']}")
    print(f"  Trechos    : {segments}")
    print(f"  Duracao    : {total_selected:.1f}s")
    print(f"{'='*60}\n")

    if spec["max_duration"] and total_selected > spec["max_duration"]:
        print(f"AVISO: duracao ({total_selected:.1f}s) excede limite ({spec['max_duration']}s) — vídeo pode ser rejeitado.\n")

    tmp_dir = Path(tempfile.mkdtemp(prefix="prodvideo_"))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # ── 1. Ajustar timestamps de palavras para os trechos selecionados ────────
    transcript_path = video_path.parent / (video_path.stem + "_transcript.json")
    words_adjusted = []

    if add_subtitles and transcript_path.exists():
        with open(transcript_path, encoding="utf-8") as f:
            data = json.load(f)

        raw_words = data.get("words", [])
        time_offset = 0.0

        for seg_range in segments:
            seg_start = seg_range["start"]
            seg_end   = seg_range["end"]

            for w in raw_words:
                w_start = w["start"]
                w_end   = w["end"]
                if w_start >= seg_start and w_start < seg_end:
                    adj_start = w_start - seg_start + time_offset
                    adj_end   = min(w_end, seg_end) - seg_start + time_offset
                    words_adjusted.append({
                        "start": round(adj_start, 3),
                        "end":   round(adj_end,   3),
                        "word":  w["word"],
                    })

            time_offset += seg_end - seg_start

    # ── 2. Cortar trechos ─────────────────────────────────────────────────────
    print("Cortando trechos...")
    seg_files = []
    for i, seg in enumerate(segments):
        seg_path = tmp_dir / f"seg_{i:03d}.mp4"
        r = subprocess.run([
            "ffmpeg", "-y",
            "-ss", str(seg["start"]),
            "-to", str(seg["end"]),
            "-i", str(video_path),
            "-c:v", "copy", "-c:a", "copy",
            str(seg_path)
        ], capture_output=True, text=True)
        if r.returncode != 0:
            print(f"ERRO corte {i}:\n{r.stderr}")
            shutil.rmtree(tmp_dir, ignore_errors=True)
            sys.exit(1)
        seg_files.append(seg_path)

    # ── 3. Concatenar ─────────────────────────────────────────────────────────
    if len(seg_files) == 1:
        concat_path = seg_files[0]
    else:
        print("Concatenando...")
        list_file = tmp_dir / "concat.txt"
        with open(list_file, "w") as f:
            for sf in seg_files:
                f.write(f"file '{ffmpeg_path(sf)}'\n")
        concat_path = tmp_dir / "concat.mp4"
        r = subprocess.run([
            "ffmpeg", "-y", "-f", "concat", "-safe", "0",
            "-i", str(list_file), "-c", "copy", str(concat_path)
        ], capture_output=True, text=True)
        if r.returncode != 0:
            print(f"ERRO concat:\n{r.stderr}")
            shutil.rmtree(tmp_dir, ignore_errors=True)
            sys.exit(1)

    # ── 4. Escalar e recortar para resolucao da plataforma ────────────────────
    tw, th = spec["width"], spec["height"]
    scale_crop = (
        f"scale={tw}:{th}:force_original_aspect_ratio=increase,"
        f"crop={tw}:{th}"
    )

    # ── 5. Legendas ───────────────────────────────────────────────────────────
    vf_parts = [scale_crop]

    if words_adjusted:
        print("Gerando legendas...")
        ass_path = generate_ass(words_adjusted, profile, tw, th, tmp_dir)
        ass_ffmpeg = ffmpeg_path(ass_path).replace(":", "\\:")
        vf_parts.append(f"subtitles='{ass_ffmpeg}'")

        # Salvar SRT para CapCut / Premiere
        srt_path = OUTPUT_DIR / (video_path.stem + f"_{platform_key}_{contexto}.srt")
        generate_srt(
            words_adjusted,
            max_words=profile.get("max_words", 3),
            output_path=srt_path,
            all_caps=profile.get("all_caps", True)
        )
        print(f"   SRT para CapCut/Premiere: {srt_path.name}")
    elif add_subtitles:
        print("   (sem transcript — rode --fase 1 primeiro para legendas)")

    vf = ",".join(vf_parts)

    # ── 6. Exportar ───────────────────────────────────────────────────────────
    output_name = f"{video_path.stem}_{platform_key}_{contexto}.mp4"
    output_path = OUTPUT_DIR / output_name

    print(f"Exportando ({spec['description']})...")
    r = subprocess.run([
        "ffmpeg", "-y",
        "-i", str(concat_path),
        "-vf", vf,
        "-c:v", "libx264", "-crf", str(spec["crf"]),
        "-b:v", spec["video_bitrate"],
        "-c:a", "aac", "-b:a", spec["audio_bitrate"],
        "-r", str(spec["fps"]),
        "-pix_fmt", "yuv420p",
        "-movflags", "+faststart",
        str(output_path)
    ], capture_output=True, text=True)

    if r.returncode != 0:
        print(f"ERRO exportacao:\n{r.stderr[-3000:]}")
        shutil.rmtree(tmp_dir, ignore_errors=True)
        sys.exit(1)

    size_mb = output_path.stat().st_size / (1024 * 1024)

    print(f"\n{'='*60}")
    print(f"  VIDEO PRONTO!")
    print(f"  Arquivo  : {output_path.name}")
    print(f"  Tamanho  : {size_mb:.1f} MB")
    print(f"  Duracao  : {total_selected:.1f}s")
    print(f"  Pasta    : {OUTPUT_DIR}")
    print(f"{'='*60}\n")

    shutil.rmtree(tmp_dir, ignore_errors=True)
    return output_path


# ─── PREMIERE / CAPCUT: EDL + SRT ────────────────────────────────────────────

def gerar_edl_srt(video_path: Path, cortes_str: str, platform_key: str = "instagram-reels", contexto: str = "organico"):
    total = get_duration(video_path)
    segments = parse_cortes(cortes_str, total)
    profile  = get_subtitle_profile(platform_key, contexto)

    # EDL
    edl_path = video_path.parent / (video_path.stem + "_premiere.edl")
    lines = ["TITLE: Produzir Video - Spike", "FCM: NON-DROP FRAME", ""]
    rec_in = 0.0
    for i, seg in enumerate(segments, 1):
        src_in, src_out = seg["start"], seg["end"]
        rec_out = rec_in + (src_out - src_in)
        def tc(s):
            return f"{int(s//3600):02d}:{int((s%3600)//60):02d}:{int(s%60):02d}:{int((s%1)*30):02d}"
        lines += [
            f"{i:03d}  001      V     C        {tc(src_in)} {tc(src_out)} {tc(rec_in)} {tc(rec_out)}",
            f"* FROM CLIP NAME: {video_path.name}",
            ""
        ]
        rec_in = rec_out
    with open(edl_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    # SRT (se tiver transcript)
    transcript_path = video_path.parent / (video_path.stem + "_transcript.json")
    srt_path = None
    if transcript_path.exists():
        with open(transcript_path, encoding="utf-8") as f:
            data = json.load(f)

        raw_words = data.get("words", [])
        words_adjusted = []
        offset = 0.0
        for seg in segments:
            for w in raw_words:
                if w["start"] >= seg["start"] and w["start"] < seg["end"]:
                    words_adjusted.append({
                        "start": round(w["start"] - seg["start"] + offset, 3),
                        "end":   round(min(w["end"], seg["end"]) - seg["start"] + offset, 3),
                        "word":  w["word"],
                    })
            offset += seg["end"] - seg["start"]

        srt_path = video_path.parent / (video_path.stem + "_premiere.srt")
        generate_srt(
            words_adjusted,
            max_words=profile.get("max_words", 3),
            output_path=srt_path,
            all_caps=profile.get("all_caps", True)
        )

    print(f"\nEDL gerado: {edl_path}")
    if srt_path:
        print(f"SRT gerado: {srt_path}")
        print("\nPara usar no Premiere:")
        print("  1. File > Import > selecione o .edl")
        print("  2. Window > Captions and Graphics > Import Captions > selecione o .srt")
        print("  3. Aplique Essential Graphics template para estilizar")
        print("\nPara usar no CapCut:")
        print("  1. Texto > Auto-Legendas > Importar > selecione o .srt")
        print("  2. Aplique estilo 'Karaoke' ou 'Word Highlight'")


# ─── MAIN ────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Spike — Produzir Video v2.0"
    )
    parser.add_argument("video", help="Caminho do video de entrada")
    parser.add_argument("--fase", choices=["1", "2"], help="1=transcrever | 2=exportar")
    parser.add_argument("--plataforma", default="instagram-reels",
                        help=f"Plataforma: {', '.join(PLATFORMS.keys())}")
    parser.add_argument("--contexto", default="organico",
                        choices=["organico", "anuncio"],
                        help="organico (feed normal) ou anuncio (ads com botao CTA)")
    parser.add_argument("--cortes", default="tudo",
                        help="'tudo', '10-45', ou '0-30,50-57'")
    parser.add_argument("--premiere", action="store_true",
                        help="Gerar EDL + SRT para Premiere/CapCut")
    parser.add_argument("--sem-legenda", action="store_true",
                        help="Exportar sem queimar legendas")

    args = parser.parse_args()

    video_path = Path(args.video)
    if not video_path.exists():
        print(f"ERRO: arquivo nao encontrado: {video_path}")
        sys.exit(1)

    if args.premiere:
        gerar_edl_srt(video_path, args.cortes, args.plataforma, args.contexto)
    elif args.fase == "2":
        fase_2_exportar(
            video_path,
            args.plataforma,
            args.contexto,
            args.cortes,
            add_subtitles=not args.sem_legenda
        )
    else:
        fase_1_transcrever(video_path)


if __name__ == "__main__":
    main()
