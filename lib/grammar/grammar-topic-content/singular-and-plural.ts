import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 79 — Singular and Plural.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 */
export const U79_SINGULAR_AND_PLURAL_TOPIC: GrammarTopicDetail = {
  slug: "u79-singular-and-plural",
  title: "Singular and Plural",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 79",
  sourceNote:
    "Danh từ số ít và số nhiều đặc biệt: trousers/glasses, -ics và news, means/series/species, danh từ tập thể, số tiền/thời gian/khoảng cách.",
  intro:
    "Bài này giúp bạn biết khi nào dùng động từ số ít hay số nhiều với các danh từ đặc biệt như trousers, glasses, news, police, và khi nói về số tiền, thời gian hay khoảng cách.",
  structure: {
    affirmative:
      "danh từ số nhiều (trousers, glasses…) + động từ số nhiều | a pair of + danh từ | -ics / news + động từ số ít | means / series / species (dạng giống nhau cho số ít và số nhiều) | danh từ tập thể + động từ số ít hoặc số nhiều | số tiền / thời gian / khoảng cách + động từ số ít",
    negative:
      "Không nói My trousers is | Không nói a nice jeans | Không nói The police is | Không nói Three years are (khi thời gian được xem như một khối)",
  },
  usagePoints: [
    {
      before: "Trouser, jeans, glasses, scissors… thường đi với ",
      strong: "động từ số nhiều",
      after: ", hoặc dùng a pair of…: My trousers are too long. I need a new pair of glasses.",
    },
    {
      before: "Gymnastics, physics, news… đi với ",
      strong: "động từ số ít",
      after: ": Gymnastics is my favourite sport. The news is good.",
    },
    {
      before: "Means, series, species có ",
      strong: "cùng một dạng",
      after: " cho cả số ít và số nhiều: This means is… / These means are…",
    },
    {
      before: "Government, staff, team… thường dùng ",
      strong: "động từ số nhiều",
      after: " khi nghĩ đến từng thành viên; cũng có thể dùng số ít khi nghĩ đến cả nhóm.",
    },
    {
      before: "Police đi với ",
      strong: "động từ số nhiều",
      after: " (không nói a police; nói a police officer). People cũng đi với động từ số nhiều.",
    },
    {
      before: "Khi nói về số tiền, thời gian hay khoảng cách như một khối thì dùng ",
      strong: "động từ số ít",
      after: ": Three years is a long time. Two miles isn't very far.",
    },
  ],
  examples: [
    {
      english: "My trousers are too long. I need a new pair of glasses.",
      vietnamese: "Đồ gồm hai phần thường đi với động từ số nhiều, hoặc dùng a pair of.",
    },
    {
      english: "Gymnastics is my favourite sport. I have some news for you. It's good!",
      vietnamese: "Danh từ tận cùng bằng -ics và news đi với động từ số ít.",
    },
    {
      english: "The government have decided to increase taxes.",
      vietnamese: "Danh từ tập thể thường đi với động từ số nhiều (has cũng đúng).",
    },
    {
      english: "The police are investigating the crime.",
      vietnamese: "Police luôn đi với động từ số nhiều.",
    },
    {
      english: "They are nice people. Many people don't have enough to eat.",
      vietnamese: "People đi với động từ số nhiều (không nói persons hay doesn't).",
    },
    {
      english: "Three years is a long time to be without a job. Two miles isn't very far.",
      vietnamese: "Thời gian và khoảng cách xem như một khối thì dùng động từ số ít.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 430,
  },
};
