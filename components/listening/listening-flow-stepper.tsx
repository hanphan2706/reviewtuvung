"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  listeningFlowStepperWindow,
  type ListeningSevenStepId,
} from "@/lib/listening/listening-seven-steps";

function useCompactStepper(): boolean {
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return compact;
}

function StepCircle({
  stepId,
  isActive,
  isComplete,
}: {
  stepId: number;
  isActive: boolean;
  isComplete: boolean;
}) {
  if (isActive) {
    return (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#000001] text-[10px] font-semibold leading-none text-white">
        {stepId}
      </span>
    );
  }

  if (isComplete) {
    return (
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#000001] text-white">
        <Check className="size-3" strokeWidth={2.5} aria-hidden />
      </span>
    );
  }

  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#E4E4E7] bg-white text-[10px] font-medium leading-none text-[#9CA3AF]">
      {stepId}
    </span>
  );
}

export function ListeningFlowStepper({
  currentStep,
  steps,
  shortLabels,
  onSelect,
}: {
  currentStep: ListeningSevenStepId;
  steps: readonly ListeningSevenStepId[];
  shortLabels: readonly string[];
  onSelect: (step: ListeningSevenStepId) => void;
}) {
  const compact = useCompactStepper();
  const currentIndex = Math.max(0, steps.indexOf(currentStep));
  const view = listeningFlowStepperWindow(steps.length, currentIndex, compact);
  const visible = steps
    .map((stepId, index) => ({ stepId, index, shortLabel: shortLabels[index] ?? "" }))
    .slice(view.start, view.end);

  return (
    <div className="relative min-w-0 flex-1">
      {view.fadeLeft ? (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-7 bg-gradient-to-r from-white to-transparent"
          aria-hidden
        />
      ) : null}
      {view.fadeRight ? (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-7 bg-gradient-to-l from-white to-transparent"
          aria-hidden
        />
      ) : null}
      <div className="flex w-full min-w-0 items-center">
        {visible.map(({ stepId, index, shortLabel }, visibleIndex) => {
          const isActive = stepId === currentStep;
          const isComplete = currentIndex > index;
          const isLast = visibleIndex === visible.length - 1;
          const displayNumber = index + 1;

          return (
            <div key={stepId} className={`flex min-w-0 items-center ${isLast ? "shrink-0" : "min-w-0 flex-1"}`}>
              <button
                type="button"
                onClick={() => onSelect(stepId)}
                className="group flex shrink-0 items-center gap-1.5"
                aria-current={isActive ? "step" : undefined}
                aria-label={`${displayNumber}. ${shortLabel}`}
              >
                <StepCircle stepId={displayNumber} isActive={isActive} isComplete={isComplete} />
                {isActive ? (
                  <span className="hidden shrink-0 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.12em] text-[#000001] sm:inline">
                    {shortLabel}
                  </span>
                ) : null}
              </button>

              {!isLast ? (
                <div
                  className={`mx-1 h-px min-w-[4px] flex-1 sm:mx-2 ${
                    isComplete ? "bg-[#000001]" : "bg-[#E4E4E7]"
                  }`}
                  aria-hidden
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
