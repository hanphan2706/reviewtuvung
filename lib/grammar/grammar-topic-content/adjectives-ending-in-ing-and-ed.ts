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
    "-ing = tính chất khiến người khác cảm thấy thế; -ed = cảm xúc của người. Nên học kèm Unit 97.",
  intro:
    "-ing = tính chất khiến người khác cảm thấy thế; -ed = cảm xúc của người. Nên học kèm Unit 97 (mệnh đề -ing/-ed).",
  structure: {
    affirmative:
      "something/someone + -ing | somebody + -ed (+ with/in/about…) | get + -ed",
    negative:
      "not Jane is boring (= she causes boredom) when you mean she feels bored | not interesting in…",
  },
  usagePoints: [
    {
      before: "-ing = ",
      strong: "gây cảm giác",
      after: ": The movie was disappointing. He's really boring.",
    },
    {
      before: "-ed = ",
      strong: "cảm xúc của người",
      after: ": We were disappointed with the movie. I'm bored with my job.",
    },
    {
      before: "interested ",
      strong: "in",
      after: " (không interesting in): Are you interested in buying a car?",
    },
    {
      before: "get + -ed: ",
      strong: "get bored / get embarrassed",
      after: "… vì thời tiết / tình huống.",
    },
    {
      before: "Người boring = ",
      strong: "làm người khác chán",
      after: "; người bored = chính họ chán.",
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
      vietnamese: "-ing việc; -ed cảm xúc.",
    },
    {
      english: "Julia thinks politics is interesting. Julia is interested in politics.",
      vietnamese: "interesting vs interested in.",
    },
    {
      english: "It was surprising that he passed. Everybody was surprised.",
      vietnamese: "surprising / surprised.",
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
