// Turns the knowledge markdown files into topics the Theory screen can list and render.
// Supported markdown: "# " title, "## " topics, "### " subheadings, paragraphs, "- " and "1. " lists
// (two-space indented sub-items), "Example:" and "Exercise:" paragraphs (shown as callouts),
// **bold**, `code` and [links](url).
// Diagram directives:
//   {{chords: C Dm7 G7 | guitar piano}}   chord shapes, with an inversion button (both by default)
//   {{scale: D dorian | guitar piano}}    a scale over the keyboard and the fretboard
//   {{notes: C E G | piano}}              single notes, for intervals and melodies
//   {{triads: major | 6 5 4}}             every inversion of a triad on three adjacent guitar strings
//   {{voicings: maj7 drop2 | 4 3 2 1}}    every inversion of a seventh chord (close, drop2, drop3)
//   {{arpeggio: m7}}                      every chord tone on the neck, coloured by degree
//   {{scalemap: dorian m7}}               a scale on the neck with the chord tones picked out
//   {{circle: fifths}}                    the interactive circle of fifths
// Any directive can end with "| description" (after the instruments or strings field, or straight
// after the body for arpeggio, scalemap and circle), shown before the diagram is opened.

import musicTheoryText from '../../knowledge/music-theory.md?raw';
import guitarText from '../../knowledge/guitar.md?raw';
import trumpetText from '../../knowledge/trumpet.md?raw';
import pianoText from '../../knowledge/piano.md?raw';
import { parseNotesDirective, parseScaleDirective, SCALE_STEPS } from '../utils/scales';
import { parseNoteName } from '../utils/noteInput';

export const KNOWLEDGE_FILES = [
  { id: 'music-theory', title: 'General theory', text: musicTheoryText },
  { id: 'guitar', title: 'Guitar', text: guitarText },
  { id: 'trumpet', title: 'Trumpet', text: trumpetText },
  { id: 'piano', title: 'Piano', text: pianoText },
];

const DEFAULT_INSTRUMENTS = ['guitar', 'piano'];

function instrumentList(text) {
  const list = (text ?? '').trim().split(/\s+/).filter(Boolean);
  return list.length ? list : DEFAULT_INSTRUMENTS;
}

const MAP_CHORDS = ['major', 'minor', 'diminished', 'augmented', 'maj7', '7', 'm7', 'm7b5', 'dim7'];
const unknown = (text) => ({ type: 'p', text: `(Unknown diagram: ${text})` });

// Turns one directive line into a block, or returns null if the line is not a directive.
// Every directive can end with "| description": a short sentence saying what the diagram is for,
// shown before the diagram is opened.
function parseDirective(line) {
  const match = /^\{\{(chords?|scale|notes|circle|triads|voicings|arpeggio|scalemap):(.*)\}\}$/.exec(line.trim());
  if (!match) return null;
  const kind = match[1];
  const parts = match[2].split('|').map((part) => part.trim());
  const body = parts[0];

  if (kind === 'circle') return { type: 'circle', description: parts[1] || '' };

  if (kind === 'arpeggio' || kind === 'scalemap') {
    const words = body.split(/\s+/);
    // Optional starting root: {{scalemap: D dorian m7}}, {{arpeggio: A m7}}.
    const rootPc = words.length > 1 && /^[A-G][#b]?$/.test(words[0]) ? parseNoteName(words.shift()) : 0;
    const chord = words.pop();
    if (!MAP_CHORDS.includes(chord)) return unknown(line.trim());
    const description = parts[1] || '';
    if (kind === 'arpeggio') {
      return { type: 'arpeggio', chord, root: rootPc, label: `${chord} arpeggio`, instruments: ['guitar'], description };
    }
    const scale = words.join(' ');
    if (!SCALE_STEPS[scale]) return unknown(line.trim());
    return { type: 'scalemap', scale, chord, root: rootPc, label: `${scale} + ${chord}`, instruments: ['guitar'], description };
  }

  if (kind === 'triads' || kind === 'voicings') {
    // {{triads: major | 6 5 4}}   {{voicings: maj7 drop2 | 4 3 2 1}}
    const [chord, voicing = 'close'] = body.split(/\s+/);
    const strings = (parts[1] ?? '').split(/\s+/).filter(Boolean).map(Number);
    const tones = ['maj7', '7', 'm7', 'm7b5', 'dim7'].includes(chord) ? 4 : 3;
    const valid = MAP_CHORDS.includes(chord) && ['close', 'drop2', 'drop3'].includes(voicing)
      && strings.length === tones && strings.every((n) => n >= 1 && n <= 6)
      && strings.every((n, i) => i === 0 || n < strings[i - 1]);
    if (!valid) return unknown(line.trim());
    const voicingLabel = voicing === 'close' ? '' : `${voicing.replace('drop', 'drop ')} · `;
    return {
      type: 'voicings', chord, voicing, strings, label: `${voicingLabel}strings ${strings.join('–')}`,
      instruments: ['guitar'], description: parts[2] || '',
    };
  }

  const instruments = instrumentList(parts[1]);
  const description = parts[2] || '';
  if (kind.startsWith('chord')) {
    return { type: 'shapes', items: body.split(/\s+/).filter(Boolean).map((name) => ({ name })), instruments, description };
  }
  const parsed = kind === 'scale' ? parseScaleDirective(body) : parseNotesDirective(body);
  if (!parsed) return unknown(line.trim());
  const label = kind === 'scale' ? body : parsed.names.join(' ');
  return { type: 'pitches', label, pcs: parsed.pcs, instruments, description };
}

// A paragraph starting with "Example:" or "Exercise:" becomes a callout block.
function paragraphBlock(text) {
  const callout = /^(Example|Exercise)(?:\s*\d*)?:\s*(.*)$/s.exec(text);
  if (callout) return { type: 'callout', label: callout[1], text: callout[2] };
  return { type: 'p', text };
}

// Blocks: h3, p, callout, ul/ol (items with optional children), shapes, pitches.
function parseBlocks(lines) {
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) blocks.push(paragraphBlock(paragraph.join(' ')));
    paragraph = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.replace(/\s+$/, '');
    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith('### ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'h3', text: line.slice(4).trim() });
      continue;
    }
    const directive = parseDirective(line);
    if (directive) {
      flushParagraph();
      flushList();
      blocks.push(directive);
      continue;
    }
    const bullet = /^(\s*)- (.*)$/.exec(line);
    const ordered = /^(\s*)\d+\. (.*)$/.exec(line);
    if (bullet || ordered) {
      flushParagraph();
      const match = bullet ?? ordered;
      const type = bullet ? 'ul' : 'ol';
      const nested = match[1].length >= 2;
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      if (nested && list.items.length) {
        const parent = list.items[list.items.length - 1];
        parent.children = [...(parent.children ?? []), match[2]];
      } else {
        list.items.push({ text: match[2], children: [] });
      }
      continue;
    }
    flushList();
    paragraph.push(line.trim());
  }
  flushParagraph();
  flushList();
  return blocks;
}

// A file becomes: { id, title, intro, topics: [{ title, group, blocks }] }.
// Topics come from "## ". A "@group Name" line directly under a topic heading places that topic
// in a subgroup; topics without one go under "Other".
export function parseKnowledgeFile({ id, title, text }) {
  const lines = text.split('\n');
  const topics = [];
  let current = null;
  const intro = [];
  for (const line of lines) {
    if (line.startsWith('# ')) continue;
    if (line.startsWith('## ')) {
      current = { title: line.slice(3).trim(), group: 'Other', lines: [] };
      topics.push(current);
      continue;
    }
    if (current && current.lines.every((item) => !item.trim()) && line.startsWith('@group ')) {
      current.group = line.slice('@group '.length).trim();
      continue;
    }
    (current ? current.lines : intro).push(line);
  }
  return {
    id,
    title,
    intro: parseBlocks(intro),
    topics: topics.map((topic) => ({ title: topic.title, group: topic.group, blocks: parseBlocks(topic.lines) })),
  };
}

export const PARSED_KNOWLEDGE = KNOWLEDGE_FILES.map(parseKnowledgeFile);

// Splits text into segments: { kind: 'text'|'bold'|'code'|'link', text, href }.
export function parseInline(text) {
  const parts = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;
  let last = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push({ kind: 'text', text: text.slice(last, match.index) });
    const token = match[0];
    if (token.startsWith('**')) parts.push({ kind: 'bold', text: token.slice(2, -2) });
    else if (token.startsWith('`')) parts.push({ kind: 'code', text: token.slice(1, -1) });
    else {
      const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token);
      parts.push({ kind: 'link', text: link[1], href: link[2] });
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push({ kind: 'text', text: text.slice(last) });
  return parts;
}

// Plain text of a topic, used by the search box.
export function topicSearchText(topic) {
  return [topic.title, ...topic.blocks.flatMap((block) => {
    if (block.items) return block.items.flatMap((item) => [item.text, ...(item.children ?? [])]);
    if (block.type === 'shapes') return [...block.items.map((item) => item.name), block.description ?? ''];
    if (block.type === 'pitches') return [block.label, block.description ?? ''];
    if (['voicings', 'arpeggio', 'scalemap'].includes(block.type)) return [block.label, block.description ?? ''];
    return [block.text ?? ''];
  })].join(' ').toLowerCase();
}
