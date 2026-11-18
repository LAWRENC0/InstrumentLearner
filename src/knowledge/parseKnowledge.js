// Turns the knowledge markdown files into topics the Theory screen can list and render.
// Supported markdown: "# " title, "## " topics, "### " subheadings, paragraphs, "- " and "1. " lists
// (two-space indented sub-items), "Example:" and "Exercise:" paragraphs (shown as callouts),
// **bold**, `code` and [links](url).
// Diagram directives:
//   {{chords: C Dm7 G7 | guitar piano}}   chord shapes, with an inversion button (both by default)
//   {{scale: D dorian | guitar piano}}    a scale over the keyboard and the fretboard
//   {{notes: C E G | piano}}              single notes, for intervals and melodies

import musicTheoryText from '../../knowledge/music-theory.md?raw';
import guitarText from '../../knowledge/guitar.md?raw';
import trumpetText from '../../knowledge/trumpet.md?raw';
import pianoText from '../../knowledge/piano.md?raw';
import { parseNotesDirective, parseScaleDirective } from '../utils/scales';

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

// Turns one directive line into a block, or returns null if the line is not a directive.
function parseDirective(line) {
  const circle = /^\{\{circle:\s*fifths\s*\}\}$/.exec(line.trim());
  if (circle) return { type: 'circle' };
  const match = /^\{\{(chords?|scale|notes):(.*)\}\}$/.exec(line.trim());
  if (!match) return null;
  const [body, instrumentsPart] = match[2].split('|');
  const instruments = instrumentList(instrumentsPart);
  if (match[1].startsWith('chord')) {
    return {
      type: 'shapes',
      items: body.trim().split(/\s+/).filter(Boolean).map((name) => ({ name })),
      instruments,
    };
  }
  const parsed = match[1] === 'scale' ? parseScaleDirective(body) : parseNotesDirective(body);
  if (!parsed) return { type: 'p', text: `(Unknown ${match[1]} diagram: ${body.trim()})` };
  const label = match[1] === 'scale' ? `${body.trim()}` : parsed.names.join(' ');
  return { type: 'pitches', label, pcs: parsed.pcs, instruments };
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
    if (block.type === 'shapes') return block.items.map((item) => item.name);
    if (block.type === 'pitches') return [block.label];
    return [block.text ?? ''];
  })].join(' ').toLowerCase();
}
