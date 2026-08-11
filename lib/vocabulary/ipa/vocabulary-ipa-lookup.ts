import { VOCABULARY_IPA_BY_KEY } from "@/lib/vocabulary/ipa/vocabulary-ipa-data";
import { normalizeIpaForDisplay } from "@/lib/reading/lookup-dictionary-utils";

/** Chuẩn hóa lemma để tra IPA (bỏ mạo từ / dấu câu nhẹ). */
export function normalizeVocabularyIpaKey(term: string): string {
  return term
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[()]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^[-\s]+|[-\s]+$/g, "");
}

function withSlashes(ipa: string): string {
  const trimmed = normalizeIpaForDisplay(ipa).replace(/^\/+|\/+$/g, "").trim();
  if (!trimmed) return "";
  return `/${trimmed}/`;
}

/**
 * Tra phiên âm IPA cho headword. Trả về `undefined` nếu không có trong lookup
 * (cụm từ / tên riêng / lemma chưa enrich).
 */
export function lookupVocabularyIpa(term: string): string | undefined {
  const key = normalizeVocabularyIpaKey(term);
  if (!key) return undefined;

  const direct = VOCABULARY_IPA_BY_KEY[key];
  if (direct) return withSlashes(direct);

  // Thử bỏ mạo từ đầu cụm ngắn: "the Netherlands" → "netherlands"
  const withoutArticle = key.replace(/^(a|an|the)\s+/, "");
  if (withoutArticle !== key) {
    const hit = VOCABULARY_IPA_BY_KEY[withoutArticle];
    if (hit) return withSlashes(hit);
  }

  return undefined;
}

/** IPA đã lưu trên thẻ, hoặc tra lại từ lookup tập trung. */
export function resolveWordIpa(term: string, storedIpa?: string | null): string | undefined {
  const stored = storedIpa?.trim();
  if (stored) return stored;
  return lookupVocabularyIpa(term);
}
