import {
  formatTrumpetConfiguration,
  PUMP_LEVELS,
  MAX_TRUMPET_PARTIAL,
} from '../utils/trumpetTheory';

// Player's view: valve 1, valve 2, and valve 3 from left to right.
export const VALVES = [1, 2, 3];
export const VALVE_SEMITONES = { 1: -2, 2: -1, 3: -3 };

// Filled dot = valve pressed, dash = valve open. Used for "P2 ●−●" style labels.
export function valveNotation(valves) {
  return VALVES.map((valve) => (valves.includes(valve) ? '●' : '−')).join('');
}

// Compact fingering label shared by the scale chart and the interval game:
// partial plus valves on the first line, tuning slide percentages on the second.
export function FingeringLabel({ configuration, showSlides = true, className = '' }) {
  return (
    <div className={className}>
      <div>{`P${configuration.partial}  ${valveNotation(configuration.valves)}`}</div>
      {showSlides && (
        <div className="text-base font-medium">
          S1: {configuration.pump1}% · S3: {configuration.pump3}%
        </div>
      )}
    </div>
  );
}

export function getTrumpetFeedback(result) {
  if (result.quality === 'optimal') return 'Correct: centered pitch with no slide correction.';
  const direction = result.exactMidi < result.targetMidi ? 'flat' : 'sharp';
  const details = [
    `Your configuration produces ${result.note}, ${Math.abs(result.distanceCents).toFixed(1)} cents ${direction} of ${result.targetNote}.`,
  ];
  if (!result.coherentPumps) details.push('A tuning slide is extended without its corresponding valve being pressed.');
  if (result.quality === 'corrected') details.push('The note is in tune, but try the conventional fingering without slide correction.');
  if (result.possibleSolution) details.push(`Try ${formatTrumpetConfiguration(result.possibleSolution.configuration)}.`);
  return details.join(' ');
}

// Partial stepper, valve buttons and tuning slides. Fully controlled by the parent.
export function FingeringInput({
  partial, setPartial, valves, onToggleValve, pump1, setPump1, pump3, setPump3,
}) {
  const getPartialShift = (nextPartial) => {
    const exactSemitones = 12 * Math.log2(nextPartial / partial);
    return `${exactSemitones >= 0 ? '+' : ''}${exactSemitones.toFixed(2)}`;
  };

  return (
    <section className="glass p-5 shadow-2xl">
      <div className="grid gap-3 md:grid-cols-[1fr_1.1fr_1fr] md:items-stretch">
        <label className="flex flex-col gap-3 glass-inset p-4">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-200">Partial</span>
          <input
            type="range"
            min="1"
            max={MAX_TRUMPET_PARTIAL}
            value={partial}
            onChange={(event) => setPartial(Number(event.target.value))}
            className="accent-amber-300"
          />
          <div className="flex items-center justify-center gap-4">
            <div className="flex w-16 flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => setPartial((current) => Math.max(1, current - 1))}
                disabled={partial === 1}
                aria-label="Decrease partial"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </button>
              <span className="text-center text-xs text-amber-100/70">
                {partial > 1 ? getPartialShift(partial - 1) : '—'}
              </span>
            </div>
            <span className="min-w-12 text-center text-3xl font-bold text-white">{partial}</span>
            <div className="flex w-16 flex-col items-center gap-1">
              <button
                type="button"
                onClick={() => setPartial((current) => Math.min(MAX_TRUMPET_PARTIAL, current + 1))}
                disabled={partial === MAX_TRUMPET_PARTIAL}
                aria-label="Increase partial"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                  <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </button>
              <span className="text-center text-xs text-amber-100/70">
                {partial < MAX_TRUMPET_PARTIAL ? getPartialShift(partial + 1) : '—'}
              </span>
            </div>
          </div>
        </label>

        <div className="glass-inset p-3">
          <p className="mb-2 text-center text-xs uppercase tracking-[0.2em] text-amber-200">Valves</p>
          <div className="flex justify-center gap-3">
            {VALVES.map((valve) => (
              <button
                key={valve}
                type="button"
                onClick={() => onToggleValve(valve)}
                className={[
                  'flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 font-bold transition',
                  valves.includes(valve)
                    ? 'border-amber-200 bg-amber-300 text-amber-950 shadow-[0_0_24px_rgba(252,211,77,0.45)]'
                    : 'border-white/35 bg-white/5 text-slate-100 backdrop-blur-md hover:border-amber-200',
                ].join(' ')}
              >
                <span className="text-2xl">{valve}</span>
                <span className="text-[10px] uppercase">{VALVE_SEMITONES[valve]} st</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 glass-inset p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Tuning slides</p>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            1st slide: {pump1}%
            <input type="range" min="0" max="4" step="1" value={PUMP_LEVELS.indexOf(pump1)} onChange={(event) => setPump1(PUMP_LEVELS[Number(event.target.value)])} className="accent-amber-300" />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-200">
            3rd slide: {pump3}%
            <input type="range" min="0" max="4" step="1" value={PUMP_LEVELS.indexOf(pump3)} onChange={(event) => setPump3(PUMP_LEVELS[Number(event.target.value)])} className="accent-amber-300" />
          </label>
        </div>
      </div>
    </section>
  );
}
