import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam17ListeningPartMeta = {
  id: string;
  slug: string;
  title: string;
  heroImage: string;
  metaPill: string;
  topics: readonly ReadingTopic[];
  contextKey: string;
  examSlug: string;
  test: number;
  part: number;
  summary: string;
  durationMinutes: number;
  audioPublicPath: string;
  transcriptTryFiles: readonly string[];
};

type Cam17PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM17_PART_DEFS: readonly Cam17PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "buckworth-conservation-group",
    title: "Buckworth Conservation Group",
    summary: "A conservation group outlines beach and nature-reserve work plus upcoming events and a woodwork session.",
    topics: ["Environment", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "boat-trip-round-tasmania",
    title: "Boat Trip Round Tasmania",
    summary: "A guide describes a Tasmania boat tour covering capacity, lunchboxes, wildlife and coastal caves.",
    topics: ["Culture and Leisure", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "veterinary-work-experience",
    title: "Veterinary Work Experience",
    summary: "Students compare farm placements for veterinary science, from animals treated to feed supplements.",
    topics: ["Education", "Science"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "labyrinths",
    title: "Labyrinths",
    summary: "A lecture contrasts labyrinths with mazes and explores history, symbolism and modern health uses.",
    topics: ["Culture and Leisure", "Health"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "southoe-village-volunteering",
    title: "Southoe Village Volunteering",
    summary: "Volunteers are needed for a village library, lunch club, errands and upcoming social events.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "oniton-hall",
    title: "Oniton Hall",
    summary: "A historic hall tour covers past owners, servant life displays and farm activities for visitors.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "romeo-and-juliet-review",
    title: "Romeo and Juliet Review",
    summary: "Students plan a theatre review and compare opinions on set, casting and other production choices.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "icelandic-language-digital-technology",
    title: "Icelandic Language and Digital Technology",
    summary: "A lecture on how digital media and English use affect young speakers of Icelandic.",
    topics: ["Technology", "Education"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "surfing-holidays-advice",
    title: "Surfing Holidays Advice",
    summary: "A friend recommends Irish surfing spots, weather, costs and what gear to hire.",
    topics: ["Culture and Leisure", "Sports"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "school-extended-hours-childcare",
    title: "School Extended Hours Childcare",
    summary: "A manager explains before/after-school care, fees, food rules and holiday arrangements.",
    topics: ["Education", "Social"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "holly-work-placement-tutorial",
    title: "Holly’s Work Placement Tutorial",
    summary: "Holly and her tutor discuss a stadium placement, safety, spectators and events skills.",
    topics: ["Education", "Sports"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "bird-migration-theory",
    title: "Bird Migration Theory",
    summary: "A lecture traces old migration theories, ringing evidence and early migration maps.",
    topics: ["Science", "Environment"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "easy-life-cleaning-services",
    title: "Easy Life Cleaning Services",
    summary: "A cleaning company confirms a package, extras, allergies and how cleaners are vetted.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "hotel-staff-retention",
    title: "Hotel Staff Retention",
    summary: "A talk on why hotel staff leave and how different hotels cut turnover.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "sporting-equipment-development",
    title: "Sporting Equipment Development",
    summary: "Students discuss school sport experiences in Kenya and how sports gear has evolved.",
    topics: ["Sports", "Education"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "maple-syrup",
    title: "Maple Syrup",
    summary: "A lecture on maple syrup production from early methods to modern Canadian industry.",
    topics: ["Science", "Environment"],
    durationMinutes: 7,
  },
];

function cam17PartMeta(def: Cam17PartDef): Cam17ListeningPartMeta {
  const id = `cam17-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam17-t${def.test}`,
    examSlug: "cam17",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam17", def.test, def.part),
    transcriptTryFiles: [`cam17-test${def.test}.cleaned.txt`, `cam17-test ${def.test}.txt`],
  };
}

/** Cam 17 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM17_LISTENING_PARTS: readonly Cam17ListeningPartMeta[] = CAM17_PART_DEFS.map(cam17PartMeta);
