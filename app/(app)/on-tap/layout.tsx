import type { ReactNode } from "react";
import { OnTapShell } from "@/components/on-tap-shell";

export default function OnTapLayout({ children }: { children: ReactNode }) {
  return <OnTapShell>{children}</OnTapShell>;
}
