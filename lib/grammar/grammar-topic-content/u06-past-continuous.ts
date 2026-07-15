import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 6 — Past continuous (I was doing).
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 */
export const U06_PAST_CONTINUOUS_TOPIC: GrammarTopicDetail = {
  slug: "u06-past-continuous",
  title: "Past Continuous",
  levelLabel: "Intermediate",
  kindLabel: "Tense",
  sourceBook: "English Grammar in Use · Intermediate · Unit 6",
  sourceNote: "Past continuous (I was doing). Đối chiếu với past simple, hành động xen giữa hành động khác.",
  intro:
    "Past continuous (I was doing). Đối chiếu với past simple, hành động xen giữa hành động khác.",
  structure: {
    affirmative: "S + was/were + V-ing",
    negative: "S + wasn't/weren't + V-ing",
  },
  usagePoints: [
    {
      before: "Dùng cho hành động ",
      strong: "đang diễn ra tại một thời điểm cụ thể",
      after: " trong quá khứ — đã bắt đầu trước đó, chưa kết thúc tại lúc đang nói tới (At 10.30 they were playing tennis).",
    },
    {
      before: "Đối chiếu với past simple: ",
      strong: "was doing (đang làm, chưa xong)",
      after: " khác I did (hành động đã hoàn tất, trọn vẹn) — We were walking home khi gặp Dan, khác We walked home (đi hết đường về).",
    },
    {
      before: "Dùng để nêu ",
      strong: "bối cảnh cho một hành động khác xảy ra ở giữa",
      after: ": Matt phoned while we were having dinner (bữa tối đang diễn ra khi Matt gọi).",
    },
    {
      before: "Khi hai việc xảy ra ",
      strong: "nối tiếp nhau (cái này xong mới đến cái kia)",
      after: ", dùng past simple cho cả hai: I was walking along the road when I saw Dan. So I stopped …",
    },
    {
      before: "So sánh nghĩa: ",
      strong: "were having dinner (đã bắt đầu trước khi Karen đến)",
      after: " khác had dinner (Karen đến rồi mới bắt đầu ăn) — thứ tự thời gian hoàn toàn khác nhau.",
    },
    {
      before: "Các ",
      strong: "động từ trạng thái",
      after: " (know, want, believe …) không dùng ở continuous, kể cả trong quá khứ: We knew each other well (không nói were knowing).",
    },
  ],
  examples: [
    {
      english: "We were walking home when I met Dan.",
      vietnamese: "Chúng tôi đang đi bộ về nhà khi tôi gặp Dan. (đang trong quá trình đi)",
    },
    {
      english: "We walked home after the party last night.",
      vietnamese: "Chúng tôi đã đi bộ về nhà sau tiệc tối qua. (đi hết cả đoạn đường, hành động trọn vẹn)",
    },
    {
      english: "Kate was watching TV when we arrived.",
      vietnamese: "Kate đang xem TV khi chúng tôi đến.",
    },
    {
      english: "This time last year I was living in Hong Kong.",
      vietnamese: "Vào giờ này năm ngoái tôi đang sống ở Hồng Kông.",
    },
    {
      english: "Matt phoned while we were having dinner.",
      vietnamese: "Matt gọi điện trong khi chúng tôi đang ăn tối.",
    },
    {
      english: "I was walking along the road when I saw Dan. So I stopped, and we talked for a while.",
      vietnamese: "Tôi đang đi trên đường thì thấy Dan. Vậy nên tôi dừng lại, và chúng tôi nói chuyện một lúc.",
    },
    {
      english: "When Karen arrived, we were having dinner.",
      vietnamese: "Khi Karen đến, chúng tôi đang ăn tối rồi (đã bắt đầu trước khi cô ấy tới).",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 730,
  },
};
