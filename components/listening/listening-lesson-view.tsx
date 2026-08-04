"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArticleAudioHeroCard } from "@/components/reading/article-audio-hero-card";
import type { ArticlePassageAudioPlayerHandle } from "@/components/reading/article-passage-audio-player";
import { ListeningIeltsModePicker } from "@/components/listening/listening-ielts-mode-picker";
import { ListeningSevenStepFlow } from "@/components/listening/listening-seven-step-flow";
import { ListeningTranscriptCard } from "@/components/listening/listening-transcript-card";
import { ListeningUpNextRow } from "@/components/listening/listening-up-next-row";
import { StudyHubHeader } from "@/components/study-module/study-hub-header";
import { studyHubPageBgClass, studyHubPageContentClass } from "@/components/study-module/study-hub-shell";
import { StudyLoginPrompt } from "@/components/study-module/study-login-prompt";
import { useStudyExamNav } from "@/hooks/use-study-exam-nav";
import { useListeningLessonProgress } from "@/hooks/use-listening-lesson-progress";
import { useListeningFlowAudio } from "@/hooks/use-listening-flow-audio";
import { useTacticsConversationSegments } from "@/hooks/use-tactics-conversation-segments";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";
import { estimateListeningDifficultyFromTranscript } from "@/lib/listening/estimate-listening-level";
import {
  fetchListeningTranscriptText,
  listeningTranscriptUsesPartSplit,
} from "@/lib/listening/listening-transcript-client";
import type { ReadingDifficulty } from "@/lib/reading/hub-articles";
import {
  getListeningPartById,
  getListeningFeaturedPart,
  listeningPartDurationMinutes,
} from "@/lib/listening/content-manifest";
import { hasListeningPartExam } from "@/lib/listening/listening-qna-catalog";
import { listeningLessonExamHrefBySlug } from "@/lib/listening/listening-hub-nav";
import type { ListeningFlowLessonContent } from "@/lib/listening/tactics-basic-flow-types";

type ListeningLessonViewProps = {
  partId: string;
  onSelectLesson: (slug: string) => void;
  onTitleClick?: () => void;
  isLoggedIn: boolean;
  userProfile?: StudyHubUserProfile | null;
  supabaseConfigured: boolean;
  signInNext: string;
};

async function fetchTranscriptPart(
  tryFiles: readonly string[],
  part: number,
  usesPartSplit: boolean,
): Promise<string> {
  return fetchListeningTranscriptText(tryFiles, part, { usesPartSplit });
}

export function ListeningLessonView({
  partId,
  onSelectLesson,
  onTitleClick,
  isLoggedIn,
  userProfile = null,
  supabaseConfigured,
  signInNext,
}: ListeningLessonViewProps) {
  const meta = getListeningPartById(partId) ?? getListeningFeaturedPart();
  const audioRef = useRef<ArticlePassageAudioPlayerHandle>(null);
  const audioDurationRef = useRef(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const usesSevenStepFlow = meta.examSlug === "tactics-basic" || meta.examSlug === "basic-ielts-listening";
  const hasIeltsDualMode = hasListeningPartExam(meta.id);
  const [ieltsMode, setIeltsMode] = useState<"exam" | "comprehension" | null>(null);
  const { openExamHref, loginPrompt, closeLoginPrompt } = useStudyExamNav(isLoggedIn);
  const [flowContent, setFlowContent] = useState<ListeningFlowLessonContent | null>(null);
  const [flowLoading, setFlowLoading] = useState(false);
  const [flowError, setFlowError] = useState<string | null>(null);
  const { reportPlaybackProgress } = useListeningLessonProgress({
    lessonId: meta.id,
    isLoggedIn,
  });
  const onAudioTimeUpdate = useCallback(
    (seconds: number) => {
      setAudioCurrentTime(seconds);
      const duration = audioDurationRef.current;
      if (duration > 0) {
        reportPlaybackProgress(Math.min(1, seconds / duration));
      }
    },
    [reportPlaybackProgress],
  );
  const onAudioDurationChange = useCallback((seconds: number) => {
    audioDurationRef.current = seconds;
  }, []);
  const { onFlowStepChange, markAudioEnded, resetFlowAudioTracking } = useListeningFlowAudio(audioRef);
  const conversationSegments = useTacticsConversationSegments(meta.id);
  const replayConversation = useCallback(
    (conversationNumber: number) => {
      const segment = conversationSegments.get(conversationNumber);
      if (!segment) return;
      audioRef.current?.playSegment(segment.start, segment.end + 0.2);
    },
    [conversationSegments],
  );

  const [difficulty, setDifficulty] = useState<ReadingDifficulty>(() =>
    estimateListeningDifficultyFromTranscript("", meta.part, meta.examSlug),
  );

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [meta.id]);

  useEffect(() => {
    setAudioCurrentTime(0);
    audioDurationRef.current = 0;
    resetFlowAudioTracking();
    setIeltsMode(null);
    setFlowContent(null);
    setFlowLoading(false);
    setFlowError(null);
  }, [meta.part, meta.id, resetFlowAudioTracking]);

  const handleSelectExamMode = useCallback(() => {
    setIeltsMode("exam");
    openExamHref(listeningLessonExamHrefBySlug(meta.slug));
  }, [meta.slug, openExamHref]);

  const handleSelectComprehensionMode = useCallback(() => {
    setIeltsMode("comprehension");
    setFlowLoading(true);
    setFlowError(null);
    void fetch(`/api/listening/flow-content?partId=${encodeURIComponent(meta.id)}`)
      .then(async (res) => {
        const data = (await res.json()) as { content?: ListeningFlowLessonContent; error?: string };
        if (!res.ok || !data.content) {
          throw new Error(data.error ?? "Không tải được nội dung luyện nghe.");
        }
        setFlowContent(data.content);
      })
      .catch((err: unknown) => {
        setFlowError(err instanceof Error ? err.message : "Không tải được nội dung luyện nghe.");
      })
      .finally(() => {
        setFlowLoading(false);
      });
  }, [meta.id]);

  useEffect(() => {
    let cancelled = false;
    const usesPartSplit = listeningTranscriptUsesPartSplit(meta);
    void fetchTranscriptPart(meta.transcriptTryFiles, meta.part, usesPartSplit).then((plain) => {
      if (cancelled) return;
      setDifficulty(estimateListeningDifficultyFromTranscript(plain, meta.part, meta.examSlug));
    });
    return () => {
      cancelled = true;
    };
  }, [meta.part, meta.examSlug, meta.transcriptTryFiles]);

  return (
    <>
    <div className={studyHubPageBgClass}>
      <StudyHubHeader
        title="Luyện nghe"
        showListeningFilters
        onTitleClick={onTitleClick}
        isLoggedIn={isLoggedIn}
        userProfile={userProfile}
        supabaseConfigured={supabaseConfigured}
        signInNext={signInNext}
      />

      <div className={studyHubPageContentClass}>
        <div className="flex flex-col gap-6 md:gap-8">
          <ArticleAudioHeroCard
            ref={audioRef}
            title={meta.title}
            imageUrl={meta.heroImage}
            audioUrl={meta.audioPublicPath}
            metaPill={meta.metaPill}
            deck={meta.summary}
            difficulty={difficulty}
            readMin={listeningPartDurationMinutes(meta)}
            topicTags={meta.topics}
            onAudioTimeUpdate={onAudioTimeUpdate}
            onAudioDurationChange={onAudioDurationChange}
            onAudioEnded={markAudioEnded}
          />

          {usesSevenStepFlow ? (
            <ListeningSevenStepFlow
              meta={meta}
              lessonId={meta.id}
              isLoggedIn={isLoggedIn}
              audioCurrentTime={audioCurrentTime}
              onCueSeek={(cue) => {
                audioRef.current?.seekTo(cue.start);
                audioRef.current?.play();
              }}
              onStepChange={onFlowStepChange}
              onReplayConversation={replayConversation}
            />
          ) : hasIeltsDualMode ? (
            ieltsMode === null ? (
              <ListeningIeltsModePicker
                onSelectExam={handleSelectExamMode}
                onSelectComprehension={handleSelectComprehensionMode}
              />
            ) : ieltsMode === "comprehension" ? (
              flowLoading ? (
                <section className="rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm text-[#47464b] md:text-base">Đang chuẩn bị bài luyện nghe hiểu…</p>
                </section>
              ) : flowError ? (
                <section className="rounded-lg border border-[#E4E4E7] bg-white p-6 shadow-sm md:p-8">
                  <p className="text-sm text-[#47464b] md:text-base">{flowError}</p>
                </section>
              ) : flowContent ? (
                <ListeningSevenStepFlow
                  meta={meta}
                  lessonId={meta.id}
                  isLoggedIn={isLoggedIn}
                  flowLessonContent={flowContent}
                  audioCurrentTime={audioCurrentTime}
                  onCueSeek={(cue) => {
                    audioRef.current?.seekTo(cue.start);
                    audioRef.current?.play();
                  }}
                  onStepChange={onFlowStepChange}
                  onReplayConversation={replayConversation}
                />
              ) : null
            ) : null
          ) : (
            <ListeningTranscriptCard
              part={meta.part}
              partId={meta.id}
              examSlug={meta.examSlug}
              transcriptTryFiles={meta.transcriptTryFiles}
              audioCurrentTime={audioCurrentTime}
              onCueSeek={(cue) => {
                audioRef.current?.seekTo(cue.start);
                audioRef.current?.play();
              }}
            />
          )}

          <ListeningUpNextRow currentPartId={meta.id} onSelectLesson={onSelectLesson} />
        </div>
      </div>
    </div>
    {loginPrompt ? (
      <StudyLoginPrompt
        title={loginPrompt.title}
        description={loginPrompt.description}
        oauthNext={loginPrompt.oauthNext}
        supabaseConfigured={supabaseConfigured}
        onClose={closeLoginPrompt}
      />
    ) : null}
    </>
  );
}
