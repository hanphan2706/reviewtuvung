/**
 * Cambridge-style answer matching for gap-fill keys.
 *
 * - `ice-free / ice free` → either form
 * - `(pathogenic) bacteria` → `pathogenic bacteria` or `bacteria`
 * - `(eventually) died` → `eventually died` or `died`
 * - `(its / the) branches` → `branches`, `its branches`, or `the branches`
 * - Slash inside `(…)` stays in that optional group; only top-level `/` splits alternates.
 */

export function normalizeExamAns(value: string): string {
  return String(value || "")
    .replace(/[\u2018\u2019\u201A\u2032\u0060\u00B4]/g, "'")
    .replace(/[\u201C\u201D\u201E\u2033]/g, '"')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
    .replace(/\u00A0/g, " ")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ");
}

/** Split on `/` that are not inside parentheses. */
export function splitTopLevelSlash(raw: string): string[] {
  const parts: string[] = [];
  let buf = "";
  let depth = 0;
  for (const ch of String(raw)) {
    if (ch === "(") depth += 1;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    if (ch === "/" && depth === 0) {
      const trimmed = buf.trim();
      if (trimmed) parts.push(trimmed);
      buf = "";
      continue;
    }
    buf += ch;
  }
  const tail = buf.trim();
  if (tail) parts.push(tail);
  return parts.length > 0 ? parts : [String(raw).trim()].filter(Boolean);
}

function collapseSpaces(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Expand one `(optional)` group at a time (with/without; slash alts inside the group). */
export function expandParenOptions(raw: string): string[] {
  const s = String(raw);
  const match = s.match(/^(.*?)\(([^)]*)\)(.*)$/);
  if (!match) {
    const plain = collapseSpaces(s);
    return plain ? [plain] : [];
  }
  const before = match[1] ?? "";
  const inside = match[2] ?? "";
  const after = match[3] ?? "";
  const innerAlts = splitTopLevelSlash(inside).map((x) => x.trim()).filter(Boolean);
  const branches = innerAlts.length > 0 ? innerAlts : [""];
  const out: string[] = [];
  for (const inn of branches) {
    out.push(...expandParenOptions(collapseSpaces(`${before}${inn}${after}`)));
  }
  out.push(...expandParenOptions(collapseSpaces(`${before}${after}`)));
  const seen = new Set<string>();
  return out.filter((x) => {
    if (!x || seen.has(x)) return false;
    seen.add(x);
    return true;
  });
}

/** All acceptable surface forms for a Cambridge answer key cell. */
export function expandAnswerKeyVariants(correctVal: string): string[] {
  const tops = splitTopLevelSlash(correctVal);
  const out: string[] = [];
  const seen = new Set<string>();
  for (const top of tops) {
    for (const variant of expandParenOptions(top)) {
      const norm = normalizeExamAns(variant);
      if (!norm || seen.has(norm)) continue;
      seen.add(norm);
      out.push(norm);
    }
  }
  return out;
}

export function answersMatch(userVal: string, correctVal: string): boolean {
  if (!userVal || !correctVal) return false;
  const userNorm = normalizeExamAns(userVal);
  if (!userNorm) return false;
  const variants = expandAnswerKeyVariants(correctVal);
  if (variants.includes(userNorm)) return true;
  const strippedUser = normalizeExamAns(String(userVal).replace(/[^a-z0-9\s]/gi, ""));
  return variants.some((v) => v.replace(/[^a-z0-9\s]/gi, "") === strippedUser);
}
