import { useState } from 'react';
import {
  evaluateTrumpetConfiguration,
  calculateTrumpetPitch,
  formatTrumpetNote,
  formatTrumpetConfiguration,
  getBestTrumpetConfiguration,
  getRandomTrumpetTarget,
  getTrumpetQuestionText,
  getWrittenBbTrumpetMidi,
  MAX_TRUMPET_PARTIAL,
  PUMP_LEVELS,
  TRUMPET_HIGH_MIDI,
  TRUMPET_LOW_MIDI,
} from '../utils/trumpetTheory';

// Player's view: valve 1, valve 2, and valve 3 from left to right.
const VALVES = [1, 2, 3];
const BLACK_PITCH_CLASSES = new Set([1, 3, 6, 8, 10]);

function PianoKeyboard({ targetMidi, producedMidi, showProducedNote, bbNotation, result }) {
  const notationOffset = bbNotation ? 2 : 0;
  const firstMidi = TRUMPET_LOW_MIDI + notationOffset - 1;
  const lastMidi = TRUMPET_HIGH_MIDI + notationOffset + 1;
  const midiNotes = Array.from({ length: lastMidi - firstMidi + 1 }, (_, index) => firstMidi + index);
  const whiteNotes = midiNotes.filter((midi) => !BLACK_PITCH_CLASSES.has(midi % 12));
  const targetDisplayMidi = targetMidi + notationOffset;
  const targetIsInRange = targetDisplayMidi >= firstMidi && targetDisplayMidi <= lastMidi;

  const getPitchPosition = (midi) => {
    const lowerWhiteIndex = whiteNotes.reduce((index, whiteMidi, whiteIndex) =>
      whiteMidi <= midi ? whiteIndex : index, 0);
    const lowerMidi = whiteNotes[lowerWhiteIndex];
    const upperMidi = whiteNotes[lowerWhiteIndex + 1] ?? lowerMidi;
    const fraction = upperMidi === lowerMidi ? 0 : (midi - lowerMidi) / (upperMidi - lowerMidi);
    return Math.max(4, Math.min(whiteNotes.length * 32 - 4, (lowerWhiteIndex + fraction) * 32 + 16));
  };

  return (
    <div className="mb-5 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/70 p-3">
      <div className="relative mx-auto h-28 min-w-fit" style={{ width: `${whiteNotes.length * 32}px` }}>
        <div className="absolute inset-x-0 bottom-0 flex h-24">
          {whiteNotes.map((midi) => (
            <div
              key={midi}
              className={[
                'relative h-full w-8 shrink-0 border-r border-slate-500/70 bg-slate-100',
                midi === targetDisplayMidi && targetIsInRange
                  ? 'z-[2] border-2 border-emerald-200 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]'
                  : '',
              ].join(' ')}
            >
              {midi % 12 === 0 && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-slate-600">C{Math.floor(midi / 12) - 1}</span>
              )}
            </div>
          ))}
        </div>
        {midiNotes.filter((midi) => BLACK_PITCH_CLASSES.has(midi % 12)).map((midi) => {
          const whiteIndex = whiteNotes.filter((whiteMidi) => whiteMidi < midi).length;
          return (
            <div
              key={midi}
              className={[
                'absolute top-0 z-10 h-16 w-5 -translate-x-1/2 rounded-b border border-slate-950 bg-slate-900',
                midi === targetDisplayMidi
                  ? 'z-20 border-2 border-emerald-200 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]'
                  : '',
              ].join(' ')}
              style={{ left: `${whiteIndex * 32}px` }}
            />
          );
        })}
        {showProducedNote && (
          <span
            className={[
              'absolute bottom-[-3px] z-20 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-950',
              'transition-[left] duration-300 ease-out',
              result ? result.quality === 'wrong' ? 'bg-red-400' : 'bg-amber-300' : 'bg-cyan-300',
            ].join(' ')}
            style={{ left: `${getPitchPosition(producedMidi)}px` }}
            title="Produced pitch"
          />
        )}
      </div>
    </div>
  );
}
const VALVE_SEMITONES = { 1: -2, 2: -1, 3: -3 };

function createQuestion(previousMidi = null, previousOffset = null, bbNotation = false) {
  const useOffsetQuestion = previousMidi !== null && Math.random() < 0.5;
  const requestedOffset = useOffsetQuestion
    ? (previousOffset ?? (Math.floor(Math.random() * 15) - 7))
    : null;
  const targetMidi = getRandomTrumpetTarget(previousMidi, requestedOffset);
  const offset = useOffsetQuestion ? targetMidi - previousMidi : null;
  return {
    targetMidi,
    previousMidi,
    offset,
    prompt: getTrumpetQuestionText(targetMidi, bbNotation),
  };
}

function RegisterGraph({ valves, pump1, pump3, partial, bbNotation, producedPreview, scale, onScaleChange }) {
  const width = 900;
  const height = 620;
  const pad = { left: 156, right: 24, top: 24, bottom: 52 };
  const minMidi = TRUMPET_LOW_MIDI;
  const maxMidi = calculateTrumpetPitch({
    partial: MAX_TRUMPET_PARTIAL,
    valves: [],
    pump1: 0,
    pump3: 0,
  }).nearestMidi;
  const keyboardWidth = 128;
  const keyHeight = (height - pad.top - pad.bottom) / (maxMidi - minMidi + 1);
  const x = (value) => pad.left + ((value - 1) / (MAX_TRUMPET_PARTIAL - 1)) * (width - pad.left - pad.right);
  const centsMin = -50;
  const centsMax = 50;
  const y = (value) => scale === 'keyboard'
    ? pad.top + (maxMidi + 0.5 - value) * keyHeight
    : pad.top + (1 - (value - centsMin) / (centsMax - centsMin)) * (height - pad.top - pad.bottom);
  const points = Array.from({ length: MAX_TRUMPET_PARTIAL }, (_, index) => {
    const registerPartial = index + 1;
    return { partial: registerPartial, ...calculateTrumpetPitch({ partial: registerPartial, valves, pump1, pump3 }) };
  });
  const currentMidi = producedPreview.exactMidi;
  const keyboardNotes = Array.from({ length: maxMidi - minMidi + 1 }, (_, index) => maxMidi - index);
  const isBlackKey = (midi) => BLACK_PITCH_CLASSES.has(midi % 12);
  const yAxisTicks = scale === 'keyboard'
    ? keyboardNotes
    : [-50, -25, 0, 25, 50];
  const getPointLabel = (point) => formatTrumpetNote(
    bbNotation ? point.nearestMidi + 2 : point.nearestMidi,
  );
  const motionStyle = {
    transition: 'cy 350ms ease, y 350ms ease, y1 350ms ease, y2 350ms ease',
  };

  return (
    <section className="rounded-2xl border border-cyan-700/60 bg-slate-900/85 p-5 shadow-xl">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Trumpet · Register graph</p>
        <div className="flex flex-wrap items-center justify-end">
          <button
            type="button"
            onClick={() => onScaleChange(scale === 'keyboard' ? 'cents' : 'keyboard')}
            aria-pressed={scale === 'cents'}
            className="rounded-lg border border-cyan-300/50 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
          >
            Y axis: {scale === 'keyboard' ? 'keyboard' : 'cents'}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="mx-auto min-w-[620px] w-full" role="img" aria-label="Trumpet register graph">
          <rect x={pad.left} y={pad.top} width={width - pad.left - pad.right} height={height - pad.top - pad.bottom} fill="rgba(15,23,42,.7)" rx="12" />
          {scale === 'keyboard' ? (
            <g aria-label="Chromatic keyboard">
              {keyboardNotes.map((midi) => {
              const top = pad.top + (maxMidi - midi) * keyHeight;
              const blackKey = isBlackKey(midi);
              return (
                <g key={midi}>
                  <rect
                    x={pad.left - keyboardWidth}
                    y={top}
                    width={blackKey ? keyboardWidth * 0.64 : keyboardWidth}
                    height={keyHeight}
                    fill={blackKey ? '#1e293b' : '#f8fafc'}
                    stroke="#64748b"
                    strokeWidth="0.6"
                  />
                  <text
                    x={pad.left - keyboardWidth + (blackKey ? keyboardWidth * 0.64 : keyboardWidth) - 5}
                    y={top + keyHeight * 0.72}
                    textAnchor="end"
                    fill={blackKey ? '#e2e8f0' : '#334155'}
                    fontSize="9"
                  >
                    {formatTrumpetNote(midi)}
                  </text>
                </g>
              );
              })}
            </g>
          ) : (
            <g aria-label="Cents deviation axis">
              {yAxisTicks.map((tick) => (
                <g key={tick}>
                  <line
                    x1={pad.left}
                    x2={width - pad.right}
                    y1={y(tick)}
                    y2={y(tick)}
                    stroke={tick === 0 ? '#f8fafc' : 'rgba(148,163,184,.3)'}
                    strokeWidth={tick === 0 ? 2 : 1}
                  />
                  <text x={pad.left - 12} y={y(tick) + 4} textAnchor="end" fill="#cbd5e1" fontSize="12">
                    {tick > 0 ? `+${tick}` : tick}¢
                  </text>
                </g>
              ))}
            </g>
          )}
          {scale === 'keyboard' && points.map((point) => (
            <line
              key={`guide-${point.partial}`}
              x1={pad.left}
              x2={width - pad.right}
              y1={y(point.exactMidi)}
              y2={y(point.exactMidi)}
              stroke={point.partial === partial ? '#67e8f9' : '#22d3ee'}
              strokeWidth={point.partial === partial ? 2 : 1.5}
              strokeOpacity={point.partial === partial ? 0.8 : 0.25}
              style={motionStyle}
            />
          ))}
          {points.map((point) => (
            <g key={point.partial}>
              <circle
                cx={x(point.partial)}
                cy={y(scale === 'keyboard' ? point.exactMidi : point.centsFromTarget)}
                r={point.partial === partial ? 11 : 8}
                fill={point.partial === partial ? '#67e8f9' : '#22d3ee'} fillOpacity={point.partial === partial ? 1 : 0.34}
                stroke={point.partial === partial ? '#ecfeff' : 'none'} strokeWidth="2"
                style={motionStyle}
              />
              <text
                x={x(point.partial)}
                y={Math.max(pad.top + 12, y(scale === 'keyboard' ? point.exactMidi : point.centsFromTarget) - 15)}
                textAnchor="middle"
                fill={point.partial === partial ? '#ecfeff' : '#a5f3fc'}
                fontSize="11"
                style={motionStyle}
              >
                {getPointLabel(point)}
              </text>
              <text x={x(point.partial)} y={height - pad.bottom + 25} textAnchor="middle" fill="#cbd5e1" fontSize="13">
                {point.partial}
              </text>
            </g>
          ))}
          <line
            x1={x(partial)}
            x2={x(partial)}
            y1={y(scale === 'keyboard' ? currentMidi : producedPreview.centsFromTarget)}
            y2={height - pad.bottom}
            stroke="#67e8f9"
            strokeDasharray="4 4"
            opacity=".7"
            style={motionStyle}
          />
        </svg>
      </div>
      <div className="flex justify-between px-2 text-xs uppercase tracking-wider text-slate-400">
        <span>{scale === 'keyboard' ? 'Keyboard pitch range' : 'Distance from closest note (cents)'}</span><span>Partial / register</span>
      </div>
    </section>
  );
}

function TrumpetTrainer({ mode = 'Register & Intonation' }) {
  const [bbNotation, setBbNotation] = useState(false);
  const [question, setQuestion] = useState(() => createQuestion());
  const [partial, setPartial] = useState(1);
  const [valves, setValves] = useState([]);
  const [pump1, setPump1] = useState(0);
  const [pump3, setPump3] = useState(0);
  const [graphScale, setGraphScale] = useState('keyboard');
  const [result, setResult] = useState(null);
  const [showProducedNote, setShowProducedNote] = useState(false);

  const producedPreview = calculateTrumpetPitch({ partial, valves, pump1, pump3 });
  const graphMode = mode === 'Register Graph';
  const producedDisplayNote = formatTrumpetNote(
    bbNotation ? getWrittenBbTrumpetMidi(producedPreview.nearestMidi) : producedPreview.nearestMidi,
  );
  const notationLabel = bbNotation ? 'written for Bb trumpet' : 'concert pitch';
  const getPartialShift = (nextPartial) => {
    const exactSemitones = 12 * Math.log2(nextPartial / partial);
    return `${exactSemitones >= 0 ? '+' : ''}${exactSemitones.toFixed(2)}`;
  };

  const newQuestion = () => {
    setQuestion(createQuestion(question.targetMidi, null, bbNotation));
    setResult(null);
    setPartial(1);
    setValves([]);
    setPump1(0);
    setPump3(0);
  };

  const toggleValve = (valve) => {
    setValves((current) => current.includes(valve)
      ? current.filter((item) => item !== valve)
      : [...current, valve].sort((a, b) => a - b));
  };

  const submit = () => {
    const evaluation = evaluateTrumpetConfiguration({ partial, valves, pump1, pump3 }, question.targetMidi);
    setResult({
      ...evaluation,
      possibleSolution: getBestTrumpetConfiguration(question.targetMidi),
    });
    setShowProducedNote(true);
  };

  return (
    <div className="space-y-6">
      {graphMode ? (
        <RegisterGraph
          valves={valves}
          pump1={pump1}
          pump3={pump3}
          partial={partial}
          bbNotation={bbNotation}
          producedPreview={producedPreview}
          scale={graphScale}
          onScaleChange={setGraphScale}
        />
      ) : <section className="rounded-2xl border border-amber-700/50 bg-slate-900/80 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Trumpet · Intonation</p>
          <PianoKeyboard
            targetMidi={question.targetMidi}
            producedMidi={producedPreview.exactMidi + (bbNotation ? 2 : 0)}
            showProducedNote={showProducedNote}
            bbNotation={bbNotation}
            result={result}
          />
        </div>
      </section>}

      <section className="rounded-2xl border border-amber-900/70 bg-gradient-to-br from-[#4a2a18] to-[#17100c] p-5 shadow-2xl">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr_0.8fr] md:items-center">
          <label className="flex flex-col gap-3 rounded-2xl border border-amber-200/20 bg-black/20 p-4">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-200">Partial</span>
            <input
              type="range"
              min="1"
              max={MAX_TRUMPET_PARTIAL}
              value={partial}
              onChange={(event) => setPartial(Number(event.target.value))}
              className="accent-amber-300"
            />
            <div className="flex items-center justify-center gap-4">
              <div className="flex w-16 flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => setPartial((current) => Math.max(1, current - 1))}
                  disabled={partial === 1}
                  aria-label="Decrease partial"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </button>
                <span className="text-center text-xs text-amber-100/70">
                  {partial > 1 ? getPartialShift(partial - 1) : '—'}
                </span>
              </div>
              <span className="min-w-12 text-center text-3xl font-bold text-white">{partial}</span>
              <div className="flex w-16 flex-col items-center gap-1">
                <button
                  type="button"
                  onClick={() => setPartial((current) => Math.min(MAX_TRUMPET_PARTIAL, current + 1))}
                  disabled={partial === MAX_TRUMPET_PARTIAL}
                  aria-label="Increase partial"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
                    <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                </button>
                <span className="text-center text-xs text-amber-100/70">
                  {partial < MAX_TRUMPET_PARTIAL ? getPartialShift(partial + 1) : '—'}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setBbNotation((current) => !current)}
              aria-pressed={bbNotation}
              className="mt-4 w-full min-w-44 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:border-slate-400"
            >
              Intonation: {bbNotation ? 'trumpet' : 'real'}
            </button>
          </label>

          <div className="rounded-2xl border border-amber-200/20 bg-black/20 p-4">
            <div className="mb-5 flex items-center justify-center gap-6">
              <p className="text-center text-4xl font-bold text-white">
                {graphMode
                  ? `${producedDisplayNote} ${producedPreview.centsFromTarget >= 0 ? '+' : ''}${producedPreview.centsFromTarget.toFixed(1)} cents`
                  : getTrumpetQuestionText(question.targetMidi, bbNotation)}
              </p>
              {(showProducedNote && !graphMode) && (
                <p className={[
                  'text-center text-4xl font-bold',
                  result
                    ? result.quality === 'wrong' ? 'text-red-300' : 'text-amber-300'
                    : 'text-cyan-200',
                ].join(' ')}>
                  {producedDisplayNote}{' '}
                  {producedPreview.centsFromTarget >= 0 ? '+' : ''}
                  {producedPreview.centsFromTarget.toFixed(1)}
                </p>
              )}
            </div>
            <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-amber-200">Valves</p>
            <div className="flex justify-center gap-3">
              {VALVES.map((valve) => (
                <button
                  key={valve}
                  type="button"
                  onClick={() => toggleValve(valve)}
                  className={[
                    'flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 font-bold transition',
                    valves.includes(valve)
                      ? 'border-amber-200 bg-amber-300 text-amber-950 shadow-[0_0_24px_rgba(252,211,77,0.45)]'
                      : 'border-slate-400 bg-slate-800 text-slate-100 hover:border-amber-200',
                  ].join(' ')}
                >
                  <span className="text-2xl">{valve}</span>
                  <span className="text-[10px] uppercase">{VALVE_SEMITONES[valve]} st</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-amber-200/20 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Tuning slides</p>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              1st slide: {pump1}%
              <input type="range" min="0" max="4" step="1" value={PUMP_LEVELS.indexOf(pump1)} onChange={(event) => setPump1(PUMP_LEVELS[Number(event.target.value)])} className="accent-amber-300" />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-200">
              3rd slide: {pump3}%
              <input type="range" min="0" max="4" step="1" value={PUMP_LEVELS.indexOf(pump3)} onChange={(event) => setPump3(PUMP_LEVELS[Number(event.target.value)])} className="accent-amber-300" />
            </label>
            {!graphMode && <button
              type="button"
              onClick={() => setShowProducedNote((current) => !current)}
              aria-pressed={showProducedNote}
              className="w-full min-w-44 rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              {showProducedNote ? 'Hide note' : 'Show note'}
            </button>}
          </div>
        </div>
      </section>

      {!graphMode && <section>
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-5">
          {result?.possibleSolution && (
            <p className="rounded-xl bg-amber-500/10 px-4 py-3 text-center text-sm text-amber-200">
              Possible: {formatTrumpetConfiguration(result.possibleSolution.configuration)}
              {' '}· {result.possibleSolution.distanceCents.toFixed(1)} cents
            </p>
          )}
          <button type="button" onClick={submit} className="rounded-xl border border-emerald-500/60 bg-emerald-500/15 px-4 py-2.5 font-semibold text-emerald-200 hover:bg-emerald-500/25">
            Submit
          </button>
          <button type="button" onClick={newQuestion} className="rounded-xl bg-amber-300 px-4 py-2.5 font-semibold text-amber-950 hover:bg-amber-200">
            New Question
          </button>
          {result && (
            <p className={[
              'rounded-xl px-4 py-3 text-sm',
              result.quality === 'wrong' ? 'bg-red-500/15 text-red-200' : result.quality === 'optimal' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-yellow-500/15 text-yellow-200',
            ].join(' ')}>
              <span className="block">
                {formatTrumpetNote(
                  bbNotation ? getWrittenBbTrumpetMidi(result.nearestMidi) : result.nearestMidi,
                )} · {result.distanceCents.toFixed(1)} cents from target · {notationLabel}
              </span>
            </p>
          )}
        </div>
      </section>}

    </div>
  );
}

export default TrumpetTrainer;
