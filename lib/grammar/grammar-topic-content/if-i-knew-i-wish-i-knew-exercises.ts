import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 39 exercises — if I knew … I wish I knew … (English Grammar in Use · Intermediate).
 * 39.4 open “write your own I wish…” skipped.
 */
export const U39_IF_I_KNEW_I_WISH_I_KNEW_EXERCISES: readonly GrammarExercise[] = [
  // 39.1 — verb forms (skip book examples 1–2)
  grammarCloze(
    "u39-1-3",
    "39.1 · would + V",
    "__________ you if I could, but I'm afraid I can't.",
    "I'd help",
    {
      alternatives: ["I would help", "I'd help you", "I would help you"],
      explanation: "Tưởng tượng hiện tại → I'd / I would help.",
    },
  ),
  grammarCloze(
    "u39-1-4",
    "39.1 · would + V",
    "This soup isn't very nice. __________ better if it wasn't so salty.",
    "It would taste",
    {
      alternatives: ["It'd taste", "would taste"],
      explanation: "Giả định vị ngon hơn → It would taste better.",
    },
  ),
  grammarCloze(
    "u39-1-5",
    "39.1 · if + past",
    "We live in a city and don't need a car, but we would need one if __________ in the country.",
    "we lived",
    {
      explanation: "Trái thực tế (hiện không sống nông thôn) → if we lived.",
    },
  ),
  grammarCloze(
    "u39-1-6",
    "39.1 · would + V",
    "If we had the choice, __________ in the country.",
    "we'd live",
    {
      alternatives: ["we would live"],
      explanation: "Mệnh đề chính → we'd / we would live.",
    },
  ),
  grammarCloze(
    "u39-1-7",
    "39.1 · if + were/was",
    "I'd make a lot of changes if __________ the manager of the company.",
    "I were",
    {
      alternatives: ["I was"],
      explanation: "Sau if: I were / I was (cả hai đúng).",
    },
  ),
  grammarCloze(
    "u39-1-8",
    "39.1 · if + past",
    "I wouldn't call someone in the middle of the night if __________ important.",
    "it wasn't",
    {
      alternatives: ["it weren't", "it was not", "it were not"],
      explanation: "If it wasn't / weren't important.",
    },
  ),
  grammarCloze(
    "u39-1-9a",
    "39.1 · wouldn't + V",
    "If I were you, __________ . I'd go now.",
    "I wouldn't wait",
    {
      alternatives: ["I would not wait"],
      explanation: "If I were you, I wouldn't wait.",
    },
  ),
  grammarCloze(
    "u39-1-9b",
    "39.1 · would + V",
    "If I were you, I wouldn't wait. __________ now.",
    "I'd go",
    {
      alternatives: ["I would go", "I'd go now", "I would go now"],
      explanation: "I'd / I would go now.",
    },
  ),

  // 39.2 — sentences with if …
  grammarCloze(
    "u39-2-2",
    "39.2 · if … would",
    "I like these shoes but they're too expensive. → __________ them if they weren't so expensive.",
    "I'd buy",
    {
      alternatives: [
        "I would buy",
        "I'd buy them if they weren't so expensive",
        "I would buy them if they weren't so expensive",
      ],
      explanation: "I'd / I would buy them if they weren't so expensive.",
    },
  ),
  grammarCloze(
    "u39-2-3",
    "39.2 · if … would",
    "We'd like to go on holiday, but we can't afford it. → __________ if we could afford it.",
    "We'd go on holiday",
    {
      alternatives: [
        "We would go on holiday",
        "We'd go on holiday if we could afford it",
        "We would go on holiday if we could afford it",
      ],
      explanation: "We'd / We would go on holiday if we could afford it.",
    },
  ),
  grammarCloze(
    "u39-2-4",
    "39.2 · if … could",
    "It would be nice to have lunch outside but it's raining. → We could have lunch outside if __________.",
    "it weren't raining",
    {
      alternatives: [
        "it wasn't raining",
        "it were not raining",
        "it was not raining",
      ],
      explanation: "if it weren't / wasn't raining.",
    },
  ),
  grammarCloze(
    "u39-2-5",
    "39.2 · if … would",
    "I don't want his advice, and that's why I'm not going to ask for it. → If I wanted his advice, __________.",
    "I'd ask for it",
    {
      alternatives: [
        "I would ask for it",
        "I'd ask for it.",
        "I would ask for it.",
      ],
      explanation: "If I wanted his advice, I'd / I would ask for it.",
    },
  ),

  // 39.3 — I wish …
  grammarCloze(
    "u39-3-2",
    "39.3 · I wish + past",
    "I don't have much free time. → __________",
    "I wish I had more free time",
    {
      alternatives: ["I wish I had more free time."],
      explanation: "Tiếc hiện tại → I wish I had more free time.",
    },
  ),
  grammarCloze(
    "u39-3-3",
    "39.3 · I wish + were/was",
    "Helen isn't here (and I need to see her). → __________",
    "I wish Helen were here",
    {
      alternatives: [
        "I wish Helen was here",
        "I wish Helen were here.",
        "I wish Helen was here.",
      ],
      explanation: "I wish Helen were/was here.",
    },
  ),
  grammarCloze(
    "u39-3-4",
    "39.3 · I wish + weren't",
    "It's cold (and I hate cold weather). → __________",
    "I wish it weren't so cold",
    {
      alternatives: [
        "I wish it wasn't so cold",
        "I wish it weren't cold",
        "I wish it wasn't cold",
        "I wish it weren't so cold.",
        "I wish it wasn't so cold.",
      ],
      explanation: "I wish it weren't/wasn't (so) cold.",
    },
  ),
  grammarCloze(
    "u39-3-5",
    "39.3 · I wish + didn't",
    "I live in a big city (and I don't like it). → __________",
    "I wish I didn't live in a big city",
    {
      alternatives: ["I wish I didn't live in a big city."],
      explanation: "I wish I didn't live in a big city.",
    },
  ),
  grammarCloze(
    "u39-3-6",
    "39.3 · I wish + could",
    "I can't find my phone. → __________",
    "I wish I could find my phone",
    {
      alternatives: ["I wish I could find my phone."],
      explanation: "I wish I could find my phone.",
    },
  ),
  grammarCloze(
    "u39-3-7",
    "39.3 · I wish + were/was",
    "I'm not feeling well. → __________",
    "I wish I was feeling better",
    {
      alternatives: [
        "I wish I were feeling better",
        "I wish I was feeling well",
        "I wish I were feeling well",
        "I wish I was feeling better.",
        "I wish I were feeling better.",
      ],
      explanation: "I wish I was/were feeling well/better.",
    },
  ),
  grammarCloze(
    "u39-3-8",
    "39.3 · I wish + didn't have to",
    "I have to get up early tomorrow. → __________",
    "I wish I didn't have to get up early tomorrow",
    {
      alternatives: ["I wish I didn't have to get up early tomorrow."],
      explanation: "I wish I didn't have to get up early tomorrow.",
    },
  ),
  grammarCloze(
    "u39-3-9",
    "39.3 · I wish + past",
    "I don't know much about science. → __________",
    "I wish I knew more about science",
    {
      alternatives: ["I wish I knew more about science."],
      explanation: "I wish I knew more about science.",
    },
  ),
];
