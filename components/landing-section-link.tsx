"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  requestLandingScrollSection,
  scrollToLandingSection,
  type LandingScrollSectionId,
} from "@/lib/landing-scroll";

type LandingSectionLinkProps = {
  sectionId: LandingScrollSectionId;
  className?: string;
  children: React.ReactNode;
  /** Ví dụ đóng menu curtain trước khi cuộn. */
  onNavigate?: () => void;
};

export function LandingSectionLink({ sectionId, className, children, onNavigate }: LandingSectionLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (pathname === "/") {
      e.preventDefault();
      scrollToLandingSection(sectionId);
      return;
    }
    requestLandingScrollSection(sectionId);
  };

  return (
    <Link href="/" scroll={false} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
