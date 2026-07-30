import { ensureSentenceEnd, ensureSentenceStart } from "@/lib/reading/format-sentence-end";
import { readingArticleImage } from "@/lib/reading/passage-media";
import type { ReadingHubArticle } from "@/lib/reading/hub-articles";

const SOURCE = "Đề thi thật IELTS" as const;

function realArticle(
  passage: number,
  title: string,
  subheadline: string,
  topic: ReadingHubArticle["topic"],
  difficulty: ReadingHubArticle["difficulty"],
): ReadingHubArticle {
  const pilotId = "de-thi-that-1" as const;
  const id = `${pilotId}-p${passage}`;
  return {
    id,
    pilotId,
    passage,
    title,
    subheadline: ensureSentenceEnd(ensureSentenceStart(subheadline)),
    source: SOURCE,
    topic,
    difficulty,
    imageUrl: readingArticleImage(id),
    edition: "Đề thi thật IELTS 1",
  };
}

/** Ba bài lẻ của Đề thi thật IELTS 1 (Reading). */
export const REAL_TEST_1_ARTICLES: ReadingHubArticle[] = [
  realArticle(
    1,
    "Steam Across the Water",
    "A look at the early history of boats powered by steam.",
    "Technology",
    "Trung bình",
  ),
  realArticle(
    2,
    "IQ Scores",
    "How they are changing and what the changes mean.",
    "Psychology",
    "Trung bình – khó",
  ),
  realArticle(
    3,
    "Practical Learning in the Classroom",
    "A teacher describes a case study involving middle school students and traditional earthen architecture.",
    "Education",
    "Trung bình – khó",
  ),
];
