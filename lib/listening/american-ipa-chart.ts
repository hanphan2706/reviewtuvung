/** Interactive American IPA chart (General American) — Fabien Snauwaert / americanipachart.com */
export const AMERICAN_IPA_CHART_SITE_URL = "https://americanipachart.com";

/** Interactive chart — themed local copy (see scripts/customize-american-ipa-chart.mjs). */
export const AMERICAN_IPA_CHART_SVG_PATH = "/listening/american-ipa-chart-anthichtuhoc.svg";

/** Original upstream SVG (unmodified). */
export const AMERICAN_IPA_CHART_SOURCE_SVG_URL =
  "https://americanipachart.s3.amazonaws.com/american-IPA-chart-english.svg";

export const AMERICAN_IPA_CHART_PNG_URL =
  "https://americanipachart.s3.amazonaws.com/american-IPA-chart-english.png";

export const AMERICAN_IPA_CHART_ATTRIBUTION = {
  label: "American IPA Chart",
  href: AMERICAN_IPA_CHART_SITE_URL,
  author: "Fabien Snauwaert",
} as const;

const AMERICAN_IPA_PHONEME_AUDIO_BASE =
  "https://bilingueanglaismedia.s3.amazonaws.com/blog/infographics/api/mp3";

/** Isolated phoneme clip from American IPA Chart (same source as full interactive chart). */
export function americanIpaPhonemeAudioUrl(phonemeSlug: string): string {
  return `${AMERICAN_IPA_PHONEME_AUDIO_BASE}/PHONEME-${phonemeSlug}.mp3`;
}
