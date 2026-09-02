"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { ClassroomAssignmentWithMeta } from "@/lib/classroom/types";

type DocPayload = {
  id: string;
  url: string;
  embedUrl: string;
};

function useIsMobileViewport(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export function HomeworkAssignmentView({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const isMobile = useIsMobileViewport();
  const [assignment, setAssignment] = useState<ClassroomAssignmentWithMeta | null>(null);
  const [googleDriveConfigured, setGoogleDriveConfigured] = useState(true);
  const [doc, setDoc] = useState<DocPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void fetch(`/api/classroom/assignments/${assignmentId}`, { credentials: "include" })
      .then((response) => response.json())
      .then((data: { assignment?: ClassroomAssignmentWithMeta; googleDriveConfigured?: boolean; error?: string }) => {
        if (cancelled) return;
        if (!data.assignment) {
          setError(data.error ?? "Không tải được bài tập.");
          return;
        }
        setAssignment(data.assignment);
        setGoogleDriveConfigured(data.googleDriveConfigured ?? false);
        const submission = data.assignment.submission;
        if (submission?.google_doc_id && submission.google_doc_url) {
          setDoc({
            id: submission.google_doc_id,
            url: submission.google_doc_url,
            embedUrl: `https://docs.google.com/document/d/${submission.google_doc_id}/edit?embedded=true`,
          });
        }
      })
      .catch(() => {
        if (!cancelled) setError("Không tải được bài tập.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [assignmentId]);

  async function ensureDoc() {
    setBusy("doc");
    setError(null);
    try {
      const response = await fetch(`/api/classroom/assignments/${assignmentId}/doc`, {
        method: "POST",
        credentials: "include",
      });
      const data = (await response.json()) as {
        doc?: DocPayload;
        assignment?: ClassroomAssignmentWithMeta;
        error?: string;
      };
      if (!response.ok) throw new Error(data.error ?? "Không mở được Google Doc.");
      setDoc(data.doc ?? null);
      if (data.assignment) setAssignment(data.assignment);
    } catch (docError) {
      setError(docError instanceof Error ? docError.message : "Không mở được Google Doc.");
    } finally {
      setBusy(null);
    }
  }

  async function submitAssignment() {
    setBusy("submit");
    setError(null);
    try {
      const response = await fetch(`/api/classroom/assignments/${assignmentId}/submit`, {
        method: "POST",
        credentials: "include",
      });
      const data = (await response.json()) as { submission?: { status: string; submitted_at?: string | null }; error?: string };
      if (!response.ok) throw new Error(data.error ?? "Không nộp được bài.");
      setAssignment((current) =>
        current
          ? {
              ...current,
              submission: {
                id: current.submission?.id ?? "",
                assignment_id: current.id,
                user_id: current.submission?.user_id ?? "",
                status: "submitted",
                google_doc_id: current.submission?.google_doc_id ?? null,
                google_doc_url: current.submission?.google_doc_url ?? null,
                submitted_at: data.submission?.submitted_at ?? new Date().toISOString(),
                created_at: current.submission?.created_at ?? new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
            }
          : current,
      );
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Không nộp được bài.");
    } finally {
      setBusy(null);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-[#f5f5f7] text-sm text-ink-muted">
        Đang tải bài tập…
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-[#f5f5f7] px-5 text-center">
        <p className="text-sm text-red-600">{error ?? "Không tìm thấy bài tập."}</p>
        <Link href="/tu-hoc/ho-so/bai-tap" className="mt-4 text-sm font-medium text-[#4b2876] hover:underline">
          ← Quay lại danh sách
        </Link>
      </div>
    );
  }

  const submitted = assignment.submission?.status === "submitted";
  const selfStudyHref =
    assignment.kind === "self_study" && assignment.payload && "href" in assignment.payload
      ? String(assignment.payload.href)
      : null;
  const externalUrl =
    assignment.kind === "external_link" && assignment.payload && "url" in assignment.payload
      ? String(assignment.payload.url)
      : null;

  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f5f7]">
      <header className="border-b border-zinc-200/90 bg-white px-4 py-4 sm:px-6">
        <Link href="/tu-hoc/ho-so/bai-tap" className="text-sm font-medium text-ink-muted hover:text-ink">
          ← Bài tập
        </Link>
        <h1 className="mt-2 font-serif text-2xl font-bold text-ink">{assignment.title}</h1>
        <p className="mt-1 text-sm text-ink-muted">{assignment.class_name}</p>
        {assignment.instructions ? (
          <p className="mt-3 max-w-3xl text-sm text-ink">{assignment.instructions}</p>
        ) : null}
        {submitted ? (
          <p className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Đã nộp — bạn vẫn có thể xem feedback trên Google Docs
          </p>
        ) : null}
      </header>

      {error ? <p className="px-4 py-3 text-sm text-red-600 sm:px-6">{error}</p> : null}

      {assignment.kind === "writing" ? (
        <div className="flex flex-1 flex-col">
          {!googleDriveConfigured ? (
            <div className="mx-4 mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-900 sm:mx-6">
              Google Drive chưa được cấu hình trên server. Liên hệ giáo viên.
            </div>
          ) : null}

          {!doc ? (
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
              <p className="max-w-md text-sm text-ink-muted">
                Bấm bên dưới để mở Google Doc của bạn. Giáo viên sẽ suggest và comment trực tiếp trên Doc.
              </p>
              {isMobile ? (
                <p className="mt-3 max-w-md text-xs text-ink-muted">
                  Trên điện thoại, nên mở tab riêng để viết thoải mái hơn.
                </p>
              ) : null}
              <button
                type="button"
                className="mt-5 rounded-xl bg-[#4b2876] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d2061]"
                disabled={busy === "doc" || !googleDriveConfigured}
                onClick={() => void ensureDoc()}
              >
                {busy === "doc" ? "Đang tạo Doc..." : "Mở bài viết"}
              </button>
            </div>
          ) : isMobile ? (
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
              <p className="max-w-md text-sm text-ink-muted">
                Trên điện thoại, hãy mở Google Docs trong tab riêng để viết hoặc xem feedback.
              </p>
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 rounded-xl bg-[#4b2876] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d2061]"
              >
                Mở Google Docs ↗
              </a>
            </div>
          ) : (
            <iframe
              title={assignment.title}
              src={doc.embedUrl}
              className="min-h-[70dvh] w-full flex-1 border-0 bg-white"
              allow="clipboard-write"
            />
          )}

          <footer className="border-t border-zinc-200/90 bg-white px-4 py-4 sm:px-6">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3">
              {doc ? (
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#4b2876] hover:underline"
                >
                  Mở tab riêng ↗
                </a>
              ) : null}
              <button
                type="button"
                disabled={submitted || busy === "submit" || !doc}
                className="ml-auto rounded-xl bg-[#4b2876] px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-400"
                onClick={() => void submitAssignment()}
              >
                {submitted ? "Đã nộp" : busy === "submit" ? "Đang nộp..." : "Nộp bài"}
              </button>
            </div>
          </footer>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-md flex-1 px-5 py-8">
          <div className="rounded-xl border border-zinc-200/90 bg-white px-5 py-8 text-center shadow-sm">
            <p className="text-sm text-ink-muted">Mở bài tập bên dưới, sau đó quay lại nộp khi hoàn thành.</p>
            {selfStudyHref ? (
              <Link
                href={selfStudyHref}
                className="mt-5 inline-flex rounded-xl bg-[#4b2876] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d2061]"
              >
                Mở bài Tự học
              </Link>
            ) : null}
            {externalUrl ? (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-xl bg-[#4b2876] px-5 py-3 text-sm font-semibold text-white hover:bg-[#3d2061]"
              >
                Mở link ↗
              </a>
            ) : null}
            <button
              type="button"
              disabled={submitted || busy === "submit"}
              className="mt-4 block w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-ink disabled:cursor-not-allowed disabled:opacity-60"
              onClick={() => void submitAssignment()}
            >
              {submitted ? "Đã nộp" : busy === "submit" ? "Đang nộp..." : "Đánh dấu đã hoàn thành"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
