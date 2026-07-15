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
    "always/also/probably… với động từ; all/both; probably trước phủ định. Nên học kèm Unit 109.",
  intro:
    "Unit này giúp bạn nắm Word Order 2: Always/also/probably… với động từ; all/both; probably trước phủ định. Nên học kèm Unit 109.",
  structure: {
    affirmative: "S + adverb + V | S + be + adverb | S + aux + adverb + V",
    negative: "S + probably + won't/isn't… | S + aux + not + usually + V",
  },
  usagePoints: [
    {
      before: "Động từ một từ → trạng từ ",
      strong: "trước động từ",
      after: ": Emily always drives to work.",
    },
    {
      before: "Sau ",
      strong: "am/is/are/was/were",
      after: ": You're always late. We were also hungry.",
    },
    {
      before: "Động từ nhiều từ → sau ",
      strong: "trợ động từ đầu",
      after: ": I can never remember her name. The meeting will probably be cancelled.",
    },
    {
      before: "Trước ",
      strong: "have to",
      after: ": I always have to phone him. (không: I have always to)",
    },
    {
      before: "",
      strong: "probably",
      after: " trước phủ định: I probably won't see you. (không: I won't probably)",
    },
    {
      before: "",
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
      vietnamese: "Chúng tôi mệt và cũng đói. (also sau were)",
    },
    {
      english: "I can never remember her name.",
      vietnamese: "Tôi chẳng bao giờ nhớ được tên cô ấy.",
    },
    {
      english: "I always have to phone him.",
      vietnamese: "Tôi luôn phải gọi anh ấy. (không: have always to)",
    },
    {
      english: "I probably won't see you.",
      vietnamese: "Có lẽ tôi sẽ không gặp bạn. (không: won't probably)",
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
