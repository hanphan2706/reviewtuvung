import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 121 — At/On/In (Time).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 122 (on time / in time; at the end / in the end).
 */
export const U121_AT_ON_IN_TIME_TOPIC: GrammarTopicDetail = {
  slug: "u121-at-on-in-time",
  title: "At/On/In (Time)",
  levelLabel: "Intermediate",
  kindLabel: "Preposition",
  sourceBook: "English Grammar in Use · Intermediate · Unit 121",
  sourceNote:
    "at + giờ / thời điểm ngắn; on + ngày / ngày tháng; in + tháng / năm / mùa; at the moment; in the morning vs on Friday morning; in a few minutes. Nên học kèm Unit 122.",
  intro:
    "Bài này giúp bạn chọn đúng at, on và in khi nói về thời gian: at cho giờ và thời điểm ngắn, on cho ngày và ngày tháng, in cho tháng, năm, mùa và khoảng thời gian dài. Bạn cũng học các cụm đặc biệt như at the moment, in the morning versus on Friday morning, và in a few minutes (= kể từ bây giờ). Nên học kèm Unit 122.",
  structure: {
    affirmative:
      "at + time of day | on + day/date | in + month/year/season | in + a few minutes…",
    negative:
      "KHÔNG dùng on trước next/last + ngày → next Friday | KHÔNG nhầm at night (về đêm nói chung) với in the night (một đêm cụ thể)",
  },
  usagePoints: [
    {
      before: "at = ",
      strong: "giờ / điểm ngắn trong ngày",
      after: ": at five o'clock, at 11.45, at midnight, at sunset.",
    },
    {
      before: "on = ",
      strong: "ngày / ngày tháng",
      after: ": on Friday, on 16 May 2012, on New Year's Day, on my birthday.",
    },
    {
      before: "in = ",
      strong: "tháng / năm / mùa / thế kỷ",
      after: ": in June, in 2012, in the 1990s, in winter, in the past.",
    },
    {
      before: "at the moment; at weekends; ",
      strong: "at Christmas",
      after: "; on Christmas Day (= ngày cụ thể).",
    },
    {
      before: "at night = ",
      strong: "về đêm nói chung",
      after: ": I don't like working at night.",
    },
    {
      before: "in the night = ",
      strong: "một đêm cụ thể",
      after: ": I was woken by a noise in the night.",
    },
    {
      before: "in the morning = ",
      strong: "buổi sáng nói chung",
      after: ": I'll see you in the morning.",
    },
    {
      before: "on Friday morning = ",
      strong: "sáng của một ngày cụ thể",
      after: "; có thể bỏ on trước ngày: see you Friday.",
    },
    {
      before: "in a few minutes / in a week = ",
      strong: "kể từ bây giờ",
      after: ": The train will be leaving in a few minutes.",
    },
    {
      before: "in four weeks (học lái) = ",
      strong: "mất bao lâu",
      after: ": I learnt to drive in four weeks.",
    },
  ],
  examples: [
    {
      english: "They arrived at 5 o'clock. / on Friday. / in June.",
      vietnamese: "at = giờ; on = ngày; in = tháng — ba giới từ thời gian cơ bản.",
    },
    {
      english: "Can we talk later? I'm busy at the moment.",
      vietnamese: "at the moment = lúc này, ngay bây giờ.",
    },
    {
      english: "I don't like working at night. / I was woken by a noise in the night.",
      vietnamese: "at night = về đêm nói chung; in the night = trong một đêm cụ thể.",
    },
    {
      english: "I'll see you in the morning. / on Friday morning.",
      vietnamese: "in the morning = sáng nói chung; on + ngày + morning = sáng của ngày đó.",
    },
    {
      english: "I'll see you next Friday. (not on next Friday)",
      vietnamese: "KHÔNG thêm on trước next/last + ngày.",
    },
    {
      english: "The train will be leaving in a few minutes.",
      vietnamese: "in a few minutes = vài phút nữa, kể từ bây giờ.",
    },
    {
      english: "I learnt to drive in four weeks.",
      vietnamese: "in four weeks ở đây = mất bốn tuần (không phải 'sau bốn tuần nữa').",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 477,
  },
};
