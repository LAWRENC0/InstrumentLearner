// Scale names used in the knowledge base, as semitone steps from the tonic, plus the parsers for
// "{{scale: ...}}" and "{{notes: ...}}" directives.

import { parseNoteName } from './noteInput.js';

export const SCALE_STEPS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  ionian: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  'harmonic minor': [0, 2, 3, 5, 7, 8, 11],
  'melodic minor': [0, 2, 3, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  'lydian dominant': [0, 2, 4, 6, 7, 9, 10],
  altered: [0, 1, 3, 4, 6, 8, 10],
  'phrygian dominant': [0, 1, 4, 5, 7, 8, 10],
  'minor pentatonic': [0, 3, 5, 7, 10],
  'major pentatonic': [0, 2, 4, 7, 9],
  blues: [0, 3, 5, 6, 7, 10],
  'whole tone': [0, 2, 4, 6, 8, 10],
  'diminished': [0, 2, 3, 5, 6, 8, 9, 11],
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

// "D dorian" -> { root: 2, name: 'dorian', pcs: [...] }. "A minor pentatonic" also works.
// Returns null when the name is not recognised.
export function parseScaleDirective(text) {
  const trimmed = text.trim().toLowerCase();
  const rootMatch = /^([a-g](?:#|b|♯|♭)?)\s+(.+)$/.exec(trimmed);
  if (!rootMatch) return null;
  const root = parseNoteName(rootMatch[1]);
  const name = rootMatch[2].trim();
  const steps = SCALE_STEPS[name];
  if (root === null || !steps) return null;
  return { root, name, pcs: steps.map((step) => (root + step) % 12) };
}

// "C E G" -> { pcs: [0, 4, 7] }. Returns null if any name is not a note.
export function parseNotesDirective(text) {
  const names = text.trim().split(/\s+/).filter(Boolean);
  const pcs = names.map(parseNoteName);
  if (!names.length || pcs.some((pc) => pc === null)) return null;
  return { pcs: [...new Set(pcs)], names };
}
