import type { VocabularyUnitCatalogEntry } from "@/lib/vocabulary/eviu-elementary-catalog";
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

function shuffle<T>(items: readonly T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
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
      badge: "EVIU · ELEMENTARY",
      imageUrl: SECTION_IMAGES[entry.section] ?? DEFAULT_IMAGE,
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
    imageUrl: SECTION_IMAGES[entry.section] ?? DEFAULT_IMAGE,
  };
}

/** Chọn ngẫu nhiên 4 unit cho khối gợi ý trên hub — layout featured + 3 ô phụ. */
export function buildRandomVocabularyShowcase(
  catalog: readonly VocabularyUnitCatalogEntry[],
): CuratedShowcaseItem[] {
  const picked = shuffle(catalog).slice(0, 4);
  const variants: CuratedShowcaseItem["variant"][] = ["featured", "wide", "compact-purple", "compact"];

  return picked.map((entry, index) => catalogToShowcaseItem(entry, variants[index] ?? "compact"));
}
