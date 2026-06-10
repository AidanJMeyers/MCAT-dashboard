// Chapter 3 — Embryogenesis and Development. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch03.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch03.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 3,
  title: 'Embryogenesis and Development',
  subtitle: 'Early developmental stages · mechanisms of development · fetal circulation · gestation and birth',

  blocks: [
    /* ───────────────────── 3.1 Early Developmental Stages ───────────────────── */
    {
      id: 's1', num: '3.1', title: 'Early Developmental Stages',
      goals: goals(0),
      images: [{ src: fig(0, 5).src, alt: fig(0, 5).alt, caption: 'Figure 3.6 — Early stages of embryonic development: zygote → cleavage → morula → blastula → gastrula.' }],
      recap: `
- **Fertilization** happens in the **ampulla** of the fallopian tube: acrosomal enzymes breach the **corona radiata** + **zona pellucida**; the **cortical reaction** (Ca²⁺ release) blocks polyspermy and forms the **fertilization membrane** → diploid **zygote**.
- **Cleavage** = rapid mitosis with **no growth** → ↑ **nuclear:cytoplasmic** and **surface-area:volume** ratios. **Indeterminate** cleavage → cells can still form a whole organism (identical twins); **determinate** → fate fixed.
- Stage sequence: **zygote → morula** (solid ball) **→ blastula/blastocyst** (hollow, with **blastocoel**, **trophoblast** + **inner cell mass**) **→ gastrula** (3 germ layers). **Implantation** occurs at the **blastocyst** stage.
- **3 germ layers** — **Ectoderm** (outside attractive bits + nervous system), **Mesoderm** (muscle, bone, blood, gonads), **Endoderm** (gut/lung linings). Adrenal **cortex = mesoderm**, **medulla = ectoderm**.
- **Neurulation**: the mesodermal **notochord** induces ectoderm → **neural tube** (CNS); **neural crest cells** → PNS + scattered cell types. **Teratogens** (alcohol, drugs, microbes, chemicals) disrupt development.
`,
      detail: `
#### Fertilization
A **secondary oocyte** is ovulated around **day 14** and can be fertilized for up to **24 hours**. Fertilization usually occurs in the **ampulla** — the widest part of the fallopian tube.

![Fertilization: sperm injects pronucleus via acrosomal apparatus](${fig(0, 0).src})

- The sperm binds the oocyte and releases **acrosomal enzymes** that penetrate the **corona radiata** and **zona pellucida**.
- The first sperm to touch the membrane forms the **acrosomal apparatus**, a tubelike extension that injects its **pronucleus** (once **meiosis II** completes).
- The **cortical reaction** then releases **calcium ions**, which **depolarize** the ovum membrane. This does two things:
  - **Blocks polyspermy** (no second sperm can fertilize).
  - **Raises the metabolic rate** of the new diploid **zygote**.
- The depolarized, impenetrable membrane is now the **fertilization membrane**.

##### Twins
| Type | Origin | Genetics | Placental structures |
|---|---|---|---|
| **Dizygotic (fraternal)** | **Two eggs** fertilized by **two sperm** in one cycle | No more alike than any siblings | Each has its own placenta, chorion, amnion |
| **Monozygotic (identical)** | **One zygote splits** into two | Genomes identical | Shared by **timing of split** — see below |

- **Monozygotic** twins are subclassified by what they share: **monochorionic/monoamniotic** (share amnion + chorion), **monochorionic/diamniotic** (own amnion, shared chorion), **dichorionic/diamniotic** (own amnion + chorion).
- Incomplete splitting → **conjoined twins**. The more gestational structures shared, the higher the risk.

#### Cleavage
After fertilization the zygote travels to the uterus, dividing by rapid mitosis — **cleavage** — as it goes. The **first cleavage** officially makes it an **embryo** (no longer unicellular).

![8-cell embryo within the fertilization membrane](${fig(0, 1).src})

- The embryo's **total size stays constant** through early divisions → cells get **smaller**, raising two ratios:
  - **Nuclear-to-cytoplasmic (N:C) ratio** ↑
  - **Surface-area-to-volume ratio** ↑ → better gas/nutrient exchange.

| Cleavage type | Result | Example |
|---|---|---|
| **Indeterminate** | Daughter cells can each still form a **complete organism** | **Monozygotic twins** arise from indeterminately cleaved cells |
| **Determinate** | Cell fates are **already committed** to differentiating into a specific type | Most later divisions |

#### Blastulation
Several divisions in, the embryo is a solid ball of cells called the **morula** (Latin *morula* = mulberry).

![Morula: solid ball of partially fused cells](${fig(0, 2).src})

The morula then undergoes **blastulation** → the **blastula**, a hollow ball with a fluid-filled **blastocoel**. The mammalian blastula is the **blastocyst**, with two key populations:

![Blastula: trophoblast surrounding blastocoel with protruding inner cell mass](${fig(0, 3).src})

| Cell group | Location | Gives rise to |
|---|---|---|
| **Trophoblast** | Surrounds the blastocoel | **Chorion** → later the **placenta** |
| **Inner cell mass** | Protrudes into the blastocoel | The **organism itself** |

:::mnemonic
Remember that a **blast**ula is an embryo with a **blast**ed-out cavity (the **blastocoel**).
:::

##### Implantation
The blastula reaches the uterus and **burrows into the endometrium** — implantation occurs at the **blastocyst** stage.

- Trophoblast cells become the **chorion**, an extraembryonic membrane that develops into the **placenta**.
- Trophoblasts form **chorionic villi** — fingerlike projections that penetrate the endometrium and support **maternal–fetal gas exchange**.
- The **umbilical cord** connects embryo to placenta: **two arteries + one vein** in a gelatinous matrix. The **vein** carries **oxygenated, nutrient-rich** blood *to* the embryo; the **arteries** carry **deoxygenated** blood and waste *to* the placenta.

:::realworld
Sometimes the blastula implants outside the uterus — an **ectopic pregnancy** (>95% in the fallopian tube). These are generally not viable; if the embryo doesn't spontaneously abort, the tube may rupture and hemorrhage. A suspected ectopic pregnancy is often a **surgical emergency**.
:::

Until the placenta is functional, other extraembryonic membranes support the embryo:

![Anatomy of pregnancy: fetus, umbilical cord, yolk sac, amnion, chorion, chorionic villi](${fig(0, 4).src})

| Membrane | Role |
|---|---|
| **Yolk sac** | Supports the embryo before the placenta; site of **early blood cell development** |
| **Allantois** | Early **fluid exchange** between embryo and yolk sac; with the yolk sac, its remnants form the **umbilical cord** |
| **Amnion** | Thin tough membrane of **amniotic fluid** → **shock absorber** during pregnancy |
| **Chorion** | Forms the placenta **and** an outer membrane around the amnion (extra protection) |

:::realworld
**Amniocentesis** aspirates amniotic fluid with a thin needle; the fluid contains fetal cells that can be screened for chromosomal abnormalities and sex. It's recommended for pregnant women over **35** after high-risk screening, because they have a higher rate of **meiotic nondisjunction** (e.g., Down syndrome).
:::

#### Gastrulation
Once implanted, the cell mass undergoes **gastrulation** — generating three distinct cell layers. Modeled on the sea urchin: a small **invagination** in the blastula deepens until it eliminates the blastocoel (picture poking a balloon until both walls meet and fuse into a tube). The result is the **gastrula**.

- The invagination into the blastocoel is the **archenteron** → develops into the **gut**.
- Its opening is the **blastopore**.
  - In **deuterostomes** (humans), the blastopore becomes the **anus**.
  - In **protostomes**, it becomes the **mouth**.

:::mnemonic
**Deu**terostome → *deu* looks like *duo* (two) → **deuterostomes** develop the **anus** (the orifice associated with "**number two**"). **Protostomes** start at the other end — the **mouth**.
:::

##### Primary germ layers
Migrating cells establish three **primary germ layers**. **This table is the single highest-yield item in the chapter.**

| Germ layer | Position | Derivatives |
|---|---|---|
| **Ectoderm** | Outermost | **Integument** (epidermis, hair, nails); epithelia of **nose, mouth, lower anal canal**; **nervous system** (incl. **adrenal medulla**); **lens of the eye**; **inner ear** |
| **Mesoderm** | Middle | **Musculoskeletal**, **circulatory**, most **excretory** systems; **gonads**; muscular + connective-tissue layers of the **digestive & respiratory** systems; **adrenal cortex** |
| **Endoderm** | Innermost | **Epithelial linings** of the **digestive & respiratory** tracts (incl. **lungs**); **pancreas, thyroid, bladder**, distal urinary tract; parts of the **liver** |

:::mnemonic
- **Ecto**derm — "**attracto**derm": things that **attract** us to others (skin, hair, nails, "smarts" = the nervous system).
- **Meso**derm — "**means**oderm": the **means** of getting around — bones & muscle, the circulatory system, and the gonads.
- **Endo**derm — linings of the "**endernal**" (internal) organs: the digestive & respiratory tract and their accessory organs.
:::

:::expertise
The MCAT loves the **dual embryonic origin of the adrenal glands**: the **adrenal cortex = mesoderm**, but the **adrenal medulla = ectoderm** (it contains nervous tissue).
:::

##### Differentiation
Cells with identical genes diverge mainly through **selective transcription** — only the genes a cell type needs are transcribed (e.g., pancreatic islet cells turn on insulin/glucagon/somatostatin genes). This is tied to **induction**: one group of cells influences the fate of nearby cells via diffusible **inducers** that travel from **organizing cells** to **responsive cells** (guiding axons, ensuring partner cell types end up adjacent).

#### Neurulation
With the three germ layers set, **neurulation** (nervous-system development) begins. The nervous system is **ectodermal**, yet ends up *inside* the organism — here's how:

![Neural plate over notochord folds into neural tube and neural crest](${fig(0, 6).src})

1. A rod of **mesodermal** cells — the **notochord** — forms along the long axis like a primitive spine (its remnants persist in **intervertebral discs**).
2. The notochord **induces** overlying ectoderm to slide inward, forming **neural folds** around a **neural groove**.
3. The folds fuse into the **neural tube** → the **central nervous system**.
4. At each fold tip sit **neural crest cells**, which migrate outward to form the **peripheral nervous system** (sensory ganglia, autonomic ganglia, **adrenal medulla**, **Schwann cells**) plus scattered cell types (**calcitonin-producing C cells** of the thyroid, **melanocytes**, and others).
5. Ectoderm then migrates over the tube and crest to cover the new nervous system.

:::realworld
Failure of the neural tube to close → **spina bifida** (spinal cord exposed) or **anencephaly** (brain fails to develop; universally fatal). **Folate (folic acid)** supplementation before conception prevents this — and is advised for *all* women of childbearing age, because neurulation often occurs **before pregnancy is detected**.
:::

#### Problems in early development
Early development is acutely sensitive — during germ-layer formation and **organogenesis**, **teratogens** can cause defects or death.

- **Teratogens** = substances that interfere with development: **alcohol, prescription drugs, viruses, bacteria, environmental chemicals** (e.g., polycyclic aromatic hydrocarbons).
- Effect varies by the **embryo's genetics**, plus **route**, **length**, and **rate of placental transmission** of exposure, and the teratogen's identity.
- **Maternal health** matters too:
  - **Diabetic hyperglycemia** → fetus too large to deliver + **hypoglycemia** after birth (from compensatory high insulin).
  - **Folic acid deficiency** → neural tube defects (spina bifida, anencephaly).
- Outcomes are trend-driven but **unpredictable and highly variable** (spina bifida ranges from profound disability to a mere tuft of overlying hair).
`
    },

    /* ───────────────────── 3.2 Mechanisms of Development ───────────────────── */
    {
      id: 's2', num: '3.2', title: 'Mechanisms of Development',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 3.8 — Embryonic stem cells: inner cell mass cell types and colonies of ES cells.' }],
      recap: `
- Cell specialization runs in **3 stages**: **specification** (reversible) → **determination** (irreversible commitment to a lineage) → **differentiation** (actually becoming that cell).
- **Potency spectrum**: **totipotent** (any cell + placenta) → **pluripotent** (any of the 3 germ layers, **not** placenta) → **multipotent** (one lineage, e.g., **hematopoietic** stem cells). Potency **decreases** as cells differentiate.
- **4 signaling types**: **autocrine** (same cell), **paracrine** (local), **juxtacrine** (direct contact, no diffusion), **endocrine** (bloodstream → distant). An **inducer** acts on a **competent responder**; **morphogens** (TGF-β, Shh, EGF) work via **gradients**.
- **Apoptosis** = programmed, tidy death via membrane-bound **blebs** (sculpts digits); **necrosis** = injury death that **spills** contents and irritates tissue.
- **Regeneration**: **liver = high**, **kidney = moderate**, **heart = low**. **Senescence** = cellular aging from progressive **telomere** shortening; **telomerase** (a reverse transcriptase) rebuilds telomeres in germ/fetal/tumor cells.
`,
      detail: `
#### Cell specialization
An adult human has ~**37 trillion** cells organized into tissues, organs, and organ systems. Each must specialize *and* be correctly located — e.g., the **pancreas** makes both digestive enzymes (**trypsin**, carboxypeptidases A/B, pancreatic lipase) that drain into ducts, and endocrine hormones (**insulin, glucagon, somatostatin**) that reach nearby blood vessels. Achieving this takes three stages:

| Stage | What happens | Reversible? |
|---|---|---|
| **Specification** | Cell is designated as a specific type | **Yes** — reversible |
| **Determination** | Cell is **committed** to a lineage (via asymmetric **mRNA/protein** segregation in cleavage, or **morphogens** from neighbors) | **No** — irreversible |
| **Differentiation** | Cell actually **changes structure, function, biochemistry** to match the type | — |

:::keyconcept
When a cell is **determined**, it is committed to a particular cell lineage. When the cell **differentiates**, it assumes the structure, function, and biochemistry of that cell type.
:::

##### Stem cells and potency
**Stem cells** are undifferentiated cells (or cells giving rise to ones that differentiate). They exist in **embryonic *and* adult** tissues, classified by **potency**:

| Potency | Can become | Example |
|---|---|---|
| **Totipotent** | **Any** cell type — fetal **and** placental | Early embryonic stem cells |
| **Pluripotent** | Any cell type **except placental** (the three germ layers + derivatives) | Cells after germ-layer formation |
| **Multipotent** | Multiple types **within one lineage** | **Hematopoietic** stem cells → WBCs, RBCs, platelets (not skin/neurons/muscle) |

After the **16-cell stage**, the morula's cells split into **inner cell mass** + **trophoblast**; a few divisions later, totipotent cells become **pluripotent** germ-layer cells, then **multipotent**.

:::keyconcept
The potency of a stem cell determines how many cell types it can become. As cells become more differentiated, **potency decreases**: totipotent → pluripotent → multipotent. (Potency is a **spectrum**, not strict categories.)
:::

**Embryonic vs. adult stem cells:**

| | **Embryonic stem cells** | **Adult stem cells** |
|---|---|---|
| Potency | High (toti-/pluripotent) | At best **multipotent** |
| Controversy | High — harvesting **destroys the embryo** | Lower |
| Rejection risk | Higher (different genetic makeup) | Lower — can use **patient's own** cells (blood, marrow, adipose) |
| Limitation | May not differentiate correctly; can become **cancerous** | Hard to **induce** the correct cell type; complex organs need many signals |

Adult stem cells can be coaxed toward higher potency with **transcription factors**, then re-implanted into the same patient to reduce rejection.

:::bridge
Stem cells are a biotechnology cornerstone: altered embryonic stem cells carrying **transgenes** can be introduced into mice, and cells lacking a gene can build **knockout mice** — *MCAT Biochemistry Review*, Ch. 6.
:::

#### Cell–cell communication
A developing cell's fate depends on its **location** and its **neighbors**. An **inducer** (the signal, or the cell that secretes it) acts on a **responder**, which must be **competent** (able to respond).

| Signal type | Acts on | Diffusion? |
|---|---|---|
| **Autocrine** | The **same cell** that secreted it | Yes |
| **Paracrine** | **Local** neighboring cells | Yes |
| **Juxtacrine** | **Adjacent** cell, by directly stimulating its receptors | **No** — direct contact |
| **Endocrine** | **Distant** target tissue | Via **bloodstream** |

##### Inducers
Inducers are often **growth factors** — peptides that promote **differentiation and mitosis** in specific tissues, restricted by **competence**.

- Example: **PAX6** is expressed only in the ectoderm of the head; as the **optic vesicle** approaches, it induces the **lens of the eye**.
- **Reciprocal development**: induction can be two-way — the differentiating lens then triggers the optic vesicle to form the **optic cup** (→ retina).
- **Morphogens** diffuse to form **gradients**: cells nearer the source see higher concentrations. Overlapping gradients of multiple morphogens give each location a unique combination → distinct cell fates. Common morphogens: **TGF-β**, **sonic hedgehog (Shh)**, **EGF**.

:::realworld
In eye development, **optic vesicles** from the brain touch overlying ectoderm and induce the **lens placode**; the placode induces the **optic cup**; the cup induces the placode to form **cornea and lens**. In frog embryos, transplanting this ectoderm *after* the optic vesicles grow out lets a lens form in the trunk — but *before* outgrowth, it won't.
:::

#### Cell migration, cell death, and regeneration
##### Cell migration
Cells must detach and travel to their final positions:

- The **anterior pituitary** starts as **oral ectoderm** and migrates from the roof of the mouth to below the **hypothalamus**.
- **Neural crest cells** form at the neural folds and migrate widely → sensory/autonomic ganglia, **adrenal medulla**, **Schwann cells**, thyroid C cells, **melanocytes**, and more.

##### Cell death
| | **Apoptosis** | **Necrosis** |
|---|---|---|
| Trigger | **Programmed** (signals or preprogramming) | **Injury** |
| Mechanism | Cell shrinks → membrane-bound **apoptotic blebs** → **apoptotic bodies** digested by other cells | Cell ruptures, **leaks** internal contents |
| Consequence | Clean; **recycles** materials; no inflammation | **Irritates** nearby tissue, may trigger an **immune response** |
| Role in development | **Sculpting** — e.g., removing finger/toe **webbing** | Pathological |

![Apoptosis: cell darkens, shrinks, and breaks into apoptotic blebs](${fig(1, 1).src})

##### Regeneration
**Regenerative capacity** — the ability to regrow body parts — varies by species and, in humans, by **tissue**:

- **Complete regeneration** (identical replacement tissue): salamanders, newts — they keep large reserves of **stem cells**.
- **Incomplete regeneration** (non-identical tissue): humans, typically.

| Human tissue | Regenerative capacity |
|---|---|
| **Liver** | **High** — donors can give up to **50%** and regrow it |
| **Kidney** | **Moderate** — repairs tubular nephrons, but easily overwhelmed → failure |
| **Heart** | **Low/none** — injury (e.g., heart attack) leaves a **scar** |

#### Senescence and aging
**Senescence** = biological aging at the cellular and organismal level.

- **Cellular**: cells stop dividing after ~**50 divisions** *in vitro*, largely due to **telomere** shortening. **Telomeres** are guanine/cytosine-rich chromosome ends that "knot off" the DNA and prevent loss of genetic information; they're **hard to replicate**, so they shorten each round of synthesis until the cell can no longer divide.
- **Telomerase** — a **reverse transcriptase** in **germ cells, fetal cells, and tumor cells** — rebuilds telomere ends, allowing indefinite division (and aiding cancer survival).
- **Organismal**: a declining ability to respond to a changing environment, compounded by accumulated chemical and environmental insults.

:::mnemonic
**Liver = Lazarus** (regrows from half), **Heart = hard scar** (no comeback), **Kidney = middle**. For aging: **telomeres** are the **fuse** that burns down each division; **telomerase** is the **refill** that only germ/fetal/cancer cells get.
:::
`
    },

    /* ───────────────────────── 3.3 Fetal Circulation ───────────────────────── */
    {
      id: 's3', num: '3.3', title: 'Fetal Circulation',
      goals: goals(2),
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 3.11 — Fetal circulation: the three fetal shunts (foramen ovale, ductus arteriosus, ductus venosus).' }],
      recap: `
- Nutrient/gas/waste exchange happens at the **placenta** by **diffusion** — maternal and fetal blood **never mix**. **Fetal hemoglobin (HbF)** has **higher O₂ affinity** than adult **HbA**, pulling oxygen into fetal blood.
- The placenta is also an **endocrine organ** (**progesterone, estrogen, hCG**) and an **immune barrier** (maternal **antibodies** cross; large pathogens mostly can't, except **TORCHES**).
- Umbilical vessels reverse the usual rule: **umbilical arteries** carry **deoxygenated** blood (away from fetus → placenta); the **umbilical vein** carries **oxygenated** blood (placenta → fetus).
- The fetus builds **three shunts** to bypass its nonfunctional **lungs** and **liver**: **foramen ovale**, **ductus arteriosus** (both bypass lungs), **ductus venosus** (bypasses liver).
- In the fetus the **right** heart is at **higher pressure** than the left (reverse of adults); this drives flow through the shunts. After birth, the pressure flips and the shunts close.
`,
      detail: `
#### The placenta
The **placenta** is where **nutrient, gas, and waste exchange** occurs. Maternal and fetal blood must **not mix** (they may be different blood types); instead, their bloodstreams run in **close proximity** so substances **diffuse** across.

![Placenta: umbilical arteries carry deoxygenated blood to the chorion; oxygen picked up returns via umbilical vein](${fig(2, 0).src})

- **Diffusion** (the simplest method) moves **water, glucose, amino acids, inorganic salts**, and gases. It needs a **gradient** — maternal blood has a **higher partial pressure of O₂** than fetal blood.
- **Fetal hemoglobin (HbF)** has a **greater O₂ affinity** than adult **HbA**, enhancing transfer and retention of oxygen into fetal circulation. CO₂ and waste move the **opposite** way.

:::keyconcept
Although the embryo gets its nutrients and oxygen from the mother, there is **no actual mixing of blood**. The placenta relies on the **close proximity** of embryonic and maternal bloodstreams to allow **diffusion** between them.
:::

:::keyconcept
Gas exchange in the fetus occurs across the **placenta** — **fetal lungs do not function until birth**.
:::

##### Other placental functions
- **Immunity**: the fetus is **immunologically naïve**, so maternal **antibodies cross** the placenta for protection.
- **Endocrine**: the placenta secretes **progesterone, estrogen, and hCG**, all essential to maintain pregnancy.

:::realworld
Most pathogens are too large to cross the placenta, but **TORCHES** infections can — and cause birth defects, so screening/immunization is advised. **TORCHES** = **TO**xoplasma gondii, **R**ubella, **C**ytomegalovirus, **HE**rpes / **H**IV, and **S**yphilis.
:::

#### Umbilical vessels — the artery/vein trap
The umbilical vessels test whether you truly know the definitions of **artery** and **vein** (defined by **direction relative to the heart**, not oxygenation).

| Vessel | Direction (definition) | Oxygenation (the twist) |
|---|---|---|
| **Umbilical arteries** (×2) | Carry blood **away from** the fetus → toward the placenta | **Deoxygenated** + waste |
| **Umbilical vein** (×1) | Carries blood **toward** the fetus ← from the placenta | **Oxygenated** + nutrients |

:::keyconcept
Unlike most arteries, the **umbilical arteries carry deoxygenated blood** with waste. Unlike most veins, the **umbilical vein carries oxygenated blood** with nutrients. (Oxygenation happens at the **placenta**, not the lungs.)
:::

#### The three fetal shunts
The fetal **lungs and liver** do little before birth (gas exchange, detox, and nutrient/waste handling all occur via the placenta or the mother). Both organs are underdeveloped and sensitive to the high pressures of postnatal life, so the fetus builds **three shunts** to route blood **away** from them.

| Shunt | Connects | Organ bypassed | How it's driven |
|---|---|---|---|
| **Foramen ovale** | **Right atrium → left atrium** (one-way valve) | **Lungs** | Blood from the IVC crosses to the left atrium → aorta → systemic, skipping the right ventricle |
| **Ductus arteriosus** | **Pulmonary artery → aorta** | **Lungs** | Routes leftover pulmonary-artery blood into systemic circulation |
| **Ductus venosus** | **Umbilical vein → inferior vena cava** | **Liver** | Sends placental blood straight to the IVC (liver still gets some hepatic-artery supply) |

- In the fetus, the **right side of the heart is at higher pressure** than the left (the **reverse** of adult circulation). This pressure gradient pushes blood through the **foramen ovale** and **ductus arteriosus**.
- **After birth**, the pressure differential **reverses** → the **foramen ovale shuts**, and the other shunts close as the lungs and liver take over.

:::mnemonic
**Two shunts dodge the Lungs, one dodges the Liver.** The two with "**arterio/ovale**" in the heart-and-arteries (**foramen ovale**, **ductus arteriosus**) bypass the **lungs**; the **ven**ous one (**ductus venosus**) bypasses the **liver** (think **ven**osus → **ven**a cava → **liver**).
:::
`
    },

    /* ───────────────────────── 3.4 Gestation and Birth ───────────────────────── */
    {
      id: 's4', num: '3.4', title: 'Gestation and Birth',
      goals: goals(3),
      recap: `
- Human **gestation** ≈ **280 days**, split into **three trimesters**. (General rule: larger animals → **longer gestation, fewer offspring**.)
- **First trimester**: **organogenesis** — heart beats at **~22 days**, then eyes/gonads/limbs/liver; bone forms by week 7; by **8 weeks** the embryo becomes a **fetus**.
- **Second trimester**: tremendous **growth**, **movement** begins, face looks **human**, digits **elongate**.
- **Third trimester**: continued growth + **brain development**; **antibody transfer** peaks (highest in month 9); fetus grows **less active**.
- **Birth (parturition)** is driven by **prostaglandins** + **oxytocin** and has **3 stages**: (1) **cervix thins / water breaks**, (2) **contractions → delivery**, (3) **afterbirth** (placenta + cord) expelled.
`,
      detail: `
#### Gestation overview
Human gestation lasts about **280 days**, divided into **three trimesters**. As a general rule, **larger animals** have **longer gestations** and **fewer offspring** (elephants: one calf, **22 months**; mice: 10–12 pups, **20 days**). You don't need every detail for the MCAT — just the key events per trimester.

| Trimester | Hallmark events | Size landmarks |
|---|---|---|
| **First** | **Organogenesis**: **heart beats ~day 22**, then eyes, gonads, limbs, liver; cartilage **ossifies** by week 7; brain fairly developed by week 8 → embryo becomes a **fetus** | ~10 mm (wk 5), ~15 mm (wk 6), ~9 cm (end of month 3) |
| **Second** | Tremendous **growth**; **movement** in amniotic fluid; **face becomes human**; toes/fingers **elongate** | 30–36 cm (end of month 6) |
| **Third** | Continued rapid growth + **brain development**; **antibody transfer** (active transport, highest in month 9); growth slows, fetus **less active** (less room) | — |

:::realworld
Premature babies born as early as **24 weeks** can survive — far short of the normal **40 weeks** — but often face **severe complications**, most apparent in the **respiratory, gastrointestinal, and nervous** systems, since development is incomplete.
:::

#### Birth (parturition)
Vaginal childbirth, or **parturition**, is driven by rhythmic contractions of **uterine smooth muscle**, coordinated by **prostaglandins** and the peptide hormone **oxytocin**. It proceeds in **three stages**:

| Stage | What happens | Key term |
|---|---|---|
| **1** | **Cervix thins out** and the amniotic sac ruptures | *"Water breaking"* |
| **2** | Strong uterine **contractions** → **birth of the fetus** | Delivery |
| **3** | **Placenta** and **umbilical cord** are expelled | **Afterbirth** |

:::mnemonic
Birth in **3 acts**: **Thin → Push → Flush.** The cervix **thins** and water breaks, contractions **push** out the baby, then the body **flushes** the **afterbirth** (placenta + cord). The two contraction hormones: **P**rostaglandins **P**ush; **O**xytocin **O**pens labor.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Germ layers — Ecto/Meso/Endo:** **Ecto**derm = "**attracto**derm" (skin, hair, nails + nervous system/"smarts"); **Meso**derm = "**means**oderm" (the **means** of moving — muscle, bone, blood, gonads); **Endo**derm = linings of "**endernal**" (internal) organs (gut & lung linings, pancreas, thyroid).',
      '**Adrenal split:** adrenal **cortex = mesoderm**, adrenal **medulla = ectoderm** (nervous tissue). Classic MCAT trap.',
      '**Blast = blasted-out cavity:** a **blast**ula is the embryo with the **blast**ocoel; implantation happens at this (blastocyst) stage.',
      '**Deuterostome = "duo" = number two:** in humans (deuterostomes), the **blastopore → anus**; in protostomes it → mouth.',
      '**Dev stage order:** Zygote → **M**orula → **B**lastula → **G**astrula ("**M**y **B**rain **G**rows"). Cleavage adds cells, not size (↑ N:C and SA:V ratios).',
      '**Potency ladder:** **Toti** (any + placenta) → **Pluri** (any germ layer, no placenta) → **Multi** (one lineage). Potency falls as cells differentiate.',
      '**4 signals:** **Auto**crine (self), **Para**crine (local), **Juxta**crine (touch, no diffusion), **Endo**crine (bloodstream/distant).',
      '**Umbilical reversal:** umbilical **Arteries = deoxygenated Away** from fetus; umbilical **Vein = oxygenated** toward fetus.',
      '**Shunts:** **foramen ovale** + **ductus arteriosus** bypass the **Lungs**; **ductus venosus** bypasses the **Liver** (**ven**osus → **ven**a cava). Fetal **right** heart pressure > left.',
      '**Birth = Thin → Push → Flush:** cervix thins/water breaks → contractions deliver → afterbirth expelled. **P**rostaglandins **P**ush, **O**xytocin **O**pens.'
    ],
    keyConcepts: [
      '**Cleavage increases ratios, not size:** rapid mitosis with no overall growth raises the **nuclear-to-cytoplasmic** and **surface-area-to-volume** ratios — so the **blastula** (most cells) has the highest N:C ratio of the early stages.',
      '**Selective transcription drives differentiation:** every cell has the same genome; identity comes from which genes are transcribed, guided by **induction** (inducer → competent responder) and **morphogen gradients** (TGF-β, Shh, EGF).',
      '**Determination vs. differentiation:** determination is the irreversible **commitment** to a lineage; differentiation is the cell **actually acquiring** that structure/function/biochemistry.',
      '**Apoptosis vs. necrosis:** apoptosis is clean, programmed, membrane-contained (sculpts digits); necrosis is messy injury death that spills contents and inflames — failure of apoptosis can leave an imperforate anus or webbed digits.',
      '**Fetal lungs and liver are bypassed:** gas exchange and detox occur at the placenta/mother, so three shunts route blood away while these organs mature; the shunts close when pressures reverse after the first breath.'
    ],
    equations: [
      { name: 'Nuclear-to-cytoplasmic ratio', tex: '\\text{N:C ratio} = \\dfrac{V_{\\text{nucleus}}}{V_{\\text{cytoplasm}}}', note: 'Rises during cleavage as cells get smaller without overall growth — peaks among early stages at the blastula.' },
      { name: 'Surface-area-to-volume ratio (sphere)', tex: '\\dfrac{SA}{V} = \\dfrac{4\\pi r^2}{\\tfrac{4}{3}\\pi r^3} = \\dfrac{3}{r}', note: 'Smaller cleavage cells (smaller r) gain a higher SA:V ratio → better gas and nutrient exchange.' }
    ]
  },

  questions: raw.questions
};
