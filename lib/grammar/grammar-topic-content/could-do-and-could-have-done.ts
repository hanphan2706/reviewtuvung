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
    "could (do) / could have (done): gợi ý, khả năng kém chắc, giả định không thực tế, và điều đã có thể xảy ra nhưng không. Nên học kèm Unit 26 và Unit 29.",
  intro:
    "Bài này giúp bạn dùng could để gợi ý, nói khả năng kém chắc hoặc giả định không thực tế, và dùng could have để nói điều đã có thể xảy ra nhưng thực tế không. Nên học kèm Unit 26 trước, rồi Unit 29 để so sánh could với may/might.",
  structure: {
    affirmative: "S + could + V (gợi ý / khả năng / giả định) | S + could have + V3 (quá khứ: đã có thể nhưng không)",
    negative:
      "KHÔNG dùng can cho gợi ý, giả định không thực tế hay khả năng lúc này → could | couldn't / couldn't have",
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
      after: ": The story could be true.",
    },
    {
      before: "can dùng cho ",
      strong: "khả năng chung",
      after: ": The weather can change quickly.",
    },
    {
      before: "could dùng cho ",
      strong: "khả năng lúc này / sau này",
      after: ": It could change later.",
    },
    {
      before: "could have + V3 = ",
      strong: "đã có thể xảy ra nhưng không",
      after: ": Why did you stay at a hotel? You could have stayed with me.",
    },
    {
      before: "couldn't do = ",
      strong: "sẽ không thể / không muốn tưởng tượng làm",
      after: " (hiện tại): I couldn't live in a big city.",
    },
    {
      before: "couldn't have = ",
      strong: "chắc đã không / không thể đã",
      after: " (quá khứ giả định): It couldn't have been better.",
    },
    {
      before: "couldn't (hiện tại) = ",
      strong: "bây giờ không thể",
      after: ": I couldn't run ten kilometres now.",
    },
    {
      before: "couldn't (quá khứ thật) = ",
      strong: "hôm qua không thể vì lý do cụ thể",
      after: ": I couldn't run yesterday because I'd hurt my leg.",
    },
  ],
  examples: [
    {
      english: "We could go to the cinema.",
      vietnamese: "Could = gợi ý — kém chắc hơn can khi đề xuất.",
    },
    {
      english: "I'm so tired, I could sleep for a week.",
      vietnamese: "Could = giả định không thực tế — KHÔNG dùng can.",
    },
    {
      english: "The story could be true.",
      vietnamese: "Could = có thể đúng lúc này — không dùng can cho ý này.",
    },
    {
      english: "You could have stayed with me.",
      vietnamese: "Could have = đáng lẽ đã có thể ở với tôi — nhưng đã không.",
    },
    {
      english: "I couldn't live in a big city.",
      vietnamese: "Couldn't = không thể tưởng tượng sống ở đó — giả định hiện tại.",
    },
    {
      english: "It couldn't have been better.",
      vietnamese: "Couldn't have = chắc không thể tốt hơn nữa — quá khứ giả định.",
    },
    {
      english: "Be careful climbing that tree. You could fall.",
      vietnamese: "Could = có thể xảy ra — cảnh báo khả năng.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
