import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 68 exercises — -ing Clauses.
 */
export const U68_ING_CLAUSES_EXERCISES: readonly GrammarExercise[] = [
  // 68.1
  grammarCloze(
    "u68-1-1",
    "68.1 · -ing same time",
    "Kate was in the kitchen __________ coffee.",
    "making",
    {
      explanation: "Kate was in the kitchen making coffee.",
    },
  ),
  grammarCloze(
    "u68-1-2",
    "68.1 · -ing same time",
    "Amy was sitting in an armchair __________ a book.",
    "reading",
    {
      explanation: "… reading a book.",
    },
  ),
  grammarCloze(
    "u68-1-3",
    "68.1 · -ing same time",
    "Nicola opened the door carefully __________ not to make a noise.",
    "trying",
    {
      explanation: "… trying not to make a noise.",
    },
  ),
  grammarCloze(
    "u68-1-4",
    "68.1 · -ing same time",
    "Sarah went out __________ she would be back in an hour.",
    "saying",
    {
      explanation: "… saying she would be back…",
    },
  ),
  grammarCloze(
    "u68-1-5",
    "68.1 · -ing same time",
    "Lisa worked in Rome for two years __________ English.",
    "teaching",
    {
      explanation: "… teaching English.",
    },
  ),
  grammarCloze(
    "u68-1-6",
    "68.1 · -ing same time",
    "Anna walked around the town __________ at the sights and taking pictures.",
    "looking",
    {
      explanation: "… looking at the sights and taking pictures.",
    },
  ),

  // 68.2
  grammarCloze(
    "u68-2-1",
    "68.2 · -ing during another action",
    "Joe hurt his knee __________ football.",
    "playing",
    {
      explanation: "hurt his knee playing football.",
    },
  ),
  grammarCloze(
    "u68-2-2",
    "68.2 · -ing during another action",
    "I got very wet __________ in the rain.",
    "walking",
    {
      explanation: "got very wet walking in the rain.",
    },
  ),
  grammarCloze(
    "u68-2-3",
    "68.2 · -ing during another action",
    "Laura had an accident __________ to work.",
    "driving",
    {
      explanation: "had an accident driving to work.",
    },
  ),
  grammarCloze(
    "u68-2-4",
    "68.2 · -ing during another action",
    "My friend slipped and fell __________ off a bus.",
    "getting",
    {
      explanation: "slipped and fell getting off a bus.",
    },
  ),
  grammarCloze(
    "u68-2-5",
    "68.2 · -ing during another action",
    "Emily hurt her back __________ to lift a heavy box.",
    "trying",
    {
      explanation: "hurt her back trying to lift…",
    },
  ),
  grammarCloze(
    "u68-2-6",
    "68.2 · -ing during another action",
    "Two people were overcome by smoke __________ to put out the fire.",
    "trying",
    {
      explanation: "overcome by smoke trying to put out the fire.",
    },
  ),

  // 68.3
  grammarCloze(
    "u68-3-1",
    "68.3 · Having + V3",
    "__________ her work, Katherine left the office and went home.",
    "Having finished",
    {
      explanation: "Having finished her work,…",
    },
  ),
  grammarCloze(
    "u68-3-2",
    "68.3 · Having + V3",
    "__________ our tickets, we went into the theatre and took our seats.",
    "Having bought",
    {
      alternatives: ["Having got"],
      explanation: "Having bought/got our tickets,…",
    },
  ),
  grammarCloze(
    "u68-3-3",
    "68.3 · Having + V3",
    "__________ the problem, I think we'll be able to find a solution.",
    "Having discussed",
    {
      alternatives: ["Having talked about", "Having thought about"],
      explanation: "Having discussed/talked about/thought about the problem,…",
    },
  ),
  grammarCloze(
    "u68-3-4",
    "68.3 · Having + V3",
    "__________ he was hungry, Joe now says he doesn't want to eat anything.",
    "Having said",
    {
      explanation: "Having said he was hungry,…",
    },
  ),

  // 68.4
  grammarCloze(
    "u68-4-1",
    "68.4 · -ing reason",
    "I felt tired. So I went to bed early. → __________, I went to bed early.",
    "Feeling tired",
    {
      explanation: "Feeling tired, I went to bed early.",
    },
  ),
  grammarCloze(
    "u68-4-2",
    "68.4 · -ing reason",
    "Robert is a vegetarian. So he doesn't eat meat. → __________, Robert doesn't eat any kind of meat.",
    "Being a vegetarian",
    {
      explanation: "Being a vegetarian,…",
    },
  ),
  grammarCloze(
    "u68-4-3",
    "68.4 · Not -ing reason",
    "I didn't have a phone. So I had no way of contacting anyone. → __________, I had no way of contacting anyone.",
    "Not having a phone",
    {
      explanation: "Not having a phone,…",
    },
  ),
  grammarCloze(
    "u68-4-4",
    "68.4 · Having … reason",
    "We had spent nearly all our money. So we couldn't afford a hotel. → __________, we couldn't afford to stay at a hotel.",
    "Having spent nearly all our money",
    {
      explanation: "Having spent nearly all our money,…",
    },
  ),
];
