// Transform Kaplan Biology per-chapter JSON into the dashboard chapter shape.
import ch01 from './ch01.json';
import ch02 from './ch02.json';
import ch03 from './ch03.json';
import ch04 from './ch04.json';
import ch05 from './ch05.json';
import ch06 from './ch06.json';
import ch07 from './ch07.json';
import ch08 from './ch08.json';
import ch09 from './ch09.json';
import ch10 from './ch10.json';
import ch11 from './ch11.json';
import ch12 from './ch12.json';

const RAW = [ch01, ch02, ch03, ch04, ch05, ch06, ch07, ch08, ch09, ch10, ch11, ch12];

// High-yield equations to remember (KaTeX), added per chapter id.
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

function transform(ch) {
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

  // Mnemonics & Key Concepts surfaced for fast recall
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
      q: q.q,
      type: 'mcq',
      choices: q.choices,
      correct: q.correct,
      explanation: q.explanation
    }))
  };
}

export const chapters = RAW.map(transform);
