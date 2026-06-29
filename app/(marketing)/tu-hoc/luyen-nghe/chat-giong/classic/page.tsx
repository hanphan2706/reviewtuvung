import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { listeningAccentExplorePage } from "@/lib/listening/accent-nav";
import { isListeningAccentExploreLive } from "@/lib/listening/accent-explore-release";
import { renderListeningAccentExplorePage } from "@/lib/listening/accent-page";

export const dynamic = "force-dynamic";

const page = listeningAccentExplorePage();

export const metadata: Metadata = {
  title: isListeningAccentExploreLive()
    ? `Classic · ${page.title} | Luyện nghe | ${LANDING.brand}`
    : `Đang cập nhật | Luyện nghe | ${LANDING.brand}`,
  description: isListeningAccentExploreLive()
    ? "Giao diện IPA, so sánh 4 bộ chất giọng và ghi âm."
    : "Khám phá chất giọng đang được cập nhật.",
};

export default async function ListeningAccentClassicPage() {
  return renderListeningAccentExplorePage(page);
}
