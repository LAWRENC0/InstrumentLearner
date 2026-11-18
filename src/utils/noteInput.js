// Parsing of typed answers: note names and scale names.
// Accepts any capitalisation, sharp/flat written as #, b, ♯, ♭, "sharp" or "flat",
// and spaces between the letter and the accidental: "G#", "g#", "g sharp", "Ab", "a flat".

import { NOTE_NAMES } from './musicTheory.js';

const LETTER_PITCH = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
const ACCIDENTAL = { '#': 1, '♯': 1, sharp: 1, b: -1, '♭': -1, flat: -1 };

// Returns the pitch class 0-11 for a typed note name, or null if it isn't one.
export function parseNoteName(input) {
  if (typeof input !== 'string') return null;
  const compact = input.trim().toLowerCase().replace(/\s+/g, '');
  const match = /^([a-g])(#|♯|♭|b|sharp|flat)?$/.exec(compact);
  if (!match) return null;
  const offset = match[2] ? ACCIDENTAL[match[2]] : 0;
  return (LETTER_PITCH[match[1]] + offset + 12) % 12;
}

// Canonical sharp name for a pitch class, e.g. 8 -> 'G#'.
export function pitchClassToName(pitchClass) {
  return NOTE_NAMES[((pitchClass % 12) + 12) % 12];
}

// Parses "E", "E major", "e minor", "Emin", "Eb m" into { pitchClass, type }.
// A bare note means major, as in the existing Guess the Scale exercise.
export function parseScaleName(input) {
  if (typeof input !== 'string') return null;
  const text = input.trim().toLowerCase();
  const match = /^(.+?)\s*(major|minor|maj|min|m)?$/.exec(text);
  if (!match) return null;
  const pitchClass = parseNoteName(match[1]);
  if (pitchClass === null) return null;
  const quality = match[2];
  const type = quality === 'minor' || quality === 'min' || quality === 'm' ? 'minor' : 'major';
  return { pitchClass, type };
}
