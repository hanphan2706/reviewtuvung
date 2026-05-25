#!/usr/bin/env python3
"""Build `reading raw/reading challenge 1.txt` from Compass PDF + answer key + CD audio."""
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
PDF_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 1 - Second Edition.pdf"
KEY_PATH = RAW_DIR / "Compass Publishing" / "Answer Key - Reading Challenge 1.pdf"
ZIP_PATH = RAW_DIR / "Compass Publishing" / "Reading Challenge 1 CD-20260522T051337Z-3-001.zip"
OUT_TXT = RAW_DIR / "reading challenge 1.txt"
AUDIO_DIR = ROOT / "public" / "reading-audio"
AUDIO_INTRO_TRIM_SEC = 5

UNITS: list[tuple[str, str, str]] = [
    ("The Ice Hotel", "Culture and Leisure", "Dễ"),
    ("Food Firsts", "Culture and History", "Dễ"),
    ("Hurricane Who?", "Environment", "Dễ"),
    ("How Did Those Get in There?", "Culture and History", "Trung bình"),
    ("A Bug's Sleep", "Science", "Trung bình"),
    ("Tiger's Tale", "Wildlife", "Trung bình"),
    ("Not the Normal News", "Social", "Trung bình"),
    ("The Wright Way to Fly", "Technology", "Trung bình"),
    ("Don't Trust Me!", "Psychology", "Trung bình – khó"),
    ("Bugs for Sale", "Science", "Trung bình – khó"),
    ("Mona Who?", "Culture and Leisure", "Trung bình – khó"),
    ("Borrowed Words", "Culture and History", "Trung bình – khó"),
    ("Growing Deserts", "Environment", "Trung bình – khó"),
    ("The Importance of Water", "Health", "Trung bình – khó"),
    ("Animal Forecasters", "Science", "Khó"),
    ("A Fantastic Mind", "Culture and Leisure", "Khó"),
    ("Seeing Red", "Psychology", "Khó"),
    ("Worth Collecting", "Culture and Leisure", "Khó"),
    ("Can't Beat Them? Join Them!", "Social", "Khó"),
    ("Rich Dogs", "Culture and Leisure", "Khó"),
]

# Curated Unsplash heroes (unique per unit)
IMAGES: list[str] = [
    "https://images.unsplash.com/photo-1749763829318-29b75632f934?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop",
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
    """Drop Compass CD spoken unit intro from all reading-challenge-1 MP3s."""
    trim_script = ROOT / "scripts" / "trim-reading-challenge-audio.mjs"
    if trim_script.is_file():
        subprocess.run(
            ["node", str(trim_script)],
            cwd=ROOT,
            env={**os.environ, "TRIM_SEC": str(seconds)},
            check=True,
        )
        return
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        print("WARN: ffmpeg not found; skipping audio intro trim")
        return
    for dest in sorted(AUDIO_DIR.glob("reading-challenge-1-p*.mp3")):
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
    track_file = f"{2 * unit_num - 1:02d}-.mp3"
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    dest = AUDIO_DIR / f"reading-challenge-1-p{unit_num}.mp3"
    with zipfile.ZipFile(ZIP_PATH, "r") as zf:
        for name in zf.namelist():
            if name.endswith(track_file):
                with zf.open(name) as src, open(dest, "wb") as out:
                    shutil.copyfileobj(src, out)
                return f"/reading-audio/reading-challenge-1-p{unit_num}.mp3"
    return ""


# First sentence sometimes lost when PDF line numbers precede body text.
PASSAGE_OPENING: dict[int, str] = {
    8: (
        "Wilbur and Orville Wright grew up in the late 1800s. "
        "They were interested in machines and flying from an early age. "
    ),
    9: "Companies these days spend thousands of dollars on their computer security. ",
    13: "Deserts are dry areas of land with very little rainfall. ",
    14: "Water is very important for your health. ",
    15: "Do you think animals can predict earthquakes and other natural disasters? ",
}


def main() -> None:
    full = normalize_apostrophes(load_pdf_text(PDF_PATH))
    key_text = normalize_apostrophes(load_pdf_text(KEY_PATH))
    parts: list[str] = []

    for i, (title, _topic, _diff) in enumerate(UNITS, start=1):
        passage = extract_passage(full, title, i)
        lead = PASSAGE_OPENING.get(i, "")
        if lead and passage and not passage.lstrip().lower().startswith(lead[:40].lower()):
            passage = lead + passage
        if not passage and i == 1:
            # keep known-good unit 1 from existing file as fallback
            passage = (
                "Are you into skiing? Is winter your favorite time of year? If you like snow and ice, "
                "maybe you should stay at the Ice Hotel in Quebec, Canada. But you can only check in to "
                "this hotel during the winter. Why? Because this hotel is made entirely of ice and snow!\n\n"
                "This amazing hotel is built every December. It has 32 rooms, and 80 people can stay there "
                "each night. The hotel has a movie theater, an art gallery, and a church. Of course, all of "
                "these parts of the hotel are made of ice. In fact, all the furniture, art, lights, and even "
                "plates and drinking glasses are made of ice.\n\n"
                "Because this hotel is so unusual, it has become very popular. People from all over the world "
                "come to the Ice Hotel to look at the fantastic ice art, drink and eat from designer ice dishes, "
                "and experience the unique atmosphere. Some couples have even gotten married in the hotel's ice church.\n\n"
                "However, all the guests keep their winter coats on! Because of all the ice, the temperature "
                "inside the hotel is always between -2 and -5 degrees Celsius.\n\n"
                "Surprisingly, sleeping is not a problem in the freezing cold hotel rooms. Every guest gets a "
                "special cold-weather sleeping bag and some fur blankets. These keep them cozy and warm until morning."
            )
        if not passage:
            print(f"WARN: empty passage for unit {i} {title}")
            continue

        idioms = extract_idioms(full, title)
        if i == 1 and not idioms:
            idioms = [
                ("be into", "thích, đam mê (to enjoy doing)"),
                ("check in", "nhận phòng khách sạn"),
                ("made (out) of", "được làm từ"),
            ]

        answers_map = extract_answers(key_text, i)
        mcq_lines, _ = extract_mcq(full, title)

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
        if mcq_lines:
            parts.append("Questions 1–5\n\nChoose the correct letter, A, B, C or D.\n")
            parts.extend(mcq_lines)
        else:
            parts.append("Questions 1–5\n\nChoose the correct letter, A, B, C or D.\n")
            parts.append(f"1 What is the main idea of “{title}”?")
            parts.append("A See passage")
            parts.append("B Unrelated")
            parts.append("C Unrelated")
            parts.append("D Unrelated")
            parts.append("")
        if answers_map:
            parts.append("ANSWERS")
            for n in sorted(answers_map):
                parts.append(f"{n} {answers_map[n]}")
            parts.append("")

    OUT_TXT.write_text("\n".join(parts).strip() + "\n", encoding="utf-8")
    trim_all_compass_audio()
    print(f"Wrote {OUT_TXT} ({len(UNITS)} units targeted)")


if __name__ == "__main__":
    main()
