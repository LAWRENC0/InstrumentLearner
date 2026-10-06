function Menu({ label, items, value, open, onToggle, onSelect, className }) {
  return (
    <div className="relative">
      <button type="button" onClick={onToggle} aria-expanded={open} className={className}>
        {value} <span className="ml-2 text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute left-0 z-50 mt-2 max-h-[calc(100vh-8rem)] min-w-40 overflow-y-auto overscroll-contain rounded-xl border border-slate-600 bg-slate-900 p-1 text-left shadow-xl">
          {items.map((item) => (
            <button key={item} type="button" onClick={() => onSelect(item)}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-slate-800">
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HeaderSelector({
  instrument, mode, modes, difficulty, difficulties, exercise, exercises, openMenu, onMenuToggle,
  onInstrumentChange, onModeChange, onDifficultyChange, onExerciseChange,
}) {
  const instrumentModes = instrument === 'guitar' ? modes : ['Register & Intonation', 'Register Graph'];
  return (
    <header className="relative z-50 mb-6 rounded-2xl border border-slate-700 bg-slate-900/70 p-4 text-center backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Instrument Learner</p>
      <div className="mt-4 flex flex-wrap items-start justify-center gap-3">
        <Menu
          value={instrument}
          items={['guitar', 'trumpet']}
          open={openMenu === 'instrument'}
          onToggle={() => onMenuToggle('instrument')}
          onSelect={onInstrumentChange}
          className="min-w-40 rounded-xl border border-amber-300/70 bg-amber-300/15 px-4 py-2.5 text-sm font-semibold capitalize text-amber-200"
        />
        <Menu
          value={instrument === 'guitar' ? mode : mode}
          items={instrumentModes}
          open={openMenu === 'mode'}
          onToggle={() => onMenuToggle('mode')}
          onSelect={onModeChange}
          className="min-w-52 rounded-xl border border-cyan-400/70 bg-cyan-500/15 px-4 py-2.5 text-sm font-semibold text-cyan-200"
        />
        {instrument === 'guitar' && difficulties?.length > 0 && (
          <Menu
            value={`Difficulty: ${difficulty}`}
            items={difficulties}
            open={openMenu === 'difficulty'}
            onToggle={() => onMenuToggle('difficulty')}
            onSelect={onDifficultyChange}
            className="min-w-44 rounded-xl border border-violet-400/70 bg-violet-500/15 px-4 py-2.5 text-sm font-semibold text-violet-200"
          />
        )}
        {instrument === 'guitar' && exercises?.length > 0 && (
          <Menu
            value={exercise}
            items={exercises}
            open={openMenu === 'exercise'}
            onToggle={() => onMenuToggle('exercise')}
            onSelect={onExerciseChange}
            className="min-w-48 rounded-xl border border-violet-400/70 bg-violet-500/15 px-4 py-2.5 text-sm font-semibold text-violet-200"
          />
        )}
      </div>
    </header>
  );
}
