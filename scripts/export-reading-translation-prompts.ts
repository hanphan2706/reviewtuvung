/**
 * Xuất prompt Markdown từng bài → dùng trong Cursor Composer để dịch sang .vi.json
 *
 *   npx tsx scripts/export-reading-translation-prompts.ts
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { splitBodyParagraphs } from "../lib/reading/format-paragraphs";
import { READING_HUB_ARTICLES } from "../lib/reading/hub-articles";
import { READING_RAW_FILES } from "../lib/reading/raw-manifest";
import { splitReadingPassages } from "../lib/reading/split-passages";

const OUT_DIR = path.join(process.cwd(), "reading translations", "_prompts");

function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  for (const article of READING_HUB_ARTICLES) {
    const rawPath = path.join(process.cwd(), "reading raw", READING_RAW_FILES[article.pilotId]);
    const raw = readFileSync(rawPath, "utf8");
    const passage = splitReadingPassages(raw).find((p) => p.passage === article.passage);
    if (!passage) continue;

    const paragraphs = splitBodyParagraphs(passage.body);
    const outFile = `${article.id}.vi.json`;

    let md = `# ${passage.title}\n\n`;
    md += `- **articleId:** \`${article.id}\`\n`;
    md += `- **Số đoạn:** ${paragraphs.length} (bản dịch phải đúng ${paragraphs.length} phần tử trong mảng \`paragraphs\`)\n\n`;
    md += `Lưu file: \`reading translations/${outFile}\`\n\n`;
    md += "```json\n{\n  \"paragraphs\": [\n    \"...\",\n    \"...\"\n  ]\n}\n```\n\n";
    md += `**Yêu cầu dịch:** tiếng Việt tự nhiên, giữ tên riêng/ loài (Manatees → lợn biển hoặc cá nược tùy ngữ cảnh), không gộp hay tách đoạn.\n\n---\n\n`;

    paragraphs.forEach((para, i) => {
      md += `## Đoạn ${i + 1}\n\n${para}\n\n`;
    });

    writeFileSync(path.join(OUT_DIR, `${article.id}.md`), md, "utf8");
    console.log(`${article.id}: ${paragraphs.length} đoạn → _prompts/${article.id}.md`);
  }
}

main();
