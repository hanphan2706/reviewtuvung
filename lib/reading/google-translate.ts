/** Google Cloud Translation API v2 (cần GOOGLE_TRANSLATE_API_KEY). */

export function isGoogleTranslateConfigured(): boolean {
  return Boolean(process.env.GOOGLE_TRANSLATE_API_KEY?.trim());
}

export async function translateGoogleVi(text: string): Promise<string | null> {
  const key = process.env.GOOGLE_TRANSLATE_API_KEY?.trim();
  if (!key) return null;

  const q = text.trim().slice(0, 500);
  if (!q) return null;

  const url = new URL("https://translation.googleapis.com/language/translate/v2");
  url.searchParams.set("key", key);
  url.searchParams.set("q", q);
  url.searchParams.set("source", "en");
  url.searchParams.set("target", "vi");
  url.searchParams.set("format", "text");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url.toString(), { method: "POST", signal: controller.signal });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      data?: { translations?: { translatedText?: string }[] };
    };
    const translated = data.data?.translations?.[0]?.translatedText?.trim();
    if (!translated) return null;
    return translated;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
