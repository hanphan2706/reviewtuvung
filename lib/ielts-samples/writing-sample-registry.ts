import "server-only";

import type {
  WritingPracticeCatalogEntry,
  WritingPracticePrompt,
  WritingSample,
  WritingSampleCatalogEntry,
  WritingTaskKind,
} from "@/lib/ielts-samples/writing-sample-types";
import {
  excerptWritingAnswer,
  excerptWritingPrompt,
} from "@/lib/ielts-samples/writing-sample-types";
import { WRITING_SAMPLES } from "@/lib/ielts-samples/writing-samples.generated";
import { WRITING_FEATURED_SAMPLE_DEMO } from "@/lib/writing/writing-featured-sample.server";

function toCatalogEntry(sample: WritingSample): WritingSampleCatalogEntry {
  return {
    id: sample.id,
    title: sample.title,
    task: sample.task,
    type: sample.type,
    topic: sample.topic,
    band: sample.band,
    excerpt: excerptWritingAnswer(sample.modelAnswer),
  };
}

function toPracticeCatalogEntry(sample: WritingSample): WritingPracticeCatalogEntry {
  return {
    id: sample.id,
    title: sample.title,
    task: sample.task,
    type: sample.type,
    topic: sample.topic,
    promptExcerpt: excerptWritingPrompt(sample.promptHtml),
  };
}

function toPracticePrompt(sample: WritingSample): WritingPracticePrompt {
  return {
    id: sample.id,
    title: sample.title,
    task: sample.task,
    type: sample.type,
    topic: sample.topic,
    promptHtml: sample.promptHtml,
    ...(sample.visualSrc ? { visualSrc: sample.visualSrc } : {}),
  };
}

export function listWritingSamples(): readonly WritingSample[] {
  return WRITING_SAMPLES;
}

export function listWritingCatalog(): readonly WritingSampleCatalogEntry[] {
  return WRITING_SAMPLES.map(toCatalogEntry);
}

export function listWritingPracticeCatalog(
  task: WritingTaskKind,
): readonly WritingPracticeCatalogEntry[] {
  return WRITING_SAMPLES.filter((sample) => sample.task === task).map(toPracticeCatalogEntry);
}

export function getWritingCatalogEntry(id: string): WritingSampleCatalogEntry | null {
  const sample = getWritingSample(id);
  return sample ? toCatalogEntry(sample) : null;
}

export function getWritingPracticeCatalogEntry(
  id: string,
  task?: WritingTaskKind,
): WritingPracticeCatalogEntry | null {
  const sample = getWritingSample(id);
  if (!sample) return null;
  if (task && sample.task !== task) return null;
  return toPracticeCatalogEntry(sample);
}

export function getWritingPracticePrompt(
  id: string,
  task?: WritingTaskKind,
): WritingPracticePrompt | null {
  const sample = getWritingSample(id);
  if (!sample) return null;
  if (task && sample.task !== task) return null;
  return toPracticePrompt(sample);
}

export function getWritingSample(id: string): WritingSample | null {
  if (id === WRITING_FEATURED_SAMPLE_DEMO.id) return WRITING_FEATURED_SAMPLE_DEMO;
  return WRITING_SAMPLES.find((sample) => sample.id === id) ?? null;
}
