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
    "Present perfect nói tình huống ở hiện tại; past simple chỉ kể việc đã xảy ra, không rõ tình trạng bây giờ. Nên học kèm Unit 14 để nắm trọn bộ quy tắc chọn giữa hai thời.",
  intro:
    "Bài này giúp bạn chọn đúng giữa present perfect (I have done) khi tình huống còn liên quan đến hiện tại và past simple (I did) khi chỉ kể lại việc đã xảy ra trong quá khứ, kể cả trường hợp present perfect đưa tin mới rồi chuyển ngay sang past simple để kể chi tiết. Nên học kèm Unit 14 để có bức tranh đầy đủ về sự khác biệt giữa hai thời này.",
  structure: {
    affirmative: "S + have/has + V3 (còn liên quan hiện tại) | S + V-ed/V2 (chỉ nói về quá khứ)",
    negative:
      "KHÔNG dùng present perfect cho việc đã xa, không còn mới (Mozart has written 600 pieces) — dùng past simple: Mozart wrote 600 pieces | S + haven't/hasn't + V3 | S + didn't + V",
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
      vietnamese: "has lost = hiện tại đang không có chìa khóa — present perfect nói tình huống bây giờ.",
    },
    {
      english: "He lost his key, but now he has found it.",
      vietnamese: "lost (past simple) kể việc đã qua; has found (present perfect) là tình huống hiện tại.",
    },
    {
      english: "I've repaired the washing machine. It's working OK now.",
      vietnamese: "tin mới, gần đây — có thể đổi thành I repaired the washing machine mà nghĩa tương tự.",
    },
    {
      english: "Mozart was a composer. He wrote more than 600 pieces of music.",
      vietnamese: "việc đã xa, không còn mới — chỉ dùng wrote, không dùng has written.",
    },
    {
      english: "Somebody has invented a new type of washing machine.",
      vietnamese: "tin tức mới nói chung, chưa cần biết ai/khi nào — present perfect phù hợp.",
    },
    {
      english: "Who invented the telephone?",
      vietnamese: "hỏi về sự kiện lịch sử cụ thể, đã xa — dùng past simple, không dùng has invented.",
    },
    {
      english: "I've burnt myself. — How did you do that? — I picked up a hot dish.",
      vietnamese: "câu đầu là tin mới (present perfect); hỏi/đáp chi tiết tiếp theo chuyển sang past simple.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 970,
  },
};
