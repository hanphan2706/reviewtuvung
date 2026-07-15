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
    "Present perfect and past 2 (I have done and I did). Nên học kèm Unit 13 để hoàn thiện quy tắc chọn giữa present perfect và past simple.",
  intro:
    "Trong unit này bạn sẽ nắm: Present perfect and past 2 (I have done and I did). Nên học kèm Unit 13 để nắm trọn quy tắc.",
  structure: {
    affirmative: "S + V-ed/V2 + [mốc thời gian đã kết thúc] | S + have/has + V3 + [khoảng thời gian chưa kết thúc]",
    negative: "S + didn't + V | S + haven't/hasn't + V3",
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
      before: "Cuối kỳ nghỉ vẫn đang diễn ra: ",
      strong: "It's been a really good holiday",
      after: "; sau khi về: It was a really good holiday.",
    },
  ],
  examples: [
    {
      english: "It was very cold yesterday.",
      vietnamese: "Hôm qua rất lạnh.",
    },
    {
      english: "Paul and Lucy arrived ten minutes ago.",
      vietnamese: "Paul và Lucy đã đến mười phút trước.",
    },
    {
      english: "It hasn't rained this week.",
      vietnamese: "Tuần này chưa mưa.",
    },
    {
      english: "I've been working here since 2010.",
      vietnamese: "Tôi đã làm việc ở đây từ năm 2010 (đến giờ).",
    },
    {
      english: "I worked here from 2010 to 2014.",
      vietnamese: "Tôi đã làm việc ở đây từ 2010 đến 2014 (giờ không còn làm nữa).",
    },
    {
      english: "Have you seen Anna this morning?",
      vietnamese: "Sáng nay bạn có gặp Anna không? (vẫn còn là buổi sáng)",
    },
    {
      english: "Did you see Anna this morning?",
      vietnamese: "Sáng nay bạn có gặp Anna không? (giờ đã qua buổi sáng)",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 955,
  },
};
