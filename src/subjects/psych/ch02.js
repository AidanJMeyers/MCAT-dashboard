// Behavioral Sciences Chapter 2 — Consciousness & Sleep.
// Self-contained module (no JSON import): all content authored here.

export default {
  id: 2,
  title: 'Consciousness & Sleep',
  subtitle: 'States of consciousness · the sleep cycle & brain waves · circadian rhythms · dreaming · sleep disorders · consciousness-altering drugs · addiction & the reward pathway',

  blocks: [
    /* ───────────────────── 2.1 States of Consciousness ───────────────────── */
    {
      id: 's1', num: '2.1', title: 'States of Consciousness',
      recap: `
- **Consciousness** = your **awareness of self and environment**; it ranges along a continuum from full **alertness** down to **sleep**, and can be altered by external factors (**drugs**) or internal effort (**meditation**).
- **EEG** records cortical brain waves; the four classic waves are **beta, alpha, theta, delta** — frequency *decreases* as you move from alert wakefulness toward deep sleep.
- **Beta** (alert/concentrating) → **alpha** (relaxed/daydreaming) → **theta** (drowsy/early sleep) → **delta** (deep sleep).
`,
      detail: `
#### What is consciousness?
**Consciousness** is your **awareness of yourself and your environment**. It is not all-or-nothing — different **levels of awareness** exist along a continuum, and can be induced by **external factors** (e.g., drugs) or **internal mental efforts** (e.g., meditation). The continuum runs from peak **alertness** at one end to **sleep** at the other.

| State | What it feels like |
|---|---|
| **Alertness** | Fully awake; actively processing the environment |
| **Daydreaming** | More relaxed, less focused; overlaps with **light meditation** (can be self-induced) |
| **Drowsiness** | The transition just **before falling asleep** or **right after waking**; also reached in **deep meditation** |
| **Sleep** | Not aware of the surrounding world; brain activity reorganizes into distinct **stages** |

#### Measuring consciousness: the EEG
The **electroencephalogram (EEG)** records the summed electrical activity of cortical neurons as **brain waves**. Each wave type **oscillates at a different frequency**, and the dominant wave shifts predictably as consciousness changes. As a rule, **frequency drops** as you move from alert wakefulness toward deep sleep.

| Wave | Frequency | Dominant state |
|---|---|---|
| **Beta (β)** | **13–30 Hz** | Awake, **concentrating**, alert; increased with **stress, anxiety, restlessness** |
| **Alpha (α)** | **8–13 Hz** | Awake but **relaxed**, daydreaming; *disappear in drowsiness, reappear in deep relaxation* |
| **Theta (θ)** | **~4–7 Hz** | **Drowsiness** and the first moments of sleep |
| **Delta (δ)** | **0.5–3 Hz** | **Deep (slow-wave) sleep** or **coma** |

:::mnemonic
**Brain waves slow as you nod off — "BAT-D":** **B**eta (busy/awake) → **A**lpha (at ease) → **T**heta (tired/dozing) → **D**elta (dead-asleep/deep). The list runs **fast → slow** in both frequency *and* how awake you are. Alphabetical order ≈ order of falling asleep (β, then the rest descend).
:::

:::keyconcept
The single highest-yield idea here: **brain-wave frequency and arousal track together.** High-frequency **beta** = wide awake; low-frequency **delta** = deepest sleep. Memorize the four waves with their Hz ranges and the state each signals — the MCAT loves to give you a frequency and ask the state, or vice versa.
:::
`
    },

    /* ─────────────────── 2.2 The Sleep Cycle & Brain Waves ─────────────────── */
    {
      id: 's2', num: '2.2', title: 'The Sleep Cycle & Brain Waves',
      recap: `
- Sleep runs in **~90-minute cycles**, repeated **4–5 times** a night, cycling **N1 → N2 → N3 → N2 → REM**.
- **Non-REM** = **N1** (theta; **hypnagogic hallucinations**, **hypnic jerks**), **N2** (theta + **sleep spindles** + **K-complexes**), **N3** (**delta**; **slow-wave sleep**, sleepwalking/sleeptalking).
- **REM** = **rapid eye movement**; **paradoxical sleep** — brain looks awake (**beta-like, desynchronized** waves) but body is **paralyzed (atonia)**. Most **dreaming** and key **memory consolidation** occur here.
- Waking during **REM blocks memory of the dream**.
`,
      detail: `
#### The architecture of a night's sleep
During sleep the brain passes through **distinct, ordered patterns**. There are **four main stages** grouped as **non-REM** (N1, N2, N3) and **REM**, and they recur in **~90-minute cycles**. Over a full night you complete **4–5 cycles**; the relative time in each stage shifts with how long you've been asleep and with **age**.

The typical order within a cycle is:

**N1 → N2 → N3 → N2 → REM** → (repeat)

##### Non-REM sleep

| Stage | Dominant EEG | What happens |
|---|---|---|
| **N1 (Stage 1)** | **Theta** | Lightest sleep. **Hypnagogic hallucinations** (seeing a flash of light, hearing your name or a doorbell that isn't there); the **Tetris effect** (seeing falling blocks after playing); a falling sensation with a muscle twitch = **hypnic jerk** |
| **N2 (Stage 2)** | **Theta + sleep spindles + K-complexes** | Deeper; harder to awaken. **Sleep spindles** inhibit perception to keep sleep tranquil (and help you sleep through noise). **K-complexes** suppress cortical arousal, keep you asleep, and aid **memory consolidation** — they occur naturally but can be triggered by touching a sleeper |
| **N3 (Stage 3)** | **Delta** | **Slow-wave sleep (SWS)**; deepest, hardest to wake. **Sleepwalking and sleeptalking** occur here |

:::mnemonic
**"Spindles & K-complexes get you to STAGE 2."** Both novel features show up in **N2** — a spindle looks like a little burst of activity, a K-complex like a single big spike. If a question mentions either term, the answer is **N2**.
:::

##### REM sleep
**REM (rapid eye movement)** sleep is named for the darting eyes seen under the lids. Its EEG is a mix of **alpha, beta, and desynchronized waves** — strikingly **similar to the awake beta pattern**. Yet most skeletal muscles are **paralyzed (atonia)**: because most **dreaming** occurs in REM, this paralysis prevents you from acting out dreams.

- Often called **paradoxical sleep**: the brain is **active/awake-looking** while the **body cannot move**.
- REM is **most important for memory consolidation**.
- **Waking during REM prevents you from forming a memory of the dream.**

:::keyconcept
**REM is the paradox.** Externally the body is still and limp; internally the brain is nearly as active as wakefulness. Don't confuse "deepest sleep" (that's **N3/delta**) with "most active brain during sleep" (that's **REM**). Both N3 and REM matter for memory, but **REM** is the headline for dreaming + consolidation.
:::

:::realworld
In **REM sleep behavior disorder**, the normal REM **atonia** fails, so people physically *act out* their dreams — kicking, punching, leaping from bed. It illustrates exactly why REM paralysis exists in the first place.
:::
`
    },

    /* ─────────────────────── 2.3 Circadian Rhythms ─────────────────────── */
    {
      id: 's3', num: '2.3', title: 'Circadian Rhythms',
      recap: `
- **Circadian rhythms** are the body's regular cycles over a **~24-hour** period (sleep–wake, body temperature, hormone release).
- **Melatonin** (from the **pineal gland**) promotes sleepiness; its release is suppressed by **light** — even **artificial light** is a strong cue.
- **Cortisol** rises in the early morning to promote wakefulness/arousal; the two hormones oppose each other across the day.
- Rhythms **shift with age**: younger people skew "night owl," older people shift earlier.
`,
      detail: `
#### The ~24-hour clock
**Circadian rhythms** are the body's **regular rhythms across a 24-hour period** — they govern the **sleep–wake cycle**, **body temperature**, and **hormone secretion**, and explain why you predictably get sleepy in the afternoon and at night.

#### The hormones of the clock

| Hormone | Source | Role in the cycle |
|---|---|---|
| **Melatonin** | **Pineal gland** | **Promotes sleepiness**; released in darkness. **Light suppresses it** — daylight is the major cue, but even **artificial light** counts |
| **Cortisol** | **Adrenal cortex** | Rises in the **early morning** to promote **wakefulness and arousal**; tapers through the day |

**Light** is the dominant external cue (**zeitgeber**) that entrains the clock. Bright or artificial light at night suppresses melatonin and pushes the rhythm later.

#### Drift with age
Circadian timing **changes across the lifespan**: adolescents and young adults tend to be **night owls** (later sleep onset), whereas **older adults** shift earlier — to bed and awake sooner.

:::mnemonic
**"Melatonin = Moonlight; Cortisol = Crack of dawn."** **M**elatonin rises in the dark to put you down; **C**ortisol spikes at sunrise to wake you up. They are mirror images across the 24-hour day.
:::

:::realworld
**Jet lag** and **shift work** desynchronize the internal clock from the external light cycle. **Blue light** from screens at night suppresses melatonin and delays sleep onset — the physiological basis for "no screens before bed."
:::
`
    },

    /* ───────────────────────────── 2.4 Dreaming ───────────────────────────── */
    {
      id: 's4', num: '2.4', title: 'Dreaming',
      recap: `
- Most dreaming occurs in **REM**; the rapid eyes and near-awake EEG are telltale signs.
- Reduced **prefrontal cortex** activity in REM (the logic center) is why bizarre, illogical dream events feel normal.
- **Freud:** dreams express **unconscious** wishes — **manifest content** (what happens) vs. **latent content** (hidden meaning); little scientific support.
- **Activation–synthesis hypothesis:** the **brainstem** fires random signals (**activation**) and the **cortex** weaves them into a story (**synthesis**) → dreams may be meaningless.
`,
      detail: `
#### When and how we dream
Everyone dreams during **REM** sleep. You can tell a person is dreaming because their **eyes dart rapidly** beneath the lids and their **EEG looks nearly awake**. Crucially, activity in the **prefrontal cortex** — the seat of **logic and reasoning** — is **decreased** during REM, which is why **events that defy logic don't feel strange** while you're in the dream.

#### Why do we dream? (functional ideas)
Several non-exclusive proposals exist:

- **Threat simulation / problem solving** — an evolutionary rehearsal for real-world challenges.
- **Memory consolidation** — moving experiences into **long-term memory** and clearing clutter; people who **learn then sleep** retain more than those who don't sleep (the role of REM specifically is still unclear).
- **Preserving / developing neural pathways** — infants, who are constantly building new networks, spend the **most time in REM**.
- **Maintaining brain flexibility.**
- **No purpose at all** — dreaming may be an epiphenomenon.

#### Two theories of dream meaning

| Theory | Core claim | Key terms |
|---|---|---|
| **Freud's psychoanalytic theory** | Dreams reveal **unconscious wishes and conflicts** that must be **interpreted** (the "iceberg") | **Manifest content** = the literal plot (a monster chasing you); **latent content** = the hidden meaning (your job pushing you out) |
| **Activation–synthesis hypothesis** | Dreams are the cortex's attempt to **make sense of random signals** | **Brainstem = activation** (random neural impulses); **cortex = synthesis** (assigns meaning) → dreams may carry **no real meaning** |

:::mnemonic
**Freud: "Manifest = what's Manifested (visible); Latent = what's Lurking (hidden)."** And for the rival theory: **Activation (brainstem) before Synthesis (cortex)** — bottom-up noise first, story second.
:::

:::keyconcept
Freud's view says dreams are **meaningful messages to decode**; the **activation–synthesis hypothesis** says they're the brain **rationalizing noise**. They are essentially opposite stances on whether a dream "means" anything — a classic MCAT contrast pair.
:::
`
    },

    /* ──────────────────────────── 2.5 Sleep Disorders ──────────────────────────── */
    {
      id: 's5', num: '2.5', title: 'Sleep Disorders',
      recap: `
- **Insomnia** = persistent difficulty **falling or staying asleep**; chronic sleep meds risk **dependence and tolerance**.
- **Narcolepsy** = uncontrollable sleep attacks straight into **REM**; linked to loss of the alertness neurotransmitter (**orexin/hypocretin**); ~1 in 2000.
- **Sleep apnea** = repeated breathing pauses (**apneas**); **obstructive** (airway blockage, snoring) vs. **central** (brain's ventilation control); robs you of **N3**.
- **Night terrors** and **somnambulism (sleepwalking)** are **NREM/N3** parasomnias, more common in **children**.
- Sleep deprivation → irritability, poor memory, **↑cortisol/appetite**, obesity & depression risk; repay "**sleep debt**."
`,
      detail: `
#### The cost of too little sleep
Adults generally need **7–8 hours** (more for children/infants; it varies by **age** and individual). **Sleep deprivation** brings **irritability** and **poorer memory** and is dangerous for tasks like driving or flying. It also:

- Raises **cortisol** and the **hunger hormone**, increasing susceptibility to **obesity**.
- Increases **depression** risk — REM helps the brain **process emotional experiences** (protective effect not certain).

You can recover by repaying your accumulated **"sleep debt."**

#### The major sleep disorders

| Disorder | Hallmark | Key details |
|---|---|---|
| **Insomnia** | Persistent trouble **falling or staying asleep** | Treatable with medication, but long-term use → **dependence and tolerance**. Exercise and relaxation before bed help |
| **Narcolepsy** | Sudden, uncontrollable **sleep attacks** | Falls directly **into REM**; can strike any time. ~**1 in 2000**; evidence it is **genetic** and tied to loss of the **alertness neurotransmitter (orexin/hypocretin)** |
| **Sleep apnea** | Repeated **breathing pauses** (**apneas**) during sleep | ~**1 in 20**; often **unaware**. Body wakes you just enough to **gasp**, then you fall back asleep — up to **100×/night**. Robs you of **N3 (slow-wave) sleep**. **Snoring** and morning **fatigue** are clues |
| **Night terrors** | Episodes of intense **fear/arousal** during sleep | A **NREM (N3)** parasomnia; more common in **children** |
| **Somnambulism (sleepwalking) / sleeptalking** | Walking or talking while asleep | Occurs during **N3**; mostly **genetic** and **harmless**; more common in **children** (who have more N3) |

:::keyconcept
**Parasomnias live in N3, not REM.** **Sleepwalking, sleeptalking, and night terrors** all happen during **slow-wave (N3) sleep** — which is why they're commonest in **children** (more N3) and why a sleepwalker is *not* acting out a dream. Contrast with **nightmares**, which occur in **REM**.
:::

#### Breathing-related sleep disorders
Sleep-breathing problems originate in the **brain, airways, or lungs/chest wall**:

| Type | Origin | Mechanism / sign |
|---|---|---|
| **Obstructive sleep apnea (OSA)** | **Airway** | Neck tissues **block airflow** → snoring, gasping, pauses. Very common, **worsens with age**; diagnosed by **≥5 apneas/hour** on **polysomnography**; patients wake **unrefreshed** |
| **Central sleep apnea** | **Brain** | **Apneas without obstruction** — a problem in the **ventilation control system**. Shows a **Cheyne–Stokes** pattern (oscillating then flat breathing) on polysomnography |
| **Hypoventilation** | **Lungs / chest wall** | High **pCO₂**, low **pO₂**; caused by medication or **obesity**. Chronically elevated **pCO₂** can lead to **right-sided heart failure** |

:::realworld
**Polysomnography** is the overnight sleep study that records EEG, eye movements, muscle tone, and breathing simultaneously — it's how clinicians count apneas and stage sleep. **OSA** is treated with **CPAP**, which splints the airway open with continuous air pressure.
:::

#### Hypnosis and meditation
These are **altered states**, not sleep disorders, but they round out the consciousness picture:

- **Hypnosis** — deep relaxation and focus that increases **susceptibility to suggestion** (only if the person is willing). EEG shows more **alpha** (awake-but-relaxed). Two explanations: **dissociation theory** (an extreme form of **divided consciousness**) and **social influence theory** (people do/report what's expected, like actors in a role). Used for **pain control** by refocusing attention; risky for "memory retrieval" because it can implant **false memories**.
- **Meditation** — training to **self-regulate attention and awareness**; can be **focused** (e.g., on breathing) or **unfocused** (mind wanders). **Light** meditation shows more **alpha**; **deep** meditation shows increased **theta**. Regular deep meditators show increased activity in the **prefrontal cortex**, **right hippocampus**, and **right anterior insula** (better attention control). Can help with **ADHD** and **aging**.

:::mnemonic
**Both hypnosis and light meditation = more ALPHA** (the "awake-but-relaxed" wave). Go **deeper** in meditation and you slide toward **THETA** — the same drowsy wave seen at sleep onset.
:::
`
    },

    /* ──────────────── 2.6 Consciousness-Altering Drugs ──────────────── */
    {
      id: 's6', num: '2.6', title: 'Consciousness-Altering Drugs',
      recap: `
- Three classic **psychoactive** categories: **depressants**, **stimulants**, **hallucinogens** (plus **opiates** as a distinct class).
- **Depressants** (alcohol, barbiturates, **benzodiazepines**) **slow** CNS activity; benzos **enhance GABA** (open Cl⁻ channels → hyperpolarize).
- **Opiates** (heroin, morphine) act at **endorphin receptors** → analgesia + **euphoria** — *not* depressants.
- **Stimulants** (caffeine, nicotine, cocaine, amphetamines, ecstasy) **boost** neural activity; cocaine floods **dopamine/serotonin/NE** then crashes.
- **Hallucinogens** (LSD, marijuana/**THC**, ecstasy) distort **perception**; **LSD/ecstasy** act on **serotonin**.
`,
      detail: `
#### Depressants and opiates
**Depressants** **lower** basic body functions and neural activity (heart rate, reaction time).

| Drug | Class | Effects / mechanism |
|---|---|---|
| **Alcohol** | Depressant | Slows thinking, **disrupts REM** (impairs memory formation), **removes inhibitions**. Most popular depressant |
| **Barbiturates** | Depressant | **Depress the CNS** to induce sleep / reduce anxiety. Reduce memory, judgment, concentration; **deadly combined with alcohol** |
| **Benzodiazepines** | Depressant | **Most commonly prescribed** depressant (sleep aids / anti-anxiety). **Enhance GABA** → open **GABA-gated Cl⁻ channels** → neurons more **negatively charged** (hyperpolarized). Short/intermediate-acting for **sleep**; long-acting for **anxiety** |
| **Opiates / opioids** | **Own class** (not depressants) | **Heroin, morphine.** Act at **endorphin receptor sites** → relieve **pain/anxiety** and cause **euphoria** (hence recreational use). Distinct from depressants, which act on **GABA** receptors |

:::keyconcept
**Opiates are NOT depressants** even though both can ease anxiety. The split is the **receptor**: depressants (benzos/barbiturates/alcohol) work through **GABA**; **opiates** work through **endorphin** receptors. That mechanistic difference is the testable point.
:::

#### Stimulants
**Stimulants** **intensify** neural activity and bodily functions, running from mild **caffeine** up to **cocaine**.

| Drug | Mechanism | Effects |
|---|---|---|
| **Caffeine** | **Inhibits adenosine receptors** | Increases alertness; **disrupts sleep** |
| **Nicotine** | Stimulant (mid-range) | **Disrupts sleep**, **suppresses appetite**; at high levels relaxes muscles and releases stress-reducing transmitters. **Physiologically addicting** |
| **Cocaine** | Floods **dopamine, serotonin, norepinephrine** | Strong high that **depletes** the brain's supply → intense **crash/depression**. Heavy use: suspicion, **convulsions, respiratory arrest, cardiac failure** |
| **Amphetamines / methamphetamines** | Trigger **dopamine** release | **Euphoria** up to ~8 hours; highly addictive; long-term use may destroy the ability to maintain **normal dopamine** levels |

Both **caffeine and nicotine** are **physiologically addicting** and produce **withdrawal** (anxiety, insomnia, irritability).

#### Hallucinogens
**Hallucinogens** cause **hallucinations** and **altered perception**.

| Drug | Notes |
|---|---|
| **Ecstasy (MDMA)** | Synthetic — **both stimulant and hallucinogen**. Raises **dopamine and serotonin** → euphoria + an **artificial sense of social connectedness**; can **damage serotonin-producing neurons** (mood regulation) |
| **LSD** | **Interferes with serotonin** → hallucinations that are **visual** (rather than auditory) |
| **Marijuana (THC)** | A **mild hallucinogen**. **THC** heightens sensitivity to sounds/tastes/smells; like alcohol it **reduces inhibition** and impairs **motor/coordination**; **disrupts memory** and short-term recall; stays in the body up to a **week**. Medical uses: **pain and nausea** relief |

:::realworld
Some hallucinogens are being studied for **PTSD treatment**: they may let patients access painful memories **detached from the strong emotions**, so the memory can be reprocessed and "come to terms with."
:::

:::mnemonic
**Sort by direction:** **Depressants** push the body **DOWN** (alcohol, barbiturates, benzos). **Stimulants** push it **UP** (caffeine → cocaine). **Hallucinogens** distort the **PICTURE** (LSD, THC, ecstasy). **Opiates** kill **PAIN** (heroin, morphine) — their own category.
:::
`
    },

    /* ──────────── 2.7 Drug Addiction & the Reward Pathway ──────────── */
    {
      id: 's7', num: '2.7', title: 'Drug Addiction & the Reward Pathway',
      recap: `
- The **reward pathway** runs on **dopamine** from the **ventral tegmental area (VTA)** in the midbrain to the **nucleus accumbens**, **amygdala**, **hippocampus**, and **prefrontal cortex** — the **mesolimbic pathway**.
- As dopamine rises, **serotonin falls** (less satiation) → "want more."
- **Tolerance** = needing more drug for the same effect (receptor down-regulation); **withdrawal** = the crash when the drug is removed.
- **Faster route of entry → more addictive** (inhalation/IV fastest; oral slowest).
- Treatment: **detox + medications** (e.g., **methadone**), **CBT**, **motivational interviewing**, **12-step (AA)**; **relapse** is likelier with more addictive substances.
`,
      detail: `
#### The reward pathway
When you first experience pleasure, the brain releases **dopamine** from the **ventral tegmental area (VTA)** in the **midbrain**. The VTA projects dopamine to four targets:

| Region | Role in reward |
|---|---|
| **Nucleus accumbens (NAcc)** | Motor/"let's take another bite" — drives the behavior |
| **Amygdala** | Tags the experience as **enjoyable** |
| **Hippocampus** | **Remembers** it → "let's do it again" |
| **Prefrontal cortex** | **Focuses attention** and planning on the reward |

The **NAcc, amygdala, and hippocampus** together form the **mesolimbic pathway**. Different stimuli activate this circuit to **different degrees**. As **dopamine rises, serotonin falls** — and because serotonin contributes to **satiation**, you feel **less content**, fueling the urge for more. There is an **increased genetic risk** for addiction, and animal models (rats self-administering escalating drug doses; preferring drug over favorite food) reveal its **biological basis** — ultimately **addiction overrides the rational mind**.

#### Homeostasis, tolerance, and withdrawal
The body fights to maintain **homeostasis** (temperature, heart rate, metabolism). Take amphetamines and the body quickly works to **lower** heart rate back to normal. With repetition, the brain learns the **cues** (same time of day, the room, needles) and **pre-compensates** *before* the dose — so you need **more drug** to get the same effect.

| Concept | Definition | Mechanism |
|---|---|---|
| **Tolerance** | Need **more drug** for the same effect | Chronic stimulation → brain **down-regulates receptors** (e.g., dopamine receptors), so the same dose gives a smaller high |
| **Withdrawal** | Aversive symptoms when the drug is removed | Dopamine drops below normal → **depressed, anxious**; eventually the drug is needed just to feel **"normal."** With time/effort, the brain can **reverse** |

:::realworld
**Conditioned tolerance:** an addict's brain pre-lowers heart rate in response to familiar **cues**. Two consequences — (1) experiencing the cues **without** the drug triggers a **crash/craving**; (2) taking the **usual dose in a new environment** (no cues, no pre-compensation) can cause **overdose**.
:::

#### Routes of entry
**The faster a drug reaches the brain, the more addictive its potential.**

| Route | What it is | Speed to effect |
|---|---|---|
| **Inhalation** | Breathing/smoking → straight to the brain | **~10 seconds** (fast) |
| **Injection (IV)** | Directly into a vein | **Seconds** (fastest; dangerous) |
| **Intramuscular** | Into muscle | Fast (**EpiPen**) or slow (**vaccines**) |
| **Transdermal** | Absorbed through skin (**nicotine patch**) | **Hours** (slow, steady; drug must be potent) |
| **Oral** | Ingested, through the GI tract | **~30 minutes** (slowest) |

#### Substance use disorders
Two processes bracket drug use: **intoxication** (the drug-specific behavioral/psychological effects — "drunk," "high") and **withdrawal** (stopping after prolonged use). These can cause **substance-induced disorders** (mood — mania/depression, anxiety, sleep, sexual, or **psychosis**) and escalate to a **substance use disorder** that impairs work, school, or home life. Signs: using **increasing amounts**, **stronger cravings**, time lost recovering, **failure to cut back**, plus **withdrawal** and **tolerance**. (Notably, **caffeine** cannot produce a substance-use disorder.)

#### Treatments and relapse
Treatment must address **physiological *and* psychological** symptoms, usually starting with **detox**.

| Treatment | How it works |
|---|---|
| **Methadone (for opiates)** | Activates **opiate receptors** but **slowly** → dampens the high, **reduces cravings**, eases withdrawal; receptors are already filled so the drug can't produce a high |
| **Nicotine replacement (for tobacco)** | Low-level nicotine (patch) or drugs acting on nicotine receptors → blocks dopamine release/reuptake, cutting cravings |
| **Alcohol medications** | Block **reward-system receptors** and reduce withdrawal symptoms (key in early relapse prevention) |
| **Inpatient vs. outpatient** | Inpatient = live at a facility; outpatient = live at home, visit for treatment |
| **Cognitive behavioral therapy (CBT)** | Targets both **cognitive and behavioral** parts of addiction; recognize triggers, build coping strategies, monitor cravings — **long-lasting** |
| **Motivational interviewing** | Helps the patient find **intrinsic motivation** to change; few sessions; a doorway to further treatment |
| **Group meetings (AA, 12-step)** | **Acceptance, surrender, active involvement**; evidence of benefit |

**Relapse** is a slip back to use; more **addictive substances** make relapse more likely, which is why staying clean is hard.

:::mnemonic
**Reward circuit cast — "A HAND on the reward":** **A**mygdala (this felt good), **H**ippocampus (remember it), **A**ttention/prefrontal cortex (focus on it), **N**ucleus accumbens (do it again) — all fed by **D**opamine from the **VTA**. The mesolimbic core is **NAcc + amygdala + hippocampus**.
:::

:::keyconcept
**Tolerance and withdrawal are two sides of receptor down-regulation.** Chronic drug → fewer receptors → (a) **tolerance** (need more to feel the high) and (b) **withdrawal** (feel terrible without the drug, because normal dopamine no longer reaches the dampened receptors). Both, plus escalating use, are the diagnostic backbone of a **substance use disorder**.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'States of Consciousness',
        points: [
          '**Consciousness** = awareness of self and environment; a continuum from **alertness → daydreaming → drowsiness → sleep**.',
          'EEG **brain waves** by frequency: **beta** (13–30 Hz, alert) > **alpha** (8–13 Hz, relaxed) > **theta** (~4–7 Hz, drowsy) > **delta** (0.5–3 Hz, deep sleep/coma).',
          'Frequency and arousal **track together** — fast waves = awake, slow waves = asleep.'
        ]
      },
      {
        section: 'The Sleep Cycle & Brain Waves',
        points: [
          'Sleep = **~90-min cycles** (4–5/night), ordered **N1 → N2 → N3 → N2 → REM**.',
          '**N1** = theta + hypnagogic hallucinations & hypnic jerks; **N2** = theta + **sleep spindles** + **K-complexes**; **N3** = **delta** slow-wave sleep (sleepwalking).',
          '**REM** = **paradoxical sleep**: awake-like beta/desynchronized EEG but **muscle atonia**; site of most dreaming and **memory consolidation**.'
        ]
      },
      {
        section: 'Circadian Rhythms',
        points: [
          '**Circadian rhythms** = ~24-hr cycles of sleep–wake, temperature, hormones.',
          '**Melatonin** (pineal) promotes sleep and is suppressed by **light**; **cortisol** rises in the morning to promote wakefulness.',
          'Rhythms shift with **age** (young = night owls; older = earlier).'
        ]
      },
      {
        section: 'Dreaming',
        points: [
          'Dreaming peaks in **REM**; reduced **prefrontal (logic) activity** makes bizarre dreams feel normal.',
          '**Freud:** dreams = unconscious wishes; **manifest** (plot) vs. **latent** (hidden meaning) content.',
          '**Activation–synthesis:** brainstem **activation** (random signals) + cortical **synthesis** → dreams may be meaningless.'
        ]
      },
      {
        section: 'Sleep Disorders',
        points: [
          '**Insomnia** (can\'t fall/stay asleep), **narcolepsy** (sleep attacks into REM; orexin/hypocretin loss), **sleep apnea** (breathing pauses; OSA vs. central).',
          '**Night terrors** and **somnambulism** are **N3 (NREM)** parasomnias, common in children.',
          'Sleep loss → ↑cortisol/appetite, obesity & depression risk; repay **sleep debt**. **Polysomnography** diagnoses apnea (≥5/hr).'
        ]
      },
      {
        section: 'Consciousness-Altering Drugs',
        points: [
          '**Depressants** (alcohol, barbiturates, **benzodiazepines→GABA/Cl⁻**) slow the CNS; **opiates** (heroin, morphine) act on **endorphin receptors** — a separate class.',
          '**Stimulants** (caffeine→adenosine block, nicotine, cocaine→DA/5-HT/NE, amphetamines→dopamine) intensify activity.',
          '**Hallucinogens** (LSD & ecstasy → serotonin; marijuana/**THC**) distort perception.'
        ]
      },
      {
        section: 'Drug Addiction & the Reward Pathway',
        points: [
          '**Dopamine** from the **VTA** → **NAcc, amygdala, hippocampus** (mesolimbic) + **prefrontal cortex**; rising dopamine lowers **serotonin**.',
          '**Tolerance** (receptor down-regulation → need more) and **withdrawal** (the crash) define dependence; faster **route of entry** = more addictive.',
          'Treatment: detox + meds (**methadone**, nicotine replacement), **CBT**, **motivational interviewing**, **12-step/AA**; **relapse** likelier with more addictive drugs.'
        ]
      }
    ],
    mnemonics: [
      '**Brain waves "BAT-D" (fast→slow / awake→asleep):** **B**eta (busy) → **A**lpha (at ease) → **T**heta (tired) → **D**elta (dead-asleep/deep).',
      '**Spindles & K-complexes = Stage 2 (N2).** If a question names either, the answer is N2.',
      '**Parasomnias live in N3:** sleepwalking, sleeptalking, and night terrors are slow-wave (delta) events — most common in children; nightmares, by contrast, occur in REM.',
      '**Melatonin = Moonlight, Cortisol = Crack of dawn** — mirror-image hormones across the 24-hour clock.',
      '**Freud dream content:** **Manifest = Manifested/visible plot; Latent = Lurking/hidden meaning.** Rival theory order: **Activation (brainstem) → Synthesis (cortex).**',
      '**Drug direction:** Depressants push **DOWN**, Stimulants push **UP**, Hallucinogens distort the **PICTURE**, Opiates kill **PAIN**.',
      '**Opiates ≠ depressants:** depressants work via **GABA**; opiates work via **endorphin** receptors.',
      '**Reward circuit "A HAND" (fed by VTA dopamine):** **A**mygdala (felt good), **H**ippocampus (remember), **A**ttention/prefrontal cortex, **N**ucleus accumbens (do it again).'
    ],
    keyConcepts: [
      '**Brain-wave frequency tracks arousal:** high-frequency **beta** = wide awake; low-frequency **delta** = deepest (N3) sleep. REM is the exception — an awake-like EEG paired with body paralysis.',
      '**N3 vs. REM:** N3 (delta) is the *deepest* sleep and the home of parasomnias; **REM** is the *most brain-active* sleep and the home of dreaming and memory consolidation. Don\'t conflate them.',
      '**Melatonin and cortisol oppose each other:** melatonin (pineal, suppressed by light) brings sleep; cortisol (morning) brings wakefulness — the hormonal engine of the circadian clock.',
      '**Drug classification hinges on mechanism/receptor:** depressants→GABA, opiates→endorphin, stimulants↑monoamines/block adenosine, hallucinogens→serotonin/perception.',
      '**Tolerance and withdrawal are two faces of receptor down-regulation** in the dopamine reward pathway; together with escalating use they define a substance use disorder.',
      '**Faster route of entry = greater addictive potential:** IV/inhalation (seconds) far outrank oral (~30 min) or transdermal (hours).'
    ],
    equations: []
  },

  questions: []
};
