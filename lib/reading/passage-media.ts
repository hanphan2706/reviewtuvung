/** Ảnh stock Unsplash — hub + reader (cùng article id = cùng ảnh). */
export const READING_ARTICLE_IMAGES: Record<string, string> = {
  "cam20-test2-p1": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80&auto=format&fit=crop",
  "cam20-test2-p2": "https://images.unsplash.com/photo-1456513080510-7bf93aeedb20?w=1200&q=80&auto=format&fit=crop",
  "cam20-test2-p3": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop",
  "cam20-test1-p1": "https://images.unsplash.com/photo-1444464666168-49d633b867ad?w=1200&q=80&auto=format&fit=crop",
  "cam20-test1-p2": "https://images.unsplash.com/photo-1448375240384-0bfd1925884d?w=1200&q=80&auto=format&fit=crop",
  "cam20-test1-p3": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop",
};

export function readingArticleImage(articleId: string, passageFallback = 1): string {
  return (
    READING_ARTICLE_IMAGES[articleId] ??
    READING_ARTICLE_IMAGES[`cam20-test2-p${passageFallback}`] ??
    READING_ARTICLE_IMAGES["cam20-test2-p1"]
  );
}
