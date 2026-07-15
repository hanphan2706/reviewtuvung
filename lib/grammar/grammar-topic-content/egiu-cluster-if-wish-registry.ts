import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";
import { U38_IF_I_DO_AND_IF_I_DID_EXERCISES } from "@/lib/grammar/grammar-topic-content/if-i-do-and-if-i-did-exercises";
import { U38_IF_I_DO_AND_IF_I_DID_TOPIC } from "@/lib/grammar/grammar-topic-content/if-i-do-and-if-i-did";
import { U39_IF_I_KNEW_I_WISH_I_KNEW_EXERCISES } from "@/lib/grammar/grammar-topic-content/if-i-knew-i-wish-i-knew-exercises";
import { U39_IF_I_KNEW_I_WISH_I_KNEW_TOPIC } from "@/lib/grammar/grammar-topic-content/if-i-knew-i-wish-i-knew";
import { U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_EXERCISES } from "@/lib/grammar/grammar-topic-content/if-i-had-known-i-wish-i-had-known-exercises";
import { U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_TOPIC } from "@/lib/grammar/grammar-topic-content/if-i-had-known-i-wish-i-had-known";
import { U41_WISH_EXERCISES } from "@/lib/grammar/grammar-topic-content/wish-exercises";
import { U41_WISH_TOPIC } from "@/lib/grammar/grammar-topic-content/wish";

/**
 * Registry gộp nội dung biên soạn cho cụm Units 38–41 (English Grammar in Use ·
 * Intermediate, mảng "If and wish").
 *
 * Slug (id) khớp với lib/grammar/egiu/egiu-units.json:
 *  38 u38-if-i-do-and-if-i-did                 (học kèm Units 39–40, 25, 36)
 *  39 u39-if-i-knew-i-wish-i-knew               (học kèm Units 38, 40, 41)
 *  40 u40-if-i-had-known-i-wish-i-had-known     (học kèm Units 39, 41)
 *  41 u41-wish                                 (học kèm Units 39–40)
 */
export const IF_WISH_CURATED_DETAILS: Record<string, GrammarTopicDetail> = {
  "u38-if-i-do-and-if-i-did": U38_IF_I_DO_AND_IF_I_DID_TOPIC,
  "u39-if-i-knew-i-wish-i-knew": U39_IF_I_KNEW_I_WISH_I_KNEW_TOPIC,
  "u40-if-i-had-known-i-wish-i-had-known": U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_TOPIC,
  "u41-wish": U41_WISH_TOPIC,
};

export const IF_WISH_CURATED_EXERCISES: Record<string, readonly GrammarExercise[]> = {
  "u38-if-i-do-and-if-i-did": U38_IF_I_DO_AND_IF_I_DID_EXERCISES,
  "u39-if-i-knew-i-wish-i-knew": U39_IF_I_KNEW_I_WISH_I_KNEW_EXERCISES,
  "u40-if-i-had-known-i-wish-i-had-known": U40_IF_I_HAD_KNOWN_I_WISH_I_HAD_KNOWN_EXERCISES,
  "u41-wish": U41_WISH_EXERCISES,
};
