import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 109 exercises — Word order 1 (English Grammar in Use · Intermediate).
 * 109.1: wrong-order source → corrected blank. 109.2–109.3: jumbled parts in brackets.
 */
export const U109_WORD_ORDER_1_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u109-1-3",
    "109.1 · word order",
    "Wrong: Joe doesn't like very much football. → Joe doesn't like football __________.",
    "very much",
    { explanation: "like + object + very much (không: like very much football)." },
  ),
  grammarCloze(
    "u109-1-4",
    "109.1 · word order",
    "Wrong: Dan won easily the race. → Dan won the race __________.",
    "easily",
    { explanation: "won the race easily (không: won easily the race)." },
  ),
  grammarCloze(
    "u109-1-6",
    "109.1 · word order",
    "Wrong: Have you seen recently Chris? → Have you seen Chris __________?",
    "recently",
    { explanation: "seen Chris recently (không: seen recently Chris)." },
  ),
  grammarCloze(
    "u109-1-7",
    "109.1 · word order",
    "Wrong: I borrowed from a friend some money. → I borrowed some money __________.",
    "from a friend",
    { explanation: "borrowed some money from a friend." },
  ),
  grammarCloze(
    "u109-1-9",
    "109.1 · word order",
    "Wrong: I ate quickly my breakfast and went out. → I ate my breakfast __________ and went out.",
    "quickly",
    {
      explanation: "ate my breakfast quickly (hoặc: quickly ate my breakfast).",
    },
  ),
  grammarCloze(
    "u109-1-10",
    "109.1 · word order",
    "Wrong: Did you invite to the party a lot of people? → Did you invite a lot of people __________?",
    "to the party",
    { explanation: "invite … to the party (không: invite to the party …)." },
  ),
  grammarCloze(
    "u109-1-11",
    "109.1 · word order",
    "Wrong: Sam watches all the time TV. → Sam watches TV __________.",
    "all the time",
    { explanation: "watches TV all the time." },
  ),
  grammarCloze(
    "u109-1-2",
    "109.1 · place + time",
    "Wrong: Ben walks every morning to work. → Ben walks __________ every morning.",
    "to work",
    { explanation: "to work every morning (place trước time)." },
  ),
  grammarCloze(
    "u109-2-2",
    "109.2 · order parts",
    "I __________ on my way home. (a friend of mine / on my way home / met)",
    "met a friend of mine",
    { explanation: "met a friend of mine on my way home." },
  ),
  grammarCloze(
    "u109-2-3",
    "109.2 · order parts",
    "I forgot to put a stamp __________. (to put / on the envelope / a stamp / forgot)",
    "on the envelope",
    { explanation: "put a stamp on the envelope." },
  ),
  grammarCloze(
    "u109-2-4",
    "109.2 · order parts",
    "We __________ in the market. (a lot of fruit / bought / in the market)",
    "bought a lot of fruit",
    { explanation: "bought a lot of fruit in the market." },
  ),
  grammarCloze(
    "u109-2-5",
    "109.2 · order parts",
    "They built a new hotel __________. (opposite the park / a new hotel / built)",
    "opposite the park",
    { explanation: "built a new hotel opposite the park." },
  ),
  grammarCloze(
    "u109-2-8",
    "109.2 · order parts",
    "Please write your name __________. (at the top / write / of the page / your name)",
    "at the top of the page",
    { explanation: "write your name at the top of the page." },
  ),
  grammarCloze(
    "u109-3-2",
    "109.3 · place + time",
    "I go to the supermarket __________. (to the supermarket / every Friday / go)",
    "every Friday",
    { explanation: "to the supermarket every Friday." },
  ),
  grammarCloze(
    "u109-3-3",
    "109.3 · place + time",
    "Why did you come __________? (home / did you come / so late)",
    "home so late",
    { explanation: "come home so late." },
  ),
  grammarCloze(
    "u109-3-4",
    "109.3 · place + time",
    "Sarah takes her children to school __________. (her children / takes / every day / to school)",
    "every day",
    { explanation: "to school every day." },
  ),
  grammarCloze(
    "u109-3-5",
    "109.3 · place + time",
    "I haven't been to the cinema __________. (been / recently / to the cinema)",
    "recently",
    { explanation: "been to the cinema recently." },
  ),
  grammarCloze(
    "u109-3-8",
    "109.3 · place + time",
    "My brother has been in Canada __________. (has been / since April / in Canada)",
    "since April",
    { explanation: "in Canada since April." },
  ),
  grammarCloze(
    "u109-3-10",
    "109.3 · place + time",
    "Lisa left her umbrella __________ last night. (her umbrella / last night / in a restaurant / left)",
    "in a restaurant",
    { explanation: "left … in a restaurant last night." },
  ),
  grammarCloze(
    "u109-3-12",
    "109.3 · place + time",
    "Anna has been teaching Italian in London __________. (Italian / for the last three years / has been teaching / in London)",
    "for the last three years",
    { explanation: "in London for the last three years." },
  ),
];
