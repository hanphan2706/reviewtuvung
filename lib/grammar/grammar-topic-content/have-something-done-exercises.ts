import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 46 exercises — Have something done (English Grammar in Use · Intermediate).
 */
export const U46_HAVE_SOMETHING_DONE_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u46-2-2",
    "46.2 · word order",
    "(serviced / car / once a year / her / has) → Sarah __________",
    "has her car serviced once a year",
    {
      alternatives: [
        "Sarah has her car serviced once a year",
        "Sarah has her car serviced once a year.",
      ],
      explanation: "Sarah has her car serviced once a year.",
    },
  ),
  grammarCloze(
    "u46-2-3",
    "46.2 · word order",
    "(had / your / recently / tested / eyes / you?) → __________",
    "Have you had your eyes tested recently?",
    {
      alternatives: ["Have you had your eyes tested recently"],
      explanation: "Have you had your eyes tested recently?",
    },
  ),
  grammarCloze(
    "u46-2-4",
    "46.2 · word order",
    "(like / cut / my / having / don't / hair) → I __________",
    "don't like having my hair cut",
    {
      alternatives: [
        "I don't like having my hair cut",
        "I don't like having my hair cut.",
      ],
      explanation: "I don't like having my hair cut.",
    },
  ),
  grammarCloze(
    "u46-2-5",
    "46.2 · word order",
    "(fifteen pounds / have / cleaned / my suit / cost / to) → It __________",
    "cost fifteen pounds to have my suit cleaned",
    {
      alternatives: [
        "It cost fifteen pounds to have my suit cleaned",
        "It cost fifteen pounds to have my suit cleaned.",
      ],
      explanation: "It cost fifteen pounds to have my suit cleaned.",
    },
  ),
  grammarCloze(
    "u46-2-6",
    "46.2 · word order",
    "(as soon as possible / need / translated / to get / this document) → You __________",
    "need to get this document translated as soon as possible",
    {
      alternatives: [
        "You need to get this document translated as soon as possible",
        "You need to get this document translated as soon as possible.",
      ],
      explanation: "You need to get this document translated as soon as possible.",
    },
  ),
  grammarCloze(
    "u46-3-2",
    "46.3 · have it/them done",
    "I didn't cut my hair myself. I __________",
    "had it cut",
    {
      alternatives: ["I had it cut", "I had it cut."],
      explanation: "I had it cut.",
    },
  ),
  grammarCloze(
    "u46-3-3",
    "46.3 · have it/them done",
    "We didn't clean the carpets ourselves. We __________",
    "had them cleaned",
    {
      alternatives: ["We had them cleaned", "We had them cleaned."],
      explanation: "We had them cleaned.",
    },
  ),
  grammarCloze(
    "u46-3-4",
    "46.3 · have it/them done",
    "Ben didn't build that wall himself. He __________",
    "had it built",
    {
      alternatives: ["He had it built", "He had it built."],
      explanation: "He had it built.",
    },
  ),
  grammarCloze(
    "u46-3-5",
    "46.3 · have it/them done",
    "I didn't deliver the flowers myself. I __________",
    "had them delivered",
    {
      alternatives: ["I had them delivered", "I had them delivered."],
      explanation: "I had them delivered.",
    },
  ),
  grammarCloze(
    "u46-3-6",
    "46.3 · have it/them done",
    "Sarah didn't repair her shoes herself. She __________",
    "had them repaired",
    {
      alternatives: ["She had them repaired", "She had them repaired."],
      explanation: "She had them repaired.",
    },
  ),
  grammarCloze(
    "u46-4-2",
    "46.4 · get something done",
    "I really like this picture. → I'm going to __________",
    "get it framed",
    {
      alternatives: [
        "I'm going to get it framed",
        "I'm going to get it framed.",
        "get it framed.",
      ],
      explanation: "I'm going to get it framed. (match f)",
    },
  ),
  grammarCloze(
    "u46-4-3",
    "46.4 · get something done",
    "The washing machine is broken. → I need to __________",
    "get it fixed",
    {
      alternatives: ["I need to get it fixed", "I need to get it fixed."],
      explanation: "I need to get it fixed. (match a)",
    },
  ),
  grammarCloze(
    "u46-4-4",
    "46.4 · get something done",
    "I want to wear earrings. → I'm going to __________",
    "get my ears pierced",
    {
      alternatives: [
        "I'm going to get my ears pierced",
        "I'm going to get my ears pierced.",
      ],
      explanation: "I'm going to get my ears pierced. (match e)",
    },
  ),
  grammarCloze(
    "u46-4-6",
    "46.4 · get something done",
    "I've lost my key. → I'll have to __________",
    "get a new one made",
    {
      alternatives: [
        "I'll have to get a new one made",
        "I'll have to get a new one made.",
      ],
      explanation: "I'll have to get a new one made. (match b)",
    },
  ),
  grammarCloze(
    "u46-5-2",
    "46.5 · had something done (experience)",
    "Security at the airport was strict. (We / our bags / search) → __________",
    "We had our bags searched",
    {
      alternatives: ["We had our bags searched."],
      explanation: "We had our bags searched.",
    },
  ),
  grammarCloze(
    "u46-5-3",
    "46.5 · had something done (experience)",
    "I've had some good news! (I / my salary / increase) → I __________",
    "I've had my salary increased",
    {
      alternatives: [
        "I had my salary increased",
        "I've had my salary increased.",
        "I had my salary increased.",
        "had my salary increased",
      ],
      explanation: "I've had / I had my salary increased.",
    },
  ),
  grammarCloze(
    "u46-5-4",
    "46.5 · had something done (experience)",
    "Joe can't get a visa. (He / his application / refuse) → __________",
    "He's had his application refused",
    {
      alternatives: [
        "He had his application refused",
        "He's had his application refused.",
        "He had his application refused.",
      ],
      explanation: "He's had / He had his application refused.",
    },
  ),
  grammarCloze(
    "u46-5-1",
    "46.5 · had something done (experience)",
    "(They / their bags / steal) → They __________",
    "had their bags stolen",
    {
      alternatives: [
        "They had their bags stolen",
        "They had their bags stolen.",
      ],
      explanation: "They had their bags stolen.",
    },
  ),
];
