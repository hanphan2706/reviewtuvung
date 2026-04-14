import type { UserId, UserSrsPayload } from "./types";

/**
 * Contract for syncing SRS data with a remote backend (e.g. Supabase or Firebase).
 * The Zustand store acts as the local implementation until wired up.
 */
export interface SrsRepository {
  fetchUserPayload(userId: UserId): Promise<UserSrsPayload | null>;
  upsertUserPayload(payload: UserSrsPayload): Promise<void>;
}
