import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";

export const dynamic = "force-dynamic";

/**
 * Route group: thư viện, ôn tập, bộ từ — cùng shell nền + cột dọc.
 * URL: /tu-hoc/tu-vung, /review, /deck/...
 */
export default function AppGroupLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
