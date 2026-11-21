import { useMemo, useState } from 'react';
import { PARSED_KNOWLEDGE, parseInline, topicSearchText } from '../knowledge/parseKnowledge';
import ChordShapes, { PitchShapes } from './ChordShapes';
import CircleOfFifths from './CircleOfFifths';

function Inline({ text }) {
  return parseInline(text).map((part, index) => {
    if (part.kind === 'bold') return <strong key={index} className="font-semibold text-white">{part.text}</strong>;
    if (part.kind === 'code') {
      return <code key={index} className="rounded-md bg-slate-950/60 px-1.5 py-0.5 text-[0.9em] text-[var(--accent)]">{part.text}</code>;
    }
    if (part.kind === 'link') {
      return (
        <a key={index} href={part.href} target="_blank" rel="noreferrer"
          className="text-[var(--accent)] underline underline-offset-4">
          {part.text}
        </a>
      );
    }
    return <span key={index}>{part.text}</span>;
  });
}

// Nested list: each level is indented and marked by a guide line, so hierarchy reads at a glance.
function ListItems({ items, ordered }) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={`mt-3 space-y-2 text-[15px] leading-relaxed text-slate-300 ${ordered ? 'list-decimal pl-6' : 'list-none'}`}>
      {items.map((item, itemIndex) => (
        <li key={itemIndex} className={ordered ? '' : 'relative pl-5 before:absolute before:left-1 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)]'}>
          <Inline text={item.text} />
          {item.children?.length > 0 && (
            <ul className="mt-2 space-y-1.5 border-l border-white/10 pl-4 text-[14px] text-slate-400">
              {item.children.map((child, childIndex) => (
                <li key={childIndex} className="relative pl-3 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-slate-500">
                  <Inline text={child} />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </Tag>
  );
}

// Example and Exercise paragraphs stand apart from the body text, with their own label.
function Callout({ label, text }) {
  const isExercise = label === 'Exercise';
  return (
    <aside className={`mt-4 rounded-2xl border-l-4 bg-slate-950/40 px-4 py-3 text-[15px] leading-relaxed text-slate-200 ${isExercise ? 'border-amber-300' : 'border-[var(--accent)]'}`}>
      <p className={`mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${isExercise ? 'text-amber-200' : 'text-[var(--accent)]'}`}>
        {label}
      </p>
      <p><Inline text={text} /></p>
    </aside>
  );
}

function Diagram({ block }) {
  if (block.type === 'shapes') return <ChordShapes items={block.items} instruments={block.instruments} />;
  return <div className="mt-4"><PitchShapes label={block.label} pcs={block.pcs} instruments={block.instruments} /></div>;
}

// A run of diagrams shown as one compact row, collapsed by default.
// The row lists what the diagrams show; the button expands them in place.
function DiagramGroup({ blocks }) {
  const [open, setOpen] = useState(false);
  const labels = blocks.flatMap((block) => (block.type === 'shapes' ? block.items.map((item) => item.name) : [block.label]));
  const instruments = [...new Set(blocks.flatMap((block) => block.instruments))];
  const count = labels.length;
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/30 p-3">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}
          className="glass-btn shrink-0 px-3 py-1.5 text-xs font-semibold text-slate-100">
          {open ? 'Hide diagrams' : `Show ${count === 1 ? 'diagram' : `${count} diagrams`}`}
        </button>
        <span className="text-[11px] uppercase tracking-[0.15em] text-slate-500">{instruments.join(' · ')}</span>
      </div>
      {!open && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {labels.map((label, index) => (
            <span key={`${label}-${index}`} className="rounded-lg bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">{label}</span>
          ))}
        </div>
      )}
      {open && blocks.map((block, index) => <Diagram key={index} block={block} />)}
    </div>
  );
}

const isDiagram = (block) => block.type === 'shapes' || block.type === 'pitches';

function Blocks({ blocks }) {
  // Merge consecutive diagram blocks into one group.
  const items = [];
  blocks.forEach((block) => {
    const last = items[items.length - 1];
    if (isDiagram(block) && last?.type === 'diagram-group') last.blocks.push(block);
    else if (isDiagram(block)) items.push({ type: 'diagram-group', blocks: [block] });
    else items.push(block);
  });

  return items.map((block, index) => {
    if (block.type === 'diagram-group') return <DiagramGroup key={index} blocks={block.blocks} />;
    if (block.type === 'circle') return <CircleOfFifths key={index} />;
    if (block.type === 'h3') {
      return (
        <h3 key={index} className="mt-7 flex items-center gap-3 text-[17px] font-semibold text-white first:mt-0">
          <span className="h-5 w-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          {block.text}
        </h3>
      );
    }
    if (block.type === 'callout') return <Callout key={index} label={block.label} text={block.text} />;
    if (block.type === 'p') {
      return <p key={index} className="mt-3 text-[15px] leading-relaxed text-slate-300"><Inline text={block.text} /></p>;
    }
    return <ListItems key={index} items={block.items} ordered={block.type === 'ol'} />;
  });
}

// Theory screen: browse the knowledge files by topic, search them, and read a topic.
export default function TheoryBrowser() {
  const [fileId, setFileId] = useState(PARSED_KNOWLEDGE[0].id);
  const [openTopic, setOpenTopic] = useState(null);
  const [query, setQuery] = useState('');

  const file = PARSED_KNOWLEDGE.find((item) => item.id === fileId);
  const needle = query.trim().toLowerCase();
  const visibleTopics = useMemo(() => file.topics
    .map((topic, index) => ({ topic, index }))
    .filter(({ topic }) => !needle || topicSearchText(topic).includes(needle)), [file, needle]);

  // Subgroups in the order they first appear in the file.
  const groups = useMemo(() => {
    const order = [];
    const byName = new Map();
    visibleTopics.forEach((entry) => {
      const name = entry.topic.group ?? 'Other';
      if (!byName.has(name)) {
        byName.set(name, []);
        order.push(name);
      }
      byName.get(name).push(entry);
    });
    return order.map((name) => ({ name, items: byName.get(name) }));
  }, [visibleTopics]);

  if (openTopic !== null) {
    const topic = file.topics[openTopic];
    return (
      <article className="space-y-4">
        <button type="button" onClick={() => setOpenTopic(null)}
          className="glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100">
          ← Back to {file.title}
        </button>
        <section className="glass p-5 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {file.title}{topic.group ? ` · ${topic.group}` : ''}
          </p>
          <h2 className="mt-1 text-2xl font-bold text-white">{topic.title}</h2>
          <div className="mt-2 border-t border-white/10 pt-2">
            <Blocks blocks={topic.blocks} />
          </div>
        </section>
      </article>
    );
  }

  return (
    <div className="space-y-4">
      <section className="glass p-4">
        <div className="flex flex-wrap gap-2">
          {PARSED_KNOWLEDGE.map((item) => (
            <button key={item.id} type="button" onClick={() => { setFileId(item.id); setQuery(''); }}
              aria-pressed={fileId === item.id}
              className="glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100">
              {item.title}
            </button>
          ))}
        </div>
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
          placeholder={`Search ${file.title.toLowerCase()} topics`} aria-label="Search topics"
          className="field mt-3 w-full px-4 py-3 text-sm" />
      </section>

      {!needle && file.intro.length > 0 && (
        <section className="glass p-5">
          <Blocks blocks={file.intro} />
        </section>
      )}

      {visibleTopics.length === 0 && (
        <p className="glass p-5 text-sm text-slate-300">No topic matches “{query}”.</p>
      )}
      {groups.map((group) => (
        <section key={group.name} className="space-y-2">
          <h2 className="px-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {group.name}
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {group.items.map(({ topic, index }) => (
              <button key={topic.title} type="button" onClick={() => setOpenTopic(index)}
                className="glass-btn px-4 py-4 text-left text-sm font-semibold text-slate-100">
                {topic.title}
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
