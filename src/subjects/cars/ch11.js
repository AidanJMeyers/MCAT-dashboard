// CARS Chapter 11 — Question Types III: Reasoning Beyond the Text.
// STRATEGY chapter (not science): the only "figure" extracted (fig01) is the
// decorative chapter title card, so no real content figures are used. All
// structure, tables, and worked examples are authored from the source text.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];   // -> { src, alt, caption } (unused: no real figures)

export default {
  id: 11,
  title: 'Question Types III: Reasoning Beyond the Text',
  subtitle: 'Apply questions · Strengthen–Weaken (Beyond the Passage) questions · other Reasoning Beyond the Text questions',

  blocks: [
    /* ───────────────────────── 11.1 Apply Questions ───────────────────────── */
    {
      id: 's1', num: '11.1', title: 'Apply Questions',
      goals: [
        'Recognize Reasoning Beyond the Text questions by the presence of novel information in the stem or answers',
        'Distinguish the two directions of the passage↔new-situation relationship (Apply vs. Strengthen–Weaken Beyond)',
        'Identify the three Apply subtypes — Response, Outcome, and Example — and apply the right strategy to each',
        'Use necessary vs. sufficient conditions to confirm or eliminate Example answer choices'
      ],
      recap: `
- **Reasoning Beyond the Text** questions always introduce **novel information** (in the stem, the answers, or both) that the passage never states or suggests.
- Two directions: **passage → new situation** = **Apply**; **new situation → passage** = **Strengthen–Weaken (Beyond)**.
- **Apply is the single most common type** — ~**21%** of CARS (~11 questions). Three roughly equal subtypes: **Response**, **Outcome**, **Example**.
- **Strategy:** with a long stem, **jump to the colon/question mark first** to Assess the task, then read the new info closely for **analogies to the passage**.
- **Response** → get inside the author's head (Author keywords). **Outcome** → use cause-and-effect Logic keywords. **Example** → match against necessary & sufficient conditions.
`,
      detail: `
#### What makes a question "Beyond the Text"
**Reasoning Beyond the Text** questions are easy to spot: they always involve **novel information** — content in the question stem, the answer choices, or both — that is **not stated or even suggested by the passage** and may not even seem related to it at first.

- A classic pattern: words like **Suppose**, **Assume**, or **Imagine** introduce an elaborate scenario filling several lines, then a question links that new content back to the author or passage.
- The connection runs in one of **two directions**:

| Direction | Question type | Core task |
|---|---|---|
| **Passage → new situation** | **Apply** | Take the author's ideas as the *starting point* and extrapolate to a new context |
| **New situation → passage** | **Strengthen–Weaken (Beyond)** | Judge how the *new information* affects the author's argument |

:::expertise
According to research on released AAMC material, **Apply questions make up about 21% of the CARS section (about 11 questions)** — the most common of the eight major question types covered across these three chapters.
:::

#### The three Apply subtypes
Apply questions take the text as a starting point and ask you to extrapolate. They split into **three roughly equal subtypes**, each about one-third of the Apply pool:

| Subtype | The question asks for… | What to mine from the passage |
|---|---|---|
| **Response** | How the **author** (or a named viewpoint) would *respond, reply, advise,* or which claim they'd *agree/disagree* with | **Author keywords** that reveal beliefs and tone |
| **Outcome** | The probable **outcome, result, expectation, or consequence** in an analogous situation | **Logic keywords** marking cause → effect |
| **Example** | An **example/instance** of a concept (or, harder: how the author would *classify* an outside case) | **Definitions, explanations,** and the author's own examples |

##### Sample stems by subtype
- **Response:** *"The author would most likely respond to this by claiming…"* · *"With which claim would the author be LEAST likely to agree?"* · *"What would the author most probably advise…?"*
- **Outcome:** *"…the most reasonable outcome…"* · *"…the most likely consequence of [new situation]…"* · *"One could reasonably expect, on the basis of the passage, that…"*
- **Example:** *"Which best exemplifies the author's notion of [concept]?"* · *"Which phenomenon would the author most likely characterize as a [concept]?"* · *"[New info]. The author would most likely classify this as…"*

:::expertise
Whenever a stem is **particularly lengthy**, it is almost certainly Reasoning Beyond the Text — but it could be Apply *or* Strengthen–Weaken (Beyond). To save time, **jump to the very last line before the question mark or colon** to determine which type it is and exactly what you're looking for. Then read the new information carefully, watching for analogies to the passage.
:::

#### Strategy by subtype
The general approach mirrors the Kaplan method: **Assess** the task (jump to the colon if the stem is long), read the new info closely for hints that connect it to the passage, then go back and reread the relevant portion to make a **prediction**. While Planning, keep the subtype in mind.

##### Response
- Your task is to **get inside the author's head**. The correct answer is **consistent with the author's beliefs**, signaled by **Author keywords** (Chapter 3 of MCAT CARS Review).
- If you can't form a clean prediction, **eliminate answers logically inconsistent** with the author's assertions.
- If a *different* viewpoint is named in the stem, adopt **that** perspective instead.

##### Outcome
- Pay attention to passage language about **cause and effect** — much of it **Logic keywords**.
- **Match the cause** in the stem to an analogous cause in the passage, then use the effect the passage assigns it as the basis for your prediction.

##### Example
- Find the relevant text — especially **definitions, explanations,** or the author's **own examples** of the concept.
- Note **necessary conditions** (must be present in *every* instance) and **sufficient conditions** (enough on their own to qualify), from Chapter 6 of MCAT CARS Review.

| Condition type | Best use | Test logic |
|---|---|---|
| **Sufficient** | **Quick matching** — find the right answer fast | If present → it *must* be an instance |
| **Necessary** | **Elimination** — rule out answers that lack it | If absent → it *cannot* be an instance |

:::mnemonic
**Apply = "ROE" — Response, Outcome, Example.** *Response* = read the author's mind (Author keywords). *Outcome* = run the cause forward (Logic keywords). *Example* = match the definition (necessary/sufficient conditions). Three eggs in the Apply ROE.
:::

:::keyconcept
Apply is **passage → new situation**: you **trust the passage** and project its ideas outward. Any correct Apply answer must stay **consistent with what the author says *and* with the author's tone** — an answer that is too strong or too condemning for the author's voice is wrong even if its content is "close."
:::

#### Worked example — a psychology passage (anchoring bias)
> *The passage describes Kahneman and Tversky's "anchoring" heuristic — an error-prone shortcut in which a prior, even random, number skews later quantitative judgments (e.g., a rigged roulette wheel changed guesses about the percentage of UN states that are African). It cites Ariely's Social-Security-number auction study and Wilson et al. (1996), which showed that even **awareness** of the bias is **insufficient to mitigate** it. It notes advertisers exploit anchoring by showing an "original" price before a "sale" price.*

##### Example 1 (Response)
> **Suppose** a consumer is drawn by a retailer's ads promising 50%+ savings on all appliances. **The author would probably warn the consumer that:**
> **(A)** sales are scams designed to exploit the public · **(B)** the pre-markdown prices are most likely set artificially high · **(C)** making a rational decision about what to buy is impossible · **(D)** discounts manipulate buyers into believing they found a better deal, not to push faulty products.

**Solution.** The long stem warrants jumping to the colon: *what would the author warn?* → a **Response**, so think about the author's views. The sale ad points you to the paragraph where the author notes advertisers feature an *"original"* price before a *"sale"* price. The **scare quotes** imply the "original" price exists just to make the "sale" price look lower — i.e., the **anchoring effect**. Predict: the author warns about anchoring with presale prices.
- **(B)** matches the prediction → **correct**.
- **(A)** *Distortion* — language too strong; the author isn't condemning enough to call sales "scams." **Tone matters.**
- **(D)** *Distortion* — the word *impossible* overreaches.
- **(C)** *Out of Scope* — the author never claims discounted goods are damaged or stolen.

##### Example 2 (Outcome)
> **Imagine** a psychologist specialized in studying systemic reasoning biases. This psychologist could most reasonably be expected to:
> **(A)** more often misjudge quantities when given **no** anchor · **(B)** make significantly fewer reasoning mistakes than the ignorant · **(C)** be equally susceptible to anchoring errors as anyone else · **(D)** entirely avoid the fallacies ordinary people commit.

**Solution.** Short stem — no need to jump ahead. *Most reasonably be expected to* = an **Outcome**. There's no explicit cue, so **peek at the first answers** for the form the answer will take.
- **(A)** *Out of Scope* — the passage only covers what happens *with* an anchor, never accuracy *without* one.
- **(B)** *Opposite* — Wilson et al. showed **awareness is insufficient to mitigate** the bias, so expertise wouldn't slash errors. This rules out (B) *and* reveals the right prediction: this expert is **just as susceptible** as anyone.
- **(C)** matches the revised prediction → **correct**.
- **(D)** *Distortion/Opposite* — an even more extreme (B).

##### Example 3 (Example)
> Which of the following would the author be **LEAST** likely to consider a case of anchoring bias?
> **(A)** a high opening charity-auction bid raises total proceeds · **(B)** a sequel is deemed a failure for not beating the original's record receipts · **(C)** a shipping site overestimates delivery times, raising satisfaction · **(D)** poor initial console sales lead the maker to cut the suggested retail price.

**Solution.** Despite "LEAST," this is still an **Example** question. The passage gives no explicit definition, so isolate **necessary conditions**: a **baseline numerical "anchor"** (random or deliberately set) that then **skews quantitative judgments**. Anything satisfying these is a *true* example → **eliminate it** (you want the one that is *not*).
- **(A)** lofty opening bid → higher appraisals → bigger proceeds. Clear anchoring → eliminate.
- **(B)** the original film anchors judgment of the sequel; the "failure" verdict is itself a biased misjudgment → eliminate.
- **(C)** the quoted ETA anchors expectations; under-promising raises perceived service — directly analogous to the marked-up "original" price → eliminate.
- **(D)** **correct** — a price cut is a *rational response* to low demand (a **cause**), not a biased judgment skewed by an anchor. The choice mentions only the cause, not any anchored effect, so it is **LEAST** likely to count as anchoring.

:::expertise
With Reasoning Beyond the Text questions — which carry **new elements in the answers** — it can pay to glance at the **first one or two answer choices** before fully committing to a prediction. If the options diverge from what you expected, **revise your prediction** and then match. Matching is usually faster than eliminating all three wrong answers.
:::
`
    },

    /* ──────────── 11.2 Strengthen–Weaken (Beyond the Passage) Questions ──────────── */
    {
      id: 's2', num: '11.2', title: 'Strengthen–Weaken (Beyond the Passage) Questions',
      goals: [
        'Recognize Strengthen–Weaken (Beyond) questions by new information combined with logical-relationship language',
        'Identify the three structural parts of every argument: conclusion, evidence/refutation, and the connection',
        'Apply the same evidence–conclusion strategy as Strengthen–Weaken (Within), adapted for outside information',
        'Weigh the credibility of evidence (expert vs. popular opinion) by the discipline of the passage'
      ],
      recap: `
- Like Strengthen–Weaken (Within), these concern **evidence–conclusion relationships** — but **at least one claim comes from outside the passage** (stem or answers).
- They treat the passage as **flexible**, subject to modification by **outside forces**.
- **~16% of CARS (~8–9 questions).** Recognize them by **new info + logical-relationship words**: *support, bolster, challenge, undermine, weaken, consistent, threaten.*
- **Strategy:** isolate the **conclusion, the evidence/refutation, and the connection**; with a long stem, **jump to the colon first**, then read closely for **analogy** to the passage.
- Correct answers are **seldom exact matches** to your prediction and are often only **incidentally related** to the text.
`,
      detail: `
#### What defines the type
Like the **Strengthen–Weaken (Within)** type from Chapter 10, these questions concern **evidence–conclusion relationships**. Two things set the **Beyond** version apart:

1. **At least one claim is *not* from the passage** — it's unique to the **question stem** or the **answer choices**.
2. They treat the **passage as flexible** — modifiable by outside forces, rather than a fixed argument to be analyzed internally.

##### How to recognize it
If the question includes **new information** and asks about **logical relationships** — *support, challenge, consistency, bolster, undermine, threaten, weaken* — you can safely Assess it as **Strengthen–Weaken (Beyond)**. Watch for the new information **hiding in the answer choices**, signaled by words like **would** and **could**.

| Sample stem | Tells you it's S–W (Beyond) because… |
|---|---|
| *"Which statement, if true, would most **bolster** the author's argument…?"* | new info ("if true") + support language |
| *"Assume that [new info]. This assumption **weakens** the author's claim that…"* | outside assumption + weaken language |
| *"Which study finding would most seriously **undermine** the author's thesis?"* | new finding + weaken language |
| *"[New info]. In conjunction with the passage, it is most reasonable to **conclude** that…"* | outside fact combined with the text |
| *"Which would present the greatest **CHALLENGE** to their argument?"* | new info + challenge language |

:::expertise
Research on released AAMC material suggests **Strengthen–Weaken (Beyond the Passage) questions make up about 16% of the CARS section (about eight or nine questions).**
:::

#### Strategy — the three parts of an argument
As with Strengthen–Weaken (Within), identify the **three relevant parts** and decide **which one (or two)** you must supply:

| Part | What it is |
|---|---|
| **Conclusion** | The claim being argued for |
| **Evidence / refutation** | What supports (strengthen) or attacks (weaken) it |
| **Connection** | The nature of the link — strengthen, weaken, or some unspecified relevance |

Process:
1. **Determine which component you're seeking** first.
2. If the stem is **long, don't read all the new details on the first pass** — jump to what immediately precedes the question mark/colon to see where it's going.
3. **Then reread the whole stem closely**, watching for **analogy**: if a novel finding reminds you of a passage study that supported the thesis, the answer probably says it **strengthens** that thesis.
4. From there, the **Logic keywords** from the passage drive the analysis, exactly as in Strengthen–Weaken (Within).

:::bridge
Strengthen–Weaken (Beyond) is the twin of **Strengthen–Weaken (Within)** from Chapter 10 — the only difference is that **Beyond brings in new information** while **Within** stays entirely inside the passage. Review the two together; the strategic approach is nearly identical.
:::

:::keyconcept
**The big watch-out:** correct answers to Strengthen–Weaken (Beyond) questions are **seldom exact matches** to your prediction and are **far more likely to be only incidentally related** to the text. Hold predictions loosely and judge each answer by its *logical effect* on the argument, not its surface resemblance to the passage.
:::

#### Worked example — an arts passage (Dada)
> *The passage frames the **Dada** movement as a foundational 20th-century abstraction movement born from a philosophical rejection of **colonialist Europe**. It blames Europe's ruling factions for igniting "World War I" — sarcastically noting "the European subcontinent apparently being the only part of the world that mattered." It cites Duchamp's Fountain, sound poems, and the ballet Parade, then concedes many call Dada "anti-art" before insisting it "has left a lasting imprint on modern Western art."*

##### Example 1 (relevance / strengthen)
> *According to some estimates, prior to 1914 more than four-fifths of the world's landmass was controlled by European nations or former colonies such as the U.S. If accurate, what effect does it have on the passage?*
> **(A)** bolsters the author's suggestion that European colonialism was an overbearing force · **(B)** weakens the assertion that WWI was instigated by provincial disputes · **(C)** strengthens the claim that Europe is the only place that mattered · **(D)** challenges the insinuation that European rulers ignored the rest of the globe.

**Solution.** Long opening details → skip to the question: *what effect on the passage?* → **S–W (Beyond)**; the task is to judge **relevance**. Reread the end of paragraph 1 (Europe and WWI). The land-control figure supports the author's characterization of a **dominating colonialist Europe**.
- **(A)** **correct** — *overbearing* is a synonym for *dominating*; tight connection to the actual passage language.
- **(B)** *Faulty Use of Detail* — landmass controlled doesn't threaten the claim that *disputes* triggered WWI.
- **(C)** *Out of Scope* — the author uses that phrase **sarcastically**, and a **value judgment** can't be settled by geographic facts.
- **(D)** *Out of Scope* — the author actually says rulers "turned inward" *after* outward exploitation, so this isn't the author's insinuation.

##### Example 2 (weaken)
> *Which of the following, if true, would most **threaten** what the author says in the final sentence of the second paragraph* (Dada "has left a lasting imprint")?
> **(A)** the public rarely names a Dada work as the century's most important art · **(B)** other movements (Surrealism, Pop Art) were also called "anti-art" · **(C)** art historians today consider Dada **merely a brief departure** from the main themes of 20th-century European art · **(D)** some founders saw Dada as the purest form of art.

**Solution.** *If true* signals new elements in the answers → **S–W (Beyond)**; *threaten* = **weaken**. The last sentence asserts Dada's **lasting influence**, so look for a refutation of that influence.
- **(C)** **correct** — an expert **consensus** of "a brief departure" clashes directly with "a lasting imprint." (Appeals to **expert opinion** carry weight in arts passages, where the author already name-drops and quotes authorities.)
- **(A)** weak threat — popular opinion can be mistaken, and "lasting imprint" ≠ "single most important movement."
- **(B)** *Opposite* — actually **strengthens** the author's point that calling something anti-art doesn't make it so.
- **(D)** no impact — and it targets the **penultimate** sentence, not the **last** one.

:::expertise
**Appeals to authority** are common in arts/literature CARS passages, where value judgments dominate. **Widespread expert agreement** provides even stronger support there. But weigh evidence by **field**: quoting experts supports an arts passage well, yet carries **far less weight in empirical fields** like psychology or economics. **Non-expert/popular opinion** carries the least — actual public-opinion surveys appear mostly in political science.
:::
`
    },

    /* ──────────── 11.3 Other Reasoning Beyond the Text Questions ──────────── */
    {
      id: 's3', num: '11.3', title: 'Other Reasoning Beyond the Text Questions',
      goals: [
        'Recognize the three rare Reasoning Beyond the Text subtypes: Probable Hypothesis, Alternative Explanation, and Passage Alteration',
        'Reason backward from effect to cause for Probable Hypothesis and Alternative Explanation questions',
        'Apply elimination strategy when no clean prediction is possible',
        'Choose the answer that achieves the goal with the least modification to the passage for Passage Alteration questions'
      ],
      recap: `
- Some Beyond-the-Text tasks are neither **Apply** nor **Strengthen–Weaken (Beyond)** — usually about **one question per section** is one of these three rare types.
- **Probable Hypothesis** = the counterpart to an Outcome Apply, but runs **backward**: given an effect, find the **likely cause** using Logic keywords.
- **Alternative Explanation** = also seeks a **cause**, but for a passage phenomenon, and the cause is **not given** and may be unlike anything discussed → **eliminate** answers that wouldn't produce the result.
- **Passage Alteration** = pick the **change to the passage** that makes it consistent with new contradicting info — with the **least modification** to the author's original ideas.
`,
      detail: `
#### When it's neither Apply nor Strengthen–Weaken
Some Reasoning Beyond the Text tasks fall outside both major categories. None occurs especially often, so the book covers **three cases** that have appeared on past exams.

:::expertise
On released AAMC material, there is **usually one Reasoning Beyond the Text question per section that is neither an Apply nor a Strengthen–Weaken (Beyond) question.** Don't over-invest in memorizing these — recognize them, apply the logic, and move on.
:::

#### The three rare subtypes

| Subtype | Direction | What the stem asks | Core strategy |
|---|---|---|---|
| **Probable Hypothesis** | effect → cause | Give new details, then ask for the **likely cause / most reasonable explanation** | Use **Logic keywords** for analogous cause–effect; if no match, **eliminate** answers that contradict the author |
| **Alternative Explanation** | effect → cause (new) | Take a **passage phenomenon** and ask for a cause **not given** in the text | **Go through every answer**; eliminate any that **wouldn't produce** the result; among survivors, drop those that **conflict** most with the passage |
| **Passage Alteration** | revise the text | Ask what **change to the passage** would make it consistent with **new contradicting** info | Choose the answer that achieves the effect with the **least modification** to the author's original ideas |

##### Probable Hypothesis
- The **counterpart to Apply's Outcome subtype**, but reversed: instead of asking what *effect* follows a new cause, it asks for the **likely cause** behind a given effect.
- Stems ask for a **probable hypothesis**, the **likely cause**, or the **most reasonable explanation** based on the passage.
- **Working backward** from effect to cause is harder — lean on **Logic keywords** that reveal analogous cause–effect relationships. If no match exists, **eliminate** any answer that **contradicts** what the author states or suggests.

##### Alternative Explanation
- Also about **causes**, but trickier: it **starts with a phenomenon (possibly straight from the passage)** and asks for a cause that is **not given** and may not resemble anything discussed.
- Predictions are nearly impossible, so **Plan to go through each answer choice**, eliminating any that **would not produce the result** in the stem.
- Stuck between equally plausible causes? **Eliminate those that most conflict** with other parts of the passage. A correct alternative explanation **departs from the author's explanation** but **should not significantly contradict** the author elsewhere.

##### Passage Alteration
- The rarest of the three: it asks about **changes the author could make** so the passage stays **consistent with new information** provided.
- Like the rare **resolve-the-paradox** task within the text, **except** the new information **contradicts** what the author says or implies.
- The correct answer produces the **desired consistency with the *least* amount of modification** to the ideas originally presented.

:::mnemonic
**"Hypothesis & Alternative both hunt the CAUSE; Alteration fixes the PASSAGE."** *Probable Hypothesis* and *Alternative Explanation* run **backward** (effect → cause); *Passage Alteration* **rewrites** the text minimally to absorb contradicting new info.
:::

:::keyconcept
A unifying theme across all three: when you **can't predict**, switch to **elimination by logical fit** — keep only answers that genuinely produce the stated effect (or cause) and that **don't clash** with the rest of the passage. The correct answer is the **most reasonable and least disruptive** one, never the most extreme.
:::

#### Summary — all Reasoning Beyond the Text question types

| Type | Frequency | New info where | Recognize by | Direction | Strategy core |
|---|---|---|---|---|---|
| **Apply — Response** | ~21% total (Apply) | stem/answers | "respond," "advise," "agree" | passage → situation | Author keywords; match author's beliefs **and tone** |
| **Apply — Outcome** | (≈⅓ of Apply each) | stem/answers | "outcome," "consequence," "expect" | passage → situation | Logic keywords; run the cause forward |
| **Apply — Example** | | stem/answers | "exemplifies," "classify as" | passage → situation | necessary (eliminate) & sufficient (match) conditions |
| **Strengthen–Weaken (Beyond)** | ~16% | stem/answers | "support," "challenge," "weaken," "consistent" | situation → passage | conclusion + evidence + connection; judge logical effect |
| **Probable Hypothesis** | ~1/section (combined) | stem | "likely cause," "best explanation" | effect → cause | Logic keywords backward; eliminate contradictions |
| **Alternative Explanation** | | answers | "alternative cause," phenomenon given | effect → cause (new) | eliminate non-producing causes; avoid passage conflict |
| **Passage Alteration** | | stem | "change the passage to be consistent" | revise text | least modification to original ideas |
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Apply Questions',
        points: [
          'Reasoning Beyond the Text questions always introduce **novel information** not stated or suggested by the passage.',
          '**Apply** runs **passage → new situation**; it is the most common type at **~21%** of CARS (~11 questions).',
          'Three subtypes split the pool roughly evenly: **Response** (author keywords), **Outcome** (logic/cause–effect keywords), **Example** (necessary & sufficient conditions).',
          'With a long stem, **jump to the colon/question mark** to Assess the task, then read the new info for **analogies** to the passage.',
          'Correct answers must stay consistent with the author\'s **beliefs *and* tone** — too-strong language is a Distortion.'
        ]
      },
      {
        section: 'Strengthen–Weaken (Beyond the Passage) Questions',
        points: [
          'Concern **evidence–conclusion relationships** like S–W (Within), but **at least one claim comes from outside the passage** and the passage is treated as **flexible**.',
          'Make up **~16%** of CARS (~8–9 questions); recognized by **new info + relationship words** (support, challenge, weaken, consistent).',
          'Identify the **conclusion, the evidence/refutation, and the connection**, then decide which you must supply.',
          'Correct answers are **rarely exact matches** and are often only **incidentally related** to the text — judge by logical effect.',
          'Weigh evidence by **field**: expert opinion is strong in arts/literature, weaker in empirical sciences; popular opinion is weakest.'
        ]
      },
      {
        section: 'Other Reasoning Beyond the Text Questions',
        points: [
          'About **one question per section** is neither Apply nor S–W (Beyond).',
          '**Probable Hypothesis** reverses Outcome: given an effect, find the **likely cause** with Logic keywords.',
          '**Alternative Explanation** seeks a **new cause** for a passage phenomenon; eliminate answers that wouldn\'t produce the result or that clash with the passage.',
          '**Passage Alteration** picks the change making the passage consistent with contradicting new info, with the **least modification** to the original.'
        ]
      }
    ],
    mnemonics: [
      '**Apply = "ROE":** **R**esponse (read the author\'s mind via Author keywords) · **O**utcome (run the cause forward via Logic keywords) · **E**xample (match the definition via necessary/sufficient conditions).',
      '**Two directions:** **Apply** points **passage → new situation** (trust the passage, project outward); **Strengthen–Weaken (Beyond)** points **new situation → passage** (judge the new info\'s effect).',
      '**Long stem? Jump to the colon.** Read the last line before the "?" or ":" first to Assess the task and type, *then* read the new information closely for analogies.',
      '**Sufficient = match fast; necessary = eliminate.** A sufficient condition confirms an instance; a missing necessary condition rules one out.',
      '**Tone test for Apply:** an answer can be factually "close" yet wrong because it is **too strong** for the author\'s voice (a Distortion). Match content *and* attitude.',
      '**"Hypothesis & Alternative hunt the CAUSE; Alteration fixes the PASSAGE."** The two cause-questions run effect → cause; Passage Alteration minimally rewrites the text.'
    ],
    keyConcepts: [
      '**Novel information is the fingerprint** of every Reasoning Beyond the Text question — it lives in the stem, the answers, or both, and is never stated or suggested by the passage.',
      '**Direction determines type:** passage → situation = Apply; situation → passage = Strengthen–Weaken (Beyond). Settle the direction before predicting.',
      '**When you can\'t predict, eliminate by logical fit:** keep only answers that genuinely produce the stated effect/cause and don\'t clash with the passage; the correct answer is the most reasonable and **least extreme**.',
      '**Credibility of evidence scales with the discipline:** expert consensus is strong support in the arts and humanities, far weaker in empirical social sciences, and popular opinion is weakest of all.'
    ],
    equations: []
  },

  questions: []
};
