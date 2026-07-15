import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 58 exercises — Verb + -ing or to … 3 (English Grammar in Use · Intermediate).
 */
export const U58_VERB_ING_OR_TO_3_EXERCISES: readonly GrammarExercise[] = [
  // 58.2 — existing situation → often -ing
  grammarCloze(
    "u58-2-2",
    "58.2 · like + -ing (situation)",
    "Jane is a biology teacher. She likes her job. → She likes __________ biology.",
    "teaching",
    {
      explanation: "Tình huống đang có → likes teaching biology.",
    },
  ),
  grammarCloze(
    "u58-2-3",
    "58.2 · like + -ing / to …",
    "Joe always has his camera with him. → He likes __________ pictures.",
    "taking",
    {
      alternatives: ["to take"],
      explanation: "like + -ing hoặc to … (thói quen): likes taking / to take pictures.",
    },
  ),
  grammarCloze(
    "u58-2-4",
    "58.2 · like + -ing (past situation)",
    "I used to work in a supermarket. I didn't like it much. → I didn't like __________ there.",
    "working",
    {
      explanation: "Tình huống đã có → didn't like working there.",
    },
  ),
  grammarCloze(
    "u58-2-5",
    "58.2 · like + -ing (situation)",
    "Rachel is studying medicine. She likes it. → She likes __________ medicine.",
    "studying",
    {
      explanation: "likes studying medicine (đang học).",
    },
  ),
  grammarCloze(
    "u58-2-6",
    "58.2 · like + being (situation)",
    "Dan is famous, but he doesn't like it. → He doesn't like __________ famous.",
    "being",
    {
      explanation: "doesn't like being famous (tình huống hiện có).",
    },
  ),
  grammarCloze(
    "u58-2-7",
    "58.2 · like + -ing / to …",
    "Jennifer is very careful. She doesn't take many risks. → She doesn't like __________ risks.",
    "taking",
    {
      alternatives: ["to take"],
      explanation: "doesn't like taking / to take risks.",
    },
  ),
  grammarCloze(
    "u58-2-8",
    "58.2 · like + to … (preference)",
    "I don't like surprises. → I like __________ things in advance.",
    "to know",
    {
      explanation: "like to know = chọn biết trước (có thể không 'enjoy').",
    },
  ),

  // 58.3
  grammarCloze(
    "u58-3-2",
    "58.3 · would like + to …",
    "'Would you like __________ down?' 'No, thanks. I'll stand.'",
    "to sit",
    {
      explanation: "would like + to …: Would you like to sit down?",
    },
  ),
  grammarCloze(
    "u58-3-3",
    "58.3 · would mind + -ing",
    "The music is very loud. Would you mind __________ it down?",
    "turning",
    {
      explanation: "would mind + -ing: mind turning it down.",
    },
  ),
  grammarCloze(
    "u58-3-5",
    "58.3 · like + to …",
    "When I have to take a train, I'm worried I'll miss it. So I like __________ to the station in plenty of time.",
    "to get",
    {
      explanation: "like to get = chọn đến sớm (thói quen có chủ đích).",
    },
  ),
  grammarCloze(
    "u58-3-6",
    "58.3 · enjoy + -ing",
    "I enjoy __________ busy. I don't like it when there's nothing to do.",
    "being",
    {
      explanation: "enjoy + -ing (không to): enjoy being busy.",
    },
  ),
  grammarCloze(
    "u58-3-7",
    "58.3 · would love + to …",
    "I would love __________ to your wedding, but I'm afraid I'll be away.",
    "to come",
    {
      alternatives: ["to go"],
      explanation: "would love + to …: would love to come/go.",
    },
  ),
  grammarCloze(
    "u58-3-8",
    "58.3 · like + -ing (situation)",
    "I don't like __________ in this part of town. I want to move somewhere else.",
    "living",
    {
      alternatives: ["being"],
      explanation: "tình huống hiện có: don't like living/being here.",
    },
  ),
  grammarCloze(
    "u58-3-9",
    "58.3 · would like + to …",
    "Do you have a minute? I'd like __________ to you about something.",
    "to talk",
    {
      explanation: "I'd like + to …: I'd like to talk to you.",
    },
  ),
  grammarCloze(
    "u58-3-11",
    "58.3 · would prefer + to …",
    "Shall we leave now, or would you prefer __________ a little?",
    "to wait",
    {
      explanation: "would prefer + to …: prefer to wait a little.",
    },
  ),

  // 58.4 — would … to have done
  grammarCloze(
    "u58-4-2",
    "58.4 · would like to have + V3",
    "It's a shame I didn't see the programme. → I would like __________ the programme.",
    "to have seen",
    {
      alternatives: ["I'd like to have seen"],
      explanation: "would like to have + V3: would like to have seen…",
    },
  ),
  grammarCloze(
    "u58-4-3",
    "58.4 · would hate to have + V3",
    "I'm glad I didn't lose my watch. → I would hate __________ my watch.",
    "to have lost",
    {
      alternatives: ["I'd hate to have lost"],
      explanation: "would hate to have + V3: would hate to have lost…",
    },
  ),
  grammarCloze(
    "u58-4-4",
    "58.4 · would love to have + V3",
    "It's too bad I didn't meet your parents. → I would love __________ your parents.",
    "to have met",
    {
      alternatives: ["I'd love to have met"],
      explanation: "would love to have + V3: would love to have met…",
    },
  ),
  grammarCloze(
    "u58-4-5",
    "58.4 · wouldn't like to have + V3",
    "I'm glad I wasn't alone. → I wouldn't like __________ alone.",
    "to have been",
    {
      explanation: "wouldn't like to have been alone.",
    },
  ),
  grammarCloze(
    "u58-4-6",
    "58.4 · would prefer to have + V3",
    "We should have travelled by train. → I would prefer __________ by train.",
    "to have travelled",
    {
      alternatives: ["to have traveled", "I'd prefer to have travelled"],
      explanation: "would prefer to have + V3: prefer to have travelled by train.",
    },
  ),
];
