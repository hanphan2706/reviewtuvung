import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 24 — Will be doing and will have done.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 */
export const U24_WILL_BE_DOING_AND_WILL_HAVE_DONE_TOPIC: GrammarTopicDetail = {
  slug: "u24-will-be-doing-and-will-have-done",
  title: "Will Be Doing and Will Have Done",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 24",
  sourceNote:
    "will be + V-ing (future continuous) cho việc đang diễn ra ở một thời điểm tương lai; will have + V3 (future perfect) cho việc đã hoàn tất trước thời điểm đó. Nên học kèm Units 21–22 (will/shall) và Unit 120 (by then/by the time).",
  intro:
    "Bài này giúp bạn dùng will be + V-ing khi một việc đang diễn ra ở một thời điểm cụ thể trong tương lai, và will have + V3 khi việc đó đã hoàn tất trước thời điểm đó. Nên học kèm Units 21–22 (will/shall) và Unit 120 (by then/by the time) để nắm trọn các cách nói về tương lai.",
  structure: {
    affirmative: "S + will be + V-ing (future continuous) | S + will have + V3 (future perfect)",
    negative:
      "KHÔNG dùng will (do) khi ý là đang ở giữa hành động → We'll be eating at 7. (không: We'll eat at 7, nếu ý là đang ăn giữa bữa) | S + will not/won't be + V-ing | S + will not/won't have + V3",
  },
  usagePoints: [
    {
      before: "will be doing = ",
      strong: "sẽ đang làm gì đó",
      after: " tại một thời điểm cụ thể trong tương lai — đang ở giữa quá trình: This time next week I'll be lying on the beach.",
    },
    {
      before: "will be eating = ",
      strong: "đang ở giữa hành động ăn",
      after: " tại thời điểm đó: Don't phone between 7 and 8. We'll be eating.",
    },
    {
      before: "will eat (will + V thường) = ",
      strong: "hành động sẽ bắt đầu sau, chưa diễn ra",
      after: ": Let's wait for Liz, then we'll eat. (bắt đầu ăn sau khi cô ấy tới, không phải đang ăn)",
    },
    {
      before: "will be -ing cũng dùng cho hành động ",
      strong: "đã lên kế hoạch/lịch trình",
      after: " trong tương lai, gần giống will/going to: The government will be making a statement later today.",
    },
    {
      before: "will have done = ",
      strong: "sẽ hoàn tất trước một thời điểm trong tương lai",
      after: " (future perfect): She won't be at home at 9 — she'll have gone to work.",
    },
    {
      before: "Next year they will have been married for 25 years — ",
      strong: "will have been married",
      after: " (future perfect) tính đến một mốc trong tương lai, khác have been married (present perfect, tính đến hiện tại).",
    },
    {
      before: "Hình ảnh dòng người xếp hàng vào rạp: nửa giờ nữa rạp ",
      strong: "sẽ đầy và mọi người đang xem phim",
      after: " (will be + V-ing); ba giờ nữa rạp sẽ trống vì mọi người đã have gone home (will have + V3, đã hoàn tất).",
    },
  ],
  examples: [
    {
      english: "This time next week I'll be on holiday. I'll be lying on the beach.",
      vietnamese: "'ll be lying = đang ở giữa hành động tại một thời điểm tương lai cụ thể.",
    },
    {
      english: "Don't phone between 7 and 8. We'll be eating.",
      vietnamese: "'ll be eating = đang ăn giữa khoảng thời gian đó, khác will eat (bắt đầu ăn).",
    },
    {
      english: "Later in the programme, I'll be talking to the Minister of Education.",
      vietnamese: "'ll be talking = kế hoạch, lịch trình đã sắp xếp, gần giống will/going to.",
    },
    {
      english: "She won't be at home at 9 o'clock — she'll have gone to work.",
      vietnamese: "'ll have gone = đã hoàn tất việc đi làm trước mốc 9 giờ (future perfect).",
    },
    {
      english: "The film will already have started by the time we get to the cinema.",
      vietnamese: "Will have started = hoàn tất trước một mốc tương lai khác (by the time…).",
    },
    {
      english: "Next year they will have been married for 25 years.",
      vietnamese: "Will have been married = future perfect, tính đến một mốc trong tương lai.",
    },
    {
      english: "Half an hour from now, the cinema will be full. Everyone will be watching the film.",
      vietnamese: "Will be watching = giữa hành động; vài giờ sau sẽ have gone home (đã hoàn tất).",
    },
  ],
  practice: {
    questionCount: 19,
    studentCount: 380,
  },
};
