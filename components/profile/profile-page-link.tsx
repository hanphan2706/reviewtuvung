"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { profilePageHref, saveProfileReturnPath } from "@/lib/profile/profile-return-path";

export function ProfilePageLink({
  returnTo,
  onClick,
  className,
  children,
  showChevron = true,
}: {
  returnTo: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  showChevron?: boolean;
}) {
  return (
    <Link
      href={profilePageHref()}
      className={[className, showChevron ? "justify-between" : ""].filter(Boolean).join(" ")}
      onClick={() => {
        saveProfileReturnPath(returnTo);
        onClick?.();
      }}
    >
      {children}
      {showChevron ? (
        <ChevronRight className="ml-auto size-4 shrink-0 text-[#71717A]" aria-hidden />
      ) : null}
    </Link>
  );
}
