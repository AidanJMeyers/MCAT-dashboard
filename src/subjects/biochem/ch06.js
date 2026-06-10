// Chapter 6 — DNA and Biotechnology. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch06.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 6,
  title: 'DNA and Biotechnology',
  subtitle: 'DNA structure · eukaryotic chromosome organization · DNA replication · DNA repair · recombinant DNA & biotechnology',

  blocks: [
    /* ───────────────────────── 6.1 DNA Structure ───────────────────────── */
    {
      id: 's1', num: '6.1', title: 'DNA Structure',
      goals: [
        'Identify the structures of, and distinguish between, nucleotides and nucleosides',
        'Recognize the key features and rules of purine and pyrimidine structure and pairing',
        'Recall the structural differences between DNA and RNA molecules'
      ],
      images: [{ src: fig(0, 8).src, alt: fig(0, 8).alt, caption: 'Figure 6.7 — Complementary base-pairing: A–T held by two hydrogen bonds, G–C by three.' }],
      recap: `
- **Nucleoside** = pentose **sugar + nitrogenous base** (joined at C-1′); **nucleotide** = nucleoside **+ 1–3 phosphates** (on C-5′). Nucleotides are DNA's building blocks.
- **DNA = deoxyribose** (H at C-2′); **RNA = ribose** (−OH at C-2′). DNA uses **thymine**, RNA uses **uracil**.
- Backbone = alternating **sugar–phosphate** joined by **3′–5′ phosphodiester bonds**; always read **5′ → 3′**; carries a **net negative charge**.
- **Purines (A, G)** = two rings; **pyrimidines (C, T, U)** = one ring. **A–T = 2 H-bonds; G–C = 3 H-bonds.**
- **Chargaff's rules:** in dsDNA, %A = %T, %G = %C, and total purines = total pyrimidines.
`,
      detail: `
#### Nucleosides vs. nucleotides
DNA (**deoxyribonucleic acid**) is a **polydeoxyribonucleotide** — a polymer of many monodeoxyribonucleotides. Most DNA sits in the **chromosomes** of the nucleus, with small amounts in **mitochondria** and **chloroplasts**. The naming is the classic trap:

| Term | Composition | Bond / attachment site |
|---|---|---|
| **Nucleoside** | five-carbon **pentose** + **nitrogenous base** | base linked to **C-1′** of the sugar |
| **Nucleotide** | nucleoside + **1–3 phosphate** groups | phosphate(s) on **C-5′** |

- Sugar carbons get a **prime (′)** label to distinguish them from base atoms.
- Phosphate count drives the name: adenosine → **AMP → ADP → ATP**.
- **ATP/ADP are high-energy** because the closely packed negative phosphate charges repel one another.

![Figure 6.1 — Examples of nucleosides (base joined to C-1′ of the pentose).](${fig(0, 3).src})

:::bridge
From *MCAT General Chemistry Review*, Ch. 3: bond breaking is usually endothermic and bond making exothermic. **ATP is the MCAT-tested exception** — the crowded negative charges mean that *removing* the terminal phosphate actually **releases** energy to power the cell.
:::

#### DNA vs. RNA: the sugar decides
Nucleic acids are classified by their pentose. If the 2′ carbon bears an **−OH**, it is **ribose → RNA**; if that −OH is replaced by **−H**, it is **deoxyribose → DNA**.

![Figure 6.3 — Ribose (2′ −OH) vs. deoxyribose (2′ −H).](${fig(0, 4).src})

| Feature | **DNA** | **RNA** |
|---|---|---|
| Sugar | **Deoxyribose** (2′ −H) | **Ribose** (2′ −OH) |
| Pyrimidine bases | C and **T** (thymine) | C and **U** (uracil) |
| Strandedness (typical) | **Double**-stranded (dsDNA) | **Single**-stranded (ssRNA) |

*Note:* there is no "thymidine" — only **deoxythymidine** — because thymine appears almost exclusively in DNA.

#### Sugar–phosphate backbone & polarity
- Nucleotides are joined by **3′–5′ phosphodiester bonds**: a phosphate links the **3′ carbon** of one sugar to the **5′ phosphate** of the next.
- Phosphates are negative → DNA and RNA carry an **overall negative charge** (key for gel electrophoresis later).
- Each strand has distinct ends: **5′ end** (−OH or phosphate on C-5′) and **3′ end** (free −OH on C-3′).
- Sequence is always **written and read 5′ → 3′**. The strand below is written **5′—ATG—3′** (or just ATG).

![Figure 6.4 — DNA strand polarity: strands are antiparallel; replication/transcription run 5′ → 3′.](${fig(0, 5).src})

:::expertise
**Always check polarity.** A favorite way the MCAT generates wrong answers is reversing the reading frame: 3′—GATTACA—5′ is **not** the same as 3′—ACATTAG—5′.
:::

#### Purines and pyrimidines
Two families of nitrogenous bases:

| Class | Rings | Bases | Found in |
|---|---|---|---|
| **Purines** | **Two** | **Adenine (A)**, **Guanine (G)** | DNA **and** RNA |
| **Pyrimidines** | **One** | **Cytosine (C)** | DNA **and** RNA |
| | | **Thymine (T)** | **DNA only** |
| | | **Uracil (U)** | **RNA only** |

![Figure 6.5 — Bases commonly found in nucleic acids.](${fig(0, 6).src})

:::mnemonic
**CUT the PYe** → **C**, **U**, **T** are **PY**rimidines (pie has *one* ring of crust = one ring in structure).
**PURe As Gold** → **A** and **G** are **PUR**ines (gold wedding rings — it takes *two* rings at a wedding = two rings in structure).
:::

##### Why aromatic stability matters
Purines and pyrimidines are biological **aromatic heterocycles**. **Aromaticity** requires four things:

1. **Cyclic**
2. **Planar**
3. **Conjugated** — alternating single/multiple bonds (or lone pairs) giving each ring atom an unhybridized **p-orbital**
4. **4n + 2 π electrons** (**Hückel's rule**)

![Figure 6.6 — Delocalized π-electron clouds above and below the plane of benzene.](${fig(0, 7).src})

Delocalized π electrons make aromatic rings **unusually stable and unreactive**. **Heterocycles** contain ≥2 different elements in the ring (here, nitrogen). This stability is exactly why nucleotides are ideal for **archiving genetic information**.

#### Watson–Crick model
In **1953**, **Watson and Crick** — building on **Rosalind Franklin's** X-ray diffraction — deduced the **double helix**. Key features:

- **Antiparallel** strands: one runs 5′ → 3′ down the page, the other 5′ → 3′ up the page.
- **Sugar–phosphate backbone outside**, **bases inside**.
- **Complementary base-pairing:** **A–T via two H-bonds**, **G–C via three H-bonds** (so **G–C is stronger**). H-bonds + hydrophobic base stacking stabilize the helix.
- The sequence of one strand therefore **defines** the other.

:::keyconcept
A complementary strand must be both **complementary *and* antiparallel**. Example: **5′—ATCG—3′** pairs with **5′—CGAT—3′** (not 5′—TAGC—3′).
:::

##### Chargaff's rules
Because pairing is specific: **%A = %T** and **%G = %C**, so **total purines = total pyrimidines**.

:::expertise
**Worked Chargaff problem.** If a dsDNA sample is **10% G**: then %C = 10%, so %G + %C = 20%. That leaves **%A + %T = 80%**, and since %A = %T → **%T = 40%**.
:::

##### B-DNA vs. Z-DNA

| Form | Handedness | Turn | Bases/turn | Notes |
|---|---|---|---|---|
| **B-DNA** (most DNA) | **Right**-handed | every **3.4 nm** | ~**10** | **Major & minor grooves** = protein-binding sites |
| **Z-DNA** | **Left**-handed | every **4.6 nm** | **12** | "Zigzag"; favored by **high GC** or **high salt**; no known biological activity (unstable) |

![Figure 6.8 — The right-handed B-DNA double helix.](${fig(0, 9).src})

#### Denaturation and reannealing
- **Denaturation** ("melting") breaks **H-bonds/base-pairing** → two separated single strands. **Covalent backbone bonds stay intact.**
- Triggers: **heat, alkaline pH, formaldehyde, urea**.
- **Reannealing** occurs when the denaturing condition is *slowly* removed (e.g., slow cooling) → complementary strands re-pair.

![Figure 6.9 — Denaturation and reannealing of DNA.](${fig(0, 10).src})

Controlled annealing underlies lab methods like **PCR** and probe-based detection: a known **probe DNA** binds (**hybridizes**) to a complementary **target** sequence, flagging a gene of interest.
`
    },

    /* ───────────── 6.2 Eukaryotic Chromosome Organization ───────────── */
    {
      id: 's2', num: '6.2', title: 'Eukaryotic Chromosome Organization',
      goals: [
        'Recall the names and the role of the five histone proteins',
        'Differentiate between the major characteristics of heterochromatin and euchromatin',
        'Describe the traits of telomeres and centromeres'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 6.10 — Nucleosome: ~200 bp of DNA wound around a histone core ("beads on a string").' }],
      recap: `
- **>6 billion bases** are packed into **46 chromosomes** by winding DNA around **histones** → **chromatin**.
- **5 histones:** core = **2× each of H2A, H2B, H3, H4** (octamer); **H1** seals DNA entering/leaving the **nucleosome**.
- **Heterochromatin** = dense, **dark**, transcriptionally **silent**; **euchromatin** = dispersed, **light**, transcriptionally **active**.
- **Telomeres** = repetitive **(TTAGGG)** chromosome ends; high GC prevents unraveling; rebuilt by **telomerase**; shortening → aging.
- **Centromeres** = central heterochromatin (tandem repeats, high GC) holding **sister chromatids** until **anaphase**.
`,
      detail: `
#### Histones and nucleosomes
Each human cell holds **over 6 billion bases** of DNA divided among **46 chromosomes**. Supercoiling alone is not enough compaction — DNA is wound around **histones** (small, **basic** proteins), forming **chromatin**.

| Histone | Role |
|---|---|
| **H2A, H2B, H3, H4** | **Two copies each** form the **histone core** (octamer); ~**200 bp** of DNA wrap around it → a **nucleosome** |
| **H1** | **Seals** the DNA as it enters/leaves the nucleosome, adding stability |

- Under EM, nucleosomes look like **"beads on a string."**
- Histones are **nucleoproteins** (proteins that associate with DNA); most *other* nucleoproteins are **acid-soluble** and tend to **stimulate transcription**.

#### Heterochromatin vs. euchromatin
During interphase most chromatin is diffuse so it can be **replicated (S phase)** and transcribed efficiently. The packing state splits chromatin into two classes:

| Trait | **Heterochromatin** | **Euchromatin** |
|---|---|---|
| Packing density | **Dense / condensed** | **Loose / uncondensed** |
| Light-microscope appearance | **Dark** | **Light** |
| Transcriptional activity | **Silent** | **Active** |
| Typical content | Highly **repetitive** sequences | Genetically **active** genes |

:::keyconcept
**Heterochromatin is dark, dense, and silent. Euchromatin is light, uncondensed, and expressed.**
:::

#### Telomeres and centromeres
DNA replication **cannot copy all the way to the 5′ end**, so chromosomes would shorten each cycle. Two specialized regions solve different problems:

| Region | Location | Sequence | Function |
|---|---|---|---|
| **Telomere** | Chromosome **ends/tips** | repetitive **TTAGGG**, high **GC** | Buffer against end-loss; **high GC "knots off" the end** to prevent unraveling; rebuilt by **telomerase** |
| **Centromere** | Chromosome **center** (constriction) | tandem repeats, high **GC**, **heterochromatin** | Holds **sister chromatids** together until **microtubules** separate them in **anaphase** |

- **Telomerase** is more highly expressed in **rapidly dividing cells**; progressive telomere shortening is linked to **aging**.

:::realworld
**Cisplatin** chemotherapy binds DNA and traps repair complexes, blocking repair. A guided passage showed that **butyrate** boosts cisplatin's effect by driving **histone acetylation**: acetyl groups mask the **positive lysine charges** on histones, so histones release the negative DNA. Heterochromatin loosens into **euchromatin**, exposing the DNA to cisplatin → unrepaired damage → apoptosis.
:::
`
    },

    /* ───────────────────────── 6.3 DNA Replication ───────────────────────── */
    {
      id: 's3', num: '6.3', title: 'DNA Replication',
      goals: [
        'List the names and functions of the major enzymes of DNA synthesis in prokaryotes and eukaryotes',
        'Differentiate between synthesis of the leading and lagging strands',
        'Explain the role of telomerase and the function of the telomere'
      ],
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 6.15 — Enzymes of DNA replication: helicase, gyrase, polymerase, and ligase build two identical molecules.' }],
      recap: `
- DNA unwinds at **origins of replication** → two **replication forks**; prokaryotes have **one** origin, eukaryotes **many**.
- **Helicase** unwinds; **SSBPs** keep strands apart; **topoisomerase/gyrase** relieves supercoiling; **primase** lays the **RNA primer**.
- Replication is **semiconservative**; polymerase **reads 3′ → 5′**, **synthesizes 5′ → 3′**.
- **Leading strand** = continuous (one primer); **lagging strand** = discontinuous **Okazaki fragments** (many primers).
- **Telomerase** rebuilds the **telomeres** that DNA polymerase can't finish at the 5′ end.
`,
      detail: `
#### Origins and replication forks
The **replisome** (replication complex) is the team of proteins assisting DNA polymerase. Replication begins at **origins of replication**, where DNA unwinds and proceeds **bidirectionally**, creating a **replication fork** on each side.

![Figure 6.12 — Bidirectional replication forks form on both sides of an origin.](${fig(2, 0).src})

| Feature | **Prokaryotes** | **Eukaryotes** |
|---|---|---|
| Chromosome | Single **circular** dsDNA | Multiple **linear** dsDNA |
| Origins | **One** per chromosome | **Many** per chromosome |
| Speed | Faster | Slower (far more bases) |

![Figure 6.13 — DNA replication in prokaryotes vs. eukaryotes.](${fig(2, 1).src})

:::realworld
Antibiotics ending in **–floxacin** (ciprofloxacin, moxifloxacin) are **fluoroquinolones**; they target the prokaryotic topoisomerase **DNA gyrase**, halting bacterial replication. Common for pneumonia and genitourinary infections.
:::

#### Unwinding and strand stabilization
- **Helicase** unwinds the helix → two single-stranded templates.
- Exposed bases are "sticky," so **single-stranded DNA-binding proteins (SSBPs)** coat them to prevent **reannealing** and **nuclease degradation**.
- Unwinding introduces **positive supercoils** (torsional strain). **DNA topoisomerases** work *ahead* of helicase, **nicking** one/both strands to introduce **negative supercoils**, then resealing.

Replication is **semiconservative**: each daughter helix keeps **one parental strand + one new strand**.

![Figure 6.14 — Semiconservative replication: one old parent strand + one new daughter strand per helix.](${fig(2, 2).src})

#### Directionality: leading vs. lagging
DNA polymerase **reads the template 3′ → 5′** and **synthesizes 5′ → 3′**, giving the required **antiparallel** product. Because the two parental strands are themselves antiparallel, the two sides of a fork behave differently:

| | **Leading strand** | **Lagging strand** |
|---|---|---|
| Direction vs. fork | **Same** direction (toward fork) | **Opposite** direction |
| Synthesis | **Continuous** | **Discontinuous** → **Okazaki fragments** |
| Primers needed | **One** (in theory) | **Many** (one per fragment) |
| Mutation risk | Lower | **Higher** (more primers/joins) |

:::keyconcept
With the exception of DNA polymerase's **reading** direction (and a few untested endonucleases), **everything in molecular biology runs 5′ → 3′**: DNA synthesis, DNA repair, RNA transcription, and translation (codon reading). DNA polymerase **reads** 3′ → 5′ but **builds** 5′ → 3′.
:::

#### Step-by-step synthesis
1. **Primer first.** DNA can't start **de novo**, so **primase** lays a short (~10 nt) **RNA primer** 5′ → 3′. The leading strand needs ~one; the lagging strand needs a new primer for each Okazaki fragment.
2. **Elongation.** **DNA pol III** (prokaryotes) or **DNA pol α, δ, ε** (eukaryotes) add **5′-deoxyribonucleotide triphosphates** (dATP, dCTP, dGTP, dTTP), releasing **pyrophosphate (PPᵢ)** per bond.
3. **Primer removal.** **DNA pol I** (prokaryotes) or **RNase H** (eukaryotes) excises RNA; **DNA pol I** (prokaryotes) or **DNA pol δ** (eukaryotes) fills with DNA.
4. **Sealing.** **DNA ligase** joins the fragments into one continuous strand.

| Step | **Prokaryotic** | **Eukaryotic (nuclei)** |
|---|---|---|
| Origin of replication | One per chromosome | Multiple per chromosome |
| Unwinding | **Helicase** | **Helicase** |
| Stabilize templates | **SSBP** | **SSBP** |
| RNA primer synthesis | **Primase** | **Primase** |
| DNA synthesis | **DNA pol III** | **DNA pol α, δ, ε** |
| Remove RNA primers | **DNA pol I** (5′→3′ exonuclease) | **RNase H** (5′→3′ exonuclease) |
| Replace RNA with DNA | **DNA pol I** | **DNA pol δ** |
| Join Okazaki fragments | **DNA ligase** | **DNA ligase** |
| Relieve supercoils | **Topoisomerase (DNA gyrase)** | **Topoisomerase** |
| Synthesize telomeres | **Not applicable** | **Telomerase** |

##### The eukaryotic polymerases (know these cold)
- **α, δ, ε** synthesize leading and lagging strands; **δ** also fills gaps after primer removal.
- **γ** replicates **mitochondrial** DNA.
- **β and ε** are important in **DNA repair**.
- **δ and ε** are held to the template by **PCNA**, which trimerizes into the **sliding clamp**.

#### Replicating chromosome ends
DNA polymerase **cannot finish the 5′ end**, so each round shortens the chromosome. **Telomeres** — repetitive, high-GC tips — can be slightly degraded between cycles **without loss of function**, buying time before essential genes are damaged.
`
    },

    /* ───────────────────────── 6.4 DNA Repair ───────────────────────── */
    {
      id: 's4', num: '6.4', title: 'DNA Repair',
      goals: [
        'Describe the major DNA repair processes, including proofreading, mismatch repair, and excision repair',
        'Recognize the key components and locations of each DNA repair process, including both mismatch and excision processes',
        'Identify major traits of oncogenes and tumor suppressor genes'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 6.17 — UV-induced thymine dimer corrected by nucleotide excision repair (cut-and-patch).' }],
      recap: `
- **Oncogenes** (mutated **proto-oncogenes**) **promote** the cell cycle — **dominant**, one hit suffices (e.g., **src**).
- **Tumor suppressors** (**p53, Rb**) normally **brake** the cycle / aid repair — **recessive**, need **two hits**.
- **Proofreading** (S phase): polymerase excises mispairs; identifies the daughter strand by **low methylation**.
- **Mismatch repair** (G2): **MSH2, MLH1** (= **MutS/MutL** in prokaryotes).
- **NER** fixes **helix-distorting** lesions (thymine dimers) via **excision endonuclease**; **BER** fixes **non-distorting** lesions (cytosine→uracil) via **glycosylase + AP endonuclease**.
`,
      detail: `
#### Oncogenes vs. tumor suppressor genes
Damaged DNA, if uncorrected, is copied into daughter cells and can drive **cancer** — unchecked proliferation able to **locally invade** or **metastasize** (spread via blood/lymph). Two gene classes are central:

| | **Oncogene** | **Tumor suppressor gene** |
|---|---|---|
| Normal form | **Proto-oncogene** (drives cell cycle) | Brakes cycle / aids **DNA repair** (e.g., **p53**, **Rb**) |
| Mutation effect | Protein **overactive** → too much cycling | **Loss of function** → no braking |
| Dominance | **Dominant** — one mutated copy suffices | **Recessive** — needs **two hits** (both alleles) |
| Classic example | **src** (sarcoma) | **p53**, **Rb** (antioncogenes) |

:::keyconcept
Same outcome (cancer), opposite cause: **oncogenes are like flooring the gas pedal; mutated tumor suppressors are like cutting the brakes.**
:::

#### Proofreading and mismatch repair

##### Proofreading (S phase)
As DNA passes through the polymerase, **mispaired bases destabilize** the local H-bonding and are detected, excised, and replaced.

- **Strand discrimination:** the **template (parent)** strand is **more heavily methylated** (older); the new daughter strand is barely methylated, so the enzyme knows which base to fix.
- **DNA ligase lacks proofreading** → the **lagging strand** (many joins) is **more mutation-prone** than the leading strand.

![Figure 6.16 — Proofreading by DNA polymerase removes a mispaired base.](${fig(3, 0).src})

##### Mismatch repair (G2 phase)
Errors missed during S phase are caught in **G2** by **MSH2** and **MLH1** (homologues of prokaryotic **MutS** and **MutL**).

#### Excision repair
Most repair pathways **recognize a lesion → remove it → resynthesize using the complementary strand**. Two act in **G1 and G2**:

| Pathway | Lesion type | Example trigger | Key enzymes | Steps |
|---|---|---|---|---|
| **Nucleotide excision repair (NER)** | **Helix-distorting** (bulky) | **UV → thymine dimers** | **Excision endonuclease**, DNA pol, ligase | Recognize bulge → nick **both sides** → remove oligonucleotide → fill (5′→3′) → seal |
| **Base excision repair (BER)** | **Non-distorting** (small) | **Cytosine deamination → uracil** | **Glycosylase**, **AP endonuclease**, DNA pol, ligase | Glycosylase removes base → leaves **AP (abasic) site** → AP endonuclease excises → fill → seal |

- **Cytosine deamination** converts C → **uracil**; uracil "doesn't belong" in DNA, so it's flagged and corrected by **BER**.

:::mnemonic
**N**ER fixes **N**oticeable (helix-distorting) lesions; **B**ER fixes **B**arely-there (non-distorting) base changes. Both end the same way: **DNA polymerase fills, DNA ligase seals.**
:::

:::expertise
**Repair timing for the MCAT:** proofreading = **S**; mismatch repair = **G2**; NER and BER = **G1 and G2**. Repair is **least active during M phase** — interphase repair exists precisely to prevent passing errors into mitosis.
:::
`
    },

    /* ───────────── 6.5 Recombinant DNA and Biotechnology ───────────── */
    {
      id: 's5', num: '6.5', title: 'Recombinant DNA and Biotechnology',
      goals: [
        'Predict the most effective DNA library technique for a given laboratory application',
        'Recall the inputs and outputs of biotechnology techniques, including PCR, Southern blotting, and sequencing',
        'Describe the differences between transgenic mice and knockout mice'
      ],
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'Figure 6.18 — DNA cloning: a fragment ligated into a vector is amplified in bacteria for protein production or analysis.' }],
      recap: `
- **Recombinant DNA** combines nucleotides from two sources; amplify a fragment by **cloning** or **PCR**.
- **Cloning:** ligate DNA into a **vector** (plasmid with **ori + antibiotic-resistance gene**); **restriction enzymes** cut **palindromic** sites → **sticky ends**.
- **Genomic library** = all DNA (introns + exons); **cDNA library** = reverse-transcribed mRNA → **exons only**, used for recombinant proteins & gene therapy.
- **PCR** = thermal-cycled amplification using **Taq polymerase** + primers; **gel electrophoresis** separates DNA by size (migrates to **anode**).
- **Southern blot** detects a DNA sequence via a labeled probe; **Sanger sequencing** uses chain-terminating **dideoxynucleotides (ddNTPs)**.
`,
      detail: `
#### DNA cloning and restriction enzymes
**Recombinant DNA technology** multiplies a DNA fragment from any source (by **cloning** or **PCR**) to analyze/alter genes, run genetic tests, perform gene therapy, or mass-produce proteins like **recombinant insulin**.

**Cloning workflow:** ligate the DNA of interest into a **vector** (usually a bacterial/viral **plasmid**) → form a **recombinant vector** → transform a **host bacterium** → grow colonies → select. An **antibiotic-resistance gene** on the vector lets antibiotics **kill non-recombinant colonies**. The colony is then grown to **express protein** or lysed to **re-isolate the cloned DNA**.

**Restriction enzymes (restriction endonucleases):**

- Recognize specific **palindromic** dsDNA sequences (the 5′→3′ sequence reads the same on both antiparallel strands), e.g. **GAATTC** (EcoRI).
- Isolated from **bacteria**, where they form a **restriction–modification system** defending against viral DNA.
- Offset cuts leave **sticky ends** that help a fragment recombine with a vector cut by the **same enzyme**.

![Figure 6.19 — EcoRI cuts the palindrome GAATTC, leaving complementary sticky ends.](${fig(4, 1).src})

A usable vector needs: ≥1 **restriction site**, an **origin of replication**, and ≥1 **antibiotic-resistance gene**.

![Figure 6.20 — Formation of a recombinant plasmid (ori = origin; ampʳ = ampicillin resistance).](${fig(4, 2).src})

#### DNA libraries and cDNA
A **DNA library** is a large collection of cloned sequences.

![Figure 6.21 — Building a cDNA library by reverse-transcribing processed mRNA.](${fig(4, 3).src})

| Feature | **Genomic library** | **cDNA (expression) library** |
|---|---|---|
| Source DNA | **Chromosomal DNA** | **mRNA** → cDNA |
| Enzymes | **Restriction endonuclease** + DNA ligase | **Reverse transcriptase** + DNA ligase |
| Noncoding regions / introns | **Yes** | **No** |
| Genes complete? | Not necessarily (may split across vectors) | **Yes** |
| Promoters/enhancers | Yes (maybe different clone) | No |
| Expressible in host (recombinant protein)? | **No** | **Yes** |
| Gene therapy / transgenic animals? | **No** | **Yes** |

**Hybridization** — joining of complementary sequences (**DNA–DNA** or **DNA–RNA**) — uses two single strands and underlies **both PCR and Southern blotting**.

#### Polymerase chain reaction (PCR)
**PCR** is an automated way to make **millions of copies** of a sequence **without bacteria**. Inputs: **primers** flanking the region, **dNTPs**, and a **heat-stable DNA polymerase**.

- Primers are best at **40–60% GC** (extra G–C H-bonds add stability).
- Heat **denatures** the helix, but human polymerase denatures too — so PCR uses **Taq polymerase** from **Thermus aquaticus** (thrives at ~70°C in Yellowstone hot springs).
- Cycle = **denature → anneal → extend**; each cycle **doubles** the DNA.

:::bridge
PCR is a vivid example of **enzyme temperature dependence**: human DNA polymerase denatures at PCR temperatures, while **Taq** functions optimally there. See *MCAT Biochemistry Review*, Ch. 2, on temperature and enzyme activity.
:::

#### Gel electrophoresis and Southern blotting
- **Gel electrophoresis** separates DNA by **size and charge**. DNA is **negative** (phosphate backbone), so **all fragments migrate toward the anode**; **agarose** is the preferred gel and **longer strands migrate slower**.
- **Southern blot** detects the **presence and quantity** of DNA strands:
  1. Cut DNA with **restriction enzymes**.
  2. Separate by **gel electrophoresis**.
  3. Transfer to a **membrane** (separation retained).
  4. Probe with a **labeled single-stranded DNA** (radioisotope or indicator protein) that binds its complement.

#### DNA sequencing (Sanger)
A sequencing reaction contains the replication players (**template, primers, DNA polymerase, dNTPs**) **plus** low-concentration **dideoxyribonucleotides (ddATP, ddCTP, ddGTP, ddTTP)**.

- ddNTPs carry **−H at C-3′ instead of −OH**, so once incorporated **the chain cannot elongate** (chain termination).
- This yields fragments of **every possible length**, each ending in a labeled base; **gel electrophoresis** orders them by size so the sequence is **read directly**.

:::realworld
The **Human Genome Project** (1991, first draft 2000) sequenced all **3 billion base pairs**. It revealed that two unrelated humans share **over 99.9%** of their DNA.
:::

#### Applications: gene therapy
**Gene therapy** treats diseases caused by a **mutated/inactive gene** by delivering a **normal copy** into affected tissue — usually via a **modified virus** (part of the viral genome is swapped for the cloned gene so it **infects but can't replicate**).

![Figure 6.22 — Retroviral gene therapy delivers a functional gene into host cells.](${fig(4, 4).src})

- First success: **SCID** in **1990**. About half of SCID cases involve a mutated **γ-chain** shared by several interleukin receptors.
- **Risk:** randomly integrated DNA may **activate a host oncogene** — a few SCID patients later developed **leukemia**.

:::realworld
**Jesse Gelsinger** (age 18), in a gene-therapy trial for **OTC deficiency** (a urea-cycle defect), died of a **massive immune response to the viral vector** amid questionable consent practices — a landmark cautionary tale in biotech ethics.
:::

#### Transgenic and knockout mice

| | **Transgenic mouse** | **Knockout mouse** |
|---|---|---|
| Modification | A cloned **transgene** is **added** to the germ line / embryonic stem cells | A gene is **intentionally deleted** ("knocked out") |
| Best for | Studying **dominant** alleles / disease from embryo → adult | Studying **loss** of a gene's function |

- **Microinjection** into a fertilized ovum: transgene may incorporate into the zygote; offspring carry it in **all cells (incl. germ line)**. Copy number is **uncontrolled**, so it's weak for **recessive** disease models.

![Figure 6.23 — Creation of a transgenic mouse.](${fig(4, 5).src})

- **Embryonic stem-cell** approach: introduce the gene in culture, **select** successful cells, inject into a **blastocyst**. The result is a **chimera** — patches of cells from two lineages (visible as a **patchy two-color coat**). Chimeras are bred to yield **heterozygous** and **homozygous** transgenics.

:::expertise
**Library → application logic:** if a question needs **recombinant protein, gene therapy, or transgenic animals**, the answer is a **cDNA library** (expressed exons only). If it needs **introns, promoters, or whole-genome** sequence, use a **genomic library**.
:::

#### Safety and ethics
Biotechnology raises real concerns: **pathogen/antibiotic resistance**, environmental impact, **privacy** of genetic information affecting relatives, **consent** (especially for incapacitated subjects), and the ethics of selecting for traits or terminating pregnancies based on genetic testing.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'DNA Structure',
        points: [
          '**Nucleoside** = pentose sugar + nitrogenous base (at C-1′); **nucleotide** = nucleoside + 1–3 phosphates (at C-5′). DNA uses **deoxyribose**, RNA uses **ribose**.',
          'Backbone = alternating sugar–phosphate via **3′–5′ phosphodiester bonds**, read **5′ → 3′**; strands are **antiparallel** in a **double helix**.',
          '**Purines (A, G)** pair with **pyrimidines (C, T, U)**: **A–T = 2 H-bonds**, **G–C = 3 H-bonds**; RNA uses **U** instead of T.',
          'Purines and pyrimidines are **aromatic heterocycles** (cyclic, planar, conjugated, **4n + 2 π electrons**) → exceptional stability.',
          "**Chargaff's rules:** in dsDNA, %A = %T, %G = %C, total purines = total pyrimidines.",
          'Most DNA is right-handed **B-DNA**; **Z-DNA** (left-handed, zigzag) is favored by high GC / high salt. DNA can be **denatured** (heat, alkali, formaldehyde, urea) and **reannealed**.'
        ]
      },
      {
        section: 'Eukaryotic Chromosome Organization',
        points: [
          'Human DNA is organized into **46 chromosomes**; DNA wound on **histones** = **chromatin**.',
          '**Core histones** H2A, H2B, H3, H4 (two each) form a **nucleosome**; **H1** seals it.',
          '**Heterochromatin** = dense, dark, **silent**; **euchromatin** = loose, light, **active**.',
          '**Telomeres** (high-GC chromosome ends) resist unraveling and are rebuilt by **telomerase**; **centromeres** (central, high-GC) hold sister chromatids until **anaphase**.'
        ]
      },
      {
        section: 'DNA Replication',
        points: [
          'The **replisome** unwinds DNA at **origins** (prokaryotes: **one**; eukaryotes: **many**), forming **replication forks**.',
          '**Helicase** unwinds; **SSBPs** prevent reannealing; **topoisomerase** relieves supercoiling via nicks.',
          'Replication is **semiconservative**; polymerase **reads 3′ → 5′** and **synthesizes 5′ → 3′** after **primase** lays an **RNA primer**.',
          '**Leading strand** = continuous (one primer); **lagging strand** = **Okazaki fragments** (many primers); **DNA ligase** joins them.',
          'Prokaryotic **DNA pol III** ≈ eukaryotic **α/δ/ε**; primer removal by **DNA pol I** / **RNase H**; **telomerase** extends eukaryotic telomeres.'
        ]
      },
      {
        section: 'DNA Repair',
        points: [
          '**Oncogenes** (from proto-oncogenes) **promote** cycling and are **dominant**; **tumor suppressors** (p53, Rb) brake cycling and are **recessive** (two hits).',
          '**Proofreading** (S phase): polymerase excises mispairs, using **methylation** to identify the parent strand.',
          '**Mismatch repair** (G2): **MSH2/MLH1** (MutS/MutL in prokaryotes).',
          '**NER** fixes **helix-distorting** lesions (thymine dimers) with an **excision endonuclease**; **BER** fixes **non-distorting** lesions (cytosine→uracil) via **glycosylase** + **AP endonuclease**.'
        ]
      },
      {
        section: 'Recombinant DNA and Biotechnology',
        points: [
          '**Cloning** ligates a fragment into a **vector** (ori + antibiotic-resistance gene); **restriction enzymes** cut **palindromes** into **sticky ends**.',
          '**Genomic libraries** include introns/noncoding DNA; **cDNA libraries** (reverse-transcribed mRNA) hold **exons only** and enable recombinant proteins & gene therapy.',
          '**PCR** amplifies DNA via thermal cycling with **Taq polymerase**; **gel electrophoresis** separates by size (toward the **anode**); **Southern blot** probes for a sequence.',
          '**Sanger sequencing** uses chain-terminating **ddNTPs** (no 3′ −OH).',
          '**Gene therapy** delivers a functional gene by viral vector; **transgenic mice** add a gene (chimeras → bred to homozygosity), **knockout mice** delete one.'
        ]
      }
    ],
    mnemonics: [
      '**CUT the PYe:** **C**ytosine, **U**racil, **T**hymine are **PY**rimidines (one ring, like a pie\'s single crust).',
      '**PURe As Gold:** **A**denine and **G**uanine are **PUR**ines (two rings, like two gold wedding bands).',
      '**Pairing H-bond count:** "**A**t **T**wo, **G**reat **C**ity has **three**" → A–T = **2** H-bonds, G–C = **3** H-bonds (G–C is stronger; high GC = higher melting temp).',
      '**Heterochromatin = dark, dense, dead (silent); euchromatin = light, loose, lively (active).**',
      '**5′ → 3′ for everything** except DNA polymerase *reading* (3′ → 5′): synthesis, repair, transcription, translation all go 5′ → 3′.',
      '**Repair pedals:** **oncogene = gas pedal** (floored); **mutated tumor suppressor = cut brakes** — same crash (cancer), opposite cause.',
      '**N**ER = **N**oticeable/helix-distorting lesions (thymine dimers); **B**ER = **B**arely-there base swaps (cytosine→uracil).',
      '**Taq for hot PCR:** human polymerase melts, but **T**hermus **aq**uaticus polymerase loves the heat.'
    ],
    keyConcepts: [
      '**Complementary *and* antiparallel:** writing a complement means flipping polarity too — 5′—ATCG—3′ pairs with 5′—CGAT—3′, never 5′—TAGC—3′.',
      '**GC content drives stability:** three H-bonds per G–C pair → higher melting temperature, stronger telomere/centromere ends, and better PCR primers.',
      '**Lagging strand is mutation-prone:** many primers and joins, and **DNA ligase lacks proofreading**.',
      "**Chargaff only applies to dsDNA:** single-stranded RNA need not satisfy %A = %U or %G = %C.",
      '**cDNA vs. genomic libraries:** need expression (proteins, gene therapy, transgenics) → **cDNA** (exons only); need introns/promoters/whole genome → **genomic**.'
    ],
    equations: [
      { name: "Chargaff's rules (dsDNA)", tex: '\\%A = \\%T \\quad\\text{and}\\quad \\%G = \\%C', note: 'Total purines = total pyrimidines. Use it to back out unknown base percentages (e.g., 10% G → 40% T).' }
    ]
  },

  questions: raw.questions
};
