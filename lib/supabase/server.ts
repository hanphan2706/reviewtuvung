import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { NextRequest, NextResponse } from "next/server";
import { getSupabaseBrowserConfig } from "@/lib/supabase/config";

/**
 * Dùng trong Route Handler / Proxy: gắn cookie session lên `response` thật sự trả về.
 * Dùng `createServerSupabaseClient` + `cookies()` rồi `return new NextResponse(...)` thì Set-Cookie
 * có thể không nằm trên response — OAuth xong tab chính vẫn chưa đăng nhập (đặc biệt trên localhost).
 */
export async function exchangeOAuthCodeOnResponse(
  request: NextRequest,
  response: NextResponse,
  code: string | null,
  skipExchange: boolean,
): Promise<{ error: string | null }> {
  if (skipExchange || !code) {
    return { error: null };
  }

  const config = getSupabaseBrowserConfig();
  if (!config) {
    return { error: "Thiếu NEXT_PUBLIC_SUPABASE_URL / ANON_KEY" };
  }

  const supabase = createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  return { error: error?.message ?? null };
}

export async function createServerSupabaseClient() {
  const config = getSupabaseBrowserConfig();

  if (!config) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(config.url, config.anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Server Components cannot always write cookies; route handlers can.
        }
      },
    },
  });
}

export async function getCurrentUser() {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return null;
  }

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch {
    // Supabase network timeout / offline — treat as signed out.
    return null;
  }
}
