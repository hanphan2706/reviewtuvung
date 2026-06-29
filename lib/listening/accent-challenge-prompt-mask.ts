export type AccentChallengePromptSegment =
  | { type: "text"; value: string }
  | { type: "blank"; charCount: number };

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "to",
  "in",
  "on",
  "at",
  "by",
  "for",
  "of",
  "and",
  "or",
  "but",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "can",
  "that",
  "this",
  "these",
  "those",
  "it",
  "its",
  "my",
  "your",
  "his",
  "her",
  "our",
  "their",
  "we",
  "you",
  "he",
  "she",
  "they",
  "me",
  "him",
  "us",
  "them",
  "so",
  "if",
  "as",
  "with",
  "from",
  "up",
  "about",
  "into",
  "through",
  "during",
  "before",
  "after",
  "between",
  "out",
  "off",
  "over",
  "under",
  "again",
  "then",
  "once",
  "here",
  "there",
  "when",
  "where",
  "why",
  "how",
  "all",
  "each",
  "few",
  "more",
  "most",
  "other",
  "some",
  "such",
  "no",
  "nor",
  "not",
  "only",
  "own",
  "same",
  "than",
  "too",
  "very",
  "just",
  "also",
  "now",
  "let",
  "s",
  "t",
  "re",
  "ve",
  "ll",
  "d",
  "m",
]);

const WORD_TOKEN_RE = /[\p{L}\p{N}']+/gu;

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/['']/g, "'");
}

function stableHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function isContraction(word: string): boolean {
  return /['']/.test(word);
}

function blankCountForSentence(wordCount: number): number {
  if (wordCount <= 6) return 1;
  if (wordCount <= 11) return 2;
  if (wordCount <= 16) return 3;
  return 4;
}

function scoreBlankCandidate(word: string): number {
  const normalized = normalizeWord(word);
  if (isContraction(word)) return 100 + normalized.length;
  if (STOP_WORDS.has(normalized)) return 0;
  if (normalized.length <= 2) return 5;
  return 20 + normalized.length;
}

type SentenceToken = {
  start: number;
  end: number;
  word: string;
};

function sentenceTokens(text: string): SentenceToken[] {
  const tokens: SentenceToken[] = [];
  WORD_TOKEN_RE.lastIndex = 0;
  let match: RegExpExecArray | null = WORD_TOKEN_RE.exec(text);
  while (match) {
    tokens.push({
      start: match.index,
      end: match.index + match[0].length,
      word: match[0],
    });
    match = WORD_TOKEN_RE.exec(text);
  }
  return tokens;
}

function pickBlankTokenIndexes(tokens: SentenceToken[], seed: string): Set<number> {
  const maxBlanks = blankCountForSentence(tokens.length);
  const ranked = tokens
    .map((token, index) => ({
      index,
      score: scoreBlankCandidate(token.word),
      tieBreak: stableHash(`${seed}:${index}:${token.word}`),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.tieBreak - b.tieBreak);

  const selected = new Set<number>();
  for (const item of ranked) {
    if (selected.size >= maxBlanks) break;
    selected.add(item.index);
  }

  if (selected.size === 0 && tokens.length > 0) {
    const fallbackIndex =
      stableHash(`${seed}:fallback`) % tokens.length;
    selected.add(fallbackIndex);
  }

  return selected;
}

function segmentsFromText(text: string, blankIndexes: Set<number>): AccentChallengePromptSegment[] {
  const tokens = sentenceTokens(text);
  if (tokens.length === 0) {
    return [{ type: "text", value: text }];
  }

  const segments: AccentChallengePromptSegment[] = [];
  let cursor = 0;

  tokens.forEach((token, index) => {
    if (token.start > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, token.start) });
    }

    if (blankIndexes.has(index)) {
      segments.push({ type: "blank", charCount: token.word.length });
    } else {
      segments.push({ type: "text", value: text.slice(token.start, token.end) });
    }

    cursor = token.end;
  });

  if (cursor < text.length) {
    segments.push({ type: "text", value: text.slice(cursor) });
  }

  return mergeAdjacentTextSegments(segments);
}

function mergeAdjacentTextSegments(
  segments: AccentChallengePromptSegment[],
): AccentChallengePromptSegment[] {
  const merged: AccentChallengePromptSegment[] = [];
  for (const segment of segments) {
    const last = merged[merged.length - 1];
    if (segment.type === "text" && last?.type === "text") {
      last.value += segment.value;
      continue;
    }
    merged.push(segment);
  }
  return merged;
}

export function accentChallengeWordPromptSegments(word: string, revealed: boolean): AccentChallengePromptSegment[] {
  if (revealed) {
    return [{ type: "text", value: word }];
  }
  return [{ type: "blank", charCount: Math.max(word.length, 4) }];
}

export function accentChallengeSentencePromptSegments(
  text: string,
  seed: string,
  revealed: boolean,
): AccentChallengePromptSegment[] {
  if (revealed) {
    return [{ type: "text", value: text }];
  }

  const tokens = sentenceTokens(text);
  const blankIndexes = pickBlankTokenIndexes(tokens, seed);
  return segmentsFromText(text, blankIndexes);
}

export function accentChallengePromptPlainText(segments: readonly AccentChallengePromptSegment[]): string {
  return segments
    .map((segment) => (segment.type === "text" ? segment.value : "____"))
    .join("");
}
