export type ReadingStreakSnapshot = {
  currentStreak: number;
  longestStreak: number;
  lastReadDate: string | null;
  articlesOpened: number;
  weekProgress: number;
  messageVi: string;
};

const LOCAL_KEY = "reading-streak-local";

type LocalStreak = {
  lastReadDate: string;
  currentStreak: number;
  longestStreak: number;
  articlesOpened: number;
};

function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayUtc(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function readLocal(): LocalStreak | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LocalStreak;
  } catch {
    return null;
  }
}

function writeLocal(data: LocalStreak) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  } catch {
    /* quota */
  }
}

export function recordLocalReadingOpen(): LocalStreak {
  const today = todayUtc();
  const prev = readLocal();
  let currentStreak = 1;
  if (prev) {
    if (prev.lastReadDate === today) {
      currentStreak = prev.currentStreak;
    } else if (prev.lastReadDate === yesterdayUtc()) {
      currentStreak = prev.currentStreak + 1;
    }
  }
  const longestStreak = Math.max(prev?.longestStreak ?? 0, currentStreak);
  const next: LocalStreak = {
    lastReadDate: today,
    currentStreak,
    longestStreak,
    articlesOpened: (prev?.articlesOpened ?? 0) + (prev?.lastReadDate === today ? 0 : 1),
  };
  writeLocal(next);
  return next;
}

export function localStreakSnapshot(): ReadingStreakSnapshot {
  const data = readLocal();
  const currentStreak = data?.currentStreak ?? 0;
  return {
    currentStreak,
    longestStreak: data?.longestStreak ?? 0,
    lastReadDate: data?.lastReadDate ?? null,
    articlesOpened: data?.articlesOpened ?? 0,
    weekProgress: Math.min(1, currentStreak / 7),
    messageVi:
      currentStreak >= 7
        ? "Bạn đang duy trì thói quen đọc rất tốt — tiếp tục nhé!"
        : currentStreak >= 3
          ? "Chuỗi ngày đọc đang lên — cố gắng giữ momentum."
          : "Mọi sự thay đổi lớn đều bắt đầu từ từng bước nhỏ.",
  };
}

export function mapServerStreak(row: {
  current_streak: number;
  longest_streak: number;
  last_read_date: string | null;
  articles_opened: number;
}): ReadingStreakSnapshot {
  const currentStreak = row.current_streak;
  return {
    currentStreak,
    longestStreak: row.longest_streak,
    lastReadDate: row.last_read_date,
    articlesOpened: row.articles_opened,
    weekProgress: Math.min(1, currentStreak / 7),
    messageVi:
      currentStreak >= 14
        ? "Bạn đang nằm trong nhóm đọc đều đặn tuần này — phong độ học thuật tốt!"
        : currentStreak >= 7
          ? "Chuỗi một tuần — rất đáng khen!"
          : "Mọi sự thay đổi lớn đều bắt đầu từ từng bước nhỏ.",
  };
}
