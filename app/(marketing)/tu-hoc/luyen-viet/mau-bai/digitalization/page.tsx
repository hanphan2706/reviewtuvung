import type { Metadata } from "next";
import { WritingSampleDetailGate } from "@/components/writing/writing-sample-detail-gate";
import { LANDING } from "@/lib/landing-content";
import { WRITING_FEATURED_SAMPLE } from "@/lib/writing/writing-hub-data";

export const metadata: Metadata = {
  title: `${WRITING_FEATURED_SAMPLE.title} | ${LANDING.brand}`,
  robots: { index: false, follow: false },
};

export default function WritingFeaturedSamplePage() {
  return <WritingSampleDetailGate sampleId="digitalization" title={WRITING_FEATURED_SAMPLE.title} />;
}
