import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 110 — Word order 2: adverbs with the verb.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 109 (verb + object; place and time).
 */
export const U110_WORD_ORDER_2_TOPIC: GrammarTopicDetail = {
  slug: "u110-word-order-2",
  title: "Word Order 2",
  levelLabel: "Intermediate",
  kindLabel: "Word order",
  sourceBook: "English Grammar in Use · Intermediate · Unit 110",
  sourceNote:
    "Vị trí always/also/probably… với động từ thường, be và trợ động từ; vị trí all/both; probably đứng trước dạng phủ định. Nên học kèm Unit 109.",
  intro:
    "Bài này giúp bạn đặt always, also, probably và các trạng từ tương tự đúng vị trí: trước động từ thường, sau be hoặc sau trợ động từ đầu tiên; đồng thời dùng đúng all/both và probably trong câu phủ định. Nên học kèm Unit 109.",
  structure: {
    affirmative: "S + adverb + V | S + be + adverb | S + aux + adverb + V",
    negative:
      "probably đứng trước won't/isn't… | KHÔNG nói have always to → always have to | KHÔNG nói won't probably → probably won't",
  },
  usagePoints: [
    {
      before: "Với động từ thường một từ, trạng từ đứng ",
      strong: "trước động từ",
      after: ": Emily always drives to work.",
    },
    {
      before: "Với động từ be, trạng từ đứng sau ",
      strong: "am/is/are/was/were",
      after: ": You're always late. We were also hungry.",
    },
    {
      before: "Với cụm động từ nhiều từ, trạng từ đứng sau ",
      strong: "trợ động từ đầu tiên",
      after: ": I can never remember her name. The meeting will probably be cancelled.",
    },
    {
      before: "Trạng từ đứng trước cả cụm ",
      strong: "have to",
      after: ": I always have to phone him. (KHÔNG nói: I have always to)",
    },
    {
      before: "Trong câu phủ định, ",
      strong: "probably đứng trước won't/isn't…",
      after: ": I probably won't see you. (KHÔNG nói: I won't probably)",
    },
    {
      before: "Đặt ",
      strong: "all / both",
      after: " giữa câu: We all felt ill. My parents are both teachers.",
    },
  ],
  examples: [
    {
      english: "Emily always drives to work.",
      vietnamese: "Emily luôn lái xe đi làm.",
    },
    {
      english: "We were feeling very tired and we were also hungry.",
      vietnamese: "Với be, also đứng sau were.",
    },
    {
      english: "I can never remember her name.",
      vietnamese: "Tôi chẳng bao giờ nhớ được tên cô ấy.",
    },
    {
      english: "I always have to phone him.",
      vietnamese: "Always đứng trước cả cụm have to.",
    },
    {
      english: "I probably won't see you.",
      vietnamese: "Probably đứng trước won't trong câu phủ định.",
    },
    {
      english: "My friends are all going out tonight.",
      vietnamese: "Bạn bè tôi tối nay đều đi chơi.",
    },
    {
      english: "I've never done it and I never will.",
      vietnamese: "Tôi chưa bao giờ làm và cũng sẽ không bao giờ làm.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
