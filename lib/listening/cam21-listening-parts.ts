import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam21ListeningPartMeta = {
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

type Cam21PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM21_PART_DEFS: readonly Cam21PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "oyster-bay-sailing-club",
    title: "Oyster Bay Sailing Club",
    summary: "A sailing club outlines course levels, costs and practical requirements for beginners.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "working-as-a-makeup-trainee",
    title: "Working as a Makeup Trainee",
    summary: "A makeup artist explains trainee work on film sets, pay expectations and career challenges.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "ocean-biodiversity-lecture",
    title: "Ocean Biodiversity Lecture",
    summary: "Students discuss a lecture on ocean biodiversity and match comments to research topics.",
    topics: ["Science", "Environment"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "sources-of-rubber",
    title: "Sources of Rubber",
    summary: "A lecture on natural rubber sources, demand, recycling and how plants respond to stress.",
    topics: ["Science", "Environment"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "steynford-college-classes",
    title: "Steynford College Classes",
    summary: "One-day college courses covering baking, dates, fees and what participants need to bring.",
    topics: ["Education", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "marsden-coastal-walk",
    title: "Marsden Coastal Walk",
    summary: "Advice for a coastal walk plus a map labelling task for landmarks along the route.",
    topics: ["Culture and Leisure", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "food-safety-course-project",
    title: "Food Safety Course Project",
    summary: "Students review food-safety sessions and map stages of developing a new food product.",
    topics: ["Education", "Science"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "cruise-ship-industry-challenges",
    title: "Cruise Ship Industry Challenges",
    summary: "A lecture on overtourism, public perception and sustainability pressures on cruise ships.",
    topics: ["Environment", "Social"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "ferry-to-shetland-islands",
    title: "Ferry to Shetland Islands",
    summary: "Booking details for a ferry trip to the Shetland Islands, including facilities and fares.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "street-food-popularity",
    title: "Street Food Popularity",
    summary: "A talk on why street food is popular and how vendors manage locations and hygiene.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "ethical-sustainable-fashion",
    title: "Ethical and Sustainable Fashion",
    summary: "Students discuss ethical fashion terms and match views to aspects of the clothing industry.",
    topics: ["Social", "Environment"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "invasive-species",
    title: "Invasive Species",
    summary: "A lecture on invasive plants and animals, ecological harm and control strategies.",
    topics: ["Environment", "Science"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "broadbeach-shopping-survey",
    title: "Broadbeach Shopping Survey",
    summary: "A shopper survey form covering travel, shopping habits and local retail preferences.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "business-exhibition-promotion",
    title: "Business Exhibition Promotion",
    summary: "A speaker describes promoting a company at a business exhibition and matching staff roles.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "houses-of-the-future",
    title: "Houses of the Future",
    summary: "Students plan a presentation on future housing and evaluate proposed urban developments.",
    topics: ["Science", "Social"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "music-therapy-surgical-patients",
    title: "Music Therapy for Surgical Patients",
    summary: "A lecture on using music therapy to reduce anxiety and support recovery after surgery.",
    topics: ["Science", "Social"],
    durationMinutes: 7,
  },
];

function cam21PartMeta(def: Cam21PartDef): Cam21ListeningPartMeta {
  const id = `cam21-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam21-t${def.test}`,
    examSlug: "cam21",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam21", def.test, def.part),
    transcriptTryFiles: [`cam21-test${def.test}.cleaned.txt`, `cam21-test ${def.test}.txt`],
  };
}

/** Cam 21 Test 1–4 — stubs đủ cho full-test HTML; Flow B sẽ polish hub/sync. */
export const CAM21_LISTENING_PARTS: readonly Cam21ListeningPartMeta[] = CAM21_PART_DEFS.map(cam21PartMeta);
