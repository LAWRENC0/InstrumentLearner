import BottomSheet from './BottomSheet';

const INSTRUMENTS = [
  { id: 'guitar', label: 'Guitar' },
  { id: 'trumpet', label: 'Trumpet' },
  { id: 'piano', label: 'Piano' },
  { id: 'earTraining', label: 'Ear Training' },
];

const TRUMPET_MODES = ['Register & Intonation', 'Register Graph', 'Scale Fingering Chart'];
const PIANO_MODES = [
  'Guess the Note', 'Build Scale', 'Guess the Scale',
  'Recognize Chord', 'Build Chord', 'Recognize Interval', 'Build Interval', 'Chord Inversions',
];
const EAR_MODES = ['Interval Recognition', 'Diatonic Note Recognition', 'Chord Quality Recognition', 'Chord Relation Recognition'];

export function modesFor(instrument, guitarModes) {
  if (instrument === 'guitar') return guitarModes;
  if (instrument === 'trumpet') return TRUMPET_MODES;
  if (instrument === 'piano') return PIANO_MODES;
  return EAR_MODES;
}

function Choice({ active, onClick, children, className = '' }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className={[
        'rounded-xl border px-4 py-3 text-left text-sm font-semibold transition',
        active
          ? 'border-cyan-300 bg-cyan-400/20 text-cyan-100'
          : 'border-slate-600 bg-slate-800 text-slate-200 hover:border-slate-400',
        className,
      ].join(' ')}>
      {children}
    </button>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
      {children}
    </div>
  );
}

export default function HeaderSelector({
  instrument, mode, guitarModes, difficulty, difficulties, exercise, exercises,
  menuOpen, onOpenMenu, onCloseMenu,
  onInstrumentChange, onModeChange, onDifficultyChange, onExerciseChange,
}) {
  const instrumentLabel = INSTRUMENTS.find((item) => item.id === instrument)?.label ?? 'Guitar';
  const instrumentModes = modesFor(instrument, guitarModes);
  const showDifficulty = instrument === 'guitar' && difficulties?.length > 0;
  const showExercise = instrument === 'guitar' && exercises?.length > 0;

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-slate-800 bg-slate-950/90 px-4 py-3 backdrop-blur-md md:px-8">
        <button type="button" onClick={onOpenMenu} aria-haspopup="dialog" aria-expanded={menuOpen}
          className="shrink-0 rounded-xl border border-cyan-400/70 bg-cyan-500/15 px-4 py-2.5 text-sm font-semibold text-cyan-200">
          Menu
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs uppercase tracking-[0.2em] text-cyan-300">{instrumentLabel}</p>
          <p className="truncate text-base font-semibold text-white">
            {mode}
            {showDifficulty && <span className="text-slate-400"> · {difficulty}</span>}
            {showExercise && <span className="text-slate-400"> · {exercise}</span>}
          </p>
        </div>
      </header>

      <BottomSheet open={menuOpen} onClose={onCloseMenu} title="Instrument Learner">
        <Section title="Instrument">
          <div className="grid grid-cols-2 gap-2">
            {INSTRUMENTS.map((item) => (
              <Choice key={item.id} active={instrument === item.id} onClick={() => onInstrumentChange(item.id)}>
                {item.label}
              </Choice>
            ))}
          </div>
        </Section>
        <Section title="Mode">
          <div className="flex flex-col gap-2">
            {instrumentModes.map((item) => (
              <Choice key={item} active={mode === item} onClick={() => onModeChange(item)}>{item}</Choice>
            ))}
          </div>
        </Section>
        {showDifficulty && (
          <Section title="Difficulty">
            <div className="grid grid-cols-2 gap-2">
              {difficulties.map((item) => (
                <Choice key={item} active={difficulty === item} onClick={() => onDifficultyChange(item)}>{item}</Choice>
              ))}
            </div>
          </Section>
        )}
        {showExercise && (
          <Section title="Exercise">
            <div className="flex flex-col gap-2">
              {exercises.map((item) => (
                <Choice key={item} active={exercise === item} onClick={() => onExerciseChange(item)}>{item}</Choice>
              ))}
            </div>
          </Section>
        )}
      </BottomSheet>
    </>
  );
}
