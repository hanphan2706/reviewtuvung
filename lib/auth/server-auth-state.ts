import { headers } from "next/headers";
import type { User } from "@supabase/supabase-js";
import { devAuthBypassUser } from "@/lib/auth/dev-auth-bypass-user";
import { isDevAuthBypassForHost, resolveRequestHostname } from "@/lib/auth/dev-auth-bypass";
import { getCurrentUser } from "@/lib/supabase/server";

export type ServerAuthState = {
  user: User | null;
  loggedIn: boolean;
  devBypass: boolean;
};

export async function getServerAuthState(): Promise<ServerAuthState> {
  const user = await getCurrentUser();
  if (user) {
    return { user, loggedIn: true, devBypass: false };
  }

  const hostHeader = (await headers()).get("host");
  const hostname = resolveRequestHostname("", hostHeader);
  const devBypass = isDevAuthBypassForHost(hostname);
  return {
    user: devBypass ? devAuthBypassUser() : null,
    loggedIn: devBypass,
    devBypass,
  };
}
