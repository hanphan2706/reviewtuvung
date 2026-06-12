import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { listeningLibraryByDifficulty } from "@/lib/listening/library-nav";
import { renderListeningLibraryPage } from "@/lib/listening/library-page";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = listeningLibraryByDifficulty(slug);
  if (!page) {
    return { title: `Luyện nghe | ${LANDING.brand}` };
  }
  return {
    title: `${page.title} | Luyện nghe | ${LANDING.brand}`,
    description: page.description,
  };
}

export default async function ListeningLibraryByDifficultyPage({ params }: PageProps) {
  const { slug } = await params;
  const page = listeningLibraryByDifficulty(slug);
  if (!page) notFound();
  return renderListeningLibraryPage(page);
}
