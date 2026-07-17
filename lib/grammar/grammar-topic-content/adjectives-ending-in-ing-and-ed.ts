import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 98 — Adjectives Ending in -ing and -ed.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Unit 97 (-ing/-ed clauses).
 */
export const U98_ADJECTIVES_ENDING_IN_ING_AND_ED_TOPIC: GrammarTopicDetail = {
  slug: "u98-adjectives-ending-in-ing-and-ed",
  title: "Adjectives Ending in -ing and -ed",
  levelLabel: "Intermediate",
  kindLabel: "Adjective",
  sourceBook: "English Grammar in Use · Intermediate · Unit 98",
  sourceNote:
    "Tính từ -ing mô tả người/vật gây ra cảm giác; tính từ -ed mô tả người đang có cảm giác đó. Nên học kèm Unit 97.",
  intro:
    "Bài này giúp bạn phân biệt tính từ tận cùng bằng -ing (người/vật gây ra cảm giác) với -ed (cảm xúc của người), và dùng đúng giới từ trong interested in, bored with hay surprised by. Nên học kèm Unit 97 (mệnh đề -ing/-ed).",
  structure: {
    affirmative:
      "something/someone + -ing | somebody + -ed (+ with/in/about…) | get + -ed",
    negative:
      "Muốn nói Jane thấy chán: KHÔNG nói Jane is boring → Jane is bored | KHÔNG nói interesting in → interested in",
  },
  usagePoints: [
    {
      before: "Tính từ -ing mô tả ",
      strong: "người/vật gây ra cảm giác",
      after: ": The movie was disappointing. He's really boring.",
    },
    {
      before: "Tính từ -ed mô tả ",
      strong: "người đang có cảm giác",
      after: ": We were disappointed with the movie. I'm bored with my job.",
    },
    {
      before: "interested ",
      strong: "in",
      after: " (KHÔNG dùng interesting in): Are you interested in buying a car?",
    },
    {
      before: "Dùng get + -ed khi cảm xúc ",
      strong: "get bored / get embarrassed",
      after: " bắt đầu xuất hiện hoặc thay đổi.",
    },
    {
      before: "Một người boring = ",
      strong: "làm người khác chán",
      after: ".",
    },
    {
      before: "Một người bored = ",
      strong: "chính họ cảm thấy chán",
      after: ".",
    },
    {
      before: "Cặp hay gặp: ",
      strong: "exciting/excited, amazing/amazed, terrifying/terrified…",
      after: "",
    },
  ],
  examples: [
    {
      english: "Jane's job is boring. Jane is bored with her job.",
      vietnamese: "Công việc gây chán nên dùng boring; Jane cảm thấy chán nên dùng bored.",
    },
    {
      english: "Julia thinks politics is interesting. Julia is interested in politics.",
      vietnamese: "Politics gây hứng thú; Julia là người cảm thấy hứng thú.",
    },
    {
      english: "It was surprising that he passed. Everybody was surprised.",
      vietnamese: "Việc anh ấy đỗ gây bất ngờ; mọi người là người cảm thấy bất ngờ.",
    },
    {
      english: "The movie was disappointing. We were disappointed with it.",
      vietnamese: "disappointing / disappointed.",
    },
    {
      english: "Paul always talks about the same things. He's really boring.",
      vietnamese: "boring = làm người khác chán.",
    },
    {
      english: "I was shocked when I heard the news. The news was shocking.",
      vietnamese: "shocked / shocking.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 505,
  },
};
