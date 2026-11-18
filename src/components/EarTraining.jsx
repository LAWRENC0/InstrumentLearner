import { useRef, useState } from 'react';
import BottomSheet from './BottomSheet';
import ActionBar from './ActionBar';
import { getChordNotes, NOTE_NAMES, noteToMidi } from '../utils/musicTheory';
import {
  createRelationQuestion, invertMidis, INVERSION_NAMES, RELATION_LEVELS, triadMidis,
} from '../utils/earTheory';

const INTERVALS = [
  [1, 'minor 2nd'], [2, 'major 2nd'], [3, 'minor 3rd'], [4, 'major 3rd'],
  [5, 'perfect 4th'], [6, 'tritone'], [7, 'perfect 5th'], [8, 'minor 6th'],
  [9, 'major 6th'], [10, 'minor 7th'], [11, 'major 7th'], [12, 'octave'],
];
// Degree 1 (the tonic) is never asked: the first note is already the tonic.
const DIATONIC_DEGREES = [
  ['2', 2], ['3', 4], ['4', 5], ['5', 7], ['6', 9], ['7', 11],
];
const CHORD_QUALITIES = [
  ['major', 'major'], ['minor', 'minor'], ['aug', 'augmented'], ['dim', 'diminished'],
  ['7', 'dominant 7th'], ['maj7', 'major 7th'], ['m7', 'minor 7th'],
];
// Triad qualities use the same names triadMidis expects.
const TRIAD_QUALITIES = [['major', 'major'], ['minor', 'minor'], ['augmented', 'augmented'], ['diminished', 'diminished']];

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
const pitch = (root, offset) => noteToMidi(`${root}4`) + offset;

// Harmonic stack so the sound carries on small speakers and phones. Each group plays
// together; groups follow one another every `spacing` seconds.
function playGroups(contextRef, groups, enabled, spacing = 0.8) {
  if (!enabled || typeof window === 'undefined') return;
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return;
  const context = contextRef.current ?? new AudioCtor();
  contextRef.current = context;
  const partials = [[1, 1], [2, 0.45], [3, 0.25], [4, 0.12]];
  groups.forEach((group, index) => {
    const start = context.currentTime + index * spacing;
    const peak = 0.16 / Math.sqrt(group.length);
    group.forEach((midi) => {
      const frequency = 440 * 2 ** ((midi - 69) / 12);
      const envelope = context.createGain();
      envelope.gain.setValueAtTime(0.0001, start);
      envelope.gain.exponentialRampToValueAtTime(peak, start + 0.02);
      envelope.gain.exponentialRampToValueAtTime(0.0001, start + 1.1);
      envelope.connect(context.destination);
      partials.forEach(([multiple, amount]) => {
        const oscillator = context.createOscillator();
        const partialGain = context.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency * multiple;
        partialGain.gain.value = amount;
        oscillator.connect(partialGain);
        partialGain.connect(envelope);
        oscillator.start(start);
        oscillator.stop(start + 1.15);
      });
    });
  });
}

function createQuestion(mode, { level = 'Easy', randomInversion = false } = {}) {
  const root = randomItem(NOTE_NAMES.map((_, index) => index));
  const rootName = NOTE_NAMES[root];
  if (mode === 'Interval Recognition') {
    const [semitones, label] = randomItem(INTERVALS);
    return { semitones, label, notes: [pitch(rootName, 0), pitch(rootName, semitones)] };
  }
  if (mode === 'Diatonic Note Recognition') {
    const [degree] = randomItem(DIATONIC_DEGREES);
    const scaleType = randomItem(['major', 'minor']);
    const scaleOffsets = scaleType === 'major' ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
    return {
      root: rootName, degree, scaleType, notes: [pitch(rootName, 0), pitch(rootName, scaleOffsets[Number(degree) - 1])],
    };
  }
  if (mode === 'Chord Quality Recognition') {
    const [quality, label] = randomItem(CHORD_QUALITIES);
    const midis = getChordNotes(`${rootName}4`, quality).map(noteToMidi);
    // Random inversions keep the quality answer the same; only the voicing changes.
    const inversion = randomInversion ? Math.floor(Math.random() * midis.length) : 0;
    return { root: rootName, quality, label, groups: [invertMidis(midis, inversion)] };
  }
  if (mode === 'Chord Inversion Recognition') {
    const [quality, label] = randomItem(TRIAD_QUALITIES);
    const inversion = Math.floor(Math.random() * 3);
    const midis = triadMidis(root, quality, 4);
    return { root: rootName, quality, label, inversion, groups: [invertMidis(midis, inversion)] };
  }
  // Chord relation
  const relation = createRelationQuestion(level);
  const groups = [triadMidis(relation.first.root, relation.first.quality, 4),
    triadMidis(relation.second.root, relation.second.quality, 4)];
  return { ...relation, groups };
}

function Chip({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className="glass-btn px-3 py-2.5 text-sm font-semibold text-slate-100">
      {children}
    </button>
  );
}

export default function EarTraining({ mode = 'Interval Recognition' }) {
  const [level, setLevel] = useState('Easy');
  const [randomInversion, setRandomInversion] = useState(false);
  const [question, setQuestion] = useState(() => createQuestion(mode, { level, randomInversion }));
  const [answer, setAnswer] = useState('');
  const [hardRoot, setHardRoot] = useState(null);
  const [hardQuality, setHardQuality] = useState(null);
  const [answerState, setAnswerState] = useState('idle');
  const [message, setMessage] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [controlsOpen, setControlsOpen] = useState(false);
  const audioRef = useRef(null);

  const isRelation = mode === 'Chord Relation Recognition';
  const isHard = isRelation && level === 'Hard';

  const newQuestion = (options = {}) => {
    setQuestion(createQuestion(mode, { level, randomInversion, ...options }));
    setAnswer('');
    setHardRoot(null);
    setHardQuality(null);
    setAnswerState('idle');
    setMessage('');
  };

  const changeLevel = (next) => {
    setLevel(next);
    setQuestion(createQuestion(mode, { level: next, randomInversion }));
    setAnswer('');
    setHardRoot(null);
    setHardQuality(null);
    setAnswerState('idle');
    setMessage('');
  };

  const playQuestion = () => {
    const groups = question.groups ?? question.notes.map((note) => [note]);
    playGroups(audioRef, groups, audioEnabled, isRelation ? 1.4 : 0.8);
  };

  const pick = (value) => { setAnswer(value); setAnswerState('idle'); setMessage(''); };

  const submit = () => {
    if (isHard) {
      if (hardRoot === null || hardQuality === null) { setMessage('Choose a root and a quality first.'); return; }
      const correct = hardRoot === question.second.root && hardQuality === question.second.quality;
      const answerName = `${NOTE_NAMES[question.second.root]} ${question.second.quality}`;
      setMessage(correct ? `Correct. The second chord is ${answerName}.` : `Not quite. The second chord is ${answerName}.`);
      setAnswerState('submitted');
      return;
    }
    if (answer === '') { setMessage('Choose an answer first.'); return; }

    if (isRelation) {
      const correct = answer === question.second.label;
      setMessage(correct
        ? `Correct. The second chord is ${question.second.label}.`
        : `Not quite. The second chord is ${question.second.label} (${NOTE_NAMES[question.second.root]} ${question.second.quality}). The first chord was ${question.first.label}.`);
      setAnswerState('submitted');
      return;
    }

    const expected = mode === 'Interval Recognition'
      ? String(question.semitones)
      : mode === 'Diatonic Note Recognition'
        ? question.degree
        : mode === 'Chord Quality Recognition' ? question.quality
          : String(question.inversion);
    const correct = answer === expected;
    let explanation;
    if (mode === 'Interval Recognition') explanation = question.label;
    else if (mode === 'Diatonic Note Recognition') explanation = `degree ${question.degree} of the ${question.root} ${question.scaleType} scale`;
    else if (mode === 'Chord Quality Recognition') explanation = `${question.root} ${question.label}`;
    else explanation = `${INVERSION_NAMES[question.inversion].toLowerCase()} of ${question.root} ${question.label}`;
    setMessage(correct ? 'Correct.' : `Not quite. The answer is ${explanation}.`);
    setAnswerState('submitted');
  };

  const prompt = mode === 'Interval Recognition'
    ? 'Identify the interval.'
    : mode === 'Diatonic Note Recognition'
      ? `The first note is the tonic of a ${question.root} ${question.scaleType} scale. Identify the second note.`
      : mode === 'Chord Quality Recognition'
        ? `Identify the chord quality${randomInversion ? ' (the inversion varies)' : ''}.`
        : mode === 'Chord Inversion Recognition'
          ? `This chord is ${question.root} ${question.label}. Which inversion is played?`
          : isHard
            ? 'Identify the second chord: its root and quality.'
            : 'The first chord belongs to a key. Identify the second chord as a Roman numeral.';

  const choices = mode === 'Interval Recognition' ? INTERVALS.map(([value, label]) => [String(value), label])
    : mode === 'Diatonic Note Recognition' ? DIATONIC_DEGREES.map(([value]) => [value, `degree ${value}`])
      : mode === 'Chord Quality Recognition' ? CHORD_QUALITIES.map(([value, label]) => [value, label])
        : mode === 'Chord Inversion Recognition' ? INVERSION_NAMES.map((label, index) => [String(index), label])
          : isHard ? null
            : question.pool.map((item) => [item.label, item.label]);

  return (
    <div className="space-y-4">
      <section className="glass p-5 text-center">
        <p className="text-lg font-medium text-white">{prompt}</p>
        {isRelation && !isHard && (
          <p className="mt-2 text-sm text-slate-300">
            Key: {question.tonic !== undefined ? `${NOTE_NAMES[question.tonic]} ${question.type}` : ''}
          </p>
        )}
        {message && <p className="mt-2 text-sm text-cyan-200">{message}</p>}
      </section>

      <section className="glass p-5 text-center">
        <p className="text-sm text-slate-300">Listen, then choose your answer.</p>
        <button type="button" onClick={playQuestion} className="btn-accent mt-4 px-6 py-3 text-base">
          Play exercise
        </button>
      </section>

      {isRelation && (
        <div className="grid grid-cols-3 gap-2">
          {RELATION_LEVELS.map((item) => (
            <Chip key={item} active={level === item} onClick={() => changeLevel(item)}>
              {item}{item === 'Hard' ? ' · non-diatonic' : ''}
            </Chip>
          ))}
        </div>
      )}

      {isHard ? (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-2">
            {NOTE_NAMES.map((name, index) => (
              <button key={name} type="button" onClick={() => { setHardRoot(index); setAnswerState('idle'); setMessage(''); }}
                aria-pressed={hardRoot === index}
                className="glass-btn px-2 py-3 text-sm font-semibold text-slate-100">
                {name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[['major', 'Major'], ['minor', 'Minor']].map(([value, label]) => (
              <button key={value} type="button" onClick={() => { setHardQuality(value); setAnswerState('idle'); setMessage(''); }}
                aria-pressed={hardQuality === value}
                className="glass-btn px-3 py-3 text-sm font-semibold text-slate-100">
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {choices.map(([value, label]) => (
            <button key={value} type="button" onClick={() => pick(value)} aria-pressed={answer === value}
              className="glass-btn px-3 py-3 text-sm font-semibold text-slate-100">
              {label}
            </button>
          ))}
        </div>
      )}

      <ActionBar
        onControls={() => setControlsOpen(true)}
        onSubmit={submit}
        onNew={() => newQuestion()}
      />

      <BottomSheet open={controlsOpen} onClose={() => setControlsOpen(false)} title="Controls">
        <div className="flex flex-col gap-3">
          <button type="button" onClick={() => setAudioEnabled((enabled) => !enabled)}
            className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
            Audio {audioEnabled ? 'ON' : 'OFF'}
          </button>
          {mode === 'Chord Quality Recognition' && (
            <button type="button" onClick={() => setRandomInversion((value) => !value)} aria-pressed={randomInversion}
              className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
              Random inversions: {randomInversion ? 'ON' : 'OFF'}
            </button>
          )}
        </div>
      </BottomSheet>
    </div>
  );
}
