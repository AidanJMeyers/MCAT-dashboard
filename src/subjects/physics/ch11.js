// Chapter 11 — Reasoning About the Design and Execution of Research.
// Re-authored to the rich-formatting quality bar from the source PDF text.
// Figures reused from ch11.json; questions reconstructed from ch11_q.md
// (the JSON questions array was empty). recap/detail markdown authored here.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 11,
  title: 'Reasoning About the Design & Execution of Research',
  subtitle: 'The scientific method · basic science research · human subjects research · ethics · research in the real world',

  blocks: [
    /* ─────────────────────── 11.1 The Scientific Method ─────────────────────── */
    {
      id: 's1', num: '11.1', title: 'The Scientific Method',
      goals: [
        'Determine the relative value of a research question by applying the FINER method',
        'Identify the stages of the scientific method, and evaluate whether they have been appropriately completed',
        'Evaluate the quality and testability of a hypothesis'
      ],
      svgs: [{
        title: 'The eight steps of the scientific method',
        caption: 'Three phases: hypothesis generation (steps 1–3), hypothesis testing (steps 4–6), and reporting/verification (steps 7–8).',
        svg: `<svg viewBox="0 0 640 360" width="640" role="img" aria-label="Flow chart of the eight steps of the scientific method grouped into three phases" font-family="system-ui, sans-serif">
  <defs>
    <marker id="arr11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker>
  </defs>
  ${[
    { y: 14, fill: '#dbeafe', stroke: '#2563eb', label: 'GENERATE', steps: ['1. Generate a testable question', '2. Gather data & resources', '3. Form a hypothesis'] },
    { y: 130, fill: '#dcfce7', stroke: '#16a34a', label: 'TEST', steps: ['4. Collect new data', '5. Analyze the data', '6. Interpret data vs. hypothesis'] },
    { y: 246, fill: '#fef3c7', stroke: '#d97706', label: 'REPORT', steps: ['7. Publish (peer review)', '8. Verify results'] }
  ].map(g => `
    <rect x="14" y="${g.y}" width="120" height="100" rx="8" fill="${g.fill}" stroke="${g.stroke}" stroke-width="2"/>
    <text x="74" y="${g.y + 56}" font-size="14" font-weight="bold" fill="${g.stroke}" text-anchor="middle">${g.label}</text>
    ${g.steps.map((s, i) => `<text x="160" y="${g.y + 24 + i * 26}" font-size="13" fill="#0f172a">${s}</text>`).join('')}
  `).join('')}
  <line x1="74" y1="114" x2="74" y2="130" stroke="#475569" stroke-width="2" marker-end="url(#arr11)"/>
  <line x1="74" y1="230" x2="74" y2="246" stroke="#475569" stroke-width="2" marker-end="url(#arr11)"/>
</svg>`
      }],
      recap: `
- The **scientific method** is **8 ordered steps** for turning a question into new knowledge: **question → gather data → hypothesis → collect data → analyze → interpret → publish → verify**.
- A good **testable question** is *narrow*; most questions starting with **"Why"** are too broad. Hypotheses use an **if–then** format — that format is what makes them testable.
- **FINER** evaluates a research question: **F**easible · **I**nteresting · **N**ovel · **E**thical · **R**elevant.
- This whole chapter is one of the **Scientific Inquiry & Reasoning Skills** — ~**10% of every MCAT** touches it, often standalone.
`,
      detail: `
#### The scientific method
The **scientific method** is the established protocol for transitioning from a **question** to a new **body of knowledge** — a set of steps that fixes the proper order of events for an experiment.

| # | Step | Phase | Watch out for |
|---|---|---|---|
| 1 | **Generate a testable question** | Generate | Don't overreach — keep it narrow |
| 2 | **Gather data & resources** | Generate | Look for *all* info, not just what fits expectations |
| 3 | **Form a hypothesis** | Generate | Use **if–then** format → guarantees testability |
| 4 | **Collect new data** | Test | Via **experiment** (manipulate variables) or **observation** |
| 5 | **Analyze the data** | Test | Find trends, run the math |
| 6 | **Interpret data vs. hypothesis** | Test | If inconsistent → consider alternative hypotheses |
| 7 | **Publish** | Report | Enables **peer review**; summarize all 6 prior steps |
| 8 | **Verify results** | Report | Repeat under new conditions |

##### Testable questions and hypotheses
- A question like *"Why do hot objects cause injury?"* is **not testable** — most **"Why"** questions are too broad.
- A better, narrower version: *"How do epithelial cells respond to heat in vivo?"*
- A matching **hypothesis**: *"**If** heat is applied to in vivo epithelial cells, **then** those cells will lyse."* The **if–then** structure is what makes it testable.

:::expertise
The MCAT most often tests **experimental or logical errors** during research. Learn the scientific method cold so you can pinpoint *which* step an error occurred in — that is exactly how these questions are framed.
:::

#### The FINER method
**FINER** asks five questions to judge whether answering a research question will add to scientific knowledge in a practical way and reasonable time.

| Letter | Criterion | Question |
|---|---|---|
| **F** | **Feasible** | Are the supplies, funding, time, and subjects obtainable? |
| **I** | **Interesting** | Do other scientists care about the outcome? |
| **N** | **Novel** | Has it already been asked and answered in a peer-reviewed journal? |
| **E** | **Ethical** | Would the study obey ethical principles? |
| **R** | **Relevant** | Does it matter outside the scientific community? |

:::mnemonic
**FINER** = a study worth doing should look **"finer"** than the rest: **F**easible · **I**nteresting · **N**ovel · **E**thical · **R**elevant. If a question fails even one letter, its value drops.
:::

:::bridge
It is easy to chase research that agrees with our opinions and ignore research that doesn't — this is **confirmation bias**. Specific biases return later in this chapter and in *MCAT Behavioral Sciences Review*, Ch. 4.
:::

:::expertise
This chapter has **no AAMC content category of its own**, yet the AAMC confirms ~**10% of every MCAT's science questions** touch this material — many answerable from *this chapter alone*. Point for point, one of the highest-yield chapters in the series.
:::
`
    },

    /* ─────────────────────── 11.2 Basic Science Research ─────────────────────── */
    {
      id: 's2', num: '11.2', title: 'Basic Science Research',
      goals: [
        'Identify common types and sources of error',
        'Recognize independent and dependent variables and how they are typically displayed graphically',
        'Explain the importance of the different types of control, including positive and negative controls',
        'Distinguish between accuracy and precision'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 11.1 — Accuracy (validity) vs. precision (reliability): the bullseye-target analogy. Only an inaccurate tool introduces bias; an imprecise tool introduces random error.' }],
      recap: `
- **Basic science research** (lab work, not on people) gives the experimenter the **most control** → best setting for establishing **causality**.
- **Controls** verify that the outcome wouldn't occur without the intervention. **Positive control** = expects a change; **negative control** = expects *no* change (e.g., saline, placebo).
- The **independent variable** is *manipulated* (x-axis); the **dependent/outcome variable** is *measured* (y-axis).
- **Accuracy (validity)** = hits the true value; **precision (reliability)** = consistent/repeatable. Only an **inaccurate** tool causes **bias**; an imprecise tool causes **random error**.
`,
      detail: `
#### Why basic science is the gold standard for causality
**Basic science research** uses chemicals, cell cultures, or animal models — not people — so the experimenter controls nearly every variable. That control makes it the **easiest type for demonstrating causality**, because we can show the outcome would *not* have happened without the intervention.

#### Controls
A **control** (or standard) keeps near-identical conditions across trials so results can be verified — and even checks for **reagent contamination**.

| Control type | Purpose | Example |
|---|---|---|
| **Positive control** | Ensures the dependent variable **changes when a change is expected** | An HIV assay run on samples *known to contain* HIV |
| **Negative control** | Ensures the dependent variable does **not change when none is expected** | The same assay on samples *known to be HIV-free*; or **saline/sugar pill** in a drug trial |

- A separate culture given an inert compound (**water or saline**) controls for the effect of merely *adding volume*.
- In drug trials the negative-control group also reveals the **placebo effect** — a reported change from a **sham intervention**.

:::keyconcept
**Worked ranking** — a retinal scan for Alzheimer's tested on a positive-control group (already diagnosed), a negative-control group (tested negative), and an experimental group (symptomatic 70-year-olds). Expected detection, highest → lowest: **positive → experimental → negative.** The two controls set the upper and lower bounds; the experimental group falls between.
:::

#### Causality and variables
**Causality** is an **if–then** relationship — usually the hypothesis being tested. We **manipulate an independent variable** and **measure a dependent variable**. A relationship is **causal** when:

1. There is a known/theoretical **mechanism** linking the two.
2. The change in the **independent** variable **always precedes** the change in the dependent variable.
3. The change in the dependent variable **does not occur** without the intervention.

![Scatter plot of systolic blood pressure vs. daily water consumption in mice](${fig(1, 2).src})

:::keyconcept
The **independent variable** is the one the experimenter *manipulates*; the **dependent (outcome) variable** is the one *observed*. On a graph, **independent → x-axis**, **dependent → y-axis**. In the mouse water-vs-blood-pressure data above, water consumption is independent and systolic BP is dependent — but the data alone are **not enough to prove causality**.
:::

#### Error sources
Even with low bias, basic science research has error:

- **Bias (systematic error)** — usually minimal here; can sneak in via a **faulty hypothesis** from incomplete early data, or by dropping trials / not publishing contradictory results.
- **Instrument error** — affects **accuracy**, **precision**, or both.
- **Random error** — hard to avoid; overcome by a **large sample size**.

##### Accuracy vs. precision
| Term | Also called | Means | Target analogy |
|---|---|---|---|
| **Accuracy** | **Validity** | Measures the **true value** (170-lb person reads 170 lb) | Darts cluster **on the bullseye** |
| **Precision** | **Reliability** | Reads **consistently** / narrow range | Darts cluster **tightly** (anywhere) |

- An **accurate but imprecise** scale: readings of 150–190 lb (centered on truth, scattered).
- An **inaccurate but precise** scale: readings of 129–131 lb (tight, but wrong).

:::keyconcept
**Bias is systematic error** → only an **inaccurate** tool introduces **bias**. An **imprecise** tool introduces **random error**, *not* bias. So a poorly-tared (zeroed) balance reads consistently — precise — but consistently *wrong* → inaccurate → biased.
:::

:::mnemonic
**"a**Ccuracy = **C**orrect" (close to the true value). **"Pre**cision = **Pre**dictable/**re**peatable" (close to itself). The reliability/validity target with the **tight, centered** cluster is the only one that is both.
:::
`
    },

    /* ─────────────────────── 11.3 Human Subjects Research ─────────────────────── */
    {
      id: 's3', num: '11.3', title: 'Human Subjects Research',
      goals: [
        "Apply Hill's criteria to an experiment to determine the likelihood of a causal relationship",
        'Distinguish between observational and experimental research',
        'Compare and contrast bias and confounding'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 11.2 — Confounding: a third variable (the confounder) independently causes both the exposure and the outcome, creating a spurious association between them.' }],
      recap: `
- **Human subjects research** has *lower control* (ethics) than basic science → **weaker** relationships. It is **experimental** (manipulate IV) or **observational** (no manipulation).
- **Randomization** controls for differences between groups; **blinding** (single = patient *or* assessor; double = both + investigator) removes perception bias.
- **3 observational designs**: **cohort** (exposure → follow → outcome), **cross-sectional** (both at one time), **case–control** (outcome → look back at exposure). None prove causality.
- **Hill's criteria** support causality from correlation; **temporality** is the only *necessary* one.
- **Bias** = systematic error during *data collection* (selection, detection, observation/Hawthorne). **Confounding** = error during *data analysis* (a hidden third variable).
`,
      detail: `
#### Experimental vs. observational research
Because human subjects can't be fully controlled, relationships are weaker than in the lab.

| | **Experimental** | **Observational** |
|---|---|---|
| Manipulate the IV? | **Yes** — manipulate, then observe outcome | **No** — analyze existing data |
| Can show causality? | Stronger support (if–then) | **No** — describe as **correlation** |
| Data analysis | More complex than lab work | Often the only ethical/practical option |

##### Experimental tools: randomization & blinding
- **Randomization** uses an algorithm (≈ a fair coin toss / die roll) to assign each subject to a **control group** (no treatment or sham) or a **treatment group**. A *fair* algorithm means data can be analyzed even if the groups end up unequal.
- **Blinding** removes perception bias when measures are subjective:

| Blinding | Who is kept unaware |
|---|---|
| **Single-blind** | Only the **patient** *or* the **assessor** |
| **Double-blind** | The **investigator, subject, *and* assessor** |

- Without blinding, the **placebo effect** shrinks in the control group but persists in the treatment group, skewing the comparison.

:::keyconcept
**Quantitative** research generates **numerical** data; **qualitative** generates **non-numerical** data; **mixed-method** uses both. Regression models can mix **binary**, **continuous**, and **categorical** variables.
:::

#### Observational study designs
Observational studies look for links between **exposures** and **outcomes** but **cannot prove causality**.

| Design | Direction / timing | Example |
|---|---|---|
| **Cohort** (a **longitudinal** study) | Sort by **exposure** → follow forward → count outcomes | 100 smokers + 100 nonsmokers followed 20 yr for lung cancer |
| **Cross-sectional** | Exposure **and** outcome at a **single point in time** | Prevalence of lung cancer in smokers vs. nonsmokers *now* |
| **Case–control** | Sort by **outcome** → look **backward** at exposure | 100 with lung cancer + 100 without, assessed for smoking history |

:::mnemonic
**"Co**hort = **Co**ming forward" (exposure → future outcome). **Case–control looks back** (outcome → past exposure). **Cross-sectional = a cross-section in time** (one snapshot, so it can *never* establish **temporality**).
:::

#### Hill's criteria
**Hill's criteria** raise the likelihood that an observed correlation is **causal**. More criteria met → more likely causal, but they're never absolute.

1. **Temporality** — exposure (IV) must precede the outcome (DV). *(Only NECESSARY criterion; not sufficient.)*
2. **Strength** — more outcome variability explained by the study variable.
3. **Dose–response** — more exposure → proportionally more response.
4. **Consistency** — same result across multiple settings.
5. **Plausibility** — a reasonable mechanism, supported by literature.
6. **Consideration of alternatives** — other explanations ruled out.
7. **Experiment** — a supporting experiment can be performed.
8. **Specificity** — the outcome is produced *only* by that exposure.
9. **Coherence** — fits the current state of scientific knowledge.

:::mnemonic
Only **Temporality is required** — *cause must come before effect*. Lose temporality and the relationship **cannot** be causal, no matter how many other criteria you satisfy. (Classic MCAT trap with **cross-sectional** studies.)
:::

#### Error sources: bias vs. confounding
| | **Bias** | **Confounding** |
|---|---|---|
| What it is | **Systematic error** (one-directional skew) | An **incorrect relationship** is characterized |
| When it occurs | **Data collection** phase | **Data analysis** phase |
| Affects precision? | No — it shifts data, doesn't scatter it | Data may be fine; the *interpretation* is wrong |

##### Types of bias
| Bias | Mechanism | Example |
|---|---|---|
| **Selection bias** | Sample **not representative** of the target population (most common!) | Drug-trial volunteers are healthier than non-volunteers |
| **Detection bias** | Pros use knowledge **inconsistently**, screening some groups more | Screening obese patients for diabetes/hypertension at a higher rate |
| **Observation bias** (**Hawthorne effect**) | Subjects change behavior because they **know they're watched** | Weight-loss-drug subjects start exercising more, inflating the effect |

##### Confounding
A **confounder** is a hidden **third variable** linked to *both* the independent and dependent variables, creating a spurious association.

- *"Red hair causes low pain tolerance"* — likely no direct causality; a **gene mutation** could drive **both** traits.
- Measuring red-hair pigment vs. pain intolerance might show a **strong statistical relationship with no causal link**.

:::bridge
Confirmation bias, in-group/out-group effects, and other cognitive biases are detailed in *MCAT Behavioral Sciences Review*, Ch. 4 & 12. Note that other biases against obese patients can actually *lower* their screening rates — the opposite of detection bias.
:::
`
    },

    /* ─────────────────────── 11.4 Ethics ─────────────────────── */
    {
      id: 's4', num: '11.4', title: 'Ethics',
      goals: [
        'Distinguish between autonomy (medical ethics) and respect for persons (research ethics)',
        'Predict the ethical issues regarding respect for persons, justice, beneficence, and nonmaleficence within a study',
        'Distinguish between monetary compensation and coercive influence for a research study',
        'Recall the populations that must receive special consideration for coercion'
      ],
      recap: `
- **Medical ethics = 4 tenets**: **beneficence**, **nonmaleficence**, **respect for autonomy**, **justice**.
- **Research ethics = Belmont Report (1979) = 3 pillars**: **respect for persons**, **justice**, **beneficence** (a broader version).
- **Respect for persons** = honesty, **informed consent**, **confidentiality**, freedom from **coercion**, right to **withdraw**.
- **Justice** = fairly choose questions *and* subjects; distribute risk fairly; only **morally relevant differences** justify unequal treatment.
- **Beneficence** = net positive, least harm; requires **equipoise** (no advance knowledge of which arm is better) — stop a trial early if one arm is clearly superior.
- **Vulnerable populations** needing extra protection: **children, pregnant individuals, prisoners**; oversight via the **IRB**.
`,
      detail: `
#### Medical ethics vs. research ethics
| **Medical ethics** (4 tenets) | **Research ethics** — **Belmont Report**, 1979 (3 pillars) |
|---|---|
| **Beneficence** — act in the patient's best interest | **Beneficence** — broader: net good for study *and* general population |
| **Nonmaleficence** — avoid harm > benefit | *(folded into beneficence)* |
| **Respect for autonomy** — honor patient decisions | **Respect for persons** — autonomy *plus* honesty, consent, confidentiality |
| **Justice** — treat similar patients alike; distribute resources fairly | **Justice** — fair choice of questions *and* subjects |

:::keyconcept
**Autonomy vs. respect for persons.** **Autonomy** (medical ethics) is simply the right to make and have respected one's own decisions. **Respect for persons** (research ethics) is *broader* — it adds **honesty, informed consent, confidentiality, and freedom from coercion**.
:::

#### Respect for persons
Includes honesty (generally **prohibits deception**), the right to **withdraw consent at any time**, and:

- **Informed consent** — the subject is adequately counseled on **procedures, risks, benefits, and goals** before deciding.
- **No coercive influence** — coercion destroys autonomy. Sources: a **power imbalance** (teacher–student), an **extreme financial incentive**, or being unable to get treatment any other way.
- **Confidentiality** of subject data.
- **Vulnerable populations** — **children, pregnant individuals, prisoners** — require special protections; **IRBs** (institutional review boards) enforce them.

:::realworld
The **Tuskegee syphilis experiment** (1932–1972, U.S. Public Health Service) enrolled impoverished African American men in a study of untreated syphilis — giving **sham treatments**, barring real care, and never telling them they had syphilis. Its severity was the **primary impetus for the Belmont Report**.
:::

#### Justice
Justice governs both **which questions** are pursued and **which subjects** are used.

- **Morally relevant differences** are the only acceptable reasons to treat individuals differently.
  - *Relevant:* **age** (longer life expectancy), **population size** (more potential good), **likelihood of benefit**.
  - *Not relevant:* **race, ethnicity, sexual orientation, gender identity, disability status, financial status**.
  - *Context-dependent:* **religion** (e.g., declining a religiously-prohibited treatment aligns with autonomy).
- **Risk must be distributed fairly** → seek a **diverse** sample (which also boosts **external validity**).
- Exception: the **target population most likely to benefit** may justly bear a **greater share of risk**; when no group is more likely to benefit, **all share risk equally**.

:::keyconcept
**Coercion vs. compensation.** **Monetary compensation** does *not* change the decision to participate. **Coercive influence** removes autonomy — the subject can no longer freely choose. Marketing a drug to *severe* diabetics but enrolling only *mild* diabetics violates **justice** (wrong target population) *and* introduces **selection bias**.
:::

#### Beneficence
Aim for a **net positive** change with **minimal harm**.

- Benefits may be intangible (satisfaction), incidental (small financial incentive), or future (membership in the target population).
- Use the **least invasive/painful** method — a **finger stick** over an **indwelling catheter** when either would do.
- **Equipoise** — researchers must **not know in advance** which treatment arm is superior. If one arm proves clearly better mid-study, the trial must **stop** (continuing the inferior arm is a net harm).

:::mnemonic
**Belmont's 3 R/J/B pillars** → **"Really Just Beneficial."** **R**espect for persons · **J**ustice · **B**eneficence. The medical-ethics extra (**nonmaleficence**, *"do no harm"*) is absorbed into research-ethics **beneficence**.
:::
`
    },

    /* ─────────────────────── 11.5 Research in the Real World ─────────────────────── */
    {
      id: 's5', num: '11.5', title: 'Research in the Real World',
      goals: [
        'Compare and contrast internal and external validity',
        'Explain the impact of sample size on generalizability',
        'Recall the qualities a study must have to justify an intervention'
      ],
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'A sigmoidal dose–response curve (pH rising as NaOH is added): the kind of nonlinear relationship regression analysis must capture when interpreting real-world data.' }],
      recap: `
- A **population** = every individual with the attributes of interest; its measure is a **parameter**. A **sample** = a subset; its measure is a **statistic**. **Random samples** are the gold standard.
- **Small samples** are dominated by **random variation/outliers**; large/repeated samples let statistics estimate parameters.
- **Internal validity** = support for **causality** within the study. **External validity** = **generalizability** to the target population.
- To **justify an intervention**, a study needs **both statistical significance** (not due to chance) **and clinical significance** (a worthwhile change in health).
`,
      detail: `
#### Populations vs. samples
| Term | Definition | Its measure |
|---|---|---|
| **Population** | The **complete** group with the attributes of interest (e.g., all humans ≈ 7 billion) | **Parameter** |
| **Sample** | Any **subset** that excludes some members of the population | **Statistic** |

- Measuring a whole population is rarely feasible → we **generalize from samples**.
- **Random samples** are the **gold standard** for being representative.
- With **large or repeated** samples, statistics estimate population **parameters**; a **single small** sample reveals little.

:::keyconcept
A **parameter** describes a whole **P**opulation; a **statistic** describes a **S**ample. To compute a parameter you must measure **every** member — which is why "the mean weight of all U.S. residents" is essentially impossible to obtain (>160 million people), making it a *feasibility* problem, not an ethics one.
:::

#### Generalizability — internal vs. external validity
| | **Internal validity** | **External validity** |
|---|---|---|
| Asks | Is the **causal link** within the study sound? | Do results **generalize** to the target population? |
| A.k.a. | Support for **causality** | **Generalizability** |
| Threatened by | Confounding, bias, poor controls | Narrow, unrepresentative samples |

- **Low generalizability:** a psoriasis study enrolling only patients diagnosed within the last year.
- **High generalizability:** a sample whose time-since-diagnosis distribution **matches the full patient population**.

:::keyconcept
**Sample size and generalizability.** Small samples are subject to far more **random variation** — a single outlier can dominate. Larger samples dilute outliers, so a representative large sample raises **external validity**.
:::

:::realworld
Drugs are evaluated **continuously** partly because of poor **preclinical generalizability** — unforeseen risks appear only once a drug reaches the **whole population**, sometimes forcing new warnings or market withdrawal.
:::

#### Supporting an intervention: statistical vs. clinical significance
| | **Statistical significance** | **Clinical significance** |
|---|---|---|
| Means | The result is **not due to random chance** | A **worthwhile** change in health status |
| Failure mode | May reflect chance | Real but **too small to matter** (e.g., −1 mmHg systolic BP) |

To **justify an intervention**, a study must show **BOTH**. A statistically significant result with no clinical impact (e.g., a therapy that extends pregnancy by only a few hours) **should not change treatment**.

:::mnemonic
**"Significant ≠ meaningful."** **Stat**istical significance = *probably real*; **clinical** significance = *actually matters to the patient*. You need the **double yes** before recommending a treatment.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'The Scientific Method',
        points: [
          'The scientific method is **8 ordered steps**: question → gather data → hypothesis (generate); collect data → analyze → interpret (test); publish → verify (report).',
          'A hypothesis in **if–then** format is inherently **testable**; narrow questions beat broad "Why" questions.',
          '**FINER** judges a research question: **F**easible, **I**nteresting, **N**ovel, **E**thical, **R**elevant.'
        ]
      },
      {
        section: 'Basic Science Research',
        points: [
          'Lab-based and experiment-driven; the experimenter\'s **high control** makes it the **best setting for causality**.',
          'We manipulate the **independent variable** (x-axis) and observe the **dependent variable** (y-axis).',
          '**Controls** correct for non-model influences: **positive** ensures an expected change; **negative** ensures no change when none is expected.',
          'Error is mostly **measurement error**: **accuracy (validity)** = near the true value; **precision (reliability)** = consistent. Only inaccuracy creates **bias**.'
        ]
      },
      {
        section: 'Human Subjects Research',
        points: [
          'Ethical limits lower control → causality is harder; much of it is **observational**.',
          '**Cohort** = exposures forward in time → outcome; **cross-sectional** = exposure & outcome at once; **case–control** = outcome → backward to exposure.',
          'Causality in observational data is supported by **Hill\'s criteria** (temporality is the only *necessary* one).',
          '**Bias** is systematic, from **data collection** (selection most common; detection; Hawthorne). **Confounding** is a **data-analysis** error from a shared third variable.'
        ]
      },
      {
        section: 'Ethics',
        points: [
          'Medical ethics: **beneficence, nonmaleficence, respect for autonomy, justice**.',
          'Research ethics (**Belmont Report**): **respect for persons** (autonomy + consent + confidentiality), **justice** (which questions & subjects), **beneficence** (most good, least harm).',
          'Beneficence requires **equipoise** — no advance knowledge of which study arm is better.'
        ]
      },
      {
        section: 'Research in the Real World',
        points: [
          'A **population** is measured by a **parameter**; a **sample** by a **statistic**.',
          '**Internal validity** = causality within the study; **external validity** = **generalizability** to the population.',
          'An intervention is justified only with **both statistical and clinical significance**.'
        ]
      }
    ],
    mnemonics: [
      '**FINER** = a worthwhile study looks **"finer"**: **F**easible · **I**nteresting · **N**ovel · **E**thical · **R**elevant.',
      '**Scientific method, 3 phases:** **Generate** (Q → data → hypothesis) · **Test** (collect → analyze → interpret) · **Report** (publish → verify).',
      '**Accuracy vs. precision:** a**C**curacy = **C**orrect (on the bullseye); **Pre**cision = **Pre**dictable/repeatable (tight cluster). Both = tight *and* centered. Only inaccuracy → bias.',
      '**Observational designs:** **Co**hort **Co**mes forward (exposure→outcome); **Case–control** looks **back** (outcome→exposure); **Cross-sectional** = one snapshot (no **temporality**).',
      '**Hill\'s criteria:** only **Temporality is required** — cause must precede effect, or it is *not* causal.',
      '**Types of bias = "SDH":** **S**election (sample ≠ population, most common) · **D**etection (inconsistent screening) · **H**awthorne (behavior changes under observation).',
      '**Belmont 3 pillars = "Really Just Beneficial":** **R**espect for persons · **J**ustice · **B**eneficence.',
      '**Significance double-check:** **Stat**istical = *probably real*; **Clinical** = *actually matters*. Need **both** to justify an intervention.'
    ],
    keyConcepts: [
      '**Independent vs. dependent variable:** the IV is manipulated (x-axis), the DV is measured (y-axis). Controls (positive/negative) prove the DV wouldn\'t change without the intervention.',
      '**Bias is systematic, confounding is analytical:** bias skews data during *collection* (selection, detection, Hawthorne); confounding mischaracterizes a relationship during *analysis* via a hidden third variable.',
      '**Causality ladder:** basic science > experimental human studies > observational studies (correlation only, supported by Hill\'s criteria). Temporality is the non-negotiable requirement.',
      '**Validity has two meanings to keep straight:** *accuracy* (a measurement near the true value) **and** *internal validity* (a sound causal link) vs. *external validity* (generalizability).',
      '**Research ethics = Belmont:** respect for persons, justice, beneficence — with extra protections for vulnerable populations (children, pregnant individuals, prisoners) and a requirement of equipoise.'
    ],
    equations: []
  },

  questions: [
    {
      q: 'An experimenter investigates the effect of a new antibiotic on E. coli by plating cells and administering 1 mL of the antibiotic. Which of the following is an appropriate negative control?',
      type: 'mcq',
      choices: [
        'A plate with no cells that was coated with 1 mL of antibiotic',
        'A plate with E. coli and no additional treatment',
        'A plate with E. coli and 1 mL of isotonic saline',
        'A plate of epithelial cells treated with 1 mL of antibiotic'
      ],
      correct: 2,
      explanation: 'A control keeps conditions between two experiments as close as possible to establish causality. Here, adding 1 mL of volume might itself affect E. coli growth, so we must control for it by administering an equal volume of a theoretically inert compound (isotonic saline) to a plate of E. coli.'
    },
    {
      q: 'Which of the following would best establish a causal link?',
      type: 'mcq',
      choices: [
        'A cross-sectional study using survey data for hand-washing and colds',
        'A case–control study of a childhood exposure and a disease developed later in life',
        'A randomized clinical controlled trial of a new antipyretic drug',
        'An IQ test whose results are later separated by gender'
      ],
      correct: 2,
      explanation: 'An experiment will always establish a clearer causal link than an observational study. The randomized controlled trial is experimental; choices A, B, and D are all examples of observational data.'
    },
    {
      q: 'An experimenter determining the internal energy of a well-known compound cleans the glassware, completes the synthesis, calibrates a bomb calorimeter, then measures the thermodynamic values. One error here is that the experimenter:',
      type: 'mcq',
      choices: [
        'did not determine if the compound was novel or if the information had already been determined.',
        'did not have a specific goal at the beginning of the research.',
        'should not be involved in both the synthesis of the compound and later testing.',
        'should have calibrated the calorimeter before the synthesis of the compound.'
      ],
      correct: 0,
      explanation: 'The experimenter skipped the early phases of research — no data acquisition/refinement and no indication an experiment was even needed for a "well-known" value (it may not be novel). The stem shows a clear goal (eliminating B). Dividing synthesis and testing tasks is generally unnecessary in basic science (eliminating C). As long as the calorimeter was calibrated before use, timing relative to synthesis is irrelevant (eliminating D).'
    },
    {
      q: 'A researcher wishes to generate a parameter for the mean weight of residents of the United States. Which of the following is the most significant concern?',
      type: 'mcq',
      choices: [
        "Measuring a person's weight may have psychological consequences and is unethical.",
        'Gathering all of the necessary study participants would be prohibitive.',
        'Knowing the average weight of US residents does not provide any useful information.',
        'Enough studies have already been conducted on this topic to render it unnecessary.'
      ],
      correct: 1,
      explanation: 'A parameter is a population measure, so computing it requires measuring every single member — identifying and recording data for >160 million people is essentially impossible (a feasibility problem). Common biometric measures are not inherently unethical (eliminating A); mean weight has major public-health value (eliminating C); and no parameter for the entire population yet exists (eliminating D).'
    },
    {
      q: 'A cross-sectional study in which current smoking status and cancer history are assessed simultaneously cannot satisfy which of Hill\'s criteria?',
      type: 'mcq',
      choices: ['Strength', 'Coherence', 'Plausibility', 'Temporality'],
      correct: 3,
      explanation: 'Because exposure and outcome are measured at the same time, no conclusions about temporality are possible. The cancer patient may have begun smoking only after diagnosis, and this design cannot examine that ordering.'
    },
    {
      q: 'After randomization, it is discovered that one group in a study has almost twice as many women as the other. Which of the following is an appropriate response?',
      type: 'mcq',
      choices: [
        'Move men and women between groups manually so the gender profiles match.',
        'Check the randomization algorithm; if it is fair, continue with the research.',
        'Eliminate all of these subjects because of potential bias and randomize a new cohort.',
        'Keep the current cohort and continue randomizing subjects until the gender profiles are equal.'
      ],
      correct: 1,
      explanation: 'Randomization assumes results vary only by chance as long as assignment is proper. The correct response to a fair algorithm producing an unexpected split is to proceed. Manually reassigning or re-randomizing to a desired outcome introduces more error than leaving unequal groups (eliminating A and D), and dropping the cohort is unnecessary if the algorithm was fair (eliminating C).'
    },
    {
      q: 'An experimenter studies the effects of smoking on very low birth weight (VLBW) and of VLBW on IQ, considering: (I) Smoking is an independent variable. (II) Smoking is a dependent variable. (III) VLBW is an independent variable. (IV) VLBW is a dependent variable. Which statements are correct?',
      type: 'mcq',
      choices: ['I only', 'II and IV only', 'I, III, and IV only', 'II, III, and IV only'],
      correct: 2,
      explanation: 'Two relationships are assessed. For smoking→VLBW, smoking is the independent variable and VLBW the dependent variable (so I and IV are true). For VLBW→IQ, VLBW is now the independent variable and IQ the dependent variable (so III is true). Smoking is never a dependent variable, so II is false: I, III, and IV only.'
    },
    {
      q: 'In a new-medication study, treatment subjects are told about potential side effects while placebo subjects are not. Subjects have no contact and do not know their group, yet side effects are significantly more severe in the treatment group, as seen by the same assessor physician. This is most likely caused by:',
      type: 'mcq',
      choices: [
        'Physician unblinding only',
        'Patient unblinding only',
        'Both physician and patient unblinding',
        'Both physician and patient blinding'
      ],
      correct: 0,
      explanation: 'Because the same physician sees both groups, the physician may infer group assignment — especially if a subject mentions the expected side effects they were told about. Patients were not told their group and had no contact with each other, so patient unblinding is ruled out. This is physician unblinding only.'
    },
    {
      q: "As part of a graduate-program entrance exam, a student submits a grant proposal. The hypothesis is well formulated and backed by preliminary data, but it is rejected, with the committee citing several articles that already support the hypothesis. What mistake did the student make?",
      type: 'mcq',
      choices: [
        'The student did not formulate a testable hypothesis.',
        'The student did not spend sufficient time reviewing existing studies.',
        'The proposed study did not adequately test the hypothesis.',
        'The student did not have enough preliminary data.'
      ],
      correct: 1,
      explanation: 'In the scientific method, after forming a testable question one must search journals and databases. The committee citing studies that already affirmed the hypothesis shows the student under-reviewed existing work — making the question no longer novel/interesting. The well-formulated hypothesis and preliminary data eliminate A and D, and no critique of methods is given (eliminating C).'
    },
    {
      q: 'A new study of a weight-loss drug uses a radio advertisement to recruit participants. What type of error is most likely to result?',
      type: 'mcq',
      choices: ['Hawthorne effect', 'Selection bias', 'Confounding', 'Detection bias'],
      correct: 1,
      explanation: 'Requiring subjects to seek out and volunteer for the study introduces selection bias — volunteers listen to that radio station and are interested/willing in ways the general population may not be. Selection bias is the most common impediment to generalizability.'
    },
    {
      q: 'A researcher pays to have a study professionally translated into several languages, discusses risks and benefits with each participant, and lets them take documentation home to review before committing. This researcher has put special focus on:',
      type: 'mcq',
      choices: [
        'justice by explaining potential risks.',
        'beneficence by describing the potential benefits of the study.',
        "respect for persons by acknowledging the subject's perspective and rights.",
        'selection bias, by making the recruitment documents inclusive.'
      ],
      correct: 2,
      explanation: 'Informing the patient and providing time to make a decision are hallmarks of informed consent and autonomy, both of which fall under respect for persons.'
    },
    {
      q: 'Which method is most appropriate for an initial assessment of hemoglobin saturation during a breath-holding experiment?',
      type: 'mcq',
      choices: [
        'A pulse oximeter, which uses a small light on an adhesive bandage',
        'An arterial cannula, which permits repeated blood draws with a single puncture',
        'Repeated venipuncture, because a single puncture would cause data overlap',
        'A Swan–Ganz catheter through the femoral artery, measuring saturation nearest the heart'
      ],
      correct: 0,
      explanation: 'This is really an ethics question. All listed methods except venipuncture measure oxygen saturation. By the principle of beneficence we must minimize potential harm, so the noninvasive pulse oximeter is greatly favored over invasive options for an initial assessment.'
    },
    {
      q: 'A medical student cites a recent article reporting a statistically significant difference in pregnancy length with a new therapy. Which is most likely a valid criticism of the article?',
      type: 'mcq',
      choices: [
        'Medical students usually reference articles in the newest journals, which may be unreliable.',
        "The effect didn't change patient outcomes, only a secondary measure.",
        'There is a lack of internal validity in the results, despite significance.',
        'Selection bias is inherent in the scientific process.'
      ],
      correct: 1,
      explanation: 'Statistical significance is not the same as clinical significance. Some medications extend pregnancy in preterm labor by only a few hours; because that may not change patient outcomes, it should not by itself inform treatment decisions.'
    },
    {
      q: 'Which sample would be the most appropriate for a study on hormone replacement therapy for postmenopausal symptoms?',
      type: 'mcq',
      choices: ['Prepubescent girls', 'Premenopausal adult women', 'Pregnant women', 'Postmenopausal women'],
      correct: 3,
      explanation: 'Samples should be drawn from the target population — here, postmenopausal women. Prepubescent girls and pregnant women are vulnerable populations with special protections against coercion (eliminating A and C), and premenopausal women are unlikely to need hormone replacement therapy absent a specific condition (eliminating B).'
    },
    {
      q: 'Use of a colorimetric assay to determine protein concentration may be subject to all of the following EXCEPT:',
      type: 'mcq',
      choices: ['the use of standards.', 'measurement error.', 'the Hawthorne effect.', 'systematic error.'],
      correct: 2,
      explanation: 'The Hawthorne effect — a change in behavior because one knows they are being observed — only occurs with human subjects. A basic-science colorimetric assay involves no human subjects, so it is not subject to the Hawthorne effect (standards, measurement error, and systematic error all still apply).'
    }
  ]
};
