// Biochemistry Chapter 2 — Enzymes. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch02.json (already-correct extraction);
// the recap/detail markdown, tables, callouts, and mnemonics are authored here.
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 2,
  title: 'Enzymes',
  subtitle: 'Enzymes as biological catalysts · mechanisms of enzyme activity · enzyme kinetics · effects of local conditions · regulation of enzyme activity',

  blocks: [
    /* ───────────── 2.1 Enzymes as Biological Catalysts ───────────── */
    {
      id: 's1', num: '2.1', title: 'Enzymes as Biological Catalysts',
      goals: [
        'Explain the major features of enzyme function, including specificity and catalysis',
        'Describe all six classes of enzymes: oxidoreductases, transferases, hydrolases, lyases, isomerases, and ligases',
        'Recognize how enzymes affect the thermodynamics and kinetics of a reaction'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 2.1 — Exergonic reaction diagram: an enzyme lowers the activation energy ($E_a$) but leaves $\\Delta G$ (and $\\Delta H$) unchanged.' }],
      recap: `
- **Enzymes** are protein **biological catalysts**: they **lower activation energy** ($E_a$) and **speed up the reaction** but are **not consumed** and appear in both reactants and products.
- Enzymes change **kinetics**, *not* **thermodynamics** — they do **not** alter $\\Delta G$, $\\Delta H$, or the **equilibrium constant** $K_{eq}$.
- **Enzyme specificity:** each enzyme catalyzes one reaction (or one class) on its **substrate(s)**; names usually end in **–ase**.
- **Six classes — "LI'L HOT":** **L**igase, **I**somerase, **L**yase, **H**ydrolase, **O**xidoreductase, **T**ransferase.
`,
      detail: `
#### What an enzyme is
**Enzymes** are crucial proteins that dramatically increase the rate of biological reactions — by factors of $10^2$, $10^3$, or even $10^{12}$ over the uncatalyzed reaction. They regulate homeostasis in every organ system and are themselves tightly regulated by environmental conditions, activators, and inhibitors (natural or drug-based, like the **ACE inhibitors** used to treat hypertension).

##### Key features of enzymes (Table 2.1)
- **Lower the activation energy** of a reaction.
- **Increase the rate** of the reaction.
- Do **not** alter the **equilibrium constant** ($K_{eq}$).
- Are **not changed or consumed** — they appear in *both* reactants and products (one enzyme turns over many substrate molecules, so few copies are needed).
- Are **pH- and temperature-sensitive**, with optimal activity over specific ranges.
- Do **not** affect the overall **$\\Delta G$** of the reaction.
- Are **specific** for a particular reaction or class of reactions.

:::keyconcept
**Catalysts touch kinetics, never thermodynamics.** An enzyme can take a reaction from *years* to *seconds*, but the **$\\Delta G$, $\\Delta H$, and final equilibrium position are identical** with or without it. It only changes *how fast* equilibrium is reached.
:::

#### Enzyme specificity
The molecules an enzyme acts on are its **substrates**. A given enzyme catalyzes only a single reaction or class of reactions — its **specificity**.

- **Urease** catalyzes *only* the breakdown of urea (single-substrate specificity).
- **Chymotrypsin** cleaves peptide bonds beside **phenylalanine, tryptophan, and tyrosine** — different amino acids that share an **aromatic ring**, making it specific for a *class* of substrates.

Most enzymes have descriptive names ending in **–ase** (e.g., **lactase** breaks down lactose).

#### The six enzyme classes
Enzymes are grouped into six categories by function/mechanism. This is **the** high-yield table for 2.1:

| # | Class | Reaction catalyzed | Naming clues / examples |
|---|---|---|---|
| 1 | **Oxidoreductases** | **Redox** — transfer of **electrons** between molecules; donor = **reductant**, acceptor = **oxidant** | Names with **dehydrogenase**, **reductase**, or **oxidase** (O₂ = final $e^-$ acceptor). Often use carriers like $\\text{NAD}^+$, $\\text{NADP}^+$ |
| 2 | **Transferases** | Move a **functional group** from one molecule to another | **Aminotransferase** (moves amino group); **kinases** transfer a **phosphate** (usually from ATP) |
| 3 | **Hydrolases** | Break a bond by **adding water** ($\\text{H}_2\\text{O}$) | **Phosphatase, peptidase, nuclease, lipase** — often named for the substrate |
| 4 | **Lyases** | Cleave one molecule into two **without water and without redox**; reverse = **synthesis** | Reverse-direction enzymes called **synthases**; often form/break double bonds or rings |
| 5 | **Isomerases** | **Rearrange bonds within** a molecule (constitutional isomers *and* stereoisomers) | May overlap with oxidoreductase/transferase/lyase mechanisms |
| 6 | **Ligases** | **Join two large** (often similar) molecules; usually require **ATP** | Nucleic acid **synthesis and repair** (e.g., DNA ligase) |

:::mnemonic
**Major enzyme classes — "LI'L HOT":**
- **L**igase
- **I**somerase
- **L**yase
- **H**ydrolase
- **O**xidoreductase
- **T**ransferase
:::

:::mnemonic
**Hydrolase vs. lyase — the water tells you which.** **H**ydrolase = **H**₂O **H**elps cleave. **Lyase** cuts (or builds) **without** water and **without** electrons. A "synthesis with a small molecule, no ATP" is usually a **lyase/synthase**; "joining two big molecules with ATP" is a **ligase**.
:::

:::bridge
The reductant/oxidant naming convention for oxidoreductases mirrors **reducing/oxidizing agents** from general and organic chemistry — review **redox** in *MCAT General Chemistry Review* Ch. 11 and *MCAT Organic Chemistry Review* Ch. 4.
:::

#### Impact on activation energy
Thermodynamics describes the relative energy of reactants vs. products:
- **Endergonic** reaction → requires energy input, **$\\Delta G > 0$** (*endo-* = in).
- **Exergonic** reaction → releases energy, **$\\Delta G < 0$** (*exo-* = out), and is **spontaneous**.

Catalysts work by **lowering the activation energy** — making it easier for substrate to reach the **transition state**.

![Exergonic reaction diagram — catalyzed vs. uncatalyzed activation energy](${fig(0, 3).src})

Think of walking over a tall hill: cutting off the peak means you don't have to climb as high. That is exactly what an enzyme does to the transition state.

:::keyconcept
Most enzyme-catalyzed reactions are technically **reversible**, though the reverse may be so energetically unfavorable that it is essentially nonexistent. The enzyme lowers $E_a$ in **both** directions equally.
:::

:::bridge
Gibbs free energy and endergonic/exergonic reactions are covered in *MCAT General Chemistry Review* Ch. 7 (Thermochemistry).
:::
`
    },

    /* ───────────── 2.2 Mechanisms of Enzyme Activity ───────────── */
    {
      id: 's2', num: '2.2', title: 'Mechanisms of Enzyme Activity',
      goals: [
        'Differentiate between coenzymes and cofactors',
        'Compare the induced fit and lock and key models of enzyme function'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 2.3 — Lock and key theory vs. induced fit model. In induced fit, both the active site and substrate change conformation to become complementary.' }],
      recap: `
- Enzymes work in the **active site** by stabilizing the **transition state**, providing a favorable **microenvironment** (charge/pH), or bringing reactive groups together — forming the **enzyme–substrate (ES) complex**.
- **Lock and key:** active site is *already* complementary (no shape change). **Induced fit:** active site **molds** to the substrate — *more accepted*, more MCAT-relevant.
- **Cofactors** = **inorganic** (metal ions, dietary minerals). **Coenzymes** = **small organic** molecules (mostly **vitamins**: $\\text{NAD}^+$, FAD, coenzyme A).
- **Apoenzyme** = enzyme *without* its cofactor (inactive); **holoenzyme** = enzyme *with* it. A tightly/covalently bound one = **prosthetic group**.
`,
      detail: `
#### Common catalytic strategies
Mechanisms vary by reaction, but enzymes generally:
- Provide a favorable **microenvironment** (charge or pH).
- **Stabilize the transition state**.
- Bring **reactive groups** closer together in the **active site**.

The formation of the **enzyme–substrate (ES) complex** in the active site is the key catalytic event that lowers $E_a$. This interaction also explains enzyme **selectivity** and underlies several **regulatory** mechanisms.

#### Enzyme–substrate binding
The **active site** is the location within the enzyme that holds the substrate during the reaction.

![Reaction catalysis in the active site of an enzyme](${fig(1, 0).src})

The active site assumes a **defined spatial arrangement** that dictates specificity. **Hydrogen bonding, ionic interactions, and transient covalent bonds** stabilize this arrangement and contribute to catalytic efficiency. Two competing models explain ES interaction — one better supported than the other:

| | **Lock and Key Theory** | **Induced Fit Model** |
|---|---|---|
| Core idea | Active site (lock) is **already** complementary to substrate (key) | Active site **molds** around substrate only **when substrate is present** |
| Conformational change? | **None** to tertiary/quaternary structure | **Yes** — enzyme *and* substrate change shape |
| Energy | No change needed to bind | Binding step is **endergonic** (requires energy); release is **exergonic** |
| Accuracy | **Less** accurate | **More** accurate — *the one favored on Test Day* |

:::mnemonic
**Induced fit = the stress ball.** A frustrated MCAT student (substrate) squeezes a foam ball (enzyme): *both* change shape to fit. Letting go (product release) is easy and the ball springs back to its original form — just like an enzyme after catalysis. The shape becomes complementary **only after binding begins**.
:::

#### Cofactors and coenzymes
Many enzymes need nonprotein helpers — **cofactors** or **coenzymes** — that are small enough to fit the active site and carry charge via ionization, protonation, or deprotonation. They are kept at **low concentrations** so they're recruited only when needed.

| Term | What it is | Examples |
|---|---|---|
| **Cofactor** | **Inorganic** molecule or **metal ion**; often a dietary **mineral** | $\\text{Mg}^{2+}$, $\\text{Zn}^{2+}$, $\\text{Fe}^{2+}$ |
| **Coenzyme** | **Small organic** molecule; usually a **vitamin** or vitamin derivative | $\\text{NAD}^+$, FAD, coenzyme A, biotin |
| **Apoenzyme** | Enzyme **without** its cofactor/coenzyme → **inactive** | — |
| **Holoenzyme** | Enzyme **with** its cofactor/coenzyme bound → **active** | — |
| **Prosthetic group** | A **tightly (often covalently) bound** cofactor/coenzyme required for function | Heme, FAD (when covalent) |

##### Vitamins as coenzyme sources
- **Water-soluble:** the **B-complex** vitamins and **ascorbic acid (vitamin C)** — must be **replenished regularly** (easily excreted).
- **Fat-soluble: A, D, E, K** — regulated by **partition coefficients** (polar vs. nonpolar solubility), so they are **stored**.

A single metabolic reaction may need several at once — e.g., $\\text{Mg}^{2+}$, $\\text{NAD}^+$ (from B3), and biotin (B7) together.

The MCAT is unlikely to require memorizing the B vitamins, but name familiarity helps in passages:

| Vitamin | Name |
|---|---|
| **B1** | Thiamine |
| **B2** | Riboflavin |
| **B3** | Niacin |
| **B5** | Pantothenic acid |
| **B6** | Pyridoxal phosphate |
| **B7** | Biotin |
| **B9** | Folic acid |
| **B12** | Cyanocobalamin |

:::mnemonic
**Cofactor vs. coenzyme:** **cofac**tor = **c**alcium/**c**opper and other inorganic ions (think periodic-table metals). **Co**enzyme = **o**rganic (vitamins). **Apo** = "a-**po**or" enzyme, missing its helper and **inactive**.
:::

:::realworld
**Vitamin cofactor deficiency can be devastating.** **Thiamine (B1)** is essential for enzymes in metabolism and nerve conduction. Deficiency — often from heavy alcohol use plus poor diet — causes **Wernicke–Korsakoff syndrome**: delirium, balance problems, and, in severe cases, the inability to form new memories.
:::

:::bridge
Fat- vs. water-soluble vitamins matter in **digestive disease**: damage to different parts of the GI tract causes different vitamin deficiencies. See *MCAT Biology Review* Ch. 9 (The Digestive System).
:::
`
    },

    /* ───────────── 2.3 Enzyme Kinetics ───────────── */
    {
      id: 's3', num: '2.3', title: 'Enzyme Kinetics',
      goals: [
        'Predict how changes in enzyme and solute concentration will affect enzyme kinetics',
        'Define enzyme cooperativity',
        'Compare Lineweaver–Burk and Michaelis–Menten plots',
        'Explain the key points on a Lineweaver–Burk or Michaelis–Menten plot'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 2.4 — Michaelis–Menten plot ($v$ vs. $[S]$): a hyperbola that plateaus at $V_{max}$ as the enzyme saturates.' }],
      recap: `
- **Michaelis–Menten:** $v = \\dfrac{V_{max}[S]}{K_m + [S]}$ — a **hyperbola** of rate vs. $[S]$ that plateaus at **$V_{max}$** (enzyme saturated).
- **$K_m$** = $[S]$ at **half** of $V_{max}$. **Low $K_m$ → high affinity**; **high $K_m$ → low affinity**. $K_m$ is intrinsic — unchanged by $[S]$ or $[E]$.
- Raising **$[S]$** speeds the reaction only until saturation; raising **$[E]$** raises **$V_{max}$** (the *only* way to raise $V_{max}$).
- **Lineweaver–Burk** = double-reciprocal **straight line**: x-intercept $= -\\dfrac{1}{K_m}$, y-intercept $= \\dfrac{1}{V_{max}}$ — best for reading inhibition type.
- **Cooperative** enzymes (multi-subunit, T ⇌ R states) give a **sigmoidal** curve; quantified by **Hill's coefficient** ($>1$ positive, $<1$ negative, $=1$ none).
`,
      detail: `
#### Saturation kinetics of monomeric enzymes
The concentrations of substrate **$[S]$** and enzyme **$[E]$** govern reaction speed. Picture 100 stress balls (enzyme) and only 10 students (substrate): plenty of free active sites, so adding students speeds relaxation — until ~100 students compete for all the balls and the room **saturates**. Beyond saturation, adding substrate cannot increase the rate: the enzyme runs at **maximum velocity, $V_{max}$**.

> **The only way to increase $V_{max}$ is to increase $[E]$** — in a cell, by **inducing expression** of the enzyme's gene.

![Michaelis–Menten plot of enzyme kinetics](${fig(2, 1).src})

#### The Michaelis–Menten equation
Enzyme and substrate combine and break down through three rate constants:

$$\\text{E} + \\text{S} \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} \\text{ES} \\overset{k_{cat}}{\\rightarrow} \\text{E} + \\text{P}$$

With **$[E]$ held constant**, velocity relates to substrate concentration by the **Michaelis–Menten equation**:

$$v = \\frac{V_{max}[S]}{K_m + [S]}$$

Setting $v = \\tfrac{1}{2}V_{max}$ and solving shows that **$K_m = [S]$** at half-maximal velocity:

$$\\frac{V_{max}}{2} = \\frac{V_{max}[S]}{K_m + [S]} \\;\\Rightarrow\\; K_m + [S] = 2[S] \\;\\Rightarrow\\; K_m = [S]$$

So **$K_m$ (the Michaelis constant)** is the substrate concentration at which **half the active sites are full**.

| Regime | Behavior |
|---|---|
| $[S] < K_m$ | Changes in $[S]$ **greatly** affect rate (steep part of the hyperbola) |
| $[S] > K_m$ | Rate rises **slowly**, approaching $V_{max}$ |
| $[S] \\gg K_m$ | Rate ≈ $V_{max}$, **independent** of $[S]$ (saturation) |

:::keyconcept
**$K_m$ measures affinity (inversely).** A **low $K_m$** = **high affinity** (little substrate needed for 50% saturation). A **high $K_m$** = **low affinity**. $K_m$ is an **intrinsic property** of the enzyme–substrate pair and **cannot** be changed by altering $[S]$ or $[E]$.
:::

##### Turnover number and catalytic efficiency
$V_{max}$ relates to the **turnover number $k_{cat}$** (units $\\text{s}^{-1}$) — substrate molecules converted to product per enzyme per second:

$$V_{max} = [E]\\,k_{cat}$$

Restating Michaelis–Menten with $k_{cat}$ and simplifying at very low $[S]$ ($K_m \\gg [S]$) gives the **catalytic efficiency** $\\dfrac{k_{cat}}{K_m}$. A **large $k_{cat}$** (fast turnover) or **small $K_m$** (high affinity) → a **more efficient** enzyme.

#### Lineweaver–Burk plots
The **Lineweaver–Burk plot** is the **double-reciprocal** ($\\tfrac{1}{v}$ vs. $\\tfrac{1}{[S]}$) of Michaelis–Menten — the same data graph as a **straight line**.

![Experimentally determined Lineweaver–Burk (double-reciprocal) plot](${fig(2, 2).src})

| Intercept | Value |
|---|---|
| **x-intercept** | $-\\dfrac{1}{K_m}$ |
| **y-intercept** | $\\dfrac{1}{V_{max}}$ |

Because $V_{max}$ and $K_m$ can be read **without estimating an asymptote**, the Lineweaver–Burk plot is especially useful for **identifying the type of inhibition** (see 2.5).

:::mnemonic
**Reading the Lineweaver–Burk axes:** the line crosses the **y-axis at $\\frac{1}{V_{max}}$** and the **x-axis at $-\\frac{1}{K_m}$**. Higher y-intercept → lower $V_{max}$; the x-intercept slides **toward the origin** as $K_m$ rises.
:::

#### Cooperativity
Some enzymes don't give a hyperbola — they give a **sigmoidal (S-shaped)** curve from **cooperativity** among multiple subunits/active sites.

![Cooperative enzyme kinetics — sigmoidal curve](${fig(2, 3).src})

- Subunits toggle between a **low-affinity tense (T) state** and a **high-affinity relaxed (R) state**.
- Substrate binding pushes other subunits **T → R**, raising their affinity (positive cooperativity); losing substrate pushes **R → T**.
- Cooperative enzymes are often **regulatory**, e.g., **phosphofructokinase-1 (PFK-1)** in glycolysis, and respond to allosteric/competitive control.

**Hill's coefficient** quantifies cooperativity:

| Hill's coefficient | Meaning |
|---|---|
| **> 1** | **Positive** cooperativity (binding raises further affinity) |
| **< 1** | **Negative** cooperativity (binding lowers further affinity) |
| **= 1** | **No** cooperativity |

:::expertise
The **cooperative binding of hemoglobin** — a *transport protein*, not an enzyme — gives the classic **sigmoidal** $\\text{O}_2$-binding curve that is an MCAT favorite. Same T ⇌ R logic, different molecule.
:::

:::mnemonic
**Cooperativity = a party.** Early arrivals make it more appealing, so more guests join (T → R, rising affinity). As people leave, the mood drops and others head out too (R → T) so the **t**ense hosts can clean up.
:::
`
    },

    /* ───────────── 2.4 Effects of Local Conditions on Enzyme Activity ───────────── */
    {
      id: 's4', num: '2.4', title: 'Effects of Local Conditions on Enzyme Activity',
      goals: [
        'Predict how changes to the environment will alter enzyme behavior',
        'Estimate the ideal pH and temperature for enzymes found in the human body'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 2.7 — Effects of temperature and pH on enzyme activity: a peak at the optimum, with sharp fall-off as the enzyme denatures.' }],
      recap: `
- **Activity, velocity, and rate are synonyms** on the MCAT. **Temperature, pH, and salinity** all change enzyme activity.
- **Temperature:** rate roughly **doubles per +10°C** up to the optimum, then **denatures** sharply. Human optimum = **37°C = 98.6°F = 310 K**.
- **pH:** most blood enzymes peak at **7.4**; **pepsin (stomach) ≈ pH 2**; **pancreatic enzymes (small intestine) ≈ pH 8.5**.
- **Salinity:** high salt disrupts H-bonds/ionic bonds → conformational change or denaturation (matters **in vitro**, rarely physiologically).
`,
      detail: `
#### Temperature
Enzyme-catalyzed reactions tend to **double in velocity for every 10°C** rise — until the **optimum temperature**, after which activity **falls off sharply** as the enzyme **denatures**.

- Human body optimum: **37°C = 98.6°F = 310 K**.
- Some overheated enzymes can **regain function if cooled** (if not fully denatured).

![Effects of temperature and pH on the rate of enzyme action](${fig(3, 0).src})

:::realworld
**Siamese cats** are dark only on the face, ears, tail, and feet. Their pigment enzyme **tyrosinase** is mutated so it's **inactive at body temperature** but **active in cooler** extremities — so only the cool regions are dark. A vivid example of temperature-dependent enzyme activity.
:::

#### pH
Most enzymes depend on pH because it affects **ionization of the active site** and, at extremes, causes **denaturation**.

| Environment | Optimal pH | Example enzyme |
|---|---|---|
| **Human blood** | **7.4** | Most circulating enzymes |
| **Stomach** | **~2** | **Pepsin** |
| **Small intestine** | **~8.5** | **Pancreatic enzymes** |

> Blood **pH < 7.35** is **acidemia** — more *basic* than chemically neutral 7.0, but more *acidic* than **physiologically neutral 7.4**.

#### Salinity
Changing **salt concentration** alters the number of charges in solution, disrupting **hydrogen and ionic bonds** → partial conformational change or even **denaturation**. This is mainly an **in vitro** effect and is **not** usually of physiologic significance.

:::keyconcept
All three stressors — heat, extreme pH, high salinity — converge on the same failure mode: **disruption of secondary/tertiary/quaternary structure → denaturation → loss of activity.**
:::

:::bridge
The pH of the stomach vs. intestine and its effect on **gastric and pancreatic enzymes** is covered in *MCAT Biology Review* Ch. 9 (The Digestive System).
:::
`
    },

    /* ───────────── 2.5 Regulation of Enzyme Activity ───────────── */
    {
      id: 's5', num: '2.5', title: 'Regulation of Enzyme Activity',
      goals: [
        'Explain feedback inhibition and irreversible inhibition',
        'Differentiate between the four types of reversible inhibition',
        'Differentiate between transient and covalent enzyme modifications',
        'Recall the traits of zymogens'
      ],
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'Figure 2.9 — Lineweaver–Burk plot of competitive inhibition: same y-intercept ($V_{max}$ unchanged), x-intercept moves toward the origin ($K_m$ increases).' }],
      recap: `
- **Feedback (negative) inhibition:** a downstream **product** shuts off an **earlier** enzyme → maintains homeostasis.
- **Four reversible inhibitors** — *the* high-yield table. **Competitive** binds the **active site** (↑$K_m$, $V_{max}$ same); **noncompetitive** binds an **allosteric site** (↓$V_{max}$, $K_m$ same); **mixed** (↓$V_{max}$, $K_m$ ↑ or ↓); **uncompetitive** binds **only ES** (↓ both $K_m$ and $V_{max}$).
- **Only competitive inhibition is overcome by adding more substrate.**
- **Irreversible inhibition** permanently disables the enzyme (e.g., **aspirin** on COX-1) → new enzyme must be synthesized.
- **Regulated enzymes:** **allosteric** (activators/inhibitors at allosteric sites), **covalent modification** (**phosphorylation, glycosylation**), and **zymogens** (inactive precursors activated by cleavage; suffix **–ogen**).
`,
      detail: `
#### Feedback regulation
Enzymes are often regulated by molecules **downstream** in their pathway:
- **Feedback regulation** — a later product controls an earlier enzyme. **Feedback inhibition (negative feedback)** is by far the most common: once enough product exists, the pathway that makes it is turned off (homeostasis).
- **Feed-forward regulation** — rarer; an earlier intermediate regulates a later enzyme.

In the classic scheme, end-product **D** binds and **inhibits enzyme 1**, slowing the whole pathway.

:::bridge
Negative feedback is central to both enzymology and the **endocrine system** — most hormonal loops are governed by negative feedback. See *MCAT Biology Review* Ch. 5 (The Endocrine System).
:::

#### Reversible inhibition — the high-yield table
There are **four** types. Memorize their effect on **$K_m$** and **$V_{max}$** cold — this is among the most tested tables in biochemistry:

| | **Competitive** | **Noncompetitive** | **Mixed** | **Uncompetitive** |
|---|---|---|---|---|
| **Binds to** | **Active site** | **Allosteric site** | **Allosteric site** | **Allosteric site** |
| **Binds what?** | Free **E** only | **E** and **ES** *equally* | **E** and **ES** *unequally* | **ES** *only* |
| **Effect on $K_m$** | **↑ Increases** | **— Unchanged** | **↑ or ↓** (depends on preference) | **↓ Decreases** |
| **Effect on $V_{max}$** | **— Unchanged** | **↓ Decreases** | **↓ Decreases** | **↓ Decreases** |
| **Overcome by more $[S]$?** | **Yes** | No | No | No |

##### Competitive inhibition
The inhibitor occupies the **active site**, blocking substrate.

![Lineweaver–Burk plot of competitive inhibition](${fig(4, 0).src})

- **Overcome by adding more substrate** (raise the substrate-to-inhibitor ratio).
- **$V_{max}$ unchanged** (enough substrate still hits $V_{max}$); **$K_m$ increases** (need more $[S]$ to reach half-max).

##### Noncompetitive inhibition
Binds an **allosteric site** (non-catalytic), changing enzyme conformation.

![Lineweaver–Burk plot of noncompetitive inhibition](${fig(4, 1).src})

- Binds **E and ES equally**; **cannot** be overcome by more substrate.
- **$V_{max}$ decreases** (effectively less working enzyme); **$K_m$ unchanged** (still-active enzymes keep their affinity).

##### Mixed inhibition
Binds **E or ES with *different* affinities** (if affinities were equal, it would be noncompetitive). Binds at an **allosteric site**, not the active site.
- Prefers **E** → **$K_m$ increases** (lower affinity).
- Prefers **ES** → **$K_m$ decreases** (higher affinity).
- **$V_{max}$ decreases** either way. On Lineweaver–Burk, lines intersect at a point **off both axes**.

##### Uncompetitive inhibition
Binds **only the ES complex** (ES formation creates the binding site), locking substrate in.
- Increases apparent E–S affinity → **$K_m$ decreases**; **$V_{max}$ decreases**.
- On Lineweaver–Burk, inhibited and uninhibited lines are **parallel**.

:::mnemonic
**Effect on $K_m$ and $V_{max}$ — fast recall:**
- **Comp**etitive = **comp**etes at the active site → **$K_m$ ↑**, $V_{max}$ same. *("More substrate wins.")*
- **Non**competitive = **no** change to $K_m$ → **$V_{max}$ ↓**, $K_m$ same.
- **Un**competitive = **both go down** ("**U**ncompetitive = bot**U** down... $K_m$ ↓ and $V_{max}$ ↓").
- **Mixed** = $V_{max}$ ↓, **$K_m$ mixed** (↑ or ↓).
:::

:::mnemonic
**Where they bind:** only **competitive** sits in the **active site** (it *competes* with substrate). The other three are **allosteric**. **Uncompetitive** and (sometimes) **mixed** need the **ES complex** to exist first.
:::

:::realworld
**Competitive inhibition as an antidote.** **Methanol** is metabolized to toxic products that cause blindness and death. The treatment is **IV ethanol**, which **competes** with methanol for the same enzyme's active site, slowing toxic-metabolite formation.
:::

#### Irreversible inhibition
The active site is blocked for a prolonged time or the enzyme is **permanently altered** — not easily reversed.
- **Aspirin (acetylsalicylic acid)** irreversibly modifies **cyclooxygenase-1 (COX-1)**, which can no longer convert **arachidonic acid → prostaglandins** (pain/inflammation mediators).
- Recovery requires **synthesizing new enzyme** (transcription + translation). Irreversible inhibition is a major **drug mechanism**.

#### Regulated enzymes
##### Allosteric enzymes
Have an active site **plus** one or more **allosteric sites** that toggle the enzyme between **active and inactive** forms:
- **Allosteric activators** shift conformation to make the active site **more** available.
- **Allosteric inhibitors** make it **less** available.
- Binding can also change catalytic activity; allosteric/cooperative enzymes often show the **sigmoidal** Michaelis–Menten curve (Figure 2.6).

##### Covalently modified enzymes
- **Phosphorylation / dephosphorylation** can activate *or* deactivate an enzyme — **you cannot predict which without experiment.**
- **Glycosylation** (adding sugar moieties) can tag an enzyme for transport or modify its activity/selectivity.

##### Zymogens
Some enzymes are too dangerous to make active on the spot (e.g., pancreatic **trypsin** would digest the pancreas), so they're secreted as inactive **zymogens** (e.g., **trypsinogen**).
- Contain a **catalytic (active) domain** + a **regulatory domain**.
- The **regulatory domain must be cleaved or altered** to expose the active site.
- **Apoptotic caspases** are regulated similarly. Most zymogens carry the suffix **–ogen**.

:::mnemonic
**Zymogen = "–ogen" is off.** Trypsin**ogen**, pepsin**ogen**, chymotrypsin**ogen** — the **–ogen** form is the **inactive precursor**; cleavage flips it on. Secreting the *off* form keeps powerful digestive enzymes from eating their own organ.
:::

:::bridge
Digestive enzymes break down the very fats, proteins, and carbohydrates our bodies are made of — they're kept in check by feedback and zymogen regulation. See *MCAT Biology Review* Ch. 9 (The Digestive System).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Enzymes as Biological Catalysts',
        points: [
          '**Enzymes** are biological catalysts: **unchanged** by the reactions they catalyze and **reusable**.',
          'Each enzyme catalyzes a **single reaction or type of reaction** with high **specificity**.',
          '**Six classes** (LI\'L HOT): **Oxidoreductases** (redox / electron transfer), **Transferases** (move a functional group), **Hydrolases** (cleavage *with* water), **Lyases** (cleavage *without* water or electrons; reverse = synthesis), **Isomerases** (interconvert isomers), **Ligases** (join two large biomolecules, often with ATP).',
          '**Exergonic** reactions release energy ($\\Delta G < 0$). Enzymes **lower activation energy** but do **not** change $\\Delta G$, $\\Delta H$, or the equilibrium position — only the **rate** at which equilibrium is reached.'
        ]
      },
      {
        section: 'Mechanisms of Enzyme Activity',
        points: [
          'Enzymes act by **stabilizing the transition state**, providing a favorable **microenvironment**, or **bonding** with substrate in the **active site**.',
          '**Lock and key** — enzyme and substrate are *exactly* complementary (less accurate). **Induced fit** — both undergo **conformational change** to interact fully (more accurate).',
          'Some enzymes need **inorganic cofactors** (metal cations) or **small organic coenzymes** (vitamins). **Apoenzyme** (no cofactor) vs. **holoenzyme** (with cofactor); tightly bound = **prosthetic group**.'
        ]
      },
      {
        section: 'Enzyme Kinetics',
        points: [
          'Enzymes show **saturation kinetics**: rate rises with $[S]$ until **$V_{max}$** is reached.',
          '**Michaelis–Menten** plot = **hyperbola** ($v$ vs. $[S]$); **Lineweaver–Burk** = **straight line** ($\\tfrac{1}{v}$ vs. $\\tfrac{1}{[S]}$). x-intercept $= -\\tfrac{1}{K_m}$, y-intercept $= \\tfrac{1}{V_{max}}$.',
          'Enzymes are compared by **$K_m$** (substrate affinity — low $K_m$ = high affinity) and **$V_{max}$**. Raising $[E]$ is the only way to raise $V_{max}$.',
          '**Cooperative** enzymes (multi-subunit, T ⇌ R) give a **sigmoidal** curve; quantified by **Hill\'s coefficient**.'
        ]
      },
      {
        section: 'Effects of Local Conditions on Enzyme Activity',
        points: [
          '**Temperature** and **pH** affect activity *in vivo*; extremes **denature** the enzyme (loss of 2°/3°/4° structure).',
          'Human optimum: **37°C (310 K)** and **pH 7.4**; **pepsin ≈ pH 2**, **pancreatic enzymes ≈ pH 8.5**.',
          '*In vitro*, **salinity** disrupts H-bonds/ionic bonds and can denature the enzyme.'
        ]
      },
      {
        section: 'Regulation of Enzyme Activity',
        points: [
          '**Feedback inhibition:** a high level of a downstream **product** inhibits an **earlier** enzyme in the same pathway.',
          '**Reversible inhibition** — **Competitive** (active site; $K_m$ ↑, $V_{max}$ same; beaten by more $[S]$); **Noncompetitive** (binds E and ES equally; $V_{max}$ ↓, $K_m$ same); **Mixed** (binds E and ES unequally; $V_{max}$ ↓, $K_m$ ↑ or ↓); **Uncompetitive** (binds ES only; $K_m$ ↓ and $V_{max}$ ↓).',
          '**Irreversible inhibition** permanently disables the enzyme; new enzyme must be synthesized.',
          '**Regulatory enzymes:** allosteric **activators/inhibitors**; **covalent modification** (phosphorylation, glycosylation); **zymogens** secreted inactive and activated by **cleavage**.'
        ]
      }
    ],
    mnemonics: [
      '**Six enzyme classes — "LI\'L HOT":** **L**igase · **I**somerase · **L**yase · **H**ydrolase · **O**xidoreductase · **T**ransferase.',
      '**Hydrolase vs. lyase:** **H**ydrolase needs **H₂O**; **lyase** cleaves/builds **without water and without electrons** (reverse = **synthase**).',
      '**Cofactor vs. coenzyme:** cofactor = **inorganic** metal ion; **co**enzyme = **o**rganic (vitamin). **Apo**enzyme = "a-**po**or," missing helper, **inactive**.',
      '**Induced fit = stress ball:** substrate and enzyme *both* change shape to fit; the ball springs back after release (enzyme regenerated).',
      '**Inhibition $K_m$/$V_{max}$:** **Comp**etitive → $K_m$ ↑, $V_{max}$ same. **Non**competitive → **no** $K_m$ change, $V_{max}$ ↓. **Un**competitive → **both down**. **Mixed** → $V_{max}$ ↓, $K_m$ mixed.',
      '**Only competitive inhibition is overcome by more substrate** — because only it fights for the **active site**.',
      '**Lineweaver–Burk intercepts:** y-axis $= \\frac{1}{V_{max}}$, x-axis $= -\\frac{1}{K_m}$.',
      '**Zymogen = "–ogen" is OFF:** trypsin**ogen**/pepsin**ogen** are inactive precursors; cleavage switches them on.'
    ],
    keyConcepts: [
      '**Kinetics, not thermodynamics:** enzymes lower $E_a$ and speed reactions but never change $\\Delta G$, $\\Delta H$, or $K_{eq}$ — only how fast equilibrium is reached.',
      '**$K_m$ is inverse affinity:** low $K_m$ = high affinity (half-max at low $[S]$); it is intrinsic and unchanged by $[S]$ or $[E]$. Only raising $[E]$ raises $V_{max}$.',
      '**The four reversible inhibitors** and their $K_m$/$V_{max}$ effects are the chapter\'s single highest-yield fact — anchor on "competitive = active site, beaten by substrate, $K_m$ ↑."',
      '**Regulation is layered:** fast/reversible (allosteric, competitive/noncompetitive inhibition, phosphorylation) vs. slow/permanent (irreversible inhibition, zymogen cleavage, induced gene expression).'
    ],
    equations: [
      {
        name: 'Michaelis–Menten equation',
        tex: 'v = \\dfrac{V_{max}[S]}{K_m + [S]}',
        note: 'Rate vs. substrate concentration (a hyperbola). At $v = \\tfrac{1}{2}V_{max}$, $K_m = [S]$. Low $K_m$ = high substrate affinity.'
      },
      {
        name: 'Michaelis–Menten reaction scheme',
        tex: '\\text{E} + \\text{S} \\underset{k_{-1}}{\\overset{k_1}{\\rightleftharpoons}} \\text{ES} \\overset{k_{cat}}{\\rightarrow} \\text{E} + \\text{P}',
        note: 'ES forms at $k_1$, dissociates at $k_{-1}$, or yields product at $k_{cat}$; the enzyme is regenerated either way.'
      },
      {
        name: 'Lineweaver–Burk (double-reciprocal)',
        tex: '\\dfrac{1}{v} = \\dfrac{K_m}{V_{max}}\\cdot\\dfrac{1}{[S]} + \\dfrac{1}{V_{max}}',
        note: 'Straight-line form: x-intercept $= -\\tfrac{1}{K_m}$, y-intercept $= \\tfrac{1}{V_{max}}$. Best for reading off inhibition type.'
      },
      {
        name: 'Turnover number',
        tex: 'V_{max} = [E]\\,k_{cat}',
        note: '$k_{cat}$ = substrate molecules converted per enzyme per second ($\\text{s}^{-1}$). Catalytic efficiency $= \\tfrac{k_{cat}}{K_m}$.'
      }
    ]
  },

  questions: raw.questions
};
