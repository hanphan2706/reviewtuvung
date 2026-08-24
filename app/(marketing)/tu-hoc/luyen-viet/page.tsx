import type { Metadata } from "next";
import { WritingHubView } from "@/components/writing/writing-hub-view";
import { listWritingCatalog } from "@/lib/ielts-samples/writing-sample-registry";
import { LANDING } from "@/lib/landing-content";
import { writingFeaturedCardFromCatalog, WRITING_HUB_INTRO } from "@/lib/writing/writing-hub-data";

export const metadata: Metadata = {
  title: `Luyện viết | ${LANDING.brand}`,
  description: WRITING_HUB_INTRO.subtitle,
};

export default function LuyenVietPage() {
  const featuredCandidates = listWritingCatalog().map(writingFeaturedCardFromCatalog);
  return <WritingHubView featuredCandidates={featuredCandidates} />;
}
