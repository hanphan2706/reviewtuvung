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
    "quite/pretty chỉ mức độ khá; quite a/an + danh từ; rather thường mang sắc thái tiêu cực hoặc bất ngờ; fairly yếu hơn; quite đôi khi = completely. Nên học kèm Units 102–103.",
  intro:
    "Bài này giúp bạn phân biệt mức độ và sắc thái của quite, pretty, rather và fairly, đặt a/an đúng vị trí sau quite, và nhận ra khi quite mang nghĩa khá hay hoàn toàn. Nên học kèm Units 102–103.",
  structure: {
    affirmative:
      "quite/pretty + adj/adv | quite a/an (+ adj) + noun | rather + adj | fairly + adj | quite (= completely) + adj/verb",
    negative:
      "KHÔNG nói a quite old house → quite an old house | Pretty KHÔNG mang nghĩa completely | Fairly yếu hơn quite/rather/pretty",
  },
  usagePoints: [
    {
      before: "quite / pretty thường mang nghĩa ",
      strong: "khá, nhưng chưa đến mức very",
      after: ": She's quite/pretty famous.",
    },
    {
      before: "Đặt a/an sau quite: ",
      strong: "quite a/an …",
      after: " (KHÔNG nói a quite…): quite an old house; quite a surprise.",
    },
    {
      before: "rather thường có sắc thái ",
      strong: "tiêu cực hoặc không như mong đợi",
      after: ": rather cloudy; rather good = tốt hơn dự đoán.",
    },
    {
      before: "fairly diễn tả mức độ ",
      strong: "yếu hơn quite/rather/pretty",
      after: ": fairly big, but I'd prefer bigger.",
    },
    {
      before: "Với sure/right/true/different/impossible…, quite = ",
      strong: "completely",
      after: ".",
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
      vietnamese: "Quite và pretty đều nghĩa là khá; pretty thường dùng trong văn nói.",
    },
    {
      english: "We live in quite an old house. Sarah has quite a good job.",
      vietnamese: "quite a/an…",
    },
    {
      english: "It's rather cloudy. These oranges are rather good.",
      vietnamese: "Rather cloudy mang sắc thái tiêu cực; rather good cho thấy kết quả tốt ngoài dự đoán.",
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
