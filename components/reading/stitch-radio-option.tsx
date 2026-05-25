"use client";

type StitchRadioOptionProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
  boldWhenSelected?: boolean;
};

/** Radio kiểu Stitch — viền tím, chấm tròn tím (không dùng accent xanh mặc định của trình duyệt). */
export function StitchRadioOption({
  name,
  value,
  label,
  checked,
  onChange,
  boldWhenSelected = true,
}: StitchRadioOptionProps) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-3 transition-all ${
        checked
          ? "border-[#4b2876] shadow-sm"
          : "border-[#E4E4E7] hover:border-[#4b2876]/50"
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`flex size-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          checked ? "border-[#4b2876]" : "border-[#d4d4d8]"
        }`}
        aria-hidden
      >
        {checked ? <span className="size-2 rounded-full bg-[#4b2876]" /> : null}
      </span>
      <span
        className={`text-sm leading-snug ${
          checked && boldWhenSelected ? "font-semibold text-[#1c1b1c]" : "text-[#47464b]"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
