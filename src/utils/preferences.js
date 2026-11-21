import { useSyncExternalStore } from 'react';

// App-wide display preferences shared by every fretboard (trainer, Chord Builder, theory diagrams).
// The value is remembered in the browser when storage is available, and defaults to "on" otherwise.
const FRET_NUMBERS_KEY = 'instrumentLearner.showFretNumbers';
const listeners = new Set();

function readStored() {
  try {
    return window.localStorage.getItem(FRET_NUMBERS_KEY) !== 'false';
  } catch {
    return true;
  }
}

let showFretNumbers = readStored();

export function setShowFretNumbers(next) {
  showFretNumbers = typeof next === 'function' ? next(showFretNumbers) : next;
  try {
    window.localStorage.setItem(FRET_NUMBERS_KEY, String(showFretNumbers));
  } catch {
    // Storage blocked: the setting still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Returns [showFretNumbers, setShowFretNumbers].
export function useShowFretNumbers() {
  const value = useSyncExternalStore(subscribe, () => showFretNumbers, () => true);
  return [value, setShowFretNumbers];
}
