/** Tách đoạn bài IELTS (thường mỗi đoạn = một dòng, không có dòng trống giữa). */
export function splitBodyParagraphs(body: string): string[] {
  const normalized = body.replace(/\r\n/g, "\n").replace(/\u00a0/g, " ").trim();
  if (!normalized) return [];

  const byDouble = normalized
    .split(/\n\s*\n+/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
  if (byDouble.length > 1) return byDouble;

  return normalized
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitSentences(paragraph: string): string[] {
  const parts = paragraph.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g);
  if (!parts) return [paragraph];
  return parts.map((s) => s.trim()).filter((s) => s.length >= 40);
}

/** Chọn một câu trích dẫn giữa bài — callout “dễ thở” kiểu Stitch. */
export function pickPullQuote(paragraphs: string[]): {
  quote: string;
  insertAfterIndex: number;
} {
  if (paragraphs.length === 0) return { quote: "", insertAfterIndex: 0 };

  const candidates: { text: string; paraIndex: number; score: number }[] = [];
  for (let i = 0; i < paragraphs.length; i++) {
    for (const sentence of splitSentences(paragraphs[i] ?? "")) {
      const len = sentence.length;
      if (len < 55 || len > 240) continue;
      const midBias = 1 - Math.abs(i - (paragraphs.length - 1) / 2) / Math.max(1, paragraphs.length);
      candidates.push({ text: sentence, paraIndex: i, score: midBias * 10 + (len > 80 && len < 180 ? 5 : 0) });
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  const pick = candidates[0];
  if (!pick) {
    const fallback = paragraphs[Math.floor(paragraphs.length / 2)] ?? paragraphs[0] ?? "";
    const snippet = fallback.length > 200 ? `${fallback.slice(0, 197)}…` : fallback;
    return {
      quote: snippet,
      insertAfterIndex: Math.max(0, Math.floor(paragraphs.length / 2) - 1),
    };
  }

  return {
    quote: pick.text,
    insertAfterIndex: Math.min(pick.paraIndex, paragraphs.length - 1),
  };
}
