"use client";

import { ReadingArticleCard } from "@/components/reading/reading-article-card";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";

type ReadingArticleGridProps = {
  articles: ReadingHubArticle[];
  onStartArticle: (article: ReadingHubArticle) => void;
  emptyMessage?: string;
};

export function ReadingArticleGrid({
  articles,
  onStartArticle,
  emptyMessage = "Chưa có bài đọc trong mục này.",
}: ReadingArticleGridProps) {
  if (articles.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-[#E4E4E7] bg-white px-6 py-12 text-center text-sm text-[#47464b]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ReadingArticleCard
          key={article.id}
          article={article}
          onClick={() => onStartArticle(article)}
        />
      ))}
    </div>
  );
}

