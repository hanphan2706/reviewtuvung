import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam13ListeningPartMeta = {
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

type Cam13PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM13_PART_DEFS: readonly Cam13PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "cookery-classes",
    title: "Cookery Classes",
    summary:
      "A tourist asks about day cookery classes: seasonal cooking, healthy recipes and a vegetarian centre near the market.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 2,
    slug: "traffic-changes-in-granford",
    title: "Traffic Changes in Granford",
    summary:
      "A highways chair explains new traffic rules, residents’ complaints and proposed map changes around the High Street.",
    topics: ["Social", "Environment"],
    durationMinutes: 5,
  },
  {
    test: 1,
    part: 3,
    slug: "seed-germination-experiment",
    title: "Seed Germination Experiment",
    summary:
      "Jack and Emma plan a germination experiment: aims, sources, procedure and what to measure.",
    topics: ["Science", "Education"],
    durationMinutes: 6,
  },
  {
    test: 1,
    part: 4,
    slug: "effects-of-urban-environments-on-animals",
    title: "Effects of Urban Environments on Animals",
    summary:
      "A lecture on how city life changes mammals and birds: brains, behaviour, stress and communication.",
    topics: ["Science", "Environment"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 1,
    slug: "south-city-cycling-club",
    title: "South City Cycling Club",
    summary:
      "Jim explains club membership, training rides, kit and practical tips for new recreational cyclists.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 2,
    slug: "company-volunteering-projects",
    title: "Company Volunteering Projects",
    summary:
      "A manager outlines staff volunteering options, time allowances and how projects help the community.",
    topics: ["Social", "Education"],
    durationMinutes: 5,
  },
  {
    test: 2,
    part: 3,
    slug: "planning-presentation-on-nanotechnology",
    title: "Planning a Presentation on Nanotechnology",
    summary:
      "Students plan a nanotechnology talk: structure, visuals, audience and tricky content to include.",
    topics: ["Science", "Education"],
    durationMinutes: 6,
  },
  {
    test: 2,
    part: 4,
    slug: "episodic-memory",
    title: "Episodic Memory",
    summary:
      "A lecture on episodic memory: how personal events are stored, cued and linked to attention and the brain.",
    topics: ["Science", "Education"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 1,
    slug: "moving-to-banford-city",
    title: "Moving to Banford City",
    summary:
      "Linda advises Matt on suburbs, rent, transport, local amenities and when to meet near the station.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 2,
    slug: "keeping-fit-physical-activities",
    title: "Keeping Fit — Physical Activities",
    summary:
      "A fitness instructor compares gym, running, swimming and more, plus why people quit and how to stay motivated.",
    topics: ["Health", "Social"],
    durationMinutes: 5,
  },
  {
    test: 3,
    part: 3,
    slug: "natural-dyes-for-colouring-fabrics",
    title: "Natural Dyes for Colouring Fabrics",
    summary:
      "Jim discusses a textile project on plant dyes: inspiration, methods, colours and practical challenges.",
    topics: ["Culture and Leisure", "Science"],
    durationMinutes: 6,
  },
  {
    test: 3,
    part: 4,
    slug: "the-sleepy-lizard",
    title: "The Sleepy Lizard",
    summary:
      "A biology lecture on Tiliqua rugosa: senses, partners, protection and how injury affects behaviour.",
    topics: ["Science", "Environment"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 1,
    slug: "alexs-training",
    title: "Alex’s Training",
    summary:
      "Alex advises Martha on trainee life at JPNW: departments, pay, college days and interview tips.",
    topics: ["Education", "Social"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 2,
    slug: "the-snow-centre",
    title: "The Snow Centre",
    summary:
      "Annie welcomes visitors: cross-country skiing advice, facilities and which trails suit different guests.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 5,
  },
  {
    test: 4,
    part: 3,
    slug: "nutritional-food-labels",
    title: "Nutritional Food Labels",
    summary:
      "Jack and Alice review packaging labels, traffic-light systems and what research says about shopper behaviour.",
    topics: ["Health", "Education"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 4,
    slug: "the-history-of-coffee",
    title: "The History of Coffee",
    summary:
      "A presentation traces coffee from Ethiopia and Ottoman coffee houses to colonial plantations and modern trade.",
    topics: ["Culture and Leisure", "Science"],
    durationMinutes: 7,
  },
];

function cam13PartMeta(def: Cam13PartDef): Cam13ListeningPartMeta {
  const id = `cam13-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam13-t${def.test}`,
    examSlug: "cam13",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam13", def.test, def.part),
    transcriptTryFiles: [`cam13-test${def.test}.cleaned.txt`, `cam13-test ${def.test}.txt`],
  };
}

/** Cam 13 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM13_LISTENING_PARTS: readonly Cam13ListeningPartMeta[] = CAM13_PART_DEFS.map(cam13PartMeta);
