import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 47 exercises — Reported speech 1 (English Grammar in Use · Intermediate).
 * Skip 47.2 open “about yourself” style items.
 */
export const U47_REPORTED_SPEECH_1_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u47-1-2",
    "47.1 · reported speech",
    "Tom said it was too far. Complete: Tom said __________ far.",
    "it was too",
    {
      alternatives: [
        "that it was too",
        "(that) it was too",
        "it was too far",
        "that it was too far",
      ],
      explanation: "Tom said (that) it was too far.",
    },
  ),
  grammarCloze(
    "u47-1-3",
    "47.1 · reported speech",
    "Anna told me she didn't want to go. Complete: she told me __________ to go.",
    "she didn't want",
    {
      alternatives: [
        "that she didn't want",
        "(that) she didn't want",
        "she did not want",
      ],
      explanation: "… she didn't want to go.",
    },
  ),
  grammarCloze(
    "u47-1-4",
    "47.1 · reported speech",
    "Dan: 'I'll let you know next week.' → He said __________ next week.",
    "he would let me know",
    {
      alternatives: [
        "that he would let me know",
        "(that) he would let me know",
        "he would let me know next week",
        "that he would let me know next week",
      ],
      explanation: "He said (that) he would let me know next week.",
    },
  ),
  grammarCloze(
    "u47-1-5",
    "47.1 · reported speech",
    "Ben: 'I haven't seen her for a while.' → he told me __________ for a while.",
    "he hadn't seen her",
    {
      alternatives: [
        "that he hadn't seen her",
        "(that) he hadn't seen her",
        "he had not seen her",
      ],
      explanation: "… he hadn't seen her for a while.",
    },
  ),
  grammarCloze(
    "u47-1-6",
    "47.1 · reported speech",
    "Kate: 'You can borrow mine.' → Kate said __________.",
    "I could borrow hers",
    {
      alternatives: [
        "that I could borrow hers",
        "(that) I could borrow hers",
        "I could borrow hers.",
        "that I could borrow hers.",
      ],
      explanation: "Kate said (that) I could borrow hers.",
    },
  ),
  grammarCloze(
    "u47-1-7",
    "47.1 · reported speech",
    "Sue: 'I'm not enjoying it very much.' → She said __________ very much.",
    "she wasn't enjoying it",
    {
      alternatives: [
        "that she wasn't enjoying it",
        "(that) she wasn't enjoying it",
        "she was not enjoying it",
      ],
      explanation: "… she wasn't enjoying it very much.",
    },
  ),
  grammarCloze(
    "u47-1-8",
    "47.1 · reported speech",
    "James: 'I sold it a few months ago.' → He told me __________ a few months ago.",
    "he sold it",
    {
      alternatives: [
        "he'd sold it",
        "he had sold it",
        "that he sold it",
        "that he'd sold it",
        "that he had sold it",
      ],
      explanation: "he sold it / he'd sold it / he had sold it.",
    },
  ),
  grammarCloze(
    "u47-1-9",
    "47.1 · reported speech",
    "Sarah: 'I don't know.' → she said __________.",
    "she didn't know",
    {
      alternatives: [
        "that she didn't know",
        "(that) she didn't know",
        "she didn't know.",
        "that she didn't know.",
      ],
      explanation: "she said (that) she didn't know.",
    },
  ),
  grammarCloze(
    "u47-1-10",
    "47.1 · reported speech",
    "Amy: 'Twenty.' (students in class) → she told me __________ class.",
    "there were twenty students in her",
    {
      alternatives: [
        "that there were twenty students in her",
        "(that) there were twenty students in her",
        "there were twenty students in her class",
        "that there were twenty students in her class",
      ],
      explanation: "… there were twenty students in her class.",
    },
  ),
  grammarCloze(
    "u47-1-1",
    "47.1 · reported speech",
    "Paul: 'I'm feeling ill.' → He said he __________ ill.",
    "was feeling",
    {
      explanation: "He said he was feeling ill.",
    },
  ),
  // Extra book-faithful backshifts from Anna examples in theory (C)
  grammarCloze(
    "u47-c-1",
    "47 · reported speech",
    "'I've lost my phone.' → Anna said that she __________ her phone.",
    "had lost",
    {
      explanation: "Present perfect → past perfect: had lost.",
    },
  ),
  grammarCloze(
    "u47-c-2",
    "47 · reported speech",
    "'I want to buy a car.' → She said that she __________ to buy a car.",
    "wanted",
    {
      explanation: "want → wanted.",
    },
  ),
  grammarCloze(
    "u47-c-3",
    "47 · reported speech",
    "'I can't come to the party.' → She said that she __________ come to the party.",
    "couldn't",
    {
      alternatives: ["could not"],
      explanation: "can → could / couldn't.",
    },
  ),
  grammarCloze(
    "u47-c-4",
    "47 · reported speech",
    "'I don't have much free time.' → She said that she __________ much free time.",
    "didn't have",
    {
      alternatives: ["did not have"],
      explanation: "don't have → didn't have.",
    },
  ),
  grammarCloze(
    "u47-c-5",
    "47 · reported speech",
    "'My parents are fine.' → She said that her parents __________ fine.",
    "were",
    {
      explanation: "are → were.",
    },
  ),
  grammarCloze(
    "u47-c-6",
    "47 · reported speech",
    "'I'll phone you when I get back.' → She said she would phone me when she __________ back.",
    "got",
    {
      explanation: "will → would; get → got.",
    },
  ),
  grammarCloze(
    "u47-c-7",
    "47 · reported speech",
    "'I'm going away for a few days.' → She said that she __________ away for a few days.",
    "was going",
    {
      explanation: "am going → was going.",
    },
  ),
  grammarCloze(
    "u47-c-8",
    "47 · reported speech",
    "Paul said: 'I woke up feeling ill.' → Paul said he __________ feeling ill. (past perfect also OK)",
    "had woken up",
    {
      alternatives: ["woke up"],
      explanation: "Past simple có thể giữ (woke up) hoặc → past perfect (had woken up).",
    },
  ),
];
