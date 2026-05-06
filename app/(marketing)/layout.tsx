import type { ReactNode } from "react";

/**
 * Route group: landing + marketing (không dùng AppShell; layout full-width như thiết kế hiện tại).
 * URL: không thêm prefix — vẫn `/`.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
