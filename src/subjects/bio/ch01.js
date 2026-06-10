// Chapter 1 — The Cell. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch01.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 1,
  title: 'The Cell',
  subtitle: 'Cell theory · eukaryotic organelles & cytoskeleton · prokaryotes · bacterial genetics & growth · viruses and subviral particles',

  blocks: [
    /* ───────────────────────── 1.1 Cell Theory ───────────────────────── */
    {
      id: 's1', num: '1.1', title: 'Cell Theory',
      goals: goals(0),
      recap: `
- **Cell theory** has **four tenets**: (1) all living things are made of cells, (2) the cell is the **basic functional unit of life**, (3) cells arise **only from preexisting cells**, (4) cells carry heritable information as **DNA**.
- **Viruses are *not* alive** — they're acellular, can't self-replicate, and may use **RNA** as their genetic material (violating tenets 3 & 4).
`,
      detail: `
#### A two-century story
Before the 1600s, organisms were thought to be indivisible wholes. The microscope changed that:

- **1665 — Robert Hooke** viewed cork and named the boxlike compartments *"cells."*
- **1674 — Anton van Leeuwenhoek** was first to see a *living* cell.
- **1850 — Rudolph Virchow** showed diseased cells arise from normal cells (*"omnis cellula e cellula"* — all cells from cells).

#### The four tenets
1. **All living things are composed of cells.**
2. **The cell is the basic functional unit of life.**
3. **Cells arise only from preexisting cells** (no spontaneous generation).
4. **Cells carry genetic information as DNA**, passed from parent to daughter cell. *(Added later, with the rise of molecular biology.)*

:::mnemonic
**"Cells Func Pre-existing DNA"** → **C**omposed of cells · basic **Func**tional unit · only from **Pre**-existing cells · carry **DNA**. The first three are the *original* theory; DNA is the *fourth, modern* addition.
:::

#### The viral dilemma
**Viruses** contain genetic material but **cannot reproduce on their own** — they must hijack a host cell, and many use **RNA** rather than DNA. This violates tenets **3 and 4**, so viruses are classified as **non-living**.

:::bridge
Robert Hooke also gave us **Hooke's Law**, $F = -kx$, relating elastic force to spring displacement. Elastic potential energy is testable MCAT physics — see *MCAT Physics and Math Review*, Ch. 2.
:::
`
    },

    /* ─────────────────────── 1.2 Eukaryotic Cells ────────────────────── */
    {
      id: 's2', num: '1.2', title: 'Eukaryotic Cells',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 1.1 — Eukaryotic cell: membrane-bound organelles suspended in the cytoplasm.' }],
      recap: `
- **Eukaryotic cells** have a **membrane-bound nucleus** and organelles → *compartmentalization* of function; **prokaryotes** have neither.
- Membranes are **phospholipid bilayers**: hydrophilic surfaces, hydrophobic core → selective barrier.
- Know each organelle's job cold (**nucleus, nucleolus, mitochondria, lysosomes, RER, SER, Golgi, peroxisomes**). **Form follows function.**
- **Cytoskeleton = 3 parts**: **microfilaments** (actin), **microtubules** (tubulin), **intermediate filaments**.
- **4 tissue types**: epithelial, connective, muscle, nervous. **Epithelia** = parenchyma; **connective tissue** = stroma.
`,
      detail: `
#### Membrane-bound organelles
Each cell is enclosed by a **phospholipid-bilayer membrane** surrounding the semifluid **cytosol**, in which membrane-bound organelles are suspended. Compartmentalization lets incompatible reactions run simultaneously in separate spaces.

| Organelle | Key function (MCAT essentials) |
|---|---|
| **Nucleus** | Control center; houses **DNA** wound on **histones** → **chromosomes**. Bounded by a double **nuclear envelope** with **nuclear pores** for 2-way exchange. Site of transcription. |
| **Nucleolus** | Dense subregion (~25% of nuclear volume); synthesizes **ribosomal RNA (rRNA)**. |
| **Mitochondria** | "Power plants." Outer membrane + inner membrane folded into **cristae** (electron transport chain). **Semi-autonomous** (own DNA, divide by binary fission); can trigger **apoptosis**. |
| **Lysosomes** | Contain **hydrolytic enzymes**; degrade endocytosed material & waste. Enzyme release → **autolysis**. |
| **Rough ER (RER)** | Studded with **ribosomes**; translates proteins destined for **secretion**. |
| **Smooth ER (SER)** | **Lipid synthesis** & **detoxification** of drugs/poisons; transports proteins RER → Golgi. |
| **Golgi apparatus** | Modifies (glycosylation, phosphorylation), sorts, and packages products into vesicles; secretes via **exocytosis**. |
| **Peroxisomes** | Contain **hydrogen peroxide**; **β-oxidation** of very-long-chain fatty acids; phospholipid synthesis. |

##### The nucleus — the highest-yield organelle
The **nuclear envelope** is a double membrane creating a compartment separate from the cytoplasm; **nuclear pores** allow selective two-way transport. This separates **transcription** (in the nucleus) from **translation** (in the cytoplasm). DNA → genes → wound on **histones** → **chromosomes**.

##### Mitochondria

![Figure 1.2 — Mitochondrial structure: matrix, cristae, intermembrane space.](${fig(1, 1).src})

Two membranes: the **outer membrane** is the barrier with the cytosol; the **inner membrane** folds into **cristae** that hold the electron transport chain. The **intermembrane space** lies between them; the **matrix** is inside. Mitochondria are **semi-autonomous** — they contain their own genes and replicate by **binary fission**, a classic example of **cytoplasmic (extranuclear) inheritance**.

:::realworld
The **serial endosymbiosis theory** proposes that mitochondria (and chloroplasts, and flagella) arose when one prokaryote engulfed another and the two formed a symbiotic relationship — explaining the double membrane and independent DNA.
:::

##### Endomembrane system: lysosomes, ER, Golgi

![Figure 1.3 — Relationship between lysosomes, the ER, and the Golgi apparatus.](${fig(1, 2).src})

**Lysosomes** partner with **endosomes** that sort/route material to the *trans*-Golgi, the membrane, or the lysosomal degradation pathway. **RER → SER → Golgi → vesicle → exocytosis** is the secretory route.

:::keyconcept
**Form follows function.** Organelle distribution varies by cell type: **sperm** are packed with **mitochondria** (motility energy); **pancreatic/endocrine cells** are rich in **RER + Golgi** (secretion); mature **RBCs** have **no organelles at all** (pure transport).
:::

#### The cytoskeleton

![Figure 1.4 — Cytoskeletal elements distributed around the nucleus.](${fig(1, 3).src})

| Component | Built from | Roles |
|---|---|---|
| **Microfilaments** | **Actin** (solid rods) | Resist compression/fracture; **muscle contraction** with **myosin**; form the **cleavage furrow** in **cytokinesis**. |
| **Microtubules** | **Tubulin** (hollow polymers) | Tracks for motor proteins **kinesin** & **dynein**; build **cilia/flagella** and the **mitotic spindle**. |
| **Intermediate filaments** | Diverse (**keratin, desmin, vimentin, lamins**) | Cell–cell adhesion; bear **tension**; anchor organelles. Identity is cell/tissue-specific. |

##### Cilia, flagella, and centrioles

![Figure 1.5 — Cilium/flagellum cross-section: the 9 + 2 arrangement.](${fig(1, 4).src})

- **Cilia** move materials *along* a cell surface (e.g., respiratory mucus); **flagella** move *the cell itself* (e.g., sperm).
- Both share the eukaryotic **9 + 2 structure**: 9 microtubule doublets in a ring + 2 central microtubules. *(Bacterial flagella are completely different — see 1.3.)*
- **Centrioles** sit in the **centrosome** as **9 triplets** with a hollow center; they organize the **mitotic spindle** and attach to chromosomes via **kinetochores**.

:::mnemonic
**Cilia vs. flagella count:** "**9 + 2**" for motile cilia/flagella; "**9 × 3**" (nine triplets) for **centrioles**. *Many short cilia, few long flagella.*
:::

:::bridge
Kinesin and dynein are textbook **non-enzymatic protein functions** (alongside binding proteins, cell-adhesion molecules, immunoglobulins, ion channels) — *MCAT Biochemistry Review*, Ch. 3.
:::

#### Tissue formation
Eukaryotes form **tissues** with division of labor. Four types: **epithelial, connective, muscle, nervous** (muscle & nervous covered in later chapters).

##### Epithelial tissue
**Epithelia** cover the body and line cavities — protection, **absorption, secretion, sensation**. They attach to a **basement membrane** and usually form the **parenchyma** (functional cells) of an organ (e.g., nephrons, hepatocytes). Often **polarized** (one face to a lumen, the other to blood vessels).

Classified two ways:

- **By number of layers:**
  - **Simple** — one layer
  - **Stratified** — multiple layers
  - **Pseudostratified** — *appears* layered (varying cell heights) but is truly one layer
- **By cell shape:**
  - **Cuboidal** — cube-shaped
  - **Columnar** — tall and narrow
  - **Squamous** — flat and scale-like

##### Connective tissue
**Connective tissue** supports the body and forms the **stroma** (support structure), secreting **collagen/elastin** into the **extracellular matrix**. Examples: **bone, cartilage, tendons, ligaments, adipose, blood**.

:::keyconcept
**Parenchyma vs. stroma:** epithelial cells = the *working* cells (parenchyma); connective tissue = the *scaffold* (stroma). Classifying a cell: if it lines/covers/secretes → epithelial; if it supports/connects → connective.
:::
`
    },

    /* ───────────── 1.3 Classification & Structure of Prokaryotes ───────────── */
    {
      id: 's3', num: '1.3', title: 'Classification & Structure of Prokaryotic Cells',
      goals: goals(2),
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 1.8 — Prokaryotic cell: no nucleus or membrane-bound organelles; DNA in the nucleoid region.' }],
      svgs: [{
        title: 'Oxygen requirements of bacteria (thioglycollate tube test)',
        caption: 'Where bacteria grow in a tube with an O₂ gradient (O₂ high at top, absent at bottom) reveals their metabolism.',
        svg: `<svg viewBox="0 0 600 300" width="600" role="img" aria-label="Four test tubes showing oxygen tolerance of bacteria" font-family="system-ui, sans-serif">
  <defs>
    <linearGradient id="o2grad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bae6fd"/><stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
  </defs>
  <text x="8" y="30" font-size="13" fill="#0369a1" font-weight="bold">O₂ high ↑</text>
  <text x="8" y="232" font-size="13" fill="#475569" font-weight="bold">O₂ none ↓</text>
  ${[
    { cx: 120, label: 'Obligate aerobe', sub: 'O₂ required', dots: [38, 50, 62, 74, 56, 44, 68] },
    { cx: 260, label: 'Obligate anaerobe', sub: 'O₂ is lethal', dots: [200, 188, 176, 164, 194, 182, 170] },
    { cx: 400, label: 'Facultative anaerobe', sub: 'uses O₂ if present', dots: [40, 55, 70, 85, 100, 120, 145, 170, 195, 48, 78] },
    { cx: 540, label: 'Aerotolerant', sub: 'ignores O₂', dots: [45, 70, 95, 120, 145, 170, 195, 60, 110, 160] }
  ].map(t => `
    <rect x="${t.cx - 26}" y="30" width="52" height="180" rx="6" fill="url(#o2grad)" stroke="#64748b" stroke-width="2"/>
    ${t.dots.map(y => `<circle cx="${t.cx - 10 + (y % 17)}" cy="${y + 8}" r="3.4" fill="#92400e"/>`).join('')}
    <text x="${t.cx}" y="238" font-size="12.5" fill="#0f172a" font-weight="bold" text-anchor="middle">${t.label}</text>
    <text x="${t.cx}" y="255" font-size="11" fill="#64748b" text-anchor="middle">${t.sub}</text>
  `).join('')}
</svg>`
      }],
      recap: `
- **Prokaryotes** = bacteria + archaea: **no nucleus, no membrane-bound organelles**; single **circular chromosome** in the **nucleoid region**.
- **3 domains**: **Archaea**, **Bacteria** (both prokaryotic), **Eukarya**. Archaea resemble **eukaryotes** genetically but **bacteria** structurally.
- **3 shapes**: **cocci** (spheres), **bacilli** (rods), **spirilli** (spirals).
- **O₂ tolerance**: **obligate aerobe**, **obligate anaerobe**, **facultative anaerobe** (toggles), **aerotolerant** (ignores O₂).
- **Gram-positive** = thick **peptidoglycan** (purple); **Gram-negative** = thin peptidoglycan + **outer membrane / LPS** (pink-red).
`,
      detail: `
#### Three domains of life
All life falls into **Archaea**, **Bacteria**, and **Eukarya**. Archaea and Bacteria are both prokaryotic but evolutionarily as distinct from each other as from Eukarya.

| Feature | **Archaea** | **Bacteria** |
|---|---|---|
| Habitat | Often **extremophiles** (heat, salt, no light) — also in the body | Ubiquitous |
| Energy | Photosynthetic *or* **chemosynthetic** (sulfur/nitrogen compounds) | Diverse |
| Resembles eukaryotes | **Yes** — start translation with **methionine**, similar **RNA polymerases**, DNA on **histones** | No |
| Resembles bacteria | Single circular chromosome, **binary fission**/budding, overall structure | — |
| Antibiotics | Often **resistant** | Often susceptible |

##### Classification by shape

![Figure 1.7 — Bacterial shapes: cocci, bacilli, spirilli.](${fig(2, 1).src})

| Shape | Name | Example pathogen |
|---|---|---|
| Spherical | **Cocci** | *Streptococcus pyogenes* |
| Rod | **Bacilli** | *Escherichia coli* |
| Spiral | **Spirilli** | *Treponema pallidum* (syphilis) |

:::realworld
Very few pathogens are **spiral**-shaped. The big three: *Treponema pallidum* (syphilis), *Borrelia burgdorferi* (Lyme), *Leptospira interrogans* (Weil's disease).
:::

#### Aerobes and anaerobes
Oxygen tolerance is a favorite MCAT discrimination. Fill the matrix from memory:

| Type | Survives **with** O₂? | Aerobic metabolism? | Survives **without** O₂? | Anaerobic metabolism? |
|---|---|---|---|---|
| **Obligate aerobe** | Yes | Yes | No | No |
| **Facultative anaerobe** | Yes | Yes | Yes | Yes |
| **Obligate anaerobe** | No | No | Yes | Yes |
| **Aerotolerant anaerobe** | Yes | No | Yes | Yes |

:::mnemonic
**"Obligate = forced."** Obligate aerobes are *forced* to use O₂; obligate anaerobes are *killed* by it (they make toxic radicals). **Facultative** = "has the faculty/choice" to switch. **Aerotolerant** = "tolerates O₂ but won't use it."
:::

#### Prokaryotic cell structure
Prokaryotes are single-celled and must perform every life function alone, though they signal each other in colonies.

##### The cell wall and envelope
The **cell wall** is the outer barrier; the **cell membrane (plasma membrane)** lies beneath it. Together they form the **envelope**, which controls solute movement and maintains gradients.

**Gram staining** (crystal violet → safranin counterstain) splits bacteria in two:

| | **Gram-positive** | **Gram-negative** |
|---|---|---|
| Stain color | **Purple** (retains crystal violet) | **Pink-red** (safranin) |
| Peptidoglycan | **Thick** layer | **Thin** layer |
| Outer membrane | Absent | **Present** (phospholipids + **LPS**) |
| Also contains | **Lipoteichoic acid** | **Lipopolysaccharide (LPS)** — strong immune trigger |
| Other | — | **Periplasmic space** between membrane and wall |

:::realworld
**Penicillin** blocks the enzyme that **cross-links peptidoglycan**. A Gram-positive cell that can't cross-link its thick wall lyses from osmotic stress. Still penicillin-sensitive: *Streptococcus pyogenes* (strep throat) and *Treponema pallidum* (syphilis).
:::

##### Flagella

![Figure 1.9 — Bacterial flagellum: filament, hook, basal body.](${fig(2, 3).src})

Bacterial flagella drive **chemotaxis** (movement toward food / away from toxins). Three parts:

- **Filament** — hollow helix of **flagellin**
- **Basal body** — anchors and *rotates* the flagellum (the motor, up to ~300 Hz)
- **Hook** — couples basal body to filament so rotation produces thrust

Bacteria may also have **fimbriae** (short, hair-like projections similar to cilia) for attachment. A single long flagellum plus many short fimbriae are visible on this bacillus:

![Figure 1.6 — Prokaryotic cell specializations: flagella (long) and fimbriae (short).](${fig(2, 0).src})

:::keyconcept
**Eukaryotic vs. bacterial flagella are totally different.** Eukaryotic: microtubules in a **9 + 2** array, made of **tubulin**. Bacterial: **flagellin** with a **filament–hook–basal body**. This difference lets us target bacteria selectively.
:::

##### Other organelles & genetics
- **DNA**: single **circular chromosome** in the **nucleoid** (no envelope); extra genes on **plasmids**.
- **No mitochondria** — the **cell membrane** runs the electron transport chain.
- **Ribosomes** are smaller: prokaryotic **30S + 50S** vs. eukaryotic **40S + 60S** — the basis for many antibiotics.

:::bridge
Smaller ribosomes let drugs like **tetracyclines, aminoglycosides, and macrolides** hit the bacterial ribosome while sparing ours — *MCAT Biochemistry Review*, Ch. 7.
:::
`
    },

    /* ─────────────── 1.4 Genetics & Growth of Prokaryotes ─────────────── */
    {
      id: 's4', num: '1.4', title: 'Genetics & Growth of Prokaryotic Cells',
      goals: goals(3),
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 1.10 — Binary fission: chromosome replicates, then the cell pinches into two identical daughters.' }],
      recap: `
- **Binary fission** = fast asexual reproduction (no spindle) → two identical daughters (*E. coli* every ~20 min).
- **Plasmids** carry non-essential genes (**antibiotic resistance**, **virulence factors**); **episomes** integrate into the genome.
- **3 recombination routes**: **transformation** (naked DNA uptake), **conjugation** (bridge/sex pilus, F⁺→F⁻), **transduction** (via **bacteriophage** vector). **Transposons** jump within a genome.
- **Growth curve, 4 phases**: **lag → exponential (log) → stationary → death.**
`,
      detail: `
#### Binary fission
**Binary fission** is asexual reproduction unique to prokaryotes: the circular chromosome attaches to the wall and replicates as the cell grows, then membrane and wall grow inward at the midline to split off two identical daughter cells. Because it needs far fewer steps than mitosis, it's **fast** — some *E. coli* divide every **20 minutes**.

#### Genetic recombination
Beyond the chromosome, bacteria carry **plasmids** — extragenomic DNA that may confer **antibiotic resistance** or **virulence factors** (toxins, adhesins, immune evasion). Plasmids that integrate into the genome are **episomes**.

![Figure 1.11 — Mechanisms of antibiotic resistance carried on plasmids.](${fig(3, 1).src})

| Process | What happens | Needs a vector? |
|---|---|---|
| **Transformation** | Cell takes up **naked DNA** from the environment (often from lysed bacteria) and integrates it | No |
| **Conjugation** | Direct transfer across a **conjugation bridge / sex pilus** | No (cell-to-cell) |
| **Transduction** | DNA carried between bacteria by a **bacteriophage** | **Yes — a virus** |
| **Transposons** | Genetic elements that **insert/excise** within a genome (also in eukaryotes) | No |

##### Conjugation in depth

![Figure 1.12 — Bacterial conjugation across a sex pilus.](${fig(3, 2).src})

- Transfer is **unidirectional**: **donor male (F⁺) → recipient female (F⁻)** via **sex pili**.
- The pilus requires a **sex factor** plasmid; the best-studied is the **F (fertility) factor** in *E. coli*. An **F⁺** cell copies its F factor to an **F⁻** cell, converting it to **F⁺**.
- If the F factor has **integrated** into the chromosome, the cell becomes **Hfr** (**high frequency of recombination**) and tries to transfer the *whole genome* — but the bridge usually breaks first.

![Figure 1.13 — Bacterial transduction by a bacteriophage.](${fig(3, 3).src})

:::mnemonic
**Recombination, 3 ways:** **trans*formation*** = **f**ree-floating DNA (no help). **Conjug*ation*** = **c**onjugal *contact* (the bridge). **Trans*duction*** = a **d**elivery virus (**d**uctor → conductor/vector). Only **transduction needs a phage**.
:::

#### Bacterial growth curve

![Figure 1.14 — Bacterial growth curve (semilog plot).](${fig(3, 4).src})

| Phase | What's happening |
|---|---|
| **Lag** | Bacteria adapt to the new environment; little division |
| **Exponential (log)** | Rapid, exponential division using abundant resources |
| **Stationary** | Resources dwindle → division ≈ death, population plateaus |
| **Death** | Resources exhausted → population declines |

:::bridge
The growth curve is a **semilog plot**: a *straight line* on a log y-axis (the exponential phase) represents *exponential*, not linear, growth — *MCAT Physics and Math Review*, Ch. 12.
:::
`
    },

    /* ──────────────── 1.5 Viruses and Subviral Particles ──────────────── */
    {
      id: 's5', num: '1.5', title: 'Viruses & Subviral Particles',
      goals: goals(4),
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'Figure 1.15 — Bacteriophage: capsid genome atop a tail sheath and tail fibers.' }],
      recap: `
- A virus = **genetic material + capsid** (± lipid **envelope**). Enveloped viruses are *easier to kill*; naked viruses *persist on surfaces*.
- Viruses are **obligate intracellular parasites** (no ribosomes → must hijack a host); progeny = **virions**.
- ssRNA can be **positive-sense** (translated directly) or **negative-sense** (needs **RNA replicase** first). **Retroviruses** use **reverse transcriptase** → DNA → host genome.
- **Lytic** cycle = burst the cell (**virulent**); **lysogenic** cycle = integrate as a **provirus/prophage** and lie dormant.
- **Prions** = infectious misfolded proteins (α-helix → β-sheet); **viroids** = tiny circular RNA, mostly plant pathogens.
`,
      detail: `
#### Viral structure
A virion is **genetic material** wrapped in a protein **capsid**, sometimes inside a phospholipid **envelope** with viral proteins.

- **Enveloped viruses** — envelope is sensitive to heat, detergents, drying → **easier to kill**.
- **Naked (non-enveloped) viruses** — resist sterilization → **persist on surfaces**.

**Bacteriophages** inject only their genome, leaving the rest outside. Beyond the capsid they have a **tail sheath** (syringe that injects DNA) and **tail fibers** (recognize/attach to the host).

#### Viral genomes
Genomes may be **DNA or RNA**, **single- or double-stranded**, **linear or circular**.

| Genome type | How it's expressed |
|---|---|
| **Positive-sense ssRNA** | Acts like mRNA → **translated directly** by host ribosomes |
| **Negative-sense ssRNA** | Must first be copied to a complementary strand by **RNA replicase** (carried in the virion) |
| **Retrovirus (ssRNA)** | **Reverse transcriptase** makes DNA → integrates into host genome → transcribed as host DNA |

![Figure 1.16 — Life cycle of HIV, a retrovirus.](${fig(4, 1).src})

:::realworld
**HIV** enters white blood cells via the **CCR5** receptor. People lacking CCR5 are effectively immune — and an HIV-positive leukemia patient who received bone marrow from a CCR5-negative donor went into HIV remission.
:::

#### Viral life cycle
1. **Infection** — bind a **specific host receptor**; enter by membrane **fusion** (enveloped), **endocytosis**, or genome **injection** (phages). No receptor → the cell is invisible to the virus.
2. **Translation & assembly** — DNA viruses usually go to the **nucleus**; +sense RNA stays in the cytoplasm; −sense RNA needs replicase; retroviral DNA integrates. Host **ribosomes, tRNA, enzymes** build hundreds–thousands of new virions.
3. **Progeny release** — by **cell death**, **lysis**, or **extrusion** (budding through the membrane, keeping the host alive — a **productive cycle**).

![Figure 1.17 — Viral extrusion (budding) from the host membrane.](${fig(4, 2).src})

#### Lytic vs. lysogenic cycles

![Figure 1.18 — Lytic vs. lysogenic cycles of a bacteriophage.](${fig(4, 3).src})

| | **Lytic cycle** | **Lysogenic cycle** |
|---|---|---|
| Host cell | Hijacked, then **lysed** | Survives (for now) |
| Viral genome | Replicates as free virions | Integrates as a **provirus / prophage** |
| Term for phage | **Virulent** | Dormant; can revert to lytic on a stimulus (radiation, chemicals) |
| Bonus | — | Confers resistance to **superinfection**; can carry host genes (transduction) |

:::mnemonic
**Lytic = Lyse** (the cell bursts). **Lysogenic = Lie low** in the **g**enome. A stress signal can flip a quiet lysogenic provirus into a destructive lytic cycle.
:::

#### Prions and viroids
- **Prions** — infectious **proteins** (non-living). They force normal proteins to misfold from **α-helix → β-pleated sheet**, slashing solubility and degradability → aggregates → disease (mad cow / **BSE**, **Creutzfeldt–Jakob**, fatal familial insomnia).
- **Viroids** — tiny **circular ssRNA** that silence plant genes; mostly plant pathogens. The human example is **hepatitis D (HDV)**, which is only pathogenic when co-infecting with **hepatitis B (HBV)**.

:::keyconcept
**Subviral particles are even simpler than viruses.** Prions = protein only (no nucleic acid). Viroids = naked RNA only (no capsid). Both still cause disease.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Cell theory (4 tenets):** all things = **C**ells · basic **F**unctional unit · only from **P**re-existing cells · carry **D**NA. (First three are original; DNA is the modern fourth.)',
      '**"Obligate = forced":** obligate aerobes are forced to use O₂; obligate anaerobes are killed by it. **Facultative** = has the choice; **aerotolerant** = tolerates but won\'t use O₂.',
      '**Recombination:** trans**formation** = **f**ree DNA · **conjugation** = **c**ontact bridge · trans**duction** = **d**elivery virus (only one needing a phage).',
      '**Gram stain:** Gram-**P**ositive = **P**urple + thick **P**eptidoglycan; Gram-negative = piNk + thiN wall + outer membrane/LPS.',
      '**Lytic = Lyse the cell; Lysogenic = Lie low in the genome.**',
      '**9 + 2** for motile cilia/flagella; **9 × 3** (triplets) for centrioles.'
    ],
    keyConcepts: [
      '**Form follows function:** organelle counts track a cell\'s job — mitochondria-rich sperm, RER/Golgi-rich secretory cells, organelle-free RBCs.',
      '**Compartmentalization** is the whole point of membrane-bound organelles: it separates transcription (nucleus) from translation (cytoplasm) and isolates hydrolytic enzymes in lysosomes.',
      '**Eukaryotic vs. bacterial flagella are unrelated:** 9+2 tubulin vs. flagellin filament–hook–basal body — the basis for selective antibacterial targeting.',
      '**Viruses violate cell theory** (acellular, can\'t self-replicate, may use RNA) → classified non-living. Prions (protein) and viroids (RNA) are simpler still.'
    ],
    equations: []
  },

  questions: raw.questions
};
