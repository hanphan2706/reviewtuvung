const BLANK_RE =
  /(\d+)\s*(?:£\s*)?(?:['\u2018\u2019"]?(?:\.{3,}|_{3,}|…{2,})(?:\.?['\u2018\u2019"]?)?|\.{3,}|_{3,}|…{2,})/g;
const PART_HEADER_RE = /^PART\s+(\d+)\s*$/i;
const QUESTIONS_RANGE_RE = /^Questions?\s+(\d+)\s*(?:and|&|–|-)\s*(\d+)\s*$/i;
const SINGLE_QUESTION_RE = /^Questions?\s+(\d+)\s*$/i;
const MCQ_OPTION_RE = /^([A-H])\s+(.+)$/;
const MAP_ITEM_RE = /^(\d+)\s+(.+?)\s*(?:\.{3,}|_{3,}|…{2,})\s*$/;
const IMAGE_LINE_RE = /^IMAGE\s*\|\s*(.+)\s*$/i;
const ANSWERS_HEADER_RE = /^Answers?:\s*$|^Answer key:\s*$/im;
const PAIRED_ANSWER_RE = /^(\d+)\s*&\s*(\d+)\s+(.+)$/i;
/** Form / table / flowchart completion blocks (not only "notes"). */
const COMPLETE_BELOW_RE = /Complete the (?:notes|form|table|flowchart) below/i;
const CHOOSE_FROM_BOX_RE = /Choose\s+(?:TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|\d+)\s+answers from the box/i;

export type ListeningQnaMcqQuestion = {
  number: number;
  prompt: string;
  options: { letter: string; text: string }[];
};

export type ListeningQnaMapSection = {
  kind: "map";
  instructionLines: string[];
  imageUrl?: string;
  letterRange?: string;
  items: { number: number; label: string }[];
};

export type ListeningQnaChooseTwoSection = {
  kind: "choose-two";
  questionNumbers: [number, number];
  instructionLines: string[];
  prompt: string;
  options: { letter: string; text: string }[];
};

export type ListeningQnaMatchingSection = {
  kind: "matching";
  instructionLines: string[];
  optionsTitle: string;
  options: { letter: string; text: string }[];
  itemsTitle: string;
  items: { number: number; label: string }[];
};

export type ListeningQnaNoteSection = {
  kind: "note-completion";
  instructionLines: string[];
  bodyLines: string[];
};

export type ListeningQnaMcqSection = {
  kind: "mcq";
  instructionLines: string[];
  topicLine?: string;
  questions: ListeningQnaMcqQuestion[];
};

export type ListeningQnaSection =
  | ListeningQnaNoteSection
  | ListeningQnaMcqSection
  | ListeningQnaMapSection
  | ListeningQnaChooseTwoSection
  | ListeningQnaMatchingSection;

export type ListeningQnaPart = {
  partNumber: number;
  sections: ListeningQnaSection[];
  answers: Record<string, string>;
};

export type ParsedListeningQnaFile = {
  parts: Map<number, ListeningQnaPart>;
};

function normalizeLine(line: string): string {
  return line.replace(/\u00a0/g, " ").trim();
}

function isQnaNoiseLine(line: string): boolean {
  const t = normalizeLine(line);
  if (!t) return true;
  if (/^advertisements?$/i.test(t)) return true;
  return false;
}

function parseAnswerKey(lines: readonly string[]): Record<string, string> {
  const answers: Record<string, string> = {};
  for (const raw of lines) {
    const line = normalizeLine(raw);
    if (!line) continue;
    const paired = line.match(PAIRED_ANSWER_RE);
    if (paired) {
      const [, a, b, value] = paired;
      answers[`${a}&${b}`] = normalizeAnswerValue(value ?? "");
      continue;
    }
    const m = line.match(/^(\d+)\s+(.+)$/);
    if (!m) continue;
    answers[m[1]!] = normalizeAnswerValue(m[2] ?? "");
  }
  return answers;
}

function normalizeAnswerValue(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .replace(/\s*\/\s*/g, " / ");
}

function splitPartBlocks(text: string): { partNumber: number; body: string }[] {
  const lines = text.split(/\r?\n/);
  const blocks: { partNumber: number; body: string }[] = [];
  let currentPart: number | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentPart === null) return;
    blocks.push({ partNumber: currentPart, body: buffer.join("\n") });
    buffer = [];
  };

  for (const raw of lines) {
    const line = normalizeLine(raw);
    const partMatch = line.match(PART_HEADER_RE);
    if (partMatch) {
      flush();
      currentPart = Number.parseInt(partMatch[1]!, 10);
      continue;
    }
    if (currentPart !== null && !isQnaNoiseLine(raw)) {
      buffer.push(raw);
    }
  }
  flush();
  return blocks;
}

function extractLetterRange(line: string): string | undefined {
  const m = line.match(/([A-H])\s*(?:–|-|to)\s*([A-H])/i);
  if (!m) return undefined;
  return `${m[1]!.toUpperCase()}–${m[2]!.toUpperCase()}`;
}

function partAnswerSlice(
  globalAnswers: Record<string, string>,
  partNumber: number,
): Record<string, string> {
  const partAnswers: Record<string, string> = {};
  const partStart = (partNumber - 1) * 10 + 1;
  const partEnd = partNumber * 10;

  for (const [key, value] of Object.entries(globalAnswers)) {
    if (key.includes("&")) {
      const [aRaw, bRaw] = key.split("&");
      const a = Number.parseInt(aRaw ?? "", 10);
      const b = Number.parseInt(bRaw ?? "", 10);
      if (a >= partStart && b <= partEnd) {
        partAnswers[key] = value;
      }
      continue;
    }
    const num = Number.parseInt(key, 10);
    if (num >= partStart && num <= partEnd) {
      partAnswers[key] = value;
    }
  }
  return partAnswers;
}

function peekLines(lines: string[], start: number, count: number): string[] {
  const out: string[] = [];
  for (let k = start; k < lines.length && out.length < count; k += 1) {
    const n = normalizeLine(lines[k] ?? "");
    if (n) out.push(n);
  }
  return out;
}

function parseNoteCompletionBlock(
  rawLines: string[],
  startIndex: number,
): { section: ListeningQnaNoteSection; nextIndex: number } {
  const instructionLines: string[] = [];
  const bodyLines: string[] = [];
  let i = startIndex;
  let sawComplete = false;

  while (i < rawLines.length) {
    const line = normalizeLine(rawLines[i] ?? "");
    if (!line) {
      if (sawComplete) bodyLines.push("");
      i += 1;
      continue;
    }
    if (PART_HEADER_RE.test(line)) break;
    if (!sawComplete && (QUESTIONS_RANGE_RE.test(line) || SINGLE_QUESTION_RE.test(line))) {
      i += 1;
      continue;
    }
    if (COMPLETE_BELOW_RE.test(line)) {
      instructionLines.push(line);
      sawComplete = true;
      i += 1;
      continue;
    }
    if (!sawComplete) break;
    if (/^Write\s/i.test(line)) {
      instructionLines.push(line);
      i += 1;
      continue;
    }
    if (QUESTIONS_RANGE_RE.test(line) || SINGLE_QUESTION_RE.test(line)) break;
    bodyLines.push(rawLines[i] ?? "");
    i += 1;
  }

  return {
    section: { kind: "note-completion", instructionLines, bodyLines },
    nextIndex: i,
  };
}

function parseOptionsItemsMatchingBlock(
  rawLines: string[],
  startIndex: number,
): {
  optionsTitle: string;
  options: { letter: string; text: string }[];
  itemsTitle: string;
  items: { number: number; label: string }[];
  nextIndex: number;
} {
  let optionsTitle = "Options";
  const options: { letter: string; text: string }[] = [];
  let itemsTitle = "";
  const items: { number: number; label: string }[] = [];
  let j = startIndex;

  while (j < rawLines.length) {
    const row = normalizeLine(rawLines[j] ?? "");
    if (!row) {
      j += 1;
      continue;
    }
    const opt = row.match(MCQ_OPTION_RE);
    if (opt && items.length === 0) {
      options.push({ letter: opt[1]!.toUpperCase(), text: opt[2]!.trim() });
      j += 1;
      continue;
    }
    const itemMatch = row.match(MAP_ITEM_RE);
    if (itemMatch) {
      items.push({ number: Number.parseInt(itemMatch[1]!, 10), label: itemMatch[2]!.trim() });
      j += 1;
      continue;
    }
    if (QUESTIONS_RANGE_RE.test(row) || SINGLE_QUESTION_RE.test(row) || PART_HEADER_RE.test(row)) break;
    if (
      options.length === 0 &&
      !/^Choose\s/i.test(row) &&
      !/^What\s/i.test(row) &&
      !/^Write the correct (letter|answer)/i.test(row)
    ) {
      optionsTitle = row;
      j += 1;
      continue;
    }
    if (options.length > 0 && items.length === 0) {
      itemsTitle = row;
      j += 1;
      continue;
    }
    j += 1;
  }

  return { optionsTitle, options, itemsTitle, items, nextIndex: j };
}

function parsePartBody(partNumber: number, body: string, answers: Record<string, string>): ListeningQnaPart {
  const rawLines = body.split(/\r?\n/);
  const sections: ListeningQnaSection[] = [];
  let i = 0;

  while (i < rawLines.length) {
    const line = normalizeLine(rawLines[i] ?? "");
    if (!line) {
      i += 1;
      continue;
    }

    if (COMPLETE_BELOW_RE.test(line)) {
      const { section, nextIndex } = parseNoteCompletionBlock(rawLines, i);
      sections.push(section);
      i = nextIndex;
      continue;
    }

    const rangeMatch = line.match(QUESTIONS_RANGE_RE);
    const singleMatch = line.match(SINGLE_QUESTION_RE);
    if (rangeMatch || singleMatch) {
      const peek = peekLines(rawLines, i + 1, 4).join(" ");
      if (COMPLETE_BELOW_RE.test(peek)) {
        const { section, nextIndex } = parseNoteCompletionBlock(rawLines, i);
        sections.push(section);
        i = nextIndex;
        continue;
      }

      const instructionLines: string[] = [];
      let j = i + 1;
      while (j < rawLines.length) {
        const instr = normalizeLine(rawLines[j] ?? "");
        if (!instr) {
          j += 1;
          continue;
        }
        if (MCQ_OPTION_RE.test(instr) || MAP_ITEM_RE.test(instr) || /^Opinions\s*$/i.test(instr)) break;
        if (
          /^Choose/i.test(instr) ||
          /^Label the map/i.test(instr) ||
          /^Write the correct (letter|answer)/i.test(instr) ||
          /^What\s/i.test(instr) ||
          /^What is the students/i.test(instr) ||
          /^Where\s/i.test(instr) ||
          /^Who\s/i.test(instr) ||
          CHOOSE_FROM_BOX_RE.test(instr)
        ) {
          instructionLines.push(instr);
          j += 1;
          continue;
        }
        if (CHOOSE_FROM_BOX_RE.test(peekLines(rawLines, j, 6).join(" "))) {
          instructionLines.push(instr);
          j += 1;
          continue;
        }
        break;
      }

      if (/Label the map below/i.test(instructionLines.join(" "))) {
        const items: { number: number; label: string }[] = [];
        let imageUrl: string | undefined;
        let letterRange: string | undefined;
        for (const instr of instructionLines) {
          letterRange = letterRange ?? extractLetterRange(instr);
        }
        j = i + 1;
        while (j < rawLines.length) {
          const row = normalizeLine(rawLines[j] ?? "");
          if (!row) {
            j += 1;
            continue;
          }
          const img = row.match(IMAGE_LINE_RE);
          if (img) {
            imageUrl = img[1]!.trim();
            j += 1;
            continue;
          }
          const mapItem = row.match(MAP_ITEM_RE);
          if (mapItem) {
            items.push({ number: Number.parseInt(mapItem[1]!, 10), label: mapItem[2]!.trim() });
            j += 1;
            continue;
          }
          if (QUESTIONS_RANGE_RE.test(row) || SINGLE_QUESTION_RE.test(row) || PART_HEADER_RE.test(row)) break;
          if (MCQ_OPTION_RE.test(row)) break;
          j += 1;
        }
        sections.push({ kind: "map", instructionLines, imageUrl, letterRange, items });
        i = j;
        continue;
      }

      if (/Choose\s+TWO\s+letters/i.test(instructionLines.join(" "))) {
        const qNums = rangeMatch
          ? ([Number.parseInt(rangeMatch[1]!, 10), Number.parseInt(rangeMatch[2]!, 10)] as [number, number])
          : ([Number.parseInt(singleMatch![1]!, 10), Number.parseInt(singleMatch![1]!, 10)] as [number, number]);
        let prompt = "";
        const options: { letter: string; text: string }[] = [];
        j = i + 1;
        while (j < rawLines.length) {
          const row = normalizeLine(rawLines[j] ?? "");
          if (!row) {
            j += 1;
            continue;
          }
          const opt = row.match(MCQ_OPTION_RE);
          if (opt) {
            options.push({ letter: opt[1]!.toUpperCase(), text: opt[2]!.trim() });
            j += 1;
            continue;
          }
          if (/^Which TWO/i.test(row)) {
            prompt = row;
            j += 1;
            continue;
          }
          if (QUESTIONS_RANGE_RE.test(row) || SINGLE_QUESTION_RE.test(row) || PART_HEADER_RE.test(row)) break;
          j += 1;
        }
        sections.push({ kind: "choose-two", questionNumbers: qNums, instructionLines, prompt, options });
        i = j;
        continue;
      }

      if (CHOOSE_FROM_BOX_RE.test(instructionLines.join(" "))) {
        const { optionsTitle, options, itemsTitle, items, nextIndex } = parseOptionsItemsMatchingBlock(rawLines, i + 1);
        sections.push({ kind: "matching", instructionLines, optionsTitle, options, itemsTitle, items });
        i = nextIndex;
        continue;
      }

      const instrText = instructionLines.join(" ");
      if (/Write the correct (letter|answer)/i.test(instrText) && !/Label the map below/i.test(instrText)) {
        const { optionsTitle, options, itemsTitle, items, nextIndex } = parseOptionsItemsMatchingBlock(rawLines, j);
        if (items.length > 0) {
          sections.push({ kind: "matching", instructionLines, optionsTitle, options, itemsTitle, items });
          i = nextIndex;
          continue;
        }
      }

      const questions: ListeningQnaMcqQuestion[] = [];
      j = i + 1;
      while (j < rawLines.length) {
        const row = normalizeLine(rawLines[j] ?? "");
        if (!row) {
          j += 1;
          continue;
        }
        const qMatch = row.match(/^(\d+)\s+(.+)$/);
        if (qMatch && !MCQ_OPTION_RE.test(row)) {
          const num = Number.parseInt(qMatch[1]!, 10);
          const prompt = qMatch[2]!.trim();
          const opts: { letter: string; text: string }[] = [];
          j += 1;
          while (j < rawLines.length) {
            const optLine = normalizeLine(rawLines[j] ?? "");
            const opt = optLine.match(MCQ_OPTION_RE);
            if (!opt) break;
            opts.push({ letter: opt[1]!.toUpperCase(), text: opt[2]!.trim() });
            j += 1;
          }
          if (opts.length > 0) {
            questions.push({ number: num, prompt, options: opts });
          } else {
            j += 1;
          }
          continue;
        }
        if (QUESTIONS_RANGE_RE.test(row) || SINGLE_QUESTION_RE.test(row) || PART_HEADER_RE.test(row)) break;
        j += 1;
      }
      if (questions.length > 0) {
        sections.push({ kind: "mcq", instructionLines, questions });
      }
      i = j;
      continue;
    }

    i += 1;
  }

  return { partNumber, sections, answers };
}

export function parseListeningQnaText(fullText: string): ParsedListeningQnaFile {
  const answersSplit = fullText.split(ANSWERS_HEADER_RE);
  const questionText = answersSplit[0] ?? fullText;
  const answerLines = (answersSplit[1] ?? "").split(/\r?\n/);
  const globalAnswers = parseAnswerKey(answerLines);

  const parts = new Map<number, ListeningQnaPart>();
  for (const block of splitPartBlocks(questionText)) {
    parts.set(
      block.partNumber,
      parsePartBody(block.partNumber, block.body, partAnswerSlice(globalAnswers, block.partNumber)),
    );
  }

  return { parts };
}

export function getListeningQnaPart(parsed: ParsedListeningQnaFile, partNumber: number): ListeningQnaPart | null {
  return parsed.parts.get(partNumber) ?? null;
}

export function listeningQnaPartQuestionNumbers(part: ListeningQnaPart): number[] {
  const nums = new Set<number>();
  for (const section of part.sections) {
    switch (section.kind) {
      case "note-completion":
        for (const line of section.bodyLines) {
          let m: RegExpExecArray | null;
          BLANK_RE.lastIndex = 0;
          while ((m = BLANK_RE.exec(line)) !== null) {
            nums.add(Number.parseInt(m[1]!, 10));
          }
        }
        break;
      case "mcq":
        for (const q of section.questions) nums.add(q.number);
        break;
      case "map":
        for (const item of section.items) nums.add(item.number);
        break;
      case "choose-two":
        nums.add(section.questionNumbers[0]);
        nums.add(section.questionNumbers[1]);
        break;
      case "matching":
        for (const item of section.items) nums.add(item.number);
        break;
      default:
        break;
    }
  }
  return [...nums].sort((a, b) => a - b);
}

export { BLANK_RE };
