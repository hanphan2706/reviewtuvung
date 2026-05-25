/** Hub Luyện đọc / Luyện nghe — xem được khi chưa đăng nhập. */
export function isPublicStudyHubPath(pathname: string): boolean {
  if (pathname === "/tu-hoc/luyen-doc" || pathname.startsWith("/tu-hoc/luyen-doc/")) return true;
  if (pathname === "/tu-hoc/luyen-nghe" || pathname.startsWith("/tu-hoc/luyen-nghe/")) return true;
  return false;
}

/** Route học tập — cần đăng nhập (middleware redirect). */
export function isProtectedAppPath(pathname: string): boolean {
  if (pathname.startsWith("/deck/")) return true;
  if (pathname === "/review") return true;
  if (pathname.startsWith("/tu-hoc/tu-vung")) return true;
  return false;
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
