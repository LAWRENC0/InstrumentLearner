import {
  getBestTrumpetConfiguration,
  getReachableTrumpetTargets,
} from './trumpetTheory.js';

export const MAX_SHIFT = 12;
export const SHIFT_FORMATS = ['Semitones', 'Named'];

const INTERVAL_NAMES = {
  1: 'minor 2nd', 2: 'major 2nd', 3: 'minor 3rd', 4: 'major 3rd', 5: 'perfect 4th',
  6: 'tritone', 7: 'perfect 5th', 8: 'minor 6th', 9: 'major 6th', 10: 'minor 7th',
  11: 'major 7th', 12: 'octave',
};

let fingeredNotesCache = null;

// Every note the player can produce that also has a conventional fingering,
// mapped to that fingering. These are the possible "current notes".
export function getFingeredNotes() {
  if (!fingeredNotesCache) {
    fingeredNotesCache = new Map();
    for (const midi of getReachableTrumpetTargets()) {
      const best = getBestTrumpetConfiguration(midi);
      if (best) fingeredNotesCache.set(midi, best.configuration);
    }
  }
  return fingeredNotesCache;
}

// Text for the task. Semitones: "+7" / "-4". Named: "a perfect 5th above".
export function describeShift(semitones, format) {
  if (format === 'Semitones') return `${semitones > 0 ? '+' : '-'}${Math.abs(semitones)}`;
  const name = INTERVAL_NAMES[Math.abs(semitones)];
  const article = /^[aeiou]/.test(name) ? 'an' : 'a';
  return `${article} ${name} ${semitones > 0 ? 'above' : 'below'}`;
}

const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

// A shift is valid when the target is a note the trumpet can actually play
// (inside the playable range and reachable with some fingering).
export function getValidShifts(startMidi, reachable = new Set(getReachableTrumpetTargets())) {
  const shifts = [];
  for (let semitones = -MAX_SHIFT; semitones <= MAX_SHIFT; semitones += 1) {
    if (semitones !== 0 && reachable.has(startMidi + semitones)) shifts.push(semitones);
  }
  return shifts;
}

export function createIntervalShiftQuestion() {
  const reachable = new Set(getReachableTrumpetTargets());
  const starts = [...getFingeredNotes().entries()]
    .filter(([midi]) => getValidShifts(midi, reachable).length > 0);
  const [startMidi, startConfiguration] = randomItem(starts);
  const semitones = randomItem(getValidShifts(startMidi, reachable));
  return {
    startMidi,
    startConfiguration,
    semitones,
    targetMidi: startMidi + semitones,
  };
}
