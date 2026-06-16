import { averageLastThreeIeltsBands } from "@/lib/ielts/ielts-band-average";

export type IeltsPracticeSkill = "reading" | "listening";

export type IeltsPracticeAttempt = {
  band: number;
  attemptedAt: string;
  examKey?: string | null;
};

const LOCAL_KEY_PREFIX = "anthicIeltsAttempts:";

export function localIeltsAttemptsStorageKey(skill: IeltsPracticeSkill): string {
  return `${LOCAL_KEY_PREFIX}${skill}`;
}

export function readLocalIeltsAttempts(skill: IeltsPracticeSkill): IeltsPracticeAttempt[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(localIeltsAttemptsStorageKey(skill));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((row) => {
        if (!row || typeof row !== "object") return null;
        const band = (row as { band?: unknown }).band;
        const at = (row as { at?: unknown }).at;
        if (typeof band !== "number" || !Number.isFinite(band)) return null;
        return {
          band,
          attemptedAt: typeof at === "number" ? new Date(at).toISOString() : new Date().toISOString(),
        } satisfies IeltsPracticeAttempt;
      })
      .filter((row): row is IeltsPracticeAttempt => row != null);
  } catch {
    return [];
  }
}

export function readLocalIeltsBandAverage(skill: IeltsPracticeSkill): number | null {
  return averageLastThreeIeltsBands(readLocalIeltsAttempts(skill).map((row) => row.band));
}

export function averageBandsFromAttempts(rows: readonly { band: number }[]): number | null {
  return averageLastThreeIeltsBands(rows.map((row) => row.band));
}
