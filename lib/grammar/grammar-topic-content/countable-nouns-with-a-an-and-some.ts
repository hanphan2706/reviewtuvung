import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 71 — Countable Nouns with a/an and some.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 69–70 (countable/uncountable) và Unit 72 (a/an and the).
 */
export const U71_COUNTABLE_NOUNS_WITH_A_AN_AND_SOME_TOPIC: GrammarTopicDetail = {
  slug: "u71-countable-nouns-with-a-an-and-some",
  title: "Countable Nouns with a/an and some",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 71",
  sourceNote:
    "a/an với số ít đếm được; loại đồ/người; nghề nghiệp; some với số nhiều. Nên học kèm Units 69–70 và 72.",
  intro:
    "Unit này giúp bạn nắm Countable Nouns with a/an and some: A/an với số ít đếm được; loại đồ/người; nghề nghiệp; some với số nhiều. Nên học kèm Units 69–70 và Unit 72.",
  structure: {
    affirmative:
      "a/an + singular countable | (some) + plural | S + be + a/an + job",
    negative:
      "no bare singular countable | no some for things in general | plural kind without some",
  },
  usagePoints: [
    {
      before: "Số ít đếm được cần ",
      strong: "a/an",
      after: ": She never wears a hat. What a beautiful day!",
    },
    {
      before: "a/an nói ",
      strong: "loại đồ / người",
      after: ": That's a nice table. Jane is a really nice person.",
    },
    {
      before: "Số nhiều nói loại: ",
      strong: "không some",
      after: ": Those are nice chairs. What awful shoes! (không: some nice chairs)",
    },
    {
      before: "Nghề nghiệp: ",
      strong: "is a nurse / an English teacher",
      after: " (không: is nurse).",
    },
    {
      before: "some = ",
      strong: "một số / vài / một đôi",
      after: ": some good movies; some friends; some new sunglasses.",
    },
    {
      before: "Không some khi ",
      strong: "nói chung",
      after: ": I love bananas. She writes books. (không: some bananas / some books)",
    },
  ],
  examples: [
    {
      english: "Bye! Have a nice evening. Do you need an umbrella?",
      vietnamese: "Số ít đếm được → a/an.",
    },
    {
      english: "A dog is an animal. Dogs are animals.",
      vietnamese: "Số ít: a/an; số nhiều nói loại: không some.",
    },
    {
      english: "Sandra is a nurse. Would you like to be an English teacher?",
      vietnamese: "Nghề nghiệp luôn có a/an.",
    },
    {
      english: "I've seen some good movies recently.",
      vietnamese: "some = một số (không để trống khi nghĩa này).",
    },
    {
      english: "Some children learn very quickly.",
      vietnamese: "some = một phần, không phải tất cả.",
    },
    {
      english: "My aunt is a writer. She writes books.",
      vietnamese: "Nói chung → books (không: some books).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
