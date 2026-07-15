import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 111 exercises — Still, any more, yet, already (English Grammar in Use · Intermediate).
 */
export const U111_STILL_ANY_MORE_YET_ALREADY_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u111-1-1",
    "111.1 · still / any more",
    "Paul a few years ago travelled a lot. Now: He __________ a lot.",
    "still travels",
    { explanation: "still travels (không đổi)." },
  ),
  grammarCloze(
    "u111-1-2",
    "111.1 · still / any more",
    "He used to work in a shop. Now: He doesn't work in a shop __________.",
    "any more",
    {
      alternatives: ["anymore", "any longer"],
      explanation: "doesn't … any more / any longer.",
    },
  ),
  grammarCloze(
    "u111-1-3",
    "111.1 · still / any more",
    "He gave up writing poems. He doesn't write poems __________.",
    "any more",
    {
      alternatives: ["anymore", "any longer"],
      explanation: "doesn't write poems any more.",
    },
  ),
  grammarCloze(
    "u111-1-4",
    "111.1 · still / any more",
    "He wants to be a teacher (same as before). He __________ to be a teacher.",
    "still wants",
    { explanation: "still wants." },
  ),
  grammarCloze(
    "u111-1-5",
    "111.1 · still / any more",
    "He's not interested in politics now. He isn't interested in politics __________.",
    "any more",
    {
      alternatives: ["anymore", "any longer", "He's not interested in politics any more"],
      explanation: "isn't … any more.",
    },
  ),
  grammarCloze(
    "u111-1-9",
    "111.1 · no longer",
    "He __________ works in a shop.",
    "no longer",
    { explanation: "no longer works (giữa câu)." },
  ),
  grammarCloze(
    "u111-2-1",
    "111.2 · not … yet",
    "It's still raining. It hasn't __________ yet.",
    "stopped raining",
    {
      alternatives: ["stopped"],
      explanation: "hasn't stopped raining yet.",
    },
  ),
  grammarCloze(
    "u111-2-2",
    "111.2 · not … yet",
    "Gary is still here. He hasn't __________ yet.",
    "gone",
    { explanation: "hasn't gone yet." },
  ),
  grammarCloze(
    "u111-2-3",
    "111.2 · not … yet",
    "They're still repairing the road. They haven't __________ yet.",
    "finished",
    {
      alternatives: ["finished it", "finished repairing the road"],
      explanation: "haven't finished … yet.",
    },
  ),
  grammarCloze(
    "u111-2-4",
    "111.2 · not … yet",
    "The children are still asleep. They haven't __________ yet.",
    "woken up",
    { explanation: "haven't woken up yet." },
  ),
  grammarCloze(
    "u111-2-5",
    "111.2 · not … yet",
    "Kate is still looking for a job. She hasn't __________ yet.",
    "found one",
    {
      alternatives: ["found a job"],
      explanation: "hasn't found a job/one yet.",
    },
  ),
  grammarCloze(
    "u111-2-7",
    "111.2 · not … yet",
    "The plane is still waiting on the runway. It hasn't __________ yet.",
    "taken off",
    { explanation: "hasn't taken off yet." },
  ),
  grammarCloze(
    "u111-3-1",
    "111.3 · still / yet / already / any more",
    "Mike lost his job a year ago and he is __________ unemployed.",
    "still",
    { explanation: "still unemployed." },
  ),
  grammarCloze(
    "u111-3-2",
    "111.3 · still / yet / already / any more",
    "Shall I tell Joe what happened or does he __________ know?",
    "already",
    { explanation: "already know." },
  ),
  grammarCloze(
    "u111-3-4",
    "111.3 · still / yet / already / any more",
    "I'm hungry. Is dinner ready __________?",
    "yet",
    { explanation: "ready yet?" },
  ),
  grammarCloze(
    "u111-3-5",
    "111.3 · still / yet / already / any more",
    "I was hungry earlier, but I don't feel hungry __________.",
    "any more",
    {
      alternatives: ["anymore", "any longer"],
      explanation: "don't … any more.",
    },
  ),
  grammarCloze(
    "u111-3-9",
    "111.3 · still / yet / already / any more",
    "There's no need to introduce me to Joe. We've __________ met.",
    "already",
    { explanation: "We've already met." },
  ),
  grammarCloze(
    "u111-3-12",
    "111.3 · still / yet / already / any more",
    "Where's Helen? She's not here __________. She'll be here soon.",
    "yet",
    { explanation: "not here yet." },
  ),
  grammarCloze(
    "u111-3-13",
    "111.3 · still / yet / already / any more",
    "Mark said he'd be here at 8.30. It's 9 o'clock now and he __________ isn't here.",
    "still",
    { explanation: "he still isn't here." },
  ),
  grammarCloze(
    "u111-3-16",
    "111.3 · still / yet / already / any more",
    "I've put on weight. These trousers don't fit me __________.",
    "any more",
    {
      alternatives: ["anymore", "any longer"],
      explanation: "don't fit … any more.",
    },
  ),
];
