// CARS Chapter 4 — Outlining the Passage. STRATEGY chapter (not science).
// Figures come from ch04.json; only fig(0,1) and fig(0,2) are real content figures
// (the Kaplan Method diagrams). fig(0,0) is a decorative chapter-cover image (skipped).
// recap/detail markdown is authored here. questions: [] per CARS override.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 4,
  title: 'Outlining the Passage',
  subtitle: 'The Kaplan Method for CARS Passages · reverse-engineering the author’s outline · practicing the strategy',

  blocks: [
    /* ───────────── 4.1 The Kaplan Method for CARS Passages ───────────── */
    {
      id: 's1', num: '4.1', title: 'The Kaplan Method for CARS Passages',
      goals: [
        'Apply the four-step Kaplan Method for CARS Passages: Scan, Read, Label, Reflect',
        'Use the Scan step to make a strategic "now or later" decision about each passage',
        'Read strategically using keywords and the four modes of reading (content, organization, perspective, reasoning)',
        'Label each paragraph for both its content and its function in the passage',
        'Reflect on the whole passage to articulate the author’s Goal, beginning with an infinitive verb'
      ],
      images: [{ src: fig(0, 1).src, alt: fig(0, 1).alt, caption: 'Figure 4.1 — The Kaplan Method for CARS Passages: four steps applied to every passage — Scan, Read, Label, Reflect.' }],
      recap: `
- **Great test takers work with a plan.** The **Kaplan Method for CARS Passages** has **four steps**: **Scan → Read → Label → Reflect.**
- **Scan** (seconds): big picture + difficulty → decide **"now or later?"**
- **Read** strategically: track **keywords** and the **four modes of reading** (content, organization, perspective, reasoning); **never read a sentence more than twice.**
- **Label** *each* paragraph as you go for both its **content** and its **function** — use shorthand, symbols, abbreviations.
- **Reflect** on the whole passage to write the **Goal**, always starting with an **infinitive verb** (*to explain, to argue, to critique*).
`,
      detail: `
#### The four-step method
Just as great athletes work from a game plan, great test takers approach every passage with a **plan**. The **Kaplan Method for CARS Passages** is a universal four-step approach that you apply to *every* MCAT passage. In CARS it is refined to account for the section's quirks.

| Step | Action | Purpose | Time |
|---|---|---|---|
| **1. Scan** | Scan **for structure** | Get the big picture and difficulty; decide **now or later** | A few **seconds** |
| **2. Read** | Read **strategically** | Track keywords and the four modes of reading | Bulk of your time |
| **3. Label** | Label **each component** | Capture each paragraph's content **and** function | Done *while* reading |
| **4. Reflect** | Reflect **on your outline** | Articulate the author's overall **Goal** | ~**30 seconds** |

#### Why CARS is different
The general method is universal, but CARS passages differ from the three science sections in ways that force a refinement:

- **Many more words** and **no figures or images** to break up the text.
- **Much more variable** — wider range of topics and diverse writing styles.
- **Authors take sides.** Science passages are nearly always impartial; CARS authors usually **express opinions** — though not always straightforwardly.

![Figure 4.2 — The refined Kaplan Method for CARS, with the specific moves for each step.](${fig(0, 2).src})

:::expertise
The **Kaplan Method for CARS Passages**, the **Kaplan Method for CARS Questions**, the **CARS Question Types**, and the **Wrong Answer Pathologies** are all included as **tear-out sheets** in the back of the Kaplan book — pull them out and keep them next to your practice.
:::

#### Step 1 — SCAN (for structure)
The point of **Scanning** is to decide whether *this* is the passage you want to work on **now**. It takes only seconds and ends when you can answer one question: **Now or later?**

- If **now** → continue with the rest of the method.
- If **later** → jot the **topic** and the **number of its first question** on your noteboard, then Scan the next passage.

Scanning is trickier in CARS because there are no helpful captioned figures — just text. So:

- Scan for words that **stand out**: **capitalization, italics, quotation marks, parentheses,** or other distinctive features.
- When in doubt, read the **first (and maybe last) sentence** of each paragraph until you sense the big picture: the **field of study, topic/theme,** and rhetorical features like the **author's purpose**.
- You are **not** reading word for word — you only need enough to **assess difficulty.**

The *now or later* call depends on your own strengths. If, say, technical philosophy passages cost you lots of time for little payoff, **save them for the end**. Pay attention not just to **subject matter** but to **language difficulty** — puzzling vocabulary, convoluted sentences, and long-winded paragraphs make even interesting topics frustrating.

:::expertise
Why waste precious minutes on a brutal passage if **filling in guesses** would earn a similar score on it? With practice, judging difficulty becomes fast, and the seconds spent Scanning pay off in **better section management**.
:::

#### Step 2 — READ (strategically)
Reading strategically means watching for **keywords** and applying the **four modes of reading** from Chapter 3:

- **Content** keywords — the *what* (buzzwords, subject matter).
- **Relation** keywords — connect ideas (e.g., Similarity, Difference, Sequence).
- **Author** keywords — reveal the writer's intentions and attitude.
- **Logic** keywords — expose the passage's **arguments** (evidence, conclusions, refutations).

Look **beyond the content buzzwords** to how Relation, Author, and Logic keywords shape the meaning.

##### The rules of strategic reading
- **Resist rereading.** You don't need every word — just the general direction of the discussion.
- **Never read a sentence more than twice** during the Read step.
- Lost after one reading? Check whether a **Relation keyword** opens the next sentence — especially a **Similarity keyword**, which signals the author is continuing the same thought (often re-explaining it in simpler words).
- Still lost after a second reading? **Keep moving forward.** You can return *if* a question actually asks about that text and points are on the line.
- Above all, figure out **how a paragraph's sentences work together** and **what role the paragraph plays** in the whole.

:::bridge
**Keywords** (Chapter 3 of *MCAT CARS Review*) let you anticipate the author's path and stay a step ahead of their thought process. The worked passage at the end of this chapter is full of labeled examples.
:::

:::expertise
Even if a convoluted sentence still doesn't make sense after rereading once, **keep going.** Many test takers get stuck and bleed time. If the author truly cares about a point, it will **return later in the passage — usually in easier phrasing.**
:::

:::expertise
**Should I read the questions first?** Generally **no** — build your Passage Outline before looking at any question. If you *do* preview, read **only the question stems, never the answer choices** (wrong options promote misreadings). Don't memorize stems or interrupt your reading to answer them.
:::

#### Step 3 — LABEL (each component)
A CARS passage is **only paragraphs of text**, so during **Label** you jot a **brief description for each paragraph** based on your strategic reading. You're the only person who needs to read it, so be efficient with **symbols, abbreviations, and shorthand.**

Label a paragraph in light of all **four modes of reading**:

- **Content** — the key idea(s).
- **Organization** — the paragraph's **function** in the whole (the author's purpose for placing it here).
- **Perspective** — flag **strong author opinions** and any **alternative voices**.
- **Reasoning** — note **supporting or challenging evidence** (many paragraphs exist just to **strengthen or weaken a claim**).

##### A Label is NOT a set of notes
A Label is a **brief summary of the whole paragraph** that simultaneously captures content, organization, perspective, and reasoning. Long lists of notes **reduce** an outline's value — too much detail to serve as a quick reference, and note-taking tends to fixate on **content alone** while ignoring the paragraph's larger **function**.

:::keyconcept
**Reading and Labeling happen simultaneously.** Do **not** start a new paragraph until you have *some* Label for the one you just finished. Usually read the **entire paragraph first**, then Label (this avoids rewrites if the paragraph takes an unexpected turn) — but for an especially long or dense paragraph, start jotting a few words as soon as you grasp the gist.
:::

:::keyconcept
**Outlining slows you down at first** — like any new strategy. But once internalized, it **improves your timing**, because you spend far less time **researching answers** to the questions.
:::

:::realworld
Creating Labels is like identifying the **anatomy** of a passage: you want to know not only **what each part is**, but **how each part connects** and **how it relates to the whole**.
:::

#### Step 4 — REFLECT (on your outline)
With every paragraph Read and Labeled, **pause to Reflect** on the whole passage and state the author's overall **Goal**.

- Skim your Labels for the **overall arc**: did the author follow one train of thought, or suddenly **change focus**?
- Always begin the Goal with an **infinitive verb** (a verb starting with *to*): *to describe, to analyze, to rebut.* The nouns that follow fill in the subject matter.
- An author may have **multiple Goals** — it's fine to use more than one verb, but use **at least one**.

##### Choosing the purpose verb
Most CARS purposes fall on a spectrum between **informative** and **persuasive**. Place the author, then pick the verb:

| Stance | Purpose verbs |
|---|---|
| **Informative** (impartial) | **discuss, describe**; in more depth, **explain, analyze**; with multiple ideas, **compare, contrast** |
| **Persuasive** (takes a side) | **support, advocate** a view; or merely **challenge, critique, rebut** a position (no positive alternative) |

:::keyconcept
**The Goal = the author's purpose for writing.** Write it at the **end** of your Outline, **always beginning with an infinitive verb** (*to explain, to argue, to criticize*).
:::

You don't have to wait until the end to fill in the Goal — if you spot the author's purpose during the **Scan** or an early paragraph, **jot it down**. Just **confirm** it when you finish. Reflect should take **no more than ~30 seconds.**

:::bridge
The Goal statement also answers **Main Idea questions** (Chapter 9). Watch the **purpose verb**: wrong answers often have the **wrong charge** (*to advocate* vs. *to rebut*) or are **too strong / too weak** (*to prove* vs. *to support* vs. *to describe*).
:::
`
    },

    /* ──────────── 4.2 Reverse-Engineering the Author's Outline ──────────── */
    {
      id: 's2', num: '4.2', title: 'Reverse-Engineering the Author’s Outline',
      goals: [
        'Set up an efficient noteboard for the Passage Outline',
        'Decide what to Label using the four modes of reading and the right amount of detail',
        'Use shorthand to denote authors, alternative voices, attitudes, and evidence',
        'Highlight on screen sparingly and strategically as a complement to the Outline'
      ],
      recap: `
- **Set up the noteboard during Scan:** number each paragraph (**P1, P2…**) and leave a line for **"Goal: To __."**
- **Label length:** **5–7 words** (simple passage), **10–12** (complex); **rarely > 15 words** or one line.
- **What to Label** = the **four modes**: key idea (content), **function** (organization), **opinions/voices** (perspective), **evidence** (reasoning).
- **Shorthand:** \`Auth:\` for the author, colons + names for other voices, **+/−** for attitude, parentheses/dashes for evidence.
- **Highlight sparingly** — it's a *complement*, never a substitute for the Outline. Highlight **first occurrences, proper nouns, numbers**, and only the most structural **Logic/Relation keywords**.
`,
      detail: `
#### Noteboard strategy
On Test Day you get a **noteboard booklet** and a **wet-erase marker** — no personal items, so during practice keep scratch paper handy and **don't get attached to a "lucky" pen**.

Begin the Outline **during Scan**:

- **Number every paragraph** with brief notation like **P4**.
- Leave a spot at the end for the author's **Goal** — write the word **"To"** as a reminder, since it always starts with an infinitive verb.

A noteboard set up for a **six-paragraph passage** looks like this:

\`\`\`
P1.
P2.
P3.
P4.
P5.
P6.
Goal: To
\`\`\`

This is the format Kaplan uses in **every example Outline**. Labeling then becomes **filling in the blanks** as you read — and the limited space **forces concision.**

:::expertise
**Become a two-handed test taker.** Practice using the **mouse with your non-writing hand** so you can highlight and Outline simultaneously. Those switch-overs between marker and mouse add up across a 53-question section (and it speeds up calculations in the science sections too).
:::

#### How much to Label
The challenge is capturing the important information **without writing too much.**

| Passage complexity | Target Label length |
|---|---|
| Relatively **simple** | **5–7 words** |
| **High-complexity** | **10–12 words** |
| **Ceiling** | **Rarely > 15 words / one line** |

A useful trick: **build a complete sentence in your head** that captures everything below, then jot down a **few words and symbols** to jog your memory. (Many students fit **two or three columns** on the noteboard.)

#### What to Label — the four modes
The **four modes of reading** (Chapter 3) double as guidelines for **what to put in each Label**:

| Mode | What to capture in the Label |
|---|---|
| **Content** | The **key ideas** — the recurring theme common to most sentences, not a paraphrase of every sentence |
| **Organization** | The paragraph's **function**: raise a problem, provide **background**, **support** a claim, **challenge** a counterargument |
| **Perspective** | **Strong author opinions** and any **other voices** that speak |
| **Reasoning** | **Supporting** vs. **challenging evidence** and **where to find it** |

#### Shorthand for perspective and reasoning
Build a personal shorthand so the Outline is fast to write and read:

- **Author's view:** prefix with \`Author:\` (or **Auth:** / **Au:**). Some experts use **quotation marks** for the author's voice — if so, **don't use quotes anywhere else** in the Outline.
- **Other voices:** use **colons after proper names** (e.g., \`Nietzsche:\`) to mark alternative views.
- **Attitude:** use **+ / −** signs. \`+ + +\` next to an idea the author loves; **(Auth ±)** for mixed feelings. Some students use **emoticons** (smiley/frown) for the same effect.
- **Evidence:** when **support/challenge** is the paragraph's focus, you've probably captured it as the **function**. When it isn't the focus, note its presence in **parentheses** or **after a dash**.

:::mnemonic
**Outline shorthand cheat:** **colon = "says"** (\`Auth:\`, \`Nietzsche:\`), **plus/minus = attitude** (+++ love, − − dislike, ± mixed), **dash or ( ) = evidence**. The colon after a name is your fastest way to flag *whose* opinion it is.
:::

#### How to highlight
The on-screen **highlighter** lets you mark the passage, but it is **never a substitute for Outlining** — only a **sparing complement.** Highlighting works through **contrast**: highlight *too much* and the **unmarked** text starts to stand out instead.

**Mechanics — Click, Drag, Release, Select:** hold the left mouse button and drag; release for a gray background; then click **"Highlight"** (top-left) or press **Alt + H**. Don't obsess over capturing a phrase exactly — a few missing letters or an extra word is fine. **Never highlight more than one line at once.**

:::expertise
On Test Day, highlighting is **retained until you remove it** (even if you navigate away), and you can highlight the **passage, question, and answer choices.** Use it as a **complement** to your Outline — don't rely on it for all the key information.
:::

##### What is worth highlighting

| Highlight this | Why |
|---|---|
| **First occurrence** of a term | Especially when the author gives an **overt definition** or essential background; don't re-highlight every recurrence |
| **Proper nouns** (names) | They show up in **question stems** as clues |
| **Numbers / dates** | The only possible "math error" in CARS is **mixing up passage numbers** — highlighting prevents it |
| **Structural Logic keywords** | **Evidence/Refutation** keywords (you can Label only the conclusion and highlight the support) |
| **Relation keywords in long paragraphs** | A major internal **contrast** or a **series of steps** — highlight the **Difference** or **Sequence** keywords to reveal the structure |

:::keyconcept
**Don't highlight most keywords.** You must *recognize* keywords as you read, but highlighting them wastes time — when researching a question you ignore keywords until *after* you've isolated the relevant text. The exceptions are the **structural** ones above (mostly **Logic**, and **Relations in long paragraphs**).
:::
`
    },

    /* ───────────────────── 4.3 Practicing the Strategy ───────────────────── */
    {
      id: 's3', num: '4.3', title: 'Practicing the Strategy',
      goals: [
        'Work a full passage with the Kaplan Method, from Scan through Goal',
        'Recognize how keywords drive paragraph Labels in a real philosophy passage',
        'Compare your Outline against fully-fleshed, balanced, and bare-bones models'
      ],
      recap: `
- **Practice the full method on a real passage:** Scan → Read strategically (watch keywords) → Label each paragraph → Reflect on the Goal.
- The **worked Descartes/Nietzsche passage** shows keywords doing the heavy lifting: an **opening question** frames the focus; **Author keywords** (*noteworthy, perhaps, actually*) reveal a critical stance; **Sequence keywords** (*begins, turn to*) reveal structure.
- **There is no single correct Outline** — only Outlines that help you answer questions efficiently. Aim for a **balance of breadth and brevity.**
- The author's **Goal** here: **to present and critique Descartes's argument** for grounding knowledge on certain self-existence.
`,
      detail: `
#### How to practice
Treat the passage below as a chance to run the **whole Kaplan Method**. Even though your decision will be to do it **now**, still **Scan** for topic and difficulty. Then **Read strategically** for keywords, **Label** each paragraph on scratch paper, and finally **Reflect** to name the **Goal**. After your attempt, read the **Analysis**, then compare your Outline to the **Example Outlines**. *There is no single correct Outline* — the real test is whether it helps you answer questions correctly and efficiently.

#### The sample passage (philosophy)

:::keyconcept
**The Scan.** Even paragraph 1 is loaded with stand-out features: the **question mark** (*Can we truly know anything with certainty?*), **quotes** around *"Early Modern,"* and the **capitalization + italics** in *René Descartes … Meditations.* Skimming first lines yields more **Descartes / Meditations**, with **Nietzsche** at the very end. Verdict: a **philosophy passage** centered on Descartes's *Meditations* — daunting in reputation, but workable.
:::

> Can we truly know anything with certainty? Since the dawn of the so-called "Early Modern" era in Western philosophy, this question has preoccupied both skeptics and their critics. Perhaps the most noteworthy challenger of the certainty-rejecting skeptics is **René Descartes**, who constructs in his seminal *Meditations* an elaborate argument that purports to ground all human knowledge on the indubitability of one's own existence. **However**, in his attempts, Descartes **actually** bolsters the case for skepticism. **Indeed**, later thinkers even cast doubt on the supposed surety of self-existence.

#### Analysis — paragraph by paragraph
The power of strategic reading is that **keywords** tell you what matters. Watch them drive each Label:

| Paragraph | Key moves & keywords | Function |
|---|---|---|
| **P1** | Opens with a **non-rhetorical question** → its answer is the focus. **Author keywords**: *noteworthy* (Positive), but *most* (Extreme) is **canceled** by *perhaps* (Moderating). **However** (Difference) + *actually* (Extreme) → Descartes "**bolsters**" skepticism. *Supposed surety* confirms doubt. | Sets up the debate; reveals the author **leans toward the skeptics** |
| **P2** | No transition keyword; both sentences have **Descartes** as subject in **past tense** → **historical context.** Key idea: only what survives **radical doubt** is certain. | Background on Descartes's method |
| **P3** | **Sequence keyword** *begins the process* → more steps coming. Definition: **empirical knowledge** (from the senses). *Descartes's most powerful argument relies upon* → **Logic + strong Positive** keywords; what follows *relies upon* is **evidence** (waking/dreaming). **Thus … concludes** = conclusion (the author seems sympathetic, but attributes it to Descartes). | First step: experience is doubtable |
| **P4** | **Sequence keyword** *turn to* → next step. Definition: **a priori** knowledge (math/logic). *This proves a more difficult task* → comparison signaling the author rates this argument **less highly.** Rhetorical question in **quotes** (Descartes's voice) for support; the **Orwell** reference is just supporting (you needn't know the novel). | Second step: math/logic is doubtable (Great Deceiver) |
| **P5** | The opening question echoes P1 → the author is **returning to the point.** A **colon = "equals sign"** linking the author's statement to Descartes's quote (if you don't get one, lean on the other). *Simply / merely* the mind limits the claim; **Even so** (Difference) sets the author apart. **Alliteration** (*announce an enormous ontological undertaking*) flags a phrase the author cares about. | The thinking self is undoubtable → certainty (given a non-deceiving God) |
| **P6** | Rhetorical questions — *really* and *not* are **giveaways**: the author wants **"no, it's not certain."** **Nietzsche** supplies an *even more radical skepticism*; the **"it is raining"** analogy suggests *"thinking happens"* without a thinking self. **Moderating keywords** (*perhaps, merely*) → the author **hedges.** | Nietzsche undermines Descartes |

:::bridge
P5's alliteration repeats a stressed **"n"** sound. A **phoneme** is the smallest unit of speech sound; **phonology** (one of the five basic components of language) is covered in *MCAT Behavioral Sciences Review*, Ch. 4. You won't be tested on alliteration — but authors do "decorate" key phrases with literary devices, and your ear should **perk up** when they do.
:::

#### Reflecting on the Goal
The author is **not neutral** — the tone is **overwhelmingly critical** (all those Negative Author keywords), so a verb like **challenge** or **critique** fits. More precisely: the author **recounts Descartes's arguments only to undermine them**, then uses **Nietzsche** to doubt the thinking self — exactly what P1's last line promised (*later thinkers even cast doubt on the supposed surety of self-existence*).

:::keyconcept
**Authors tend to telegraph their plan.** Despite the abstract subject matter, this author stated **in the last sentence of paragraph 1** exactly what the passage would do. Trusting that early signal makes the Goal easy to confirm at Reflect.
:::

#### Example Outlines
Each of the following is a **legitimate** Outline of the same passage. If yours resembles any of them (or a hybrid), you're off to a great start. The main difference is **how much detail** — a bare-bones Outline takes the least time to build.

##### The Fully Fleshed-Out Model
\`\`\`
P1. Is certain knowledge possible? Skeptics say no; critics like
    Descartes say yes (Author likes skeptics)
P2. Looking for certainty, Descartes rejects any established
    category of belief that can be doubted
P3. D's 1st Meditation: beliefs from experience doubtable —
    supported by waking/dreaming argument
P4. More Meditations: beliefs independent of experience
    doubtable — supported by Great Deceiver idea
P5. D's 2nd Meditation: the thinking self is undoubtable —
    allows for certainty (assuming benevolent God)
P6. Author: Nietzsche undermines Descartes with reasons to
    doubt certainty of thinking self's existence
Goal: To explain Descartes's arguments for certain knowledge
      and criticize him for insufficient skepticism
\`\`\`

##### The Bare-Bones Version
\`\`\`
P1. Auth: skeptics (nothing = certain) > Descartes (self = certain)
P2. D rejects belief categories if doubtable
P3. D's argument against experience
P4. D's arg. against math/logic
P5. D's arg. for certainty of thinking self
P6. Nietzsche's criticism of ↑ (Auth +)
Goal: To challenge D's argument for certainty
\`\`\`

##### A Balance of Breadth and Brevity
\`\`\`
P1. Descartes argues for certain knowledge, grounded in
    self-existence (but Author prefers skepticism)
P2. D isolates certain truths by rejecting any category of
    doubtable belief
P3. D: can't distinguish waking/dreaming → experiential
    beliefs = doubtable
P4. D: Great Deceiver might fool us → math/logical beliefs
    = doubtable
P5. D: thinking self can't be doubted + nondeceptive God
    → certain knowledge
P6. Author/Nietzsche: D is wrong, thinking could happen
    without a self
Goal: To present and critique Descartes's argument for
      grounding knowledge on certain self-existence
\`\`\`

:::mnemonic
**Aim for the middle Outline.** The **bare-bones** version is fastest to write; the **fully-fleshed** version is most complete. Most students should target the **balance** of breadth and brevity — enough to research questions fast, brief enough to build quickly.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'The Kaplan Method for CARS Passages',
        points: [
          'The **Kaplan Method for CARS Passages** has four steps: **Scan, Read, Label, Reflect.**',
          '**Scan** (seconds) builds the big picture and difficulty to decide **"now or later."**',
          '**Read** strategically using keywords and the four modes (content, organization, perspective, reasoning); **never read a sentence more than twice.**',
          '**Label** each paragraph as you read — capture its content *and* its function.',
          '**Reflect** to write the **Goal**, always starting with an **infinitive verb** (informative: *describe/explain/analyze*; persuasive: *support/challenge/critique*).'
        ]
      },
      {
        section: 'Reverse-Engineering the Author’s Outline',
        points: [
          'Set up the noteboard during Scan: **number every paragraph** and reserve a **"Goal: To __"** line.',
          'Keep Labels short: **5–7 words** (simple), **10–12** (complex), **rarely over 15 / one line.**',
          'Label using the four modes; flag **author opinions** with \`Auth:\`, other voices with **name + colon**, attitude with **+/−**, evidence with **dashes/parentheses.**',
          '**Highlight sparingly** as a complement to the Outline: **first occurrences, proper nouns, numbers,** and only the most **structural** Logic/Relation keywords.'
        ]
      },
      {
        section: 'Practicing the Strategy',
        points: [
          'Practice the full method on real passages — Scan, Read, Label, Reflect.',
          '**Keywords drive the Labels:** opening questions frame the focus, Author keywords reveal stance, Sequence keywords reveal structure.',
          'There is **no single correct Outline**; aim for a **balance of breadth and brevity** that lets you research questions quickly.'
        ]
      }
    ],
    mnemonics: [
      '**SRLR — "So Really, Let’s Read":** **S**can → **R**ead → **L**abel → **R**eflect, the four steps of the Kaplan Method for CARS Passages.',
      '**Scan = "Now or Later?"** — the entire Scan step ends the moment you can answer that one question.',
      '**Read twice, then move on:** never read a sentence more than twice; if a **Similarity keyword** opens the next sentence, the author is about to re-explain it more simply.',
      '**Label = content + function**, not a pile of notes. A Label summarizes the *whole paragraph* and what it *does*.',
      '**Goal starts with "To":** every Goal statement begins with an **infinitive verb** — write "To" on the noteboard as a reminder.',
      '**Informative vs. persuasive verbs:** informative = *discuss, describe, explain, analyze, compare, contrast*; persuasive = *support, advocate, challenge, critique, rebut.*',
      '**Outline shorthand:** **colon = "says"** (\`Auth:\`, \`Nietzsche:\`), **+/− = attitude**, **dash/( ) = evidence.**'
    ],
    keyConcepts: [
      '**Outlining feels slow but saves time.** It costs effort up front and pays it back during question research — a net time *gain* once mastered.',
      '**Reading and Labeling are simultaneous:** never begin a new paragraph until the previous one has some Label.',
      '**A Label captures function, not just content** — why the author put the paragraph here (raise a problem, give background, support, challenge), plus the perspective and evidence.',
      '**Highlighting works through contrast** and is a *complement* to the Outline, never a substitute — over-highlight and the unmarked text stands out instead.',
      '**Authors telegraph their Goal:** the purpose is often stated in an opening or early paragraph; Reflect just confirms it, beginning with an infinitive verb.'
    ],
    equations: []
  },

  questions: []
};
