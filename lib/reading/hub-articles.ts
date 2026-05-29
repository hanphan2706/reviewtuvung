import { ensureSentenceEnd } from "@/lib/reading/format-sentence-end";
import { readingArticleImage } from "@/lib/reading/passage-media";
import { READING_CHALLENGE_1_UNITS } from "@/lib/reading/reading-challenge-1-meta";
import { READING_CHALLENGE_2_UNITS } from "@/lib/reading/reading-challenge-2-meta";

export type ReadingPilotId =
  | "cam20-test1"
  | "cam20-test2"
  | "cam20-test3"
  | "cam20-test4"
  | "reading-challenge-1"
  | "reading-challenge-2";

export type ReadingDifficulty = "Dễ" | "Trung bình" | "Trung bình – khó" | "Khó";

/** Chủ đề kiểu tờ báo (Education, Science, Wildlife, …). */
export type ReadingTopic =
  | "Education"
  | "Science"
  | "Wildlife"
  | "Environment"
  | "Technology"
  | "Psychology"
  | "Social"
  | "Health"
  | "Sports"
  | "Culture and Leisure";

export type ReadingHubArticle = {
  id: string;
  pilotId: ReadingPilotId;
  /** Cambridge: 1–3; Reading Challenge: 1–20 */
  passage: number;
  title: string;
  subheadline: string;
  source: string;
  topic: ReadingTopic;
  difficulty: ReadingDifficulty;
  imageUrl: string;
  edition: string;
};

const CAM20_TEST2: ReadingHubArticle[] = [
  {
    id: "cam20-test2-p1",
    pilotId: "cam20-test2",
    passage: 1,
    title: "Manatees",
    subheadline:
      "Manatees, also known as sea cows, are aquatic mammals that belong to a group of animals called Sirenia.",
    source: "IELTS Cambridge",
    topic: "Wildlife",
    difficulty: "Trung bình",
    imageUrl: readingArticleImage("cam20-test2-p1"),
    edition: "Cambridge 20 · Test 2",
  },
  {
    id: "cam20-test2-p2",
    pilotId: "cam20-test2",
    passage: 2,
    title: "Procrastination",
    subheadline:
      "Procrastination is the habit of delaying a necessary task, usually by focusing on less urgent, more enjoyable, and easier activities instead.",
    source: "IELTS Cambridge",
    topic: "Psychology",
    difficulty: "Trung bình – khó",
    imageUrl: readingArticleImage("cam20-test2-p2"),
    edition: "Cambridge 20 · Test 2",
  },
  {
    id: "cam20-test2-p3",
    pilotId: "cam20-test2",
    passage: 3,
    title: "Invasion of the Robot Umpires",
    subheadline:
      "A few years ago, Fred DeJesus from Brooklyn became the first umpire in a minor league game to use the Automated Ball-Strike System, often called the ‘roboumpire’.",
    source: "IELTS Cambridge",
    topic: "Technology",
    difficulty: "Khó",
    imageUrl: readingArticleImage("cam20-test2-p3"),
    edition: "Cambridge 20 · Test 2",
  },
];

const CAM20_TEST1: ReadingHubArticle[] = [
  {
    id: "cam20-test1-p1",
    pilotId: "cam20-test1",
    passage: 1,
    title: "The kākāpō",
    subheadline:
      "The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand’s unique treasures.",
    source: "IELTS Cambridge",
    topic: "Wildlife",
    difficulty: "Trung bình",
    imageUrl: readingArticleImage("cam20-test1-p1"),
    edition: "Cambridge 20 · Test 1",
  },
  {
    id: "cam20-test1-p2",
    pilotId: "cam20-test1",
    passage: 2,
    title: "To Britain",
    subheadline: "Mark Rowe investigates attempts to reintroduce elms to Britain.",
    source: "IELTS Cambridge",
    topic: "Environment",
    difficulty: "Trung bình – khó",
    imageUrl: readingArticleImage("cam20-test1-p2"),
    edition: "Cambridge 20 · Test 1",
  },
  {
    id: "cam20-test1-p3",
    pilotId: "cam20-test1",
    passage: 3,
    title: "How stress affects our judgement",
    subheadline:
      "Some of the most important decisions of our lives occur while we’re feeling stressed and anxious.",
    source: "IELTS Cambridge",
    topic: "Psychology",
    difficulty: "Khó",
    imageUrl: readingArticleImage("cam20-test1-p3"),
    edition: "Cambridge 20 · Test 1",
  },
];

const CAM20_TEST3: ReadingHubArticle[] = [
  {
    id: "cam20-test3-p1",
    pilotId: "cam20-test3",
    passage: 1,
    title: "Frozen Food",
    subheadline: "A US perspective on the development of the frozen food industry.",
    source: "IELTS Cambridge",
    topic: "Science",
    difficulty: "Trung bình",
    imageUrl: readingArticleImage("cam20-test3-p1"),
    edition: "Cambridge 20 · Test 3",
  },
  {
    id: "cam20-test3-p2",
    pilotId: "cam20-test3",
    passage: 2,
    title: "Can the planet’s coral reefs be saved?",
    subheadline:
      "London Zoo’s new exhibition showcases coral reefs and the science trying to protect them from global warming.",
    source: "IELTS Cambridge",
    topic: "Environment",
    difficulty: "Trung bình – khó",
    imageUrl: readingArticleImage("cam20-test3-p2"),
    edition: "Cambridge 20 · Test 3",
  },
  {
    id: "cam20-test3-p3",
    pilotId: "cam20-test3",
    passage: 3,
    title: "Robots and us",
    subheadline:
      "Three leaders in their fields answer questions about our relationships with robots.",
    source: "IELTS Cambridge",
    topic: "Technology",
    difficulty: "Khó",
    imageUrl: readingArticleImage("cam20-test3-p3"),
    edition: "Cambridge 20 · Test 3",
  },
];

const CAM20_TEST4: ReadingHubArticle[] = [
  {
    id: "cam20-test4-p1",
    pilotId: "cam20-test4",
    passage: 1,
    title: "Georgia O’Keeffe",
    subheadline:
      "For seven decades, Georgia O’Keeffe was a major figure in American art who stayed true to her own vision.",
    source: "IELTS Cambridge",
    topic: "Culture and Leisure",
    difficulty: "Trung bình",
    imageUrl: readingArticleImage("cam20-test4-p1"),
    edition: "Cambridge 20 · Test 4",
  },
  {
    id: "cam20-test4-p2",
    pilotId: "cam20-test4",
    passage: 2,
    title: "Adapting to the effects of climate change",
    subheadline:
      "Nations worldwide are already preparing for climate change and its impacts, even if emissions stopped tomorrow.",
    source: "IELTS Cambridge",
    topic: "Environment",
    difficulty: "Trung bình – khó",
    imageUrl: readingArticleImage("cam20-test4-p2"),
    edition: "Cambridge 20 · Test 4",
  },
  {
    id: "cam20-test4-p3",
    pilotId: "cam20-test4",
    passage: 3,
    title: "A new role for livestock guard dogs",
    subheadline:
      "Livestock guard dogs traditionally protect farm animals from predators — and are now helping protect predators too.",
    source: "IELTS Cambridge",
    topic: "Wildlife",
    difficulty: "Khó",
    imageUrl: readingArticleImage("cam20-test4-p3"),
    edition: "Cambridge 20 · Test 4",
  },
];

function mapCompassUnits(
  pilotId: "reading-challenge-1" | "reading-challenge-2",
  units: typeof READING_CHALLENGE_1_UNITS,
  bookLabel: string,
): ReadingHubArticle[] {
  return units.map((unit) => {
    const id = `${pilotId}-p${unit.passage}`;
    return {
      id,
      pilotId,
      passage: unit.passage,
      title: unit.title,
      subheadline: ensureSentenceEnd(unit.subheadline),
      source: "Compass Publishing",
      topic: unit.topic,
      difficulty: unit.difficulty,
      imageUrl: readingArticleImage(id),
      edition: `${bookLabel} · Unit ${unit.passage}`,
    };
  });
}

const COMPASS_PUBLISHING_1 = mapCompassUnits(
  "reading-challenge-1",
  READING_CHALLENGE_1_UNITS,
  "Reading Challenge 1",
);
const COMPASS_PUBLISHING_2 = mapCompassUnits(
  "reading-challenge-2",
  READING_CHALLENGE_2_UNITS,
  "Reading Challenge 2",
);

/** Toàn bộ bài — pool hub (random layout) + thư viện + reader. */
export const READING_HUB_ARTICLES: ReadingHubArticle[] = [
  ...COMPASS_PUBLISHING_1,
  ...COMPASS_PUBLISHING_2,
  ...CAM20_TEST4,
  ...CAM20_TEST3,
  ...CAM20_TEST2,
  ...CAM20_TEST1,
];

/** @deprecated dùng pilotId cụ thể */
export const READING_PILOT_ID: ReadingPilotId = "cam20-test2";

/** Dòng 1 thẻ lưới / reader pill: nguồn · topic */
export function readingArticleSourceTopicLabel(
  article: Pick<ReadingHubArticle, "source" | "topic">,
): string {
  return `${article.source} · ${article.topic}`;
}

/** Dòng 2 thẻ lưới (footer): độ khó — thay cho dòng edition Cambridge trước đây */
export function readingArticleDifficultyLabel(article: Pick<ReadingHubArticle, "difficulty">): string {
  return article.difficulty;
}

/** Hero hub: nguồn · thời gian đọc (ước lượng từ `estimateReadMinutes`). */
export function readingArticleHeroMetaLine(
  article: Pick<ReadingHubArticle, "source">,
  readMinutes: number,
): string {
  return `${article.source.toUpperCase()} · ${readMinutes} PHÚT ĐỌC`;
}

/** @deprecated dùng readingArticleSourceTopicLabel */
export function readingArticleMetaLabel(article: Pick<ReadingHubArticle, "source" | "topic">): string {
  return readingArticleSourceTopicLabel(article);
}

export function getReadingHubArticle(pilotId: ReadingPilotId, passage: number): ReadingHubArticle | undefined {
  return READING_HUB_ARTICLES.find((a) => a.pilotId === pilotId && a.passage === passage);
}

export function getReadingHubArticleById(id: string): ReadingHubArticle | undefined {
  return READING_HUB_ARTICLES.find((a) => a.id === id);
}

/** Compass Publishing (Reading Challenge) — kiểm tra nhanh trong reader, không mở exam HTML IELTS. */
export function isCompassPublishingPilot(pilotId: ReadingPilotId): boolean {
  return pilotId === "reading-challenge-1" || pilotId === "reading-challenge-2";
}
