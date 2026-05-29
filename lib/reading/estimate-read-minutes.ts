import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { isCompassPublishingPilot } from "@/lib/reading/hub-articles";

/**
 * ~63 wpm effective for Vietnamese learners on IELTS passages (~830 words → ~13 min).
 * Native skim rates (~200 wpm) are misleading for this product.
 */
const LEARNING_READ_WPM = 63;

type ReadMinutesPreset = {
  minMinutes: number;
  maxMinutes: number;
};

/** Cambridge / IELTS-length passages (~800+ words). */
const IELTS_LONG_PRESET: ReadMinutesPreset = {
  minMinutes: 10,
  maxMinutes: 22,
};

/** Compass Reading Challenge units (~200 words). */
const COMPASS_SHORT_PRESET: ReadMinutesPreset = {
  minMinutes: 2,
  maxMinutes: 6,
};

export function countPassageWords(body: string): number {
  return body.split(/\s+/).filter(Boolean).length;
}

function readMinutesPresetForPilot(pilotId?: ReadingPilotId): ReadMinutesPreset {
  return pilotId && isCompassPublishingPilot(pilotId) ? COMPASS_SHORT_PRESET : IELTS_LONG_PRESET;
}

export function estimateReadMinutes(body: string, pilotId?: ReadingPilotId): number {
  const { minMinutes, maxMinutes } = readMinutesPresetForPilot(pilotId);
  const words = countPassageWords(body);
  const minutes = Math.round(words / LEARNING_READ_WPM);
  return Math.min(maxMinutes, Math.max(minMinutes, minutes));
}
