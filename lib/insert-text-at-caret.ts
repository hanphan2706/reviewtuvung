/** Chèn chữ thuần tại caret trong `contentEditable` (Safari / Chrome). */
export function insertPlainTextAtCaret(editor: HTMLElement, text: string): void {
  editor.focus();
  const sel = window.getSelection();
  if (!sel) return;

  const ensureRange = (): Range | null => {
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
  if (!range) return;
  range.deleteContents();
  const node = document.createTextNode(text);
  range.insertNode(node);
  range.setStartAfter(node);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}
