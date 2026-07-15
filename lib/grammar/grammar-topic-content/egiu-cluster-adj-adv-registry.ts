import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U98_ADJECTIVES_ENDING_IN_ING_AND_ED_EXERCISES } from "@/lib/grammar/grammar-topic-content/adjectives-ending-in-ing-and-ed-exercises";
import { U98_ADJECTIVES_ENDING_IN_ING_AND_ED_TOPIC } from "@/lib/grammar/grammar-topic-content/adjectives-ending-in-ing-and-ed";
import { U99_ADJECTIVES_EXERCISES } from "@/lib/grammar/grammar-topic-content/adjectives-exercises";
import { U99_ADJECTIVES_TOPIC } from "@/lib/grammar/grammar-topic-content/adjectives";
import { U100_ADJECTIVES_AND_ADVERBS_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/adjectives-and-adverbs-1-exercises";
import { U100_ADJECTIVES_AND_ADVERBS_1_TOPIC } from "@/lib/grammar/grammar-topic-content/adjectives-and-adverbs-1";
import { U101_ADJECTIVES_AND_ADVERBS_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/adjectives-and-adverbs-2-exercises";
import { U101_ADJECTIVES_AND_ADVERBS_2_TOPIC } from "@/lib/grammar/grammar-topic-content/adjectives-and-adverbs-2";
import { U102_SO_AND_SUCH_EXERCISES } from "@/lib/grammar/grammar-topic-content/so-and-such-exercises";
import { U102_SO_AND_SUCH_TOPIC } from "@/lib/grammar/grammar-topic-content/so-and-such";
import { U103_ENOUGH_AND_TOO_EXERCISES } from "@/lib/grammar/grammar-topic-content/enough-and-too-exercises";
import { U103_ENOUGH_AND_TOO_TOPIC } from "@/lib/grammar/grammar-topic-content/enough-and-too";
import { U104_QUITE_PRETTY_RATHER_AND_FAIRLY_EXERCISES } from "@/lib/grammar/grammar-topic-content/quite-pretty-rather-and-fairly-exercises";
import { U104_QUITE_PRETTY_RATHER_AND_FAIRLY_TOPIC } from "@/lib/grammar/grammar-topic-content/quite-pretty-rather-and-fairly";
import { U105_COMPARATIVE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/comparative-1-exercises";
import { U105_COMPARATIVE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/comparative-1";
import { U106_COMPARATIVE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/comparative-2-exercises";
import { U106_COMPARATIVE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/comparative-2";
import { U107_COMPARATIVE_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/comparative-3-exercises";
import { U107_COMPARATIVE_3_TOPIC } from "@/lib/grammar/grammar-topic-content/comparative-3";
import { U108_SUPERLATIVE_EXERCISES } from "@/lib/grammar/grammar-topic-content/superlative-exercises";
import { U108_SUPERLATIVE_TOPIC } from "@/lib/grammar/grammar-topic-content/superlative";
import { U109_WORD_ORDER_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/word-order-1-exercises";
import { U109_WORD_ORDER_1_TOPIC } from "@/lib/grammar/grammar-topic-content/word-order-1";
import { U110_WORD_ORDER_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/word-order-2-exercises";
import { U110_WORD_ORDER_2_TOPIC } from "@/lib/grammar/grammar-topic-content/word-order-2";
import { U111_STILL_ANY_MORE_YET_ALREADY_EXERCISES } from "@/lib/grammar/grammar-topic-content/still-any-more-yet-already-exercises";
import { U111_STILL_ANY_MORE_YET_ALREADY_TOPIC } from "@/lib/grammar/grammar-topic-content/still-any-more-yet-already";
import { U112_EVEN_EXERCISES } from "@/lib/grammar/grammar-topic-content/even-exercises";
import { U112_EVEN_TOPIC } from "@/lib/grammar/grammar-topic-content/even";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 98–112
 * (English Grammar in Use · Intermediate — Adjectives and adverbs (98–112)).
 */
export const ADJ_ADV_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u98-adjectives-ending-in-ing-and-ed": U98_ADJECTIVES_ENDING_IN_ING_AND_ED_TOPIC,
  "u99-adjectives": U99_ADJECTIVES_TOPIC,
  "u100-adjectives-and-adverbs-1": U100_ADJECTIVES_AND_ADVERBS_1_TOPIC,
  "u101-adjectives-and-adverbs-2": U101_ADJECTIVES_AND_ADVERBS_2_TOPIC,
  "u102-so-and-such": U102_SO_AND_SUCH_TOPIC,
  "u103-enough-and-too": U103_ENOUGH_AND_TOO_TOPIC,
  "u104-quite-pretty-rather-and-fairly": U104_QUITE_PRETTY_RATHER_AND_FAIRLY_TOPIC,
  "u105-comparative-1": U105_COMPARATIVE_1_TOPIC,
  "u106-comparative-2": U106_COMPARATIVE_2_TOPIC,
  "u107-comparative-3": U107_COMPARATIVE_3_TOPIC,
  "u108-superlative": U108_SUPERLATIVE_TOPIC,
  "u109-word-order-1": U109_WORD_ORDER_1_TOPIC,
  "u110-word-order-2": U110_WORD_ORDER_2_TOPIC,
  "u111-still-any-more-yet-already": U111_STILL_ANY_MORE_YET_ALREADY_TOPIC,
  "u112-even": U112_EVEN_TOPIC,
};

export const ADJ_ADV_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u98-adjectives-ending-in-ing-and-ed": U98_ADJECTIVES_ENDING_IN_ING_AND_ED_EXERCISES,
  "u99-adjectives": U99_ADJECTIVES_EXERCISES,
  "u100-adjectives-and-adverbs-1": U100_ADJECTIVES_AND_ADVERBS_1_EXERCISES,
  "u101-adjectives-and-adverbs-2": U101_ADJECTIVES_AND_ADVERBS_2_EXERCISES,
  "u102-so-and-such": U102_SO_AND_SUCH_EXERCISES,
  "u103-enough-and-too": U103_ENOUGH_AND_TOO_EXERCISES,
  "u104-quite-pretty-rather-and-fairly": U104_QUITE_PRETTY_RATHER_AND_FAIRLY_EXERCISES,
  "u105-comparative-1": U105_COMPARATIVE_1_EXERCISES,
  "u106-comparative-2": U106_COMPARATIVE_2_EXERCISES,
  "u107-comparative-3": U107_COMPARATIVE_3_EXERCISES,
  "u108-superlative": U108_SUPERLATIVE_EXERCISES,
  "u109-word-order-1": U109_WORD_ORDER_1_EXERCISES,
  "u110-word-order-2": U110_WORD_ORDER_2_EXERCISES,
  "u111-still-any-more-yet-already": U111_STILL_ANY_MORE_YET_ALREADY_EXERCISES,
  "u112-even": U112_EVEN_EXERCISES,
};

