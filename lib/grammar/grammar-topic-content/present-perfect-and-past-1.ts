import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 13 — Present perfect and past 1 (I have done and I did).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 14 để nắm trọn bộ quy tắc chọn thời.
 */
export const PRESENT_PERFECT_AND_PAST_1_TOPIC: GrammarTopicDetail = {
  slug: "u13-present-perfect-and-past-1",
  title: "Present Perfect and Past 1",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 13",
  sourceNote:
    "Present perfect and past 1 (I have done and I did). Nên học kèm Unit 14 để nắm trọn bộ khi nào dùng present perfect và khi nào dùng past simple.",
  intro:
    "Trong unit này bạn sẽ nắm: Present perfect and past 1 (I have done and I did). Nên học kèm Unit 14 để có bức tranh đầy đủ về sự khác biệt giữa hai thời này.",
  structure: {
    affirmative: "S + have/has + V3 (còn liên quan hiện tại) | S + V-ed/V2 (chỉ nói về quá khứ)",
    negative: "S + haven't/hasn't + V3 | S + didn't + V",
  },
  usagePoints: [
    {
      before: "Present perfect cho biết ",
      strong: "tình huống ở hiện tại",
      after: ": Tom has lost his key = anh ấy không có chìa khóa bây giờ.",
    },
    {
      before: "Past simple chỉ cho biết điều gì xảy ra trong quá khứ, ",
      strong: "không biết tình trạng hiện tại",
      after: ": Tom lost his key (không rõ giờ anh ấy có tìm lại được không).",
    },
    {
      before: "Có thể dùng present perfect cho ",
      strong: "tin tức mới/gần đây",
      after: ", và thường cũng có thể dùng past simple tương đương: I've repaired the washing machine. / I repaired the washing machine.",
    },
    {
      before: "Dùng past simple (không dùng present perfect) cho việc ",
      strong: "không còn mới, không còn gần đây",
      after: ": Mozart wrote more than 600 pieces of music (not has written).",
    },
    {
      before: "Khi present perfect đưa ra tin mới, nếu nói tiếp chi tiết thì ",
      strong: "chuyển sang past simple",
      after: ": I've burnt myself. — How did you do that? (not have you done)",
    },
  ],
  examples: [
    {
      english: "Tom has lost his key. He can't find it.",
      vietnamese: "Tom đã làm mất chìa khóa. Anh ấy không tìm được.",
    },
    {
      english: "He lost his key, but now he has found it.",
      vietnamese: "Anh ấy đã làm mất chìa khóa, nhưng giờ đã tìm lại được.",
    },
    {
      english: "I've repaired the washing machine. It's working OK now.",
      vietnamese: "Tôi đã sửa máy giặt. Giờ nó chạy tốt rồi.",
    },
    {
      english: "Mozart was a composer. He wrote more than 600 pieces of music.",
      vietnamese: "Mozart là một nhà soạn nhạc. Ông đã viết hơn 600 tác phẩm âm nhạc.",
    },
    {
      english: "Somebody has invented a new type of washing machine.",
      vietnamese: "Ai đó đã phát minh ra một loại máy giặt mới.",
    },
    {
      english: "Who invented the telephone?",
      vietnamese: "Ai đã phát minh ra điện thoại?",
    },
    {
      english: "I've burnt myself. — How did you do that? — I picked up a hot dish.",
      vietnamese: "Tôi bị bỏng. — Sao bị vậy? — Tôi cầm một cái đĩa nóng.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 970,
  },
};
