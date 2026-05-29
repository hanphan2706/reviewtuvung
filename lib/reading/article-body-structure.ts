import { stripCompassBodyJunk } from "@/lib/reading/compass-body-cleanup";
import { splitBodyParagraphs } from "@/lib/reading/format-paragraphs";

function normalizeForCompare(text: string): string {
  return text.replace(/\s+/g, " ").trim().toLowerCase();
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Nhãn đoạn IELTS đứng một dòng: `A` … `G` (không dùng trong exam HTML). */
const SECTION_LETTER_MARKER = /^[A-G]$/i;

function isSectionLetterMarker(text: string): boolean {
  return SECTION_LETTER_MARKER.test(text.trim());
}

/** Gộp / bỏ nhãn đoạn Cambridge (`A`–`G`) — chỉ cho article reader, không đổi file gốc / exam. */
export function mergeLetteredParagraphMarkers(paragraphs: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < paragraphs.length; i += 1) {
    const para = paragraphs[i]?.trim() ?? "";
    if (!para) continue;
    if (isSectionLetterMarker(para)) {
      if (i + 1 < paragraphs.length) {
        const next = paragraphs[i + 1]?.trim() ?? "";
        if (next && !isSectionLetterMarker(next)) {
          out.push(next);
          i += 1;
        }
      }
      continue;
    }
    out.push(para);
  }
  return out.filter((p) => !isSectionLetterMarker(p));
}

/** Tách dòng hook ngắn ngay sau tiêu đề (không có nhãn A/B). */
export function extractLeadDeckFromRawBody(body: string): { deck: string; body: string } {
  const cambridge = extractCambridgeDeckFromRawBody(body);
  if (cambridge.deck) return cambridge;

  const paragraphs = splitBodyParagraphs(body);
  if (paragraphs.length >= 2 && isLikelyDeckParagraph(paragraphs[0], paragraphs[1])) {
    return {
      deck: paragraphs[0].trim(),
      body: paragraphs.slice(1).join("\n"),
    };
  }
  return { deck: "", body };
}

/** Tách deck/hook khỏi phần mở đầu bài (Cambridge: dòng trước nhãn `A`). */
export function extractCambridgeDeckFromRawBody(body: string): { deck: string; body: string } {
  const match = body.match(/^([\s\S]+?)\n([A-G])\n([\s\S]*)$/);
  if (!match?.[1] || !match[3]) return { deck: "", body };

  const deck = match[1].replace(/\s*\n\s*/g, " ").trim();
  const rest = match[3].trim();
  if (!deck || deck.length > 220 || isSectionLetterMarker(deck)) return { deck: "", body };
  return { deck, body: `${match[2]}\n${rest}`.trim() };
}

/** Hook/deck: 1–2 câu ngắn — không phải cả đoạn mở bài dài. */
const DECK_MAX_WORDS = 32;
const DECK_MAX_CHARS = 220;

function isLikelyDeckParagraph(lead: string, next: string, subheadline?: string): boolean {
  if (isSectionLetterMarker(lead)) return false;

  const leadWords = wordCount(lead);
  const nextWords = wordCount(next);
  if (leadWords > DECK_MAX_WORDS || lead.length > DECK_MAX_CHARS) return false;
  if (nextWords < 28) return false;

  const leadNorm = normalizeForCompare(lead);
  const subNorm = subheadline ? normalizeForCompare(subheadline) : "";
  if (subNorm && leadNorm === subNorm) {
    return true;
  }

  const leadSentences = lead.split(/[.!?]+/).filter((s) => s.trim().length > 8);
  if (leadSentences.length <= 2 && leadWords <= 28 && nextWords >= leadWords + 12) {
    return true;
  }

  return lead.length <= 140 && next.length >= lead.length * 1.8;
}

export type PreparedArticleBody = {
  deck: string | null;
  paragraphs: string[];
};

/**
 * Chuẩn hóa body để hiển thị: tách deck (nếu có), bỏ nhãn A/B, không lặp hook trong thân bài.
 */
export function prepareArticleBody(
  body: string,
  subheadline?: string,
  explicitDeck?: string,
): PreparedArticleBody {
  const cleanedBody = stripCompassBodyJunk(body);

  if (explicitDeck?.trim()) {
    return {
      deck: explicitDeck.trim(),
      paragraphs: mergeLetteredParagraphMarkers(splitBodyParagraphs(cleanedBody)),
    };
  }

  const { deck: cambridgeDeck, body: withoutCambridgeDeck } = extractCambridgeDeckFromRawBody(cleanedBody);
  const paragraphs = mergeLetteredParagraphMarkers(splitBodyParagraphs(withoutCambridgeDeck));

  if (cambridgeDeck) {
    return { deck: cambridgeDeck, paragraphs };
  }

  if (paragraphs.length >= 2 && isLikelyDeckParagraph(paragraphs[0], paragraphs[1], subheadline)) {
    const [deck, ...rest] = paragraphs;
    return { deck, paragraphs: rest };
  }

  return { deck: null, paragraphs };
}

/** Căn đoạn dịch với deck + thân bài (sau khi bỏ nhãn A/B). */
export function alignTranslationToParagraphs(
  deck: string | null,
  paragraphs: string[],
  translationParagraphs: string[] | null | undefined,
): (string | undefined)[] {
  const vi = translationParagraphs
    ? mergeLetteredParagraphMarkers(translationParagraphs)
    : [];
  const slotCount = (deck ? 1 : 0) + paragraphs.length;
  return Array.from({ length: slotCount }, (_, i) => vi[i] ?? undefined);
}
