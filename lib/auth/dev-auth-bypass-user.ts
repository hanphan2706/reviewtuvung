import type { User } from "@supabase/supabase-js";

/** User giả cho API dev/LAN — không sync SRS cloud. */
export function devAuthBypassUser(): User {
  return {
    id: "00000000-0000-4000-8000-000000000001",
    aud: "authenticated",
    role: "authenticated",
    email: "dev-bypass@local",
    email_confirmed_at: new Date().toISOString(),
    phone: "",
    confirmed_at: new Date().toISOString(),
    last_sign_in_at: new Date().toISOString(),
    app_metadata: { provider: "dev-bypass" },
    user_metadata: {},
    identities: [],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    is_anonymous: false,
  };
}
