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
    "as = at the same time as; as = because; as vs when. Nên học kèm Unit 117 (like and as).",
  intro:
    "Trong unit này bạn sẽ nắm: as = at the same time as; as = because; as vs when. Nên học kèm Unit 117 (like and as).",
  structure: {
    affirmative: "As + S + V, … | … as + S + was/were + -ing | Just as + S + V, …",
    negative: "As + S + don't/didn't …, … | (dùng when, không as, nếu tuần tự)",
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
      strong: "because",
      after: ": As it's late and we're tired, let's get a taxi.",
    },
    {
      before: "Hai việc ",
      strong: "đồng thời → as",
      after: "; việc này sau việc kia → when: When I got home, I had something to eat.",
    },
    {
      before: "as (lý do) ≠ when (thời điểm): ",
      strong: "As they lived near us",
      after: " (= because) vs When they lived near us…",
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
      vietnamese: "Tất cả chúng tôi vẫy chào Liz khi cô ấy lái xe đi.",
    },
    {
      english: "Kate slipped as she was getting off the bus.",
      vietnamese: "Kate trượt chân lúc đang xuống xe buýt.",
    },
    {
      english: "Just as I sat down, the doorbell rang.",
      vietnamese: "Đúng lúc tôi ngồi xuống thì chuông cửa reo.",
    },
    {
      english: "As I was hungry, I decided to find somewhere to eat.",
      vietnamese: "Vì đói, tôi quyết định tìm chỗ ăn. (= because)",
    },
    {
      english: "As I drove home, I listened to music.",
      vietnamese: "Trong lúc lái xe về, tôi nghe nhạc. (đồng thời)",
    },
    {
      english: "When I got home, I had something to eat.",
      vietnamese: "Khi về đến nhà, tôi ăn gì đó. (sau đó — không dùng as)",
    },
    {
      english: "As the day went on, the weather got worse.",
      vietnamese: "Càng về sau trong ngày, thời tiết càng xấu.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 410,
  },
};
