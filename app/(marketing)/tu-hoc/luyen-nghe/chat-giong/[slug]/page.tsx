import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { LISTENING_ACCENT_HUB_HREF } from "@/lib/listening/accent-nav";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return { title: `Luyện nghe | ${LANDING.brand}` };
}

/** Legacy region URLs → compare hub (same page for all accents). */
export default async function ListeningAccentRegionRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  const legacyMap: Record<string, string> = {
    british: "set-1",
    american: "set-1",
    australian: "set-1",
  };
  const setId = legacyMap[slug];
  redirect(setId ? `${LISTENING_ACCENT_HUB_HREF}?bo=${setId}` : LISTENING_ACCENT_HUB_HREF);
}
