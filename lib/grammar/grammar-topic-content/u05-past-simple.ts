import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 5 — Past simple (I did).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 6 (past continuous).
 */
export const U05_PAST_SIMPLE_TOPIC: GrammarTopicDetail = {
  slug: "u05-past-simple",
  title: "Past Simple",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 5",
  sourceNote:
    "Past simple (I did): động từ quy tắc/bất quy tắc, did/didn't, was/were. Nên học kèm Unit 6 (past continuous).",
  intro:
    "Bài này giúp bạn dùng past simple (I did) để nói về hành động đã xảy ra và kết thúc trong quá khứ, cách chia động từ quy tắc và bất quy tắc, did/didn't khi hỏi và phủ định, và was/were riêng cho động từ be. Nên học kèm Unit 6 (past continuous) để biết cách kết hợp hai thời này khi kể chuyện.",
  structure: {
    affirmative: "S + V-ed (quy tắc) / V2 (bất quy tắc)",
    negative:
      "KHÔNG chia lại động từ chính sau didn't (KHÔNG nói I didn't bought) → đúng là S + didn't + V nguyên thể (I didn't buy anything).",
  },
  usagePoints: [
    {
      before: "Dùng cho hành động ",
      strong: "đã xảy ra và kết thúc",
      after: " trong quá khứ, thường có mốc thời gian cụ thể: last night, yesterday, in 1791.",
    },
    {
      before: "Động từ quy tắc thêm ",
      strong: "-ed",
      after: ": worked, decided, stopped.",
    },
    {
      before: "Rất nhiều động từ thông dụng là ",
      strong: "bất quy tắc",
      after: ", không theo mẫu -ed: write → wrote, see → saw, go → went, shut → shut.",
    },
    {
      before: "Câu hỏi và phủ định dùng ",
      strong: "did/didn't",
      after: " + động từ nguyên thể, không chia lại động từ chính: Did you enjoy it? I didn't buy anything.",
    },
    {
      before: "Khi ",
      strong: "do",
      after: " là động từ chính (nghĩa 'làm gì'), vẫn cần did/didn't đi kèm: What did you do? (không nói What did you at …?).",
    },
    {
      before: "Động từ ",
      strong: "be",
      after: " có dạng riêng was/were, không dùng did: I was, he/she/it was, we/you/they were — phủ định wasn't/weren't, câu hỏi Was/Were … ?",
    },
  ],
  examples: [
    {
      english: "He started composing at the age of five and wrote more than 600 pieces of music.",
      vietnamese: "started = quy tắc (+ed); wrote = bất quy tắc (write → wrote) — cả hai đều là past simple.",
    },
    {
      english: "They invited us to their party, but we decided not to go.",
      vietnamese: "invited, decided = động từ quy tắc thêm -ed, hành động đã kết thúc.",
    },
    {
      english: "I enjoyed the party a lot. Did you enjoy it?",
      vietnamese: "Did you enjoy = did đứng trước chủ ngữ khi hỏi, enjoy giữ nguyên thể.",
    },
    {
      english: "I didn't buy anything because I didn't have any money.",
      vietnamese: "didn't buy, didn't have = phủ định bằng didn't, động từ chính không chia lại.",
    },
    {
      english: "What did you do at the weekend?",
      vietnamese: "did … do = do là động từ chính (nghĩa 'làm'), vẫn cần did đi kèm khi hỏi.",
    },
    {
      english: "I was annoyed because they were late.",
      vietnamese: "was/were = dạng riêng của be ở quá khứ, không dùng did.",
    },
    {
      english: "They weren't able to come because they were so busy.",
      vietnamese: "weren't = phủ định trực tiếp của were, không cần didn't.",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 810,
  },
};
