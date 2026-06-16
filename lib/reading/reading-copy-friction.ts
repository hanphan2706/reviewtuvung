const MIN_CHARS_FOR_FRICTION = 140;
const LONG_SINGLE_BLOCK_CHARS = 280;
const COPY_FOOTER = "\n\nfrom anthichtuhoc\n";

const NOISE_ALPHABET = "bcdfghjklmnpqrstvwxyz23456789";

function noiseToken(seed: number, length = 8): string {
  let s = seed;
  let token = "";
  for (let i = 0; i < length; i += 1) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    token += NOISE_ALPHABET[s % NOISE_ALPHABET.length];
  }
  return `[${token}]`;
}

function normalizeParagraph(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Tách đoạn khi copy từ nhiều <p> (có thể chỉ có \n đơn, không phải \n\n). */
export function splitCopyParagraphs(text: string): string[] {
  const normalized = text.replace(/\r\n/g, "\n").trim();
  if (!normalized) return [];

  const byDouble = normalized
    .split(/\n\s*\n/)
    .map(normalizeParagraph)
    .filter(Boolean);
  if (byDouble.length >= 2) return byDouble;

  const bySingle = normalized
    .split(/\n/)
    .map(normalizeParagraph)
    .filter(Boolean);

  if (bySingle.length >= 2) {
    const substantial = bySingle.filter((line) => line.length >= 40);
    if (substantial.length >= 2) return substantial;
    if (bySingle.length >= 3) return bySingle;
  }

  if (byDouble.length) return byDouble;
  if (bySingle.length) return bySingle;
  return [normalized];
}

/** Chọn ngắn (tra từ / thêm deck) — giữ clipboard sạch. */
export function shouldApplyReadingCopyFriction(text: string): boolean {
  const trimmed = text.replace(/\r\n/g, "\n").trim();
  if (!trimmed) return false;
  if (trimmed.length < MIN_CHARS_FOR_FRICTION) return false;

  const paragraphs = splitCopyParagraphs(trimmed);
  if (paragraphs.length >= 2) return true;

  return trimmed.length >= LONG_SINGLE_BLOCK_CHARS;
}

/** Chèn token nhiễu hiển thị vào giữa thân đoạn (và thêm 1–2 điểm nếu đoạn dài). */
function insertMidParagraphNoise(text: string, paragraphIndex: number): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return text;
  if (words.length < 4) {
    const mid = Math.max(1, Math.floor(words.length / 2));
    words.splice(mid, 0, noiseToken(paragraphIndex * 17 + 3, 7));
    return words.join(" ");
  }

  const insertAt = (ratio: number, seed: number) => {
    const idx = Math.max(1, Math.min(words.length - 1, Math.floor(words.length * ratio)));
    words.splice(idx, 0, noiseToken(seed, 8));
  };

  insertAt(0.5, paragraphIndex * 7919 + 11);

  if (words.length >= 55) {
    insertAt(0.33, paragraphIndex * 7919 + 29);
  }
  if (words.length >= 90) {
    insertAt(0.66, paragraphIndex * 7919 + 47);
  }

  return words.join(" ");
}

export function applyReadingCopyFriction(text: string): string {
  const paragraphs = splitCopyParagraphs(text);

  const blocks =
    paragraphs.length > 0
      ? paragraphs.map((p, i) => insertMidParagraphNoise(p, i))
      : [insertMidParagraphNoise(normalizeParagraph(text), 0)];

  const body = blocks.join("\n\n");
  return `${body}${COPY_FOOTER}`;
}
