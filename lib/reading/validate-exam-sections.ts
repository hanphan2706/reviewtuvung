import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import { parsePassageExamSections } from "@/lib/reading/parse-passage-questions";

export type ExamValidationIssue = {
  passage: number;
  section: string;
  message: string;
};

/** So sánh số câu trong tiêu đề Questions X–Y với số gap/statement thực tế. */
export function validatePassageExamSections(passage: ReadingPassageBlock): ExamValidationIssue[] {
  const issues: ExamValidationIssue[] = [];
  const sections = parsePassageExamSections(passage.questionsText);

  for (const section of sections) {
    const range = section.title.match(/Questions\s+(\d{1,2})\s*[–-]\s*(\d{1,2})/i);
    if (!range?.[1] || !range[2]) continue;

    const start = Number.parseInt(range[1], 10);
    const end = Number.parseInt(range[2], 10);
    const expected = end - start + 1;
    const found = section.questionNums.length;

    if (found < expected) {
      issues.push({
        passage: passage.passage,
        section: section.title,
        message: `Thiếu câu: kỳ vọng ${expected} (${start}–${end}), parse được ${found} [${section.questionNums.join(", ")}]`,
      });
    }

    if (section.kind === "note-fill" && section.bodyLines.length === 0) {
      issues.push({
        passage: passage.passage,
        section: section.title,
        message: "Note-fill không có dòng đề (bodyLines rỗng)",
      });
    }
  }

  return issues;
}
