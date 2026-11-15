// Floating glass dock shared by every trainer: Controls, Submit and New Question
// sit in the same place on every screen and stay reachable while the content scrolls.
export default function ActionBar({
  onSubmit, onNew, newLabel = 'New Question', onExtra, extraLabel, onControls,
}) {
  const button = 'min-w-0 flex-1 rounded-2xl px-2 py-3 text-center text-sm font-semibold leading-tight transition';
  return (
    <div className="sticky bottom-3 z-30 mt-8 px-1 pb-[env(safe-area-inset-bottom)]">
      <div className="glass-strong mx-auto flex max-w-2xl gap-2 rounded-[1.75rem] p-2">
        {onControls && (
          <button type="button" onClick={onControls}
            className={`${button} glass-btn text-slate-100`}>
            Controls
          </button>
        )}
        {onSubmit && (
          <button type="button" onClick={onSubmit} className={`${button} btn-success`}>
            Submit
          </button>
        )}
        {onExtra && (
          <button type="button" onClick={onExtra} className={`${button} glass-btn text-slate-100`}>
            {extraLabel}
          </button>
        )}
        {onNew && (
          <button type="button" onClick={onNew} className={`${button} btn-accent`}>
            {newLabel}
          </button>
        )}
      </div>
    </div>
  );
}
