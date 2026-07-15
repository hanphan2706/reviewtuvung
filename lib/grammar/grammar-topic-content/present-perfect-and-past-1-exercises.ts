import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 13 exercises — Present perfect and past 1 (English Grammar in Use · Intermediate).
 * Nên luyện kèm bộ bài tập Unit 14 để nắm trọn quy tắc chọn thời.
 */
export const PRESENT_PERFECT_AND_PAST_1_EXERCISES: readonly GrammarExercise[] = [
  // 13.1 — Situational sentences: present perfect vs past simple
  grammarCloze(
    "pppast1-13-1-2",
    "13.1 · Present perfect hay past simple?",
    "I can't get in. I __________ my key. (lose)",
    "'ve lost",
    {
      alternatives: ["'ve lost", "have lost", "I've lost", "I have lost"],
      explanation: "Kết quả còn ở hiện tại (không vào được nhà) → present perfect: I've lost my key.",
    },
  ),
  grammarCloze(
    "pppast1-13-1-3",
    "13.1 · Present perfect hay past simple?",
    "I meant to call you last night, but I __________. (forget)",
    "forgot",
    {
      explanation: "last night là mốc thời gian đã kết thúc → past simple: I forgot.",
    },
  ),
  grammarCloze(
    "pppast1-13-1-4",
    "13.1 · Present perfect hay past simple?",
    "Helen __________ to New York for a holiday last month, but she's back home in London now. (go)",
    "went",
    {
      explanation: "last month + đã quay về → past simple: Helen went to New York.",
    },
  ),
  grammarCloze(
    "pppast1-13-1-5",
    "13.1 · Present perfect hay past simple?",
    "Are you OK? — Yes, I __________ a headache this morning, but it's fine now. (have)",
    "had",
    {
      explanation: "this morning đã qua và hiện tại đã ổn → past simple: I had a headache.",
    },
  ),
  grammarCloze(
    "pppast1-13-1-6",
    "13.1 · Present perfect hay past simple?",
    "The office is empty now. Everybody __________ home. (go)",
    "'s gone",
    {
      alternatives: ["'s gone", "has gone", "Everybody's gone", "Everybody has gone"],
      explanation: "Kết quả rõ ở hiện tại (văn phòng trống) → present perfect: Everybody's gone home.",
    },
  ),
  grammarCloze(
    "pppast1-13-1-7",
    "13.1 · Present perfect hay past simple?",
    "Can you help us? Our car __________ down. (break)",
    "'s broken",
    {
      alternatives: ["'s broken", "has broken", "Our car's broken", "Our car has broken"],
      explanation: "Xe hỏng và vẫn hỏng lúc nói (cần giúp) → present perfect: Our car's broken down.",
    },
  ),

  // 13.2 — Correct the underlined parts where necessary
  grammarCloze(
    "pppast1-13-2-3",
    "13.2 · Sửa câu cho đúng",
    "How many plays has William Shakespeare written? — Câu đúng là: How many plays __________?",
    "did William Shakespeare write",
    {
      explanation: "Shakespeare đã mất từ lâu, không phải tin mới/gần đây → past simple: did William Shakespeare write?",
    },
  ),
  grammarCloze(
    "pppast1-13-2-5",
    "13.2 · Sửa câu cho đúng",
    "Who has invented paper? — Câu đúng là: __________ paper?",
    "Who invented",
    {
      explanation: "Việc phát minh ra giấy đã quá xa trong lịch sử, không còn mới → past simple: Who invented paper?",
    },
  ),
  grammarCloze(
    "pppast1-13-2-7",
    "13.2 · Sửa câu cho đúng",
    "We've washed the car, but now it's dirty again. — Câu đúng là: __________ the car, but now it's dirty again.",
    "We washed",
    {
      explanation: "Vì xe lại bẩn ngay, không còn kết quả 'xe sạch' ở hiện tại nên dùng past simple: We washed the car.",
    },
  ),
  grammarCloze(
    "pppast1-13-2-8",
    "13.2 · Sửa câu cho đúng",
    "Where have you been born? — Câu đúng là: Where __________?",
    "were you born",
    {
      explanation: "be born là một sự kiện cụ thể trong quá khứ, không dùng present perfect → Where were you born?",
    },
  ),
  grammarCloze(
    "pppast1-13-2-10",
    "13.2 · Sửa câu cho đúng",
    "Albert Einstein has been the scientist who has developed the theory of relativity. — Câu đúng là: Albert Einstein __________ the scientist who developed the theory of relativity.",
    "was",
    {
      explanation: "Nói về sự thật lịch sử đã qua, không còn mới → past simple: Albert Einstein was the scientist who developed...",
    },
  ),

  // 13.3 — Put the verb into the correct form
  grammarCloze(
    "pppast1-13-3-3",
    "13.3 · Chọn dạng đúng của động từ",
    "I studied German at school, but __________ most of it now. (forget)",
    "I've forgotten",
    {
      alternatives: ["I have forgotten"],
      explanation: "Kết quả hiện tại (quên gần hết) → present perfect: I've forgotten most of it now.",
    },
  ),
  grammarCloze(
    "pppast1-13-3-4",
    "13.3 · Chọn dạng đúng của động từ",
    "The police __________ three people, but later they let them go. (arrest)",
    "arrested",
    {
      explanation: "Chuỗi hành động cụ thể trong quá khứ, có tiếp diễn 'later they let them go' → past simple: arrested.",
    },
  ),
  grammarCloze(
    "pppast1-13-3-6",
    "13.3 · Chọn dạng đúng của động từ",
    "Are you ready to go? __________ your coffee? (you / finish)",
    "Have you finished",
    {
      explanation: "Hỏi về kết quả tính đến hiện tại (đã uống xong chưa) → present perfect: Have you finished your coffee?",
    },
  ),
  grammarCloze(
    "pppast1-13-3-7",
    "13.3 · Chọn dạng đúng của động từ",
    "__________ for a job as a tour guide, but I wasn't successful. (I / apply)",
    "I applied",
    {
      explanation: "'but I wasn't successful' cho thấy đây là việc cụ thể đã kết thúc trong quá khứ → past simple: I applied.",
    },
  ),
  grammarCloze(
    "pppast1-13-3-9",
    "13.3 · Chọn dạng đúng của động từ",
    "Quick! We need to call an ambulance. __________ an accident. (there / be)",
    "There's been",
    {
      alternatives: ["There has been"],
      explanation: "Tin mới, kết quả còn liên quan hiện tại (cần gọi cấp cứu) → present perfect: There's been an accident.",
    },
  ),
  grammarCloze(
    "pppast1-13-3-10",
    "13.3 · Chọn dạng đúng của động từ",
    "'I've found my phone.' 'Oh, good. Where __________ it?' (you / find)",
    "did you find",
    {
      explanation: "Present perfect đưa tin mới xong, hỏi tiếp chi tiết thì dùng past simple → Where did you find it?",
    },
  ),
];
