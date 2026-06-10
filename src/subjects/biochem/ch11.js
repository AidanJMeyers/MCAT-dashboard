// Biochemistry Chapter 11 — Lipid and Amino Acid Metabolism.
// Authored to the rich-formatting quality bar (matches bio/ch01.js).
// Figures and questions are reused from ch11.json; the recap/detail markdown,
// goals, tables, callouts, and key review are authored here from scratch_biochem/ch11.md.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 11,
  title: 'Lipid and Amino Acid Metabolism',
  subtitle: 'Lipid digestion & absorption · lipid mobilization · lipid transport · cholesterol metabolism · fatty acids & triacylglycerols · ketone bodies · protein catabolism',

  blocks: [
    /* ─────────────── 11.1 Lipid Digestion and Absorption ─────────────── */
    {
      id: 's1', num: '11.1', title: 'Lipid Digestion and Absorption',
      goals: [
        'Differentiate between lipid digestion in the stomach and lipid digestion in the intestines',
        'Identify the methods by which lipids can enter circulation',
        'Describe the structure of a micelle'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 11.1 — Digestion and absorption of dietary lipids: emulsification by bile, micelle formation, brush-border uptake, and packaging into chylomicrons.' }],
      recap: `
- **Lipid digestion is minimal in the mouth and stomach** (mechanical only); chemical digestion happens in the **small intestine**.
- **Bile** (from liver, stored in gallbladder) **emulsifies** fat → ↑ surface area; **pancreatic lipase, colipase, and cholesterol esterase** hydrolyze it to **2-monoacylglycerol, free fatty acids, and cholesterol**.
- **Micelles** = amphipathic clusters (lipid-soluble core, water-soluble surface) that ferry digested lipids to the **brush border**.
- **Long-chain** products → re-esterified → packaged into **chylomicrons** → **lymphatics** (lacteals). **Short-chain** fatty acids → diffuse **directly into blood**.
`,
      detail: `
#### Dietary lipids and where digestion happens
**Dietary fat** is mostly **triacylglycerols**, plus **cholesterol, cholesteryl esters, phospholipids, and free fatty acids**.

- **Mouth & stomach** — only **mechanical** (physical) digestion; lipids reach the small intestine essentially **intact**.
- **Duodenum** — chemical digestion begins with **emulsification**: mixing two normally immiscible liquids (fat + water). Forming an **emulsion** increases lipid **surface area** for greater enzymatic access.

:::bridge
Digestion and absorption across the small intestine and colon are covered in *MCAT Biology Review*, Ch. 9. Build a single schema for how **all** macronutrients (carbs, proteins, fats) are absorbed.
:::

#### Bile and pancreatic enzymes
| Player | Source | Role |
|---|---|---|
| **Bile** (bile salts, pigments, cholesterol) | Secreted by **liver**, stored in **gallbladder** | **Emulsifies** lipids; bile salts help build **micelles** |
| **Pancreatic lipase** | Pancreas | Hydrolyzes triacylglycerols |
| **Colipase** | Pancreas | Anchors lipase to the lipid droplet |
| **Cholesterol esterase** | Pancreas | Frees cholesterol from cholesteryl esters |

Together these enzymes hydrolyze lipids to **2-monoacylglycerol, free fatty acids, and cholesterol**.

#### Micelle formation
Free fatty acids, cholesterol, **2-monoacylglycerol**, and **bile salts** assemble into **micelles** — clusters of **amphipathic** lipids.

- Essentially **water-soluble spheres with a lipid-soluble interior**: hydrophobic tails point inward, charged/polar heads face the aqueous lumen.
- Micelles carry lipid-soluble material from the **duodenum** to the end of the **ileum**.
- At the end of the **ileum**, **bile salts are actively reabsorbed and recycled** (enterohepatic circulation); leftover fat passes to the colon and into the stool.

:::keyconcept
A **micelle** is a single-layer sphere of amphipathic molecules with hydrophobic ends oriented toward the center and charged ends toward the aqueous environment — it collects lipids in its hydrophobic core. (Contrast with a bilayer, which forms a membrane or liposome.)
:::

#### Absorption — two routes into circulation
Micelles diffuse to the **brush border** of intestinal mucosal cells, where the lipids are absorbed. What happens next depends on chain length:

| Lipid | Processing | Entry into circulation |
|---|---|---|
| **Long-chain** fatty acids, monoacylglycerol, cholesterol | Re-esterified to **triacylglycerols & cholesteryl esters**; packaged with apoproteins + fat-soluble vitamins into **chylomicrons** | Exit via **lacteals** → **lymphatic system** → **thoracic duct** → **left subclavian vein** |
| **Short-chain** fatty acids (more water-soluble) | None needed | **Simple diffusion directly into the bloodstream** |

:::mnemonic
**"Long goes Lymph."** **L**ong-chain fats ride **chylomicrons** into the **L**ymphatics; short-chain fatty acids slip straight into the blood. So **not all lipids enter via the lymphatic system** — a classic MCAT trap.
:::
`
    },

    /* ───────────────────── 11.2 Lipid Mobilization ───────────────────── */
    {
      id: 's2', num: '11.2', title: 'Lipid Mobilization',
      goals: [
        'Identify the conditions and hormones that promote lipid mobilization',
        'Predict the ratio of free fatty acids per glycerol molecule broken down via lipid mobilization'
      ],
      recap: `
- In the **postabsorptive (fasting) state**, **fatty acids are released from adipose** for fuel.
- A **fall in insulin** activates **hormone-sensitive lipase (HSL)**, which hydrolyzes triacylglycerols → fatty acids + glycerol. **Epinephrine and cortisol** also activate HSL.
- Each triacylglycerol → **3 free fatty acids : 1 glycerol** (a **3:1** ratio).
- **Glycerol** goes to the **liver** (glycolysis or gluconeogenesis); **lipoprotein lipase (LPL)** — not HSL — frees fatty acids from **chylomicrons and VLDL**.
`,
      detail: `
#### The postabsorptive state
At night (and during fasting), the body enters the **postabsorptive state**, burning **energy stores** rather than food. **Fatty acids are released from adipose tissue** and used for energy.

#### Hormonal control of HSL
Human adipose tissue does **not** respond directly to **glucagon**. Instead:

| Signal | Effect on **hormone-sensitive lipase (HSL)** |
|---|---|
| **↓ Insulin** (low blood sugar) | **Activates** HSL → mobilizes fat |
| **Epinephrine** | **Activates** HSL |
| **Cortisol** | **Activates** HSL |
| **Glucagon** | **No direct effect** on adipose HSL |

**HSL** hydrolyzes triacylglycerols, yielding **fatty acids and glycerol**.

![Figure 11.2 — Mobilization of triacylglycerols from adipose by HSL and metabolism of glycerol by the liver.](${fig(2, 0).src})

:::keyconcept
**HSL vs. LPL — don't mix them up.**
- **HSL** works **inside adipocytes** to mobilize stored fat.
- **LPL (lipoprotein lipase)** works on the **outside** of cells (capillary endothelium) to release free fatty acids from **chylomicrons and VLDL**.
:::

#### Stoichiometry: the 3:1 rule
A **triacylglycerol** is one **glycerol** backbone esterified to **three fatty acids**. Hydrolysis therefore releases:

$$\\text{1 triacylglycerol} \\rightarrow \\text{3 free fatty acids} + \\text{1 glycerol}$$

So the **free-fatty-acid-to-glycerol ratio is 3:1**. The released **glycerol** travels to the **liver** for **glycolysis or gluconeogenesis** (adipocytes lack the enzymes for gluconeogenesis).

:::realworld
A patient with diabetes who starts **insulin injections** will **↑ lipid storage and ↓ lipid mobilization** (insulin shuts off HSL) — expect **weight gain**.
:::

:::mnemonic
**"TAG = 3 tails + 1 glycerol."** Every triacylglyceride you break down spits out **three** fatty acids for every **one** glycerol — the 3:1 ratio is a favorite quick-calc question.
:::
`
    },

    /* ─────────────────────── 11.3 Lipid Transport ────────────────────── */
    {
      id: 's3', num: '11.3', title: 'Lipid Transport',
      goals: [
        'Describe the means of transport for free fatty acids in the blood',
        'Order lipoproteins according to percentage of protein and lipid transported',
        'Explain the relationship between the liver and the intestinal epithelium in relation to lipoproteins',
        'Recall the major structural components of a lipoprotein'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 11.3 — Lipoprotein structure: a hydrophobic core of triacylglycerols and cholesteryl esters wrapped in a phospholipid + apolipoprotein shell.' }],
      recap: `
- **Free fatty acids** travel in blood bound to **albumin**; **triacylglycerol & cholesterol** travel as **lipoproteins**.
- **Density rises as % protein rises**: **chylomicrons < VLDL < IDL < LDL < HDL** (least → most dense).
- **Chylomicrons & VLDL** mainly carry **triacylglycerols**; **LDL & HDL** mainly carry **cholesterol**; **IDL** is the transition.
- **LDL = "Lousy"** (delivers cholesterol to tissues; the bulk of measured cholesterol). **HDL = "Healthy"** (scavenges excess cholesterol back to the liver).
- Lipoproteins are made by the **liver and intestine**.
`,
      detail: `
#### How lipids ride through the blood
| Cargo | Carrier |
|---|---|
| **Free fatty acids** | Bound to **albumin** (a plasma carrier protein); a small fraction unbound |
| **Triacylglycerol & cholesterol** | Packaged as **lipoproteins** — aggregates of **apolipoproteins + lipids** |

**Lipoproteins** are named by **density**, which **increases in direct proportion to the % protein** in the particle (protein is denser than lipid).

#### The five lipoproteins (least → most dense)

| Lipoprotein | Density / % protein | Primary cargo | Function |
|---|---|---|---|
| **Chylomicrons** | Lowest density, **least** protein, highest fat | Triacylglycerol | Carry **dietary** TAG, cholesterol & cholesteryl esters from **intestine → tissues** |
| **VLDL** (very-low-density) | Slightly denser | Triacylglycerol | Carry TAG & fatty acids from **liver → tissues** |
| **IDL** (intermediate; VLDL remnant) | Intermediate | **Transition** TAG → cholesterol | Picks up cholesteryl esters from HDL → becomes **LDL**; some taken up by liver |
| **LDL** (low-density) | Denser | **Cholesterol** | **Delivers cholesterol to tissues**; the bulk of measured blood cholesterol |
| **HDL** (high-density) | **Most** dense, **most** protein | **Cholesterol** | **Reverse cholesterol transport** — scavenges excess cholesterol back to liver/steroidogenic tissue; donates apolipoproteins |

:::keyconcept
**Chylomicrons and VLDL primarily carry triacylglycerols; LDL and HDL primarily carry cholesterol.** **IDL** is the in-between particle — a transition state as the dominant lipid shifts from **triacylglycerol → cholesterol**.
:::

##### Chylomicrons
Highly soluble in lymph **and** blood; transport **dietary** triacylglycerols, cholesterol, and cholesteryl esters to tissues. Assembled in the **intestinal lining** as a **nascent chylomicron** (lipids + apolipoproteins).

##### VLDL (very-low-density lipoprotein)
Metabolism mirrors chylomicrons, but VLDL is **produced and assembled in the liver**. Main job: transport **triacylglycerols** to tissues. Its fatty acids come from **excess glucose** or **chylomicron remnants**.

##### IDL (intermediate-density lipoprotein)
Once TAG is stripped from VLDL, the remnant is a **VLDL remnant / IDL**.

- Some **IDL** is reabsorbed by the **liver** (via surface apolipoproteins).
- Some picks up **cholesteryl esters from HDL** to become **LDL**.
- IDL thus bridges **TAG transport** (chylomicrons, VLDL) and **cholesterol transport** (LDL, HDL).

![Figure 11.4 — Lipid transport in lipoproteins: TGL = triacylglycerol, CE = cholesteryl esters, chol = cholesterol; VLDL → IDL → LDL as cholesterol replaces TAG.](${fig(2, 2).src})

##### LDL (low-density lipoprotein) — "bad" cholesterol
Although both LDL and HDL are cholesterol particles, **most measured blood cholesterol is on LDL**. LDL **delivers cholesterol to tissues** for membranes, **bile acid** synthesis (in liver), and **steroidogenesis**.

##### HDL (high-density lipoprotein) — "good" cholesterol
Synthesized in the **liver and intestines** as dense, protein-rich particles. HDL carries apolipoproteins for **cholesterol recovery** — cleaning **excess cholesterol from blood vessels** for excretion — delivers some cholesterol to steroidogenic tissue, and **transfers apolipoproteins** to other lipoproteins.

:::realworld
When a physician orders a "cholesterol" blood test, they actually measure **LDL and HDL**. **HDL is "good" cholesterol** because it removes excess cholesterol from vessels — so on a **lipid panel, doctors want HDL *above* a minimum** (not below a maximum like LDL).
:::

:::mnemonic
**LDL = "Lousy / Lethal"** (Lands cholesterol in your arteries) · **HDL = "Healthy / Happy"** (Hauls it back to the liver). Higher protein → higher density → "healthier" → **HDL** is densest.
:::

#### Apolipoproteins
**Apolipoproteins (apoproteins)** are the **protein component** of lipoproteins — **receptor molecules** involved in signaling. Specific functions are unlikely to be tested, but illustrate the range:

| Apolipoprotein | Function |
|---|---|
| **apoA-I** | Activates **LCAT** (catalyzes cholesterol esterification) |
| **apoB-48** | Mediates **chylomicron** secretion |
| **apoB-100** | Permits **LDL** uptake by the liver |
| **apoC-II** | Activates **lipoprotein lipase (LPL)** |
| **apoE** | Permits uptake of **chylomicron remnants and VLDL** by the liver |

:::keyconcept
**Without apolipoproteins, lipoproteins are stranded.** They could not be **secreted**, could not be **endocytosed**, and could not **transfer lipids / clear vessel cholesterol** — apolipoproteins control essentially every interaction with the environment.
:::

##### Protein-content ordering (high-yield)
$$\\text{HDL} > \\text{LDL} > \\text{IDL} > \\text{VLDL} > \\text{chylomicrons}$$

The **triacylglycerol** transporters are **VLDL and chylomicrons** (lowest protein, lowest density).
`
    },

    /* ─────────────────── 11.4 Cholesterol Metabolism ─────────────────── */
    {
      id: 's4', num: '11.4', title: 'Cholesterol Metabolism',
      goals: [
        'Predict optimal conditions for HMG-CoA reductase activity',
        'Recall the functions of the citrate shuttle, HMG-CoA reductase, LCAT, and CETP'
      ],
      recap: `
- **Cholesterol** builds **cell membranes, steroid hormones, bile acids, and vitamin D**.
- Most comes from **LDL/HDL**; some is made **de novo** in the **liver** from **acetyl-CoA + ATP** (citrate shuttle delivers acetyl-CoA; **NADPH** from the PPP).
- **Rate-limiting step**: **HMG-CoA reductase** makes **mevalonic acid** in the **SER**. Most active when **cholesterol is low** and **insulin is high**; inhibited by cholesterol (feedback) → the target of **statins**.
- **LCAT** esterifies cholesterol (activated by HDL apoproteins); **CETP** transfers cholesteryl esters from HDL to IDL → LDL.
`,
      detail: `
#### Roles and sources of cholesterol
**Cholesterol** is in **all** human cells and is central to **cell membranes, steroid hormones, bile acids, and vitamin D**.

- Most cells get cholesterol from **LDL or HDL**.
- Some is synthesized **de novo** in the **liver**, driven by **acetyl-CoA and ATP**.
- The **citrate shuttle** carries mitochondrial **acetyl-CoA → cytoplasm**, where synthesis occurs.
- **NADPH** (from the **pentose phosphate pathway**) supplies reducing equivalents.

#### The rate-limiting enzyme: HMG-CoA reductase
Synthesis of **mevalonic acid** in the **smooth endoplasmic reticulum (SER)** is the **rate-limiting step**, catalyzed by **3-hydroxy-3-methylglutaryl-CoA (HMG-CoA) reductase**.

| Regulator | Effect on HMG-CoA reductase |
|---|---|
| **High cholesterol** | **Inhibits** (feedback inhibition) |
| **Insulin** | **Promotes** synthesis |
| **Gene expression control** | Modulates enzyme amount |

So HMG-CoA reductase is **most active when cholesterol is low and insulin is high**, in the **SER**.

:::realworld
**Statins** treat **hypercholesterolemia** by acting as **competitive inhibitors of HMG-CoA reductase** — the rate-limiting enzyme of de novo synthesis — lowering overall cholesterol production.
:::

#### Specialized transport enzymes: LCAT and CETP
| Enzyme | Full name | Function |
|---|---|---|
| **LCAT** | **Lecithin–cholesterol acyltransferase** | Found in blood, activated by **HDL apoproteins**; adds a **fatty acid to cholesterol** → soluble **cholesteryl esters** (e.g., in HDL) |
| **CETP** | **Cholesteryl ester transfer protein** | Facilitates **transfer of cholesteryl esters from HDL → IDL**, helping IDL become **LDL** |

:::mnemonic
**LCAT "Coats" cholesterol** with a fatty acid (esterifies it). **CETP "Transfers"** the finished cholesteryl ester from HDL to IDL → LDL. One **makes** the ester, the other **moves** it.
:::
`
    },

    /* ──────────────── 11.5 Fatty Acids and Triacylglycerols ──────────── */
    {
      id: 's5', num: '11.5', title: 'Fatty Acids and Triacylglycerols',
      goals: [
        'Recall and sequence the five steps in the addition of acetyl-CoA to a growing fatty acid chain',
        'Differentiate β-oxidation of unsaturated fatty acids from that of saturated fatty acids',
        'Identify the cellular locations involved in fatty acid synthesis and modification',
        'Name fatty acids and predict their structure based on their nomenclature'
      ],
      images: [{ src: fig(4, 0).src, alt: fig(4, 0).alt, caption: 'Figure 11.5 — Fatty acid synthesis from glucose: acetyl-CoA leaves the mitochondrion via citrate and is built into palmitate in the cytosol.' }],
      recap: `
- **Fatty acids** = long-chain carboxylic acids; carbon 1 = carboxyl, carbon 2 = **α-carbon**. Notation = **carbons:double bonds** (e.g., **16:0**).
- **Synthesis** (cytosol, liver): **acetyl-CoA carboxylase** (rate-limiting; biotin + ATP → malonyl-CoA) then **fatty acid synthase** builds **palmitate (16:0)** — the **only** fatty acid humans make de novo (needs 8 acetyl-CoA, NADPH, B5).
- **Synthesis 5 steps**: activation → bond formation → reduction → dehydration → reduction. **Insulin** stimulates synthesis; **glucagon** stimulates β-oxidation.
- **β-Oxidation** (mitochondria) reverses synthesis: 4 steps (**oxidation → hydration → oxidation → cleavage**) per cycle, each releasing **1 acetyl-CoA + 1 FADH₂ + 1 NADH**. **Carnitine shuttle** (carnitine acyltransferase I = rate-limiting) imports **long-chain** fatty acids.
`,
      detail: `
#### Fatty acid nomenclature
**Fatty acids** are long-chain **carboxylic acids**. The **carboxyl carbon is C1**; **C2 = α-carbon**. In the body they occur as **salts** (can form micelles) or **esterified** to other compounds (e.g., membrane lipids).

- Written as **carbons : double bonds** (e.g., palmitate = **16:0**).
- **Saturated** = no double bonds; **unsaturated** = one or more.
- Humans synthesize only a few unsaturated fatty acids; the rest are **essential fatty acids** from the diet (e.g., **α-linolenic acid**, **linoleic acid**) — polyunsaturated acids critical for **membrane fluidity**.
- **ω (omega) system**: position of the **last** double bond relative to the chain end. **Linoleic acid (18:2)** → **ω-6** family (→ arachidonic acid); **α-linolenic acid (18:3)** → **ω-3** family. Natural double bonds are usually **cis**.

:::realworld
**Trans** double bonds are rare in nature; they dominate in **partially hydrogenated** vegetable oils (margarine). These trans fats are **solid at room temp**, **decrease membrane fluidity**, and contribute to **arterial disease**.
:::

#### Fatty acid biosynthesis (nontemplate synthesis)
Lipid and carbohydrate synthesis are **nontemplate** processes (no nucleic-acid coding). Fatty acid synthesis occurs in the **liver** (and a little in adipose) and products go to **adipose** for storage. Both major enzymes — **acetyl-CoA carboxylase** and **fatty acid synthase** — are **stimulated by insulin**. **Palmitate (16:0)** is the end product.

##### Acetyl-CoA shuttling (citrate shuttle)
After a large meal, **acetyl-CoA accumulates in the mitochondrial matrix** and must reach the cytosol:

1. Acetyl-CoA (from **pyruvate dehydrogenase**) + oxaloacetate → **citrate**.
2. As the cell becomes energetically satisfied, **isocitrate dehydrogenase** (rate-limiting enzyme of the citric acid cycle) slows → **citrate accumulates**.
3. **Citrate diffuses** to the cytosol; **citrate lyase** splits it back into **acetyl-CoA + oxaloacetate**.
4. **Oxaloacetate** returns to the mitochondrion to shuttle more acetyl-CoA.

##### Acetyl-CoA carboxylase — the rate-limiting enzyme
In the cytoplasm, **acetyl-CoA carboxylase** (rate-limiting enzyme of FA biosynthesis):

- Requires **biotin** and **ATP**.
- Adds **CO₂** to acetyl-CoA → **malonyl-CoA**.
- **Activated by insulin and citrate**.
- The added **CO₂ is never incorporated** into the fatty acid — fatty acid synthase removes it during chain addition.

##### Fatty acid synthase
A large cytosolic **multienzyme complex** ("palmitate synthase" — palmitate is the only de novo product), rapidly induced in the **liver** after a high-carb meal (high insulin):

- Contains an **acyl carrier protein (ACP)** requiring **pantothenic acid (vitamin B5)**.
- Requires **NADPH** to reduce added acetyl groups.
- **8 acetyl-CoA** groups → **palmitate (16:0)**.
- Further **elongation/desaturation** (limited) occurs via enzymes in the **SER**.

![Figure 11.6 — Action of fatty acid synthase: (a) activation of the growing chain and (b) malonyl-ACP, (c) bond formation, (d) reduction of a carbonyl to a hydroxyl, (e) dehydration, (f) reduction to a saturated fatty acid.](${fig(4, 1).src})

###### The five steps of chain addition
| Step | Reaction |
|---|---|
| **1. Activation** | Attachment to the **acyl carrier protein (ACP)** |
| **2. Bond formation** | Between **malonyl-ACP** and the growing chain |
| **3. Reduction** | Carbonyl → hydroxyl (uses NADPH) |
| **4. Dehydration** | Removes water → double bond |
| **5. Reduction** | Double bond → saturated (uses NADPH) |

Repeats until the **16-carbon palmitate** is built. **Many of these reactions are reversed in β-oxidation.**

:::keyconcept
**Fatty acid synthesis and β-oxidation are mirror-image processes.** Both involve transport across the **mitochondrial membrane** followed by a series of **redox** reactions — but in **opposite directions**. Learn one and you understand both.
:::

#### Triacylglycerol (triglyceride) synthesis
**Triacylglycerols** — the **storage** form of fatty acids — form by attaching **three fatty acyl-CoA** to **glycerol 3-phosphate**, primarily in the **liver** (some in adipose, a little from diet). In the liver, TAG is packaged into **VLDL** and shipped to adipose, leaving little stored in the liver itself.

#### Fatty acid oxidation
Most catabolism is **β-oxidation in the mitochondria** (peroxisomal β-oxidation also occurs; **α-oxidation** handles some branched chains; **ω-oxidation** in the ER makes dicarboxylic acids). **Insulin indirectly inhibits β-oxidation; glucagon stimulates it.**

##### Activation
Fatty acids are first **activated** by attachment to **CoA** via **fatty-acyl-CoA synthetase** → a **fatty acyl-CoA (acyl-CoA)** (e.g., **acetyl-CoA** = 2-carbon, **palmitoyl-CoA** = 16-carbon).

##### Entry into mitochondria — the carnitine shuttle
| Chain length | Carbons | Entry into mitochondria |
|---|---|---|
| **Short-chain** | 2–4 | **Free diffusion** |
| **Medium-chain** | 6–12 | **Free diffusion** |
| **Long-chain** | 14–20 | **Carnitine shuttle** required |
| **Very-long-chain** | > 20 | Oxidized **elsewhere** in the cell |

**Carnitine acyltransferase I** is the **rate-limiting enzyme of fatty acid oxidation**.

![Figure 11.7 — Fatty acid activation by acyl-CoA synthetase and transport into the mitochondrion via the carnitine shuttle.](${fig(4, 2).src})

##### β-Oxidation in the mitochondria
β-Oxidation **reverses synthesis** by oxidizing and **releasing** acetyl-CoA (rather than reducing and linking it). It's a repeating **4-step cycle**:

| Step | Reaction |
|---|---|
| **1. Oxidation** | Form a double bond (→ FADH₂) |
| **2. Hydration** | Add water across the double bond → hydroxyl |
| **3. Oxidation** | Hydroxyl → carbonyl (β-ketoacid) (→ NADH) |
| **4. Cleavage (thiolysis)** | Split β-ketoacid → shorter acyl-CoA + **acetyl-CoA** |

**Per cycle yield:**

$$\\text{1 cycle} \\rightarrow \\text{1 acetyl-CoA} + \\text{1 FADH}_2 + \\text{1 NADH}$$

The cycle repeats until a final **acetyl-CoA** remains. The **FADH₂ and NADH** feed the **electron transport chain** to make ATP.

Fate of the acetyl-CoA depends on tissue and energy state:

- **Muscle / adipose** — acetyl-CoA enters the **citric acid cycle**.
- **Liver** — acetyl-CoA (which **cannot** be made into glucose) **stimulates gluconeogenesis** by activating **pyruvate carboxylase**.
- **Fasting liver** — makes more acetyl-CoA than the citric acid cycle can use → diverts it to **ketone bodies**.

![Figure 11.8 — The four steps of β-oxidation: oxidation, hydration, oxidation, and cleavage, releasing one acetyl-CoA per cycle.](${fig(4, 3).src})

##### Odd-chain fatty acids — the gluconeogenesis exception
Odd-carbon fatty acids β-oxidize normally **except the final cycle**:

| Chain | Final-cycle products |
|---|---|
| **Even-numbered** | **2 acetyl-CoA** (from the 4-carbon remnant) |
| **Odd-numbered** | **1 acetyl-CoA + 1 propionyl-CoA** (from the 5-carbon remnant) |

**Propionyl-CoA pathway** (vitamin-dependent!):

$$\\text{propionyl-CoA} \\xrightarrow{\\text{propionyl-CoA carboxylase (biotin, B7)}} \\text{methylmalonyl-CoA} \\xrightarrow{\\text{methylmalonyl-CoA mutase (B}_{12}\\text{)}} \\text{succinyl-CoA}$$

**Succinyl-CoA** is a citric acid cycle intermediate and can become **malate** to enter **gluconeogenesis** — so **odd-chain fatty acids are the exception** to the rule that fatty acids can't make glucose in humans.

![Figure 11.9 — The propionic acid pathway: propionyl-CoA → methylmalonyl-CoA → succinyl-CoA, feeding the citric acid cycle and gluconeogenesis.](${fig(4, 4).src})

:::mnemonic
**Odd chains get "B-rave" (B7 → B12).** **Pro**pionyl-CoA carboxylase needs **biotin (B7)**; methylmalonyl-CoA **m**utase needs **cobalamin (B12)**. Odd carbons → **propionyl-CoA** → the only fatty-acid route to **glucose**.
:::

##### β-Oxidation of unsaturated fatty acids
Double bonds disturb the stereochemistry oxidative enzymes need (they tolerate at most **one** double bond, between **C2 and C3**):

| Fatty acid | Extra enzyme(s) needed |
|---|---|
| **Saturated** | None |
| **Monounsaturated** | **Enoyl-CoA isomerase** — shifts a **cis-3,4** double bond to **trans-2,3** |
| **Polyunsaturated** | **Enoyl-CoA isomerase + 2,4-dienoyl-CoA reductase** — reductase collapses two conjugated double bonds to one (3,4), then isomerase rearranges it |

![Figure 11.10 — Reaction of enoyl-CoA isomerase: rearranging a cis-3,4 double bond to a trans-2,3 double bond.](${fig(4, 5).src})

![Figure 11.11 — Reaction of 2,4-dienoyl-CoA reductase: reducing two conjugated double bonds to a single 3,4 double bond in polyunsaturated fatty acids.](${fig(4, 6).src})

:::expertise
This chapter is among the most detailed in the book but **not especially high-yield**. Prioritize the **big ideas**: synthesis vs. β-oxidation as mirror images, the **rate-limiting enzymes** (acetyl-CoA carboxylase for synthesis, carnitine acyltransferase I for oxidation), per-cycle yields, and the **odd-chain/unsaturated exceptions** — rather than memorizing every intermediate.
:::
`
    },

    /* ───────────────────────── 11.6 Ketone Bodies ────────────────────── */
    {
      id: 's6', num: '11.6', title: 'Ketone Bodies',
      goals: [
        'Predict when fatty acids would be used to create ketone bodies rather than glucose',
        'Recall the conditions that favor ketogenesis and ketolysis'
      ],
      images: [{ src: fig(5, 0).src, alt: fig(5, 0).alt, caption: 'Figure 11.12 — Ketogenesis in the liver and ketolysis in peripheral tissues: acetyl-CoA ⇌ acetoacetate / 3-hydroxybutyrate.' }],
      recap: `
- **Ketone bodies = transportable acetyl-CoA**, made by the **liver** in the **fasting state** from excess β-oxidation acetyl-CoA.
- The bodies are **acetoacetate** and **3-hydroxybutyrate (β-hydroxybutyrate)**; **acetone** is a minor, non-usable side product.
- **Ketogenesis** (liver mitochondria): **HMG-CoA synthase → HMG-CoA → HMG-CoA lyase → acetoacetate**.
- **Ketolysis** uses **thiophorase** (succinyl-CoA acetoacetyl-CoA transferase), present in **all tissues except the liver** → liver can't use its own ketones.
- Order of use: **muscle first**, then the **brain after ~1 week** (up to **⅔** of its energy).
`,
      detail: `
#### Why and when ketone bodies form
In the **fasting state**, the **liver** converts **excess acetyl-CoA** from β-oxidation into ketone bodies. Why ketones instead of glucose? Because **acetyl-CoA cannot be converted to glucose** (only the odd-chain propionyl-CoA route makes glucose). Energy is therefore packaged as ketones for the **brain and muscle**.

The two usable ketone bodies:

- **Acetoacetate**
- **3-hydroxybutyrate (β-hydroxybutyrate)** — reduced form of acetoacetate
- **Acetone** — minor side product, **not used for energy** (exhaled/excreted)

:::keyconcept
**Ketone bodies are essentially transportable forms of acetyl-CoA** — two acetyl-CoA molecules linked together. They are **produced by the liver** and **used by other tissues** during prolonged starvation.
:::

#### Ketogenesis (in the liver)
Occurs in the **mitochondria of liver cells** when excess **acetyl-CoA** accumulates while fasting:

$$\\text{acetyl-CoA} \\xrightarrow{\\text{HMG-CoA synthase}} \\text{HMG-CoA} \\xrightarrow{\\text{HMG-CoA lyase}} \\text{acetoacetate} \\rightleftharpoons \\text{3-hydroxybutyrate}$$

- **HMG-CoA synthase** forms HMG-CoA.
- **HMG-CoA lyase** breaks HMG-CoA into **acetoacetate**, which can be reduced to **3-hydroxybutyrate**.
- **Acetone** is a minor byproduct.

#### Ketolysis (in peripheral tissues)
Acetoacetate picked up from the blood is activated in the mitochondria by **succinyl-CoA acetoacetyl-CoA transferase** (commonly **thiophorase**) → **acetoacetyl-CoA** → acetyl-CoA for fuel.

:::keyconcept
**The liver lacks thiophorase**, so it **cannot catabolize the ketone bodies it makes** — it produces them for *export*. Cardiac and skeletal muscle and the renal cortex readily perform ketolysis.
:::

#### Order of ketone use & the brain
- During fasting, **muscle metabolizes ketones as fast as the liver makes them**, preventing buildup — so **muscle uses ketones before the brain**.
- After **~1 week** of fasting, blood ketones rise enough for the **brain** to begin using them, eventually deriving up to **two-thirds** of its energy from ketones.
- In the brain, ketone-derived acetyl-CoA **inhibits pyruvate dehydrogenase** → glycolysis and glucose uptake fall. This **spares body protein** (which would otherwise be catabolized for gluconeogenesis).

:::realworld
A large rise in blood ketones causes **ketoacidosis**, a dangerous drop in blood pH. It most often arises from fatty-acid breakdown in **type 1 (insulin-dependent) diabetes mellitus** (diabetic ketoacidosis).
:::

:::mnemonic
**"Liver makes them, can't take them."** The liver is the **ketone factory** but has no **thiophorase**, so it can't burn its own product. Muscle eats ketones first; the **brain joins after a week** of starvation.
:::
`
    },

    /* ──────────────────────── 11.7 Protein Catabolism ─────────────────── */
    {
      id: 's7', num: '11.7', title: 'Protein Catabolism',
      goals: [
        'Identify common sources for acetyl-CoA used in lipid synthesis',
        'Recall the location(s) associated with large amounts of protein digestion',
        'Predict what will happen to the carbon skeleton, amino groups, and side chains of proteins that have been broken down'
      ],
      images: [{ src: fig(6, 0).src, alt: 'Absorption of amino acids and peptides in the intestine', caption: 'Figure 11.13 — Absorption of amino acids and peptides: secondary active transport (Na⁺-linked) at the luminal membrane, facilitated/simple diffusion at the basal membrane.' }],
      recap: `
- **Protein is a last-resort fuel** — broken down only under **extreme energy deprivation** (conserve muscle, especially the heart).
- **Digestion** starts in the **stomach (pepsin)**, continues with pancreatic **trypsin, chymotrypsin, carboxypeptidases** (all secreted as **zymogens**), finishes with brush-border **dipeptidase/aminopeptidase** — bulk occurs in the **small intestine**.
- Catabolized amino acids lose the amino group by **transamination/deamination**; the **carbon skeleton** is used for energy.
- **Glucogenic** (all but **leucine & lysine**) → glucose; **ketogenic** (Leu, Lys + Ile, Phe, Thr, Trp, Tyr) → acetyl-CoA/ketones.
- **Amino groups → ammonia → urea cycle (liver)**; **basic side chains** also feed the urea cycle.
`,
      detail: `
#### Protein as fuel — only when desperate
**Protein is rarely used for energy** because it's too valuable structurally; routine breakdown causes serious illness. Under **extreme energy deprivation**, body protein (mainly from **muscle and liver**) can be catabolized.

:::keyconcept
Metabolism **conserves tissue**, especially **brain and heart**. Breaking down protein sacrifices **muscle — potentially cardiac muscle** — so it's avoided under normal conditions. (Thus protein is **not** a common source of acetyl-CoA for lipid synthesis.)
:::

#### Protein digestion and absorption
**Proteolysis** sequence:

| Location | Enzyme(s) | Notes |
|---|---|---|
| **Stomach** | **Pepsin** | Begins proteolysis |
| **Small intestine (lumen)** | **Trypsin, chymotrypsin, carboxypeptidases A & B** | Pancreatic proteases, all secreted as **zymogens** |
| **Small intestine (brush border)** | **Dipeptidase, aminopeptidase** | Completes digestion |

- End products: **amino acids, dipeptides, tripeptides**.
- **Luminal membrane** uptake: **secondary active transport linked to Na⁺**.
- **Basal membrane** exit: **simple and facilitated diffusion** into blood.
- **Bulk of protein digestion occurs in the small intestine.**

#### Fate of a catabolized amino acid
Amino acids released from protein **lose their amino group** (via **transamination** or **deamination**); the remaining **carbon skeleton** provides energy.

##### Glucogenic vs. ketogenic amino acids
| Class | Amino acids | Product |
|---|---|---|
| **Glucogenic** | **All except leucine and lysine** | → **glucose** (gluconeogenesis) |
| **Ketogenic** | **Leucine, lysine** (purely ketogenic) | → **acetyl-CoA / ketone bodies** |
| **Both** | **Isoleucine, phenylalanine, threonine, tryptophan, tyrosine** | Glucogenic **and** ketogenic |

:::mnemonic
**Only "Leu & Lys" are *purely* ketogenic** — the **two L's**. Everything else is at least glucogenic. The energy yield per amino acid also tracks **side-chain size** (more carbons donated → more energy; e.g., isoleucine > valine > alanine > glycine).
:::

##### The amino group and the urea cycle
The amino groups removed are toxic as **ammonia** and must be excreted safely. The **urea cycle** (in the **liver**) is the body's primary route for removing **excess nitrogen**. (The MCAT is unlikely to test its steps directly.)

![Figure 11.14 — The urea cycle: liver pathway that converts toxic ammonia into excretable urea.](${fig(6, 1).src})

##### Side chains
The **side chain's** fate depends on its chemistry:

- **Basic side chains** → feed into the **urea cycle** (like amino groups).
- **Other side chains** → behave like the **carbon skeleton** → **gluconeogenesis or ketone production**.

| Component | Fate |
|---|---|
| **Carbon skeleton** | Liver → **glucose or ketone bodies** for energy |
| **Amino group** | **Urea cycle** → excretion |
| **Side chains** | Basic → urea cycle; others → energy (like carbon skeleton) |

:::bridge
This is the capstone of cellular metabolism. Notice the **integration**: acetyl-CoA from β-oxidation regulates the **pyruvate dehydrogenase complex** and **pyruvate carboxylase**, shifting carbohydrate metabolism from glycolysis/citric acid cycle toward **gluconeogenesis** — the focus of *MCAT Biochemistry Review*, Ch. 12 (Bioenergetics & Regulation of Metabolism).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Lipid Digestion and Absorption',
        points: [
          '**Mechanical** digestion of lipids occurs mainly in the **mouth and stomach**; **chemical** digestion occurs in the **small intestine**, aided by **bile, pancreatic lipase, colipase, and cholesterol esterase**.',
          'Digested lipids may form **micelles** for absorption or be absorbed directly.',
          '**Short-chain** fatty acids are absorbed **directly into the blood**; **long-chain** fatty acids are absorbed as micelles, assembled into **chylomicrons**, and released into the **lymphatic system**.'
        ]
      },
      {
        section: 'Lipid Mobilization',
        points: [
          'Lipids are mobilized from **adipocytes** by **hormone-sensitive lipase (HSL)** (activated by low insulin, epinephrine, cortisol).',
          'Lipids are mobilized from **lipoproteins** by **lipoprotein lipase (LPL)**.',
          'Each triacylglycerol yields **3 free fatty acids : 1 glycerol**; glycerol goes to the liver.'
        ]
      },
      {
        section: 'Lipid Transport',
        points: [
          '**Free fatty acids** travel bound to **albumin**; triacylglycerol and cholesterol travel as **lipoproteins**.',
          '**Chylomicrons** carry **dietary** TAG via the lymphatics; **VLDL** carries newly synthesized TAG from liver to tissues.',
          '**IDL** is a VLDL remnant transitioning between TAG and cholesterol transport; **LDL** delivers cholesterol to tissues; **HDL** performs **reverse cholesterol transport**.',
          'Protein content (density) order: **HDL > LDL > IDL > VLDL > chylomicrons**. Apoproteins control lipoprotein interactions.'
        ]
      },
      {
        section: 'Cholesterol Metabolism',
        points: [
          'Cholesterol comes from **diet** or **de novo synthesis** in the **liver**.',
          'The key (rate-limiting) enzyme is **HMG-CoA reductase** (in the SER; most active when cholesterol is low and insulin high).',
          '**LCAT** forms cholesteryl esters for HDL transport; **CETP** transfers cholesteryl esters from HDL to IDL, helping form LDL.'
        ]
      },
      {
        section: 'Fatty Acids and Triacylglycerols',
        points: [
          'Fatty acids are **carboxylic acids**; **saturated** (no double bonds) vs. **unsaturated** (one or more).',
          'Fatty acids are synthesized in the **cytoplasm** from acetyl-CoA (exported via the **citrate shuttle**); five steps — **activation, bond formation, reduction, dehydration, reduction** — repeat 8× to form **palmitate (16:0)**, the only fatty acid humans synthesize.',
          'Oxidation occurs in the **mitochondria** after the **carnitine shuttle**; **β-oxidation** cycles **oxidation, hydration, oxidation, cleavage**, releasing one acetyl-CoA (+ FADH₂ + NADH) per cycle.',
          '**Branched and unsaturated** fatty acids need special enzymes; unsaturated chains use an **isomerase** (and a **2,4-dienoyl-CoA reductase** if polyunsaturated). Odd-chain fatty acids yield **propionyl-CoA** → the only FA route to glucose.'
        ]
      },
      {
        section: 'Ketone Bodies',
        points: [
          '**Ketogenesis** occurs during **prolonged starvation** due to excess acetyl-CoA in the **liver**.',
          '**Ketolysis** regenerates **acetyl-CoA** for energy in peripheral tissues (not the liver, which lacks **thiophorase**).',
          'The **brain** can derive up to **two-thirds** of its energy from ketone bodies during prolonged starvation.'
        ]
      },
      {
        section: 'Protein Catabolism',
        points: [
          'Protein digestion occurs primarily in the **small intestine**; cellular protein catabolism occurs **only under starvation**.',
          '**Carbon skeletons** are used for energy (gluconeogenesis or ketone bodies); **amino groups** feed the **urea cycle** for excretion; **side-chain** fate depends on its chemistry.'
        ]
      }
    ],
    mnemonics: [
      '**"Long goes Lymph":** long-chain fats ride chylomicrons into the lymphatics; short-chain fatty acids go straight into blood. So **not all** lipids enter via lymph.',
      '**LDL = "Lousy/Lethal"** (Lands cholesterol in arteries) · **HDL = "Healthy"** (Hauls it back to the liver). Higher % protein → higher density → **HDL** is densest.',
      '**TAG = 3 tails + 1 glycerol:** lipolysis gives a **3:1** free-fatty-acid-to-glycerol ratio.',
      '**LCAT "Coats"** cholesterol (esterifies it); **CETP "Transfers"** the cholesteryl ester from HDL → IDL → LDL.',
      '**Odd chains go "B-rave" (B7 → B12):** propionyl-CoA carboxylase needs **biotin**; methylmalonyl-CoA mutase needs **B12** — the only fatty-acid path to glucose.',
      '**"Liver makes them, can\'t take them":** the liver is the ketone factory but lacks **thiophorase**, so it can\'t burn its own ketones. Muscle uses ketones first; the brain joins after ~1 week.',
      '**Only Leu & Lys (the two L\'s) are purely ketogenic;** every other amino acid is at least glucogenic.',
      '**Synthesis vs. β-oxidation are mirrors:** build in the **cytosol** (insulin), burn in the **mitochondria** (glucagon) — same redox steps, opposite directions.'
    ],
    keyConcepts: [
      '**Fatty acid synthesis and β-oxidation are reverse processes:** synthesis builds palmitate in the cytosol (rate-limiting **acetyl-CoA carboxylase**); β-oxidation degrades fatty acids in the mitochondria (rate-limiting **carnitine acyltransferase I**). Insulin favors synthesis; glucagon favors oxidation.',
      '**Lipoprotein density tracks % protein:** chylomicrons (TAG-rich, "lightest") → VLDL → IDL → LDL → HDL (protein-rich, densest). Chylomicrons/VLDL move triacylglycerol; LDL/HDL move cholesterol.',
      '**Acetyl-CoA cannot become glucose:** in fasting, excess hepatic acetyl-CoA is exported as **ketone bodies**, which the liver itself cannot use (no thiophorase). Only odd-chain **propionyl-CoA** lets fatty acids contribute to glucose.',
      '**Catabolized amino acids split three ways:** carbon skeleton → energy (glucose or ketones), amino group → **urea cycle**, side chain → urea cycle (if basic) or energy.'
    ],
    equations: [
      { name: 'Triacylglycerol hydrolysis (mobilization)', tex: '\\text{triacylglycerol} \\rightarrow 3\\ \\text{free fatty acids} + 1\\ \\text{glycerol}', note: 'The 3:1 free-fatty-acid-to-glycerol ratio from HSL-mediated lipolysis. Glycerol → liver for glycolysis/gluconeogenesis.' },
      { name: 'Lipoprotein density (protein content) order', tex: '\\text{HDL} > \\text{LDL} > \\text{IDL} > \\text{VLDL} > \\text{chylomicrons}', note: 'Density rises with % protein. Chylomicrons and VLDL are the triacylglycerol transporters; LDL and HDL are cholesterol transporters.' },
      { name: 'β-Oxidation per-cycle yield', tex: '\\text{1 cycle} \\rightarrow 1\\ \\text{acetyl-CoA} + 1\\ \\text{FADH}_2 + 1\\ \\text{NADH}', note: 'Each four-step cycle (oxidation, hydration, oxidation, cleavage) shortens the chain by two carbons. FADH₂ and NADH feed the electron transport chain.' },
      { name: 'Fatty acid synthase stoichiometry', tex: '8\\ \\text{acetyl-CoA} \\rightarrow \\text{palmitate (16:0)}', note: 'Eight acetyl-CoA (activated as malonyl-CoA) build the only fatty acid humans synthesize de novo; requires NADPH and ACP (vitamin B5).' },
      { name: 'Propionyl-CoA pathway (odd-chain → glucose)', tex: '\\text{propionyl-CoA} \\xrightarrow{\\text{B}_7} \\text{methylmalonyl-CoA} \\xrightarrow{\\text{B}_{12}} \\text{succinyl-CoA}', note: 'The lone route by which fatty acids contribute carbon to gluconeogenesis. Requires biotin (B7) and cobalamin (B12).' },
      { name: 'Ketogenesis', tex: '2\\ \\text{acetyl-CoA} \\rightarrow \\text{acetoacetate} \\rightleftharpoons \\text{3-hydroxybutyrate}', note: 'Liver-only synthesis via HMG-CoA synthase and HMG-CoA lyase during fasting; acetone is a minor, non-usable byproduct.' }
    ]
  },

  questions: raw.questions
};
