import { NextResponse } from "next/server";
import { requireApiUser } from "@/lib/auth/require-api-user";
import { getListeningPartById } from "@/lib/listening/content-manifest";
import {
  mapListeningRecentHistoryItem,
  type ListeningLessonLogRow,
} from "@/lib/listening/listening-progress";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 10;

export async function GET(req: Request) {
  const auth = await requireApiUser();
  if (auth.response) return auth.response;

  const url = new URL(req.url);
  const limitParam = Number.parseInt(url.searchParams.get("limit") ?? "", 10);
  const limit = Number.isFinite(limitParam)
    ? Math.min(MAX_LIMIT, Math.max(1, limitParam))
    : DEFAULT_LIMIT;

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ items: [], configured: false });
  }

  const { data, error } = await supabase
    .from("listening_lesson_log")
    .select("lesson_id,progress,opened_at")
    .eq("user_id", auth.user.id)
    .order("opened_at", { ascending: false })
    .limit(limit);

  if (error) {
    return NextResponse.json({ items: [], configured: true, error: error.message }, { status: 500 });
  }

  const rows = (data as ListeningLessonLogRow[] | null) ?? [];
  const items = rows
    .map((row) => {
      const meta = getListeningPartById(row.lesson_id);
      if (!meta) return null;
      return mapListeningRecentHistoryItem(row, meta);
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return NextResponse.json({ items, configured: true });
}
