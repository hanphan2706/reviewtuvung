/** Tách đoạn hướng dẫn TFNG thành intro + từng dòng YES/NO/NOT GIVEN (hoặc TRUE/FALSE/NOT GIVEN). */
export function splitTfngInstructionSegments(
  text: string,
  variant: "true-false-ng" | "yes-no-ng",
): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const splitRe =
    variant === "yes-no-ng"
      ? /\s+(?=(?:NOT GIVEN|NO|YES)\s+if\b)/i
      : /\s+(?=(?:NOT GIVEN|FALSE|TRUE)\s+if\b)/i;

  const segments = trimmed.split(splitRe).map((s) => s.trim()).filter(Boolean);
  return segments.length > 0 ? segments : [trimmed];
}
