// Chapter 4 — Analyzing Organic Reactions. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch04.json (extraction); recap/detail markdown,
// goals, and the concept summary are authored here from scratch_ochem/ch04.md.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 4,
  title: 'Analyzing Organic Reactions',
  subtitle: 'Acids & bases · nucleophiles, electrophiles & leaving groups · oxidation–reduction · chemoselectivity · steps to problem solving',

  blocks: [
    /* ───────────────────────── 4.1 Acids and Bases ───────────────────────── */
    {
      id: 's1', num: '4.1', title: 'Acids and Bases',
      goals: [
        'Recall the importance of amphoteric species and common amphoteric molecules',
        'Describe the meaning of $pK_a$ and $pK_b$ values in relation to acid and base strength',
        'Recall common functional groups that act as acids or bases'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 4.1 — A Lewis acid–base reaction: the base donates a lone pair to form a coordinate covalent bond.' }],
      recap: `
- An **acid–base reaction** forms the **conjugate base of the acid** and the **conjugate acid of the base** — it only proceeds if the products are **weaker** (less reactive) than the reactants.
- **Lewis** = electron transfer (acid = electron *acceptor*, base = electron *donor*); **Brønsted–Lowry** = proton transfer (acid *donates* $\\text{H}^+$, base *accepts* it).
- **Amphoteric** species (e.g. **water**, bicarbonate, dihydrogen phosphate) act as *either* acid or base depending on conditions.
- **Lower (or negative) $pK_a$ = stronger acid.** Acidity *increases down* the periodic table (weaker bonds) and *increases with electronegativity*.
- **Acidic groups:** alcohols, aldehydes/ketones (α-H), carboxylic acids & derivatives. **Basic groups:** amines, amides.
`,
      detail: `
#### Two definitions you need
For the MCAT, work with the two **broad** definitions of acids and bases:

| Definition | Acid | Base | What is transferred |
|---|---|---|---|
| **Lewis** | Electron-pair **acceptor** (vacant orbital or positively polarized) — tends to be an **electrophile** | Electron-pair **donor** (has a lone pair; often an anion) — tends to be a **nucleophile** | **Electrons** (forms a coordinate covalent bond) |
| **Brønsted–Lowry** | **Proton ($\\text{H}^+$) donor** | **Proton acceptor** | **Protons** |

When a Lewis acid and base interact they form a **coordinate covalent bond** — a covalent bond in which **both** bonding electrons came from the same atom (the Lewis base).

:::keyconcept
An acid–base reaction will **only proceed** if the products that form (the conjugate base of the acid and the conjugate acid of the base) are **weaker** than the original reactants. Reactions favor the *weaker* acid and base.
:::

:::bridge
Acids and bases recur across organic chemistry, biochemistry, and general chemistry. The most extensive treatment is in *MCAT General Chemistry Review*, Chapter 10.
:::

#### Amphoteric species
Some molecules can act as **either** a Brønsted–Lowry acid or base — these are **amphoteric**.

- **Water** is the classic example:
  - As an **acid**, it donates a proton → conjugate base $\\text{OH}^-$.
  - As a **base**, it accepts a proton → conjugate acid $\\text{H}_3\\text{O}^+$.
- The role depends on the solution: water acts as a **base in acidic** solution and an **acid in basic** solution.
- Other biologically relevant amphoteric species: $\\text{Al(OH)}_3$, **bicarbonate** ($\\text{HCO}_3^-$), and **dihydrogen phosphate** ($\\text{H}_2\\text{PO}_4^-$).

#### Acid and base strength
The **acid dissociation constant ($K_a$)** measures acid strength. For $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$:

$$K_a = \\dfrac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$$

and the $pK_a$ is defined as:

$$pK_a = -\\log K_a$$

- **Lower (or negative) $pK_a$ → stronger acid;** higher $pK_a$ → more basic.
- **Strong acids:** $pK_a < -2$ (dissociate almost completely in water).
- **Weak organic acids:** $pK_a$ roughly between **−2 and 20**.

##### Two trends (and their tie-breaker)
- **Bond strength decreases down the periodic table** → acidity **increases** going down.
- **More electronegative atom → higher acidity.**
- When these trends **oppose**, **low bond strength takes precedence**.

:::expertise
For carbonyl compounds, the **α-hydrogens** deserve special note. The **α-carbon** is the carbon *adjacent* to the carbonyl. Because the **enol/enolate** form is **resonance-stabilized**, α-hydrogens are unusually **acidic** and easily lost. Enolate chemistry returns in Chapters 7–9.
:::

#### Functional groups as acids and bases
| Behave as **acids** (electrophilic targets) | Behave as **bases** (nucleophilic) |
|---|---|
| **Alcohols** | **Amines** |
| **Aldehydes & ketones** (at the α-carbon) | **Amides** |
| **Carboxylic acids** | — |
| Most **carboxylic acid derivatives** | — |

- Acidic groups readily **accept a lone pair**, so they make good targets for **basic / nucleophilic** reactants.
- The nitrogen of an **amine** forms coordinate covalent bonds by **donating** its lone pair to a Lewis acid — watch for amines in **peptide-bond** formation.

:::mnemonic
**Acids vs. bases by smell of the group:** **"OXygen pulls protons OFF"** — **O**-rich groups (al**c**ohols, al**d**ehydes, **k**etones' α-H, **c**arboxylic **a**cids) are the **acids**. **"Nitrogen Never lets go of its lone pair"** — **N**-containing **a**mines and **a**mides are the **bases**.
:::
`
    },

    /* ──────────── 4.2 Nucleophiles, Electrophiles, and Leaving Groups ──────────── */
    {
      id: 's2', num: '4.2', title: 'Nucleophiles, Electrophiles, and Leaving Groups',
      goals: [
        'Distinguish nucleophiles and electrophiles from Lewis acids and bases',
        'Compare nucleophilicity using the four main trends',
        'Describe the relationship between electrophile and leaving group in a substitution reaction',
        'Identify the traits that increase electrophilicity',
        'Recall the traits of a good leaving group'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 4.2 — Common nucleophiles: species with lone pairs or π bonds (often CHON bearing a negative charge or lone pair).' }],
      recap: `
- Almost every organic reaction is either a **redox** reaction or a **nucleophile–electrophile** reaction.
- **Nucleophile** = "nucleus-loving," lone pair / π bond, electron-rich (often negative). **Electrophile** = "electron-loving," positive or positively polarized.
- Key distinction from Lewis base/acid: **nucleophilicity & electrophilicity are KINETIC** (rates); **basicity & acidity are THERMODYNAMIC** (equilibrium).
- **4 nucleophilicity trends:** ↑ with **charge** (more negative), ↓ with **electronegativity**, ↓ with **steric bulk**, and **solvent**-dependent.
- **Good leaving groups = weak bases** (conjugate bases of strong acids, e.g. $\\text{I}^-$, $\\text{Br}^-$, $\\text{Cl}^-$); stabilized by **resonance / induction**.
- **$S_N1$:** 2-step, rate $= k[\\text{R--L}]$, carbocation, **racemic**, favors **tertiary**. **$S_N2$:** 1-step concerted, rate $= k[\\text{Nu:}][\\text{R--L}]$, **backside attack → inversion**, favors **methyl/primary**.
`,
      detail: `
#### Nucleophiles
**Nucleophiles** are *"nucleus-loving"* species with **lone pairs or π bonds** that form new bonds to electrophiles.

- Nucleophilicity and basicity look alike — **good nucleophiles tend to be good bases** — but they differ:
  - **Nucleophilicity** is based on **relative rates** of reaction with a common electrophile → a **kinetic** property.
  - **Basicity** is based on the **equilibrium position** of a reaction → a **thermodynamic** property.

:::keyconcept
On Test Day, spot most nucleophiles by looking for **CHON** (carbon, hydrogen, oxygen, nitrogen) bearing a **minus sign or a lone pair**. Nucleophiles use lone pairs or π bonds to form covalent bonds to electrophiles.
:::

##### The four nucleophilicity trends
| Factor | Effect on nucleophilicity |
|---|---|
| **Charge** | **Increases** with electron density (more negative charge) |
| **Electronegativity** | **Decreases** as electronegativity increases (atom holds electrons too tightly to share) |
| **Steric hindrance** | **Decreases** as the molecule gets bulkier |
| **Solvent** | **Protic** solvents *hinder* nucleophilicity (protonation / H-bonding); see below |

- For the **same attacking atom**, the **more basic** the nucleophile, the more reactive. This also holds *across a row*, but **not down a column** (solvent flips the trend).

##### Solvent effects — the halogen flip
The solvent is worth extra attention because it can **reverse** the halide ordering:

![Polar protic and polar aprotic solvents](${fig(1, 1).src})

| Solvent type | Nucleophilicity trend | Halide order | Why |
|---|---|---|---|
| **Polar protic** (e.g. water, alcohols) | **Increases down** the column | $\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{F}^-$ | Protons in solution **solvate / cluster around** the small basic ion. $\\text{F}^-$ (conjugate base of weak HF) is heavily protonated and can't reach the electrophile; $\\text{I}^-$ (conjugate base of strong HI) is barely bothered. |
| **Polar aprotic** (e.g. DMSO, acetone, DMF) | **Increases up** the column | $\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$ | **No protons** to get in the way → nucleophilicity tracks **basicity** directly. |

:::expertise
If **no solvent** is given on Test Day, assume the reaction is in a **polar** solvent. Polar solvents (protic or aprotic) dissolve nucleophiles and assist any electron-moving reaction. Organic chemistry is all about moving electrons, so **nonpolar** solvents are rarely used.
:::

:::keyconcept
We can't use **nonpolar** solvents in nucleophile–electrophile reactions because the reactants are **polar / charged** — they wouldn't dissolve. *Like dissolves like.*
:::

##### Ranking nucleophiles
- **Strong:** $\\text{HO}^-$, $\\text{RO}^-$, $\\text{CN}^-$, $\\text{N}_3^-$ (azide).
- **Fair:** $\\text{NH}_3$, carboxylates ($\\text{RCOO}^-$).
- **Weak / very weak:** $\\text{H}_2\\text{O}$, $\\text{ROH}$, $\\text{RCOOH}$.
- Among functional groups, **amines** make good nucleophiles.

#### Electrophiles
**Electrophiles** are *"electron-loving"* species with a **positive charge or positively polarized atom** that **accept** an electron pair from a nucleophile.

- Like nucleophiles vs. bases, **electrophilicity is kinetic** while **acidity is thermodynamic** — but in practice electrophiles almost always act as **Lewis acids**.
- **More positive charge → more electrophilic** (a **carbocation** is more electrophilic than a carbonyl carbon).

![Comparisons of electrophilicity](${fig(1, 2).src})

- The same groups that act as **acids** (alcohols, aldehydes/ketones, carboxylic acids & derivatives) also act as **electrophiles** and make good targets for nucleophilic attack.
- The **leaving group** influences electrophilicity in species **without** empty orbitals — better leaving groups make reaction more likely. If empty orbitals *are* present, the nucleophile can bond **without** displacing a leaving group.

##### Carboxylic acid derivatives — reactivity ranking
$$\\text{anhydride} > \\text{carboxylic acid} \\approx \\text{ester} > \\text{amide}$$

- More reactive derivatives can form **less** reactive ones, **but not the reverse** — just like acid–base reactions favoring the weaker product.

#### Leaving groups
**Leaving groups** are the molecular fragments that **retain the electrons** after **heterolysis** (the opposite of coordinate covalent bond formation — both electrons go to one product).

| Trait of a **good** leaving group | Reason |
|---|---|
| **Weak base** | Stable while carrying the extra electron pair |
| **Conjugate base of a strong acid** ($\\text{I}^-$, $\\text{Br}^-$, $\\text{Cl}^-$) | These are stable, weak bases |
| Stabilized by **resonance** | Delocalizes the negative charge |
| Stabilized by **induction** (electron-withdrawing groups) | Pulls/spreads the negative charge |

- **Alkanes and hydrogen ions** almost **never** leave — they'd form very reactive, **strongly basic** anions.

:::keyconcept
Think of leaving groups and nucleophiles as **opposites**. In a substitution reaction the **weaker base (leaving group)** is replaced by the **stronger base (nucleophile)** — nucleophilic attack only proceeds when the nucleophile is **more reactive** than the leaving group.
:::

:::mnemonic
**Good leaving group = "happy to be free."** A stable, **weak base** is content holding the electrons after it leaves — so the **conjugate bases of strong acids** (I, Br, Cl) bolt for the door, while strong bases (alkanes, $\\text{H}^-$, $\\text{OH}^-$) cling on.
:::

#### Nucleophilic substitution reactions
In both **$S_N1$** and **$S_N2$**, a nucleophile bonds to a substrate carbon and a leaving group leaves.

##### $S_N1$ — unimolecular
![Mechanism of an SN1 reaction](${fig(1, 3).src})

- **Two steps:**
  1. **Rate-limiting:** the leaving group leaves → planar **carbocation**.
  2. The nucleophile attacks the carbocation → substitution product.
- **Rate $= k[\\text{R--L}]$** — first-order, depends **only on the substrate**. Anything that speeds carbocation formation speeds the reaction.
- **More substituted carbocation = more stable** (alkyl groups donate electron density) → favors **tertiary > secondary > primary**.
- The planar intermediate is attacked from **either face** → usually a **racemic mixture**.

##### $S_N2$ — bimolecular
![Mechanism of an SN2 reaction](${fig(1, 4).src})

- **One concerted step:** the nucleophile attacks **as** the leaving group leaves. "Bimolecular" because the single rate-limiting step involves **two molecules**.
- The nucleophile performs a **backside attack** → it must be **strong**, and the substrate must **not** be sterically hindered → favors **methyl / primary > secondary**; **tertiary won't react**.
- **Rate $= k[\\text{Nu:}][\\text{R--L}]$** — second-order, depends on **both** species.
- **Backside attack → inversion of configuration** ("umbrella flipping inside out"). If the nucleophile and leaving group share the same priority, this inverts **absolute configuration** ($R \\leftrightarrow S$).
- $S_N2$ is **stereospecific** — the reactant's configuration *determines* the product's configuration.

:::mnemonic
**Tell $S_N1$ from $S_N2$:** the **number** *is* the **molecularity of the rate-limiting step**. $S_N\\textbf{1}$ = **1** molecule in the slow step (substrate only) → **1**st order → loves the **1** big bulky **3°** carbon that stabilizes a carbocation. $S_N\\textbf{2}$ = **2** molecules → **2**nd order → needs **2** uncrowded (methyl/1°) sides for backside attack → **inverts** like flipping a **2**-sided umbrella.
:::
`
    },

    /* ───────────────────── 4.3 Oxidation–Reduction Reactions ───────────────────── */
    {
      id: 's3', num: '4.3', title: 'Oxidation–Reduction Reactions',
      goals: [
        'Recall common oxidizing agents and the characteristics of a good oxidizing agent',
        'Recall common reducing agents and the characteristics of a good reducing agent',
        'Order a given list of molecules from most oxidized to least oxidized'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 4.7 — Oxidation reactions and common oxidizing agents: note the recurring metal-with-many-oxygens motif.' }],
      recap: `
- **Oxidation state** = the hypothetical charge if every bond were fully ionic. For carbon, **$\\text{CH}_4$ is most reduced (−4)** and **$\\text{CO}_2$ is most oxidized (+4)**.
- **Oxidation** = ↑ oxidation state = **loss of electrons** ≈ **more bonds to O / heteroatoms**. **Reduction** = ↓ oxidation state = **gain of electrons** ≈ **more bonds to H**.
- **Oxidizing agent** gets **reduced** (accepts e⁻); high electron affinity or high oxidation state — often **metal + many oxygens** ($\\text{KMnO}_4$, $\\text{CrO}_3$, dichromate).
- **Reducing agent** gets **oxidized** (donates e⁻); low electronegativity/IE or contains **$\\text{H}^-$** — often **metal + many hydrides** ($\\text{LiAlH}_4$, $\\text{NaBH}_4$).
- **PCC stops at the aldehyde**; strong oxidants (dichromate, $\\text{CrO}_3$) take a 1° alcohol all the way to the **carboxylic acid**.
`,
      detail: `
#### Oxidation state and the carbon ladder
**Oxidation state** is the charge an atom *would* have if all bonds were completely ionic.

- In **$\\text{CH}_4$**, each H is +1 → **carbon is −4** (most **reduced** form of carbon).
- In **$\\text{CO}_2$**, each O is −2 → **carbon is +4** (most **oxidized** form of carbon).
- For a monatomic **ion**, oxidation state = the charge ($\\text{Na}^+ = +1$, $\\text{S}^{2-} = -2$).

Ranking common groups by oxidation: **carboxylic acids > aldehydes/ketones/imines > alcohols/alkyl halides/amines.**

| Definition | Direction | Electron change | Organic shortcut |
|---|---|---|---|
| **Oxidation** | **Increase** in oxidation state | **Loss** of electrons | **More** bonds to O / heteroatoms (fewer to H) |
| **Reduction** | **Decrease** in oxidation state | **Gain** of electrons | **More** bonds to H |

:::keyconcept
Organize functional groups by **"levels" of oxidation**:

- **Level 0** (no bonds to heteroatoms): **alkanes**
- **Level 1:** **alcohols, alkyl halides, amines**
- **Level 2:** **aldehydes, ketones, imines**
- **Level 3:** **carboxylic acids, anhydrides, esters, amides**
- **Level 4** (four bonds to heteroatoms): **carbon dioxide**
:::

#### Oxidizing agents and reactions
The **oxidizing agent** *accepts* electrons from another species, so it is itself **reduced**.

- **Good oxidizing agents** have:
  - a **high affinity for electrons** ($\\text{O}_2$, $\\text{O}_3$, $\\text{Cl}_2$), **or**
  - an **unusually high oxidation state** ($\\text{Mn}^{7+}$ in permanganate $\\text{MnO}_4^-$; $\\text{Cr}^{6+}$ in chromate $\\text{CrO}_4^{2-}$).
- Theme: oxidizing agents often pair a **metal with many oxygen atoms**, and oxidation adds **bonds to oxygen**.

##### Alcohol oxidation — the high-yield reagent fork
| Substrate | Reagent | Product |
|---|---|---|
| **Primary alcohol** | **PCC** (pyridinium chlorochromate) — mild | **Aldehyde** (stops here) |
| **Primary alcohol** | **$\\text{CrO}_3$**, **$\\text{Na}_2\\text{Cr}_2\\text{O}_7$ / $\\text{K}_2\\text{Cr}_2\\text{O}_7$** (strong) | **Carboxylic acid** (goes all the way) |
| **Secondary alcohol** | Most oxidizing agents | **Ketone** |
| **Aldehyde** | Most oxidizing agents | **Carboxylic acid** |

:::mnemonic
**"PCC = Please Cease Conversion"** — the mild oxidant *stops* a primary alcohol at the **aldehyde**. The big chromium hammers (di**chromate**, $\\text{CrO}_3$) don't stop — they smash all the way to the **carboxylic acid**.
:::

#### Reducing agents and reactions
The **reducing agent** *donates* electrons, so it is itself **oxidized**.

- **Good reducing agents** have:
  - **low electronegativity & ionization energy** (Na, Mg, Al, Zn), **or**
  - a **hydride ion ($\\text{H}^-$)** — **metal hydrides** like $\\text{NaH}$, $\\text{CaH}_2$, $\\text{LiAlH}_4$, $\\text{NaBH}_4$.
- Theme: reducing agents often pair a **metal with many hydrides**, and reduction adds **bonds to hydrogen**.

![Reduction reactions and common reducing agents](${fig(2, 2).src})

##### Common reductions (mostly $\\text{LiAlH}_4$)
| Substrate | Product | Reagent |
|---|---|---|
| **Aldehyde** | **Primary alcohol** | reducing agent (slow without catalyst) |
| **Ketone** | **Secondary alcohol** | reducing agent |
| **Carboxylic acid** | **Primary alcohol** | $\\text{LiAlH}_4$ |
| **Ester** | **Pair of alcohols** | $\\text{LiAlH}_4$ |
| **Amide** | **Amine** | $\\text{LiAlH}_4$ |

:::bridge
Many common oxidizing and reducing agents are **transition metals** — their **low ionization energies** and **d-orbitals** let them adopt many oxidation states and give up or accept electrons easily. See *MCAT General Chemistry Review*, Chapter 2.
:::
`
    },

    /* ───────────────────────── 4.4 Chemoselectivity ───────────────────────── */
    {
      id: 's4', num: '4.4', title: 'Chemoselectivity',
      goals: [
        'Describe the types of compounds that are most likely to undergo $S_N1$ and $S_N2$ reactions',
        'Identify the two reactive centers of a carbonyl-containing compound'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 4.9 — Enol and enolate forms of a ketone: deprotonating the acidic α-hydrogen yields a strong nucleophile.' }],
      recap: `
- **Chemoselectivity** = the *preferential* reaction of one functional group in the presence of others.
- Both **redox** and **nucleophile–electrophile** reactions hit the **highest-priority (most oxidized) functional group** first.
- Nucleophilic target order: **carboxylic acids & derivatives > aldehydes/ketones > alcohols/amines**; **aldehydes > ketones** (less steric hindrance).
- **Two reactive centers of a carbonyl compound:** the **electrophilic carbonyl carbon** and the **acidic α-hydrogens** (→ enolate, a strong nucleophile).
- **$S_N1$ prefers 3° > 2° > 1°** (carbocation stability); **$S_N2$ prefers methyl/1° > 2°, no 3°** (steric hindrance). **Protecting groups** (acetals/ketals, *tert*-butyl ethers) mask a group from reacting.
`,
      detail: `
#### Reactive locations
The reactive site depends on the chemistry occurring, but both major reaction classes converge on the **highest-priority** group:

- A **redox reagent** acts on the **highest-priority functional group** (e.g. a reducing agent hits a **carboxylic acid** over an alcohol).
- A **nucleophile** seeks the best electrophile → again the **most oxidized carbon** (more electronegative neighbors → larger partial positive charge).

**Nucleophilic target priority:**
$$\\text{carboxylic acids \\& derivatives} > \\text{aldehydes/ketones} > \\text{alcohols/amines}$$

- **Aldehydes > ketones** toward nucleophiles — aldehydes have **less steric hindrance** (and less electron donation onto the carbonyl carbon).

:::keyconcept
**The more oxidized the functional group, the more reactive it is** — in *both* nucleophile–electrophile and oxidation–reduction reactions.
:::

#### The two reactive centers of a carbonyl
A carbonyl-containing compound (carboxylic acids & derivatives, aldehydes, ketones) has **two** classic reactive sites:

1. **The carbonyl carbon** — oxygen's electronegativity gives it a **partial positive charge** → **electrophilic** target for nucleophiles.
2. **The α-hydrogens** — much more **acidic** than ordinary C–H bonds because the **enol** form is resonance-stabilized. A strong base deprotonates them to form an **enolate**, which becomes a **strong nucleophile** (enabling **alkylation** if good electrophiles are present).

#### Substrate carbon in substitution
The second major reactive site is the **substrate carbon** in substitution reactions, and the preference is **opposite** between the two mechanisms:

| Mechanism | Main barrier | Preferred substrate |
|---|---|---|
| **$S_N1$** | **Carbocation stability** | **tertiary > secondary > primary** |
| **$S_N2$** | **Steric hindrance** | **methyl / primary > secondary**; **tertiary won't react** |

#### Steric protection
**Steric hindrance** prevents reaction at a site because of the **size of substituent groups** (e.g. $S_N2$ won't occur on tertiary substrates). This can be exploited as a synthetic tool.

- Bulky groups block the nucleophile from the most reactive electrophile, steering it to **another region**.
- **Protecting groups** temporarily mask a reactive site:
  - To reduce an **ester** in a molecule that also has a **ketone/aldehyde**, first convert the ketone/aldehyde to a nonreactive **acetal or ketal**, run the reduction, then remove the protecting group.
  - **Alcohols** can be protected as **tert-butyl ethers**.

![Protection of a ketone by conversion to an acetal](${fig(3, 2).src})

:::bridge
An **aldehyde** + a diol (or 2 equivalents of alcohol) → an **acetal**; a **ketone** + a diol → a **ketal**. Acetal/ketal chemistry is detailed in *MCAT Organic Chemistry Review*, Chapter 6.
:::

:::mnemonic
**"Most oxidized goes first."** Whether a reagent is a nucleophile or a redox agent, it pounces on the **most oxidized** carbon. To save a vulnerable group, **cap it** (ketone → ketal; alcohol → *tert*-butyl ether) so the reagent has to look **elsewhere**.
:::
`
    },

    /* ──────────────────────── 4.5 Steps to Problem Solving ──────────────────────── */
    {
      id: 's5', num: '4.5', title: 'Steps to Problem Solving',
      goals: [
        'List the six steps for solving organic chemistry reactions',
        'Predict how a reaction will proceed if you are not given reaction conditions'
      ],
      recap: `
- **Six steps:** (1) **Know your nomenclature** → (2) **Identify the functional groups** → (3) **Identify the other reagents** → (4) **Identify the most reactive functional group(s)** → (5) **Identify the first step** → (6) **Consider stereospecificity/stereoselectivity**.
- **First step heuristics:** acid/base → (de)protonation; nucleophile → attacks the electrophile; oxidant/reductant → acts on the most oxidized group.
- If **no reagents** are given beyond the reactants, the **functional groups of the reactants alone** (their acid–base and nucleophile–electrophile properties) determine the outcome.
- Among competing products, the **major** one is the **more stable / less strained** (conjugation stabilizes).
`,
      detail: `
#### The six-step framework
Apply this systematically to any reaction on Test Day:

| # | Step | Ask yourself |
|---|---|---|
| **1** | **Know your nomenclature** | Which compound does this IUPAC/common name refer to? (Review Ch. 1 if shaky.) |
| **2** | **Identify the functional groups** | What groups are present? Acids or bases? How oxidized is the carbon? Any good nucleophiles, electrophiles, or leaving groups? |
| **3** | **Identify the other reagents** | Acidic/basic? A specific solvent? Good oxidizing or reducing agents? Do they suggest a reaction type? |
| **4** | **Identify the most reactive group(s)** | Usually quick — **more oxidized carbons are more reactive** to both reaction classes. Note any **protecting groups**. |
| **5** | **Identify the first step** | Acid/base → protonation/deprotonation; nucleophile → attack the electrophile; redox → act on the most oxidized group. Then trace how carbon avoids 5 bonds (a leaving group leaves, or a π bond opens). |
| **6** | **Consider stereospecificity / stereoselectivity** | Does the reactant's configuration force a product configuration ($S_N2$)? Is one product favored by stability? |

:::expertise
Don't just nod along with mechanisms — **get involved**. At each step ask how the trends and the six problem-solving steps play out.
:::

##### Stereospecific vs. stereoselective
- **Stereospecific:** the reactant's configuration **necessarily determines** the product's configuration (e.g. **$S_N2$ inversion**).
- **Stereoselective:** one product configuration **forms preferentially** because of product stability.
- With more than one possible product, the **major product** is the **more stable / less strained** one. More **angle, torsional, or nonbonded strain** = less likely; **conjugation** (alternating single/multiple bonds) = significantly more stable.

#### Worked examples (the decision-making, not memorization)
##### Reaction 1 — protection, reduction, deprotection
**Ethyl 5-oxohexanoate** is treated with (1) **1,2-ethanediol + p-toluenesulfonic acid** in benzene, then (2) **$\\text{LiAlH}_4$ / THF**, followed by a **heated acidic workup**.

- The molecule has an **alkane backbone, a ketone, and an ester** — both carbonyl carbons are electrophilic, both can be reduced, and acidic α-H are present.
- **Step 1:** the **diol** is a nucleophile (lone pairs on the hydroxyl oxygens) and a classic **protecting group** for ketones → the **ketone is masked as a cyclic diether (ketal)**.
- **Step 2:** with the ketone protected, **$\\text{LiAlH}_4$** (strong reducer) reduces only the **ester → alcohol**.
- **Step 3:** the **acidic workup removes the protecting group**, regenerating the original **ketone**.
- No stereoselectivity to consider.

##### Reaction 2 — oxidation
**Ethanol** in **acidic dichromate**:

- Primary alcohol + a **strong oxidant** (dichromate) → all the way to the **carboxylic acid**.
- The aldehyde is a *trap* — only **PCC**-type reagents stop there. So ethanol → **ethanoic (acetic) acid**.

##### Reaction 3 — peptide bond
**2-amino-3-hydroxypropanoic acid (serine)** + **2,6-diaminohexanoic acid (lysine)** in aqueous solution:

- Both have a **carboxylic acid** (acidic H + electrophilic carbonyl C) and a **nucleophilic amino group**.
- First step: the **amino group attacks the electrophilic carbonyl carbon**. Carbon can't have five bonds, so the carbonyl opens; the poor $\\text{OH}^-$ leaving group is converted to **water** (a great leaving group) by proton rearrangements, then the carbonyl reforms and **kicks off water** → a **peptide bond**.
- The hydroxyl on serine doesn't react — the **carboxylic acid is far more oxidized** (more reactive). The amino group **closer to the carbonyl** reacts because the product is **resonance-stabilized**.

:::keyconcept
If **no reaction conditions** are listed, the outcome is dictated by the **properties of the reactants' own functional groups** — their acid–base and nucleophile–electrophile behavior.
:::

:::mnemonic
**Six steps → "Name Functional Reagents, React First Stereochemically":** **N**omenclature · **F**unctional groups · **R**eagents · most **R**eactive group · **F**irst step · **S**tereochemistry. (*Two R's: the groups on the molecule, then the most reactive one.*)
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Acids and Bases',
        points: [
          '**Lewis acids** are electron *acceptors* (vacant orbitals / positively polarized); **Lewis bases** are electron *donors* (lone pair, often anions).',
          '**Brønsted–Lowry acids** donate protons; **Brønsted–Lowry bases** accept protons.',
          '**Amphoteric** molecules act as acid *or* base depending on conditions — **water** is the classic example (also bicarbonate, dihydrogen phosphate).',
          '**$K_a$** is the dissociation equilibrium constant for $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$; **$pK_a = -\\log K_a$**, and a lower (or negative) $pK_a$ means a stronger acid.',
          '$pK_a$ **decreases down** the periodic table and **with increasing electronegativity** (low bond strength wins ties).',
          '**Acidic groups:** alcohols, aldehydes/ketones, carboxylic acids & derivatives (α-hydrogens are acidic). **Basic groups:** amines, amides.'
        ]
      },
      {
        section: 'Nucleophiles, Electrophiles, and Leaving Groups',
        points: [
          '**Nucleophiles** are electron-rich (lone pairs / π bonds, often negative); nucleophilicity is **kinetic**, basicity is **thermodynamic**.',
          '**Charge, electronegativity, steric hindrance, and solvent** all affect nucleophilicity; **amines** are common organic nucleophiles.',
          '**Electrophiles** are positive or positively polarized; **more positive = more electrophilic**. Alcohols, aldehydes/ketones, carboxylic acids & derivatives can act as electrophiles.',
          '**Leaving groups** retain the electrons after heterolysis; the best are **weak bases** (conjugate bases of strong acids) stabilized by **resonance/induction**. Alkanes and $\\text{H}^+$ are almost never leaving groups.',
          '**$S_N1$:** two steps; leaving group leaves first → **carbocation**; nucleophile attacks the planar ion from either side → **racemic mixture**; prefers **more substituted** carbons; **rate $= k[\\text{R--L}]$**.',
          '**$S_N2$:** one concerted step; **backside attack → inversion** (changes $R/S$ if priorities match); prefers **less substituted** carbons; **rate $= k[\\text{Nu:}][\\text{R--L}]$**.'
        ]
      },
      {
        section: 'Oxidation–Reduction Reactions',
        points: [
          '**Oxidation state** = charge if all bonds were ionic. **$\\text{CH}_4$** is the most reduced carbon; **$\\text{CO}_2$** the most oxidized.',
          'Oxidation order: **carboxylic acids/derivatives > aldehydes/ketones/imines > alcohols/alkyl halides/amines**.',
          '**Oxidation** ↑ oxidation state (assisted by oxidizing agents, which are *reduced*); good oxidants have high electron affinity or high oxidation state and often contain a **metal + many oxygens**.',
          '**Primary alcohol → aldehyde** with **PCC**, or **→ carboxylic acid** with stronger oxidants ($\\text{CrO}_3$, $\\text{Na}_2\\text{Cr}_2\\text{O}_7$/$\\text{K}_2\\text{Cr}_2\\text{O}_7$); **secondary alcohol → ketone**; **aldehyde → carboxylic acid**.',
          '**Reduction** ↓ oxidation state (assisted by reducing agents, which are *oxidized*); good reductants have low electronegativity/IE or contain a **metal + many hydrides**.',
          '**$\\text{LiAlH}_4$** reduces aldehydes/ketones/carboxylic acids → alcohols, amides → amines, and esters → a pair of alcohols.'
        ]
      },
      {
        section: 'Chemoselectivity',
        points: [
          'Both nucleophile–electrophile and oxidation–reduction reactions act at the **highest-priority (most oxidized)** functional group.',
          'The **two reactive centers** of a carbonyl compound are the **electrophilic carbonyl carbon** and the **acidic α-hydrogens** (→ nucleophilic enolate).',
          '**$S_N1$** favors **tertiary** carbons (carbocation stability); **$S_N2$** favors **methyl/primary** carbons (steric hindrance) and won\'t occur at tertiary carbons.',
          '**Steric hindrance** can be exploited to protect groups: **diols** protect aldehyde/ketone carbonyls (acetals/ketals); **alcohols** can be protected as **tert-butyl ethers**.'
        ]
      },
      {
        section: 'Steps to Problem Solving',
        points: [
          'The six steps: **(1) nomenclature, (2) identify functional groups, (3) identify other reagents, (4) identify most reactive group(s), (5) identify the first step, (6) consider stereochemistry.**',
          'If **no reagents** beyond the reactants are given, the **functional groups of the reactants themselves** (acid–base; nucleophile–electrophile) determine the outcome.',
          'The **major product** is the **more stable / less strained**; **conjugation** stabilizes products.'
        ]
      }
    ],
    mnemonics: [
      '**Nucleophile spotting (CHON⁻):** look for **C**arbon, **H**ydrogen, **O**xygen, or **N**itrogen with a **minus sign or lone pair** — that\'s your nucleophile.',
      '**Acids vs. bases:** **O**-rich groups (alcohols, aldehydes, ketones α-H, carboxylic acids) are the **acids**; **N**-containing **a**mines and **a**mides are the **bases**.',
      '**$S_N1$ vs. $S_N2$ = molecularity of the slow step:** $S_N\\textbf{1}$ → 1 molecule → 1st order → loves bulky **3°** (carbocation). $S_N\\textbf{2}$ → 2 molecules → 2nd order → needs open **methyl/1°** for backside attack → **inverts** like a flipped umbrella.',
      '**Good leaving group = "happy to be free":** stable **weak bases** (conjugate bases of strong acids — I, Br, Cl) leave readily; strong bases (alkanes, $\\text{H}^-$) cling on.',
      '**PCC = "Please Cease Conversion"** — stops a 1° alcohol at the **aldehyde**; the chromium hammers (dichromate, $\\text{CrO}_3$) go all the way to the **carboxylic acid**.',
      '**OIL RIG:** **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (of electrons). In ochem: oxidation adds **bonds to O**; reduction adds **bonds to H**.',
      '**Most oxidized goes first:** nucleophiles *and* redox agents attack the **most oxidized** carbon; **cap** a vulnerable group (ketone→ketal) to redirect the reagent.',
      '**Six steps — "Name Functional Reagents, React First Stereochemically":** **N**omenclature, **F**unctional groups, **R**eagents, most **R**eactive group, **F**irst step, **S**tereochemistry.'
    ],
    keyConcepts: [
      '**Kinetic vs. thermodynamic:** nucleophilicity/electrophilicity are **kinetic** (rates); basicity/acidity are **thermodynamic** (equilibrium) — the single distinction that separates these look-alike concepts.',
      '**$S_N1$ vs. $S_N2$ is the highest-yield comparison in the chapter:** opposite substrate preferences (3° vs. methyl/1°), opposite stereochemistry (racemization vs. inversion), and different rate laws ($k[\\text{R--L}]$ vs. $k[\\text{Nu:}][\\text{R--L}]$).',
      '**Reactivity follows oxidation level:** the most oxidized carbon is the most reactive toward both nucleophiles and redox agents — the unifying idea behind chemoselectivity.',
      '**Reactions favor the weaker products:** acid–base reactions, leaving-group/nucleophile swaps, and carboxylic-acid-derivative interconversions all run toward the *less reactive* (more stable) side.',
      '**Solvent flips the halides:** $\\text{I}^- > \\text{Br}^- > \\text{Cl}^- > \\text{F}^-$ in **polar protic** solvents, but $\\text{F}^- > \\text{Cl}^- > \\text{Br}^- > \\text{I}^-$ in **polar aprotic** solvents.'
    ],
    equations: [
      { name: 'Acid dissociation constant', tex: 'K_a = \\dfrac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}', note: 'Equilibrium constant for $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$; larger $K_a$ = stronger acid.' },
      { name: 'Definition of $pK_a$', tex: 'pK_a = -\\log K_a', note: 'Lower (or negative) $pK_a$ = stronger acid.' },
      { name: 'SN1 rate law', tex: '\\text{rate} = k[\\text{R--L}]', note: 'First-order; depends only on the substrate (carbocation formation is rate-limiting).' },
      { name: 'SN2 rate law', tex: '\\text{rate} = k[\\text{Nu:}][\\text{R--L}]', note: 'Second-order; concerted step involves both the nucleophile and the substrate.' }
    ]
  },

  questions: raw.questions
};
