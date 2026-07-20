import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 8 — Present perfect 2 (I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Unit 7 (present perfect 1) và Unit 9 (present perfect continuous).
 */
export const PRESENT_PERFECT_2_TOPIC: GrammarTopicDetail = {
  slug: "u08-present-perfect-2",
  title: "Present Perfect 2",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 8",
  sourceNote:
    "Present perfect 2 (I have done): kinh nghiệm sống, khoảng thời gian tính đến hiện tại, It's the first time... has happened. Nên học kèm Unit 7 (present perfect 1) và Unit 9 (present perfect continuous).",
  intro:
    "Bài này giúp bạn dùng present perfect để nói về kinh nghiệm sống nói chung, một khoảng thời gian tính từ quá khứ đến hiện tại (today, this week, since…), và cấu trúc It's the first/second time … has happened. Nên học kèm Unit 7 (present perfect 1) và Unit 9 (present perfect continuous) để nắm trọn nhóm thời present perfect.",
  structure: {
    affirmative: "S + have/has + V3 (kinh nghiệm, tính đến hiện tại)",
    negative:
      "KHÔNG dùng present simple sau It's the first time (KHÔNG nói It's the first time he drives) → dùng present perfect: It's the first time he has driven a car.",
  },
  usagePoints: [
    {
      before: "Dùng present perfect để nói về ",
      strong: "kinh nghiệm sống nói chung",
      after: " — khoảng thời gian được tính là từ quá khứ đến hiện tại: Have you ever eaten caviar? We've never had a car.",
    },
    {
      before: "Kết hợp với ",
      strong: "recently, in the last few days, so far, since...",
      after: " để nói về việc xảy ra trong khoảng thời gian gần đây vẫn chưa kết thúc.",
    },
    {
      before: "Dùng với ",
      strong: "today, this week, this year",
      after: " khi khoảng thời gian đó chưa kết thúc tại thời điểm nói: I've drunk four cups of coffee today.",
    },
    {
      before: "Cấu trúc ",
      strong: "It's the (first) time + present perfect",
      after: " — không dùng present simple: It's the first time he has driven a car, không nói drives.",
    },
    {
      before: "Tương tự, ",
      strong: "This/It is the second/third time... + has/have + V3",
      after: " để nói việc lặp lại: This is the second time this has happened.",
    },
  ],
  examples: [
    {
      english: "Have you ever been to China?",
      vietnamese: "Have you ever = hỏi về kinh nghiệm sống nói chung, không hỏi thời điểm cụ thể.",
    },
    {
      english: "I've been to China twice.",
      vietnamese: "twice = số lần tính từ quá khứ đến hiện tại, không cần nói khi nào.",
    },
    {
      english: "We've never had a car.",
      vietnamese: "never = chưa từng, tính đến hiện tại.",
    },
    {
      english: "I've met a lot of people in the last few days.",
      vietnamese: "in the last few days = khoảng thời gian gần đây vẫn chưa kết thúc, dùng present perfect.",
    },
    {
      english: "It's rained every day since I arrived.",
      vietnamese: "since I arrived = tính từ một điểm trong quá khứ đến hiện tại, since đi kèm present perfect.",
    },
    {
      english: "It's the first time he's driven a car.",
      vietnamese: "It's the first time … has driven = cấu trúc cố định, không dùng present simple (drives).",
    },
    {
      english: "Sarah has lost her passport again. This is the second time this has happened.",
      vietnamese: "the second time this has happened = việc lặp lại, luôn theo sau bằng has/have + V3.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 1120,
  },
};
