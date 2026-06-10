// Behavioral Sciences Chapter 4 — Motivation, Emotion & Stress.
// Self-contained module (no JSON import): this subject has no figures and no practice questions.

export default {
  id: 4,
  title: 'Motivation, Emotion & Stress',
  subtitle: 'Theories of motivation · the three theories of emotion · limbic system & emotion · stress, appraisal & general adaptation syndrome · coping · attitudes & behavior',

  blocks: [
    /* ───────────────────────── 4.1 Theories of Motivation ───────────────────────── */
    {
      id: 's1', num: '4.1', title: 'Theories of Motivation',
      recap: `
- **Motivation** answers *why* a behavior occurs — the purpose or driving force behind it.
- **Instinct theory** (evolutionary): behavior is driven by innate, genetically programmed **instincts**.
- **Drive-reduction theory**: an unmet **need** creates an internal **drive** that pushes us to act and restore **homeostasis** (negative-feedback loop).
- **Arousal theory**: we act to reach an *optimal* level of arousal — the **Yerkes–Dodson law** (inverted-U) says performance peaks at **moderate** arousal.
- **Maslow's hierarchy of needs**: lower needs (physiological → safety → love → esteem → **self-actualization**) must be met before higher ones.
- **Self-determination theory (SDT)**: intrinsic motivation rests on **autonomy, competence, and relatedness**.
`,
      detail: `
#### What motivation is
**Motivation** is the purpose or driving force behind a behavior — it asks the question *"why?"*. Several schools of thought each explain part of the picture; in reality they overlap and complement one another.

#### Instinct theory (evolutionary)
The earliest view held that behavior is driven by innate **instincts** — fixed, genetically programmed patterns common to all members of a species. A newborn cries, sleeps, and feeds without being taught. The evolutionary angle is that these instinctive behaviors persisted because they improved **survival**.

#### Drive-reduction theory
A **need** is a lack or deprivation (e.g., the body lacks water). A need energizes an internal **drive** — an aroused, uncomfortable state (thirst) — that motivates behavior to satisfy the need and return the body to **homeostasis**.

- Drives that arise from **biological** needs (hunger, thirst, warmth) are **primary drives**.
- Drives learned through experience (e.g., the drive for money or approval) are **secondary drives**.
- This is a **negative-feedback** system: the drive *decreases* once the need is met.

:::keyconcept
**Drive-reduction = homeostasis.** A need (deprivation) → a drive (arousal) → behavior → need satisfied → drive reduced. It explains *push* behaviors that restore internal balance but struggles to explain why we *seek out* stimulation (riding a roller coaster reduces no biological need).
:::

#### Arousal theory and the Yerkes–Dodson law
**Arousal theory** says we are motivated to maintain an *optimal* level of arousal/alertness — not the lowest possible. This explains thrill-seeking: people pursue amusement parks and novelty to *raise* arousal toward their preferred set point.

The **Yerkes–Dodson law** describes the relationship between arousal and performance as an **inverted U (bell-shaped curve)**: performance is best at **moderate** arousal. Too little arousal → boredom/inattention; too much → anxiety/panic.

- The optimal arousal level is **lower for difficult/complex tasks** and **higher for simple/well-learned tasks**.

:::mnemonic
**Yerkes–Dodson = "Goldilocks arousal."** Not too low, not too high — *just right* (moderate) gives peak performance. Picture an upside-down **U**.
:::

#### Maslow's hierarchy of needs
**Maslow** proposed that needs are met in a fixed order, drawn as a **pyramid** from base to peak. A higher level is pursued only once the levels below it are reasonably satisfied.

| Level (bottom → top) | Need | Examples |
|---|---|---|
| 1 (base) | **Physiological** | Food, water, breathing, sleep, warmth — essential to survive |
| 2 | **Safety / security** | Safe employment, health, resources, property, shelter |
| 3 | **Love / belonging** | Intimacy, friendship, acceptance — social needs |
| 4 | **Esteem** | Confidence, achievement, recognition, respect |
| 5 (peak) | **Self-actualization** | Realizing one's full, unique potential — "becoming the most one can be" |

- The bottom four are **deficiency needs** (motivate when *unmet*); self-actualization is a **growth need**.
- **Self-actualization** differs from person to person and is rarely fully achieved (some estimates put it at ~1% of people).

:::mnemonic
**Maslow, bottom → top:** *"**P**lease **S**top **L**iking **E**veryone's **S**elfies"* → **P**hysiological · **S**afety · **L**ove · **E**steem · **S**elf-actualization.
:::

#### Incentive theory
**Incentive theory** explains motivation by *external* rewards rather than internal drives: a reward (tangible like a promotion, or intangible like job satisfaction) is presented after an action, associating a positive meaning with the behavior. Rewards given **immediately** make the behavior more likely to recur; absence of reward makes it less likely. **B. F. Skinner** is the figure most associated with this reward-based view.

#### Cognitive and self-determination theories
- **Cognitive theories**: thoughts, expectations, and the way we *interpret* situations drive behavior.
- **Self-determination theory (SDT)** holds that **intrinsic motivation** depends on three innate needs:

| SDT need | Meaning |
|---|---|
| **Autonomy** | Feeling in control of one's own choices and actions |
| **Competence** | Feeling effective and capable at a task |
| **Relatedness** | Feeling connected to and accepted by others |

:::keyconcept
**Intrinsic vs. extrinsic motivation.** *Intrinsic* = doing something for internal satisfaction (the activity itself is rewarding). *Extrinsic* = doing it for an external reward or to avoid punishment. Heavy extrinsic rewards can sometimes *undermine* pre-existing intrinsic motivation (the **overjustification effect**).
:::

#### Summary: the motivation theories at a glance

| Theory | Core idea | Driving force |
|---|---|---|
| **Instinct** | Behavior is innate, genetically programmed | Inborn instincts (survival value) |
| **Drive-reduction** | Needs create drives that we act to reduce | Internal tension → **homeostasis** |
| **Arousal (Yerkes–Dodson)** | We seek an *optimal* arousal level; performance peaks at moderate arousal | Optimal stimulation (inverted-U) |
| **Incentive** | External rewards pull behavior | External reward/incentive |
| **Cognitive** | Thoughts and expectations guide behavior | Mental appraisal |
| **Maslow's hierarchy** | Needs satisfied bottom-up | Ascending tiers of need |
| **Self-determination** | Intrinsic motivation from autonomy, competence, relatedness | Innate psychological needs |
`
    },

    /* ───────────────────────── 4.2 The Three Components & Universal Emotions ───────────────────────── */
    {
      id: 's2', num: '4.2', title: 'Components & Universal Emotions',
      recap: `
- An **emotion** is a subjective experience with **three components**: **physiological** (bodily arousal), **behavioral** (expression/action), and **cognitive** (subjective appraisal).
- Emotions are **temporary, involuntary**, vary in **intensity**, and can be positive or negative.
- **Paul Ekman**: **seven** (originally six) **universal emotions** recognized across all cultures — **happiness, sadness, fear, disgust, anger, surprise** (+ **contempt**).
- **Darwin** argued the ability to read emotion is an **innate**, evolved survival adaptation.
`,
      detail: `
#### Three components of emotion
An **emotion** is a subjective experience accompanied by **physiological**, **behavioral**, and **cognitive** changes — all interrelated.

| Component | What it is | Example (surprise/fear) |
|---|---|---|
| **Physiological** | Autonomic bodily arousal you don't consciously control | ↑ heart rate, muscles tense, ↑ temperature, sweating |
| **Behavioral** | Outward expression and behavior the emotion produces | Facial expression, body language, fight-or-flight action |
| **Cognitive** | The subjective interpretation/appraisal of the experience | Thoughts and labeling of the situation; varies person-to-person |

- The **cognitive** component varies most from person to person — cognition can both *result from* emotions and *cause* emotions.
- Emotions are **temporary**, can be **positive or negative**, vary in **intensity**, and are largely **involuntary**.

#### Universal emotions
**Paul Ekman** identified a small set of **universal emotions** whose facial expressions are recognized consistently across cultures: **happiness, sadness, fear, disgust, anger, and surprise** (the classic *six*; **contempt** is often added as a seventh).

**Charles Darwin** hypothesized that the ability to *produce and read* emotional expression is an **innate**, evolved ability that improved survival (e.g., quickly recognizing a threat or an ally).

:::mnemonic
**Ekman's universal emotions:** *"**S**ad **S**uds **F**ear **D**oing **A**ll **H**appiness"* — **S**adness, **S**urprise, **F**ear, **D**isgust, **A**nger, **H**appiness. (Contempt is the disputed seventh.)
:::

:::realworld
Because the core expressions are universal, a photograph of a fearful or disgusted face is read the same way by people who have never met — strong evidence that basic emotional expression is biologically wired rather than purely learned.
:::
`
    },

    /* ───────────────────────── 4.3 The Three Theories of Emotion ───────────────────────── */
    {
      id: 's3', num: '4.3', title: 'The Three Theories of Emotion',
      recap: `
- **James–Lange theory**: a stimulus triggers **physiological arousal first**, and we *infer* the emotion from that arousal. *"We are sad because we cry."* (physiological → emotion)
- **Cannon–Bard theory**: physiological arousal and the conscious **emotion occur simultaneously and independently** (physiological = emotion).
- **Schachter–Singer (two-factor) theory**: emotion requires **both** physiological arousal **and** a **cognitive label** of that arousal (physiological + cognition → emotion).
- The distinguishing question for the MCAT: *where do physiological arousal and cognition occur in the sequence?*
- **Lazarus** (often added): **cognitive appraisal comes first** and triggers both the emotion and the arousal (cognition → emotion + physiological).
`,
      detail: `
#### One question, three answers
Emotion has three pieces — **physiological**, **behavioral**, and **cognitive** responses. The classic theories disagree about **the order**: which comes first, and whether cognition is required.

#### James–Lange theory
A stimulus first causes a **physiological response** (and behavior); we then **perceive that bodily change and label it as an emotion**. The arousal precedes and *causes* the felt emotion.

- Classic line: *"We don't cry because we're sad; we're sad because we cry."*
- Example: you hold a cat → heart rate rises and you smile → *then* you feel happiness.
- Order: **physiological arousal → emotion** (arousal is followed by, not simultaneous with, the emotion).

#### Cannon–Bard theory
Cannon and Bard objected that many distinct emotions share **nearly identical** physiological responses (a racing heart accompanies both fear and excitement), so arousal alone can't tell us *which* emotion we feel. They proposed the **physiological response and the conscious emotion occur at the same time and independently**.

- The thalamus relays the stimulus simultaneously to the cortex (felt emotion) and to the body (arousal).
- Order: **physiological arousal = emotion** (simultaneous, parallel).

#### Schachter–Singer two-factor theory
This theory adds **cognition** as a required ingredient. We experience **physiological arousal**, then **cognitively interpret/label** the context — and *both together* produce the specific emotion. The same arousal can be labeled differently depending on the situation.

- Order: **physiological arousal + cognitive label → emotion**.
- Example: a pounding heart in a haunted house is labeled "fear"; the same pounding heart on a first date is labeled "attraction."

:::keyconcept
The **two-factor theory** is why it's called *Schachter–Singer*: the **two factors** are (1) **physiological arousal** and (2) the **cognitive interpretation** of that arousal. Neither alone is enough.
:::

#### The KEY comparison table
This is the single highest-yield table in the chapter. For each theory, know **where physiological arousal and cognition fall in the sequence**.

| Theory | Sequence | Does cognition come first? | One-line hook |
|---|---|---|---|
| **James–Lange** | stimulus → **physiological arousal** → emotion | No — arousal first, emotion inferred from it | *"I'm sad because I cry."* |
| **Cannon–Bard** | stimulus → **arousal *and* emotion simultaneously** | No — they happen together, independently | Arousal and emotion at the *same time* |
| **Schachter–Singer (two-factor)** | stimulus → **arousal + cognitive label** → emotion | **Yes — arousal *plus* interpretation are both required** | "It depends what I think is causing this." |
| **Lazarus** *(appraisal)* | stimulus → **cognitive appraisal** → emotion + arousal | **Yes — appraisal precedes everything** | Label the event *first*, then feel & arouse |

:::mnemonic
**Where does thinking happen?** **James–Lange** = body **first** (no thinking needed). **Cannon–Bard** = body and feeling **together**. **Schachter–Singer** = body **+** brain (you must *think/label* to know the emotion). **Lazarus** = brain **first** (appraisal before all). Order them by *how early cognition enters*: Lazarus (first) → Schachter–Singer (with arousal) → Cannon–Bard (parallel) → James–Lange (last/not required).
:::

:::realworld
A famous test of two-factor theory: subjects given adrenaline (unexplained arousal) reported feeling whatever emotion a confederate around them modeled — euphoria with a happy confederate, anger with an irritated one. Same arousal, different *labels*, different emotions — exactly what Schachter–Singer predicts.
:::
`
    },

    /* ───────────────────────── 4.4 The Limbic System & Emotion ───────────────────────── */
    {
      id: 's4', num: '4.4', title: 'The Limbic System & Emotion',
      recap: `
- The **limbic system** governs emotion and emotional memory — mnemonic **"hippo wearing a HAT": H**ypothalamus, **A**mygdala, **T**halamus, **H**ippocampus.
- **Amygdala** = the fear/aggression center; conductor of emotional experience (bilateral loss → **Klüver–Bucy syndrome**).
- **Hippocampus** consolidates new **long-term memories**, including emotional ones.
- **Thalamus** = sensory relay (all senses route through it **except smell**); **hypothalamus** controls the **ANS** and endocrine system.
- **Left hemisphere** ↔ more **positive** emotion; **right hemisphere** ↔ more **negative** emotion. The **prefrontal cortex** handles executive control and emotional regulation (**Phineas Gage**).
`,
      detail: `
#### The limbic system
The **limbic system** is responsible for emotion and for storing/retrieving memories, especially those tied to emotion.

:::mnemonic
**A hippo wearing a HAT.** **H**ypothalamus · **A**mygdala · **T**halamus · **H**ippocampus — the core limbic structures.
:::

| Structure | Role in emotion |
|---|---|
| **Thalamus** | **Sensory relay station** — everything you hear, see, taste, and touch routes through the thalamus to the cortex. **Smell is the only sense that bypasses the thalamus**, projecting straight to areas near the amygdala. |
| **Amygdala** | The **aggression / fear center**. Stimulation → anger, violence, fear, anxiety; destruction → a mellowing effect. It is the *conductor* of emotional experience, linking the hypothalamus (physiology) and prefrontal cortex (behavior). |
| **Hippocampus** | Forms **new memories**, converting short-term to long-term memory. If destroyed, old memories remain but **new** ones can't form. Stores emotion-linked memories. |
| **Hypothalamus** | Regulates the **autonomic nervous system** (fight-or-flight vs. rest-and-digest) and controls the **endocrine system** via the pituitary. |

:::realworld
**Klüver–Bucy syndrome** results from **bilateral destruction of the amygdala**: **hyperorality** (putting objects in the mouth), **hypersexuality**, and **disinhibited** behavior — vivid proof of the amygdala's role in regulating fear, aggression, and impulse.
:::

#### Cerebral hemispheres and emotion
The cerebral cortex contributes to emotion in two ways the MCAT likes:

- **Lateralization:** **positive** emotions evoke more **left**-hemisphere activity; **negative** emotions evoke more **right**-hemisphere activity. More social, cheerful people show greater left-hemisphere activity; more withdrawn, depressed, or timid people show greater right-hemisphere activity.

#### Prefrontal cortex
The **prefrontal cortex** handles **higher-order executive functions** — planning, problem-solving, decision-making, and appropriate social behavior — and helps **regulate (dampen) emotion**. It is also tied to **emotional memory** through its connection with the amygdala.

:::realworld
**Phineas Gage** survived an iron rod blasting through his **prefrontal cortex**. He lived, but became rude, impulsive, and socially inappropriate — landmark evidence that the prefrontal cortex governs **personality, impulse control, and executive function**.
:::

#### Autonomic nervous system: physiological markers of emotion
The **physiological** component of emotion is produced by the **autonomic nervous system (ANS)** — changes you can't consciously control. It has two opposing branches:

| | **Sympathetic** ("fight-or-flight") | **Parasympathetic** ("rest-and-digest") |
|---|---|---|
| Pupils | **Dilate** | **Constrict** |
| Heart & respiratory rate | **Increase** | **Decrease** |
| Salivation | **Decreases** | Increases |
| Digestion | **Decreases** | **Increases** |
| Glucose / adrenaline | ↑ glucose release, ↑ adrenaline | ↑ glucose **storage**, ↓ adrenaline |

:::keyconcept
The **amygdala** is the hub: it communicates the *felt* emotion to the **hypothalamus** (which fires the **sympathetic ANS** for arousal) and to the **prefrontal cortex** (which shapes behavior and regulation). This loop is the neural substrate beneath all three theories of emotion.
:::
`
    },

    /* ───────────────────────── 4.5 Stress: Appraisal, Stressors & GAS ───────────────────────── */
    {
      id: 's5', num: '4.5', title: 'Stress: Appraisal, Stressors & GAS',
      recap: `
- **Stress** = the *process* encompassing both a **stressor** and the **stress reaction**; it arises more from **how we interpret** events than the events themselves (**appraisal theory**).
- **Primary appraisal**: is the event **irrelevant, benign/positive, or stressful?** **Secondary appraisal**: can I cope with the harm/threat, and how (challenge)?
- **Four stressor categories**: **significant life changes, catastrophic events, daily hassles, ambient stressors.**
- Acute stress triggers the **sympathetic** "fight-or-flight" response plus an **endocrine** response (**epinephrine, norepinephrine, cortisol**); a social alternative is the **tend-and-befriend** response (**oxytocin**).
- **General adaptation syndrome (GAS)** has **three stages: alarm → resistance → exhaustion** (Hans Selye).
`,
      detail: `
#### What stress is
Stress involves two parts: a **stressor** (the threat or demand — e.g., a charging dog) and the **stress reaction** (the body's physical and emotional response). **Stress** is the **process** that encompasses both.

#### Appraisal theory of stress
Stress arises **less from the actual event and more from our *interpretation* of it** — the **appraisal theory of stress**. Lazarus described two stages:

| Appraisal | Question it answers | Outcomes |
|---|---|---|
| **Primary appraisal** | "Is this situation a threat *to me* right now?" | Classified as **irrelevant**, **benign/positive**, or **stressful**. A stressful verdict triggers secondary appraisal. |
| **Secondary appraisal** | "Can I handle it, and how?" | Evaluation of **harm** (damage already done), **threat** (potential future damage), and **challenge** (the potential to grow/overcome) plus one's **resources/preparedness** to cope. |

#### The four categories of stressors

| Stressor type | Description | Examples |
|---|---|---|
| **Significant life changes** | Major transitions, good or bad | Death of a loved one, job loss, having children, leaving home |
| **Catastrophic events** | Sudden, large-scale, unpredictable | Natural disasters (cyclone), war, terrorism |
| **Daily hassles** | Minor, frequent irritations | Long lines, lost keys, traffic |
| **Ambient stressors** | Pervasive environmental conditions, hard to control and often unnoticed | Pollution, noise, crowding |

:::keyconcept
**Ambient stressors** are sneaky: they are perceivable but **difficult to control** and can harm us **without our conscious awareness** (chronic noise or pollution raising baseline stress over time).
:::

#### Physiological response to a stressor
Threats trigger the **sympathetic nervous system** ("fight-or-flight"):

- **↑ heart rate and respiration** (more energy + oxygen),
- **↑ peripheral vasoconstriction** (blood shunted to the core),
- **digestion and immune activity shut down** temporarily.

An **endocrine response** accompanies it: the **adrenal glands** release **epinephrine** and **norepinephrine** (fast) plus **cortisol** (sustained "stress hormone").

A social alternative is the **tend-and-befriend** response: rather than fight or flee, individuals seek out and protect their social support network. **Oxytocin** mediates this bonding response; because oxytocin is closely linked to estrogen, tend-and-befriend tends to be stronger in women.

#### General adaptation syndrome (GAS)
**Hans Selye** described the body's response to chronic stress as the **general adaptation syndrome**, a sequence of **three stages**:

| Stage | What happens |
|---|---|
| **1. Alarm** | Stress kicks in; the **sympathetic** system activates (heart races) — the initial fight-or-flight mobilization. |
| **2. Resistance** | The body sustains the response (fleeing, coping, huddling); continued release of **cortisol** keeps arousal high. |
| **3. Exhaustion** | If resistance isn't followed by recovery, **tissues become damaged** and the body grows **susceptible to illness** — reserves are depleted. |

:::mnemonic
**GAS stages = "A·R·E" you stressed?** → **A**larm → **R**esistance → **E**xhaustion. (And the response literally produces *gas/energy* mobilization.)
:::

#### Effects of chronic stress
- **Cardiovascular:** sustained ↑ blood pressure stiffens and damages vessels → **hypertension**, **vascular disease**, and (in the coronary arteries) **coronary artery disease**.
- **Metabolic:** **cortisol** and **glucagon** convert glycogen to glucose; unused glucose during *psychosocial* stress can worsen conditions like **diabetes**.
- **Reproductive:** the energetically expensive reproductive system is suppressed during stress (and stress is a common cause of impotence).
- **Immune:** chronic stress promotes **inflammation** and can lead the immune system to attack the body's own tissue.
- **Behavioral/brain:** the **hippocampus** (learning/memory) and **frontal cortex** (impulse control, reasoning) are dense in **glucocorticoid receptors** and can **atrophy** under chronic stress.
`
    },

    /* ───────────────────────── 4.6 Coping & Stress Management ───────────────────────── */
    {
      id: 's6', num: '4.6', title: 'Coping & Stress Management',
      recap: `
- Chronic stress feeds **depression** (with **anhedonia**), **learned helplessness**, **anger** (**Type A** personalities are more heart-disease prone than **Type B**), **anxiety** (amygdala-driven), and **addiction**.
- **Coping resources**: **perceived control**, **optimism**, and especially **social support**.
- **Stress-management techniques**: **exercise, meditation, religious/faith practice, and cognitive flexibility** (reappraisal).
`,
      detail: `
#### Behavioral and emotional effects of stress
- **Depression:** a major emotional response; its hallmark is **anhedonia** — the inability to feel pleasure — which makes a person perceive even more events as stressful.
- **Learned helplessness:** after repeatedly losing control over outcomes, a person *learns* they have no control and stops trying to cope, abandoning otherwise available coping strategies.
- **Anger:** stress raises vulnerability to heart disease. **Type A** personalities (competitive, easily angered, time-pressured) suffer more heart attacks than relaxed **Type B** personalities.
- **Anxiety:** centered on the **amygdala** (the seat of fear and phobia), stress makes us perceive more things as threatening.
- **Addiction:** stress drives maladaptive coping (alcohol, tobacco). Impaired **frontal-cortex** reasoning worsens judgment, increasing the odds of unhealthy coping.

:::realworld
**Learned helplessness** was demonstrated when animals given inescapable shocks later failed to escape even when escape became possible — a powerful model for human depression and a reminder that *perceived* (not just actual) lack of control drives stress.
:::

#### Coping resources
Three psychological resources buffer stress:

| Resource | Why it helps |
|---|---|
| **Perceived control** | Lack of control is consistently linked to higher stress; reclaiming control in any area of life lowers it. |
| **Optimism** | A positive outlook reframes threats as manageable challenges. |
| **Social support** | One of the **best** buffers — it reassures us we're not alone, which in turn boosts perceived control and optimism. |

#### Stress-management techniques

| Technique | Mechanism |
|---|---|
| **Exercise** | Regular activity restores a sense of control and discharges arousal. |
| **Meditation** | Lowers heart rate, blood pressure, and cholesterol. |
| **Religious belief / faith** | Often accompanies healthier lifestyle choices and built-in social support. |
| **Cognitive flexibility** | Reappraising a situation (often with a counselor) changes how stressful we perceive it to be. |

:::keyconcept
**Cognitive flexibility = reappraisal.** Because stress flows from *appraisal* (4.5), the most powerful lever is changing the *interpretation* of the stressor — not necessarily the stressor itself. This ties coping directly back to appraisal theory.
:::
`
    },

    /* ───────────────────────── 4.7 Attitudes & Behavior ───────────────────────── */
    {
      id: 's7', num: '4.7', title: 'Attitudes & Behavior',
      recap: `
- An **attitude** is a *learned* tendency to evaluate something a certain way; the **ABC model** has **A**ffective (emotional), **B**ehavioral, and **C**ognitive components.
- **Attitudes → behavior** theories: **theory of planned behavior**, **attitude-to-behavior process model**, **prototype-willingness model**, and the **elaboration likelihood model** (central vs. peripheral routes).
- **Behavior → attitudes**: **foot-in-the-door**, **role-playing** (Zimbardo), public declarations, and **justification of effort**.
- **Cognitive dissonance**: conflicting cognitions create discomfort we resolve by **modifying, trivializing, adding, or denying** cognitions.
- Attitudes best predict behavior when social pressure is low, behavior is **aggregated**, the attitude is **specific** to the action, and the attitude is **strong/self-reflective**.
`,
      detail: `
#### What an attitude is — the ABC model
An **attitude** is a **learned tendency to evaluate** something (a person, event, or object) in a particular way. It has three components — the **ABC model of attitude**:

| Component | Meaning | "I love yoga…" example |
|---|---|---|
| **A — Affective** | The **emotional** feeling toward the object | "I **love** yoga" |
| **B — Behavioral** | How we **act** toward the object | "I will **go to class** each week" |
| **C — Cognitive** | The **thoughts/beliefs/knowledge** we hold | "I **believe** it helps me relax" |

#### How attitudes influence behavior
Four theories address how attitudes shape behavior:

| Theory | Core mechanism |
|---|---|
| **Theory of planned behavior** | We weigh **intentions** before acting; intentions rest on (1) **attitudes** toward the behavior, (2) **subjective norms** (what we think others think), and (3) **perceived behavioral control**. |
| **Attitude-to-behavior process model** | An **event triggers** an attitude, and that attitude **plus our knowledge** of the situation determines behavior. |
| **Prototype-willingness model** | Behavior is a function of **past behavior, attitudes, subjective norms, intentions, willingness** to act, and **prototypes/models** we imitate. |
| **Elaboration likelihood model (persuasion)** | Persuasion travels two routes: the **central route** (depends on the **quality of arguments**) and the **peripheral route** (superficial cues — speaker **attractiveness, status**, non-verbal signals). |

:::keyconcept
**When do attitudes best predict behavior?** When **social pressure is reduced** (e.g., a secret ballot), when behavior is observed as a **general pattern** rather than one instance (**principle of aggregation**), when the attitude concerns a **specific** action, and when the attitude is **strong** and reinforced through **self-reflection**.
:::

#### How behavior influences attitudes
The arrow also runs backward — behavior can reshape attitudes:

- **Foot-in-the-door phenomenon:** agreeing to a *small* request makes us more likely to later agree to a much *larger* one (the door is gradually pushed open — also a basis of "brainwashing").
- **Role-playing:** adopting a new role feels fake at first, but over time the acting becomes genuine and the attitude shifts to match — demonstrated by **Zimbardo's Stanford prison experiment**.
- **Public declarations:** we follow through more reliably on what we've announced to others.
- **Justification of effort:** after investing heavy effort in something we didn't enjoy, we adjust our attitude to value it (e.g., loving a grueling program *because* it was hard).

#### Cognitive dissonance theory
**Cognitive dissonance** is the discomfort of holding **two or more conflicting cognitions** (ideas, beliefs, values, or emotional reactions) — or when our **attitudes and behaviors don't align**. People strive for **harmony** among thoughts, words, and actions, so we reduce dissonance in one of four ways:

| Strategy | Smoker example |
|---|---|
| **1. Modify** a cognition | "I really don't smoke *that* much." |
| **2. Trivialize** | "The evidence linking smoking to cancer is weak." |
| **3. Add** new cognitions | "I exercise so much it doesn't matter." |
| **4. Deny** the facts | "Smoking and cancer aren't actually linked." |

:::mnemonic
**Reducing dissonance — "MTAD":** **M**odify · **T**rivialize · **A**dd · **D**eny. All four are attempts to restore internal *harmony* between conflicting cognitions.
:::

:::realworld
Classic dissonance study (Festinger): people paid only **\$1** to lie that a boring task was fun later *rated the task as more enjoyable* than people paid **\$20**. With no large external justification, they resolved the dissonance by **changing their attitude** to match their behavior.
:::

#### The situational approach and attribution
**Social psychology** emphasizes the power of **changing environmental circumstances** over stable personality traits. The **situational approach** holds that people behave differently depending on the situation (an *external* rather than internal cause), so behavior from a single situation is a poor predictor.

**Attribution** is the process of inferring the *cause* of a behavior. Three cues distinguish situational (external) from dispositional (internal) causes:

| Cue | Question |
|---|---|
| **Consistency** | Does the person usually behave this way? |
| **Distinctiveness** | Does the person behave differently in different situations? |
| **Consensus** | Do others behave similarly in this situation? |

- **High** distinctiveness **and** consensus → the **situation** is driving the behavior (external).
- **High consistency across all situations** → an **internal/dispositional** cause.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Theories of Motivation',
        points: [
          '**Instinct theory:** behavior is driven by innate, evolved instincts.',
          '**Drive-reduction theory:** a **need** creates a **drive** we act to reduce, restoring **homeostasis** (negative feedback).',
          '**Arousal theory / Yerkes–Dodson law:** performance peaks at **moderate** arousal (inverted-U); optimal arousal is lower for hard tasks.',
          '**Maslow:** needs satisfied bottom-up — physiological → safety → love → esteem → **self-actualization**.',
          '**Self-determination theory:** intrinsic motivation = **autonomy + competence + relatedness**; incentive theory stresses external rewards.'
        ]
      },
      {
        section: 'Components & Universal Emotions',
        points: [
          'Emotion has **three components**: **physiological** (arousal), **behavioral** (expression), **cognitive** (appraisal).',
          'Emotions are temporary, involuntary, vary in intensity, and can be positive or negative.',
          '**Ekman:** six (often seven) **universal emotions** recognized across all cultures; **Darwin** saw emotion-reading as an innate survival adaptation.'
        ]
      },
      {
        section: 'The Three Theories of Emotion',
        points: [
          '**James–Lange:** physiological arousal **first** → emotion inferred from it.',
          '**Cannon–Bard:** arousal and emotion occur **simultaneously and independently**.',
          '**Schachter–Singer (two-factor):** **arousal + cognitive label** are *both* required → emotion.',
          '**Lazarus (appraisal):** **cognitive appraisal first** → emotion *and* arousal.'
        ]
      },
      {
        section: 'The Limbic System & Emotion',
        points: [
          'Limbic structures (**"hippo wearing a HAT"**): **hypothalamus, amygdala, thalamus, hippocampus**.',
          '**Amygdala** = fear/aggression hub (bilateral loss → **Klüver–Bucy**); **hippocampus** = new memory consolidation; **thalamus** = sensory relay (smell bypasses it); **hypothalamus** = ANS + endocrine control.',
          'Left hemisphere ↔ positive emotion, right ↔ negative; **prefrontal cortex** = executive control & emotion regulation (**Phineas Gage**).'
        ]
      },
      {
        section: 'Stress: Appraisal, Stressors & GAS',
        points: [
          '**Stress** = the process of stressor + reaction; **appraisal theory** — interpretation matters more than the event.',
          '**Primary appraisal** (irrelevant / benign / stressful) then **secondary appraisal** (harm, threat, challenge + resources).',
          'Four stressor types: **significant life changes, catastrophic events, daily hassles, ambient stressors.**',
          'Acute stress → **sympathetic** fight-or-flight + endocrine (**epinephrine, norepinephrine, cortisol**); social alternative = **tend-and-befriend** (oxytocin).',
          '**General adaptation syndrome:** **alarm → resistance → exhaustion** (Selye).'
        ]
      },
      {
        section: 'Coping & Stress Management',
        points: [
          'Chronic-stress effects: **depression (anhedonia), learned helplessness, anger (Type A > Type B), anxiety, addiction**; hippocampus & frontal cortex atrophy.',
          'Coping resources: **perceived control, optimism, social support**.',
          'Management: **exercise, meditation, faith, cognitive flexibility (reappraisal)**.'
        ]
      },
      {
        section: 'Attitudes & Behavior',
        points: [
          '**ABC model** of attitude: **A**ffective, **B**ehavioral, **C**ognitive.',
          'Attitudes → behavior: **theory of planned behavior, attitude-to-behavior process model, prototype-willingness model, elaboration likelihood model** (central vs. peripheral).',
          'Behavior → attitudes: **foot-in-the-door, role-playing (Zimbardo), public declarations, justification of effort**.',
          '**Cognitive dissonance** resolved by **M**odify / **T**rivialize / **A**dd / **D**eny.',
          'Attitudes predict behavior best when social pressure is low, behavior is **aggregated**, the attitude is **specific**, and it is **strong/self-reflective**.'
        ]
      }
    ],
    mnemonics: [
      '**Maslow (bottom → top):** *"Please Stop Liking Everyone\'s Selfies"* → **P**hysiological · **S**afety · **L**ove · **E**steem · **S**elf-actualization.',
      '**Yerkes–Dodson = "Goldilocks arousal":** not too low, not too high — moderate arousal gives peak performance (inverted-U).',
      '**Ekman\'s universal emotions:** Sadness, Surprise, Fear, Disgust, Anger, Happiness (+ contempt as the disputed 7th).',
      '**Emotion theories — when does cognition enter?** James–Lange = body first (no cognition) · Cannon–Bard = body & feeling together · Schachter–Singer = body **+** brain (label required) · Lazarus = brain first (appraisal).',
      '**Limbic system = "a hippo wearing a HAT":** **H**ypothalamus, **A**mygdala, **T**halamus, **H**ippocampus.',
      '**GAS stages = "A·R·E" you stressed?** **A**larm → **R**esistance → **E**xhaustion.',
      '**Reducing cognitive dissonance = "MTAD":** **M**odify · **T**rivialize · **A**dd · **D**eny.',
      '**Attitude = "ABC":** **A**ffective (feel) · **B**ehavioral (act) · **C**ognitive (think).'
    ],
    keyConcepts: [
      'The **three emotion theories** differ only in *sequence and the role of cognition*: arousal-first (**James–Lange**), arousal-and-emotion-together (**Cannon–Bard**), or arousal-**plus**-cognitive-label (**Schachter–Singer two-factor**).',
      '**Stress is about appraisal:** the same event is stressful or not depending on **primary** (threat?) and **secondary** (can I cope?) appraisal — which is why **cognitive reappraisal** is the most powerful coping tool.',
      'The **general adaptation syndrome** (alarm → resistance → exhaustion) shows how an adaptive **sympathetic + cortisol** response becomes damaging (tissue breakdown, illness) when stress is chronic.',
      'The **amygdala** is the emotional hub, relaying to the **hypothalamus** (physiology/ANS) and **prefrontal cortex** (behavior/regulation) — the limbic circuit behind every theory of emotion.',
      'Attitudes and behavior influence each other **bidirectionally**; **cognitive dissonance** explains why people change attitudes to match behavior they\'ve already performed.',
      '**Maslow\'s hierarchy** is a *deficiency-then-growth* model: lower needs dominate motivation until met, freeing energy for **self-actualization** at the top.'
    ],
    equations: []
  },

  questions: []
};
