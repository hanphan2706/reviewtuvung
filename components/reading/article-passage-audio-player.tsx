"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Gauge, Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from "lucide-react";

const SPEEDS = [1, 1.25, 1.5, 1.75] as const;

function formatAudioTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type ArticlePassageAudioPlayerProps = {
  src: string;
  title?: string;
  /** Nằm trong hero card — bỏ viền/card riêng. */
  embedded?: boolean;
  onDurationChange?: (seconds: number) => void;
};

export function ArticlePassageAudioPlayer({
  src,
  title,
  embedded = false,
  onDurationChange,
}: ArticlePassageAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  const speed = SPEEDS[speedIdx] ?? 1;
  const progress = duration > 0 ? Math.min(1, current / duration) : 0;

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    setPlaying(false);
    setCurrent(0);
    setDuration(0);
    setReady(false);

    const onLoaded = () => {
      setDuration(audio.duration);
      setReady(true);
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        onDurationChange?.(audio.duration);
      }
    };
    const onTime = () => setCurrent(audio.currentTime);
    const onEnded = () => setPlaying(false);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audioRef.current = null;
    };
  }, [src, onDurationChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = speed;
  }, [speed]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
  }, [muted]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play().catch(() => undefined);
    else audio.pause();
  }, []);

  const seekBy = useCallback((delta: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(audio.duration)) return;
    audio.currentTime = Math.min(Math.max(0, audio.currentTime + delta), audio.duration);
  }, []);

  const onSeekBar = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !Number.isFinite(audio.duration)) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      audio.currentTime = ratio * audio.duration;
    },
    [],
  );

  const cycleSpeed = useCallback(() => {
    setSpeedIdx((i) => (i + 1) % SPEEDS.length);
  }, []);

  return (
    <div
      className={
        embedded
          ? "flex flex-col gap-1"
          : "rounded-lg border border-[#E4E4E7] bg-white px-4 py-4 shadow-sm"
      }
      aria-label={title ? `Audio: ${title}` : "Audio bài đọc"}
    >
      <div
        role="slider"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={duration}
        aria-valuenow={current}
        aria-label="Tiến độ audio"
        className="group cursor-pointer"
        onClick={onSeekBar}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") seekBy(5);
          if (e.key === "ArrowLeft") seekBy(-5);
        }}
      >
        <div className="h-1.5 overflow-hidden rounded-full bg-[#E4E4E7]">
          <div
            className="h-full rounded-full bg-[#4b2876] transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div
          className={`flex justify-between text-xs leading-none tabular-nums text-[#47464b] ${embedded ? "mt-1.5" : "mt-2"}`}
        >
          <span>{formatAudioTime(current)}</span>
          <span>{ready ? formatAudioTime(duration) : "—:—"}</span>
        </div>
      </div>

      <div className={`flex items-center justify-between gap-3 ${embedded ? "" : "mt-4"}`}>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={cycleSpeed}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#47464b] transition hover:text-[#4b2876]"
            title="Tốc độ đọc"
          >
            <Gauge className="size-4 shrink-0" aria-hidden />
            <span>{speed}x</span>
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="inline-flex size-9 items-center justify-center rounded-full text-[#47464b] transition hover:bg-[#f7f3f2] hover:text-[#4b2876]"
            aria-label={muted ? "Bật âm thanh" : "Tắt âm thanh"}
          >
            {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => seekBy(-10)}
            className="inline-flex size-8 items-center justify-center rounded-full text-[#47464b] transition hover:bg-[#f7f3f2]"
            aria-label="Lùi 10 giây"
          >
            <span className="relative flex size-6 items-center justify-center">
              <RotateCcw className="size-6 stroke-[1.5]" aria-hidden />
              <span className="absolute text-[8px] font-bold leading-none">10</span>
            </span>
          </button>

          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex size-11 items-center justify-center rounded-full bg-[#1c1b1c] text-white shadow-md transition hover:bg-[#333]"
            aria-label={playing ? "Tạm dừng" : "Phát"}
          >
            {playing ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current pl-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => seekBy(30)}
            className="inline-flex size-8 items-center justify-center rounded-full text-[#47464b] transition hover:bg-[#f7f3f2]"
            aria-label="Tới 30 giây"
          >
            <span className="relative flex size-6 items-center justify-center">
              <RotateCw className="size-6 stroke-[1.5]" aria-hidden />
              <span className="absolute text-[8px] font-bold leading-none">30</span>
            </span>
          </button>
        </div>

        <div className="w-[4.5rem]" aria-hidden />
      </div>
    </div>
  );
}
