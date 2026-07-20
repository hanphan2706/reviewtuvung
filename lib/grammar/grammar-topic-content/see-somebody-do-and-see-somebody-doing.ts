import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 67 — See Somebody Do and See Somebody Doing.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Past simple ➜ Unit 5; Past continuous ➜ Unit 6.
 */
export const U67_SEE_SOMEBODY_DO_AND_SEE_SOMEBODY_DOING_TOPIC: GrammarTopicDetail = {
  slug: "u67-see-somebody-do-and-see-somebody-doing",
  title: "See Somebody Do and See Somebody Doing",
  levelLabel: "Intermediate",
  kindLabel: "Verb pattern",
  sourceBook: "English Grammar in Use · Intermediate · Unit 67",
  sourceNote:
    "see/hear/watch/feel + somebody do (toàn bộ hành động) vs + somebody doing (đang diễn ra giữa chừng); smell/find + -ing. Nên học kèm Units 5–6.",
  intro:
    "Bài này giúp bạn phân biệt see/hear/watch/feel + somebody do (thấy cả hành động) với + somebody doing (thấy đang diễn ra giữa chừng), và dùng smell/find + -ing. Nên học kèm Units 5–6 (past simple / continuous).",
  structure: {
    affirmative:
      "see/hear/watch/feel + somebody + V (bare infinitive) | see/hear/find/smell + somebody + V-ing",
    negative:
      "didn't see/hear + somebody + V / V-ing",
  },
  usagePoints: [
    {
      before: "see somebody ",
      strong: "do",
      after: " = thấy cả hành động từ đầu đến cuối: I saw him jump over the wall and run away.",
    },
    {
      before: "see somebody ",
      strong: "doing",
      after: " = thấy đang làm giữa chừng: I saw Tom walking along the street.",
    },
    {
      before: "Cùng cấu trúc với ",
      strong: "hear / listen to / watch / feel",
      after: ": I didn't hear you come in. Lisa felt somebody touch her shoulder.",
    },
    {
      before: "smell / find thường với ",
      strong: "-ing",
      after: ": Can you smell something burning? We found him sitting under a tree.",
    },
    {
      before: "Đôi khi ",
      strong: "cả hai dạng đều đúng",
      after: ": I've never seen her dance. / … dancing.",
    },
    {
      before: "Liên hệ ",
      strong: "past simple (toàn bộ) vs past continuous (đang diễn ra)",
      after: " — Units 5–6.",
    },
  ],
  examples: [
    {
      english: "I saw Tom get into his car and drive off.",
      vietnamese: "See + do = thấy cả chuỗi hành động hoàn chỉnh.",
    },
    {
      english: "I saw Kate waiting for a bus.",
      vietnamese: "See + doing = thấy đang làm giữa chừng.",
    },
    {
      english: "I didn't hear you come in.",
      vietnamese: "Hear + do = không nghe thấy toàn bộ việc vào.",
    },
    {
      english: "I could hear it raining.",
      vietnamese: "Hear + -ing = nghe thấy việc đang diễn ra.",
    },
    {
      english: "Can you smell something burning?",
      vietnamese: "Smell thường theo -ing.",
    },
    {
      english: "We found him sitting under a tree eating an apple.",
      vietnamese: "Find somebody + -ing = tìm thấy ai đang làm gì.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
