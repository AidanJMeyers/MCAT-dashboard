// CARS Chapter 6 — Formal Logic. STRATEGY chapter (not science).
// Authored to the rich-formatting quality bar. The only extracted image
// (fig01.png) is the decorative chapter cover (a lightbulb) — NOT a content
// figure — so it is intentionally not used. No real figures in this chapter.
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption } (unused: no real figures)

export default {
  id: 6,
  title: 'Formal Logic',
  subtitle: 'The logic of conditionals · applications of conditionals · analogical reasoning',

  blocks: [
    /* ───────────────────── 6.1 The Logic of Conditionals ───────────────────── */
    {
      id: 's1', num: '6.1', title: 'The Logic of Conditionals',
      goals: [
        'Represent a conditional relationship formally as $X \\rightarrow Y$ and translate it into an if–then claim',
        'Define the conditional as the impossibility of a true antecedent with a false consequent',
        'Distinguish the sufficient condition from the necessary condition within a single conditional',
        'Form the contrapositive and recognize that it is logically equivalent to the original',
        'Identify the English Logic keywords that all translate to the same conditional'
      ],
      recap: `
- A **conditional** is a **one-way (unidirectional)** relationship: $X \\rightarrow Y$ = "**If X, then Y**." The **if** term is the **antecedent**; the **then** term is the **consequent**.
- The conditional is defined as the **impossibility of a true antecedent with a false consequent** — the *only* forbidden combination.
- A conditional can be **true even when the antecedent is false**; falsity of the antecedent tells you nothing.
- In $X \\rightarrow Y$, **X is *sufficient* for Y** and **Y is *necessary* for X** — two perspectives on the same arrow.
- The **contrapositive** ($\\lnot Y \\rightarrow \\lnot X$) is **logically equivalent** and a **guaranteed inference**; the **converse** and **inverse** are **NOT** valid.
`,
      detail: `
#### Representing a conditional
A **conditional** is not one relationship but a whole *class* of one-way connections between two **terms**. Using the arrow ($\\rightarrow$) to show the direction:

$$X \\rightarrow Y$$

If the terms are **claims** (statements with a **truth value** — capable of being true or false but not both), the conditional reads:

> **If X is true, then Y is true.**

This whole if–then assertion is itself a **conditional claim** with its own truth value.

- The **if** term = the **antecedent**.
- The **then** term = the **consequent**.

Concrete example (antecedent and consequent in **bold**):

> **If you're in Pennsylvania, then you're in the United States.**

#### What makes a conditional true
Formally, the truth of a conditional depends **only** on the truth of its antecedent and consequent. The conditional is **true** as long as it is *impossible* for X to be true while Y is false.

:::keyconcept
The conditional relationship is formally defined as the **impossibility of having a true antecedent and a false consequent simultaneously**. (If the terms are events rather than claims, *true/false* are replaced by analogous evaluations such as *present/absent*.)
:::

The **truth table** below shows all four combinations. Notice that **only the second row** (true antecedent, false consequent) makes the conditional false:

| $X$ | $Y$ | $X \\rightarrow Y$ |
|---|---|---|
| true | true | **true** |
| true | false | **false** ← the *only* forbidden case |
| false | true | **true** |
| false | false | **true** |

*Table 6.1 — Truth table for conditional claims.*

#### Two crucial consequences
- **Conditionals are unidirectional.** "If you're in the US, then you're in Pennsylvania" is a *different* claim — and it's false (you could be in any of the other 49 states, DC, the territories, an embassy, etc.).
- **A false antecedent does not break the conditional.** "If you're in Pennsylvania, then you're in the US" stays true whether you're in Maryland (X false, Y true) or New Zealand (both false). Neither is the forbidden true-antecedent/false-consequent combination.

:::expertise
On Test Day, the trap answer for a conditional is almost always the **reversal** ("If Y, then X") dressed up as a paraphrase. Knowing only that the antecedent is *false* lets you conclude **nothing** about the consequent — resist answers that try to.
:::

#### Necessary vs. sufficient conditions
Every conditional $X \\rightarrow Y$ can be read as **two** simultaneous relationships, one from each term's perspective:

- **X is the *sufficient* condition** of Y — having X is *enough* to guarantee Y. ("Being in Pennsylvania is *sufficient* for being in the US.")
- **Y is the *necessary* condition** of X — Y is a *prerequisite/requirement* of X. ("Being in the US is *necessary* for being in Pennsylvania.")

| Perspective | Reads as | Plain-English test | Geographic example |
|---|---|---|---|
| **Sufficient condition (X)** | $X \\rightarrow Y$ | "X is **enough** to guarantee Y" / "It's impossible to have X without Y" | Being in **PA** guarantees being in the **US** |
| **Necessary condition (Y)** | $\\lnot Y \\rightarrow \\lnot X$ | "Y is **required** for X" / "without Y you cannot have X" | You **must** be in the **US** to be in **PA** |

:::keyconcept
Think of a conditional as two relationships at once: in **if X, then Y**, **X is a sufficient condition of Y**, while **Y is a necessary condition of X**.
:::

:::mnemonic
**"SUN"** — the **S**ufficient term comes first (**U**p front, the antecedent); the **N**ecessary term comes last (the consequent). *Sufficient is enough; Necessary is needed.* The arrow always runs **sufficient $\\rightarrow$ necessary**.
:::

:::expertise
In harder passages a result can have **more than one** necessary or sufficient condition. If both X and Y are required to produce Z, then X and Y are **mutually necessary and jointly sufficient** for Z. (E.g., being **female** *and* being a **parent** are mutually necessary and jointly sufficient for being a **mother** — neither alone suffices.) This has appeared on past MCATs.
:::

#### Forming the contrapositive
For any conditional you can always generate its **contrapositive** — a logically *equivalent* restatement that emphasizes the **necessary** condition. Using the tilde ($\\sim$, or $\\lnot$) for negation:

| | Statement | Form |
|---|---|---|
| **Conditional** | If X, then Y | $X \\rightarrow Y$ |
| **Contrapositive** | If not Y, then not X | $\\lnot Y \\rightarrow \\lnot X$ |

> Conditional: **If you're in Pennsylvania, then you're in the US.**
> Contrapositive: **If you're *not* in the US, then you're *not* in Pennsylvania.**

These always share the same truth value, though their **connotation** differs (the contrapositive foregrounds the necessary condition).

:::keyconcept
The **contrapositive** is logically **equivalent** to the original conditional and is therefore a **guaranteed inference** — for any conditional an author states, a rendition of its contrapositive can appear as a **correct answer choice**.
:::

#### The four related forms — which are valid?
This is the single highest-yield distinction in the chapter. Only the **contrapositive** preserves truth.

| Form | Pattern | Logically equivalent to original? | Valid inference? |
|---|---|---|---|
| **Conditional** (original) | $X \\rightarrow Y$ | — | — |
| **Contrapositive** | $\\lnot Y \\rightarrow \\lnot X$ | **Yes** ✓ | **VALID** ✓ |
| **Converse** | $Y \\rightarrow X$ | **No** ✗ | **INVALID** ✗ |
| **Inverse** | $\\lnot X \\rightarrow \\lnot Y$ | **No** ✗ | **INVALID** ✗ |

*The **converse** flips the arrow; the **inverse** negates both terms without flipping. Both are classic trap answers. The **contrapositive** flips* **and** *negates — and only it is valid.*

:::mnemonic
**"Contrapositive = flip AND negate; that's the only legit one."** The **converse** just **flips** (Y→X); the **inverse** just **negates** ($\\lnot X \\rightarrow \\lnot Y$). Flip-only and negate-only are both wrong — you need **both** moves together. *(Bonus: the inverse is the contrapositive of the converse, so converse and inverse stand or fall together.)*
:::

#### English translations of one conditional
The same conditional $X \\rightarrow Y$ ("If I'm in PA, then I'm in the US") hides behind many phrasings. Learn to flatten all of them to the same arrow:

| English phrasing | Logical form | Which term is which |
|---|---|---|
| **If X, then Y** | $X \\rightarrow Y$ | X sufficient, Y necessary |
| **X is sufficient for Y** | $X \\rightarrow Y$ | states the sufficient condition |
| **All X are Y** | $X \\rightarrow Y$ | every X-thing is a Y-thing |
| **X only if Y** | $X \\rightarrow Y$ | "only if" introduces the **necessary** term |
| **If not Y, then not X** *(contrapositive)* | $\\lnot Y \\rightarrow \\lnot X$ | equivalent restatement |
| **Y is necessary for X** | $X \\rightarrow Y$ | states the necessary condition |
| **Only Y are X** | $X \\rightarrow Y$ | "only" flags the necessary term |
| **Not X unless Y** | $X \\rightarrow Y$ | "unless Y" = "if not Y" |

*Table 6.2 — English translations of $X \\rightarrow Y$.*

:::expertise
Watch the two sneaky ones: **"only if"** marks the **necessary** condition (so "X only if Y" is $X \\rightarrow Y$, *not* $Y \\rightarrow X$), and **"unless"** means **"if not"** ("Not X unless Y" = "if not Y, then not X" = the contrapositive of $X \\rightarrow Y$). These reliably bait students into the converse.
:::
`
    },

    /* ───────────────────── 6.2 Applications of Conditionals ───────────────────── */
    {
      id: 's2', num: '6.2', title: 'Applications of Conditionals',
      goals: [
        'Recognize that one logical form (the conditional) underlies many different real relationships',
        'Map whole–parts relationships onto a conditional (whole = sufficient/antecedent, part = necessary/consequent)',
        'Distinguish justification (a conceptual relationship between claims) from causation (a temporal relationship between events)',
        'Use the domain of discourse to interpret Evidence and Conclusion keywords correctly'
      ],
      recap: `
- **One form, many functions:** the conditional structure is identical across cases, but the *actual* relationships differ by **domain of discourse** (natural, conceptual, textual).
- **Whole–parts** maps to a conditional: the **whole** is the **antecedent/sufficient** condition; any **defining part** is a **consequent/necessary** condition (e.g., *unicorn $\\rightarrow$ horn*).
- **Justification** links two **claims** (evidence $\\rightarrow$ conclusion) in the **conceptual** domain; it need not follow time.
- **Causation** links two **events** (cause $\\rightarrow$ effect) in the **natural** domain; the cause **must precede** the effect in time.
- When you see **Evidence/Conclusion keywords**, **clarify the domain first** — default to **justification**, the more commonly tested relationship.
`,
      detail: `
#### One form, many functions
Although we introduced conditionals using **claims**, the antecedent and consequent can take other forms. The *logical form* stays the same ($X \\rightarrow Y$), but the relationships are **not equivalent** because they operate in different **domains of discourse** (natural, conceptual/textual).

#### Whole–parts as a conditional
A **whole–parts relationship** is a conditional in which:

- the **whole** being defined is the **antecedent / sufficient** condition, and
- any **defining part** is the **consequent / necessary** condition.

| Relationship | Conditional | Sufficient (antecedent) | Necessary (consequent) | Contrapositive |
|---|---|---|---|---|
| Concept & its defining feature | *unicorn $\\rightarrow$ horn* | being a unicorn | including a horn | no horn $\\rightarrow$ no unicorn |
| Object & essential component | *human body $\\rightarrow$ brainstem* | a living human body | a functioning brainstem | no brainstem $\\rightarrow$ no (independent) life |
| Object & characteristic | *plant cell $\\rightarrow$ cell wall* | being a plant cell | having a cell wall | no cell wall $\\rightarrow$ not a plant cell |

As always, the relationship is **one-way**: a horn doesn't guarantee a unicorn (a narwhal, rhinoceros, or some lizards have horns too); a cell wall doesn't guarantee a plant cell (fungi have chitin walls).

:::keyconcept
Whenever a passage **defines** a concept or names an **essential part** of an object, you can encode it as a conditional. The **whole/defined thing** is sufficient; the **defining part** is necessary. The contrapositive (no part $\\rightarrow$ not the whole) is then a guaranteed inference.
:::

#### Justification vs. causation — the high-yield pair
Two conditionals dominate CARS, and they are easy to confuse. Both are one-way relationships, but they live in **different domains** and behave differently with respect to **time**.

| Feature | **Justification** | **Causation** |
|---|---|---|
| Domain of discourse | **Conceptual** (claims about the world) | **Natural** (events in the world) |
| The two terms | **Evidence $\\rightarrow$ Conclusion** | **Cause $\\rightarrow$ Effect** |
| Relationship | **Logical support** | **Direct production** of the effect |
| Time order | **Need not** follow the arrow of time | Cause **must precede** effect in time |
| Signal words | *since, because, therefore, thus, hence* | *because, consequently, leads to, results in* |
| Default on the MCAT | **Yes — assume justification first** | Only when terms are clearly natural events |

The contrast is sharpest in these two sentences, which point in **opposite temporal directions**:

> **Causation:** "The dinosaurs were fossilized **because of** an asteroid's impact." *(cause → effect; follows time)*
> **Justification:** "We **know** there was an asteroid impact **because of** the evidence the fossils provide." *(evidence → conclusion; runs *backward* against time — we see only the effect and infer the cause)*

:::expertise
Same keyword ("because"), opposite relationships. To decide, **clarify the domain**: if the terms are **natural events**, *because* flags a **cause** and *consequently* an **effect**; if the terms are **claims with truth value**, *since* flags **evidence** and *therefore/thus* flag a **conclusion**. **Default to justification** — it's tested more often.
:::

:::bridge
**Hill's criteria** assess the likelihood that a relationship is **causal**. Only **temporality** (cause before effect) is strictly **necessary**, but it is **not sufficient** by itself. The remaining criteria — strength, dose–response, consistency, plausibility, alternative explanations, experiment, specificity, coherence — strengthen the case. (See *MCAT Physics and Math Review*, Ch. 11.) Note the elegant overlap: temporality is a **necessary-but-not-sufficient condition** for causation — exactly the §6.1 distinction in action.
:::

:::mnemonic
**"Causes Come Chronologically; Justification is Just Logic."** A **cause** always **comes before** its effect in **time**; **justification** is a purely **logical** support that can run **against** the clock (we reason from present evidence back to a past cause).
:::

#### Any argument is a conditional
A whole argument can be compressed into a **single conditional** by lumping all the evidence (joined with *and*s) into one antecedent and the conclusion into the consequent:

$$(\\text{evidence}_1 \\;\\text{and}\\; \\text{evidence}_2 \\;\\text{and}\\; \\dots) \\rightarrow \\text{conclusion}$$

This is why recognizing conditionals is so powerful: spotting **Evidence** and **Conclusion** keywords lets you rebuild the author's argument as one arrow — and then test answer choices against it (including its contrapositive).
`
    },

    /* ───────────────────────── 6.3 Analogical Reasoning ───────────────────────── */
    {
      id: 's3', num: '6.3', title: 'Analogical Reasoning',
      goals: [
        'Understand similarity as a spectrum from identity to loose resemblance',
        'Lay out an argument from analogy as a justification with a known term (K) and an unknown term (U)',
        'Evaluate the strength of an analogy by the relevance and depth of its shared characteristics',
        'Distinguish Apply questions from Strengthen–Weaken (Beyond the Passage) questions'
      ],
      recap: `
- **Analogical reasoning** is tested almost exclusively in **Reasoning Beyond the Text** questions — **~40%** of the CARS section.
- **Similarity** runs a spectrum: at the extreme it is **identity** (Morning Star = Evening Star = Venus); usually it's **partial** overlap among complex wholes.
- An **argument from analogy** is a **justification**: known **K** and unknown **U** share traits, **K** has trait **Kx**, so **U** probably has the similar trait **Ux**.
- An analogy is **weak** if it leans on **one minor** likeness or on similarities **irrelevant** to the conclusion.
- The MCAT favors **deep, structural** analogies over **surface** ones (forged painting $\\rightarrow$ *deception*, not *photograph*).
- Two question flavors: **Apply** (passage = known) and **Strengthen–Weaken Beyond the Passage** (passage treated as unknown).
`,
      detail: `
#### Why similarity matters
**Similarity keywords** flag continuities within a text, which often seem minor. But similarity is the engine of **Reasoning Beyond the Text** questions, which introduce **new information** (in the stem, the choices, or both) not stated or even suggested by the passage. The skill being tested looks obvious yet defies explanation: **recognizing similarities**.

> Cue words like **Suppose, Assume, Imagine** frequently introduce an elaborate new scenario, then ask you to connect it back to the author or passage.

#### Similarity, as a spectrum
Similarity is one of those ideas that seem obvious until you must explain them. It ranges from total to loose:

| Degree of similarity | What it means | Examples |
|---|---|---|
| **Identity** (most extreme) | Two terms refer to **one single entity** | "Morning Star" & "Evening Star" both = **Venus** |
| **Exact duplicates** | Distinct copies that are functionally interchangeable | photocopies, file backups, monozygotic twins, same-denomination coins, machine parts |
| **Partial overlap** (the CARS norm) | Complex wholes share **some** characteristics and differ in others | most concepts you'll compare on Test Day |

Real CARS comparisons are almost always the **partial** kind, governed by the **whole–parts** relationship from §6.2: complex things overlap on some parts and diverge on others. These richer comparisons are **analogies**.

:::bridge
**Isomerism** (from *MCAT Organic Chemistry Review*, Ch. 2) illustrates graded similarity perfectly: **conformational isomers** (differ only by rotation about a σ bond) are far more alike — and share more properties — than **structural/constitutional isomers** (different bonds entirely). On CARS you compare **concepts**, not molecules, but the move is the same: pin down the **exact** points of likeness and difference.
:::

#### The structure of an argument from analogy
An **argument from analogy** starts from similarities between two things and concludes an **additional** shared trait. It is a species of **justification** (two pieces of evidence → a conclusion):

- **Known (K):** the term whose characteristics are well established.
- **Unknown (U):** the term that is only partially understood.

| Line | Role | Statement |
|---|---|---|
| Evidence 1 | shared traits | **K** and **U** share corresponding characteristics ($K_1\\!\\leftrightarrow\\!U_1$, $K_2\\!\\leftrightarrow\\!U_2$, …) |
| Evidence 2 | known extra trait | **K** possesses characteristic $K_x$ |
| Conclusion | inferred trait | therefore **U** will possess the similar characteristic $U_x$ |

:::keyconcept
An **argument from analogy** is a kind of **justification**: the two pieces of evidence are (1) the **similarity** between two terms and (2) the **known existence** of a particular characteristic in one of them. The conclusion is that the **other** term shares the same or a similar characteristic.
:::

**Worked example — Darwin's natural selection.** Darwin argued by analogy from agriculture:

- **K (known)** = domesticated crops and livestock; **U (unknown)** = all species in nature.
- Shared $x$-trait = a **selector** that drives divergence — **artificial selection** for K, **natural selection** for U.
- Conclusion: if artificial selection reshapes domesticated forms in a few generations, **natural selection** can account for **speciation** over far longer spans.

#### Judging the strength of an analogy
Analogies vary widely in strength. An analogy is **weak** when it rests on:

- only **one minor** point of similarity, or
- commonalities (however many) that are **irrelevant** to the conclusion.

| Strong analogy | Weak analogy |
|---|---|
| Many **relevant**, **deep/structural** similarities | One **minor** or many **irrelevant** similarities |
| Differences are insignificant to the conclusion | A relevant **contrast** undermines the conclusion |
| Probes *why* the things behave alike | Stops at a **surface** resemblance |

> **Weak-analogy example:** ancient peoples inferred the sun and moon were *living creatures* because they "move across the sky like birds." The shared feature (motion across the sky) is **superficial** — the *reasons* for the motion differ entirely — so the analogy fails.

:::expertise
The MCAT prefers **"deep" structural** analogies over surface ones. If asked for something **analogous to a forged painting**, the best answer involves **deception** (a disguise, a lie) — not mere artistic representation (a photograph, a sculpture). Always look **beneath** the obvious feature for the **underlying** relationship.
:::

:::mnemonic
**"K knows, U is unsure — judge by DEPTH, not surface."** Map the **K**nown onto the **U**nknown, then ask whether the shared trait is **relevant and deep** enough to carry the conclusion. Surface look-alikes (birds vs. the sun) are traps.
:::

#### Two ways analogies are tested
| | **Apply questions** | **Strengthen–Weaken (Beyond the Passage)** |
|---|---|---|
| Where the **known** lives | **In the passage** (take it as given) | **In the question stem** (new info is the known) |
| Where the **unknown** lives | In the **question's** new scenario | In the **passage** (its claims are now subject to change) |
| Your task | **Apply / extend / extrapolate** passage ideas to the new case | **Integrate** new ideas; judge how they **strengthen or weaken** the passage's argument |
| Tied to | extrapolation | Strengthen–Weaken (Within the Passage), Ch. 10 |

:::bridge
**Reasoning Beyond the Text** questions (detailed in *MCAT CARS Review*, Ch. 11) are **~40%** of all CARS questions and frequently hinge on **analogical arguments** — every one asks you to connect the passage to **new information**. Mastering K-vs-U mapping pays off across two-fifths of the section.
:::

:::expertise
Quick triage: if the **passage** is the stable known and the question asks "which new case is most like it?" → **Apply**. If the **question** supplies a stable new fact and asks how it affects the passage's claims → **Strengthen–Weaken (Beyond the Passage)**. Identify which side is fixed before you compare.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '6.1 The Logic of Conditionals',
        points: [
          'A **conditional** $X \\rightarrow Y$ ("If X, then Y") is a **one-way** relationship; the **if** term is the **antecedent**, the **then** term the **consequent**.',
          'It is defined as the **impossibility of a true antecedent with a false consequent** — the single false row of the truth table.',
          'A conditional can be **true even when its antecedent is false**; conditionals do **not** work in reverse.',
          'In $X \\rightarrow Y$, **X is sufficient for Y** and **Y is necessary for X**.',
          'The **contrapositive** $\\lnot Y \\rightarrow \\lnot X$ is **logically equivalent** (a guaranteed inference); the **converse** $Y \\rightarrow X$ and **inverse** $\\lnot X \\rightarrow \\lnot Y$ are **invalid**.',
          'Many English phrasings ("all X are Y," "X only if Y," "Y is necessary for X," "not X unless Y") all reduce to $X \\rightarrow Y$.'
        ]
      },
      {
        section: '6.2 Applications of Conditionals',
        points: [
          'One logical **form** underlies many real relationships; the relationships differ by **domain of discourse**.',
          '**Whole–parts:** the whole/defined thing is the **sufficient** (antecedent) condition; a defining part is the **necessary** (consequent) condition.',
          '**Justification** links **claims** (evidence $\\rightarrow$ conclusion) in the conceptual domain and need not follow time.',
          '**Causation** links **events** (cause $\\rightarrow$ effect) in the natural domain, and the **cause must precede the effect**.',
          'On **Evidence/Conclusion keywords**, clarify the domain; **default to justification**, the more commonly tested relationship.'
        ]
      },
      {
        section: '6.3 Analogical Reasoning',
        points: [
          '**Similarity** spans a spectrum from **identity** through **exact duplicates** to **partial overlap** (the CARS norm).',
          'An **argument from analogy** is a **justification**: known **K** and unknown **U** share traits, K has trait $K_x$, so U likely has $U_x$.',
          'Analogies are **weak** when built on a single minor likeness or on **irrelevant** similarities.',
          'The MCAT rewards **deep, structural** analogies over **surface** resemblances.',
          'Tested via **Apply** (passage = known) and **Strengthen–Weaken Beyond the Passage** (passage = unknown); Reasoning Beyond the Text is **~40%** of CARS.'
        ]
      }
    ],
    mnemonics: [
      '**"Flip AND negate":** only the **contrapositive** ($\\lnot Y \\rightarrow \\lnot X$) is valid. The **converse** ($Y \\rightarrow X$) flips only; the **inverse** ($\\lnot X \\rightarrow \\lnot Y$) negates only — both are traps.',
      '**"SUN":** the **S**ufficient term is **U**p front (antecedent); the **N**ecessary term is last (consequent). The arrow runs sufficient $\\rightarrow$ necessary.',
      '**"Sufficient is Enough; Necessary is Needed."** Enough to guarantee vs. required to have.',
      '**"only if" = necessary; "unless" = "if not."** "X only if Y" is $X \\rightarrow Y$ (Y necessary); "Not X unless Y" is the contrapositive.',
      '**"Causes Come Chronologically; Justification is Just Logic."** Cause precedes effect in time; justification can reason backward from present evidence to a past cause.',
      '**"K knows, U is unsure — judge by DEPTH."** Map known onto unknown; trust **deep/relevant** likeness, distrust **surface** look-alikes.'
    ],
    keyConcepts: [
      'A conditional is **defined by one forbidden combination**: a **true antecedent with a false consequent**. Everything else (including a false antecedent) is consistent with the conditional being true.',
      '**Necessary vs. sufficient** are two views of the same arrow — and the contrapositive is just the conditional read from the **necessary** side. Only the **contrapositive** is a valid inference.',
      '**Justification (claims) vs. causation (events)** is the most tested application: identical-looking keywords ("because") flip meaning with the **domain**; cause **must precede** effect, justification need not.',
      'An **argument from analogy** is a **justification** mapping a **known (K)** onto an **unknown (U)**; its strength depends on the **relevance and depth** of the shared traits, not their count — and it dominates the **~40%** Reasoning Beyond the Text category.'
    ],
    equations: [
      { name: 'Conditional', tex: 'X \\rightarrow Y', note: '"If X, then Y." X = antecedent / sufficient condition; Y = consequent / necessary condition.' },
      { name: 'Contrapositive (VALID)', tex: '\\lnot Y \\rightarrow \\lnot X', note: 'Flip AND negate. Logically equivalent to the original — a guaranteed inference.' },
      { name: 'Converse (INVALID)', tex: 'Y \\rightarrow X', note: 'Flips the arrow only. Not equivalent; a classic trap answer.' },
      { name: 'Inverse (INVALID)', tex: '\\lnot X \\rightarrow \\lnot Y', note: 'Negates both terms only. Not equivalent; the contrapositive of the converse.' },
      { name: 'Argument as one conditional', tex: '(\\text{ev}_1 \\;\\text{and}\\; \\text{ev}_2 \\;\\text{and}\\; \\dots) \\rightarrow \\text{conclusion}', note: 'Lump all evidence into one antecedent; the conclusion is the consequent.' }
    ]
  },

  questions: []
};
