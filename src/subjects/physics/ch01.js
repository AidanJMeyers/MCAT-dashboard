// Physics & Math Chapter 1 — Kinematics and Dynamics.
// Re-authored to the rich-formatting quality bar (matches bio/ch01.js).
// Figures are reused from ch01.json (PDF extraction); goals are authored from the
// source "Learning Objectives" lines; the practice questions are reconstructed from
// scratch_physics/ch01_q.md (the JSON questions array was empty after extraction).
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 1,
  title: 'Kinematics and Dynamics',
  subtitle: 'Units · vectors & scalars · displacement & velocity · forces & acceleration · Newton’s laws · motion with constant acceleration · mechanical equilibrium',

  blocks: [
    /* ───────────────────────────── 1.1 Units ───────────────────────────── */
    {
      id: 's1', num: '1.1', title: 'Units',
      goals: [
        'Recall the fundamental measurements and their SI units',
        'Order a set of units that measure the same quantity from smallest to largest',
        'Distinguish base units from derived units across the SI, MKS, CGS, and FPS systems'
      ],
      recap: `
- **SI is the only system you must memorize.** Seven **base units**: meter (length), **kilogram** (mass, *not* weight), second, ampère, mole, kelvin, candela.
- **Base units** are the system's foundation; **derived units** combine them — e.g., the newton: $1\\,\\text{N} = 1\\,\\dfrac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}$.
- Three metric flavors appear on the MCAT: **MKS** (m, kg, s), **CGS** (cm, g, s), and **SI** (MKS + 4 more base units).
- Atomic-scale units: **1 Å = $10^{-10}$ m**, **1 nm = $10^{-9}$ m**, **1 eV = $1.6\\times10^{-19}$ J**.
`,
      detail: `
#### Why units matter
Physics speaks the **language of mathematics**, but numbers are meaningless without **units** — the labels that tell us *what kind* of quantity we have and *how much* of it.

#### Systems of measurement
| System | Length | Mass | Time | Notes |
|---|---|---|---|---|
| **FPS** (British/Imperial) | foot (ft) | **slug** (derived) | second (s) | Uses **weight** (pound, lb), not mass; **rarely on the MCAT** |
| **CGS** | centimeter (cm) | gram (g) | second (s) | Metric; force in **dynes**, energy in **ergs** |
| **MKS** | meter (m) | kilogram (kg) | second (s) | Metric; the core of SI |
| **SI** | meter (m) | kilogram (kg) | second (s) | **MKS + 4 base units** — the one to memorize |

##### The seven SI base units

| Quantity | Unit | Symbol |
|---|---|---|
| Length | meter | **m** |
| Mass (*not* weight) | kilogram | **kg** |
| Time | second | **s** |
| Current | ampère (coulomb/second) | **A** |
| Amount of substance | mole | **mol** |
| Temperature | kelvin | **K** |
| Luminous intensity | candela | **cd** |

#### Base vs. derived units
- **Base units** are the standard units the system is built around (the seven above).
- **Derived units** are *combinations* of base units. The **newton** is the classic example:

$$1\\,\\text{N} = 1\\,\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}$$

| Quantity | FPS | CGS | MKS (SI) |
|---|---|---|---|
| **Force** | — | **dyne** ($\\text{g}\\cdot\\text{cm}/\\text{s}^2$) | **newton** ($\\text{kg}\\cdot\\text{m}/\\text{s}^2$) |
| **Work / energy** | foot–pound (ft·lb) | **erg** ($\\text{g}\\cdot\\text{cm}^2/\\text{s}^2$) | **joule** ($\\text{kg}\\cdot\\text{m}^2/\\text{s}^2$) |
| **Power** | ft·lb per second | erg per second | **watt** ($\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$) |

#### Units at the atomic scale
At molecular/atomic scales, smaller units are easier to handle:

- **Length:** **ångström** $1\\,\\text{\\AA} = 10^{-10}\\,\\text{m}$; **nanometer** $1\\,\\text{nm} = 10^{-9}\\,\\text{m}$.
- **Energy:** **electron–volt** $1\\,\\text{eV} = 1.6\\times10^{-19}\\,\\text{J}$ — the energy an electron gains accelerating through a potential difference of one volt.

:::expertise
While it's good to *recognize* the various systems, the **only** system you are required to memorize for the MCAT is **SI**. Know the seven base units cold and be able to break a derived unit (N, J, W) back down into them.
:::

:::realworld
Natural phenomena span an enormous range of scales — from the subatomic to the astronomical. We often assume the very small can't affect the very large, but the **rapid inflation** of the early universe let infinitesimal quantum fluctuations seed structures the size of galaxies.
:::
`
    },

    /* ────────────────────────── 1.2 Vectors and Scalars ───────────────────────── */
    {
      id: 's2', num: '1.2', title: 'Vectors and Scalars',
      goals: [
        'Explain why order matters when performing vector calculations',
        'Add and subtract vectors using the tip-to-tail and component methods',
        'Calculate a scalar (dot product) or a vector (cross product) from two vectors, using the right-hand rule when applicable'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 1.2 — Tip-to-tail vector addition: the resultant joins the tail of the first vector to the tip of the last.' }],
      recap: `
- **Vectors** have **magnitude *and* direction** (displacement, velocity, acceleration, force); **scalars** have **magnitude only** (distance, speed, energy, pressure, mass).
- Add vectors **tip-to-tail** or by **components** (resolve → add components → Pythagorean theorem).
- **Subtraction:** $\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$ — flip the subtracted vector, then add tip-to-tail.
- **Dot product → scalar**: $\\vec{A}\\cdot\\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta$. **Cross product → vector**: $\\vec{A}\\times\\vec{B} = |\\vec{A}||\\vec{B}|\\sin\\theta$, direction by the **right-hand rule**.
- **Cross products are NOT commutative**: $\\vec{A}\\times\\vec{B} = -(\\vec{B}\\times\\vec{A})$. **Order matters!**
`,
      detail: `
#### Vectors vs. scalars
| | **Vectors** | **Scalars** |
|---|---|---|
| Has direction? | **Yes** | No |
| Notation | arrow ($\\vec{A}$) or **boldface** | *italic* ($d$) |
| Magnitude written as | $|\\vec{A}|$ or $A$ | the value itself |
| Examples | **displacement, velocity, acceleration, force** | **distance, speed, energy, pressure, mass** |

The distinction is sharpest on a **nonlinear path**: over one year the Earth travels a **distance** of ~940 million km, but its **displacement** is **zero** (it returns to start).

#### Vector addition — tip-to-tail
The sum (or difference) of vectors is the **resultant**. Place the **tail of the next vector at the tip of the previous one** (lengths proportional to magnitudes); the resultant runs from the tail of the first to the tip of the last.

:::keyconcept
When adding vectors, **always add tip-to-tail!** The resultant points from the very first tail to the very last tip.
:::

#### Vector addition — components
Resolve each vector into perpendicular (usually $x$ and $y$) components. For a vector $V$ at angle $\\theta$ from the $x$-axis:

$$X = V\\cos\\theta \\qquad Y = V\\sin\\theta \\qquad \\text{(Equation 1.1)}$$

![Figure 1.3 — Splitting a vector into x- and y-components](${fig(1, 2).src})

Recover the magnitude with the **Pythagorean theorem**:

$$V = \\sqrt{X^2 + Y^2} \\qquad \\text{(Equation 1.2)}$$

![Figure 1.4 — Using the Pythagorean theorem to find the resultant magnitude](${fig(1, 3).src})

And the direction by the inverse tangent (*beyond MCAT scope to compute, but know the relationship*):

$$\\theta = \\tan^{-1}\\!\\left(\\frac{Y}{X}\\right) \\qquad \\text{(Equation 1.3)}$$

##### Component method, step by step
1. **Resolve** each vector into $x$- and $y$-components.
2. **Sum** the $x$-components to get $R_x$; **sum** the $y$-components to get $R_y$.
3. **Magnitude:** $R = \\sqrt{R_x^2 + R_y^2}$.
4. **Direction:** $\\theta = \\tan^{-1}(R_y / R_x)$.

![Figure 1.5 — Finding the resultant R of three added vectors](${fig(1, 4).src})

#### Vector subtraction
Subtracting is adding the **opposite**:

$$\\vec{A} - \\vec{B} = \\vec{A} + (-\\vec{B})$$

where $-\\vec{B}$ has the **same magnitude** but **opposite direction**.

:::keyconcept
To subtract, just **flip the direction** of the vector being subtracted, then follow the normal **tip-to-tail** rules.
:::

#### Multiplying a vector by a scalar
Multiplying $\\vec{A}$ by scalar $n$ gives $\\vec{B} = n\\vec{A}$:
- **Magnitude** is scaled by $|n|$.
- **Direction** is **unchanged** if $n > 0$, **reversed** if $n < 0$.

So $+3\\vec{A}$ is three times as long, same direction; $-3\\vec{A}$ is three times as long, **opposite** direction.

#### Multiplying two vectors
There are **two** products — one yields a scalar, one yields a vector:

| Product | Formula | Result | Example quantity |
|---|---|---|---|
| **Dot product** ($\\vec{A}\\cdot\\vec{B}$) | $|\\vec{A}||\\vec{B}|\\cos\\theta$ (Eq. 1.4) | **Scalar** | **Work** (force · displacement) |
| **Cross product** ($\\vec{A}\\times\\vec{B}$) | $|\\vec{A}||\\vec{B}|\\sin\\theta$ (Eq. 1.5) | **Vector** ⊥ to both | **Torque** (lever arm × force) |

The cross-product resultant is **perpendicular to the plane** of the two vectors. Because the MCAT is 2-D, that usually means **into the page (⊗)** or **out of the page (⊙)**.

##### The right-hand rule

![Figure 1.6 — Applying the right-hand rule for a cross product](${fig(1, 5).src})

To find the direction of $\\vec{C} = \\vec{A}\\times\\vec{B}$:
1. Point your **thumb** along $\\vec{A}$.
2. Point your **fingers** along $\\vec{B}$ (rotate your wrist as needed).
3. Your **palm** faces the direction of $\\vec{C}$.

:::expertise
There are several versions of the right-hand rule (thumb/fingers/palm; or index = $\\vec{A}$, middle = $\\vec{B}$, thumb = $\\vec{C}$). **Pick one and master it** — fluency with a single method beats vague familiarity with several.
:::

:::keyconcept
**Order matters for cross products!** Scalar multiplication is commutative ($3\\times4 = 4\\times3$), but vector cross products are **anti-commutative**: $\\vec{A}\\times\\vec{B} = -(\\vec{B}\\times\\vec{A})$ — same magnitude, **opposite direction**. Dot products *are* commutative.
:::

:::mnemonic
**"DOT gives a Dud (scalar); CROSS gives a Crown (vector)."** Cosine pairs with the dot ($\\cos$ peaks when vectors are **parallel** → maximum work); sine pairs with the cross ($\\sin$ peaks when vectors are **perpendicular** → maximum torque).
:::
`
    },

    /* ─────────────────────── 1.3 Displacement and Velocity ─────────────────────── */
    {
      id: 's3', num: '1.3', title: 'Displacement and Velocity',
      goals: [
        'Relate the average and instantaneous versions of velocity and speed',
        'Distinguish total distance from total displacement',
        'Connect displacement and velocity with an equation'
      ],
      recap: `
- **Displacement** ($\\vec{x}$ or $\\vec{d}$) = **vector**, the straight-line change in position; **distance** ($d$) = **scalar**, the actual path length.
- **Velocity** ($\\vec{v}$) = **vector** (rate of *displacement* change); **speed** ($v$) = **scalar** (rate of *distance* covered).
- **Instantaneous speed** = magnitude of **instantaneous velocity**, *always*.
- **Average speed** need *not* equal the magnitude of **average velocity** (speed counts the whole path; velocity counts only net displacement).
- Distance is **always ≥** the magnitude of displacement.
`,
      detail: `
#### Displacement vs. distance
| | **Displacement** ($\\vec{x}$, $\\vec{d}$) | **Distance** ($d$) |
|---|---|---|
| Type | **Vector** | **Scalar** |
| What it measures | **Net** straight-line change in position (initial → final) | **Total path** actually traveled |
| Path-dependent? | **No** | **Yes** |

**Example.** Walk 2 km east, 2 km north, 2 km west, 2 km south → **distance = 8 km**, but **displacement = 0** (you end where you started). Distance is always **≥** the magnitude of displacement.

#### Velocity vs. speed
- **Velocity** ($\\vec{v}$) is a **vector**: the rate of change of **displacement**. Its direction matches the displacement vector. SI units: $\\text{m/s}$.
- **Speed** ($v$) is a **scalar**: the rate of actual **distance** traveled.

##### Instantaneous quantities
**Instantaneous velocity** is the limit of average velocity as $\\Delta t \\to 0$:

$$v = \\lim_{\\Delta t \\to 0}\\frac{\\Delta x}{\\Delta t} \\qquad \\text{(Equation 1.6)}$$

The **instantaneous speed** is *always* the **magnitude** of the instantaneous velocity.

##### Average quantities
$$\\bar{v} = \\frac{\\Delta x}{\\Delta t} \\quad\\text{(average velocity, Eq. 1.7)} \\qquad \\text{average speed} = \\frac{\\text{total distance}}{\\Delta t}$$

**Average velocity** uses **displacement** (vector); **average speed** uses **total distance** (scalar) — so they can differ wildly.

**Example — the orbiting Earth.** Over one year the Earth covers ~940 million km, so its **average speed** is about $30\\,\\text{km/s}$. But its **displacement** is zero (it returns to start), so its **average velocity** is **zero**.

:::keyconcept
**Instantaneous speed always equals |instantaneous velocity|.** But **average speed** equals **|average velocity|** *only* for straight-line motion that never reverses — any curve or backtrack makes average speed larger.
:::

:::mnemonic
**"SpeeD has no Direction; veloCity Carries a compass."** Speed and distance are scalars (path-counters); velocity and displacement are vectors (net-position-counters).
:::
`
    },

    /* ─────────────────────── 1.4 Forces and Acceleration ─────────────────────── */
    {
      id: 's4', num: '1.4', title: 'Forces and Acceleration',
      goals: [
        'Identify common forces, including gravitational and frictional forces',
        'Calculate a frictional force and predict its direction',
        'Explain the normal force and how it impacts a system',
        'Relate force, velocity, and acceleration'
      ],
      images: [{ src: fig(3, 3).src, alt: fig(3, 3).alt, caption: 'Figure 1.8 — Center of mass of a thrown tennis racket: only this point follows a smooth parabolic path.' }],
      recap: `
- A **force** ($\\vec{F}$, in **newtons**) is any push or pull; it can act at a distance (gravity, electrostatics).
- **Gravitation:** $F_g = \\dfrac{Gm_1 m_2}{r^2}$ — directly $\\propto$ masses, inversely $\\propto r^2$ (halve $r$ → quadruple $F_g$).
- **Friction always opposes motion.** **Static:** $0 \\le f_s \\le \\mu_s N$ (a *range*); **kinetic:** $f_k = \\mu_k N$ (a *constant*). Always $\\mu_s > \\mu_k$.
- **Mass** ($m$, scalar, kg) = inertia; **weight** ($F_g = mg$, vector, N) = gravitational force. Same mass everywhere; weight changes with $g$.
- **Acceleration** ($\\vec{a}$, $\\text{m/s}^2$) = rate of change of velocity; on a $v$-vs-$t$ graph it is the **slope**.
`,
      detail: `
#### Forces
A **force** ($\\vec{F}$) is a **vector** push or pull. Forces can act between objects that **never touch** (gravity, electrostatic forces). SI unit: the **newton**, $1\\,\\text{N} = 1\\,\\text{kg}\\cdot\\text{m}/\\text{s}^2$.

#### Gravity
**Gravity** is an attractive force felt by **all matter**. Every pair of masses attracts:

$$F_g = \\frac{G\\,m_1 m_2}{r^2} \\qquad \\text{(Equation 1.8)}$$

where $G \\approx 6.67\\times10^{-11}\\,\\text{N}\\cdot\\text{m}^2/\\text{kg}^2$, and $r$ is the distance between **centers of mass**. This is a favorite **proportionality** question:

- **Inverse-square** in $r$: halve $r$ → $F_g$ **quadruples**.
- **Directly** proportional to mass: triple $m_1$ → $F_g$ **triples**.

:::expertise
Acceleration due to gravity, $g$, **decreases with height** above Earth and **increases** closer to Earth's center of mass. Near the surface, use $g \\approx 9.8\\,\\text{m/s}^2$ (often rounded to $10\\,\\text{m/s}^2$ for fast math).
:::

:::realworld
**Newton's third law** says Earth's pull on you equals your pull on Earth (equal magnitude, opposite direction). Same force, wildly different masses → from $F = ma$, **you** get a huge acceleration toward Earth while **Earth** gets a negligible one toward you.
:::

#### Friction
**Friction** always **opposes motion** (it can only slow things or hold them still — never speed them up). Two types:

| | **Static friction** ($f_s$) | **Kinetic friction** ($f_k$) |
|---|---|---|
| When | Surfaces **not** sliding | Surfaces **sliding** |
| Equation | $0 \\le f_s \\le \\mu_s N$ (a **range**) | $f_k = \\mu_k N$ (a **constant**) |
| Coefficient | $\\mu_s$ | $\\mu_k$, and **$\\mu_s > \\mu_k$** always |
| Depends on speed/area? | No (max value fixed) | **No** |

The **normal force** $N$ is the component of contact force **perpendicular** to the surface. The static-friction *range* explains why a heavy bag stays put under a 25 N or 50 N push but slides at 100 N — static friction matches the applied force up to its maximum $\\mu_s N$, then yields.

A **rolling wheel** experiences **static**, not kinetic, friction: its contact point is instantaneously stationary. Only when it **slides** (e.g., on ice) does kinetic friction appear.

:::keyconcept
$\\mu_s > \\mu_k$ **always.** It takes more force to *start* something sliding than to *keep* it sliding — objects "stick," then slip and move more easily. The contact area (set by the normal load), not surface roughness alone, governs how much friction there is.
:::

#### Mass and weight
| | **Mass** ($m$) | **Weight** ($F_g$) |
|---|---|---|
| What it is | Measure of **inertia** / amount of matter | **Gravitational force** on that mass |
| Type | **Scalar** | **Vector** |
| SI unit | **kilogram** (kg) | **newton** (N) |
| Depends on gravity? | **No** (same on Earth & Moon) | **Yes** ($F_g = mg$) |

$$F_g = mg \\qquad \\text{(Equation 1.11)}$$

##### Center of mass / center of gravity
Weight acts at a single point: the **center of mass**. A thrown racket tumbles, but its **center of mass traces a clean parabola**. For 3-D distributions:

$$x_{cm} = \\frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} \\qquad \\text{(and similarly for } y_{cm},\\, z_{cm}\\text{)} \\quad \\text{(Eq. 1.12)}$$

:::keyconcept
For a **homogeneous, symmetric** object the **center of mass is at the geometric center** (e.g., a metal ball). Not so for irregular, non-uniform objects (a human body, a TV). The MCAT won't make you *compute* center of mass directly, but it may be a hidden step.
:::

#### Acceleration
**Acceleration** ($\\vec{a}$) is the rate of change of velocity — a **vector**, units $\\text{m/s}^2$. Opposite to velocity, it's called **deceleration**.

$$\\bar{a} = \\frac{\\Delta v}{\\Delta t} \\quad \\text{(average, Eq. 1.13)} \\qquad a = \\lim_{\\Delta t\\to 0}\\frac{\\Delta v}{\\Delta t} \\quad \\text{(instantaneous, Eq. 1.14)}$$

On a **velocity-vs-time graph**, the **slope** (tangent at time $t$) is the **instantaneous acceleration**: positive slope → speeding up; negative slope → decelerating.

:::mnemonic
**Friction's direction:** find the way the object *wants* to move (its velocity, or the net of other forces) and point friction the **other way** — friction is the universe's "no."
:::
`
    },

    /* ──────────────────────────── 1.5 Newton’s Laws ──────────────────────────── */
    {
      id: 's5', num: '1.5', title: 'Newton’s Laws',
      goals: [
        'State and apply Newton’s three laws of motion',
        'Recognize the first law as the special case of the second law when net force is zero'
      ],
      recap: `
- **First law (inertia):** $\\vec{F}_{net} = m\\vec{a} = 0$ → an object at rest stays at rest, and one in motion keeps constant velocity, unless a **net force** acts.
- **Second law:** $\\vec{F}_{net} = m\\vec{a}$ → acceleration appears only with a nonzero net force, and points **in the same direction** as $\\vec{F}_{net}$.
- **Third law (action–reaction):** $\\vec{F}_{AB} = -\\vec{F}_{BA}$ → forces come in **equal, opposite** pairs (no contact required).
- The first law is just the **second law with $\\vec{F}_{net} = 0$.**
`,
      detail: `
Newton's three laws describe, as equations, exactly how forces affect masses.

#### First law — the law of inertia
$$\\vec{F}_{net} = m\\vec{a} = 0 \\qquad \\text{(Equation 1.15)}$$

A body **at rest** stays at rest, and a body **in motion** keeps **constant velocity**, *unless* a **net force** acts on it. This is **inertia**. (It's really a special case of the second law where $\\vec{F}_{net} = 0$.)

#### Second law
$$\\vec{F}_{net} = m\\vec{a} \\qquad \\text{(Equation 1.16)}$$

An object of mass $m$ **accelerates** only when the vector sum of forces is **nonzero**. If the forces cancel, **no acceleration**. The **net force and acceleration vectors always point the same way**.

#### Third law — action and reaction
$$\\vec{F}_{AB} = -\\vec{F}_{BA} \\qquad \\text{(Equation 1.17)}$$

For every force object A exerts on object B, object B exerts an **equal-magnitude, opposite-direction** force on A. **No contact required** — the Earth–Moon gravitational pair acts across hundreds of thousands of kilometers.

#### The three laws side by side
| Law | Equation | One-line statement |
|---|---|---|
| **First (inertia)** | $\\vec{F}_{net} = 0$ | No net force → no change in velocity |
| **Second** | $\\vec{F}_{net} = m\\vec{a}$ | Net force → acceleration, same direction |
| **Third** | $\\vec{F}_{AB} = -\\vec{F}_{BA}$ | Forces come in equal-and-opposite pairs |

:::realworld
**Crash-test example.** Before impact a car moves at constant velocity → no net force (**1st law**). Hitting the wall causes sudden deceleration → net force $= ma$ (**2nd law**). The car pushes on the wall, and the wall pushes back equally and oppositely on the car (**3rd law**).
:::

:::mnemonic
**"1-2-3: Inertia, $F=ma$, Reaction."** First = lazy (stays put). Second = the equation that *does* the work. Third = "you can't push without being pushed back."
:::
`
    },

    /* ──────────────────── 1.6 Motion with Constant Acceleration ─────────────────── */
    {
      id: 's6', num: '1.6', title: 'Motion with Constant Acceleration',
      goals: [
        'Identify the forces active during free fall and projectile motion',
        'Predict the launch angle that maximizes horizontal or vertical displacement',
        'Recall and apply the kinematics equations and the centripetal-acceleration equation'
      ],
      svgs: [{
        title: 'Projectile motion: independent x and y',
        caption: 'Horizontal velocity is constant (no horizontal force); vertical velocity changes at g. The two dimensions are analyzed separately.',
        svg: `<svg viewBox="0 0 620 300" width="620" role="img" aria-label="Parabolic projectile trajectory with horizontal and vertical velocity components" font-family="system-ui, sans-serif">
  <line x1="50" y1="250" x2="600" y2="250" stroke="#475569" stroke-width="2"/>
  <line x1="50" y1="250" x2="50" y2="30" stroke="#475569" stroke-width="2"/>
  <text x="585" y="270" font-size="12" fill="#475569">x</text>
  <text x="30" y="40" font-size="12" fill="#475569">y</text>
  <path d="M50 250 Q 320 -20 580 250" fill="none" stroke="#0369a1" stroke-width="2.5"/>
  ${[
    { x: 50, y: 250 }, { x: 160, y: 150 }, { x: 315, y: 92 }, { x: 470, y: 150 }, { x: 580, y: 250 }
  ].map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#0369a1"/>`).join('')}
  <text x="315" y="80" font-size="11.5" fill="#92400e" text-anchor="middle" font-weight="bold">v_y = 0 at apex</text>
  ${[
    { x: 160, y: 150 }, { x: 470, y: 150 }
  ].map(p => `<line x1="${p.x}" y1="${p.y}" x2="${p.x + 40}" y2="${p.y}" stroke="#16a34a" stroke-width="2" marker-end="url(#vx)"/>`).join('')}
  <defs><marker id="vx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#16a34a"/></marker></defs>
  <text x="200" y="142" font-size="11" fill="#16a34a" font-weight="bold">v_x constant</text>
  <text x="60" y="245" font-size="11" fill="#0f172a">launch</text>
  <text x="540" y="245" font-size="11" fill="#0f172a">land</text>
</svg>`
      }],
      recap: `
- The MCAT restricts kinematics to **constant acceleration**. The four equations: $v = v_0 + at$, $x = v_0 t + \\tfrac{1}{2}at^2$, $v^2 = v_0^2 + 2ax$, $x = \\bar{v}\\,t$.
- **Free fall:** only force is gravity → $a = g$ (take **up = +**, so $g = -9.8\\,\\text{m/s}^2$); at **max height $v = 0$**; time up = time down.
- **Projectile motion:** $x$ and $y$ are **independent**. $v_x$ stays **constant** ($a_x = 0$); $v_y$ changes at $g$. **Max range at 45°**; max height when launched straight up.
- **Inclined planes:** split gravity into **parallel** ($mg\\sin\\theta$, down the slope) and **perpendicular** ($mg\\cos\\theta$, into the slope).
- **Uniform circular motion:** speed constant, **centripetal force** points radially inward, velocity is **tangent**. $F_c = \\dfrac{mv^2}{r}$, $a_c = \\dfrac{v^2}{r}$.
`,
      detail: `
#### The four kinematics equations (constant acceleration)
Objects undergo either **constant** (zero-acceleration) or **changing** motion. For **constant acceleration** (the only kind the MCAT tests in depth):

| Equation | Missing variable | Form |
|---|---|---|
| **1.18** | displacement | $v = v_0 + at$ |
| **1.19** | final velocity | $x = v_0 t + \\tfrac{1}{2}at^2$ |
| **1.20** | time | $v^2 = v_0^2 + 2ax$ |
| **1.21** | acceleration | $x = \\bar{v}\\,t = \\dfrac{v_0 + v}{2}\\,t$ |

Here $x$, $v$, $a$ are displacement, velocity, acceleration; $v_0$ is initial velocity; $\\bar{v}$ is average velocity; $t$ is time. Use $y$ instead of $x$ for vertical motion.

#### Linear motion & free fall
In **linear motion** velocity and acceleration lie along the line of motion (vertical, horizontal, or along a ramp). A dropped object is the classic case.

In **free fall**, air resistance is neglected, so the **only** force is gravity → constant $a = g$, and **terminal velocity is never reached**.

:::expertise
For free-fall problems, **make up positive and down negative** by habit, so $g = -9.8\\,\\text{m/s}^2$. At **maximum height the velocity is zero** — set $v = 0$ to solve for the time up, then **double it** for total flight time (when the object returns to its launch height).
:::

#### Projectile motion
**Projectile motion** is 2-D, and the two dimensions are **independent**:
- **Horizontal:** no force (air resistance neglected) → $a_x = 0$ → **$v_x$ is constant**.
- **Vertical:** gravity acts → $v_y$ changes at rate $g$.

Horizontal distance = $v_x \\times t$, with $t$ found from the vertical motion.

:::keyconcept
Gravity is written **bold** ($\\vec{g}$) because it is a **vector** — it has direction (down). It's unique in doubling as both a constant and a directional vector in calculations.
:::

#### Inclined planes
On a ramp, split **gravity** into components **parallel** and **perpendicular** to the surface:

$$F_{g,\\parallel} = mg\\sin\\theta \\qquad F_{g,\\perp} = mg\\cos\\theta \\qquad \\text{(Equation 1.22)}$$

where $\\theta$ is the incline angle. The **parallel** component drives motion down the slope; the **perpendicular** component is balanced by the normal force ($N = mg\\cos\\theta$ when there's no perpendicular acceleration). On a **frictionless** incline the acceleration down the slope is simply $a = g\\sin\\theta$.

#### Circular motion
In **uniform circular motion** the **speed is constant**, the **velocity vector is always tangent** to the circle, and a **centripetal force** points **radially inward** to keep the object on its path:

$$F_c = \\frac{mv^2}{r} \\quad\\Longrightarrow\\quad a_c = \\frac{v^2}{r} \\qquad \\text{(Equation 1.23)}$$

Remove the centripetal force and the object flies off **tangentially**. The centripetal force can be supplied by **tension, gravity, electrostatics**, or any other force — it is a *role*, not a new kind of force. (The **tangential** force is zero in *uniform* circular motion, since speed isn't changing.)

:::mnemonic
**"Centripetal = center-seeking."** The net force (and acceleration) point **inward**, never outward. "Centrifugal force" is only an *apparent* outward effect in a rotating frame — by Newton's third law it's the **reaction** to centripetal force and acts **antiparallel** to it.
:::

:::expertise
**Max range at 45°** (because $\\sin\\theta\\cos\\theta$ peaks there). For **max height**, launch **straight up** (all velocity in the vertical). On a level surface, a projectile's net vertical displacement is **zero** — it lands at launch height.
:::
`
    },

    /* ────────────────────────── 1.7 Mechanical Equilibrium ────────────────────── */
    {
      id: 's7', num: '1.7', title: 'Mechanical Equilibrium',
      goals: [
        'Determine whether an object is in translational and/or rotational equilibrium',
        'Use free body diagrams to analyze the forces on an object',
        'Calculate torque within a system'
      ],
      recap: `
- **Dynamics** = the study of forces and torques; always sketch a **free body diagram** before calculating.
- **Translational equilibrium** (1st condition): $\\sum \\vec{F} = 0$ → **constant velocity** (which may be zero).
- **Rotational equilibrium** (2nd condition): $\\sum \\tau = 0$ → **constant angular velocity** (usually zero on the MCAT).
- **Torque:** $\\tau = rF\\sin\\theta$ — maximal at $\\theta = 90°$ ($\\sin 90° = 1$), zero when force is parallel to the lever arm ($\\sin 0° = 0$).
- **Sign convention:** counterclockwise torque **positive**, clockwise **negative**.
`,
      detail: `
#### Free body diagrams
A **free body diagram** draws every force acting on an object. **Always draw one** before doing force calculations — it keeps directions and relative positions straight and prevents careless errors.

:::expertise
On Test Day, **sketch a quick picture** for any dynamics problem. A 10-second diagram catches sign errors and forgotten forces that would otherwise cost you the question.
:::

#### Translational equilibrium (first condition)
**Translational motion** is motion without rotation. **Translational equilibrium** holds when the vector sum of all forces is zero:

$$\\sum \\vec{F} = 0 \\qquad \\text{(first condition of equilibrium)}$$

This is just **Newton's first law**: no net force → **no acceleration** → **constant velocity**. That velocity may be **zero** (stationary) *or* a **constant nonzero** value.

:::keyconcept
**No acceleration ⟺ no net force.** Any object moving at **constant velocity** has **zero** net force on it. But the converse trap: $\\vec{F}_{net} = 0$ does **not** mean $v = 0$ — the object can be cruising at a steady speed.
:::

#### Rotational equilibrium (second condition)
**Rotational motion** happens when forces rotate an object about a **fulcrum** (pivot). Force applied at a distance (the **lever arm**) produces **torque** — and it's torque, not force alone, that creates rotation. Torque is a **cross product**:

$$\\tau = \\vec{r}\\times\\vec{F} = rF\\sin\\theta \\qquad \\text{(Equation 1.24)}$$

where $r$ is the lever-arm length, $F$ the force magnitude, and $\\theta$ the angle between them.

:::keyconcept
Since $\\sin 90° = 1$, **torque is greatest when force is perpendicular ($90°$) to the lever arm**. Since $\\sin 0° = 0$, **there is no torque when force is parallel to the lever arm**.
:::

**Rotational equilibrium** holds when the sum of torques is zero:

$$\\sum \\tau = 0 \\qquad \\text{(second condition of equilibrium)}$$

with **counterclockwise = positive**, **clockwise = negative**. So all positive torques must exactly cancel all negative ones. The object is then either **not rotating** (the MCAT's usual assumption) or rotating at **constant angular velocity**.

##### Two conditions of equilibrium

| Condition | Requirement | Result |
|---|---|---|
| **Translational** (1st) | $\\sum \\vec{F} = 0$ | constant (linear) velocity |
| **Rotational** (2nd) | $\\sum \\tau = 0$ | constant angular velocity |

An object can satisfy **one, both, or neither**. **Full equilibrium** requires **both** sums to be zero.

:::mnemonic
**"Balance the seesaw":** for a teeter-totter in equilibrium, $\\tau_{left} = \\tau_{right}$, i.e. $r_1 F_1 = r_2 F_2$. A lighter person sits **farther** from the fulcrum; a heavier person sits **closer**. A long enough lever lets a small force lift a huge load.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Units',
        points: [
          'The MCAT tests **SI units**, built on the metric system. The seven SI base units are **meter, kilogram, second, ampère, mole, kelvin, and candela**.',
          '**Base units** are the system’s foundation; **derived units** combine them (e.g., the newton $= \\text{kg}\\cdot\\text{m}/\\text{s}^2$).'
        ]
      },
      {
        section: 'Vectors and Scalars',
        points: [
          '**Vectors** have magnitude *and* direction (displacement, velocity, acceleration, force); **scalars** have magnitude only (speed, distance, mass, energy, coefficients of friction).',
          'Add vectors **tip-to-tail** or by **components + the Pythagorean theorem**; subtract by reversing the second vector and adding.',
          'Multiplying a vector by a scalar changes its magnitude and may reverse its direction.',
          'The **dot product** $\\vec{A}\\cdot\\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta$ yields a **scalar**; the **cross product** $\\vec{A}\\times\\vec{B} = |\\vec{A}||\\vec{B}|\\sin\\theta$ yields a **vector** whose direction comes from the **right-hand rule**.'
        ]
      },
      {
        section: 'Displacement and Velocity',
        points: [
          '**Displacement** is the vector change in position (path-independent); **distance** is the scalar path length.',
          '**Velocity** is the vector rate of change of displacement; **speed** is the scalar rate of distance traveled.',
          '**Average velocity** = total displacement / total time; **average speed** = total distance / total time.',
          '**Instantaneous speed** is the magnitude of the instantaneous velocity vector.'
        ]
      },
      {
        section: 'Forces and Acceleration',
        points: [
          'A **force** is any push or pull capable of causing acceleration; **gravity** is the attractive force between masses.',
          '**Friction** opposes relative motion: **static** friction takes a range of values ($0 \\le f_s \\le \\mu_s N$); **kinetic** friction is constant ($f_k = \\mu_k N$); always $\\mu_s > \\mu_k$.',
          '**Mass** measures inertia (scalar, kg); **weight** is the gravitational force on that mass (vector, N), $F_g = mg$.',
          '**Acceleration** is the vector rate of change of velocity; both average and instantaneous forms exist.'
        ]
      },
      {
        section: 'Newton’s Laws',
        points: [
          '**First law (inertia):** with no net force, an object stays at rest or moves at constant velocity.',
          '**Second law:** $\\vec{F}_{net} = m\\vec{a}$ — acceleration results from the net force and the object’s mass.',
          '**Third law:** interacting objects exert equal and opposite forces on each other.'
        ]
      },
      {
        section: 'Motion with Constant Acceleration',
        points: [
          '**Linear motion** (including free fall) has parallel/antiparallel velocity and acceleration vectors.',
          '**Projectile motion** has independent $x$- and $y$-components; with air resistance negligible, gravity is the only force, so $v_x$ is constant.',
          '**Inclined planes** are best analyzed with components parallel and perpendicular to the surface.',
          '**Uniform circular motion** has constant speed, a radially inward **centripetal force**, and a velocity vector that is always **tangent** to the path.'
        ]
      },
      {
        section: 'Mechanical Equilibrium',
        points: [
          '**Free body diagrams** depict the forces on an object and are essential for equilibrium and dynamics problems.',
          '**Translational equilibrium** ($\\sum \\vec{F} = 0$) means constant velocity; it may or may not coincide with rotational equilibrium.',
          '**Rotational equilibrium** ($\\sum \\tau = 0$) means constant angular velocity, usually zero on the MCAT; torque $\\tau = rF\\sin\\theta$.'
        ]
      }
    ],
    mnemonics: [
      '**Vectors vs. scalars:** "SpeeD has no Direction; veloCity Carries a compass." Speed, distance, mass, energy = scalars; velocity, displacement, acceleration, force = vectors.',
      '**Dot vs. cross:** "DOT gives a Dud (scalar, uses **cos**); CROSS gives a Crown (vector, uses **sin**)." Cosine peaks for parallel vectors (max work); sine peaks for perpendicular (max torque).',
      '**Cross-product order:** $\\vec{A}\\times\\vec{B} = -(\\vec{B}\\times\\vec{A})$ — flipping the order flips the result’s direction. Right-hand rule: thumb = A, fingers = B, palm = result.',
      '**Newton’s laws 1-2-3:** Inertia (stays put), $F=ma$ (does the work), Reaction ("you can’t push without being pushed back").',
      '**Friction:** $\\mu_s > \\mu_k$ always — harder to *start* a slide than to *keep* one going. Friction always points **opposite** the (attempted) motion.',
      '**Free fall:** up = +, so $g = -9.8\\,\\text{m/s}^2$; at the top $v = 0$; time up = time down — solve half the trip and double it.',
      '**Projectiles:** max **range** at **45°**; max **height** when launched straight up. $v_x$ never changes; only $v_y$ feels gravity.',
      '**Centripetal = center-seeking** (force points inward). "Centrifugal" is just the apparent outward reaction (antiparallel to centripetal).',
      '**Torque:** "perpendicular is powerful" — $\\sin 90° = 1$ gives max torque; force along the lever arm ($\\sin 0° = 0$) gives none.'
    ],
    keyConcepts: [
      '**Vectors carry direction; scalars don’t.** Getting this right tells you whether to use the dot product (scalar out) or cross product (vector out), and whether to track signs/components.',
      '**Constant acceleration is the whole MCAT toolkit.** The four kinematics equations ($v=v_0+at$, $x=v_0t+\\tfrac12 at^2$, $v^2=v_0^2+2ax$, $x=\\bar v t$) solve nearly every motion problem — pick the one missing the variable you don’t have.',
      '**Newton’s second law unifies everything:** $\\vec{F}_{net}=m\\vec{a}$. The first law is just the $\\vec{F}_{net}=0$ case; the third law guarantees forces come in equal-opposite pairs.',
      '**Friction is a range, then a constant.** Static friction grows to match an applied force up to $\\mu_s N$; once sliding begins, kinetic friction is the fixed value $\\mu_k N$ — and $\\mu_s > \\mu_k$.',
      '**Equilibrium = no acceleration, not no motion.** $\\sum\\vec{F}=0$ allows constant nonzero velocity; $\\sum\\tau=0$ allows constant angular velocity. Both can hold at once or independently.'
    ],
    equations: [
      { name: 'Vector components', tex: 'X = V\\cos\\theta,\\quad Y = V\\sin\\theta', note: 'Resolve a vector V at angle θ from the x-axis into perpendicular components.' },
      { name: 'Resultant magnitude (Pythagorean)', tex: 'V = \\sqrt{X^2 + Y^2}', note: 'Recombine perpendicular components into the vector’s magnitude.' },
      { name: 'Direction from components', tex: '\\theta = \\tan^{-1}\\!\\left(\\dfrac{Y}{X}\\right)', note: 'Angle of the resultant (the inverse-tangent step is beyond MCAT calculation).' },
      { name: 'Dot product', tex: '\\vec{A}\\cdot\\vec{B} = |\\vec{A}||\\vec{B}|\\cos\\theta', note: 'Two vectors → a scalar (e.g., work). Maximal when vectors are parallel.' },
      { name: 'Cross product', tex: '\\vec{A}\\times\\vec{B} = |\\vec{A}||\\vec{B}|\\sin\\theta', note: 'Two vectors → a perpendicular vector (e.g., torque). Direction by the right-hand rule.' },
      { name: 'Average velocity', tex: '\\bar{v} = \\dfrac{\\Delta x}{\\Delta t}', note: 'Total displacement over total time (a vector).' },
      { name: 'Universal gravitation', tex: 'F_g = \\dfrac{G\\,m_1 m_2}{r^2}', note: 'Attractive force between masses; inverse-square in r, with G ≈ 6.67×10⁻¹¹ N·m²/kg².' },
      { name: 'Static friction', tex: '0 \\le f_s \\le \\mu_s N', note: 'A range: static friction matches the applied force up to a maximum of μ_s N.' },
      { name: 'Kinetic friction', tex: 'f_k = \\mu_k N', note: 'A constant once sliding begins; μ_s > μ_k always.' },
      { name: 'Weight', tex: 'F_g = mg', note: 'Gravitational force on a mass; g ≈ 9.8 m/s² near Earth’s surface.' },
      { name: 'Average acceleration', tex: '\\bar{a} = \\dfrac{\\Delta v}{\\Delta t}', note: 'Change in velocity over time (a vector).' },
      { name: 'Newton’s first law', tex: '\\vec{F}_{net} = m\\vec{a} = 0', note: 'No net force → no acceleration → constant velocity (law of inertia).' },
      { name: 'Newton’s second law', tex: '\\vec{F}_{net} = m\\vec{a}', note: 'Net force produces acceleration in the same direction.' },
      { name: 'Newton’s third law', tex: '\\vec{F}_{AB} = -\\vec{F}_{BA}', note: 'Equal and opposite force pairs between interacting objects.' },
      { name: 'Kinematics (no displacement)', tex: 'v = v_0 + at', note: 'Use when displacement is unknown/unneeded.' },
      { name: 'Kinematics (no final velocity)', tex: 'x = v_0 t + \\tfrac{1}{2}at^2', note: 'Use when final velocity is unknown/unneeded.' },
      { name: 'Kinematics (no time)', tex: 'v^2 = v_0^2 + 2ax', note: 'Use when time is unknown/unneeded (great for max-height problems).' },
      { name: 'Kinematics (no acceleration)', tex: 'x = \\bar{v}\\,t = \\dfrac{v_0 + v}{2}\\,t', note: 'Use when acceleration is unknown/unneeded.' },
      { name: 'Gravity on an inclined plane', tex: 'F_{g,\\parallel} = mg\\sin\\theta,\\quad F_{g,\\perp} = mg\\cos\\theta', note: 'Split weight parallel (down-slope) and perpendicular (into-slope) to the surface.' },
      { name: 'Centripetal force', tex: 'F_c = \\dfrac{mv^2}{r}', note: 'Net inward force for circular motion; acceleration a_c = v²/r.' },
      { name: 'Torque', tex: '\\tau = rF\\sin\\theta', note: 'Cross product of lever arm and force; maximal at θ = 90°, zero when parallel.' }
    ]
  },

  questions: [
    {
      q: 'A person walks 30 m east and then 40 m north. What is the difference between the traveled distance and the displacement?',
      type: 'mcq',
      choices: ['0 m', '20 m', '50 m', '70 m'],
      correct: 1,
      explanation: 'By the Pythagorean theorem, the displacement magnitude is √(30² + 40²) = 50 m. The total distance traveled is 30 + 40 = 70 m. The difference is 70 − 50 = 20 m.'
    },
    {
      q: 'A 1000 kg rocket ship, traveling at 100 m/s, is acted upon by an average force of 20 kN applied in the direction of its motion for 8 s. What is the change in velocity of the rocket?',
      type: 'mcq',
      choices: ['160 m/s', '260 m/s', '160,000 m/s', '20 m/s'],
      correct: 0,
      explanation: 'Average force = mass × average acceleration, and average acceleration = Δv / Δt. So Δv = F·t / m = (20,000 N × 8 s) / 1000 kg = 160 m/s. Choice B (260) is the new velocity, not the change; choices that skip dividing by mass are also wrong.'
    },
    {
      q: 'A car is traveling at 25 m/s and the driver puts on the brakes, bringing the car to rest in a time of 6 s. What is the magnitude of the average acceleration of the car?',
      type: 'mcq',
      choices: ['2.4 m/s²', '3.6 m/s²', '4.2 m/s²', '6.0 m/s²'],
      correct: 2,
      explanation: 'Average acceleration is the change in velocity over time. The velocity changes by 25 m/s (the car comes to rest), so a = 25 m/s ÷ 6 s ≈ 4.2 m/s². The question asks for the magnitude, which is positive.'
    },
    {
      q: 'An elevator is designed to carry a maximum weight of 9800 N (including its own weight) and to move upward at a steady speed after an initial period of acceleration. While the elevator is accelerating upward, what is the relationship between the maximum tension in the cable and the maximum weight of the elevator?',
      type: 'mcq',
      choices: ['The tension is greater than 9800 N.', 'The tension is less than 9800 N.', 'The tension equals 9800 N.', 'It cannot be determined from the information given.'],
      correct: 0,
      explanation: 'The forces on the elevator are tension upward and weight downward; the net force is their difference. For the elevator to accelerate upward, the upward tension must exceed the downward weight, so the tension must be greater than 9800 N.'
    },
    {
      q: 'A student must lift a 4 kg mass a distance of 0.5 m. The ambient temperature is 298 K and the student must lift the mass in 30 seconds. Which of the following values is NOT necessary to calculate power?',
      type: 'mcq',
      choices: ['Mass', 'Distance', 'Temperature', 'Time'],
      correct: 2,
      explanation: 'Power is work over time; the work here is against gravity (mass × g × distance). The watt breaks down into kg·m²/s³ — no temperature term appears. Mass, distance, and time are all needed, but the ambient temperature is extra information.'
    },
    {
      q: 'A firefighter jumps horizontally from a burning building with an initial speed. At what time is the angle between the firefighter’s velocity and acceleration vectors the greatest?',
      type: 'mcq',
      choices: ['The instant the firefighter jumps', 'When the firefighter reaches terminal velocity', 'Halfway through the firefighter’s fall', 'Right before the firefighter lands on the ground'],
      correct: 0,
      explanation: 'Acceleration (gravity) always points straight down. At the instant of the jump the velocity is purely horizontal, so the angle between velocity and acceleration is 90° — the maximum. As the firefighter falls, the velocity rotates downward and the angle shrinks.'
    },
    {
      q: 'A 10 kg wagon rests on an inclined plane that makes an angle of 30° with the horizontal. Approximately how large is the force required to keep the wagon from sliding down the plane? (Note: sin 30° = 0.5, cos 30° = 0.866; g = 9.8 m/s²)',
      type: 'mcq',
      choices: ['10 N', '49 N', '85 N', '98 N'],
      correct: 1,
      explanation: 'On an incline, gravity is best split into components parallel and perpendicular to the surface. The parallel component (which tends to slide the wagon down) is mg sinθ = 10 kg × 9.8 m/s² × 0.5 = 49 N. The force opposing the slide must equal this, so 49 N.'
    },
    {
      q: 'Which of the following correctly illustrates the SI base units for the variables in the equation mΔv = FΔt?',
      type: 'mcq',
      choices: ['lb × mph = ft × lb × s', 'kg × (m/s) = N × s', 'kg × (m/s) = (kg·m/s²) × s', 'g × (cm/s) = dyne × s'],
      correct: 2,
      explanation: 'In SI, mass is in kilograms, velocity in m/s, and time in seconds. The newton is a derived unit (kg·m/s²), not a base unit — so the side written entirely in base units is kg × (m/s) = (kg·m/s²) × s. FPS and CGS options use the wrong system.'
    },
    {
      q: 'A diagram shows two vectors A and B with a 60° angle between them. If a student uses the formula a·b·sin(60°), where a and b are the magnitudes of A and B, which of the following best describes the computed value?',
      type: 'mcq',
      choices: ['Positive scalar', 'Negative scalar', 'Vector into the page', 'Vector out of the page'],
      correct: 3,
      explanation: 'Because the formula uses sine, it is a cross product, whose output is a vector. Applying the right-hand rule (thumb along A, fingers along B, palm gives the result) for this configuration points the resultant out of the page. A cross product always yields a vector, eliminating the scalar choices.'
    },
    {
      q: 'Which of the following quantities is NOT a vector?',
      type: 'mcq',
      choices: ['Velocity', 'Force', 'Displacement', 'Distance'],
      correct: 3,
      explanation: 'A vector has both magnitude and direction. Velocity, force, and displacement are all vectors. Distance is a scalar — it has only a numerical value and no direction.'
    },
    {
      q: 'A 30 kg child sits on a seesaw at a distance of 2 m from the fulcrum. Where must the child’s parent (mass 90 kg) sit to balance the seesaw?',
      type: 'mcq',
      choices: ['67 cm from the child', '67 cm from the fulcrum', '133 cm from the child', '267 cm from the fulcrum'],
      correct: 1,
      explanation: 'For rotational equilibrium the torques must be equal: m_child × r_child = m_parent × r_parent. So (30)(2) = (90)(r), giving r = 60/90 = 0.67 m = 67 cm. Since r is measured from the fulcrum, the parent sits 67 cm from the fulcrum.'
    },
    {
      q: 'A potato is launched with a velocity of 12 m/s at an angle of 30°. Which of the following represents the maximum height achieved by the potato? (Use g = 10 m/s²)',
      type: 'mcq',
      choices: ['0.3 m', '1.8 m', '5 m', '18 m'],
      correct: 1,
      explanation: 'Maximum height depends only on the vertical velocity component: v_y = 12·sin(30°) = 6 m/s. Using v² = v₀² + 2ax with final v_y = 0 at the top: 0 = 36 − 2(10)x, so 0 = 36 − 20x, giving x = 1.8 m.'
    },
    {
      q: 'A rock (m = 2 kg) is shot straight up at the same instant that a ball (m = 0.5 kg) is projected horizontally. If both start from the same height, which statement is true?',
      type: 'mcq',
      choices: ['The rock and ball will reach the ground at the same time.', 'The rock will reach the ground first.', 'The ball will reach the ground first.', 'The rock and ball will collide in the air before reaching the ground.'],
      correct: 2,
      explanation: 'Analyze only the vertical dimension. The horizontally launched ball starts with zero vertical velocity and begins falling immediately. The rock first travels upward, reaching a maximum height before falling back, so its downward fall effectively starts higher and later. The ball therefore reaches the ground first.'
    },
    {
      q: 'Centrifugal force is an apparent outward force during circular motion, described as a reaction force under Newton’s third law. Which statement is most likely correct regarding centrifugal force?',
      type: 'mcq',
      choices: ['It exists only for uniform circular motion, not nonuniform circular motion.', 'It exists only when tension or a normal force provides centripetal acceleration.', 'It always acts antiparallel to the centripetal force vector.', 'It is the result of repulsive electrostatic interactions.'],
      correct: 2,
      explanation: 'If centrifugal force is the reaction to the (inward) centripetal force, then by Newton’s third law it must have equal magnitude and opposite direction — it acts antiparallel to the centripetal force vector.'
    },
    {
      q: 'Which of the following statements is/are true of movement on a plane with friction? I. Acceleration is a function of applied force only. II. More force is needed to accelerate a stationary object than an identical moving object. III. The force of friction is independent of the mass of objects.',
      type: 'mcq',
      choices: ['I only', 'II only', 'I and II only', 'I and III'],
      correct: 1,
      explanation: 'Statement I is false: the net force (not just the applied force) determines acceleration, and friction and gravity also act. Statement II is true: static friction exceeds kinetic friction, so it takes more force to start a stationary object moving. Statement III is false: friction depends on the normal force, which depends on mass. Only II is correct.'
    }
  ]
};
