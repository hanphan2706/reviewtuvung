"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";
import { useGrammarAuth } from "@/components/grammar/grammar-auth-context";
import { GrammarRequireAuth } from "@/components/grammar/grammar-require-auth";
import { studyHubSubpageContentClass } from "@/components/study-module/study-hub-shell";
import { grammarTopicPracticeHref } from "@/lib/grammar/grammar-exercise-registry";
import { grammarTopicHref } from "@/lib/grammar/grammar-topic-registry";
import type { GrammarRelatedStudy, GrammarTopicDetail } from "@/lib/grammar/grammar-topic-types";

const GRAMMAR_ACCENT = "#4b2876";
const bodyTextClass = "text-[15px] leading-relaxed text-[#47464b]";

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 className="shrink-0 text-[24px] font-semibold leading-tight text-[#000001]">{title}</h2>
      <div className="h-px flex-1 bg-[#E4E4E7]" aria-hidden />
    </div>
  );
}

function UsagePoint({ point }: { point: GrammarTopicDetail["usagePoints"][number] }) {
  return (
    <li className={`flex gap-3 ${bodyTextClass}`}>
      <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-[#000001]" aria-hidden />
      <span>
        {point.before}
        <strong className="font-semibold" style={{ color: GRAMMAR_ACCENT }}>
          {point.strong}
        </strong>
        {point.after}
      </span>
    </li>
  );
}

function topicEyebrow(topic: GrammarTopicDetail): string | null {
  if (topic.levelLabel && topic.kindLabel) {
    return `${topic.levelLabel} - ${topic.kindLabel}`;
  }
  return topic.sourceBook ?? null;
}

function quotedEnglish(sentence: string): string {
  const trimmed = sentence.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("“") && trimmed.endsWith("”"))
  ) {
    return trimmed;
  }
  return `"${trimmed}"`;
}

/** Split structure formulas on `|` so each pattern sits on its own line. */
function structureLines(value: string): string[] {
  return value
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);
}

function StructureColumn({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  const lines = structureLines(value);

  return (
    <div className={`flex flex-col justify-center px-4 py-5 md:px-5 md:py-6 ${className}`}>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#47464b]/55">{label}</p>
      <ul className="mt-3 space-y-1.5">
        {lines.map((line) => (
          <li key={line} className="text-[15px] font-semibold leading-snug text-[#000001]">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

const unitLinkClass =
  "font-bold underline decoration-[#4b2876] underline-offset-2 text-[#4b2876] hover:opacity-80";

/** Parse "72", "73–74", "73-74, 76", "73–75, 77–78", "53–54, 56 và 58". */
function parseUnitNumberList(listText: string): Array<{ start: number; end: number }> {
  const refs: Array<{ start: number; end: number }> = [];
  const tokenPattern = /(\d+)(?:\s*[–\-]\s*(\d+))?/g;
  let token: RegExpExecArray | null = tokenPattern.exec(listText);
  while (token !== null) {
    const start = Number(token[1]);
    const end = token[2] ? Number(token[2]) : start;
    if (Number.isFinite(start) && Number.isFinite(end) && start > 0) {
      refs.push({ start, end: end >= start ? end : start });
    }
    token = tokenPattern.exec(listText);
  }
  return refs;
}

/** Bold + underline “Unit 22” / “Units 20–22, 24” mentions that have related-unit targets. */
function linkifyUnitMentions(text: string, units: GrammarRelatedStudy["units"]): ReactNode {
  const byNumber = new Map(units.map((unit) => [unit.unitNumber, unit]));
  const parts: ReactNode[] = [];
  // Matches: Unit 72 | Units 73–74 | Units 73–74, 76 | Units 73–75, 77–78 | Units 53–54, 56 và 58
  const pattern =
    /\bUnits?\s+(\d+(?:\s*[–\-]\s*\d+)?(?:\s*(?:,|và)\s*(?:Units?\s+)?\d+(?:\s*[–\-]\s*\d+)?)*)/gi;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  match = pattern.exec(text);
  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const full = match[0];
    const listText = match[1] ?? "";
    const refs = parseUnitNumberList(listText);
    const isPlural = /^Units\b/i.test(full);
    const hasList = /(?:,|và)/i.test(full) || refs.some((ref) => ref.start !== ref.end) || refs.length > 1;

    if (refs.length === 0) {
      parts.push(full);
    } else if (!hasList && refs[0] && refs[0].start === refs[0].end) {
      const unit = byNumber.get(refs[0].start);
      parts.push(
        unit ? (
          <Link key={`u-${key++}`} href={grammarTopicHref(unit.slug)} className={unitLinkClass}>
            {full}
          </Link>
        ) : (
          full
        ),
      );
    } else {
      // Preserve original separators while linking numbers.
      const nodes: ReactNode[] = [isPlural ? "Units " : "Unit "];
      let linkedAny = false;
      const piecePattern =
        /(\d+)(?:\s*([–\-])\s*(\d+))?|(\s*,\s*(?:Units?\s+)?|\s+và\s+(?:Units?\s+)?)/gi;
      let piece: RegExpExecArray | null = piecePattern.exec(listText);
      let pieceKey = 0;
      while (piece !== null) {
        if (piece[4]) {
          nodes.push(piece[4].replace(/\bUnits?\s+/i, ""));
        } else {
          const start = Number(piece[1]);
          const end = piece[3] ? Number(piece[3]) : start;
          const dash = piece[2] === "-" ? "-" : "–";
          if (start === end) {
            const unit = byNumber.get(start);
            if (unit) {
              linkedAny = true;
              nodes.push(
                <Link
                  key={`u-${key}-${pieceKey++}`}
                  href={grammarTopicHref(unit.slug)}
                  className={unitLinkClass}
                >
                  {String(start)}
                </Link>,
              );
            } else {
              nodes.push(String(start));
            }
          } else {
            for (let n = start; n <= end; n += 1) {
              if (n > start) nodes.push(dash);
              const unit = byNumber.get(n);
              if (unit) {
                linkedAny = true;
                nodes.push(
                  <Link
                    key={`u-${key}-${pieceKey++}-${n}`}
                    href={grammarTopicHref(unit.slug)}
                    className={unitLinkClass}
                  >
                    {n}
                  </Link>,
                );
              } else {
                nodes.push(String(n));
              }
            }
          }
        }
        piece = piecePattern.exec(listText);
      }
      parts.push(linkedAny ? <span key={`g-${key++}`}>{nodes}</span> : full);
    }

    lastIndex = match.index + match[0].length;
    match = pattern.exec(text);
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

export function GrammarTopicDetailView({
  topic,
  practiceAvailable = false,
}: {
  topic: GrammarTopicDetail;
  practiceAvailable?: boolean;
}) {
  const { navigateWithAuth } = useGrammarAuth();
  const practiceHref = grammarTopicPracticeHref(topic.slug);
  const eyebrow = topicEyebrow(topic);
  const studentLabel =
    topic.practice.studentCount > 0
      ? `Join ${topic.practice.studentCount.toLocaleString("en-US")} students practicing today`
      : "Bài luyện tập sắp ra mắt";

  return (
    <GrammarRequireAuth>
    <div className={studyHubSubpageContentClass}>
      <header className="mb-12">
        {eyebrow ? (
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4b2876]">{eyebrow}</p>
        ) : null}
        <h1 className="font-serif text-4xl font-bold leading-tight text-[#000001] md:text-[2.75rem]">
          {topic.title}
        </h1>
        <div className="mt-4 h-px w-12 bg-[#000001]" aria-hidden />
        <p className={`mt-5 max-w-none ${bodyTextClass}`}>
          {topic.relatedStudy
            ? linkifyUnitMentions(topic.intro, topic.relatedStudy.units)
            : topic.intro}
        </p>
      </header>

      <section className="mb-14">
        <SectionHeading title="Lý thuyết" />

        <div className="space-y-8">
          <div>
            <h3 className="text-[15px] font-semibold text-[#000001]">Cấu trúc</h3>
            <div className="mt-3 grid gap-3 rounded-lg border border-[#E4E4E7] bg-white sm:grid-cols-2 sm:items-stretch">
              <StructureColumn label="Affirmative" value={topic.structure.affirmative} />
              <StructureColumn
                label="Negative"
                value={topic.structure.negative}
                className="sm:border-l sm:border-[#E4E4E7]"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold text-[#000001]">Cách sử dụng chính</h3>
            <ul className="mt-4 space-y-3">
              {topic.usagePoints.map((point) => (
                <UsagePoint key={`${point.strong}-${point.before ?? ""}`} point={point} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <SectionHeading title="Ví dụ thực tế" />
        <div className="space-y-3">
          {topic.examples.map((example) => (
            <div
              key={example.english}
              className="border-l-[3px] border-[#1e293b] bg-[#fafafa] px-5 py-4 md:px-6"
            >
              <p className="text-[14px] italic leading-relaxed text-[#000001]">
                {quotedEnglish(example.english)}
              </p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#47464b]">{example.vietnamese}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-[#000001] px-6 py-10 text-center text-white md:px-10 md:py-12">
        <ClipboardList className="mx-auto size-8 text-white/85" strokeWidth={1.5} aria-hidden />
        <h2 className="mt-5 text-[24px] font-semibold leading-tight">Sẵn sàng kiểm tra kiến thức?</h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-white/75">
          Làm bài luyện tập {topic.practice.questionCount} câu để củng cố {topic.title} — có giải thích sau mỗi
          câu.
        </p>
        {practiceAvailable ? (
          <button
            type="button"
            onClick={() => navigateWithAuth(practiceHref)}
            className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-[#000001] transition hover:bg-white/90"
          >
            Start Practice
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="mt-7 inline-flex h-11 cursor-not-allowed items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-[#000001] opacity-95"
          >
            Start Practice
            <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
          </button>
        )}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className="inline-flex size-7 items-center justify-center rounded-full border-2 border-[#000001] bg-[#ece7f2] text-[10px] font-bold text-[#4b2876]"
                aria-hidden
              >
                {String.fromCharCode(65 + index)}
              </span>
            ))}
          </div>
          <p className="text-sm text-white/70">{studentLabel}</p>
        </div>
      </section>
    </div>
    </GrammarRequireAuth>
  );
}
