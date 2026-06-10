// Chapter 4 — Compounds and Stoichiometry. Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch04.json (already-correct extraction);
// goals are pulled from the source LEARNING GOALS; recap/detail markdown is authored here.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 4,
  title: 'Compounds and Stoichiometry',
  subtitle: 'Molecules & moles · representation of compounds · types of chemical reactions · balancing equations · applications of stoichiometry · ions',

  blocks: [
    /* ───────────────────── 4.1 Molecules and Moles ───────────────────── */
    {
      id: 's1', num: '4.1', title: 'Molecules and Moles',
      goals: [
        'Calculate the molar mass of a given substance, such as AgCN.',
        'Calculate the number of moles of a molecule given its mass in grams.',
        'Compare the number of molecules in two different compounds given their gram weights and molecular formulas.',
        'Determine the normality of a solution.'
      ],
      recap: `
- A **molecule** = 2+ atoms held by **covalent** bonds; **ionic compounds** form lattices, not true molecules → use **formula unit** and **formula weight** instead of *molecular weight*.
- **Molar mass** = mass of one **mole** ($6.022\\times10^{23}$ particles) in **g/mol**; numerically equal to molecular/formula weight in amu.
- Interconvert with $n = \\dfrac{m}{M}$ — the workhorse of stoichiometry and titration.
- **Equivalents** = moles of the species of interest ($\\text{H}^+$, $\\text{OH}^-$, $e^-$, ions); **gram equivalent weight** = molar mass ÷ $n$.
- **Normality** $N = n \\times M$ → equivalents per liter.
`,
      detail: `
#### Molecules vs. ionic compounds
A **molecule** is a combination of two or more atoms held together by **covalent bonds** — the smallest unit of a compound that still shows its identifying properties.

- Same-element molecules: $\\text{N}_2$, $\\text{O}_2$.
- Different-element molecules: $\\text{CO}_2$, $\\text{SOCl}_2$ (thionyl chloride), $\\text{C}_6\\text{H}_5\\text{CHO}$ (benzaldehyde).

**Ionic compounds do not form true molecules.** In the solid state, ions arrange into a near-infinite 3-D **lattice** (e.g., each $\\text{Na}^+$ in $\\text{NaCl}$ is surrounded by $\\text{Cl}^-$ and vice versa). Because no discrete molecule exists:

- We use the term **formula unit** (the empirical formula) instead of *molecule*.
- We use **formula weight** instead of *molecular weight*.

:::bridge
**Ionic vs. covalent comes down to electronegativity.** Large $\\Delta\\text{EN}$ (e.g., Na + Cl) → **ionic**; similar $\\text{EN}$ (e.g., C + O) → **molecular/covalent**. Bonding is covered in Ch. 3 of *MCAT General Chemistry Review*.
:::

#### Molecular weight & formula weight
**Molecular weight** is just the **sum of the atomic weights** of every atom in a molecule, in **amu per molecule**. The **formula weight** of an ionic compound is the same sum taken over the empirical formula.

Worked example — molecular weight of $\\text{SOCl}_2$:

| Atom | Count × atomic weight | Contribution |
|---|---|---|
| **S** | $1 \\times 32.1$ amu | 32.1 amu |
| **O** | $1 \\times 16.0$ amu | 16.0 amu |
| **Cl** | $2 \\times 35.5$ amu | 71.0 amu |
| **Total** | | **119.1 amu/molecule** |

#### The mole & Avogadro's number
A **mole** is a count of particles equal to the number found in 12 g of carbon-12 — **Avogadro's number** $N_A = 6.022\\times10^{23}\\ \\text{mol}^{-1}$. One mole of a compound has a **mass in grams equal to its molecular/formula weight in amu**. The mass of one mole is the **molar mass** (g/mol).

- One molecule of $\\text{H}_2\\text{CO}_3$ = 62 amu → one mole of $\\text{H}_2\\text{CO}_3$ = 62 g.
- *Molecular weight* (amu/molecule) and *molar mass* (g/mol) are numerically equal but **not the same unit** — don't conflate them.

:::keyconcept
**The mole and $N_A$ are just units of convenience** — like a *dozen* for eggs. They let us scale from one molecule to laboratory-sized masses.
:::

The number of moles in a sample comes from **Equation 4.1**:

$$n = \\dfrac{m}{M}$$

where $m$ = mass (g) and $M$ = molar mass (g/mol). *Example:* moles in 9.53 g $\\text{MgCl}_2$ → first find $M = 24.3 + 2(35.5) = 95.3$ g/mol, then $n = \\dfrac{9.53}{95.3} \\approx 0.100$ mol.

#### Equivalents, gram equivalent weight & normality
Some compounds act more "potently" per mole than others. **Equivalents** ask: *how many moles of the species of interest does one mole of this compound supply?*

| Compound | Species of interest | Equivalents per mole |
|---|---|---|
| **HCl** | $\\text{H}^+$ | 1 (monoprotic) |
| **$\\text{H}_2\\text{SO}_4$** | $\\text{H}^+$ | 2 (diprotic) |
| **$\\text{H}_3\\text{PO}_4$** | $\\text{H}^+$ | 3 (triprotic) |
| **Na** | $e^-$ | 1 |
| **Mg** | $e^-$ | 2 |

To work in mass, the **gram equivalent weight** is the grams that supply one equivalent (**Equation 4.2**):

$$\\text{GEW} = \\dfrac{\\text{molar mass}}{n}$$

where $n$ = particles of interest produced/consumed per molecule. *Example:* GEW of $\\text{H}_2\\text{SO}_4$ (molar mass 98.1 g/mol, $n = 2$ protons) $= \\dfrac{98.1}{2} = 49.1$ g.

To count equivalents present, use **Equation 4.3**:

$$\\text{equivalents} = \\dfrac{\\text{mass of compound}}{\\text{GEW}}$$

:::keyconcept
In acid–base chemistry, the **gram equivalent weight** is the mass of acid that yields one mole of $\\text{H}^+$, or the mass of base that yields one mole of $\\text{OH}^-$.
:::

**Normality ($N$)** measures concentration in **equivalents per liter**. On the MCAT it most often refers to $\\text{H}^+$ concentration. A **1 N** acid solution has 1 mol $\\text{H}^+$/L. The conversion (**Equation 4.4**):

$$N = n \\times M$$

where $n$ = protons / hydroxides / electrons / ions produced or consumed per solute.

- **1 N HCl** → $M = 1$ M (monoprotic).
- **1 N $\\text{H}_2\\text{CO}_3$** → $M = 0.5$ M (diprotic — two protons per molecule).

Normality calculations **assume the reaction goes to completion** (e.g., carbonic acid is treated as donating both protons even though it doesn't fully dissociate spontaneously).

![Figure 4.1 — Titration of carbonic acid with a base](${fig(0, 2).src})

**Figure 4.1** shows titration of the diprotic acid $\\text{H}_2\\text{CO}_3$: **two equivalents of base** are needed to neutralize both protons, so the x-axis spans two equivalence regions.

:::expertise
On any stoichiometry problem, **hunt for normality**: identify the equivalent unit ($\\text{H}^+$, $\\text{OH}^-$, $e^-$, ions), then multiply by moles or molarity to get the normal concentration. One equivalent of acid always neutralizes one equivalent of base — true even when the *molar* amounts differ (1 mol HCl will **not** fully neutralize 1 mol $\\text{Ca(OH)}_2$, which donates 2 equivalents of base).
:::

:::bridge
Equivalents tie directly into **normality** and acid–base titration (Ch. 10, *MCAT General Chemistry Review*) and into **redox** electron counting (Ch. 11).
:::
`
    },

    /* ─────────────── 4.2 Representation of Compounds ─────────────── */
    {
      id: 's2', num: '4.2', title: 'Representation of Compounds',
      goals: [
        'Recall the similarities and differences between molecular and empirical formulas.',
        'Calculate the percent composition by mass of a compound, such as C₆H₁₂O₆.',
        'Determine the empirical formula of a compound given its percent composition by mass.'
      ],
      recap: `
- **Empirical formula** = simplest whole-number ratio of elements; **molecular formula** = actual atom counts and is always a **whole-number multiple** of the empirical formula.
- For ionic compounds (e.g., $\\text{NaCl}$, $\\text{CaCO}_3$), only the **empirical** formula exists.
- **Law of constant composition**: a pure compound always has the same elements in the same **mass ratio**.
- **Percent composition** $= \\dfrac{\\text{mass of element}}{\\text{molar mass}} \\times 100\\%$.
- **Molecular formula multiplier** $= \\dfrac{\\text{molar mass}}{\\text{empirical formula weight}}$.
`,
      detail: `
#### Ways to represent compounds
- **Structural (skeletal) formulas** — show bond connectivity (organic chemistry).
- **Molecular formulas** — list constituent atoms *without* showing arrangement (general chemistry). $\\text{C}_6\\text{H}_{12}\\text{O}_6$ tells you 6 C, 12 H, 6 O — but nothing about bonding.

#### Law of constant composition
Any pure sample of a given compound contains the **same elements in an identical mass ratio**. Every water sample is 2 H : 1 O by atoms, or ~1 g H : 8 g O by mass.

:::realworld
The composition of water and amino acids is the **same anywhere in the universe** — only physical properties like density may differ across environments.
:::

#### Empirical vs. molecular formulas

| | **Empirical formula** | **Molecular formula** |
|---|---|---|
| Definition | Simplest **whole-number ratio** of elements | **Exact** number of each atom |
| Relationship | The base unit | An integer **multiple** of the empirical formula |
| Benzene | **CH** | $\\text{C}_6\\text{H}_6$ (× 6) |
| Water | $\\text{H}_2\\text{O}$ | $\\text{H}_2\\text{O}$ (× 1 — identical) |
| Ionic (NaCl, CaCO₃) | Only the empirical formula exists | — |

:::mnemonic
**E**mpirical = **E**ssential ratio (smallest). **M**olecular = **M**ore (or equal) — the real, full count. The molecular formula is *empirical × an integer*.
:::

:::bridge
An empirical formula of **$\\text{CH}_2\\text{O}$** signals a **monosaccharide** (glucose, fructose, galactose). Carbohydrate structure is covered in Ch. 4, *MCAT Biochemistry Review*.
:::

#### Percent composition
The **percent composition** of an element by mass (**Equation 4.5**):

$$\\%\\,\\text{composition} = \\dfrac{\\text{mass of element in formula}}{\\text{molar mass of compound}} \\times 100\\%$$

*Example — Cr in $\\text{K}_2\\text{Cr}_2\\text{O}_7$:* molar mass $= 2(39.1) + 2(52.0) + 7(16.0) = 294.2$ g/mol; mass of Cr $= 2(52.0) = 104.0$; $\\%\\,\\text{Cr} = \\dfrac{104.0}{294.2}\\times100\\% \\approx 35.4\\%$.

:::expertise
**Percent composition is a favorite stoichiometry test point.** Drill these for speed on Test Day.
:::

#### Empirical formula from percent composition — two methods

**Method 1 (mass → moles → ratio).** Assume a **100 g sample** so percents become grams, then convert to moles and divide by the smallest:

1. For a carbohydrate that is 40.9% C, 4.58% H, 54.52% O (molar mass 264 g/mol): 40.9 g C, 4.58 g H, 54.52 g O.
2. Moles: $\\dfrac{40.9}{12.0}=3.41$ C, $\\dfrac{4.58}{1.0}=4.58$ H, $\\dfrac{54.52}{16.0}=3.41$ O.
3. Divide by smallest (3.41): C₁H₁.₃₃O₁ → ×3 → **empirical formula $\\text{C}_3\\text{H}_4\\text{O}_3$**.
4. Empirical formula weight $= 3(12) + 4(1) + 3(16) = 88$ g/mol. Multiplier $= \\dfrac{264}{88} = 3$.
5. **Molecular formula** $= \\text{C}_3\\text{H}_4\\text{O}_3 \\times 3 = \\text{C}_9\\text{H}_{12}\\text{O}_9$.

**Method 2 (molecular first, when molar mass is given).** Multiply molar mass by each percent to get the mass of each element per mole, divide by atomic weights for the mole ratio, then reduce to get the empirical formula. Familiarity with carbohydrates (ratio $\\text{CH}_2\\text{O}$) corrects rounding error to land on $\\text{C}_9\\text{H}_{12}\\text{O}_9$.

:::expertise
**Know both methods.** When the molar mass is given, Method 2 (molecular first) is often faster; otherwise Method 1 (empirical first) is cleaner.
:::

:::keyconcept
The molecular formula is the empirical formula **or a multiple of it**. To find it you need (1) the **mole ratio** → empirical formula, and (2) the **molar mass** → divide by empirical formula weight for the multiplier.
:::
`
    },

    /* ─────────────── 4.3 Types of Chemical Reactions ─────────────── */
    {
      id: 's3', num: '4.3', title: 'Types of Chemical Reactions',
      goals: [
        'Describe the series of events in a single-displacement, double-displacement, neutralization, or combustion reaction.',
        'Classify a reaction and predict its products given the reactants.'
      ],
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 4.5 — Double-displacement reactions: Zn(NO₃)₂ precipitates as zinc salts (ZnS, Zn(OH)₂, ZnCO₃) in different solutions.' }],
      recap: `
- **Combination** ($A + B \\rightarrow C$): more reactants than products.
- **Decomposition** ($A \\rightarrow B + C$): one reactant splits, often via heat ($\\Delta$), light, or electrolysis.
- **Combustion**: fuel (usually a hydrocarbon) + oxidant ($\\text{O}_2$) → almost always $\\text{CO}_2 + \\text{H}_2\\text{O}$.
- **Single-displacement**: one element replaces another in a compound (always a **redox** reaction).
- **Double-displacement (metathesis)**: two compounds **swap ions**; driven by a precipitate, gas, or weak electrolyte. **Neutralization** is the acid + base → salt (+ water) subtype.
`,
      detail: `
#### The five reaction classes

| Reaction type | General form | Hallmark |
|---|---|---|
| **Combination** | $A + B \\rightarrow C$ | Two+ reactants fuse into **one** product (more reactants than products) |
| **Decomposition** | $A \\rightarrow B + C$ | One reactant **breaks apart** (more products than reactants); needs heat/light/electrolysis |
| **Combustion** | fuel $+\\ \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ | Hydrocarbon + oxidant; $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ almost always present |
| **Single-displacement** | $A + BC \\rightarrow AC + B$ | One element replaces another; always **redox** |
| **Double-displacement** | $AB + CD \\rightarrow AD + CB$ | Two compounds **swap** partners (metathesis) |

#### Combination reactions
Two or more reactants form **one** product. Burning hydrogen in air to form water (**Figure 4.2**):

$$2\\,\\text{H}_2\\,(g) + \\text{O}_2\\,(g) \\rightarrow 2\\,\\text{H}_2\\text{O}\\,(g)$$

:::keyconcept
**Combination reactions have more reactants than products:** $A + B \\rightarrow C$.
:::

#### Decomposition reactions
The reverse of combination — a single reactant breaks into two or more products, usually driven by **heat ($\\Delta$ over the arrow), high-frequency light, or electrolysis**. Example: mercury(II) oxide decomposes, $2\\,\\text{HgO} \\xrightarrow{\\Delta} 2\\,\\text{Hg} + \\text{O}_2$.

![Figure 4.3 — Silver chloride crystals](${fig(2, 1).src})

**Silver chloride** decomposes in sunlight (the **UV component** has enough energy to catalyze it), yielding a rust-colored product of separated silver and chlorine.

:::keyconcept
**Decomposition reactions generally have more products than reactants:** $A \\rightarrow B + C$.
:::

#### Combustion reactions
A **fuel** (usually a hydrocarbon) reacts with an **oxidant** (normally $\\text{O}_2$), most commonly producing $\\text{CO}_2$ and $\\text{H}_2\\text{O}$. Combustion of methane (**Figure 4.4**):

$$\\text{CH}_4\\,(g) + 2\\,\\text{O}_2\\,(g) \\rightarrow \\text{CO}_2\\,(g) + 2\\,\\text{H}_2\\text{O}\\,(g)$$

:::keyconcept
**Combustion = oxidation of a fuel** (typically a hydrocarbon) by $\\text{O}_2$.
:::

:::expertise
Combustion usually uses hydrocarbon fuels, but **sulfur, sugars, and other compounds** can burn too. Products vary, but **$\\text{CO}_2$ and $\\text{H}_2\\text{O}$ are almost always present** — recognize this signature in any context.
:::

#### Single-displacement reactions
An atom or ion in a compound is **replaced** by an atom or ion of another element. Solid copper displaces silver ions from silver nitrate:

$$\\text{Cu}\\,(s) + \\text{AgNO}_3\\,(aq) \\rightarrow \\text{Ag}\\,(s) + \\text{CuNO}_3\\,(aq)$$

These are inherently **oxidation–reduction** reactions: $\\text{Ag}^+$ gains an electron (**reduced** to Ag) while Cu loses an electron (**oxidized**).

#### Double-displacement (metathesis) reactions
Elements from two compounds **swap places** to form two new compounds. Driven when a product leaves solution as a **precipitate** or **gas**, or forms an undissociated **weak electrolyte**:

$$\\text{CaCl}_2\\,(aq) + 2\\,\\text{AgNO}_3\\,(aq) \\rightarrow \\text{Ca(NO}_3)_2\\,(aq) + 2\\,\\text{AgCl}\\,(s)$$

**Figure 4.5** shows $\\text{Zn(NO}_3)_2$ precipitating distinct zinc salts depending on the solution:

| Added solution | Precipitate formed |
|---|---|
| $(\\text{NH}_4)_2\\text{S}$ | $\\text{ZnS}\\,(s)$ |
| $\\text{NaOH}$ | $\\text{Zn(OH)}_2\\,(s)$ |
| $\\text{Na}_2\\text{CO}_3$ | $\\text{ZnCO}_3\\,(s)$ |

##### Neutralization reactions
A **specific double-displacement** subtype: an **acid + base → salt (+ usually water)**:

$$\\text{HCl}\\,(aq) + \\text{NaOH}\\,(aq) \\rightarrow \\text{NaCl}\\,(aq) + \\text{H}_2\\text{O}\\,(l)$$

![Figure 4.6 — Indicator strip tested across solutions of varying pH](${fig(2, 4).src})

Acid–base reactions are often invisible; an **indicator** or pH strip (**Figure 4.6**) reveals when neutralization has occurred.

:::bridge
Neutralization (acid + base → salt + water) anchors **acid–base chemistry**, Ch. 10 of *MCAT General Chemistry Review*.
:::

:::mnemonic
**Recognize products fast:** *combiNe → oNe* product · *decompose → comes apart* · *combustion → $\\text{CO}_2 + \\text{H}_2\\text{O}$* · *single = one swap* (element for element) · *double = a double-swap* (ion for ion). Neutralization is just a double-swap where one product is **water**.
:::
`
    },

    /* ─────────────── 4.4 Balancing Chemical Equations ─────────────── */
    {
      id: 's4', num: '4.4', title: 'Balancing Chemical Equations',
      goals: [
        'Balance a chemical equation.'
      ],
      recap: `
- Balanced equations obey **conservation of mass and charge**: equal atoms of each element (and equal charge) on both sides.
- **Stoichiometric coefficients** = relative **moles** of each species; reduce to the **simplest whole-number ratio**.
- **Strategy:** balance the **least-represented** element first; save the **most-represented** (usually O or H) for last; balance **charge** last if needed.
- If stuck, **guess a coefficient** for the first reactant and adjust the rest.
`,
      detail: `
#### Why we balance
Chemical equations encode *how much* reacts to give *how much* product, so they must obey the **laws of conservation of mass and charge** — the atoms of each element (and the total charge) must match on both sides. **Stoichiometric coefficients** (the numbers in front of each species) give the relative **moles** involved and are normally **whole numbers**.

Example — combustion of nonane:

$$\\text{C}_9\\text{H}_{20}\\,(g) + 14\\,\\text{O}_2\\,(g) \\rightarrow 9\\,\\text{CO}_2\\,(g) + 10\\,\\text{H}_2\\text{O}\\,(l)$$

reads as *1 mol nonane + 14 mol $\\text{O}_2$ → 9 mol $\\text{CO}_2$ + 10 mol water.*

:::expertise
The MCAT rarely asks you to balance outright — but you **must spot an unbalanced reaction and fix coefficients fast**. Check atoms of each element and the **charge** (especially in redox).
:::

#### The balancing algorithm
Balance $\\text{C}_4\\text{H}_{10}\\,(l) + \\text{O}_2\\,(g) \\rightarrow \\text{CO}_2\\,(g) + \\text{H}_2\\text{O}\\,(l)$:

| Step | Action | Result |
|---|---|---|
| 1 | Balance **carbon** (appears once each side) | $\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\rightarrow 4\\,\\text{CO}_2 + \\text{H}_2\\text{O}$ |
| 2 | Balance **hydrogen** (appears once each side) | $\\text{C}_4\\text{H}_{10} + \\text{O}_2 \\rightarrow 4\\,\\text{CO}_2 + 5\\,\\text{H}_2\\text{O}$ |
| 3 | Balance **oxygen** last (in multiple species; now 13 O on product side) | needs $\\tfrac{13}{2}\\,\\text{O}_2$ |
| 4 | Clear the fraction → **whole-number ratio** (double everything) | $2\\,\\text{C}_4\\text{H}_{10} + 13\\,\\text{O}_2 \\rightarrow 8\\,\\text{CO}_2 + 10\\,\\text{H}_2\\text{O}$ |
| 5 | **Verify** every element (and charge) | balanced ✓ |

**Method Two — "guess and go."** If unsure, assume a convenient coefficient (e.g., 4) for the first reactant, balance the rest, then divide through by the greatest common factor to reach the simplest ratio. Both routes give the same final equation; **simpler numbers make the later stoichiometry easier.**

:::keyconcept
**Balance least-represented elements first**, work toward the most-represented (usually **O or H**), then balance **charge** if needed. Stuck? Take a guess on the first reactant's coefficient and balance the remainder around it.
:::

:::mnemonic
**"Save the messy ones for last."** Single-appearance atoms (often C, then H) are easy anchors; **oxygen** typically shows up everywhere, so leave it until the end — then halve/double to clear fractions.
:::
`
    },

    /* ─────────────── 4.5 Applications of Stoichiometry ─────────────── */
    {
      id: 's5', num: '4.5', title: 'Applications of Stoichiometry',
      goals: [
        'Calculate the grams of product produced given the quantities of reactant.',
        'Identify the limiting reagent within a reaction.',
        'Calculate the mass of excess reagent in a reaction with a limiting reagent.',
        'Calculate the percent yield of a reaction.'
      ],
      images: [{ src: fig(4, 1).src, alt: fig(4, 1).alt, caption: 'Figure 4.7 — A reaction with a limiting reagent: A and B react 1:1; excess A remains while B (limiting) is fully consumed.' }],
      recap: `
- The **mole ratio** from balanced coefficients is the heart of every stoichiometry problem.
- **Three-step dimensional analysis:** grams → **moles** → (mole ratio) → moles → grams.
- The **limiting reagent** is consumed first and caps product; **excess reagents** remain. Compare reactants **in moles**, weighted by their **stoichiometric ratio** — never gram-to-gram.
- **Theoretical yield** = max product from the limiting reagent; **actual yield** < theoretical.
- **Percent yield** $= \\dfrac{\\text{actual}}{\\text{theoretical}}\\times100\\%$.
`,
      detail: `
#### Mole ratios run everything
The most useful number from a balanced equation is the **mole ratio**. For $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$:

- 1 mol $\\text{H}_2$ → 1 mol $\\text{H}_2\\text{O}$.
- 1 mol $\\text{O}_2$ → 2 mol $\\text{H}_2\\text{O}$.
- $\\text{H}_2$ is consumed at **twice** the rate of $\\text{O}_2$.

:::keyconcept
Stoichiometry is **dimensional analysis**, usually three fractions in sequence:
**grams of given $\\rightarrow$ moles of given $\\rightarrow$ moles of wanted $\\rightarrow$ grams of wanted.** Watch your units — they must cancel down to the answer's units.
:::

**Worked three-step example.** How many grams of $\\text{CaCl}_2$ make 71.7 g $\\text{AgCl}$ in $\\text{CaCl}_2 + 2\\,\\text{AgNO}_3 \\rightarrow \\text{Ca(NO}_3)_2 + 2\\,\\text{AgCl}$? ($M_{\\text{CaCl}_2}=111.1$, $M_{\\text{AgCl}}=143.4$.)

$$71.7\\ \\text{g AgCl} \\times \\dfrac{1\\ \\text{mol AgCl}}{143.4\\ \\text{g}} \\times \\dfrac{1\\ \\text{mol CaCl}_2}{2\\ \\text{mol AgCl}} \\times \\dfrac{111.1\\ \\text{g}}{1\\ \\text{mol CaCl}_2} \\approx 27.8\\ \\text{g CaCl}_2$$

:::expertise
**Three conversions worth memorizing:**
- 1 mol ideal gas at STP $= 22.4$ L
- 1 mol of anything $= 6.022\\times10^{23}$ particles ($N_A$)
- 1 mol $=$ its **molar mass in grams** (periodic table)
:::

#### Limiting reagent & excess reagent
Reactants are rarely mixed in exact stoichiometric proportions, so one runs out first — the **limiting reagent** caps how much product forms. What's left over is the **excess reagent**.

![Figure 4.7 — Reaction with a limiting reagent](${fig(4, 1).src})

In **Figure 4.7**, A and B react 1:1 but A is in surplus. After reaction, product C has formed and **A remains** → **A is in excess, B is limiting.**

**Two rules for limiting-reagent problems:**

1. **Compare in moles, never grams** — gram-to-gram comparisons are misleading.
2. It's **not** the raw mole amounts but the amounts **weighted by the stoichiometric ratio** that decide the limiter.

**Worked example.** 27.9 g Fe + 24.1 g S → FeS ($\\text{Fe} + \\text{S} \\rightarrow \\text{FeS}$, 1:1).

| Reactant | Mass | Molar mass | Moles |
|---|---|---|---|
| **Fe** | 27.9 g | 55.8 g/mol | **0.5 mol** ← limiting |
| **S** | 24.1 g | 32.1 g/mol | 0.75 mol (excess) |

- Fe is limiting (fewer moles in a 1:1 reaction) → 0.5 mol Fe consumes 0.5 mol S.
- Excess S $= 0.75 - 0.5 = 0.25$ mol → mass $= 0.25 \\times 32.1 \\approx 8.0$ g S left over.

:::expertise
**When two reactant quantities are given, expect to find the limiting reagent.** Convert both to moles, divide each by its coefficient, and the smallest result is the limiter.
:::

#### Yield & percent yield
- **Theoretical yield** — the **maximum** product predicted from the balanced equation if the limiting reactant is fully consumed, with no side reactions and complete collection.
- **Actual (raw) yield** — what you actually recover; almost always **less** than theoretical.

**Percent yield (Equation 4.6):**

$$\\%\\,\\text{yield} = \\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%$$

**Worked example.** 32.7 g Zn in excess $\\text{CuSO}_4$ produces 28 g Cu ($\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{Cu} + \\text{ZnSO}_4$). Theoretical: $\\dfrac{32.7}{65.4}=0.5$ mol Zn → 0.5 mol Cu $\\times 63.5 = 31.8$ g (theoretical). Then $\\%\\,\\text{yield} = \\dfrac{28}{31.8}\\times100\\% \\approx 88\\%$.

:::expertise
An experimental passage with a reaction often hides a **pseudo-discrete percent-yield question** — set up actual ÷ theoretical and you've got it.
:::

:::mnemonic
**"Actual Over Theoretical"** for percent yield — the number you *got* over the number you *wanted*, ×100. It can never exceed 100% (if it does, you made an arithmetic or contamination error).
:::
`
    },

    /* ───────────────────────────── 4.6 Ions ───────────────────────────── */
    {
      id: 's6', num: '4.6', title: 'Ions',
      goals: [
        'Determine whether a molecule will act as an electrolyte in solution.',
        'Recall the common polyatomic ions, including their names and charges.'
      ],
      images: [{ src: fig(5, 2).src, alt: fig(5, 2).alt, caption: 'Figure 4.10 — Solvation of a polar covalent compound: water molecules (S) surround and separate the dissociated ions.' }],
      recap: `
- **Cations** = positive (usually metals); **anions** = negative (usually nonmetals). Ionic bonds are **electrostatic attraction** between opposite charges.
- **Naming:** variable-charge metals → Roman numeral (or older *–ous/–ic*); monatomic anions → *–ide*; oxyanions → *–ite* (less O) / *–ate* (more O), with **hypo–** (least) and **per–** (most) extending the series.
- Representative-element charges track **group number**; transition-metal charges vary.
- **Electrolytes** dissociate into ions in water; **strong** = full dissociation (NaCl, HCl), **weak** = partial (acetic acid, $\\text{NH}_3$), **nonelectrolyte** = none ($\\text{O}_2$, glucose).
`,
      detail: `
#### Cations, anions & ionic bonds
**Ionic compounds** = positively charged **cations** (usually metals) + negatively charged **anions** (usually nonmetals), held by **ionic bonds** (electrostatic attraction). Hydrogen is an exception — a **nonmetal** that can act as either cation ($\\text{H}^+$) or anion ($\\text{H}^-$, hydride), per **Figure 4.8**.

![Figure 4.8 — Oxidation states of hydrogen](${fig(5, 0).src})

:::bridge
Ionic-bond strength follows **Coulomb's law** (Ch. 5, *MCAT Physics and Math Review*): force is inversely related to internuclear distance, so **long-bond ionic compounds are held together more weakly**.
:::

#### Nomenclature of ions

##### Cations (metals)
- **Variable-charge metals** → **Roman numeral** for the charge: $\\text{Fe}^{2+}$ = iron(II), $\\text{Fe}^{3+}$ = iron(III), $\\text{Cu}^{+}$ = copper(I), $\\text{Cu}^{2+}$ = copper(II).
- **Older system** → Latin root + **–ous** (lesser charge) / **–ic** (greater charge): **ferrous** $\\text{Fe}^{2+}$, **ferric** $\\text{Fe}^{3+}$; **cuprous** $\\text{Cu}^{+}$, **cupric** $\\text{Cu}^{2+}$.

##### Monatomic anions → *–ide*

| Ion | Name | Ion | Name |
|---|---|---|---|
| $\\text{H}^-$ | Hydride | $\\text{S}^{2-}$ | Sulfide |
| $\\text{F}^-$ | Fluoride | $\\text{N}^{3-}$ | Nitride |
| $\\text{O}^{2-}$ | Oxide | $\\text{P}^{3-}$ | Phosphide |

##### Oxyanions → *–ite* / *–ate*, with *hypo–* / *per–*
When an element forms **two** oxyanions: less oxygen → **–ite**, more oxygen → **–ate**.

| Less O (–ite) | More O (–ate) |
|---|---|
| $\\text{NO}_2^{-}$ nitrite | $\\text{NO}_3^{-}$ nitrate |
| $\\text{SO}_3^{2-}$ sulfite | $\\text{SO}_4^{2-}$ sulfate |

For **extended series**, add prefixes — **hypo–** (fewest O) and **per–** (most O):

| Ion | Name |
|---|---|
| $\\text{ClO}^-$ | **Hypo**chlorite |
| $\\text{ClO}_2^-$ | Chlorite |
| $\\text{ClO}_3^-$ | Chlorate |
| $\\text{ClO}_4^-$ | **Per**chlorate |

##### Hydrogen-bearing polyatomic anions
Adding $\\text{H}^+$ lowers the charge; name with **hydrogen** / **dihydrogen** (older: **bi–**):

- $\\text{HCO}_3^-$ — hydrogen carbonate (**bicarbonate**)
- $\\text{HSO}_4^-$ — hydrogen sulfate (**bisulfate**)
- $\\text{H}_2\\text{PO}_4^-$ — dihydrogen phosphate

##### Other common polyatomic ions (Table 4.1)

| Charge | Formula | Name |
|---|---|---|
| +1 | $\\text{NH}_4^+$ | Ammonium |
| −1 | $\\text{C}_2\\text{H}_3\\text{O}_2^-$ | Acetate |
| −1 | $\\text{CN}^-$ | Cyanide |
| −1 | $\\text{MnO}_4^-$ | Permanganate |
| −1 | $\\text{SCN}^-$ | Thiocyanate |
| −2 | $\\text{CrO}_4^{2-}$ | Chromate |
| −2 | $\\text{Cr}_2\\text{O}_7^{2-}$ | Dichromate |
| −3 | $\\text{BO}_3^{3-}$ | Borate |

:::mnemonic
**The "litest" anions have the fewest oxygens; the heaviest anions "ate" the most oxygens.** (*–ite* = light = less O; *–ate* = ate more = more O.) **Hypo** = *under/below* (even less); **per** = *over/super* (even more).
:::

:::expertise
The *–ous/–ic* endings are rarely required; passages usually give reaction schemes that let you deduce unfamiliar formulas. Still learn the system for **discrete** questions.
:::

#### Ion charges by periodic position
- **Representative (main-group) elements:** charge tracks **group number**. Alkali metals (Group IA) → **+1**; alkaline earth metals (Group IIA) → **+2**; halogens (Group VIIA) → **−1** (one electron short of an octet).
- All elements in a group form monatomic ions of the **same charge**.
- **Anionic species can still contain metals** (e.g., $\\text{MnO}_4^-$, $\\text{CrO}_4^{2-}$) — but the metal carries a **positive oxidation state**. In halogen oxyanions ($\\text{ClO}^-$, $\\text{ClO}_2^-$) the halogen is also assigned a positive oxidation state.

![Figure 4.9 — Solutions of plutonium in various oxidation states](${fig(5, 1).src})

- **Nonrepresentative (transition) metals** (Cu, Fe, Cr) have **multiple** oxidation states (don't memorize them). Solution **color** can signal the oxidation state, since different states absorb different light frequencies (**Figure 4.9**, plutonium salts).

:::bridge
Transition-metal oxyanions like $\\text{MnO}_4^-$ and $\\text{CrO}_4^{2-}$ have a very **high oxidation number** on the metal, so they readily gain electrons → strong **oxidizing agents** (Ch. 4, *MCAT Organic Chemistry Review*).
:::

#### Electrolytes
Solid ionic compounds **don't conduct** — ions are locked in the lattice. In water, **ion–dipole interactions** disrupt the lattice, freeing ions to **carry current**. Solutes that enable conduction are **electrolytes**.

![Figure 4.10 — Solvation of a polar covalent compound](${fig(5, 2).src})

| Class | Degree of dissociation | Examples |
|---|---|---|
| **Strong electrolyte** | **Complete** | $\\text{NaCl}$, $\\text{KI}$ (ionic); $\\text{HCl}$ (highly polar covalent) |
| **Weak electrolyte** | **Partial** | $\\text{Hg}_2\\text{I}_2$, acetic acid & weak acids, $\\text{NH}_3$ & weak bases |
| **Nonelectrolyte** | **None** (stays molecular) | $\\text{O}_2\\,(g)$, $\\text{CO}_2\\,(g)$, glucose |

:::expertise
**Ionic compounds make the best electrolytes** (dissolve readily). **Nonpolar covalent compounds are weakest** — they form no current-carrying ions.
:::

:::bridge
Because electrolytes ionize, they have a **larger effect on colligative properties** than their nominal concentration suggests (Ch. 9, *MCAT General Chemistry Review*).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Molecules and Moles',
        points: [
          '**Compounds** are two or more elements in a **fixed proportion**.',
          '**Molecular weight** = mass (amu) of all atoms in a molecular formula; **molar mass** = mass of one mole ($6.022\\times10^{23}$ particles), in g/mol — numerically equal to molecular/formula weight.',
          'Ionic compounds use **formula unit** and **formula weight** (no true molecule exists).',
          '**Equivalents** = moles of the species of interest ($\\text{H}^+$, $\\text{OH}^-$, $e^-$, ions); **gram equivalent weight** = molar mass ÷ $n$.',
          '**Normality** = equivalents per liter $= n \\times$ molarity.'
        ]
      },
      {
        section: 'Representation of Compounds',
        points: [
          'The **law of constant composition**: a pure compound always has the same elements in the same **mass ratio**.',
          'The **empirical formula** is the smallest whole-number ratio of elements; the **molecular formula** is the empirical formula or a whole-number multiple of it.',
          '**Percent composition** by mass = mass of the element ÷ molar mass of the compound × 100%.'
        ]
      },
      {
        section: 'Types of Chemical Reactions',
        points: [
          '**Combination:** 2+ reactants → one product. **Decomposition:** one reactant → 2+ products.',
          '**Combustion:** a fuel + oxidant ($\\text{O}_2$) → $\\text{CO}_2 + \\text{H}_2\\text{O}$ (for a hydrocarbon).',
          '**Displacement** swaps atoms/ions: **single** (one element replaces another) vs. **double / metathesis** (two compounds trade partners).',
          '**Neutralization:** acid + base → salt (and usually water) — a double-displacement subtype.'
        ]
      },
      {
        section: 'Balancing Chemical Equations',
        points: [
          'Equations **must be balanced** to do stoichiometry (conservation of mass and charge).',
          'Order of operations: balance the **least common atoms** first, then the more common (usually H and O), then **charge** if needed.'
        ]
      },
      {
        section: 'Applications of Stoichiometry',
        points: [
          'The **limiting reagent** is consumed first and caps product; the rest are **excess reagents** (compare in **moles**, weighted by stoichiometric ratio).',
          '**Theoretical yield** = product if the limiting reactant is fully consumed with no side reactions; **actual yield** is typically lower.',
          '**Percent yield** = actual ÷ theoretical × 100%.'
        ]
      },
      {
        section: 'Ions',
        points: [
          'Nomenclature: **Roman numerals** (or –ous/–ic) for variable-charge metals; monatomic anions end in **–ide**; oxyanions use **–ite** (less O) / **–ate** (more O), extended by **hypo–** (fewest) and **per–** (most); hydrogen-bearing anions use *hydrogen/dihydrogen* or *bi–*.',
          'Representative-element charges are predictable from **group number** (metals → cations, nonmetals → anions to complete an octet); transition-metal charges are generally **unpredictable**.',
          '**Electrolytes** contain ions from solutes that dissociate; strength depends on **degree of dissociation/solvation**.'
        ]
      }
    ],
    mnemonics: [
      '**Moles from mass:** $n = \\dfrac{m}{M}$ — "mass over molar mass." This single fraction starts almost every stoichiometry problem.',
      '**Empirical vs. molecular:** **E**mpirical = **E**ssential (smallest ratio); **M**olecular = **M**ore (the real count, always an integer multiple).',
      '**Oxyanion suffixes:** the "lit**est**" anions have fewest oxygens (**–ite**); the heaviest anions "**ate**" the most oxygens (**–ate**). **Hypo** = under (least O); **per** = super (most O).',
      '**Reaction types:** combi**N**e → o**N**e product · decompose → comes apart · combustion → $\\text{CO}_2 + \\text{H}_2\\text{O}$ · single = swap an element · double = swap ions (neutralization = double-swap making water).',
      '**Percent yield = "Actual Over Theoretical" × 100** — got ÷ wanted. It can never exceed 100%.',
      '**Balancing:** save the messy atom (usually **O**) for last; anchor on atoms that appear once (C, then H), then halve/double to clear fractions.',
      '**Limiting reagent:** convert both reactants to moles, **divide each by its coefficient**, and the smallest quotient is the limiter — never compare grams.',
      '**Equivalents = potency per mole:** $\\text{H}_2\\text{SO}_4$ packs **2** acid equivalents, $\\text{H}_3\\text{PO}_4$ packs **3** — so $N = n \\times M$.'
    ],
    keyConcepts: [
      '**$n = \\dfrac{m}{M}$ is the bridge** between lab masses and the mole world; every stoichiometry calculation flows grams → moles → mole ratio → moles → grams.',
      '**Empirical → molecular:** find the mole ratio for the empirical formula, then multiply by $\\dfrac{\\text{molar mass}}{\\text{empirical formula weight}}$ to get the molecular formula.',
      '**Five reaction archetypes** (combination, decomposition, combustion, single- and double-displacement) let you predict products on sight; **neutralization** is the acid–base double-displacement that yields water.',
      '**Limiting reagent caps the theoretical yield;** real reactions give less, so **percent yield = actual ÷ theoretical × 100%** and is always ≤ 100%.',
      '**Equivalents and normality** ($N = n \\times M$) let you compare the *species of interest* directly — one equivalent of acid always neutralizes one equivalent of base.'
    ],
    equations: [
      { name: 'Moles from mass (Eq. 4.1)', tex: 'n = \\dfrac{m}{M}', note: 'n = moles, m = mass (g), M = molar mass (g/mol). Workhorse of stoichiometry & titration.' },
      { name: 'Gram equivalent weight (Eq. 4.2)', tex: '\\text{GEW} = \\dfrac{\\text{molar mass}}{n}', note: 'n = particles of interest (H⁺, OH⁻, e⁻, ions) per molecule.' },
      { name: 'Equivalents from mass (Eq. 4.3)', tex: '\\text{equivalents} = \\dfrac{\\text{mass}}{\\text{GEW}}', note: 'Counts moles of the species of interest in a sample.' },
      { name: 'Normality ↔ molarity (Eq. 4.4)', tex: 'N = n \\times M', note: 'Normality = equivalents/L; n = H⁺/OH⁻/e⁻/ions per solute. 1 N H₂CO₃ = 0.5 M.' },
      { name: 'Percent composition (Eq. 4.5)', tex: '\\%\\,\\text{comp} = \\dfrac{\\text{mass of element}}{\\text{molar mass}} \\times 100\\%', note: 'Use the molecular or empirical formula; basis for empirical-formula problems.' },
      { name: 'Percent yield (Eq. 4.6)', tex: '\\%\\,\\text{yield} = \\dfrac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%', note: 'Actual is almost always < theoretical; result ≤ 100%.' },
      { name: "Avogadro's number", tex: 'N_A = 6.022 \\times 10^{23}\\ \\text{mol}^{-1}', note: 'Particles per mole; 1 mol gas at STP = 22.4 L.' }
    ]
  },

  questions: raw.questions
};
