import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 54 exercises — Verb + to … (English Grammar in Use · Intermediate).
 */
export const U54_VERB_TO_EXERCISES: readonly GrammarExercise[] = [
  // 54.1 — situations
  grammarCloze(
    "u54-1-2",
    "54.1 · agree + to …",
    "Please help me. — OK. She agreed __________.",
    "to help him",
    {
      alternatives: ["to help"],
      explanation: "agree + to …: agreed to help him.",
    },
  ),
  grammarCloze(
    "u54-1-3",
    "54.1 · offer + to …",
    "Can I carry your bag for you? — No, thanks. I can manage. He offered __________.",
    "to carry her bag",
    {
      alternatives: ["to carry her bag for her"],
      explanation: "offer + to …: offered to carry her bag (for her).",
    },
  ),
  grammarCloze(
    "u54-1-4",
    "54.1 · arrange + to …",
    "Let's meet at 8 o'clock. — OK, fine. They arranged __________.",
    "to meet at 8 o'clock",
    {
      explanation: "arrange + to …: arranged to meet at 8 o'clock.",
    },
  ),
  grammarCloze(
    "u54-1-5",
    "54.1 · refuse + to …",
    "What's your name? — I'm not going to tell you. She refused __________.",
    "to tell him her name",
    {
      alternatives: ["to give him her name"],
      explanation: "refuse + to …: refused to tell/give him her name.",
    },
  ),
  grammarCloze(
    "u54-1-6",
    "54.1 · promise + not to …",
    "Please don't tell anyone. — I won't. I promise. She promised __________.",
    "not to tell anyone",
    {
      alternatives: ["she wouldn't tell anyone"],
      explanation: "promise + not to … / or reported: she wouldn't tell anyone.",
    },
  ),

  // 54.2
  grammarCloze(
    "u54-2-2",
    "54.2 · manage + to …",
    "There was a lot of traffic, but we managed __________ to the airport in time.",
    "to get",
    {
      explanation: "manage + to …: managed to get to the airport.",
    },
  ),
  grammarCloze(
    "u54-2-3",
    "54.2 · afford + to …",
    "We couldn't afford __________ in London. It's too expensive.",
    "to live",
    {
      explanation: "afford + to …: couldn't afford to live in London.",
    },
  ),
  grammarCloze(
    "u54-2-4",
    "54.2 · learn + to …",
    "I can't play a musical instrument, but I'd like to learn __________ the guitar.",
    "to play",
    {
      explanation: "learn + to …: learn to play the guitar.",
    },
  ),
  grammarCloze(
    "u54-2-5",
    "54.2 · decide not + to …",
    "I don't want Mark to know what happened. I decided not __________ him.",
    "to tell",
    {
      explanation: "decide not to …: decided not to tell him.",
    },
  ),
  grammarCloze(
    "u54-2-6",
    "54.2 · dare + (to) …",
    "We were all afraid to speak. Nobody dared __________ anything.",
    "say",
    {
      alternatives: ["to say"],
      explanation: "dare + (to) V: dared say / dared to say.",
    },
  ),

  // 54.3 — to … or -ing
  grammarCloze(
    "u54-3-2",
    "54.3 · decide + to …",
    "I've decided __________ for another job. I need a change. (look)",
    "to look",
    {
      explanation: "decide + to …: decided to look for another job.",
    },
  ),
  grammarCloze(
    "u54-3-3",
    "54.3 · refuse + to …",
    "I'm not going anywhere! I refuse __________. (move)",
    "to move",
    {
      explanation: "refuse + to …: refuse to move.",
    },
  ),
  grammarCloze(
    "u54-3-4",
    "54.3 · mind + -ing",
    "I'm not in a hurry. I don't mind __________. (wait)",
    "waiting",
    {
      explanation: "mind + -ing (Unit 53): don't mind waiting.",
    },
  ),
  grammarCloze(
    "u54-3-5",
    "54.3 · fail + to …",
    "Tina ran in a marathon last week, but she failed __________. (finish)",
    "to finish",
    {
      explanation: "fail + to …: failed to finish.",
    },
  ),
  grammarCloze(
    "u54-3-6",
    "54.3 · stop + -ing",
    "I wish that dog would stop __________. It's driving me crazy. (bark)",
    "barking",
    {
      explanation: "stop + -ing: stop barking.",
    },
  ),
  grammarCloze(
    "u54-3-10",
    "54.3 · tend not + to …",
    "David is very quiet. He tends not __________ much. (say)",
    "to say",
    {
      explanation: "tend + (not) to …: tends not to say much.",
    },
  ),

  // 54.4 — seem / appear / claim
  grammarCloze(
    "u54-4-2",
    "54.4 · appear + to …",
    "Tom is worried about something. → Tom appears __________ about something.",
    "to be worried",
    {
      explanation: "appear + to …: appears to be worried about something.",
    },
  ),
  grammarCloze(
    "u54-4-5",
    "54.4 · appear + to have …",
    "That car has broken down. → That car appears __________.",
    "to have broken down",
    {
      explanation: "appear + to have + V3: appears to have broken down.",
    },
  ),
  grammarCloze(
    "u54-4-7",
    "54.4 · claim + to have …",
    "They have solved the problem. → They claim __________.",
    "to have solved the problem",
    {
      explanation: "claim + to have + V3: claim to have solved the problem.",
    },
  ),

  // 54.5 — question word + to …
  grammarCloze(
    "u54-5-2",
    "54.5 · what + to …",
    "Would you know __________ if there was a fire in the building?",
    "what to do",
    {
      explanation: "know + what + to …: know what to do.",
    },
  ),
];
