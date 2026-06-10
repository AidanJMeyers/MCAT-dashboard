// Chapter 2 — Reproduction. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch02.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 2,
  title: 'Reproduction',
  subtitle: 'The cell cycle & mitosis · meiosis · the reproductive system',

  blocks: [
    /* ───────────────── 2.1 The Cell Cycle and Mitosis ───────────────── */
    {
      id: 's1', num: '2.1', title: 'The Cell Cycle and Mitosis',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 2.1 — The cell cycle: G₁, S, G₂ make up interphase; M is division; G₀ is an offshoot of G₁.' }],
      recap: `
- **Diploid (2*n*)** = two copies of each chromosome (human somatic = **46**); **haploid (*n*)** = one copy (gametes = **23**).
- **5 stages:** **G₁ → S → G₂** (collectively **interphase**, ~90% of the cycle) **→ M** (mitosis + cytokinesis). Non-dividing cells rest in **G₀** (an offshoot of G₁).
- **DNA replicates in S** → each chromosome = **2 sister chromatids** joined at the **centromere**. **Ploidy is unchanged** (46 chromosomes, but 92 chromatids).
- **Checkpoints** (**G₁/S** = restriction point, **G₂/M**) are policed by **p53**; **cyclins** activate **CDKs** to drive the cycle. Loss of control → **cancer** (mutated *TP53*) → **tumors** → **metastasis**.
- **Mitosis = PMAT** (**P**rophase, **M**etaphase, **A**naphase, **T**elophase) in **somatic cells** → **2 identical diploid daughters**.
`,
      detail: `
#### Diploid vs. haploid
**Autosomal (somatic) cells** are **diploid (2*n*)** — two copies of each chromosome. **Germ cells** are **haploid (*n*)** — one copy. In humans these are **46** and **23**; we inherit **23 from each parent**. Eukaryotic cells replicate through the **cell cycle**, a series of phases in which a cell grows, synthesizes DNA, and divides. Derangement of this cycle drives **cancer**.

#### The five stages of the cell cycle
For actively dividing cells the cycle is **G₁, S, G₂, M**. The first three (**G₁ + S + G₂**) are **interphase** — the longest part of the cycle (~90% of the time even in dividing cells). Cells that don't divide sit in **G₀**, an offshoot of G₁, simply living and doing their job.

During interphase, chromosomes are not visible by light microscopy: the DNA is loosely packed as **chromatin** so **RNA polymerase** can transcribe genes. During mitosis the DNA condenses into tightly coiled **chromosomes** so none is lost during division.

| Stage | Nickname | Key events |
|---|---|---|
| **G₁** | Presynthetic gap | Cell grows; builds organelles (**mitochondria, ribosomes, ER**). Passage to S is gated by the **restriction point**. |
| **S** | Synthesis | **DNA replicates** → each chromosome = **2 sister chromatids** joined at the **centromere**. Ploidy unchanged (46 chromosomes, 92 chromatids). |
| **G₂** | Postsynthetic gap | Quality-control checkpoint: enough organelles/cytoplasm for two cells, and replication was error-free. |
| **M** | Mitosis | **Mitosis** (nuclear division) **+ cytokinesis** (cytoplasm/organelle split). |
| **G₀** | (offshoot of G₁) | Cell carries out its functions; **no preparation for division.** |

![Chromosome replication during S stage](${fig(0, 1).src})

*Figure 2.2 — A single chromatid replicates into two identical sister chromatids held at the centromere.*

:::keyconcept
Each **chromatid** is one complete double-stranded DNA molecule, and **sister chromatids are identical copies**. The word **"chromosome"** can mean *either* a single chromatid (before S) *or* the joined pair of chromatids (after S) — context matters.
:::

:::keyconcept
In **autosomal (somatic) cells**, division yields **two genetically identical** daughters. In **germ cells**, the daughter cells are **not equivalent**.
:::

#### Control of the cell cycle
Two checkpoints dominate:

- **G₁/S checkpoint** — also the **restriction point**; the cell checks **DNA quality** before synthesis. If DNA is damaged, the cycle **arrests** until repair. Master regulator: **p53**.
- **G₂/M checkpoint** — the cell confirms adequate **size** and **organelle replication** to support two daughters. **p53** plays a role here too.

The cycle is driven by **cyclins** and **cyclin-dependent kinases (CDK)**. CDKs are inactive alone; the right **cyclin** must bind. Cyclin levels rise and fall by stage; an activated **CDK–cyclin complex** phosphorylates **transcription factors**, which then turn on genes for the next stage.

##### Cancer
When cell-cycle control is lost and damaged cells are allowed to divide, **cancer** results. A classic culprit is mutation of *TP53* (the gene encoding **p53**): the cycle no longer pauses to repair DNA, mutations accumulate, and the cell divides relentlessly, forming **tumors**. If the cell makes the right factors (proteases that digest basement membranes, angiogenesis signals) it can invade locally and spread via blood/lymph — **metastasis**.

:::bridge
Cancer genes split into **oncogenes** (mutation *promotes* division) and **tumor suppressor genes** (mutation *removes* the brakes — e.g., *TP53*). More in *MCAT Biochemistry Review*, Ch. 6.
:::

#### Mitosis
**Mitosis** produces **two identical daughter cells** from one parent, in **somatic cells**, via four phases.

![Mitosis overview](${fig(0, 2).src})

*Figure 2.3 — Mitosis yields two identical daughter cells.*

| Phase | Major events |
|---|---|
| **Prophase** | **Chromatin condenses** into chromosomes; **centriole pairs separate** to opposite poles and grow **spindle fibers** (microtubules); **asters** anchor centrioles to the membrane; **nuclear membrane dissolves**; nucleoli fade; **kinetochores** form on centromeres as attachment points for **kinetochore fibers**. |
| **Metaphase** | Kinetochore fibers align chromosomes single-file along the **metaphase (equatorial) plate**, equidistant from the poles. |
| **Anaphase** | **Centromeres split** → **sister chromatids separate** and are pulled to opposite poles as kinetochore fibers shorten. |
| **Telophase** | Reverse of prophase: spindle disappears, **nuclear membranes reform**, nucleoli reappear, chromosomes uncoil. **Cytokinesis** then splits the cytoplasm → two identical cells. |

##### The centrosome
The **centrosome** holds the two **centrioles** and is one of the cell's two **microtubule organizing centers** (the other is the **basal body** of a cilium/flagellum). It directs proper chromosome movement.

![The centrosome and its centrioles](${fig(0, 3).src})

*Figure 2.4 — The centrosome contains two tubulin-based centrioles that organize chromosome movement during mitosis.*

After telophase, **cytokinesis** divides the cytoplasm and organelles. Each human somatic cell divides only a finite number of times — usually **20 to 50** — before programmed death.

:::mnemonic
**Phases of mitosis = "PMAT"** → **P**rophase · **M**etaphase · **A**naphase · **T**elophase. Memory hooks: chromosomes **P**repare, **M**eet in the **M**iddle, **A**part they fly, **T**wo cells say goodbye.
:::

:::mnemonic
**"Metaphase = Middle, Anaphase = Apart."** Both start with the same letter as their action. And **Anaphase** = chromatids move **A**way to opposite poles.
:::
`
    },

    /* ───────────────────────── 2.2 Meiosis ───────────────────────── */
    {
      id: 's2', num: '2.2', title: 'Meiosis',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 2.5 — Meiosis: one replication, two divisions, up to four nonidentical haploid daughter cells.' }],
      recap: `
- **Meiosis** occurs in **gametocytes (germ cells)** → up to **four nonidentical haploid gametes**. **One round of replication, two rounds of division.**
- **Meiosis I = reductional division** (**2*n* → *n***): separates **homologous chromosomes**. **Meiosis II = equational division** (sister chromatids separate, like mitosis; no ploidy change).
- **Prophase I is unique:** homologues pair (**synapsis**) into a **tetrad** held by the **synaptonemal complex**; **crossing over** at the **chiasma** swaps DNA → **recombination** + genetic diversity.
- **Anaphase I = disjunction** (homologues part → **Mendel's 1st law, segregation**); **crossing over** + independent assortment → **Mendel's 2nd law**.
- **Homologues** = same-numbered chromosomes of *opposite parental origin*; **sister chromatids** = *identical* copies joined at the centromere. Failure to separate = **nondisjunction**.
`,
      detail: `
#### Meiosis vs. mitosis at a glance
Mitosis runs in somatic tissue → two identical cells. **Meiosis** runs in **gametocytes (germ cells)** → up to **four nonidentical gametes**. Both duplicate DNA, condense chromatin, and use centriole-derived microtubules — but the MCAT loves the **differences**.

The headline difference: mitosis = one replication + **one** division; meiosis = one replication + **two** divisions.

- **Meiosis I — reductional division (2*n* → *n*):** separates **homologous chromosomes**, producing haploid cells.
- **Meiosis II — equational division:** separates **sister chromatids** (just like mitosis); **no change in ploidy**.

| Feature | **Mitosis** | **Meiosis** |
|---|---|---|
| Ploidy change | **2*n* → 2*n*** | **2*n* → *n*** |
| Where | All dividing (somatic) cells | Sex cells (gametocytes) only |
| Divisions | One | **Two** (I and II) |
| Homologous chromosomes | Do **not** pair | **Align on opposite sides** of the metaphase plate |
| Crossing over | None | **Can occur** (prophase I) |
| Daughter cells | 2, identical, diploid | Up to 4, nonidentical, haploid |

#### Meiosis I
The human genome is **23 homologous pairs (homologues)** — one of each pair from each parent. Terminology that the MCAT exploits:

- **Homologues** — separate chromosomes of *opposite parental origin* (e.g., maternal chr 15 vs. paternal chr 15).
- **Sister chromatids** — *identical* DNA strands joined at the **centromere**.
- After S phase: **92 chromatids → 46 chromosomes → 23 homologous pairs.**

##### Prophase I — where meiosis diverges from mitosis
Chromatin condenses, the spindle forms, and the nucleoli/nuclear membrane disappear (as in mitotic prophase). Then the **first major difference**: homologous chromosomes pair and intertwine in **synapsis**. Each chromosome already has two sister chromatids, so each synaptic pair = **4 chromatids = a tetrad**, held by the **synaptonemal complex**. Homologues may break at a contact point — the **chiasma** (plural **chiasmata**) — and swap equivalent DNA in **crossing over** (**single** or **double crossovers**).

![Synapsis and crossing over](${fig(1, 1).src})

*Figure 2.6 — During prophase I, homologous chromosomes form a tetrad and exchange genetic material at the chiasma.*

Key points about crossing over:

- Occurs **between homologous chromosomes**, *not* between sister chromatids (those are identical, so no change would result).
- Produces **recombination** that can **unlink linked genes**, boosting genetic variety.
- **Linkage:** genes physically **closer** together are inherited together more often; genes **farther apart** cross over more often.
- Explains **Mendel's second law (independent assortment)** — inheriting one allele doesn't affect inheriting alleles for other genes.

:::realworld
The rate of gene unlinking maps the **distance** between two genes on a chromosome — the farther apart, the more crossing over. Distance is measured in **centimorgans**.
:::

##### Metaphase I
**Homologous pairs (tetrads)** align at the metaphase plate; each pair attaches to **one** spindle fiber by its kinetochore. Contrast with mitosis: in mitosis each chromosome is held by **two** fibers (one per pole); in meiosis I, homologues sit **across from each other** held by **one** fiber each.

##### Anaphase I
**Homologous pairs separate** to opposite poles — **disjunction** — which accounts for **Mendel's first law (segregation)**. Each parental chromosome can land in either daughter cell, so the distribution is **random with respect to parental origin**.

:::keyconcept
**Meiosis I ≠ mitosis.** Meiosis I **halves** the chromosome number (**reductional**, 2*n* → *n*). **Meiosis II** mirrors mitosis — sister chromatids separate, **no ploidy change** (equational).
:::

##### Telophase I
A nuclear membrane forms; each chromosome **still has two sister chromatids** at the centromere. The cells are now **haploid** (*n* = 23 in humans). Cytokinesis follows; a brief rest called **interkinesis** may occur as chromosomes partially uncoil.

:::realworld
If chromosomes (anaphase **I**) or sister chromatids (anaphase **II**) fail to separate — **nondisjunction** — one gamete gets two copies and the other none. The resulting zygote may have too many/few copies: **trisomy 21 (Down syndrome)** for autosomes, or **Klinefelter** and **Turner** syndromes for sex chromosomes.
:::

#### Meiosis II
**Meiosis II** is essentially mitosis on a haploid cell: **sister chromatids** (not homologues) separate.

| Phase | Events |
|---|---|
| **Prophase II** | Nuclear envelope dissolves, nucleoli disappear, centrioles migrate to poles, spindle re-forms. |
| **Metaphase II** | Chromosomes line up single-file on the metaphase plate. |
| **Anaphase II** | **Centromeres divide** → sister chromatids separate to opposite poles. |
| **Telophase II** | Nuclear membranes reform; **cytokinesis** → up to **four haploid daughter cells** per gametocyte. |

We say **"up to"** four because **oogenesis** (see 2.3) can yield fewer if the egg is never fertilized.

:::mnemonic
**Meiosis = "PMAT, twice."** Run **PMAT** for meiosis I, then **PMAT** again for meiosis II. The trick: **Meiosis I sep**arates **homologues** ("**I** is for **I**ndependent homologues"); **Meiosis II** separates **sister chromatids** (like mitosis). **"Red. then Eq."** — **Red**uctional first, **Eq**uational second.
:::
`
    },

    /* ──────────────────── 2.3 The Reproductive System ──────────────────── */
    {
      id: 's3', num: '2.3', title: 'The Reproductive System',
      goals: goals(2),
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 2.7 — The male reproductive system.' }],
      recap: `
- **Sex** is set by the **23rd chromosome pair** (**XX** female, **XY** male). The **X** carries many genes → **X-linked** disorders; males are **hemizygous** (one X) so they express recessive X alleles. The **Y** carries little but holds ***SRY*** → testis differentiation.
- **Male:** **testes** = **seminiferous tubules** (sperm, nourished by **Sertoli cells**) + **interstitial cells of Leydig** (**testosterone**). Sperm path = **SEVE(N) UP**. Sperm = **head + acrosome** (Golgi-derived), **midpiece** (mitochondria/ATP), **flagellum**.
- **Female:** **ovaries** (estrogen + progesterone), **follicles**, **fallopian tube → uterus → cervix → vagina**. **Oogenesis** → 1 ovum + polar bodies; **primary oocyte arrested in prophase I**, **secondary oocyte arrested in metaphase II**.
- **Hormone axis:** **hypothalamus → GnRH → anterior pituitary → FSH + LH** → gonadal hormones. Males: **FSH → Sertoli/sperm, LH → Leydig/testosterone**. Females: **FSH → follicles, LH → ovulation**.
- **Menstrual cycle (4 phases):** **follicular → ovulation (LH surge ~day 14) → luteal (corpus luteum, progesterone) → menstruation.** *Estrogen establishes, progesterone protects* the endometrium.
`,
      detail: `
#### Determination of sex
Biological **sex** is set by the **23rd pair**: **XX = female**, **XY = male**. **Ova carry only X**; **sperm carry X or Y** — so the sperm determines sex.

- **X chromosome** — lots of genes → mutations cause **sex-linked (X-linked) disorders**. Males are **hemizygous** (only one X), so a single disease allele on the unpaired region is **always expressed**. Females may be **homozygous or heterozygous**; most X-linked disorders are **recessive**, so females are affected far less often. An unaffected female with one disease allele is a **carrier**.
- **Y chromosome** — very little genetic information, but carries ***SRY* (sex-determining region Y)**, a transcription factor that triggers **testis differentiation**. No Y → female; Y present → male.

:::mnemonic
**Se*x*-linked is *X*-linked.** The "x" in *sex* is your reminder that these disorders ride on the **X** chromosome.
:::

:::realworld
A handful of **Y-linked diseases** exist (mostly reduced fertility) and pass from father to **all sons** — but they are extremely rare and off the official MCAT content lists.
:::

#### Male reproductive anatomy
The **testes** (primitive gonads) have two functional components:

- **Seminiferous tubules** — highly coiled; **sperm** are made here and nourished by **Sertoli cells**.
- **Interstitial cells of Leydig** — secrete **testosterone** and other **androgens**.

The testes sit in the **scrotum**, an external pouch below the **penis**, kept **2–4 °C cooler** than the body. Muscle around the **vas deferens** raises/lowers the testis to hold the right temperature for sperm.

After formation, sperm pass to the **epididymis** (flagella gain **motility**; storage until **ejaculation**), then travel the **vas deferens** → **ejaculatory duct** (at the prostate's posterior edge) → the two ducts fuse into the **urethra** → out the **penis**. In males the reproductive and urinary tracts **share** the urethra; in females they're separate.

:::mnemonic
**Sperm pathway = "SEVE(N) UP":** **S**eminiferous tubules → **E**pididymis → **V**as deferens → **E**jaculatory duct → (**N**othing) → **U**rethra → **P**enis.
:::

##### Seminal fluid and semen
As sperm move, they mix with **seminal fluid** from three glands:

| Gland | Contribution |
|---|---|
| **Seminal vesicles** | **Fructose** to nourish sperm; **alkaline** fluid |
| **Prostate gland** | **Alkaline** fluid (helps sperm survive the acidic female tract) |
| **Bulbourethral (Cowper's) glands** | Clear viscous fluid that **clears urine remnants** and **lubricates** the urethra during arousal |

**Sperm + seminal fluid = semen.**

:::realworld
The **prostate** enlarges with age — **benign prostatic hyperplasia**. Because it surrounds the urethra, classic symptoms are urinary **frequency, urgency, and nighttime awakenings**.
:::

##### Spermatogenesis
**Spermatogenesis** (haploid sperm via meiosis) occurs in the seminiferous tubules and yields **four functional sperm per spermatogonium**:

1. **Spermatogonium** (diploid stem cell)
2. **Primary spermatocyte** (diploid; after S stage)
3. **Secondary spermatocyte** (haploid; after meiosis I)
4. **Spermatid** (haploid; after meiosis II)
5. **Spermatozoon** (mature sperm; after maturation)

A mature sperm has three parts:

![Structure of a mature sperm](${fig(2, 1).src})

*Figure 2.8 — A mature sperm: head (with acrosome and nucleus), midpiece (mitochondria), and flagellum.*

- **Head** — genetic material, capped by the **acrosome** (derived from the **Golgi apparatus**; enzymes that penetrate the **ovum**).
- **Midpiece** — packed with **mitochondria** generating **ATP from fructose** for swimming.
- **Flagellum** — provides **motility**.

After puberty, a male makes **~3 million sperm per day** for the rest of his life.

#### Female reproductive anatomy
All female reproductive organs are **internal**. The gonads are the **ovaries** (make **estrogen** and **progesterone**), each holding thousands of **follicles** — multilayered sacs that nourish immature **ova**.

![The female reproductive system](${fig(2, 2).src})

*Figure 2.9 — The female reproductive system: ovary, fallopian tube, uterus, endometrium, cervix, vagina.*

Path of the egg: one egg/month is **ovulated** into the **peritoneal sac**, drawn into the **fallopian tube (oviduct)** (cilia propel it) → muscular **uterus** (site of fetal development) → **cervix** (lower uterus) → **vaginal canal** (sperm deposition; childbirth). External anatomy = the **vulva**. Females have **separate** excretory and reproductive tracts.

##### Oogenesis
**Oogenesis** differs sharply from spermatogenesis:

- **No ongoing stem-cell supply** — all **oogonia** form during **fetal development**.
- By **birth**, all oogonia have replicated DNA and are **primary oocytes** (2*n*, like primary spermatocytes), **arrested in prophase I**.
- At **menarche** (first menstrual cycle), one primary oocyte/month finishes meiosis I → a **secondary oocyte** + a **polar body** via **unequal cytokinesis** (almost all cytoplasm to the secondary oocyte). The **polar body** won't divide further or form gametes.
- The **secondary oocyte** is **arrested in metaphase II** and only completes meiosis II **if fertilization occurs**.

| Feature | **Spermatogenesis** | **Oogenesis** |
|---|---|---|
| Site | Seminiferous tubules | Ovarian follicles |
| Stem cell supply | **Continuous** (spermatogonia, lifelong) | **Finite** — all oogonia formed before birth |
| Functional gametes per stem cell | **4 sperm** | **1 ovum** (+ polar bodies) |
| Cytokinesis | Equal | **Unequal** (one large oocyte + tiny polar bodies) |
| Arrest points | None | **Primary oocyte:** prophase I · **Secondary oocyte:** metaphase II |
| Timing | Completes continuously after puberty | Completes meiosis II **only if fertilized** |

Two protective layers surround the oocyte:

- **Zona pellucida** — acellular glycoprotein layer directly around the oocyte; needed for **sperm binding**.
- **Corona radiata** — outer cell layer that adhered during ovulation.

Sperm use **acrosomal enzymes** to penetrate these layers, triggering meiosis II → a **mature ovum** + another polar body. The ovum contributes **half the DNA plus all cytoplasm, organelles (including mitochondria), and RNA**; sperm contribute **only half the DNA**. The haploid **pronuclei** then fuse into a diploid **zygote**.

#### Sexual development
Reproduction is under hormonal control via the **hypothalamic–pituitary–gonadal axis**:

1. Before puberty, the **hypothalamus** restricts **gonadotropin-releasing hormone (GnRH)**.
2. At puberty, pulses of **GnRH** are released.
3. GnRH drives the **anterior pituitary** to release **follicle-stimulating hormone (FSH)** and **luteinizing hormone (LH)**.
4. FSH and LH trigger the **gonadal sex hormones**.

| Hormone | Source gland | Target | Main effect |
|---|---|---|---|
| **GnRH** | **Hypothalamus** | Anterior pituitary | Stimulates **FSH** and **LH** release |
| **FSH** | **Anterior pituitary** | Gonads | Males: **Sertoli cells** → sperm maturation · Females: **follicle** development + **estrogen** |
| **LH** | **Anterior pituitary** | Gonads | Males: **Leydig cells** → **testosterone** · Females: triggers **ovulation**, forms **corpus luteum** |
| **Testosterone** | **Testes (Leydig cells)** | Body tissues | Male reproductive system + **secondary sex characteristics**; negative feedback on hypothalamus/pituitary |
| **Estrogens** | **Ovaries** (corpus luteum, placenta) | Reproductive tract, uterus | Female system + secondary sex characteristics; **thickens endometrium** |
| **Progesterone** | **Corpus luteum** (later placenta) | Uterus | **Maintains endometrium** for implantation |

##### Male sexual development
During the **fetal period** (9 weeks post-fertilization to birth), the **Y chromosome** drives **androgen** production → male differentiation. Androgens stay **low** through infancy/childhood. At **puberty**, **testosterone** (from the testes) rises sharply and sperm production begins, requiring a balance of FSH and LH:

- **FSH → Sertoli cells →** triggers **sperm maturation**.
- **LH → interstitial (Leydig) cells →** produce **testosterone**.

Testosterone builds the male reproductive system and **secondary sexual characteristics** (facial/axillary hair, deeper voice, more muscle and bone mass). It stays high into adulthood, declines with age, and exerts **negative feedback** on the hypothalamus and anterior pituitary.

:::realworld
If **testosterone receptors** are absent/defective, testosterone can't act → **androgen insensitivity syndrome (AIS)**: a genetic male (XY) develops **female secondary sexual characteristics**. Complete AIS often isn't found until puberty, when **amenorrhea** (failure to menstruate) prompts examination.
:::

##### Female sexual development
The **ovaries** (same embryonic origin as testes) are controlled by **FSH** and **LH** and make **estrogens** and **progesterone**.

- **Estrogens** — secreted in response to **FSH**; build/maintain the female reproductive system and secondary sex characteristics (breast growth, hip widening, fat redistribution). In the embryo they develop the reproductive tract; in adults they **thicken the endometrium** monthly.
- **Progesterone** — secreted by the **corpus luteum** (the post-ovulation follicle remnant) in response to **LH**; **develops and maintains** the endometrium (but not its initial thickening — that's estrogen). By the end of the **first trimester**, the **placenta** takes over progesterone production and the corpus luteum atrophies.

:::mnemonic
**Est**rogen **est**ablishes and **pro**gesterone **pro**tects the endometrium.
:::

#### The menstrual cycle
From **menarche to menopause**, estrogen and progesterone rise and fall cyclically, growing and shedding the endometrium. Four events:

![The menstrual cycle](${fig(2, 3).src})

*Figure 2.10 — The menstrual cycle: (a) FSH matures an ovum; (b) the LH peak (~day 14) triggers ovulation; (c) the endometrium peaks in the luteal phase and sheds at the start of the next cycle.*

| Phase | Key features | FSH | LH | Estrogen | Progesterone |
|---|---|---|---|---|---|
| **Follicular** | Menstrual flow begins; ↓ estrogen/progesterone raise **GnRH** → FSH + LH develop follicles; estrogen regrows the **endometrium/decidua** | ↑ | = | ↓ then ↑ | ↓ |
| **Ovulation** | Estrogen crosses a threshold → **positive feedback** → **LH surge (~day 14)** releases the ovum | ↑ | ↑↑ | ↑ | ↓ |
| **Luteal** | Ruptured follicle → **corpus luteum** → progesterone **maintains** the endometrium; high E + P → negative feedback | ↓ | = | ↑ | ↑ |
| **Menses** | No implantation → corpus luteum atrophies → E + P drop → endometrium sheds | ↓ | ↓ | ↓ | ↓ |

##### Follicular phase
Begins with **menstrual flow** (shedding the previous lining). Falling estrogen/progesterone raise **GnRH**, boosting **FSH** and **LH**, which develop several **ovarian follicles**. Follicles make **estrogen** (negative feedback levels off GnRH/LH/FSH) and regrow the **endometrium**, vascularizing and glandularizing the **decidua**.

##### Ovulation
Late in the follicular phase, follicles secrete more and more **estrogen** until it crosses a threshold and **flips to positive feedback** → **GnRH, LH, FSH spike**. The **LH surge** induces **ovulation** — release of the ovum into the abdominal (peritoneal) cavity.

##### Luteal phase
**LH** turns the ruptured follicle into the **corpus luteum**, which secretes **progesterone**. Estrogen *regenerates* the lining; progesterone *maintains* it for implantation. Rising progesterone (with still-high estrogen) exerts **negative feedback** on GnRH, FSH, and LH, preventing release of multiple eggs.

:::realworld
**Oral contraceptive pills (OCPs)** are estrogen/progesterone (or progesterone-only) preparations. By **negative feedback** they suppress LH/FSH → no ovulation. Placebo (sugar) pills let E + P drop → **withdrawal menstruation**, but no egg is released.
:::

##### Menstruation
With no implantation, the **corpus luteum** loses LH support, **progesterone falls**, and the lining sheds. The drop in estrogen and progesterone **lifts the block on GnRH**, restarting the cycle.

:::expertise
The MCAT loves graphs of **FSH, LH, estrogen, and progesterone** across the menstrual cycle. Know **when each peaks**: FSH early-follicular, **LH spikes at ovulation (~day 14)**, estrogen peaks just before ovulation, and **progesterone peaks in the luteal phase**.
:::

##### Pregnancy
If fertilization occurs, the **zygote → blastocyst** implants and secretes **human chorionic gonadotropin (hCG)**, an **LH analog** that **maintains the corpus luteum**. hCG keeps corpus-luteal estrogen and progesterone high through the **first trimester**; by the **second trimester** the **placenta** makes enough E + P itself and **hCG declines**. High E + P continue to suppress **GnRH**.

:::keyconcept
**Menstrual cycle in one breath:** follicles mature (**FSH, LH**) → **LH surge** triggers **ovulation** → ruptured follicle becomes the **corpus luteum** (estrogen + progesterone build the lining; LH/FSH inhibited) → **no fertilization** → corpus luteum atrophies, E + P fall, **menses**, and LH/FSH rise again.
:::

##### Menopause
With age the ovaries become **less sensitive to FSH and LH** → ovarian atrophy. Estrogen and progesterone fall, the endometrium atrophies, and menstruation stops. Because negative feedback is removed, **FSH and LH rise**. This is **menopause** (typically **ages 45–55**), often with flushing, hot flashes, bloating, headaches, and irritability.
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Mitosis phases = "PMAT":** **P**rophase (condense + spindle) · **M**etaphase (Middle/align) · **A**naphase (Apart — chromatids split) · **T**elophase (Two nuclei reform).',
      '**Meiosis = "PMAT, twice":** Meiosis **I** separates homologues (**reductional**, 2*n* → *n*); Meiosis **II** separates sister chromatids like mitosis (**equational**, no ploidy change). "Red. then Eq."',
      '**Interphase = "G₁ → S → G₂"**; only the **M** stage is division, and **G₀** is the resting offshoot of G₁.',
      '**Sperm pathway = "SEVE(N) UP":** **S**eminiferous tubules → **E**pididymis → **V**as deferens → **E**jaculatory duct → (**N**othing) → **U**rethra → **P**enis.',
      '**Se*x*-linked is *X*-linked** — the "x" in *sex* points to the X chromosome.',
      '**Est**rogen **est**ablishes and **pro**gesterone **pro**tects the endometrium.',
      '**Oocyte arrests — "Prom at I, Meta at II":** **P**rimary oocyte arrests in **pro**phase **I**; **secondary** oocyte arrests in **meta**phase **II** (finishes only if fertilized).',
      '**FSH vs. LH in the testes:** **F**SH feeds the **S**ertoli cells (sperm); **L**H drives the **L**eydig cells (testosterone). F→S, L→L.'
    ],
    keyConcepts: [
      '**Ploidy bookkeeping:** S phase doubles **chromatids** (46 chromosomes → 92 chromatids) but **not ploidy**. Ploidy halves only in **meiosis I** (2*n* → *n*); meiosis II and mitosis leave ploidy unchanged.',
      '**Homologues vs. sister chromatids:** homologues are same-numbered chromosomes of *opposite parental origin* (separated in meiosis I); sister chromatids are *identical* copies at the centromere (separated in mitosis and meiosis II).',
      '**Cell-cycle control = cancer:** checkpoints (G₁/S restriction point, G₂/M) run on **p53** + **cyclin/CDK**; loss (mutated *TP53*) → unchecked division → tumors → metastasis.',
      '**Gametogenesis asymmetry:** spermatogenesis = **4 sperm** per stem cell, continuous after puberty; oogenesis = **1 ovum** per stem cell, finite pool, unequal cytokinesis, with two arrest points (prophase I, metaphase II).',
      '**One hormone axis, two outputs:** hypothalamic **GnRH** → pituitary **FSH/LH** → testosterone (males) or estrogen/progesterone (females); the **LH surge** triggers ovulation and **progesterone** peaks in the luteal phase.'
    ],
    equations: []
  },

  questions: raw.questions
};
