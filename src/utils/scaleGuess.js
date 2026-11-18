// "Did you mean…?" for scale-building exercises.
// Only suggests a scale when the selection is close to a real scale. A handful of random
// notes gets no suggestion, so the app doesn't invent an intention the player didn't have.

import { NOTE_NAMES } from './musicTheory.js';

const SCALE_STEPS = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
};

export function scaleSet(root, type) {
  return SCALE_STEPS[type].map((step) => (root + step) % 12);
}

// Candidate scales with their notes, in a stable order (major before minor).
export const ALL_SCALES = NOTE_NAMES.flatMap((name, root) => ['major', 'minor'].map((type) => ({
  name: `${name} ${type}`,
  root,
  type,
  pitchClasses: scaleSet(root, type),
})));

// Returns the closest scale the selection could have been aiming for, or null.
// Rules: at least 6 selected notes, at most 1 selected note outside the scale and
// at most 1 scale note missing. Ties go to fewer extras, then fewer missing notes.
export function guessIntendedScale(selectedPitchClasses) {
  const selected = [...new Set(selectedPitchClasses)];
  if (selected.length < 6) return null;

  let best = null;
  for (const scale of ALL_SCALES) {
    const members = new Set(scale.pitchClasses);
    const extra = selected.filter((pc) => !members.has(pc)).length;
    const missing = scale.pitchClasses.filter((pc) => !selected.includes(pc)).length;
    if (extra > 1 || missing > 1) continue;
    const score = extra * 10 + missing;
    if (!best || score < best.score) best = { ...scale, extra, missing, score };
  }
  return best;
}
