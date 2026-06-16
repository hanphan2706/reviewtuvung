/** Làm tròn band trung bình theo quy tắc IELTS (0.125↓, 0.25→.5, 0.5 giữ, 0.75→lên). */
export function roundIeltsAverageBand(average: number): number {
  const clamped = Math.max(0, Math.min(9, average));
  const whole = Math.floor(clamped + 1e-9);
  const frac = clamped - whole;
  const eighth = Math.min(7, Math.max(0, Math.round(frac * 8)));

  if (eighth <= 1) return whole;
  if (eighth === 2) return whole + 0.5;
  if (eighth === 3) return whole;
  if (eighth === 4 || eighth === 5) return whole + 0.5;
  return whole + 1;
}

/** Lấy trung bình tối đa 3 band gần nhất (đầu mảng = mới nhất). */
export function averageLastThreeIeltsBands(bands: readonly number[]): number | null {
  if (bands.length === 0) return null;
  const sample = bands.slice(0, 3);
  const sum = sample.reduce((acc, band) => acc + band, 0);
  return roundIeltsAverageBand(sum / sample.length);
}

export function formatIeltsBandDisplay(band: number | null | undefined): string {
  if (band == null || !Number.isFinite(band)) return "—";
  return band.toFixed(1);
}
