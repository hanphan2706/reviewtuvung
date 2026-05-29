import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";
import { READING_HUB_ARTICLES } from "@/lib/reading/hub-articles";
import { createServiceRoleSupabaseClient } from "@/lib/supabase/service-role";

const VALID_IDS = new Set(READING_HUB_ARTICLES.map((a) => a.id));

function normalizeArticleKey(key: string): string | null {
  const base = key.replace(/:vocab$/i, "").trim();
  return VALID_IDS.has(base) ? base : null;
}

async function loadReadCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const article of READING_HUB_ARTICLES) {
    counts[article.id] = 0;
  }

  const supabase = createServiceRoleSupabaseClient();
  if (!supabase) return counts;

  const { data, error } = await supabase.from("reading_article_log").select("article_key");
  if (error || !data) return counts;

  for (const row of data) {
    const key = typeof row.article_key === "string" ? row.article_key : "";
    const articleId = normalizeArticleKey(key);
    if (!articleId) continue;
    counts[articleId] = (counts[articleId] ?? 0) + 1;
  }

  return counts;
}

const getCachedReadCounts = unstable_cache(loadReadCounts, ["reading-article-read-counts-v1"], {
  revalidate: 120,
});

export async function GET() {
  const counts = await getCachedReadCounts();
  return NextResponse.json({ counts, configured: Boolean(createServiceRoleSupabaseClient()) });
}
