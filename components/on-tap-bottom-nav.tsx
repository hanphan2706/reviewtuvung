"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Layers, LineChart } from "lucide-react";

const tabs = [
  { href: "/on-tap/phuong-phap", label: "Phương pháp", ariaLabel: "Phương pháp học" },
  { href: "/on-tap", label: "Từ vựng", ariaLabel: "Tạo deck và danh sách từ vựng" },
  { href: "/on-tap/tien-do", label: "Tiến độ", ariaLabel: "Theo dõi tiến độ" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/on-tap") return pathname === "/on-tap" || pathname === "/on-tap/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function OnTapBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 px-3 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1"
      aria-label="Điều hướng từ vựng"
    >
      <div className="pointer-events-auto mx-auto w-full max-w-md rounded-2xl border border-zinc-200/90 bg-white/95 p-1 shadow-[0_4px_24px_rgba(0,0,0,0.08)] ring-1 ring-zinc-950/[0.04] backdrop-blur-md supports-[backdrop-filter]:bg-white/92">
        <div className="grid min-w-0 grid-cols-3 gap-0.5">
          {tabs.map(({ href, label, ariaLabel }) => {
            const active = isActive(pathname, href);
            const Icon = href === "/on-tap/phuong-phap" ? BookOpen : href === "/on-tap" ? Layers : LineChart;
            return (
              <Link
                key={href}
                href={href}
                aria-label={ariaLabel}
                className={`flex min-w-0 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-2 text-[11px] font-semibold leading-tight tracking-tight transition-[color,background-color,box-shadow,transform] duration-200 ease-out ${
                  active ? "bg-[#fbf8fd] text-[#4b2876] ring-1 ring-[#4b2876]/20" : "text-zinc-500 active:scale-[0.97]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon
                  className={`h-3.5 w-3.5 shrink-0 ${active ? "text-[#4b2876]" : ""}`}
                  strokeWidth={active ? 2.1 : 1.75}
                />
                <span className="max-w-full truncate px-0.5">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
