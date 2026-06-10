// Biochem Chapter 12 — Bioenergetics and Regulation of Metabolism. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are sourced from ch12.json / ch12.md;
// the recap/detail markdown is authored here.
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 12,
  title: 'Bioenergetics and Regulation of Metabolism',
  subtitle: 'Thermodynamics & bioenergetics · the role of ATP · biological oxidation–reduction · metabolic states · hormonal regulation · tissue-specific metabolism · integrative metabolism',

  blocks: [
    /* ───────────────── 12.1 Thermodynamics and Bioenergetics ───────────────── */
    {
      id: 's1', num: '12.1', title: 'Thermodynamics and Bioenergetics',
      goals: [
        'Describe the relationship between ΔG° and ΔG°′',
        'Explain why heat can be used as a measure of internal energy for biological systems',
        'Predict the spontaneity of a reaction given the signs of ΔH and ΔS'
      ],
      recap: `
- **Bioenergetics** = the study of energy states in biological systems; the sign of **free energy ($\\Delta G$)** predicts whether a reaction is favorable.
- **Negative $\\Delta G$ → spontaneous** (forward, exergonic, loses free energy); **positive $\\Delta G$ → nonspontaneous** (endergonic); **$\\Delta G = 0$ at equilibrium**.
- $\\Delta G = \\Delta H - T\\Delta S$: enthalpy ($\\Delta H$ = heat change), entropy ($\\Delta S$ = disorder), temperature ($T$ in K).
- In a **closed** biological system, $V$ and $P$ are constant, so **no work** is done → $\\Delta U = Q$ (internal energy change equals heat). That's why **heat measures internal energy**.
- **$\\Delta G°$** = standard state (1 M, 1 atm, 25 °C). **$\\Delta G°′$** adds one fix: **pH 7** ($[\\text{H}^+] = 10^{-7}\\,\\text{M}$), the biochemist's standard.
`,
      detail: `
#### Open vs. closed biological systems
**Bioenergetics** describes energy states in living systems. The first question is what kind of system we are dealing with:

| System | Exchanges with environment | When it applies |
|---|---|---|
| **Open** | **Both matter and energy** (heat, work, food, respiration, elimination) | The **whole organism** |
| **Closed** | **Energy only** — no exchange of matter | A **cell or subcellular process** (most biochemistry) |

In a **closed** system we can simplify the **internal energy ($U$)** — the sum of all interactions within and between atoms (vibration, rotation, linear motion, stored chemical energy).

By the **First Law of Thermodynamics**, $\\Delta U = Q - W$, where $Q$ is heat and $W$ is work. In thermodynamics **work refers to changes in pressure and volume**. In living systems $P$ and $V$ are essentially constant, so $W = 0$ and:

$$\\Delta U = Q$$

:::keyconcept
Because no $P$–$V$ work is done in a closed biological system, the **change in internal energy equals the heat exchanged**. This is why **heat ($Q$) can be used as a direct measure of internal energy** in living systems.
:::

:::expertise
The energy of chemical reactions is **general chemistry**, while work is **physics**. On Test Day you'll see crossover that lets you draw on both — use that background to your advantage rather than treating biochem in isolation.
:::

#### Enthalpy, entropy, and free energy
Whether a reaction proceeds is set by how **enthalpy** and **entropy** change:

| Quantity | Symbol | Measures | Units |
|---|---|---|---|
| **Enthalpy** | $\\Delta H$ | Overall change in **heat** of the system (at constant $P$, $V$: $\\Delta H = Q$) | $\\text{kJ/mol}$ |
| **Entropy** | $\\Delta S$ | Degree of **disorder / energy dispersion** | $\\text{J/(K·mol)}$ |
| **Temperature** | $T$ | Absolute temperature | $\\text{K}$ |
| **Free energy** | $\\Delta G$ | Net energy available to do work → **spontaneity** | $\\text{kJ/mol}$ |

These combine in the **Gibbs free energy equation** (Equation 12.1):

$$\\Delta G = \\Delta H - T\\Delta S$$

#### Reading the sign of ΔG
The sign of $\\Delta G$ predicts the direction a reaction proceeds spontaneously:

| $\\Delta G$ | Direction | Energy | Term |
|---|---|---|---|
| **Negative ($< 0$)** | **Forward** (spontaneous) | Net **loss** of free energy | **Exergonic** |
| **Positive ($> 0$)** | Reverse is spontaneous (nonspontaneous forward) | Net **gain** of free energy | **Endergonic** |
| **Zero ($= 0$)** | **Equilibrium** — no net change in [reactants]/[products] | — | — |

Combining the signs of $\\Delta H$ and $\\Delta S$ gives the full spontaneity matrix:

| | $-\\Delta H$ (exothermic) | $+\\Delta H$ (endothermic) |
|---|---|---|
| **$+\\Delta S$** (more disorder) | **Spontaneous at all $T$** | Spontaneous at **high $T$** |
| **$-\\Delta S$** (more order) | Spontaneous at **low $T$** | **Nonspontaneous at all $T$** |

:::mnemonic
**ΔG sign rule — "Negative is Nice (spontaneous)."** A **N**egative $\\Delta G$ runs forward on its own. For $\\Delta G = \\Delta H - T\\Delta S$: a reaction *wants* **$-\\Delta H$** (release heat) **and** **$+\\Delta S$** (make a mess). Get both and it's spontaneous at every temperature.
:::

:::bridge
Enthalpy, entropy, and free energy are developed more fully in **Chapter 7 of MCAT General Chemistry Review**.
:::

#### Physiological conditions: ΔG° vs. ΔG°′
$\\Delta G$ applies at **any** concentration and temperature. **Standard free energy ($\\Delta G°$)** is fixed to standard conditions: **1 M** concentrations, **1 atm**, **25 °C**. The two relate through Equation 12.2:

$$\\Delta G = \\Delta G° + RT\\ln Q$$

where $R$ is the universal gas constant, $T$ is temperature, and $Q$ is the **reaction quotient**.

Biochemistry breaks standard state on **one** condition — **pH**. A 1 M proton concentration is **pH 0**, far too acidic for the body. The **modified standard state** fixes $[\\text{H}^+] = 10^{-7}\\,\\text{M}$ (**pH 7**), and the resulting standard free energy gets the special symbol **$\\Delta G°′$**.

:::keyconcept
**$\\Delta G°′$ adjusts only for pH** (fixing it at 7). **Temperature and all other concentrations stay at standard-state values** — if a reactant or product is not at 1 M, you must still correct for it in the $RT\\ln Q$ term.
:::

**Quick trend (verify with numbers on Test Day):** reactions with **more products than reactants** tend to have a **more negative $\\Delta G$**; reactions with **more reactants than products** tend to have a **more positive $\\Delta G$**.
`
    },

    /* ───────────────────────── 12.2 The Role of ATP ───────────────────────── */
    {
      id: 's2', num: '12.2', title: 'The Role of ATP',
      goals: [
        'Predict the impact of ATP coupling on the energetics of a reaction',
        'Calculate free energy change for an overall reaction given energetic data for component reactions',
        'Relate the structure of ATP to its role as an energy carrier'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 12.1 — Adenosine triphosphate (ATP): adenine + ribose (adenosine) joined to three phosphate groups whose crowded negative charges store energy.' }],
      recap: `
- **ATP is the cell's energy currency** — a deliberately **mid-level** carrier so little free energy is wasted per reaction (think "one-dollar bills").
- Structure = **adenosine** (adenine + ribose) + **three phosphates**; energy lives in the **high-energy phosphate bonds**.
- Hydrolysis is very favorable ($\\Delta G°′ \\approx -30.5\\,\\text{kJ/mol}$) because products relieve **charge repulsion** and gain **resonance stabilization**.
- ATP powers unfavorable reactions by **coupling**: overall $\\Delta G = \\sum \\Delta G$ of the component reactions (**Hess's law**).
- Made by **substrate-level** and **oxidative phosphorylation**; recycled (ATP ↔ ADP + $\\text{P}_i$) **>1000×/day**.
`,
      detail: `
#### Why ATP — and why "mid-level"?
Fuels differ in energy density: **fat ≈ 9 kcal/g** vs. **≈ 4 kcal/g** for carbohydrate, protein, or ketones — so **fat is preferred for long-term storage**. But the cell needs energy in a **readily usable** form: **adenosine triphosphate (ATP)**.

ATP is a **mid-level** energy carrier (see the hydrolysis table). The logic is your wallet: if you never get change back, you want **one-dollar bills**. ATP can't recover "leftover" free energy after a reaction, so a **smaller** free-energy carrier wastes less. ATP yields **≈ 30 kJ/mol** physiologically; if a reaction needs only 10 kJ/mol, a higher-energy donor like creatine phosphate would squander even more.

![Figure 12.1 — Structure of ATP.](${fig(1, 0).src})

#### Free energy of hydrolysis — key phosphate compounds
Table 12.1 ranks compounds by the free energy released when their phosphate is transferred to water. ATP sits in the **middle**:

| Compound | $\\Delta G°′$ (kJ/mol) | Function |
|---|---|---|
| **cAMP** | **−50.4** | Second messenger |
| **Creatine phosphate** | **−43.3** | Direct phosphorylation in muscle |
| **ATP** | **−30.5** | Energy turnover in **all** cell types |
| **Glucose 6-phosphate** | **−13.9** | Intermediate of glycolysis & gluconeogenesis |
| **AMP** | **−9.2** | ATP synthesis |

:::keyconcept
**ATP is used to fuel energetically unfavorable reactions or to activate/inactivate other molecules.** It is consumed either by **hydrolysis** or by **transfer of a phosphate group** to a target.
:::

#### Structure → high-energy bonds
ATP = an **adenosine** molecule (adenine + ribose) bonded to **three phosphate groups**. It is generated from **ADP + $\\text{P}_i$** using energy from an exergonic reaction or an electrochemical gradient. Removing phosphates yields **ADP** (one removed) or **AMP** (two removed).

What makes the phosphate bonds "high-energy":
- The phosphate groups' **negative charges repel** one another in ATP.
- After hydrolysis, **ADP and $\\text{P}_i$ are stabilized by resonance** and have less charge repulsion.
- ATP is stable on its own but **much more stable after hydrolysis** → very negative $\\Delta G$.

Under pure standard conditions $\\Delta G° \\approx -55\\,\\text{kJ/mol}$; at **pH 7 with excess $\\text{Mg}^{2+}$**, $\\Delta G°′ \\approx -30.5\\,\\text{kJ/mol}$. **ADP** behaves similarly, but **AMP** has a much smaller $\\Delta G°′ \\approx -9.2\\,\\text{kJ/mol}$.

A person turns over **~90% of body weight in ATP daily** while holding only **~50 g** at any moment — explained by recycling ATP/ADP/$\\text{P}_i$ **>1000 times per day**. Most ATP comes from **mitochondrial ATP synthase**, with some from **glycolysis** and (indirectly via GTP) the **citric acid cycle**.

#### Hydrolysis and coupling
ATP hydrolysis usually appears in **coupled reactions** — e.g., pumping $\\text{Na}^+$/$\\text{K}^+$ against their gradients uses energy from ATP hydrolysis. **ATP cleavage** transfers a high-energy phosphate to another molecule, **activating or inactivating** it.

For coupled phosphoryl-group transfers, the **overall free energy is the sum of the individual reactions** (Hess's law):

$$\\Delta G°′_{\\text{overall}} = \\sum \\Delta G°′_{\\text{steps}}$$

:::bridge
**Hess's law** (Chapter 7 of MCAT General Chemistry Review) holds for all **state functions** — pressure, density, temperature, volume, enthalpy, internal energy, free energy, and entropy.
:::

#### Worked example — phosphoryl group transfer
To find the free energy of transferring phosphate from **creatine phosphate** to **ADP**, add the hydrolysis steps (reversing the ATP step):

| Step | Reaction | $\\Delta G°′$ (kJ/mol) |
|---|---|---|
| 1 | $\\text{Creatine phosphate} + \\text{H}_2\\text{O} \\rightarrow \\text{Creatine} + \\text{P}_i$ | **−43.3** |
| 2 (reversed) | $\\text{ADP} + \\text{P}_i \\rightarrow \\text{ATP} + \\text{H}_2\\text{O}$ | **+30.5** |
| **Net** | $\\text{Creatine phosphate} + \\text{ADP} \\rightarrow \\text{Creatine} + \\text{ATP}$ | **−12.8** |

The net $\\Delta G°′$ is negative, so creatine phosphate **spontaneously** regenerates ATP — exactly how muscle buffers its ATP supply.

:::mnemonic
**Coupling = "let ATP pay the bill."** Bolt a hugely exergonic ATP hydrolysis ($-30.5$) onto an endergonic step; if the **sum** is negative, the whole thing runs. You're just doing **Hess's law** with phosphates.
:::
`
    },

    /* ───────────────── 12.3 Biological Oxidation and Reduction ───────────────── */
    {
      id: 's3', num: '12.3', title: 'Biological Oxidation and Reduction',
      goals: [
        'Explain the benefits of analyzing half-reactions for biological oxidation–reduction reactions',
        'Recall soluble electron carriers, such as NADH and CoQ, and the pathways they are paired with'
      ],
      recap: `
- Split redox reactions into **half-reactions** to count **electrons transferred**, balance equations, and find electrochemical potential.
- **Spontaneous redox: $\\Delta G < 0$ and $E > 0$** (positive electromotive force).
- **Soluble electron carriers**: **NADH, NADPH, $\\text{FADH}_2$, ubiquinone (CoQ), cytochromes, glutathione**.
- **NADH** feeds the ETC (catabolism, ATP); **NADPH** powers **anabolism/biosynthesis** and antioxidant defense.
- **Flavoproteins** (from **riboflavin / vitamin $\\text{B}_2$**) → **FAD** and **FMN**; FMN is bound to **Complex I**.
`,
      detail: `
#### Half-reactions
As in general chemistry, splitting an oxidation–reduction reaction into **half-reactions** reveals the **number of electrons transferred**. Example — **lactic acid fermentation** (lactate dehydrogenase converts pyruvate + NADH → lactate + $\\text{NAD}^+$):

| Half-reaction | Equation |
|---|---|
| **Reduction** | $\\text{C}_3\\text{H}_4\\text{O}_3 + 2\\text{H}^+ + 2e^- \\rightarrow \\text{C}_3\\text{H}_6\\text{O}_3$ (pyruvate → lactate) |
| **Oxidation** | $\\text{NADH} \\rightarrow \\text{NAD}^+ + \\text{H}^+ + 2e^-$ |
| **Overall** | $\\text{C}_3\\text{H}_4\\text{O}_3 + \\text{NADH} + \\text{H}^+ \\rightarrow \\text{C}_3\\text{H}_6\\text{O}_3 + \\text{NAD}^+$ |

:::keyconcept
**Spontaneous redox reactions have a negative $\\Delta G$ and a positive $E$** (electromotive force). Identify the **oxidizing agent** (gets reduced) and **reducing agent** (gets oxidized) — here NADH is the reducing agent and pyruvate is the oxidizing agent.
:::

:::bridge
Oxidation–reduction (Chapter 11 of MCAT General Chemistry Review; Chapter 4 of MCAT Organic Chemistry Review) is characteristic of **oxidoreductase** enzymes, which dominate ATP synthesis.
:::

#### Electron carriers — soluble vs. membrane-bound
High-energy electron carriers shuttle electrons; the **ETC** uses them to drive oxidative phosphorylation, dumping free energy into the **proton-motive force** across the inner mitochondrial membrane.

| Carrier | Location / type | Key pathway(s) | Note |
|---|---|---|---|
| **NADH** | Soluble | Glycolysis, fermentation, citric acid cycle, ETC | Major catabolic carrier |
| **NADPH** | Soluble | **Pentose phosphate pathway**, lipid biosynthesis, antioxidant defense, photosynthesis | Powers **anabolism**, not ATP |
| **$\\text{FADH}_2$ / FAD** | Soluble (flavoprotein) | Citric acid cycle, β-oxidation, ETC | From riboflavin |
| **Ubiquinone (CoQ)** | Membrane-bound (mobile) | ETC | Lipid-soluble |
| **Cytochromes** | Membrane-bound | ETC | Heme **iron** carriers |
| **Glutathione** | Soluble | Oxidative stress defense | Reduced by flavoproteins |
| **FMN** | **Membrane-bound** (also can be soluble) | Bound to **Complex I** of the ETC | Flavin mononucleotide |

Proteins with **iron–sulfur clusters** are especially well suited to carrying electrons.

:::keyconcept
**NADH vs. NADPH** — one phosphate apart, opposite jobs. **NADH** delivers electrons to the **ETC for ATP** (catabolism). **NADPH** delivers reducing power for **biosynthesis** and antioxidant defense (anabolism). Don't let the MCAT swap them.
:::

#### Flavoproteins
**Flavoproteins** contain a modified **vitamin $\\text{B}_2$ (riboflavin)** and are nucleic-acid derivatives — either **flavin adenine dinucleotide (FAD)** or **flavin mononucleotide (FMN)**. They are most notable as **electron carriers in mitochondria and chloroplasts**, but also:
- Activate other **B vitamins** to their active forms.
- Serve as coenzymes for **fatty-acid oxidation**, **pyruvate decarboxylation**, and **glutathione reduction**.

:::realworld
**Riboflavin deficiency** causes failure to thrive and death in experimental models. In humans it is **rare**, occurring mainly in the severely malnourished.
:::

:::mnemonic
**"NADPH builds, NADH burns."** The extra **P** in NAD**P**H stands for **P**roduction (anabolism/biosynthesis); plain NADH **burns** fuel through the ETC.
:::
`
    },

    /* ───────────────────────── 12.4 Metabolic States ───────────────────────── */
    {
      id: 's4', num: '12.4', title: 'Metabolic States',
      goals: [
        'Identify disequilibriums that are maintained at energetic cost within the cell',
        'Compare the behavior of different tissues during postprandial, postabsorptive, and prolonged fasting states',
        'Associate the three metabolic states with related hormone activity'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 12.2 — Metabolic profile of the postprandial (absorptive) state: insulin drives glucose into liver, muscle, and adipose for storage.' }],
      recap: `
- Cells favor **homeostasis, not equilibrium** — disequilibria (e.g., the $\\text{Na}^+$/$\\text{K}^+$ gradient) **store energy** but cost ATP to maintain.
- **Postprandial (well-fed/absorptive):** **insulin** high → **anabolism & storage** (glycogen, triacylglycerol, protein).
- **Postabsorptive (fasting):** insulin falls, **counterregulatory hormones** rise → glycogenolysis, then gluconeogenesis (~12 h to peak).
- **Prolonged fasting (starvation):** glucagon/epinephrine markedly high → **lipolysis & ketogenesis**; **brain shifts to ketones (~⅔)**, sparing protein.
- **Insulin-insensitive throughout:** **nervous tissue** (glucose) and **RBCs** (anaerobic glucose only).
`,
      detail: `
#### Equilibrium is the enemy
Unlike general chemistry, biochemistry treats **equilibrium as undesirable** — a fixed state stores no usable energy. Cells instead maintain **homeostasis**: a stable state held *away* from equilibrium, often at an **energy cost**.

:::keyconcept
**Disequilibrium maintained at energetic cost** is the rule for **excitable cells** (neurons, muscle). The **$\\text{Na}^+$/$\\text{K}^+$ pump** keeps $\\text{Na}^+$ high outside the cell — a gradient that stores potential energy and regulates cell volume, paid for in ATP.
:::

The pathways that run depend on **nutritional status**. Three states matter:

| State | Other names | Hormone profile | Dominant process |
|---|---|---|---|
| **Postprandial** | Absorptive, well-fed | **Insulin ↑** | **Anabolism / storage** |
| **Postabsorptive** | Fasting (overnight) | Insulin ↓, glucagon/catecholamines ↑ | Transition to **catabolism** |
| **Prolonged fasting** | Starvation | **Glucagon & epinephrine ↑↑** | Lipolysis, **ketogenesis** |

#### Postprandial (absorptive) state
Occurs shortly after eating and lasts **3–5 hours**. Marked by **anabolism and fuel storage** over catabolism. Nutrients flow from the gut via the **hepatic portal vein** to the liver. Rising blood glucose triggers **insulin**, whose three target tissues are **liver, muscle, and adipose** (Figure 12.2):

- Promotes **glycogen synthesis** in liver and muscle.
- Once glycogen is full, the **liver converts excess glucose → fatty acids → triacylglycerols**.
- Promotes **triacylglycerol synthesis** in adipose and **protein synthesis** in muscle (plus glucose entry into both).
- The **liver meets most of its own energy needs by oxidizing excess amino acids**.

![Figure 12.2 — Metabolic profile of the absorptive state.](${fig(3, 0).src})

:::keyconcept
Two cell types are **insensitive to insulin**: **nervous tissue** (oxidizes glucose to $\\text{CO}_2$ + water in well-fed and normal-fasting states) and **red blood cells** (use glucose **anaerobically only**, in *every* metabolic state).
:::

#### Postabsorptive (fasting) state
**Counterregulatory hormones** — **glucagon, cortisol, epinephrine, norepinephrine, growth hormone** — oppose insulin on muscle, adipose, and liver (Figure 12.3):

- **Liver:** glycogen degradation and **glucose release** are stimulated.
- **Glycogenolysis** starts almost immediately; **gluconeogenesis** is also stimulated by glucagon but is **slower**, taking **~12 hours to reach maximum velocity**.
- Falling insulin + rising **epinephrine** release **amino acids from muscle** and **fatty acids from adipose**, providing carbon skeletons and energy for **gluconeogenesis**.

![Figure 12.3 — Metabolic profile of the postabsorptive (fasting) state.](${fig(3, 1).src})

#### Prolonged fasting (starvation)
**Glucagon and epinephrine are markedly elevated.**

- High glucagon-to-insulin ratio → **rapid liver glycogenolysis**; as glycogen depletes, **gluconeogenesis** continues.
- After **~24 hours**, **gluconeogenesis is the predominant glucose source**.
- **Lipolysis is rapid** → excess **acetyl-CoA** → **ketone body** synthesis.
- Once fatty acids and ketones are high enough: **muscle burns fatty acids**; the **brain adapts to ketones**.
- After several weeks, the **brain gets ~⅔ of its energy from ketones, ~⅓ from glucose** — sparing the protein that would otherwise be degraded for gluconeogenesis.
- Cells with **few/no mitochondria (RBCs)** stay **glucose-dependent**.

:::mnemonic
**Three states, three gears:** **F**ed = **F**ill the tanks (insulin, store). **F**asting = **F**etch from storage (glycogenolysis → gluconeogenesis). **S**tarvation = **S**witch to fat/ketones (spare protein, feed the brain ketones).
:::
`
    },

    /* ───────────────── 12.5 Hormonal Regulation of Metabolism ───────────────── */
    {
      id: 's5', num: '12.5', title: 'Hormonal Regulation of Metabolism',
      goals: [
        'Describe the impact of key metabolic hormones, such as insulin, glucagon, and thyroid hormones, on metabolic function',
        'Apply knowledge of the metabolic hormones to a given disease state',
        'Recall the general structures and traits of metabolic hormones'
      ],
      images: [{ src: fig(4, 3).src, alt: fig(4, 3).alt, caption: 'Figure 12.6 — Reciprocal control of plasma glucose: insulin (well-fed) lowers it and stores fuel; glucagon (fasting) raises it via glycogenolysis and gluconeogenesis.' }],
      recap: `
- **Peptide hormones** (insulin, glucagon) act **fast** via **second messengers**; **steroid** (cortisol) and **amino-acid-derivative** (thyroid) hormones act **slowly** at the **transcriptional level**.
- **Insulin (β-cells) = the storage / "fed" hormone**: ↑ glucose uptake, glycogenesis, lipogenesis, protein synthesis; **↓** lipolysis & ketogenesis.
- **Glucagon (α-cells) = the "fasting" hormone**, target = **hepatocyte**: ↑ glycogenolysis, gluconeogenesis, ketogenesis.
- **Cortisol** (stress, glucocorticoid): ↑ blood glucose (gluconeogenesis from amino acids), is **permissive** for glucagon/catecholamines; chronic excess → fat storage.
- **Catecholamines** (epinephrine): ↑ glycogenolysis + lipolysis + **basal metabolic rate**; **thyroid hormones (T₃/T₄)**: set **BMR**, permissive for epinephrine.
`,
      detail: `
#### Two speeds of hormonal control
Metabolism must be coordinated across the whole organism, accomplished by hormones:

| Class | Examples | Solubility | Mechanism | Speed |
|---|---|---|---|---|
| **Peptide** | **Insulin, glucagon** | Water-soluble | **Second-messenger cascades** | **Fast** |
| **Amino-acid derivative** | **Thyroid hormones** | Fat-soluble | **Transcriptional** regulation | Slow / long-range |
| **Steroid** | **Cortisol** | Fat-soluble | **Transcriptional** regulation | Slow / long-range |

Levels are tuned by **feedback** — via endocrine axes (hypothalamic–pituitary) or by the substrate acted upon (e.g., insulin lowers glucose, which removes the trigger for more insulin).

#### Insulin
A **peptide hormone** from the **β-cells** of the pancreatic **islets of Langerhans** (Figure 12.4); the key **uptake & storage** hormone. Tissues are split by whether they need insulin to take up glucose:

| Need insulin for glucose uptake | Do **NOT** need insulin |
|---|---|
| **Adipose tissue** | Nervous tissue |
| **Resting skeletal muscle** | Kidney tubules |
| | Intestinal mucosa |
| | Red blood cells |
| | Pancreatic β-cells |

Insulin's actions by nutrient class:

- **Carbohydrate:** ↑ glucose uptake (muscle, fat); ↑ liver **glycogen synthesis** (↑ glucokinase, glycogen synthase; ↓ glycogen phosphorylase, glucose-6-phosphatase).
- **Protein:** ↑ amino-acid uptake by muscle → ↑ protein synthesis, ↓ breakdown.
- **Fat — increases:** glucose & triacylglycerol uptake by fat cells; **lipoprotein lipase** (clears VLDL & chylomicrons); **lipogenesis** in adipose and liver.
- **Fat — decreases:** **lipolysis** in adipose; **ketone body** formation by the liver.

**Secretion:** controlled mainly by **plasma glucose** — above **~100 mg/dL (≈ 5.6 mM)**, secretion is proportional to glucose. Glucose must be **metabolized** in the β-cell, ↑ ATP → ↑ intracellular $\\text{Ca}^{2+}$ → **exocytosis** of preformed insulin.

![Figure 12.4 — Insulin (light brown) in pancreatic β-cells.](${fig(4, 1).src})

:::realworld
**Type 1 diabetics** cannot make insulin **but still make glucagon**. This unopposed glucagon raises blood sugar far more than losing all pancreatic function (or developing insulin insensitivity) would.
:::

#### Glucagon
A **peptide hormone** from the **α-cells**; its primary target is the **hepatocyte** (Figure 12.5). Through second messengers it causes:

- **↑ Liver glycogenolysis** — activates glycogen **phosphorylase**, inactivates glycogen **synthase**.
- **↑ Liver gluconeogenesis** — pyruvate → PEP via **pyruvate carboxylase** + **PEPCK**; fructose 1,6-bisphosphate → fructose 6-phosphate via **fructose-1,6-bisphosphatase**.
- **↑ Liver ketogenesis, ↓ lipogenesis.**
- **↑ Lipolysis in the liver** (hormone-sensitive lipase) — but because it acts on liver, not adipocyte, glucagon is **not** a major fat-mobilizing hormone.

**Secretion:** **hypoglycemia** is the strongest promoter; **hyperglycemia** the strongest inhibitor. **Basic amino acids (Arg, Lys, His)** also promote it → glucagon rises after a **protein-rich meal**.

![Figure 12.5 — Glucagon (dark brown) in pancreatic α-cells.](${fig(4, 2).src})

#### Insulin vs. glucagon — the reciprocal pair
Insulin (well-fed) and glucagon (postabsorptive) **oppose** each other. Enzymes **phosphorylated by glucagon are dephosphorylated by insulin**, and vice versa (Figure 12.6).

| Action | **Insulin** | **Glucagon** |
|---|---|---|
| Blood glucose | **↓** (uptake) | **↑** (output) |
| Glycogen | **Synthesis ↑** | **Breakdown ↑** |
| Gluconeogenesis | ↓ | **↑** |
| Lipogenesis / lipolysis | **Lipogenesis ↑** | Liver lipolysis ↑ |
| Ketogenesis | **↓** | **↑** |
| Source cell | Pancreatic **β-cell** | Pancreatic **α-cell** |
| Metabolic state | Well-fed / absorptive | Postabsorptive / fasting |

![Figure 12.6 — Reciprocal relationship of glucagon and insulin on plasma glucose, fat, and protein metabolism.](${fig(4, 3).src})

:::mnemonic
**Insulin vs. glucagon — "I store, Glu gives."** **I**nsulin = **I**n storage (anabolic; β-cell; after eating). **Glu**cagon = **G**ives **glu**cose to the blood (catabolic in liver; α-cell; fasting). They're mirror images, so learning one gives you the other.
:::

:::bridge
The **endocrine system** (Chapter 5 of MCAT Biology Review) is the master homeostatic regulator. Like glucocorticoids and catecholamines, **mineralocorticoids** and **sex hormones** come from the adrenal glands but play minor metabolic roles.
:::

#### Glucocorticoids (cortisol)
From the **adrenal cortex**; part of the **stress / fight-or-flight** response. **Cortisol** (Figure 12.7) is a **steroid** that mobilizes energy stores:

- ↑ Delivery of **amino acids** (degradation) and ↑ **lipolysis**.
- **↑ Blood glucose** by two routes: (1) **inhibits glucose uptake** in muscle, lymphoid, and fat tissue + **↑ hepatic gluconeogenesis** (especially from amino acids); (2) a **permissive** function that **enhances glucagon, epinephrine, and other catecholamines**.

![Figure 12.7 — Structure of cortisol (a steroid hormone).](${fig(4, 4).src})

:::realworld
Long-term **glucocorticoid therapy** causes persistent **hyperglycemia**, which stimulates **insulin** — paradoxically promoting **fat storage** in adipose tissue rather than lipolysis (a cause of stress-related weight gain).
:::

The **adrenal cortex** makes **steroids** (glucocorticoids, mineralocorticoids, sex hormones); the **adrenal medulla** makes **catecholamines** (Figure 12.8).

![Figure 12.8 — Adrenal gland (enlarged): cortex (yellow) over medulla (brown interior).](${fig(4, 5).src})

#### Catecholamines (epinephrine, norepinephrine)
Secreted by the **adrenal medulla** (Figure 12.9):

- ↑ **Liver and muscle glycogen phosphorylase** → **glycogenolysis** → ↑ hepatic glucose output.
- Muscle glycogenolysis also rises, but muscle **lacks glucose-6-phosphatase**, so it **cannot release glucose** to the blood — it consumes it itself.
- ↑ **Lipolysis** in adipose (hormone-sensitive lipase); glycerol is a minor gluconeogenic substrate.
- **Epinephrine** acts on organs like the heart to ↑ **basal metabolic rate** via the **sympathetic nervous system** (the "adrenaline rush").

![Figure 12.9 — Adrenal catecholamines: (a) epinephrine; (b) norepinephrine.](${fig(4, 6).src})

#### Thyroid hormones (T₃, T₄)
Largely **permissive** — kept roughly constant rather than fluctuating with metabolic state. They **↑ basal metabolic rate** (↑ $\\text{O}_2$ consumption, heat production):

| Feature | **T₃** (triiodothyronine) | **T₄** (thyroxine) |
|---|---|---|
| Iodine atoms | **3** | **4** |
| Onset | **Rapid** | Slow (latency of hours) |
| Duration | Shorter | **Days** |
| Potency | **More potent** | Less potent |
| Blood level | Lower | Higher |
| Relationship | Active form | **Precursor** → converted to T₃ by **deiodinases** in target tissues |

Primary effects are on **lipid and carbohydrate** metabolism: ↑ cholesterol clearance, ↑ intestinal glucose absorption. **Epinephrine requires thyroid hormone** to exert a significant metabolic effect.

![Figure 12.10 — Thyroid hormones: (a) triiodothyronine (T₃); (b) thyroxine (T₄). Iodine atoms shown as purple spheres.](${fig(4, 7).src})

:::realworld
**Hypothyroidism** (too little) → cold intolerance, fatigue, weight gain, depression. **Hyperthyroidism** (too much) → weight loss, anxiety, jitteriness, fever. **Thyroid storm** (extreme hyperthyroidism) → **hyperthermia, tachycardia, hypertension, tachypnea**.
:::

#### Summary — the five metabolic hormones
| Hormone | Source | Class | Net metabolic effect |
|---|---|---|---|
| **Insulin** | Pancreatic β-cells | Peptide | **Storage**: ↑ uptake, glycogenesis, lipogenesis, protein synthesis |
| **Glucagon** | Pancreatic α-cells | Peptide | ↑ Blood glucose: **glycogenolysis + gluconeogenesis** (liver) |
| **Cortisol** | Adrenal cortex | Steroid | ↑ Glucose (gluconeogenesis from amino acids); **permissive** |
| **Catecholamines** | Adrenal medulla | Amino-acid deriv. | ↑ Glycogenolysis + lipolysis; ↑ **BMR** (sympathetic) |
| **Thyroid (T₃/T₄)** | Thyroid | Amino-acid deriv. | Set **BMR**; permissive for epinephrine |
`
    },

    /* ───────────────── 12.6 Tissue-Specific Metabolism ───────────────── */
    {
      id: 's6', num: '12.6', title: 'Tissue-Specific Metabolism',
      goals: [
        'Identify the preferred fuel sources and fuel quantities for different tissue types, including skeletal muscle and the brain',
        'Recall the metabolic functions of the liver'
      ],
      recap: `
- **Liver = most metabolically diverse tissue**: maintains **blood glucose** (glycogenolysis + gluconeogenesis) and makes **ketones, VLDL, urea, bile**; detoxifies.
- **Adipose** stores fat under **insulin**, releases it under **epinephrine** (hormone-sensitive lipase).
- **Resting muscle** uses glucose (well-fed) or **fatty acids/ketones** (fasting); **active muscle**: creatine phosphate → anaerobic glycolysis → oxidation, by duration.
- **Cardiac muscle prefers fatty acids** even when well-fed (ketones in fasting).
- **Brain** runs on **glucose** (~25% of body's glucose); **fatty acids can't cross the blood–brain barrier**; uses **ketones (~⅔) only in prolonged fasting**. **RBCs = glucose always.**
`,
      detail: `
#### Preferred fuels — the master table
Tissues match fuel use to form and function. Major metabolic sites: **liver, skeletal & cardiac muscle, brain, adipocytes** (Table 12.2):

| Organ | **Well-fed** | **Fasting** |
|---|---|---|
| **Liver** | Glucose and amino acids | Fatty acids |
| **Resting skeletal muscle** | Glucose | Fatty acids, ketones |
| **Cardiac muscle** | **Fatty acids** | Fatty acids, ketones |
| **Adipose tissue** | Glucose | Fatty acids |
| **Brain** | Glucose | Glucose (**ketones** in prolonged fast) |
| **Red blood cells** | Glucose | Glucose |

:::mnemonic
**"Heart loves fat, brain loves sugar, RBC has no choice."** **Cardiac** muscle prefers **fatty acids** even when fed; the **brain** sticks with **glucose** (ketones only when starving); **RBCs** burn **glucose anaerobically** in every state.
:::

#### Liver — the metabolic hub
Two headline roles: **keep blood glucose constant** and **make ketones** when fatty-acid oxidation is high.

- **After a meal:** extracts excess glucose → **replenishes glycogen**; remaining glucose → **acetyl-CoA → fatty acids**. Insulin drives both **glycogen and fatty-acid synthesis**; fatty acids → triacylglycerols → released as **VLDL**. Liver runs mostly on **oxidation of excess amino acids**.
- **Between meals / fasting:** **releases glucose**; glucagon promotes **glycogen degradation + gluconeogenesis** from **lactate, glycerol, and amino acids**.
- **Other liver jobs:** **cholesterol & fat** processing, the **urea cycle**, **bile** synthesis, **detoxification** of foreign substances.

#### Adipose tissue
- **After a meal:** insulin ↑ glucose uptake, induces **lipoprotein lipase** (in the capillary bed) to release fatty acids from **VLDL and chylomicrons**; fatty acids are **re-esterified to triacylglycerols** for storage. Glycerol phosphate comes from glucose. Insulin also **suppresses fatty-acid release**.
- **Fasting:** ↓ insulin + ↑ epinephrine activate **hormone-sensitive lipase** → fatty acids enter circulation.

#### Skeletal muscle
**Major consumer of fuel** by sheer bulk.

- **Resting:** main fuels are **glucose and fatty acids**. After a meal, insulin drives glucose uptake → **glycogen** + amino acids for protein synthesis. Fasting → **free fatty acids**, then **ketones** if prolonged.
- **Active** — fuel depends on intensity and duration:

| Phase of exercise | Primary fuel |
|---|---|
| **First 2–7 seconds** | **Creatine phosphate** (phosphorylates ADP → ATP) |
| **Short, high-intensity bursts** | **Anaerobic glycolysis** of stored muscle glycogen |
| **Moderate, continuous** | **Oxidation of glucose and fatty acids** |
| **After 1–3 hours continuous** | **Fatty-acid oxidation** (glycogen depleted; intensity falls) |

:::bridge
**Fast-twitch** fibers: high anaerobic-glycolysis capacity, quick to fatigue → short, high-intensity work. **Slow-twitch** fibers: well-vascularized, **oxidative**, fatigue-resistant → prolonged low-to-moderate effort, and increase in endurance athletes (Chapter 11 of MCAT Biology Review).
:::

#### Cardiac muscle
Cardiac myocytes **prefer fatty acids** even when well-fed (ketones when available in prolonged fasting), paralleling skeletal muscle during prolonged exercise. In **cardiac hypertrophy / a failing heart**, this **reverses** — **glucose oxidation ↑, β-oxidation ↓**.

#### Brain
Only **2% of body weight**, yet takes **15% of cardiac output, 20% of total $\\text{O}_2$, and 25% of total glucose** — its **primary fuel**.

- Depends on a **continuous glucose supply**; **hypoglycemia (< 70 mg/dL)** triggers hypothalamic sensing → release of **glucagon and epinephrine**.
- **Fatty acids cannot cross the blood–brain barrier** → never used as fuel.
- Between meals, relies on glucose from **hepatic glycogenolysis or gluconeogenesis**.
- **Only in prolonged fasting** does it use **ketone bodies — and only ~⅔ of fuel**, the rest still glucose.

:::keyconcept
The brain's exclusive reliance on **aerobic glucose metabolism** (and inability to use fatty acids) makes it the **most oxygen-sensitive organ** — first to be damaged when $\\text{O}_2$ is cut off, despite being only 2% of body mass.
:::
`
    },

    /* ───────────────────── 12.7 Integrative Metabolism ───────────────────── */
    {
      id: 's7', num: '12.7', title: 'Integrative Metabolism',
      goals: [
        'Predict changes to respiratory quotient with changes in activity',
        'Explain the role of leptin, ghrelin, and orexin in regulating body mass',
        'Apply knowledge of measurement methods for metabolism to analytical approaches in a lab setting'
      ],
      images: [{ src: fig(6, 0).src, alt: fig(6, 0).alt, caption: 'Figure 12.11 — A leptin-knockout mouse (left) beside a normal mouse (right): loss of the satiety signal leptin produces severe obesity.' }],
      recap: `
- **Respiratory quotient (RQ)** $= \\dfrac{\\text{CO}_2\\text{ produced}}{\\text{O}_2\\text{ consumed}}$: **carbs ≈ 1.0**, **lipids ≈ 0.7**, mixed/resting **≈ 0.8** (amino acids 0.8–0.9).
- Methods: **respirometry** (RQ), **calorimetry** (BMR via heat — accurate but costly), blood **substrate/hormone** levels, caloric tracking.
- **Hunger hormones**: **ghrelin** (stomach, ↑ appetite, stimulates orexin), **orexin** (↑ appetite + alertness), **leptin** (fat cells, **↓ appetite** by suppressing orexin).
- **Long-term body mass = lipid stores**; water causes minor short-term fluctuations.
- **BMI** $= \\dfrac{\\text{mass (kg)}}{\\text{height (m)}^2}$: normal **18.5–25**, overweight **25–30**, obese **>30**.
`,
      detail: `
#### Measuring metabolism
Several indicators can be tracked — and the MCAT tests **data interpretation**, not healthy ranges:

| Method | What it measures | Notes |
|---|---|---|
| **Chemical analysis (blood)** | Glucose, thyroid hormones/TSH, insulin, glucagon, $\\text{O}_2$, $\\text{CO}_2$ | Objective; flags disorders (diabetes, thyroid) |
| **Respirometry** | **Respiratory quotient (RQ)** | Reveals fuel mix |
| **Calorimetry** | **Basal metabolic rate (BMR)** via heat exchange | Most accurate but **expensive**; BMR usually **estimated** from age/weight/height/sex |
| **Caloric tracking** | Intake vs. expenditure | Least invasive |

#### Respiratory quotient
Measured by respirometry for complete combustion of a fuel (Equation 12.3):

$$RQ = \\frac{\\text{CO}_2\\text{ produced}}{\\text{O}_2\\text{ consumed}}$$

| Fuel / state | RQ |
|---|---|
| **Carbohydrate** | **≈ 1.0** |
| **Amino acids** | **0.8–0.9** |
| Resting (mixed fat + glucose) | **≈ 0.8** |
| **Lipid** | **≈ 0.7** |

:::mnemonic
**RQ — "Carbs are a perfect 1, fat falls to 0.7."** As you start **exercising**, fuel shifts toward **carbohydrate**, so **RQ rises toward 1.0**. Burn mostly fat (rest, fasting) and it sinks toward 0.7.
:::

:::expertise
You won't be asked which RQ is "healthy," but you can easily get a **data-interpretation** question — e.g., infer the dominant fuel from an RQ value, or predict how RQ shifts with exercise, stress, or starvation.
:::

#### Regulation of body mass
Body mass = water + carbohydrate + protein + lipid (**nucleic acids don't contribute**).

- **Carbohydrate & protein** mass is fairly **stable**.
- **Water** adjusts rapidly (kidneys/endocrine) → the source of **minor day-to-day fluctuations**; excluded from obesity discussion.
- **Lipids in adipocytes** drive **gradual, long-term** changes in mass.

Energy balance: **intake = expenditure** at steady weight. **Surplus → fat accumulates**; **deficit → weight loss**. As mass rises, **BMR rises**, so a caloric excess increases weight until a **new equilibrium** between BMR and intake is reached. There is a **compensation threshold** — small intake/activity changes are offset by changes in expenditure or hunger; the threshold is **larger for weight loss than gain**, so it's **easier to gain than to lose**.

#### Hunger and satiety hormones
| Hormone | Source | Effect on appetite | Other roles |
|---|---|---|---|
| **Ghrelin** | **Stomach** | **↑ Appetite** (responds to sight, sound, smell of food) | Stimulates **orexin** secretion |
| **Orexin** | Hypothalamus | **↑ Appetite** | **Alertness**, sleep–wake cycle; released in hypoglycemia |
| **Leptin** | **Fat cells (adipocytes)** | **↓ Appetite** | Suppresses **orexin**; variants implicated in obesity |

A **leptin-knockout mouse** (cannot make leptin) becomes severely obese (Figure 12.11).

![Figure 12.11 — Leptin-knockout mouse (left) vs. normal mouse (right).](${fig(6, 0).src})

:::bridge
The **hypothalamus** produces **orexin** and responds to **leptin** and **ghrelin**, regulating hunger, thirst, and libido — linking these drives to **motivation** (Chapter 5 of MCAT Behavioral Sciences Review).
:::

:::mnemonic
**"Ghrelin = Growl (hungry); Leptin = Leave it (full)."** Ghrelin from the stomach makes your stomach **growl** and revs up orexin. **Leptin** from fat says you've had enough — telling you to **leave** the food (by shutting off orexin). Take leptin as a drug → ↓ orexin → **drowsiness**.
:::

#### Body mass index
Tracked with BMI (Equation 12.4):

$$BMI = \\frac{\\text{mass (kg)}}{\\text{height (m)}^2}$$

| BMI | Category |
|---|---|
| **< 18.5** | Underweight |
| **18.5–25** | Normal |
| **25–30** | Overweight |
| **> 30** | Obese |
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Thermodynamics and Bioenergetics',
        points: [
          'Biological systems are **open** (exchange matter + energy) or **closed** (energy only), depending on whether you examine the whole organism or an isolated process.',
          'In a closed biological system, **$\\Delta H = \\Delta U = Q$**: enthalpy change equals internal-energy change equals heat exchanged, because $P$ and $V$ are fixed and **no work** is done.',
          '**Entropy ($\\Delta S$)** measures energy dispersion; **negative $\\Delta G$ = spontaneous** (exergonic), **positive = nonspontaneous**, **zero = equilibrium**.',
          'Free-energy calculations adjust for **pH ($\\Delta G°′$)**, **temperature** (body = 37 °C = 310 K), and **concentrations**; physiological concentrations are usually well below 1 M.'
        ]
      },
      {
        section: 'The Role of ATP',
        points: [
          'ATP is a **mid-level** energy molecule — small enough that little free energy is wasted per reaction.',
          'Its **high-energy phosphate bonds** are stabilized upon hydrolysis by **resonance, ionization, and loss of charge repulsion** ($\\Delta G°′ \\approx -30.5\\,\\text{kJ/mol}$).',
          'ATP supplies energy through **hydrolysis** and **coupling** to unfavorable reactions; overall $\\Delta G$ = **sum** of component $\\Delta G$ (Hess\'s law).',
          'ATP can also act as a **phosphoryl-group donor** (e.g., phosphorylating glucose in glycolysis).'
        ]
      },
      {
        section: 'Biological Oxidation and Reduction',
        points: [
          'Redox reactions split into **half-reactions**, giving stoichiometry (electrons transferred) and thermodynamics (electrochemical potential).',
          'Spontaneous redox: **$\\Delta G < 0$, $E > 0$**.',
          'Many redox reactions use **electron carriers**, which may be **soluble** (NADH, NADPH, $\\text{FADH}_2$, glutathione) or **membrane-bound** (ubiquinone, cytochromes, FMN).',
          '**Flavoproteins** (FAD, FMN) are electron carriers derived from **riboflavin (vitamin $\\text{B}_2$)**.'
        ]
      },
      {
        section: 'Metabolic States',
        points: [
          'Cells maintain **homeostasis, not equilibrium**, because they must harness free energy (e.g., the $\\text{Na}^+$/$\\text{K}^+$ gradient is disequilibrium kept at ATP cost).',
          '**Postprandial / well-fed (absorptive):** **insulin high**, anabolism prevails.',
          '**Postabsorptive (fasting, overnight):** insulin falls, **glucagon and catecholamines rise**, metabolism turns catabolic.',
          '**Prolonged fasting (starvation):** glucagon/catecholamines rise dramatically, most tissues use **fatty acids**, and up to **⅔ of the brain\'s energy** comes from **ketone bodies**.'
        ]
      },
      {
        section: 'Hormonal Regulation of Metabolism',
        points: [
          'Insulin and glucagon **oppose** each other: insulin **lowers** blood glucose and drives **anabolism** (regulated by β-cell glucose sensing); glucagon **raises** glucose via **gluconeogenesis + glycogenolysis** (from α-cells, stimulated by low glucose and high amino acids).',
          '**Glucocorticoids** raise blood glucose under stress by **mobilizing fat** and **inhibiting glucose uptake**, and are **permissive** for glucagon and catecholamines.',
          '**Catecholamines** drive **glycogenolysis** and raise **basal metabolic rate** through sympathetic activity.',
          '**Thyroid hormones** set **basal metabolic rate** and potentiate other hormones; **T₃ is more potent but shorter-lived** than T₄, and **T₄ → T₃** conversion occurs in the tissues.'
        ]
      },
      {
        section: 'Tissue-Specific Metabolism',
        points: [
          'The **liver** is the most metabolically diverse tissue — maintains blood glucose (**glycogenolysis, gluconeogenesis**) and handles lipids, cholesterol, **bile, urea, and toxins**.',
          '**Adipose** stores lipid under **insulin** and releases it under **epinephrine**.',
          'Skeletal muscle depends on **activity and fiber type**: resting muscle conserves glycogen and burns free fatty acids; active muscle uses **creatine phosphate → anaerobic glycolysis → oxidation** by duration. **Cardiac muscle uses fatty-acid oxidation** when fed or fasting.',
          'The **brain** (and nervous tissue) consumes **glucose** in all states except prolonged fasting, where up to **⅔** of its fuel can come from **ketone bodies**.'
        ]
      },
      {
        section: 'Integrative Metabolism',
        points: [
          'Metabolic rate is measured by **calorimetry, respirometry, consumption tracking, or blood substrate/hormone levels**.',
          'The **respiratory quotient (RQ)** estimates the fuel mix being consumed (carbs ≈ 1.0, lipids ≈ 0.7).',
          'Body-mass regulation is **multifactorial**; **leptin, ghrelin, and orexin** (and their receptors) play a role, and **long-term changes reflect lipid storage**.',
          'Intake/activity changes must exceed a **threshold** to alter weight; the threshold is **lower for gain than loss**. Body mass is tracked with **BMI**.'
        ]
      }
    ],
    mnemonics: [
      '**ΔG sign rule — "Negative is Nice."** A **N**egative $\\Delta G$ runs forward spontaneously (exergonic); positive is nonspontaneous (endergonic); zero is equilibrium. A reaction wants **$-\\Delta H$** and **$+\\Delta S$**.',
      '**Insulin vs. glucagon — "I store, Glu gives."** **I**nsulin = **I**n storage (anabolic, β-cell, fed); **Glu**cagon **g**ives **glu**cose to the blood (catabolic in liver, α-cell, fasting). Mirror images.',
      '**"NADPH builds, NADH burns."** The extra **P** in NAD**P**H = **P**roduction (anabolism/biosynthesis); plain NADH feeds the ETC to **burn** fuel for ATP.',
      '**Coupling — "let ATP pay the bill."** Add a big exergonic ATP hydrolysis ($-30.5$ kJ/mol) to an endergonic step; if the **sum** is negative, it runs. It\'s just **Hess\'s law** with phosphates.',
      '**Three states, three gears:** **Fed** = Fill the tanks (insulin); **Fasting** = Fetch from storage (glycogenolysis → gluconeogenesis); **Starvation** = Switch to fat/ketones (spare protein, feed the brain ketones).',
      '**"Heart loves fat, brain loves sugar, RBC has no choice."** Cardiac prefers fatty acids even when fed; brain stays on glucose (ketones only in starvation); RBCs always burn glucose anaerobically.',
      '**"Ghrelin = Growl (hungry); Leptin = Leave it (full)."** Ghrelin (stomach) revs appetite + orexin; leptin (fat) cuts appetite by suppressing orexin → leptin drug causes drowsiness.',
      '**RQ — "Carbs are a perfect 1, fat falls to 0.7."** Exercise shifts fuel to carbohydrate → RQ ↑ toward 1.0; rest/fasting burns fat → RQ ↓ toward 0.7.'
    ],
    keyConcepts: [
      '**Spontaneity is about free energy, not speed:** $\\Delta G = \\Delta H - T\\Delta S$ predicts *direction*; a negative $\\Delta G$ reaction is favorable but may still need a catalyst. Couple it to ATP to push an unfavorable step forward.',
      '**$\\Delta G°′$ differs from $\\Delta G°$ only by fixing pH at 7** — all other concentrations and temperature stay at standard state, so non-1 M reactants must still be corrected in $RT\\ln Q$.',
      '**ATP is deliberately mid-level:** high enough to drive most reactions, low enough that little energy is wasted, and stabilized after hydrolysis by resonance + relief of phosphate charge repulsion.',
      '**Insulin and glucagon are a reciprocal switch:** enzymes phosphorylated by glucagon are dephosphorylated by insulin and vice versa, flipping the liver between storage (fed) and glucose output (fasting).',
      '**Fuel hierarchy across fasting:** glycogenolysis (immediate) → gluconeogenesis (peaks ~12–24 h) → lipolysis/ketogenesis (prolonged), with the brain shifting to ketones (~⅔) to spare protein.',
      '**The brain and RBCs are the metabolic constraints:** the brain is glucose-dependent (no fatty acids cross the BBB) and most $\\text{O}_2$-sensitive; RBCs run glucose anaerobically in every state.'
    ],
    equations: [
      { name: 'Gibbs free energy', tex: '\\Delta G = \\Delta H - T\\Delta S', note: 'Predicts spontaneity: $\\Delta G<0$ spontaneous (exergonic), $>0$ nonspontaneous (endergonic), $=0$ at equilibrium. $T$ in kelvin.' },
      { name: 'Free energy at nonstandard conditions', tex: '\\Delta G = \\Delta G^{\\circ} + RT\\ln Q', note: 'Relates actual $\\Delta G$ to standard $\\Delta G^{\\circ}$ via the reaction quotient $Q$. $\\Delta G^{\\circ\\prime}$ is the same equation with pH fixed at 7.' },
      { name: 'First law of thermodynamics', tex: '\\Delta U = Q - W', note: 'In a closed biological system $W=0$ (constant $P$, $V$), so $\\Delta U = Q$ — heat measures internal energy.' },
      { name: 'ATP hydrolysis', tex: '\\text{ATP} + \\text{H}_2\\text{O} \\rightarrow \\text{ADP} + \\text{P}_i', note: 'Exergonic, $\\Delta G^{\\circ\\prime} \\approx -30.5\\,\\text{kJ/mol}$; products stabilized by resonance and relief of charge repulsion.' },
      { name: 'Respiratory quotient', tex: 'RQ = \\dfrac{\\text{CO}_2\\ \\text{produced}}{\\text{O}_2\\ \\text{consumed}}', note: 'Carbohydrate $\\approx 1.0$, lipid $\\approx 0.7$, mixed/resting $\\approx 0.8$.' },
      { name: 'Body mass index', tex: 'BMI = \\dfrac{\\text{mass}}{\\text{height}^2}', note: 'Mass in kg, height in m. Normal 18.5–25, overweight 25–30, obese $>30$.' }
    ]
  },

  questions: raw.questions
};
