// GCHEM Chapter 7 — Thermochemistry. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch07.json (already-correct extraction);
// the recap/detail markdown, goals, tables, callouts, and keyReview are authored here.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 7,
  title: 'Thermochemistry',
  subtitle: 'Systems & processes · states & state functions · heat & calorimetry · enthalpy & Hess\'s law · entropy · Gibbs free energy',

  blocks: [
    /* ─────────────────────── 7.1 Systems and Processes ─────────────────────── */
    {
      id: 's1', num: '7.1', title: 'Systems and Processes',
      goals: [
        'Identify the system and its surroundings in a situation involving heat transfer',
        'Recall the defining features of isothermal, adiabatic, isobaric, and isovolumetric processes',
        'Apply the first law of thermodynamics, $\\Delta U = Q - W$, to each process type',
        'Distinguish spontaneous from nonspontaneous processes'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 7.1 — Isothermal expansion on a P–V graph: a hyperbola whose area equals both the work done and the heat absorbed.' }],
      recap: `
- A **system** is the matter being observed; the **surroundings** are everything else. The **boundary** is chosen by the observer and can be moved at will.
- **3 system types** by what crosses the boundary: **isolated** (neither energy nor matter), **closed** (energy only), **open** (energy + matter).
- **First law:** $\\Delta U = Q - W$ — internal energy change = heat *added to* the system minus work *done by* the system.
- **4 named processes** each fix one variable and simplify the first law: **isothermal** ($\\Delta U = 0$), **adiabatic** ($Q = 0$), **isobaric** (constant $P$), **isovolumetric** ($W = 0$).
- A **spontaneous** process proceeds without outside energy input; spontaneity is predicted by **$\\Delta G$**, not by reaction speed.
`,
      detail: `
#### System vs. surroundings
The **system** is the matter being observed — the reactants and products of a reaction, the solute and solvent of a solution, or the gas inside a balloon. The **surroundings** (or **environment**) are everything outside the system.

- The **boundary** between the two is **not fixed** — the observer places it to suit the question being asked.
- Example: with hot coffee in a cup, you might call the *coffee* the system and the *cup* the surroundings (to study heat lost to the cup), or call *coffee + cup* the system and the *air* the surroundings (to study heat lost to the room).
- Push the boundary out far enough and the entire **universe** becomes the system — at which point there are **no surroundings**.

#### Three types of systems

| System | Exchanges **energy**? | Exchanges **matter**? | Classic example |
|---|---|---|---|
| **Isolated** | **No** | **No** | Insulated **bomb calorimeter** |
| **Closed** | **Yes** | **No** | **Steam radiator** |
| **Open** | **Yes** | **Yes** | **Pot of boiling water** |

When a system changes one or more of its properties (concentration, temperature, pressure), it undergoes a **process**.

#### The first law of thermodynamics
Many processes hold one property constant, which lets us simplify the first law:

$$\\Delta U = Q - W$$

where $\\Delta U$ is the change in **internal energy**, $Q$ is the **heat added to** the system, and $W$ is the **work done by** the system.

#### Four named processes
Each special process fixes one variable and collapses the first law:

| Process | Held constant | Consequence | First law simplifies to | P–V graph |
|---|---|---|---|---|
| **Isothermal** | Temperature $T$ | $U$ constant $\\Rightarrow \\Delta U = 0$ | $Q = W$ | **Hyperbola** (area = work *and* heat) |
| **Adiabatic** | (no heat exchange) | $Q = 0$ | $\\Delta U = -W$ | **Hyperbola** ($T$ not constant) |
| **Isobaric** | Pressure $P$ | first law unchanged | $\\Delta U = Q - W$ | **Flat line** (slope = 0) |
| **Isovolumetric** (isochoric) | Volume $V$ | $W = P\\Delta V = 0$ | $\\Delta U = Q$ | **Vertical line** (area = 0) |

##### Isothermal
Temperature is constant, so internal energy is constant ($T$ and $U$ are directly proportional). With $\\Delta U = 0$, the heat added equals the work done: $Q = W$. The area under the hyperbolic curve represents **both** the work performed by the gas **and** the heat that entered.

##### Adiabatic
No heat is exchanged, so $Q = 0$ and $\\Delta U = -W$ — the change in internal energy equals the work done *on* the system. Like the isothermal case it is hyperbolic, but here **temperature is not constant**.

![Figure 7.2 — Adiabatic expansion (Q = 0); temperature changes along the curve.](${fig(0, 3).src})

##### Isobaric
Pressure is constant. Isothermal and isobaric processes are common because temperature and pressure are easy to control in the lab. An isobaric process appears as a **flat (horizontal) line** on a P–V graph.

![Figure 7.3 — Isobaric expansion: a flat line because pressure is held constant.](${fig(0, 4).src})

##### Isovolumetric (isochoric)
Volume does not change, so the gas neither expands nor compresses and **no work is done** ($W = P\\Delta V = 0$). The first law reduces to $\\Delta U = Q$. It plots as a **vertical line**; the area under it (the work) is zero.

:::bridge
The terms **isothermal, adiabatic, isobaric,** and **isovolumetric (isochoric)** also appear in *MCAT Physics and Math Review*, Chapter 3 — the thermodynamics treatment there is the same physics, just framed for gases.
:::

#### Spontaneous vs. nonspontaneous processes
A **spontaneous process** can occur **by itself**, without being driven by an outside energy source. The change in **Gibbs free energy ($\\Delta G$)** predicts spontaneity; the quantities behind it, $\\Delta H$ and $\\Delta S$, also reveal whether spontaneity is **temperature dependent**.

- **Spontaneous ≠ fast.** Many spontaneous reactions have high **activation energies** and rarely proceed on their own — a match will not light itself, but the friction of striking it supplies the activation energy, after which combustion proceeds spontaneously.
- **Enzymes** are biological catalysts that speed up slow-but-spontaneous reactions so products form fast enough to sustain life.
- Spontaneous reactions may go to completion **or** settle into **equilibrium** with stable concentrations of reactants and products.

##### Coupling reactions

![Figure 7.4 — Coupling an exergonic reaction to an endergonic one.](${fig(0, 5).src})

A common way to drive a **nonspontaneous** reaction is to **couple** it to a spontaneous one. The combustion of glucose is **exergonic**; peptide-bond formation is **endergonic**. Energy from glucose combustion is stored in **GTP** bonds, which are then cleaved to power peptide-bond formation.

:::keyconcept
**Spontaneity (thermodynamics) and rate (kinetics) are independent.** A spontaneous reaction will *eventually* proceed without external energy, but says nothing about *how fast* it goes.
:::
`
    },

    /* ─────────────────── 7.2 States and State Functions ─────────────────── */
    {
      id: 's2', num: '7.2', title: 'States and State Functions',
      goals: [
        'Recall standard conditions and the calculations they are used for',
        'Distinguish a state function from a process function',
        'List the common state functions',
        'Identify the triple point and critical point on a phase diagram'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 7.5 — Phase diagram for a single compound: solid, liquid, and gas regions divided by lines of equilibrium, meeting at the triple point.' }],
      recap: `
- **State functions** describe a system at **equilibrium** and are **path independent** (they compare two states, not the route between them): $P, \\rho, T, V, H, U, G, S$ — *"under pressure and dense, watch TV and get HUGS."*
- **Process functions** describe the **path** taken: **work ($W$)** and **heat ($Q$)**.
- **Standard conditions** = 25 °C (298 K), 1 atm, 1 M — used for thermodynamics/kinetics/equilibrium. *Not* the same as **STP** (0 °C / 273 K, 1 atm) used for gas laws.
- The most stable form of a substance under standard conditions is its **standard state**; changes measured there are $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\Delta G^\\circ$.
- On a **phase diagram**, the **triple point** is where all three phases coexist; the **critical point** is where liquid and gas become indistinguishable.
`,
      detail: `
#### State functions vs. process functions
A system's **state** is described by macroscopic properties called **state functions**. They describe an **equilibrium state**, not how the system got there, and are useful only for **comparing** one equilibrium to another.

| | **State functions** | **Process functions** |
|---|---|---|
| Describe | The equilibrium **state** itself | The **path** between states |
| Path dependence | **Independent** of path | **Dependent** on path |
| Members | $P$, $\\rho$, $T$, $V$, $H$, $U$, $G$, $S$ | **work ($W$)**, **heat ($Q$)** |

State functions are independent of *path* but **not** of one another — e.g., Gibbs free energy relates to enthalpy, temperature, and entropy.

:::mnemonic
**State functions — "under pressure and feeling dense, watch TV and get HUGS":**
**P**ressure · **density (ρ)** · **T**emperature · **V**olume · **H**enthalpy · **U** internal energy · **G**ibbs free energy · **S** entropy. (TV = $T$, $V$; **HUGS** = $H$, $U$, $G$, $S$.)
:::

#### Standard conditions
A set of **standard conditions** is defined so enthalpy, entropy, and free-energy changes can be measured and compared.

| | **Standard conditions** | **STP (standard temperature & pressure)** |
|---|---|---|
| Temperature | **25 °C (298 K)** | **0 °C (273 K)** |
| Pressure | 1 atm | 1 atm |
| Concentration | 1 M | — |
| Used for | Thermodynamics, kinetics, **equilibrium** | **Ideal gas** calculations |

:::expertise
On the MCAT, do **not** confuse **standard conditions** (298 K, used in thermodynamics) with **STP** (273 K, used in gas-law calculations). Mixing them up is a classic trap.
:::

The most stable form of a substance under standard conditions is its **standard state** — e.g., $\\text{H}_2\\,(g)$, $\\text{H}_2\\text{O}\\,(l)$, $\\text{NaCl}\\,(s)$, $\\text{O}_2\\,(g)$, $\\text{C}\\,(s,\\text{graphite})$. Changes that occur under standard conditions are the **standard enthalpy ($\\Delta H^\\circ$)**, **standard entropy ($\\Delta S^\\circ$)**, and **standard free energy ($\\Delta G^\\circ$)** changes. The degree sign marks the standard state as the **"zero point"** for thermodynamic calculations.

#### Phase changes
**Phase changes** (solid $\\rightleftharpoons$ liquid $\\rightleftharpoons$ gas) are **reversible**; an equilibrium of phases is reached at any given $T$ and $P$. At 0 °C and 1 atm in an isolated system, ice and water coexist — as ice melts, an equal amount of water freezes, so the relative amounts stay constant.

:::keyconcept
As with **all** equilibria, at a phase boundary the **rates of the forward and reverse processes are equal**, so the relative amounts of each phase stay constant.
:::

| Boundary | Forward transition | Reverse transition |
|---|---|---|
| Liquid ↔ Gas | **Vaporization / evaporation / boiling** (endothermic) | **Condensation** |
| Solid ↔ Liquid | **Fusion / melting** | **Solidification / crystallization / freezing** |
| Solid ↔ Gas | **Sublimation** | **Deposition** |

##### Gas–liquid equilibrium
Molecules have a **range** of kinetic energies. Surface molecules with enough energy escape into the gas phase — **evaporation (vaporization)**, an **endothermic** process that cools the remaining liquid. **Boiling** is rapid vaporization throughout the *entire* liquid and occurs only above the **boiling point**. In a closed container, escaped molecules exert **vapor pressure** and some return via **condensation**; equilibrium is reached when the rates are equal. The **boiling point** is the temperature at which **vapor pressure equals the ambient (external) pressure**; vapor pressure rises with temperature.

##### Liquid–solid equilibrium
Solid particles vibrate about fixed positions; heating increases their available energy microstates. With enough energy the lattice breaks down (**fusion/melting**); cooling reverses it (**freezing/crystallization/solidification**). Pure crystalline solids have **sharp** melting points; **amorphous** solids (glass, plastic, wax) melt over a **range**.

##### Gas–solid equilibrium
Solid → gas directly is **sublimation** (dry ice, solid $\\text{CO}_2$, sublimes at room temperature); gas → solid is **deposition**. A **cold finger** exploits this to purify a volatile product: it sublimes under reduced pressure and **deposits** as a purified solid, leaving impurities behind.

#### Phase diagrams
A **phase diagram** plots the $T$ and $P$ at which each phase is thermodynamically stable. The **lines of equilibrium** (phase boundaries) divide it into solid, liquid, and gas regions and represent the phase transitions themselves.

- **Line A** = solid–liquid interface, **line B** = liquid–gas interface, **line C** = solid–gas interface.
- **Gas** = high $T$, low $P$; **solid** = low $T$, high $P$; **liquid** = moderate $T$ and $P$.

| Special point | Definition |
|---|---|
| **Triple point** | The single $T$ and $P$ at which **all three phases coexist** in equilibrium (where the three boundaries meet). |
| **Critical point** | The $T$ and $P$ **above which liquid and gas are indistinguishable** (densities become equal). The heat of vaporization here — and above — is **zero**. Beyond it lies a **supercritical fluid**. |

The solid–liquid boundary extends **indefinitely** from the triple point; the liquid–gas boundary **terminates** at the critical point.

:::expertise
On the MCAT you should be able to identify and interpret **every area and every line** of a phase diagram — including the triple and critical points.
:::

:::realworld
**Water is the famous exception.** Because **ice is less dense than liquid water**, water's solid–liquid line has a **negative slope** — so increasing pressure at constant temperature *melts* ice (the opposite of Figure 7.5). This is why ice floats and skates glide on a thin melted film.
:::
`
    },

    /* ───────────────────────────── 7.3 Heat ───────────────────────────── */
    {
      id: 's3', num: '7.3', title: 'Heat',
      goals: [
        'Differentiate between temperature and heat',
        'Compare specific heat and heat capacity',
        'Recall the specific heat of water',
        'Describe constant-volume and constant-pressure calorimetry'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 7.6 — Bomb calorimeter: a sealed steel vessel (constant volume) immersed in a known mass of water that absorbs the heat of combustion.' }],
      recap: `
- **Temperature ($T$)** = average kinetic energy of particles. **Heat ($Q$)** = energy *transferred* due to a temperature difference. They are **not** the same thing.
- Heat is a **process function**; processes are **endothermic** ($Q > 0$, heat absorbed) or **exothermic** ($Q < 0$, heat released). $1\\text{ cal} = 4.184\\text{ J}$.
- **$q = mc\\Delta T$** ("q equals MCAT") — used when temperature changes. **Specific heat ($c$)** is per gram; **heat capacity ($mc$)** is for the whole sample. Water: $c = 1\\text{ cal/g·°C} = 4.184\\text{ J/g·°C}$.
- During a **phase change** $\\Delta T = 0$, so use **$q = mL$** ($L$ = latent heat: $\\Delta H_{fus}$ or $\\Delta H_{vap}$).
- **Calorimetry** measures transferred heat: **constant-pressure** (coffee-cup) vs. **constant-volume** (bomb).
`,
      detail: `
#### Temperature vs. heat
The biggest barrier to understanding heat is confusing it with temperature.

| | **Temperature ($T$)** | **Heat ($Q$)** |
|---|---|---|
| What it measures | **Average kinetic energy** of particles | **Energy transferred** between objects |
| Function type | State function | **Process function** |
| Depends on amount? | No (intensive) | Yes (extensive) |
| Scales | Fahrenheit, Celsius, **Kelvin** | joule (J), calorie (cal) |

A hot object is **not** necessarily higher in total thermal energy — a large vat of lukewarm water can hold more heat than a tiny cup of very hot water (amount matters).

:::keyconcept
**Heat ≠ temperature.** Heat is a form of energy that flows into or out of a system; temperature measures the average kinetic energy of its particles.
:::

The absolute scale **Kelvin** comes from the **third law of thermodynamics**: nothing can exist below **0 K**, the point at which a system can lose no further heat.

#### Heat as energy transfer
**Heat ($Q$)** is energy transferred between substances because of a **temperature difference** (the **zeroth law**: objects are in thermal equilibrium only when their temperatures are equal). From the first law, $\\Delta U = Q - W$.

| | Sign convention | Direction of heat |
|---|---|---|
| **Endothermic** | $Q > 0$ | System **absorbs** heat |
| **Exothermic** | $Q < 0$ | System **releases** heat |

Units: $1\\text{ cal} = 4.184\\text{ J}$. **Enthalpy ($\\Delta H$) equals heat ($Q$) under constant pressure** — the assumption the MCAT usually makes.

:::realworld
**Sweat cools by evaporating, not by being produced.** Evaporation (liquid → gas) is **endothermic**, absorbing heat from the body. Dry desert air (low water-vapor partial pressure) lets sweat evaporate faster than humid air does — which is why dry heat feels more comfortable than humid heat.
:::

#### Specific heat and heat capacity
Heat with a temperature change is calculated with:

$$q = mc\\Delta T$$

where $m$ = mass, $c$ = **specific heat**, and $\\Delta T$ = temperature change (°C or K).

:::mnemonic
The heat equation is the exam you're studying for: **$q = mc\\Delta T$ looks like "q = MCAT."**
:::

| Quantity | Definition | Note |
|---|---|---|
| **Specific heat ($c$)** | Energy to raise **1 g** by **1 °C** (or 1 K) | Intrinsic; water $= 1\\text{ cal/g·°C} = 4.184\\text{ J/g·°C}$ |
| **Heat capacity ($mc$)** | Energy to raise the **whole sample** by 1 °C | Product of mass × specific heat |

A glass of water and a swimming pool have the **same specific heat** but very different **heat capacities** (the pool has far more mass).

:::realworld
Walking barefoot, blacktop feels far hotter than a wooden walkway at the **same temperature** — different materials have different **specific heats**.
:::

#### Constant-pressure vs. constant-volume calorimetry
**Calorimetry** measures transferred heat.

| | **Constant-pressure (coffee-cup)** | **Constant-volume (bomb)** |
|---|---|---|
| Setup | Insulated cup + lid, solution inside | Sealed steel "decomposition vessel" in a water bath |
| Held constant | **Pressure** (atmospheric) | **Volume** |
| Work done | Some ($P\\Delta V$ possible) | **Zero** ($\\Delta V = 0 \\Rightarrow W = 0$) |
| Measures | $\\Delta H$ (heat at constant $P$) | Heat of **combustion** |
| Example use | Dissolution, neutralization | Caloric content of foods/fuels |

In the **bomb calorimeter**, a sample (often a hydrocarbon) is ignited in nearly pure $\\text{O}_2$ inside a sealed steel vessel immersed in a known mass of water. Because $W = P\\Delta V$ and $\\Delta V = 0$, $W_{calorimeter} = 0$. The insulation makes the whole device **isolated** (adiabatic with the universe), so $Q_{calorimeter} = 0$:

$$\\Delta U_{system} + \\Delta U_{surroundings} = Q_{calorimeter} - W_{calorimeter} = 0$$

Therefore $\\Delta U_{system} = -\\Delta U_{surroundings}$ — the heat released by the sample (system) is absorbed by the water (surroundings), letting us calculate the **heat of combustion**.

:::expertise
For two-object equilibrium ("final temperature of a mixture") problems, set up **$q_{cold} = -q_{hot}$**: the colder object gains thermal energy and the hotter loses it. This avoids the sign-notation traps of $\\Delta T$. A 1000 K metal bar is hotter than 298 K water *even though water has a high specific heat.*
:::

#### Heating curves and phase changes

![Figure 7.7 — Heating curve for a single compound: temperature plateaus at each phase change.](${fig(2, 3).src})

As a compound is heated, temperature rises until a phase-transition temperature, then **plateaus** while the phase change occurs, then rises again once the transition is complete. During the plateau **$\\Delta T = 0$**, so $q = mc\\Delta T$ would wrongly give $q = 0$ — the added heat is breaking intermolecular forces, not raising temperature.

:::keyconcept
We need a **different** formula when $\\Delta T = 0$. During a phase change, use $q = mL$ — otherwise $q = mc\\Delta T$ would erroneously give zero.
:::

For phase changes, use enthalpy-based **latent heat**:

$$q = mL$$

where $L$ is the **latent heat** (enthalpy of an isothermal phase change):

| Boundary | Latent heat | Sign on melting/vaporizing | Sign on the reverse |
|---|---|---|---|
| Solid ↔ liquid | **Heat of fusion ($\\Delta H_{fus}$)** | $+$ (heat added) | $-$ (heat removed) |
| Liquid ↔ gas | **Heat of vaporization ($\\Delta H_{vap}$)** | $+$ | $-$ |

The total heat to cross **multiple** phase boundaries is the **sum** of the $q = mc\\Delta T$ terms (within each phase) **and** the $q = mL$ terms (at each boundary).

:::expertise
Don't memorize every $c$ and $\\Delta H$ value — the MCAT provides constants, especially for non-water systems. But do practice **multistep heating-curve** calculations for water until they're automatic.
:::
`
    },

    /* ──────────────────────────── 7.4 Enthalpy ──────────────────────────── */
    {
      id: 's4', num: '7.4', title: 'Enthalpy',
      goals: [
        'Distinguish between endothermic and exothermic reactions',
        'Determine the enthalpy of a reaction from heats of formation, Hess\'s law, or bond dissociation energies'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 7.8 — Hess\'s law: because enthalpy is a state function, the total ΔH for A → D equals the sum of the stepwise enthalpy changes.' }],
      recap: `
- **Enthalpy ($H$)** is heat content at constant pressure; it's a **state function**, so only $\\Delta H$ can be measured: $\\Delta H_{rxn} = H_{products} - H_{reactants}$.
- **$\\Delta H_{rxn} > 0$ → endothermic**; **$\\Delta H_{rxn} < 0$ → exothermic.**
- **Standard heat of formation ($\\Delta H^\\circ_f$)** = enthalpy to form **1 mol** of compound from elements in their standard states; $\\Delta H^\\circ_f$ of an element in its standard state is **0**.
- **Standard heat of reaction:** $\\Delta H^\\circ_{rxn} = \\sum \\Delta H^\\circ_{f,\\text{products}} - \\sum \\Delta H^\\circ_{f,\\text{reactants}}$.
- **Hess's law:** enthalpy changes are **additive** — path independent. Also computable from **bond dissociation energies**: $\\Delta H^\\circ_{rxn} = \\sum \\Delta H_{\\text{bonds broken}} - \\sum \\Delta H_{\\text{bonds formed}}$.
`,
      detail: `
#### Enthalpy and the sign of ΔH
Most lab reactions run at **constant pressure (1 atm)** in closed systems, so chemists track heat as **enthalpy ($H$)**. Enthalpy is a **state function**, so $\\Delta H$ is found by comparing final to initial states, **regardless of path**:

$$\\Delta H_{rxn} = H_{products} - H_{reactants}$$

| Sign of $\\Delta H_{rxn}$ | Process | Heat |
|---|---|---|
| **Positive** ($+$) | **Endothermic** | Absorbed by system |
| **Negative** ($-$) | **Exothermic** | Released by system |

Absolute enthalpy cannot be measured directly — only $\\Delta H$ — so several methods exist to calculate it.

#### Standard heat of formation
The **standard enthalpy of formation ($\\Delta H^\\circ_f$)** is the enthalpy to produce **one mole** of a compound from its elements in their **standard states**.

- $\\Delta H^\\circ_f$ of an **element in its standard state is zero**, by definition.
- $\\Delta H^\\circ_f$ values are **tabulated** and provided on the MCAT — no need to memorize them.

#### Standard heat of reaction
The **standard enthalpy of reaction ($\\Delta H^\\circ_{rxn}$)** for a reaction under standard conditions:

$$\\Delta H^\\circ_{rxn} = \\sum \\Delta H^\\circ_{f,\\text{products}} - \\sum \\Delta H^\\circ_{f,\\text{reactants}}$$

#### Hess's law
Because enthalpy is a state function, the **path is irrelevant**. **Hess's law:** when thermochemical equations are **added** to give a net reaction, their heats of reaction **add** too.

- The enthalpy of the **reverse** reaction has the **same magnitude, opposite sign**: $\\Delta H_{\\text{reactants}\\to\\text{elements}} = -\\Delta H_{\\text{elements}\\to\\text{reactants}}$.
- Any reaction can be viewed as breaking reactants into elements, then building products from those elements — which is exactly why $\\Delta H^\\circ_{rxn} = \\sum \\Delta H^\\circ_{f,\\text{products}} - \\sum \\Delta H^\\circ_{f,\\text{reactants}}$.
- Hess's law applies to **any state function** — including **entropy** and **Gibbs free energy**.

:::keyconcept
**State functions are always path independent.** As long as the initial and final states are fixed, $\\Delta H$ is the same no matter which route the process takes.
:::

:::expertise
When combining equations for a Hess's-law problem: **flip the sign of $\\Delta H$ when you reverse an equation**, and **multiply $\\Delta H$ by the same coefficient** you use to scale the equation.
:::

#### Bond dissociation energy
Hess's law can be recast in terms of **bond enthalpies** (a.k.a. **bond dissociation energies**) — the **average** energy to break a particular bond in the **gas phase**.

- **Bond breaking is endothermic** (energy in); **bond formation is exothermic** (energy out) — atoms form bonds to become more stable.
- Bond enthalpies are **averages** over many compounds (e.g., the C–H value is averaged across thousands of organic molecules).

$$\\Delta H^\\circ_{rxn} = \\sum \\Delta H_{\\text{bonds broken}} - \\sum \\Delta H_{\\text{bonds formed}} = \\text{energy absorbed} - \\text{energy released}$$

| Bond | Sample bond enthalpy (kJ/mol) |
|---|---|
| **O=O** | 498 |
| **C–H** | 415 |
| **H–H** | 436 |

*Table 7.1 — Sample bond enthalpies.*

:::keyconcept
**Bond breakage is endothermic; bond formation is exothermic.** It takes energy to pull bonded atoms apart, and energy is released when a new (more stable) bond forms.
:::

#### Standard heat of combustion
The **standard heat of combustion ($\\Delta H^\\circ_{comb}$)** is the enthalpy of burning a fuel. Because $\\Delta H$ measurement requires a **spontaneous, fast** reaction, combustion is ideal.

- Usually the oxidant is atmospheric **$\\text{O}_2$**, but others exist (e.g., $\\text{F}_2$; $\\text{H}_2$ combusting with $\\text{Cl}_2$ to form HCl gas).
- **Longer hydrocarbon chains** yield more combustion products and release **more heat** (more exothermic).

##### Glycolysis as combustion

![Figure 7.9 — Determining the enthalpy of glycolysis as a combustion reaction.](${fig(3, 4).src})

The glycolytic pathway is itself a combustion reaction — a fuel (glucose) plus an oxidant ($\\text{O}_2$) yielding $\\text{CO}_2$ and water:

$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\,\\text{O}_2 \\rightarrow 6\\,\\text{CO}_2 + 6\\,\\text{H}_2\\text{O}$$

Its overall enthalpy is found by Hess's law across the many steps.

:::keyconcept
**The larger the alkane reactant, the more numerous the combustion products** — and the more exothermic the combustion.
:::
`
    },

    /* ──────────────────────────── 7.5 Entropy ──────────────────────────── */
    {
      id: 's5', num: '7.5', title: 'Entropy',
      goals: [
        'Order the phases of matter from lowest to highest entropy',
        'Define entropy in terms of energy distribution and disorder',
        'Predict the direction of entropy change in a given reaction'
      ],
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'Figure 7.10 — Entropy as "time\'s arrow": energy spontaneously disperses, giving processes a recognizable before-and-after direction.' }],
      recap: `
- **Entropy ($S$)** measures the **spontaneous dispersal of energy** at a given temperature — better than the loose "disorder" analogy.
- **Phase order (low → high entropy): solid < liquid < gas.** **Sublimation** gives the largest entropy increase; **deposition** the largest decrease.
- **Second law:** energy spontaneously disperses if unhindered → $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$.
- $\\Delta S = \\dfrac{Q_{rev}}{T}$ — energy *into* a system raises $S$; energy *out* lowers it. Units: J/(mol·K).
- Entropy is a **state function**: $\\Delta S^\\circ_{rxn} = \\sum \\Delta S^\\circ_{f,\\text{products}} - \\sum \\Delta S^\\circ_{f,\\text{reactants}}$.
`,
      detail: `
#### What entropy really is
Many "normal" events share a hidden theme: hot tea cools, ice melts, iron rusts, balloons deflate, things decay. In **every** case, energy goes from **localized/concentrated** to **spread out/dispersed**.

**Entropy ($S$)** is the measure of this **spontaneous dispersal of energy** at a specific temperature — how widely energy is spread in a process.

:::keyconcept
Be careful with the "**disorder**" analogy — the messy-room picture **misleads** more than it helps. Think instead of **energy dispersal**.
:::

#### Phases ranked by entropy
| Rank | Phase | Why |
|---|---|---|
| Lowest $S$ | **Solid** | Particles locked in a lattice |
| Middle $S$ | **Liquid** | Particles move past one another |
| Highest $S$ | **Gas** | Particles fill the container freely |

:::keyconcept
Phase-change entropy is easy to estimate: **freezing decreases** entropy (disordered liquid → ordered solid); **boiling increases** it greatly (liquid → much more dispersed gas). **Sublimation** (solid → gas) is the phase transition with the **greatest increase** in entropy.
:::

#### The second law of thermodynamics
The **second law**: energy spontaneously disperses from localized to spread-out **if not hindered**. It does *not* say energy can never be concentrated — but concentrating it requires **work** (e.g., a refrigerator consumes energy to pump heat against the gradient).

The second law is "**time's arrow**": you instantly know whether a video of an explosion runs forward or backward. For the universe as a whole:

$$\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$$

The entropy of the universe is always **increasing**.

#### Calculating entropy change
$$\\Delta S = \\frac{Q_{rev}}{T}$$

where $Q_{rev}$ is heat gained/lost in a **reversible** process and $T$ is in **kelvin**. Units are usually **J/(mol·K)**.

- Energy distributed **into** a system → entropy **increases**.
- Energy distributed **out of** a system → entropy **decreases**.

Entropy is a **state function**, so $\\Delta S$ is **path independent**:

$$\\Delta S^\\circ_{rxn} = \\sum \\Delta S^\\circ_{f,\\text{products}} - \\sum \\Delta S^\\circ_{f,\\text{reactants}}$$

#### Predicting the direction of entropy change
| Reaction | $\\Delta S$ | Reason |
|---|---|---|
| $\\text{H}_2\\text{O}\\,(l) \\rightarrow \\text{H}_2\\text{O}\\,(s)$ | **Decrease** | Freezing → more ordered |
| Dry ice $\\rightarrow \\text{CO}_2\\,(g)$ | **Increase** | Sublimation → gas |
| $\\text{NaCl}\\,(s) \\rightarrow \\text{NaCl}\\,(aq)$ | **Increase** | Dissolution disperses ions |
| $\\text{N}_2\\,(g) + 3\\,\\text{H}_2\\,(g) \\rightarrow 2\\,\\text{NH}_3\\,(g)$ | **Decrease** | Fewer moles of gas (4 → 2) |
| Ice pack placed on a wound | **Increase** | Heat transferred/dispersed |

:::mnemonic
**Gas wins, solid loses.** Any change that makes **more gas** (or more moles of gas, or dissolves a solid) **increases** entropy; any change that makes a **more ordered** phase **decreases** it.
:::
`
    },

    /* ──────────────────────── 7.6 Gibbs Free Energy ──────────────────────── */
    {
      id: 's6', num: '7.6', title: 'Gibbs Free Energy',
      goals: [
        'Determine the Gibbs free energy of a reaction at varying temperatures',
        'Predict the temperature at which a temperature-dependent reaction reaches equilibrium',
        'Identify how changing reactant/product concentrations alters reaction progress'
      ],
      images: [{ src: fig(5, 0).src, alt: fig(5, 0).alt, caption: 'Figure 7.11 — Gibbs free energy and spontaneity: a system rolls "downhill" toward the free-energy minimum at equilibrium.' }],
      recap: `
- **$\\Delta G = \\Delta H - T\\Delta S$** ("Goldfish are Horrible without Tartar Sauce") — the master equation for spontaneity. $T$ is in **kelvin** (always positive).
- **$\\Delta G < 0$ → spontaneous (exergonic);** **$\\Delta G > 0$ → nonspontaneous (endergonic);** **$\\Delta G = 0$ → equilibrium** ($\\Delta H = T\\Delta S$).
- **Spontaneity table:** signs of $\\Delta H$ and $\\Delta S$ set the outcome; when they **match**, $\\Delta G$ is **temperature dependent**.
- Don't confuse **endergonic/exergonic** (free energy) with **endothermic/exothermic** (enthalpy).
- **$\\Delta G^\\circ_{rxn} = -RT\\ln K_{eq}$**; for a reaction in progress, **$\\Delta G_{rxn} = \\Delta G^\\circ_{rxn} + RT\\ln Q$**.
`,
      detail: `
#### The Gibbs free energy equation
**Gibbs free energy ($G$)** combines temperature, enthalpy, and entropy. $\\Delta G$ is the **maximum energy available to do useful work** (at constant $T$, $P$) and tells us whether a process is spontaneous:

$$\\Delta G = \\Delta H - T\\Delta S$$

where $T$ is in **kelvin** and $T\\Delta S$ is the energy absorbed as entropy increases reversibly.

:::mnemonic
**$\\Delta G = \\Delta H - T\\Delta S$:** **G**oldfish **a**re **H**orrible **w**ithout **T**artar **S**auce. (are = $=$, without = $-$.)
:::

#### Spontaneity: the valley analogy
Picture $G$ as a **valley between two hills**: a system rolls "downhill" toward the lowest point (**equilibrium**). Any system moves in whatever direction **lowers** its free energy.

| $\\Delta G$ | Direction | Term | Meaning |
|---|---|---|---|
| $\\Delta G < 0$ | Toward equilibrium | **Exergonic** | **Spontaneous** (releases energy) |
| $\\Delta G > 0$ | Away from equilibrium | **Endergonic** | **Nonspontaneous** (absorbs energy) |
| $\\Delta G = 0$ | At equilibrium | — | No net change; $\\Delta H = T\\Delta S$ |

![Figure 7.12 — Exergonic reaction profile: energy released, ΔG < 0 (spontaneous).](${fig(5, 1).src})

![Figure 7.13 — Endergonic reaction profile: energy absorbed, ΔG > 0 (nonspontaneous).](${fig(5, 2).src})

At equilibrium the system resists change and $\\Delta G = 0$. For a gas–solid phase equilibrium, $\\Delta G = G(g) - G(s) = 0$, so $G(g) = G(s)$.

:::expertise
Don't confuse **endergonic/exergonic** (describing **Gibbs free energy / $\\Delta G$**) with **endothermic/exothermic** (describing **enthalpy / $\\Delta H$**).
:::

:::keyconcept
**Thermodynamics and kinetics are separate.** A thermodynamically spontaneous reaction ($\\Delta G < 0$) says **nothing** about its rate — it only means the reaction will proceed *eventually* without external energy. Rate depends on the **activation energy ($E_a$)**.
:::

#### Effect of ΔH, ΔS, and T on spontaneity
Because $T$ (in kelvin) is always positive, the **signs** of $\\Delta H$ and $\\Delta S$ determine spontaneity:

| $\\Delta H$ | $\\Delta S$ | Outcome |
|---|---|---|
| $+$ | $+$ | **Spontaneous at high $T$** (temperature dependent) |
| $+$ | $-$ | **Nonspontaneous at all $T$** |
| $-$ | $+$ | **Spontaneous at all $T$** |
| $-$ | $-$ | **Spontaneous at low $T$** (temperature dependent) |

*Table 7.2 — Effects of $\\Delta H$, $\\Delta S$, and $T$ on spontaneity.*

:::keyconcept
**$\\Delta G$ is temperature dependent when $\\Delta H$ and $\\Delta S$ have the *same* sign.** Then the reaction switches between spontaneous and nonspontaneous as $T$ crosses a threshold.
:::

##### Boiling as a temperature-dependent process
Boiling breaks hydrogen bonds, so $\\Delta H > 0$; gas formation disperses energy, so $\\Delta S > 0$ (both positive → temperature dependent). The reaction is spontaneous only when $T\\Delta S > \\Delta H$, i.e. above **373 K (100 °C)**. At exactly 100 °C, $\\Delta H - T\\Delta S = 0$ and liquid–gas **equilibrium** holds — vapor pressure equals ambient pressure, the very definition of the **boiling point**.

#### Kinetic vs. thermodynamic control
Rate depends on **$E_a$**, not $\\Delta G$. When a reversible reaction can give two products:

- **Kinetic control** (early): the product formed **fastest** (lower $E_a$) dominates.
- **Thermodynamic control** (given time): the **more stable** product (lower free energy) dominates, until equilibrium ($K_{eq}$) is reached.

#### Standard Gibbs free energy
Under standard conditions (1 M solutions, 298 K, 1 atm), the **standard free energy ($\\Delta G^\\circ_{rxn}$)** applies. The **standard free energy of formation ($\\Delta G^\\circ_f$)** of an element in its standard state is **zero**. Like enthalpy and entropy:

$$\\Delta G^\\circ_{rxn} = \\sum \\Delta G^\\circ_{f,\\text{products}} - \\sum \\Delta G^\\circ_{f,\\text{reactants}}$$

#### Free energy, K_eq, and Q
We relate the **standard** free energy to the equilibrium constant:

$$\\Delta G^\\circ_{rxn} = -RT\\ln K_{eq}$$

where $R$ is the gas constant and $T$ is in kelvin. The larger $K_{eq}$, the more **negative** $\\Delta G^\\circ$ and the more **spontaneous** the reaction.

Once a reaction is **in progress**, the 1 M standard state no longer holds, so replace $K_{eq}$ with the **reaction quotient $Q$**:

$$\\Delta G_{rxn} = \\Delta G^\\circ_{rxn} + RT\\ln Q$$

| Condition | $\\ln(Q/K_{eq})$ | $\\Delta G$ | Direction |
|---|---|---|---|
| $Q < K_{eq}$ | Negative | $\\Delta G < 0$ | **Forward** (spontaneous) toward equilibrium |
| $Q > K_{eq}$ | Positive | $\\Delta G > 0$ | **Reverse** toward equilibrium |
| $Q = K_{eq}$ | $\\ln 1 = 0$ | $\\Delta G = 0$ | **At equilibrium** |

:::keyconcept
The $Q$ form mirrors the $K_{eq}$ form, but using $Q$ signals the system is **not** at equilibrium. The sign of $\\Delta G$ then tells you which way the reaction must shift to reach it.
:::

#### Catalysts

![Figure 7.14 — Catalysts lower activation energy but do not change ΔG, Keq, or equilibrium position.](${fig(5, 3).src})

A **catalyst** lowers the **activation energy** but does **not** change the overall **$\\Delta G$**, $K_{eq}$, or equilibrium position — it speeds up kinetics only.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Systems and Processes',
        points: [
          'Systems are classified by what crosses the boundary: **isolated** (neither matter nor energy), **closed** (energy only), **open** (energy + matter).',
          'Processes are named by the property held constant: **isothermal** (constant $T$, $\\Delta U = 0$), **adiabatic** ($Q = 0$), **isobaric** (constant $P$), **isovolumetric/isochoric** (constant $V$, $W = 0$).',
          'The **first law**, $\\Delta U = Q - W$, simplifies under each special process.',
          'A **spontaneous** process proceeds without outside energy; coupling can drive a nonspontaneous reaction with a spontaneous one.'
        ]
      },
      {
        section: 'States and State Functions',
        points: [
          '**State functions** ($P$, $\\rho$, $T$, $V$, $H$, $U$, $G$, $S$) describe an equilibrium state and are **path independent**; **process functions** ($W$, $Q$) describe the path.',
          '**Standard conditions** = 298 K, 1 atm, 1 M (thermodynamics); **STP** = 273 K, 1 atm (gas laws).',
          'Phase changes occur at characteristic $T$ and $P$: fusion/freezing (solid–liquid), vaporization/condensation (liquid–gas), sublimation/deposition (solid–gas).',
          'On a phase diagram, the **triple point** has all three phases in equilibrium; above the **critical point** liquid and gas are indistinguishable.'
        ]
      },
      {
        section: 'Heat',
        points: [
          '**Temperature** is average kinetic energy; **heat** is energy transferred due to a temperature difference. They are not the same.',
          'Use $q = mc\\Delta T$ when temperature changes; use $q = mL$ during a phase change (when $\\Delta T = 0$).',
          '**Specific heat ($c$)** is per gram; **heat capacity ($mc$)** is for the whole sample. Water: $c = 1\\text{ cal/g·°C}$.',
          '**Constant-pressure** (coffee-cup) calorimetry measures $\\Delta H$; **constant-volume** (bomb) calorimetry measures heat of combustion.'
        ]
      },
      {
        section: 'Enthalpy',
        points: [
          '**Enthalpy** is heat content at constant pressure: $\\Delta H_{rxn} = H_{products} - H_{reactants}$; $+$ is endothermic, $-$ is exothermic.',
          '**Hess\'s law:** enthalpy changes are additive and path independent.',
          'Compute $\\Delta H$ from **heats of formation**, **heats of combustion**, or **bond dissociation energies** ($\\sum$ bonds broken $- \\sum$ bonds formed).',
          'Bond **breaking is endothermic**; bond **formation is exothermic**.'
        ]
      },
      {
        section: 'Entropy',
        points: [
          '**Entropy** measures how widely energy is dispersed; phases rank solid < liquid < gas.',
          '$\\Delta S = Q_{rev}/T$, in units of J/(mol·K); entropy is a state function.',
          'The **second law**: $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$ — the universe\'s entropy always increases.',
          'More moles of gas, dissolution, and sublimation **raise** entropy; ordering phases **lowers** it.'
        ]
      },
      {
        section: 'Gibbs Free Energy',
        points: [
          '$\\Delta G = \\Delta H - T\\Delta S$ determines spontaneity: $\\Delta G < 0$ spontaneous (forward), $\\Delta G = 0$ equilibrium, $\\Delta G > 0$ nonspontaneous (reverse).',
          '$\\Delta G$ is **temperature dependent** when $\\Delta H$ and $\\Delta S$ share a sign.',
          '$\\Delta G^\\circ_{rxn} = -RT\\ln K_{eq}$; in progress, $\\Delta G_{rxn} = \\Delta G^\\circ_{rxn} + RT\\ln Q$.',
          'Catalysts lower $E_a$ but never change $\\Delta G$, $K_{eq}$, or the equilibrium position.'
        ]
      }
    ],
    mnemonics: [
      '**State functions — "under pressure and dense, watch TV and get HUGS":** **P**ressure · **ρ** density · **T**emperature · **V**olume · **H** enthalpy · **U** internal energy · **G**ibbs free energy · **S** entropy.',
      '**Heat equation = your exam:** $q = mc\\Delta T$ looks like "**q = MCAT**."',
      '**Gibbs free energy** $\\Delta G = \\Delta H - T\\Delta S$: **G**oldfish **a**re (=) **H**orrible **w**ithout (−) **T**artar **S**auce.',
      '**ΔG spontaneity signs:** **neGative = Go** (spontaneous, exergonic); **Positive = Pause** (nonspontaneous, endergonic); **Zero = equilibrium.**',
      '**Spontaneity from ΔH/ΔS:** $-/+$ → always spontaneous (the "**dream**" reaction); $+/-$ → never; **same signs** → temperature dependent (high $T$ if both $+$, low $T$ if both $-$).',
      '**Calorimeters:** **B**omb = constant **V**olume (think "**B**oxed in"); **C**offee-**C**up = **C**onstant pressure.',
      '**Endo vs. exo:** **endo**thermic/**ender**gonic = energy **enters**; **exo**thermic/**exer**gonic = energy **exits**. Keep the *-thermic* (heat/$\\Delta H$) family separate from the *-gonic* ($\\Delta G$) family.',
      '**Bonds:** **B**reaking **B**onds **B**urns energy in (endothermic); forming bonds releases it (exothermic).'
    ],
    keyConcepts: [
      '**Thermodynamics ≠ kinetics.** $\\Delta G < 0$ guarantees a reaction is spontaneous but says nothing about its rate, which depends on activation energy $E_a$.',
      '**State functions are path independent** ($H$, $S$, $G$, $U$, $T$, $P$, $V$, $\\rho$); process functions ($Q$, $W$) depend on the route taken. This is why Hess\'s law works.',
      '**Sign conventions are everything:** $\\Delta H > 0$ endothermic, $< 0$ exothermic; $\\Delta G < 0$ spontaneous; $\\Delta S > 0$ more dispersed. The MCAT tests these signs constantly.',
      '**$\\Delta G$ is temperature dependent only when $\\Delta H$ and $\\Delta S$ have the same sign** — exactly the cases where "not enough information" is the right answer without a temperature.',
      '**Relate $\\Delta G^\\circ$ to $K_{eq}$:** $\\Delta G^\\circ = -RT\\ln K_{eq}$. Spontaneous ($\\Delta G^\\circ < 0$) ⟺ $K_{eq} > 1$; use $Q$ vs. $K_{eq}$ to predict shift direction.'
    ],
    equations: [
      { name: 'First law of thermodynamics', tex: '\\Delta U = Q - W', note: 'Internal-energy change = heat added to the system − work done by the system.' },
      { name: 'Heat transfer (no phase change)', tex: 'q = mc\\Delta T', note: '$c$ = specific heat; used only when temperature changes.' },
      { name: 'Heat transfer (during phase change)', tex: 'q = mL', note: '$L$ = latent heat ($\\Delta H_{fus}$ or $\\Delta H_{vap}$); used when $\\Delta T = 0$.' },
      { name: 'Generalized enthalpy of reaction', tex: '\\Delta H_{rxn} = H_{products} - H_{reactants}', note: '$+$ endothermic, $-$ exothermic.' },
      { name: 'Standard enthalpy of reaction', tex: '\\Delta H^\\circ_{rxn} = \\sum \\Delta H^\\circ_{f,\\text{products}} - \\sum \\Delta H^\\circ_{f,\\text{reactants}}', note: 'From standard heats of formation ($\\Delta H^\\circ_f = 0$ for an element in its standard state).' },
      { name: 'Bond enthalpy (Hess\'s law)', tex: '\\Delta H^\\circ_{rxn} = \\sum \\Delta H_{\\text{bonds broken}} - \\sum \\Delta H_{\\text{bonds formed}}', note: 'Energy absorbed (breaking) − energy released (forming).' },
      { name: 'Entropy change', tex: '\\Delta S = \\frac{Q_{rev}}{T}', note: 'Reversible heat per kelvin; units J/(mol·K).' },
      { name: 'Second law of thermodynamics', tex: '\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0', note: 'Entropy of the universe always increases for a spontaneous process.' },
      { name: 'Standard entropy of reaction', tex: '\\Delta S^\\circ_{rxn} = \\sum \\Delta S^\\circ_{f,\\text{products}} - \\sum \\Delta S^\\circ_{f,\\text{reactants}}', note: 'Computed like enthalpy, from standard entropies.' },
      { name: 'Gibbs free energy', tex: '\\Delta G = \\Delta H - T\\Delta S', note: '$\\Delta G < 0$ spontaneous; $= 0$ equilibrium; $> 0$ nonspontaneous. $T$ in kelvin.' },
      { name: 'Standard Gibbs free energy of reaction', tex: '\\Delta G^\\circ_{rxn} = \\sum \\Delta G^\\circ_{f,\\text{products}} - \\sum \\Delta G^\\circ_{f,\\text{reactants}}', note: '$\\Delta G^\\circ_f = 0$ for an element in its standard state.' },
      { name: 'Free energy from equilibrium constant', tex: '\\Delta G^\\circ_{rxn} = -RT\\ln K_{eq}', note: 'Larger $K_{eq}$ → more negative $\\Delta G^\\circ$ → more spontaneous.' },
      { name: 'Free energy from reaction quotient', tex: '\\Delta G_{rxn} = \\Delta G^\\circ_{rxn} + RT\\ln Q', note: 'For a reaction in progress; $Q < K_{eq}$ → forward, $Q > K_{eq}$ → reverse.' }
    ]
  },

  questions: raw.questions
};
