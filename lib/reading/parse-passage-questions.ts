import { extractGapNumbersFromLine, hasFillGap, textHasBlankChars } from "@/lib/reading/fill-gap-pattern";

export type ExamStatementItem = {
  num: number;
  text: string;
  kind: "true-false-ng" | "yes-no-ng";
};

export type McqOption = {
  letter: string;
  text: string;
};

export type ExamSectionKind =
  | "paragraph-match"
  | "people-match"
  | "sentence-ending"
  | "summary-fill"
  | "note-fill"
  | "table-fill"
  | "mcq-single"
  | "choose-two"
  | "tfng";

export type McqQuestion = {
  num: number;
  text: string;
  options: McqOption[];
};

export type ExamQuestionSection = {
  title: string;
  kind: ExamSectionKind;
  instructionLines: string[];
  statements: ExamStatementItem[];
  /** Nội dung đề (summary, câu hỏi choose two, …). */
  bodyLines: string[];
  options: McqOption[];
  /** Choose A/B/C/D — mỗi câu một nhóm đáp án. */
  mcqQuestions: McqQuestion[];
  questionNums: number[];
};

function detectTfngKind(block: string): "true-false-ng" | "yes-no-ng" {
  if (/NOT\s+GIVEN/i.test(block) && /\bYES\b/i.test(block)) return "yes-no-ng";
  if (/NOT\s+GIVEN/i.test(block)) return "true-false-ng";
  return "true-false-ng";
}

/** Dòng hướng dẫn IELTS (word limit / boxes) — không phải nội dung summary/notes. */
export function isGapFillInstructionLine(line: string): boolean {
  return (
    /^Complete the summary/i.test(line) ||
    /^Complete the (notes|sentences|table|flow-?chart)/i.test(line) ||
    /^Complete each sentence/i.test(line) ||
    /^Label the diagrams?/i.test(line) ||
    /^Answer the questions/i.test(line) ||
    /^Look at the following statements/i.test(line) ||
    /^Read passage\s+\d+/i.test(line) ||
    /^Write the answers for questions/i.test(line) ||
    /^Write the correct (letter|number)/i.test(line) ||
    /^Write your answers in boxes/i.test(line) ||
    /^Write (NO MORE THAN|ONE WORD|ONE OR TWO WORDS|TWO WORDS)/i.test(line) ||
    /^Choose\s+(ONE|NO MORE|TWO)/i.test(line)
  );
}

function parseQuestionNumsFromTitle(title: string): number[] {
  const range = title.match(/Questions?\s+(\d{1,2})\s*[–-]\s*(\d{1,2})/i);
  if (range?.[1] && range[2]) {
    const start = Number.parseInt(range[1], 10);
    const end = Number.parseInt(range[2], 10);
    if (!Number.isNaN(start) && !Number.isNaN(end) && end >= start) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  }
  const and = title.match(/Questions?\s+(\d{1,2})\s+and\s+(\d{1,2})/i);
  if (and?.[1] && and[2]) {
    return [Number.parseInt(and[1], 10), Number.parseInt(and[2], 10)].filter((n) => !Number.isNaN(n));
  }
  const solo = title.match(/^Questions?\s+(\d{1,2})\s*$/i);
  if (solo?.[1]) {
    const n = Number.parseInt(solo[1], 10);
    return Number.isNaN(n) ? [] : [n];
  }
  return [];
}

function isTfngLabelLine(line: string): boolean {
  return /^(TRUE|FALSE|NOT\s+GIVEN|YES|NO)$/i.test(line.trim());
}

function soloQuestionNum(line: string): number | null {
  const m = line.match(/^(\d{1,2})$/);
  if (!m?.[1]) return null;
  return Number.parseInt(m[1], 10);
}

function soloOptionLetter(line: string): string | null {
  const m = line.match(/^([A-H])$/i);
  return m?.[1]?.toUpperCase() ?? null;
}

function detectSectionKind(chunk: string): ExamSectionKind {
  if (/Choose\s+TWO\s+(letters|correct\s+answers)/i.test(chunk)) return "choose-two";
  if (/Choose\s+THREE\s+letters/i.test(chunk)) return "choose-two";
  if (/Which\s+THREE\s+of the following/i.test(chunk)) return "choose-two";
  // Matching people / researchers / companies / ideas (not sentence endings).
  if (/Classify the following(?: statements)? as (?:referring to|typical of)/i.test(chunk)) {
    return "people-match";
  }
  if (
    /Match each (statement|person|research finding|idea) with the correct (person|expert|researcher|company|idea|term|theory|theories)/i.test(
      chunk,
    )
  ) {
    return "people-match";
  }
  if (/Which company does each of the following statements refer to/i.test(chunk)) {
    return "people-match";
  }
  if (/Match letters\s+[A-C]/i.test(chunk) && /company/i.test(chunk)) {
    return "people-match";
  }
  if (/Look at the following (ideas|statements|findings)/i.test(chunk) && /list of (researchers|people)/i.test(chunk)) {
    return "people-match";
  }
  // Matching sentence halves (NOT the gap-fill "Complete the sentences below").
  if (/Complete each sentence with the correct ending/i.test(chunk)) return "sentence-ending";
  if (/Which (paragraph|section) contains the following information/i.test(chunk)) return "paragraph-match";
  if (/Choose the correct heading/i.test(chunk)) return "paragraph-match";
  if (/Complete the summary below/i.test(chunk)) return "summary-fill";
  if (/Complete the summary using/i.test(chunk)) return "summary-fill";
  if (/Complete the table below/i.test(chunk)) return "table-fill";
  if (/Complete the notes below/i.test(chunk)) return "note-fill";
  if (/Complete the sentences below/i.test(chunk)) return "note-fill";
  if (/Complete the flow-?chart below/i.test(chunk)) return "note-fill";
  if (/Label the diagrams?/i.test(chunk)) return "note-fill";
  if (/Answer the questions below/i.test(chunk)) return "note-fill";
  if (/Choose the correct answer/i.test(chunk)) return "mcq-single";
  if (/Choose the correct letter,\s*A,\s*B,\s*C or D/i.test(chunk)) return "mcq-single";
  if (/Choose the correct answer,\s*A,\s*B,\s*C or D/i.test(chunk)) return "mcq-single";
  if (/choose the best match/i.test(chunk)) return "mcq-single";
  if (/from the three options,\s*A[\s,–-]*C/i.test(chunk)) return "mcq-single";
  // Cambridge OCR sometimes drops "Choose" and only keeps "Write the correct letter..."
  if (/Write the correct letter,\s*A,\s*B,\s*C or D/i.test(chunk)) return "mcq-single";
  if (
    (/Do the following statements agree/i.test(chunk) || /if the statement agrees/i.test(chunk)) &&
    (/\bTRUE\b/i.test(chunk) || /\bYES\b/i.test(chunk)) &&
    /NOT\s+GIVEN/i.test(chunk)
  ) {
    return "tfng";
  }
  return "note-fill";
}

/**
 * Boilerplate answer-sheet lines that some matching layouts omit from the body.
 * Do NOT skip for gap-fill / MCQ — those lines are part of the printed instruction block.
 */
function isSkippableLine(line: string, kind: ExamSectionKind): boolean {
  if (kind === "note-fill" || kind === "table-fill" || kind === "summary-fill" || kind === "mcq-single") {
    return false;
  }
  return /^Write your answers/i.test(line) || /^In boxes/i.test(line);
}

/** Cambridge heading Example answer looks like `iii Paragraph A` — not a List of Headings item. */
function isHeadingExampleAnswer(opt: McqOption): boolean {
  return /^Paragraph\s+[A-Z]\.?$/i.test(opt.text.trim());
}

function parseOptionLine(line: string): McqOption | null {
  const m = line.match(/^([A-J])\s+(.+)$/i);
  if (!m?.[1] || !m[2]) return null;
  // Reject run-on OCR lines that still contain another option letter mid-text.
  if (/\s[A-J]\s{2,}\S/.test(m[2]) || /\s[A-J]\t/.test(m[2])) return null;
  return { letter: m[1].toUpperCase(), text: m[2].trim() };
}

/** Split Cambridge OCR options jammed on one line via U+2028 / U+2029 / multi-space letter breaks. */
function expandOptionSourceLines(line: string): string[] {
  const normalized = line.replace(/\u00a0/g, " ");
  const bySep = normalized
    .split(/[\u2028\u2029]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (bySep.length > 1) return bySep;

  const multi = parsePhraseBankOptionsFromLine(normalized);
  if (multi.length > 1) {
    return multi.map((o) => `${o.letter}  ${o.text}`);
  }
  return [normalized.trim()].filter(Boolean);
}

/**
 * Phrase-bank lines in Cambridge OCR may be:
 * - `A. development plans`
 * - `A   constant conflict` (letter + 2+ spaces/nbsp, no period)
 * - two options on one line: `A   foo      B   bar`
 * Require period OR 2+ whitespace after the letter so sentence starts like
 * "Although …" are not treated as option A.
 */
function parsePhraseBankOptionsFromLine(line: string): McqOption[] {
  const normalized = line.replace(/\u00a0/g, " ").trim();
  if (!normalized) return [];

  const re = /\b([A-J])(?:\.\s+|\s{2,})([A-Za-z][\s\S]*?)(?=\s+[A-J](?:\.\s+|\s{2,})|$)/gi;
  const out: McqOption[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(normalized)) !== null) {
    const letter = m[1]?.toUpperCase();
    const text = m[2]?.replace(/\s+/g, " ").trim();
    if (!letter || !text) continue;
    out.push({ letter, text });
  }
  return out;
}

function parsePhraseBankOption(line: string): McqOption | null {
  return parsePhraseBankOptionsFromLine(line)[0] ?? null;
}

function parseRomanHeadingOption(line: string): McqOption | null {
  const m = line.match(/^([ivxlc]{1,4})\s+(.+)$/i);
  if (!m?.[1] || !m[2]) return null;
  const opt = { letter: m[1].toLowerCase(), text: m[2].trim() };
  if (isHeadingExampleAnswer(opt)) return null;
  return opt;
}

function parseNumberedStatement(line: string): { num: number; text: string } | null {
  const m = line.match(/^(\d{1,2})\s+(.+)$/);
  if (!m?.[2]) return null;
  const text = m[2].trim();
  if (text.length < 8) return null;
  if (textHasBlankChars(text)) return null;
  return { num: Number.parseInt(m[1], 10), text };
}

function extractGapNums(lines: string[]): number[] {
  const nums: number[] = [];
  for (const line of lines) {
    nums.push(...extractGapNumbersFromLine(line));
  }
  return nums;
}

/** Tách các khối Questions … từ file Cambridge .txt (một passage). */
export function parsePassageExamSections(questionsText: string): ExamQuestionSection[] {
  if (!questionsText.trim()) return [];

  const normalized = questionsText.replace(/\u00a0/g, " ").replace(/\r\n/g, "\n");
  const chunks = normalized
    .split(/(?=^\s*Questions?\s+\d+)/im)
    .map((c) => c.trim())
    .filter((c) => /^Questions?\s+\d+/i.test(c));

  const sections: ExamQuestionSection[] = [];

  for (const chunk of chunks) {
    const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
    const title = lines[0] ?? "Questions";
    const kind = detectSectionKind(chunk);
    const titleNums = parseQuestionNumsFromTitle(title);

    const instructionLines: string[] = [];
    const bodyLines: string[] = [];
    const statementLines: string[] = [];
    const options: McqOption[] = [];
    const mcqQuestions: McqQuestion[] = [];
    let currentMcq: McqQuestion | null = null;

    let phase: "instr" | "body" | "stmt" | "opts" | "skip-tfng" = "instr";

    if (kind === "people-match" || kind === "sentence-ending") {
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i] ?? "";
        if (isSkippableLine(line, kind)) continue;
        if (/^NB\b/i.test(line)) {
          instructionLines.push(line);
          continue;
        }
        if (/^List of (people|experts|endings|ideas|companies|researchers|styles|love styles)/i.test(line)) continue;

        let gotOpt = false;
        for (const source of expandOptionSourceLines(line)) {
          const opt = parseOptionLine(source);
          if (opt) {
            options.push(opt);
            gotOpt = true;
          }
        }
        if (gotOpt) continue;

        const numbered = parseNumberedStatement(line);
        if (numbered) {
          statementLines.push(line);
          continue;
        }

        if (
          /^Look at the following/i.test(line) ||
          /^Classify the following/i.test(line) ||
          /^Match each (statement|person|research finding|idea)/i.test(line) ||
          /^Match letters\s+[A-C]/i.test(line) ||
          /^Which company does each of the following/i.test(line) ||
          /^Complete each sentence with the correct ending/i.test(line) ||
          /^Write the correct letter/i.test(line)
        ) {
          instructionLines.push(line);
        }
      }
    }

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i] ?? "";
      if (kind === "people-match" || kind === "sentence-ending") continue;
      if (isSkippableLine(line, kind)) continue;
      if (/^NB\b/i.test(line)) {
        instructionLines.push(line);
        continue;
      }

      if (phase === "skip-tfng") {
        if (soloQuestionNum(line) !== null || /^Questions/i.test(line)) {
          phase = "instr";
        } else if (isTfngLabelLine(line) || line === "-") {
          continue;
        } else {
          phase = "instr";
        }
      }

      const qNum = soloQuestionNum(line);
      if (qNum !== null && kind === "paragraph-match") {
        const stmt = (lines[i + 1] ?? "").trim();
        if (
          stmt &&
          soloQuestionNum(stmt) === null &&
          !parseOptionLine(stmt) &&
          !/^Questions/i.test(stmt)
        ) {
          statementLines.push(`${qNum} ${stmt}`);
          i += 1;
          continue;
        }
      }

      if (qNum !== null && kind === "tfng") {
        let j = i + 1;
        while (j < lines.length && (isTfngLabelLine(lines[j] ?? "") || (lines[j] ?? "") === "-")) {
          j += 1;
        }
        const stmt = (lines[j] ?? "").trim();
        if (
          stmt &&
          !isTfngLabelLine(stmt) &&
          soloQuestionNum(stmt) === null &&
          !/^Questions/i.test(stmt)
        ) {
          statementLines.push(`${qNum} ${stmt}`);
          i = j;
          phase = "skip-tfng";
          continue;
        }
      }

      if (qNum !== null && kind === "mcq-single") {
        if (currentMcq) mcqQuestions.push(currentMcq);
        const textParts: string[] = [];
        let j = i + 1;
        while (j < lines.length) {
          const next = lines[j] ?? "";
          if (soloQuestionNum(next) !== null) break;
          if (/^Questions/i.test(next)) break;
          if (soloOptionLetter(next)) break;
          textParts.push(next);
          j += 1;
        }
        currentMcq = { num: qNum, text: textParts.join(" ").trim(), options: [] };
        i = j - 1;
        phase = "body";
        continue;
      }

      const optLetter = soloOptionLetter(line);
      if (optLetter && currentMcq && kind === "mcq-single") {
        const optText = (lines[i + 1] ?? "").trim();
        if (
          optText &&
          soloOptionLetter(optText) === null &&
          soloQuestionNum(optText) === null &&
          !/^Questions/i.test(optText)
        ) {
          currentMcq.options.push({ letter: optLetter, text: optText });
          i += 1;
          continue;
        }
      }

      if (kind === "summary-fill") {
        const phraseBankOpts = parsePhraseBankOptionsFromLine(line);
        if (phraseBankOpts.length > 0) {
          options.push(...phraseBankOpts);
          phase = "opts";
          continue;
        }
      }

      const phraseOpt = kind === "choose-two" ? parseOptionLine(line) : null;
      if (phraseOpt && kind === "choose-two") {
        options.push(phraseOpt);
        continue;
      }

      const numbered = parseNumberedStatement(line);
      if (numbered && kind === "mcq-single") {
        if (currentMcq) mcqQuestions.push(currentMcq);
        currentMcq = { num: numbered.num, text: numbered.text, options: [] };
        phase = "body";
        continue;
      }

      const mcqOpt = kind === "mcq-single" && currentMcq ? parseOptionLine(line) : null;
      if (mcqOpt && currentMcq) {
        currentMcq.options.push(mcqOpt);
        continue;
      }

      const sharedOpt =
        kind === "choose-two" ? parseOptionLine(line) : null;
      if (sharedOpt && kind === "choose-two") {
        options.push(sharedOpt);
        phase = "opts";
        continue;
      }

      if (numbered && (kind === "paragraph-match" || kind === "tfng")) {
        phase = "stmt";
        statementLines.push(line);
        continue;
      }

      if (phase === "stmt") continue;

      if (kind === "choose-two") {
        if (/^Which (TWO|THREE)/i.test(line)) {
          if (!bodyLines.some((l) => /^Which (TWO|THREE)/i.test(l))) {
            bodyLines.push(line);
          }
          phase = "body";
          continue;
        }
        if (/^Choose\s+(TWO|THREE)/i.test(line)) {
          if (phase === "instr") instructionLines.push(line);
          continue;
        }
        const slotNum = soloQuestionNum(line);
        if (line === "-" || (slotNum !== null && titleNums.includes(slotNum))) {
          continue;
        }
        const sharedOpt = parseOptionLine(line);
        if (sharedOpt) {
          options.push(sharedOpt);
          phase = "opts";
          continue;
        }
        if ((phase === "body" || phase === "opts") && line.length >= 12 && !isSkippableLine(line, kind)) {
          const letter = String.fromCharCode(65 + options.length);
          if (options.length < 8) {
            options.push({ letter, text: line });
            phase = "opts";
          }
          continue;
        }
        if (phase === "instr") instructionLines.push(line);
        continue;
      }

      if (kind === "summary-fill") {
        if (isGapFillInstructionLine(line)) {
          instructionLines.push(line);
          continue;
        }
        bodyLines.push(line);
        phase = "body";
        continue;
      }

      if (kind === "note-fill" || kind === "table-fill") {
        if (isGapFillInstructionLine(line)) {
          instructionLines.push(line);
          continue;
        }
        // Do not swallow the next passage / next question block into note body.
        if (/^READING PASSAGE\b/i.test(line) || /^Questions?\s+\d+/i.test(line)) {
          break;
        }
        if (/^url\s*\|/i.test(line)) {
          bodyLines.push(line);
          phase = "body";
          continue;
        }
        if (line.includes("|") || /^[•●○]|^●|^○/.test(line) || hasFillGap(line)) {
          bodyLines.push(line);
          phase = "body";
          continue;
        }
        if (phase === "body") {
          if (line === "•" || line === "●") continue;
          if (/^READING PASSAGE\b/i.test(line) || /^Questions?\s+\d+/i.test(line)) break;
          bodyLines.push(line);
          continue;
        }
        if (/^[A-Z]/.test(line) && line.length < 72 && !hasFillGap(line)) {
          bodyLines.push(line);
          phase = "body";
          continue;
        }
        instructionLines.push(line);
        continue;
      }

      if (kind === "mcq-single") {
        if (
          /^Choose the correct (letter|answer)/i.test(line) ||
          /^Write the correct letter/i.test(line) ||
          /^Read the text and choose/i.test(line) ||
          /choose the best match/i.test(line) ||
          isGapFillInstructionLine(line)
        ) {
          instructionLines.push(line);
          continue;
        }
        // Singular "Question N" often has stem + A–D without a numbered stem line.
        if (!currentMcq && titleNums.length === 1) {
          currentMcq = { num: titleNums[0]!, text: "", options: [] };
        }
        if (currentMcq) {
          const sameLineOpt = parseOptionLine(line) ?? parsePhraseBankOption(line);
          if (sameLineOpt) {
            currentMcq.options.push(sameLineOpt);
            continue;
          }
          if (!currentMcq.text) {
            currentMcq.text = line;
            continue;
          }
          if (currentMcq.options.length === 0) {
            currentMcq.text = `${currentMcq.text} ${line}`.trim();
            continue;
          }
        }
        continue;
      }

      if (kind === "paragraph-match") {
        if (/^List of Headings/i.test(line) || /^Paragraph Headings/i.test(line)) continue;
        // Skip Example row: "Answer … Example" / "Example" / "e.g Paragraph…" / "Example: Section A … viii".
        if (/^Answer\b/i.test(line) && /Example/i.test(line)) continue;
        if (/^Example\b/i.test(line)) continue;
        if (/^e\.?g\.?\b/i.test(line)) continue;
        if (/^Section\s+[A-Z]\b/i.test(line) && /\b[ivxlc]+\b/i.test(line) && !/^\d/.test(line)) {
          continue;
        }
        const romanOpt = parseRomanHeadingOption(line);
        if (romanOpt) {
          options.push(romanOpt);
          continue;
        }
        if (
          /^Reading Passage/i.test(line) ||
          /^Choose the correct heading/i.test(line) ||
          /^Write the correct number/i.test(line) ||
          isGapFillInstructionLine(line)
        ) {
          instructionLines.push(line);
          continue;
        }
        continue;
      }

      instructionLines.push(line);
    }

    if (currentMcq) mcqQuestions.push(currentMcq);

    const tfngKind = detectTfngKind(chunk);
    const statements = statementLines
      .map((line) => parseNumberedStatement(line))
      .filter((s): s is { num: number; text: string } => s !== null)
      .map((s) => ({ ...s, kind: tfngKind }));

    const gapNums = extractGapNums(bodyLines);
    const mcqNums = mcqQuestions.map((q) => q.num);
    const questionNums =
      titleNums.length > 0
        ? titleNums
        : statements.length > 0
          ? statements.map((s) => s.num)
          : mcqNums.length > 0
            ? mcqNums
            : gapNums;

    const resolvedKind =
      statements.length > 0 && kind === "paragraph-match"
        ? "paragraph-match"
        : statements.length > 0 && kind === "people-match"
          ? "people-match"
          : statements.length > 0 && kind === "sentence-ending"
            ? "sentence-ending"
            : kind;

    sections.push({
      title,
      kind: resolvedKind,
      instructionLines,
      statements,
      bodyLines,
      options,
      mcqQuestions,
      questionNums: [...new Set(questionNums)].sort((a, b) => a - b),
    });
  }

  return sections;
}

/** @deprecated dùng section.kind — giữ cho exam-question-types. */
export type ExamQuestionSectionLegacy = ExamQuestionSection & {
  instruction: string;
  notesHtml?: string;
};
