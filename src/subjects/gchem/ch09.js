// Chapter 9 — Solutions. Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch09.json (already-correct extraction);
// the recap/detail markdown, tables, callouts, and equations are authored here.
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 9,
  title: 'Solutions',
  subtitle: 'Nature of solutions & solubility rules · concentration units · solution equilibria (Ksp) · colligative properties',

  blocks: [
    /* ─────────────────────── 9.1 Nature of Solutions ─────────────────────── */
    {
      id: 's1', num: '9.1', title: 'Nature of Solutions',
      goals: [
        'Describe the process of solvation (dissolution/hydration)',
        'Define key terms: complex, solubility, saturation',
        'Explain how to increase the solubility of a compound',
        'Recall the solubility rules and apply them to predict solubility'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 9.1 — Solvation of a polar covalent compound: solvent particles (S) surround and stabilize each solute molecule.' }],
      recap: `
- A **solution** is a **homogeneous mixture** of a **solute** dispersed in a **solvent**, forming a single phase. *All solutions are mixtures, but not all mixtures are solutions.*
- **Solvation** (= **dissolution**; **hydration** when water is the solvent) breaks solute–solute and solvent–solvent forces and forms new solute–solvent forces (**ion–dipole, dipole–dipole, H-bonding**).
- Spontaneity follows $\\Delta G = \\Delta H - T\\Delta S$. Most dissolutions are **endothermic** but proceed because **entropy increases** ($\\Delta S > 0$). Gas-in-liquid is **exothermic**.
- **Solubility** = max solute that dissolves at a given temperature → at that point the solution is **saturated**. Soluble ≈ molar solubility **> 0.1 M**; **sparingly soluble** salts are **< 0.1 M**.
- **Two absolutes for Test Day:** all **Group 1 (alkali metal)** salts and all **nitrate** salts are soluble.
`,
      detail: `
#### What a solution is
A **solution** is a **homogeneous** (uniform throughout) mixture that forms a **single phase**, usually liquid. The MCAT focuses almost exclusively on **solids dissolved in aqueous solution**, but solutions span all phases:

- **Gas in liquid** — CO₂ in soda
- **Liquid in liquid** — ethanol in water
- **Solid in solid** — metal alloys (brass, steel)

A solution has two parts:

| Term | Definition |
|---|---|
| **Solute** | The dispersed species (e.g., $\\text{NaCl}$, $\\text{NH}_3$, $\\text{C}_6\\text{H}_{12}\\text{O}_6$, $\\text{CO}_2$) |
| **Solvent** | The component that **keeps its phase** after mixing; if both are the same phase, it is the one in **greater quantity** (or the one *usually* used as a solvent) |

:::keyconcept
**All solutions are mixtures, but not all mixtures are solutions.** Gases mixed into gases (air) are usually called *mixtures*, not solutions, because gas molecules barely interact (kinetic molecular theory).
:::

#### Solvation — the dissolution process

![Figure 9.2 — Ion–dipole solvation of Na⁺ and Cl⁻ by water.](${fig(0, 3).src})

**Solvation** is the **electrostatic interaction** between solute and solvent particles (also called **dissolution**; **hydration** when the solvent is water). It is a three-step energetic bookkeeping:

1. **Break** solute–solute interactions — *endothermic*
2. **Break** solvent–solvent interactions to make room — *endothermic*
3. **Form** new solute–solvent interactions (**ion–dipole, dipole–dipole, H-bonding**) — *exothermic*

The **sign of the overall $\\Delta H$** depends on which set of interactions is stronger:

| Relationship | Overall $\\Delta H_{soln}$ | Favored by | Example |
|---|---|---|---|
| New interactions **stronger** | **Exothermic** ($\\Delta H < 0$) | **Low** temperature | $\\text{CO}_2$ into water (gas-in-liquid) |
| New interactions **weaker** | **Endothermic** ($\\Delta H > 0$) | **High** temperature | $\\text{NaCl}$, sugar, $\\text{NH}_4\\text{NO}_3$ into water (*most dissolutions*) |
| New ≈ original | $\\Delta H \\approx 0$ | — | An **ideal solution** |

:::keyconcept
**Le Châtelier on gas solubility:** dissolving a gas is **exothermic**, so **lowering temperature favors** it — warm soda goes flat. Higher gas **pressure** also drives dissolution (Henry's law).
:::

##### Why salt still dissolves even though it's endothermic
For $\\text{NaCl}$, breaking the ionic lattice and water H-bonds costs *slightly more* energy than the new **ion–dipole** bonds release → net **endothermic**. It still dissolves spontaneously because **entropy increases**:

- Ions freed from the rigid lattice gain many **energy microstates** → entropy of the solute **increases a lot**.
- Water becomes ordered around the ions → entropy of the water **decreases a little**.
- **Net $\\Delta S > 0$**, so $\\Delta G = \\Delta H - T\\Delta S$ becomes negative → spontaneous.

At constant T and P, **entropy always increases upon dissolution**.

:::bridge
Proteins dissolve by folding **hydrophilic residues out, hydrophobic residues in** — this maximizes the entropy increase of the surrounding **solvation layer** (*MCAT Biochemistry Review*, Ch. 1).
:::

#### Solubility and saturation
**Solubility** = the **maximum** amount of solute that dissolves in a given solvent at a given temperature.

| Term | Meaning |
|---|---|
| **Saturated** | Maximum reached; dissolved solute is in **equilibrium** with undissolved solid; extra solute **precipitates** |
| **Unsaturated** | Below maximum — includes both **dilute** (little solute) and **concentrated** (much solute) solutions |
| **Soluble** | $\\Delta G_{soln} < 0$; molar solubility generally **> 0.1 M** |
| **Insoluble / sparingly soluble** | $\\Delta G_{soln} > 0$ or molar solubility **< 0.1 M** |

#### Aqueous solutions and the hydronium ion
The **aqueous** state, denoted **(aq)**, has **water** as the solvent. Acids transfer a proton to water to form the **hydronium ion** ($\\text{H}_3\\text{O}^+$), held by a **coordinate covalent bond**:

$$\\text{CH}_3\\text{COOH (aq)} + \\text{H}_2\\text{O (l)} \\rightleftharpoons \\text{CH}_3\\text{COO}^- \\text{(aq)} + \\text{H}_3\\text{O}^+ \\text{(aq)}$$

A free $\\text{H}^+$ is never found alone in solution — it is always bonded to an electron-pair donor (carrier).

#### The seven solubility rules
The MCAT usually *gives* solubility data, but two rules are absolute. Soluble means **stays dissolved**; insoluble salts are the precipitates.

| # | Rule | Key exceptions |
|---|---|---|
| 1 | **Ammonium ($\\text{NH}_4^+$) and Group 1 (alkali metal)** salts are **soluble** | *None* — absolute |
| 2 | **Nitrate ($\\text{NO}_3^-$) and acetate ($\\text{CH}_3\\text{COO}^-$)** salts are **soluble** | *None* — absolute |
| 3 | **Halides** ($\\text{Cl}^-, \\text{Br}^-, \\text{I}^-$) are **soluble** | **$\\text{Ag}^+, \\text{Pb}^{2+}, \\text{Hg}_2^{2+}$** insoluble |
| 4 | **Sulfates** ($\\text{SO}_4^{2-}$) are **soluble** | **$\\text{Ca}^{2+}, \\text{Sr}^{2+}, \\text{Ba}^{2+}, \\text{Pb}^{2+}$** insoluble |
| 5 | **Metal oxides** are **insoluble** | **Alkali metals, ammonium, CaO/SrO/BaO** dissolve (→ hydroxides) |
| 6 | **Hydroxides** are **insoluble** | **Alkali metals, ammonium, $\\text{Ca}^{2+}, \\text{Sr}^{2+}, \\text{Ba}^{2+}$** soluble |
| 7 | **Carbonates, phosphates, sulfides, sulfites** are **insoluble** | **Alkali metals, ammonium** soluble |

:::mnemonic
**"NAG SAG" for the SOLUBLE players:** **N**itrate · **A**cetate · **G**roup 1 (+ ammonium) → always soluble. The insoluble exceptions cluster on **heavy, low-charge-density cations** — remember the silver-lead-mercury trio for halides (**"AgPbHg keep their halides locked up"**).
:::

:::expertise
Don't burn time memorizing all seven. **Lock in rules 1 & 2** (Group 1 + nitrate = always soluble) and recognize the common insoluble exceptions like $\\text{Pb}^{2+}$ and $\\text{Ag}^+$. The test usually supplies the rest. **$\\text{Na}^+$ and $\\text{NO}_3^-$ are spectator counterions** — focus on the chemically active ion (e.g., "0.10 M sodium formate" really means 0.10 M formate for a pH problem).
:::

#### Complex ions and chelation

![Figure 9.7 — Nickel(II) complexes display vivid, ligand-dependent colors.](${fig(0, 8).src})

A **complex ion** (**coordination compound**) is a **central cation bonded to one or more electron-pair donors** called **ligands**, via **coordinate covalent bonds** (ligand = Lewis base; metal = Lewis acid).

- **Biological relevance:** transition-metal complexes sit in many protein active sites — e.g., the **iron in hemoglobin** binds $\\text{O}_2$, $\\text{CO}_2$, or $\\text{CO}$ as ligands; **cobalamin (vitamin B₁₂)** holds a **cobalt** complex.
- **Vivid colors:** inorganic complexes (e.g., the nickel(II) series above) absorb specific wavelengths.
- **Chelation:** a single large organic ligand doubles back to bind the metal in **multiple places**. **Chelation therapy** sequesters toxic metals (lead, arsenic, mercury) and treats iron overload.

![Figure 9.8 — Iron chelated by two molecules of deferasirox.](${fig(0, 9).src})

:::realworld
Formation of a complex ion **increases** the solubility of an otherwise insoluble salt — the *opposite* of the common ion effect (Section 9.3). Pulling the metal into a complex drags the dissolution equilibrium to the right.
:::
`
    },

    /* ─────────────────────────── 9.2 Concentration ─────────────────────────── */
    {
      id: 's2', num: '9.2', title: 'Concentration',
      goals: [
        'Calculate the molality, molarity, or normality of a compound in solution',
        'Apply $M_iV_i = M_fV_f$ to calculate the dilution of a solution',
        'Calculate mole fraction and percent composition by mass'
      ],
      recap: `
- **Concentration** = amount of solute per amount of solvent/solution. The MCAT's five units: **percent by mass, mole fraction, molarity, molality, normality.**
- **Molarity ($M$)** = mol solute / **L solution** — the default unit; brackets **[X]** mean molarity. Used for rate laws, $K_{eq}$, osmotic pressure, pH/pOH, Nernst.
- **Molality ($m$)** = mol solute / **kg solvent** — temperature-independent; reserve it for **boiling-point elevation and freezing-point depression**.
- **Normality ($N$)** = equivalents of interest / L solution — "molarity of the reactive species"; **reaction-dependent**.
- **Dilution:** $M_iV_i = M_fV_f$ (worth memorizing). For dilute aqueous solutions, **$M \\approx m$** because water's density ≈ 1 kg/L.
`,
      detail: `
#### What concentration measures
**Concentration** = how much **solute** is dissolved per amount of solvent or solution. Different fields use different units (alcohol = volume %, *proof* = 2× volume %; juice sugar = °Brix mass %). For the MCAT, master these five:

| Unit | Symbol | Definition | Primary use |
|---|---|---|---|
| **Percent by mass** | % | $\\dfrac{\\text{mass solute}}{\\text{mass solution}} \\times 100\\%$ | Aqueous **and** solid-in-solid (alloys) |
| **Mole fraction** | $X$ | $\\dfrac{\\text{mol component}}{\\text{total mol}}$ | **Vapor-pressure depression**; partial pressures |
| **Molarity** | $M$ | $\\dfrac{\\text{mol solute}}{\\text{L solution}}$ | Rate laws, $K_{eq}$, osmotic pressure, pH/pOH, Nernst |
| **Molality** | $m$ | $\\dfrac{\\text{mol solute}}{\\text{kg solvent}}$ | **Boiling-point elevation, freezing-point depression** |
| **Normality** | $N$ | $\\dfrac{\\text{equivalents}}{\\text{L solution}}$ | Acid–base, redox |

##### Percent composition by mass
$$\\%\\text{ mass} = \\frac{\\text{mass of solute}}{\\text{mass of solution}} \\times 100\\%$$

*Example:* 20 g $\\text{NaCl}$ in 100 g solution → **20% NaCl**. (Watch the denominator: it's the **solution**, so add solute mass to solvent mass.)

##### Mole fraction
$$X_A = \\frac{n_A}{n_{total}}$$

The **mole fractions of all components sum to 1.** Used to find **vapor-pressure depression** and partial pressures of gases.

##### Molarity — the default
$$M = \\frac{\\text{moles of solute}}{\\text{liters of solution}}$$

- The bracket notation $[\\text{Na}^+]$ means **molarity** unless stated otherwise.
- The denominator is **solution** volume, *not* solvent volume (often close for dilute solutions, but not when very concentrated — 2 kg sucrose in 1 L water makes **> 1 L** of solution).

##### Molality
$$m = \\frac{\\text{moles of solute}}{\\text{kilograms of solvent}}$$

- **Temperature-independent** (mass, not volume).
- For **dilute aqueous solutions at 25 °C, $m \\approx M$** because water's density ≈ **1 kg/L**. This breaks down at high concentration (denser solution).

##### Normality
$$N = \\frac{\\text{equivalents of interest}}{\\text{liters of solution}}$$

An **equivalent** = one mole of the **reactive species** (protons, hydroxides, electrons, ions). Normality is **reaction-dependent**:

- $\\text{MnO}_4^-$ in **acid** accepts **5 e⁻** → a 1 M solution is **5 N**.
- $\\text{MnO}_4^-$ in **base** accepts **1 e⁻** → a 1 M solution is **1 N**.

:::expertise
When you see **normality, think "molarity of the stuff of interest."** For a diprotic acid like $\\text{H}_2\\text{CO}_3$, $N = 2M$ in acid–base chemistry (2 protons per molecule).
:::

#### Dilution
Adding solvent lowers concentration while **moles of solute stay constant**:

$$M_iV_i = M_fV_f$$

*Example:* Make 300 mL of 1.1 M $\\text{NaOH}$ from 5.5 M stock → $V_i = \\dfrac{(1.1)(300)}{5.5} = 60$ mL stock, then add water to 300 mL. (Units cancel — use mL or L, just be consistent.)

:::expertise
$M_iV_i = M_fV_f$ is **worth memorizing**. A nearly identical equation describes the **equivalence point** in acid–base titrations: $N_aV_a = N_bV_b$ (*MCAT GChem Review*, Ch. 10).
:::

:::keyconcept
**Parts-per-million (ppm, $10^{-6}$)** is a handy trace-concentration unit. In water (density 1 g/mL), **1 ppm = 1 mg/L**. Check whether a problem actually needs you to convert ppm — often it doesn't.
:::
`
    },

    /* ───────────────────────── 9.3 Solution Equilibria ───────────────────────── */
    {
      id: 's3', num: '9.3', title: 'Solution Equilibria',
      goals: [
        'Calculate molar solubility from $K_{sp}$ and vice versa',
        'Calculate the ion product (IP) for a solution',
        'Use $K_{sp}$ to predict dissolution vs. precipitation toward equilibrium',
        'Predict the impact of a common ion on the dissolution of a compound'
      ],
      recap: `
- **Always write the balanced dissociation reaction first:** $\\text{A}_m\\text{B}_n \\text{(s)} \\rightleftharpoons m\\,\\text{A}^{n+} + n\\,\\text{B}^{m-}$. This is step 1 for essentially every solution-equilibrium problem.
- **$K_{sp} = [\\text{A}^{n+}]^m[\\text{B}^{m-}]^n$** — the equilibrium constant for dissolution (**no solids/liquids** in the expression, so no denominator).
- **Ion product (IP)** has the same form but uses *current* concentrations. **IP < $K_{sp}$** → unsaturated (dissolves); **IP = $K_{sp}$** → saturated; **IP > $K_{sp}$** → supersaturated (precipitates).
- **Solubility shortcuts:** $\\text{MX}\\Rightarrow K_{sp}=x^2$; $\\text{MX}_2\\Rightarrow K_{sp}=4x^3$; $\\text{MX}_3\\Rightarrow K_{sp}=27x^4$.
- **Common ion effect** (Le Châtelier) **decreases** molar solubility but **leaves $K_{sp}$ unchanged**; **complex-ion formation** ($K_f$) **increases** solubility.
`,
      detail: `
#### Saturation as a dynamic equilibrium
Dissolution is reversible. Just after solute is added, **dissolution outpaces precipitation**. As the solution concentrates, dissolution slows and precipitation speeds up until the **saturation point**, where the two rates are **equal** — a **dynamic equilibrium** with $\\Delta G = 0$. The dissociation of an ionic solid is written generally as:

$$\\text{A}_m\\text{B}_n \\text{(s)} \\rightleftharpoons m\\,\\text{A}^{n+} \\text{(aq)} + n\\,\\text{B}^{m-} \\text{(aq)}$$

:::keyconcept
**The essential first step** for *any* solution-stoichiometry or solubility problem is to **write out the balanced dissociation reaction.** Everything ($K_{sp}$, IP, molar solubility, common ion effect) flows from it.
:::

#### Solubility product constant ($K_{sp}$)
For a saturated solution, apply the law of mass action. **Pure solids and liquids are excluded**, so a $K_{sp}$ expression **never has a denominator**:

$$K_{sp} = [\\text{A}^{n+}]^m[\\text{B}^{m-}]^n$$

For example, $\\text{AgCl (s)} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^-$ gives $K_{sp} = [\\text{Ag}^+][\\text{Cl}^-]$.

- $K_{sp}$ is **temperature-dependent** (like all $K$): it generally **increases with T** for non-gas solutes.
- For dissolved **gases**, higher **pressure** raises $K_{sp}$ (more dissolves).

##### Molar solubility shortcuts
The **molar solubility** $x$ is the molarity of dissolved salt at saturation. Plugging the stoichiometric ratios into $K_{sp}$ gives quick formulas (no common ion):

| Salt type | Dissociation | $K_{sp}$ in terms of $x$ |
|---|---|---|
| **MX** (e.g., AgCl, CuBr) | $\\text{MX} \\rightleftharpoons \\text{M}^+ + \\text{X}^-$ | $K_{sp} = x^2$ |
| **MX₂** (e.g., CaF₂, Ni(OH)₂) | $\\text{MX}_2 \\rightleftharpoons \\text{M}^{2+} + 2\\text{X}^-$ | $K_{sp} = 4x^3$ |
| **MX₃** (e.g., Fe(OH)₃) | $\\text{MX}_3 \\rightleftharpoons \\text{M}^{3+} + 3\\text{X}^-$ | $K_{sp} = 27x^4$ |

*Example:* $\\text{Fe(OH)}_3$ with molar solubility $x = 4\\times10^{-10}$ M → $K_{sp} = (x)(3x)^3 = 27x^4$.

:::expertise
**$K_{sp}$ is just a specialized $K_{eq}$.** Treat solubility problems with the same toolkit as any equilibrium — including **Le Châtelier's principle** for the common ion effect.
:::

#### Ion product (IP) — the solubility analog of Q
The **ion product** uses the **same form** as $K_{sp}$ but with the **current** ion concentrations (not necessarily equilibrium):

$$IP = [\\text{A}^{n+}]^m[\\text{B}^{m-}]^n$$

Compare IP to $K_{sp}$ exactly as you compare $Q$ to $K_{eq}$:

| Comparison | State | What happens |
|---|---|---|
| **IP < $K_{sp}$** | **Unsaturated** | More solute **dissolves** (dissolution favored) |
| **IP = $K_{sp}$** | **Saturated** | At equilibrium — no net change |
| **IP > $K_{sp}$** | **Supersaturated** | **Precipitation** occurs |

A **supersaturated** solution (made by dissolving in hot solvent then cooling slowly) is thermodynamically unstable — a seed crystal or disturbance triggers sudden precipitation.

:::keyconcept
**The IP vs. $K_{sp}$ rule of three:**
- **IP < $K_{sp}$** → unsaturated, solute keeps dissolving
- **IP = $K_{sp}$** → saturated, at equilibrium
- **IP > $K_{sp}$** → supersaturated, precipitation will occur
:::

:::realworld
Gas solubility rises with pressure, so a diver at depth dissolves extra $\\text{N}_2$ in the blood. Surfacing too fast drops the pressure, $\\text{N}_2$ comes out of solution as bubbles in joints and vessels — **decompression sickness ("the bends")**.
:::

#### Complex ions and the formation constant ($K_f$)
Forming a **complex ion** **increases** a salt's solubility — opposite to the common ion effect. The dissolution step is the small $K_{sp}$; the subsequent complexation is the **formation (stability) constant $K_f$**, usually **much larger** than $K_{sp}$.

- *Example:* Adding $\\text{NH}_3$ to an $\\text{AgCl}$ solution forms **diamminesilver(I)**, $[\\text{Ag(NH}_3)_2]^+$. Consuming $\\text{Ag}^+$ pulls the $\\text{AgCl}$ equilibrium **right**, dissolving more solid.
- The large $K_f$ means complexation is highly favorable; the **initial dissolution of the metal ion is the rate-limiting step**.

#### The common ion effect
Adding a salt to a solution that **already contains one of its ions** **reduces its molar solubility** — by **Le Châtelier**, the extra product ion shifts dissolution **left**, reforming solid. Critically:

- **Molar solubility decreases.**
- **$K_{sp}$ is unchanged** (it's a constant at fixed T).

*Example:* $\\text{CaF}_2$ dissolves **less** in water that already contains $\\text{Ca}^{2+}$ (from $\\text{CaCl}_2$) than in pure water. Chemists exploit this to **selectively precipitate** — adding excess $\\text{Cl}^-$ drives out $\\text{AgCl}$ from a silver-salt mixture.

:::mnemonic
**Common ion = "crowded room."** The shared ion is already crowding the products side, so by Le Châtelier the salt **dissolves less**. **Complex ion = "exit door"** — it removes the metal ion, so the salt **dissolves more**. $K_{sp}$ itself never moves.
:::
`
    },

    /* ──────────────────────── 9.4 Colligative Properties ──────────────────────── */
    {
      id: 's4', num: '9.4', title: 'Colligative Properties',
      goals: [
        'Recall the names, equations, and applications of the common colligative properties',
        'Describe the relationship between molality and molarity for a compound',
        'Calculate the boiling point, freezing point, vapor pressure, or osmotic pressure of a solution'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 9.10 — Molecular basis of Raoult\'s law: solute particles block solvent evaporation but not condensation, lowering vapor pressure.' }],
      recap: `
- **Colligative properties** depend on the **number** of dissolved particles, **not their identity**: vapor-pressure depression, boiling-point elevation, freezing-point depression, osmotic pressure.
- The **van't Hoff factor $i$** = particles per formula unit: $\\text{NaCl}\\Rightarrow i=2$, $\\text{AlCl}_3\\Rightarrow i=4$, glucose (no dissociation) $\\Rightarrow i=1$.
- **Raoult's law:** $P_A = X_A P_A^\\circ$ — solvent vapor pressure drops in proportion to its mole fraction.
- **Boiling point rises:** $\\Delta T_b = iK_bm$. **Freezing point falls:** $\\Delta T_f = iK_fm$. Both use **molality**.
- **Osmotic pressure:** $\\Pi = iMRT$ — uses **molarity**; water flows toward higher solute concentration.
`,
      detail: `
#### What "colligative" means
**Colligative properties** depend on the **concentration of dissolved particles**, *not* on their chemical identity. The four (all most relevant for **dilute** solutions):

1. **Vapor-pressure depression**
2. **Boiling-point elevation**
3. **Freezing-point depression**
4. **Osmotic pressure**

##### The van't Hoff factor
The **van't Hoff factor $i$** counts the **particles a formula unit produces** in solution — it scales every colligative effect:

| Solute | Dissociation | $i$ |
|---|---|---|
| **Glucose / sucrose** (covalent, nonelectrolyte) | does not dissociate | **1** |
| **NaCl** | $\\rightarrow \\text{Na}^+ + \\text{Cl}^-$ | **2** |
| **CaCl₂, MgCl₂** | $\\rightarrow \\text{M}^{2+} + 2\\text{Cl}^-$ | **3** |
| **AlCl₃, Fe(NO₃)₃** | $\\rightarrow \\text{M}^{3+} + 3\\text{X}^-$ | **4** |
| **Weak acid (e.g., acetic acid)** | partial dissociation | between **1 and 2** |

:::mnemonic
**"$i$ = how many pieces it breaks into."** Count the ions in the dissociation. Nonelectrolytes (sugars) stay whole → $i = 1$. Weak electrolytes land *between* whole numbers because only a fraction dissociates.
:::

#### Raoult's law — vapor-pressure depression
Adding **nonvolatile** solute lowers the solvent's vapor pressure proportionally to the solvent's mole fraction:

$$P_A = X_A P_A^\\circ$$

where $P_A$ is the solvent vapor pressure over the solution, $X_A$ the solvent mole fraction, and $P_A^\\circ$ the pure-solvent vapor pressure. **Mechanistically**, solute particles **block evaporation** of solvent but not **condensation** → net lower vapor pressure.

- For a mixture of **two volatile** liquids, total pressure $P_{total} = X_A P_A^\\circ + X_B P_B^\\circ$.
- **Ideal solutions** obey Raoult's law — true only when solute–solute, solvent–solvent, and solute–solvent attractions are all about **equal** (e.g., **benzene + toluene**).

:::keyconcept
**Vapor-pressure depression and boiling-point elevation go hand in hand.** Lowering vapor pressure means a **higher temperature** is needed to bring it up to atmospheric pressure → the boiling point **rises**.
:::

#### Boiling-point elevation
A **nonvolatile solute raises** the boiling point (where vapor pressure = ambient pressure):

$$\\Delta T_b = iK_bm$$

- $K_b$ = molal **boiling-point-elevation** constant (solvent-specific, **provided on Test Day**); $m$ = **molality**.
- The formula gives the **change**, not the final boiling point — add $\\Delta T_b$ to the normal boiling point.

*Example:* 400 g $\\text{AlCl}_3$ ($i = 4$) in 1.5 kg water → compute $m$, then $\\Delta T_b = (4)(K_b)(m)$.

:::expertise
**Read carefully:** $\\Delta T_b$ and $\\Delta T_f$ are the *amount* of shift, not the new temperature. Decide whether the question wants $\\Delta T$ or the **new** boiling/freezing point.
:::

#### Freezing-point depression
Solute particles **disrupt the solid lattice**, so more energy must be removed (lower temperature) to freeze the solution:

$$\\Delta T_f = iK_fm$$

For water, $K_f = 1.86\\ ^\\circ\\text{C}\\,/m$ (every mole of particles per kg lowers freezing by 1.86 °C). $K_f$ is solvent-specific and provided.

*Example:* 400 g $\\text{AlCl}_3$ ($i = 4$) in 1.5 kg water depresses freezing by ~15 K → new freezing point ≈ $273 - 15 = 258$ K = **−15 °C**.

:::realworld
**Salting icy roads:** salt depresses the freezing point. It slows the *freezing* rate (displacing water at the solid–liquid interface) without changing the *melting* rate, so net melting occurs and the salty water stays liquid below 0 °C.
:::

#### Osmotic pressure

![Figure 9.11 — Water crosses a semipermeable membrane toward higher solute concentration, raising that side's level until osmotic pressure balances it.](${fig(3, 2).src})

**Osmotic pressure** ($\\Pi$) is the "sucking" pressure that draws water into a solution across a **semipermeable membrane** — formally, the pressure needed to **stop** that flow:

$$\\Pi = iMRT$$

where $M$ is **molarity** (note: molarity, unlike the other three), $R$ the ideal-gas constant, and $T$ the absolute temperature. **Water moves toward higher solute concentration**, raising the level on that side.

:::bridge
Osmotic pressure governs fluid balance across cell membranes and capillaries (**tonicity**, oncotic pressure) — covered in *MCAT Biochemistry Review*, Ch. 8, and physiology homeostasis.
:::

:::keyconcept
**Match the unit to the property:** vapor pressure uses **mole fraction**; $\\Delta T_b$ and $\\Delta T_f$ use **molality**; osmotic pressure uses **molarity**. All four scale with the **van't Hoff factor $i$**.
:::

#### Molality vs. molarity, revisited
For **water at room temperature**, $M \\approx m$ because **1 L solution ≈ 1 kg solvent** (water's density ≈ 1 kg/L) for dilute solutions. For **other solvents** (different densities) or **concentrated** solutions, $M$ and $m$ **diverge** — at high concentration $M < m$ because dissolved particles swell the solution volume.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Nature of Solutions',
        points: [
          'Solutions are **homogeneous mixtures** of two or more substances forming a **single phase** (usually liquid). All solutions are mixtures; not all mixtures are solutions.',
          '**Solvation/dissolution** = solvent particles surround solute via electrostatic interactions (**hydration** when water is the solvent).',
          'Most dissolutions are **endothermic**; **gas-into-liquid is exothermic**. Spontaneity depends on both $\\Delta H$ and $\\Delta S$ via $\\Delta G = \\Delta H - T\\Delta S$ (entropy always increases on dissolution).',
          '**Solubility** = max solute dissolvable at a given temperature; often expressed as **molar solubility** (molarity at saturation).',
          '**Complex ions (coordination compounds)** = a metal cation bonded to **ligands** via coordinate covalent bonds; forming them **increases** solubility (opposite of the common ion effect).',
          '**Two absolutes:** all Group 1 (alkali metal) salts and all nitrate salts are soluble.'
        ]
      },
      {
        section: 'Concentration',
        points: [
          '**Percent by mass** (mass solute / mass solution × 100%) — aqueous and solid-in-solid solutions.',
          '**Mole fraction** (mol component / total mol) — vapor-pressure depression and partial pressures.',
          '**Molarity** (mol / L solution) — the most common unit; rate laws, mass action, osmotic pressure, pH/pOH, Nernst.',
          '**Molality** (mol / kg solvent) — boiling-point elevation and freezing-point depression; temperature-independent.',
          '**Normality** (equivalents / L solution) — "molarity of the species of interest"; acid–base and redox.',
          '**Dilution:** $M_iV_i = M_fV_f$. For dilute aqueous solutions $M \\approx m$ (water density ≈ 1 kg/L).'
        ]
      },
      {
        section: 'Solution Equilibria',
        points: [
          'A **saturated** solution is at **equilibrium** ($\\Delta G = 0$) at that temperature; the molarity at saturation is the **molar solubility**.',
          '**$K_{sp}$** is simply the equilibrium constant for a dissociation reaction (pure solids/liquids excluded → no denominator).',
          'Compare **ion product (IP)** to $K_{sp}$: **IP < $K_{sp}$** unsaturated (dissolves); **IP = $K_{sp}$** saturated; **IP > $K_{sp}$** supersaturated (precipitates).',
          'Forming a **complex ion** greatly increases solubility; the **formation constant $K_f$** is usually ≫ $K_{sp}$.',
          'The **common ion effect** decreases a salt\'s solubility (Le Châtelier shift left) but **does not change $K_{sp}$**.'
        ]
      },
      {
        section: 'Colligative Properties',
        points: [
          'Colligative properties depend on the **number** of dissolved particles, not their identity.',
          '**Vapor-pressure depression** follows **Raoult\'s law** ($P_A = X_A P_A^\\circ$): solute blocks evaporation but not condensation.',
          'Vapor-pressure depression underlies **boiling-point elevation** ($\\Delta T_b = iK_bm$); **freezing-point depression** is $\\Delta T_f = iK_fm$ — both depend on **molality**.',
          '**Osmotic pressure** ($\\Pi = iMRT$) depends on **molarity**; water flows toward higher solute concentration.',
          'For dissociating solutes, the **van\'t Hoff factor $i$** scales freezing-point depression, boiling-point elevation, and osmotic pressure.'
        ]
      }
    ],
    mnemonics: [
      '**Soluble salts — "NAG":** **N**itrate · **A**cetate · **G**roup 1 (+ ammonium) are *always* soluble. Insoluble exceptions cluster on heavy cations — remember the **Ag⁺/Pb²⁺/Hg₂²⁺** halide trio.',
      '**Colligative units, don\'t mix them up:** vapor pressure → **mole fraction**; boiling/freezing → **molality**; osmotic → **molarity**. All four ride on the van\'t Hoff factor $i$.',
      '**van\'t Hoff factor $i$ = "how many pieces it breaks into."** NaCl → 2, CaCl₂ → 3, AlCl₃ → 4, glucose/sucrose → 1, weak acids land between whole numbers.',
      '**IP vs. $K_{sp}$ — "Less Lets it Dissolve":** IP **L**ess than $K_{sp}$ → un­saturated, dissolves; equal → saturated; **G**reater → supersaturated, precipitates.',
      '**Common ion = "crowded room"** (less dissolves) vs. **complex ion = "exit door"** (more dissolves). $K_{sp}$ itself never changes.',
      '**Solubility powers of $x$:** MX → $K_{sp}=x^2$, MX₂ → $4x^3$, MX₃ → $27x^4$. (Coefficient = $n^n$ for the multi-ion side.)',
      '**Endo but spontaneous?** Salt dissolving feels **cold** (endothermic) yet happens because **entropy wins** — $\\Delta G = \\Delta H - T\\Delta S$ goes negative on the big positive $\\Delta S$.'
    ],
    keyConcepts: [
      '**Spontaneity of dissolution is thermodynamic, not just energetic:** $\\Delta G = \\Delta H - T\\Delta S$. Most dissolutions are endothermic but proceed because $\\Delta S > 0$.',
      '**Gas solubility is backwards from solids:** dissolving gas is exothermic, so it is favored by **low temperature** and **high pressure** (Henry\'s law) — warm, depressurized soda goes flat.',
      '**$K_{sp}$ is just a $K_{eq}$ for dissociation** — solids/liquids omitted. Compare **IP to $K_{sp}$** to predict dissolution vs. precipitation, exactly like Q vs. K.',
      '**Common ion effect lowers solubility; complex-ion formation raises it** — both via Le Châtelier, and neither changes the value of $K_{sp}$.',
      '**Colligative effects count particles, not identity:** always apply the **van\'t Hoff factor $i$**, and match molality (ΔT) vs. molarity (osmotic) vs. mole fraction (vapor pressure).'
    ],
    equations: [
      { name: 'Percent composition by mass', tex: '\\%\\text{ mass} = \\dfrac{\\text{mass of solute}}{\\text{mass of solution}} \\times 100\\%', note: 'Aqueous and solid-in-solid solutions; denominator is the whole solution.' },
      { name: 'Mole fraction', tex: 'X_A = \\dfrac{n_A}{n_{total}}', note: 'All mole fractions sum to 1; used for vapor pressure and partial pressures.' },
      { name: 'Molarity', tex: 'M = \\dfrac{\\text{moles of solute}}{\\text{liters of solution}}', note: 'Default concentration unit; [X] means molarity. Used in osmotic pressure, pH, Nernst.' },
      { name: 'Molality', tex: 'm = \\dfrac{\\text{moles of solute}}{\\text{kilograms of solvent}}', note: 'Temperature-independent; used for boiling-point and freezing-point shifts.' },
      { name: 'Dilution', tex: 'M_iV_i = M_fV_f', note: 'Moles of solute conserved when solvent is added. Worth memorizing.' },
      { name: 'Solubility product constant', tex: 'K_{sp} = [\\text{A}^{n+}]^m[\\text{B}^{m-}]^n', note: 'Equilibrium constant for dissociation; no solids/liquids (no denominator).' },
      { name: 'Ion product', tex: 'IP = [\\text{A}^{n+}]^m[\\text{B}^{m-}]^n', note: 'Same form as Ksp but current concentrations. IP<Ksp dissolves; IP>Ksp precipitates.' },
      { name: "Raoult's law (vapor-pressure depression)", tex: 'P_A = X_A P_A^\\circ', note: 'Solvent vapor pressure scales with its mole fraction; ideal solutions obey it.' },
      { name: 'Boiling-point elevation', tex: '\\Delta T_b = iK_bm', note: 'Gives the change, not the final boiling point; uses molality.' },
      { name: 'Freezing-point depression', tex: '\\Delta T_f = iK_fm', note: 'For water Kf = 1.86 °C/m; uses molality.' },
      { name: 'Osmotic pressure', tex: '\\Pi = iMRT', note: 'Uses molarity; water flows toward higher solute concentration.' }
    ]
  },

  questions: raw.questions
};
