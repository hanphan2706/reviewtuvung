import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 2 exercises — Present simple (English Grammar in Use · Intermediate).
 */
export const U02_PRESENT_SIMPLE_EXERCISES: readonly GrammarExercise[] = [
  // 2.1 — Complete with the correct verb + -s/-es
  grammarCloze(
    "u02-2-1-1",
    "2.1 · Chọn động từ đúng",
    "Ben and Jack __________ (go) to the same school.",
    "go",
    {
      explanation: "Chủ ngữ số nhiều (Ben and Jack) → động từ giữ nguyên, không thêm -s: go.",
    },
  ),
  grammarCloze(
    "u02-2-1-2",
    "2.1 · Chọn động từ đúng",
    "Bad driving __________ (cause) many accidents.",
    "causes",
    {
      explanation: "Chủ ngữ số ít (bad driving = it) → thêm -s: causes.",
    },
  ),
  grammarCloze(
    "u02-2-1-3",
    "2.1 · Chọn động từ đúng",
    "The museum __________ (close) at 4 o'clock on Sundays.",
    "closes",
    {
      explanation: "close tận cùng bằng -se → thêm -s: closes.",
    },
  ),
  // 2.2 — Put the verb into the correct form (do/does, don't/doesn't)
  grammarCloze(
    "u02-2-2-1",
    "2.2 · Dạng đúng của động từ",
    "What time __________ (the banks / close) here?",
    "do the banks close",
    {
      alternatives: ["Do the banks close", "do the banks close?"],
      explanation: "Câu hỏi với chủ ngữ số nhiều (the banks) → do + S + V nguyên thể.",
    },
  ),
  grammarCloze(
    "u02-2-2-2",
    "2.2 · Dạng đúng của động từ",
    "I have a car, but I __________ (not / use) it much.",
    "don't use",
    {
      alternatives: ["do not use"],
      explanation: "Phủ định với chủ ngữ I → don't + V nguyên thể.",
    },
  ),
  grammarCloze(
    "u02-2-2-3",
    "2.2 · Dạng đúng của động từ",
    "Where __________ (Maria / come) from? Is she Spanish?",
    "does Maria come",
    {
      alternatives: ["does Maria come?"],
      explanation: "Chủ ngữ số ít (Maria) → does + S + V nguyên thể.",
    },
  ),
  grammarCloze(
    "u02-2-2-4",
    "2.2 · Dạng đúng của động từ",
    "David isn't very fit. He __________ (not / do) any sport.",
    "doesn't do",
    {
      alternatives: ["does not do"],
      explanation: "Phủ định với he → doesn't + do (do vừa là trợ động từ vừa là động từ chính khi lặp lại nghĩa 'làm').",
    },
  ),
  grammarCloze(
    "u02-2-2-5",
    "2.2 · Dạng đúng của động từ",
    "It __________ (take) me an hour to get to work in the morning.",
    "takes",
    {
      explanation: "Chủ ngữ it → thêm -s: takes.",
    },
  ),

  // 2.3 — Complete using the given verbs, sometimes negative
  grammarCloze(
    "u02-2-3-1",
    "2.3 · Hoàn thành câu",
    "The sun __________ (rise) in the east.",
    "rises",
    {
      explanation: "Sự thật thiên văn luôn đúng, chủ ngữ số ít the sun → rises.",
    },
  ),
  grammarCloze(
    "u02-2-3-2",
    "2.3 · Hoàn thành câu",
    "Vegetarians __________ (not / eat) meat.",
    "don't eat",
    {
      alternatives: ["do not eat"],
      explanation: "Chủ ngữ số nhiều (vegetarians) → don't + V nguyên thể.",
    },
  ),
  grammarCloze(
    "u02-2-3-3",
    "2.3 · Hoàn thành câu",
    "An atheist __________ (not / believe) in God.",
    "doesn't believe",
    {
      alternatives: ["does not believe"],
      explanation: "Chủ ngữ số ít (an atheist) ở dạng phủ định → doesn't believe.",
    },
  ),
  grammarCloze(
    "u02-2-3-4",
    "2.3 · Hoàn thành câu",
    "An interpreter __________ (translate) from one language into another.",
    "translates",
    {
      explanation: "Định nghĩa nghề nghiệp, việc lặp đi lặp lại → thêm -s: translates.",
    },
  ),
  // 2.4 — Write questions about Lisa
  grammarCloze(
    "u02-2-4-1",
    "2.4 · Đặt câu hỏi",
    "Perhaps Lisa's sister plays tennis too. You want to know. Ask Lisa: __________ (your sister / play tennis)?",
    "Does your sister play tennis",
    {
      alternatives: ["Does your sister play tennis?"],
      explanation: "Câu hỏi Yes/No với chủ ngữ số ít (your sister) → Does + S + V nguyên thể?",
    },
  ),
  grammarCloze(
    "u02-2-4-2",
    "2.4 · Đặt câu hỏi",
    "You know Lisa's brother works. You want to know what he does. Ask Lisa: __________?",
    "What does your brother do",
    {
      alternatives: ["What does your brother do?"],
      explanation: "What + does + S + V nguyên thể? — hỏi nghề nghiệp/công việc chung.",
    },
  ),
  grammarCloze(
    "u02-2-4-3",
    "2.4 · Đặt câu hỏi",
    "You're not sure whether Lisa speaks Spanish. You want to know. Ask her: __________?",
    "Do you speak Spanish",
    {
      alternatives: ["Do you speak Spanish?"],
      explanation: "Câu hỏi Yes/No với you → Do you speak Spanish?",
    },
  ),
  grammarCloze(
    "u02-2-4-4",
    "2.4 · Đặt câu hỏi",
    "You don't know where Lisa's grandparents live. You want to know. Ask Lisa: __________?",
    "Where do your grandparents live",
    {
      alternatives: ["Where do your grandparents live?"],
      explanation: "Where + do + S + V nguyên thể? với chủ ngữ số nhiều (grandparents).",
    },
  ),

  // 2.5 — Performative verbs (I promise, I insist etc.)
  grammarCloze(
    "u02-2-5-1",
    "2.5 · Động từ tuyên bố",
    "I won't tell anybody what you said. __________.",
    "I promise",
    {
      explanation: "promise là động từ tuyên bố hành động ngay lúc nói → luôn ở dạng present simple: I promise.",
    },
  ),
  grammarCloze(
    "u02-2-5-2",
    "2.5 · Động từ tuyên bố",
    "(in a restaurant) You must let me pay for the meal. __________.",
    "I insist",
    {
      explanation: "insist (nhấn mạnh yêu cầu) là động từ tuyên bố → present simple: I insist.",
    },
  ),
  grammarCloze(
    "u02-2-5-3",
    "2.5 · Động từ tuyên bố",
    "__________ for what I said. I shouldn't have said it.",
    "I apologise",
    {
      explanation: "apologise (xin lỗi ngay khi nói) là động từ tuyên bố → present simple: I apologise.",
    },
  ),
];
