import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 28 exercises — must and can't (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover couldn't have where the key allows.
 */
export const U28_MUST_AND_CANT_EXERCISES: readonly GrammarExercise[] = [
  // 28.1 — must or can't
  grammarCloze(
    "u28-1-2",
    "28.1 · must / can't",
    "That restaurant __________ be very good. It's always full of people.",
    "must",
    {
      explanation: "Luôn đông khách → chắc chắn rất ngon → must be.",
    },
  ),
  grammarCloze(
    "u28-1-3",
    "28.1 · must / can't",
    "That restaurant __________ be very good. It's always empty.",
    "can't",
    {
      explanation: "Luôn vắng → chắc chắn không ngon → can't be.",
    },
  ),
  grammarCloze(
    "u28-1-4",
    "28.1 · must / can't",
    "I'm sure Kate gave me her address. I __________ have it somewhere.",
    "must",
    {
      explanation: "Chắc chắn còn địa chỉ đâu đó → must have it.",
    },
  ),
  grammarCloze(
    "u28-1-5",
    "28.1 · must / can't",
    "I often see that man in this street. He __________ live near here.",
    "must",
    {
      explanation: "Thường thấy → chắc sống gần đây → must live.",
    },
  ),
  grammarCloze(
    "u28-1-6",
    "28.1 · must / can't",
    "It rained every day during their holiday. It __________ have been very nice for them.",
    "can't",
    {
      explanation: "Mưa cả kỳ nghỉ → chắc không vui → can't have been.",
    },
  ),
  grammarCloze(
    "u28-1-7",
    "28.1 · must / can't",
    "Congratulations on passing your exam. You __________ be very pleased.",
    "must",
    {
      explanation: "Vừa đậu → chắc vui lắm → must be pleased.",
    },
  ),
  grammarCloze(
    "u28-1-8",
    "28.1 · must / can't",
    "This bill __________ be correct. It's much too high.",
    "can't",
    {
      explanation: "Hóa đơn cao bất thường → chắc sai → can't be correct.",
    },
  ),
  grammarCloze(
    "u28-1-9",
    "28.1 · must / can't",
    "You got here very quickly. You __________ have driven very fast.",
    "must",
    {
      explanation: "Đến nhanh → chắc lái nhanh → must have driven.",
    },
  ),
  grammarCloze(
    "u28-1-10",
    "28.1 · must / can't",
    "Bill and Sue always stay at five-star hotels. They __________ be short of money.",
    "can't",
    {
      explanation: "Luôn ở khách sạn 5 sao → chắc không thiếu tiền → can't be short of money.",
    },
  ),
  grammarCloze(
    "u28-1-11",
    "28.1 · must / can't",
    "Karen hasn't left the office yet. She __________ be working late tonight.",
    "must",
    {
      explanation: "Chưa về → chắc đang làm muộn → must be working.",
    },
  ),

  // 28.2 — verb after must
  grammarCloze(
    "u28-2-3",
    "28.2 · must + verb",
    "You've lived in this village a long time. You must __________ everybody who lives here.",
    "know",
    {
      explanation: "must + V → must know everybody.",
    },
  ),
  grammarCloze(
    "u28-2-4",
    "28.2 · must + verb",
    "I don't seem to have my wallet with me. I must __________ it at home.",
    "have left",
    {
      explanation: "Suy đoán quá khứ → must have left it at home.",
    },
  ),
  grammarCloze(
    "u28-2-5",
    "28.2 · must + verb",
    "'How old is Ed?' 'He's older than me. He must __________ at least 40.'",
    "be",
    {
      explanation: "Suy đoán tuổi → must be at least 40.",
    },
  ),
  grammarCloze(
    "u28-2-6",
    "28.2 · must + verb",
    "I didn't hear my phone. I must __________ asleep.",
    "have been",
    {
      explanation: "Suy đoán quá khứ → must have been asleep.",
    },
  ),
  grammarCloze(
    "u28-2-7",
    "28.2 · must + verb",
    "'You're going on holiday soon. You must __________ forward to it.' 'Yes, I am.'",
    "be looking",
    {
      explanation: "must + be -ing → must be looking forward to it.",
    },
  ),

  // 28.3 — must have / can't have sentences
  grammarCloze(
    "u28-3-3",
    "28.3 · must have / can't have",
    "The jacket you bought is very good quality. __________",
    "It must have been very expensive",
    {
      alternatives: ["It must have been very expensive."],
      explanation: "Chất lượng tốt → chắc đã đắt → It must have been very expensive.",
    },
  ),
  grammarCloze(
    "u28-3-4",
    "28.3 · must have / can't have",
    "I haven't seen our neighbours for the last few days. __________",
    "They must have gone away",
    {
      alternatives: ["They must have gone away."],
      explanation: "Mấy ngày không thấy → chắc đã đi xa → They must have gone away.",
    },
  ),
  grammarCloze(
    "u28-3-6",
    "28.3 · must have / can't have",
    "Amy was in a very difficult situation when she lost her job. __________",
    "It can't have been easy for her",
    {
      alternatives: [
        "It can't have been easy for her.",
        "It couldn't have been easy for her",
        "It couldn't have been easy for her.",
      ],
      explanation: "Mất việc khó khăn → chắc không dễ → can't/couldn't have been easy.",
    },
  ),
  grammarCloze(
    "u28-3-8",
    "28.3 · must have / can't have",
    "Rachel did the opposite of what I asked her to do. __________",
    "She can't have understood what I said",
    {
      alternatives: [
        "She can't have understood what I said.",
        "She couldn't have understood what I said",
        "She couldn't have understood what I said.",
      ],
      explanation: "Làm ngược lại → chắc không hiểu → can't/couldn't have understood.",
    },
  ),
  grammarCloze(
    "u28-3-11",
    "28.3 · must have / can't have",
    "The light was red, but the car didn't stop. __________",
    "The driver can't have seen the red light",
    {
      alternatives: [
        "The driver can't have seen the red light.",
        "The driver couldn't have seen the red light",
        "The driver couldn't have seen the red light.",
      ],
      explanation: "Không dừng đèn đỏ → chắc không thấy → can't/couldn't have seen.",
    },
  ),
];
