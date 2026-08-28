import type { ExamSectionKind } from "@/lib/reading/parse-passage-questions";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";
import type { ReadingExplanationQuestion } from "@/lib/reading/load-reading-explanations";

export type ExplanationOrderIssue = {
  passage: number;
  section: string;
  question: number;
  kind: string;
  severity: "error" | "warn";
  message: string;
};

/** No scan-order check — answers are not tied to increasing question numbers in passage. */
const NON_SEQUENTIAL_KINDS = new Set<ExamSectionKind>([
  "paragraph-match",
  "people-match",
  "choose-two",
]);

const SEQUENTIAL_KINDS = new Set<ExamSectionKind>([
  "note-fill",
  "summary-fill",
  "table-fill",
  "tfng",
  "mcq-single",
  "sentence-fill",
  "sentence-ending",
]);

export type PassageParagraph = {
  index: number;
  letter: string;
  text: string;
};

export function splitPassageParagraphs(body: string): PassageParagraph[] {
  // Cambridge style: "A\n\nText" or "A.\nText" or "A. Text"
  const letterLineSplit = body.split(/(?=^[A-I]\s*\n)/m).filter((s) => /^[A-I]\s/m.test(s));
  if (letterLineSplit.length >= 2) {
    return letterLineSplit.map((p, i) => ({
      index: i,
      letter: p.trim().charAt(0).toUpperCase(),
      text: p,
    }));
  }

  const letterDotSplit = body.split(/(?=^[A-I]\.\s)/m).filter((s) => /^[A-I]\.\s/m.test(s));
  if (letterDotSplit.length >= 2) {
    return letterDotSplit.map((p, i) => {
      const letter = p.trim().charAt(0).toUpperCase();
      return { index: i, letter, text: p };
    });
  }

  const blocks = body.split(/\n\s*\n/).filter((b) => b.trim().length > 60);
  return blocks.map((text, i) => ({ index: i, letter: String(i), text }));
}

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function quoteSegments(quote: string): string[] {
  const parts = quote
    .split(/…|\.{3,}/u)
    .map((s) => s.trim())
    .filter((s) => s.length >= 12);
  return parts.length > 0 ? parts : [quote.trim()];
}

function paragraphContainsQuote(paragraph: PassageParagraph, quote: string): boolean {
  const n = norm(quote);
  if (!n || n.length < 8) return false;

  const body = norm(paragraph.text);
  for (const segment of quoteSegments(quote)) {
    const seg = norm(segment);
    if (seg.length < 8) continue;
    for (let len = Math.min(seg.length, 120); len >= 16; len -= 8) {
      if (body.includes(seg.slice(0, len))) return true;
    }
    if (seg.length >= 20 && body.includes(seg.slice(-40))) return true;
  }
  return false;
}

/** Find paragraph containing quote (best-effort substring / prefix match). */
export function findQuoteParagraph(
  paragraphs: PassageParagraph[],
  quote: string,
): PassageParagraph | null {
  const n = norm(quote);
  if (!n || n.length < 8) return null;

  for (const segment of quoteSegments(quote)) {
    const seg = norm(segment);
    if (seg.length < 8) continue;
    for (let len = Math.min(seg.length, 120); len >= 16; len -= 8) {
      const sub = seg.slice(0, len);
      for (const p of paragraphs) {
        if (norm(p.text).includes(sub)) return p;
      }
    }
    if (seg.length >= 20) {
      const tail = seg.slice(-40);
      for (const p of paragraphs) {
        if (norm(p.text).includes(tail)) return p;
      }
    }
  }
  return null;
}

function quoteAlsoInLaterParagraphs(
  paragraphs: PassageParagraph[],
  quote: string,
  afterIndex: number,
): boolean {
  for (const p of paragraphs) {
    if (p.index <= afterIndex) continue;
    if (paragraphContainsQuote(p, quote)) return true;
  }
  return false;
}

function evidenceQuotes(item: ReadingExplanationQuestion): string[] {
  const out: string[] = [];
  if (item.evidence?.quoteEn?.trim()) out.push(item.evidence.quoteEn.trim());
  if (item.evidence?.quotesEn?.length) {
    for (const q of item.evidence.quotesEn) {
      if (q?.trim()) out.push(q.trim());
    }
  }
  return out;
}

function paragraphLetterIndex(letter: string): number | null {
  const upper = letter.trim().toUpperCase();
  if (/^[A-I]$/.test(upper)) return upper.charCodeAt(0) - 65;
  return null;
}

export function locateExplanationInPassage(
  paragraphs: PassageParagraph[],
  item: ReadingExplanationQuestion,
): PassageParagraph | null {
  for (const quote of evidenceQuotes(item)) {
    const hit = findQuoteParagraph(paragraphs, quote);
    if (hit) return hit;
  }
  const letter = item.evidence?.paragraphLetter?.trim().toUpperCase();
  if (letter && /^[A-I]$/.test(letter)) {
    return paragraphs.find((p) => p.letter === letter) ?? null;
  }
  return null;
}

export function validateExplanationPassageOrder(
  passageBlock: ReadingPassageBlock,
  sections: Array<{
    title: string;
    kind: ExamSectionKind;
    questionNums: number[];
  }>,
  questions: Record<string, ReadingExplanationQuestion>,
): ExplanationOrderIssue[] {
  const issues: ExplanationOrderIssue[] = [];
  const paragraphs = splitPassageParagraphs(passageBlock.body);

  for (const section of sections) {
    const nums = [...section.questionNums].sort((a, b) => a - b);

    for (const num of nums) {
      const item = questions[String(num)];
      if (!item?.steps?.length) continue;

      const located = locateExplanationInPassage(paragraphs, item);
      const quotes = evidenceQuotes(item);

      if (quotes.length > 0 && !located) {
        issues.push({
          passage: passageBlock.passage,
          section: section.title,
          question: num,
          kind: section.kind,
          severity: "error",
          message: `Evidence không tìm thấy trong passage: "${quotes[0].slice(0, 72)}…"`,
        });
        continue;
      }

      const declared = item.evidence?.paragraphLetter?.trim().toUpperCase();
      if (declared && located && /^[A-I]$/.test(declared) && declared !== located.letter) {
        issues.push({
          passage: passageBlock.passage,
          section: section.title,
          question: num,
          kind: section.kind,
          severity: "error",
          message: `paragraphLetter ${declared} nhưng evidence nằm ở đoạn ${located.letter}`,
        });
      }
    }

    if (NON_SEQUENTIAL_KINDS.has(section.kind)) continue;
    if (!SEQUENTIAL_KINDS.has(section.kind)) continue;

    const mapped: Array<{ num: number; index: number; letter: string }> = [];
    for (const num of nums) {
      const item = questions[String(num)];
      if (!item) continue;
      const loc = locateExplanationInPassage(paragraphs, item);
      if (loc) mapped.push({ num, index: loc.index, letter: loc.letter });
    }

    for (let i = 1; i < mapped.length; i++) {
      const prev = mapped[i - 1];
      const cur = mapped[i];
      if (cur.index < prev.index) {
        const curItem = questions[String(cur.num)];
        const curQuote = evidenceQuotes(curItem ?? { passage: 0, type: "", answer: "", steps: [] })[0];
        const alsoLater =
          curQuote && quoteAlsoInLaterParagraphs(paragraphs, curQuote, prev.index);
        issues.push({
          passage: passageBlock.passage,
          section: section.title,
          question: cur.num,
          kind: section.kind,
          severity: alsoLater ? "error" : "warn",
          message: alsoLater
            ? `Thứ tự passage: Q${prev.num} ở đoạn ${prev.letter} nhưng Q${cur.num} evidence ở đoạn ${cur.letter} (có thể trích sai đoạn)`
            : `Thứ tự passage: Q${prev.num} ở đoạn ${prev.letter} nhưng Q${cur.num} ở đoạn ${cur.letter} — quote chỉ có ở đoạn trước, có thể đúng`,
        });
      }
    }
  }

  return issues;
}

export function validateChooseTwoClusters(
  paragraphs: PassageParagraph[],
  questions: Record<string, ReadingExplanationQuestion>,
): Array<{ pair: [number, number]; gap: number; letters: [string, string] }> {
  const out: Array<{ pair: [number, number]; gap: number; letters: [string, string] }> = [];
  const seen = new Set<string>();

  for (const [key, item] of Object.entries(questions)) {
    if (item.type !== "choose-two" || !item.answerPair || item.answerPair.length !== 2) continue;
    const [a, b] = item.answerPair;
    const sig = `${a}-${b}`;
    if (seen.has(sig)) continue;
    seen.add(sig);

    const pa = locateExplanationInPassage(paragraphs, questions[String(a)] ?? item);
    const pb = locateExplanationInPassage(paragraphs, questions[String(b)] ?? item);
    if (!pa || !pb) continue;
    out.push({ pair: [a, b], gap: Math.abs(pa.index - pb.index), letters: [pa.letter, pb.letter] });
  }
  return out;
}
