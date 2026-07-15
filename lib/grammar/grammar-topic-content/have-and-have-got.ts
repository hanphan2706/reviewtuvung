import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 17 — Have and have got.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 */
export const HAVE_AND_HAVE_GOT_TOPIC: GrammarTopicDetail = {
  slug: "u17-have-and-have-got",
  title: "Have and Have Got",
  levelLabel: "Intermediate",
  kindLabel: "Verb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 17",
  sourceNote:
    "Have and have got. Have (got) cho sở hữu/quan hệ/bệnh tật/hẹn; have (không có got) cho các hoạt động/trải nghiệm như have breakfast, have a shower...",
  intro:
    "Have and have got. Have (got) cho sở hữu/quan hệ/bệnh tật/hẹn; have (không có got) cho các hoạt động/trải nghiệm như have breakfast, have a shower.",
  structure: {
    affirmative: "S + have/has (got) + noun (sở hữu) | S + have + noun (hoạt động/trải nghiệm)",
    negative: "S + don't/doesn't have + noun | S + haven't/hasn't got + noun",
  },
  usagePoints: [
    {
      before: "have và have got dùng như nhau cho ",
      strong: "sở hữu, quan hệ, bệnh tật, cuộc hẹn",
      after: ": They have a new car. = They've got a new car.",
    },
    {
      before: "Với nghĩa sở hữu, ",
      strong: "không dùng dạng tiếp diễn",
      after: " (I'm having không đúng nghĩa này): We have / We've got a nice room (not We're having a nice room).",
    },
    {
      before: "Ở quá khứ chỉ dùng ",
      strong: "had (không thêm got)",
      after: ": Lisa had long hair (not Lisa had got).",
    },
    {
      before: "Trong câu hỏi/phủ định có ",
      strong: "ba cách diễn đạt",
      after: ": Do you have...? / Have you got...? / Have you...? (ít dùng hơn).",
    },
    {
      before: "have (không có got) còn dùng cho ",
      strong: "hoạt động/trải nghiệm",
      after: ": have breakfast, have a shower, have a good time, have an accident... — những cụm này có thể dùng continuous (having a shower) và dùng do/does/did trong câu hỏi/phủ định.",
    },
    {
      before: "",
      strong: "have got không dùng được với các cụm hoạt động này",
      after: ": I have (= eat) a sandwich (not I've got).",
    },
  ],
  examples: [
    {
      english: "They have a new car.",
      vietnamese: "Họ có một chiếc ô tô mới.",
    },
    {
      english: "Lisa has got two brothers.",
      vietnamese: "Lisa có hai anh/em trai.",
    },
    {
      english: "I have a headache.",
      vietnamese: "Tôi bị đau đầu.",
    },
    {
      english: "Lisa had long hair when she was a child.",
      vietnamese: "Lisa từng có tóc dài khi còn nhỏ.",
    },
    {
      english: "Do you have any questions? / Have you got any questions?",
      vietnamese: "Bạn có câu hỏi nào không?",
    },
    {
      english: "He's having a shower.",
      vietnamese: "Anh ấy đang tắm.",
    },
    {
      english: "Did you have trouble finding somewhere to stay?",
      vietnamese: "Bạn có gặp khó khăn khi tìm chỗ ở không?",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 1160,
  },
};
