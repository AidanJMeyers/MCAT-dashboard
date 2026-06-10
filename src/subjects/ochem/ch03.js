// Chapter 3 — Bonding (Organic Chemistry). Re-authored to the rich-formatting quality bar.
// Figures, goals, questions are reused from ch03.json (extraction);
// the recap/detail markdown, tables, callouts, and concept summary are authored here.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }
const goals = (si) => S[si].goals || [];

export default {
  id: 3,
  title: 'Bonding',
  subtitle: 'Atomic orbitals & quantum numbers · molecular orbitals (σ and π bonds) · hybridization, conjugation & resonance',

  blocks: [
    /* ───────────── 3.1 Atomic Orbitals and Quantum Numbers ───────────── */
    {
      id: 's1', num: '3.1', title: 'Atomic Orbitals and Quantum Numbers',
      goals: goals(0),
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 3.1 — The first five atomic orbitals: one spherical s-orbital and three dumbbell-shaped p-orbitals oriented along the x-, y-, and z-axes.' }],
      recap: `
- **Bonding happens in the outermost (valence) shell**, so it rests on how electrons are organized — described by **four quantum numbers**.
- **Principal ($n$)** = energy level / size of the shell ($1 \\to \\infty$; MCAT tests up to **7**). **Azimuthal ($l$)** = subshell/shape ($0 \\to n-1$: $s, p, d, f$). **Magnetic ($m_l$)** = orbital/orientation ($-l \\to +l$). **Spin ($m_s$)** = electron spin ($+\\tfrac{1}{2}$ or $-\\tfrac{1}{2}$).
- **$s$-orbital** = spherical; **$p$-orbital** = two-lobed dumbbell with a **node** at the nucleus, three orientations ($p_x, p_y, p_z$).
- Each orbital holds **2 electrons**; the number of orbitals per subshell = $2l + 1$.
`,
      detail: `
#### Why orbitals matter for organic chemistry
Bonding occurs in the **outermost electron shell** of atoms, so understanding bonding depends on understanding how electrons are organized. Quantum numbers (covered in depth in *MCAT General Chemistry Review*, Ch. 1) are summarized here because **hybridization, σ/π bonds, and resonance all flow from orbital shape and occupancy.**

The first three quantum numbers — $n$, $l$, and $m_l$ — describe the **size, shape, number, and orientation** of the atomic orbitals an element possesses. The fourth, $m_s$, distinguishes the two electrons that share a single orbital.

:::bridge
Each electron in an atom has a **unique combination of the four quantum numbers** — the **Pauli exclusion principle**. No two electrons in the same atom can share all four. See *MCAT General Chemistry Review*, Ch. 1.
:::

#### The four quantum numbers

| Symbol | Name | Describes | Organizational level | Possible values |
|---|---|---|---|---|
| $n$ | **Principal** quantum number | **Size / energy level** | Shell | $1 \\to \\infty$ (MCAT: up to **7**) |
| $l$ | **Azimuthal** quantum number | **Shape** | Subshell | $0 \\to n-1$ |
| $m_l$ | **Magnetic** quantum number | **Orientation** | Orbital | $-l \\to +l$ |
| $m_s$ | **Spin** quantum number | **Spin** | Electron | $+\\tfrac{1}{2}$ or $-\\tfrac{1}{2}$ |

##### Principal quantum number, $n$
Corresponds to the **energy level (shell)** of an electron and is essentially a measure of **size**. The **smaller** the value, the **closer** the shell sits to the nucleus and the **lower** its energy. Values run $1 \\to \\infty$, but the MCAT only tests $n$ up to **7**.

##### Azimuthal quantum number, $l$
Within each shell there are **subshells**, described by $l$, which ranges from $0$ to $n-1$. The values map to letters:

| $l$ | Subshell |
|---|---|
| $0$ | $s$ |
| $1$ | $p$ |
| $2$ | $d$ |
| $3$ | $f$ |

As with $n$, **energy increases as $l$ increases** within a shell ($s < p < d < f$).

##### Magnetic quantum number, $m_l$
Within each subshell there may be several **orbitals**, described by $m_l$, which ranges from $-l$ to $+l$. The number of orbitals in a subshell is therefore $2l + 1$ (e.g., the $p$ subshell has $l = 1$, giving $m_l = -1, 0, +1$ → **three $p$-orbitals**).

##### Spin quantum number, $m_s$
Each orbital holds **two electrons**, distinguished by their spin. The only allowed values are $+\\tfrac{1}{2}$ and $-\\tfrac{1}{2}$.

#### Orbital shapes
Each orbital shape describes the **probability of finding an electron** in a region of space.

- **$s$-orbital** — **spherical** and symmetrical, centered on the nucleus.
- **$p$-orbital** — two lobes positioned symmetrically about the nucleus, with a **node** (probability = 0) at the nucleus. Picture a **dumbbell** in one of three orientations: along the $x$-, $y$-, or $z$-axis. There are three $p$-orbitals because the $p$ subshell ($l = 1$) has three $m_l$ values.
- **$d$-orbital** — four symmetrical lobes with **two nodes**; four are clover-shaped and the fifth is a "donut" wrapped around the center of a $p$-orbital.
- **$f$-orbital** — even more complex; like $d$-orbitals, rarely encountered in organic chemistry.

:::keyconcept
For organic chemistry, the high-yield orbitals are **$s$ and $p$**. Their hybridization (3.3) determines molecular **geometry**, and the leftover unhybridized $p$-orbitals form the **π bonds** of double and triple bonds.
:::

:::mnemonic
**"Numbers in order" → $n, l, m_l, m_s$ from big to small:** **n**ucleus distance (size) → **l**ump shape → **m**ap of orientation → **s**pin. And **"$s$ Pretty Darn Fancy"** for the subshell order $s, p, d, f$ ($l = 0, 1, 2, 3$).
:::
`
    },

    /* ───────────────────── 3.2 Molecular Orbitals ───────────────────── */
    {
      id: 's2', num: '3.2', title: 'Molecular Orbitals',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 3.2 — Molecular orbitals: same-sign overlap yields a low-energy bonding orbital; opposite-sign overlap yields a high-energy antibonding orbital.' }],
      recap: `
- Combining two atomic orbitals gives **molecular orbitals**: **same sign → low-energy bonding orbital** (stable); **opposite sign → high-energy antibonding orbital** (unstable).
- **σ (sigma) bonds** form by **head-to-head / tail-to-tail** overlap — **all single bonds are σ**, and every multiple bond contains exactly **one** σ.
- **π (pi) bonds** form by **side-by-side (parallel) overlap** of unhybridized $p$-orbitals; a π bond **cannot exist without a σ bond**.
- **Double bond** = 1 σ + 1 π; **triple bond** = 1 σ + 2 π. More bonds → **shorter and stronger** overall, but each individual π is **weaker** than a σ.
- π bonds **block rotation**, locking atoms in place (and resonance gives partial double-bond rigidity).
`,
      detail: `
#### Forming molecular orbitals
When two atomic orbitals combine, they form **molecular orbitals**, obtained mathematically by **adding or subtracting the wave functions** of the atomic orbitals. The math is beyond MCAT scope, but you may be asked to **visualize** the result.

- **Same-sign** wave functions → a **lower-energy, more stable bonding orbital**.
- **Opposite-sign** wave functions → a **higher-energy, less stable antibonding orbital**.

:::keyconcept
A **bonding orbital is more stable (lower energy)** than the original atomic orbitals; an **antibonding orbital is less stable (higher energy)**. Electrons fill the bonding orbital first — that net stabilization is *why a bond forms at all*.
:::

#### σ and π bonds
| Property | **σ (sigma) bond** | **π (pi) bond** |
|---|---|---|
| Overlap geometry | **Head-to-head / tail-to-tail** | **Side-by-side (parallel)** |
| Built from | $s$, hybridized, or aligned $p$-orbitals | **Unhybridized $p$-orbitals** |
| Electron density | Concentrated **between the two nuclei** (on the bond axis) | **Above and below** the bond axis |
| Found in | **Every** single bond (and one per multiple bond) | Only in double/triple bonds |
| Rotation | **Free rotation** about the bond axis | **Restricts rotation** — locks geometry |
| Relative strength | **Stronger** (more overlap) | **Weaker** (less overlap) |

##### Sigma bonds
A molecular orbital formed by **head-to-head or tail-to-tail overlap** is a **sigma (σ) bond**. **All single bonds are σ bonds**, each holding two electrons. They are by far the most common bonds in organic compounds.

:::keyconcept
**Sigma (σ) bonds** form by head-to-head or tail-to-tail overlap of atomic orbitals. They are the most common bonds in organic chemistry and on the MCAT.
:::

##### Pi bonds

![Figure 3.3 — A π bond sits above and below the σ-bond axis.](${fig(1, 1).src})

When two $p$-orbitals line up **parallel (side-by-side)**, their electron clouds overlap to form a **pi (π) bond**:

- **One π bond on top of a σ bond = a double bond.**
- **One σ bond + two π bonds = a triple bond.**
- A **π bond cannot exist independently of a σ bond** — only after a σ bond forms are the adjacent $p$-orbitals positioned to overlap.

Electron density above and below the molecular plane is what **restricts rotation** about a double bond.

:::keyconcept
A **double bond** = one σ + one π; a **triple bond** = one σ + two π. Individual **π bonds are weaker** than σ bonds, but bond strength is **additive**, so double and triple bonds are **stronger overall** than single bonds.
:::

#### Bond length, strength, and rigidity
The **more bonds** between two atoms, the **shorter** and **stronger** the overall bond:

| Bond | Composition | Relative length | Relative strength | Rotation |
|---|---|---|---|---|
| **Single** | 1 σ | **Longest** | Weakest | **Free** |
| **Double** | 1 σ + 1 π | Intermediate | Intermediate | **Restricted** |
| **Triple** | 1 σ + 2 π | **Shortest** | **Strongest** | **Restricted** |

- Shorter bonds hold atoms closer and require **more energy to break**.
- Although a double bond is **stronger overall**, you can break **just the π bond** (leaving the σ intact) — exactly what happens during **cis–trans isomer interconversion**. Breaking the σ bond takes far more energy.
- π bonds make molecules **stiffer**. Even **partial double-bond character from resonance** restricts rotation: the **amide (peptide) bonds** between amino acids are rigid for this reason.

:::bridge
The rigidity of the resonance-stabilized **amide linkage** is why protein backbones have restricted φ/ψ rotation and adopt defined secondary structures — *MCAT Biochemistry Review*, Ch. 1.
:::

:::mnemonic
**"σ is Solo, π is a Partner."** A σ bond can stand alone (every single bond); a **π bond always needs a σ partner first**. And **bond-strength ranking: triple > double > σ > π** — the individual π is the *weakest* even though triple bonds are the *strongest*.
:::
`
    },

    /* ─────────────────────── 3.3 Hybridization ─────────────────────── */
    {
      id: 's3', num: '3.3', title: 'Hybridization',
      goals: goals(2),
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 3.6 — sp²-hybridized orbitals: three orbitals at 120° in a trigonal-planar arrangement, with one unhybridized p-orbital left to form a π bond.' }],
      recap: `
- **Hybridization** mixes $s$ and $p$ orbitals into equivalent **hybrid orbitals**, explaining why all bonds to carbon can be identical (e.g., the four equivalent C–H bonds of $\\text{CH}_4$).
- **% $s$-character = (1) ÷ (total orbitals mixed):** $sp^3$ = **25%**, $sp^2$ = **33%**, $sp$ = **50%**.
- **Geometry follows hybridization:** $sp^3$ → **tetrahedral, 109.5°**; $sp^2$ → **trigonal planar, 120°**; $sp$ → **linear, 180°**.
- **Unhybridized $p$-orbitals form π bonds:** $sp^2$ has 1 (one double bond); $sp$ has 2 (a triple bond or two cumulated double bonds).
- **Resonance** = delocalization of **π electrons** through a **conjugated** (alternating single/multiple bond) system; the true structure is a **hybrid** weighted toward the **most stable** resonance forms.
`,
      detail: `
#### Why hybridization exists
Carbon is $1s^2\\,2s^2\\,2p^2$ and needs four electrons to complete its octet. In **methane ($\\text{CH}_4$)** all **four σ bonds are experimentally equivalent** — yet carbon's valence electrons are unevenly distributed (two in $2s$, one each in $2p_x$ and $2p_y$, none in $2p_z$). **Orbital hybridization** resolves the discrepancy: one $2s$ electron is promoted to $2p_z$, giving four singly-occupied valence orbitals that mathematically mix into equivalent **hybrid orbitals**.

:::keyconcept
**Hybridization makes all bonds to a central atom equivalent.** The four $sp^3$ orbitals are the reason for the **tetrahedral** shape that is a hallmark of carbon compounds.
:::

#### The master table — sp³, sp², sp

| Hybridization | Orbitals mixed | **% $s$-character** | % $p$-character | Geometry | Bond angle | Unhybridized $p$ left | Bonding role |
|---|---|---|---|---|---|---|---|
| **$sp^3$** | 1 $s$ + 3 $p$ | **25%** | 75% | **Tetrahedral** | **109.5°** | 0 | All single bonds |
| **$sp^2$** | 1 $s$ + 2 $p$ | **33%** | 67% | **Trigonal planar** | **120°** | 1 | One **double** bond (1 π) |
| **$sp$** | 1 $s$ + 1 $p$ | **50%** | 50% | **Linear** | **180°** | 2 | One **triple** bond *or* two double bonds (2 π) |

##### sp³ hybridization

![Figure 3.4 — Four equivalent sp³ orbitals point to the vertices of a tetrahedron.](${fig(2, 1).src})

Mixing **one $s$ + three $p$** orbitals gives **four identical $sp^3$ orbitals** pointing toward the vertices of a **tetrahedron** to minimize repulsion. There are **no unhybridized $p$-orbitals**, so an $sp^3$ atom forms **no π bonds**.

![Figure 3.5 — Promoting a 2s electron to 2p produces four singly-occupied orbitals ready to hybridize.](${fig(2, 2).src})

**% $s$-character:** one $s$ orbital out of four total → **25% $s$, 75% $p$**.

##### sp² hybridization
Mixing **one $s$ + two $p$** orbitals gives **three $sp^2$ orbitals** with **33% $s$-character**, oriented **120° apart (trigonal planar)** for maximum separation. The **third $p$-orbital is left unhybridized** to form the **π bond**.

This is the hybridization of **alkenes**. In **ethene**, two $sp^2$ orbitals make C–H bonds, one $sp^2$ orbital forms the **σ component** of the C=C bond, and the leftover unhybridized $p$-orbital forms the **π component**.

##### sp hybridization

![Figure 3.7 — Two sp orbitals at 180° (linear); two unhybridized p-orbitals remain for two π bonds.](${fig(2, 4).src})

To form a **triple bond**, two $p$-orbitals stay unhybridized (for two π bonds) and the **third $p$ mixes with the $s$** to give **two $sp$ orbitals** with **50% $s$-character**, oriented **180° apart (linear)**. The two π bonds can be:

- between **one carbon and one other atom** → a **triple bond** (e.g., **ethyne**, $\\text{C}_2\\text{H}_2$), or
- between **a carbon and two different atoms** → **two cumulated double bonds** (e.g., **carbon dioxide**, $\\text{CO}_2$).

Either way, the molecule is **linear** about the $sp$ carbon.

:::mnemonic
**Hybridization → geometry:** **"three, two, one → tetra, tri, di."** $sp^3$ (3 superscript) = **tetra**hedral 109.5°; $sp^2$ = **tri**gonal planar 120°; $sp$ (no superscript) = linear 180°. **% $s$-character is just $\\tfrac{1}{\\text{orbitals mixed}}$:** $\\tfrac14$, $\\tfrac13$, $\\tfrac12$ → 25/33/50%.
:::

:::expertise
**Shortcut for identifying hybridization on Test Day:** count **regions of electron density** (σ bonds + lone pairs) on the atom. **4 → $sp^3$, 3 → $sp^2$, 2 → $sp$.** Equivalently, a carbon with **all single bonds is $sp^3$**, **one double bond → $sp^2$**, and a **triple bond or two double bonds → $sp$**. Caution: the "all-single-bonds → $sp^3$" rule is a *carbon* assumption — atoms with fewer valence electrons (e.g., **Be in $\\text{BeH}_2$, which is $sp$**) break it.
:::

#### Resonance and conjugation

![Figure 3.8 — Resonance forms of the carbonate ion; the three forms contribute equally.](${fig(2, 5).src})

**Resonance** is the **delocalization of π electrons** across molecules that contain **conjugated bonds**. **Conjugation** requires **alternating single and multiple bonds**, which aligns a chain of **unhybridized $p$-orbitals** down the molecular backbone; π electrons delocalize through this $p$-orbital system, **adding stability**.

- **Resonance structures** are the transient forms a molecule takes; they are **not in equilibrium**. The true structure is a single **resonance hybrid** with electron density spread throughout.
- When forms are **equally stable** (e.g., **carbonate, $\\text{CO}_3^{2-}$**), they contribute **equally**.

![Figure 3.9 — Ozone's true structure lies between its two resonance forms: 1.5 bonds and a partial charge on each terminal oxygen.](${fig(2, 6).src})

For **ozone ($\\text{O}_3$)**, the true electron density lies *between* the two resonance forms — **1.5 bonds** between each pair of oxygens and a **partial ($-\\tfrac12$) charge** on each terminal oxygen.

##### Which resonance form contributes most?
If the forms differ in stability, the true density **favors the most stable form**. A resonance structure is favored when it:

- **Lacks formal charges**, or carries fewer of them;
- Places **full octets / negative charge on highly electronegative atoms** (O, N);
- Stabilizes charge through **induction** and **aromaticity**.

:::keyconcept
**Resonance increases stability.** A molecule with several resonance forms is **lower in energy** than any single drawn structure would predict — the delocalized π system spreads charge out. The more stable a contributing form, the more it weights the true hybrid.
:::

:::bridge
**Aromaticity** (fully conjugated, planar, cyclic, $4n+2$ π electrons — **Hückel's rule**) is the ultimate resonance stabilization and a recurring MCAT theme — *MCAT Organic Chemistry Review*, Ch. 5.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Atomic Orbitals and Quantum Numbers',
        points: [
          'Quantum numbers describe the **size, shape, orientation, and number** of atomic orbitals an element possesses.',
          'Principal ($n$) = energy level / shell, indicating distance from the nucleus; values $1 \\to \\infty$.',
          'Azimuthal ($l$) = subshell; values $0 \\to n-1$, lettered $s$ ($0$), $p$ ($1$), $d$ ($2$), $f$ ($3$).',
          'Magnetic ($m_l$) = orbital; values $-l \\to +l$. $s$-orbitals are spherical; $p$-orbitals are dumbbells on the $x$-, $y$-, or $z$-axis.',
          'Spin ($m_s$) = electron spin; only $+\\tfrac12$ or $-\\tfrac12$. Each orbital holds two electrons.'
        ]
      },
      {
        section: 'Molecular Orbitals',
        points: [
          '**Bonding orbitals** form from same-sign (head-to-head/tail-to-tail) overlap and are energetically favorable; **antibonding orbitals** form from opposite-sign overlap and are unfavorable.',
          'Single bonds are **σ bonds** (two electrons). A **double bond** = 1 σ + 1 π; a **triple bond** = 1 σ + 2 π.',
          '**π bonds** form by side-by-side overlap of two unhybridized $p$-orbitals and cannot exist without a σ bond.',
          'Multiple bonds are **shorter, stronger, and less flexible** (no rotation) than single bonds — though an individual π bond is **weaker** than a σ bond.'
        ]
      },
      {
        section: 'Hybridization',
        points: [
          '$sp^3$: **25% $s$**, tetrahedral, **109.5°** — carbons with all single bonds.',
          '$sp^2$: **33% $s$**, trigonal planar, **120°** — carbons with one double bond (one unhybridized $p$ for the π).',
          '$sp$: **50% $s$**, linear, **180°** — carbons with a triple bond or two double bonds (two unhybridized $p$ for two π).',
          '**Resonance** delocalizes π electrons in **conjugated** (alternating single/multiple bond) systems, increasing stability.',
          'The true electron density is a **weighted average** of the resonance forms, favoring those that lack formal charge, give octets to electronegative atoms, or are stabilized by induction/aromaticity.'
        ]
      }
    ],
    mnemonics: [
      '**Quantum numbers, big → small:** $n$ucleus distance (size) → $l$ump shape → $m_l$ap of orientation → $m_s$pin. Subshell order $s, p, d, f$ = **"$s$ Pretty Darn Fancy."**',
      '**σ is Solo, π is a Partner:** every single bond is a lone σ; a π bond always needs a σ first. A π can never stand alone.',
      '**Bond strength ranking:** triple > double > σ > π. The lone π is the *weakest*, yet triple bonds are the *strongest* (strength is additive).',
      '**Hybridization → geometry, "three-two-one → tetra-tri-di":** $sp^3$ = tetrahedral 109.5°, $sp^2$ = trigonal planar 120°, $sp$ = linear 180°.',
      '**% $s$-character = $\\tfrac{1}{\\text{orbitals mixed}}$:** $sp^3 = \\tfrac14$ (25%), $sp^2 = \\tfrac13$ (33%), $sp = \\tfrac12$ (50%). More $s$-character → shorter, stronger, more electronegative bond.',
      '**Counting hybridization:** regions of electron density (σ + lone pairs) → **4 = $sp^3$, 3 = $sp^2$, 2 = $sp$.**',
      '**Conjugation = "Couples alternate":** alternating single/multiple bonds line up unhybridized $p$-orbitals so π electrons can delocalize → resonance → stability.'
    ],
    keyConcepts: [
      '**Everything cascades from orbitals:** quantum numbers set orbital shape → hybridization sets geometry and bond angle → leftover unhybridized $p$-orbitals build the π bonds of double/triple bonds and resonance systems.',
      '**Bond order controls length and strength:** more bonds = shorter and stronger overall, but you can snap a single π (e.g., cis–trans isomerization) far more easily than a σ.',
      '**% $s$-character is the unifying number:** $sp > sp^2 > sp^3$ in $s$-character means $sp$ bonds are the shortest, strongest, and most electronegative; this is a fast way to answer geometry, acidity, and bond-length questions.',
      '**Resonance is real stabilization, not flipping structures:** the molecule exists as one delocalized hybrid weighted toward the most stable contributing forms (no formal charge, octets on electronegative atoms, aromaticity).'
    ],
    equations: [
      { name: 'Azimuthal range', tex: 'l = 0,\\,1,\\,\\dots,\\,n-1', note: 'Allowed subshells within shell $n$ ($s, p, d, f$).' },
      { name: 'Magnetic range', tex: 'm_l = -l,\\,\\dots,\\,0,\\,\\dots,\\,+l', note: 'Number of orbitals in a subshell = $2l+1$.' },
      { name: 's-character', tex: '\\%\\,s = \\dfrac{1}{\\text{orbitals mixed}}\\times 100\\%', note: '$sp^3$ = 25%, $sp^2$ = 33%, $sp$ = 50%.' }
    ]
  },

  questions: raw.questions
};
