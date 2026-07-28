import {
  mergeLetteredParagraphMarkers,
  prepareArticleBody,
} from "@/lib/reading/article-body-structure";

export type ReadingPassageTranslation = {
  paragraphs: string[];
};

export function parseReadingPassageTranslation(data: unknown): ReadingPassageTranslation | null {
  if (!data || typeof data !== "object") return null;
  const paragraphs = (data as { paragraphs?: unknown }).paragraphs;
  if (!Array.isArray(paragraphs)) return null;
  const cleaned = mergeLetteredParagraphMarkers(
    paragraphs.map((p) => (typeof p === "string" ? p.trim() : "")).filter(Boolean),
  );
  if (cleaned.length === 0) return null;
  return { paragraphs: cleaned };
}

/** Đảm bảo số đoạn VI khớp EN (deck + thân bài sau khi chuẩn hóa). */
export function translationMatchesPassage(
  body: string,
  translation: ReadingPassageTranslation,
  deckText = "",
): boolean {
  const prepared = prepareArticleBody(body, undefined, deckText);
  const enSlots = (prepared.deck ? 1 : 0) + prepared.paragraphs.length;
  const viSlots = mergeLetteredParagraphMarkers(translation.paragraphs).length;
  return enSlots === viSlots;
}
