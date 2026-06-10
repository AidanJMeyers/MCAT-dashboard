// Chapter 3 — Thermodynamics (Physics & Math). Re-authored to the rich-formatting quality bar.
// Figures are reused from ch03.json (already-correct extraction); the recap/detail markdown,
// tables, callouts, mnemonics, keyReview, and questions are authored here from the source text.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }
const goals = (si) => S[si].goals || [];

export default {
  id: 3,
  title: 'Thermodynamics',
  subtitle: 'Zeroth law & thermal expansion · thermodynamic systems · first law, heat transfer & processes · second law and entropy',

  blocks: [
    /* ─────────────── 3.1 Zeroth Law of Thermodynamics ─────────────── */
    {
      id: 's1', num: '3.1', title: 'Zeroth Law of Thermodynamics',
      goals: [
        'Explain the zeroth law of thermodynamics',
        'Predict the relative expansion of an object undergoing a temperature change',
        'Describe the basis and the significance of the Kelvin scale'
      ],
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'A liquid (mercury) thermometer — thermal expansion of the liquid column is calibrated against fixed reference points (water’s phase changes) to read temperature.' }],
      recap: `
- **Zeroth law:** if A is in **thermal equilibrium** with B, and B with C, then A is in equilibrium with C → **no net heat flows** between objects at the **same temperature** (the transitive property).
- **Temperature** ∝ **average kinetic energy** of particles; **heat flows spontaneously** from hot → cold.
- **Kelvin** starts at **absolute zero** (no negatives); a 1 K change = a 1 °C change. Water: freezes 273 K, boils 373 K.
- **Linear expansion** $\\Delta L = \\alpha L \\Delta T$; **volumetric expansion** $\\Delta V = \\beta V \\Delta T$ with $\\beta = 3\\alpha$.
`,
      detail: `
#### The zeroth law
The **zeroth law of thermodynamics** rests on a simple observation: if one object is in **thermal equilibrium** with a second object, and that second object is in thermal equilibrium with a third, then the **first and third are also in thermal equilibrium**. When objects in thermal equilibrium are brought into thermal contact, **no net heat flows** between them.

- Think tea ⇌ metal stirrer ⇌ your hand: all three settle to the same temperature.
- **Thermal contact does not require physical contact** — objects can exchange energy across space (e.g., by radiation).

:::keyconcept
The zeroth law is the **transitive property** applied to thermal systems: **if a = b and b = c, then a = c.** It is the law that *justifies the thermometer* — the reason a calibrated instrument that reaches equilibrium with an object reports that object’s temperature.
:::

#### Temperature
At the molecular level, **temperature** is proportional to the **average kinetic energy** of the particles in a substance. At the macroscopic level, it is the **difference in temperature** between two objects that sets the **direction of heat flow**.

- When possible, **heat moves spontaneously from higher temperature → lower temperature.**
- **Heat** is the *transfer* of thermal energy from a hotter object to a colder one.
- No net heat flow between objects in thermal contact ⇒ equal temperatures ⇒ **thermal equilibrium**.

:::keyconcept
**Temperature** is a property of matter tied to the **average kinetic energy** of its particles. **Differences** in temperature — not absolute values — determine the **direction of heat transfer**.
:::

##### Temperature scales
Three scales are still in common use. **Fahrenheit** and **Celsius** are anchored to the **phase changes of water**; **Kelvin** is anchored to **absolute zero** and is an **SI base unit**.

| Reference point | °F | °C | K |
|---|---|---|---|
| **Absolute zero** | −460 | −273 | **0** |
| **Freezing point of water** | 32 | 0 | 273 |
| **Boiling point of water** | 212 | 100 | 373 |

- **Kelvin** has **no negative temperatures** — it begins at **absolute zero**, the theoretical point of zero thermal energy.
- A **change of 1 °C equals a change of 1 K** (same unit size); only the zero point differs.
- Fahrenheit packs **180°** between water’s phase changes vs. **100** on Celsius/Kelvin, so a **Fahrenheit degree is smaller**.

Conversions (Equation 3.1):

$$F = \\tfrac{9}{5}C + 32 \\qquad C = \\tfrac{5}{9}(F - 32) \\qquad K = C + 273$$

:::bridge
The **third law of thermodynamics** states that the **entropy of a perfectly ordered crystal at absolute zero is zero** — the basis for the Kelvin zero point. The third law is *not* directly tested on the MCAT.
:::

:::expertise
The only routine MCAT use of Fahrenheit is **body temperature: 98.6 °F = 37 °C**. If a quantitative item needs a Fahrenheit conversion, the conversion will be provided.
:::

##### Worked example — scale conversion
*A high of 86 °F today. What is that in °C and K?*

$$C = \\tfrac{5}{9}(86 - 32) = \\tfrac{5}{9}(54) = 30\\ ^{\\circ}\\text{C}$$
$$K = C + 273 = 30 + 273 = 303\\ \\text{K}$$

#### Thermal expansion
Many physical properties — **length, volume, solubility, conductivity** — change with temperature. Daniel Fahrenheit built his scale by tracking the **height of a mercury column** against fixed temperature markers; this expansion-vs-temperature relationship is what makes thermometers work.

##### Linear expansion (solids)
A temperature change changes a solid’s **length**: heating lengthens, cooling shortens. The change is proportional to the **original length** and to **ΔT**:

$$\\Delta L = \\alpha L \\Delta T \\quad (\\text{Equation 3.2})$$

- $\\Delta L$ = change in length, $\\alpha$ = **coefficient of linear expansion**, $L$ = original length, $\\Delta T$ = temperature change.
- $\\alpha$ characterizes the material; units are usually $\\text{K}^{-1}$ (equivalently $^{\\circ}\\text{C}^{-1}$ — same unit size).

*Example:* A 2 m rod with $\\alpha = 10^{-6}\\ \\text{K}^{-1}$ is cooled from 1080 °C to 80 °C.
$$\\Delta L = (10^{-6})(2)(80 - 1080) = -2\\times10^{-3}\\ \\text{m}$$
Negative ⇒ it shrinks; final length $= 2 - 0.002 = 1.998\\ \\text{m}$.

##### Volumetric expansion (liquids and solids)
For liquids, the meaningful parameter is **volume**. The same form applies to solids and liquids:

$$\\Delta V = \\beta V \\Delta T \\quad (\\text{Equation 3.3})$$

- $\\beta$ = **coefficient of volumetric expansion** $= 3\\alpha$ for the same material.

:::realworld
**Bridges and sidewalks have expansion gaps** between segments precisely so thermal expansion does not crack or buckle them. Same idea for railroad tracks and overhead power lines.
:::

:::mnemonic
**"A Lot ΔT"** → $\\Delta L = \\alpha L \\Delta T$. When an object’s temperature changes, its length changes "**a-L-ot**." And remember **volume is triple** the linear behavior: $\\beta = 3\\alpha$ (3 dimensions).
:::
`
    },

    /* ─────────────────────────── 3.2 Systems ─────────────────────────── */
    {
      id: 's2', num: '3.2', title: 'Systems',
      goals: [
        'Distinguish between closed, isolated, and open thermodynamic systems',
        'Compare and contrast state and process functions',
        'List common state functions'
      ],
      recap: `
- A **system** is the part of the universe under study; everything else is the **surroundings**.
- **Isolated** → exchanges **neither matter nor energy** ($\\Delta U = 0$). **Closed** → exchanges **energy only**. **Open** → exchanges **both**.
- **State functions** (path-independent): **P, ρ, T, V, H, U, G, S**. **Process functions** (path-dependent): **heat (Q)** and **work (W)**.
- Most MCAT problems treat the setup as a **closed system** (gas in a piston).
`,
      detail: `
#### System vs. surroundings
A **system** is the portion of the universe we choose to observe or manipulate; the **surroundings** are everything else. Systems are classified by what they can exchange with their surroundings.

#### The three system types

| System | Exchanges **matter**? | Exchanges **energy**? | $\\Delta U$ | Classic example |
|---|---|---|---|---|
| **Isolated** | **No** | **No** | $\\Delta U = 0$ | **Bomb calorimeter** (approx.); the **universe** |
| **Closed** | **No** | **Yes** | varies | **Gas in a piston** (movable cylinder) |
| **Open** | **Yes** | **Yes** | varies | **Boiling pot of water**, a **human being**, open combustion |

- **Isolated systems** are rare but can be *approximated* — a bomb calorimeter insulates the reaction to prevent energy transfer; the entire universe is isolated because it has no surroundings.
- **Closed systems** dominate Test Day — the classic **gas-in-a-vessel-with-a-piston** experiment exchanges energy (heat/work) but not matter.
- **Open systems** let matter carry energy *and* transfer additional energy as heat or work.

:::keyconcept
Read the prompt to classify the system: **sealed and insulated** → isolated; **sealed but can heat/cool or do work** → closed; **matter can enter/leave** (open vessel, living thing) → open.
:::

#### State functions vs. process functions
**State functions** depend only on the **current equilibrium state** — they are **independent of the path** taken to reach that state. **Process functions** describe the **path** itself.

| | **State functions** (path-independent) | **Process functions** (path-dependent) |
|---|---|---|
| Members | **P**ressure, **ρ** density, **T**emperature, **V**olume, **H** enthalpy, **U** internal energy, **G** Gibbs free energy, **S** entropy | **Q** heat, **W** work |
| Defined by | the state alone | how the system got there |
| May depend on each other? | Yes | — |

:::mnemonic
**State functions spell "PV-THUGS":** **P**ressure, **V**olume, **T**emperature, **H** (enthalpy), **U** (internal energy), **G** (Gibbs), **S** (entropy) — plus density. The two **path-dependent** quantities that are *not* on the list are the ones that describe a *process*: **heat and work** (**"Q & W are the way you went"**).
:::
`
    },

    /* ────────────────── 3.3 First Law of Thermodynamics ────────────────── */
    {
      id: 's3', num: '3.3', title: 'First Law of Thermodynamics',
      goals: [
        'Recall the mathematical relationships between internal energy, work, and heat',
        'Describe conduction, convection, and radiation',
        'Draw a graph of the temperature of a solid as it is heated to a gas',
        'Calculate work for a P–V diagram'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 3.1 — Thermodynamic behaviors of a gas on a P–V diagram: isobaric (flat), isothermal and adiabatic (curved), and isovolumetric (vertical).' }],
      recap: `
- **First law = conservation of energy:** $\\Delta U = Q - W$ — internal energy rises with **heat in** or **work done on** the system.
- **Sign convention:** $Q>0$ heat *in*; $W>0$ work done *by* the system (expansion).
- **3 heat-transfer modes:** **conduction** (contact/collisions), **convection** (fluid flow), **radiation** (EM waves, works in a vacuum).
- **Temperature change:** $q = mc\\Delta T$. **Phase change** (constant T): $q = mL$ (latent heat).
- **P–V work = area under the curve**; for a **closed loop**, work = **area enclosed** (clockwise = +, counterclockwise = −).
`,
      detail: `
#### The first law: $\\Delta U = Q - W$
The **first law of thermodynamics** is the **conservation of energy**: the change in a system’s **total internal energy** equals the **heat added to** the system minus the **work done by** the system.

$$\\Delta U = Q - W \\quad (\\text{Equation 3.4})$$

- $\\Delta U$ = change in internal energy, $Q$ = heat transferred **into** the system, $W$ = work done **by** the system.
- Internal energy rises by **adding heat**, by **doing work on** the system, or both.

##### Sign convention (memorize the table)

| Variable | **Positive** value | **Negative** value |
|---|---|---|
| **ΔU** (internal energy) | Temperature **increases** | Temperature **decreases** |
| **Q** (heat) | Heat flows **into** the system | Heat flows **out of** the system |
| **W** (work) | Work done **by** the system (**expansion**) | Work done **on** the system (**compression**) |

:::keyconcept
Internal energy **increases** when heat is transferred **into** the system or work is performed **on** it; it **decreases** when heat is **lost** or the system **does work** on its surroundings.
:::

Because the first law accounts for **all** heat and work, **nonconservative forces are no problem** — energy "lost" to friction, drag, or air resistance is simply "found" as thermal energy in the surroundings. Energy is **never created or destroyed**, only converted.

#### Heat
**Heat** is the process by which energy is transferred between two objects **because of a temperature difference** — the corollary to the **second law**: a hotter object gives heat to a colder one until they reach **thermal equilibrium**. Heat **cannot** spontaneously flow cold → hot without **work** being done.

##### Units of heat

| Unit | Definition / relation |
|---|---|
| **Joule (J)** | SI unit of energy |
| **calorie (cal)** | heat to raise **1 g of water by 1 °C** |
| **Calorie / kcal (Cal)** | the "big-C" nutritional Calorie = **1000 cal = 1 kcal** |
| **BTU** | British thermal unit |

Conversion: $1\\ \\text{Cal} \\equiv 10^{3}\\ \\text{cal} = 4184\\ \\text{J} = 3.97\\ \\text{BTU}$.

:::keyconcept
**Little-c calorie** raises **1 g** of water 1 °C; **big-C Calorie** raises **1 kg** of water 1 °C (= 1000 cal = 1 kcal). The food label "Calorie" is the big one.
:::

#### Heat transfer: three modes

| Mode | Mechanism | Needs a medium? | Example |
|---|---|---|---|
| **Conduction** | Direct **molecule-to-molecule collisions**; needs **physical contact** | Yes (contact) | Touching a hot stove; metal spoon in hot soup. **Metals conduct best**; **gases worst**. |
| **Convection** | Bulk **motion of a fluid** carrying heat | Yes (a **fluid**) | Convection oven; rising plume of warm air/smoke; cold-water cooling bath |
| **Radiation** | **Electromagnetic waves** | **No — works in a vacuum** | The **Sun warming the Earth**; a radiant oven |

- **Conduction:** metals excel (dense atoms in a "sea of electrons"); gases are poor (molecules too far apart for frequent collisions).
- **Convection:** only **liquids and gases** (it requires flow); a convection oven adds convection on top of radiation, so it cooks faster.
- **Radiation:** the **only** mode that crosses a **vacuum**.

:::mnemonic
**"Con-Con-Rad":** **Con**duction = **Con**tact (touch). **Con**vection = **C**urrents in a fluid (flow). **Rad**iation = **Rad** waves (EM, no medium needed — it reaches across empty space, like the Sun).
:::

#### Specific heat: $q = mc\\Delta T$
**Specific heat (c)** is the heat needed to raise **1 g** of a substance by **1 °C (or 1 K)**. With a temperature change (and **no phase change**):

$$q = mc\\Delta T \\quad (\\text{Equation 3.5})$$

- $m$ = mass, $c$ = specific heat, $\\Delta T$ = temperature change (same in °C or K).
- **Know cold:** the specific heat of **liquid water** $= 1\\ \\dfrac{\\text{cal}}{\\text{g}\\cdot\\text{K}}$ (equivalently $4.184\\ \\dfrac{\\text{J}}{\\text{g}\\cdot\\text{K}}$). Specific heat varies by **phase**; other values are usually given.

:::mnemonic
The heat-transfer equation **looks like the exam you’re studying for**: $q = mc\\Delta T$ ≈ "**q equals MCAT**." (Easy to recall under pressure on Test Day.)
:::

#### Heat of transformation: $q = mL$
During a **phase change**, added/removed heat does **not change temperature** — the temperature is **constant** until the *entire* substance has converted. (Ice at 0 °C stays at 0 °C until it has all melted.)

$$q = mL \\quad (\\text{Equation 3.6})$$

where $L$ is the **heat of transformation** (**latent heat**). Phase changes alter **potential energy** and the number of available **microstates**, **not** average kinetic energy — which is why temperature holds steady.

- **Melting/freezing** (at the melting point) → **heat of fusion**.
- **Boiling/condensation** (at the boiling point) → **heat of vaporization**.
- Relevant $L$ values are provided on Test Day.

:::bridge
Know the **phase-change vocabulary** (covered in *MCAT General Chemistry Review*, Ch. 7):

- Solid → liquid: **fusion / melting**
- Liquid → solid: **freezing / solidification**
- Liquid → gas: **boiling / evaporation / vaporization**
- Gas → liquid: **condensation**
- Solid → gas: **sublimation**
- Gas → solid: **deposition**
:::

:::realworld
**Sweating cools you** via the **heat of vaporization**: evaporating sweat pulls heat from the skin. On a **humid** day sweat evaporates poorly, so less heat leaves — which is why high humidity feels so much hotter.
:::

##### The heating curve
Plotting **temperature vs. heat added** for a solid heated to a gas gives **sloped segments** (single-phase warming, governed by $q = mc\\Delta T$) separated by **flat plateaus** (phase changes at constant T, governed by $q = mL$).

![Heating curve: temperature vs. heat added, with two flat plateaus at the phase changes](${fig(3, 0).src})

##### Worked example — heat to melt a chain
*Silver: melting point 962 °C, heat of fusion ~105 kJ/kg, specific heat ~0.235 kJ/(kg·K). Heat needed to melt a 1 kg chain starting at 20 °C?*

1. **Warm to the melting point** ($q = mc\\Delta T$): $\\approx 219\\ \\text{kJ}$.
2. **Melt at constant T** ($q = mL$): $\\approx 105\\ \\text{kJ}$.
3. **Total** $= 219 + 105 = 324\\ \\text{kJ}$.

#### Thermodynamic processes
In any **thermodynamic process** a system moves from one equilibrium state $(P, T, V)$ to another. The MCAT focuses on **special cases** where one variable is held constant, each reducing the first law to a simpler form.

| Process | Held constant | First law reduces to |
|---|---|---|
| **Isothermal** | Temperature → $\\Delta U = 0$ | $Q = W$ |
| **Adiabatic** | No heat exchange → $Q = 0$ | $\\Delta U = -W$ |
| **Isovolumetric** (isochoric) | Volume → $W = 0$ | $\\Delta U = Q$ |
| **Isobaric** | Pressure (less emphasized) | $W = P\\Delta V$ |

The three **high-yield** cases are **isothermal**, **adiabatic**, and **isovolumetric**; **isobaric** is lower-yield. Figure 3.1 (above) shows how each appears on a **P–V diagram**: isobaric is **flat**, isovolumetric is **vertical**, while isothermal and adiabatic are **curved** (the adiabatic curve is steeper).

:::mnemonic
**Greek roots unlock the names:** **iso-** = "same." **-thermal** = temperature ($\\Delta U=0$), **-baric** = pressure (baro = weight), **-volumetric/-choric** = volume ($W=0$). **a-diabatic** = "**not** passing through" → **no heat** ($Q=0$).
:::

##### Work in a P–V diagram
On a **P–V graph**, **work is the area under the curve**. For a **closed-loop cycle**, the **net work is the area enclosed** by the loop.

![Closed-loop P–V process: net work is the area inside the loop](${fig(2, 2).src})

- **Clockwise** loops do **positive** work on the surroundings; **counterclockwise** loops do **negative** work.
- Constant-pressure (isobaric) work is simply $W = P\\Delta V$.

##### Worked example — isobaric expansion
*A gas held at $P = 3.6\\times10^{5}\\ \\text{Pa}$ absorbs $Q = 300\\ \\text{kJ}$ and expands from $1.0$ to $1.5\\ \\text{m}^3$. Find $W$ and $\\Delta U$.*

$$W = P\\Delta V = (3.6\\times10^{5})(1.5 - 1.0) = 1.8\\times10^{5}\\ \\text{J} = 180\\ \\text{kJ}$$
$$\\Delta U = Q - W = 300 - 180 = 120\\ \\text{kJ}$$
`
    },

    /* ──────────── 3.4 Second Law of Thermodynamics and Entropy ──────────── */
    {
      id: 's4', num: '3.4', title: 'Second Law of Thermodynamics and Entropy',
      goals: [
        'Describe entropy, on both a macroscopic level and in statistical terms',
        'Explain the relationship between entropy of a system and entropy of the surroundings for any thermodynamic process'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Energy spontaneously disperses: heat always flows from hot to cold until equilibrium — the macroscopic statement of the second law.' }],
      recap: `
- **Second law:** energy in a closed system (up to the **whole universe**) spontaneously and **irreversibly disperses** — heat flows **hot → cold** until equilibrium.
- **Entropy (S)** = a measure of how **spread out** energy is; statistically, of the number of available **microstates**.
- $\\Delta S = \\dfrac{Q_{rev}}{T}$ — units $\\text{J/K}$ (a **state function**). Energy **into** a system raises S; energy **out** lowers it.
- $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$ for all real (irreversible) processes; $= 0$ only for an idealized **reversible** process.
- A system’s entropy *can* decrease — but only if the surroundings’ entropy rises **at least as much**.
`,
      detail: `
#### The second law and energy dispersion
The **second law of thermodynamics** states that objects in thermal contact, **not** at equilibrium, exchange heat from the **hotter** to the **colder** object until both reach the same temperature. More broadly: **energy spontaneously disperses** — going from localized/concentrated to spread out — **if not hindered**.

Everyday examples all share this "dispersal" theme:

- **Hot tea cooling** → thermal energy spreads to the room.
- **A frozen drink melting** → warm air’s energy spreads into the drink.
- **Iron rusting** → chemical energy released as more stable bonds form.
- **Buildings crumbling**, **balloons deflating**, **organisms dying and decaying** → concentrated energy releasing outward.

#### Entropy
**Entropy (S)** is the measure of the **spontaneous dispersal of energy** at a given temperature — *how spread out* energy becomes.

:::keyconcept
Be careful with "**disorder**." Entropy is better understood as **energy dispersal / the number of available microstates**, not as a messy bedroom. At 0 °C, liquid water and ice have the **same average kinetic energy**, but liquid water spreads that energy over **more microstates** — so liquid water has **higher entropy** (and is, by extension, less organized).
:::

The change in entropy for a **reversible** process:

$$\\Delta S = \\dfrac{Q_{rev}}{T} \\quad (\\text{Equation 3.7})$$

- $Q_{rev}$ = heat gained/lost reversibly, $T$ = temperature in **kelvin**; units of $S$ are usually $\\text{J/K}$.
- Energy distributed **into** a system → **S increases**; energy distributed **out** → **S decreases**.

##### Worked example — entropy of melting ice
*In a reversible process, $5.46\\times10^{4}\\ \\text{J}$ melts a 200 g block of ice to water at $T = 273\\ \\text{K}$. Find $\\Delta S$.*

A phase change is **isothermal**, so $T = 273\\ \\text{K}$ is constant:
$$\\Delta S = \\dfrac{Q_{rev}}{T} = \\dfrac{5.46\\times10^{4}}{273} = 200\\ \\text{J/K}$$
The heat added did not exceed what is needed to fully melt the ice, so $T$ stayed constant throughout.

#### Entropy of the universe
The second law does **not** forbid concentrating energy — it forbids doing so **spontaneously** in a closed system. **Work** must be done to localize energy.

- A **refrigerator** pumps heat *against* the spontaneous gradient (cool interior → warm exterior), so it **consumes energy** to do it.
- The second law is **"time’s arrow"** — you can tell a video of an explosion is running backward because energy spontaneously disperses, never re-concentrates on its own.

For **any** process, summed over system + surroundings:

$$\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0 \\quad (\\text{Equation 3.8})$$

:::keyconcept
The **universe is a closed, expanding system**, so its **total entropy is always increasing** (irreversibly). A *system’s* entropy may decrease — but only if the *surroundings* increase by **at least as much**, keeping $\\Delta S_{universe} \\ge 0$.
:::

#### Reversible vs. irreversible processes
Physicists describe processes as **natural/unnatural** and **reversible/irreversible**:

| Term | Meaning |
|---|---|
| **Natural (irreversible)** | The expected, one-way outcome — hot object cools, cold object warms, until equilibrium. $\\Delta S_{universe} > 0$. |
| **Unnatural** | The shocking reverse (hot gets hotter, cold gets colder spontaneously) — never observed. |
| **Reversible** | Idealized: proceeds **infinitely slowly**, always at equilibrium, with **no energy dissipated**. $\\Delta S_{universe} = 0$. |

- A **reversible** process is an idealization (ice melting from a 0 °C thermostat so $\\Delta S_{system} = -\\Delta S_{surroundings}$). **No real process is truly reversible** — we can only approximate it.
- Physically, "reversible" means it can **spontaneously reverse course**; melting on a warm countertop will **not** spontaneously re-freeze, so freezing/melting in real life are **physically irreversible** even though they are *chemically* reversible.

:::mnemonic
**Entropy only goes up (for the universe).** $\\Delta S_{universe} \\ge 0$ — **never negative**. Equality ($=0$) is the **reversible** unicorn; every **real** process is **irreversible** and pushes the universe’s entropy **up**.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Zeroth Law of Thermodynamics',
        points: [
          'Objects are in **thermal equilibrium** when at the **same temperature**; equilibrated objects exchange **no net heat**.',
          '**Temperature** is qualitatively "how hot/cold," and quantitatively relates to the **average kinetic energy** of particles.',
          '**Thermal expansion** describes how length ($\\Delta L = \\alpha L \\Delta T$) or volume ($\\Delta V = \\beta V \\Delta T$, $\\beta = 3\\alpha$) changes with temperature.',
          'The **Kelvin** scale begins at **absolute zero**; a 1 K change equals a 1 °C change.'
        ]
      },
      {
        section: 'Systems',
        points: [
          'A **system** is the part of the universe under study; the **surroundings** are everything else.',
          '**Isolated** systems exchange **neither matter nor energy**; **closed** systems exchange **energy only**; **open** systems exchange **both**.',
          '**State functions** are **path-independent**: P, ρ, T, V, H, U, G, S.',
          '**Process functions** (heat **Q**, work **W**) describe the **pathway** between states and are path-dependent.'
        ]
      },
      {
        section: 'First Law of Thermodynamics',
        points: [
          'The first law is **conservation of energy**: for a closed system, $\\Delta U = Q - W$.',
          '**Heat** transfers between objects at different temperatures until **thermal equilibrium**; modes are **conduction, convection, radiation** (only radiation crosses a vacuum).',
          '**Specific heat:** $q = mc\\Delta T$ (no phase change). For **water**, $c = 1\\ \\text{cal/(g·K)}$.',
          'During a **phase change** ($q = mL$), heat changes **potential energy** and microstates — not kinetic energy — so **temperature stays constant**.',
          '**Special processes:** isothermal ($\\Delta U = 0$), adiabatic ($Q = 0$), isobaric (const. P), isovolumetric ($W = 0$). P–V work = area under the curve.'
        ]
      },
      {
        section: 'Second Law of Thermodynamics and Entropy',
        points: [
          'In a closed system (up to the universe), energy **spontaneously and irreversibly disperses** from localized to spread out.',
          '**Entropy** measures how spread out energy is; statistically, more available **microstates** → higher entropy.',
          '$\\Delta S = Q_{rev}/T$; and $\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0$ for all real processes.',
          'Every natural process is ultimately **irreversible**; only idealized equilibrium processes (e.g., a controlled phase change) approximate **reversibility**.'
        ]
      }
    ],
    mnemonics: [
      '**Zeroth law = transitive property:** if a = b and b = c, then a = c — it is the law that *justifies the thermometer*.',
      '**"A-L-ot ΔT":** $\\Delta L = \\alpha L \\Delta T$ (length changes "a-L-ot" with temperature); volume is triple — $\\beta = 3\\alpha$ for 3 dimensions.',
      '**State functions = "PV-THUGS"** (P, V, T, H, U, G, S + density). The path-dependent oddballs left off are **heat and work** ("Q & W = the way you went").',
      '**First law signs:** $Q>0$ = heat **in**; $W>0$ = work done **by** (expansion). $\\Delta U = Q - W$.',
      '**"Con-Con-Rad":** **Con**duction = **Con**tact; **Con**vection = **C**urrents (fluid flow); **Rad**iation = **Rad** EM waves (the only one that crosses a vacuum).',
      '**$q = mc\\Delta T$ ≈ "q equals MCAT"** — the heat equation literally spells the test you’re studying for.',
      '**iso- = "same":** -thermal (T, so $\\Delta U=0$), -baric (P), -volumetric/-choric (V, so $W=0$); **a-diabatic** = "no heat passes" ($Q=0$).',
      '**Entropy of the universe only goes up:** $\\Delta S_{universe} \\ge 0$, never negative; $=0$ is the reversible ideal, every real process is irreversible.'
    ],
    keyConcepts: [
      'The **zeroth law** comes "after the fact" — it is the thermodynamic justification for **thermometers and temperature scales** that were already in use.',
      '**Classify the system first:** isolated (nothing exchanged, $\\Delta U=0$) vs. closed (energy only — most MCAT setups) vs. open (matter + energy).',
      '**$\\Delta U = Q - W$ is conservation of energy** — nonconservative forces (friction, drag) are no exception; their energy is simply "found" as heat in the surroundings.',
      'During a **phase change**, $q = mL$ and **temperature is constant** because added energy raises **potential energy / microstates**, not kinetic energy.',
      'On a **P–V diagram**, work is the **area under the curve**; for a **cycle**, net work is the **enclosed area** (clockwise +, counterclockwise −).',
      '**Entropy is energy dispersal, not "mess."** A system’s entropy can fall, but the **universe’s entropy never decreases** — the irreversible arrow of time.'
    ],
    equations: [
      { name: 'Temperature conversions (Eq. 3.1)', tex: 'F = \\tfrac{9}{5}C + 32,\\quad C = \\tfrac{5}{9}(F-32),\\quad K = C + 273', note: 'Kelvin and Celsius share the same unit size; body temp = 98.6 °F = 37 °C.' },
      { name: 'Linear thermal expansion (Eq. 3.2)', tex: '\\Delta L = \\alpha L \\Delta T', note: 'α = coefficient of linear expansion (K⁻¹); expansion scales with original length.' },
      { name: 'Volumetric thermal expansion (Eq. 3.3)', tex: '\\Delta V = \\beta V \\Delta T', note: 'β = coefficient of volumetric expansion = 3α for the same material.' },
      { name: 'First law of thermodynamics (Eq. 3.4)', tex: '\\Delta U = Q - W', note: 'Q > 0 = heat into system; W > 0 = work done by system (expansion).' },
      { name: 'Heat with temperature change (Eq. 3.5)', tex: 'q = mc\\Delta T', note: 'No phase change. Water: c = 1 cal/(g·K) = 4.184 J/(g·K).' },
      { name: 'Heat of transformation / latent heat (Eq. 3.6)', tex: 'q = mL', note: 'Phase change at constant T; L = heat of fusion (melt) or vaporization (boil).' },
      { name: 'Entropy change (Eq. 3.7)', tex: '\\Delta S = \\dfrac{Q_{rev}}{T}', note: 'Reversible heat over temperature in kelvin; units J/K.' },
      { name: 'Second law / entropy of the universe (Eq. 3.8)', tex: '\\Delta S_{universe} = \\Delta S_{system} + \\Delta S_{surroundings} > 0', note: 'Positive for all real (irreversible) processes; zero only for an idealized reversible one.' },
      { name: 'P–V work (isobaric)', tex: 'W = P\\Delta V', note: 'Work = area under the P–V curve; for a cycle, net work = enclosed area.' }
    ]
  },

  questions: [
    {
      q: 'An object with an initial temperature of 300 K increases its temperature by 1 °C every minute. By how many degrees Fahrenheit will its temperature have increased in 10 minutes?',
      type: 'mcq',
      choices: ['6 °F', '10 °F', '18 °F', '30 °C'],
      correct: 2,
      explanation: 'A kelvin and a Celsius degree are the same size, so a change of 10 K equals a change of 10 °C. Each Celsius degree is 1.8 Fahrenheit degrees, so a 10 °C change = 10 × 1.8 = 18 °F. (Choice D is a temperature in °C, not a Fahrenheit change.)'
    },
    {
      q: 'Which choice correctly identifies these three heat-transfer processes? (I) Heat from the Sun to the Earth; (II) a metal spoon heating up in a pot of hot soup; (III) a rising plume of smoke from a fire.',
      type: 'mcq',
      choices: [
        'I. Radiation; II. Conduction; III. Convection',
        'I. Conduction; II. Radiation; III. Convection',
        'I. Radiation; II. Convection; III. Conduction',
        'I. Convection; II. Conduction; III. Radiation'
      ],
      correct: 0,
      explanation: 'Sun → Earth crosses empty space, so it must be radiation (EM waves). The spoon heats by direct molecular collisions with the soup — conduction. The rising warm-air plume carries heat by bulk fluid motion — convection.'
    },
    {
      q: 'A 20 m steel rod at 10 °C dangles from a building and is 2.5 cm from the ground. If it is heated to 110 °C, will it touch the ground? (α = 1.1 × 10⁻⁵ K⁻¹)',
      type: 'mcq',
      choices: [
        'Yes, because it expands by 3.2 cm.',
        'Yes, because it expands by 2.6 cm.',
        'No, because it expands by 2.2 cm.',
        'No, because it expands by 1.8 cm.'
      ],
      correct: 2,
      explanation: 'A 100 °C change equals a 100 K change. ΔL = αLΔT = (1.1 × 10⁻⁵)(20 m)(100 K) = 2.2 × 10⁻² m = 2.2 cm. Since the rod is 2.5 cm above the ground and grows only 2.2 cm, it does not reach the ground.'
    },
    {
      q: 'What is the final temperature of a 3 kg wrought-iron tool placed in front of an electric heater that delivers energy at 100 W for 10 minutes? It starts at 20 °C; the specific heat of wrought iron is 500 J/(kg·K).',
      type: 'mcq',
      choices: ['40 °C', '50 °C', '60 °C', '70 °C'],
      correct: 2,
      explanation: 'Power × time gives the energy absorbed: Q = (100 W)(600 s) = 6.0 × 10⁴ J. Then ΔT = Q/(mc) = 60000 / (3 × 500) = 40 K. Final temperature = 20 + 40 = 60 °C.'
    },
    {
      q: 'How much heat is required to completely melt a pair of gold earrings weighing 500 g, starting at 25 °C? (Melting point 1064 °C; heat of fusion ≈ 64 kJ/kg; specific heat ≈ 0.129 kJ/(kg·K).)',
      type: 'mcq',
      choices: ['15 kJ', '32 kJ', '66 kJ', '97 kJ'],
      correct: 3,
      explanation: 'First heat to the melting point: q = mcΔT = (0.5 kg)(0.129)(1064 − 25) ≈ 60 kJ. Then melt at constant T: q = mL = (0.5)(64) ≈ 32 kJ. Total ≈ 60 + 32 = 92 kJ, closest to 97 kJ (D). The choices are spread out enough to allow heavy approximation.'
    },
    {
      q: 'For the closed P–V cycle shown (a triangle with base 5 m³ and height 3 Pa, traversed clockwise), what is the total work done by the gas during the cycle?',
      type: 'mcq',
      choices: ['−10 J', '0 J', '7.5 J', '17.5 J'],
      correct: 2,
      explanation: 'Net work in a cycle equals the area enclosed. The triangle has area = ½ × base × height = ½ × 5 × 3 = 7.5 J. A clockwise loop does positive work on the surroundings, so the work is +7.5 J.'
    },
    {
      q: 'In an adiabatic compression of a gas, the internal energy of the gas:',
      type: 'mcq',
      choices: [
        'increases because the work done on the gas is negative.',
        'increases because the work done on the gas is positive.',
        'decreases because the work done on the gas is negative.',
        'decreases because the work done on the gas is positive.'
      ],
      correct: 1,
      explanation: 'Adiabatic means Q = 0. Compression means work is done on the gas, so the work done BY the gas (W in ΔU = Q − W) is negative. With Q = 0 and W < 0, ΔU = 0 − (negative) > 0, so internal energy increases — and work done on the gas is positive.'
    },
    {
      q: 'The entropy of a system can:',
      type: 'mcq',
      choices: [
        'never decrease.',
        'decrease when the entropy of the surroundings increases by at least as much.',
        'decrease when the system is isolated and the process is irreversible.',
        'decrease during an adiabatic reversible process.'
      ],
      correct: 1,
      explanation: 'A system’s entropy can decrease provided the surroundings’ entropy increases by at least as much, so ΔS_universe ≥ 0. An isolated system’s entropy increases for all real (irreversible) processes, consistent with the second law.'
    },
    {
      q: 'A student building a coffee-cup calorimeter fails to use a second cup and seals the lid inadequately. What was the student’s goal, and what was the actual result?',
      type: 'mcq',
      choices: [
        'Trying to create an isolated system but created an open system instead.',
        'Trying to create an isolated system but created a closed system instead.',
        'Trying to create a closed system but created an open system instead.',
        'Trying to create a closed system but created an isolated system instead.'
      ],
      correct: 0,
      explanation: 'A calorimeter approximates an isolated system (no exchange of matter or energy). Without an insulating layer and a proper seal, both heat (energy) and matter can escape, producing an open system instead.'
    },
    {
      q: 'A substance has a specific heat of 1 J/(mol·K) and a melting point of 350 K. If one mole of it is currently at 349 K, how much energy must be added to melt it?',
      type: 'mcq',
      choices: ['More than 1 J', 'Exactly 1 J', 'Less than 1 J but more than 0 J', 'Less than 0 J'],
      correct: 0,
      explanation: 'Raising one mole by 1 K to reach the melting point takes 1 J (q = mcΔT). But reaching the melting point is not enough — additional heat (the heat of fusion) is required to actually drive the phase change. So the total exceeds 1 J.'
    },
    {
      q: 'Which of the following is NOT a state function?',
      type: 'mcq',
      choices: ['Internal energy', 'Heat', 'Temperature', 'Entropy'],
      correct: 1,
      explanation: 'State functions are path-independent: pressure, density, temperature, volume, enthalpy, internal energy, Gibbs free energy, and entropy. Heat and work are process functions — they depend on the pathway taken between states.'
    },
    {
      q: 'A thick metal container has two compartments: A is full of hot gas, B is full of cold gas. What is the primary mode of heat transfer in this system?',
      type: 'mcq',
      choices: ['Radiation', 'Convection', 'Conduction', 'Enthalpy'],
      correct: 2,
      explanation: 'Heat passes from the warm gas to the metal and then to the cold gas by direct contact — conduction. Convection is ruled out because the gas is not flowing; radiation is implausible across thick metal; and enthalpy is not a mode of heat transfer at all.'
    },
    {
      q: 'Substances A and B have the same freezing and boiling points. Heated identically from the solid state, substance A boils before substance B. Which would NOT explain this?',
      type: 'mcq',
      choices: [
        'Substance B has a higher specific heat.',
        'Substance B has a higher heat of vaporization.',
        'Substance B has a higher heat of fusion.',
        'Substance B has a higher internal energy.'
      ],
      correct: 3,
      explanation: 'The heat needed to reach and complete each transition depends on specific heat, heat of fusion, and heat of vaporization — all of which (if higher for B) would delay B’s boiling. Internal energy is irrelevant to the heat required for warming and phase changes, so it cannot explain the difference.'
    },
    {
      q: 'In experiment A a student mixes ink with water and the liquids mix evenly. In experiment B the student mixes oil with water and the liquids separate into layers. The entropy change is:',
      type: 'mcq',
      choices: [
        'positive in A and negative in B.',
        'positive in A and zero in B.',
        'negative in A and positive in B.',
        'zero in A and negative in B.'
      ],
      correct: 1,
      explanation: 'Ink dispersing through water yields a more disordered final state — positive entropy change (and the mixing is irreversible). Oil separating from water leaves the components just as separate as before, so the entropy change is zero (the process is reversible).'
    },
    {
      q: 'Which process is LEAST likely to be accompanied by a change in temperature?',
      type: 'mcq',
      choices: [
        'The kinetic energy of a gas is increased through a chemical reaction.',
        'Energy is transferred to a solid via electromagnetic waves.',
        'A boiling liquid is heated on a hot plate.',
        'A warm gas is mixed with a cold gas.'
      ],
      correct: 2,
      explanation: 'A boiling liquid is undergoing a phase change, so added heat goes into the heat of transformation at constant temperature. Increasing kinetic energy (A) is essentially a temperature increase; radiation to a solid (B) raises its temperature; mixing warm and cold gas (D) brings both to an intermediate temperature.'
    }
  ]
};
