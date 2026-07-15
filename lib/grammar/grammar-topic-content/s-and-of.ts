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
    "-'s cho người/động vật/tổ chức/địa điểm/thời gian; of … cho đồ vật/ý niệm; a week's holiday / ten minutes' walk. Nên học kèm Unit 80.",
  intro:
    "-'s cho người/động vật/tổ chức/địa điểm/thời gian; of … cho đồ vật/ý niệm; a week's holiday / ten minutes' walk. Nên học kèm Unit 80 (noun + noun).",
  structure: {
    affirmative:
      "person/animal + 's + N | plural -s' + N | of + thing/idea | time + 's / period + 's/'",
    negative:
      "not the computer of Tom (thường) | not the water's temperature | not the month's beginning",
  },
  usagePoints: [
    {
      before: "Người / động vật → ",
      strong: "-'s",
      after: ": Chris's children, the cat's tail. It's my sister's (= my sister's book).",
    },
    {
      before: "Số nhiều hết -s → ",
      strong: "s'",
      after: ": my sisters' room, our neighbours' garden. men/children → 's: Children's clothes.",
    },
    {
      before: "Đồ vật / ý niệm → ",
      strong: "of …",
      after: ": the temperature of the water, the top of the hill.",
    },
    {
      before: "Tổ chức / địa điểm: ",
      strong: "-'s hoặc of",
      after: ": the company's success / the success of the company; Britain's weather.",
    },
    {
      before: "Thời gian: ",
      strong: "yesterday's / Next week's",
      after: "; khoảng thời gian: a week's holiday, twenty minutes' walk.",
    },
    {
      before: "Nhóm từ dài → ",
      strong: "of …",
      after: " (không: the man we met yesterday's mother).",
    },
  ],
  examples: [
    {
      english: "What's your sister's name? How old are Chris's children?",
      vietnamese: "-'s với người.",
    },
    {
      english: "my sister's room / my sisters' room / a children's book",
      vietnamese: "số ít 's; số nhiều s'; men/children dùng 's.",
    },
    {
      english: "the name of the book / the beginning of the month / the back of the car",
      vietnamese: "đồ vật / phần → of …",
    },
    {
      english: "the government's decision or the decision of the government",
      vietnamese: "tổ chức: cả hai đều được.",
    },
    {
      english: "Last week's storm caused a lot of damage.",
      vietnamese: "thời gian + 's.",
    },
    {
      english: "I've got a week's holiday. It's only ten minutes' walk.",
      vietnamese: "khoảng thời gian: 's / s'.",
    },
    {
      english: "Jack and Karen's children live next door.",
      vietnamese: "-'s sau nhiều danh từ cùng sở hữu.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 460,
  },
};
