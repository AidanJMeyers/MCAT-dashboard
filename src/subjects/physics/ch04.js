// Physics & Math Chapter 4 — Fluids. Re-authored to the rich-formatting quality bar.
// Figures and section titles come from ch04.json; questions are reconstructed from
// scratch_physics/ch04_q.md (the JSON `questions` array is empty for physics).
// recap/detail markdown, tables, callouts, equations, and mnemonics are authored here.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 4,
  title: 'Fluids',
  subtitle: 'Characteristics of fluids & solids · hydrostatics · fluid dynamics · fluids in physiology',

  blocks: [
    /* ───────────── 4.1 Characteristics of Fluids and Solids ───────────── */
    {
      id: 's1', num: '4.1', title: 'Characteristics of Fluids and Solids',
      goals: [
        'Predict when gauge pressure will equal fluid pressure for a column of fluid',
        'Relate weight and density for an object',
        'Recall the common units for pressure and the equations for gauge pressure and absolute pressure'
      ],
      recap: `
- A **fluid** flows and conforms to its container; a **solid** is rigid. **Liquids and gases are both fluids.**
- Both fluids and solids exert **perpendicular (normal) forces**, but **only solids withstand shear** (tangential) forces.
- **Density** $\\rho = \\dfrac{m}{V}$ (scalar). Water $= 1000\\ \\text{kg/m}^3 = 1\\ \\text{g/cm}^3$. **Weight of a volume** $= \\rho V g$.
- **Pressure** $P = \\dfrac{F}{A}$ is a **scalar** (uses the *magnitude* of the normal force). SI unit = **pascal** ($1\\ \\text{Pa} = 1\\ \\text{N/m}^2$).
- **Absolute** $P = P_0 + \\rho g z$; **gauge** $P_{gauge} = P - P_{atm}$. When $P_0 = P_{atm}$, gauge pressure $= \\rho g z$.
`,
      detail: `
#### Fluids vs. solids
- **Fluids** (liquids *and* gases) flow and take the shape of their container.
- **Solids** do not flow; they hold a shape independent of any container.
- **Both** can exert **perpendicular (normal) forces** on a surface.
- **Only solids can withstand shear (tangential) forces** — this is the single defining mechanical difference.

:::keyconcept
Falling into water from a great height hurts because a fluid *can* impose large **perpendicular** forces. What a fluid **cannot** do is resist a **shear** force — push it sideways and it simply flows.
:::

#### Density
**Density** is mass per unit volume — a **scalar** (no direction):

$$\\rho = \\frac{m}{V}$$

- SI units: $\\text{kg/m}^3$. Also common on the MCAT: $\\text{g/cm}^3$ and $\\text{g/mL}$.
- **A milliliter and a cubic centimeter are the same volume** ($1\\ \\text{mL} = 1\\ \\text{cm}^3$).
- **Trap:** the liter and the cubic meter are *not* equal — there are **1000 L in 1 m³**.
- **Memorize the density of water:** $\\rho_{water} = 1000\\ \\text{kg/m}^3 = 1\\ \\text{g/cm}^3$.

The **weight** of a known volume of a substance (used constantly in buoyancy problems):

$$F_g = \\rho V g$$

##### Specific gravity
**Specific gravity** compares a substance's density to that of pure water at $1\\ \\text{atm}$ and $4^{\\circ}\\text{C}$ (where $\\rho_{water}$ is exactly $1\\ \\text{g/cm}^3$):

$$\\text{SG} = \\frac{\\rho_{substance}}{\\rho_{water}}$$

- A **unitless** decimal.
- It predicts whether an object will **sink or float** in water (covered in 4.2).

:::expertise
If a density is given in $\\text{g/cm}^3$, its **specific gravity is just that same number** without units — because $\\rho_{water} = 1\\ \\text{g/cm}^3$. Example: benzene at $0.87\\ \\text{g/cm}^3$ has SG $= 0.87$.
:::

#### Pressure
**Pressure** is force per unit area:

$$P = \\frac{F}{A}$$

- $F$ is the **magnitude of the normal force**; $A$ is the area.
- SI unit: the **pascal**, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$.
- Pressure is a **scalar** — it has magnitude but **no direction**. It acts in *all* directions at any point inside a fluid.

:::expertise
Forget a variable's units? **Derive them from the equation.** Since $P = F/A$, the pascal must be $\\dfrac{\\text{N}}{\\text{m}^2}$.
:::

##### Common pressure units (memorize the conversion)

| Unit | Equivalent | Notes |
|---|---|---|
| **pascal (Pa)** | $1\\ \\text{N/m}^2$ | SI unit |
| **atmosphere (atm)** | $1.013 \\times 10^{5}\\ \\text{Pa}$ | avg. atmospheric pressure at sea level |
| **mmHg** | — | millimeters of mercury |
| **torr** | $\\equiv$ mmHg | **identical** to mmHg |

$$1\\ \\text{atm} = 1.013 \\times 10^{5}\\ \\text{Pa} = 760\\ \\text{mmHg} = 760\\ \\text{torr}$$

Because $P = F/A$, **unequal** pressures on the two faces of an object produce a **net force** (the forces add as vectors). That pressure difference drives air into and out of the lungs and bursts windows outward in a tornado.

#### Absolute (hydrostatic) pressure
The **total** pressure on a submerged object:

$$P = P_0 + \\rho g z$$

- $P_0$ = **incident/ambient (surface) pressure**, $\\rho$ = fluid density, $g$ = gravity, $z$ = **depth**.
- **Trap:** $P_0$ is *not* always atmospheric. In open air $P_0 = 1\\ \\text{atm}$, but in a sealed **pressure cooker** the surface pressure is far higher (which raises water's boiling point and speeds cooking).

:::realworld
Picture diving into a pool. At the surface the pressure equals atmospheric ($P_0$). As you descend, the water adds an extra $\\rho g z$ — the pressure you feel on your eardrums.
:::

#### Gauge pressure
A tire **gauge** reads the pressure *above* atmospheric — the difference between absolute pressure and atmospheric pressure:

$$P_{gauge} = P - P_{atm} = (P_0 + \\rho g z) - P_{atm}$$

- When the only pressure above the fluid column is atmospheric ($P_0 = P_{atm}$), the terms cancel:

$$P_{gauge} = \\rho g z$$

:::mnemonic
**"Gauge = the part you'd notice."** Absolute pressure includes the whole atmosphere pushing down; **gauge** strips out the atmosphere you already live in, leaving just the *extra* pressure from the fluid column ($\\rho g z$).
:::

##### Worked logic — diver at 20 m (seawater)
With $P_0 = P_{atm}$: $P_{gauge} = \\rho g z$. Then $P_{absolute} = P_{atm} + P_{gauge}$. A 20 m dive gives $P_{gauge} \\approx 2.01 \\times 10^{5}\\ \\text{Pa}$, so $P_{absolute} = 1.013 \\times 10^{5} + 2.01 \\times 10^{5} \\approx 3.02 \\times 10^{5}\\ \\text{Pa}$.
`
    },

    /* ───────────────────────── 4.2 Hydrostatics ───────────────────────── */
    {
      id: 's2', num: '4.2', title: 'Hydrostatics',
      goals: [
        'Distinguish between cohesion and adhesion',
        'Predict the appearance of a meniscus from a fluid\'s cohesive and adhesive properties',
        'Calculate the buoyant force acting on an object',
        'Apply the concept of specific gravity',
        'Solve hydraulic-lift problems using Pascal\'s principle'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 4.1 — Hydraulic lift: a small force on the small piston (area A₁) is transmitted as a much larger force on the large piston (area A₂).' }],
      recap: `
- **Pascal's principle:** pressure applied to a confined **incompressible** fluid transmits **undiminished** everywhere → $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$. Bigger area = bigger force (over a shorter distance). **No free work** — energy is conserved.
- **Archimedes' principle:** buoyant force $F_{buoy} = \\rho_{fluid} V_{submerged}\\, g$. **Use the fluid's density, never the object's.**
- An object **floats if its average density < the fluid's**, sinks if greater. **SG (in water) = fraction of volume submerged.**
- **Cohesion** = attraction to *like* molecules (→ **surface tension**); **adhesion** = attraction to a *different* surface.
- **Concave meniscus** when adhesion > cohesion (water); **convex** when cohesion > adhesion (mercury).
`,
      detail: `
#### Pascal's principle
For an **incompressible** fluid (volume essentially unchanged by pressure), an applied **change in pressure is transmitted undiminished** to every part of the fluid and the container walls.

Squeeze a sealed milk carton and pop the cap — the geyser is the transmitted pressure made visible.

##### Hydraulic systems

![Figure 4.1 — Hydraulic lift](${fig(1, 1).src})

A hydraulic lift uses near-incompressibility to create **mechanical advantage**. Push piston 1 (area $A_1$) with force $F_1$; the same pressure appears at piston 2 (area $A_2$), so $P_1 = P_2$:

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$$

- The output force is magnified by the area ratio: $F_2 = F_1 \\dfrac{A_2}{A_1}$.
- **Energy is conserved.** The incompressible fluid moves the *same volume* on both sides ($A_1 d_1 = A_2 d_2$), so the larger force acts through a **smaller distance**. Work in = work out (an **isobaric** process, $W = P\\,\\Delta V$).

:::keyconcept
**Larger area → larger force, but through a smaller distance.** The operator always pushes the **small** piston: a small force over a small area still generates the needed pressure, and it travels the longer distance.
:::

##### Worked logic — hydraulic press
Small piston $r = 5\\ \\text{cm}$ holds a $50\\ \\text{kg}$ weight; large piston $r = 20\\ \\text{cm}$. Equilibrium needs $P_1 = P_2$, so $F_2 = F_1 \\dfrac{A_2}{A_1} = F_1 \\dfrac{r_2^{\\,2}}{r_1^{\\,2}} = F_1 \\cdot 16$. The larger piston needs **16×** the force to balance the system.

#### Archimedes' principle
A body wholly or partly immersed is **buoyed upward by a force equal to the weight of the fluid it displaces**:

$$F_{buoy} = \\rho_{fluid} V_{fluid\\ displaced}\\, g = \\rho_{fluid} V_{submerged}\\, g$$

- The buoyant force always points **opposite gravity** (upward).
- It depends on the **displaced fluid**, not the object — two objects displacing the *same volume* feel the *same* buoyant force, regardless of their masses.

:::expertise
The #1 mistake: plugging in the **object's** density. **Always use the density of the *fluid*** in $F_{buoy} = \\rho_{fluid} V g$.
:::

##### Sink, float, and how much is submerged

| Condition | Result |
|---|---|
| $\\rho_{object} < \\rho_{fluid}$ | **Floats** — submerges only enough volume to displace its own weight |
| $\\rho_{object} = \\rho_{fluid}$ | **Suspended** — 100% submerged but neutrally buoyant (doesn't sink) |
| $\\rho_{object} > \\rho_{fluid}$ | **Sinks** — even fully submerged, weight > max buoyant force |

For a floating object in water, **specific gravity = the fraction of volume submerged**. Ice (SG $= 0.92$) floats with **92% submerged**, only 8% above water.

:::realworld
A steel cruise ship floats because its **average** density — steel hull *plus* the huge volume of enclosed air — is less than water's. The hull alone would sink. The Dead Sea (SG $\\approx 1.24$) is so dense that humans (SG $\\approx 1.1$) cannot help but float.
:::

##### Worked logic — half-submerged wood block
Floating ⇒ buoyant force = weight: $\\rho_{water} V_{sub}\\, g = \\rho_{block} V_{block}\\, g$. With $V_{sub} = \\tfrac{1}{2} V_{block}$, the wood's density is **half the seawater density**.

#### Molecular forces in liquids
Water striders skate on water — denser than water yet held up by **surface tension**.

| Force | Definition | Result |
|---|---|---|
| **Cohesion** | Attraction between molecules of the **same** liquid | **Surface tension**: surface molecules are pulled inward/downward, forming a taut "skin" |
| **Adhesion** | Attraction between the liquid and a **different** substance | Water droplets cling to a windshield against gravity |

##### Menisci

![Figure 4.2 — Types of menisci](${fig(1, 4).src})

When a liquid sits in a container, it curves at the wall:

- **Concave (normal) meniscus** — liquid "crawls up" the wall; forms when **adhesion > cohesion** (e.g., **water** in glass). *Most common.* Read measurements at the **bottom** of the curve.
- **Convex (backward) meniscus** — liquid bulges higher in the middle; forms when **cohesion > adhesion** (e.g., **mercury**, the only metal liquid at room temperature). Read at the **top**.
- **Equal** adhesion and cohesion → **flat surface, no meniscus**.

:::mnemonic
**"Water Wants the Wall"** — water's strong **adhesion** makes it climb the glass → **concave**. Mercury keeps to itself (**cohesion** wins) → **convex**, bulging away from the wall.
:::
`
    },

    /* ──────────────────────── 4.3 Fluid Dynamics ──────────────────────── */
    {
      id: 's3', num: '4.3', title: 'Fluid Dynamics',
      goals: [
        'Describe laminar flow, turbulent flow, dynamic and static pressure, pitot tubes, and viscosity',
        'Predict fluid behavior using the continuity equation, Bernoulli\'s equation, and the Venturi effect',
        'Recall the variables involved in flow rate'
      ],
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 4.5 — Streamlines: as cross-sectional area increases from P to Q, the streamlines spread out and the fluid slows.' }],
      recap: `
- **Viscosity** ($\\eta$) = resistance to flow → **viscous drag** (nonconservative). Low-viscosity fluids behave **ideal/inviscid**; MCAT assumes negligible viscosity so **Bernoulli** holds.
- **Laminar** flow = smooth parallel layers; **turbulent** flow = eddies. Turbulence begins above the **critical speed** $v_c = \\dfrac{N_R \\eta}{\\rho D}$.
- **Poiseuille's law:** $Q = \\dfrac{\\pi r^4 \\Delta P}{8 \\eta L}$ — flow rate scales with the **fourth power of radius**.
- **Continuity equation:** $Q = v_1 A_1 = v_2 A_2$ (conservation of mass). Narrow tube → **faster** linear speed (flow rate stays constant).
- **Bernoulli:** $P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$ (energy conservation). At equal height, **faster fluid = lower pressure** (Venturi effect); the basis of wing lift and pitot tubes.
`,
      detail: `
#### Viscosity
**Viscosity** ($\\eta$, "eta") is a fluid's internal resistance to flow.

- High viscosity → high **viscous drag** (a **nonconservative** force, like air resistance) → more energy "lost."
- **Thin/low-viscosity:** gases, water, dilute aqueous solutions (flow easily).
- **Thick/high-viscosity:** whole blood, vegetable oil, honey, cream, molasses.
- Low-viscosity fluids approximate **ideal (inviscid)** fluids (zero viscosity).
- SI unit: the **pascal-second** ($\\text{Pa}\\cdot\\text{s}$).

:::keyconcept
Unless told otherwise, **assume viscosity is negligible** on Test Day. That lets you treat **Bernoulli's equation as energy conservation** for the flowing fluid. (Superfluids are *not* tested.)
:::

#### Laminar and turbulent flow

![Figure 4.3 — Laminar flow around an object](${fig(2, 0).src})

| | **Laminar flow** | **Turbulent flow** |
|---|---|---|
| Pattern | Smooth, orderly, **parallel layers** | Rough, disorderly; forms **eddies** |
| Where | Below the critical speed | Above critical speed / downstream of obstacles |
| Speed profile | Slowest at the wall, fastest in the center | Irregular; only a thin **boundary layer** stays laminar |
| Energy | Conserved (Bernoulli applies) | Dissipated by friction (**Bernoulli does NOT apply**) |

![Figure 4.4 — Turbulent flow: eddies form downstream of an obstacle](${fig(2, 1).src})

Turbulence appears once the fluid exceeds a **critical speed** $v_c$:

$$v_c = \\frac{N_R\\, \\eta}{\\rho D}$$

- $N_R$ = **Reynolds number** (dimensionless; depends on size, shape, surface roughness), $\\eta$ = viscosity, $\\rho$ = density, $D$ = tube diameter.
- At the wall the flow speed is **zero**, rising through the thin **boundary layer**; beyond it, motion is fully turbulent.
- **The MCAT always assumes laminar flow** for Bernoulli problems.

#### Poiseuille's law
For laminar flow through a pipe, the **flow rate** $Q$ (volume per time):

$$Q = \\frac{\\pi r^4 \\Delta P}{8 \\eta L}$$

- $r$ = tube radius, $\\Delta P$ = pressure gradient, $\\eta$ = viscosity, $L$ = pipe length.
- **The radius dominates** — $Q \\propto r^4$. A tiny change in radius hugely changes flow (or the pressure gradient needed for a fixed flow).
- $Q$ **increases** with larger radius or pressure gradient; **decreases** with higher viscosity or longer pipe.

:::mnemonic
**"Radius rules — to the fourth."** Double the radius and flow jumps **16×**. This is why even slight vessel narrowing (atherosclerosis) so drastically cuts blood flow.
:::

#### Streamlines & the continuity equation

![Figure 4.5 — Streamlines spreading as the tube widens from P to Q](${fig(2, 2).src})

**Streamlines** trace the path of tiny fluid elements; the velocity vector is always **tangent** to the streamline, and **streamlines never cross**.

For an **incompressible** fluid in a closed system, the same volume passes every point per unit time — conservation of mass. Flow rate $Q$ = linear speed × area, and it is **constant**:

$$Q = v_1 A_1 = v_2 A_2$$

This is the **continuity equation**. Flow rate is constant, but **linear speed rises as cross-sectional area falls** — fluids speed up through narrow passages.

:::keyconcept
**Flow rate ($Q$) is constant; linear speed is not.** Narrow the tube and the *speed* increases even though the *volume per second* is unchanged. (Note: $A \\propto d^2$, so halving the diameter quarters the area and **quadruples** the speed.)
:::

#### Bernoulli's equation
Combine conservation of **mass** (continuity) with conservation of **energy** (low-viscosity, laminar) and you get Bernoulli's equation — constant between any two points in a closed system:

$$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$$

| Term | Name | Meaning |
|---|---|---|
| $\\tfrac{1}{2}\\rho v^2$ | **Dynamic pressure** | Energy density of the fluid's **motion** (kinetic energy per volume) |
| $\\rho g h$ | (gravitational term) | Energy density from the fluid's **height** |
| $P + \\rho g h$ | **Static pressure** | Same as absolute pressure; energy density not tied to bulk motion |

- Pressure itself is an **energy density** ($\\text{Pa} = \\text{J/m}^3$): higher pressure = higher energy density.
- **Bottom line:** more energy in **motion** (dynamic pressure) means less in **static** pressure. At equal heights, **faster fluid ⇒ lower pressure** (and vice versa).

##### Applications

![Figure 4.6 — Aerodynamics of an airplane wing](${fig(2, 3).src})

- **Airplane lift:** the curved wing top forces air to travel **farther and faster** than the flatter air below. Slower air below = **higher pressure** ⇒ net upward lift.
- **Pitot tube:** measures the difference between **static and dynamic** pressure to find flow speed.
- **Venturi flow meter:** as the tube **narrows** (point 2), continuity raises the speed; Bernoulli then **lowers the absolute pressure**, so the fluid column above point 2 is **shorter**. This is the **Venturi effect** — at equal height, narrower section ⇒ faster ⇒ lower pressure.

![Figure 4.7 — Venturi flow meter: the column is lower where the tube narrows](${fig(2, 4).src})

:::mnemonic
**"Fast and low, slow and high."** Speed and pressure trade off at constant height. The narrowest part of a pipe is where the fluid is **fastest** and the pressure (and the standing column) is **lowest**.
:::

:::bridge
Bernoulli is just **energy conservation** dressed for fluids — dynamic pressure is kinetic energy per volume, $\\rho g h$ is gravitational PE per volume. Compare with *MCAT Physics and Math Review*, Ch. 2 (Work & Energy).
:::
`
    },

    /* ─────────────────────── 4.4 Fluids in Physiology ─────────────────── */
    {
      id: 's4', num: '4.4', title: 'Fluids in Physiology',
      goals: [
        'Recall the conditions under which the continuity equation applies to human circulation',
        'Describe how total airway resistance changes during exhalation',
        'Compare flow volume and flow rate in different areas of the circulatory system'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure — The circulatory system is a closed loop with nonconstant (pulsatile) flow.' }],
      recap: `
- The circulatory system is a **closed loop with nonconstant (pulsatile) flow** → the continuity equation **does not** strictly apply (use **Poiseuille** for isolated segments).
- Each vessel has higher resistance than the last, but **total resistance falls** toward the capillaries because the many vessels are in **parallel** (huge combined cross-sectional area → slow flow).
- **Venous circulation holds ~3× the volume of arterial**; return is aided by **skeletal-muscle squeezing**, heart expansion, and **thoracic pressure** changes.
- **Blood volume entering the heart = volume leaving** each cycle. **Heart murmurs = turbulent flow.**
- Respiration is pressure-driven (negative gradient on inspiration); **air at the alveoli has essentially zero speed.**
`,
      detail: `
#### Circulatory system
Blood flow follows fluid principles **with modifications** — it is a **closed loop** but the flow rate is **nonconstant**.

- Nonconstant flow comes from **valves, gravity, vessel elasticity, and heart mechanics** — felt as the **pulse**.
- Some fluid leaves circulation (imbalance of **hydrostatic vs. oncotic/osmotic** pressure) and returns via the **lymphatic system** — which breaks the assumptions of the continuity equation.
- **Key invariant:** the **volume entering the heart equals the volume leaving** during one cardiac cycle.

##### Resistance and cross-sectional area
- Moving away from the heart, **each individual vessel has higher resistance**, peaking at the capillaries.
- **But total system resistance decreases** — the enormous number of capillaries sit in **parallel**, and (like parallel resistors) parallel paths **lower** the equivalent resistance.
- The **combined cross-sectional area** of all capillaries far exceeds the aorta's, so by continuity blood flows **slowest** in the capillaries (ideal for exchange).

:::bridge
Capillaries in **parallel** behave like **parallel resistors**: more paths → lower total resistance. See *MCAT Physics and Math Review*, Ch. 10 (Circuits).
:::

##### Venous return
- **Venous circulation holds ~3× the blood volume** of arterial circulation.
- Return to the heart is driven by **skeletal-muscle contraction** (squeezing limb veins), **cardiac expansion** (suction), and **thoracic pressure gradients** from breathing.
- **Heart murmurs** are audible because structural defects create **turbulent** blood flow.

:::keyconcept
The **continuity equation does NOT apply to whole circulation** (pulses, elastic vessels, fluid loss). Use **Poiseuille's law** for individual, rigid-ish segments instead.
:::

#### Respiratory system
- Breathing is **pressure-driven**, with the **same resistance relationship** as circulation.
- **Inspiration:** a **negative pressure gradient** pulls air into the lungs; **expiration** reverses it.
- During **exhalation**, total airway resistance **increases** as air moves from alveoli outward — even though individual airways widen, there are **fewer airways in parallel**.
- **Air at the alveoli has essentially zero speed.**

:::realworld
Asthma (narrowed airways → turbulent, high-resistance flow) and heart murmurs (turbulent blood flow) are both clinical manifestations of these same fluid-dynamics principles.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Characteristics of Fluids and Solids',
        points: [
          '**Fluids** (liquids and gases) flow and conform to their container; **solids** retain shape. Both exert **perpendicular** forces, but **only solids resist shear**.',
          '**Density** $\\rho = m/V$ is a scalar; water $= 1000\\ \\text{kg/m}^3 = 1\\ \\text{g/cm}^3$. **Weight of a volume** $= \\rho V g$.',
          '**Pressure** $P = F/A$ is a **scalar** (magnitude of the normal force); SI unit pascal, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$.',
          '**Absolute pressure** $= P_0 + \\rho g z$ (surface pressure + fluid pressure). **Gauge pressure** $= P - P_{atm}$; equals $\\rho g z$ when $P_0 = P_{atm}$.'
        ]
      },
      {
        section: 'Hydrostatics',
        points: [
          '**Pascal\'s principle:** pressure on a confined incompressible fluid transmits undiminished → hydraulic mechanical advantage, $F_1/A_1 = F_2/A_2$, with energy conserved.',
          '**Archimedes\' principle:** buoyant force = weight of displaced fluid, $F_{buoy} = \\rho_{fluid} V_{submerged} g$, directed **opposite gravity**.',
          'An object **floats if less dense** than the fluid, **sinks if more dense**. In water, **SG = fraction of volume submerged**.',
          '**Cohesion** (like-molecule attraction) creates **surface tension**; **adhesion** is attraction to other substances. Adhesion > cohesion → **concave** meniscus; cohesion > adhesion → **convex**.'
        ]
      },
      {
        section: 'Fluid Dynamics',
        points: [
          '**Viscosity** is internal friction; **viscous drag** is a nonconservative force. MCAT assumes low viscosity + laminar flow → energy conservation.',
          'Flow is **laminar** (smooth) or **turbulent** (eddies). **Poiseuille\'s law** ($Q \\propto r^4$) governs laminar flow rate.',
          '**Continuity equation** $Q = v_1 A_1 = v_2 A_2$ = conservation of mass: flow rate constant, speed rises in narrow sections.',
          '**Bernoulli\'s equation** = energy conservation: static + dynamic pressure constant. At equal height, **faster fluid ⇒ lower pressure** (Venturi effect).'
        ]
      },
      {
        section: 'Fluids in Physiology',
        points: [
          'The circulatory system is a **closed system with nonconstant (pulsatile) flow**; continuity does not strictly apply.',
          '**Total resistance falls** as total cross-sectional area rises (capillaries in parallel) → slow capillary flow.',
          'Arterial flow is driven by the **heart**; **venous circulation holds ~3× the volume** and is driven by skeletal muscle and cardiac expansion.',
          'Inspiration/expiration create pressure gradients for both lungs and circulation; **air at the alveoli has ~zero speed**.'
        ]
      }
    ],
    mnemonics: [
      '**Gauge vs. absolute:** gauge pressure is the *extra* pressure beyond the atmosphere you already live in — strip out $P_{atm}$ and (when $P_0 = P_{atm}$) you\'re left with $\\rho g z$.',
      '**Buoyancy — "blame the fluid":** $F_{buoy} = \\rho_{fluid} V g$ always uses the **fluid\'s** density, never the object\'s. Same displaced volume = same buoyant force.',
      '**Float test:** less dense than the fluid → floats; **SG (in water) = % of volume submerged** (ice SG 0.92 → 92% under).',
      '**"Water Wants the Wall":** strong adhesion → water climbs glass → **concave** meniscus; mercury\'s cohesion wins → **convex**.',
      '**Pascal\'s lift:** push the **small** piston — small force, long distance in; large force, short distance out. **No free work.**',
      '**"Radius rules — to the fourth":** Poiseuille $Q \\propto r^4$, so doubling radius gives **16×** flow.',
      '**"Fast and low, slow and high":** Bernoulli at equal height — faster fluid has **lower** pressure; the narrowest pipe section is fastest and lowest-pressure (Venturi).'
    ],
    keyConcepts: [
      '**Only solids resist shear.** Fluids exert and withstand perpendicular forces but flow under any tangential (shear) force — the defining distinction.',
      '**Pressure is a scalar energy density.** $P = F/A$ uses the force *magnitude* and acts in all directions; $\\text{Pa} = \\text{J/m}^3$, which is why pressure fits into Bernoulli\'s energy equation.',
      '**Continuity (mass) + low-viscosity energy conservation = Bernoulli.** Flow rate is constant; trading speed for pressure at equal height drives wing lift, pitot tubes, and the Venturi effect.',
      '**Physiology bends the rules:** pulsatile, elastic, leaky circulation breaks strict continuity; capillaries in parallel give the largest total area (slowest flow) and lowest total resistance.'
    ],
    equations: [
      { name: 'Density', tex: '\\rho = \\dfrac{m}{V}', note: 'Scalar. Water = 1000 kg/m³ = 1 g/cm³.' },
      { name: 'Weight of a volume of fluid', tex: 'F_g = \\rho V g', note: 'Used constantly in buoyancy problems.' },
      { name: 'Specific gravity', tex: '\\text{SG} = \\dfrac{\\rho_{substance}}{\\rho_{water}}', note: 'Unitless. In water, SG = fraction of volume submerged.' },
      { name: 'Pressure', tex: 'P = \\dfrac{F}{A}', note: 'Scalar; SI unit pascal (1 Pa = 1 N/m²). 1 atm = 1.013×10⁵ Pa = 760 mmHg = 760 torr.' },
      { name: 'Absolute (hydrostatic) pressure', tex: 'P = P_0 + \\rho g z', note: 'P₀ = surface pressure (not always atm); z = depth.' },
      { name: 'Gauge pressure', tex: 'P_{gauge} = P - P_{atm} = (P_0 + \\rho g z) - P_{atm}', note: 'Equals ρgz when P₀ = P_atm.' },
      { name: "Pascal's principle", tex: '\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}', note: 'Hydraulic mechanical advantage; energy conserved (larger force × smaller distance).' },
      { name: 'Buoyant force (Archimedes)', tex: 'F_{buoy} = \\rho_{fluid} V_{submerged}\\, g', note: 'Use the FLUID density, not the object density.' },
      { name: "Poiseuille's law", tex: 'Q = \\dfrac{\\pi r^4 \\Delta P}{8 \\eta L}', note: 'Laminar flow rate. Q ∝ r⁴ — radius dominates.' },
      { name: 'Critical speed', tex: 'v_c = \\dfrac{N_R\\, \\eta}{\\rho D}', note: 'Onset of turbulence; N_R = Reynolds number (dimensionless).' },
      { name: 'Continuity equation', tex: 'Q = v_1 A_1 = v_2 A_2', note: 'Conservation of mass; narrow tube → faster speed.' },
      { name: "Bernoulli's equation", tex: 'P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}', note: 'Energy conservation; faster fluid → lower pressure at equal height.' }
    ]
  },

  questions: [
    {
      q: 'Objects A and B are submerged at a depth of 1 m in a liquid with a specific gravity of 0.877. The density of object B is one-third that of object A, and the gauge pressure on object A is 3 atm. What is the gauge pressure on object B? (Assume atmospheric pressure is 1 atm.)',
      type: 'mcq',
      choices: ['1 atm', '2 atm', '3 atm', '9 atm'],
      correct: 2,
      explanation: 'Gauge pressure depends only on the **fluid**, not the object. With the surface pressure equal to atmospheric, $P_{gauge} = \\rho g z$ where $\\rho$ is the *fluid* density. Both objects sit at the same depth in the same liquid, so they experience the **same** gauge pressure: 3 atm.'
    },
    {
      q: 'An iron anchor weighs 833 N on the deck of a ship. When it is suspended in seawater by a massless chain, what is the tension in the chain? (Density of iron ≈ 7800 kg/m³; density of seawater ≈ 1025 kg/m³.)',
      type: 'mcq',
      choices: ['100 N', '724 N', '833 N', '957 N'],
      correct: 1,
      explanation: 'In equilibrium, $T = F_g - F_{buoy}$. The fully submerged anchor displaces a volume equal to its own ($V = m/\\rho_{iron}$). Computing the buoyant force from the seawater gives $F_{buoy} \\approx 109\\ \\text{N}$, so $T = 833 - 109 = 724\\ \\text{N}$. Shortcut: buoyancy and tension both oppose gravity, so tension should be slightly **less** than the anchor\'s weight — choice (B).'
    },
    {
      q: 'Two wooden balls of equal volume but different density are held underwater. Ball A is less dense than ball B. When released, both accelerate upward. How do their accelerations compare?',
      type: 'mcq',
      choices: ['Ball A has the greater acceleration.', 'Ball B has the greater acceleration.', 'Balls A and B have the same acceleration.', 'It cannot be determined from the information given.'],
      correct: 0,
      explanation: 'By Newton\'s second law, $F_{buoy} - mg = ma$. Both balls have the **same volume in the same fluid**, so they feel the **same buoyant force** ($F_{buoy} = \\rho V g$). The ball with the smaller mass (smaller density, since $m = \\rho V$) accelerates more. That is **ball A**.'
    },
    {
      q: 'Water flows from a pipe of diameter 0.15 m into a pipe of diameter 0.20 m. Compared with the speed in the 0.15 m pipe, the speed in the 0.20 m pipe is:',
      type: 'mcq',
      choices: ['greater, by a factor of 4/3', 'greater, by a factor of 16/9', 'smaller, by a factor of 9/16', 'unchanged'],
      correct: 2,
      explanation: 'By the continuity equation $v_A A_A = v_B A_B$, speed is inversely proportional to cross-sectional area, and area $\\propto d^2$. Going from 0.15 m to the **wider** 0.20 m pipe slows the fluid by $(0.15/0.20)^2 = 9/16$. The fluid is slower in the wider pipe.'
    },
    {
      q: 'A hydraulic lever lifts a hospital bed with work W. Lifting the same bed plus a patient requires double the work (and thus double the force). How must the cross-sectional area of the platform change to keep the pressure on the lever constant?',
      type: 'mcq',
      choices: ['The cross-sectional area must be doubled.', 'The cross-sectional area must be halved.', 'The cross-sectional area must be divided by four.', 'The cross-sectional area must remain constant.'],
      correct: 0,
      explanation: 'Pascal\'s principle keeps pressure $P = F/A$ constant. If the required force **doubles**, the area must also **double** so that $F/A$ is unchanged.'
    },
    {
      q: 'A horizontal pipe of varying diameter has four open vertical pipes connected to it. As water flows through, in which vertical pipe is the water level lowest?',
      type: 'mcq',
      choices: ['Pipe 1', 'Pipe 2 (the narrowest section)', 'Pipe 3', 'Pipe 4'],
      correct: 1,
      explanation: 'All vertical pipes share the same atmospheric pressure, so column heights depend only on the hydrostatic pressure in the horizontal pipe. Where the pipe is **narrowest**, the water flows **fastest** and the pressure is **lowest** (Venturi effect) — so the column at the narrow section (pipe 2) is lowest.'
    },
    {
      q: 'Blood moves much faster in the aorta than through a capillary bed. Using the continuity equation (average flow, no net fluid loss), how is this explained?',
      type: 'mcq',
      choices: ['The aorta is located higher than the capillary bed.', 'The pressure in the aorta equals the pressure in the capillary bed.', 'The combined cross-sectional area of all the capillaries is much greater than that of the aorta.', 'The cross-sectional area of a single capillary is much smaller than that of the aorta.'],
      correct: 2,
      explanation: 'Continuity ($A_1 v_1 = A_2 v_2$) makes speed inversely proportional to cross-sectional area. Slow capillary flow implies a **larger total area** — the thousands of capillaries in parallel sum to a far greater combined cross-sectional area than the aorta. (A single capillary is tiny, but that\'s not what governs the *total* flow.)'
    },
    {
      q: 'Which data set is sufficient to determine the linear speed through a region of a rigid pipe?',
      type: 'mcq',
      choices: ['The cross-sectional area in another segment of pipe and the cross-sectional area in the region of interest', 'The Reynolds number, viscosity, density, and diameter of the pipe', 'The radius of the pipe, the pressure gradient, the viscosity, and the length of the pipe', 'The absolute pressure and the density'],
      correct: 2,
      explanation: 'Choice (C) gives everything Poiseuille\'s law needs to find flow rate $Q$, which divided by the cross-sectional area (from the radius) yields linear speed. (A) needs the flow rate in the other segment to use continuity; (B) only gives the critical speed for turbulence; (D) gives only depth information.'
    },
    {
      q: 'An object of density 2 g/cm³ is submerged to a depth of 25 cm in dichloromethane (specific gravity 1.33). What is the total (absolute) pressure on the object? (Take g ≈ 10 m/s², P_atm ≈ 101 kPa.)',
      type: 'mcq',
      choices: ['3.3 kPa', '104 kPa', '332 kPa', '433 kPa'],
      correct: 1,
      explanation: 'Use $P_{tot} = P_{atm} + \\rho g z$. The **fluid\'s** density (not the object\'s) is $1330\\ \\text{kg/m}^3$ (SG 1.33), and $z = 0.25\\ \\text{m}$. So $P_{tot} = 101\\ \\text{kPa} + (1330)(10)(0.25) \\approx 101 + 3.3 \\approx 104\\ \\text{kPa}$. The object\'s density is a distractor.'
    },
    {
      q: 'In a hydraulic tank, a force F₁ = 4 N is applied to a flexible cover of area A₁ = 16. A second area A₂ = 64 must be held so the water levels do not change. What force must be applied to A₂?',
      type: 'mcq',
      choices: ['4 N', '16 N', '32 N', 'No force needs to be applied.'],
      correct: 1,
      explanation: 'Pascal\'s principle: $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$. So $F_2 = F_1 \\dfrac{A_2}{A_1} = 4 \\cdot \\dfrac{64}{16} = 16\\ \\text{N}$.'
    },
    {
      q: 'Balls A and B of equal mass are fully submerged in a pool; ball A has the larger volume. Which ball experiences the greater buoyant force?',
      type: 'mcq',
      choices: ['Ball A', 'Ball B', 'The forces are equal.', 'It cannot be known without the exact volumes.'],
      correct: 0,
      explanation: '$F_{buoy} = \\rho_{fluid} V_{displaced}\\, g$, and the displaced volume equals the object\'s volume. Since **ball A has the larger volume**, it displaces more water and feels the **greater** buoyant force. Equal mass is irrelevant to buoyancy.'
    },
    {
      q: 'Which statement correctly describes blood flow through the circulatory system?',
      type: 'mcq',
      choices: ['The flow rate is constant.', 'Pressure created by the heart moves blood through venous circulation.', 'The volume of blood entering and exiting the heart in a single cycle is equal.', 'The resistance of an artery is greater than that of an arteriole.'],
      correct: 2,
      explanation: 'In each cardiac cycle, the **volume entering the heart equals the volume leaving** — choice (C). Flow rate is *not* constant (pulsatile, with lymphatic fluid loss), so (A) is wrong; venous return is driven by skeletal muscle and cardiac expansion, not heart-generated pressure, so (B) is wrong; resistance *increases* as vessels narrow, so an arteriole has **more** resistance than an artery, eliminating (D).'
    },
    {
      q: 'A low-pressure weather system lowers atmospheric pressure outside a window from 1 atm to 0.99 atm. By what percent does this decrease the outward force on the window? (Window 6 m × 3 m, glass 3 cm thick.)',
      type: 'mcq',
      choices: ['1%', '10%', '3%', '30%'],
      correct: 0,
      explanation: 'Since $F = PA$ and the area is unchanged, force is directly proportional to pressure. A **1% drop in pressure** gives a **1% drop in force**. The window dimensions and glass thickness are distractors.'
    },
    {
      q: 'Two fluids, A and B, have densities x and 2x. Measuring absolute pressure at varying depths, at what depths is the pressure below the surface equal in the two fluids?',
      type: 'mcq',
      choices: ['When the depth of fluid A is one-half that of fluid B', 'When the depth of fluid A equals that of fluid B', 'When the depth of fluid A is 2 times that of fluid B', 'When the depth of fluid A is 4 times that of fluid B'],
      correct: 2,
      explanation: 'Absolute pressure is $P = P_0 + \\rho g z$. For equal pressure with $\\rho_B = 2\\rho_A$, the $\\rho z$ products must match: $x\\, z_A = 2x\\, z_B$, so $z_A = 2 z_B$. Fluid A (the less dense one) must be **twice as deep**.'
    },
    {
      q: 'A water-tower operator wants to raise the pressure of a water column applied to a piston (to increase the force on it), and the only adjustable variable is the water\'s flow speed through the pipe. How should the speed be changed?',
      type: 'mcq',
      choices: ['Increase the speed', 'Decrease the speed', 'Release water intermittently against the pipe', 'The speed of water will not change the pressure at the piston.'],
      correct: 1,
      explanation: 'By Bernoulli\'s equation at equal height, speed and pressure are **inversely** related (Venturi effect). **Decreasing** the speed raises the pressure, and the higher pressure over the piston area transmits a greater force.'
    }
  ]
};
