const IRREGULAR_PAST_TO_BASE: Record<string, string> = {
  built: "build",
  sent: "send",
  spent: "spend",
  meant: "mean",
  left: "leave",
  kept: "keep",
  felt: "feel",
  held: "hold",
  sold: "sell",
  told: "tell",
  found: "find",
  brought: "bring",
  bought: "buy",
  thought: "think",
  taught: "teach",
  caught: "catch",
  fought: "fight",
  sought: "seek",
  wrought: "work",
};

/** Gợi ý loại từ theo hình thái (lemma) — ưu tiên sense phù hợp ngữ cảnh đọc. */
export function preferredPosBoost(lemma: string, partOfSpeech: string, headword?: string): number {
  const w = lemma.toLowerCase().replace(/[^a-z'-]/g, "");
  const hw = (headword ?? w).toLowerCase();
  const pos = partOfSpeech.toLowerCase();
  const isInflected = w !== hw || IRREGULAR_PAST_TO_BASE[w];

  if (isInflected) {
    if (pos === "verb") return 55;
    if (pos === "adjective") return 50;
    if (pos === "noun") return -25;
  }

  if (w.endsWith("ed") && w.length > 4) {
    if (pos === "adjective") return 40;
    if (pos === "verb") return -20;
  }
  if (w.endsWith("ing") && w.length > 5) {
    if (pos === "noun") return 20;
    if (pos === "adjective") return 12;
    if (pos === "verb") return 4;
  }
  if (w.endsWith("ly") && w.length > 4) {
    if (pos === "adverb") return 35;
  }
  if (w.endsWith("ness") && pos === "noun") return 25;
  if (w.endsWith("tion") || w.endsWith("sion")) {
    if (pos === "noun") return 20;
  }

  return 0;
}

/** Rút gọn câu định nghĩa trước khi gửi MyMemory — dịch ổn hơn, ít lỗi hơn. */
export function englishGlossForTranslation(definitionEn: string): string {
  let t = definitionEn.trim();
  if (/^To\s+/i.test(t)) t = t.replace(/^To\s+/i, "");
  const semi = t.indexOf(";");
  if (semi > 12 && semi < 120) t = t.slice(0, semi).trim();
  const comma = t.indexOf(",");
  if (comma > 20 && comma < 90 && !t.slice(0, comma).includes(" or ")) {
    t = t.slice(0, comma).trim();
  }
  return t.slice(0, 220);
}

function repeatedPhraseVi(vi: string): boolean {
  const m = vi.match(/(.{4,40}?)\s+hoặc\s+\1/i);
  return Boolean(m);
}

/** Cụm/câu dịch nhanh (5 từ trở lên) — không áp quy tắc gloss từ điển. */
export function isSuspiciousPhraseTranslation(english: string, vietnamese: string): boolean {
  const en = english.trim();
  const vi = vietnamese.trim();
  if (!vi) return true;
  if (vi.toLowerCase() === en.toLowerCase()) return true;
  if (repeatedPhraseVi(vi)) return true;
  if (/MYMEMORY WARNING/i.test(vi)) return true;
  return false;
}

/** Bản dịch MyMemory có vẻ sai / khó hiểu — ẩn hoặc hạ tần. */
export function isSuspiciousGloss(english: string, vietnamese: string): boolean {
  const en = english.trim();
  const vi = vietnamese.trim();
  if (!vi) return true;
  if (vi.toLowerCase() === en.toLowerCase()) return true;
  if (repeatedPhraseVi(vi)) return true;

  const enL = en.toLowerCase();
  const viL = vi.toLowerCase();

  if (
    (/\b(pucker|wrinkl|crease|furrow)\b/.test(enL) || /\buneven\b/.test(enL)) &&
    /\b(mỉm cười|cười nhẹ|nụ cười)\b/.test(viL)
  ) {
    return true;
  }

  if (vi.length > en.length * 3 && en.length < 50) return true;

  if (isLiteralDefinitionTranslation(en, vi)) return true;

  const enWords = new Set(enL.split(/\W+/).filter((w) => w.length > 3));
  const viWords = viL.split(/\s+/).filter((w) => w.length > 2);
  if (enWords.size >= 3 && viWords.length > 12 && !viL.includes("nhăn") && enL.includes("wrinkl")) {
    return true;
  }

  return false;
}

/** Dịch nguyên câu định nghĩa EN → VI dài, không phải gloss từ điển. */
export function isLiteralDefinitionTranslation(definitionEn: string, vietnamese: string): boolean {
  const vi = vietnamese.trim();
  const en = definitionEn.trim();
  if (vi.length > 55) return true;
  if (en.length > 35 && vi.split(/\s+/).length >= 10) return true;
  if (/đưa vào một nhóm|thành viên \(mới\)|dưới dạng một phần/i.test(vi)) return true;
  return false;
}

export function pickDisplayGlossVi(definitionEn: string, translated: string | undefined): {
  glossVi: string;
  reliable: boolean;
} {
  const raw = translated?.trim() ?? "";
  if (!raw || isSuspiciousGloss(definitionEn, raw)) {
    return { glossVi: "", reliable: false };
  }
  return { glossVi: raw, reliable: true };
}
