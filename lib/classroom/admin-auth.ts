import type { User } from "@supabase/supabase-js";

const DEFAULT_ADMIN_EMAIL = "giaan.phuong98@gmail.com";

export function parseAdminEmails(raw: string | undefined): string[] {
  const source = raw?.trim() || DEFAULT_ADMIN_EMAIL;
  return source
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const allowed = parseAdminEmails(process.env.CLASSROOM_ADMIN_EMAILS);
  return allowed.includes(email.trim().toLowerCase());
}

export function isAdminUser(user: User | null | undefined): boolean {
  return isAdminEmail(user?.email);
}

export function requireAdminUser(user: User | null | undefined): user is User {
  return Boolean(user && isAdminUser(user));
}
