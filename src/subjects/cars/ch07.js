// CARS Chapter 7 — Understanding Passages. Strategy chapter (not science).
// Re-authored to the rich-formatting quality bar. questions: [] (CARS override).
// fig01.json is a decorative chapter-title page (lightbulb), not a content figure,
// so no figures are used inline.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }
const goals = (si) => S[si].goals || [];

export default {
  id: 7,
  title: 'Understanding Passages',
  subtitle: 'Varieties of passages · support in passages · anticipating questions',

  blocks: [
    /* ───────────────────── 7.1 Varieties of Passages ───────────────────── */
    {
      id: 's1', num: '7.1', title: 'Varieties of Passages',
      goals: [
        'Classify a CARS passage into one of the common varieties (Arts, Philosophical, Scientific, Historical) during the Scan step',
        'Use the variety of a passage to set expectations about its structure, support, and likely question types',
        'Recognize that the CARS section is split 50/50 between humanities and social sciences'
      ],
      recap: `
- **No outside knowledge is ever required (or wanted)** in CARS — bringing it in pulls you toward **Out of Scope** answers. Half the questions come from the **humanities**, half from the **social sciences**.
- **Four practical varieties:** **Arts** & **Philosophical** (humanities); **Scientific** & **Historical** (social sciences). Many passages **blend** types — the goal is to *set expectations*, not to label perfectly.
- **Arts** = strong opinions, heavy quotation, descriptive language. **Philosophical** = abstract, logic-heavy, thought experiments.
- **Scientific** = empirical studies and numbers; muted author opinion. **Historical** = events + period quotations; the most variable type.
- Identifying the variety tells you the likely **form, support, and questions** → you read faster and answer more accurately.
`,
      detail: `
#### Why classify a passage at all?
The AAMC draws CARS passages from **eleven humanities fields** and **a dozen social-science fields**, but most cluster into a **handful of recognizable varieties**. Similar disciplines share tendencies, so spotting the variety during the **Scan** step of the Kaplan Method lets you *set your expectations* — exactly as you do unconsciously in the science sections.

:::expertise
**The 50/50 split.** Per the AAMC, **50% of CARS questions come from the humanities** and **50% from the social sciences**. Whatever variety you face, the section as a whole is balanced between the two domains.
:::

:::keyconcept
Identifying the **variety** of a passage gives you insight into its **likely form and structure** *and* the **likely questions** you'll be asked — making you more efficient at navigating it and faster and more accurate at answering.
:::

:::realworld
Think of it the way you'd approach a **rate-kinetics** passage in Chem/Phys: you already expect rate laws, rate-of-formation tables, and reaction mechanisms — so you anticipate questions on rate-limiting steps and catalysis. CARS works the same way once you know the variety.
:::

#### The two AAMC domains and their fields

| Domain | Fields tested |
|---|---|
| **Humanities** | Architecture · Art · Dance · Ethics · Literature · Music · Philosophy · Popular Culture · Religion · Theater · *Studies of Diverse Cultures*\\* |
| **Social Sciences** | Anthropology · Archaeology · Economics · Education · Geography · History · Linguistics · Political Science · Population Health · Psychology · Sociology · *Studies of Diverse Cultures*\\* |

\\***Studies of Diverse Cultures** can appear in *either* a humanities or a social-sciences passage.

#### The four working varieties
The fields collapse into **four varieties** — two per domain. Use them to forecast a passage's trajectory, but remember many passages **blend** characteristics and some fit none cleanly.

| Variety | Domain | Typical fields | Signature features |
|---|---|---|---|
| **Arts** | Humanities | Architecture, art, dance, literature, music, popular culture, theater | Strong **Author opinion**; heavy **quotation** (artists *and* critics); **descriptive** language to illustrate examples |
| **Philosophical** | Humanities | Ethics, philosophy, religion, studies of diverse cultures | **Abstract** and logic-heavy; focuses on **concepts and their relations**; appeals to memory/imagination via **thought experiments** |
| **Scientific** | Social Sciences | Anthropology, education, linguistics, population health, psychology, sociology | **Numbers jump off the page**; heavy reliance on **empirical studies**; author opinion **muted** |
| **Historical** | Social Sciences | Archaeology, economics, geography, history, political science, studies of diverse cultures | Draws on **historical events** and **period quotations**; the **most variable** type — can drift toward Scientific *or* Philosophical |

##### Humanities: Arts passages
An **Arts** passage (e.g., the chapter's *Dada* mini-passage) leans on **quotations** from artists and critics, displays **strong opinions** through **Author keywords**, and uses **descriptive language** to paint artistic examples. *Literature* passages vary the most within this group.

##### Humanities: Philosophical passages
A **Philosophical** passage (e.g., the *Ethics / euthanasia* mini-passage) is **abstract and logic-heavy**, dwelling on **concepts and the relations between them**. It often recruits the reader's **memory or imagination** through everyday experience or a **thought experiment**.

##### Social Sciences: Scientific passages
A **Scientific** passage (e.g., the *Psychology / anchoring* mini-passage) puts **empirical studies** front and center — **numbers and citations** dominate. Author opinion is **subtler** than in the Arts but still detectable through keywords (*groundbreaking*, *notable*). Such a passage can read like the **Psych/Soc (Behavioral Sciences)** section of the MCAT.

##### Social Sciences: Historical passages
A **Historical** passage (e.g., the *American Century / Luce vs. Wallace* mini-passage) draws on **historical events** and **quotations from sources alive at the time**. It is the **most variable** variety: empirical studies push it toward **Scientific**, while heavy theory pushes it toward **Philosophical**.

:::expertise
**Psychology and sociology cross over.** They appear in *both* the CARS section and the Psych/Soc section — but **CARS never requires outside knowledge**. Importing facts you "know" about anchoring or bias is a trap that steers you toward **Out of Scope** answer choices.
:::

:::mnemonic
**"A PHi-ScHi" varieties** → **A**rts, **PH**ilosophical, **Sc**ientific, **Hi**storical. The two humanities types start the list (**A, PH**); the two social-science types finish it (**Sc, Hi**). Pair them: *opinion-and-quotes* (Arts) vs. *logic-and-thought-experiments* (Philosophical); *numbers-and-studies* (Scientific) vs. *events-and-period-quotes* (Historical).
:::
`
    },

    /* ───────────────────── 7.2 Support in Passages ───────────────────── */
    {
      id: 's2', num: '7.2', title: 'Support in Passages',
      goals: [
        'Identify the kind of logical support an author uses for a given claim',
        'Distinguish strong support (empirical evidence, primary-source authority) from weak or faulty support',
        'Flag unsupported controversial claims and reasoning fallacies as likely question targets'
      ],
      recap: `
- A **majority of CARS questions touch logical support**, so know the categories cold.
- **Unsupported claims:** harmless if uncontroversial (sky is blue); a **red flag** when *controversial* — those get asked about.
- **Strong support:** **empirical evidence** (experiments, surveys, stats) and **primary-source authority**. **Weak/faulty support:** secondary sources of dubious expertise, and **specious reasoning** (fallacies).
- **Logical appeals** (deduction, analogy, *reductio ad absurdum*) cluster in **Philosophical** passages; **authority** clusters in **Arts** and **Historical** passages; **empirical evidence** clusters in **Scientific** passages.
- **Appeals to the reader** (rhetorical questions, pathos, thought experiments, shared intuitions) make the *reader* do the supporting work.
`,
      detail: `
#### Why support matters
Because a **majority of CARS questions** connect to **logical support**, you must recognize the different ways authors back their claims. A single long paragraph can contain a dozen distinct claims — and **not every one is supported**.

#### Categories of support — overview

| Category | What it is | Strength | Where it clusters |
|---|---|---|---|
| **Unsupported claim** | An assertion with **no logical connection** to the rest of the passage | None — but *fine if uncontroversial* | Anywhere |
| **Empirical evidence** | Appeal to **experience**: experiments, surveys, statistics (also anecdotes/case studies) | **Strong** (esp. controlled studies) | **Scientific** passages |
| **Logical appeals** | **Deduction**, analogy, elimination of alternatives (*reductio ad absurdum*) | Strong *if* premises hold | **Philosophical** passages |
| **Authority** | Citing **another person/text** (or one's own expertise) | Varies with **credibility** | **Arts** & **Historical** passages |
| **Appeals to the reader** | Rhetorical questions, **pathos**, thought experiments, shared intuitions | Moderate — reader supplies it | Any (esp. Philosophical, Arts) |
| **Faulty support** | Controversial claim backed by another **controversial** claim, or a **fallacy** | **Weakest** — near-unsupported | Rare → likely tested |

#### Unsupported claims
You recognize an **unsupported claim** because it **lacks logical connections** to the rest of the passage — no **Logic keywords**, no implied contextual link.

- **Uncontroversial** unsupported claims (*the sky is blue*, *$2 + 2 = 4$*, *the heart pumps blood*) are fine and rarely tested.
- **Controversial** unsupported claims — anything *you* might doubt or that *some readers* would reject — are the **most likely to be asked about**.

#### Empirical evidence
Whenever an author appeals to **experience**, especially in scientific studies, that's **empirical evidence**.

- **Weaker forms** — anecdotes, historical accounts, case studies → **single cases only**.
- **Stronger forms** — surveys, statistical analyses, controlled experiments → **isolate variables** across a wide swath of experience.
- When you see an experiment, **identify the specific claim it supports** — a *very* common question. (The anchoring passage used this support type.)

:::realworld
**Hierarchy of clinical evidence** (strongest → weakest): **double-blind randomized controlled trials** → **systematic reviews / meta-analyses** → **cohort and case–control studies** → **case series** → **expert opinion**. The strength of empirical support tracks this ladder.
:::

#### Logical appeals (appeals to *logos*)
A claim supported **logically** is built from how concepts are **defined and related**. For example, a **contrapositive** is logically guaranteed by the conditional it comes from.

- **Analogical reasoning** — two things known alike in one respect are concluded alike in another, where direct evidence is lacking. *(e.g., chimps are "more self-aware" because they have larger brains — an analogy to humans.)*
- **Elimination of alternatives** — most classically the **reduction to absurdity (*reductio ad absurdum*)**: assume the opposite of the claim and show it leads to absurd/self-contradictory consequences. Also: ruling out rival hypotheses by their weaknesses.
- **Caveat:** elimination only works if **all** other possibilities are ruled out — easy in a *reductio*, very hard when explaining a phenomenon's cause.

:::bridge
**Deductive (top-down)** reasoning starts from general rules and draws conclusions from given information. **Inductive (bottom-up)** reasoning generalizes a theory from specific instances. Logical appeals in CARS are usually **deductive**.
:::

:::bridge
**Analogy, formalized:** given a well-established entity **K** and a partly-understood entity **U** that share corresponding traits ($K_1$ with $U_1$, $K_2$ with $U_2$, …), and **K** also has trait $K_x$, the author concludes **U** has the parallel trait $U_x$.
:::

#### Authority (appeals to *ethos*)
Drawing on **another person or text** is an appeal to **authority** — usually via paraphrase or **direct quotation**; occasionally an author leans on **their own** expertise.

| Source type | What it is | Support value |
|---|---|---|
| **Primary source** | Firsthand account / the actual work being discussed (e.g., the novel itself) | **Greatest** (short of the experience itself) |
| **Secondary source** | Analysis or commentary *about* a primary (or other secondary) source | **Varies** with the cited authority's **expertise** |

Authority is **extremely common in Arts and Historical** passages, and appears in some **Philosophical** passages — especially **religion**.

#### Appeals to the reader
Authors ground arguments in **starting points the audience already shares**, making the reader do the heavy lifting:

- **Rhetorical questions** — written to elicit one specific answer (usually *yes* or *no*).
- **Emotional appeals (pathos)** — charged language / vivid description to evoke a response.
- **Memory & imagination** — everyday experiences, hypotheticals, **thought experiments**.
- **Noncontroversial shared claims** — count as support **even when** audience members believe them for **different reasons**.

:::bridge
**Kohlberg's stages of moral reasoning** illustrate shared beliefs held for different reasons. In the **Heinz dilemma**, a **preconventional**, **conventional**, or **postconventional** reasoner can reach the *same* verdict via completely *different* logic.
:::

#### Faulty support
Backing a **controversial** claim with another **controversial** (unsupported) claim is "practically like leaving the claim unsupported." This category also covers **specious reasoning** — arguments that *look* plausible but are flawed:

- **Ad hominem** — attacking the person rather than the argument.
- **Hasty generalization** — leaping from insufficient data.
- **Stereotyping** — applying group assumptions to an individual.
- **Straw man** — refuting an extreme version no one actually holds.

:::keyconcept
**Reasoning errors are rare in CARS — so when you spot one, expect a question on it.** Faulty support is the weakest tier; if you can name the fallacy, you've likely found a question's answer.
:::

:::mnemonic
**Rank the support "from the gut": E-L-A-R-F.** **E**mpirical evidence and primary **A**uthority are strongest; **L**ogical appeals are strong *if* the premises hold; **R**eader appeals lean on shared intuition; **F**aulty support is the floor. *(Strong → weak as you move down the list.)*
:::
`
    },

    /* ──────────────────── 7.3 Anticipating Questions ──────────────────── */
    {
      id: 's3', num: '7.3', title: 'Anticipating Questions',
      goals: [
        'Predict the likely question types for a passage from its variety, opinion level, and support',
        'Connect specific passage features (keywords, opinions, undefined terms, opposing views) to specific question categories',
        'Use anticipated question types to read more purposefully and eliminate answer choices faster'
      ],
      recap: `
- **Heavy opinion** → expect **agree/disagree** questions; **abundant detail** → expect **Detail** questions.
- **Little support / argumentation** → expect **Reasoning Beyond the Text** (Apply; Strengthen–Weaken [Beyond the Text]) that bring in *new* information.
- **Many Logic keywords** → expect **Strengthen–Weaken (Within the Passage)** questions about argument structure.
- **A repeated, never-defined term** → expect a **Definition-in-Context** question.
- **Two or more opposing views** → expect questions on **who holds what**, **whom the author favors**, and the **implicit assumptions** of each view.
`,
      detail: `
#### The payoff of variety + support
This section revisits the four mini-passages — but now reading each for the **questions Test Day would attach to it**. The pattern: a passage's **variety, opinion level, support, and keyword density** *predict* its question types.

#### Feature → question-type map (the high-yield table)

| Passage feature | Anticipate this question type | Category |
|---|---|---|
| **Strong/abundant author opinion** | "Author would **agree/disagree** with…"; eliminate answers by attitude | Reasoning Within the Text |
| **Lots of concrete details** | **Detail** questions (comb the text for a specific bit) | Foundations of Comprehension |
| **Sparse support / little argumentation** | **Apply** & **Strengthen–Weaken (Beyond the Text)** — bring in **new info** | Reasoning **Beyond** the Text |
| **Many Logic keywords / clear argument structure** | **Strengthen–Weaken (Within the Passage)** | Reasoning **Within** the Text |
| **A key term used repeatedly but never defined** | **Definition-in-Context** | Foundations of Comprehension |
| **Cited experiments / empirical data** | "What does this study **show / support**?" | Reasoning Within the Text |
| **Two or more opposing views** | Who-holds-what · whom the author **favors** · **implicit assumptions** | Reasoning Within the Text |

#### The Arts passage (*Dada*)
- **Opinion-heavy** → expect **agree/disagree** questions. The author is **negative** on European colonialism/war but **positive** on Dada. A subtle one: the author cites "many commentators" calling Dada *"anti-art,"* then uses the **Difference keyword** *Notwithstanding* to **disagree** — consistent with calling Dada *art* from the first sentence.
- **Detail-rich** → expect **Detail** questions.
- **Thin on support** (only a critic's and an artist's quotations) → expect **Reasoning Beyond the Text** questions that **import new elements**.

:::bridge
Passages **lacking support or argumentation** invite **Reasoning Beyond the Text** questions: **Apply** questions (use passage info in a new scenario) and **Strengthen–Weaken [Beyond the Text]** questions (how new info affects the passage).
:::

#### The Ethics passage (euthanasia)
- Repeated **Opposition keyword** *distinction* → expect questions on the conceptual **difference between active and passive euthanasia**. The closing move — *"not an ethical difference but merely a technical one"* — adds a second opposition (**ethical vs. technical**) and is prime question material.
- **Numerous Logic keywords** → expect **Strengthen–Weaken (Within the Passage)** questions about **argumentative structure**.
- The **thought experiment** (appeal to the reader's imagination) is "definitely ripe for questioning."

#### The Psychology passage (anchoring)
- Built around **one phenomenon** → expect questions on **what *anchoring* means** or for **examples** of it.
- The term is **never explicitly defined** (you infer it from the experiments) → expect a **Definition-in-Context** question.
- Heavy **empirical support** → expect questions on **what the cited experiments show / which assertions they support** (Reasoning Within the Text).

:::bridge
When a passage uses a term **repeatedly without defining it**, expect a **Definition-in-Context** question — you'll have to build the meaning from how the term is used in context.
:::

#### The History passage (Luce vs. Wallace)
- **Two opposing views** → you are *guaranteed* questions on **who says what**, **whom the author favors** (clearly **Wallace** over Luce and Truman), or the **assumptions implicit** in each view.
- **Strong author opinion** (Positive, Negative, **Extreme** Author keywords) → even without an explicit "extreme view" question, use the **author's attitude to eliminate** wrong answer choices.

:::keyconcept
Passages with **two or more differing opinions** are **almost always** accompanied by questions about the **differences** between the opinions, **who holds which**, or the **assumptions** implicit in each. Map the opinions during your read and these points come for free.
:::

:::mnemonic
**"Read with the question in mind."** As you Scan, tag each feature with its tell: **O**pinion → agree/disagree · **D**etails → Detail Q's · **N**o-support → Beyond-the-Text · **L**ogic keywords → Strengthen–Weaken (Within) · **U**ndefined term → Definition-in-Context · **2 views** → who/favors/assumptions. *("ODNLU-2" — every flag predicts a question.)*
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '7.1 Varieties of Passages',
        points: [
          'CARS is **50% humanities / 50% social sciences**; **no outside knowledge** is needed and using it invites **Out of Scope** errors.',
          'Four working varieties: **Arts** (opinion + quotes) and **Philosophical** (abstract + logic) in the humanities; **Scientific** (empirical studies + numbers) and **Historical** (events + period quotes) in the social sciences.',
          'Many passages **blend** varieties — the point of classifying is to **set expectations** about structure, support, and likely questions, not to label perfectly.'
        ]
      },
      {
        section: '7.2 Support in Passages',
        points: [
          'Most CARS questions touch **logical support**; know the categories: **unsupported claims, empirical evidence, logical appeals, authority, appeals to the reader, faulty support.**',
          '**Controversial unsupported claims** and **reasoning fallacies** (ad hominem, hasty generalization, stereotyping, straw man) are rare → **likely tested** when present.',
          '**Empirical evidence** clusters in Scientific passages; **logical appeals** in Philosophical; **authority** in Arts/Historical. **Primary sources** outweigh **secondary** sources.'
        ]
      },
      {
        section: '7.3 Anticipating Questions',
        points: [
          'Passage features predict question types: **opinion → agree/disagree**, **detail → Detail**, **sparse support → Reasoning Beyond the Text**, **Logic keywords → Strengthen–Weaken (Within)**.',
          'An **undefined but repeated term** signals a **Definition-in-Context** question.',
          '**Two or more opposing views** virtually guarantee questions on who holds what, whom the author favors, and each view\'s implicit assumptions.'
        ]
      }
    ],
    mnemonics: [
      '**Four varieties — "A PHi-ScHi":** **A**rts & **PH**ilosophical (humanities) · **Sc**ientific & **Hi**storical (social sciences).',
      '**Pair the varieties by signature:** Arts = *opinion + quotes*; Philosophical = *logic + thought experiments*; Scientific = *numbers + studies*; Historical = *events + period quotes*.',
      '**Support strength, "E-L-A-R-F" (strong → weak):** **E**mpirical & primary **A**uthority strongest → **L**ogical appeals (if premises hold) → **R**eader appeals → **F**aulty support (the floor).',
      '**Primary beats secondary:** a firsthand account / the actual work supports far more than commentary about it.',
      '**Rare = tested:** an unsupported *controversial* claim or a *fallacy* almost always earns a question.',
      '**"ODNLU-2" question forecaster:** **O**pinion → agree/disagree · **D**etails → Detail · **N**o-support → Beyond-the-Text · **L**ogic keywords → Strengthen–Weaken (Within) · **U**ndefined term → Definition-in-Context · **2** views → who/favors/assumptions.'
    ],
    keyConcepts: [
      '**Set expectations, don\'t memorize labels.** Classifying a passage\'s variety during the Scan lets you predict its form, support, and questions — exactly the way you anticipate rate laws in a kinetics passage.',
      '**Never import outside knowledge into CARS.** Even for psych/soc topics you know, the section requires only what\'s on the page; outside facts steer you to Out of Scope answers.',
      '**Match support to variety:** empirical evidence → Scientific; logical appeals → Philosophical; authority → Arts/Historical. Identifying *which* claim a piece of support backs is a recurring question.',
      '**Passage features are question previews.** Strong opinion, undefined terms, sparse support, dense Logic keywords, and opposing viewpoints each map to a predictable question type — read with that question already in mind.'
    ],
    equations: []
  },

  questions: []
};
