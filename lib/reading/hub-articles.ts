import { readingArticleImage } from "@/lib/reading/passage-media";

export type ReadingPilotId = "cam20-test1" | "cam20-test2";

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
  | "Sports";

export type ReadingHubArticle = {
  id: string;
  pilotId: ReadingPilotId;
  passage: 1 | 2 | 3;
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

/** Hiển thị trên hub Luyện đọc (trang chủ module). */
export const READING_HUB_HOME_ARTICLES: ReadingHubArticle[] = CAM20_TEST2;

/** Hero nổi bật — khác Manatees (lưới) và kākāpō (ô rộng). */
export const READING_HUB_HERO_ARTICLE: ReadingHubArticle = CAM20_TEST1[1]!;

/** Ô rộng hàng dưới — Cam 20 Test 1. */
export const READING_HUB_WIDE_ARTICLE: ReadingHubArticle = CAM20_TEST1[0]!;

/** Toàn bộ bài (kể cả ẩn trên hub) — dùng cho reader / tra metadata. */
export const READING_HUB_ARTICLES: ReadingHubArticle[] = [...CAM20_TEST2, ...CAM20_TEST1];

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

/** Hero hub: nguồn · thời gian đọc (ước lượng ~1 passage IELTS). */
export function readingArticleHeroMetaLine(
  article: Pick<ReadingHubArticle, "source">,
  readMinutes = 12,
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
