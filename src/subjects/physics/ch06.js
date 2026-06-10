// Chapter 6 — Circuits. Re-authored to the rich-formatting quality bar.
// Figures, goals, and section titles come from ch06.json; the recap/detail
// markdown is authored here. The JSON `questions` array is EMPTY, so the
// questions below are reconstructed from scratch_physics/ch06_q.md
// (stems + choices, answer key "B D B D A B A C D C C A D D C", explanations).
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 6,
  title: 'Circuits',
  subtitle: 'Current, emf & Kirchhoff\'s laws · resistance, Ohm\'s law & power · capacitance & dielectrics · meters',

  blocks: [
    /* ───────────────────────────── 6.1 Current ───────────────────────────── */
    {
      id: 's1', num: '6.1', title: 'Current',
      goals: [
        'Recall the definitions of current, voltage, electromotive force (emf), and conductivity, and the SI units for each',
        'Compare the conductivity of two solutions given their component ions',
        'Describe the relationship between voltage sources and voltage drop',
        'Use Kirchhoff\'s laws to describe the flow of charge through a circuit'
      ],
      recap: `
- **Current** $I = \\dfrac{Q}{\\Delta t}$ is the flow of charge; **conventional current** is the direction *positive* charge would flow — **opposite** to actual electron flow. SI unit: **ampère (A)**.
- The MCAT tests **direct current (DC)** only (charge flows one way); **alternating current (AC)** reverses periodically.
- **emf (ε)** is the voltage of a source with *no current flowing* — a "pressure to move," **not** a force. Units: **volts = J/C**.
- **Conductivity** = reciprocal of resistance; **ionic solutions** (NaCl) conduct well, **nonionic** (glucose) barely at all.
- **Kirchhoff's junction rule** (charge conserved): $\\sum I_{in} = \\sum I_{out}$. **Loop rule** (energy conserved): $\\sum V_{source} = \\sum V_{drop}$.
`,
      detail: `
#### Current: moving charge
In electrostatics we studied charges at rest; **current** is what happens when charge *moves*. The **magnitude of current** is the charge $Q$ passing a point per unit time:

$$I = \\frac{Q}{\\Delta t}$$

- SI unit: the **ampère (A)** $= 1\\ \\text{C/s}$.
- Because of historical convention, **current is treated as the flow of positive charge**, even though only the negatively charged **electrons** actually move.
- Electrons move from **low** electrical potential to **high** potential (lowering their PE); **conventional current** therefore points from **high → low** potential — *opposite* to electron flow.

| Pattern | Behavior | Source |
|---|---|---|
| **Direct current (DC)** | Charge flows in **one direction** only | Household **batteries** |
| **Alternating current (AC)** | Flow **reverses periodically** | Long-distance grid power |

:::expertise
Our entire circuits discussion assumes **DC**. The MCAT tests DC **to the exclusion of AC** — don't burn study time on AC.
:::

#### Conductivity
**Conductance** is the **reciprocal of resistance**; **conductivity** characterizes how freely a material passes current. SI unit: the **siemens (S)** (S/m for conductivity).

| Type | Where it occurs | Charge carrier |
|---|---|---|
| **Metallic conductivity** | Solid metals, molten salts | Free **electrons** ("sea of electrons" over a lattice of cations) |
| **Electrolytic conductivity** | Solutions | **Dissolved ions** |

- Metals conduct well because outer electrons are loosely held and delocalize across the lattice.
- For solutions, conductivity tracks **ion concentration**: distilled/deionized water ≈ **insulator**; seawater and orange juice ≈ excellent conductors.
- Nonionic solutes (e.g., glucose) contribute **far** less than ions — concentration of dissolved *ions* is what matters.

:::bridge
Metals sit on the **left of the periodic table** — lowest **ionization energies**, so they give up electrons easily. That weak hold on valence electrons is exactly why they conduct. *(MCAT General Chemistry Review, Ch. 2.)*
:::

:::realworld
Because conductivity rises with ion concentration, measuring the conductivity of a solution (placed as a resistor in a circuit) is a fast way to estimate ionic concentration — used for everything from water quality to **blood** electrolytes.
:::

#### Voltage and electromotive force (emf)
A **potential difference (voltage)** can be produced by a generator, a **galvanic (voltaic) cell**, a battery of cells — even a potato. When **no charge is moving** between a source's terminals, that voltage is the **electromotive force (emf, ε)**.

:::keyconcept
**emf is *not* a force.** It is a potential difference with units of **joules per coulomb (J/C = volts)** — *not* newtons. Think of emf as the "**pressure to move**" the charges, analogous to a pressure difference driving fluid through a tube.
:::

:::bridge
The batteries in a flashlight are **galvanic (voltaic) cells**: spontaneous **redox** reactions generate emf from the difference in **reduction potentials** of two electrodes. *(MCAT General Chemistry Review, Ch. 12.)*
:::

#### Circuit laws — Kirchhoff's two rules
Circuits obey **conservation of charge and energy** — nothing is created or destroyed. **Kirchhoff's laws** are the two bookkeeping rules.

##### Junction rule (conservation of charge)
At any **junction**, current in = current out:

$$\\sum I_{\\text{into junction}} = \\sum I_{\\text{leaving junction}}$$

:::keyconcept
The junction rule is **a fork in a river**: every water molecule reaching the fork must continue down *one* of the branches — none appear or vanish. Same for charge at a node.
:::

> **Worked example.** Three wires meet at point P. 5 A flows *into* P along wire a; 3 A flows *out* along wire b. Find the current in wire c.
> Assume $I_c$ flows out: $5 = 3 + I_c \\Rightarrow I_c = 2\\ \\text{A}$ **out of P** along wire c.

##### Loop rule (conservation of energy)
Around any **closed loop**, the source voltage equals the total voltage drop:

$$\\sum V_{\\text{source}} = \\sum V_{\\text{drop}}$$

All energy supplied by the source is fully spent by the loop's elements (converted to heat, light, sound, etc.).

:::keyconcept
If voltage *weren't* fully "used up" each loop, it would **build up** every trip around the circuit — impossible. The loop rule is conservation of energy expressed in **volts (J/C)**, not raw joules.
:::

:::mnemonic
**Kirchhoff, two laws:** **J**unction → **J**ust charge (current in = out). **L**oop → e**L**ectric energy (ΣV up = ΣV down). *"Charge at the node, energy round the loop."*
:::
`
    },

    /* ──────────────────────────── 6.2 Resistance ─────────────────────────── */
    {
      id: 's2', num: '6.2', title: 'Resistance',
      goals: [
        'Recall how the physical properties of a resistor determine its resistance',
        'Apply the formulas connecting power to current, voltage, and resistance',
        'Describe how the internal resistance of a battery impacts the circuit',
        'Contrast the effect of a resistor in series vs. in parallel and calculate total resistance'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Resistors combine in two ways — in series (left) the equivalent resistance is the sum; in parallel (right) the equivalent resistance is less than the smallest resistor.' }],
      recap: `
- **Resistance** opposes charge flow (like friction). $R = \\dfrac{\\rho L}{A}$: **directly** proportional to **resistivity ρ** and **length L**, **inversely** to **cross-sectional area A**. Most materials' R **rises with temperature**.
- **Ohm's law:** $V = IR$ — applies to one resistor, a portion of a circuit, or the whole circuit (using equivalent R).
- **Power dissipated:** $P = IV = I^2R = \\dfrac{V^2}{R}$ (all equivalent via Ohm's law). SI unit: **watt (W)**.
- **Series resistors** add: $R_s = R_1 + R_2 + \\cdots$ → **same current**, voltage divides, $R_s$ **increases** with more resistors.
- **Parallel resistors:** $\\dfrac{1}{R_p} = \\sum \\dfrac{1}{R_i}$ → **same voltage**, current divides, $R_p$ **decreases** (less than the smallest resistor).
`,
      detail: `
#### What resistance is
**Resistance** is the opposition of a material to charge flow — think **friction, drag, or viscosity** for electrons.

- **Conductors** — almost no resistance.
- **Insulators** — very high resistance.
- **Resistors** — intermediate; slow electrons without stopping them.

#### Properties of a resistor
Three geometric/material factors are captured in the resistance equation:

$$R = \\frac{\\rho L}{A}$$

| Variable | Symbol | Effect on R | Why |
|---|---|---|---|
| **Resistivity** | $\\rho$ (Ω·m) | **Directly** proportional | Intrinsic resistance of the material (copper ≪ plastic) |
| **Length** | $L$ | **Directly** proportional | Longer path = farther for electrons to travel; double $L$ → double $R$ |
| **Cross-sectional area** | $A$ | **Inversely** proportional | More **conduction pathways**; double $A$ → half $R$ |
| **Temperature** | $T$ | Usually **directly** (not in the equation) | Hotter atoms oscillate more, impeding electrons |

- A few materials buck the temperature trend: **glass, pure silicon, most semiconductors**.
- Electrical current does **not** obey the fluid continuity equation ($A_1v_1 = A_2v_2$); it follows **Kirchhoff's laws**.

:::expertise
**Derive units when stuck.** Solving $R=\\rho L/A$ for $\\rho$ gives $\\rho = \\dfrac{RA}{L}$ → (Ω)(m²)/(m) = **Ω·m**, exactly the SI unit for resistivity. Knowing how to reconstruct a unit can rescue a problem on Test Day.
:::

:::expertise
Outside generic resistors, the MCAT's favorite resistor is the **light bulb** (all appliances are resistors). Resistance also shows up *physiologically* — **airway resistance** in the lungs, **vascular resistance** to blood flow — and the same math applies.
:::

#### Ohm's law
The voltage drop across a resistor is:

$$V = IR$$

- $V$ = voltage drop, $I$ = current, $R$ = resistance in **ohms (Ω)**.
- For fixed $R$, voltage drop ∝ current; for fixed $R$, current ∝ applied emf.
- Applies to a single resistor, *any* part of a circuit, or the **whole circuit** (via equivalent resistance).
- Current is **conserved through a resistor** — no charge is gained or lost — so in **series**, the same current passes through every resistor.

##### Internal resistance of a real battery
Even wires and the battery itself have resistance. A real cell's terminal voltage is reduced from its emf by its **internal resistance** $r_{int}$:

$$V = \\varepsilon_{cell} - i\\,r_{int}$$

- With **no current** (open switch), $V = \\varepsilon$ exactly.
- With current flowing and non-negligible $r_{int}$, the delivered voltage $V < \\varepsilon$ → less available current.
- **Discharging** = the cell acts **galvanic**; **recharging** a secondary battery (external voltage drives current backward) = it acts **electrolytic**.

:::expertise
Most MCAT batteries are **"perfect batteries"** — you can ignore internal resistance unless the question explicitly gives you $r_{int}$.
:::

:::realworld
**Superconductors** are the great exception: cooled below a material-specific critical temperature (often ≪ 100 K), their resistivity **drops to zero**, eliminating internal resistance entirely.
:::

#### Power dissipated by a resistor
**Power** is the rate of energy transfer, $P = \\dfrac{W}{t}$. For a resistor, the three equivalent forms are:

$$P = IV = I^2R = \\frac{V^2}{R}$$

- SI unit: the **watt (W)** $= 1\\ \\text{J/s}$.
- All three follow from substituting **Ohm's law** ($V = IR$); pick whichever variables you're given.
- Dissipated energy becomes heat/light/sound — e.g., the red-hot coils of a **toaster**.

:::mnemonic
The power trio is the **"PIVR pie."** Start from $P = IV$; replace whichever of $I$ or $V$ you don't have using $V = IR$: replace $V$ → $I^2R$; replace $I$ → $V^2/R$. *Never memorize three formulas — memorize one substitution.*
:::

:::realworld
Since $P = IV$ is fixed for a given transmission, the **grid uses very high voltage** to carry **low current** — minimizing $I^2R$ heat losses in the wires over long distances.
:::

#### Resistors in series and parallel

##### Series

![Figure 6.1 — Resistors in series; the same current passes through each.](${fig(1, 1).src})

All current passes **sequentially** through each resistor. Voltage drops are **additive**, so resistances are **additive**:

$$V_s = V_1 + V_2 + \\cdots + V_n \\qquad R_s = R_1 + R_2 + \\cdots + R_n$$

- The set behaves as one **equivalent resistor** equal to the sum.
- $R_s$ **always increases** as more resistors are added.

:::keyconcept
**One path → one current.** In a pure series circuit the current is identical everywhere. Find the total current with $I = V/R_s$, then apply $V = IR$ to each resistor to get its individual voltage drop.
:::

> **Worked example.** A 5 V cell in series with 3 Ω, 5 Ω, 7 Ω.
> $R_s = 3+5+7 = 15\\ \\Omega$; $I = V/R_s = 5/15 = 0.33\\ \\text{A}$ (same through all).
> Drops: $V_1=(0.33)(3)=1.0\\ \\text{V}$, $V_2=(0.33)(5)=1.67\\ \\text{V}$, $V_3=(0.33)(7)=2.33\\ \\text{V}$ — and $1.0+1.67+2.33 = 5\\ \\text{V}$. ✓

##### Parallel

![Figure 6.2 — Resistors in parallel; the voltage across each branch is equal.](${fig(1, 3).src})

Branches share a **common high-potential terminal** and a **common low-potential terminal**, so each branch sees the **same voltage**:

$$V_p = V_1 = V_2 = \\cdots = V_n \\qquad \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots + \\frac{1}{R_n}$$

- $R_p$ **always decreases** with more resistors — **less than the smallest** branch resistor (more lanes = less congestion).
- Current splits **inversely** to branch resistance: the **lowest-resistance** path carries the **most** current.
- For $n$ **identical** resistors in parallel, $R_p = \\dfrac{R}{n}$.

:::keyconcept
By the **loop rule**, if every resistor is in parallel, each branch's voltage drop equals the **source voltage**. Branch currents then come straight from Ohm's law: $I_i = V/R_i$.
:::

> **Worked example.** $R_1 = 5\\ \\Omega$, $R_2 = 10\\ \\Omega$ in parallel across 10 V.
> $\\dfrac{1}{R_p} = \\dfrac{1}{5}+\\dfrac{1}{10} = \\dfrac{3}{10} \\Rightarrow R_p = 3.33\\ \\Omega$; total $I_p = 10/3.33 = 3\\ \\text{A}$.
> Each branch: $I_1 = 10/5 = 2\\ \\text{A}$, $I_2 = 10/10 = 1\\ \\text{A}$ → $I_1+I_2 = 3\\ \\text{A}$ ✓. The **smaller** resistor (R₁) carries **twice** the current.

##### Series vs. parallel resistors — the high-yield comparison

| Property | **Resistors in series** | **Resistors in parallel** |
|---|---|---|
| Equivalent R | $R_s = R_1 + R_2 + \\cdots$ (**adds**) | $\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots$ |
| Effect of adding a resistor | $R_{eq}$ **increases** | $R_{eq}$ **decreases** (below the smallest) |
| **Current** | **Same** through every resistor | **Divides** (most through least-resistive branch) |
| **Voltage** | **Divides** (drops sum to source) | **Same** across every branch (= source) |
| Mnemonic | "**S**eries → **S**ame current" | "**P**arallel → same **P**otential" |

##### Combined circuits — simplify in pieces

![Combined series and parallel resistors — collapse parallel groups first, then add the series pieces.](${fig(2, 0).src})

:::expertise
**Circuit-solving order:** find the **total values first** — total voltage (usually the battery), then **total/equivalent resistance**, then **total current** ($I = V/R_{eq}$). Collapse parallel clusters into single equivalents, then add series pieces, working inward to outward.
:::

:::mnemonic
**"Series Same-current, Parallel same-Potential."** And the equivalent-resistance behavior is **back-to-front**: series *adds* (goes **up**), parallel *reciprocal-adds* (goes **down**).
:::
`
    },

    /* ──────────────────── 6.3 Capacitance and Capacitors ─────────────────── */
    {
      id: 's3', num: '6.3', title: 'Capacitance & Capacitors',
      goals: [
        'Predict the behavior of a capacitor while charging and discharging',
        'Describe the impact of a dielectric on capacitance, voltage, and charge',
        'Recognize the physical properties that determine a capacitor\'s capacitance',
        'Contrast the effect of a capacitor in series vs. in parallel'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Capacitors in series (Figure 6.3): the equivalent capacitance decreases — the reciprocal sum, mirroring resistors in parallel.' }],
      recap: `
- A **capacitor** stores charge at a voltage: $C = \\dfrac{Q}{V}$. SI unit: the **farad (F) = C/V** (huge — usually μF or pF).
- **Parallel-plate** capacitance is geometric: $C = \\dfrac{\\varepsilon_0 A}{d}$ → **more plate area** or **less separation** → more capacitance.
- Stored energy: $U = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}$; uniform field $E = \\dfrac{V}{d}$.
- A **dielectric** (insulator, constant **κ ≥ 1**) always **raises** capacitance: $C' = \\kappa C$. **Isolated** capacitor → V drops; **in-circuit** capacitor → Q rises.
- **Capacitors are backwards from resistors:** **series** $\\dfrac{1}{C_s}=\\sum\\dfrac{1}{C_i}$ (**decreases**); **parallel** $C_p = \\sum C_i$ (**increases**).
`,
      detail: `
#### What a capacitor does
A **capacitor** holds charge at a particular voltage. Connect two neutral plates to a source: **+Q** builds on the plate at the higher-potential terminal, **−Q** on the other. The MCAT uses the **parallel-plate capacitor** exclusively.

The **capacitance** is the charge stored per unit voltage:

$$C = \\frac{Q}{V}$$

- SI unit: the **farad (F)** $= 1\\ \\text{C/V}$. One coulomb is enormous, so real capacitors are **microfarads** ($1\\ \\mu\\text{F}=10^{-6}\\ \\text{F}$) or **picofarads** ($1\\ \\text{pF}=10^{-12}\\ \\text{F}$).

:::keyconcept
Don't confuse the **farad (F)**, the unit of capacitance, with the **Faraday constant (F ≈ 96,485 C/mol)**, the charge of one mole of electrons from electrochemistry. Same letter, totally different quantity.
:::

#### Parallel-plate geometry
For a parallel-plate capacitor, capacitance depends only on geometry and the medium:

$$C = \\frac{\\varepsilon_0 A}{d}$$

- $\\varepsilon_0$ = permittivity of free space, $A$ = plate overlap area, $d$ = plate separation.
- **Bigger area → more C; larger gap → less C.**

The separated charge creates a **uniform electric field** between the plates:

$$E = \\frac{V}{d}$$

directed from the **positive plate toward the negative plate** (the direction a positive test charge would accelerate).

:::keyconcept
$E = V/d$ comes straight from electrostatics: if $V = E \\cdot r$ and $r$ is the plate gap $d$, then $V = Ed$. *(MCAT Physics and Math Review, Ch. 5.)*
:::

#### Stored energy
A capacitor stores energy as **charge separation at a voltage** (like a dam holding water at a height):

$$U = \\frac{1}{2}CV^2 = \\frac{1}{2}QV = \\frac{Q^2}{2C}$$

#### Dielectric materials
A **dielectric** is just an **insulator** (air, glass, plastic, ceramic, metal oxide) inserted between the plates. It raises capacitance by the **dielectric constant κ**:

$$C' = \\kappa C$$

- **κ measures insulating ability**; a **vacuum has κ = 1 by definition**, air ≈ slightly above 1, glass ≈ 4.7, rubber ≈ 7.
- Any relevant κ values are **given on Test Day** — don't memorize them.

:::keyconcept
A dielectric can **never decrease** capacitance, so **κ ≥ 1** always.
:::

:::mnemonic
Plug κ into the geometry equation and a capacitor is **"CAκed" with charge**: $C = \\dfrac{\\kappa \\varepsilon_0 A}{d}$ — **C**, **A**, **κ**, **ε** all on top.
:::

##### Isolated vs. in-circuit dielectric — the classic discrimination
What the dielectric *increases* is always capacitance; **what changes to make that happen depends on the setup.**

| Insert dielectric into… | Held constant | Capacitance | The variable that moves |
|---|---|---|---|
| **Isolated** capacitor (disconnected) | **Charge Q** (no source to add charge) | $\\times\\kappa$ | **Voltage decreases** (dielectric shields the charges) |
| **In-circuit** capacitor (connected to source) | **Voltage V** (fixed by the source) | $\\times\\kappa$ | **Charge increases** (more charge drawn from source) |

> **Worked example (isolated).** Isolated 3 μF capacitor at 4 V, insert ceramic κ = 2.
> Charge can't change: $Q' = Q = CV = (3)(4) = 12\\ \\mu\\text{C}$. New $C' = \\kappa C = 6\\ \\mu\\text{F}$. New $V' = Q/C' = 12/6 = 2\\ \\text{V}$ (**halved**).

> **Worked example (in-circuit).** 3 μF capacitor on a 4 V battery, insert ceramic κ = 2.
> Voltage fixed by battery: $V' = 4\\ \\text{V}$. New $C' = 6\\ \\mu\\text{F}$. New $Q' = C'V' = (6)(4) = 24\\ \\mu\\text{C}$ (**doubled**).

:::realworld
The clinical capacitor is the **defibrillator**: it charges (the rising whine = electrons piling onto the plates), then dumps its stored energy in one surge through the heart after "**Clear!**" — so the current crosses the patient's chest, not a bystander forming a parallel path. **Lightning** is the same idea on a planetary scale: cloud and ground act as a giant parallel-plate capacitor that discharges when charge exceeds capacitance.
:::

#### Capacitors in series and parallel
Capacitors combine **opposite to resistors** — learn the *reason* and reverse the resistor math.

##### Series

![Figure 6.3 — Capacitors in series; equivalent capacitance is the reciprocal sum, so it decreases.](${fig(2, 1).src})

$$\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\cdots + \\frac{1}{C_n}$$

- Series capacitors **share the voltage drop** and behave like one capacitor with a **larger plate separation** (the $d$'s add) → **smaller** capacitance.
- $C_s$ **decreases** as more are added. Voltage across the string is the **sum** of the individual voltages (like series resistors).

##### Parallel

![Figure 6.4 — Capacitors in parallel; the equivalent capacitance is the simple sum, so it increases.](${fig(2, 2).src})

$$C_p = C_1 + C_2 + \\cdots + C_n$$

- Parallel capacitors act like **one big plate area** → capacitances **add**.
- $C_p$ **increases** as more are added. Voltage across each parallel capacitor is the **same** (equal to the source).

##### Series vs. parallel capacitors — and how they flip the resistor rules

| Property | **Capacitors in series** | **Capacitors in parallel** |
|---|---|---|
| Equivalent C | $\\dfrac{1}{C_s} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\cdots$ | $C_p = C_1 + C_2 + \\cdots$ (**adds**) |
| Effect of adding a capacitor | $C_{eq}$ **decreases** | $C_{eq}$ **increases** |
| **Voltage** | **Divides** (drops sum to source) | **Same** across each (= source) |
| Behaves like resistors in… | **parallel** (reciprocal sum) | **series** (direct sum) |

:::mnemonic
**Capacitors are the mirror image of resistors.** **Series capacitors reciprocal-add** (like parallel resistors); **parallel capacitors just add** (like series resistors). *Remember one set, flip it for the other.*
:::
`
    },

    /* ─────────────────────────────── 6.4 Meters ──────────────────────────── */
    {
      id: 's4', num: '6.4', title: 'Meters',
      goals: [
        'Recall what ammeters, voltmeters, and ohmmeters measure, where each is placed, and its ideal resistance',
        'Determine whether multiple meters can be placed together in one circuit'
      ],
      recap: `
- **Ammeter** — measures **current**; wired **in series**; ideal resistance **= 0 Ω** (no voltage drop). Needs an **active** circuit.
- **Voltmeter** — measures **voltage drop**; wired **in parallel**; ideal resistance **= ∞** (draws no current). Needs an **active** circuit.
- **Ohmmeter** — measures **resistance**; **self-powered**, so the circuit may be **off**; ideal resistance **= 0 Ω**.
- A meter's ideal resistance is chosen so it **doesn't perturb the circuit** it's measuring; voltmeters and ammeters **can** coexist in one circuit.
`,
      detail: `
#### The three meters
Real circuits are measured with meters, each engineered to read its quantity **without disturbing** the circuit.

| Meter | Measures | Placement | Ideal resistance | Why that resistance |
|---|---|---|---|---|
| **Ammeter** | **Current** | **In series** with the point of interest | **0 Ω** | A series element with 0 Ω causes **no voltage drop** and doesn't reduce current |
| **Voltmeter** | **Voltage drop** (potential difference) | **In parallel** across the element | **∞** | An infinite-resistance parallel branch draws **no current**, so it doesn't divert charge |
| **Ohmmeter** | **Resistance** | Across the element (its own circuit) | **0 Ω** | **Self-powered**; supplies a known voltage and reads the resulting current |

#### How each works
- **Ammeter** — inserted **in series**; uses the magnetic effect of a current-carrying wire to move a needle/display. A high current is handled with a low-resistance **shunt** in **parallel**. The circuit must be **on** or it reads 0 A.
- **Voltmeter** — also magnetic, but wired **in parallel** across two points to read their potential difference. Must be on; ideal **infinite** resistance keeps it from creating an alternate current path.
- **Ohmmeter** — the odd one out: it has its **own battery** and **does not need an active circuit** (an active circuit can damage it or give false readings). It applies a known voltage and functions as an ammeter, then back-calculates $R$ via **Ohm's law**.

:::keyconcept
Match **placement** to **ideal resistance**: a **series** meter (ammeter, ohmmeter) wants **0 Ω** so it adds nothing to the line; a **parallel** meter (voltmeter) wants **∞ Ω** so it steals no current. The ideal resistance always serves the goal of **minimal impact** on the circuit.
:::

:::mnemonic
**"A is for Series, V is for Parallel — opposite alphabet, opposite resistance."** **A**mmeter → series → **zero** R. **V**oltmeter → parallel (think two prongs straddling the element) → **infinite** R.
:::

Because both are designed for minimal impact, a **voltmeter and an ammeter can** be used together in the same circuit without corrupting each other's readings.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '6.1 Current',
        points: [
          '**Current** is charge moving between two points at different potential; by convention it is the flow of **positive** charge from high to low potential, though **electrons** actually move from low to high.',
          'Current flows only in **conductive** materials: **metallic** conduction = free electrons; **electrolytic** conduction = solution ion concentration; **insulators** don\'t conduct.',
          '**Kirchhoff\'s junction rule** (charge conserved): $\\sum I_{in} = \\sum I_{out}$ at any node.',
          '**Kirchhoff\'s loop rule** (energy conserved): in a closed loop, $\\sum V_{source} = \\sum V_{drop}$.'
        ]
      },
      {
        section: '6.2 Resistance',
        points: [
          '**Resistance** opposes electron movement; **resistors** slow electrons without stopping them.',
          'Resistance depends on **resistivity, length, cross-sectional area** (and temperature): $R = \\dfrac{\\rho L}{A}$.',
          '**Ohm\'s law** $V = IR$: for fixed R, current ∝ voltage drop.',
          '**Series** resistors are **additive** (R increases); **parallel** resistors **decrease** equivalent R.',
          'Each resistor dissipates **power** $P = IV = I^2R = V^2/R$.'
        ]
      },
      {
        section: '6.3 Capacitance and Capacitors',
        points: [
          'Capacitors **store and discharge** electrical potential energy; $C = Q/V$.',
          'Parallel-plate capacitance is set by **plate area** and **plate separation**: $C = \\dfrac{\\varepsilon_0 A}{d}$.',
          '**Series** capacitors **decrease** equivalent capacitance; **parallel** capacitors **add** (increase).',
          '**Dielectrics** (insulators) raise capacitance by the **dielectric constant κ** ($C\' = \\kappa C$, κ ≥ 1).'
        ]
      },
      {
        section: '6.4 Meters',
        points: [
          '**Ammeters** go **in series** to measure current; negligible (ideally 0 Ω) resistance.',
          '**Voltmeters** go **in parallel** to measure voltage drop; very large (ideally ∞) resistance.',
          '**Ohmmeters** go around a resistive element to measure resistance; **self-powered**, negligible resistance.'
        ]
      }
    ],
    mnemonics: [
      '**Conventional current is a lie we agree on:** current points the way **positive** charge would go — **opposite** to the electrons that actually move.',
      '**Kirchhoff:** **J**unction → **J**ust charge ($\\sum I_{in}=\\sum I_{out}$); **L**oop → e**L**ectric energy ($\\sum V_{source}=\\sum V_{drop}$).',
      '**"PIVR pie" for power:** start at $P = IV$, then sub $V = IR$ to get $I^2R$, or sub $I = V/R$ to get $V^2/R$. One formula, two substitutions.',
      '**Series Same-current, Parallel same-Potential** — and equivalent **R** goes **up** in series, **down** in parallel.',
      '**Capacitors mirror resistors:** series capacitors **reciprocal-add** (like parallel resistors); parallel capacitors **just add** (like series resistors).',
      'A capacitor is **"CAκed" with charge:** $C = \\dfrac{\\kappa\\varepsilon_0 A}{d}$ — C, A, κ, ε ride on top; gap **d** drags it down.',
      '**Dielectric: isolated drops Voltage, in-circuit raises Charge** — capacitance goes up either way (κ ≥ 1, never less than vacuum).',
      '**Meters: A→series→0 Ω, V→parallel→∞ Ω.** The ideal resistance always exists so the meter **doesn\'t disturb** the circuit.'
    ],
    keyConcepts: [
      '**emf is not a force** — it is a potential difference (J/C = volts), the source voltage with **no current flowing**; a real battery delivers less ($V = \\varepsilon - i\\,r_{int}$).',
      '**Series vs. parallel is the whole chapter.** Series: one path, **same current**, voltage divides, **R adds**. Parallel: branches, **same voltage**, current divides inversely to R, **R drops below the smallest**. Capacitors flip the R rules.',
      '**Solve circuits total-first:** total voltage (the battery) → equivalent resistance (collapse parallel clusters, then add series) → total current $I = V/R_{eq}$ → back out individual values.',
      '**Dielectrics always increase capacitance (κ ≥ 1):** in an **isolated** capacitor the **voltage** falls (Q fixed); in a **connected** capacitor the **charge** rises (V fixed).'
    ],
    equations: [
      { name: 'Current', tex: 'I = \\dfrac{Q}{\\Delta t}', note: 'Charge per unit time; SI unit ampère (A = C/s).' },
      { name: 'Kirchhoff\'s junction rule', tex: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}}', note: 'Conservation of charge at any node.' },
      { name: 'Kirchhoff\'s loop rule', tex: '\\sum V_{\\text{source}} = \\sum V_{\\text{drop}}', note: 'Conservation of energy around any closed loop.' },
      { name: 'Resistance', tex: 'R = \\dfrac{\\rho L}{A}', note: 'Directly ∝ resistivity & length; inversely ∝ cross-sectional area.' },
      { name: 'Ohm\'s law', tex: 'V = IR', note: 'Voltage drop = current × resistance; the basic law of circuits.' },
      { name: 'Terminal voltage (real cell)', tex: 'V = \\varepsilon_{cell} - i\\,r_{int}', note: 'Internal resistance lowers delivered voltage below emf.' },
      { name: 'Power', tex: 'P = IV = I^2R = \\dfrac{V^2}{R}', note: 'Rate of energy dissipation; SI unit watt (W). All three equivalent via Ohm\'s law.' },
      { name: 'Equivalent resistance — series', tex: 'R_s = R_1 + R_2 + \\cdots + R_n', note: 'Add directly; increases with more resistors.' },
      { name: 'Equivalent resistance — parallel', tex: '\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\cdots + \\dfrac{1}{R_n}', note: 'Reciprocal sum; less than the smallest branch resistor.' },
      { name: 'Capacitance', tex: 'C = \\dfrac{Q}{V}', note: 'Charge stored per volt; SI unit farad (F = C/V).' },
      { name: 'Parallel-plate capacitance', tex: 'C = \\dfrac{\\varepsilon_0 A}{d}', note: 'More plate area or smaller gap → larger capacitance.' },
      { name: 'Electric field in a capacitor', tex: 'E = \\dfrac{V}{d}', note: 'Uniform field, from positive plate to negative plate.' },
      { name: 'Energy stored in a capacitor', tex: 'U = \\dfrac{1}{2}CV^2 = \\dfrac{1}{2}QV = \\dfrac{Q^2}{2C}', note: 'Energy of charge separation at voltage V.' },
      { name: 'Capacitance with a dielectric', tex: "C' = \\kappa C", note: 'Dielectric constant κ ≥ 1 always increases capacitance.' },
      { name: 'Equivalent capacitance — series', tex: '\\dfrac{1}{C_s} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\cdots + \\dfrac{1}{C_n}', note: 'Reciprocal sum (like parallel resistors); decreases with more capacitors.' },
      { name: 'Equivalent capacitance — parallel', tex: 'C_p = C_1 + C_2 + \\cdots + C_n', note: 'Add directly (like series resistors); increases with more capacitors.' }
    ]
  },

  questions: [
    {
      q: 'If a defibrillator passes 15 A of current through a patient’s body for 0.1 seconds, how much charge goes through the patient’s skin?',
      type: 'mcq',
      choices: ['0.15 C', '1.5 C', '15 C', '150 C'],
      correct: 1,
      explanation: 'Charge is current × time: $Q = I\\,\\Delta t = (15\\ \\text{A})(0.1\\ \\text{s}) = 1.5\\ \\text{C}$.'
    },
    {
      q: 'A student places an ammeter with negligible resistance in parallel with a resistor to measure the current through the resistor. Does the student obtain an accurate reading?',
      type: 'mcq',
      choices: [
        'Yes, because the student used an ammeter with negligible resistance.',
        'Yes, because the current going through parallel paths is equal.',
        'No, because the ammeter should have infinite resistance.',
        'No, because an ammeter in parallel changes the current through the resistor.'
      ],
      correct: 3,
      explanation: 'An ammeter must be placed **in series** to read the current at a point. Wired in parallel, it creates a new low-resistance path that diverts current, so the reading does not reflect the actual current through the resistor. (An ideal ammeter has zero resistance precisely so it does not perturb a series line.)'
    },
    {
      q: 'Two conductors of equal cross-sectional area and equal length have resistances in the ratio 1:2. The resistivities of their materials must be in what ratio?',
      type: 'mcq',
      choices: ['1:1', '1:2', '2:1', '4:1'],
      correct: 1,
      explanation: 'From $R = \\dfrac{\\rho L}{A}$, resistance is **directly proportional** to resistivity when $L$ and $A$ are equal. So if $R_1:R_2 = 1:2$, then $\\rho_1:\\rho_2 = 1:2$.'
    },
    {
      q: 'A voltaic cell provides 0.5 A in a circuit with a 3 Ω resistor. If the internal resistance of the cell is 0.1 Ω, what is the terminal voltage of the battery when no current is flowing (its emf)?',
      type: 'mcq',
      choices: ['0.05 V', '1.5 V', '1.505 V', '1.55 V'],
      correct: 3,
      explanation: 'With current flowing, the terminal voltage across the 3 Ω resistor is $V = IR = (0.5)(3) = 1.5\\ \\text{V}$. The emf is recovered by adding back the internal-resistance drop: $\\varepsilon = V + i\\,r_{int} = 1.5 + (0.5)(0.1) = 1.55\\ \\text{V}$. The emf is only slightly above the terminal voltage, as expected for a small internal resistance.'
    },
    {
      q: 'A transformer conserves energy, so output power equals input power. If a transformer produces an output voltage that is 300% of the input voltage, what is the ratio of output current to input current?',
      type: 'mcq',
      choices: ['1:3', '3:1', '1:300', '300:1'],
      correct: 0,
      explanation: 'Since $P_{out} = P_{in}$, $I_{out}V_{out} = I_{in}V_{in}$ — current and voltage are **inversely** proportional. If $V_{out} = 3V_{in}$, then $I_{out} = \\tfrac{1}{3}I_{in}$, a ratio of **1:3**.'
    },
    {
      q: 'Given R1 = 20 Ω, R2 = 4 Ω, R3 = R4 = 32 Ω, R5 = 15 Ω, R6 = 5 Ω arranged in three branches (R1 alone; R2 in series with R3∥R4; R5 in series with R6), all three branches in parallel, what is the total resistance?',
      type: 'mcq',
      choices: ['0.15 Ω', '6.67 Ω', '16.7 Ω', '60 Ω'],
      correct: 1,
      explanation: 'Simplify branch by branch. Middle branch: $R_3 \\parallel R_4 = \\dfrac{32}{2} = 16\\ \\Omega$, then $+R_2 = 16+4 = 20\\ \\Omega$. Bottom branch: $R_5 + R_6 = 15+5 = 20\\ \\Omega$. Top branch: $R_1 = 20\\ \\Omega$. Three 20 Ω branches in parallel: $R_{total} = \\dfrac{20}{3} \\approx 6.67\\ \\Omega$.'
    },
    {
      q: 'How many moles of electrons pass through a circuit containing a 100 V battery and a 2 Ω resistor over 10 seconds? (Use the Faraday constant F ≈ 96,500 C/mol.)',
      type: 'mcq',
      choices: ['5.18 × 10⁻³ moles', '500 moles', '5.18 × 10³ moles', '5.2 × 10⁶ moles'],
      correct: 0,
      explanation: 'Current: $I = V/R = 100/2 = 50\\ \\text{A}$. Charge: $Q = I\\,\\Delta t = (50)(10) = 500\\ \\text{C}$. Moles of electrons: $\\dfrac{Q}{F} = \\dfrac{500}{96{,}500} \\approx 5.18\\times10^{-3}\\ \\text{mol}$.'
    },
    {
      q: 'A 10 V source drives a circuit with a 2 Ω resistor in series with a parallel pair of resistors (each ≈ 4 Ω, equivalent 2 Ω). What is the voltage drop across the parallel combination?',
      type: 'mcq',
      choices: ['2.5 V', '4 V', '5 V', '7.5 V'],
      correct: 2,
      explanation: 'The parallel pair has equivalent resistance equal to the series resistor (here 2 Ω each), so total $R = 2 + 2 = 4\\ \\Omega$ and total current $I = V/R = 10/4 = 2.5\\ \\text{A}$. The drop across the parallel block is $V = IR_{eq} = (2.5)(2) = 5\\ \\text{V}$ — splitting the 10 V evenly, consistent with Kirchhoff’s loop rule.'
    },
    {
      q: 'If a capacitor’s plate area is doubled while the distance between the plates is halved, how does the final capacitance Cf compare to the original Ci?',
      type: 'mcq',
      choices: ['Cf = Ci', 'Cf = ½ Ci', 'Cf = 2Ci', 'Cf = 4Ci'],
      correct: 3,
      explanation: 'From $C = \\dfrac{\\varepsilon_0 A}{d}$: doubling $A$ doubles $C$, and halving $d$ doubles $C$ again. The two effects multiply, so $C_f = 2 \\times 2 \\times C_i = 4C_i$.'
    },
    {
      q: 'The energy stored in a fully charged capacitor is $U = \\tfrac{1}{2}CV^2$. A cardiac defibrillator capacitor charged to 7500 V stores 400 J. What is the charge on the capacitor?',
      type: 'mcq',
      choices: ['1.1 × 10⁻⁵ C', '5 × 10⁻² C', '1.1 × 10⁻¹ C', '3.1 × 10⁶ C'],
      correct: 2,
      explanation: 'Find C from energy: $C = \\dfrac{2U}{V^2} = \\dfrac{2(400)}{(7500)^2} \\approx 1.42\\times10^{-5}\\ \\text{F}$. Then $Q = CV = (1.42\\times10^{-5})(7500) \\approx 0.11\\ \\text{C}$, i.e. $1.1\\times10^{-1}\\ \\text{C}$. (Equivalently $Q = 2U/V = 800/7500 \\approx 0.107\\ \\text{C}$.)'
    },
    {
      q: 'A 10 Ω resistor carries a current that is 2 A for 3 of a 5 s interval (and 0 A otherwise). How much energy has been dissipated after 5 s?',
      type: 'mcq',
      choices: ['40 J', '50 J', '120 J', '160 J'],
      correct: 2,
      explanation: 'Power while conducting: $P = I^2R = (2)^2(10) = 40\\ \\text{W}$. The resistor carries 2 A for only 3 s, so energy $= P\\,\\Delta t = (40\\ \\text{W})(3\\ \\text{s}) = 120\\ \\text{J}$.'
    },
    {
      q: 'Six currents meet at point P. Currents of 8 A, 2 A, and 3 A flow into P, and currents of 5 A and 6 A flow out. What is the magnitude and direction of the current between P and point x?',
      type: 'mcq',
      choices: ['2 A, toward x', '2 A, toward P', '10 A, toward x', '10 A, toward P'],
      correct: 0,
      explanation: 'By Kirchhoff’s junction rule, in = out. In: $8+2+3 = 13\\ \\text{A}$. Out (so far): $5+6 = 11\\ \\text{A}$. The missing 2 A must leave P, so it flows **toward x**.'
    },
    {
      q: 'Which of the following will most likely increase the electric field between the plates of a parallel-plate capacitor?',
      type: 'mcq',
      choices: [
        'Adding a resistor connected to the capacitor in series',
        'Adding a resistor connected to the capacitor in parallel',
        'Increasing the distance between the plates',
        'Adding an extra battery to the system'
      ],
      correct: 3,
      explanation: 'The field is $E = V/d$. Adding a battery raises the total applied voltage, increasing $E$. A series resistor lowers the voltage reaching the capacitor (eliminates A); a parallel resistor doesn’t change the capacitor’s voltage drop (eliminates B); increasing $d$ would **decrease** $E$ (eliminates C).'
    },
    {
      q: 'Three resistors of 4 Ω each are wired in series, and that group is placed in parallel with a single 4 Ω resistor (negligible wire resistance). What is the overall resistance of the circuit?',
      type: 'mcq',
      choices: ['16 Ω', '8 Ω', '4 Ω', '3 Ω'],
      correct: 3,
      explanation: 'The three series resistors sum to $4+4+4 = 12\\ \\Omega$. That 12 Ω is in parallel with a 4 Ω resistor: $\\dfrac{1}{R} = \\dfrac{1}{12} + \\dfrac{1}{4} = \\dfrac{1}{12}+\\dfrac{3}{12} = \\dfrac{4}{12} = \\dfrac{1}{3}$, so $R = 3\\ \\Omega$.'
    },
    {
      q: 'Which of the following best characterizes ideal voltmeters and ammeters?',
      type: 'mcq',
      choices: [
        'Ideal voltmeters and ammeters have infinite resistance.',
        'Ideal voltmeters and ammeters have no resistance.',
        'Ideal voltmeters have infinite resistance, and ideal ammeters have no resistance.',
        'Ideal voltmeters have no resistance, and ideal ammeters have infinite resistance.'
      ],
      correct: 2,
      explanation: 'A **voltmeter** is wired in parallel, so it should have **infinite** resistance to avoid creating an alternate current path. An **ammeter** is wired in series, so it should have **zero** resistance to avoid adding to the series resistance. Hence voltmeters → ∞, ammeters → 0.'
    }
  ]
};
