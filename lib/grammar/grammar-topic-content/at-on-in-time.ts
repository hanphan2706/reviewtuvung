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
    "at giờ; on ngày/ngày tháng; in tháng/năm/mùa; at the moment; in the morning vs on Friday morning; in a few minutes. Nên học kèm Unit 122.",
  intro:
    "Unit này giúp bạn nắm At/On/In (Time): At giờ; on ngày/ngày tháng; in tháng/năm/mùa; at the moment; in the morning vs on Friday morning; in a few minutes. Nên học kèm Unit 122.",
  structure: {
    affirmative:
      "at + time of day | on + day/date | in + month/year/season | in + a few minutes…",
    negative:
      "không: on next Friday / in last June | at night ≠ in the night",
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
      strong: "at Christmas / at night",
      after: "; in the night = một đêm cụ thể; on Christmas Day.",
    },
    {
      before: "in the morning nhưng ",
      strong: "on Friday morning",
      after: "; có thể bỏ on trước ngày: see you Friday.",
    },
    {
      before: "in a few minutes / in a week = ",
      strong: "kể từ bây giờ",
      after: "; I learnt to drive in four weeks (= mất bốn tuần).",
    },
  ],
  examples: [
    {
      english: "They arrived at 5 o'clock. / on Friday. / in June.",
      vietnamese: "Họ đến lúc 5 giờ / vào thứ Sáu / vào tháng Sáu.",
    },
    {
      english: "Can we talk later? I'm busy at the moment.",
      vietnamese: "Nói sau được không? Tôi đang bận lúc này.",
    },
    {
      english: "I don't like working at night. / I was woken by a noise in the night.",
      vietnamese: "Tôi không thích làm việc về đêm. / Tôi bị đánh thức vì tiếng ồn trong đêm đó.",
    },
    {
      english: "I'll see you in the morning. / on Friday morning.",
      vietnamese: "Mai sáng gặp nhé. / Thứ Sáu sáng gặp nhé.",
    },
    {
      english: "I'll see you next Friday. (not on next Friday)",
      vietnamese: "Thứ Sáu tuần sau gặp nhé. (không: on next Friday)",
    },
    {
      english: "The train will be leaving in a few minutes.",
      vietnamese: "Tàu sẽ khởi hành trong vài phút nữa.",
    },
    {
      english: "I learnt to drive in four weeks.",
      vietnamese: "Tôi học lái trong bốn tuần (= mất bốn tuần).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 477,
  },
};
