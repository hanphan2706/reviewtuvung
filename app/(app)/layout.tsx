import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { OAuthPopupListener } from "@/components/oauth-popup-listener";

export const dynamic = "force-dynamic";

/**
 * Route group: thư viện, ôn tập, bộ từ — cùng shell nền + cột dọc.
 * URL: /tu-hoc/tu-vung, /review, /deck/...
 */
export default function AppGroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <OAuthPopupListener />
      <AppShell>{children}</AppShell>
    </>
  );
}
