/** Client: kiểm tra session thật (tránh stale prop sau OAuth). */
export async function canAccessStudyFeature(): Promise<boolean> {
  try {
    const res = await fetch("/api/auth/me", { credentials: "include", cache: "no-store" });
    if (!res.ok) return false;
    const data = (await res.json()) as { loggedIn?: boolean };
    return Boolean(data.loggedIn);
  } catch {
    return false;
  }
}
