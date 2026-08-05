/**
 * Smoke-check curated IELTS flow step-4 questions.
 *
 *   npx tsx scripts/verify-ielts-flow-details.ts
 */
import { getIeltsFlowLessonContent } from "@/lib/listening/ielts-flow-content-registry";
import { LISTENING_CAMBRIDGE_TESTS, listeningPartIdForTest } from "@/lib/listening/ielts-test-catalog";

function assert(condition: unknown, message: string): void {
  if (!condition) throw new Error(`FAIL: ${message}`);
}

function main(): void {
  let checked = 0;
  for (const test of LISTENING_CAMBRIDGE_TESTS) {
    for (const part of [1, 2, 3, 4]) {
      const partId = listeningPartIdForTest(test.testId, part);
      const lesson = getIeltsFlowLessonContent(partId);
      if (!lesson) continue;
      checked += 1;

      const questions = lesson.detailQuestions.map((item) => item.questionEn.trim());
      assert(questions.length >= 4, `${partId} has at least 4 detail questions (got ${questions.length})`);
      assert(
        new Set(questions.map((question) => question.replace(/\s+/g, " ").toLowerCase())).size === questions.length,
        `${partId} has unique step-4 questions`,
      );

      for (const item of lesson.detailQuestions) {
        assert(!/\(\s*$/.test(item.answerEn), `${partId} ${item.key} answer is not truncated at "("`);
        assert(!/\(\s*Q\s*\d+\s*\)/i.test(item.answerEn), `${partId} ${item.key} answer has no leftover Q-mark`);
        assert(item.answerEn.trim().length > 0, `${partId} ${item.key} has a non-empty answer`);
        assert(!/^complete:/i.test(item.questionEn.trim()), `${partId} ${item.key} is not a completion prompt`);
        assert(!/^điền từ còn thiếu:/i.test(item.questionVi.trim()), `${partId} ${item.key} VI is not a completion prompt`);
      }
    }
  }

  const workshop = getIeltsFlowLessonContent("cam16-t1-p1");
  assert(!!workshop, "cam16-t1-p1 flow exists");
  if (!workshop) return;
  const workshopQuestions = workshop.detailQuestions.map((item) => item.questionEn);
  assert(
    !workshopQuestions.some((question, index) => workshopQuestions.indexOf(question) !== index),
    "cam16-t1-p1 has no repeated step-4 question",
  );
  assert(
    workshop.detailQuestions.some((item) => /egg/i.test(item.answerEn)),
    "cam16-t1-p1 includes the note answer egg",
  );

  console.log(`OK: checked ${checked} curated IELTS flow parts`);
}

main();
