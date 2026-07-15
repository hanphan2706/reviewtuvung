import { GRAMMAR_EXPLORE_TOPICS, type GrammarCategoryId, type GrammarTopic } from "@/lib/grammar/grammar-hub-data";

export type GrammarTopicProgressMap = Record<string, number>;

/** Topic is treated as done when practice progress reaches this share. */
export const GRAMMAR_TOPIC_DONE_THRESHOLD = 1;

export function clampGrammarProgress(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

export function grammarProgressPercent(progress: number): number {
  return Math.round(clampGrammarProgress(progress) * 100);
}

export function aggregateCategoryProgress(
  topics: readonly GrammarTopic[],
  progressBySlug: GrammarTopicProgressMap,
  category: GrammarCategoryId,
): number {
  const inCategory = topics.filter((topic) => topic.category === category);
  if (inCategory.length === 0) return 0;
  const sum = inCategory.reduce(
    (acc, topic) => acc + clampGrammarProgress(progressBySlug[topic.id] ?? 0),
    0,
  );
  return Math.round((sum / inCategory.length) * 100);
}

export function aggregateDifficultyProgress(
  topics: readonly GrammarTopic[],
  progressBySlug: GrammarTopicProgressMap,
  difficulty: GrammarTopic["difficulty"],
): number {
  const inBand = topics.filter((topic) => topic.difficulty === difficulty);
  if (inBand.length === 0) return 0;
  const sum = inBand.reduce(
    (acc, topic) => acc + clampGrammarProgress(progressBySlug[topic.id] ?? 0),
    0,
  );
  return Math.round((sum / inBand.length) * 100);
}

export function overallGrammarProgressPercent(progressBySlug: GrammarTopicProgressMap): number {
  const topics = GRAMMAR_EXPLORE_TOPICS;
  if (topics.length === 0) return 0;
  const sum = topics.reduce(
    (acc, topic) => acc + clampGrammarProgress(progressBySlug[topic.id] ?? 0),
    0,
  );
  return Math.round((sum / topics.length) * 100);
}
