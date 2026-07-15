import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 34 exercises — Should 2 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover subjunctive / tense variants.
 */
export const U34_SHOULD_2_EXERCISES: readonly GrammarExercise[] = [
  // 34.1 — that-clause
  grammarCloze(
    "u34-1-2",
    "34.1 · that … should",
    "'You really must stay a little longer,' she said. → She insisted that I __________.",
    "should stay a little longer",
    {
      alternatives: ["stay a little longer", "stayed a little longer", "I should stay a little longer"],
      explanation: "insist that + should / subjunctive / past: should stay / stay / stayed.",
    },
  ),
  grammarCloze(
    "u34-1-3",
    "34.1 · that … should",
    "'Why don't you visit the museum after lunch?' I said. → I suggested that __________.",
    "they should visit the museum after lunch",
    {
      alternatives: [
        "they visit the museum after lunch",
        "they visited the museum after lunch",
      ],
      explanation: "suggest that + should / bare / past: they should visit / visit / visited…",
    },
  ),
  grammarCloze(
    "u34-1-4",
    "34.1 · that … should",
    "'You must pay the rent by Friday,' the landlord said. → The landlord demanded that __________.",
    "we should pay the rent by Friday",
    {
      alternatives: ["we pay the rent by Friday", "we paid the rent by Friday"],
      explanation: "demand that + should / bare / past: we should pay / pay / paid…",
    },
  ),
  grammarCloze(
    "u34-1-5",
    "34.1 · that … should",
    "'Let's go to the cinema,' Chris said. → Chris suggested that __________.",
    "we should go to the cinema",
    {
      alternatives: ["we go to the cinema", "we went to the cinema"],
      explanation: "suggest that + should / bare / past: we should go / go / went…",
    },
  ),

  // 34.2 — fix incorrect suggest + to
  grammarCloze(
    "u34-2-3",
    "34.2 · Sửa suggest",
    "Sửa câu: What do you suggest me to do? → __________",
    "What do you suggest I do",
    {
      alternatives: [
        "What do you suggest I should do",
        "What do you suggest I do?",
        "What do you suggest I should do?",
      ],
      explanation: "Không dùng suggest somebody to do → suggest I (should) do.",
    },
  ),
  grammarCloze(
    "u34-2-5",
    "34.2 · Sửa suggest",
    "Sửa câu: I suggest you to read this book. → __________",
    "I suggest you read this book",
    {
      alternatives: [
        "I suggest you should read this book",
        "I suggest that you read this book",
        "I suggest that you should read this book",
      ],
      explanation: "suggest + (that) you (should) read — không to-infinitive.",
    },
  ),

  // 34.3 — should + adjective clauses
  grammarCloze(
    "u34-3-2",
    "34.3 · should sau tính từ",
    "It's funny that you __________ that. I was thinking the same thing.",
    "should say",
    {
      explanation: "funny that … should + V → should say.",
    },
  ),
  grammarCloze(
    "u34-3-3",
    "34.3 · should sau tính từ",
    "It's only natural that parents __________ about their children.",
    "should worry",
    {
      explanation: "natural that … should worry.",
    },
  ),
  grammarCloze(
    "u34-3-4",
    "34.3 · should sau tính từ",
    "Isn't it typical of Joe that he __________ without saying goodbye to anybody?",
    "should leave",
    {
      explanation: "typical that … should leave.",
    },
  ),
  grammarCloze(
    "u34-3-5",
    "34.3 · should sau tính từ",
    "I was surprised that they __________ me for advice.",
    "should ask",
    {
      explanation: "surprised that … should ask.",
    },
  ),
  grammarCloze(
    "u34-3-6",
    "34.3 · should sau tính từ",
    "This is a democratic election, and it's important that you __________.",
    "should vote",
    {
      explanation: "important that … should vote.",
    },
  ),
  grammarCloze(
    "u34-3-7",
    "34.3 · should sau tính từ",
    "It's essential that the work __________ as soon as possible.",
    "should be done",
    {
      explanation: "essential that … should be done (passive).",
    },
  ),

  // 34.4 — If … should / Should …
  grammarCloze(
    "u34-4-2",
    "34.4 · If … should",
    "I've hung out the washing. If __________, can you bring it inside?",
    "it should rain",
    {
      explanation: "If + it should rain (= nếu có mưa).",
    },
  ),
  grammarCloze(
    "u34-4-3",
    "34.4 · If … should",
    "I think everything will be OK. __________, I'm sure we'll be able to solve them.",
    "If there should be any problems",
    {
      explanation: "If there should be any problems (= nếu có vấn đề).",
    },
  ),
  grammarCloze(
    "u34-4-4",
    "34.4 · If … should",
    "I don't want anyone to know where I'm going. __________, say you don't know.",
    "If anyone should ask",
    {
      explanation: "If anyone should ask (= nếu có ai hỏi).",
    },
  ),
  grammarCloze(
    "u34-4-6",
    "34.4 · Should …",
    "__________, can you bring the washing inside?",
    "Should it rain",
    {
      explanation: "Should it rain = If it should rain.",
    },
  ),
  grammarCloze(
    "u34-4-7",
    "34.4 · Should …",
    "__________, I'm sure we'll be able to solve them.",
    "Should there be any problems",
    {
      explanation: "Should there be any problems = If there should be…",
    },
  ),

  // 34.5 — I should (advice)
  grammarCloze(
    "u34-5-2",
    "34.5 · I should… (lời khuyên)",
    "'Shall I throw these things away?' 'No, __________ them. You may need them.'",
    "I should keep",
    {
      explanation: "I should keep = tôi khuyên bạn giữ lại.",
    },
  ),
  grammarCloze(
    "u34-5-3",
    "34.5 · I should… (lời khuyên)",
    "'Shall I go and see Paul?' 'Yes, but __________ him first.'",
    "I should call",
    {
      explanation: "I should call = nên gọi trước.",
    },
  ),
  grammarCloze(
    "u34-5-4",
    "34.5 · I should… (lời khuyên)",
    "'Is it worth getting this computer repaired?' 'No, __________ a new one.'",
    "I should get",
    {
      explanation: "I should get a new one = nên mua máy mới.",
    },
  ),
];
