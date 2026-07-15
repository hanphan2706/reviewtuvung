import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 17 exercises — Have and have got (English Grammar in Use · Intermediate).
 */
export const HAVE_AND_HAVE_GOT_EXERCISES: readonly GrammarExercise[] = [
  // 17.2 — Complete the sentences using have
  grammarCloze(
    "have-17-2-3",
    "17.2 · Hoàn thành câu với have",
    "They can't pay their bills. They __________ any money.",
    "don't have",
    {
      alternatives: ["haven't got"],
      explanation: "Phủ định hiện tại về sở hữu → don't have / haven't got any money.",
    },
  ),
  grammarCloze(
    "have-17-2-4",
    "17.2 · Hoàn thành câu với have",
    "We got wet in the rain yesterday. We __________ an umbrella.",
    "didn't have",
    {
      explanation: "Ở quá khứ chỉ dùng did/didn't với have (không thêm got) → We didn't have an umbrella.",
    },
  ),
  grammarCloze(
    "have-17-2-5",
    "17.2 · Hoàn thành câu với have",
    "Jack __________ a car. He can't afford one and he can't drive anyway.",
    "doesn't have",
    {
      alternatives: ["hasn't got"],
      explanation: "Phủ định hiện tại về sở hữu → Jack doesn't have / hasn't got a car.",
    },
  ),
  grammarCloze(
    "have-17-2-6",
    "17.2 · Hoàn thành câu với have",
    "'Excuse me, __________ a pen I could borrow?' 'Yes, sure. Here you are.'",
    "do you have",
    {
      alternatives: ["have you got"],
      explanation: "Câu hỏi về sở hữu → Do you have / Have you got a pen I could borrow?",
    },
  ),
  grammarCloze(
    "have-17-2-7",
    "17.2 · Hoàn thành câu với have",
    "I was very busy yesterday. I __________ time to go shopping.",
    "didn't have",
    {
      explanation: "Quá khứ, phủ định → I didn't have time to go shopping.",
    },
  ),
  grammarCloze(
    "have-17-2-10",
    "17.2 · Hoàn thành câu với have",
    "'Where's the remote control?' 'I don't know. I __________ it.'",
    "haven't got",
    {
      alternatives: ["don't have"],
      explanation: "Phủ định hiện tại về sở hữu → I haven't got / don't have it.",
    },
  ),

  // 17.3 — Are the underlined words OK? Change them where necessary
  grammarCloze(
    "have-17-3-3",
    "17.3 · Sửa câu cho đúng",
    "I couldn't contact you because I hadn't my phone. — Câu đúng là: I couldn't contact you because __________ my phone.",
    "I didn't have",
    {
      alternatives: ["I hadn't got"],
      explanation: "Ở quá khứ dùng didn't have (hoặc hadn't got), không dùng hadn't một mình → I didn't have / hadn't got my phone.",
    },
  ),
  grammarCloze(
    "have-17-3-4",
    "17.3 · Sửa câu cho đúng",
    "'Are you feeling OK?' 'No, I'm having a cold.' — Câu đúng là: 'No, __________.'",
    "I have a cold",
    {
      alternatives: ["I've got a cold"],
      explanation: "a cold (bệnh) dùng have/have got, không dùng continuous → I have a cold / I've got a cold.",
    },
  ),
  grammarCloze(
    "have-17-3-6",
    "17.3 · Sửa câu cho đúng",
    "I felt really tired. I hadn't any energy. — Câu đúng là: I felt really tired. __________ any energy.",
    "I didn't have",
    {
      explanation: "Quá khứ phủ định, chuẩn dùng didn't have → I didn't have any energy.",
    },
  ),
  grammarCloze(
    "have-17-3-8",
    "17.3 · Sửa câu cho đúng",
    "Was your trip OK? Had you any problems? — Câu đúng là: Was your trip OK? __________ any problems?",
    "Did you have",
    {
      explanation: "Quá khứ, câu hỏi chuẩn dùng did you have (Had you là cách ít dùng) → Did you have any problems?",
    },
  ),
  grammarCloze(
    "have-17-3-10",
    "17.3 · Sửa câu cho đúng",
    "The last time I saw Steve, he was having a beard. — Câu đúng là: The last time I saw Steve, __________ a beard.",
    "he had",
    {
      explanation: "a beard (đặc điểm/sở hữu) không dùng continuous → he had a beard.",
    },
  ),
  grammarCloze(
    "have-17-3-12",
    "17.3 · Sửa câu cho đúng",
    "How often have you a shower? — Câu đúng là: How often __________ a shower?",
    "do you have",
    {
      explanation: "have a shower (hoạt động) dùng do/does trong câu hỏi → How often do you have a shower?",
    },
  ),

  // 17.4 — Complete using an expression with have
  grammarCloze(
    "have-17-4-2",
    "17.4 · Cụm từ với have",
    "David starts work at 8 o'clock and __________ at 10.30.",
    "has a break",
    {
      explanation: "Cụm cố định 'have a break' → has a break at 10.30.",
    },
  ),
  grammarCloze(
    "have-17-4-3",
    "17.4 · Cụm từ với have",
    "We __________ last week. We invited lots of people.",
    "had a party",
    {
      explanation: "Cụm cố định 'have a party' ở quá khứ → had a party last week.",
    },
  ),
  grammarCloze(
    "have-17-4-4",
    "17.4 · Cụm từ với have",
    "There's something wrong with my bike. Can you __________ at it for me?",
    "have a look",
    {
      explanation: "Cụm cố định 'have a look (at something)' → Can you have a look at it?",
    },
  ),
  grammarCloze(
    "have-17-4-6",
    "17.4 · Cụm từ với have",
    "I met some friends in the supermarket yesterday. We stopped and __________.",
    "had a chat",
    {
      explanation: "Cụm cố định 'have a chat (with somebody)' → We stopped and had a chat.",
    },
  ),
  grammarCloze(
    "have-17-4-8",
    "17.4 · Cụm từ với have",
    "Suzanne __________ a few weeks ago. It's her second child.",
    "had a baby",
    {
      explanation: "Cụm cố định 'have a baby' (= sinh con) → Suzanne had a baby a few weeks ago.",
    },
  ),
  grammarCloze(
    "have-17-4-10",
    "17.4 · Cụm từ với have",
    "I'd like to go away somewhere. I __________ for a long time.",
    "haven't had a holiday",
    {
      alternatives: ["haven't had a break"],
      explanation: "Cụm cố định 'have a holiday' ở dạng phủ định present perfect → I haven't had a holiday for a long time.",
    },
  ),
];
