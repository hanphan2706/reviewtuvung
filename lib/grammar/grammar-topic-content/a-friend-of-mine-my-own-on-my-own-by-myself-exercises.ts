import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 83 exercises — A Friend of Mine / My Own / on My Own / by Myself.
 */
export const U83_A_FRIEND_OF_MINE_MY_OWN_ON_MY_OWN_BY_MYSELF_EXERCISES: readonly GrammarExercise[] =
  [
    grammarCloze(
      "u83-1-2",
      "83.1 · of yours",
      "We met __________ . (one of your relatives)",
      "a relative of yours",
      {
        explanation: "a relative of yours (không: of you).",
      },
    ),
    grammarCloze(
      "u83-1-3",
      "83.1 · of mine",
      "Jason borrowed __________ . (one of my books)",
      "a book of mine",
      {
        explanation: "a book of mine.",
      },
    ),
    grammarCloze(
      "u83-1-4",
      "83.1 · of hers",
      "I met Lisa and __________ . (some of her friends)",
      "some friends of hers",
      {
        explanation: "some friends of hers.",
      },
    ),
    grammarCloze(
      "u83-1-5",
      "83.1 · of ours",
      "We had dinner with __________ . (one of our neighbours)",
      "a neighbour of ours",
      {
        alternatives: ["a neighbor of ours"],
        explanation: "a neighbour of ours.",
      },
    ),
    grammarCloze(
      "u83-1-6",
      "83.1 · of mine",
      "I went on holiday with __________ . (two of my friends)",
      "two friends of mine",
      {
        explanation: "two friends of mine.",
      },
    ),
    grammarCloze(
      "u83-1-7",
      "83.1 · of Amy's",
      "I met __________ at the party. (one of Amy's friends)",
      "a friend of Amy's",
      {
        explanation: "a friend of Amy's.",
      },
    ),
    grammarCloze(
      "u83-2-2",
      "83.2 · his own",
      "Gary doesn't think like me. He has __________.",
      "his own opinions",
      {
        explanation: "his own opinions.",
      },
    ),
    grammarCloze(
      "u83-2-3",
      "83.2 · her own",
      "Julia doesn't want to work for other people. She wants to start __________.",
      "her own business",
      {
        explanation: "her own business.",
      },
    ),
    grammarCloze(
      "u83-2-4",
      "83.2 · our own",
      "In the test we had to read a story, and then write it in __________.",
      "our own words",
      {
        explanation: "in our own words.",
      },
    ),
    grammarCloze(
      "u83-2-5",
      "83.2 · its own",
      "We stayed at a luxury hotel by the sea. The hotel had __________.",
      "its own private beach",
      {
        explanation: "its own private beach.",
      },
    ),
    grammarCloze(
      "u83-3-2",
      "83.3 · your own",
      "How can you blame me? It's not my fault. It's __________.",
      "your own fault",
      {
        explanation: "your own fault.",
      },
    ),
    grammarCloze(
      "u83-3-3",
      "83.3 · her own",
      "She's always using my ideas. Why can't she use __________?",
      "her own ideas",
      {
        explanation: "her own ideas.",
      },
    ),
    grammarCloze(
      "u83-4-2",
      "83.4 · her own",
      "Helen doesn't often buy clothes. She likes to __________.",
      "make her own",
      {
        alternatives: ["make her own clothes"],
        explanation: "make her own (clothes).",
      },
    ),
    grammarCloze(
      "u83-4-3",
      "83.4 · your own",
      "I'm not going to clean your shoes. You can __________.",
      "clean your own",
      {
        alternatives: ["clean your own shoes"],
        explanation: "clean your own (shoes).",
      },
    ),
    grammarCloze(
      "u83-5-2",
      "83.5 · myself / own",
      "The box was too heavy for me to lift by __________.",
      "myself",
      {
        explanation: "by myself (= alone / without help).",
      },
    ),
    grammarCloze(
      "u83-5-3",
      "83.5 · our own",
      "We had no help decorating the apartment. We did it completely on __________.",
      "our own",
      {
        explanation: "on our own.",
      },
    ),
    grammarCloze(
      "u83-5-5",
      "83.5 · himself",
      "'Who was Tom with?' 'Nobody. He was by __________.'",
      "himself",
      {
        explanation: "by himself.",
      },
    ),
    grammarCloze(
      "u83-6-2",
      "83.6 · of mine",
      "Sam and Chris are __________ . (correct: colleagues of …)",
      "colleagues of mine",
      {
        explanation: "colleagues of mine (không: of me).",
      },
    ),
    grammarCloze(
      "u83-6-3",
      "83.6 · on my own",
      "I was scared. I didn't want to go out __________.",
      "on my own",
      {
        alternatives: ["by myself"],
        explanation: "on my own / by myself (không: by my own).",
      },
    ),
    grammarCloze(
      "u83-6-5",
      "83.6 · by himself",
      "He must be lonely. He's always __________.",
      "by himself",
      {
        alternatives: ["on his own"],
        explanation: "by himself / on his own (không: with himself).",
      },
    ),
  ];
