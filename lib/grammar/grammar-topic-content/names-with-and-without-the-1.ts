import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 77 — Names with and without the 1.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–E.
 * Nên học kèm Unit 78 (Names with and without the 2).
 */
export const U77_NAMES_WITH_AND_WITHOUT_THE_1_TOPIC: GrammarTopicDetail = {
  slug: "u77-names-with-and-without-the-1",
  title: "Names with and without the 1",
  levelLabel: "Intermediate",
  kindLabel: "Articles",
  sourceBook: "English Grammar in Use · Intermediate · Unit 77",
  sourceNote:
    "Tên người/địa danh; Mr/Doctor + tên; đại dương/sông/núi số nhiều; north vs northern. Nên học kèm Unit 78.",
  intro:
    "Tên người/địa danh; Mr/Doctor + tên; đại dương/sông/núi số nhiều; north vs northern. Nên học kèm Unit 78.",
  structure: {
    affirmative:
      "Ø + country/city/Mount/Lake/person title+name | the + Republic/Kingdom/States | the + ocean/sea/river/desert | the + plural names",
    negative:
      "no the France / the Doctor Johnson / the Mount Everest | the north of… vs northern…",
  },
  usagePoints: [
    {
      before: "Hầu hết nước / thành phố / núi đơn: ",
      strong: "không the",
      after: ": France, Tokyo, Everest.",
    },
    {
      before: "Có the: ",
      strong: "the UK / the USA / the Czech Republic",
      after: ".",
    },
    {
      before: "Doctor Johnson / President Kennedy — ",
      strong: "không the",
      after: "; the doctor / the President = chức danh không kèm tên.",
    },
    {
      before: "Mount Everest / Lake Victoria — ",
      strong: "không the",
      after: "; the lake khi không có tên riêng kèm theo.",
    },
    {
      before: "Oceans, seas, rivers, deserts → ",
      strong: "the",
      after: ": the Pacific, the Mediterranean, the Amazon, the Sahara.",
    },
    {
      before: "Số nhiều / dãy núi / quần đảo → ",
      strong: "the",
      after: ": the Andes, the Canaries, the Wilsons. the north of… ≠ northern…",
    },
  ],
  examples: [
    {
      english: "Have you been to Canada or the United States?",
      vietnamese: "Canada không the; the United States có the.",
    },
    {
      english: "We called the doctor. We called Doctor Johnson.",
      vietnamese: "the doctor vs Doctor + tên.",
    },
    {
      english: "They live near Lake Superior. They live near the lake.",
      vietnamese: "Lake + tên không the; the lake = hồ (đã rõ).",
    },
    {
      english: "The River Volga flows into the Caspian Sea.",
      vietnamese: "sông / biển → the.",
    },
    {
      english: "The highest mountain in the Andes is Aconcagua.",
      vietnamese: "dãy núi số nhiều → the Andes.",
    },
    {
      english: "Sweden is in northern Europe; Spain is in the south.",
      vietnamese: "northern… không the; the south (of Europe).",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
