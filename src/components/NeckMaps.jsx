import { useMemo, useState } from 'react';
import Fretboard from './Fretboard';
import { getNoteAtStringFret, noteToMidi, NOTE_NAMES, STRING_TUNINGS } from '../utils/musicTheory';
import { SCALE_STEPS } from '../utils/scales';

// Whole-neck maps for the theory reader, all generated from the standard tuning:
//   VoicingMap      every inversion of a chord on one string set (close triads, drop 2, drop 3)
//   ArpeggioMap     every chord tone on the neck, coloured by degree
//   ScaleChordMap   a scale on the neck, with the tones of one chord picked out

const noop = () => {};
const MAX_FRET = 15;

export const CHORD_TYPES = {
  major: { intervals: [0, 4, 7], degrees: ['R', '3', '5'], name: 'major', symbol: '' },
  minor: { intervals: [0, 3, 7], degrees: ['R', '♭3', '5'], name: 'minor', symbol: 'm' },
  diminished: { intervals: [0, 3, 6], degrees: ['R', '♭3', '♭5'], name: 'diminished', symbol: '°' },
  augmented: { intervals: [0, 4, 8], degrees: ['R', '3', '♯5'], name: 'augmented', symbol: '+' },
  maj7: { intervals: [0, 4, 7, 11], degrees: ['R', '3', '5', '7'], name: 'maj7', symbol: 'maj7' },
  7: { intervals: [0, 4, 7, 10], degrees: ['R', '3', '5', '♭7'], name: '7', symbol: '7' },
  m7: { intervals: [0, 3, 7, 10], degrees: ['R', '♭3', '5', '♭7'], name: 'm7', symbol: 'm7' },
  m7b5: { intervals: [0, 3, 6, 10], degrees: ['R', '♭3', '♭5', '♭7'], name: 'm7♭5', symbol: 'm7♭5' },
  dim7: { intervals: [0, 3, 6, 9], degrees: ['R', '♭3', '♭5', '°7'], name: 'dim7', symbol: '°7' },
};

// Order of chord tones from the lowest string up, for the inversion whose bass is tone `b`.
export const VOICINGS = {
  close: { label: 'close', order: (b, n) => Array.from({ length: n }, (_, i) => (b + i) % n) },
  drop2: { label: 'drop 2', order: (b) => [b, (b + 2) % 4, (b + 3) % 4, (b + 1) % 4] },
  drop3: { label: 'drop 3', order: (b) => [b, (b + 3) % 4, (b + 1) % 4, (b + 2) % 4] },
};

// One colour per chord tone (R, 3rd, 5th, 7th) and per inversion (root position, 1st, 2nd, 3rd).
const TONE_STYLES = [
  { className: 'bg-cyan-400 text-slate-950', swatch: 'bg-cyan-400' },
  { className: 'bg-amber-300 text-slate-950', swatch: 'bg-amber-300' },
  { className: 'bg-fuchsia-300 text-slate-950', swatch: 'bg-fuchsia-300' },
  { className: 'bg-emerald-300 text-slate-950', swatch: 'bg-emerald-300' },
];
const INVERSION_NAMES = ['Root position', '1st inversion', '2nd inversion', '3rd inversion'];
const ROOT_RING = 'ring-2 ring-white ring-offset-1 ring-offset-black/60';
const SCALE_ONLY = 'bg-slate-500 text-white ring-1 ring-slate-300/60';
const CHROMATIC_DEGREES = ['R', '♭2', '2', '♭3', '3', '4', '♯4', '5', '♭6', '6', '♭7', '7'];

// Every shape of a chord on a set of strings (guitar string numbers, low to high), frets 0 to 15.
// Each next string takes the next chord tone of the voicing order, at the nearest pitch above.
export function voicingShapes(root, type, voicing, strings) {
  const { intervals } = CHORD_TYPES[type];
  const n = intervals.length;
  const indexes = strings.map((number) => number - 1); // app index 0 = string 1 (high E)
  const open = indexes.map((index) => noteToMidi(getNoteAtStringFret(index, 0)));
  const up = (from, to) => (((to - from) % 12) + 12) % 12 || 12;
  const shapes = [];
  for (let bassTone = 0; bassTone < n; bassTone += 1) {
    const order = VOICINGS[voicing].order(bassTone, n);
    const pcs = order.map((tone) => (root + intervals[tone]) % 12);
    for (let bassFret = 0; bassFret <= MAX_FRET; bassFret += 1) {
      const midis = [open[0] + bassFret];
      if (midis[0] % 12 !== pcs[0]) continue;
      for (let i = 1; i < pcs.length; i += 1) midis.push(midis[i - 1] + up(pcs[i - 1], pcs[i]));
      const frets = midis.map((midi, i) => midi - open[i]);
      if (frets.some((fret) => fret < 0 || fret > MAX_FRET)) continue;
      shapes.push({ inversion: bassTone, positions: frets.map((fret, i) => ({ string: indexes[i], fret, tone: order[i] })) });
    }
  }
  return shapes;
}

// Root picker and label toggle shared by every map.
function MapHeader({ title, subtitle, root, onRoot, showNotes, onToggleNotes }) {
  return (
    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
      <figcaption className="text-sm font-semibold text-white">
        {title}
        {subtitle && <span className="ml-2 text-xs font-normal text-slate-400">{subtitle}</span>}
      </figcaption>
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-1.5 text-xs text-slate-400">
          Root
          <select value={root} onChange={(event) => onRoot(Number(event.target.value))} className="field px-2 py-1.5 text-xs">
            {NOTE_NAMES.map((name, pc) => <option key={name} value={pc}>{name}</option>)}
          </select>
        </label>
        <button type="button" onClick={onToggleNotes} className="glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100">
          {showNotes ? 'Show degrees' : 'Show notes'}
        </button>
      </div>
    </div>
  );
}

function Legend({ items, root = true }) {
  return (
    <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300">
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-full ${item.swatch}`} aria-hidden="true" />
          {item.label}
        </span>
      ))}
      {root && (
        <span className="flex items-center gap-1.5">
          <span className={`h-3 w-3 rounded-full bg-slate-500 ${ROOT_RING}`} aria-hidden="true" />
          ring = root
        </span>
      )}
    </div>
  );
}

function NeckMap({ markers, focusStrings = [] }) {
  return (
    <div className="overflow-x-auto overscroll-x-contain">
      <Fretboard rootPosition={null} selectedNotes={[]} customMarkers={markers} answerState="idle"
        onToggle={noop} revealNames requiredStrings={focusStrings} />
    </div>
  );
}

const noteOf = (root, interval) => NOTE_NAMES[(root + interval) % 12];

// Every inversion of a chord on one string set, coloured by inversion.
export function VoicingMap({ type, voicing = 'close', strings }) {
  const [root, setRoot] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const { intervals, degrees, name } = CHORD_TYPES[type];
  const markers = useMemo(() => {
    const map = new Map();
    voicingShapes(root, type, voicing, strings).forEach(({ inversion, positions }) => {
      positions.forEach(({ string, fret, tone }) => {
        map.set(`${string}-${fret}`, {
          label: showNotes ? noteOf(root, intervals[tone]) : degrees[tone],
          className: `${TONE_STYLES[inversion].className} ${tone === 0 ? ROOT_RING : ''}`,
        });
      });
    });
    return map;
  }, [root, type, voicing, strings, showNotes, intervals, degrees]);
  const legend = INVERSION_NAMES.slice(0, intervals.length).map((label, i) => ({ label, swatch: TONE_STYLES[i].swatch }));
  return (
    <figure className="glass-inset p-3">
      <MapHeader title={`${NOTE_NAMES[root]} ${name}`}
        subtitle={`${voicing === 'close' ? '' : `${VOICINGS[voicing].label} · `}strings ${strings.join('–')}`}
        root={root} onRoot={setRoot} showNotes={showNotes} onToggleNotes={() => setShowNotes((value) => !value)} />
      <NeckMap markers={markers} focusStrings={strings.map((number) => number - 1)} />
      <Legend items={legend} />
    </figure>
  );
}

// Every tone of a chord over the whole neck, coloured by chord degree.
export function ArpeggioMap({ type, initialRoot = 0 }) {
  const [root, setRoot] = useState(initialRoot);
  const [showNotes, setShowNotes] = useState(false);
  const { intervals, degrees, name } = CHORD_TYPES[type];
  const markers = useMemo(() => {
    const map = new Map();
    STRING_TUNINGS.forEach((_, string) => {
      for (let fret = 0; fret <= MAX_FRET; fret += 1) {
        const pc = noteToMidi(getNoteAtStringFret(string, fret)) % 12;
        const tone = intervals.findIndex((interval) => (root + interval) % 12 === pc);
        if (tone < 0) continue;
        map.set(`${string}-${fret}`, {
          label: showNotes ? noteOf(root, intervals[tone]) : degrees[tone],
          className: `${TONE_STYLES[tone].className} ${tone === 0 ? ROOT_RING : ''}`,
        });
      }
    });
    return map;
  }, [root, showNotes, intervals, degrees]);
  return (
    <figure className="glass-inset p-3">
      <MapHeader title={`${NOTE_NAMES[root]} ${name} arpeggio`} root={root} onRoot={setRoot}
        showNotes={showNotes} onToggleNotes={() => setShowNotes((value) => !value)} />
      <NeckMap markers={markers} />
      <Legend items={degrees.map((label, i) => ({ label, swatch: TONE_STYLES[i].swatch }))} root={false} />
    </figure>
  );
}

// A scale over the whole neck; the tones of the chord built on its root are coloured, the rest muted.
export function ScaleChordMap({ scale, chord, initialRoot = 0 }) {
  const [root, setRoot] = useState(initialRoot);
  const [showNotes, setShowNotes] = useState(false);
  const { intervals, degrees, symbol } = CHORD_TYPES[chord];
  const steps = SCALE_STEPS[scale];
  const markers = useMemo(() => {
    const map = new Map();
    STRING_TUNINGS.forEach((_, string) => {
      for (let fret = 0; fret <= MAX_FRET; fret += 1) {
        const pc = noteToMidi(getNoteAtStringFret(string, fret)) % 12;
        const interval = (pc - root + 12) % 12;
        if (!steps.includes(interval)) continue;
        const tone = intervals.indexOf(interval);
        map.set(`${string}-${fret}`, {
          label: showNotes ? NOTE_NAMES[pc] : (tone >= 0 ? degrees[tone] : CHROMATIC_DEGREES[interval]),
          className: tone >= 0 ? `${TONE_STYLES[tone].className} ${tone === 0 ? ROOT_RING : ''}` : SCALE_ONLY,
        });
      }
    });
    return map;
  }, [root, showNotes, steps, intervals, degrees]);
  const legend = [
    ...degrees.map((label, i) => ({ label: `chord ${label}`, swatch: TONE_STYLES[i].swatch })),
    { label: 'other scale notes', swatch: 'bg-slate-500 ring-1 ring-slate-300/60' },
  ];
  return (
    <figure className="glass-inset p-3">
      <MapHeader title={`${NOTE_NAMES[root]} ${scale}`} subtitle={`chord tones of ${NOTE_NAMES[root]}${symbol}`}
        root={root} onRoot={setRoot} showNotes={showNotes} onToggleNotes={() => setShowNotes((value) => !value)} />
      <NeckMap markers={markers} />
      <Legend items={legend} root={false} />
    </figure>
  );
}
