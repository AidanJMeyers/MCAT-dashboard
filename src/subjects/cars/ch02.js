// CARS Chapter 2 — Analyzing Rhetoric. STRATEGY chapter (not science).
// Figures reused from ch02.json; recap/detail markdown authored here.
// CARS override: questions: [] (no Science Mastery Assessment for CARS strategy chapters).
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 2,
  title: 'Analyzing Rhetoric',
  subtitle: 'What is rhetoric? · key components of rhetoric · rhetorical analysis',

  blocks: [
    /* ───────────────────────── 2.1 What Is Rhetoric? ───────────────────────── */
    {
      id: 's1', num: '2.1', title: 'What Is Rhetoric?',
      goals: [
        'Define rhetoric as the art of effective communication, especially persuasion',
        'Distinguish content (what an author says) from rhetoric (how the author says it)',
        'Explain why CARS tests rhetorical analysis rather than rhetorical production',
        'Identify the elements that make up rhetorical knowledge'
      ],
      recap: `
- **Rhetoric** = the art of **effective communication** in speech and text, with the study of rhetoric focused on **persuasion** — getting others to adopt beliefs or take action.
- **Rhetorical analysis** looks past *what* the author says (**content**) to *how* the author says it — the **techniques of persuasion**.
- A **rhetorical question** is a model of rhetoric: it has one obvious answer and forces *readers* to reach the conclusion themselves, making them more convinced.
- On CARS your job is **rhetorical analysis**, not writing — understand how *others* use rhetoric.
`,
      detail: `
#### Rhetoric in one sentence
**Rhetoric** is the **art of effective communication**, both in speech and in text. Because the MCAT is a written exam, CARS focuses on the **textual** side.

- Language serves many purposes, but the *study* of rhetoric centers on **persuasion** — the attempt to **influence others** to adopt particular beliefs or engage in certain behaviors.
- **Rhetorical analysis** goes beyond the **content** (what is said) to examine **how** the author says it, emphasizing **techniques of persuasion**.

##### The rhetorical question — a worked example
A **rhetorical question** ends in a question mark but has only **one plausible, obvious answer**.

- What makes it rhetorically *effective*: it forces **readers to reach the conclusion themselves**, so they are **more convinced** than if the author had simply stated it.
- That is rhetoric in miniature — the *form* of the message does persuasive work the bare content could not.

#### Analysis, not production
When the **Writing Sample** was an MCAT section (**1991–2013**), producing good rhetoric mattered for Test Day. That section is gone.

- Premed students still need to **write** clearly (Personal Statement, application essays), but your **principal concern in CARS** is to understand **how other people use rhetoric** — i.e., to perform **rhetorical analysis**.
- The chapter builds a shared vocabulary first, then applies it.

#### Rhetorical knowledge
The fundamental aspects of rhetoric — **author, audience, message, goal, and context**, plus subtler elements — together make up **rhetorical knowledge**: an **awareness of the aspects of a text besides its content**.

:::keyconcept
**Content vs. rhetoric.** *Content* = the literal facts and claims. *Rhetoric* = everything about **how** those claims are delivered to move an audience. CARS rewards readers who track both — and the harder questions live in the *how*.
:::

:::mnemonic
**"Rhetoric = the HOW, content = the WHAT."** If a question asks what the author *believes* or *intends* rather than what a sentence literally states, you're being tested on rhetoric.
:::
`
    },

    /* ─────────────────────── 2.2 Key Components of Rhetoric ────────────────────── */
    {
      id: 's2', num: '2.2', title: 'Key Components of Rhetoric',
      goals: [
        'Diagram the rhetorical situation: transmission of ideas from author to audience with a goal',
        'Characterize an author by expertise, passion, and the stakeholders they represent',
        'Distinguish message, voice, genre, and medium',
        'Identify an author\'s goal (inform, persuade, evoke emotion) and read tone from word choice',
        'Use both senses of context: surrounding text and the broader sociohistorical situation'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 2.1 — The rhetorical situation: an author transmits a message to an audience with a goal, all embedded in a context.' }],
      recap: `
- The **rhetorical situation** = transmission of ideas from an **author** to an **audience** with a clear **goal**, embedded in a **context**.
- **Author** clues: **expertise** (jargon level), **passion** (extreme/emotional language), and **stakeholders** ("we" vs. "I").
- **Message** = the explicit text (facts, data, stated opinions). **Voice** = the author's unique style; **genre/medium** = the form and delivery system.
- **Goal** is usually **inform**, **persuade** (most common on the MCAT), or **evoke emotion** — and **tone** (the author's attitude) reveals it.
- **Context** has two senses: surrounding **text** (definition-in-context) and the broader **sociohistorical situation**.
`,
      detail: `
#### The rhetorical situation
The **rhetorical situation** represents any act of communication, emphasizing the **transmission of ideas from an individual to an audience**. Before writing, a savvy author answers two questions: **To whom am I writing?** and **Why?**

![Figure 2.1 — The rhetorical situation.](${fig(1, 0).src})

:::keyconcept
The **rhetorical situation** focuses on the transmission of ideas **from the author to the audience, with a particular goal in mind.**
:::

#### Author
The **author** is the individual or group writing the text. Three dimensions distinguish authors:

| Dimension | What it tells you | Textual signal |
|---|---|---|
| **Expertise** | How much the author (and intended audience) knows about the topic | **Jargon** — technical terms of a field (e.g., *transcriptional repression, zwitterion, anabolism*; *homunculus, Gesellschaften, negative symptoms*). Less-expert authors use common terms + fuller explanations. |
| **Passion / investment** | How emotionally vested the author is | **Extreme keywords** and **strong, emotional language**; neutral authors use emotionally flat words. |
| **Stakeholders represented** | Whether the author speaks for a larger group | Use of **"we" rather than "I"**; opinions may be strengthened or softened to match the group. |

:::expertise
The more knowledgeable the author, the **more jargon** appears — which can make a passage hard to read. But the MCAT **does not expect you to know any field-specific terminology** in CARS. Any important jargon will be **defined in the passage**, or its definition will be **strongly implied**.
:::

#### Audience
The **audience** is the person or persons for whom the text is intended.

- Publications usually address **large audiences**; many CARS passages target an **academic audience** (specialists in the author's field).
- Even "general public" writing leans on **idioms, clichés, symbols, and references** recognizable only to people of a particular **time and place**.
- Wide availability of journals and historical documents means the message often reaches **far beyond** its intended audience.
- Readers who **share characteristics** tend to interpret a work **similarly** (e.g., MCAT students share a science background a business student may lack).

:::expertise
In CARS you will **rarely be a member of the intended audience** — but you can still learn to recognize **for whom** a passage was originally written.
:::

#### Message, voice, genre, and medium
The **message** is the actual text the author writes — and it contains **only the explicit information**: the facts, data, concepts, and **stated** opinions.

- CARS is unique in pushing past the message to the **goal and context**, sometimes asking you to infer the author's **biases, assumptions, or identity** (even profession).

| Term | Definition | CARS cue |
|---|---|---|
| **Message** | The explicit text — facts, data, stated opinions | What the words literally assert |
| **Voice** | The author's **unique style** (word choice, sentence construction) | Hints at personality/identity; **quotations** carry a *different* voice than the passage author |
| **Genre** | The **category** of work (fiction, nonfiction, drama, poetry) or concrete form (book, journal article, case study, essay, letter, email) | Shaped by audience and goal |
| **Medium** | The **delivery system** — print, broadcast, or digital | How the message physically reaches the audience |

:::bridge
An author's **voice** relates to two parts of language theory: **syntax** (word choice and word order) and **pragmatics** (adapting one's message to the social context) — *MCAT Behavioral Sciences Review*, Ch. 4.
:::

#### Goal
The **goal** is the author's **intended outcome** — the effect she wishes to produce.

| Goal | What the passage looks like |
|---|---|
| **Inform** | Reads like a **textbook or encyclopedia**: detailed description, nearly devoid of opinion |
| **Persuade** | Aims to **change beliefs** (or motivate **action**); **most common on the MCAT** — most Test Day passages push at least one opinion |
| **Evoke emotion** | Seeks to **delight, provoke curiosity**, etc.; may use very different means from persuasion (and can serve persuasion too) |

- Even purely informing is a kind of **persuasion**, since it leads readers to form **new opinions**.
- **Tone** — the author's **attitude toward the subject** — helps establish the goal. To find tone, examine the words and ask: **"What imagery or feelings do these words convey?"**

:::bridge
Your passage **Outline** ends with the author's **Goal**, and writing that Goal means naming the **tone**: is the author *prescriptive? demanding? doubtful? impartial?* Outlining is covered in *MCAT CARS Review*, Ch. 4.
:::

:::bridge
**Impression management** (*MCAT Behavioral Sciences Review*, Ch. 9) — how we present ourselves to accomplish goals — also operates in writing via **self-disclosure, ingratiation, and altercasting**.
:::

#### Context
**Context** has **two distinct but related** senses:

1. **Surrounding text** — the relationships among words, sentences, and paragraphs. A word's meaning emerges from its sentence; a sentence's intent from neighboring sentences; a paragraph's significance from those around it; a chapter from the whole book.
2. **Broader sociohistorical situation** — the social, political, economic, cultural, and intellectual environment when the piece was written.

- Example: *I Have a Dream* (Dr. Martin Luther King, Jr.) is far better understood with awareness of the **early-1960s civil rights movement** than without.
- The MCAT **won't require outside knowledge** of sociohistorical context — but recognize that **tone and voice are shaped by it**.

:::bridge
**Definition-in-Context** questions (*MCAT CARS Review*, Ch. 9) test exactly the first sense of context — deriving a word's meaning (usually jargon) from surrounding text.
:::

:::realworld
Why do testmakers care about reading **beyond the message**? You'll use it daily as a physician — reading a **patient's** body language and tone to find what they're *really* thinking, and **critically appraising research** for **biases or conflicts of interest**. Good clinical choices require moving past the **message** to the **goal and context**.
:::

:::mnemonic
**"A-A-M-G-C"** for the rhetorical situation: **A**uthor → **A**udience → **M**essage → **G**oal → **C**ontext. Author and audience anchor the ends of the triangle; message travels between them; goal and context surround the whole act.
:::
`
    },

    /* ───────────── 2.3 Rhetorical Analysis ───────────── */
    {
      id: 's3', num: '2.3', title: 'Rhetorical Analysis',
      goals: [
        'Apply rhetorical knowledge to compare passages on the same topic',
        'Detect author bias from positive, neutral, and negative diction',
        'Match tone and voice to a plausible genre/publication',
        'Define the Aristotelian appeals — logos, ethos, pathos — and relate them to the rhetorical triangle',
        'Recognize how the MCAT actually tests appeals (argument support, not labeling)'
      ],
      recap: `
- **Rhetorical analysis** = applying rhetorical knowledge to a real passage: read for **message, voice, goal, and tone**.
- The same topic can be written with **positive bias** (light, complimentary), **neutral/objective** (dry, factual), or **negative bias** (critical, dismissive) — **diction reveals it**.
- The **Aristotelian appeals** (a.k.a. **strategies/appeals**): **logos** (logic/reason), **ethos** (credibility/character), **pathos** (emotion).
- The MCAT **will not** ask you to *label* which appeal is used — but it **will** ask **how an author supports an argument**. **Logos is the most question-worthy.**
`,
      detail: `
#### What rhetorical analysis is
**Rhetorical analysis** is the **application of rhetorical knowledge** to a passage. With the vocabulary from 2.2, read every passage for **message, voice, goal,** and **tone**.

:::expertise
When you meet example passages like the three below, **answer first, then check Kaplan's answer.** For each, determine the **message, voice, goal, and tone**. Training yourself to think critically while practicing makes it **automatic on Test Day**.
:::

#### Same topic, three rhetorics
Three passages all describe **Aristotle's *Rhetoric***, yet differ sharply in stance. All three use **advanced vocabulary**, signaling **knowledgeable authors** writing for **educated audiences** — but their **bias** diverges.

| Passage | Bias / stance | Diction that gives it away | Voice | Likely goal & genre |
|---|---|---|---|---|
| **1** | **Positive** | *"Aristotle's brilliance," "among his most remarkable insights," "Aristotle in his wisdom"* | **Clearly evident**; light, respectful, complimentary | **Celebrate** the philosopher → arts & culture publication |
| **2** | **Neutral / objective** | No explicit opinion; pure description of the classifications | **Minimized / dry, factual** | Simply **inform** → encyclopedia or textbook |
| **3** | **Negative** | *"too often cited," "penchant for simplistic classifications," "Fortunately, Aristotle does not deny common sense"* | **Obvious**, like Passage 1 | **Downplay / rebut** Aristotle → critical academic article |

:::keyconcept
**Diction is the tell.** Tone and bias rarely announce themselves; they hide in **word choice**. Charged adjectives (*brilliance, simplistic, fortunately*) flag the author's **attitude** — and attitude points to the **goal**.
:::

#### Aristotelian rhetoric — the three appeals
Aristotle held that rhetoric relies on the communication skills of **both** the author and the audience. He named three **strategies**, also called **appeals**: **logos, ethos,** and **pathos**. They parallel the **rhetorical triangle** (author–audience–message) of Figure 2.1.

| Appeal | Greek root / sense | What it does | The author must… |
|---|---|---|---|
| **Logos** | **logic** | Persuade by **reason** — deductive proofs (**syllogisms, enthymemes**) and inductive **examples** | Make the **message** logically sound, based in reason |
| **Ethos** | **character / ethics** | Persuade via the speaker's **credibility, expertise, and goodwill** | Be a **credible, ethical** deliverer of the message |
| **Pathos** | **emotion / suffering** | Persuade by **playing on the audience's emotions** to ready them to believe or act | **Appeal to the audience's feelings** |

- Most orators use **all three**, usually **emphasizing one**.
- The audience is also expected to use **critical reading and reasoning** to analyze the message.

:::mnemonic
**"Logic, Looks, Lump-in-throat."** **Logos** = **logic** (the argument's *reason*). **Ethos** = the author's **ethical/credible looks** (think *ethics → ethos*). **Pathos** = **pathetic/emotional** appeal (think *sympathy → pathos*). All three start with the *speaker's* job but land on the *audience*.
:::

:::expertise
The MCAT **will not** ask you to **identify which appeal** an author uses. It **will** ask **how an author supports his argument**. **Logos is especially question-worthy** — logical reasoning is developed further in *MCAT CARS Review*, Chs. 5–6.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '2.1 What Is Rhetoric?',
        points: [
          '**Rhetoric** = the art of **effective communication**; its study centers on **persuasion**.',
          '**Rhetorical analysis** examines *how* an author communicates (technique), not just *what* (content).',
          'A **rhetorical question** persuades by making readers reach the obvious conclusion themselves.',
          'In CARS your job is **analysis, not production** — understand how others use rhetoric.'
        ]
      },
      {
        section: '2.2 Key Components of Rhetoric',
        points: [
          'The **rhetorical situation** transmits ideas from **author → audience** toward a **goal**, within a **context**.',
          '**Author** clues: **jargon** (expertise), **extreme/emotional language** (passion), **"we" vs. "I"** (stakeholders).',
          '**Message** = explicit text; **voice** = unique style; **genre** = category/form; **medium** = delivery system.',
          '**Goal** = inform, **persuade** (most common), or evoke emotion; **tone** (author\'s attitude) reveals it.',
          '**Context** = surrounding text (definition-in-context) **and** the broader sociohistorical situation.'
        ]
      },
      {
        section: '2.3 Rhetorical Analysis',
        points: [
          'Read every passage for **message, voice, goal, and tone**; **diction** reveals bias (positive / neutral / negative).',
          'Tone + bias point to **genre** (celebratory article vs. encyclopedia vs. critical journal).',
          'The **Aristotelian appeals**: **logos** (reason), **ethos** (credibility), **pathos** (emotion); most authors use all three.',
          'The MCAT tests **how an author supports an argument** (not appeal-labeling); **logos** is the most question-worthy.'
        ]
      }
    ],
    mnemonics: [
      '**Rhetoric = the HOW, content = the WHAT.** If a question asks what the author *means/intends/believes* rather than what a line literally states, it\'s testing rhetoric.',
      '**Rhetorical situation — "A-A-M-G-C":** **A**uthor → **A**udience → **M**essage → **G**oal → **C**ontext.',
      '**Author profile — "Jargon, Juice, Joint":** **J**argon = expertise level; **J**uice = passion (emotional/extreme words); **J**oint = stakeholders ("we" not "I").',
      '**Goals — "I-P-E":** **I**nform (textbook), **P**ersuade (most common on the MCAT), **E**voke emotion.',
      '**Appeals — "Logic, Looks, Lump-in-throat":** **Logos** = logic; **Ethos** = ethical/credible character; **Pathos** = pathetic/emotional appeal.',
      '**Context is double:** zoom **in** (surrounding words → definition-in-context) and zoom **out** (the era it was written in).'
    ],
    keyConcepts: [
      '**Analysis over production:** CARS never asks you to *write* rhetoric — it asks you to **decode how others persuade**, especially their goal and tone.',
      '**Diction is the tell:** tone and bias hide in word choice; charged adjectives expose the author\'s **attitude**, which points to the **goal**.',
      '**You are rarely the intended audience** — but you can still infer **for whom** a passage was written, and even the author\'s biases, assumptions, and profession.',
      '**Know the appeals, but watch how they\'re tested:** the MCAT asks **how an author supports an argument** (logos-heavy), not which appeal is "used."'
    ],
    equations: []
  },

  questions: []
};
