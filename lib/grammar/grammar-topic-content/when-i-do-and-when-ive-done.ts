import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 25 — When I do and when I've done (if and when).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 19 (present tenses cho tương lai) và Unit 7 (present perfect); so với Unit 38 (if I do / if I did).
 */
export const U25_WHEN_I_DO_AND_WHEN_IVE_DONE_TOPIC: GrammarTopicDetail = {
  slug: "u25-when-i-do-and-when-ive-done",
  title: "When I Do and When I've Done",
  levelLabel: "Intermediate",
  kindLabel: "Clause",
  sourceBook: "English Grammar in Use · Intermediate · Unit 25",
  sourceNote:
    "Sau when/while/before/after/as soon as/until và sau if nói về tương lai, dùng present simple hoặc present perfect, KHÔNG dùng will. Nên học kèm Unit 19 (present tenses cho tương lai), Unit 7 (present perfect) và Unit 38 (if I do / if I did).",
  intro:
    "Bài này giúp bạn dùng present simple (hoặc present perfect) sau when/while/before/after/as soon as/until và sau if khi nói về tương lai, thay vì will, và phân biệt if (việc có thể xảy ra hoặc không) với when (việc chắc chắn sẽ xảy ra). Ôn lại present tenses cho tương lai ở Unit 19 và present perfect ở Unit 7 trước khi học, rồi so sánh với if trong câu điều kiện không thật ở Unit 38.",
  structure: {
    affirmative: "when/if/before/after/until/as soon as + S + V(s/es)/have/has + V3, S + will + V",
    negative:
      "KHÔNG dùng will sau when/while/before/after/as soon as/until hoặc sau if khi nói về tương lai → We'll go out when it stops raining. (không: when it will stop) | S + do/does/have/has + not + V | S + will not/won't + V",
  },
  usagePoints: [
    {
      before: "Sau when/while/before/after/as soon as/until nói về tương lai, dùng ",
      strong: "present simple",
      after: ", KHÔNG dùng will: We'll go out when it stops raining. (không nói when it will stop)",
    },
    {
      before: "Có thể dùng ",
      strong: "present perfect",
      after: " sau when/after/until/as soon as để nhấn việc này xong trước việc kia: When I've phoned Kate, we can go out.",
    },
    {
      before: "KHÔNG dùng present perfect nếu hai việc ",
      strong: "xảy ra đồng thời",
      after: ": When I phone Kate, I'll ask her about the party. (không nói when I've phoned)",
    },
    {
      before: "Sau if, dùng ",
      strong: "present simple",
      after: " cho tương lai, không dùng will: I'll be angry if it happens again. (không nói if it will happen)",
    },
    {
      before: "if dùng cho việc ",
      strong: "có thể xảy ra hoặc không",
      after: ": If it rains, I won't go out.",
    },
    {
      before: "when dùng cho việc ",
      strong: "chắc chắn sẽ xảy ra",
      after: ": When I go out, I'll get some bread.",
    },
    {
      before: "Nhiều trường hợp có thể dùng cả ",
      strong: "present simple hoặc present perfect",
      after: " sau as soon as/after: I'll come as soon as I finish. = I'll come as soon as I've finished.",
    },
  ],
  examples: [
    {
      english: "We'll go out when it stops raining.",
      vietnamese: "Stops (present simple) sau when = KHÔNG dùng will sau when.",
    },
    {
      english: "Don't forget to lock the door when you go out.",
      vietnamese: "Go out (present simple) sau when nói về tương lai.",
    },
    {
      english: "Can I have the newspaper when you've finished with it?",
      vietnamese: "'ve finished (present perfect) sau when = nhấn việc đó xong trước.",
    },
    {
      english: "When I've phoned Kate, we can go out.",
      vietnamese: "'ve phoned = việc này xong trước việc kia mới xảy ra.",
    },
    {
      english: "I'll be angry if it happens again.",
      vietnamese: "Happens (present simple) sau if = KHÔNG dùng will sau if.",
    },
    {
      english: "If it is raining this evening, I won't go out.",
      vietnamese: "If + present simple = việc có thể xảy ra hoặc không.",
    },
    {
      english: "I'm going out later. When I go out, I'll get some bread.",
      vietnamese: "When + present simple = việc chắc chắn sẽ xảy ra, khác if.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 360,
  },
};
