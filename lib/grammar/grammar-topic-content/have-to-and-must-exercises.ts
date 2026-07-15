import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 31 exercises — have to and must (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover I'll have to / will have to variants.
 */
export const U31_HAVE_TO_AND_MUST_EXERCISES: readonly GrammarExercise[] = [
  // 31.1 — have/has/had to
  grammarCloze(
    "u31-1-3",
    "31.1 · have / has / had to",
    "I don't have much time. __________ in ten minutes.",
    "I have to go",
    {
      alternatives: ["I'll have to go", "I will have to go"],
      explanation: "Cần đi ngay → I have to go / I'll have to go.",
    },
  ),
  grammarCloze(
    "u31-1-4",
    "31.1 · have / has / had to",
    "'I'm afraid I can't stay long.' 'What time __________?'",
    "do you have to go",
    {
      alternatives: ["will you have to go"],
      explanation: "Câu hỏi với have to → What time do you have to go?",
    },
  ),
  grammarCloze(
    "u31-1-5",
    "31.1 · have / has / had to",
    "Joe starts work at 5 am every day, which means __________ at four.",
    "he has to get up",
    {
      explanation: "Sự thật/thói quen → he has to get up at four.",
    },
  ),
  grammarCloze(
    "u31-1-6",
    "31.1 · have / has / had to",
    "We nearly missed the bus this morning. __________ to catch it.",
    "We had to run",
    {
      explanation: "Nghĩa vụ quá khứ → We had to run (không must).",
    },
  ),
  grammarCloze(
    "u31-1-7",
    "31.1 · have / has / had to",
    "Is Lisa usually free on Saturdays or __________?",
    "does she have to work",
    {
      explanation: "Câu hỏi hiện tại với have to → does she have to work?",
    },
  ),
  grammarCloze(
    "u31-1-8",
    "31.1 · have / has / had to",
    "There was nobody to help me. __________ everything by myself.",
    "I had to do",
    {
      explanation: "Quá khứ → I had to do everything by myself.",
    },
  ),
  grammarCloze(
    "u31-1-9",
    "31.1 · have / has / had to",
    "How old __________ to have a driving licence?",
    "do you have to be",
    {
      explanation: "Câu hỏi → How old do you have to be…?",
    },
  ),
  grammarCloze(
    "u31-1-10",
    "31.1 · have / has / had to",
    "There was a lot of noise from the street. __________ the window.",
    "We had to close",
    {
      explanation: "Quá khứ → We had to close the window.",
    },
  ),

  // 31.3 — correct must where unnatural
  grammarCloze(
    "u31-3-4",
    "31.3 · must → have to / had to",
    "I couldn't get a taxi last night. __________ home.",
    "I had to walk",
    {
      alternatives: ["I had to walk home"],
      explanation: "Quá khứ → I had to walk home (không I must walk).",
    },
  ),
  grammarCloze(
    "u31-3-6",
    "31.3 · must → have to / had to",
    "Tom isn't going out this evening. __________ for his exam.",
    "He has to study",
    {
      alternatives: ["He has to study for his exam"],
      explanation: "Nghĩa vụ khách quan/sự thật → He has to study (tự nhiên hơn must).",
    },
  ),
  grammarCloze(
    "u31-3-7",
    "31.3 · must → have to / had to",
    "We can't go the usual way because the road is closed. __________ another way.",
    "We have to go",
    {
      alternatives: ["We have to go another way"],
      explanation: "Sự thật buộc phải đổi đường → We have to go another way.",
    },
  ),
  grammarCloze(
    "u31-3-8",
    "31.3 · must → have to / had to",
    "Julia wears glasses. __________ glasses since she was very young.",
    "She has had to wear",
    {
      alternatives: [
        "She has had to wear glasses since she was very young",
        "She has had to wear glasses",
      ],
      explanation: "since + present perfect → She has had to wear glasses since…",
    },
  ),

  // 31.4 — mustn't / don't/doesn't have to
  grammarCloze(
    "u31-4-3",
    "31.4 · mustn't / don't have to",
    "There's a lift in the building, so we __________ climb the stairs.",
    "don't have to",
    {
      explanation: "Có thang máy → không cần leo cầu thang → don't have to.",
    },
  ),
  grammarCloze(
    "u31-4-4",
    "31.4 · mustn't / don't have to",
    "I promised Kate I'd call her tomorrow. I __________ forget.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Không được quên (cấm) → mustn't forget.",
    },
  ),
  grammarCloze(
    "u31-4-5",
    "31.4 · mustn't / don't have to",
    "I'm not very busy. I have a few things to do, but I __________ do them now.",
    "don't have to",
    {
      explanation: "Không cần làm ngay → don't have to.",
    },
  ),
  grammarCloze(
    "u31-4-6",
    "31.4 · mustn't / don't have to",
    "Sophie likes weekends because she __________ get up early.",
    "doesn't have to",
    {
      explanation: "Cuối tuần không cần dậy sớm → doesn't have to.",
    },
  ),
  grammarCloze(
    "u31-4-7",
    "31.4 · mustn't / don't have to",
    "You __________ be a good player to enjoy a game of tennis.",
    "don't have to",
    {
      explanation: "Không cần giỏi vẫn chơi vui được → don't have to.",
    },
  ),
  grammarCloze(
    "u31-4-8",
    "31.4 · mustn't / don't have to",
    "You should keep trying to find a job. You __________ give up.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Không được bỏ cuộc → mustn't give up.",
    },
  ),
  grammarCloze(
    "u31-4-9",
    "31.4 · mustn't / don't have to",
    "I __________ eat too much. I'm supposed to be on a diet.",
    "mustn't",
    {
      alternatives: ["must not"],
      explanation: "Đang ăn kiêng → không được ăn nhiều → mustn't.",
    },
  ),
  grammarCloze(
    "u31-4-10",
    "31.4 · mustn't / don't have to",
    "We have plenty of time before our flight. We __________ check in yet.",
    "don't have to",
    {
      explanation: "Còn nhiều thời gian → không cần check-in ngay → don't have to.",
    },
  ),
];
