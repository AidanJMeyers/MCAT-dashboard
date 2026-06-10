// Chapter 8 — The Gas Phase. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch08.json (already-correct extraction);
// the recap/detail markdown, goals, and keyReview are authored here from the source text.
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 8,
  title: 'The Gas Phase',
  subtitle: 'The gas phase & pressure · ideal gases and the gas laws · kinetic molecular theory & Graham\'s law · real gases',

  blocks: [
    /* ───────────────────────── 8.1 The Gas Phase ───────────────────────── */
    {
      id: 's1', num: '8.1', title: 'The Gas Phase',
      goals: [
        'Identify the unique characteristics of the gas phase.',
        'Predict how pressure changes in different positions and locations, including underwater and at altitude.',
        'Recall the conditions at STP and at standard state.'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 8.1 — A simple mercury barometer: atmospheric pressure pushes mercury up the evacuated column; column height is proportional to the applied pressure.' }],
      recap: `
- **Gases** are **fluids** (flow, take container shape) but are **far apart**, in **rapid motion**, with only **weak intermolecular forces** → they **expand to fill any volume** and are **easily compressible**.
- A gas sample is defined by **four variables**: **pressure (P)**, **volume (V)**, **temperature (T)**, **moles (n)**.
- **Pressure units:** $1\\text{ atm} = 760\\text{ mmHg} \\equiv 760\\text{ torr} = 101.325\\text{ kPa}$ (SI = **pascal**).
- A **mercury barometer** reads incident pressure: higher pressure → column **rises**; lower pressure → column **falls**.
- **STP** = $273\\text{ K}$ (0 °C) and $1\\text{ atm}$ (gas-law math). **Standard state** = $298\\text{ K}$ (25 °C), $1\\text{ atm}$, $1\\text{ M}$ (thermo/electrochem).
`,
      detail: `
#### What makes a gas a gas
Matter exists in three **phases**: **gas, liquid, solid**. The gas phase is the **simplest** — all gases behave alike and follow the same laws *regardless of chemical identity*.

- Like liquids, gases are **fluids**: they **flow** and **take the shape of their container**.
- Unlike liquids, gas particles **move rapidly** and are **far apart**, with only **very weak intermolecular forces**.
- Consequences:
  - **Expand to fill any volume.**
  - **Easily (but not infinitely) compressible** — this distinguishes them from liquids.
  - **Least dense phase** of matter.

#### The four state variables
A gaseous sample is fully described by **four variables**:

| Variable | Symbol | Common units |
|---|---|---|
| **Pressure** | $P$ | atm, mmHg, torr, Pa (SI) |
| **Volume** | $V$ | L, mL |
| **Temperature** | $T$ | K (use this!), °C |
| **Moles** | $n$ | mol |

##### Pressure units to know cold
$$1\\text{ atm} = 760\\text{ mmHg} \\equiv 760\\text{ torr} = 101.325\\text{ kPa}$$

- **mmHg** and **torr** are equivalent.
- The **SI unit** is the **pascal (Pa)**.
- The most clinically relevant unit is **mmHg**.

:::realworld
**Blood pressure** is measured by a **sphygmomanometer** in **mmHg**. Normal adult BP is **< 120/80** (systolic/diastolic). **Hypertension** = at least two readings **> 140 systolic** or **> 90 diastolic**. The cuff creates a force opposed by the patient's arterial pressure — the same idea as a barometer.
:::

#### The mercury barometer

A **barometer** balances two forces on a pool of mercury:

- **Atmospheric pressure** pushes **down** on the mercury pool → drives mercury **up** the tube.
- The **weight of the mercury column** (set by its density) pushes back **down**; the space above it is a **vacuum**.

So:

- External pressure **>** column weight → column **rises**.
- External pressure **<** column weight → column **falls**.
- **Column height (mm)** is **directly proportional** to the applied pressure.

:::keyconcept
Atmospheric pressure is **not** the only pressure that can drive a barometer. Any incident force works — a **blood-pressure cuff** is opposed by arterial pressure, and **hydrostatic (water) pressure** adds to atmospheric pressure underwater.
:::

##### Predicting the column — two MCAT classics
- **Top of a mountain:** atmospheric pressure is **lower** → column **falls**.
- **Ten meters underwater:** **hydrostatic pressure** adds *on top of* atmospheric pressure → column **rises**.

:::bridge
**Fluid dynamics** (*MCAT Physics and Math Review*, Ch. 4) underlies how a mercury barometer works and many of the gas-law applications here.
:::

#### STP vs. standard state — do NOT confuse them
| | **STP** (standard temperature & pressure) | **Standard state** (standard conditions) |
|---|---|---|
| Temperature | **273 K (0 °C)** | **298 K (25 °C)** |
| Pressure | **1 atm** | **1 atm** |
| Concentration | — | **1 M** |
| Used for | **Gas-law calculations** | **Standard** $\\Delta H$, $\\Delta S$, $\\Delta G$, **cell voltage** |

:::expertise
On Test Day, remember: **STP temperature is 0 °C (273 K)**; **standard-state temperature is 25 °C (298 K)**. They are *not* the same.
:::

:::mnemonic
**"STP is co-o-old (0 °C); standard state is room temp (25 °C)."** STP → gas math; standard state → thermo & electrochem (it has the extra **1 M**).
:::
`
    },

    /* ───────────────────────── 8.2 Ideal Gases ───────────────────────── */
    {
      id: 's2', num: '8.2', title: 'Ideal Gases',
      goals: [
        'Apply the ideal gas equation to solve for pressure, temperature, volume, or number of moles.',
        'Calculate the density of a substance from its molecular formula, pressure, and temperature.',
        'Apply Avogadro\'s principle, Boyle\'s, Charles\'s, Gay-Lussac\'s, and the combined gas law to given scenarios.',
        'Solve problems using Dalton\'s law of partial pressures and Henry\'s law.'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 8.2 — Ideal-gas isotherms: each curve is a P–V relationship at a fixed temperature; higher curves are higher temperatures.' }],
      recap: `
- **Ideal gas law:** $PV = nRT$. An **ideal gas** has **no intermolecular forces** and **occupies no volume**.
- Know $R$ both ways: $R = 0.0821\\ \\frac{\\text{L·atm}}{\\text{mol·K}}$ (with atm & L) and $R = 8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$ (SI). **Match $R$ to the units in the stem.**
- At **STP, 1 mol of any gas occupies 22.4 L** (Avogadro). Gas **density** $\\rho = \\dfrac{PM}{RT}$.
- **Combined gas law:** $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$. The named laws are just **special cases** (hold two variables constant).
- **Dalton:** $P_{total} = \\sum P_i$ and $P_A = X_A P_{total}$. **Henry:** $[A] = k_H P_A$ — solubility ∝ partial pressure.
`,
      detail: `
#### The ideal gas — what we're assuming
An **ideal gas** is a *hypothetical* gas whose molecules:

1. have **no intermolecular forces**, and
2. **occupy no volume** themselves.

Real gases **deviate** from ideal behavior at **high pressure (low volume)** and **low temperature**, but many compressed real gases still behave nearly ideally.

:::keyconcept
An **ideal gas** follows the gas laws at **all** pressures and temperatures. A **real gas** deviates at **high pressure (low volume)** and **low temperature** because of **intermolecular forces** and **molecular volume**.
:::

#### The ideal gas law
$$PV = nRT$$

- $P$ = pressure, $V$ = volume, $n$ = moles, $T$ = temperature (**in K**).
- $R$ = the **ideal gas constant**:
  - $R = 0.0821\\ \\dfrac{\\text{L·atm}}{\\text{mol·K}}$ — use with **atm** and **L**.
  - $R = 8.314\\ \\dfrac{\\text{J}}{\\text{mol·K}}$ — the SI form (Pa and m³).
- Use it to solve for any **one missing variable**, or to track a **change** while holding two variables constant. *(Figure 8.2 plots P–V at increasing temperatures.)*

:::bridge
**Round to estimate** on Test Day: $0.0821 \\approx 0.08$. Answer choices are spaced far enough apart that an estimate lands on the right one — *MCAT Physics and Math Review*, Ch. 10.
:::

#### Density and molar mass from $PV = nRT$
Because $n = \\dfrac{m}{M}$ (mass ÷ molar mass), rearranging the ideal gas law gives gas **density**:

$$\\rho = \\frac{m}{V} = \\frac{PM}{RT}$$

- A faster route at conditions near STP: start from **22.4 L/mol at STP**, then scale the volume for the new $P$ and $T$ using the combined gas law, and divide mass by the scaled volume.
- **Doubling T** → doubles V; **doubling P** → halves V. Doing **both at once** → volume **unchanged**.

To find an **unknown molar mass**: weigh a bulb full of the gas, evacuate it, reweigh → sample mass; divide by bulb volume → density at the measured $P, T$. Scale to STP, then $M = \\rho_{STP} \\times 22.4\\ \\text{L/mol}$.

#### Special cases of the ideal gas law
The classic gas laws predate $PV=nRT$ but are best understood as **special cases** where two of $P, V, T, n$ are held constant.

| Law | Held constant | Relationship | Equation |
|---|---|---|---|
| **Avogadro's principle** | $P$, $T$ | $V \\propto n$ (**direct**) | $\\dfrac{V_1}{n_1} = \\dfrac{V_2}{n_2}$ |
| **Boyle's law** | $n$, $T$ (isothermal) | $P \\propto \\dfrac{1}{V}$ (**inverse**) | $P_1V_1 = P_2V_2$ |
| **Charles's law** | $n$, $P$ (isobaric) | $V \\propto T$ (**direct**) | $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$ |
| **Gay-Lussac's law** | $n$, $V$ (isovolumetric) | $P \\propto T$ (**direct**) | $\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}$ |
| **Combined gas law** | $n$ | combines all three | $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$ |

##### Avogadro's principle
At constant $T$ and $P$, **equal volumes of any gases contain equal numbers of moles** — as moles rise, volume rises in **direct proportion**. At **STP, 1 mol = 22.4 L** for any gas.

##### Boyle's law (isothermal)
At constant $n$ and $T$, **pressure and volume are inversely related**: squeeze the gas (↑P) and its volume drops (↓V). A V-vs-P plot is the inverse of the isotherms in Figure 8.2.

:::expertise
Remember the **shape of the graph** to recall the relationship. Boyle: as $P$ ↑, $V$ ↓ (a hyperbola). These proportionalities often let you answer MCAT items with **no real math**.
:::

##### Charles's law (isobaric)

![Figure 8.4 — Charles's law: at constant pressure, volume rises with absolute temperature; extrapolating to V = 0 defines absolute zero.](${fig(1, 7).src})

At constant $n$ and $P$, **volume is directly proportional to absolute temperature (K)**. Extrapolating the V-vs-T line to $V = 0$ predicts **absolute zero** ($T = 0$ K).

:::realworld
Although **0 K** can't physically be reached, plots like Charles's law were historically used to **calculate its value** by extrapolation.
:::

##### Gay-Lussac's law (isovolumetric)

![Figure 8.5 — Gay-Lussac's law: at constant volume, pressure rises in direct proportion to absolute temperature.](${fig(1, 9).src})

At constant $n$ and $V$, **pressure is directly proportional to absolute temperature** — heating a rigid container raises its pressure. The plot is nearly identical to Charles's law (just P instead of V on the y-axis).

##### Combined gas law
$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$$

Relates **P–V** (Boyle) in the numerator with the effects of **T** on both V (Charles) and P (Gay-Lussac) at once. Assumes **constant n**.

:::expertise
Master the **combined gas law** and you don't have to memorize every special case — just read the stem for **what stays constant** to know which assumption to make.
:::

:::mnemonic
**The gas-law cast:** **C**harles ties **V** to **T** (both go up together); **G**ay-**L**ussac ties **P** to **T** (both up together); **B**oyle is the odd one — **P** and **V** trade off (inverse). *Charles and Gay-Lussac are "direct" twins; Boyle is the "inverse" loner.*
:::

#### Dalton's law of partial pressures
When gases that **don't react** share a vessel, **each behaves as if alone** — its **partial pressure** equals what it would exert by itself.

$$P_{total} = P_A + P_B + P_C + \\cdots = \\sum P_i$$

A partial pressure also follows from the **mole fraction** $X$:

$$P_A = X_A\\, P_{total}, \\qquad X_A = \\frac{n_A}{n_{total}}$$

:::keyconcept
Every gas in a mixture **contributes to the total as if it were the only gas present**. Sum the partials → total pressure.
:::

*Worked idea:* a vessel with 0.75 mol N₂, 0.20 mol H₂, 0.05 mol F₂ (1.00 mol total) at 2.5 atm → mole fractions 0.75 / 0.20 / 0.05 → partials 1.875 / 0.50 / 0.125 atm.

#### Henry's law — gas solubility
At a higher applied pressure, **more gas dissolves** in a liquid. **Vapor pressure** is the pressure of evaporated particles above a liquid; at equilibrium, evaporation = condensation.

$$[A] = k_H\\, P_A \\qquad\\text{equivalently}\\qquad \\frac{[A]_1}{P_1} = \\frac{[A]_2}{P_2}$$

- $[A]$ = dissolved concentration, $k_H$ = **Henry's constant** (gas-specific), $P_A$ = partial pressure.
- **Solubility (concentration) and pressure are directly related.**

:::keyconcept
The **solubility of a gas increases with increasing partial pressure** of that gas. This is why **sodas** are bottled under high CO₂ pressure, and why divers absorb more N₂ at depth.
:::

![Figure 8.6 — Alveolar–capillary gas exchange: O₂ and CO₂ move between alveoli (A), arterial (a), and venous (V) compartments along their partial-pressure gradients.](${fig(1, 12).src})

:::realworld
At **high altitude**, atmospheric pressure drops, so the **partial pressure of O₂** drops (Dalton) → **less O₂ dissolves** in blood (Henry) → less is delivered. Conversely, **hyperbaric oxygen** raises $P_{O_2}$ to force more O₂ into the blood. *(See alveolar gas exchange — MCAT Biology, Ch. 6.)*
:::
`
    },

    /* ─────────────────── 8.3 Kinetic Molecular Theory ─────────────────── */
    {
      id: 's3', num: '8.3', title: 'Kinetic Molecular Theory',
      goals: [
        'Recall the assumptions made by kinetic molecular theory.',
        'Calculate the average (root-mean-square) speed of a gas given its temperature.',
        'Compare the relative speeds of two gases at the same temperature.',
        'Apply Graham\'s law to gas effusion and diffusion.'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 8.7 — Maxwell–Boltzmann speed distribution at two temperatures: as T rises, the curve flattens and shifts right (more fast molecules).' }],
      recap: `
- **Kinetic molecular theory (KMT)** *explains* gas behavior; the gas laws merely *described* it. Built for **ideal gases**.
- **5 assumptions:** negligible particle **volume**; no **intermolecular forces**; constant **random motion**; **elastic** collisions (momentum & KE conserved); average **KE ∝ absolute T** (same for all gases at a given T).
- **Average KE:** $KE_{avg} = \\frac{3}{2}k_B T$ → **root-mean-square speed** $u_{rms} = \\sqrt{\\dfrac{3RT}{M}}$. **Hotter = faster; heavier = slower.**
- **Graham's law:** $\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}$ — lighter gases **diffuse/effuse faster**.
- **Diffusion** = gases spreading/mixing; **effusion** = gas escaping through a tiny hole under pressure. **Same equation** for both.
`,
      detail: `
#### Why KMT matters
The gas laws **describe** what gases do; the **kinetic molecular theory** (Maxwell, Boltzmann, and others, late 1800s) **explains** *why* by modeling the motion of individual molecules. It was built for **ideal gases** but applies reasonably well to real gases too.

#### The five assumptions
1. Gas particles have **volume negligible** compared to the container.
2. Particles exhibit **no intermolecular attractions or repulsions**.
3. Particles are in **continuous, random motion**, colliding with each other and the walls.
4. All collisions are **elastic** — **momentum and kinetic energy are conserved**.
5. The **average kinetic energy ∝ absolute temperature (K)**, and is the **same for all gases** at a given T (independent of identity or mass).

:::mnemonic
**"VFREE-T"** — KMT assumes gas particles are *free*: **V**olume negligible · no **F**orces · **R**andom motion · **E**lastic collisions · KE ∝ **T**emperature. (Five assumptions, one word.)
:::

#### Average molecular speeds
Average kinetic energy depends only on temperature:

$$KE_{avg} = \\frac{3}{2}k_B T$$

where $k_B$ is the **Boltzmann constant** (the bridge between the macroscopic gas and its individual molecules). Because individual molecules travel only nanometers between collisions, we describe speed statistically as the **root-mean-square speed**:

$$u_{rms} = \\sqrt{\\frac{3RT}{M}}$$

- $R$ = ideal gas constant ($8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$ — joules come from kg, so $M$ must be in **kg/mol**), $T$ in K, $M$ = molar mass.
- **Higher T → faster.** **Larger M → slower.**

:::expertise
Don't memorize numbers — understand the trend: **the hotter the gas, the faster the molecules; the heavier the molecules, the slower they move.**
:::

##### Maxwell–Boltzmann distributions
A **Maxwell–Boltzmann curve** plots the **distribution of speeds** at a given temperature.

- **Raising temperature** (Figure 8.7) → the bell curve **flattens and shifts right** → more molecules at higher speeds.
- At the **same temperature**, a **heavier gas** has a **narrower, left-shifted** curve (slower), while a **lighter gas** is broader and right-shifted (faster):

![Figure 8.9 — At one temperature, lighter gases peak at higher speeds; heavier gases are slower (all share the same average kinetic energy).](${fig(2, 4).src})

#### Graham's law of diffusion and effusion
Because all gases at the same temperature have the **same average KE**, heavier particles must move **slower**.

| Term | Definition |
|---|---|
| **Diffusion** | Movement of molecules from **high → low concentration** through a medium (gases **mixing**). |
| **Effusion** | Flow of gas through a **small opening** from one compartment to another under pressure. |

Both obey **Graham's law** — rates are **inversely proportional to the square roots of molar masses** (isothermal, isobaric):

$$\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}}$$

- A gas with **4×** the molar mass of another travels **half** as fast ($\\sqrt{4} = 2$).
- $r$ = diffusion/effusion rate; $M$ = molar mass.

![Figure 8.8 — Diffusion: solute particles spread from high to low concentration until evenly distributed.](${fig(2, 3).src})

:::keyconcept
**Diffusion** = gases **mixing** with one another. **Effusion** = a gas moving through a **small hole** under pressure. **Both are slower for larger molecules**, and **both use the same equation** ($r \\propto 1/\\sqrt{M}$).
:::

:::mnemonic
**"Light gases are fleet of foot."** Lighter → faster (bigger square root in the numerator). The **rotten-egg H₂S (34 g/mol)** reaches your nose before heavier wintergreen and almond vapors — smallest molar mass smells first.
:::

:::realworld
Clinically, a **pleural effusion** is fluid leaking into the intrapleural space through small capillary/lymphatic openings — pressure builds around the lungs and hinders breathing. Same root word: flow through a small opening.
:::
`
    },

    /* ───────────────────────── 8.4 Real Gases ───────────────────────── */
    {
      id: 's4', num: '8.4', title: 'Real Gases',
      goals: [
        'Distinguish between real gases and ideal gases.',
        'Predict how differences in attractive forces or molecular volume affect real-gas behavior.'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 8.11 — Real-gas isotherms deviate from the smooth ideal curves of Figure 8.2, especially at high pressure / low volume.' }],
      recap: `
- **Real gases** have particles with **nonnegligible volume** that **interact**. Deviations are worst at **high pressure (low volume)** and **low temperature**.
- At **moderately high pressure / low T**, **attractive forces** dominate → real volume **less** than ideal predicts.
- At **extremely high pressure**, **particle volume** dominates → real volume **greater** than ideal predicts (can't compress to zero).
- **van der Waals equation:** $\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT$. **$a$** corrects **attractions**; **$b$** corrects **molecular volume**.
- $a$: small for tiny nonpolar gases (He), large for big/polarizable or **polar** gases (HCl, NH₃). $b$: larger for **bigger** molecules. If $a = b = 0$, it reduces to $PV = nRT$.
`,
      detail: `
#### Real vs. ideal
Our world is made of **real gases**, whose particles **occupy real volume** and **interact measurably**. The ideal gas law is a **good approximation** most of the time, but **all real gases deviate** — most when forced close together at **high pressure (low volume)** or **low temperature** (Figure 8.11; compare to ideal isotherms in Figure 8.2).

:::expertise
At **high temperature and low pressure (high volume)**, deviations are **small** — the ideal gas law is still a good approximation.
:::

#### Deviations due to pressure
As pressure rises, particles are forced closer:

- **Moderately high pressure** (a few hundred atm): **intermolecular attractions** become significant → the gas takes up **less volume** than ideal predicts.
- **Extremely high pressure:** particle **size** becomes large relative to the gaps between them → the gas takes up **more volume** than ideal predicts (it **can't be compressed to zero**).

#### Deviations due to temperature
As temperature falls, molecules slow and attractions matter more:

- Approaching the **condensation (boiling) point**, **attractions** pull particles together → **less volume** than ideal predicts. *The closer to its boiling point, the less ideal a gas acts.*
- At **extremely low temperatures**, particle **volume** again dominates → **more volume** than ideal predicts.

| Condition | Dominant effect | Real volume vs. ideal |
|---|---|---|
| Moderately high P / low T | **Attractive forces** | **Less** than ideal |
| Extremely high P / very low T | **Particle volume** | **More** than ideal |
| High T, low P (high V) | Negligible | **≈ Ideal** |

#### The van der Waals equation of state
A correction to $PV = nRT$ for the two real effects:

$$\\left(P + \\frac{an^2}{V^2}\\right)(V - nb) = nRT$$

| Term | Corrects for | Bigger when… |
|---|---|---|
| **$a$** | **Attractive forces** between molecules | molecules are **large/polarizable** (Xe, N₂) or **polar** (HCl, NH₃); **small** for He |
| **$b$** | **Volume of the molecules** themselves | molecules are **physically larger** |

- Numerical values of **$a$ are generally much larger** than those of **$b$**.
- The $a$-correction is **added** to $P$ (attractions lower the measured pressure); the $b$-correction is **subtracted** from $V$ (particles take up space).

:::keyconcept
If **$a$ and $b$ are both zero**, the van der Waals equation **collapses to the ideal gas law** — confirming an ideal gas has no attractions ($a = 0$) and no volume ($b = 0$).
:::

:::mnemonic
**"$a$ = Attraction, $b$ = Bigness."** $a$ is the **a**ttractive-force term (largest for polar molecules like NH₃/HCl); $b$ is the term for **b**ig particles (largest for bulky molecules).
:::

:::expertise
Know the **concepts** behind the van der Waals equation, but **don't memorize it** — if the testmakers want you to use it, they'll **give it to you** in the passage or stem.
:::

##### Predicting which gas has higher pressure (nonideal)
- **Attraction-dominated, negligible volume:** smaller $a$ → behaves more ideally → **higher** real pressure. *(Methane vs. chloromethane: methane has smaller $a$ → higher pressure.)*
- **Volume-dominated, negligible attraction:** larger molecule → larger $b$ → smaller $(V - nb)$ → pressure must **rise**. *(Isobutane vs. methane: bulkier isobutane exerts the higher pressure.)*
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [
      {
        section: 'The Gas Phase',
        points: [
          'Gases are the **least dense** phase: **fluids** that conform to their container and are **easily compressible**.',
          'A gas system is described by **T, P, V, and n**.',
          'Pressure equivalencies: $1\\text{ atm} = 760\\text{ mmHg} \\equiv 760\\text{ torr} = 101.325\\text{ kPa}$.',
          'A **mercury barometer** measures incident (usually atmospheric) pressure: higher pressure forces mercury **up** the column; lower pressure lets it **fall**.',
          '**STP** = **273 K (0 °C)** and **1 atm**; **standard state** = **298 K (25 °C)**, 1 atm, 1 M.'
        ]
      },
      {
        section: 'Ideal Gases',
        points: [
          'Ideal-gas equations assume gas molecules have **negligible volume and no intermolecular forces**.',
          'At STP, **1 mole of any ideal gas occupies 22.4 L** (Avogadro).',
          'The **ideal gas law** $PV = nRT$ relates all four state variables for an ideal gas.',
          '**Avogadro:** $V \\propto n$ (constant P, T). **Boyle:** $P \\propto 1/V$ (constant n, T). **Charles:** $V \\propto T$ (constant n, P). **Gay-Lussac:** $P \\propto T$ (constant n, V).',
          'The **combined gas law** $\\dfrac{P_1V_1}{T_1}=\\dfrac{P_2V_2}{T_2}$ merges Boyle, Charles, and Gay-Lussac.',
          '**Dalton:** total pressure = sum of partial pressures, each proportional to its mole fraction. **Henry:** dissolved gas ∝ its partial pressure.'
        ]
      },
      {
        section: 'Kinetic Molecular Theory',
        points: [
          'KMT **explains** gas behavior via 5 assumptions: **negligible volume, no intermolecular forces, random motion, elastic collisions, KE ∝ absolute T**.',
          'Average KE is **directly proportional to temperature** and equal for all gases at a given T.',
          '$u_{rms} = \\sqrt{\\dfrac{3RT}{M}}$ — **hotter = faster, heavier = slower**.',
          '**Graham\'s law:** gases with **lower molar mass diffuse/effuse faster** at the same temperature.',
          '**Diffusion** = spreading from high to low concentration; **effusion** = movement through a small opening under pressure.'
        ]
      },
      {
        section: 'Real Gases',
        points: [
          'Real gases deviate from ideal behavior under **high pressure (low volume)** and **low temperature**.',
          'At moderately high pressure / low T, **intermolecular attractions** make the real volume **less** than predicted.',
          'At extremely high pressure / very low T, **molecular volume** makes the real volume **more** than predicted.',
          'The **van der Waals equation** corrects for **attractions ($a$)** and **molecular volume ($b$)**; setting both to zero recovers the ideal gas law.'
        ]
      }
    ],
    mnemonics: [
      '**STP vs. standard state:** STP is **co-o-old (0 °C / 273 K)** for gas math; standard state is **room temp (25 °C / 298 K)** with **1 M** for thermo & electrochem.',
      '**Gas-law twins:** **Charles** (V & T) and **Gay-Lussac** (P & T) are **direct** — both quantities rise together; **Boyle** is the **inverse** loner (P up → V down).',
      '**"VFREE-T"** for KMT assumptions: negligible **V**olume · no **F**orces · **R**andom motion · **E**lastic collisions · KE ∝ **T**emperature.',
      '**"Light gases are fleet of foot":** lower molar mass → faster diffusion/effusion ($r \\propto 1/\\sqrt{M}$). Rotten-egg **H₂S smells first**, heavier vapors last.',
      '**"$a$ = Attraction, $b$ = Bigness"** for van der Waals: $a$ corrects intermolecular **a**ttractions (largest for polar gases like NH₃/HCl); $b$ corrects for **b**ig molecular volume.',
      '**Doubling rule:** double **T** → double **V**; double **P** → halve **V**. Double **both** at once → volume **unchanged**.'
    ],
    keyConcepts: [
      'The named gas laws (**Avogadro, Boyle, Charles, Gay-Lussac, combined**) are all **special cases of $PV = nRT$** — just figure out which two variables are held constant.',
      '**Match the gas constant to the units:** use $R = 0.0821\\ \\frac{\\text{L·atm}}{\\text{mol·K}}$ with atm and L; use $R = 8.314\\ \\frac{\\text{J}}{\\text{mol·K}}$ in SI (and for $u_{rms}$, with $M$ in kg/mol).',
      'At the **same temperature, all gases have the same average kinetic energy** — so heavier molecules must move **slower** (the basis of Graham\'s law and the Maxwell–Boltzmann shift).',
      'Real gases deviate most when particles are forced close (**high P / low T**): attractions shrink the volume below ideal, while at extreme pressures the particles\' own volume pushes it above ideal.',
      'When **collecting a gas over water**, subtract the **water vapor pressure** from the measured pressure (Dalton) before applying $PV = nRT$.'
    ],
    equations: [
      { name: 'Ideal gas law', tex: 'PV = nRT', note: 'The master equation; all named gas laws are special cases. Use R that matches the units.' },
      { name: 'Density of a gas', tex: '\\rho = \\dfrac{PM}{RT}', note: 'From PV = nRT with n = m/M. Gas densities are usually in g/L.' },
      { name: 'Combined gas law', tex: '\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}', note: 'Relates two states at constant n; merges Boyle, Charles, and Gay-Lussac.' },
      { name: "Avogadro's principle", tex: '\\dfrac{V_1}{n_1} = \\dfrac{V_2}{n_2}', note: 'Constant P, T: volume is proportional to moles. 1 mol = 22.4 L at STP.' },
      { name: "Boyle's law", tex: 'P_1V_1 = P_2V_2', note: 'Constant n, T (isothermal): pressure and volume are inversely related.' },
      { name: "Charles's law", tex: '\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}', note: 'Constant n, P (isobaric): volume is proportional to absolute temperature.' },
      { name: "Gay-Lussac's law", tex: '\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}', note: 'Constant n, V (isovolumetric): pressure is proportional to absolute temperature.' },
      { name: "Dalton's law (total)", tex: 'P_{total} = P_A + P_B + P_C + \\cdots = \\sum P_i', note: 'Total pressure = sum of partial pressures of non-reacting gases.' },
      { name: "Dalton's law (partial)", tex: 'P_A = X_A\\, P_{total}', note: 'Partial pressure = mole fraction times total pressure.' },
      { name: "Henry's law", tex: '[A] = k_H P_A \\;\\Rightarrow\\; \\dfrac{[A]_1}{P_1} = \\dfrac{[A]_2}{P_2}', note: 'Dissolved gas concentration is directly proportional to its partial pressure.' },
      { name: 'Average kinetic energy', tex: 'KE_{avg} = \\tfrac{3}{2} k_B T', note: 'Average KE depends only on absolute temperature; same for all gases at a given T.' },
      { name: 'Root-mean-square speed', tex: 'u_{rms} = \\sqrt{\\dfrac{3RT}{M}}', note: 'Hotter goes faster; heavier goes slower. Use R = 8.314 J/(mol·K) with M in kg/mol.' },
      { name: "Graham's law", tex: '\\dfrac{r_1}{r_2} = \\sqrt{\\dfrac{M_2}{M_1}}', note: 'Diffusion/effusion rates are inversely proportional to the square root of molar mass.' },
      { name: 'van der Waals equation', tex: '\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT', note: 'a corrects for attractions, b for molecular volume. a = b = 0 gives the ideal gas law.' }
    ]
  },

  questions: raw.questions
};
