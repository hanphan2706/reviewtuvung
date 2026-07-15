import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 10 exercises — Present perfect continuous and simple
 * (English Grammar in Use · Intermediate). Nên luyện kèm Unit 9 (continuous)
 * và Units 7–8 (simple) để thấy rõ sự tương phản hoạt động vs kết quả.
 */
export const PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_EXERCISES: readonly GrammarExercise[] = [
  // 10.1 — Read the situation and complete the sentences
  grammarCloze(
    "ppcs-10-1-2a",
    "10.1 · Continuous hay simple?",
    "Rachel is from Australia. She is travelling round Europe. She began her trip three months ago. She __________ for three months. (travel)",
    "'s been travelling",
    {
      alternatives: ["has been travelling", "She's been travelling", "She has been travelling"],
      explanation: "Nhấn hoạt động vẫn tiếp diễn, không quan tâm đã đi được bao nhiêu nước → has been travelling.",
    },
  ),
  grammarCloze(
    "ppcs-10-1-2b",
    "10.1 · Continuous hay simple?",
    "She's __________ six countries so far. (visit)",
    "visited",
    {
      alternatives: ["'s visited", "has visited"],
      explanation: "how many (bao nhiêu nước) → nhấn kết quả hoàn tất → has visited.",
    },
  ),
  grammarCloze(
    "ppcs-10-1-3a",
    "10.1 · Continuous hay simple?",
    "Patrick is a tennis player. This year he won the national championship again – for the fourth time. He's __________ the national championship four times. (win)",
    "won",
    {
      alternatives: ["'s won", "has won"],
      explanation: "how many times (bao nhiêu lần) → nhấn số lần hoàn tất → has won.",
    },
  ),
  grammarCloze(
    "ppcs-10-1-3b",
    "10.1 · Continuous hay simple?",
    "He's been __________ since he was ten. (play)",
    "playing",
    {
      explanation: "how long (bao lâu, vẫn tiếp diễn) → nhấn hoạt động → has been playing.",
    },
  ),
  grammarCloze(
    "ppcs-10-1-4a",
    "10.1 · Continuous hay simple?",
    "When they left college, Lisa and Sue started making films together. They still make films. They've been __________ films since they left college. (make)",
    "making",
    {
      explanation: "Hoạt động vẫn tiếp diễn từ khi ra trường → have been making.",
    },
  ),
  grammarCloze(
    "ppcs-10-1-4b",
    "10.1 · Continuous hay simple?",
    "They've __________ five films since they left college. (make)",
    "made",
    {
      explanation: "how many (số lượng phim đã hoàn thành) → nhấn kết quả → have made.",
    },
  ),

  // 10.2 — Ask questions
  grammarCloze(
    "ppcs-10-2-2",
    "10.2 · Đặt câu hỏi",
    "You have just arrived to meet a friend. She is waiting for you. You ask: (wait / long?) __________",
    "Have you been waiting long?",
    {
      explanation: "Hỏi hoạt động chờ đợi đã kéo dài bao lâu → continuous: Have you been waiting long?",
    },
  ),
  grammarCloze(
    "ppcs-10-2-4",
    "10.2 · Đặt câu hỏi",
    "Some friends of yours are having a party next week. You ask: (how many people / invite?) __________",
    "How many people have you invited?",
    {
      explanation: "how many (số lượng, đã hoàn tất) → simple: How many people have you invited?",
    },
  ),
  grammarCloze(
    "ppcs-10-2-5",
    "10.2 · Đặt câu hỏi",
    "A friend of yours is a teacher. You ask: (how long / teach?) __________",
    "How long have you been teaching?",
    {
      explanation: "how long (vẫn tiếp diễn) → continuous: How long have you been teaching?",
    },
  ),
  grammarCloze(
    "ppcs-10-2-7",
    "10.2 · Đặt câu hỏi",
    "A friend of yours is saving money to go on a world trip. You ask: (how long / save?) __________",
    "How long have you been saving?",
    {
      alternatives: ["How long have you been saving money?"],
      explanation: "how long (hoạt động vẫn tiếp diễn) → continuous: How long have you been saving (money)?",
    },
  ),

  // 10.3 — Present perfect simple or continuous
  grammarCloze(
    "ppcs-10-3-2",
    "10.3 · Simple hay continuous?",
    "Look! __________ that window. (somebody / break)",
    "Somebody's broken",
    {
      alternatives: ["Somebody has broken"],
      explanation: "Kết quả (cửa vỡ) là điều quan trọng → present perfect simple: Somebody's broken that window.",
    },
  ),
  grammarCloze(
    "ppcs-10-3-3",
    "10.3 · Simple hay continuous?",
    "You look tired. __________ hard? (you / work)",
    "Have you been working",
    {
      explanation: "Nhấn hoạt động (làm việc vất vả) gây ra vẻ mệt mỏi → continuous: Have you been working hard?",
    },
  ),
  grammarCloze(
    "ppcs-10-3-4",
    "10.3 · Simple hay continuous?",
    "'__________ in a factory?' (you / ever / work) 'No, never.'",
    "Have you ever worked",
    {
      explanation: "ever + kinh nghiệm sống → present perfect simple: Have you ever worked in a factory?",
    },
  ),
  grammarCloze(
    "ppcs-10-3-9",
    "10.3 · Simple hay continuous?",
    "'Sorry I'm late.' 'That's all right. __________ long.' (I / not / wait)",
    "I haven't been waiting",
    {
      explanation: "Nhấn hoạt động chờ đợi chưa kéo dài → continuous: I haven't been waiting long.",
    },
  ),
  grammarCloze(
    "ppcs-10-3-11",
    "10.3 · Simple hay continuous?",
    "'Is it still raining?' 'No, __________.' (it / stop)",
    "it's stopped",
    {
      alternatives: ["it has stopped"],
      explanation: "Kết quả hoàn tất (mưa đã ngừng) → present perfect simple: it's stopped.",
    },
  ),
  grammarCloze(
    "ppcs-10-3-12",
    "10.3 · Simple hay continuous?",
    "The children are tired now. __________ in the garden. (they / play)",
    "They've been playing",
    {
      alternatives: ["They have been playing"],
      explanation: "Nhấn hoạt động (chơi lâu) gây ra sự mệt mỏi → continuous: They've been playing in the garden.",
    },
  ),
];
