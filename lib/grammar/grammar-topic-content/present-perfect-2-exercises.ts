import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 8 exercises — Present perfect 2 (English Grammar in Use · Intermediate).
 * Đáp án chính theo sách; alternatives bao gồm dạng viết tắt, đầy đủ và các
 * cách diễn đạt tương đương vẫn giữ nghĩa "kinh nghiệm tính đến hiện tại".
 */
export const PRESENT_PERFECT_2_EXERCISES: readonly GrammarExercise[] = [
  // 8.1 — Write questions with ever
  grammarCloze(
    "pp2-8-1-2",
    "8.1 · Câu hỏi với ever",
    "You ask a friend about places they have visited. (be / California?) __________",
    "Have you ever been to California?",
    {
      explanation: "Hỏi về kinh nghiệm sống nói chung (đã từng hay chưa) → Have you ever been to California?",
    },
  ),
  grammarCloze(
    "pp2-8-1-3",
    "8.1 · Câu hỏi với ever",
    "(run / marathon?) __________",
    "Have you ever run a marathon?",
    {
      explanation: "ever + present perfect hỏi về kinh nghiệm chưa xác định thời điểm cụ thể → Have you ever run a marathon?",
    },
  ),
  grammarCloze(
    "pp2-8-1-4",
    "8.1 · Câu hỏi với ever",
    "(speak / famous person?) __________",
    "Have you ever spoken to a famous person?",
    {
      alternatives: ["Have you ever spoken to a famous person"],
      explanation: "Chú ý past participle của speak là spoken → Have you ever spoken to a famous person?",
    },
  ),
  grammarCloze(
    "pp2-8-1-5",
    "8.1 · Câu hỏi với ever",
    "(most beautiful place / visit?) What's __________",
    "the most beautiful place you've ever visited",
    {
      alternatives: [
        "the most beautiful place you have ever visited",
        "the most beautiful place you've ever visited?",
      ],
      explanation: "ever chèn giữa have/has và past participle trong mệnh đề quan hệ → the most beautiful place you've ever visited.",
    },
  ),

  // 8.2 — Complete B's answers
  grammarCloze(
    "pp2-8-2-2",
    "8.2 · Hoàn thành câu trả lời",
    "Is everything going well? — Yes, we __________ any problems so far.",
    "haven't had",
    {
      explanation: "so far (tính đến bây giờ) là dấu hiệu present perfect → we haven't had any problems so far.",
    },
  ),
  grammarCloze(
    "pp2-8-2-3",
    "8.2 · Hoàn thành câu trả lời",
    "Are you hungry? — Yes. I __________ much today.",
    "haven't eaten",
    {
      explanation: "today (hôm nay) vẫn chưa kết thúc lúc nói → I haven't eaten much today.",
    },
  ),
  grammarCloze(
    "pp2-8-2-4",
    "8.2 · Hoàn thành câu trả lời",
    "Can you play chess? — Yes, but I __________ for ages.",
    "haven't played",
    {
      alternatives: ["I haven't played it", "haven't played it"],
      explanation: "for ages (đã lâu rồi không làm) → I haven't played (it) for ages.",
    },
  ),
  grammarCloze(
    "pp2-8-2-6",
    "8.2 · Hoàn thành câu trả lời",
    "What's that book about? — I don't know. I __________ it.",
    "haven't read",
    {
      explanation: "Chưa từng đọc cuốn sách này tính đến hiện tại → I haven't read it.",
    },
  ),
  grammarCloze(
    "pp2-8-2-7",
    "8.2 · Hoàn thành câu trả lời",
    "Is Brussels an interesting place? — I've no idea. I __________ there.",
    "'ve never been",
    {
      alternatives: [
        "'ve never been",
        "haven't been",
        "I've never been",
        "I haven't been",
        "have never been",
      ],
      explanation: "Kinh nghiệm sống nói chung, chưa từng đến → I've never been / I haven't been there.",
    },
  ),
  grammarCloze(
    "pp2-8-2-9",
    "8.2 · Hoàn thành câu trả lời",
    "Do you like caviar? — I don't know. I __________ it.",
    "'ve never tried",
    {
      alternatives: [
        "'ve never tried",
        "haven't tried",
        "I've never tried",
        "I haven't tried",
        "I've never eaten",
        "I haven't eaten",
      ],
      explanation: "Chưa từng thử món này → I've never tried / I haven't tried it (cũng có thể dùng eaten).",
    },
  ),
  grammarCloze(
    "pp2-8-2-10",
    "8.2 · Hoàn thành câu trả lời",
    "Mike was late for work again today. — Again? He __________ late every day this week.",
    "'s been",
    {
      alternatives: ["'s been", "has been", "He's been", "He has been"],
      explanation: "this week (khoảng thời gian chưa kết thúc) → He's been late every day this week.",
    },
  ),
  grammarCloze(
    "pp2-8-2-11",
    "8.2 · Hoàn thành câu trả lời",
    "Who's that woman by the door? — I don't know. I __________ her before.",
    "'ve never seen",
    {
      alternatives: [
        "'ve never seen",
        "haven't seen",
        "I've never seen",
        "I haven't seen",
      ],
      explanation: "before (từ trước đến nay) + kinh nghiệm chưa từng → I've never seen / I haven't seen her before.",
    },
  ),

  // 8.4 — Read the situations and complete the sentences (It's the first/second time ...)
  grammarCloze(
    "pp2-8-4-2",
    "8.4 · It's the first time ...",
    "Some children at the zoo are looking at a giraffe. They've never seen one before. It's the first time __________.",
    "they've seen a giraffe",
    {
      alternatives: [
        "they have seen a giraffe",
        "they've seen a giraffe.",
      ],
      explanation: "Cấu trúc It's the first time + present perfect (không dùng present simple 'they see') → they've seen a giraffe.",
    },
  ),
  grammarCloze(
    "pp2-8-4-3",
    "8.4 · It's the first time ...",
    "Sue is riding a horse. She doesn't look very confident or comfortable. She __________ before.",
    "'s never ridden a horse",
    {
      alternatives: [
        "'s never ridden a horse",
        "has never ridden a horse",
        "She's never ridden a horse",
        "She has never ridden a horse",
      ],
      explanation: "Chưa từng cưỡi ngựa trước đó → She's never ridden a horse before.",
    },
  ),
  grammarCloze(
    "pp2-8-4-4",
    "8.4 · It's the first time ...",
    "Joe and Lisa are on holiday in Japan. They've been to Japan once before. This is the second time __________.",
    "they've been to Japan",
    {
      alternatives: [
        "they have been to Japan",
        "they've been to Japan.",
      ],
      explanation: "This is the second time + present perfect → they've been to Japan.",
    },
  ),
  grammarCloze(
    "pp2-8-4-5",
    "8.4 · It's the first time ...",
    "Emily is staying at the Prince Hotel. She stayed there a few years ago. It's not the first time __________ this hotel.",
    "she's stayed at",
    {
      alternatives: [
        "she has stayed at",
        "Emily has stayed at",
        "she's stayed at.",
      ],
      explanation: "It's not the first time + present perfect → she's / Emily has stayed at this hotel.",
    },
  ),
  grammarCloze(
    "pp2-8-4-6",
    "8.4 · It's the first time ...",
    "Ben is playing tennis for the first time. He's a complete beginner. He __________ before.",
    "'s never played tennis",
    {
      alternatives: [
        "'s never played tennis",
        "has never played tennis",
        "He's never played tennis",
        "He has never played tennis",
        "hasn't played tennis",
      ],
      explanation: "Chưa từng chơi tennis trước đó → He's never played tennis before (hoặc hasn't played tennis before).",
    },
  ),
];
