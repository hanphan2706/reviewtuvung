import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 30 exercises — may and might 2 (English Grammar in Use · Intermediate).
 * Primary answers follow the book; alternatives cover may as well / may not where natural.
 */
export const U30_MAY_AND_MIGHT_2_EXERCISES: readonly GrammarExercise[] = [
  // 30.1 — which alternative makes sense
  grammarCloze(
    "u30-1-2",
    "30.1 · might / going to",
    "'Have you decided what sort of car you want to buy?' 'Yes, __________ a sports car.'",
    "I'm going to get",
    {
      alternatives: ["I am going to get"],
      explanation: "Đã quyết định → I'm going to get (không dùng I might get).",
    },
  ),
  grammarCloze(
    "u30-1-3",
    "30.1 · might / going to",
    "'When is Tom coming to see us?' 'He hasn't said yet. __________ on Sunday.'",
    "He might come",
    {
      alternatives: ["he might come"],
      explanation: "Chưa chắc → He might come (không He's coming).",
    },
  ),
  grammarCloze(
    "u30-1-4",
    "30.1 · might / going to",
    "'Where are you going to put that picture?' 'I don't know yet. __________ it in the bedroom.'",
    "I might hang",
    {
      explanation: "Chưa quyết → I might hang (không I'm going to hang).",
    },
  ),
  grammarCloze(
    "u30-1-5",
    "30.1 · might / going to",
    "'What's Tanya going to do when she leaves school? Does she know yet?' 'Yes, she's decided. __________ to university.'",
    "She's going",
    {
      alternatives: ["She is going", "She's going to university", "She is going to university"],
      explanation: "Đã quyết → She's going (to university), không She might go.",
    },
  ),
  grammarCloze(
    "u30-1-6",
    "30.1 · might / going to",
    "'Do you have plans for the weekend?' 'Nothing fixed. __________.'",
    "I might go away",
    {
      explanation: "Chưa cố định → I might go away (không I'm going away).",
    },
  ),

  // 30.2 — might + verb
  grammarCloze(
    "u30-2-2",
    "30.2 · might + verb",
    "Don't make too much noise. You __________ the baby.",
    "might wake",
    {
      alternatives: ["may wake"],
      explanation: "Có lẽ sẽ đánh thức em bé → might wake.",
    },
  ),
  grammarCloze(
    "u30-2-3",
    "30.2 · might + verb",
    "Be careful with your coffee. You __________ it.",
    "might spill",
    {
      alternatives: ["may spill"],
      explanation: "Có lẽ sẽ làm đổ → might spill.",
    },
  ),
  grammarCloze(
    "u30-2-4",
    "30.2 · might + verb",
    "Don't forget your phone. You __________ it.",
    "might need",
    {
      alternatives: ["may need"],
      explanation: "Có lẽ sẽ cần điện thoại → might need.",
    },
  ),
  grammarCloze(
    "u30-2-5",
    "30.2 · might + verb",
    "It's better if we don't talk so loud. Somebody __________ us.",
    "might hear",
    {
      alternatives: ["may hear"],
      explanation: "Có lẽ ai đó nghe thấy → might hear.",
    },
  ),
  grammarCloze(
    "u30-2-6",
    "30.2 · might + verb",
    "Be careful. This footpath is icy. You __________.",
    "might slip",
    {
      alternatives: ["may slip"],
      explanation: "Có lẽ sẽ trượt → might slip.",
    },
  ),

  // 30.3 — might be able to / might have to
  grammarCloze(
    "u30-3-2",
    "30.3 · might be able to / have to",
    "I can come to the meeting, but I __________ before the end.",
    "might have to leave",
    {
      alternatives: ["may have to leave"],
      explanation: "Có lẽ phải đi sớm → might have to leave.",
    },
  ),
  grammarCloze(
    "u30-3-3",
    "30.3 · might be able to / have to",
    "I'm not free this evening, but I __________ you tomorrow evening.",
    "might be able to meet",
    {
      alternatives: ["may be able to meet"],
      explanation: "Có lẽ gặp được ngày mai → might be able to meet.",
    },
  ),
  grammarCloze(
    "u30-3-4",
    "30.3 · might be able to / have to",
    "I'm not sure whether this car park is free or not. We __________.",
    "might have to pay",
    {
      alternatives: ["may have to pay"],
      explanation: "Có lẽ phải trả tiền → might have to pay.",
    },
  ),
  grammarCloze(
    "u30-3-5",
    "30.3 · might be able to / have to",
    "There's a long queue. We __________ a long time.",
    "might have to wait",
    {
      alternatives: ["may have to wait"],
      explanation: "Có lẽ phải đợi lâu → might have to wait.",
    },
  ),
  grammarCloze(
    "u30-3-6",
    "30.3 · might be able to / have to",
    "'I've got a problem with my bike.' 'Let me have a look. I __________ it.'",
    "might be able to fix",
    {
      alternatives: ["may be able to fix"],
      explanation: "Có lẽ sửa được → might be able to fix.",
    },
  ),

  // 30.4 — might not
  grammarCloze(
    "u30-4-2",
    "30.4 · might not",
    "I haven't seen him for a long time. I don't know if I will recognise him or not. I might __________ him.",
    "not recognise",
    {
      alternatives: ["not recognize", "I might not recognise him", "I might not recognize him"],
      explanation: "Có lẽ sẽ không nhận ra → I might not recognise him.",
    },
  ),
  grammarCloze(
    "u30-4-3",
    "30.4 · might not",
    "We want to go to the game, but I don't know whether we'll be able to get tickets. We __________ for the game.",
    "might not be able to get tickets",
    {
      alternatives: ["may not be able to get tickets"],
      explanation: "Có lẽ không lấy được vé → might not be able to get tickets.",
    },
  ),
  grammarCloze(
    "u30-4-4",
    "30.4 · might not",
    "I said I'd do the shopping, but it's possible I won't have time. I __________ to do the shopping.",
    "might not have time",
    {
      alternatives: ["may not have time"],
      explanation: "Có lẽ không có thời gian → might not have time.",
    },
  ),
  grammarCloze(
    "u30-4-5",
    "30.4 · might not",
    "I've been invited to the wedding, but I'm not sure that I'll be able to go. I __________.",
    "might not be able to go",
    {
      alternatives: [
        "might not be able to go to the wedding",
        "may not be able to go",
        "may not be able to go to the wedding",
      ],
      explanation: "Có lẽ không đi được đám cưới → might not be able to go.",
    },
  ),

  // 30.5 — might as well
  grammarCloze(
    "u30-5-2",
    "30.5 · might as well",
    "It's not worth repairing the computer. I __________ a new one.",
    "might as well buy",
    {
      alternatives: ["may as well buy"],
      explanation: "Sửa không đáng → thôi thì mua máy mới → might as well buy.",
    },
  ),
];
