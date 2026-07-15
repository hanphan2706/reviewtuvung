import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { FOR_AND_SINCE_EXERCISES } from "@/lib/grammar/grammar-topic-content/for-and-since-exercises";
import { FOR_AND_SINCE_TOPIC } from "@/lib/grammar/grammar-topic-content/for-and-since";
import { HAVE_AND_HAVE_GOT_EXERCISES } from "@/lib/grammar/grammar-topic-content/have-and-have-got-exercises";
import { HAVE_AND_HAVE_GOT_TOPIC } from "@/lib/grammar/grammar-topic-content/have-and-have-got";
import { HOW_LONG_HAVE_YOU_BEEN_EXERCISES } from "@/lib/grammar/grammar-topic-content/how-long-have-you-been-exercises";
import { HOW_LONG_HAVE_YOU_BEEN_TOPIC } from "@/lib/grammar/grammar-topic-content/how-long-have-you-been";
import { PAST_PERFECT_CONTINUOUS_EXERCISES } from "@/lib/grammar/grammar-topic-content/past-perfect-continuous-exercises";
import { PAST_PERFECT_CONTINUOUS_TOPIC } from "@/lib/grammar/grammar-topic-content/past-perfect-continuous";
import { PAST_PERFECT_EXERCISES } from "@/lib/grammar/grammar-topic-content/past-perfect-exercises";
import { PAST_PERFECT_TOPIC } from "@/lib/grammar/grammar-topic-content/past-perfect";
import { PRESENT_PERFECT_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-2-exercises";
import { PRESENT_PERFECT_2_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect-2";
import { PRESENT_PERFECT_AND_PAST_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-and-past-1-exercises";
import { PRESENT_PERFECT_AND_PAST_1_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect-and-past-1";
import { PRESENT_PERFECT_AND_PAST_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-and-past-2-exercises";
import { PRESENT_PERFECT_AND_PAST_2_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect-and-past-2";
import { PRESENT_PERFECT_CONTINUOUS_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-continuous-exercises";
import { PRESENT_PERFECT_CONTINUOUS_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect-continuous";
import { PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-perfect-continuous-and-simple-exercises";
import { PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_TOPIC } from "@/lib/grammar/grammar-topic-content/present-perfect-continuous-and-simple";
import { USED_TO_DO_EXERCISES } from "@/lib/grammar/grammar-topic-content/used-to-do-exercises";
import { USED_TO_DO_TOPIC } from "@/lib/grammar/grammar-topic-content/used-to-do";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 8–18 (English Grammar in Use ·
 * Intermediate, mảng "Present perfect and past"). Unit 7 (present perfect 1) đã
 * có registry riêng trong present-perfect.ts / present-perfect-exercises.ts.
 *
 * Slug (id) khớp với lib/grammar/egiu/egiu-units.json:
 *  8  u08-present-perfect-2
 *  9  u09-present-perfect-continuous
 *  10 u10-present-perfect-continuous-and-simple
 *  11 u11-how-long-have-you-been
 *  12 u12-for-and-since
 *  13 u13-present-perfect-and-past-1   (học kèm Unit 14)
 *  14 u14-present-perfect-and-past-2   (học kèm Unit 13)
 *  15 u15-past-perfect
 *  16 u16-past-perfect-continuous
 *  17 u17-have-and-have-got
 *  18 u18-used-to-do
 */
export const PRESENT_PAST_CURATED_DETAILS_8_18: Record<string, GrammarTopicDetail> = {
  "u08-present-perfect-2": PRESENT_PERFECT_2_TOPIC,
  "u09-present-perfect-continuous": PRESENT_PERFECT_CONTINUOUS_TOPIC,
  "u10-present-perfect-continuous-and-simple": PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_TOPIC,
  "u11-how-long-have-you-been": HOW_LONG_HAVE_YOU_BEEN_TOPIC,
  "u12-for-and-since": FOR_AND_SINCE_TOPIC,
  "u13-present-perfect-and-past-1": PRESENT_PERFECT_AND_PAST_1_TOPIC,
  "u14-present-perfect-and-past-2": PRESENT_PERFECT_AND_PAST_2_TOPIC,
  "u15-past-perfect": PAST_PERFECT_TOPIC,
  "u16-past-perfect-continuous": PAST_PERFECT_CONTINUOUS_TOPIC,
  "u17-have-and-have-got": HAVE_AND_HAVE_GOT_TOPIC,
  "u18-used-to-do": USED_TO_DO_TOPIC,
};

export const PRESENT_PAST_CURATED_EXERCISES_8_18: Record<string, readonly GrammarExercise[]> = {
  "u08-present-perfect-2": PRESENT_PERFECT_2_EXERCISES,
  "u09-present-perfect-continuous": PRESENT_PERFECT_CONTINUOUS_EXERCISES,
  "u10-present-perfect-continuous-and-simple": PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_EXERCISES,
  "u11-how-long-have-you-been": HOW_LONG_HAVE_YOU_BEEN_EXERCISES,
  "u12-for-and-since": FOR_AND_SINCE_EXERCISES,
  "u13-present-perfect-and-past-1": PRESENT_PERFECT_AND_PAST_1_EXERCISES,
  "u14-present-perfect-and-past-2": PRESENT_PERFECT_AND_PAST_2_EXERCISES,
  "u15-past-perfect": PAST_PERFECT_EXERCISES,
  "u16-past-perfect-continuous": PAST_PERFECT_CONTINUOUS_EXERCISES,
  "u17-have-and-have-got": HAVE_AND_HAVE_GOT_EXERCISES,
  "u18-used-to-do": USED_TO_DO_EXERCISES,
};
