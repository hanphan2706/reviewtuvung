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
    "unless = except if; as long as / so long as = với điều kiện; provided / providing (that). KHÔNG dùng will sau các liên từ này khi nói tương lai. Nên học kèm Units 113–114.",
  intro:
    "Bài này giúp bạn nói điều kiện bằng unless (= trừ khi), as long as / so long as (= miễn là), và provided / providing (that), đồng thời tránh dùng will sau các liên từ này khi nói tương lai. Nên học kèm Units 113–114 và if.",
  structure: {
    affirmative:
      "… unless + S + present | … as long as / so long as + S + V | provided/providing (that) + S + V",
    negative:
      "KHÔNG dùng will sau unless / as long as / provided → unless it stops raining (không: will stop) | unless ≈ if … not",
  },
  usagePoints: [
    {
      before: "unless = ",
      strong: "except if / trừ khi",
      after: ": I'll see you tomorrow unless I have to work late.",
    },
    {
      before: "unless ≈ ",
      strong: "if … not",
      after: ": Unless we leave now, we'll be late. = If we don't leave now…",
    },
    {
      before: "as long as / so long as = ",
      strong: "với điều kiện / miễn là",
      after: ": You can borrow my car as long as you promise not to drive too fast.",
    },
    {
      before: "provided / providing (that) = ",
      strong: "miễn là / với điều kiện",
      after: ": Providing the weather is good, we're going to have a picnic.",
    },
    {
      before: "Khi nói tương lai, KHÔNG dùng ",
      strong: "will",
      after: " sau unless / as long as / provided: unless it stops raining.",
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
      vietnamese: "Unless = trừ khi là hội viên — điều kiện bắt buộc.",
    },
    {
      english: "I'll see you tomorrow unless I have to work late.",
      vietnamese: "Unless nói trường hợp ngoại lệ làm bạn không gặp được.",
    },
    {
      english: "Unless we leave now, we'll be late.",
      vietnamese: "Unless = if we don't leave now — hai cách nói cùng ý.",
    },
    {
      english: "You can borrow my car as long as you promise not to drive too fast.",
      vietnamese: "As long as = miễn là bạn hứa không lái quá nhanh.",
    },
    {
      english: "Travelling by car is convenient provided you have somewhere to park.",
      vietnamese: "Provided = miễn là có chỗ đỗ — điều kiện để việc tiện lợi.",
    },
    {
      english: "I'm not going out unless it stops raining.",
      vietnamese: "Nói tương lai dùng present sau unless — KHÔNG nói will stop.",
    },
    {
      english: "Providing the weather is good, we're going to have a picnic tomorrow.",
      vietnamese: "Providing (that) = miễn thời tiết đẹp thì mới đi picnic.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 435,
  },
};
