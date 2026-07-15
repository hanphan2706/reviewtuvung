import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 3 exercises — Present continuous and present simple 1 (English Grammar in Use · Intermediate).
 */
export const U03_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_1_EXERCISES: readonly GrammarExercise[] = [
  // 3.1 — Correct the underlined verbs (rebuilt as cloze on the whole verb)
  grammarCloze(
    "u03-3-1-1",
    "3.1 · Sửa động từ",
    "Ben tries to find a job, but he hasn't had any luck yet. → Ben __________ (try) to find a job.",
    "is trying",
    {
      alternatives: ["Ben is trying"],
      explanation: "Việc đang diễn ra trong giai đoạn hiện tại, chưa có kết quả → phải dùng continuous: is trying.",
    },
  ),
  grammarCloze(
    "u03-3-1-2",
    "3.1 · Sửa động từ",
    "Martina is phoning her mother every day. → Martina __________ (phone) her mother every day.",
    "phones",
    {
      explanation: "'every day' chỉ việc lặp lại thường xuyên → dùng present simple: phones, không dùng continuous.",
    },
  ),
  grammarCloze(
    "u03-3-1-3",
    "3.1 · Sửa động từ",
    "Can you hear those people? What do they talk about? → What __________ (they / talk) about?",
    "are they talking",
    {
      alternatives: ["are they talking?"],
      explanation: "Hành động đang xảy ra ngay lúc nghe → phải dùng continuous: are they talking.",
    },
  ),
  grammarCloze(
    "u03-3-1-4",
    "3.1 · Sửa động từ",
    "I must go now. It gets late. → It __________ (get) late.",
    "'s getting",
    {
      alternatives: ["is getting", "It's getting", "It is getting"],
      explanation: "Sự thay đổi đang diễn ra ngay lúc nói → phải dùng continuous: is getting.",
    },
  ),
  grammarCloze(
    "u03-3-1-5",
    "3.1 · Sửa động từ",
    "Paul is never late. He's always starting work on time. → Paul is never late. He always __________ (start) work on time.",
    "starts",
    {
      explanation: "always + V (present simple) = thói quen bình thường, không mang nghĩa than phiền → starts.",
    },
  ),

  // 3.2 — Present continuous or present simple (paired sentences)
  grammarCloze(
    "u03-3-2-1",
    "3.2 · Continuous hay simple",
    "'__________ (you / listen) to the radio?' 'No, you can turn it off.'",
    "Are you listening",
    {
      alternatives: ["Are you listening?"],
      explanation: "Hỏi về việc đang xảy ra ngay lúc nói → continuous: Are you listening.",
    },
  ),
  grammarCloze(
    "u03-3-2-2",
    "3.2 · Continuous hay simple",
    "'__________ (you / listen) to the radio a lot?' 'No, not very often.'",
    "Do you listen",
    {
      alternatives: ["Do you listen?"],
      explanation: "'a lot' hỏi về mức độ thường xuyên nói chung → simple: Do you listen.",
    },
  ),
  grammarCloze(
    "u03-3-2-3",
    "3.2 · Continuous hay simple",
    "The river __________ (flow) very fast today — much faster than usual.",
    "is flowing",
    {
      alternatives: ["'s flowing"],
      explanation: "'today' + so sánh với bình thường → tình huống tạm thời hiện tại: is flowing.",
    },
  ),
  grammarCloze(
    "u03-3-2-4",
    "3.2 · Continuous hay simple",
    "I'm not very active. __________ (I / not / do) any sport.",
    "I don't do",
    {
      alternatives: ["I do not do"],
      explanation: "Sự thật chung về bản thân, không gắn thời điểm cụ thể → simple: don't do.",
    },
  ),
  grammarCloze(
    "u03-3-2-5",
    "3.2 · Continuous hay simple",
    "Rachel is in New York right now. __________ (she / always / stay) there when she's in New York.",
    "She always stays",
    {
      explanation: "always + V (simple) = thói quen mỗi lần cô ấy tới New York, không phải đang than phiền.",
    },
  ),

  // 3.3 — Present continuous or present simple
  grammarCloze(
    "u03-3-3-1",
    "3.3 · Continuous hay simple",
    "Julia is good at languages. __________ (she / speak) four languages very well.",
    "She speaks",
    {
      explanation: "Khả năng/sự thật chung về Julia → simple: speaks.",
    },
  ),
  grammarCloze(
    "u03-3-3-2",
    "3.3 · Continuous hay simple",
    "Are you ready yet? __________ (everybody / wait) for you.",
    "Everybody's waiting",
    {
      alternatives: ["Everybody is waiting"],
      explanation: "Việc đang xảy ra ngay lúc nói (mọi người đang chờ) → continuous: is waiting.",
    },
  ),
  grammarCloze(
    "u03-3-3-3",
    "3.3 · Continuous hay simple",
    "Kate __________ (not / work) this week. She's on holiday.",
    "isn't working",
    {
      alternatives: ["is not working"],
      explanation: "Tình huống tạm thời trong tuần này (đang nghỉ) → continuous phủ định: isn't working.",
    },
  ),
  grammarCloze(
    "u03-3-3-4",
    "3.3 · Continuous hay simple",
    "I think my English __________ (improve) slowly. It's better than it was.",
    "is improving",
    {
      explanation: "Sự thay đổi/tiến bộ đang diễn ra theo thời gian → continuous: is improving.",
    },
  ),
  grammarCloze(
    "u03-3-3-5",
    "3.3 · Continuous hay simple",
    "Nicola __________ (live) in Manchester. She has never lived anywhere else.",
    "lives",
    {
      explanation: "Tình huống lâu dài, cố định (chưa từng sống nơi khác) → simple: lives.",
    },
  ),
  grammarCloze(
    "u03-3-3-6",
    "3.3 · Continuous hay simple",
    "'What __________ (your father / do)?' 'He's an architect.'",
    "does your father do",
    {
      alternatives: ["does your father do?"],
      explanation: "Hỏi nghề nghiệp (sự thật chung) → simple: does your father do.",
    },
  ),

  // 3.4 — always + -ing to complain
  grammarCloze(
    "u03-3-4-1",
    "3.4 · always + -ing (than phiền)",
    "a: The car has broken down again. b: That car is useless. It __________ (break down).",
    "'s always breaking down",
    {
      alternatives: [
        "is always breaking down",
        "It's always breaking down",
        "It is always breaking down",
      ],
      explanation: "always + V-ing diễn tả việc xảy ra quá thường xuyên, mang tính than phiền: is always breaking down.",
    },
  ),
  grammarCloze(
    "u03-3-4-2",
    "3.4 · always + -ing (than phiền)",
    "a: Look! You've made the same mistake again. b: Oh no, not again! __________ (make) that mistake.",
    "I'm always making",
    {
      alternatives: ["I am always making"],
      explanation: "always + V-ing than phiền về việc lặp lại lỗi quá nhiều lần: I'm always making that mistake.",
    },
  ),
];
