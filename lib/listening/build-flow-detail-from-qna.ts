import type { ListeningFlowDetailQuestion } from "@/lib/listening/tactics-basic-flow-types";
import { collectBlankNumbersFromLines } from "@/lib/listening/listening-note-layout";
import type {
  ListeningQnaPart,
  ListeningQnaSection,
} from "@/lib/listening/parse-listening-qna";

type Option = { letter: string; text: string };

function expandLetters(letters: string, options: Option[]): string {
  const parts = letters
    .split(/[,/&\s]+/)
    .map((part) => part.trim().toUpperCase())
    .filter((part) => /^[A-H]$/.test(part));

  if (parts.length === 0) return letters;

  const labels = parts.map((letter) => {
    const match = options.find((opt) => opt.letter.toUpperCase() === letter);
    return match ? `${letter} — ${match.text}` : letter;
  });

  return labels.join("; ");
}

function answerForQuestion(
  part: ListeningQnaPart,
  questionNumber: number,
  options: Option[],
): string {
  const direct = part.answers[String(questionNumber)];
  if (direct) return expandLetters(direct, options);

  for (const [key, value] of Object.entries(part.answers)) {
    if (!key.includes("&")) continue;
    const [aRaw, bRaw] = key.split("&");
    const a = Number.parseInt(aRaw ?? "", 10);
    const b = Number.parseInt(bRaw ?? "", 10);
    if (questionNumber === a || questionNumber === b) {
      return expandLetters(value, options);
    }
  }

  return "See transcript";
}

const BLANK_LINE_RE = (questionNumber: number): RegExp =>
  new RegExp(
    `\\b${questionNumber}\\s*(?:£\\s*)?(?:['\u2018\u2019"]?(?:\\.{3,}|_{3,}|…{2,})|\\.\\.\\.|_{3,}|…)`,
  );

function isWeakNoteLabel(line: string): boolean {
  if (/^(course|date|cost|notes|name|address|telephone|email)$/i.test(line)) return true;
  if (/^£?\s*\d/.test(line) && line.length < 24) return true;
  if (/^\d{1,2}\s+[A-Za-z]/.test(line) && line.length < 28) return true;
  return false;
}

function blankContextLine(bodyLines: string[], questionNumber: number): string | null {
  const blankRe = BLANK_LINE_RE(questionNumber);
  for (let index = 0; index < bodyLines.length; index += 1) {
    const line = (bodyLines[index] ?? "").replace(/\u00a0/g, " ").trim();
    if (!line || !blankRe.test(line)) continue;

    const cleaned = line
      .replace(
        new RegExp(
          `${questionNumber}\\s*(?:£\\s*)?(?:['\u2018\u2019"]?(?:\\.{3,}|_{3,}|…{2,})(?:\\.?['\u2018\u2019"]?)?|\\.\\.\\.|_{3,}|…{2,})`,
          "g",
        ),
        "___",
      )
      .replace(/^[●•]\s*/u, "")
      .replace(/^[-–—]\s*/, "")
      .replace(/\s+/g, " ")
      .trim();

    const standalone = cleaned.replace(/[£_\s.]/g, "") === "";
    if (!standalone && cleaned.replace(/___/g, "").trim().length >= 8) return cleaned;

    for (let prev = index - 1; prev >= 0; prev -= 1) {
      const label = (bodyLines[prev] ?? "").replace(/\u00a0/g, " ").trim();
      if (!label) continue;
      if (/\d+\s*(?:£\s*)?(?:['\u2018\u2019"]?(?:\.{3,}|_{3,}|…{2,})|\.{3,}|_{3,}|…)/.test(label)) continue;
      if (isWeakNoteLabel(label)) continue;
      const tidyLabel = label.replace(/^[●•]\s*/u, "").replace(/^[-–—]\s*/, "").replace(/:\s*$/, "");
      return `${tidyLabel}: ${cleaned || "___"}`;
    }

    return cleaned || null;
  }
  return null;
}

function sectionOptions(section: ListeningQnaSection): Option[] {
  if (section.kind === "mcq") return section.questions.flatMap((q) => q.options);
  if (section.kind === "choose-two") return section.options;
  if (section.kind === "matching") return section.options;
  if (section.kind === "map") {
    const range = section.letterRange ?? "A–I";
    const [startRaw, endRaw] = range.split(/[–-]/);
    const start = startRaw?.trim().toUpperCase().charCodeAt(0) ?? 65;
    const end = endRaw?.trim().toUpperCase().charCodeAt(0) ?? start;
    const options: Option[] = [];
    for (let code = start; code <= end; code += 1) {
      options.push({ letter: String.fromCharCode(code), text: String.fromCharCode(code) });
    }
    return options;
  }
  return [];
}

function capitalizeQuestion(text: string): string {
  const trimmed = text.replace(/\s+/g, " ").trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function noteContextToComprehensionQuestion(
  context: string,
  questionNumber: number,
): { en: string; vi: string } {
  const text = context.replace(/\s+/g, " ").trim().replace(/[.\s]+$/u, "");

  const labeled = text.match(/^(.{2,70}?):\s*(?:£\s*)?___$/);
  if (labeled) {
    const label = labeled[1]!.trim();
    return {
      en: `What detail is given for ${label}?`,
      vi: `Bài nghe nêu chi tiết gì về ${label}?`,
    };
  }

  if (text.includes("___")) {
    let question = text
      .replace(/\ban?\s+___/gi, " what")
      .replace(/\bthe\s+___/gi, " what")
      .replace(/___/g, "what")
      .replace(/\s+/g, " ")
      .trim();

    if (/^Make what\b/i.test(question)) {
      question = question.replace(/^Make what\b/i, "What do they make that is");
    } else if (/^Create a short what\b/i.test(question)) {
      question = question.replace(/^Create a short what\b/i, "What short thing do they create");
    }

    question = capitalizeQuestion(question);
    if (!question.endsWith("?")) question += "?";
    return {
      en: question,
      vi: `Theo bài nghe, ${question.charAt(0).toLowerCase()}${question.slice(1)}`,
    };
  }

  return {
    en: `What key detail is given for question ${questionNumber}?`,
    vi: `Chi tiết chính trong câu ${questionNumber} là gì?`,
  };
}

function pushUnique(
  out: ListeningFlowDetailQuestion[],
  item: ListeningFlowDetailQuestion,
  seen: Set<string>,
): void {
  if (seen.has(item.key)) return;
  seen.add(item.key);
  out.push(item);
}

/** Sinh câu hỏi chi tiết bước 4 từ cấu trúc QnA thật (MCQ, choose-two, matching, note/map). */
export function buildFlowDetailQuestionsFromQnaPart(
  part: ListeningQnaPart,
  limit = 6,
): ListeningFlowDetailQuestion[] {
  const out: ListeningFlowDetailQuestion[] = [];
  const seen = new Set<string>();

  for (const section of part.sections) {
    if (out.length >= limit) break;

    if (section.kind === "mcq") {
      for (const q of section.questions) {
        if (out.length >= limit) break;
        pushUnique(
          out,
          {
            key: `exam-${q.number}`,
            conversationEn: `Question ${q.number}`,
            conversationVi: `Câu ${q.number}`,
            questionEn: q.prompt,
            questionVi: q.prompt,
            answerEn: answerForQuestion(part, q.number, q.options),
            answerVi: answerForQuestion(part, q.number, q.options),
          },
          seen,
        );
      }
      continue;
    }

    if (section.kind === "choose-two") {
      const [a, b] = section.questionNumbers;
      const pairedKey = `${a}&${b}`;
      const answer =
        part.answers[pairedKey] ??
        part.answers[`${a}&${b}`] ??
        answerForQuestion(part, a, section.options);

      pushUnique(
        out,
        {
          key: `exam-${pairedKey}`,
          conversationEn: `Questions ${a}–${b}`,
          conversationVi: `Câu ${a}–${b}`,
          questionEn: section.prompt,
          questionVi: section.prompt,
          answerEn: expandLetters(answer, section.options),
          answerVi: expandLetters(answer, section.options),
        },
        seen,
      );
      continue;
    }

    if (section.kind === "matching") {
      const prompt =
        section.instructionLines.find((line) => line.length > 20) ??
        section.instructionLines.at(-1) ??
        "Choose the correct answer";

      for (const item of section.items) {
        if (out.length >= limit) break;
        pushUnique(
          out,
          {
            key: `exam-${item.number}`,
            conversationEn: `${section.itemsTitle || "Item"} — Q${item.number}`,
            conversationVi: `${section.itemsTitle || "Mục"} — câu ${item.number}`,
            questionEn: `${prompt.replace(/\.$/, "")}: ${item.label}?`,
            questionVi: `${prompt.replace(/\.$/, "")}: ${item.label}?`,
            answerEn: answerForQuestion(part, item.number, section.options),
            answerVi: answerForQuestion(part, item.number, section.options),
          },
          seen,
        );
      }
      continue;
    }

    if (section.kind === "note-completion") {
      const numbers = collectBlankNumbersFromLines(section.bodyLines);

      for (const num of numbers) {
        if (out.length >= limit) break;
        const context = blankContextLine(section.bodyLines, num);
        const question = context
          ? noteContextToComprehensionQuestion(context, num)
          : {
              en: `What key detail is given for question ${num}?`,
              vi: `Chi tiết chính trong câu ${num} là gì?`,
            };
        const answer = part.answers[String(num)] ?? "See transcript";
        pushUnique(
          out,
          {
            key: `exam-${num}`,
            conversationEn: `Detail ${num}`,
            conversationVi: `Chi tiết ${num}`,
            questionEn: question.en,
            questionVi: question.vi,
            answerEn: answer,
            answerVi: answer,
          },
          seen,
        );
      }
      continue;
    }

    if (section.kind === "map") {
      for (const item of section.items) {
        if (out.length >= limit) break;
        pushUnique(
          out,
          {
            key: `exam-${item.number}`,
            conversationEn: `Map — Q${item.number}`,
            conversationVi: `Bản đồ — câu ${item.number}`,
            questionEn: `On the map, where is ${item.label}?`,
            questionVi: `Trên bản đồ, ${item.label} ở đâu?`,
            answerEn: answerForQuestion(part, item.number, sectionOptions(section)),
            answerVi: answerForQuestion(part, item.number, sectionOptions(section)),
          },
          seen,
        );
      }
    }
  }

  return out.slice(0, limit);
}
