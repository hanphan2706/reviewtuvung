import fs from "node:fs";
import path from "node:path";
import { buildReadingExamPayload } from "../lib/reading/build-exam-html";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import type { ReadingPilotId } from "../lib/reading/hub-articles";
import { splitReadingPassages } from "../lib/reading/split-passages";
import { validatePassageExamSections } from "../lib/reading/validate-exam-sections";

const PILOT_LABELS: Record<ReadingPilotId, string> = {
  "cam20-test1": "Cambridge 20 · Test 1",
  "cam20-test2": "Cambridge 20 · Test 2",
  "cam20-test3": "Cambridge 20 · Test 3",
  "cam20-test4": "Cambridge 20 · Test 4",
  "reading-challenge-1": "Compass Publishing · RC1",
  "reading-challenge-2": "Compass Publishing · RC2",
};

let failed = 0;

for (const [pilotId, fileName] of Object.entries(READING_RAW_FILES)) {
  const filePath = path.join(process.cwd(), "reading raw", fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`SKIP ${pilotId}: missing ${fileName}`);
    continue;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const passages = splitReadingPassages(raw);

  for (const passage of passages) {
    if (!passage.hasExamQuestions) continue;

    const issues = validatePassageExamSections(passage);
    for (const issue of issues) {
      console.error(`FAIL ${pilotId} P${issue.passage} ${issue.section}: ${issue.message}`);
      failed += 1;
    }

    const payload = buildReadingExamPayload(pilotId as ReadingPilotId, passage, PILOT_LABELS[pilotId as ReadingPilotId]);
    if (!payload) {
      console.error(`FAIL ${pilotId} P${passage.passage}: buildReadingExamPayload null`);
      failed += 1;
      continue;
    }

    const missingAnswers = payload.questionNums.filter((n) => !passage.answerKey[n]?.trim());
    if (missingAnswers.length > 0) {
      console.error(
        `FAIL ${pilotId} P${passage.passage}: thiếu đáp án cho câu ${missingAnswers.join(", ")}`,
      );
      failed += 1;
    }

    if (issues.length > 0) {
      continue;
    }

    const keyCount = payload.questionNums.filter((n) => passage.answerKey[n]?.trim()).length;
    console.log(
      `OK ${pilotId} P${passage.passage} ${passage.title} — ${payload.questionNums.length} câu, ${keyCount} đáp án`,
    );
  }
}

if (failed > 0) {
  process.exit(1);
}

console.log("All reading exams verified.");
