// CARS Chapter 8 — Question and Answer Strategy. STRATEGY chapter (no science content).
// Figures reused from ch08.json (the Kaplan Method flowcharts); recap/detail markdown authored here.
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 8,
  title: 'Question and Answer Strategy',
  subtitle: 'The Kaplan Method for CARS Questions · Wrong Answer Pathologies · Signs of a Healthy Answer',

  blocks: [
    /* ───────────── 8.1 The Kaplan Method for CARS Questions ───────────── */
    {
      id: 's1', num: '8.1', title: 'The Kaplan Method for CARS Questions',
      goals: [
        'Apply the four-step Kaplan Method for CARS Questions — Assess, Plan, Execute, Answer — to any question stem.',
        'Triage questions by Assessing the stem alone before ever looking at the answer choices.',
        'Identify the task and the source of information needed to answer a question.',
        'Use prediction-first, elimination-second tactics and fall back on educated guessing when needed.'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 8.2 — The Kaplan Method for CARS Questions: Assess → Plan → Execute → Answer.' }],
      recap: `
- **Four steps — APEA:** **A**ssess (read the stem, triage) → **P**lan (identify the *task* + where the info lives) → **E**xecute (reread and **predict** the answer) → **A**nswer (match your prediction, then move on).
- **Read the stem only — cover the choices.** ~75% of all choices are wrong, so glancing early invites the **misinformation effect**. Keep them out of view until the Answer step.
- **Four sources of information:** the **question stem**, the **passage**, your **Outline**, and your **memory**. A good Outline often answers the question with no rereading.
- **Predict first (Plan A), eliminate second (Plan B).** Both reach the *same* one correct answer; prediction is just faster. A match means **stop and move on**.
- **Triage is mercy.** Every question is worth the same; bank time on winnable questions and flag the brutal ones for later.
`,
      detail: `
#### One method for the whole MCAT
The general Kaplan Method for tackling any MCAT question takes a single four-step form used in **every** section — CARS *and* the sciences. The CARS-specific version is summarized below.

![The Kaplan Method for CARS Questions](${fig(0, 1).src})

| Step | One-line job | What you actually do |
|---|---|---|
| **1. Assess** | Triage the stem | Read the **stem only**; identify the **question type**; decide *now or later*. |
| **2. Plan** | Find the task + the source | Pin down the **task** (what's being asked) and **where** the info lives (stem / passage / Outline / memory). |
| **3. Execute** | Predict the answer | Reread the relevant text; **predict** everything you can about the correct answer (and what would rule choices out). |
| **4. Answer** | Match and commit | Scan choices for your **prediction**; confirm word-for-word; select and move on. |

:::mnemonic
**"A-P-E-A"** → **A**ssess · **P**lan · **E**xecute · **A**nswer. (Same four steps as the Passage method's read step echoes — *Assess* mirrors *Scan*.) Think of it as **"APE Answers"**: even an ape can ace CARS if it works the steps in order instead of jumping at shiny wrong answers.
:::

#### Step 1 — ASSESS
Your **first task on any question is to read the stem, and only the stem**, to decide whether to work it **now** or **triage** it for later.

- Because **every question is worth the same** points, there's no reason to bleed time on one brutal item. Some questions you'll likely miss no matter how long you stare — recognize them early and spend the time where it pays off.
- Assessing is easier once you **identify the question type**. Through released-material research, Kaplan finds the AAMC's three big categories resolve into **~10 predictable types**:
  - **Foundations of Comprehension** → four common types (Main Idea, Detail, Definition-in-Context, plus assorted).
  - **Reasoning Within the Text** → two predominant types.
  - **Reasoning Beyond the Text** → two predominant types.
- Knowing the **type** makes Planning and Executing far easier — which is why the next three chapters drill the types one by one.

:::realworld
Think of **question typing like presenting diagnoses.** In medicine, a patient who presents with chest pain, abdominal pain, or a severe headache triggers a specific workup. The ten question types are the **"presentation"** of a question — they tell you which steps to take through the rest of the method.
:::

##### Why you cover the answer choices
The primary reason to ignore the choices during Assess: **most of them are wrong.** Glance at a single choice and it's **three times more likely to be incorrect than correct** — and the AAMC words wrong options *seductively* to punish test-takers who jump straight to the answers.

:::expertise
**Physically cover the answer choices** with your hand or scratch paper until you reach the Answer step. This avoids wasting active consideration on three wrong choices and protects you from the **misinformation effect** (*MCAT Behavioral Sciences Review*, Ch. 3) — once a seductive wrong choice is in your head, it biases your reading.
:::

#### Step 2 — PLAN
Once you commit to a question, **Plan your attack** around two things: the **task** and the **source**.

##### The task = your destination
Be crystal-clear about **what the question requires** of you.

- Simple types have a single fixed task: **Main Idea** → recognize the big picture; **Definition-in-Context** → explain a term *as used in the passage*.
- Even complex types have a small menu of objectives. **Apply** questions, for example, almost always do one of three things:
  - **gauge the author's response**,
  - **predict a likely outcome**, or
  - **find a good example**.

##### The source = your starting point
There are only **four viable sources of information** on Test Day:

1. The **question stem** (rarely gives you *everything*, but check).
2. The **passage** (the text itself).
3. Your **Outline** (your memory aid — sometimes the *only* place you need to look).
4. Your **memory** (notoriously faulty — verify against another source).

:::expertise
**If you're Scanning the whole passage to find an answer, you're doing it wrong.** The info is often already in your **Outline**; even when it isn't, the Outline tells you *where* to look — so you'll reread **at most one paragraph**. For Main Idea questions, the **Goal** line in your Outline is usually all you need.
:::

##### Where stems point you (research clues)
For less straightforward tasks, plan to reread part of the passage. Stems hint at *where* in **three forms**:

| Clue type | What it looks like | Difficulty |
|---|---|---|
| **Paragraph / sentence reference** | Paragraph numbers in parentheses; "*the final sentence of the passage*" | **Easiest** — location is a breeze |
| **Direct quotation** | Borrowed wording — **not always in quotation marks**; sometimes italicized, sometimes plain; may appear in **multiple paragraphs** | Moderate |
| **Paraphrase** | The stem **restates** a passage claim using **synonyms**, with no other clue | **Hardest** (but rare) |

- **Cast a wide enough net.** The needed info is often in the *surrounding* sentences. Rule of thumb: **start rereading one sentence before** the reference and **stop one sentence after**.
- **No locatable clues?** Save these vague questions for the **end of the passage set**. By then, researching the other questions may have surfaced the answer — and **process of elimination** is usually your best Plan.

#### Step 3 — EXECUTE
Every question has **exactly one correct answer** but usually **more than one path** to it. Finding the right answer vs. eliminating the three wrong ones gives an **identical result** — elimination just takes longer.

- Strive for the **quickest approach**, but stay flexible: if **Plan A** fails, have **Plans B and C** ready.
- It's fine to **reread crucial sentences a few times** here — unlike your first strategic read, *points are on the line.*
- The core move:
  - **Plan A** = use the text to **predict everything you can** about the correct answer.
  - **Plan B** = set expectations for **what would rule choices out**.
- The **more specific** these dual expectations, the easier it is to isolate the answer. Keep the **task** of the question type front-of-mind as you reread.

:::keyconcept
**Prediction is the engine of CARS.** A specific prediction made *before* you look at the choices turns the Answer step into pattern-matching. Vague predictions force you into slow, choice-by-choice elimination — and into the AAMC's traps.
:::

#### Step 4 — ANSWER
Scan the choices. If one **closely resembles your prediction**, reread **every word** of it to confirm it says precisely what you think — then **select it and move on**.

- When you find a **near-perfect match**, reading the other three choices is **not worth your time**. Be confident.
- **Stay flexible.** If the first choice you read reveals the answer takes a **different form** than predicted, don't reflexively jump to elimination — **revise your prediction** and find a match among the rest.
  - *Example:* a stem asks for a claim that **undermines the author's thesis** (a **Strengthen–Weaken Within the Passage** task). You expect a refutation *mentioned in the passage*, but choice (A) is something brand-new the author never hinted at — signaling a **Strengthen–Weaken Beyond the Passage** question. Use (A) to **alter your expectations**, then match.
- The choices are technically a **fifth source of information**, but they're laced with **misinformation** — treat them with caution.

##### When you must eliminate
If the stem gives little to work with, or no choice matches, fall back on **process of elimination** (POE), researching each choice as needed.

- **Don't reject a choice just because the wording differs** from the passage — **consistency of concepts beats identical terminology.**
- A choice needs **only one major flaw** to be eliminated → the **Wrong Answer Pathologies** (Section 8.2) make this fast.

:::expertise
If a stem gives you little, **don't say "I don't know" and jump to the choices.** Use your **Outline** to recall the passage's main themes, then use those themes to drive elimination — this keeps seductive, off-passage choices from distracting you.
:::

:::expertise
**Should I compare answer choices?** Default assumption: **one choice is flawless; the other three each carry ≥1 flaw.** But **superlative** stems (*strongest challenge, most supported, best example*) require comparing choices that all "work" but to different **degrees**. There, don't assume an **Extreme** answer is wrong — especially with **"if true"** language, a *stronger* answer that still produces the desired effect is correct.
:::

##### Educated guessing (last resort)
When all else fails, **eliminate what you can and go with your gut.**

- **Never make a blind guess** unless you're completely out of time and just need to fill a bubble.
- Crossing off **one** wrong answer raises your random odds by **33%**; crossing off **two** **doubles** them.
- Work the other questions in the set first — that effort may let you return and rule out more options.

:::mnemonic
**"Triage, don't dawdle."** Same points per question = no question deserves to sink your timing. **Flag-and-move** is a skill, not a surrender.
:::
`
    },

    /* ─────────────────── 8.2 Wrong Answer Pathologies ─────────────────── */
    {
      id: 's2', num: '8.2', title: 'Wrong Answer Pathologies',
      goals: [
        'Recognize the four most common Wrong Answer Pathologies: Faulty Use of Detail, Out of Scope, Opposite, and Distortion.',
        'Use a single fatal flaw to eliminate a choice quickly during process of elimination.',
        'Identify the exceptions where a pathology does NOT apply (e.g., Out of Scope on Reasoning Beyond the Text; Extreme answers on "if true" stems).'
      ],
      recap: `
- **The CARS section is FAIR:** exactly **one** correct answer and **three** wrong ones per question — never two right, never zero. Wrong choices are wrong for a **recurring reason**.
- **Four high-yield pathologies — "FOOD":** **F**aulty Use of Detail · **O**ut of Scope · **O**pposite · **D**istortion (incl. Extreme).
- **One fatal flaw is enough** to eliminate a choice — you don't need to find *every* problem, and your reason may differ from the explanation's.
- **Watch the exceptions:** **Out of Scope** does **not** apply to **Reasoning Beyond the Text**; **Extreme/Distortion** can be correct when the author is radical or when a stem says **"if true."**
`,
      detail: `
#### The section is fair — exploit it
The AAMC designed CARS to **fairly test critical thinking**, so the **questions won't trick you**: there's never a question with two correct answers or zero. **Every question has exactly one right answer and three wrong ones**, each incorrect for **at least one reason**.

Better still, those reasons **repeat** — so often that you can treat them like recurring **signs and symptoms** of answer-choice "illness." Kaplan calls them **Wrong Answer Pathologies.**

:::keyconcept
**Wrong Answer Pathologies are the most frequent patterns in incorrect choices.** They're so common you'll find **at least one in nearly every CARS question** — and in many science-section questions too. A choice needs only **one** fatal flaw to be eliminated, so don't be alarmed if you ruled out a choice for a *different* reason than the explanation gives. (The four below are the most common, **not** an exhaustive list, and they sometimes overlap.)
:::

#### The four pathologies — KEY TABLE
> Use this as your default expectation for wrong answers. Memorize the **signal**, the **fix**, and the **exception** for each.

| Pathology | What it is | Telltale signals | How to catch it | Key exception / caution |
|---|---|---|---|---|
| **Faulty Use of Detail (FUD)** | An **accurate** passage detail that **doesn't answer the question** — too specific, from the wrong part of the passage, or simply irrelevant to what's asked | Familiar passage wording that "feels right"; a true fact that dodges the actual task | A **thorough prediction** of what the question *actually* needs; ask "does this *answer the question*?" | Common in **Strengthen–Weaken (Within)** items — the cited detail is real but not *relevant* to the argument |
| **Out of Scope (OS)** | On-topic, but introduces an **element the text never discusses** | Author **ranking/comparing** ideas they never compared; claims of "**first** of its kind," "**most** influential," historical origins, or relative popularity the author never raised | Check the choice against the **Goal/scope** in your Outline — is this element actually *in* the discussion? | **Does NOT apply to Reasoning Beyond the Text.** Also: info **unstated** by the passage can still be **in scope** (e.g., correct inferences on Reasoning Within the Text) — don't reject too fast |
| **Opposite** | Information that **directly conflicts** with the passage | A single flipped word — **not, except**; a prefix **un–, a–**; a suffix **–less, –free**; **double/triple negatives** | **Reword negatives** with fewer negations to see the true meaning; check author agreement | Two choices contradicting each other **does NOT mean one is correct** (e.g., an agnostic author makes both "God exists" and "There is no God" Opposites) |
| **Distortion** | **Twists** the author's idea **further than intended**; includes **Extreme** answers | Strong words — **all, always, none, never, impossible, only**; prefix **any–, every–**; suffix **–est, –less** | Compare the **strength** of the claim to the author's actual position (usually moderate) | Not automatically wrong: a **radical author** may warrant an Extreme answer; on **"if true"** / **Strengthen–Weaken (Beyond)** stems, judge **impact**, not strength |

:::mnemonic
**The four pathologies spell "FOOD" — and wrong answers are junk FOOD:**
**F**aulty Use of Detail · **O**ut of Scope · **O**pposite · **D**istortion.
Looks tasty (familiar, "on topic"), but rots your score. *Don't eat the junk FOOD.*
:::

#### 1 — Faulty Use of Detail (FUD)
The testmakers love planting **accurate reflections of passage details** in wrong answers to bait students who **jump at familiar language**. The detail is **faulty** because it **doesn't answer the question posed** — it may be:

- **too specific** for a question needing a general answer,
- pulled from the **wrong part** of the passage, or
- from the **right paragraph** but **irrelevant** to what's actually asked (classic in **Strengthen–Weaken Within** questions).

:::realworld
A **Faulty Use of Detail** answer is like a **politician dodging a debate question**:
**Moderator:** "Candidate X, what will you do to improve the economy?"
**Candidate X:** "That's a wonderful question. My platform is to stand for all Americans' rights and lead with integrity."
True as the words may be — they **just don't answer the question posed.**
:::

#### 2 — Out of Scope (OS)
An answer **outside the scope** of the passage is wrong — typically **on topic** but importing an element the **text never discusses.**

- *Example:* the author discusses different ideas but **never compares** them → an OS choice has the author **ranking** two concepts.
- *Common pattern:* claiming a view was the **"first of its kind"** or **"most influential"** when the author **never addresses** its history, popularity, or influence.

:::bridge
**Unstated ≠ Out of Scope.** Many **Reasoning Within the Text** answers are claims the passage never states outright but that can be **inferred**. **Inferences** include **assumptions** (unstated evidence) and **implications** (unstated conclusions) — both are *in scope*. Don't reject a choice as OS just because the author didn't explicitly say it. (Inferences: *MCAT CARS Review*, Ch. 5.)
:::

#### 3 — Opposite
A choice that **directly conflicts** with the passage is an **Opposite.** The difference is often a single small element:

- a word like **not** or **except**,
- a prefix like **un–** or **a–**,
- a suffix like **–less** or **–free**.

**Be ruthless with negatives.** Double and triple negatives are far easier to **Assess** if you **reword them with fewer negations** first.

> **Caution:** Two contradictory choices do **not** guarantee one is correct. If an author argues it's **impossible to prove** whether a divine being exists (**agnosticism**), then for a question asking what the author would **agree** with, *both* "**God exists**" and "**There is no God**" are **Opposites** of the correct (agnostic) answer.

#### 4 — Distortion (and Extreme)
**Distortions twist the passage's ideas further than the author would prefer.** **Extreme** answers are the headline case. Common signals of a distorted/extreme claim:

- **Strong words:** *all, always, none, never, impossible, only*
- **A prefix** like *any–* or *every–*
- **A suffix** like *–est* or *–less*

MCAT authors **rarely take radical positions**, so flag it whenever they do. **Two exceptions** where Extreme is **not** automatically a Distortion:

1. The **author genuinely is radical** → an Extreme choice may correctly capture their view.
2. The stem says the choices are **true** and asks only which has the **greatest impact** on an argument (common in **Strengthen–Weaken Beyond the Passage**) → judge **effect**, not strength.

:::expertise
When a stem includes **"if true,"** stop policing the strength of language. A **stronger** answer that nonetheless **produces the desired outcome** (strengthening or weakening the argument most) is exactly what you want — Extreme is a *feature*, not a flaw, here.
:::
`
    },

    /* ──────────────────── 8.3 Signs of a Healthy Answer ─────────────────── */
    {
      id: 's3', num: '8.3', title: 'Signs of a Healthy Answer',
      goals: [
        'Recognize the three positive indicators of a correct CARS answer: Appropriate Scope, Author Agreement, and Weaker Is Usually Better.',
        'Apply the "Goldilocks principle" of scope, calibrating expected scope by question type and task.',
        'Default to moderate, hedged language in answer choices — and know the exceptions.'
      ],
      recap: `
- **Don't argue with the MCAT.** The testmakers word **exactly one** correct answer per question with great deliberation — your job is to find it, not debate it.
- **Three signs of health — "SAW":** **S**cope is appropriate (Goldilocks) · **A**uthor agreement · **W**eaker language is usually better.
- **Appropriate Scope** = the "**Goldilocks principle**": **not too broad, not too specific — just right** for the question's type and task.
- **Author Agreement:** unless the stem asks for a challenge/alternative view, the right answer **sounds like the author** and doesn't contradict them.
- **Weaker Is Usually Better:** prefer **hedged** language (*can, could, may, might, sometimes, often, likely*) — most authors avoid the high burden of proof that strong claims demand.
`,
      detail: `
#### Stop arguing with the test
If you're like most CARS students, you've **disputed at least one explanation** — *"But what about paragraph 1?"* or *"Couldn't you read it this way instead?"* Arguing with a professor may earn points; **arguing with the MCAT earns nothing.** The testmakers are **extremely deliberate**, always including **exactly one** correct answer.

Correct answers vary widely in appearance, but they share **patterns**. If wrong-answer traps are **Pathologies**, these traits are **indicators of good health**. They aren't *sufficient* to make an answer right, but they **correspond to the correct choice** in most question types.

:::mnemonic
**The three signs of a healthy answer spell "SAW":** **S**cope (appropriate) · **A**uthor agreement · **W**eaker is usually better. *What did the correct answer do? It "SAW" the passage clearly.*
:::

| Sign of health | The rule | What it looks like | Watch out |
|---|---|---|---|
| **Appropriate Scope** | "**Goldilocks**" — not too broad, not too specific, **just right** for the type/task | **Main Idea** → matches the **whole passage**; **Detail / Definition-in-Context** → matches the **referenced text** (or what surrounds it) | **Reasoning Beyond the Text** broadens scope — the right answer often lies **slightly outside** the passage |
| **Author Agreement** | The answer is **consistent with what the author says** | Echoes the author's **tone/voice** (Author keywords in your Outline); doesn't contradict the author elsewhere | Stems asking for a **challenge/alternative view**; sentences in **another voice** (quotes, others' opinions) are *not* the author |
| **Weaker Is Usually Better** | Prefer **hedged, moderate** language | *can, could, may, might, is possible, sometimes, often, likely, probably, in some sense* | A **radical author** (1–2 passages on Test Day) → a **stronger** claim may be the good sign |

#### Sign 1 — Appropriate Scope
Correct answers follow the **"Goldilocks principle"**: **not too broad, not too specific — just right.** **Scope** = the particular aspects of a topic the author actually cares about.

- The **Goal** in your Outline gives you the **passage's overall scope** — but refine your expectation using the question's **type and task.**
- **Main Idea** questions → the correct answer **matches the scope of the entire passage**, and will typically be flanked by:
  - at least one **too-focused** wrong answer (**Faulty Use of Detail**), and
  - at least one **too-broad/off-passage** wrong answer (**Out of Scope**).
- **Detail** and **Definition-in-Context** questions → require a **more refined scope**; if a clue points to a portion of the passage, the answer usually shares the **scope of the referenced text** (or its immediate surroundings).

:::expertise
**Scope of a text** = the particular aspects of a topic the author addresses. **Every paragraph** has its own scope; together they form the passage's scope. **Each answer choice** has a scope too, which can mimic part of the author's discussion or depart entirely. Crucially, **same scope ≠ same content** — an **unstated assumption** is *within scope* even though its information is left unsaid.
:::

> **The big exception — Reasoning Beyond the Text.** These questions **broaden the scope** to new contexts, sometimes seeming **unconnected** to the passage. So the correct answer **tends to lie slightly outside** the passage — *but* some Beyond-the-Text stems introduce new info yet have answers that **stay in scope.** Be savvy: **don't auto-reject** an in-scope choice on these.

#### Sign 2 — Author Agreement
Unless the stem **explicitly** asks for an **alternative viewpoint** or a **challenge** to the passage, the correct answer is **consistent with the author.**

- This is why **tone and voice** (captured by **Author keywords**) belong in your **Passage Outline**.
- A correct answer **should not contradict** the author elsewhere — **with one caveat**: sentences spoken in a **different voice** (quotes, references to *others'* opinions) are not the author's view.

> **Bottom line:** **If it doesn't sound like something the author would say, rule it out.**

#### Sign 3 — Weaker Is Usually Better
The AAMC tends to select passages by authors who **don't take extreme views.** Most authors load their writing with **Moderating keywords** to limit claim strength — because a **stronger claim carries a higher burden of proof** (it demands stronger evidence).

- **Give preference to weaker, hedged language:** *can, could, may, might, is possible, sometimes, often, likely, probably, in some sense.*
- **Exceptions** (same as Distortion's exceptions in 8.2):
  - a **radical author** — you may meet **one or two** on Test Day — for whom a **stronger** claim is a *good* sign;
  - **"if true"** / **Strengthen–Weaken Beyond** stems where you judge **impact**, not strength.

:::keyconcept
**Pathologies and healthy signs are mirror images.** **Distortion/Extreme** ↔ **Weaker Is Better**; **Out of Scope** ↔ **Appropriate Scope**; **Opposite** ↔ **Author Agreement**. Learn one side and you've learned the other — and you can attack a question from *either* direction (predict the healthy answer **or** eliminate the sick ones).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [
      {
        section: 'The Kaplan Method for CARS Questions',
        points: [
          'The Kaplan Method for CARS Questions has **four steps: Assess, Plan, Execute, Answer** — used on every MCAT question, CARS and science alike.',
          '**Assess** the stem **only** (cover the choices) and **triage** — every question is worth equal points, so don\'t sink time into unwinnable items.',
          '**Plan** by identifying the **task** (what\'s asked) and the **source** of information: the **stem, passage, Outline, or memory**.',
          '**Execute** by **predicting** the correct answer from the text (Plan A) and what would eliminate choices (Plan B); reread one sentence before to one sentence after a reference.',
          '**Answer** by matching your prediction; on a near-perfect match, **select and move on**. Use **process of elimination** and **educated guessing** only as fallbacks.'
        ]
      },
      {
        section: 'Wrong Answer Pathologies',
        points: [
          'Every CARS question has **exactly one correct answer and three wrong ones**; a choice needs only **one fatal flaw** to eliminate.',
          '**Faulty Use of Detail (FUD):** an accurate detail that **doesn\'t answer the question.**',
          '**Out of Scope (OS):** brings in an element the passage never discusses — but **does not apply to Reasoning Beyond the Text**, and **unstated ≠ out of scope**.',
          '**Opposite:** directly conflicts with the passage, often via a single *not/un–/–less*; watch **double negatives**.',
          '**Distortion/Extreme:** twists ideas too far (*all, always, never, only*) — unless the author is radical or the stem says **"if true."**'
        ]
      },
      {
        section: 'Signs of a Healthy Answer',
        points: [
          'Don\'t argue with the MCAT — the testmakers deliberately write **exactly one** correct answer per question.',
          '**Appropriate Scope** (the "Goldilocks principle"): not too broad, not too specific; calibrate by **question type and task**.',
          '**Author Agreement:** unless the stem asks for a challenge, the right answer is **consistent with the author\'s** tone and claims.',
          '**Weaker Is Usually Better:** prefer **hedged language** (*may, might, often, likely*) because strong claims carry a higher **burden of proof**.',
          'Healthy signs **mirror** the pathologies — attack from either direction (predict the healthy answer or eliminate the sick ones).'
        ]
      }
    ],
    mnemonics: [
      '**APEA** — the four question steps: **A**ssess (triage the stem) · **P**lan (task + source) · **E**xecute (predict) · **A**nswer (match & move). *"APE Answers": work the steps instead of grabbing shiny wrong choices.*',
      '**Cover the choices.** One random choice is **3× more likely wrong than right** — reading early invites the **misinformation effect**. Hand or sticky note over the answers until the Answer step.',
      '**FOOD = the four Wrong Answer Pathologies:** **F**aulty Use of Detail · **O**ut of Scope · **O**pposite · **D**istortion. Wrong answers are **junk FOOD** — look tasty, rot your score.',
      '**SAW = the three signs of a healthy answer:** **S**cope (Goldilocks) · **A**uthor agreement · **W**eaker is usually better. The right answer "**SAW**" the passage clearly.',
      '**Mirror rule:** Distortion ↔ Weaker-is-better · Out of Scope ↔ Appropriate Scope · Opposite ↔ Author Agreement. Learn one side, get the other free.',
      '**"Predict, then peek."** Plan A is prediction (fast); Plan B is elimination (slow but reliable). Both land on the same one correct answer.',
      '**"If true" turns off the Extreme alarm.** On *if-true* / Strengthen–Weaken (Beyond) stems, judge **impact**, not language strength — Extreme can be correct.'
    ],
    keyConcepts: [
      '**Triage is strategy, not surrender.** Equal points per question means the smart move is banking time on winnable items and flagging brutal ones for a later pass.',
      '**Prediction beats elimination.** A specific prediction made *before* viewing the choices turns the Answer step into pattern-matching and dodges seductive traps; elimination is the slower fallback.',
      '**One fatal flaw eliminates a choice.** You don\'t need to find every problem — and your elimination reason may legitimately differ from the explanation\'s.',
      '**Know the exceptions cold:** Out of Scope **never** applies to Reasoning Beyond the Text; Extreme/Distortion can be **correct** for a radical author or on an **"if true"** stem.',
      '**Consistency of concepts > identical wording.** Don\'t reject a correct answer just because it paraphrases the passage, and don\'t accept a wrong one just because it borrows familiar language (FUD).'
    ],
    equations: []
  },

  questions: []
};
