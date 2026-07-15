import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 116 exercises — As (English Grammar in Use · Intermediate).
 * Skip open "use your own ideas" items (116.5).
 */
export const U116_AS_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u116-1-1",
    "116.1 · as = same time",
    "We all waved goodbye to Liz __________ she drove away.",
    "as",
    { explanation: "as = cùng lúc." },
  ),
  grammarCloze(
    "u116-1-2",
    "116.1 · as = same time",
    "I listened __________ she told me her story.",
    "as",
    { explanation: "I listened as she told…" },
  ),
  grammarCloze(
    "u116-1-3",
    "116.1 · as = same time",
    "I burnt myself __________ I was taking a hot dish out of the oven.",
    "as",
    { explanation: "as I was taking…" },
  ),
  grammarCloze(
    "u116-1-4",
    "116.1 · as = same time",
    "The spectators cheered __________ the two teams came onto the field.",
    "as",
    { explanation: "as the two teams came…" },
  ),
  grammarCloze(
    "u116-1-5",
    "116.1 · as = same time",
    "A dog ran out in front of the car __________ we were driving along the road.",
    "as",
    { explanation: "as we were driving…" },
  ),
  grammarCloze(
    "u116-2-1",
    "116.2 · as = because",
    "__________ I was hungry, I decided to find somewhere to eat.",
    "As",
    { explanation: "As = because." },
  ),
  grammarCloze(
    "u116-2-2",
    "116.2 · as = because",
    "__________ today is a public holiday, all government offices are shut.",
    "As",
    { explanation: "As today is a public holiday…" },
  ),
  grammarCloze(
    "u116-2-3",
    "116.2 · as = because",
    "__________ I didn't want to disturb anybody, I tried to be very quiet.",
    "As",
    { explanation: "As I didn't want to disturb…" },
  ),
  grammarCloze(
    "u116-2-4",
    "116.2 · as = because",
    "__________ I can't go to the concert, you can have my ticket.",
    "As",
    { explanation: "As I can't go…" },
  ),
  grammarCloze(
    "u116-2-5",
    "116.2 · as = because",
    "__________ it was a nice day, we went for a walk by the canal.",
    "As",
    { explanation: "As it was a nice day…" },
  ),
  grammarCloze(
    "u116-3-1",
    "116.3 · meaning of as",
    "As they lived near us, we used to see them quite often. Here as means __________.",
    "because",
    { explanation: "as = because." },
  ),
  grammarCloze(
    "u116-3-2",
    "116.3 · meaning of as",
    "Kate slipped as she was getting off the bus. Here as means __________.",
    "at the same time as",
    {
      alternatives: ["at the same time"],
      explanation: "as = at the same time as.",
    },
  ),
  grammarCloze(
    "u116-3-6",
    "116.3 · meaning of as",
    "We decided to go out to eat as we had no food at home. Here as means __________.",
    "because",
    { explanation: "as = because." },
  ),
  grammarCloze(
    "u116-4-1",
    "116.4 · as or when",
    "Julia got married __________ she was 22.",
    "when",
    { explanation: "when (tuần tự/ thời điểm tuổi) — không as." },
  ),
  grammarCloze(
    "u116-4-2",
    "116.4 · as or when",
    "__________ the day went on, the weather got worse.",
    "As",
    { explanation: "As the day went on… (OK — đồng thời kéo dài)." },
  ),
  grammarCloze(
    "u116-4-4",
    "116.4 · as or when",
    "I lost my phone __________ I was in London.",
    "when",
    { explanation: "when I was in London (không as)." },
  ),
  grammarCloze(
    "u116-4-5",
    "116.4 · as or when",
    "__________ I left school, I didn't know what to do.",
    "When",
    { explanation: "When I left school… (sau đó)." },
  ),
  grammarCloze(
    "u116-4-7",
    "116.4 · as or when",
    "I used to live near the sea __________ I was a child.",
    "when",
    { explanation: "when I was a child." },
  ),
];
