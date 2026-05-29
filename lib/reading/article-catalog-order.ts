import { READING_HUB_ARTICLES, type ReadingHubArticle } from "@/lib/reading/hub-articles";

const CATALOG_ORDER_BY_ID = new Map(
  READING_HUB_ARTICLES.map((article, index) => [article.id, index]),
);

/** Thứ tự xuất bản trong app: RC1 → RC2 → Cambridge (mới hơn = chỉ số lớn hơn). */
export function readingArticleCatalogOrder(article: Pick<ReadingHubArticle, "id">): number {
  return CATALOG_ORDER_BY_ID.get(article.id) ?? 0;
}
