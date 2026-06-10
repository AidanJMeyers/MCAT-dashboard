// window.storage wrapper with localStorage fallback + MCAT helpers.
const hasWindowStorage = typeof window !== 'undefined' && window.storage;
const backend = hasWindowStorage
  ? {
      get: async (k) => { try { return await window.storage.get(k); } catch { return null; } },
      set: async (k, v) => { try { return await window.storage.set(k, v); } catch { return null; } },
      remove: async (k) => { try { return await window.storage.remove(k); } catch { return null; } },
      keys: async () => { try { return (await window.storage.keys?.()) ?? []; } catch { return []; } }
    }
  : {
      get: async (k) => { try { const v = localStorage.getItem(k); return v == null ? null : JSON.parse(v); } catch { return null; } },
      set: async (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
      remove: async (k) => { try { localStorage.removeItem(k); } catch {} },
      keys: async () => { try { return Object.keys(localStorage); } catch { return []; } }
    };
export const storage = backend;

export async function resetAll() {
  const all = await storage.keys();
  await Promise.all(all.filter((k) => k.startsWith('studyguide:')).map((k) => storage.remove(k)));
}
export async function resetSubject(subjectId) {
  const all = await storage.keys();
  await Promise.all(all.filter((k) => k.startsWith(`studyguide:${subjectId}:`)).map((k) => storage.remove(k)));
}
export async function subjectProgress(subject) {
  const total = subject.chapters.reduce((a, c) => a + c.blocks.length, 0);
  if (!total) return { reviewed: 0, total: 0, pct: 0, avgConf: 0, rated: 0 };
  const all = await storage.keys();
  const pre = `studyguide:${subject.id}:`;
  const revKeys = all.filter((k) => k.startsWith(pre) && k.endsWith(':reviewed'));
  const confKeys = all.filter((k) => k.startsWith(pre) && k.endsWith(':confidence'));
  const revVals = await Promise.all(revKeys.map((k) => storage.get(k)));
  const confVals = (await Promise.all(confKeys.map((k) => storage.get(k)))).map(Number).filter((n) => n > 0);
  const reviewed = revVals.filter(Boolean).length;
  const avgConf = confVals.length ? confVals.reduce((a, b) => a + b, 0) / confVals.length : 0;
  return { reviewed, total, pct: Math.round((reviewed / total) * 100), avgConf, rated: confVals.length };
}
