import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 10 — Present perfect continuous and simple (I have been doing and I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const PRESENT_PERFECT_CONTINUOUS_AND_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u10-present-perfect-continuous-and-simple",
  title: "Present Perfect Continuous and Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 10",
  sourceNote:
    "Present perfect continuous and simple (I have been doing and I have done). Học kèm continuous vs simple (Units 9 & 7–8) để phân biệt hoạt động vs kết quả.",
  intro:
    "Present perfect continuous and simple (I have been doing and I have done). Học kèm continuous vs simple (Units 9 & 7–8) để phân biệt hoạt động vs kết quả. Nên học kèm Unit 9 (continuous) và Units 7–8 (simple) để thấy rõ sự khác biệt giữa hai dạng.",
  structure: {
    affirmative: "S + have/has been + V-ing (continuous) | S + have/has + V3 (simple)",
    negative: "S + haven't/hasn't been + V-ing | S + haven't/hasn't + V3",
  },
  usagePoints: [
    {
      before: "Continuous nhấn vào ",
      strong: "hoạt động",
      after: ", không quan tâm đã xong hay chưa (She has been painting her bedroom — có thể chưa xong).",
    },
    {
      before: "Simple nhấn vào ",
      strong: "kết quả / hành động đã hoàn tất",
      after: " (She has painted her bedroom — phòng đã sơn xong).",
    },
    {
      before: "Dùng continuous để hỏi/trả lời ",
      strong: "how long",
      after: " khi việc vẫn tiếp diễn: How long have you been reading that book?",
    },
    {
      before: "Dùng simple để hỏi/trả lời ",
      strong: "how much, how many, how many times",
      after: " cho hành động đã hoàn tất: How many pages have you read?",
    },
    {
      before: "Một số động từ (",
      strong: "know, have theo nghĩa sở hữu...",
      after: ") không dùng dạng continuous — xem Unit 4A, Unit 17.",
    },
    {
      before: "Ngoại lệ: ",
      strong: "want, mean",
      after: " có thể dùng continuous (I've been meaning to phone Anna, but I keep forgetting).",
    },
  ],
  examples: [
    {
      english: "She has been painting her bedroom.",
      vietnamese: "Cô ấy đang/đã sơn phòng ngủ. (có thể chưa xong)",
    },
    {
      english: "She has painted her bedroom.",
      vietnamese: "Cô ấy đã sơn xong phòng ngủ. (hoàn tất, phòng đã đổi màu)",
    },
    {
      english: "My hands are very dirty. I've been repairing my bike.",
      vietnamese: "Tay tôi rất bẩn. Tôi đang sửa xe đạp.",
    },
    {
      english: "My bike is OK again now. I've repaired it.",
      vietnamese: "Xe đạp tôi lại ổn rồi. Tôi đã sửa xong nó.",
    },
    {
      english: "How long have you been reading that book?",
      vietnamese: "Bạn đọc cuốn sách đó được bao lâu rồi?",
    },
    {
      english: "How many pages of that book have you read?",
      vietnamese: "Bạn đã đọc được bao nhiêu trang của cuốn sách đó?",
    },
    {
      english: "I've known about the problem for a long time. (not I've been knowing)",
      vietnamese: "Tôi đã biết về vấn đề này từ lâu.",
    },
  ],
  practice: {
    questionCount: 16,
    studentCount: 940,
  },
};
