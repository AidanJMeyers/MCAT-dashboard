// Biology chapters. Authored modules (chNN.js) carry the rich markdown recap/detail
// and pull figures/goals/questions/concept-summary from the matching chNN.json
// (already-correct mechanical extraction). Chapters not yet re-authored fall back to
// transforming the raw JSON so the build always stays green.
import ch01 from './ch01.js';
import ch02 from './ch02.js';
import ch03 from './ch03.js';
import ch04 from './ch04.js';
import ch05 from './ch05.js';
import ch06 from './ch06.js';
import ch07 from './ch07.js';
import ch08 from './ch08.js';
import ch09 from './ch09.js';
import ch10 from './ch10.js';
import ch11 from './ch11.js';
import ch12 from './ch12.js';

const RAW = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12];

// High-yield equations to remember (KaTeX), added per chapter id (legacy JSON chapters).
const EQUATIONS = {
  7: [
    { name: 'Cardiac output', tex: 'CO = HR \\times SV', note: 'Volume of blood pumped per minute = heart rate × stroke volume.' },
    { name: 'Stroke volume', tex: 'SV = EDV - ESV', note: 'End-diastolic minus end-systolic volume.' }
  ],
  10: [
    { name: 'Renal clearance', tex: 'C = \\dfrac{U \\times V}{P}', note: 'U = urine concentration, V = urine flow rate, P = plasma concentration.' }
  ],
  12: [
    { name: 'Hardy–Weinberg allele freqs', tex: 'p + q = 1', note: 'p = dominant allele freq, q = recessive allele freq.' },
    { name: 'Hardy–Weinberg genotype freqs', tex: 'p^{2} + 2pq + q^{2} = 1', note: 'p² = homozygous dominant, 2pq = heterozygous, q² = homozygous recessive.' }
  ]
};

const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

// Build the final chapter shape from an authored module (already has .blocks with recap/detail).
function finalizeAuthored(ch) {
  const blocks = ch.blocks.map((b, i) => ({
    id: b.id || `s${i + 1}`,
    num: b.num || '',
    title: b.title,
    goals: b.goals || [],
    images: b.images || [],
    svgs: b.svgs || [],
    recap: b.recap || '',
    detail: b.detail || ''
  }));
  return {
    id: ch.id,
    title: `Chapter ${ch.id}: ${ch.title}`,
    shortTitle: ch.title,
    subtitle: ch.subtitle || blocks.map((b) => `${b.num} ${b.title}`.trim()).join('  ·  '),
    blocks,
    keyReview: {
      conceptSummary: ch.keyReview?.conceptSummary || [],
      mnemonics: ch.keyReview?.mnemonics || [],
      keyConcepts: ch.keyReview?.keyConcepts || [],
      equations: ch.keyReview?.equations || []
    },
    questions: ch.questions || []
  };
}

// Transform a legacy raw-JSON chapter into the final shape (flat nodes).
function transformRaw(ch) {
  const sumByTitle = {};
  (ch.conceptSummary || []).forEach((g) => { sumByTitle[norm(g.section)] = g.points; });

  const blocks = ch.sections.map((s, i) => {
    const m = s.title.match(/^([\d.]+)\s+(.*)$/);
    const num = m ? m[1] : '';
    const name = m ? m[2] : s.title;
    return {
      id: `s${i + 1}`,
      num,
      title: name,
      goals: s.goals || [],
      images: s.figures || [],
      summaryPoints: sumByTitle[norm(name)] || [],
      nodes: s.nodes || []
    };
  });

  const mnemonics = [];
  const keyConcepts = [];
  ch.sections.forEach((s) => (s.nodes || []).forEach((n) => {
    if (n.t === 'callout' && n.title === 'Mnemonic') mnemonics.push(n.x);
    if (n.t === 'callout' && n.title === 'Key Concept') keyConcepts.push(n.x);
  }));

  return {
    id: ch.id,
    title: `Chapter ${ch.id}: ${ch.title}`,
    shortTitle: ch.title,
    subtitle: blocks.map((b) => `${b.num} ${b.title}`).join('  ·  '),
    blocks,
    keyReview: {
      conceptSummary: ch.conceptSummary || [],
      mnemonics,
      keyConcepts,
      equations: EQUATIONS[ch.id] || []
    },
    questions: (ch.questions || []).map((q) => ({
      q: q.q, type: 'mcq', choices: q.choices, correct: q.correct, explanation: q.explanation
    }))
  };
}

export const chapters = RAW.map((ch) => (ch.blocks ? finalizeAuthored(ch) : transformRaw(ch)));
