import type { ReactNode } from "react";
import { Suspense } from "react";
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
      {user ? (
        <SrsSyncProvider userId={user.id}>{children}</SrsSyncProvider>
      ) : (
        <Suspense
          fallback={
            <main className="flex min-h-dvh w-full items-center justify-center px-5">
              <p className="text-sm text-ink-muted">Đang tải…</p>
            </main>
          }
        >
          <AuthGate supabaseConfigured={supabaseConfigured} />
        </Suspense>
      )}
    </div>
  );
}
