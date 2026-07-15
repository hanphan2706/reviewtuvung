import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrammarTopicDetailView } from "@/components/grammar/grammar-topic-detail-view";
import { getGrammarTopicExercises } from "@/lib/grammar/grammar-exercise-registry";
import { LANDING } from "@/lib/landing-content";
import { getGrammarTopicDetail, listGrammarTopicSlugs } from "@/lib/grammar/grammar-topic-registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listGrammarTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGrammarTopicDetail(slug);
  if (!topic) {
    return { title: `Ngữ pháp | ${LANDING.brand}` };
  }

  return {
    title: `${topic.title} | Ngữ pháp | ${LANDING.brand}`,
    description: topic.intro,
  };
}

export default async function GrammarTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getGrammarTopicDetail(slug);
  if (!topic) notFound();

  const practiceAvailable = Boolean(getGrammarTopicExercises(slug));

  return <GrammarTopicDetailView topic={topic} practiceAvailable={practiceAvailable} />;
}
