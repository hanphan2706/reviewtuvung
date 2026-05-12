const PHRASE_EMOJI_POOL = [
  "✨",
  "💡",
  "🎯",
  "📌",
  "🔗",
  "⚖️",
  "🌟",
  "💬",
  "📝",
  "🎓",
  "🌿",
  "🔑",
  "🧠",
  "📚",
  "🤝",
  "🪄",
  "🌈",
  "☘️",
  "💪",
  "🔥",
  "🌸",
  "⭐️",
] as const;

export function pickRandomPhraseEmoji(): string {
  const i = Math.floor(Math.random() * PHRASE_EMOJI_POOL.length);
  return PHRASE_EMOJI_POOL[i] ?? "✨";
}
