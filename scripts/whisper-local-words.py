#!/usr/bin/env python3
"""
Transcribe audio → JSON { "words", "segments" } on stdout.
Uses faster-whisper. Requires: pip install -r scripts/requirements-listening-whisper.txt
"""
from __future__ import annotations

import json
import sys


def transcribe_faster_whisper(audio_path: str, model_size: str) -> dict:
    from faster_whisper import WhisperModel

    model = WhisperModel(model_size, device="cpu", compute_type="int8")
    segments_iter, _info = model.transcribe(
        audio_path,
        language="en",
        word_timestamps=True,
        vad_filter=True,
    )

    words: list[dict[str, float | str]] = []
    segments: list[dict[str, float | str]] = []

    for segment in segments_iter:
        text = (segment.text or "").strip()
        if text:
            segments.append(
                {
                    "text": text,
                    "start": float(segment.start),
                    "end": float(segment.end),
                }
            )
        if segment.words:
            for w in segment.words:
                token = (w.word or "").strip()
                if token:
                    words.append({"word": token, "start": float(w.start), "end": float(w.end)})

    return {"words": words, "segments": segments}


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/whisper-local-words.py <audio.mp3> [model_size]", file=sys.stderr)
        sys.exit(2)

    audio_path = sys.argv[1]
    model_size = sys.argv[2] if len(sys.argv) > 2 else "base"

    try:
        payload = transcribe_faster_whisper(audio_path, model_size)
    except ImportError as e:
        print(
            "Thiếu faster-whisper. Cài:\n"
            "  python3 -m venv .venv-listening && source .venv-listening/bin/activate\n"
            "  pip install -r scripts/requirements-listening-whisper.txt",
            file=sys.stderr,
        )
        raise SystemExit(1) from e

    if not payload["words"] and not payload["segments"]:
        print("Whisper không trả về nội dung.", file=sys.stderr)
        sys.exit(1)

    json.dump(payload, sys.stdout, ensure_ascii=False)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
