/** Parse khối DECK trong file .txt (`text | ...` hoặc một dòng). */
export function parsePassageDeckText(deckText: string): string {
  if (!deckText.trim()) return "";

  const lines: string[] = [];
  for (const line of deckText.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || /^deck$/i.test(trimmed)) continue;

    const pipe = trimmed.match(/^(?:text|deck)\s*\|\s*(.+)$/i);
    if (pipe?.[1]) {
      lines.push(pipe[1].trim());
      continue;
    }
    lines.push(trimmed);
  }

  return lines.join(" ").replace(/\s+/g, " ").trim();
}
