import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 53 exercises — Verb + -ing (English Grammar in Use · Intermediate).
 */
export const U53_VERB_ING_EXERCISES: readonly GrammarExercise[] = [
  // 53.1 — situations
  grammarCloze(
    "u53-1-2",
    "53.1 · fancy + -ing",
    "Do you want to play tennis? — No, not really. He didn't fancy __________.",
    "playing tennis",
    {
      explanation: "fancy + -ing: didn't fancy playing tennis.",
    },
  ),
  grammarCloze(
    "u53-1-3",
    "53.1 · suggest + -ing",
    "Let's go for a walk. — Good idea! She suggested __________.",
    "going for a walk",
    {
      explanation: "suggest + -ing: suggested going for a walk.",
    },
  ),
  grammarCloze(
    "u53-1-4",
    "53.1 · deny + -ing",
    "You caused the accident. — No, I didn't. He denied __________.",
    "causing the accident",
    {
      explanation: "deny + -ing: denied causing the accident.",
    },
  ),
  grammarCloze(
    "u53-1-5",
    "53.1 · mind + -ing",
    "Can you wait a few minutes? — Sure, no problem. They didn't mind __________.",
    "waiting a few minutes",
    {
      explanation: "mind + -ing: didn't mind waiting a few minutes.",
    },
  ),
  grammarCloze(
    "u53-1-6",
    "53.1 · admit + -ing",
    "You didn't tell the truth. — That's right. I didn't. She admitted __________.",
    "not telling the truth",
    {
      alternatives: ["lying"],
      explanation: "admit + -ing: admitted not telling the truth / lying.",
    },
  ),

  // 53.2 — choose verb + -ing
  grammarCloze(
    "u53-2-2",
    "53.2 · stop + -ing",
    "I'm trying to concentrate. Please stop __________ so much noise!",
    "making",
    {
      explanation: "stop + -ing: stop making so much noise.",
    },
  ),
  grammarCloze(
    "u53-2-3",
    "53.2 · enjoy + -ing",
    "I enjoy __________ to music.",
    "listening",
    {
      explanation: "enjoy + -ing: enjoy listening to music.",
    },
  ),
  grammarCloze(
    "u53-2-4",
    "53.2 · consider + -ing",
    "I considered __________ for the job, but in the end I decided against it.",
    "applying",
    {
      explanation: "consider + -ing: considered applying for the job.",
    },
  ),
  grammarCloze(
    "u53-2-5",
    "53.2 · finish + -ing",
    "Have you finished __________ the newspaper yet?",
    "reading",
    {
      explanation: "finish + -ing: finished reading.",
    },
  ),
  grammarCloze(
    "u53-2-6",
    "53.2 · go on + -ing",
    "We need to change our routine. We can't go on __________ like this.",
    "living",
    {
      explanation: "go on + -ing: can't go on living like this.",
    },
  ),
  grammarCloze(
    "u53-2-7",
    "53.2 · avoid + -ing",
    "It's better to avoid __________ during the rush hour.",
    "travelling",
    {
      alternatives: ["traveling"],
      explanation: "avoid + -ing: avoid travelling during the rush hour.",
    },
  ),
  grammarCloze(
    "u53-2-8",
    "53.2 · keep + -ing",
    "My memory is getting worse. I keep __________ things.",
    "forgetting",
    {
      explanation: "keep + -ing: keep forgetting things.",
    },
  ),
  grammarCloze(
    "u53-2-9",
    "53.2 · put off + -ing",
    "I've put off __________ this bill so many times. I really must do it today.",
    "paying",
    {
      explanation: "put off + -ing: put off paying this bill.",
    },
  ),
  grammarCloze(
    "u53-2-10",
    "53.2 · give up + -ing",
    "I've given up __________ to learn Japanese. I was making no progress.",
    "trying",
    {
      explanation: "give up + -ing: given up trying to learn Japanese.",
    },
  ),
  grammarCloze(
    "u53-2-11",
    "53.2 · risk + -ing",
    "If you gamble, you risk __________ your money.",
    "losing",
    {
      explanation: "risk + -ing: risk losing your money.",
    },
  ),
  grammarCloze(
    "u53-2-12",
    "53.2 · mind not + -ing",
    "Would you mind not __________ me all the time? Let me speak!",
    "interrupting",
    {
      explanation: "mind not + -ing: mind not interrupting me.",
    },
  ),

  // 53.3 — verb + somebody + -ing
  grammarCloze(
    "u53-3-2",
    "53.3 · mind + somebody + -ing",
    "It's OK if you want to drive my car. I don't mind __________ it.",
    "you driving",
    {
      explanation: "mind + somebody + -ing: I don't mind you driving it.",
    },
  ),
  grammarCloze(
    "u53-3-3",
    "53.3 · imagine + somebody + -ing",
    "What a stupid thing to do! Can you imagine anybody __________ so stupid?",
    "being",
    {
      explanation: "imagine + somebody + -ing: imagine anybody being so stupid.",
    },
  ),
  grammarCloze(
    "u53-3-4",
    "53.3 · stop + it + -ing",
    "We can't control the weather. We can't stop __________.",
    "it raining",
    {
      explanation: "stop + somebody/something + -ing: can't stop it raining.",
    },
  ),
  grammarCloze(
    "u53-3-5",
    "53.3 · keep + somebody + -ing",
    "I'll be as quick as I can. I don't want to keep __________.",
    "you waiting",
    {
      explanation: "keep + somebody + -ing: keep you waiting.",
    },
  ),
];
