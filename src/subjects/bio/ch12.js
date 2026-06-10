// Chapter 12 — Genetics and Evolution. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch12.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 12,
  title: 'Genetics and Evolution',
  subtitle: 'Fundamental concepts of genetics · changes in the gene pool · analytical approaches in genetics · evolution',

  blocks: [
    /* ───────────── 12.1 Fundamental Concepts of Genetics ───────────── */
    {
      id: 's1', num: '12.1', title: 'Fundamental Concepts of Genetics',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 12.1 — Incomplete Dominance: a red snapdragon × white snapdragon gives pink heterozygotes; selfing them gives a 1:2:1 red:pink:white ratio.' }],
      recap: `
- **Genes** (DNA sequences coding heritable traits) sit at a fixed **locus** on a **chromosome**; alternative versions are **alleles**.
- **Genotype** = the alleles you carry; **phenotype** = the observable trait that genotype produces.
- **Dominant** (capital letter) needs only **one** copy to show; **recessive** (lowercase) needs **two**. **Homozygous** = two identical alleles, **heterozygous** = two different, **hemizygous** = only one copy present (e.g., X-linked genes in males).
- **3 dominance patterns**: **complete** (dominant masks recessive), **codominance** (both alleles fully expressed — ABO blood), **incomplete dominance** (heterozygote is a *blend* — red × white → pink).
- **Penetrance** (population: *what fraction with the genotype show it?*) ≠ **expressivity** (individual: *how differently is it shown?*).
- **Mendel's 1st law (segregation)** ↔ **anaphase I**; **2nd law (independent assortment)** ↔ **prophase I** crossing over. **Griffith → Avery–MacLeod–McCarty → Hershey–Chase** proved **DNA**, not protein, is the genetic material.
`,
      detail: `
#### Genes, alleles, and the vocabulary of genetics
The physical and biochemical traits of an organism are set by **genes** — DNA sequences coding heritable traits. Genes (plus a large supply of noncoding DNA) are packaged into **chromosomes** so genetic material passes cleanly to daughter cells in mitosis and meiosis. A gene may exist in alternative forms called **alleles** (the ABO blood gene has three: I^A^, I^B^, and i). The combination of alleles an individual carries is the **genotype**; the observable manifestation of that genotype is the **phenotype**.

Humans carry two copies of each chromosome — **homologues** — except the male sex chromosomes (one X, one Y). Each gene has a particular **locus** (its location on a specific chromosome), consistent across people, so a gene can be described by its location.

| Term | Definition | MCAT cue |
|---|---|---|
| **Genotype** | The set of alleles an individual carries | The "code" |
| **Phenotype** | The observable trait produced | The "output" |
| **Dominant** | Needs only **one** copy to be expressed | **CAPITAL** letter |
| **Recessive** | Needs **two** copies to be expressed | **lowercase** letter |
| **Homozygous** | Both alleles the **same** (AA or aa) | "Same pair" |
| **Heterozygous** | Two **different** alleles (Aa) | "Mixed pair" |
| **Hemizygous** | Only **one** allele present | X-linked genes in males |

:::bridge
Blood type A carries the A antigen and circulating **anti-B** antibodies; type B carries the B antigen and **anti-A** antibodies. Type **AB** has both antigens and neither antibody (**universal recipient**); type **O** has neither antigen and both antibodies (**universal donor**). Blood typing is covered in Chapter 7 of *MCAT Biology Review*.
:::

#### Patterns of Dominance

![Incomplete dominance in snapdragons](${fig(0, 0).src})

| Pattern | What the heterozygote shows | Classic example |
|---|---|---|
| **Complete dominance** | One dominant allele fully **masks** the recessive | Purple (P) masks white (p) pea flowers |
| **Codominance** | **Both** alleles expressed *simultaneously* and fully | **ABO** blood — A and B antigens both appear |
| **Incomplete dominance** | An **intermediate** *blend* of the two homozygotes | Red × white snapdragon → **pink** |

:::keyconcept
Don't confuse **codominance** with **incomplete dominance**. Codominance shows **both** distinct phenotypes at once (you see A *and* B). Incomplete dominance shows a **single, blended** phenotype in between (you see pink, not red-and-white). "**Co** = **both** show; **incomplete** = **blend**."
:::

#### Penetrance and Expressivity
Both concepts capture the messy gene–environment interplay, but at different scales.

- **Penetrance** — a **population** measure: the proportion of individuals *carrying* an allele who actually **express** the phenotype.
  - **Full penetrance** — 100% of carriers show it (Huntington's with >40 repeats).
  - **High penetrance** — most, but not all, carriers show it.
  - **Reduced / low penetrance / nonpenetrance** — progressively fewer carriers express it.
- **Expressivity** — **varying phenotypes despite identical genotypes**, usually considered at the **individual** level.
  - **Constant expressivity** — everyone with the genotype shows the *same* phenotype.
  - **Variable expressivity** — same genotype, *different* phenotypes (e.g., **neurofibromatosis type II** from an *NF2* / *merlin* mutation ranges from no effect to vestibulocochlear tumors, cataracts, neuromas, or spinal lesions).

:::keyconcept
**Penetrance** — the proportion of the population with a given genotype who actually express the phenotype (an *all-or-nothing* fraction of people). **Expressivity** — the different manifestations of the same genotype across individuals (a *spectrum of severity*).
:::

:::mnemonic
**Penetrance = "how many Penetrate"** the phenotype (a head-count, population fraction). **Expressivity = "how it's EXPRESSED"** (the flavor/severity in each person). One counts *who*, the other describes *how*.
:::

#### Mendelian Concepts
Gregor Mendel, an Augustinian friar, worked out the tenets of genetics in the 1860s using pea plants. Much of his framework still holds.

##### Mendel's First Law: Law of Segregation
Four modern tenets:

1. Genes exist in alternative forms (**alleles**).
2. An organism has **two alleles** for each gene — one from each parent.
3. The two alleles **segregate during meiosis**, so each gamete carries **only one allele** per trait.
4. If the two alleles differ, only one (the **dominant**) is fully expressed; the other (**recessive**) is silent. *(Codominance and incomplete dominance are exceptions.)*

The cellular correlate is the **separation of homologous chromosomes during anaphase I** of meiosis — segregating them into different cells gives each gamete one allele per trait.

##### Mendel's Second Law: Law of Independent Assortment
**Mendel's second law (of independent assortment)** states that inheriting one gene does **not** affect inheriting another. Before meiosis I, spermatogonia and oogonia replicate their genome; the daughter strand stays joined to the parent strand at the **centromere**, forming **sister chromatids**. In **prophase I**, homologues pair into **tetrads** (four chromatids), and segments are swapped between chromatids of homologous chromosomes — **recombination** — making each gene's inheritance independent of the others.

This law is later **complicated by linked genes** (covered in 12.3). Both segregation *and* independent assortment **increase genetic diversity** of gametes and offspring, improving a species' ability to evolve and adapt.

:::keyconcept
Segregation and independent assortment together create the genetic diversity in offspring that fuels evolution. **First law (segregation) ↔ anaphase I; second law (independent assortment) ↔ prophase I (crossing over).**
:::

:::mnemonic
**"Seg-1, Independent-2."** Mendel's **1**st (**S**egregation) lines up with **anaphase I** (homologues pull apart); his **2**nd (**I**ndependent assortment) lines up with **prophase I** (tetrads cross over). Lower number → later-sounding phase, but commit the pairing to memory.
:::

#### DNA as Genetic Material

![Griffith's transforming-principle experiment](${fig(0, 1).src})

Mendel never knew **DNA** was the heritable material — his papers were rejected and only rediscovered in the early 1900s, when most scientists still believed **protein** carried inheritance. Three mid-1900s experiments overturned that:

| Experiment | Design | Conclusion |
|---|---|---|
| **Griffith** (1920s) | Mice + virulent (smooth) and nonvirulent (rough) *S. pneumoniae*. **Heat-killed virulent + live nonvirulent → dead mouse** with live smooth bacteria recovered | A **transforming principle** passed from dead virulent to live nonvirulent bacteria |
| **Avery–MacLeod–McCarty** | Fractionated heat-killed virulent extract; destroyed DNA (no transformation) vs. destroyed protein (still transformed) | The transforming substance is **DNA** |
| **Hershey–Chase** (1952) | Phages labeled with ³⁵S (protein) or ³²P (DNA) infect bacteria, then centrifuge | Only **radiolabeled DNA entered** the cells → DNA is the genetic material |

:::bridge
Griffith's transforming principle is exactly **bacterial transformation** from Chapter 1 of *MCAT Biology Review* — one of three ways bacteria gain variability (the others: **conjugation** and **transduction**).
:::

:::bridge
**Sulfur** tags protein well in Hershey–Chase because two amino acids — **cysteine and methionine** — carry sulfur in their R groups, while **no nucleotide contains sulfur** (and only DNA carries phosphorus). See Chapter 1 of *MCAT Biochemistry Review*.
:::
`
    },

    /* ───────────────── 12.2 Changes in the Gene Pool ───────────────── */
    {
      id: 's2', num: '12.2', title: 'Changes in the Gene Pool',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 12.3 — Common Nucleotide-Level Mutations: silent, missense, nonsense, and frameshift (1-bp deletion) vs. the normal strand.' }],
      recap: `
- The **gene pool** = all alleles in a species; **mutations** and genetic **leakage** add new alleles to it. Variability lets a species adapt.
- **Point mutations** swap one nucleotide: **silent** (no protein change — wobble), **missense** (one amino acid swapped), **nonsense** (codon → premature **stop**).
- **Frameshift mutations** (**insertion** or **deletion** of nucleotides) shift the **reading frame** → everything downstream changes.
- **Chromosomal mutations** hit large segments: **deletion, duplication, inversion, insertion, translocation**.
- Mutations can be **advantageous** (sickle-cell heterozygotes resist malaria) or **deleterious** (**XP**, **PKU** and other inborn errors of metabolism).
- **Leakage** = gene flow between species via fertile **hybrids**. **Genetic drift** (chance) hits **small populations** hardest; the **founder effect** + **bottleneck** + **inbreeding** slash diversity.
`,
      detail: `
#### The gene pool and how it changes
All alleles that exist within a species make up the **gene pool**. **Mutations** and genetic **leakage** introduce new alleles. Genetic variability is essential — it lets a species evolve to meet changing environmental stress, since traits that confer a **selective advantage** let an individual produce more viable, fertile offspring.

#### Mutations
A **mutation** is a change in DNA sequence, producing a **mutant allele** (contrasted with the "normal," ubiquitous **wild-type** allele). Sources include:

- **Mutagens** — agents that cause mutations: **ionizing radiation** (UV from the sun), chemical exposures.
- **DNA polymerase errors** during replication — rare, and largely caught by **proofreading**.
- **Transposons** — elements that insert into and excise from the genome; inserting mid-gene disrupts it.

Flawed proteins can also arise **without a DNA change** — mispairing during transcription/translation, or a tRNA charged with the wrong amino acid for its anticodon.

##### Nucleotide-Level Mutations
**Point mutations** swap one DNA nucleotide (A, C, T, or G) for another:

| Point mutation | What changes | Effect on protein |
|---|---|---|
| **Silent** | Changed base (often the **3rd** in a codon → **wobble**/degeneracy) | **None** — same amino acid |
| **Missense** | One codon now codes a **different** amino acid | One amino acid **substituted** |
| **Nonsense** | A codon becomes a **stop** codon | Protein **truncated** early |

**Frameshift mutations** occur when nucleotides are **inserted** or **deleted**. Because mRNA is read in three-letter **codons**, an indel shifts the **reading frame**, garbling every downstream amino acid (often generating a premature nonsense/stop). Two subtypes: **insertion** and **deletion**.

:::mnemonic
**"Silent is Same, Missense Mistakes one, Nonsense makes No sense (stop)."** And a **frame**shift wrecks the whole **frame** downstream — insertions and deletions are the frameshifters (unless they come in multiples of 3).
:::

##### Chromosomal Mutations

![Common chromosomal mutations](${fig(1, 1).src})

**Chromosomal mutations** affect large DNA segments:

| Mutation | What happens to the segment |
|---|---|
| **Deletion** | A large segment is **lost** from the chromosome *(small deletions = frameshifts)* |
| **Duplication** | A segment is **copied** multiple times |
| **Inversion** | A segment is **reversed** within the chromosome |
| **Insertion** | A segment is **moved** from one chromosome to another *(small insertions = frameshifts)* |
| **Translocation** | A segment is **swapped** between two different chromosomes |

:::keyconcept
Three chromosomal mutations do **not** share a name with a frameshift type — **duplication, inversion, translocation**. A **translocation** (swap between chromosomes) is the classic answer when one chromosome gains DNA *and* another loses it (e.g., partial trisomy of one + partial monosomy of another).
:::

##### Consequences of Mutations
- **Advantageous** — confer a selective advantage. **Sickle cell**: a single-nucleotide mutation; **heterozygotes** have mild/no symptoms but **resist malaria** because their RBCs are short-lived enough that *Plasmodium* can't complete its cycle.
- **Deleterious** — harmful. **Xeroderma pigmentosum (XP)**: defective **nucleotide excision repair** → UV-damaged DNA goes unrepaired → frequent skin malignancies.
- **Inborn errors of metabolism** — a key class of deleterious mutations (defective metabolic genes). **Phenylketonuria (PKU)**: defective **phenylalanine hydroxylase** lets toxic phenylalanine metabolites accumulate (seizures, cognitive impairment, musty odor); caught at birth, it's managed by **eliminating dietary phenylalanine**.

:::realworld
The **sickle-cell heterozygote advantage** is the textbook example of **balancing selection**: a normally deleterious allele persists at high frequency where **malaria** is endemic because carriers out-survive both homozygotes.
:::

#### Leakage
Genetic **leakage** is a **flow of genes between species**. Closely related species sometimes mate to produce **hybrid** offspring. Many hybrids are sterile because of **odd chromosome numbers** — a horse (64) × donkey (62) gives a **mule** (63), which can't pair homologues in meiosis and can't form gametes. But some hybrids (e.g., the **beefalo**, cattle × bison) *can* breed back into a parent species, producing a **net flow of genes** from one species to another.

#### Genetic Drift
**Genetic drift** is change in gene-pool composition due to **chance**, and it is **more pronounced in small populations**.

- The **founder effect** is an extreme case: a small group becomes reproductively isolated (natural barriers, catastrophes, **bottlenecks** that suddenly shrink the breeding population).
- A small breeding group leads to **inbreeding** (mating between relatives), which **encourages homozygosity** — raising the prevalence of *both* homozygous dominant and recessive genotypes.
- Net result: **reduced genetic diversity**, explaining why isolated groups show elevated rates of certain traits/diseases (e.g., **maple syrup urine disease** in Mennonite communities → a common founder mutation).
- **Inbreeding depression** = the reduced fitness from this lost variation. The opposite, **outbreeding / outcrossing** (introducing unrelated individuals), can raise variation and fitness.

:::keyconcept
**Founder effect = drift + bottleneck + inbreeding.** A small founding population carries only a slice of the original gene pool by chance; isolation and inbreeding then amplify whichever alleles happened to be present, diseases included.
:::
`
    },

    /* ──────────── 12.3 Analytical Approaches in Genetics ──────────── */
    {
      id: 's3', num: '12.3', title: 'Analytical Approaches in Genetics',
      goals: goals(2),
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 12.6 — Punnett Square of Heterozygous Parents: Pp × Pp gives a 1:2:1 genotype ratio and a 3:1 phenotype ratio.' }],
      recap: `
- **Punnett squares** predict offspring genotype/phenotype ratios. **P** = parent generation, **F₁/F₂** = filial generations.
- **Monohybrid Pp × Pp** (complete dominance) → **1:2:1 genotype** (PP:Pp:pp), **3:1 phenotype** (dominant:recessive). **Dihybrid** dihet × dihet → **9:3:3:1**.
- A **test cross** (× homozygous recessive) reveals an unknown genotype: **all dominant** → homozygous dominant; **1:1** → heterozygous.
- **Sex-linked = X-linked** (assume recessive). A father **never** passes an X-linked allele to a son; all his daughters are carriers/affected.
- **Recombination frequency θ** (1% = 1 map unit = 1 **centimorgan**) is ~proportional to gene distance; add map units to **order genes**.
- **Hardy–Weinberg** (5 criteria → no evolution): $p + q = 1$ and $p^2 + 2pq + q^2 = 1$. Know it cold.
`,
      detail: `
#### Biometric techniques
Genetics uses **biometric techniques** — quantitative approaches to biological data — ranging from the **Punnett square** to **gene mapping** by recombinant frequency to **Hardy–Weinberg equilibrium**.

#### Punnett Squares
**Punnett squares** predict the relative genotypic and phenotypic frequencies from crossing two individuals: parental alleles go on the top and side, and each progeny genotype is the product of the intersecting alleles.

:::expertise
**Pedigree (family-tree) analysis** is no longer tested on the MCAT (though it returns in med-school genetics). Spend your time instead getting fast and accurate with **Punnett squares** — an entire *Biological and Biochemical Foundations* passage often hinges on building one quickly.
:::

##### Monohybrid Cross

![Punnett square of homozygous parents (PP × pp)](${fig(2, 0).src})

A **monohybrid** cross studies **one trait**. The **parent (P) generation** is crossed; offspring are the **filial (F) generation** (F₁, F₂, … by subscript). For Mendel's peas, purple (**P**) is dominant and white (**p**) recessive:

- **PP × pp → 100% Pp** (all purple), the F₁ generation.
- **Pp × Pp** (two F₁) → **25% PP, 50% Pp, 25% pp**.

![Punnett square of heterozygous parents (Pp × Pp)](${fig(2, 1).src})

So crossing two heterozygotes under **complete dominance** gives:

| Ratio type | Result |
|---|---|
| **Genotype** | **1 : 2 : 1** (homozygous dominant : heterozygous : homozygous recessive) |
| **Phenotype** | **3 : 1** (dominant : recessive) |

These are *theoretical* probabilities — the **more offspring**, the closer the observed ratio gets to expected.

:::keyconcept
Crossing two heterozygotes for a completely-dominant trait → **1:2:1 genotype** and **3:1 phenotype**. Memorize both cold for Test Day.
:::

##### Test Cross

![Test cross against a homozygous recessive organism](${fig(2, 2).src})

A **test cross** (a.k.a. **back cross**) identifies an **unknown genotype** by crossing it with a known **homozygous recessive**:

- **100% dominant** offspring → unknown is likely **homozygous dominant**.
- **1:1** dominant:recessive offspring → unknown is **heterozygous**.

##### Dihybrid Cross

![Dihybrid cross — 4 × 4 Punnett square](${fig(2, 3).src})

A **dihybrid cross** tracks **two genes** (purple/white P/p and tall/short T/t) on a **4 × 4** square. For **unlinked genes** (independent assortment), crossing two **double heterozygotes** gives a **9 : 3 : 3 : 1** phenotype ratio (9 tall-purple : 3 tall-white : 3 dwarf-purple : 1 dwarf-white). Each individual trait still keeps its **3:1** ratio (12 tall : 4 dwarf), confirming Mendel's second law.

:::expertise
Like the monohybrid **3:1**, memorize the dihybrid **9:3:3:1** for two heterozygotes with complete dominance. If a problem deviates from it, suspect **linkage** or a non-complete dominance pattern.
:::

##### Sex-Linked Crosses

![Sex-linked (X-linked recessive) crosses for hemophilia](${fig(2, 4).src})

For **sex-linked (X-linked) traits**, females (XX) can be homozygous *or* heterozygous, but males (XY) are **hemizygous** for X genes — a single recessive allele suffices to show the phenotype, which is why **sex-linked traits are far more common in males**. Notation uses X and Y for normal chromosomes and a subscript (e.g., X_h_) for the disease allele; a heterozygous female is a **carrier**.

:::mnemonic
On the MCAT, se**X**-linked **is X-linked** (Y-linked disease is vanishingly rare). Unless told otherwise, **assume sex-linked traits are recessive**.
:::

:::keyconcept
Because the egg always supplies an **X**, the **sperm determines the child's sex**. Consequently a father with an X-linked trait passes it to **all daughters** (carriers or affected) but **never to a son** — a son gets the father's Y.
:::

#### Gene Mapping

![Genetic maps deduced from recombination frequencies](${fig(2, 5).src})

Genes lie **linearly** on chromosomes. Crossing over in **prophase I** swaps alleles between homologues, but genes **close together** are **less likely** to be separated. The farther apart two genes, the likelier a crossover point (**chiasma**) falls between them. The **recombination frequency (θ)** — the chance two alleles separate during crossing over — is roughly **proportional to distance**:

- **Tightly linked** genes → θ near **0%**.
- **Weakly linked** genes → θ approaching **50%** (as expected from independent assortment).

By convention, **1 map unit = 1 centimorgan = 1% recombination**. Map units are **roughly additive**, so recombination frequencies can be added to **order genes** on the chromosome (e.g., if Q–R = 2%, R–S = 6%, S–T = 23%, Q–T = 19%, the order is **S–Q–R–T**).

:::expertise
To order genes: find the **two genes with the largest** recombination frequency (the outermost pair), then place the rest **between** them using the smaller pairwise frequencies. Distances are additive only as a *crude* approximation — double crossovers make long distances slightly underestimate true separation.
:::

#### Hardy–Weinberg Principle

![Hardy–Weinberg worked cross: p = 0.8, q = 0.2](${fig(2, 6).src})

The **allele frequency** is how often an allele appears in a population (e.g., 75 of 100 sampled flower-color alleles are P → frequency of P = 0.75). Evolution is a **change** in these frequencies over time; when they're **stable**, the gene pool isn't evolving. **Five criteria** are mandatory for **Hardy–Weinberg equilibrium**:

| # | Criterion | Underlying requirement |
|---|---|---|
| 1 | The population is **very large** | No **genetic drift** |
| 2 | **No mutations** affect the gene pool | Allele identities are fixed |
| 3 | Mating is **random** | No **sexual selection** |
| 4 | **No migration** in or out | No gene flow |
| 5 | All genes are **equally successful** at reproducing | No **natural selection** |

Define a two-allele gene (T, t) with **p** = frequency of dominant T and **q** = frequency of recessive t. Since these are the only options at that locus:

$$p + q = 1$$

Squaring both sides gives the genotype-frequency equation:

$$p^2 + 2pq + q^2 = 1$$

where **$p^2$** = frequency of **TT** (homozygous dominant), **$2pq$** = frequency of **Tt** (heterozygous), and **$q^2$** = frequency of **tt** (homozygous recessive). The **dominant phenotype** frequency is **$p^2 + 2pq$** (both dominant genotypes).

:::keyconcept
To solve **any** MCAT Hardy–Weinberg problem you only need **one** value — $p$, $q$, $p^2$, or $q^2$. From there, $p + q = 1$ and $p^2 + 2pq + q^2 = 1$ give everything else. Remember there are **twice as many alleles as individuals** (two autosomal copies per person).
:::

##### Worked example: equilibrium is self-perpetuating
If the tall allele **T** has frequency $p = 0.80$, then $q = 0.20$. Crossing two heterozygotes (the figure above) gives genotype frequencies $p^2 = 0.64$ tall-homozygous, $2pq = 0.32$ heterozygous, and $q^2 = 0.04$ short-homozygous. Recomputing allele frequencies from the offspring still yields **T = 0.80, t = 0.20** — **unchanged**. That constancy *is* Hardy–Weinberg equilibrium.

:::mnemonic
The two equations answer two questions: **$p + q = 1$** is about **alleles**; **$p^2 + 2pq + q^2 = 1$** is about **genotypes/phenotypes**. "Plain p and q → alleles; squared → bodies."
:::
`
    },

    /* ────────────────────────── 12.4 Evolution ────────────────────────── */
    {
      id: 's4', num: '12.4', title: 'Evolution',
      goals: goals(3),
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 12.11 — Modes of Natural Selection: stabilizing (toward the mean), directional (mean shifts), and disruptive (splits into two populations).' }],
      recap: `
- **Natural selection** ("survival of the fittest") is a *mechanism* of evolution — **not** a synonym for it; **populations evolve, not individuals**.
- **Modern synthesis (neo-Darwinism)** adds genetics: variation from **mutation/recombination**, success via **differential reproduction**. **Inclusive fitness** counts offspring *and* relatives (altruism). **Punctuated equilibrium** = long stasis broken by rapid bursts.
- **3 modes of selection**: **stabilizing** (favors the mean, trims extremes), **directional** (shifts toward one extreme), **disruptive** (favors **both** extremes → can drive **speciation**).
- A **species** = the largest group that can breed to make **fertile** offspring; new species form via **speciation** behind **prezygotic** or **postzygotic** isolation.
- **3 patterns between species**: **divergent** (shared ancestor → more different), **parallel** (shared ancestor → stay similar), **convergent** (no recent ancestor → become similar).
- **Molecular clock**: more genomic similarity → more recent common ancestor.
`,
      detail: `
#### Natural Selection
**Natural selection** (Darwin's *survival of the fittest*, *On the Origin of Species*, 1859) holds that traits aiding **reproductive success** get passed on. Its tenets:

- Organisms produce **many offspring**, few of which survive to reproductive maturity.
- **Chance variations** may be heritable; a variation giving even a slight survival edge is **favorable**.
- Individuals with more favorable variations survive and reproduce more, so those traits **increase over generations**. This reproductive success is **fitness** — an individual's relative genetic contribution to the next generation.

:::keyconcept
**Evolution ≠ natural selection.** Natural selection is *one mechanism* of evolution; the MCAT loves this distinction. Natural selection *is*, however, equivalent to **survival of the fittest**.
:::

##### Modern Theories
| Theory | Core idea |
|---|---|
| **Modern synthesis (neo-Darwinism)** | Adds genetics to Darwin: variation arises from **mutation/recombination**; favorable changes pass on via **differential reproduction**. **Populations evolve, not individuals.** |
| **Inclusive fitness** | Success counts not just offspring number but **support of offspring** and their ability to support others — explaining **altruism** (helping relatives propagates shared genes). |
| **Punctuated equilibrium** (Eldredge & Gould, 1972) | The fossil record shows **long stasis** interrupted by **rapid bursts** of change — not Darwin's slow, even tempo. |

##### Modes of Natural Selection

![Modes of natural selection](${fig(3, 0).src})

| Mode | What it favors | Effect on the phenotype distribution |
|---|---|---|
| **Stabilizing** | The **average**, against extremes | Variance **narrows** around the mean (e.g., human **birth weight**) |
| **Directional** | One **extreme** | Mean **shifts** toward that extreme (antibiotic-resistant bacteria; **DDT-resistant** mosquitoes) |
| **Disruptive** | **Both** extremes, against the mean | Distribution **splits in two** → can drive **speciation** |

![Darwin's finches — large vs. small beaks](${fig(3, 1).src})

**Disruptive selection** is illustrated by **Darwin's finches**: beaks were either large or small (no medium), matching large or small seeds. It is facilitated by **polymorphisms** (natural form differences within a population, like light/dark butterflies). **Adaptive radiation** — the rapid rise of many species from one ancestor, each filling a distinct **niche** (habitat + resources + predators) — is favored by environmental change or isolation of small groups.

:::mnemonic
**Stabilizing Stays** central · **Directional Drifts** to one side · **Disruptive Divides** into two. Only **disruptive** pushes a population toward **speciation**.
:::

#### Speciation
A **species** is the **largest group of organisms capable of breeding to form fertile offspring**; forming a new one is **speciation**. Geographic separation → different selective pressures → enough divergence for **isolation**, after which the populations can no longer interbreed.

Reproductive isolation comes in two flavors:

- **Prezygotic mechanisms** — prevent the zygote from forming at all:
  - **Temporal** — breed at different times
  - **Ecological** — occupy different niches in the same territory
  - **Behavioral** — no mutual attraction (pheromones, courtship displays)
  - **Reproductive** — incompatible reproductive anatomy
  - **Gametic** — intercourse occurs but fertilization cannot
- **Postzygotic mechanisms** — a zygote forms but offspring are nonviable/sterile:
  - **Hybrid inviability** — zygote can't develop to term
  - **Hybrid sterility** — hybrid is viable but **sterile** (the **mule**)
  - **Hybrid breakdown** — F₁ hybrids are fine, but the **F₂** generation is inviable/infertile

:::mnemonic
**PRE = before the zygote** (no fertilization happens at all); **POST = after the zygote** (it forms but fails). Mules are the poster child for **postzygotic hybrid sterility**.
:::

##### Patterns of Evolution

![Patterns of evolution: divergent, parallel, convergent](${fig(3, 2).src})

When two species look alike, ask whether it's from a **shared ancestor** or a **shared environment**:

| Pattern | Common ancestor? | Selection pressures | Outcome |
|---|---|---|---|
| **Divergent** | **Yes** | Different | Lineages become **less** similar (seals vs. cats) |
| **Parallel** | **Yes** | Analogous | Lineages **stay** similar over time |
| **Convergent** | **No** recent ancestor | Analogous | Lineages become **more** similar (fish vs. dolphins) |

:::keyconcept
The deciding factor is **ancestry vs. environment**. **Convergent** evolution produces look-alikes from *unrelated* lineages under similar pressures (fish and dolphins) — a classic MCAT trap when distinguishing homologous from analogous structures.
:::

#### Measuring Evolutionary Time
Evolution's **rate** tracks the severity of evolutionary pressure: a species already well-suited to a stable habitat evolves **slowly** (just a small baseline mutation rate), while one in a **rapidly changing** environment evolves **faster**. Comparing **DNA sequences** quantifies relatedness — chimpanzees share **>95%** of the human genome, mice only **~70%**; more taxonomically distant species share less. The **molecular clock model** correlates genomic similarity with time since divergence: **more similar genomes → more recent common ancestor**.
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Penetrance vs. expressivity:** *penetrance* = "how many **penetrate**" the phenotype (population fraction, all-or-nothing); *expressivity* = "how it\'s **expressed**" (severity spectrum per individual).',
      '**Dominance patterns:** *complete* = dominant masks recessive; *codominance* = **both** show at once (A and B antigens); *incomplete* = a **blend** (red × white → pink).',
      '**Mendel\'s laws ↔ meiosis:** 1st law (**S**egregation) ↔ **anaphase I**; 2nd law (**I**ndependent assortment) ↔ **prophase I** crossing over.',
      '**Point mutations:** **Silent** = Same · **Missense** = Mistakes one amino acid · **Nonsense** = No sense (premature stop). Indels = **frameshift** (unless a multiple of 3).',
      '**Cross ratios:** monohybrid Pp × Pp → **1:2:1** genotype, **3:1** phenotype; dihybrid dihet × dihet → **9:3:3:1**. A **test cross** is always against a homozygous recessive.',
      '**Sex-linked = X-linked** (assume recessive). Fathers pass it to **all daughters**, **never sons** (sons get the Y).',
      '**Hardy–Weinberg:** $p + q = 1$ (alleles) and $p^2 + 2pq + q^2 = 1$ (genotypes/phenotypes); $p^2 + 2pq$ = dominant phenotype. One known value unlocks all others.',
      '**Modes of selection:** **Stabilizing Stays** central · **Directional Drifts** to one extreme · **Disruptive Divides** into two (drives speciation).'
    ],
    keyConcepts: [
      '**Penetrance is a population measure; expressivity is an individual one.** Penetrance asks what fraction of carriers express the trait at all; expressivity asks how differently those who express it are affected.',
      '**Three experiments built the case for DNA:** Griffith (a transforming principle exists) → Avery–MacLeod–McCarty (it\'s DNA, since DNase abolishes transformation) → Hershey–Chase (only ³²P-labeled DNA enters phage-infected cells).',
      '**Genetic drift, founder effect, and inbreeding all reduce diversity.** Drift is chance change (worst in small populations); a bottleneck founds a small isolated group; inbreeding then drives homozygosity and disease prevalence.',
      '**Hardy–Weinberg equilibrium = a non-evolving population.** Its five criteria (large, no mutation, random mating, no migration, no selection) each negate one mechanism of evolution; meeting them keeps allele frequencies constant generation to generation.',
      '**Evolution ≠ natural selection, and populations — not individuals — evolve.** Natural selection (= survival of the fittest) is just one mechanism; the modern synthesis adds mutation/recombination as the source of variation and differential reproduction as the mechanism of change.',
      '**Convergent vs. divergent hinges on ancestry.** Shared ancestor diverging = divergent (or staying alike = parallel); unrelated lineages converging under similar pressures = convergent. The molecular clock dates divergence by genomic similarity.'
    ],
    equations: [
      { name: 'Hardy–Weinberg allele frequencies', tex: 'p + q = 1', note: 'p = frequency of the dominant allele, q = frequency of the recessive allele; the two must sum to 1 at a two-allele locus.' },
      { name: 'Hardy–Weinberg genotype frequencies', tex: 'p^{2} + 2pq + q^{2} = 1', note: 'p² = homozygous dominant, 2pq = heterozygous, q² = homozygous recessive. Dominant phenotype frequency = p² + 2pq.' },
      { name: 'Recombination frequency & map distance', tex: '1\\ \\text{map unit} = 1\\ \\text{centimorgan} = 1\\%\\ \\text{recombination}', note: 'θ (recombination frequency) is ~proportional to distance between genes; map units are roughly additive, so they can be summed to order genes.' }
    ]
  },

  questions: raw.questions
};
