import type { AccentChallengePromptSegment } from "@/lib/listening/accent-challenge-prompt-mask";

type AccentChallengePromptTextProps = {
  segments: readonly AccentChallengePromptSegment[];
  quoted?: boolean;
  className?: string;
};

function blankUnderscores(charCount: number): string {
  const slots = Math.max(3, Math.min(charCount, 10));
  return Array.from({ length: slots }, () => "_").join(" ");
}

function PromptBlank({ charCount }: { charCount: number }) {
  return (
    <span className="mx-0.5 tracking-wide text-[#616365]" aria-hidden>
      {blankUnderscores(charCount)}
    </span>
  );
}

export function AccentChallengePromptText({
  segments,
  quoted = false,
  className = "",
}: AccentChallengePromptTextProps) {
  const content = (
    <>
      {quoted ? "\u201c" : null}
      {segments.map((segment, index) => {
        const key =
          segment.type === "text"
            ? `text-${index}-${segment.value.slice(0, 12)}`
            : `blank-${index}-${segment.charCount}`;

        return segment.type === "text" ? (
          <span key={key}>{segment.value}</span>
        ) : (
          <PromptBlank key={key} charCount={segment.charCount} />
        );
      })}
      {quoted ? "\u201d" : null}
    </>
  );

  return <span className={className}>{content}</span>;
}
