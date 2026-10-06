# Guitar Fretboard Trainer MVP Implementation Plan

## 1. Project setup
- Initialize a Vite React app with Tailwind CSS.
- Keep the app static and lightweight: one-page UI, no backend, no auth, no database.
- Use a single `App.jsx` to hold global mode state, current question, selected notes, and answer evaluation.
- Add `components/Fretboard.jsx` and `utils/musicTheory.js` as the main extension points.

## 2. Core data model
Create a small state model shared across the app:
- `mode`: one of `Intervals`, `Triads`, `Chords`, `Scale & Triads`, `5-Box Pentatonics`
- `question`: current challenge object with:
  - root note
  - target interval/degree/chord quality
  - expected notes or note roles
  - optional constraints (string(s), fret range, pentatonic box)
- `selectedNotes`: set of currently toggled positions on the fretboard
- `audioEnabled`: boolean
- `answerState`: `idle | submitted`

Recommended state shape:
```js
{
  mode: 'Intervals',
  rootNote: 'C',
  target: { type: 'interval', value: 'm3', offset: 3 },
  requiredString: 'any' | 'E' | 'A' | 'D' | 'G' | 'B' | 'e',
  constraints: { minFret: 0, maxFret: 15, box: 1 },
  selectedNotes: [{ string: 2, fret: 3 }],
  audioEnabled: true,
  answerState: 'idle'
}
```

## 3. Music theory utility layer
Implement all note and harmony logic in `utils/musicTheory.js`.

### Required helpers
- `NOTE_NAMES`: e.g. `['C', 'C#', 'D', ... 'B']`
- `getNoteBySemitone(root, offset)`: compute note by interval offset
- `getIntervalDistance(noteA, noteB)`: semitone distance between two notes
- `normalizeFretPosition(stringIndex, fret)`: map to playable note name
- `getStringNote(stringIndex, fret)`: return note for a given string/fret coordinate
- `getTriadNotes(root, quality)`: return triad tones
- `getChordTones(root, quality)`: include extensions/alterations for `7`, `maj7`, `m7`, `sus4`, `sus2`, `add9`
- `getScaleDegrees(root, mode)`: major/minor scale degree mapping
- `getPentatonicBoxNotes(root, boxNumber)`: pitch set for each box
- `isNoteInBox(note, box)`, `doesNoteMatchInterval(root, targetNote, interval)`
- `findIntervalTargets(root, interval, allowedString)`
- `isPositionValidForConstraint(position, constraints)`

Keep these utilities pure and deterministic to simplify testing and reuse.

## 4. Fretboard component
Build `components/Fretboard.jsx` to render a 6-string x 15-fret board with:
- strings ordered from high E to low E
- visible fret markers at 3, 5, 7, 9, 12
- clickable intersections
- green selected state
- golden correct state after submission
- red incorrect state after submission
- blue root or highlighted target state for the current prompt

### Interaction behavior
- Clicking a fretboard position toggles selection on/off.
- Each click triggers a tone if `audioEnabled` is true.
- A selected note should visually show a green dot.
- Add a `Reveal` button that simply annotates green selected notes with note names textually.
- Add a `Submit` button that evaluates the current selection against the active question.

### Rendering state logic
- `selectedNotes` is a unique set of coordinates.
- `highlightedNotes` / `targetNotes` represent the expected notes for the prompt.
- `answerState` determines whether notes are locked in their final colors.

## 5. Question generation and validation
Implement `App.jsx` logic for generating a new prompt and checking the user answer.

### Shared rule
Every question should:
- randomly choose root note from the full fretboard
- optionally choose a string restriction or fret constraint
- produce expected target positions
- make the answer check deterministic and easy to verify

### Answer evaluation
When `Submit` is pressed:
- Compare `selectedNotes` against the expected valid position set.
- Mark each selected note as:
  - golden if it is expected and correct
  - red if it was selected but should not be selected
- Keep answer validation mode-specific but share one result pipeline.

## 6. Game mode implementation

### Game 1: Intervals
- Pick random root note and interval from:
  `['unison', 'm2', 'M2', 'm3', 'M3', 'P4', 'tritone', 'P5', 'm6', 'M6', 'm7', 'M7', 'octave']`
- Prompt format: `Find the M3 (+3) from C` or `Find the octave (+12) on string 6`
- If a string is specified, the answer must match that string; otherwise any string is valid.
- Valid note is computed by interval offset from the root.

### Game 2: Triads (base)
- Select a root and a triad quality: `major`, `minor`, `diminished`, `augmented`.
- Highlight one note role in the question, such as `The highlighted note is the 3rd of a minor chord.`
- User must select the remaining required notes to complete the triad.
- Expected notes are generated from `getTriadNotes(root, quality)`.

### Game 3: Chords (extended)
- Extend triad generation for: `7`, `maj7`, `m7`, `sus4`, `sus2`, `add9`.
- Prompt asks to locate a characteristic tone relative to the highlighted note.
- Example: `The highlighted note is the 5th of a maj7 chord. Find the maj7.`
- Use `getChordTones(root, quality)` to resolve correct target notes.

### Game 4: Scale & Triads
- Randomly pick a root and a major/minor scale.
- Select a scale degree such as II, IV, VI, etc.
- Ask for the corresponding triad built on that degree.
- Apply optional constraints such as:
  - `Find the triad on strings 1, 2, 3`
  - `Limit search between fret 5 and fret 9`
- Use `getScaleDegrees(root, scaleType)` and triad formulas to generate valid tones.

### Game 5: 5-Box Pentatonics
- Predefine the 5 pentatonic boxes for each root.
- Highlight one box for the current prompt.
- Ask for a scale degree or pitch class inside that box, e.g. `Find the tonic in Box 1` or `Find the minor third in Box 2`.
- Validate selections by checking both:
  - the selected note belongs to the specified pentatonic box
  - the note matches the requested degree

## 7. UI and UX flow
- Header includes a mode selector and audio toggle.
- Question panel displays concise instructions.
- `New Question` button generates a fresh challenge without blocking the loop.
- `Reveal` button reveals note names on selected green notes.
- `Submit` button checks the answer and updates colors.
- No end-of-game screen, no timer, no score table.

## 8. Audio support
- Use `AudioContext` and simple oscillator-based tones.
- Use instrument-like frequencies for note playback when a fret is clicked.
- Keep it optional and global: `Audio ON/OFF` toggle.
- Tone generation should use a short attack/decay envelope to sound clean and lightweight.

## 9. Implementation sequence
1. Set up Vite + React + Tailwind.
2. Create the fretboard grid and click/toggle interaction.
3. Implement note/fret mapping and pitch logic in `musicTheory.js`.
4. Add the audio toggle and note playback.
5. Build question generation for Intervals.
6. Add Triads and Chords.
7. Add Scale & Triads and pentatonic box constraints.
8. Wire `Submit`, `Reveal`, and `New Question` behavior.
9. Polish dark-theme styling and mobile responsiveness.
10. Run a quick sanity check for common edge cases:
    - invalid string/fret combinations
    - duplicate notes in different positions
    - answer evaluation against multiple valid tones
    - note naming consistency across octave boundaries

## 10. Suggested acceptance criteria
- User can switch between all five modes from the header.
- Fretboard is clickable and visually reflects selected, root, target, correct, and wrong notes.
- Audio toggle works without breaking interaction.
- Each mode produces valid prompts and a consistent answer-checking flow.
- The app works on both mobile and desktop screens without requiring a backend.

## 11. Recommended folder structure
```text
src/
  App.jsx
  components/
    Fretboard.jsx
  utils/
    musicTheory.js
  styles/
    index.css
```

## 12. Implementation notes
- Prefer a single source of truth for note generation rather than duplicating interval logic across modes.
- Keep the board state simple and declarative; avoid mixing business logic into the rendered JSX.
- Treat this as an MVP: robust enough to practice, minimal enough to ship quickly and maintain easily.
