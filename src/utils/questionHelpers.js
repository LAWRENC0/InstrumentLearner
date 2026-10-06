import {
  NOTE_NAMES,
  getChordNotes,
  getIntervalDisplay,
  getNoteAtStringFret,
  getPentatonicBoxPositions,
  getPentatonicDegreeTargets,
  getPitchClass,
  getPositionByPitchClass,
  getRandomNotePosition,
  getScaleDegreeTriad,
  INTERVALS,
  midiToNote,
  noteToMidi,
} from './musicTheory';

export const MODES = ['Intervals', 'Fill in the Chords', 'Guess the Note', 'Scale & Triads', 'Fretboard Explorer', 'Pentatonics'];
export const CHORD_DIFFICULTIES = ['Easy', 'Hard'];
export const SCALE_TRIAD_EXERCISES = ['Find triad', 'Highlight degree'];

const romanMap = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clampPositions(positions, requiredString = 'any', minFret = 0, maxFret = 15) {
  if (requiredString !== 'any') {
    positions = positions.filter((position) => String(position.string + 1) === String(requiredString));
  }

  return positions.filter((position) => position.fret >= minFret && position.fret <= maxFret);
}

function getPositionsForPitchClasses(pitchClasses, strings) {
  const targets = new Set(pitchClasses);
  return strings.flatMap((stringIndex) =>
    Array.from({ length: 16 }, (_, fret) => {
      const note = getNoteAtStringFret(stringIndex, fret);
      return targets.has(getPitchClass(note)) ? { string: stringIndex, fret, note } : null;
    }).filter(Boolean),
  );
}

const MAX_TRIAD_FRET = 15;

/**
 * Every playable way to play a triad with one note per string on 3 adjacent strings.
 * "Playable" = the three frets fit inside a hand span (max fret - min fret <= maxSpan).
 * Any inversion / voicing is allowed, as long as it contains the root, 3rd and 5th once.
 * Returns [{ positions: [{ string, fret, note, tone }], span }]
 */
function getTriadShapes(triadNotes, strings, { maxSpan = 3, maxFret = MAX_TRIAD_FRET } = {}) {
  const pitchClasses = triadNotes.map(getPitchClass);

  // For each string: every fret that holds a chord tone
  const optionsPerString = strings.map((stringIndex) => {
    const options = [];
    for (let fret = 0; fret <= maxFret; fret += 1) {
      const note = getNoteAtStringFret(stringIndex, fret);
      const tone = pitchClasses.indexOf(getPitchClass(note));
      if (tone !== -1) options.push({ string: stringIndex, fret, note, tone });
    }
    return options;
  });

  const build = (span) =>
    optionsPerString[0].flatMap((a) =>
      optionsPerString[1].flatMap((b) =>
        optionsPerString[2].flatMap((c) => {
          if (new Set([a.tone, b.tone, c.tone]).size !== 3) return []; // each chord tone once
          const frets = [a.fret, b.fret, c.fret];
          const shapeSpan = Math.max(...frets) - Math.min(...frets);
          return shapeSpan <= span ? [{ positions: [a, b, c], span: shapeSpan }] : [];
        }),
      ),
    );

  // Practically always finds something at 3; widen only as a safety net
  for (let span = maxSpan; span <= maxSpan + 2; span += 1) {
    const shapes = build(span);
    if (shapes.length) return shapes;
  }
  return [];
}

function uniquePositions(positions) {
  const seen = new Map();
  positions.forEach((p) => seen.set(`${p.string}-${p.fret}`, p));
  return [...seen.values()];
}

const CHORD_QUALITIES_BY_DIFFICULTY = {
  Easy: ['major', 'minor', 'aug', 'dim'],
  Hard: ['7', 'maj7', 'm7', 'minmaj7', 'dim7', 'half-dim7'],
};

const CHORD_QUALITY_LABELS = {
  major: 'major',
  minor: 'minor',
  aug: 'augmented',
  dim: 'diminished',
  7: 'dominant 7th',
  maj7: 'major 7th',
  m7: 'minor 7th',
  minmaj7: 'minor-major 7th',
  dim7: 'fully diminished 7th',
  'half-dim7': 'half-diminished 7th',
};

function buildFillInChordsQuestion(difficulty = 'Easy') {
  const rootNote = randomFrom(NOTE_NAMES);
  const quality = randomFrom(CHORD_QUALITIES_BY_DIFFICULTY[difficulty] ?? CHORD_QUALITIES_BY_DIFFICULTY.Easy);
  const chordNotes = getChordNotes(rootNote, quality);
  const highlightedIndex = randomInt(0, chordNotes.length - 1);
  const highlightedNote = chordNotes[highlightedIndex];
  const rootPosition = getRandomNotePosition(highlightedNote);

  return {
    mode: 'Fill in the Chords',
    difficulty,
    rootNote,
    rootPosition,
    highlightedPosition: rootPosition,
    chordPitchClasses: chordNotes.map(getPitchClass),
    validPositions: chordNotes.flatMap((noteName) => getPositionByPitchClass(noteName, 0, 'any')),
    requiredString: 'any',
    prompt: `The highlighted note is the ${['root', 'third', 'fifth', 'seventh'][highlightedIndex]} of a ${CHORD_QUALITY_LABELS[quality]} chord. Find all chord tones.`,
    boxPositions: [],
  };
}

function buildGuessTheNoteQuestion() {
  const highlightedPosition = getRandomNotePosition(randomFrom(NOTE_NAMES));

  return {
    mode: 'Guess the Note',
    rootPosition: null,
    highlightedPosition,
    validPositions: [highlightedPosition],
    boxPositions: [],
    requiredString: 'any',
    prompt: 'What note is highlighted?',
  };
}

function buildScaleTriadsQuestion(exercise = 'Find triad', scale = null) {
  const rootNote = scale?.rootNote ?? randomFrom(NOTE_NAMES);
  const scaleType = scale?.scaleType ?? randomFrom(['major', 'minor']);

  // Three adjacent strings (index 0 = high E)
  const displayStart = randomInt(0, 3);
  const displayedStrings = [displayStart, displayStart + 1, displayStart + 2];

  // Shown triad: one real, playable shape of the tonic triad
  const displayedTriad = getScaleDegreeTriad(rootNote, scaleType, 1);
  const displayedShape = randomFrom(getTriadShapes(displayedTriad.notes, displayedStrings));
  const displayedPositions = displayedShape.positions.map((p) => ({ ...p, highlighted: true }));

  // Target triad, possibly on a different set of adjacent strings
  const targetDegree = randomInt(1, 7);
  const targetStrings =
    Math.random() < 0.8
      ? displayedStrings
      : (() => {
        const start = randomInt(0, 3);
        return [start, start + 1, start + 2];
      })();

  const targetTriad = getScaleDegreeTriad(rootNote, scaleType, targetDegree);
  if (exercise === 'Highlight degree') {
    const validShapes = getTriadShapes(targetTriad.notes, targetStrings);
    const validPositions = uniquePositions(validShapes.flatMap((shape) => shape.positions));

    return {
      mode: 'Scale & Triads',
      scaleTriadExercise: exercise,
      rootNote,
      scaleType,
      rootPosition: null,
      validPositions,
      boxPositions: displayedPositions,
      requiredString: 'any',
      requiredStrings: targetStrings,
      targetStrings,
      targetDegree,
      validShapes,
      prompt: `Highlight the triad on degree ${romanMap[targetDegree - 1]} of the ${rootNote} ${scaleType} scale.`,
    };
  }

  const validShapes = getTriadShapes(targetTriad.notes, targetStrings);
  // Flat list of every note that belongs to at least one playable shape
  const validPositions = uniquePositions(validShapes.flatMap((shape) => shape.positions));

  return {
    mode: 'Scale & Triads',
    scaleTriadExercise: exercise,
    rootNote,
    scaleType,
    rootPosition: null,
    validPositions,
    validShapes, // use this to check that the 3 chosen notes form ONE shape
    boxPositions: displayedPositions,
    requiredString: 'any',
    requiredStrings: targetStrings,
    targetStrings,
    targetDegree,
    prompt: `Highlighted is fundamental. Find the triad on degree ${romanMap[targetDegree - 1]} on strings ${targetStrings.map((index) => index + 1).join(', ')}.`,
  };
}

function buildPentatonicQuestion() {
  const scaleType = randomFrom(['major', 'minor']);
  const rootNote = randomFrom(NOTE_NAMES);
  const boxNumber = randomInt(1, 5);
  const degreeOptions = scaleType === 'major'
    ? [
      { label: 'tonic', semitones: 0 },
      { label: '2nd', semitones: 2 },
      { label: '3rd', semitones: 4 },
      { label: '5th', semitones: 7 },
      { label: '6th', semitones: 9 },
    ]
    : [
      { label: 'tonic', semitones: 0 },
      { label: 'minor 3rd', semitones: 3 },
      { label: '4th', semitones: 5 },
      { label: '5th', semitones: 7 },
      { label: 'minor 7th', semitones: 10 },
    ];
  const answer = randomFrom(degreeOptions);
  const relativeMinorRoot = scaleType === 'major'
    ? midiToNote(noteToMidi(rootNote) - 3)
    : rootNote;
  const boxPositions = getPentatonicBoxPositions(relativeMinorRoot, boxNumber);

  const semitonesFromRoot = (position) =>
    (getPitchClass(position.note) - getPitchClass(rootNote) + 12) % 12;

  const exerciseRoll = Math.random();
  const exerciseType = exerciseRoll < 0.34
    ? 'find-degree'
    : exerciseRoll < 0.67
      ? 'identify-degree'
      : 'identify-fundamental';

  if (exerciseType === 'find-degree') {
    const targetPositions = boxPositions.filter(
      (position) => semitonesFromRoot(position) === answer.semitones,
    );
    return {
      mode: 'Pentatonics',
      rootNote,
      rootPosition: null,
      validPositions: targetPositions,
      boxPositions,
      requiredString: 'any',
      pentatonicExercise: 'find-degree',
      pentatonicScaleType: scaleType,
      prompt: `Find the ${answer.label} of the ${rootNote} ${scaleType} pentatonic scale.`,
    };
  }

  if (exerciseType === 'identify-fundamental') {
    // Lowest-pitched note of the box = lowest fret on the lowest string (index 5 = low E)
    const lowStringIndex = Math.max(...boxPositions.map((p) => p.string));
    const lowestPosition = boxPositions
      .filter((p) => p.string === lowStringIndex)
      .reduce((lowest, p) => (p.fret < lowest.fret ? p : lowest));
    const lowestDegree = degreeOptions.find(
      (degree) => degree.semitones === semitonesFromRoot(lowestPosition),
    );

    return {
      mode: 'Pentatonics',
      rootNote,
      rootPosition: null,
      highlightedPosition: lowestPosition,
      validPositions: [lowestPosition],
      boxPositions,
      requiredString: 'any',
      pentatonicExercise: 'identify-fundamental',
      pentatonicScaleType: scaleType,
      pentatonicAnswer: lowestDegree.label,
      prompt: `What degree of the ${rootNote} ${scaleType} pentatonic scale is the lowest note of this box?`,
    };
  }

  // identify-degree: a random note of the box is highlighted
  const highlightedPosition = randomFrom(
    boxPositions.filter((position) => semitonesFromRoot(position) === answer.semitones),
  );

  return {
    mode: 'Pentatonics',
    rootNote,
    rootPosition: null,
    highlightedPosition,
    validPositions: [highlightedPosition],
    boxPositions,
    requiredString: 'any',
    pentatonicExercise: 'identify-degree',
    pentatonicScaleType: scaleType,
    pentatonicAnswer: answer.label,
    prompt: `What degree of the ${rootNote} ${scaleType} pentatonic scale is the highlighted note?`,
  };
}

export function buildQuestion(
  mode,
  difficulty = 'Easy',
  scaleTriadExercise = 'Find triad',
  scale = null,
) {
  switch (mode) {
    case 'Intervals': {
      const rootNote = randomFrom(NOTE_NAMES);
      const intervalKey = randomFrom(Object.keys(INTERVALS));
      const rootPosition = getRandomNotePosition(rootNote);
      const requiredString = Math.random() > 0.5 ? 'any' : String(randomInt(1, 6));
      const validPositions = clampPositions(
        getPositionByPitchClass(rootNote, INTERVALS[intervalKey], requiredString),
        requiredString,
      );

      return {
        mode,
        rootNote,
        rootPosition,
        validPositions,
        requiredString,
        prompt: requiredString === 'any'
          ? `Find the ${getIntervalDisplay(intervalKey)} (${INTERVALS[intervalKey]}) of the highlighted note.`
          : `Find the ${getIntervalDisplay(intervalKey)} (${INTERVALS[intervalKey]}) of the highlighted note on string ${requiredString}.`,
        boxPositions: [],
      };
    }

    case 'Fill in the Chords':
      return buildFillInChordsQuestion(difficulty);

    case 'Guess the Note':
      return buildGuessTheNoteQuestion();

    case 'Fretboard Explorer':
      return {
        mode: 'Fretboard Explorer',
        rootPosition: null,
        highlightedPosition: null,
        validPositions: [],
        boxPositions: [],
        requiredString: 'any',
      };

    case 'Scale & Triads': {
      return buildScaleTriadsQuestion(scaleTriadExercise, scale);
    }

    case 'Pentatonics': {
      return buildPentatonicQuestion();
    }

    default:
      return buildQuestion('Intervals', difficulty);
  }
}
