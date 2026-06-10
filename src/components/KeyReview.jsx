import React from 'react';
import { Card } from './Visual.jsx';
import { Eq } from './Equation.jsx';
import Markdown from './Markdown.jsx';

const Inline = ({ children }) => (
  <Markdown className="[&_p]:my-0 [&_p]:text-current [&_strong]:text-current [&_ul]:my-1">{children}</Markdown>
);

export default function KeyReview({ keyReview, chapterTitle }) {
  if (!keyReview) return null;
  const { conceptSummary = [], mnemonics = [], keyConcepts = [], equations = [] } = keyReview;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-600 to-sky-600 text-white rounded-xl p-5">
        <h2 className="text-2xl font-bold">Key Review — {chapterTitle}</h2>
        <p className="text-violet-100 text-sm mt-1">Fast recall: concept summary, mnemonics, key concepts &amp; equations for a quick pass before the exam.</p>
      </div>

      {equations.length > 0 && (
        <Card title="📐 Equations to Remember">
          <div className="grid gap-3 md:grid-cols-2">
            {equations.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded p-3 bg-slate-50">
                <div className="font-semibold text-slate-900 mb-1">{e.name}</div>
                <div className="text-lg my-1"><Eq tex={e.tex} block /></div>
                {e.note && <div className="text-xs text-slate-600 mt-1">{e.note}</div>}
              </div>
            ))}
          </div>
        </Card>
      )}

      {mnemonics.length > 0 && (
        <Card title="🧠 Mnemonics & Memory Hooks">
          <ul className="space-y-2">
            {mnemonics.map((m, i) => (
              <li key={i} className="border-l-4 border-emerald-400 bg-emerald-50 rounded-r pl-3 py-2 text-sm text-emerald-950"><Inline>{m}</Inline></li>
            ))}
          </ul>
        </Card>
      )}

      {keyConcepts.length > 0 && (
        <Card title="⭐ Key Concepts">
          <ul className="space-y-2">
            {keyConcepts.map((k, i) => (
              <li key={i} className="border-l-4 border-sky-400 bg-sky-50 rounded-r pl-3 py-2 text-sm text-sky-950"><Inline>{k}</Inline></li>
            ))}
          </ul>
        </Card>
      )}

      {conceptSummary.length > 0 && (
        <Card title="📋 Concept Summary">
          <div className="space-y-4">
            {conceptSummary.map((g, i) => (
              <div key={i}>
                <h3 className="font-bold text-slate-900 mb-1.5">{g.section}</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
                  {g.points.map((p, j) => <li key={j}><Inline>{p}</Inline></li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
