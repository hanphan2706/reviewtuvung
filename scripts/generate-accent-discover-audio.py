#!/usr/bin/env python3
"""Generate UK/US/AU passage + word-pair audio for accent discover via edge-tts."""

from __future__ import annotations

import asyncio
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "listening-assets" / "accent-discover"

VOICES = {
    "british": "en-GB-SoniaNeural",
    "american": "en-US-JennyNeural",
    "australian": "en-AU-NatashaNeural",
}

PASSAGES = {
    "north-wind": (
        "The North Wind and the Sun were disputing which was the stronger, when a traveler came along "
        "wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveler "
        "take his cloak off should be considered stronger than the other. Then the North Wind blew as "
        "hard as he could, but the more he blew the more closely did the traveler fold his cloak around "
        "him; and at last the North Wind gave up the attempt. Then the Sun shone out warmly, and "
        "immediately the traveler took off his cloak. And so the North Wind was obliged to confess that "
        "the Sun was the stronger of the two."
    ),
    "rainbow": (
        "When the sunlight strikes raindrops in the air, they act as a prism and form a rainbow. The "
        "rainbow is a division of white light into many beautiful colors. These take the shape of a long "
        "round arch, with its path high above, and its two ends apparently beyond the horizon. There is, "
        "according to legend, a boiling pot of gold at one end. People look, but no one ever finds it. "
        "When a man looks for something beyond his reach, his friends say he is looking for the pot of "
        "gold at the end of the rainbow."
    ),
    "arthur": (
        "Arthur the rat hurried through the village, chattering to himself about the weather. The north "
        "wind blew bitterly, and the ground was covered with a thin layer of snow. Every few steps he "
        "paused to nibble at a crust of bread, then scurried on toward the barn where he stored his hoard."
    ),
}

WORD_PAIRS = {
    "tomato": "tomato",
    "schedule": "schedule",
    "privacy": "privacy",
    "leisure": "leisure",
    "herb": "herb",
    "garage": "garage",
    "either": "either",
    "advertisement": "advertisement",
    "vase": "vase",
    "route": "route",
    "laboratory": "laboratory",
    "data": "data",
    "water": "water",
    "student": "student",
    "vitamin": "vitamin",
    "clerk": "clerk",
    "dance": "dance",
    "banana": "banana",
    "oregano": "oregano",
    "controversy": "controversy",
    "neither": "neither",
    "figure": "figure",
    "literature": "literature",
    "coupon": "coupon",
    "mobile": "mobile",
    "tuesday": "tuesday",
    "ballet": "ballet",
    "lieutenant": "lieutenant",
    "dynasty": "dynasty",
    "harass": "harass",
    "cache": "cache",
    "inquiry": "inquiry",
    "zucchini": "zucchini",
    "address": "address",
    "brochure": "brochure",
    "glacier": "glacier",
    "been": "been",
    "often": "often",
    "envelope": "envelope",
    "process": "process",
    "quarantine": "quarantine",
    "hostile": "hostile",
    "migratory": "migratory",
    "mandatory": "mandatory",
    "qualitative": "qualitative",
    "adult": "adult",
    "research": "research",
    "detail": "detail",
    "news": "news",
    "due": "due",
    "progress": "progress",
    "semi": "semi",
    "anti": "anti",
    "multi": "multi",
}


async def synth(text: str, voice: str, out_path: Path) -> None:
    import edge_tts

    out_path.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text=text, voice=voice)
    await communicate.save(str(out_path))


async def main() -> None:
    tasks: list[tuple[str, asyncio.Task[None]]] = []

    for passage_id, text in PASSAGES.items():
        for accent_id, voice in VOICES.items():
            out = OUT / "passages" / passage_id / f"{accent_id}.mp3"
            label = f"passage:{passage_id}/{accent_id}"
            tasks.append((label, asyncio.create_task(synth(text, voice, out))))

    for pair_id, word in WORD_PAIRS.items():
        for variant, voice in (("uk", VOICES["british"]), ("us", VOICES["american"])):
            out = OUT / "words" / f"{pair_id}-{variant}.mp3"
            label = f"word:{pair_id}-{variant}"
            tasks.append((label, asyncio.create_task(synth(word, voice, out))))

    for label, task in tasks:
        await task
        print(f"wrote {label}")

    manifest = {
        "passages": list(PASSAGES.keys()),
        "words": list(WORD_PAIRS.keys()),
        "voices": VOICES,
    }
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"done → {OUT}")


if __name__ == "__main__":
    try:
        import edge_tts  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "-q"])
    asyncio.run(main())
