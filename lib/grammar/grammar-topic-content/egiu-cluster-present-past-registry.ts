import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U01_PRESENT_CONTINUOUS_EXERCISES } from "@/lib/grammar/grammar-topic-content/u01-present-continuous-exercises";
import { U01_PRESENT_CONTINUOUS_TOPIC } from "@/lib/grammar/grammar-topic-content/u01-present-continuous";
import { U02_PRESENT_SIMPLE_EXERCISES } from "@/lib/grammar/grammar-topic-content/u02-present-simple-exercises";
import { U02_PRESENT_SIMPLE_TOPIC } from "@/lib/grammar/grammar-topic-content/u02-present-simple";
import { U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/u03-present-continuous-and-present-simple-1-exercises";
import { U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/u03-present-continuous-and-present-simple-1";
import { U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/u04-present-continuous-and-present-simple-2-exercises";
import { U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/u04-present-continuous-and-present-simple-2";
import { U05_PAST_SIMPLE_EXERCISES } from "@/lib/grammar/grammar-topic-content/u05-past-simple-exercises";
import { U05_PAST_SIMPLE_TOPIC } from "@/lib/grammar/grammar-topic-content/u05-past-simple";
import { U06_PAST_CONTINUOUS_EXERCISES } from "@/lib/grammar/grammar-topic-content/u06-past-continuous-exercises";
import { U06_PAST_CONTINUOUS_TOPIC } from "@/lib/grammar/grammar-topic-content/u06-past-continuous";

/**
 * Curated theory for English Grammar in Use · Intermediate, Units 1–6
 * (the "present and past" opening cluster). Keyed by the slugs from
 * lib/grammar/egiu/egiu-units.json.
 */
export const PRESENT_PAST_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u01-present-continuous": U01_PRESENT_CONTINUOUS_TOPIC,
  "u02-present-simple": U02_PRESENT_SIMPLE_TOPIC,
  "u03-present-continuous-and-present-simple-1": U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_TOPIC,
  "u04-present-continuous-and-present-simple-2": U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_TOPIC,
  "u05-past-simple": U05_PAST_SIMPLE_TOPIC,
  "u06-past-continuous": U06_PAST_CONTINUOUS_TOPIC,
};

/** Curated exercises for the same Unit 1–6 cluster, keyed by slug. */
export const PRESENT_PAST_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u01-present-continuous": U01_PRESENT_CONTINUOUS_EXERCISES,
  "u02-present-simple": U02_PRESENT_SIMPLE_EXERCISES,
  "u03-present-continuous-and-present-simple-1": U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_EXERCISES,
  "u04-present-continuous-and-present-simple-2": U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_EXERCISES,
  "u05-past-simple": U05_PAST_SIMPLE_EXERCISES,
  "u06-past-continuous": U06_PAST_CONTINUOUS_EXERCISES,
};
