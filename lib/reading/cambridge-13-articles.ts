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

export const CAM13_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam13-test1",
    1,
    "Case Study: Tourism New Zealand website",
    "New Zealand is a small country of four million inhabitants — and its tourism website became a case study in destination marketing.",
    "Social",
    "Trung bình",
    "Cambridge 13 · Test 1",
  ),
  camArticle(
    "cam13-test1",
    2,
    "Why being bored is stimulating – and useful, too",
    "This most common of emotions is turning out to be more interesting than we thought — and sometimes useful.",
    "Psychology",
    "Trung bình – khó",
    "Cambridge 13 · Test 1",
  ),
  camArticle(
    "cam13-test1",
    3,
    "Artificial artist?",
    "Can computers really create works of art — or only imitate what humans already make?",
    "Technology",
    "Khó",
    "Cambridge 13 · Test 1",
  ),
];

export const CAM13_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam13-test2",
    1,
    "Bringing cinnamon to Europe",
    "Cinnamon is a sweet, fragrant spice — and its journey to Europe shaped trade routes and empires.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 13 · Test 2",
  ),
  camArticle(
    "cam13-test2",
    2,
    "Oxytocin",
    "The positive and negative effects of the chemical known as the ‘love hormone’.",
    "Science",
    "Trung bình – khó",
    "Cambridge 13 · Test 2",
  ),
  camArticle(
    "cam13-test2",
    3,
    "Making the most of trends",
    "Experts from Harvard Business School give advice to managers on spotting and using trends.",
    "Social",
    "Khó",
    "Cambridge 13 · Test 2",
  ),
];

export const CAM13_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam13-test3",
    1,
    "The coconut palm",
    "For millennia, the coconut has been central to the lives of Polynesian and Asian coastal communities.",
    "Environment",
    "Trung bình",
    "Cambridge 13 · Test 3",
  ),
  camArticle(
    "cam13-test3",
    2,
    "How baby talk gives infant brains a boost",
    "The exaggerated speech adults use with babies may do more than sound cute — it may help the brain learn language.",
    "Psychology",
    "Trung bình – khó",
    "Cambridge 13 · Test 3",
  ),
  camArticle(
    "cam13-test3",
    3,
    "Whatever happened to the Harappan Civilisation?",
    "New research sheds light on the disappearance of an ancient Indus Valley society.",
    "Science",
    "Khó",
    "Cambridge 13 · Test 3",
  ),
];

export const CAM13_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam13-test4",
    1,
    "Cutty Sark: the fastest sailing ship of all time",
    "The nineteenth century was a period of great technological development in shipping — and Cutty Sark became a legend.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 13 · Test 4",
  ),
  camArticle(
    "cam13-test4",
    2,
    "Saving the soil",
    "More than a third of the Earth’s top layer is at risk — is there hope for healthier soil?",
    "Environment",
    "Trung bình – khó",
    "Cambridge 13 · Test 4",
  ),
  camArticle(
    "cam13-test4",
    3,
    "Book Review",
    "The Happiness Industry: How the Government and Big Business Sold Us Well-Being — a critical look at marketed happiness.",
    "Social",
    "Khó",
    "Cambridge 13 · Test 4",
  ),
];
