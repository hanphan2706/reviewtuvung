import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 5 — Past simple (I did).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const U05_PAST_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u05-past-simple",
  title: "Past Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 5",
  sourceNote: "Past simple (I did). Động từ quy tắc/bất quy tắc, did/didn't, was/were.",
  intro:
    "Past simple (I did). Động từ quy tắc/bất quy tắc, did/didn't, was/were.",
  structure: {
    affirmative: "S + V-ed (quy tắc) / V2 (bất quy tắc)",
    negative: "S + didn't + V (nguyên thể)",
  },
  usagePoints: [
    {
      before: "Dùng cho hành động ",
      strong: "đã xảy ra và kết thúc",
      after: " trong quá khứ, thường có mốc thời gian cụ thể (last night, yesterday, in 1791).",
    },
    {
      before: "Động từ quy tắc thêm ",
      strong: "-ed",
      after: " (worked, decided, stopped); rất nhiều động từ thông dụng là bất quy tắc, không theo mẫu -ed (write → wrote, see → saw, go → went, shut → shut).",
    },
    {
      before: "Câu hỏi và phủ định dùng ",
      strong: "did/didn't",
      after: " + động từ nguyên thể, không chia lại động từ chính (Did you enjoy it? / I didn't buy anything).",
    },
    {
      before: "Khi ",
      strong: "do",
      after: " là động từ chính (nghĩa 'làm gì'), vẫn cần did/didn't đi kèm: What did you do? (không nói What did you at …?).",
    },
    {
      before: "Động từ ",
      strong: "be",
      after: " có dạng riêng was/were (không dùng did): I was, he/she/it was, we/you/they were — phủ định wasn't/weren't, câu hỏi Was/Were … ?",
    },
  ],
  examples: [
    {
      english: "He started composing at the age of five and wrote more than 600 pieces of music.",
      vietnamese: "Ông bắt đầu sáng tác từ năm 5 tuổi và viết hơn 600 tác phẩm âm nhạc.",
    },
    {
      english: "They invited us to their party, but we decided not to go.",
      vietnamese: "Họ mời chúng tôi đến tiệc, nhưng chúng tôi quyết định không đi.",
    },
    {
      english: "I enjoyed the party a lot. Did you enjoy it?",
      vietnamese: "Tôi đã rất thích buổi tiệc. Bạn có thích không?",
    },
    {
      english: "I didn't buy anything because I didn't have any money.",
      vietnamese: "Tôi không mua gì cả vì tôi không có tiền.",
    },
    {
      english: "What did you do at the weekend?",
      vietnamese: "Cuối tuần bạn đã làm gì?",
    },
    {
      english: "I was annoyed because they were late.",
      vietnamese: "Tôi bực vì họ đến muộn.",
    },
    {
      english: "They weren't able to come because they were so busy.",
      vietnamese: "Họ không thể đến được vì quá bận.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 810,
  },
};
