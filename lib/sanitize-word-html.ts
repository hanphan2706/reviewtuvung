import DOMPurify from "isomorphic-dompurify";

let hookRegistered = false;

/** Giá trị `color:` an toàn. */
function isSafeColorValue(val: string): boolean {
  const v = val.trim();
  if (/^#[0-9A-Fa-f]{3,8}$/i.test(v)) return true;
  if (/^rgb\([^)]+\)$/i.test(v)) return true;
  if (/^rgba\([^)]+\)$/i.test(v)) return true;
  if (/^hsl\([^)]+\)$/i.test(v)) return true;
  if (/^hsla\([^)]+\)$/i.test(v)) return true;
  const named = new Set([
    "black",
    "white",
    "gray",
    "grey",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "brown",
    "pink",
    "teal",
    "navy",
    "maroon",
    "olive",
    "lime",
    "aqua",
    "silver",
  ]);
  return named.has(v.toLowerCase());
}

/** `styleWithCSS` + bold/color thường tạo `<span style="font-weight: 700; color: ...">` — phải giữ cả hai. */
function normalizeSpanStyle(style: string): string | null {
  const parts: string[] = [];
  const colorM = /\bcolor\s*:\s*([^;]+)/i.exec(style);
  if (colorM) {
    const val = colorM[1].trim();
    if (isSafeColorValue(val)) parts.push(`color: ${val}`);
  }
  const fwM = /\bfont-weight\s*:\s*([^;]+)/i.exec(style);
  if (fwM) {
    const raw = fwM[1].trim().toLowerCase();
    if (raw === "bold" || raw === "bolder" || raw === "700" || raw === "600" || raw === "800" || raw === "900") {
      parts.push("font-weight: 700");
    }
  }
  if (parts.length === 0) return null;
  return parts.join("; ");
}

/** `execCommand(foreColor)` đôi khi tạo `<font color="...">` — chuyển sang span để DOMPurify giữ được. */
function convertFontTagsToSpans(html: string): string {
  return html.replace(/<font\b([^>]*)>([\s\S]*?)<\/font>/gi, (_full, rawAttrs: string, inner: string) => {
    const q = /\bcolor\s*=\s*(["'])([^"']*)\1/i.exec(rawAttrs);
    const u = q ? q[2] : /\bcolor\s*=\s*([^\s>]+)/i.exec(rawAttrs)?.[1];
    const c = (u ?? "").trim();
    if (!c) return `<span>${inner}</span>`;
    return `<span style="color: ${c}">${inner}</span>`;
  });
}

function ensureStyleHook() {
  if (hookRegistered) return;
  hookRegistered = true;
  DOMPurify.addHook("uponSanitizeAttribute", (node, data) => {
    if (node.nodeName === "SPAN" && data.attrName !== "style") {
      data.keepAttr = false;
      return;
    }
    if (data.attrName === "style" && node.nodeName === "SPAN") {
      const normalized = normalizeSpanStyle(data.attrValue ?? "");
      if (normalized) {
        data.attrValue = normalized;
      } else {
        data.keepAttr = false;
      }
    }
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Legacy: plain text với `**đoạn**` → HTML (không có thẻ). */
export function legacyPlainToStyledHtml(raw: string): string {
  if (!raw.includes("**")) return escapeHtml(raw);
  const parts = raw.split(/(\*\*[^*]+\*\*)/g);
  return parts
    .map((part) => {
      const m = part.match(/^\*\*([^*]+)\*\*$/);
      if (m) return `<b>${escapeHtml(m[1])}</b>`;
      return escapeHtml(part);
    })
    .join("");
}

export function looksLikeHtmlMarkup(s: string): boolean {
  return /<[a-z][\s\S]*?>/i.test(s);
}

export function sanitizeWordHtml(dirty: string): string {
  ensureStyleHook();
  const normalized = convertFontTagsToSpans(dirty);
  return DOMPurify.sanitize(normalized, {
    ALLOWED_TAGS: ["b", "strong", "span", "br"],
    ALLOWED_ATTR: ["style"],
  });
}

export function prepareWordHtmlForEdit(raw: string): string {
  const t = raw ?? "";
  if (!t.trim()) return "";
  return looksLikeHtmlMarkup(t) ? sanitizeWordHtml(t) : legacyPlainToStyledHtml(t);
}

export function htmlToPlainTrim(html: string): string {
  if (!html.trim()) return "";
  if (typeof document === "undefined") {
    return html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }
  const d = document.createElement("div");
  d.innerHTML = html;
  return (d.textContent ?? "").replace(/\s+/g, " ").trim();
}
