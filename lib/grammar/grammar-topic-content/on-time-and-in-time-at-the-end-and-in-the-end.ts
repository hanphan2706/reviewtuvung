import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 122 — On Time and In Time / At the End and In the End.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 121 (at/on/in time).
 */
export const U122_ON_TIME_AND_IN_TIME_AT_THE_END_AND_IN_THE_END_TOPIC: GrammarTopicDetail = {
  slug: "u122-on-time-and-in-time-at-the-end-and-in-the-end",
  title: "On Time and In Time / At the End and In the End",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 122",
  sourceNote:
    "on time = đúng giờ theo kế hoạch; in time = kịp; at the end of… = lúc kết thúc; in the end = cuối cùng. Nên học kèm Unit 121.",
  intro:
    "Bài này giúp bạn phân biệt on time (đúng giờ theo kế hoạch) với in time (kịp), và at the end of… (lúc kết thúc một giai đoạn) với in the end (cuối cùng, sau cùng). Bạn cũng học just in time và cặp at first … in the end. Nên học kèm Unit 121.",
  structure: {
    affirmative:
      "on time | in time (for / to…) | just in time | at the end of… | in the end",
    negative:
      "KHÔNG nói in the end of January → at the end of January | KHÔNG nhầm in the end (= cuối cùng) với at the end of… (= lúc kết thúc)",
  },
  usagePoints: [
    {
      before: "on time = ",
      strong: "đúng giờ (theo kế hoạch)",
      after: ": Everything began and finished on time. Don't be late — be on time.",
    },
    {
      before: "in time = ",
      strong: "kịp",
      after: ": Will you be home in time for dinner? I hope the present arrives in time.",
    },
    {
      before: "just in time = ",
      strong: "vừa kịp",
      after: ": We got to the station just in time for our train.",
    },
    {
      before: "at the end of… = ",
      strong: "lúc kết thúc…",
      after: ": at the end of January; At the end of the concert, everyone applauded.",
    },
    {
      before: "in the end = ",
      strong: "cuối cùng",
      after: ": He got angry. In the end he walked out. (không: at the end)",
    },
    {
      before: "at first … ",
      strong: "in the end",
      after: ": At first we didn't get on, but in the end we became friends.",
    },
  ],
  examples: [
    {
      english: "The 11.45 train left on time.",
      vietnamese: "on time = khởi hành đúng giờ theo lịch, không trễ.",
    },
    {
      english: "Will you be home in time for dinner?",
      vietnamese: "in time for = kịp để làm gì (ở đây: kịp ăn tối).",
    },
    {
      english: "We got to the station just in time for our train.",
      vietnamese: "just in time = vừa kịp, suýt nữa là trễ.",
    },
    {
      english: "I'm going away at the end of January.",
      vietnamese: "at the end of = vào cuối giai đoạn — KHÔNG dùng in the end of.",
    },
    {
      english: "We had a lot of problems with our car. We sold it in the end.",
      vietnamese: "in the end = sau cùng quyết định bán — không chỉ 'cuối tháng'.",
    },
    {
      english: "At first we didn't get on very well, but in the end we became good friends.",
      vietnamese: "at first … in the end = lúc đầu … nhưng cuối cùng.",
    },
    {
      english: "I got home too late to watch the game on TV.",
      vietnamese: "too late = không in time — về quá muộn nên không xem được.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
