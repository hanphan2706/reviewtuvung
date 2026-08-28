/**
 * Heuristic audit: TFNG/YNNG evidence quote vs paragraph where the statement topic
 * most likely appears. Flags possible "explain sai chỗ" like cam12-test4 P3 Q34–35.
 *
 * Run: npx tsx scripts/audit-explanation-paragraph-alignment.ts --cam
 */
import fs from "node:fs";
import path from "node:path";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { loadReadingExamExplanations } from "../lib/reading/load-reading-explanations";
import { parsePassageExamSections } from "../lib/reading/parse-passage-questions";
import { splitReadingPassages } from "../lib/reading/split-passages";
import {
  findQuoteParagraph,
  locateExplanationInPassage,
  splitPassageParagraphs,
} from "../lib/reading/validate-reading-explanation-order";

const camOnly = process.argv.includes("--cam");
const maxGap = Number.parseInt(process.argv.find((a) => a.startsWith("--gap="))?.split("=")[1] ?? "1", 10);

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function bestParagraphForText(
  paragraphs: ReturnType<typeof splitPassageParagraphs>,
  text: string,
): { letter: string; index: number; score: number } | null {
  const words = norm(text)
    .split(" ")
    .filter((w) => w.length > 4);
  if (words.length < 3) return null;

  let best: { letter: string; index: number; score: number } | null = null;
  for (const p of paragraphs) {
    const pt = norm(p.text);
    let score = 0;
    for (const w of words) {
      if (pt.includes(w)) score++;
    }
    if (!best || score > best.score) {
      best = { letter: p.letter, index: p.index, score };
    }
  }
  const threshold = Math.min(4, Math.ceil(words.length * 0.15));
  return best && best.score >= threshold ? best : null;
}

type Suspect = {
  pilotId: string;
  passage: number;
  question: number;
  answer: string;
  statement: string;
  topicPara: string;
  evidencePara: string;
  gap: number;
  reason: string;
};

const suspects: Suspect[] = [];

const explanationDir = path.join(process.cwd(), "reading explanations");
const files = fs
  .readdirSync(explanationDir)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .sort();

for (const file of files) {
  const pilotId = file.replace(/\.json$/, "");
  if (camOnly && !pilotId.startsWith("cam")) continue;

  const rawFile = READING_RAW_FILES[pilotId];
  if (!rawFile) continue;
  const rawPath = path.join(process.cwd(), "reading raw", rawFile);
  if (!fs.existsSync(rawPath)) continue;

  const explanations = loadReadingExamExplanations(pilotId);
  if (!explanations?.questions) continue;

  const passages = splitReadingPassages(fs.readFileSync(rawPath, "utf8"));

  for (const passage of passages) {
    if (!passage.hasExamQuestions) continue;
    const sections = parsePassageExamSections(passage.questionsText);
    const paragraphs = splitPassageParagraphs(passage.body);

    for (const section of sections) {
      if (section.kind !== "tfng") continue;

      for (const st of section.statements) {
        const item = explanations.questions[String(st.num)];
        if (!item?.evidence?.quoteEn?.trim()) continue;

        const topic = bestParagraphForText(paragraphs, st.text);
        const evidence = locateExplanationInPassage(paragraphs, item);
        if (!topic || !evidence) continue;

        const gap = Math.abs(topic.index - evidence.index);
        if (gap <= maxGap) continue;

        let reason = `Topic của câu hỏi gợi ý đoạn ${topic.letter}, evidence quote ở ${evidence.letter} (gap=${gap})`;
        if (item.answer === "NOT GIVEN" || item.answer === "NOT GIVEN") {
          reason += " — NOT GIVEN nhưng quote có thể không phải đoạn liên quan trực tiếp";
        }

        suspects.push({
          pilotId,
          passage: passage.passage,
          question: st.num,
          answer: item.answer,
          statement: st.text.slice(0, 90),
          topicPara: topic.letter,
          evidencePara: evidence.letter,
          gap,
          reason,
        });
      }
    }
  }
}

suspects.sort((a, b) => b.gap - a.gap || a.pilotId.localeCompare(b.pilotId));

console.log(`TFNG/YNNG paragraph-alignment suspects (gap > ${maxGap}): ${suspects.length}\n`);
for (const s of suspects) {
  console.log(
    `${s.pilotId} P${s.passage} Q${s.question} [${s.answer}] topic=${s.topicPara} evidence=${s.evidencePara} gap=${s.gap}`,
  );
  console.log(`  "${s.statement}…"`);
}

console.log("\n---");
console.log("Lưu ý: heuristic — cần review tay. Không phải mọi gap>1 đều sai (topic có thể trải nhiều đoạn).");
