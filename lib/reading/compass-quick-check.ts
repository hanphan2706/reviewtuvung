import type { QuickCheckQuiz } from "@/lib/reading/passage-quiz";

function pushOption(target: string[], index: number, value: string) {
  if (index < 0 || index >= 4) return;
  while (target.length <= index) target.push("");
  target[index] = value;
}

/** Parse khối QUICK CHECK (`key | value`, hỗ trợ `_en` / `_vi`). */
export function parseCompassQuickCheckText(text: string): QuickCheckQuiz | null {
  if (!text.trim()) return null;

  let questionEn = "";
  let questionVi = "";
  const optionsEn: string[] = [];
  const optionsVi: string[] = [];
  let correctIndex = 0;
  let explanationEn: string | undefined;
  let explanationVi: string | undefined;

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || /^quick\s*check$/i.test(trimmed)) continue;

    const pipe = trimmed.match(/^(.+?)\s*\|\s*(.+)$/);
    if (!pipe?.[1] || !pipe[2]) continue;

    const key = pipe[1].trim().toLowerCase();
    const value = pipe[2].trim();

    const optionMatch = key.match(/^(\d+)(_en|_vi)?$/);
    if (key === "option" || optionMatch) {
      const idx =
        key === "option"
          ? optionsEn.length
          : Number.parseInt(optionMatch?.[1] ?? "", 10);
      const locale = optionMatch?.[2];
      if (locale === "_en") pushOption(optionsEn, idx, value);
      else if (locale === "_vi") pushOption(optionsVi, idx, value);
      else if (locale === undefined && optionMatch) pushOption(optionsVi, idx, value);
      else pushOption(optionsEn, idx, value);
      continue;
    }

    /** Legacy `question |` — chỉ tiếng Việt; không gán sang EN. */
    if (key === "question" || key === "q") {
      questionVi = value;
      continue;
    }
    if (key === "question_en" || key === "q_en") {
      questionEn = value;
      continue;
    }
    if (key === "question_vi" || key === "q_vi") {
      questionVi = value;
      continue;
    }
    if (key === "correct" || key === "answer") {
      const letter = value.toUpperCase();
      if (/^[A-D]$/.test(letter)) {
        correctIndex = letter.charCodeAt(0) - 65;
      } else {
        const n = Number.parseInt(value, 10);
        if (Number.isFinite(n) && n >= 0 && n < 4) correctIndex = n;
      }
      continue;
    }
    if (key === "explain" || key === "explanation" || key === "explain_vi") {
      explanationVi = value;
      continue;
    }
    if (key === "explain_en" || key === "explanation_en") {
      explanationEn = value;
    }
  }

  if (!questionVi && questionEn) questionVi = questionEn;

  const filledEn = optionsEn.filter(Boolean);
  const filledVi = optionsVi.filter(Boolean);
  const optionsEnFinal = filledEn;
  const optionsViFinal = filledVi.length >= 2 ? filledVi : filledEn;

  if (!questionEn.trim() || optionsEnFinal.length < 2) {
    if (questionVi.trim() && optionsViFinal.length >= 2) {
      return {
        questionEn: "",
        questionVi,
        optionsEn: [],
        optionsVi: optionsViFinal.slice(0, 4),
        correctIndex,
        explanationEn,
        explanationVi,
      };
    }
    return null;
  }

  if (correctIndex < 0 || correctIndex >= optionsEnFinal.length) correctIndex = 0;

  return {
    questionEn,
    questionVi: questionVi || undefined,
    optionsEn: optionsEnFinal.slice(0, 4),
    optionsVi: optionsViFinal.length >= 2 ? optionsViFinal.slice(0, 4) : undefined,
    correctIndex,
    explanationEn,
    explanationVi,
  };
}
