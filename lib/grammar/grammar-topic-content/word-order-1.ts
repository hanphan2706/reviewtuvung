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
    "verb + object; place then time. Nên học kèm Unit 110 (adverbs with the verb).",
  intro:
    "Trong unit này bạn sẽ nắm: verb + object; place then time. Nên học kèm Unit 110.",
  structure: {
    affirmative: "S + V + object (+ place) (+ time) | Time + S + V …",
    negative: "S + aux + not + V + object (+ place) (+ time)",
  },
  usagePoints: [
    {
      before: "Động từ + tân ngữ ",
      strong: "đi liền nhau",
      after: ": I like my job very much. (không: I like very much my job)",
    },
    {
      before: "Có tân ngữ: ",
      strong: "verb + object + place",
      after: ": We took the children to the zoo.",
    },
    {
      before: "Thời gian thường ",
      strong: "sau place",
      after: ": Ben walks to work every morning. (không: every morning to work)",
    },
    {
      before: "Có thể đặt thời gian ",
      strong: "ở đầu câu",
      after: ": On Monday I'm going to Paris.",
    },
    {
      before: "always / never / usually… → ",
      strong: "Unit 110",
      after: " (giữa câu, với động từ).",
    },
    {
      before: "Không tách ",
      strong: "V + object",
      after: " bằng trạng từ: Dan won the race easily. (không: won easily the race)",
    },
  ],
  examples: [
    {
      english: "I like my job very much.",
      vietnamese: "Tôi rất thích công việc của mình.",
    },
    {
      english: "Our guide spoke English fluently.",
      vietnamese: "Hướng dẫn viên nói tiếng Anh lưu loát. (không: spoke fluently English)",
    },
    {
      english: "We took the children to the zoo.",
      vietnamese: "Chúng tôi đưa bọn trẻ đến sở thú.",
    },
    {
      english: "Ben walks to work every morning.",
      vietnamese: "Ben đi bộ đến chỗ làm mỗi sáng.",
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
