import { ensureSentenceEnd, ensureSentenceStart } from "@/lib/reading/format-sentence-end";
import { normalizeReadingPassageTitle } from "@/lib/reading/normalize-passage-title";
import { readingArticleImage } from "@/lib/reading/passage-media";
import type { ReadingHubArticle, ReadingPilotId } from "@/lib/reading/hub-articles";

const SOURCE = "Đề thi thật IELTS" as const;

function realArticle(
  pilotId: ReadingPilotId,
  edition: string,
  passage: number,
  title: string,
  subheadline: string,
  topic: ReadingHubArticle["topic"],
  difficulty: ReadingHubArticle["difficulty"],
): ReadingHubArticle {
  const id = `${pilotId}-p${passage}`;
  return {
    id,
    pilotId,
    passage,
    title: normalizeReadingPassageTitle(title),
    subheadline: ensureSentenceEnd(ensureSentenceStart(subheadline)),
    source: SOURCE,
    topic,
    difficulty,
    imageUrl: readingArticleImage(id),
    edition,
  };
}

/** Ba bài lẻ của Đề thi thật IELTS 1 (Reading). */
export const REAL_TEST_1_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-1",
    "Đề thi thật IELTS 1",
    1,
    "Steam Across the Water",
    "A look at the early history of boats powered by steam.",
    "Technology",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-1",
    "Đề thi thật IELTS 1",
    2,
    "IQ Scores",
    "How they are changing and what the changes mean.",
    "Psychology",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-1",
    "Đề thi thật IELTS 1",
    3,
    "Practical Learning in the Classroom",
    "A teacher describes a case study involving middle school students and traditional earthen architecture.",
    "Education",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 2 (Reading) — metadata tối thiểu cho full đề / hub. */
export const REAL_TEST_2_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-2",
    "Đề thi thật IELTS 2",
    1,
    "The Life of Sir Isaac Newton",
    "A biography of Newton’s scientific breakthroughs, disputes, and lasting influence.",
    "Science",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-2",
    "Đề thi thật IELTS 2",
    2,
    "The Geography of Antarctica",
    "How ice, climate, and human presence shape the southernmost continent.",
    "Environment",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-2",
    "Đề thi thật IELTS 2",
    3,
    "Thinking, Fast and Slow",
    "A review of Kahneman’s account of two systems of thought and their consequences.",
    "Psychology",
    "Khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 3 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_3_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-3",
    "Đề thi thật IELTS 3",
    1,
    "How we manage the land on Earth",
    "Overpopulation, cities, and farming pressure on a finite planet.",
    "Environment",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-3",
    "Đề thi thật IELTS 3",
    2,
    "The monster ships that changed how we travel",
    "How rival ocean liners raced for size, speed, and luxury across the Atlantic.",
    "Technology",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-3",
    "Đề thi thật IELTS 3",
    3,
    "Innovative Tourism",
    "Food, chance, farms, and film sets as new ways to travel beyond the usual sights.",
    "Culture and Leisure",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 4 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_4_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-4",
    "Đề thi thật IELTS 4",
    1,
    "Cathy Freeman – Australian’s track queen",
    "How an Aboriginal champion runner became a national icon on and off the track.",
    "Sports",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-4",
    "Đề thi thật IELTS 4",
    2,
    "The world’s desire for plastic is dangerous",
    "Why soaring bottled-drink demand is outpacing recycling and polluting the oceans.",
    "Environment",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-4",
    "Đề thi thật IELTS 4",
    3,
    "On the trail of Africa’s wild dogs",
    "Scientists track endangered painted wolves as reintroduction programmes struggle to stick.",
    "Wildlife",
    "Khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 5 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_5_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-5",
    "Đề thi thật IELTS 5",
    1,
    "Sending money home: the economics of migrant remittances",
    "How remittances support families abroad — and why transfer fees still swallow so much of them.",
    "Social",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-5",
    "Đề thi thật IELTS 5",
    2,
    "Angelo Mosso’s Pioneering Work in the Study of Human Physiology",
    "From the ergograph to a tilting table: early experiments linking mind, muscle, and blood flow.",
    "Science",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-5",
    "Đề thi thật IELTS 5",
    3,
    "Who Wrote Shakespeare?",
    "Why some critics doubt the Stratford man — and the rival claims of Marlowe and de Vere.",
    "Culture and Leisure",
    "Khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 6 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_6_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-6",
    "Đề thi thật IELTS 6",
    1,
    "The Discovery of Penicillin",
    "From a contaminated Petri dish to wartime mass production — how Fleming, Florey, and Heatley changed medicine.",
    "Science",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-6",
    "Đề thi thật IELTS 6",
    2,
    "Daylight Saving Time",
    "Why clocks jump forward each spring — and the uneven gains and costs of shifting daylight.",
    "Social",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-6",
    "Đề thi thật IELTS 6",
    3,
    "Willpower",
    "What researchers say about self-control, glucose, belief, and whether willpower can be trained.",
    "Science",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 7 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_7_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-7",
    "Đề thi thật IELTS 7",
    1,
    "Wolf Packs",
    "How alpha, beta, tester, and omega wolves keep a pack organised — and how they hunt.",
    "Wildlife",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-7",
    "Đề thi thật IELTS 7",
    2,
    "Environmental medicine",
    "When human health meets ecosystems: zoonoses, climate, and the call for more funding.",
    "Science",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-7",
    "Đề thi thật IELTS 7",
    3,
    "Television and Sport",
    "How TV money, rules, and audience taste reshape the sports we watch.",
    "Sports",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 8 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_8_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-8",
    "Đề thi thật IELTS 8",
    1,
    "ELECTRORECEPTION",
    "How fish and sharks sense electricity in water — for hunting, defence, and navigation.",
    "Science",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-8",
    "Đề thi thật IELTS 8",
    2,
    "FAIR GAMES?",
    "The costs of hosting the Olympics — debt, empty stadiums, and proposed alternatives.",
    "Sports",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-8",
    "Đề thi thật IELTS 8",
    3,
    "Time Travel",
    "Neutrinos faster than light, paradoxes, and what Stephen Hawking says about human time travel.",
    "Science",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 9 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_9_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-9",
    "Đề thi thật IELTS 9",
    1,
    "The MAGIC of KEFIR",
    "From accidental donkey transport to probiotic darling — how kefir is made and used.",
    "Health",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-9",
    "Đề thi thật IELTS 9",
    2,
    "FOOD FOR THOUGHT",
    "Why eating insects could help the planet — and what still blocks Western appetites.",
    "Environment",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-9",
    "Đề thi thật IELTS 9",
    3,
    "Love stories",
    "Six love styles, Sternberg's narratives, and what they mean for real relationships.",
    "Psychology",
    "Trung bình – khó",
  ),
];

/** Ba bài lẻ của Đề thi thật IELTS 10 (Reading) — metadata tối thiểu; chưa dịch / curate vocab. */
export const REAL_TEST_10_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    "de-thi-that-10",
    "Đề thi thật IELTS 10",
    1,
    "MAKING TIME FOR SCIENCE",
    "Chronobiology and circadian rhythms — when to eat, sleep, exercise, and take vitamins.",
    "Science",
    "Trung bình",
  ),
  realArticle(
    "de-thi-that-10",
    "Đề thi thật IELTS 10",
    2,
    "The Triune Brain",
    "Reptilian, limbic, and neocortex layers — and what brain damage reveals about each.",
    "Science",
    "Trung bình – khó",
  ),
  realArticle(
    "de-thi-that-10",
    "Đề thi thật IELTS 10",
    3,
    "HELIUM'S FUTURE UP IN THE AIR",
    "Why helium is running out, who uses it, and what policymakers should do next.",
    "Science",
    "Trung bình – khó",
  ),
];
