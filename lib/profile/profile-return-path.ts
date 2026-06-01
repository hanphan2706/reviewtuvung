import { safeInternalPath } from "@/lib/safe-internal-path";

const ALLOWED_RETURN_PREFIXES = [
  "/tu-hoc/luyen-doc",
  "/tu-hoc/tu-vung",
  "/tu-hoc/luyen-nghe",
  "/review",
  "/deck",
] as const;

export const PROFILE_DEFAULT_RETURN = "/tu-hoc/luyen-doc";

const PROFILE_RETURN_STORAGE_KEY = "anthichtuhoc:profile-return-to";

/** Trang được phép quay lại sau khi xem hồ sơ (từ menu Tự học / Luyện đọc). */
export function profileReturnPath(raw: string | null | undefined): string {
  const path = safeInternalPath(raw, PROFILE_DEFAULT_RETURN);
  const ok = ALLOWED_RETURN_PREFIXES.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
  return ok ? path : PROFILE_DEFAULT_RETURN;
}

export function profilePageHref(): string {
  return "/tu-hoc/ho-so";
}

export function saveProfileReturnPath(raw: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(PROFILE_RETURN_STORAGE_KEY, profileReturnPath(raw));
  } catch {
    /* ignore quota / private mode */
  }
}

export function readProfileReturnPath(): string {
  if (typeof window === "undefined") return PROFILE_DEFAULT_RETURN;
  try {
    const raw = sessionStorage.getItem(PROFILE_RETURN_STORAGE_KEY);
    return profileReturnPath(raw);
  } catch {
    return PROFILE_DEFAULT_RETURN;
  }
}

/** URL cũ ?returnTo=… → lưu session rồi làm sạch thanh địa chỉ. */
export function migrateLegacyProfileReturnQuery(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const legacy = params.get("returnTo");
  if (!legacy) return;
  saveProfileReturnPath(legacy);
  window.history.replaceState(null, "", profilePageHref());
}
