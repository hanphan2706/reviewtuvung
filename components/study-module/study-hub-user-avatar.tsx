"use client";

import { User } from "lucide-react";
import type { StudyHubUserProfile } from "@/lib/auth/user-profile";

export function StudyHubUserAvatar({
  profile,
  className = "size-9",
}: {
  profile: StudyHubUserProfile | null;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ebe6f4] text-[#47464b] ${className}`}
    >
      {profile?.avatarUrl ? (
        // eslint-disable-next-line @next/next/no-img-element -- URL Google OAuth, đổi theo user
        <img
          src={profile.avatarUrl}
          alt=""
          className="size-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <User className="size-5" aria-hidden />
      )}
    </span>
  );
}
