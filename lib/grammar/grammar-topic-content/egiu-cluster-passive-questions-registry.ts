import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U42_PASSIVE_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/passive-1-exercises";
import { U42_PASSIVE_1_TOPIC } from "@/lib/grammar/grammar-topic-content/passive-1";
import { U43_PASSIVE_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/passive-2-exercises";
import { U43_PASSIVE_2_TOPIC } from "@/lib/grammar/grammar-topic-content/passive-2";
import { U44_PASSIVE_3_EXERCISES } from "@/lib/grammar/grammar-topic-content/passive-3-exercises";
import { U44_PASSIVE_3_TOPIC } from "@/lib/grammar/grammar-topic-content/passive-3";
import { U45_IT_IS_SAID_THAT_HE_IS_SAID_TO_HE_IS_SUPPOSED_TO_EXERCISES } from "@/lib/grammar/grammar-topic-content/it-is-said-that-he-is-said-to-he-is-supposed-to-exercises";
import { U45_IT_IS_SAID_THAT_HE_IS_SAID_TO_HE_IS_SUPPOSED_TO_TOPIC } from "@/lib/grammar/grammar-topic-content/it-is-said-that-he-is-said-to-he-is-supposed-to";
import { U46_HAVE_SOMETHING_DONE_EXERCISES } from "@/lib/grammar/grammar-topic-content/have-something-done-exercises";
import { U46_HAVE_SOMETHING_DONE_TOPIC } from "@/lib/grammar/grammar-topic-content/have-something-done";
import { U47_REPORTED_SPEECH_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/reported-speech-1-exercises";
import { U47_REPORTED_SPEECH_1_TOPIC } from "@/lib/grammar/grammar-topic-content/reported-speech-1";
import { U48_REPORTED_SPEECH_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/reported-speech-2-exercises";
import { U48_REPORTED_SPEECH_2_TOPIC } from "@/lib/grammar/grammar-topic-content/reported-speech-2";
import { U49_QUESTIONS_1_EXERCISES } from "@/lib/grammar/grammar-topic-content/questions-1-exercises";
import { U49_QUESTIONS_1_TOPIC } from "@/lib/grammar/grammar-topic-content/questions-1";
import { U50_QUESTIONS_2_EXERCISES } from "@/lib/grammar/grammar-topic-content/questions-2-exercises";
import { U50_QUESTIONS_2_TOPIC } from "@/lib/grammar/grammar-topic-content/questions-2";
import { U51_AUXILIARY_VERBS_EXERCISES } from "@/lib/grammar/grammar-topic-content/auxiliary-verbs-exercises";
import { U51_AUXILIARY_VERBS_TOPIC } from "@/lib/grammar/grammar-topic-content/auxiliary-verbs";
import { U52_QUESTION_TAGS_EXERCISES } from "@/lib/grammar/grammar-topic-content/question-tags-exercises";
import { U52_QUESTION_TAGS_TOPIC } from "@/lib/grammar/grammar-topic-content/question-tags";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 42–52
 * (English Grammar in Use · Intermediate — Passive / Reported / Questions (42–52)).
 */
export const PASSIVE_QUESTIONS_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u42-passive-1": U42_PASSIVE_1_TOPIC,
  "u43-passive-2": U43_PASSIVE_2_TOPIC,
  "u44-passive-3": U44_PASSIVE_3_TOPIC,
  "u45-it-is-said-that-he-is-said-to-he-is-supposed-to": U45_IT_IS_SAID_THAT_HE_IS_SAID_TO_HE_IS_SUPPOSED_TO_TOPIC,
  "u46-have-something-done": U46_HAVE_SOMETHING_DONE_TOPIC,
  "u47-reported-speech-1": U47_REPORTED_SPEECH_1_TOPIC,
  "u48-reported-speech-2": U48_REPORTED_SPEECH_2_TOPIC,
  "u49-questions-1": U49_QUESTIONS_1_TOPIC,
  "u50-questions-2": U50_QUESTIONS_2_TOPIC,
  "u51-auxiliary-verbs": U51_AUXILIARY_VERBS_TOPIC,
  "u52-question-tags": U52_QUESTION_TAGS_TOPIC,
};

export const PASSIVE_QUESTIONS_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u42-passive-1": U42_PASSIVE_1_EXERCISES,
  "u43-passive-2": U43_PASSIVE_2_EXERCISES,
  "u44-passive-3": U44_PASSIVE_3_EXERCISES,
  "u45-it-is-said-that-he-is-said-to-he-is-supposed-to": U45_IT_IS_SAID_THAT_HE_IS_SAID_TO_HE_IS_SUPPOSED_TO_EXERCISES,
  "u46-have-something-done": U46_HAVE_SOMETHING_DONE_EXERCISES,
  "u47-reported-speech-1": U47_REPORTED_SPEECH_1_EXERCISES,
  "u48-reported-speech-2": U48_REPORTED_SPEECH_2_EXERCISES,
  "u49-questions-1": U49_QUESTIONS_1_EXERCISES,
  "u50-questions-2": U50_QUESTIONS_2_EXERCISES,
  "u51-auxiliary-verbs": U51_AUXILIARY_VERBS_EXERCISES,
  "u52-question-tags": U52_QUESTION_TAGS_EXERCISES,
};

