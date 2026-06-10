import React, { useEffect, useState } from 'react';
import { storage } from '../storage';
import { AnchorImage } from './Visual.jsx';
import ContentRenderer from './ContentRenderer.jsx';
import CommentBox from './CommentBox.jsx';

export const confidenceColors = {
  0: 'bg-slate-200 text-slate-500', 1: 'bg-red-500 text-white', 2: 'bg-orange-500 text-white',
  3: 'bg-yellow-400 text-slate-900', 4: 'bg-lime-500 text-white', 5: 'bg-green-600 text-white'
};

export default function StudyBlock({ subjectId, chapterId, block, onStateChange }) {
  const prefix = `studyguide:${subjectId}:ch${chapterId}:block${block.id}`;
  const reviewedKey = `${prefix}:reviewed`;
  const confKey = `${prefix}:confidence`;

  const [reviewed, setReviewed] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const hasRecap = block.summaryPoints && block.summaryPoints.length > 0;
  const [showDetail, setShowDetail] = useState(!hasRecap);

  useEffect(() => {
    (async () => {
      const r = await storage.get(reviewedKey);
      const c = await storage.get(confKey);
      if (r) setReviewed(!!r);
      if (c != null) setConfidence(Number(c) || 0);
    })();
  }, [reviewedKey, confKey]);

  const toggleReviewed = async () => { const nv = !reviewed; setReviewed(nv); await storage.set(reviewedKey, nv); onStateChange?.(); };
  const setConf = async (n) => { setConfidence(n); await storage.set(confKey, n); onStateChange?.(); };

  return (
    <section id={`block-${block.id}`} className="scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
      <header className="px-5 py-4 border-b border-slate-100 flex items-start justify-between flex-wrap gap-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {block.num && <span className="text-slate-400 mr-2">{block.num}</span>}{block.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-1 rounded ${confidenceColors[confidence]}`}>
            {confidence ? `Confidence ${confidence}/5` : 'Not rated'}
          </span>
          {reviewed && <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700 font-semibold">Reviewed ✓</span>}
        </div>
      </header>

      <div className="px-5 py-5 space-y-4">
        {block.goals && block.goals.length > 0 && (
          <details className="text-sm">
            <summary className="cursor-pointer text-slate-500 hover:text-slate-700 font-medium">Learning goals ({block.goals.length})</summary>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-600">
              {block.goals.map((g, i) => <li key={i}>{g}</li>)}
            </ul>
          </details>
        )}

        {/* Anchor figures — first visual content */}
        {block.images && block.images.length > 0 && (
          <div className={block.images.length > 1 ? 'grid sm:grid-cols-2 gap-3' : ''}>
            {block.images.map((img, i) => <AnchorImage key={i} src={img.src} alt={img.alt} caption={img.caption} />)}
          </div>
        )}

        {/* High-yield recap (always visible) */}
        {hasRecap && (
          <div className="border-l-4 border-emerald-400 bg-emerald-50 rounded-r-lg p-4">
            <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">⚡ High-Yield Recap</div>
            <ul className="list-disc ml-5 space-y-1 text-[15px] text-emerald-950">
              {block.summaryPoints.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}

        {/* Full detail (expandable when recap exists) */}
        {hasRecap ? (
          <div>
            <button
              onClick={() => setShowDetail((v) => !v)}
              className="text-sm font-semibold text-sky-700 hover:text-sky-900 flex items-center gap-1"
            >
              {showDetail ? '▲ Hide full detail' : `▼ Show full detail (${block.nodes.length} sections)`}
            </button>
            {showDetail && <div className="mt-4 pt-4 border-t border-slate-100"><ContentRenderer nodes={block.nodes} /></div>}
          </div>
        ) : (
          <ContentRenderer nodes={block.nodes} />
        )}
      </div>

      <footer className="px-5 py-4 border-t border-slate-100 bg-slate-50 rounded-b-xl">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" checked={reviewed} onChange={toggleReviewed} className="w-5 h-5 accent-emerald-600" />
            <span className="text-sm font-medium text-slate-700">I've reviewed this</span>
          </label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 mr-1">Confidence:</span>
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} onClick={() => setConf(n)} title={`Rate ${n}/5`}
                className={`w-8 h-8 rounded-full text-sm font-bold transition ${confidence >= n ? confidenceColors[n] : 'bg-slate-200 text-slate-400 hover:bg-slate-300'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <CommentBox storageKey={prefix} label="Note" onChange={onStateChange} />
      </footer>
    </section>
  );
}
