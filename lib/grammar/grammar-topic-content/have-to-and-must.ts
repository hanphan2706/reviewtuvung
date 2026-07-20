import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 31 — have to and must.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Unit 28 (must suy đoán — khác nghĩa) và Unit 32 (mustn't / needn't).
 */
export const U31_HAVE_TO_AND_MUST_TOPIC: GrammarTopicDetail = {
  slug: "u31-have-to-and-must",
  title: "Have To and Must",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 31",
  sourceNote:
    "have to / must: nghĩa vụ và sự cần thiết; must vs have to (ý kiến vs sự thật); mustn't ≠ don't have to; have got to. Nên học kèm Unit 32 và phân biệt Unit 28.",
  intro:
    "Bài này giúp bạn nói nghĩa vụ bằng have to và must, phân biệt must (ý kiến cá nhân) với have to (quy định/sự thật), và không nhầm mustn't (cấm) với don't have to (không cần). Nên học kèm Unit 32 và đừng nhầm với must suy đoán ở Unit 28.",
  structure: {
    affirmative: "S + have/has/had to + V | S + must + V | S + have got to + V",
    negative:
      "KHÔNG nhầm mustn't (cấm, không được) với don't have to (không cần) | KHÔNG dùng must ở quá khứ → had to",
  },
  usagePoints: [
    {
      before: "have to = ",
      strong: "bắt buộc / cần thiết",
      after: ": You have to turn left. I have to wear glasses. Robert has to work late.",
    },
    {
      before: "Câu hỏi/phủ định (HT/QK đơn) dùng ",
      strong: "do / does / did",
      after: ": What do I have to do? Karen doesn't have to work Saturdays. Did you have to wait?",
    },
    {
      before: "Ý kiến cá nhân: ",
      strong: "must hoặc have to",
      after: " đều được: I must/have to phone her.",
    },
    {
      before: "Nghĩa vụ khách quan/sự thật → thường ",
      strong: "have to",
      after: ": I have to work from 8.30 to 5.30.",
    },
    {
      before: "Quá khứ chỉ dùng ",
      strong: "had to",
      after: " (không must): I had to leave early. She has had to wear glasses since she was young.",
    },
    {
      before: "mustn't = ",
      strong: "đừng / không được",
      after: " làm: You mustn't tell anyone. I mustn't be late.",
    },
    {
      before: "don't have to = ",
      strong: "không cần",
      after: " (vẫn có thể làm nếu muốn): You don't have to come with me. I don't have to be at the meeting, but I'm going anyway.",
    },
    {
      before: "have got to ≈ ",
      strong: "have to",
      after: ": I've got to work tomorrow. = I have to work tomorrow.",
    },
  ],
  examples: [
    {
      english: "You have to turn left.",
      vietnamese: "Have to = phải rẽ trái — nghĩa vụ khách quan.",
    },
    {
      english: "What do I have to do to get a new licence?",
      vietnamese: "Do I have to = câu hỏi với do/does — không nói must I have to.",
    },
    {
      english: "Karen doesn't have to work Saturdays.",
      vietnamese: "Doesn't have to = không bắt buộc làm thứ Bảy.",
    },
    {
      english: "I must phone her. / I have to phone her.",
      vietnamese: "Must / have to = phải gọi — ý kiến cá nhân, cả hai đều được.",
    },
    {
      english: "You mustn't tell anyone.",
      vietnamese: "Mustn't = cấm nói — khác don't have to (không cần nói).",
    },
    {
      english: "You don't have to come with me.",
      vietnamese: "Don't have to = không cần đi — vẫn có thể đi nếu muốn.",
    },
    {
      english: "I had to leave early yesterday.",
      vietnamese: "Had to = quá khứ — KHÔNG nói must leave yesterday.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 500,
  },
};
