import { useRef, useState } from 'react';
import HeaderSelector from './components/HeaderSelector';
import GuitarTrainer from './components/GuitarTrainer';
import TrumpetTrainer from './components/TrumpetTrainer';
import {
  CHORD_DIFFICULTIES, MODES, SCALE_TRIAD_EXERCISES, buildQuestion,
} from './utils/questionHelpers';
import {
  getNoteAtStringFret, getPitchClass, noteToMidi,
} from './utils/musicTheory';

const MAX_FRET = 15; // frets 0..15
const openStringMidi = (string) => noteToMidi(getNoteAtStringFret(string, 0));
const midiToPitchClass = (midi) => ((midi % 12) + 12) % 12;

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

  const wrappedFret = (fret, shift) => ((fret + shift) % 16 + 16) % 16;
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
    setSelectedNotes((current) => current.map((position) => {
      const semitoneShift = shift;
      if (explorerScaleLocked && !preserveShape) {
        const snapped = getScaleLockedPosition(position, scalePitches, shift);
        return snapped ?? position;
      }
      const fret = wrappedFret(position.fret, semitoneShift);
      return { ...position, fret, note: getNoteAtStringFret(position.string, fret) };
    }));
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
    const expectedKeys = new Set(question.validPositions.map((p) => `${p.string}-${p.fret}`));
    const selectedKeys = new Set(selectedNotes.map((p) => `${p.string}-${p.fret}`));
    const correctCount = [...selectedKeys].filter((key) => expectedKeys.has(key)).length;
    const wrongCount = [...selectedKeys].filter((key) => !expectedKeys.has(key)).length;

    if (mode === 'Guess the Note') {
      const normalizedGuess = guessAnswer.trim().replace(/^([a-g])/, (_, note) => note.toUpperCase());
      const answerPitchClass = getPitchClass(normalizedGuess);
      const highlightedPitchClass = getPitchClass(question.highlightedPosition.note);
      if (answerPitchClass === null || answerPitchClass === -1) {
        setAnswerMessage('Enter a note name such as E, C#, or Db.');
        return;
      }
      setAnswerMessage(answerPitchClass === highlightedPitchClass
        ? 'Correct note.'
        : `Not quite. The highlighted note is ${question.highlightedPosition.note.replace(/\d+$/, '')}.`);
      setAnswerState('submitted');
      setRevealNames(true);
      return;
    }

    if (mode === 'Pentatonics' && ['identify-degree', 'identify-fundamental'].includes(question.pentatonicExercise)) {
      if (!selectedDegree) return;
      const isCorrect = selectedDegree === question.pentatonicAnswer;
      setAnswerMessage(isCorrect ? 'Correct degree.' : `Not quite. The highlighted note is the ${question.pentatonicAnswer}.`);
      setAnswerState('submitted');
      setRevealNames(true);
      return;
    }
    if (selectedNotes.length === 0) return;
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
        : 'Select every chord tone, including the highlighted note, without extra notes.');
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
        : 'Select the complete triad on the requested degree and string set.');
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
        ? 'Correct triad and string set.' : 'Check the three adjacent strings and the triad notes.');
    }
    setAnswerState('submitted');
    setRevealNames(true);
    if (correctCount >= wrongCount) console.log('Nice work.');
  };

  return {
    mode, setMode, difficulty, changeDifficulty, scaleTriadExercise, changeScaleTriadExercise,
    requestNewScale,
    question, selectedNotes, revealNames, answerState, answerMessage,
    guessAnswer, setGuessAnswer,
    selectedDegree, setSelectedDegree, audioEnabled, setAudioEnabled, requestNewQuestion,
    handleToggleNote, handleSubmit, setRevealNames, setAnswerState, setAnswerMessage,
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
  const [instrument, setInstrument] = useState('guitar');
  const [trumpetMode, setTrumpetMode] = useState('Register & Intonation');
  const [openMenu, setOpenMenu] = useState(null);
  const trainer = useGuitarTrainerState();
  const handleModeChange = (nextMode) => {
    trainer.setMode(nextMode);
    trainer.requestNewQuestion(nextMode);
    setOpenMenu(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <HeaderSelector
          instrument={instrument} modes={MODES} openMenu={openMenu}
          difficulty={trainer.difficulty}
          difficulties={instrument === 'guitar' && trainer.mode === 'Fill in the Chords' ? CHORD_DIFFICULTIES : []}
          exercises={instrument === 'guitar' && trainer.mode === 'Scale & Triads' ? SCALE_TRIAD_EXERCISES : []}
          exercise={trainer.scaleTriadExercise}
          onMenuToggle={(menu) => setOpenMenu((current) => current === menu ? null : menu)}
          onInstrumentChange={(next) => { setInstrument(next); setOpenMenu(null); }}
          mode={instrument === 'guitar' ? trainer.mode : trumpetMode}
          onModeChange={instrument === 'guitar' ? handleModeChange : (next) => { setTrumpetMode(next); setOpenMenu(null); }}
          onDifficultyChange={(next) => { trainer.changeDifficulty(next); setOpenMenu(null); }}
          onExerciseChange={(next) => { trainer.changeScaleTriadExercise(next); setOpenMenu(null); }}
        />
        {instrument === 'trumpet' ? <TrumpetTrainer mode={trumpetMode} /> : (
          <GuitarTrainer
            {...trainer}
            onGuessAnswerChange={(value) => {
              trainer.setGuessAnswer(value);
              trainer.setAnswerState('idle');
              trainer.setAnswerMessage('');
            }}
            onToggleNote={trainer.handleToggleNote}
            onToggleReveal={() => trainer.setRevealNames((current) => !current)}
            onToggleAudio={() => trainer.setAudioEnabled((value) => !value)}
            onSelectDegree={(degree) => {
              trainer.setSelectedDegree(degree);
              trainer.setAnswerState('idle');
              trainer.setAnswerMessage('');
            }}
            onSubmit={trainer.handleSubmit}
            onNewQuestion={() => trainer.requestNewQuestion(trainer.mode)}
            onNewScale={trainer.requestNewScale}
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
          />
        )}
      </div>
    </div>
  );
}

export default App;