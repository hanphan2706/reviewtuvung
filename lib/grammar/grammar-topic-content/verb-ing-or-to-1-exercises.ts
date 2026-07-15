import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 56 exercises — Verb + -ing or to … 1 (English Grammar in Use · Intermediate).
 */
export const U56_VERB_ING_OR_TO_1_EXERCISES: readonly GrammarExercise[] = [
  // 56.1
  grammarCloze(
    "u56-1-2",
    "56.1 · enjoy + -ing",
    "I don't enjoy __________ very much. (drive)",
    "driving",
    {
      explanation: "enjoy + -ing: don't enjoy driving.",
    },
  ),
  grammarCloze(
    "u56-1-3",
    "56.1 · afford + to …",
    "I can't afford __________ away. I don't have enough money. (go)",
    "to go",
    {
      explanation: "afford + to …: can't afford to go away.",
    },
  ),
  grammarCloze(
    "u56-1-4",
    "56.1 · consider + -ing",
    "Have you ever considered __________ to live in another country? (go)",
    "going",
    {
      explanation: "consider + -ing: considered going to live…",
    },
  ),
  grammarCloze(
    "u56-1-5",
    "56.1 · deserve + to …",
    "We were unlucky to lose the game. We played well and deserved __________. (win)",
    "to win",
    {
      explanation: "deserve + to …: deserved to win.",
    },
  ),
  grammarCloze(
    "u56-1-8",
    "56.1 · refuse + to …",
    "I refuse __________ any more questions. (answer)",
    "to answer",
    {
      explanation: "refuse + to …: refuse to answer.",
    },
  ),
  grammarCloze(
    "u56-1-11",
    "56.1 · mind + -ing",
    "I don't mind __________ alone, but I'd rather be with other people. (be)",
    "being",
    {
      explanation: "mind + -ing: don't mind being alone.",
    },
  ),
  grammarCloze(
    "u56-1-12",
    "56.1 · manage + to …",
    "The wall was quite high, but I managed __________ over it. (climb)",
    "to climb",
    {
      explanation: "manage + to …: managed to climb over it.",
    },
  ),
  grammarCloze(
    "u56-1-13",
    "56.1 · forget + to …",
    "Sarah doesn't know about the meeting. I forgot __________ her. (tell)",
    "to tell",
    {
      explanation: "forget + to …: forgot to tell her.",
    },
  ),
  grammarCloze(
    "u56-1-14a",
    "56.1 · enjoy + -ing",
    "I've enjoyed __________ to you. (talk)",
    "talking",
    {
      explanation: "enjoy + -ing: enjoyed talking to you.",
    },
  ),
  grammarCloze(
    "u56-1-14b",
    "56.1 · hope + to …",
    "I've enjoyed talking to you. I hope __________ you again soon. (see)",
    "to see",
    {
      explanation: "hope + to …: hope to see you again.",
    },
  ),

  // 56.2 — remember + -ing
  grammarCloze(
    "u56-2-2",
    "56.2 · remember + -ing",
    "He cried on his first day at school. He doesn't remember this. → He doesn't remember __________ on his first day at school.",
    "crying",
    {
      explanation: "remember + -ing: doesn't remember crying…",
    },
  ),
  grammarCloze(
    "u56-2-3",
    "56.2 · remember + -ing",
    "Once he fell into the river. He remembers this. → He remembers __________ into the river.",
    "falling",
    {
      explanation: "remember + -ing: remembers falling into the river.",
    },
  ),
  grammarCloze(
    "u56-2-5",
    "56.2 · remember + being + V3",
    "Once he was bitten by a dog. He doesn't remember this. → He doesn't remember __________ by a dog.",
    "being bitten",
    {
      explanation: "remember + being + V3: doesn't remember being bitten…",
    },
  ),

  // 56.3 — remember / regret / go on
  grammarCloze(
    "u56-3-1b",
    "56.3 · remember + -ing",
    "He says we've met before, but I don't remember __________ him.",
    "meeting",
    {
      explanation: "remember + -ing = nhớ đã gặp: don't remember meeting him.",
    },
  ),
  grammarCloze(
    "u56-3-1d",
    "56.3 · remember + to …",
    "When you see Steve, remember __________ hello to him from me.",
    "to say",
    {
      explanation: "remember + to … = nhớ phải làm: remember to say hello.",
    },
  ),
  grammarCloze(
    "u56-3-1f",
    "56.3 · remember + to …",
    "Did you remember __________ your sister? — No, I forgot. I'll phone her tomorrow.",
    "to call",
    {
      alternatives: ["to phone"],
      explanation: "remember + to …: remember to call/phone your sister.",
    },
  ),
  grammarCloze(
    "u56-3-2b",
    "56.3 · regret + to …",
    "I knew they were in trouble, but I regret __________ I did nothing to help them.",
    "to say",
    {
      explanation: "regret to say = lấy làm tiếc phải nói.",
    },
  ),
  grammarCloze(
    "u56-3-2d",
    "56.3 · regret + -ing",
    "I now regret __________ my job. It was a big mistake.",
    "leaving",
    {
      alternatives: ["giving up"],
      explanation: "regret + -ing = hối tiếc đã làm: regret leaving / giving up my job.",
    },
  ),
  grammarCloze(
    "u56-3-3a",
    "56.3 · go on + to …",
    "Ben joined the company nine years ago. Later he went on __________ manager of the company.",
    "to become",
    {
      explanation: "go on + to … = chuyển sang việc mới: went on to become manager.",
    },
  ),
  grammarCloze(
    "u56-3-3b",
    "56.3 · go on + -ing",
    "I can't go on __________ here any more. I want a different job.",
    "working",
    {
      explanation: "go on + -ing = tiếp tục cùng việc: go on working here.",
    },
  ),
];
