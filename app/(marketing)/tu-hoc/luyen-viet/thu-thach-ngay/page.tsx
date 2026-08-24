import type { Metadata } from "next";
import { WritingComingSoonView } from "@/components/writing/writing-coming-soon-view";
import { LANDING } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: `Thử thách ngày | ${LANDING.brand}`,
};

export default function WritingDailyChallengePage() {
  return <WritingComingSoonView title="Daily Challenge" />;
}
