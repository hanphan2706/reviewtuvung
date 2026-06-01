"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { profilePageHref, saveProfileReturnPath } from "@/lib/profile/profile-return-path";

export function ProfilePageLink({
  returnTo,
  onClick,
  className,
  children,
}: {
  returnTo: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={profilePageHref()}
      className={className}
      onClick={() => {
        saveProfileReturnPath(returnTo);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
