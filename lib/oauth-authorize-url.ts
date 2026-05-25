import { normalizeAppOrigin } from "@/lib/app-origin";

/**
 * Supabase đôi khi ghi đè `redirect_to` theo Site URL (localhost).
 * Ép lại URL callback đúng origin (ngrok / Vercel) — không kèm query.
 */
export function patchSupabaseAuthorizeRedirectTo(
  oauthAuthorizeUrl: string,
  intendedRedirectTo: string,
  intendedOrigin: string,
): string {
  try {
    const url = new URL(oauthAuthorizeUrl);
    const target = normalizeAppOrigin(intendedRedirectTo);
    url.searchParams.set("redirect_to", target);

    const raw = url.searchParams.get("redirect_to");
    if (raw) {
      try {
        const decoded = new URL(decodeURIComponent(raw));
        const intended = new URL(target);
        if (
          decoded.hostname === "localhost" &&
          intended.hostname !== "localhost" &&
          intendedOrigin.includes("ngrok")
        ) {
          url.searchParams.set("redirect_to", target);
        }
      } catch {
        /* ignore malformed nested url */
      }
    }

    return url.toString();
  } catch {
    return oauthAuthorizeUrl;
  }
}
