import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";
import type { ReadingIeltsTest } from "@/lib/reading/ielts-test-catalog";

function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}

function haystackIncludes(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle);
}

function listeningLessonSearchText(lesson: ListeningPartMeta): string {
  const parts = [
    lesson.title,
    lesson.summary,
    lesson.slug,
    lesson.id,
    lesson.metaPill,
    lesson.examSlug,
    ...lesson.topics,
    `part ${lesson.part}`,
    `part${lesson.part}`,
    `p${lesson.part}`,
  ];

  if (lesson.examSlug.startsWith("cam")) {
    const testNum = lesson.test;
    parts.push(`test ${testNum}`, `test${testNum}`, `cam ${testNum}`, `cam${testNum}`);
    parts.push(`cambridge ${testNum}`, `cambridge${testNum}`);
  }

  return parts.join(" ");
}

export function filterListeningLibraryLessons(
  lessons: readonly ListeningPartMeta[],
  query: string,
): ListeningPartMeta[] {
  const q = normalizeSearchQuery(query);
  if (!q) return [...lessons];
  return lessons.filter((lesson) => haystackIncludes(listeningLessonSearchText(lesson), q));
}

function readingArticleSearchText(article: ReadingHubArticle): string {
  return [
    article.title,
    article.subheadline,
    article.source,
    article.topic,
    article.edition,
    article.id,
    article.pilotId,
    `passage ${article.passage}`,
    `passage${article.passage}`,
    `p${article.passage}`,
  ].join(" ");
}

export function filterReadingLibraryArticles(
  articles: readonly ReadingHubArticle[],
  query: string,
): ReadingHubArticle[] {
  const q = normalizeSearchQuery(query);
  if (!q) return [...articles];
  return articles.filter((article) => haystackIncludes(readingArticleSearchText(article), q));
}

function readingIeltsTestSearchText(test: ReadingIeltsTest): string {
  return [
    test.label,
    test.bookTitle,
    test.pilotId,
    `test ${test.testNumber}`,
    `test${test.testNumber}`,
  ].join(" ");
}

export function filterReadingIeltsTests(
  tests: readonly ReadingIeltsTest[],
  query: string,
): ReadingIeltsTest[] {
  const q = normalizeSearchQuery(query);
  if (!q) return [...tests];
  return tests.filter((test) => haystackIncludes(readingIeltsTestSearchText(test), q));
}
