import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_EXERCISES } from "@/lib/grammar/grammar-topic-content/although-though-even-though-in-spite-of-despite-exercises";
import { U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_TOPIC } from "@/lib/grammar/grammar-topic-content/although-though-even-though-in-spite-of-despite";
import { U114_IN_CASE_EXERCISES } from "@/lib/grammar/grammar-topic-content/in-case-exercises";
import { U114_IN_CASE_TOPIC } from "@/lib/grammar/grammar-topic-content/in-case";
import { U115_UNLESS_AS_LONG_AS_PROVIDED_EXERCISES } from "@/lib/grammar/grammar-topic-content/unless-as-long-as-provided-exercises";
import { U115_UNLESS_AS_LONG_AS_PROVIDED_TOPIC } from "@/lib/grammar/grammar-topic-content/unless-as-long-as-provided";
import { U116_AS_EXERCISES } from "@/lib/grammar/grammar-topic-content/as-exercises";
import { U116_AS_TOPIC } from "@/lib/grammar/grammar-topic-content/as";
import { U117_LIKE_AND_AS_EXERCISES } from "@/lib/grammar/grammar-topic-content/like-and-as-exercises";
import { U117_LIKE_AND_AS_TOPIC } from "@/lib/grammar/grammar-topic-content/like-and-as";
import { U118_LIKE_AS_IF_EXERCISES } from "@/lib/grammar/grammar-topic-content/like-as-if-exercises";
import { U118_LIKE_AS_IF_TOPIC } from "@/lib/grammar/grammar-topic-content/like-as-if";
import { U119_DURING_FOR_WHILE_EXERCISES } from "@/lib/grammar/grammar-topic-content/during-for-while-exercises";
import { U119_DURING_FOR_WHILE_TOPIC } from "@/lib/grammar/grammar-topic-content/during-for-while";
import { U120_BY_AND_UNTIL_BY_THE_TIME_EXERCISES } from "@/lib/grammar/grammar-topic-content/by-and-until-by-the-time-exercises";
import { U120_BY_AND_UNTIL_BY_THE_TIME_TOPIC } from "@/lib/grammar/grammar-topic-content/by-and-until-by-the-time";
import { U121_AT_ON_IN_TIME_EXERCISES } from "@/lib/grammar/grammar-topic-content/at-on-in-time-exercises";
import { U121_AT_ON_IN_TIME_TOPIC } from "@/lib/grammar/grammar-topic-content/at-on-in-time";
import { U122_ON_TIME_AND_IN_TIME_AT_THE_END_AND_IN_THE_END_EXERCISES } from "@/lib/grammar/grammar-topic-content/on-time-and-in-time-at-the-end-and-in-the-end-exercises";
import { U122_ON_TIME_AND_IN_TIME_AT_THE_END_AND_IN_THE_END_TOPIC } from "@/lib/grammar/grammar-topic-content/on-time-and-in-time-at-the-end-and-in-the-end";
import { U123_IN_AT_ON_POSITION_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/in-at-on-position-1-exercises";
import { U123_IN_AT_ON_POSITION_1_TOPIC } from "@/lib/grammar/grammar-topic-content/in-at-on-position-1";
import { U124_IN_AT_ON_POSITION_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/in-at-on-position-2-exercises";
import { U124_IN_AT_ON_POSITION_2_TOPIC } from "@/lib/grammar/grammar-topic-content/in-at-on-position-2";
import { U125_IN_AT_ON_POSITION_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/in-at-on-position-3-exercises";
import { U125_IN_AT_ON_POSITION_3_TOPIC } from "@/lib/grammar/grammar-topic-content/in-at-on-position-3";
import { U126_TO_AT_IN_AND_INTO_EXERCISES } from "@/lib/grammar/grammar-topic-content/to-at-in-and-into-exercises";
import { U126_TO_AT_IN_AND_INTO_TOPIC } from "@/lib/grammar/grammar-topic-content/to-at-in-and-into";
import { U127_IN_ON_AT_OTHER_USES_EXERCISES } from "@/lib/grammar/grammar-topic-content/in-on-at-other-uses-exercises";
import { U127_IN_ON_AT_OTHER_USES_TOPIC } from "@/lib/grammar/grammar-topic-content/in-on-at-other-uses";
import { U128_BY_EXERCISES } from "@/lib/grammar/grammar-topic-content/by-exercises";
import { U128_BY_TOPIC } from "@/lib/grammar/grammar-topic-content/by";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 113–128
 * (English Grammar in Use · Intermediate — Conjunctions and prepositions (113–128)).
 */
export const CONJ_PREP_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u113-although-though-even-though-in-spite-of-despite": U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_TOPIC,
  "u114-in-case": U114_IN_CASE_TOPIC,
  "u115-unless-as-long-as-provided": U115_UNLESS_AS_LONG_AS_PROVIDED_TOPIC,
  "u116-as": U116_AS_TOPIC,
  "u117-like-and-as": U117_LIKE_AND_AS_TOPIC,
  "u118-like-as-if": U118_LIKE_AS_IF_TOPIC,
  "u119-during-for-while": U119_DURING_FOR_WHILE_TOPIC,
  "u120-by-and-until-by-the-time": U120_BY_AND_UNTIL_BY_THE_TIME_TOPIC,
  "u121-at-on-in-time": U121_AT_ON_IN_TIME_TOPIC,
  "u122-on-time-and-in-time-at-the-end-and-in-the-end": U122_ON_TIME_AND_IN_TIME_AT_THE_END_AND_IN_THE_END_TOPIC,
  "u123-in-at-on-position-1": U123_IN_AT_ON_POSITION_1_TOPIC,
  "u124-in-at-on-position-2": U124_IN_AT_ON_POSITION_2_TOPIC,
  "u125-in-at-on-position-3": U125_IN_AT_ON_POSITION_3_TOPIC,
  "u126-to-at-in-and-into": U126_TO_AT_IN_AND_INTO_TOPIC,
  "u127-in-on-at-other-uses": U127_IN_ON_AT_OTHER_USES_TOPIC,
  "u128-by": U128_BY_TOPIC,
};

export const CONJ_PREP_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u113-although-though-even-though-in-spite-of-despite": U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_EXERCISES,
  "u114-in-case": U114_IN_CASE_EXERCISES,
  "u115-unless-as-long-as-provided": U115_UNLESS_AS_LONG_AS_PROVIDED_EXERCISES,
  "u116-as": U116_AS_EXERCISES,
  "u117-like-and-as": U117_LIKE_AND_AS_EXERCISES,
  "u118-like-as-if": U118_LIKE_AS_IF_EXERCISES,
  "u119-during-for-while": U119_DURING_FOR_WHILE_EXERCISES,
  "u120-by-and-until-by-the-time": U120_BY_AND_UNTIL_BY_THE_TIME_EXERCISES,
  "u121-at-on-in-time": U121_AT_ON_IN_TIME_EXERCISES,
  "u122-on-time-and-in-time-at-the-end-and-in-the-end": U122_ON_TIME_AND_IN_TIME_AT_THE_END_AND_IN_THE_END_EXERCISES,
  "u123-in-at-on-position-1": U123_IN_AT_ON_POSITION_1_EXERCISES,
  "u124-in-at-on-position-2": U124_IN_AT_ON_POSITION_2_EXERCISES,
  "u125-in-at-on-position-3": U125_IN_AT_ON_POSITION_3_EXERCISES,
  "u126-to-at-in-and-into": U126_TO_AT_IN_AND_INTO_EXERCISES,
  "u127-in-on-at-other-uses": U127_IN_ON_AT_OTHER_USES_EXERCISES,
  "u128-by": U128_BY_EXERCISES,
};

