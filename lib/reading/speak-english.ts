/** Phát âm tiếng Anh bằng Web Speech API (miễn phí, không cần server). */
export function canSpeakEnglish(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function pickEnglishVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const en = voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
  return (
    en.find((v) => /samantha|google us english|jenny|aria/i.test(v.name)) ??
    en.find((v) => v.lang.toLowerCase().startsWith("en-us")) ??
    en.find((v) => v.default) ??
    en[0]
  );
}

function speakNow(text: string): void {
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  const voice = pickEnglishVoice(synth.getVoices());
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}

/** Đọc một từ/cụm tiếng Anh. Gọi được từ handler click (user gesture). */
export function speakEnglish(term: string): void {
  if (!canSpeakEnglish()) return;
  const text = term.trim();
  if (!text) return;

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speakNow(text);
    return;
  }

  const onVoices = () => {
    window.speechSynthesis.removeEventListener("voiceschanged", onVoices);
    speakNow(text);
  };
  window.speechSynthesis.addEventListener("voiceschanged", onVoices);
  window.speechSynthesis.getVoices();
}
