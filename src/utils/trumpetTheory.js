import { midiToNote, noteToMidi } from './musicTheory.js';

export const TRUMPET_FUNDAMENTAL_MIDI = noteToMidi('Bb1');
export const TRUMPET_LOW_MIDI = TRUMPET_FUNDAMENTAL_MIDI;
export const TRUMPET_HIGH_MIDI = noteToMidi('C6');
export const MAX_TRUMPET_PARTIAL = 7;
export const PUMP_LEVELS = [0, 25, 50, 75, 100];
export const VALVE_SEMITONES = { 1: -2, 2: -1, 3: -3 };

const COMBINATION_CORRECTION = {
  '': 0,
  '1': 0,
  '2': 0,
  '3': 0,
  '1-2': 10,
  '1-3': 30,
  '2-3': 15,
  '1-2-3': 45,
};

const FLAT_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export function formatTrumpetNote(midi) {
  const normalized = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  return `${FLAT_NAMES[normalized]}${octave}`;
}

export function getValveOffset(valves) {
  return valves.reduce((total, valve) => total + (VALVE_SEMITONES[valve] ?? 0), 0);
}

export function getValveCombinationCorrection(valves) {
  const key = [...valves].sort((a, b) => a - b).join('-');
  return COMBINATION_CORRECTION[key] ?? 0;
}

export function getPumpCorrection(valves, pump1, pump3) {
  const correction1 = valves.includes(1) ? pump1 * 0.25 : 0;
  const correction3 = valves.includes(3) ? pump3 * 0.3 : 0;
  return correction1 + correction3;
}

export function calculateTrumpetPitch({ partial, valves, pump1, pump3 }) {
  const valveOffset = getValveOffset(valves);
  const combinationCorrection = getValveCombinationCorrection(valves);
  const pumpCorrection = getPumpCorrection(valves, pump1, pump3);
  const frequency = 440
    * 2 ** ((TRUMPET_FUNDAMENTAL_MIDI - 69 + valveOffset) / 12)
    * partial
    * 2 ** ((combinationCorrection - pumpCorrection) / 1200);
  const exactMidi = 69 + 12 * Math.log2(frequency / 440);
  const nearestMidi = Math.round(exactMidi);

  return {
    frequency,
    exactMidi,
    nearestMidi,
    note: formatTrumpetNote(nearestMidi),
    centsFromTarget: (exactMidi - nearestMidi) * 100,
    combinationCorrection,
    pumpCorrection,
  };
}

export function evaluateTrumpetConfiguration(configuration, targetMidi) {
  const result = calculateTrumpetPitch(configuration);
  const distanceCents = Math.abs((result.exactMidi - targetMidi) * 100);
  const coherentPumps = (!configuration.pump1 || configuration.valves.includes(1))
    && (!configuration.pump3 || configuration.valves.includes(3));

  return {
    ...result,
    targetMidi,
    targetNote: formatTrumpetNote(targetMidi),
    distanceCents,
    coherentPumps,
    quality: !coherentPumps || distanceCents > 50
      ? 'wrong'
      : distanceCents <= 20 && result.pumpCorrection === 0
        ? 'optimal'
        : 'corrected',
  };
}

const VALVE_COMBINATIONS = [
  [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3],
];

function configurationPreference(configuration, evaluation) {
  const activePumps = Number(configuration.pump1 > 0) + Number(configuration.pump3 > 0);
  const unusualPartial = [7, 11].includes(configuration.partial) ? 1 : 0;

  // Prefer conventional, centered trumpet production: no slide correction,
  // accurate pitch, fewer valves, and a middle-register partial.
  return [
    activePumps,
    evaluation.distanceCents,
    unusualPartial,
    configuration.valves.length,
    Math.abs(configuration.partial - 4),
  ];
}

function comparePreference(left, right) {
  const leftScore = configurationPreference(left.configuration, left);
  const rightScore = configurationPreference(right.configuration, right);
  for (let index = 0; index < leftScore.length; index += 1) {
    if (leftScore[index] !== rightScore[index]) return leftScore[index] - rightScore[index];
  }
  return 0;
}

export function getBestTrumpetConfiguration(targetMidi) {
  const candidates = [];
  for (let partial = 1; partial <= MAX_TRUMPET_PARTIAL; partial += 1) {
    for (const valves of VALVE_COMBINATIONS) {
      for (const pump1 of PUMP_LEVELS) {
        for (const pump3 of PUMP_LEVELS) {
          const configuration = { partial, valves, pump1, pump3 };
          const evaluation = evaluateTrumpetConfiguration(configuration, targetMidi);
          if (evaluation.coherentPumps && evaluation.distanceCents <= 50) {
            candidates.push({ ...evaluation, configuration });
          }
        }
      }
    }
  }

  return candidates.sort(comparePreference)[0] ?? null;
}

export function getTrumpetConfigurations(targetMidi, minPartial = 1, maxPartial = MAX_TRUMPET_PARTIAL) {
  const candidates = [];
  for (let partial = minPartial; partial <= maxPartial; partial += 1) {
    for (const valves of VALVE_COMBINATIONS) {
      for (const pump1 of PUMP_LEVELS) {
        for (const pump3 of PUMP_LEVELS) {
          const configuration = { partial, valves, pump1, pump3 };
          const evaluation = evaluateTrumpetConfiguration(configuration, targetMidi);
          if (evaluation.coherentPumps && evaluation.distanceCents <= 50) {
            candidates.push({ ...evaluation, configuration });
          }
        }
      }
    }
  }
  return candidates.sort(comparePreference);
}

export function formatTrumpetConfiguration(configuration) {
  const valves = configuration.valves.length ? configuration.valves.join('+') : 'open';
  const partial = configuration.partial === 1 ? 'pedal' : `partial ${configuration.partial}`;
  return `${partial}, valves ${valves}, 1st slide ${configuration.pump1}%, 3rd slide ${configuration.pump3}%`;
}

export function getReachableTrumpetTargets() {
  const targets = new Set();
  for (let partial = 1; partial <= MAX_TRUMPET_PARTIAL; partial += 1) {
    for (const valveMask of VALVE_COMBINATIONS) {
      for (const pump1 of PUMP_LEVELS) {
        for (const pump3 of PUMP_LEVELS) {
          const target = calculateTrumpetPitch({ partial, valves: valveMask, pump1, pump3 }).nearestMidi;
          if (target >= TRUMPET_LOW_MIDI && target <= TRUMPET_HIGH_MIDI) {
            targets.add(target);
          }
        }
      }
    }
  }
  return [...targets].sort((a, b) => a - b);
}

export function getRandomTrumpetTarget(previousMidi = null, offset = null) {
  const reachable = getReachableTrumpetTargets();
  if (previousMidi !== null && offset !== null) {
    const requested = previousMidi + offset;
    return reachable.includes(requested)
      ? requested
      : reachable.reduce((closest, candidate) =>
          Math.abs(candidate - requested) < Math.abs(closest - requested) ? candidate : closest,
        reachable[0]);
  }
  return reachable[Math.floor(Math.random() * reachable.length)];
}

export function getWrittenBbTrumpetMidi(concertMidi) {
  return concertMidi + 2;
}

export function getTrumpetQuestionText(targetMidi, bbNotation) {
  const displayMidi = bbNotation ? getWrittenBbTrumpetMidi(targetMidi) : targetMidi;
  return formatTrumpetNote(displayMidi);
}
