import { useCallback, useRef, type RefObject } from "react";
import type { ArticlePassageAudioPlayerHandle } from "@/components/reading/article-passage-audio-player";
import type { ListeningSevenStepId } from "@/lib/listening/listening-seven-steps";

export function useListeningFlowAudio(audioRef: RefObject<ArticlePassageAudioPlayerHandle | null>) {
  const audioEndedRef = useRef(false);
  const prevStepRef = useRef<ListeningSevenStepId>(1);

  const markAudioEnded = useCallback(() => {
    audioEndedRef.current = true;
  }, []);

  const resetFlowAudioTracking = useCallback(() => {
    prevStepRef.current = 1;
    audioEndedRef.current = false;
  }, []);

  const onFlowStepChange = useCallback(
    (step: ListeningSevenStepId) => {
      const prev = prevStepRef.current;
      if (prev === step) return;

      prevStepRef.current = step;
      const player = audioRef.current;
      if (!player) return;

      if (step === 1) {
        player.resetToStart();
        audioEndedRef.current = false;
        return;
      }

      if (step === 2 && prev === 1) {
        player.resetAndPlay();
        audioEndedRef.current = false;
        return;
      }

      if (step === 3 && prev === 2) {
        if (!audioEndedRef.current) {
          player.resetToStart();
        }
        return;
      }

      if (step === 4 && prev !== 4) {
        player.resetAndPlay();
        audioEndedRef.current = false;
        return;
      }

      if (step === 5 && prev < 5) {
        player.resetAndPlay();
        audioEndedRef.current = false;
      }
    },
    [audioRef],
  );

  return {
    onFlowStepChange,
    markAudioEnded,
    resetFlowAudioTracking,
  };
}
