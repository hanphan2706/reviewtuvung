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
    "Unit này giúp bạn nắm To …, for … and so that …: To + infinitive = mục đích; something/somewhere to do; for + noun vs to + verb; for somebody to do; so that + can/could/will/would.",
  structure: {
    affirmative:
      "… to + V | for + noun | for somebody to + V | so (that) + S + can/could/will/would…",
    negative:
      "so that + S + won't/wouldn't / can't/couldn't… | không dùng for + -ing để nói mục đích của hành động",
  },
  usagePoints: [
    {
      before: "to + V = ",
      strong: "mục đích",
      after: ": I shouted to warn everybody. What do you need to make bread?",
    },
    {
      before: "something / somewhere / work ",
      strong: "to do",
      after: ": Would you like something to eat? Is there a chair to sit on?",
    },
    {
      before: "for + noun vs to + verb: ",
      strong: "for petrol / to get petrol",
      after: ": We stopped for petrol. / We stopped to get petrol.",
    },
    {
      before: "for -ing = ",
      strong: "công dụng",
      after: " (không phải lý do hành động): This brush is for washing the dishes.",
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
      vietnamese: "Tôi gọi nhà hàng để đặt bàn.",
    },
    {
      english: "It's hard to find a place to park in the city centre.",
      vietnamese: "Khó tìm chỗ đỗ xe ở trung tâm thành phố.",
    },
    {
      english: "We stopped for petrol. / We stopped to get petrol.",
      vietnamese: "Chúng tôi dừng lại lấy xăng. (for + danh từ / to + động từ)",
    },
    {
      english: "I went into the kitchen to wash the dishes.",
      vietnamese: "Tôi vào bếp để rửa bát. (không: for washing)",
    },
    {
      english: "There weren't any chairs for us to sit on.",
      vietnamese: "Không có ghế nào để chúng tôi ngồi.",
    },
    {
      english: "I hurried so that I wouldn't be late.",
      vietnamese: "Tôi vội để khỏi bị muộn.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 510,
  },
};
