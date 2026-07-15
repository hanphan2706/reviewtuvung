import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 61 exercises — Be/Get Used To … (English Grammar in Use · Intermediate).
 */
export const U61_BE_GET_USED_TO_EXERCISES: readonly GrammarExercise[] = [
  // 61.1
  grammarCloze(
    "u61-1-1",
    "61.1 · used to + -ing",
    "I'm not lonely. I don't need other people. I'm used to __________ on my own.",
    "being",
    {
      explanation: "be used to + -ing: I'm used to being on my own.",
    },
  ),
  grammarCloze(
    "u61-1-2",
    "61.1 · used to + -ing",
    "I don't feel good. I stayed up until 3 am. I'm not used to __________ to bed so late.",
    "going",
    {
      explanation: "I'm not used to going to bed so late.",
    },
  ),
  grammarCloze(
    "u61-1-3",
    "61.1 · get used to",
    "Tomorrow I start a new job. I'll have to get used to __________ with new people.",
    "working",
    {
      alternatives: ["being"],
      explanation: "get used to working / being with new people.",
    },
  ),
  grammarCloze(
    "u61-1-4",
    "61.1 · used to + -ing",
    "My feet hurt. I can't go any further. I'm not used to __________ so far.",
    "walking",
    {
      explanation: "I'm not used to walking so far.",
    },
  ),
  grammarCloze(
    "u61-1-5",
    "61.1 · used to + -ing",
    "I like this part of town. I've been here a long time, so I'm used to __________ here.",
    "living",
    {
      explanation: "I'm used to living here.",
    },
  ),

  // 61.2
  grammarCloze(
    "u61-2-1",
    "61.2 · wasn't used to",
    "Sarah started working nights a year ago. At first it was hard. Sarah wasn't used to __________ nights.",
    "working",
    {
      explanation: "wasn't used to working nights.",
    },
  ),
  grammarCloze(
    "u61-2-2",
    "61.2 · get used to",
    "It took Sarah a few months to __________ working nights.",
    "get used to",
    {
      explanation: "get used to working nights.",
    },
  ),
  grammarCloze(
    "u61-2-3",
    "61.2 · is used to",
    "Now nights are normal for Sarah. She __________ nights.",
    "is used to working",
    {
      alternatives: ["She's used to working", "she is used to working"],
      explanation: "She's used to working nights.",
    },
  ),
  grammarCloze(
    "u61-2-4",
    "61.2 · wasn't used to",
    "When Jack started this job, he __________ driving two hours to work every morning.",
    "wasn't used to",
    {
      alternatives: ["was not used to"],
      explanation: "he wasn't used to driving two hours…",
    },
  ),
  grammarCloze(
    "u61-2-5",
    "61.2 · got used to",
    "After some time Jack __________ it. Now it's no problem.",
    "got used to",
    {
      explanation: "he got used to it.",
    },
  ),

  // 61.3
  grammarCloze(
    "u61-3-1",
    "61.3 · I'm used to",
    "Friend: Wouldn't you prefer to sleep in a bed? You: No, I'm used to __________ on the floor.",
    "sleeping",
    {
      explanation: "I'm used to sleeping on the floor.",
    },
  ),
  grammarCloze(
    "u61-3-2",
    "61.3 · I'm used to",
    "Friend: You have to work long hours, don't you? You: Yes, but I don't mind. I'm used to __________ long hours.",
    "working",
    {
      explanation: "I'm used to working long hours.",
    },
  ),
  grammarCloze(
    "u61-3-3",
    "61.3 · I'm not used to",
    "You've just moved to a big city. Friend: How do you like living here? You: It's different. I'm not used to __________.",
    "the crowds",
    {
      alternatives: ["the crowds of people", "crowds", "the crowds of people here"],
      explanation: "I'm not used to the crowds (of people).",
    },
  ),

  // 61.4
  grammarCloze(
    "u61-4-1",
    "61.4 · get used to",
    "Friends moved onto a busy street. It's very noisy. They'll have to get used to __________.",
    "the noise",
    {
      explanation: "get used to the noise.",
    },
  ),
  grammarCloze(
    "u61-4-2",
    "61.4 · got used to",
    "The children got a new teacher. They soon __________.",
    "got used to her",
    {
      alternatives: ["got used to their new teacher", "got used to the new teacher"],
      explanation: "They soon got used to her / their new teacher.",
    },
  ),
  grammarCloze(
    "u61-4-3",
    "61.4 · get used to + -ing",
    "Kate moved to a much smaller house. She had to get used to __________ in a much smaller house.",
    "living",
    {
      explanation: "get used to living in a much smaller house.",
    },
  ),
  grammarCloze(
    "u61-4-4",
    "61.4 · can't get used to",
    "Anna still doesn't like the British weather. She can't __________ the weather.",
    "get used to",
    {
      explanation: "She can't get used to the weather.",
    },
  ),

  // 61.5 — contrast used to do vs be used to
  grammarCloze(
    "u61-5-1",
    "61.5 · used to (past habit)",
    "Daniel used to __________ a lot of coffee. Now he prefers tea.",
    "drink",
    {
      explanation: "used to + V: drink (thói quen quá khứ, Unit 18).",
    },
  ),
  grammarCloze(
    "u61-5-2",
    "61.5 · used to + -ing",
    "I feel very full. I'm not used to __________ so much.",
    "eating",
    {
      explanation: "be used to + -ing: eating.",
    },
  ),
  grammarCloze(
    "u61-5-3",
    "61.5 · used to + -ing (passive)",
    "I'm the boss here! I'm not used to __________ told what to do.",
    "being",
    {
      explanation: "I'm not used to being told what to do.",
    },
  ),
];
