import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 64 — To …, for … and so that ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U64_TO_FOR_AND_SO_THAT_TOPIC: GrammarTopicDetail = {
  slug: "u64-to-for-and-so-that",
  title: "To …, for … and so that …",
  levelLabel: "Intermediate",
  kindLabel: "Structure",
  sourceBook: "English Grammar in Use · Intermediate · Unit 64",
  sourceNote:
    "to + infinitive = mục đích; something/somewhere to do; for + noun vs to + verb; for somebody to do; so that + can/could/will/would.",
  intro:
    "Bài này giúp bạn nói mục đích bằng to …, phân biệt for + danh từ với to + động từ, dùng for somebody to do, và nối kết quả bằng so that + can/could/will/would.",
  structure: {
    affirmative:
      "… to + V | for + noun | for somebody to + V | so (that) + S + can/could/will/would…",
    negative:
      "KHÔNG dùng for + -ing để nói mục đích của hành động | so that + S + won't/wouldn't / can't/couldn't…",
  },
  usagePoints: [
    {
      before: "to + V = ",
      strong: "mục đích của hành động",
      after: ": I shouted to warn everybody. What do you need to make bread?",
    },
    {
      before: "something / somewhere / work ",
      strong: "to do",
      after: ": Would you like something to eat? Is there a chair to sit on?",
    },
    {
      before: "for + danh từ vs to + động từ: ",
      strong: "for petrol / to get petrol",
      after: ": We stopped for petrol. / We stopped to get petrol.",
    },
    {
      before: "for -ing chỉ ",
      strong: "công dụng của vật",
      after: " (KHÔNG dùng để nói mục đích hành động): This brush is for washing the dishes.",
    },
    {
      before: "so that + ",
      strong: "can / could / will / would",
      after: ": She's learning English so that she can study in Canada.",
    },
    {
      before: "Có thể bỏ ",
      strong: "that",
      after: ": I hurried so (that) I wouldn't be late.",
    },
  ],
  examples: [
    {
      english: "I called the restaurant to reserve a table.",
      vietnamese: "To + V nói mục đích: gọi để đặt bàn.",
    },
    {
      english: "It's hard to find a place to park in the city centre.",
      vietnamese: "A place to park = chỗ để đỗ xe.",
    },
    {
      english: "We stopped for petrol. / We stopped to get petrol.",
      vietnamese: "For + danh từ; to + động từ — cùng ý lấy xăng.",
    },
    {
      english: "I went into the kitchen to wash the dishes.",
      vietnamese: "Mục đích hành động dùng to …, KHÔNG dùng for washing.",
    },
    {
      english: "There weren't any chairs for us to sit on.",
      vietnamese: "For somebody to do = để ai đó làm gì.",
    },
    {
      english: "I hurried so that I wouldn't be late.",
      vietnamese: "So that + would/wouldn't nói mục đích/kết quả.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
