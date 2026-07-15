import { GRAMMAR_HUB_HREF } from "@/lib/grammar/grammar-hub-nav";
import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { ADJ_ADV_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-adj-adv-registry";
import { CONJ_PREP_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-conj-prep-registry";
import { FUTURE_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-future-registry";
import { IF_WISH_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-if-wish-registry";
import { ING_TO_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-ing-to-registry";
import { MODALS_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-modals-registry";
import { NOUNS_ARTICLES_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-nouns-articles-registry";
import { PASSIVE_QUESTIONS_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-passive-questions-registry";
import { PRESENT_PAST_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-present-past-registry";
import { PRESENT_PAST_CURATED_EXERCISES_8_18 } from "@/lib/grammar/grammar-topic-content/egiu-cluster-present-past-registry-8-18";
import { RELATIVE_CURATED_EXERCISES } from "@/lib/grammar/grammar-topic-content/egiu-cluster-relative-registry";
import { PRESENT_PERFECT_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-exercises";

const EXERCISES_BY_SLUG: Record<string, readonly GrammarExercise[]> = {
  ...PRESENT_PAST_CURATED_EXERCISES,
  "present-perfect": PRESENT_PERFECT_EXERCISES,
  ...PRESENT_PAST_CURATED_EXERCISES_8_18,
  ...FUTURE_CURATED_EXERCISES,
  ...MODALS_CURATED_EXERCISES,
  ...IF_WISH_CURATED_EXERCISES,
  ...PASSIVE_QUESTIONS_CURATED_EXERCISES,
  ...ING_TO_CURATED_EXERCISES,
  ...NOUNS_ARTICLES_CURATED_EXERCISES,
  ...RELATIVE_CURATED_EXERCISES,
  ...ADJ_ADV_CURATED_EXERCISES,
  ...CONJ_PREP_CURATED_EXERCISES,
};

export function getGrammarTopicExercises(slug: string): readonly GrammarExercise[] | null {
  const exercises = EXERCISES_BY_SLUG[slug];
  return exercises && exercises.length > 0 ? exercises : null;
}

export function grammarTopicPracticeHref(slug: string): string {
  return `${GRAMMAR_HUB_HREF}/chu-de/${slug}/luyen-tap`;
}

export function listGrammarPracticeSlugs(): string[] {
  return Object.keys(EXERCISES_BY_SLUG);
}
