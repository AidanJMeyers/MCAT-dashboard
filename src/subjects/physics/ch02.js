// Physics & Math Chapter 2 — Work and Energy. Authored to the rich-formatting quality bar.
// Figures and figure captions are drawn from ch02.json; goals, recap/detail markdown,
// and the practice questions are authored here (the JSON `questions` array was empty,
// so questions were reconstructed from scratch_physics/ch02_q.md).
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 2,
  title: 'Work and Energy',
  subtitle: 'Energy · work · mechanical advantage',

  blocks: [
    /* ───────────────────────────── 2.1 Energy ───────────────────────────── */
    {
      id: 's1', num: '2.1', title: 'Energy',
      goals: [
        'Describe kinetic energy and potential energy',
        'Compare and contrast conservative and nonconservative forces',
        'Apply conservation of mechanical energy to falling objects, springs, and inclines'
      ],
      images: [{ src: fig(0, 5).src, alt: fig(0, 5).alt, caption: 'Figure 2.1 — A force is conservative if the net energy change is zero around any round-trip path, or equal along any path between two points.' }],
      recap: `
- **Energy** = a system's capacity to do work or make something happen. SI unit for *all* forms of energy is the **joule (J)**.
- **Kinetic energy** $K = \\tfrac{1}{2}mv^2$ — depends on **speed squared, not velocity** (direction-independent). Double the speed → **quadruple** the KE.
- **Potential energy** is stored by position/configuration: **gravitational** $U = mgh$ (linear in $m$, $g$, $h$) and **elastic** $U = \\tfrac{1}{2}kx^2$ (square of displacement).
- **Total mechanical energy** $E = U + K$. With **only conservative forces** (gravity, electrostatic, ~elastic), $E$ is conserved: $\\Delta E = \\Delta U + \\Delta K = 0$.
- **Nonconservative forces** (friction, air resistance, viscous drag) are **path-dependent** and dissipate energy: $W_{nc} = \\Delta E = \\Delta U + \\Delta K$.
`,
      detail: `
#### What "energy" means
**Energy** refers to a system's ability to **do work** or — more broadly — to **make something happen**. Different forms do different things:

- **Mechanical energy** → moves or accelerates objects.
- **Thermal energy** → an ice cube absorbs heat and melts (phase change).
- **Nuclear binding energy** → released in fission to run power plants.

Energy can be **transferred** between systems in only two ways: **work** and **heat** (heat is covered in Ch. 3).

#### Kinetic energy
**Kinetic energy** is the **energy of motion**. Any object with mass moving at some speed has it:

$$K = \\tfrac{1}{2}mv^2$$

where $K$ is kinetic energy (J), $m$ is mass (kg), and $v$ is **speed** (m/s).

- KE is a function of the **square of the speed** → if speed **doubles**, KE **quadruples** (mass constant).
- KE depends on **speed, not velocity** → an object has the *same* KE regardless of the *direction* of its velocity vector.

:::keyconcept
Kinetic energy is **incredibly high-yield**. Any time an object has a speed, think kinetic energy and link it to **work** and **conservation of mechanical energy**. Remember: KE tracks **speed**, not velocity — direction does not matter.
:::

> **Example.** A 15 kg block slides from rest down a frictionless incline, reaching $5\\text{ m/s}$ at the bottom. At the top, $v = 0$ so $K = 0\\text{ J}$. At the bottom, $K = \\tfrac{1}{2}(15)(5)^2 = 187.5\\text{ J}$.

#### Potential energy
**Potential energy** is energy associated with an object's **position** or other intrinsic properties — energy with the *potential* to do work. Named forms:

| Form | Stored in | Equation / basis |
|---|---|---|
| **Gravitational** | Height above a reference | $U = mgh$ |
| **Elastic** | Stretch/compression of a spring | $U = \\tfrac{1}{2}kx^2$ |
| **Electrical** | Charge separation (Ch. 5) | electrostatic attraction/repulsion |
| **Chemical** | Bonds (food, ATP) | bond energy |

##### Gravitational potential energy
$$U = mgh$$
where $m$ is mass (kg), $g$ is gravitational acceleration, and $h$ is height above the **datum** — the chosen zero-PE position ("ground").

- $U$ is **directly proportional** to all three of $m$, $g$, $h$ → tripling the height *or* the mass triples $U$.
- The datum is chosen for **convenience** (floor, desktop, ledge, sea level).

:::expertise
The height $h$ is relative to whatever the problem calls "ground." It is often the distance to the floor, but it does **not** have to be — it could be a desktop, ledge, or platform. Read the stem and use the height it specifies.
:::

> **Example.** An 80 kg diver leaps from a 10 m cliff (datum = sea level). At the top: $U = mgh = (80)(10)(10) = 8000\\text{ J}$. Two meters underwater ($h = -2\\text{ m}$): $U = (80)(10)(-2) = -1600\\text{ J}$.

##### Elastic potential energy
Springs store energy when displaced from their relaxed (equilibrium) length:

$$U = \\tfrac{1}{2}kx^2$$

where $k$ is the **spring constant** (stiffness) and $x$ is the magnitude of displacement from equilibrium. Note the structural twin of the KE equation — both go as the **square** of a variable.

:::mnemonic
**Both "½ · constant · square" twins:** $K = \\tfrac{1}{2}mv^2$ and $U_{spring} = \\tfrac{1}{2}kx^2$. Double the variable ($v$ or $x$) → **4×** the energy. Gravitational PE is the odd one out: $U = mgh$ is **linear** — double $h$ → just **2×**.
:::

#### Total mechanical energy
The sum of an object's kinetic and potential energies:

$$E = U + K$$

The **first law of thermodynamics** holds that energy is never created nor destroyed — only transferred. But $E$ does **not** always stay constant: the mechanical-energy equation omits thermal, sound, and light energy, so when **friction** converts mechanical energy to heat, $E$ appears to be "lost" (really just dissipated, not destroyed).

#### Conservation of mechanical energy
**Conservative forces** are **path-independent** and do **not** dissipate energy; each has an associated potential energy. The two most tested on the MCAT are **gravitational** and **electrostatic** (elastic is approximately conservative).

There are two equivalent tests for whether a force is conservative:

1. **Round-trip test** — bring the system back to its start. If the net energy change is **zero** regardless of path, the force is conservative.
2. **Two-point test** — move the system from one configuration to another. If the energy change is **equal regardless of path taken**, the force is conservative.

![Determining if a force is conservative](${fig(0, 5).src})

When no nonconservative forces act (or their net work is zero), total mechanical energy is **constant**:

$$\\Delta E = \\Delta U + \\Delta K = 0$$

:::keyconcept
**Conservative forces** (gravity, electrostatic) **conserve** mechanical energy. **Nonconservative forces** (friction, air resistance) **dissipate** mechanical energy as thermal or chemical energy.
:::

When nonconservative forces *are* present, mechanical energy is **not** conserved, and the energy "lost" equals the work those forces do:

$$W_{nonconservative} = \\Delta E = \\Delta U + \\Delta K$$

Nonconservative forces are **path-dependent** — the **longer the path, the more energy dissipated**.

> **Example.** A 0.25 kg baseball is thrown up at $30\\text{ m/s}$ and returns to the same height at $25\\text{ m/s}$ due to air resistance. Since $\\Delta U = 0$ (same start/end height): $W_{nc} = \\Delta K = \\tfrac{1}{2}(0.25)(25^2 - 30^2) = -34.4\\text{ J}$. The **negative** sign means energy was dissipated from the system.

| | **Conservative forces** | **Nonconservative forces** |
|---|---|---|
| Effect on total mechanical energy | **Remains constant** | **Decreases** (energy dissipated) |
| Path-dependent? | **No** | **Yes** — longer path dissipates more |
| Examples | Gravity, electrostatic, (≈ elastic) | Friction, air resistance, viscous drag |

:::bridge
Energy transfer between forms drives **bioenergetics**. In metabolism (*MCAT Biochemistry*, Ch. 9–12), chemical PE in glucose bonds becomes electrical PE in the high-energy electrons of **NADH/FADH₂**, which powers the proton-motive force that drives **ATP synthase**, trapping energy in ATP's phosphate bonds.
:::
`
    },

    /* ────────────────────────────── 2.2 Work ────────────────────────────── */
    {
      id: 's2', num: '2.2', title: 'Work',
      goals: [
        'Recall the units used for work',
        'Distinguish between work and energy',
        'Calculate the work done on or by a system (force–displacement, P–V area, work–energy theorem)'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 2.2 — Pressure–volume (P–V) curves: the work done on or by a gas equals the area enclosed by the curve.' }],
      recap: `
- **Work is *not* energy** — it is one of the two **processes** that transfer energy (the other is **heat**). SI unit is the **joule (J)**, same as energy.
- **Mechanical work:** $W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta$. Only the force component **parallel/antiparallel** to displacement does work; perpendicular force does **zero** work.
- **Gas (P–V) work:** equals the **area under the P–V curve**. Isobaric ($\\Delta P = 0$): $W = P\\Delta V$. Isochoric ($\\Delta V = 0$): $W = 0$.
- **Power** = rate of energy transfer: $P = \\dfrac{W}{t}$. SI unit = **watt (W)** $= \\text{J/s}$.
- **Work–energy theorem:** $W_{net} = \\Delta K = K_f - K_i$ — the net work on an object equals its change in kinetic energy.
`,
      detail: `
#### Work is a process, not a thing
The SI unit for **work** is the **joule** — the same as every form of energy — but work is **not** itself a form of energy. Work is a **process by which energy is transferred** from one system to another. It is **one of only two** transfer mechanisms; the other is **heat**.

:::keyconcept
**Work is not energy — it is a measure of energy *transfer*.** The only other way energy is transferred is **heat**. Together, work and heat are the only ways anything happens.
:::

:::expertise
The **"High-Yield" badge** on this section means the content is **frequently tested** on the MCAT. Know all three ways to calculate work cold.
:::

#### Force and displacement
Energy is transferred by work when one thing exerts force on/against another through a displacement:

$$W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta$$

where $F$ is the applied force magnitude, $d$ is the displacement magnitude, and $\\theta$ is the **angle between the force and displacement vectors**.

- Work is a **dot product** → it depends on $\\cos\\theta$.
- Only force components **parallel or antiparallel** to the displacement do work.
- $\\theta = 0°$ (force along motion) → $\\cos\\theta = 1$ → **maximum positive** work.
- $\\theta = 90°$ (force perpendicular) → $\\cos\\theta = 0$ → **zero** work (e.g., centripetal force, carrying a box horizontally).
- $\\theta = 180°$ (force opposing motion) → $\\cos\\theta = -1$ → **negative** work (e.g., friction).

:::mnemonic
**"Perpendicular pushes do no work."** A waiter carrying a tray across a level floor does **zero** work on it — the lifting force is vertical, the motion horizontal, $\\theta = 90°$. Likewise the centripetal force in circular motion does no work.
:::

#### Pressure and volume
For a gas in a cylinder with a movable piston, work is done when an applied pressure **changes the volume**. Plot pressure ($y$) vs. volume ($x$) to get a **P–V graph**; the **work = area enclosed by the curve**.

![Pressure–volume (P–V) curves](${fig(1, 0).src})

- **Gas expands** → work done **by** the gas → **positive**.
- **Gas compressed** → work done **on** the gas → **negative**.
- **Isochoric / isovolumetric** ($\\Delta V = 0$, Fig. 2.2a): no area → **$W = 0$**.
- **Isobaric** ($\\Delta P = 0$, Fig. 2.2b): rectangle → $W = P\\Delta V$.

$$W = P\\Delta V$$

- **Combined process** (Fig. 2.2c): split the area into a triangle (Region I, $A_I = \\tfrac{1}{2}\\Delta V\\,\\Delta P$) plus a rectangle (Region II, $A_{II} = P_2\\Delta V$); $W = A_I + A_{II}$.
- **Closed cycle** (Fig. 2.2d): work = area **enclosed by the loop** (would need calculus — not tested).

:::keyconcept
Work done **by** a system (gas expands) is **positive**; work done **on** a system (gas compresses) is **negative**. The MCAT will not make you integrate a P–V graph, but you **must** be able to find the area under a **straight-line** graph.
:::

#### Power
**Power** is the **rate** at which energy is transferred:

$$P = \\dfrac{W}{t}$$

where $W$ is work ($= \\Delta E$) and $t$ is time. SI unit = **watt (W)** $= \\text{J/s}$.

:::bridge
In circuits, electrical power is $P = IV$ (current × voltage) — *MCAT Physics & Math*, Ch. 6. However it's calculated, **power is always the rate of energy consumption, transfer, or transformation per unit time**.
:::

#### Work–energy theorem
The **work–energy theorem** gives a direct link between the **net work** on an object and its **change in kinetic energy**:

$$W_{net} = \\Delta K = K_f - K_i$$

- It lets you find work **without** knowing the forces or the displacement — just measure the change in KE.
- The "net"/"total" matters: $\\Delta K$ equals the work of **all** forces combined, not any single force.
- Pressing the brakes is a real-world example: frictional forces from the pads do work on the wheels, decreasing the car's KE.

In its most general form, the work–energy theorem extends to other energy forms; the **first law of thermodynamics** is essentially the same idea, where change in internal energy $\\Delta U = Q - W$ (heat in minus work done by the system).

> **Example.** A 0.125 kg lead ball is thrown straight up. At maximum height $v = 0$, so $K_f = 0$. By the work–energy theorem, the work done by gravity equals $\\Delta K = K_f - K_i = 0 - \\tfrac{1}{2}mv_i^2$ — simpler than computing $W = Fd\\cos\\theta$ via kinematics.

##### Three ways to calculate work
| Method | Equation | When to use |
|---|---|---|
| **Force–displacement** | $W = Fd\\cos\\theta$ | Known force acting through a known displacement |
| **P–V area** | $W = P\\Delta V$ (isobaric); area under curve otherwise | Gas expansion/compression |
| **Work–energy theorem** | $W_{net} = \\Delta K$ | Known change in speed; forces unknown/messy |
`
    },

    /* ──────────────────────── 2.3 Mechanical Advantage ──────────────────────── */
    {
      id: 's3', num: '2.3', title: 'Mechanical Advantage',
      goals: [
        'Explain how work can be lost in a system that is not 100% efficient',
        'Recall the meaning of mechanical advantage',
        'Recognize the six simple machines',
        'Predict the impact of changing effort on effort distance in a pulley system at constant work output'
      ],
      images: [{ src: fig(2, 5).src, alt: fig(2, 5).alt, caption: 'Figure 2.5 — A six-pulley system: the load is shared among six rope segments, so effort is one-sixth the load — but the rope must be pulled six times the lift height.' }],
      recap: `
- **Mechanical advantage (MA)** = $\\dfrac{F_{out}}{F_{in}}$ — the factor by which a simple machine **multiplies the input force**. Dimensionless ratio.
- A machine **trades force for distance**: smaller force over a **longer distance** → same work. MA does **not** reduce the work required.
- **Six simple machines:** inclined plane, wedge, wheel and axle, lever, pulley, screw. Most tested: **inclined plane, lever, pulley**.
- **Inclined plane:** push force $F = mg\\sin\\theta$ over the ramp length — less force than lifting straight up, but over a longer distance; same work.
- **Pulleys:** $n$ supporting rope segments → effort $= \\tfrac{1}{n}$ of the load, but pull through $n\\times$ the lift height.
- **Efficiency** $= \\dfrac{W_{out}}{W_{in}} = \\dfrac{\\text{load}\\times\\text{load distance}}{\\text{effort}\\times\\text{effort distance}}$; real machines are **< 100%** due to friction.
`,
      detail: `
#### What mechanical advantage is
Whether Sisyphus lifts the rock straight up or rolls it up a ramp, the *difference* is **mechanical advantage** — a measure of the **increase in force** accomplished by using a tool. A ramp distributes the work over a **longer distance**, so a **smaller force** is needed.

$$\\text{MA} = \\dfrac{F_{out}}{F_{in}}$$

where $F_{out}$ is the force the machine exerts on the object and $F_{in}$ is the force applied to the machine. Because it is a ratio of two forces, **MA is dimensionless**.

#### The six simple machines
| Simple machine | Note |
|---|---|
| **Inclined plane** | Ramp; force reduced over a longer distance — **high-yield** |
| **Wedge** | Two merged inclined planes |
| **Wheel and axle** | Large wheel turns a small axle |
| **Lever** | Rotates about a fulcrum — **high-yield** |
| **Pulley** | Redirects/divides force over rope — **high-yield** |
| **Screw** | A rotating (wrapped) inclined plane |

:::mnemonic
**Six simple machines — "Will Levi Win Six Past Innings?"** → **W**edge, **Lev**er, **W**heel-and-axle, **S**crew, **P**ulley, **I**nclined plane. The three the MCAT loves: **inclined plane, lever, pulley**.
:::

#### The force–distance trade-off
Reducing the force has a **cost: the distance increases**. Simple machines do **not** change the amount of work needed to move an object. Because **displacement is path-independent** (for conservative forces), applying a **lesser force over a greater distance** does the **same work**.

> **Example (inclined plane).** A 100 N block is pushed up a frictionless incline 20 m long to a height of 10 m.
> - **(A)** Minimum push force = parallel component of gravity, $F = mg\\sin\\theta = (100\\text{ N})(10/20) = 50\\text{ N}$.
> - **(B)** Work up the ramp: $W = Fd\\cos\\theta = (50\\text{ N})(20\\text{ m})(1) = 1000\\text{ J}$ (force ∥ displacement, $\\theta = 0$).
> - **(C)** Lifting straight up: $F = 100\\text{ N}$ over 10 m, $W = (100)(10)(1) = 1000\\text{ J}$.
> **Same 1000 J either way** — but the ramp needs only **half** the force.

#### Pulleys
Pulleys use the same paradigm as the ramp: **less force at the cost of more distance**. Lifting a mass $m$ to height $h$ always requires work $mgh$ (its change in gravitational PE). If the rope is pulled over a distance **greater** than $h$, the force needed drops **below** $mg$.

##### One block, two ropes
First consider a block hung from two ropes. Because it is in **translational equilibrium**, its weight equals the sum of the two tensions. For a symmetric system the tensions are equal, each carrying **half** the weight.

![Block suspended by two ropes](${fig(2, 3).src})

##### Two-pulley system
Now the block is a crate to be lifted. Held stationary, it is in equilibrium: weight (the **load**) is balanced by the total rope tension. The two vertical ropes have **equal** tension (otherwise the pulleys would turn until they equalized), so **each rope supports half** the weight → only **half the effort** is needed.

![Two-pulley system](${fig(2, 4).src})

The catch: to lift the crate to height $h$ (the **load distance**), *both* rope sides must shorten by $h$, so you must pull through **$2h$** of rope (the **effort distance**). Lift a crate 3 m → pull 6 m of rope.

##### More pulleys = more advantage
![System of six pulleys](${fig(2, 5).src})

Adding pulleys further increases MA. With the load shared among **six** rope segments, the effort is only **one-sixth** the load — but you must pull **six times** the lift height, and efficiency drops from the extra pulley weight and friction.

> **Example (six-pulley, 80% efficient, lifting 200 kg by 4 m).**
> - **(A)** All six ropes shorten 4 m → effort moves $6 \\times 4 = 24\\text{ m}$.
> - **(B)** Effort from efficiency: $W_{out} = mgh = (200)(10)(4) = 8000\\text{ J}$; $W_{in} = W_{out}/0.80 = 10{,}000\\text{ J}$; effort $= W_{in}/24\\text{ m} \\approx 417\\text{ N}$.
> - **(C)** Work done by the person = $W_{in} = 10{,}000\\text{ J}$.

#### Efficiency
An **idealized** pulley is **massless and frictionless** — work in exactly equals work out. **Real** machines never reach 100% efficiency. Defining work input as effort × effort distance and work output as load × load distance:

$$\\text{efficiency} = \\dfrac{W_{out}}{W_{in}} = \\dfrac{\\text{load}\\times\\text{load distance}}{\\text{effort}\\times\\text{effort distance}}$$

Efficiency is usually given as a **percentage** ($\\times 100\\%$). The shortfall below 100% is energy lost to **nonconservative/external forces** (friction, pulley weight).

:::keyconcept
For simple machines, **load and effort are both forces**. The **load** sets the required **output** force; from the output force and the **mechanical advantage**, you get the required **input** force. Don't confuse **MA** (a ratio of *forces*) with **efficiency** (a ratio of *work*).
:::

:::mnemonic
**MA vs. efficiency:** **M**echanical **A**dvantage compares **forces** ($F_{out}/F_{in}$); **e**fficiency compares **w**ork ($W_{out}/W_{in}$). "Advantage = how much *force* you gain; efficiency = how much *work* you keep."
:::

:::realworld
Real machines lose energy to friction and the weight of their own parts, so output work is always **less than** input work. This is why no machine is a perpetual-motion device — and why adding more pulleys eventually gives diminishing returns.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '2.1 Energy',
        points: [
          '**Energy** is a system\'s capacity to do work or make something happen; SI unit for all energy is the **joule (J)**.',
          '**Kinetic energy** is energy of motion: $K = \\tfrac{1}{2}mv^2$ — depends on mass and **speed squared** (not velocity/direction).',
          '**Potential energy** is stored energy: **gravitational** ($U = mgh$, set by mass and height above a **datum**), **elastic** ($U = \\tfrac{1}{2}kx^2$), electrical, and chemical.',
          '**Total mechanical energy** $E = U + K$ is the sum of kinetic and potential energies.',
          '**Conservative forces** (gravity, electrostatic; elastic ≈) are **path-independent** and conserve mechanical energy: $\\Delta E = \\Delta U + \\Delta K = 0$.',
          '**Nonconservative forces** (friction, air resistance, viscous drag) are **path-dependent**; they dissipate mechanical energy as thermal/chemical energy, and $W_{nc} = \\Delta E$.'
        ]
      },
      {
        section: '2.2 Work',
        points: [
          '**Work** is a **process** of transferring energy between systems — not a form of energy itself; the other transfer process is **heat**.',
          'Work = dot product of force and displacement: $W = Fd\\cos\\theta$; only the parallel component does work.',
          'Work also equals the **area under a P–V curve**; isobaric work is $W = P\\Delta V$, isochoric work is **zero**.',
          '**Power** is the rate work is done / energy transferred: $P = W/t$; SI unit is the **watt (W)**.',
          'The **work–energy theorem** states net work equals the change in kinetic energy: $W_{net} = \\Delta K$.'
        ]
      },
      {
        section: '2.3 Mechanical Advantage',
        points: [
          '**Mechanical advantage** is the factor by which a simple machine multiplies the input force: $\\text{MA} = F_{out}/F_{in}$ (dimensionless).',
          'The **six simple machines** are the inclined plane, wedge, wheel and axle, lever, pulley, and screw.',
          'A machine reduces the **input force** needed but increases the **distance** over which it acts by the same factor (at 100% efficiency) — the work is unchanged.',
          'The **load** (output force × load distance) and **effort** (input force × effort distance) define work output and input.',
          '**Efficiency** is the ratio of work output to work input ($W_{out}/W_{in}$); real machines are < 100% due to nonconservative forces.'
        ]
      }
    ],
    mnemonics: [
      '**Square twins:** $K = \\tfrac{1}{2}mv^2$ and $U_{spring} = \\tfrac{1}{2}kx^2$ — double the variable, **4×** the energy. Gravitational $U = mgh$ is **linear** — double $h$, only **2×**.',
      '**KE = speed, not velocity:** an object has the same kinetic energy no matter which direction it moves.',
      '**Perpendicular pushes do no work:** $\\theta = 90° \\Rightarrow \\cos\\theta = 0 \\Rightarrow W = 0$ (carrying a tray level, centripetal force).',
      '**Work signs for gases:** gas **e**xpands → work **+** (done **by** gas); gas **c**ompresses → work **−** (done **on** gas).',
      '**Six simple machines — "Will Levi Win Six Past Innings?"** → Wedge, Lever, Wheel-and-axle, Screw, Pulley, Inclined plane. Tested most: inclined plane, lever, pulley.',
      '**MA vs. efficiency:** Mechanical Advantage compares **forces** ($F_{out}/F_{in}$); efficiency compares **work** ($W_{out}/W_{in}$).',
      '**Pulley rule of $n$:** $n$ supporting rope segments → effort is $1/n$ of the load, but you pull $n$ times the lift height.'
    ],
    keyConcepts: [
      '**Conservation of mechanical energy** is the master tool: with only conservative forces, $U + K$ is constant, so PE converts to KE (and back) with no loss — often simpler than kinematics.',
      '**Work is energy *transfer*, not energy.** Joules measure both, but work and heat are the *processes* that move energy between systems.',
      '**The work–energy theorem** lets you find net work from the change in kinetic energy alone, bypassing unknown forces and displacements.',
      '**Simple machines trade force for distance:** they never reduce the total work — they reduce the force at the cost of a longer path.',
      '**Real machines lose energy** to nonconservative forces; efficiency = useful work out / work in, always < 100% in practice.'
    ],
    equations: [
      { name: 'Kinetic energy', tex: 'K = \\tfrac{1}{2}mv^2', note: 'Energy of motion; depends on speed squared (not velocity).' },
      { name: 'Gravitational potential energy', tex: 'U = mgh', note: 'Linear in mass, g, and height above the datum.' },
      { name: 'Elastic potential energy', tex: 'U = \\tfrac{1}{2}kx^2', note: 'k = spring constant; x = displacement from equilibrium.' },
      { name: 'Total mechanical energy', tex: 'E = U + K', note: 'Sum of potential and kinetic energy.' },
      { name: 'Conservation of mechanical energy', tex: '\\Delta E = \\Delta U + \\Delta K = 0', note: 'Holds when only conservative forces act.' },
      { name: 'Work by nonconservative forces', tex: 'W_{nc} = \\Delta E = \\Delta U + \\Delta K', note: 'Energy dissipated equals work done by friction/drag.' },
      { name: 'Work (mechanical)', tex: 'W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta', note: 'Dot product; only the parallel force component does work.' },
      { name: 'Work (isobaric gas)', tex: 'W = P\\Delta V', note: 'Area under a P–V curve at constant pressure.' },
      { name: 'Power', tex: 'P = \\dfrac{W}{t}', note: 'Rate of energy transfer; SI unit = watt (W) = J/s.' },
      { name: 'Work–energy theorem', tex: 'W_{net} = \\Delta K = K_f - K_i', note: 'Net work equals the change in kinetic energy.' },
      { name: 'Mechanical advantage', tex: '\\text{MA} = \\dfrac{F_{out}}{F_{in}}', note: 'Dimensionless force-multiplication factor of a simple machine.' },
      { name: 'Efficiency', tex: '\\text{efficiency} = \\dfrac{W_{out}}{W_{in}} = \\dfrac{\\text{load}\\times\\text{load dist.}}{\\text{effort}\\times\\text{effort dist.}}', note: 'Always < 100% for real machines.' }
    ]
  },

  questions: [
    {
      q: 'A weightlifter lifts a 275 kg barbell from the ground to a height of 2.4 m. How much work has the weightlifter done in lifting the barbell, and how much work is required to hold the weight at that height?',
      type: 'mcq',
      choices: [
        '3234 J and 0 J, respectively',
        '3234 J and 3234 J, respectively',
        '6468 J and 0 J, respectively',
        '6468 J and 6468 J, respectively'
      ],
      correct: 2,
      explanation: 'The barbell\'s weight is $mg \\approx (275)(10) \\approx 2750\\text{ N}$, so lifting work is $W = Fd\\cos\\theta = (2750)(2.4)(\\cos 0) \\approx 6600\\text{ J}$ (closest to 6468 J). Holding the weight in place involves **no displacement** ($d = 0$), so the work done is $0\\text{ J}$. This matches (C).'
    },
    {
      q: 'A tractor pulls a log of mass 500 kg along the ground for 100 m. The rope makes a 30° angle with the ground and carries a tensile force of 5000 N. How much work does the tractor perform? (sin 30° = 0.5, cos 30° = 0.866, tan 30° = 0.577)',
      type: 'mcq',
      choices: [
        '250 kJ',
        '289 kJ',
        '433 kJ',
        '500 kJ'
      ],
      correct: 2,
      explanation: '$W = Fd\\cos\\theta = (5000)(100)(\\cos 30°) = (5000)(100)(0.866) \\approx 433{,}000\\text{ J} = 433\\text{ kJ}$. Only the horizontal component of the tension does work over the horizontal displacement. This matches (C).'
    },
    {
      q: 'A 2000 kg experimental car accelerates from 0 to 30 m/s in 6 s. What is the average power of the engine needed to achieve this acceleration?',
      type: 'mcq',
      choices: [
        '150 W',
        '150 kW',
        '900 W',
        '900 kW'
      ],
      correct: 1,
      explanation: 'By the work–energy theorem, the engine\'s work equals the change in kinetic energy: $W = \\Delta K = \\tfrac{1}{2}(2000)(30^2) - 0 = 900{,}000\\text{ J}$. Average power is $P = W/t = 900{,}000/6 = 150{,}000\\text{ W} = 150\\text{ kW}$. This matches (B).'
    },
    {
      q: 'A 40 kg block rests at a height of 5 m off the ground. If the block is released and falls, which of the following is closest to its total mechanical energy at a height of 2 m, assuming negligible air resistance?',
      type: 'mcq',
      choices: [
        '0 J',
        '400 J',
        '800 J',
        '2000 J'
      ],
      correct: 3,
      explanation: 'With negligible air resistance, total mechanical energy is **conserved** throughout the fall. At the 5 m start the block has only potential energy, $U = mgh = (40)(10)(5) = 2000\\text{ J}$, and zero kinetic energy. So the total mechanical energy is $2000\\text{ J}$ at every point during the descent, including at 2 m. This matches (D).'
    },
    {
      q: '5 m³ of a gas are brought from an initial pressure of 1 kPa to a pressure of 3 kPa through an isochoric process. During this process, the work performed by the gas is:',
      type: 'mcq',
      choices: [
        '–10 kJ',
        '–10 J',
        '0 J',
        '+10 kJ'
      ],
      correct: 2,
      explanation: 'An **isochoric** process is one with **no change in volume** ($\\Delta V = 0$). Work in a thermodynamic system equals the area under the P–V curve; with no volume change there is no area, so $W = P\\Delta V = 0\\text{ J}$. This matches (C).'
    },
    {
      q: 'In a pulley system, what is closest to the tension force in each of the two supporting ropes if the mass of the object is 10 kg and the object is accelerating upward at 2 m/s²?',
      type: 'mcq',
      choices: [
        '50 N',
        '60 N',
        '100 N',
        '120 N'
      ],
      correct: 1,
      explanation: 'Two tension forces support the mass, so the net force is $F_{net} = 2T - mg$. By Newton\'s second law, $2T - mg = ma$, giving $2T = m(g + a) = 10(10 + 2) = 120\\text{ N}$, so $T = 60\\text{ N}$ in each rope. This matches (B).'
    },
    {
      q: 'Which of the following is a conservative force?',
      type: 'mcq',
      choices: [
        'Air resistance',
        'Friction',
        'Gravity',
        'Convection'
      ],
      correct: 2,
      explanation: 'Gravity is **conservative**: it is path-independent and does not dissipate mechanical energy. Air resistance (A) and friction (B) are **nonconservative** forces that dissipate energy as heat. Convection (D) is not a force at all — it is a method of heat transfer. This matches (C).'
    },
    {
      q: 'During uniform circular motion, which of the following relationships is necessarily true?',
      type: 'mcq',
      choices: [
        'No work is done.',
        'The centripetal force does work.',
        'The velocity does work.',
        'Potential energy depends on the position of the object around the circle.'
      ],
      correct: 0,
      explanation: 'In uniform circular motion the (centripetal) force and the displacement are always **perpendicular**, so $\\cos\\theta = \\cos 90° = 0$ and **no work is done** — eliminating (B). Potential energy is constant around the circle and does not depend on position (D). This matches (A).'
    },
    {
      q: 'Which of the following best characterizes the work–energy theorem?',
      type: 'mcq',
      choices: [
        'The work done by any force is proportional only to the magnitude of that force.',
        'The total work done on any object is equal to the change in kinetic energy for that object.',
        'The work done on an object by any force is proportional to the change in kinetic energy for that object.',
        'The work done by an applied force on an object is equal to the change in kinetic energy of that object.'
      ],
      correct: 1,
      explanation: 'The work–energy theorem relates the **total (net)** work by **all** forces to the change in kinetic energy: $W_{net} = \\Delta K$. Work depends on force *and* displacement, eliminating (A). The change in KE is **equal**, not merely proportional, and it is the **net** force/work, not any single force — eliminating (C) and (D). This matches (B).'
    },
    {
      q: 'A massless spring initially compressed by a displacement of two centimeters is now compressed by four centimeters. How has the potential energy of this system changed?',
      type: 'mcq',
      choices: [
        'The potential energy has not changed.',
        'The potential energy has doubled.',
        'The potential energy has increased by two joules.',
        'The potential energy has quadrupled.'
      ],
      correct: 3,
      explanation: 'Elastic potential energy goes as the **square** of displacement: $U = \\tfrac{1}{2}kx^2$. Doubling the displacement (2 cm → 4 cm) multiplies the energy by $2^2 = 4$, so the potential energy **quadruples**. This matches (D).'
    },
    {
      q: 'Josh (80 kg) and Sarah (50 kg) jump off a 20 m building and land on a fire net. The net compresses, and they bounce back up at the same time. Which of the following statements is NOT true?',
      type: 'mcq',
      choices: [
        'Sarah will bounce higher than Josh.',
        'For Josh, the change in speed from the start of the jump to contacting the net is about 20 m/s.',
        'Josh will experience a greater force upon impact than Sarah.',
        'The energy in this event is converted from potential to kinetic to elastic to kinetic.'
      ],
      correct: 0,
      explanation: 'Assuming mechanical energy is conserved, both start with potential energy that converts to kinetic, then elastic, then kinetic again with no loss — so **both return to the same height**, meaning Sarah does **not** bounce higher. That makes (A) the false (NOT true) statement. The energy conversion chain (D) is correct, Josh\'s impact speed (B) follows from $v = \\sqrt{2gh}$, and Josh experiences a greater force (C) because the net\'s force scales with weight.'
    },
    {
      q: 'A parachutist jumps from a plane. Beginning at the point when the jumper reaches terminal velocity (constant velocity during freefall), which of the following is/are true? I. The jumper is in translational equilibrium. II. The jumper is not being acted upon by any forces. III. There is an equal amount of work being done by gravity and air resistance.',
      type: 'mcq',
      choices: [
        'I only',
        'I and III only',
        'II and III only',
        'I, II, and III'
      ],
      correct: 1,
      explanation: 'At terminal velocity, gravity and air resistance are equal in magnitude, giving **translational equilibrium** (I true). Equal-magnitude forces acting over the same displacement do **equal work** (III true). Statement II is **false** — the net force is zero, but the forces of gravity and air resistance are still acting. So I and III only, which matches (B).'
    },
    {
      q: 'Mechanical advantage and efficiency are both ratios. Which of the following is true regarding the quantities used in these ratios?',
      type: 'mcq',
      choices: [
        'Mechanical advantage compares values of work; efficiency compares values of power.',
        'Mechanical advantage compares values of forces; efficiency compares values of work.',
        'Mechanical advantage compares values of power; efficiency compares values of energy.',
        'Mechanical advantage compares values of work; efficiency compares values of forces.'
      ],
      correct: 1,
      explanation: 'Mechanical advantage is a ratio of **forces** ($F_{out}/F_{in}$) — the output force generated for a given input force. Efficiency is a ratio of **work** ($W_{out}/W_{in}$) — the useful work performed compared to the work put in. This matches (B).'
    },
    {
      q: 'If the gravitational potential energy of an object has doubled in the absence of nonconservative forces, which of the following must be true, assuming total mechanical energy is constant?',
      type: 'mcq',
      choices: [
        'The object has been lifted to twice its initial height.',
        'The kinetic energy of the object has been halved.',
        'The kinetic energy has decreased by the same quantity as the potential energy has increased.',
        'The mass of the object has doubled.'
      ],
      correct: 2,
      explanation: 'With total mechanical energy constant and only conservative forces, $\\Delta U + \\Delta K = 0$, so any increase in potential energy is matched by an **equal decrease** in kinetic energy. It is the **difference** that is equal, not the proportionality (eliminating B). Doubling the height (A) or mass (D) could produce a doubled $U$ but need not be the case — for instance, mass could quadruple while height halves. This matches (C).'
    },
    {
      q: 'A consumer compares two cars: Car A exerts 250 horsepower, Car B exerts 300 horsepower. The consumer cares about the peak velocity each car can reach. If nonconservative forces are ignored, which statement is true? (1 horsepower = 745.7 W)',
      type: 'mcq',
      choices: [
        'Car A and Car B both have unlimited velocities.',
        'Car A will reach its peak velocity more quickly than Car B.',
        'Car A will dissipate less energy to the surroundings than Car B.',
        'Car A will have a lower peak velocity than Car B.'
      ],
      correct: 0,
      explanation: 'Horsepower is a unit of **power** — the rate of energy expenditure over time. Given unlimited time and ignoring nonconservative forces, both cars can deliver unlimited kinetic energy and therefore have **unlimited maximum velocities**. Higher power (Car B) only means it reaches a given velocity *faster*, eliminating (B) and (D). There is no information about efficiency, eliminating (C). This matches (A).'
    }
  ]
};
