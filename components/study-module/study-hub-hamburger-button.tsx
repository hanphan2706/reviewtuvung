"use client";

export function StudyHubHamburgerButton({
  open,
  onClick,
  className = "",
  matchNavLink = false,
}: {
  open: boolean;
  onClick: () => void;
  className?: string;
  /** Khớp nút back (← Tự học) trên top bar từ vựng. */
  matchNavLink?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 cursor-pointer items-center justify-center text-[#000001] transition hover:cursor-pointer hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 ${
        matchNavLink ? "h-8 rounded-xl px-2 text-sm leading-none" : "rounded-xl p-1.5"
      } ${className}`}
      aria-expanded={open}
      aria-haspopup="dialog"
      aria-label={open ? "Đóng menu" : "Mở menu"}
    >
      <span className="flex w-[22px] flex-col justify-center gap-[5px]" aria-hidden>
        <span className="h-0.5 w-full rounded-full bg-[#000001]" />
        <span className="h-0.5 w-full rounded-full bg-[#000001]" />
      </span>
    </button>
  );
}
