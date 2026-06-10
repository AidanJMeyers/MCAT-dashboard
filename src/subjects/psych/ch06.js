// Behavioral Sciences Chapter 6 — Social Psychology.
// Authored to the rich-formatting quality bar from condensed outline notes (scratch_psych/ch06.md).
// Self-contained module: no figures, no practice questions, no JSON import.

export default {
  id: 6,
  title: 'Social Psychology',
  subtitle: 'Learning · conformity & obedience · group behavior · attribution & cognitive bias · prejudice, stereotypes & discrimination · attraction & social behavior',

  blocks: [
    /* ─────────────────────────── 6.1 Learning ─────────────────────────── */
    {
      id: 's1', num: '6.1', title: 'Learning',
      recap: `
- **Nonassociative learning** = response to one repeated stimulus: **habituation** (tune out) vs. **sensitization** (heighten); **dishabituation** restores the response when a new stimulus appears.
- **Classical conditioning (Pavlov):** a **neutral stimulus** paired with an **UCS** becomes a **CS** that elicits a **CR**. *No new behavior* — an existing reflex is re-triggered.
- **Operant conditioning (Skinner):** behavior is shaped by **consequences**. **Reinforcement increases** behavior; **punishment decreases** it. Positive = add, negative = remove.
- **Reinforcement schedules:** **variable-ratio** is most resistant to extinction (slot machines); **partial** beats **continuous** for durability.
- **Observational learning (Bandura):** we learn by **watching models** (Bobo doll); **mirror neurons** and **vicarious reinforcement** are the substrate.
`,
      detail: `
#### Associative vs. nonassociative learning
**Learning** is a relatively permanent change in behavior from experience. Two broad families:

| Family | Definition | Examples |
|---|---|---|
| **Nonassociative** | Repeated exposure to **one** stimulus changes the response | **Habituation**, **dishabituation**, **sensitization** |
| **Associative** | One event becomes **linked** to another | **Classical** & **operant** conditioning |

- **Habituation** — repeated exposure makes you **tune out** a stimulus (you stop noticing a ticking clock).
- **Dishabituation** — a previously habituated stimulus is **removed/changed**, restoring responsiveness.
- **Sensitization** — repeated exposure **increases** responsiveness (jumpier after a scare). The opposite of habituation.

#### Classical conditioning — Pavlov
**Classical conditioning** pairs a **neutral stimulus** with a stimulus that already produces a reflex, until the neutral stimulus produces the response on its own. Crucially, **no new behavior is created** — an *innate, involuntary reflex* is simply triggered by a new cue (contrast with operant conditioning).

| Term | Definition | Pavlov's dogs |
|---|---|---|
| **Unconditioned stimulus (UCS)** | Innately triggers a response — *unlearned* | **Food** |
| **Unconditioned response (UCR)** | The innate, automatic response | **Salivation** to food |
| **Neutral stimulus (NS)** | Produces no relevant response on its own | **Bell** (before training) |
| **Conditioned stimulus (CS)** | Former NS that now triggers the response after pairing | **Bell** (after training) |
| **Conditioned response (CR)** | Learned response to the CS | **Salivation** to the bell |

:::mnemonic
**Unconditioned = Unlearned** (innate); **Conditioned = learned**. Conditioning works only when the NS is presented **shortly before** the UCS — the NS must *predict* the UCS. Backward pairing (UCS first) barely conditions at all.
:::

##### Acquisition phenomena
- **Acquisition** — the NS becomes a CS as pairings accumulate.
- **Extinction** — the CS is repeatedly presented **without** the UCS → the CR fades.
- **Spontaneous recovery** — after extinction, the CR briefly **reappears** when the CS shows up later (weaker, infrequent).
- **Generalization** — stimuli **similar** to the CS also elicit the CR (the more similar, the stronger). Lets us respond appropriately to novel-but-similar cues.
- **Discrimination** — learning to respond to the CS but **not** to similar stimuli (the opposite of generalization).

:::realworld
A guinea pig that gets excited at the refrigerator door (CS) learned that the sound predicts a carrot (UCS). It also gets excited at the *desk* drawer (**generalization**) but ignores the dresser (**discrimination**). Stop bringing carrots and the excitement fades (**extinction**).
:::

#### Operant conditioning — Skinner
**Operant conditioning** (**B.F. Skinner**) focuses on the relationship between **voluntary behavior and its consequences**, and how consequences change the *likelihood* of that behavior recurring. Unlike classical conditioning, it **does change behavior**.

**Two consequences:**
- **Reinforcement** → *increases* a behavior.
- **Punishment** → *decreases* a behavior.

**Two valences** (positive = *add* a stimulus; negative = *remove* a stimulus):

| | **Positive (add)** | **Negative (remove)** |
|---|---|---|
| **Reinforcement** *(increase behavior)* | **Positive reinforcement** — add a pleasant stimulus. *Gift card for safe driving.* | **Negative reinforcement** — remove an aversive stimulus. *Seatbelt buzzer stops when you buckle up.* |
| **Punishment** *(decrease behavior)* | **Positive punishment** — add an aversive stimulus. *Speeding ticket.* | **Negative punishment** — remove a pleasant stimulus. *License revoked.* |

:::keyconcept
The trap is **negative reinforcement vs. punishment**. *Negative reinforcement still increases behavior* (you buckle up *more* to stop the buzzer). "Negative" never means "punishment" — it means **something is taken away**. Positive/negative = add/remove; reinforce/punish = up/down.
:::

##### Reinforcer types and behavior modification
- **Primary reinforcer** — innately satisfying (food, water, sex).
- **Secondary (conditioned) reinforcer** — a once-neutral stimulus that gained value (money).
- **Token economy** — systematic reinforcement using **tokens** exchangeable for other reinforcers (used in classrooms, psychiatric wards).
- **Shaping** — reinforcing **successive approximations** of a target behavior. To learn a headstand: reward downward dog → forearms down → legs up. Each step is reinforced until the next is reached.

#### Schedules of reinforcement
Most real behavior runs on **partial (intermittent) reinforcement** — reinforced only *some* of the time — which is **far more resistant to extinction** than **continuous** reinforcement.

| Schedule | Rule | Example | Response pattern |
|---|---|---|---|
| **Fixed-ratio (FR)** | Reinforce after a **set number** of responses | Bonus every **5 cars** sold | High, steady; brief post-reward pause |
| **Variable-ratio (VR)** | Reinforce after an **average number** of responses | **Slot machine** | **Highest, steadiest rate; most resistant to extinction** |
| **Fixed-interval (FI)** | Reinforce first response after a **set time** | **Paycheck every 2 weeks** | Slow after reward, speeds up near the deadline |
| **Variable-interval (VI)** | Reinforce first response after an **average time** | Random pop quizzes / checking for texts | Slow, steady |

:::mnemonic
**Ratio = number; Interval = time. Variable = unpredictable → fast & extinction-proof.** Gamblers chase the **variable-ratio** slot machine because the *next* pull might pay out. Crude version: **"V**ariable keeps you **V**igilant."
:::

#### Observational (social) learning — Bandura
**Observational learning** is acquiring behavior by **watching others (models)** — no direct reinforcement of the learner is required.

- **Albert Bandura's Bobo doll experiment:** children who watched an adult beat an inflatable doll later imitated that aggression — they learned simply by **watching**.
- **Vicarious reinforcement/punishment** — we adjust behavior based on the **consequences a model** receives.
- **Mirror neurons** — fire both when we *perform* an action and when we *observe* another perform it; a proposed neural basis for imitation and empathy.
- **Latent learning** — learning that occurs but is **not expressed** until there's a reason (reinforcement) to use it.
- **Insight learning** — sudden solving of a problem using past knowledge (the **"aha" moment**).

#### Innate vs. learned behavior

| Innate (instinctive) | | Learned |
|---|---|---|
| **Reflex** — automatic (blink) | | **Habituation** |
| **Taxis** — directed movement toward/away from a stimulus (moth to light) | | **Classical conditioning** |
| **Kinesis** — *undirected*, random movement | | **Operant conditioning** |
| **Fixed action pattern** — innate sequence (mating dance) | | **Insight / latent learning** |
`
    },

    /* ─────────────────── 6.2 Conformity & Obedience ──────────────────── */
    {
      id: 's2', num: '6.2', title: 'Conformity, Obedience & the Classic Experiments',
      recap: `
- **Conformity** = matching your behavior to **group norms**; **obedience** = following the orders of an **authority**.
- **Two motives to conform:** **informational** (group probably knows better) and **normative** (avoid rejection, gain approval).
- **Three depths:** **compliance** (for reward/punishment, shallowest) < **identification** (to be like an admired person) < **internalization** (genuine adoption of the belief, deepest).
- **Asch line study:** ~75% conformed to an obviously wrong unanimous majority at least once → **normative** influence.
- **Milgram shock study:** ~65% delivered the maximum 450 V under authority → power of **obedience**; **Zimbardo's prison study** showed roles can corrupt ordinary people.
`,
      detail: `
#### Conformity vs. obedience
People act differently in groups than alone. Two related forces:

- **Conformity** — adjusting your **behavior or thinking** to match a **group**'s norms ("peer pressure"). Powerful even when the norm is clearly wrong.
- **Obedience** — changing behavior in response to a direct order from an **authority figure**.

Both are usually *adaptive* (we obey traffic lights, accept that cereal is a breakfast food) but each has a **dark side** (peer pressure, the Holocaust). **Anomie** is the breakdown of social bonds between an individual and the community.

#### Why we conform — two influences

| Influence | Why you conform | Public or private? |
|---|---|---|
| **Informational social influence** | You think the group **knows something you don't** → you genuinely change your belief | Often a **private** (real) change |
| **Normative social influence** | You want to **gain approval / avoid rejection** | Often **public only** — outward change, private disagreement |

#### Three depths of conformity

| Type | Driver | Durability |
|---|---|---|
| **Compliance** | Do it for a **reward** or to avoid **punishment**; no real buy-in | **Shallowest** — vanishes when consequences are removed (paying taxes) |
| **Identification** | Act/dress like an **admired** person or group | Lasts as long as you respect that model |
| **Internalization** | The belief becomes **part of your own values** | **Deepest, strongest** — persists independently |

:::mnemonic
**Compliance → Identification → Internalization = shallow → deep.** Compliance is **C**oerced (rewards/punishments), Identification is about an **I**dol, Internalization is **I**ntegrated into who you are.
:::

#### Asch conformity (line) studies
**Solomon Asch** (a **Gestalt** psychologist, influenced by the Holocaust) ran the most famous conformity experiment.

- Participants judged which of 3 comparison lines matched a target line — an **obvious** perceptual task.
- All but one "participant" were **confederates** (actors). On critical trials they unanimously gave the *wrong* answer.
- Result: **~75% conformed at least once**; **~37%** of all critical responses went along with the wrong majority.
- There was **no reward** for accuracy — only **perceived** social pressure → classic **normative social influence** (some genuinely doubted their own perception → informational).

**Why people resisted:** high confidence, or sticking to their answer despite low confidence.

**Criticisms:** unrepresentative sample (all male undergrads), **demand characteristics** (participants guessing the experimenter's intent), low **ecological validity** (lab lines ≠ real-world pressure), participant suspicion.

#### Milgram obedience studies
**Stanley Milgram** (1961, motivated by the **Holocaust** / **Eichmann trial** — "I was just following orders") tested how far ordinary Americans would obey authority that conflicted with their morals.

- Deception: advertised as a study of **memory/learning**. The participant ("teacher") delivered escalating **shocks** (15 V → 450 V) to a "learner" (a confederate) for wrong answers. **No real shocks** were given.
- As shocks rose, the learner cried out, complained of a **heart condition**, demanded to stop, then went silent.
- The experimenter used scripted prods: *"The experiment requires that you continue… you have no other choice."*
- Result: **~65% delivered the maximum 450 V**, trembling and protesting but obeying. With the heart-condition complaint it dropped only slightly (~63%). Replicated across eras and locations.

**Lessons / cautions the study teaches us:**
- **Just-world phenomenon** — believing good things happen to good people (and vice versa). Participants disparaged the victim ("he shouldn't have answered wrong").
- **Diffusion of responsibility** — comforted when the experimenter said he'd take full responsibility.
- **Self-serving bias** caution — we assume *we* could never do this; most of us would.
- **Fundamental attribution error** caution — we attribute others' atrocities to their *character*, ours to *circumstance*.

#### Zimbardo's Stanford Prison Experiment (1971)
**Philip Zimbardo** randomly assigned 18 normal male students to be **guards** or **prisoners** to study how **roles/situations** drive behavior. *No deception* — everyone knew it was an experiment.

- Prisoners were "arrested," stripped of identity (numbers, not names — **deindividuation**); guards got batons and mirrored sunglasses, told to create fear but not physical harm.
- Within days guards became abusive and prisoners broke down; the study was **stopped after 6 days** (planned for 2 weeks) when Christina Maslach objected.
- **Concepts illustrated:** situational vs. dispositional attribution, **deindividuation**, **cognitive dissonance** (guards justified cruelty by blaming prisoners), **internalization** of roles.
- **Major flaws:** Zimbardo played warden (lost objectivity), poor operational definitions/controls, small sample, **demand characteristics**, and **selection bias** (who volunteers for "prison"?).

| Study | Investigator | Tests | Headline finding |
|---|---|---|---|
| **Line study** | **Asch** | **Conformity** to a group | ~75% conformed to a wrong unanimous majority ≥ once |
| **Shock study** | **Milgram** | **Obedience** to authority | ~65% delivered the maximum 450 V |
| **Prison study** | **Zimbardo** | Power of **roles/situation** | Ordinary students became abusive guards in days |

#### Factors that change conformity and obedience

| ↑ **Conformity** when… | ↑ **Obedience** when… |
|---|---|
| Group size is **~3–5** | Authority has **legitimacy** (lab coat, institution) |
| Group is **unanimous** (one dissenter sharply reduces it) | Authority is **physically close** |
| Group has high **status** | Victim is **distant / depersonalized** |
| High **group cohesion** | There are **role models for obedience** (none for defiance) |
| Behavior is **observed** / public | — |
| **Insecurity**, no prior public commitment | — |

:::keyconcept
**Unanimity is fragile.** A *single* non-conforming ally collapses conformity dramatically — people fear standing alone, not disagreeing per se. Likewise, one role model for **defiance** sharply reduces obedience. Collectivist cultures and low socioeconomic status correlate with higher conformity.
:::
`
    },

    /* ─────────────── 6.3 Group Behavior & Social Influence ─────────────── */
    {
      id: 's3', num: '6.3', title: 'Group Behavior & Social Influence',
      recap: `
- **Groupthink** = desire for **harmony** overrides realistic appraisal → bad decisions in **cohesive, insulated** groups with a strong leader.
- **Group polarization** = group discussion **amplifies** the members' average initial leaning toward a more extreme position.
- **Bystander effect** = the more witnesses present, the **less likely** any one helps — via **diffusion of responsibility**.
- **Social facilitation** = others' presence boosts **easy/well-learned** tasks but **hurts hard/novel** ones (it amplifies the **dominant response**).
- **Social loafing** = people exert **less effort** in a group when individual contributions aren't evaluated; **deindividuation** = loss of self/restraint in a crowd.
`,
      detail: `
#### Group decision making
- **Group polarization** — discussion **strengthens** the group's pre-existing average opinion, pushing it to a **more extreme** position. Driven because not all views carry equal weight and arguments favor the popular side (confirmation bias).
- **Groupthink** — maintaining **harmony and unanimity** becomes more important than realistically analyzing the problem. Occurs in **highly cohesive, insulated** groups with a **respected leader**, where members **suppress** dissent in the name of unity. (Classic real-world examples: the Bay of Pigs, *Challenger* launch.)

:::keyconcept
**Polarization ≠ groupthink.** **Polarization** is about the *direction/extremity* of the final opinion (more extreme than individuals started). **Groupthink** is a *flawed process* (suppressed dissent, illusion of unanimity) that produces poor decisions.
:::

#### The bystander effect
Despite saying they'd help, people in a **group** are **less** likely to assist someone in distress.

- **Diffusion of responsibility** — with others present, each person feels **less personal responsibility** ("someone else will do it"). The effect **grows with group size**; in a small group you're more likely to act.
- Popularized by the **Kitty Genovese** case (reported many witnesses, no intervention) — though the original account was later shown to be exaggerated.

#### Deindividuation
**Deindividuation** is the loss of **self-awareness and individual restraint** in a group, where the crowd **conceals identity** → lowered inhibition and guilt → behavior one would never do alone (riots, Black Friday stampedes, anonymous internet behavior).

#### Social facilitation vs. social loafing

| | **Social facilitation** | **Social loafing** |
|---|---|---|
| Core idea | Mere **presence of others** changes performance | People exert **less effort** in a group |
| Mechanism | Presence ↑ **arousal** → amplifies the **dominant response** | Effort drops when **individual output isn't evaluated** |
| Effect on **easy/well-learned** tasks | **Improves** performance | (n/a) |
| Effect on **hard/novel** tasks | **Hurts** performance | Reduced productivity overall |
| How to reduce | — | Make the task **engaging/important** or **individually graded** |

:::mnemonic
**Facilitation amplifies the *dominant response*.** If you're **good** at it, an audience makes you **better**; if you **stink**, an audience makes you **worse**. (A pool shark sinks more shots when watched; a novice misses more.)
:::

#### Agents of socialization (brief)
**Socialization** is the lifelong process of learning to interact with others. Key **agents**: **family** (values, social class shapes how kids treat authority), **school** (the "**hidden curriculum**" — obeying authority, attentiveness), **peers** (tastes, behavior), and **mass media** (reinforces stereotypes).
`
    },

    /* ─────────────── 6.4 Attribution & Cognitive Bias ─────────────── */
    {
      id: 's4', num: '6.4', title: 'Attribution Theory & Cognitive Biases',
      recap: `
- **Attribution theory** explains behavior via **internal/dispositional** (about the person) vs. **external/situational** (about the environment) causes.
- **Kelley's covariation model** uses **consistency** (over time), **distinctiveness** (across situations), and **consensus** (across people) to decide internal vs. external.
- **Fundamental attribution error (FAE):** for *others* we over-weight **disposition** and under-weight situation (stronger in **individualistic** cultures).
- **Actor–observer bias:** we blame *our own* behavior on the **situation** but *others'* on their **character**.
- **Self-serving bias:** credit **success** to ourselves (internal), blame **failure** on the situation (external) — protects self-esteem.
`,
      detail: `
#### Attribution theory
**Attribution theory** describes how we explain others' behavior by assigning causes:

- **Internal (dispositional)** attribution — caused by the **person** (their personality, ability, effort).
- **External (situational)** attribution — caused by the **environment/circumstance**.

A neutral judge weighs both; in practice we systematically skew.

#### Kelley's covariation model
We use three kinds of information to decide between internal and external causes:

| Cue | Question | Example | Implication |
|---|---|---|---|
| **Consistency** (time) | Does the person do this **every time**? | A friend cancels **every** plan | **High consistency → internal** |
| **Distinctiveness** (situation) | Is the behavior **unusual for this situation**? | A nice friend explodes only at **one** pizza place | **High distinctiveness → external** |
| **Consensus** (people) | Do **most people** act this way here? | Everyone is late to the same meeting | **High consensus → external** |

#### The major attribution biases

| Bias | What it is | Direction |
|---|---|---|
| **Fundamental attribution error (FAE)** | Over-attribute **others'** behavior to **disposition**; underweight situation | About **others**; internal |
| **Actor–observer bias** | Attribute **our own** behavior to the **situation**, others' to **disposition** | Self = external; others = internal |
| **Self-serving bias** | Credit our **successes** to ourselves; blame **failures** on circumstances | Protects **self-esteem** |
| **Optimism bias** | "Bad things happen to others, not me" | About the self |
| **Just-world hypothesis** | People **get what they deserve**; over-weights internal causes | Blames victims |

:::keyconcept
**FAE vs. self-serving bias** is a favorite MCAT distinction. **FAE** is about explaining **other people** (their disposition). **Self-serving bias** is about explaining **yourself** (success = me, failure = circumstance). **Actor–observer bias** is the broader pattern that contains both.
:::

##### Culture matters
The **FAE is stronger in individualistic** (Western — North America, Europe) cultures and weaker in **collectivist** (Eastern — Asia, Africa) cultures, which favor situational explanations. **Self-serving bias** is likewise more common in individualistic cultures.

#### Social perception biases

| Bias | Definition |
|---|---|
| **Primacy bias** | **First impressions** dominate — they're durable and we filter later info to confirm them |
| **Recency bias** | **Most recent** behavior is over-weighted |
| **Halo effect** | Assuming someone with one good trait (e.g., **attractiveness**) is good across the board |
| **Reverse halo (horn) effect** | One bad trait → assume they're bad at everything |
| **Just-world hypothesis** | "You got what you deserved" — a cosmic-justice belief that rationalizes fortune/misfortune |

:::realworld
The **physical-attractiveness stereotype** is the halo effect in action: we rate attractive people as more competent, sociable, and trustworthy with **no evidence**. The just-world hypothesis is the flip side — it lets us blame people in poverty for being poor, and is a route to **victim-blaming**.
:::
`
    },

    /* ───────── 6.5 Prejudice, Stereotypes & Discrimination ───────── */
    {
      id: 's5', num: '6.5', title: 'Prejudice, Stereotypes, Discrimination & Ethnocentrism',
      recap: `
- The **ABCs** of an attitude: **A**ffective (feelings) = **prejudice**, **B**ehavioral (actions) = **discrimination**, **C**ognitive (beliefs) = **stereotype**.
- **Stereotype** = over-generalized belief about a group; fast but **inaccurate**. **Prejudice** = a (usually negative) **attitude**; **discrimination** = unequal **action**.
- **Stereotype threat** = fear of confirming a negative stereotype **lowers performance**; a **self-fulfilling prophecy** makes the stereotype come true.
- **Ethnocentrism** = judging others by **your own culture** as superior; **cultural relativism** = judging a culture **on its own terms**.
- **In-group favoritism** + **out-group derogation** drive prejudice; sources include the **authoritarian personality** and the **frustration–aggression** (scapegoat) mechanism.
`,
      detail: `
#### Three components of an attitude → three faces of bias
Every attitude has **affective, behavioral, and cognitive** components, which map cleanly onto the three concepts:

| Component | Concept | Definition | Example |
|---|---|---|---|
| **Cognitive** (belief) | **Stereotype** | Over-generalized belief about a group | "City dwellers are rude" |
| **Affective** (feeling) | **Prejudice** | A (usually negative) **attitude/prejudgment** of a group, not based on facts | "I don't like them" |
| **Behavioral** (action) | **Discrimination** | Differential **treatment / harmful action** against a group | "I avoid them" / won't hire them |

:::mnemonic
**Attitudes are as easy as ABC: Affect → behavior → cognition.** Map them: **Stereotype** = thought (Cognition), **Prejudice** = feeling (Affect), **Discrimination** = action (Behavior).
:::

#### Stereotypes, threat, and self-fulfilling prophecies
- **Stereotyping** — attributing a trait to an entire group (race, gender, religion, etc.). **Disadvantage:** inaccurate. **Advantage:** rapidly processes large amounts of social data.
- **Stereotype threat** — the **self-fulfilling fear** of being judged by a negative stereotype itself **lowers performance** on the relevant task. (Telling "blue" students they're bad at a task makes them score worse.)
- **Self-fulfilling prophecy** — a stereotype produces behavior that **confirms** the original stereotype, feeding back in a loop: *cognition (stereotype) → affect (prejudice) → behavior (discrimination) → confirmation.*

#### Sources of prejudice

| Source | Mechanism |
|---|---|
| **Authoritarian personality** | Rigid, obedient to superiors, contemptuous of "inferiors"; uses prejudice to protect the ego; hard to change |
| **Frustration–aggression hypothesis** | Frustration → bottled aggression → **rechanneled** onto a **scapegoat** (often a minority); common in economic hardship |
| **Relative deprivation** | Prejudice rises when people feel **deprived of what they feel entitled to** |

#### Discrimination: individual vs. institutional

| Type | Definition | Example |
|---|---|---|
| **Individual discrimination** | One person acting against another | A professor refusing women into his class |
| **Institutional discrimination** | Discrimination built into **organizations / policy** | Segregated schools struck down by *Brown v. Board* (1954) |
| **Side-effect discrimination** | Bias in one institution **spills into** another | A wrongful conviction later blocks employment |
| **Past-in-present discrimination** | **Past** practices still harm people **today** | Lingering exclusion after legal integration |

:::keyconcept
**Prejudice is an *attitude*; discrimination is an *action*.** A CEO can *believe* women can't lead (prejudice) yet still promote a woman (no discrimination); conversely, a policy can discriminate with **no** prejudiced intent (institutional/unintentional). They don't have to co-occur.
:::

#### Stigma
**Stigma** is extreme social disapproval/discrediting. **Social stigma** is imposed by society (fueled by stereotypes, prejudice, discrimination); **self-stigma** is the **internalization** of those negative views, hitting self-esteem and driving isolation (e.g., concealing an HIV diagnosis).

#### Ethnocentrism, cultural relativism, and group dynamics

| Concept | Definition |
|---|---|
| **Ethnocentrism** | Judging another culture by the standards of **your own**, viewing yours as **superior** → bias and prejudice |
| **Cultural relativism** | Judging a culture **on its own terms**; no absolute right/wrong (can falter if used to excuse human-rights abuses) |
| **In-group** | The group you identify with — stronger, more favorable interactions |
| **Out-group** | A group you don't belong to |
| **In-group favoritism** | Favoring your own group (without necessarily harming the out-group) |
| **Out-group derogation** | Actively **disfavoring** the out-group, especially when it's seen as **threatening** |

:::realworld
For physicians, the **FAE + just-world hypothesis** are clinically dangerous: blaming complex patients for "their own problems" under-recognizes the **situational and structural barriers** (poverty, access, education) that actually drive poor outcomes.
:::
`
    },

    /* ───────── 6.6 Attraction, Relationships & Social Behavior ───────── */
    {
      id: 's6', num: '6.6', title: 'Attraction, Relationships & Social Behavior',
      recap: `
- **Proximity** is the strongest predictor of friendship; the **mere exposure effect** means repeated exposure **increases liking** (even subconsciously).
- **Attraction drivers:** **similarity** (huge), physical features (**symmetry**, averageness, sexual dimorphism), and **misattributed arousal** (shaky-bridge effect).
- **Harlow's monkeys:** infants chose the **cloth (comfort) mother** over the wire (feeding) one → attachment is about **contact comfort**, not food.
- **Ainsworth's Strange Situation:** **secure** (~60%) vs. **insecure** (anxious/avoidant) attachment; shaped by **responsive parenting**, predicts adult relationships.
- **Altruism** (kin selection, reciprocal altruism, empathy) and **aggression** (biology + psychology + sociocultural) are the two poles of social behavior.
`,
      detail: `
#### Proximity and the mere exposure effect
- **Proximity** — **geographic closeness** is the single most powerful predictor of friendship and romance ("mating starts with meeting").
- **Mere exposure effect** — **repeated exposure** to a novel person or object **increases liking** for it. It's subtle and largely subconscious (anterograde-amnesia patients still prefer faces they've "seen" without remembering them) — which is exactly why **advertisers** rely on it.

#### Determinants of attraction

| Determinant | Finding |
|---|---|
| **Similarity** | The strongest predictor — couples/friends share attitudes, beliefs, values, age, race, status. **Perceived** similarity grows over time. |
| **Physical features (universal)** | Skin clarity, **body & facial symmetry**; low waist–hip ratio (women), V-torso (men); high **sexual dimorphism** |
| **Averageness** | Composite ("averaged") faces are rated **more** attractive → suggests a prototype |
| **Misattributed arousal** | Unrelated **physiological arousal** (shaky suspension bridge → racing heart) is **misread** as attraction |

**Related biases:** **similarity bias** (won't befriend the dissimilar), **projection bias** (assume others share your beliefs), **false consensus** (assume everyone agrees with you).

#### Attachment — Harlow and Ainsworth
**Harlow's monkey experiments** offered infant monkeys a **wire mother** (with food) vs. a **cloth mother** (soft, no food). Monkeys overwhelmingly clung to the **cloth mother**, eating from the wire one only briefly → **attachment is driven by contact comfort, not feeding**. The cloth mother served as a **secure base** for exploration.

**Mary Ainsworth's Strange Situation** (mother leaves and returns with a stranger present) revealed attachment styles:

| Style | Behavior with caregiver | ~Frequency |
|---|---|---|
| **Secure** | Explores freely, distressed at departure, **comforted on return** | ~60% |
| **Insecure–anxious (resistant)** | Clings, won't explore, distress **persists** after return | — |
| **Insecure–avoidant** | **Ignores** caregiver on return | — |

- **Cause:** **sensitive, responsive parenting** → secure attachment; unresponsive → insecure.
- **Consequence:** early attachment style forms the basis of **adult intimate relationships**.
- **Parenting styles:** **authoritarian**, **permissive**, and **authoritative** (responsive + firm — the **best** outcomes).

:::keyconcept
**Harlow's headline:** *contact comfort* beats food in forming attachment, overturning the old "cupboard theory" (that babies bond to whoever feeds them). The cloth mother as a **secure base** is the conceptual bridge to Ainsworth's **secure** attachment.
:::

#### Aggression
**Aggression** = any physical/verbal behavior intended to harm. It arises from **three** interacting sources:

| Source | Contributors |
|---|---|
| **Biological** | **Genes** (twin studies), the **amygdala** (facilitates aggression), reduced **frontal lobe** control, high **testosterone** |
| **Psychological** | **Frustration–aggression principle** (frustration → anger → aggression; heat amplifies it); **reinforcement/modeling** (giving in to tantrums breeds tantrums) |
| **Sociocultural** | **Deindividuation** in crowds; **social scripts** learned from media/violent games |

#### Altruism
**Altruism** = helping others, often at a cost to oneself. It correlates with better health and life satisfaction, but can carry hidden evolutionary logic:

| Form | Definition |
|---|---|
| **Kin selection** | More altruism toward **close genetic relatives** (and even shared rare surnames) |
| **Reciprocal altruism** | Help those likely to help **back** in future interactions |
| **Cost signaling** | Generosity **signals** that the giver has resources → builds trust |
| **Empathy–altruism hypothesis** | Some help purely out of **empathy**; higher-empathy people are more altruistic |

:::mnemonic
**Helping develops in stages:** newborns **cry** when others cry → helping behavior emerges around **age 2** (sharing/play-acting) → genuine helping by **age 4**. And remember **kin > reciprocal > stranger** for likelihood of altruism.
:::

#### Social support (types)
**Social support** is a major determinant of health (low support → more depression, anxiety, substance use, and mortality from cancer/heart disease):

- **Emotional** — love, trust, listening (from close others).
- **Esteem** — encouragement, confidence (coaches, therapists).
- **Informational** — advice, information.
- **Tangible (instrumental)** — money, goods, services.
- **Companionship** — sense of social belonging.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '6.1 Learning',
        points: [
          '**Nonassociative:** habituation (tune out) vs. sensitization (heighten); dishabituation restores the response.',
          '**Classical (Pavlov):** NS + UCS → CS elicits CR. NS must *precede & predict* the UCS. Extinction, spontaneous recovery, generalization, discrimination.',
          '**Operant (Skinner):** consequences shape voluntary behavior. Reinforcement ↑, punishment ↓; positive = add, negative = remove. Negative reinforcement still INCREASES behavior.',
          '**Schedules:** variable-ratio is most extinction-resistant; partial > continuous for durability. Ratio = number, interval = time.',
          '**Observational (Bandura):** learn by watching models (Bobo doll); vicarious reinforcement, mirror neurons.'
        ]
      },
      {
        section: '6.2 Conformity & Obedience',
        points: [
          'Conformity = match group norms; obedience = follow authority. Motives: informational (they know better) vs. normative (approval).',
          'Depth: compliance < identification < internalization.',
          'Asch: ~75% conformed to a wrong majority (normative). Milgram: ~65% gave 450 V (obedience). Zimbardo: roles corrupt ordinary people.',
          'One dissenting ally or one defiant model dramatically reduces conformity/obedience.'
        ]
      },
      {
        section: '6.3 Group Behavior',
        points: [
          'Groupthink = harmony over accuracy in cohesive, insulated groups; group polarization = discussion makes the average view more extreme.',
          'Bystander effect via diffusion of responsibility (grows with group size).',
          'Social facilitation amplifies the dominant response (helps easy, hurts hard tasks); social loafing = less effort when contributions are unevaluated.',
          'Deindividuation = loss of self/restraint in anonymous crowds.'
        ]
      },
      {
        section: '6.4 Attribution & Bias',
        points: [
          'Internal/dispositional vs. external/situational attribution; Kelley uses consistency, distinctiveness, consensus.',
          'FAE: overweight disposition for OTHERS. Self-serving bias: success = me, failure = situation. Actor–observer bias contains both.',
          'FAE & self-serving bias are stronger in individualistic cultures.',
          'Social perception: primacy, recency, halo/reverse-halo, just-world hypothesis.'
        ]
      },
      {
        section: '6.5 Prejudice & Discrimination',
        points: [
          'ABC: stereotype (cognition) → prejudice (affect) → discrimination (behavior).',
          'Stereotype threat lowers performance; self-fulfilling prophecy confirms the stereotype.',
          'Prejudice = attitude, discrimination = action; need not co-occur. Institutional vs. individual discrimination.',
          'Ethnocentrism vs. cultural relativism; in-group favoritism + out-group derogation.'
        ]
      },
      {
        section: '6.6 Attraction & Social Behavior',
        points: [
          'Proximity + mere exposure → liking. Similarity is the strongest attraction predictor; misattributed arousal (shaky bridge).',
          'Harlow: contact comfort > food. Ainsworth: secure (~60%) vs. insecure (anxious/avoidant); responsive parenting.',
          'Aggression = biology + psychology + sociocultural.',
          'Altruism: kin selection, reciprocal altruism, cost signaling, empathy–altruism.'
        ]
      }
    ],
    mnemonics: [
      '**Unconditioned = Unlearned; Conditioned = learned.** The neutral stimulus must come *just before* and *predict* the UCS to become a CS.',
      '**Operant grid:** positive/negative = **add/remove**; reinforce/punish = **up/down**. Negative reinforcement *increases* behavior by *removing* something aversive (it is NOT punishment).',
      '**Schedules — "Ratio = number, Interval = time; Variable keeps you Vigilant."** Variable-ratio (slot machine) is the most extinction-resistant.',
      '**Conformity depth: Compliance → Identification → Internalization** = shallow (rewards) → idol → integrated into self (deepest).',
      '**Asch / Milgram / Zimbardo** = **C**onformity (lines) / **O**bedience (shocks) / **R**oles (prison). Think "**COR**e social-psych experiments."',
      '**Attitudes are as easy as ABC:** Affect = **Prejudice**, Behavior = **Discrimination**, Cognition = **Stereotype**.',
      '**Social facilitation amplifies the dominant response:** an audience makes you better at easy tasks, worse at hard ones.',
      '**FAE = explaining OTHERS (disposition); Self-serving bias = explaining YOURSELF (success internal, failure external).**',
      '**Harlow: "contact comfort, not the cupboard."** Baby monkeys chose the soft cloth mother over the feeding wire mother.',
      '**Altruism likelihood: Kin > Reciprocal > Stranger.**'
    ],
    keyConcepts: [
      '**Classical vs. operant:** classical conditions an *involuntary reflex* to a new cue (no new behavior); operant shapes *voluntary* behavior through its *consequences*.',
      '**Negative reinforcement ≠ punishment.** "Negative" means *remove a stimulus*; reinforcement always *increases* behavior. This is the highest-yield operant trap.',
      '**Asch, Milgram, Zimbardo** together show that ordinary people conform, obey, and inhabit roles far more readily than they predict — situational forces dominate.',
      '**FAE vs. self-serving bias:** FAE over-attributes *others\'* behavior to disposition; self-serving bias credits *our own* successes internally and failures externally. Both stronger in individualistic cultures.',
      '**Prejudice (attitude) vs. discrimination (action)** can occur independently; stereotype (belief) is the cognitive root, and stereotype threat / self-fulfilling prophecy can make beliefs come true.',
      '**Harlow + Ainsworth:** attachment is built on *contact comfort* (not feeding) and *responsive parenting*, and early style predicts adult relationships.'
    ],
    equations: []
  },

  questions: []
};
