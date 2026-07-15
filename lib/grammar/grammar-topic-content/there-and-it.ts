import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 84 — There … and It …
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const U84_THERE_AND_IT_TOPIC: GrammarTopicDetail = {
  slug: "u84-there-and-it",
  title: "There … and It …",
  levelLabel: "Intermediate",
  kindLabel: "Structure",
  sourceBook: "English Grammar in Use · Intermediate · Unit 84",
  sourceNote:
    "there = tồn tại / xuất hiện lần đầu; it = vật/chỗ/sự việc cụ thể; there will/must/used to be; It + adj/to…; thời tiết/khoảng cách.",
  intro:
    "Unit này giúp bạn nắm There … and It …: There = tồn tại / xuất hiện lần đầu; it = vật/chỗ/sự việc cụ thể; there will/must/used to be; It + adj/to…; thời tiết/khoảng cách.",
  structure: {
    affirmative:
      "There is/was/will be… + N | It is/was… (+ adj / to-V / that…) | There must/used to/… be",
    negative:
      "not It was a lot of traffic | not To walk… is dangerous (thường) | not It's no signal (= There's)",
  },
  usagePoints: [
    {
      before: "There … = ",
      strong: "tồn tại / lần đầu nhắc đến",
      after: ": There's a new restaurant. There was a lot of traffic.",
    },
    {
      before: "It = ",
      strong: "vật / chỗ / sự việc cụ thể",
      after: ": It's very good. It was a complete surprise.",
    },
    {
      before: "there will/must/used to/is going to be…: ",
      strong: "there + modal/be",
      after: ".",
    },
    {
      before: "It's + adj + to… / that…: ",
      strong: "It ở đầu câu",
      after: ": It's dangerous to walk in the road.",
    },
    {
      before: "Khoảng cách / thời gian / thời tiết → ",
      strong: "it",
      after: "; 'có gió lạnh' → There was a cold wind.",
    },
    {
      before: "There's sure to be… ≠ ",
      strong: "It's sure to be full",
      after: " (it = chuyến bay cụ thể).",
    },
  ],
  examples: [
    {
      english: "There's a new restaurant in Hill Street. I've heard it's very good.",
      vietnamese: "there lần đầu; it = nhà hàng đó.",
    },
    {
      english: "I'm late. There was a lot of traffic.",
      vietnamese: "không: It was a lot of traffic.",
    },
    {
      english: "I like this town. There's a lot to do here. It's an interesting place.",
      vietnamese: "there vs it cạnh nhau.",
    },
    {
      english: "There used to be a cinema here, but it closed a few years ago.",
      vietnamese: "there used to be…; it = rạp.",
    },
    {
      english: "It's dangerous to walk in the road. It's a long time since we last saw you.",
      vietnamese: "It + to… / thời gian.",
    },
    {
      english: "It was windy. / There was a cold wind.",
      vietnamese: "thời tiết it vs 'có …' there.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
