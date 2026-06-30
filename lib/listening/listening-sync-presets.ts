/** Cấu hình căn sync transcript ↔ audio theo từng part IELTS. */
export type ListeningSyncPartConfig = {
  /** Giây tối thiểu — bỏ intro IELTS chung, trước khi thoại bài bắt đầu. */
  dialogueMinStartSeconds: number;
  /** Giây tối đa — cắt trước intro part tiếp theo (tuỳ chọn). */
  maxDialogueEndSeconds?: number;
  /** Dòng transcript (0-based) bắt đầu căn với whisper. */
  firstDialogueLineIndex?: number;
  /** Cụm từ neo trong transcript + whisper (word alignment). */
  anchorText?: string;
  /** Mốc tham chiếu tay (log / proportional); local dùng word anchor. */
  anchorAtSeconds?: number;
};

export const LISTENING_SYNC_PART_CONFIG: Partial<Record<string, ListeningSyncPartConfig>> = {
  /** Cam 19 T1 P1 — Country Park (~1:55 đọc đề, thoại ~2:00). */
  "cam19-t1-p1": {
    dialogueMinStartSeconds: 115,
    maxDialogueEndSeconds: 406,
    firstDialogueLineIndex: 2,
    anchorText: "new to this area",
    anchorAtSeconds: 122.56,
  },
  /** Cam 19 T1 P2 — Twinning Association monologue (~1:03). */
  "cam19-t1-p2": {
    dialogueMinStartSeconds: 60,
    maxDialogueEndSeconds: 395,
    firstDialogueLineIndex: 0,
    anchorText: "twinning association",
    anchorAtSeconds: 66.1,
  },
  /** Cam 19 T1 P3 — Vegan eggs conversation (~0:47). */
  "cam19-t1-p3": {
    dialogueMinStartSeconds: 45,
    maxDialogueEndSeconds: 385,
    firstDialogueLineIndex: 0,
    anchorText: "vegan alternative",
    anchorAtSeconds: 52.2,
  },
  /** Cam 19 T1 P4 — Céide Fields lecture (~1:28). */
  "cam19-t1-p4": {
    dialogueMinStartSeconds: 88,
    maxDialogueEndSeconds: 375,
    firstDialogueLineIndex: 0,
    anchorText: "presentation today",
    anchorAtSeconds: 88.8,
  },
  /** Cam 19 T2 P1 — Guitar group conversation (~1:00). */
  "cam19-t2-p1": {
    dialogueMinStartSeconds: 55,
    maxDialogueEndSeconds: 470,
    firstDialogueLineIndex: 0,
    anchorText: "guitar group",
    anchorAtSeconds: 62,
  },
  /** Cam 19 T2 P2 — Lifeboat volunteer monologue (~1:00). */
  "cam19-t2-p2": {
    dialogueMinStartSeconds: 58,
    maxDialogueEndSeconds: 372,
    firstDialogueLineIndex: 0,
    anchorText: "lifeboat volunteer",
    anchorAtSeconds: 65,
  },
  /** Cam 19 T2 P3 — Recycling footwear discussion (~0:48). */
  "cam19-t2-p3": {
    dialogueMinStartSeconds: 45,
    maxDialogueEndSeconds: 400,
    firstDialogueLineIndex: 0,
    anchorText: "recycling footwear",
    anchorAtSeconds: 50,
  },
  /** Cam 19 T2 P4 — Tardigrades lecture (~1:30). */
  "cam19-t2-p4": {
    dialogueMinStartSeconds: 88,
    maxDialogueEndSeconds: 415,
    firstDialogueLineIndex: 0,
    anchorText: "tardigrades",
    anchorAtSeconds: 92,
  },
  /** Cam 19 T3 P1 — Kite Place food shops (~1:00). */
  "cam19-t3-p1": {
    dialogueMinStartSeconds: 55,
    maxDialogueEndSeconds: 470,
    firstDialogueLineIndex: 0,
    anchorText: "harbour",
    anchorAtSeconds: 62,
  },
  /** Cam 19 T3 P2 — Children's book festival (~1:00). */
  "cam19-t3-p2": {
    dialogueMinStartSeconds: 58,
    maxDialogueEndSeconds: 372,
    firstDialogueLineIndex: 0,
    anchorText: "book festival",
    anchorAtSeconds: 65,
  },
  /** Cam 19 T3 P3 — Year 12 science experiment (~0:48). */
  "cam19-t3-p3": {
    dialogueMinStartSeconds: 45,
    maxDialogueEndSeconds: 400,
    firstDialogueLineIndex: 0,
    anchorText: "science class",
    anchorAtSeconds: 50,
  },
  /** Cam 19 T3 P4 — Microplastics lecture (~1:30). */
  "cam19-t3-p4": {
    dialogueMinStartSeconds: 88,
    maxDialogueEndSeconds: 415,
    firstDialogueLineIndex: 0,
    anchorText: "microplastics",
    anchorAtSeconds: 92,
  },
  /** Cam 19 T4 P1 — First day at work (~1:00). */
  "cam19-t4-p1": {
    dialogueMinStartSeconds: 55,
    maxDialogueEndSeconds: 470,
    firstDialogueLineIndex: 0,
    anchorText: "supervisor",
    anchorAtSeconds: 62,
  },
  /** Cam 19 T4 P2 — Compton Park Runners (~1:00). */
  "cam19-t4-p2": {
    dialogueMinStartSeconds: 58,
    maxDialogueEndSeconds: 372,
    firstDialogueLineIndex: 0,
    anchorText: "running coach",
    anchorAtSeconds: 65,
  },
  /** Cam 19 T4 P3 — Grandfather's bookshop (~0:48). */
  "cam19-t4-p3": {
    dialogueMinStartSeconds: 45,
    maxDialogueEndSeconds: 400,
    firstDialogueLineIndex: 0,
    anchorText: "pack them",
    anchorAtSeconds: 50,
  },
  /** Cam 19 T4 P4 — Tree planting lecture (~1:30). */
  "cam19-t4-p4": {
    dialogueMinStartSeconds: 88,
    maxDialogueEndSeconds: 415,
    firstDialogueLineIndex: 0,
    anchorText: "reforestation",
    anchorAtSeconds: 92,
  },
};

/** @deprecated Dùng LISTENING_SYNC_PART_CONFIG */
export const LISTENING_SYNC_ANCHORS: Partial<
  Record<string, { anchorText: string; atSeconds: number }>
> = Object.fromEntries(
  Object.entries(LISTENING_SYNC_PART_CONFIG).flatMap(([id, cfg]) =>
    cfg?.anchorText && cfg.anchorAtSeconds != null
      ? [[id, { anchorText: cfg.anchorText, atSeconds: cfg.anchorAtSeconds }]]
      : [],
  ),
);

function defaultSyncConfigByPartNumber(partNum: number): ListeningSyncPartConfig {
  switch (partNum) {
    case 1:
      return { dialogueMinStartSeconds: 115 };
    case 2:
      return { dialogueMinStartSeconds: 58 };
    case 3:
      return { dialogueMinStartSeconds: 45 };
    case 4:
      return { dialogueMinStartSeconds: 88 };
    default:
      return { dialogueMinStartSeconds: 115 };
  }
}

export function getListeningSyncPartConfig(partId: string): ListeningSyncPartConfig {
  const explicit = LISTENING_SYNC_PART_CONFIG[partId];
  if (explicit) return explicit;

  const partMatch = partId.match(/-p(\d)$/);
  const partNum = partMatch ? Number.parseInt(partMatch[1] ?? "1", 10) : 1;
  return defaultSyncConfigByPartNumber(partNum);
}
