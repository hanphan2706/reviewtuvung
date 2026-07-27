import { ensureSentenceEnd, ensureSentenceStart } from "@/lib/reading/format-sentence-end";
import { readingArticleImage } from "@/lib/reading/passage-media";
import { READING_CHALLENGE_1_UNITS } from "@/lib/reading/reading-challenge-1-meta";
import { READING_CHALLENGE_2_UNITS } from "@/lib/reading/reading-challenge-2-meta";
import { READING_CHALLENGE_3_UNITS } from "@/lib/reading/reading-challenge-3-meta";
import {
  CAM17_TEST1,
  CAM17_TEST2,
  CAM17_TEST3,
  CAM17_TEST4,
  CAM18_TEST1,
  CAM18_TEST2,
  CAM18_TEST3,
  CAM18_TEST4,
  CAM19_TEST1,
  CAM19_TEST2,
  CAM19_TEST3,
  CAM19_TEST4,
} from "@/lib/reading/cambridge-18-19-articles";
import {
  CAM16_TEST1,
  CAM16_TEST2,
  CAM16_TEST3,
  CAM16_TEST4,
  CAM21_TEST1,
  CAM21_TEST2,
  CAM21_TEST3,
  CAM21_TEST4,
} from "@/lib/reading/cambridge-16-21-articles";
import {
  CAM12_TEST1,
  CAM12_TEST2,
  CAM12_TEST3,
  CAM12_TEST4,
} from "@/lib/reading/cambridge-12-articles";
import {
  CAM13_TEST1,
  CAM13_TEST2,
  CAM13_TEST3,
  CAM13_TEST4,
} from "@/lib/reading/cambridge-13-articles";
import {
  CAM14_TEST1,
  CAM14_TEST2,
  CAM14_TEST3,
  CAM14_TEST4,
  CAM15_TEST1,
  CAM15_TEST2,
  CAM15_TEST3,
  CAM15_TEST4,
} from "@/lib/reading/cambridge-14-15-articles";

export type ReadingPilotId =
  | "cam17-test4"
  | "cam17-test3"
  | "cam17-test2"
  | "cam17-test1"
  | "cam19-test4"
  | "cam19-test3"
  | "cam19-test2"
  | "cam19-test1"
  | "cam18-test4"
  | "cam18-test3"
  | "cam18-test2"
  | "cam18-test1"
  | "cam20-test1"
  | "cam20-test2"
  | "cam20-test3"
  | "cam20-test4"
  | "cam16-test1"
  | "cam16-test2"
  | "cam16-test3"
  | "cam16-test4"
  | "cam15-test1"
  | "cam15-test2"
  | "cam15-test3"
  | "cam15-test4"
  | "cam14-test1"
  | "cam14-test2"
  | "cam14-test3"
  | "cam14-test4"
  | "cam13-test1"
  | "cam13-test2"
  | "cam13-test3"
  | "cam13-test4"
  | "cam12-test1"
  | "cam12-test2"
  | "cam12-test3"
  | "cam12-test4"
  | "cam21-test1"
  | "cam21-test2"
  | "cam21-test3"
  | "cam21-test4"
  | "reading-challenge-1"
  | "reading-challenge-2"
  | "reading-challenge-3";

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

type CompassPilotId = Extract<
  ReadingPilotId,
  "reading-challenge-1" | "reading-challenge-2" | "reading-challenge-3"
>;

const COMPASS_PUBLISHING_SOURCE: Record<CompassPilotId, string> = {
  "reading-challenge-1": "Compass Publishing 1",
  "reading-challenge-2": "Compass Publishing 2",
  "reading-challenge-3": "Compass Publishing 3",
};

function mapCompassUnits(
  pilotId: CompassPilotId,
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
      subheadline: ensureSentenceEnd(ensureSentenceStart(unit.subheadline)),
      source: COMPASS_PUBLISHING_SOURCE[pilotId],
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

const COMPASS_PUBLISHING_3 = mapCompassUnits(
  "reading-challenge-3",
  READING_CHALLENGE_3_UNITS,
  "Reading Challenge 3",
);

/** Toàn bộ bài — pool hub (random layout) + thư viện + reader.
 * Thứ tự mảng = thứ tự thêm vào app (cuối mảng = mới nhất khi sort "Mới nhất"). */
export const READING_HUB_ARTICLES: ReadingHubArticle[] = [
  ...COMPASS_PUBLISHING_1,
  ...COMPASS_PUBLISHING_2,
  ...COMPASS_PUBLISHING_3,
  ...CAM20_TEST4,
  ...CAM20_TEST3,
  ...CAM20_TEST2,
  ...CAM20_TEST1,
  ...CAM19_TEST4,
  ...CAM19_TEST3,
  ...CAM19_TEST2,
  ...CAM19_TEST1,
  ...CAM18_TEST1,
  ...CAM18_TEST2,
  ...CAM18_TEST3,
  ...CAM18_TEST4,
  ...CAM17_TEST4,
  ...CAM17_TEST3,
  ...CAM17_TEST2,
  ...CAM17_TEST1,
  ...CAM16_TEST1,
  ...CAM16_TEST2,
  ...CAM16_TEST3,
  ...CAM16_TEST4,
  ...CAM21_TEST1,
  ...CAM21_TEST2,
  ...CAM21_TEST3,
  ...CAM21_TEST4,
  ...CAM15_TEST1,
  ...CAM15_TEST2,
  ...CAM15_TEST3,
  ...CAM15_TEST4,
  ...CAM14_TEST1,
  ...CAM14_TEST2,
  ...CAM14_TEST3,
  ...CAM14_TEST4,
  ...CAM13_TEST1,
  ...CAM13_TEST2,
  ...CAM13_TEST3,
  ...CAM13_TEST4,
  ...CAM12_TEST1,
  ...CAM12_TEST2,
  ...CAM12_TEST3,
  ...CAM12_TEST4,
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
  return pilotId === "reading-challenge-1" || pilotId === "reading-challenge-2" || pilotId === "reading-challenge-3";
}
