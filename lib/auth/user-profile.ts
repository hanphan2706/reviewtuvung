import type { User } from "@supabase/supabase-js";

export type StudyHubUserProfile = {
  displayName: string;
  avatarUrl: string | null;
};

/** Tên + ảnh Google từ Supabase Auth (Gmail OAuth). */
export function studyHubUserProfileFromAuthUser(user: User | null): StudyHubUserProfile | null {
  if (!user) return null;

  const meta = user.user_metadata as Record<string, unknown>;
  const avatarUrl =
    (typeof meta.avatar_url === "string" && meta.avatar_url) ||
    (typeof meta.picture === "string" && meta.picture) ||
    null;

  const fullName =
    (typeof meta.full_name === "string" && meta.full_name.trim()) ||
    (typeof meta.name === "string" && meta.name.trim()) ||
    "";

  const emailLocal = user.email?.split("@")[0]?.trim() ?? "";
  const displayName = fullName || emailLocal || "Tài khoản";

  return { displayName, avatarUrl };
}
