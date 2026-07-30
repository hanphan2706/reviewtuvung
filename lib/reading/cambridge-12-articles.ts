import { ensureSentenceEnd, ensureSentenceStart } from "@/lib/reading/format-sentence-end";
import { readingArticleImage } from "@/lib/reading/passage-media";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";

const SOURCE = "IELTS Cambridge" as const;

function camArticle(
  pilotId: ReadingHubArticle["pilotId"],
  passage: number,
  title: string,
  subheadline: string,
  topic: ReadingHubArticle["topic"],
  difficulty: ReadingHubArticle["difficulty"],
  edition: string,
): ReadingHubArticle {
  const id = `${pilotId}-p${passage}`;
  return {
    id,
    pilotId,
    passage,
    title,
    subheadline: ensureSentenceEnd(ensureSentenceStart(subheadline)),
    source: SOURCE,
    topic,
    difficulty,
    imageUrl: readingArticleImage(id),
    edition,
  };
}

export const CAM12_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam12-test1",
    1,
    "Cork",
    "The thick bark of the cork oak is a remarkable material — and a Mediterranean industry built on patience.",
    "Environment",
    "Trung bình",
    "Cambridge 12 · Test 1",
  ),
  camArticle(
    "cam12-test1",
    2,
    "Collecting as a Hobby",
    "Why do millions of people spend time, energy and money amassing objects that seem to have little practical use?",
    "Psychology",
    "Trung bình – khó",
    "Cambridge 12 · Test 1",
  ),
  camArticle(
    "cam12-test1",
    3,
    "What’s the purpose of gaining knowledge?",
    "A university course on ‘Arson for Profit’ raises awkward questions about what education is for.",
    "Social",
    "Khó",
    "Cambridge 12 · Test 1",
  ),
];

export const CAM12_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam12-test2",
    1,
    "The risks agriculture faces in developing countries",
    "Smallholder farmers face weather, markets and infrastructure risks that make food production uniquely vulnerable.",
    "Environment",
    "Trung bình",
    "Cambridge 12 · Test 2",
  ),
  camArticle(
    "cam12-test2",
    2,
    "The Lost City",
    "An ancient city in the Andes reveals how past societies adapted — and why that still matters.",
    "Science",
    "Trung bình – khó",
    "Cambridge 12 · Test 2",
  ),
  camArticle(
    "cam12-test2",
    3,
    "The Benefits of Being Bilingual",
    "Speaking two languages may reshape attention, conflict control and even how the brain ages.",
    "Psychology",
    "Khó",
    "Cambridge 12 · Test 2",
  ),
];

export const CAM12_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam12-test3",
    1,
    "Flying tortoises",
    "An airborne reintroduction programme has helped protect the endangered Galápagos tortoise.",
    "Environment",
    "Trung bình",
    "Cambridge 12 · Test 3",
  ),
  camArticle(
    "cam12-test3",
    2,
    "The Intersection of Health Sciences and Geography",
    "Where people live shapes disease, medicine and public health — geography meets the clinic.",
    "Science",
    "Trung bình – khó",
    "Cambridge 12 · Test 3",
  ),
  camArticle(
    "cam12-test3",
    3,
    "Music and the emotions",
    "Neuroscientist Jonah Lehrer considers how music taps anticipation, dopamine and pleasure in the brain.",
    "Psychology",
    "Khó",
    "Cambridge 12 · Test 3",
  ),
];

export const CAM12_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam12-test4",
    1,
    "The History of Glass",
    "From volcanic obsidian to industrial bottle machines — how glass shaped trade, craft and everyday life.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 12 · Test 4",
  ),
  camArticle(
    "cam12-test4",
    2,
    "Bring back the big cats",
    "It’s time to start returning vanished native animals to Britain, argues John Vesty — starting with the lynx.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 12 · Test 4",
  ),
  camArticle(
    "cam12-test4",
    3,
    "UK companies need more effective boards of directors",
    "Why corporate boards keep failing to look far enough ahead — and what might change how they operate.",
    "Social",
    "Khó",
    "Cambridge 12 · Test 4",
  ),
];
