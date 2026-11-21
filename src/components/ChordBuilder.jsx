import { useState } from 'react';
import Fretboard from './Fretboard';
import { PianoKeyboard } from './PianoTrainer';
import ActionBar from './ActionBar';
import {
  COLOURS, MOVES, SEVENTHS, describeState, inversionLabel, nextInversion, stateTones,
} from '../utils/chordBuilder';
import { guitarShapesForPcs, pianoMidisForPcs } from '../utils/voicings';
import { NOTE_NAMES } from '../utils/musicTheory';
import { useShowFretNumbers } from '../utils/preferences';

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const LETTER_PC = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const ACCIDENTALS = [{ id: -1, label: '♭', suffix: 'b' }, { id: 0, label: '♮', suffix: '' }, { id: 1, label: '♯', suffix: '#' }];
const noop = () => {};

// Spells a root from a letter and an accidental, e.g. ('D', -1) -> root 1, name 'Db'.
function spell(letter, accidental) {
  const suffix = ACCIDENTALS.find((item) => item.id === accidental).suffix;
  return { root: (LETTER_PC[letter] + accidental + 12) % 12, rootName: `${letter}${suffix}` };
}

function accidentalOf(name) {
  if (name.endsWith('#')) return 1;
  if (name.endsWith('b')) return -1;
  return 0;
}

const INITIAL = {
  root: 0, rootName: 'C', colour: 'major', seventh: 'none', ninth: false, fifth: true,
  bass: null, bassName: null,
};

function Chip({ active, onClick, children, disabled = false, title }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} disabled={disabled} title={title}
      className="glass-btn px-3 py-2.5 text-sm font-semibold text-slate-100 disabled:opacity-40">
      {children}
    </button>
  );
}

function Group({ title, children }) {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{title}</p>
      {children}
    </div>
  );
}

// Builds a chord from picked options, names it, shows its shape, and offers inversions and moves.
// Every value is chosen from a control, so nothing has to be typed or parsed.
export default function ChordBuilder({ instrument }) {
  const [history, setHistory] = useState([INITIAL]);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [showFretNumbers, setShowFretNumbers] = useShowFretNumbers();
  const state = history[history.length - 1];
  const described = describeState(state);
  const pcs = stateTones(state);
  const bassPc = state.bass ?? state.root;
  const allowed = new Set(pcs);
  allowed.add(bassPc);
  // Every note of the chord must sound in a shape, and so must the bass.
  const required = new Set(allowed);
  const shapes = instrument === 'guitar' ? guitarShapesForPcs(allowed, required, bassPc, 500) : [];
  const shape = shapes.length ? shapes[shapeIndex % shapes.length] : [];

  const push = (patch) => {
    setHistory((current) => [...current, { ...current[current.length - 1], ...patch }]);
    setShapeIndex(0);
  };
  const pushState = (next) => {
    setHistory((current) => [...current, next]);
    setShapeIndex(0);
  };
  const undo = () => {
    setHistory((current) => (current.length > 1 ? current.slice(0, -1) : current));
    setShapeIndex(0);
  };

  const letter = state.rootName[0];
  const accidental = accidentalOf(state.rootName);
  const setRoot = (nextLetter, nextAccidental) => {
    const { root, rootName } = spell(nextLetter, nextAccidental);
    push({ root, rootName, bass: null, bassName: null });
  };
  const setBass = (nextLetter, nextAccidental) => {
    const { root, rootName } = spell(nextLetter, nextAccidental);
    push({ bass: root, bassName: rootName });
  };
  const clearBass = () => push({ bass: null, bassName: null });

  const pianoShape = instrument === 'piano' ? pianoMidisForPcs([...pcs, bassPc], bassPc) : [];
  const shapeMissing = instrument === 'guitar' && shapes.length === 0;
  const bassLetter = state.bass === null ? null : NOTE_NAMES[state.bass][0];
  const bassAccidental = state.bass === null ? 0 : accidentalOf(NOTE_NAMES[state.bass]);

  return (
    <div className="space-y-4">
      <section className="glass p-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Chord builder</p>
        <p className="mt-2 text-4xl font-bold text-white">{described.primary}</p>
        {described.alternatives.length > 0 && (
          <p className="mt-2 text-sm text-slate-300">(also: {described.alternatives.join(', ')})</p>
        )}
        <p className="mt-2 text-xs text-slate-400">
          {state.bass === null || state.bass === state.root ? 'Root position' : inversionLabel(state)}
          {' · '}
          notes: {pcs.map((pc) => NOTE_NAMES[pc]).join(' ')}
        </p>
      </section>

      <section className="glass space-y-5 p-5">
        <Group title="Root">
          <div className="grid grid-cols-7 gap-1">
            {LETTERS.map((item) => (
              <Chip key={item} active={letter === item} onClick={() => setRoot(item, accidental)}>{item}</Chip>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {ACCIDENTALS.map((item) => (
              <Chip key={item.id} active={accidental === item.id} onClick={() => setRoot(letter, item.id)}>{item.label}</Chip>
            ))}
          </div>
        </Group>

        <Group title="Colour">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {COLOURS.map((item) => (
              <Chip key={item.id} active={state.colour === item.id} onClick={() => push({ colour: item.id })}>{item.label}</Chip>
            ))}
          </div>
        </Group>

        <Group title="Seventh">
          <div className="grid grid-cols-4 gap-2">
            {SEVENTHS.map((item) => (
              <Chip key={item.id} active={state.seventh === item.id} onClick={() => push({ seventh: item.id })}>{item.label}</Chip>
            ))}
          </div>
        </Group>

        <Group title="Extensions">
          <div className="grid grid-cols-2 gap-2">
            <Chip active={state.ninth} onClick={() => push({ ninth: !state.ninth })}>9th: {state.ninth ? 'on' : 'off'}</Chip>
            <Chip active={state.fifth} onClick={() => push({ fifth: !state.fifth })}>5th: {state.fifth ? 'on' : 'off'}</Chip>
          </div>
        </Group>

        <Group title="Bass (slash chord)">
          <div className="grid grid-cols-8 gap-1">
            <Chip active={state.bass === null} onClick={clearBass}>Root</Chip>
            {LETTERS.map((item) => (
              <Chip key={item} active={bassLetter === item} onClick={() => setBass(item, bassAccidental)}>{item}</Chip>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1">
            {ACCIDENTALS.map((item) => (
              <Chip key={item.id} active={state.bass !== null && bassAccidental === item.id}
                disabled={state.bass === null}
                onClick={() => setBass(bassLetter, item.id)}>{item.label}</Chip>
            ))}
          </div>
        </Group>
      </section>

      <section className="glass space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-slate-300">
            Inversion: <span className="font-semibold text-white">{state.bass === null || state.bass === state.root ? 'root position' : inversionLabel(state)}</span>
            {instrument === 'guitar' && shapes.length > 0 && (
              <span className="ml-2 text-xs text-slate-400">shape {(shapeIndex % shapes.length) + 1} of {shapes.length}</span>
            )}
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => pushState(nextInversion(state))}
              className="btn-accent px-4 py-2.5 text-sm">
              Next inversion
            </button>
            {instrument === 'guitar' && shapes.length > 1 && (
              <button type="button" onClick={() => setShapeIndex((value) => value + 1)}
                className="glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100">
                Next shape
              </button>
            )}
            <button type="button" onClick={undo} disabled={history.length === 1}
              className="glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100 disabled:opacity-40">
              Undo
            </button>
          </div>
        </div>
        <Group title="Move to…">
          <div className="grid gap-2 sm:grid-cols-2">
            {MOVES.map((move) => (
              <button key={move.id} type="button" disabled={!move.available(state)} title={move.hint}
                onClick={() => pushState(move.apply(state))}
                className="glass-btn px-4 py-3 text-left disabled:opacity-40">
                <span className="block text-sm font-semibold text-slate-100">{move.label}</span>
                <span className="mt-0.5 block text-xs leading-snug text-slate-400">{move.hint}</span>
              </button>
            ))}
          </div>
        </Group>
      </section>

      <section className="glass p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {instrument === 'guitar' ? 'Shape on the fretboard' : 'Keys'}
          </p>
          {instrument === 'guitar' && (
            <button type="button" onClick={() => setShowFretNumbers((value) => !value)} aria-pressed={showFretNumbers}
              className="glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100">
              {showFretNumbers ? 'Hide fret numbers' : 'Show fret numbers'}
            </button>
          )}
        </div>
        {instrument === 'guitar' ? (
          shapeMissing ? (
            <p className="text-sm text-slate-400">No guitar shape for these notes within the neck. Try another inversion or colour.</p>
          ) : (
            <div className="overflow-x-auto overscroll-x-contain">
              <Fretboard
                rootPosition={null} selectedNotes={shape} answerState="idle" onToggle={noop} revealNames
                boxPositions={[]} validPositions={[]} highlightedPosition={null} requiredString="any"
                requiredStrings={[]} scalePitchClasses={[]} displayScaleDegrees={false} scaleType="major"
              />
            </div>
          )
        ) : (
          <PianoKeyboard
            highlightedKeys={new Set(pianoShape.map(String))} selectedKeys={new Set(pianoShape.map(String))}
            missedKeys={new Set()} answerState="idle" onToggle={noop} revealNames focusMidi={null}
            resetKey={history.length}
          />
        )}
      </section>

      <ActionBar onNew={() => setHistory([INITIAL])} newLabel="Start over" />
    </div>
  );
}
