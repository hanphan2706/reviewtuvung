import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 14 exercises — Present perfect and past 2 (English Grammar in Use · Intermediate).
 * Nên luyện kèm bộ bài tập Unit 13 để hoàn thiện quy tắc chọn thời.
 */
export const PRESENT_PERFECT_AND_PAST_2_EXERCISES: readonly GrammarExercise[] = [
  // 14.1 — Correct the underlined parts where necessary
  grammarCloze(
    "pppast2-14-1-2",
    "14.1 · Sửa câu cho đúng",
    "Have you eaten a lot of sweets when you were a child? — Câu đúng là: __________ a lot of sweets when you were a child?",
    "Did you eat",
    {
      explanation: "'when you were a child' là mốc thời gian đã kết thúc → past simple: Did you eat...?",
    },
  ),
  grammarCloze(
    "pppast2-14-1-4",
    "14.1 · Sửa câu cho đúng",
    "I've bought a new car last week. — Câu đúng là: I __________ a new car last week.",
    "bought",
    {
      explanation: "'last week' là mốc thời gian đã kết thúc, không đi cùng present perfect → I bought a new car last week.",
    },
  ),
  grammarCloze(
    "pppast2-14-1-5",
    "14.1 · Sửa câu cho đúng",
    "Where have you been yesterday evening? — Câu đúng là: Where __________ yesterday evening?",
    "were you",
    {
      explanation: "yesterday evening là mốc quá khứ cụ thể → past simple: Where were you yesterday evening?",
    },
  ),
  grammarCloze(
    "pppast2-14-1-6",
    "14.1 · Sửa câu cho đúng",
    "Maria has left school in 1999. — Câu đúng là: Maria __________ school in 1999.",
    "left",
    {
      explanation: "'in 1999' là mốc thời gian đã kết thúc → past simple: Maria left school in 1999.",
    },
  ),
  grammarCloze(
    "pppast2-14-1-10",
    "14.1 · Sửa câu cho đúng",
    "When has this bridge been built? — Câu đúng là: When __________ this bridge built?",
    "was",
    {
      explanation: "Hỏi When...? luôn dùng past simple, không dùng present perfect → When was this bridge built?",
    },
  ),

  // 14.2 — Make sentences from the words in brackets
  grammarCloze(
    "pppast2-14-2-2",
    "14.2 · Present perfect hay past simple?",
    "(the weather / be / cold / recently) The weather __________.",
    "has been cold recently",
    {
      alternatives: ["'s been cold recently", "has been cold recently."],
      explanation: "recently → khoảng thời gian chưa kết thúc → present perfect: The weather has been cold recently.",
    },
  ),
  grammarCloze(
    "pppast2-14-2-3",
    "14.2 · Present perfect hay past simple?",
    "(it / cold / last week) It __________.",
    "was cold last week",
    {
      explanation: "last week → mốc thời gian đã kết thúc → past simple: It was cold last week.",
    },
  ),
  grammarCloze(
    "pppast2-14-2-4",
    "14.2 · Present perfect hay past simple?",
    "(I / not / eat / any fruit yesterday) I __________.",
    "didn't eat any fruit yesterday",
    {
      explanation: "yesterday → mốc thời gian đã kết thúc → past simple: I didn't eat any fruit yesterday.",
    },
  ),
  grammarCloze(
    "pppast2-14-2-5",
    "14.2 · Present perfect hay past simple?",
    "(I / not / eat / any fruit today) __________",
    "I haven't eaten any fruit today",
    {
      explanation: "today → khoảng thời gian chưa kết thúc → present perfect: I haven't eaten any fruit today.",
    },
  ),
  grammarCloze(
    "pppast2-14-2-6",
    "14.2 · Present perfect hay past simple?",
    "(Emily / earn / a lot of money / this year) __________",
    "Emily has earned a lot of money this year",
    {
      alternatives: ["Emily's earned a lot of money this year"],
      explanation: "this year → khoảng thời gian chưa kết thúc → present perfect: Emily has earned a lot of money this year.",
    },
  ),
  grammarCloze(
    "pppast2-14-2-7",
    "14.2 · Present perfect hay past simple?",
    "(she / not / earn / so much / last year) __________",
    "She didn't earn so much last year",
    {
      explanation: "last year → mốc thời gian đã kết thúc → past simple: She didn't earn so much last year.",
    },
  ),

  // 14.3 — Put the verb into the correct form
  grammarCloze(
    "pppast2-14-3-2",
    "14.3 · Chọn dạng đúng của động từ",
    "Paul and Lucy __________ about ten minutes ago. (arrive)",
    "arrived",
    {
      explanation: "'ten minutes ago' là mốc thời gian đã kết thúc → past simple: arrived.",
    },
  ),
  grammarCloze(
    "pppast2-14-3-4",
    "14.3 · Chọn dạng đúng của động từ",
    "There __________ a bus drivers' strike last week, so there __________ no buses. (be)",
    "was ... were",
    {
      alternatives: ["was … were", "There was … there were"],
      explanation: "last week → mốc thời gian đã kết thúc → past simple: There was a strike ... there were no buses.",
    },
  ),
  grammarCloze(
    "pppast2-14-3-7",
    "14.3 · Chọn dạng đúng của động từ",
    "My grandfather __________ before I was born. I __________ him. (die / never meet)",
    "died ... never met",
    {
      alternatives: ["died … I never met", "died … never met"],
      explanation: "Sự kiện đã kết thúc từ lâu trong quá khứ → past simple: died ... I never met him.",
    },
  ),
  grammarCloze(
    "pppast2-14-3-10",
    "14.3 · Chọn dạng đúng của động từ",
    "a: __________ to the cinema last night? b: Yes, but the movie __________ awful. (go / be)",
    "Did you go ... was",
    {
      alternatives: ["Did you go … was", "did you go … it was"],
      explanation: "last night → mốc thời gian đã kết thúc → past simple: Did you go...? / the movie was awful.",
    },
  ),
  grammarCloze(
    "pppast2-14-3-11",
    "14.3 · Chọn dạng đúng của động từ",
    "a: __________ very warm here since we arrived. b: Yes, __________ 35 degrees yesterday. (be)",
    "It's been ... it was",
    {
      alternatives: ["It has been … it was", "It's been … it was"],
      explanation: "'since we arrived' (chưa kết thúc) → present perfect; 'yesterday' (đã kết thúc) → past simple.",
    },
  ),

  // 14.4 — Personal sentences (fixed example answers from the book)
  grammarCloze(
    "pppast2-14-4-3",
    "14.4 · Viết câu về bản thân",
    "Viết một việc bạn KHÔNG làm hôm qua: I __________ TV yesterday. (not / watch)",
    "didn't watch",
    {
      explanation: "yesterday → mốc thời gian đã kết thúc → past simple: I didn't watch TV yesterday.",
    },
  ),
  grammarCloze(
    "pppast2-14-4-5",
    "14.4 · Viết câu về bản thân",
    "Viết một việc bạn CHƯA làm gần đây: I __________ to the cinema recently. (not / be)",
    "haven't been",
    {
      explanation: "recently → khoảng thời gian chưa kết thúc → present perfect: I haven't been to the cinema recently.",
    },
  ),
];
