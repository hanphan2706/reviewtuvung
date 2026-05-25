import type { ReactNode } from "react";
import { AuthGate } from "@/components/auth-gate";
import { SrsSyncProvider } from "@/components/srs-sync-provider";
import { createServerSupabaseClient, getCurrentUser } from "@/lib/supabase/server";

/** Consistent full-height background + column flex for all “app / học tập” routes. */
export async function AppShell({ children }: { children: ReactNode }) {
  const supabase = await createServerSupabaseClient();
  const user = await getCurrentUser();
  const supabaseConfigured = Boolean(supabase);

  return (
    <div className="flex min-h-dvh w-full flex-col bg-[#f5f5f7]">
      {user ? <SrsSyncProvider userId={user.id}>{children}</SrsSyncProvider> : (
        <AuthGate supabaseConfigured={supabaseConfigured} />
      )}
    </div>
  );
}
