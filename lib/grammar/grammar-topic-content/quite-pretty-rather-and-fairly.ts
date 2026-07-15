import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 104 — Quite, Pretty, Rather and Fairly.
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–D.
 * Nên học kèm Units 102–103.
 */
export const U104_QUITE_PRETTY_RATHER_AND_FAIRLY_TOPIC: GrammarTopicDetail = {
  slug: "u104-quite-pretty-rather-and-fairly",
  title: "Quite, Pretty, Rather and Fairly",
  levelLabel: "Intermediate",
  kindLabel: "Adverb",
  sourceBook: "English Grammar in Use · Intermediate · Unit 104",
  sourceNote:
    "quite/pretty ≈ vừa phải; quite a…; rather (hay tiêu cực / bất ngờ tích cực); fairly yếu hơn; quite = completely. Nên học kèm Units 102–103.",
  intro:
    "Unit này giúp bạn nắm Quite, Pretty, Rather and Fairly: Quite/pretty ≈ vừa phải; quite a…; rather (hay tiêu cực / bất ngờ tích cực); fairly yếu hơn; quite = completely. Nên học kèm Units 102–103.",
  structure: {
    affirmative:
      "quite/pretty + adj/adv | quite a/an (+ adj) + noun | rather + adj | fairly + adj | quite (= completely) + adj/verb",
    negative:
      "not a quite old house | pretty ≠ completely | fairly < quite/rather/pretty",
  },
  usagePoints: [
    {
      before: "quite / pretty = ",
      strong: "hơn một chút, kém very",
      after: ": She's quite/pretty famous.",
    },
    {
      before: "quite ",
      strong: "a/an …",
      after: " (không: a quite…): quite an old house; quite a surprise.",
    },
    {
      before: "rather: hay ",
      strong: "tiêu cực",
      after: "; với tốt → thường = bất ngờ: rather good.",
    },
    {
      before: "fairly = ",
      strong: "yếu hơn",
      after: " quite/rather/pretty: fairly big, but I'd prefer bigger.",
    },
    {
      before: "quite = ",
      strong: "completely",
      after: " với sure/right/true/different/impossible…",
    },
    {
      before: "not quite = ",
      strong: "chưa hoàn toàn",
      after: ": Not quite ready. I don't quite understand.",
    },
  ],
  examples: [
    {
      english: "She's quite famous. / She's pretty famous.",
      vietnamese: "quite ≈ pretty (pretty nói miệng).",
    },
    {
      english: "We live in quite an old house. Sarah has quite a good job.",
      vietnamese: "quite a/an…",
    },
    {
      english: "It's rather cloudy. These oranges are rather good.",
      vietnamese: "rather: tiêu cực / bất ngờ tích cực.",
    },
    {
      english: "My room is fairly big, but I'd prefer a bigger one.",
      vietnamese: "fairly = tạm được.",
    },
    {
      english: "Are you sure? Yes, quite sure. Everything they said was quite true.",
      vietnamese: "quite = completely.",
    },
    {
      english: "The story is quite interesting. / The story is quite true.",
      vietnamese: "hai nghĩa của quite.",
    },
  ],
  practice: {
    questionCount: 20,
    studentCount: 446,
  },
};
