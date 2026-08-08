import type { ReadingTopic } from "@/lib/reading/hub-articles";
import { listeningPartHeroImage } from "@/lib/listening/listening-passage-media";
import { listeningPartAudioApiPath } from "@/lib/listening/listening-materials-urls";

type Cam12ListeningPartMeta = {
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

type Cam12PartDef = {
  test: number;
  part: number;
  slug: string;
  title: string;
  summary: string;
  topics: readonly ReadingTopic[];
  durationMinutes: number;
};

const CAM12_PART_DEFS: readonly Cam12PartDef[] = [
  {
    test: 1,
    part: 1,
    slug: "family-excursions",
    title: "Family Excursions",
    summary:
      "A visitor asks about lake cruises and farm visits suitable for children, including bikes, maps and ticket prices.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 7,
  },
  {
    test: 1,
    part: 2,
    slug: "kitchen-assistants",
    title: "Kitchen Assistants",
    summary:
      "A restaurant manager briefs new kitchen assistants on safety, busy shifts, breaks and who to report to.",
    topics: ["Social", "Culture and Leisure"],
    durationMinutes: 7,
  },
  {
    test: 1,
    part: 3,
    slug: "public-libraries-research",
    title: "Public Libraries Research",
    summary:
      "Trudie and Stewart plan a paper on how libraries are changing, from digitisation to staff and building design.",
    topics: ["Education", "Social"],
    durationMinutes: 7,
  },
  {
    test: 1,
    part: 4,
    slug: "business-values",
    title: "Business Values",
    summary:
      "A lecture on collaboration, hard work, creativity and excellence — and how each value can backfire in practice.",
    topics: ["Education", "Social"],
    durationMinutes: 9,
  },
  {
    test: 2,
    part: 1,
    slug: "kenton-festival",
    title: "Kenton Festival",
    summary:
      "A box-office call covers the festival timetable, performances, workshops and practical booking details.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 8,
  },
  {
    test: 2,
    part: 2,
    slug: "european-tour-plans",
    title: "European Tour Plans",
    summary:
      "A tour organiser updates the group on Munich flights, hotels, concerts and last-minute schedule changes.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 8,
  },
  {
    test: 2,
    part: 3,
    slug: "research-project-placement",
    title: "Research Project Placement",
    summary:
      "Beth briefs James on a research placement: tasks, contacts, training and what to prepare before starting.",
    topics: ["Education", "Social"],
    durationMinutes: 7,
  },
  {
    test: 2,
    part: 4,
    slug: "changing-attitudes-to-workers",
    title: "Changing Attitudes to Workers",
    summary:
      "A lecture traces how workers’ rights, management ideas and workplace conditions have shifted over time.",
    topics: ["Social", "Education"],
    durationMinutes: 9,
  },
  {
    test: 3,
    part: 1,
    slug: "joining-the-library",
    title: "Joining the Library",
    summary:
      "Susie tells Paul about the reopened library: membership, facilities, classes and practical booking tips.",
    topics: ["Education", "Social"],
    durationMinutes: 8,
  },
  {
    test: 3,
    part: 2,
    slug: "specialised-holidays",
    title: "Specialised Holidays",
    summary:
      "A BC Travel trainer outlines niche holiday types, selling points and how staff should match clients to trips.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 7,
  },
  {
    test: 3,
    part: 3,
    slug: "writing-a-case-study",
    title: "Writing a Case Study",
    summary:
      "Natalie and Dave work out what a case study requires: structure, evidence, interviews and common pitfalls.",
    topics: ["Education", "Science"],
    durationMinutes: 8,
  },
  {
    test: 3,
    part: 4,
    slug: "mercury-and-wildlife",
    title: "Mercury and Wildlife",
    summary:
      "A lecture explains how mercury pollution moves through ecosystems and harms wildlife and human health.",
    topics: ["Environment", "Science"],
    durationMinutes: 8,
  },
  {
    test: 4,
    part: 1,
    slug: "cycle-tour-leader-enquiry",
    title: "Cycle Tour Leader Enquiry",
    summary:
      "Margaret asks about leading cycle trips: availability, experience, diet limits and interview arrangements.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 7,
  },
  {
    test: 4,
    part: 2,
    slug: "the-sheepmarket",
    title: "The Sheepmarket",
    summary:
      "A podcast walk through the Sheepmarket describes galleries, landmarks and locations on a city map.",
    topics: ["Culture and Leisure", "Social"],
    durationMinutes: 6,
  },
  {
    test: 4,
    part: 3,
    slug: "film-studies-presentation",
    title: "Film Studies Presentation",
    summary:
      "Katie and Joe plan a film-studies talk: clips, structure, examples and how to keep the class engaged.",
    topics: ["Education", "Culture and Leisure"],
    durationMinutes: 8,
  },
  {
    test: 4,
    part: 4,
    slug: "urban-acoustics",
    title: "Urban Acoustics",
    summary:
      "An acoustic engineer lectures on city soundscapes, noise problems and design ideas that improve urban life.",
    topics: ["Science", "Environment"],
    durationMinutes: 8,
  },
];

function cam12PartMeta(def: Cam12PartDef): Cam12ListeningPartMeta {
  const id = `cam12-t${def.test}-p${def.part}`;
  return {
    id,
    slug: def.slug,
    title: def.title,
    heroImage: listeningPartHeroImage(id),
    metaPill: "IELTS Cambridge",
    topics: def.topics,
    summary: def.summary,
    contextKey: `cam12-t${def.test}`,
    examSlug: "cam12",
    test: def.test,
    part: def.part,
    durationMinutes: def.durationMinutes,
    audioPublicPath: listeningPartAudioApiPath("cam12", def.test, def.part),
    transcriptTryFiles: [`cam12-test${def.test}.cleaned.txt`, `cam12-test ${def.test}.txt`, `cam 12-test ${def.test}.txt`],
  };
}

/** Cam 12 Test 1–4 — full-test + bài lẻ (Flow A/B). */
export const CAM12_LISTENING_PARTS: readonly Cam12ListeningPartMeta[] = CAM12_PART_DEFS.map(cam12PartMeta);
