import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 60 exercises — Preposition + -ing (English Grammar in Use · Intermediate).
 */
export const U60_PREPOSITION_ING_EXERCISES: readonly GrammarExercise[] = [
  // 60.1
  grammarCloze(
    "u60-1-2",
    "60.1 · intention of + -ing",
    "I don't intend to apply for the job. → I have no intention of __________.",
    "applying for the job",
    {
      explanation: "intention of + -ing: intention of applying for the job.",
    },
  ),
  grammarCloze(
    "u60-1-3",
    "60.1 · good at + -ing",
    "Helen has a good memory for names. → Helen is good at __________.",
    "remembering names",
    {
      explanation: "good at + -ing: good at remembering names.",
    },
  ),
  grammarCloze(
    "u60-1-4",
    "60.1 · chance of + -ing",
    "You probably won't win the lottery. → You have little chance of __________.",
    "winning the lottery",
    {
      explanation: "chance of + -ing: little chance of winning the lottery.",
    },
  ),
  grammarCloze(
    "u60-1-5",
    "60.1 · trouble for + -ing",
    "Did you get into trouble because you were late? → Did you get into trouble for __________?",
    "being late",
    {
      explanation: "for + -ing: get into trouble for being late.",
    },
  ),
  grammarCloze(
    "u60-1-6",
    "60.1 · instead of + -ing",
    "We didn't eat at home. We went to a restaurant instead. → We went to a restaurant instead of __________.",
    "eating at home",
    {
      explanation: "instead of + -ing: instead of eating at home.",
    },
  ),
  grammarCloze(
    "u60-1-7",
    "60.1 · without + -ing",
    "We got into the exhibition. We didn't have to queue. → We got into the exhibition without __________.",
    "having to queue",
    {
      alternatives: ["queuing"],
      explanation: "without + -ing: without having to queue / queuing.",
    },
  ),
  grammarCloze(
    "u60-1-8",
    "60.1 · despite + -ing",
    "Amy is 90 years old, but she's fit and healthy. → Amy is fit and healthy despite __________.",
    "being 90 years old",
    {
      explanation: "despite + -ing: despite being 90 years old.",
    },
  ),

  // 60.2 — by -ing
  grammarCloze(
    "u60-2-2",
    "60.2 · by + -ing",
    "I was able to reach the top shelf __________ on a chair.",
    "by standing",
    {
      explanation: "by + -ing: by standing on a chair.",
    },
  ),
  grammarCloze(
    "u60-2-3",
    "60.2 · by + -ing",
    "You turn on the computer __________ the button at the back.",
    "by pressing",
    {
      explanation: "by pressing the button at the back.",
    },
  ),
  grammarCloze(
    "u60-2-4",
    "60.2 · by + -ing",
    "Kevin got himself into financial trouble __________ too much money.",
    "by borrowing",
    {
      explanation: "by borrowing too much money.",
    },
  ),
  grammarCloze(
    "u60-2-5",
    "60.2 · by + -ing",
    "You can put people's lives in danger __________ too fast.",
    "by driving",
    {
      explanation: "by driving too fast.",
    },
  ),
  grammarCloze(
    "u60-2-6",
    "60.2 · by + -ing",
    "We made the room look nicer __________ some pictures on the walls.",
    "by putting",
    {
      explanation: "by putting some pictures on the walls.",
    },
  ),

  // 60.3
  grammarCloze(
    "u60-3-2",
    "60.3 · without + -ing",
    "Dan left the hotel without __________ his bill.",
    "paying",
    {
      alternatives: ["settling"],
      explanation: "without paying / settling his bill.",
    },
  ),
  grammarCloze(
    "u60-3-3",
    "60.3 · how about + -ing",
    "It's a nice morning. How about __________ for a walk?",
    "going",
    {
      explanation: "How about + -ing: How about going for a walk?",
    },
  ),
  grammarCloze(
    "u60-3-4",
    "60.3 · before + -ing",
    "You need to think carefully before __________ an important decision.",
    "making",
    {
      explanation: "before + -ing: before making an important decision.",
    },
  ),
  grammarCloze(
    "u60-3-6",
    "60.3 · look forward to + -ing",
    "I'm not looking forward to __________ away. I'd prefer to stay here.",
    "going",
    {
      explanation: "look forward to + -ing (to = giới từ): looking forward to going away.",
    },
  ),
  grammarCloze(
    "u60-3-11",
    "60.3 · without + -ing",
    "Can you touch your toes without __________ your knees?",
    "bending",
    {
      explanation: "without bending your knees.",
    },
  ),
  grammarCloze(
    "u60-3-12",
    "60.3 · interested in + -ing",
    "We've decided to sell our car. Are you interested in __________ it?",
    "buying",
    {
      explanation: "interested in + -ing: interested in buying it.",
    },
  ),

  // 60.4 — looking forward to
  grammarCloze(
    "u60-4-2",
    "60.4 · looking forward to + -ing",
    "A good friend is coming to visit soon. → I'm looking forward to __________ her again.",
    "seeing",
    {
      explanation: "looking forward to seeing her (again).",
    },
  ),
  grammarCloze(
    "u60-4-3",
    "60.4 · not looking forward to + -ing",
    "You're going to the dentist tomorrow. You don't enjoy it. → I'm not looking forward to __________ to the dentist.",
    "going",
    {
      explanation: "I'm not looking forward to going to the dentist.",
    },
  ),
];
