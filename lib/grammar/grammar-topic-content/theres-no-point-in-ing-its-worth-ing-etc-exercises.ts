import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 63 exercises — There's No Point in -ing, It's Worth -ing etc.
 */
export const U63_THERES_NO_POINT_IN_ING_ITS_WORTH_ING_ETC_EXERCISES: readonly GrammarExercise[] =
  [
    // 63.1 matching → cloze with the keyed idea
    grammarCloze(
      "u63-1-1",
      "63.1 · it's worth",
      "It's a nice town. __________ spending a few days here.",
      "It's worth",
      {
        alternatives: ["It is worth"],
        explanation: "It's worth spending…",
      },
    ),
    grammarCloze(
      "u63-1-2",
      "63.1 · it's worth",
      "It's an interesting idea. It's worth __________.",
      "considering",
      {
        explanation: "It's worth considering.",
      },
    ),
    grammarCloze(
      "u63-1-3",
      "63.1 · there's no point",
      "There's no point in looking for him. We'll never __________ him.",
      "find",
      {
        explanation: "We'll never find him → no point in looking.",
      },
    ),
    grammarCloze(
      "u63-1-4",
      "63.1 · not worth",
      "It's not important. It's not worth __________ about.",
      "worrying",
      {
        explanation: "It's not worth worrying about.",
      },
    ),

    // 63.2
    grammarCloze(
      "u63-2-1",
      "63.2 · There's no point in",
      "Why have a car if you never use it? → There's no point in __________ a car if you never use it.",
      "having",
      {
        explanation: "There's no point in having…",
      },
    ),
    grammarCloze(
      "u63-2-2",
      "63.2 · There's no point in",
      "Why work if you don't need money? → There's no point in __________ if you don't need money.",
      "working",
      {
        explanation: "There's no point in working…",
      },
    ),
    grammarCloze(
      "u63-2-3",
      "63.2 · There's no point in",
      "Don't try to study if you feel tired. → There's no point in __________ if you feel tired.",
      "trying to study",
      {
        alternatives: ["studying"],
        explanation: "There's no point in trying to study / studying…",
      },
    ),
    grammarCloze(
      "u63-2-4",
      "63.2 · There's no point in",
      "Why hurry if you have plenty of time? → There's no point in __________ if you have plenty of time.",
      "hurrying",
      {
        explanation: "There's no point in hurrying…",
      },
    ),

    // 63.3
    grammarCloze(
      "u63-3-1",
      "63.3 · have a problem + -ing",
      "I managed to get a visa, but it was difficult. I had a problem __________ a visa.",
      "getting",
      {
        explanation: "have a problem getting…",
      },
    ),
    grammarCloze(
      "u63-3-2",
      "63.3 · have a problem + -ing",
      "I find it hard to remember people's names. I have a problem __________ people's names.",
      "remembering",
      {
        explanation: "have a problem remembering…",
      },
    ),
    grammarCloze(
      "u63-3-3",
      "63.3 · have no trouble + -ing",
      "Lucy found a job easily. She had no trouble __________ a job.",
      "finding",
      {
        alternatives: ["getting"],
        explanation: "had no trouble finding/getting a job.",
      },
    ),
    grammarCloze(
      "u63-3-4",
      "63.3 · have no difficulty + -ing",
      "It was easy for us to understand one another. We had no difficulty __________ one another.",
      "understanding",
      {
        explanation: "had no difficulty understanding…",
      },
    ),

    // 63.4
    grammarCloze(
      "u63-4-1",
      "63.4 · spend + -ing",
      "How much time do you spend __________ to and from work every day?",
      "going",
      {
        alternatives: ["travelling", "getting"],
        explanation: "spend time going/travelling/getting…",
      },
    ),
    grammarCloze(
      "u63-4-2",
      "63.4 · busy + -ing",
      "Karen is going on holiday tomorrow, so she's busy __________ her things ready.",
      "getting",
      {
        explanation: "busy getting … ready.",
      },
    ),
    grammarCloze(
      "u63-4-3",
      "63.4 · waste + -ing",
      "I waste too much time __________ TV.",
      "watching",
      {
        explanation: "waste time watching…",
      },
    ),
    grammarCloze(
      "u63-4-4",
      "63.4 · worth + -ing",
      "There was a beautiful view. It was worth __________ to the top.",
      "going",
      {
        alternatives: ["climbing", "walking"],
        explanation: "worth going/climbing/walking to the top.",
      },
    ),
    grammarCloze(
      "u63-4-5",
      "63.4 · no point in + -ing",
      "We need to stay calm. There's no point in __________ angry.",
      "getting",
      {
        alternatives: ["being"],
        explanation: "no point in getting/being angry.",
      },
    ),
    grammarCloze(
      "u63-4-6",
      "63.4 · it's no good + -ing",
      "It's no good __________ to escape. You won't be able to get out of here.",
      "trying",
      {
        explanation: "It's no good trying…",
      },
    ),

    // 63.5
    grammarCloze(
      "u63-5-1",
      "63.5 · go + -ing",
      "It was a very hot day, so we __________ in the lake.",
      "went swimming",
      {
        explanation: "go swimming → went swimming.",
      },
    ),
    grammarCloze(
      "u63-5-2",
      "63.5 · go + -ing",
      "Dan isn't here. He __________. There were a few things he needed to buy.",
      "has gone shopping",
      {
        alternatives: ["'s gone shopping", "went shopping"],
        explanation: "He's gone shopping / went shopping.",
      },
    ),
  ];
