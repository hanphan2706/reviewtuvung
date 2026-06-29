import { STELLA_ELICITATION_PARAGRAPH } from "@/lib/listening/stella-paragraph";
import {
  ACCENT_COMPARISON_SETS,
  speechAccentAudioUrl,
  type SpeechAccentSample,
} from "@/lib/listening/speech-accent-catalog";

export type AccentDiscoverPassageId = "stella" | "north-wind" | "rainbow" | "arthur";

export type AccentDiscoverPassage = {
  id: AccentDiscoverPassageId;
  title: string;
  text: string;
  /** GMU archive samples — only Stella has these. */
  source: "archive" | "tts";
};

export const ACCENT_DISCOVER_PASSAGES: readonly AccentDiscoverPassage[] = [
  {
    id: "stella",
    title: "Stella paragraph",
    text: STELLA_ELICITATION_PARAGRAPH,
    source: "archive",
  },
  {
    id: "north-wind",
    title: "The North Wind and the Sun",
    text:
      "The North Wind and the Sun were disputing which was the stronger, when a traveler came along wrapped in a warm cloak. They agreed that the one who first succeeded in making the traveler take his cloak off should be considered stronger than the other. Then the North Wind blew as hard as he could, but the more he blew the more closely did the traveler fold his cloak around him; and at last the North Wind gave up the attempt. Then the Sun shone out warmly, and immediately the traveler took off his cloak. And so the North Wind was obliged to confess that the Sun was the stronger of the two.",
    source: "tts",
  },
  {
    id: "rainbow",
    title: "Rainbow passage",
    text:
      "When the sunlight strikes raindrops in the air, they act as a prism and form a rainbow. The rainbow is a division of white light into many beautiful colors. These take the shape of a long round arch, with its path high above, and its two ends apparently beyond the horizon. There is, according to legend, a boiling pot of gold at one end. People look, but no one ever finds it. When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.",
    source: "tts",
  },
  {
    id: "arthur",
    title: "Arthur the rat",
    text:
      "Arthur the rat hurried through the village, chattering to himself about the weather. The north wind blew bitterly, and the ground was covered with a thin layer of snow. Every few steps he paused to nibble at a crust of bread, then scurried on toward the barn where he stored his hoard.",
    source: "tts",
  },
] as const;

export type PlayableAccentId = "british" | "american" | "australian";

const DEFAULT_SET = ACCENT_COMPARISON_SETS[0];

const ACCENT_DISCOVER_AUDIO_BASE = "/listening-assets/accent-discover";

export function accentDiscoverPassageById(id: AccentDiscoverPassageId): AccentDiscoverPassage {
  const passage = ACCENT_DISCOVER_PASSAGES.find((item) => item.id === id);
  if (!passage) return ACCENT_DISCOVER_PASSAGES[0];
  return passage;
}

export function accentDiscoverArchiveSample(accentId: PlayableAccentId): SpeechAccentSample {
  return DEFAULT_SET[accentId];
}

export function accentDiscoverPassageAudioUrl(
  passageId: AccentDiscoverPassageId,
  accentId: PlayableAccentId,
): string {
  const passage = accentDiscoverPassageById(passageId);
  if (passage.source === "archive") {
    return speechAccentAudioUrl(accentDiscoverArchiveSample(accentId).sampleId);
  }
  return `${ACCENT_DISCOVER_AUDIO_BASE}/passages/${passageId}/${accentId}.mp3`;
}

export function accentDiscoverWordAudioUrl(pairId: string, variant: "uk" | "us"): string {
  return `${ACCENT_DISCOVER_AUDIO_BASE}/words/${pairId}-${variant}.mp3`;
}
