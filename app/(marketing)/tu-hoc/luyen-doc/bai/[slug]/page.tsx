import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { renderReadingArticlePage } from "@/lib/reading/article-page";
import { resolveReadingArticleRoute } from "@/lib/reading/article-routes";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resolveReadingArticleRoute(slug);
  if (!article) return { title: `Luyện đọc | ${LANDING.brand}` };
  return {
    title: `${article.title} | Luyện đọc | ${LANDING.brand}`,
    description: article.subheadline || "Đọc chủ động — bôi chọn, tra nghĩa, thêm từ.",
    robots: { index: false, follow: false },
  };
}

export default async function ReadingArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return renderReadingArticlePage(slug);
}
