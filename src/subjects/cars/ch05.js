// CARS Chapter 5 — Dissecting Arguments. STRATEGY chapter (not science).
// Figures come from ch05.json (real figures only); recap/detail markdown authored here.
// Per CARS spec: questions are [] (CARS questions live with full passages, not per-chapter).
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 5,
  title: 'Dissecting Arguments',
  subtitle: 'Domains of discourse · concepts (basic elements of logic) · claims (bearers of truth value) · arguments (conclusions & evidence)',

  blocks: [
    /* ─────────────────────── 5.1 Domains of Discourse ─────────────────────── */
    {
      id: 's1', num: '5.1', title: 'Domains of Discourse',
      goals: [
        'Distinguish the three domains of discourse — the natural, the textual, and the conceptual',
        'Recognize how confusing one domain for another produces common errors in reasoning',
        'Place logic (the formal study of argument) within the conceptual domain',
        'Identify the three nested levels of logic: concepts → claims → arguments'
      ],
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 5.1 — The three domains of discourse: things (natural) vs. words (textual) vs. ideas (conceptual).' }],
      recap: `
- **Three domains of discourse** = **things vs. words vs. ideas**: the **natural** (the world), the **textual** (words/sentences/paragraphs in the passage), the **conceptual** (concepts, claims, arguments).
- The domains can never be *fully* separated, but isolating them in your mind clarifies thinking — and **most reasoning errors come from merging two domains** (e.g., confusing an author's *description* with reality).
- **Logic = the formal study of argument**, and it lives squarely in the **conceptual** domain.
- Logic has **three nested levels**: **concepts** (like atoms) → **claims** (like molecules) → **arguments** (like cells). This chapter builds them in that order.
`,
      detail: `
#### Things vs. words vs. ideas
When working any CARS passage, keep three levels distinct in your mind. The technical names sound fancy, but the distinction is one you already use: **things vs. words vs. ideas.**

| Domain | What it covers | Where it dominates |
|---|---|---|
| **The natural** | Everything in the world — objects (subatomic particles → galactic superclusters) and events (a photon's motion → the lifespan of the universe). Read **broadly**: includes human affairs (cultures, institutions, history), the "artificial" (technology, the arts), and even the "supernatural/metaphysical" of a religion passage. | Most passage *subject matter* |
| **The textual** | The realm of **words, sentences, and paragraphs** — everything that literally faces you on screen. Hard to isolate because language points *beyond* itself, but words have their own structure (rhetoric) independent of what they represent. | **Literature** and related disciplines |
| **The conceptual** | The sphere of **concepts, claims, and arguments** — the focus of this chapter and the next. Like an "ideal gas," concepts can be treated as their own abstract sphere even though no mystical separate world exists. | Logic / argumentation |

:::keyconcept
The term **domains of discourse** delimits **three distinct types of discussion** — the natural, the textual, and the conceptual — each with distinctive parts and relationships that **must not be confused**.
:::

:::bridge
In linguistics, **semantics** is the connection between a set of phonemes (language sounds) and a word's meaning — one of the five basic components of language (*MCAT Behavioral Sciences Review*, Ch. 4). It is exactly the bridge between the **textual** and the **conceptual**.
:::

#### Common errors: merging two domains
The domains overlap and share analogous structures, but **some of the most common errors in judgment come from merging one domain with another.** All three pairings produce a classic mistake:

| Confusion | What it looks like | The fix |
|---|---|---|
| **Natural ⇄ Textual** | Assuming an author's *description of the world* automatically matches the world as it is. | Remember every author has a perspective, opinions, and biases — **question what you read**; separate objective fact from the author's subjective impression. |
| **Textual ⇄ Conceptual** | Two people *argue using different words for the same idea* (and secretly agree), or *use the same word for different ideas* (e.g., "freedom," "democracy"). | Track the **idea**, not the word. The most often-interchanged pair. |
| **Natural ⇄ Conceptual** | Confusing **justification with causation**; **stereotyping** (treating a person as a category-member, not an individual). | Among the hardest to untangle — covered further in Ch. 6. |

:::mnemonic
**"Get inside the author's head."** Every author is a human with a *limited* set of experiences making conclusions about *all* of reality. If you can imagine where she's coming from, you'll separate her **subjective impressions** (textual) from **objective facts** (natural) far more easily.
:::

#### Where does logic fit?
In its loose sense "logic" means *structure*; in its technical sense, **logic is the formal study of argumentation (reasoning)** — which places it squarely in the **conceptual** domain. It's a branch of both mathematics and philosophy, and some of it is far beyond the MCAT. Kaplan uses a **deliberately simplified approach**, sticking to terms that actually appear in CARS question stems — though the MCAT itself won't always use the language as precisely.

:::keyconcept
**Logic is the formal study of arguments.** It falls into the **conceptual** domain of discourse.
:::

:::bridge
Appeals to **logic** are called **logos** (*MCAT CARS Review*, Ch. 2). Distinguish these from appeals to **credibility** (**ethos**) and appeals to **emotion** (**pathos**).
:::

#### The three nested levels of logic
Within logic there are three levels, each built from the one below — the same way the natural and textual worlds nest:

| Logic level | Natural-world analog | Textual analog |
|---|---|---|
| **Concept** (idea/notion) | **Atom** | Word |
| **Claim** (assertion/statement) | **Molecule** | Sentence |
| **Argument** | **Cell** | Paragraph |

We build them in order, starting with the most basic element: the **concept**.

:::keyconcept
**Concepts (ideas)** are the logical analogs of **atoms** — the basic units of the conceptual domain, which takes its name from them. A concept has a **meaning/definition**, but **by itself it is neither true nor false.**
:::
`
    },

    /* ──────────────── 5.2 Concepts: The Basic Elements of Logic ──────────────── */
    {
      id: 's2', num: '5.2', title: 'Concepts: The Basic Elements of Logic',
      goals: [
        'Define a concept as the fundamental building block of logic — a meaning with no truth value',
        'Distinguish a concept from the term that represents it and from natural examples of it',
        'Read for concept-for-concept correspondence rather than word-for-word matches',
        'Identify how concepts relate to one another and to the other domains'
      ],
      recap: `
- A **concept** (also *idea* or *notion*) is the **fundamental building block of logic**. It has a **meaning/definition** but is **not true or false**.
- A concept is **distinct from the word** that represents it (the letters t-a-b-l-e ≠ a table ≠ the *idea* of a table) and **distinct from any natural example** of it.
- CARS authors love using a familiar word in a **narrow, specialized sense** — and questions paraphrase ideas. **Match concept-for-concept, never word-for-word.**
- **Concepts relate to each other** (Similarity, Difference, Opposition, whole–part) and to the other domains (a thing **exemplifies** a concept; a word **refers to / designates** it).
`,
      detail: `
#### What a concept is
A **concept** is the fundamental building block of logic. Concepts **have meanings but are not, properly speaking, true or false.** Here "meaning" is the **connotation/definition** — the set of distinctive properties that make the idea what it is.

- A concept can have a definition **even with no natural referent**: there is no such thing as a **unicorn**, yet the idea still carries the sense of *a magical white stallion crowned with a single golden horn.*
- A concept must be distinguished **both** from the **terms** used to represent it **and** from the **natural objects/events** that exemplify it.

##### The three are separate
Take the concept **table** (the furniture):

| It is NOT… | Because… |
|---|---|
| any **actual table** you're sitting at (nor all tables combined) | those are **natural** objects — examples of the concept, not the concept itself |
| the letters **t-a-b-l-e** | that string is **textual** and can mean other things — a *graph of data* (noun) or *to delay an issue* (verb) |

:::keyconcept
A concept lives in the **conceptual** domain — separate from the **natural** thing it describes and the **textual** word that names it. Confusing these three is the root of most CARS trap answers.
:::

#### Read for the idea, not the word
CARS authors often **take a familiar word and use it in a narrow, specialized sense.** Your job is to recover the *idea*, using:

- **Explicit definitions** the author gives,
- **Examples** the author offers,
- **Contextual clues** — especially **words/phrases that repeat frequently.**

Two warnings:
1. Many authors use **multiple terms interchangeably** for the **same** underlying concept (to avoid sounding repetitive).
2. CARS **questions and answer choices** deliberately **paraphrase** — same idea, different wording than the passage.

:::expertise
Students lose points by hunting for the answer choice that **uses the same words as the passage.** Testmakers routinely write the **correct** answer as the **same concept in different words** (a different *textual* representation). **Look for concept-for-concept correspondence, not word-for-word matches.**
:::

:::mnemonic
**"Synonyms are not safe-words."** The right answer almost never echoes the passage verbatim — repeated *wording* is bait. Ask "does this mean the *same thing*?", not "does this *say* the same thing?"
:::

#### Relations of ideas
**Relation keywords** (introduced in Ch. 3) tie *sentences* together textually — but they also tie **ideas** together conceptually. The two most basic relations are **Similarity** and **Difference**, with finer-grained options:

| Relation between concepts | Meaning |
|---|---|
| **Similarity** | The ideas resemble one another |
| **Difference** | The ideas diverge |
| **Opposition** | The ideas are set against each other |
| **Sequence** | One idea follows another in order |
| **Comparison** | The ideas are weighed against each other |
| **Whole–Part** | One idea is a component of a larger one (a *golden horn* is part of *unicorn*) |

##### Concepts relating to the other domains
Concepts also interact **across** domains. These aren't relations *between ideas*, but CARS uses these exact verbs, so know them:

- A **natural object/event** can **exemplify** or **embody** a concept → the thing is an **example** of the idea.
- A **word/term** can **represent, designate, or refer to** a concept → the word **stands in** for the idea.
`
    },

    /* ──────────────── 5.3 Claims: The Bearers of Truth Value ──────────────── */
    {
      id: 's3', num: '5.3', title: 'Claims: The Bearers of Truth Value',
      goals: [
        'Define a claim as a concept-combination that bears truth value (subject + predicate)',
        'Distinguish a claim from a mere concept and from the sentence that expresses it',
        'Relate claims by consistency and conflict (inconsistent / contradictory)',
        'Understand support as the single most important — and unidirectional — relation between claims'
      ],
      recap: `
- A **claim** (a.k.a. *assertion, statement, proposition, belief, contention*) is a concept-combination that has **truth value** — the capacity to be **true or false.** Minimum parts: a **subject + a predicate.**
- *"The Abominable Snowman"* = a **concept** (no truth value). *"The Abominable Snowman is eight feet tall"* = a **claim** (true or false).
- **Consistency** = two claims **can both be true at once** (a weak relation — consistent claims often have nothing to do with each other). **Inconsistent / contradictory / conflicting** = they **can't all be true** at once.
- **Support** is the single most important relation (≈ **half** of all CARS questions). It is **unidirectional**: if A supports B, A's truth makes B's truth more likely — but **not vice-versa.** Its opposite is **refutation**.
`,
      detail: `
#### What makes a claim
What separates a **claim** from a mere **concept** is **truth value** — the capacity to be true or false. The MCAT also calls a claim an **assertion, statement, proposition, belief,** or **contention.**

- A claim may be complex (many concepts related in many ways), but it needs only **two parts at minimum: a subject and a predicate** — like the key noun and verb of a sentence.
- *"The Abominable Snowman"* = a **concept**: a subject with no predicate → meaning but **no truth value.**
- *"The Abominable Snowman is eight feet tall,"* *"everybody loves the Abominable Snowman,"* *"the Abominable Snowman doesn't exist"* = **claims** → each is **true or false** (and meaningful).

Just as a **term ≠ the concept** it denotes, the **sentence ≠ the claim** it expresses. Authors restate the **same claim** in varied language; question stems and answers use **their own clauses** that may depart wildly from the author's words while keeping the same sense.

:::keyconcept
**Claims are the middlemen** of the logical hierarchy: built from **concepts + relationships**, and in turn building **arguments.** A claim has **at least a subject and a predicate**, and it carries **both meaning and truth value.**
:::

#### Consistency and conflict
Claims matter in CARS because of the **truth-value relationships** they share (distinct from the *meaning*-based relations among concepts).

| Relationship | CARS wording | Definition |
|---|---|---|
| **Consistency** | *consistent, compatible, in agreement* | Two+ statements **can be true simultaneously.** A **minimal** relation — most consistent claims are totally unrelated. |
| **Conflict** | *inconsistent, contradictory, conflicting* | A set (usually two) for which it is **impossible that all be true at once.** |

- Consistency is "easy": *"The American Civil War was the product of disparate political, economic, and cultural forces"* is perfectly **consistent** with *"I like cookies"* — they just don't interact.
- Conflict is extreme. **Contradictory** claims may be outright **negations** (differing only by a *not* / an *un–* prefix) or incompatible more subtly, e.g. *"it is 80°F outside"* and *"it is snowing."*

:::bridge
The MCAT sometimes pairs consistency terms with **most / least** — asking for the claim **most conflicting** or **least consistent** with the author. When agreement becomes a matter of **degree**, the terms shift toward **similar / dissimilar** (analogical reasoning, Ch. 6).
:::

#### Support — the most important relation
Because it factors into **about half of all CARS questions**, **no relationship matters more than support.**

- A statement is **supporting** when **its truth would increase the likelihood** that the claim it supports is also true. ("Why should I believe that?" → the support is the answer.)
- For one claim to support another, the two **must also be consistent.**
- **Support is unidirectional** — a **one-way street**, unlike the two-way street of consistency. **Unless the argument is circular, support does not flow back.**

**Worked example (Descartes).** *"Dreaming cannot be distinguished from waking reality"* **supports** *"empirical knowledge is uncertain."* But it would be **circular** to justify the first by appealing to the second — *uncertainty of empirical knowledge* is the very thing being argued **for**, so support cannot legitimately run the other way.

:::keyconcept
**Support is a unidirectional relationship between claims.** If A supports B, then A's truth makes B's truth more likely — **but not the reverse.** The **opposite** of support is **refutation** (also *challenge* or *objection*), covered in 5.4.
:::

:::mnemonic
**"Support is a one-way street."** Evidence flows *toward* the conclusion. If you can run the arrow backwards and it still "works," you've caught a **circular argument** — flag it.
:::
`
    },

    /* ──────────────── 5.4 Arguments: Conclusions and Evidence ──────────────── */
    {
      id: 's4', num: '5.4', title: 'Arguments: Conclusions and Evidence',
      goals: [
        'Define an argument as a conclusion supported by one or more pieces of evidence',
        'Identify the conclusion vs. the evidence in a passage (including subarguments)',
        'Recognize counterarguments, inferences (assumptions vs. implications), and the Denial Test',
        'Evaluate argument strength: how claims strengthen or weaken an argument (the "table" analogy)'
      ],
      recap: `
- An **argument** = one **conclusion** + one or more pieces of **evidence** explicitly used to support it. **Evidence answers "Why should I believe that?"**
- The **same claim can be both evidence and conclusion** — evidence relative to what it supports, conclusion relative to what supports it (a **subargument**). The author's top-level conclusion is the **thesis.**
- **Counterarguments** (refutations/objections/challenges) argue *against* a conclusion — but authors often **raise them only to refute them**, indirectly supporting their own thesis.
- **Inferences** = unstated parts: **assumptions** = unstated **evidence**; **implications** = unstated **conclusions**. Test them with the **Denial Test** — deny it and the argument should fall apart.
- Arguments aren't "true/false" — they vary in **strength** along a spectrum. You can **strengthen** (add a leg, reinforce a leg, knock down a counterargument) or **weaken** (add weight, support a refutation, knock out a key leg).
`,
      detail: `
#### Conclusion + evidence = argument
In a support relationship, the two claims get names. A bare contention becomes a **supported conclusion** once it has **supporting evidence.** Evidence is the friend who **vouches for you** at the VIP rope — it gives reason to "trust" the conclusion. In short, **evidence = the answer to "Why should I believe that?"**

Together, the **evidence**, the **conclusion**, and the **one-way support** between them make the **simplest possible argument:**

> **Evidence:** It is impossible to tell the difference between dreaming and being awake.
> **Conclusion:** Knowledge gained from sense experience is inherently uncertain.

:::keyconcept
An **argument** is **one claim (the conclusion)** plus **one or more other assertions (the evidence)** *explicitly used to support it.* Minimum requirement: **two claims** — one conclusion, one piece of evidence.
:::

##### Identifying conclusion vs. evidence — your core skill

| Component | What it does | How to find it in a passage |
|---|---|---|
| **Conclusion** | The claim being **supported**; the point the author wants you to accept. The top-level one is the **thesis.** | Ask **"What is the author trying to convince me of?"** Watch for **Conclusion keywords** (*therefore, thus, hence, so*). |
| **Evidence** | The claim(s) doing the **supporting**; the reason to believe the conclusion. | Ask **"Why should I believe the conclusion?"** Watch for **Evidence keywords** (*because, since, for, as shown by*). |

:::expertise
**Conclusion and Evidence keywords (subtypes of Logic keywords) are less common** than other keyword types, and some authors use them **sparingly.** Don't rely on them alone — **be alert for hidden support relationships** and find the conclusion by *meaning*.
:::

#### One claim can play both roles
Continuing Descartes: you might ask **why** to believe the evidence itself (*that dreaming is indistinguishable from waking*). The author hints with a rhetorical question — *"Who has not dreamt of 'waking up' while still asleep?"* — pointing to common experience. Now the former *evidence* is itself a **conclusion**, supported by deeper **subevidence:**

> **Subevidence:** You have at least once had a dream in which you thought you woke up, only to find you were still dreaming.
> **(now-)Conclusion:** It is impossible to tell the difference between dreaming and being awake.
> **Main conclusion:** Knowledge from sense experience is inherently uncertain.

Can the same statement be both evidence and conclusion? **Yes — but only relative to two different claims.** The same man is both a *son* and a *father*: a claim is **evidence** when it supports something else, and a **conclusion** when something else supports it. Chained this way, the structure forms an **argument tree.**

:::expertise
For tough arguments, **sketch a diagram on your noteboard** beside your Outline, using **arrows for support.** Put the **main conclusion (thesis)** at the top (arrows pointing up) or the bottom (arrows pointing down). Multiple pieces of evidence for one conclusion **branch from a common stem** — hence **"argument trees."**
:::

#### Counterarguments
A **counterargument** is an argument made **against** a particular conclusion — also called a **refutation, objection,** or **challenge**, and flagged by **Refutation keywords** (Ch. 3).

- Some writers offer **only** counterarguments (their whole purpose is to argue against a claim).
- But **many authors raise a counterargument *only to refute it*** — an **indirect way to support** their own conclusion.

**The skeptic vs. Descartes (worked example).** The author favors the skeptical thesis *"certain knowledge is impossible."* Arguing a negative is hard, so she instead argues **against** Descartes (who holds the opposite). She voices Descartes's **refutation** — then, unwilling to let him win, **counter-refutes** it, thereby supporting her original conclusion:

> **Conclusion:** Certain knowledge is impossible.
> **Refutation (Descartes):** As long as I think I am something, I must exist.
> **Counter-refutation (author):** Just because there is thinking does not mean there is an "I" who thinks.

Remember: **refutations don't appear in every passage**, and an argument minimally needs just **two claims** — one conclusion and one piece of evidence.

#### Inferences: the unstated parts
Most arguments contain **hidden/implicit** parts. The MCAT calls them **inferences, assumptions,** and **implications.** First, two verbs:

- **Imply** = the **writer** hints at something without saying it.
- **Infer** = the **reader** deciphers the hint.

| Term | Definition | Role in the argument |
|---|---|---|
| **Inference** | Any **unstated** part of an argument (the umbrella term) | Either an assumption or an implication |
| **Assumption** | An **unstated piece of evidence** | Hidden **support** the conclusion needs |
| **Implication** | An **unstated conclusion** | Where the argument is **heading** |

:::keyconcept
Unstated claims are **inferences** — either **assumptions** (unstated **evidence**) or **implications** (unstated **conclusions**). Inferences are **not** merely "possibly/probably true": they **must be true, or at least highly probable** — the most likely option among the alternatives.
:::

##### The Denial Test
**One way to recognize an inference: deny it and watch the argument suffer.** If negating a claim **breaks** the argument, that claim was a required inference. This is the **Denial Test** (used for **Inference questions**, Ch. 10).

**Worked example.** Descartes argues *"As long as I think I am something, I must exist."* The author unearths a hidden **assumption**: *"'I' refers only to the thinking mind and does not include the body."* Denying it (*the body's existence could be certain*) collapses Descartes's reasoning — because elsewhere he admits the body's existence is **uncertain** (you might be a brain dreaming it has a body). So the self must **exclude the body** — exactly the assumption identified.

> **Conclusion:** As long as I think I am something, I must exist.
> **Assumption (denial test reveals):** "I" refers only to the thinking mind, not the body.

:::mnemonic
**Assumption = unstated evidence; Implication = unstated conclusion.** Hook: **"A**ssume **B**efore" (evidence comes *before* the conclusion) vs. **"I**mply **A**fter" (the conclusion the argument *leads to*).
:::

#### Strengthening and weakening
**Only claims have truth value — an argument is never "true" or "false."** Instead its **strength/validity varies along a spectrum**: certain proof at one end, complete refutation at the other, with nearly every MCAT argument **in between.** Evidence makes a conclusion **more** probable; refutations make it **less** probable.

:::keyconcept
Arguments are judged by **strength/validity along a continuum.** An argument is **strengthened** when its conclusion is made **more probable**, **weakened** when made **less probable.**
:::

Different fields find different evidence compelling — quotations from a novel carry weight in a **literary** reading but little in a **historical** claim about events during its writing. A weakening claim need **not** be an outright contradiction: e.g., generalizing about all US citizens from a **demographically unrepresentative** survey sample is undermined without contradicting anything directly.

##### The "table" analogy — three ways each
Picture the **conclusion as a tabletop** and each piece of **evidence as a leg.** A table may stand on one sturdy central leg, two balanced legs, or many small ones — but there are only **three ways to strengthen** and **three to weaken** it:

| | **Strengthen** (more support) | **Weaken** (less support) |
|---|---|---|
| **1** | **Add a new leg** → bring in **new evidence** | **Add a heavy weight** → introduce a **new refutation** |
| **2** | **Reinforce an existing leg** → give **more support for existing evidence** | **Pile on weight** → **support a refutation** already raised (undermine the author's response to it) |
| **3** | **Remove a threatening weight** → **challenge a counterargument** to the conclusion | **Knock out a key leg** → **challenge a crucial piece of evidence** |

:::expertise
Strengthen–Weaken questions (Chs. 10–11) won't take an argument's force for granted — they make you **imagine how it could be modified.** Note option 3 on each side: you can **weaken an argument by attacking its evidence**, not only its conclusion — and **strengthen one by defeating a counterargument**, not only by adding evidence.
:::

:::mnemonic
**"The Table of Truth."** Tabletop = **conclusion**, legs = **evidence.** Strengthen = **add / reinforce a leg, or clear a weight.** Weaken = **add / pile a weight, or kick out a leg.** Same three moves, opposite directions.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '5.1 Domains of Discourse',
        points: [
          'The **three domains of discourse** are the **natural** (things), the **textual** (words), and the **conceptual** (ideas).',
          'They can never be fully separated, but **most reasoning errors come from merging two domains** (e.g., taking an author\'s description for reality, or confusing justification with causation).',
          '**Logic is the formal study of argument** and belongs to the **conceptual** domain.',
          'Logic nests in **three levels**: **concepts → claims → arguments** (like atoms → molecules → cells).'
        ]
      },
      {
        section: '5.2 Concepts: The Basic Elements of Logic',
        points: [
          'A **concept** is the basic unit of logic — it has a **meaning** but **no truth value.**',
          'A concept is distinct from the **word** that names it and from any **natural example** of it.',
          'CARS rewards **concept-for-concept** matching, **not word-for-word**; authors use familiar words in narrow senses and questions paraphrase.',
          'Concepts relate by **Similarity, Difference, Opposition, Sequence, Comparison, and Whole–Part**; things **exemplify** concepts and words **refer to** them.'
        ]
      },
      {
        section: '5.3 Claims: The Bearers of Truth Value',
        points: [
          'A **claim** is a concept-combination with **truth value** (subject + predicate); a.k.a. assertion, statement, proposition, belief, contention.',
          '**Consistency** = claims can be true together (a weak relation); **conflict/contradiction** = they cannot all be true at once.',
          '**Support** is unidirectional and is involved in roughly **half** of CARS questions; supporting claims must also be **consistent.**',
          'The opposite of support is **refutation** (challenge / objection).'
        ]
      },
      {
        section: '5.4 Arguments: Conclusions and Evidence',
        points: [
          'An **argument** = a **conclusion** supported by **evidence**; the top conclusion is the **thesis.**',
          'A single claim can be **both** evidence and conclusion relative to different claims (**argument tree**).',
          '**Counterarguments** argue against a conclusion; authors often raise them only to **refute** them.',
          '**Inferences** are unstated parts: **assumptions** (unstated evidence) and **implications** (unstated conclusions); test with the **Denial Test.**',
          'Arguments have **strength**, not truth; **strengthen/weaken** via the three-move **table analogy**.'
        ]
      }
    ],
    mnemonics: [
      '**Domains = "Things, Words, Ideas"** → **natural** (things), **textual** (words), **conceptual** (ideas). Most reasoning errors come from mixing two.',
      '**Atoms → Molecules → Cells** = **Concepts → Claims → Arguments.** A concept has meaning only; a claim adds truth value; an argument adds support.',
      '**"Synonyms are not safe-words."** The right CARS answer restates the idea in *new* words — verbatim wording is bait. Match concept-for-concept.',
      '**"Support is a one-way street."** Evidence flows toward the conclusion; if the arrow works backwards too, you\'ve caught a **circular** argument.',
      '**"Why should I believe that?"** = the test for **evidence.** "What is the author trying to convince me of?" = the test for the **conclusion.**',
      '**Assumption Before, Implication After:** assumption = unstated **evidence** (comes before); implication = unstated **conclusion** (where it leads). Deny it → **Denial Test.**',
      '**"The Table of Truth."** Conclusion = tabletop, evidence = legs. Strengthen: add/reinforce a leg or remove a weight. Weaken: add/pile a weight or kick out a leg.'
    ],
    keyConcepts: [
      '**Track the idea, not the word.** Both the passage and the answer choices are *textual*; the correct answer is the one whose *concept* matches — testmakers paraphrase deliberately.',
      '**Find the conclusion first.** Ask "What does the author want me to accept?" then "Why?" Everything answering "why" is evidence; Conclusion/Evidence keywords help but are often absent.',
      '**Support is the workhorse relation** (~half of CARS questions) and it is **unidirectional** — recognizing one-way support is what lets you separate evidence from conclusion and spot circular reasoning.',
      '**Arguments have strength, not truth value.** Strengthen–Weaken questions ask you to modify an argument; remember you can attack a *key piece of evidence*, not just the conclusion.',
      '**Inferences must be (highly) probable, not merely possible** — use the **Denial Test**: if denying a claim wrecks the argument, it was a required assumption or implication.'
    ],
    equations: []
  },

  questions: []
};
