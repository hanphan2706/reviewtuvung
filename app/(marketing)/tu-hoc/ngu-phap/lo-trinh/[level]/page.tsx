import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrammarPathLevelView } from "@/components/grammar/grammar-path-level-view";
import {
  getGrammarPathLevelDefinition,
  GRAMMAR_PATH_LEVEL_IDS,
  isGrammarPathLevelId,
} from "@/lib/grammar/grammar-hub-data";
import { LANDING } from "@/lib/landing-content";

type PageProps = {
  params: Promise<{ level: string }>;
};

export function generateStaticParams() {
  return GRAMMAR_PATH_LEVEL_IDS.map((level) => ({ level }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { level: levelParam } = await params;
  if (!isGrammarPathLevelId(levelParam)) {
    return { title: `Lộ trình học | ${LANDING.brand}` };
  }
  const level = getGrammarPathLevelDefinition(levelParam);
  return {
    title: `${level.titleEn} (${level.titleVi}) | Ngữ pháp | ${LANDING.brand}`,
    description: level.description,
  };
}

export default async function GrammarPathLevelPage({ params }: PageProps) {
  const { level: levelParam } = await params;
  if (!isGrammarPathLevelId(levelParam)) notFound();

  return <GrammarPathLevelView levelId={levelParam} />;
}
