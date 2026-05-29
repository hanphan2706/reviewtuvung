import { normalizeAppOrigin } from "@/lib/app-origin";
import { OAUTH_NEXT_COOKIE } from "@/lib/oauth-return-cookies";
import { safeInternalPath } from "@/lib/safe-internal-path";

export const OAUTH_ORIGIN_COOKIE = "anthichtuhoc_oauth_origin";

/** sessionStorage dự phòng khi OAuth về `/` rồi middleware chuyển sang callback. */
export const OAUTH_NEXT_STORAGE_KEY = "anthichtuhoc_oauth_next";

function parseStoredPath(raw: string | null | undefined): string | null {
  if (raw == null || raw === "") return null;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    /* giữ nguyên */
  }
  const path = safeInternalPath(decoded, "");
  return path || null;
}

/** Ghi path + origin sau đăng nhập (cookie + sessionStorage, cùng tab). */
export function stashOAuthReturnPath(nextInternalPath: string, origin?: string): void {
  if (typeof document === "undefined") return;
  const path = safeInternalPath(nextInternalPath);
  const enc = encodeURIComponent(path);
  const maxAge = 600;
  const secure = typeof window !== "undefined" && window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${OAUTH_NEXT_COOKIE}=${enc}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
  const appOrigin = normalizeAppOrigin(origin ?? window.location.origin);
  document.cookie = `${OAUTH_ORIGIN_COOKIE}=${encodeURIComponent(appOrigin)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
  try {
    sessionStorage.setItem(OAUTH_NEXT_STORAGE_KEY, path);
    sessionStorage.setItem(OAUTH_ORIGIN_COOKIE, appOrigin);
  } catch {
    /* private mode / quota */
  }
}

export function readOAuthOriginFromCookieValue(cookieValue: string | undefined): string | null {
  if (!cookieValue) return null;
  try {
    return normalizeAppOrigin(decodeURIComponent(cookieValue));
  } catch {
    return normalizeAppOrigin(cookieValue);
  }
}

export function readOAuthNextFromCookieValue(cookieValue: string | undefined): string | null {
  return parseStoredPath(cookieValue);
}

export function readOAuthReturnPathClient(): string | null {
  if (typeof document === "undefined") return null;

  const fromCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${OAUTH_NEXT_COOKIE}=`))
    ?.split("=")
    .slice(1)
    .join("=");
  const cookiePath = parseStoredPath(fromCookie ?? null);
  if (cookiePath) return cookiePath;

  try {
    const fromStorage = sessionStorage.getItem(OAUTH_NEXT_STORAGE_KEY);
    const storagePath = parseStoredPath(fromStorage);
    if (storagePath) return storagePath;
  } catch {
    /* ignore */
  }

  return null;
}

export function clearOAuthReturnPathClient(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${OAUTH_NEXT_COOKIE}=; Path=/; Max-Age=0`;
  document.cookie = `${OAUTH_ORIGIN_COOKIE}=; Path=/; Max-Age=0`;
  try {
    sessionStorage.removeItem(OAUTH_NEXT_STORAGE_KEY);
    sessionStorage.removeItem(OAUTH_ORIGIN_COOKIE);
  } catch {
    /* ignore */
  }
}

/**
 * URL gửi Supabase — **không có query** (allow list thường chỉ khớp `/auth/callback`).
 * Trang đích sau login lưu trong cookie `anthichtuhoc_oauth_next`.
 */
export function oauthCallbackRedirectUrl(origin: string): string {
  return `${normalizeAppOrigin(origin)}/auth/callback`;
}

/** @deprecated dùng oauthCallbackRedirectUrl — giữ để tránh import lỗi nếu còn reference */
export function buildAuthCallbackUrl(origin: string, _nextInternalPath: string): string {
  return oauthCallbackRedirectUrl(origin);
}

export function resolveOAuthReturnPath(nextFromQuery: string | null): string {
  return safeInternalPath(readOAuthReturnPathClient() ?? nextFromQuery ?? undefined);
}
