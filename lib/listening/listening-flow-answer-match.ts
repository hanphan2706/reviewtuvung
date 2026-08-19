export function normalizeListeningAnswer(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’]/g, "'")
    .replace(/[^a-z0-9'\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isListeningAnswerMatch(input: string, accepted: readonly string[]): boolean {
  const got = normalizeListeningAnswer(input);
  if (!got) return false;
  return accepted.some((answer) => normalizeListeningAnswer(answer) === got);
}

export function isListeningParaphraseMatch(input: string, accepted: readonly string[]): boolean {
  if (isListeningAnswerMatch(input, accepted)) return true;
  const got = normalizeListeningAnswer(input);
  if (!got) return false;
  const gotTokens = new Set(got.split(" ").filter((word) => word.length > 2));
  if (gotTokens.size === 0) return false;
  return accepted.some((answer) => {
    const tokens = normalizeListeningAnswer(answer)
      .split(" ")
      .filter((word) => word.length > 2);
    if (tokens.length === 0) return false;
    const hit = tokens.filter((token) => gotTokens.has(token)).length;
    return hit / tokens.length >= 0.5;
  });
}
