import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 12 exercises — For and since (English Grammar in Use · Intermediate).
 */
export const FOR_AND_SINCE_EXERCISES: readonly GrammarExercise[] = [
  // 12.1 — Write for or since
  grammarCloze(
    "fs-12-1-2",
    "12.1 · for hay since?",
    "Paul has lived in Brazil __________ ten years.",
    "for",
    {
      explanation: "ten years là một khoảng thời gian → for ten years.",
    },
  ),
  grammarCloze(
    "fs-12-1-4",
    "12.1 · for hay since?",
    "Kevin has been looking for a job __________ he left school.",
    "since",
    {
      explanation: "'he left school' là một điểm mốc bắt đầu (mệnh đề) → since he left school.",
    },
  ),
  grammarCloze(
    "fs-12-1-5",
    "12.1 · for hay since?",
    "I haven't been to a party __________ ages.",
    "for",
    {
      explanation: "ages là một khoảng thời gian (đã lâu) → for ages.",
    },
  ),
  grammarCloze(
    "fs-12-1-6",
    "12.1 · for hay since?",
    "I wonder where Joe is. I haven't seen him __________ last week.",
    "since",
    {
      explanation: "last week là điểm mốc (lần cuối gặp) → since last week.",
    },
  ),
  grammarCloze(
    "fs-12-1-7",
    "12.1 · for hay since?",
    "Jane is away on holiday. She's been away __________ Friday.",
    "since",
    {
      explanation: "Friday là điểm mốc bắt đầu → since Friday.",
    },
  ),
  grammarCloze(
    "fs-12-1-8",
    "12.1 · for hay since?",
    "The weather is dry. It hasn't rained __________ a few weeks.",
    "for",
    {
      explanation: "a few weeks là khoảng thời gian → for a few weeks.",
    },
  ),

  // 12.2 — Choose the right question
  grammarCloze(
    "fs-12-2-2",
    "12.2 · Chọn câu hỏi đúng",
    "Answer: 'About five years.' Câu hỏi phù hợp là gì — 'When did you buy this car?' hay 'How long have you had this car?'",
    "How long have you had this car?",
    {
      explanation: "'About five years' trả lời cho how long, không phải when → How long have you had this car?",
    },
  ),
  grammarCloze(
    "fs-12-2-3",
    "12.2 · Chọn câu hỏi đúng",
    "Answer: 'Only a few minutes.' Câu hỏi phù hợp là gì — 'When did you get here?' hay 'How long have you been waiting?'",
    "How long have you been waiting?",
    {
      explanation: "'Only a few minutes' trả lời cho how long → How long have you been waiting?",
    },
  ),
  grammarCloze(
    "fs-12-2-4",
    "12.2 · Chọn câu hỏi đúng",
    "Answer: 'September.' Câu hỏi phù hợp là gì — 'When did your course start?' hay 'How long have you been doing your course?'",
    "When did your course start?",
    {
      explanation: "'September' là một điểm mốc → when + past simple: When did your course start?",
    },
  ),
  grammarCloze(
    "fs-12-2-6",
    "12.2 · Chọn câu hỏi đúng",
    "Answer: 'A long time.' Câu hỏi phù hợp là gì — 'When did you first meet each other?' hay 'How long have you known each other?'",
    "How long have you known each other?",
    {
      explanation: "'A long time' trả lời cho how long → How long have you known each other?",
    },
  ),

  // 12.3 — Read the situations and complete the sentences
  grammarCloze(
    "fs-12-3-3",
    "12.3 · Hoàn thành câu",
    "Mark is unwell. He became ill on Sunday. He has __________ Sunday.",
    "been ill/unwell since",
    {
      alternatives: [
        "been ill since",
        "been unwell since",
        "he has been ill since",
        "he has been unwell since",
      ],
      explanation: "Sunday là điểm mốc bắt đầu bị ốm, vẫn ốm đến giờ → He has been ill/unwell since Sunday.",
    },
  ),
  grammarCloze(
    "fs-12-3-4",
    "12.3 · Hoàn thành câu",
    "Sarah is married. She's been married for a year. She got __________.",
    "married a year ago",
    {
      explanation: "Chuyển từ 'for a year' (present perfect) sang 'a year ago' (past simple) → She got married a year ago.",
    },
  ),
  grammarCloze(
    "fs-12-3-6",
    "12.3 · Hoàn thành câu",
    "Sue is in a meeting at work. It's been going on since 9 o'clock. The meeting __________ at 9 o'clock.",
    "started/began",
    {
      alternatives: ["started", "began"],
      explanation: "Chuyển sang past simple để nói thời điểm bắt đầu → The meeting started/began at 9 o'clock.",
    },
  ),
  grammarCloze(
    "fs-12-3-7",
    "12.3 · Hoàn thành câu",
    "You're working in a hotel. You started working there six months ago. I've been __________.",
    "working in a hotel for six months",
    {
      alternatives: [
        "working there for six months",
        "working in a hotel for six months.",
      ],
      explanation: "Present perfect continuous + for six months → I've been working in a hotel for six months.",
    },
  ),
  grammarCloze(
    "fs-12-3-8",
    "12.3 · Hoàn thành câu",
    "Kate is learning Japanese. She's been doing this for a long time. Kate started __________.",
    "learning Japanese a long time ago",
    {
      alternatives: ["learning Japanese a long time ago."],
      explanation: "Chuyển sang past simple với mốc cụ thể → Kate started learning Japanese a long time ago.",
    },
  ),

  // 12.4 — Complete B's sentences
  grammarCloze(
    "fs-12-4-2",
    "12.4 · Trả lời phủ định với for/since",
    "Have you seen Lisa recently? — No, I __________ for about a month.",
    "haven't seen Lisa/her",
    {
      alternatives: [
        "haven't seen Lisa",
        "haven't seen her",
        "I haven't seen Lisa",
        "I haven't seen her",
      ],
      explanation: "Phủ định present perfect + for → No, I haven't seen Lisa/her for about a month.",
    },
  ),
  grammarCloze(
    "fs-12-4-3",
    "12.4 · Trả lời phủ định với for/since",
    "Do you still go swimming regularly? — No, I __________ a long time.",
    "haven't been swimming for",
    {
      alternatives: ["haven't gone swimming for"],
      explanation: "Phủ định present perfect continuous + for → No, I haven't been swimming for a long time.",
    },
  ),
  grammarCloze(
    "fs-12-4-4",
    "12.4 · Trả lời phủ định với for/since",
    "Do you still ride a bike these days? — No, I __________ ages.",
    "haven't ridden a bike for",
    {
      explanation: "Phủ định present perfect + for ages → No, I haven't ridden a bike for ages.",
    },
  ),
  grammarCloze(
    "fs-12-4-7",
    "12.4 · Dùng It's ... since ...",
    "Do you still go swimming regularly? Trả lời bằng cấu trúc It's ... since ...: No, __________ went swimming.",
    "it's a long time since I last",
    {
      alternatives: [
        "it's a long time since I",
        "it's been a long time since I last",
        "it's been a long time since I",
      ],
      explanation: "It's/It's been + khoảng thời gian + since + việc xảy ra lần cuối → No, it's a long time since I (last) went swimming.",
    },
  ),
];
