// Behavioral Sciences Chapter 3 — Memory, Cognition, Intelligence & Language.
// Self-contained module (no JSON import): figures and practice questions are not used
// for this subject. Authored to the rich-formatting quality bar.

export default {
  id: 3,
  title: 'Memory, Cognition, Intelligence & Language',
  subtitle: 'Memory systems · encoding & retrieval · forgetting & memory dysfunction · cognitive development & decision-making · intelligence · language',

  blocks: [
    /* ───────────────────────── 3.1 Memory Systems ───────────────────────── */
    {
      id: 's1', num: '3.1', title: 'Memory Systems',
      recap: `
- **Information-processing model**: the brain is like a computer — **input → process → output** — flowing through **sensory → working → long-term** memory.
- **Sensory memory**: brief register of all senses — **iconic** (visual, ~0.5 s) and **echoic** (auditory, ~3–4 s).
- **Working memory** holds the *here-and-now*: **7 ± 2** items (**Miller's magic number**), explaining the **serial-position effect** (primacy + recency).
- Working memory = **central executive** + **phonological loop** (verbal) + **visuospatial sketchpad** (visual/spatial) + **episodic buffer**.
- **Long-term memory** is *unlimited*: **explicit/declarative** (**semantic** facts + **episodic** events) vs. **implicit/non-declarative** (**procedural** skills + **priming**).
`,
      detail: `
#### The information-processing model
The **information-processing model** proposes that the brain works like a computer: it takes **input** from the environment, **processes** it, and produces **output** (decisions/behavior). Information flows through three stores: **sensory memory → working (short-term) memory → long-term memory**.

#### Sensory memory
**Sensory memory** (the *sensory register*) is the brief, high-capacity store of everything the senses take in. It fades almost instantly unless attended to.

| Sensory store | Modality | Approximate duration |
|---|---|---|
| **Iconic memory** | Visual ("what you see") | ~0.5 second |
| **Echoic memory** | Auditory ("what you hear") | ~3–4 seconds |

#### Working (short-term) memory
**Working memory** is what you are consciously thinking about *right now*. Its capacity is famously limited.

- **Miller's "magic number" 7 ± 2** — working memory holds about **5–9 items** at a time (why phone numbers are ~7 digits).
- This limited capacity produces the **serial-position effect**: when recalling a list, we best remember the **first items (primacy effect** → already moved to long-term memory) and the **last items (recency effect** → still in working memory), while the middle is weakest.

**Baddeley's working-memory model** breaks the system into components:

| Component | Job |
|---|---|
| **Central executive** | Supervisory "boss" — directs attention and coordinates the other components |
| **Phonological loop** | Holds and rehearses **verbal/auditory** info (any words + numbers from iconic *and* echoic memory) |
| **Visuospatial sketchpad** | Holds **visual and spatial** information |
| **Episodic buffer** | Integrates visual + verbal info into a single representation and passes it to long-term memory |

When you must combine visual *and* verbal information, the **central executive** coordinates the loop and the sketchpad; the **episodic buffer** binds them into an integrated representation for storage.

:::keyconcept
The **dual-coding hypothesis** says it is easier to remember information stored as *both* a word *and* an image than either alone. This is why the **method of loci** (mentally walking through a familiar place, "leaving" a visual image of each item) is so powerful — it pairs verbal items with vivid spatial images.
:::

#### Long-term memory
**Long-term memory** has (effectively) **unlimited capacity** and duration. It splits into two great branches:

| Branch | Subtype | What it stores | Example |
|---|---|---|---|
| **Explicit (declarative)** — consciously recalled, can be *stated* | **Semantic** | Facts, words, general knowledge | State capitals; vocabulary; "Paris is in France" |
| | **Episodic** | Events tied to time/place ("episodes") | Your last birthday; what you ate this morning |
| **Implicit (non-declarative)** — expressed through *behavior*, hard to articulate | **Procedural** | Skills and habits | Riding a bike; typing; tying shoes |
| | **Priming** | Prior exposure shapes later response | Hearing "apple," then naming an "A" word faster |

:::mnemonic
**Explicit = you can EXPLAIN it** (facts and events you can state). **Implicit = it's IMPLIED by what you do** (skills you just *perform*). Within explicit: **SEMantic = words/meaning** (think *semantics*); **EPIsodic = EPIsodes/events** of your life.
:::

:::realworld
Patient **H.M.**, after surgical removal of his **hippocampi**, could no longer form new **explicit (episodic/semantic)** memories — yet he could still learn new **procedural** skills (like mirror-drawing) without remembering having practiced. This dissociation is the classic proof that explicit and implicit memory rely on different brain systems.
:::
`
    },

    /* ─────────────────────── 3.2 Encoding & Retrieval ────────────────────── */
    {
      id: 's2', num: '3.2', title: 'Encoding & Retrieval',
      recap: `
- **Encoding** = transferring sensory information into memory; the deeper the processing, the better the storage.
- **Encoding strategies** (worst→best): **rote rehearsal → chunking → mnemonics → self-referencing → spacing**.
- **Retrieval cues** boost recall: **priming**, **context** (encoding specificity), and **state-dependent** memory.
- **Retrieval tests** (easiest→hardest *reverse*): **recognition > cued recall > free recall**.
- Memory is **reconstructive**, not a recording — vulnerable to **schemas**, **misinformation**, and **source-monitoring errors**; even vivid **flashbulb memories** are not perfectly accurate.
- Storage is physical: **long-term potentiation (LTP)** strengthens synapses — a form of **synaptic plasticity** = learning.
`,
      detail: `
#### Encoding
**Encoding** is the transfer of sensory information into a storable memory trace. To hold more than ~7 items, you must process the information so it enters long-term memory. Strategies vary widely in effectiveness:

| # | Strategy | What you do | Effectiveness |
|---|---|---|---|
| 1 | **Rote rehearsal** | Repeat the same thing over and over | **Least** effective |
| 2 | **Chunking** | Group incoming info into meaningful units you already know (e.g., 1-800-FLOWERS) | Better |
| 3 | **Mnemonic devices** | Imagery (crazier = better), **pegword** system (rhyming anchors: "1 is a gun"), **method of loci** (tie items to locations), **acronyms** | Better |
| 4 | **Self-referencing** | Relate new info to *yourself*; or learn it as if **preparing to teach** it | Strong |
| 5 | **Spacing** | Spread study across shorter sessions over time (**distributed practice**) | Strong |

:::keyconcept
**Deeper processing → stronger memory.** Mere repetition (rote rehearsal) is shallow; relating material to yourself (**self-reference effect**) or organizing it to teach forces elaborative, meaningful processing that encodes far more durably.
:::

#### Retrieval cues
**Retrieval** is pulling information back out of long-term memory. Cues at retrieval that match those at encoding improve performance:

- **Priming** — prior activation of associated nodes, often without awareness (hear "apple," then name an "A" word more quickly).
- **Context effects (encoding specificity)** — matching the *environment*. Divers who learned and were tested in the **same** setting (both underwater or both on land) recalled more than those who switched. Studying in *varied* places can also help by building **multiple** retrieval cues.
- **State-dependent memory** — matching your internal *state* (mood, intoxication). Information learned in a given state is recalled best in that same state; pairing a product with a mood in advertising exploits this.

#### Retrieval tests: recall vs. recognition
Different tests demand different amounts of cueing:

| Test | What you must do | Difficulty |
|---|---|---|
| **Free recall** | Retrieve with **no cues** (e.g., "list everything you remember") — shows the **serial-position curve** | **Hardest** |
| **Cued recall** | Retrieve given a **partial cue** (e.g., "pl___" for *planet*) | Medium |
| **Recognition** | **Identify** the correct item among options (e.g., multiple choice) | **Easiest** |

#### Memory is reconstructive
The brain does **not** save memories like exact recordings. Every time you retrieve a memory you subtly **rewrite** it according to your current goals, mood, and environment; gaps get filled with something plausible or desirable.

- **Schemas** — mental blueprints of how the world usually works. Retrieval often draws on a schema rather than reality.
- **Misinformation effect** — exposure to misleading information distorts memory. In **Loftus's** classic study, witnesses asked how fast cars were going when they *"smashed"* (vs. *"hit"*) estimated higher speeds and were more likely to falsely recall **broken glass**.
- **Source-monitoring error** — remembering the *information* but forgetting its **source** (e.g., being angry at someone over something that actually happened in a dream, or recognizing a face but not knowing from where).
- **Flashbulb memories** — vivid, emotionally charged "snapshots" of momentous events. They *feel* perfectly accurate but are still subject to reconstruction and error.

:::mnemonic
**Recognition is easiest** because the answer is *right in front of you* — like the difference between an essay (free recall), a fill-in-the-blank (cued recall), and a multiple-choice question (recognition). More cues = easier retrieval.
:::

#### The biology of memory: LTP & synaptic plasticity
The brain does **not** grow new cells to store a memory — instead the **connections between neurons strengthen**.

- Neurons communicate across the **synapse**: a **presynaptic neuron** releases **neurotransmitters** onto a **postsynaptic neuron**, letting **Na⁺** and **Ca²⁺** flow in.
- With **repeated stimulation**, the same presynaptic input produces a **stronger** postsynaptic response. When that strengthening **lasts**, it is **long-term potentiation (LTP)** — a leading neural model of **learning**.
- LTP is one example of **synaptic plasticity**: the synapse's ability to change strength with use.

:::realworld
**"Neurons that fire together, wire together"** (**Hebbian learning**). LTP at hippocampal synapses underlies how repeated study sessions physically lay down a durable memory — the neural correlate of why **spacing** and **active retrieval** work.
:::
`
    },

    /* ──────────────── 3.3 Forgetting & Memory Dysfunction ───────────────── */
    {
      id: 's3', num: '3.3', title: 'Forgetting & Memory Dysfunction',
      recap: `
- **Decay**: unretrieved memories weaken over time. **Ebbinghaus's forgetting curve** — loss is **rapid at first, then levels off**.
- **Relearning saves time** (**savings**): material relearned faster the second time, proving traces aren't fully gone.
- **Interference**: **retroactive** (*new* impairs *old*) vs. **proactive** (*old* impairs *new*).
- **Aging**: stable = implicit memory + recognition; improves = **semantic** + **crystallized IQ**; declines = recall, **episodic** memory, processing speed, **prospective** memory.
- **Alzheimer's**: progressive neuron death + **amyloid plaques** → memory loss; **Korsakoff's**: **thiamine (B1)** deficiency (alcoholism) → severe memory loss + **confabulation**.
- **Retrograde** amnesia = can't recall *old* memories; **anterograde** = can't *form new* ones.
`,
      detail: `
#### Decay and the forgetting curve
**Decay** occurs when a memory is poorly encoded or not retrieved for a while — its neural connections weaken until it can no longer be recalled.

- **Hermann Ebbinghaus** was the first to study decay (using nonsense syllables). His **forgetting curve** shows that the **initial rate of forgetting is very high**, then **levels off**: what survives the first sharp drop tends to persist.

:::keyconcept
Even when a memory seems "gone," it usually isn't *completely* erased. **Relearning** is faster than original learning — Ebbinghaus called the time saved on a second pass **savings**. This works for **procedural** skills too (relearning piano comes back quickly).
:::

#### Interference
Sometimes forgetting is not decay but **interference** — competition between memories:

| Type | Direction | Example |
|---|---|---|
| **Retroactive interference** | **New** learning impairs **old** information | Learning your **new address** makes the old one hard to recall |
| **Proactive interference** | **Old** information impairs **new** learning | An old **password** keeps coming to mind instead of the new one |

:::mnemonic
**Re*tro*active = backward** in time (the *new* reaches **back** to disrupt the *old*). **Pro*active = forward** (the *old* pushes **forward** to disrupt the *new*). Match the prefix to which memory gets hurt: **retro** hurts the **older** one.
:::

#### Aging and cognitive abilities
Aging affects memory selectively — not everything declines:

| Trend | What's affected |
|---|---|
| **Stable** | **Implicit** memory (e.g., riding a bike); **recognition** |
| **Improves** | **Semantic** memory & verbal skills (peak ~age 60); **crystallized intelligence**; **emotional reasoning** |
| **Declines** | **Recall**; **episodic** memory (forming *new* memories — old ones stay stable); **processing speed**; **divided attention**; **prospective memory** (remembering to do future tasks) |

#### Memory dysfunction: dementia, Alzheimer's, Korsakoff's
**Dementia** is forgetting severe enough to interfere with daily life, caused by extensive brain-tissue damage (e.g., from strokes).

| Disorder | Cause | Hallmark features |
|---|---|---|
| **Alzheimer's disease** (most common dementia) | Progressive **neuron death**; buildup of **amyloid plaques** (and neurofibrillary tangles); exact cause unknown | **Early:** memory loss, attention/planning deficits, loss of **semantic** memory, impaired abstract thinking. **Late:** severe language difficulty, profound memory loss, emotional instability, loss of bodily functions |
| **Korsakoff's syndrome** | **Vitamin B1 (thiamine) deficiency** — from malnutrition, eating disorders, and especially **chronic alcoholism** | **Severe memory loss** with **confabulation** (inventing stories to fill memory gaps). Preceded by **Wernicke's encephalopathy** |

**Why thiamine matters:** thiamine helps convert **carbohydrates → glucose**, the fuel neurons depend on. Its deficiency first produces **Wernicke's encephalopathy** — poor balance, abnormal eye movements, confusion, and memory loss. Caught in time, it can be reversed with **thiamine**; untreated, it progresses to the largely **irreversible Korsakoff's syndrome**. Treatment: healthy diet, alcohol abstinence, vitamin supplementation, and relearning.

:::mnemonic
**WKS sequence: "Wernicke comes before Korsakoff."** **W**ernicke's = the acute, **reversible** warning stage (eye movements, ataxia, confusion); **K**orsakoff's = the chronic, **permanent** memory loss with **confabulation**. Think **B1 = the "1st" vitamin** the brain needs for fuel.
:::

#### Amnesias: retrograde vs. anterograde
| Amnesia | Lost ability | Memory of "before" the event | Memory of "after" |
|---|---|---|---|
| **Retrograde amnesia** | Cannot **recall previously encoded** information | **Lost** | Intact |
| **Anterograde amnesia** | Cannot **encode new** memories | Intact | **Cannot form new** memories |

:::mnemonic
**Re*tro* = retro/old** memories are lost (looking *backward*). **Antero = ante/forward** — can't make memories going *forward*. ("Ante" as in *before* the new memory ever forms.)
:::
`
    },

    /* ──────── 3.4 Cognitive Development, Problem Solving & Decision-Making ──────── */
    {
      id: 's4', num: '3.4', title: 'Cognitive Development, Problem Solving & Decision-Making',
      recap: `
- **Piaget**: children actively *construct* understanding through 4 stages — **sensorimotor → preoperational → concrete operational → formal operational**.
- Stage milestones: **object permanence** (sensorimotor), **egocentrism/pretend play** (preoperational), **conservation** (concrete operational), **abstract reasoning** (formal operational).
- **Problem-solving methods**: **trial-and-error**, **algorithms** (guaranteed), **heuristics** (fast shortcuts), **intuition** (error-prone). Watch for **fixation**, **insight**, **incubation**.
- **Decision heuristics**: **availability** (judge by what comes to mind) and **representativeness** (judge by fit to a prototype → **conjunction fallacy**).
- **Biases**: **overconfidence**, **belief perseverance**, **confirmation bias**; **framing effects** change choices by wording.
- **Semantic networks** store concepts as linked nodes; activating one triggers **spreading activation** to related ideas.
`,
      detail: `
#### Piaget's stages of cognitive development
**Jean Piaget** argued children are **not** miniature adults — they **actively construct** their understanding of the world as they mature, building **schemas** and updating them through **assimilation** (fitting new info into existing schemas) and **accommodation** (revising schemas for novel experiences).

| Stage | Age (approx.) | Key achievements & limitations |
|---|---|---|
| **Sensorimotor** | **0–2 yr** | Experiences the world through **senses and motor action**. Develops **object permanence** (objects exist even when unseen — absent early in the stage). |
| **Preoperational** | **2–7 yr** | **Pretend (symbolic) play** emerges. Highly **egocentric** — cannot take another's perspective; lacks **conservation** and empathy. |
| **Concrete operational** | **7–11 yr** | Masters **conservation** (quantity is unchanged by appearance); can reason logically about **concrete** events; begins to grasp **empathy**. |
| **Formal operational** | **12 yr +** | **Abstract** and hypothetical reasoning; can reason about **consequences**; sophisticated **moral reasoning** begins. |

:::keyconcept
**The conservation test (concrete operational):** pour equal water from two identical glasses into a **short-wide** glass and a **tall-thin** glass, then ask which has more. A **preoperational** child says the tall glass (fooled by appearance); a **concrete-operational** child knows the amount is **unchanged**. Passing conservation marks the transition.
:::

:::mnemonic
Piaget order: **"Some People Can Fly"** → **S**ensorimotor · **P**reoperational · **C**oncrete operational · **F**ormal operational. Pair each with its star concept: **S** = object permanence, **P** = egocentrism/pretend, **C** = conservation, **F** = formal/abstract logic.
:::

#### Problem-solving
Problems range from **well-defined** (clear start and goal) to **ill-defined** (ambiguous start/end). Methods:

| Method | Description | Trade-off |
|---|---|---|
| **Trial and error** | Try possibilities until one works | Inefficient |
| **Algorithm** | A logical, step-by-step procedure that **guarantees** a solution | Reliable but can be slow |
| **Heuristic** | A **mental shortcut** ("rule of thumb") that narrows the search (e.g., focus on one category of solutions) | Fast but error-prone |
| **Intuition** | Relying on instinct/gut feeling | High error rate |

Two named heuristics:
- **Means–end analysis** — break the main problem into **subgoals**, reducing the difference between current state and goal step by step.
- **Working backward** — start from the goal and work back to the present (common in **mathematical proofs**).

**Obstacles & breakthroughs:** **fixation** is getting stuck on a wrong approach; **insight** is the sudden "aha!" reorganization; **incubation** is when insight arrives after stepping away from the problem.

:::keyconcept
**Type I vs. Type II error** (decision under uncertainty): a **Type I error** is a **false positive** (concluding an effect exists when it doesn't); a **Type II error** is a **false negative** (missing a real effect). *(Think: "Type I = I see something that isn't there.")*
:::

#### Decision-making: heuristics & biases
We routinely use **heuristics** — quick decision rules — to choose fast. Two are heavily tested:

| Heuristic | How it works | Pitfall |
|---|---|---|
| **Availability heuristic** | Judge likelihood by how **easily examples come to mind** (actual memories) | Memorable/recent events feel more common than they are (e.g., overestimating plane-crash risk) |
| **Representativeness heuristic** | Judge by how well something **matches a prototype/stereotype** (not specific memories) | Ignores base rates → the **conjunction fallacy** |

**Conjunction fallacy** (from representativeness): people judge the **co-occurrence** of two events as *more* likely than one alone. Classic "**Linda the bank teller**": told Linda is outspoken and concerned with justice, people rate *"feminist bank teller"* as more probable than *"bank teller"* — but a conjunction can **never** be more probable than one of its parts.

:::keyconcept
**Availability vs. representativeness:** **availability** draws on **actual memories** that pop into mind; **representativeness** matches a thing to a **prototype** of a category without recalling specific instances.
:::

**Cognitive biases** that derail good decisions:

| Bias | What it is | Example |
|---|---|---|
| **Overconfidence** | Overestimating the accuracy of your knowledge/judgments | Walking into a test sure you know the material because studying *felt* fluent |
| **Belief perseverance** | Clinging to a belief by **ignoring or rationalizing** disconfirming evidence | Dismissing bad facts about a favored candidate |
| **Confirmation bias** | **Seeking out only** evidence that confirms what you already believe | Reading only flattering stories about your candidate |

**Framing effect** — *how* a choice is worded changes the decision even when the outcomes are identical. In the classic **disease problem**, people choose the *sure* option when outcomes are framed as **lives saved** (gains) but the *risky* option when the same outcomes are framed as **deaths** (losses) — revealing **loss aversion**.

:::mnemonic
**ConFIRMation = seek to conFIRM** (only look for supporting facts). **Belief PERSEVERance = PERSEVERE** in the belief (you *do* see the contrary facts but explain them away). Overconfidence is upstream of both.
:::

#### Semantic networks & spreading activation
To solve problems you must access stored knowledge, which is organized in **semantic networks** — concepts as **nodes** linked by associations (shorter links = more closely related). The earliest model was **hierarchical** (Animal → Bird → Ostrich), with general properties stored at high nodes and specific ones at low nodes; the **longer** a link to verify, the **slower** the judgment. Because this failed for some cases (verifying "a pig is an animal" is *slower* than "a pig is a mammal"), a **modified, experience-based network** was proposed: activating one concept automatically activates related ones — **spreading activation** — which also explains **false but related memories**.

:::realworld
**Spreading activation** is why hearing "doctor" speeds recognition of "nurse," and why a list of sleep-related words (bed, rest, tired...) can make people falsely "remember" the word *sleep* that was never shown (the **DRM false-memory paradigm**).
:::
`
    },

    /* ───────────────────────────── 3.5 Intelligence ──────────────────────────── */
    {
      id: 's5', num: '3.5', title: 'Intelligence',
      recap: `
- **Intelligence** = the capacity to **learn from experience, solve problems, and adapt** to new situations; **IQ** quantifies it relative to others.
- **Spearman's g factor**: a single **general intelligence** underlies performance across tasks (people good at one test tend to be good at others).
- **Multiple-intelligence** views: **Sternberg's** triarchic (**analytical / creative / practical**); **Gardner's** ~8 modalities; **emotional intelligence**.
- **Fluid** intelligence (reason quickly/abstractly) **declines** with age; **crystallized** intelligence (accumulated knowledge) **rises or holds**.
- **Nature vs. nurture**: twin studies show **identical-raised-together > identical-apart > fraternal** correlations → both **genes and environment** matter.
- **Fixed vs. growth mindset**: believing intelligence is changeable (**growth**) predicts greater achievement.
`,
      detail: `
#### What is intelligence?
**Intelligence** is a mental quality that lets you **learn from experience, solve problems, and use knowledge to adapt** to new situations. The **intelligence quotient (IQ)** is a numerical score used to measure aptitude on such tasks and **compare** an individual to others.

#### Theories of intelligence
There is long-standing debate over whether intelligence is *one* thing or *many*:

| Theory | Theorist | Core claim |
|---|---|---|
| **General intelligence (g factor)** | **Charles Spearman** | A **single underlying factor (g)** drives performance on *all* cognitive tasks — evidenced by positive correlations across very different tests (verbal, math). |
| **Triarchic theory — 3 intelligences** | **Robert Sternberg** | **Analytical** (academic problem-solving), **creative** (generate novel ideas/adapt), and **practical** (solve **ill-defined**, real-world problems). *IQ tests measure mainly **analytical**.* |
| **Multiple intelligences (~8)** | **Howard Gardner** | Intelligence splits into distinct **modalities** (e.g., linguistic, logical-mathematical, musical, spatial, bodily-kinesthetic, interpersonal, intrapersonal, naturalist). |
| **Emotional intelligence (EI)** | **Salovey & Mayer** (popularized by **Goleman**) | The ability to **perceive, understand, and manage emotions** in oneself and in social interactions. |
| **Hereditary genius** | **Francis Galton** | Human ability is largely **hereditary** (an early, controversial nature view). |
| **Mental age** | **Alfred Binet** | A child's intellectual performance compared with the **average** for that physical age (basis of early IQ testing). |

#### Fluid vs. crystallized intelligence
A widely used two-category split (**Cattell–Horn**):

| Type | Definition | Change with age |
|---|---|---|
| **Fluid intelligence** | Ability to **reason quickly and abstractly**, solve novel problems | **Declines** in older adulthood |
| **Crystallized intelligence** | **Accumulated knowledge**, verbal skills, and experience | **Increases or stays stable** with age |

:::mnemonic
**FLUID flows away** with age (quick, novel reasoning fades); **CRYSTALlized stays solid** (facts and vocabulary crystallize and last). This is why older adults excel at crosswords (crystallized) but younger adults are faster at novel puzzles (fluid).
:::

#### Nature vs. nurture
How much of intelligence is **genetic** vs. **environmental**? **Heritability** is studied with twin designs comparing correlation of IQ scores:

- **Identical twins raised together** → **strongest** correlation.
- **Identical twins raised apart** → high but **lower** → implicates the **environment**.
- **Fraternal twins raised together** → **even lower** → implicates **genes** (they share an environment but only half their genes).

The takeaway: **both genes and environment** contribute. There is **no recipe** to engineer a genius, though we *do* know environments that **impair** intelligence (deprivation, malnutrition, toxins).

:::keyconcept
**Mindset matters.** A **fixed mindset** treats intelligence as biologically set and unchangeable; a **growth mindset** treats it as improvable through effort and learning. Those with a **growth mindset** tend to **accomplish more** — persistence in the face of difficulty.
:::

:::realworld
The **Flynn effect** — the steady rise in average IQ scores across the 20th century — argues strongly for **environmental** influences (nutrition, schooling, test familiarity), since genes cannot change that fast across generations.
:::
`
    },

    /* ─────────────────────────────── 3.6 Language ─────────────────────────────── */
    {
      id: 's6', num: '3.6', title: 'Language & the Brain',
      recap: `
- **Language–thought debate**: **Piaget** (thought → language), **Vygotsky** (independent but converge), **Whorf** (language shapes thought).
- **Linguistic relativity (Sapir–Whorf)**: **weak** = language *influences* thought; **strong** = language *determines* thought.
- **Language-development theories**: **nativist (Chomsky** — **LAD/universal grammar**, **critical period)**, **learning/behaviorist (Skinner** — operant conditioning**)**, **interactionist (Vygotsky** — biology + social**)**.
- **~90%** of people: language is **left-hemisphere**; **Broca's area** = speech *production*, **Wernicke's area** = *comprehension*.
- **Aphasias**: **Broca's** (can't produce), **Wernicke's** (nonsense speech, can't comprehend), **conduction** (damaged **arcuate fasciculus**), **global** (both).
- **Neuroplasticity** lets the brain rewire after damage; severing the **corpus callosum** creates **split-brain** effects.
`,
      detail: `
#### Theories of language & cognition
Three broad camps explain *how* language arises:

- **Behaviorists** (empiricist) — language is **conditioned behavior** learned from the environment.
- **Nativists** (rationalist) — language ability is **innate**.
- **Materialists** — focus on **what happens in the brain** during thinking, speaking, and writing.

How are **language** and **thought** related? Even if some languages have only two color words, do their speakers *think* about color differently? The major positions:

| Position | Theorist | Claim |
|---|---|---|
| **Universalism** | — | **Thought determines language** completely. |
| **Piaget's view** | **Jean Piaget** | Children first **think** in a certain way, *then* develop language to describe those thoughts (**cognition → language**). |
| **Vygotsky's view** | **Lev Vygotsky** | Thought and language start **independent** but **converge** through development until used together. |
| **Linguistic determinism** | **Whorf / Sapir** | **Language shapes thought** (see relativity, below). |

#### Linguistic relativity (the Whorf hypothesis)
The **linguistic relativity hypothesis** (also **Sapir–Whorf**) holds that **language shapes** how we perceive and experience the world. It comes in two strengths:

| Version | Claim | Example |
|---|---|---|
| **Weak** | Language **influences** thought | Reading direction (left→right vs. right→left) influences which way you imagine an action unfolding |
| **Strong (Sapir–Whorfian)** | Language **determines** thought — we understand the world *through* language | The **Hopi**, said to lack grammatical tense, were claimed to conceive of **time** differently |

:::keyconcept
The **strong** form (linguistic *determinism*) says you literally **cannot think** a concept your language can't express; the **weak** form says language merely **biases** or makes some thoughts easier. The strong version is largely rejected today; modest **weak**-version effects are real. *No single position is fully "correct."*
:::

#### Theories of language development
| Theory | Associated figure | Core idea | Key limitation / note |
|---|---|---|---|
| **Nativist (innatist)** | **Noam Chomsky** | Children are **born** to learn language via an innate **language acquisition device (LAD)** / **universal grammar**; all languages share basics (nouns, verbs...). Supported by a **critical period** (~birth to age 9). | Explains rapid, rule-governed acquisition |
| **Learning / behaviorist** | **B. F. Skinner** | Language is acquired through **operant conditioning** — children are **reinforced** for correct utterances (say "mama" → mom responds). | Can't explain producing **novel** sentences never heard before |
| **Interactionist** | **Lev Vygotsky** | **Biological *and* social** factors must **interact**; a child's drive to **communicate** with caregivers powers language learning. | Bridges nature and nurture |

:::mnemonic
**Nativist = Native/born with it (Chomsky's LAD).** **Behaviorist = Behavior shaped by reward (Skinner).** **Interactionist = Interaction with people (Vygotsky).** Match the *-ist* to its mechanism: born → reinforced → social.
:::

#### Language and the brain
In about **90%** of people, language is lateralized to the **left hemisphere**. Two key regions and the tract connecting them:

| Region / structure | Role | Effect of damage |
|---|---|---|
| **Broca's area** | **Production** of speech | **Broca's aphasia** — halting, effortful, **non-fluent** speech (comprehension relatively intact) |
| **Wernicke's area** | **Comprehension** of language | **Wernicke's aphasia** — **fluent but nonsensical** speech; cannot understand others |
| **Arcuate fasciculus** | Nerve bundle **connecting** Broca's and Wernicke's (also present in deaf signers) | **Conduction aphasia** — disrupted connection between **listening and speaking** (poor repetition) |
| **Both areas** | — | **Global aphasia** — severe loss of production *and* comprehension |

Other deficits: **agraphia** (inability to **write**) and **anomia** (inability to **name** things).

:::mnemonic
**"Broca's = Broken speech"** (production is broken, but they understand). **"Wernicke's = Wordy nonsense"** (fluent but meaningless, and they can't comprehend). The **arcuate fasciculus** "arcs" between the two — damage = **conduction** aphasia.
:::

#### Neuroplasticity & split-brain patients
Language is a big task **broken into smaller subtasks spread across brain regions** — an advantage, because localized damage won't wipe out everything. After a left-hemisphere **stroke**, therapy can recruit other speech-related areas to form **new connections** (**neuroplasticity**), restoring some fluency.

Severing the **corpus callosum** (the band of fibers linking the hemispheres) creates a **split-brain patient**:
- The **left** hemisphere handles **language**; the **right** handles **action, perception, and attention**.
- An object shown only in the **left visual field** goes to the **right** hemisphere — the patient **can't name it**, though they can pick it up with the **left hand**. It must reach the **right visual field (→ left hemisphere)** to be named.

:::realworld
Split-brain research (**Roger Sperry**, Nobel Prize) revealed hemispheric specialization: present a word to the right hemisphere and the patient denies seeing it yet can **draw** or **point** to the object — the two hemispheres can "know" different things at once.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Memory Systems',
        points: [
          '**Information-processing model**: input → process → output through **sensory → working → long-term** memory.',
          '**Sensory memory**: **iconic** (visual, ~0.5 s) and **echoic** (auditory, ~3–4 s).',
          '**Working memory** holds **7 ± 2** items (**Miller**) → **serial-position effect** (primacy + recency); components = **central executive**, **phonological loop**, **visuospatial sketchpad**, **episodic buffer**.',
          '**Long-term memory**: **explicit/declarative** (**semantic** + **episodic**) vs. **implicit/non-declarative** (**procedural** + **priming**).'
        ]
      },
      {
        section: 'Encoding & Retrieval',
        points: [
          'Encoding strategies, worst→best: **rote rehearsal → chunking → mnemonics → self-referencing → spacing**.',
          'Retrieval cues: **priming**, **context (encoding specificity)**, **state-dependent** memory.',
          'Retrieval tests, easiest→hardest: **recognition > cued recall > free recall**.',
          'Memory is **reconstructive** — distorted by **schemas**, the **misinformation effect**, and **source-monitoring errors**; **flashbulb** memories feel vivid but err.',
          '**Long-term potentiation (LTP)** strengthens synapses — a form of **synaptic plasticity** = the biology of learning.'
        ]
      },
      {
        section: 'Forgetting & Memory Dysfunction',
        points: [
          '**Ebbinghaus forgetting curve**: rapid loss, then plateau; **relearning** shows **savings**.',
          'Interference: **retroactive** (new impairs old) vs. **proactive** (old impairs new).',
          'Aging: **implicit/recognition** stable; **semantic/crystallized** improve; **recall/episodic/processing speed/prospective** decline.',
          '**Alzheimer\'s** = neuron death + **amyloid plaques**; **Korsakoff\'s** = **thiamine (B1)** deficiency → memory loss + **confabulation** (preceded by **Wernicke\'s encephalopathy**).',
          '**Retrograde** = lose old memories; **anterograde** = can\'t form new ones.'
        ]
      },
      {
        section: 'Cognitive Development, Problem Solving & Decision-Making',
        points: [
          '**Piaget**: **sensorimotor** (object permanence) → **preoperational** (egocentrism, pretend play) → **concrete operational** (conservation) → **formal operational** (abstract reasoning).',
          'Problem-solving: **algorithm** (guaranteed) vs. **heuristic** (fast shortcut); watch **fixation**, **insight**, **incubation**.',
          'Decision heuristics: **availability** (ease of recall) and **representativeness** (prototype fit → **conjunction fallacy**).',
          'Biases: **overconfidence**, **belief perseverance**, **confirmation bias**; **framing effects** alter choices by wording.',
          '**Semantic networks**: concepts as linked nodes; **spreading activation** primes related ideas and explains false memories.'
        ]
      },
      {
        section: 'Intelligence',
        points: [
          '**Spearman**: a single **g factor** underlies all cognitive performance.',
          'Multiple-intelligence views: **Sternberg** (analytical/creative/practical), **Gardner** (~8), **emotional intelligence**.',
          '**Fluid** intelligence **declines** with age; **crystallized** **rises/holds**.',
          'Twin studies: identical-together > identical-apart > fraternal → **both genes and environment** matter.',
          '**Growth mindset** (intelligence is changeable) predicts greater achievement than a **fixed mindset**.'
        ]
      },
      {
        section: 'Language & the Brain',
        points: [
          'Language–thought: **Piaget** (thought→language), **Vygotsky** (converge), **Whorf** (language shapes thought).',
          '**Sapir–Whorf / linguistic relativity**: **weak** (influences) vs. **strong** (determines) thought.',
          'Development theories: **nativist (Chomsky — LAD/universal grammar, critical period)**, **behaviorist (Skinner — operant conditioning)**, **interactionist (Vygotsky)**.',
          '**Broca\'s** = production (non-fluent aphasia); **Wernicke\'s** = comprehension (fluent nonsense); **arcuate fasciculus** damage = **conduction aphasia**; both = **global aphasia**.',
          '**Neuroplasticity** enables post-stroke recovery; cutting the **corpus callosum** → **split-brain** effects.'
        ]
      }
    ],
    mnemonics: [
      '**Explicit = you can EXPLAIN it** (facts/events); **Implicit = IMPLIED by behavior** (skills). **SEMantic = meaning/words**; **EPIsodic = EPIsodes/events**.',
      '**Recognition > cued recall > free recall** in ease: like **multiple choice > fill-in-the-blank > essay** — more cues, easier retrieval.',
      '**Retroactive = backward** (new disrupts old); **Proactive = forward** (old disrupts new). Retro hurts the older memory.',
      '**Wernicke before Korsakoff:** **W**ernicke\'s = acute, reversible (eye movements, ataxia); **K**orsakoff\'s = chronic memory loss + **confabulation**. **B1 = the "1st" brain-fuel vitamin.**',
      '**Retrograde = retro/old** memories lost; **Anterograde = ante/forward** — can\'t form new ones.',
      'Piaget: **"Some People Can Fly"** → **S**ensorimotor (object permanence) · **P**reoperational (egocentrism) · **C**oncrete operational (conservation) · **F**ormal operational (abstract).',
      '**ConFIRMation bias = seek to conFIRM**; **belief PERSEVERance = PERSEVERE** despite contrary facts you do see.',
      '**FLUID flows away** with age; **CRYSTALlized stays solid** (facts/vocabulary last).',
      'Language development: **Native**ist = born with it (**Chomsky**) · **Behavior**ist = reinforced (**Skinner**) · **Interaction**ist = social (**Vygotsky**).',
      '**Broca\'s = Broken speech** (can\'t produce, can understand); **Wernicke\'s = Wordy nonsense** (fluent but meaningless, can\'t understand).'
    ],
    keyConcepts: [
      '**Memory is reconstructive, not a recording:** every retrieval rewrites the trace, leaving it open to schemas, the misinformation effect, and source-monitoring errors — even vivid flashbulb memories.',
      '**Explicit vs. implicit memory are separable systems:** hippocampal damage (e.g., patient H.M.) blocks new explicit memories while sparing procedural learning.',
      '**Heuristics trade accuracy for speed:** availability (ease of recall) and representativeness (prototype fit) are usually useful but produce predictable errors like the conjunction fallacy.',
      '**Intelligence is both general and multiple:** Spearman\'s g captures shared variance, while Sternberg, Gardner, and EI emphasize distinct abilities; fluid declines and crystallized persists with age.',
      '**Nature and nurture both shape intelligence:** twin correlations and the Flynn effect show genes set a range and environment moves you within it — with mindset influencing achievement.',
      '**Language is left-lateralized and modular:** Broca\'s (production) and Wernicke\'s (comprehension) dissociate, and neuroplasticity lets the brain rewire around localized damage.'
    ],
    equations: []
  },

  questions: []
};
