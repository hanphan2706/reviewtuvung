"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import {
  studyHubPageBgClass,
  studyHubSubpageContentClass,
} from "@/components/study-module/study-hub-shell";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import {
  ACCENT_CHALLENGE_ACCENT_LABELS,
  ACCENT_CHALLENGE_OPTIONS,
  ACCENT_CHALLENGE_PAGE,
  accentChallengeRoundAudioUrl,
  accentChallengeTips,
  type AccentChallengeAnswerId,
  type AccentChallengePlayedAccentId,
  type AccentChallengeRound,
  type AccentChallengeVoiceGender,
  createInitialChallengeRound,
  nextChallengeRoundVoice,
  playedAccentToAnswer,
  shuffleChallengeRounds,
} from "@/lib/listening/accent-challenge-content";
import {
  accentChallengeSentencePromptSegments,
  accentChallengeWordPromptSegments,
} from "@/lib/listening/accent-challenge-prompt-mask";
import { AccentChallengePromptText } from "@/components/listening/accent-challenge-prompt-text";
import { usePathname } from "next/navigation";

type ListeningAccentChallengeViewProps = {
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
};

type RoundFeedback = {
  selected: AccentChallengeAnswerId;
  correct: boolean;
} | null;

export function ListeningAccentChallengeView({
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
}: ListeningAccentChallengeViewProps) {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [queue, setQueue] = useState<AccentChallengeRound[] | null>(null);
  const [roundIndex, setRoundIndex] = useState(0);
  const [accentRotation, setAccentRotation] = useState<AccentChallengePlayedAccentId[]>([]);
  const [accentRotationIndex, setAccentRotationIndex] = useState(0);
  const [playedAccent, setPlayedAccent] = useState<AccentChallengePlayedAccentId>("british");
  const [playedGender, setPlayedGender] = useState<AccentChallengeVoiceGender>("female");
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState<RoundFeedback>(null);

  useEffect(() => {
    setQueue(shuffleChallengeRounds());
    const initial = createInitialChallengeRound();
    setAccentRotation(initial.accentRotation);
    setAccentRotationIndex(initial.accentRotationIndex);
    setPlayedAccent(initial.roundVoice.accent);
    setPlayedGender(initial.roundVoice.gender);
  }, []);

  const currentRound = queue?.[roundIndex % (queue?.length ?? 1)] ?? queue?.[0];
  const roundNumber = roundIndex + 1;

  const audioSrc = useMemo(() => {
    if (!currentRound) return null;
    return accentChallengeRoundAudioUrl(currentRound, playedAccent, playedGender);
  }, [currentRound, playedAccent, playedGender]);

  const stopAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => stopAudio();
  }, [stopAudio]);

  const startNextRound = useCallback(() => {
    stopAudio();
    setFeedback(null);
    const nextVoice = nextChallengeRoundVoice(accentRotation, accentRotationIndex);
    setAccentRotation(nextVoice.accentRotation);
    setAccentRotationIndex(nextVoice.accentRotationIndex);
    setPlayedAccent(nextVoice.roundVoice.accent);
    setPlayedGender(nextVoice.roundVoice.gender);
    setRoundIndex((prev) => {
      if (!queue) return prev;
      const next = prev + 1;
      if (next >= queue.length) {
        setQueue(shuffleChallengeRounds());
        return 0;
      }
      return next;
    });
  }, [accentRotation, accentRotationIndex, queue, stopAudio]);

  const togglePlayback = () => {
    if (feedback || !queue || !audioSrc) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.src = audioSrc;
    const play = audio.play();
    if (play) {
      play
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const submitAnswer = (selected: AccentChallengeAnswerId) => {
    if (feedback || !currentRound) return;

    stopAudio();
    const correct = selected === playedAccentToAnswer(playedAccent);
    setFeedback({ selected, correct });
  };

  const correctAnswerId = playedAccentToAnswer(playedAccent);

  const optionClass = (optionId: AccentChallengeAnswerId) => {
    if (!feedback) {
      return "border-[#E4E4E7] bg-white text-[#000001] hover:border-[#4B2876]/35 hover:bg-[#faf9fc]";
    }
    if (optionId === correctAnswerId) {
      return "border-emerald-600 bg-emerald-50 text-emerald-900";
    }
    if (optionId === feedback.selected && !feedback.correct) {
      return "border-red-500 bg-red-50 text-red-900";
    }
    return "border-[#E4E4E7] bg-white text-[#616365] opacity-60";
  };

  const feedbackTips = feedback ? accentChallengeTips(playedAccent) : [];

  const promptSegments = useMemo(() => {
    if (!currentRound) return null;
    const revealed = Boolean(feedback);
    if (currentRound.kind === "word") {
      return accentChallengeWordPromptSegments(currentRound.item.word, revealed);
    }
    return accentChallengeSentencePromptSegments(
      currentRound.item.text,
      currentRound.item.id,
      revealed,
    );
  }, [currentRound, feedback]);

  return (
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={pathname}
      />

      <div className={studyHubSubpageContentClass}>
        <header className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#000001] md:text-[2.5rem]">
            {ACCENT_CHALLENGE_PAGE.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[#47464b] lg:whitespace-nowrap">
            {ACCENT_CHALLENGE_PAGE.description}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-stretch">
          <article className="flex min-h-[22rem] flex-col rounded-2xl border border-[#E4E4E7] bg-white p-5 md:min-h-[26rem] md:p-6">
            <div
              className={`flex flex-1 flex-col items-center text-center ${
                feedback ? "justify-start py-2" : "justify-center py-6"
              }`}
            >
              <button
                type="button"
                onClick={togglePlayback}
                disabled={Boolean(feedback) || !queue || !audioSrc}
                className="inline-flex size-14 cursor-pointer items-center justify-center rounded-xl bg-[#000001] text-white transition hover:bg-[#1a1a1c] disabled:cursor-not-allowed disabled:opacity-50"
                aria-label={isPlaying ? "Tạm dừng" : "Phát bản ghi"}
              >
                {isPlaying ? <Pause className="size-6" /> : <Play className="ml-0.5 size-6" />}
              </button>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[#616365]">
                Mẫu số #{roundNumber}
              </p>
              <div className="mt-5 px-2 font-serif text-lg leading-relaxed text-[#000001] md:text-xl">
                {promptSegments ? (
                  currentRound?.kind === "word" ? (
                    <AccentChallengePromptText
                      segments={promptSegments}
                      className="font-semibold not-italic"
                    />
                  ) : (
                    <AccentChallengePromptText
                      segments={promptSegments}
                      quoted
                      className="italic"
                    />
                  )
                ) : (
                  "\u00a0"
                )}
              </div>
              {feedback ? (
                <div className="mt-5 w-full text-left">
                  <p
                    className={`text-sm font-semibold ${
                      feedback.correct ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {feedback.correct
                      ? ACCENT_CHALLENGE_PAGE.feedbackCorrect
                      : ACCENT_CHALLENGE_PAGE.feedbackWrong}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#000001]">
                    {ACCENT_CHALLENGE_PAGE.correctAnswerPrefix}{" "}
                    {ACCENT_CHALLENGE_ACCENT_LABELS[playedAccent]}
                  </p>
                  <ul className="mt-3 space-y-2 border-t border-[#E4E4E7] pt-3">
                    {feedbackTips.map((tip) => (
                      <li key={tip} className="text-xs leading-relaxed text-[#47464b]">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={startNextRound}
                    className="mt-5 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#4B2876] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3d2060]"
                  >
                    {ACCENT_CHALLENGE_PAGE.nextLabel}
                  </button>
                </div>
              ) : null}
            </div>
          </article>

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#616365]">
              {ACCENT_CHALLENGE_PAGE.choiceHeading}
            </p>
            <div className="flex flex-col gap-3">
              {ACCENT_CHALLENGE_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  disabled={Boolean(feedback) || !queue}
                  onClick={() => submitAnswer(option.id)}
                  className={`cursor-pointer rounded-xl border px-5 py-4 text-left text-base font-medium transition disabled:cursor-default ${optionClass(option.id)}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {audioSrc ? (
          <audio
            ref={audioRef}
            preload="none"
            src={audioSrc}
            onEnded={() => setIsPlaying(false)}
            className="sr-only"
            aria-hidden
          >
            <track kind="captions" />
          </audio>
        ) : (
          <audio ref={audioRef} preload="none" className="sr-only" aria-hidden>
            <track kind="captions" />
          </audio>
        )}
      </div>
    </div>
  );
}
