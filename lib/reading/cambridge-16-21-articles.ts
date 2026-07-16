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

export const CAM16_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam16-test1",
    1,
    "Why we need to protect polar bears",
    "Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences.",
    "Wildlife",
    "Trung bình",
    "Cambridge 16 · Test 1",
  ),
  camArticle(
    "cam16-test1",
    2,
    "The Step Pyramid of Djoser",
    "The Step Pyramid at Saqqara marks a turning point in ancient Egyptian architecture — from mastaba tombs toward monumental stone pyramids.",
    "Culture and Leisure",
    "Trung bình – khó",
    "Cambridge 16 · Test 1",
  ),
  camArticle(
    "cam16-test1",
    3,
    "The future of work",
    "According to a leading business consultancy, a substantial share of the global workforce will need to switch occupation within the next 10–15 years.",
    "Social",
    "Khó",
    "Cambridge 16 · Test 1",
  ),
];

export const CAM16_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam16-test2",
    1,
    "The White Horse of Uffington",
    "The cutting of huge figures or ‘geoglyphs’ into the earth of English hillsides has taken place for more than 3,000 years.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 16 · Test 2",
  ),
  camArticle(
    "cam16-test2",
    2,
    "I contain multitudes",
    "Wendy Moore reviews Ed Yong’s book about the microbes that live in and on animals — including humans.",
    "Science",
    "Trung bình – khó",
    "Cambridge 16 · Test 2",
  ),
  camArticle(
    "cam16-test2",
    3,
    "How to make wise decisions",
    "Across cultures, wisdom has been considered one of the most revered human qualities — and researchers are trying to measure how it works.",
    "Psychology",
    "Khó",
    "Cambridge 16 · Test 2",
  ),
];

export const CAM16_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam16-test3",
    1,
    "Roman shipbuilding and navigation",
    "Shipbuilding today is based on science and computers; in ancient Rome it was more of an art relying on estimation and inherited technique.",
    "Science",
    "Trung bình",
    "Cambridge 16 · Test 3",
  ),
  camArticle(
    "cam16-test3",
    2,
    "Climate change reveals ancient artefacts in Norway’s glaciers",
    "As ice retreats in Norway’s mountains, archaeologists are recovering artefacts that were frozen for centuries — and racing against time.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 16 · Test 3",
  ),
  camArticle(
    "cam16-test3",
    3,
    "Plant ‘thermometer’ triggers springtime growth by measuring night-time heat",
    "A photoreceptor molecule in plant cells has been found to have a second job as a thermometer after dark.",
    "Science",
    "Khó",
    "Cambridge 16 · Test 3",
  ),
];

export const CAM16_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam16-test4",
    1,
    "Roman tunnels",
    "The Romans adopted construction techniques from other civilizations to build tunnels across Europe, North Africa and Asia Minor.",
    "Science",
    "Trung bình",
    "Cambridge 16 · Test 4",
  ),
  camArticle(
    "cam16-test4",
    2,
    "Changes in reading habits",
    "What are the implications of the way we read today — on screens, on the move, and under constant digital distraction?",
    "Education",
    "Trung bình – khó",
    "Cambridge 16 · Test 4",
  ),
  camArticle(
    "cam16-test4",
    3,
    "Attitudes towards Artificial Intelligence",
    "AI can already outperform humans at many forecasts — yet people still hesitate to trust its recommendations.",
    "Technology",
    "Khó",
    "Cambridge 16 · Test 4",
  ),
];

export const CAM21_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam21-test1",
    1,
    "The Davies Sisters",
    "Between 1908 and 1924, Gwendoline and Margaret Davies amassed one of the largest collections of late-nineteenth and early-twentieth-century French paintings in Britain.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 21 · Test 1",
  ),
  camArticle(
    "cam21-test1",
    2,
    "Why we need silence",
    "In a world of constant noise and notification, silence is not empty — it is a resource for attention, rest and wellbeing.",
    "Health",
    "Trung bình – khó",
    "Cambridge 21 · Test 1",
  ),
  camArticle(
    "cam21-test1",
    3,
    "Book review: The World of Sugar by Ulbe Bosma",
    "A sweeping history of how sugar became a global commodity — reshaping labour, empire and everyday diets.",
    "Social",
    "Khó",
    "Cambridge 21 · Test 1",
  ),
];

export const CAM21_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam21-test2",
    1,
    "Do animals dream?",
    "Studies of sleep stages such as REM raise a deeper question: do animals experience something like human dreaming?",
    "Science",
    "Trung bình",
    "Cambridge 21 · Test 2",
  ),
  camArticle(
    "cam21-test2",
    2,
    "Mapungubwe",
    "Located in southern Africa just below the Limpopo River, the kingdom of Mapungubwe flourished between the 11th and 13th century CE.",
    "Culture and Leisure",
    "Trung bình – khó",
    "Cambridge 21 · Test 2",
  ),
  camArticle(
    "cam21-test2",
    3,
    "Artificial Intelligence",
    "In many countries in the West, sensational claims about AI’s future are everywhere — from curing disease to transforming whole economies.",
    "Technology",
    "Khó",
    "Cambridge 21 · Test 2",
  ),
];

export const CAM21_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam21-test3",
    1,
    "Saving the saiga",
    "The saiga, a species of antelope native to Central Asia, once roamed the grasslands in enormous herds — but spectacular sights like that are vanishing.",
    "Wildlife",
    "Trung bình",
    "Cambridge 21 · Test 3",
  ),
  camArticle(
    "cam21-test3",
    2,
    "The problems of getting around the city of Dar es Salaam",
    "Dar es Salaam in Tanzania is one of the fastest growing cities in Africa — and getting around it is becoming ever more difficult.",
    "Social",
    "Trung bình – khó",
    "Cambridge 21 · Test 3",
  ),
  camArticle(
    "cam21-test3",
    3,
    "Rethinking the Past",
    "Discoveries over the last decade have forced researchers to rethink crucial points in the story of human evolution.",
    "Science",
    "Khó",
    "Cambridge 21 · Test 3",
  ),
];

export const CAM21_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam21-test4",
    1,
    "The problems and benefits created by the spread of the water hyacinth in Kenya",
    "Water hyacinth, an aquatic plant native to South America, has been called the world’s worst aquatic weed — yet some communities are finding uses for it.",
    "Environment",
    "Trung bình",
    "Cambridge 21 · Test 4",
  ),
  camArticle(
    "cam21-test4",
    2,
    "How could multilingualism benefit India's poorest schoolchildren?",
    "In Delhi’s busy streets you hear a multitude of languages — and that diversity has big implications for how children learn at school.",
    "Education",
    "Trung bình – khó",
    "Cambridge 21 · Test 4",
  ),
  camArticle(
    "cam21-test4",
    3,
    "The Globemakers: The Curious Story of an Ancient Craft",
    "A review of Peter Bellerby’s book on the craftspeople who still design and build detailed world globes by hand.",
    "Culture and Leisure",
    "Khó",
    "Cambridge 21 · Test 4",
  ),
];
