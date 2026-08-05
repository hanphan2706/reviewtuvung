import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam16ListeningPartMeta = {
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

type Cam16PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM16_PART_DEFS: readonly Cam16PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "childrens-engineering-workshops",
    title: "Children’s Engineering Workshops",
    summary: "A centre describes Tiny and Junior Engineers sessions, costs, timetable and where classes are held.",
    topics: ["Education", "Science"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "stevensons-work-experience",
    title: "Stevenson’s Work Experience",
    summary: "A talk on Stevenson’s history and a site map for coffee room, warehouse, canteen and meeting spaces.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "jess-and-tom-art-projects",
    title: "Jess and Tom Art Projects",
    summary: "Students review intro stages of art projects and assign personal meanings to famous pictures.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "stoicism",
    title: "Stoicism",
    summary: "A lecture on Stoic principles and their influence on leaders, CBT and modern working life.",
    topics: ["Psychology", "Social"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "copying-photos-to-digital-format",
    title: "Copying Photos to Digital Format",
    summary: "Picturerep explains photo size limits, pricing, restore options and how to send an order.",
    topics: ["Technology", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "dartfield-house-school",
    title: "Dartfield House School",
    summary: "A school update covers site plans, new catering points in the Food Hall and after-school lessons.",
    topics: ["Education", "Social"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "assignment-on-sleep-and-dreams",
    title: "Assignment on Sleep and Dreams",
    summary: "Luke and Susie plan sleep-and-dreams research, from sampling students to analysing results.",
    topics: ["Science", "Education"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "health-benefits-of-dance",
    title: "Health Benefits of Dance",
    summary: "A lecture on how dance supports mood, older adults’ health and findings from Zumba studies.",
    topics: ["Health", "Sports"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "junior-cycle-camp",
    title: "Junior Cycle Camp",
    summary: "A parent books a skills-and-safety cycle camp, covering instructors, kit and first-day arrival.",
    topics: ["Sports", "Education"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "agriculture-and-horticulture-careers",
    title: "Agriculture and Horticulture Careers",
    summary: "Megan outlines outdoor-work pros and cons and matches job ads from buyer to farm worker.",
    topics: ["Social", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "food-and-obesity-presentation",
    title: "Food and Obesity Presentation",
    summary: "Adam and Rosie compare food experiments and decide how to structure a presentation on obesity.",
    topics: ["Health", "Education"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "hand-knitting",
    title: "Hand Knitting",
    summary: "A lecture traces knitting’s revival, benefits in hard times and early tools, yarns and styles.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "holiday-rental",
    title: "Holiday Rental",
    summary: "A caller checks Granary and Chervil Cottages: dates, price, facilities and the payment deadline.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "traffic-and-highways-report",
    title: "Traffic and Highways Report",
    summary: "A council report covers traffic concerns, cycle paths and a map of recreation-ground changes.",
    topics: ["Social", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "city-bike-sharing-schemes",
    title: "City Bike-Sharing Schemes",
    summary: "Students weigh bike-share benefits and compare schemes in cities from Amsterdam to Sydney.",
    topics: ["Environment", "Sports"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "extinction-of-the-dodo-bird",
    title: "The Extinction of the Dodo Bird",
    summary: "A lecture on the dodo’s history on Mauritius, physical traits and why the species died out.",
    topics: ["Wildlife", "Science"],
    durationMinutes: 7,
  },
];

function cam16PartMeta(def: Cam16PartDef): Cam16ListeningPartMeta {
  const id = `cam16-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam16-t${def.test}`,
    examSlug: "cam16",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam16", def.test, def.part),
    transcriptTryFiles: [`cam16-test${def.test}.cleaned.txt`, `cam16-test ${def.test}.txt`],
  };
}

/** Cam 16 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM16_LISTENING_PARTS: readonly Cam16ListeningPartMeta[] = CAM16_PART_DEFS.map(cam16PartMeta);
