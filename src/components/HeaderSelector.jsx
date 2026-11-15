import BottomSheet from './BottomSheet';

const INSTRUMENTS = [
  { id: 'guitar', label: 'Guitar' },
  { id: 'trumpet', label: 'Trumpet' },
  { id: 'piano', label: 'Piano' },
  { id: 'earTraining', label: 'Ear Training' },
];

const TRUMPET_MODES = ['Register & Intonation', 'Register Graph', 'Scale Fingering Chart', 'Interval Shift'];
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
      className={`glass-btn rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-100 ${className}`}>
      {children}
    </button>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">{title}</p>
      {children}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h10" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
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
  const subtitle = [mode, showDifficulty ? difficulty : null, showExercise ? exercise : null]
    .filter(Boolean).join(' · ');

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6">
        <div className="glass-strong mx-auto flex max-w-7xl items-center gap-3 rounded-[1.5rem] px-3 py-2.5">
          <button type="button" onClick={onOpenMenu} aria-haspopup="dialog" aria-expanded={menuOpen}
            className="btn-accent flex shrink-0 items-center gap-2 px-4 py-2.5 text-sm">
            <span className="relative z-10 flex items-center gap-2"><MenuIcon />Menu</span>
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              {instrumentLabel}
            </p>
            <p className="truncate text-base font-semibold text-white">{subtitle}</p>
          </div>
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
