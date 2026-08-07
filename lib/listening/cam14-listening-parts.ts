import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam14ListeningPartMeta = {
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

type Cam14PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM14_PART_DEFS: readonly Cam14PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "crime-report-form",
    title: "Crime Report Form",
    summary: "Louise reports a stolen wallet: nationality, address, contents and descriptions of the boys involved.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "induction-talk-new-apprentices",
    title: "Induction Talk for New Apprentices",
    summary: "A company induction covers apprentice policy, training rules and what staff expect from new starters.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "cities-built-by-the-sea",
    title: "Cities Built by the Sea",
    summary: "Students discuss coastal-city research, key decisions about development and risks from the sea.",
    topics: ["Environment", "Education"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "marine-renewable-energy",
    title: "Marine Renewable Energy",
    summary: "A lecture on ocean energy: why demand is rising, wave power systems and environmental concerns.",
    topics: ["Environment", "Science"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "total-health-clinic",
    title: "Total Health Clinic",
    summary: "Julie books at a clinic: contact details, injury history, sport and recommended vitamins.",
    topics: ["Health", "Social"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "visit-to-branley-castle",
    title: "Visit to Branley Castle",
    summary: "A guide outlines castle visits, then labels a plan for walls, displays, dancing and the shop.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "woolly-mammoths-st-pauls-island",
    title: "Woolly Mammoths on St Paul’s Island",
    summary: "Students plan research on island mammoths: evidence, significance and next actions.",
    topics: ["Science", "Education"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "history-of-weather-forecasting",
    title: "The History of Weather Forecasting",
    summary: "A lecture traces forecasting from ancient sky lore and Babylon to later scientific methods.",
    topics: ["Science", "Culture and Leisure"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "flanders-conference-hotel",
    title: "Flanders Conference Hotel",
    summary: "A caller books conference rooms, catering, wifi, spa access and shuttle to the airport.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "volunteering-activities-benefits",
    title: "Volunteering Activities and Benefits",
    summary: "A talk covers volunteer tasks, personal benefits and how helpers change people’s lives.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "school-marching-band",
    title: "School Marching Band",
    summary: "Joe and Lizzie plan band logistics: competition, town event, coaching and practical issues.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "concerts-university-arts-festival",
    title: "Concerts in University Arts Festival",
    summary: "A lecture previews festival concerts, composers and what makes each programme distinctive.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "hotel-room-booking-for-event",
    title: "Hotel Room Booking for an Event",
    summary: "Andrew checks hotel rooms for a gathering: capacity, outlook, outdoor access and catering.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "holiday-excursions-information",
    title: "Holiday Excursions Information",
    summary: "A speaker rates excursions—dolphin watching to horse riding—and answers practical FAQs.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "childrens-literature-module",
    title: "Children’s Literature Module",
    summary: "Trevor and Stephanie review module topics: purpose, pictures, comics and gendered books.",
    topics: ["Education", "Culture and Leisure"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "sunken-settlements-ancient-shipwrecks",
    title: "Sunken Settlements and Ancient Shipwrecks",
    summary: "A lecture on Atlit-Yam, AUVs and planned research on Roman wrecks in the Gulf of Baratti.",
    topics: ["Science", "Culture and Leisure"],
    durationMinutes: 7,
  },
];

function cam14PartMeta(def: Cam14PartDef): Cam14ListeningPartMeta {
  const id = `cam14-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam14-t${def.test}`,
    examSlug: "cam14",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam14", def.test, def.part),
    transcriptTryFiles: [`cam14-test${def.test}.cleaned.txt`, `cam14-test ${def.test}.txt`],
  };
}

/** Cam 14 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM14_LISTENING_PARTS: readonly Cam14ListeningPartMeta[] = CAM14_PART_DEFS.map(cam14PartMeta);
