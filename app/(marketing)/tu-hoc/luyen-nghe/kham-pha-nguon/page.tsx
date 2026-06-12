import type { Metadata } from "next";
import { LANDING } from "@/lib/landing-content";
import { renderListeningSourcesExplorePage } from "@/lib/listening/sources-explore-page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Khám phá các nguồn nghe đa dạng | Luyện nghe | ${LANDING.brand}`,
  description:
    "Lựa chọn chủ đề, giọng nói, hoặc nguồn đọc phù hợp với sở thích để bắt đầu hành trình luyện tập.",
};

export default function ListeningSourcesExplorePage() {
  return renderListeningSourcesExplorePage();
}
