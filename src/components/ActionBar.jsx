// Bottom action row shared by every trainer, so Submit / New sit in the same place on every screen.
// It stays pinned to the bottom of the viewport while the content scrolls above it.
export default function ActionBar({
  onSubmit, onNew, newLabel = 'New Question', onExtra, extraLabel, onControls,
}) {
  const button = 'min-w-0 flex-1 whitespace-nowrap rounded-xl px-3 py-3 text-sm font-semibold transition disabled:opacity-40';
  return (
    <div className="sticky bottom-0 z-30 -mx-4 mt-6 border-t border-slate-800 bg-slate-950/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-7xl gap-2">
        {onControls && (
          <button type="button" onClick={onControls}
            className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-100">
            Controls
          </button>
        )}
        {onSubmit && (
          <button type="button" onClick={onSubmit}
            className={`${button} border border-emerald-500/60 bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25`}>
            Submit
          </button>
        )}
        {onExtra && (
          <button type="button" onClick={onExtra}
            className={`${button} border border-violet-400/60 bg-violet-500/15 text-violet-200 hover:bg-violet-500/25`}>
            {extraLabel}
          </button>
        )}
        {onNew && (
          <button type="button" onClick={onNew}
            className={`${button} bg-cyan-500 text-slate-950 hover:bg-cyan-400`}>
            {newLabel}
          </button>
        )}
      </div>
    </div>
  );
}
