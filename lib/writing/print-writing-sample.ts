"use client";

import { splitWritingEssayParagraphs } from "@/lib/writing/writing-sample-paragraphs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absoluteAssetUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${window.location.origin}${path}`;
}

function waitForImages(doc: Document): Promise<void> {
  const images = [...doc.images];
  if (images.length === 0) return Promise.resolve();
  return Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        }),
    ),
  ).then(() => undefined);
}

export async function printWritingSample(input: {
  title: string;
  taskLabel: string;
  typeLabel: string;
  band: string;
  prompt: string;
  visualSrc?: string;
  modelAnswer: string;
  vocab: readonly { phrase: string; glossVi: string }[];
  wordCount?: number;
}): Promise<void> {
  const paragraphs = splitWritingEssayParagraphs(input.modelAnswer)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
  const vocab =
    input.vocab.length === 0
      ? ""
      : `<h2>Key vocabulary</h2><ul>${input.vocab
          .map((item) => {
            const gloss = item.glossVi ? ` — ${escapeHtml(item.glossVi)}` : "";
            return `<li><strong>${escapeHtml(item.phrase)}</strong>${gloss}</li>`;
          })
          .join("")}</ul>`;
  const chart = input.visualSrc
    ? `<img class="chart" src="${escapeHtml(absoluteAssetUrl(input.visualSrc))}" alt="Task 1 visual" />`
    : "";
  const words = input.wordCount ? `<p class="muted">${input.wordCount} words</p>` : "";

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>${escapeHtml(input.title)}</title>
  <style>
    @page { margin: 16mm; }
    html, body { margin: 0; padding: 0; background: #fff; color: #000001; }
    body { font-family: Helvetica, Arial, sans-serif; font-size: 12pt; line-height: 1.55; padding: 8mm; }
    .watermark {
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 0;
      pointer-events: none;
      transform: translate(-50%, -50%) rotate(-28deg);
      color: #4b2876;
      font-size: 42pt;
      font-weight: 700;
      letter-spacing: 0.18em;
      white-space: nowrap;
      opacity: 0.1;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .sheet { position: relative; z-index: 1; }
    .meta { font-size: 9pt; letter-spacing: 0.08em; text-transform: uppercase; color: #4b2876; font-weight: 700; }
    .type { color: #47464b; margin-left: 10px; }
    h1 { font-size: 20pt; line-height: 1.25; margin: 10px 0 18px; }
    h2 { font-size: 9pt; letter-spacing: 0.12em; text-transform: uppercase; color: #47464b; margin: 22px 0 8px; }
    p { margin: 0 0 12px; }
    .prompt { font-style: italic; color: #47464b; }
    .chart { display: block; max-width: 100%; height: auto; margin: 12px 0 4px; border: 1px solid #E4E4E7; page-break-inside: avoid; }
    ul { padding-left: 1.1rem; margin: 0; }
    li { margin: 0.35rem 0; }
    .muted { font-size: 10pt; color: #47464b; }
  </style>
</head>
<body>
  <div class="watermark" aria-hidden="true">anthichtuhoc</div>
  <div class="sheet">
    <div class="meta">${escapeHtml(input.taskLabel)}<span class="type">${escapeHtml(input.typeLabel)}${
      input.band ? ` · Band ${escapeHtml(input.band)}` : ""
    }</span></div>
    <h1>${escapeHtml(input.title)}</h1>
    <h2>Essay Prompt</h2>
    <p class="prompt">${escapeHtml(input.prompt)}</p>
    ${chart}
    <h2>Model answer</h2>
    ${paragraphs}
    ${words}
    ${vocab}
  </div>
</body>
</html>`;

  const iframe = document.createElement("iframe");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.append(iframe);

  const frameWindow = iframe.contentWindow;
  const frameDoc = iframe.contentDocument;
  if (!frameWindow || !frameDoc) {
    iframe.remove();
    throw new Error("Không mở được cửa sổ in.");
  }

  frameDoc.open();
  frameDoc.write(html);
  frameDoc.close();
  await waitForImages(frameDoc);

  await new Promise<void>((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      frameWindow.removeEventListener("afterprint", done);
      iframe.remove();
      resolve();
    };
    frameWindow.addEventListener("afterprint", done);
    window.setTimeout(done, 120_000);
    frameWindow.focus();
    frameWindow.print();
  });
}
