import Fretboard from './Fretboard';
import ActionBar from './ActionBar';

const IDENTIFY_EXERCISES = ['identify-degree', 'identify-fundamental'];
const ROOT_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const TOOL_BUTTON = 'rounded-xl border px-3 py-2.5 text-sm font-semibold transition';
const TOOL_SELECT = 'rounded-xl border border-slate-600 bg-slate-800 px-3 py-2.5 text-sm text-slate-100';

function DegreeSelector({ question, selectedDegree, answerState, onSelect }) {
  if (!IDENTIFY_EXERCISES.includes(question.pentatonicExercise)) return null;
  const degrees = question.pentatonicScaleType === 'major'
    ? ['tonic', '2nd', '3rd', '5th', '6th']
    : ['tonic', 'minor 3rd', '4th', '5th', 'minor 7th'];

  return (
    <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/5 p-3">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">Degree</p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {degrees.map((degree) => (
          <button key={degree} type="button" onClick={() => onSelect(degree)}
            className={[
              'rounded-lg border px-2 py-2.5 text-sm transition',
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
  mode, question, selectedNotes, answerState, answerMessage, revealNames, selectedDegree,
  guessAnswer, onGuessAnswerChange, onToggleNote, onSelectDegree, onSubmit, onNewQuestion, onNewScale,
  onClearSelection, onOpenControls,
  explorerScaleLocked, onExplorerScaleLock, explorerScaleType, onExplorerScaleTypeChange,
  explorerScaleRoot, onExplorerScaleRootChange, explorerShift, onExplorerShiftChange,
  onExplorerShiftApply, explorerShowAll, onExplorerShowAll, explorerShowScale, onExplorerShowScale,
  explorerScalePitchClasses, onExplorerDrag, getExplorerDragPreview,
  displayScaleDegrees, displayScaleRoot, displayScaleType,
}) {
  const isExplorer = mode === 'Fretboard Explorer';
  const showDegreeSelector = IDENTIFY_EXERCISES.includes(question.pentatonicExercise);
  const isHighlightDegree = mode === 'Scale & Triads' && question.scaleTriadExercise === 'Highlight degree';

  return (
    <div className="space-y-4">
      <main className={[
        'grid grid-cols-[minmax(0,1fr)] gap-4 lg:items-end',
        showDegreeSelector ? 'lg:grid-cols-[1.2fr_0.8fr]' : '',
      ].join(' ')}>
        <section className="space-y-4">
          {(question.prompt || answerMessage) && (
            <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-center">
              {question.prompt && <p className="text-lg font-medium text-white">{question.prompt}</p>}
              {answerMessage && (
                <p className="mt-2 text-sm text-cyan-200">{answerMessage}</p>
              )}
            </div>
          )}
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
            <div className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
                <button type="button" onClick={onExplorerScaleLock} aria-pressed={explorerScaleLocked}
                  className={`${TOOL_BUTTON} border-violet-400/70 bg-violet-500/15 text-violet-200`}>
                  Scale lock: {explorerScaleLocked ? 'ON' : 'OFF'}
                </button>
                <select value={explorerScaleType} onChange={(event) => onExplorerScaleTypeChange(event.target.value)}
                  aria-label="Scale type" className={TOOL_SELECT}>
                  <option value="major">Major</option>
                  <option value="minor">Minor</option>
                </select>
                <select value={explorerScaleRoot} onChange={(event) => onExplorerScaleRootChange(event.target.value)}
                  aria-label="Scale root" className={TOOL_SELECT}>
                  {ROOT_NOTES.map((note) => <option key={note} value={note}>{note}</option>)}
                </select>
                <button type="button" onClick={onExplorerShowAll} aria-pressed={explorerShowAll}
                  className={`${TOOL_BUTTON} border-amber-300/70 bg-amber-300/15 text-amber-200`}>
                  Matching notes: {explorerShowAll ? 'ON' : 'OFF'}
                </button>
                <button type="button" onClick={onExplorerShowScale} aria-pressed={explorerShowScale}
                  className={`${TOOL_BUTTON} border-sky-300/70 bg-sky-300/15 text-sky-200`}>
                  Scale notes: {explorerShowScale ? 'ON' : 'OFF'}
                </button>
              </div>
              <form className="flex gap-2" onSubmit={(event) => { event.preventDefault(); onExplorerShiftApply(); }}>
                <input type="number" value={explorerShift} onChange={(event) => onExplorerShiftChange(event.target.value)}
                  placeholder={explorerScaleLocked ? 'Shift in scale steps' : 'Shift in semitones'}
                  aria-label="Semitone or scale-step shift"
                  className={`${TOOL_SELECT} min-w-0 flex-1 placeholder:text-slate-400`} />
                <button type="submit"
                  className={`${TOOL_BUTTON} border-cyan-400/70 bg-cyan-500/15 text-cyan-200`}>
                  Apply shift
                </button>
              </form>
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
              className="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-center text-base text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
            />
          )}
        </section>
        {showDegreeSelector && (
          <aside className="space-y-4">
            <DegreeSelector question={question} selectedDegree={selectedDegree} answerState={answerState} onSelect={onSelectDegree} />
          </aside>
        )}
      </main>

      <ActionBar
        onControls={onOpenControls}
        onSubmit={isExplorer ? null : onSubmit}
        onNew={isExplorer ? onClearSelection : onNewQuestion}
        newLabel={isExplorer ? 'Clear selection' : 'New Question'}
        onExtra={isHighlightDegree ? onNewScale : null}
        extraLabel="New Scale"
      />
    </div>
  );
}
