#!/usr/bin/env python3
"""Repair truncated Cam20 sync cues from whisper, then inject Q markers like Cam 18/19.

Usage:
  python3 scripts/inject-cam20-q-markers.py
  python3 scripts/inject-cam20-q-markers.py --dry-run
"""

from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SYNC_DIR = ROOT / "listening materials" / "sync"
TRANSCRIPT_DIR = ROOT / "listening materials" / "transcript"
QNA_DIR = ROOT / "listening materials"

OUTRO_RE = re.compile(
  r"\b(that is the end of part|you now have (one|a) minute|check your answers)\b",
  re.I,
)
EXISTING_Q_RE = re.compile(r"\bQ\d+(?:/\d+)?\b")
WORD_RE = re.compile(r"[A-Za-z0-9']+")
INSTRUCTION_RE = re.compile(
  r"\b("
  r"before you hear the rest|you have some time to look at questions|"
  r"now listen and\s*answer questions|answer questions \d|"
  r"you will hear|that is the end of"
  r")\b",
  re.I,
)

# Extra lexical anchors when answer text alone is too weak / OCR-mismatched.
EXTRA_HINTS: dict[tuple[int, int], dict[int, list[str]]] = {
  (1, 1): {
    5: ["Audley", "A-U-D-L-E-Y", "AUDLEY", "Baxter Bridge"],
    8: ["local products", "sourced within a short distance", "flown in from abroad"],
    9: ["30 pounds", "pounds ahead", "set lunch"],
    10: ["average", "tiny portions", "feeling hungry"],
  },
  (1, 2): {
    11: ["survive on the earth", "tens of thousands of years", "in the ground"],
    12: ["impressions on the clay", "scratches from tools", "scratches"],
    13: ["last longer than they do", "after their death"],
    14: ["stresses of everyday life", "concentration you need", "focus takes you away"],
    15: ["first time you will have tried", "nearly everyone"],
    16: ["tie it back", "provide aprons", "favourite t-shirt", "what you're wearing"],
    17: ["very hot oven", "fire the pottery", "domestic ovens", "fire pit"],
    18: ["very hot oven", "fire the pottery", "domestic ovens", "fire pit"],
    19: ["basic tools", "handle the clay", "spending money on them"],
    20: ["basic tools", "handle the clay", "odd names", "order names"],
  },
  (2, 1): {
    1: ["sometimes need a break", "need a break"],
    2: ["amount of time you spend", "how much time"],
    3: ["shower in the morning", "have a shower"],
    4: ["cope using money", "bit of a problem"],
    5: ["problems with her memory", "bad problems with her memory"],
    6: ["Lifting her", "lifting"],
    7: ["having a fall", "possibility of your mum having a fall"],
    8: ["taxi", "transport costs"],
    9: ["insurance"],
    10: ["under quite a bit of stress", "stress"],
  },
  (2, 2): {
    11: ["walking around the town centre", "giving advice"],
    12: ["concerts", "find their seats", "helping people find"],
    13: ["community groups", "cooperation between"],
    14: ["magazine", "what people think of events", "feedback"],
    15: ["lunches for retired", "short plays", "entertainment"],
    16: ["website", "publicity"],
    17: ["even more help is required for the science festival", "science festival"],
    18: ["get on well with other people", "behaving badly"],
    19: ["from the 9th onward", "following week from the 9th"],
    20: ["trip along the canal", "Dewhurst"],
  },
  (2, 3): {
    21: ["Population", "vague"],
    22: ["Health"],
    23: ["Economies", "statistics"],
    24: ["Culture", "interesting"],
    25: ["Poverty", "reliable"],
    26: ["don't have jobs", "more serious issue"],
    27: ["conferences", "buildings that need a lot of space"],
    28: ["dangerous materials", "not budgeted", "made safe"],
    29: ["renewable energy", "Masdar", "Mazda"],
    30: ["how far they've got", "Greenhill"],
  },
  (2, 4): {
    33: ["well-known chefs", "putting on their menus", "trending on social media"],
    39: ["price soared", "unaffordable", "demand peaked"],
  },
  (1, 4): {
    35: ["make a park there", "revitalise the banks"],
    36: ["various kinds of art"],
    37: ["deck chairs", "potted palm"],
    38: ["ferry"],
    39: ["cargo bikes"],
    40: ["drone"],
  },
  (3, 2): {
    11: ["national charity", "castle owners", "local council"],
    12: ["heavy rain", "metal detector", "wild rabbits"],
    13: ["old records", "bases of several", "unusual stones"],
    14: ["jewellery", "pottery", "animal bones"],
    15: ["palace", "outline of fields", "small huts"],
    16: ["museum", "television", "school visits"],
    17: ["bridge foundations", "bridge"],
    18: ["rubbish pit", "rubbish"],
    19: ["meeting hall"],
    20: ["fish pond", "pond"],
  },
  (3, 3): {
    21: ["No one else on the course", "doing the same as us"],
    22: ["don't hire people", "Contrary to what many people think"],
    23: ["breaking their agreement", "demand refunds", "riots"],
    24: ["parade around the streets", "beating drums"],
    25: ["18th century programmes were superior", "told the theatregoers so many things"],
    26: ["didn't go back", "over 25 years"],
    27: ["Ruey Blass", "decorative", "frame on the wall"],
    28: ["Man of La Mancha", "articles written by members"],
    29: ["Jane Shore", "Australia's first printing press"],
    30: ["Sailors Festival", "digitised collection", "200,000"],
  },
  (4, 2): {
    11: ["photo taken", "competition", "sunhats"],
    12: ["photo taken", "competition", "sunhats"],
    13: ["VIP tour", "360 cinema", "audio guide"],
    14: ["VIP tour", "360 cinema", "audio guide"],
    15: ["1870", "goalkeepers", "pay for the players"],
    16: ["1874"],
    17: ["1875"],
    18: ["1877"],
    19: ["1878", "lights for matches"],
    20: ["1880", "length of a game"],
  },
  (4, 3): {
    21: ["never occurred to me", "concentration", "spatial awareness"],
    22: ["never occurred to me", "concentration", "spatial awareness"],
    23: ["lights up if you press too hard", "grid paper", "space the letters"],
    24: ["lights up if you press too hard", "grid paper", "space the letters"],
    25: ["more willing to have a go", "dyslexia"],
    26: ["cursive is more difficult", "joining up letters"],
    27: ["Marks are definitely affected", "judged on their handwriting"],
    28: ["write by hand on digital devices", "can't see that changing"],
    29: ["awful spelling", "punctuation is really inconsistent"],
    30: ["miss writing by hand", "hardly ever write anything"],
  },
}

# Strong phrase overrides (preferred over fuzzy scoring). Key = (test, part, primary_q).
FORCE_PHRASES: dict[tuple[int, int, int], list[str]] = {
  (1, 3, 21): ["move around for work", "miles away from their family"],
  (1, 3, 23): ["weakened immune system", "data on that is sound"],
  (1, 3, 25): ["not really useful when it comes to solving", "More evidence is needed"],
  (1, 3, 27): ["no available diagnosis or effective treatment"],
  (1, 3, 28): ["too embarrassed to admit"],
  (1, 3, 29): ["talking to strangers", "shop assistants and bar staff"],
  (1, 3, 30): ["never choose to go on holiday alone", "isn't something I actually like"],
  (2, 1, 1): ["sometimes need a break"],
  (2, 1, 2): ["amount of time you spend looking after"],
  (2, 1, 3): ["shower in the morning"],
  (2, 1, 4): ["cope using money"],
  (2, 1, 5): ["problems with her memory"],
  (2, 1, 6): ["Lifting her"],
  (2, 1, 7): ["having a fall"],
  (2, 1, 8): ["taxi to take your mother"],
  (2, 1, 9): ["claim for the insurance"],
  (2, 1, 10): ["under quite a bit of stress"],
  (2, 2, 11): ["walking around the town centre"],
  (2, 2, 12): ["get everyone in the audience to the right place", "helping people find their seats", "wrong section of the hall"],
  (2, 2, 13): ["groups can help each other", "help each other"],
  (2, 2, 14): ["what people think of events", "summary to the editors"],
  (2, 2, 15): ["short plays", "clubs for retired people"],
  (2, 2, 16): ["website"],
  (2, 2, 17): ["even more help is required for the science festival"],
  (2, 2, 18): ["get on well with other people"],
  (2, 2, 19): ["from the 9th onward"],
  (2, 2, 20): ["trip along the canal"],
  (2, 3, 21): ["Population", "too vague", "fascinating"],
  (2, 3, 22): ["Health"],
  (2, 3, 23): ["taken off the syllabus", "might be best to avoid"],
  (2, 3, 24): ["didn't give any useful examples", "also general"],
  (2, 3, 25): ["deliberately manipulated", "figures relating to poverty"],
  (2, 3, 26): ["don't have jobs"],
  (2, 3, 27): ["buildings that need a lot of space, like for conferences"],
  (2, 3, 28): ["often not budgeted for"],
  (2, 3, 29): ["depend entirely on renewable energy"],
  (2, 3, 30): ["how far they've got with it"],
  (3, 2, 11): ["asked to join the project by NHA", "charity which sets up projects"],
  (3, 2, 12): ["after a rainstorm washed", "walker found it on the ground"],
  (3, 2, 13): ["old maps and documents", "Just by chance, the team found"],
  (3, 2, 14): ["still waiting to uncover", "brooches and other jewellery", "broaches and other"],
  (3, 2, 15): ["borders of an ancient field", "outline of fields", "other side of the river"],
  (3, 2, 16): ["guided tours for school groups", "school groups this autumn"],
  (3, 2, 17): ["foundations of an ancient bridge"],
  (3, 2, 18): ["rubbish pit"],
  (3, 2, 19): ["meeting hall"],
  (3, 2, 20): ["fish pond"],
  (3, 3, 21): ["No one else on the course is doing the same as us"],
  (3, 3, 22): ["theatres don't hire people to do the programmes"],
  (3, 3, 23): ["breaking their agreement with the audience"],
  (3, 3, 24): ["parade around the streets"],
  (3, 3, 25): ["told the theatregoers so many things"],
  (3, 3, 26): ["didn't go back to being more than one sheet"],
  (3, 3, 27): ["frame on the wall"],
  (3, 3, 28): ["articles written by members of the theatre company"],
  (3, 3, 29): ["Australia's first printing press"],
  (3, 3, 30): ["digitised collection of programmes"],
  (4, 2, 15): ["guard the goal", "player whose role it was to guard"],
  (4, 2, 16): ["swap ends at half time", "send players off"],
  (4, 2, 17): ["solid crossbar", "In 1875 that tape was replaced"],
  (4, 2, 18): ["limit of 90 minutes", "set a limit of 90"],
  (4, 2, 19): ["electric lamps were installed", "played in the evenings"],
  (4, 2, 20): ["charge fans for admission"],
  (4, 3, 21): ["never associated spatial awareness", "never occurred to me before"],
  (4, 3, 23): ["pens that lights up if you press too hard", "grid paper"],
  (4, 3, 25): ["more willing to have a go"],
  (4, 3, 26): ["cursive is more difficult to learn"],
  (4, 3, 27): ["Marks are definitely affected"],
  (4, 3, 28): ["write by hand on digital devices"],
  (4, 3, 29): ["awful spelling", "punctuation is really inconsistent"],
  (4, 3, 30): ["miss writing by hand", "hardly ever write anything"],
  (4, 4, 39): ["hit pans with a metal spoon", "resulting noise"],
  (4, 4, 40): ["use a combination for them to have any effect"],
  (1, 4, 35): ["make a park there"],
}

def load_json(path: Path) -> dict:
  return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: dict) -> None:
  path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def load_answer_key(test: int) -> tuple[dict[int, str], set[tuple[int, int]]]:
  text = (QNA_DIR / f"cam 20 test {test} qna.txt").read_text(encoding="utf-8")
  idx = text.lower().rfind("answer key")
  section = text[idx:] if idx >= 0 else text
  answers: dict[int, str] = {}
  pair_keys: set[tuple[int, int]] = set()
  for m in re.finditer(r"(?m)^(\d{1,2})(?:&(\d{1,2}))?\s+(.+)$", section):
    a = int(m.group(1))
    b = m.group(2)
    val = m.group(3).strip()
    answers[a] = val
    if b:
      bb = int(b)
      answers[bb] = val
      pair_keys.add((a, bb))
  return answers, pair_keys


def parse_qna_options(test: int) -> dict[int, dict[str, str]]:
  """Map question number -> {letter: option text} for MCQ / choose-two / matching banks."""
  text = (QNA_DIR / f"cam 20 test {test} qna.txt").read_text(encoding="utf-8")
  lines = text.splitlines()
  by_q: dict[int, dict[str, str]] = defaultdict(dict)
  i = 0
  while i < len(lines):
    line = lines[i].strip()
    range_m = re.match(r"^Questions?\s+(\d+)\s*(?:and|&|–|-)\s*(\d+)\s*$", line, re.I)
    single_m = re.match(r"^Questions?\s+(\d+)\s*$", line, re.I)
    q_nums: list[int] = []
    if range_m:
      q_nums = list(range(int(range_m.group(1)), int(range_m.group(2)) + 1))
    elif single_m:
      q_nums = [int(single_m.group(1))]
    else:
      item_m = re.match(r"^(\d{1,2})\s{1,}(.+)$", line)
      if item_m and int(item_m.group(1)) <= 40:
        # matching item line; options already collected in bank for nearby questions
        pass
      i += 1
      continue

    # Collect option bank A–I until next Questions/PART/Answer
    bank: dict[str, str] = {}
    j = i + 1
    while j < len(lines):
      row = lines[j].strip()
      if re.match(r"^Questions?\s+\d+", row, re.I) or re.match(r"^PART\s+\d+", row, re.I):
        break
      if re.match(r"^Answer key", row, re.I):
        break
      opt = re.match(r"^([A-I])\s{1,}(.+)$", row)
      if opt:
        bank[opt.group(1).upper()] = opt.group(2).strip()
      j += 1

    # Also capture "11 Heather..." style single MCQ with inline options
    # For standard blocks, attach bank to all q_nums in range.
    for q in q_nums:
      by_q[q].update(bank)

    # Per-question prompts with own A/B/C under "11 ..."
    k = i + 1
    while k < j:
      qm = re.match(r"^(\d{1,2})\s{2,}(.+)$", lines[k].strip())
      if qm:
        qn = int(qm.group(1))
        opts: dict[str, str] = {}
        t = k + 1
        while t < j:
          om = re.match(r"^([A-C])\s{1,}(.+)$", lines[t].strip())
          if not om:
            if re.match(r"^(\d{1,2})\s{2,}", lines[t].strip()) or re.match(
              r"^Questions?", lines[t].strip(), re.I
            ):
              break
            t += 1
            continue
          opts[om.group(1).upper()] = om.group(2).strip()
          t += 1
        if opts:
          by_q[qn].update(opts)
        k = t
        continue
      k += 1

    i = j
  return by_q


def answer_variants(ans: str) -> list[str]:
  out: list[str] = []
  for piece in re.split(r"[/|,]", ans):
    p = piece.strip()
    if not p:
      continue
    out.append(p)
    out.append(re.sub(r"^(a|an|the)\s+", "", p, flags=re.I))
  # numbers written as digits
  out.extend(re.findall(r"\d+(?:\.\d+)?", ans))
  # unique preserve order
  seen: set[str] = set()
  uniq: list[str] = []
  for x in out:
    key = x.lower()
    if key in seen or len(x) < 1:
      continue
    seen.add(key)
    uniq.append(x)
  return uniq


def significant_tokens(text: str) -> list[str]:
  stop = {
    "the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "with", "that",
    "this", "it", "is", "are", "was", "were", "be", "by", "as", "at", "from",
    "their", "they", "you", "your", "about", "into", "more", "most", "some",
    "than", "then", "what", "which", "when", "where", "who", "how", "will",
    "can", "may", "not", "only", "also", "very", "just", "have", "has", "had",
  }
  tokens = [t.lower() for t in WORD_RE.findall(text)]
  return [t for t in tokens if len(t) >= 4 and t not in stop]


def cue_search_blob(cue: dict) -> str:
  return (cue.get("text") or "").lower()


def strip_markers(text: str) -> str:
  return re.sub(r"\s*" + EXISTING_Q_RE.pattern, "", text or "").rstrip()


def find_force_cue_index(cues: list[dict], phrases: list[str], min_start: float) -> int | None:
  best_i = None
  best_len = -1
  for phrase in phrases:
    p = phrase.lower().strip()
    if not p:
      continue
    for i, cue in enumerate(cues):
      if cue.get("preAudio"):
        continue
      start = float(cue.get("start") or 0)
      if start + 0.5 < min_start:
        continue
      blob = strip_markers(cue.get("text") or "")
      if INSTRUCTION_RE.search(blob):
        continue
      if p in blob.lower():
        # Prefer fuller sentences over truncated ASR fragments.
        if len(blob) > best_len:
          best_len = len(blob)
          best_i = i
    if best_i is not None:
      return best_i
  return None


def find_best_cue_index(
  cues: list[dict],
  needles: list[str],
  min_start: float,
  preamble: float,
) -> int | None:
  """Prefer cues after min_start / preamble; score by needle hits."""
  best_i = None
  best_score = 0
  for i, cue in enumerate(cues):
    if cue.get("preAudio"):
      continue
    start = float(cue.get("start") or 0)
    if start < max(min_start - 1.0, preamble - 5.0):
      continue
    raw = strip_markers(cue.get("text") or "")
    if INSTRUCTION_RE.search(raw):
      continue
    blob = raw.lower()
    score = 0
    for needle in needles:
      n = needle.lower().strip()
      if not n:
        continue
      if len(n) <= 2 and not n.isdigit():
        continue
      if n in blob:
        score += 4 if len(n) >= 10 else (3 if len(n) >= 6 else 2)
        if re.search(rf"\b{re.escape(n)}\b", blob):
          score += 1
    if score > best_score:
      best_score = score
      best_i = i
  if best_score < 3:
    return None
  return best_i


def append_marker(text: str, marker: str) -> str:
  existing = EXISTING_Q_RE.findall(text or "")
  base = strip_markers(text or "").rstrip()
  markers = list(dict.fromkeys([*existing, marker]))
  # Keep paired form if present; drop singles covered by a pair.
  covered: set[int] = set()
  for m in markers:
    if "/" in m:
      a, b = m[1:].split("/", 1)
      covered.add(int(a))
      covered.add(int(b))
  final: list[str] = []
  for m in markers:
    if "/" in m:
      final.append(m)
      continue
    qn = int(m[1:])
    if qn in covered:
      continue
    final.append(m)
  if not final:
    return base
  return f"{base} {' '.join(final)}"


def _norm_space(s: str) -> str:
  return re.sub(r"\s+", " ", (s or "").strip().lower())


def repair_sync_from_whisper(part_id: str, sync: dict, whisper: dict) -> tuple[dict, bool]:
  """Insert whisper segments whose text is missing from sync (fixes truncated Cam20 tails/middles)."""
  cues = list(sync.get("cues") or [])
  if not cues:
    return sync, False
  segments = [s for s in (whisper.get("segments") or []) if (s.get("text") or "").strip()]
  if not segments:
    return sync, False

  cue_blobs = [_norm_space(c.get("text") or "") for c in cues]

  def already_present(text: str) -> bool:
    n = _norm_space(text)
    if len(n) < 12:
      return any(n in blob for blob in cue_blobs)
    head = n[:48]
    return any(head in blob or n in blob for blob in cue_blobs)

  preamble = float(sync.get("preambleSeconds") or 80)
  added = 0
  next_id = 1
  for c in cues:
    m = re.match(r"cue-(\d+)", c.get("id") or "")
    if m:
      next_id = max(next_id, int(m.group(1)) + 1)

  for seg in segments:
    start = float(seg.get("start") or 0)
    if start < max(60.0, preamble - 40):
      continue
    text = (seg.get("text") or "").strip()
    if not text or OUTRO_RE.search(text):
      continue
    if already_present(text):
      continue
    cues.append(
      {
        "id": f"cue-{next_id}",
        "speaker": None,
        "text": text,
        "start": start,
        "end": float(seg.get("end") or start),
        "preAudio": False,
      }
    )
    cue_blobs.append(_norm_space(text))
    next_id += 1
    added += 1

  if not added:
    return sync, False

  # Fix stretched last original cue: if it ends at file duration but text is short, clamp
  cues.sort(key=lambda c: float(c.get("start") or 0))
  duration = float(sync.get("durationSeconds") or 0)
  for i, cue in enumerate(cues[:-1]):
    nxt = float(cues[i + 1].get("start") or 0)
    end = float(cue.get("end") or 0)
    if end - float(cue.get("start") or 0) > 35 and end > nxt:
      cue["end"] = max(float(cue.get("start") or 0) + 0.4, nxt - 0.05)
  if cues and duration:
    last = cues[-1]
    if float(last.get("end") or 0) > duration:
      last["end"] = duration

  sync["cues"] = cues
  return sync, True

def paired_marker(q: int, answers: dict[int, str]) -> str | None:
  """If answer key used q&q+1 with same value, emit Qn/(n+1)."""
  # detect from original key file pattern via shared identical multi answers nearby
  return None


def build_needles(
  test: int,
  part: int,
  q: int,
  ans: str,
  options: dict[str, str],
) -> list[str]:
  needles: list[str] = []
  needles.extend(EXTRA_HINTS.get((test, part), {}).get(q, []))

  # Letter answer(s) -> option text(s)
  letters = re.findall(r"[A-I]", ans.upper())
  if letters and options:
    for L in letters:
      if L in options:
        needles.append(options[L])
        needles.extend(significant_tokens(options[L])[:4])

  # Fill / short answers
  if not (len(letters) >= 1 and re.fullmatch(r"[A-I,\s]+", ans.replace("&", ""))):
    needles.extend(answer_variants(ans))

  # Dedup
  seen: set[str] = set()
  out: list[str] = []
  for n in needles:
    k = n.lower().strip()
    if not k or k in seen:
      continue
    seen.add(k)
    out.append(n.strip())
  return out


def detect_pairs(answers: dict[int, str], pair_keys: set[tuple[int, int]] | None = None) -> dict[int, str]:
  """Map q -> 'Qn/(n+1)' only for true choose-two / & keys — never consecutive identical single letters."""
  pairs: dict[int, str] = {}
  if pair_keys:
    for a, b in pair_keys:
      marker = f"Q{a}/{b}"
      pairs[a] = marker
      pairs[b] = marker
  qs = sorted(answers)
  for q in qs:
    if q in pairs or (q - 1) in pairs:
      continue
    if q + 1 not in answers or answers[q] != answers[q + 1]:
      continue
    val = answers[q]
    # Choose-two answers look like "A, C" / "B,D" — not a lone "A"
    if re.search(r"[A-I]", val) and "," in val.replace(" ", ""):
      pairs[q] = f"Q{q}/{q + 1}"
      pairs[q + 1] = f"Q{q}/{q + 1}"
  return pairs


def inject_markers_for_part(test: int, part: int, dry_run: bool) -> dict:
  part_id = f"cam20-t{test}-p{part}"
  sync_path = SYNC_DIR / f"{part_id}.sync.json"
  whisper_path = SYNC_DIR / f"{part_id}.whisper-words.json"
  sync = load_json(sync_path)
  whisper = load_json(whisper_path) if whisper_path.exists() else {"segments": []}

  repaired = False
  sync, repaired = repair_sync_from_whisper(part_id, sync, whisper)

  # Always re-place from a clean slate so re-runs fix bad markers.
  for cue in sync.get("cues") or []:
    if EXISTING_Q_RE.search(cue.get("text") or ""):
      cue["text"] = strip_markers(cue.get("text") or "")

  answers, pair_keys = load_answer_key(test)
  options_by_q = parse_qna_options(test)
  pairs = detect_pairs(answers, pair_keys)

  q_lo = (part - 1) * 10 + 1
  q_hi = part * 10
  cues = sync["cues"]
  preamble = float(sync.get("preambleSeconds") or 80)
  placed: dict[int, str] = {}
  missing: list[str] = []
  last_start = preamble - 8.0

  handled: set[int] = set()
  for q in range(q_lo, q_hi + 1):
    if q in handled or q not in answers:
      continue
    ans = answers[q]
    marker = pairs.get(q) or f"Q{q}"
    qs = [q]
    if marker.startswith("Q") and "/" in marker:
      a, b = marker[1:].split("/", 1)
      qs = [int(a), int(b)]
      handled.update(qs)
    else:
      handled.add(q)

    primary = qs[0]
    idx = find_force_cue_index(
      cues,
      FORCE_PHRASES.get((test, part, primary), []),
      last_start,
    )
    if idx is None:
      needles = build_needles(test, part, q, ans, options_by_q.get(q, {}))
      if len(qs) > 1:
        for qq in qs:
          needles.extend(
            build_needles(test, part, qq, answers.get(qq, ans), options_by_q.get(qq, {}))
          )
      idx = find_best_cue_index(cues, needles, last_start, preamble)

    if idx is None:
      missing.append(f"{marker}={ans}")
      continue

    cues[idx]["text"] = append_marker(cues[idx].get("text") or "", marker)
    last_start = float(cues[idx].get("start") or last_start)
    for qq in qs:
      placed[qq] = marker

  sync["cues"] = cues
  if not dry_run:
    save_json(sync_path, sync)

  return {
    "partId": part_id,
    "repaired": repaired,
    "placed": len(placed),
    "missing": missing,
    "placedQs": sorted(placed),
  }


def sync_markers_into_cleaned(test: int, dry_run: bool) -> None:
  """Best-effort: append markers into cleaned transcript by matching cue texts."""
  cleaned_path = TRANSCRIPT_DIR / f"cam20-test{test}.cleaned.txt"
  if not cleaned_path.exists():
    return
  text = cleaned_path.read_text(encoding="utf-8")
  original = text
  for part in range(1, 5):
    part_id = f"cam20-t{test}-p{part}"
    sync = load_json(SYNC_DIR / f"{part_id}.sync.json")
    for cue in sync.get("cues") or []:
      raw = (cue.get("text") or "").strip()
      markers = EXISTING_Q_RE.findall(raw)
      if not markers:
        continue
      base = EXISTING_Q_RE.sub("", raw).strip()
      base = re.sub(r"\s+", " ", base)
      if len(base) < 20:
        continue
      # Find a unique-ish snippet without markers in cleaned
      snippet = base[:80]
      # Try replace first occurrence of snippet line-ish
      if snippet in text and not any(m in text[text.find(snippet) : text.find(snippet) + len(base) + 20] for m in markers):
        # append markers after matching sentence end near snippet
        pos = text.find(snippet)
        # extend to sentence end
        end = pos + len(snippet)
        while end < len(text) and text[end] not in ".\n":
          end += 1
        if end < len(text) and text[end] == ".":
          end += 1
        chunk = text[pos:end]
        if EXISTING_Q_RE.search(chunk):
          continue
        marked = chunk.rstrip() + " " + " ".join(dict.fromkeys(markers))
        text = text[:pos] + marked + text[end:]
  if text != original and not dry_run:
    cleaned_path.write_text(text, encoding="utf-8")


def main() -> None:
  parser = argparse.ArgumentParser()
  parser.add_argument("--dry-run", action="store_true")
  parser.add_argument("--test", type=int, action="append")
  args = parser.parse_args()
  tests = args.test or [1, 2, 3, 4]

  total_missing: list[str] = []
  for test in tests:
    print(f"\n=== Cam20 Test {test} ===")
    for part in range(1, 5):
      result = inject_markers_for_part(test, part, dry_run=args.dry_run)
      flag = " [repaired whisper tail]" if result["repaired"] else ""
      print(
        f"{result['partId']}: placed={result['placed']}/10{flag}"
        + (f" missing={result['missing']}" if result["missing"] else "")
      )
      for m in result["missing"]:
        total_missing.append(f"{result['partId']} {m}")
    if not args.dry_run:
      sync_markers_into_cleaned(test, dry_run=False)

  if total_missing:
    print("\nUNPLACED:")
    for m in total_missing:
      print(" -", m)
  else:
    print("\nAll Q markers placed.")


if __name__ == "__main__":
  main()
