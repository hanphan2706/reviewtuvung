"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Languages, Play, Volume2 } from "lucide-react";
import type { ListeningPartMeta } from "@/lib/listening/content-manifest";
import type { ListeningTranscriptCue } from "@/lib/listening/listening-transcript-sync-types";
import { ListeningTranscriptPanel } from "@/components/listening/listening-transcript-panel";
import { ListeningFlowKeywordTable } from "@/components/listening/listening-flow-keyword-table";
import { ListeningFlowStepper } from "@/components/listening/listening-flow-stepper";
import { ListeningFlowTranscriptCloze } from "@/components/listening/listening-flow-transcript-cloze";
import { LISTENING_FLOW_COPY, type ListeningFlowLocale } from "@/lib/listening/listening-seven-step-copy";
import { resolveFlowExerciseContent, resolveFlowExerciseFromLesson } from "@/lib/listening/tactics-basic-flow-content";
import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";
import {
  adjacentFlowStep,
  BASIC_IELTS_FLOW_STEPS,
  buildIeltsComprehensionFlowSteps,
  type ListeningSevenStepId,
} from "@/lib/listening/listening-seven-steps";
import { useListeningFlowDictionary } from "@/hooks/use-listening-flow-dictionary";
import { isBasicIeltsListeningExamSlug } from "@/lib/listening/basic-ielts-listening-catalog";

type ListeningSevenStepFlowProps = {
  meta: ListeningPartMeta;
  lessonId: string;
  audioCurrentTime: number;
  isLoggedIn: boolean;
  onCueSeek: (cue: ListeningTranscriptCue) => void;
  onStepChange?: (step: ListeningSevenStepId) => void;
  onReplayConversation?: (conversationNumber: number) => void;
  flowLessonContent?: ListeningFlowLessonContent | null;
};

const DICT_ENABLED_STEPS = new Set<ListeningSevenStepId>([1, 2, 4, 5, 6, 7]);

const BASIC_IELTS_STEP_SHORT_LABELS = {
  vi: ["CÂU HỎI", "SHADOWING", "PHẢN ÁNH"],
  en: ["QUESTIONS", "SHADOWING", "REFLECT"],
} as const;

const fieldClass =
  "mt-2 w-full rounded-xl border border-[#E4E4E7] bg-white px-3 py-2.5 text-sm text-[#000001] outline-none placeholder:text-[#616365] focus:border-[#4B2876] focus:ring-1 focus:ring-[#4B2876]/20 sm:px-4 sm:py-3 sm:text-[15px]";

function FlowLocaleToggle({
  locale,
  onToggle,
}: {
  locale: ListeningFlowLocale;
  onToggle: () => void;
}) {
  const copy = LISTENING_FLOW_COPY[locale];
  const showEnglish = locale === "vi";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={locale === "en"}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1 rounded-full border border-[#E4E4E7] bg-white px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#47464b] shadow-sm transition hover:bg-[#f3f0f8] sm:px-3 sm:py-1.5 sm:text-[10px] ${
        locale === "en" ? "border-[#4b2876]/40 bg-[#4b2876]/10 text-[#4b2876]" : ""
      }`}
    >
      <Languages className="size-3 opacity-80" aria-hidden />
      {showEnglish ? copy.localeToggleShowEn : copy.localeToggleShowVi}
    </button>
  );
}

function StepIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-1.5 sm:space-y-2">
      <StepHeading title={title} />
      <p className="cursor-text select-text text-sm leading-snug text-[#47464b] sm:text-[15px] sm:leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function StepHeading({ title }: { title: string }) {
  return <h2 className="font-serif text-2xl font-semibold text-[#000001] md:text-[1.65rem]">{title}</h2>;
}

function ConversationReplayButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="ml-1 inline-flex shrink-0 cursor-pointer items-center border-0 bg-transparent p-0 align-middle text-emerald-800 transition hover:text-emerald-950"
    >
      <Volume2 className="size-3.5 translate-y-[0.5px]" strokeWidth={2.25} aria-hidden />
    </button>
  );
}

function StepActions({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center justify-center gap-3 pt-2">{children}</div>;
}

function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#000001] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#1a1a1b] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#000001]"
    >
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#E4E4E7] bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#000001] transition hover:bg-[#f3f0f8]"
    >
      {children}
    </button>
  );
}

function isGistAnswerCorrect(selected: ReadonlySet<string>, correctKeys: readonly string[]): boolean {
  if (correctKeys.length === 0) return false;
  if (selected.size !== correctKeys.length) return false;
  return correctKeys.every((key) => selected.has(key));
}

function OptionGrid({
  options,
  selected,
  onToggle,
  revealed,
  correctKeys,
}: {
  options: readonly { key: string; label: string }[];
  selected: ReadonlySet<string>;
  onToggle: (key: string) => void;
  revealed?: boolean;
  correctKeys?: readonly string[];
}) {
  const correctSet = new Set(correctKeys ?? []);

  return (
    <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
      {options.map((option) => {
        const checked = selected.has(option.key);
        const isCorrectOption = revealed && correctSet.has(option.key);
        const isWrongSelection = revealed && checked && !correctSet.has(option.key);
        const showCheck = checked || isCorrectOption;

        let optionClass =
          "flex items-center gap-2.5 rounded-xl border px-3 py-3 text-left transition sm:gap-3 sm:px-4 sm:py-4 ";
        if (isCorrectOption) {
          optionClass += checked
            ? "border-emerald-600 bg-emerald-50 shadow-sm"
            : "border-emerald-500 bg-emerald-50/70 shadow-sm";
        } else if (isWrongSelection) {
          optionClass += "border-red-400 bg-red-50 shadow-sm";
        } else if (checked) {
          optionClass += "border-[#4B2876] bg-[#f3f0f8] shadow-sm";
        } else {
          optionClass += "border-[#E4E4E7] bg-white hover:border-[#d4d4d8]";
        }

        return (
          <div key={option.key} className={optionClass}>
            <button
              type="button"
              onClick={() => onToggle(option.key)}
              aria-pressed={checked}
              aria-label={option.label}
              className="inline-flex shrink-0 cursor-pointer border-0 bg-transparent p-0"
            >
              <span
                className={`flex size-4 items-center justify-center rounded border sm:size-5 ${
                  isCorrectOption
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : isWrongSelection
                      ? "border-red-500 bg-red-500 text-white"
                      : checked
                        ? "border-[#4B2876] bg-[#4B2876] text-white"
                        : "border-[#d4d4d8] bg-white"
                }`}
                aria-hidden
              >
                {showCheck ? <Check className="size-3 sm:size-3.5" strokeWidth={3} /> : null}
              </span>
            </button>
            <span className="min-w-0 flex-1 cursor-text select-text text-sm font-medium text-[#000001] sm:text-[15px]">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function ReflectionOptionList({
  options,
  selected,
  onToggle,
}: {
  options: readonly { id: string; label: string }[];
  selected: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  return (
    <ul className="space-y-2">
      {options.map((opt) => {
        const checked = Boolean(selected[opt.id]);
        return (
          <li key={opt.id}>
            <button
              type="button"
              onClick={() => onToggle(opt.id)}
              className={`flex w-full cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2.5 text-left transition sm:gap-3 sm:px-4 sm:py-3 ${
                checked
                  ? "border-[#4B2876] bg-[#f3f0f8] shadow-sm"
                  : "border-[#E4E4E7] bg-white hover:border-[#d4d4d8] hover:bg-[#FAFAFA]"
              }`}
            >
              <span
                className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border sm:size-5 ${
                  checked ? "border-[#4B2876] bg-[#4B2876] text-white" : "border-[#d4d4d8] bg-white"
                }`}
                aria-hidden
              >
                {checked ? <Check className="size-3 sm:size-3.5" strokeWidth={3} /> : null}
              </span>
              <span className="text-sm text-[#000001] sm:text-[15px]">{opt.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function ListeningSevenStepFlow({
  meta,
  lessonId,
  audioCurrentTime,
  isLoggedIn,
  onCueSeek,
  onStepChange,
  onReplayConversation,
  flowLessonContent = null,
}: ListeningSevenStepFlowProps) {
  const flowContentRef = useRef<HTMLDivElement>(null);
  const skipWarmup = isBasicIeltsListeningExamSlug(meta.examSlug);
  const [locale, setLocale] = useState<ListeningFlowLocale>("en");
  const [currentStep, setCurrentStep] = useState<ListeningSevenStepId>(skipWarmup ? 4 : 1);
  const [predictionChoices, setPredictionChoices] = useState<Set<string>>(new Set());
  const [gistChoices, setGistChoices] = useState<Set<string>>(new Set());
  const [memoryText, setMemoryText] = useState("");
  const [detailAnswers, setDetailAnswers] = useState<Record<string, string>>({});
  const [clozeAnswers, setClozeAnswers] = useState<Record<string, string>>({});
  const [keywordAnswers, setKeywordAnswers] = useState<Record<string, string>>({});
  const [gistChecked, setGistChecked] = useState(false);
  const [detailChecked, setDetailChecked] = useState(false);
  const [clozeChecked, setClozeChecked] = useState(false);
  const [keywordChecked, setKeywordChecked] = useState(false);
  const [transcriptHasSync, setTranscriptHasSync] = useState(false);
  const [reflection, setReflection] = useState<Record<string, boolean>>({});

  const copy = LISTENING_FLOW_COPY[locale];
  const exercise = useMemo(
    () =>
      flowLessonContent
        ? resolveFlowExerciseFromLesson(flowLessonContent, locale, lessonId)
        : resolveFlowExerciseContent(lessonId, locale),
    [flowLessonContent, lessonId, locale],
  );
  const flowSteps = useMemo(
    () =>
      skipWarmup
        ? BASIC_IELTS_FLOW_STEPS
        : buildIeltsComprehensionFlowSteps({
            hasCloze: Boolean(exercise.transcriptCloze?.gaps.length),
            hasKeyword: exercise.keywordParaphrases.length > 0,
          }),
    [skipWarmup, exercise.transcriptCloze, exercise.keywordParaphrases],
  );
  const firstStep = flowSteps[0] ?? 1;
  const stepAfterQuestions = adjacentFlowStep(flowSteps, 4, 1) ?? 7;
  const stepBeforeShadowing = adjacentFlowStep(flowSteps, 7, -1) ?? 4;
  const stepShortLabels = skipWarmup
    ? BASIC_IELTS_STEP_SHORT_LABELS[locale]
    : flowSteps.map((stepId) => copy.stepShortLabels[stepId - 1] ?? "");
  const stepTitle = skipWarmup
    ? (locale === "vi"
        ? (["Câu hỏi", "Shadowing", "Phản ánh"][flowSteps.indexOf(currentStep)] ?? "")
        : (["Questions", "Shadowing", "Reflection"][flowSteps.indexOf(currentStep)] ?? ""))
    : (copy.stepTitles[currentStep - 1] ?? "");
  const detailPrompt = exercise.detailPrompt ?? copy.step4Prompt;

  useEffect(() => {
    if (!lessonId) return;
    setCurrentStep(firstStep);
    setPredictionChoices(new Set());
    setGistChoices(new Set());
    setMemoryText("");
    setDetailAnswers({});
    setClozeAnswers({});
    setKeywordAnswers({});
    setGistChecked(false);
    setDetailChecked(false);
    setClozeChecked(false);
    setKeywordChecked(false);
    setReflection({});
  }, [lessonId, firstStep]);

  const restartLesson = () => {
    setCurrentStep(firstStep);
    setPredictionChoices(new Set());
    setGistChoices(new Set());
    setMemoryText("");
    setDetailAnswers({});
    setClozeAnswers({});
    setKeywordAnswers({});
    setGistChecked(false);
    setDetailChecked(false);
    setClozeChecked(false);
    setKeywordChecked(false);
    setReflection({});
  };

  useEffect(() => {
    onStepChange?.(currentStep);
  }, [currentStep, onStepChange]);

  const goToStep = (step: ListeningSevenStepId) => {
    if (!flowSteps.includes(step)) return;
    setCurrentStep(step);
  };
  const toggleLocale = () => setLocale((prev) => (prev === "vi" ? "en" : "vi"));

  const togglePrediction = (key: string) => {
    setPredictionChoices((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleReflection = (id: string) => {
    setReflection((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleGist = (key: string) => {
    setGistChoices((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    setGistChecked(false);
  };

  const gistIsCorrect =
    gistChecked &&
    isGistAnswerCorrect(gistChoices, exercise.gistCorrectKeys);

  const dictEnabled = DICT_ENABLED_STEPS.has(currentStep);
  const { popover: dictionaryPopover } = useListeningFlowDictionary(flowContentRef, {
    enabled: dictEnabled,
    isLoggedIn,
  });

  return (
    <section className="overflow-hidden rounded-xl border border-[#E4E4E7] bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-[#E4E4E7] px-4 py-3.5 md:gap-3 md:px-8 md:py-5">
        <ListeningFlowStepper
          currentStep={currentStep}
          steps={flowSteps}
          shortLabels={stepShortLabels}
          onSelect={goToStep}
        />
        <FlowLocaleToggle locale={locale} onToggle={toggleLocale} />
      </div>

      <div ref={flowContentRef} className="px-5 py-6 md:px-8 md:py-10">
        {!skipWarmup && currentStep === 1 ? (
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center md:gap-8">
            <StepIntro title={stepTitle} description={copy.step1Prompt} />
            <div className="w-full text-left">
              <OptionGrid options={exercise.predictionOptions} selected={predictionChoices} onToggle={togglePrediction} />
            </div>
            <PrimaryButton onClick={() => goToStep(2)}>
              <Play className="size-4 fill-current" aria-hidden />
              {copy.step1Start}
            </PrimaryButton>
          </div>
        ) : null}

        {!skipWarmup && currentStep === 2 ? (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={copy.step2Prompt} />
            <OptionGrid
              options={exercise.gistOptions}
              selected={gistChoices}
              onToggle={toggleGist}
              revealed={gistChecked}
              correctKeys={exercise.gistCorrectKeys}
            />
            {gistChecked && exercise.gistCorrectKeys.length > 0 ? (
              <p className={`text-sm ${gistIsCorrect ? "text-emerald-700" : "text-[#47464b]"}`}>
                {gistIsCorrect ? copy.gistCorrect : copy.gistIncorrect}
              </p>
            ) : null}
            <StepActions>
              <SecondaryButton onClick={() => goToStep(1)}>{copy.back}</SecondaryButton>
              {gistChecked ? (
                <PrimaryButton onClick={() => goToStep(3)}>{copy.next}</PrimaryButton>
              ) : (
                <PrimaryButton
                  disabled={gistChoices.size === 0}
                  onClick={() => {
                    if (gistChoices.size === 0) return;
                    setGistChecked(true);
                  }}
                >
                  {copy.checkAnswer}
                </PrimaryButton>
              )}
            </StepActions>
          </div>
        ) : null}

        {!skipWarmup && currentStep === 3 ? (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={copy.step3Prompt} />
            <textarea
              className={`${fieldClass} min-h-32`}
              value={memoryText}
              onChange={(e) => setMemoryText(e.target.value)}
              placeholder={exercise.memoryPlaceholder}
              rows={5}
            />
            <StepActions>
              <SecondaryButton onClick={() => goToStep(2)}>{copy.back}</SecondaryButton>
              <PrimaryButton onClick={() => goToStep(4)}>{copy.next}</PrimaryButton>
            </StepActions>
          </div>
        ) : null}

        {currentStep === 4 ? (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={detailPrompt} />
            {exercise.detailQuestions.map((question) => (
              <div key={question.key}>
                <p className="cursor-text select-text text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
                  {question.conversation}
                </p>
                {question.question ? (
                  <div className="mt-1.5">
                    <p className="cursor-text select-text text-sm font-medium text-[#000001]">
                      {question.question}
                    </p>
                    <input
                      className={fieldClass}
                      value={detailAnswers[question.key] ?? ""}
                      onChange={(e) => {
                        setDetailAnswers((prev) => ({ ...prev, [question.key]: e.target.value }));
                        setDetailChecked(false);
                      }}
                    />
                  </div>
                ) : (
                  <input
                    className={fieldClass}
                    value={detailAnswers[question.key] ?? ""}
                    onChange={(e) => {
                      setDetailAnswers((prev) => ({ ...prev, [question.key]: e.target.value }));
                      setDetailChecked(false);
                    }}
                  />
                )}
                {detailChecked ? (
                  <div className="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm text-emerald-900">
                    <p className="leading-relaxed">
                      <span className="font-semibold">{copy.modelAnswerLabel}: </span>
                      <span className="inline cursor-text select-text">
                        {question.answer}
                        {question.conversationNumber !== null && onReplayConversation ? (
                          <ConversationReplayButton
                            label={copy.replayConversation}
                            onClick={() => {
                              const conversationNumber = question.conversationNumber;
                              if (conversationNumber === null) return;
                              onReplayConversation(conversationNumber);
                            }}
                          />
                        ) : null}
                      </span>
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
            <StepActions>
              {skipWarmup ? null : (
                <SecondaryButton onClick={() => goToStep(3)}>{copy.back}</SecondaryButton>
              )}
              {detailChecked ? (
                <PrimaryButton onClick={() => goToStep(stepAfterQuestions)}>
                  {stepAfterQuestions === 7 ? copy.step4ListenAgain : copy.next}
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={() => setDetailChecked(true)}>{copy.checkAnswer}</PrimaryButton>
              )}
            </StepActions>
          </div>
        ) : null}

        {currentStep === 5 && exercise.transcriptCloze ? (
          <div className="mx-auto flex max-w-3xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={copy.stepClozePrompt} />
            <ListeningFlowTranscriptCloze
              exercise={exercise.transcriptCloze}
              answers={clozeAnswers}
              checked={clozeChecked}
              onChange={(gapId, value) => {
                setClozeAnswers((prev) => ({ ...prev, [gapId]: value }));
                setClozeChecked(false);
              }}
            />
            <StepActions>
              <SecondaryButton onClick={() => goToStep(4)}>{copy.back}</SecondaryButton>
              {clozeChecked ? (
                <PrimaryButton onClick={() => goToStep(adjacentFlowStep(flowSteps, 5, 1) ?? 7)}>
                  {copy.next}
                </PrimaryButton>
              ) : (
                <PrimaryButton onClick={() => setClozeChecked(true)}>{copy.checkAnswer}</PrimaryButton>
              )}
            </StepActions>
          </div>
        ) : null}

        {currentStep === 6 && exercise.keywordParaphrases.length > 0 ? (
          <div className="mx-auto flex max-w-3xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={copy.stepKeywordPrompt} />
            <ListeningFlowKeywordTable
              rows={exercise.keywordParaphrases}
              answers={keywordAnswers}
              checked={keywordChecked}
              copy={copy}
              onChange={(key, value) => {
                setKeywordAnswers((prev) => ({ ...prev, [key]: value }));
                setKeywordChecked(false);
              }}
            />
            <StepActions>
              <SecondaryButton onClick={() => goToStep(adjacentFlowStep(flowSteps, 6, -1) ?? 4)}>
                {copy.back}
              </SecondaryButton>
              {keywordChecked ? (
                <PrimaryButton onClick={() => goToStep(7)}>{copy.next}</PrimaryButton>
              ) : (
                <PrimaryButton onClick={() => setKeywordChecked(true)}>{copy.checkAnswer}</PrimaryButton>
              )}
            </StepActions>
          </div>
        ) : null}

        {currentStep === 7 ? (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-start justify-between gap-3">
                <StepHeading title={stepTitle} />
                <span className="inline-flex shrink-0 items-center gap-1.5 pt-0.5 text-[10px] font-bold uppercase tracking-wider text-[#616365]">
                  <span
                    className={`size-1.5 rounded-full ${transcriptHasSync ? "bg-[#4b2876] animate-pulse" : "bg-zinc-300"}`}
                    aria-hidden
                  />
                  {transcriptHasSync ? copy.step5SyncedLabel : copy.step5NotSyncedLabel}
                </span>
              </div>
              <p className="cursor-text select-text text-sm leading-snug text-[#47464b] sm:text-[15px] sm:leading-relaxed">
                {copy.step5Prompt}
              </p>
            </div>
            <ListeningTranscriptPanel
              part={meta.part}
              partId={meta.id}
              examSlug={meta.examSlug}
              transcriptTryFiles={meta.transcriptTryFiles}
              audioCurrentTime={audioCurrentTime}
              onCueSeek={onCueSeek}
              variant="flow"
              onSyncStatusChange={setTranscriptHasSync}
            />
            <StepActions>
              <SecondaryButton onClick={() => goToStep(stepBeforeShadowing)}>{copy.back}</SecondaryButton>
              <PrimaryButton onClick={() => goToStep(8)}>{copy.next}</PrimaryButton>
            </StepActions>
          </div>
        ) : null}

        {currentStep === 8 ? (
          <div className="mx-auto flex max-w-2xl flex-col gap-4 md:gap-6">
            <StepIntro title={stepTitle} description={copy.step6Prompt} />
            <ReflectionOptionList
              options={copy.step6ReflectionOptions}
              selected={reflection}
              onToggle={toggleReflection}
            />
            <StepActions>
              <SecondaryButton onClick={() => goToStep(7)}>{copy.back}</SecondaryButton>
              <PrimaryButton onClick={restartLesson}>{copy.step6Restart}</PrimaryButton>
            </StepActions>
          </div>
        ) : null}
      </div>
      {dictionaryPopover}
    </section>
  );
}
