import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 41 exercises — Wish (English Grammar in Use · Intermediate).
 */
export const U41_WISH_EXERCISES: readonly GrammarExercise[] = [
  // 41.1 — wish(ed) or hope(d)
  grammarCloze(
    "u41-1-2",
    "41.1 · wish / hope",
    "Enjoy your holiday. I __________ you have a great time.",
    "hope",
    {
      explanation: "Muốn việc xảy ra → hope (không: wish you have).",
    },
  ),
  grammarCloze(
    "u41-1-3",
    "41.1 · wish / hope",
    "Goodbye. I __________ you all the best for the future.",
    "wish",
    {
      explanation: "wish somebody all the best.",
    },
  ),
  grammarCloze(
    "u41-1-4",
    "41.1 · wish / hope",
    "We said goodbye to each other and __________ each other luck.",
    "wished",
    {
      explanation: "quá khứ: wished each other luck.",
    },
  ),
  grammarCloze(
    "u41-1-5",
    "41.1 · wish / hope",
    "We're going to have a picnic tomorrow, so I __________ the weather is nice.",
    "hope",
    {
      explanation: "Muốn thời tiết đẹp → hope.",
    },
  ),
  grammarCloze(
    "u41-1-6",
    "41.1 · wish / hope",
    "Congratulations on your new job. I __________ you every success.",
    "wish",
    {
      explanation: "wish somebody every success.",
    },
  ),
  grammarCloze(
    "u41-1-7",
    "41.1 · wish / hope",
    "Good luck in your new job. I __________ it works out well for you.",
    "hope",
    {
      explanation: "hope + mệnh đề (không: wish it works).",
    },
  ),

  // 41.2 — complete with wish forms
  grammarCloze(
    "u41-2-2",
    "41.2 · wish + past",
    "I'm very tired and I have so much to do. I wish I __________ so tired.",
    "wasn't",
    {
      alternatives: ["weren't", "was not", "were not"],
      explanation: "Tiếc hiện tại → I wish I wasn't/weren't so tired.",
    },
  ),
  grammarCloze(
    "u41-2-3",
    "41.2 · wish + had",
    "You didn't tell me you were ill. I wish you __________ me.",
    "had told",
    {
      alternatives: ["'d told"],
      explanation: "Tiếc quá khứ → I wish you had/'d told me.",
    },
  ),
  grammarCloze(
    "u41-2-4",
    "41.2 · wish + past",
    "I don't have enough free time. I wish I __________ more free time.",
    "had",
    {
      alternatives: ["could have"],
      explanation: "I wish I had / could have more free time.",
    },
  ),
  grammarCloze(
    "u41-2-5",
    "41.2 · wish + could",
    "I can't make up my mind what to do. I wish I __________ decide.",
    "could",
    {
      explanation: "I wish I could decide.",
    },
  ),
  grammarCloze(
    "u41-2-6",
    "41.2 · wish + hadn't",
    "I bought these shoes, but now I don't like them. I wish I __________ them.",
    "hadn't bought",
    {
      alternatives: ["had not bought"],
      explanation: "I wish I hadn't bought them.",
    },
  ),

  // 41.3 — I wish … would / wouldn't
  grammarCloze(
    "u41-3-2",
    "41.3 · wish + would",
    "You're waiting for Jane. She's late. → I wish she __________.",
    "would come",
    {
      alternatives: ["would hurry up", "would come.", "would hurry up."],
      explanation: "I wish she would come / would hurry up.",
    },
  ),
  grammarCloze(
    "u41-3-3",
    "41.3 · wish + would",
    "Nobody will give you a job. → I wish somebody __________.",
    "would give me a job",
    {
      alternatives: [
        "would give me a job.",
        "I wish somebody would give me a job",
        "I wish somebody would give me a job.",
      ],
      explanation: "I wish somebody would give me a job.",
    },
  ),
  grammarCloze(
    "u41-3-4",
    "41.3 · wish + would",
    "A dog has been barking a long time. → __________",
    "I wish the dog would stop barking",
    {
      alternatives: [
        "I wish that dog would stop barking",
        "I wish the dog would stop barking.",
        "I wish that dog would stop barking.",
      ],
      explanation: "I wish the/that dog would stop barking.",
    },
  ),
  grammarCloze(
    "u41-3-5",
    "41.3 · wish + wouldn't",
    "Your friend always drives very fast. → I wish you __________.",
    "wouldn't drive so fast",
    {
      alternatives: [
        "would not drive so fast",
        "I wish you wouldn't drive so fast",
        "I wish you wouldn't drive so fast.",
      ],
      explanation: "I wish you wouldn't drive so fast.",
    },
  ),
  grammarCloze(
    "u41-3-6",
    "41.3 · wish + wouldn't",
    "Joe leaves the door open all the time. → __________",
    "I wish you wouldn't leave the door open",
    {
      alternatives: [
        "I wish you wouldn't leave the door open all the time",
        "I wish you wouldn't leave the door open.",
        "I wish you wouldn't leave the door open all the time.",
      ],
      explanation: "I wish you wouldn't leave the door open (all the time).",
    },
  ),
  grammarCloze(
    "u41-3-7",
    "41.3 · wish + wouldn't",
    "People drop litter in the street. → __________",
    "I wish people wouldn't drop litter in the street",
    {
      alternatives: ["I wish people wouldn't drop litter in the street."],
      explanation: "I wish people wouldn't drop litter in the street.",
    },
  ),

  // 41.4 — mixed wish forms
  grammarCloze(
    "u41-4-3",
    "41.4 · wish + past",
    "It's a difficult question. I wish __________ the answer.",
    "I knew",
    {
      explanation: "Tiếc hiện tại → I wish I knew the answer.",
    },
  ),
  grammarCloze(
    "u41-4-4",
    "41.4 · wish + hadn't",
    "I really didn't enjoy the party. I wish __________.",
    "we hadn't gone",
    {
      alternatives: ["we had not gone"],
      explanation: "I wish we hadn't gone.",
    },
  ),
  grammarCloze(
    "u41-4-5",
    "41.4 · wish + would",
    "I wish __________ . We've been waiting for 20 minutes.",
    "the bus would come",
    {
      explanation: "I wish the bus would come.",
    },
  ),
];
