import { NextResponse } from "next/server";
import { filterSelfStudyPickerItems } from "@/lib/classroom/self-study-catalog";
import { requireApiAdmin } from "@/lib/classroom/api-auth";

export async function GET(request: Request) {
  const auth = await requireApiAdmin();
  if (auth.response) return auth.response;
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  const items = filterSelfStudyPickerItems(q).slice(0, 80);
  return NextResponse.json({ items });
}
