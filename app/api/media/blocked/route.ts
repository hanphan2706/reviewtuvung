import { NextResponse } from "next/server";

/** Chặn truy cập trực tiếp MP3/WAV trong public/listening-assets (rewrite từ next.config). */
export function GET() {
  return new NextResponse(null, { status: 404 });
}
