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
    "Thêm a/an cho danh từ đếm được số ít; some cho số nhiều; nói chung một loại thì bỏ some. Nên học kèm Units 69–70 và 72.",
  intro:
    "Bài này giúp bạn biết khi nào phải thêm a/an trước danh từ đếm được số ít, khi nào dùng some cho số nhiều, và khi nào không cần dùng gì cả. Nên học kèm Units 69–70 và Unit 72.",
  structure: {
    affirmative:
      "a/an + danh từ đếm được số ít | some + danh từ số nhiều | chủ ngữ + be + a/an + nghề nghiệp",
    negative:
      "Danh từ đếm được số ít luôn phải có a/an | Nói chung về một loại (số nhiều) thì bỏ some | Nói nghề nghiệp vẫn phải có a/an",
  },
  usagePoints: [
    {
      before: "Danh từ đếm được ở số ít thì luôn phải có ",
      strong: "a/an",
      after: " đứng trước: She never wears a hat. What a beautiful day!",
    },
    {
      before: "Dùng a/an khi muốn nói đó là ",
      strong: "một loại đồ vật hay một kiểu người",
      after: ": That's a nice table. Jane is a really nice person.",
    },
    {
      before: "Khi nói chung về cả một loại ở số nhiều thì ",
      strong: "KHÔNG",
      after: " dùng some: Those are nice chairs (không nói: some nice chairs).",
    },
    {
      before: "Nói về nghề nghiệp của ai đó vẫn phải có a/an: ",
      strong: "She is a nurse / an English teacher",
      after: " (không nói: She is nurse).",
    },
    {
      before: "Dùng some khi muốn nói ",
      strong: "một vài / một ít",
      after: " (không phải tất cả): some good movies; some friends; some new sunglasses.",
    },
    {
      before: "Khi nói chung chung về sự vật thì ",
      strong: "KHÔNG",
      after: " dùng some: I love bananas. She writes books (không nói: some bananas / some books).",
    },
  ],
  examples: [
    {
      english: "Bye! Have a nice evening. Do you need an umbrella?",
      vietnamese: "Danh từ đếm được số ít nên phải thêm a/an.",
    },
    {
      english: "A dog is an animal. Dogs are animals.",
      vietnamese: "Số ít thì thêm a/an; còn khi nói chung ở số nhiều thì bỏ some.",
    },
    {
      english: "Sandra is a nurse. Would you like to be an English teacher?",
      vietnamese: "Nói nghề nghiệp thì luôn có a/an đứng trước.",
    },
    {
      english: "I've seen some good movies recently.",
      vietnamese: "some nghĩa là “một vài”, nên không thể bỏ trống ở đây.",
    },
    {
      english: "Some children learn very quickly.",
      vietnamese: "some ý chỉ một bộ phận, không phải toàn bộ trẻ em.",
    },
    {
      english: "My aunt is a writer. She writes books.",
      vietnamese: "Nói chung về sách nên dùng books, không nói some books.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 455,
  },
};
