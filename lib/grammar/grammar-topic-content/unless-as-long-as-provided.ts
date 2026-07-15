import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 115 — Unless / as long as / provided.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–C.
 * Nên học kèm Units 113–114 và câu điều kiện (25, 38–40).
 */
export const U115_UNLESS_AS_LONG_AS_PROVIDED_TOPIC: GrammarTopicDetail = {
  slug: "u115-unless-as-long-as-provided",
  title: "Unless / As Long As / Provided",
  levelLabel: "Intermediate",
  kindLabel: "Conjunction",
  sourceBook: "English Grammar in Use · Intermediate · Unit 115",
  sourceNote:
    "unless = except if; as long as / so long as; provided / providing (that). Không will sau các liên từ này khi nói tương lai. Nên học kèm Units 113–114.",
  intro:
    "Unit này giúp bạn nắm Unless / As Long As / Provided: Unless = except if; as long as / so long as; provided / providing (that). Không will sau các liên từ này khi nói tương lai. Nên học kèm Units 113–114 và if.",
  structure: {
    affirmative:
      "… unless + S + present | … as long as / so long as + S + V | provided/providing (that) + S + V",
    negative: "… unless + S + don't/doesn't … | (không: unless/as long as + will …)",
  },
  usagePoints: [
    {
      before: "",
      strong: "unless = except if",
      after: ": I'll see you tomorrow unless I have to work late.",
    },
    {
      before: "unless ≈ ",
      strong: "if … not",
      after: ": Unless we leave now, we'll be late. = If we don't leave now…",
    },
    {
      before: "",
      strong: "as long as / so long as",
      after: " = với điều kiện: You can borrow my car as long as you promise not to drive too fast.",
    },
    {
      before: "",
      strong: "provided / providing (that)",
      after: ": Providing the weather is good, we're going to have a picnic.",
    },
    {
      before: "Tương lai: ",
      strong: "không will",
      after: " sau unless/as long as/provided: unless it stops raining.",
    },
    {
      before: "Not unless… = ",
      strong: "chỉ nếu",
      after: ": Shall I tell Lisa? — Not unless she asks you.",
    },
  ],
  examples: [
    {
      english: "You can't go in unless you are a member.",
      vietnamese: "Bạn không được vào trừ khi là hội viên.",
    },
    {
      english: "I'll see you tomorrow unless I have to work late.",
      vietnamese: "Mai gặp bạn trừ khi tôi phải làm muộn.",
    },
    {
      english: "Unless we leave now, we'll be late.",
      vietnamese: "Nếu chúng ta không đi ngay, sẽ muộn. (= If we don't leave now…)",
    },
    {
      english: "You can borrow my car as long as you promise not to drive too fast.",
      vietnamese: "Bạn mượn xe được miễn là hứa không lái quá nhanh.",
    },
    {
      english: "Travelling by car is convenient provided you have somewhere to park.",
      vietnamese: "Đi ô tô tiện miễn là có chỗ đỗ.",
    },
    {
      english: "I'm not going out unless it stops raining.",
      vietnamese: "Tôi không ra ngoài trừ khi trời tạnh. (không: will stop)",
    },
    {
      english: "Providing the weather is good, we're going to have a picnic tomorrow.",
      vietnamese: "Miễn thời tiết đẹp, ngày mai chúng tôi đi picnic.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 435,
  },
};
