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
    "Should 2: that … should sau insist/suggest…; tính từ cảm xúc; if … should / Should …; I should… (= lời khuyên). Nên học kèm Unit 33.",
  intro:
    "Should 2: that … should sau insist/suggest…; tính từ cảm xúc; if … should / Should …; I should… (= lời khuyên). Nên học kèm Unit 33.",
  structure: {
    affirmative:
      "insist/suggest that + S + should + V | If S should + V… / Should + S + V… | I should + V",
    negative: "I shouldn't + V | ought not to + V (see Unit 33)",
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
      before: "Không dùng ",
      strong: "suggest somebody to do",
      after: ": What do you suggest we (should) do? (không: suggest us to do)",
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
      vietnamese: "Bác sĩ khuyến nghị tôi nên ăn nhiều trái cây hơn.",
    },
    {
      english: "It's essential that everyone should be here on time.",
      vietnamese: "Điều thiết yếu là mọi người phải có mặt đúng giờ.",
    },
    {
      english: "It's strange that he should be late. He's usually on time.",
      vietnamese: "Lạ là anh ấy lại muộn. Thường thì anh ấy đúng giờ.",
    },
    {
      english: "If the situation should change, we'll contact you.",
      vietnamese: "Nếu tình hình có đổi, chúng tôi sẽ liên hệ.",
    },
    {
      english: "Should the situation change, we'll let you know.",
      vietnamese: "Nếu tình hình có đổi, chúng tôi sẽ báo bạn. (= If it should change…)",
    },
    {
      english: "'Shall I leave now?' 'No, I should wait a bit.'",
      vietnamese: "'Tôi đi bây giờ nhé?' 'Không, tôi khuyên bạn đợi một chút.'",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 440,
  },
};
