import { useEffect, useMemo, useRef, useState } from 'react';
import ControlSidebar from './ControlSidebar';
import { getChordNotes, getPitchClass, midiToNote, NOTE_NAMES, noteToMidi } from '../utils/musicTheory';

const INTERVALS = [
  [1, 'minor 2nd'], [2, 'major 2nd'], [3, 'minor 3rd'], [4, 'major 3rd'],
  [5, 'perfect 4th'], [6, 'tritone'], [7, 'perfect 5th'], [8, 'minor 6th'],
  [9, 'major 6th'], [10, 'minor 7th'], [11, 'major 7th'], [12, 'octave'],
];
const DIATONIC_DEGREES = [
  ['1', 0], ['2', 2], ['3', 4], ['4', 5], ['5', 7], ['6', 9], ['7', 11],
];
const CHORD_QUALITIES = [
  ['major', 'major'], ['minor', 'minor'], ['aug', 'augmented'], ['dim', 'diminished'],
  ['7', 'dominant 7th'], ['maj7', 'major 7th'], ['m7', 'minor 7th'],
];
const RELATIONS = [
  ['same', 'same root'], ['up5', 'second chord is a 5th above'],
  ['down5', 'second chord is a 5th below'], ['up4', 'second chord is a 4th above'],
  ['relative', 'relative major/minor'],
];

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
const pitch = (root, offset) => noteToMidi(`${root}4`) + offset;

function createQuestion(mode) {
  const root = randomItem(NOTE_NAMES);
  if (mode === 'Interval Recognition') {
    const [semitones, label] = randomItem(INTERVALS);
    return { root, semitones, label, notes: [pitch(root, 0), pitch(root, semitones)] };
  }
  if (mode === 'Diatonic Note Recognition') {
    const [degree, offset] = randomItem(DIATONIC_DEGREES.slice(1));
    const scaleType = randomItem(['major', 'minor']);
    const scaleOffsets = scaleType === 'major' ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
    const scaleOffset = scaleOffsets[Number(degree) - 1];
    return {
      root, degree, scaleType, notes: [pitch(root, 0), pitch(root, scaleOffset)],
    };
  }
  if (mode === 'Chord Quality Recognition') {
    const [quality, label] = randomItem(CHORD_QUALITIES);
    return { root, quality, label, groups: [getChordNotes(`${root}4`, quality).map(noteToMidi)] };
  }
  const [relation, label] = randomItem(RELATIONS);
  const relationOffsets = { same: 0, up5: 7, down5: -7, up4: 5, relative: 9 };
  const secondRoot = midiToNote(pitch(root, relationOffsets[relation])).replace(/-?\d+$/, '');
  return {
    root, secondRoot, relation, label,
    groups: [
      getChordNotes(`${root}4`, 'major').map(noteToMidi),
      getChordNotes(`${secondRoot}4`, relation === 'relative' ? 'minor' : 'major').map(noteToMidi),
    ],
  };
}

function playNotes(contextRef, groups, enabled) {
  if (!enabled || typeof window === 'undefined') return;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  const context = contextRef.current ?? new AudioCtor();
  contextRef.current = context;
  groups.forEach((group, index) => {
    const start = context.currentTime + index * 0.72;
    group.forEach((midi) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.07 / Math.max(1, group.length / 3), start + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.58);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.6);
    });
  });
}

export default function EarTraining({ mode = 'Interval Recognition' }) {
  const [question, setQuestion] = useState(() => createQuestion(mode));
  const [answer, setAnswer] = useState('');
  const [answerState, setAnswerState] = useState('idle');
  const [message, setMessage] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [controlsOpen, setControlsOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setQuestion(createQuestion(mode));
    setAnswer('');
    setAnswerState('idle');
    setMessage('');
  }, [mode]);

  const choices = useMemo(() => {
    if (mode === 'Interval Recognition') return INTERVALS.map(([value, label]) => [String(value), label]);
    if (mode === 'Diatonic Note Recognition') return DIATONIC_DEGREES.map(([value]) => [value, `degree ${value}`]);
    if (mode === 'Chord Quality Recognition') return CHORD_QUALITIES.map(([value, label]) => [value, label]);
    return RELATIONS;
  }, [mode]);

  const playQuestion = () => {
    const groups = question.groups ?? question.notes.map((note) => [note]);
    playNotes(audioRef, groups, audioEnabled);
  };

  const submit = () => {
    const expected = mode === 'Interval Recognition'
      ? String(question.semitones)
      : mode === 'Diatonic Note Recognition'
        ? question.degree
        : mode === 'Chord Quality Recognition' ? question.quality : question.relation;
    const correct = answer === expected;
    setMessage(correct
      ? 'Correct.'
      : `Not quite. The answer is ${mode === 'Interval Recognition'
        ? question.label
        : mode === 'Diatonic Note Recognition'
          ? `degree ${question.degree} of the ${question.root} ${question.scaleType} scale`
          : mode === 'Chord Quality Recognition' ? `${question.root} ${question.label}` : question.label}.`);
    setAnswerState('submitted');
  };

  const newQuestion = () => {
    setQuestion(createQuestion(mode));
    setAnswer('');
    setAnswerState('idle');
    setMessage('');
  };

  const prompt = mode === 'Interval Recognition'
    ? 'Identify the interval.'
    : mode === 'Diatonic Note Recognition'
      ? `The first note is the tonic of a ${question.root} ${question.scaleType} scale. Identify the second note.`
      : mode === 'Chord Quality Recognition'
        ? 'Identify the chord quality.'
        : 'Identify the relation between the two chords.';

  return (
    <main className="relative mx-auto max-w-4xl space-y-4">
      <section className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 text-center">
        <p className="text-lg font-medium text-white">{prompt}</p>
        {message && <p className="mt-2 text-sm text-cyan-200">{message}</p>}
      </section>
      <section className="rounded-2xl border border-cyan-700/60 bg-slate-950/70 p-6 text-center">
        <p className="text-sm text-slate-300">Listen, then choose your answer.</p>
        <button type="button" onClick={playQuestion}
          className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
          Play exercise
        </button>
      </section>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {choices.map(([value, label]) => (
          <button key={value} type="button" onClick={() => { setAnswer(value); setAnswerState('idle'); setMessage(''); }}
            className={`rounded-xl border px-3 py-3 text-sm ${answer === value
              ? 'border-cyan-300 bg-cyan-400/20 text-cyan-100'
              : 'border-slate-600 bg-slate-800 text-slate-200 hover:border-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>
      <ControlSidebar open={controlsOpen} onToggle={() => setControlsOpen((open) => !open)} label="Ear training controls">
        <button type="button" onClick={() => setAudioEnabled((enabled) => !enabled)}
          className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100">
          Audio {audioEnabled ? 'ON' : 'OFF'}
        </button>
      </ControlSidebar>
      <div className="flex gap-3">
        <button type="button" onClick={submit}
          className="flex-1 rounded-xl border border-emerald-500/60 bg-emerald-500/15 px-4 py-2.5 font-semibold text-emerald-200">
          Submit
        </button>
        <button type="button" onClick={newQuestion}
          className="flex-1 rounded-xl bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950">
          New Question
        </button>
      </div>
    </main>
  );
}
