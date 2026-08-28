import fs from "node:fs";
import path from "node:path";
import { buildReadingExamPayload } from "../lib/reading/build-exam-html";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import type { ReadingPilotId } from "../lib/reading/hub-articles";
import { splitReadingPassages } from "../lib/reading/split-passages";
import { validatePassageExamSections } from "../lib/reading/validate-exam-sections";

const PILOT_LABELS: Record<ReadingPilotId, string> = {
  "cam17-test4": "Cambridge 17 · Test 4",
  "cam17-test3": "Cambridge 17 · Test 3",
  "cam17-test2": "Cambridge 17 · Test 2",
  "cam17-test1": "Cambridge 17 · Test 1",
  "cam19-test4": "Cambridge 19 · Test 4",
  "cam19-test3": "Cambridge 19 · Test 3",
  "cam19-test2": "Cambridge 19 · Test 2",
  "cam19-test1": "Cambridge 19 · Test 1",
  "cam18-test4": "Cambridge 18 · Test 4",
  "cam18-test3": "Cambridge 18 · Test 3",
  "cam18-test2": "Cambridge 18 · Test 2",
  "cam18-test1": "Cambridge 18 · Test 1",
  "cam20-test1": "Cambridge 20 · Test 1",
  "cam20-test2": "Cambridge 20 · Test 2",
  "cam20-test3": "Cambridge 20 · Test 3",
  "cam20-test4": "Cambridge 20 · Test 4",
  "cam16-test1": "Cambridge 16 · Test 1",
  "cam16-test2": "Cambridge 16 · Test 2",
  "cam16-test3": "Cambridge 16 · Test 3",
  "cam16-test4": "Cambridge 16 · Test 4",
  "cam15-test1": "Cambridge 15 · Test 1",
  "cam15-test2": "Cambridge 15 · Test 2",
  "cam15-test3": "Cambridge 15 · Test 3",
  "cam15-test4": "Cambridge 15 · Test 4",
  "cam12-test1": "Cambridge 12 · Test 1",
  "cam12-test2": "Cambridge 12 · Test 2",
  "cam12-test3": "Cambridge 12 · Test 3",
  "cam12-test4": "Cambridge 12 · Test 4",
  "cam13-test1": "Cambridge 13 · Test 1",
  "cam13-test2": "Cambridge 13 · Test 2",
  "cam13-test3": "Cambridge 13 · Test 3",
  "cam13-test4": "Cambridge 13 · Test 4",
  "cam14-test1": "Cambridge 14 · Test 1",
  "cam14-test2": "Cambridge 14 · Test 2",
  "cam14-test3": "Cambridge 14 · Test 3",
  "cam14-test4": "Cambridge 14 · Test 4",
  "cam21-test1": "Cambridge 21 · Test 1",
  "cam21-test2": "Cambridge 21 · Test 2",
  "cam21-test3": "Cambridge 21 · Test 3",
  "cam21-test4": "Cambridge 21 · Test 4",
  "reading-challenge-1": "Compass Publishing · RC1",
  "reading-challenge-2": "Compass Publishing · RC2",
  "reading-challenge-3": "Compass Publishing · RC3",
  "de-thi-that-1": "Đề thi thật IELTS 1",
  "de-thi-that-2": "Đề thi thật IELTS 2",
  "de-thi-that-3": "Đề thi thật IELTS 3",
  "de-thi-that-4": "Đề thi thật IELTS 4",
  "de-thi-that-5": "Đề thi thật IELTS 5",
  "de-thi-that-6": "Đề thi thật IELTS 6",
  "de-thi-that-7": "Đề thi thật IELTS 7",
  "de-thi-that-8": "Đề thi thật IELTS 8",
  "de-thi-that-9": "Đề thi thật IELTS 9",
  "de-thi-that-10": "Đề thi thật IELTS 10",
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
