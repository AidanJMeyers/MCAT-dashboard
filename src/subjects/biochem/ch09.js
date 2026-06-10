// Biochemistry Chapter 9 — Carbohydrate Metabolism I: Glycolysis, Glycogen,
// Gluconeogenesis, and the Pentose Phosphate Pathway.
// Figures and questions are reused from ch09.json; goals, recap/detail markdown,
// and the concept summary are authored here to the rich-formatting quality bar.
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 9,
  title: 'Carbohydrate Metabolism I',
  subtitle: 'Glucose transport · glycolysis · other monosaccharides · pyruvate dehydrogenase · glycogenesis & glycogenolysis · gluconeogenesis · pentose phosphate pathway',

  blocks: [
    /* ───────────────────────── 9.1 Glucose Transport ───────────────────────── */
    {
      id: 's1', num: '9.1', title: 'Glucose Transport',
      goals: [
        'List the locations and functions of the GLUT 2 and GLUT 4 glucose transport proteins',
        'Predict how increased blood glucose levels will impact GLUT 2 and GLUT 4 activity'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 9.1 — Insulin recruits preformed GLUT 4 transporters to the membrane by exocytosis in muscle and adipose cells.' }],
      recap: `
- Blood glucose is held near **$100\\ \\text{mg/dL}$ (5.6 mM)**; too high damages retina/kidney/vessels/nerves, too low causes seizures and coma.
- **GLUT 2** = liver + pancreatic β-cells; **high $K_m$** (~15 mM) → uptake proportional to blood glucose (**first-order**); the pancreatic **glucose sensor** with glucokinase.
- **GLUT 4** = muscle + adipose; **low $K_m$** (~5 mM) → saturated just above normal (**zero-order**); the **only insulin-responsive** transporter.
- **Insulin** raises GLUT 4 at the membrane by **exocytosis** of preformed vesicles — the mechanism disrupted in **diabetes mellitus**.
`,
      detail: `
#### Why glucose transport is regulated
Maintaining a constant blood glucose concentration of about **$100\\ \\text{mg/dL}$ ($5.6\\ \\text{mM}$; normal range 4–6 mM)** is critical:

- **High blood sugar** → long-term damage to the **retina, kidney, blood vessels, and nerves**.
- **Low blood sugar** → autonomic disturbances, **seizures**, even **coma**.

Glucose entry into most cells is driven by **concentration** and is **independent of sodium** (unlike absorption from the digestive tract). There are four transporters, **GLUT 1–GLUT 4**; **GLUT 2 and GLUT 4** are highest-yield because they sit in specific tissues and are tightly regulated.

#### GLUT 2 vs. GLUT 4 — the master comparison

| Feature | **GLUT 2** | **GLUT 4** |
|---|---|---|
| **Tissues** | **Liver** (hepatocytes) + **pancreatic β-islet cells** | **Adipose tissue** + **skeletal muscle** |
| **$K_m$** | **High** (~15 mM) | **Low** (~5 mM, near normal blood glucose) |
| **Kinetics** | Picks up glucose **proportional** to its concentration (**first-order**) | **Saturated** just above normal levels (**zero-order**) |
| **Saturated at normal glucose?** | **No** | **Yes** |
| **Insulin-responsive?** | **No** (but acts as the **glucose sensor** for insulin release) | **Yes** — the **only** insulin-responsive transporter |
| **Role** | Stores **excess** glucose after a meal | Pulls glucose into muscle/fat on insulin signal |

:::bridge
The **$K_m$** is the substrate concentration at which an enzyme runs at half of its maximum velocity ($V_{max}$). A **lower $K_m$ → higher affinity** for substrate. See *MCAT Biochemistry Review* Ch. 2 for Michaelis–Menten kinetics.
:::

##### GLUT 2 — the storage and sensor transporter
After a meal, blood in the **hepatic portal vein** is rich in glucose. GLUT 2's high $K_m$ means the liver captures glucose **in proportion to its concentration**, preferentially storing the excess. When glucose drops below the $K_m$, the remainder bypasses the liver into peripheral circulation. In **pancreatic β-cells**, GLUT 2 plus the glycolytic enzyme **glucokinase** functions as the **glucose sensor** that triggers insulin release.

##### GLUT 4 — the insulin-responsive transporter
GLUT 4 in muscle and adipose responds to peripheral glucose. Because its $K_m$ is near normal blood glucose, it is **saturated** just slightly above normal — so high blood sugar can't push more glucose through existing transporters (**zero-order kinetics**). The only way to increase uptake is to **add more transporters**: **insulin** stimulates **exocytosis** of vesicles carrying preformed GLUT 4 to the membrane.

:::keyconcept
A cell with **saturated** GLUT 4 cannot increase glucose intake by raising blood glucose — it must increase the **number of GLUT 4 transporters** on its surface. Insulin is the signal that does this.
:::

:::realworld
**Diabetes mellitus** is a disruption of the insulin/GLUT 4 mechanism. In **type 1**, insulin is absent. In **type 2**, the receptor becomes **insensitive** to insulin and fails to recruit GLUT 4. Either way blood glucose rises → immediate symptoms (**polyuria, polydipsia, ketoacidosis**) and long-term symptoms (**blindness, heart attacks, strokes, nerve damage**).
:::

Although **basal** transport occurs in all cells independent of insulin, the rate rises in muscle and adipose when insulin rises. **Muscle** stores excess glucose as **glycogen**; **adipose** uses glucose to form **dihydroxyacetone phosphate (DHAP)** → glycerol 3-phosphate → backbone for storing fatty acids as **triacylglycerols**.
`
    },

    /* ───────────────────────────── 9.2 Glycolysis ───────────────────────────── */
    {
      id: 's2', num: '9.2', title: 'Glycolysis',
      goals: [
        'Recall the key steps, intermediates, reactants, products, and key enzymes of glycolysis',
        'Explain the function and mechanism of lactate fermentation',
        'Explain the unique effects of glycolysis on hemoglobin and erythrocytes',
        'Recall the function and regulatory mechanisms of a given glycolytic enzyme'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 9.2 — Glycolysis: glucose → 2 pyruvate, with the three irreversible (regulated) steps and the PFK-2 / F2,6-BP control loop.' }],
      recap: `
- **Glycolysis** = cytoplasmic, **anaerobic-capable**, converts glucose $\\rightarrow$ **2 pyruvate**; net yield **2 ATP + 2 NADH** per glucose.
- **PFK-1** is the **rate-limiting / committed step**: activated by **AMP** and **F2,6-BP**, inhibited by **ATP** and **citrate**.
- **3 irreversible steps**: **hexokinase/glucokinase**, **PFK-1**, **pyruvate kinase** — these are the gluconeogenesis bypass points.
- **Substrate-level phosphorylation** (no $\\text{O}_2$ needed) occurs at **3-phosphoglycerate kinase** and **pyruvate kinase**, via high-energy **1,3-BPG** and **PEP**.
- **Fermentation** (lactate dehydrogenase) regenerates **$\\text{NAD}^+$** so glycolysis can continue without $\\text{O}_2$.
- In **RBCs**, **2,3-BPG** (from bisphosphoglycerate mutase) right-shifts the HbA $\\text{O}_2$ curve.
`,
      detail: `
#### Overview
**Glycolysis** is a **cytoplasmic** pathway converting glucose into **two pyruvate** molecules, releasing energy as **two substrate-level phosphorylations** and **one oxidation**. All cells can do it; in **red blood cells** it is the *only* energy-yielding pathway (no mitochondria → no citric acid cycle, ETC, oxidative phosphorylation, or β-oxidation). Glucose is the major entrant, but **galactose** and **fructose** also feed in.

- With mitochondria + $\\text{O}_2$: the **NADH** feeds aerobic respiration.
- Without either (RBCs, or exercising muscle): glycolysis runs **anaerobically**, losing some energy.

:::realworld
Because glycolysis is needed in every cell, **complete absence of any glycolytic enzyme is incompatible with life** — there are no such diseases. Partial defects are rare; the classic example is **pyruvate kinase deficiency**.
:::

#### The five high-yield enzymes
The MCAT focuses on the enzymes that are **regulated** or **energetically important**.

| Enzyme | Reaction | Regulation / notes |
|---|---|---|
| **Hexokinase / Glucokinase** | glucose $\\rightarrow$ glucose 6-phosphate | **Irreversible**; traps glucose in the cell *(see table below)* |
| **Phosphofructokinase-1 (PFK-1)** | F6P $\\rightarrow$ fructose 1,6-bisphosphate | **Rate-limiting / committed step.** Activated by **AMP, F2,6-BP**; inhibited by **ATP, citrate** |
| **Glyceraldehyde-3-phosphate dehydrogenase** | G3P + $\\text{P}_i$ $\\rightarrow$ 1,3-BPG | Oxidation; **reduces $\\text{NAD}^+ \\rightarrow$ NADH** |
| **3-Phosphoglycerate kinase** | 1,3-BPG + ADP $\\rightarrow$ ATP + 3-PG | **Substrate-level phosphorylation**; reversible |
| **Pyruvate kinase** | PEP + ADP $\\rightarrow$ ATP + pyruvate | **Irreversible**; **feed-forward** activation by **F1,6-BP** |

##### Hexokinase vs. glucokinase
The first step in any cell is transport in, then **phosphorylation to glucose 6-phosphate** by a kinase, which "traps" glucose (GLUT transporters can't carry the phosphorylated form).

| **Hexokinase** | **Glucokinase** |
|---|---|
| Present in **most tissues** | **Hepatocytes** + **pancreatic β-islet cells** (with GLUT 2 = glucose sensor) |
| **Low $K_m$** (max velocity at low [glucose]) | **High $K_m$** (acts proportional to [glucose]) |
| **Inhibited by** its product, glucose 6-phosphate | **Induced by insulin** in hepatocytes |

:::keyconcept
The **rate-limiting enzymes** are the MCAT's favorite targets — memorize all six:

| Pathway | Rate-limiting enzyme |
|---|---|
| **Glycolysis** | **Phosphofructokinase-1 (PFK-1)** |
| **Fermentation** | **Lactate dehydrogenase** |
| **Glycogenesis** | **Glycogen synthase** |
| **Glycogenolysis** | **Glycogen phosphorylase** |
| **Gluconeogenesis** | **Fructose-1,6-bisphosphatase** |
| **Pentose phosphate pathway** | **Glucose-6-phosphate dehydrogenase** |
:::

##### PFK-1 and the PFK-2 / F2,6-BP loop
**PFK-1** is the main control point. It is **inhibited by ATP and citrate** (energy is plentiful) and **activated by AMP** (energy is needed). Citrate is a citric acid cycle intermediate, so high citrate also signals plenty of energy.

In **hepatocytes**, **insulin stimulates** and **glucagon inhibits** PFK-1 *indirectly* through **PFK-2**:

- **Insulin** → activates **PFK-2** → makes **fructose 2,6-bisphosphate (F2,6-BP)** → **activates PFK-1**.
- **Glucagon** → inhibits PFK-2 → less F2,6-BP → **less PFK-1 activity**.

This lets the liver **override ATP inhibition** so glycolytic intermediates can be diverted into **glycogen, fatty acids, and storage molecules** rather than just burned.

##### Energy capture: GAPDH, PGK, and pyruvate kinase
- **Glyceraldehyde-3-phosphate dehydrogenase** oxidizes G3P and adds **inorganic phosphate ($\\text{P}_i$)**, making **1,3-bisphosphoglycerate** and reducing **$\\text{NAD}^+ \\rightarrow$ NADH**.
- **3-Phosphoglycerate kinase** transfers the high-energy phosphate from **1,3-BPG** to ADP → **ATP** + 3-phosphoglycerate. This direct phosphorylation of ADP is **substrate-level phosphorylation** — it needs **no oxygen** and is the only ATP source in anaerobic tissue.
- **Pyruvate kinase** (last enzyme of aerobic glycolysis) does a substrate-level phosphorylation using **phosphoenolpyruvate (PEP)**. It shows **feed-forward activation** by **fructose 1,6-bisphosphate** (an upstream product priming a downstream step).

#### Net yield

$$\\text{glucose} + 2\\ \\text{NAD}^+ + 2\\ \\text{ADP} + 2\\ \\text{P}_i \\rightarrow 2\\ \\text{pyruvate} + 2\\ \\text{NADH} + 2\\ \\text{ATP} + 2\\ \\text{H}_2\\text{O}$$

**Net per glucose: 2 ATP and 2 NADH.** (Four ATP are made but two are invested in the priming steps.)

#### Fermentation
Without $\\text{O}_2$, **fermentation** regenerates the $\\text{NAD}^+$ that glyceraldehyde-3-phosphate dehydrogenase needs:

- **Mammals:** **lactate dehydrogenase** reduces **pyruvate $\\rightarrow$ lactate** and oxidizes **NADH $\\rightarrow \\text{NAD}^+$**. No net carbon loss (both are 3-carbon). Lactate rises during strenuous exercise, heart attack, or stroke.
- **Yeast:** pyruvate (3C) $\\rightarrow$ **ethanol** (2C) + **$\\text{CO}_2$** (1C).

Both serve the same purpose: **replenish $\\text{NAD}^+$** so glycolysis keeps running.

:::mnemonic
**Irreversible steps of glycolysis — "How Glycolysis Pushes Forward the Process: Kinases":** **H**exokinase · **G**lucokinase · **P**FK-1 · **P**yruvate kinase. (All are kinases; all are bypassed in gluconeogenesis.)
:::

#### Important intermediates
- **Dihydroxyacetone phosphate (DHAP)** — from F1,6-BP; isomerized to glycerol 3-phosphate for **triacylglycerol synthesis** in liver/adipose.
- **1,3-Bisphosphoglycerate (1,3-BPG)** and **phosphoenolpyruvate (PEP)** — high-energy intermediates that drive **substrate-level phosphorylation** (the only ATP made anaerobically).

#### Glycolysis in erythrocytes
In RBCs, anaerobic glycolysis is the **only** ATP source, yielding **net 2 ATP per glucose**. RBCs also have **bisphosphoglycerate mutase**, which makes **2,3-bisphosphoglycerate (2,3-BPG)** from 1,3-BPG (a mutase moves the phosphate from the 1- to the 2-position).

![Figure 9.3 — Effect of 2,3-BPG on the oxygen dissociation curve of hemoglobin A.](${fig(1, 1).src})

**2,3-BPG** binds allosterically to the **β-chains of hemoglobin A (HbA)** and **lowers $\\text{O}_2$ affinity** → a **rightward shift** of the dissociation curve. This allows unloading in tissues while still permitting full saturation in the lungs. An abnormal **increase** in 2,3-BPG could shift the curve so far that HbA can't fully saturate in the lungs. Crucially, **2,3-BPG binds poorly to fetal hemoglobin (HbF)**, so HbF has **higher $\\text{O}_2$ affinity** than maternal HbA — enabling transplacental $\\text{O}_2$ transfer.

:::bridge
Other factors that **right-shift** the $\\text{O}_2$ curve (the **Bohr effect**): high **2,3-BPG**, low **pH**, high **$[\\text{H}^+]$**, high **$p\\text{CO}_2$** — all of which occur during exercise. Mnemonic: *"Exercise is the right thing to do."* (See *MCAT Biology Review* Ch. 7.)
:::

:::bridge
**High-altitude adaptation (low $p\\text{O}_2$):** ↑ respiration → ↑ initial Hb $\\text{O}_2$ affinity → ↑ glycolysis → ↑ **[2,3-BPG]** in RBCs (12–24 h, normalizing $\\text{O}_2$ affinity) → ↑ hemoglobin (days–weeks).
:::
`
    },

    /* ─────────────────────── 9.3 Other Monosaccharides ─────────────────────── */
    {
      id: 's3', num: '9.3', title: 'Other Monosaccharides',
      goals: [
        'Explain the importance of trapping a sugar in the cell and linking its metabolism to glycolysis',
        'Recognize the key enzymes, reactants, and products of galactose and fructose metabolism'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 9.4 — Galactose metabolism: galactokinase traps galactose, then it is converted to glucose 1-phosphate to enter glycolysis.' }],
      recap: `
- Both pathways first **trap** the sugar by phosphorylation, then funnel it into glycolysis.
- **Galactose** (from milk **lactose**): **galactokinase** traps it; **galactose-1-phosphate uridyltransferase** + an epimerase → **glucose 1-phosphate**.
- **Fructose** (from **sucrose**, honey, fruit): **fructokinase** traps it; **aldolase B** cleaves F1P → **glyceraldehyde + DHAP**.
- Fructose enters **below PFK-1**, so it bypasses the rate-limiting step — a fast energy source.
`,
      detail: `
Glucose is the primary monosaccharide, but **galactose** and **fructose** also feed glycolysis. They're tested less often, but notice how their pathways **parallel** glycolysis (Figures 9.4 and 9.5). Each must first be **trapped** in the cell by phosphorylation, just like glucose.

#### Galactose metabolism
Dietary galactose comes mostly from the milk disaccharide **lactose**, hydrolyzed to galactose + glucose by **lactase** (a brush-border enzyme of the duodenum). In tissues:

1. **Galactokinase** phosphorylates galactose → **galactose 1-phosphate** (trapping it).
2. **Galactose-1-phosphate uridyltransferase** + an **epimerase** convert it to **glucose 1-phosphate** (the link into glycolysis/glycogen).

*(Epimerases interconvert sugar **epimers** — diastereomers differing at exactly one chiral carbon.)*

**Enzymes to remember:** **galactokinase** (traps) and **galactose-1-phosphate uridyltransferase** (links).

:::realworld
Deficiency of **galactokinase** or **galactose-1-phosphate uridyltransferase** causes **galactosemia**. **Cataracts** are characteristic: excess blood galactose is reduced to **galactitol** (a hydrophilic polyol) by **aldose reductase** in the lens, drawing in water → osmotic damage. Uridyltransferase deficiency is more severe — galactose 1-phosphate gets trapped intracellularly in liver, brain, and other tissues.
:::

#### Fructose metabolism

![Figure 9.5 — Fructose metabolism: fructokinase traps fructose, then aldolase B cleaves fructose 1-phosphate into glyceraldehyde and DHAP.](${fig(2, 1).src})

Fructose comes from honey, fruit, and the disaccharide **sucrose**, hydrolyzed by the duodenal brush-border enzyme **sucrase** into glucose + fructose. In the liver:

1. **Fructokinase** phosphorylates fructose → **fructose 1-phosphate** (trapping it).
2. **Aldolase B** cleaves fructose 1-phosphate into **glyceraldehyde** and **DHAP**.

**Enzymes to remember:** **fructokinase** (traps) and **aldolase B** (links).

:::keyconcept
Because DHAP and glyceraldehyde enter glycolysis **downstream of PFK-1** (the rate-limiting step), a **high-fructose drink** is a quick energy source in both aerobic and anaerobic cells — fructose metabolism is **least affected** by PFK-1 inhibition.
:::

:::realworld
**Primary lactose intolerance** is hereditary **lactase** deficiency; **secondary** intolerance follows GI damage to the lining where lactase resides. Undigested lactose is fermented by bacteria into **$\\text{CH}_4$, $\\text{H}_2$, and organic acids**; the osmotically active acids draw water into the lumen → bloating, cramps, and watery diarrhea.
:::
`
    },

    /* ────────────────────── 9.4 Pyruvate Dehydrogenase ────────────────────── */
    {
      id: 's4', num: '9.4', title: 'Pyruvate Dehydrogenase',
      goals: [
        'Recall the reactants and products of the pyruvate dehydrogenase complex',
        'Describe the relationship between acetyl-CoA levels and PDH activity'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 9.6 — The pyruvate dehydrogenase complex irreversibly converts pyruvate to acetyl-CoA, linking glycolysis to the citric acid cycle.' }],
      recap: `
- **PDH complex**: pyruvate + $\\text{NAD}^+$ + CoA $\\rightarrow$ **acetyl-CoA** + NADH + $\\text{CO}_2$. **Irreversible** — acetyl-CoA cannot go back to glucose.
- Requires **5 cofactors**: **thiamine pyrophosphate, lipoic acid, CoA, FAD, $\\text{NAD}^+$**.
- **Inhibited by its product, acetyl-CoA**; **activated by insulin** in the liver (not hormone-responsive in the nervous system).
- Pyruvate has **3 fates**: → acetyl-CoA (PDH), → lactate (LDH), → oxaloacetate (pyruvate carboxylase).
`,
      detail: `
**Pyruvate** from aerobic glycolysis enters the **mitochondria**, where the **pyruvate dehydrogenase complex (PDH)** converts it to **acetyl-CoA** for the citric acid cycle (if ATP is needed) or for fatty acid synthesis (if ATP is plentiful). The reaction is **irreversible** — it **cannot** regenerate pyruvate or glucose from acetyl-CoA.

#### The reaction and its cofactors
PDH is actually a **complex of enzymes** running several reactions in succession (detailed in *MCAT Biochemistry Review* Ch. 10).

| | Components |
|---|---|
| **Reactants** | **Pyruvate**, **$\\text{NAD}^+$**, **CoA** |
| **Products** | **Acetyl-CoA**, **NADH**, **$\\text{CO}_2$** |
| **Cofactors / coenzymes** | **Thiamine pyrophosphate**, **lipoic acid**, **CoA**, **FAD**, **$\\text{NAD}^+$** |

Insufficient amounts of any cofactor cause metabolic derangements.

#### Regulation
- **Inhibited by its product, acetyl-CoA.**
- **Activated by insulin** in the **liver** (well-fed signal → burn glucose *and* shift toward fatty acid synthesis from citrate); **not hormone-responsive** in the nervous system.

PDH must be considered alongside **pyruvate carboxylase** (the other mitochondrial pyruvate-using enzyme). A buildup of **acetyl-CoA** (e.g., during **β-oxidation**) shifts metabolism: pyruvate is diverted **away** from acetyl-CoA and **toward oxaloacetate** for **gluconeogenesis**.

:::keyconcept
**The three fates of pyruvate:** → **acetyl-CoA** (PDH, for the citric acid cycle) · → **lactate** (lactate dehydrogenase, fermentation) · → **oxaloacetate** (pyruvate carboxylase, gluconeogenesis). High **acetyl-CoA** pushes pyruvate toward **oxaloacetate**.
:::

:::realworld
**Thiamine (vitamin B1) deficiency** impairs PDH → **beriberi** (heart failure or nerve damage) and **Wernicke–Korsakoff syndrome** (ataxia, ophthalmoplegia, confusion, memory loss). Giving glucose to a thiamine-deficient person (e.g., an alcoholic) can trigger **severe lactic acidosis** because pyruvate can't become acetyl-CoA — so **thiamine must be given before glucose**.
:::
`
    },

    /* ──────────────── 9.5 Glycogenesis and Glycogenolysis ──────────────── */
    {
      id: 's5', num: '9.5', title: 'Glycogenesis and Glycogenolysis',
      goals: [
        'Recall the key enzymes, reactants, and products in glycogenesis and glycogenolysis',
        'Describe the features of glycogen storage diseases',
        'Recognize the structural features of glycogen and its major glycosidic links'
      ],
      images: [{ src: fig(4, 2).src, alt: fig(4, 2).alt, caption: 'Figure 9.9 — Glycogen metabolism: glycogenesis (synthase + branching enzyme) and glycogenolysis (phosphorylase + debranching enzyme) share a mutase interconverting G1P and G6P.' }],
      recap: `
- **Glycogen** = branched glucose polymer on a **glycogenin** core; **α-1,4** links in chains, **α-1,6** links at branches.
- **Glycogenesis:** **glycogen synthase** (rate-limiting; makes **α-1,4** bonds; +insulin/G6P) and **branching enzyme** (makes **α-1,6** branches).
- **Glycogenolysis:** **glycogen phosphorylase** (rate-limiting; breaks **α-1,4** using $\\text{P}_i$) and **debranching enzyme** (breaks **α-1,6**).
- **Liver** glycogen → maintains **blood glucose**; **muscle** glycogen → fuels the muscle itself (no glucose-6-phosphatase).
- Glucose units are activated as **UDP-glucose** before addition.
`,
      detail: `
**Glycogen** is the **branched, storable polymer of glucose**, made/degraded mainly in **liver** and **skeletal muscle**. It is stored in the cytoplasm as **granules**: a central protein core with polyglucose chains radiating outward.

![Figure 9.7 — A glycogen granule: a glycogenin core with branched glucose chains; branching keeps glucose density highest at the periphery for rapid release.](${fig(4, 0).src})

- **Unbranched** chains → highest glucose density near the **core**.
- **Branched** chains → highest density at the **periphery** → faster glucose release on demand.

:::keyconcept
**Liver vs. muscle glycogen serve different roles.** **Liver** glycogen is broken down to maintain **blood glucose** between meals. **Muscle** glycogen supplies glucose **to the muscle itself** during exercise (muscle lacks glucose-6-phosphatase, so it can't export glucose).
:::

*(Plants store glucose in long α-linked chains called **starch** — Figure 9.8.)*

#### Glycogenesis (synthesis)
Begins on the core protein **glycogenin**. Glucose units are activated before addition:

1. **Glucose 6-phosphate** $\\rightarrow$ **glucose 1-phosphate** (via a **mutase**).
2. Glucose 1-phosphate + **UTP** $\\rightarrow$ **UDP-glucose** + **$\\text{PP}_i$** (activation).
3. **Glycogen synthase** adds the UDP-glucose to the chain.

| Enzyme | Bond formed | Action | Regulation |
|---|---|---|---|
| **Glycogen synthase** | **α-1,4** | **Rate-limiting**; extends linear chains | **Activated** by **G6P + insulin**; **inhibited** by **epinephrine/glucagon** (phosphorylation cascade) |
| **Branching enzyme** *(glycosyl α-1,4:α-1,6 transferase)* | **α-1,6** | Cleaves a block of oligoglucose from an α-1,4 chain and reattaches it as a **branch** | — |

:::mnemonic
**α-1,4 vs. α-1,6:** α-**1,4** keeps the same branch moving **"4ward"**; α-**1,6** (one-six) **"puts a branch in the mix."**
:::

#### Glycogenolysis (breakdown)
The rate-limiting enzyme is **glycogen phosphorylase**. Unlike a hydrolase, a **phosphorylase** cleaves bonds using **inorganic phosphate** instead of water. The **glucose 1-phosphate** released is converted to **glucose 6-phosphate** by the same **mutase** used in synthesis.

| Enzyme | Bond broken | Action | Regulation |
|---|---|---|---|
| **Glycogen phosphorylase** | **α-1,4** | Releases **glucose 1-phosphate** from chain ends; **cannot** break α-1,6, so it stops near branch points | **Liver:** activated by **glucagon**. **Muscle:** activated by **AMP + epinephrine**; **inhibited by ATP** |
| **Debranching enzyme** *(α-1,4:α-1,4 transferase + α-1,6 glucosidase)* | **α-1,6** (and moves α-1,4) | Two steps: moves an oligoglucose block to a chain end (new α-1,4 bond), then hydrolyzes the **α-1,6** branch point → **free glucose** | — |

![Figure 9.11 — Debranching enzyme: a transferase moves the oligoglucose block, then α-1,6 glucosidase releases the branch-point residue as free glucose.](${fig(4, 4).src})

The branch-point residue is the **only free glucose produced directly** in glycogenolysis. All other glucose leaves as **glucose 1-phosphate** → **glucose 6-phosphate** → (in liver) free glucose via **glucose-6-phosphatase**.

:::keyconcept
**Debranching enzyme = two activities:** an **α-1,4:α-1,4 transferase** that relocates the chain end to the branch point, and an **α-1,6 glucosidase** that removes the single branch-point glucose.
:::

:::expertise
Under Test Day pressure these four words blur together. Slow down and distinguish **glycolysis** (glucose → pyruvate), **glycogenesis** (build glycogen), **glycogenolysis** (break glycogen), and **gluconeogenesis** (make new glucose).
:::

#### Glycogen storage diseases
Genetic enzyme defects cause **glycogen storage diseases**, all marked by abnormal accumulation or lack of glycogen. Severity depends on **which enzyme**, **how much activity is lost**, and **which isoform** (liver vs. muscle) is affected.

:::realworld
The most common is **von Gierke's disease** — a defect in **glucose-6-phosphatase**. Because that enzyme is also the **last step of gluconeogenesis**, both pathways fail → severe fasting **hypoglycemia** requiring continuous carbohydrate feeding. Glucose 6-phosphate accumulates → hepatomegaly and liver damage.
:::
`
    },

    /* ─────────────────────────── 9.6 Gluconeogenesis ─────────────────────────── */
    {
      id: 's6', num: '9.6', title: 'Gluconeogenesis',
      goals: [
        'Recognize the conditions that favor gluconeogenesis',
        'Recall the four enzymes unique to gluconeogenesis and relate them to the opposite glycolytic enzymes',
        'Detail the regulatory role of acetyl-CoA in pyruvate metabolism'
      ],
      images: [{ src: fig(5, 0).src, alt: fig(5, 0).alt, caption: 'Figure 9.12 — Gluconeogenesis: largely the reverse of glycolysis, with four unique enzymes bypassing the three irreversible glycolytic steps.' }],
      recap: `
- **Gluconeogenesis** makes new glucose in the **liver** (small renal contribution); promoted by **glucagon/epinephrine/cortisol**, inhibited by **insulin**.
- It is mostly **reverse glycolysis** but uses **4 unique enzymes** to bypass the **3 irreversible** glycolytic steps.
- **Pyruvate carboxylase** (+acetyl-CoA) + **PEPCK** (+glucagon/cortisol) bypass **pyruvate kinase**.
- **Fructose-1,6-bisphosphatase** (rate-limiting; +ATP, −AMP/F2,6-BP) bypasses **PFK-1**.
- **Glucose-6-phosphatase** (liver ER only) bypasses **glucokinase/hexokinase**.
- Substrates: **lactate, glucogenic amino acids, glycerol 3-phosphate**; requires **β-oxidation** for energy and acetyl-CoA.
`,
      detail: `
The liver maintains blood glucose during fasting via **glycogenolysis** (early) then **gluconeogenesis** (later). Glycogen reserves fall sharply in the first **12 hours**; after **24 hours**, gluconeogenesis is the **sole** glucose source. The kidney contributes a small amount. These pathways are **promoted by glucagon and epinephrine** and **inhibited by insulin**.

:::keyconcept
**Insulin lowers** blood sugar; the **counterregulatory hormones** — **glucagon, epinephrine, cortisol, growth hormone** — **raise** it by stimulating **glycogenolysis** and **gluconeogenesis**.
:::

#### Substrates and their entry enzymes
| Substrate | Source | Converted to glycolytic intermediate by |
|---|---|---|
| **Lactate** | Anaerobic glycolysis (e.g., RBCs, muscle) | **Lactate dehydrogenase** → pyruvate |
| **Glucogenic amino acids** (all except **leucine** and **lysine**) | Muscle protein; **alanine** is major | **Alanine aminotransferase** → pyruvate |
| **Glycerol 3-phosphate** | Triacylglycerols in adipose | **Glycerol-3-phosphate dehydrogenase** → DHAP |

Amino acids are **glucogenic**, **ketogenic**, or both; ketogenic ones make ketone bodies instead. **Fatty acids generally cannot** become glucose (they yield only acetyl-CoA); the lone exception is **odd-chain fatty acids**, which yield a little **propionyl-CoA** (glucogenic). Dietary **fructose** and **galactose** can also become glucose in the liver.

#### The four unique enzymes — bypassing glycolysis's irreversible steps

| Gluconeogenic enzyme | Reaction | **Replaces (bypasses)** | Regulation / location |
|---|---|---|---|
| **Pyruvate carboxylase** | pyruvate $\\rightarrow$ **oxaloacetate** | *(part 1 of bypassing* **pyruvate kinase***)* | **Mitochondrial**; **activated by acetyl-CoA** (from β-oxidation) |
| **PEP carboxykinase (PEPCK)** | OAA $\\rightarrow$ **PEP** (uses **GTP**) | *(part 2 of bypassing* **pyruvate kinase***)* | **Cytoplasmic**; **induced by glucagon and cortisol** |
| **Fructose-1,6-bisphosphatase** | F1,6-BP $\\rightarrow$ **F6P** | **PFK-1** | **Cytoplasmic**; **rate-limiting**; **activated by ATP**, **inhibited by AMP + F2,6-BP** |
| **Glucose-6-phosphatase** | G6P $\\rightarrow$ **free glucose** | **Glucokinase / hexokinase** | **Liver ER lumen only** (absent in muscle) |

:::keyconcept
Because glycolysis has **three irreversible steps** (**hexokinase/glucokinase, PFK-1, pyruvate kinase**), gluconeogenesis needs **different enzymes** at those points to run pyruvate back to glucose. **Phosphatases oppose kinases.**
:::

##### Pyruvate carboxylase and the OAA shuttle
**Oxaloacetate** is a citric acid cycle intermediate and **cannot leave the mitochondrion** directly — it is reduced to **malate**, exported via the **malate–aspartate shuttle**, then re-oxidized to OAA in the cytoplasm. **Acetyl-CoA** both **activates pyruvate carboxylase** and **inhibits PDH** — the same signal that says "the cell is energetically satisfied; stop burning glucose and start making it." Critically, this acetyl-CoA comes from **fatty acid β-oxidation**, not glycolysis.

##### Fructose-1,6-bisphosphatase and F2,6-BP
This is the **rate-limiting** control point, reversing PFK-1. **F2,6-BP** (made by **PFK-2**) marks satisfactory liver energy and reciprocally controls **both** glycolysis and gluconeogenesis: **glucagon → ↓F2,6-BP → stimulates gluconeogenesis**; **insulin → ↑F2,6-BP → inhibits gluconeogenesis**.

:::keyconcept
**Gluconeogenesis is inextricably linked to fatty acid oxidation.** It needs **acetyl-CoA** (to inhibit PDH and activate pyruvate carboxylase) and **ATP** — both from **β-oxidation**. The acetyl-CoA can't come from glycolysis, since that would just burn the glucose being made. Hepatic gluconeogenesis is **not** an energy source for the liver itself.
:::

:::realworld
**Cori cycle:** RBCs (no mitochondria) convert glucose → **lactate** to regenerate $\\text{NAD}^+$. Acidic lactate travels to the **liver**, which converts it back to **pyruvate** → **glucose** for the RBCs to reuse.
:::
`
    },

    /* ─────────────────── 9.7 The Pentose Phosphate Pathway ─────────────────── */
    {
      id: 's7', num: '9.7', title: 'The Pentose Phosphate Pathway',
      goals: [
        'Identify the two major products of the pentose phosphate pathway',
        'Explain the three primary functions of NADPH in cellular respiration'
      ],
      images: [{ src: fig(6, 0).src, alt: fig(6, 0).alt, caption: 'Figure 9.13 — The pentose phosphate pathway: an irreversible oxidative phase (NADPH) and a reversible nonoxidative phase (sugars for biosynthesis).' }],
      recap: `
- **PPP** (a.k.a. **HMP shunt**) runs in the **cytoplasm of all cells**; two products: **NADPH** and **ribose 5-phosphate**.
- **Oxidative phase**: **irreversible**, makes **NADPH**, rate-limited by **glucose-6-phosphate dehydrogenase (G6PD)**; ends at ribulose 5-phosphate.
- **G6PD** is **+insulin** and **+$\\text{NADP}^+$**, **−NADPH** (product inhibition).
- **Nonoxidative phase**: **reversible** (**transketolase**, **transaldolase**); makes **ribose 5-P** and interconverts with **F6P / G3P** (links to glycolysis).
- **NADPH** ≠ **NADH**: NADPH is a **reducing agent** for **biosynthesis, bactericidal bleach, and glutathione** (antioxidant defense).
`,
      detail: `
The **pentose phosphate pathway (PPP)**, also called the **hexose monophosphate (HMP) shunt**, runs in the **cytoplasm of all cells** and serves two major functions: producing **NADPH** and supplying **ribose 5-phosphate** for nucleotide synthesis.

#### Two phases

| Phase | Reversibility | Key enzyme(s) | Products |
|---|---|---|---|
| **Oxidative** (G6P → ribulose 5-P) | **Irreversible** | **Glucose-6-phosphate dehydrogenase (G6PD)** — rate-limiting | **NADPH** |
| **Nonoxidative** (ribulose 5-P → sugar pool) | **Reversible** | **Transketolase**, **transaldolase** | **Ribose 5-phosphate** (+ F6P, G3P) |

- **Oxidative phase:** begins with **glucose 6-phosphate**, ends with **ribulose 5-phosphate**, and is **irreversible**. It produces **NADPH** via **G6PD**.
- **Nonoxidative phase:** begins with ribulose 5-phosphate and is a **reversible** series producing an equilibrated **sugar pool** for biosynthesis, including **ribose 5-phosphate**. Because **fructose 6-phosphate** and **glyceraldehyde 3-phosphate** are among the products, intermediates can feed **back into glycolysis** — and pentoses can be made from glycolytic intermediates **without** the G6PD reaction.

#### Regulation of G6PD
- **Induced by insulin** (abundant sugar is shunted into fuel utilization *and* storage pathways: glycolysis, aerobic respiration, fatty acid synthesis, glycogenesis, and the PPP).
- **Activated by its reactant $\\text{NADP}^+$**; **inhibited by its product NADPH**.

#### NADPH vs. NADH — don't confuse them

| | **$\\text{NAD}^+$ / NADH** | **NADPH** |
|---|---|---|
| Role | **Oxidizing agent**; high-energy **electron acceptor** | **Reducing agent**; **electron donor** |
| Fate | NADH feeds the **electron transport chain** → ATP | Drives **biosynthesis** and reduction reactions |

:::keyconcept
**NADPH and NADH are not the same.** **$\\text{NAD}^+$** is an **energy carrier** (catabolism → ATP). **NADPH** powers **biosynthesis**, the **immune system**, and **antioxidant defense**.
:::

#### The three functions of NADPH
1. **Biosynthesis** — mainly **fatty acids and cholesterol**.
2. **Bactericidal "bleach"** — in certain white blood cells, contributing to microbial killing.
3. **Reduced glutathione** — maintains the body's natural **antioxidant** against **reactive oxygen species**.

This third role protects cells from **free-radical** damage. **Hydrogen peroxide ($\\text{H}_2\\text{O}_2$)**, a byproduct of aerobic metabolism, can split into **hydroxide radicals ($\\text{OH}\\bullet$)**; oxygen-rich RBCs can form the **superoxide radical ($\\text{O}_2{}^{\\bullet-}$)**. Radicals attack membrane **phospholipids** (→ lysis) and **DNA** (→ cancer). **Glutathione**, kept reduced by NADPH, reverses radical formation before damage occurs.

![Figure 9.13 — The PPP oxidative phase generates NADPH; ribulose 5-phosphate is isomerized to ribose 5-phosphate for nucleotide synthesis.](${fig(6, 0).src})

:::bridge
The **ribulose 5-phosphate** made here is isomerized to **ribose 5-phosphate**, the **backbone of nucleic acids**. Coupled to a nitrogenous base it forms a **nucleotide** for RNA. Review transcription (Ch. 7) and DNA synthesis (Ch. 6) of *MCAT Biochemistry Review*.
:::

:::realworld
**G6PD deficiency** is **X-linked** and the **most common inherited enzyme defect** worldwide. With less NADPH, glutathione can't be kept reduced → susceptibility to **oxidative stress**, especially in **RBCs**. Oxidizing triggers — certain **antibiotics**, **antimalarials**, infections, or **fava beans** (hence **"favism"**) — cause **hemolysis** (Heinz bodies = oxidized hemoglobin). The defect likely persists because it confers some **malaria resistance**.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Glucose Transport',
        points: [
          '**GLUT 2** — liver (glucose storage) + pancreatic β-islet cells (glucose sensor); **high $K_m$**.',
          '**GLUT 4** — adipose + muscle; **stimulated by insulin** (exocytosis of preformed transporters); **low $K_m$**; the only insulin-responsive transporter.'
        ]
      },
      {
        section: 'Glycolysis',
        points: [
          'Occurs in the **cytoplasm of all cells**, needs **no oxygen**, and yields **net 2 ATP per glucose** (plus 2 NADH).',
          '**Glucokinase / hexokinase** → glucose 6-phosphate (glucokinase = liver/pancreas, insulin-responsive; hexokinase = peripheral, inhibited by G6P).',
          '**PFK-1** phosphorylates F6P → F1,6-BP — the **rate-limiting step**; **activated by AMP + F2,6-BP**, **inhibited by ATP + citrate**.',
          '**PFK-2** makes the **F2,6-BP** that activates PFK-1; **activated by insulin**, **inhibited by glucagon**.',
          '**Glyceraldehyde-3-phosphate dehydrogenase** produces **NADH**; **3-phosphoglycerate kinase** and **pyruvate kinase** each do **substrate-level phosphorylation**.',
          'The **irreversible** enzymes are **glucokinase/hexokinase, PFK-1, and pyruvate kinase**.',
          'NADH is oxidized by the **ETC** when $\\text{O}_2$ is present; otherwise by **lactate dehydrogenase** (RBCs, exercising muscle, hypoxia).'
        ]
      },
      {
        section: 'Other Monosaccharides',
        points: [
          '**Galactose** (from milk lactose): trapped by **galactokinase**, converted to glucose 1-phosphate by **galactose-1-phosphate uridyltransferase** + an epimerase.',
          '**Fructose** (from sucrose, honey, fruit): trapped by **fructokinase**, then cleaved by **aldolase B** into glyceraldehyde + DHAP (entering glycolysis below PFK-1).'
        ]
      },
      {
        section: 'Pyruvate Dehydrogenase',
        points: [
          '**PDH complex** converts **pyruvate → acetyl-CoA** (reactants pyruvate, $\\text{NAD}^+$, CoA → products acetyl-CoA, NADH, $\\text{CO}_2$).',
          '**Stimulated by insulin**, **inhibited by acetyl-CoA**; the reaction is irreversible.'
        ]
      },
      {
        section: 'Glycogenesis and Glycogenolysis',
        points: [
          '**Glycogenesis:** **glycogen synthase** makes **α-1,4** links (activated by insulin in liver + muscle); **branching enzyme** adds **α-1,6** branches.',
          '**Glycogenolysis:** **glycogen phosphorylase** breaks **α-1,4** links → glucose 1-phosphate (liver: +glucagon; muscle: +epinephrine/AMP); **debranching enzyme** handles the **α-1,6** branch point, releasing free glucose.'
        ]
      },
      {
        section: 'Gluconeogenesis',
        points: [
          'Occurs in **cytoplasm + mitochondria**, predominantly **liver** (small kidney contribution); mostly **reverse glycolysis**.',
          '**Pyruvate carboxylase** (pyruvate → OAA; +acetyl-CoA from β-oxidation) + **PEPCK** (OAA → PEP; +glucagon/cortisol) bypass **pyruvate kinase**.',
          '**Fructose-1,6-bisphosphatase** (F1,6-BP → F6P) is the **rate-limiting step**, bypassing PFK-1; **+ATP / glucagon**, **−AMP / insulin** (via F2,6-BP).',
          '**Glucose-6-phosphatase** (G6P → free glucose) is in the **liver ER only** and bypasses glucokinase.'
        ]
      },
      {
        section: 'The Pentose Phosphate Pathway',
        points: [
          'The **PPP / HMP shunt** runs in the **cytoplasm of most cells**, generating **NADPH** and **sugars for biosynthesis** (from ribulose 5-phosphate).',
          'Rate-limiting enzyme **glucose-6-phosphate dehydrogenase** is **activated by $\\text{NADP}^+$ and insulin**, **inhibited by NADPH**.'
        ]
      }
    ],
    mnemonics: [
      '**Irreversible steps of glycolysis — "How Glycolysis Pushes Forward the Process: Kinases":** **H**exokinase · **G**lucokinase · **P**FK-1 · **P**yruvate kinase. All are kinases and all are bypassed in gluconeogenesis.',
      '**PFK-1 is the rate-limiting / committed step of glycolysis.** Energy plenty (ATP, citrate) turns it OFF; energy need (AMP, F2,6-BP) turns it ON.',
      '**Six rate-limiting enzymes:** glycolysis = **PFK-1** · fermentation = **lactate dehydrogenase** · glycogenesis = **glycogen synthase** · glycogenolysis = **glycogen phosphorylase** · gluconeogenesis = **fructose-1,6-bisphosphatase** · PPP = **glucose-6-phosphate dehydrogenase**.',
      '**Glycosidic links:** α-**1,4** keeps a chain moving **"4ward"**; α-**1,6** (one-six) **"puts a branch in the mix."**',
      '**"Phosphatases oppose kinases."** Gluconeogenesis swaps each glycolytic kinase for a phosphatase/carboxylase: PFK-1 → **F-1,6-bisphosphatase**; gluco/hexokinase → **glucose-6-phosphatase**; pyruvate kinase → **pyruvate carboxylase + PEPCK**.',
      '**"Exercise is the right thing to do."** Right-shift of the $\\text{O}_2$ curve (Bohr): high 2,3-BPG, low pH, high $[\\text{H}^+]$, high $p\\text{CO}_2$.',
      '**GLUT 4 = the "4"-tunate insulin transporter** (muscle + fat, low $K_m$, insulin-responsive). **GLUT 2** = liver/pancreas storage + sensor (high $K_m$).',
      '**NADPH ≠ NADH:** **NAD**H = catab**olic** energy carrier (→ ETC); **NADP**H = anab**olic P**roduction (biosynthesis, bleach, glutathione).'
    ],
    keyConcepts: [
      '**The three fates of pyruvate** hinge on acetyl-CoA: → acetyl-CoA (PDH), → lactate (LDH), → oxaloacetate (pyruvate carboxylase). High acetyl-CoA from β-oxidation **inhibits PDH** and **activates pyruvate carboxylase**, shifting pyruvate toward gluconeogenesis.',
      '**Gluconeogenesis depends on fatty acid β-oxidation** for both ATP and the acetyl-CoA that flips the regulatory switches — hepatic gluconeogenesis is not an energy source for the liver itself.',
      '**Net glycolysis yield = 2 ATP + 2 NADH per glucose** (4 ATP made − 2 invested); in RBCs and other anaerobic settings this 2 ATP is the only ATP, with NAD$^+$ regenerated by lactate fermentation.',
      '**Liver vs. muscle glycogen:** liver exports glucose (has glucose-6-phosphatase) to maintain blood sugar; muscle keeps glucose for itself (no glucose-6-phosphatase).',
      '**F2,6-BP is the reciprocal switch** controlling both glycolysis and gluconeogenesis in the liver: insulin (via PFK-2) raises it to favor glycolysis; glucagon lowers it to favor gluconeogenesis.'
    ],
    equations: [
      { name: 'Net glycolysis', tex: '\\text{glucose} + 2\\,\\text{NAD}^+ + 2\\,\\text{ADP} + 2\\,\\text{P}_i \\rightarrow 2\\,\\text{pyruvate} + 2\\,\\text{NADH} + 2\\,\\text{ATP} + 2\\,\\text{H}_2\\text{O}', note: 'Net 2 ATP and 2 NADH per glucose (4 ATP generated, 2 invested in priming).' },
      { name: 'Lactate fermentation', tex: '\\text{pyruvate} + \\text{NADH} \\rightarrow \\text{lactate} + \\text{NAD}^+', note: 'Lactate dehydrogenase regenerates NAD⁺ so glycolysis continues without O₂; no net carbon change (3C → 3C).' },
      { name: 'Pyruvate dehydrogenase', tex: '\\text{pyruvate} + \\text{NAD}^+ + \\text{CoA} \\rightarrow \\text{acetyl-CoA} + \\text{NADH} + \\text{CO}_2', note: 'Irreversible link from glycolysis to the citric acid cycle; inhibited by acetyl-CoA.' },
      { name: 'Michaelis–Menten ($K_m$)', tex: 'V = \\dfrac{V_{max}[S]}{K_m + [S]}', note: 'Lower Km = higher affinity. GLUT 2 / glucokinase have high Km (proportional uptake); GLUT 4 / hexokinase have low Km (saturated near normal glucose).' }
    ]
  },

  questions: raw.questions
};
