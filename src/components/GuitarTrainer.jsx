import Fretboard from './Fretboard';

const IDENTIFY_EXERCISES = ['identify-degree', 'identify-fundamental'];

function DegreeSelector({ question, selectedDegree, answerState, onSelect }) {
  if (!IDENTIFY_EXERCISES.includes(question.pentatonicExercise)) return null;
  const degrees = question.pentatonicScaleType === 'major'
    ? ['tonic', '2nd', '3rd', '5th', '6th']
    : ['tonic', 'minor 3rd', '4th', '5th', 'minor 7th'];

  return (
    <div className="mb-3 rounded-xl border border-cyan-400/30 bg-cyan-500/5 p-3">
      <div className="grid grid-cols-5 gap-1">
        {degrees.map((degree) => (
          <button key={degree} type="button" onClick={() => onSelect(degree)}
            className={[
              'rounded-lg border px-1 py-2 text-xs transition',
              answerState === 'submitted' && selectedDegree === degree && selectedDegree === question.pentatonicAnswer
                ? 'border-yellow-200 bg-yellow-300 text-slate-950'
                : answerState === 'submitted' && selectedDegree === degree
                  ? 'border-red-200 bg-red-400 text-slate-950'
                  : selectedDegree === degree
                    ? 'border-cyan-300 bg-cyan-400/20 text-cyan-100'
                    : 'border-slate-600 bg-slate-800 text-slate-200 hover:border-slate-400',
            ].join(' ')}
            aria-pressed={selectedDegree === degree}>
            {degree}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GuitarTrainer({
  mode, question, selectedNotes, answerState, answerMessage, revealNames, audioEnabled, selectedDegree,
  guessAnswer, onGuessAnswerChange,   onToggleNote, onToggleReveal, onToggleAudio, onSelectDegree, onSubmit, onNewQuestion, onNewScale,
  explorerScaleLocked, onExplorerScaleLock, explorerScaleType, onExplorerScaleTypeChange,
  explorerScaleRoot, onExplorerScaleRootChange, explorerShift, onExplorerShiftChange,
  onExplorerShiftApply, explorerShowAll, onExplorerShowAll, explorerShowScale, onExplorerShowScale,
  explorerScalePitchClasses, onExplorerDrag, getExplorerDragPreview,
  displayScaleDegrees, onToggleDisplayScaleDegrees, displayScaleRoot, displayScaleType,
}) {
  const isExplorer = mode === 'Fretboard Explorer';
  return (
    <main className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <section className="space-y-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-center">
          <p className="text-lg font-medium text-white">{question.prompt}</p>
          {answerMessage && (
            <p className="mt-2 text-sm text-cyan-200">{answerMessage}</p>
          )}
        </div>
        <Fretboard
          rootPosition={question.rootPosition} selectedNotes={selectedNotes} answerState={answerState}
          onToggle={onToggleNote} revealNames={revealNames} boxPositions={question.boxPositions}
          requiredString={question.requiredString} requiredStrings={question.requiredStrings}
          validPositions={question.validPositions} highlightedPosition={question.highlightedPosition}
          showAllSelectedNotes={isExplorer && explorerShowAll}
          showScaleNotes={isExplorer && explorerShowScale}
          scalePitchClasses={explorerScalePitchClasses}
          onDragTranspose={isExplorer ? onExplorerDrag : null}
          getExplorerDragPreview={isExplorer ? getExplorerDragPreview : null}
          displayScaleDegrees={displayScaleDegrees}
          scaleRoot={displayScaleRoot}
          scaleType={displayScaleType}
        />
        {isExplorer && (
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
            <button type="button" onClick={onExplorerScaleLock} aria-pressed={explorerScaleLocked}
              className="rounded-xl border border-violet-400/70 bg-violet-500/15 px-3 py-2 text-sm font-semibold text-violet-200">
              Scale lock: {explorerScaleLocked ? 'ON' : 'OFF'}
            </button>
            <select value={explorerScaleType} onChange={(event) => onExplorerScaleTypeChange(event.target.value)}
              disabled={!explorerScaleLocked} aria-label="Scale type"
              className="rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100">
              <option value="major">Major</option>
              <option value="minor">Minor</option>
            </select>
            <select value={explorerScaleRoot} onChange={(event) => onExplorerScaleRootChange(event.target.value)}
              disabled={!explorerScaleLocked} aria-label="Scale root"
              className="rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100">
              {['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].map((note) => (
                <option key={note} value={note}>{note}</option>
              ))}
            </select>
            <input type="number" value={explorerShift} onChange={(event) => onExplorerShiftChange(event.target.value)}
              placeholder="Shift" aria-label="Semitone or scale-step shift"
              className="w-24 rounded-xl border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400" />
            <button type="button" onClick={onExplorerShiftApply}
              className="rounded-xl border border-cyan-400/70 bg-cyan-500/15 px-3 py-2 text-sm font-semibold text-cyan-200">
              Apply shift
            </button>
            <button type="button" onClick={onExplorerShowAll} aria-pressed={explorerShowAll}
              className="rounded-xl border border-amber-300/70 bg-amber-300/15 px-3 py-2 text-sm font-semibold text-amber-200">
              All matching notes: {explorerShowAll ? 'ON' : 'OFF'}
            </button>
            <button type="button" onClick={onExplorerShowScale} aria-pressed={explorerShowScale}
              className="rounded-xl border border-sky-300/70 bg-sky-300/15 px-3 py-2 text-sm font-semibold text-sky-200">
              Scale notes: {explorerShowScale ? 'ON' : 'OFF'}
            </button>
          </div>
        )}
        {mode === 'Guess the Note' && (
          <input
            type="text"
            value={guessAnswer}
            onChange={(event) => onGuessAnswerChange(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Enter') onSubmit(); }}
            disabled={answerState === 'submitted'}
            placeholder="Type the note (e.g. E, C#, Db)"
            aria-label="Note answer"
            className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-center text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
          />
        )}
        <div className="flex justify-between gap-3">
          <button type="button" onClick={onToggleReveal}
            className="w-44 rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400">
            {revealNames ? 'Hide notes' : 'Reveal notes'}
          </button>
          {revealNames && (
            <button type="button" onClick={onToggleDisplayScaleDegrees} aria-pressed={displayScaleDegrees}
              className="rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-xs font-semibold text-slate-100 transition hover:border-slate-400">
              {displayScaleDegrees ? 'Show notes' : 'Show degrees'} ({displayScaleRoot} {displayScaleType === 'minor' ? 'min' : 'maj'})
            </button>
          )}
          <button type="button" onClick={onToggleAudio} aria-pressed={audioEnabled}
            className="w-44 rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400">
            Audio {audioEnabled ? 'ON' : 'OFF'}
          </button>
        </div>
      </section>
      {!isExplorer && <aside className="space-y-4">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
          <DegreeSelector question={question} selectedDegree={selectedDegree} answerState={answerState} onSelect={onSelectDegree} />
          <div className="flex flex-col gap-3">
            <button type="button" onClick={onSubmit}
              className="rounded-xl border border-emerald-500/60 bg-emerald-500/15 px-4 py-2.5 font-semibold text-emerald-200 transition hover:bg-emerald-500/25">
              Submit
            </button>
            <button type="button" onClick={onNewQuestion}
              className="rounded-xl bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400">
              New Question
            </button>
            {mode === 'Scale & Triads' && question.scaleTriadExercise === 'Highlight degree' && (
              <button type="button" onClick={onNewScale}
                className="rounded-xl border border-violet-400/60 bg-violet-500/15 px-4 py-2.5 font-semibold text-violet-200 transition hover:bg-violet-500/25">
                New Scale
              </button>
            )}
          </div>
        </div>
      </aside>}
    </main>
  );
}
