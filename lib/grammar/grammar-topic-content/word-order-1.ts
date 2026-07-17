import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 109 — Word order 1: verb + object; place and time.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 110 (adverbs with the verb).
 */
export const U109_WORD_ORDER_1_TOPIC: GrammarTopicDetail = {
  slug: "u109-word-order-1",
  title: "Word Order 1",
  levelLabel: "Intermediate",
  kindLabel: "Word order",
  sourceBook: "English Grammar in Use · Intermediate · Unit 109",
  sourceNote:
    "Động từ và tân ngữ đi liền nhau; nơi chốn thường đứng trước thời gian; cụm thời gian có thể đưa lên đầu câu. Nên học kèm Unit 110.",
  intro:
    "Bài này giúp bạn giữ động từ và tân ngữ cạnh nhau, đặt nơi chốn trước thời gian ở cuối câu, và biết khi nào có thể đưa cụm thời gian lên đầu câu. Nên học kèm Unit 110.",
  structure: {
    affirmative: "S + V + object (+ place) (+ time) | Time + S + V …",
    negative:
      "KHÔNG chen trạng từ giữa V và object | KHÔNG đặt time trước place ở cuối câu | Phủ định: S + aux + not + V + object",
  },
  usagePoints: [
    {
      before: "Động từ và tân ngữ phải ",
      strong: "đi liền nhau",
      after: ": I like my job very much. (KHÔNG nói: I like very much my job)",
    },
    {
      before: "Khi có tân ngữ và nơi chốn, dùng ",
      strong: "verb + object + place",
      after: ": We took the children to the zoo.",
    },
    {
      before: "Ở cuối câu, nơi chốn đứng ",
      strong: "trước thời gian",
      after: ": Ben walks to work every morning. (KHÔNG nói: every morning to work)",
    },
    {
      before: "Để nhấn mạnh hoặc tạo mốc, có thể đặt thời gian ",
      strong: "ở đầu câu",
      after: ": On Monday I'm going to Paris.",
    },
    {
      before: "always / never / usually… → ",
      strong: "Unit 110",
      after: " (giữa câu, với động từ).",
    },
    {
      before: "Trạng từ chỉ cách thức đứng sau tân ngữ, ",
      strong: "KHÔNG tách V + object",
      after: ": Dan won the race easily. (KHÔNG nói: won easily the race)",
    },
  ],
  examples: [
    {
      english: "I like my job very much.",
      vietnamese: "Tân ngữ my job đứng ngay sau like; very much đứng sau tân ngữ.",
    },
    {
      english: "Our guide spoke English fluently.",
      vietnamese: "Fluently đứng sau tân ngữ English, không chen giữa spoke và English.",
    },
    {
      english: "We took the children to the zoo.",
      vietnamese: "Chúng tôi đưa bọn trẻ đến sở thú.",
    },
    {
      english: "Ben walks to work every morning.",
      vietnamese: "Nơi chốn to work đứng trước thời gian every morning.",
    },
    {
      english: "On Monday I'm going to Paris.",
      vietnamese: "Thứ Hai tôi sẽ đến Paris. (time ở đầu câu)",
    },
    {
      english: "Please write your name at the top of the page.",
      vietnamese: "Xin hãy viết tên bạn ở đầu trang.",
    },
    {
      english: "Lisa left her umbrella in a restaurant last night.",
      vietnamese: "Lisa để quên ô ở nhà hàng tối qua.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
