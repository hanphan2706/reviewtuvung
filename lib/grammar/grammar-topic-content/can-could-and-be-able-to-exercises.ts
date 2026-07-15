import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 26 exercises — can, could and (be) able to (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover will be able to and near variants.
 */
export const U26_CAN_COULD_AND_BE_ABLE_TO_EXERCISES: readonly GrammarExercise[] = [
  // 26.1 — can or (be) able to
  grammarCloze(
    "u26-1-3",
    "26.1 · can / (be) able to",
    "Nicole __________ drive, but she doesn't have a car.",
    "can",
    {
      explanation: "Khả năng hiện tại — dùng được can → can drive.",
    },
  ),
  grammarCloze(
    "u26-1-4",
    "26.1 · can / (be) able to",
    "I used to __________ stand on my head, but I can't do it any more.",
    "be able to",
    {
      explanation: "Sau used to không dùng can → used to be able to.",
    },
  ),
  grammarCloze(
    "u26-1-5",
    "26.1 · can / (be) able to",
    "I can't understand Mark. I've never __________ understand him.",
    "been able to",
    {
      explanation: "Perfect → bắt buộc (be) able to: I've never been able to…",
    },
  ),
  grammarCloze(
    "u26-1-6",
    "26.1 · can / (be) able to",
    "I can't see you on Friday, but I __________ meet you on Saturday morning.",
    "can",
    {
      alternatives: ["will be able to"],
      explanation: "Khả năng hiện tại/tương lai gần — can hoặc will be able to.",
    },
  ),
  grammarCloze(
    "u26-1-7",
    "26.1 · can / (be) able to",
    "Ask Katherine about your problem. She might __________ help you.",
    "be able to",
    {
      explanation: "Sau might không dùng can → might be able to help.",
    },
  ),
  grammarCloze(
    "u26-1-8",
    "26.1 · can / (be) able to",
    "You have to be careful in this part of the city. It __________ be dangerous.",
    "can",
    {
      explanation: "can = điều có thể xảy ra (khả năng chung) → It can be dangerous.",
    },
  ),
  grammarCloze(
    "u26-1-9",
    "26.1 · can / (be) able to",
    "Michael has lived in Italy a long time, so he should __________ speak Italian.",
    "be able to",
    {
      explanation: "Sau should không dùng can → should be able to speak.",
    },
  ),

  // 26.3 — can/can't/could/couldn't + verb
  grammarCloze(
    "u26-3-2",
    "26.3 · can / could / can't / couldn't",
    "When Dan was 16, he __________ 100 metres in 11 seconds.",
    "could run",
    {
      explanation: "Khả năng chung trong quá khứ → could run.",
    },
  ),
  grammarCloze(
    "u26-3-3",
    "26.3 · can / could / can't / couldn't",
    "'Are you in a hurry?' 'No, I've got plenty of time. I __________.'",
    "can wait",
    {
      explanation: "Khả năng hiện tại → can wait.",
    },
  ),
  grammarCloze(
    "u26-3-4",
    "26.3 · can / could / can't / couldn't",
    "I don't feel good this morning. I __________ last night.",
    "couldn't sleep",
    {
      explanation: "Không ngủ được tối qua → couldn't sleep.",
    },
  ),
  grammarCloze(
    "u26-3-5",
    "26.3 · can / could / can't / couldn't",
    "Can you speak a little louder? I __________ you very well.",
    "can't hear",
    {
      explanation: "Hiện tại không nghe rõ → can't hear.",
    },
  ),
  grammarCloze(
    "u26-3-6",
    "26.3 · can / could / can't / couldn't",
    "I was amazed when I heard the news. I __________ it.",
    "couldn't believe",
    {
      explanation: "Phản ứng quá khứ → couldn't believe it.",
    },
  ),

  // 26.4 — was/were able to
  grammarCloze(
    "u26-4-2",
    "26.4 · was/were able to",
    "'Did you finish your work this afternoon?' 'Yes, there was nobody to disturb me, so I __________.'",
    "was able to finish it",
    {
      alternatives: ["was able to finish"],
      explanation: "Thành công trong tình huống cụ thể → was able to finish it (không could).",
    },
  ),
  grammarCloze(
    "u26-4-3",
    "26.4 · was/were able to",
    "'Did you solve the problem?' 'Yes, we did. It wasn't easy, but we __________.'",
    "were able to solve it",
    {
      alternatives: ["were able to solve"],
      explanation: "Thành công cụ thể (chúng tôi) → were able to solve it.",
    },
  ),
  grammarCloze(
    "u26-4-4",
    "26.4 · was/were able to",
    "'Did the thief get away?' 'Yes. No-one realised what was happening and the thief __________.'",
    "was able to get away",
    {
      explanation: "Thành công trong tình huống cụ thể → was able to get away.",
    },
  ),

  // 26.5 — could / couldn't / managed to
  grammarCloze(
    "u26-5-4",
    "26.5 · could / couldn't / managed to",
    "Jessica had hurt her foot and __________ walk very well.",
    "couldn't",
    {
      explanation: "Phủ định quá khứ — couldn't walk dùng được mọi tình huống.",
    },
  ),
  grammarCloze(
    "u26-5-5",
    "26.5 · could / couldn't / managed to",
    "There was a small fire in the kitchen, but fortunately I __________ put it out.",
    "managed to",
    {
      explanation: "Thành công cụ thể → managed to put it out (không could).",
    },
  ),
  grammarCloze(
    "u26-5-6",
    "26.5 · could / couldn't / managed to",
    "The walls were thin and I __________ hear people talking in the next room.",
    "could",
    {
      explanation: "could + hear (động từ giác quan) → could hear.",
    },
  ),
  grammarCloze(
    "u26-5-7",
    "26.5 · could / couldn't / managed to",
    "I ran my first marathon recently. It was very hard, but I __________ finish.",
    "managed to",
    {
      explanation: "Thành công cụ thể (hoàn thành marathon) → managed to finish.",
    },
  ),
  grammarCloze(
    "u26-5-8",
    "26.5 · could / couldn't / managed to",
    "My grandmother loved music. She __________ play the piano very well.",
    "could",
    {
      explanation: "Khả năng chung trong quá khứ → could play.",
    },
  ),
];
