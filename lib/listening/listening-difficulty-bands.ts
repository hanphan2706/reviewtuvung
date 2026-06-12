import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { ReadingDifficulty } from "@/lib/reading/hub-articles";
import { listeningDifficultyForLesson } from "@/lib/listening/estimate-listening-level";

/** Nhãn độ khó trên menu Luyện nghe (3 bậc). */
export const LISTENING_DIFFICULTY_BANDS = ["Cơ bản", "Trung bình", "Nâng cao"] as const;

export type ListeningDifficultyBand = (typeof LISTENING_DIFFICULTY_BANDS)[number];

const BAND_SLUG: Record<ListeningDifficultyBand, string> = {
  "Cơ bản": "co-ban",
  "Trung bình": "trung-binh",
  "Nâng cao": "nang-cao",
};

const BAND_BY_SLUG = Object.fromEntries(
  Object.entries(BAND_SLUG).map(([band, slug]) => [slug, band as ListeningDifficultyBand]),
) as Record<string, ListeningDifficultyBand>;

export function listeningDifficultyBandSlug(band: ListeningDifficultyBand): string {
  return BAND_SLUG[band];
}

export function listeningDifficultyBandFromSlug(slug: string): ListeningDifficultyBand | null {
  return BAND_BY_SLUG[slug] ?? null;
}

export function listeningDifficultyBandForLesson(meta: ListeningPartMeta): ListeningDifficultyBand {
  return readingDifficultyToListeningBand(listeningDifficultyForLesson(meta));
}

export function readingDifficultyToListeningBand(difficulty: ReadingDifficulty): ListeningDifficultyBand {
  if (difficulty === "Dễ") return "Cơ bản";
  if (difficulty === "Trung bình") return "Trung bình";
  return "Nâng cao";
}

export function listeningBandMatchesReadingDifficulty(
  band: ListeningDifficultyBand,
  difficulty: ReadingDifficulty,
): boolean {
  return readingDifficultyToListeningBand(difficulty) === band;
}
