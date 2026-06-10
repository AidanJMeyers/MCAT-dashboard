import React, { useEffect, useState } from 'react';
import ProgressRing, { CONF_COLORS } from './ProgressRing.jsx';
import { ACCENTS } from '../data/accents.js';
import { subjectProgress } from '../storage';

export default function Landing({ subjects, onOpenSubject, onOpenReview, onReset }) {
  const [prog, setProg] = useState({});

  const refresh = async () => {
    const out = {};
    await Promise.all(subjects.map(async (s) => {
      if (s.status === 'ready') out[s.id] = await subjectProgress(s);
    }));
    setProg(out);
  };
  useEffect(() => { refresh(); const id = setInterval(refresh, 2000); return () => clearInterval(id); }, []);

  const ready = subjects.filter((s) => s.status === 'ready');
  const totReviewed = ready.reduce((a, s) => a + (prog[s.id]?.reviewed || 0), 0);
  const totBlocks = ready.reduce((a, s) => a + (prog[s.id]?.total || 0), 0);
  const overallPct = totBlocks ? Math.round((totReviewed / totBlocks) * 100) : 0;

  return (
    <div className="min-h-screen">
      <div className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sky-400 font-bold">Aidan's MCAT Prep</div>
              <h1 className="text-4xl font-bold mt-1">MCAT Study Dashboard</h1>
              <p className="text-slate-300 mt-2 max-w-2xl">Seven disciplines, one place. Full content review with reviewed / confidence / note tracking on every block. Pick a subject to dive in — your progress saves automatically.</p>
            </div>
            <div className="text-center bg-slate-800 rounded-xl px-6 py-4">
              <div className="text-3xl font-bold text-white">{overallPct}%</div>
              <div className="text-xs text-slate-400 mt-1">{totReviewed}/{totBlocks} blocks reviewed</div>
            </div>
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <button onClick={onOpenReview} className="px-4 py-2 text-sm font-semibold bg-amber-500 text-white rounded hover:bg-amber-600">📝 Review Later</button>
            <button onClick={onReset} className="px-4 py-2 text-sm font-semibold bg-slate-700 text-slate-200 rounded hover:bg-slate-600">Reset all progress</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => {
            const a = ACCENTS[s.accent] || ACCENTS.sky;
            const p = prog[s.id];
            const isReady = s.status === 'ready';
            const conf = p?.avgConf || 0;
            return (
              <button
                key={s.id}
                onClick={() => isReady && onOpenSubject(s.id)}
                disabled={!isReady}
                className={`text-left bg-white border border-slate-200 rounded-2xl shadow-sm p-5 transition ${isReady ? 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : 'opacity-70 cursor-not-allowed'}`}
              >
                <div className={`h-1.5 -mx-5 -mt-5 mb-4 rounded-t-2xl bg-gradient-to-r ${a.grad}`} />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="text-lg font-bold text-slate-900 truncate">{s.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600 mt-2 leading-snug">{s.blurb}</p>
                  </div>
                  {isReady ? (
                    <ProgressRing pct={p?.pct || 0} color={CONF_COLORS[Math.round(conf)] && conf ? CONF_COLORS[Math.round(conf)] : '#0284c7'} size={60} />
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400 bg-slate-100 px-2 py-1 rounded-full whitespace-nowrap">Coming soon</span>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{isReady ? `${s.chapters.length} chapters` : 'In the build queue'}</span>
                  {isReady && (
                    <span className="flex items-center gap-3">
                      <span className="text-slate-600">{p?.reviewed || 0}/{p?.total || 0} reviewed</span>
                      {conf > 0 && (
                        <span className="flex items-center gap-1 text-slate-600">
                          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: CONF_COLORS[Math.round(conf)] }} />
                          {conf.toFixed(1)}/5
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs text-slate-400 mt-10">Content from Kaplan MCAT Review · built for personal study · progress stored locally in your browser.</p>
      </div>
    </div>
  );
}
