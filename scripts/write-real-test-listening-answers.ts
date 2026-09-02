#!/usr/bin/env npx tsx
/**
 * Extract answer key from `real test N qna.txt` → `real test N answers.txt`
 * (40 `qN` labels + 40 answers) for midterm / prepare pipelines.
 */
import fs from "node:fs";
import path from "node:path";
import { parseListeningQnaText, getListeningQnaPart } from "@/lib/listening/parse-listening-qna";

function main(): void {
  const n = Number.parseInt(process.argv[2] ?? "", 10);
  if (!Number.isFinite(n) || n < 1) {
    console.error("Usage: npx tsx scripts/write-real-test-listening-answers.ts <N>");
    process.exit(2);
  }

  const qnaPath = path.join(process.cwd(), "listening materials", `real test ${n} qna.txt`);
  const outPath = path.join(process.cwd(), "listening materials", `real test ${n} answers.txt`);
  if (!fs.existsSync(qnaPath)) {
    console.error("Missing", qnaPath);
    process.exit(1);
  }

  const parsed = parseListeningQnaText(fs.readFileSync(qnaPath, "utf8"));
  const answers: Record<string, string> = {};
  for (const part of [1, 2, 3, 4] as const) {
    const p = getListeningQnaPart(parsed, part);
    if (p) Object.assign(answers, p.answers);
  }

  /** Expand choose-N keys (`18&19&20` → ordered C/E/F) for flat midterm answer files. */
  for (const [key, value] of Object.entries(answers)) {
    if (!key.includes("&")) continue;
    const nums = key.split("&").map((raw) => Number.parseInt(raw, 10));
    const letters = value.split(/[,/]/).map((x) => x.trim()).filter(Boolean);
    if (nums.length === 0 || letters.length === 0) continue;
    for (let i = 0; i < nums.length; i += 1) {
      const q = nums[i];
      if (!Number.isFinite(q)) continue;
      const letter = letters[i] ?? letters[letters.length - 1];
      if (letter && !answers[String(q)]) answers[String(q)] = letter;
    }
  }

  const lines: string[] = [];
  for (let q = 1; q <= 40; q += 1) lines.push(`q${q}`);
  for (let q = 1; q <= 40; q += 1) {
    const value = answers[String(q)];
    if (!value) {
      console.error(`Missing answer for Q${q}`);
      process.exit(1);
    }
    lines.push(value);
  }

  fs.writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
  console.log("Wrote", outPath);
}

main();
