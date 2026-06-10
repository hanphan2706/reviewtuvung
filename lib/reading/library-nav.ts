import {
  READING_HUB_ARTICLES,
  type ReadingDifficulty,
  type ReadingHubArticle,
  type ReadingTopic,
} from "@/lib/reading/hub-articles";
import { READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";

export { READING_IELTS_EXAM_HREF };

export type ReadingLibraryNavItem = {
  label: string;
  href: string;
};

export const READING_HUB_HREF = "/tu-hoc/luyen-doc";

export const READING_LIBRARY_ALL_HREF = `${READING_HUB_HREF}/thu-vien`;

const DIFFICULTY_SLUG: Record<ReadingDifficulty, string> = {
  "Dễ": "de",
  "Trung bình": "trung-binh",
  "Trung bình – khó": "trung-binh-kho",
  Khó: "kho",
};

const DIFFICULTY_BY_SLUG = Object.fromEntries(
  Object.entries(DIFFICULTY_SLUG).map(([label, slug]) => [slug, label as ReadingDifficulty]),
) as Record<string, ReadingDifficulty>;

const TOPIC_SLUG: Record<ReadingTopic, string> = {
  Education: "education",
  Science: "science",
  Wildlife: "wildlife",
  Environment: "environment",
  Technology: "technology",
  Psychology: "psychology",
  Social: "social",
  Health: "health",
  Sports: "sports",
  "Culture and Leisure": "culture-and-leisure",
};

const TOPIC_BY_SLUG = Object.fromEntries(
  Object.entries(TOPIC_SLUG).map(([label, slug]) => [slug, label as ReadingTopic]),
) as Record<string, ReadingTopic>;

function sourceSlug(source: string): string {
  return source
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueSources(): string[] {
  return [...new Set(READING_HUB_ARTICLES.map((a) => a.source))].sort();
}

function usedDifficulties(): ReadingDifficulty[] {
  const order: ReadingDifficulty[] = ["Dễ", "Trung bình", "Trung bình – khó", "Khó"];
  const set = new Set(READING_HUB_ARTICLES.map((a) => a.difficulty));
  return order.filter((d) => set.has(d));
}

function usedTopics(): ReadingTopic[] {
  const order: ReadingTopic[] = [
    "Education",
    "Science",
    "Wildlife",
    "Environment",
    "Technology",
    "Psychology",
    "Social",
    "Health",
    "Sports",
    "Culture and Leisure",
  ];
  const set = new Set(READING_HUB_ARTICLES.map((a) => a.topic));
  return order.filter((t) => set.has(t));
}

export const READING_SOURCE_NAV: ReadingLibraryNavItem[] = uniqueSources().map((source) => ({
  label: source,
  href: `${READING_HUB_HREF}/nguon/${sourceSlug(source)}`,
}));

export const READING_DIFFICULTY_NAV: ReadingLibraryNavItem[] = usedDifficulties().map((difficulty) => ({
  label: difficulty,
  href: `${READING_HUB_HREF}/do-kho/${DIFFICULTY_SLUG[difficulty]}`,
}));

export const READING_TOPIC_NAV: ReadingLibraryNavItem[] = usedTopics().map((topic) => ({
  label: topic,
  href: `${READING_HUB_HREF}/chu-de/${TOPIC_SLUG[topic]}`,
}));

export type ReadingLibraryPageKind = "all" | "source" | "difficulty" | "topic";

export type ReadingLibraryPageConfig = {
  kind: ReadingLibraryPageKind;
  title: string;
  description: string;
  articles: ReadingHubArticle[];
};

export function readingLibraryAllPage(): ReadingLibraryPageConfig {
  return {
    kind: "all",
    title: "Toàn bộ thư viện bài đọc",
    description: "",
    articles: READING_HUB_ARTICLES,
  };
}

const IELTS_CAMBRIDGE_SOURCE = "IELTS Cambridge";

const IELTS_CAMBRIDGE_SOURCE_DESCRIPTION =
  "Đối với nguồn bài đọc là IELTS cambridge, bạn có thể luyện đề luôn thay vì chỉ đọc hiểu bài thông thường.";

export function readingLibraryBySource(slug: string): ReadingLibraryPageConfig | null {
  const source = uniqueSources().find((s) => sourceSlug(s) === slug);
  if (!source) return null;
  const articles = READING_HUB_ARTICLES.filter((a) => a.source === source);
  return {
    kind: "source",
    title: `Nguồn: ${source}`,
    description:
      source === IELTS_CAMBRIDGE_SOURCE
        ? IELTS_CAMBRIDGE_SOURCE_DESCRIPTION
        : `${articles.length} bài đọc từ ${source}.`,
    articles,
  };
}

export function readingLibraryByDifficulty(slug: string): ReadingLibraryPageConfig | null {
  const difficulty = DIFFICULTY_BY_SLUG[slug];
  if (!difficulty) return null;
  const articles = READING_HUB_ARTICLES.filter((a) => a.difficulty === difficulty);
  return {
    kind: "difficulty",
    title: `Độ khó: ${difficulty}`,
    description: `${articles.length} bài ở mức ${difficulty}.`,
    articles,
  };
}

export function readingLibraryByTopic(slug: string): ReadingLibraryPageConfig | null {
  const topic = TOPIC_BY_SLUG[slug];
  if (!topic) return null;
  const articles = READING_HUB_ARTICLES.filter((a) => a.topic === topic);
  return {
    kind: "topic",
    title: `Chủ đề: ${topic}`,
    description: `${articles.length} bài thuộc chủ đề ${topic}.`,
    articles,
  };
}

export type ReadingIeltsExamPageConfig = {
  title: string;
  description: string;
};

export function readingIeltsExamPage(): ReadingIeltsExamPageConfig {
  return {
    title: "Luyện đề IELTS",
    description:
      "Làm full test với giao diện giống như thi thật, giúp bạn chuẩn bị tốt hơn cho kì thi.",
  };
}
