import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 19 exercises — Present tenses for the future (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover contractions and full forms.
 */
export const U19_PRESENT_TENSES_FOR_THE_FUTURE_EXERCISES: readonly GrammarExercise[] = [
  // 19.1 — Ask Anna about her holiday plans
  grammarCloze(
    "u19-1-2",
    "19.1 · Hỏi về kế hoạch",
    "Anna sắp đi nghỉ. Hỏi cô ấy: (how long / go for?) __________",
    "How long are you going for",
    {
      alternatives: ["How long are you going for?"],
      explanation: "Kế hoạch đã sắp xếp trước → dùng present continuous: How long are you going for?",
    },
  ),
  grammarCloze(
    "u19-1-3",
    "19.1 · Hỏi về kế hoạch",
    "(when / leave?) __________",
    "When are you leaving",
    {
      alternatives: ["When are you leaving?"],
      explanation: "Hỏi về việc đã sắp xếp trước (khi nào khởi hành) → present continuous.",
    },
  ),
  grammarCloze(
    "u19-1-4",
    "19.1 · Hỏi về kế hoạch",
    "(go / alone?) __________",
    "Are you going alone",
    {
      alternatives: ["Are you going alone?"],
      explanation: "Việc đã lên kế hoạch → Are you going alone?",
    },
  ),
  grammarCloze(
    "u19-1-5",
    "19.1 · Hỏi về kế hoạch",
    "(travel / by car?) __________",
    "Are you travelling by car",
    {
      alternatives: ["Are you travelling by car?", "Are you traveling by car", "Are you traveling by car?"],
      explanation: "Phương tiện đi lại đã được quyết định trước → present continuous.",
    },
  ),
  grammarCloze(
    "u19-1-6",
    "19.1 · Hỏi về kế hoạch",
    "(where / stay?) __________",
    "Where are you staying",
    {
      alternatives: ["Where are you staying?"],
      explanation: "Chỗ ở đã được sắp xếp trước khi đi → Where are you staying?",
    },
  ),

  // 19.2 — Complete the sentences
  grammarCloze(
    "u19-2-2",
    "19.2 · Hoàn thành câu",
    "__________ a party next week. We've invited all our friends.",
    "We're having",
    {
      alternatives: ["We are having"],
      explanation: "Đã mời bạn bè (sắp xếp trước) → We're having a party next week.",
    },
  ),
  grammarCloze(
    "u19-2-3",
    "19.2 · Hoàn thành câu",
    "__________ tomorrow. It's a public holiday.",
    "I'm not working",
    {
      alternatives: ["I am not working"],
      explanation: "Nghỉ làm vì ngày lễ, việc đã biết trước → present continuous phủ định.",
    },
  ),
  grammarCloze(
    "u19-2-4",
    "19.2 · Hoàn thành câu",
    "__________ now. I've come to say goodbye.",
    "I'm leaving",
    {
      alternatives: ["I am leaving"],
      explanation: "Hành động sắp xảy ra ngay lúc nói (verb chuyển động: leave) → present continuous.",
    },
  ),
  grammarCloze(
    "u19-2-5",
    "19.2 · Hoàn thành câu",
    "'What time __________ out this evening?' 'Seven o'clock.'",
    "are you going",
    {
      explanation: "Hỏi về sắp xếp cá nhân cho buổi tối → present continuous: are you going out.",
    },
  ),
  grammarCloze(
    "u19-2-6",
    "19.2 · Hoàn thành câu",
    "Laura __________ to the party tomorrow. She isn't well.",
    "isn't coming",
    {
      alternatives: ["Laura isn't coming", "is not coming", "Laura is not coming"],
      explanation: "Việc đã được biết trước (cô ấy không khỏe) → present continuous phủ định.",
    },
  ),
  grammarCloze(
    "u19-2-7",
    "19.2 · Hoàn thành câu",
    "I love New York. __________ there soon.",
    "I'm going",
    {
      alternatives: ["I am going"],
      explanation: "Kế hoạch đã quyết định (đi New York) → present continuous.",
    },
  ),
  grammarCloze(
    "u19-2-8",
    "19.2 · Hoàn thành câu",
    "Ben can't meet us on Monday. __________ late.",
    "He's working",
    {
      alternatives: ["He is working"],
      explanation: "Sắp xếp công việc đã biết trước cho thứ Hai → present continuous.",
    },
  ),

  // 19.4 — Present continuous or present simple
  grammarCloze(
    "u19-4-2",
    "19.4 · Continuous hay simple",
    "'__________ to Sam's party on Saturday?' 'No, I haven't been invited.'",
    "Are you going",
    {
      explanation: "Hỏi về việc dự định tham dự tiệc → present continuous cho tương lai.",
    },
  ),
  grammarCloze(
    "u19-4-3",
    "19.4 · Continuous hay simple",
    "'Has Jack moved into his new apartment yet?' 'Not yet, but __________ soon — probably at the end of the month.'",
    "he's moving",
    {
      alternatives: ["he is moving"],
      explanation: "Việc đã sắp xếp cho tương lai gần → present continuous.",
    },
  ),
  grammarCloze(
    "u19-4-6",
    "19.4 · Continuous hay simple",
    "'__________ anything tomorrow morning?' 'No, I'm free. Why?'",
    "Are you doing",
    {
      explanation: "Hỏi về kế hoạch cá nhân cho sáng mai → present continuous.",
    },
  ),
  grammarCloze(
    "u19-4-9",
    "19.4 · Continuous hay simple",
    "There's football on TV later tonight. __________ it?",
    "Are you watching",
    {
      explanation: "Kế hoạch xem trận đấu đã dự tính → present continuous.",
    },
  ),
  grammarCloze(
    "u19-4-11",
    "19.4 · Continuous hay simple",
    "I'd like to go and see the exhibition at the museum. How long is it on for? __________ next week.",
    "It finishes",
    {
      explanation: "Lịch trình cố định của cuộc triển lãm (giống thời gian biểu) → present simple.",
    },
  ),
  grammarCloze(
    "u19-4-12",
    "19.4 · Continuous hay simple",
    "'Do you need the car this evening?' 'No, you can have it. __________ it.'",
    "I'm not using",
    {
      alternatives: ["I am not using"],
      explanation: "Kế hoạch cá nhân cho buổi tối (không dùng xe) → present continuous phủ định.",
    },
  ),
];
