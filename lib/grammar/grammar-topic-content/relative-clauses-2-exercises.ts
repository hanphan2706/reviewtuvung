import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 93 exercises — Relative Clauses 2 (English Grammar in Use · Intermediate).
 */
export const U93_RELATIVE_CLAUSES_2_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u93-1-1",
    "93.1 · need who/that?",
    "Sửa: The woman lives next door is a doctor. → The woman __________ lives next door is a doctor.",
    "who",
    {
      alternatives: ["that"],
      explanation: "who/that là chủ ngữ → bắt buộc.",
    },
  ),
  grammarCloze(
    "u93-1-4",
    "93.1 · need who/that?",
    "Sửa: The people work in the office are very friendly. → The people __________ work in the office are very friendly.",
    "who",
    {
      alternatives: ["that"],
      explanation: "chủ ngữ → giữ who/that.",
    },
  ),
  grammarCloze(
    "u93-1-7",
    "93.1 · need who/that?",
    "Sửa: What happened to the money was on the table? → What happened to the money __________ was on the table?",
    "that",
    {
      alternatives: ["which"],
      explanation: "that/which là chủ ngữ → bắt buộc.",
    },
  ),
  grammarCloze(
    "u93-1-9",
    "93.1 · need who/that?",
    "Sửa: What's the best thing it has ever happened to you? → What's the best thing __________ has ever happened to you?",
    "that",
    {
      alternatives: ["which"],
      explanation: "không it → that/which (chủ ngữ).",
    },
  ),
  grammarCloze(
    "u93-2-2",
    "93.2 · relative clause",
    "I like the dress __________. (friend is wearing it)",
    "you're wearing",
    {
      alternatives: [
        "you are wearing",
        "that you're wearing",
        "which you're wearing",
        "that you are wearing",
        "which you are wearing",
      ],
      explanation: "tân ngữ → (that/which) you're wearing.",
    },
  ),
  grammarCloze(
    "u93-2-3",
    "93.2 · relative clause",
    "What's the name of the film __________? (friend is going to see it)",
    "you're going to see",
    {
      alternatives: [
        "you are going to see",
        "that you're going to see",
        "which you're going to see",
        "that you are going to see",
        "which you are going to see",
      ],
      explanation: "(that/which) you're going to see.",
    },
  ),
  grammarCloze(
    "u93-2-4",
    "93.2 · relative clause",
    "The museum __________ was shut. (we wanted to visit it)",
    "I wanted to visit",
    {
      alternatives: [
        "we wanted to visit",
        "that I wanted to visit",
        "that we wanted to visit",
        "which I wanted to visit",
        "which we wanted to visit",
      ],
      explanation: "(that/which) I/we wanted to visit.",
    },
  ),
  grammarCloze(
    "u93-2-5",
    "93.2 · relative clause",
    "Some of the people __________ couldn't come. (we invited them)",
    "I invited to the party",
    {
      alternatives: [
        "we invited to the party",
        "who I invited to the party",
        "who we invited to the party",
        "that I invited to the party",
        "that we invited to the party",
        "whom I invited to the party",
        "whom we invited to the party",
      ],
      explanation: "(who/that/whom) I/we invited…",
    },
  ),
  grammarCloze(
    "u93-2-6",
    "93.2 · relative clause",
    "Have you finished the work __________?",
    "you had to do",
    {
      alternatives: ["that you had to do", "which you had to do"],
      explanation: "(that/which) you had to do.",
    },
  ),
  grammarCloze(
    "u93-2-7",
    "93.2 · relative clause",
    "Unfortunately the car __________ broke down after a few miles.",
    "I rented",
    {
      alternatives: [
        "we rented",
        "that I rented",
        "that we rented",
        "which I rented",
        "which we rented",
      ],
      explanation: "(that/which) I/we rented.",
    },
  ),
  grammarCloze(
    "u93-3-2",
    "93.3 · word order",
    "We couldn't go to __________.",
    "the wedding we were invited to",
    {
      alternatives: [
        "the wedding that we were invited to",
        "the wedding which we were invited to",
      ],
      explanation: "giới từ cuối: … invited to.",
    },
  ),
  grammarCloze(
    "u93-3-3",
    "93.3 · word order",
    "What's the name of __________?",
    "the hotel you told me about",
    {
      alternatives: [
        "the hotel that you told me about",
        "the hotel which you told me about",
      ],
      explanation: "… you told me about.",
    },
  ),
  grammarCloze(
    "u93-3-4",
    "93.3 · word order",
    "Unfortunately I didn't get __________.",
    "the job I applied for",
    {
      alternatives: [
        "the job that I applied for",
        "the job which I applied for",
      ],
      explanation: "… I applied for.",
    },
  ),
  grammarCloze(
    "u93-3-5",
    "93.3 · word order",
    "Did you enjoy __________?",
    "the concert you went to",
    {
      alternatives: [
        "the concert that you went to",
        "the concert which you went to",
      ],
      explanation: "… you went to.",
    },
  ),
  grammarCloze(
    "u93-3-6",
    "93.3 · word order",
    "Gary is a good person to know. He's __________.",
    "somebody you can rely on",
    {
      alternatives: [
        "somebody that you can rely on",
        "somebody who you can rely on",
        "somebody whom you can rely on",
      ],
      explanation: "somebody you can rely on.",
    },
  ),
  grammarCloze(
    "u93-4-2",
    "93.4 · that / what / —",
    "Did you hear __________ they said?",
    "what",
    {
      explanation: "what = the thing(s) that.",
    },
  ),
  grammarCloze(
    "u93-4-4",
    "93.4 · that / what / —",
    "Tell me __________ you want and I'll try to get it for you.",
    "what",
    {
      explanation: "what you want.",
    },
  ),
  grammarCloze(
    "u93-4-5",
    "93.4 · that / what / —",
    "Why do you blame me for everything __________ goes wrong?",
    "that",
    {
      explanation: "everything that… (không what; không bỏ khi chủ ngữ).",
    },
  ),
  grammarCloze(
    "u93-4-6",
    "93.4 · that / what / —",
    "I'll do __________ I can.",
    "what",
    {
      explanation: "what I can = the things that I can.",
    },
  ),
  grammarCloze(
    "u93-4-8",
    "93.4 · that / what / —",
    "I don't agree with __________ you said.",
    "what",
    {
      explanation: "what you said.",
    },
  ),
];
