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
    "have (got) cho sở hữu/quan hệ/bệnh tật/hẹn — dùng như nhau; have (không got) cho hoạt động/trải nghiệm như have breakfast, have a shower.",
  intro:
    "Bài này giúp bạn dùng have và have got đúng chỗ: cả hai đều được cho sở hữu, quan hệ, bệnh tật, cuộc hẹn, nhưng chỉ have (không thêm got) mới đi được với các cụm hoạt động/trải nghiệm như have breakfast, have a shower, have a good time.",
  structure: {
    affirmative: "S + have/has (got) + noun (sở hữu) | S + have + noun (hoạt động/trải nghiệm)",
    negative:
      "KHÔNG dùng got với cụm hoạt động (have got a shower, have got a good time) — bỏ got: have a shower | KHÔNG thêm got ở quá khứ (had got long hair) — chỉ dùng had: Lisa had long hair",
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
      after: ": We have / We've got a nice room (not We're having a nice room).",
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
      after: ": have breakfast, have a shower, have a good time, have an accident... — những cụm này dùng được continuous (having a shower) và dùng do/does/did trong câu hỏi/phủ định.",
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
      vietnamese: "have = sở hữu — đổi thành have got vẫn giữ đúng nghĩa.",
    },
    {
      english: "Lisa has got two brothers.",
      vietnamese: "has got = quan hệ gia đình — hoàn toàn tương đương has two brothers.",
    },
    {
      english: "I have a headache.",
      vietnamese: "have = bệnh tật/tình trạng cơ thể, có thể thêm got: I've got a headache.",
    },
    {
      english: "Lisa had long hair when she was a child.",
      vietnamese: "quá khứ chỉ dùng had, không nói had got long hair.",
    },
    {
      english: "Do you have any questions? / Have you got any questions?",
      vietnamese: "hai cách hỏi tương đương nhau cho nghĩa sở hữu.",
    },
    {
      english: "He's having a shower.",
      vietnamese: "having a shower = đang tắm — đây là hoạt động, nên dùng được continuous, không dùng got.",
    },
    {
      english: "Did you have trouble finding somewhere to stay?",
      vietnamese: "have trouble = trải nghiệm/tình huống, dùng did để hỏi, không dùng have got.",
    },
  ],
  practice: {
    questionCount: 18,
    studentCount: 1160,
  },
};
