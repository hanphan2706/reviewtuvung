import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 103 exercises — Enough and Too (English Grammar in Use · Intermediate).
 */

/** 103.1 — enough + word from the box. */
const U103_1_ENOUGH_BANK = [
  "buses",
  "chairs",
  "cups",
  "hard",
  "room",
  "tall",
  "time",
  "vegetables",
  "warm",
  "wide",
] as const;

export const U103_ENOUGH_AND_TOO_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u103-1-3",
    "103.1 · enough",
    "Public transport isn't good here. There aren't __________.",
    "enough buses",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "enough + noun: enough buses.",
    },
  ),
  grammarCloze(
    "u103-1-4",
    "103.1 · enough",
    "I can't park the car here. The space isn't __________.",
    "wide enough",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "adj + enough: wide enough.",
    },
  ),
  grammarCloze(
    "u103-1-5",
    "103.1 · enough",
    "I always have to rush. There's never __________.",
    "enough time",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "enough time.",
    },
  ),
  grammarCloze(
    "u103-1-6",
    "103.1 · enough",
    "You need to change your diet. You don't eat __________.",
    "enough vegetables",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "enough vegetables.",
    },
  ),
  grammarCloze(
    "u103-1-7",
    "103.1 · enough",
    "I'm not good at basketball. I'm not __________.",
    "tall enough",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "tall enough.",
    },
  ),
  grammarCloze(
    "u103-1-8",
    "103.1 · enough",
    "Do you think there's __________ for five of us?",
    "enough room",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "enough room.",
    },
  ),
  grammarCloze(
    "u103-1-9",
    "103.1 · enough",
    "Are you __________? Or shall I switch on the heating?",
    "warm enough",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "warm enough.",
    },
  ),
  grammarCloze(
    "u103-1-10",
    "103.1 · enough",
    "We can't all have coffee at the same time. We don't have __________.",
    "enough cups",
    {
      choiceBank: U103_1_ENOUGH_BANK,
      explanation: "enough cups.",
    },
  ),
  grammarCloze(
    "u103-2-2",
    "103.2 · too / enough + to",
    "I need to talk to you. — Well, I'm afraid I'm __________ to you now. (busy)",
    "too busy to talk",
    {
      explanation: "too busy to talk…",
    },
  ),
  grammarCloze(
    "u103-2-3",
    "103.2 · too / enough + to",
    "Let's go to the cinema. — No, it's __________ to the cinema. (late)",
    "too late to go",
    {
      explanation: "too late to go…",
    },
  ),
  grammarCloze(
    "u103-2-4",
    "103.2 · too / enough + to",
    "Why don't we sit outside? — It's not __________ outside. (warm)",
    "warm enough to sit",
    {
      explanation: "warm enough to sit…",
    },
  ),
  grammarCloze(
    "u103-2-5",
    "103.2 · too / enough + to",
    "Would you like to be a politician? — No, I'm __________ a politician. (shy)",
    "too shy to be",
    {
      explanation: "too shy to be…",
    },
  ),
  grammarCloze(
    "u103-2-6",
    "103.2 · too / enough + to",
    "Would you like to be a teacher? — No, I don't have __________ a teacher. (patience)",
    "enough patience to be",
    {
      explanation: "enough patience to be…",
    },
  ),
  grammarCloze(
    "u103-2-7",
    "103.2 · too / enough + to",
    "Did you hear what he was saying? — No, we were __________ what he was saying. (far away)",
    "too far away to hear",
    {
      explanation: "too far away to hear…",
    },
  ),
  grammarCloze(
    "u103-2-8",
    "103.2 · too / enough + to",
    "Can he read a newspaper in English? — No, he doesn't know __________ a newspaper. (English)",
    "enough English to read",
    {
      explanation: "enough English to read…",
    },
  ),
  grammarCloze(
    "u103-3-2",
    "103.3 · too / enough + to",
    "I can't drink this coffee. It's too hot. → This coffee is __________.",
    "too hot to drink",
    {
      explanation: "too hot to drink (không: to drink it).",
    },
  ),
  grammarCloze(
    "u103-3-3",
    "103.3 · too / enough + to",
    "Nobody could move the piano. → The piano __________.",
    "was too heavy to move",
    {
      explanation: "was too heavy to move.",
    },
  ),
  grammarCloze(
    "u103-3-4",
    "103.3 · too / enough + to",
    "Don't eat these apples. → These apples __________.",
    "aren't ripe enough to eat",
    {
      alternatives: ["are not ripe enough to eat"],
      explanation: "aren't ripe enough to eat.",
    },
  ),
  grammarCloze(
    "u103-3-6",
    "103.3 · too / enough + to",
    "We couldn't climb over the wall. → The wall __________.",
    "was too high to climb over",
    {
      explanation: "was too high to climb over.",
    },
  ),
  grammarCloze(
    "u103-3-7",
    "103.3 · too / enough + to",
    "Three people can't sit on this sofa. → This sofa __________.",
    "isn't big enough for three people",
    {
      alternatives: [
        "is not big enough for three people",
        "isn't big enough for three people to sit on",
        "is not big enough for three people to sit on",
      ],
      explanation: "isn't big enough for three people (to sit on).",
    },
  ),
];
