import {
  isLocalDevHost,
  resolveRequestHostname,
} from "@/lib/auth/dev-auth-bypass";

/**
 * Featured sample + Sample Writing Library:
 * - Local / LAN / ngrok: mở full để dev test
 * - Production / preview deploy: khoá — chỉ dành cho học viên (chưa có entitlement check)
 */
export function isWritingSampleLibraryUnlockedForHost(hostname: string): boolean {
  return isLocalDevHost(hostname.trim().toLowerCase());
}

export function isWritingSampleLibraryUnlockedClient(): boolean {
  if (typeof window === "undefined") {
    // Avoid SSR flash-lock on localhost; client re-checks after mount where needed.
    return true;
  }
  return isWritingSampleLibraryUnlockedForHost(window.location.hostname);
}

export function isWritingSampleLibraryUnlockedForRequest(req: Request): boolean {
  const url = new URL(req.url);
  const hostname = resolveRequestHostname(url.hostname, req.headers.get("host"));
  return isWritingSampleLibraryUnlockedForHost(hostname);
}

export const WRITING_STUDENT_ONLY_TITLE = "Tính năng dành cho học viên";

export const WRITING_STUDENT_ONLY_DESCRIPTION =
  "Thư viện bài mẫu writing hiện chỉ dành cho học viên của anthichtuhoc. Bạn vẫn có thể luyện Task 1, Task 2 và các kỹ năng câu trên hub Luyện viết.";
