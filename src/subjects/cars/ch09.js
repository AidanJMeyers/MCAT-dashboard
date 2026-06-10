// CARS Chapter 9 — Question Types I: Foundations of Comprehension.
// STRATEGY chapter (not science): re-authored to the rich-formatting quality bar.
// Sections, goals, and figure metadata are reused from ch09.json; the
// recap/detail markdown (recognition cues, attack strategy, worked examples) is authored here.
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }  (real figures only)

export default {
  id: 9,
  title: 'Question Types I: Foundations of Comprehension',
  subtitle: 'Main Idea · Detail (and Scattered Detail) · Function · Definition-in-Context',

  blocks: [
    /* ───────────────────────── 9.1 Main Idea Questions ───────────────────────── */
    {
      id: 's1', num: '9.1', title: 'Main Idea Questions',
      goals: [
        'Recognize a Main Idea question from its stem language (central thesis, primary purpose, main idea, references to the author).',
        'Predict the answer directly from the Goal you wrote in your passage Outline.',
        'Eliminate the predictable wrong answers: too narrow, too broad (Out of Scope), or wrong tone/degree.'
      ],
      recap: `
- **Main Idea** questions ask about the **big picture** of the *whole* passage — its **central thesis / primary purpose / main idea**, or a general reference to the author. Only **~5%** of CARS (≈2–3 questions).
- **Easy points:** do them **as soon as you see them**. Your Plan is simply **Go for the Goal** — the prediction is the **Goal** you already wrote in your Outline.
- **The verb matters** as much as the content — match what the author is *doing* (present, argue, critique), not just the topic.
- **Wrong answers are predictable:** one **too narrow** (one paragraph only), one **too broad** (Out of Scope), one with the **wrong tone** (positive/negative/ambivalent/impartial) or **degree** (extreme vs. moderate).
`,
      detail: `
#### How to recognize it
A Main Idea question asks about the passage **as a whole**, not a piece of it. Spot it by:

- The signal phrases **central thesis**, **primary purpose**, or **main idea** themselves.
- A **general reference to the author** — *"The author can best be viewed as a proponent of…"*, *"The author is primarily interested in…"*.
- A request for a **title** that captures the **main theme**.
- On rare occasions, a harder **rhetorical** angle — the intended **audience** or **medium**.

**Sample stems:**
- *The author's central thesis is that:*
- *Which of the following best characterizes the main idea of the passage?*
- *The primary purpose of the passage is to:*
- *Which of the following titles best captures the main theme of the passage?*
- *The language used in the passage makes it clear that the intended audience is:*

:::expertise
Per Kaplan's research of released AAMC material, **Main Idea questions are ~5% of the CARS section** — about **two or three questions**. Few in number, but fast and high-confidence if you Outlined well.
:::

#### How to attack it
1. **Decide to do it immediately** — these are quick points.
2. **Go for the Goal.** Your Plan is to reuse the **Goal** statement from your Outline as your prediction. This is *why* it pays to **Reflect** on the passage at the end of your Reading.
3. **Watch the verb.** The verb you choose (present, argue, refute, illustrate, critique) is often as load-bearing as the noun that follows it.
4. **If nothing matches your Goal, eliminate** the four predictable traps below.

##### The four predictable wrong-answer traps
| Trap | Why it's wrong |
|---|---|
| **Too narrow** | Reflects only **one paragraph**, not the whole passage (a Faulty Use of Detail). |
| **Too broad** | Goes beyond the passage → **Out of Scope**. |
| **Wrong tone** | Positive / negative / ambivalent / impartial mismatch with the author's actual attitude. |
| **Wrong degree** | **Extreme** wording where the author is **moderate** (or vice versa). |

:::keyconcept
Main Idea answers should **mirror your Goal**. Pair this with **Function** questions (§9.3), whose answers mirror your paragraph **Labels** — both types are answerable almost entirely from a good **Passage Outline**.
:::

:::bridge
Main Idea questions that ask about **audience** or **medium** are testing **rhetorical analysis**. Analyzing the likely author, her tone, and her voice reveals the intended audience and probable medium (Ch. 2 of *MCAT CARS Review*).
:::

#### Worked example — a psychology passage
**Passage (excerpt).** The author opens, *"There is no shortage of evidence for the existence of systemic biases in ordinary human reasoning,"* then presents Kahneman and Tversky's **anchoring** experiment (the rigged roulette wheel skewing UN-membership guesses), adds **Ariely's** Social-Security-number auction study and **Wilson et al. (1996)** showing awareness doesn't mitigate the bias, notes advertising's "original price → sale price" trick, and closes by naming **other** biases (loss aversion, the availability heuristic, optimism bias).

**A workable Outline:**
- **P1.** Systemic biases in reasoning; ex. anchoring (evidence: Kahneman & Tversky)
- **P2.** More evidence for anchoring (Ariely, Wilson et al.); other systemic biases
- **Goal:** *To present evidence for systemic biases in reasoning, especially anchoring*

**Question.** *The author's primary task in the passage is to:*

| | Choice | Verdict |
|---|---|---|
| A | search for evidence of systemic biases in normal human thinking | **Wrong verb** — sentence 1 says evidence is *not* in short supply, so the task isn't to *search*. |
| B | **discuss empirical findings on anchoring and other reasoning biases** | **Correct** — *discuss empirical findings* ≈ *present evidence*; scope is right (anchoring first, others mentioned). |
| C | show that anchoring is the most commonly occurring error in reasoning | **Out of Scope** — the passage never *compares* the frequency of biases. |
| D | demonstrate that knowledge of anchoring bias is insufficient to prevent it | **Faulty Use of Detail** — too narrow; that's only the Wilson et al. study, not the whole passage. |

**Takeaway:** the phrase **primary task** flags Main Idea → answer straight from the **Goal**. (B) matches in **content, scope, *and* verb**; (A) fails on the verb alone — proof that the verb carries the prediction.

:::mnemonic
**Main Idea = "GOAL."** **G**o for the Goal you Outlined · match the **O**verall passage (not one paragraph) · check the **A**ttitude (tone) · check the **L**evel (degree: extreme vs. moderate).
:::
`
    },

    /* ───────────────────────── 9.2 Detail Questions ───────────────────────── */
    {
      id: 's2', num: '9.2', title: 'Detail Questions',
      goals: [
        'Recognize a Detail question (declarative "is/are" language, "the author states," "according to the passage," stems ending in a colon).',
        'Use question-stem buzzwords plus your Outline to locate the exact sentence — then read the sentence before and after for context.',
        'Identify the Scattered subtype (Roman numerals or EXCEPT/NOT/LEAST) and save those time-sinks for last.'
      ],
      recap: `
- **Detail** questions ask what the passage states **explicitly** — classic "reading comprehension." They **zoom in** on fine points (opposite of Main Idea).
- **Most common Foundations type:** **≥ half** of this category; **~16%** of CARS (≈8–9 questions).
- **Plan:** follow the **content buzzwords** in the stem → use your **Outline** to find the sentence → **read one sentence before and after** → **paraphrase** it short-and-sweet → match.
- **Scattered Detail** = **Roman numerals** or **EXCEPT / NOT / LEAST**. These need 3–4 lookups → **save for last**; **process of elimination** is nearly inevitable.
- **Watch for the trap:** a "Detail" question that secretly requires an **inference** (see Ch. 10).
`,
      detail: `
#### How to recognize it
Detail questions sit on the surface of the text — the answer **is stated explicitly**. Recognition cues:

- **Simple declarative language** — *is* and *are* (not the subjunctive *would*/*could*).
- Phrases like **"the author states"** and **"according to the passage."**
- The stem is often an **incomplete sentence ending with a colon**.

**Sample stems:**
- *According to the author's account of [topic], [concept] is:*
- *The author states that [person] holds the view that:*
- *Based on the discussion in [paragraph reference], the work of [artist] was widely regarded as:*

##### The Scattered subtype
A **Scattered** question either uses a set of **Roman numeral** options or a capitalized **EXCEPT / NOT / LEAST**. Almost any type can be Scattered (Scattered Function, Scattered Inference…), but **Scattered Detail** is the most common.

- *The passage suggests which of the following about [topic]? [I / II / III]*
- *The author asserts all of the following EXCEPT:*
- *Which of the following claims does NOT appear in the passage?*

:::expertise
Per Kaplan's research, **Detail questions are ~16% of CARS** (≈8–9 questions) — **by far the most common** Foundations of Comprehension type. Get fast at these and you bank a large block of points.
:::

#### How to attack it
1. **Work standard Detail right away;** follow the stem's **content buzzwords**.
2. **Locate via the Outline,** then **read the sentence before and after** the referenced line for context (skip the neighbor only at the passage's very first/last sentence).
3. **Paraphrase in your own words** — make the prediction **"short and sweet"** so it's easy to hold while scanning choices.
4. **Scattered Detail → save for last.** It demands 3–4 separate lookups; lean on your **Outline** and on what you've already learned from earlier questions in the set. Still set basic expectations from the stem *before* diving into the choices.

:::expertise
Much of a Detail question's difficulty is figuring out **which choice matches your prediction**. Make the prediction **memorable** — a tight paraphrase you can repeat to yourself while reading A→D.
:::

:::bridge
Sometimes a question that *looks* like Detail actually requires an **inference** (an **Assumption** or **Implication** question). Those strategies are in **Ch. 10** of *MCAT CARS Review*. If the answer isn't literally on the page, you may be in inference territory.
:::

#### Worked example 1 — an arts passage (standard Detail)
**Passage (excerpt).** On the **Dada** movement: *"Dadaism was ultimately premised on a philosophical rejection of the dominant culture… the dominating culture of colonialist Europe. Not content with the violent exploitation of other peoples, Europe's ruling factions once again turned inward,"* reigniting provincial disputes into **World War I** (a name applied only later). P2 frames Dada as a creative-absurd response to the war's destructive absurdity (Duchamp's *Fountain*, sound poems, the ballet *Parade*).

**Question.** *As stated in the passage, prior to the Great War, the leaders of Europe were primarily focused on:*

**Locate it.** Two buzzwords: **the Great War** (≈ WWI, start of P2) and **the leaders of Europe** (≈ *Europe's ruling factions*, end of P1). Read those lines plus neighbors. Key cue: *"once again turned **inward**"* mirrors *"focused on."* If they turned inward **with** the war, then **before** it they were looking **outward** — at colonies.

| | Choice | Verdict |
|---|---|---|
| A | fighting one another in World War I | **Misread terminology** — that name was applied *later*; they couldn't focus on it before it happened. |
| B | **colonizing other parts of the globe** | **Correct** — matches "turned inward *again*" → previously outward at colonial acquisitions. |
| C | gazing inward at local problems | **Opposite** — inward describes *during* the war, not before. |
| D | rejecting the dominant culture | **Faulty Use of Detail** — that phrase describes the **Dada founders**, not Europe's leaders. |

#### Worked example 2 — the same passage (Scattered Detail)
**Question.** *Based on the passage, which of the following is **not** a characteristic associated with Dadaism?*

Even spelled in lowercase, **not** makes this **Scattered Detail** → likely your **last** question in the set. The phrasing *"a characteristic associated with"* is vague enough to include views held by **the author *or* by others** in the passage — so don't reject a choice just because the author wouldn't say it. Eliminate the three that *are* associated:

| | Choice | Associated? |
|---|---|---|
| A | A renunciation of European culture | **Yes** — *renunciation* = the author's *"rejection… of colonialist Europe."* Eliminate. |
| B | A reputation as an "anti-art" movement | **Yes** — "many commentators… described Dada as 'anti-art'" = a *reputation*, even though the author rejects the label. Eliminate. |
| C | Importance for later 20th-century art | **Yes** — Lowenthal's quote + *"lasting imprint on modern Western art."* Eliminate. |
| D | **The embrace of irrational atrocities** | **Correct (NOT associated)** — Dada *embraced irrationality*, but **atrocities** belong to the **war**, contrasted with Dada's *creative* absurdity. The word *atrocities* breaks the association. |

**Takeaway:** in EXCEPT/NOT/LEAST items, the **right answer is the odd one out**. Cross off everything the text supports; the survivor wins. Here a single wrong word — *atrocities* — is the whole game.

:::mnemonic
**Scattered = "Save it."** **S**et basic expectations from the stem → **A**ttack last → **V**erify every option against the text → **E**liminate the supported ones (the **survivor** is the EXCEPT/NOT answer).
:::
`
    },

    /* ───────────────────────── 9.3 Function Questions ───────────────────────── */
    {
      id: 's3', num: '9.3', title: 'Function Questions',
      goals: [
        'Recognize a Function question (purpose/motive/intention language, "in order to," "because," direct paragraph references).',
        'Answer from your Outline — usually the Label of the specific paragraph the stem points to.',
        'Use the nested hierarchy of purpose: a sentence/paragraph function can never conflict with the passage Goal.'
      ],
      recap: `
- **Function** questions ask **why the author wrote something** — the **purpose of a portion** of the passage (vs. Main Idea, which covers the whole). **~5%** of CARS (≈2–3 questions).
- **Recognition:** heavy **mention of the author** + **direct paragraph references**; words **purpose / motive / intention**; phrases ending in **"in order to"** or **"because."**
- **Plan:** go to your **Outline** and read the **Label** for the referenced paragraph (and maybe the Goal). If buzzwords point to specific sentences, reread *those* and ask how they serve the paragraph and the passage.
- **Nested purpose:** passage → paragraph → sentence → word. A part's function **can't conflict** with a higher-level one → eliminate any choice that fights the **Goal**.
`,
      detail: `
#### How to recognize it
Function asks about **authorial purpose for a piece** of the passage. Look for:

- **Frequent mention of the author** paired with **direct text references** — especially **paragraph references**.
- Purpose words: **purpose, motive, intention**.
- Stems ending in **"in order to"** or **"because."**

**Sample stems:**
- *What is the author's apparent purpose in stating [quotation]?*
- *The author mentions [topic] in [paragraph reference] in order to:*
- *The author's reference to [concept] in [paragraph reference] is most likely supposed to show:*
- *The author compares [one concept] to [another] because:*
- *Which of the following is the example from [paragraph] most likely intended to suggest?*

:::expertise
Per Kaplan's research, **Function questions are ~5% of CARS** (≈2–3 questions) — about as common as Main Idea. Both reward **reading for perspective** (tracking the author's attitude and intentions as you read).
:::

#### How to attack it
1. **Go to the Outline.** Read the **Label** for the paragraph the stem references; glance at the **Goal** too.
2. **Follow buzzwords to specific sentences,** reread them, and ask **how they fit** the paragraph's purpose *and* the passage's Goal.
3. **State the function in your own words,** then look for the matching answer.
4. **Use the hierarchy to eliminate.** Purpose is **nested** — a paragraph's job won't be **at odds with the author's Goal**. Even when authors raise opposing information, they usually do so **to shoot it down** (answering/countering a refutation).

##### The nested hierarchy of purpose
| Level | Carries the purpose of… | Where to find it |
|---|---|---|
| **Passage** | the whole argument | the **Goal** in your Outline |
| **Paragraph** | one subordinate move | the **Label** in your Outline |
| **Sentence** | a role within the paragraph | reread, guided by buzzwords |
| **Word / phrase** | a precise local effect | the exact quoted text |

:::keyconcept
**Main Idea answers reflect the Goal; Function answers reflect the Label.** Both types can often be answered **straight from your Passage Outline** without rereading — which is exactly why Outlining pays for itself on Test Day.
:::

#### Worked example — an ethics passage
**Passage (excerpt).** P1: the *"most prevalent argument"* against doctor-assisted suicide rests on a **passive vs. active euthanasia** distinction (letting die vs. killing); the author dismisses the *vagueness* objection as weak. P2: the author's real claim — the distinction is **not ethically relevant** — defended via a **thought experiment** ("suicide machine" + a daily-button "prevention device": same intention, same effect, only a *technical* difference in means).

**Outline:**
- **P1.** "Most prevalent argument" assumes passive/active difference (vague is okay)
- **P2.** Author: distinction is **not ethically relevant** (supported w/ thought experiment)
- **Goal:** *To argue the passive/active euthanasia distinction is not ethically relevant*

**Question.** *The author's apparent intention in discussing the "suicide machine" in paragraph 2 is to:*

The **P2 Label** already notes the thought experiment's role as **support** — that's your prediction; no reread needed unless a choice surprises you.

| | Choice | Verdict |
|---|---|---|
| A | **support his thesis using an imaginative exercise** | **Correct** — matches the Label: the thought experiment **supports** the P2 claim. |
| B | question the idea that vagueness is ethically relevant | **Wrong target** — vagueness was a P1 side issue; the experiment is about **relevance**, not vagueness. |
| C | explain the operation of a piece of medical equipment | **Faulty Use of Detail** — the device is described, but only **to illustrate a point**, not for its own sake (it's imaginary). |
| D | propose a new method for performing euthanasia | **Too literal** — taking the imaginary machine at face value. |

**Takeaway:** a strong **paragraph Label** *is* the answer to a Function question. Note how B, C, and D each grab a true-but-subordinate detail; only A names the sentence's **role** within the paragraph's purpose.

:::mnemonic
**Function = "Why'd they write it?"** Don't ask **what** the line says (that's Detail) — ask **why it's there**. The answer is the paragraph's **job (Label)**, and it must serve the passage's **Goal**.
:::
`
    },

    /* ──────────────────── 9.4 Definition-in-Context Questions ──────────────────── */
    {
      id: 's4', num: '9.4', title: 'Definition-in-Context Questions',
      goals: [
        'Recognize a Definition-in-Context question (a quoted/italicized word, phrase, or claim you must define as used in the passage).',
        'Define the term from context — never from a dictionary; the common definition is usually the trap.',
        'Go to the referenced sentence (use the Outline), read neighbors if needed, and phrase a meaning in your own words.'
      ],
      recap: `
- **Definition-in-Context** questions ask you to **define a word, phrase, or claim *as the author uses it***. The **final** Foundations type. **~4%** of CARS (≈2 questions).
- **Recognition:** the stem always **quotes a specific term** (often in **"quotation marks"** or *italics*), e.g. *"As used by the author, [term] most nearly means:"*
- **Do them right away** — they're quick (small portion of text) — but **a dictionary will betray you**.
- **The trap is the dictionary definition:** common meanings appear as tempting **Out of Scope** wrong answers. Define from **context only**.
- **Plan:** go to the referenced sentence (use the **Outline**), read before/after if needed, then **phrase the meaning in your own words**. **Author keywords** kill wrong-tone choices.
`,
      detail: `
#### How to recognize it
The stem **points at a specific term** and asks for its meaning **in this passage**. Cues:

- A **word, phrase, or whole claim** is named — usually in **"quotation marks"** or *italics* (occasionally neither).
- Meaning-language: **"most nearly means," "refers to," "what the author most likely means," "most synonymous with."**

**Sample stems:**
- *As used by the author, the word [term] most nearly means:*
- *As used in the passage, [term] refers to:*
- *The author's choice of the phrase [term] is probably intended to suggest:*
- *In [paragraph reference], the author asserts that [claim]. What the author most likely means by this is:*
- *Which of the following is most synonymous with [concept] as discussed in the text?*

:::expertise
Per Kaplan's research, **Definition-in-Context questions are ~4% of CARS** (≈2 questions). Low frequency, but **fast points** — they reference only a small slice of text.
:::

#### How to attack it
1. **Decide to do it as soon as you see it** — quick and self-contained.
2. **Ignore the dictionary.** Authors **imbue common words with special meaning**; the everyday definition is usually a **trap** (an Out-of-Scope match).
3. **Go to the text.** Use the **paragraph reference** (or your Outline) to find the sentence; read the **sentence before and after** if one line isn't enough.
4. **Phrase the meaning in your own words** from how the term **actually functions** in context.
5. **Use Author keywords** — the author's tone lets you rule out choices with the **wrong attitude** immediately.

:::expertise
Wrong answers here are frequently **accurate dictionary definitions** that simply **don't match the passage's usage**. Always check **how the author uses the word**, not what it means in general.
:::

#### Worked example — a history passage
**Passage (excerpt).** P1 quotes a 1941 *"exuberant nationalist"* — revealed to be **Henry Luce**, who urged the U.S. toward global hegemony (the *"American Century"*). P2: not everyone agreed — **Henry Wallace** (FDR's VP) called imperialism immoral and championed *"the century of the common man"* and a **cosmopolitan** direction; but the VP slot went to **Harry Truman**, *"a man whose narrow **provincialism** ensconced him firmly in Luce's camp,"* followed by the atomic bombings, Korea, and the Cold War.

**Question.** *The author's use of the term "provincialism" in paragraph 2 comes closest in meaning to:*

**Locate & define from context.** Key sentence: Truman's *"narrow provincialism ensconced him firmly in Luce's camp."* So **provincialism = a view shared by Truman *and* Luce**, opposed to the **cosmopolitan** Wallace. Since Luce is the **nationalist** (P1) and **exceptionalist** (P2), provincialism ≈ **nationalistic exceptionalism**.

| | Choice | Verdict |
|---|---|---|
| A | German jingoism | **Faulty Use of Detail** — the German jingoist was a P1 foil; Luce and Truman are **Americans**. |
| B | economic imperialism | **Misplaced emphasis** — that's Wallace's critique; Truman's examples are all **military**, not economic. |
| C | **nationalistic exceptionalism** | **Correct** — nationalism (P1) and exceptionalism (P2) are both attributed to **Luce**, Truman's camp. |
| D | exuberant cosmopolitanism | **Opposite** — *cosmopolitan* describes **Wallace**, the contrasting side. |

**Takeaway:** the answer came from **who holds the view** (Truman = Luce's camp), not from any dictionary sense of "provincialism." In multi-perspective passages, **track which side each term belongs to** — that mapping *is* the definition.

:::mnemonic
**Definition-in-Context = "Context, not dictionary."** The everyday meaning is the **bait**. Define the word by **how the author swings it** in this sentence — then let **tone** knock out the rest.
:::

#### Foundations of Comprehension — the four types at a glance
| Type | How to **recognize** | How to **attack** |
|---|---|---|
| **Main Idea** (~5%) | *central thesis / primary purpose / main idea*; general reference to the author; "best title." | **Go for the Goal** in your Outline; match content **and verb**; cut the too-narrow / too-broad / wrong-tone / wrong-degree traps. |
| **Detail** (~16%) | *the author states / according to the passage*; declarative *is/are*; stem ends in a colon. | Follow **buzzwords** → Outline → sentence (+neighbors); **paraphrase** short-and-sweet → match. |
| **Scattered Detail** (subtype) | **Roman numerals** or **EXCEPT / NOT / LEAST**. | **Save for last**; **eliminate** every supported option — the **survivor** is the answer. |
| **Function** (~5%) | *purpose / motive / intention*; "in order to," "because"; **paragraph references**. | Read the paragraph **Label** in your Outline; state the **role**; reject choices that fight the **Goal**. |
| **Definition-in-Context** (~4%) | a **quoted / italicized term** + *most nearly means / refers to*. | Define from **context, not dictionary**; go to the sentence; use **Author keywords** to cut wrong tone. |
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '9.1 Main Idea Questions',
        points: [
          '**Main Idea** questions ask about the **whole passage** (central thesis / primary purpose / main idea / a general reference to the author). **~5%** of CARS.',
          '**Plan = Go for the Goal:** the prediction is the **Goal** you wrote in your Outline; the **verb** matters as much as the content.',
          'Wrong answers are predictable: **too narrow**, **too broad (Out of Scope)**, **wrong tone**, or **wrong degree**.'
        ]
      },
      {
        section: '9.2 Detail Questions',
        points: [
          '**Detail** = what the passage states **explicitly**; the **most common** Foundations type (**~16%** of CARS).',
          'Follow **content buzzwords** → use your **Outline** → read the sentence **before and after** → **paraphrase** short-and-sweet → match.',
          '**Scattered Detail** (Roman numerals or **EXCEPT/NOT/LEAST**) is time-consuming → **save for last** and use **process of elimination**.',
          'Beware the **disguised inference** — a "Detail" question that actually needs an Assumption/Implication (Ch. 10).'
        ]
      },
      {
        section: '9.3 Function Questions',
        points: [
          '**Function** asks **why** the author included a **portion** of the passage (purpose / motive / intention; "in order to"). **~5%** of CARS.',
          'Answer from the paragraph **Label** in your Outline; reread buzzword sentences only if needed.',
          'Purpose is **nested** — a part\'s function can\'t conflict with the passage **Goal**; opposing material is usually raised **to refute it**.'
        ]
      },
      {
        section: '9.4 Definition-in-Context Questions',
        points: [
          '**Definition-in-Context** asks for a term\'s meaning **as used in the passage** (quoted/italicized term). **~4%** of CARS.',
          '**Define from context, never a dictionary** — the common definition is the trap (Out of Scope).',
          'Go to the referenced sentence (use the Outline), read neighbors, phrase the meaning in your own words; **Author keywords** cut wrong-tone choices.'
        ]
      }
    ],
    mnemonics: [
      '**Main Idea = "GOAL":** **G**o for the Goal you Outlined · match the **O**verall passage · check the **A**ttitude (tone) · check the **L**evel (degree).',
      '**Scattered = "Save it":** **S**et expectations from the stem · **A**ttack last · **V**erify every option · **E**liminate the supported ones — the survivor wins the EXCEPT/NOT.',
      '**Function = "Why\'d they write it?"** Detail asks *what* the line says; Function asks *why it\'s there* — the answer is the paragraph **Label**.',
      '**Definition-in-Context = "Context, not dictionary":** the everyday meaning is the bait; define the word by how the author swings it here.',
      '**Outline pays twice:** **Main Idea → Goal**, **Function → Label.** Both types are answerable almost entirely from your Passage Outline.',
      '**Decide vs. defer:** Main Idea, standard Detail, Function, and Definition-in-Context are **do-now** points; **Scattered Detail is a do-last** time-sink.'
    ],
    keyConcepts: [
      '**The Outline is the engine of Foundations questions.** A Goal + per-paragraph Labels gives instant predictions for Main Idea (Goal) and Function (Label) and a map for locating Detail.',
      '**Predict before you peek.** For every type, set an expectation from the stem *before* reading choices — then hunt for the **match**, rather than letting four tempting options pull you around.',
      '**Wrong-answer pathologies recur:** **Faulty Use of Detail** (true but too narrow / about the wrong subject), **Out of Scope** (too broad), **Opposite**, and **wrong tone/degree**. Naming the flaw speeds elimination.',
      '**Scope discipline:** Main Idea = whole passage; Function = a portion; Detail = a sentence; Definition-in-Context = a single term. Match the answer\'s scope to the question\'s scope.',
      '**Context beats the dictionary** — and explicit text beats inference. Stay on the page for Detail and Definition-in-Context; only climb to inference when the answer truly isn\'t stated (Ch. 10).'
    ],
    equations: []
  },

  questions: []
};
