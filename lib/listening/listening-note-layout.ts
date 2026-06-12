import { BLANK_RE } from "@/lib/listening/parse-listening-qna";

export type NoteFormRow = {
  label: string;
  valueLines: string[];
};

export type NoteFormLayout = {
  kind: "form";
  title?: string;
  rows: NoteFormRow[];
};

export type NoteGridTableLayout = {
  kind: "grid-table";
  title?: string;
  headers: string[];
  rows: string[][];
};

export type NoteFreeformLayout = {
  kind: "freeform";
  lines: string[];
};

export type NoteBodyLayout = NoteFormLayout | NoteGridTableLayout | NoteFreeformLayout;

function lineHasBlank(line: string): boolean {
  BLANK_RE.lastIndex = 0;
  return BLANK_RE.test(line);
}

/** Dòng chỉ có nhãn trường (vd. `Coordinator:`), không có ô điền trên cùng dòng. */
export function isNoteFieldLabelLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed.endsWith(":")) return false;
  if (lineHasBlank(trimmed)) return false;
  const label = trimmed.slice(0, -1).trim();
  return label.length > 0;
}

function stripBulletPrefix(line: string): string {
  const trimmed = line.trim();
  if (/^[●•]\s*/u.test(trimmed)) {
    return trimmed.replace(/^[●•]\s*/u, "");
  }
  if (/^[-–—]\s*/u.test(trimmed)) {
    return trimmed.replace(/^[-–—]\s*/u, "");
  }
  return trimmed;
}

function isDocTitleLine(line: string): boolean {
  const text = stripBulletPrefix(line);
  if (!text || lineHasBlank(line)) return false;
  if (isNoteFieldLabelLine(text)) return false;
  if (text.endsWith(":")) return false;
  if (/^\d+\s*(minutes?|hours?|mins?)\b/i.test(text)) return false;
  if (/^[a-z]/.test(text)) return false;
  return true;
}

function splitNonEmptyGroups(bodyLines: readonly string[]): string[][] {
  const groups: string[][] = [];
  let current: string[] = [];
  for (const line of bodyLines) {
    if (!line.trim()) {
      if (current.length > 0) {
        groups.push(current);
        current = [];
      }
      continue;
    }
    current.push(line);
  }
  if (current.length > 0) groups.push(current);
  return groups;
}

function isHeaderCellLine(line: string): boolean {
  const text = stripBulletPrefix(line);
  if (!text || lineHasBlank(text)) return false;
  if (isNoteFieldLabelLine(text)) return false;
  if (/^\d+\s*(minutes?|hours?|mins?)\b/i.test(text)) return false;
  if (/^[a-z]/.test(text)) return false;
  if (/\b(minutes?|market|section|counter|shop|street|floor|room|prawns|loaf|guitars?|songs?)\b/i.test(text)) return false;
  return text.length <= 48;
}

function parseFormRows(bodyLines: readonly string[]): NoteFormRow[] {
  const rows: NoteFormRow[] = [];
  let pendingLabel: string | null = null;
  let valueLines: string[] = [];

  const flush = () => {
    if (!pendingLabel) return;
    rows.push({ label: pendingLabel, valueLines: [...valueLines] });
    pendingLabel = null;
    valueLines = [];
  };

  for (const raw of bodyLines) {
    const stripped = stripBulletPrefix(raw);
    if (isNoteFieldLabelLine(stripped)) {
      flush();
      pendingLabel = stripped;
      continue;
    }
    if (pendingLabel) {
      valueLines.push(raw);
      continue;
    }
  }
  flush();
  return rows;
}

function chunkUniformRows(lines: readonly string[], columnCount: number): string[][] | null {
  if (lines.length === 0) return null;
  if (lines.length % columnCount === 0) {
    const rows: string[][] = [];
    for (let i = 0; i < lines.length; i += columnCount) {
      rows.push(lines.slice(i, i + columnCount).map((line) => line));
    }
    return rows;
  }

  const remainder = lines.length % columnCount;
  const fullRowCount = Math.floor(lines.length / columnCount);
  if (fullRowCount < 1 || remainder >= columnCount) return null;

  const rows: string[][] = [];
  for (let i = 0; i < fullRowCount * columnCount; i += columnCount) {
    rows.push(lines.slice(i, i + columnCount).map((line) => line));
  }
  const tail = lines.slice(fullRowCount * columnCount).map((line) => line);
  while (tail.length < columnCount) tail.push("");
  rows.push(tail);
  return rows;
}

function inferGridTableFromLines(lines: readonly string[]): NoteGridTableLayout | null {
  if (lines.length < 4) return null;
  let start = 0;
  let title: string | undefined;
  if (isDocTitleLine(lines[0]!)) {
    title = stripBulletPrefix(lines[0]!);
    start = 1;
  }

  const candidates: NoteGridTableLayout[] = [];
  for (let headerCount = 4; headerCount >= 2; headerCount -= 1) {
    if (lines.length < start + headerCount + headerCount) continue;
    const headerCandidates = lines.slice(start, start + headerCount);
    if (!headerCandidates.every((line) => isHeaderCellLine(line))) continue;
    const headers = headerCandidates.map((line) => stripBulletPrefix(line));
    const dataLines = lines.slice(start + headerCount);

    const uniformRows = chunkUniformRows(dataLines, headerCount);
    if (uniformRows && uniformRows.length >= 1) {
      candidates.push({ kind: "grid-table", title, headers, rows: uniformRows });
      continue;
    }
    const sectionedRows = chunkUniformRows(dataLines, headerCount + 1);
    if (sectionedRows && sectionedRows.length >= 1) {
      candidates.push({ kind: "grid-table", title, headers: ["", ...headers], rows: sectionedRows });
    }
  }

  if (candidates.length === 0) return null;
  return candidates.sort((a, b) => {
    const headerDiff =
      b.headers.filter((header) => header.length > 0).length -
      a.headers.filter((header) => header.length > 0).length;
    if (headerDiff !== 0) return headerDiff;
    return b.rows.length - a.rows.length;
  })[0]!;
}

function inferGridTableFromSectionedGroups(bodyLines: readonly string[]): NoteGridTableLayout | null {
  const groups = splitNonEmptyGroups(bodyLines);
  if (groups.length < 2) return null;

  const title = groups[0]?.length === 1 && isDocTitleLine(groups[0][0]!) ? stripBulletPrefix(groups[0][0]!) : undefined;
  const headerGroupIndex = title ? 1 : 0;
  const headerGroup = groups[headerGroupIndex];
  const dataGroups = groups.slice(headerGroupIndex + 1);
  if (!headerGroup?.length || dataGroups.length === 0) return null;

  const headerCount = headerGroup.length;
  if (headerCount < 2 || headerCount > 4) return null;
  if (!headerGroup.every((line) => isHeaderCellLine(line))) return null;

  const headers = headerGroup.map((line) => stripBulletPrefix(line));
  const dataSizes = dataGroups.map((g) => g.length);
  const allUniform = dataSizes.every((size) => size === headerCount);
  if (allUniform) {
    return { kind: "grid-table", title, headers, rows: dataGroups.map((group) => [...group]) };
  }

  const sectionedSize = headerCount + 1;
  const allSectioned = dataSizes.every((size) => size === sectionedSize);
  if (allSectioned) {
    return { kind: "grid-table", title, headers: ["", ...headers], rows: dataGroups.map((group) => [...group]) };
  }

  return null;
}

function inferGridTable(bodyLines: readonly string[]): NoteGridTableLayout | null {
  const groups = splitNonEmptyGroups(bodyLines);
  const hasSectionedData = groups.length >= 3;
  if (hasSectionedData) {
    const sectioned = inferGridTableFromSectionedGroups(bodyLines);
    if (sectioned) return sectioned;
  }
  const nonEmpty = bodyLines.map((line) => line.trim()).filter((line) => line.length > 0);
  return inferGridTableFromLines(nonEmpty);
}

export function inferNoteBodyLayout(
  instructionLines: readonly string[],
  bodyLines: readonly string[],
): NoteBodyLayout {
  const instructionText = instructionLines.join(" ").toLowerCase();

  if (/complete the table below/i.test(instructionText)) {
    const grid = inferGridTable(bodyLines);
    if (grid) return grid;
  }

  if (/complete the form below/i.test(instructionText)) {
    const formRows = parseFormRows(bodyLines);
    if (formRows.length > 0) {
      const firstLine = bodyLines.find((line) => line.trim()) ?? "";
      const title =
        firstLine.trim() && isDocTitleLine(firstLine) && !isNoteFieldLabelLine(stripBulletPrefix(firstLine))
          ? stripBulletPrefix(firstLine)
          : undefined;
      return { kind: "form", title, rows: formRows };
    }
  }

  if (parseFormRows(bodyLines).length >= 2 && /complete the form below/i.test(instructionText) === false) {
    // no-op: only explicit form instruction
  }

  return { kind: "freeform", lines: [...bodyLines] };
}

export function collectBlankNumbersFromLines(lines: readonly string[]): number[] {
  const nums: number[] = [];
  for (const line of lines) {
    BLANK_RE.lastIndex = 0;
    let match: RegExpExecArray | null = BLANK_RE.exec(line);
    while (match) {
      nums.push(Number.parseInt(match[1]!, 10));
      match = BLANK_RE.exec(line);
    }
  }
  return nums;
}
