import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 116 — As (at the same time as / because).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 117 (like and as) khi có trong lộ trình.
 */
export const U116_AS_TOPIC: GrammarTopicDetail = {
  slug: "u116-as",
  title: "As",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 116",
  sourceNote:
    "as = at the same time as (cùng lúc); as = because (vì); phân biệt as với when khi hai việc diễn ra tuần tự. Nên học kèm Unit 117 (like and as).",
  intro:
    "Bài này giúp bạn dùng as để nói hai việc cùng lúc, dùng as thay because khi giải thích lý do, và chọn when thay vì as khi việc này xảy ra sau việc kia. Nên học kèm Unit 117 (like and as).",
  structure: {
    affirmative: "As + S + V, … | … as + S + was/were + -ing | Just as + S + V, …",
    negative:
      "KHÔNG dùng as khi việc này xảy ra sau việc kia → When I got home, I had something to eat | as (lý do) ≠ when (thời điểm)",
  },
  usagePoints: [
    {
      before: "as = ",
      strong: "cùng lúc",
      after: ": We all waved goodbye to Liz as she drove away.",
    },
    {
      before: "",
      strong: "just as",
      after: " = đúng khoảnh khắc đó: Just as I sat down, the doorbell rang.",
    },
    {
      before: "as = ",
      strong: "because / vì",
      after: ": As it's late and we're tired, let's get a taxi.",
    },
    {
      before: "Hai việc ",
      strong: "đồng thời → as",
      after: ": As I drove home, I listened to music.",
    },
    {
      before: "Việc này ",
      strong: "sau việc kia → when",
      after: ": When I got home, I had something to eat.",
    },
    {
      before: "As they lived near us = ",
      strong: "because",
      after: " (lý do): As they lived near us, we saw them often.",
    },
    {
      before: "When they lived near us = ",
      strong: "thời gian",
      after: " (khi còn sống gần): When they lived near us, we saw them often.",
    },
    {
      before: "",
      strong: "since",
      after: " cũng có thể = because: Since it's late, let's get a taxi.",
    },
  ],
  examples: [
    {
      english: "We all waved goodbye to Liz as she drove away.",
      vietnamese: "As = cùng lúc cô ấy lái xe đi — hai việc song song.",
    },
    {
      english: "Kate slipped as she was getting off the bus.",
      vietnamese: "As + was/were + -ing = trong lúc đang làm gì.",
    },
    {
      english: "Just as I sat down, the doorbell rang.",
      vietnamese: "Just as = đúng khoảnh khắc ngồi xuống thì chuông reo.",
    },
    {
      english: "As I was hungry, I decided to find somewhere to eat.",
      vietnamese: "As = vì đói — giải thích lý do, tương đương because.",
    },
    {
      english: "As I drove home, I listened to music.",
      vietnamese: "As = trong lúc lái xe về — hai việc cùng lúc.",
    },
    {
      english: "When I got home, I had something to eat.",
      vietnamese: "When = về đến nhà rồi mới ăn — việc tuần tự, không dùng as.",
    },
    {
      english: "As the day went on, the weather got worse.",
      vietnamese: "As the day went on = càng về sau trong ngày — tiến triển song song.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 410,
  },
};
