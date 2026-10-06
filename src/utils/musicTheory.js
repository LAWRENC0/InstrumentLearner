export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const STRING_TUNINGS = ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'];
export const STRING_LABELS = ['1', '2', '3', '4', '5', '6'];

export const INTERVALS = {
  unison: 0,
  m2: 1,
  M2: 2,
  m3: 3,
  M3: 4,
  P4: 5,
  tritone: 6,
  P5: 7,
  m6: 8,
  M6: 9,
  m7: 10,
  M7: 11,
  octave: 12,
};

export const INTERVAL_LABELS = {
  unison: 'unison',
  m2: 'm2',
  M2: 'M2',
  m3: 'm3',
  M3: 'M3',
  P4: 'P4',
  tritone: 'tritone',
  P5: 'P5',
  m6: 'm6',
  M6: 'M6',
  m7: 'm7',
  M7: 'M7',
  octave: 'octave',
};

export const TRIAD_QUALITIES = {
  major: [0, 4, 7],
  minor: [0, 3, 7],
  diminished: [0, 3, 6],
  augmented: [0, 4, 8],
};

export function normalizePitchName(pitch) {
  const flatMap = {
    Cb: 'B',
    Db: 'C#',
    Eb: 'D#',
    Fb: 'E',
    Gb: 'F#',
    Ab: 'G#',
    Bb: 'A#',
  };

  return flatMap[pitch] ?? pitch.replace('b', '#');
}

export function noteToMidi(note) {
  const match = /^([A-G](?:#|b)?)(-?\d)?$/.exec(note.trim());
  if (!match) {
    throw new Error(`Invalid note: ${note}`);
  }

  const [, pitch, octavePart] = match;
  const normalizedPitch = normalizePitchName(pitch);
  const pitchIndex = NOTE_NAMES.indexOf(normalizedPitch);
  const octave = octavePart === undefined ? 4 : Number(octavePart);

  if (pitchIndex === -1) {
    throw new Error(`Unsupported pitch: ${pitch}`);
  }

  const midi = (octave + 1) * 12 + pitchIndex;
  return midi;
}

export function midiToNote(midi) {
  const normalized = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return `${NOTE_NAMES[normalized]}${octave}`;
}

export function getNoteAtStringFret(stringIndex, fret) {
  if (stringIndex < 0 || stringIndex >= STRING_TUNINGS.length) {
    return null;
  }
  return midiToNote(noteToMidi(STRING_TUNINGS[stringIndex]) + fret);
}

export function getStringIndexFromLabel(label) {
  if (label === 'any') return null;
  const asNumber = Number(label);
  if (Number.isInteger(asNumber) && asNumber >= 1 && asNumber <= 6) {
    return asNumber - 1;
  }
  return null;
}

export function getStringLabelFromIndex(index) {
  return STRING_LABELS[index] ?? 'any';
}

export function getRandomNotePosition(noteName) {
  const matches = [];
  const targetPitch = getPitchClass(noteName);

  for (let stringIndex = 0; stringIndex < STRING_TUNINGS.length; stringIndex += 1) {
    for (let fret = 0; fret <= 15; fret += 1) {
      const currentNote = getNoteAtStringFret(stringIndex, fret);
      if (getPitchClass(currentNote) === targetPitch) {
        matches.push({ string: stringIndex, fret, note: currentNote });
      }
    }
  }

  if (!matches.length) {
    return { string: 0, fret: 0, note: noteName };
  }

  return matches[Math.floor(Math.random() * matches.length)];
}

export function getPitchClass(noteName) {
  const match = /^([A-G](?:#|b)?)/.exec(noteName);
  if (!match) {
    return null;
  }
  const normalized = normalizePitchName(match[1]);
  return NOTE_NAMES.indexOf(normalized);
}

export function getPositionByPitchClass(rootNote, semitoneOffset, requiredString = 'any', minFret = 0, maxFret = 15) {
  const rootPitchClass = getPitchClass(rootNote);
  const targetPitchClass = (rootPitchClass + semitoneOffset) % 12;
  const results = [];

  for (let stringIndex = 0; stringIndex < STRING_TUNINGS.length; stringIndex += 1) {
    if (requiredString !== 'any' && String(stringIndex + 1) !== String(requiredString)) {
      continue;
    }

    for (let fret = minFret; fret <= maxFret; fret += 1) {
      const note = getNoteAtStringFret(stringIndex, fret);
      if (getPitchClass(note) === targetPitchClass) {
        results.push({ string: stringIndex, fret, note });
      }
    }
  }

  return results;
}

export function getTriadNotes(root, quality) {
  const rootMidi = noteToMidi(root);
  const offsets = TRIAD_QUALITIES[quality] ?? TRIAD_QUALITIES.major;
  return offsets.map((offset) => midiToNote(rootMidi + offset));
}

export function getChordNotes(root, quality) {
  const rootMidi = noteToMidi(root);
  const formulas = {
    7: [0, 4, 7, 10],
    maj7: [0, 4, 7, 11],
    m7: [0, 3, 7, 10],
    minmaj7: [0, 3, 7, 11],
    sus4: [0, 5, 7],
    sus2: [0, 2, 7],
    add9: [0, 4, 7, 14],
    aug: [0, 4, 8],
    dim: [0, 3, 6],
    dim7: [0, 3, 6, 9],
    'half-dim7': [0, 3, 6, 10],
  };

  const offsets = formulas[quality] ?? formulas[7];
  return offsets.map((offset) => midiToNote(rootMidi + offset));
}

export function getDegreeTriadQuality(scaleType, degreeIndex) {
  const majorQualityMap = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];
  const minorQualityMap = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];

  const map = scaleType === 'major' ? majorQualityMap : minorQualityMap;
  return map[(degreeIndex - 1) % map.length];
}

export function getScaleDegreeTriad(root, scaleType, degreeIndex) {
  const scaleOffsets = scaleType === 'major' ? [0, 2, 4, 5, 7, 9, 11] : [0, 2, 3, 5, 7, 8, 10];
  const quality = getDegreeTriadQuality(scaleType, degreeIndex);
  const rootMidi = noteToMidi(root);
  const degreeRoot = midiToNote(rootMidi + scaleOffsets[(degreeIndex - 1) % scaleOffsets.length]);
  return {
    root: degreeRoot,
    notes: getTriadNotes(degreeRoot, quality),
    quality,
  };
}

// Replace getPentatonicBoxPositions and getPentatonicDegreeTargets in your theory
// module with everything below. Uses existing helpers: getPitchClass, noteToMidi,
// getNoteAtStringFret, STRING_TUNINGS.

// Minor pentatonic, semitones above the root: 1, b3, 4, 5, b7
export const MINOR_PENTATONIC = [0, 3, 5, 7, 10];

// Natural minor degrees -> semitones above the root
const NATURAL_MINOR_DEGREES = { 1: 0, 2: 2, 3: 3, 4: 5, 5: 7, 6: 8, 7: 10 };

const DEGREE_ALIASES = {
  tonic: 1,
  root: 1,
  second: 2,
  '2nd': 2,
  'minor third': 3,
  'flat 3rd': 3,
  third: 3,
  '3rd': 3,
  fourth: 4,
  '4th': 4,
  fifth: 5,
  '5th': 5,
  sixth: 6,
  '6th': 6,
  'minor seventh': 7,
  seventh: 7,
  '7th': 7,
};

function resolveDegreeSemitones(degree) {
  const key = typeof degree === 'string' ? DEGREE_ALIASES[degree.toLowerCase()] ?? Number(degree) : degree;
  return NATURAL_MINOR_DEGREES[key] ?? 0;
}

/**
 * Minor pentatonic box (1-5) for a root, e.g. ('D', 4).
 * Box 1 starts on the root on the low E string, box 2 on the b3, box 3 on the 4th,
 * box 4 on the 5th, box 5 on the b7. Each string holds 2 notes.
 * Returns [{ string, fret, note }] where string index 0 = high E ... 5 = low E.
 */
export function getPentatonicBoxPositions(root, boxNumber, maxFret = 15) {
  const boxIndex = (((boxNumber - 1) % 5) + 5) % 5;
  const lowE = STRING_TUNINGS.length - 1;
  const lowEMidi = noteToMidi(STRING_TUNINGS[lowE]);

  // lowest fret on low E that has the root (0..11)
  const rootFret = (getPitchClass(root) - getPitchClass(STRING_TUNINGS[lowE]) + 12) % 12;

  const build = (startFret) => {
    // 12 ascending scale notes starting at this box's first low-E note
    const scale = [];
    let midi = lowEMidi + startFret;
    for (let j = 0; j < 12; j += 1) {
      scale.push(midi);
      const cur = MINOR_PENTATONIC[(boxIndex + j) % 5];
      const next = MINOR_PENTATONIC[(boxIndex + j + 1) % 5];
      midi += (next - cur + 12) % 12;
    }

    // going up from low E, each string takes the next 2 scale notes
    const positions = [];
    for (let k = 0; k < STRING_TUNINGS.length; k += 1) {
      const stringIndex = lowE - k;
      const openMidi = noteToMidi(STRING_TUNINGS[stringIndex]);
      [scale[2 * k], scale[2 * k + 1]].forEach((noteMidi) => {
        const fret = noteMidi - openMidi;
        positions.push({ string: stringIndex, fret, note: getNoteAtStringFret(stringIndex, fret) });
      });
    }
    return positions;
  };

  let startFret = rootFret + MINOR_PENTATONIC[boxIndex];
  let positions = build(startFret);
  if (Math.max(...positions.map((p) => p.fret)) > maxFret) {
    startFret -= 12;
    positions = build(startFret);
  }

  return positions.filter((p) => p.fret >= 0 && p.fret <= maxFret);
}

/**
 * Positions of a scale degree (1-7 of the natural minor, or a name like 'fifth')
 * for a given box.
 * - Degrees in the pentatonic (1, 3, 4, 5, 7): the highlighted notes of the box.
 * - Degrees 2 and 6 (not in the pentatonic): matching notes inside the box's fret
 *   span, flagged outsideScale: true.
 */
export function getPentatonicDegreeTargets(root, boxNumber, degree, maxFret = 15) {
  const semitones = resolveDegreeSemitones(degree);
  const rootPitchClass = getPitchClass(root);
  const isRelative = (note) => (getPitchClass(note) - rootPitchClass + 12) % 12 === semitones;

  const box = getPentatonicBoxPositions(root, boxNumber, maxFret);

  if (MINOR_PENTATONIC.includes(semitones)) {
    return box.filter((p) => isRelative(p.note));
  }

  const minFret = Math.min(...box.map((p) => p.fret));
  const maxBoxFret = Math.max(...box.map((p) => p.fret));
  const targets = [];

  for (let stringIndex = 0; stringIndex < STRING_TUNINGS.length; stringIndex += 1) {
    for (let fret = minFret; fret <= maxBoxFret; fret += 1) {
      const note = getNoteAtStringFret(stringIndex, fret);
      if (isRelative(note)) {
        targets.push({ string: stringIndex, fret, note, outsideScale: true });
      }
    }
  }
  return targets;
}

/** One-call helper for the game mode. */
export function getPentatonicChallenge(root, boxNumber, degree, maxFret = 15) {
  return {
    root,
    boxNumber,
    degree,
    highlighted: getPentatonicBoxPositions(root, boxNumber, maxFret),
    targets: getPentatonicDegreeTargets(root, boxNumber, degree, maxFret),
  };
}

export function getRandomInterval() {
  const keys = Object.keys(INTERVALS);
  return keys[Math.floor(Math.random() * keys.length)];
}

export function getIntervalDisplay(intervalKey) {
  return INTERVAL_LABELS[intervalKey] ?? intervalKey;
}
