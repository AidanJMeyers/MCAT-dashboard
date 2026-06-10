import React, { useState, useEffect } from 'react';
import Landing from './components/Landing.jsx';
import SubjectShell from './components/SubjectShell.jsx';
import ReviewLaterView from './components/ReviewLaterView.jsx';
import { SUBJECTS, getSubject } from './data/subjects.js';
import { resetAll } from './storage';

const VIEW_KEY = 'mcat:view';

export default function App() {
  const [view, setView] = useState(() => {
    try { return JSON.parse(localStorage.getItem(VIEW_KEY)) || { kind: 'landing' }; }
    catch { return { kind: 'landing' }; }
  });
  const [showReset, setShowReset] = useState(false);

  useEffect(() => { try { localStorage.setItem(VIEW_KEY, JSON.stringify(view)); } catch {} }, [view]);

  const openSubject = (id, chapterId, anchor) => { window.scrollTo(0, 0); setView({ kind: 'subject', id, chapterId, anchor }); };

  if (view.kind === 'subject') {
    const subject = getSubject(view.id);
    if (subject && subject.status === 'ready') {
      return (
        <SubjectShell
          subject={subject} subjects={SUBJECTS}
          startChapterId={view.chapterId} startAnchor={view.anchor}
          onBack={() => { window.scrollTo(0, 0); setView({ kind: 'landing' }); }}
        />
      );
    }
  }

  if (view.kind === 'review') {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <button onClick={() => setView({ kind: 'landing' })} className="text-sm text-slate-300 hover:text-white">← All subjects</button>
          <span className="text-sm font-semibold">Review Later — all subjects</span>
        </div>
        <ReviewLaterView subjects={SUBJECTS} onNavigate={(sid, chId, anchor) => openSubject(sid, chId, anchor)} />
      </div>
    );
  }

  return (
    <>
      <Landing
        subjects={SUBJECTS}
        onOpenSubject={(id) => openSubject(id)}
        onOpenReview={() => { window.scrollTo(0, 0); setView({ kind: 'review' }); }}
        onReset={() => setShowReset(true)}
      />
      {showReset && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Reset ALL progress?</h3>
            <p className="text-sm text-slate-600 mb-5">This clears every review checkbox, confidence rating, note, and practice answer across all seven subjects. This cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowReset(false)} className="px-4 py-2 text-sm font-semibold bg-slate-200 text-slate-700 rounded hover:bg-slate-300">Cancel</button>
              <button onClick={async () => { await resetAll(); setShowReset(false); window.location.reload(); }} className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded hover:bg-red-700">Reset Everything</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
