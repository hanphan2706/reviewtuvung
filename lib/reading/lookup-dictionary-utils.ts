import type { DictDefinition, DictEntry, DictPhonetic } from "@/lib/reading/lookup-internal-types";
import { preferredPosBoost } from "@/lib/reading/lookup-translation-quality";
import type { LookupPronunciationPair } from "@/lib/reading/lookup-types";

export type ScoredDefinition = {
  partOfSpeech: string;
  definitionEn: string;
  exampleEn?: string;
  score: number;
};

const TECHNICAL_PATTERN =
  /\b(binary operation|identity element|associative|commutative|mathematical|set theory|topolog|morphism|eigenvalue|quantum|polymer|isomorphism|homomorphism|lie algebra|manifold)\b/i;

const MAX_DEFINITION_CHARS = 160;

export function isTechnicalDefinition(text: string): boolean {
  if (text.length > MAX_DEFINITION_CHARS) return true;
  if (TECHNICAL_PATTERN.test(text)) return true;
  if ((text.match(/;/g)?.length ?? 0) >= 3) return true;
  return false;
}

export function scoreDefinition(def: DictDefinition, lemma?: string, partOfSpeech?: string): number {
  const en = def.definition?.trim() ?? "";
  if (!en) return -999;
  let score = 0;
  if (def.example?.trim()) score += 24;
  if (en.length <= 72) score += 18;
  else if (en.length <= 110) score += 10;
  else if (en.length > MAX_DEFINITION_CHARS) score -= 40;
  if (isTechnicalDefinition(en)) score -= 80;
  if (lemma && partOfSpeech) score += preferredPosBoost(lemma, partOfSpeech);
  return score;
}

export function collectScoredDefinitions(entries: DictEntry[], limit: number, lemma?: string): ScoredDefinition[] {
  const ranked: ScoredDefinition[] = [];

  for (const entry of entries) {
    for (const meaning of entry.meanings ?? []) {
      const pos = meaning.partOfSpeech?.trim() || "word";
      for (const def of meaning.definitions ?? []) {
        const definitionEn = def.definition?.trim();
        if (!definitionEn || isTechnicalDefinition(definitionEn)) continue;
        ranked.push({
          partOfSpeech: pos,
          definitionEn,
          exampleEn: def.example?.trim() || undefined,
          score: scoreDefinition(def, lemma, pos),
        });
      }
    }
  }

  ranked.sort((a, b) => b.score - a.score);
  const seen = new Set<string>();
  const out: ScoredDefinition[] = [];
  for (const item of ranked) {
    const key = item.definitionEn.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
    if (out.length >= limit) break;
  }
  return out;
}

/** Hiển thị IPA quen mắt hơn (API đôi khi dùng ký hiệu hẹp như ɹ). */
export function normalizeIpaForDisplay(ipa: string): string {
  return ipa
    .replace(/\u0279/g, "r")
    .replace(/\u0261/g, "g")
    .replace(/\u0259/g, "ə")
    .replace(/\s+/g, " ")
    .trim();
}

function ipaScore(text: string): number {
  let score = 0;
  if (/^\/.*\/$/.test(text.trim())) score += 8;
  if (text.length <= 24) score += 4;
  if (text.includes("\u0279")) score -= 6;
  return score;
}

export function pickPronunciations(phonetics: DictPhonetic[] | undefined): LookupPronunciationPair {
  const list = phonetics ?? [];
  const pair: LookupPronunciationPair = {};
  const firstAudio = list.find((p) => p.audio?.startsWith("http"))?.audio?.trim();

  const assign = (slot: "us" | "uk", p: DictPhonetic) => {
    const audio = p.audio?.trim();
    const ipa = p.text?.trim();
    if (!audio && !ipa) return;
    const current = pair[slot];
    pair[slot] = {
      ipa: ipa ? normalizeIpaForDisplay(ipa) : current?.ipa,
      audioUrl: audio?.startsWith("http") ? audio : current?.audioUrl,
    };
  };

  for (const p of list) {
    const audio = (p.audio ?? "").toLowerCase();
    if (audio.includes("-us") || audio.includes("/us/") || audio.includes("american")) assign("us", p);
    else if (audio.includes("-uk") || audio.includes("/uk/") || audio.includes("british")) assign("uk", p);
  }

  const withAudio = list.filter((p) => p.audio?.startsWith("http"));
  if (!pair.us && withAudio[0]) assign("us", withAudio[0]);
  if (!pair.uk && withAudio[1]) assign("uk", withAudio[1]);

  const withText = [...list]
    .filter((p) => p.text?.trim())
    .sort((a, b) => ipaScore(b.text ?? "") - ipaScore(a.text ?? ""));

  if (!pair.us?.ipa && withText[0]?.text) {
    pair.us = {
      ...(pair.us ?? {}),
      ipa: normalizeIpaForDisplay(withText[0].text!.trim()),
      audioUrl: pair.us?.audioUrl ?? firstAudio,
    };
  }
  if (!pair.us?.audioUrl && firstAudio) {
    pair.us = { ...(pair.us ?? {}), ipa: pair.us?.ipa, audioUrl: firstAudio };
  }
  if (pair.us?.ipa && !pair.us.audioUrl && firstAudio) {
    pair.us = { ...pair.us, audioUrl: firstAudio };
  }

  const out: LookupPronunciationPair = {};
  if (pair.us?.ipa || pair.us?.audioUrl) out.us = pair.us;
  if (pair.uk?.ipa || pair.uk?.audioUrl) out.uk = pair.uk;
  return out;
}

