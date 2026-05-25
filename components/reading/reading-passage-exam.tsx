"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ArticleBodyContent } from "@/components/reading/article-body-content";
import { splitTfngInstructionSegments } from "@/lib/reading/format-tfng-instruction";
import { parsePassageExamSections } from "@/lib/reading/parse-passage-questions";
import type { ReadingPassageBlock } from "@/lib/reading/split-passages";

type ReadingPassageExamProps = {
  passage: ReadingPassageBlock;
  title: string;
  backHref: string;
};

export function ReadingPassageExam({ passage, title, backHref }: ReadingPassageExamProps) {
  const sections = useMemo(
    () => parsePassageExamSections(passage.questionsText),
    [passage.questionsText],
  );
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div className="flex h-[calc(100dvh-3.5rem)] flex-col overflow-hidden bg-[#f5f5f7]">
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#E4E4E7] bg-[#4b2876] px-4 py-3 text-white md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href={backHref}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/30 hover:bg-white/10"
            aria-label="Quay lại bài đọc"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </Link>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{title}</p>
            <p className="text-[11px] text-white/75">Chế độ làm bài — passage {passage.passage}</p>
          </div>
        </div>
        <p className="hidden text-xs text-white/80 sm:block">Giao diện kiểu reading.html (một passage)</p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-2">
        <div className="overflow-y-auto border-r border-[#E4E4E7] bg-white p-6 md:p-8">
          <h2 className="mb-6 font-serif text-2xl font-bold text-[#1c1b1c]">{passage.title}</h2>
          <ArticleBodyContent body={passage.body} />
        </div>

        <div className="overflow-y-auto bg-[#fafafa] p-6 md:p-8">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#4b2876]">Questions</h3>
          {sections.length === 0 ? (
            <p className="text-sm text-[#47464b]">Không parse được câu hỏi từ file .txt.</p>
          ) : (
            <div className="space-y-8">
              {sections.map((sec) => (
                <section key={sec.title} className="rounded-lg border border-[#E4E4E7] bg-white p-4">
                  <p className="text-sm font-bold text-[#1c1b1c]">{sec.title}</p>
                  {sec.instructionLines.length > 0 ? (
                    sec.kind === "tfng" ? (
                      <div className="mt-2 space-y-2 text-xs leading-relaxed text-[#47464b]">
                        {splitTfngInstructionSegments(
                          sec.instructionLines.join(" "),
                          sec.statements[0]?.kind === "yes-no-ng" ? "yes-no-ng" : "true-false-ng",
                        ).map((line) => (
                          <p key={line.slice(0, 48)}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-xs leading-relaxed text-[#47464b]">
                        {sec.instructionLines.join(" ")}
                      </p>
                    )
                  ) : null}

                  {sec.statements.length > 0 ? (
                    <ul className="mt-4 space-y-4">
                      {sec.statements.map((st) => (
                        <li key={st.num} className="text-sm">
                          <p className="mb-2 font-medium text-[#1c1b1c]">
                            {st.num}. {st.text}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(st.kind === "yes-no-ng"
                              ? ["YES", "NO", "NOT GIVEN"]
                              : ["TRUE", "FALSE", "NOT GIVEN"]
                            ).map((opt) => (
                              <label
                                key={opt}
                                className={`cursor-pointer rounded-md border px-2.5 py-1 text-xs ${
                                  answers[st.num] === opt
                                    ? "border-[#4b2876] bg-[#4b2876]/10 font-semibold"
                                    : "border-[#E4E4E7] bg-white"
                                }`}
                              >
                                <input
                                  type="radio"
                                  className="sr-only"
                                  name={`q-${st.num}`}
                                  checked={answers[st.num] === opt}
                                  onChange={() =>
                                    setAnswers((prev) => ({ ...prev, [st.num]: opt }))
                                  }
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {sec.mcqQuestions.length > 0 ? (
                    <ul className="mt-4 space-y-6">
                      {sec.mcqQuestions.map((q) => (
                        <li key={q.num} className="text-sm">
                          <p className="mb-3 font-medium text-[#1c1b1c]">
                            {q.num}. {q.text}
                          </p>
                          <div className="flex flex-col gap-2">
                            {q.options.map((o) => (
                              <label
                                key={o.letter}
                                className={`flex cursor-pointer items-start gap-2 rounded-md border px-3 py-2 text-xs leading-relaxed ${
                                  answers[q.num] === o.letter
                                    ? "border-[#4b2876] bg-[#4b2876]/10 font-semibold"
                                    : "border-[#E4E4E7] bg-white"
                                }`}
                              >
                                <input
                                  type="radio"
                                  className="mt-0.5 shrink-0"
                                  name={`q-${q.num}`}
                                  checked={answers[q.num] === o.letter}
                                  onChange={() =>
                                    setAnswers((prev) => ({ ...prev, [q.num]: o.letter }))
                                  }
                                />
                                <span>
                                  <span className="font-bold text-[#4b2876]">{o.letter}</span>{" "}
                                  {o.text}
                                </span>
                              </label>
                            ))}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {sec.bodyLines.length > 0 &&
                  sec.statements.length === 0 &&
                  sec.mcqQuestions.length === 0 ? (
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#47464b]">
                      {sec.bodyLines.join("\n")}
                    </pre>
                  ) : null}
                </section>
              ))}
            </div>
          )}
          <p className="mt-6 text-[11px] text-[#71717A]">
            Đáp án chấm điểm tự động sẽ bổ sung sau. Hiện bạn có thể làm bài và tự đối chiếu passage.
          </p>
        </div>
      </div>
    </div>
  );
}
