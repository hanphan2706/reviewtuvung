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
      "It is said/believed… that; He is said/expected to…; supposed to (người ta nói / theo dự định). Nên học kèm Units 42–44.",
    intro:
      "It is said/believed… that; He is said/expected to…; supposed to (người ta nói / theo dự định). Nên học kèm Units 42–44 (bị động).",
    structure: {
      affirmative:
        "It is said/believed that + clause | S + is said/expected to + V / have + V3 | S + is supposed to + V",
      negative:
        "You're not supposed to + V | S + isn't supposed to + V",
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
        vietnamese: "Người ta nói ông ấy 108 tuổi. (hai cách tương đương)",
      },
      {
        english: "The strike is expected to end soon.",
        vietnamese: "Cuộc đình công được kỳ vọng sẽ sớm kết thúc.",
      },
      {
        english: "He is alleged to have stolen a car.",
        vietnamese: "Anh ấy bị cáo buộc đã đánh cắp xe.",
      },
      {
        english: "It's supposed to be a good film.",
        vietnamese: "Người ta bảo phim này hay. (= people say)",
      },
      {
        english: "You're supposed to be on holiday. What are you doing at work?",
        vietnamese: "Bạn đáng lẽ đang nghỉ. Sao lại ở công ty?",
      },
      {
        english: "You're not supposed to park your car here.",
        vietnamese: "Bạn không được đỗ xe ở đây.",
      },
      {
        english: "Jane was supposed to phone me last night, but she didn't.",
        vietnamese: "Jane đáng lẽ gọi tôi tối qua, nhưng không gọi.",
      },
    ],
    practice: {
      questionCount: 20,
      studentCount: 450,
    },
  };
