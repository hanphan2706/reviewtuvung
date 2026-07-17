/** Bảng từ “Choose from the box” — chỉ hiện nhãn đáp án, không khung/tiêu đề. */
export function ExerciseChoiceBank({ words }: { words: readonly string[] }) {
  if (words.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {words.map((word) => (
        <span
          key={word}
          className="rounded-lg border border-[#E4E4E7] bg-white px-2.5 py-1 font-serif text-sm text-[#000001]"
        >
          {word}
        </span>
      ))}
    </div>
  );
}
