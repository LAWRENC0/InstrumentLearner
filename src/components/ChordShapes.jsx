import { useState } from 'react';
import Fretboard from './Fretboard';
import { PianoKeyboard } from './PianoTrainer';
import {
  chordTonePcs, findGuitarVoicings, findPianoVoicing, parseChordName,
} from '../utils/voicings';
import { parseNoteName } from '../utils/noteInput';
import { getNoteAtStringFret, noteToMidi, NOTE_NAMES } from '../utils/musicTheory';

const noop = () => {};
const INVERSION_NAMES = ['root position', '1st inversion', '2nd inversion', '3rd inversion', '4th inversion'];
const LOW_MIDI = 48;
const HIGH_MIDI = 83;

function noteLabel(pc) {
  return NOTE_NAMES[((pc % 12) + 12) % 12];
}

// One chord shape with an inversion button. The button cycles the bass through the chord tones.
function ChordFigure({ name, instruments }) {
  const [symbol, bassText] = name.split('/');
  const chord = parseChordName(symbol);
  if (!chord) return <p className="text-sm text-rose-300">Unknown chord: {name}</p>;

  const tones = chordTonePcs(chord);
  const slashBass = bassText ? parseNoteName(bassText) : null;
  // A slash bass that is a chord tone sets the starting inversion; any other bass is kept fixed.
  const fixedBass = slashBass !== null && !tones.includes(slashBass);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [inversion, setInversion] = useState(() => (slashBass !== null && tones.includes(slashBass)
    ? tones.indexOf(slashBass)
    : 0));

  const bass = fixedBass ? slashBass : tones[inversion % tones.length];
  const canCycle = !fixedBass && tones.length > 1;
  const inversionLabel = INVERSION_NAMES[inversion] ?? `inversion ${inversion}`;
  const guitarShapes = instruments.includes('guitar') ? findGuitarVoicings(chord, bass) : [];
  const guitarPositions = guitarShapes.length ? guitarShapes[shapeIndex % guitarShapes.length] : [];
  const pianoMidis = instruments.includes('piano') ? findPianoVoicing(chord, bass) : [];

  return (
    <figure className="glass-inset p-3">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <figcaption className="text-sm font-semibold text-white">
          {name}
          <span className="ml-2 text-xs font-normal text-slate-400">
            bass {noteLabel(bass)}{fixedBass ? '' : ` · ${inversionLabel}`}
          </span>
        </figcaption>
        <div className="flex flex-wrap gap-2">
          {canCycle && (
            <button type="button" onClick={() => { setInversion((value) => (value + 1) % tones.length); setShapeIndex(0); }}
              className="glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100">
              Next inversion
            </button>
          )}
          {instruments.includes('guitar') && guitarShapes.length > 1 && (
            <button type="button" onClick={() => setShapeIndex((value) => value + 1)}
              className="glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100">
              Next shape ({(shapeIndex % guitarShapes.length) + 1}/{guitarShapes.length})
            </button>
          )}
        </div>
      </div>

      {instruments.includes('guitar') && (
        guitarPositions.length ? (
          <div className="overflow-x-auto overscroll-x-contain">
            <Fretboard
              rootPosition={null}
              selectedNotes={guitarPositions}
              answerState="idle"
              onToggle={noop}
              revealNames
              boxPositions={[]}
              validPositions={[]}
              highlightedPosition={null}
              requiredString="any"
              requiredStrings={[]}
              scalePitchClasses={[]}
              displayScaleDegrees={false}
              scaleType="major"
              showFretNumbers
            />
          </div>
        ) : (
          <p className="text-xs text-slate-400">No guitar shape found for this bass within four frets.</p>
        )
      )}

      {instruments.includes('piano') && (
        <div className="mt-3">
          <PianoKeyboard
            highlightedKeys={new Set(pianoMidis.map(String))}
            selectedKeys={new Set(pianoMidis.map(String))}
            missedKeys={new Set()}
            answerState="idle"
            onToggle={noop}
            revealNames
            focusMidi={null}
            resetKey={`${name}-${bass}`}
          />
        </div>
      )}
    </figure>
  );
}

// Chord shapes for a {{chords: ...}} directive.
export default function ChordShapes({ items, instruments }) {
  return (
    <div className="mt-4 space-y-4">
      {items.map((item, position) => (
        <ChordFigure key={`${position}-${item.name}`} name={item.name} instruments={instruments} />
      ))}
    </div>
  );
}

// Pitch-class highlights for {{scale: ...}} and {{notes: ...}} directives: every octave of the
// pitch classes lights up on the keyboard and every matching fret on the fretboard.
export function PitchShapes({ label, pcs, instruments }) {
  const set = new Set(pcs);
  const midis = [];
  for (let midi = LOW_MIDI; midi <= HIGH_MIDI; midi += 1) {
    if (set.has(midi % 12)) midis.push(midi);
  }
  const positions = [];
  for (let string = 0; string < 6; string += 1) {
    for (let fret = 0; fret <= 12; fret += 1) {
      const note = getNoteAtStringFret(string, fret);
      if (set.has(noteToMidi(note) % 12)) positions.push({ string, fret, note });
    }
  }
  return (
    <figure className="glass-inset p-3">
      <figcaption className="mb-2 text-sm font-semibold text-white">
        {label}
        <span className="ml-2 text-xs font-normal text-slate-400">
          {pcs.map(noteLabel).join(' ')}
        </span>
      </figcaption>
      {instruments.includes('guitar') && (
        <div className="overflow-x-auto overscroll-x-contain">
          <Fretboard
            rootPosition={null}
            selectedNotes={positions}
            answerState="idle"
            onToggle={noop}
            revealNames={false}
            boxPositions={[]}
            validPositions={[]}
            highlightedPosition={null}
            requiredString="any"
            requiredStrings={[]}
            scalePitchClasses={[]}
            displayScaleDegrees={false}
            scaleType="major"
            showFretNumbers
          />
        </div>
      )}
      {instruments.includes('piano') && (
        <div className="mt-3">
          <PianoKeyboard
            highlightedKeys={new Set(midis.map(String))}
            selectedKeys={new Set()}
            missedKeys={new Set()}
            answerState="idle"
            onToggle={noop}
            revealNames={false}
            focusMidi={null}
            resetKey={label}
          />
        </div>
      )}
    </figure>
  );
}
