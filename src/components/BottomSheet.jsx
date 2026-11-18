import { useEffect } from 'react';

// Glass panel that rises from the bottom on phones and becomes a floating card on wider screens.
// Tapping the backdrop, pressing Escape or Done closes it.
export default function BottomSheet({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50" style={{ animation: 'fade-in 0.2s ease both' }}>
      <button type="button" aria-label={`Close ${title}`} onClick={onClose}
        className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl" />
      <section role="dialog" aria-modal="true" aria-label={title}
        style={{ animation: 'sheet-up 0.38s cubic-bezier(0.2, 0.8, 0.2, 1) both' }}
        className="glass-strong absolute inset-x-2 bottom-2 flex max-h-[85vh] flex-col rounded-[2rem] md:inset-x-auto md:bottom-6 md:left-1/2 md:w-[28rem] md:max-h-[80vh] md:-translate-x-1/2">
        <div className="flex justify-center pt-3">
          <span className="sheet-grip" aria-hidden="true" />
        </div>
        <div className="flex items-center justify-between px-6 pb-3 pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">{title}</p>
          <button type="button" onClick={onClose}
            className="glass-btn px-4 py-1.5 text-sm font-semibold text-slate-100">
            Done
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain px-6 pb-8 pt-2">{children}</div>
      </section>
    </div>
  );
}
