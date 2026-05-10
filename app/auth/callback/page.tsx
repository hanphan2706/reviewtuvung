import { Suspense } from "react";
import { AuthCallbackInner } from "@/app/auth/callback/auth-callback-inner";

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-dvh flex-col items-center justify-center bg-[#f5f5f7] px-4 text-sm text-zinc-600">
          Đang đăng nhập…
        </div>
      }
    >
      <AuthCallbackInner />
    </Suspense>
  );
}
