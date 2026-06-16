"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { WordRichDisplay } from "@/components/word-rich-display";
import { useListeningCopyFriction } from "@/hooks/use-listening-copy-friction";
import { LISTENING_PARTS_PILOT, getListeningPartOrDefault, getListeningTestContext } from "@/lib/listening/content-manifest";
import { listeningTranscriptPlainToSafeHtml } from "@/lib/listening/transcript-to-display-html";

type Step = "predict" | "listen" | "afterListen" | "reflection" | "transcript" | "selfAssess";

const REFLECTION_OPTIONS = [
  { id: "keyword", label: "Bạn nghe được ý hay chỉ bắt keyword?" },
  { id: "speed_vocab", label: "Bạn bị miss vì tốc độ hay từ vựng?" },
  { id: "translate_head", label: "Bạn có phải dịch trong đầu không?" },
  { id: "lost_focus", label: "Bạn có bị mất tập trung giữa chừng không?" },
  { id: "word_not_meaning", label: "Bạn nghe được từ nhưng không hiểu ý?" },
  { id: "guess_early", label: "Bạn có đoán quá sớm không?" },
] as const;

const SELF_OPTIONS = [
  { id: "natural", label: "Nghe khá tự nhiên", emoji: "⚡" },
  { id: "slow_meaning", label: "Hiểu ý nhưng hơi chậm", emoji: "🤔" },
  { id: "words_gap", label: "Nghe được từ nhưng khó nối ý", emoji: "🧠" },
  { id: "overload", label: "Bị overload", emoji: "😵" },
  { id: "lost", label: "Mất ý hoàn toàn", emoji: "❌" },
] as const;

async function fetchTranscriptPart(tryFiles: readonly string[], part: number): Promise<string> {
  for (const file of tryFiles) {
    const url = `/api/listening/transcript?file=${encodeURIComponent(file)}&part=${part}`;
    const res = await fetch(url);
    if (!res.ok) continue;
    const data = (await res.json()) as { text?: string; missing?: boolean };
    if (data.text && data.text.length > 0) return data.text;
  }
  return "";
}

function ListeningIntroClip({ src }: { src: string | undefined }) {
  const [missing, setMissing] = useState(false);
  if (!src) return null;
  if (missing) {
    return (
      <p className="text-xs text-zinc-500">
        Chưa có hoặc không đọc được file intro — thêm file theo đường dẫn trong manifest (ví dụ{" "}
        <code className="text-ink">Test1-intro.mp3</code>) hoặc bỏ trường <code className="text-ink">introAudioPublicPath</code>.
      </p>
    );
  }
  return (
    <div className="space-y-2 rounded-xl border border-zinc-100 bg-white/80 p-4 shadow-sm">
      <p className="text-sm font-medium text-ink">Đoạn mở ngắn (tuỳ chọn)</p>
      <p className="text-xs text-zinc-500">
        File do bạn tự cắt/export (10–30s) từ audio đầy đủ — app không tự cắt trong code.
      </p>
      <audio controls className="w-full max-w-md" preload="metadata" onError={() => setMissing(true)}>
        <source src={src} type="audio/mpeg" />
        <track
          kind="captions"
          src="/listening-assets/cam19/pilot-placeholder.vtt"
          srcLang="vi"
          label="Ghi chú pilot"
          default
        />
      </audio>
    </div>
  );
}

export function ListeningPilotSession() {
  const [part, setPart] = useState(1);
  const meta = useMemo(() => getListeningPartOrDefault(part), [part]);
  const testCtx = useMemo(() => getListeningTestContext(meta.contextKey), [meta.contextKey]);
  const [step, setStep] = useState<Step>("predict");
  const [predictTopic, setPredictTopic] = useState("");
  const [remember, setRemember] = useState("");
  const [speakerIssue, setSpeakerIssue] = useState("");
  const [summary, setSummary] = useState("");
  const [attitude, setAttitude] = useState("");
  const [reflection, setReflection] = useState<Record<string, boolean>>({});
  const [transcriptText, setTranscriptText] = useState("");
  const [transcriptLoading, setTranscriptLoading] = useState(false);
  const [transcriptError, setTranscriptError] = useState(false);
  const [selfChoice, setSelfChoice] = useState<string | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const transcriptHtml = useMemo(
    () => (transcriptText ? listeningTranscriptPlainToSafeHtml(transcriptText) : ""),
    [transcriptText],
  );

  useListeningCopyFriction(transcriptRef, step === "transcript" && Boolean(transcriptHtml));

  const audioSrc = meta.audioPublicPath;

  const resetForPart = useCallback((p: number) => {
    setPart(p);
    setStep("predict");
    setPredictTopic("");
    setRemember("");
    setSpeakerIssue("");
    setSummary("");
    setAttitude("");
    setReflection({});
    setTranscriptText("");
    setTranscriptError(false);
    setSelfChoice(null);
  }, []);

  useEffect(() => {
    if (step !== "transcript") return;
    let cancelled = false;
    setTranscriptLoading(true);
    setTranscriptError(false);
    void fetchTranscriptPart(meta.transcriptTryFiles, part).then((text) => {
      if (cancelled) return;
      setTranscriptLoading(false);
      if (!text) setTranscriptError(true);
      setTranscriptText(text);
    });
    return () => {
      cancelled = true;
    };
  }, [step, part, meta.transcriptTryFiles]);

  const toggleReflection = (id: string) => {
    setReflection((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const fieldClass =
    "mt-1 w-full rounded-xl border border-zinc-200/90 bg-white px-3 py-2.5 text-[15px] text-ink outline-none ring-zinc-300/80 placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-1";

  return (
    <div className="space-y-8 text-[15px] leading-relaxed text-ink-muted">
      <p className="text-ink">
        Pilot <strong>Cam 19 · Test {meta.test}</strong> — chọn Part (1–4), làm từng bước. Thêm bài mới: sửa{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-ink">lib/listening/content-manifest.ts</code>{" "}
        + file transcript trong <code className="text-sm">transcript/</code>. API tự lọc dòng rác — không cần chạy{" "}
        <code className="text-sm">transcript:clean</code> trước (script chỉ để file trên đĩa gọn hơn). Audio:{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-ink">public/listening-assets/cam19/</code>{" "}
        (tên giống zip, ví dụ <code className="text-sm">Test1 Part1.mp3</code>).
      </p>

      <div className="flex flex-wrap gap-2">
        {LISTENING_PARTS_PILOT.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => resetForPart(p.part)}
            className={`rounded-xl border px-3 py-1.5 text-sm font-semibold transition ${
              part === p.part
                ? "border-[#4b2876] bg-[#4b2876] text-white"
                : "border-zinc-200 bg-white text-ink shadow-sm hover:bg-zinc-50"
            }`}
          >
            Part {p.part}
          </button>
        ))}
      </div>

      <section className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Bước hiện tại</p>
        <p className="mt-1 font-medium text-ink">
          {step === "predict" && "1 — Trước khi nghe: gợi ý + dự đoán"}
          {step === "listen" && "2 — Nghe"}
          {step === "afterListen" && "3 — Sau khi nghe"}
          {step === "reflection" && "4 — Phản ánh (metacognition)"}
          {step === "transcript" && "5 — Transcript (đối chiếu)"}
          {step === "selfAssess" && "6 — Tự đánh giá"}
        </p>
      </section>

      {step === "predict" && (
        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-ink">{testCtx.predictTitle}</p>
            <div className="text-[15px] leading-relaxed text-ink-muted [&_b]:font-semibold [&_strong]:font-semibold">
              <WordRichDisplay html={testCtx.predictBlurb} as="div" />
            </div>
          </div>

          <ListeningIntroClip src={testCtx.introAudioPublicPath} />

          <label className="block font-medium text-ink">
            Bạn dự đoán chủ đề / tình huống cụ thể hơn là gì? (viết ngắn cũng được)
            <textarea
              className={`${fieldClass} min-h-[5.5rem]`}
              value={predictTopic}
              onChange={(e) => setPredictTopic(e.target.value)}
              rows={4}
              placeholder="Ví dụ: gọi đặt chỗ tham quan, hỏi giá vé…"
            />
          </label>
          <button
            type="button"
            onClick={() => setStep("listen")}
            className="rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Tiếp theo — nghe bản đầy đủ
          </button>
        </section>
      )}

      {step === "listen" && (
        <section className="space-y-4">
          <audio controls className="w-full max-w-md" preload="metadata">
            <source src={audioSrc} type="audio/mpeg" />
            <track
              kind="captions"
              src="/listening-assets/cam19/pilot-placeholder.vtt"
              srcLang="vi"
              label="Ghi chú pilot"
              default
            />
            Trình duyệt không hỗ trợ audio.
          </audio>
          <p className="text-sm text-zinc-500">
            Nếu không phát được, kiểm tra đã copy đúng file MP3 vào{" "}
            <code className="text-ink">public/listening-assets/cam19/</code> chưa.
          </p>
          <button
            type="button"
            onClick={() => setStep("afterListen")}
            className="rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Đã nghe xong — trả lời câu hỏi
          </button>
        </section>
      )}

      {step === "afterListen" && (
        <section className="space-y-5">
          <label className="block font-medium text-ink">
            Bạn nhớ được gì?
            <textarea className={`${fieldClass} min-h-[4rem]`} value={remember} onChange={(e) => setRemember(e.target.value)} rows={3} />
          </label>
          <label className="block font-medium text-ink">
            Người nói đang gặp vấn đề / tình huống gì?
            <textarea className={`${fieldClass} min-h-[4rem]`} value={speakerIssue} onChange={(e) => setSpeakerIssue(e.target.value)} rows={3} />
          </label>
          <label className="block font-medium text-ink">
            Tóm tắt bằng tiếng Việt hoặc Anh.
            <textarea className={`${fieldClass} min-h-[5rem]`} value={summary} onChange={(e) => setSummary(e.target.value)} rows={4} />
          </label>
          <label className="block font-medium text-ink">
            Người nói có thái độ như thế nào?
            <textarea className={`${fieldClass} min-h-[3.5rem]`} value={attitude} onChange={(e) => setAttitude(e.target.value)} rows={3} />
          </label>
          <button
            type="button"
            onClick={() => setStep("reflection")}
            className="rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Tiếp — phản ánh
          </button>
        </section>
      )}

      {step === "reflection" && (
        <section className="space-y-4">
          <p className="font-medium text-ink">Chọn những dòng nào đúng với bạn (có thể nhiều ô):</p>
          <ul className="space-y-2">
            {REFLECTION_OPTIONS.map((opt) => (
              <li key={opt.id}>
                <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-zinc-200/80 bg-white px-3 py-2 text-ink shadow-sm">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 rounded border-zinc-300"
                    checked={Boolean(reflection[opt.id])}
                    onChange={() => toggleReflection(opt.id)}
                  />
                  <span>{opt.label}</span>
                </label>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setStep("transcript")}
            className="rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Xem transcript (đối chiếu)
          </button>
        </section>
      )}

      {step === "transcript" && (
        <section className="space-y-4">
          {transcriptLoading && <p>Đang tải transcript…</p>}
          {transcriptError && !transcriptLoading && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
              Chưa đọc được transcript cho Part {part}. Hãy chạy app trên máy bạn, đặt file trong{" "}
              <code className="font-mono text-xs">reviewtuvung/transcript/</code> (ví dụ{" "}
              <code className="font-mono text-xs">cam19-test1.cleaned.txt</code>) rồi tải lại trang.
            </p>
          )}
          {!transcriptLoading && transcriptHtml ? (
            <div
              ref={transcriptRef}
              className="max-h-[min(70vh,28rem)] overflow-auto rounded-xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-ink select-text"
            >
              <WordRichDisplay
                html={transcriptHtml}
                as="div"
                className="word-rich-html [&_*]:text-inherit [&_b]:font-bold [&_strong]:font-bold [&_span]:text-inherit"
              />
            </div>
          ) : null}
          <button
            type="button"
            disabled={transcriptLoading}
            onClick={() => setStep("selfAssess")}
            className="rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white shadow-sm disabled:opacity-50"
          >
            Tiếp — tự đánh giá
          </button>
        </section>
      )}

      {step === "selfAssess" && (
        <section className="space-y-4">
          <p className="font-medium text-ink">Bạn cảm thấy mức độ nào gần nhất với buổi nghe vừa rồi?</p>
          <div className="flex flex-col gap-2">
            {SELF_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelfChoice(opt.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  selfChoice === opt.id
                    ? "border-[#4b2876] bg-violet-50 text-[#4b2876]"
                    : "border-zinc-200 bg-white text-ink shadow-sm hover:bg-zinc-50"
                }`}
              >
                <span aria-hidden>{opt.emoji}</span> {opt.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            (Phiên bản pilot chưa có “listening diagnosis” tự động — có thể thêm sau dựa trên replay / mở transcript.)
          </p>
          <button
            type="button"
            onClick={() => resetForPart(part)}
            className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-sm"
          >
            Làm lại Part {part}
          </button>
        </section>
      )}
    </div>
  );
}
