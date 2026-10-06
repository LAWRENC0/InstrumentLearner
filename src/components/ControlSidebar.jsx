export default function ControlSidebar({ side = 'right', open, onToggle, children, label }) {
  const isRight = side === 'right';
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? `Close ${label}` : `Open ${label}`}
        className={[
          'fixed top-1/2 z-[60] -translate-y-1/2 border bg-slate-900/95 px-2 py-4 text-cyan-200 shadow-xl backdrop-blur-md',
          isRight ? 'right-0 rounded-l-xl border-r-0 border-cyan-400/70' : 'left-0 rounded-r-xl border-l-0 border-cyan-400/70',
        ].join(' ')}
      >
        <span className="text-lg">{open ? (isRight ? '›' : '‹') : (isRight ? '‹' : '›')}</span>
      </button>
      <aside className={[
        'fixed inset-y-3 z-50 w-72 overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-md transition-transform duration-200',
        isRight ? 'right-0 rounded-r-none' : 'left-0 rounded-l-none',
        open ? 'translate-x-0' : isRight ? 'translate-x-full' : '-translate-x-full',
      ].join(' ')}>
        <p className="mb-5 text-center text-xs uppercase tracking-[0.3em] text-cyan-300">{label}</p>
        <div className="flex flex-col gap-3">{children}</div>
      </aside>
    </>
  );
}
