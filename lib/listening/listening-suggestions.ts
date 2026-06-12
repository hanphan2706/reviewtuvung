import {
  getListeningPartById,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import {
  listeningDifficultyBandForLesson,
  readingDifficultyToListeningBand,
} from "@/lib/listening/listening-difficulty-bands";
import type { ReadingDifficulty, ReadingTopic } from "@/lib/reading/hub-articles";

export const LISTENING_SUGGESTIONS_COUNT = 3;

export type PickListeningSuggestionsOptions = {
  excludeLessonIds?: ReadonlySet<string>;
  preferTopics?: readonly ReadingTopic[];
  preferDifficulty?: ReadingDifficulty;
  /** `metaPill` — ưu tiên cùng nguồn (IELTS / Tactics). */
  preferSource?: string;
  currentLessonId?: string;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = tmp as T;
  }
  return copy;
}

function suggestionScore(
  lesson: ListeningPartMeta,
  options: PickListeningSuggestionsOptions,
  current?: ListeningPartMeta,
): number {
  let score = 0;

  if (current) {
    if (lesson.metaPill === current.metaPill) score += 100;
    if (listeningDifficultyBandForLesson(lesson) === listeningDifficultyBandForLesson(current)) {
      score += 50;
    }
  }

  if (options.preferSource && lesson.metaPill === options.preferSource) score += 100;

  if (options.preferDifficulty) {
    const band = readingDifficultyToListeningBand(options.preferDifficulty);
    if (listeningDifficultyBandForLesson(lesson) === band) score += 50;
  }

  if (options.preferTopics?.length) {
    for (const topic of options.preferTopics) {
      if (lesson.topics.includes(topic)) score += 2;
    }
  }

  return score;
}

/** Chọn gợi ý — ưu tiên cùng nguồn và cùng bậc độ khó khi có bài hiện tại. */
export function pickListeningSuggestedParts(
  pool: readonly ListeningPartMeta[],
  count = LISTENING_SUGGESTIONS_COUNT,
  options: PickListeningSuggestionsOptions = {},
): ListeningPartMeta[] {
  if (pool.length === 0) return [];

  const current = options.currentLessonId ? getListeningPartById(options.currentLessonId) : undefined;
  const exclude = new Set(options.excludeLessonIds ?? []);
  if (current) exclude.add(current.id);

  let candidates = pool.filter((lesson) => !exclude.has(lesson.id));
  if (candidates.length === 0) {
    candidates = pool.filter((lesson) => lesson.id !== current?.id);
  }
  if (candidates.length === 0) return [];

  const hasPreferences =
    Boolean(current) ||
    Boolean(options.preferTopics?.length) ||
    Boolean(options.preferDifficulty) ||
    Boolean(options.preferSource);

  if (hasPreferences) {
    const ranked = [...candidates].sort(
      (a, b) => suggestionScore(b, options, current) - suggestionScore(a, options, current),
    );
    const top = ranked[0];
    if (!top) return [];
    const topScore = suggestionScore(top, options, current);
    const preferred = ranked.filter(
      (lesson) => suggestionScore(lesson, options, current) === topScore,
    );
    const remainder = ranked.filter(
      (lesson) => suggestionScore(lesson, options, current) < topScore,
    );
    return [...shuffle(preferred), ...shuffle(remainder)].slice(
      0,
      Math.min(count, candidates.length),
    );
  }

  return shuffle(candidates).slice(0, Math.min(count, candidates.length));
}
