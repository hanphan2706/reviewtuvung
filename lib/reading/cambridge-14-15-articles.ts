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

export const CAM14_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam14-test1",
    1,
    "The Importance of Children’s Play",
    "Brick by brick, six-year-old Alice builds a magical kingdom — and research shows why imaginative play matters for development.",
    "Education",
    "Trung bình",
    "Cambridge 14 · Test 1",
  ),
  camArticle(
    "cam14-test1",
    2,
    "The growth of bike-sharing schemes around the world",
    "How Dutch engineer Luud Schimmelpennink helped devise urban bike-sharing schemes that spread worldwide.",
    "Social",
    "Trung bình – khó",
    "Cambridge 14 · Test 1",
  ),
  camArticle(
    "cam14-test1",
    3,
    "Motivational factors and the hospitality industry",
    "A critical ingredient in hotel success is developing and maintaining superior performance from employees.",
    "Social",
    "Khó",
    "Cambridge 14 · Test 1",
  ),
];

export const CAM14_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam14-test2",
    1,
    "Alexander Henderson (1831–1913)",
    "Born in Scotland, Henderson emigrated to Canada in 1855 and became a well-known landscape photographer.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 14 · Test 2",
  ),
  camArticle(
    "cam14-test2",
    2,
    "Back to the future of skyscraper design",
    "Answers to excessive electricity use by skyscrapers can be found in ingenious but forgotten architectural designs.",
    "Science",
    "Trung bình – khó",
    "Cambridge 14 · Test 2",
  ),
  camArticle(
    "cam14-test2",
    3,
    "Why companies should welcome disorder",
    "Organisation is big business — but welcoming a little disorder may help companies innovate and adapt.",
    "Social",
    "Khó",
    "Cambridge 14 · Test 2",
  ),
];

export const CAM14_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam14-test3",
    1,
    "The concept of intelligence",
    "Looked at in one way, everyone knows what intelligence is; looked at in another way, no one does.",
    "Psychology",
    "Trung bình",
    "Cambridge 14 · Test 3",
  ),
  camArticle(
    "cam14-test3",
    2,
    "Saving bugs to find new drugs",
    "Zoologist Ross Piper looks at the potential of insects in pharmaceutical research.",
    "Science",
    "Trung bình – khó",
    "Cambridge 14 · Test 3",
  ),
  camArticle(
    "cam14-test3",
    3,
    "The power of play",
    "Virtually every child plays — and the drive to play is so intense that children will do so in almost any circumstances.",
    "Psychology",
    "Khó",
    "Cambridge 14 · Test 3",
  ),
];

export const CAM14_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam14-test4",
    1,
    "The secret of staying young",
    "Pheidole dentata ants don’t seem to show typical signs of aging — and scientists want to know why.",
    "Science",
    "Trung bình",
    "Cambridge 14 · Test 4",
  ),
  camArticle(
    "cam14-test4",
    2,
    "Why zoos are good",
    "Scientist David Hone makes the case for zoos as places of conservation, research and public education.",
    "Wildlife",
    "Trung bình – khó",
    "Cambridge 14 · Test 4",
  ),
  camArticle(
    "cam14-test4",
    3,
    "Marine debris",
    "Ecologist Chelsea Rochman asks how bad ocean trash really is — and which threats science has actually proven.",
    "Environment",
    "Khó",
    "Cambridge 14 · Test 4",
  ),
];

export const CAM15_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam15-test1",
    1,
    "Nutmeg – a valuable spice",
    "Until the late 18th century, the nutmeg tree grew in only one place in the world — and that made it extraordinarily valuable.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 15 · Test 1",
  ),
  camArticle(
    "cam15-test1",
    2,
    "Driverless cars",
    "The automotive sector is used to automation in manufacturing — now self-driving vehicles raise new questions on the road.",
    "Technology",
    "Trung bình – khó",
    "Cambridge 15 · Test 1",
  ),
  camArticle(
    "cam15-test1",
    3,
    "What is exploration?",
    "Our desire to discover, and then share that new-found knowledge, is part of what makes us human.",
    "Social",
    "Khó",
    "Cambridge 15 · Test 1",
  ),
];

export const CAM15_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam15-test2",
    1,
    "Could urban engineers learn from dance?",
    "The way we travel around cities has a major impact on whether they are sustainable.",
    "Social",
    "Trung bình",
    "Cambridge 15 · Test 2",
  ),
  camArticle(
    "cam15-test2",
    2,
    "Should we try to bring extinct species back to life?",
    "The passenger pigeon once flew in vast numbers across North America — should science try to bring it back?",
    "Science",
    "Trung bình – khó",
    "Cambridge 15 · Test 2",
  ),
  camArticle(
    "cam15-test2",
    3,
    "Having a laugh",
    "Psychological scientists reveal why humour matters — and how a sense of humour develops from early infancy.",
    "Psychology",
    "Khó",
    "Cambridge 15 · Test 2",
  ),
];

export const CAM15_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam15-test3",
    1,
    "Henry Moore (1898–1986)",
    "The British sculptor Henry Moore was a leading figure in the 20th-century art world.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 15 · Test 3",
  ),
  camArticle(
    "cam15-test3",
    2,
    "The Desolenator: producing clean water",
    "Inspired by rooftop solar heaters in Thailand, William Janssen developed a device to turn seawater into drinking water.",
    "Technology",
    "Trung bình – khó",
    "Cambridge 15 · Test 3",
  ),
  camArticle(
    "cam15-test3",
    3,
    "Why fairy tales are really scary tales",
    "Some people think fairy tales are just stories to amuse children — but their enduring appeal may have deeper roots.",
    "Culture and Leisure",
    "Khó",
    "Cambridge 15 · Test 3",
  ),
];

export const CAM15_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam15-test4",
    1,
    "The return of the huarango",
    "The arid valleys of southern Peru are welcoming the return of a native plant that once shaped desert life.",
    "Environment",
    "Trung bình",
    "Cambridge 15 · Test 4",
  ),
  camArticle(
    "cam15-test4",
    2,
    "Silbo Gomero – the whistle ‘language’ of the Canary Islands",
    "On mountainous La Gomera, people developed a whistled form of Spanish that can carry across deep ravines.",
    "Culture and Leisure",
    "Trung bình – khó",
    "Cambridge 15 · Test 4",
  ),
  camArticle(
    "cam15-test4",
    3,
    "Environmental practices of big businesses",
    "The environmental practices of big businesses are shaped by a fundamental fact that can offend our sense of justice.",
    "Environment",
    "Khó",
    "Cambridge 15 · Test 4",
  ),
];
