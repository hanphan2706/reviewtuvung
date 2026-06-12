import {
  LISTENING_PARTS_PILOT,
  type ListeningPartMeta,
} from "@/lib/listening/content-manifest";
import {
  LISTENING_DIFFICULTY_BANDS,
  listeningDifficultyBandForLesson,
  listeningDifficultyBandFromSlug,
  listeningDifficultyBandSlug,
  type ListeningDifficultyBand,
} from "@/lib/listening/listening-difficulty-bands";
import { LISTENING_ACCENT_HUB_HREF } from "@/lib/listening/accent-nav";
import { LISTENING_HUB_HREF } from "@/lib/listening/listening-hub-nav";
import { getListeningSourceCategory, LISTENING_IELTS_EXAM_CARD_TITLE } from "@/lib/listening/listening-source-catalog";

export type ListeningLibraryNavItem = {
  label: string;
  href: string;
};

export const LISTENING_LIBRARY_ALL_HREF = `${LISTENING_HUB_HREF}/thu-vien`;

/** Bộ lọc chất giọng — chưa có trang đích. */
export const LISTENING_ACCENT_FILTER_LABELS = ["Anh - Anh", "Anh - Mỹ", "Anh - Úc"] as const;

export { LISTENING_ACCENT_HUB_HREF, listeningAccentRegionHref } from "@/lib/listening/accent-nav";
export { LISTENING_IPA_CHART_HREF } from "@/lib/listening/ipa-chart-nav";
export { LISTENING_SOURCES_EXPLORE_HREF } from "@/lib/listening/listening-source-catalog";

/** @deprecated Dùng `LISTENING_DIFFICULTY_NAV`. */
export const LISTENING_DIFFICULTY_FILTER_LABELS = LISTENING_DIFFICULTY_BANDS;

export const LISTENING_IELTS_SOURCE = "IELTS Cambridge";

export const LISTENING_TACTICS_SOURCE = "Tactics for Listening Basic";

export const LISTENING_IELTS_LIBRARY_HREF = `${LISTENING_HUB_HREF}/nguon/ielts-cambridge`;

export const LISTENING_TACTICS_LIBRARY_HREF = `${LISTENING_HUB_HREF}/nguon/tactics-for-listening-basic`;

/** Bài Tactics — luyện nghe cho người mới bắt đầu (A1–A2). */
export const LISTENING_BEGINNER_LIBRARY_HREF = LISTENING_TACTICS_LIBRARY_HREF;

/** Nhãn menu / nguồn — khớp thẻ khám phá nguồn nghe. */
export const LISTENING_BEGINNER_SOURCE_LABEL = "Cho người mới bắt đầu";

export const LISTENING_ACCENT_SOURCE_LABEL = "Các chất giọng khác nhau";

export { LISTENING_IELTS_EXAM_HREF } from "@/lib/listening/ielts-test-catalog";

function sourceSlug(source: string): string {
  return source
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function isListeningBeginnerLesson(lesson: ListeningPartMeta): boolean {
  return lesson.examSlug === "tactics-basic";
}

export function listeningLessonsBySource(source: string): ListeningPartMeta[] {
  return LISTENING_PARTS_PILOT.filter((lesson) => lesson.metaPill === source);
}

export const LISTENING_IELTS_LESSON_COUNT = listeningLessonsBySource(LISTENING_IELTS_SOURCE).length;

export const LISTENING_TACTICS_LESSON_COUNT = listeningLessonsBySource(LISTENING_TACTICS_SOURCE).length;

export const LISTENING_SOURCE_NAV: ListeningLibraryNavItem[] = [
  { label: LISTENING_IELTS_SOURCE, href: LISTENING_IELTS_LIBRARY_HREF },
  { label: LISTENING_BEGINNER_SOURCE_LABEL, href: LISTENING_TACTICS_LIBRARY_HREF },
  { label: LISTENING_ACCENT_SOURCE_LABEL, href: LISTENING_ACCENT_HUB_HREF },
];

export const LISTENING_DIFFICULTY_NAV: ListeningLibraryNavItem[] = LISTENING_DIFFICULTY_BANDS.map(
  (band) => ({
    label: band,
    href: `${LISTENING_HUB_HREF}/do-kho/${listeningDifficultyBandSlug(band)}`,
  }),
);

export type ListeningLibraryLayout = "grid" | "course-list";

export type ListeningLibraryPageConfig = {
  title: string;
  description: string;
  /** Dòng phụ đề bổ sung — chỉ hiển thị trên trang khóa học (Tactics Basic). */
  descriptionExtra?: string;
  lessons: readonly ListeningPartMeta[];
  layout?: ListeningLibraryLayout;
};

const IELTS_LISTENING_DESCRIPTION =
  "Luyện nghe hiểu IELTS theo bài lẻ, với giao diện như thi thật hoặc đơn giản là nghe hiểu nội dung.";

const TACTICS_BEGINNER_ACTIVE_LISTENING_NOTE =
  "Bạn sẽ đi qua đủ các bước của active listening như dự đoán, nghe ý chính, nghe chi tiết và cuối cùng là shadowing. Đừng lo lắng nếu như bị miss một hai từ hoặc một hai thông tin khi nghe nhé! Dần dà bạn sẽ thấy rõ sự tiến bộ thôi!";

const LISTENING_SOURCES = [LISTENING_IELTS_SOURCE, LISTENING_TACTICS_SOURCE] as const;

export function listeningLibraryAllPage(): ListeningLibraryPageConfig {
  return {
    title: "Toàn bộ thư viện bài nghe",
    description: "",
    lessons: sortListeningLessons(LISTENING_PARTS_PILOT),
  };
}

export function listeningLibraryBySource(slug: string): ListeningLibraryPageConfig | null {
  const source = LISTENING_SOURCES.find((item) => sourceSlug(item) === slug);
  if (!source) return null;
  const lessons = listeningLessonsBySource(source);
  return {
    title:
      source === LISTENING_IELTS_SOURCE
        ? LISTENING_IELTS_EXAM_CARD_TITLE
        : source === LISTENING_TACTICS_SOURCE
          ? "Luyện nghe cho người mới bắt đầu"
          : `Nguồn: ${source}`,
    description:
      source === LISTENING_IELTS_SOURCE
        ? IELTS_LISTENING_DESCRIPTION
        : source === LISTENING_TACTICS_SOURCE
          ? getListeningSourceCategory("beginner").description
          : `${lessons.length} bài nghe từ ${source}.`,
    descriptionExtra:
      source === LISTENING_TACTICS_SOURCE ? TACTICS_BEGINNER_ACTIVE_LISTENING_NOTE : undefined,
    lessons: sortListeningLessons(lessons),
    layout: source === LISTENING_TACTICS_SOURCE ? "course-list" : "grid",
  };
}

export function listeningLibraryByDifficulty(slug: string): ListeningLibraryPageConfig | null {
  const band = listeningDifficultyBandFromSlug(slug);
  if (!band) return null;
  const lessons = LISTENING_PARTS_PILOT.filter(
    (lesson) => listeningDifficultyBandForLesson(lesson) === band,
  );
  return {
    title: `Độ khó: ${band}`,
    description: `${lessons.length} bài nghe mức ${band} — transcript đồng bộ, luyện nghe chủ động.`,
    lessons: sortListeningLessons(lessons),
  };
}

export function listeningLessonsByDifficultyBand(band: ListeningDifficultyBand): ListeningPartMeta[] {
  return sortListeningLessons(
    LISTENING_PARTS_PILOT.filter((lesson) => listeningDifficultyBandForLesson(lesson) === band),
  );
}

export function sortListeningLessons(lessons: readonly ListeningPartMeta[]): ListeningPartMeta[] {
  return [...lessons].sort((a, b) => a.test - b.test || a.part - b.part);
}

export type ListeningIeltsExamPageConfig = {
  title: string;
  description: string;
};

export function listeningIeltsExamPage(): ListeningIeltsExamPageConfig {
  return {
    title: "Luyện đề IELTS",
    description:
      "Làm full test với giao diện giống như thi thật, giúp bạn đỡ bỡ ngỡ trước ngày thi.",
  };
}
