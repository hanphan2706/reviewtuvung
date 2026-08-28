/**
 * Heuristic keyword audit for Cambridge reading passage order.
 *
 * Prefer `npx tsx scripts/validate-reading-explanations.ts` — it checks curated
 * explanation evidence quotes against the passage (more reliable than keyword guesses).
 *
 * This script only flags non-decreasing paragraph indices from answer-key keywords;
 * it can produce false positives when quotes span paragraphs or keywords repeat.
 */
import fs from "node:fs";
import path from "node:path";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";
import { parsePassageExamSections } from "../lib/reading/parse-passage-questions";

const SEQUENTIAL_KINDS = new Set([
  "note-fill",
  "summary-fill",
  "table-fill",
  "tfng",
  "mcq-single",
]);

const NON_SEQUENTIAL_KINDS = new Set(["paragraph-match", "people-match", "choose-two"]);

function splitParagraphs(body: string) {
  const letterSplit = body.split(/(?=^[A-G]\s*\n)/m).filter((s) => /^[A-G]\s/m.test(s));
  if (letterSplit.length >= 3) {
    return letterSplit.map((p, i) => ({ index: i, letter: p.trim().charAt(0), text: p }));
  }
  const blocks = body.split(/\n\s*\n/).filter((b) => b.trim().length > 80);
  return blocks.map((text, i) => ({ index: i, letter: String(i), text }));
}

function norm(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findParaIndex(paragraphs: { index: number; text: string }[], needle: string) {
  const n = norm(needle);
  if (!n || n.length < 3) return null;
  for (let len = Math.min(n.length, 80); len >= 8; len -= 6) {
    const sub = n.slice(0, len);
    for (const p of paragraphs) {
      if (norm(p.text).includes(sub)) return p.index;
    }
  }
  return null;
}

function findTfngPara(paragraphs: { index: number; text: string }[], statement: string) {
  const words = norm(statement).split(" ").filter((w) => w.length > 4);
  if (words.length < 3) return null;
  let best: number | null = null;
  let bestScore = 0;
  for (const p of paragraphs) {
    const pt = norm(p.text);
    let score = 0;
    for (const w of words) if (pt.includes(w)) score++;
    if (score > bestScore) {
      bestScore = score;
      best = p.index;
    }
  }
  return bestScore >= Math.min(4, words.length) ? best : null;
}

let totalSections = 0;
let violations = 0;
let skipped = 0;
let verified = 0;
const samples: object[] = [];
const crossSectionSamples: object[] = [];

for (const [pilotId, fileName] of Object.entries(READING_RAW_FILES)) {
  if (!pilotId.startsWith("cam")) continue;
  const filePath = path.join("reading raw", fileName);
  if (!fs.existsSync(filePath)) continue;
  const raw = fs.readFileSync(filePath, "utf8");
  const passages = splitReadingPassages(raw);

  for (const passage of passages) {
    if (!passage.hasExamQuestions) continue;
    const paragraphs = splitParagraphs(passage.body);
    const sections = parsePassageExamSections(passage.questionsText);

    for (const section of sections) {
      if (NON_SEQUENTIAL_KINDS.has(section.kind)) continue;
      if (!SEQUENTIAL_KINDS.has(section.kind)) continue;
      totalSections++;

      const paraByQ: Record<number, number> = {};
      const nums = [...section.questionNums].sort((a, b) => a - b);

      for (const num of nums) {
        let pi: number | null = null;
        if (section.kind === "tfng") {
          const st = section.statements.find((s) => s.num === num);
          if (st) pi = findTfngPara(paragraphs, st.text);
        } else if (section.kind === "mcq-single") {
          const mcq = section.mcqQuestions.find((q) => q.num === num);
          const ans = passage.answerKey[num]?.trim();
          if (mcq && ans) {
            const opt = mcq.options.find((o) => o.letter === ans.toUpperCase());
            if (opt) pi = findParaIndex(paragraphs, opt.text);
            if (pi === null) pi = findTfngPara(paragraphs, mcq.text);
          }
        } else {
          const ans = passage.answerKey[num]?.trim();
          if (ans && !/^(TRUE|FALSE|NOT GIVEN|YES|NO|[A-G])$/i.test(ans)) {
            pi = findParaIndex(paragraphs, ans);
          }
        }
        if (pi !== null) paraByQ[num] = pi;
      }

      const mapped = nums.filter((n) => paraByQ[n] !== undefined);
      if (mapped.length < Math.max(2, Math.ceil(nums.length * 0.55))) {
        skipped++;
        continue;
      }
      verified++;

      for (let i = 1; i < mapped.length; i++) {
        const prev = mapped[i - 1];
        const cur = mapped[i];
        if (paraByQ[cur] < paraByQ[prev]) {
          violations++;
          if (samples.length < 12) {
            samples.push({
              pilotId,
              passage: passage.passage,
              section: section.title,
              kind: section.kind,
              prevQ: prev,
              prevP: paraByQ[prev],
              curQ: cur,
              curP: paraByQ[cur],
            });
          }
          break;
        }
      }
    }

    const seqSections = sections.filter(
      (s) => SEQUENTIAL_KINDS.has(s.kind) && !NON_SEQUENTIAL_KINDS.has(s.kind),
    );
    if (seqSections.length >= 2 && crossSectionSamples.length < 8) {
      const firstQPara: Array<{ q: number; p: number; kind: string }> = [];
      for (const section of seqSections) {
        const nums = [...section.questionNums].sort((a, b) => a - b);
        const first = nums[0];
        if (!first) continue;
        let pi: number | null = null;
        if (section.kind === "tfng") {
          const st = section.statements.find((s) => s.num === first);
          if (st) pi = findTfngPara(paragraphs, st.text);
        } else {
          const ans = passage.answerKey[first]?.trim();
          if (ans) pi = findParaIndex(paragraphs, ans);
        }
        if (pi !== null) firstQPara.push({ q: first, p: pi, kind: section.kind });
      }
      if (firstQPara.length >= 2) {
        crossSectionSamples.push({
          pilotId,
          passage: passage.passage,
          sections: firstQPara.sort((a, b) => a.q - b.q),
        });
      }
    }
  }
}

console.log("CAM sequential sections:", totalSections);
console.log("Verified (>=55% questions mapped):", verified);
console.log("Skipped (low mapping confidence):", skipped);
console.log("Violations (decreasing paragraph index):", violations);
if (samples.length) {
  console.log("\nSample violations:");
  for (const s of samples) console.log(JSON.stringify(s));
}
console.log("\nCross-section examples (first Q of each sequential block → para index):");
for (const s of crossSectionSamples) console.log(JSON.stringify(s));
