/**
 * Trim + re-theme American IPA chart SVG for Anthichtuhoc.
 * Source: https://americanipachart.com (Fabien Snauwaert) — embed SVG from S3.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const inputPath = path.join(root, "public/listening/american-ipa-chart-english.source.svg");
const outputPath = path.join(root, "public/listening/american-ipa-chart-anthichtuhoc.svg");

/** Crop: drop intro header (~0–270) and HELP/footer below diphthongs (~3285+). */
const VIEWBOX = { x: 0, y: 270, w: 644, h: 3015 };

let svg = fs.readFileSync(inputPath, "utf8");

const cssReplacements = [
  ["#background, #cutout { fill: #a4c2db; }", "#background, #cutout { fill: #f5f5f7; }"],
  [".contentBackground { fill: #ffd9ab; }", ".contentBackground { fill: #ffffff; }"],
  [".titleBackground { fill: #0075b2; }", ".titleBackground { fill: #000001; }"],
  ["#h2deco { fill: #007eb5; }", "#h2deco { fill: #000001; }"],
  ["#h3deco > g { fill: #fbb03b; }", "#h3deco > g { fill: #E4E4E7; }"],
  ['stroke="#fbb03b"', 'stroke="#E4E4E7"'],
  ["fill: #0075b2;", "fill: #000001;"],
  ["fill: #007eb5;", "fill: #000001;"],
];

for (const [from, to] of cssReplacements) {
  svg = svg.split(from).join(to);
}

svg = svg.replace(
  /viewBox="0 0 644 4365" width="644" height="4365"/,
  `viewBox="${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}" width="${VIEWBOX.w}" height="${VIEWBOX.h}"`,
);

/** Hide leftover help/footer nodes if they overlap the crop edge. */
const hideRule = `
/** Anthichtuhoc trim — hide intro, help, footer */
#header, #footer, #calltoaction, #credits, #background_legend, #background_credits,
#title_legend, #legend_primarystress, #legend_secondarystress, #legend_syllabification,
#title_accentsetsyllabes, #title_instructions, #title_commentretenir,
text.signature { display: none; }
`;

svg = svg.replace("/** Backgrounds **/", `${hideRule}\n/** Backgrounds **/`);

fs.writeFileSync(outputPath, svg);
console.log(`Wrote ${outputPath} (${(fs.statSync(outputPath).size / 1024).toFixed(0)} KB)`);
