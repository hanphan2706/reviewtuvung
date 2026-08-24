export type TranslationDiffToken = {
  text: string;
  kind: "match" | "mismatch";
};

function wordKey(word: string): string {
  return word
    .toLowerCase()
    .normalize("NFKC")
    .replace(/['’]/g, "'")
    .replace(/[^\p{L}\p{N}']+/gu, "");
}

function splitWords(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean);
}

/** So sample với bản dịch: mismatch = từ sample không khớp vị trí với bản dịch. */
export function diffSampleAgainstTranslation(
  sample: string,
  translation: string,
): TranslationDiffToken[] {
  const sampleWords = splitWords(sample);
  const userWords = splitWords(translation);
  const sampleKeys = sampleWords.map(wordKey);
  const userKeys = userWords.map(wordKey);
  const n = sampleKeys.length;
  const m = userKeys.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array<number>(m + 1).fill(0));

  for (let i = n - 1; i >= 0; i -= 1) {
    for (let j = m - 1; j >= 0; j -= 1) {
      const same = sampleKeys[i] !== "" && sampleKeys[i] === userKeys[j];
      dp[i][j] = same ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const tokens: TranslationDiffToken[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    const same = sampleKeys[i] !== "" && sampleKeys[i] === userKeys[j];
    if (same) {
      tokens.push({ text: sampleWords[i] ?? "", kind: "match" });
      i += 1;
      j += 1;
      continue;
    }
    if (dp[i + 1][j] >= dp[i][j + 1]) {
      tokens.push({ text: sampleWords[i] ?? "", kind: "mismatch" });
      i += 1;
    } else {
      j += 1;
    }
  }
  while (i < n) {
    tokens.push({ text: sampleWords[i] ?? "", kind: "mismatch" });
    i += 1;
  }
  return tokens;
}
