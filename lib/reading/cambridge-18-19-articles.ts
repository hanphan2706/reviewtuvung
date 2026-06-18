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

export const CAM19_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam19-test4",
    1,
    "The impact of climate change on butterflies in Britain",
    "According to conservationists, populations of around two thirds of butterfly species have declined in Britain since the 1970s.",
    "Wildlife",
    "Trung bình",
    "Cambridge 19 · Test 4",
  ),
  camArticle(
    "cam19-test4",
    2,
    "Deep-sea mining",
    "Bacteria from the ocean floor can beat superbugs and cancer. But habitats are at risk from mining the seabed.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 19 · Test 4",
  ),
  camArticle(
    "cam19-test4",
    3,
    "The Unselfish Gene",
    "A psychologist gives his view on how humans became self-centred.",
    "Psychology",
    "Khó",
    "Cambridge 19 · Test 4",
  ),
];

export const CAM19_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam19-test3",
    1,
    "Archaeologists discover evidence of prehistoric island settlers",
    "In early April 2019, Dr Ceri Shipton and colleagues found stone tools on an Indonesian island dating back at least 18,000 years.",
    "Science",
    "Trung bình",
    "Cambridge 19 · Test 3",
  ),
  camArticle(
    "cam19-test3",
    2,
    "The global importance of wetlands",
    "Wetlands are areas where water covers the soil for all or part of the year — complex ecosystems rich in unique plant and animal life.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 19 · Test 3",
  ),
  camArticle(
    "cam19-test3",
    3,
    "Is the era of artificial speech translation upon us?",
    "Once the stuff of science fiction, technology that enables people to talk using different languages is now a reality.",
    "Technology",
    "Khó",
    "Cambridge 19 · Test 3",
  ),
];

export const CAM19_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam19-test2",
    1,
    "The Industrial Revolution in Britain",
    "The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to Europe and the United States.",
    "Science",
    "Trung bình",
    "Cambridge 19 · Test 2",
  ),
  camArticle(
    "cam19-test2",
    2,
    "Athletes and stress",
    "It isn't easy being a professional athlete — competitors face intense psychological pressure as well as physical demands.",
    "Health",
    "Trung bình – khó",
    "Cambridge 19 · Test 2",
  ),
  camArticle(
    "cam19-test2",
    3,
    "An inquiry into the existence of the gifted child",
    "Let us start by looking at a modern ‘genius’, Maryam Mirzakhani, who died at the early age of 40.",
    "Psychology",
    "Khó",
    "Cambridge 19 · Test 2",
  ),
];

export const CAM19_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam19-test1",
    1,
    "How tennis rackets have changed",
    "In 2016, Andy Murray was ranked world number one — one change that helped was switching to a synthetic string for the mains.",
    "Sports",
    "Trung bình",
    "Cambridge 19 · Test 1",
  ),
  camArticle(
    "cam19-test1",
    2,
    "The pirates of the ancient Mediterranean",
    "In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers.",
    "Social",
    "Trung bình – khó",
    "Cambridge 19 · Test 1",
  ),
  camArticle(
    "cam19-test1",
    3,
    "The persistence and peril of misinformation",
    "Brian Southwell looks at how human brains verify information and discusses some of the challenges of misinformation today.",
    "Psychology",
    "Khó",
    "Cambridge 19 · Test 1",
  ),
];

export const CAM18_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam18-test1",
    1,
    "Urban farming",
    "In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources.",
    "Environment",
    "Trung bình",
    "Cambridge 18 · Test 1",
  ),
  camArticle(
    "cam18-test1",
    2,
    "Forest management in Pennsylvania, USA",
    "How managing low-quality wood for bioenergy can encourage sustainable forest management.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 18 · Test 1",
  ),
  camArticle(
    "cam18-test1",
    3,
    "Conquering Earth's space junk problem",
    "Satellites, rocket shards and collision debris are creating major traffic risks in orbit around Earth.",
    "Technology",
    "Khó",
    "Cambridge 18 · Test 1",
  ),
];

export const CAM18_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam18-test2",
    1,
    "Stonehenge",
    "For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument on Salisbury Plain.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 18 · Test 2",
  ),
  camArticle(
    "cam18-test2",
    2,
    "Living with artificial intelligence",
    "Powerful AI needs to be reliably aligned with human values — but does this mean AI will eventually have to police our ethics?",
    "Technology",
    "Trung bình – khó",
    "Cambridge 18 · Test 2",
  ),
  camArticle(
    "cam18-test2",
    3,
    "An ideal city",
    "Leonardo da Vinci's ideal city was centuries ahead of its time.",
    "Culture and Leisure",
    "Khó",
    "Cambridge 18 · Test 2",
  ),
];

export const CAM18_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam18-test3",
    1,
    "Materials to take us beyond concrete",
    "Concrete is everywhere, but it is bad for the planet — alternatives are being developed.",
    "Environment",
    "Trung bình",
    "Cambridge 18 · Test 3",
  ),
  camArticle(
    "cam18-test3",
    2,
    "The steam car",
    "The successes and failures of the Doble brothers and their steam cars.",
    "Technology",
    "Trung bình – khó",
    "Cambridge 18 · Test 3",
  ),
  camArticle(
    "cam18-test3",
    3,
    "The case for mixed-ability classes",
    "Should students of different abilities be taught together in the same classroom?",
    "Education",
    "Khó",
    "Cambridge 18 · Test 3",
  ),
];

export const CAM18_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam18-test4",
    1,
    "Green roofs",
    "Rooftops covered with vegetation are now a common sight in many cities around the world.",
    "Environment",
    "Trung bình",
    "Cambridge 18 · Test 4",
  ),
  camArticle(
    "cam18-test4",
    2,
    "The growth mindset",
    "The idea that intelligence is not fixed has taken root in the educational landscape.",
    "Education",
    "Trung bình – khó",
    "Cambridge 18 · Test 4",
  ),
  camArticle(
    "cam18-test4",
    3,
    "Alfred Wegener: science, exploration and the theory of continental drift",
    "The life and scientific work of Alfred Wegener, remembered for the theory of continental drift.",
    "Science",
    "Khó",
    "Cambridge 18 · Test 4",
  ),
];

export const CAM17_TEST1: ReadingHubArticle[] = [
  camArticle(
    "cam17-test1",
    1,
    "The development of the London underground railway",
    "In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested.",
    "Social",
    "Trung bình",
    "Cambridge 17 · Test 1",
  ),
  camArticle(
    "cam17-test1",
    2,
    "Stadiums: past, present and future",
    "Stadiums are among the oldest forms of urban architecture — vast arenas at the centre of western city life since ancient Greece and Rome.",
    "Culture and Leisure",
    "Trung bình – khó",
    "Cambridge 17 · Test 1",
  ),
  camArticle(
    "cam17-test1",
    3,
    "To catch a king",
    "Charles Spencer's book tells the story of the hunt for King Charles II in the weeks after his defeat at the Battle of Worcester in 1651.",
    "Social",
    "Khó",
    "Cambridge 17 · Test 1",
  ),
];

export const CAM17_TEST2: ReadingHubArticle[] = [
  camArticle(
    "cam17-test2",
    1,
    "The Dead Sea Scrolls",
    "In late 1946 and early 1947, Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran when they made a remarkable discovery.",
    "Culture and Leisure",
    "Trung bình",
    "Cambridge 17 · Test 2",
  ),
  camArticle(
    "cam17-test2",
    2,
    "A second attempt at domesticating the tomato",
    "Tomatoes could once kill you, according to folklore — today they are one of the world's most popular crops.",
    "Science",
    "Trung bình – khó",
    "Cambridge 17 · Test 2",
  ),
  camArticle(
    "cam17-test2",
    3,
    "Insight or evolution?",
    "Two psychologists give their views on how humans became self-centred.",
    "Psychology",
    "Khó",
    "Cambridge 17 · Test 2",
  ),
];

export const CAM17_TEST3: ReadingHubArticle[] = [
  camArticle(
    "cam17-test3",
    1,
    "The thylacine",
    "The extinct thylacine, also known as the Tasmanian tiger, was a marsupial that bore a superficial resemblance to a dog.",
    "Wildlife",
    "Trung bình",
    "Cambridge 17 · Test 3",
  ),
  camArticle(
    "cam17-test3",
    2,
    "Palm oil",
    "Palm oil is an edible oil derived from the fruit of the African oil palm tree, and it is now used in almost half of all packaged products in supermarkets.",
    "Environment",
    "Trung bình – khó",
    "Cambridge 17 · Test 3",
  ),
  camArticle(
    "cam17-test3",
    3,
    "Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers",
    "Katharine L. Shester reviews a book by Jason Barr about the development of New York City.",
    "Culture and Leisure",
    "Khó",
    "Cambridge 17 · Test 3",
  ),
];

export const CAM17_TEST4: ReadingHubArticle[] = [
  camArticle(
    "cam17-test4",
    1,
    "Bats to the rescue",
    "There is something surprising about the variety of life on Earth around us when it is dark.",
    "Wildlife",
    "Trung bình",
    "Cambridge 17 · Test 4",
  ),
  camArticle(
    "cam17-test4",
    2,
    "Does education fuel economic growth?",
    "A long-standing assumption among some economists is that education spending increases economic growth.",
    "Education",
    "Trung bình – khó",
    "Cambridge 17 · Test 4",
  ),
  camArticle(
    "cam17-test4",
    3,
    "Timur Gareyev – blindfold chess champion",
    "Timur Gareyev can play up to ten chess games simultaneously while blindfolded.",
    "Culture and Leisure",
    "Khó",
    "Cambridge 17 · Test 4",
  ),
];
