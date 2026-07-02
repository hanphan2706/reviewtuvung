"use client";

/**
 * Shell cũ: bottom nav 3 tab (Phương pháp / Từ vựng / Tiến độ).
 * Từ 2026-03 dùng `VocabularyHubShell` trong `tu-vung/layout.tsx` thay thế.
 */
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { OnTapBottomNav } from "@/components/on-tap-bottom-nav";

/** Khớp chiều cao thanh tab (khung bo góc + safe area). */
const bottomPad = "pb-[max(4.25rem,env(safe-area-inset-bottom,0px)+3.85rem)]";

export function OnTapShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex h-dvh max-h-dvh w-full flex-col overflow-hidden">
      <div
        className={`flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain ${bottomPad}`}
      >
        <div key={pathname} className="animate-on-tap-page-in flex min-h-0 w-full flex-col motion-reduce:animate-none">
          {children}
        </div>
      </div>
      <OnTapBottomNav />
    </div>
  );
}
