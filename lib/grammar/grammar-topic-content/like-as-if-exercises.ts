import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 118 exercises — Like / As If (English Grammar in Use · Intermediate).
 */
export const U118_LIKE_AS_IF_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u118-1-1",
    "118.1 · look like / as if",
    "You meet Bill. He has a black eye. → You look __________ you've been in a fight.",
    "like",
    { explanation: "You look like you've been in a fight." },
  ),
  grammarCloze(
    "u118-1-2",
    "118.1 · look like / as if",
    "Claire looks terrified. → What's the matter? You look __________ you've seen a ghost.",
    "as if",
    {
      alternatives: ["like", "as though"],
      explanation: "look as if / like / as though you've seen a ghost.",
    },
  ),
  grammarCloze(
    "u118-1-3",
    "118.1 · feel like",
    "You've only run one kilometre but you're exhausted. → I feel __________ I've just run a marathon.",
    "like",
    {
      alternatives: ["as if", "as though"],
      explanation: "I feel like / as if I've run a marathon.",
    },
  ),
  grammarCloze(
    "u118-1-4",
    "118.1 · sound as if",
    "Joe is on holiday and sounds happy. → You sound __________ you're having a good time.",
    "as if",
    {
      alternatives: ["like", "as though"],
      explanation: "sound as if / like you're having a good time.",
    },
  ),
  grammarCloze(
    "u118-2-1",
    "118.2 · It looks like",
    "Sarah said she would be here an hour ago. → It looks __________ she isn't coming.",
    "like",
    {
      alternatives: ["as if"],
      explanation: "It looks like / as if she isn't coming.",
    },
  ),
  grammarCloze(
    "u118-2-2",
    "118.2 · It looks like",
    "The sky is full of black clouds. → It looks like __________.",
    "it's going to rain",
    {
      alternatives: ["it is going to rain", "it's going to rain.", "it is going to rain."],
      explanation: "It looks like it's going to rain.",
    },
  ),
  grammarCloze(
    "u118-2-3",
    "118.2 · It sounds like",
    "You hear two people shouting next door. → It sounds like __________.",
    "they're having an argument",
    {
      alternatives: [
        "they are having an argument",
        "they're having an argument.",
        "they are having an argument.",
      ],
      explanation: "It sounds like they're having an argument.",
    },
  ),
  grammarCloze(
    "u118-2-4",
    "118.2 · It looks like",
    "You see an ambulance and two damaged cars. → It looks like __________.",
    "there's been an accident",
    {
      alternatives: [
        "there has been an accident",
        "there's been an accident.",
        "there has been an accident.",
      ],
      explanation: "It looks like there's been an accident.",
    },
  ),
  grammarCloze(
    "u118-2-6",
    "118.2 · It sounds like",
    "Dave isn't feeling well. He tells you about it. → It sounds like __________.",
    "you should see a doctor",
    {
      alternatives: ["you should see a doctor."],
      explanation: "It sounds like you should see a doctor.",
    },
  ),
  grammarCloze(
    "u118-3-1",
    "118.3 · as if",
    "Mark looks very tired. He looks as if he __________ a good rest.",
    "needs",
    { explanation: "as if he needs a good rest." },
  ),
  grammarCloze(
    "u118-3-2",
    "118.3 · as if",
    "I don't think Paul was joking. He looked as if he __________ what he said.",
    "meant",
    { explanation: "as if he meant what he said." },
  ),
  grammarCloze(
    "u118-3-3",
    "118.3 · as if",
    "What's the matter with Lisa? She's walking as if she __________ her leg.",
    "has hurt",
    {
      alternatives: ["hurt", "'s hurt"],
      explanation: "as if she's hurt / she hurt her leg.",
    },
  ),
  grammarCloze(
    "u118-3-4",
    "118.3 · as if",
    "Paul ate his dinner very quickly. He ate as if he __________ for a week.",
    "hadn't eaten",
    {
      alternatives: ["had not eaten"],
      explanation: "as if he hadn't eaten for a week.",
    },
  ),
  grammarCloze(
    "u118-3-6",
    "118.3 · as if",
    "I told my friends about my plan. They looked at me as if I __________ crazy.",
    "was",
    {
      alternatives: ["were"],
      explanation: "as if I was/were crazy.",
    },
  ),
  grammarCloze(
    "u118-3-8",
    "118.3 · as if",
    "Everybody ignored me as if I __________ exist.",
    "didn't",
    {
      alternatives: ["did not"],
      explanation: "as if I didn't exist.",
    },
  ),
  grammarCloze(
    "u118-4-1",
    "118.4 · as if + past",
    "Andy is a terrible driver. He drives as if he __________ the only driver on the road.",
    "were",
    {
      alternatives: ["was"],
      explanation: "as if he were/was the only driver (ý không thật).",
    },
  ),
  grammarCloze(
    "u118-4-2",
    "118.4 · as if + past",
    "I'm 20 years old, so please don't talk to me as if I __________ a child.",
    "were",
    {
      alternatives: ["was"],
      explanation: "as if I was/were a child.",
    },
  ),
  grammarCloze(
    "u118-4-3",
    "118.4 · as if + past",
    "Steve has never met Nicola, but he talks about her as if she __________ his best friend.",
    "were",
    {
      alternatives: ["was"],
      explanation: "as if she was/were his best friend.",
    },
  ),
  grammarCloze(
    "u118-4-4",
    "118.4 · as if + past",
    "We first met a long time ago, but I remember it as if it __________ yesterday.",
    "were",
    {
      alternatives: ["was"],
      explanation: "as if it was/were yesterday.",
    },
  ),
  grammarCloze(
    "u118-3-7",
    "118.3 · as if",
    "I invited Kate to the party, but she wasn't enthusiastic. She sounded as if she __________ to come.",
    "didn't want",
    {
      alternatives: ["did not want"],
      explanation: "as if she didn't want to come.",
    },
  ),
];
