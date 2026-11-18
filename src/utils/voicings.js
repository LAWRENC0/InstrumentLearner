// Playable guitar and piano shapes, found from pitch classes.
// Strings are indexed 0 = high E ... 5 = low E, as in the app.

import { NOTE_NAMES, getNoteAtStringFret, noteToMidi } from './musicTheory.js';

// Semitone offsets from the root, in stacking order (root first, so index i is the i-th chord tone).
export const QUALITY_OFFSETS = {
  '': [0, 4, 7],
  maj: [0, 4, 7],
  m: [0, 3, 7],
  aug: [0, 4, 8],
  dim: [0, 3, 6],
  o: [0, 3, 6, 9],
  'ø': [0, 3, 6, 10],
  'm7b5': [0, 3, 6, 10],
  5: [0, 7],
  sus4: [0, 5, 7],
  add9: [0, 4, 7, 2],
  6: [0, 4, 7, 9],
  m6: [0, 3, 7, 9],
  7: [0, 4, 7, 10],
  maj7: [0, 4, 7, 11],
  m7: [0, 3, 7, 10],
  '7#9': [0, 4, 7, 10, 3],
  '7alt': [0, 4, 6, 10, 1, 8],
  '7b9': [0, 4, 7, 10, 1],
  9: [0, 4, 7, 10, 2],
  m9: [0, 3, 7, 10, 2],
  maj9: [0, 4, 7, 11, 2],
  11: [0, 4, 7, 10, 2, 5],
  13: [0, 4, 7, 10, 2, 9],
};

// Core tones a shape must contain for extended or altered chords. Other tones may be left out.
const CORE_OFFSETS = {
  '7alt': [0, 4, 6, 10],
  '7b9': [0, 4, 7, 10],
  '7#9': [0, 4, 10, 3],
  9: [0, 4, 10, 2],
  m9: [0, 3, 10, 2],
  maj9: [0, 4, 11, 2],
  11: [0, 4, 10, 5],
  13: [0, 4, 10, 9],
};

const LETTER_PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

// "Bb7" -> { root: 10, quality: '7', name: 'Bb7' }. Returns null if the name is not understood.
export function parseChordName(name) {
  const match = /^([A-G])([#b]?)(.*)$/.exec(name.trim());
  if (!match) return null;
  const root = (LETTER_PC[match[1]] + (match[2] === '#' ? 1 : match[2] === 'b' ? -1 : 0) + 12) % 12;
  let quality = match[3];
  if (quality === 'M' || quality === 'Δ') quality = '';
  if (quality === 'M7' || quality === 'Δ7') quality = 'maj7';
  if (quality === 'min' || quality === '-') quality = 'm';
  if (quality === 'o' || quality === '°' || quality === 'dim') quality = 'dim';
  if (quality === 'o7' || quality === '°7' || quality === 'dim7') quality = 'o';
  if (quality === 'Ø' || quality === 'ø7' || quality === 'Ø7') quality = 'ø';
  if (quality === 'mb5' || quality === 'm7♭5' || quality === 'm7-5') quality = 'm7b5';
  if (!(quality in QUALITY_OFFSETS)) return null;
  return { root, quality, name: name.trim() };
}

// Chord tones as pitch classes, in stacking order (root, third, fifth, ...).
export function chordTonePcs(chord) {
  return QUALITY_OFFSETS[chord.quality].map((offset) => (chord.root + offset) % 12);
}

// Guitar shapes for a set of pitch classes. Every shape found is returned, best first.
//   allowed:  pitch classes that may sound.
//   required: pitch classes that must all sound (the chord's notes).
//   bassPc:   the lowest sounding note.
// A shape uses between three and six strings (so every string set is tried, with open and fretted
// notes alike), frets 0 to 12, and a hand span of at most four frets. Shapes that use fewer muted
// strings, sit on adjacent strings and stay low on the neck rank first. Duplicates are removed.
const STRING_SETS = (() => {
  const sets = [];
  for (let mask = 1; mask < 64; mask += 1) {
    const strings = [];
    for (let bit = 0; bit < 6; bit += 1) if (mask & (1 << bit)) strings.push(bit);
    if (strings.length >= 3) sets.push(strings);
  }
  return sets;
})();

export function guitarShapesForPcs(allowed, required, bassPc, limit = 200) {
  const sounding = new Set(allowed);
  const mustHave = [...required];
  const found = new Map();

  for (const strings of STRING_SETS) {
    const options = strings.map((string) => {
      const frets = [];
      for (let fret = 0; fret <= 12; fret += 1) {
        const pc = noteToMidi(getNoteAtStringFret(string, fret)) % 12;
        if (sounding.has(pc)) frets.push(fret);
      }
      return frets;
    });
    if (options.some((frets) => frets.length === 0)) continue;

    const gaps = strings[strings.length - 1] - strings[0] + 1 - strings.length;
    const muted = 6 - strings.length;
    const pick = [];
    const walk = (index) => {
      if (index === strings.length) {
        const fretted = pick.filter((fret) => fret > 0);
        const span = fretted.length ? Math.max(...fretted) - Math.min(...fretted) : 0;
        if (span > 4) return;
        const positions = strings.map((string, i) => ({
          string, fret: pick[i], note: getNoteAtStringFret(string, pick[i]),
        }));
        const sounded = new Set(positions.map((p) => noteToMidi(p.note) % 12));
        if (!mustHave.every((pc) => sounded.has(pc))) return;
        const lowest = positions.reduce((low, p) => (noteToMidi(p.note) < noteToMidi(low.note) ? p : low));
        if (noteToMidi(lowest.note) % 12 !== bassPc) return;
        const key = positions.map((p) => `${p.string}:${p.fret}`).join(' ');
        const cost = span * 2 + gaps * 3 + muted * 1.5 + pick.reduce((sum, fret) => sum + fret, 0) / 10;
        if (!found.has(key) || found.get(key).cost > cost) found.set(key, { cost, positions });
        return;
      }
      for (const fret of options[index]) {
        pick[index] = fret;
        walk(index + 1);
      }
    };
    walk(0);
  }
  return [...found.values()]
    .sort((a, b) => a.cost - b.cost)
    .slice(0, limit)
    .map((item) => item.positions);
}

// The best guitar shape, or [] when none exists.
export function guitarShapeForPcs(allowed, required, bassPc) {
  return guitarShapesForPcs(allowed, required, bassPc, 1)[0] ?? [];
}

// Piano close voicing from the bass upward, starting in the octave of C3 (MIDI 48).
// The pitch classes may come in any order; the bass is placed lowest.
export function pianoMidisForPcs(pitchClasses, bassPc) {
  const pcs = [...new Set(pitchClasses)];
  const bassMidi = 48 + ((bassPc + 12) % 12);
  const midis = [bassMidi];
  pcs.forEach((pc) => {
    if (pc === bassPc) return;
    let candidate = bassMidi + ((pc - bassPc + 12) % 12);
    while (candidate <= midis[midis.length - 1]) candidate += 12;
    midis.push(candidate);
  });
  return midis;
}

// Chord-object versions, used by the theory diagrams.
export function findGuitarVoicing(chord, bass = null) {
  const allowed = new Set(chordTonePcs(chord));
  if (bass !== null) allowed.add(bass);
  const offsets = CORE_OFFSETS[chord.quality] ?? QUALITY_OFFSETS[chord.quality];
  const required = new Set(offsets.map((offset) => (chord.root + offset) % 12));
  if (bass !== null) required.add(bass);
  return guitarShapeForPcs(allowed, required, bass ?? chord.root);
}

// Every guitar shape for a chord object and bass (every chord note must sound), best first.
export function findGuitarVoicings(chord, bass = null) {
  const tones = chordTonePcs(chord);
  const allowed = new Set(tones);
  if (bass !== null) allowed.add(bass);
  return guitarShapesForPcs(allowed, new Set(allowed), bass ?? chord.root, 500);
}

export function findPianoVoicing(chord, bass = null) {
  return pianoMidisForPcs(chordTonePcs(chord), bass ?? chord.root);
}

export function midiToPcName(midi) {
  return NOTE_NAMES[((midi % 12) + 12) % 12];
}
