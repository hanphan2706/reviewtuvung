"use client";

import { useEffect, useMemo, useState } from "react";
import { StitchRadioOption } from "@/components/reading/stitch-radio-option";
import { parsePassageExamSections } from "@/lib/reading/parse-passage-questions";
import { summarizeExamQuestionTypes } from "@/lib/reading/exam-question-types";
import type { ReadingPilotId } from "@/lib/reading/hub-articles";
import { getQuickCheckQuiz } from "@/lib/reading/passage-quiz";
import { resolveQuickCheckDisplay } from "@/lib/reading/quick-check-locale";

type ArticleQuickCheckPanelProps = {
  articleId: string;
  pilotId?: ReadingPilotId;
  quickCheckText?: string;
  showTranslation?: boolean;
  examHref: string | null;
  onOpenExam?: (href: string) => void;
  questionsText?: string;
  hasFullExam: boolean;
};

export function ArticleQuickCheckPanel({
  articleId,
  pilotId,
  quickCheckText = "",
  showTranslation = false,
  examHref,
  onOpenExam,
  questionsText = "",
  hasFullExam,
}: ArticleQuickCheckPanelProps) {
  const examTypes = useMemo(() => {
    if (!hasFullExam || !questionsText.trim()) return [];
    return summarizeExamQuestionTypes(parsePassageExamSections(questionsText));
  }, [hasFullExam, questionsText]);

  const quizRaw = useMemo(
    () =>
      hasFullExam
        ? null
        : getQuickCheckQuiz(articleId, { pilotId, quickCheckText }),
    [articleId, hasFullExam, pilotId, quickCheckText],
  );

  const quiz = useMemo(
    () => (quizRaw ? resolveQuickCheckDisplay(quizRaw, showTranslation) : null),
    [quizRaw, showTranslation],
  );

  const [picked, setPicked] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setPicked(null);
    setSubmitted(false);
  }, [articleId, quiz]);

  if (hasFullExam && examHref) {
    return (
      <div className="mt-4 space-y-4">
        {examTypes.length > 0 ? (
          <p className="text-sm leading-relaxed text-[#47464b]">{examTypes.join(", ")}</p>
        ) : (
          <p className="text-sm text-[#47464b]">Bài có bộ câu hỏi IELTS kèm passage.</p>
        )}
        <button
          type="button"
          onClick={() => onOpenExam?.(examHref)}
          className="flex w-full items-center justify-center rounded-lg border border-[#000001] bg-white px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-[#000001] transition hover:bg-black/90 hover:text-white"
        >
          Thử thách làm bài đọc IELTS
        </button>
      </div>
    );
  }

  if (!quiz || !quizRaw) {
    return (
      <p className="mt-4 text-sm text-[#47464b]">Chưa có câu hỏi kiểm tra cho bài này.</p>
    );
  }

  const isCorrect = submitted && picked === quizRaw.correctIndex;

  return (
    <div className="mt-4 space-y-4">
      <p className="text-[15px] font-semibold leading-relaxed text-[#000001]">{quiz.question}</p>
      <div className="flex flex-col gap-2">
        {quiz.options.map((opt, i) => (
          <StitchRadioOption
            key={`${showTranslation ? "vi" : "en"}-${opt}`}
            name="quick-check"
            value={String(i)}
            label={opt}
            checked={picked === i}
            onChange={() => {
              setPicked(i);
              setSubmitted(false);
            }}
          />
        ))}
      </div>
      <button
        type="button"
        disabled={picked === null}
        onClick={() => setSubmitted(true)}
        className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#000001] bg-white py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#000001] transition hover:bg-black/90 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#000001]"
      >
        {showTranslation ? "Kiểm tra đáp án" : "Check answer"}
      </button>
      {submitted ? (
        <p className={`text-sm ${isCorrect ? "text-emerald-700" : "text-[#47464b]"}`}>
          {isCorrect
            ? showTranslation
              ? "Chính xác!"
              : "Correct!"
            : showTranslation
              ? "Chưa đúng — đọc lại bài và thử chọn ý chính khác."
              : "Not quite — reread the passage and try another main idea."}
          {quiz.explanation ? (
            <span className="mt-1 block text-[#71717A]">{quiz.explanation}</span>
          ) : null}
        </p>
      ) : null}
    </div>
  );
}
