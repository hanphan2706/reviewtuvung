import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U26_CAN_COULD_AND_BE_ABLE_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/can-could-and-be-able-to-exercises";
import { U26_CAN_COULD_AND_BE_ABLE_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/can-could-and-be-able-to";
import { U27_COULD_DO_AND_COULD_HAVE_DONE_EXERCISES } from "@/lib/grammar/grammar-topic-content/could-do-and-could-have-done-exercises";
import { U27_COULD_DO_AND_COULD_HAVE_DONE_TOPIC } from "@/lib/grammar/grammar-topic-content/could-do-and-could-have-done";
import { U28_MUST_AND_CANT_EXERCISES } from "@/lib/grammar/grammar-topic-content/must-and-cant-exercises";
import { U28_MUST_AND_CANT_TOPIC } from "@/lib/grammar/grammar-topic-content/must-and-cant";
import { U29_MAY_AND_MIGHT_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/may-and-might-1-exercises";
import { U29_MAY_AND_MIGHT_1_TOPIC } from "@/lib/grammar/grammar-topic-content/may-and-might-1";
import { U30_MAY_AND_MIGHT_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/may-and-might-2-exercises";
import { U30_MAY_AND_MIGHT_2_TOPIC } from "@/lib/grammar/grammar-topic-content/may-and-might-2";
import { U31_HAVE_TO_AND_MUST_EXERCISES } from "@/lib/grammar/grammar-topic-content/have-to-and-must-exercises";
import { U31_HAVE_TO_AND_MUST_TOPIC } from "@/lib/grammar/grammar-topic-content/have-to-and-must";
import { U32_MUST_MUSTNT_NEEDNT_EXERCISES } from "@/lib/grammar/grammar-topic-content/must-mustnt-neednt-exercises";
import { U32_MUST_MUSTNT_NEEDNT_TOPIC } from "@/lib/grammar/grammar-topic-content/must-mustnt-neednt";
import { U33_SHOULD_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/should-1-exercises";
import { U33_SHOULD_1_TOPIC } from "@/lib/grammar/grammar-topic-content/should-1";
import { U34_SHOULD_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/should-2-exercises";
import { U34_SHOULD_2_TOPIC } from "@/lib/grammar/grammar-topic-content/should-2";
import { U35_ID_BETTER_ITS_TIME_EXERCISES } from "@/lib/grammar/grammar-topic-content/id-better-its-time-exercises";
import { U35_ID_BETTER_ITS_TIME_TOPIC } from "@/lib/grammar/grammar-topic-content/id-better-its-time";
import { U36_WOULD_EXERCISES } from "@/lib/grammar/grammar-topic-content/would-exercises";
import { U36_WOULD_TOPIC } from "@/lib/grammar/grammar-topic-content/would";
import { U37_CAN_COULD_WOULD_YOU_EXERCISES } from "@/lib/grammar/grammar-topic-content/can-could-would-you-exercises";
import { U37_CAN_COULD_WOULD_YOU_TOPIC } from "@/lib/grammar/grammar-topic-content/can-could-would-you";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 26–37 (English Grammar in Use ·
 * Intermediate, mảng "Modals").
 *
 * Slug (id) khớp với lib/grammar/egiu/egiu-units.json:
 *  26 u26-can-could-and-be-able-to
 *  27 u27-could-do-and-could-have-done
 *  28 u28-must-and-cant
 *  29 u29-may-and-might-1                 (học kèm Unit 30)
 *  30 u30-may-and-might-2                 (học kèm Unit 29)
 *  31 u31-have-to-and-must                (học kèm Unit 32; phân biệt Unit 28)
 *  32 u32-must-mustnt-neednt              (học kèm Unit 31)
 *  33 u33-should-1                        (học kèm Unit 34)
 *  34 u34-should-2                        (học kèm Unit 33)
 *  35 u35-id-better-its-time              (học kèm Unit 33)
 *  36 u36-would
 *  37 u37-can-could-would-you             (học kèm Unit 26)
 */
export const MODALS_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u26-can-could-and-be-able-to": U26_CAN_COULD_AND_BE_ABLE_TO_TOPIC,
  "u27-could-do-and-could-have-done": U27_COULD_DO_AND_COULD_HAVE_DONE_TOPIC,
  "u28-must-and-cant": U28_MUST_AND_CANT_TOPIC,
  "u29-may-and-might-1": U29_MAY_AND_MIGHT_1_TOPIC,
  "u30-may-and-might-2": U30_MAY_AND_MIGHT_2_TOPIC,
  "u31-have-to-and-must": U31_HAVE_TO_AND_MUST_TOPIC,
  "u32-must-mustnt-neednt": U32_MUST_MUSTNT_NEEDNT_TOPIC,
  "u33-should-1": U33_SHOULD_1_TOPIC,
  "u34-should-2": U34_SHOULD_2_TOPIC,
  "u35-id-better-its-time": U35_ID_BETTER_ITS_TIME_TOPIC,
  "u36-would": U36_WOULD_TOPIC,
  "u37-can-could-would-you": U37_CAN_COULD_WOULD_YOU_TOPIC,
};

export const MODALS_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u26-can-could-and-be-able-to": U26_CAN_COULD_AND_BE_ABLE_TO_EXERCISES,
  "u27-could-do-and-could-have-done": U27_COULD_DO_AND_COULD_HAVE_DONE_EXERCISES,
  "u28-must-and-cant": U28_MUST_AND_CANT_EXERCISES,
  "u29-may-and-might-1": U29_MAY_AND_MIGHT_1_EXERCISES,
  "u30-may-and-might-2": U30_MAY_AND_MIGHT_2_EXERCISES,
  "u31-have-to-and-must": U31_HAVE_TO_AND_MUST_EXERCISES,
  "u32-must-mustnt-neednt": U32_MUST_MUSTNT_NEEDNT_EXERCISES,
  "u33-should-1": U33_SHOULD_1_EXERCISES,
  "u34-should-2": U34_SHOULD_2_EXERCISES,
  "u35-id-better-its-time": U35_ID_BETTER_ITS_TIME_EXERCISES,
  "u36-would": U36_WOULD_EXERCISES,
  "u37-can-could-would-you": U37_CAN_COULD_WOULD_YOU_EXERCISES,
};
