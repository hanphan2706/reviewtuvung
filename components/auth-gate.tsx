"use client";

import Link from "next/link";
import { VocabularyMethodIntro } from "@/components/vocabulary-method-intro";

export function AuthGate({ supabaseConfigured }: { supabaseConfigured: boolean }) {
  return (
    <main className="flex min-h-dvh w-full flex-col items-center px-5 pb-10 pt-10">
      <div className="w-full max-w-md">
        <Link
          href="/#tu-hoc"
          className="mb-3 inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
        >
          ← Tự học
        </Link>

        <VocabularyMethodIntro includeAuthSection supabaseConfigured={supabaseConfigured} />
      </div>
    </main>
  );
}
