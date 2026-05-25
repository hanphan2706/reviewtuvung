export type ReadingPassageBlock = {
  passage: number;
  title: string;
  body: string;
};

/**
 * Tách file raw Cambridge-style: mỗi khối bắt đầu `READING PASSAGE n`.
 * Phần hiển thị: bỏ dòng hướng dẫn "You should spend...", lấy dòng tiêu đề bài (Manatees, …),
 * cắt trước dòng bắt đầu bằng `Questions` (giữ phần đọc, ẩn đề).
 */
export function splitReadingPassages(raw: string): ReadingPassageBlock[] {
  const normalized = raw.replace(/\r\n/g, "\n");
  const segments = normalized.split(/(?=^READING PASSAGE \d+\s*$)/im).filter((s) => /^READING PASSAGE \d+/im.test(s.trim()));

  const out: ReadingPassageBlock[] = [];

  for (const seg of segments) {
    const lines = seg.split("\n");
    const head = lines[0]?.match(/READING PASSAGE (\d+)/i);
    if (!head?.[1]) continue;
    const passage = Number.parseInt(head[1], 10);
    let i = 1;
    while (i < lines.length) {
      const t = (lines[i] ?? "").trim();
      if (/^you should spend about/i.test(t) || t === "") {
        i += 1;
        continue;
      }
      break;
    }
    const title = (lines[i] ?? "").trim() || `Passage ${passage}`;
    i += 1;
    const bodyLines: string[] = [];
    for (; i < lines.length; i += 1) {
      const line = lines[i] ?? "";
      if (/^questions?\b/i.test(line.trim())) break;
      bodyLines.push(line);
    }
    out.push({
      passage,
      title,
      body: bodyLines.join("\n").trim(),
    });
  }

  return out.sort((a, b) => a.passage - b.passage);
}
