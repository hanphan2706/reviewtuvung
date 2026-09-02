#!/usr/bin/env python3
"""Remove meaningless auto-generated exercises from eviu-elementary-book-data.json."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "lib/vocabulary/units/eviu-elementary-book-data.json"
MAX_EXERCISES = 20

MEANINGLESS_PROMPT = re.compile(r"^___\s*\(\d+\.\d+\)\s*$")
AK_JUNK_ANSWER = re.compile(r"\d+\s+\w+")  # e.g. "groom 6 funeral"
NON_WORD_ANSWER = re.compile(r"English Vocabulary in Use", re.I)


def is_meaningful_fill(exercise: dict) -> bool:
    prompt = (exercise.get("prompt") or "").strip()
    answer = (exercise.get("answer") or "").strip()
    if MEANINGLESS_PROMPT.match(prompt):
        return False
    if NON_WORD_ANSWER.search(answer):
        return False
    if AK_JUNK_ANSWER.search(answer) and " " in answer and len(answer.split()) >= 3:
        return False
    if len(prompt.replace("___", "").strip()) < 8:
        return False
    return True


def sanitize_exercises(exercises: list) -> list:
    kept: list = []
    for ex in exercises:
        if ex.get("type") == "fill-blank" and not is_meaningful_fill(ex):
            continue
        kept.append(ex)
    return kept[:MAX_EXERCISES]


def main() -> None:
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    curated_units = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}
    removed_total = 0

    for unit in data["units"]:
        unit_number = unit["unitNumber"]
        if unit_number in curated_units:
            continue
        before = len(unit["exercises"])
        unit["exercises"] = sanitize_exercises(unit["exercises"])
        removed_total += before - len(unit["exercises"])

    JSON_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Sanitized {JSON_PATH.name}: removed {removed_total} meaningless exercises from units 16+.")


if __name__ == "__main__":
    main()
