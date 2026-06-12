import { ACCENT_EXPLORE_PAGE_DESCRIPTION } from "@/lib/listening/accent-explore-content";
import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import {
  ACCENT_COMPARISON_SETS,
  type AccentComparisonSet,
} from "@/lib/listening/speech-accent-catalog";

export const LISTENING_ACCENT_HUB_HREF = `${LISTENING_HUB_HREF}/chat-giong`;

export function listeningAccentCompareHref(setId?: string): string {
  if (!setId) return LISTENING_ACCENT_HUB_HREF;
  return `${LISTENING_ACCENT_HUB_HREF}?bo=${encodeURIComponent(setId)}`;
}

/** @deprecated Region sub-pages removed — links to compare hub. */
export function listeningAccentRegionHref(_slug: string): string {
  return LISTENING_ACCENT_HUB_HREF;
}

export type ListeningAccentExplorePageConfig = {
  title: string;
  description: string;
  comparisonSets: readonly AccentComparisonSet[];
};

export function listeningAccentExplorePage(): ListeningAccentExplorePageConfig {
  return {
    title: "Khám phá chất giọng",
    description: ACCENT_EXPLORE_PAGE_DESCRIPTION,
    comparisonSets: ACCENT_COMPARISON_SETS,
  };
}

export function parseAccentComparisonSetId(raw: string | null): string | null {
  if (!raw?.trim()) return null;
  const id = raw.trim();
  return ACCENT_COMPARISON_SETS.some((set) => set.id === id) ? id : null;
}
