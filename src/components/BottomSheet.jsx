import { useEffect } from 'react';

// Panel that slides up from the bottom on phones and becomes a centred card on wider screens.
// Tapping the backdrop, pressing Escape or the Done button closes it.
export default function BottomSheet({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <button type="button" aria-label={`Close ${title}`} onClick={onClose}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
      <section role="dialog" aria-modal="true" aria-label={title}
        className="absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col rounded-t-2xl border-t border-slate-700 bg-slate-900 shadow-2xl shadow-black/60 md:inset-x-auto md:left-1/2 md:bottom-6 md:w-[28rem] md:max-h-[80vh] md:-translate-x-1/2 md:rounded-2xl md:border">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{title}</p>
          <button type="button" onClick={onClose}
            className="rounded-lg border border-slate-600 bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-100">
            Done
          </button>
        </div>
        <div className="overflow-y-auto overscroll-contain p-5 pb-8">{children}</div>
      </section>
    </div>
  );
}
