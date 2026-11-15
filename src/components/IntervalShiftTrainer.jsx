import { useState } from 'react';
import ActionBar from './ActionBar';
import BottomSheet from './BottomSheet';
import { FingeringInput, FingeringLabel, getTrumpetFeedback } from './trumpetShared';
import {
  evaluateTrumpetConfiguration,
  formatTrumpetNote,
  getBestTrumpetConfiguration,
} from '../utils/trumpetTheory';
import {
  createIntervalShiftQuestion, describeShift, SHIFT_FORMATS,
} from '../utils/trumpetIntervals';

const FORMAT_HINTS = {
  Semitones: 'semitones from the current note (+ up, - down)',
  Named: 'above or below the current note',
};

// Trumpet game: the player sees a fingering for the current note and a shift
// (in semitones or as a named interval). They set the fingering for the target
// note with the same controls as Register & Intonation.
export default function IntervalShiftTrainer() {
  const [question, setQuestion] = useState(() => createIntervalShiftQuestion());
  const [format, setFormat] = useState('Semitones');
  const [showStart, setShowStart] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [partial, setPartial] = useState(1);
  const [valves, setValves] = useState([]);
  const [pump1, setPump1] = useState(0);
  const [pump3, setPump3] = useState(0);
  const [result, setResult] = useState(null);

  const task = describeShift(question.semitones, format);
  const startNote = formatTrumpetNote(question.startMidi);
  const targetNote = formatTrumpetNote(question.targetMidi);

  const toggleValve = (valve) => {
    setValves((current) => current.includes(valve)
      ? current.filter((item) => item !== valve)
      : [...current, valve].sort((a, b) => a - b));
  };

  const newQuestion = () => {
    setQuestion(createIntervalShiftQuestion());
    setResult(null);
    setPartial(1);
    setValves([]);
    setPump1(0);
    setPump3(0);
  };

  const submit = () => {
    const configuration = { partial, valves, pump1, pump3 };
    const evaluation = evaluateTrumpetConfiguration(configuration, question.targetMidi);
    setResult({
      ...evaluation,
      configuration,
      possibleSolution: getBestTrumpetConfiguration(question.targetMidi),
    });
  };

  const resultTone = !result ? ''
    : result.quality === 'wrong' ? 'bg-red-500/15 text-red-200'
      : result.quality === 'optimal' ? 'bg-emerald-500/15 text-emerald-200'
        : 'bg-yellow-500/15 text-yellow-200';

  return (
    <div className="space-y-4">
      <section className="glass p-5 text-center shadow-xl">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Current note</p>
        <FingeringLabel
          configuration={question.startConfiguration}
          className="mt-2 text-2xl font-bold leading-snug text-cyan-100"
        />
        {showStart && <p className="mt-1 text-sm text-slate-300">Sounds like {startNote}</p>}
      </section>

      <section className="glass p-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Play</p>
        <p className="mt-2 text-3xl font-bold text-white">{task}</p>
        <p className="mt-1 text-sm text-slate-400">{FORMAT_HINTS[format]}</p>
      </section>

      {result && (
        <section className={`rounded-2xl px-5 py-4 text-center text-sm ${resultTone}`}>
          <p>{getTrumpetFeedback(result)}</p>
          <p className="mt-2 text-xs opacity-80">
            {startNote} {task} = {targetNote}
          </p>
          {result.possibleSolution && (
            <p className="mt-1 text-xs opacity-80">
              Target fingering: P{result.possibleSolution.configuration.partial}
              {' '}· {result.possibleSolution.configuration.valves.length
                ? result.possibleSolution.configuration.valves.join('+') : 'open'}
              {' '}· S1 {result.possibleSolution.configuration.pump1}% · S3 {result.possibleSolution.configuration.pump3}%
            </p>
          )}
        </section>
      )}

      <FingeringInput
        partial={partial} setPartial={setPartial}
        valves={valves} onToggleValve={toggleValve}
        pump1={pump1} setPump1={setPump1}
        pump3={pump3} setPump3={setPump3}
      />

      <ActionBar
        onControls={() => setControlsOpen(true)}
        onSubmit={submit}
        onNew={newQuestion}
      />

      <BottomSheet open={controlsOpen} onClose={() => setControlsOpen(false)} title="Controls">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Task format</p>
        <div className="mb-6 grid grid-cols-2 gap-2">
          {SHIFT_FORMATS.map((item) => (
            <button key={item} type="button" onClick={() => setFormat(item)} aria-pressed={format === item}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${format === item
                ? 'glass-btn is-on text-white'
                : 'glass-btn text-slate-200'}`}>
              {item}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => setShowStart((value) => !value)}
          className="w-full glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
          {showStart ? 'Hide' : 'Show'} current note name
        </button>
      </BottomSheet>
    </div>
  );
}
