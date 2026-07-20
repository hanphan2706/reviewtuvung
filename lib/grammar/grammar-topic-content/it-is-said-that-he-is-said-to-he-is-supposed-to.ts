import type { GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

/**
 * Unit 45 — It is said that … / He is said to … / He is supposed to ….
 * Lý thuyết theo khung English Grammar in Use · Intermediate, mục A–B.
 * Nên học kèm Units 42–44 (Passive).
 */
export const U45_IT_IS_SAID_THAT_HE_IS_SAID_TO_HE_IS_SUPPOSED_TO_TOPIC: GrammarTopicDetail =
  {
    slug: "u45-it-is-said-that-he-is-said-to-he-is-supposed-to",
    title: "It is Said That … / He Is Said To … / He Is Supposed To …",
    levelLabel: "Intermediate",
    kindLabel: "Passive",
    sourceBook: "English Grammar in Use · Intermediate · Unit 45",
    sourceNote:
      "It is said that ↔ He is said to; to have + V3 cho quá khứ; supposed to = người ta nói hoặc theo kế hoạch/quy định. Nên học kèm Units 42–44.",
    intro:
      "Bài này giúp bạn chuyển It is said/believed that… sang He is said/expected to…, dùng to have + V3 khi báo cáo việc đã xảy ra, và phân biệt supposed to theo nghĩa người ta nói với theo kế hoạch/quy định. Nên học kèm Units 42–44 (bị động).",
    structure: {
      affirmative:
        "It is said/believed that + clause | S + is said/expected to + V / have + V3 | S + is supposed to + V",
      negative:
        "KHÔNG nhầm supposed to (kế hoạch/quy định) với said to (đồn đoán) | You're not supposed to + V = không được / không nên",
    },
    usagePoints: [
      {
        before: "It is said that… = ",
        strong: "S is said to…",
        after: ": It is said that she runs 10 miles a day. / She is said to run…",
      },
      {
        before: "Các động từ hay dùng: ",
        strong: "alleged, believed, expected, reported…",
        after: " — đặc biệt trong báo chí.",
      },
      {
        before: "Quá khứ trong báo cáo: ",
        strong: "to have + V3",
        after: ": He is alleged to have stolen a car. Two people are reported to have been injured.",
      },
      {
        before: "supposed to ≈ ",
        strong: "said to",
        after: " (= người ta nói): It's supposed to be good. He's supposed to have robbed a bank.",
      },
      {
        before: "supposed to cũng = ",
        strong: "theo kế hoạch / quy định",
        after: ": You're supposed to be on holiday. Guests were supposed to come at 7.30.",
      },
      {
        before: "not supposed to = ",
        strong: "không được / không nên",
        after: ": You're not supposed to park here.",
      },
    ],
    examples: [
      {
        english: "It is said that he is 108 years old. / He is said to be 108 years old.",
        vietnamese: "Hai mẫu tương đương — It is said that… ↔ He is said to… cùng nghĩa 'người ta nói'.",
      },
      {
        english: "The strike is expected to end soon.",
        vietnamese: "is expected to = được kỳ vọng sẽ — bị động báo chí với to + V.",
      },
      {
        english: "He is alleged to have stolen a car.",
        vietnamese: "to have stolen = bị cáo buộc đã… — to have + V3 khi việc đã xảy ra.",
      },
      {
        english: "It's supposed to be a good film.",
        vietnamese: "supposed to ≈ people say — nghĩa đồn đoán, giống said to.",
      },
      {
        english: "You're supposed to be on holiday. What are you doing at work?",
        vietnamese: "supposed to = đáng lẽ theo kế hoạch — khác nghĩa 'người ta nói'.",
      },
      {
        english: "You're not supposed to park your car here.",
        vietnamese: "not supposed to = không được / không nên theo quy định.",
      },
      {
        english: "Jane was supposed to phone me last night, but she didn't.",
        vietnamese: "was supposed to = đáng lẽ phải — kế hoạch quá khứ nhưng không xảy ra.",
      },
    ],
    practice: {
      questionCount: 20,
      studentCount: 450,
    },
  };
