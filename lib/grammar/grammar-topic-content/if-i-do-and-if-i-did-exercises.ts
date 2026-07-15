import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 38 exercises — if I do … and if I did … (English Grammar in Use · Intermediate).
 * 38.2 letter choices converted to cloze with the keyed verb form.
 */
export const U38_IF_I_DO_AND_IF_I_DID_EXERCISES: readonly GrammarExercise[] = [
  // 38.1 — if + past word bank
  grammarCloze(
    "u38-1-2",
    "38.1 · if + past",
    "Be careful with that vase. If you __________ it, it would break into small pieces.",
    "dropped",
    {
      explanation: "Không kỳ vọng làm rơi → if + past: dropped.",
    },
  ),
  grammarCloze(
    "u38-1-3",
    "38.1 · if + past",
    "This notebook is very important to me. I'd be very upset if I __________ it.",
    "lost",
    {
      explanation: "Tưởng tượng mất sổ → if + past: lost.",
    },
  ),
  grammarCloze(
    "u38-1-4",
    "38.1 · if + past",
    "I don't expect to lose my job but if that __________, I'd have to find another one.",
    "happened",
    {
      explanation: "Không kỳ vọng mất việc → if that happened.",
    },
  ),
  grammarCloze(
    "u38-1-5",
    "38.1 · if + past",
    "We're thinking about our holiday for next year. If we __________ to Italy, would you come with us?",
    "went",
    {
      explanation: "Giả định kỳ nghỉ → If we went to Italy…",
    },
  ),
  grammarCloze(
    "u38-1-6",
    "38.1 · if + past",
    "I don't think he'll fail the exam. I'd be very surprised if he __________.",
    "did",
    {
      explanation: "Không kỳ vọng trượt → if he did.",
    },
  ),
  grammarCloze(
    "u38-1-7",
    "38.1 · if + past",
    "If there __________ a fire in the building, would you know how to put the fire out?",
    "was",
    {
      explanation: "Không kỳ vọng cháy → If there was a fire…",
    },
  ),

  // 38.2 — converted from a/b choices (correct keyed form)
  grammarCloze(
    "u38-2-1",
    "38.2 · if + past (không kỳ vọng)",
    "You don't expect to win the lottery: If I __________ the lottery, I'd buy a big house.",
    "won",
    {
      explanation: "Không kỳ vọng thắng → if + past: won (không: If I win… I'll…).",
    },
  ),
  grammarCloze(
    "u38-2-2",
    "38.2 · if + past (không bán)",
    "You're not going to sell your car: If I __________ my car, I wouldn't get much money for it.",
    "sold",
    {
      explanation: "Không định bán → if + past: sold.",
    },
  ),
  grammarCloze(
    "u38-2-3",
    "38.2 · if + present (có thể)",
    "You often see Sarah. A friend wants to contact her: If I __________ Sarah, I'll tell her to call you.",
    "see",
    {
      explanation: "Có thể gặp Sarah → if + present + will: If I see… I'll tell…",
    },
  ),
  grammarCloze(
    "u38-2-4",
    "38.2 · if + past (không kỳ vọng)",
    "You don't expect a fire: What would you do if there __________ a fire in the building?",
    "was",
    {
      alternatives: ["were"],
      explanation: "Không kỳ vọng cháy → What would you do if there was…",
    },
  ),
  grammarCloze(
    "u38-2-5",
    "38.2 · if + past (tưởng tượng)",
    "You've never lost your passport: I don't know what I'd do if I __________ my passport.",
    "lost",
    {
      explanation: "Chỉ tưởng tượng → if I lost (không: if I lose… I'll…).",
    },
  ),
  grammarCloze(
    "u38-2-6",
    "38.2 · if + present (chỉ đường)",
    "Somebody asks the way to a bank: If you __________ right at the end of this street, you'll see a bank on your left.",
    "go",
    {
      explanation: "Hướng dẫn thật → if + present + will: If you go… you'll see…",
    },
  ),
  grammarCloze(
    "u38-2-7",
    "38.2 · if + past (không nhấn nút)",
    "Nobody is going to press the emergency button: What would happen if somebody __________ that button?",
    "pressed",
    {
      explanation: "Không ai nhấn → if + past: pressed.",
    },
  ),

  // 38.3 — complete the sentences
  grammarCloze(
    "u38-3-2",
    "38.3 · if + past",
    "I can't afford to buy a car. If __________ a car, I'd have to borrow the money.",
    "I bought",
    {
      explanation: "Không đủ tiền → If I bought a car…",
    },
  ),
  grammarCloze(
    "u38-3-3",
    "38.3 · would + V",
    "If you had a party, who __________?",
    "would you invite",
    {
      explanation: "Mệnh đề chính → would you invite?",
    },
  ),
  grammarCloze(
    "u38-3-4",
    "38.3 · if + past",
    "Don't lend James your car. If __________ me, I wouldn't lend him mine.",
    "he asked",
    {
      explanation: "If he asked me… (không: if he would ask).",
    },
  ),

  // 38.4 — Write sentences beginning If …
  grammarCloze(
    "u38-4-2",
    "38.4 · If … would",
    "We're not going to stay at a hotel. (it / cost too much) → __________",
    "If we stayed at a hotel, it would cost too much",
    {
      alternatives: [
        "If we stayed at a hotel, it would cost too much.",
        "If we stayed at a hotel it would cost too much",
      ],
      explanation: "Không ở khách sạn → If we stayed…, it would cost too much.",
    },
  ),
  grammarCloze(
    "u38-4-3",
    "38.4 · If … would",
    "There's no point in telling you what happened. (you / not / believe) → __________",
    "If I told you what happened, you wouldn't believe me",
    {
      alternatives: [
        "If I told you what happened, you wouldn't believe me.",
        "If I told you what happened, you wouldn't believe it",
        "If I told you what happened, you wouldn't believe it.",
      ],
      explanation: "Không kể → If I told you…, you wouldn't believe me/it.",
    },
  ),
  grammarCloze(
    "u38-4-4",
    "38.4 · If … would",
    "Sally has no plans to leave her job. (it / hard to find another one) → __________",
    "If she left her job, it would be hard to find another one",
    {
      alternatives: ["If she left her job, it would be hard to find another one."],
      explanation: "Không bỏ việc → If she left…, it would be hard…",
    },
  ),
  grammarCloze(
    "u38-4-5",
    "38.4 · If … would",
    "Kevin is not going to apply for the job. (he / not / get it) → __________",
    "If he applied for the job, he wouldn't get it",
    {
      alternatives: ["If he applied for the job, he wouldn't get it."],
      explanation: "Không nộp đơn → If he applied…, he wouldn't get it.",
    },
  ),
];
