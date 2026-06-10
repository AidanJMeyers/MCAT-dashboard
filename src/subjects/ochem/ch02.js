// Organic Chemistry Chapter 2 — Isomers. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch02.json; goals, recap/detail markdown,
// conceptSummary, mnemonics, keyConcepts, and equations are authored here.
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 2,
  title: 'Isomers',
  subtitle: 'Structural isomers · stereoisomers (conformational & configurational) · relative and absolute configurations',

  blocks: [
    /* ───────────────────────── 2.1 Structural Isomers ───────────────────────── */
    {
      id: 's1', num: '2.1', title: 'Structural Isomers',
      goals: [
        'Describe the shared and unique properties of structural isomers',
        'Explain what physical and chemical properties are',
        'Identify structural isomers'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 2.2 — Flowchart of isomer relationships: structural isomers vs. stereoisomers, which branch into conformational and configurational (enantiomers vs. diastereomers).' }],
      recap: `
- **Isomers** share a **molecular formula** but differ in arrangement; the top split is **structural (constitutional)** vs. **stereoisomers**.
- **Structural isomers** are the *least* alike — they share **only the molecular formula** (and thus molecular weight); everything else can differ.
- They have **different physical and chemical properties**; in organic chemistry, chemical behavior is dictated by the molecule's **functional groups**.
- **Physical properties** = no change in composition (mp, bp, solubility, odor, color, density); **chemical properties** = reactivity that *changes* composition.
`,
      detail: `
#### The isomer hierarchy
Every isomer relationship begins with the same **molecular formula**. How the atoms are connected and arranged then sorts them into a hierarchy you should memorize cold:

| Level | Class | What they share | What differs |
|---|---|---|---|
| Top split | **Structural (constitutional) isomers** | **Molecular formula only** | Atomic **connectivity** (the bonds themselves) |
| | **Stereoisomers** | Formula **and** connectivity | Spatial arrangement of atoms |
| Stereo sub-split | → **Conformational** | Same molecule | Rotation about **single (σ) bonds** |
| | → **Configurational** | Same connectivity | Arrangement that requires **breaking bonds** to change |
| Configurational | → **Enantiomers** | Nonsuperimposable **mirror images** | Configuration at **every** chiral center |
| | → **Diastereomers** | Non-mirror-image stereoisomers | Configuration at **some, not all** chiral centers |

#### Structural (constitutional) isomers
- **Structural isomers** — also called **constitutional isomers** — are the **least similar** of all isomers.
- The **only** thing they share is their **molecular formula**, which means their **molecular weights must be identical**.
- Beyond that they are widely varied, with **different chemical and physical properties**.
- Example: **C₆H₁₄ has five structural isomers** (hexane and its branched relatives) — each looks completely different yet has the same number of C and H atoms.

![Figure 2.1 — Five structural isomers of C₆H₁₄: identical formula, different connectivity.](${fig(0, 0).src})

#### Physical vs. chemical properties
Properties are prime MCAT material and are often tested through isomerism.

| | **Physical properties** | **Chemical properties** |
|---|---|---|
| Definition | Characteristics of processes that **do not change** the composition of matter | Reactivity with other molecules that **results in a change** of chemical composition |
| Examples | **Melting point, boiling point, solubility, odor, color, density** | Reactions, combustion, oxidation — anything altering the molecule |
| In organic chemistry | — | Generally dictated by the molecule's **functional groups** |

:::keyconcept
**Physical properties:** no change in composition of matter — melting point, boiling point, solubility, odor, color, density.
**Chemical properties:** reactivity of the molecule resulting in a change in composition; generally attributable to the **functional groups** in the molecule.
:::

:::mnemonic
**"Same skeleton, different blueprint."** Structural isomers share only the *parts list* (molecular formula) — the building (connectivity) is rearranged. C₆H₁₄ → straight-chain hexane *or* a branched isomer; same atoms, different structure, different boiling points.
:::
`
    },

    /* ─────────────────────── 2.2 Stereoisomers ────────────────────── */
    {
      id: 's2', num: '2.2', title: 'Stereoisomers',
      goals: [
        'Differentiate between conformational and configurational isomers',
        'Distinguish enantiomers from diastereomers',
        'Identify enantiomers, diastereomers, and meso compounds',
        'Convert between Newman and 3D molecular projections'
      ],
      images: [{ src: fig(1, 6).src, alt: fig(1, 6).alt, caption: 'Figure 2.9 — Hands as chiral structures: each has a nonsuperimposable mirror image (your left hand will not fit a right-handed glove).' }],
      recap: `
- **Stereoisomers** share the **same formula AND the same connectivity** (backbone) but differ in **spatial arrangement** (wedge-and-dash).
- The big split is **conformational** (interconvert by **rotation about σ bonds** — same molecule) vs. **configurational** (interconvert **only by breaking bonds**).
- **Configurational isomers** = **enantiomers** (nonsuperimposable mirror images; opposite at *every* chiral center) and **diastereomers** (non-mirror-image; differ at *some, not all* centers).
- A **chiral center** = a carbon with **four different substituents**; chirality = **handedness** (no internal plane of symmetry).
- **Enantiomers** have identical properties *except* **optical activity** and behavior in **chiral environments**; a 50:50 mix = **racemic mixture** (no net rotation). A **meso compound** has chiral centers but an **internal plane of symmetry** → optically inactive.
`,
      detail: `
#### What makes a stereoisomer
Like all isomers, stereoisomers share the **same chemical formula**. Unlike structural isomers, they *also* share the **same atomic connectivity** — the same structural backbone. They differ only in **how the atoms are arranged in space** (the wedge-and-dash pattern). Any isomer that is **not** a structural isomer falls here.

The largest distinction within the class:

- **Conformational isomers (conformers)** — differ by **rotation around single (σ) bonds**.
- **Configurational isomers** — can be interconverted **only by breaking bonds**.

#### Conformational isomers
Of all isomers, **conformational isomers** are the **most similar** — they are, in fact, the **same molecule** at different points in its natural rotation about single bonds. Double bonds lock a molecule in place, but **single bonds rotate freely**; different rotations create different levels of **strain**. These are easiest to see in a **Newman projection** (viewing down a C–C bond axis). The classic example is **butane**, viewed along the C-2 to C-3 bond.

![Figure 2.3 — Newman projection of butane, viewed down the C-2 to C-3 bond axis.](${fig(1, 0).src})

##### Straight-chain conformations
For butane, conformations are named by the angle between the **two largest groups** (the methyls on C-1 and C-4):

| Conformation | Angle between large groups | Description | Energy |
|---|---|---|---|
| **Anti** (staggered) | **180°** | Largest groups **antiperiplanar** (opposite sides); minimal steric repulsion | **Lowest** (most stable) |
| **Gauche** (staggered) | **60°** | Largest groups 60° apart; some strain | Low |
| **Eclipsed** | **120°** | Methyls overlap H atoms on adjacent carbon | High |
| **Totally eclipsed** | **0°** | Largest groups **synperiplanar** (same side), directly overlapping | **Highest** (least stable) |

- **Staggered** conformations have no atom overlap along the line of sight (besides C-2/C-3); **anti** is the most favorable staggered form.
- **Eclipsed** conformations have groups directly in line; **totally eclipsed** is the highest-energy state.

![Figure 2.4 — Stability of straight-chain conformational isomers; degree labels are the angle between the two largest substituents.](${fig(1, 1).src})

:::mnemonic
It's **gauche** (unsophisticated, awkward) for one methyl group to stand too close to another. Groups are **eclipsed** when completely in line — just like a solar or lunar eclipse.
:::

A plot of **potential energy vs. degree of rotation** about the C-2/C-3 bond shows the minima (anti, gauche) and maxima (eclipsed, totally eclipsed). Every molecule wants the **lowest-energy state**, so it spends *less* time in unfavorable high-energy conformations.

![Figure 2.5 — Potential energy vs. degree of rotation about the C-2 to C-3 bond in butane.](${fig(1, 2).src})

:::keyconcept
The **anti staggered** conformer has the **lowest** energy; the **totally eclipsed** conformer has the **highest**. The interconversion barriers are **small** and easily crossed at room temperature — but at very low temperatures (toward absolute zero) rotation slows dramatically and may stop entirely.
:::

##### Cyclic conformations
**Cycloalkanes** range from stable to strained depending on **ring strain**, which arises from three sources:

| Strain type | Cause |
|---|---|
| **Angle strain** | Bond angles **stretched or compressed** from their ideal values |
| **Torsional strain** | Forced **eclipsed or gauche** interactions |
| **Nonbonded (steric) strain** | Van der Waals repulsion — **nonadjacent** atoms/groups compete for the same space (dominant in cyclohexane **boat flagpole** interactions) |

To relieve strain, rings adopt **nonplanar** shapes: cyclobutane **puckers** into a "V," cyclopentane takes an **envelope**, and **cyclohexane** (the MCAT favorite) exists as **chair**, **boat**, and **twist-/skew-boat** forms.

![Figure 2.6 — Conformations of cycloalkanes (puckered, envelope, chair, boat, twist-boat).](${fig(1, 3).src})

- The **chair** is the **most stable** cyclohexane conformation — it minimizes all three strains.
- Hydrogens **perpendicular** to the ring plane (up/down) are **axial**; those **parallel** (sticking out) are **equatorial**. The axial/equatorial assignment **alternates** around the ring.
- A **chair flip** converts one chair to the other, passing briefly through the **half-chair**. Afterward, **all axial become equatorial and vice versa**, but **wedges stay up and dashes stay down**.
- A **bulky group** (classic MCAT example: **tert-butyl**) slows the flip and prefers the **equatorial** position to avoid **nonbonded (flagpole) strain**.

![Figure 2.7 — Axial vs. equatorial positions in cyclohexane; during a chair flip axial ↔ equatorial, but up stays up and down stays down.](${fig(1, 4).src})

For rings with **multiple substituents**, the **larger group** takes the **equatorial** position. Ring nomenclature also applies: substituents on the **same side** → **cis**; on **opposite sides** → **trans** (the same cis/trans terms used for double bonds).

![Figure 2.8 — Nomenclature of rings with multiple substituents: cis (same side) vs. trans (opposite sides).](${fig(1, 5).src})

#### Configurational isomers
Unlike conformers (which interconvert by simple rotation), **configurational isomers** can change forms **only by breaking and reforming covalent bonds**. The two categories are **enantiomers** and **diastereomers** — both are also **optical isomers**, because their spatial arrangement affects the rotation of plane-polarized light.

##### Chirality
- An object is **chiral** if its **mirror image cannot be superimposed** on the original — it **lacks an internal plane of symmetry**.
- Chirality = **handedness**: your left hand won't fit a right-handed glove even though the hands are "identical."
- **Achiral** objects have superimposable mirror images (e.g., a fork).
- A **chiral center** is a carbon with **four different substituents** — an asymmetric core of optical activity (e.g., C-1 of **1-bromo-1-chloroethane**).

![Figure 2.10 — Enantiomers of 1-bromo-1-chloroethane: a carbon with four different groups is not superimposable on its mirror image.](${fig(1, 7).src})

:::keyconcept
**Chirality = handedness.** A chiral center lacks a plane of symmetry.
:::

:::expertise
Whenever you see a **carbon with four different substituents**, think **chirality**.
:::

A carbon with only **three different substituents** (e.g., **1,1-dibromoethane**) has a plane of symmetry and is **achiral** — a simple 180° rotation superimposes it on its mirror image.

![Figure 2.11 — Rotation of an achiral molecule: a 180° turn superimposes it on its mirror image.](${fig(1, 8).src})

#### Enantiomers
**Enantiomers** are **nonsuperimposable mirror images** with the same connectivity but **opposite configuration at *every* chiral center**.

- They have **identical physical and chemical properties** with **two exceptions**: **optical activity** and **reactions in chiral environments**.

:::keyconcept
Enantiomers have nearly identical physical and chemical properties, but they **rotate plane-polarized light in opposite directions** and **react differently in chiral environments**.
:::

##### Optical activity
A compound is **optically active** if it can **rotate plane-polarized light**. Ordinary light vibrates in all planes; a **polarizer** transmits only one plane → **plane-polarized light**.

![Figure 2.12 — A polarizer transmits light oscillating in only one direction, producing plane-polarized light.](${fig(1, 9).src})

- One enantiomer rotates light to the **same magnitude but opposite direction** of its mirror image (at equal concentration and path length).
- **Dextrorotatory (d-, +)** = clockwise (to the right); **levorotatory (l-, –)** = counterclockwise (to the left).
- The **direction must be determined experimentally** — it is **not** predictable from structure and is **not** tied to absolute configuration.

:::bridge
The *rotation* of plane-polarized light is organic chemistry, but the **polarization of light itself** is fair game as a **physics** question — see *MCAT Physics and Math Review*, Chapter 8 (Light and Optics).
:::

:::keyconcept
**d- / (+)** always = clockwise; **l- / (–)** always = counterclockwise. Do **not** confuse these with **D-/L-** labels (carbohydrates/amino acids, based on glyceraldehyde) or **(R)/(S)** (absolute configuration from structure). Optical activity does **not** consistently align with these other systems.
:::

The amount of rotation depends on how many molecules the light encounters — set by **concentration** and **tube length**. Standardized to **specific rotation** $[\\alpha]$:

$$[\\alpha] = \\dfrac{\\alpha_{obs}}{c \\cdot l}$$

where $\\alpha_{obs}$ is the observed rotation (degrees), $c$ is concentration (g/mL), and $l$ is path length in **dm** (1 dm = 10 cm).

When **(+) and (–) enantiomers are present in equal concentration**, the rotations cancel → a **racemic mixture** with **no observed optical activity** (the molecular equivalent of ambidexterity).

:::keyconcept
A **racemic mixture** displays **no optical activity**.
:::

##### Resolving a racemic mixture
Because enantiomers have identical properties, you can't separate them directly. Reacting both enantiomers with a **single enantiomer of another compound** yields **diastereomers** (e.g., (+,+) and (–,+)) — which have **different physical properties** and *can* be separated by **crystallization, filtration, distillation**, etc. The separated diastereomers are then reacted to **regenerate the original enantiomers**.

#### Diastereomers
**Diastereomers** are **non-mirror-image** configurational isomers. They occur when a molecule has **two or more stereocenters** and differs at **some, but not all** of them — so diastereomers **require multiple chiral centers**.

For a molecule with $n$ chiral centers, there are $2^n$ possible stereoisomers:

$$\\text{maximum stereoisomers} = 2^n$$

Two chiral carbons → a maximum of **four** stereoisomers (I, II, III, IV).

![Figure 2.13 — 2ⁿ possible stereoisomers (n = chiral centers): with two centers, I/II and III/IV are enantiomer pairs; all other pairings are diastereomers.](${fig(1, 10).src})

- **I & II** are mirror images → **enantiomers**; **III & IV** are mirror images → enantiomers.
- **I & III** (and I/IV, II/III, II/IV) are **not** mirror images → **diastereomers**.

Properties:

| | **Enantiomers** | **Diastereomers** |
|---|---|---|
| Relationship | Nonsuperimposable **mirror images** | **Non**-mirror-image stereoisomers |
| Chiral centers differ at | **Every** center | **Some, not all** centers |
| Physical properties | **Identical** (except optical rotation direction) | **Different** |
| Chemical properties | Identical (except in chiral environments) | **Different** (but may behave alike with same functional groups) |
| Optical rotation | Equal magnitude, **opposite** direction | Rotate light, but magnitudes are **unrelated** to each other |

##### Cis–trans isomers
**Cis–trans isomers** (formerly **geometric isomers**) are a **subtype of diastereomers** where substituents differ in position about an **immovable bond** — a **double bond** or a **ring**.

- **Same side** of the immovable bond → **cis**; **opposite sides** → **trans**.
- For **polysubstituted** double bonds, use **(E)/(Z)** nomenclature instead (next section).

:::expertise
The MCAT may use **older terminology** on Test Day. Know both the current name **cis–trans isomers** *and* the older name **geometric isomers**.
:::

#### Meso compounds
For optical activity a molecule must have chiral centers **and lack a plane of symmetry**. A **meso compound** has chiral centers **but does** possess an **internal plane of symmetry** (through or between the centers) → it is **optically inactive** despite being chiral at individual carbons.

![Figure 2.14 — Example of a meso compound: D- and L-tartaric acid are optically active, but meso-tartaric acid has an internal plane of symmetry and is not.](${fig(1, 11).src})

- **meso-tartaric acid** has two chiral carbons but an internal plane of symmetry → no net optical activity.
- A meso compound is essentially the **molecular equivalent of a racemic mixture** — two halves that are mirror images cancel.

:::keyconcept
**Meso compounds** are made of two halves that are **mirror images** of each other; as a whole they are **not optically active**.
:::

:::mnemonic
**Enantiomers vs. diastereomers — "Every vs. Some":** **E**nantiomers differ at **E**very chiral center and are mirror images; **D**iastereomers **D**iffer at some (not all) and are **not** mirror images. If a molecule is its own mirror image (internal plane of symmetry) → it's **meso** and optically dead.
:::
`
    },

    /* ───────────── 2.3 Relative and Absolute Configurations ───────────── */
    {
      id: 's3', num: '2.3', title: 'Relative and Absolute Configurations',
      goals: [
        'Name cis, trans, E, and Z molecules using appropriate nomenclature',
        'Apply Cahn–Ingold–Prelog priority rules to molecules with up to four substituents'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 2.16 — Applying the Cahn–Ingold–Prelog priority rules: the substituent whose first atom has the highest atomic number gets the highest priority.' }],
      recap: `
- **Relative configuration** = stereochemistry **compared to another molecule**; **absolute configuration** = the exact spatial arrangement, **independent** of other molecules.
- **Cahn–Ingold–Prelog (CIP) priority** is assigned by **atomic number** of the first atom on each substituent; ties are broken by working **outward** (double bonds count as two bonds).
- **(E)/(Z)** label polysubstituted double bonds: highest-priority groups on the **same side = (Z)** (*zusammen*); **opposite sides = (E)** (*entgegen*).
- **(R)/(S)** label chiral centers: put **lowest priority in back**, trace **1→2→3**; **clockwise = (R)** (*rectus*), **counterclockwise = (S)** (*sinister*).
- In a **Fischer projection**, horizontals = wedges (out of page), verticals = dashes (into page). **One swap or a 90° rotation inverts** stereochemistry; **two swaps or a 180° rotation retains** it.
`,
      detail: `
#### Relative vs. absolute configuration
The **configuration** of a stereoisomer is the spatial arrangement of its atoms/groups.

| | **Relative configuration** | **Absolute configuration** |
|---|---|---|
| Definition | Configuration **in relation to another** chiral molecule (often via chemical interconversion) | The **exact** spatial arrangement, **independent** of other molecules |
| Used to | Decide if molecules are enantiomers, diastereomers, or the same | Name a stereocenter unambiguously |
| Determined by | Comparison | **Structure** — via the CIP rules |

#### The Cahn–Ingold–Prelog (CIP) priority rules
Priority underlies **both** (E)/(Z) and (R)/(S):

1. Look **only at the first atom** bonded to the stereocenter (or double-bonded carbon). **Higher atomic number = higher priority.**
2. If the first atoms **tie**, move to the **next atoms outward**; the group containing the highest-atomic-number atom wins.
3. If a tie persists, compare atoms **one-by-one in descending atomic-number order** until it breaks.
4. A **double bond** counts as **two single bonds** to that atom.

:::keyconcept
When assigning priority, look **only at the first atom** attached to the chiral carbon — **not the group as a whole**. The higher the atomic number of that first atom, the higher the priority. The **same** system is used for (E)/(Z) **and** (R)/(S).
:::

:::mnemonic
**CIP = "Highest atomic number wins; tie? Walk outward."** Picture a tournament bracket: each substituent sends its *first atom* to compete; the heavier atom advances. Ties go to a tiebreaker one step further out — and a double bond brings a "phantom twin" (counts twice).
:::

#### (E) and (Z) nomenclature
Used for **polysubstituted double bonds** (simple ones can use cis/trans).

- Identify the **highest-priority substituent on each** double-bonded carbon (by CIP).
- **(Z)** — German *zusammen*, "together" — the two highest-priority groups are on the **same side**.
- **(E)** — *entgegen*, "opposite" — they are on **opposite sides**.

![Figure 2.15 — (E) and (Z) designations of alkenes: highest-priority groups on the same side = (Z), opposite sides = (E).](${fig(2, 0).src})

:::mnemonic
**Z = "z"ame side; E = "e"pposite side.**
:::

#### (R) and (S) nomenclature
Used for **chiral (stereogenic) centers**. Follow a fixed sequence:

##### Step 1 — Assign priority
Using CIP, rank the four substituents by the **first atom** attached to the chiral center (higher atomic number = higher priority; break ties by working outward, double bond = two bonds).

##### Step 2 — Arrange in space (two methods)

| Method | What you do | Consequence |
|---|---|---|
| **Classic** | Orient the molecule so the **lowest-priority group (usually H) points to the back**; the three higher groups radiate out of the page | Read the answer directly |
| **Modified (invert)** | If rotating in 3D is hard, **swap** the lowest-priority group with the group already in back | You've **inverted** the molecule → **flip your final answer** (R↔S) |

![Figure 2.17 — Placing the lowest-priority group in the back so the three higher-priority groups face you.](${fig(2, 2).src})

##### Step 3 — Draw a circle
Trace a circle from priority **1 → 2 → 3** (ignore group 4 — it points into the page).

- **Clockwise = (R)** (Latin *rectus*, "right").
- **Counterclockwise = (S)** (*sinister*, "left").
- If you used the **modified** Step 2, **reverse** the result.

![Figure 2.18 — Drawing a circle 1→2→3 to determine absolute configuration: clockwise = (R), counterclockwise = (S).](${fig(2, 3).src})

:::mnemonic
A **clockwise** circle is like turning a **steering wheel to the Right** → the center is **(R)**. (And **S**inister = **S**outhpaw = left = counterclockwise.)
:::

##### Step 4 — Write the name
Place **(R)** or **(S)** in **parentheses**, set off from the name by a **hyphen**. With more than one chiral center, **number** each (e.g., **(2R,3S)-**) — the number precedes R/S **without** a hyphen.

:::keyconcept
**To determine absolute configuration at a chiral center:**
1. Assign priority by **atomic number**.
2. Put the **lowest-priority** group in the **back** (or invert by switching two substituents).
3. Draw a circle from highest to lowest priority (**1 → 2 → 3**).
4. **Clockwise = (R); counterclockwise = (S).**
:::

#### Fischer projections
A **Fischer projection** represents a 3D molecule in 2D:

- **Horizontal lines = wedges** (bonds coming **out** of the page).
- **Vertical lines = dashes** (bonds going **into** the page).
- The **intersection** of the lines is a **carbon atom**.

The same (R)/(S) rules apply — you still need the **lowest-priority group projecting into the page**. A bonus of Fischer projections: the lowest-priority group can be on the **top or bottom** and still project into the page.

##### Allowed manipulations
| Manipulation | Effect on stereochemistry |
|---|---|
| **Switch one pair** of substituents | **Inverts** (R↔S) |
| **Switch two pairs** of substituents | **Retains** |
| **Rotate 90°** in the plane of the page | **Inverts** |
| **Rotate 180°** in the plane of the page | **Retains** |

![Figure 2.19 — Manipulations of Fischer projections: one swap or a 90° rotation inverts; two swaps or a 180° rotation retains.](${fig(2, 4).src})

##### Lowest-priority group pointing sideways
If the lowest-priority group points to the **side** (out of the page), use one of three consistent tricks:

- **Option 1 — 0 switches:** read 1→2→3 as usual (skip group 4), then **flip** the answer (the true designation is the **opposite**).
- **Option 2 — 1 switch:** swap the lowest-priority group with a group on the **vertical** axis, read the designation, then **flip** it.
- **Option 3 — 2 switches:** start as in Option 2, then swap the **other two** groups as well; two switches **retain** the designation (equivalent to holding one substituent and rotating the other three).

:::expertise
Pick **one** Fischer option and **stick with it** — a consistent method beats juggling all three interchangeably.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Structural Isomers',
        points: [
          '**Structural (constitutional) isomers** share **only a molecular formula** — and therefore molecular weight — and nothing else.',
          'They have **different physical and chemical properties**; chemical behavior is set by the molecule\'s **functional groups**.',
          '**Physical properties** (mp, bp, solubility, odor, color, density) do **not** change composition; **chemical properties** involve reactivity that **does** change composition.'
        ]
      },
      {
        section: 'Stereoisomers',
        points: [
          '**Stereoisomers** share formula **and** connectivity, differing only in spatial arrangement; they split into **conformational** (rotation about σ bonds — same molecule) and **configurational** (interconvert only by **breaking bonds**).',
          '**Conformations:** staggered groups are 60° apart in a Newman projection — **anti** (largest groups 180°, minimal strain) and **gauche** (60°); **eclipsed** groups are in front of one another, **totally eclipsed** (0°) being maximally strained.',
          '**Ring strain** = **angle** (distorted angles) + **torsional** (eclipsing) + **nonbonded** (nonadjacent groups); rings adopt nonplanar shapes (cyclohexane → chair, boat, twist-boat) to minimize it.',
          'In cyclohexane, substituents are **axial** (up/down) or **equatorial** (in-plane); axial groups create more **nonbonded strain**, so the **largest substituent** prefers **equatorial**.',
          '**Enantiomers** are nonsuperimposable mirror images (opposite at **every** chiral carbon); identical properties except **optical rotation direction** and behavior in a **chiral environment**.',
          '**Optical activity:** d-/(+) rotate light **right**, l-/(–) rotate **left**; **racemic mixtures** (equal enantiomers) and **meso compounds** (internal plane of symmetry) are **optically inactive**.',
          '**Diastereomers** are non-mirror-image stereoisomers that differ at **some, not all** chiral centers and have **different** physical and chemical properties; **cis–trans (geometric) isomers** are a subtype about an **immovable bond**.',
          'A **chiral center** has **four different groups**; a molecule with $n$ chiral centers has up to $2^n$ stereoisomers.'
        ]
      },
      {
        section: 'Relative and Absolute Configurations',
        points: [
          '**Relative configuration** describes stereochemistry **by comparison** to another molecule; **absolute configuration** describes it on its own using the **Cahn–Ingold–Prelog** rules.',
          '**CIP priority** goes to the atom (attached to the chiral or double-bonded carbon) with the **highest atomic number**; ties are broken by moving **outward** until they resolve.',
          'An alkene is **(Z)** if the highest-priority substituents are on the **same side** of the double bond and **(E)** if on **opposite sides**.',
          'A stereocenter is named by placing the **lowest-priority group in the back** and tracing **1→2→3**: **clockwise = (R)**, **counterclockwise = (S)**.',
          'In **Fischer projections**, **vertical** lines go into the page (dashes) and **horizontal** lines come out (wedges).',
          '**One swap** or a **90° rotation inverts** stereochemistry; **two swaps** or a **180° rotation retains** it.'
        ]
      }
    ],
    mnemonics: [
      '**Isomer hierarchy:** formula → **structural** (different connectivity) vs. **stereo** (same connectivity) → stereo splits into **conformational** (σ-bond rotation) and **configurational** → configurational splits into **enantiomers** (mirror) and **diastereomers** (non-mirror).',
      '**Enantiomers vs. diastereomers — "Every vs. Some":** **E**nantiomers differ at **E**very chiral center (mirror images); **D**iastereomers **D**iffer at some-not-all (non-mirror). Same molecule + internal mirror plane = **meso** (optically dead).',
      '**Optical labels travel in pairs:** **d- = (+) = clockwise = right**; **l- = (–) = counterclockwise = left**. Direction is **measured, not predicted** from structure.',
      '**It\'s gauche to stand too close:** gauche = awkwardly near (60°); **eclipsed** = directly in line, like a solar eclipse (high energy).',
      '**CIP priority = heaviest first atom wins; ties walk outward** (double bond = a phantom twin that counts twice). Same rule for (E)/(Z) **and** (R)/(S).',
      '**Z = "z"ame side, E = "e"pposite side** for double-bond geometry.',
      '**Steering-wheel R/S:** trace 1→2→3 — turning the wheel **clockwise = Right = (R)**; counterclockwise = **S**inister (left) = **(S)**.',
      '**Fischer swaps:** an **odd** number of switches (1) or a **90°** turn **inverts**; an **even** number (2) or a **180°** turn **retains**.'
    ],
    keyConcepts: [
      '**Walk the hierarchy to classify any pair:** same formula? If connectivity differs → **structural**. Same connectivity, differ only by σ-rotation → **conformational**. Differ by something needing bond-breaking → **configurational** (mirror image = **enantiomer**, otherwise **diastereomer**).',
      '**A chiral center = a carbon with four different substituents** and no internal plane of symmetry; spotting four different groups is the fastest way to flag chirality on Test Day.',
      '**Optical inactivity has two flavors:** a **racemic mixture** (equal + and – enantiomers cancel **between** molecules) and a **meso compound** (mirror-image halves cancel **within** one molecule).',
      '**$2^n$ caps the stereoisomers** for $n$ chiral centers — but watch for **meso** compounds and non-stereogenic carbons (CH₂, double-bond, aldehyde carbons), which reduce the real count below $2^n$.',
      '**Optical activity ≠ absolute configuration:** (+)/(–) is measured experimentally and does **not** track (R)/(S) or D-/L-; never infer rotation direction from a structure.'
    ],
    equations: [
      { name: 'Specific rotation', tex: '[\\alpha] = \\dfrac{\\alpha_{obs}}{c \\cdot l}', note: 'Standardizes observed rotation: $\\alpha_{obs}$ in degrees (clockwise/dextrorotatory is +), $c$ = concentration (g/mL), $l$ = path length in **dm** (1 dm = 10 cm). Always convert tube length to decimeters.' },
      { name: 'Maximum number of stereoisomers', tex: '\\text{stereoisomers} = 2^n', note: '$n$ = number of chiral centers. Two chiral carbons → up to 4 stereoisomers. Meso compounds and non-stereogenic carbons lower the actual count.' }
    ]
  },

  questions: raw.questions
};
