import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 113 exercises — Although / though / even though / in spite of / despite
 * (English Grammar in Use · Intermediate).
 */
export const U113_ALTHOUGH_THOUGH_EVEN_THOUGH_IN_SPITE_OF_DESPITE_EXERCISES: readonly GrammarExercise[] =
  [
    grammarCloze(
      "u113-1-1",
      "113.1 · although",
      "__________ , she isn't well-paid.",
      "Although she has a very important job",
      { explanation: "Although + S + V." },
    ),
    grammarCloze(
      "u113-1-2",
      "113.1 · although",
      "__________ , I recognised her from a photo.",
      "Although I had never seen her before",
      { explanation: "Although I had never seen her before." },
    ),
    grammarCloze(
      "u113-1-3",
      "113.1 · although",
      "Sarah wasn't wearing a coat __________.",
      "although it was quite cold",
      { explanation: "although it was quite cold." },
    ),
    grammarCloze(
      "u113-1-4",
      "113.1 · although",
      "We decided to invite them to the party __________.",
      "although we don't like them very much",
      { explanation: "although we don't like them very much." },
    ),
    grammarCloze(
      "u113-1-5",
      "113.1 · although",
      "__________ , I managed to make myself understood.",
      "Although I didn't speak the language well",
      { explanation: "Although I didn't speak the language well." },
    ),
    grammarCloze(
      "u113-1-6",
      "113.1 · although",
      "__________ , the room wasn't warm.",
      "Although the heating was on",
      { explanation: "Although the heating was on." },
    ),
    grammarCloze(
      "u113-2-1",
      "113.2 · although / in spite of / because",
      "__________ it rained a lot, we had a good time.",
      "Although",
      { explanation: "Although + mệnh đề." },
    ),
    grammarCloze(
      "u113-2-2a",
      "113.2 · although / in spite of / because",
      "__________ all our careful plans, a lot of things went wrong.",
      "In spite of",
      {
        alternatives: ["Despite"],
        explanation: "In spite of / Despite + noun.",
      },
    ),
    grammarCloze(
      "u113-2-2b",
      "113.2 · although / in spite of / because",
      "__________ we'd planned everything carefully, a lot of things went wrong.",
      "Although",
      { explanation: "Although + S + V." },
    ),
    grammarCloze(
      "u113-2-3b",
      "113.2 · although / in spite of / because",
      "I went to work the next day __________ I was still feeling unwell.",
      "although",
      { explanation: "although (tương phản)." },
    ),
    grammarCloze(
      "u113-2-4a",
      "113.2 · although / in spite of / because",
      "Chris only accepted the job __________ the salary, which was very high.",
      "because of",
      { explanation: "because of + noun (lý do)." },
    ),
    grammarCloze(
      "u113-2-4b",
      "113.2 · although / in spite of / because",
      "Sam accepted the job __________ the salary, which was rather low.",
      "in spite of",
      {
        alternatives: ["despite"],
        explanation: "in spite of / despite the low salary.",
      },
    ),
    grammarCloze(
      "u113-2-5b",
      "113.2 · although / in spite of / because",
      "I couldn't get to sleep __________ the noise.",
      "because of",
      { explanation: "because of the noise." },
    ),
    grammarCloze(
      "u113-3-1",
      "113.3 · despite / in spite of",
      "I couldn't sleep __________ very tired.",
      "despite being",
      { explanation: "despite + -ing (không: despite I was)." },
    ),
    grammarCloze(
      "u113-3-2",
      "113.3 · despite / in spite of",
      "__________ playing quite well, we lost the game.",
      "In spite of",
      {
        alternatives: ["Despite"],
        explanation: "In spite of / Despite + -ing.",
      },
    ),
    grammarCloze(
      "u113-3-3",
      "113.3 · although",
      "__________ I'd hurt my foot, I managed to walk home.",
      "Although",
      { explanation: "Although I'd hurt my foot…" },
    ),
    grammarCloze(
      "u113-3-6",
      "113.3 · even though",
      "They came to the party __________ they hadn't been invited.",
      "even though",
      { explanation: "even though + S + V." },
    ),
    grammarCloze(
      "u113-4-1",
      "113.4 · though (end)",
      "The house isn't very nice. I like the garden __________.",
      "though",
      { explanation: "though ở cuối = but." },
    ),
    grammarCloze(
      "u113-4-2",
      "113.4 · though (end)",
      "I enjoyed reading the book. It's very long __________.",
      "though",
      { explanation: "It's very long though." },
    ),
    grammarCloze(
      "u113-4-4",
      "113.4 · though (end)",
      "Laura is very nice. I don't like her husband __________.",
      "though",
      { explanation: "I don't like her husband though." },
    ),
  ];
