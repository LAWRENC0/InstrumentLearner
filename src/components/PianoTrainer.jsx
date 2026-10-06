import { useEffect, useMemo, useRef, useState } from 'react';
import ControlSidebar from './ControlSidebar';
import { getPitchClass, midiToNote, NOTE_NAMES, noteToMidi } from '../utils/musicTheory';

const BLACK_PITCH_CLASSES = new Set([1, 3, 6, 8, 10]);
const SCALE_OFFSETS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
};
const FIRST_MIDI = 48;
const LAST_MIDI = 83;
const WHITE_KEY_WIDTH = 32;

function randomScale() {
  const root = NOTE_NAMES[Math.floor(Math.random() * NOTE_NAMES.length)];
  const type = Math.random() < 0.5 ? 'major' : 'minor';
  return { root, type };
}

function scalePitchClasses(root, type) {
  const rootPitch = getPitchClass(root);
  return SCALE_OFFSETS[type].map((offset) => (rootPitch + offset) % 12);
}

function PianoKeyboard({ highlightedKeys, selectedKeys, answerState, onToggle, revealNames }) {
  const midiNotes = Array.from({ length: LAST_MIDI - FIRST_MIDI + 1 }, (_, index) => FIRST_MIDI + index);
  const whiteNotes = midiNotes.filter((midi) => !BLACK_PITCH_CLASSES.has(midi % 12));
  const whiteIndexByMidi = new Map(whiteNotes.map((midi, index) => [midi, index]));
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
      <div className="relative mx-auto h-44 min-w-fit" style={{ width: `${whiteNotes.length * WHITE_KEY_WIDTH}px` }}>
        <div className="absolute inset-x-0 bottom-0 flex h-36">
          {whiteNotes.map((midi) => {
            const key = String(midi);
            return (
              <button key={midi} type="button" onClick={() => onToggle(midi)}
                aria-label={midiToNote(midi)}
                aria-pressed={selectedKeys.has(key)}
                className={[
                  'relative h-full w-8 shrink-0 border-r border-slate-500/70 bg-slate-100 text-slate-700',
                  highlightedKeys.has(key) ? '!bg-cyan-300' : '',
                  selectedKeys.has(key) ? answerState === 'submitted' ? '!bg-emerald-300' : '!bg-cyan-300' : '',
                ].join(' ')}>
                {revealNames && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]">{midiToNote(midi).replace(/-?\d+$/, '')}</span>}
              </button>
            );
          })}
        </div>
        {midiNotes.filter((midi) => BLACK_PITCH_CLASSES.has(midi % 12)).map((midi) => {
          const key = String(midi);
          const left = (whiteIndexByMidi.get(midi - 1) ?? 0) * WHITE_KEY_WIDTH + WHITE_KEY_WIDTH;
          return (
            <button key={midi} type="button" onClick={() => onToggle(midi)}
              aria-label={midiToNote(midi)} aria-pressed={selectedKeys.has(key)}
              className={[
                'absolute top-0 z-10 h-24 w-5 -translate-x-1/2 rounded-b border border-slate-950 bg-slate-900',
                highlightedKeys.has(key) ? '!bg-cyan-400' : '',
                selectedKeys.has(key) ? answerState === 'submitted' ? '!bg-emerald-400' : '!bg-cyan-400' : '',
              ].join(' ')}
              style={{ left }}>
              {revealNames && <span className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 text-[9px] text-white">{midiToNote(midi).replace(/-?\d+$/, '')}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PianoTrainer({ mode = 'Guess the Note' }) {
  const [question, setQuestion] = useState(() => ({
    ...randomScale(),
    highlightedMidi: FIRST_MIDI + Math.floor(Math.random() * (LAST_MIDI - FIRST_MIDI + 1)),
  }));
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answerState, setAnswerState] = useState('idle');
  const [message, setMessage] = useState('');
  const [revealNames, setRevealNames] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [controlsOpen, setControlsOpen] = useState(false);
  const audioRef = useRef(null);
  const targetScale = useMemo(() => scalePitchClasses(question.root, question.type), [question]);

  useEffect(() => {
    setSelectedNotes([]);
    setAnswer('');
    setAnswerState('idle');
    setMessage('');
    setRevealNames(false);
  }, [mode]);

  const playNote = (midi) => {
    if (!audioEnabled || typeof window === 'undefined') return;
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    const context = audioRef.current ?? new AudioCtor();
    audioRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = 440 * 2 ** ((midi - 69) / 12);
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.32);
  };

  const highlightedKeys = mode === 'Guess the Note'
    ? new Set([String(question.highlightedMidi)])
    : mode === 'Guess the Scale'
      ? new Set(Array.from({ length: LAST_MIDI - FIRST_MIDI + 1 }, (_, index) => FIRST_MIDI + index)
        .filter((midi) => targetScale.includes(midi % 12)).map(String))
      : new Set();

  const newQuestion = () => {
    const next = randomScale();
    next.highlightedMidi = FIRST_MIDI + Math.floor(Math.random() * (LAST_MIDI - FIRST_MIDI + 1));
    setQuestion(next);
    setSelectedNotes([]);
    setAnswer('');
    setAnswerState('idle');
    setMessage('');
    setRevealNames(false);
  };

  const toggleNote = (midi) => {
    if (answerState === 'submitted' && mode !== 'Build Scale') return;
    if (mode === 'Build Scale' && answerState === 'submitted') {
      setAnswerState('idle');
      setMessage('');
      setRevealNames(false);
    }
    setSelectedNotes((current) => current.some((note) => note.midi === midi)
      ? current.filter((note) => note.midi !== midi)
      : [...current, { midi, note: midiToNote(midi) }]);
    playNote(midi);
  };

  const submit = () => {
    if (mode === 'Build Scale') {
      const selectedPitchClasses = new Set(selectedNotes.map((note) => getPitchClass(note.note)));
      const correct = targetScale.every((pitch) => selectedPitchClasses.has(pitch));
      setMessage(correct ? 'Correct scale.' : 'Select at least one octave of every scale note.');
    } else {
      const normalized = answer.trim().replace(/\s+/g, ' ');
      const noteMatch = /^([A-Ga-g](?:#|b)?)(?:\s+(major|minor|maj|min))?$/i.exec(normalized);
      if (!noteMatch) {
        setMessage(mode === 'Guess the Note' ? 'Enter a note such as C# or Db.' : 'Enter a scale such as E major or Bb minor.');
        return;
      }
      const rootPitch = getPitchClass(noteMatch[1].replace(/^([a-g])/, (_, letter) => letter.toUpperCase()));
      if (mode === 'Guess the Note') {
        setMessage(rootPitch === getPitchClass(midiToNote(question.highlightedMidi)) ? 'Correct note.' : `Not quite. The note is ${midiToNote(question.highlightedMidi).replace(/-?\d+$/, '')}.`);
      } else {
        const type = (noteMatch[2] ?? '').toLowerCase().startsWith('min') ? 'minor' : 'major';
        const guessedScale = scalePitchClasses(noteMatch[1], type);
        const sameScale = guessedScale.length === targetScale.length
          && guessedScale.every((pitch) => targetScale.includes(pitch));
        setMessage(sameScale ? 'Correct scale.' : `Not quite. The scale is ${question.root} ${question.type}.`);
      }
    }
    setAnswerState('submitted');
    setRevealNames(true);
  };

  return (
    <div className="relative space-y-4">
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-center">
        <p className="text-lg font-medium text-white">
          {mode === 'Guess the Note' ? 'What note is highlighted?'
            : mode === 'Build Scale' ? `Select the notes in the ${question.root} ${question.type} scale.`
              : 'What scale is highlighted?'}
        </p>
        {message && <p className="mt-2 text-sm text-cyan-200">{message}</p>}
      </div>
      <PianoKeyboard
        highlightedKeys={highlightedKeys}
        selectedKeys={new Set(selectedNotes.map((note) => String(note.midi)))}
        answerState={answerState}
        onToggle={toggleNote}
        revealNames={revealNames}
      />
      {(mode === 'Guess the Note' || mode === 'Guess the Scale') && (
        <input value={answer} onChange={(event) => { setAnswer(event.target.value); setAnswerState('idle'); }}
          onKeyDown={(event) => { if (event.key === 'Enter') submit(); }}
          placeholder={mode === 'Guess the Note' ? 'Type a note (e.g. C#, Db)' : 'Type a scale (e.g. E major)'}
          className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-center text-slate-100 placeholder:text-slate-400" />
      )}
      <ControlSidebar open={controlsOpen} onToggle={() => setControlsOpen((value) => !value)} label="Piano controls">
        <button type="button" onClick={() => setRevealNames((value) => !value)} className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100">
          {revealNames ? 'Hide notes' : 'Show notes'}
        </button>
        <button type="button" onClick={() => setAudioEnabled((value) => !value)} className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100">
          Audio {audioEnabled ? 'ON' : 'OFF'}
        </button>
      </ControlSidebar>
      <div className="flex gap-3">
        <button type="button" onClick={submit} className="flex-1 rounded-xl border border-emerald-500/60 bg-emerald-500/15 px-4 py-2.5 font-semibold text-emerald-200">Submit</button>
        <button type="button" onClick={newQuestion} className="flex-1 rounded-xl bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950">New Question</button>
      </div>
    </div>
  );
}
