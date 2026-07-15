import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 4 exercises — Present continuous and present simple 2 (English Grammar in Use · Intermediate).
 */
export const U04_PRESENT_CONTINUOUS_AND_PRESENT_SIMPLE_2_EXERCISES: readonly GrammarExercise[] = [
  // 4.1 — Present continuous or present simple
  grammarCloze(
    "u04-4-1-1",
    "4.1 · Continuous hay simple",
    "Alan says he's 90 years old, but nobody __________ (believe) him.",
    "believes",
    {
      explanation: "believe là động từ trạng thái → không dùng continuous, luôn ở simple: believes.",
    },
  ),
  grammarCloze(
    "u04-4-1-2",
    "4.1 · Continuous hay simple",
    "She told me her name, but __________ (I / not / remember) it now.",
    "I don't remember",
    {
      alternatives: ["I do not remember", "I can't remember", "I cannot remember"],
      explanation: "remember là động từ trạng thái → không dùng continuous: don't remember.",
    },
  ),
  grammarCloze(
    "u04-4-1-3",
    "4.1 · Continuous hay simple",
    "Don't put the dictionary away. __________ (I / use) it.",
    "I'm using",
    {
      alternatives: ["I am using"],
      explanation: "use không phải động từ trạng thái, hành động đang diễn ra ngay lúc nói → continuous: I'm using it.",
    },
  ),
  grammarCloze(
    "u04-4-1-4",
    "4.1 · Continuous hay simple",
    "Don't put the dictionary away. __________ (I / need) it.",
    "I need",
    {
      explanation: "need là động từ trạng thái → không dùng continuous, luôn ở simple: I need it.",
    },
  ),
  grammarCloze(
    "u04-4-1-5",
    "4.1 · Continuous hay simple",
    "Air __________ (consist) mainly of nitrogen and oxygen.",
    "consists",
    {
      explanation: "consist là động từ trạng thái (thành phần cấu tạo) → luôn simple: consists.",
    },
  ),
  grammarCloze(
    "u04-4-1-6",
    "4.1 · Continuous hay simple",
    "Who is that man? What __________ (he / want)?",
    "does he want",
    {
      alternatives: ["does he want?"],
      explanation: "want là động từ trạng thái → simple: does he want.",
    },
  ),
  grammarCloze(
    "u04-4-1-7",
    "4.1 · Continuous hay simple",
    "Who is that man? Why __________ (he / look) at us?",
    "is he looking",
    {
      alternatives: ["is he looking?"],
      explanation: "look (nhìn) không phải động từ trạng thái, hành động đang xảy ra → continuous: is he looking.",
    },
  ),
  grammarCloze(
    "u04-4-1-8",
    "4.1 · Continuous hay simple",
    "Who is that man? __________ (you / recognise) him?",
    "Do you recognise",
    {
      alternatives: ["Do you recognise him", "Do you recognise him?"],
      explanation: "recognise là động từ trạng thái → không dùng continuous: Do you recognise.",
    },
  ),
  grammarCloze(
    "u04-4-1-9",
    "4.1 · Continuous hay simple",
    "I can't make up my mind. What __________ (you / think) I should do?",
    "do you think",
    {
      alternatives: ["do you think?"],
      explanation: "think = 'có quan điểm' → dùng simple: do you think.",
    },
  ),
  grammarCloze(
    "u04-4-1-10",
    "4.1 · Continuous hay simple",
    "Gary wasn't well earlier, but __________ (he / seem) OK now.",
    "he seems",
    {
      explanation: "seem là động từ trạng thái → luôn simple: he seems.",
    },
  ),

  // 4.3 — Correct the underlined verbs
  grammarCloze(
    "u04-4-3-1",
    "4.3 · Sửa động từ",
    "It's not true. I'm not believing it. → It's not true. __________ (I / not / believe) it.",
    "I don't believe",
    {
      alternatives: ["I do not believe"],
      explanation: "believe là động từ trạng thái, không dùng continuous → phải sửa thành: I don't believe.",
    },
  ),
  grammarCloze(
    "u04-4-3-2",
    "4.3 · Sửa động từ",
    "I've never eaten that fruit. What is it tasting like? → What __________ (it / taste) like?",
    "does it taste",
    {
      alternatives: ["does it taste?"],
      explanation: "taste (vị) dùng simple, không dùng continuous → does it taste.",
    },
  ),
  grammarCloze(
    "u04-4-3-3",
    "4.3 · Sửa động từ",
    "Look over there. What are you seeing? → Look over there. What __________ (you / see)?",
    "do you see",
    {
      alternatives: ["do you see?"],
      explanation: "see dùng simple, không dùng continuous → do you see.",
    },
  ),

  // 4.4 — is/are being (continuous) or is/are (simple)
  grammarCloze(
    "u04-4-4-1",
    "4.4 · being hay is/are",
    "You'll like Sophie when you meet her. She __________ very nice.",
    "'s",
    {
      alternatives: ["is", "She's", "She is"],
      explanation: "Tính cách lâu dài (bản chất) của Sophie, không phải hành vi tạm thời → simple is, không dùng being.",
    },
  ),
  grammarCloze(
    "u04-4-4-2",
    "4.4 · being hay is/are",
    "Sarah __________ very nice to me at the moment. I wonder why.",
    "'s being",
    {
      alternatives: ["is being", "She's being", "She is being"],
      explanation: "'at the moment' → cách cư xử tạm thời có thể kiểm soát → am/is/are + being: is being.",
    },
  ),
  grammarCloze(
    "u04-4-4-3",
    "4.4 · being hay is/are",
    "They __________ very happy. They've just got married.",
    "'re",
    {
      alternatives: ["are", "They're", "They are"],
      explanation: "Hạnh phúc là trạng thái không kiểm soát được (không phải hành vi) → simple are, không dùng being.",
    },
  ),
  grammarCloze(
    "u04-4-4-4",
    "4.4 · being hay is/are",
    "You're normally very patient, so why __________ so unreasonable about waiting ten more minutes?",
    "are you being",
    {
      explanation: "Hành vi khác thường tạm thời lúc này (so với bình thường 'patient') → am/is/are + being: are you being.",
    },
  ),
  grammarCloze(
    "u04-4-4-5",
    "4.4 · being hay is/are",
    "Would you like something to eat? __________ hungry?",
    "Are you",
    {
      explanation: "Đói là trạng thái không kiểm soát được → simple Are you, không dùng being.",
    },
  ),
];
