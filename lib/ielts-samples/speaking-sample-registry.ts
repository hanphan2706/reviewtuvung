import type { SpeakingSample, SpeakingSampleCatalogEntry } from "@/lib/ielts-samples/speaking-sample-types";
import { SPEAKING_SAMPLES } from "@/lib/ielts-samples/speaking-samples.generated";

export function listSpeakingSamples(): readonly SpeakingSample[] {
  return SPEAKING_SAMPLES;
}

export function listSpeakingCatalog(): readonly SpeakingSampleCatalogEntry[] {
  return SPEAKING_SAMPLES.map(({ id, title, part, band }) => ({ id, title, part, band }));
}

export function getSpeakingSample(id: string): SpeakingSample | null {
  return SPEAKING_SAMPLES.find((sample) => sample.id === id) ?? null;
}
