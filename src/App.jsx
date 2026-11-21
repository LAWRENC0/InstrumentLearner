import { useRef, useState } from 'react';
import HeaderSelector from './components/HeaderSelector';
import GuitarTrainer from './components/GuitarTrainer';
import TrumpetTrainer from './components/TrumpetTrainer';
import PianoTrainer from './components/PianoTrainer';
import EarTraining from './components/EarTraining';
import TheoryBrowser from './components/TheoryBrowser';
import ChordBuilder from './components/ChordBuilder';
import BottomSheet from './components/BottomSheet';
import { parseNoteName } from './utils/noteInput';
import { useShowFretNumbers } from './utils/preferences';
import {
  CHORD_DIFFICULTIES, MODES, SCALE_TRIAD_EXERCISES, buildQuestion,
} from './utils/questionHelpers';
import {
  getNoteAtStringFret, getPitchClass, getPitchClassName, INTERVALS, INTERVAL_LABELS, noteToMidi,
} from './utils/musicTheory';

const MAX_FRET = 15; // frets 0..15
const openStringMidi = (string) => noteToMidi(getNoteAtStringFret(string, 0));
const midiToPitchClass = (midi) => ((midi % 12) + 12) % 12;
const scaleIntervals = (type) => type === 'minor'
  ? [0, 2, 3, 5, 7, 8, 10]
  : [0, 2, 4, 5, 7, 9, 11];

function formatPitchClasses(pitchClasses) {
  return [...new Set(pitchClasses)].map(getPitchClassName).join(', ');
}

function describeNoteSelection(selectedNotes, targetPitchClasses, expectedStrings = null) {
  const selectedPitchClasses = new Set(selectedNotes.map((note) => getPitchClass(note.note)));
  const missing = [...targetPitchClasses].filter((pitch) => !selectedPitchClasses.has(pitch));
  const extra = [...selectedPitchClasses].filter((pitch) => !targetPitchClasses.has(pitch));
  const stringMessage = expectedStrings
    ? ` Expected strings: ${[...expectedStrings].map((string) => string + 1).join(', ')}.`
    : '';
  const details = [];
  if (missing.length) details.push(`Missing: ${formatPitchClasses(missing)}.`);
  if (extra.length) details.push(`Extra: ${formatPitchClasses(extra)}.`);
  return `${details.join(' ')}${stringMessage}`.trim();
}

function describeIntervalsFromRoot(selectedNotes, rootNote) {
  return [...new Set(selectedNotes.map((note) =>
    (getPitchClass(note.note) - getPitchClass(rootNote) + 12) % 12))]
    .map((semitones) => {
      const interval = Object.keys(INTERVALS).find((key) => INTERVALS[key] === semitones);
      return INTERVAL_LABELS[interval] ?? `${semitones} semitones`;
    }).join(', ');
}

// Snaps a whole shape to the scale while keeping the relations between notes
// (intervals) as close to the original as possible.
// Each note stays on its own string; only the fret changes.
function snapShapeToScale(positions, scalePitchClasses, bias = 0) {
  if (!positions.length) return positions;
  const pcs = new Set(scalePitchClasses);

  const items = positions.map((position) => {
    const midi = noteToMidi(position.note);
    const open = openStringMidi(position.string);
    let lower = null;
    let upper = null;
    for (let fret = 0; fret <= MAX_FRET; fret += 1) {
      const m = open + fret;
      if (pcs.has(midiToPitchClass(m))) {
        if (m <= midi) lower = m;
        if (m >= midi && upper === null) upper = m;
      }
    }
    const options = [...new Set([lower, upper].filter((m) => m !== null))];
    return { position, midi, open, options: options.length ? options : [midi] };
  });

  const cost = (choice) => {
    let distortion = 0;
    let distance = 0;
    let drift = 0;
    for (let i = 0; i < items.length; i += 1) {
      const d = choice[i] - items[i].midi;
      distance += Math.abs(d);
      drift += d;
      for (let j = i + 1; j < items.length; j += 1) {
        distortion += Math.abs((choice[j] - choice[i]) - (items[j].midi - items[i].midi));
      }
    }
    return distortion + 0.5 * distance - 0.001 * bias * drift;
  };

  const nearest = (item) => item.options.reduce((best, m) => {
    const dBest = Math.abs(best - item.midi);
    const dM = Math.abs(m - item.midi);
    if (dM < dBest) return m;
    if (dM === dBest && bias > 0 && m > best) return m;
    return best;
  }, item.options[0]);

  const ambiguous = items.filter((item) => item.options.length > 1).length;
  let bestChoice;
  if (ambiguous > 10) {
    bestChoice = items.map(nearest); // too many combinations, fall back to per-note
  } else {
    let bestCost = Infinity;
    const choice = [];
    const walk = (i) => {
      if (i === items.length) {
        const c = cost(choice);
        if (c < bestCost) { bestCost = c; bestChoice = [...choice]; }
        return;
      }
      items[i].options.forEach((m) => { choice[i] = m; walk(i + 1); });
    };
    walk(0);
  }

  return items.map((item, i) => {
    const fret = bestChoice[i] - item.open;
    return { ...item.position, fret, note: getNoteAtStringFret(item.position.string, fret) };
  });
}

function useGuitarTrainerState() {
  const [mode, setMode] = useState(MODES[0]);
  const [difficulty, setDifficulty] = useState(CHORD_DIFFICULTIES[0]);
  const [scaleTriadExercise, setScaleTriadExercise] = useState(SCALE_TRIAD_EXERCISES[0]);
  const [question, setQuestion] = useState(() => buildQuestion(MODES[0], CHORD_DIFFICULTIES[0], SCALE_TRIAD_EXERCISES[0]));
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [revealNames, setRevealNames] = useState(false);
  const [displayScaleDegrees, setDisplayScaleDegrees] = useState(false);
  const [answerState, setAnswerState] = useState('idle');
  const [answerMessage, setAnswerMessage] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [guessAnswer, setGuessAnswer] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [explorerScaleLocked, setExplorerScaleLocked] = useState(false);
  const [explorerScaleType, setExplorerScaleType] = useState('major');
  const [explorerScaleRoot, setExplorerScaleRoot] = useState('C');
  const [explorerShift, setExplorerShift] = useState('');
  const [explorerShowAll, setExplorerShowAll] = useState(false);
  const [explorerShowScale, setExplorerShowScale] = useState(false);
  const audioContextRef = useRef(null);

  const requestNewQuestion = (
    nextMode = mode,
    nextDifficulty = difficulty,
    nextScaleTriadExercise = scaleTriadExercise,
    nextScale = null,
  ) => {
    const scale = nextScale ?? (
      nextScaleTriadExercise === 'Highlight degree' && question.mode === 'Scale & Triads'
        ? { rootNote: question.rootNote, scaleType: question.scaleType }
        : null
    );
    setQuestion(buildQuestion(nextMode, nextDifficulty, nextScaleTriadExercise, scale));
    setSelectedNotes([]);
    setRevealNames(false);
    setDisplayScaleDegrees(false);
    setAnswerState('idle');
    setAnswerMessage('');
    setSelectedDegree('');
    setGuessAnswer('');
  };

  const changeDifficulty = (nextDifficulty) => {
    setDifficulty(nextDifficulty);
    requestNewQuestion(mode, nextDifficulty);
  };

  const changeScaleTriadExercise = (nextExercise) => {
    setScaleTriadExercise(nextExercise);
    requestNewQuestion(mode, difficulty, nextExercise);
  };

  const requestNewScale = () => {
    requestNewQuestion(mode, difficulty, scaleTriadExercise, {});
  };

  const playNote = (noteName) => {
    if (!audioEnabled || typeof window === 'undefined') return;
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    const context = audioContextRef.current ?? new AudioCtor();
    audioContextRef.current = context;
    const frequency = 440 * 2 ** ((noteToMidi(noteName) - 69) / 12);
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.0001, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.07, context.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.36);
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.38);
  };

  const explorerScalePitches = (type = explorerScaleType, root = explorerScaleRoot) => {
    const offsets = type === 'major' ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
    const rootPc = getPitchClass(root);
    return offsets.map((offset) => (rootPc + offset) % 12);
  };

  const handleToggleNote = (stringIndex, fret) => {
    if (answerState === 'submitted') return;
    let position = { string: stringIndex, fret, note: getNoteAtStringFret(stringIndex, fret) };
    if (mode === 'Fretboard Explorer' && explorerScaleLocked) {
      [position] = snapShapeToScale([position], explorerScalePitches());
    }
    const key = `${position.string}-${position.fret}`;
    setSelectedNotes((current) => current.some((item) => `${item.string}-${item.fret}` === key)
      ? current.filter((item) => `${item.string}-${item.fret}` !== key)
      : [...current, position]);
    if (audioEnabled) playNote(position.note);
  };

  const scaleMidiAt = (rootMidi, offsets, degreeIndex) => {
    const octave = Math.floor(degreeIndex / offsets.length);
    const offsetIndex = ((degreeIndex % offsets.length) + offsets.length) % offsets.length;
    return rootMidi + octave * 12 + offsets[offsetIndex];
  };

  // When locked, the shift box moves notes by scale degrees (not semitones).
  const getScaleLockedPosition = (position, scalePitches, scaleShift) => {
    const offsets = explorerScaleType === 'major'
      ? [0, 2, 4, 5, 7, 9, 11]
      : [0, 2, 3, 5, 7, 8, 10];
    const rootMidi = noteToMidi(explorerScaleRoot);
    const currentMidi = noteToMidi(position.note);
    const approximateDegree = Math.floor((currentMidi - rootMidi) / 12) * offsets.length;
    const candidateDegrees = Array.from({ length: offsets.length * 2 + 1 }, (_, index) =>
      approximateDegree - offsets.length + index);
    const nearestDegree = candidateDegrees.reduce((best, degree) => {
      const distance = Math.abs(scaleMidiAt(rootMidi, offsets, degree) - currentMidi);
      const bestDistance = Math.abs(scaleMidiAt(rootMidi, offsets, best) - currentMidi);
      return distance < bestDistance ? degree : best;
    }, candidateDegrees[0]);
    const targetMidi = scaleMidiAt(rootMidi, offsets, nearestDegree + scaleShift);
    const openMidi = noteToMidi(getNoteAtStringFret(position.string, 0));
    const validFrets = [targetMidi - openMidi, targetMidi - openMidi - 12, targetMidi - openMidi + 12]
      .filter((fret) => fret >= 0 && fret <= 15);
    if (!validFrets.length) return null;
    const fret = validFrets[0];
    return { ...position, fret, note: getNoteAtStringFret(position.string, fret) };
  };

  const applyExplorerShift = (shift, preserveShape = false) => {
    if (!Number.isInteger(shift) || selectedNotes.length === 0) return;
    const scalePitches = explorerScalePitches();
    if (explorerScaleLocked && !preserveShape) {
      setSelectedNotes((current) => current.map((position) =>
        getScaleLockedPosition(position, scalePitches, shift) ?? position));
      return;
    }
    // Move every note by the same number of semitones on its own string, so the
    // shape keeps its intervals. If the shape would run off the neck, move it by an
    // octave instead; if no octave fits, leave the shape unchanged (no silent wrap).
    setSelectedNotes((current) => {
      const shifted = current.map((position) => ({ ...position, fret: position.fret + shift }));
      const octave = [0, -12, 12].find((offset) =>
        shifted.every((p) => p.fret + offset >= 0 && p.fret + offset <= MAX_FRET));
      if (octave === undefined) return current;
      return shifted.map((position) => {
        const fret = position.fret + octave;
        return { ...position, fret, note: getNoteAtStringFret(position.string, fret) };
      });
    });
  };

  const clearSelection = () => {
    setSelectedNotes([]);
    setAnswerState('idle');
    setAnswerMessage('');
    setRevealNames(false);
  };

  // Shared by the live drag preview and the final drop, so they always agree.
  // Returns null (no move) or an array of { string, fret, note }.
  const computeDraggedShape = (start, target) => {
    if (!start || !target) return null;
    const stringShift = target.string - start.string;
    const startMidi = noteToMidi(getNoteAtStringFret(start.string, start.fret));
    const targetMidi = noteToMidi(getNoteAtStringFret(target.string, target.fret));
    const pitchShift = targetMidi - startMidi;
    if (stringShift === 0 && pitchShift === 0) return null;

    const canMove = selectedNotes.every((p) => p.string + stringShift >= 0 && p.string + stringShift < 6);
    if (!canMove) return null;

    // Transpose every note by the same pitch shift and re-derive its fret
    // on the new string, so intervals (and therefore chord quality) are kept.
    const moved = selectedNotes.map((position) => {
      const string = position.string + stringShift;
      const fret = noteToMidi(position.note) + pitchShift - openStringMidi(string);
      return { ...position, string, fret };
    });

    // If the shape runs off the fretboard, shift the WHOLE shape by an octave
    // (never individual notes, which would break the shape).
    const octave = [0, -12, 12].find((offset) =>
      moved.every((p) => p.fret + offset >= 0 && p.fret + offset <= MAX_FRET));
    if (octave === undefined) return null;

    const shape = moved.map((p) => {
      const fret = p.fret + octave;
      return { ...p, fret, note: getNoteAtStringFret(p.string, fret) };
    });

    return explorerScaleLocked
      ? snapShapeToScale(shape, explorerScalePitches(), Math.sign(pitchShift))
      : shape;
  };

  const handleExplorerDrag = (start, target) => {
    const shape = computeDraggedShape(start, target);
    if (shape) setSelectedNotes(shape);
  };

  const toggleExplorerScaleLock = () => {
    const next = !explorerScaleLocked;
    setExplorerScaleLocked(next);
    if (next) setSelectedNotes((current) => snapShapeToScale(current, explorerScalePitches()));
  };

  const changeExplorerScaleType = (type) => {
    setExplorerScaleType(type);
    if (explorerScaleLocked) {
      setSelectedNotes((current) => snapShapeToScale(current, explorerScalePitches(type, explorerScaleRoot)));
    }
  };

  const changeExplorerScaleRoot = (root) => {
    setExplorerScaleRoot(root);
    if (explorerScaleLocked) {
      setSelectedNotes((current) => snapShapeToScale(current, explorerScalePitches(explorerScaleType, root)));
    }
  };

  const handleSubmit = () => {
    const selectedKeys = new Set(selectedNotes.map((p) => `${p.string}-${p.fret}`));

    if (mode === 'Guess the Note') {
      const answerPitchClass = parseNoteName(guessAnswer);
      const highlightedPitchClass = getPitchClass(question.highlightedPosition.note);
      if (answerPitchClass === null) {
        setAnswerMessage('Enter a note name such as E, C#, Db, or g sharp.');
        return;
      }
      setAnswerMessage(answerPitchClass === highlightedPitchClass
        ? 'Correct note.'
        : `Not quite. You entered ${guessAnswer.trim()}; the highlighted note is ${question.highlightedPosition.note.replace(/\d+$/, '')}.`);
      setAnswerState('submitted');
      setRevealNames(true);
      return;
    }

    if (mode === 'Pentatonics' && ['identify-degree', 'identify-fundamental'].includes(question.pentatonicExercise)) {
      if (!selectedDegree) {
        setAnswerMessage('Choose a degree before submitting.');
        return;
      }
      const isCorrect = selectedDegree === question.pentatonicAnswer;
      setAnswerMessage(isCorrect ? 'Correct degree.' : `Not quite. You chose ${selectedDegree}; the highlighted note is the ${question.pentatonicAnswer}.`);
      setAnswerState('submitted');
      setRevealNames(true);
      return;
    }
    if (selectedNotes.length === 0) {
      setAnswerMessage('No notes selected. Select the note or notes requested by the question.');
      setAnswerState('submitted');
      setRevealNames(true);
      return;
    }
    if (mode === 'Intervals') {
      const targetSemitones = question.validPositions.length
        ? (getPitchClass(question.validPositions[0].note) - getPitchClass(question.rootNote) + 12) % 12
        : null;
      const selectedIntervals = describeIntervalsFromRoot(selectedNotes, question.rootNote);
      const isCorrect = selectedNotes.every((note) =>
        getPitchClass(note.note) === getPitchClass(question.validPositions[0]?.note));
      setAnswerMessage(isCorrect
        ? 'Correct interval.'
        : `Not quite. You selected: ${selectedIntervals || 'no recognizable interval'}. Expected: ${INTERVAL_LABELS[Object.keys(INTERVALS).find((key) => INTERVALS[key] === targetSemitones)] ?? 'the requested interval'}.`);
    }
    if (mode === 'Pentatonics' && question.pentatonicExercise === 'find-degree') {
      const targetPitchClasses = new Set(question.validPositions.map((position) => getPitchClass(position.note)));
      const selectedPitchClasses = new Set(selectedNotes.map((position) => getPitchClass(position.note)));
      const isCorrect = selectedNotes.length > 0
        && [...selectedPitchClasses].every((pitch) => targetPitchClasses.has(pitch))
        && [...targetPitchClasses].every((pitch) => selectedPitchClasses.has(pitch));
      setAnswerMessage(isCorrect
        ? `Correct ${question.pentatonicAnswer}.`
        : `Not quite. Find the ${question.pentatonicAnswer}; ${describeNoteSelection(selectedNotes, targetPitchClasses)}`);
    }
    if (mode === 'Fill in the Chords') {
      const selectedPitchClasses = new Set(selectedNotes.map((p) => getPitchClass(p.note)));
      const targetPitchClasses = new Set(question.chordPitchClasses);
      const highlightedKey = `${question.highlightedPosition.string}-${question.highlightedPosition.fret}`;
      const hasCompleteChord = selectedNotes.length === targetPitchClasses.size
        && selectedPitchClasses.size === targetPitchClasses.size
        && [...selectedPitchClasses].every((pitchClass) => targetPitchClasses.has(pitchClass));
      const includesHighlightedNote = selectedKeys.has(highlightedKey);
      setAnswerMessage(hasCompleteChord && includesHighlightedNote
        ? 'Correct chord, including the highlighted note.'
        : `Not quite. ${describeNoteSelection(selectedNotes, targetPitchClasses)} The highlighted note must also be selected.`);
    }
    if (mode === 'Scale & Triads' && question.scaleTriadExercise === 'Highlight degree') {
      const expectedStrings = new Set(question.targetStrings);
      const selectedStrings = selectedNotes.map((p) => p.string);
      const selectedPitchClasses = new Set(selectedNotes.map((p) => getPitchClass(p.note)));
      const targetPitchClasses = new Set(question.validPositions.map((p) => getPitchClass(p.note)));
      const isCorrect = selectedNotes.length === 3
        && new Set(selectedStrings).size === 3
        && selectedStrings.every((stringIndex) => expectedStrings.has(stringIndex))
        && selectedPitchClasses.size === targetPitchClasses.size
        && [...selectedPitchClasses].every((pitchClass) => targetPitchClasses.has(pitchClass));
      setAnswerMessage(isCorrect
        ? 'Correct triad.'
        : `Not quite. ${describeNoteSelection(selectedNotes, targetPitchClasses, expectedStrings)} Select one note on each requested string.`);
    }
    if (mode === 'Scale & Triads' && question.scaleTriadExercise !== 'Highlight degree') {
      const expectedStrings = new Set(question.targetStrings);
      const selectedStrings = selectedNotes.map((p) => p.string);
      const selectedPitchClasses = new Set(selectedNotes.map((p) => getPitchClass(p.note)));
      const targetPitchClasses = new Set(question.validPositions.map((p) => getPitchClass(p.note)));
      const usesEachTargetStringOnce = selectedNotes.length === 3
        && new Set(selectedStrings).size === 3
        && selectedStrings.every((stringIndex) => expectedStrings.has(stringIndex));
      const hasExpectedTriad = selectedPitchClasses.size === targetPitchClasses.size
        && [...selectedPitchClasses].every((pitchClass) => targetPitchClasses.has(pitchClass));
      setAnswerMessage(usesEachTargetStringOnce && hasExpectedTriad
        ? 'Correct triad and string set.'
        : `Not quite. ${describeNoteSelection(selectedNotes, targetPitchClasses, expectedStrings)} The three notes must form one playable shape.`);
    }
    setAnswerState('submitted');
    setRevealNames(true);
  };

  return {
    mode, setMode, difficulty, changeDifficulty, scaleTriadExercise, changeScaleTriadExercise,
    requestNewScale,
    question, selectedNotes, revealNames, answerState, answerMessage,
    guessAnswer, setGuessAnswer,
    selectedDegree, setSelectedDegree, audioEnabled, setAudioEnabled, requestNewQuestion,
    handleToggleNote, handleSubmit, clearSelection, setRevealNames, setAnswerState, setAnswerMessage,
    explorerScaleLocked, setExplorerScaleLocked, explorerScaleType, setExplorerScaleType,
    explorerScaleRoot, setExplorerScaleRoot, explorerShift, setExplorerShift,
    explorerShowAll, setExplorerShowAll, applyExplorerShift, handleExplorerDrag,
    displayScaleDegrees, setDisplayScaleDegrees,
    displayScaleRoot: mode === 'Fretboard Explorer' ? explorerScaleRoot : question.rootNote,
    displayScaleType: mode === 'Fretboard Explorer' ? explorerScaleType : (question.scaleType ?? 'major'),
    explorerShowScale, setExplorerShowScale,
    explorerScalePitchClasses: explorerScalePitches(),
    toggleExplorerScaleLock, changeExplorerScaleType, changeExplorerScaleRoot,
    getExplorerDragPreview: computeDraggedShape,
  };
}

function App() {
  // Nothing is selected on load: the menu opens so the user chooses an instrument first.
  const [instrument, setInstrument] = useState(null);
  const [trumpetMode, setTrumpetMode] = useState('Register & Intonation');
  const [pianoMode, setPianoMode] = useState('Guess the Note');
  const [earTrainingMode, setEarTrainingMode] = useState('Interval Recognition');
  const [menuOpen, setMenuOpen] = useState(true);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [intervalDisplay, setIntervalDisplay] = useState('both');
  const [showFretNumbers, setShowFretNumbers] = useShowFretNumbers();
  const trainer = useGuitarTrainerState();

  const modeSetters = {
    guitar: (next) => { trainer.setMode(next); trainer.requestNewQuestion(next); },
    trumpet: setTrumpetMode,
    piano: setPianoMode,
    earTraining: setEarTrainingMode,
    theory: () => {},
  };
  const currentMode = instrument === null ? null : {
    guitar: trainer.mode,
    trumpet: trumpetMode,
    piano: pianoMode,
    earTraining: earTrainingMode,
    theory: 'Browse topics',
  }[instrument];

  const closeMenu = () => setMenuOpen(false);
  const closeControls = () => setControlsOpen(false);
  // Keep the menu open so the user can pick a mode for the new instrument straight away.
  const changeInstrument = (next) => {
    setInstrument(next);
    setControlsOpen(false);
  };
  const changeMode = (next) => {
    modeSetters[instrument]?.(next);
    setMenuOpen(false);
  };

  const isGuitar = instrument === 'guitar';

  return (
    <div className="app-root min-h-screen text-slate-100" data-instrument={instrument}>
      <HeaderSelector
        instrument={instrument}
        mode={currentMode}
        guitarModes={MODES}
        difficulty={trainer.difficulty}
        difficulties={isGuitar && trainer.mode === 'Fill in the Chords' ? CHORD_DIFFICULTIES : []}
        exercise={trainer.scaleTriadExercise}
        exercises={isGuitar && trainer.mode === 'Scale & Triads' ? SCALE_TRIAD_EXERCISES : []}
        menuOpen={menuOpen}
        onOpenMenu={() => setMenuOpen(true)}
        onCloseMenu={closeMenu}
        onInstrumentChange={changeInstrument}
        onModeChange={changeMode}
        onDifficultyChange={(next) => { trainer.changeDifficulty(next); setMenuOpen(false); }}
        onExerciseChange={(next) => { trainer.changeScaleTriadExercise(next); setMenuOpen(false); }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {instrument === null ? (
          <section className="glass mx-auto max-w-md p-8 text-center">
            <p className="text-lg font-semibold text-white">Choose an instrument to begin</p>
            <p className="mt-2 text-sm text-slate-400">Open the menu and pick an instrument, then a mode.</p>
            <button type="button" onClick={() => setMenuOpen(true)} className="btn-accent mt-5 px-6 py-3 text-sm">
              Open menu
            </button>
          </section>
        ) : instrument === 'trumpet' ? (
          <TrumpetTrainer mode={trumpetMode} />
        ) : instrument === 'piano' && pianoMode === 'Chord Builder' ? (
          <ChordBuilder key="piano-builder" instrument="piano" />
        ) : instrument === 'piano' ? (
          <PianoTrainer key={pianoMode} mode={pianoMode} />
        ) : instrument === 'earTraining' ? (
          <EarTraining key={earTrainingMode} mode={earTrainingMode} />
        ) : instrument === 'theory' ? (
          <TheoryBrowser />
        ) : trainer.mode === 'Chord Builder' ? (
          <ChordBuilder key="guitar-builder" instrument="guitar" />
        ) : (
          <GuitarTrainer
            {...trainer}
            onGuessAnswerChange={(value) => {
              trainer.setGuessAnswer(value);
              trainer.setAnswerState('idle');
              trainer.setAnswerMessage('');
            }}
            onToggleNote={trainer.handleToggleNote}
            onToggleReveal={() => trainer.setRevealNames((current) => !current)}
            onSelectDegree={(degree) => {
              trainer.setSelectedDegree(degree);
              trainer.setAnswerState('idle');
              trainer.setAnswerMessage('');
            }}
            onSubmit={trainer.handleSubmit}
            onNewQuestion={() => trainer.requestNewQuestion(trainer.mode)}
            onNewScale={trainer.requestNewScale}
            onClearSelection={trainer.clearSelection}
            onOpenControls={() => setControlsOpen(true)}
            explorerScaleLocked={trainer.explorerScaleLocked}
            onExplorerScaleLock={trainer.toggleExplorerScaleLock}
            explorerScaleType={trainer.explorerScaleType}
            onExplorerScaleTypeChange={trainer.changeExplorerScaleType}
            explorerScaleRoot={trainer.explorerScaleRoot}
            onExplorerScaleRootChange={trainer.changeExplorerScaleRoot}
            explorerShift={trainer.explorerShift}
            onExplorerShiftChange={trainer.setExplorerShift}
            onExplorerShiftApply={() => trainer.applyExplorerShift(Number(trainer.explorerShift))}
            explorerShowAll={trainer.explorerShowAll}
            onExplorerShowAll={() => trainer.setExplorerShowAll((value) => !value)}
            explorerShowScale={trainer.explorerShowScale}
            onExplorerShowScale={() => trainer.setExplorerShowScale((value) => !value)}
            explorerScalePitchClasses={trainer.explorerScalePitchClasses}
            onExplorerDrag={trainer.handleExplorerDrag}
            getExplorerDragPreview={trainer.getExplorerDragPreview}
            displayScaleDegrees={trainer.displayScaleDegrees}
            onToggleDisplayScaleDegrees={() => trainer.setDisplayScaleDegrees((value) => !value)}
            displayScaleRoot={trainer.displayScaleRoot}
            displayScaleType={trainer.displayScaleType}
            intervalDisplay={intervalDisplay}
            showFretNumbers={showFretNumbers}
          />
        )}
      </div>

      {isGuitar && (
        <BottomSheet open={controlsOpen} onClose={closeControls} title="Controls">
          <div className="flex flex-col gap-3">
            <button type="button" onClick={() => trainer.setRevealNames((value) => !value)}
              className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
              {trainer.revealNames ? 'Hide notes' : 'Show notes'}
            </button>
            {trainer.revealNames && (
              <button type="button" onClick={() => trainer.setDisplayScaleDegrees((value) => !value)}
                className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
                {trainer.displayScaleDegrees ? 'Show notes' : 'Show degrees'} ({trainer.displayScaleRoot} {trainer.displayScaleType === 'minor' ? 'min' : 'maj'})
              </button>
            )}
            {trainer.mode === 'Intervals' && (
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Interval shown as</p>
                <div className="grid grid-cols-3 gap-2">
                  {[['both', 'Both'], ['name', 'Name'], ['semitones', 'Semitones']].map(([value, label]) => (
                    <button key={value} type="button" onClick={() => setIntervalDisplay(value)}
                      aria-pressed={intervalDisplay === value}
                      className="glass-btn px-2 py-3 text-sm font-semibold text-slate-100">
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button type="button" onClick={() => setShowFretNumbers((value) => !value)}
              aria-pressed={showFretNumbers}
              className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
              {showFretNumbers ? 'Hide fret numbers' : 'Show fret numbers'}
            </button>
            <button type="button" onClick={() => trainer.setAudioEnabled((value) => !value)}
              className="glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100">
              Audio {trainer.audioEnabled ? 'ON' : 'OFF'}
            </button>
          </div>
        </BottomSheet>
      )}
    </div>
  );
}

export default App;
