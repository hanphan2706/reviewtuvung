import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U92_RELATIVE_CLAUSES_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/relative-clauses-1-exercises";
import { U92_RELATIVE_CLAUSES_1_TOPIC } from "@/lib/grammar/grammar-topic-content/relative-clauses-1";
import { U93_RELATIVE_CLAUSES_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/relative-clauses-2-exercises";
import { U93_RELATIVE_CLAUSES_2_TOPIC } from "@/lib/grammar/grammar-topic-content/relative-clauses-2";
import { U94_RELATIVE_CLAUSES_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/relative-clauses-3-exercises";
import { U94_RELATIVE_CLAUSES_3_TOPIC } from "@/lib/grammar/grammar-topic-content/relative-clauses-3";
import { U95_RELATIVE_CLAUSES_4_EXERCISES } from "@/lib/grammar/grammar-topic-content/relative-clauses-4-exercises";
import { U95_RELATIVE_CLAUSES_4_TOPIC } from "@/lib/grammar/grammar-topic-content/relative-clauses-4";
import { U96_RELATIVE_CLAUSES_5_EXERCISES } from "@/lib/grammar/grammar-topic-content/relative-clauses-5-exercises";
import { U96_RELATIVE_CLAUSES_5_TOPIC } from "@/lib/grammar/grammar-topic-content/relative-clauses-5";
import { U97_ING_AND_ED_CLAUSES_EXERCISES } from "@/lib/grammar/grammar-topic-content/ing-and-ed-clauses-exercises";
import { U97_ING_AND_ED_CLAUSES_TOPIC } from "@/lib/grammar/grammar-topic-content/ing-and-ed-clauses";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 92–97
 * (English Grammar in Use · Intermediate — Relative clauses (92–97)).
 */
export const RELATIVE_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u92-relative-clauses-1": U92_RELATIVE_CLAUSES_1_TOPIC,
  "u93-relative-clauses-2": U93_RELATIVE_CLAUSES_2_TOPIC,
  "u94-relative-clauses-3": U94_RELATIVE_CLAUSES_3_TOPIC,
  "u95-relative-clauses-4": U95_RELATIVE_CLAUSES_4_TOPIC,
  "u96-relative-clauses-5": U96_RELATIVE_CLAUSES_5_TOPIC,
  "u97-ing-and-ed-clauses": U97_ING_AND_ED_CLAUSES_TOPIC,
};

export const RELATIVE_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u92-relative-clauses-1": U92_RELATIVE_CLAUSES_1_EXERCISES,
  "u93-relative-clauses-2": U93_RELATIVE_CLAUSES_2_EXERCISES,
  "u94-relative-clauses-3": U94_RELATIVE_CLAUSES_3_EXERCISES,
  "u95-relative-clauses-4": U95_RELATIVE_CLAUSES_4_EXERCISES,
  "u96-relative-clauses-5": U96_RELATIVE_CLAUSES_5_EXERCISES,
  "u97-ing-and-ed-clauses": U97_ING_AND_ED_CLAUSES_EXERCISES,
};

