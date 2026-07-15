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
    "on time = đúng giờ; in time = kịp; at the end of…; in the end = cuối cùng. Nên học kèm Unit 121.",
  intro:
    "Unit này giúp bạn nắm On Time and In Time / At the End and In the End: On time = đúng giờ; in time = kịp; at the end of…; in the end = cuối cùng. Nên học kèm Unit 121.",
  structure: {
    affirmative:
      "on time | in time (for / to…) | just in time | at the end of… | in the end",
    negative:
      "không: in the end of January | in the end ≠ at the end of…",
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
      vietnamese: "Chuyến 11h45 khởi hành đúng giờ.",
    },
    {
      english: "Will you be home in time for dinner?",
      vietnamese: "Bạn có về kịp ăn tối không?",
    },
    {
      english: "We got to the station just in time for our train.",
      vietnamese: "Chúng tôi tới ga vừa kịp chuyến tàu.",
    },
    {
      english: "I'm going away at the end of January.",
      vietnamese: "Tôi đi vào cuối tháng Một. (không: in the end of January)",
    },
    {
      english: "We had a lot of problems with our car. We sold it in the end.",
      vietnamese: "Xe nhiều vấn đề. Cuối cùng chúng tôi bán.",
    },
    {
      english: "At first we didn't get on very well, but in the end we became good friends.",
      vietnamese: "Lúc đầu không hợp, nhưng cuối cùng trở thành bạn tốt.",
    },
    {
      english: "I got home too late to watch the game on TV.",
      vietnamese: "Tôi về quá muộn nên không xem được trận trên TV. (đối nghĩa in time)",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
