import { EGIU_UNITS_BY_ID } from "@/lib/grammar/egiu/egiu-catalog";
import { enrichTopicWithRelatedStudy } from "@/lib/grammar/egiu/egiu-related-study";
import { buildEgiuTopicDetail } from "@/lib/grammar/egiu/egiu-topic-builder";
import { GRAMMAR_EXPLORE_TOPICS, type GrammarTopic } from "@/lib/grammar/grammar-hub-data";
import { ADJ_ADV_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-adj-adv-registry";
import { CONJ_PREP_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-conj-prep-registry";
import { FUTURE_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-future-registry";
import { IF_WISH_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-if-wish-registry";
import { ING_TO_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-ing-to-registry";
import { MODALS_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-modals-registry";
import { NOUNS_ARTICLES_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-nouns-articles-registry";
import { PASSIVE_QUESTIONS_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-passive-questions-registry";
import { PRESENT_PAST_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-present-past-registry";
import { PRESENT_PAST_CURATED_DETAILS_8_18 } from "@/lib/grammar/grammar-topic-content/egiu-cluster-present-past-registry-8-18";
import { RELATIVE_CURATED_DETAILS } from "@/lib/grammar/grammar-topic-content/egiu-cluster-relative-registry";
import { PRESENT_PERFECT_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { GRAMMAR_HUB_HREF } from "@/lib/grammar/grammar-hub-nav";

export { GRAMMAR_EXPLORE_TOPICS, type GrammarTopic } from "@/lib/grammar/grammar-hub-data";

/** Fully curated theory + practice payloads (EGIU Units 1–128). */
const CURATED_DETAIL_BY_SLUG: Record<string, GrammarTopicDetail> = {
  ...PRESENT_PAST_CURATED_DETAILS,
  "present-perfect": PRESENT_PERFECT_TOPIC,
  ...PRESENT_PAST_CURATED_DETAILS_8_18,
  ...FUTURE_CURATED_DETAILS,
  ...MODALS_CURATED_DETAILS,
  ...IF_WISH_CURATED_DETAILS,
  ...PASSIVE_QUESTIONS_CURATED_DETAILS,
  ...ING_TO_CURATED_DETAILS,
  ...NOUNS_ARTICLES_CURATED_DETAILS,
  ...RELATIVE_CURATED_DETAILS,
  ...ADJ_ADV_CURATED_DETAILS,
  ...CONJ_PREP_CURATED_DETAILS,
};

export function grammarTopicHref(slug: string): string {
  return `${GRAMMAR_HUB_HREF}/chu-de/${slug}`;
}

export function getGrammarTopicCatalog(slug: string): GrammarTopic | undefined {
  return GRAMMAR_EXPLORE_TOPICS.find((topic) => topic.id === slug);
}

export function listGrammarTopicSlugs(): string[] {
  return GRAMMAR_EXPLORE_TOPICS.map((topic) => topic.id);
}

export function getGrammarTopicDetail(slug: string): GrammarTopicDetail | null {
  const curated = CURATED_DETAIL_BY_SLUG[slug];
  if (curated) {
    const unitNumber =
      EGIU_UNITS_BY_ID[slug]?.unitNumber ??
      getGrammarTopicCatalog(slug)?.unitNumber ??
      (slug === "present-perfect" ? 7 : undefined);
    return enrichTopicWithRelatedStudy(curated, unitNumber);
  }

  const egiu = EGIU_UNITS_BY_ID[slug];
  if (egiu) {
    return enrichTopicWithRelatedStudy(buildEgiuTopicDetail(egiu), egiu.unitNumber);
  }

  const catalog = getGrammarTopicCatalog(slug);
  if (!catalog) return null;

  return enrichTopicWithRelatedStudy(
    buildEgiuTopicDetail({
      unitNumber: catalog.unitNumber,
      id: catalog.id,
      title: catalog.title,
      subtitle: "",
      section: catalog.categoryLabel,
      category: catalog.category,
      kindLabel: catalog.categoryLabel,
      difficulty: catalog.difficulty,
      mapFlags: [],
      description: catalog.description,
    }),
    catalog.unitNumber,
  );
}
