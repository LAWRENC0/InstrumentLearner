// Theory behind the ear training chord exercises. Pure functions, no audio here.
// Pitch classes are 0-11 (C = 0). Triads only: major, minor, and diminished
// (diminished only as a diatonic degree of a key).

const MAJOR_STEPS = [0, 2, 4, 5, 7, 9, 11];
const NATURAL_MINOR_STEPS = [0, 2, 3, 5, 7, 8, 10];

// Diatonic triad qualities by scale degree I..VII.
const MAJOR_QUALITIES = ['major', 'minor', 'minor', 'major', 'major', 'minor', 'diminished'];
const MINOR_QUALITIES = ['minor', 'diminished', 'major', 'minor', 'minor', 'major', 'major'];

// Roman numeral for each semitone above the tonic.
const NUMERALS = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

// Common borrowings, written against the MAJOR tonic: IVm, IIIM, IIM, VIM, VIIb.
// For a minor key the same set is applied to its relative major (tonic + 3 semitones).
const BORROWINGS = [
  { offset: 5, quality: 'minor' },   // IVm
  { offset: 4, quality: 'major' },   // IIIM
  { offset: 2, quality: 'major' },   // IIM
  { offset: 9, quality: 'major' },   // VIM
  { offset: 10, quality: 'major' },  // VIIb
];

export const KEY_TYPES = ['major', 'minor'];
export const RELATION_LEVELS = ['Easy', 'Medium', 'Hard'];

// Roman numeral for a chord in a key: upper case for major, lower case for minor,
// lower case with a degree sign for diminished. Example: bVI minor -> "bvi".
export function romanNumeral(root, quality, tonic) {
  const offset = ((root - tonic) % 12 + 12) % 12;
  const numeral = NUMERALS[offset];
  if (quality === 'major') return numeral;
  if (quality === 'minor') return numeral.toLowerCase();
  return `${numeral.toLowerCase()}°`;
}

function chord(root, quality, tonic, kind) {
  return { root, quality, kind, label: romanNumeral(root, quality, tonic) };
}

export function diatonicChords(tonic, type) {
  const steps = type === 'major' ? MAJOR_STEPS : NATURAL_MINOR_STEPS;
  const qualities = type === 'major' ? MAJOR_QUALITIES : MINOR_QUALITIES;
  return steps.map((step, index) => chord((tonic + step) % 12, qualities[index], tonic, 'diatonic'));
}

// Borrowed chords that are not already diatonic to the key.
export function borrowedChords(tonic, type) {
  const majorTonic = type === 'major' ? tonic : (tonic + 3) % 12;
  const diatonic = diatonicChords(tonic, type);
  return BORROWINGS
    .map(({ offset, quality }) => chord((majorTonic + offset) % 12, quality, tonic, 'borrowed'))
    .filter((candidate) => !diatonic.some((item) => item.root === candidate.root && item.quality === candidate.quality));
}

// Second-chord pool for a difficulty level in a key.
// Easy: diatonic chords. Medium: diatonic plus common borrowings.
export function relationPool(level, tonic, type) {
  const diatonic = diatonicChords(tonic, type);
  if (level === 'Easy') return diatonic;
  return [...diatonic, ...borrowedChords(tonic, type)];
}

// MIDI notes of a triad voiced in a given octave, lowest note first.
export function triadMidis(root, quality, octave = 4) {
  const rootMidi = root + 12 * (octave + 1);
  const offsets = quality === 'major' ? [0, 4, 7] : quality === 'minor' ? [0, 3, 7]
    : quality === 'diminished' ? [0, 3, 6] : [0, 4, 8];
  return offsets.map((offset) => rootMidi + offset);
}

// Puts a triad into root position (0), first inversion (1) or second inversion (2).
// The lowest notes move up an octave one at a time.
export function invertMidis(midis, inversion) {
  const notes = [...midis].sort((a, b) => a - b);
  for (let step = 0; step < inversion; step += 1) notes.push(notes.shift() + 12);
  return notes;
}

export const INVERSION_NAMES = ['Root position', '1st inversion', '2nd inversion'];

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

// Level Easy/Medium: the first chord is any diatonic chord of a random key and the
// second is drawn from the level's pool (never the same chord).
// Level Hard: any two major or minor triads, with no key shown.
export function createRelationQuestion(level) {
  if (level === 'Hard') {
    const first = { root: Math.floor(Math.random() * 12), quality: randomItem(['major', 'minor']) };
    let second;
    do {
      second = { root: Math.floor(Math.random() * 12), quality: randomItem(['major', 'minor']) };
    } while (second.root === first.root && second.quality === first.quality);
    return { level, first, second };
  }
  const tonic = Math.floor(Math.random() * 12);
  const type = randomItem(KEY_TYPES);
  const firstPool = diatonicChords(tonic, type);
  const first = randomItem(firstPool);
  const pool = relationPool(level, tonic, type);
  const second = randomItem(pool.filter((item) => !(item.root === first.root && item.quality === first.quality)));
  return { level, tonic, type, first, second, pool };
}
