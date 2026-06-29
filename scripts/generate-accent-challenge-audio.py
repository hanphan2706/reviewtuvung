#!/usr/bin/env python3
"""Generate word + sentence audio for accent challenge (4 accents × male/female) via edge-tts."""

from __future__ import annotations

import asyncio
import json
import subprocess
import sys
from pathlib import Path
from typing import Optional

ROOT = Path(__file__).resolve().parents[1]
SENTENCE_OUT = ROOT / "public" / "listening-assets" / "accent-challenge" / "sentences"
WORD_OUT = ROOT / "public" / "listening-assets" / "accent-challenge" / "words"

VOICES = {
    "british": {
        "male": "en-GB-RyanNeural",
        "female": "en-GB-SoniaNeural",
    },
    "american": {
        "male": "en-US-GuyNeural",
        "female": "en-US-JennyNeural",
    },
    "singapore": {
        "male": "en-SG-WayneNeural",
        "female": "en-SG-LunaNeural",
    },
    "india": {
        "male": "en-IN-PrabhatNeural",
        "female": "en-IN-NeerjaNeural",
    },
}

WORDS = {
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

SENTENCES = {
    "morning-coffee": "I usually grab a coffee on my way to work every morning.",
    "mrt-station": "Could you help me find the nearest MRT station?",
    "humid-weather": "The weather has been really humid lately, hasn't it?",
    "takeaway-dinner": "I'm thinking of ordering takeaway for dinner tonight.",
    "walk-to-office": "My flat is just a ten-minute walk from the office.",
    "speak-slower": "Sorry, could you speak a little slower please?",
    "transport-card": "I need to top up my transport card before the commute.",
    "food-court": "Let's meet at the food court around half past twelve.",
    "less-sugar": "I've been trying to cut down on sugar in my tea.",
    "bus-delay": "The bus was delayed again because of the morning traffic.",
    "card-or-cash": "Do you prefer paying by card or in cash?",
    "phone-charge": "I forgot to charge my phone before leaving home.",
    "spicy-curry": "This curry is a bit spicy for me, but it's delicious.",
    "quiet-cafe": "I'm looking for a quiet café to work from this afternoon.",
    "grocery-hours": "The grocery store closes at nine on weekdays.",
    "park-walk": "Would you like to join us for a walk in the park later?",
    "two-alarms": "I always set two alarms so I don't oversleep.",
    "air-conditioner": "The air conditioner isn't working properly in my room.",
    "weekend-plans": "We might visit the night market if the rain stops this weekend.",
    "laundry-day": "I'll do the laundry after I finish this episode.",
    "parcel-thursday": "The parcel should arrive by Thursday, unless the courier runs into delays.",
    "dentist-call": "I've been meaning to call my dentist about that sensitive tooth.",
    "keep-voice-down": "Would you mind keeping your voice down? The baby's finally asleep.",
    "draft-standup": "Our team lead asked us to submit the draft before the weekly stand-up.",
    "radiator-click": "I couldn't figure out why the radiator was making that clicking sound.",
    "driving-slot": "She booked a slot at the driving centre for next month.",
    "dough-rest": "The recipe says to let the dough rest for at least forty minutes.",
    "overthink-sleep": "He tends to overthink things when he hasn't had enough sleep.",
    "laundry-supplies": "We're running low on laundry detergent and bin bags.",
    "lecture-packed": "The lecture hall was packed, so we had to sit in the back row.",
    "misplaced-umbrella": "I misplaced my umbrella somewhere between the café and the station.",
    "postpone-inspection": "They've decided to postpone the inspection until the pipes are fixed.",
    "discount-sale": "I'm not convinced that discount applies to items already on sale.",
    "forward-itinerary": "Could you forward me the itinerary once you've confirmed the dates?",
    "muddy-trail": "The trail gets muddy after rain, so wear something sensible.",
    "three-languages": "She's fluent in three languages, but English is the one she uses at work.",
    "missed-train": "We missed the last train and ended up sharing a taxi home.",
    "volunteering": "He's been volunteering at the community centre every other Saturday.",
    "thermostat-reset": "The thermostat keeps resetting itself overnight for some reason.",
    "passport-renew": "I'll need to renew my passport before the summer trip.",
    "fare-increase": "They announced a fare increase starting from the first of January.",
    "podcasts-tasks": "I find podcasts helpful when I'm doing repetitive tasks.",
    "neighbour-dog": "The neighbour's dog barks whenever someone walks past the gate.",
    "three-managers": "We've had three different managers in the past two years.",
    "check-attachment": "Please double-check the attachment before you hit send.",
    "borrow-charger": "Do you have a spare charger I could borrow for a couple of hours?",
    "shelf-instructions": "The instructions for assembling the shelf were harder to follow than I expected.",
    "cancel-subscription": "I finally cancelled that subscription I'd forgotten about months ago.",
    "window-seat": "She insisted on the window seat because she gets motion sickness on coaches.",
}


async def synth(text: str, voice: str, out_path: Path, retries: int = 3) -> None:
    import edge_tts

    out_path.parent.mkdir(parents=True, exist_ok=True)
    last_error: Optional[Exception] = None
    for attempt in range(retries):
        try:
            communicate = edge_tts.Communicate(text=text, voice=voice)
            await communicate.save(str(out_path))
            return
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            await asyncio.sleep(0.8 * (attempt + 1))
    raise last_error or RuntimeError(f"Failed to synthesize {out_path}")


async def main() -> None:
    for word_id, text in WORDS.items():
        for accent_id, genders in VOICES.items():
            for gender, voice in genders.items():
                out = WORD_OUT / word_id / f"{accent_id}-{gender}.mp3"
                label = f"word:{word_id}/{accent_id}-{gender}"
                await synth(text, voice, out)
                print(f"wrote {label}")

    for sentence_id, text in SENTENCES.items():
        for accent_id, genders in VOICES.items():
            for gender, voice in genders.items():
                out = SENTENCE_OUT / sentence_id / f"{accent_id}-{gender}.mp3"
                label = f"sentence:{sentence_id}/{accent_id}-{gender}"
                await synth(text, voice, out)
                print(f"wrote {label}")

    manifest = {
        "words": list(WORDS.keys()),
        "sentences": list(SENTENCES.keys()),
        "voices": VOICES,
    }
    (SENTENCE_OUT.parent / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"done → {SENTENCE_OUT.parent}")


if __name__ == "__main__":
    try:
        import edge_tts  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "-q"])
    asyncio.run(main())
