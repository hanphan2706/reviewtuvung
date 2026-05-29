import {
  getReadingHubArticleById,
  READING_HUB_ARTICLES,
  type ReadingHubArticle,
} from "@/lib/reading/hub-articles";
import { READING_HUB_HREF } from "@/lib/reading/library-nav";

/** Slug URL từ tiêu đề bài (Manatees → manatees, The kākāpō → the-kakapo). */
export function readingArticleSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function buildReadingArticleRouteIndex(): {
  bySlug: Record<string, ReadingHubArticle>;
  slugByArticleId: Record<string, string>;
} {
  const bySlug: Record<string, ReadingHubArticle> = {};
  const slugByArticleId: Record<string, string> = {};

  for (const article of READING_HUB_ARTICLES) {
    const base = readingArticleSlug(article.title);
    let slug = base;
    let n = 2;
    while (bySlug[slug] && bySlug[slug].id !== article.id) {
      slug = `${base}-${n}`;
      n += 1;
    }
    bySlug[slug] = article;
    slugByArticleId[article.id] = slug;
  }

  return { bySlug, slugByArticleId };
}

const ROUTE_INDEX = buildReadingArticleRouteIndex();

export function readingArticleSlugFor(article: Pick<ReadingHubArticle, "id" | "title">): string {
  return ROUTE_INDEX.slugByArticleId[article.id] ?? readingArticleSlug(article.title);
}

export function readingArticleHref(article: Pick<ReadingHubArticle, "id" | "title">): string {
  return `${READING_HUB_HREF}/bai/${readingArticleSlugFor(article)}`;
}

export function readingArticleHrefById(articleId: string): string {
  const article = getReadingHubArticleById(articleId);
  return article ? readingArticleHref(article) : READING_HUB_HREF;
}

/** Tra bài theo slug tiêu đề hoặc id cũ (cam20-test2-p1) — tương thích bookmark. */
export function resolveReadingArticleRoute(segment: string): ReadingHubArticle | undefined {
  const key = decodeURIComponent(segment.trim()).toLowerCase();
  return ROUTE_INDEX.bySlug[key] ?? getReadingHubArticleById(key);
}
