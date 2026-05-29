import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { getCurrentUser } from "@/lib/supabase/server";

export async function GET() {
  const user = await getCurrentUser();
  if (user) {
    return NextResponse.json({
      loggedIn: true,
      email: user.email ?? null,
      devBypass: false,
    });
  }

  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname("", hostHeader);
  if (isDevAuthBypassForHost(hostname)) {
    const bypass = devAuthBypassUser();
    return NextResponse.json({
      loggedIn: true,
      email: bypass.email,
      devBypass: true,
    });
  }

  return NextResponse.json({
    loggedIn: false,
    email: null,
    devBypass: false,
  });
}
