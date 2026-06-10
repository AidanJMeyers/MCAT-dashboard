// Chapter 10 — Nitrogen- and Phosphorus-Containing Compounds. Re-authored to the rich-formatting quality bar.
// Figures, questions, and titles are reused from ch10.json (already-correct extraction);
// the recap/detail markdown, goals, tables, callouts, and keyReview are authored here from ch10.md.
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 10,
  title: 'Nitrogen- & Phosphorus-Containing Compounds',
  subtitle: 'Amino acids, peptides & proteins · synthesis of α-amino acids · phosphorus-containing compounds',

  blocks: [
    /* ─────────────── 10.1 Amino Acids, Peptides, and Proteins ─────────────── */
    {
      id: 's1', num: '10.1', title: 'Amino Acids, Peptides, and Proteins',
      goals: [
        'Identify the functional groups that make amino acids amphoteric',
        'Recall the mechanisms for forming and cleaving peptide bonds',
        'Explain why the C–N bond of an amide is planar',
        'Recall the unique properties of glycine'
      ],
      images: [{ src: fig(0, 4).src, alt: fig(0, 4).alt, caption: 'Figure 10.1 — Amino acid structure: an α-carbon bearing an amino group, a carboxyl group, an H, and a variable R side chain.' }],
      recap: `
- **Amino acids** = an **amino group** ($-\\text{NH}_2$) + a **carboxyl group** ($-\\text{COOH}$) on a single **α-carbon**, plus an **H** and a variable **R group**.
- The α-carbon is a **chiral center** in *every* amino acid **except glycine** (R = H). All eukaryotic amino acids are **L-isomers** with **(S)** config — **except cysteine, which is (R)**.
- Amino acids are **amphoteric** (acid *and* base) → exist as a **zwitterion** (dipolar ion) at neutral pH.
- **20 amino acids → 5 classes**: nonpolar nonaromatic, aromatic, polar, acidic (−), basic (+).
- **Peptide bonds** form by **condensation** (lose $\\text{H}_2\\text{O}$); cleaved by **hydrolysis** (strong acid/base). The **C–N amide bond is planar** with partial double-bond character from **resonance**.
`,
      detail: `
#### Structure of an amino acid
Every amino acid is built on a single **α-carbon** carrying **four** substituents:

- an **amino group** ($-\\text{NH}_2$)
- a **carboxyl group** ($-\\text{COOH}$)
- a **hydrogen atom**
- a variable **side chain** — the **R group**

Because the α-carbon bears four *different* groups, it is a **chiral (stereogenic) center**.

##### Glycine — the lone exception
**Glycine** is the simplest amino acid: its R group is just a **hydrogen atom**. With two H's on the α-carbon, glycine is **achiral** and therefore **not optically active** — the only amino acid for which this is true.

:::keyconcept
All naturally occurring eukaryotic amino acids are **L-isomers** and, by convention, are drawn in a **Fischer projection with the amino group on the left**. L-amino acids have **(S)** configuration — **except cysteine**, which is **(R)** because the **sulfur** in its R group reshuffles the priority order.
:::

#### Amphoterism and the zwitterion

![Figure 10.3 — Zwitterion: amino acids carry both charges at neutral pH.](${fig(0, 5).src})

Amino acids are **amphoteric** — they act as **both acids and bases**:

- the **amino group** can be **protonated** → takes on a **positive** charge ($-\\text{NH}_3^+$)
- the **carboxyl group** can be **deprotonated** → takes on a **negative** charge ($-\\text{COO}^-$)

In solution, the molecule carries **both** charges at once, forming a **dipolar ion** or **zwitterion**. How it behaves tracks the **pH**:

| Environment | Dominant form | Net charge |
|---|---|---|
| **Strongly acidic** | fully **protonated** ($-\\text{NH}_3^+$, $-\\text{COOH}$) | **+** |
| **Neutral** | **zwitterion** ($-\\text{NH}_3^+$, $-\\text{COO}^-$) | **0** (dipolar) |
| **Strongly basic** | fully **deprotonated** ($-\\text{NH}_2$, $-\\text{COO}^-$) | **−** |

:::bridge
Amino acids are amphoteric **just like water** — both act as acid *and* base. The full acid–base treatment (and amino acid titration curves) lives in **Chapter 1 of MCAT Biochemistry Review**.
:::

#### The 20 amino acids — five R-group classes
Beyond the shared zwitterionic backbone, each amino acid's behavior is set by its **R group**. The 20 proteinogenic amino acids sort into **five** categories:

| Class | Members | Key trait |
|---|---|---|
| **Nonpolar, nonaromatic** | **glycine, alanine, valine, leucine, isoleucine, methionine, proline** | Saturated-hydrocarbon side chains; **hydrophobic** → buried in protein interior. **Methionine** has **sulfur**; **proline** is **cyclic** (a secondary amine). |
| **Aromatic** | **tryptophan, phenylalanine, tyrosine** | Aromatic rings; also **hydrophobic** → interior. |
| **Polar** | **serine, threonine, asparagine, glutamine, cysteine** | Terminal **O, N, or S**; **hydrophilic** → H-bond with water at the surface. |
| **Negatively charged (acidic)** | **aspartic acid, glutamic acid** | Terminal **carboxylate** ($-\\text{COO}^-$) in R group. |
| **Positively charged (basic)** | **arginine, lysine, histidine** | Protonated **amino group** in R group. |

:::keyconcept
**Polar, acidic, and basic** amino acids are **hydrophilic** → on the **protein surface**, H-bonding with water. **Nonpolar nonaromatic + aromatic** are **hydrophobic** → sequestered in the **interior**.
:::

:::mnemonic
**Sulfur lives in two amino acids:** **C**ysteine and **M**ethionine — "**C**ome **M**eet sulfur." Cysteine's sulfur forms **disulfide bridges**; methionine's sits in the chain.
:::

#### Peptide bonds: formation and cleavage

![Figure 10.4 — Peptide bond formation (condensation) and cleavage (hydrolysis).](${fig(0, 6).src})

- **Formation:** amino acids join by a **condensation (dehydration) reaction** — a molecule of $\\text{H}_2\\text{O}$ is lost as the bond forms. The products are **polypeptides**, the base unit of **proteins**.
- **Cleavage:** the reverse is **hydrolysis** of the peptide bond, catalyzed by **strong acid or base**.
- **Polypeptides** are chains of many amino acids; **proteins** are large, **folded, functional** polypeptides.

#### Why the amide C–N bond is planar

![Figure 10.5 — Resonance in the peptide bond gives the C–N bond partial double-bond character.](${fig(0, 7).src})

Like other carbonyl groups, the **amide** has **two resonance structures**. The true bond is a **hybrid**, giving the **C–N bond partial double-bond character**:

- partial double-bond character → **sp² character** → **planar** geometry
- this **restricts rotation** about the C–N bond, adding **rigidity and stability** to the protein backbone
- the **single bonds on either side** of the peptide bond still permit **free rotation**

:::keyconcept
Rotation is limited around the **peptide bond** because **resonance** gives the **C–N bond partial double-bond character** — so it behaves like a planar, sp²-hybridized bond.
:::
`
    },

    /* ─────────────────── 10.2 Synthesis of α-Amino Acids ─────────────────── */
    {
      id: 's2', num: '10.2', title: 'Synthesis of α-Amino Acids',
      goals: [
        'Recall the required reactants and product types for the Strecker and Gabriel synthesis reactions',
        'Identify the reaction types found in the Strecker and Gabriel synthesis reactions'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 10.6 — Strecker synthesis, Step 1: an aldehyde + ammonia + cyanide yields an aminonitrile.' }],
      recap: `
- **Strecker synthesis:** **aldehyde** + **$\\text{NH}_4\\text{Cl}$** + **KCN**, then **$\\text{H}_2\\text{O}$** → amino acid. Goes through an **imine** then an **aminonitrile**; reactions = **condensation → nucleophilic addition → hydrolysis**.
- **Gabriel synthesis:** **potassium phthalimide** + **diethyl bromomalonate** + an **alkyl halide**, then **hydrolysis** + **decarboxylation** → amino acid. Reactions = **two $S_N2$**, **hydrolysis**, **decarboxylation**.
- **Both start from a planar reactant** → nucleophile attacks either face → **racemic** (optically inactive) product.
`,
      detail: `
In vivo, amino acid synthesis uses a huge variety of mechanisms. In the **lab**, two standardized routes dominate the MCAT: **Strecker** and **Gabriel**.

#### Strecker synthesis
Start with an **aldehyde**, **ammonium chloride ($\\text{NH}_4\\text{Cl}$)**, and **potassium cyanide (KCN)**.

##### Step 1 — build the aminonitrile
1. The **carbonyl oxygen is protonated**, raising the **electrophilicity** of the carbonyl carbon.
2. **Ammonia** attacks the carbonyl carbon → forms an **imine** (loss of water = condensation).
3. The imine carbon is also electrophilic, so the **cyanide anion ($\\text{CN}^-$)** adds → installs a **nitrile** ($-\\text{C}\\equiv\\text{N}$).
4. Product = an **aminonitrile** (an amino group **and** a nitrile group on the same carbon).

:::mnemonic
**Ni*tri*les** have a **tri**ple bond between **n**itrogen and **c**arbon ($-\\text{C}\\equiv\\text{N}$).
:::

##### Step 2 — hydrolyze to the amino acid

![Figure 10.7 — Strecker synthesis, Step 2: the aminonitrile is hydrolyzed to the amino acid.](${fig(1, 1).src})

1. The **nitrile nitrogen is protonated** (just like protonating a carbonyl O), raising the electrophilicity of the nitrile carbon.
2. **Water** attacks → a carbon bearing both **imine** and **hydroxyl** groups.
3. A **second equivalent of water** attacks the imine → a **carbonyl** forms, ejecting **ammonia** and creating the **carboxylic acid**.
4. Run in **aqueous acid**, **accelerated by heat**.

The starting material is a **planar carbonyl**, so nucleophiles attack from **either side** equally → the product is a **racemic mixture** of L- and D-amino acids.

| Strecker | Detail |
|---|---|
| **Reactants** | **aldehyde · $\\text{NH}_4\\text{Cl}$ · KCN · $\\text{H}_2\\text{O}$** |
| **Intermediates** | imine → **aminonitrile** |
| **Reaction types** | **condensation** → **nucleophilic addition** → **hydrolysis** |
| **Stereochemistry** | **racemic** (planar intermediate) |

#### Gabriel (malonic-ester) synthesis

![Figure 10.8 — Gabriel synthesis: phthalimide and diethyl bromomalonate via two SN2 reactions, hydrolysis, and decarboxylation.](${fig(1, 2).src})

1. **$S_N2$ #1:** **Potassium phthalimide** is acidic and exists as a **nucleophilic anion**. It attacks the **secondary carbon** of **diethyl bromomalonate** (bromide = leaving group) → a **phthalimidomalonic ester**. The phthalimide's **bulk** sterically blocks multiple substitutions.
2. **$S_N2$ #2:** In base, the **α-carbon between the two carbonyls** is **deprotonated**; the resulting nucleophile attacks an **alkyl halide (bromoalkane)** → adds the **R group**.
3. **Hydrolysis:** strong **base + heat** removes the phthalimide as **phthalic acid** (two $-\\text{COOH}$) and converts the **esters → carboxylic acids** (an α-amino **dicarboxylic acid**, a 1,3-dicarbonyl).
4. **Decarboxylation:** **acid + heat** removes one $-\\text{COOH}$ as **$\\text{CO}_2$** → the finished **amino acid**.

Like Strecker, Gabriel begins with a **planar molecule** → the product is a **racemic mixture**.

| Gabriel | Detail |
|---|---|
| **Reactants** | **potassium phthalimide · diethyl bromomalonate · alkyl halide** (acid/base only as catalysts) |
| **Reaction types** | **two $S_N2$** → **hydrolysis** → **decarboxylation** |
| **Stereochemistry** | **racemic** (planar intermediate) |

:::keyconcept
Both the **Strecker** and **Gabriel** syntheses run through **planar intermediates**, so they always yield a **racemic mixture** of L- and D-amino acids → the product solution is **optically inactive**.
:::

:::mnemonic
**Gabriel = "Big bouncer phthalimide."** The bulky phthalimide nucleophile is so big it **only lets one group in** ($S_N2$ once at that carbon), preventing over-alkylation — exactly why we don't just use ammonia directly.
:::
`
    },

    /* ───────────────── 10.3 Phosphorus-Containing Compounds ───────────────── */
    {
      id: 's3', num: '10.3', title: 'Phosphorus-Containing Compounds',
      goals: [
        'Recognize the traits that make inorganic phosphate a useful molecule for energy transfer',
        'Explain why phosphoric acids are good buffers',
        'Recall what makes a molecule an organic phosphate'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 10.9 — Phosphodiester bond linking the sugars of the DNA backbone.' }],
      recap: `
- **Phosphoric acid ($\\text{H}_3\\text{PO}_4$)** carries the **high-energy bonds** of **ATP**; biochemically called a **phosphate group** / **inorganic phosphate ($P_i$)**.
- It is **triprotic** — three pKa values: **2.15, 7.20, 12.32** — spanning nearly the whole pH scale → an **excellent buffer**. At physiological **pH 7.4**, **$\\text{H}_2\\text{PO}_4^-$** and **$\\text{HPO}_4^{2-}$** coexist in near-equal amounts.
- **Organic phosphate** = a **phosphate bonded to a carbon-containing molecule** (ATP, GTP, DNA).
- DNA's backbone uses **phosphodiester bonds**; chain extension releases **pyrophosphate ($PP_i$)**, which hydrolyzes to **two $P_i$**.
- Phosphate bonds are **high-energy**: **charge–charge repulsion** between adjacent groups + **resonance stabilization** of the released phosphate.
`,
      detail: `
#### Inorganic phosphate and energy transfer
**Phosphoric acid** is one of the most important molecules in biochemistry — it forms the **high-energy bonds** that carry energy in **adenosine triphosphate (ATP)**.

In a biochemical context phosphoric acid is called a **phosphate group** or **inorganic phosphate**, denoted **$P_i$**. At physiological pH, $P_i$ is a mixture of:

- **hydrogen phosphate**, $\\text{HPO}_4^{2-}$
- **dihydrogen phosphate**, $\\text{H}_2\\text{PO}_4^-$

##### Why phosphate bonds are "high-energy"
Two effects make cleaving a phosphate (or pyrophosphate) bond release a large amount of energy:

- **Electrostatic repulsion** — adjacent phosphate groups on a nucleotide triphosphate are all **negatively charged** and push apart.
- **Resonance stabilization** — phosphate can spread up to **three negative charges** over its oxygens, stabilizing the released product.

#### Phosphorus in DNA: phosphodiester bonds & pyrophosphate

![Figure 10.10 — Pyrophosphate anion ($PP_i$), the ester dimer of phosphate released during DNA synthesis.](${fig(2, 1).src})

- Phosphorus sits in the **DNA backbone** as **phosphodiester bonds** linking the **sugars** of adjacent nucleotides.
- When **DNA polymerase** adds a nucleotide, it releases an **ester dimer of phosphate** — **pyrophosphate ($PP_i$)**.
- **Hydrolysis of $PP_i$** provides the **energy** that drives formation of the new phosphodiester bond.
- $PP_i$ is **unstable in water** and is hydrolyzed to **two molecules of inorganic phosphate**, which are then **recycled** into ATP and other high-energy bonds.

:::bridge
DNA replication is high-yield: nucleotide **triphosphates** are added to the growing daughter strand with release of **pyrophosphate ($PP_i$)**. Full coverage is in **Chapter 6 of MCAT Biochemistry Review**.
:::

#### Organic vs. inorganic phosphate
**Nucleotides** — **ATP**, **GTP**, and the nucleotides in **DNA** — are **organic phosphates** because the **phosphate group is bonded to a carbon-containing molecule**.

| Term | Definition | Examples |
|---|---|---|
| **Inorganic phosphate ($P_i$)** | Free phosphate, **no carbon**; a buffered $\\text{H}_2\\text{PO}_4^-$/$\\text{HPO}_4^{2-}$ mix | $\\text{HPO}_4^{2-}$, $\\text{H}_2\\text{PO}_4^-$ |
| **Pyrophosphate ($PP_i$)** | **Ester dimer** of two phosphates; released in DNA synthesis | $\\text{P}_2\\text{O}_7^{4-}$ |
| **Organic phosphate** | Phosphate **bonded to a carbon** skeleton | **ATP, GTP, DNA** |

#### Phosphoric acid as a buffer
Phosphoric acid is **triprotic** — it has **three acidic hydrogens**, each with its own **pKa**. It steps down through four forms as pH rises:

$$\\text{H}_3\\text{PO}_4 \\;\\rightleftharpoons\\; \\text{H}_2\\text{PO}_4^- \\;\\rightleftharpoons\\; \\text{HPO}_4^{2-} \\;\\rightleftharpoons\\; \\text{PO}_4^{3-}$$

| Deprotonation | Species formed | Predominates in | pKa |
|---|---|---|---|
| (start) | **$\\text{H}_3\\text{PO}_4$** (phosphoric acid) | strongly acidic | — |
| 1st H lost | **$\\text{H}_2\\text{PO}_4^-$** (dihydrogen phosphate) | mildly acidic | **2.15** |
| 2nd H lost | **$\\text{HPO}_4^{2-}$** (hydrogen phosphate) | weakly basic | **7.20** |
| 3rd H lost | **$\\text{PO}_4^{3-}$** (phosphate) | strongly basic | **12.32** |

Because **pKa₂ = 7.20** sits right at physiological **pH 7.4**, **$\\text{H}_2\\text{PO}_4^-$** and **$\\text{HPO}_4^{2-}$** are present in **nearly equal proportions** in the body — the basis of the body's **phosphate buffer system**.

:::keyconcept
**Phosphoric acid is an excellent buffer** because its **three pKa values (2.15, 7.20, 12.32)** span nearly the **entire pH scale**, so it can pick up or release protons across a wide pH range.
:::

:::mnemonic
**Phosphoric pKa ladder ≈ "2 · 7 · 12":** roughly **5 units apart**, marching from strongly acidic to strongly basic. The middle one (**7.2**) is the body's buffer — it brackets physiological pH 7.4.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Amino Acids, Peptides, and Proteins',
        points: [
          'The **α-carbon** binds four groups: an **amino group**, a **carboxyl group**, an **H**, and an **R group**. It is a **chiral stereocenter in all amino acids except glycine**.',
          'All eukaryotic amino acids are **L-amino acids** with **(S)** stereochemistry — **except cysteine, which is (R)**.',
          'Amino acids are **amphoteric**: acidity from the **carboxyl group**, basicity from the **amino group**. In neutral solution they exist as **zwitterions**.',
          'R-group classes: **nonpolar nonaromatic** (Gly, Ala, Val, Leu, Ile, Pro, Met), **aromatic** (Trp, Phe, Tyr), **polar** (Ser, Thr, Asn, Gln, Cys), **acidic** (Asp, Glu), **basic** (Arg, Lys, His).',
          'Nonpolar/aromatic side chains are **hydrophobic** (protein interior); polar/acidic/basic are **hydrophilic** (surface).',
          '**Peptide bonds** form by **condensation**, cleaved by **hydrolysis** (strong acid/base). **Resonance** gives the **C–N bond partial double-bond character** → planar, restricted rotation. **Proteins** are large, folded, functional polypeptides.'
        ]
      },
      {
        section: 'Synthesis of α-Amino Acids',
        points: [
          '**Strecker synthesis:** an **aldehyde** + **$\\text{NH}_4\\text{Cl}$** + **KCN** → **aminonitrile** (via an imine); **two equivalents of water** hydrolyze it to the **amino acid**.',
          '**Gabriel synthesis:** **potassium phthalimide** attacks **diethyl bromomalonate**, then an **alkyl halide** ($S_N2$); **hydrolysis** gives **phthalic acid** + a **1,3-dicarbonyl**, and **decarboxylation** removes one $-\\text{COOH}$ → the **amino acid**.',
          'Reaction types — Strecker: **condensation → nucleophilic addition → hydrolysis**; Gabriel: **two $S_N2$ → hydrolysis → decarboxylation**.',
          'Both begin from **planar** reactants → **racemic** (optically inactive) products.'
        ]
      },
      {
        section: 'Phosphorus-Containing Compounds',
        points: [
          '**Inorganic phosphate ($P_i$)** at physiological pH is a buffered mix of **$\\text{HPO}_4^{2-}$** and **$\\text{H}_2\\text{PO}_4^-$**.',
          'DNA uses **phosphodiester bonds**; their formation releases **pyrophosphate ($PP_i$)**, which hydrolyzes to **two $P_i$**.',
          'Phosphate bonds are **high-energy** from **charge–charge repulsion** of adjacent groups + **resonance stabilization** of phosphate.',
          '**Organic phosphates** are carbon-containing molecules bearing phosphate groups — most notably **nucleotide triphosphates (ATP, GTP)** and **DNA**.',
          '**Phosphoric acid** has **three hydrogens, each with a unique pKa (2.15, 7.20, 12.32)** → buffers over a **wide pH range**.'
        ]
      }
    ],
    mnemonics: [
      '**Sulfur amino acids — "Come Meet sulfur":** **C**ysteine + **M**ethionine are the only two. Cysteine makes **disulfide bridges**; methionine just carries sulfur in its chain.',
      '**Glycine is the odd one out:** R = H → **achiral**, **not optically active**, the only amino acid with no L/D enantiomers.',
      '**Cysteine breaks the rule:** all eukaryotic amino acids are **(S)** *except* cysteine, which is **(R)** — the **sulfur** bumps it up the priority order.',
      '**Nitriles = triple:** ni-**TRI**-les have a **TRI**ple bond between N and C ($-\\text{C}\\equiv\\text{N}$).',
      '**Strecker vs. Gabriel start clean, end racemic:** both run through a **planar** intermediate, so the nucleophile hits **either face** → **optically inactive** product every time.',
      '**Gabriel = bulky bouncer:** the giant **phthalimide** nucleophile blocks over-alkylation (one $S_N2$ at that carbon), which is why it beats plain ammonia.',
      '**Phosphoric pKa ladder "2 · 7 · 12":** three pKa values ~5 units apart; the middle (**7.2**) brackets physiological pH 7.4 → the body\'s **phosphate buffer**.',
      '**$PP_i$ "pyro" = energy:** breaking **pyrophosphate** powers DNA chain growth; it falls apart into **two $P_i$** to be recycled.'
    ],
    keyConcepts: [
      '**Amphoterism = the defining amino acid trait:** the **carboxyl group** donates protons (acid) and the **amino group** accepts them (base), so the molecule is a **zwitterion** at neutral pH and its charge tracks pH.',
      '**Resonance makes the peptide bond planar:** partial **C–N double-bond character** = **sp² geometry** → restricted rotation and a rigid, stable protein backbone (the adjacent single bonds still rotate freely).',
      '**Lab amino acid synthesis is always racemic:** Strecker and Gabriel both pass through **planar** intermediates open to attack on either face — no chiral preference.',
      '**Phosphate is biology\'s energy currency:** triprotic phosphoric acid buffers across the whole pH scale, while **charge repulsion + resonance** make phosphoanhydride bonds (ATP, $PP_i$) **high-energy**.'
    ],
    equations: [
      { name: 'Phosphoric acid — 1st pKa', tex: '\\text{H}_3\\text{PO}_4 \\rightleftharpoons \\text{H}_2\\text{PO}_4^- + \\text{H}^+ \\quad (\\text{p}K_{a1} = 2.15)', note: 'Phosphoric acid → dihydrogen phosphate; predominates in mildly acidic solution.' },
      { name: 'Phosphoric acid — 2nd pKa', tex: '\\text{H}_2\\text{PO}_4^- \\rightleftharpoons \\text{HPO}_4^{2-} + \\text{H}^+ \\quad (\\text{p}K_{a2} = 7.20)', note: 'pKa₂ ≈ physiological pH 7.4 → these two forms coexist in nearly equal amounts in the body.' },
      { name: 'Phosphoric acid — 3rd pKa', tex: '\\text{HPO}_4^{2-} \\rightleftharpoons \\text{PO}_4^{3-} + \\text{H}^+ \\quad (\\text{p}K_{a3} = 12.32)', note: 'Hydrogen phosphate → phosphate; predominates in strongly basic solution.' },
      { name: 'Pyrophosphate hydrolysis', tex: 'PP_i + \\text{H}_2\\text{O} \\rightarrow 2\\,P_i', note: 'Drives DNA chain extension; the unstable pyrophosphate splits into two recyclable inorganic phosphates.' }
    ]
  },

  questions: raw.questions
};
