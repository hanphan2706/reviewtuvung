import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 14 — Present perfect and past 2 (I have done and I did).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 13 để hoàn thiện quy tắc chọn thời.
 */
export const PRESENT_PERFECT_AND_PAST_2_TOPIC: GrammarTopicDetail = {
  slug: "u14-present-perfect-and-past-2",
  title: "Present Perfect and Past 2",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 14",
  sourceNote:
    "Present perfect cho khoảng thời gian chưa kết thúc (today, this week); past simple cho mốc/khoảng đã kết thúc (yesterday, last week). Nên học kèm Unit 13.",
  intro:
    "Bài này giúp bạn tránh lỗi dùng present perfect với mốc thời gian đã kết thúc (yesterday, last year, ten minutes ago) và biết chọn past simple cho khoảng thời gian đã xong, present perfect cho khoảng thời gian còn tính đến hiện tại (today, this week, since 2010). Nên học kèm Unit 13 để nắm trọn quy tắc chọn giữa present perfect và past simple.",
  structure: {
    affirmative: "S + V-ed/V2 + [mốc thời gian đã kết thúc] | S + have/has + V3 + [khoảng thời gian chưa kết thúc]",
    negative:
      "KHÔNG dùng present perfect với mốc thời gian đã kết thúc (I have seen him yesterday) — dùng past simple: I saw him yesterday | S + haven't/hasn't + V3 | S + didn't + V",
  },
  usagePoints: [
    {
      before: "Không dùng present perfect với ",
      strong: "mốc thời gian đã kết thúc",
      after: " (yesterday, last year, ten minutes ago): It was very cold yesterday (not has been).",
    },
    {
      before: "Dùng past simple để hỏi ",
      strong: "When...? hoặc What time...?",
      after: ": When did your friends arrive? (not have... arrived)",
    },
    {
      before: "Present perfect dùng cho ",
      strong: "khoảng thời gian chưa kết thúc tính đến hiện tại",
      after: ": today, this week, since 2010 — It hasn't rained this week.",
    },
    {
      before: "Past simple dùng cho ",
      strong: "khoảng thời gian đã kết thúc",
      after: ": yesterday, last week, from 2010 to 2014 — It didn't rain last week.",
    },
    {
      before: "So sánh ",
      strong: "Have you seen Anna this morning?",
      after: " (vẫn còn là buổi sáng) với Did you see Anna this morning? (đã sang buổi chiều/tối).",
    },
    {
      before: "Trong kỳ nghỉ vẫn đang diễn ra dùng present perfect: ",
      strong: "It's been a really good holiday",
      after: "; sau khi về nhà mới dùng past simple: It was a really good holiday.",
    },
  ],
  examples: [
    {
      english: "It was very cold yesterday.",
      vietnamese: "yesterday là mốc đã kết thúc — chỉ dùng was, không dùng has been.",
    },
    {
      english: "Paul and Lucy arrived ten minutes ago.",
      vietnamese: "ago luôn đi với past simple, đánh dấu mốc thời gian đã qua rõ ràng.",
    },
    {
      english: "It hasn't rained this week.",
      vietnamese: "this week vẫn chưa kết thúc (tính đến hôm nay) — dùng present perfect.",
    },
    {
      english: "I've been working here since 2010.",
      vietnamese: "since 2010 đến giờ vẫn đang tiếp diễn — present perfect, khác with từ 2010 đến 2014 ở câu dưới.",
    },
    {
      english: "I worked here from 2010 to 2014.",
      vietnamese: "from...to... là khoảng đã kết thúc (giờ không còn làm nữa) — dùng past simple.",
    },
    {
      english: "Have you seen Anna this morning?",
      vietnamese: "hỏi lúc vẫn còn là buổi sáng — present perfect vì khoảng thời gian chưa kết thúc.",
    },
    {
      english: "Did you see Anna this morning?",
      vietnamese: "hỏi khi đã qua buổi sáng (giờ là chiều/tối) — past simple vì khoảng thời gian đã kết thúc.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 955,
  },
};
