// General Chemistry Chapter 3 — Bonding and Chemical Interactions.
// Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch03.json (already-correct extraction);
// the recap/detail markdown, tables, callouts, and key review are authored here.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 3,
  title: 'Bonding and Chemical Interactions',
  subtitle: 'Bonding & the octet rule · ionic bonds · covalent bonds, Lewis structures & VSEPR · intermolecular forces',

  blocks: [
    /* ───────────────────────── 3.1 Bonding ───────────────────────── */
    {
      id: 's1', num: '3.1', title: 'Bonding',
      goals: [
        'Compare and contrast ionic and covalent compounds.',
        'Identify elements that do not obey the octet rule.',
        'Apply periodic trends to determine whether a covalent bond is polar or nonpolar.'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 3.1 — Argon, a noble gas, has a complete octet (eight valence electrons): the stable configuration every atom "wants."' }],
      recap: `
- **Chemical bonds** form through the interaction of **valence electrons**; the product's properties differ wildly from the elements (reactive Na + toxic $\\text{Cl}_2$ → edible **NaCl**).
- **Octet rule:** atoms bond to reach **8 valence electrons** (noble-gas configuration). It's a *rule of thumb* with more exceptions than followers.
- **Two bond types:** **ionic** (electron *transfer*, metal → nonmetal) vs. **covalent** (electron *sharing*, nonmetal–nonmetal).
- **Polarity** of a covalent bond is set by the **electronegativity difference (ΔEN)**: equal share → **nonpolar**, unequal → **polar**, one atom donates both → **coordinate covalent**.
`,
      detail: `
#### Why atoms bond
Atoms of nearly every element (except some noble gases) combine into molecules, held together by strong attractive forces called **chemical bonds** formed by the interaction of **valence electrons**. The compound's chemistry is usually nothing like its constituent elements:

- **Elemental sodium** — an alkali metal so reactive it ignites in water (highly **exothermic**).
- **Diatomic chlorine** ($\\text{Cl}_2$) — a gas so toxic it was a WWI chemical weapon.
- **Sodium chloride** ($\\text{NaCl}$) — combine the two and you get biologically essential table salt.

#### The octet rule
Many atoms bond according to the **octet rule**: an atom tends to bond so it holds **eight electrons in its outermost shell**, mimicking the stable configuration of the noble gases (e.g., **argon** above).

- **Nonmetals gain** electrons; **metals lose** electrons to reach a complete octet.

:::keyconcept
The octet rule is the *desire of all atoms to achieve a noble-gas configuration*. But keep in mind there are **many exceptions** — arguably more exceptions than elements that follow it.
:::

##### Exceptions to the octet rule
| Exception | Why | Examples |
|---|---|---|
| **Incomplete octet** | Stable with **fewer than 8** electrons | **H** (2), **He** (2), **Li** (2), **Be** (4), **B** (6) |
| **Expanded octet** | Period 3+ can use empty **d-orbitals** to exceed 8 | **P** (10), **S** (12), **Cl** (14), and many others |
| **Odd # of electrons** | Can't give 8 to *every* atom | **NO** (nitric oxide) has 11 valence $e^-$ |

A useful flip side: the common elements that **almost always obey** the octet are **C, N, O, F, Na, Mg**.

:::mnemonic
**Octet break-ers — "H He Li Be B" run short, period 3+ runs long.** Anything in **period 3 or below** can stash extra electrons in **d-orbitals** (expanded octet); the tiny elements at the top of the table (**H, He, Li, Be, B**) settle for *less* than eight.
:::

#### The two types of bonds
We classify chemical bonds as **ionic** or **covalent**.

![Figure 3.3 — NaCl crystal lattice (Na purple, Cl green): ionic compounds are repeating arrays of ions, not discrete molecules.](${fig(0, 4).src})

| Property | **Ionic bond** | **Covalent bond** |
|---|---|---|
| Mechanism | **Transfer** of $e^-$ | **Sharing** of an $e^-$ pair |
| Driving force | Low **ionization energy** atom → high **electron affinity** atom | Each $e^-$ in the pair is attracted to *both* nuclei |
| Typical atoms | **Metal + nonmetal** | **Nonmetal + nonmetal** (similar EN) |
| What holds it together | **Electrostatic attraction** of opposite charges | Shared electron density between nuclei |
| Structure | **Crystal lattice** of repeating cations/anions | Discrete **molecules** |
| Example | $\\text{NaCl}$ | $\\text{F}_2$ |

In **ionic bonding**, electrons leave a low-ionization-energy atom (a metal like **Na**) and join a high-electron-affinity atom (a nonmetal like **Cl**). The resulting **cation** and **anion** are held by **electrostatic attraction**, building a **lattice** rather than individual molecular bonds.

![Figure 3.4 — Diatomic fluorine: each F shares one of its seven valence electrons, so both atoms reach an octet through a single covalent bond.](${fig(0, 5).src})

In **covalent bonding**, an electron pair is **shared** between two atoms of similar electronegativity. The *degree* of sharing sets the polarity:

- **Shared equally → nonpolar** covalent bond.
- **Shared unequally → polar** covalent bond.
- **Both electrons from one atom → coordinate covalent** bond.

:::bridge
**Electronegativity** (Chapter 2 of *MCAT General Chemistry Review*) is the property that tells you how an atom behaves *within* a bond — it's the key to predicting whether two atoms will transfer or share electrons.
:::
`
    },

    /* ───────────────────────── 3.2 Ionic Bonds ───────────────────────── */
    {
      id: 's2', num: '3.2', title: 'Ionic Bonds',
      goals: [
        'Explain why ionic bonds are commonly formed between metals and nonmetals.',
        'Recall the major characteristics of ionic compounds.'
      ],
      recap: `
- **Ionic bonds** form between atoms of **very different electronegativity** (**ΔEN > 1.7** on the Pauling scale) — typically a **metal + nonmetal**.
- The metal **loses** $e^-$ → **cation** (+); the nonmetal **gains** $e^-$ → **anion** (−). **Electrons are not shared.**
- Group **IA/IIA** metals readily bond the **Group VIIA** halogens (e.g., $\\text{CsCl}$, $\\text{KI}$, $\\text{NaF}$).
- Ionic compounds: **high melting/boiling points**, **crystal lattices**, **dissolve in polar solvents**, **conduct electricity when molten or aqueous**.
`,
      detail: `
#### How ionic bonds form
Ionic bonds form when atoms have **significantly different electronegativities**:

- The atom that **loses** electrons becomes a **cation**.
- The atom that **gains** electrons becomes an **anion**.
- The bond is the **electrostatic force of attraction** between the opposite charges — **no electrons are shared**.

For full electron transfer, the **ΔEN must exceed ~1.7** on the **Pauling scale**.

:::mnemonic
**MeTals** lose electrons → become ca**T**ions = posi**T**ive (+) ions.
**No**nmetals gain electrons → become a**N**ions = **N**egative (−) ions.
:::

:::expertise
The MCAT won't make you memorize the Pauling scale — just recognize that **ionic bonds generally form between a metal and a nonmetal**. Active **alkali (IA)** and **alkaline earth (IIA)** metals hold their electrons loosely; **halogens (VIIA)** are eager to grab one. So the large ΔEN pairings (e.g., **CsCl** ΔEN = 2.3, **KI** ΔEN = 1.7, **NaF** ΔEN = 3.1) form ionic compounds.
:::

#### Characteristics of ionic compounds
The strong electrostatic forces give ionic compounds a signature set of properties — know these five for Test Day:

| Property | Why |
|---|---|
| **Very high melting & boiling points** | Strong electrostatic attraction between ions ($\\text{NaCl}$ melts at **801 °C**) |
| **Dissolve in water / polar solvents** | Polar solvent molecules stabilize the separated ions |
| **Conduct electricity (molten or aqueous)** | Free-moving ions carry charge — but **not** as a dry solid |
| **Form crystalline lattices** | Repeating + / − array **maximizes attraction, minimizes repulsion** |
| **Large ΔEN between constituents** | The defining condition for ionic character (ΔEN > 1.7) |

:::keyconcept
A solid ionic crystal does **not** conduct — its ions are locked in the lattice. Conductivity appears only once the ions are freed by **melting** or **dissolving**.
:::
`
    },

    /* ───────────────────────── 3.3 Covalent Bonds ───────────────────────── */
    {
      id: 's3', num: '3.3', title: 'Covalent Bonds',
      goals: [
        'Explain the relationship between bond strength, bond length, and bond energy.',
        'Identify the values of ΔEN for which polar covalent, nonpolar covalent, and ionic bonds form.',
        'Predict the molecular geometry of a molecule given its formula.',
        'Draw Lewis dot structures for simple molecules, including resonance structures.'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 3.6 — Dipole moment of HCl: the crossed arrow points from the partially positive H (δ+) toward the partially negative Cl (δ−).' }],
      recap: `
- As **bond order** rises (single → double → triple), **bond length decreases** while **bond energy and strength increase**. *Triple bonds = shortest & strongest.*
- **ΔEN cutoffs:** **0–0.5 = nonpolar covalent**; **0.5–1.7 = polar covalent**; **> 1.7 = ionic**.
- **Dipole moment** $\\vec{p} = q\\vec{d}$ points from + to − (Debye units); a polar bond has the − end on the more electronegative atom.
- **Formal charge** = $V - N_{nonbonding} - \\tfrac{1}{2}N_{bonding}$; the structure that **minimizes formal charges** is most stable.
- **VSEPR** predicts shape from electron-pair repulsion: **electronic** geometry counts *all* pairs; **molecular** geometry counts only **bonding** pairs.
- **σ bonds** = head-to-head overlap (free rotation); **π bonds** = parallel/side-by-side overlap (no rotation).
`,
      detail: `
#### When atoms share instead of transfer
When two atoms have **similar electronegativities**, ripping electrons away to make ions costs more energy than is released by forming an ionic bond — so it's **energetically unfavorable** to create ions. Instead, the atoms **share** electrons, with each electron of the shared pair attracted to *both* positive nuclei.

:::expertise
Think of a bond as a **tug-of-war**. **Large ΔEN (> 1.7)** → the "stronger" atom wins all the electrons and becomes an anion (**ionic**). **Similar EN** → a stalemate, i.e., a **covalent** bond with roughly equal sharing.
:::

Covalent compounds are **discrete molecules** with weak intermolecular interactions, so they tend to have **low melting/boiling points** (e.g., $\\text{CO}_2$) and are **poor electrical conductors** (they don't break into ions).

#### Bond order, length, and energy
Atoms can share **one, two, or three** electron pairs → **single, double, or triple** bonds. The number of shared pairs is the **bond order**.

| Bond | Bond order | Bond length | Bond energy / strength |
|---|---|---|---|
| **C–C** (single) | 1 | **Longest** | **Weakest** |
| **C=C** (double) | 2 | Medium | Medium |
| **C≡C** (triple) | 3 | **Shortest** | **Strongest** |

- **Bond length** = average distance between the two nuclei. More shared pairs pull the atoms **closer** → shorter bond.
- **Bond energy** = energy needed to break the bond into isolated gaseous atoms. More shared pairs → **more energy** required. *(Bond enthalpy calculations: Chapter 7.)*

:::keyconcept
This **inverse relationship — shorter = stronger = higher bond energy** — shows up in *both* general and organic chemistry. Lock it in for quick points.
:::

#### Polarity of bonds
**Polarity** arises from a **difference in electronegativity**. The more electronegative atom takes the larger share of electron density, creating a **dipole** — negative end on the more electronegative atom.

| Bond type | ΔEN range | Behavior |
|---|---|---|
| **Nonpolar covalent** | **0 – 0.5** | Equal (or near-equal) sharing; no net charge separation |
| **Polar covalent** | **0.5 – 1.7** | Unequal sharing → partial charges (δ+ / δ−) |
| **Ionic** | **> 1.7** | Complete transfer → cation + anion |

- Only bonds between **atoms of the same element** are *perfectly* nonpolar (the **seven diatomics**: $\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$).
- A **polar bond** (e.g., **HCl**, ΔEN = 0.9) gives Cl a **δ−** and H a **δ+**, drawn as a crossed arrow pointing toward the negative end.
- The **dipole moment** is a vector: $$\\vec{p} = q\\vec{d}$$ where $q$ is the charge magnitude and $\\vec{d}$ is the displacement separating the charges, measured in **Debye** units (coulomb-meters).

:::mnemonic
**The diatomic "7":** there are **7** naturally diatomic elements, most in **Group VIIA**, and on the table they trace the number **7** (plus the outlier **H**): $\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$ — **"Have No Fear Of Ice Cold Beer."**
:::

:::expertise
**ΔEN cheat sheet:** roughly **0–0.5 nonpolar**, **0.5–1.7 polar covalent**, **≥ 1.7 ionic**. In the grey zone **1.7–2.0**: if it's a **metal + nonmetal** treat it as **ionic**; otherwise **polar covalent**.
:::

#### Coordinate covalent bonds

![Figure 3.7 — Coordinate covalent bond: NH₃ (Lewis base) donates a lone pair to BF₃ (Lewis acid); once formed the bond is identical to any covalent bond.](${fig(2, 2).src})

In a **coordinate covalent bond**, **both** shared electrons come from the **same atom** — typically a **lone pair** attacks an atom with an empty orbital. Once formed it's **indistinguishable** from any other covalent bond; the label only helps track electrons and formal charges.

- A **Lewis base** *donates* a lone pair; a **Lewis acid** *accepts* it. *(Above: $\\text{NH}_3$ = base, $\\text{BF}_3$ = acid.)*
- Common in **Lewis acid–base** and **complexation** reactions (Chapters 9–10).

#### Lewis structures
A **Lewis dot structure** is the element symbol surrounded by dots, each dot = one **s/p valence electron**. They're a **bookkeeping method** for bonding and nonbonding (**lone pair**) electrons.

**Steps to draw a Lewis structure** (worked for **HCN**):

1. **Draw the skeleton.** The **least electronegative** atom is central; **H and the halogens** go terminal. → For HCN, **C is central**: $\\text{H–C–N}$.
2. **Count all valence electrons.** H (1) + C (4) + N (5) = **10** total.
3. **Place single bonds** between the central atom and its neighbors (each = one pair).
4. **Complete the octets** of the surrounding atoms with remaining electrons (H only needs 2).
5. **Put extras on the central atom.** If it lacks an octet, **form double/triple bonds** using surrounding lone pairs. → N donates two lone pairs to make a **triple bond**: $\\text{H–C≡N:}$ — now C and N have octets, H has 2.

:::expertise
The **number of dots** comes straight from the **group number**: Group IA (Li) → 1 dot; Group IVA (C) → 4 dots. Per the AAMC content lists, be ready to build Lewis diagrams for **H, C, N, O, F, S, P, Si, Cl** — but learn the *process*, don't memorize each.
:::

#### Formal charge
Assume **perfectly equal sharing** of every bonding pair (split each bond's 2 electrons evenly), then compare to the atom's normal valence count:

$$\\text{Formal charge} = V - N_{nonbonding} - \\tfrac{1}{2}N_{bonding}$$

where $V$ = valence electrons of the neutral atom, $N_{nonbonding}$ = lone-pair electrons, and $N_{bonding}$ = electrons in bonds. The **total charge** of the ion equals the **sum** of formal charges.

:::mnemonic
**Less formal formal charge:** $\\text{FC} = \\text{valence electrons} - \\text{dots} - \\text{sticks}$, where a **dot** = one lone (nonbonding) electron and a **stick** = one bond.
:::

**Worked example — central N in $[\\text{NH}_4]^+$:** N is Group VA → $V = 5$. In ammonium, N has **4 bonds** (8 bonding $e^-$, 0 nonbonding). $\\text{FC} = 5 - 0 - \\tfrac{1}{2}(8) = +1$. *(Logic check: 4 bonds → 4 "owned" electrons vs. 5 normally → one short → +1.)*

:::keyconcept
**Formal charge vs. oxidation number:** formal charge *underestimates* electronegativity effects (assumes perfectly equal sharing); oxidation number *overestimates* them (assumes the more electronegative atom takes 100%). In $\\text{CO}_2$, every formal charge is 0, but O is −2 and C is +4 by oxidation state. Reality lies between.
:::

#### Resonance

![Figure 3.9 — Two resonance forms of the sulfate ion: same atomic skeleton, different electron placement; the real ion is a hybrid.](${fig(2, 4).src})

When multiple Lewis structures share the **same atomic connectivity** but differ in **electron placement**, they are **resonance structures**, joined by a **double-headed arrow** (↔). The true molecule is a **resonance hybrid** — a weighted composite. (Different *connectivity* = different compounds, not resonance.)

**Ranking resonance contributors** — the more stable a structure, the more it contributes:

- **Smaller / fewer formal charges** are preferred over large ones.
- **Less charge separation** is preferred over widely separated opposite charges.
- **Negative formal charges on the more electronegative atom** are preferred.

:::bridge
**Resonance** appears in both gen chem and organic chem. It **delocalizes electrons and charge over a π system**, granting extra stability — see Chapter 3 of *MCAT Organic Chemistry Review*.
:::

Remember that **period 3+ central atoms can expand the octet** (using d-orbitals) and form **more than four bonds** — e.g., **$\\text{SO}_4^{2-}$** gives S 12 electrons so three atoms carry zero formal charge. Don't reflexively reject a Lewis structure with >4 bonds on the central atom.

#### VSEPR theory and molecular geometry
**Valence Shell Electron Pair Repulsion (VSEPR)** theory predicts 3-D shape: electron pairs (bonding *and* nonbonding) around the central atom arrange themselves **as far apart as possible** to minimize repulsion.

| Regions of e⁻ density | Electronic geometry | Bond angle(s) | Example |
|---|---|---|---|
| **2** | **Linear** | **180°** | $\\text{BeCl}_2$ |
| **3** | **Trigonal planar** | **120°** | $\\text{BH}_3$ |
| **4** | **Tetrahedral** | **109.5°** | $\\text{CH}_4$ |
| **5** | **Trigonal bipyramidal** | **90°, 120°, 180°** | $\\text{PCl}_5$ |
| **6** | **Octahedral** | **90°, 180°** | $\\text{SF}_6$ |

:::mnemonic
**VSEPR shapes by electron groups — "Lonely Tigers Tend To Trip Over."** **2 → L**inear · **3 → T**rigonal planar · **4 → T**etrahedral · **5 → T**rigonal bipyramidal · **6 → O**ctahedral. Angles step down then split: **180 → 120 → 109.5 → (90/120/180) → (90/180)**.
:::

##### Electronic vs. molecular geometry
A favorite MCAT subtlety: the table above gives **electronic** geometry (*all* electron pairs). **Molecular** geometry counts only the **bonding** pairs (the **coordination number** = atoms bonded to the central atom). $\\text{CH}_4$, $\\text{NH}_3$, and $\\text{H}_2\\text{O}$ **all have tetrahedral electronic geometry** but differ in molecular shape:

| Molecule | Bonding pairs | Lone pairs | Molecular geometry | Bond angle |
|---|---|---|---|---|
| $\\text{CH}_4$ | 4 | 0 | **Tetrahedral** | 109.5° |
| $\\text{NH}_3$ | 3 | 1 | **Trigonal pyramidal** | ~107° |
| $\\text{H}_2\\text{O}$ | 2 | 2 | **Bent / angular** | 104.5° |

:::keyconcept
**Lone pairs repel harder than bonding pairs** (they sit closer to the nucleus), squeezing the bonding angles below the ideal. That's why the angle drops from **109.5° (CH₄) → 107° (NH₃) → 104.5° (H₂O)** as lone pairs are added.
:::

##### Polarity of whole molecules

![Figure 3.10 — CCl₄ is nonpolar despite four polar C–Cl bonds: tetrahedral symmetry makes the bond dipoles cancel (net dipole = 0).](${fig(2, 11).src})

A bond dipole ≠ a molecular dipole. You must add the bond dipoles as **vectors** over the molecular geometry:

- **Nonpolar bonds → always a nonpolar molecule.**
- **Polar bonds → could be polar *or* nonpolar**, depending on geometry.
- If the bond dipoles **cancel** (vector sum = 0) → **nonpolar** molecule (e.g., **$\\text{CCl}_4$**, tetrahedral).
- If they **don't cancel** → net dipole → **polar** molecule.

![Figure 3.11 — H₂O is polar: the bent geometry means its two O–H bond dipoles add to a net dipole pointing toward oxygen.](${fig(2, 12).src})

**$\\text{H}_2\\text{O}$** has two polar O–H bonds and a **bent** shape, so the dipoles **add** to a net molecular dipole (H end +, O end −).

:::expertise
**Be careful:** a polar *bond* does **not** guarantee a polar *molecule* — check the geometry. But seeing **only nonpolar bonds** *does* guarantee a nonpolar molecule. When unsure, draw the structure.
:::

#### Atomic and molecular orbitals

![Figure 3.13 — The three p-orbitals (pₓ, p_y, p_z): dumbbell shapes along mutually perpendicular axes.](${fig(2, 14).src})

Electrons occupy **orbitals** described by quantum numbers. The **azimuthal quantum number ($l$)** sets the subshell shape:

- **$l = 0$ → s** subshell: one **spherical** orbital.
- **$l = 1$ → p** subshell: **three** dumbbell orbitals along x, y, z.
- **$l = 2$ → d**, **$l = 3$ → f** (more complex; shapes not memorized for the MCAT).

When atoms bond, atomic orbitals combine into **molecular orbitals**. Same-sign overlap → a **bonding orbital**; opposite signs → an **antibonding orbital**.

##### Sigma vs. pi bonds
| Feature | **Sigma (σ) bond** | **Pi (π) bond** |
|---|---|---|
| Overlap | **Head-to-head** (end-on) | **Side-by-side** (parallel p-orbitals) |
| Electron density | Single linear accumulation **between** nuclei | Two parallel clouds **above/below** the axis |
| Free rotation? | **Yes** — rotates freely about the axis | **No** — twisting breaks the parallel overlap |
| Where | Every single bond; the first bond of any multiple bond | The 2nd/3rd bonds of double/triple bonds |

:::bridge
**Quantum numbers** revisited (Chapter 1): for any $n$ there are $n$ values of $l$ ($0 \\to n-1$); for any $l$ there are $2l+1$ values of $m_l$ (the orbital count), ranging $-l$ to $+l$.
:::
`
    },

    /* ───────────────────────── 3.4 Intermolecular Forces ───────────────────────── */
    {
      id: 's4', num: '3.4', title: 'Intermolecular Forces',
      goals: [
        'Order the intermolecular forces from strongest to weakest.',
        'Describe what occurs during dipole–dipole, hydrogen bonding, and London dispersion force interactions.',
        'Predict what intermolecular forces are possible for given interacting molecules.'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 3.15 — Hydrogen bonding in water: each H (δ+) is drawn to a lone pair on a neighboring oxygen (δ−), shown as dashed lines.' }],
      recap: `
- **Strength ranking (strong → weak): hydrogen bonding > dipole–dipole > London dispersion.** All are far weaker than covalent bonds (even an H-bond is ~**10%** of a covalent bond).
- **London dispersion forces** = momentary induced dipoles; present in **everything**, the **weakest**; stronger in **larger / more polarizable** molecules.
- **Dipole–dipole** = permanent dipoles aligning + to −; **intermediate** strength; matters in solid/liquid, negligible as gas.
- **Hydrogen bonds** = special strong dipole–dipole when **H is bonded to N, O, or F** ("**FON**"); drive water's high boiling point and biomolecule structure.
`,
      detail: `
#### The intermolecular force hierarchy
Atoms and molecules attract each other through weak **electrostatic intermolecular forces** that govern physical properties like **melting and boiling points**. From weakest to strongest:

| Force | Relative strength | Present in | Key feature |
|---|---|---|---|
| **London dispersion** | **Weakest** | **All** atoms/molecules | Momentary, **induced** dipoles |
| **Dipole–dipole** | Intermediate | **Polar** molecules | **Permanent** dipoles align |
| **Hydrogen bond** | **Strongest** (of these) | **H–F, H–O, H–N** molecules | Special, strong dipole–dipole |

Even the strongest of these (the hydrogen bond) is only **~10% of a covalent bond's strength**, so all can be overcome with modest energy.

:::bridge
These intermolecular forces hold a substance together as a **solid or liquid** and determine whether two substances are **miscible or immiscible** — central to solutions and solubility (Chapter 9).
:::

#### London dispersion forces
Even in a perfectly nonpolar bond, electrons are at any instant **randomly distributed**, momentarily making one end **δ−** and the other **δ+**. This **instantaneous dipole induces** an opposite dipole in a neighbor, which induces another, and so on — the shifting attractions are **London dispersion forces** (a type of **van der Waals force**).

- **Weakest** of all IMFs — induced dipoles flicker moment to moment.
- Act only at **very short range** (close proximity).
- **Larger, more polarizable** molecules → **stronger** dispersion forces (electrons shift more easily).

:::realworld
Though individually feeble, **millions** of dispersion-force contacts add up to enormous adhesion — this is how **geckos** climb smooth vertical (even inverted) surfaces. Dispersion forces are also the *only* IMF between **noble-gas atoms**, which is why noble gases liquefy only at very low temperatures.
:::

#### Dipole–dipole interactions

![Figure 3.16 — Hydrogen bonding between guanine and cytosine: three H-bonds (dashed) stabilize the base pair — the same forces shape DNA and proteins.](${fig(3, 2).src})

**Polar molecules** orient so the **+ region of one** sits near the **− region of another**, creating an attractive electrostatic force (drawn as **dashed lines**).

- Significant in **solid and liquid** phases; **negligible in gas** (particles too far apart).
- Polar species have **higher melting/boiling points** than nonpolar species of comparable mass.
- London forces and dipole–dipole differ **not in kind but in duration** — both are electrostatic attractions between partial charges; the dipole is **transient** (London) vs. **permanent** (dipole–dipole).

:::bridge
In organic chemistry, **carbonyl groups** carry strong dipoles that drive **nucleophilic attack** — the engine behind most reactions in Chapters 6–9 of *MCAT Organic Chemistry Review*.
:::

#### Hydrogen bonds
A **hydrogen bond** is a specific, unusually strong **dipole–dipole interaction** (intra- or intermolecular). It is **not a true bond** — no electrons are shared or transferred.

- Occurs when **H is covalently bonded to N, O, or F** (the most electronegative atoms). H keeps almost none of the bonding electron density and acts like a **naked proton**.
- That **δ+ hydrogen** is attracted to the **partial negative charge** on N/O/F of a neighbor.
- Gives **unusually high boiling points** vs. similar-mass compounds without H-bonding.
- Critical in **water, alcohols, amines, carboxylic acids**, and biomolecules (e.g., **DNA base pairing**).

:::mnemonic
**Hydrogen bonds: pick up the "FON" (phone).** A molecule H-bonds only if it has hydrogen bonded to **F**luorine, **O**xygen, or **N**itrogen.
:::

:::realworld
Were it not for water's ability to **hydrogen bond** and stay liquid at room temperature, life as we know it could not exist — H-bonds give water its anomalously high boiling point and its power as biology's solvent.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Bonding & the Octet Rule',
        points: [
          'Chemical bonds are **ionic** (electron transfer) or **covalent** (electron sharing); elements bond to attain a **noble-gas configuration**.',
          'The **octet rule** (8 valence electrons) has many exceptions: **incomplete octet** (H, He, Li, Be, B), **expanded octet** (period 3+, using d-orbitals), and **odd-electron** molecules (e.g., NO).',
          'Covalent bonds are classified by ΔEN as **nonpolar**, **polar**, or — when one atom supplies both electrons — **coordinate covalent**.'
        ]
      },
      {
        section: 'Ionic Bonds',
        points: [
          'Form by **transferring** electrons from a low-ionization-energy atom (metal) to a high-electron-affinity atom (nonmetal), usually with **ΔEN > 1.7**.',
          'A positive ion is a **cation**; a negative ion is an **anion**; the electrostatic attraction builds a **crystalline lattice**.',
          'Ionic compounds have **high melting points**, **dissolve in polar solvents**, and **conduct electricity when molten or aqueous** (not as a dry solid).'
        ]
      },
      {
        section: 'Covalent Bonds',
        points: [
          'As **bond order** increases, **bond strength and energy increase** while **bond length decreases** (triple < double < single in length).',
          '**ΔEN:** nonpolar (0–0.5), polar covalent (0.5–1.7), ionic (>1.7); the more electronegative atom gets the **δ−**.',
          '**Lewis structures** track valence electrons; **formal charge** = $V - N_{nonbonding} - \\tfrac{1}{2}N_{bonding}$, and the lowest-formal-charge structure is most stable.',
          '**Resonance** structures (same connectivity, different electron placement) average into a **resonance hybrid** stabilized by a π system.',
          '**VSEPR** arranges electron pairs to minimize repulsion; **electronic geometry** counts all pairs, **molecular geometry** counts only bonding pairs (CH₄, NH₃, H₂O share tetrahedral electronic geometry).',
          'Molecular **polarity** = vector sum of bond dipoles; symmetric molecules (e.g., CCl₄) can be nonpolar despite polar bonds.',
          '**σ bonds** = head-to-head overlap (free rotation); **π bonds** = parallel overlap (no rotation).'
        ]
      },
      {
        section: 'Intermolecular Forces',
        points: [
          'Strength order: **hydrogen bonding > dipole–dipole > London dispersion**; all are weaker than covalent and ionic bonds.',
          '**London dispersion forces** exist in all molecules and grow with molecular size/polarizability.',
          '**Dipole–dipole** interactions occur between permanent dipoles of polar molecules — strong in solid/liquid, negligible in gas.',
          '**Hydrogen bonds** are a strong subset of dipole–dipole, requiring H bonded to **F, O, or N**.'
        ]
      }
    ],
    mnemonics: [
      '**MeTals make caTions (posiTive); Nonmetals make aNions (Negative).** Metals lose electrons (low ionization energy); nonmetals gain them (high electron affinity).',
      '**ΔEN ladder:** 0–0.5 = **nonpolar covalent** · 0.5–1.7 = **polar covalent** · >1.7 = **ionic** (metal + nonmetal in the 1.7–2.0 grey zone → call it ionic).',
      '**Bond order rule:** more shared pairs → **shorter, stronger, higher-energy** bond. Triple beats double beats single.',
      '**VSEPR shapes (2→6 groups): "Linear, Trigonal planar, Tetrahedral, Trigonal bipyramidal, Octahedral"** at **180°, 120°, 109.5°, (90/120/180)°, (90/180)°.**',
      '**Lone-pair squeeze:** lone pairs repel harder → bond angles shrink **109.5° (CH₄) → 107° (NH₃) → 104.5° (H₂O).**',
      '**Diatomic 7 — "Have No Fear Of Ice Cold Beer":** H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ (the only perfectly nonpolar bonds).',
      '**Hydrogen bonds: pick up the "FON" (phone)** — H must be bonded to **F, O, or N.**',
      '**IMF strength: "How Do Lizards" — H**ydrogen bonding > **D**ipole–dipole > **L**ondon dispersion.'
    ],
    keyConcepts: [
      '**Bonding is a tug-of-war set by ΔEN:** equal pull → covalent sharing; lopsided pull (>1.7) → ionic transfer. Everything in this chapter flows from electronegativity differences.',
      '**Formal charge picks the best Lewis structure:** minimize the number/magnitude of formal charges and put any negative charge on the most electronegative atom.',
      '**Electronic geometry ≠ molecular geometry:** count *all* electron pairs for electronic geometry and bond angle, but only *bonded atoms* for the molecular shape the MCAT actually tests.',
      '**A polar bond does not guarantee a polar molecule:** symmetry can cancel bond dipoles (CCl₄ nonpolar, H₂O polar). Only an all-nonpolar-bond molecule is *guaranteed* nonpolar.',
      '**Intermolecular forces set boiling points:** H-bonding (needs F/O/N) > dipole–dipole > London dispersion, with dispersion present in everything and growing with size.'
    ],
    equations: [
      { name: 'Dipole moment (Eq. 3.1)', tex: '\\vec{p} = q\\vec{d}', note: 'Vector from + to − charge; q = charge magnitude, d = separation. Measured in Debye (coulomb-meters).' },
      { name: 'Formal charge (Eq. 3.2)', tex: 'FC = V - N_{nonbonding} - \\tfrac{1}{2}N_{bonding}', note: 'V = neutral-atom valence electrons; informally: FC = valence electrons − dots − sticks.' }
    ]
  },

  questions: raw.questions
};
