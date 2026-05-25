import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING } from "@/lib/landing-content";
import { readingLibraryBySource } from "@/lib/reading/library-nav";
import { renderReadingLibraryPage } from "@/lib/reading/library-page";

export const dynamic = "force-dynamic";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = readingLibraryBySource(slug);
  if (!page) return { title: `Luyện đọc | ${LANDING.brand}` };
  return {
    title: `${page.title} | ${LANDING.brand}`,
    description: page.description,
  };
}

export default async function ReadingLibraryBySourcePage({ params }: PageProps) {
  const { slug } = await params;
  const page = readingLibraryBySource(slug);
  if (!page) notFound();
  return renderReadingLibraryPage(page);
}
