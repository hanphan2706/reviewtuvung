import type { GrammarExercise } from "@/lib/grammar/grammar-exercise-types";
import { grammarCloze } from "@/lib/grammar/grammar-cloze";

/**
 * Unit 120 exercises — By and Until / By the Time … (English Grammar in Use · Intermediate).
 */
export const U120_BY_AND_UNTIL_BY_THE_TIME_EXERCISES: readonly GrammarExercise[] = [
  grammarCloze(
    "u120-1-1",
    "120.1 · by",
    "We have to be home not later than 5 o'clock. → We have to be home __________ 5 o'clock.",
    "by",
    { explanation: "by 5 o'clock = không muộn hơn 5 giờ." },
  ),
  grammarCloze(
    "u120-1-2",
    "120.1 · by",
    "I have to be at the airport not later than 8.30. → I have to be at the airport __________ 8.30.",
    "by",
    { explanation: "by 8.30." },
  ),
  grammarCloze(
    "u120-1-3",
    "120.1 · by",
    "Let me know not later than Saturday whether you can come. → Let me know __________ Saturday whether you can come to the party.",
    "by",
    { explanation: "Let me know by Saturday…." },
  ),
  grammarCloze(
    "u120-2-1",
    "120.2 · by / until",
    "Steve has gone away. He'll be away __________ Monday.",
    "until",
    {
      alternatives: ["till"],
      explanation: "away until/till Monday (= vắng đến thứ Hai).",
    },
  ),
  grammarCloze(
    "u120-2-2",
    "120.2 · by / until",
    "Sorry, but I must go. I have to be home __________ 5 o'clock.",
    "by",
    { explanation: "home by 5 o'clock (= không muộn hơn)." },
  ),
  grammarCloze(
    "u120-2-3",
    "120.2 · by / until",
    "According to the forecast, the bad weather will continue __________ the weekend.",
    "until",
    {
      alternatives: ["till"],
      explanation: "continue until the weekend.",
    },
  ),
  grammarCloze(
    "u120-2-4",
    "120.2 · by / until",
    "I have to decide __________ Friday whether to apply for the job or not.",
    "by",
    { explanation: "decide by Friday." },
  ),
  grammarCloze(
    "u120-2-5",
    "120.2 · by / until",
    "I think I'll wait __________ Thursday before making a decision.",
    "until",
    {
      alternatives: ["till"],
      explanation: "wait until Thursday.",
    },
  ),
  grammarCloze(
    "u120-2-6",
    "120.2 · by / until",
    "He should have called me __________ now.",
    "by",
    { explanation: "by now (= lẽ ra đã gọi rồi)." },
  ),
  grammarCloze(
    "u120-2-7",
    "120.2 · by / until",
    "This bill has to be paid __________ tomorrow.",
    "by",
    { explanation: "paid by tomorrow." },
  ),
  grammarCloze(
    "u120-2-8",
    "120.2 · by / until",
    "Don't pay the bill today. Wait __________ tomorrow.",
    "until",
    {
      alternatives: ["till"],
      explanation: "Wait until tomorrow.",
    },
  ),
  grammarCloze(
    "u120-2-9",
    "120.2 · by / until",
    "We hope to finish painting the house __________ Tuesday.",
    "by",
    { explanation: "finish by Tuesday." },
  ),
  grammarCloze(
    "u120-2-10",
    "120.2 · by / until",
    "'Will you still be in the office at 6.30?' 'No, I'll have gone home __________ then.'",
    "by",
    { explanation: "by then." },
  ),
  grammarCloze(
    "u120-2-11",
    "120.2 · by / until",
    "I'm moving next week. I'm staying with a friend __________ then.",
    "until",
    {
      alternatives: ["till"],
      explanation: "until then (= ở đến lúc đó).",
    },
  ),
  grammarCloze(
    "u120-2-13",
    "120.2 · by / until",
    "We have plenty of time. The film doesn't start __________ 8.30.",
    "until",
    {
      alternatives: ["till"],
      explanation: "doesn't start until 8.30.",
    },
  ),
  grammarCloze(
    "u120-2-14",
    "120.2 · by / until",
    "It is hoped that the new bridge will be completed __________ the end of the year.",
    "by",
    { explanation: "completed by the end of the year." },
  ),
  grammarCloze(
    "u120-4-1",
    "120.4 · By the time",
    "I got to the party much later than I intended. __________ I got to the party, most of the other guests had left.",
    "By the time",
    {
      alternatives: ["by the time"],
      explanation: "By the time I got to the party….",
    },
  ),
  grammarCloze(
    "u120-4-2",
    "120.4 · By the time",
    "It took me longer than expected to get to the station. __________ I got to the station, my train had already left.",
    "By the time",
    {
      alternatives: ["by the time"],
      explanation: "By the time I got to the station….",
    },
  ),
  grammarCloze(
    "u120-4-4",
    "120.4 · By the time",
    "I called the police but it was some time before they arrived. __________ the police arrived, the two men had disappeared.",
    "By the time",
    {
      alternatives: ["by the time"],
      explanation: "By the time the police arrived….",
    },
  ),
  grammarCloze(
    "u120-4-5",
    "120.4 · By the time",
    "It took us a long time to get to the top of the mountain. __________ we got to the top, we had to come down again.",
    "By the time",
    {
      alternatives: ["by the time"],
      explanation: "By the time we got to the top….",
    },
  ),
];
