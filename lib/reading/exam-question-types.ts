import type { ExamQuestionSection } from "@/lib/reading/parse-passage-questions";

function labelSection(sec: ExamQuestionSection): string {
  switch (sec.kind) {
    case "paragraph-match":
      return "Matching information";
    case "people-match":
      return "Matching people";
    case "sentence-ending":
      return "Matching sentence endings";
    case "summary-fill":
      return "Summary completion";
    case "note-fill":
      return "Completion";
    case "table-fill":
      return "Table completion";
    case "choose-two":
      return section.questionNums.length >= 3
        ? "Multiple choice (choose three)"
        : "Multiple choice (choose two)";
    case "mcq-single":
      return "Multiple choice";
    case "tfng": {
      const blob = sec.instructionLines.join(" ");
      if (/yes/i.test(blob) && /not given/i.test(blob)) return "Yes / No / Not Given";
      return "True / False / Not Given";
    }
    default:
      return "Reading questions";
  }
}

/** Nhãn dạng câu hỏi IELTS (từ khối Questions trong .txt). */
export function summarizeExamQuestionTypes(sections: ExamQuestionSection[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const sec of sections) {
    const label = labelSection(sec);
    if (!seen.has(label)) {
      seen.add(label);
      out.push(label);
    }
  }
  return out;
}
