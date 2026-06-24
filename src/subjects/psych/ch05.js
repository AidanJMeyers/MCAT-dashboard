// Chapter 5 — Identity, Personality & Psychological Disorders.
// Self-contained Behavioral Sciences module (no JSON import): no figures, no questions.
// Grounded in scratch_psych/ch05.md, supplemented with standard high-yield MCAT facts
// (psychoanalytic & humanistic personality theory; Erikson/Kohlberg/Vygotsky; DSM detail).

export default {
  id: 5,
  title: 'Identity, Personality & Psychological Disorders',
  subtitle: 'Theories of personality (psychoanalytic · humanistic · trait/Big Five · social-cognitive · biological) · identity & moral development · self-concept · psychological disorders by DSM category · biological basis of depression & schizophrenia',

  blocks: [
    /* ───────────────── 5.1 Psychoanalytic & Humanistic Personality ───────────────── */
    {
      id: 's1', num: '5.1', title: 'Psychoanalytic & Humanistic Theories of Personality',
      recap: `
- **Personality** = the stable set of thoughts, feelings, and behaviors that make a person unique. Feeling fulfilled requires **congruency** between the **self-concept** and one's actions.
- **Freud's psychoanalytic theory**: personality is driven by **unconscious** conflict among the **id** (pleasure principle), **ego** (reality principle), and **superego** (morality/ideals).
- **Defense mechanisms** (e.g., **repression**, **projection**, **displacement**) are the ego's unconscious tools to reduce **anxiety** from id–superego conflict.
- **Psychosexual stages** (**O**ral → **A**nal → **P**hallic → **L**atency → **G**enital): an unresolved stage conflict causes **fixation** — the "what goes wrong" (e.g., **oral** → smoking/dependency; **anal-retentive** → rigid/controlling).
- **Humanistic** theories (**Maslow**, **Rogers**) are optimistic: people strive toward **self-actualization**; healthy personality = **congruence** between the real self and ideal self, fostered by **unconditional positive regard**.
`,
      detail: `
#### What is personality?
**Personality** is the unique, relatively stable pattern of thoughts, feelings, and behaviors a person shows across situations. A recurring MCAT theme is the importance of **congruency** between your **self-concept** (how you see yourself) and your actions — incongruence breeds distress, while alignment supports a feeling of fulfillment.

#### Freud's psychoanalytic theory
**Sigmund Freud** argued that personality is shaped by **unconscious** drives and unresolved childhood conflict. He divided the mind into three interacting structures:

| Structure | Principle it follows | Role |
|---|---|---|
| **Id** | **Pleasure principle** | Primal, unconscious drives (sex, aggression, hunger); demands **immediate gratification**. Operates by **primary process** (fantasy, wish-fulfillment). |
| **Ego** | **Reality principle** | The mediator; satisfies the id realistically through **secondary process** thinking. Largely conscious. |
| **Superego** | **Idealistic / morality principle** | The internalized conscience and **ego-ideal**; strives for perfection, produces guilt. |

The **ego** sits between the demanding **id** and the moralizing **superego**. When their conflict generates **anxiety**, the ego deploys **defense mechanisms** (next section).

:::mnemonic
**"I want it, but is it real, and is it right?"** → **I**d = *I want it now* (pleasure) · **E**go = *is it realistic?* (reality) · **S**uperego = *is it right?* (morality).
:::

#### Freud's psychosexual stages of development
Freud proposed that personality forms across **five psychosexual stages**, each centered on a **libidinal (pleasure) focus** on a different erogenous zone. When the conflict of a stage is left **unresolved** — through **over- or under-gratification** — the result is **fixation**: libido stays "stuck" at that stage and produces characteristic adult traits. **Fixation is the "what goes wrong" of this theory** — and under stress, an adult may **regress** to a fixated stage's behaviors.

| Stage | Age | Pleasure focus / task | Fixation → what goes wrong |
|---|---|---|---|
| **Oral** | 0–1 yr | Mouth — sucking, feeding; dependency & trust | **Oral fixation** → smoking, overeating, nail-biting, excessive **dependency**; "**oral-aggressive**" sarcasm/verbal hostility |
| **Anal** | 1–3 yr | Bowel/bladder control; **toilet training** | **Anal-retentive** → obsessive orderliness, stinginess, rigidity; **anal-expulsive** → messiness, recklessness, poor self-control |
| **Phallic** | 3–6 yr | Genitals; the **Oedipal conflict** (boys) / **Electra conflict** (girls); identification with the same-sex parent | Unresolved → vanity, over-ambition, trouble with **authority** and **intimate relationships**; failure to form a healthy gender identity / superego |
| **Latency** | 6 yr–puberty | Libido **dormant**; energy into school, friendships, skills | A consolidation period — **no specific fixation** |
| **Genital** | puberty + | Mature sexual interest; capacity for **love and work** | Reached only if earlier conflicts resolved; otherwise prior **fixations resurface** as adult dysfunction |

:::keyconcept
**Fixation = the failure mode.** Over- or under-gratification at a stage leaves libido invested there. That's why an **oral** fixation surfaces as smoking/overeating/dependency and an **anal-retentive** fixation as perfectionistic, controlling rigidity. Under stress, the ego may use **regression** (a defense mechanism, 5.2) to retreat to that stage.
:::

:::mnemonic
Stage order — **"Old Age Pensioners Love Grandkids"** → **O**ral · **A**nal · **P**hallic · **L**atency · **G**enital.
:::

:::realworld
Freud's psychosexual stages are **not empirically supported** and aren't how development is understood today — but the MCAT still tests the **stage names, ages, foci, and the classic fixations**, and likes to **contrast them with Erikson's psychosocial stages** (5.5), which span the entire lifespan and are framed around **social crises** rather than erogenous zones.
:::

##### The psychoanalytic theory is the structural opposite of behaviorism
Psychoanalytic theory focuses on **internal, mental/emotional** life — making it the most direct contrast to **behaviorism**, which studies only **observable, measurable** behavior (covered in 5.3).

#### Humanistic (phenomenological) theories
Humanistic theorists rejected Freud's pessimism, emphasizing **free will** and the drive toward growth.

- **Abraham Maslow** — proposed the **hierarchy of needs**: physiological → safety → love/belonging → esteem → **self-actualization**. Lower needs must be substantially met before higher ones motivate behavior; the peak is **self-actualization** (realizing one's full potential).
- **Carl Rogers** — the healthy personality has **congruence** between the **real self** and the **ideal self**. Rogers used **client-centered (person-centered) therapy** and stressed **unconditional positive regard** — accepting a person regardless of behavior — as the soil for growth. Mismatch (incongruence) between real and ideal self causes distress.

:::keyconcept
**Congruence** is the unifying thread of humanistic theory and of this chapter's opening idea: psychological health flows from alignment between **self-concept**, the **ideal self**, and one's actual behavior.
:::
`
    },

    /* ───────────────── 5.2 Defense Mechanisms ───────────────── */
    {
      id: 's2', num: '5.2', title: 'Ego Defense Mechanisms',
      recap: `
- **Defense mechanisms** are **unconscious** strategies the ego uses to reduce **anxiety** by distorting reality.
- **Repression** (forgetting) is considered the basic mechanism underlying many of the others.
- High-yield set: **repression, suppression, regression, reaction formation, projection, rationalization, displacement, sublimation**.
- **Sublimation** (channeling unacceptable urges into socially acceptable behavior) is regarded as the only **mature/healthy** defense.
`,
      detail: `
#### Why they exist
When the **id** and **superego** clash, the resulting **anxiety** threatens the **ego**. **Defense mechanisms** are the ego's **unconscious** responses that protect against this anxiety by denying or distorting reality. They are normal in moderation; overuse signals maladjustment.

| Defense mechanism | What it does | Example |
|---|---|---|
| **Repression** | Unconsciously **forces** anxiety-provoking thoughts out of awareness (the basic, foundational defense) | No memory of a traumatic childhood event |
| **Suppression** | **Deliberate, conscious** form of forgetting/setting aside (the one "conscious" defense) | Choosing not to think about an exam until tomorrow |
| **Regression** | Reverting to **earlier, childlike** behaviors under stress | An adult throwing a tantrum |
| **Reaction formation** | Expressing the **opposite** of an unacceptable impulse | Treating someone you dislike with excessive kindness |
| **Projection** | Attributing **your own** unacceptable feelings to **someone else** | "He hates me" when you actually dislike him |
| **Rationalization** | Justifying behavior with **acceptable but false** reasons | "I failed because the test was unfair" |
| **Displacement** | Redirecting an impulse from a threatening target to a **safer** one | Yelling at your dog after your boss yells at you |
| **Sublimation** | Channeling unacceptable urges into **socially acceptable** outlets | Channeling aggression into competitive sports |

:::mnemonic
**Projection** vs. **displacement**: **pro**jection puts your feeling **on a person** ("you're the angry one"); **displacement** moves the **action onto a safer target** (kick the dog, not the boss).
:::

:::keyconcept
**Sublimation** is widely treated as the only **mature/healthy** defense because the unacceptable energy is transformed into something **constructive**. **Suppression** is the only defense that is **conscious and deliberate**; all the others operate **unconsciously**.
:::
`
    },

    /* ───────────────── 5.3 Behaviorist, Trait & Social-Cognitive ───────────────── */
    {
      id: 's3', num: '5.3', title: 'Behaviorist, Trait & Social-Cognitive Theories',
      recap: `
- **Behaviorist** theory: personality is **learned** behavior shaped entirely by the **environment** — deterministic, "blank slate." **Skinner** = operant conditioning; **Pavlov** = classical conditioning.
- **Trait** theory describes stable predispositions: **Allport** (cardinal/central/secondary), **Cattell** (16 PF), **Eysenck** (3 dimensions), and the **Big Five (OCEAN)**.
- **Cognitive theory** bridges behaviorism and other approaches by treating **thinking as a behavior**.
- **Social-cognitive theory** (**Bandura**) emphasizes the **interaction** of person, behavior, and environment, including **observational learning** (**Bobo doll**). Note the **learning–performance distinction**.
`,
      detail: `
#### Behaviorist theory
The **behaviorist theory** holds that personality is the result of **learned behavior patterns** shaped by a person's **environment**. It is **deterministic** — people begin as "blank slates" and the environment fully determines their behavior. Behaviorism focuses strictly on **observable, measurable behavior**, not internal mental/emotional states (the opposite emphasis of **psychoanalytic** theory).

- **B. F. Skinner** — a strict behaviorist associated with **operant conditioning**, using **rewards and punishments** to increase or decrease a behavior.
- **Ivan Pavlov** — associated with **classical conditioning** (the salivating-dog experiment): pairing a **neutral stimulus** with an **unconditioned stimulus** to trigger an involuntary (conditioned) response. Because our **response tendencies** can change, personality keeps developing across the entire lifespan.

**Cognitive theory** acts as a **bridge** between classical behaviorism and approaches like psychoanalytic theory, because it treats **thinking itself as a behavior**.

#### Trait theory
A **personality trait** is a relatively **stable predisposition** to behave a certain way; the combination of a person's traits forms their personality. **Surface traits** are evident from behavior, while **source traits** are the fewer, more abstract factors that underlie personality.

| Theorist | Core idea | Method |
|---|---|---|
| **Gordon Allport** | ~4,500 trait words → three categories: **cardinal** (dominant; direct most activity), **central** (general; e.g., honesty, shyness), **secondary** (preferences/attitudes; e.g., love of modern art) | Did **not** use factor analysis |
| **Raymond Cattell** | **16 essential traits** → the **16 Personality Factor (16 PF)** questionnaire | **Factor analysis** |
| **Hans Eysenck** | **3 dimensions** everyone shares but expresses to different degrees: **extroversion**, **neuroticism** (emotional stability), **psychoticism** (distortion of reality; not necessarily present in all) | **Factor analysis** |
| **Five-Factor Model (Big Five)** | Five traits found across **all populations** | **Factor analysis** |

##### The Big Five — OCEAN
The **Five-Factor Model** is the dominant modern trait framework. Each trait is a continuum:

| Letter | Trait | High end vs. low end |
|---|---|---|
| **O** | **Openness** | Imaginative, independent vs. practical, conforming |
| **C** | **Conscientiousness** | Careful, disciplined, organized vs. careless, impulsive |
| **E** | **Extroversion** | Outgoing, sociable vs. reserved, solitary |
| **A** | **Agreeableness** | Kind, appreciative vs. cold, unfriendly |
| **N** | **Neuroticism** | Anxious, emotionally unstable vs. calm, secure |

:::mnemonic
The Big Five spell **OCEAN** (or CANOE): **O**penness · **C**onscientiousness · **E**xtroversion · **A**greeableness · **N**euroticism.
:::

:::keyconcept
**Cattell, Eysenck, and the Big Five all use factor analysis** — a statistical method that groups correlated descriptors into major trait categories. **Allport's** approach did not. Allport said each person has a **unique subset** of traits; **Eysenck** said we **all share** the same dimensions but to differing degrees.
:::

#### Social-cognitive theory & observational learning
**Observational learning** (also **social** or **vicarious learning**) occurs by **watching and imitating** others (modeling); **mirror neurons** are thought to support it. **Social-cognitive theory** holds that behavior arises from the **reciprocal interaction** of the **person**, their **behavior**, and the **environment** — unlike pure behaviorism, **cognition** matters too. Social factors and the attitudes of friends/family influence one's beliefs.

##### Bandura's Bobo doll experiment
**Albert Bandura** demonstrated observational learning with the **Bobo doll experiment** (often cited in debates over violent media):

- Children watched an adult **aggressively hit and yell at** an inflatable Bobo doll. After being frustrated with an impossible puzzle, many children **imitated** that aggression on the doll.
- A second version showed the aggressive model being **punished** on video; fewer children imitated. But when researchers **offered rewards** (stickers/juice) for imitating, those children **could reproduce** the behavior on demand.

:::keyconcept
**Learning–performance distinction:** learning a behavior and performing it are two **different** things. Not performing a behavior does **not** mean it wasn't learned — the children had learned the aggression even when they chose not to display it.
:::

:::mnemonic
Bandura's four steps to model a behavior — **"A Man In Motion"**: **A**ttention · **M**emory · **I**mitation · **M**otivation. You must attend to it, remember it, be able to imitate it, and be **motivated** to do it.
:::
`
    },

    /* ───────────────── 5.4 Biological Theory of Personality ───────────────── */
    {
      id: 's4', num: '5.4', title: 'Biological Theory of Personality',
      recap: `
- The **biological theory** holds that key components of personality are **inherited** / determined in part by **genes**.
- **Eysenck**: extroversion reflects **reticular formation** arousal (introverts are more easily aroused, so they seek **less** stimulation). **Gray** and **Cloninger** linked personality to brain reward/punishment systems.
- **Twin studies** (especially identical twins **reared apart**) tease apart **genes vs. environment**; many traits stay similar — e.g., **social potency** and **traditionalism**.
- **Temperament** = the **innate** disposition (mood, activity level) that is consistent across life. Genes → traits → behavior, but expression still depends on **environment**.
`,
      detail: `
#### The biological perspective
The **biological theory** proposes that important components of personality are **inherited** or at least partly **determined by genes**. There are many variants — some tie personality to the **brain**, others to **behavior** rather than discrete traits.

- **Evolutionary psychology** (a biological variant) argues males and females evolved **different mating strategies** because the **cost** of passing on genes differs: a male can have many mates, whereas a female is more **selective** given the cost of pregnancy.

##### Brain-based proposals
| Theorist | Proposal |
|---|---|
| **Hans Eysenck** | Extroversion level reflects differences in the **reticular formation**: **introverts** are more easily aroused, so they require **less** external stimulation; extroverts seek **more**. |
| **Jeffrey Alan Gray** | Personality is governed by **three brain systems**, e.g., the **fight-or-flight** system. |
| **C. Robert Cloninger** | Linked personality to brain systems of **reward, motivation, and punishment** — e.g., **low dopamine** correlating with **higher impulsivity**. |

#### Twin studies: nature vs. nurture
Researchers favor **identical (monozygotic) twins** because they share the **same genetic makeup**, allowing genetic and environmental influences to be teased apart.

- Even twins **reared separately** show **similar personalities**.
- **Social potency** (the degree to which one assumes **leadership** in social situations) and **traditionalism** (tendency to **follow authority**) are strongly shared, even in twins reared apart.
- **Weaker genetic** influence: traits like **achievement** and **closeness**.
- A **longer dopamine D4 receptor gene** is associated with **thrill-seeking** — but having a gene does **not** guarantee you'll express it; expression depends on **environment**.

#### Temperament
**Temperament** is an **innate** disposition — your baseline **mood and activity level** — that stays relatively **consistent throughout life**.

:::keyconcept
The biological theory's takeaway: **inherited genes → traits → behavior/personality**, but **gene expression remains environment-dependent**. Genes set predispositions, not destiny.
:::
`
    },

    /* ───────────────── 5.5 Identity & Developmental Stage Theories ───────────────── */
    {
      id: 's5', num: '5.5', title: 'Identity Development: Erikson, Kohlberg & Vygotsky',
      recap: `
- **Self-concept** = the sum of how you see yourself; **identity** = the individual components (e.g., gender, religious, ethnic). **Self-esteem** = your overall evaluation of self-worth.
- **Erikson** described **8 psychosocial stages**, each a **crisis** (e.g., trust vs. mistrust; **identity vs. role confusion** in adolescence) whose resolution shapes personality.
- **Kohlberg** described **moral development** in 3 levels: **preconventional**, **conventional**, **postconventional** (6 stages total).
- **Vygotsky**: cognitive/identity development is driven by **culture and social interaction**; learning occurs in the **zone of proximal development** with scaffolding.
`,
      detail: `
#### Self-concept, identity, and self-esteem
- **Self-concept** is the sum of how an individual perceives themselves — the answer to "Who am I?"
- **Identity** refers to the **individual components** of the self-concept (e.g., **gender identity**, **ethnic identity**, **religious identity**, **sexual orientation**).
- **Self-esteem** is one's overall **evaluation** of self-worth; **self-efficacy** (a Bandura concept) is the belief in one's ability to succeed at a **specific** task.

#### Erikson's psychosocial stages
**Erik Erikson** proposed that personality develops across the **entire lifespan** through **eight stages**, each defined by a **psychosocial crisis** between two opposing outcomes. Successful resolution builds a virtue; failure hinders later development.

| Stage (age) | Crisis | Favorable outcome |
|---|---|---|
| Infancy (0–1) | **Trust vs. mistrust** | Trust in caregivers and the world |
| Toddler (1–3) | **Autonomy vs. shame & doubt** | Self-control, independence |
| Preschool (3–6) | **Initiative vs. guilt** | Ability to start tasks and plans |
| School age (6–12) | **Industry vs. inferiority** | Competence, sense of accomplishment |
| Adolescence (12–20) | **Identity vs. role confusion** | A coherent **sense of self** |
| Young adult (20–40) | **Intimacy vs. isolation** | Deep, committed relationships |
| Middle adult (40–65) | **Generativity vs. stagnation** | Contributing to the next generation |
| Late adult (65+) | **Integrity vs. despair** | Wisdom; acceptance of one's life |

:::mnemonic
The adolescent crisis, **identity vs. role confusion**, is the chapter's namesake — this is when teens consolidate their **self-concept** and try on roles to answer "Who am I?"
:::

#### Kohlberg's stages of moral development
**Lawrence Kohlberg** studied moral reasoning (using the **Heinz dilemma**) and described **three levels**, each with two stages, based on the **reasoning** behind a choice rather than the choice itself.

| Level | Stage | Basis of moral reasoning |
|---|---|---|
| **Preconventional** | 1. Obedience | Avoiding **punishment** |
| (self-interest; typical of children) | 2. Self-interest | Gaining **rewards** ("what's in it for me?") |
| **Conventional** | 3. Conformity | Gaining **social approval** ("good boy/good girl") |
| (social rules; adolescents/adults) | 4. Law and order | Maintaining **social order**, obeying authority |
| **Postconventional** | 5. Social contract | Balancing **individual rights** and society's agreed-upon rules |
| (abstract principles; not all reach it) | 6. Universal ethics | **Universal moral principles** and conscience |

:::mnemonic
**Kohlberg = "Pre–Con–Post":** **Pre**conventional (punishment & reward) → **Con**ventional (approval & law/order) → **Post**conventional (social contract & universal ethics).
:::

#### Vygotsky and sociocultural development
**Lev Vygotsky** argued that **cognitive and identity development are driven by culture and social interaction**. Key ideas:

- **Zone of proximal development (ZPD)** — the gap between what a learner can do **alone** and what they can do with **guidance**. Learning is most effective inside this zone.
- **Scaffolding** — the support a more-knowledgeable other (parent, teacher) provides, gradually withdrawn as competence grows.
- Children **internalize** the language, beliefs, and skills of their culture, which shapes the development of the self.

:::keyconcept
Contrast the lenses: **Erikson** = lifelong **psychosocial** crises; **Kohlberg** = **moral reasoning**; **Vygotsky** = **culture and social interaction** as the engine of cognitive development.
:::
`
    },

    /* ───────────────── 5.6 Psychological Disorders & DSM Categories ───────────────── */
    {
      id: 's6', num: '5.6', title: 'Psychological Disorders & DSM Categories',
      recap: `
- **Mental disorders** affect higher brain functions (cognition, mood, behavior) and usually cause **distress or disability** — being merely eccentric is **not** a disorder.
- Two classification systems: **ICD-10** (WHO) and **DSM-5** (American Psychiatric Association). The **biomedical** model emphasizes biological causes; the **biopsychosocial** model adds psychological + social/cultural factors.
- High-yield categories: **anxiety** (phobias, GAD, panic), **depressive**, **bipolar** (with **mania**), **schizophrenia spectrum** (psychosis), **OCD**, and **personality disorders** (clusters A/B/C).
- **Schizophrenia** symptoms divide into **positive** (added behaviors: hallucinations, delusions) and **negative** (lost behaviors: blunted affect).
`,
      detail: `
#### What counts as a disorder
A **mental disorder** affects the **higher functions** of the brain — **cognition, mood, and behavior** — and typically produces **distress or disability**. Crucial distinction: a person who is simply **unusual or eccentric** does **not** have a disorder. A diagnosis also requires that symptoms are **not** better explained by **medication, drug use, another medical condition, or cultural norms**.

##### Classification systems & models
- **ICD-10** — *International Classification of Diseases, 10th revision*, from the **WHO**.
- **DSM-5** — *Diagnostic and Statistical Manual of Mental Disorders, 5th edition*, from the **American Psychiatric Association (APA)**. The DSM-5 has **20 top-level categories**.
- **Biomedical model** → disorders arise from **biological/physical abnormalities**.
- **Biopsychosocial model** → adds **psychological** and **social/cultural** factors. (Per the NIH, ~**25%** of U.S. adults meet criteria for a disorder each year; ~**6%** have a serious mental illness.)

#### High-yield DSM-5 categories
| Category | Defining feature | Examples |
|---|---|---|
| **Anxiety disorders** | Abnormal **fear/worry** | **Phobias** (specific stimulus), **generalized anxiety disorder** (non-specific), **panic disorder** (panic attacks) |
| **Depressive disorders** | Abnormally **negative mood** (a long-term emotional state); **high suicide risk** | Major depressive disorder, persistent depressive disorder |
| **Bipolar & related** | Abnormal mood **including periods of mania** (abnormally positive mood) → social/legal problems | Bipolar I, bipolar II |
| **Schizophrenia spectrum & other psychotic** | **Psychosis**: **delusions** (false beliefs not explained by culture) and **hallucinations** | Schizophrenia |
| **Obsessive-compulsive & related** | **Obsessions** (repeated unwelcome thoughts) → **compulsions** (repeated behaviors) | OCD (e.g., fear of dirty hands → washing many times daily) |
| **Personality disorders** | Long-term, inflexible traits **outside societal norms** | Clusters A/B/C (below) |
| **Trauma- & stressor-related** | Follow a **traumatic/stressful** event | **PTSD** (common after war) |
| **Neurodevelopmental** | Abnormal **development** of the nervous system | Intellectual disability, **autism spectrum**, **ADHD** |
| **Neurocognitive** | **Loss** of function after development | **Delirium** (reversible), **dementia** (usually irreversible, progressive) |
| **Dissociative** | Abnormalities of **identity/memory** | Dissociative identity ("multiple personalities"), amnesia |
| **Somatic symptom & related** | Physical symptoms of **psychological** origin | Stress-induced abdominal pain |
| **Feeding & eating** | Behavioral abnormalities around food | Anorexia, bulimia |

*(Other DSM-5 categories include sleep-wake, substance-related/addictive, disruptive/impulse-control, elimination, sexual dysfunctions, gender dysphoria, paraphilic, and "other" disorders.)*

#### Schizophrenia: positive vs. negative symptoms
Schizophrenia is the **prototype psychotic disorder**, with **abnormal perceptions of reality**. Its symptoms fall into **three groups**:

| Symptom type | Meaning | Examples |
|---|---|---|
| **Positive symptoms** | Behaviors **added** to normal experience | **Hallucinations**, **delusions**, disorganized speech |
| **Negative symptoms** | Normal behaviors **lost/reduced** | **Blunted (flat) affect**, social withdrawal, avolition |
| **Cognitive symptoms** | Deficits in thinking | Poor **attention, organization, planning** |

:::mnemonic
**Positive = added; negative = subtracted.** Think of it like math, **not** "good vs. bad": positive symptoms **add** something abnormal (hallucinations), negative symptoms **subtract** normal function (flattened emotion).
:::

#### Personality disorder clusters
**Personality disorders** involve long-term mental/behavioral patterns that fall **outside accepted societal norms**. They group into three clusters:

| Cluster | Theme | Mnemonic |
|---|---|---|
| **Cluster A** | **Odd / eccentric** (paranoid, schizoid, schizotypal) | **"Weird"** |
| **Cluster B** | **Dramatic, emotional, erratic** relationships (antisocial, borderline, histrionic, narcissistic) | **"Wild"** |
| **Cluster C** | **Anxious / avoidant / obsessive** (avoidant, dependent, obsessive-compulsive PD) | **"Worried"** |

:::mnemonic
**A, B, C clusters → "Weird, Wild, Worried":** **A** = odd/eccentric (**weird**), **B** = dramatic/erratic (**wild**), **C** = anxious/fearful (**worried**).
:::

:::realworld
A person with **OCD** might be **obsessed** with the idea that their hands are dirty (the unwanted, recurring **thought**) and respond with the **compulsion** to wash them many times a day (the repetitive **behavior** that relieves the anxiety).
:::
`
    },

    /* ───────────────── 5.7 Biological Basis of Depression & Schizophrenia ───────────────── */
    {
      id: 's7', num: '5.7', title: 'Biological Basis of Depression & Schizophrenia',
      recap: `
- **Schizophrenia** involves excess **dopamine** activity in the **mesocorticolimbic pathway** (VTA → cortex + limbic); dopamine-blocking drugs improve symptoms. Cortex (esp. frontal/temporal) shows decreased size.
- **Depression** is linked to **decreased frontal-lobe** activity and **increased limbic** activity, plus dysregulation of the **monoamines** — **serotonin** (raphe nuclei), **norepinephrine** (locus coeruleus), and **dopamine** (VTA).
- Drugs that raise **monoamines** (e.g., **MAO inhibitors**) relieve depression; **neural plasticity** changes may also be involved.
- Both disorders likely arise from a **combination of biological (genetic) and psychosocial** factors.
`,
      detail: `
#### Biological basis of schizophrenia
Schizophrenia is the prototype **psychotic** disorder, with both biological and environmental roots; our understanding remains **limited**.

- **Structure:** the **cerebral cortex** appears **decreased in size**, especially in the **frontal** and **temporal** lobes.
- **Neurotransmitter:** features involve abnormal (**increased**) **dopamine** activity. Medications that **reduce dopamine transmission** often improve symptoms.
- **The mesocorticolimbic pathway** is central:
  - **Meso** = **VTA (ventral tegmental area)** in the midbrain (dopamine source)
  - **Cortico** = projections to the **frontal and temporal cortex**
  - **Limbic** = inner brain structures for **emotion/motivation**
- A model: abnormal activity along this pathway causes **frontal cortex** dysfunction → **cognitive symptoms**, **limbic** dysfunction → **negative symptoms**, and **temporal cortex** dysfunction → **positive symptoms** (though the real picture is more complex).
- **Causes:** genetics, **physical stress during pregnancy**, and **psychosocial factors** (e.g., negative family interaction styles affecting brain development).

:::mnemonic
**Schizophrenia = "too much dopamine."** The **dopamine hypothesis** explains why dopamine-**blocking** antipsychotics reduce **positive symptoms** — the mnemonic mirror of depression, where monoamines are too **low**.
:::

#### Biological basis of depression
Depression brings **hopelessness** and **loss of interest** in activities. No consistent structural lesion exists, but functional scans suggest:

- **Decreased** activity in the **frontal lobe** and **increased** activity in **limbic** structures.
- The **hypothalamus** controls stress hormones like **cortisol** and communicates with the limbic system and frontal lobe; these hormones also feed back on the brain.

##### The monoamine pathways
Three brainstem nuclei supply the **monoamine** neurotransmitters implicated in depression:

| Source nucleus | Neurotransmitter released |
|---|---|
| **Raphe nuclei** (brainstem) | **Serotonin** |
| **Locus coeruleus** (long axons to cerebrum) | **Norepinephrine** |
| **VTA** (long axons to cerebrum) | **Dopamine** |

Medications that **raise** serotonin, norepinephrine, and dopamine often improve symptoms — e.g., **monoamine oxidase inhibitors (MAOIs)**, which **increase the amount of monoamines in the synapse**. The **monoamines** include **adrenaline, norepinephrine, dopamine, serotonin, and melatonin** (the last involved in the onset of darkness/sleep).

A newer idea links depression to abnormal **neural plasticity** (the brain's capacity to change with behavior), though it is unclear whether this is cause or effect.

:::mnemonic
**Monoamines** in depression — **"Do NE Stuff (And Make-melatonin)":** **Do**pamine · **N**or**E**pinephrine · **S**erotonin (plus **A**drenaline and **M**elatonin). MAOIs **increase** these in the synapse.
:::

:::keyconcept
Both schizophrenia and depression are best understood through the **biopsychosocial model**: a likely **combination** of **biological/genetic** vulnerability and **psychosocial** stressors (e.g., childhood stress, family dynamics) — not a single cause.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '5.1 Psychoanalytic & Humanistic Theories',
        points: [
          '**Freud**: personality = unconscious conflict among the **id** (pleasure principle), **ego** (reality principle), and **superego** (morality).',
          '**Humanistic** theory (**Maslow** hierarchy of needs → **self-actualization**; **Rogers** real vs. ideal self, **unconditional positive regard**) is optimistic and emphasizes **congruence**.'
        ]
      },
      {
        section: '5.2 Ego Defense Mechanisms',
        points: [
          '**Defense mechanisms** are unconscious ego strategies that reduce **anxiety** by distorting reality; **repression** is foundational.',
          '**Sublimation** = the only mature defense (channels urges constructively); **suppression** = the only conscious one.'
        ]
      },
      {
        section: '5.3 Behaviorist, Trait & Social-Cognitive',
        points: [
          '**Behaviorism** (Skinner/operant, Pavlov/classical) = environment-determined, blank-slate, observable behavior only.',
          'Trait theory: **Allport** (cardinal/central/secondary), **Cattell** (16 PF), **Eysenck** (3 dimensions), **Big Five (OCEAN)**; all but Allport use **factor analysis**.',
          '**Bandura**: social-cognitive theory + **Bobo doll** observational learning; **learning ≠ performance**.'
        ]
      },
      {
        section: '5.4 Biological Theory of Personality',
        points: [
          'Personality is partly **inherited**; **Eysenck** ties extroversion to **reticular formation** arousal; **Gray/Cloninger** to reward/punishment systems.',
          '**Twin studies** (esp. reared-apart) reveal heritable traits like **social potency** and **traditionalism**; **temperament** is innate and lifelong.'
        ]
      },
      {
        section: '5.5 Identity Development',
        points: [
          '**Self-concept** (how you see yourself), **identity** (its components), **self-esteem** (self-worth evaluation).',
          '**Erikson**: 8 lifelong psychosocial crises (**identity vs. role confusion** in adolescence). **Kohlberg**: pre-/conventional/post-conventional moral reasoning. **Vygotsky**: culture + ZPD + scaffolding.'
        ]
      },
      {
        section: '5.6 Psychological Disorders & DSM Categories',
        points: [
          'Disorders require **distress/disability** (eccentricity alone is not a disorder); classified by **ICD-10** (WHO) and **DSM-5** (APA).',
          'Know anxiety, depressive, bipolar (**mania**), schizophrenia (**positive vs. negative** symptoms), OCD, and personality disorder **clusters A/B/C**.'
        ]
      },
      {
        section: '5.7 Biological Basis of Depression & Schizophrenia',
        points: [
          '**Schizophrenia**: excess **dopamine** in the **mesocorticolimbic pathway**; cortical atrophy (frontal/temporal).',
          '**Depression**: low frontal activity, high limbic activity, and dysregulated **monoamines** (serotonin/NE/dopamine); MAOIs raise them. Both are **biopsychosocial**.'
        ]
      }
    ],
    mnemonics: [
      '**Freud\'s structures:** **Id** = "I want it now" (pleasure) · **Ego** = "is it realistic?" (reality) · **Superego** = "is it right?" (morality).',
      '**Big Five = OCEAN** (or CANOE): **O**penness · **C**onscientiousness · **E**xtroversion · **A**greeableness · **N**euroticism.',
      '**Bandura\'s modeling steps = "A Man In Motion":** **A**ttention · **M**emory · **I**mitation · **M**otivation.',
      '**Kohlberg = "Pre–Con–Post":** Preconventional (punishment/reward) → Conventional (approval/law) → Postconventional (social contract/universal ethics).',
      '**Personality clusters A/B/C = "Weird, Wild, Worried":** A = odd/eccentric · B = dramatic/erratic · C = anxious/fearful.',
      '**Schizophrenia symptoms:** positive = **added** (hallucinations, delusions); negative = **subtracted** (flat affect) — math, not good/bad.',
      '**Schizophrenia = too much dopamine; depression = too little monoamine** — opposite ends of the neurotransmitter seesaw.',
      '**Sublimation** is the **mature** defense (urges → constructive output); **suppression** is the only **conscious** defense.'
    ],
    keyConcepts: [
      '**Congruence** between self-concept, the ideal self, and behavior underlies psychological health (humanistic core; chapter\'s opening theme).',
      '**Trait methodology divides theorists:** Cattell, Eysenck, and the Big Five use **factor analysis**; Allport did not — and Allport saw unique trait subsets vs. Eysenck\'s shared dimensions.',
      '**Learning–performance distinction:** a behavior can be **learned** without being **performed** — Bandura\'s key result, central to social-cognitive theory.',
      '**Schizophrenia** maps onto the **dopamine/mesocorticolimbic** model (positive/negative/cognitive symptoms), while **depression** maps onto **monoamine** depletion — both refined by the **biopsychosocial** model.',
      '**Distress/disability**, not mere unusualness, defines a psychological disorder; the DSM-5 (APA) and ICD-10 (WHO) provide the classification frameworks.'
    ],
    equations: []
  },

  questions: []
};
