import type { ListeningFlowDetailQuestion } from "@/lib/listening/tactics-basic-flow-types";
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

function blankContextLine(bodyLines: string[], questionNumber: number): string | null {
  for (const raw of bodyLines) {
    const line = raw.replace(/\u00a0/g, " ").trim();
    if (!line) continue;
    if (new RegExp(`\\b${questionNumber}\\s*(?:£\\s*)?(?:['\u2018\u2019"]?(?:\\.{3,}|_{3,}|…{2,})|\\.\\.\\.|_{3,}|…)`).test(line)) {
      return line
        .replace(
          new RegExp(
            `${questionNumber}\\s*(?:£\\s*)?(?:['\u2018\u2019"]?(?:\\.{3,}|_{3,}|…{2,})(?:\\.?['\u2018\u2019"]?)?|\\.\\.\\.|_{3,}|…{2,})`,
            "g",
          ),
          "___",
        )
        .replace(/\s+/g, " ")
        .trim();
    }
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
      const numbers = Object.keys(part.answers)
        .filter((key) => /^\d+$/.test(key))
        .map(Number)
        .sort((x, y) => x - y);

      for (const num of numbers) {
        if (out.length >= limit) break;
        const context = blankContextLine(section.bodyLines, num);
        const questionEn = context ?? `Complete blank ${num}`;
        pushUnique(
          out,
          {
            key: `exam-${num}`,
            conversationEn: `Note — Q${num}`,
            conversationVi: `Ghi chú — câu ${num}`,
            questionEn,
            questionVi: questionEn,
            answerEn: part.answers[String(num)] ?? "See transcript",
            answerVi: part.answers[String(num)] ?? "Xem transcript",
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
