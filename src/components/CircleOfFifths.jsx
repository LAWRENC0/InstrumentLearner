// The circle of fifths as a diagram: major keys on the outside, their relative minors inside,
// and the key signature of each key under its name. Clockwise from the top is up a fifth.

const MAJOR = ['C', 'G', 'D', 'A', 'E', 'B', 'F♯ / G♭', 'C♯ / D♭', 'A♭', 'E♭', 'B♭', 'F'];
const MINOR = ['a', 'e', 'b', 'f♯', 'c♯', 'g♯', 'd♯ / e♭', 'b♭', 'f', 'c', 'g', 'd'];
const SIGNATURE_SHORT = ['0', '1♯', '2♯', '3♯', '4♯', '5♯', '6', '7♯', '4♭', '3♭', '2♭', '1♭'];

const SIZE = 340;
const CENTRE = SIZE / 2;
const OUTER = 128;
const INNER = 80;

function point(index, radius) {
  const angle = ((index * 30) - 90) * (Math.PI / 180);
  return { x: CENTRE + radius * Math.cos(angle), y: CENTRE + radius * Math.sin(angle) };
}

export default function CircleOfFifths() {
  return (
    <figure className="glass-inset p-3">
      <figcaption className="mb-2 text-sm font-semibold text-white">
        The circle of fifths
        <span className="ml-2 text-xs font-normal text-slate-400">clockwise = up a fifth</span>
      </figcaption>
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="Circle of fifths with major keys outside and relative minors inside" className="mx-auto w-full max-w-[340px]">
        <circle cx={CENTRE} cy={CENTRE} r={OUTER + 22} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx={CENTRE} cy={CENTRE} r={INNER - 24} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {MAJOR.map((name, index) => {
          const outer = point(index, OUTER);
          const inner = point(index, INNER);
          const counts = point(index, OUTER + 22);
          const isStart = index === 0;
          return (
            <g key={name}>
              <line x1={point(index, INNER - 24).x} y1={point(index, INNER - 24).y} x2={point(index, OUTER + 22).x} y2={point(index, OUTER + 22).y} stroke="rgba(255,255,255,0.06)" />
              <text x={outer.x} y={outer.y} textAnchor="middle" dominantBaseline="middle"
                style={{ fill: isStart ? 'var(--accent)' : '#f8fafc' }} fontSize="16" fontWeight="700">
                {name}
              </text>
              <text x={inner.x} y={inner.y} textAnchor="middle" dominantBaseline="middle" fill="#cbd5e1" fontSize="12">
                {MINOR[index]}
              </text>
              <text x={counts.x} y={counts.y} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="10">
                {SIGNATURE_SHORT[index]}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        The small numbers are each key's signature. Sharps grow clockwise from C; flats grow counterclockwise.
      </p>
    </figure>
  );
}
