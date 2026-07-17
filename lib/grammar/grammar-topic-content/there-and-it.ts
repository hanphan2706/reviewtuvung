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
    "There dùng để nói tồn tại hay xuất hiện lần đầu; it chỉ vật, chỗ hay sự việc cụ thể; there will/must/used to be; It + tính từ/to…; thời tiết và khoảng cách.",
  intro:
    "Bài này giúp bạn phân biệt there … khi nói có gì đó tồn tại hay lần đầu xuất hiện, và it … khi nói về vật, chỗ hay sự việc đã rõ, cùng các mẫu It + tính từ/to… và cách nói thời tiết.",
  structure: {
    affirmative:
      "There is/was/will be… + danh từ | It is/was… (+ tính từ / to-V / that…) | There must/used to/is going to be…",
    negative:
      "Không nói It was a lot of traffic (nói There was a lot of traffic) | Không nói To walk… is dangerous (thường dùng It is dangerous to walk…) | Không nói It's no signal (nói There's no signal)",
  },
  usagePoints: [
    {
      before: "There … dùng khi nói ",
      strong: "có gì đó tồn tại",
      after: " hay lần đầu nhắc đến: There's a new restaurant. There was a lot of traffic.",
    },
    {
      before: "It dùng khi nói về ",
      strong: "vật, chỗ hay sự việc cụ thể",
      after: " đã rõ: It's very good. It was a complete surprise.",
    },
    {
      before: "Có thể dùng ",
      strong: "there + modal/be",
      after: ": there will be…, there must be…, there used to be…, there is going to be….",
    },
    {
      before: "Mẫu ",
      strong: "It's + tính từ + to… / that…",
      after: " với it ở đầu câu: It's dangerous to walk in the road.",
    },
    {
      before: "Khoảng cách, thời gian và thời tiết thường dùng ",
      strong: "it",
      after: "; còn khi nói có gió lạnh thì dùng There was a cold wind.",
    },
    {
      before: "There's sure to be… khác ",
      strong: "It's sure to be full",
      after: " (it ở câu sau chỉ chuyến bay cụ thể).",
    },
  ],
  examples: [
    {
      english: "There's a new restaurant in Hill Street. I've heard it's very good.",
      vietnamese: "There giới thiệu lần đầu; it chỉ nhà hàng đó.",
    },
    {
      english: "I'm late. There was a lot of traffic.",
      vietnamese: "Nói về giao thông thì dùng there was, không nói it was.",
    },
    {
      english: "I like this town. There's a lot to do here. It's an interesting place.",
      vietnamese: "There nói có nhiều việc làm; it mô tả thị trấn.",
    },
    {
      english: "There used to be a cinema here, but it closed a few years ago.",
      vietnamese: "There used to be… giới thiệu rạp; it chỉ rạp đó.",
    },
    {
      english: "It's dangerous to walk in the road. It's a long time since we last saw you.",
      vietnamese: "It + to… và It + thời gian since…",
    },
    {
      english: "It was windy. / There was a cold wind.",
      vietnamese: "Thời tiết chung dùng it; có gió cụ thể thì dùng there was.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 480,
  },
};
