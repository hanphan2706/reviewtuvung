/**
 * ~63 wpm effective for Vietnamese learners on IELTS passages (~830 words → ~13 min).
 * Native skim rates (~200 wpm) are misleading for this product.
 */
const LEARNING_READ_WPM = 63;

const MIN_READ_MINUTES = 10;
const MAX_READ_MINUTES = 22;

export function countPassageWords(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

export function estimateReadMinutes(body: string): number {
  const words = countPassageWords(body);
  const minutes = Math.round(words / LEARNING_READ_WPM);
  return Math.min(MAX_READ_MINUTES, Math.max(MIN_READ_MINUTES, minutes));
}
