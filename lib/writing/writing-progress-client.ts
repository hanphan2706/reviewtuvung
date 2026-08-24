import type {
  WritingEssayHistoryItem,
  WritingEssaySubmission,
  WritingProgressPostPayload,
  WritingProgressSnapshot,
  WritingSavedSampleItem,
} from "@/lib/writing/writing-progress-types";
import { EMPTY_WRITING_PROGRESS } from "@/lib/writing/writing-progress-types";

export async function fetchWritingProgress(): Promise<{
  progress: WritingProgressSnapshot;
  configured: boolean;
  loggedIn: boolean;
}> {
  try {
    const res = await fetch("/api/writing/progress", { method: "GET", cache: "no-store" });
    if (res.status === 401) {
      return { progress: EMPTY_WRITING_PROGRESS, configured: true, loggedIn: false };
    }
    if (!res.ok) {
      return { progress: EMPTY_WRITING_PROGRESS, configured: false, loggedIn: true };
    }
    const data = (await res.json()) as {
      progress?: WritingProgressSnapshot;
      configured?: boolean;
    };
    return {
      progress: data.progress ?? EMPTY_WRITING_PROGRESS,
      configured: data.configured !== false,
      loggedIn: true,
    };
  } catch {
    return { progress: EMPTY_WRITING_PROGRESS, configured: false, loggedIn: false };
  }
}

export async function recordWritingProgress(
  payload: WritingProgressPostPayload,
): Promise<{ ok: boolean; submissionId?: number }> {
  try {
    const res = await fetch("/api/writing/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as { ok?: boolean; submissionId?: number };
    if (data.ok === false) return { ok: false };
    const submissionId =
      typeof data.submissionId === "number" && Number.isFinite(data.submissionId)
        ? data.submissionId
        : undefined;
    return { ok: true, submissionId };
  } catch {
    return { ok: false };
  }
}

export async function fetchWritingEssayHistory(): Promise<{
  essays: WritingEssayHistoryItem[];
  configured: boolean;
  loggedIn: boolean;
}> {
  try {
    const res = await fetch("/api/writing/essays", { method: "GET", cache: "no-store" });
    if (res.status === 401) {
      return { essays: [], configured: true, loggedIn: false };
    }
    if (!res.ok) {
      return { essays: [], configured: false, loggedIn: true };
    }
    const data = (await res.json()) as {
      essays?: WritingEssayHistoryItem[];
      configured?: boolean;
    };
    return {
      essays: Array.isArray(data.essays) ? data.essays : [],
      configured: data.configured !== false,
      loggedIn: true,
    };
  } catch {
    return { essays: [], configured: false, loggedIn: false };
  }
}

export async function fetchWritingSavedSamples(): Promise<{
  samples: WritingSavedSampleItem[];
  configured: boolean;
  loggedIn: boolean;
}> {
  try {
    const res = await fetch("/api/writing/saved-samples", { method: "GET", cache: "no-store" });
    if (res.status === 401) {
      return { samples: [], configured: true, loggedIn: false };
    }
    if (!res.ok) {
      return { samples: [], configured: false, loggedIn: true };
    }
    const data = (await res.json()) as {
      samples?: WritingSavedSampleItem[];
      configured?: boolean;
    };
    return {
      samples: Array.isArray(data.samples) ? data.samples : [],
      configured: data.configured !== false,
      loggedIn: true,
    };
  } catch {
    return { samples: [], configured: false, loggedIn: false };
  }
}

export async function fetchWritingSampleSaved(sampleId: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/writing/saved-samples/${encodeURIComponent(sampleId)}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { saved?: boolean };
    return data.saved === true;
  } catch {
    return false;
  }
}

export async function saveWritingSample(sampleId: string): Promise<{ ok: boolean }> {
  try {
    const res = await fetch("/api/writing/saved-samples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sampleId }),
    });
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as { ok?: boolean };
    return { ok: data.ok !== false };
  } catch {
    return { ok: false };
  }
}

export async function unsaveWritingSample(sampleId: string): Promise<{ ok: boolean }> {
  try {
    const res = await fetch(`/api/writing/saved-samples/${encodeURIComponent(sampleId)}`, {
      method: "DELETE",
    });
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as { ok?: boolean };
    return { ok: data.ok !== false };
  } catch {
    return { ok: false };
  }
}

export async function fetchWritingEssaySubmission(
  id: string,
): Promise<{ essay: WritingEssaySubmission | null; loggedIn: boolean }> {
  try {
    const res = await fetch(`/api/writing/essays/${encodeURIComponent(id)}`, {
      method: "GET",
      cache: "no-store",
    });
    if (res.status === 401) {
      return { essay: null, loggedIn: false };
    }
    if (!res.ok) {
      return { essay: null, loggedIn: true };
    }
    const data = (await res.json()) as { essay?: WritingEssaySubmission };
    return { essay: data.essay ?? null, loggedIn: true };
  } catch {
    return { essay: null, loggedIn: false };
  }
}
