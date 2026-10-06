# Technical Specifications: Guitar Fretboard Trainer Web App (MVP)

## 1. Project Overview
* **Objective:** Minimalist, zero-friction, zero-cost web application designed for practicing guitar fretboard visualization, intervals, triads, extended chords, and pentatonic boxes.
* **Target Audience / Usage:** Personal use on mobile or desktop browsers. Continuous practice loop without complex scoring, leaderboards, or distractions.
* **Tech Stack:** 
  * **Frontend:** React (via Vite) or Vanilla HTML/CSS/JS (React preferred for state management across multiple game modes).
  * **Styling:** Tailwind CSS (for a clean, dark-themed, modern UI).
  * **Audio:** Native Web Audio API for an optional sound feedback toggle.
  * **Hosting:** Vercel or GitHub Pages (static, 100% free hosting).

---

## 2. GUI & Layout Architecture
The main application screen must contain:
1. **Header / Mode Selector:** Tab or dropdown menu to instantly switch between game modes (`Intervals`, `Triads`, `Chords`, `Scale & Triads`, `5-Box Pentatonics`).
2. **The Fretboard Component (Core):**
   * A standard 6-string guitar fretboard representation (from high E to low E string) spanning  15 frets, including position markers on frets 3, 5, 7, 9, 12.
   * **Interactivity:** Every string/fret intersection point must be clickable/touchable.
   * **Audio Toggle:** A global "Audio ON/OFF" switch that emits a basic harmonic frequency when a note is clicked on the fretboard.
3. **Prompt / Question Area:** A clear text box displaying instructions for the current round (e.g., *"Find the Major Third (M3) starting from C"* or *"Find the 5th degree in Box 1"*).
4. **Loop Behavior:** No game-over screens, no blocking timers. button for requesting new question.

---

## 3. Game Modes Details

### GAME 1: Intervals
* **Logic:**
  1. The system randomly picks a starting note on the fretboard and highlights it (blue dot).
  2. A target interval is requested relative to that root (e.g., Unison, m2, M2, m3, M3, P4, Tritone, P5, m6, M6, m7, M7, Octave) in the text box: it must be written as e.g. "m3 (+3)" or "octave (+12)" and the string where this note must be found: the game will randomly choose between "any string is ok" and one of the 6 six strings.
  3. The user must click the fretboard at a position that fulfills the requested interval on the specified string, if specified.

### GAME 2: Triads (Base)
* **Logic:**
  1. The system selects a note on the fretboard (blue dot) and a triad quality (Major, Minor, Diminished, Augmented).
  2. The prompt tells the user which role the higlighted note plays in the expected chord. e.g. : the higlighted note is the third of a minor chord. 
  3. The user clicks the fretboard to guess the required notes of the triad (following the example: he should find the root and fifth) on any string is ok . 

### GAME 3: Chords (Extended)
* **Logic:**
  * Extension of Game 2 including extended and altered chords: `7`, `maj7`, `m7`, `sus4`, `sus2`, `add9`.
  * The prompt asks to locate specific characteristic tones of the chord relative to the highlighted note e.g. "the highlithget note is the fifth of a maj7 chord. find the maj7".

### GAME 4: Scale & Triads (With Fretboard / String Constraints)
* **Logic:**
  1. Select a random root note and major/minor. this defines a scale.
  2. The system picks a scale degree (e.g., II degree) and asks to find its corresponding triad.
  3. **Optional Constraints:** The system applies a filter (e.g., *"Find the triad on strings 1, 2, 3"* or *"Limit search between fret 5 and fret 9"*).

### GAME 5: 5-Box Pentatonics
* **Logic:**
  1. The system visually highlights one of the 5 pentatonic boxes (e.g., Box 1 of A Minor).
  2. A specific scale degree is requested (e.g., *"Find the Tonic"* or *"Find the Minor Third"*).
  3. The user must click a fretboard position that is *both* inside that specific box *and* matches the requested degree.

---
## 4. Game PLay Mechanics
* in all game modes the system may highlight some notes and ask a user to select the correct / some correct target notes. the user, upon clicking, puts a green dot over the ntoe that he has clicked. clicking produces the corresponding sound if audio is enabled (by clicking a sound icon). every note that the user clicks toggles between green and non highlighted (and plays the associated sample). then the user has a "set" of selected notes (the ones that are green). in the UI there must be a button to "unveil" selected notes (wich just makes the note name appear textually inside the green circle). this is kinda like a helper button . and another button to submit the answer. upon submission, the submission is checked and evaluated. the correct selections should turn from green to golden, while the wrong ones should turn red.

---


## 5. Implementation Requirements for CLI
* **Clean File Structure:**
  * `App.jsx` (or `index.html`) managing global application and game mode state.
  * `components/Fretboard.jsx` (rendering the interactive guitar neck grid).
  * `utils/musicTheory.js` (helper functions for calculating notes, intervals, triad formulas, and fretboard coordinates).
* **Minimal Heavy Dependencies:** Stick strictly to React, Tailwind CSS, and native Web Audio API.