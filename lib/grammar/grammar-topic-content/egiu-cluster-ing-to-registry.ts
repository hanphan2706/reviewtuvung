import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U53_VERB_ING_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-ing-exercises";
import { U53_VERB_ING_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-ing";
import { U54_VERB_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-to-exercises";
import { U54_VERB_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-to";
import { U55_VERB_OBJECT_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-object-to-exercises";
import { U55_VERB_OBJECT_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-object-to";
import { U56_VERB_ING_OR_TO_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-1-exercises";
import { U56_VERB_ING_OR_TO_1_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-1";
import { U57_VERB_ING_OR_TO_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-2-exercises";
import { U57_VERB_ING_OR_TO_2_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-2";
import { U58_VERB_ING_OR_TO_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-3-exercises";
import { U58_VERB_ING_OR_TO_3_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-ing-or-to-3";
import { U59_PREFER_AND_WOULD_RATHER_EXERCISES } from "@/lib/grammar/grammar-topic-content/prefer-and-would-rather-exercises";
import { U59_PREFER_AND_WOULD_RATHER_TOPIC } from "@/lib/grammar/grammar-topic-content/prefer-and-would-rather";
import { U60_PREPOSITION_ING_EXERCISES } from "@/lib/grammar/grammar-topic-content/preposition-ing-exercises";
import { U60_PREPOSITION_ING_TOPIC } from "@/lib/grammar/grammar-topic-content/preposition-ing";
import { U61_BE_GET_USED_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/be-get-used-to-exercises";
import { U61_BE_GET_USED_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/be-get-used-to";
import { U62_VERB_PREPOSITION_ING_EXERCISES } from "@/lib/grammar/grammar-topic-content/verb-preposition-ing-exercises";
import { U62_VERB_PREPOSITION_ING_TOPIC } from "@/lib/grammar/grammar-topic-content/verb-preposition-ing";
import { U63_THERES_NO_POINT_IN_ING_ITS_WORTH_ING_ETC_EXERCISES } from "@/lib/grammar/grammar-topic-content/theres-no-point-in-ing-its-worth-ing-etc-exercises";
import { U63_THERES_NO_POINT_IN_ING_ITS_WORTH_ING_ETC_TOPIC } from "@/lib/grammar/grammar-topic-content/theres-no-point-in-ing-its-worth-ing-etc";
import { U64_TO_FOR_AND_SO_THAT_EXERCISES } from "@/lib/grammar/grammar-topic-content/to-for-and-so-that-exercises";
import { U64_TO_FOR_AND_SO_THAT_TOPIC } from "@/lib/grammar/grammar-topic-content/to-for-and-so-that";
import { U65_ADJECTIVE_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/adjective-to-exercises";
import { U65_ADJECTIVE_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/adjective-to";
import { U66_TO_AFRAID_TO_DO_AND_PREPOSITION_ING_AFRAID_OF_IN_EXERCISES } from "@/lib/grammar/grammar-topic-content/to-afraid-to-do-and-preposition-ing-afraid-of-in-exercises";
import { U66_TO_AFRAID_TO_DO_AND_PREPOSITION_ING_AFRAID_OF_IN_TOPIC } from "@/lib/grammar/grammar-topic-content/to-afraid-to-do-and-preposition-ing-afraid-of-in";
import { U67_SEE_SOMEBODY_DO_AND_SEE_SOMEBODY_DOING_EXERCISES } from "@/lib/grammar/grammar-topic-content/see-somebody-do-and-see-somebody-doing-exercises";
import { U67_SEE_SOMEBODY_DO_AND_SEE_SOMEBODY_DOING_TOPIC } from "@/lib/grammar/grammar-topic-content/see-somebody-do-and-see-somebody-doing";
import { U68_ING_CLAUSES_EXERCISES } from "@/lib/grammar/grammar-topic-content/ing-clauses-exercises";
import { U68_ING_CLAUSES_TOPIC } from "@/lib/grammar/grammar-topic-content/ing-clauses";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 53–68
 * (English Grammar in Use · Intermediate — -ing and to … (53–68)).
 */
export const ING_TO_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u53-verb-ing": U53_VERB_ING_TOPIC,
  "u54-verb-to": U54_VERB_TO_TOPIC,
  "u55-verb-object-to": U55_VERB_OBJECT_TO_TOPIC,
  "u56-verb-ing-or-to-1": U56_VERB_ING_OR_TO_1_TOPIC,
  "u57-verb-ing-or-to-2": U57_VERB_ING_OR_TO_2_TOPIC,
  "u58-verb-ing-or-to-3": U58_VERB_ING_OR_TO_3_TOPIC,
  "u59-prefer-and-would-rather": U59_PREFER_AND_WOULD_RATHER_TOPIC,
  "u60-preposition-ing": U60_PREPOSITION_ING_TOPIC,
  "u61-be-get-used-to": U61_BE_GET_USED_TO_TOPIC,
  "u62-verb-preposition-ing": U62_VERB_PREPOSITION_ING_TOPIC,
  "u63-theres-no-point-in-ing-its-worth-ing-etc": U63_THERES_NO_POINT_IN_ING_ITS_WORTH_ING_ETC_TOPIC,
  "u64-to-for-and-so-that": U64_TO_FOR_AND_SO_THAT_TOPIC,
  "u65-adjective-to": U65_ADJECTIVE_TO_TOPIC,
  "u66-to-afraid-to-do-and-preposition-ing-afraid-of-in": U66_TO_AFRAID_TO_DO_AND_PREPOSITION_ING_AFRAID_OF_IN_TOPIC,
  "u67-see-somebody-do-and-see-somebody-doing": U67_SEE_SOMEBODY_DO_AND_SEE_SOMEBODY_DOING_TOPIC,
  "u68-ing-clauses": U68_ING_CLAUSES_TOPIC,
};

export const ING_TO_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u53-verb-ing": U53_VERB_ING_EXERCISES,
  "u54-verb-to": U54_VERB_TO_EXERCISES,
  "u55-verb-object-to": U55_VERB_OBJECT_TO_EXERCISES,
  "u56-verb-ing-or-to-1": U56_VERB_ING_OR_TO_1_EXERCISES,
  "u57-verb-ing-or-to-2": U57_VERB_ING_OR_TO_2_EXERCISES,
  "u58-verb-ing-or-to-3": U58_VERB_ING_OR_TO_3_EXERCISES,
  "u59-prefer-and-would-rather": U59_PREFER_AND_WOULD_RATHER_EXERCISES,
  "u60-preposition-ing": U60_PREPOSITION_ING_EXERCISES,
  "u61-be-get-used-to": U61_BE_GET_USED_TO_EXERCISES,
  "u62-verb-preposition-ing": U62_VERB_PREPOSITION_ING_EXERCISES,
  "u63-theres-no-point-in-ing-its-worth-ing-etc": U63_THERES_NO_POINT_IN_ING_ITS_WORTH_ING_ETC_EXERCISES,
  "u64-to-for-and-so-that": U64_TO_FOR_AND_SO_THAT_EXERCISES,
  "u65-adjective-to": U65_ADJECTIVE_TO_EXERCISES,
  "u66-to-afraid-to-do-and-preposition-ing-afraid-of-in": U66_TO_AFRAID_TO_DO_AND_PREPOSITION_ING_AFRAID_OF_IN_EXERCISES,
  "u67-see-somebody-do-and-see-somebody-doing": U67_SEE_SOMEBODY_DO_AND_SEE_SOMEBODY_DOING_EXERCISES,
  "u68-ing-clauses": U68_ING_CLAUSES_EXERCISES,
};

