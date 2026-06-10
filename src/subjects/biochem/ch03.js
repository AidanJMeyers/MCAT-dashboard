// Chapter 3 — Nonenzymatic Protein Function and Protein Analysis.
// Authored to the rich-formatting quality bar (matches bio/ch01.js).
// Figures and questions are reused from ch03.json; recap/detail markdown is authored here.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 3,
  title: 'Nonenzymatic Protein Function & Protein Analysis',
  subtitle: 'Cellular functions · biosignaling · protein isolation · protein analysis',

  blocks: [
    /* ──────────────────────── 3.1 Cellular Functions ──────────────────────── */
    {
      id: 's1', num: '3.1', title: 'Cellular Functions',
      goals: [
        'Compare and contrast cytoskeletal proteins and motor proteins',
        'Associate collagen, elastin, keratins, actin, and tubulin with their major functions',
        'Describe the adhesive properties of cadherins, integrins, and selectins',
        'Predict the possible outcomes of an antibody binding to its antigen'
      ],
      images: [{ src: fig(0, 4).src, alt: fig(0, 4).alt, caption: 'Figure 3.3 — Antibody (immunoglobulin) structure: two heavy + two light chains, joined by disulfide bonds, with variable (antigen-binding) and constant regions.' }],
      recap: `
- **Structural proteins** (collagen, elastin, keratin, actin, tubulin) build the **cytoskeleton** and **extracellular matrix**; they are **fibrous** with highly repetitive secondary structure.
- **Motor proteins** (myosin, kinesin, dynein) generate force via a **conformational change** and act as **ATPases**; they ride **actin** or **microtubules**.
- **Binding proteins** transport or **sequester** a target (hemoglobin, calcium-binding proteins, transcription factors), each with its own **affinity curve**.
- **Cell adhesion molecules (CAMs):** **cadherins** (Ca²⁺-dependent, like cells), **integrins** (α/β chains → ECM + signaling), **selectins** (bind carbohydrates, weakest).
- **Antibodies** bind one specific **antigen** → three outcomes: **neutralization**, **opsonization**, **agglutination**.
`,
      detail: `
#### Structural proteins
The **cytoskeleton** is a three-dimensional scaffold anchored to the cell membrane by embedded protein complexes; outside the cell, **extracellular matrices** support tissues (tendons, ligaments, cartilage, basement membranes are all proteinaceous). Structural proteins share a highly **repetitive secondary structure** and a **super-secondary structure** (a recurring arrangement of secondary elements, sometimes called a **motif**), giving most of them a **fibrous** nature.

| Protein | Type / location | MCAT-essential function |
|---|---|---|
| **Collagen** | ECM of connective tissue | **Trihelical fiber** (three left-handed helices → one right-handed superhelix); **strength + flexibility**; most abundant in the ECM |
| **Elastin** | ECM of connective tissue | **Stretches and recoils like a spring** → restores tissue shape |
| **Keratin** | Intermediate filaments, epithelial cells | Mechanical integrity + regulatory roles; makes up **hair and nails** |
| **Actin** | Microfilaments, thin filaments of myofibrils | **Most abundant protein** in eukaryotic cells; **polarity** (+/− ends) → motor proteins travel one way |
| **Tubulin** | Microtubules | Structure, **chromosome separation** in mitosis/meiosis, intracellular transport; **polarity** (− end near nucleus, + end at periphery) |

:::realworld
**Osteogenesis imperfecta** ("brittle bone disease") shows why collagen structure matters. Collagen's tight helix depends on an abundance of **glycine** (the smallest amino acid). Replacing glycine with bulkier residues causes **improper folding** and cell death → bone fragility.
:::

#### Motor proteins
Some structural proteins gain **motor function** in the presence of motor proteins (motile cilia/flagella, sarcomere contraction). Motor proteins display **enzymatic activity as ATPases**, powering the conformational change behind movement, and make **transient** contacts with actin or microtubules.

| Motor protein | Track | Key roles | Heads |
|---|---|---|---|
| **Myosin** | **Actin** | Thick filament of the myofibril; **power stroke** of sarcomere contraction (movement at the neck); cellular transport | Single head + neck |
| **Kinesin** | **Microtubules** | Aligns chromosomes in metaphase; depolymerizes microtubules in anaphase; carries vesicles toward the **(+) end** | Two heads |
| **Dynein** | **Microtubules** | **Sliding of cilia/flagella**; carries vesicles toward the **(−) end** (retrograde transport) | Two heads |

![Figure 3.1 — Stepwise activity of kinesin walking along a microtubule.](${fig(0, 2).src})

In **neurons**, kinesin carries neurotransmitter vesicles toward the **(+) end** of axonal microtubules (toward the **synaptic terminal**), while dynein carries waste/recycled vesicles back toward the **(−) end** (toward the **soma**) by **retrograde transport**.

:::bridge
Motor proteins drive **muscle contraction** and intracellular movement. Review sarcomere structure (*MCAT Biology Review*, Ch. 11) for another view of how motor proteins and the cytoskeleton interact.
:::

:::mnemonic
**Kinesin vs. dynein direction:** **Ki**nesin **Ki**cks vesicles toward the **(+)** end (kinesin → "**K**ick out," toward the periphery / synapse). **Dyn**ein **D**rags them back toward the **(−)** end / soma. *Two heads each — at least one always gripping.*
:::

#### Binding proteins
Binding proteins **transport or sequester** molecules by binding them — examples include **hemoglobin**, **calcium-binding proteins**, and **DNA-binding proteins** (often **transcription factors**). Each has an **affinity curve** (e.g., the oxyhemoglobin dissociation curve):

- **Sequestration** → **high affinity** across a wide concentration range, keeping the target ~100% bound.
- **Transport** → **variable affinity** so it can bind *and* release to maintain steady-state concentrations.

#### Cell adhesion molecules (CAMs)
**CAMs** are **integral membrane proteins** on the cell surface that bind the cell to the **ECM** or to other cells. Three major families:

| CAM family | Binds | Adhesion type / notes |
|---|---|---|
| **Cadherins** | Similar cell types (e.g., epithelial–epithelial) | **Calcium-dependent**; glycoproteins; **E-cadherin** (epithelial), **N-cadherin** (nerve) |
| **Integrins** | Extracellular matrix | **Two membrane-spanning chains (α and β)**; major role in **cell signaling** (division, apoptosis); e.g., **αIIbβ3** lets platelets stick to **fibrinogen** |
| **Selectins** | **Carbohydrates** on other cell surfaces | **Weakest** CAM bonds; on **WBCs** and **endothelium**; inflammation + WBC migration |

![Figure 3.2 — White blood cell migration uses selectins (rolling) and integrins (firm adhesion).](${fig(0, 3).src})

:::realworld
Many drugs target **selectins** and **integrins**. Cancer **metastasis** is associated with unique CAM expression patterns, so targeting CAMs may block it. To interrupt clotting during heart attacks, other drugs target the CAMs platelets use.
:::

:::mnemonic
**Three CAMs:** **Cadherins** need **Ca**lcium (and join like **C**ells to like cells). **I**ntegrins **I**ntegrate the cell with the matrix (α/β chains). **S**electins **S**elect **S**ugars (carbohydrates) — and form the weakest bond.
:::

#### Immunoglobulins (antibodies)
**Antibodies** (immunoglobulins, **Ig**) are **Y-shaped** proteins made by **B-cells** that neutralize targets and recruit other immune cells. Each antibody has **two identical heavy chains + two identical light chains**, held together by **disulfide linkages** and **noncovalent interactions**.

- **Variable (antigen-binding) region** — at the tips of the "Y"; binds **one, and only one,** specific antigenic sequence.
- **Constant region** — recruits and binds other immune cells (e.g., macrophages).

When an antibody binds its **antigen**, one of **three outcomes** follows:

| Outcome | What happens |
|---|---|
| **Neutralization** | The pathogen or toxin is rendered unable to exert its effect |
| **Opsonization** | The pathogen is **marked** for immediate destruction by white blood cells |
| **Agglutination** | Antigen + antibody clump into large **insoluble complexes** → phagocytized and digested by macrophages |

:::mnemonic
**Antibody outcomes — "NOA"** (think *no-a* threats): **N**eutralize · **O**psonize (mark) · **A**gglutinate (clump). One antibody, **one** antigen.
:::
`
    },

    /* ────────────────────────── 3.2 Biosignaling ─────────────────────────── */
    {
      id: 's2', num: '3.2', title: 'Biosignaling',
      goals: [
        'Contrast enzyme-linked receptors with G protein-coupled receptors',
        'Distinguish between ungated channels, voltage-gated channels, and ligand-gated channels',
        'Recognize key features of transport kinetics and biosignaling processes'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 3.5 — Trimeric G protein cycle: ligand binding → GDP/GTP exchange → α subunit dissociates and acts on adenylate cyclase → GTP hydrolysis → reassembly.' }],
      recap: `
- **Biosignaling** = cells receive and act on signals; proteins serve as **ligands, transporters, receptors,** and **second messengers**.
- **Ion channels** permit **facilitated diffusion** of charged particles: **ungated** (always open), **voltage-gated** (open over a range of membrane potentials), **ligand-gated** (open when a specific ligand binds).
- Transporters obey **$K_m$** and **$v_{max}$** (Michaelis–Menten / Lineweaver–Burk), where $K_m$ = solute concentration at half-maximal transport.
- **Enzyme-linked receptors** (e.g., **receptor tyrosine kinases**) bind ligand → trigger a **catalytic domain** → second messenger cascade.
- **GPCRs** = **seven-pass** membrane proteins coupled to a **heterotrimeric G protein** (Gs, Gi, Gq) → **second messengers** (cAMP, $\\text{IP}_3$/DAG).
`,
      detail: `
#### Ion channels
**Ion channels** create specific pathways for charged molecules, all permitting **facilitated diffusion** — passive transport of an impermeable solute (large, polar, or charged) **down its gradient** through a transmembrane pore, bypassing the hydrophobic interior of the bilayer.

| Channel type | Gating mechanism | Example |
|---|---|---|
| **Ungated** | None — **always open** (unregulated) | Ungated **K⁺** channels (net K⁺ efflux unless at equilibrium) |
| **Voltage-gated** | Opens/closes with **membrane potential** changes | Voltage-gated **Na⁺** channels in neurons; **Na⁺/K⁺** pacemaker channels in the SA node |
| **Ligand-gated** | Opens/closes when a **specific ligand binds** | **GABA** opens a postsynaptic **Cl⁻** channel |

![Figure 3.4 — Action potential of the sinoatrial (SA) node: Ca²⁺ influx drives the upstroke, K⁺ efflux repolarizes, and the Na⁺/K⁺ pacemaker current brings the cell back to threshold.](${fig(1, 0).src})

:::realworld
Hundreds of ion channels drive cell signaling and excitability, and many are **drug targets**: **calcium-channel blockers** (heart disease), **sodium-channel blockers** (seizures), and **acetylcholine-receptor/cation-channel blockers** (irritable bowel syndrome).
:::

:::bridge
Activity at the **neuromuscular junction** and most chemical synapses relies on **ligand-gated** ion channels; the nervous system also uses **voltage-gated** channels (*MCAT Biology Review*, Ch. 4).
:::

##### Transport kinetics
The same **$K_m$** and **$v_{max}$** parameters that describe enzymes apply to transporters such as ion channels, and can be derived from the **Michaelis–Menten** and **Lineweaver–Burk** equations. Here **$K_m$** is the solute concentration at which the transporter runs at **half its maximum** rate. (Unlike enzymes, transporters have no $K_{eq}$ — there is no catalysis.)

:::keyconcept
Biosignaling can exploit either **existing gradients** (ion channels) **or** **second-messenger cascades** (enzyme-linked receptors and GPCRs).
:::

#### Enzyme-linked receptors
**Enzyme-linked receptors** display catalytic activity in response to ligand binding and have **three domains**:

1. **Membrane-spanning domain** — anchors the receptor in the membrane.
2. **Ligand-binding domain** — binds ligand → induces a conformational change.
3. **Catalytic domain** — activated by that change → often launches a **second-messenger cascade**.

**Receptor tyrosine kinases (RTKs)** are the classic example: a monomer that **dimerizes** on ligand binding; the dimer is the active form that **phosphorylates** cellular enzymes — including itself (**autophosphorylation**). Other classes: **serine/threonine kinases** and **receptor tyrosine phosphatases**.

#### G protein-coupled receptors (GPCRs)
**GPCRs** are a large family of integral membrane proteins in signal transduction, defined by their **seven membrane-spanning α-helices**. To reach an intracellular effector they use a **heterotrimeric G protein** (named for its link to the guanine nucleotides **GDP/GTP**). Ligand binding **increases the receptor's affinity** for the G protein; binding the G protein switches it to the **active state**.

| G protein | Effector | Net second-messenger effect |
|---|---|---|
| **Gs** | **Stimulates** adenylate cyclase | **↑ cAMP** |
| **Gi** | **Inhibits** adenylate cyclase | **↓ cAMP** |
| **Gq** | Activates **phospholipase C** | Cleaves PIP₂ → **DAG + $\\text{IP}_3$**; $\\text{IP}_3$ opens ER **Ca²⁺** channels → **↑ Ca²⁺** |

:::mnemonic
**Heterotrimeric G proteins:** **G**s **S**timulates · **G**i **I**nhibits · **"mind your p's and q's"** → **Gq** activates phospholipase **C** (think Gq → cleaves → **C**a²⁺).
:::

##### The G protein cycle
The G protein has **α, β, and γ** subunits. Walking the cycle in Figure 3.5:

1. **Inactive:** α binds **GDP**, complexed with β and γ. Ligand binds the GPCR → receptor activates and engages the G protein (**Step 1**).
2. **Activation:** **GDP → GTP** exchange lets the **α subunit dissociate** from β/γ (**Step 2**). Activated α alters **adenylate cyclase** — **αs** activates it, **αi** inhibits it.
3. **Termination:** GTP on α is **hydrolyzed (dephosphorylated) to GDP** (**Step 3**) → α **rebinds** β/γ (**Step 4**), returning the G protein to its inactive state.

:::keyconcept
**Enzyme-linked receptors vs. GPCRs** share an **extracellular** ligand-binding domain, a **transmembrane** domain, and **ligand binding** that initiates a **second-messenger cascade**. They differ in the machinery: enzyme-linked receptors have intrinsic **enzymatic/autophosphorylation** activity, whereas GPCRs are a **two-protein complex** (receptor + trimeric G protein) whose **α subunit dissociates** on activation.
:::
`
    },

    /* ───────────────────────── 3.3 Protein Isolation ──────────────────────── */
    {
      id: 's3', num: '3.3', title: 'Protein Isolation',
      goals: [
        'Recall the major categories of electrophoresis and chromatography',
        'Select the appropriate protein isolation method in a given situation',
        'Identify the mobile and stationary phases when given a separatory apparatus'
      ],
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 3.6 — Gel electrophoresis: an electrolytic cell drives charged molecules toward the oppositely charged electrode; larger particles migrate more slowly through the gel.' }],
      recap: `
- Proteins are freed by **cell lysis + homogenization**, then **centrifugation** before further separation. The two big techniques: **electrophoresis** and **chromatography** (each for native *or* denatured protein).
- **Electrophoresis** moves charged molecules through a **polyacrylamide gel** by **charge + size**: smaller, more highly charged molecules in a larger field migrate fastest.
- **SDS-PAGE** masks native charge → separates by **size alone**; **isoelectric focusing** stops each protein where **pH = pI**; **native PAGE** keeps the protein functional but is hard to compare.
- **Chromatography** separates by relative **affinity** for a **stationary** vs. **mobile** phase (except **size-exclusion**, which is about pore size).
- Column types: **column** (polarity), **ion-exchange** (charge), **size-exclusion** (pore size — **large elutes first**), **affinity** (specific binding).
`,
      detail: `
#### Getting the protein out
Proteins are isolated from tissue or cell cultures by **cell lysis and homogenization** (crushing/grinding/blending into an even mixture). **Centrifugation** then separates proteins from much smaller molecules before the main techniques — **electrophoresis** and **chromatography** — which work on **native or denatured** proteins.

#### Electrophoresis
Electrophoresis subjects compounds to an **electric field**, sorting them by **net charge and size**:

- **Anions** (negative) migrate toward the **(+) anode**; **cations** (positive) migrate toward the **(−) cathode**.
- **Migration velocity** rises with field strength and charge and falls with the frictional coefficient (mass/shape):

$$v = \\dfrac{Ez}{f}$$

where **$E$** = electric field strength, **$z$** = net charge, **$f$** = frictional coefficient.

- **Polyacrylamide gel** is the standard medium — a porous sieve that lets small particles pass and retains large ones. A molecule moves **faster** if **small, highly charged,** or in a **large field**; **slower (or not at all)** if **big/convoluted, neutral,** or in a **small field**.

![Figure 3.7 — Partitioning of pigments by thin-layer chromatography: components with high retention times stay near the origin; low-retention components migrate furthest.](${fig(2, 3).src})

:::bridge
Electrophoresis uses an **electrolytic cell** ($\\Delta G > 0$, $E_{cell} < 0$) — *MCAT General Chemistry Review*, Ch. 12. **Anions → anode, cations → cathode**, always.
:::

##### Comparing the electrophoresis methods

| Method | Basis of separation | Key feature / limitation |
|---|---|---|
| **Native PAGE** | Charge **and** size (protein stays folded) | Functional protein **recoverable** (if gel unstained); hard to compare because **mass:charge** ratios differ between proteins |
| **SDS-PAGE** | **Molecular size alone** | **SDS** detergent disrupts noncovalent interactions, coats protein with **net negative charge**, denatures it → only $E$ and $f$ (mass) matter; gel can then be **stained**, but protein is **denatured** |
| **Isoelectric focusing** | **Isoelectric point (pI)** | Protein migrates through a **pH gradient** and **stops where pH = pI** (neutral) |

:::keyconcept
In **isoelectric focusing**, a protein **stops moving when pH = pI**.
:::

##### Isoelectric focusing in depth
The **pI** is the pH at which a protein/amino acid is **electrically neutral**. For most amino acids the neutral form is a **zwitterion** (amino group protonated, carboxyl deprotonated, side chain neutral); **arginine and lysine** are exceptions, with protonated nitrogenous side chains. For polypeptides, **pI is set by the relative numbers of acidic vs. basic residues**.

The gel holds a **pH gradient**: **acidic at the (+) anode**, **basic at the (−) cathode**, neutral in the middle. A protein migrates until it reaches the pH equal to its **pI**, becomes **neutral**, and **stops**. *(Example: a protein with pI 9 loaded at pH 7 picks up protons → net positive → migrates toward the cathode until the gel reaches pH 9, where it neutralizes and halts.)*

:::mnemonic
**"A⁺" — Anode is Acidic and (+).** The anode end has the **acidic (H⁺-rich)** gel and the **positive** charge; acids ↔ protons ↔ positive. Bases ↔ hydroxide ↔ the **negative cathode**.
:::

:::expertise
For analysis, protein mass is given in **daltons (Da)** — equivalent to molar mass ($\\text{g/mol}$). One amino acid averages **~100 Da**, a quick way to estimate a polypeptide's mass from its residue count.
:::

#### Chromatography
Chromatography fractionates a homogenized mixture through a **porous matrix**; isolated proteins are immediately available for **identification and quantification**. The universal principle: **the more similar a compound is to its surroundings (polarity, charge, etc.), the more it sticks and the slower it moves.** Chromatography is preferred over electrophoresis when **large amounts** of protein must be separated.

- **Stationary phase (adsorbent)** — the solid medium the sample is loaded onto.
- **Mobile phase** — the solvent run through it; the sample **elutes** as it travels.
- **Retention time** — time a compound spends in the stationary phase. High affinity for the stationary phase → long retention time (barely migrates); high affinity for the mobile phase → moves quickly. Different retention times = **partitioning** = separation.

:::keyconcept
**All chromatography is about affinity** for the mobile vs. stationary phases — **except size-exclusion chromatography**, which separates by **pore size**.
:::

:::bridge
Chromatography and other separatory methods also appear in *MCAT Organic Chemistry Review*, Ch. 12.
:::

##### Types of chromatography

| Type | Stationary phase | Separates by | Notes |
|---|---|---|---|
| **Column** | **Silica/alumina** beads (polar) | **Polarity** (and size); gravity-driven | **Less polar elutes faster**; tune solvent polarity/pH/salinity; works on nucleic acids too |
| **Ion-exchange** | **Charged** beads | **Charge** (opposite charge binds) | Bound molecules eluted with a **salt gradient** |
| **Size-exclusion** | **Porous** beads | **Size** | Small molecules enter pores → **retained**; **large molecules elute first** (counterintuitive!) |
| **Affinity** | Bead-bound **receptor/antibody/ligand** | **Specific binding** | Highly selective (e.g., **Ni²⁺** for **His-tagged** proteins); elute with **free ligand** or altered pH/salinity |

![Figure 3.8 — Column chromatography: sample loaded on top, solvent poured over; compounds most like the mobile phase elute quickly, those most like the stationary phase elute slowly.](${fig(2, 4).src})

A common protein-purification sequence is an **ion-exchange column followed by a size-exclusion column**. **Affinity chromatography's** main drawbacks: the protein may **not elute** (affinity too high) and the recovered protein may stay **bound to the eluent** (e.g., a free inhibitor that's hard to remove).

:::mnemonic
**Size-exclusion is backwards:** the **beads have pores**, so **small** molecules get **trapped** (long retention) and **big** molecules **dodge** the pores and **leave first**. Think "**big and in a hurry**."
:::

:::expertise
**Guided example — reading a purification figure.** Stingray-pancreas **sPLA₂** was purified, with the final step a **reverse-phase HPLC** on a **nonpolar (C8)** column using a water → acetonitrile gradient (water decreasing, acetonitrile rising to 80%).

![Figure 1 — (A) RP-HPLC chromatogram: a large sPLA₂ peak elutes at ~23 min as acetonitrile nears its maximum. (B) SDS-PAGE under reducing conditions: a single band near the 14 kDa standard.](${fig(2, 5).src})

- **Monomeric mass:** SDS-PAGE under reducing conditions severs disulfide bonds → bands are **monomers**. The sPLA₂ band sits next to the **14 kDa** standard → **~14 kDa** (consistent with the stated 13–18 kDa range).
- **Why high acetonitrile to elute:** RP-HPLC is just column chromatography with a **nonpolar stationary phase** and a solvent shifting from **polar (water)** to **nonpolar (acetonitrile)**. sPLA₂ eluting late means it's **net nonpolar** — it clung to the nonpolar column until the solvent itself turned nonpolar. This makes biological sense: sPLA₂'s natural substrates are **phospholipids**.
:::
`
    },

    /* ───────────────────────── 3.4 Protein Analysis ───────────────────────── */
    {
      id: 's4', num: '3.4', title: 'Protein Analysis',
      goals: [
        'Recall the traits that are typically analyzed in proteins',
        'Describe the Edman degradation and the Bradford assay',
        'Recognize the limitations of protein separation and analysis techniques'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 3.9 — X-ray crystallography diffraction pattern; the dot positions/intensities are interpreted to map electron density and solve the structure.' }],
      recap: `
- After isolation, proteins are analyzed for **structure, sequence, activity,** or **concentration**.
- **Structure:** **X-ray crystallography** (~75% of structures; needs a crystal; measures electron density) and **NMR** (~25%).
- **Sequence:** hydrolysis gives **composition** but not order; **Edman degradation** removes the **N-terminal** residue one at a time (proteins ≤ ~50–70 aa); large proteins are pre-cleaved with **trypsin, chymotrypsin, cyanogen bromide**.
- **Concentration:** almost always **spectroscopy** — **UV** (aromatic side chains) or colorimetric **BCA / Lowry / Bradford** assays.
- **Bradford assay** = Coomassie dye shifts **brown-green → blue** on binding protein; most common, but disrupted by **detergent/excess buffer**.
`,
      detail: `
#### Why analyze after isolation?
Separating proteins is usually only **step one**; the isolated protein's **structure, function, or quantity** is what researchers (or commercial labs checking **purity**) actually want. A protein can be studied **whole** or **broken into parts**.

#### Protein structure
| Method | Share of structures | How it works |
|---|---|---|
| **X-ray crystallography** | **~75%** | Protein is **isolated and crystallized**; measures **electron density** at high resolution; produces an **X-ray diffraction pattern** (also works on nucleic acids) |
| **NMR spectroscopy** | **~25%** | Solves structure in solution (no crystal needed) |

:::bridge
**NMR** and other spectroscopy are covered in *MCAT Organic Chemistry Review*, Ch. 11.
:::

#### Amino acid composition & sequence
- **Composition:** complete **hydrolysis** + chromatographic analysis identifies *which* amino acids are present — but hydrolysis is **random**, so it **can't sequence**.
- **Sequence (small proteins):** the **Edman degradation** selectively and **sequentially removes the N-terminal amino acid**, which is identified by **mass spectroscopy**. Works up to **~50–70 residues**.
- **Sequence (large proteins):** pre-digest with **chymotrypsin, trypsin,** and **cyanogen bromide** to cut at specific residues, making fragments that are then analyzed by electrophoresis or Edman degradation.

Because **disulfide links and salt bridges** are broken to reduce the protein to primary structure, **their positions cannot be determined** by these methods.

:::keyconcept
The **Edman degradation proceeds from the N-terminus** (amino end), **not** the C-terminus — and only for short proteins (≤ ~50–70 aa).
:::

:::realworld
Like **PCR** gene sequencing, protein sequencing can be **automated** stepwise. Combining protein-sequence and gene-sequence data lets researchers locate **where on a chromosome** a protein's gene resides.
:::

#### Activity analysis
Protein **activity** is measured by monitoring a **known reaction** at a given substrate concentration against a **standard**. Activity correlates with concentration but is also affected by the **purification method** and **assay conditions**. **Color-change** reactions are especially handy because **microarrays** can rapidly flag which chromatographic samples contain the compound of interest.

#### Concentration determination
Concentration is found **almost exclusively by spectroscopy**:

| Method | Basis | Caveat |
|---|---|---|
| **UV spectroscopy** | **Aromatic** side chains (Phe, Tyr, Trp) absorb UV; no treatment needed | Very sensitive to **sample contaminants** |
| **BCA assay** | Colorimetric (bicinchoninic acid) | — |
| **Lowry reagent assay** | Colorimetric | — |
| **Bradford assay** | **Coomassie Brilliant Blue** color change | **Most common**; limited by **detergent** or **excess buffer** |

##### Bradford protein assay
Mix protein with **Coomassie Brilliant Blue**. The dye is **protonated and green-brown** before binding; on binding amino acid groups it **gives up protons and turns blue**, and ionic attractions **stabilize the blue form**. More protein → more blue dye.

![Figure 3.10 — Bradford assay: the acidic (unbound) dye is brown-green (left); binding protein produces the brilliant blue basic form (right).](${fig(3, 1).src})

A **standard curve** is built from known concentrations (absorbance vs. concentration); the unknown is run identically and read off the curve. It is **very accurate with a single protein**, but **less accurate with multiple proteins** (Coomassie binds different amino acids variably), and is thrown off by **detergent or excess buffer**.

:::mnemonic
**Bradford = Blue means Bound.** Brown-green dye → **B**inds protein → **B**rilliant **B**lue. More protein, more blue, higher absorbance.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Cellular Functions',
        points: [
          '**Structural proteins** (collagen, elastin, keratin, actin, tubulin) build the cytoskeleton, anchoring proteins, and ECM; they are generally **fibrous**.',
          '**Motor proteins** (myosin, kinesin, dynein) have force-generating **heads** and act as **ATPases**; they drive **muscle contraction, vesicle transport,** and **cell motility**.',
          '**Binding proteins** bind a specific substrate to **sequester** it or hold its concentration at **steady state**.',
          '**Cell adhesion molecules:** **cadherins** (Ca²⁺-dependent, like cells), **integrins** (two membrane-spanning chains → ECM + signaling), **selectins** (bind carbohydrates, immune system).',
          '**Antibodies (Ig)** target one **antigen**; they have a **constant region** + a **variable region** (antigen binding) and consist of **two heavy + two light chains** held by **disulfide bonds**.'
        ]
      },
      {
        section: 'Biosignaling',
        points: [
          '**Ion channels** regulate ion flow: **ungated** (always open), **voltage-gated** (open over a range of potentials), **ligand-gated** (open with a specific ligand).',
          '**Enzyme-linked receptors** bind an extracellular ligand and initiate a **second-messenger cascade** via an intrinsic **catalytic domain** (e.g., RTK autophosphorylation).',
          '**GPCRs** couple a seven-pass receptor to a **trimeric G protein**; they too launch **second messengers**.',
          'G protein cycle: ligand engages the G protein → **GDP→GTP**, α **dissociates** from β/γ → activated α tunes **adenylate cyclase / phospholipase C** → **GTP→GDP**, α **rebinds** β/γ.'
        ]
      },
      {
        section: 'Protein Isolation',
        points: [
          '**Electrophoresis** observes protein migration through a gel in an electric field ($v = Ez/f$).',
          '**Native PAGE** keeps the protein functional but is hard to compare (mass:charge differs); **SDS-PAGE** denatures + masks charge → accurate **size** comparison (but protein not recoverable).',
          '**Isoelectric focusing** separates by **pI**: the protein migrates until **pH = pI**.',
          '**Chromatography** separates by **affinity** for the stationary vs. mobile phase: **column** (polar silica/alumina + nonpolar solvent), **ion-exchange** (charged column + saline eluent), **size-exclusion** (porous beads — **large elutes first**), **affinity** (bound receptor/ligand + free-ligand eluent).'
        ]
      },
      {
        section: 'Protein Analysis',
        points: [
          'Structure is solved mainly by **X-ray crystallography** (after crystallization), with **NMR** as the alternative.',
          'Composition comes from **hydrolysis**; **sequencing** needs sequential degradation such as the **Edman degradation** (from the **N-terminus**).',
          '**Activity** is measured by following a known reaction, often via a **color change**.',
          'Concentration is determined **colorimetrically** — **UV** (aromatic residues) or the **BCA / Lowry / Bradford** assays; **Bradford** (brown-green → blue) is most common.'
        ]
      }
    ],
    mnemonics: [
      '**Structural proteins (the big 5):** **"Can Elephants Keep Apples Together?"** → **C**ollagen, **E**lastin, **K**eratin, **A**ctin, **T**ubulin.',
      '**Kinesin vs. dynein:** **Ki**nesin **Ki**cks vesicles toward the **(+)** end (periphery/synapse); **Dyn**ein **D**rags them toward the **(−)** end (soma) by retrograde transport.',
      '**Three CAMs:** **Cadherins** need **Ca**lcium (like cells), **I**ntegrins **I**ntegrate cell-to-matrix (α/β chains), **S**electins **S**elect **S**ugars (weakest bond).',
      '**Antibody outcomes — "NOA":** **N**eutralize · **O**psonize (mark) · **A**gglutinate (clump). One antibody binds **one** antigen.',
      '**G proteins:** **G**s **S**timulates, **G**i **I**nhibits, and "mind your **p\'s and q\'s**" → **Gq** activates phospholipase **C**.',
      '**Isoelectric focusing — "A⁺":** the **A**node is **A**cidic and **positive**; a protein stops where **pH = pI**.',
      '**Size-exclusion is backwards:** porous beads **trap small** molecules (retained) while **large** molecules **elute first** — "big and in a hurry."',
      '**Bradford = Blue means Bound:** the brown-green dye turns **B**rilliant **B**lue when it **B**inds protein.'
    ],
    keyConcepts: [
      '**Cytoskeletal vs. motor proteins:** structural proteins are **fibrous** with repeating domains; **motor** proteins have **ATPase** heads and ride actin or microtubules — but motor function is otherwise "nonenzymatic."',
      '**Affinity is everything in chromatography** — except **size-exclusion**, which sorts by **pore size** (large molecules elute first). **Isoelectric focusing** and **ion-exchange** both sort by **charge** (set by pI).',
      '**SDS-PAGE vs. native PAGE trade-off:** SDS-PAGE gives clean **size** separation but **denatures** the protein; native PAGE preserves function and globular size but is **hard to compare** because mass:charge varies.',
      '**Transporters borrow enzyme kinetics:** ion channels obey **$K_m$** and **$v_{max}$**, but have **no $K_{eq}$** because no catalysis occurs.',
      '**Edman degradation reads from the N-terminus** and only for short proteins (≤ ~50–70 aa); large proteins must first be cut by **trypsin/chymotrypsin/cyanogen bromide**.'
    ],
    equations: [
      { name: 'Electrophoretic migration velocity', tex: 'v = \\dfrac{Ez}{f}', note: '$E$ = electric field strength, $z$ = net charge, $f$ = frictional coefficient (depends on mass/shape). Small, highly charged molecules in a large field migrate fastest.' },
      { name: 'Michaelis–Menten (transport kinetics)', tex: 'v = \\dfrac{v_{max}[S]}{K_m + [S]}', note: 'Applies to transporters such as ion channels; $K_m$ is the solute concentration at half-maximal transport rate. No $K_{eq}$ — there is no catalysis.' }
    ]
  },

  questions: raw.questions
};
