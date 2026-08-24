/** Copy ngắn (tra từ) giữ nguyên; từ 80 ký tự trở lên thì nhiễu clipboard. */
const MIN_CHARS_FOR_FRICTION = 80;

export function shouldApplyWritingCopyFriction(text: string): boolean {
  return text.replace(/\r\n/g, "\n").trim().length >= MIN_CHARS_FOR_FRICTION;
}
