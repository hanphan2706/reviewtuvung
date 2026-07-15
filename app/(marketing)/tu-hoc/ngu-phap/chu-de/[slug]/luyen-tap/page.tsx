import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GrammarTopicPracticeView } from "@/components/grammar/grammar-topic-practice-view";
import { getGrammarTopicExercises, listGrammarPracticeSlugs } from "@/lib/grammar/grammar-exercise-registry";
import { getGrammarTopicDetail } from "@/lib/grammar/grammar-topic-registry";
import { LANDING } from "@/lib/landing-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listGrammarPracticeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGrammarTopicDetail(slug);
  if (!topic) {
    return { title: `Luyện tập | Ngữ pháp | ${LANDING.brand}` };
  }

  return {
    title: `Bài tập · ${topic.title} | Ngữ pháp | ${LANDING.brand}`,
    description: `Luyện tập ${topic.title} theo Unit 7 — English Grammar in Use.`,
  };
}

export default async function GrammarTopicPracticePage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getGrammarTopicDetail(slug);
  const exercises = getGrammarTopicExercises(slug);
  if (!topic || !exercises) notFound();

  return <GrammarTopicPracticeView topic={topic} exercises={exercises} />;
}
