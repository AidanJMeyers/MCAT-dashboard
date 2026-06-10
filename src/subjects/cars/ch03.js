// CARS Chapter 3 — Keywords. Authored to the rich-formatting quality bar.
// CARS is a STRATEGY chapter (not science): no practice questions in the JSON
// (questions: []), and figures are used only where they are real content figures
// (the two author-attitude spectra in 3.3). The recap/detail markdown is authored here.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 3,
  title: 'Keywords',
  subtitle: 'Reading strategically with keywords · Relation keywords · Author keywords · Logic keywords',

  blocks: [
    /* ───────────── 3.1 Reading Strategically with Keywords ───────────── */
    {
      id: 's1', num: '3.1', title: 'Reading Strategically with Keywords',
      goals: [
        'Identify the four modes of reading a CARS passage (content, organization, perspective, reasoning) and the question each one answers',
        'Match each non-content mode to the keyword family that serves it: Relation, Author, and Logic keywords',
        'Read actively/critically — setting and testing expectations — rather than passively gliding over the text'
      ],
      recap: `
- A CARS passage can be read on **four levels** — the **modes of reading**: **content**, **organization**, **perspective**, **reasoning**.
- **Content** = *what* the text says; you bring **no outside knowledge** (unlike the science sections) — everything you need is in the passage.
- The other three modes are each served by a **keyword family**: **organization → Relation keywords**, **perspective → Author keywords**, **reasoning → Logic keywords**.
- Goal of keyword reading: become a **critical (active) reader** who *anticipates* where the author is going, not a passive one who only skims the surface message.
`,
      detail: `
#### The four modes of reading
Dense academic prose — which describes essentially every CARS passage — can be appreciated on **four distinct levels**. Most readers default to the first (content); high scorers consciously read on all four.

| Mode of reading | Core question it answers | What you track | Keyword family |
|---|---|---|---|
| **Content** | *What does the text say?* | **Buzzwords**: proper nouns, names, dates, new terms, jargon | *(none — buzzwords, as in the sciences)* |
| **Organization** | *How do sentences connect? How do ideas relate?* | How each new idea links to what came before | **Relation keywords** (§3.2) |
| **Perspective** | *Why does the author write? How does the author feel? Who else has a voice?* | Tone, goal, voice, opinions hidden as facts | **Author keywords** (§3.3) |
| **Reasoning** | *How are claims supported? How are claims challenged?* | The argument: conclusion vs. evidence | **Logic keywords** (§3.4) |

:::keyconcept
Any CARS passage can be understood in **four ways** — the **modes of reading**. Each answers at least one vital question:

- **Content** — *What does the text say?*
- **Organization** — *How do sentences connect? How do ideas relate?*
- **Perspective** — *Why does the author write? How does the author feel? Who else has a voice?*
- **Reasoning** — *How are claims supported? How are claims challenged?*
:::

#### Read for content
Reading for **content** means extracting the information — discovering *precisely what is being said*. This is the **message** of the passage (see Ch. 2 of *MCAT CARS Review*).

- You will **never** need preexisting familiarity with a passage's content — **all information needed to answer the questions is inside the passage itself**.
- This is the *opposite* of the science sections, where you integrate **outside knowledge** with passage information.
- Ask: *What is the author saying? What is the main idea? What topics are explored? What opinions has the author stated?*
- For content we don't use keyword lists; we hunt **buzzwords** — **proper nouns, names, dates, new terms, and jargon**.

#### Read for organization
**Organization** is *how* the ideas relate, where content is the *what*. This structure becomes your **Outline** (Ch. 4) as you **Label** each paragraph by its function.

- Ask: *How does this connect to what came before? How many distinct ideas are here? Is this new or a restatement? Where is the author going? How does this tie to the thesis?*
- These questions get easy when authors use **Relation keywords** — what you may have learned as **transition words** because they ease the *transition* between sentences.

#### Read for perspective
Many CARS authors **conceal their biases** and **mask opinions as facts**, rarely stating intentions overtly. So attend to the **rhetorical** elements — especially the author's **goal, tone, and voice**.

- The key to perspective is thinking about the **why behind the how** — consider the author's **Goal** and how each part serves it.
- Many passages contain **alternative voices**: named thinkers (e.g., Carol Gilligan, Ludwig Wittgenstein), schools of thought (postmodernism, American pragmatism), or indirect cues like *a traditional view*, *critics*, *some contend*, *others have argued*.
- Multi-voice passages **virtually guarantee** questions asking you to sort out *who said what*.
- Ask: *Why is the author writing this? What is this part's purpose? How many distinct voices are here? Does the author agree, or is this another voice? How does the author really feel?*
- **Author keywords** thrust you inside the writer's mind, letting you see things from their perspective.

#### Read for reasoning
In nearly every passage the author tries to **persuade** you to adopt a belief. It isn't enough to repeat the claim — the author supplies **supporting reasons** that make the belief more plausible. Giving reasons is **argumentation** (the **logos**, or logical appeals, of Ch. 2).

- The **logical structure** can differ from the **organization** — e.g., the **conclusion** of the main argument might appear in the *first sentence*.
- Ask: *What is the author trying to convince me to believe? Are reasons given? Does this claim make a previous one more plausible, or challenge it? What evidence or refutations are offered? Which claims get the most support?*
- **Logic keywords** sort out the structure of the argument.

:::bridge
Argumentation and logic are so crucial for Test Day that they get their own chapters — **Chapters 5 and 6 of *MCAT CARS Review*** — a necessary supplement to the Logic keywords introduced here in §3.4.
:::

:::mnemonic
**The four modes = "COPR"** (say it "copper"): **C**ontent · **O**rganization · **P**erspective · **R**easoning. Map the last three to their keyword families: **O → Relation**, **P → Author**, **R → Logic**. Content gets **buzzwords**, not keywords.
:::

:::expertise
Keywords make you an **active, critical reader**: you continuously *question the text* and *set expectations* for where the author will go. Even when an expectation isn't met, setting it was worthwhile — and the moments an author **frustrates your expectations** are exactly what the testmakers love to ask about.
:::
`
    },

    /* ───────────────────────── 3.2 Relation Keywords ───────────────────────── */
    {
      id: 's2', num: '3.2', title: 'Relation Keywords',
      goals: [
        'Distinguish Similarity (continuation) from Difference (change-of-direction) Relation keywords and adjust reading pace accordingly',
        'Recognize the more complex Difference subtypes — Oppositions, Sequences, and Comparisons — and what each signals',
        'Use punctuation (colon, semicolon, dash, parentheses, quotes) as similarity cues while letting an explicit keyword override punctuation'
      ],
      recap: `
- Relation keywords serve **reading for organization** and split into two families: **Similarity** (continuation) and **Difference** (change of direction).
- **Similarity** (*and, also, moreover, for example, this/that*) → same idea continues → **speed up** if you already understood it.
- **Difference** (*but, yet, however, although, in contrast*) → the trajectory shifts → **slow down**; differences are **more testable**.
- Three high-yield Difference subtypes: **Opposition** (*not, either…or, on the contrary*), **Sequence** (*first, next, finally; historically vs. now*), **Comparison** (*more/less, best/worst, –er/–est*).
- **Punctuation** (**:** **;** **—** **( )** **" "**) usually flags **similarity/elaboration** — but an explicit keyword beats the punctuation (e.g., *; yet* = difference).
`,
      detail: `
#### The two big families
Reading for organization means knowing how *what you're reading now* fits the whole. The vast majority of Relation keywords are either **Similarity** or **Difference**.

##### Similarity — keep moving
A clause that opens with a **Similarity keyword** *continues in the same vein* — it won't say anything truly new.

- If you **understood** the preceding material → you can **read briskly** until a new keyword signals a change.
- If you **struggled** with a sentence but the next opens with a Similarity keyword → **keep going**: the author is likely restating the same idea, often in easier words.
- Includes **example phrases** (*such as, for instance, take the case of*) and **demonstrative pronouns** (*this, that, these, those*).

:::expertise
If you understand what the author is saying and hit a **Similarity keyword**, **skim** what follows — you know it's more of the same. A few saved seconds per passage add up across the section.
:::

###### Punctuation as a similarity signal
Even though they aren't technically keywords, several punctuation marks flag a *similar/elaborating* idea:

- **Colon ( : )** and **semicolon ( ; )** — the verbal equivalent of an **equals sign (=)**.
- **Dashes ( — )** and **parentheses ( )** — set off elaboration on the same theme.
- **Quotation marks ( " " )** — among many uses, often borrow *another person's voice to restate* the author's own point.

##### Difference — slow down
**Difference keywords** (*but, yet, however, although, otherwise*) signal a **change in direction** and deserve extra attention — they suggest more interesting, and therefore more **testable**, relationships than similarity.

- They transition between sentences but can also mark **deeper conceptual relations**: two solutions to a problem, a disagreement between critics, a shift in opinion across time.
- Connections between ideas are **among the most commonly tested** features of CARS passages — pin down each relationship with as much specificity as the clues allow.

:::expertise
When you hit a **Difference keyword**, **slow down slightly**. It signals a change of focus or a direct contrast — either way you need to track *how* the passage's trajectory is changing to stay a step ahead of the author.
:::

:::keyconcept
**Word beats punctuation.** Punctuation often signals similarity, but if a punctuation mark is paired with an explicit keyword, the **word wins**: a semicolon followed by **yet** signals **difference**, not similarity. This is why **anticipating** while you read matters more than memorizing — be a *critical* reader, not a *passive* one.
:::

#### More complex relationships
These count broadly as Difference keywords but mark **special types of divergence** — and are *especially ripe* for CARS questions. The three most common:

##### Opposition
Words like **not, never, on the contrary, as opposed to** indicate not mere difference but **outright conflict**.

- Authors love **dichotomies** — divisions into **two mutually exclusive** categories (no overlap).
- Parallel constructions like **either…or** and **on one hand…on the other hand** flag a **dualism**.
- Dichotomies are often (not always) **exhaustive** — *everything* falls into one of the two categories (e.g., "all actions are either free choices or involuntary reflexes," leaving no gray area).

:::bridge
**Mutual exclusivity** also matters in probability. For mutually exclusive outcomes, $P(A \\text{ and } B) = 0$. If they are also **exhaustive**, then $P(A \\text{ or } B) = 1$. (See Ch. 12 of *MCAT Physics and Math Review*.)
:::

##### Sequence
Some keywords mark a **series advancing in time**: *initially, first, second, third, next, subsequently, before, after, last, finally*.

- They're usually **evenly spaced** through a paragraph or two — note how they **chunk** the text.
- Sequences are a **hybrid** of Similarity and Difference: each step connects to a larger process *and* departs from the other steps.
- Generally **take your time** with these until you see how the sequence unfolds.
- **Time-based Difference:** *historically, traditionally, used to, originally* (and *initially / before* in contrast to a later time) can be contrasted with *now, currently, modern, later, after* — implying something new was learned in between. Pattern: *The traditional interpretation* **vs.** *A more modern understanding*; *Historically, we thought* **but** *now, we know*.

##### Comparison
Authors **rank ideas relative to one another**, usually **two at a time**, using *more, less, better, worse*.

- For three-plus items or sweeping superiority/inferiority, look for **superlatives**: *most, least, best, worst* and the **–er / –est** endings.
- When a Comparison reveals an **attitude**, it behaves more like an **Author keyword** (§3.3).

#### Table 3.1 — Common Relation keywords
| Similarity | Difference | Opposition | Sequence | Comparison |
|---|---|---|---|---|
| and · also | but · yet | not / never / none | before / after | better / best |
| moreover · furthermore | however · although | either…or | earlier / later | worse / worst |
| like · same / similar | (even) though · rather (than) | as opposed to | previous / next | less / least |
| that is · in other words | in contrast · otherwise | on the contrary | initially / subsequently / finally | more / most |
| for example · for instance | on the other hand · nevertheless | versus (vs.) | first / second / third / last | –er / –est |
| take the case of · including | whereas · while · different | on one hand…on the other hand | historically / traditionally / used to | primarily · especially |
| such as · in addition · plus | unlike · notwithstanding | conversely · contrarily | now / currently / modern | above all |
| at the same time · as well as | another · instead · still | — | — | — |
| equally · this / that / these / those | despite · alternatively · unless | — | — | — |
| **: ; — ( ) " "** (punctuation) | — | — | — | — |

*Note: some words fit more than one category — e.g., **not** reveals a difference but can also mark a direct opposition.*

:::mnemonic
**Similarity = same → SPEED up. Difference = shift → SLOW down.** Two S-words for the two families, with opposite reading speeds. Within Difference, the three "spicy" subtypes are **O-S-C**: **O**pposition, **S**equence, **C**omparison — the ones the testmakers reach for.
:::

:::expertise
**Don't just memorize the lists.** A Difference keyword can function differently depending on context, and an "Evidence" keyword may give almost no real support. Success isn't knowing that *but, yet, however* are Difference keywords — it's understanding **how** a Difference keyword changes your interpretation of the author's message.
:::
`
    },

    /* ───────────────────────── 3.3 Author Keywords ───────────────────────── */
    {
      id: 's3', num: '3.3', title: 'Author Keywords',
      goals: [
        'Detect an author\'s hidden attitude through the emotional "charge" (positive vs. negative) of chosen words',
        'Place an attitude on the positive–negative spectrum and distinguish Extreme from Moderating keywords',
        'Separate ambivalent (both charges) from impartial (no charge), and handle opposition/double negatives that flip an attitude'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 3.1 — The Spectrum of Author Attitudes (linear): from extremely negative (– – –) through neutral to extremely positive (+ + +). Most CARS authors land in the wide middle, strong but not extreme.' }],
      recap: `
- Author keywords reveal an author's **attitude**, which is usually **hidden** — authors rarely say *I believe*; they leak opinion through word choice.
- Words carry an **emotional charge**: **Positive** (*masterpiece, excel, compelling*) vs. **Negative** (*disaster, fail, deceptive*). Most CARS prose is **neutral**, so the **charged exceptions** are gold.
- Attitude lives on a **spectrum** from extremely negative (**– – –**) to extremely positive (**+ + +**); most authors are **strong but not extreme**.
- **Extreme keywords** (*always, must, indeed, especially*) crank up the charge (like a **!**); **Moderating/hedging keywords** (*may, might, sometimes, in some cases*) weaken a claim to make it easier to defend.
- **Ambivalent** (both + and –, like a **zwitterion**) ≠ **Impartial** (neither, like an **uncharged atom**) — both look "neutral" overall but are very different.
- **Opposition** (*not*) usually **flips an extreme claim into a moderate one of the reverse charge** — but some words (*must / must not*) keep their strength.
`,
      detail: `
#### Attitude is usually hidden
**Author keywords** are subtle but crucial — they answer the many questions about the author's **attitude**. CARS authors rarely write *I believe* or *it seems to me* (and when they do, it's more often in the **humanities** than the social sciences). Instead they leak opinion through **verbs, nouns, adjectives, and adverbs** that carry an emotional **valence** — a connotation of **approval or disapproval**. They also use words that make claims more **Extreme** (emphasis, strengthening) or that **Moderate** them (qualifying, weakening).

#### Positive vs. negative — the "charge" metaphor
Just as an atom or molecule can carry an **electrostatic charge**, a word can carry an **emotional charge** — positive or negative. Because most CARS language is **uncharged/neutral**, you pay attention to the **exceptions** with clear positive or negative connotations.

| Part of speech | Positive examples | Negative examples |
|---|---|---|
| **Nouns** | masterpiece, genius, triumph | disaster, farce, limitation |
| **Verbs** | excel, succeed, know | miss, fail, confuse |
| **Adjectives** | compelling, impressive, elegant | problematic, so-called, deceptive |
| **Adverbs** | correctly, reasonably, fortunately | questionably, merely, purportedly |

##### Attitude as a spectrum
Charge has **degrees** — a +1 cation differs from a +3 cation, and a *masterful artist* signals stronger approval than a merely *quality writer*. So picture attitude on a **spectrum/continuum**, extremely positive on one end and extremely negative on the other (Figure 3.1). The diagram's **wide middle** reflects reality: most attitudes sit in a **comfortable middle ground**, neither too extreme nor too moderate. When **Outlining** (Ch. 4), record attitude in shorthand: **+** moderately positive, **– – –** extremely negative, and so on.

:::expertise
Most MCAT passages contain **strong but not extreme** opinions. An author is rarely **completely neutral** — if there's no at-least-moderate opinion, there's little reasoning for the questions to test.
:::

##### Ambivalent ≠ impartial
Beyond positive/negative/neutral, an author can be **ambivalent** — literally **feeling both ways**.

- **Ambivalent** = holds **both a positive and a negative** opinion — like an amino acid's **zwitterionic form**, with both a positively and a negatively charged end. (Net charge zero, but distinctive — calling it merely "neutral" misses the point.)
- **Impartial** = has **no strong opinion either way** — like an **uncharged, unpolarized atom**.
- The pair is as different as the set **{1, –1}** is from the **number 0**. The MCAT won't let you oversimplify the two into one "neutral."

:::keyconcept
Both look "neutral" overall, yet they are opposites in structure:

- **Ambivalent** = having **both** a positive *and* a negative opinion.
- **Impartial** = having **neither** a positive *nor* a negative opinion.
:::

#### Extreme keywords — turn up the charge
**Extreme keywords** are Author keywords that **enhance the charge**, forcing the author toward one extreme. They are functionally **exclamation points ( ! )** — windows into what the author feels passionately about.

- Examples: *indeed, very, really, quite, primarily, especially, obviously, foremost, always, in fact, above all, it is clear that*.
- **Necessity** words (*need, must*) are Extreme keywords too.
- **Value-judgment** words (*should, ought*) are also Extreme — and **rare in CARS**, so give them **special attention** when they appear.

#### Moderating (hedging) keywords — water it down
Authors also **weaken** claims with qualifying language (**hedging**). A weaker statement is **easier to prove** than a stronger one.

- *Humans are motivated **only** by greed* (extreme) → softened to *in **many** aspects of life, humans are **predominantly** motivated by greed*, or narrowed to *investment bankers are **often** motivated by greed*. Each tweak makes a controversial claim more **plausible**.
- **Possibility** language is the most important kind: *can, could, may, might* — claims about what's **possible** are always weaker than claims about what's **definitely true**.
- **Limits on time/place**: *now, here, at times, in some cases, in this instance*.
- **Constraints on meaning**: *in this sense, according to this interpretation, in a manner of speaking*.

#### Table 3.2 — Common Author keywords
| Positive | Negative | Extreme | Moderating |
|---|---|---|---|
| masterpiece | disaster | must | can / could |
| genius | farce | need / necessary | may / might |
| triumph | limitation | always | possibly |
| excel | miss | every | probably |
| succeed | fail | any | sometimes |
| know | confuse | only | on occasion |
| compelling | problematic | should / ought | often |
| impressive | so-called | indeed | tends to |
| elegant | deceptive | very | here |
| correctly | questionably | especially | now |
| reasonably | merely | obviously | in this case |
| fortunately | purportedly | above all | in some sense |

#### Accounting for opposition
A final wrinkle: **contradiction/opposition** (a special Difference keyword) can make attitudes tricky — especially with **double negatives**. The rule of thumb, shown in the circular rearrangement of the spectrum (Figure 3.2), is that a word of opposition **flips the view ~180°**:

![Figure 3.2 — the attitude spectrum as a circle](${fig(2, 1).src})

- *The opposite of an **extreme** statement is typically a **moderate** statement of the **reverse** charge.*
- *Impossible* → **extremely negative**; *not impossible* → **moderately positive** (i.e., "possible").
- **Exception:** some words keep their strength even with *not*. **must** is extremely **positive** in charge; **must not** is extremely **negative** — it does *not* soften to "moderate."

:::mnemonic
**Charge it like chemistry.** Word valence = ion charge: **+** approval, **–** disapproval, more symbols = stronger. **Extreme = exclamation point (!)** cranks the charge up; **Moderating = "maybe/might"** dials it down. And remember the two zero-net states are *not* the same: **ambivalent = zwitterion** (both ends charged) vs. **impartial = noble gas** (no charge at all).
:::
`
    },

    /* ───────────────────────── 3.4 Logic Keywords ───────────────────────── */
    {
      id: 's4', num: '3.4', title: 'Logic Keywords',
      goals: [
        'Tell evidence from conclusion using the because/therefore substitution test',
        'Recognize that Evidence and Conclusion keywords can signal causation (one-way) rather than logical justification — and check which one applies',
        'Spot Refutation keywords as the countervailing opposite of evidence, even though they are rare'
      ],
      recap: `
- Logic keywords serve **reading for reasoning** and are the **rarest** of the three families — but powerful once recognized.
- An **argument** = a **conclusion** (the claim you're being sold) supported by **evidence** (the reasons given for it). The relationship is **one-way**.
- **Substitution test:** if **because / because of** fits → it's **evidence**; if **therefore** fits → it's a **conclusion**.
- **Evidence keywords**: *because, since, if, why, the reason is, due to, as a result of, after all*. **Conclusion keywords**: *therefore, thus, then, so, consequently, leading to, argue, conclude*.
- Evidence/Conclusion keywords sometimes signal **cause-and-effect** (a one-way *real-world* relationship, not mere correlation) rather than **logical justification** — always check which.
- **Refutation keywords** are the **opposite of evidence** — reasons to *reject* a conclusion (*despite, challenge, object, counter, critique, problem*). Rare, but heavily tested when present.
`,
      detail: `
#### Why Logic keywords are hard (and worth it)
Reading for **reasoning** is perhaps the hardest level, because the **one-way relationship between a conclusion and its evidence** is among the most complex things on Test Day.

- Logic keywords are **relatively rare** — they occur less often than Relation or Author keywords.
- When they appear, they sometimes mark **causal** connections rather than **logical** justifications (a key trap).
- Despite the difficulty, mastering them makes the many CARS **reasoning** questions far less daunting.

#### Evidence and conclusion
A simple working distinction (the full treatment is Ch. 6 of *MCAT CARS Review*):

- A **conclusion** is a **claim** the author (or whoever the author speaks for) is trying to get you to **believe**.
- **Evidence** consists of the **reasons** given for believing it.

Whenever you spot a Logic keyword, also decide **whose** conclusion it is — does the **author endorse** it, or does it represent **another viewpoint**? Check nearby **Author keywords** and other clues.

:::expertise
**The substitution test.** Trouble telling which part of the argument a Logic keyword marks? Swap in a test word:

- If **because / because of** preserves the meaning → what follows is **evidence**.
- If **therefore** preserves the meaning → the following claim is a **conclusion**.
:::

| Role | What it is | Substitution that fits | Typical keywords | Note |
|---|---|---|---|---|
| **Evidence** | Reasons given to believe the conclusion | *because / because of* | because, since, if, why, the reason is, for example, on account of, due to, as a result of, is justified by, after all | More **variety** and more **frequent** than conclusion words |
| **Conclusion** | The claim being argued for | *therefore* | therefore, thus, then, so, consequently, leading to, resulting in, argue, conclude | Fewer words; **rarer** than evidence words |
| **Refutation** | Countervailing reasons to **reject** a conclusion | *(opposite of evidence)* | despite, notwithstanding, challenge, object, counter, critique, conflict, problem | **Rarest**, but highly testable when present |

#### Logic vs. cause-and-effect — the trap
Evidence and Conclusion keywords sometimes signal **causation** instead of logical **justification**. Always clarify *which* you're dealing with:

- **Logical relationship** — between **statements about the world** (one claim *justifies* another).
- **Causal relationship** — between **events in the world**.

How causation differs from its look-alikes:

- **vs. correlation:** correlation = two occurrences merely **accompany** one another; **causation is one-way** — the **cause always precedes the effect**.
- **vs. a sequence:** sequenced events may be **coincidental**, but a cause is **directly responsible** for its effect.

:::keyconcept
The same keyword (e.g., *as a result of*, *leading to*) can express **logical support** *or* a **real-world cause**. Logic links **statements**; causation links **events**. When you hit an Evidence/Conclusion keyword, decide which world you're in before you trust the inference.
:::

#### Refutation — the opposite of evidence
**Refutation keywords** aren't always present, but they're effectively the **opposite of evidence**: **countervailing reasons for rejecting a conclusion**.

- Rarer than other Logic keywords, but they represent **one of the most commonly tested** aspects of logical reasoning.
- Examples: *despite, notwithstanding, challenge, object, counter, critique, conflict, problem* — also *undermined by, doubt, weakness, called into question by*.

#### Table 3.3 — Common Logic keywords
| Evidence | Conclusion | Refutation |
|---|---|---|
| because (of) | therefore | despite |
| since | thus | notwithstanding |
| if | then | challenge |
| for example | so | undermined by |
| why | consequently | object |
| the reason is | leading to | counter(argument) |
| as a result of | resulting in | critique / criticize |
| due to | argue | conflict |
| as evident in | conclude | doubt |
| justified by | imply | problem |
| assuming | infer | weakness |
| after all | suggest | called into question by |

:::mnemonic
**"beCAUSE → evidence, THEREfore → conclusion."** Both test words are built in: *because* = the **cause/reason** (evidence); *therefore* = the **result** (conclusion). For refutation, think **"the prosecution rests, the defense objects"** — Refutation keywords (*object, challenge, counter, problem*) are evidence pointed the **other way**.
:::

:::bridge
Justification, validity, and the anatomy of arguments are developed fully in **Chapter 6 of *MCAT CARS Review*** — this section is the keyword-spotting front end to that deeper logic work.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '3.1 Reading Strategically with Keywords',
        points: [
          'Read every CARS passage on **four levels** — the **modes of reading**: **content** (*what* it says), **organization** (*how* ideas connect), **perspective** (*why* the author writes / how they feel / who else speaks), and **reasoning** (*how* claims are supported or challenged).',
          'For **content**, you need **no outside knowledge** — everything is in the passage; track **buzzwords** (proper nouns, names, dates, new terms, jargon).',
          'The other three modes each have a keyword family: **organization → Relation**, **perspective → Author**, **reasoning → Logic**.',
          'Keywords make you a **critical (active) reader** who anticipates the author — the moments expectations are *frustrated* are prime question material.'
        ]
      },
      {
        section: '3.2 Relation Keywords',
        points: [
          'Two families: **Similarity** (continuation — speed up if understood) and **Difference** (change of direction — slow down; more testable).',
          'Three complex Difference subtypes: **Opposition** (*not, either…or, on the contrary*), **Sequence** (*first…finally; historically vs. now*), **Comparison** (*more/less, best/worst, –er/–est*).',
          'Punctuation (**: ; — ( ) " "**) usually signals **similarity/elaboration**, but an explicit keyword **overrides** it (e.g., *; yet* = difference).',
          'Goal is not memorizing lists but understanding **how** a keyword reshapes the author\'s message in context.'
        ]
      },
      {
        section: '3.3 Author Keywords',
        points: [
          'Authors hide attitude; words carry an **emotional charge** — **Positive** vs. **Negative** — and most prose is **neutral**, so charged words stand out.',
          'Attitude lives on a **spectrum** (– – – to + + +); most CARS authors are **strong but not extreme**; record as **+/–** shorthand when Outlining.',
          '**Extreme keywords** (*always, must, indeed*) strengthen (like **!**); **Moderating/hedging keywords** (*may, might, sometimes*) weaken to make a claim easier to defend.',
          '**Ambivalent** (both charges — zwitterion) ≠ **Impartial** (no charge); **opposition/double negatives** usually flip an extreme into a moderate of the reverse charge (but *must* / *must not* keep their strength).'
        ]
      },
      {
        section: '3.4 Logic Keywords',
        points: [
          'The **rarest** family; an argument = a **conclusion** supported by **evidence** in a **one-way** relationship.',
          '**Substitution test:** *because / because of* → **evidence**; *therefore* → **conclusion**.',
          'Evidence/Conclusion keywords can mark **causation** (one-way real-world link, not correlation) rather than **logical justification** — always check which.',
          '**Refutation keywords** (*despite, challenge, object, counter, problem*) are the opposite of evidence — rare, but heavily tested when present.'
        ]
      }
    ],
    mnemonics: [
      '**Four modes = "COPR" (copper):** **C**ontent · **O**rganization · **P**erspective · **R**easoning. The last three map to keyword families: O→Relation, P→Author, R→Logic; content gets **buzzwords**.',
      '**Similarity = Same → SPEED up; Difference = shift → SLOW down.** Two S-words, opposite reading speeds.',
      '**Difference\'s spicy three = "O-S-C":** **O**pposition · **S**equence · **C**omparison — the subtypes testmakers love.',
      '**Word beats punctuation:** a semicolon says "similar," but *; yet* says "different." The explicit keyword wins.',
      '**Charge it like chemistry:** + = approval, – = disapproval, more symbols = stronger. **Extreme = "!"** (turn up), **Moderating = "maybe"** (turn down).',
      '**Ambivalent = zwitterion** (both ends charged) vs. **Impartial = noble gas** (no charge) — both net-neutral, totally different.',
      '**beCAUSE → evidence, THEREfore → conclusion** — the two substitution-test words name the two roles directly.'
    ],
    keyConcepts: [
      '**Read on four levels, not one.** Most students read only for content; CARS rewards also reading for organization (Relation), perspective (Author), and reasoning (Logic).',
      '**No outside knowledge in CARS.** Unlike the science sections, every fact you need is in the passage — your edge is *strategy*, not recall.',
      '**Anticipate, don\'t just decode.** Keywords let you predict where the author goes; the passage moments that frustrate your expectations are exactly what gets tested.',
      '**Mind the logic-vs-causation trap.** The same Evidence/Conclusion keyword can link statements (justification) or events (cause-and-effect) — verify which before trusting the inference.',
      '**Memorizing lists is necessary but not sufficient.** A keyword\'s real meaning depends on context; understand its *function*, not just its category.'
    ],
    equations: []
  },

  questions: raw.questions
};
