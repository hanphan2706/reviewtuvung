import { resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";

/** Hub Luyện nghe — xem được khi chưa đăng nhập. Luyện đọc: chỉ hub/thư viện; bài đọc cần login. */
export function isPublicStudyHubPath(pathname: string): boolean {
  if (pathname === "/tu-hoc/luyen-nghe" || pathname.startsWith("/tu-hoc/luyen-nghe/")) return true;
  if (pathname === "/tu-hoc/luyen-doc" || pathname.startsWith("/tu-hoc/luyen-doc/thu-vien")) return true;
  if (pathname === "/tu-hoc/luyen-doc/chu-de") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/chu-de/")) return true;
  if (pathname === "/tu-hoc/luyen-doc/nguon") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/nguon/")) return true;
  if (pathname === "/tu-hoc/luyen-doc/do-kho") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/do-kho/")) return true;
  return false;
}

/** Bài đọc, flashcards, làm bài — cần đăng nhập. */
export function isProtectedReadingContentPath(pathname: string): boolean {
  if (!pathname.startsWith("/tu-hoc/luyen-doc/bai/")) return false;
  return true;
}

/** Route học tập — cần đăng nhập (middleware redirect). */
export function isProtectedAppPath(pathname: string): boolean {
  if (pathname.startsWith("/deck/")) return true;
  if (pathname === "/review") return true;
  if (pathname.startsWith("/tu-hoc/tu-vung")) return true;
  if (isProtectedReadingContentPath(pathname)) return true;
  return false;
}

const PUBLIC_READING_PILOTS = new Set<ReadingPilotId>([
  "cam20-test1",
  "cam20-test2",
  "cam20-test3",
  "cam20-test4",
]);

export function isPublicCambridgeReadingPilot(pilotId: string): boolean {
  return PUBLIC_READING_PILOTS.has(pilotId as ReadingPilotId);
}

/** GET đề / raw passage Cambridge demo — không cần session. */
export function isPublicReadingExamApi(pathname: string, searchParams: URLSearchParams): boolean {
  if (pathname === "/api/reading/exam" && searchParams.get("public") === "1") {
    const id = searchParams.get("id") ?? "";
    return PUBLIC_READING_PILOTS.has(id as ReadingPilotId);
  }
  if (pathname === "/api/reading/raw" && searchParams.get("public") === "1") {
    const id = searchParams.get("id") ?? "";
    return PUBLIC_READING_PILOTS.has(id as ReadingPilotId);
  }
  return false;
}

/** Exam boot JSON — public chỉ cho Cambridge demo; Compass cần đăng nhập. */
export function isPublicReadingExamBootApi(pathname: string, searchParams: URLSearchParams): boolean {
  if (pathname !== "/api/reading/exam/boot") return false;
  const slug = searchParams.get("slug")?.trim() ?? "";
  if (!slug) return false;
  const article = resolveReadingArticleRoute(slug);
  if (!article) return false;
  return isPublicCambridgeReadingPilot(article.pilotId);
}

/** API chỉ dùng khi đã đăng nhập (middleware trả 401). */
export function isProtectedApiPath(pathname: string): boolean {
  if (pathname.startsWith("/api/reading/")) return true;
  if (pathname.startsWith("/api/listening/")) return true;
  if (pathname === "/api/transcribe") return true;
  return false;
}

/** Trang đăng nhập mặc định khi chưa có session. */
export const AUTH_ENTRY_PATH = "/tu-hoc/tu-vung";
