import { LISTENING_ACCENT_HUB_HREF } from "@/lib/listening/accent-nav";
import { LISTENING_PARTS_PILOT } from "@/lib/listening/content-manifest";
import { LISTENING_CAMBRIDGE_TESTS, LISTENING_IELTS_EXAM_HREF } from "@/lib/listening/ielts-test-catalog";
import { ACCENT_COMPARISON_SET_COUNT } from "@/lib/listening/speech-accent-catalog";
import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";

export type ListeningSourceDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type ListeningSourceCategoryId = "accents" | "beginner" | "ielts" | "ielts-exam";

export type ListeningSourceCategory = {
  id: ListeningSourceCategoryId;
  title: string;
  description: string;
  href: string;
  lessonCount: number;
  difficulty: ListeningSourceDifficulty;
  flagEmoji: string;
  catalogOrder: number;
};

const LISTENING_IELTS_SOURCE = "IELTS Cambridge";
const LISTENING_TACTICS_SOURCE = "Tactics for Listening Basic";

/** Tiêu đề thẻ / trang thư viện IELTS trên hub Luyện nghe. */
export const LISTENING_IELTS_EXAM_CARD_TITLE = "Luyện đề IELTS (theo bài lẻ)";

export const LISTENING_SOURCES_EXPLORE_HREF = `${LISTENING_HUB_HREF}/kham-pha-nguon`;

export const LISTENING_SOURCES_EXPLORE_SUBTITLE =
  "Lựa chọn chủ đề, giọng nói, hoặc nguồn đọc phù hợp với sở thích để bắt đầu hành trình luyện tập.";

export const LISTENING_SOURCE_CATEGORIES: readonly ListeningSourceCategory[] = [
  {
    id: "accents",
    title: "Các chất giọng vùng miền khác nhau",
    description:
      "Cải thiện khả năng nhận diện âm và nghe hiểu tiếng Anh thực tế thông qua các bài học về phát âm, nối âm và sự khác biệt giữa các chất giọng.",
    href: LISTENING_ACCENT_HUB_HREF,
    lessonCount: ACCENT_COMPARISON_SET_COUNT,
    difficulty: "Intermediate",
    flagEmoji: "🌐",
    catalogOrder: 1,
  },
  {
    id: "beginner",
    title: "Luyện nghe cho người mới bắt đầu",
    description:
      "Nội dung đa dạng và thực tế, kết hợp với kỹ thuật nghe chủ động, giúp bạn cải thiện kỹ năng nghe nhanh và đúng. Phù hợp với các bạn sơ cấp A1 - A2.",
    href: `${LISTENING_HUB_HREF}/nguon/tactics-for-listening-basic`,
    lessonCount: LISTENING_PARTS_PILOT.filter((lesson) => lesson.metaPill === LISTENING_TACTICS_SOURCE)
      .length,
    difficulty: "Beginner",
    flagEmoji: "🎧",
    catalogOrder: 2,
  },
  {
    id: "ielts",
    title: LISTENING_IELTS_EXAM_CARD_TITLE,
    description:
      "Với giao diện giống thi thật 100%, giúp bạn làm quen với độ khó và thao tác để không bỡ ngỡ khi đi thi.",
    href: `${LISTENING_HUB_HREF}/nguon/ielts-cambridge`,
    lessonCount: LISTENING_PARTS_PILOT.filter((lesson) => lesson.metaPill === LISTENING_IELTS_SOURCE)
      .length,
    difficulty: "Advanced",
    flagEmoji: "📝",
    catalogOrder: 3,
  },
  {
    id: "ielts-exam",
    title: "Luyện đề IELTS",
    description:
      "Làm full test với giao diện giống như thi thật, giúp bạn đỡ bỡ ngỡ trước ngày thi.",
    href: LISTENING_IELTS_EXAM_HREF,
    lessonCount: LISTENING_CAMBRIDGE_TESTS.length,
    difficulty: "Advanced",
    flagEmoji: "📋",
    catalogOrder: 4,
  },
] as const;

export function getListeningSourceCategory(id: ListeningSourceCategoryId): ListeningSourceCategory {
  const category = LISTENING_SOURCE_CATEGORIES.find((item) => item.id === id);
  if (!category) {
    throw new Error(`Unknown listening source category: ${id}`);
  }
  return category;
}

export function listeningSourceDifficultyLabelVi(
  difficulty: ListeningSourceDifficulty | "all",
): string {
  switch (difficulty) {
    case "all":
      return "Tất cả";
    case "Beginner":
      return "Cơ bản";
    case "Intermediate":
      return "Trung cấp";
    case "Advanced":
      return "Nâng cao";
  }
}

export function formatListeningSourceLessonCount(count: number): string {
  return `${count} bài học`;
}
