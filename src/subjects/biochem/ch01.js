// Biochemistry Chapter 1 — Amino Acids, Peptides, and Proteins.
// Figures + verbatim questions reused from ch01.json; recap/detail markdown authored here.
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];   // -> { src, alt, caption }

export default {
  id: 1,
  title: 'Amino Acids, Peptides, and Proteins',
  subtitle: 'Amino acid structures & classes · acid–base chemistry & pI · peptide bonds · 1°–4° structure · denaturation',

  blocks: [
    /* ───────────────────── 1.1 Amino Acids Found in Proteins ───────────────────── */
    {
      id: 's1', num: '1.1', title: 'Amino Acids Found in Proteins',
      goals: [
        'Recognize common abbreviations for the amino acids (three- and one-letter)',
        'Distinguish the stereochemistry, cellular locations, and reactivity of the 20 major amino acids',
        'Classify amino acids by side-chain structure (nonpolar/aromatic/polar/acidic/basic)'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 1.1 — Amino acid structure: amino group, carboxyl group, H, and R group on the α-carbon.' }],
      recap: `
- Every **α-amino acid** = an **amino group ($-\\text{NH}_2$)**, a **carboxyl group ($-\\text{COOH}$)**, an **H**, and a unique **R group (side chain)** on the **α-carbon**. The **R group dictates chemistry and function**.
- All chiral eukaryotic amino acids are **L** (**(S)** configuration) — *except* **cysteine** is **(R)**; **glycine** is the only **achiral** one (R = H).
- Memorize the **20** by side-chain class: **nonpolar-nonaromatic, aromatic, polar, acidic (−), basic (+)**.
`,
      detail: `
#### The α-amino acid
Amino acids carry two functional groups — an **amino group ($-\\text{NH}_2$)** and a **carboxyl group ($-\\text{COOH}$)** — both bonded to the same **α-carbon**, which also bears an **H** and an **R group (side chain)** unique to each amino acid.

:::keyconcept
The **side chain (R group) determines the chemical properties** — and therefore the biological function — of each amino acid.
:::

:::bridge
The **α-carbon** is the carbon *adjacent* to the carboxyl carbon (carboxylic-acid nomenclature) — see *MCAT Organic Chemistry Review*, Ch. 8.
:::

The AAMC tests only the **20 proteinogenic α-amino acids** encoded by the genetic code. (Non-standard ones like **GABA** and **ornithine** exist but aren't required background.)

#### Stereochemistry
The α-carbon is a **chiral center** in every amino acid *except* **glycine** (R = H → achiral), so most amino acids are **optically active**.

![Figure 1.2 — Glycine, the only achiral amino acid.](${fig(0, 3).src})

- All chiral eukaryotic amino acids are **L-amino acids** (amino group on the left in a Fischer projection).
- In CIP terms this is the **(S)** configuration — *except* **cysteine**, which is **L** but **(R)** (its $-\\text{CH}_2\\text{SH}$ group outranks $-\\text{COOH}$).

:::keyconcept
**Except glycine, all amino acids are chiral. Except cysteine, all chiral amino acids are (S).**
:::

:::realworld
**D-amino acids** do occur outside eukaryotic proteins — e.g. the antibiotic **gramicidin** (from *Bacillus brevis*) alternates D- and L-residues.
:::

#### The five side-chain classes
| Class | Amino acids | Key features |
|---|---|---|
| **Nonpolar, nonaromatic** | **G**lycine, **A**lanine, **V**aline, **L**eucine, **I**soleucine, **M**ethionine, **P**roline | Alkyl/H side chains → **hydrophobic**, buried in the core. **Methionine** has S (with a methyl → still nonpolar). **Proline** is cyclic (rigid → kinks helices). |
| **Aromatic** | **T**ryptophan, **P**henylalanine, **T**yrosine | Ring side chains. **Trp** = largest (double ring + N); **Phe** nonpolar; **Tyr** = Phe + $-\\text{OH}$ → relatively polar. |
| **Polar (uncharged)** | **S**erine, **T**hreonine, **A**sparagine, **G**lutamine, **C**ysteine | $-\\text{OH}$ (Ser/Thr) or amide (Asn/Gln) or thiol (Cys). H-bond; **Cys thiol oxidizes** → disulfides. |
| **Acidic (− at pH 7.4)** | **A**spartate, **G**lutamate | Carboxylate side chains → negatively charged. |
| **Basic (+ at pH 7.4)** | **L**ysine, **A**rginine, **H**istidine | Amino/guanidinium/imidazole side chains → positively charged. |

![Figure 1.4a — Nonpolar, nonaromatic side chains.](${fig(0, 4).src})

![Figure 1.4b — Aromatic side chains.](${fig(0, 5).src})

![Figure 1.4c — Polar side chains.](${fig(0, 6).src})

![Figure 1.4d — Negatively charged (acidic) side chains.](${fig(0, 7).src})

![Figure 1.4e — Positively charged (basic) side chains.](${fig(0, 8).src})

:::mnemonic
**Two sulfur amino acids: "Cysteine and Methionine — the Smelly two."** Only these contain **sulfur** (Cys → disulfide bridges; Met → the start codon's amino acid).
:::

:::expertise
The AAMC expects you to know each amino acid's **structure, name, and three- and one-letter abbreviations**. Don't skip the rote memorization.
:::
`
    },

    /* ─────────────── 1.2 Acid–Base Chemistry of Amino Acids ─────────────── */
    {
      id: 's2', num: '1.2', title: 'Acid–Base Chemistry of Amino Acids',
      goals: [
        'Predict the protonation state of an amino acid at a given pH',
        'Calculate the isoelectric point (pI) from pKa values',
        'Interpret an amino acid titration curve'
      ],
      images: [{ src: fig(1, 2).src, alt: fig(1, 2).alt, caption: 'Figure 1.8 — Titration curve for glycine: flat at each pKa, steep at the pI.' }],
      recap: `
- Amino acids are **amphoteric** (can donate *or* accept protons) → behave as **polyprotic acids**.
- **pKa** = the pH where a group is **half-deprotonated** ($[\\text{HA}] = [\\text{A}^-]$).
- **Low pH → fully protonated (+)**; at the **pI → neutral zwitterion**; **high pH → fully deprotonated (−)**.
- **pI** = average of the **two pKa values flanking the neutral (zwitterionic) form**.
`,
      detail: `
#### Protonation across pH
Amino acids are **amphoteric** — at physiological pH they exist as a **zwitterion** ($-\\text{NH}_3^+$ and $-\\text{COO}^-$ simultaneously).

![Figure 1.5 — Amino acid is fully protonated at low (acidic) pH.](${fig(1, 0).src})

- **Low (acidic) pH:** both groups protonated → **net positive** ($-\\text{NH}_3^+$, $-\\text{COOH}$).
- **Near the pI:** neutral **zwitterion** ($-\\text{NH}_3^+$, $-\\text{COO}^-$).
- **High (alkaline) pH:** both deprotonated → **net negative** ($-\\text{NH}_2$, $-\\text{COO}^-$).

The **pKa** of a group is the pH at which it is **half-dissociated** ($[\\text{HA}] = [\\text{A}^-]$).

#### Isoelectric point (pI)
The **pI** is the pH at which the amino acid carries **no net charge**.

- **No charged side chain:** $\\text{pI} = \\dfrac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}$ → typically **~6**.
- **Charged side chain:** average the **two pKa values that flank the neutral zwitterion**.
  - **Acidic** amino acids → **pI well below 6**.
  - **Basic** amino acids → **pI well above 6**.

:::keyconcept
On a titration curve, the curve is **flat (buffering) at each pKa** and **steep (vertical) at the pI** — where the molecule flips from net + to net −.
:::

:::mnemonic
**"Acids low, bases high":** acidic side chains pull the **pI down** (well under 6); basic side chains push it **up** (well over 6). Neutral side chains sit at **~6**.
:::
`
    },

    /* ─────────────── 1.3 Peptide Bond Formation and Hydrolysis ─────────────── */
    {
      id: 's3', num: '1.3', title: 'Peptide Bond Formation and Hydrolysis',
      goals: [
        'Describe peptide bond formation as a condensation (dehydration) reaction',
        'Explain peptide bond hydrolysis and the stability of the amide bond',
        'Use peptide nomenclature (di-, tri-, oligo-, polypeptide; N- and C-terminus)'
      ],
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 1.10 — Peptide bond formation (condensation) and cleavage (hydrolysis).' }],
      recap: `
- A **peptide bond** is an **amide** formed by **condensation (dehydration)** — one **water** is released; broken by **hydrolysis** (adds water).
- The **nucleophilic amino group** of one residue attacks the **electrophilic carbonyl carbon** of another.
- Peptides have directionality: a free **N-terminus** (start) and free **C-terminus** (end); read **N → C**.
`,
      detail: `
#### Naming peptides
| Term | Residues |
|---|---|
| **Dipeptide** | 2 |
| **Tripeptide** | 3 |
| **Oligopeptide** | "a few" (< 20) |
| **Polypeptide** | "many" (> 20) |

![Figure 1.9 — Peptide residues and the N-/C-termini.](${fig(2, 1).src})

#### Formation & hydrolysis
- **Formation = condensation/dehydration:** the **nucleophilic $-\\text{NH}_2$** of one amino acid attacks the **electrophilic carbonyl carbon** of another; a molecule of **water is released**. The product **amide (peptide) bond** has partial double-bond character → **rigid, planar, no free rotation**.
- **Hydrolysis** is the reverse: water cleaves the peptide bond (catalyzed by **trypsin, chymotrypsin** in digestion). The amide bond is **kinetically stable** but **thermodynamically** favors hydrolysis.

:::keyconcept
The peptide bond's **partial double-bond character** (resonance) makes it **planar and rigid**, which constrains the backbone conformations available for secondary structure.
:::
`
    },

    /* ─────────────── 1.4 Primary and Secondary Protein Structure ─────────────── */
    {
      id: 's4', num: '1.4', title: 'Primary and Secondary Protein Structure',
      goals: [
        'Define primary structure and the bonds that maintain it',
        'Compare the α-helix and β-pleated sheet and the bonds that stabilize them',
        'Explain the structural role of proline and glycine in secondary structure'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 1.12 — The α-helix: backbone coiled around a central axis, stabilized by hydrogen bonds.' }],
      recap: `
- **Primary (1°)** = the **linear amino acid sequence**, held by **peptide (amide) bonds**; determines all higher structure.
- **Secondary (2°)** = local backbone folding via **hydrogen bonds** between backbone groups: the **α-helix** and the **β-pleated sheet**.
- **Proline** disrupts helices (rigid ring → "helix breaker"); **glycine** is too flexible.
`,
      detail: `
#### Primary structure (1°)
The **linear sequence** of amino acids, encoded by DNA and held together by **peptide (amide) bonds**. Sequence alone dictates how a protein folds. (Sequenced by **Edman degradation**, which cleaves from the **N-terminus**.)

#### Secondary structure (2°)
**Local** structure of the backbone stabilized by **hydrogen bonds** between nearby backbone carbonyl O and amide H atoms.

| Feature | **α-helix** | **β-pleated sheet** |
|---|---|---|
| Shape | Right-handed **coil/rod** | Extended strands lying side-by-side |
| H-bonds | Within one chain (i → i+4) | Between adjacent strands |
| Direction | — | **Parallel** or **antiparallel** |
| Example | Keratin | Silk fibroin |

![Figure 1.13 — Hydrogen bonding and spatial configuration of the β-pleated sheet.](${fig(3, 1).src})

:::keyconcept
**Proline is a "helix breaker"** — its rigid ring and lack of an amide H introduce **kinks**; it's rarely found mid-helix (but appears in turns). **Glycine** is too **flexible** to stabilize a helix.
:::

:::mnemonic
**"Helix = Hydrogen bonds within; Sheet = Side-by-side strands."** Both 2° structures are held by **backbone H-bonds**, never side-chain interactions.
:::
`
    },

    /* ─────────────── 1.5 Tertiary and Quaternary Protein Structure ─────────────── */
    {
      id: 's5', num: '1.5', title: 'Tertiary and Quaternary Protein Structure',
      goals: [
        'Describe tertiary structure and the interactions that stabilize it',
        'Explain hydrophobic interactions and the solvation layer',
        'Define quaternary structure and conjugated proteins'
      ],
      images: [{ src: fig(4, 1).src, alt: fig(4, 1).alt, caption: 'Figure 1.15a — Hemoglobin: a quaternary protein of four subunits, each with a heme group.' }],
      recap: `
- **Tertiary (3°)** = the **3-D shape of one chain**, driven mainly by **hydrophobic interactions** (nonpolar residues bury inward) plus **disulfide bonds, H-bonds, salt bridges, van der Waals**.
- **Quaternary (4°)** = assembly of **multiple subunits** (e.g. **hemoglobin** = 4 chains).
- **Conjugated proteins** carry a non-amino-acid **prosthetic group** (lipo-, glyco-, metallo-, hemoproteins).
`,
      detail: `
#### Tertiary structure (3°)
The **three-dimensional shape** of a single polypeptide, stabilized by side-chain interactions:

- **Hydrophobic interactions** — the **major driver**: nonpolar residues cluster in the interior, away from water, increasing the entropy of the **solvation layer** (a favorable, negative $\\Delta G$).
- **Disulfide bonds** — covalent $-\\text{S}-\\text{S}-$ links between two **cysteines** (strongest).
- **Acid–base/salt bridges**, **hydrogen bonds**, and **van der Waals forces**.

![Figure 1.14 — Disulfide bond formation between two cysteine residues.](${fig(4, 0).src})

:::keyconcept
Folding is entropically driven: burying hydrophobic residues **frees ordered water** from the solvation layer, so **ΔS of water increases** → **ΔG < 0** → the protein folds spontaneously.
:::

#### Quaternary structure (4°)
The interaction of **multiple polypeptide subunits** into one functional protein. **Hemoglobin** (4 subunits) is the classic example; multi-subunit proteins enable **cooperativity** and regulation.

![Figure 1.15b — Immunoglobulin G, a multi-subunit (quaternary) protein.](${fig(4, 2).src})

#### Conjugated proteins
Proteins with a covalently attached **prosthetic group** (non-amino-acid component): **lipoproteins** (lipid), **glycoproteins** (carbohydrate), **metalloproteins** (metal), and **hemoproteins** (heme, e.g. hemoglobin).

:::mnemonic
**Structure ladder — "Pretty Soon Toddlers Quit":** **P**rimary (sequence) → **S**econdary (H-bonds: helix/sheet) → **T**ertiary (3-D, hydrophobic core) → **Q**uaternary (subunits).
:::
`
    },

    /* ───────────────────────── 1.6 Denaturation ───────────────────────── */
    {
      id: 's6', num: '1.6', title: 'Denaturation',
      goals: [
        'Explain how heat and solutes denature proteins',
        'Distinguish loss of 3°/4° structure from breaking the primary sequence'
      ],
      recap: `
- **Denaturation** = loss of **3-D structure** (and function) while the **primary sequence stays intact** (peptide bonds unbroken).
- **Heat** disrupts **hydrophobic interactions**; **detergents (SDS)** and **chaotropes (urea)** disrupt 2°/3°/4° structure; extreme pH/salt break salt bridges.
`,
      detail: `
#### What denaturation is (and isn't)
**Denaturation** unfolds a protein — it loses **tertiary/quaternary structure** and thus **function** — but the **peptide bonds of the primary sequence are NOT broken**.

| Denaturant | How it unfolds the protein |
|---|---|
| **Heat** | Raises kinetic energy → disrupts **hydrophobic interactions** (and H-bonds) |
| **Detergents (e.g. SDS)** | Coat the protein, disrupting hydrophobic core |
| **Chaotropes (e.g. 8 M urea)** | Disrupt H-bonding/secondary–tertiary structure |
| **Extreme pH / heavy metals** | Break **salt bridges** and ionic interactions |

:::realworld
A **fried egg** is denaturation you can see: heat unfolds and aggregates the soluble proteins of the egg white, turning it opaque and solid — irreversibly.
:::

:::keyconcept
Denaturation can be **reversible** if only weak interactions are disrupted (the sequence still "knows" how to refold), but is often **irreversible** once unfolded chains aggregate.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      { section: 'Amino Acids Found in Proteins', points: [
        '**Amino acids** have four groups on the **α-carbon**: an amino group, a carboxyl group, an H, and an **R group** that determines chemistry/function.',
        'All chiral eukaryotic amino acids are **L** ((S)) — **except cysteine** (R); **glycine** is the only achiral one (R = H).',
        'Classes: **nonpolar-nonaromatic** (G,A,V,L,I,M,P), **aromatic** (W,F,Y), **polar** (S,T,N,Q,C), **acidic** (D,E), **basic** (K,R,H).'
      ]},
      { section: 'Acid–Base Chemistry', points: [
        'Amino acids are **amphoteric**; **pKa** = pH where a group is half-deprotonated ($[\\text{HA}]=[\\text{A}^-]$).',
        'Low pH → fully protonated (+); at **pI** → neutral **zwitterion**; high pH → fully deprotonated (−).',
        '**pI** = average of the two pKa flanking the neutral form. Neutral side chains ≈ 6; **acidic < 6**; **basic > 6**.'
      ]},
      { section: 'Peptide Bonds', points: [
        'The **peptide (amide) bond** forms by **condensation/dehydration** (loses water) and breaks by **hydrolysis**.',
        'The nucleophilic amino group attacks the electrophilic carbonyl carbon; the bond is **rigid/planar** (resonance).'
      ]},
      { section: 'Protein Structure', points: [
        '**1°** = sequence (peptide bonds). **2°** = local H-bonded backbone: **α-helix** & **β-pleated sheet** (**proline** breaks helices).',
        '**3°** = 3-D fold driven by **hydrophobic interactions** + disulfides, H-bonds, salt bridges, van der Waals.',
        '**4°** = multiple subunits (e.g. **hemoglobin**); **conjugated proteins** carry a prosthetic group.'
      ]},
      { section: 'Denaturation', points: [
        '**Denaturation** = loss of 3-D structure/function with the **primary sequence intact** (peptide bonds unbroken).',
        'Caused by **heat**, **detergents (SDS)**, **chaotropes (urea)**, extreme pH, and heavy metals.'
      ]}
    ],
    mnemonics: [
      '**Structure ladder — "Pretty Soon Toddlers Quit":** Primary → Secondary → Tertiary → Quaternary.',
      '**Sulfur amino acids = Cysteine & Methionine.** Cys makes disulfide bridges; Met is the start-codon amino acid.',
      '**Chirality rules:** every amino acid is chiral *except glycine*; every chiral amino acid is (S) *except cysteine*.',
      '**pI shifts:** acidic side chains drag pI **below 6**; basic side chains push it **above 6**; neutral ≈ 6.',
      '**Proline = helix breaker** (rigid ring, no amide H). Glycine = too flexible.',
      '**Denaturation keeps the sequence:** weak bonds break, peptide bonds do not.'
    ],
    keyConcepts: [
      'The **R group is everything** — it sets polarity, charge, pKa, and where a residue sits in the folded protein.',
      'Protein folding is **entropically driven** by the **hydrophobic effect** (freeing ordered solvation-layer water → ΔG < 0).',
      '**Disulfide bonds** (Cys–Cys) are the only **covalent** side-chain bonds stabilizing tertiary structure.',
      'Primary sequence **determines** all higher-order structure — a single substitution (e.g. Glu→Val in HbS) can change everything.'
    ],
    equations: [
      { name: 'Isoelectric point (no charged side chain)', tex: '\\text{pI} = \\dfrac{\\text{p}K_{a1} + \\text{p}K_{a2}}{2}', note: 'Average the two pKa values that flank the neutral zwitterion.' },
      { name: 'Henderson–Hasselbalch', tex: '\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}', note: 'At the pKa, [A⁻] = [HA] and pH = pKa.' }
    ]
  },

  questions: raw.questions
};
