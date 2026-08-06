import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam15ListeningPartMeta = {
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

type Cam15PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM15_PART_DEFS: readonly Cam15PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "bankside-recruitment-agency",
    title: "Bankside Recruitment Agency",
    summary: "Amber calls about temp clerical jobs: contact details, interview tips and why an agency can help.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "matthews-island-holidays",
    title: "Matthews Island Holidays",
    summary: "A holiday company outlines Isle of Man trips, meeting points, included meals and the six-day timetable.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "birth-order-and-personality",
    title: "Birth Order and Personality",
    summary: "Students review research linking family position to personality traits and debate academic-success claims.",
    topics: ["Psychology", "Education"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "eucalyptus-tree-in-australia",
    title: "The Eucalyptus Tree in Australia",
    summary: "A lecture on why eucalyptus matters, reasons numbers are falling and Jackson’s theory of decline.",
    topics: ["Environment", "Science"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "festival-information",
    title: "Festival Information",
    summary: "A caller checks festival dates, shows, workshops and outdoor activities before booking.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "minster-park",
    title: "Minster Park",
    summary: "A talk on the park’s history plus a map of the statue, sculptures, playground, maze and sports areas.",
    topics: ["Social", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "charles-dickens-display",
    title: "Charles Dickens Display",
    summary: "Cathy and Graham plan a Dickens display: audience, why they chose him and themes from six novels.",
    topics: ["Culture and Leisure", "Education"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "agricultural-programme-mozambique",
    title: "Agricultural Programme in Mozambique",
    summary: "A lecture on a dry-region farming project: water, fences, marketing and lessons from the evaluation.",
    topics: ["Environment", "Social"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "employment-agency-possible-jobs",
    title: "Employment Agency: Possible Jobs",
    summary: "A candidate hears about an admin role in North London and a warehouse job in South London.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "street-play-scheme",
    title: "Street Play Scheme",
    summary: "Alice explains closing a road for children’s play, resident rules and surprising results from King Street.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "hazel-newspaper-analysis",
    title: "Hazel Newspaper Analysis",
    summary: "A tutor sets how Hazel should analyse newspaper items and which article types to look for.",
    topics: ["Education", "Social"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "early-history-of-keeping-clean",
    title: "Early History of Keeping Clean",
    summary: "A lecture traces washing and soap from prehistory through Rome to later European bathing habits.",
    topics: ["Health", "Science"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "customer-satisfaction-survey",
    title: "Customer Satisfaction Survey",
    summary: "Sophie answers a station survey about her ticket, journey and what she liked or disliked.",
    topics: ["Social", "Technology"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "croft-valley-park",
    title: "Croft Valley Park",
    summary: "A council update maps café, toilets and gardens, then covers the playground and glass houses.",
    topics: ["Social", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "presentation-about-refrigeration",
    title: "Presentation about Refrigeration",
    summary: "Annie and Jack plan research on icehouses, ancient Rome, modern fridges and who covers each topic.",
    topics: ["Science", "Education"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "industrial-revolution-britain",
    title: "How the Industrial Revolution Affected Life in Britain",
    summary: "A lecture on 19th-century manufacturing, transport and retailing and how shopping life changed.",
    topics: ["Social", "Science"],
    durationMinutes: 7,
  },
];

function cam15PartMeta(def: Cam15PartDef): Cam15ListeningPartMeta {
  const id = `cam15-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam15-t${def.test}`,
    examSlug: "cam15",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam15", def.test, def.part),
    transcriptTryFiles: [`cam15-test${def.test}.cleaned.txt`, `cam15-test ${def.test}.txt`],
  };
}

/** Cam 15 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM15_LISTENING_PARTS: readonly Cam15ListeningPartMeta[] = CAM15_PART_DEFS.map(cam15PartMeta);
