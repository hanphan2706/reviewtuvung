#!/usr/bin/env python3
"""Build `reading raw/reading challenge 2.txt` from Compass PDF + CD audio (quiz/vocab in app)."""
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
PDF_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 2 - Second Edition.pdf"
ZIP_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 2 CD-20260528T064548Z-3-001.zip"
OUT_TXT = RAW_DIR / "reading challenge 2.txt"
CHALLENGE_NUM = 2
AUDIO_DIR = ROOT / "public" / "reading-audio"
AUDIO_INTRO_TRIM_SEC = 5

UNITS: list[tuple[str, str, str]] = [
    ("In the Name of Beauty", "Culture and Leisure", "Dễ"),
    ("Who Took That Tooth?", "Culture and Leisure", "Dễ"),
    ("The Ring of Fire", "Environment", "Dễ"),
    ("Myths About Pimples", "Health", "Trung bình"),
    ("I Cut the Cheese!", "Science", "Trung bình"),
    ("Mr. Nintendo", "Culture and Leisure", "Trung bình"),
    ("Are Sports Bad for Kids?", "Sports", "Trung bình"),
    ("May I Have Your Autograph?", "Culture and Leisure", "Trung bình"),
    ("Where Are Our Jetpacks?", "Technology", "Trung bình"),
    ("Desert Delivery", "Environment", "Trung bình – khó"),
    ("Shakespeare, Where Are You Now?", "Culture and Leisure", "Trung bình – khó"),
    ("What's in a Name?", "Culture and Leisure", "Trung bình – khó"),
    ("Out of Rainforests", "Environment", "Trung bình – khó"),
    ("For a Quick Pickup", "Health", "Trung bình – khó"),
    ("The Misunderstood Tomato", "Science", "Trung bình – khó"),
    ("The Greatest of the Century", "Sports", "Khó"),
    ("Rights of Lefties", "Psychology", "Khó"),
    ("The Snowy Slopes of Dubai", "Sports", "Khó"),
    ("Not All Hackers Are the Same", "Technology", "Khó"),
    ("Weird Inventions", "Technology", "Khó"),
]

# Unsplash heroes by unit theme (keyword-matched IDs)
IMAGES: list[str] = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611146033545-5e1e5ad951d8?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1720709734276-cd14a216bcad?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1660646463659-df77c1580723?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1768005419000-d53e45851b50?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1664938011651-3a9772a672f9?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1774830970925-e176508dc0ab?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1741517287377-3fdbd87ac5f2?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop",
]


def load_pdf_text(path: Path) -> str:
    return "\n".join((p.extract_text() or "") for p in PdfReader(str(path)).pages)


def normalize_apostrophes(text: str) -> str:
    return text.replace("'", "'").replace("'", "'").replace("–", "-")


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
    # PDF columns → join lines, drop line-number-only tokens
    chunks: list[str] = []
    for line in raw.split("\n"):
        t = line.strip()
        if not t or re.fullmatch(r"\d+", t):
            continue
        t = re.sub(r"^\d+\s+", "", t)
        if t in ("Pre-Reading", "Vocabulary Preview") or t.startswith("Track "):
            continue
        if is_glossary_line(t):
            continue
        chunks.append(t)
    text = " ".join(chunks)
    text = re.sub(r"\s+", " ", text).strip()
    # Column/page numbers before body (e.g. "5 10 15 20 Companies...")
    text = re.sub(r"(?:\b\d+\b\s+){2,8}(?=[A-Za-z])", "", text)
    text = re.sub(r"\b([A-Z])\s+([a-z]{2,})", r"\1\2", text)
    text = re.sub(r"\b([A-Za-z])\s+([a-z]{1,2})\s+", r"\1\2 ", text)
    text = re.sub(r"\s+([,.;:!?])", r"\1", text)
    # drop duplicated title prefix
    if text.lower().startswith(title.lower()):
        text = text[len(title) :].strip()
    sentences = re.split(r"(?<=[.!?])\s+", text)
    sentences = [s.strip() for s in sentences if len(s.strip()) > 20]

    def is_vocab_sentence(s: str) -> bool:
        if re.match(r"^the [a-z]+ ", s, re.I) and len(s) < 90 and ":" not in s:
            return True
        if s.count(":") >= 1 and len(s) < 100:
            return True
        return False

    while sentences and is_vocab_sentence(sentences[0]):
        sentences.pop(0)
    while sentences:
        words = sentences[0].split()
        first = words[0]
        if len(words) >= 8 and (first[0].isupper() or first.isdigit()) and ":" not in sentences[0][:35]:
            break
        sentences.pop(0)
    if not sentences:
        return text
    paras: list[str] = []
    chunk: list[str] = []
    for s in sentences:
        chunk.append(s)
        if len(chunk) >= 3 and sum(len(x) for x in chunk) > 280:
            paras.append(" ".join(chunk))
            chunk = []
    if chunk:
        paras.append(" ".join(chunk))
    return strip_reading_time("\n\n".join(paras))


def extract_passage_by_track(full: str, unit_num: int, title: str) -> str:
    track_no = 2 * unit_num - 1
    norm = normalize_apostrophes(full)
    m = re.search(rf"Track\s+{track_no}\s*\n", norm, re.I)
    if not m:
        return ""
    sub = norm[m.end() :]
    rc = re.search(r"Reading Comprehension", sub, re.I)
    raw = sub[: rc.start()] if rc else sub[:4000]
    return clean_passage(raw, title)


def extract_passage(full: str, title: str, unit_num: int) -> str:
    by_track = extract_passage_by_track(full, unit_num, title)
    if by_track and len(by_track) > 200:
        return by_track
    norm = normalize_apostrophes(full)
    variants = [title, title.replace("'", "'"), title.replace("'", "'")]
    for t in variants:
        m = re.search(re.escape(normalize_apostrophes(t)) + r"\s*\n\s*Pre-Reading", norm, re.I)
        if m:
            chunk = norm[m.end() :]
            tm = re.search(r"Track\s+\d+", chunk, re.I)
            if not tm:
                continue
            sub = chunk[tm.end() :]
            rc = re.search(r"Reading Comprehension", sub, re.I)
            raw = sub[: rc.start()] if rc else sub[:3000]
            cleaned = clean_passage(raw, t)
            if cleaned:
                return cleaned
    return by_track


def extract_idioms(full: str, title: str) -> list[tuple[str, str]]:
    variants = [title, title.replace("'", "'"), title.replace("'", "’")]
    for t in variants:
        m = re.search(re.escape(t) + r"[\s\S]*?Idiomatic Expressions", full, re.I)
        if not m:
            continue
        chunk = full[m.end() : m.end() + 2500]
        end = re.search(r"Fill in the blank|Reading Comprehension|Summary", chunk, re.I)
        block = chunk[: end.start()] if end else chunk
        items: list[tuple[str, str]] = []
        for line in block.split("\n"):
            line = line.strip()
            if not line or line.startswith("♮") or "find these idioms" in line.lower():
                continue
            br = re.match(r"^(.+?)\s*\[\s*(.+?)\s*\]\s*$", line)
            if br:
                items.append((br.group(1).strip(), br.group(2).strip()))
                continue
            if line.startswith("Hey,") or line.startswith("In the"):
                continue
        if items:
            return items[:6]
    return []


def extract_mcq(full: str, title: str) -> tuple[list[str], list[str]]:
    """Returns (questions lines for txt, answer letters)."""
    variants = [title, title.replace("'", "'"), title.replace("'", "’")]
    for t in variants:
        m = re.search(
            re.escape(t) + r"[\s\S]*?Reading Comprehension[\s\S]*?Choose the best answer\.\s*([\s\S]*?)Idiomatic Expressions",
            full,
            re.I,
        )
        if not m:
            continue
        block = m.group(1)
        questions: list[str] = []
        answers: list[str] = []
        for qm in re.finditer(
            r"(\d+)\.\s+(.+?)\s+a\.\s+(.+?)\s+b\.\s+(.+?)\s+c\.\s+(.+?)\s+d\.\s+(.+?)(?=\d+\.|Idiomatic|Summary|$)",
            block,
            re.I | re.S,
        ):
            num, stem, a, b, c, d = qm.groups()
            stem = re.sub(r"\s+", " ", stem).strip()
            a, b, c, d = (re.sub(r"\s+", " ", x).strip() for x in (a, b, c, d))
            questions.append(f"{num} {stem}")
            questions.append(f"A {a}")
            questions.append(f"B {b}")
            questions.append(f"C {c}")
            questions.append(f"D {d}")
            questions.append("")
        if questions:
            return questions, answers
    return [], []


def extract_answers(key_text: str, unit_num: int) -> dict[int, str]:
    m = re.search(rf"Unit\s+{unit_num}\s+[\s\S]*?Reading Comprehension\s+([\s\S]*?)Idiomatic", key_text, re.I)
    if not m:
        return {}
    line = re.sub(r"\s+", " ", m.group(1)).strip()
    pairs = re.findall(r"(\d+)\.\s*([a-dA-D])", line)
    return {int(n): letter.upper() for n, letter in pairs}


def build_quick_check_placeholder(title: str) -> list[str]:
    """Placeholder trong .txt — app dùng `lib/reading/reading-challenge-1-quiz.ts`."""
    return [
        "QUICK CHECK",
        f"question_en | Curated in app: {title}",
        "0_en | —",
        "1_en | —",
        "correct | 0",
        "",
    ]


def trim_all_compass_audio(seconds: int = AUDIO_INTRO_TRIM_SEC) -> None:
    """Drop Compass CD spoken unit intro from reading-challenge-2 MP3s."""
    trim_script = ROOT / "scripts" / "trim-reading-challenge-audio.mjs"
    if trim_script.is_file():
        subprocess.run(
            ["node", str(trim_script)],
            cwd=ROOT,
            env={**os.environ, "TRIM_SEC": str(seconds), "CHALLENGE": str(CHALLENGE_NUM)},
            check=True,
        )
        return
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        print("WARN: ffmpeg not found; skipping audio intro trim")
        return
    for dest in sorted(AUDIO_DIR.glob(f"reading-challenge-{CHALLENGE_NUM}-p*.mp3")):
        tmp = dest.with_suffix(".trim.mp3")
        subprocess.run(
            [
                ffmpeg,
                "-y",
                "-ss",
                str(seconds),
                "-i",
                str(dest),
                "-acodec",
                "copy",
                str(tmp),
            ],
            check=True,
            capture_output=True,
        )
        tmp.replace(dest)


def copy_audio(unit_num: int) -> str:
    track_no = 2 * unit_num - 1
    candidates = [f"RC2 {track_no:02d}.mp3", f"RC2 {track_no}.mp3"]
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


PASSAGE_OPENING: dict[int, str] = {
    1: "Cosmetics have been used throughout history. ",
    5: (
        "A normal person produces about half a liter of fart gas every day, "
        "which equals about 14 farts per day. "
    ),
    13: "It's a special, dark place completely different from anywhere else. ",
}


def fix_pdf_artifacts(text: str) -> str:
    text = re.sub(r"\bIt'sa\b", "It's a", text)
    text = re.sub(r"\bArainforest\b", "A rainforest", text)
    text = re.sub(r"\bthe w orld\b", "the world", text, flags=re.I)
    text = re.sub(r"\bwer e\b", "were", text, flags=re.I)
    text = re.sub(r"\bdevelop ed\b", "developed", text, flags=re.I)
    text = re.sub(r"\bth e\b", "the", text, flags=re.I)
    text = re.sub(r"\bpow ders\b", "powders", text, flags=re.I)
    text = re.sub(r"\bvolcanoe s\b", "volcanoes", text, flags=re.I)
    text = re.sub(r"\bMe xico\b", "Mexico", text, flags=re.I)
    text = re.sub(r"\bpeo ple\b", "people", text, flags=re.I)
    text = re.sub(r"\bhappe n\b", "happen", text, flags=re.I)
    text = re.sub(r"\bneg ative\b", "negative", text, flags=re.I)
    text = re.sub(r"\bfa mous\b", "famous", text, flags=re.I)
    text = re.sub(r"\bauto graphs\b", "autographs", text, flags=re.I)
    text = re.sub(r"\b21 st\b", "21st", text)
    text = re.sub(r"\bmiles t hrough\b", "miles through", text, flags=re.I)
    text = re.sub(r"\bGaris sa\b", "Garissa", text, flags=re.I)
    text = re.sub(r"\bar e\b", "are", text, flags=re.I)
    text = re.sub(r"\bsi mply\b", "simply", text, flags=re.I)
    text = re.sub(r"\bdoes n\b", "doesn't", text, flags=re.I)
    text = re.sub(r"\be nergy\b", "energy", text, flags=re.I)
    text = re.sub(r"\bsa uces\b", "sauces", text, flags=re.I)
    text = re.sub(r"\bke tchup\b", "ketchup", text, flags=re.I)
    text = re.sub(r"\bcontr oversy\b", "controversy", text, flags=re.I)
    text = re.sub(r"\b20 th\b", "20th", text)
    text = re.sub(r"\bha nd\b", "hand", text, flags=re.I)
    text = re.sub(r"\b45° C\b", "45°C", text)
    text = re.sub(r"\bw orld\b", "world", text, flags=re.I)
    text = re.sub(r"\bembarra ssed\b", "embarrassed", text, flags=re.I)
    text = re.sub(r"\blearn ing\b", "learning", text, flags=re.I)
    text = re.sub(r"\bn ervous\b", "nervous", text, flags=re.I)
    text = re.sub(r"\boxyg en\b", "oxygen", text, flags=re.I)
    text = re.sub(r"\bIcut\b", "I cut", text)
    return text


def main() -> None:
    full = normalize_apostrophes(load_pdf_text(PDF_PATH))
    parts: list[str] = []

    for i, (title, _topic, _diff) in enumerate(UNITS, start=1):
        passage = extract_passage(full, title, i)
        lead = PASSAGE_OPENING.get(i, "")
        if lead and passage and not passage.lstrip().lower().startswith(lead[:40].lower()):
            passage = lead + passage
        if not passage:
            print(f"WARN: empty passage for unit {i} {title}")
            continue

        passage = fix_pdf_artifacts(passage)

        idioms = extract_idioms(full, title)

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
