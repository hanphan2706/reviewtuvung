import { redirect } from "next/navigation";
import { isAdminUser } from "@/lib/classroom/admin-auth";
import { AUTH_ENTRY_PATH } from "@/lib/auth/protected-routes";
import { getCurrentUser } from "@/lib/supabase/server";

export async function requireAdminPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect(`${AUTH_ENTRY_PATH}?next=/admin`);
  }
  if (!isAdminUser(user)) {
    redirect("/");
  }
  return user;
}
