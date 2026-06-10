// Chapter 7 — RNA and The Genetic Code. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch07.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 7,
  title: 'RNA and The Genetic Code',
  subtitle: 'The genetic code · transcription · translation · control of gene expression in prokaryotes · control of gene expression in eukaryotes',

  blocks: [
    /* ───────────────────────── 7.1 The Genetic Code ───────────────────────── */
    {
      id: 's1', num: '7.1', title: 'The Genetic Code',
      goals: [
        'Differentiate between the three types of RNA: mRNA, tRNA, and rRNA',
        'Transcribe a DNA sequence like "GAATTCG" into its mRNA conjugate',
        'Define the concepts of wobble and degeneracy',
        'Identify the translation outcomes of key codons, including AUG, UAG, UAA, and UGA',
        'Predict the likely impact of different mutation types on the resulting peptide'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 7.2 — Flow of genetic information: mRNA is transcribed 5′ → 3′ (complementary and antiparallel to the template), then translated N-terminus → C-terminus.' }],
      recap: `
- **Central dogma:** DNA is **transcribed** to RNA, which is **translated** to protein; a **gene** is a unit of DNA encoding one protein or RNA.
- **Three RNAs:** **mRNA** carries the message (read as **codons**), **tRNA** translates codons to amino acids via its **anticodon**, **rRNA** builds the ribosome and acts as a **ribozyme**.
- **Codons** = 3 bases → **64 codons**; **61** code for amino acids, **3** are stop codons. The code is **degenerate** (most amino acids have multiple codons) but **unambiguous** (one codon = one amino acid).
- **Start codon = AUG** (methionine); **stop codons = UAA, UGA, UAG** (no tRNA recognizes them).
- **Wobble** = variable 3rd base → silent mutations. Point mutations: **silent**, **missense** (one aa swapped), **nonsense** (premature stop); **frameshifts** (insertion/deletion) are usually the worst.
`,
      detail: `
#### The central dogma
An organism must **store** its genetic information, **pass it on**, and **express** it. DNA and RNA share one language (nitrogenous bases), but proteins are written in a different language (amino acids) — so the **genetic code** translates between them.

- A **gene** is classically a unit of DNA that encodes a specific protein or RNA molecule.
- The **central dogma**: **DNA $\\rightarrow$ RNA $\\rightarrow$ protein** (replication → transcription → translation).

![Figure 7.1 — The central dogma of molecular biology.](${fig(0, 2).src})

- **mRNA is synthesized 5′ → 3′**, **complementary and antiparallel** to the DNA template strand.
- The ribosome reads mRNA **5′ → 3′**, building protein from the **amino terminus (N-terminus) → carboxy terminus (C-terminus)**.

#### Three types of RNA
There are three main RNAs; each has one job to know cold.

| RNA | Made by / where | Function (MCAT essentials) |
|---|---|---|
| **Messenger RNA (mRNA)** | RNA pol II, in the **nucleus** | **Carries the coding message** from DNA to the ribosome; read in **codons**; the **only** RNA translated into protein |
| **Transfer RNA (tRNA)** | RNA pol III; matures in the **cytoplasm** | Converts nucleic-acid language → amino-acid language; its **anticodon** pairs with the codon; carries an amino acid on its **3′ CCA** end |
| **Ribosomal RNA (rRNA)** | RNA pol I, in the **nucleolus** | Structural + catalytic core of the **ribosome**; a **ribozyme** that catalyzes **peptide-bond** formation |

:::keyconcept
**mRNA is the messenger.** DNA codes for proteins but cannot carry out the enzymatic work proteins do. mRNA carries the information from DNA out to the ribosomes, where the **primary structure** of the protein is assembled.
:::

##### mRNA — monocistronic vs. polycistronic
- Transcribed from a DNA template by **RNA polymerase**, then **post-transcriptionally modified** before leaving the nucleus.
- Read in **three-nucleotide codons**.
- **Eukaryotic mRNA is monocistronic** — one mRNA → one protein (a different mRNA for each of the thousands of proteins).
- **Prokaryotic mRNA may be polycistronic** — starting translation at different sites yields different proteins.

##### tRNA — the adaptor
Each tRNA folds to display a three-nucleotide **anticodon** that base-pairs with the appropriate **codon** in the ribosome.

![Figure 7.3 — The cloverleaf structure of tRNA, displaying its anticodon.](${fig(0, 4).src})

- All 20 amino acids are represented by at least one codon.
- A tRNA carrying its amino acid is **charged (activated)**.

![Figure 7.4 — Activation (charging) of an amino acid onto its tRNA.](${fig(0, 5).src})

- Each amino acid is loaded by its own **aminoacyl-tRNA synthetase**, which spends **two high-energy bonds from ATP** — making the attachment an **energy-rich bond**.
- The amino acid attaches to the **3′ CCA** sequence of the tRNA.
- That high-energy aminoacyl-tRNA bond later **powers peptide-bond formation** during translation.

##### rRNA — the catalytic scaffold
- Synthesized in the **nucleolus**; an integral part of the ribosomal machinery used in the cytoplasm.
- Many rRNAs are **ribozymes** — enzymes made of RNA, not protein.
- Helps catalyze **peptide bonds** and can **splice out its own introns**.

#### Codons and the genetic code
If a gene is a "sentence," the **codon** is its three-letter "word."

- Each codon = **3 bases** → $4^3 = 64$ codons total.
- **61 codons** specify one of the 20 amino acids; **3 codons** signal **termination**.
- All codons are written **5′ → 3′**; the code is **unambiguous** (each codon → exactly one amino acid).
- The code is essentially **universal** across species (rare mitochondrial exceptions are not tested).

![Figure 7.5 — The genetic code: a lookup table from mRNA codon to amino acid.](${fig(0, 6).src})

:::keyconcept
Each codon represents **only one** amino acid — but **most amino acids are represented by multiple codons.** (One-to-many from amino acid → codons; one-to-one from codon → amino acid.)
:::

##### Codon–anticodon pairing
During translation the mRNA codon is recognized by the **complementary anticodon** of a tRNA. Because base-pairing is involved, the interaction is **antiparallel**.

- Example: **Ile-tRNA$^{Ile}$** has anticodon **5′—GAU—3′**, which pairs with the isoleucine codon **5′—AUC—3′**.

![Figure 7.6 — Antiparallel base-pairing of an aminoacyl-tRNA anticodon with an mRNA codon.](${fig(0, 7).src})

##### Start and stop codons
- Every preprocessed eukaryotic protein begins with **methionine**, so its codon **AUG** is the **start codon**.
- Three **stop codons** — **UGA, UAA, UAG** — have **no charged tRNA**, so the ribosome **releases the protein**.

:::mnemonic
**Stop codons** (the "U" makes them mean): **UAA** — *U Are Annoying*; **UGA** — *U Go Away*; **UAG** — *U Are Gone*. And **AUG** starts the show (*A*lways *U*se *G*o → "AUG, go!").
:::

#### Degeneracy and wobble
The genetic code is **degenerate**: more than one codon can specify a single amino acid. (All amino acids **except methionine and tryptophan** have multiple codons.)

- For amino acids with multiple codons, the **first two bases are usually fixed** and the **third base varies** — the **wobble position**.
- **Wobble** evolved to **buffer against mutations** in coding DNA.
- Mutations in the wobble position are often **silent (degenerate)** — no change to the amino acid, no effect on the protein.
- Example: **glycine** needs only the first two bases **GG**; the third can be A, C, G, or U and still encodes glycine.

:::keyconcept
Degeneracy means DNA mutations don't always change protein structure or function. A mutation within an **intron** likewise usually has no effect, because introns are spliced out **before** translation.
:::

#### Mutations
A change to a nucleotide within a codon is a **point mutation**. Some are silent (wobble); others change the protein and are **expressed mutations**, which fall into two classes — plus the separate category of **frameshifts**.

| Mutation | Change in DNA | Effect on protein |
|---|---|---|
| **Silent (degenerate)** | Base swap in the **wobble position**, an intron, or noncoding DNA | **No change** observed |
| **Missense** | One base changed → codon now matches a **different amino acid** | **One amino acid swapped**; effect on function varies |
| **Nonsense (truncation)** | One base changed → codon becomes a **premature stop codon** | **Early truncation**; usually worse than missense |
| **Frameshift** | **Insertion or deletion** of bases → shifts the **reading frame** | Most amino acids after the site change; usually **most severe** |

- The three nucleotides of a codon define the **reading frame**.
- Frameshift severity is heavily dependent on **where** in the sequence the indel occurs.

![Figure 7.7 — Common types of DNA mutations: silent, missense, nonsense, and frameshift.](${fig(0, 8).src})

:::realworld
**Cystic fibrosis** is most commonly caused by a deletion at **codon 508** of the **CFTR** chloride-channel gene (loss of a phenylalanine). The defective channel never reaches the membrane, so cells lining the lungs, pancreas, and other organs make thick, sticky mucus that traps bacteria and invites infection.
:::
`
    },

    /* ─────────────────────────── 7.2 Transcription ─────────────────────────── */
    {
      id: 's2', num: '7.2', title: 'Transcription',
      goals: [
        'Explain how each of the eukaryotic RNA polymerases (I, II, and III) impacts transcription',
        'Identify where RNA polymerase would bind to start transcription on a DNA strand',
        'Determine the mRNA that results from a given hnRNA molecule'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 7.8 — Transcription numbering: the first transcribed base is +1; upstream bases are negative; the TATA box sits near −25.' }],
      recap: `
- **Transcription** copies **one** DNA strand into RNA. The **template (antisense) strand** is read **3′ → 5′**; the new mRNA is built **5′ → 3′**, **antiparallel and complementary** to it.
- **RNA polymerase needs no primer** and **does not proofread**; it finds genes via **promoter regions**. In eukaryotes, **RNA pol II** binds the **TATA box** (~−25) with help from **transcription factors**.
- **Three eukaryotic polymerases:** **I → rRNA** (nucleolus); **II → hnRNA/mRNA + snRNA**; **III → tRNA + some rRNA**.
- The primary transcript is **hnRNA**, processed into mature **mRNA** by three modifications: **5′ cap**, **3′ poly-A tail**, and **splicing** (introns out, exons ligated by the **spliceosome**).
- **Alternative splicing** lets one gene yield many proteins → boosts protein diversity from a limited genome.
`,
      detail: `
#### Why transcribe at all?
DNA holds the coding sequence but **cannot leave the nucleus** (it would be degraded), so it uses RNA to ferry information to the cytoplasm, where proteins are built. Making mRNA from a DNA template is **transcription**.

:::mnemonic
**Transcription vs. translation — same language vs. new language.** A court reporter *transcribes* speech in the **same language**; **transcription** copies DNA into RNA (still nucleotides). **Translation** *changes the language* — from nucleotides to amino acids.
:::

#### Mechanism of transcription
Transcription copies only **one** of the two DNA strands.

- **Initiation:** **helicase** and **topoisomerase** unwind the double helix and prevent supercoiling, giving the machinery access to the gene.
- mRNA is synthesized from the **template strand** (a.k.a. **antisense strand**); the new mRNA is **antiparallel and complementary** to it.
- **RNA is made by a DNA-dependent RNA polymerase**, which locates genes via **promoter regions**.
- In eukaryotes, **RNA pol II** transcribes mRNA; its binding site is the **TATA box** (named for its thymine/adenine richness).
- **Transcription factors** help RNA polymerase locate and bind the promoter, setting the start point.
- **No primer required** — unlike DNA pol III.

:::keyconcept
Transcription obeys the **5′ → 3′ rule**, just like DNA synthesis: nucleic acids are always built **5′ → 3′**. RNA polymerase therefore travels the template **3′ → 5′**.
:::

##### Template vs. coding strand
- RNA polymerase reads the **template strand 3′ → 5′** → builds mRNA **5′ → 3′**.
- **RNA polymerase does not proofread**, so the transcript is not edited.
- The **coding (sense) strand** is **not** used as a template. It is **identical to the mRNA** except **every thymine is replaced by uracil**.

##### The three eukaryotic RNA polymerases
Only one of the three makes mRNA.

| Polymerase | Location | Synthesizes |
|---|---|---|
| **RNA polymerase I** | **Nucleolus** | **rRNA** |
| **RNA polymerase II** | Nucleus | **hnRNA** (pre-mRNA) + some **snRNA** |
| **RNA polymerase III** | Nucleus | **tRNA** + some **rRNA** |

:::mnemonic
**"I, II, III → R, m, t"** (rhymes with "1-2-3"): pol **I** = **r**RNA, pol **II** = **m**RNA (hnRNA), pol **III** = **t**RNA. The Roman numerals climb as the products get smaller.
:::

##### Numbering around a gene
- The **first transcribed base** is **+1**.
- **Upstream** (toward 5′, left) bases are **negative** (−1, −2, …); **downstream** (toward 3′) bases are **positive** (+2, +3, …).
- **No base is numbered 0.** The **TATA box** (RNA pol II binding) sits around **−25**.

#### From hnRNA to mature mRNA
Transcription continues until RNA polymerase reaches a **termination sequence**; the helix re-forms and the primary transcript — **heterogeneous nuclear RNA (hnRNA)** — is processed into mRNA.

:::keyconcept
The MCAT loves the **three post-transcriptional modifications**: **5′ cap**, **3′ poly-A tail**, and **intron/exon splicing**.
:::

![Figure 7.9 — Processing eukaryotic hnRNA into mature mRNA: 5′ cap, splicing, and 3′ poly-A tail.](${fig(1, 2).src})

##### Splicing — introns out, exons in
- **Introns** (noncoding) are removed; **exons** (coding) are ligated together.
- Done by the **spliceosome**, where **snRNA** couples with proteins to form **snRNPs** ("snurps").
- The snRNP/snRNA complex recognizes the **5′ and 3′ splice sites**; introns are excised as a **lariat** (lasso shape) and degraded.

:::mnemonic
**INtrons stay IN the nucleus; EXons EXit** the nucleus as part of the mRNA.
:::

##### 5′ cap
- A **7-methylguanylate triphosphate cap** is added to the **5′ end** *during* transcription.
- It is the **ribosome's binding site** and **protects** mRNA from degradation in the cytoplasm.

##### 3′ poly-A tail
- A **polyadenosyl (poly-A) tail** of adenine bases is added to the **3′ end**.
- It **protects against degradation** and **assists nuclear export**.

:::mnemonic
**Poly-A tail = a slow-burning fuse.** Once mRNA leaves the nucleus, degradation chews in from the 3′ end. A **longer poly-A tail = a longer fuse = longer mRNA survival** in the cytoplasm.
:::

- After splicing + cap + tail, the cell has **mature mRNA** ready for export.
- **Untranslated regions (UTRs)** remain at the 5′ and 3′ edges, because the ribosome starts at **AUG** and stops at a **stop codon (UAA, UGA, UAG)**.

:::realworld
Splice-site mutations can produce abnormal proteins — e.g., faulty splicing of **β-globin** mRNA causes some cases of **β-thalassemia**. Splice-site mutations are among the few **noncoding-DNA** mutations that still alter the translated protein.
:::

##### Alternative splicing
The same hnRNA can be spliced **different ways** to make **multiple protein variants** from one gene.

![Figure 7.10 — Alternative splicing: one hnRNA yields multiple proteins from different exon combinations.](${fig(1, 3).src})

- Greatly **expands protein diversity** from a limited gene set (humans make ~100,000 proteins from ~20,000–25,000 genes — don't memorize the numbers).
- Also functions in the **regulation of gene expression**.
`
    },

    /* ──────────────────────────── 7.3 Translation ──────────────────────────── */
    {
      id: 's3', num: '7.3', title: 'Translation',
      goals: [
        'Describe the steps of translation: initiation, elongation, and termination',
        'Distinguish different types of posttranslational modifications, such as phosphorylation and glycosylation',
        'Explain the role of the functional sites (A, P, E) in a ribosome'
      ],
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 7.12 — The three stages of translation: initiation, elongation, and termination at the ribosome.' }],
      recap: `
- **Translation** builds protein in the **cytoplasm** from mRNA, tRNA, ribosomes, amino acids, and **GTP**.
- **Ribosome = rRNA + protein**, in two subunits: **eukaryotic 40S + 60S → 80S**; **prokaryotic 30S + 50S → 70S** (S = sedimentation, not additive).
- **Three tRNA sites — APE:** **A** (aminoacyl, incoming tRNA), **P** (peptidyl, growing chain + peptide-bond formation), **E** (exit, uncharged tRNA leaves).
- **Three stages:** **initiation** (small subunit binds 5′ cap [euk] or **Shine–Dalgarno** [prok]; initiator tRNA at AUG in the P site), **elongation** (3-step cycle, **peptidyl transferase** forms peptide bonds), **termination** (stop codon → **release factor** + water frees the protein).
- **Posttranslational mods:** **folding by chaperones**, **quaternary structure**, **cleavage**, and covalent additions — **phosphorylation, carboxylation, glycosylation, prenylation**.
`,
      detail: `
#### Overview
Once mature mRNA exits through nuclear pores, it finds a ribosome in the cytoplasm and begins **translation** — converting the transcript into a functional protein. It requires **mRNA, tRNA, ribosomes, amino acids, and energy as GTP**.

:::keyconcept
**Terminology and 5′ → 3′:**
- **DNA → DNA = replication** (new DNA built 5′ → 3′)
- **DNA → RNA = transcription** (new RNA built 5′ → 3′; template read 3′ → 5′)
- **RNA → protein = translation** (mRNA **read 5′ → 3′**)
:::

#### The ribosome
The ribosome is built of **proteins + rRNA** and has **large and small subunits** that join **only during synthesis**. Its job is to bring the mRNA together with the charged aminoacyl-tRNA to build protein. It has **three tRNA-binding sites**: **A (aminoacyl)**, **P (peptidyl)**, and **E (exit)**.

| | **Eukaryotic** | **Prokaryotic** |
|---|---|---|
| Complete ribosome | **80S** | **70S** |
| Small subunit | **40S** (binds the **5′ cap**) | **30S** (binds the **Shine–Dalgarno** sequence) |
| Large subunit | **60S** | **50S** |
| rRNAs | **28S, 18S, 5.8S, 5S** | — |
| First amino acid | **Methionine** | **N-formylmethionine (fMet)** |

- **RNA pol I** transcribes the **28S, 18S, and 5.8S** rRNAs as one **45S precursor** in the nucleolus → processed into the **18S** (of the **40S** small subunit) and the **28S + 5.8S** (of the **60S** large subunit).
- **RNA pol III** transcribes the **5S** rRNA (also in the 60S subunit), **outside** the nucleolus.
- **S values are not additive** — they reflect size *and* shape, measured by ultracentrifugation (e.g., 40S + 60S → 80S, not 100S).

![Figure 7.11 — Composition of prokaryotic (70S) and eukaryotic (80S) ribosomes.](${fig(2, 1).src})

:::realworld
The slight structural differences between prokaryotic and eukaryotic ribosomes let us target antibiotics — **macrolides** (azithromycin, erythromycin), **tetracyclines** (doxycycline), **vancomycin**, and others — to bacteria with fewer side effects in humans.
:::

#### Mechanism of translation
Translation occurs in the cytoplasm of both prokaryotes and eukaryotes. In **prokaryotes**, ribosomes begin translating **before transcription finishes**; in **eukaryotes**, transcription and translation are **separated in time and space**. The process has three stages, each needing **GTP** and specialized factors — **initiation factors (IF)**, **elongation factors (EF)**, and **release factors (RF)**.

##### Initiation
1. The **small subunit** binds mRNA — at the **Shine–Dalgarno sequence** (prokaryotes, in the 5′ UTR) or the **5′ cap** (eukaryotes).
2. The **charged initiator tRNA** base-pairs with the **AUG start codon** in the **P site** (carrying **fMet** in prokaryotes, **Met** in eukaryotes).
3. The **large subunit** joins, forming the **initiation complex**, assisted by **initiation factors (IF)**.

##### Elongation — a repeating 3-step cycle
The ribosome moves **5′ → 3′**, building the protein **N-terminus → C-terminus**. The three sites do the work:

| Site | Holds | Role |
|---|---|---|
| **A — aminoacyl** | **Incoming** aminoacyl-tRNA | Next amino acid, selected by the codon in the A site |
| **P — peptidyl** | tRNA with the **growing chain** | Peptide bond forms as the chain is passed P → A; also where the first **Met** binds |
| **E — exit** | **Uncharged** tRNA | Transient pause before the spent tRNA unbinds and exits |

- **Peptidyl transferase** (part of the **large subunit**, a ribozyme) catalyzes the **peptide bond**; **GTP** powers the step.
- **Elongation factors (EF)** recruit aminoacyl-tRNA with GTP and help remove GDP afterward.

:::mnemonic
**Order of ribosome sites = APE** (A → P → E): tRNA enters the **A** site, the chain grows in the **P** site, and the empty tRNA leaves through the **E** xit. *"A monkey (APE) builds the protein."*
:::

##### Signal sequences
Some eukaryotic proteins carry **signal sequences** that route them to a destination.

- A signal sequence can direct the ribosome to the **rough ER**, translating the protein into the **ER lumen** → on to the **Golgi** → **secreted** via exocytosis (e.g., hormones, digestive enzymes).
- Other signal sequences target the **nucleus, lysosomes, or cell membrane**.

![Figure 7.13 — Signal sequences route secretory, membrane, and lysosomal proteins through the ER.](${fig(2, 3).src})

##### Termination
- When a **stop codon** enters the **A site**, a **release factor (RF)** binds it and adds a **water molecule** to the chain.
- That water lets **peptidyl transferase** and termination factors **hydrolyze the finished polypeptide** off the final tRNA.
- The protein is released from the tRNA in the **P site**, and the two subunits **dissociate**.

#### Posttranslational processing
The nascent chain must be modified before it is a functioning protein.

- **Folding** by **chaperones** — proper 3-D shape.
- **Cleavage** — e.g., **insulin** is cut from a larger inactive precursor; signal sequences are removed for organelle entry.
- **Quaternary structure** — subunits assemble (e.g., **hemoglobin** = 2 α + 2 β chains).
- **Covalent additions** of other biomolecules:

| Modification | What's added | Notes |
|---|---|---|
| **Phosphorylation** | Phosphate by **protein kinases** | Activates/deactivates proteins; in eukaryotes most often on **Ser, Thr, Tyr** |
| **Carboxylation** | Carboxylic-acid groups | Often creates **calcium-binding** sites |
| **Glycosylation** | Oligosaccharides (in **ER/Golgi**) | Sets **cellular destination** |
| **Prenylation** | Lipid groups | On certain membrane-bound enzymes |

:::realworld
Several clotting factors (including **prothrombin**) need **posttranslational carboxylation** of glutamic-acid residues to work, using **vitamin K** as a cofactor — so vitamin K deficiency can cause a **bleeding disorder**.
:::
`
    },

    /* ──────────────── 7.4 Control of Gene Expression in Prokaryotes ──────────────── */
    {
      id: 's4', num: '7.4', title: 'Control of Gene Expression in Prokaryotes',
      goals: [
        'Recognize the transcriptional controls on key operons such as the lac and trp operons',
        'Differentiate between positive and negative control systems',
        'Explain the role of the different sections of a standard operon'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 7.14 — Operon structure (Jacob–Monod model): regulator gene, promoter, operator, and structural gene; an inducer can pull the repressor off the operator.' }],
      recap: `
- An **operon** is a cluster of genes transcribed as a **single mRNA** under one promoter (common in prokaryotes); described by the **Jacob–Monod model**.
- **Components (5′ → 3′):** **regulator gene** (makes repressor) · **promoter** (RNA pol binds) · **operator** (repressor binds) · **structural gene** (the protein of interest).
- **Negative control** = protein binding **stops** transcription; **positive control** = protein binding **increases** it.
- **Inducible** = normally **off**, turned **on** by an **inducer** (e.g., **lac operon**, a **negative inducible** system; **CAP/cAMP** add positive control).
- **Repressible** = normally **on**, turned **off** by a **corepressor** (e.g., **trp operon**, a **negative repressible** system; tryptophan is the corepressor).
`,
      detail: `
#### Operon structure
Bacteria tune gene expression to available nutrients. The classic example is **E. coli**, where clusters of genes sharing one promoter are transcribed together as an **operon** (e.g., five genes that synthesize **tryptophan** form the **trp operon**).

The **Jacob–Monod model** describes operon parts. From **upstream → downstream**:

| Component (5′ → 3′) | Role |
|---|---|
| **Regulator gene** | Codes for the **repressor** protein |
| **Promoter site** | Where **RNA polymerase binds** (as in eukaryotic promoters) |
| **Operator site** | **Nontranscribable** DNA that **binds the repressor** |
| **Structural gene** | The **protein of interest**; transcribed only when the repressor is off the operator |

There are **two operon types**: **inducible** and **repressible**.

:::keyconcept
Operons include both **inducible** and **repressible** systems and act as a simple **on–off switch** for prokaryotic gene control.
:::

#### The four control terms
"Control" (positive/negative) describes the *effect of binding*; "system" (inducible/repressible) describes the *default state*. They combine freely.

| Term | Meaning |
|---|---|
| **Negative control** | A protein **binding DNA stops** transcription |
| **Positive control** | A protein **binding DNA increases** transcription |
| **Inducible system** | Normally **OFF**; a signal turns it **ON** |
| **Repressible system** | Normally **ON**; a signal turns it **OFF** |

- The **lac operon** = **negative inducible**; the **trp operon** = **negative repressible**.

:::mnemonic
**Induce = turn ON; repress = turn OFF.** An **induc**ible system is induced into action (**lac**: "let's eat lactose"). A **repress**ible system is repressed/shut down (**trp**: "we have enough tryptophan — stop making it"). **Lac is for catabolism, trp is for anabolism.**
:::

#### Inducible systems (the lac operon)
In an inducible system the **repressor is normally bound** to the operator, acting as a **roadblock** so RNA polymerase can't reach the structural gene. Because protein binding **reduces** transcription, this is **negative control**.

- An **inducer** binds the repressor and pulls it off the operator → transcription proceeds.
- Works like **competitive inhibition**: more inducer → more repressor pulled off → more transcription.
- Useful because products are made **only when needed**.

A classic example is the **lac operon** (contains the gene for **lactase**). Lactose digestion is costlier than glucose, so bacteria induce it only when **lactose is high and glucose is low**.

![Figure 7.15 — The lac operon, an inducible system: lactose acts as the inducer.](${fig(3, 1).src})

##### Positive control by CAP
- The **catabolite activator protein (CAP)** boosts lac transcription.
- **Low glucose → high cAMP**; cAMP binds CAP → conformational change → CAP binds the promoter → **more transcription**.
- Because binding **increases** transcription, CAP is a **positive control** mechanism.

#### Repressible systems (the trp operon)
Repressible systems allow **constant production** by default. Here the repressor made by the regulator gene is **inactive until it binds a corepressor**.

- The **repressor + corepressor** complex binds the operator to **stop** transcription.
- Often a form of **negative feedback**: the **final product** itself acts as the corepressor.

![Figure 7.16 — A repressible system: a corepressor activates the repressor to halt transcription.](${fig(3, 2).src})

The **trp operon** works this way as a **negative repressible** system:

- When **tryptophan is high**, it acts as a **corepressor**.
- **Two tryptophan molecules** bind the repressor → the complex binds the operator → the cell **stops synthesizing tryptophan** (which is energetically expensive when it's freely available).
`
    },

    /* ──────────────── 7.5 Control of Gene Expression in Eukaryotes ──────────────── */
    {
      id: 's5', num: '7.5', title: 'Control of Gene Expression in Eukaryotes',
      goals: [
        'Identify the different mechanisms that can be used to regulate or amplify the expression of a gene',
        'Predict how histone and DNA modification will affect the ratio of heterochromatin to euchromatin'
      ],
      images: [{ src: fig(4, 1).src, alt: fig(4, 1).alt, caption: 'Figure 7.18 — Histone acetylation loosens chromatin (heterochromatin → euchromatin), giving transcription factors access to DNA.' }],
      recap: `
- Eukaryotic gene control is more complex than prokaryotic; **transcription factors** (DNA-binding + activation domains) bind **promoters/response elements** to recruit machinery.
- **cis** regulators (promoters, enhancers, response elements) sit near the gene; **trans** regulators (transcription factors) travel to it.
- **Amplify expression** via **enhancers** (response elements that can be **>1000 bp away**, even in introns; DNA loops to reach the promoter) and **gene duplication** (in series or parallel).
- **Chromatin remodeling:** **heterochromatin** = tight, dark, **inactive**; **euchromatin** = loose, light, **active**.
- **Histone acetylation → open chromatin (more expression)**; **histone deacetylation** and **DNA methylation → closed chromatin (gene silencing)**.
`,
      detail: `
#### Why eukaryotic control is harder
Genomic expression in eukaryotes is **considerably more complex** than in prokaryotes (and is tested). Beyond the basic transcriptional enzymes, many **regulatory proteins** tune expression levels.

#### Transcription factors
**Transcription factors** are transcription-activating proteins that search DNA for specific **DNA-binding motifs**. They typically have **two domains**:

| Domain | Function |
|---|---|
| **DNA-binding domain** | Binds a specific sequence in the **promoter** or a **response element** (a sequence that binds only specific factors) to recruit transcriptional machinery |
| **Activation domain** | Binds other transcription factors and regulatory proteins (e.g., **RNA polymerase**, **histone acetylases**) that remodel chromatin |

:::keyconcept
**cis vs. trans regulators.** DNA regulatory sequences (**promoters, enhancers, response elements**) are **cis regulators** — in the same vicinity as the gene they control. **Transcription factors** must be made and shipped back to the nucleus, so they are **trans regulators** — they travel to their site of action.
:::

#### Gene amplification
Once the transcription complex forms, **basal (low-level)** transcription maintains modest protein levels. When more is needed (hormones, growth factors, etc.), eukaryotes **amplify** via **enhancers** and **gene duplication**.

##### Enhancers
- Several **response elements** can group into an **enhancer**, letting **multiple signals** control one gene.
- Signal molecules (**cAMP, cortisol, estrogen**) bind receptors (e.g., **CREB**, the **glucocorticoid receptor**, the **estrogen receptor**) that are transcription factors binding the enhancer's response elements.

![Figure 7.17 — An enhancer and its transcription factors stimulate transcription; DNA loops to reach the promoter.](${fig(4, 0).src})

- Enhancers can sit **up to 1000 bp away** from their gene — even **inside an intron**.
- They differ from **upstream promoter elements**, which must be **within 25 bases** of the gene's start.
- The large distance means DNA often **bends into a hairpin loop** to bring enhancer and promoter together.

##### Gene duplication
- **In series:** many copies of the gene **in a row** on the same chromosome.
- **In parallel:** open the gene with **helicases** and replicate **only that gene** repeatedly → hundreds of parallel copies on the same chromosome.

#### Regulation of chromatin structure
Eukaryotic DNA is packaged as **chromatin**; **chromatin remodeling** controls access for transcription machinery.

| Form | Appearance | Coiling | Genes |
|---|---|---|---|
| **Heterochromatin** | **Dark** | **Tightly** coiled, inaccessible | **Inactive** |
| **Euchromatin** | **Light** | **Loose**, accessible | **Active** |

##### Histone acetylation
- Transcription factors recruit **histone acetylases**, which **acetylate lysine** residues on histone **amino-terminal tails**.
- Acetylation **decreases the positive charge** on lysine → **weakens histone–DNA binding** → **open chromatin** → easier machinery access → **more expression**.
- **Histone deacetylases** remove acetyl groups → **closed chromatin** → **less expression** (gene silencing).

##### DNA methylation
- **DNA methylases** add methyl groups to **cytosine and adenine**.
- Methylation is usually linked to **gene silencing** and is important in **development** (turning off genes no longer needed).
- **Heterochromatin is heavily methylated**, blocking machinery access.

:::mnemonic
**A**cetylation **A**ctivates (opens chromatin); **M**ethylation **M**utes (silences it). Acetylation makes euchromatin; deacetylation + methylation make heterochromatin.
:::

:::keyconcept
**To silence a eukaryotic gene:** **deacetylate histones** and/or **methylate DNA** → chromatin packs tighter → the proportion of **heterochromatin increases** and transcription falls.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'The Genetic Code',
        points: [
          'The **central dogma** states that DNA is **transcribed** to RNA, which is **translated** to protein.',
          'A **degenerate** code lets multiple codons encode the same amino acid; **wobble** (the variable 3rd base) allows mutations without protein change.',
          '**Start (initiation) codon = AUG**; **stop (termination) codons = UAA, UGA, UAG**.',
          '**Point mutations:** **silent** (no effect), **missense** (different amino acid), **nonsense** (premature stop/truncation). **Frameshifts** (insertion/deletion) shift the reading frame and are usually most severe.',
          'RNA differs from DNA by **ribose** (not deoxyribose), **uracil** (not thymine), and being **single-stranded**.',
          'Three RNAs: **mRNA** carries the message, **tRNA** brings amino acids and reads codons via its **anticodon**, **rRNA** builds the ribosome and is **enzymatically active** (ribozyme).'
        ]
      },
      {
        section: 'Transcription',
        points: [
          '**Helicase** unwinds the helix; **RNA polymerase II** binds the **TATA box** in the promoter (~25 bp upstream of +1).',
          '**hnRNA** is synthesized from the **template (antisense)** strand, **5′ → 3′**, antiparallel and complementary to it.',
          'Post-transcriptional processing: **5′ 7-methylguanylate cap**, **3′ poly-A tail**, and **splicing** by **snRNA/snRNPs** in the spliceosome (introns out as a **lariat**, exons ligated).',
          'Eukaryotic polymerases: **I → rRNA** (nucleolus), **II → hnRNA/mRNA + snRNA**, **III → tRNA + some rRNA**.',
          'Prokaryotes diversify products via **polycistronic** genes; eukaryotes via **alternative splicing** (modular exon combinations).'
        ]
      },
      {
        section: 'Translation',
        points: [
          '**tRNA** translates each codon into the correct amino acid; **ribosomes** are the protein-synthesis factories.',
          'Three stages: **initiation, elongation, termination**, each aided by **IF/EF/RF** and **GTP**.',
          'Initiation: prokaryotic **30S** binds the **Shine–Dalgarno** sequence and lays down **fMet**; eukaryotic **40S** binds the **5′ cap** and lays down **Met** — both in the **P site**.',
          'Elongation: new aminoacyl-tRNA enters the **A site**; **peptidyl transferase** transfers the chain from the **P** to the **A** tRNA; the uncharged tRNA pauses in the **E site** before exiting (**APE**).',
          'Termination: a **stop codon** in the A site triggers a **release factor** to add water and free the protein.',
          'Posttranslational mods: **chaperone folding**, **quaternary assembly**, **cleavage**, and covalent additions (**phosphorylation, carboxylation, glycosylation, prenylation**).'
        ]
      },
      {
        section: 'Control of Gene Expression in Prokaryotes',
        points: [
          'The **Jacob–Monod model** of repressors and activators explains how **operons** work.',
          'Operons are **inducible** or **repressible** clusters of genes transcribed as a **single mRNA**.',
          '**Inducible** systems (e.g., **lac**) are normally repressor-bound; an **inducer** pulls the repressor off the operator to turn them on.',
          '**Repressible** systems (e.g., **trp**) are normally transcribed; a **corepressor** activates the repressor to turn them off.',
          '**Negative control** = binding stops transcription; **positive control** (e.g., **CAP/cAMP** on lac) = binding increases it.'
        ]
      },
      {
        section: 'Control of Gene Expression in Eukaryotes',
        points: [
          '**Transcription factors** search for **promoter** and **enhancer** regions in DNA.',
          '**Promoters** lie within **25 bp** of the transcription start site; **enhancers** lie **>25 bp** away (up to ~1000 bp, even within introns).',
          'Expression can be amplified by **enhancers** and **gene duplication** (in series or parallel).',
          'Chromatin remodeling controls access: **histone acetylation increases** accessibility (euchromatin); **DNA methylation** and **histone deacetylation decrease** it (heterochromatin → silencing).'
        ]
      }
    ],
    mnemonics: [
      '**Stop codons:** **UAA** = *U Are Annoying*, **UGA** = *U Go Away*, **UAG** = *U Are Gone*. Start codon **AUG** = methionine ("AUG, go!").',
      '**Transcription vs. translation:** transcription keeps the **same language** (nucleotides → nucleotides); translation **changes the language** (nucleotides → amino acids).',
      '**RNA polymerases 1-2-3 → r-m-t:** pol **I** = **r**RNA, pol **II** = **m**RNA (hnRNA), pol **III** = **t**RNA.',
      '**INtrons stay IN; EXons EXit** — introns are spliced out, exons leave the nucleus in the mRNA.',
      '**Poly-A tail = a fuse:** a longer tail = a longer fuse = longer mRNA survival in the cytoplasm.',
      '**APE:** ribosome sites run **A** (aminoacyl, in) → **P** (peptidyl, bond) → **E** (exit, out).',
      '**lac vs. trp:** **lac** is **inducible** (turn ON to eat lactose — catabolism); **trp** is **repressible** (turn OFF when tryptophan is plentiful — anabolism).',
      '**Acetylation Activates, Methylation Mutes:** acetylated histones open chromatin (euchromatin, active); DNA methylation + deacetylation close it (heterochromatin, silent).'
    ],
    keyConcepts: [
      '**Code is degenerate but unambiguous:** one amino acid → many codons, but one codon → exactly one amino acid; wobble in the 3rd base buffers silent mutations.',
      '**Always written 5′ → 3′, and base-pairing is antiparallel:** an mRNA codon 5′—AUC—3′ pairs with anticodon 5′—GAU—3′; transcription reads the template 3′ → 5′ to build mRNA 5′ → 3′.',
      '**hnRNA → mRNA needs three edits:** 5′ cap, 3′ poly-A tail, and intron/exon splicing — only then can mRNA leave the nucleus and be translated.',
      '**Mutation severity ladder:** silent < missense < nonsense, with **frameshifts** typically the worst because every downstream codon changes.',
      '**Same machinery, opposite logic in operons:** lac (negative inducible) defaults OFF; trp (negative repressible) defaults ON — and CAP layers positive control onto lac.'
    ],
    equations: [
      { name: 'Number of codons', tex: '4^3 = 64', note: '4 bases in 3-base codons → 64 codons; 61 specify amino acids and 3 are stop codons.' },
      { name: 'Coding length (no introns/UTRs)', tex: '\\text{bases between AUG and stop} = 3 \\times (\\text{amino acids})', note: 'A protein of n amino acids uses n+1 codons (the last is the stop codon); the coding region = 3n bases. Introns and UTRs are excluded.' }
    ]
  },

  questions: raw.questions
};
