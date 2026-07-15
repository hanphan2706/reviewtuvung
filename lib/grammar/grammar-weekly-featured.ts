import { GRAMMAR_EXPLORE_TOPICS } from "@/lib/grammar/grammar-hub-data";
import { getGrammarTopicDetail } from "@/lib/grammar/grammar-topic-registry";

export type GrammarWeeklyFeatured = {
  title: string;
  slug: string;
  description: string;
  unitNumber: number;
};

/** ISO-week style rotation so the hub featured card changes over time. */
export function getGrammarWeekIndex(date = new Date()): number {
  const utc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  const dayMs = 86_400_000;
  return Math.floor(utc / (7 * dayMs));
}

export function getGrammarWeeklyFeatured(date = new Date()): GrammarWeeklyFeatured {
  const published = GRAMMAR_EXPLORE_TOPICS.filter((topic) => topic.status === "published");
  const pool = published.length > 0 ? published : GRAMMAR_EXPLORE_TOPICS;
  const index = getGrammarWeekIndex(date) % pool.length;
  const topic = pool[index] ?? pool[0];
  const detail = getGrammarTopicDetail(topic.id);

  return {
    title: detail?.title ?? topic.title,
    slug: topic.id,
    description: detail?.intro ?? topic.description,
    unitNumber: topic.unitNumber,
  };
}
