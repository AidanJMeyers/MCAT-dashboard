// CARS Chapter 10 — Question Types II: Reasoning Within the Text Questions.
// STRATEGY chapter (CARS): test-taking strategy, not science content.
// Figures, goals, and questions come from ch10.json; recap/detail markdown authored here.
// The only extracted image (fig01.png, "Chapter 10 figure 1") has no caption and is a
// non-content/decorative grab, so it is intentionally skipped per the authoring spec.
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }  (real figures only)

export default {
  id: 10,
  title: 'Question Types II: Reasoning Within the Text',
  subtitle: 'Inference questions · Strengthen–Weaken (Within the Passage) · other reasoning-within-the-text types',

  blocks: [
    /* ─────────────────────── 10.1 Inference Questions ─────────────────────── */
    {
      id: 's1', num: '10.1', title: 'Inference Questions',
      goals: [
        'Recognize an Inference question from its stem keywords and the absence of any new information',
        'Distinguish an **assumption** (unstated evidence) from an **implication** (unstated conclusion)',
        'Build a prediction by tracing the Logic keywords that link evidence to conclusion',
        'Apply the **Denial Test** as Plan B when no prediction can be set, and triage when it would cost too much time'
      ],
      recap: `
- **Inference questions** ask for an **unstated part of an argument** that *must be true* (or is *highly probable*) given the passage — never something merely *possible*.
- An **assumption** = unstated **evidence** the author takes for granted; an **implication** = unstated **conclusion** that follows. Inference covers both.
- **~16% of CARS** (about 8–9 questions). Recognize by keywords: *assume, because, conclude, imply, infer, justify, reasonable, suggest* — **with no new information** (new info → Reasoning *Beyond* the Text).
- **Plan A:** isolate the referenced claim, hunt **Logic keywords**, predict. **Plan B (Denial Test):** negate each choice; the right answer is the one whose negation most **damages** the passage.
- Beware **Detail questions in disguise** — "as stated" stems whose answers are *not* straightforward.
`,
      detail: `
#### What makes an Inference question distinctive
Inference questions deal with **unstated parts of arguments** — information **not explicitly written** but that *must be true* given what the passage claims.

- Correct answers are **necessary assumptions** or **highly probable implications** — **not** merely things that *could* be true.
- "Inference" is the umbrella process used to arrive at both:
  - **Assumptions** — unstated *evidence*.
  - **Implications** — unstated *conclusions*.

:::expertise
Per Kaplan's research of released AAMC material, **Inference questions are ~16% of the CARS section** — about **eight or nine questions**. They are common enough that the Denial Test is worth mastering.
:::

#### How to recognize one (the Assess step)
During the **Assess** step of the Kaplan Method for CARS Questions, watch for these stem words (or variants):

| Recognition keyword | Example phrasing |
|---|---|
| **assume** | "…the author assumes:" |
| **because** | "The passage suggests [claim] because:" |
| **conclude** | "It is reasonable to conclude that the author regards…" |
| **imply** | "The author implies that [concept] is NOT:" |
| **infer** | "Which of the following inferences is most justified…?" |
| **justify / reasonable** | "…which of the following might reasonably be inferred?" |
| **suggest** | "Implicit in the discussion of [topic] is the underlying assumption that:" |

:::keyconcept
**The new-information test.** If a stem contains an inference keyword **and** introduces a new element, it is **Reasoning *Beyond* the Text**, not Inference. **No new elements → Inference.**
:::

##### The Detail–Inference continuum
There is a **continuum** between Detail and Inference questions; position depends on the *complexity of reasoning* required.

- A simple inference may need only one step — canceling a **double negative** or spotting a **paraphrase** of the passage.
- Sometimes a "suggests/implies" answer turns out to be in the text **virtually word for word** — a **Detail question in disguise**, and your prediction will already be more than adequate.
- The flip side: a stem with flat declarative language (*"the author asserts," "as stated in the passage"*) can still demand heavy critical thinking. Recognize the trap and stay ready to deploy the **Denial Test**.

#### Strategy — two tasks, one fork
When you recognize an inference, first ask: am I hunting a **missing essential piece of evidence (assumption)** or a **highly probable unstated conclusion (implication)**?

##### If the task is an ASSUMPTION
1. Determine **what claim it underlies** — the stem often says so (quoted text or paragraph numbers); use your **Outline** to find the relevant sentences.
2. On **Execute**, reread those sentences and **isolate the specific statement**, noting any existing supporting evidence.
3. Lean on **Logic keywords** — but know many authors use them sparingly, so they won't always appear.
4. Predict whatever **links the stated evidence to the conclusion** ("*now I see what the author is taking for granted*").

##### If the task is an IMPLICATION
1. Isolate the referenced sentences and watch **Logic keywords**, just as with assumptions.
2. This time, check whether those statements are used to **support something else**.
3. Use any **explicitly supported conclusion** to set expectations — implications are often similar to it. A fresh implication that occurs to you on rereading also works as a prediction.

:::keyconcept
**Inferences** are unstated parts of arguments that **must be true** based on what the passage says. **Assumptions** are unstated **evidence**; **implications** are unstated **conclusions**.
:::

#### Plan B — the Denial Test
Use it when you **can't match a prediction**: you mistook the question for a Detail, the stem gave no paragraph clue, or the choices came out unexpectedly.

**How to run it:**
- For each answer choice, **negate** (take the opposite of) what it says.
- If the stem ends in a colon, you may need to **combine the stem's tail with the choice** into a full sentence before negating.
- Handle existing negatives carefully — just deleting a negative word/prefix/suffix often **does not** flip the meaning correctly.
- A foolproof negation: prepend **"It is not the case that…"** to the whole sentence.
- After negating, ask what **effect** it has on the passage. No significant impact → cross it off. Use the **Outline** and the stem/choice clues to find the right part of the passage to reread.
- **Test every choice** — sometimes several denials cause problems, so pick the one whose negation is **most detrimental** to the passage's arguments.

:::expertise
The Denial Test will **always reveal** the correct Inference answer — but it is **very time-consuming**. If you cannot set good expectations during **Execute**, **triage** the question and return to it later with the Denial Test.
:::

#### Worked example — a history passage (assumption)
> *Passage gist:* In 1941, publisher **Henry Luce** urged America (the most powerful nation) to pursue global hegemony — the "American Century" / **exceptionalist** creed. **Henry Wallace** (FDR's VP) rejected this, holding that no nation has the "right to exploit other nations" and invoking the ethical principle that **wrongness is independent of the actor's identity** (else nations would be hypocrites). Wallace was replaced by **Truman**, whom the author blames for the atomic bombings and the Cold War.

**Stem:** *"One can most justifiably conclude … that Henry Luce assumed that:"*

| Choice | Negation | Effect → verdict |
|---|---|---|
| **(A)** US did **not** have the right to build a military/economic empire | "US **did** have the right…" | Consistent with Luce → **eliminate**. As written, this is **Wallace's** view: a **Faulty Use of Detail** *and* an **Opposite**. |
| **(B)** nation-states are **never** bound by the same ethics as persons | "nation-states are **sometimes** bound…" | Consistent with Luce (ethics apply *sometimes* — just not to the US). **Extreme (never)** → **Distortion** → **eliminate**. |
| **(C)** the same standards should apply to **both** Americans and Germans | "should **not** apply to both" | Consistent with Luce's "American Century" → **eliminate**. Again a **Wallace** belief: a second Opposite/FUD. |
| **(D)** moral rules for individuals do **not** necessarily apply to countries | "moral rules **do** necessarily apply to countries" | This **supports the antihypocrisy argument** the author makes *against* Luce → denying it makes **Luce's argument fall apart** → **(D) is the assumption.** |

:::bridge
The opposite of an **Extreme Negative** keyword (*never*) is a **Moderating Positive** keyword (*sometimes*) — not another extreme. Authors are far likelier to assume the **weak form** of a claim than the strong one, so choice (B)'s *never* rightly flags it as a **Distortion**.
:::

#### Worked example — same passage (implication)
**Stem:** *"It is reasonable to infer that the author believes that:"* (no clues → go straight to the Denial Test).

| Choice | Negation | Effect → verdict |
|---|---|---|
| **(A)** Truman was the **worst** US president of the 20th century | "Truman was **not** the worst…" | Little impact — we don't know the author's view of other presidents. **Too Extreme** → **Distortion** → eliminate. |
| **(B)** FDR did **not** endorse the "American Century" | "FDR **did** endorse it" | We know nothing of FDR's stance toward Luce → **Out of Scope** → eliminate. |
| **(C)** **Wallace** would **not** have approved atomic weapons | "Wallace **would** have approved…" | Then Wallace would be guilty of Truman's misdeeds, and the **antihypocrisy author would be inconsistent** in praising one and condemning the other → big damage → **(C) is the answer.** |
| **(D)** Luce did **not** give an accurate historical assessment | "Luce **did** give an accurate assessment" | No negative impact — it actually **supports** the author's "seems prescient" remark → eliminate. |
`
    },

    /* ───────────── 10.2 Strengthen–Weaken (Within the Passage) ───────────── */
    {
      id: 's2', num: '10.2', title: 'Strengthen–Weaken (Within the Passage) Questions',
      goals: [
        'Recognize a Strengthen–Weaken (Within) question by connection words and "from the passage" references',
        'Identify the **three pieces** of every such question — two claims and the connection — and locate each one',
        'Treat **support and refutation as one-way (unidirectional) relationships** and reject reversed-arrow choices',
        'Handle **Scattered** (LEAST/EXCEPT) and **Roman-numeral** formats efficiently, triaging when they run long'
      ],
      recap: `
- These questions concern the **logical relationship between a conclusion and the evidence that supports it (Strengthen) or the refutation that undercuts it (Weaken)** — drawn **entirely from the passage**.
- **~12% of CARS** (about 6 questions). Recognize by connection words: *relate, support, challenge, strengthen, weaken* plus "from the passage" references.
- **Every question has 3 pieces: two claims + the connection.** You're always given at least one; find the rest in the **stem, passage, or answer choices**.
- **Support is unidirectional.** Evidence → conclusion. If the "arrow" points the wrong way, it's wrong — a conclusion the thesis *supports* is **not** a claim that supports the thesis.
- **Scattered formats** (*LEAST*, *EXCEPT*) and **Roman-numeral** stems are time sinks → **triage** and use process of elimination.
`,
      detail: `
#### What these questions test
Strengthen–Weaken questions span two AAMC categories, but both concern the **logical relationship between conclusions and the evidence/refutations attached to them**.

- The **only** real difference between **Strengthen–Weaken (Within)** and **(Beyond)** the Passage: *Within* sticks to the passage **as written**; *Beyond* brings in a **new element** (usually in the stem, occasionally only in the choices).
- If a stem is **ambiguous** about whether the support/challenge comes from inside or outside the text, keep the *Beyond* strategy in mind too (next chapter).

:::expertise
Per Kaplan's research, **Strengthen–Weaken (Within) questions are ~12% of CARS** — about **six questions** per section.
:::

#### How to recognize one (the Assess step)
Stems are **heavy on connection words** and usually point back to the text.

| Connection word | Example phrasing |
|---|---|
| **support** | "…is supported in the passage by:" / "…the author provide the most support" |
| **strengthen** | "This most strengthens the author's contention that:" |
| **weaken / WEAKENS** | "Which objection … most WEAKENS the author's thesis?" |
| **challenge** | "The view of [person] is challenged in the passage by:" |
| **relate / significance** | "How does other information … relate to the claim that…?" |

#### Strategy — find the three pieces
Every Strengthen–Weaken question has **two claims and the connection between them**. You're handed **at least one**; your job is to find the rest. Begin your **Plan** by locating each piece — in the **stem**, the **passage**, or the **answer choices**.

##### Step 1 — pin down the connection
- If the connection is in the **stem**, it's usually a variant of **strengthen (support)** or **weaken (challenge)**.
- If the connection doesn't appear until the **choices** (vague stems: *relevance, significance, impact*), the relationship may turn out to be something else — **identity** (same meaning) or even **irrelevance**.

##### Step 2 — research the claims (Execution varies by count)

| Claims in the stem | What to do |
|---|---|
| **Zero** (e.g., "Which assertion is the LEAST supported?") | **Triage** after Assessing; resort to **process of elimination** later. |
| **One** (most common) | Classify the given statement as **conclusion, evidence, or refutation**, then go to the passage — start at the relevant sentence and scan the surrounding text for the matching relationship. |
| **Two** | The task is to find the **nature of the relationship** — does one claim stand *under* the other? Evidence makes a conclusion **more** likely; refutation makes it **less** likely. |

:::keyconcept
**Evidence** supports a conclusion through a **one-way** relationship. A **refutation** counters a conclusion through a **one-way** relationship. Direction matters.
:::

##### Step 3 — Logic keywords, then elimination
- On **Execute**, **Logic keywords** matter as much here as in Inference. If the stem named the relationship, focus on that one; otherwise track *any* logical connection to the claim.
- If your Plan stalls, eliminate every choice that **fails to establish the correct relationship**.
- **Mind the arrow.** Support is unidirectional: asked for a claim that *supports* the thesis, a tempting wrong answer is an **implication you could draw *if* the thesis were true** — a conclusion the thesis itself supports, with the arrow reversed.

:::expertise
**Dualisms — make a column map.** CARS authors use **multiple terms for the same concept**. When you spot **Opposition keywords**, draw two columns on your noteboard and list each side's synonyms (e.g., *killing / active euthanasia* in one column, *letting die / passive euthanasia* in the other). It becomes a key for synonymous language in the questions.
:::

#### Worked example — an ethics passage (Roman numeral)
> *Passage gist:* The common argument against doctor-assisted suicide rests on a **passive vs. active euthanasia** distinction (*letting die* vs. *killing*); the Hippocratic oath forbids the active "harm." The author argues this distinction is **not ethically relevant** (the "suicide machine" thought experiment shows intention and effect are identical — only the **technical means** differ). The author also dismisses the common objection (that the distinction is *vague/hard to apply*) as carrying "little weight," because *applying any ethical principle is imprecise.*

**Stem:** *"Which of the following roles is played in the passage by the claim that the difference between killing and letting die is ethically relevant?"* (I, II, III)

| Statement | Claim about the role | Verdict |
|---|---|---|
| **I.** It is **contradicted** by the claim that the distinction is only **technical** | The 2nd paragraph denies it ("**not** an ethical difference but merely a technical one") | **True** → eliminates (A) |
| **II.** It **bolsters** the contention that applying ethics precisely is **difficult** | Keyword *After all* is an **Evidence keyword** — that "difficulty" statement supports the *objection-carries-little-weight* claim, **not** the ethical-relevance claim. Arrow points elsewhere. | **False** |
| **III.** It **underlies** the most common argument against assisted suicide | "Relies upon" is an **Evidence keyword** — the relevance claim **supports** that argument | **True** → eliminates (B) |

**Answer: (C) I and III only.** Statement II reverses the support arrow, so it is false.

#### Worked example — same passage (Scattered / LEAST)
**Stem:** *"…which of the following items from the passage **LEAST** challenges the argument for the prohibition of active euthanasia?"*

- **LEAST → Scattered format:** plan to test **every** choice; **triage** if possible.
- **Prediction shortcut:** the author already names a challenge he regards **poorly** — the common objection that the distinction is *hard to apply* "does **not** carry much weight." That matches **(B)**.
- **Caution:** the passage says little weight, **not no weight**. The remaining choices ((A) thought experiment, (C) "only technical," (D) same intention/effect) are all parts of the **counterargument** in paragraph 2 and **do** challenge the original argument. So **(B)** challenges it *least*.

:::keyconcept
On **LEAST/EXCEPT** Strengthen–Weaken items, the answer is the choice with the **weakest** relationship in the required direction — sometimes one that has **no effect** or even **supports** the argument. Don't grab the first "weak" option; confirm it's the weakest.
:::
`
    },

    /* ──────────── 10.3 Other Reasoning Within the Text Questions ──────────── */
    {
      id: 's3', num: '10.3', title: 'Other Reasoning Within the Text Questions',
      goals: [
        'Recognize the three rarer reasoning-within-the-text tasks: **Clarification, Weakness, and Paradox**',
        'Treat **Clarification** as a support relationship requiring near-synonymous but more precise language',
        'Answer **Weakness** questions by direct process of elimination — like the Denial Test without negating',
        'Resolve **Paradox** questions by choosing the answer consistent with **both** claims (and the whole passage)'
      ],
      recap: `
- A few **rarer** question types concern passage reasoning but fit neither Inference nor Strengthen–Weaken. Three typical tasks: **Clarification, Weakness, Paradox.**
- **Clarification:** find a choice **nearly synonymous** with the given claim but **more specific/exact** — a one-way *support* relationship. Keywords: *clarify, explain, reflect.*
- **Weakness:** find the choice that **most damages** the argument **without being negated** — like the Denial Test, but the answer is harmful as written. Use **process of elimination**.
- **Paradox:** two claims that *seem* to conflict. The right answer is **consistent with both** (and ideally with the rest of the passage) and **explains the surface inconsistency**.
`,
      detail: `
There are rarer question types that don't fall cleanly into **Inference** or **Strengthen–Weaken (Within)** but clearly concern **passage reasoning**. All are rare; this section covers the **three** most typical tasks.

#### Clarification
A statement **clarifies** another if the two share **roughly the same meaning**, but the clarifying part is **more specific or exact**.

- Because precise language has an **easier-to-assess truth value**, treat a *clarifying* statement as **supporting evidence** for the *clarified* conclusion.
- Approach it **like a Strengthen–Weaken (Within)** question — except the two meanings should be **roughly synonymous**.
- Recognition keywords: **clarify, explain, reflect.**

> *Example (ethics passage):* "Which of the following **clarifies** the author's statement that the common argument rests on the passive/active distinction?" → the answer comes from the **following sentences** that explain the distinction more **concretely** (why one act is permitted and the other forbidden).

:::keyconcept
In a **Clarification** question, pick the choice that is **nearly synonymous** with the given claim but **more specific or exact**.
:::

#### Weakness
Weakness questions are cousins of Inference questions, but they concern **implicit weaknesses and reasonable objections** to arguments in the passage.

- **Do not** use the Denial Test. Instead use **process of elimination**, directly assessing each choice's **effect** on the argument.
- The correct answer has the **most significant negative impact** — perhaps even **contradicting** the argument outright.

> *Example (ethics passage):* "Which is the greatest inherent **weakness** in the author's use of a **thought experiment** to support the main argument?" → e.g., thought experiments force reliance on **readers' imagination/intuition**, which may not yield the conclusion the author intended.

:::keyconcept
Answering a **Weakness** question is like the **Denial Test** — except the correct choice is **detrimental to the passage's arguments as written, without being negated.**
:::

#### Paradox
A **paradox** is an **apparent** logical contradiction: two assertions that **seem inconsistent at first glance** but need not be.

- The stem pairs **two distinct claims** (phrased to sound conflicting), then asks something like *"How would the author resolve this dilemma?"* or *"How might the passage account for this discrepancy?"*
- Sometimes one claim is a **new element**, which technically makes it **Reasoning Beyond the Text** — but use the **same strategy**.
- The correct answer must be **consistent with both** claims, and ideally **conflict with nothing** the author says elsewhere.
- **Method: process of elimination** — strike any choice inconsistent with **either** claim (or the passage as a whole).

:::keyconcept
A **paradox** is two claims that appear inconsistent on the surface. The correct **Paradox** answer is **consistent with both** claims and usually **explains away** the surface inconsistency.
:::

#### Summary — reasoning-within-the-text question types

| Type | How to recognize | Core strategy | Key relationship |
|---|---|---|---|
| **Inference (assumption)** | *assume, because, justify* + **no new info** | Find the claim it underlies; predict the link; **Denial Test** as Plan B | Unstated **evidence** that *must* be true |
| **Inference (implication)** | *imply, infer, conclude, suggest* + **no new info** | See what the referenced lines support; **Denial Test** as Plan B | Unstated **conclusion** that *must* be true |
| **Strengthen–Weaken (Within)** | *support, strengthen, weaken, challenge* + "from the passage" | Find the **3 pieces** (2 claims + connection); mind the **one-way arrow** | Evidence **strengthens**; refutation **weakens** |
| **Clarification** | *clarify, explain, reflect* | Like Strengthen–Weaken; meanings **roughly synonymous** | Specific statement **supports** a broader one |
| **Weakness** | *weakness, objection, undermine* | **Process of elimination**; pick the most damaging choice | Choice harms the argument **as written** |
| **Paradox** | *resolve, discrepancy, dilemma, account for* | **Process of elimination**; keep choices consistent with **both** claims | Reconciles two **apparently** conflicting claims |

:::mnemonic
**"I CWaP" the within-the-text reasoning types:** **I**nference · **C**larification · **W**eakness · **a**nd · **P**aradox — plus **Strengthen–Weaken**. The first two (Inference, Clarification) hunt what *must follow* or *means the same*; the last two (Weakness, Paradox) test how claims **break** or **reconcile**.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '10.1 Inference Questions',
        points: [
          '**Inferences** are unstated parts of an argument that **must be true** (or are highly probable) — assumptions are unstated **evidence**, implications are unstated **conclusions**.',
          'Recognize by keywords (*assume, because, conclude, imply, infer, justify, reasonable, suggest*) **with no new information**; new info shifts it to **Reasoning Beyond the Text**.',
          '**Plan A:** isolate the referenced claim, follow Logic keywords, and predict. **Plan B:** the **Denial Test** — negate each choice and keep the one whose negation most damages the passage.',
          'The Denial Test always works but is **slow** — **triage** and return to it when you cannot set expectations.'
        ]
      },
      {
        section: '10.2 Strengthen–Weaken (Within the Passage) Questions',
        points: [
          'Every question has **three pieces**: two claims and the connection; you are always given at least one and must find the rest in the **stem, passage, or choices**.',
          'Recognize by connection words (*support, strengthen, weaken, challenge, relate*) and "from the passage" references; **~12% of CARS** (about six questions).',
          '**Support and refutation are one-way (unidirectional).** Reject any choice that reverses the arrow (e.g., a conclusion the thesis itself supports).',
          '**Scattered (LEAST/EXCEPT)** and **Roman-numeral** formats are time sinks → triage and use process of elimination; map **dualisms** in two columns.'
        ]
      },
      {
        section: '10.3 Other Reasoning Within the Text Questions',
        points: [
          '**Clarification** = a near-synonymous but more **specific/exact** restatement; treat it as **supporting evidence** (keywords *clarify, explain, reflect*).',
          '**Weakness** = the choice that **most damages** the argument **as written** (no negation needed); answer by **process of elimination**.',
          '**Paradox** = two claims that only *appear* to conflict; the answer is **consistent with both** (and the rest of the passage) and explains the surface tension.'
        ]
      }
    ],
    mnemonics: [
      '**Inference must be NECESSARY, not possible:** a correct inference is something that *must* be true given the passage — never something that merely *could* be true.',
      '**Denial Test = "negate and check the damage":** flip each choice and keep the one whose opposite **wrecks** the passage. Use **"It is not the case that…"** for stubborn sentences.',
      '**New info? Go Beyond.** Inference/Strengthen–Weaken keyword + a **new element** = **Reasoning *Beyond* the Text**. No new element = **Within the Text**.',
      '**Mind the arrow:** support is **one-way**. Asked what *supports* the thesis, reject any choice that is a conclusion the **thesis supports** (reversed arrow).',
      '**Weakness ≈ Denial Test without the denial** — the right answer hurts the argument **as written**.',
      '**Paradox = "true for BOTH":** the resolving answer must sit comfortably with **both** seemingly conflicting claims and the whole passage.',
      '**"I CWaP" the rarer types:** **I**nference, **C**larification, **W**eakness, **a**nd **P**aradox.'
    ],
    keyConcepts: [
      '**The new-information test is the master switch** between *Within* and *Beyond* the Text: reasoning keyword + no new info → a Chapter 10 (Within) question; add a new element → Chapter 11 (Beyond).',
      '**Assumption vs. implication** is the only fork inside Inference questions — unstated **evidence** vs. unstated **conclusion** — but the same Plan (Logic keywords → predict → Denial Test) serves both.',
      '**Directionality wins Strengthen–Weaken questions:** evidence flows one way to a conclusion; the classic trap is a reversed arrow (a claim the thesis supports masquerading as support *for* the thesis).',
      '**Triage time-sinks:** Roman-numeral, Scattered (LEAST/EXCEPT), and full Denial-Test items are slow — Assess them, then save them for the end of the question set.'
    ],
    equations: []
  },

  questions: []
};
