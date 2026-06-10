import React from 'react';
import { Callout, Table, AnchorImage } from './Visual.jsx';
import { Eq } from './Equation.jsx';
import Markdown from './Markdown.jsx';

// Renders an ordered array of content nodes extracted from the source book.
export default function ContentRenderer({ nodes }) {
  if (!nodes || !nodes.length) return null;
  return (
    <div className="space-y-3">
      {nodes.map((n, i) => {
        switch (n.t) {
          case 'md':
            return <Markdown key={i}>{n.x}</Markdown>;
          case 'p':
            return <p key={i} className="text-[15px] leading-relaxed text-slate-800">{n.x}</p>;
          case 'h':
            return <h4 key={i} className="text-base font-bold text-slate-900 pt-2">{n.x}</h4>;
          case 'ul':
            return (
              <ul key={i} className="list-disc ml-6 space-y-1 text-[15px] text-slate-800">
                {n.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            );
          case 'table':
            return <Table key={i} headers={n.headers} rows={n.rows} />;
          case 'callout':
            return <Callout key={i} kind={n.kind} title={n.title}>{n.x}</Callout>;
          case 'fig':
            return <AnchorImage key={i} src={n.src} alt={n.alt} caption={n.caption} />;
          case 'eq':
            return <Eq key={i} tex={n.tex} block />;
          default:
            return null;
        }
      })}
    </div>
  );
}
