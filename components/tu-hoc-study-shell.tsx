import type { ReactNode } from "react";
import Link from "next/link";
import { SignedInTopBar } from "@/components/signed-in-top-bar";

/** Khung trang tự học (nghe / đọc) trong nhóm app đã đăng nhập. */
export function TuHocStudyShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-dvh w-full flex-col px-5 pb-10 pt-10">
      <div className="mx-auto w-full max-w-3xl">
        <SignedInTopBar
          left={
            <Link
              href="/tu-hoc/tu-vung"
              className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-medium text-ink-muted"
            >
              ← Từ vựng
            </Link>
          }
        />
        <h1 className="mb-6 text-balance text-2xl font-semibold tracking-tight text-ink">{title}</h1>
        {children}
      </div>
    </div>
  );
}
