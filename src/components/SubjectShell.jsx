import React, { useEffect, useState, useRef } from 'react';
import ChapterView from './ChapterView.jsx';
import ReviewLaterView from './ReviewLaterView.jsx';
import { ACCENTS } from '../data/accents.js';
import { storage, resetSubject } from '../storage';

export default function SubjectShell({ subject, subjects, onBack, startChapterId, startAnchor }) {
  const a = ACCENTS[subject.accent] || ACCENTS.sky;
  const [active, setActive] = useState(startChapterId ? `ch${startChapterId}` : `ch${subject.chapters[0]?.id}`);
  const [counts, setCounts] = useState({});
  const [noteCount, setNoteCount] = useState(0);
  const [showReset, setShowReset] = useState(false);
  const pendingAnchor = useRef(startAnchor || null);

  const refresh = async () => {
    const all = await storage.keys();
    const pre = `studyguide:${subject.id}:`;
    const c = {};
    for (const ch of subject.chapters) {
      const revKeys = all.filter((k) => k.startsWith(`${pre}ch${ch.id}:block`) && k.endsWith(':reviewed'));
      const vals = await Promise.all(revKeys.map((k) => storage.get(k)));
      c[ch.id] = { reviewed: vals.filter(Boolean).length, total: ch.blocks.length };
    }
    setCounts(c);
    const noteKeys = all.filter((k) => k.startsWith(pre) && k.endsWith(':comment'));
    const nvals = await Promise.all(noteKeys.map((k) => storage.get(k)));
    setNoteCount(nvals.filter((v) => v && String(v).trim()).length);
  };
  useEffect(() => { refresh(); const id = setInterval(refresh, 1500); return () => clearInterval(id); }, [subject.id]);

  // scroll to a block anchor after navigating from Review Later
  useEffect(() => {
    if (pendingAnchor.current && active.startsWith('ch')) {
      const anchor = pendingAnchor.current; pendingAnchor.current = null;
      setTimeout(() => { const el = document.getElementById(`block-${anchor}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
    }
  }, [active]);

  const goReviewNav = (sid, chId, anchor) => { pendingAnchor.current = anchor; setActive(`ch${chId}`); };
  const currentChapter = subject.chapters.find((c) => `ch${c.id}` === active);

  const ChapterButtons = () => (
    <>
      {subject.chapters.map((ch) => {
        const p = counts[ch.id] || { reviewed: 0, total: ch.blocks.length };
        const isActive = active === `ch${ch.id}`;
        return (
          <button key={ch.id} onClick={() => setActive(`ch${ch.id}`)}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${isActive ? a.solid + ' text-white shadow' : 'text-slate-300 hover:bg-slate-800'}`}>
            <span className={`text-xs font-bold mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>{ch.id}</span>
            <span className="flex-1">
              <div className="font-semibold leading-tight">{ch.shortTitle}</div>
              <div className={`text-[10px] mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>{p.reviewed}/{p.total} reviewed</div>
            </span>
          </button>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="hidden md:flex flex-col w-72 bg-slate-900 text-slate-200 min-h-screen sticky top-0 max-h-screen overflow-y-auto scrollbar-thin">
        <div className="p-4 border-b border-slate-800">
          <button onClick={onBack} className="text-xs text-slate-400 hover:text-white flex items-center gap-1 mb-3">← All subjects</button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{subject.icon}</span>
            <div>
              <div className="text-lg font-bold text-white leading-tight">{subject.name}</div>
              <div className="text-[10px] text-slate-400">{subject.source}</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <ChapterButtons />
          <div className="my-2 border-t border-slate-800" />
          <button onClick={() => setActive('review')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition flex items-start gap-3 ${active === 'review' ? 'bg-amber-500 text-white shadow' : 'text-slate-300 hover:bg-slate-800'}`}>
            <span className="text-base">📝</span>
            <span className="flex-1"><div className="font-semibold">Review Later</div><div className={`text-[10px] mt-0.5 ${active === 'review' ? 'text-amber-100' : 'text-slate-500'}`}>{noteCount} note{noteCount === 1 ? '' : 's'}</div></span>
          </button>
        </nav>
        <div className="p-3 border-t border-slate-800">
          <button onClick={() => setShowReset(true)} className="w-full px-3 py-2 text-xs font-semibold bg-red-900/40 text-red-300 rounded hover:bg-red-900/70">Reset {subject.short} progress</button>
        </div>
      </aside>

      {/* Mobile top nav */}
      <div className="md:hidden fixed top-0 inset-x-0 z-20 bg-slate-900 text-white overflow-x-auto scrollbar-thin flex gap-1 px-2 py-2 border-b border-slate-800">
        <button onClick={onBack} className="whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold bg-slate-700">←</button>
        {subject.chapters.map((ch) => {
          const p = counts[ch.id] || { reviewed: 0, total: ch.blocks.length };
          const isActive = active === `ch${ch.id}`;
          return (
            <button key={ch.id} onClick={() => setActive(`ch${ch.id}`)} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${isActive ? a.solid : 'bg-slate-800'}`}>Ch{ch.id} · {p.reviewed}/{p.total}</button>
          );
        })}
        <button onClick={() => setActive('review')} className={`whitespace-nowrap px-3 py-1.5 rounded text-xs font-semibold ${active === 'review' ? 'bg-amber-500' : 'bg-slate-800'}`}>📝 {noteCount}</button>
      </div>

      <main className="flex-1 min-w-0 md:pt-0 pt-14">
        {active === 'review'
          ? <ReviewLaterView subjects={subjects} only={subject.id} onNavigate={goReviewNav} />
          : currentChapter
            ? <ChapterView subject={subject} chapter={currentChapter} />
            : <div className="p-10 text-slate-500">Select a chapter.</div>}
        <footer className="max-w-5xl mx-auto px-4 py-10 text-center text-xs text-slate-400">{subject.name} · {subject.source} · progress saved automatically</footer>
      </main>

      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset {subject.name} progress?</h3>
            <p className="text-sm text-slate-600 mb-5">This clears review checkboxes, confidence ratings, notes, and practice answers for {subject.name} only. Other subjects are untouched. This cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowReset(false)} className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300">Cancel</button>
              <button onClick={async () => { await resetSubject(subject.id); setShowReset(false); window.location.reload(); }} className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700">Reset {subject.short}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
