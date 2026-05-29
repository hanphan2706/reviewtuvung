import type { ReadingHubArticle } from "@/lib/reading/hub-articles";

export type ReadingHubLayout = {
  hero: ReadingHubArticle;
  textTopLeft: ReadingHubArticle;
  textTopRight: ReadingHubArticle;
  wide: ReadingHubArticle;
  dark: ReadingHubArticle;
};

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j] as T;
    copy[j] = tmp as T;
  }
  return copy;
}

/** Chọn 5 bài khác nhau cho layout trang chủ Luyện đọc (hero + 4 ô). */
export function pickReadingHubLayout(pool: ReadingHubArticle[]): ReadingHubLayout {
  if (pool.length < 5) {
    throw new Error("Cần ít nhất 5 bài đọc để hiển thị hub Luyện đọc.");
  }
  const picked = shuffle(pool).slice(0, 5);
  const hero = picked[0];
  const textTopLeft = picked[1];
  const textTopRight = picked[2];
  const wide = picked[3];
  const dark = picked[4];
  if (!hero || !textTopLeft || !textTopRight || !wide || !dark) {
    throw new Error("Không đủ bài đọc sau khi xáo trộn hub.");
  }
  return { hero, textTopLeft, textTopRight, wide, dark };
}
