import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/vocabulary-catalog-types";
import type { CuratedShowcaseIcon, CuratedShowcaseItem } from "@/lib/vocabulary/vocabulary-unit-registry";

const SECTION_ICONS: Record<VocabularyUnitCatalogEntry["section"], CuratedShowcaseIcon> = {
  people: "book",
  "at-home": "book",
  "school-work": "compass",
  leisure: "compass",
  world: "compass",
  social: "medical",
  verbs: "book",
  grammar: "book",
};

const SECTION_IMAGES: Partial<Record<VocabularyUnitCatalogEntry["section"], string>> = {
  people: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
  "at-home": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
  "school-work": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  leisure: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  world: "https://images.unsplash.com/photo-1469854523086-cc02afe5c88?auto=format&fit=crop&w=1200&q=80",
  social: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  verbs: "https://images.unsplash.com/photo-1456513080920-022dd7741c70?auto=format&fit=crop&w=1200&q=80",
  grammar: "https://images.unsplash.com/photo-1456513080920-022dd7741c70?auto=format&fit=crop&w=1200&q=80",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1490645933887-1cefb8bd438d?auto=format&fit=crop&w=1200&q=80";

/** Unsplash URLs that currently 404 — never use for the large featured hero card. */
const BROKEN_SHOWCASE_IMAGE_URLS = new Set<string>([
  SECTION_IMAGES.world,
  SECTION_IMAGES.verbs,
  SECTION_IMAGES.grammar,
  DEFAULT_IMAGE,
].filter((url): url is string => Boolean(url)));

export function resolveShowcaseImageUrl(entry: VocabularyUnitCatalogEntry): string {
  return SECTION_IMAGES[entry.section] ?? DEFAULT_IMAGE;
}

/** Featured card shows a full-bleed image — exclude decks whose section image is known broken. */
export function isFeaturedShowcaseEligible(entry: VocabularyUnitCatalogEntry): boolean {
  return !BROKEN_SHOWCASE_IMAGE_URLS.has(resolveShowcaseImageUrl(entry));
}

function hashString(input: string): number {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/** Stable seed — same catalog + UTC day on server and client (avoids hydration mismatch). */
function showcaseSeed(catalog: readonly VocabularyUnitCatalogEntry[]): number {
  const ids = catalog
    .map((entry) => entry.id)
    .sort()
    .join("\0");
  const dayUtc = new Date().toISOString().slice(0, 10);
  return hashString(`${ids}\n${dayUtc}`);
}

function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const next = [...items];
  let state = seed;
  for (let i = next.length - 1; i > 0; i -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const j = state % (i + 1);
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function catalogToShowcaseItem(
  entry: VocabularyUnitCatalogEntry,
  variant: CuratedShowcaseItem["variant"],
): CuratedShowcaseItem {
  if (entry.status === "published") {
    return {
      type: "unit",
      unitId: entry.id,
      variant,
      badge: entry.level,
      imageUrl: resolveShowcaseImageUrl(entry),
    };
  }

  return {
    type: "soon",
    id: entry.id,
    variant,
    title: entry.titleVi,
    description: entry.description,
    badge: "EVIU · ELEMENTARY",
    icon: SECTION_ICONS[entry.section],
    imageUrl: resolveShowcaseImageUrl(entry),
  };
}

/** Chọn 4 unit cho khối gợi ý trên hub — xoay theo ngày UTC, deterministic khi hydrate. */
export function buildRandomVocabularyShowcase(
  catalog: readonly VocabularyUnitCatalogEntry[],
): CuratedShowcaseItem[] {
  const seed = showcaseSeed(catalog);
  const shuffled = seededShuffle(catalog, seed);
  const eligible = catalog.filter(isFeaturedShowcaseEligible);
  const featuredEntry =
    shuffled.find(isFeaturedShowcaseEligible) ?? seededShuffle(eligible, seed + 1)[0];

  if (!featuredEntry) {
    throw new Error("No vocabulary units with a working showcase image for the featured slot.");
  }

  const secondary = shuffled.filter((entry) => entry.id !== featuredEntry.id).slice(0, 3);
  const variants: CuratedShowcaseItem["variant"][] = ["featured", "wide", "compact-purple", "compact"];

  return [
    catalogToShowcaseItem(featuredEntry, "featured"),
    ...secondary.map((entry, index) => catalogToShowcaseItem(entry, variants[index + 1] ?? "compact")),
  ];
}
