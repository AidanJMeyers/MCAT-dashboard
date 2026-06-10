// GChem Chapter 1 — Atomic Structure. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch01.json (already-correct extraction);
// goals, recap/detail markdown, concept summary, mnemonics, and equations are authored here.
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 1,
  title: 'Atomic Structure',
  subtitle: 'Subatomic particles · atomic mass vs. atomic weight · Rutherford, Planck & Bohr · the quantum mechanical model of atoms',

  blocks: [
    /* ───────────────────────── 1.1 Subatomic Particles ───────────────────────── */
    {
      id: 's1', num: '1.1', title: 'Subatomic Particles',
      goals: [
        'Identify the subatomic particles most important for determining various traits of an atom, including charge, atomic number, and isotope.',
        'Determine the number of protons, neutrons, and electrons within an isotope, such as $^{14}\\text{C}$.'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 1.1 — Matter from macroscopic to microscopic: the proton, neutron, and electron are the three subatomic particles the MCAT cares about.' }],
      recap: `
- **Three particles** matter on the MCAT: **protons** ($+1$, ~1 amu, nucleus), **neutrons** ($0$, ~1 amu, nucleus), **electrons** ($-1$, ~$\\frac{1}{2000}$ amu, orbitals).
- **Atomic number $Z$** = number of **protons** → the unique identifier of an element.
- **Mass number $A$** = **protons + neutrons**.
- **Isotopes** share $Z$ but differ in $A$ (different neutron counts).
- A neutral atom has **equal protons and electrons**; lose $e^-$ → **cation** ($+$), gain $e^-$ → **anion** ($-$).
`,
      detail: `
#### The three particles the MCAT tests
Although university chemistry mentions quarks, leptons, and gluons, the MCAT keeps it simple: **protons**, **neutrons**, and **electrons**.

##### Protons
- Found in the **nucleus**.
- Carry charge equal to the **fundamental unit of charge** ($e = 1.6 \\times 10^{-19}\\ \\text{C}$), denoted **"+1"**.
- Mass ≈ **one atomic mass unit (amu)**.
- The **atomic number ($Z$)** = number of protons → a **unique identifier** for each element. All oxygen atoms have 8 protons; all gadolinium atoms have 64.

![Figure 1.2 — Potassium tile from the periodic table](${fig(0, 3).src})

*Potassium: symbol **K** (Latin *kalium*), atomic number 19, atomic weight ≈ 39.1.*

##### Neutrons
- **Neutral** — no charge.
- Mass is **slightly larger** than the proton.
- Together with protons, neutrons make up **almost the entire mass** of the atom.
- **Mass number ($A$)** = protons + neutrons.
- Atoms sharing $Z$ but differing in $A$ are **isotopes**. Carbon ($Z = 6$) has three natural isotopes: $^{12}\\text{C}$ (6 p, 6 n), $^{13}\\text{C}$ (6 p, 7 n), $^{14}\\text{C}$ (6 p, 8 n). Notation: $^{A}_{Z}\\text{X}$.

![Figure 1.3 — Various isotopes of hydrogen](${fig(0, 4).src})

*Isotopes of hydrogen share $Z = 1$ but have $A = 1$, $2$, or $3$.*

:::keyconcept
$$Z = \\text{number of protons}$$
$$A = \\text{number of protons} + \\text{number of neutrons}$$
$$\\text{neutrons} = A - Z$$
:::

##### Electrons
- Move through the space surrounding the nucleus at **varying energy levels**.
- Charge equal in magnitude to the proton but **opposite (negative)** → **"−1"**.
- Mass ≈ $\\frac{1}{2000}$ that of a proton (often taken as ~$\\frac{1}{1837}$).
- Because masses are so small, the **electrostatic force** between proton and electron vastly exceeds their gravitational attraction.
- Electrons closer to the nucleus = **lower energy**; those farther out (higher shells) = **higher energy**.
- The outermost electrons — **valence electrons** — feel the least nuclear pull, interact most with the environment, and **determine reactivity** and bonding.

In a neutral atom, **protons = electrons**. Losing electrons → positive charge (**cation**); gaining electrons → negative charge (**anion**).

:::bridge
**Valence electrons** dominate both general and organic chemistry. How tightly they're held governs an atom's properties and bonding behavior — covered in Chapter 3 of both *MCAT General Chemistry Review* and *MCAT Organic Chemistry Review*.
:::

#### Summary of the subatomic particles

| Particle | Symbol | Relative mass | Charge | Location |
|---|---|---|---|---|
| **Proton** | $\\text{p},\\ \\text{p}^+,\\ ^{1}_{1}\\text{H}$ | $1$ | $+1$ | **Nucleus** |
| **Neutron** | $\\text{n}^0,\\ ^{1}_{0}\\text{n}$ | $1$ | $0$ | **Nucleus** |
| **Electron** | $\\text{e}^-,\\ ^{0}_{-1}\\text{e}$ | $\\approx 0$ | $-1$ | **Orbitals** |

:::expertise
**Worked example.** Nickel-58 vs. nickel-60 $^{2+}$: $^{58}\\text{Ni}$ ($Z = 28$) has **28 p, 28 e⁻, 30 n** ($58 - 28$). $^{60}\\text{Ni}^{2+}$ keeps 28 protons but, having lost 2 electrons, has **26 e⁻**; its higher mass number means **32 neutrons** ($60 - 28$).
:::

:::mnemonic
**"PEN"** keeps the three particles straight: **P**roton (**P**ositive), **E**lectron (**E**vil/negative — it's the angry one), **N**eutron (**N**eutral). And **Z** = "**Z**e protons" (the count that names the element).
:::
`
    },

    /* ─────────────────────── 1.2 Atomic Mass vs. Atomic Weight ────────────────────── */
    {
      id: 's2', num: '1.2', title: 'Atomic Mass vs. Atomic Weight',
      goals: [
        'Describe atomic mass and atomic weight.',
        'Recall the units of molar mass.',
        'Predict the number of protons, neutrons, and electrons in a given isotope.'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 1.4 — Half-lives of the different isotopes of the elements; longer-lived (more stable) isotopes tend to be more abundant.' }],
      recap: `
- **Atomic mass ≈ mass number** ($A$) — varies isotope to isotope; measured in **amu**.
- **1 amu** $= \\frac{1}{12}$ the mass of a $^{12}\\text{C}$ atom $\\approx 1.66 \\times 10^{-24}\\ \\text{g}$.
- **Atomic weight** = **weighted average** of an element's natural isotopes; it's the value on the **periodic table**.
- The atomic weight also equals the mass of **one mole** in grams; **$N_A = 6.02 \\times 10^{23}$**.
- **Isotopes** differ in neutrons but share chemical properties; only **hydrogen's** isotopes have unique names (protium, deuterium, tritium).
`,
      detail: `
#### The terms, carefully distinguished
Chemists use several easily confused words for "heaviness." **Atomic mass** and **mass number** are essentially synonymous and **vary by isotope**; **atomic weight** is a **constant** reported on the periodic table.

##### Atomic mass
- The **amu** is defined as exactly $\\frac{1}{12}$ the mass of a **carbon-12** atom $\\approx 1.66 \\times 10^{-24}\\ \\text{g}$.
- Because $^{12}\\text{C}$ has 6 protons and 6 neutrons, **1 amu ≈ the mass of one proton or one neutron**.
- The atomic mass (in amu) is **nearly equal to the mass number** $A$ (a tiny bit is lost as nuclear **binding energy**).
- **Isotopes** (Greek: "same place") differ in **neutron number** and are named by element + mass number (carbon-12, iodine-131).
- Only **hydrogen's** three isotopes have special names:

| Isotope | Protons | Neutrons | Atomic mass | Name |
|---|---|---|---|---|
| $^{1}\\text{H}$ | 1 | 0 | 1 amu | **Protium** ("first") |
| $^{2}\\text{H}$ | 1 | 1 | 2 amu | **Deuterium** ("second") |
| $^{3}\\text{H}$ | 1 | 2 | 3 amu | **Tritium** ("third") |

Because isotopes share proton and electron counts, they exhibit **similar chemical properties**. Electrons are excluded from mass calculations — they're far too small.

##### Atomic weight
- Almost every element exists as **two or more isotopes** in roughly fixed natural proportions.
- The **weighted average** of those isotope masses is the **atomic weight** — the periodic-table value.
- Example: chlorine is ~3× more abundant as $^{35}\\text{Cl}$ than $^{37}\\text{Cl}$, so its atomic weight (**35.5**) sits closer to 35.
- **Half-life tracks stability**, which helps set isotope abundances (Figure 1.4).

:::keyconcept
When an element has multiple isotopes, **no single atom has a mass equal to the atomic weight**. Bromine is listed as **79.9 amu** — the average of nearly equal amounts of $^{79}\\text{Br}$ and $^{81}\\text{Br}$. *No bromine atom actually weighs 79.9 amu.*
:::

##### The mole connection
The atomic weight is doubly useful: it is both the mass of the **"average" atom** (in amu) **and** the mass of **one mole** of the element (in grams).

- A **mole** = a number of things equal to **Avogadro's number**, $N_A = 6.02 \\times 10^{23}$.
- Carbon's atomic weight is **12.0 amu** → the average carbon atom is 12.0 amu, and $6.02 \\times 10^{23}$ carbon atoms weigh **12.0 g**.
- **Molar mass** is reported in $\\text{g} \\cdot \\text{mol}^{-1}$; the reciprocal ratio $\\text{mol} \\cdot \\text{g}^{-1}$ is conceptually equivalent and acceptable as long as units cancel in dimensional analysis.

:::expertise
**Weighted-average example.** Element Q: isotope A (40 amu, 60%), B (44 amu, 25%), C (41 amu, 15%).
$$0.60(40) + 0.25(44) + 0.15(41) = 24.00 + 11.00 + 6.15 = 41.15\\ \\text{amu}$$
:::

:::mnemonic
**Atomic m**ass ≈ **m**ass number (one specific isotope). Atomic **w**eight = **w**eighted average (what's on the table). *Mass = a Member; Weight = the Whole-class average.*
:::
`
    },

    /* ───────────── 1.3 Rutherford, Planck, and Bohr ───────────── */
    {
      id: 's3', num: '1.3', title: 'Rutherford, Planck, and Bohr',
      goals: [
        'Calculate the energy of transition for a valence electron that jumps energy levels.',
        'Calculate the wavelength of an emitted photon given the energy emitted by an electron.',
        'Calculate the energy of a photon given its wavelength.'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 1.5 — Atomic emission of a photon: an excited electron drops to a lower level and releases a photon of the corresponding energy.' }],
      recap: `
- **Rutherford (1910):** a dense, positively charged **nucleus** holds most of the mass in a tiny fraction of the volume.
- **Planck:** energy comes in discrete **quanta**; $E = h\\nu$ (the **Planck relation**), $h = 6.626 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$.
- **Bohr:** electrons orbit at **quantized** energies; $E = -\\dfrac{R_H}{n^2}$, with $R_H = 2.18 \\times 10^{-18}\\ \\text{J}$.
- Energy **increases** (becomes **less negative**) as $n$ grows; **ground state** = lowest $n$, **excited state** = promoted electron.
- **Emission** (drop) releases a photon; **absorption** (jump) requires exactly the level gap. $c = \\lambda\\nu$ links them.
`,
      detail: `
#### Rutherford and Planck
**Ernest Rutherford (1910)** showed experimentally that the atom has a **dense, positively charged nucleus** occupying only a small part of its volume.

Eleven years earlier, **Max Planck** founded **quantum theory**: energy emitted as electromagnetic radiation comes in discrete bundles called **quanta**. The energy of one quantum is the **Planck relation**:

$$E = h\\nu \\qquad (\\text{Equation 1.1})$$

where $h = 6.626 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$ (**Planck's constant**) and $\\nu$ (Greek *nu*, sometimes written $f$) is the **frequency**.

:::bridge
Any wave obeys $v = f\\lambda$; for light, $c = \\lambda\\nu$ with $c = 3.00 \\times 10^{8}\\ \\text{m/s}$. Substituting into $E = h\\nu$ gives the wavelength form of the Planck relation (Equation 1.4). See *MCAT Physics Review*, Ch. 8.
:::

#### The Bohr model
In **1913**, **Niels Bohr** combined Rutherford's nucleus with Planck's quanta to model the **hydrogen atom**: a single electron in a **circular orbit** around one proton, held by the **electrostatic (centripetal) force**.

Classical physics would allow an electron **any** radius and velocity, so angular momentum ($L = mvr$) and kinetic energy could be **any** value. Bohr instead **quantized** the angular momentum:

$$L = \\frac{nh}{2\\pi} \\qquad (\\text{Equation 1.2})$$

where $n$ is the **principal quantum number** (any positive integer). Because $n$ is the only variable, angular momentum changes only in **discrete amounts**.

:::expertise
On Test Day, focus on **ratios and relationships**, not plug-and-chug. The MCAT usually asks how changing one variable affects another, not for an exact numerical answer.
:::

Bohr then linked the allowed angular momenta to the **electron's energy**:

$$E = -\\frac{R_H}{n^2} \\qquad (\\text{Equation 1.3})$$

where $R_H$ is the **Rydberg unit of energy**, $R_H = 2.18 \\times 10^{-18}\\ \\text{J}$. Zero energy is assigned to a fully separated proton and electron, so every bound state is **negative** (attractive). As $n$ increases, $\\frac{1}{n^2}$ shrinks → $E$ becomes **less negative**, i.e. **higher**.

:::keyconcept
Energy ($E$) is **directly proportional** to $n$ in Equation 1.3 — but only because of the **negative sign**. As $n$ rises, $E$ approaches zero from below (rising in value). **A negative sign matters as much as a variable's place in a fraction** when judging proportionality.
:::

Think of quantized energy like a **staircase**, not a ramp: only certain discrete energy "steps" are allowed.

- **Ground state ($n = 1$):** smallest radius, lowest energy; all electrons in lowest possible orbitals.
- **Excited state:** at least one electron promoted to a higher subshell.
- Bohr likened the atom to **planets orbiting the sun** — a Nobel-winning picture, though we now know electrons aren't restricted to fixed paths but are **localized in regions of space**.

:::expertise
All systems trend toward **minimal energy**. On the MCAT, assume atoms exist in the **ground state** unless extreme heat or irradiation is described.
:::

#### Applications: emission and absorption spectra
The Bohr model works for hydrogen and other **one-electron systems** ($\\text{He}^+$, $\\text{Li}^{2+}$) and explains **atomic spectra**.

:::mnemonic
As electrons go from a **lower** to a **higher** energy level, they get **AHED**: **A**bsorb light · **H**igher potential · **E**xcited · **D**istant (from the nucleus).
:::

##### Atomic emission spectra
Most atoms sit in the ground state. Heat or other energy can **excite** electrons; because excited states are short-lived, electrons drop back, **emitting photons** (Figure 1.5). Photon energy:

$$E = \\frac{hc}{\\lambda} \\qquad (\\text{Equation 1.4})$$

a combination of $E = h\\nu$ and $c = \\lambda\\nu$. Each transition emits a characteristic wavelength → a discrete **line spectrum**, a **fingerprint** unique to each element (used to identify elements in stars).

![Figure 1.6 — Line spectrum with transition wavelengths for various celestial bodies](${fig(2, 1).src})

For **hydrogen**, the emission series are named by their final level:

| Series | Transition | Photon region |
|---|---|---|
| **Lyman** | $n \\geq 2 \\rightarrow n = 1$ | **UV** (largest gaps, shortest $\\lambda$) |
| **Balmer** | $n \\geq 3 \\rightarrow n = 2$ | **Visible** (4 lines) |
| **Paschen** | $n \\geq 4 \\rightarrow n = 3$ | **Infrared** |

![Figure 1.7 — Wavelengths of electron orbital transitions in hydrogen](${fig(2, 2).src})

Energy and wavelength are **inversely** proportional ($E = \\frac{hc}{\\lambda}$). Combining Bohr and Planck gives the energy of a transition:

$$E = -R_H\\left(\\frac{1}{n_i^2} - \\frac{1}{n_f^2}\\right) \\qquad (\\text{Equation 1.5})$$

This is just the energy of the emitted photon = the difference between the higher initial and lower final states.

:::keyconcept
Equation 1.5 is **conservation of energy**: photon energy = electron-transition energy. Note it is **initial minus final**; the sign convention means a **positive $E$ = emission** and a **negative $E$ = absorption**.
:::

##### Atomic absorption spectra
To climb levels, an electron must **absorb exactly** the gap energy → every element also has a unique **absorption spectrum**. Because the level gaps are fixed, **absorption wavelengths match emission wavelengths exactly**.

:::bridge
$\\Delta E$ is identical for absorption and emission between the same two levels (conservation of energy) and equals the photon energy — *MCAT Physics and Math Review*, Ch. 2.
:::

:::realworld
**Emission** from electrons dropping to the ground state produces **fluorescence** — the color we see is the **emitted** light. **Absorption** explains the color of compounds — we see the light **not absorbed**.
:::
`
    },

    /* ─────────────── 1.4 Quantum Mechanical Model of Atoms ─────────────── */
    {
      id: 's4', num: '1.4', title: 'Quantum Mechanical Model of Atoms',
      goals: [
        'Identify the four quantum numbers, the potential range of values for each, and their relationship to the electron they represent.',
        'Compare the orbital diagram for a neutral atom, such as sulfur (S), to an ion such as $\\text{S}^{2-}$.',
        'Differentiate between paramagnetic and diamagnetic compounds.',
        'Determine the number of valence electrons in a given atom.'
      ],
      images: [{ src: fig(3, 4).src, alt: fig(3, 4).alt, caption: 'Figure 1.12 — Electron subshell flow diagram: the diagonal ordering of subshells by increasing energy.' }],
      recap: `
- Electrons are **localized in orbitals** (probability regions), not fixed orbits; **Heisenberg uncertainty** forbids knowing position *and* momentum exactly.
- **Four quantum numbers** describe every electron — $n$, $l$, $m_l$, $m_s$; **Pauli exclusion**: no two electrons share all four.
- **Ranges:** $l = 0 \\to (n-1)$; $m_l = -l \\to +l$; $m_s = \\pm\\frac{1}{2}$. Each shell holds $2n^2$ electrons; each subshell $4l + 2$.
- Fill by **Aufbau** (lowest energy first, **$n + l$ rule**), **Hund's rule** (half-fill with parallel spins), **Pauli** (paired electrons have opposite spin).
- **Half-filled / full** subshells are extra stable (**Cr, Cu** exceptions). **Unpaired** $e^-$ → **paramagnetic**; **all paired** → **diamagnetic**.
`,
      detail: `
#### From orbits to orbitals
Bohr's model fails for **multi-electron atoms** because it ignores **electron–electron repulsion**. Modern **quantum mechanics** replaces fixed orbits with **orbitals** — regions of space where an electron is *probably* found. We can describe only the **probability** of an electron's location.

This is the **Heisenberg uncertainty principle**: it is **impossible to simultaneously know an electron's position and momentum with perfect accuracy**. Measuring position stops the electron (kills momentum info); measuring momentum requires motion (blurs position).

![Figure 1.8 — Heisenberg uncertainty principle: known momentum / uncertain position (left) vs. known position / uncertain momentum (right)](${fig(3, 0).src})

#### The four quantum numbers
Any electron is fully described by **four quantum numbers**: $n$, $l$, $m_l$, $m_s$. By the **Pauli exclusion principle**, **no two electrons in an atom share all four**. Their values nest: $n$ limits $l$, which limits $m_l$.

:::expertise
Think of the quantum numbers as an **address**, getting more specific from $n \\to l \\to m_l \\to m_s$: a **state** ($n$), a **city** ($l$), a **street** ($m_l$), a **house number** ($m_s$).
:::

| # | Quantum number | Symbol | Tells you | Allowed values |
|---|---|---|---|---|
| 1 | **Principal** | $n$ | Energy level / shell, size, radius | any positive integer $1, 2, 3, \\dots$ |
| 2 | **Azimuthal (angular momentum)** | $l$ | Subshell, **shape** | $0$ to $(n-1)$ |
| 3 | **Magnetic** | $m_l$ | Specific **orbital** & orientation | $-l$ to $+l$ (including 0) |
| 4 | **Spin** | $m_s$ | Electron **spin** orientation | $+\\frac{1}{2}$ or $-\\frac{1}{2}$ |

##### 1 · Principal quantum number ($n$)
- Larger $n$ → **higher energy** and **larger** shell radius.
- Maximum electrons in a shell: $$\\text{max electrons per shell} = 2n^2 \\qquad (\\text{Equation 1.6})$$
- Energy **gaps shrink** as $n$ grows (gap is a function of $\\frac{1}{n^2}$): the $n = 3 \\to 4$ gap is smaller than the $n = 1 \\to 2$ gap.

:::bridge
A larger $n$ means a larger radius and higher energy — analogous to **gravitational potential energy**: the higher an object sits above Earth, the greater its PE (*MCAT Physics Review*, Ch. 2).
:::

##### 2 · Azimuthal quantum number ($l$)
- Sets the **shape** and the **number of subshells** in a shell; important for **bonding and bond angles**.
- Range $0$ to $(n - 1)$ → there are exactly **$n$ subshells** in shell $n$.
- **Spectroscopic notation** maps $l$ to a letter:

| $l$ | Subshell letter | # orbitals | Max electrons |
|---|---|---|---|
| 0 | **s** | 1 | 2 |
| 1 | **p** | 3 | 6 |
| 2 | **d** | 5 | 10 |
| 3 | **f** | 7 | 14 |

- Maximum electrons in a subshell: $$\\text{max electrons per subshell} = 4l + 2 \\qquad (\\text{Equation 1.7})$$
- Subshell energy rises with $l$, but levels from **different shells can overlap** — e.g. **4s is lower in energy than 3d**.

![Figure 1.9 — Spectroscopic notation for every subshell on the periodic table](${fig(3, 1).src})

:::keyconcept
For any $n$, there are **$n$ values of $l$** ($0$ to $n-1$). For any $l$, there are **$2l + 1$ values of $m_l$** → **$n^2$ orbitals** per shell → **$2n^2$ electrons** per shell (two per orbital).
:::

##### 3 · Magnetic quantum number ($m_l$)
- Specifies the **particular orbital** within a subshell; each orbital holds **2 electrons** max.
- Integer values from $-l$ to $+l$ (including 0) → **$2l + 1$ orbitals**.
- **s** (1 orbital, spherical); **p** (3 orbitals, dumbbells along $x$, $y$, $z$ → $p_x, p_y, p_z$); **d** (5); **f** (7).
- Shapes follow from **probability density** — the likelihood of finding the electron in a region. (The MCAT won't test d/f shapes.)

![Figure 1.11 — The first five atomic orbitals: 1s, 2s, 2px, 2py, 2pz](${fig(3, 3).src})

This is why the periodic table's **blocks** are sized as they are: **s** block = 2 columns, **p** block = 6, **d** block = 10, **f** block = 14.

##### 4 · Spin quantum number ($m_s$)
- Two orientations: $+\\frac{1}{2}$ and $-\\frac{1}{2}$.
- Two electrons in the **same orbital must have opposite spins** → they are **paired**.
- Electrons in different orbitals with the **same** $m_s$ have **parallel spins**.

Quantum numbers for the **$n = 2$** shell (max electrons in parentheses):

| $n$ | $l$ | $m_l$ | Subshell | Orbitals (electrons) |
|---|---|---|---|---|
| 2 (8) | 0 (2) | 0 | 2s | 1 (2) |
| 2 (8) | 1 (6) | $-1, 0, +1$ | 2p | 3 (6) |

#### Electron configurations
The **electron configuration** records how subshells fill: first number = shell, letter = subshell, superscript = electron count. E.g. **$2p^4$** = four electrons in the 2p subshell (and 1s, 2s already full).

##### The filling rules
- **Aufbau (building-up) principle:** electrons fill from **lowest to highest energy**, completing each subshell before the next.
- **$n + l$ rule:** lower $n + l$ = lower energy, fills first. **Ties** → lower $n$ fills first.

:::expertise
**$n + l$ example.** 5d: $n + l = 5 + 2 = 7$. 6s: $n + l = 6 + 0 = 6$. **6s fills first** (lower sum).
:::

:::expertise
Many courses teach the **flow diagram** (Figure 1.12), but on Test Day it's slow and error-prone. **Reading the periodic table** directly — knowing the lowest s/p/d/f subshells are 1s, 2p, 3d, 4f — is the best method.
:::

- **Noble-gas shorthand:** start from the preceding noble gas in brackets, e.g. period 4 begins **[Ar]**.

:::expertise
**Reading-the-table example.** Osmium ($Z = 76$): start at **[Xe]** ($Z = 54$), cross 6s (Cs, Ba), 4f (lanthanides), into 5d. Os is the 6th 5d element → **[Xe] $6s^2 4f^{14} 5d^6$**.
:::

##### Ions
- **Anions** add electrons by the same rules: $\\text{F} = [\\text{He}]\\,2s^2 2p^5 \\rightarrow \\text{F}^- = [\\text{He}]\\,2s^2 2p^6$.
- **Cations** remove electrons from the **highest $n$ first** (ties → highest $l$ among them).

:::expertise
**Cation example.** Iron = $[\\text{Ar}]\\,4s^2 3d^6$. Remove from **4s before 3d** (higher $n$): $\\text{Fe}^{3+} = [\\text{Ar}]\\,3d^5$, *not* $[\\text{Ar}]\\,4s^2 3d^3$.
:::

#### Hund's rule
Within a multi-orbital subshell, **orbitals fill singly with parallel spins before any pairs up** — like riders taking their own bus seat before doubling up. The reason is **electron repulsion**.

- **Nitrogen** ($1s^2 2s^2 2p^3$): all three 2p orbitals each get one parallel-spin electron.
- **Iron** ($[\\text{Ar}]\\,4s^2 3d^6$): the 3d gets four half-filled orbitals + one paired orbital.

##### Half-filled / full stability — the Cr and Cu exceptions
Half-filled and fully filled subshells have **extra stability**. Two famous exceptions:

| Element | Expected | **Actual** | Why |
|---|---|---|---|
| **Chromium** ($Z = 24$) | $[\\text{Ar}]\\,4s^2 3d^4$ | $[\\text{Ar}]\\,4s^1 3d^5$ | **half-filled** 3d |
| **Copper** ($Z = 29$) | $[\\text{Ar}]\\,4s^2 3d^9$ | $[\\text{Ar}]\\,4s^1 3d^{10}$ | **full** 3d |

Similar shifts occur in the f block, but **never in the p block** — the stability gain there doesn't outweigh the cost.

#### Magnetic properties
- **Paramagnetic:** atoms with **unpaired electrons** align with a magnetic field and are **weakly attracted** to it.

![Figure 1.14 — Attraction of paramagnetic iron spheres to a magnet](${fig(3, 8).src})

:::mnemonic
**Para**magnetic = **par**allel spins in **unpaired** electrons → **attracted** to a magnet. (*Para = alongside = pulled toward.*)
:::

- **Diamagnetic:** atoms with **only paired electrons** are **weakly repelled** by a magnetic field.

![Figure 1.15 — Diamagnetic pyrolytic graphite levitating above magnets](${fig(3, 9).src})

:::realworld
**Maglev** is real: powerful fields + strongly **diamagnetic** materials yield frictionless high-speed rail, like Japan's **SCMaglev**.
:::

#### Valence electrons
Valence electrons are in the **outermost shell**, are **most easily removed**, and **drive bonding/reactivity**.

| Element group | Valence electrons in… |
|---|---|
| **Groups IA–IIA** (1–2) | highest **s** only |
| **Groups IIIA–VIIIA** (13–18) | highest **s** and **p** |
| **Transition metals** | highest **s** and **d** (different $n$) |
| **Lanthanides / actinides** | highest **s** and **f** (different $n$) |

Period 3 and below can accept electrons into the **d subshell**, holding **more than 8** valence electrons — violating the **octet rule** (Ch. 3).

:::expertise
The periodic table is the **only "cheat sheet"** on the MCAT — accessible via the on-screen "Periodic Table" button. Use it to read off valence configurations.
:::

:::keyconcept
**Valence-electron counts.** Vanadium: **5** ($4s^2 3d^3$). Selenium: **6** ($4s^2 4p^4$; its 3d isn't valence). Sulfur in sulfate: **12** (its 6 plus 6 from bonded oxygens, with 4 entering the normally empty 3d).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Subatomic Particles & Atomic Mass vs. Atomic Weight',
        points: [
          'A **proton** has a $+$ charge and ~1 amu; a **neutron** has no charge and ~1 amu; an **electron** has a $-$ charge and negligible mass.',
          'The **nucleus** holds protons and neutrons; electrons move around it.',
          '**Atomic number ($Z$)** = number of protons (the element\'s identity); **mass number ($A$)** = protons + neutrons.',
          '**Atomic mass** ≈ mass number. **Isotopes** share $Z$ but differ in mass number (i.e. neutron count) and have similar chemistry.',
          'Hydrogen\'s isotopes have unique names: **protium, deuterium, tritium**.',
          '**Atomic weight** is the **weighted average** of an element\'s natural isotopes — the value reported on the periodic table (not atomic mass).'
        ]
      },
      {
        section: 'Rutherford, Planck, and Bohr',
        points: [
          '**Rutherford:** a dense, positively charged **nucleus** holds most mass in a tiny volume.',
          '**Bohr model:** electrons revolve around the nucleus in orbits of **distinct, quantized energy levels**.',
          'The energy difference between levels is a **quantum** (Planck); electrons exist **only at certain energies**, and energy **rises** the farther an electron is from the nucleus.',
          '**Absorption:** jumping up requires absorbing energy **exactly** equal to the level gap; every element has a unique absorption spectrum.',
          '**Emission:** dropping down releases that same energy as a **photon**; every element has a characteristic emission spectrum (sometimes in the visible range).'
        ]
      },
      {
        section: 'Quantum Mechanical Model of Atoms',
        points: [
          'Electrons occupy **orbitals** (probability regions), not fixed orbits; the **Heisenberg uncertainty principle** forbids knowing position and momentum exactly at once.',
          'Four quantum numbers describe any electron: **$n$** (shell energy), **$l$** (subshell/shape: s, p, d, f), **$m_l$** (specific orbital), **$m_s$** (spin, $\\pm\\frac{1}{2}$).',
          '**Electron configuration** uses spectroscopic notation (e.g. $1s^2 2s^2 2p^6 3s^2$ = magnesium; its $3s^2$ are valence electrons).',
          'Subshells fill by **increasing energy** via the **$n + l$ rule** (Aufbau).',
          '**Hund\'s rule:** every orbital in a subshell gets one electron (parallel spins) before any orbital is doubled.',
          '**Paramagnetic** = unpaired electrons, attracted to a magnet; **diamagnetic** = all paired, repelled by a magnet.',
          '**Valence electrons** are the outermost, bonding-available electrons: in s/p orbitals for representative elements, and s + d or f for transition/inner-transition elements.'
        ]
      }
    ],
    mnemonics: [
      '**Quantum-number address:** $n \\to l \\to m_l \\to m_s$ = **state → city → street → house number** (more specific each step).',
      '**Subshell letters (s, p, d, f):** "**S**illy **P**rofessors **D**ance **F**unny" → $l = 0, 1, 2, 3$.',
      '**AHED** (climbing energy levels): electrons **A**bsorb light, reach **H**igher potential, become **E**xcited, and go **D**istant from the nucleus.',
      '**Atomic mass vs. weight:** atomic **m**ass = **m**ass number (one isotope); atomic **w**eight = **w**eighted average (the periodic-table number).',
      '**Para**magnetic = **par**allel spins in **unpaired** electrons → pulled toward a magnet; **dia**magnetic = all paired → pushed away.',
      '**Cr & Cu exceptions:** steal one s electron to make a **half-filled** ($\\text{Cr} = 4s^1 3d^5$) or **full** ($\\text{Cu} = 4s^1 3d^{10}$) d subshell — extra stability.',
      '**Cation removal order:** "highest **n** leaves first" — for transition metals that means the **s** electrons go before the **d** electrons (e.g. $\\text{Fe}^{3+} = [\\text{Ar}]\\,3d^5$).'
    ],
    keyConcepts: [
      '**$Z$ names the element, $A$ names the isotope.** Charge depends on electrons; isotope identity depends on neutrons. Neutral atom → protons = electrons.',
      '**Energy is quantized and negative.** $E = -\\dfrac{R_H}{n^2}$: as $n$ rises, energy becomes *less negative* (higher). $\\Delta E$ for a transition is identical for absorption and emission and equals the photon energy ($E = \\frac{hc}{\\lambda}$).',
      '**Three filling rules work together:** Aufbau ($n + l$ order) decides *which* subshell, Hund\'s rule spreads electrons singly with parallel spins, and Pauli forces paired electrons to have opposite spin.',
      '**Half-filled and fully filled subshells are unusually stable** — the basis for the Cr and Cu (and group) exceptions, and a frequent MCAT trap.',
      '**Magnetism is an electron-pairing readout:** any unpaired electron → paramagnetic (attracted); strictly paired → diamagnetic (repelled).'
    ],
    equations: [
      { name: 'Planck relation (frequency)', tex: 'E = h\\nu', note: '$h = 6.626 \\times 10^{-34}\\ \\text{J}\\cdot\\text{s}$; $\\nu$ = frequency. Energy of one quantum of EM radiation. (Eq. 1.1)' },
      { name: 'Angular momentum (Bohr)', tex: 'L = \\dfrac{nh}{2\\pi}', note: 'Quantized angular momentum of an electron; $n$ = principal quantum number. (Eq. 1.2)' },
      { name: 'Energy of an electron (Bohr)', tex: 'E = -\\dfrac{R_H}{n^2}', note: '$R_H = 2.18 \\times 10^{-18}\\ \\text{J}$ (Rydberg energy). Energy is negative and rises (less negative) as $n$ increases. (Eq. 1.3)' },
      { name: 'Planck relation (wavelength)', tex: 'E = \\dfrac{hc}{\\lambda}', note: 'Combines $E = h\\nu$ with $c = \\lambda\\nu$; $c = 3.00 \\times 10^{8}\\ \\text{m/s}$. Energy and wavelength are inversely proportional. (Eq. 1.4)' },
      { name: 'Energy of electron transition (Bohr)', tex: 'E = -R_H\\left(\\dfrac{1}{n_i^2} - \\dfrac{1}{n_f^2}\\right)', note: 'Initial minus final. Positive $E$ = emission, negative $E$ = absorption. (Eq. 1.5)' },
      { name: 'Speed of light relation', tex: 'c = \\lambda\\nu', note: 'Links wavelength and frequency for any EM wave; bridges the two Planck-relation forms.' },
      { name: 'Max electrons per shell', tex: '\\text{max} = 2n^2', note: 'Two electrons per orbital × $n^2$ orbitals. (Eq. 1.6)' },
      { name: 'Max electrons per subshell', tex: '\\text{max} = 4l + 2', note: '$l$ = azimuthal quantum number: s = 2, p = 6, d = 10, f = 14. (Eq. 1.7)' }
    ]
  },

  questions: raw.questions
};
