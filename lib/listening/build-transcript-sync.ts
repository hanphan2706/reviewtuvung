import {
  getListeningSyncPartConfig,
} from "@/lib/listening/listening-sync-presets";
import type {
  ListeningTranscriptCue,
  ListeningTranscriptSyncFile,
} from "@/lib/listening/listening-transcript-sync-types";
import {
  countTranscriptWords,
  parseListeningTranscriptLines,
  type ParsedTranscriptLine,
} from "@/lib/listening/parse-listening-transcript-lines";

export type WhisperWord = { word: string; start: number; end: number };

export type WhisperSegment = { text: string; start: number; end: number };

const MIN_LINE_MATCH_RATIO = 0.38;
const MIN_BACKWARD_MATCH_RATIO = 0.42;
const WORD_SEARCH_AHEAD = 80;
const DEFAULT_DIALOGUE_MIN_START_SECONDS = 115;

export type TranscriptAlignOptions = {
  dialogueMinStartSeconds: number;
  maxDialogueEndSeconds?: number;
  firstDialogueLineIndex?: number;
  anchorText?: string;
};

function findPhraseWordIndex(
  whisperWords: WhisperWord[],
  phraseTokens: string[],
  opts?: { minStart?: number; searchFrom?: number; searchTo?: number },
): number | null {
  if (phraseTokens.length === 0) return null;
  const minStart = opts?.minStart ?? 0;
  const searchFrom = opts?.searchFrom ?? 0;
  const searchTo = opts?.searchTo ?? whisperWords.length;

  for (let i = searchFrom; i < searchTo - phraseTokens.length + 1; i += 1) {
    const first = whisperWords[i];
    if (!first || first.start < minStart) continue;
    let ok = true;
    for (let j = 0; j < phraseTokens.length; j += 1) {
      const ww = whisperWords[i + j];
      if (!ww || !tokensMatch(phraseTokens[j]!, normalizeToken(ww.word))) {
        ok = false;
        break;
      }
    }
    if (ok) return i;
  }
  return null;
}

function lineStartIndexFromPhrase(
  lineTokens: string[],
  whisperWords: WhisperWord[],
  phraseStartIdx: number,
): number {
  const firstToken = lineTokens[0];
  let start = phraseStartIdx;
  for (let i = phraseStartIdx; i >= Math.max(0, phraseStartIdx - 10); i -= 1) {
    const ww = whisperWords[i];
    if (!ww) continue;
    const norm = normalizeToken(ww.word);
    if (firstToken && norm === firstToken) return i;
    if (norm === "well" || norm === "okay" || norm === "oh" || norm === "right") {
      start = i;
    }
  }
  return start;
}

function findAnchorLineMatch(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  anchorText?: string,
): LineWordMatch | null {
  if (anchorText?.trim()) {
    const needle = anchorText.trim().toLowerCase();
    const lineIndex = lines.findIndex((line) => line.text.toLowerCase().includes(needle));
    if (lineIndex >= 0) {
      const phraseTokens = tokenizeForAlign(anchorText);
      const phraseStartIdx = findPhraseWordIndex(whisperWords, phraseTokens, {
        minStart: DEFAULT_DIALOGUE_MIN_START_SECONDS,
      });
      if (phraseStartIdx !== null) {
        const lineTokens = tokenizeForAlign(lines[lineIndex]!.text);
        const wordStartIdx = lineStartIndexFromPhrase(lineTokens, whisperWords, phraseStartIdx);
        const lineHit = findLineMatchInWhisper(
          lineTokens,
          whisperWords,
          wordStartIdx,
          phraseStartIdx + phraseTokens.length + 20,
        );
        return {
          lineIndex,
          wordStartIdx,
          wordEndIdx: lineHit?.wordEndIdx ?? phraseStartIdx + phraseTokens.length - 1,
          score: lineHit?.score ?? 1,
        };
      }
    }
  }

  let best: LineWordMatch | null = null;
  lines.forEach((line, lineIndex) => {
    const lineTokens = tokenizeForAlign(line.text);
    const hit = findLineMatchInWhisper(
      lineTokens,
      whisperWords,
      findDialogueWordStartIndex(whisperWords),
    );
    if (!hit || hit.score < MIN_LINE_MATCH_RATIO) return;
    const startWord = whisperWords[hit.wordStartIdx];
    if (!startWord || startWord.start < DEFAULT_DIALOGUE_MIN_START_SECONDS) return;
    if (!best || hit.score > best.score || (hit.score === best.score && startWord.start < whisperWords[best.wordStartIdx]!.start)) {
      best = { lineIndex, ...hit };
    }
  });
  return best;
}

function findLineMatchBefore(
  lineTokens: string[],
  whisperWords: WhisperWord[],
  beforeIndex: number,
): Omit<LineWordMatch, "lineIndex"> | null {
  if (lineTokens.length === 0 || beforeIndex <= 0) return null;

  const searchFrom = findDialogueWordStartIndex(whisperWords);
  let best: Omit<LineWordMatch, "lineIndex"> | null = null;

  for (let start = searchFrom; start < beforeIndex; start += 1) {
    let matched = 0;
    let wi = start;
    let lastMatch = start;

    for (const token of lineTokens) {
      let found = false;
      const tokenEnd = Math.min(beforeIndex, wi + 14);
      for (let j = wi; j < tokenEnd; j += 1) {
        const ww = whisperWords[j];
        if (!ww) continue;
        const wNorm = normalizeToken(ww.word);
        if (wNorm && tokensMatch(token, wNorm)) {
          matched += 1;
          lastMatch = j;
          wi = j + 1;
          found = true;
          break;
        }
      }
      if (!found) break;
    }

    const minMatched =
      lineTokens.length <= 3 ? lineTokens.length : Math.max(2, Math.ceil(lineTokens.length * 0.45));
    if (matched < minMatched) continue;

    const score = matched / lineTokens.length;
    if (score >= MIN_BACKWARD_MATCH_RATIO && (!best || score > best.score || (score === best.score && start > best.wordStartIdx))) {
      best = { wordStartIdx: start, wordEndIdx: lastMatch, score };
    }
  }

  return best;
}

function normalizeToken(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9']/g, "")
    .replace(/^q\d+$/, "");
}

function tokenizeForAlign(text: string): string[] {
  const tokens = text.match(/[A-Za-z0-9']+/g) ?? [];
  return tokens.map(normalizeToken).filter((t) => t.length > 0);
}

function roundSec(n: number): number {
  return Math.round(n * 1000) / 1000;
}

function countCueWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/** Ước lượng thời lượng tối thiểu theo số từ (tránh cue sập do whisper trùng mốc). */
function estimateMinCueDuration(text: string): number {
  const words = countCueWords(text);
  return Math.max(0.45, Math.min(14, words * 0.34));
}

function cueDuration(cue: ListeningTranscriptCue): number {
  return Math.max(0, cue.end - cue.start);
}

function isCollapsedCue(cue: ListeningTranscriptCue): boolean {
  if (cue.preAudio) return false;
  return cueDuration(cue) < estimateMinCueDuration(cue.text) * 0.85;
}

function redistributeCueRun(
  cues: ListeningTranscriptCue[],
  runStart: number,
  runEnd: number,
  windowEnd: number,
): void {
  const run = cues.slice(runStart, runEnd + 1);
  const start = run[0]!.start;
  const available = Math.max(0.6, windowEnd - start);
  const weights = run.map((cue) => Math.max(1, countCueWords(cue.text)));
  const total = weights.reduce((sum, w) => sum + w, 0) || run.length;
  let cursor = start;

  run.forEach((cue, index) => {
    const isLast = index === run.length - 1;
    const share = (weights[index]! / total) * available;
    const minDur = estimateMinCueDuration(cue.text);
    const span = isLast ? windowEnd - cursor : Math.max(minDur * 0.6, share);
    cue.start = roundSec(cursor);
    cue.end = roundSec(isLast ? windowEnd : cursor + span);
    cursor = cue.end;
  });
}

function repairCollapsedCueRuns(cues: ListeningTranscriptCue[], durationSeconds: number): void {
  let i = 0;
  while (i < cues.length) {
    const cur = cues[i];
    if (!cur || !isCollapsedCue(cur)) {
      i += 1;
      continue;
    }

    let runEnd = i;
    while (runEnd + 1 < cues.length && isCollapsedCue(cues[runEnd + 1]!)) {
      runEnd += 1;
    }

    let windowEnd = durationSeconds;
    for (let j = runEnd + 1; j <= cues.length; j += 1) {
      const boundary = j < cues.length ? cues[j]!.start : durationSeconds;
      if (boundary - cues[i]!.start >= 1.5) {
        windowEnd = boundary;
        break;
      }
    }

    redistributeCueRun(cues, i, runEnd, windowEnd);

    for (let j = i + 1; j < cues.length; j += 1) {
      const prev = cues[j - 1]!;
      const next = cues[j]!;
      if (next.start < prev.end) {
        next.start = roundSec(prev.end);
      }
      if (next.end <= next.start) {
        next.end = roundSec(next.start + estimateMinCueDuration(next.text));
      }
    }

    i = runEnd + 1;
  }
}

const TOKEN_EQUIVALENTS: Record<string, readonly string[]> = {
  ok: ["ok", "okay"],
  okay: ["ok", "okay"],
  uhuh: ["uhuh", "uh", "uhhuh"],
  im: ["im", "i'm"],
  "i'm": ["im", "i'm"],
  its: ["its", "it's"],
  "it's": ["its", "it's"],
  thats: ["thats", "that's"],
  "that's": ["thats", "that's"],
  youre: ["youre", "you're"],
  "you're": ["youre", "you're"],
  twining: ["twining", "twinning"],
  twinning: ["twining", "twinning"],
  malat: ["malat", "malatte"],
  malatte: ["malat", "malatte"],
};

function tokensMatch(transcriptToken: string, whisperToken: string): boolean {
  if (!transcriptToken || !whisperToken) return false;
  if (transcriptToken === whisperToken) return true;
  const left = TOKEN_EQUIVALENTS[transcriptToken] ?? [transcriptToken];
  const right = TOKEN_EQUIVALENTS[whisperToken] ?? [whisperToken];
  return left.some((a) => right.includes(a));
}

function findDialogueWordStartIndex(
  whisperWords: WhisperWord[],
  minStartSeconds = DEFAULT_DIALOGUE_MIN_START_SECONDS,
): number {
  for (let i = 0; i < whisperWords.length; i += 1) {
    if (whisperWords[i]!.start >= minStartSeconds) return i;
  }
  return 0;
}

type LineWordMatch = {
  lineIndex: number;
  wordStartIdx: number;
  wordEndIdx: number;
  score: number;
};

function findLineMatchInWhisper(
  lineTokens: string[],
  whisperWords: WhisperWord[],
  fromIndex: number,
  maxEndIndex?: number,
): Omit<LineWordMatch, "lineIndex"> | null {
  if (lineTokens.length === 0) return null;

  const searchEnd = Math.min(
    whisperWords.length,
    maxEndIndex ?? fromIndex + WORD_SEARCH_AHEAD,
  );
  let best: Omit<LineWordMatch, "lineIndex"> | null = null;

  const minSpan = lineTokens.length <= 2 ? lineTokens.length : Math.max(2, Math.ceil(lineTokens.length * 0.22));

  for (let spanStart = 0; spanStart < lineTokens.length; spanStart += 1) {
    const maxSpan = lineTokens.length - spanStart;
    for (let spanLen = minSpan; spanLen <= maxSpan; spanLen += 1) {
      const slice = lineTokens.slice(spanStart, spanStart + spanLen);
      const minMatched = slice.length <= 2 ? slice.length : Math.max(2, Math.ceil(slice.length * 0.45));

      for (let start = fromIndex; start < searchEnd; start += 1) {
        let matched = 0;
        let wi = start;
        let lastMatch = start;

        for (const token of slice) {
          let found = false;
          const tokenEnd = Math.min(searchEnd, wi + 18);
          for (let j = wi; j < tokenEnd; j += 1) {
            const ww = whisperWords[j];
            if (!ww) continue;
            const wNorm = normalizeToken(ww.word);
            if (wNorm && tokensMatch(token, wNorm)) {
              matched += 1;
              lastMatch = j;
              wi = j + 1;
              found = true;
              break;
            }
          }
          if (!found) break;
        }

        if (matched < minMatched) continue;

        const score = matched / slice.length;
        if (score >= MIN_LINE_MATCH_RATIO && (!best || score > best.score || (score === best.score && start < best.wordStartIdx))) {
          best = { wordStartIdx: start, wordEndIdx: lastMatch, score };
        }
      }
    }
  }

  return best;
}

function assignLineMatches(lines: ParsedTranscriptLine[], whisperWords: WhisperWord[]): LineWordMatch[] {
  const matches: LineWordMatch[] = [];
  let cursor = findDialogueWordStartIndex(whisperWords);
  let lastStartTime = -1;

  lines.forEach((line, lineIndex) => {
    const lineTokens = tokenizeForAlign(line.text);
    const hit = findLineMatchInWhisper(lineTokens, whisperWords, cursor);
    if (!hit) return;

    const startWord = whisperWords[hit.wordStartIdx];
    if (!startWord) return;
    if (startWord.start + 0.05 < lastStartTime) return;

    matches.push({ lineIndex, ...hit });
    cursor = hit.wordEndIdx + 1;
    lastStartTime = startWord.start;
  });

  return matches;
}

type FlatTranscriptToken = { lineIndex: number; token: string };
type FlatWhisperToken = { wordIndex: number; token: string };

function flattenTranscriptTokens(lines: ParsedTranscriptLine[]): FlatTranscriptToken[] {
  const flat: FlatTranscriptToken[] = [];
  lines.forEach((line, lineIndex) => {
    for (const token of tokenizeForAlign(line.text)) {
      flat.push({ lineIndex, token });
    }
  });
  return flat;
}

function buildDialogueWhisperTokens(
  whisperWords: WhisperWord[],
  maxStartSeconds?: number,
  minStartSeconds = DEFAULT_DIALOGUE_MIN_START_SECONDS,
): FlatWhisperToken[] {
  const maxStart = maxStartSeconds ?? Number.POSITIVE_INFINITY;
  const flat: FlatWhisperToken[] = [];
  whisperWords.forEach((word, wordIndex) => {
    if (word.start < minStartSeconds || word.start > maxStart) return;
    const token = normalizeToken(word.word);
    if (token) flat.push({ wordIndex, token });
  });
  return flat;
}

function alignPairScore(transcriptToken: string, whisperToken: string): number {
  return tokensMatch(transcriptToken, whisperToken) ? 3 : -2;
}

function findGlobalAnchorSlice(
  transcript: FlatTranscriptToken[],
  whisper: FlatWhisperToken[],
  anchorText?: string,
): { transcriptIdx: number; whisperIdx: number; phraseLen: number } | null {
  if (!anchorText?.trim()) return null;
  const phraseTokens = tokenizeForAlign(anchorText);
  if (phraseTokens.length === 0) return null;

  let transcriptIdx = -1;
  for (let i = 0; i <= transcript.length - phraseTokens.length; i += 1) {
    let ok = true;
    for (let j = 0; j < phraseTokens.length; j += 1) {
      if (transcript[i + j]?.token !== phraseTokens[j]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      transcriptIdx = i;
      break;
    }
  }

  let whisperIdx = -1;
  for (let i = 0; i <= whisper.length - phraseTokens.length; i += 1) {
    let ok = true;
    for (let j = 0; j < phraseTokens.length; j += 1) {
      const wTok = whisper[i + j]?.token ?? "";
      if (!tokensMatch(phraseTokens[j]!, wTok)) {
        ok = false;
        break;
      }
    }
    if (ok) {
      whisperIdx = i;
      break;
    }
  }

  if (transcriptIdx < 0 || whisperIdx < 0) return null;
  return { transcriptIdx, whisperIdx, phraseLen: phraseTokens.length };
}

function needlemanWunschBanded(
  transcript: FlatTranscriptToken[],
  whisper: FlatWhisperToken[],
  bandWidth = 72,
): Array<{ transcriptIdx: number; whisperIdx: number | null }> {
  const n = transcript.length;
  const m = whisper.length;
  if (n === 0 || m === 0) return [];

  const NEG = -1_000_000;
  const GAP = -2;
  const cols = m + 1;
  const cell = (i: number, j: number) => i * cols + j;

  const scores = new Float32Array((n + 1) * cols).fill(NEG);
  const dirs = new Uint8Array((n + 1) * cols);

  const inBand = (i: number, j: number): boolean => {
    if (i === 0 || j === 0) return true;
    const expectedJ = Math.round((i / n) * m);
    return Math.abs(j - expectedJ) <= bandWidth;
  };

  scores[cell(0, 0)] = 0;

  for (let i = 0; i <= n; i += 1) {
    for (let j = 0; j <= m; j += 1) {
      if (i === 0 && j === 0) continue;
      if (!inBand(i, j)) continue;

      let best = NEG;
      let dir = 0;

      if (i > 0 && j > 0 && inBand(i - 1, j - 1)) {
        const diag =
          scores[cell(i - 1, j - 1)] +
          alignPairScore(transcript[i - 1]!.token, whisper[j - 1]!.token);
        if (diag > best) {
          best = diag;
          dir = 1;
        }
      }
      if (i > 0 && inBand(i - 1, j)) {
        const up = scores[cell(i - 1, j)] + GAP;
        if (up > best) {
          best = up;
          dir = 2;
        }
      }
      if (j > 0 && inBand(i, j - 1)) {
        const left = scores[cell(i, j - 1)] + GAP;
        if (left > best) {
          best = left;
          dir = 3;
        }
      }

      scores[cell(i, j)] = best;
      dirs[cell(i, j)] = dir;
    }
  }

  const pairs: Array<{ transcriptIdx: number; whisperIdx: number | null }> = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const dir = dirs[cell(i, j)];
    if (dir === 1) {
      pairs.push({ transcriptIdx: i - 1, whisperIdx: j - 1 });
      i -= 1;
      j -= 1;
    } else if (dir === 2) {
      pairs.push({ transcriptIdx: i - 1, whisperIdx: null });
      i -= 1;
    } else if (dir === 3) {
      j -= 1;
    } else if (i > 0) {
      pairs.push({ transcriptIdx: i - 1, whisperIdx: null });
      i -= 1;
    } else {
      j -= 1;
    }
  }

  pairs.reverse();
  return pairs;
}

function globalTokenAlignment(
  transcript: FlatTranscriptToken[],
  whisper: FlatWhisperToken[],
  anchorText?: string,
): Array<{ transcriptIdx: number; whisperIdx: number | null }> {
  const anchor = findGlobalAnchorSlice(transcript, whisper, anchorText);
  if (!anchor) {
    return needlemanWunschBanded(transcript, whisper);
  }

  const { transcriptIdx, whisperIdx, phraseLen } = anchor;
  const leftT = transcript.slice(0, transcriptIdx + phraseLen);
  const leftW = whisper.slice(0, whisperIdx + phraseLen);
  const rightT = transcript.slice(transcriptIdx + phraseLen);
  const rightW = whisper.slice(whisperIdx + phraseLen);

  const leftPairs = needlemanWunschBanded(leftT, leftW, 48);
  const rightPairs = needlemanWunschBanded(rightT, rightW, 64).map((pair) => ({
    transcriptIdx: pair.transcriptIdx + transcriptIdx + phraseLen,
    whisperIdx: pair.whisperIdx == null ? null : pair.whisperIdx + whisperIdx + phraseLen,
  }));

  return [...leftPairs, ...rightPairs];
}

function lineMatchesFromGlobalAlignment(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  whisper: FlatWhisperToken[],
  pairs: Array<{ transcriptIdx: number; whisperIdx: number | null }>,
  transcript: FlatTranscriptToken[],
  dialogueMinStartSeconds: number,
): LineWordMatch[] {
  const hitsByLine = new Map<number, number[]>();

  for (const pair of pairs) {
    if (pair.whisperIdx == null) continue;
    const ref = transcript[pair.transcriptIdx];
    const wRef = whisper[pair.whisperIdx];
    if (!ref || !wRef) continue;
    const bucket = hitsByLine.get(ref.lineIndex) ?? [];
    bucket.push(wRef.wordIndex);
    hitsByLine.set(ref.lineIndex, bucket);
  }

  const matches: LineWordMatch[] = [];
  lines.forEach((line, lineIndex) => {
    const hits = hitsByLine.get(lineIndex);
    if (!hits || hits.length === 0) return;

    const lineTokens = tokenizeForAlign(line.text);
    const minHits =
      lineTokens.length <= 2 ? 1 : Math.max(2, Math.ceil(lineTokens.length * 0.22));
    if (hits.length < minHits) return;

    const uniqueHits = [...new Set(hits)].sort((a, b) => a - b);
    const wordStartIdx = uniqueHits[0]!;
    const wordEndIdx = uniqueHits[uniqueHits.length - 1]!;
    const startWord = whisperWords[wordStartIdx];
    if (!startWord || startWord.start < dialogueMinStartSeconds) return;

    matches.push({
      lineIndex,
      wordStartIdx,
      wordEndIdx,
      score: uniqueHits.length / lineTokens.length,
    });
  });

  matches.sort((a, b) => a.lineIndex - b.lineIndex);
  return matches;
}

function findDialogueWhisperStartIndex(
  whisperWords: WhisperWord[],
  anchorText: string | undefined,
  dialogueMinStartSeconds: number,
): number {
  if (anchorText?.trim()) {
    const phraseTokens = tokenizeForAlign(anchorText);
    const anchorIdx = findPhraseWordIndex(whisperWords, phraseTokens, {
      minStart: dialogueMinStartSeconds,
    });
    if (anchorIdx !== null) {
      for (let i = anchorIdx; i >= Math.max(0, anchorIdx - 18); i -= 1) {
        const token = normalizeToken(whisperWords[i]?.word ?? "");
        if (
          token === "okay" ||
          token === "what" ||
          token === "great" ||
          token === "for" ||
          token === "it's" ||
          token === "im"
        ) {
          return i;
        }
      }
      return anchorIdx;
    }
  }
  return findDialogueWordStartIndex(whisperWords, dialogueMinStartSeconds);
}

function firstDialogueLineIndex(
  lines: ParsedTranscriptLine[],
  anchorText?: string,
  presetLineIndex?: number,
): number {
  if (presetLineIndex != null) return presetLineIndex;
  if (anchorText?.trim()) {
    const needle = anchorText.trim().toLowerCase();
    const anchorLine = lines.findIndex((line) => line.text.toLowerCase().includes(needle));
    if (anchorLine >= 1) return anchorLine - 1;
    if (anchorLine === 0) return 0;
  }
  return 0;
}

function assignLineMatchesGlobal(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  alignOpts: TranscriptAlignOptions,
): LineWordMatch[] {
  const dialogueLineStart = firstDialogueLineIndex(
    lines,
    alignOpts.anchorText,
    alignOpts.firstDialogueLineIndex,
  );
  const whisperWordStart = findDialogueWhisperStartIndex(
    whisperWords,
    alignOpts.anchorText,
    alignOpts.dialogueMinStartSeconds,
  );

  const allTranscript = flattenTranscriptTokens(lines);
  const transcriptOffset = allTranscript.findIndex((t) => t.lineIndex >= dialogueLineStart);
  if (transcriptOffset < 0) return [];

  const transcript = allTranscript.slice(transcriptOffset);
  const whisper = buildDialogueWhisperTokens(
    whisperWords,
    alignOpts.maxDialogueEndSeconds,
    alignOpts.dialogueMinStartSeconds,
  ).filter((entry) => entry.wordIndex >= whisperWordStart);
  if (transcript.length === 0 || whisper.length === 0) return [];

  const pairs = globalTokenAlignment(transcript, whisper, alignOpts.anchorText);
  return lineMatchesFromGlobalAlignment(
    lines,
    whisperWords,
    whisper,
    pairs,
    transcript,
    alignOpts.dialogueMinStartSeconds,
  );
}

function assignLineMatchesAnchored(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  anchorText?: string,
): LineWordMatch[] {
  const anchor = findAnchorLineMatch(lines, whisperWords, anchorText);
  if (!anchor) return assignLineMatches(lines, whisperWords);

  const matches: LineWordMatch[] = [anchor];
  let cursor = anchor.wordEndIdx + 1;
  let lastStartTime = whisperWords[anchor.wordStartIdx]?.start ?? -1;

  for (let lineIndex = anchor.lineIndex + 1; lineIndex < lines.length; lineIndex += 1) {
    const lineTokens = tokenizeForAlign(lines[lineIndex]!.text);
    const hit = findLineMatchInWhisper(lineTokens, whisperWords, cursor);
    if (!hit || hit.score < MIN_LINE_MATCH_RATIO) continue;
    if (hit.wordStartIdx < cursor - 1) continue;
    const startWord = whisperWords[hit.wordStartIdx];
    if (!startWord || startWord.start + 0.05 < lastStartTime) continue;
    matches.push({ lineIndex, ...hit });
    cursor = hit.wordEndIdx + 1;
    lastStartTime = startWord.start;
  }

  let beforeCursor = anchor.wordStartIdx;
  for (let lineIndex = anchor.lineIndex - 1; lineIndex >= 0; lineIndex -= 1) {
    const lineTokens = tokenizeForAlign(lines[lineIndex]!.text);
    const hit = findLineMatchBefore(lineTokens, whisperWords, beforeCursor);
    if (!hit || hit.score < MIN_BACKWARD_MATCH_RATIO) continue;
    matches.unshift({ lineIndex, ...hit });
    beforeCursor = hit.wordStartIdx;
  }

  matches.sort((a, b) => a.lineIndex - b.lineIndex);
  return matches;
}

function interpolateCueTimes(
  lines: ParsedTranscriptLine[],
  matches: LineWordMatch[],
  whisperWords: WhisperWord[],
  durationSeconds: number,
): ListeningTranscriptCue[] {
  const matchByLine = new Map<number, LineWordMatch>();
  for (const m of matches) matchByLine.set(m.lineIndex, m);

  const timed = new Map<number, { start: number; end: number }>();

  for (const m of matches) {
    const startWord = whisperWords[m.wordStartIdx];
    const endWord = whisperWords[m.wordEndIdx];
    if (!startWord || !endWord) continue;
    timed.set(m.lineIndex, {
      start: startWord.start,
      end: Math.max(endWord.end, startWord.start + 0.25),
    });
  }

  const firstMatch = matches[0];
  if (firstMatch) {
    const firstTimed = timed.get(firstMatch.lineIndex);
    if (firstTimed) {
      const firstStart = firstTimed.start;
    const backfillStart = Math.max(0, firstStart - Math.min(14, firstStart * 0.12));
    const preLines = lines.slice(0, firstMatch.lineIndex);
    const preWeights = countTranscriptWords(preLines);
    const preTotal = preWeights.reduce((a, b) => a + b, 0) || preLines.length;
    let cursor = backfillStart;

    preLines.forEach((_, offset) => {
      const lineIndex = offset;
      const weight = preWeights[offset] ?? 1;
      const span = ((weight / preTotal) * (firstStart - backfillStart)) || 0.4;
      const start = cursor;
      const end = lineIndex === firstMatch.lineIndex - 1 ? firstStart : cursor + span;
      cursor = end;
      timed.set(lineIndex, { start: roundSec(start), end: roundSec(Math.max(end, start + 0.2)) });
    });
    }
  }

  for (let i = 0; i < matches.length - 1; i += 1) {
    const left = matches[i]!;
    const right = matches[i + 1]!;
    const leftEnd = timed.get(left.lineIndex)!.end;
    const rightStart = timed.get(right.lineIndex)!.start;

    if (right.lineIndex - left.lineIndex <= 1) continue;

    const gapLines = lines.slice(left.lineIndex + 1, right.lineIndex);
    const gapWeights = countTranscriptWords(gapLines);
    const gapTotal = gapWeights.reduce((a, b) => a + b, 0) || gapLines.length;
    const gapSpan = Math.max(0.35, rightStart - leftEnd);
    let cursor = leftEnd;

    gapLines.forEach((_, offset) => {
      const lineIndex = left.lineIndex + 1 + offset;
      const weight = gapWeights[offset] ?? 1;
      const span = (weight / gapTotal) * gapSpan;
      const start = cursor;
      const end = lineIndex === right.lineIndex - 1 ? rightStart : cursor + span;
      cursor = end;
      timed.set(lineIndex, { start: roundSec(start), end: roundSec(Math.max(end, start + 0.2)) });
    });
  }

  const lastMatch = matches[matches.length - 1];
  if (lastMatch) {
    let cursor = timed.get(lastMatch.lineIndex)!.end;
    for (let lineIndex = lastMatch.lineIndex + 1; lineIndex < lines.length; lineIndex += 1) {
      const weight = countTranscriptWords([lines[lineIndex]!])[0] ?? 1;
      const span = Math.max(0.35, weight * 0.22);
      const start = cursor;
      const end = start + span;
      cursor = end;
      timed.set(lineIndex, { start: roundSec(start), end: roundSec(end) });
    }
  }

  let lastEnd = 0;
  const cues: ListeningTranscriptCue[] = lines.map((line, index) => {
    const hit = timed.get(index);
    const start = hit?.start ?? lastEnd;
    const end = hit?.end ?? start + 1.5;
    lastEnd = end;
    return {
      id: `cue-${index + 1}`,
      speaker: line.speaker,
      text: line.text,
      start: roundSec(start),
      end: roundSec(end),
    };
  });

  if (cues.length > 0) {
    for (let i = 0; i < cues.length - 1; i += 1) {
      const cur = cues[i];
      const next = cues[i + 1];
      if (!cur || !next) continue;
      if (next.start > cur.start) {
        const minEnd = cur.start + estimateMinCueDuration(cur.text);
        cur.end = roundSec(
          next.start - cur.start >= minEnd - cur.start ? next.start : Math.max(cur.end, minEnd),
        );
      }
    }
    cues[cues.length - 1]!.end = roundSec(durationSeconds);
  }

  const firstDialogueIdx = firstMatch?.lineIndex ?? 0;
  for (let i = 0; i < lines.length; i += 1) {
    const cue = cues[i];
    if (!cue) continue;
    if (matchByLine.has(i)) {
      cue.preAudio = false;
    } else if (i < firstDialogueIdx) {
      cue.preAudio = true;
    }
  }

  return normalizeCueTimeline(cues, durationSeconds);
}

/** Đảm bảo timeline tăng dần sau anchor / nội suy. */
export function normalizeCueTimeline(
  cues: ListeningTranscriptCue[],
  durationSeconds: number,
): ListeningTranscriptCue[] {
  if (cues.length === 0) return cues;

  for (let i = 1; i < cues.length; i += 1) {
    const prev = cues[i - 1];
    const cur = cues[i];
    if (!prev || !cur) continue;
    if (cur.start < prev.end) {
      cur.start = roundSec(prev.end);
    } else if (cur.start < prev.start) {
      cur.start = roundSec(prev.start + 0.05);
    }
  }

  for (let i = 0; i < cues.length - 1; i += 1) {
    const cur = cues[i];
    const next = cues[i + 1];
    if (!cur || !next) continue;
    if (next.start > cur.start) {
      const minEnd = cur.start + estimateMinCueDuration(cur.text);
      cur.end = roundSec(
        next.start - cur.start >= minEnd - cur.start ? next.start : Math.max(cur.end, minEnd),
      );
    } else if (cur.end <= cur.start) {
      cur.end = roundSec(cur.start + 0.35);
    }
  }

  if (cues[cues.length - 1]) {
    cues[cues.length - 1]!.end = roundSec(durationSeconds);
  }

  repairCollapsedCueRuns(cues, durationSeconds);

  for (let i = 1; i < cues.length; i += 1) {
    const prev = cues[i - 1]!;
    const cur = cues[i]!;
    if (cur.start < prev.end) {
      cur.start = roundSec(prev.end);
    }
    if (cur.end <= cur.start) {
      cur.end = roundSec(cur.start + estimateMinCueDuration(cur.text));
    }
  }

  for (let i = 0; i < cues.length - 1; i += 1) {
    const cur = cues[i]!;
    const next = cues[i + 1]!;
    if (cur.end > next.start) {
      cur.end = roundSec(next.start);
    }
    if (cur.end <= cur.start) {
      cur.end = roundSec(Math.min(next.start, cur.start + estimateMinCueDuration(cur.text)));
    }
  }

  if (cues[cues.length - 1]) {
    cues[cues.length - 1]!.end = roundSec(durationSeconds);
  }

  return cues;
}

function buildCuesFromImprovedWordAlignment(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  durationSeconds: number,
  alignOpts: TranscriptAlignOptions,
): ListeningTranscriptCue[] {
  if (whisperWords.length === 0) {
    return buildCuesFromWordAlignmentLegacy(lines, whisperWords, durationSeconds);
  }

  const matches = assignLineMatchesGlobal(lines, whisperWords, alignOpts);
  const firstMatch = matches[0];
  const firstStart = firstMatch ? whisperWords[firstMatch.wordStartIdx]?.start : undefined;
  const globalOk =
    matches.length >= Math.min(4, lines.length) &&
    firstStart != null &&
    firstStart >= alignOpts.dialogueMinStartSeconds - 2;

  if (!globalOk) {
    const fallback = assignLineMatchesAnchored(lines, whisperWords, alignOpts.anchorText);
    if (fallback.length === 0) {
      return buildCuesFromWordAlignmentLegacy(lines, whisperWords, durationSeconds);
    }
    return interpolateCueTimes(lines, fallback, whisperWords, durationSeconds);
  }

  return interpolateCueTimes(lines, matches, whisperWords, durationSeconds);
}

/**
 * Chia thời lượng thoại trong cửa sổ [speechStart, duration] — không gán intro IELTS vào transcript.
 */
export function buildProportionalTranscriptSync(opts: {
  partId: string;
  audioFile: string;
  durationSeconds: number;
  plainTranscript: string;
  /** Giây trong file audio khi bắt đầu phân bổ thoại (sau intro + đọc đề). Mặc định 0. */
  speechStartSeconds?: number;
}): ListeningTranscriptSyncFile {
  const speechStart = Math.max(0, opts.speechStartSeconds ?? 0);
  const speechWindow = Math.max(1, opts.durationSeconds - speechStart);
  const lines = parseListeningTranscriptLines(opts.plainTranscript);
  const wordCounts = countTranscriptWords(lines);
  const totalWords = wordCounts.reduce((a, b) => a + b, 0);
  const cues: ListeningTranscriptCue[] = [];
  let cursor = 0;

  lines.forEach((line, index) => {
    const weight = wordCounts[index] ?? 1;
    const span = (weight / totalWords) * speechWindow;
    const relStart = cursor;
    const relEnd = index === lines.length - 1 ? speechWindow : cursor + span;
    cursor = relEnd;
    cues.push({
      id: `cue-${index + 1}`,
      speaker: line.speaker,
      text: line.text,
      start: roundSec(speechStart + relStart),
      end: roundSec(speechStart + relEnd),
    });
  });

  return {
    version: 1,
    partId: opts.partId,
    audioFile: opts.audioFile,
    durationSeconds: opts.durationSeconds,
    method: "proportional",
    preambleSeconds: speechStart > 0 ? speechStart : undefined,
    cues,
  };
}

function overlapScore(lineText: string, segmentText: string): number {
  const lineTokens = tokenizeForAlign(lineText);
  const segTokens = tokenizeForAlign(segmentText);
  if (lineTokens.length === 0 || segTokens.length === 0) return 0;
  let hit = 0;
  for (const t of lineTokens) {
    if (segTokens.includes(t)) hit += 1;
  }
  return hit / lineTokens.length;
}

function filterDialogueSegments(segments: WhisperSegment[], maxStartSeconds?: number): Array<{ segment: WhisperSegment; index: number }> {
  const maxStart = maxStartSeconds ?? Number.POSITIVE_INFINITY;
  return segments
    .map((segment, index) => ({ segment, index }))
    .filter(({ segment }) => segment.start >= DEFAULT_DIALOGUE_MIN_START_SECONDS && segment.start <= maxStart);
}

function findFirstDialogueLineIndex(
  lines: ParsedTranscriptLine[],
  dialogueSegments: Array<{ segment: WhisperSegment; index: number }>,
): number {
  let bestLine = 0;
  let bestStart = Number.POSITIVE_INFINITY;

  lines.forEach((line, lineIndex) => {
    for (const { segment } of dialogueSegments) {
      const score = overlapScore(line.text, segment.text);
      if (score >= 0.25 && segment.start < bestStart) {
        bestStart = segment.start;
        bestLine = lineIndex;
      }
    }
  });

  return bestLine;
}

function assignLinesToDialogueSegments(
  lines: ParsedTranscriptLine[],
  segments: WhisperSegment[],
  maxStartSeconds?: number,
): number[] {
  const dialogueSegments = filterDialogueSegments(segments, maxStartSeconds);

  if (dialogueSegments.length === 0) {
    return lines.map(() => 0);
  }

  const assignments: number[] = [];
  let minStart = DEFAULT_DIALOGUE_MIN_START_SECONDS;
  let segPtr = 0;

  for (const line of lines) {
    const maxStart = minStart + 55;
    let bestIdx = dialogueSegments[segPtr]?.index ?? dialogueSegments[0]!.index;
    let bestScore = -1;

    for (let j = segPtr; j < dialogueSegments.length; j += 1) {
      const entry = dialogueSegments[j];
      if (!entry) continue;
      if (entry.segment.start > maxStart) break;
      const score = overlapScore(line.text, entry.segment.text);
      if (score > bestScore) {
        bestScore = score;
        bestIdx = entry.index;
      }
    }

    if (bestScore < 0.12) {
      const fallback = dialogueSegments[segPtr];
      bestIdx = fallback?.index ?? bestIdx;
    }

    assignments.push(bestIdx);
    const picked = dialogueSegments.findIndex(({ index }) => index === bestIdx);
    const pickedSeg = segments[bestIdx];
    if (picked >= 0) segPtr = picked;
    if (pickedSeg) minStart = pickedSeg.start + 0.05;
  }

  return assignments;
}

function buildCuesFromWhisperSegments(
  lines: ParsedTranscriptLine[],
  segments: WhisperSegment[],
  durationSeconds: number,
  maxDialogueStartSeconds?: number,
): ListeningTranscriptCue[] {
  const dialogueSegments = filterDialogueSegments(segments, maxDialogueStartSeconds);
  const assignments = assignLinesToDialogueSegments(lines, segments, maxDialogueStartSeconds);
  const firstDialogueIdx = findFirstDialogueLineIndex(lines, dialogueSegments);
  const anchorSeg = segments[assignments[firstDialogueIdx] ?? 0];
  const dialogueStart = anchorSeg?.start ?? DEFAULT_DIALOGUE_MIN_START_SECONDS;

  const cues: ListeningTranscriptCue[] = lines.map((line, index) => {
    const seg = segments[assignments[index] ?? 0];
    const start =
      index < firstDialogueIdx
        ? dialogueStart - Math.max(0.5, (firstDialogueIdx - index) * 0.45)
        : (seg?.start ?? dialogueStart);
    return {
      id: `cue-${index + 1}`,
      speaker: line.speaker,
      text: line.text,
      start: roundSec(Math.max(0, start)),
      end: roundSec(Math.max(0, start) + 0.4),
      preAudio: index < firstDialogueIdx,
    };
  });

  return normalizeCueTimeline(cues, durationSeconds);
}

/** Căn một câu trong transcript tới mốc thời gian đã nghe trên audio thật. */
export function alignTranscriptSyncToAnchor(
  sync: ListeningTranscriptSyncFile,
  anchorText: string,
  atSeconds: number,
): ListeningTranscriptSyncFile {
  const needle = anchorText.trim().toLowerCase();
  if (!needle) return sync;

  const index = sync.cues.findIndex((c) => c.text.toLowerCase().includes(needle));
  if (index < 0) {
    throw new Error(`Không tìm thấy anchor "${anchorText}" trong transcript cues.`);
  }

  const anchorCue = sync.cues[index]!;
  const offset = atSeconds - anchorCue.start;
  const cues = sync.cues.map((cue, i) => {
    const shifted = {
      ...cue,
      start: roundSec(cue.start + offset),
      end: roundSec(cue.end + offset),
      preAudio: i < index ? true : cue.preAudio,
    };
    if (i < index) {
      shifted.preAudio = true;
    }
    return shifted;
  });

  const last = cues[cues.length - 1];
  if (last && last.end > sync.durationSeconds) {
    last.end = sync.durationSeconds;
  }

  return {
    ...sync,
    anchor: { text: anchorText, atSeconds, cueId: anchorCue.id },
    cues: normalizeCueTimeline(cues, sync.durationSeconds),
  };
}

/** Plain text một dòng mỗi segment Whisper (không có transcript tham chiếu). */
export function whisperSegmentsToPlainTranscript(segments: readonly WhisperSegment[]): string {
  return segments
    .map((segment) => segment.text.trim())
    .filter((text) => text.length > 0)
    .join("\n");
}

/** Sync trực tiếp từ segment Whisper — dùng cho Tactics (chỉ có audio). */
export function buildWhisperSegmentOnlyTranscriptSync(opts: {
  partId: string;
  audioFile: string;
  durationSeconds: number;
  segments: readonly WhisperSegment[];
  method?: ListeningTranscriptSyncFile["method"];
}): ListeningTranscriptSyncFile {
  const segments = opts.segments
    .map((segment) => ({ ...segment, text: segment.text.trim() }))
    .filter((segment) => segment.text.length > 0);

  const cues: ListeningTranscriptCue[] = segments.map((segment, index) => {
    const nextStart = segments[index + 1]?.start;
    const resolvedEnd =
      nextStart !== undefined && nextStart > segment.start
        ? nextStart
        : Math.max(segment.end, segment.start + 0.4);
    return {
      id: `cue-${index + 1}`,
      speaker: null,
      text: segment.text,
      start: roundSec(segment.start),
      end: roundSec(Math.max(resolvedEnd, segment.start + 0.25)),
    };
  });

  return {
    version: 1,
    partId: opts.partId,
    audioFile: opts.audioFile,
    durationSeconds: opts.durationSeconds,
    method: opts.method ?? "whisper-local",
    cues: normalizeCueTimeline(cues, opts.durationSeconds),
  };
}

/** Gán mốc từ Whisper (word timestamps) vào dòng transcript Cambridge. */
export function buildWhisperAlignedTranscriptSync(opts: {
  partId: string;
  audioFile: string;
  durationSeconds: number;
  plainTranscript: string;
  whisperWords: WhisperWord[];
  whisperSegments?: WhisperSegment[];
  method?: ListeningTranscriptSyncFile["method"];
  anchorText?: string;
  dialogueMinStartSeconds?: number;
  maxDialogueEndSeconds?: number;
}): ListeningTranscriptSyncFile {
  const preset = getListeningSyncPartConfig(opts.partId);
  const alignOpts: TranscriptAlignOptions = {
    dialogueMinStartSeconds:
      opts.dialogueMinStartSeconds ?? preset.dialogueMinStartSeconds,
    maxDialogueEndSeconds: opts.maxDialogueEndSeconds ?? preset.maxDialogueEndSeconds,
    firstDialogueLineIndex: preset.firstDialogueLineIndex,
    anchorText: opts.anchorText ?? preset.anchorText,
  };
  const lines = parseListeningTranscriptLines(opts.plainTranscript);
  const cues = normalizeCueTimeline(
    buildCuesFromImprovedWordAlignment(
      lines,
      opts.whisperWords,
      opts.durationSeconds,
      alignOpts,
    ),
    opts.durationSeconds,
  );
  const firstDialogue = cues.find((c) => !c.preAudio) ?? cues[0];

  return {
    version: 1,
    partId: opts.partId,
    audioFile: opts.audioFile,
    durationSeconds: opts.durationSeconds,
    method: opts.method ?? "whisper-local",
    preambleSeconds:
      firstDialogue && firstDialogue.start > 0 ? roundSec(firstDialogue.start) : undefined,
    cues,
  };
}

/** Legacy greedy matcher — fallback khi không match được câu nào. */
function buildCuesFromWordAlignmentLegacy(
  lines: ParsedTranscriptLine[],
  whisperWords: WhisperWord[],
  durationSeconds: number,
): ListeningTranscriptCue[] {
  const lineStarts: (number | null)[] = lines.map(() => null);
  const lineEnds: (number | null)[] = lines.map(() => null);
  const transcriptTokens = flattenLineTokens(lines);
  let wi = findDialogueWordStartIndex(whisperWords);

  for (const { lineIndex, token } of transcriptTokens) {
    if (!token) continue;
    let matched = false;
    while (wi < whisperWords.length) {
      const ww = whisperWords[wi]!;
      const wNorm = normalizeToken(ww.word);
      wi += 1;
      if (!wNorm) continue;
      if (tokensMatch(token, wNorm)) {
        if (lineStarts[lineIndex] === null) lineStarts[lineIndex] = ww.start;
        lineEnds[lineIndex] = ww.end;
        matched = true;
        break;
      }
    }
    if (!matched && wi > 0) {
      const prev = whisperWords[wi - 1];
      if (prev) {
        if (lineStarts[lineIndex] === null) lineStarts[lineIndex] = prev.start;
        lineEnds[lineIndex] = prev.end;
      }
    }
  }

  let lastEnd = whisperWords[0]?.start ?? 0;
  const cues: ListeningTranscriptCue[] = lines.map((line, index) => {
    const start = lineStarts[index] ?? lastEnd;
    const end = lineEnds[index] ?? start + 2;
    lastEnd = end;
    return {
      id: `cue-${index + 1}`,
      speaker: line.speaker,
      text: line.text,
      start: roundSec(start),
      end: roundSec(Math.max(end, start + 0.25)),
    };
  });

  if (cues.length > 0) {
    cues[cues.length - 1]!.end = durationSeconds;
  }

  return cues;
}

type LineToken = { lineIndex: number; token: string };

function flattenLineTokens(lines: ParsedTranscriptLine[]): LineToken[] {
  const flat: LineToken[] = [];
  lines.forEach((line, lineIndex) => {
    for (const token of tokenizeForAlign(line.text)) {
      flat.push({ lineIndex, token });
    }
  });
  return flat;
}

export function findActiveCueId(
  cues: readonly ListeningTranscriptCue[],
  currentTime: number,
): string | null {
  for (const cue of cues) {
    if (cue.preAudio) continue;
    if (currentTime >= cue.start && currentTime < cue.end) return cue.id;
  }
  const lastInAudio = [...cues].reverse().find((c) => !c.preAudio);
  if (lastInAudio && currentTime >= lastInAudio.start) {
    return lastInAudio.id;
  }
  return null;
}
