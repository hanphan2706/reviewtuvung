"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { WORD_NOTION_TEXT_COLORS } from "@/lib/word-text-colors";
import { prepareWordHtmlForEdit, sanitizeWordHtml } from "@/lib/sanitize-word-html";

/** Chèn xuống dòng không phụ thuộc `execCommand` (hay fail khi ô mới / Safari). Caret đặt sau `<br>` bằng ZWSP rồi strip khi sync. */
function insertBrAtCaret(editor: HTMLDivElement): boolean {
  try {
    editor.focus();
    const sel = window.getSelection();
    if (!sel) return false;

    const ensureRange = (): Range => {
      if (sel.rangeCount > 0) {
        const r = sel.getRangeAt(0);
        if (editor.contains(r.commonAncestorContainer)) return r;
      }
      const r = document.createRange();
      r.selectNodeContents(editor);
      r.collapse(false);
      sel.removeAllRanges();
      sel.addRange(r);
      return r;
    };

    const range = ensureRange();
    range.deleteContents();
    const br = document.createElement("br");
    range.insertNode(br);

    const pad = document.createTextNode("\u200B");
    const parent = br.parentNode;
    if (parent) {
      parent.insertBefore(pad, br.nextSibling);
    }

    const nextRange = document.createRange();
    nextRange.setStart(pad, 0);
    nextRange.collapse(true);
    sel.removeAllRanges();
    sel.addRange(nextRange);
    return true;
  } catch {
    return false;
  }
}

export type RichTextFieldProps = {
  value: string;
  onChange: (html: string) => void;
  /** Gợi ý nhỏ phía trên ô (màu nhạt). */
  hint?: string;
  className?: string;
  minHeightClass?: string;
  /** Ngôn ngữ gợi ý cho kiểm tra chính tả trình duyệt (tiếng Anh vocabulary). */
  lang?: string;
  "aria-label"?: string;
};

export function RichTextField({
  value,
  onChange,
  hint,
  className = "",
  minHeightClass = "min-h-14",
  lang = "en",
  "aria-label": ariaLabel,
}: RichTextFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isUserTypingRef = useRef(false);
  const rangeRef = useRef<Range | null>(null);
  const [toolbar, setToolbar] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isUserTypingRef.current) {
      isUserTypingRef.current = false;
      return;
    }
    const prepared = prepareWordHtmlForEdit(value);
    if (el.innerHTML !== prepared) {
      el.innerHTML = prepared;
    }
  }, [value]);

  const syncFromDom = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const raw = el.innerHTML.replace(/\u200B/g, "");
    onChange(sanitizeWordHtml(raw));
  }, [onChange]);

  const updateToolbar = useCallback(() => {
    const el = ref.current;
    if (!el) {
      setToolbar(null);
      return;
    }
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
      rangeRef.current = null;
      setToolbar(null);
      return;
    }
    const range = sel.getRangeAt(0);
    rangeRef.current = range.cloneRange();
    const anchor = range.commonAncestorContainer;
    const container = anchor.nodeType === Node.TEXT_NODE ? anchor.parentElement : (anchor as HTMLElement);
    if (!container || !el.contains(container)) {
      rangeRef.current = null;
      setToolbar(null);
      return;
    }
    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      setToolbar(null);
      return;
    }
    setToolbar({
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    });
  }, []);

  useEffect(() => {
    const onSel = () => requestAnimationFrame(updateToolbar);
    document.addEventListener("selectionchange", onSel);
    return () => document.removeEventListener("selectionchange", onSel);
  }, [updateToolbar]);

  useEffect(() => {
    const onDocDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (ref.current?.contains(t)) return;
      if ((e.target as HTMLElement).closest?.("[data-rich-toolbar]")) return;
      setToolbar(null);
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  const execRich = useCallback(
    (fn: () => void) => {
      const el = ref.current;
      ref.current?.focus();
      const sel = window.getSelection();
      const r = rangeRef.current;
      if (r && el?.contains(r.commonAncestorContainer) && sel) {
        sel.removeAllRanges();
        sel.addRange(r);
      }
      try {
        document.execCommand("styleWithCSS", false, "true");
        fn();
      } catch {
        /* ignore */
      }
      isUserTypingRef.current = true;
      syncFromDom();
      requestAnimationFrame(updateToolbar);
    },
    [syncFromDom, updateToolbar],
  );

  const onBold = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!(e.metaKey || e.ctrlKey) || e.key.toLowerCase() !== "b") return;
    e.preventDefault();
    execRich(() => {
      document.execCommand("bold", false);
    });
  };

  const applyColor = (hex: string) => {
    execRich(() => {
      document.execCommand("foreColor", false, hex);
    });
    setToolbar(null);
  };

  const applyBold = () => {
    execRich(() => {
      document.execCommand("bold", false);
    });
  };

  return (
    <>
      {hint ? <p className="mb-1.5 text-xs text-zinc-400">{hint}</p> : null}
      <div
        ref={ref}
        role="textbox"
        aria-multiline="true"
        aria-label={ariaLabel}
        lang={lang}
        tabIndex={0}
        contentEditable
        suppressContentEditableWarning
        spellCheck
        onInput={() => {
          isUserTypingRef.current = true;
          syncFromDom();
          updateToolbar();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !(e.metaKey || e.ctrlKey)) {
            /** IME (VD: gõ tiếng Việt): Enter để chọn từ — không chặn, không chèn `<br>`. */
            const ne = e.nativeEvent;
            if ("isComposing" in ne && ne.isComposing) return;
            if (e.keyCode === 229) return;

            e.preventDefault();
            e.stopPropagation();

            const el = ref.current;
            if (el) {
              const ok = insertBrAtCaret(el);
              if (!ok) {
                try {
                  document.execCommand("insertHTML", false, "<br>");
                } catch {
                  try {
                    document.execCommand("insertLineBreak");
                  } catch {
                    /* ignore */
                  }
                }
              }
            }
            isUserTypingRef.current = true;
            syncFromDom();
            updateToolbar();
            return;
          }
          onBold(e);
        }}
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData("text/plain");
          const lines = text.split(/\n/);
          for (let i = 0; i < lines.length; i++) {
            if (i > 0) {
              try {
                document.execCommand("insertHTML", false, "<br>");
              } catch {
                document.execCommand("insertLineBreak");
              }
            }
            document.execCommand("insertText", false, lines[i] ?? "");
          }
          isUserTypingRef.current = true;
          syncFromDom();
          updateToolbar();
        }}
        className={`w-full resize-y wrap-break-word rounded-xl border border-zinc-200/90 bg-white px-4 py-3 text-sm text-ink outline-none ring-zinc-300/80 focus-visible:border-zinc-400 focus-visible:ring-1 ${minHeightClass} ${className}`.trim()}
      />

      {toolbar && typeof document !== "undefined"
        ? createPortal(
            <div
              data-rich-toolbar
              role="toolbar"
              aria-label="Định dạng chữ"
              className="fixed z-[100] flex w-max flex-row flex-nowrap items-center gap-1 rounded-2xl border border-zinc-200/90 bg-white px-1.5 py-1 shadow-lg ring-1 ring-zinc-950/5 -translate-x-1/2 -translate-y-full"
              style={{ top: toolbar.top, left: toolbar.left }}
              onMouseDown={(e) => e.preventDefault()}
            >
              <button
                type="button"
                title="In đậm"
                onClick={applyBold}
                className="flex h-[22px] w-[22px] shrink-0 cursor-pointer items-center justify-center rounded-xl bg-zinc-800 text-[11px] font-bold leading-none text-white shadow-sm"
              >
                B
              </button>
              {WORD_NOTION_TEXT_COLORS.map((c) => {
                const isWhite = c.hex.toLowerCase() === "#ffffff";
                return (
                  <button
                    key={c.id}
                    type="button"
                    title={c.id}
                    onClick={() => applyColor(c.hex)}
                    className={`flex h-[22px] w-[22px] shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 bg-white text-[10px] font-semibold leading-none tracking-tight ${
                      isWhite ? "border-zinc-300 text-zinc-400" : ""
                    }`}
                    style={
                      isWhite
                        ? undefined
                        : {
                            borderColor: c.hex,
                            color: c.hex,
                          }
                    }
                  >
                    A
                  </button>
                );
              })}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
