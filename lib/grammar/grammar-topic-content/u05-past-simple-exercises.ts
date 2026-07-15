import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 5 exercises — Past simple (English Grammar in Use · Intermediate).
 * Bài 5.1 gốc kể lại một ngày làm việc của Laura — giữ nguyên mạch tình huống,
 * chỉ chuyển thành các câu cloze độc lập.
 */
export const U05_PAST_SIMPLE_EXERCISES: readonly GrammarExercise[] = [
  // 5.1 — Laura's typical working day, told in the past
  grammarCloze(
    "u05-5-1-1",
    "5.1 · Một ngày của Laura",
    "Laura usually has a big breakfast. Yesterday she __________ (have) a big breakfast.",
    "had",
    {
      explanation: "have là động từ bất quy tắc: have → had.",
    },
  ),
  grammarCloze(
    "u05-5-1-2",
    "5.1 · Một ngày của Laura",
    "Laura usually walks to work. Yesterday she __________ (walk) to work.",
    "walked",
    {
      explanation: "walk là động từ quy tắc: walk + -ed = walked.",
    },
  ),
  grammarCloze(
    "u05-5-1-3",
    "5.1 · Một ngày của Laura",
    "It usually takes her half an hour to get to work. Yesterday __________ (it / take) her about half an hour.",
    "it took",
    {
      alternatives: ["It took"],
      explanation: "take là động từ bất quy tắc: take → took.",
    },
  ),
  grammarCloze(
    "u05-5-1-4",
    "5.1 · Một ngày của Laura",
    "Laura starts work at 8.45. Yesterday __________ (she / start) work at 8.45.",
    "she started",
    {
      alternatives: ["She started"],
      explanation: "start là động từ quy tắc: start + -ed = started.",
    },
  ),
  grammarCloze(
    "u05-5-1-5",
    "5.1 · Một ngày của Laura",
    "Laura never has lunch. Yesterday __________ (she / not / have) lunch.",
    "she didn't have",
    {
      alternatives: ["She didn't have", "she did not have", "She did not have"],
      explanation: "Phủ định past simple: didn't + have (nguyên thể).",
    },
  ),
  grammarCloze(
    "u05-5-1-6",
    "5.1 · Một ngày của Laura",
    "Laura finishes work at 5 o'clock. Yesterday __________ (she / finish) work at 5 o'clock.",
    "she finished",
    {
      alternatives: ["She finished"],
      explanation: "finish là động từ quy tắc: finish + -ed = finished.",
    },
  ),
  grammarCloze(
    "u05-5-1-7",
    "5.1 · Một ngày của Laura",
    "Laura is always tired when she gets home. Yesterday __________ (she / be) tired when she got home.",
    "she was",
    {
      alternatives: ["She was"],
      explanation: "be ở quá khứ chia riêng: I/he/she/it → was.",
    },
  ),
  grammarCloze(
    "u05-5-1-8",
    "5.1 · Một ngày của Laura",
    "Laura usually cooks a meal in the evening. Yesterday evening __________ (she / cook) a meal.",
    "she cooked",
    {
      alternatives: ["She cooked", "she made", "She made"],
      explanation: "cook là động từ quy tắc: cook + -ed = cooked.",
    },
  ),

  // 5.2 — Irregular verbs
  grammarCloze(
    "u05-5-2-1",
    "5.2 · Động từ bất quy tắc",
    "'How did you learn to drive?' 'My father __________ (teach) me.'",
    "taught",
    {
      explanation: "teach là động từ bất quy tắc: teach → taught.",
    },
  ),
  grammarCloze(
    "u05-5-2-2",
    "5.2 · Động từ bất quy tắc",
    "We couldn't afford to keep our car, so we __________ (sell) it.",
    "sold",
    {
      explanation: "sell là động từ bất quy tắc: sell → sold.",
    },
  ),
  grammarCloze(
    "u05-5-2-3",
    "5.2 · Động từ bất quy tắc",
    "Dave fell down the stairs this morning and __________ (hurt) his leg.",
    "hurt",
    {
      explanation: "hurt là động từ bất quy tắc, giữ nguyên ở quá khứ: hurt → hurt.",
    },
  ),
  grammarCloze(
    "u05-5-2-4",
    "5.2 · Động từ bất quy tắc",
    "Joe threw the ball to Sue, who __________ (catch) it.",
    "caught",
    {
      explanation: "catch là động từ bất quy tắc: catch → caught.",
    },
  ),
  grammarCloze(
    "u05-5-2-5",
    "5.2 · Động từ bất quy tắc",
    "Kate spent a lot of money yesterday. She bought a dress which __________ (cost) £100.",
    "cost",
    {
      explanation: "cost là động từ bất quy tắc, giữ nguyên ở quá khứ: cost → cost.",
    },
  ),

  // 5.3 — Questions about a holiday
  grammarCloze(
    "u05-5-3-1",
    "5.3 · Đặt câu hỏi",
    "YOU: __________ (where / you / go)? JAMES: To the US.",
    "Where did you go",
    {
      alternatives: ["Where did you go?"],
      explanation: "Câu hỏi past simple: Where + did + S + V nguyên thể?",
    },
  ),
  grammarCloze(
    "u05-5-3-2",
    "5.3 · Đặt câu hỏi",
    "YOU: __________ (how / you / travel)? By car? JAMES: We hired a car in San Francisco.",
    "How did you travel",
    {
      alternatives: ["How did you travel?", "How did you go", "How did you go?"],
      explanation: "How + did + you + travel? hỏi cách thức đi lại trong quá khứ.",
    },
  ),
  grammarCloze(
    "u05-5-3-3",
    "5.3 · Đặt câu hỏi",
    "YOU: It's a long way to drive. __________ (how long / it / take)? JAMES: Two weeks.",
    "how long did it take",
    {
      alternatives: ["How long did it take", "How long did it take?"],
      explanation: "How long + did + it + take? hỏi khoảng thời gian đã mất.",
    },
  ),
  grammarCloze(
    "u05-5-3-4",
    "5.3 · Đặt câu hỏi",
    "YOU: __________ (where / you / stay)? In hotels? JAMES: Yes, small hotels or motels.",
    "Where did you stay",
    {
      alternatives: ["Where did you stay?"],
      explanation: "Where + did + you + stay? hỏi nơi ở trong quá khứ.",
    },
  ),

  // 5.4 — Positive or negative past simple
  grammarCloze(
    "u05-5-4-1",
    "5.4 · Khẳng định / phủ định",
    "The film wasn't very good. __________ (not / enjoy) it much.",
    "I didn't enjoy",
    {
      alternatives: ["I did not enjoy"],
      explanation: "Phủ định past simple: didn't + enjoy (nguyên thể).",
    },
  ),
  grammarCloze(
    "u05-5-4-2",
    "5.4 · Khẳng định / phủ định",
    "We were very tired, so __________ (leave) the party early.",
    "we left",
    {
      alternatives: ["We left"],
      explanation: "leave là động từ bất quy tắc: leave → left.",
    },
  ),
];
