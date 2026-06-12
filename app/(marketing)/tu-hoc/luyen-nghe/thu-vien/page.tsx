import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { listeningLibraryAllPage } from "@/lib/listening/library-nav";
import { renderListeningLibraryPage } from "@/lib/listening/library-page";

export const dynamic = "force-dynamic";

const page = listeningLibraryAllPage();

export const metadata: Metadata = {
  title: `${page.title} | Luyện nghe | ${LANDING.brand}`,
  description: page.description || "Thư viện bài nghe IELTS và luyện nghe chủ động.",
};

export default function ListeningLibraryAllPage() {
  return renderListeningLibraryPage(page);
}
