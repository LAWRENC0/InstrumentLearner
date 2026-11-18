// Logic behind the chord builder: building a chord from picked options, naming it (with other
// valid names for the same notes), finding the next inversion, and the "move to" transforms.
//
// A builder state is:
//   { root: 0-11, rootName: 'C'|'C#'|'Db'..., colour, seventh, ninth, fifth, bass: 0-11|null, bassName }

import { NOTE_NAMES } from './musicTheory.js';

export const COLOURS = [
  { id: 'major', label: 'Major', third: 4, fifth: 7 },
  { id: 'minor', label: 'Minor', third: 3, fifth: 7 },
  { id: 'dim', label: 'Diminished', third: 3, fifth: 6 },
  { id: 'aug', label: 'Augmented', third: 4, fifth: 8 },
  { id: 'sus2', label: 'Sus2', third: 2, fifth: 7 },
  { id: 'sus4', label: 'Sus4', third: 5, fifth: 7 },
  { id: 'power', label: 'Power (5)', third: null, fifth: 7 },
];

export const SEVENTHS = [
  { id: 'none', label: 'None', offset: null },
  { id: 'b7', label: '♭7', offset: 10 },
  { id: 'maj7', label: 'maj7', offset: 11 },
  { id: 'dim7', label: 'dim7', offset: 9 },
];

const TEMPLATES = [
  [[0, 4, 7], ''], [[0, 3, 7], 'm'], [[0, 3, 6], 'dim'], [[0, 4, 8], 'aug'],
  [[0, 2, 7], 'sus2'], [[0, 5, 7], 'sus4'], [[0, 7], '5'],
  [[0, 4, 7, 9], '6'], [[0, 3, 7, 9], 'm6'],
  [[0, 4, 7, 10], '7'], [[0, 3, 7, 10], 'm7'], [[0, 4, 7, 11], 'maj7'], [[0, 3, 7, 11], 'mMaj7'],
  [[0, 3, 6, 10], 'm7♭5'], [[0, 3, 6, 9], 'dim7'], [[0, 4, 8, 10], '7♯5'],
  [[0, 2, 4, 7], 'add9'], [[0, 2, 3, 7], 'm add9'],
  [[0, 2, 4, 7, 10], '9'], [[0, 2, 3, 7, 10], 'm9'], [[0, 2, 4, 7, 11], 'maj9'],
  [[0, 1, 4, 7, 10], '7♭9'], [[0, 3, 4, 7, 10], '7♯9'],
];

const sameSet = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);

// Relative pitch classes of a set, measured from `root`, sorted.
function relativeSet(pcs, root) {
  return [...new Set(pcs.map((pc) => ((pc - root) % 12 + 12) % 12))].sort((a, b) => a - b);
}

// Every name the given notes could have. Each candidate root is tried; a bass that differs from the
// root produces a slash name. Returns [{ root, name }], the requested root first.
export function nameCandidates(pcs, bass, preferredRoot) {
  const found = [];
  const unique = [...new Set(pcs)];
  for (const root of unique) {
    const rel = relativeSet(unique, root);
    let suffix = null;
    const exact = TEMPLATES.find(([set]) => sameSet(set, rel));
    if (exact) suffix = exact[1];
    if (suffix === null && rel.includes(7)) {
      const withoutFifth = rel.filter((value) => value !== 7);
      const match = TEMPLATES.find(([set]) => sameSet(set, withoutFifth));
      if (match) suffix = `${match[1]}(no5)`;
    }
    if (suffix === null) continue;
    const slash = bass !== null && bass !== root ? `/${NOTE_NAMES[bass]}` : '';
    found.push({ root, name: `${NOTE_NAMES[root]}${suffix}${slash}` });
  }
  found.sort((a, b) => (a.root === preferredRoot ? -1 : b.root === preferredRoot ? 1 : 0));
  return found;
}

// Pitch classes of a builder state, root first, then stacking order.
export function stateTones(state) {
  const colour = COLOURS.find((item) => item.id === state.colour);
  const tones = [0];
  if (colour.third !== null) tones.push(colour.third);
  if (state.fifth || colour.id === 'power' || colour.id === 'dim' || colour.id === 'aug') {
    tones.push(colour.fifth);
  }
  const seventh = SEVENTHS.find((item) => item.id === state.seventh);
  if (seventh.offset !== null) tones.push(seventh.offset);
  if (state.ninth) tones.push(2);
  return tones.map((offset) => (state.root + offset) % 12);
}

// The names of the chord, for the big caption: the primary name first, then the others.
export function describeState(state) {
  const candidates = nameCandidates(stateTones(state), state.bass, state.root);
  const own = candidates.find((item) => item.root === state.root);
  // The quality part of the name, without the root letter and without a slash.
  const suffix = own ? own.name.slice(NOTE_NAMES[state.root].length).split('/')[0] : '(custom)';
  const slash = state.bass !== null && state.bass !== state.root ? `/${state.bassName}` : '';
  return {
    primary: `${state.rootName}${suffix}${slash}`,
    alternatives: candidates.filter((item) => item.root !== state.root).map((item) => item.name),
  };
}

// Next inversion: the bass moves to the next chord tone. After the last tone it returns to the root.
export function nextInversion(state) {
  const order = stateTones(state);
  if (state.bass === null) return { ...state, bass: order[1] ?? null, bassName: order[1] !== undefined ? NOTE_NAMES[order[1]] : null };
  const index = order.indexOf(state.bass);
  const next = index >= 0 && index + 1 < order.length ? order[index + 1] : null;
  return { ...state, bass: next, bassName: next === null ? null : NOTE_NAMES[next] };
}

// Which inversion the state shows, as a name: 'root position', '1st inversion', and so on.
export function inversionLabel(state) {
  if (state.bass === null || state.bass === state.root) return 'root position';
  const index = stateTones(state).indexOf(state.bass);
  return ['root position', '1st inversion', '2nd inversion', '3rd inversion', '4th inversion'][index] ?? 'inversion';
}

// Moves. Each one changes the chord to a related chord and clears any slash bass.
const cleared = { bass: null, bassName: null };

// Sets the root and its spelled name together, so the caption always matches the notes.
const withRoot = (s, root) => ({ root, rootName: NOTE_NAMES[root] });

export const MOVES = [
  {
    id: 'up5',
    label: 'Up a 5th (its dominant)',
    hint: 'The V of the chord: pulls to it',
    available: () => true,
    apply: (s) => ({ ...s, ...cleared, ...withRoot(s, (s.root + 7) % 12), colour: 'major', seventh: 'b7', ninth: false, fifth: true }),
  },
  {
    id: 'down5',
    label: 'Down a 5th',
    hint: 'Same quality, the chord a fifth below',
    available: () => true,
    apply: (s) => ({ ...s, ...cleared, ...withRoot(s, (s.root + 5) % 12) }),
  },
  {
    id: 'tritone',
    label: 'Tritone substitution',
    hint: "Replaces this chord's dominant (its V) with the dominant a tritone away: a half step above the target",
    available: (s) => s.colour === 'major' || s.seventh === 'b7',
    apply: (s) => ({ ...s, ...cleared, ...withRoot(s, (s.root + 1) % 12), colour: 'major', seventh: 'b7', ninth: false, fifth: true }),
  },
  {
    id: 'relative',
    label: 'Relative minor / major',
    hint: 'Same key signature: minor 3rd below, or major 3rd above',
    available: (s) => s.colour === 'major' || s.colour === 'minor',
    apply: (s) => (s.colour === 'major'
      ? { ...s, ...cleared, ...withRoot(s, (s.root + 9) % 12), colour: 'minor' }
      : { ...s, ...cleared, ...withRoot(s, (s.root + 3) % 12), colour: 'major' }),
  },
  {
    id: 'parallel',
    label: 'Parallel minor / major',
    hint: 'Same root, the other mode',
    available: (s) => s.colour === 'major' || s.colour === 'minor',
    apply: (s) => ({ ...s, ...cleared, colour: s.colour === 'major' ? 'minor' : 'major' }),
  },
  {
    id: 'dim7below',
    label: 'Diminished 7th a semitone below',
    hint: 'A diminished chord whose note a semitone below resolves up to this chord',
    available: () => true,
    apply: (s) => ({ ...s, ...cleared, ...withRoot(s, (s.root + 11) % 12), colour: 'dim', seventh: 'dim7', ninth: false, fifth: true }),
  },
];
