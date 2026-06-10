// Chapter 5 — Electrostatics and Magnetism. Re-authored to the rich-formatting quality bar.
// Figures and section titles come from ch05.json; recap/detail markdown, equations,
// mnemonics, concept summary, and the 15 reconstructed questions are authored here
// (the JSON `questions` array is empty for physics).
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 5,
  title: 'Electrostatics and Magnetism',
  subtitle: 'Charges · Coulomb\'s law · electric potential energy · electric potential · special cases (dipoles) · magnetism',

  blocks: [
    /* ───────────────────────────── 5.1 Charges ───────────────────────────── */
    {
      id: 's1', num: '5.1', title: 'Charges',
      goals: [
        'Contrast the behavior of protons and electrons in charged environments',
        'Categorize materials, including glass and copper, as conductors or insulators',
        'Recognize the charge of an electron in coulombs'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 5.1 — A negatively charged insulator (localized charge) vs. conductor (charge spreads evenly over the surface).' }],
      recap: `
- **Two charges:** the **proton** is positive ($q = +e$), the **electron** is negative ($q = -e$); both share the **fundamental charge** $e = 1.60 \\times 10^{-19}\\ \\text{C}$, but the proton is far **more massive**.
- **Like charges repel, opposite charges attract** — unlike gravity, the electrostatic force can be **attractive *or* repulsive**.
- **Charge is conserved:** it can be transferred (friction, grounding) but never created or destroyed.
- **Conductors** (metals, electrolyte solutions) spread charge evenly over their surface; **insulators** (most nonmetals, glass) hold charge in localized spots.
`,
      detail: `
#### The two charged subatomic particles
Charge comes in two varieties, carried by two subatomic particles:

| Particle | Charge | Magnitude | Mass |
|---|---|---|---|
| **Proton** | Positive | $q = +e = +1.60 \\times 10^{-19}\\ \\text{C}$ | Large ($1.67 \\times 10^{-27}\\ \\text{kg}$) |
| **Electron** | Negative | $q = -e = -1.60 \\times 10^{-19}\\ \\text{C}$ | Tiny ($9.11 \\times 10^{-31}\\ \\text{kg}$) |

- **Like charges repel**, **opposite charges attract**.
- Unlike **gravity** (always attractive), the **electrostatic force can be attractive *or* repulsive** depending on the signs of the interacting charges.
- The proton and electron carry the **same magnitude** of charge but **very different masses** — a high-yield distinction.

:::keyconcept
The **fundamental unit of charge** is $e = 1.60 \\times 10^{-19}\\ \\text{C}$. A proton and an electron each carry this amount; the proton is $q = +e$, the electron is $q = -e$.
:::

#### Conservation and transfer of charge
Most matter is **electrically neutral** — positive and negative charges balance out. Charge is governed by the **law of conservation of charge**: it can neither be created nor destroyed, only **transferred**.

- **Friction** can transfer charge: shuffling across carpet strips negatively charged particles onto your body, which spread over your surface.
- A **ground** returns excess charge to the earth — the shock at a doorknob is excess charge jumping to the conductive metal.
- **Static buildup** is worse in **dry air** because low humidity makes it easier for charge to stay separated.

:::expertise
Even though the particles of electrostatics are tiny, they still have **mass**. The MCAT may pair charge problems with **kinetic energy** ($KE = \\tfrac{1}{2}mv^2$) — don't forget the mass when a charged particle accelerates.
:::

#### Insulators vs. conductors

| | **Insulators** | **Conductors** |
|---|---|---|
| Charge distribution | **Localized** — does not spread over the surface | **Even** — spreads over the entire surface |
| Electron mobility | Electrons tightly bound to nuclei | "**Sea of free electrons**" loosely held, move rapidly |
| Typical materials | Most **nonmetals**, glass, rubber, distilled water | **Metals**; also **electrolyte (ionic) solutions** |
| MCAT roles | **Dielectric** in capacitors; isolating experiments | Circuits, electrochemical cells |

:::mnemonic
**"Insulators insulate."** Their electrons are *locked* to their nuclei (mostly nonmetals → poor charge flow). **Conductors conduct** via a *sea of free electrons* (metals + ionic solutions). Pure water = insulator, but **salt water conducts** because of dissolved ions.
:::
`
    },

    /* ──────────────────────────── 5.2 Coulomb's Law ──────────────────────── */
    {
      id: 's2', num: '5.2', title: 'Coulomb\'s Law',
      goals: [
        'Calculate the electric field a charge generates and the electric force between it and another charge',
        'Recall the direction in which a negative or positive electrostatic force will move two charges',
        'Relate distance and charge quantities to electrostatic force and electric field magnitudes',
        'Apply direction conventions to draw the electric field generated by a charged object'
      ],
      images: [{ src: fig(1, 3).src, alt: fig(1, 3).alt, caption: 'Figure 5.2 — Field lines around a positive (radiating outward), a negative (pointing inward), and a neutral source charge.' }],
      recap: `
- **Coulomb's law:** $F_e = \\dfrac{kq_1q_2}{r^2}$ — force is **proportional to each charge** and **inversely proportional to $r^2$**. Same form as gravity.
- The electrostatic force **always points along the line connecting the two charge centers**.
- **Electric field:** $E = \\dfrac{F_e}{q} = \\dfrac{kQ}{r^2}$ — set up by a **source charge $Q$**, felt by a **test charge $q$** as $F_e = qE$.
- **Field lines** radiate **outward** from positive charges and point **inward** to negative charges; **denser lines = stronger field**; lines of one charge **never cross**.
`,
      detail: `
#### Coulomb's law
The magnitude of the electrostatic force between two point charges is:

$$F_e = \\dfrac{kq_1q_2}{r^2}$$

- $F_e$ = electrostatic force magnitude; $q_1, q_2$ = charge magnitudes; $r$ = separation.
- $k$ = **Coulomb's constant** ($k = 8.99 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$), where $k = \\dfrac{1}{4\\pi\\varepsilon_0}$ and $\\varepsilon_0$ is the **permittivity of free space**.
- **Direction:** unlike charges attract, like charges repel; the force always lies **along the line connecting the two centers**.

##### Inverse-square behavior

| Change | Effect on $F_e$ |
|---|---|
| Double a charge | Force **doubles** ($\\times 2$) |
| Double the distance ($r \\to 2r$) | Force drops to **one-fourth** ($\\times \\tfrac{1}{4}$) |
| Halve the distance ($r \\to \\tfrac{r}{2}$) | Force **quadruples** ($\\times 4$) |

*Worked example:* if a $+$ and $-$ charge are pulled to **twice** the separation, $r^2$ quadruples, so the attractive force falls to **¼** of its original value.

:::bridge
Coulomb's law looks almost identical to **Newton's law of gravitation** $F = \\dfrac{Gm_1m_2}{r^2}$ — same inverse-square form, with **charge in place of mass** and $k$ in place of $G$. The electrostatic attraction between a proton and electron beats their gravitational attraction by a factor of nearly $10^{40}$. *(MCAT Physics and Math Review, Ch. 1.)*
:::

#### The electric field
Every charge sets up a surrounding **electric field $E$**, just as every mass creates a gravitational field. A field exerts a force on any charge that enters it. Dividing Coulomb's law by the test charge $q$ gives **two ways** to find the field magnitude:

$$E = \\dfrac{F_e}{q} = \\dfrac{kQ}{r^2}$$

| Method | Equation | When to use |
|---|---|---|
| **From a test charge** | $E = \\dfrac{F_e}{q}$ | A test charge $q$ is present; measure the force on it |
| **From the source charge** | $E = \\dfrac{kQ}{r^2}$ | No test charge present; know $Q$ and $r$ |

- **Source charge ($Q$)** creates the field; **test charge ($q$)** feels a force $F_e = qE$.
- Units of $E$: **newtons per coulomb (N/C)**.
- $E$ is a **vector**; for multiple charges the net field is the **vector sum** of individual fields.

:::keyconcept
A **source charge $Q$** produces the field; when a **test charge $q$** is placed in it, $q$ feels $F_e = qE$. By dividing Coulomb's law by $q$ you recover both formulas for $E$ — the second, $E = \\dfrac{kQ}{r^2}$, needs **no** test charge present.
:::

#### Field lines and direction conventions

![Field lines around positive, negative, and neutral source charges](${fig(1, 3).src})

By convention, field direction = the direction a **positive test charge** would move:

- **Positive source charge** → field lines **radiate outward** (a positive test charge is repelled away).
- **Negative source charge** → field lines **point inward** (a positive test charge is attracted toward).
- Lines are **denser where the field is stronger** (close to the charge) and spread out where it weakens — like the spokes of a bicycle wheel.
- Field lines of a single charge **never cross**.

**Force vs. field direction for the test charge:**

| Test charge sign | Force relative to field $E$ |
|---|---|
| **Positive** | Same direction as $E$ |
| **Negative** | Opposite direction to $E$ |

:::mnemonic
**"Positive is a pushy host, negative is a needy guest."** Field lines push **OUT** of a **positive** source and pull **IN** toward a **negative** source. A **positive test charge follows the arrows**; a **negative test charge goes against them**.
:::
`
    },

    /* ─────────────────────── 5.3 Electric Potential Energy ────────────────── */
    {
      id: 's3', num: '5.3', title: 'Electric Potential Energy',
      goals: [
        'Describe how a change in electric potential energy affects the stability of a system',
        'Calculate electric potential energy',
        'Compare and contrast electric potential energy with electrostatic force, conceptually and mathematically',
        'Predict the change in electric potential energy given a change in distance'
      ],
      recap: `
- **Electric PE:** $U = \\dfrac{kQq}{r}$ — the work to bring a charge from infinity to a point near a source charge.
- **Like charges → positive $U$; opposite charges → negative $U$.**
- A **decrease** in $U$ = **increase in stability** (opposite charges getting closer; like charges moving apart).
- $U \\propto \\dfrac{1}{r}$ (not $\\dfrac{1}{r^2}$): $U$ is **Coulomb's law $\\times r$**. Doubling $r$ **halves** $|U|$.
`,
      detail: `
#### Defining electric potential energy
**Electric potential energy** is a form of PE that depends on the **relative position** of one charge with respect to another (like gravitational PE depends on height). It equals the **work** needed to bring a charge **from infinitely far away** to its position near a source charge:

$$U = \\dfrac{kQq}{r}$$

- Note the **single $r$** in the denominator — because work $W = Fd$ multiplies Coulomb's law (which has $r^2$) by a distance $r$, leaving $U \\propto \\dfrac{1}{r}$.
- Sign of $U$ follows the product of the charges:

| Charges | Sign of $U$ | Reason |
|---|---|---|
| **Like** (both + or both −) | **Positive** | Repulsive system |
| **Opposite** (one +, one −) | **Negative** | Attractive system |

#### Potential energy and stability
The key idea: **a system seeks to minimize $U$** (greater stability = lower energy).

| Move | Like charges | Opposite charges |
|---|---|---|
| **Toward each other** | $U$ **increases** (less stable) | $U$ **decreases / more negative** (more stable) |
| **Apart** | $U$ **decreases** (more stable) | $U$ **increases / less negative** (less stable) |

- **Opposite charges** become **more stable closer together** — $U$ grows increasingly **negative** (more negative = lower = more stable).
- **Like charges** become **more stable farther apart** — $U$ shrinks toward zero from the positive side.

:::keyconcept
$U$ **increases** when two **like** charges move *toward* each other or two **opposite** charges move *apart*. $U$ **decreases** when two **like** charges move *apart* or two **opposite** charges move *together*. A **decrease in $U$ means an increase in stability.**
:::

:::expertise
Watch the sign trap: going from $U = -4\\ \\text{J}$ to $U = -7\\ \\text{J}$ is a **decrease** in energy (more negative → lower on the number line) and therefore an **increase in stability**, even though $|{-7}| > |{-4}|$.
:::

#### Worked example
For charges $+2e$ and $-3e$ separated by $r = 3\\ \\text{nm} = 3 \\times 10^{-9}\\ \\text{m}$:

$$U = \\dfrac{kQq}{r} = \\dfrac{(8.99 \\times 10^9)(+2e)(-3e)}{3 \\times 10^{-9}}$$

The opposite charges give a **negative** $U$ — an attractive, comparatively stable arrangement.

:::bridge
Electric PE is to **Coulomb's law** what gravitational PE is to the **law of gravitation** — each PE equals its force law multiplied by distance $r$. The electrostatic force, like gravity, is **conservative**. *(MCAT Physics and Math Review, Ch. 2.)*
:::
`
    },

    /* ───────────────────────────── 5.4 Electric Potential ─────────────────── */
    {
      id: 's4', num: '5.4', title: 'Electric Potential',
      goals: [
        'Calculate electric potential',
        'Distinguish between electric potential and voltage',
        'Predict the movement of a charge relative to a source charge given the electric potential of its location',
        'Relate electric potential to electric potential energy, electric field, and Coulomb\'s law'
      ],
      recap: `
- **Electric potential:** $V = \\dfrac{U}{q} = \\dfrac{kQ}{r}$ — potential **energy per unit charge**, a **scalar** measured in **volts (V)**.
- $V$'s sign follows the **source charge $Q$**; total $V$ from many charges is the **scalar sum**.
- **Voltage** = potential **difference**, $\\Delta V = V_b - V_a$; **path-independent** (force is conservative).
- **Positive charges** fall from **high → low** potential; **negative charges** drift from **low → high** potential — but **both decrease their PE**.
`,
      detail: `
#### Electric potential vs. potential energy
**Electric potential ($V$)** is the electric potential energy **per unit charge**:

$$V = \\dfrac{U}{q} = \\dfrac{kQ}{r}$$

- Dividing $U = \\dfrac{kQq}{r}$ by $q$ removes the test charge — you can find $V$ at a point even with **no test charge present**, knowing only $Q$ and $r$.
- $V$ is a **scalar** measured in **volts (V)**; its sign matches the **source charge $Q$** (positive $Q$ → positive $V$).
- For multiple charges, total $V$ is the **scalar sum** of each contribution (much easier than vector-summing fields).

##### The relationship table
Coulomb's law is the master equation — multiply by $r$ across, divide by $q$ down:

| | Involves force/energy ($\\times q$) | Per unit charge ($\\div q$) |
|---|---|---|
| **$\\times r$ (energy/potential)** | $U = \\dfrac{kQq}{r}$ | $V = \\dfrac{kQ}{r}$ |
| **base ($\\div r$ → force/field)** | $F_e = \\dfrac{kQq}{r^2}$ | $E = \\dfrac{kQ}{r^2}$ |

:::expertise
Memorize **Coulomb's law alone** and regenerate the whole table: **left → right, multiply by $r$** (force→energy, field→potential); **top → bottom, divide by $q$** (energy→potential, force→field).
:::

#### Voltage (potential difference)
A **potential difference** exists between two points at different distances from the source. **Voltage** is:

$$\\Delta V = V_b - V_a = \\dfrac{W_{ab}}{q}$$

- $W_{ab}$ = work to move test charge $q$ from $a$ to $b$.
- **Path-independent** — depends only on the endpoints, because the electrostatic force is **conservative**.
- Units of $V$ **and** voltage: **volts**. (Contrast: $U$ is in **joules**.)

:::keyconcept
**Electric potential** = work per unit charge to bring a test charge from infinity to a point ($V = W/q$). **Voltage** = the *difference* in potential between two points ($\\Delta V$). Same units (volts), different concepts.
:::

#### Spontaneous motion of charges
Charges move spontaneously in whatever direction **decreases their electric potential energy**:

| Test charge | Moves spontaneously from… | Sign of $\\Delta V$ | $\\Delta U$ |
|---|---|---|---|
| **Positive** | **High → low** potential | $\\Delta V$ negative | decreases |
| **Negative** | **Low → high** potential | $\\Delta V$ positive | decreases |

The takeaway: positive charges chase **lower potential**, negative charges chase **higher potential**, **but in both cases the potential *energy* drops.**

:::mnemonic
**Battery ends:** the **"+" terminal is high potential**, the **"−" terminal is low potential**. **Positive charge flows + → −** (the definition of conventional current); **negative charge flows − → +**. "Positives roll downhill, negatives climb uphill — energy still drops for both."
:::

:::bridge
Make the mechanics analogy your anchor: **$E$ field ≈ gravitational field**, a charge in a potential ≈ a mass at a height, and $U$ ≈ gravitational PE. *(MCAT Physics and Math Review, Chs. 1–2.)*
:::
`
    },

    /* ──────────────────── 5.5 Special Cases in Electrostatics ─────────────── */
    {
      id: 's5', num: '5.5', title: 'Special Cases in Electrostatics',
      goals: [
        'Describe equipotential lines and electric dipoles',
        'Recall the electric potential at points along the perpendicular bisector of a dipole',
        'Predict the voltage between two distinct points on an equipotential line',
        'Predict the behavior of a dipole when exposed to an external field'
      ],
      images: [{ src: fig(4, 2).src, alt: fig(4, 2).alt, caption: 'Figure 5.3 — A generic electric dipole: charges $+q$ and $-q$ separated by distance $d$ (visualized as a barbell).' }],
      recap: `
- **Equipotential line:** every point has the **same potential** → **zero potential difference**, **no work** to move along it. Always **perpendicular to field lines**.
- **Electric dipole:** two equal, opposite charges ($+q$, $-q$) separated by distance $d$; **dipole moment** $p = qd$ (units C·m).
- **Perpendicular bisector** of a dipole: $V = 0$ everywhere (since $\\cos 90° = 0$); also $V = 0$ at infinity.
- In an external field, a dipole feels **net torque** $\\tau = pE\\sin\\theta$ → rotates until $p$ **aligns with $E$**; **translational equilibrium**, *not* rotational.
`,
      detail: `
#### Equipotential lines
An **equipotential line** connects points of **equal potential**, so the potential difference between any two points on it is **zero**.

- Around a single source charge they look like **concentric circles** (spheres in 3-D).
- **No work** is done moving a charge along an equipotential line ($\\Delta V = 0$).
- **Work *is* done** moving a charge between *different* equipotential lines — but it's **path-independent** (depends only on the two potentials).
- Equipotential lines are **always perpendicular to electric field lines**.
- Analogy: walking **horizontally** on level ground keeps gravitational PE constant.

:::bridge
Path-independence means we're dealing only with **conservative forces** — the same property that defines gravitational PE. *(MCAT Physics and Math Review, Ch. 2.)*
:::

#### Electric dipoles

![A generic electric dipole with charges +q and -q separated by distance d](${fig(4, 2).src})

An **electric dipole** is two **equal and opposite charges** separated by a small distance $d$. Dipoles can be:

- **Transient** — momentary shifts in electron distribution (London dispersion forces).
- **Permanent** — e.g. the **water molecule** or a **carbonyl** group.

**Potential near a dipole** (point $P$ at distance $r$, angle $\\theta$ from the dipole axis):

$$V = \\dfrac{kp\\cos\\theta}{r^2}$$

where the **dipole moment** is:

$$p = qd \\quad (\\text{units: C}\\cdot\\text{m})$$

- The dipole moment is a **vector**. **Physicists** point it from **− to +**; **chemists** reverse it, pointing **+ to −** (often with a crosshatch on the positive tail).

##### The perpendicular bisector
The plane halfway between $+q$ and $-q$ is the **perpendicular bisector**:

- The angle to the dipole axis is $90°$, and $\\cos 90° = 0$, so **$V = 0$ at every point** on it (an equipotential plane). $V$ is also zero at **infinity**.
- The **field** magnitude on the bisector is approximately $E = \\dfrac{kp}{r^3}$, with vectors pointing **opposite** to $p$ (physicists' convention).

:::keyconcept
On the **perpendicular bisector** of a dipole the potential is **zero everywhere** (because $\\cos 90° = 0$) — and at any point equidistant from both charges, the two scalar potentials cancel ($r_+ = r_-$). Potential is also zero at infinity.
:::

#### A dipole in an external field

![Torque on a dipole from an external electric field](${fig(4, 5).src})

Place a dipole in a **uniform external field $E$**:

- Each charge feels an equal, opposite force → **translational equilibrium** (no net linear motion).
- But the forces produce a **net torque** about the center:

$$\\tau = pE\\sin\\theta$$

- The torque rotates the dipole until its moment $p$ **aligns with $E$** ($\\theta \\to 0$, torque $\\to 0$).

:::expertise
The dipole is a favorite way to slip **kinematics/dynamics** into electrostatics: in a uniform field there is **translational equilibrium but NOT rotational equilibrium** — the two forces point opposite ways, yet their torques both turn the dipole the **same** way. On Test Day the dipole is usually tested **qualitatively** or inside a passage.
:::

:::mnemonic
**"A dipole wants to line up."** Like a compass needle in a magnetic field, a dipole rotates ($\\tau = pE\\sin\\theta$) until its moment **points along the field**. Maximum torque at $\\theta = 90°$; zero torque (and zero potential on the bisector) when $\\cos$ or $\\sin$ hits its dead spot.
:::
`
    },

    /* ───────────────────────────── 5.6 Magnetism ─────────────────────────── */
    {
      id: 's6', num: '5.6', title: 'Magnetism',
      goals: [
        'Recall the requirements for a nonzero electric field, magnetic field, or magnetic force',
        'Predict the impact of a magnetic field on a nearby object',
        'Calculate the magnitudes of a magnetic field and the magnetic force it exerts',
        'Predict the direction of a magnetic force using the right-hand rule'
      ],
      svgs: [{
        title: 'Right-hand rule for the magnetic force on a moving charge',
        caption: 'Thumb = velocity v, fingers = field B, palm = force F on a POSITIVE charge (back of hand for a negative charge).',
        svg: `<svg viewBox="0 0 560 260" width="560" role="img" aria-label="Right-hand rule: thumb is velocity, fingers are field, palm is force" font-family="system-ui, sans-serif">
  <rect x="0" y="0" width="560" height="260" fill="#f8fafc"/>
  <!-- palm -->
  <rect x="210" y="90" width="110" height="120" rx="14" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
  <!-- fingers (field) -->
  ${[0,1,2,3].map(i => `<rect x="${214 + i*26}" y="40" width="18" height="60" rx="8" fill="#fcd34d" stroke="#b45309" stroke-width="1.5"/>`).join('')}
  <!-- thumb (velocity) -->
  <rect x="180" y="120" width="50" height="20" rx="9" fill="#fcd34d" stroke="#b45309" stroke-width="1.5" transform="rotate(-25 200 130)"/>
  <!-- velocity arrow -->
  <line x1="150" y1="150" x2="150" y2="70" stroke="#dc2626" stroke-width="4"/>
  <polygon points="150,58 144,74 156,74" fill="#dc2626"/>
  <text x="120" y="55" font-size="14" fill="#dc2626" font-weight="bold">v (thumb)</text>
  <!-- field arrows (fingers) -->
  <line x1="265" y1="30" x2="265" y2="8" stroke="#2563eb" stroke-width="4"/>
  <polygon points="265,2 259,16 271,16" fill="#2563eb"/>
  <text x="290" y="22" font-size="14" fill="#2563eb" font-weight="bold">B (fingers)</text>
  <!-- force arrow (palm) -->
  <line x1="330" y1="150" x2="430" y2="150" stroke="#16a34a" stroke-width="4"/>
  <polygon points="442,150 426,144 426,156" fill="#16a34a"/>
  <text x="345" y="140" font-size="14" fill="#16a34a" font-weight="bold">F (palm → + charge)</text>
  <text x="40" y="240" font-size="12.5" fill="#475569">Positive charge: F out of the palm. Negative charge: F out of the back of the hand (opposite).</text>
</svg>`
      }],
      recap: `
- **Any *moving* charge creates a magnetic field**; the SI unit is the **tesla (T)**, where $1\\ \\text{T} = 10^4\\ \\text{gauss}$.
- **Materials:** **diamagnetic** (no unpaired e⁻, weakly repelled), **paramagnetic** (some unpaired e⁻, weakly attracted), **ferromagnetic** (Fe, Ni, Co — strongly magnetized).
- **Fields from currents:** straight wire $B = \\dfrac{\\mu_0 I}{2\\pi r}$; center of a loop $B = \\dfrac{\\mu_0 I}{2r}$ (no $\\pi$).
- **Magnetic force:** on a charge $F_B = qvB\\sin\\theta$; on a wire $F_B = ILB\\sin\\theta$ — **zero** when $v\\parallel B$. Direction by the **right-hand rule**.
`,
      detail: `
#### What makes a magnetic field
**Any moving charge** creates a magnetic field — a single electron in flight, a **current** in a wire, or a **permanent magnet**.

- SI unit: the **tesla (T)**, where $1\\ \\text{T} = 1\\ \\dfrac{\\text{N}\\cdot\\text{s}}{\\text{C}\\cdot\\text{m}}$.
- The tesla is large; small fields are given in **gauss**: $1\\ \\text{T} = 10^4\\ \\text{gauss}$.

##### Magnetic materials

| Type | Unpaired electrons? | Behavior in an external field | Examples |
|---|---|---|---|
| **Diamagnetic** | **None** | No net moment; **weakly repelled** ("weakly antimagnetic") | Wood, plastic, water, glass, skin |
| **Paramagnetic** | Some | **Weakly** magnetized, aligns with field; randomizes when removed | Aluminum, copper, gold |
| **Ferromagnetic** | Some | **Strongly** magnetized; can be permanent | **Iron, nickel, cobalt** |

- **Bar magnets** (ferromagnetic) have **north and south poles**; field lines exit **N** and enter **S**.
- Magnetic field lines are **closed loops** → there is **no magnetic monopole**.
- Opposite poles attract, like poles repel.

:::mnemonic
**"Di-, Para-, Ferro- = none, some, strong."** **Di**amagnetic has **no** unpaired electrons (and is the only one *repelled*); **para**magnetic has some (**weakly** attracted); **ferro**magnetic (think **Fe** = iron) has some and is **strongly** attracted.
:::

#### Magnetic fields from currents

| Configuration | Magnetic field magnitude |
|---|---|
| **Long, straight wire** (distance $r$) | $B = \\dfrac{\\mu_0 I}{2\\pi r}$ |
| **Center of a circular loop** (radius $r$) | $B = \\dfrac{\\mu_0 I}{2r}$ |

- $\\mu_0$ = **permeability of free space**.
- Both are **inversely proportional to $r$** and **directly proportional to $I$**. The loop equation **drops the $\\pi$** — so for the same $I$ and $r$, the **loop center has the stronger field**.
- A straight wire's field forms **concentric circles** around it.

:::mnemonic
**Right-hand rule #1 (field around a wire):** point your **thumb along the current $I$**, and your **curled fingers trace the circular field lines** wrapping the wire.
:::

#### Magnetic force on a moving charge
A magnetic field exerts a force **only on moving charges** (charges don't feel their own field):

$$F_B = qvB\\sin\\theta$$

- $\\theta$ = angle between $v$ and $B$.
- The $\\sin\\theta$ means the charge needs a **perpendicular component of velocity** to feel a force.
- $v \\parallel B$ or $v$ antiparallel ($\\theta = 0°$ or $180°$) → $\\sin\\theta = 0$ → **no force**.
- Maximum force when $v \\perp B$ ($\\theta = 90°$).

:::keyconcept
$\\sin 0° = \\sin 180° = 0$: a charge moving **parallel or antiparallel** to $B$ feels **no magnetic force**. The combined electrostatic + magnetic force on a charge is the **Lorentz force**.
:::

##### Right-hand rule #2 (force direction)

| Hand part | Represents |
|---|---|
| **Thumb** | velocity $v$ (hitchhiker's thumb = direction of motion) |
| **Fingers** | magnetic field $B$ (straight, like uniform field lines) |
| **Palm** | force $F_B$ on a **positive** charge ("high-five a positive person") |
| **Back of hand** | force on a **negative** charge ("backhand a negative person") |

:::mnemonic
**Thumb–Fingers–Palm for magnetic force:** **T**humb = veloci**T**y, **F**ingers = **F**ield, **P**alm = force on a **P**ositive charge. Flip to the **back of the hand** for a **negative** charge.
:::

Because $v$ and $F_B$ are always **perpendicular**, a charge in a uniform field undergoes **uniform circular motion** — the magnetic force acts as the **centripetal force**. Setting $qvB = \\dfrac{mv^2}{r}$ solves for the orbital radius.

#### Magnetic force on a current-carrying wire
A current in an external field also feels a force:

$$F_B = ILB\\sin\\theta$$

- $I$ = current, $L$ = wire length in the field, $\\theta$ = angle between $L$ and $B$.
- Use the **same right-hand rule** — treat current as the flow of **positive charge** (thumb along $I$).

:::expertise
Convert units first: $1\\ \\text{gauss} = 10^{-4}\\ \\text{T}$, so $30\\ \\text{gauss} = 3 \\times 10^{-3}\\ \\text{T}$. With current up the page and $B$ into the page ($\\theta = 90°$), the right-hand rule puts the force on the wire **to the left**.
:::

#### Requirements at a glance

| To produce a… | You need… |
|---|---|
| **Electric field** | a charge (moving or not) |
| **Magnetic field** | a **moving** charge |
| **Magnetic force** | an **external** field acting on a charge **moving** (any direction except ∥/antiparallel to $B$) |
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Charges',
        points: [
          'The SI unit of charge is the **coulomb (C)**; the fundamental charge is $e = 1.60 \\times 10^{-19}\\ \\text{C}$.',
          '**Protons** are positive, **electrons** are negative; both carry magnitude $e$ but have **different masses**.',
          '**Opposite charges attract, like charges repel** — the electrostatic force can be either.',
          '**Conductors** let charge move freely and spread it evenly; **insulators** trap charge in localized regions.'
        ]
      },
      {
        section: 'Coulomb\'s Law',
        points: [
          'Coulomb\'s law gives the electrostatic force magnitude: $F_e = \\dfrac{kq_1q_2}{r^2}$, directed along the line joining the charges.',
          'Every charge generates an **electric field** $E = \\dfrac{F_e}{q} = \\dfrac{kQ}{r^2}$ that exerts force on other charges.',
          '**Field lines** radiate outward from positive charges, inward to negative charges; denser lines = stronger field.',
          'A **positive** test charge moves along the field lines; a **negative** test charge moves opposite them.'
        ]
      },
      {
        section: 'Electric Potential Energy',
        points: [
          'Electric PE $U = \\dfrac{kQq}{r}$ = work to bring a charge from infinity to a point near a source charge.',
          '$U$ **increases** when like charges approach or opposite charges separate.',
          '$U$ **decreases** (more stable) when opposite charges approach or like charges separate.'
        ]
      },
      {
        section: 'Electric Potential',
        points: [
          'Electric potential $V = \\dfrac{U}{q} = \\dfrac{kQ}{r}$ is electric PE **per unit charge** (a scalar, in volts).',
          '**Voltage** = potential difference $\\Delta V$; it is **path-independent**, depending only on start and end points.',
          'Units of both potential and voltage are **volts**.',
          'Positive test charges move **high → low** potential; negative test charges move **low → high** — both lowering their PE.'
        ]
      },
      {
        section: 'Special Cases in Electrostatics',
        points: [
          '**Equipotential lines** join points of equal potential and are always **perpendicular to field lines**; no work moves a charge along one.',
          'An **electric dipole** = two opposite charges separated by distance $d$; **dipole moment** $p = qd$.',
          'On a dipole\'s **perpendicular bisector** the potential is **zero** (and at infinity).',
          'In an external field a dipole feels **net torque** $\\tau = pE\\sin\\theta$ until $p$ aligns with $E$ — no net translation.'
        ]
      },
      {
        section: 'Magnetism',
        points: [
          'Magnetic fields are created by **magnets and moving charges**; SI unit **tesla** ($1\\ \\text{T} = 10^4\\ \\text{gauss}$).',
          '**Diamagnetic** (no unpaired e⁻, repelled), **paramagnetic** (weakly magnetized), **ferromagnetic** (strongly magnetized: Fe, Ni, Co).',
          'Current-carrying wires make concentric magnetic-field circles; the field is $B = \\dfrac{\\mu_0 I}{2\\pi r}$ (straight) or $\\dfrac{\\mu_0 I}{2r}$ (loop center).',
          'Magnetic force on a charge $F_B = qvB\\sin\\theta$ (zero if $v\\parallel B$); direction from the **right-hand rule**. The **Lorentz force** sums electric and magnetic forces.'
        ]
      }
    ],
    mnemonics: [
      '**Coulomb ≈ gravity:** $F_e = \\dfrac{kq_1q_2}{r^2}$ mirrors $F_g = \\dfrac{Gm_1m_2}{r^2}$ — swap charge for mass, $k$ for $G$. Both are **inverse-square**.',
      '**Field-line arrows:** OUT of **positive** (pushy host), IN to **negative** (needy guest). Positive test charge follows the arrows; negative goes against.',
      '**$U$ vs. $V$ powers of $r$:** energy/potential carry **one** $r$ ($\\frac{1}{r}$); force/field carry **two** ($\\frac{1}{r^2}$). Multiply by $r$ to go force→energy; divide by $q$ to go energy→potential.',
      '**Battery flow:** "+" = high potential, "−" = low. **Positive charge rolls + → −**; negative climbs − → +. Either way the PE drops.',
      '**Dipole lines up:** like a compass needle, a dipole rotates ($\\tau = pE\\sin\\theta$) until $p$ points along $E$. Bisector potential = 0 ($\\cos 90° = 0$).',
      '**Magnetic materials — none/some/strong:** **Di**a (no unpaired e⁻, repelled), **Para** (some, weakly attracted), **Ferro** (think **Fe**, strongly attracted).',
      '**RHR #1 (field around wire):** thumb = current $I$, curled fingers = circular field $B$.',
      '**RHR #2 (force on charge):** **T**humb = veloci**T**y, **F**ingers = **F**ield, **P**alm = force on **P**ositive (back of hand for negative).'
    ],
    keyConcepts: [
      '**The electrostatic force can attract OR repel** (depending on charge signs) — its one big difference from always-attractive gravity.',
      '**Master one equation, derive four:** from Coulomb\'s law, multiply by $r$ for energy/potential and divide by $q$ for the per-charge quantity — giving $F_e$, $E$, $U$, and $V$.',
      '**A system minimizes potential energy.** A *decrease* in $U$ (opposite charges closing in, like charges spreading out) = *increase* in stability — mind the sign of negative $U$.',
      '**Magnetism needs motion:** a static charge makes only an electric field; it takes a **moving** charge to create a magnetic field, and a **moving** charge in an external field to feel a magnetic force ($F_B = qvB\\sin\\theta$, zero when $v\\parallel B$).'
    ],
    equations: [
      { name: 'Coulomb\'s law', tex: 'F_e = \\dfrac{kq_1q_2}{r^2}', note: 'Electrostatic force magnitude; directed along the line connecting the two charges. Inverse-square.' },
      { name: 'Electric field', tex: 'E = \\dfrac{F_e}{q} = \\dfrac{kQ}{r^2}', note: 'Field from a source charge $Q$; a test charge $q$ feels $F_e = qE$. Units N/C.' },
      { name: 'Electric potential energy', tex: 'U = \\dfrac{kQq}{r}', note: 'Work to bring a charge from infinity. Negative for opposite charges, positive for like. $U \\propto 1/r$.' },
      { name: 'Electric potential (from PE)', tex: 'V = \\dfrac{U}{q}', note: 'Potential energy per unit charge; a scalar in volts.' },
      { name: 'Electric potential (from source charge)', tex: 'V = \\dfrac{kQ}{r}', note: 'Needs no test charge — only $Q$ and $r$.' },
      { name: 'Voltage (potential difference)', tex: '\\Delta V = V_b - V_a = \\dfrac{W_{ab}}{q}', note: 'Path-independent; conservative electrostatic force.' },
      { name: 'Potential near a dipole', tex: 'V = \\dfrac{kp\\cos\\theta}{r^2}', note: 'Zero on the perpendicular bisector ($\\cos 90° = 0$) and at infinity.' },
      { name: 'Dipole moment', tex: 'p = qd', note: 'Vector, units C·m. Physicists point − to +; chemists point + to −.' },
      { name: 'Field on the perpendicular bisector of a dipole', tex: 'E = \\dfrac{kp}{r^3}', note: 'Vectors point opposite to $p$ (physicists\' convention).' },
      { name: 'Torque on a dipole in a field', tex: '\\tau = pE\\sin\\theta', note: 'Rotates the dipole until $p$ aligns with $E$. Translational equilibrium, not rotational.' },
      { name: 'Magnetic field from a straight wire', tex: 'B = \\dfrac{\\mu_0 I}{2\\pi r}', note: 'Field forms concentric circles; inversely proportional to $r$.' },
      { name: 'Magnetic field at the center of a loop', tex: 'B = \\dfrac{\\mu_0 I}{2r}', note: 'No $\\pi$ — stronger than a straight wire at the same $I$ and $r$.' },
      { name: 'Magnetic force on a moving charge', tex: 'F_B = qvB\\sin\\theta', note: 'Zero if $v \\parallel B$; direction by right-hand rule (palm = + charge).' },
      { name: 'Magnetic force on a current-carrying wire', tex: 'F_B = ILB\\sin\\theta', note: 'Treat current as flowing positive charge for the right-hand rule.' }
    ]
  },

  questions: [
    {
      q: 'In the figure, F represents the electrostatic force exerted on charged particle S by charged particle R. The magnitude of the electric force on R due to S is:',
      type: 'mcq',
      choices: ['$\\dfrac{F}{2}$', '$F$', '$2F$', '$4F$'],
      correct: 1,
      explanation: 'By **Newton\'s third law**, if R exerts a force on S, then S exerts a force of **equal magnitude but opposite direction** back on R. So the force on R due to S is $F$.'
    },
    {
      q: 'If the distance between the centers of the spheres R and S is halved, the magnitude of the force on S due to R will be:',
      type: 'mcq',
      choices: ['$\\dfrac{F}{4}$', '$\\dfrac{F}{2}$', '$2F$', '$4F$'],
      correct: 3,
      explanation: 'Coulomb\'s law makes force **inversely proportional to $r^2$**. Halving the distance multiplies the force by $2^2 = 4$, giving $4F$.'
    },
    {
      q: 'Assume the direction of F is the same direction as the electric field between R and S. If an electron were placed midway between R and S, the resultant electric force on the electron would be:',
      type: 'mcq',
      choices: ['toward R.', 'toward S.', 'upward in the plane of the page.', 'downward in the plane of the page.'],
      correct: 1,
      explanation: 'The electric field points in the direction of force on a **positive** test charge. An **electron is negative**, so it feels a force **opposite** to the field. Since the field (= direction of F) points toward R, the electron feels a force in the opposite direction — toward S.'
    },
    {
      q: 'If the electric field at a distance r away from charge Q is some value, what is the ratio of the electric fields at r, 2r, and 3r?',
      type: 'mcq',
      choices: ['9 : 3 : 1', '36 : 9 : 4', '36 : 18 : 9', '36 : 18 : 12'],
      correct: 1,
      explanation: 'The electric field is **inversely proportional to $r^2$**, so $E \\propto \\frac{1}{r^2}$. The values go as $\\frac{1}{1^2} : \\frac{1}{2^2} : \\frac{1}{3^2} = 1 : \\frac{1}{4} : \\frac{1}{9}$. Multiplying through by 36 gives **36 : 9 : 4**.'
    },
    {
      q: 'A positive charge +Q is fixed at point R a distance d from a positive charge +2Q fixed at point S. Point A is midway between the charges; point B is beyond, near +2Q. In which direction will a positive charge move if placed at point A and at point B, respectively?',
      type: 'mcq',
      choices: [
        'Toward the +Q charge for both',
        'Toward the +2Q charge for both',
        'Toward the +Q charge at point A, and toward the right at point B',
        'Toward the +2Q charge at point A, and toward the right at point B'
      ],
      correct: 2,
      explanation: 'At **point A** (equidistant from both), the larger **+2Q** repels more strongly than +Q, so the net force pushes the test charge **toward +Q** (away from +2Q). At **point B**, both charges lie to its left and repel it, so the net force points **to the right**.'
    },
    {
      q: 'Two parallel conducting plates are separated by distance d; one carries +Q, the other −Q, with a voltage of 12 V between them. If a +2 μC charge is released from rest at the positive plate, how much kinetic energy does it have when it reaches the negative plate?',
      type: 'mcq',
      choices: ['$2.4 \\times 10^{-6}\\ \\text{J}$', '$4.8 \\times 10^{-6}\\ \\text{J}$', '$2.4 \\times 10^{-5}\\ \\text{J}$', '$4.8 \\times 10^{-5}\\ \\text{J}$'],
      correct: 2,
      explanation: 'Using $W = \\Delta U = q\\Delta V$: $\\Delta U = (2 \\times 10^{-6}\\ \\text{C})(-12\\ \\text{V}) = -2.4 \\times 10^{-5}\\ \\text{J}$. The positive charge moves + → − plate, **losing** potential energy, and that energy converts to **kinetic energy** — so it gains $2.4 \\times 10^{-5}\\ \\text{J}$.'
    },
    {
      q: 'A negative charge (−1 μC) moves from y = −5 to y = +5, following a curved dashed path symmetric about y = 0. What is the work required to move the charge along this dashed line?',
      type: 'mcq',
      choices: ['$-10\\ \\text{J}$', '$-5\\ \\text{J}$', '$0\\ \\text{J}$', '$10\\ \\text{J}$'],
      correct: 2,
      explanation: 'Work done moving the charge from its start to $y = 0$ is exactly **canceled** by the work from $y = 0$ to the final position, because the **force reverses direction** as the charge crosses $y = 0$ and the endpoints are symmetric. Net work = **0 J**.'
    },
    {
      q: 'The magnetic field a distance r from a current-carrying wire is 10 T. A second wire is placed a distance 2r from the first (with r in the middle), carrying twice the current in the opposite direction. What is the net magnetic field at the midpoint r?',
      type: 'mcq',
      choices: ['0 T', '15 T', '20 T', '30 T'],
      correct: 3,
      explanation: 'At the midpoint, both wires produce fields in the **same direction** (into the page) because their currents are opposite *and* they sit on opposite sides. Using $B \\propto \\frac{I}{r}$: the second wire is at the same distance r with **double the current**, giving 20 T. Net = 10 T + 20 T = **30 T**.'
    },
    {
      q: 'Given an electric dipole, the electric potential is zero:',
      type: 'mcq',
      choices: [
        'only at the midpoint of the dipole axis.',
        'anywhere on the perpendicular bisector of the dipole axis and at infinity.',
        'anywhere on the dipole axis.',
        'only for points at infinity.'
      ],
      correct: 1,
      explanation: 'Potential is a **scalar sum** of the two charges\' potentials, $V \\propto \\frac{1}{r_+} - \\frac{1}{r_-}$. This is zero wherever $r_+ = r_-$, i.e. **anywhere on the perpendicular bisector** of the dipole axis — and also at **infinity**.'
    },
    {
      q: 'An electron is accelerated over a distance d by an electric potential V. The potential is then increased by a factor of 4 and the electron accelerated over the same distance d. The electron\'s final speed in the second trial is larger than in the first by a factor of:',
      type: 'mcq',
      choices: ['16.', '8.', '4.', '2.'],
      correct: 3,
      explanation: 'Energy gained is $W = qV$, so quadrupling V quadruples the kinetic energy. Since $KE = \\frac{1}{2}mv^2$ means $v \\propto \\sqrt{KE}$, the speed increases by $\\sqrt{4} = $ **2**.'
    },
    {
      q: 'Which of the following accurately depicts the field lines created by a proton moving toward the right on the page?',
      type: 'mcq',
      choices: [
        'Field lines bunched ahead of the proton in its direction of motion',
        'Circular field lines looping around the proton',
        'Field lines pointing radially inward toward the proton',
        'Field lines pointing radially outward from the proton in all directions'
      ],
      correct: 3,
      explanation: 'The **electric field lines of a positive charge always point radially outward**, in all directions, **regardless of the particle\'s motion**. Field lines show the direction a positive test charge would be pushed — away from the positive proton.'
    },
    {
      q: 'A 9 V battery is used as a power source to move a 2 C charge. How much work is done by the battery?',
      type: 'mcq',
      choices: ['4.5 J', '9 J', '18 J', '36 J'],
      correct: 2,
      explanation: 'Voltage is work per unit charge, $\\Delta V = \\frac{W}{q}$, so $W = q\\Delta V = (2\\ \\text{C})(9\\ \\text{V}) = $ **18 J**.'
    },
    {
      q: 'To increase a capacitor\'s capacitance, a dielectric (a material that blocks charge flow) is inserted between the plates. Which material would be the best dielectric?',
      type: 'mcq',
      choices: ['Salt water', 'Steel, an alloy primarily composed of iron', 'Glass, an oxide of silica', 'Copper'],
      correct: 2,
      explanation: 'A dielectric must be an **insulator**, whose atoms bind their electrons tightly (typically **nonmetals**). **Glass** (silicon + oxygen, both nonmetals) is the best insulator here. Salt water conducts via its ions; steel and copper are metallic conductors.'
    },
    {
      q: 'A moving negative charge in an external magnetic field circulates counterclockwise in the plane of the paper. In which direction is the magnetic field pointing?',
      type: 'mcq',
      choices: ['Into the page', 'Out of the page', 'Toward the center of the circle', 'Tangent to the circle'],
      correct: 1,
      explanation: 'Apply the right-hand rule with the charge at "12 o\'clock": velocity is tangent (to the left), and the force on a **negative** charge (back of hand) must point radially inward (down). To make the hand fit, the **fingers (B) point out of the page**.'
    },
    {
      q: 'Many kinases use divalent cation cofactors to stabilize their interaction with ATP. If the electric potential energy of the cation and ATP is −3.3 × 10⁻¹⁹ J, how does it change if the distance between the cation and ATP is doubled?',
      type: 'mcq',
      choices: ['Increase by a factor of 2', 'Increase by a factor of 4', 'Decrease by a factor of 2', 'Decrease by a factor of 4'],
      correct: 0,
      explanation: 'The species are **oppositely charged** (cation + ATP), so $U$ is **negative** and $U \\propto \\frac{1}{r}$. Doubling r halves the *magnitude*, but a smaller-magnitude negative number is actually **larger** (less negative). So the potential energy **increases by a factor of 2** — consistent with opposite charges pulled apart gaining energy.'
    }
  ]
};
