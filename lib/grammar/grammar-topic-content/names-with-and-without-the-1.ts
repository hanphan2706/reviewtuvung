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
    "Tên người và địa danh; Mr/Doctor + tên; đại dương/sông/núi số nhiều; north vs northern. Nên học kèm Unit 76 và Unit 78.",
  intro:
    "Bài này giúp bạn biết tên người, quốc gia, thành phố, sông, biển và dãy núi khi nào có the và khi nào không, cùng cách phân biệt north và northern. Nên học kèm Unit 76 và Unit 78.",
  structure: {
    affirmative:
      "Ø + quốc gia/thành phố/Mount/Lake/tên người | the + Republic/Kingdom/States | the + đại dương/biển/sông/sa mạc | the + tên số nhiều",
    negative:
      "Không nói the France / the Doctor Johnson / the Mount Everest | the north of… khác northern…",
  },
  usagePoints: [
    {
      before: "Hầu hết tên quốc gia, thành phố và núi đơn lẻ thì ",
      strong: "KHÔNG",
      after: " có the: France, Tokyo, Everest.",
    },
    {
      before: "Một số tên quốc gia có the: ",
      strong: "the UK / the USA / the Czech Republic",
      after: ".",
    },
    {
      before: "Nói Doctor Johnson / President Kennedy thì ",
      strong: "KHÔNG",
      after: " có the; còn the doctor / the President là chức danh không kèm tên riêng.",
    },
    {
      before: "Nói Mount Everest / Lake Victoria thì ",
      strong: "KHÔNG",
      after: " có the; còn the lake là hồ đã rõ trong ngữ cảnh.",
    },
    {
      before: "Đại dương, biển, sông, sa mạc thì dùng ",
      strong: "the",
      after: ": the Pacific, the Mediterranean, the Amazon, the Sahara.",
    },
    {
      before: "Tên số nhiều, dãy núi hoặc quần đảo thì dùng ",
      strong: "the",
      after: ": the Andes, the Canaries, the Wilsons. the north of… khác với northern…",
    },
  ],
  examples: [
    {
      english: "Have you been to Canada or the United States?",
      vietnamese: "Canada không có the; the United States thì có.",
    },
    {
      english: "We called the doctor. We called Doctor Johnson.",
      vietnamese: "the doctor là gọi bác sĩ; Doctor + tên là gọi đúng người.",
    },
    {
      english: "They live near Lake Superior. They live near the lake.",
      vietnamese: "Lake + tên riêng không có the; the lake là hồ đã rõ.",
    },
    {
      english: "The River Volga flows into the Caspian Sea.",
      vietnamese: "Sông và biển thường có the.",
    },
    {
      english: "The highest mountain in the Andes is Aconcagua.",
      vietnamese: "Dãy núi số nhiều nên nói the Andes.",
    },
    {
      english: "Sweden is in northern Europe; Spain is in the south.",
      vietnamese: "northern… không có the; the south (of Europe) thì có.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 445,
  },
};
