import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 8 — Present perfect 2 (I have done).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const PRESENT_PERFECT_2_TOPIC: GrammarTopicDetail = {
  slug: "u08-present-perfect-2",
  title: "Present Perfect 2",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 8",
  sourceNote:
    "Present perfect 2 (I have done). Kinh nghiệm sống, khoảng thời gian tính đến hiện tại, cấu trúc It's the first time... has happened.",
  intro:
    "Present perfect 2 (I have done). Kinh nghiệm sống, khoảng thời gian tính đến hiện tại, cấu trúc It's the first time... has happened.",
  structure: {
    affirmative: "S + have/has + V3 (kinh nghiệm, tính đến hiện tại)",
    negative: "S + haven't/hasn't + V3 (chưa từng, cho tới nay)",
  },
  usagePoints: [
    {
      before: "Dùng present perfect để nói về ",
      strong: "kinh nghiệm sống nói chung",
      after: " — khoảng thời gian được tính là từ quá khứ đến hiện tại (Have you ever eaten caviar? We've never had a car.).",
    },
    {
      before: "Kết hợp với ",
      strong: "recently, in the last few days, so far, since...",
      after: " để nói về việc xảy ra trong khoảng thời gian gần đây vẫn chưa kết thúc.",
    },
    {
      before: "Dùng với ",
      strong: "today, this week, this year",
      after: " khi khoảng thời gian đó chưa kết thúc tại thời điểm nói (I've drunk four cups of coffee today.).",
    },
    {
      before: "Cấu trúc ",
      strong: "It's the (first) time + present perfect",
      after: " — không dùng present simple (It's the first time he has driven a car, not drives).",
    },
    {
      before: "Tương tự, ",
      strong: "This/It is the second/third time... + has/have + V3",
      after: " để nói việc lặp lại (This is the second time this has happened.).",
    },
  ],
  examples: [
    {
      english: "Have you ever been to China?",
      vietnamese: "Bạn đã bao giờ đến Trung Quốc chưa?",
    },
    {
      english: "I've been to China twice.",
      vietnamese: "Tôi đã đến Trung Quốc hai lần.",
    },
    {
      english: "We've never had a car.",
      vietnamese: "Chúng tôi chưa từng có ô tô.",
    },
    {
      english: "I've met a lot of people in the last few days.",
      vietnamese: "Tôi đã gặp rất nhiều người trong vài ngày qua.",
    },
    {
      english: "It's rained every day since I arrived.",
      vietnamese: "Từ khi tôi đến đây, ngày nào cũng mưa.",
    },
    {
      english: "It's the first time he's driven a car.",
      vietnamese: "Đây là lần đầu tiên anh ấy lái xe ô tô.",
    },
    {
      english: "Sarah has lost her passport again. This is the second time this has happened.",
      vietnamese: "Sarah lại làm mất hộ chiếu. Đây là lần thứ hai việc này xảy ra.",
    },
  ],
  practice: {
    questionCount: 17,
    studentCount: 1120,
  },
};
