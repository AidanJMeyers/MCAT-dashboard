// Chapter 5 — The Endocrine System. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch05.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 5,
  title: 'The Endocrine System',
  subtitle: 'Mechanisms of hormone action (peptide · steroid · amino-acid-derivative) · endocrine organs and their hormones',

  blocks: [
    /* ──────────────── 5.1 Mechanisms of Hormone Action ──────────────── */
    {
      id: 's1', num: '5.1', title: 'Mechanisms of Hormone Action',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 5.1 — Mechanism of action of a peptide hormone: a membrane receptor triggers a second-messenger (cAMP) cascade.' }],
      recap: `
- **3 hormone classes by chemistry:** **peptides** (amino acids), **steroids** (from cholesterol), **amino acid derivatives** (modified single amino acids).
- **Peptide** = surface receptor → **second messenger** (cAMP/IP₃/Ca²⁺) → **fast onset, short-lived**, water-soluble (travels free).
- **Steroid** = intracellular/intranuclear receptor → binds **DNA** → alters transcription → **slow onset, long-lived**, lipid-soluble (needs a **carrier protein**).
- **Amino-acid derivatives** are unpredictable — *memorize*: catecholamines act like peptides (fast); **T₃/T₄** act like steroids (slow).
- **Direct hormones** act on a target tissue directly; **tropic hormones** trigger release of *another* hormone (usually from the brain/anterior pituitary).
`,
      detail: `
#### Classification by chemical structure
The endocrine system is made of **glands** that secrete **hormones** — signaling molecules released directly into the **bloodstream** to reach distant **target tissues**, where they bind receptors and change gene expression or cellular function. Hormones fall into three chemical classes: **peptides**, **steroids**, and **amino acid derivatives**.

##### Peptide hormones

![Figure 5.1 — Peptide hormone second-messenger cascade](${fig(0, 0).src})

**Peptide hormones** are built from amino acids — small (**ADH**) to large (**insulin**). They are cleaved from **larger precursor polypeptides** during posttranslational modification, processed in the **Golgi apparatus**, and released by **exocytosis** from vesicles.

- Because they are **charged / water-soluble**, they **cannot cross the plasma membrane** → must bind an **extracellular (surface) receptor**.
- The hormone is the **first messenger**; binding triggers a **second messenger** inside the cell.
- The surface-to-interior link is a **signaling cascade**, and every step allows **amplification** (one hormone → many receptors → many enzymes → huge quantities of second messenger).
- Common second messengers: **cyclic AMP (cAMP)**, **inositol triphosphate (IP₃)**, and **calcium**.
- Classic example — a **G protein–coupled receptor**: hormone binding activates or inhibits **adenylate cyclase**, raising/lowering **cAMP**. cAMP activates **protein kinase A (PKA)**, which phosphorylates transcription factors like **CREB**. (PKA also modifies other enzymes → effect can be rapid *or* slow.)
- **Effects: rapid onset but short-lived** (second-messenger cascades are transient).
- **Travel:** water-soluble → move **freely** in blood, **no carrier** needed.

##### Steroid hormones

![Figure 5.2 — Steroid hormone alters transcription](${fig(0, 1).src})

**Steroid hormones** are derived from **cholesterol** and made primarily by the **gonads** and **adrenal cortex**. Being **nonpolar**, they **cross the cell membrane easily**, so their receptors are **intracellular (cytosolic)** or **intranuclear**.

- Hormone–receptor binding causes a **conformational change**; one common form is **dimerization** (pairing of two hormone–receptor complexes).
- The complex binds **directly to DNA**, **increasing or decreasing transcription** of specific genes.
- **Effects: slow onset but long-lived** (they alter the amount of mRNA/protein in the cell).
- **Travel:** *not* water-soluble → must ride on **carrier proteins**. Some are specific (**sex hormone-binding globulin**), others nonspecific (**albumin**). Hormone is **inactive while bound** — only **free** hormone works, so carrier-protein levels change *active* hormone levels (e.g., **thyroxine-binding globulin, TBG**).

:::keyconcept
**Peptide vs. steroid in one line:** peptide hormones have **surface receptors** and act via **second messengers**; steroid hormones have **intracellular receptors** and act by binding **DNA** to alter gene transcription.
:::

:::mnemonic
**Insulin** is a *peptide* — released at every meal, **fast on, fast off** (short-acting). **Estrogen/testosterone** are *steroids* driving sexual maturation — a **slow but long-lasting** change. Most peptides behave like insulin; most steroids behave like the sex hormones.
:::

:::realworld
During pregnancy, high **estrogen and progesterone** raise **TBG**, so more thyroid hormone is bound and *less is free*. Pregnant women compensate by secreting more thyroid hormone — meaning **different reference ranges** are needed to diagnose thyroid disease in pregnancy.
:::

##### Amino acid–derivative hormones
**Amino acid–derivative hormones** are less common but include heavyweights: **epinephrine, norepinephrine, triiodothyronine (T₃), and thyroxine (T₄)**. They are built from one or two amino acids with extra modifications — e.g., thyroid hormones are **tyrosine + several iodine atoms**.

Their chemistry is **unpredictable** — pure memorization:

- **Catecholamines** (epinephrine, norepinephrine) → bind **G protein–coupled (surface) receptors**, like peptides.
- **Thyroid hormones** (T₃, T₄) → bind **intracellularly**, like steroids.

:::expertise
Memorize the amino-acid-derivative mechanisms because they are inconsistent. **Epinephrine/norepinephrine** = extremely **fast onset, short-lived** (the *adrenaline rush*), like peptides. **T₃/T₄** = **slow onset, long duration** (they set metabolic rate over time), like steroids.
:::

#### Comparison: the three hormone classes
This is the single most testable table in 5.1 — know every cell.

| Criterion | **Peptide** | **Steroid** | **Amino-acid derivative** |
|---|---|---|---|
| **Precursor** | Amino acids (cleaved from larger polypeptides) | **Cholesterol** | One/two **amino acids**, modified |
| **Location of receptor** | **Extracellular** (cell surface) | **Intracellular / intranuclear** | **Mixed** — catecholamines = surface; T₃/T₄ = intracellular |
| **Mechanism** | Activates receptor → **second messenger** (cAMP) → signal cascade | Binds receptor → conformational change → **binds DNA**, alters transcription | **Varies** with the specific hormone |
| **Travel in blood** | Dissolves & travels **freely** (no carrier) | Bound to a **carrier protein** | Varies |
| **Speed of onset** | **Fast** | **Slow** | Catecholamines fast; thyroid slow |
| **Duration** | **Short-lived** | **Long-lived** | Catecholamines short; thyroid long |
| **Examples** | Insulin, ADH, GH, FSH/LH, PTH | Cortisol, aldosterone, estrogen, testosterone | Epinephrine, norepinephrine, T₃, T₄ |

#### Classification by target tissue
- **Direct hormones** — secreted and act **directly** on a target tissue (e.g., **insulin** → muscle glucose uptake).
- **Tropic hormones** — require an **intermediary**: they trigger release of *another* hormone (e.g., **GnRH** → **LH** → gonads → testosterone/estrogen). Tropic hormones usually originate in the **brain and anterior pituitary**, coordinating multiple processes.

:::mnemonic
**Chemistry from the name (mostly):** peptide & amino-acid-derivative hormones end in **–in / –ine** (insul**in**, vasopress**in**, thyrox**ine**, triiodothyron**ine**). Steroid hormones end in **–one / –ol / –oid** (testoster**one**, aldoster**one**, mineralocortic**oid**s, cortis**ol**, glucocortic**oid**s).
:::
`
    },

    /* ──────────────── 5.2 Endocrine Organs and Hormones ──────────────── */
    {
      id: 's2', num: '5.2', title: 'Endocrine Organs and Hormones',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 5.3 — Organs of the endocrine system: hypothalamus, pituitary, pineal, thyroid, parathyroids, adrenals, pancreas, gonads.' }],
      recap: `
- **Hypothalamus** = bridge between nervous & endocrine systems; controls the anterior pituitary via the **hypophyseal portal system** and the posterior pituitary via **neuronal axons**.
- **Anterior pituitary (FLAT PiG):** **FSH, LH, ACTH, TSH** (tropic) + **Prolactin, endorphins, GH** (direct). **Posterior pituitary:** **ADH** + **oxytocin** (made in hypothalamus, *stored/released* here).
- **Calcium pair:** **PTH** (parathyroid) **raises** blood Ca²⁺; **calcitonin** (thyroid C-cells) **lowers** it.
- **Glucose pair:** **insulin** (β-cells) **lowers** glucose; **glucagon** (α-cells) **raises** it; **somatostatin** (δ-cells) inhibits both.
- **Adrenal cortex = 3 S's** (Salt/aldosterone, Sugar/cortisol, Sex/androgens); **adrenal medulla** = **catecholamines** (epi/norepi).
- **Negative feedback** governs most axes (HPA, HPT); **oxytocin** is a rare **positive feedback** loop.
`,
      detail: `
#### Endocrine organs at a glance
The classic endocrine glands are the **hypothalamus, pituitary, thyroid, parathyroids, adrenal glands, pancreas, gonads (testes/ovaries),** and **pineal gland**. Other organs — **kidneys, GI tract, heart, thymus** — have endocrine cells even though hormone production isn't their main job.

#### Hypothalamus — the bridge
The **hypothalamus** sits in the forebrain, **below the thalamus** and **above the pituitary** (hence *hypo*-thalamus). It links the nervous and endocrine systems and, by controlling the pituitary, exerts **organism-wide effects**. It integrates many inputs: the **suprachiasmatic nucleus** gets retinal light input (sleep–wake), other regions sense **blood osmolarity**, and others regulate **appetite/satiety**. Hypothalamic release is governed by **negative feedback** — a downstream hormone/product inhibits upstream hormones/enzymes, maintaining **homeostasis** and conserving energy.

:::bridge
The hypothalamus has three sections — **lateral, ventromedial, anterior** — whose nuclei handle emotion, aggression, sexual behavior, metabolism, temperature, and water balance. See *MCAT Behavioral Sciences Review*, Ch. 1.
:::

##### Interactions with the anterior pituitary

![Figure 5.4 — The hypophyseal portal system](${fig(1, 1).src})

The hypothalamus secretes hormones into the **hypophyseal portal system**, a dedicated blood-vessel network connecting it to the **anterior pituitary** (the **hypophysis**). These hormones travel **down the pituitary stalk**, bind anterior-pituitary receptors, and trigger release of other hormones — they are **not** found in appreciable systemic concentrations.

| Hypothalamic releasing factor | → Anterior pituitary hormone released |
|---|---|
| **GnRH** (gonadotropin-releasing hormone) | **FSH** + **LH** |
| **GHRH** (growth hormone–releasing hormone) | **GH** (growth hormone) |
| **TRH** (thyroid-releasing hormone) | **TSH** (thyroid-stimulating hormone) |
| **CRF** (corticotropin-releasing factor) | **ACTH** (adrenocorticotropic hormone) |
| **PIF** (= **dopamine**) | **↓ prolactin** (this one *inhibits*) |

:::keyconcept
Most anterior-pituitary hormones need a *releasing* factor. **Prolactin is the exception:** the hypothalamus tonically releases **PIF (dopamine)** to *suppress* it. Prolactin rises only when **PIF is absent**.
:::

##### Endocrine axes & negative feedback

![Figure 5.5 — Hypothalamic negative-feedback mechanism (CRF → ACTH → cortisol)](${fig(1, 2).src})

Each tropic hormone drives release of a downstream hormone that then **feeds back** to inhibit the pathway. Example: **CRF → ACTH → cortisol**; rising cortisol inhibits both hypothalamus (CRF) and anterior pituitary (ACTH). This requires **cortisol receptors** in those organs. Three-organ systems like this are **axes**: **HPA** (hypothalamic–pituitary–adrenal), **HPO** (hypothalamic–pituitary–ovarian), etc.

:::keyconcept
The anterior pituitary looks all-powerful, but it is **controlled by the hypothalamus** sitting directly above it.
:::

##### Interactions with the posterior pituitary
The **posterior pituitary** receives **no** portal hormones. Instead, hypothalamic **neurons send axons down the stalk** and release **oxytocin** and **ADH** directly. **Oxytocin** drives uterine contractions in labor and milk letdown in lactation (and bonding). **ADH (vasopressin)** increases water reabsorption in the renal **collecting ducts**, secreted in response to **increased plasma osmolarity**.

:::realworld
A **pituitary tumor** can compress the portal system, blocking **PIF (dopamine)** from reaching the pituitary → **prolactin rises** → **galactorrhea** (milk production), even in males. Milk production in a male or non-pregnant female should prompt suspicion of a pituitary tumor.
:::

#### Anterior pituitary — FLAT PiG
The **anterior pituitary** makes **seven** products: **four tropic** (covered with their target organs) + **three direct**.

:::mnemonic
**FLAT PiG** — anterior pituitary hormones:
**F**SH · **L**H · **A**CTH · **T**SH · **P**rolactin · **i**nhibitor of pain (**endorphins**) · **G**H.
**FLAT = tropic** (act on other endocrine glands); **PiG = direct** (prolactin, endorphins, GH act on non-endocrine tissue).
:::

##### Tropic hormones (act on other glands)
| Tropic hormone | Stimulated by | Acts on |
|---|---|---|
| **FSH** & **LH** | **GnRH** | **Gonads** (testes/ovaries) |
| **ACTH** | **CRF** | **Adrenal cortex** |
| **TSH** | **TRH** | **Thyroid** |

##### Direct hormones (act on non-endocrine tissue)
- **Prolactin** — stimulates **milk production** in the **mammary glands** (more important in females; milk production in males is always pathologic). Inhibited by hypothalamic **dopamine**. In pregnancy, high estrogen/progesterone build milk ducts, but lactation begins only after the placenta is expelled and estrogen/progesterone/dopamine fall. **Milk ejection:** suckling → hypothalamus → (1) **oxytocin** from posterior pituitary contracts breast smooth muscle, (2) **dopamine stops**, releasing prolactin.
- **Endorphins** — **decrease pain perception** and can produce euphoria (the marathon "endorphin high"). Morphine and similar drugs mimic them.
- **Growth hormone (GH)** — promotes **bone and muscle growth**; **prevents glucose uptake** in non-growing tissues and stimulates **fatty-acid breakdown**, raising glucose availability. Stimulated by **GHRH**.
  - **Excess in childhood** (before epiphyseal plates close) → **gigantism**; **deficit in childhood** → **dwarfism**.
  - **Excess in adults** (long bones sealed) → **acromegaly** — enlargement of **hands, feet, head** (bigger shoes, rings no longer fit, hats too small).

#### Posterior pituitary — ADH & oxytocin

![Figure 5.6 — Antidiuretic hormone (ADH)](${fig(1, 3).src})

The **posterior pituitary** holds the nerve terminals of hypothalamic neurons; it **stores and releases** (but does **not synthesize**) **ADH** and **oxytocin**.

- **ADH** — secreted on **low blood volume** (baroreceptors) or **high osmolarity** (osmoreceptors). It increases **collecting-duct** permeability to water → more water reabsorption → **↑ blood volume, ↑ blood pressure**, and (because only water is retained) **↓ osmolarity**.
- **Oxytocin** — secreted in **childbirth** (coordinated uterine contraction) and in **suckling** (milk ejection); may drive bonding. It is unusual in using a **positive feedback** loop: oxytocin → contraction → more oxytocin → stronger contraction, "spiraling forward" to a definitive endpoint (**delivery**).

:::keyconcept
The posterior pituitary synthesizes **nothing**. **ADH and oxytocin are made in the hypothalamus** and merely released from the posterior pituitary.
:::

#### Thyroid
The **thyroid** sits on the front of the trachea at the base of the neck and is controlled by **TSH**. Two jobs: **set basal metabolic rate** (via **T₃/T₄**) and **calcium homeostasis** (via **calcitonin**).

##### Triiodothyronine (T₃) and thyroxine (T₄)

![Figure 5.7 — Thyroid hormone negative-feedback mechanism](${fig(1, 4).src})

- **T₃** and **T₄** are made by **iodination of tyrosine** in the **follicular cells** (the 3/4 = number of iodine atoms).
- They **reset basal metabolic rate**: ↑ T₃/T₄ → ↑ cellular respiration → faster synthesis *and* degradation (turnover) of protein and fatty acids.
- **Negative feedback:** high plasma T₃/T₄ → **↓ TRH and TSH**.

| | **Hypothyroidism** (too little) | **Hyperthyroidism** (too much) |
|---|---|---|
| Cause | **Iodine deficiency** or thyroid inflammation | Tumor or overstimulation |
| Activity / temp | Lethargy, **↓ body temp** | Heightened activity, **↑ body temp** |
| Heart & respiration | **Slowed** | **Increased** |
| Temperature tolerance | **Cold intolerance** | **Heat intolerance** |
| Weight | **Gain** | **Loss** |
| In infants | **Cretinism** (intellectual disability, developmental delay) | — |

##### Calcitonin
The thyroid has two cell populations: **follicular cells** (T₃/T₄) and **C-cells / parafollicular cells** (**calcitonin**). **Calcitonin lowers plasma calcium** three ways: ↑ **kidney excretion** of Ca²⁺, ↓ **gut absorption** of Ca²⁺, ↑ **storage in bone**. **High blood Ca²⁺** stimulates its release.

:::mnemonic
**Calci­ton­in tones down** calcium in the blood.
:::

#### Parathyroid glands

![Figure 5.8 — Calcium and phosphorus homeostasis](${fig(1, 5).src})

Four pea-sized glands on the **posterior thyroid** secrete **parathyroid hormone (PTH)** — calcitonin's **antagonist**, which **raises blood calcium**:

- **↓ calcium excretion** by the kidneys
- **↑ calcium absorption** in the gut (via **vitamin D**, which PTH activates)
- **↑ bone resorption** → frees Ca²⁺
- **Phosphate:** ↑ resorption of phosphate from **bone** but ↓ reabsorption in the **kidney** (promoting urinary excretion); vitamin D ↑ gut phosphate absorption — so the net effect on phosphate roughly **cancels out**, while blood **calcium rises** substantially.
- Subject to **feedback inhibition**: rising plasma Ca²⁺ → ↓ PTH.

:::keyconcept
**Calcium is critical:** bone structure/strength, **neurotransmitter release**, **muscle contraction**, **blood clotting** (Ca²⁺ is a cofactor), plus cell movement and exocytosis.
:::

:::keyconcept
Like glucagon/insulin for glucose, **PTH and calcitonin are an antagonistic pair** for calcium: **PTH ↑ serum Ca²⁺**, **calcitonin ↓ serum Ca²⁺**.
:::

#### Adrenal cortex — the 3 S's
The **adrenal glands** sit atop the kidneys (*adrenal* = "near the kidney"); each has a **cortex** and a **medulla**. The **adrenal cortex** secretes **corticosteroids** in three functional classes.

##### Glucocorticoids
**Glucocorticoids** — chiefly **cortisol** and **cortisone** — regulate glucose and protein metabolism:
- **↑ blood glucose** (↑ gluconeogenesis, ↓ protein synthesis).
- **↓ inflammation and immune responses**.
- **Cortisol = stress hormone** (physical/emotional stress) → provides ready fuel.
- Release controlled by **ACTH** (the **CRF → ACTH → glucocorticoid** axis).

:::realworld
**Glucocorticoid injections** treat joint pain by reducing inflammation; systemically they treat allergic reactions and autoimmune disease.
:::

##### Mineralocorticoids

![Figure 5.9 — The renin–angiotensin–aldosterone system](${fig(1, 6).src})

**Mineralocorticoids** handle **salt & water homeostasis** in the kidneys. The key one is **aldosterone**:
- **↑ Na⁺ reabsorption** in the **distal convoluted tubule and collecting duct**; **water follows Na⁺** → **↑ blood volume & pressure**, with **osmolarity unchanged** (contrast **ADH**, which moves only water → **↓ osmolarity**).
- **↑ excretion of K⁺ and H⁺**.
- Regulated by the **renin–angiotensin–aldosterone system (RAAS)**, *not* ACTH:

1. **↓ blood pressure** → **juxtaglomerular cells** of the kidney secrete **renin**.
2. Renin cleaves **angiotensinogen** → **angiotensin I**.
3. **Angiotensin-converting enzyme (ACE)** in the **lungs** converts angiotensin I → **angiotensin II**.
4. **Angiotensin II** → adrenal cortex secretes **aldosterone** (and itself vasoconstricts, ↑ BP).
5. Restored blood pressure removes the stimulus for renin (**negative feedback**).

:::realworld
**Angiotensin II** also directly vasoconstricts and raises heart rate. **ACE inhibitors** (names end in **–pril**: *lisinopril, enalapril, ramipril*) block angiotensin I → II conversion, lowering blood pressure and easing the load on a failing heart.
:::

##### Cortical sex hormones
The cortex also makes **cortical sex hormones** (**androgens** and **estrogens**). Because the **testes** already make abundant androgens, adrenal androgens matter little in males; because the **ovaries** make fewer, **females are more sensitive** to disorders of cortical sex hormone production. Certain enzyme deficiencies in adrenal synthesis cause **excess androgens** → a genotypic female may be born with **ambiguous/masculinized genitalia**; males can be affected if estrogens are overproduced.

:::mnemonic
**Adrenal cortex = the 3 S's:** **S**alt (mineralocorticoids) · **S**ugar (glucocorticoids) · **S**ex (cortical sex hormones).
:::

#### Adrenal medulla — catecholamines
Nestled inside the cortex, the **adrenal medulla** is a **nervous-system derivative** that secretes the sympathetic hormones **epinephrine** and **norepinephrine** — **catecholamines** (amino-acid derivatives) — directly into the blood. Their effects mirror the **sympathetic fight-or-flight** response:

- **↑ glycogenolysis** (glycogen → glucose) in liver and muscle (epinephrine) and **↑ basal metabolic rate**.
- **↑ heart rate**, **dilate bronchi**.
- **Vasodilation** to skeletal muscle, heart, lungs, brain; **vasoconstriction** to gut, kidneys, skin.

:::keyconcept
The **stress response uses both**: **cortisol** mediates **long-term (slow)** stress, **catecholamines** mediate **short-term (fast)** stress. Cortisol even ↑ catecholamine synthesis, boosting catecholamine release.
:::

#### Pancreas — glucose homeostasis

![Figure 5.10 — Anatomy of the pancreas (islets of Langerhans)](${fig(1, 7).src})

The pancreas is both **exocrine** (digestive enzymes into ducts) and **endocrine**. Endocrine cells cluster in the **islets of Langerhans** as three cell types:

| Cell | Secretes | Effect on glucose |
|---|---|---|
| **α (alpha)** | **Glucagon** | **Raises** blood glucose |
| **β (beta)** | **Insulin** | **Lowers** blood glucose |
| **δ (delta)** | **Somatostatin** | Inhibits insulin **and** glucagon |

##### Glucagon
**Glucagon** is secreted in **fasting / low glucose**: it ↑ glucose production via **glycogenolysis, gluconeogenesis**, and degradation of **protein and fat**. GI hormones **cholecystokinin** and **gastrin** also ↑ glucagon. High blood glucose **inhibits** it.

:::mnemonic
**Glucagon** is high when **glucose is gone**.
:::

##### Insulin

![Figure 5.11 — Insulin tracks blood glucose directly](${fig(1, 8).src})

**Insulin** (glucagon's antagonist) is secreted when **glucose is high**: it drives muscle and liver to **take up glucose** and store it as **glycogen**, and stimulates **anabolic** fat and protein synthesis.

- **Excess insulin** → **hypoglycemia** (low blood glucose).
- **Too little / insensitivity** → **diabetes mellitus**, marked by **hyperglycemia**. Excess filtered glucose overwhelms renal reabsorption → glucose in urine, which osmotically drags water out → **polyuria** (frequent urination) and **polydipsia** (thirst).

| | **Type I diabetes** (insulin-dependent) | **Type II diabetes** (non-insulin-dependent) |
|---|---|---|
| Mechanism | **Autoimmune destruction of β-cells** → low/absent insulin | **Receptor-level resistance** to insulin |
| Cause | Autoimmune | Partly inherited, partly environment (high-carb diet, obesity) |
| Treatment | Regular **insulin injections** | Oral agents; insulin only when control is lost |

:::keyconcept
**Insulin ↓ plasma glucose; glucagon ↑ plasma glucose.** **GH, glucocorticoids, and epinephrine** also raise glucose — together these are the **counterregulatory hormones**.
:::

##### Somatostatin
**Somatostatin** (δ-cells) **inhibits both insulin and glucagon**; secretion is stimulated by **high blood glucose and amino acids**. The hypothalamus also makes somatostatin, where it **decreases GH secretion**.

#### Gonads
- **Testes** secrete **testosterone** (a steroid) in response to **LH/FSH** → male sexual differentiation in gestation and secondary sex characteristics (axillary/pubic hair, deeper voice, muscle growth).
- **Ovaries** secrete **estrogen** and **progesterone** (steroids) in response to gonadotropins → female reproductive development, secondary sex characteristics, and governance of the **menstrual cycle** and **pregnancy**.

#### Pineal gland
The **pineal gland**, deep in the brain, secretes **melatonin**, involved in **circadian rhythms** and the sensation of sleepiness. It receives retinal projections (but isn't part of vision) and is thought to release melatonin in response to **decreasing light**.

:::realworld
**Melatonin** is sold over the counter for jet lag and "resetting" daily rhythm because it causes drowsiness — but long-term effects remain unknown.
:::

#### Other organs with endocrine roles
- **GI tract** (stomach/intestine) — **secretin, gastrin, cholecystokinin**; released mostly in response to specific nutrients.
- **Kidneys** — handle water balance (via ADH and RAAS) and produce **erythropoietin (EPO)**, which stimulates **bone marrow** to make **erythrocytes** in response to **low blood O₂**.
- **Heart (atria)** — release **atrial natriuretic peptide (ANP)** when atria are **stretched by excess blood volume**; ANP promotes **Na⁺ and water excretion** → ↓ blood volume/pressure (functional **antagonist of aldosterone**, no effect on osmolarity).
- **Thymus** — releases **thymosin** for **T-cell development**; atrophies by adulthood.

#### Master hormone reference (Table 5.1)
The whole chapter on one table — Hormone · Source · Type · Action.

| Hormone | Source | Type | Action |
|---|---|---|---|
| **FSH** | Anterior pituitary | Peptide | Follicle maturation (♀); spermatogenesis (♂) |
| **LH** | Anterior pituitary | Peptide | Ovulation (♀); testosterone synthesis (♂) |
| **ACTH** | Anterior pituitary | Peptide | Stimulates adrenal cortex to make/secrete glucocorticoids |
| **TSH** | Anterior pituitary | Peptide | Stimulates thyroid to produce thyroid hormones |
| **Prolactin** | Anterior pituitary | Peptide | Milk production & secretion |
| **Endorphins** | Anterior pituitary | Peptide | ↓ pain sensation; can promote euphoria |
| **Growth hormone (GH)** | Anterior pituitary | Peptide | Bone & muscle growth; raises blood glucose |
| **ADH (vasopressin)** | Hypothalamus → posterior pituitary | Peptide | ↑ water reabsorption (↑ collecting-duct permeability) |
| **Oxytocin** | Hypothalamus → posterior pituitary | Peptide | Uterine contractions in labor; milk ejection; bonding |
| **T₃ & T₄** | Thyroid (follicular cells) | Amino-acid derivative | ↑ metabolic activity |
| **Calcitonin** | Thyroid (parafollicular / C cells) | Peptide | **↓ blood calcium** |
| **PTH** | Parathyroids | Peptide | **↑ blood calcium** |
| **Glucocorticoids** (cortisol, cortisone) | Adrenal cortex | Steroid | ↑ blood glucose; ↓ protein synthesis; anti-inflammatory |
| **Mineralocorticoids** (aldosterone) | Adrenal cortex | Steroid | ↑ water reabsorption (via ↑ Na⁺ reabsorption); ↑ K⁺/H⁺ excretion |
| **Epinephrine & norepinephrine** | Adrenal medulla | Amino-acid derivative | ↑ blood glucose & heart rate; dilate bronchi; alter blood flow |
| **Glucagon** | Pancreas (α-cells) | Peptide | Glycogenolysis; **↑ blood glucose** |
| **Insulin** | Pancreas (β-cells) | Peptide | **↓ blood glucose**; promotes anabolism |
| **Somatostatin** | Pancreas (δ-cells) | Peptide | Suppresses glucagon & insulin |
| **Testosterone** | Testis (and adrenal cortex) | Steroid | Male reproductive system & secondary sex characteristics |
| **Estrogen** | Ovary (and placenta) | Steroid | Female reproductive system & secondary sex characteristics |
| **Progesterone** | Ovary | Steroid | Maintains the endometrium |
| **Melatonin** | Pineal gland | Peptide | Circadian rhythms |
| **Erythropoietin (EPO)** | Kidney | Peptide | Stimulates bone marrow to make erythrocytes |
| **Atrial natriuretic peptide (ANP)** | Heart (atria) | Peptide | Promotes salt & water excretion |
| **Thymosin** | Thymus | Peptide | T-cell development |
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**FLAT PiG** — anterior pituitary: **F**SH · **L**H · **A**CTH · **T**SH · **P**rolactin · endorph**i**ns · **G**H. **FLAT = tropic** (act on glands); **PiG = direct** (non-endocrine targets).',
      '**Adrenal cortex = the 3 S\'s:** **S**alt (aldosterone) · **S**ugar (cortisol) · **S**ex (cortical androgens/estrogens). Deeper = steroids; the medulla in the middle makes catecholamines.',
      '**Calci­ton­in tones down** blood calcium; its antagonist **PTH** (Para → "Pulls up") raises it. Glucose mirror: **insulin down, glucagon up**.',
      '**Glucagon** is high when **glucose is gone** (fasting); **insulin** rises after a meal.',
      '**Tropic vs. direct:** *tropic* hormones act on **another endocrine gland** (GnRH→LH→gonads); *direct* hormones act on a **target tissue** (insulin→muscle). Tropic ones cluster in the brain/anterior pituitary.',
      '**Hormone chemistry from the name:** **–in / –ine** = peptide or amino-acid derivative (insul**in**, thyrox**ine**); **–one / –ol / –oid** = steroid (testoster**one**, cortis**ol**, glucocortic**oid**).',
      '**Peptide = Pronto, Steroid = Slow:** peptides use surface receptors + second messengers (fast, short); steroids enter the cell and bind DNA (slow, long).',
      '**Water-balance trio:** **ADH** ↑ blood volume, ↓ osmolarity (water only); **aldosterone** ↑ blood volume, no osmolarity change (salt + water); **ANP** ↓ blood volume, no osmolarity change.'
    ],
    keyConcepts: [
      '**Receptor location predicts everything:** surface receptor → peptide/catecholamine → second messenger → fast & short-lived; intracellular receptor → steroid/thyroid → DNA transcription → slow & long-lived.',
      '**Negative feedback runs the axes** (HPA, HPT): the final hormone inhibits the hypothalamus and anterior pituitary. **Oxytocin** is the notable **positive-feedback** exception, terminating at delivery.',
      '**The posterior pituitary synthesizes nothing** — ADH and oxytocin are made in the hypothalamus and merely released there; the anterior pituitary is controlled by hypothalamic releasing/inhibiting factors via the hypophyseal portal system.',
      '**Antagonistic pairs maintain set points:** insulin/glucagon for glucose, PTH/calcitonin for calcium, aldosterone/ANP for blood volume.',
      '**Counterregulatory hormones raise glucose:** glucagon, GH, glucocorticoids (cortisol), and epinephrine — opposing insulin.'
    ],
    equations: []
  },

  questions: raw.questions
};
