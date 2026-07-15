import type { Metadata } from "next";
import { GrammarStudyView } from "@/components/grammar/grammar-study-view";
import { LANDING } from "@/lib/landing-content";
import { GRAMMAR_HUB_INTRO } from "@/lib/grammar/grammar-hub-data";

export const metadata: Metadata = {
  title: `Ngữ pháp | ${LANDING.brand}`,
  description: GRAMMAR_HUB_INTRO.subtitle,
};

export default function NguPhapPage() {
  return <GrammarStudyView />;
}
