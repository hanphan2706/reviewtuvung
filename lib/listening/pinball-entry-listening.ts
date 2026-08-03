import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import { pinballEntryListeningAudioApiPath } from "@/lib/listening/listening-materials-urls";

/**
 * Public, no-login entrance test for the Pinball IELTS course.
 * Deliberately NOT added to `LISTENING_PARTS_PILOT` / `LISTENING_CAMBRIDGE_TESTS`
 * so it never shows up in the general listening hub or Cambridge catalog —
 * it's only reachable via its direct `/lam-bai` URL.
 */
export const PINBALL_ENTRY_TEST_ID = "pinball-entry";

const PINBALL_ENTRY_PART_INFO: Record<number, { title: string; summary: string; durationMinutes: number }> = {
  1: {
    title: "Pinball Entry Test — Part 1",
    summary: "A phone call about getting to Bristol Airport — transport options, journey times and bus routes.",
    durationMinutes: 5,
  },
  2: {
    title: "Pinball Entry Test — Part 2",
    summary: "A talk about an apartment layout and simple tips for making a rented home feel comfortable.",
    durationMinutes: 5,
  },
  3: {
    title: "Pinball Entry Test — Part 3",
    summary: "Two students discuss the 'linguistic landscape' and how researchers study languages on public signs.",
    durationMinutes: 6,
  },
  4: {
    title: "Pinball Entry Test — Part 4",
    summary: "A talk about what makes everyday things annoying, from technology to unpredictable sounds.",
    durationMinutes: 7,
  },
};

const PINBALL_ENTRY_PART_INFO_FALLBACK = { title: "Pinball Entry Test", summary: "", durationMinutes: 5 };

export const PINBALL_ENTRY_LISTENING_PARTS: readonly ListeningPartMeta[] = [1, 2, 3, 4].map((part) => {
  const info = PINBALL_ENTRY_PART_INFO[part] ?? PINBALL_ENTRY_PART_INFO_FALLBACK;
  return {
    id: `pinball-entry-p${part}`,
    slug: `pinball-entry-part-${part}`,
    title: info.title,
    heroImage: "",
    metaPill: "Pinball IELTS — Entry test",
    topics: [],
    contextKey: "pinball-entry",
    examSlug: "pinball-entry",
    test: 1,
    part,
    summary: info.summary,
    durationMinutes: info.durationMinutes,
    audioPublicPath: pinballEntryListeningAudioApiPath(part),
    transcriptTryFiles: [`pinball-entry-part${part}.txt`],
  };
});

export function getPinballEntryListeningPart(part: number): ListeningPartMeta | undefined {
  return PINBALL_ENTRY_LISTENING_PARTS.find((p) => p.part === part);
}
