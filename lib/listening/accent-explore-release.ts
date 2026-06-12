import { isVercelProduction } from "@/lib/auth/dev-auth-bypass";

/** Trang Khám phá chất giọng — bật đầy đủ ngoài Vercel production. */
export function isListeningAccentExploreLive(): boolean {
  if (process.env.LISTENING_ACCENT_EXPLORE_ENABLED === "1") return true;
  if (process.env.LISTENING_ACCENT_EXPLORE_ENABLED === "0") return false;
  return !isVercelProduction();
}
