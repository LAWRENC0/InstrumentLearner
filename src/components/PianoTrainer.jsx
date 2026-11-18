import { useEffect, useMemo, useRef, useState } from 'react';
import BottomSheet from './BottomSheet';
import ActionBar from './ActionBar';
import {
  getChordNotes, getPitchClass, getPitchClassName, midiToNote, NOTE_NAMES, noteToMidi,
} from '../utils/musicTheory';
import { parseNoteName, parseScaleName, pitchClassToName } from '../utils/noteInput';
import { guessIntendedScale, scaleSet } from '../utils/scaleGuess';

const BLACK_PITCH_CLASSES = new Set([1, 3, 6, 8, 10]);
const SCALE_OFFSETS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
};
const FIRST_MIDI = 48;
const LAST_MIDI = 83;
const WHITE_KEY_WIDTH = 32;
const INTERVALS = [
  [0, 'Unison'], [1, 'm2'], [2, 'M2'], [3, 'm3'], [4, 'M3'], [5, 'P4'],
  [6, 'Tritone'], [7, 'P5'], [8, 'm6'], [9, 'M6'], [10, 'm7'], [11, 'M7'],
  [12, 'Octave'],
];
const CHORDS = [
  ['major', 'Major'], ['minor', 'Minor'], ['aug', 'Augmented'], ['dim', 'Diminished'],
  ['7', 'Dominant 7'], ['maj7', 'Major 7'], ['m7', 'Minor 7'], ['9', 'Dominant 9'],
  ['maj9', 'Major 9'], ['m9', 'Minor 9'], ['11', 'Dominant 11'],
];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function scalePitchClasses(root, type) {
  const rootPitch = getPitchClass(root);
  return SCALE_OFFSETS[type].map((offset) => (rootPitch + offset) % 12);
}


function describePitchDifference(selectedPitches, targetPitches) {
  const missing = targetPitches.filter((pitch) => !selectedPitches.includes(pitch));
  const extra = selectedPitches.filter((pitch) => !targetPitches.includes(pitch));
  const details = [];
  if (missing.length) details.push(`Missing: ${missing.map(getPitchClassName).join(', ')}.`);
  if (extra.length) details.push(`Extra: ${extra.map(getPitchClassName).join(', ')}.`);
  return details.join(' ');
}

function describeInterval(semitones) {
  return INTERVALS.find(([number]) => number === semitones)?.[1] ?? `${semitones} semitones`;
}

function makeChordVoicing(root, quality, inversion = 0) {
  const rootMidi = noteToMidi(`${root}4`);
  const offsets = getChordNotes(`${root}4`, quality).map((note) => noteToMidi(note) - rootMidi);
  const rotated = offsets.map((_, index) => offsets[(index + inversion) % offsets.length]
    + (index < inversion ? 12 : 0));
  return rotated.map((offset) => rootMidi + offset);
}

function newQuestion(mode) {
  const root = randomItem(NOTE_NAMES);
  if (mode === 'Recognize Chord' || mode === 'Build Chord') {
    const [quality] = randomItem(CHORDS);
    return { root, quality, voicing: makeChordVoicing(root, quality), highlightedMidi: noteToMidi(`${root}4`) };
  }
  if (mode === 'Recognize Interval' || mode === 'Build Interval') {
    const [semitones] = randomItem(INTERVALS.slice(1));
    const first = noteToMidi(`${root}4`);
    return { root, semitones, voicing: [first, first + semitones], highlightedMidi: first };
  }
  if (mode === 'Chord Inversions') {
    const [quality] = randomItem([CHORDS[0], CHORDS[1], CHORDS[2]]);
    const inversion = Math.floor(Math.random() * 3);
    return { root, quality, inversion, voicing: makeChordVoicing(root, quality, inversion), highlightedMidi: noteToMidi(`${root}4`) };
  }
  return {
    root,
    type: randomItem(['major', 'minor']),
    highlightedMidi: FIRST_MIDI + Math.floor(Math.random() * (LAST_MIDI - FIRST_MIDI + 1)),
  };
}

export function PianoKeyboard({
  highlightedKeys, selectedKeys, answerState, onToggle, revealNames, missedKeys, focusMidi, resetKey,
  scaleCheck = null,
}) {
  const scrollRef = useRef(null);
  const midiNotes = Array.from({ length: LAST_MIDI - FIRST_MIDI + 1 }, (_, index) => FIRST_MIDI + index);
  const whiteNotes = midiNotes.filter((midi) => !BLACK_PITCH_CLASSES.has(midi % 12));
  const whiteIndexByMidi = new Map(whiteNotes.map((midi, index) => [midi, index]));

  // The keyboard is wider than most phones: bring the key being asked about into view.
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || focusMidi === null || focusMidi === undefined) return;
    const whiteIndex = whiteIndexByMidi.get(focusMidi) ?? whiteIndexByMidi.get(focusMidi - 1) ?? 0;
    const target = whiteIndex * WHITE_KEY_WIDTH + WHITE_KEY_WIDTH / 2;
    container.scrollTo({ left: Math.max(0, target - container.clientWidth / 2), behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusMidi, resetKey]);

  const selectedKeyColor = (midi) => {
    if (answerState !== 'submitted') return '!bg-cyan-300';
    if (scaleCheck) return scaleCheck.has(midi % 12) ? '!bg-sky-400' : '!bg-red-400';
    return '!bg-emerald-300';
  };
  const keyClass = (midi, black = false) => [
    black ? 'border-slate-950' : 'relative border-slate-950',
    black ? 'absolute top-0 z-10 h-24 w-5 -translate-x-1/2 rounded-b border bg-slate-900' : 'h-full w-8 shrink-0 border-r bg-slate-100 text-slate-700',
    highlightedKeys.has(String(midi)) ? '!bg-cyan-300' : '',
    missedKeys.has(String(midi)) ? '!bg-yellow-300' : '',
    selectedKeys.has(String(midi)) ? selectedKeyColor(midi) : '',
  ].join(' ');
  return (
    <div ref={scrollRef} className="overflow-x-auto overscroll-x-contain glass p-3 md:p-4">
      <div className="relative mx-auto h-44 min-w-fit" style={{ width: `${whiteNotes.length * WHITE_KEY_WIDTH}px` }}>
        <div className="absolute inset-x-0 bottom-0 flex h-36">
          {whiteNotes.map((midi) => (
            <button key={midi} type="button" onClick={() => onToggle(midi)} aria-label={midiToNote(midi)}
              aria-pressed={selectedKeys.has(String(midi))} className={keyClass(midi)}>
              {revealNames && <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]">{midiToNote(midi).replace(/-?\d+$/, '')}</span>}
            </button>
          ))}
        </div>
        {midiNotes.filter((midi) => BLACK_PITCH_CLASSES.has(midi % 12)).map((midi) => (
          <button key={midi} type="button" onClick={() => onToggle(midi)} aria-label={midiToNote(midi)}
            aria-pressed={selectedKeys.has(String(midi))} className={keyClass(midi, true)}
            style={{ left: (whiteIndexByMidi.get(midi - 1) ?? 0) * WHITE_KEY_WIDTH + WHITE_KEY_WIDTH }}>
            {revealNames && <span className="pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 text-[9px] text-white">{midiToNote(midi).replace(/-?\d+$/, '')}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

const CHOICE_BASE = 'rounded-xl border px-3 py-2.5 text-sm transition';

export default function PianoTrainer({ mode = 'Guess the Note' }) {
  const [question, setQuestion] = useState(() => newQuestion(mode));
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [answer, setAnswer] = useState('');
  const [answerState, setAnswerState] = useState('idle');
  const [message, setMessage] = useState('');
  const [revealNames, setRevealNames] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [controlsOpen, setControlsOpen] = useState(false);
  const audioRef = useRef(null);
  const isChord = mode.includes('Chord');
  const isInterval = mode.includes('Interval');
  const targetScale = useMemo(() => question.type ? scalePitchClasses(question.root, question.type) : [], [question]);

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
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.start(); oscillator.stop(context.currentTime + 0.32);
  };

  const highlightedKeys = new Set(
    mode === 'Guess the Note' ? [String(question.highlightedMidi)]
      : mode === 'Guess the Scale' ? Array.from({ length: LAST_MIDI - FIRST_MIDI + 1 }, (_, i) => FIRST_MIDI + i)
        .filter((midi) => targetScale.includes(midi % 12)).map(String)
        : isChord && mode !== 'Build Chord' && mode !== 'Chord Inversions' ? (question.voicing ?? []).map(String)
            : isInterval && mode !== 'Build Interval' ? (question.voicing ?? []).map(String)
              : mode === 'Build Interval' ? [String(question.highlightedMidi)]
              : [],
  );
  const selectedKeys = new Set(selectedNotes.map((note) => String(note.midi)));
  const missedKeys = answerState === 'submitted'
    ? new Set(mode === 'Build Scale'
      ? Array.from({ length: LAST_MIDI - FIRST_MIDI + 1 }, (_, index) => FIRST_MIDI + index)
        .filter((midi) => targetScale.includes(midi % 12) && !selectedKeys.has(String(midi)))
        .map(String)
      : (question.voicing ?? []).filter((midi) => !selectedKeys.has(String(midi))).map(String))
    : new Set();

  const newQuestionForMode = () => {
    setQuestion(newQuestion(mode)); setSelectedNotes([]); setAnswer(''); setAnswerState('idle'); setMessage(''); setRevealNames(false);
  };
  const toggleNote = (midi) => {
    if (answerState === 'submitted' && !['Build Scale', 'Build Chord', 'Build Interval'].includes(mode)) return;
    setSelectedNotes((current) => current.some((note) => note.midi === midi)
      ? current.filter((note) => note.midi !== midi) : [...current, { midi, note: midiToNote(midi) }]);
    playNote(midi);
    setAnswerState('idle'); setMessage('');
  };
  const selectedPitchClasses = new Set(selectedNotes.map((note) => getPitchClass(note.note)));
  const targetPitchClasses = new Set((question.voicing ?? []).map((midi) => getPitchClass(midiToNote(midi))));

  const submit = () => {
    // An empty answer is not a wrong answer: ask for one instead of grading it.
    if (mode === 'Guess the Note' || mode === 'Guess the Scale') {
      if (!answer.trim()) { setMessage('Type an answer first.'); return; }
    }
    if (mode === 'Recognize Chord' || mode === 'Recognize Interval') {
      if (answer === '') { setMessage('Choose an answer first.'); return; }
    }
    let correct = false;
    if (mode === 'Guess the Note') {
      const guess = parseNoteName(answer);
      correct = guess !== null && guess === getPitchClass(midiToNote(question.highlightedMidi));
      setMessage(guess === null
        ? 'Enter a note such as E, C#, Db, or g sharp.'
        : correct ? 'Correct note.' : `Not quite. The note is ${midiToNote(question.highlightedMidi).replace(/-?d+$/, '')}.`);
    } else if (mode === 'Guess the Scale') {
      const parsed = parseScaleName(answer);
      const guessed = parsed ? scaleSet(parsed.pitchClass, parsed.type) : [];
      correct = guessed.length === targetScale.length && guessed.every((pitch) => targetScale.includes(pitch));
      setMessage(correct
        ? 'Correct scale.'
        : parsed
          ? `Not quite. You entered ${pitchClassToName(parsed.pitchClass)} ${parsed.type}; the target is ${question.root} ${question.type}.`
          : 'Enter a scale as a note followed by major or minor, for example E major or g sharp minor.');
    } else if (mode === 'Recognize Chord') {
      correct = answer === question.quality;
      setMessage(correct ? 'Correct chord quality.' : `Not quite. It is ${CHORDS.find(([key]) => key === question.quality)?.[1]}.`);
    } else if (mode === 'Recognize Interval') {
      correct = Number(answer) === question.semitones;
      setMessage(correct ? 'Correct interval.' : `Not quite. It is ${INTERVALS.find(([n]) => n === question.semitones)?.[1]}.`);
    } else if (mode === 'Build Scale') {
      const selectedPitches = [...selectedPitchClasses];
      const extras = selectedPitches.filter((pitch) => !targetScale.includes(pitch));
      const missing = targetScale.filter((pitch) => !selectedPitchClasses.has(pitch));
      // Exact match: every scale note selected and nothing else.
      correct = missing.length === 0 && extras.length === 0;
      const guess = guessIntendedScale(selectedPitches);
      const difference = describePitchDifference(selectedPitches, targetScale);
      setMessage(correct
        ? 'Correct scale.'
        : `Not quite. ${guess ? `Maybe you were thinking of ${guess.name}? ` : ''}${difference || 'Select at least one octave of every scale note.'}`);
    } else {
      const sameNotes = selectedPitchClasses.size === targetPitchClasses.size
        && [...selectedPitchClasses].every((pitch) => targetPitchClasses.has(pitch));
      correct = sameNotes && selectedNotes.length === targetPitchClasses.size;
      if (mode === 'Chord Inversions') {
        const selectedMidis = selectedNotes.map((note) => note.midi).sort((a, b) => a - b);
        const targetMidis = [...question.voicing].sort((a, b) => a - b);
        correct = selectedMidis.length === targetMidis.length
          && selectedMidis.every((midi, index) => midi === targetMidis[index]);
        setMessage(correct
          ? 'Correct inversion.'
          : `Not quite. Expected: ${targetMidis.map((midi) => midiToNote(midi).replace(/-?\d+$/, '')).join(', ')}.`);
      } else if (mode === 'Build Interval') {
        const selectedMidis = selectedNotes.map((note) => note.midi).sort((a, b) => a - b);
        const actual = selectedMidis.length === 2 ? selectedMidis[1] - selectedMidis[0] : null;
        correct = actual === question.semitones;
        setMessage(correct
          ? 'Correct interval.'
          : actual === null
            ? `Select two notes. Expected a ${describeInterval(question.semitones)}.`
            : `Not quite. You selected a ${describeInterval(actual)}; expected a ${describeInterval(question.semitones)}.`);
      } else {
        setMessage(correct
          ? 'Correct chord.'
          : `Not quite. ${describePitchDifference([...selectedPitchClasses], [...targetPitchClasses]) || 'Select the requested chord tones.'}`);
      }
    }
    setAnswerState('submitted'); setRevealNames(true);
  };

  const prompt = mode === 'Guess the Note' ? 'What note is highlighted?'
    : mode === 'Build Scale' ? `Select the notes in the ${question.root} ${question.type} scale.`
      : mode === 'Guess the Scale' ? 'What scale is highlighted?'
        : mode === 'Recognize Chord' ? 'What chord quality is being played?'
          : mode === 'Build Chord' ? `Build a ${CHORDS.find(([key]) => key === question.quality)?.[1]} chord on ${question.root}.`
            : mode === 'Recognize Interval' ? 'What interval is being played?'
              : mode === 'Build Interval' ? `Build a ${INTERVALS.find(([n]) => n === question.semitones)?.[1]} above ${question.root}.`
                : `Play the ${['root position', '1st inversion', '2nd inversion'][question.inversion]} of a ${question.root} ${question.quality} triad.`;
  const choices = mode === 'Recognize Chord' ? CHORDS.map(([key, label]) => [key, label])
    : mode === 'Recognize Interval' ? INTERVALS.map(([n, label]) => [String(n), label]) : null;
  const focusMidi = question.highlightedMidi ?? question.voicing?.[0] ?? null;

  return (
    <div className="space-y-4">
      <div className="glass p-4 text-center">
        <p className="text-lg font-medium text-white">{prompt}</p>
        {message && <p className="mt-2 text-sm text-cyan-200">{message}</p>}
      </div>
      <PianoKeyboard highlightedKeys={highlightedKeys} selectedKeys={selectedKeys} missedKeys={missedKeys}
        scaleCheck={mode === 'Build Scale' ? new Set(targetScale) : null}
        answerState={answerState} onToggle={toggleNote} revealNames={revealNames}
        focusMidi={focusMidi} resetKey={question} />
      {choices && <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{choices.map(([value, label]) => (
        <button key={value} type="button" onClick={() => { setAnswer(value); setAnswerState('idle'); setMessage(''); }}
          className={`${CHOICE_BASE} ${answer === value ? 'glass-btn is-on text-white' : 'glass-btn text-slate-200'}`}>
          {label}
        </button>
      ))}</div>}
      {['Guess the Note', 'Guess the Scale'].includes(mode) && (
        <input value={answer} onChange={(event) => { setAnswer(event.target.value); setAnswerState('idle'); }}
          onKeyDown={(event) => { if (event.key === 'Enter') submit(); }}
          aria-label="Your answer"
          placeholder={mode === 'Guess the Note' ? 'Type a note (e.g. C#, Db)' : 'Type a scale (e.g. E major)'}
          className="w-full glass-btn px-4 py-3 text-center text-base text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none" />
      )}

      <ActionBar
        onControls={() => setControlsOpen(true)}
        onSubmit={submit}
        onNew={newQuestionForMode}
      />

      <BottomSheet open={controlsOpen} onClose={() => setControlsOpen(false)} title="Controls">
        <div className="flex flex-col gap-3">
          <button type="button" onClick={() => setRevealNames((value) => !value)}
            className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
            {revealNames ? 'Hide notes' : 'Show notes'}
          </button>
          <button type="button" onClick={() => setAudioEnabled((value) => !value)}
            className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
            Audio {audioEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </BottomSheet>
    </div>
  );
}
