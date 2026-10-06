import { useMemo, useRef, useState } from 'react';
import { getNoteAtStringFret, getPitchClass, STRING_TUNINGS } from '../utils/musicTheory';

const FRET_COUNT = 15;
const SINGLE_INLAYS = [3, 5, 7, 9, 15];
const DOUBLE_INLAYS = [12];

const LABEL_W = 40; // string names
const OPEN_W = 48; // open-string column (left of the nut)
const NUT_W = 10;
const ROW_H = 44;

// Real fret spacing: each fret is ~5.6% narrower than the previous one.
const FRET_WEIGHTS = Array.from({ length: FRET_COUNT }, (_, i) => 2 ** (-i / 12) - 2 ** (-(i + 1) / 12));
const FRET_COLUMNS = FRET_WEIGHTS.map((w) => `minmax(0, ${(w * 100).toFixed(3)}fr)`).join(' ');
const GRID_TEMPLATE = `${LABEL_W}px ${OPEN_W}px ${NUT_W}px ${FRET_COLUMNS}`;
const BOARD_LEFT = LABEL_W + OPEN_W + NUT_W;

// Index 0 = high E ... 5 = low E
const STRING_LOOKS = [
  { px: 1, wound: false },
  { px: 1.5, wound: false },
  { px: 2, wound: false },
  { px: 2.5, wound: true },
  { px: 3.2, wound: true },
  { px: 4, wound: true },
];

const STRING_NAMES = STRING_TUNINGS.map((tuning, i) => {
  const name = tuning.replace(/-?\d+$/, '');
  return i === 0 ? name.toLowerCase() : name;
});

const woodStyle = {
  backgroundColor: '#4a2a18',
  backgroundImage: [
    'repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 6px)',
    'repeating-linear-gradient(0deg, rgba(255,210,160,0.05) 0 2px, transparent 2px 11px)',
    'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 86%, rgba(0,0,0,0.35) 100%)',
  ].join(','),
  boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
};

const fretWireStyle = {
  boxShadow: 'inset -2px 0 0 #d4d4d8, inset -3px 0 0 rgba(0,0,0,0.45)',
};

const nutStyle = {
  background: 'linear-gradient(90deg, #cfc2a3, #f4eedd 45%, #cfc2a3)',
  boxShadow: '2px 0 4px rgba(0,0,0,0.55)',
};

const inlayStyle = {
  background: 'radial-gradient(circle at 30% 30%, #ffffff, #ddd5c3 55%, #a99f88)',
  opacity: 0.85,
  boxShadow: '0 1px 2px rgba(0,0,0,0.5)',
};

function stringStyle({ px, wound }) {
  return {
    top: `calc(50% - ${px / 2}px)`,
    height: `${px}px`,
    left: LABEL_W,
    background: wound
      ? 'repeating-linear-gradient(90deg, #d2b27a 0 2px, #8c6a34 2px 3px)'
      : 'linear-gradient(180deg, #f8fafc, #94a3b8)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.65)',
  };
}

const MARKER_STYLES = {
  box: 'bg-cyan-300/30 ring-2 ring-cyan-200/70',
  root: 'bg-cyan-400 text-slate-950 ring-2 ring-cyan-100',
  selected: 'bg-emerald-300 text-slate-950',
  correct: 'bg-yellow-300 text-slate-950',
  wrong: 'bg-red-400 text-slate-950',
  missed: 'border-2 border-dashed border-yellow-300 bg-yellow-300/15 text-yellow-100',
  highlighted: 'bg-amber-300 text-slate-950 ring-2 ring-amber-100',
  allSelected: 'bg-amber-100/30 ring-1 ring-amber-100/40',
  dragPreview: 'bg-cyan-100/25 ring-2 ring-cyan-100/70',
  scale: 'bg-sky-300/20 ring-1 ring-sky-200/30',
};

function Fretboard({
  rootPosition,
  selectedNotes = [],
  answerState,
  onToggle,
  revealNames,
  boxPositions = [],
  requiredString = 'any',
  requiredStrings = [],
  validPositions = [],
  highlightedPosition = null,
  showAllSelectedNotes = false,
  showScaleNotes = false,
  scalePitchClasses = [],
  onDragTranspose,
  getExplorerDragPreview,
  displayScaleDegrees = false,
  scaleRoot = null,
  scaleType = 'major',
}) {
  const dragStartRef = useRef(null);
  const suppressClickRef = useRef(false);
  const [dragPreview, setDragPreview] = useState(null);
  const { selectedKeys, validKeys, boxKeys, rootKey, highlightedKey, selectedPitchClasses } = useMemo(() => {
    const toKey = (p) => `${p.string}-${p.fret}`;
    return {
      selectedKeys: new Set(selectedNotes.map(toKey)),
      validKeys: new Set(validPositions.map(toKey)),
      boxKeys: new Set(boxPositions.map(toKey)),
      rootKey: rootPosition ? toKey(rootPosition) : null,
      highlightedKey: highlightedPosition ? toKey(highlightedPosition) : null,
      selectedPitchClasses: new Set(selectedNotes.map((position) => getPitchClass(position.note))),
    };
  }, [selectedNotes, validPositions, boxPositions, rootPosition, highlightedPosition]);

  const submitted = answerState === 'submitted';
  const scaleDegreeLabels = scaleType === 'minor'
    ? ['1', '2', 'b3', '4', '5', 'b6', 'b7']
    : ['1', '2', '3', '4', '5', '6', '7'];
  const chromaticDegreeLabels = ['1', 'b2', '2', 'b3', '3', '4', 'b5', '5', 'b6', '6', 'b7', '7'];
  const getDisplayLabel = (note) => {
    if (!displayScaleDegrees || !scaleRoot) return note.replace(/-?\d+$/, '');
    const interval = (getPitchClass(note) - getPitchClass(scaleRoot) + 12) % 12;
    const scaleIntervals = scaleType === 'minor' ? [0, 2, 3, 5, 7, 8, 10] : [0, 2, 4, 5, 7, 9, 11];
    const scaleIndex = scaleIntervals.indexOf(interval);
    return scaleIndex >= 0 ? scaleDegreeLabels[scaleIndex] : chromaticDegreeLabels[interval];
  };
  const previewKeys = useMemo(() => {
    if (!dragPreview || !getExplorerDragPreview) return new Set();
    const preview = getExplorerDragPreview(dragPreview.start, dragPreview.target);
    return new Set((preview ?? []).map((position) => `${position.string}-${position.fret}`));
  }, [dragPreview, getExplorerDragPreview]);

  function getMarker(key, note) {
    const isSelected = selectedKeys.has(key);
    const isValid = validKeys.has(key);
    if (submitted && isSelected) return isValid ? 'correct' : 'wrong';
    if (isSelected) return 'selected';
    if (previewKeys.has(key)) return 'dragPreview';
    if (showAllSelectedNotes && selectedPitchClasses.has(getPitchClass(note))) return 'allSelected';
    if (showScaleNotes && scalePitchClasses.includes(getPitchClass(note))) return 'scale';
    if (submitted && isValid) return 'missed'; // targets the player did not find
    if (key === highlightedKey) return 'highlighted';
    if (key === rootKey) return 'root';
    if (boxKeys.has(key)) return 'box';
    return null;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-black/40">
      <div className="min-w-[820px]">
        <div className="relative overflow-hidden rounded-md border border-black/70" style={woodStyle}>
          {/* Inlays sit behind the strings, centred between frets */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 grid"
            style={{ left: BOARD_LEFT, gridTemplateColumns: FRET_COLUMNS }}
            aria-hidden="true"
          >
            {Array.from({ length: FRET_COUNT }, (_, i) => {
              const fret = i + 1;
              const isSingle = SINGLE_INLAYS.includes(fret);
              const isDouble = DOUBLE_INLAYS.includes(fret);
              return (
                <div key={`inlay-${fret}`} className="relative">
                  {isSingle && (
                    <span
                      className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={inlayStyle}
                    />
                  )}
                  {isDouble &&
                    ['33.33%', '66.67%'].map((top) => (
                      <span
                        key={top}
                        className="absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ ...inlayStyle, top }}
                      />
                    ))}
                </div>
              );
            })}
          </div>

          {STRING_TUNINGS.map((_, stringIndex) => {
            const isFocus = requiredStrings.length > 0
              ? requiredStrings.includes(stringIndex)
              : requiredString !== 'any' && String(stringIndex + 1) === String(requiredString);

            return (
              <div
                key={`string-${stringIndex}`}
                className={['relative grid', isFocus ? 'bg-cyan-200/10' : ''].join(' ')}
                style={{ gridTemplateColumns: GRID_TEMPLATE, height: ROW_H }}
              >
                <div
                  className={[
                    'flex items-center justify-center bg-[#2a170d] text-sm font-semibold',
                    isFocus ? 'text-cyan-200' : 'text-amber-100/80',
                  ].join(' ')}
                  title={`String ${stringIndex + 1}`}
                >
                  {revealNames ? STRING_NAMES[stringIndex] : ''}
                </div>

                {Array.from({ length: FRET_COUNT + 1 }, (_, fret) => {
                  const key = `${stringIndex}-${fret}`;
                  const isRoot = key === rootKey;
                  const note = getNoteAtStringFret(stringIndex, fret);
                  const marker = getMarker(key, note);
                  const showName = revealNames && marker && marker !== 'box';
                  const isOpen = fret === 0;

                  const cell = (
                    <button
                      key={key}
                      type="button"
                      onPointerDown={() => {
                        if (onDragTranspose && selectedKeys.has(key)) {
                          dragStartRef.current = { string: stringIndex, fret };
                          setDragPreview({
                            start: { string: stringIndex, fret },
                            target: { string: stringIndex, fret },
                          });
                        }
                      }}
                      onPointerEnter={() => {
                        if (!onDragTranspose || !dragStartRef.current) return;
                        const start = dragStartRef.current;
                        setDragPreview({
                          start,
                          target: { string: stringIndex, fret },
                        });
                      }}
                      onPointerUp={() => {
                        if (!onDragTranspose || !dragStartRef.current) return;
                        const start = dragStartRef.current;
                        dragStartRef.current = null;
                        setDragPreview(null);
                        if (start.string !== stringIndex || start.fret !== fret) {
                          suppressClickRef.current = true;
                          onDragTranspose(start, { string: stringIndex, fret });
                        }
                      }}
                      onPointerLeave={() => {
                        if (dragStartRef.current) setDragPreview(null);
                      }}
                      onClick={() => {
                        if (suppressClickRef.current) {
                          suppressClickRef.current = false;
                          return;
                        }
                        onToggle(stringIndex, fret);
                      }}
                      aria-pressed={selectedKeys.has(key)}
                      aria-label={`${note} on string ${stringIndex + 1}, ${isOpen ? 'open' : `fret ${fret}`}`}
                      className={[
                        'group relative flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300',
                        isOpen ? 'bg-[#2a170d]' : '',
                      ].join(' ')}
                      style={isOpen ? undefined : fretWireStyle}
                    >
                      <span className="pointer-events-none absolute z-20 h-6 w-6 rounded-full bg-white/0 transition-colors group-hover:bg-white/20" />
                      {marker && (
                        <span
                          className={[
                            'pointer-events-none absolute z-20 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shadow-md shadow-black/50',
                            MARKER_STYLES[marker],
                            boxKeys.has(key) && marker !== 'box' ? 'ring-2 ring-cyan-200/70' : '',
                            isRoot && marker !== 'root' && marker !== 'box'
                              ? 'ring-2 ring-cyan-300 ring-offset-1 ring-offset-black/50'
                              : '',
                          ].join(' ')}
                        >
                          {showName ? getDisplayLabel(note) : ''}
                        </span>
                      )}
                    </button>
                  );

                  // The nut sits between the open-string column and fret 1
                  return fret === 1 ? (
                    <NutThen key={key}>{cell}</NutThen>
                  ) : (
                    cell
                  );
                })}

                {/* the string itself: continuous, never intercepts clicks */}
                <span
                  className="pointer-events-none absolute right-0 z-10"
                  style={stringStyle(STRING_LOOKS[stringIndex])}
                />
              </div>
            );
          })}
        </div>

        {/* Fret numbers */}
        <div className="mt-1.5 grid text-xs text-slate-500" style={{ gridTemplateColumns: GRID_TEMPLATE }} aria-hidden="true">
          <span />
          <span className="text-center">open</span>
          <span />
          {Array.from({ length: FRET_COUNT }, (_, i) => {
            const fret = i + 1;
            const isInlay = SINGLE_INLAYS.includes(fret) || DOUBLE_INLAYS.includes(fret);
            return (
              <span key={`fret-num-${fret}`} className={['text-center', isInlay ? 'font-semibold text-slate-300' : ''].join(' ')}>
                {fret}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Renders the nut element followed by the fret-1 cell (keeps the grid columns aligned).
function NutThen({ children }) {
  return (
    <>
      <div style={nutStyle} aria-hidden="true" />
      {children}
    </>
  );
}

export default Fretboard;
