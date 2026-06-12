import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { listeningAccentExplorePage } from "@/lib/listening/accent-nav";
import { isListeningAccentExploreLive } from "@/lib/listening/accent-explore-release";
import { renderListeningAccentExplorePage } from "@/lib/listening/accent-page";

export const dynamic = "force-dynamic";

const page = listeningAccentExplorePage();

export const metadata: Metadata = {
  title: isListeningAccentExploreLive()
    ? `${page.title} | Luyện nghe | ${LANDING.brand}`
    : `Đang cập nhật | Luyện nghe | ${LANDING.brand}`,
  description: isListeningAccentExploreLive()
    ? page.description
    : "Khám phá chất giọng đang được cập nhật.",
};

export default async function ListeningAccentExplorePage() {
  return renderListeningAccentExplorePage(page);
}
