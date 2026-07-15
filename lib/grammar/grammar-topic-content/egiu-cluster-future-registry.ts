import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U19_PRESENT_TENSES_FOR_THE_FUTURE_EXERCISES } from "@/lib/grammar/grammar-topic-content/present-tenses-for-the-future-exercises";
import { U19_PRESENT_TENSES_FOR_THE_FUTURE_TOPIC } from "@/lib/grammar/grammar-topic-content/present-tenses-for-the-future";
import { U20_IM_GOING_TO_DO_EXERCISES } from "@/lib/grammar/grammar-topic-content/im-going-to-do-exercises";
import { U20_IM_GOING_TO_DO_TOPIC } from "@/lib/grammar/grammar-topic-content/im-going-to-do";
import { U21_WILL_AND_SHALL_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/will-and-shall-1-exercises";
import { U21_WILL_AND_SHALL_1_TOPIC } from "@/lib/grammar/grammar-topic-content/will-and-shall-1";
import { U22_WILL_AND_SHALL_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/will-and-shall-2-exercises";
import { U22_WILL_AND_SHALL_2_TOPIC } from "@/lib/grammar/grammar-topic-content/will-and-shall-2";
import { U23_I_WILL_AND_IM_GOING_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/i-will-and-im-going-to-exercises";
import { U23_I_WILL_AND_IM_GOING_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/i-will-and-im-going-to";
import { U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_EXERCISES } from "@/lib/grammar/grammar-topic-content/will-be-doing-and-will-have-done-exercises";
import { U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_TOPIC } from "@/lib/grammar/grammar-topic-content/will-be-doing-and-will-have-done";
import { U25_WHEN_I_DO_AND_WHEN_IVE_DONE_EXERCISES } from "@/lib/grammar/grammar-topic-content/when-i-do-and-when-ive-done-exercises";
import { U25_WHEN_I_DO_AND_WHEN_IVE_DONE_TOPIC } from "@/lib/grammar/grammar-topic-content/when-i-do-and-when-ive-done";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 19–25 (English Grammar in Use ·
 * Intermediate, mảng "Future").
 *
 * Slug (id) khớp với lib/grammar/egiu/egiu-units.json:
 *  19 u19-present-tenses-for-the-future    (liên quan Present continuous/simple, Units 20, 21–22, 25)
 *  20 u20-im-going-to-do                   (so sánh với Units 19, 23)
 *  21 u21-will-and-shall-1                 (học kèm Unit 22 — quyết định tức thời)
 *  22 u22-will-and-shall-2                 (học kèm Unit 21 — dự đoán tương lai)
 *  23 u23-i-will-and-im-going-to           (học kèm Units 20–22 — will vs going to)
 *  24 u24-will-be-doing-and-will-have-done
 *  25 u25-when-i-do-and-when-ive-done
 */
export const FUTURE_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u19-present-tenses-for-the-future": U19_PRESENT_TENSES_FOR_THE_FUTURE_TOPIC,
  "u20-im-going-to-do": U20_IM_GOING_TO_DO_TOPIC,
  "u21-will-and-shall-1": U21_WILL_AND_SHALL_1_TOPIC,
  "u22-will-and-shall-2": U22_WILL_AND_SHALL_2_TOPIC,
  "u23-i-will-and-im-going-to": U23_I_WILL_AND_IM_GOING_TO_TOPIC,
  "u24-will-be-doing-and-will-have-done": U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_TOPIC,
  "u25-when-i-do-and-when-ive-done": U25_WHEN_I_DO_AND_WHEN_IVE_DONE_TOPIC,
};

export const FUTURE_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u19-present-tenses-for-the-future": U19_PRESENT_TENSES_FOR_THE_FUTURE_EXERCISES,
  "u20-im-going-to-do": U20_IM_GOING_TO_DO_EXERCISES,
  "u21-will-and-shall-1": U21_WILL_AND_SHALL_1_EXERCISES,
  "u22-will-and-shall-2": U22_WILL_AND_SHALL_2_EXERCISES,
  "u23-i-will-and-im-going-to": U23_I_WILL_AND_IM_GOING_TO_EXERCISES,
  "u24-will-be-doing-and-will-have-done": U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_EXERCISES,
  "u25-when-i-do-and-when-ive-done": U25_WHEN_I_DO_AND_WHEN_IVE_DONE_EXERCISES,
};
