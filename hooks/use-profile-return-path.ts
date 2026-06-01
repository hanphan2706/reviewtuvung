"use client";

import { useSyncExternalStore } from "react";
import {
  migrateLegacyProfileReturnQuery,
  PROFILE_DEFAULT_RETURN,
  readProfileReturnPath,
} from "@/lib/profile/profile-return-path";

let legacyMigrated = false;

function ensureLegacyQueryMigrated(): void {
  if (legacyMigrated || typeof window === "undefined") return;
  legacyMigrated = true;
  migrateLegacyProfileReturnQuery();
}

export function useProfileReturnPath(): string {
  return useSyncExternalStore(
    () => () => {},
    () => {
      ensureLegacyQueryMigrated();
      return readProfileReturnPath();
    },
    () => PROFILE_DEFAULT_RETURN,
  );
}
