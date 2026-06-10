#!/usr/bin/env python3
"""Build `reading raw/reading challenge 3.txt` from Compass PDF + CD audio."""
from __future__ import annotations

import os
import re
import shutil
import subprocess
import zipfile
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = ROOT / "reading raw"
PDF_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 3 - Second Edition.pdf"
KEY_PATH = RAW_DIR / "Compass Publishing" / "Answer Key - Reading Challenge 3.pdf"
ZIP_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 3 CD-20260609T070427Z-3-001.zip"
OUT_TXT = RAW_DIR / "reading challenge 3.txt"
CHALLENGE_NUM = 3
AUDIO_DIR = ROOT / "public" / "reading-audio"
AUDIO_INTRO_TRIM_SEC = 5

UNITS: list[tuple[str, str, str]] = [
    ("Read It or See It?", "Culture and Leisure", "Dễ"),
    ("Superstitions About Birds", "Culture and Leisure", "Dễ"),
    ("Alaska Is Melting!", "Environment", "Dễ"),
    ("Working on Your Workout", "Health", "Trung bình"),
    ("Smart Exercise", "Health", "Trung bình"),
    ("Rescuing Relics", "Culture and Leisure", "Trung bình"),
    ("Tweenbots", "Technology", "Trung bình"),
    ("Back to the Future", "Science", "Trung bình"),
    ("A Better Robot", "Technology", "Trung bình"),
    ("Flower Power", "Environment", "Trung bình – khó"),
    ("A Controversial Restoration", "Culture and Leisure", "Trung bình – khó"),
    ("The Flood", "Environment", "Trung bình – khó"),
    ("Naturally Better Homes", "Environment", "Trung bình – khó"),
    ("Eat Better, Look Better", "Health", "Trung bình – khó"),
    ("Imagine That!", "Psychology", "Trung bình – khó"),
    ("Madonna's Downloads", "Culture and Leisure", "Khó"),
    ("Remembering Memories", "Psychology", "Khó"),
    ("Taking Home the World Cup", "Sports", "Khó"),
    ("No Phishing Allowed", "Technology", "Khó"),
    ("Take a Ghost Tour", "Culture and Leisure", "Khó"),
]

# Unique substring at the start of each passage body (PDF extract quirks included).
PASSAGE_OPENING: dict[int, str] = {
    1: "early days of making movies",
    2: "ertain birds are, more often than not",
    3: "laska is disappearing slowly, but surely",
    4: "However, most people do not know how to exercise properly",
    5: "preparing for a big test? If so, you may want to go play some basketball",
    6: "an old 18th century house in Beijing. The museum displays",
    7: "Every day, the streets are congested with people",
    8: "road to the future leads through the past",
    9: "exploring and working in space. In particu lar, many robots have been sent",
    10: "Visitors to Japan probably would not put Suginami very high",
    11: "ertain masterpieces are recognized worldwide as outstanding",
    12: "In this legend of the great flood, water covered all the land",
    13: "1970s, many people became concerned about energy",
    14: "free radicals have the capability to attach to and damage",
    15: "eople who daydream are often thought",
    16: "Her early days in the entertainment industry we re tough",
    17: "wish they had better memories. They also worry about forgetting things",
    18: "thirty-six centimeters tall, but to fans throughout the world",
    19: "phishers send more than three billion scam messages each year",
    20: "strange noise and feel a cold rush of air move past you",
}

IMAGES: list[str] = [
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1754450927348-9e2ac72dd4b2?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1657069342866-2d11c2509b02?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop",
]


def load_pdf_text(path: Path) -> str:
    return "\n".join((p.extract_text() or "") for p in PdfReader(str(path)).pages)


def normalize_apostrophes(text: str) -> str:
    return text.replace("'", "'").replace("'", "'").replace("\u2019", "'").replace("–", "-")


def is_glossary_line(t: str) -> bool:
    return bool(re.match(r"^[\w\s()/-]+:\s+\w", t) and len(t) < 140)


READING_TIME_RE = re.compile(
    r"\s*Reading Time\s+_{1,}\s*minutes\s+_{1,}\s*seconds(?:\s+\d+\s*words)?.*$",
    re.IGNORECASE,
)


def strip_reading_time(text: str) -> str:
    text = READING_TIME_RE.sub("", text).strip()
    paras = [p.strip() for p in re.split(r"\n\n+", text) if p.strip()]
    paras = [p for p in paras if not re.match(r"^Reading Time\s+_{1,}", p, re.I)]
    return "\n\n".join(paras)


def clean_passage(raw: str, title: str) -> str:
    chunks: list[str] = []
    skip_pre = True
    for line in raw.split("\n"):
        t = line.strip()
        if not t or re.fullmatch(r"\d+", t):
            continue
        t = re.sub(r"^\d+\s+", "", t)
        if t in ("Pre-Reading", "Vocabulary Preview") or t.startswith("Track "):
            continue
        if is_glossary_line(t):
            continue
        if skip_pre:
            if re.match(r"^[a-f]\.\s", t) or re.match(r"^\d+\.\s+____", t):
                continue
            if t.startswith("Think about") or t.startswith("Write the letter"):
                continue
            if t.startswith("What ") and t.endswith("?"):
                continue
            if t.startswith("Where ") and t.endswith("?"):
                continue
            if t.startswith("Which ") and t.endswith("?"):
                continue
            if t.startswith("Are any") or t.startswith("Underlined"):
                continue
        if len(t) > 40 and re.search(r"[.!?]", t):
            skip_pre = False
        if skip_pre and len(t) < 80:
            continue
        chunks.append(t)
    text = " ".join(chunks)
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(?:\b\d+\b\s+){2,8}(?=[A-Za-z])", "", text)
    text = re.sub(r"\b([A-Z])\s+([a-z]{2,})", r"\1\2", text)
    text = re.sub(r"\b([A-Za-z])\s+([a-z]{1,2})\s+", r"\1\2 ", text)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    if text.lower().startswith(title.lower()):
        text = text[len(title) :].strip()
    sentences = re.split(r"(?<=[.!?])\s+", text)
    sentences = [s.strip() for s in sentences if len(s.strip()) > 20]
    junk_patterns = [
        r"^What book",
        r"^Which did",
        r"^Write the letter",
        r"^____",
        r"^does not give in to",
        r"^people who give their professional",
        r"^Underlined",
        r"^Where is Alaska",
        r"^What do you think contributes",
        r"^What do you know about glaciers",
        r"^What birds are",
        r"^Are any birds",
        r"^Where can you go bird",
    ]
    while sentences and any(re.search(p, sentences[0], re.I) for p in junk_patterns):
        sentences.pop(0)
    paras: list[str] = []
    chunk: list[str] = []
    for s in sentences:
        chunk.append(s)
        if len(chunk) >= 3 and sum(len(x) for x in chunk) > 280:
            paras.append(" ".join(chunk))
            chunk = []
    if chunk:
        paras.append(" ".join(chunk))
    text = strip_reading_time("\n\n".join(paras))
    return text


def unit_anchor(full: str, title: str) -> int:
    variants = [title, title.replace("Madonna\u2019s", "Madonna's")]
    for t in variants:
        m = re.search(re.escape(t) + r"\s*\n\s*Vocabulary Preview", full, re.I)
        if m:
            return m.start()
    return -1


def unit_chunk(full: str, unit_index: int) -> str:
    title, _, _ = UNITS[unit_index]
    start = unit_anchor(full, title)
    if start < 0:
        return ""
    if unit_index + 1 < len(UNITS):
        end = unit_anchor(full, UNITS[unit_index + 1][0])
        if end < 0:
            end = len(full)
    else:
        end = len(full)
    return full[start:end]


def find_passage_start(before: str) -> str:
    """Drop vocab preview / pre-reading; keep prose before Reading Time or Track."""
    lines = before.split("\n")
    start_idx = 0
    for i, line in enumerate(lines):
        stripped = line.strip()
        if re.match(r"^\d+\s+\w+:", stripped):
            start_idx = i + 1
        if stripped in ("Pre-Reading", "Vocabulary Preview"):
            start_idx = i + 1
    while start_idx < len(lines):
        stripped = lines[start_idx].strip()
        if not stripped or re.fullmatch(r"\d+", stripped) or re.fullmatch(r"[A-Z]", stripped):
            start_idx += 1
            continue
        if re.match(r"^\d+\s+\w+:", stripped):
            start_idx += 1
            continue
        if re.match(r"^[a-f]\.", stripped) or stripped.startswith("Think about") or stripped.startswith("Write the letter"):
            start_idx += 1
            continue
        break
    text = "\n".join(lines[start_idx:])
    text = re.sub(r"\b([A-Z])\s*\n\s*([a-z])", r"\1\2", text)
    return text


def extract_passage(full: str, unit_index: int) -> str:
    title, _, _ = UNITS[unit_index]
    unit_num = unit_index + 1
    chunk = unit_chunk(full, unit_index)
    track_no = 2 * unit_num - 1
    track_m = re.search(rf"Track\s+{track_no}\s*\n", chunk, re.I)
    rt_m = re.search(r"Reading Time\s+_{1,}", chunk, re.I)
    if track_m and rt_m:
        if track_m.start() < rt_m.start():
            after_track = chunk[track_m.end() : rt_m.start()]
            if len(re.sub(r"\s+", " ", after_track).strip()) > 400:
                raw = after_track
            else:
                raw = find_passage_start(chunk[: track_m.start()])
        else:
            raw = find_passage_start(chunk[: rt_m.start()])
    elif rt_m:
        raw = find_passage_start(chunk[: rt_m.start()])
    elif track_m:
        raw = find_passage_start(chunk[: track_m.start()])
    else:
        print(f"WARN: no passage boundary for unit {unit_num} {title}")
        return ""
    flat = re.sub(r"\s+", " ", raw)
    opening = PASSAGE_OPENING.get(unit_num)
    if opening:
        idx = flat.lower().rfind(opening.lower())
        if idx >= 0:
            flat = flat[idx:]
    return clean_passage(flat, title)


def extract_idioms(chunk: str) -> list[tuple[str, str]]:
    best: list[tuple[str, str]] = []
    for m in re.finditer(
        r"Find these idioms in the reading\.([\s\S]*?)(?:Fill in the blank|Choose the best answer|Summary|Listening|Track\s+\d)",
        chunk,
        re.I,
    ):
        block = m.group(1)
        items: list[tuple[str, str]] = []
        for line in block.split("\n"):
            line = line.strip()
            if not line or line.startswith("♮") or "find these idioms" in line.lower():
                continue
            br = re.match(r"^(.+?)\s*\[\s*(.+?)\s*\]\s*$", line)
            if br:
                items.append((br.group(1).strip(), br.group(2).strip()))
        if len(items) > len(best):
            best = items[:5]
    return best


def fix_pdf_artifacts(text: str) -> str:
    text = re.sub(r"\bS ince\b", "Since", text)
    text = re.sub(r"\bA laska\b", "Alaska", text)
    text = re.sub(r"\bI t\b", "It", text)
    text = re.sub(r"\bT he\b", "The", text)
    text = re.sub(r"\bW orking\b", "Working", text)
    text = re.sub(r"\bY our\b", "Your", text)
    text = re.sub(r"\bmov ie\b", "movie", text, flags=re.I)
    text = re.sub(r"\bdirecto r\b", "director", text, flags=re.I)
    text = re.sub(r"\bg reat\b", "great", text, flags=re.I)
    text = re.sub(r"\ba s\b", "as", text, flags=re.I)
    text = re.sub(r"\bharbing ers\b", "harbingers", text, flags=re.I)
    text = re.sub(r"\bve getables\b", "vegetables", text, flags=re.I)
    text = re.sub(r"\bvit amin\b", "vitamin", text, flags=re.I)
    text = re.sub(r"\bstudio'sor\b", "studio's or", text, flags=re.I)
    text = re.sub(r"\bliter ature\b", "literature", text, flags=re.I)
    text = re.sub(r"\bLik ewise\b", "Likewise", text)
    text = re.sub(r"\bmuc h\b", "much", text, flags=re.I)
    text = re.sub(r"\bAlthoug h\b", "Although", text)
    text = re.sub(r"^early days of making movies", "Since the early days of making movies", text)
    text = re.sub(r"^eople who daydream", "People who daydream", text)
    text = re.sub(r"^laska is disappearing", "Alaska is disappearing", text)
    text = re.sub(r"^ertain birds", "Certain birds", text)
    text = re.sub(r"^ertain masterpieces", "Certain masterpieces", text)
    text = re.sub(r"^wish they had better memories", "Most people wish they had better memories", text)
    text = re.sub(r"^obots are useful", "Robots are useful", text)
    return text


def trim_all_compass_audio(seconds: int = AUDIO_INTRO_TRIM_SEC) -> None:
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        print("WARN: ffmpeg not found; skipping audio intro trim")
        return
    for dest in sorted(AUDIO_DIR.glob(f"reading-challenge-{CHALLENGE_NUM}-p*.mp3")):
        tmp = dest.with_suffix(".trim.mp3")
        subprocess.run(
            ["ffmpeg", "-y", "-ss", str(seconds), "-i", str(dest), "-acodec", "copy", str(tmp)],
            check=True,
            capture_output=True,
        )
        tmp.replace(dest)


def copy_audio(unit_num: int) -> str:
    track_no = 2 * unit_num - 1
    candidates = [f"RC3 {track_no:02d}.mp3", f"RC3 {track_no}.mp3"]
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    dest = AUDIO_DIR / f"reading-challenge-{CHALLENGE_NUM}-p{unit_num}.mp3"
    with zipfile.ZipFile(ZIP_PATH, "r") as zf:
        for cand in candidates:
            for name in zf.namelist():
                if name.endswith(cand):
                    with zf.open(name) as src, open(dest, "wb") as out:
                        shutil.copyfileobj(src, out)
                    return f"/reading-audio/reading-challenge-{CHALLENGE_NUM}-p{unit_num}.mp3"
    return ""


def build_quick_check_placeholder(title: str) -> list[str]:
    return [
        "QUICK CHECK",
        f"question_en | Curated in app: {title}",
        "0_en | —",
        "1_en | —",
        "correct | 0",
        "",
    ]


def main() -> None:
    full = normalize_apostrophes(load_pdf_text(PDF_PATH))
    parts: list[str] = []

    for i, (title, _topic, _diff) in enumerate(UNITS, start=1):
        passage = extract_passage(full, i - 1)
        if not passage:
            print(f"WARN: empty passage for unit {i} {title}")
            continue
        passage = fix_pdf_artifacts(passage)
        chunk = unit_chunk(full, i - 1)
        idioms = extract_idioms(chunk)

        parts.append(f"READING PASSAGE {i}\n\n{title}\n\n{passage}\n")
        parts.append("IMAGE")
        parts.append(f"url | {IMAGES[i - 1]}\n")
        audio = copy_audio(i)
        if audio:
            parts.append("AUDIO")
            parts.append(f"url | {audio}\n")
        if idioms:
            parts.append("IDIOMS")
            for term, defn in idioms[:5]:
                parts.append(f"{term} | {defn}")
            parts.append("")
        parts.extend(build_quick_check_placeholder(title))

    OUT_TXT.write_text("\n".join(parts).strip() + "\n", encoding="utf-8")
    trim_all_compass_audio()
    print(f"Wrote {OUT_TXT} ({len(UNITS)} units targeted)")


if __name__ == "__main__":
    main()
