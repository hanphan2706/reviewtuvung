import { realIeltsExamCatalogOrder } from "@/lib/exam/ielts-catalog-order";
import { LISTENING_IELTS_EXAM_HREF } from "@/lib/listening/ielts-test-catalog";
import { READING_IELTS_EXAM_HREF } from "@/lib/reading/ielts-test-catalog";

/** Slug trên URL — `de-thi-that-1`, sau này `de-thi-that-2`, … */
export type RealExamSlug = "de-thi-that-1";

/** Ảnh bìa chung cho mọi đề thi thật (Reading + Listening). */
export const REAL_EXAM_COVER_IMAGE_URL = "/exam/real-test-cover.jpeg";

export type RealExamListing = {
  slug: RealExamSlug;
  /** Số thứ tự hiển thị: Đề thi thật 1, 2, … */
  seriesNumber: number;
  title: string;
  subtitle: string;
  catalogOrder: number;
};

export const READING_REAL_EXAMS: readonly RealExamListing[] = [
  {
    slug: "de-thi-that-1",
    seriesNumber: 1,
    title: "Đề thi thật 1",
    subtitle: "Mid-Term Reading · 60 phút · 3 passages · 40 câu",
    catalogOrder: realIeltsExamCatalogOrder(1),
  },
] as const;

export const LISTENING_REAL_EXAMS: readonly RealExamListing[] = [
  {
    slug: "de-thi-that-1",
    seriesNumber: 1,
    title: "Đề thi thật 1",
    subtitle: "Mid-Term Listening · 40 phút · 4 parts · 40 câu",
    catalogOrder: realIeltsExamCatalogOrder(1),
  },
] as const;

const READING_BY_SLUG = new Map(READING_REAL_EXAMS.map((exam) => [exam.slug, exam]));
const LISTENING_BY_SLUG = new Map(LISTENING_REAL_EXAMS.map((exam) => [exam.slug, exam]));

export function isReadingRealExamSlug(slug: string): slug is RealExamSlug {
  return READING_BY_SLUG.has(slug as RealExamSlug);
}

export function isListeningRealExamSlug(slug: string): slug is RealExamSlug {
  return LISTENING_BY_SLUG.has(slug as RealExamSlug);
}

export function getReadingRealExam(slug: string): RealExamListing | null {
  return READING_BY_SLUG.get(slug as RealExamSlug) ?? null;
}

export function getListeningRealExam(slug: string): RealExamListing | null {
  return LISTENING_BY_SLUG.get(slug as RealExamSlug) ?? null;
}

export function readingRealExamHref(slug: RealExamSlug): string {
  return `${READING_IELTS_EXAM_HREF}/${slug}/lam-bai`;
}

export function listeningRealExamHref(slug: RealExamSlug): string {
  return `${LISTENING_IELTS_EXAM_HREF}/${slug}/lam-bai`;
}

export function realExamSearchText(exam: RealExamListing): string {
  return [exam.title, exam.subtitle, exam.slug, "đề thi thật", "mid-term", "midterm"].join(" ");
}

export function filterRealExams(
  exams: readonly RealExamListing[],
  query: string,
): RealExamListing[] {
  const q = query.trim().toLowerCase();
  if (!q) return [...exams];
  return exams.filter((exam) => realExamSearchText(exam).toLowerCase().includes(q));
}
