const PARAGRAPH_BREAK = /\n\s*\n+/;

/** Fallback when transcript is one long line (legacy export). */
const WORDS_PER_PARAGRAPH = 28;

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Capitalize the first letter after sentence starts (. ! ?) and at paragraph start. */
export function capitalizeTranscriptSentences(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;

  return trimmed.replace(/(^|[.!?]\s+)(\p{Ll})/gu, (_, prefix: string, letter: string) => {
    return prefix + letter.toUpperCase();
  });
}

function chunkByWordCount(text: string): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const paragraphs: string[] = [];
  for (let i = 0; i < words.length; i += WORDS_PER_PARAGRAPH) {
    paragraphs.push(words.slice(i, i + WORDS_PER_PARAGRAPH).join(" "));
  }
  return paragraphs;
}

/**
 * Turn raw YouTube CC text into readable paragraphs for display.
 * Prefers explicit `\n\n` breaks from the fetch script; falls back to word chunks.
 */
export function formatAccentVideoTranscriptParagraphs(
  text: string,
  options?: { capitalizeSentences?: boolean },
): string[] {
  const shouldCapitalize = options?.capitalizeSentences ?? true;
  const formatParagraph = (paragraph: string) => {
    const normalized = normalizeWhitespace(paragraph);
    return shouldCapitalize ? capitalizeTranscriptSentences(normalized) : normalized;
  };

  const trimmed = text.trim();
  if (!trimmed) return [];

  if (PARAGRAPH_BREAK.test(trimmed)) {
    return trimmed
      .split(PARAGRAPH_BREAK)
      .map(formatParagraph)
      .filter(Boolean);
  }

  const normalized = normalizeWhitespace(trimmed);
  const sentences = normalized.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length > 1) {
    const paragraphs: string[] = [];
    let chunk: string[] = [];
    for (const sentence of sentences) {
      chunk.push(sentence);
      if (chunk.length >= 3) {
        paragraphs.push(formatParagraph(chunk.join(" ")));
        chunk = [];
      }
    }
    if (chunk.length > 0) {
      paragraphs.push(formatParagraph(chunk.join(" ")));
    }
    return paragraphs;
  }

  return chunkByWordCount(normalized).map(formatParagraph);
}
