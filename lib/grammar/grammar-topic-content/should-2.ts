import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 34 — Should 2.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 33 (should 1 — lời khuyên / should have).
 */
export const U34_SHOULD_2_TOPIC: GrammarTopicDetail = {
  slug: "u34-should-2",
  title: "Should 2",
  levelLabel: "Intermediate",
  kindLabel: "Modal",
  sourceBook: "English Grammar in Use · Intermediate · Unit 34",
  sourceNote:
    "should 2: that … should sau insist/suggest…; tính từ cảm xúc; if … should / Should …; I should… (= lời khuyên). Nên học kèm Unit 33.",
  intro:
    "Bài này giúp bạn dùng should sau động từ như insist/suggest, sau tính từ cảm xúc, trong mẫu if … should / Should … cho khả năng nhỏ, và I should… như lời khuyên cho người nghe. Nên học kèm Unit 33.",
  structure: {
    affirmative:
      "insist/suggest that + S + should + V | If S should + V… / Should + S + V… | I should + V",
    negative:
      "KHÔNG nói suggest somebody to do → suggest (that) S (should) do | ought not to (xem Unit 33)",
  },
  usagePoints: [
    {
      before: "Sau ",
      strong: "insist / demand / recommend / suggest / propose",
      after: ": I insisted that he should apologise. The doctor recommended that I should eat more fruit.",
    },
    {
      before: "Có thể ",
      strong: "bỏ should → subjunctive",
      after: " hoặc dùng thì bình thường: It's essential that everyone be / is here on time.",
    },
    {
      before: "Đúng: ",
      strong: "suggest (that) we (should) do",
      after: ": What do you suggest we (should) do?",
    },
    {
      before: "Sai: ",
      strong: "suggest somebody to do",
      after: " — không dùng cấu trúc này.",
    },
    {
      before: "Sau tính từ như ",
      strong: "strange / odd / funny / typical / surprising",
      after: ": It's strange that he should be late.",
    },
    {
      before: "If … should / Should … = ",
      strong: "khả năng nhỏ hơn",
      after: " if thông thường: If the situation should change… / Should the situation change…",
    },
    {
      before: "I should… = ",
      strong: "lời khuyên cho người nghe",
      after: " (= if I were you): 'Shall I leave now?' 'No, I should wait a bit.'",
    },
  ],
  examples: [
    {
      english: "The doctor recommended that I should eat more fruit.",
      vietnamese: "That I should eat = khuyến nghị chính thức sau recommend.",
    },
    {
      english: "It's essential that everyone should be here on time.",
      vietnamese: "That everyone should be = điều thiết yếu — có thể bỏ should.",
    },
    {
      english: "It's strange that he should be late. He's usually on time.",
      vietnamese: "That he should be late = lạ vì thường đúng giờ — cảm xúc/bất ngờ.",
    },
    {
      english: "If the situation should change, we'll contact you.",
      vietnamese: "If … should change = nếu (dù hiếm) tình hình đổi — formal hơn if thường.",
    },
    {
      english: "Should the situation change, we'll let you know.",
      vietnamese: "Should … change = cùng nghĩa If it should change — đảo should lên đầu.",
    },
    {
      english: "'Shall I leave now?' 'No, I should wait a bit.'",
      vietnamese: "I should wait = tôi khuyên bạn đợi — không phải ý định của tôi.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
