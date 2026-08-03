/** Thêm target=_blank cho mọi <a href="http(s)://..."> chưa có target (HTML Notion / tuition). */
export function withExternalLinkTargets(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (full, attrs: string) => {
    if (/\btarget\s*=/i.test(attrs)) return full;
    const hrefMatch = attrs.match(/\bhref\s*=\s*(["'])(.*?)\1/i);
    if (!hrefMatch) return full;
    const href = hrefMatch[2] ?? "";
    if (!/^https?:\/\//i.test(href)) return full;
    const trimmed = attrs.trimEnd();
    const spacer = trimmed.length > 0 ? " " : "";
    return `<a${spacer}${trimmed} target="_blank" rel="noopener noreferrer">`;
  });
}
