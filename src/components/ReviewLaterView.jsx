import React, { useEffect, useState } from 'react';
import { storage } from '../storage';

// Surfaces every block/question note. `only` (subject id) optionally filters to one subject.
export default function ReviewLaterView({ subjects, only, onNavigate }) {
  const [notes, setNotes] = useState([]);

  const load = async () => {
    const allKeys = await storage.keys();
    const commentKeys = allKeys.filter((k) => k.endsWith(':comment') && k.startsWith('studyguide:'));
    const entries = await Promise.all(commentKeys.map(async (k) => {
      const text = await storage.get(k);
      if (!text || !String(text).trim()) return null;
      const ts = await storage.get(k.replace(/:comment$/, ':comment_ts'));
      return { key: k.replace(/:comment$/, ''), text, ts };
    }));
    setNotes(entries.filter(Boolean));
  };
  useEffect(() => { load(); }, []);

  const parse = (key) => {
    let m = key.match(/^studyguide:([^:]+):ch(\d+):block(.+)$/);
    if (m) {
      const [, sid, chId, blockId] = m;
      const subj = subjects.find((s) => s.id === sid);
      const ch = subj?.chapters.find((c) => c.id === Number(chId));
      const block = ch?.blocks.find((b) => b.id === blockId);
      return { sid, subjName: subj?.name || sid, group: ch?.title || `Chapter ${chId}`,
        label: `📘 ${block ? (block.num ? block.num + ' ' : '') + block.title : blockId}`, chId: Number(chId), anchor: blockId };
    }
    m = key.match(/^studyguide:([^:]+):ch(\d+):q(\d+)$/);
    if (m) {
      const [, sid, chId, qIdx] = m;
      const subj = subjects.find((s) => s.id === sid);
      const ch = subj?.chapters.find((c) => c.id === Number(chId));
      const q = ch?.questions[Number(qIdx)];
      return { sid, subjName: subj?.name || sid, group: ch?.title || `Chapter ${chId}`,
        label: `❓ Q${Number(qIdx) + 1}: ${(q?.q || '').slice(0, 70)}${q && q.q.length > 70 ? '…' : ''}`, chId: Number(chId) };
    }
    return { sid: 'other', subjName: 'Other', group: 'Other', label: key };
  };

  const filtered = only ? notes.filter((n) => parse(n.key).sid === only) : notes;
  const grouped = {};
  filtered.forEach((n) => {
    const p = parse(n.key);
    const gk = `${p.subjName} — ${p.group}`;
    (grouped[gk] ||= []).push({ ...n, ...p });
  });

  const exportMarkdown = () => {
    const lines = ['# MCAT Review Later Notes', ''];
    Object.entries(grouped).forEach(([group, items]) => {
      lines.push(`## ${group}`, '');
      items.forEach((n) => { lines.push(`### ${n.label}`); if (n.ts) lines.push(`*Saved: ${new Date(n.ts).toLocaleString()}*`, ''); lines.push(n.text, ''); });
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `mcat-review-later-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl p-5 mb-6 shadow-lg flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold">📝 Review Later</h1>
          <p className="text-amber-100 text-sm mt-1">Everything you flagged with a note. {filtered.length} item{filtered.length === 1 ? '' : 's'} saved.</p>
        </div>
        {filtered.length > 0 && (
          <button onClick={exportMarkdown} className="px-4 py-2 bg-white text-orange-700 rounded font-semibold hover:bg-orange-50 text-sm">Export as Markdown</button>
        )}
      </div>
      {filtered.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center text-slate-500">No notes yet. Add a note on any block or question and it will appear here.</div>
      )}
      <div className="space-y-6">
        {Object.entries(grouped).map(([group, items]) => (
          <div key={group} className="bg-white border border-slate-200 rounded-xl shadow-sm">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">{group}</h2>
              <span className="text-xs text-slate-500">{items.length} note{items.length === 1 ? '' : 's'}</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {items.map((n, i) => (
                <li key={i} className="px-5 py-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <button onClick={() => onNavigate?.(n.sid, n.chId, n.anchor)} className="text-left text-sm font-semibold text-sky-700 hover:text-sky-900 hover:underline flex-1">{n.label}</button>
                    {n.ts && <span className="text-xs text-slate-400 shrink-0">{new Date(n.ts).toLocaleDateString()}</span>}
                  </div>
                  <div className="text-sm text-slate-700 whitespace-pre-wrap bg-amber-50 border-l-2 border-amber-300 pl-3 py-2 rounded-r">{n.text}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
