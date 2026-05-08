"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUp, Loader2, Mic, Square } from "lucide-react";

type ActiveLearningDraftSectionProps = {
  draft: string;
  onDraftChange: (value: string) => void;
  inputId: string;
  voiceDisabled?: boolean;
  /** Nút gửi trong khung (ẩn khi không truyền, ví dụ đã mở feedback). */
  onSubmit?: () => void;
  submitDisabled?: boolean;
  /** Ô nhập kiểu thanh pill tối (giống ChatGPT). */
  variant?: "default" | "chatDark";
};

function pickMimeType(): string {
  if (typeof MediaRecorder === "undefined") return "audio/webm";
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"];
  for (const t of candidates) {
    if (MediaRecorder.isTypeSupported(t)) return t;
  }
  return "";
}

type SpeechRecognitionResultList = {
  length: number;
  [i: number]: { isFinal: boolean; 0: { transcript: string } };
};

type SpeechRecognitionResultEvent = {
  resultIndex: number;
  results: SpeechRecognitionResultList;
};

type SpeechRecognitionEngine = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((e: SpeechRecognitionResultEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

function getSpeechRecognition(): SpeechRecognitionEngine | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionEngine;
    webkitSpeechRecognition?: new () => SpeechRecognitionEngine;
  };
  const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
  if (!Ctor) return null;
  return new Ctor();
}

/** Số chấm sóng (cuộn phải → trái, mở rộng theo thời gian ghi). */
const VIZ_SEGMENTS = 24;
/** ~8.4s để vùng sóng trải đủ 24 chấm (tuỳ chỉnh tốc độ “chạy”). */
const WAVE_SLOT_MS = 350;

function levelFromTimeDomain(td: Uint8Array): number {
  let sum = 0;
  for (let i = 0; i < td.length; i++) {
    const v = (td[i]! - 128) / 128;
    sum += v * v;
  }
  const rms = Math.sqrt(sum / td.length);
  return Math.min(1, rms * 3.2);
}

/** Cùng cap-height với textarea một dòng (`leading-[22px]`). */
const WAVE_ROW_H = "h-[22px]";

function MicSpectrumDots({ levels, darkSurface }: { levels: number[]; darkSurface?: boolean }) {
  const slice =
    levels.length >= VIZ_SEGMENTS ? levels.slice(0, VIZ_SEGMENTS) : [...levels, ...Array(VIZ_SEGMENTS - levels.length).fill(0)];
  const peak = slice.reduce((a, b) => Math.max(a, b), 0);
  /** Chưa có đủ tín hiệu — chấm “thở” nhẹ thay vì nằm im. */
  const idleMotion = peak < 0.055;
  return (
    <output className={`flex ${WAVE_ROW_H} w-full min-w-0 items-center justify-center`} aria-live="polite">
      <span className="sr-only">Đang thu âm thanh</span>
      <span className="inline-flex items-center justify-center gap-0.5" aria-hidden>
        {slice.map((lvl, i) => {
          const d = idleMotion ? 4 : Math.max(3, Math.round(3 + lvl * 5));
          return (
            <span
              key={`mic-dot-${i}`}
              className={`shrink-0 rounded-full ${darkSurface ? "bg-violet-400/85" : "bg-[#4b2876]/85"} ${idleMotion ? "animate-al-dots-idle" : ""}`}
              style={
                idleMotion
                  ? {
                      animationDelay: `${(i % 12) * 55}ms`,
                      width: "4px",
                      height: "4px",
                    }
                  : { width: `${d}px`, height: `${d}px`, opacity: 0.32 + lvl * 0.68 }
              }
            />
          );
        })}
      </span>
    </output>
  );
}

export function ActiveLearningDraftSection({
  draft,
  onDraftChange,
  inputId,
  voiceDisabled = false,
  onSubmit,
  submitDisabled = false,
  variant = "default",
}: ActiveLearningDraftSectionProps) {
  const chatDark = variant === "chatDark";
  const [textareaFocused, setTextareaFocused] = useState(false);
  const [whisperConfigured, setWhisperConfigured] = useState<boolean | null>(null);
  const [voicePhase, setVoicePhase] = useState<
    "idle" | "recording" | "transcribing" | "listening_browser"
  >("idle");
  const [voiceHint, setVoiceHint] = useState<string | null>(null);
  /** True khi có xuống dòng hoặc text wrap quá một dòng — chuyển mic + gửi xuống hàng dưới. */
  const [multiline, setMultiline] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionEngine | null>(null);
  const speechFinalRef = useRef("");
  const [vizLevels, setVizLevels] = useState<number[]>(() => Array.from({ length: VIZ_SEGMENTS }, () => 0));
  const rafRef = useRef(0);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timeDomainBufRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const vizStreamRef = useRef<MediaStream | null>(null);
  const waveHistoryRef = useRef<number[]>(Array.from({ length: VIZ_SEGMENTS }, () => 0));
  const recordingT0Ref = useRef(0);
  const voicePhaseRef = useRef(voicePhase);

  useEffect(() => {
    voicePhaseRef.current = voicePhase;
  }, [voicePhase]);

  useEffect(() => {
    let cancelled = false;
    void fetch("/api/transcribe")
      .then((r) => r.json())
      .then((d: { configured?: boolean }) => {
        if (!cancelled) setWhisperConfigured(Boolean(d?.configured));
      })
      .catch(() => {
        if (!cancelled) setWhisperConfigured(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const appendText = useCallback(
    (snippet: string) => {
      const t = snippet.trim();
      if (!t) return;
      onDraftChange(draft.trim() ? `${draft.trim()} ${t}` : t);
    },
    [draft, onDraftChange],
  );

  useEffect(() => {
    return () => {
      const tracks = streamRef.current?.getTracks() ?? [];
      for (const tr of tracks) tr.stop();
      try {
        recognitionRef.current?.abort();
      } catch {
        try {
          recognitionRef.current?.stop();
        } catch {
          /* ignore */
        }
      }
    };
  }, []);

  const syncTextareaHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const cs = getComputedStyle(el);
    const lineHeightPx = Number.parseFloat(cs.lineHeight);
    const lineHeight = Number.isFinite(lineHeightPx) ? lineHeightPx : 22;
    const padY = (Number.parseFloat(cs.paddingTop) || 0) + (Number.parseFloat(cs.paddingBottom) || 0);
    const singleLineOuter = Math.ceil(lineHeight + padY);
    const scroll = el.scrollHeight;
    el.style.height = `${Math.min(Math.max(scroll, singleLineOuter), 200)}px`;
  }, []);

  useLayoutEffect(() => {
    syncTextareaHeight();
  }, [draft, multiline, syncTextareaHeight]);

  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    if (el.value.trim() === "") {
      queueMicrotask(() => setMultiline(false));
      return;
    }
    const cs = getComputedStyle(el);
    const lineHeightPx = Number.parseFloat(cs.lineHeight);
    const lineHeight = Number.isFinite(lineHeightPx) ? lineHeightPx : 22;
    const padY = (Number.parseFloat(cs.paddingTop) || 0) + (Number.parseFloat(cs.paddingBottom) || 0);
    const singleLineOuter = Math.ceil(lineHeight + padY);
    const wrappedOrBreak =
      el.value.includes("\n") || Math.ceil(el.scrollHeight) > singleLineOuter + 4;
    queueMicrotask(() => setMultiline(wrappedOrBreak));
  }, [draft, syncTextareaHeight]);

  const teardownVisualizer = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    try {
      sourceNodeRef.current?.disconnect();
    } catch {
      /* ignore */
    }
    sourceNodeRef.current = null;
    analyserRef.current = null;
    timeDomainBufRef.current = null;
    waveHistoryRef.current.fill(0);
    setVizLevels(Array.from({ length: VIZ_SEGMENTS }, () => 0));
  }, []);

  const setupVisualizer = useCallback(
    (stream: MediaStream) => {
      teardownVisualizer();
      try {
        if (typeof window === "undefined") return;
        const w = window as unknown as {
          AudioContext: typeof AudioContext;
          webkitAudioContext?: typeof AudioContext;
        };
        const AC = w.AudioContext ?? w.webkitAudioContext;
        if (!AC) return;
        const ctx = audioCtxRef.current ?? new AC();
        audioCtxRef.current = ctx;
        void ctx.resume();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.55;
        const source = ctx.createMediaStreamSource(stream);
        source.connect(analyser);
        sourceNodeRef.current = source;
        analyserRef.current = analyser;
        waveHistoryRef.current = Array.from({ length: VIZ_SEGMENTS }, () => 0);
        recordingT0Ref.current = performance.now();
        timeDomainBufRef.current = new Uint8Array(analyser.fftSize) as Uint8Array<ArrayBuffer>;
        const loop = () => {
          const a = analyserRef.current;
          const td = timeDomainBufRef.current;
          const hist = waveHistoryRef.current;
          if (!a || !td || hist.length !== VIZ_SEGMENTS) return;
          a.getByteTimeDomainData(td);
          const level = levelFromTimeDomain(td);
          const elapsed = performance.now() - recordingT0Ref.current;
          const visible = Math.min(VIZ_SEGMENTS, Math.max(1, Math.ceil(elapsed / WAVE_SLOT_MS)));
          const start = VIZ_SEGMENTS - visible;
          for (let i = start; i < VIZ_SEGMENTS - 1; i++) {
            hist[i] = hist[i + 1]!;
          }
          hist[VIZ_SEGMENTS - 1] = level;
          for (let i = 0; i < start; i++) {
            hist[i] = 0;
          }
          setVizLevels([...hist]);
          rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
      } catch {
        /* ignore */
      }
    },
    [teardownVisualizer],
  );

  useEffect(() => {
    return () => {
      teardownVisualizer();
      for (const t of vizStreamRef.current?.getTracks() ?? []) t.stop();
      vizStreamRef.current = null;
    };
  }, [teardownVisualizer]);

  const startBrowserListening = useCallback(() => {
    const rec = getSpeechRecognition();
    if (!rec) {
      setVoiceHint("Trình duyệt không hỗ trợ nhận giọng — vui lòng gõ hoặc dùng Chrome/Edge.");
      return;
    }
    speechFinalRef.current = "";
    setVoiceHint(null);
    setVoicePhase("listening_browser");

    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    rec.onresult = (event: SpeechRecognitionResultEvent) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          speechFinalRef.current += event.results[i][0]?.transcript ?? "";
        }
      }
    };
    rec.onerror = () => {
      teardownVisualizer();
      for (const tr of vizStreamRef.current?.getTracks() ?? []) tr.stop();
      vizStreamRef.current = null;
      setVoiceHint(null);
      setVoicePhase("idle");
      recognitionRef.current = null;
    };
    rec.onend = () => {
      teardownVisualizer();
      for (const tr of vizStreamRef.current?.getTracks() ?? []) tr.stop();
      vizStreamRef.current = null;
      recognitionRef.current = null;
      setVoicePhase("idle");
      setVoiceHint(null);
      const t = speechFinalRef.current.trim();
      speechFinalRef.current = "";
      if (t) appendText(t);
    };

    recognitionRef.current = rec;
    try {
      rec.start();
      void (async () => {
        try {
          const s = await navigator.mediaDevices.getUserMedia({ audio: true });
          if (!recognitionRef.current || voicePhaseRef.current !== "listening_browser") {
            for (const tr of s.getTracks()) tr.stop();
            return;
          }
          for (const tr of vizStreamRef.current?.getTracks() ?? []) tr.stop();
          vizStreamRef.current = s;
          setupVisualizer(s);
        } catch {
          /* Luồng thứ hai có thể bị từ chối — sóng dùng fallback trong MicSpectrumBars */
        }
      })();
    } catch {
      setVoiceHint("Không bật được nhận giọng — kiểm tra quyền micro.");
      setVoicePhase("idle");
      recognitionRef.current = null;
    }
  }, [appendText, setupVisualizer, teardownVisualizer]);

  const stopBrowserListening = useCallback(() => {
    teardownVisualizer();
    for (const tr of vizStreamRef.current?.getTracks() ?? []) tr.stop();
    vizStreamRef.current = null;
    const rec = recognitionRef.current;
    if (!rec) return;
    try {
      rec.stop();
    } catch {
      try {
        rec.abort();
      } catch {
        /* ignore */
      }
    }
  }, [teardownVisualizer]);

  const startFileRecording = useCallback(async () => {
    setVoiceHint(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setupVisualizer(stream);
      chunksRef.current = [];
      const mime = pickMimeType();
      const mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);

      mr.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mr.onstop = async () => {
        teardownVisualizer();
        for (const tr of stream.getTracks()) tr.stop();
        streamRef.current = null;
        const blob = new Blob(chunksRef.current, { type: mr.mimeType || "audio/webm" });
        chunksRef.current = [];
        mediaRecorderRef.current = null;

        setVoicePhase("transcribing");
        try {
          const fd = new FormData();
          fd.append("file", blob, "speech.webm");
          const res = await fetch("/api/transcribe", { method: "POST", body: fd });
          const data = (await res.json()) as { text?: string };

          if (res.ok && typeof data.text === "string") {
            const text = data.text.trim();
            if (text) {
              appendText(text);
              setVoicePhase("idle");
              return;
            }
            setVoiceHint("Không nhận được lời nói — thử nhận giọng trình duyệt (nhấn mic).");
            setVoicePhase("idle");
            startBrowserListening();
            return;
          }
        } catch {
          /* fall through */
        }
        setVoicePhase("idle");
        startBrowserListening();
      };

      mr.start(200);
      mediaRecorderRef.current = mr;
      setVoicePhase("recording");
    } catch {
      setVoiceHint("Không truy cập được micro.");
      startBrowserListening();
    }
  }, [appendText, setupVisualizer, startBrowserListening, teardownVisualizer]);

  const stopFileRecording = useCallback(() => {
    const mr = mediaRecorderRef.current;
    if (mr && mr.state !== "inactive") {
      try {
        mr.stop();
      } catch {
        /* ignore */
      }
    }
  }, []);

  const toggleMic = useCallback(() => {
    if (voiceDisabled) return;
    if (voicePhase === "transcribing") return;

    if (voicePhase === "recording") {
      stopFileRecording();
      return;
    }
    if (voicePhase === "listening_browser") {
      stopBrowserListening();
      return;
    }

    if (whisperConfigured) {
      void startFileRecording();
      return;
    }
    startBrowserListening();
  }, [
    voiceDisabled,
    voicePhase,
    whisperConfigured,
    startFileRecording,
    stopFileRecording,
    startBrowserListening,
    stopBrowserListening,
  ]);

  const micBusy = voicePhase === "transcribing";
  const micActive = voicePhase === "recording" || voicePhase === "listening_browser";
  const showListeningWave = micActive && !micBusy;

  const draftEmpty = draft.trim() === "";
  const showExampleBehindTextarea = draftEmpty && !textareaFocused && !showListeningWave;

  const showSubmit = typeof onSubmit === "function";

  const micAria =
    voicePhase === "recording"
      ? "Dừng ghi âm"
      : voicePhase === "listening_browser"
        ? "Dừng và lấy chữ"
        : micBusy
          ? "Đang xử lý"
          : whisperConfigured
            ? "Ghi âm"
            : "Nói để nhận chữ";

  const btnIcon = "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition";

  /**
   * Một dòng: bọc flex items-center + textarea py-0 + leading cố định — Chrome/macOS căn chữ trong ô cao min-h-10 ổn định hơn là chỉ padding.
   */
  const singleLineTextareaClasses = chatDark
    ? "min-h-0 w-full flex-1 resize-none appearance-none border-0 bg-transparent py-0 text-sm leading-[22px] text-zinc-100 outline-none placeholder:text-zinc-500 focus:ring-0 focus-visible:outline-none sm:text-[15px]"
    : "min-h-0 w-full flex-1 resize-none appearance-none border-0 bg-transparent py-0 text-sm leading-[22px] text-ink outline-none focus:ring-0 focus-visible:outline-none sm:text-[15px]";

  /** Nhiều dòng: line-height đồng bộ; padding dọc đưa vào vỏ (shell) để khỏi lệch baseline. */
  const multilineTextareaClasses = chatDark
    ? "min-h-11 w-full resize-none appearance-none border-0 bg-transparent px-0 py-0 text-sm leading-[22px] text-zinc-100 outline-none placeholder:text-zinc-500 focus:ring-0 sm:text-[15px]"
    : "min-h-11 w-full resize-none appearance-none border-0 bg-transparent px-0 py-0 text-sm leading-[22px] text-ink outline-none focus:ring-0 sm:text-[15px]";

  const textareaShell = (
    <div
      className={
        multiline
          ? "relative min-w-0 overflow-hidden px-3 pb-1 pt-2.5"
          : "relative flex min-h-10 min-w-0 flex-1 items-center overflow-hidden"
      }
    >
      {draftEmpty && !showListeningWave ? (
        <p
          className={`pointer-events-none absolute inset-y-0 left-0 right-1 z-0 flex items-center text-left text-sm italic leading-[22px] sm:text-[15px] ${multiline ? "hidden" : ""} ${showExampleBehindTextarea ? (chatDark ? "text-zinc-500" : "text-ink-muted") : "text-transparent"}`}
          aria-hidden
        >
          <span className="min-w-0 truncate">Ví dụ: I tried to blend in with the crowd.</span>
        </p>
      ) : null}
      <textarea
        ref={textareaRef}
        id={inputId}
        value={draft}
        onChange={(e) => {
          onDraftChange(e.target.value);
          requestAnimationFrame(syncTextareaHeight);
        }}
        onFocus={() => setTextareaFocused(true)}
        onBlur={() => setTextareaFocused(false)}
        rows={1}
        spellCheck
        lang="en"
        className={`relative z-10 box-border ${multiline ? multilineTextareaClasses : singleLineTextareaClasses} ${draftEmpty && !textareaFocused && !showListeningWave ? "" : chatDark ? "bg-transparent" : "bg-white"} ${showListeningWave ? "opacity-0 caret-transparent" : ""}`}
      />
      {showListeningWave ? (
        <div
          className={`pointer-events-none absolute inset-0 z-20 ${chatDark ? "bg-[#2f2f2f]" : "bg-white"} ${
            multiline ? "pt-2.5 px-3" : "flex min-h-10 items-center"
          }`}
        >
          <div className="w-full min-w-0">
            <MicSpectrumDots levels={vizLevels} darkSurface={chatDark} />
          </div>
        </div>
      ) : null}
    </div>
  );

  const micButton = (
    <div className="group relative flex flex-col items-center">
      <button
        type="button"
        onClick={toggleMic}
        disabled={voiceDisabled || micBusy}
        aria-label={micAria}
        title={voicePhase === "idle" && !voiceDisabled ? "Ghi âm" : undefined}
        className={`${btnIcon} border-0 outline-none ring-offset-0 [-webkit-tap-highlight-color:transparent] focus-visible:outline-none focus-visible:ring-0 ${
          chatDark
            ? micActive
              ? "bg-white/15 text-zinc-100 shadow-none ring-1 ring-white/25 hover:bg-white/20"
              : "text-zinc-400 hover:bg-white/10 hover:text-zinc-100"
            : micActive
              ? "bg-white text-zinc-600 shadow-sm ring-1 ring-zinc-200/90 hover:bg-zinc-50"
              : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700"
        } disabled:opacity-50`}
      >
        {micBusy ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
        ) : micActive ? (
          <Square className="h-3.5 w-3.5 fill-current" strokeWidth={2} />
        ) : (
          <Mic className="h-4 w-4" strokeWidth={2} />
        )}
      </button>
      {!micBusy && !micActive ? (
        <span className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] z-30 block -translate-x-1/2 whitespace-nowrap rounded-md border-0 bg-zinc-800 px-2 py-1 text-[10px] font-medium leading-none text-white opacity-0 shadow-none ring-0 outline-none transition-opacity duration-150 group-hover:opacity-100">
          Ghi âm
        </span>
      ) : null}
    </div>
  );

  const cantSend = submitDisabled || draft.trim() === "";
  const submitButton = showSubmit ? (
    <button
      type="button"
      onClick={() => {
        if (!draft.trim()) return;
        onSubmit?.();
      }}
      disabled={cantSend}
      aria-label="Gửi và xem gợi ý"
      className={`${btnIcon} shadow-sm transition active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 ${
        chatDark
          ? "bg-white text-zinc-900 hover:bg-zinc-200"
          : "bg-[#4b2876] text-white hover:bg-[#3d1f62]"
      } ${multiline ? "" : "mr-px"}`}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={2.5} aria-hidden />
    </button>
  ) : null;

  return (
    <div className="space-y-3">
      <div
        className={
          chatDark
            ? multiline
              ? "flex w-full min-w-0 flex-col rounded-[22px] bg-[#2f2f2f] py-1 shadow-none ring-0"
              : "flex w-full min-w-0 items-center gap-1 rounded-[999px] bg-[#2f2f2f] py-1.5 pl-3 pr-1.5 shadow-none ring-0"
            : multiline
              ? "flex w-full min-w-0 flex-col rounded-[22px] border border-zinc-200/90 bg-white shadow-sm ring-1 ring-zinc-950/5"
              : "flex w-full min-w-0 items-center gap-1 rounded-full border border-zinc-200/90 bg-white py-1 pl-3 pr-1.5 shadow-sm ring-1 ring-zinc-950/5"
        }
      >
        <label htmlFor={inputId} className="sr-only">
          Ví dụ của bạn
        </label>
        {multiline ? (
          <>
            {textareaShell}
            <div className="flex min-w-0 items-center justify-end gap-1.5 pb-2 pr-2 pt-1">
              {micButton}
              {submitButton}
            </div>
          </>
        ) : (
          <>
            {textareaShell}
            {micButton}
            {submitButton}
          </>
        )}
      </div>

      {voiceHint ? (
        <p className={`text-[11px] leading-snug sm:text-xs ${chatDark ? "text-amber-300/95" : "text-amber-800"}`}>
          {voiceHint}
        </p>
      ) : null}

      <p className={`text-[11px] leading-relaxed sm:text-xs ${chatDark ? "text-zinc-500" : "text-ink-muted"}`}>
        *Hiện tại hệ thống chỉ nhận diện tiếng Anh. Nếu chữ không khớp, bạn có thể tự chỉnh lại trước khi gửi.
      </p>
    </div>
  );
}
