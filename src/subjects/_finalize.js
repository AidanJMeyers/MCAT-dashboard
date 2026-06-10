// Shared: turn authored chapter modules (chNN.js with .blocks) into the dashboard chapter shape.
export function finalizeAuthored(ch) {
  const blocks = (ch.blocks || []).map((b, i) => ({
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
