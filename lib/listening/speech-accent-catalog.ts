export type SpeechAccentSample = {
  sampleId: string;
  speakerId: number;
  sex: "male" | "female";
  location: string;
};

export type AccentComparisonSet = {
  id: string;
  title: string;
  subtitle: string;
  british: SpeechAccentSample;
  american: SpeechAccentSample;
  australian: SpeechAccentSample;
};

export const ACCENT_REGION_COLUMNS = [
  { key: "british" as const, shortTitle: "Anh - Anh", flagEmoji: "🇬🇧" },
  { key: "american" as const, shortTitle: "Anh - Mỹ", flagEmoji: "🇺🇸" },
  { key: "australian" as const, shortTitle: "Anh - Úc", flagEmoji: "🇦🇺" },
] as const;

import { mediaAudioApiPath } from "@/lib/media/media-audio-storage";

export function speechAccentAudioUrl(sampleId: string): string {
  return mediaAudioApiPath(`accents/${sampleId}.wav`);
}

export function speechAccentArchiveSampleUrl(speakerId: number): string {
  return `https://accent.gmu.edu/browse_language.php?function=detail&speakerid=${speakerId}`;
}

export const ACCENT_COMPARISON_SETS: readonly AccentComparisonSet[] = [
  {
    id: "set-1",
    title: "Bộ 1",
    subtitle: "Birmingham · Pittsburgh · Brisbane",
    british: { sampleId: "english2", speakerId: 2, sex: "female", location: "Birmingham, UK" },
    american: { sampleId: "english1", speakerId: 1, sex: "male", location: "Pittsburgh, Pennsylvania" },
    australian: { sampleId: "english3", speakerId: 3, sex: "female", location: "Brisbane, Australia" },
  },
  {
    id: "set-2",
    title: "Bộ 2",
    subtitle: "Glasgow · Boston · Sydney",
    british: { sampleId: "english24", speakerId: 24, sex: "male", location: "Glasgow, Scotland" },
    american: { sampleId: "english21", speakerId: 21, sex: "female", location: "Boston, Massachusetts" },
    australian: { sampleId: "english84", speakerId: 84, sex: "male", location: "Sydney, Australia" },
  },
  {
    id: "set-3",
    title: "Bộ 3",
    subtitle: "Leicester · San Diego · Melbourne",
    british: { sampleId: "english12", speakerId: 12, sex: "female", location: "Leicester, UK" },
    american: { sampleId: "english33", speakerId: 33, sex: "male", location: "San Diego, California" },
    australian: { sampleId: "english77", speakerId: 77, sex: "male", location: "Melbourne, Australia" },
  },
  {
    id: "set-4",
    title: "Bộ 4",
    subtitle: "Henley-on-Thames · Atlanta · Perth",
    british: { sampleId: "english13", speakerId: 13, sex: "male", location: "Henley-on-Thames, UK" },
    american: { sampleId: "english25", speakerId: 25, sex: "male", location: "Atlanta, Georgia" },
    australian: { sampleId: "english8", speakerId: 8, sex: "female", location: "Perth, Australia" },
  },
] as const;

/** Sample IDs used across all comparison sets — mirrored under public/listening-assets/accents. */
export const SPEECH_ACCENT_SAMPLE_IDS = [
  ...new Set(
    ACCENT_COMPARISON_SETS.flatMap((set) => [
      set.british.sampleId,
      set.american.sampleId,
      set.australian.sampleId,
    ]),
  ),
] as const;

export function isSpeechAccentSampleId(sampleId: string): sampleId is (typeof SPEECH_ACCENT_SAMPLE_IDS)[number] {
  return (SPEECH_ACCENT_SAMPLE_IDS as readonly string[]).includes(sampleId);
}

export const ACCENT_COMPARISON_SET_COUNT = ACCENT_COMPARISON_SETS.length;

export function accentComparisonSetById(id: string): AccentComparisonSet | null {
  return ACCENT_COMPARISON_SETS.find((set) => set.id === id) ?? null;
}

export function accentComparisonSetIndex(id: string): number {
  const index = ACCENT_COMPARISON_SETS.findIndex((set) => set.id === id);
  return index >= 0 ? index : 0;
}
