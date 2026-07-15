import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 27 — could (do) and could have (done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 26 (can/could/able to) và Unit 29 (could ~ may/might).
 */
export const U27_COULD_DO_AND_COULD_HAVE_DONE_TOPIC: GrammarTopicDetail = {
  slug: "u27-could-do-and-could-have-done",
  title: "Could (Do) and Could Have (Done)",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 27",
  sourceNote:
    "could (do) and could have (done): gợi ý, khả năng kém chắc, giả định không thực tế, could have (đã có thể nhưng không). Nên học kèm Unit 26 và Unit 29.",
  intro:
    "Unit này giúp bạn nắm Could (Do) and Could Have (Done): Could (do) and could have (done): gợi ý, khả năng kém chắc, giả định không thực tế, could have (đã có thể nhưng không). Nên học kèm Unit 26 trước, rồi Unit 29 để so sánh could với may/might.",
  structure: {
    affirmative: "S + could + V (gợi ý / khả năng / giả định) | S + could have + V3 (quá khứ: đã có thể nhưng không)",
    negative: "S + couldn't + V | S + couldn't have + V3",
  },
  usagePoints: [
    {
      before: "could dùng để ",
      strong: "gợi ý",
      after: " hành động có thể làm hiện tại/tương lai: What shall we do tonight? We could go to the cinema. (can cũng được, nhưng could kém chắc hơn)",
    },
    {
      before: "Với hành động ",
      strong: "không thực tế",
      after: " chỉ dùng could (không can): I'm so tired, I could sleep for a week.",
    },
    {
      before: "could (không can) khi nói điều gì ",
      strong: "có thể đúng/xảy ra lúc này",
      after: ": The story could be true. So sánh: The weather can change quickly (chung) vs It could change later (lúc này).",
    },
    {
      before: "could have + V3 = ",
      strong: "đã có thể xảy ra nhưng không",
      after: ": Why did you stay at a hotel? You could have stayed with me.",
    },
    {
      before: "couldn't do = ",
      strong: "sẽ không thể / không muốn tưởng tượng làm",
      after: " (hiện tại): I couldn't live in a big city. Quá khứ giả định: It couldn't have been better.",
    },
    {
      before: "Lưu ý ",
      strong: "couldn't có hai nghĩa",
      after: ": (1) hiện không thể — I couldn't run ten kilometres now; (2) quá khứ thật — I couldn't run yesterday because I'd hurt my leg.",
    },
  ],
  examples: [
    {
      english: "We could go to the cinema.",
      vietnamese: "Chúng ta có thể đi xem phim. (gợi ý)",
    },
    {
      english: "I'm so tired, I could sleep for a week.",
      vietnamese: "Tôi mệt đến mức có thể ngủ cả tuần. (không thực tế)",
    },
    {
      english: "The story could be true.",
      vietnamese: "Câu chuyện có thể là thật.",
    },
    {
      english: "You could have stayed with me.",
      vietnamese: "Bạn đáng lẽ đã có thể ở với tôi. (nhưng đã không)",
    },
    {
      english: "I couldn't live in a big city.",
      vietnamese: "Tôi không thể sống ở thành phố lớn.",
    },
    {
      english: "It couldn't have been better.",
      vietnamese: "Không thể tốt hơn được nữa.",
    },
    {
      english: "Be careful climbing that tree. You could fall.",
      vietnamese: "Cẩn thận khi leo cây đó. Bạn có thể ngã.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
