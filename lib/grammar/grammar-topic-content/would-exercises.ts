import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 36 exercises — Would (English Grammar in Use · Intermediate).
 * 36.1 (about yourself) skipped; matching converted to full-sentence cloze.
 */
export const U36_WOULD_EXERCISES: readonly GrammarExercise[] = [
  // 36.2 — would + verb form
  grammarCloze(
    "u36-2-2",
    "36.2 · would + động từ",
    "You should go and see the film. I think you __________ it.",
    "would enjoy",
    {
      alternatives: ["'d enjoy"],
      explanation: "Tưởng tượng hiện tại → would/'d enjoy.",
    },
  ),
  grammarCloze(
    "u36-2-3",
    "36.2 · would + động từ",
    "It's a pity you couldn't come to the party last night. You __________ it.",
    "would have enjoyed",
    {
      alternatives: ["'d have enjoyed"],
      explanation: "Tưởng tượng quá khứ → would have enjoyed.",
    },
  ),
  grammarCloze(
    "u36-2-4",
    "36.2 · would + động từ",
    "Shall I apply for the job or not? What __________ in my position?",
    "would you do",
    {
      alternatives: ["What would you do"],
      explanation: "What would you do in my position?",
    },
  ),
  grammarCloze(
    "u36-2-5",
    "36.2 · would + động từ",
    "I was in a hurry when I saw you. Otherwise I __________ to talk.",
    "would have stopped",
    {
      alternatives: ["'d have stopped"],
      explanation: "Quá khứ giả định → would have stopped.",
    },
  ),
  grammarCloze(
    "u36-2-6",
    "36.2 · would + động từ",
    "We took a taxi, but got stuck in the traffic. It __________ quicker to walk.",
    "would have been",
    {
      explanation: "Quá khứ giả định → would have been quicker.",
    },
  ),
  grammarCloze(
    "u36-2-7",
    "36.2 · would + động từ",
    "Why don't you go and see Clare? She __________ very pleased to see you.",
    "would be",
    {
      alternatives: ["'d be"],
      explanation: "Tưởng tượng hiện tại → would/'d be.",
    },
  ),
  grammarCloze(
    "u36-2-8",
    "36.2 · would + động từ",
    "In an ideal world, everybody __________ enough to eat.",
    "would have",
    {
      explanation: "Thế giới lý tưởng (không thật) → would have.",
    },
  ),

  // 36.3 — converted from matching (full responses)
  grammarCloze(
    "u36-3-2",
    "36.3 · will / would phản hồi",
    "I wouldn't like to live on a busy road. → __________",
    "It wouldn't be very nice",
    {
      alternatives: ["It wouldn't be very nice."],
      explanation: "Tưởng tượng không thích → It wouldn't be very nice.",
    },
  ),
  grammarCloze(
    "u36-3-3",
    "36.3 · will / would phản hồi",
    "I'm sorry your trip was cancelled. → __________",
    "It would have been fun",
    {
      alternatives: ["It would have been fun."],
      explanation: "Chuyến đi bị hủy → It would have been fun (giá như).",
    },
  ),
  grammarCloze(
    "u36-3-5",
    "36.3 · will / would phản hồi",
    "I'm glad we didn't go out in the rain. → __________",
    "It wouldn't have been very nice",
    {
      alternatives: ["It wouldn't have been very nice."],
      explanation: "May là không đi mưa → It wouldn't have been very nice.",
    },
  ),

  // 36.4 — promised + would/wouldn't
  grammarCloze(
    "u36-4-2",
    "36.4 · promised + would",
    "He promised __________.",
    "he'd call",
    {
      alternatives: ["he would call", "He promised he'd call", "He promised he would call"],
      explanation: "Quá khứ của I'll call → he'd / he would call.",
    },
  ),
  grammarCloze(
    "u36-4-3",
    "36.4 · promised + would",
    "You __________.",
    "promised you wouldn't tell her",
    {
      alternatives: [
        "promised you wouldn't tell anyone",
        "promised you wouldn't tell anybody",
        "You promised you wouldn't tell her",
        "You promised you wouldn't tell anyone",
      ],
      explanation: "Hứa không nói → promised you wouldn't tell her/anyone.",
    },
  ),
  grammarCloze(
    "u36-4-4",
    "36.4 · promised + would",
    "They __________.",
    "promised they'd wait",
    {
      alternatives: [
        "promised they would wait",
        "promised they'd wait for us",
        "promised they would wait for us",
        "They promised they'd wait",
        "They promised they would wait for us",
      ],
      explanation: "Hứa sẽ đợi → promised they'd / they would wait (for us).",
    },
  ),

  // 36.5 — wouldn't (refusal)
  grammarCloze(
    "u36-5-2",
    "36.5 · wouldn't (từ chối)",
    "I asked her a question, but she __________ me.",
    "wouldn't tell",
    {
      alternatives: ["would not tell"],
      explanation: "Từ chối nói → wouldn't tell.",
    },
  ),
  grammarCloze(
    "u36-5-3",
    "36.5 · wouldn't (từ chối)",
    "I was angry with him and he __________ to me for two weeks.",
    "wouldn't speak",
    {
      alternatives: ["would not speak"],
      explanation: "Không chịu nói chuyện → wouldn't speak.",
    },
  ),
  grammarCloze(
    "u36-5-4",
    "36.5 · wouldn't (từ chối)",
    "She __________ me help her.",
    "wouldn't let",
    {
      alternatives: ["would not let"],
      explanation: "Không chịu để tôi giúp → wouldn't let.",
    },
  ),

  // 36.6 — habitual would
  grammarCloze(
    "u36-6-2",
    "36.6 · would (thói quen quá khứ)",
    "When a train went past, the house __________.",
    "would shake",
    {
      explanation: "Thói quen quá khứ → would shake.",
    },
  ),
  grammarCloze(
    "u36-6-3",
    "36.6 · would (thói quen quá khứ)",
    "She was very generous. She __________ what she had with everyone else.",
    "would share",
    {
      explanation: "Thói quen quá khứ → would share.",
    },
  ),
  grammarCloze(
    "u36-6-5",
    "36.6 · would (thói quen quá khứ)",
    "We __________ there all day if the weather was fine.",
    "would stay",
    {
      explanation: "Thói quen quá khứ → would stay.",
    },
  ),
  grammarCloze(
    "u36-6-6",
    "36.6 · would (thói quen quá khứ)",
    "She __________ always __________ and say hello.",
    "would always smile",
    {
      alternatives: ["would smile", "would always smile and say hello"],
      explanation: "Thói quen: would always smile.",
    },
  ),
];
