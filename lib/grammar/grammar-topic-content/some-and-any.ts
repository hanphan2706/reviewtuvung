import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 85 — Some and Any.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 86 (no/none/any / nothing/nobody).
 */
export const U85_SOME_AND_ANY_TOPIC: GrammarTopicDetail = {
  slug: "u85-some-and-any",
  title: "Some and Any",
  levelLabel: "Intermediate",
  kindLabel: "Determiners",
  sourceBook: "English Grammar in Use · Intermediate · Unit 85",
  sourceNote:
    "some (+) / any (−); câu hỏi; if + any; any = không quan trọng cái nào; somebody + they. Nên học kèm Unit 86.",
  intro:
    "Unit này giúp bạn nắm Some and Any: Some (+) / any (−); câu hỏi; if + any; any = không quan trọng cái nào; somebody + they. Nên học kèm Unit 86 (no / none / nothing…).",
  structure: {
    affirmative:
      "some / somebody / something (+) | any in − and most ? | any = it doesn't matter which",
    negative:
      "not some in clear negatives | any after without / hardly / refuse",
  },
  usagePoints: [
    {
      before: "Khẳng định → ",
      strong: "some",
      after: "; phủ định → any: some flowers / not any flowers.",
    },
    {
      before: "Xin / mời / nghĩ là có → ",
      strong: "some",
      after: " trong câu hỏi: Can I have some…?",
    },
    {
      before: "Không chắc có hay không → ",
      strong: "any",
      after: " trong câu hỏi: Do you have any luggage?",
    },
    {
      before: "any = ",
      strong: "không quan trọng cái nào",
      after: ": any bus / anybody / anything / anywhere.",
    },
    {
      before: "if + ",
      strong: "any / anyone / anything",
      after: ".",
    },
    {
      before: "someone/anybody + ",
      strong: "they/them/their",
      after: " (số ít về ngữ pháp, they theo nghĩa generic).",
    },
  ],
  examples: [
    {
      english: "We bought some flowers. We didn't buy any flowers.",
      vietnamese: "some (+) / any (−).",
    },
    {
      english: "Can I have some sugar, please? Do you have any luggage?",
      vietnamese: "some khi xin; any khi không chắc.",
    },
    {
      english: "You can take any bus. They all go to the centre.",
      vietnamese: "any = bất kỳ cái nào.",
    },
    {
      english: "I'm hungry. I want something to eat. — Anything. I don't mind.",
      vietnamese: "something vs anything (= không quan trọng món nào).",
    },
    {
      english: "Hardly anybody fails. She went out without any money.",
      vietnamese: "nghĩa phủ định → any.",
    },
    {
      english: "Someone has forgotten their umbrella.",
      vietnamese: "someone + their.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 490,
  },
};
