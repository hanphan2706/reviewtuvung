/**
 * Per-lesson gist (main idea) correct keys for Tactics Basic flow.
 * Varies count (1 / 2 / 3) and avoids always marking the first two options.
 */
export const TACTICS_GIST_CORRECT_KEYS: Record<string, readonly string[]> = {
  "tactics-basic-u01-l01": ["contact-details", "fix-contact-mistakes", "social-plans"],
  "tactics-basic-u01-l02": ["everyday-situations"],
  "tactics-basic-u01-l03": ["spell-clarify", "recognize-stranger"],
  "tactics-basic-u02-l01": ["mixed-appearance", "age-only", "height-only"],
  "tactics-basic-u02-l02": ["describe-people-you-know"],
  "tactics-basic-u02-l03": ["describe-child", "lost-kids"],
  "tactics-basic-u03-l01": ["party-event"],
  "tactics-basic-u03-l02": ["try-another", "wrong-size"],
  "tactics-basic-u03-l03": ["formal-casual", "detailed-outfits"],
  "tactics-basic-u04-l01": ["tell-time"],
  "tactics-basic-u04-l02": ["early-late", "sleep-schedules"],
  "tactics-basic-u04-l03": ["work-study", "three-routines"],
  "tactics-basic-u05-l01": ["short-stays"],
  "tactics-basic-u05-l02": ["specific-dates", "scheduled-events"],
  "tactics-basic-u05-l03": ["when-birthday", "plans", "gifts"],
  "tactics-basic-u06-l01": ["six-jobs"],
  "tactics-basic-u06-l02": ["new-old"],
  "tactics-basic-u06-l03": ["stay-or-leave", "job-feelings"],
  "tactics-basic-u07-l01": ["entertainment"],
  "tactics-basic-u07-l02": ["reasons", "six-sites"],
  "tactics-basic-u07-l03": ["entertainment-trends"],
  "tactics-basic-u08-l01": ["fitness", "sports-habits"],
  "tactics-basic-u08-l02": ["play-vs-watch"],
  "tactics-basic-u08-l03": ["different-levels", "five-people"],
};

/** Default gist fallback (non-Tactics lessons): exactly one correct option. */
export const DEFAULT_GIST_CORRECT_KEYS = ["intro"] as const;
