import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 81 — 's and of …
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 80 (noun + noun; a three-hour journey).
 */
export const U81_S_AND_OF_TOPIC: GrammarTopicDetail = {
  slug: "u81-s-and-of",
  title: "-'s and of …",
  levelLabel: "Intermediate",
  kindLabel: "Nouns",
  sourceBook: "English Grammar in Use · Intermediate · Unit 81",
  sourceNote:
    "Dùng -'s với người, động vật, tổ chức, địa điểm và thời gian; dùng of … với đồ vật và ý niệm; a week's holiday, ten minutes' walk. Nên học kèm Unit 80.",
  intro:
    "Bài này giúp bạn chọn -'s hay of … để nói sở hữu, phân biệt khi nói về người, đồ vật, tổ chức hay thời gian, và dùng cụm như a week's holiday. Nên học kèm Unit 80.",
  structure: {
    affirmative:
      "người / động vật + 's + danh từ | danh từ số nhiều tận cùng -s + ' + danh từ | of + đồ vật / ý niệm | thời gian + 's / khoảng thời gian + 's hoặc s'",
    negative:
      "Không nói the computer of Tom (thường dùng Tom's computer) | Không nói the water's temperature | Không nói the month's beginning",
  },
  usagePoints: [
    {
      before: "Với người và động vật thì dùng ",
      strong: "-'s",
      after: ": Chris's children, the cat's tail. It's my sister's (= my sister's book).",
    },
    {
      before: "Danh từ số nhiều tận cùng bằng -s thì thêm ",
      strong: "s'",
      after: ": my sisters' room, our neighbours' garden. Men/children → 's: children's clothes.",
    },
    {
      before: "Với đồ vật và ý niệm thì dùng ",
      strong: "of …",
      after: ": the temperature of the water, the top of the hill.",
    },
    {
      before: "Với tổ chức và địa điểm có thể dùng ",
      strong: "-'s hoặc of …",
      after: ": the company's success / the success of the company; Britain's weather.",
    },
    {
      before: "Với thời gian dùng ",
      strong: "yesterday's / next week's",
      after: "; với khoảng thời gian: a week's holiday, twenty minutes' walk.",
    },
    {
      before: "Khi cụm danh từ dài thì dùng ",
      strong: "of …",
      after: " (không nói the man we met yesterday's mother).",
    },
  ],
  examples: [
    {
      english: "What's your sister's name? How old are Chris's children?",
      vietnamese: "Dùng -'s khi nói về người.",
    },
    {
      english: "my sister's room / my sisters' room / a children's book",
      vietnamese: "Số ít thêm 's; số nhiều tận cùng -s thêm s'; men/children thêm 's.",
    },
    {
      english: "the name of the book / the beginning of the month / the back of the car",
      vietnamese: "Đồ vật và phần của vật thì dùng of …",
    },
    {
      english: "the government's decision or the decision of the government",
      vietnamese: "Với tổ chức, cả -'s và of … đều được.",
    },
    {
      english: "Last week's storm caused a lot of damage.",
      vietnamese: "Thời gian cụ thể đi với -'s.",
    },
    {
      english: "I've got a week's holiday. It's only ten minutes' walk.",
      vietnamese: "Khoảng thời gian dùng 's hoặc s' tùy danh từ.",
    },
    {
      english: "Jack and Karen's children live next door.",
      vietnamese: "-'s đặt sau nhiều danh từ cùng sở hữu.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
