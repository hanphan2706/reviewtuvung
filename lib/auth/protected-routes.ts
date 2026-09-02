import { resolveReadingArticleRoute } from "@/lib/reading/article-routes";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";

/** Landing + trang khoá học — không cần session Supabase trên middleware. */
export function isPublicMarketingPath(pathname: string): boolean {
  if (pathname === "/") return true;
  if (pathname === "/di-hoc" || pathname.startsWith("/di-hoc/")) return true;
  if (pathname === "/gioi-thieu" || pathname.startsWith("/gioi-thieu/")) return true;
  if (pathname === "/privacy" || pathname.startsWith("/privacy/")) return true;
  if (pathname === "/cookies" || pathname.startsWith("/cookies/")) return true;
  if (pathname === "/credits" || pathname.startsWith("/credits/")) return true;
  if (pathname === "/newsletter" || pathname.startsWith("/newsletter/")) return true;
  return false;
}

/** Hub Luyện nghe — xem được khi chưa đăng nhập (trừ Khám phá chất giọng). Luyện đọc: chỉ hub/thư viện. */
export function isPublicStudyHubPath(pathname: string): boolean {
  if (pathname === "/tu-hoc/luyen-nghe/chat-giong" || pathname.startsWith("/tu-hoc/luyen-nghe/chat-giong/")) {
    return false;
  }
  if (pathname === "/tu-hoc/luyen-nghe" || pathname.startsWith("/tu-hoc/luyen-nghe/")) return true;
  if (pathname === "/tu-hoc/luyen-viet" || pathname.startsWith("/tu-hoc/luyen-viet/")) return true;
  if (pathname === "/tu-hoc/luyen-doc" || pathname.startsWith("/tu-hoc/luyen-doc/thu-vien")) return true;
  if (pathname === "/tu-hoc/luyen-doc/chu-de") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/chu-de/")) return true;
  if (pathname === "/tu-hoc/luyen-doc/nguon") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/nguon/")) return true;
  if (pathname === "/tu-hoc/luyen-doc/do-kho") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/do-kho/")) return true;
  if (pathname === "/tu-hoc/luyen-doc/luyen-de-ielts") return true;
  if (pathname.startsWith("/tu-hoc/luyen-doc/luyen-de-ielts/")) return true;
  if (isPublicVocabularyPath(pathname)) return true;
  return false;
}

/** Từ vựng — chỉ hub + phương pháp xem được khi chưa đăng nhập. */
export function isPublicVocabularyPath(pathname: string): boolean {
  if (pathname === "/tu-hoc/tu-vung") return true;
  if (pathname === "/tu-hoc/tu-vung/phuong-phap") return true;
  return false;
}

/** Bài đọc, flashcards, làm bài — cần đăng nhập. */
export function isProtectedReadingContentPath(pathname: string): boolean {
  if (!pathname.startsWith("/tu-hoc/luyen-doc/bai/")) return false;
  return true;
}

/** Admin LMS — chỉ truy cập trực tiếp bằng URL, cần đăng nhập. */
export function isAdminAppPath(pathname: string): boolean {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

/** Bài tập lớp học — học viên đã duyệt, cần đăng nhập. */
export function isClassroomHomeworkPath(pathname: string): boolean {
  return pathname === "/tu-hoc/ho-so/bai-tap" || pathname.startsWith("/tu-hoc/ho-so/bai-tap/");
}

/** Route học tập — cần đăng nhập (middleware redirect). */
export function isProtectedAppPath(pathname: string): boolean {
  if (isAdminAppPath(pathname)) return true;
  if (isClassroomHomeworkPath(pathname)) return true;
  if (pathname.startsWith("/deck/")) return true;
  if (pathname === "/review") return true;
  if (pathname.startsWith("/tu-hoc/tu-vung")) return true;
  if (isProtectedReadingContentPath(pathname)) return true;
  if (pathname === "/tu-hoc/luyen-nghe/chat-giong" || pathname.startsWith("/tu-hoc/luyen-nghe/chat-giong/")) {
    return true;
  }
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
    const passage = Number.parseInt(searchParams.get("passage") ?? "", 10);
    if (!PUBLIC_READING_PILOTS.has(id as ReadingPilotId)) return false;
    return Number.isFinite(passage) && passage >= 1;
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

const PUBLIC_PINBALL_ENTRY_AUDIO_FILES = new Set(
  [1, 2, 3, 4].map((part) => `pinball-entry-part${part}.mp3`),
);

/** Audio cho bài test đầu vào Pinball IELTS — public, không cần đăng nhập. */
export function isPublicListeningAudioApi(pathname: string, searchParams: URLSearchParams): boolean {
  if (pathname !== "/api/listening/audio") return false;
  const file = searchParams.get("file") ?? "";
  return PUBLIC_PINBALL_ENTRY_AUDIO_FILES.has(file);
}

/** API chỉ dùng khi đã đăng nhập (middleware trả 401). */
export function isProtectedApiPath(pathname: string): boolean {
  if (pathname.startsWith("/api/admin/")) return true;
  if (pathname.startsWith("/api/classroom/")) return true;
  if (pathname.startsWith("/api/reading/")) return true;
  if (pathname.startsWith("/api/listening/")) return true;
  if (pathname.startsWith("/api/writing/")) return true;
  if (pathname.startsWith("/api/media/audio")) return true;
  if (pathname === "/api/transcribe") return true;
  return false;
}

/** Trang đăng nhập mặc định khi chưa có session. */
export const AUTH_ENTRY_PATH = "/tu-hoc/tu-vung";
