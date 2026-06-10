// CARS Chapter 1 — About CARS. Authored as a reading/reasoning STRATEGY chapter
// to the rich-formatting quality bar. Figures and section titles come from ch01.json;
// the recap/detail markdown is authored here. CARS questions are passage-bound and
// excluded, so `questions: []`.
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }
const goals = (si) => S[si].goals || [];

export default {
  id: 1,
  title: 'About CARS',
  subtitle: 'The CARS section · passages (humanities & social sciences) · the three question categories',

  blocks: [
    /* ───────────────────────── 1.1 The CARS Section ───────────────────────── */
    {
      id: 's1', num: '1.1', title: 'The CARS Section',
      goals: goals(0),
      recap: `
- **CARS = Critical Analysis and Reasoning Skills** — the one MCAT section with **no science content**; everything you need is *inside the passage*.
- **Format:** **90 minutes**, **9 passages**, **~5–7 questions each**, **53 questions** total — pace at roughly **10 minutes per passage**.
- **Passages run 500–600 words** — short, but *denser* and more argument-driven than the science passages.
- Built to test **medical-school skills**: not just *comprehension* but **analysis of rhetorical/logical structure** and reasoning about **outside information**.
`,
      detail: `
#### What the CARS section is
The **Critical Analysis and Reasoning Skills (CARS)** section will feel familiar at first — like the standardized reading sections you have taken before (SAT, ACT), it gives you **passages to read** followed by **multiple-choice questions**. But the resemblance is superficial: CARS is engineered to assess the **analytical and reasoning skills medical school demands**, not basic reading comprehension.

#### The numbers (memorize these cold)

| Parameter | Value |
|---|---|
| **Time** | **90 minutes** |
| **Passages** | **9** |
| **Questions per passage** | **~5–7** |
| **Total questions** | **53** |
| **Passage length** | **500–600 words** |
| **Pacing target** | **~10 min/passage** (90 min ÷ 9) |

The passages are **longer than the science passages** elsewhere on the MCAT, but still short — the challenge is *depth*, not *length*.

:::expertise
At **~10 minutes per passage**, budget roughly **3–4 minutes reading** and **5–6 minutes answering**. Falling behind on one passage steals time from every passage after it — protect the clock.
:::

#### Why CARS is harder than the SAT/ACT
Unlike prior reading-comprehension sections, CARS passages are **multifaceted**:

- **Advanced vocabulary** — dense, academic word choice.
- **Varied writing styles** — different authors, tones, and rhetorical strategies.
- **Higher-level thought** — you must reason *about* the text, not just recall it.

To answer the questions you must go **beyond merely comprehending the content**. You will need to:

1. **Analyze the rhetorical structure** — *how* the author builds the argument.
2. **Analyze the logical structure** — what claims support what conclusions.
3. **Assess outside information** — how the passage *impacts*, or is *impacted by*, ideas not stated in it.

:::keyconcept
**CARS rewards no outside knowledge.** Every correct answer is supported by the passage itself. Bringing in your own opinions or facts is the single most common way to talk yourself into a wrong answer.
:::

![Figure 1.1 — CARS at a glance: 90 minutes, 9 passages, 53 questions.](${fig(0, 0).src})
`
    },

    /* ───────────────────────────── 1.2 Passages ───────────────────────────── */
    {
      id: 's2', num: '1.2', title: 'Passages',
      goals: goals(1),
      recap: `
- CARS passages are drawn from the **humanities** and **social sciences** — *never* the natural sciences.
- The split is roughly **50/50**: about **half humanities**, **half social sciences** (passages and questions alike).
- Sources are real **books, journals, and academic publications** — the kind you would meet in a college course.
- **Studies of Diverse Cultures** is the one discipline that can appear under *either* category.
`,
      detail: `
#### Where the passages come from
CARS passages are multi-paragraph excerpts that demand **active, critical reading**. They are pulled from a wide array of disciplines across **two domains** — the **humanities** and the **social sciences** — and are selected from **books, journals, and other academic publications**, the same kinds of sources you would encounter in a college classroom.

#### The two domains (≈ 50/50 split)
About **half** of the passages (and their questions) on Test Day are **humanities**; the other **half** are **social sciences**.

| **Humanities** | **Social Sciences** |
|---|---|
| Architecture | Anthropology |
| Art | Archaeology |
| Dance | Economics |
| Ethics | Education |
| Literature | Geography |
| Music | History |
| Philosophy | Linguistics |
| Popular Culture | Political Science |
| Religion | Population Health |
| Theater | Psychology |
| Studies of Diverse Cultures\\* | Sociology |
| | Studies of Diverse Cultures\\* |

\\*_**Studies of Diverse Cultures** can be tested in **both** humanities and social sciences passages._

_Source: AAMC, The Official Guide to the MCAT 2015 Exam (Washington, D.C.: AAMC, 2014), 311–22._

:::expertise
**Do not try to memorize the discipline list** — you can't predict your passages, and the topic doesn't change your strategy. The point of the table is to show you the *range*: expect anything from a philosophy treatise to an economics study. Get comfortable reading **outside your comfort zone**.
:::

:::keyconcept
**No prior expertise is assumed.** A passage on music theory or political science is solvable by a reader who knows nothing about the field — the passage supplies everything. Treat unfamiliar subject matter as a feature, not a threat.
:::

#### The science-major trap
For students who have **focused exclusively on the sciences**, information in CARS fields is often presented in a **strikingly different way** — qualitative, argumentative, interpretive — that can feel overwhelming at first. The fix is **method, not background knowledge**: learning the **writing styles** these disciplines use and reading every passage **with purpose** makes them far more manageable.

:::mnemonic
**"Half & Half"** — picture a 50/50 latte: **half Humanities, half Social Sciences**. If you can't recall which bucket a topic sits in, it doesn't matter for strategy — every passage gets the *same* active-reading approach.
:::
`
    },

    /* ─────────────────────── 1.3 Question Categories ─────────────────────── */
    {
      id: 's3', num: '1.3', title: 'Question Categories',
      goals: goals(2),
      recap: `
- The AAMC sorts every CARS question into **three categories**: **Foundations of Comprehension**, **Reasoning Within the Text**, and **Reasoning Beyond the Text**.
- **Breakdown:** **Foundations ≈ 30% (16 Q)** · **Within ≈ 30% (16 Q)** · **Beyond ≈ 40% (21 Q)** — *Beyond the Text is the single biggest bucket.*
- Difficulty climbs left → right: **comprehend → infer/relate → extrapolate to new contexts.**
- **Foundations** = what the text *says*; **Within** = what the text *implies/how its parts connect*; **Beyond** = applying the text to *new* information.
`,
      detail: `
#### The three categories at a glance
The AAMC has identified **three question categories** that progressively test deeper critical thinking. Roughly **60%** of questions stay *inside* the passage (Foundations + Within); the remaining **40%** push *beyond* it.

| Category | Tests | Approx. % | ~# Questions |
|---|---|---|---|
| **Foundations of Comprehension** | Understanding **what you read** | **~30%** | **16** |
| **Reasoning Within the Text** | **Inferences** & how passage parts **relate** | **~30%** | **16** |
| **Reasoning Beyond the Text** | **Extrapolating** to / integrating **new contexts** | **~40%** | **21** |

#### Foundations of Comprehension (~30%, 16 Q)
These are the **most straightforward** questions — closest to the reading comprehension you've seen on past tests. They ask only for **understanding what you have read**:

- **Main ideas** of the passage
- **Specific details** stated within the passage
- The **purpose** of a given part of the passage
- The **likely meaning of a word or phrase** based on context

The four question *types* in this category (developed later in *MCAT CARS Review*, Ch. 9):

- **Main Idea**
- **Detail**
- **Function**
- **Definition-in-Context**

#### Reasoning Within the Text (~30%, 16 Q)
These demand **greater thought** than Foundations questions because the answer is **not stated outright**. They ask you to:

- Draw **inferences** — *unstated* parts of an argument that **logically must be true** given the information provided.
- Determine **how one piece of information relates to another** — e.g., recognizing a statement as **evidence supporting a conclusion**.

Developed further in *MCAT CARS Review*, Ch. 10.

:::keyconcept
A valid **inference** in CARS is something the passage **forces** to be true — not merely something that *could* be true or that *sounds* reasonable. If you can imagine the author disagreeing, it is not a sound inference.
:::

#### Reasoning Beyond the Text (~40%, 21 Q)
The **largest** category, focused on **two specific skills**:

1. **Extrapolation** — taking information from the passage and placing it into a **new context**.
2. **Integration** — judging how **new information** would relate to and **affect** the concepts in the passage (would it *strengthen* or *weaken* the argument?).

The two main question *types* (developed in *MCAT CARS Review*, Ch. 11):

- **Apply**
- **Strengthen–Weaken (Beyond the Passage)**

(Compare with the *Within the Text* counterparts: **Inference** and **Strengthen–Weaken Within the Passage**.)

:::expertise
**Beyond the Text is worth the most points (~40%)**, so it deserves the most practice. The recurring move is *hypothetical*: "**Suppose** a new fact were true — what happens to the author's argument?" Train yourself to map outside scenarios back onto the passage's logic.
:::

:::mnemonic
**"In → Within → Beyond"** tracks the three categories by *where the answer lives*:
- **Foundations** = answer is **In** the text (it says it).
- **Reasoning Within** = answer is **between the lines, still inside** the passage (it implies it / its parts connect).
- **Reasoning Beyond** = answer requires stepping **outside** the passage (apply it / test it against new info).
:::

:::mnemonic
**Percent split — "30 / 30 / 40":** the *easy* and *medium* in-passage categories are tied at **30%** each, and the *hardest* out-of-passage category is the biggest at **40%**. Difficulty and weight both rise as you go.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [
      {
        section: 'The CARS Section',
        points: [
          '**CARS** has **no science content** — it tests reading and reasoning skills relevant to medical school.',
          'Format: **90 min · 9 passages · ~5–7 Q each · 53 Q total**; passages are **500–600 words**.',
          'Pace at **~10 minutes per passage**; protect the clock so one slow passage doesn\'t sink the rest.',
          'You must **analyze rhetorical/logical structure** and reason about **outside information** — not just comprehend.'
        ]
      },
      {
        section: 'Passages',
        points: [
          'Passages come from the **humanities** and **social sciences** — never the natural sciences.',
          'The split is roughly **50/50** humanities vs. social sciences.',
          'Sources are real **books, journals, and academic publications**; **no prior expertise** is assumed.',
          '**Studies of Diverse Cultures** is the one discipline that can fall under **either** domain.'
        ]
      },
      {
        section: 'Question Categories',
        points: [
          'Three categories: **Foundations of Comprehension**, **Reasoning Within the Text**, **Reasoning Beyond the Text**.',
          'Breakdown: **~30% / ~30% / ~40%** → **16 / 16 / 21** questions.',
          '**Foundations** = what the text says; **Within** = inferences & how parts relate; **Beyond** = apply to new contexts & weigh new information.',
          'Difficulty and point-weight both increase from Foundations → Beyond.'
        ]
      }
    ],
    mnemonics: [
      '**"9 · 53 · 90"** — **9** passages, **53** questions, **90** minutes. That math sets your **~10 min/passage** pacing.',
      '**"Half & Half"** — passages split **50/50** between **Humanities** and **Social Sciences**; strategy is identical either way.',
      '**"In → Within → Beyond"** — Foundations answer is *in* the text; Reasoning Within is *between the lines, still inside*; Reasoning Beyond steps *outside* to new contexts.',
      '**"30 / 30 / 40"** — the two in-passage categories tie at **30%**; the out-of-passage category is the biggest at **40%**. Weight rises with difficulty.',
      '**Foundations = the four "D-words" plus Main Idea:** **D**etail, **D**efinition-in-Context, **F**unction, **M**ain Idea — pure comprehension, the SAT-like questions.',
      '**"Beyond is biggest"** — Reasoning Beyond the Text is worth the most (~40%), so weight your practice toward **Apply** and **Strengthen–Weaken (Beyond the Passage)** items.'
    ],
    keyConcepts: [
      '**CARS rewards zero outside knowledge.** Every correct answer is grounded in the passage; importing your own facts or opinions is a top wrong-answer trap.',
      '**A sound inference is one the passage *forces* to be true** — not merely plausible. If the author could disagree, it is not a valid inference.',
      '**Topic doesn\'t change strategy.** Whether the passage is on philosophy, economics, or art, you apply the *same* active, purposeful reading method — unfamiliar subject matter is expected.',
      '**Reasoning Beyond the Text (~40%) is the highest-yield category.** Its core move is hypothetical: "if this new fact were true, would it strengthen or weaken the author\'s argument?"'
    ],
    equations: []
  },

  questions: []
};
