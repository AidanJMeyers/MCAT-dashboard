// Chapter 10 — Carbohydrate Metabolism II: Aerobic Respiration. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch10.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }

export default {
  id: 10,
  title: 'Carbohydrate Metabolism II: Aerobic Respiration',
  subtitle: 'Acetyl-CoA · reactions of the citric acid cycle · the electron transport chain · oxidative phosphorylation',

  blocks: [
    /* ───────────────────────── 10.1 Acetyl-CoA ───────────────────────── */
    {
      id: 's1', num: '10.1', title: 'Acetyl-CoA',
      goals: [
        'Detail four potential energy sources for the synthesis of acetyl-CoA',
        'Identify the major inputs and outputs through the pyruvate dehydrogenase complex'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 10.1 — Overall reaction of the pyruvate dehydrogenase complex: pyruvate + CoA–SH + NAD⁺ → acetyl-CoA + NADH + CO₂.' }],
      recap: `
- **Acetyl-CoA** is the **crossroads of metabolism** — formed from carbohydrates, fatty acids, ketogenic amino acids, ketones, and alcohol, and the **fuel that feeds the citric acid cycle**.
- The **pyruvate dehydrogenase complex (PDC)** is a **5-enzyme** complex in the **mitochondrial matrix** that **oxidatively decarboxylates** pyruvate: $\\text{pyruvate} + \\text{CoA–SH} + \\text{NAD}^+ \\rightarrow \\text{acetyl-CoA} + \\text{NADH} + \\text{CO}_2 + \\text{H}^+$.
- This step is **irreversible** ($\\Delta G^{\\circ\\prime} = -33.4\\ \\text{kJ/mol}$) — which is why **glucose cannot be made from acetyl-CoA**.
- Acetyl-CoA's **thioester bond** (C–S, not C–O) is **high-energy**: its hydrolysis releases enough energy to drive the cycle forward.
- PDC is **inhibited by its own products, acetyl-CoA and NADH** (which build up when the ETC stalls).
`,
      detail: `
#### Why aerobic respiration?
**Glycolysis** (Chapter 9) yields only a **net 2 ATP per glucose** — nowhere near the body's needs. The two highest-yield, most-tested topics in metabolism pick up where glycolysis leaves off: the **citric acid cycle** and **oxidative phosphorylation**. Both occur in the **mitochondria** and together extract the bulk of glucose's energy.

The **citric acid cycle** — also called the **Krebs cycle** or **tricarboxylic acid (TCA) cycle** — oxidizes **acetyl-CoA** to $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ while producing the high-energy electron carriers **NADH** and **FADH₂**.

#### The pyruvate dehydrogenase complex (PDC)
After glycolysis, **pyruvate** enters the mitochondrion by **active transport** and is **oxidized and decarboxylated** by the **pyruvate dehydrogenase complex** in the **mitochondrial matrix**. Follow the carbons: three-carbon **pyruvate** is cleaved into a two-carbon **acetyl group** + one **$\\text{CO}_2$**. This reaction is **irreversible** — the reason glucose cannot be formed directly from acetyl-CoA.

In mammals the complex contains **five enzymes**: the first three convert pyruvate to acetyl-CoA; the last two **regulate** PDH.

| # | Enzyme | What it does | Cofactor / coenzyme |
|---|---|---|---|
| 1 | **Pyruvate dehydrogenase (PDH)** | Oxidizes pyruvate, releasing **CO₂**; the 2-C fragment binds **TPP** | **Thiamine pyrophosphate (TPP, vit. B₁)** + **Mg²⁺** |
| 2 | **Dihydrolipoyl transacetylase** | Transfers the 2-C unit to **lipoic acid** (thioester), then to **CoA–SH** → **acetyl-CoA** | **Lipoic acid** (covalently bound) + **CoA–SH** |
| 3 | **Dihydrolipoyl dehydrogenase** | **Reoxidizes** lipoic acid; reduces **FAD → FADH₂**, which later reduces **NAD⁺ → NADH** | **FAD → NAD⁺** |
| 4 | **PDH kinase** | **Phosphorylates** PDH to **turn it off** (high ATP/acetyl-CoA) | — (regulatory) |
| 5 | **PDH phosphatase** | **Dephosphorylates** PDH to **turn it on** (high ADP) | — (regulatory) |

![Figure 10.2 — Mechanism of pyruvate dehydrogenase, passing the 2-carbon unit from TPP → lipoic acid → CoA.](${fig(0, 3).src})

:::mnemonic
**PDC cofactors — "Tender Loving Care For Nobody":** **T**PP, **L**ipoic acid, **C**oA, **F**AD, **N**AD⁺. *(These five cofactors are shared by the α-ketoglutarate dehydrogenase complex too — learn them once, get both.)*
:::

#### The thioester bond
**Coenzyme A** is written **CoA–SH** because it is a **thiol** (–SH group). The acetyl group attaches to that sulfur to form a **thioester** — sulfur in place of the usual oxygen ester (–OR). Thioesters are **high-energy**: their **hydrolysis releases a large amount of energy**, enough to drive downstream reactions such as the first step of the citric acid cycle.

:::expertise
Keep the "pyruvate" enzymes straight — careless name-matching costs points on Test Day. **Pyruvate dehydrogenase (PDH)** + its regulators **PDH kinase** and **PDH phosphatase** belong to aerobic respiration; **pyruvate carboxylase** is a **gluconeogenesis** enzyme (Chapter 9). Different enzyme, different pathway.
:::

#### Four other ways to make acetyl-CoA
Glycolysis is the headline source, but acetyl-CoA sits at the convergence of many pathways. All of them funnel into the **final common pathway** of the citric acid cycle.

| Source | How it becomes acetyl-CoA |
|---|---|
| **Fatty acids (β-oxidation)** | Cytosolic **activation** forms fatty acyl-CoA; the acyl group rides **carnitine** across the inner membrane (transesterification), is handed to a **mitochondrial CoA–SH**, then undergoes **β-oxidation** (removes 2-C units from the carboxyl end). |
| **Ketogenic amino acids** | **Transamination** removes the amino group; the carbon skeleton forms **ketone bodies** → acetyl-CoA. |
| **Ketones** | The **reverse** of ketone-body formation regenerates acetyl-CoA. |
| **Alcohol** | **Alcohol dehydrogenase** + **acetaldehyde dehydrogenase** → acetyl-CoA, but with **NADH buildup** that inhibits the Krebs cycle → acetyl-CoA is diverted to **fatty acid synthesis**. |

![Figure 10.3 — Fatty acid activation and transport: carnitine shuttles the acyl group across the inner mitochondrial membrane.](${fig(0, 4).src})

:::bridge
Once formed in the matrix, fatty acyl-CoA can undergo **β-oxidation** — covered in *MCAT Biochemistry Review*, Chapter 11.
:::

:::realworld
In **Alzheimer's**, **Huntington's**, and **alcoholism**, brain **glucose metabolism and oxidative phosphorylation drop**. Whether the resulting **acetyl-CoA shortage** is cause or consequence is still researched — and matters doubly because acetyl-CoA is also needed to make the neurotransmitter **acetylcholine**. Under **starvation**, the brain can switch to **ketone bodies** for fuel.
:::
`
    },

    /* ─────────────── 10.2 Reactions of the Citric Acid Cycle ─────────────── */
    {
      id: 's2', num: '10.2', title: 'Reactions of the Citric Acid Cycle',
      goals: [
        'Explain the purpose of the citric acid cycle, including major inputs and outputs',
        'Identify the importance of key enzymes within the citric acid cycle',
        'Recall the inhibitors and activators of citrate synthase, isocitrate dehydrogenase, and the α-ketoglutarate dehydrogenase complex'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 10.4 — The citric acid cycle: acetyl-CoA condenses with oxaloacetate, and eight steps regenerate oxaloacetate while releasing 2 CO₂, 3 NADH, 1 FADH₂, and 1 GTP.' }],
      recap: `
- The **citric acid cycle** runs in the **mitochondrial matrix** (one step on the inner membrane) and starts when **acetyl-CoA + oxaloacetate** condense.
- **Per turn (per acetyl-CoA): 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂**; oxaloacetate is **regenerated** (it's a *cycle*).
- **Rate-limiting enzyme = isocitrate dehydrogenase** (also makes the **1st NADH** and **1st CO₂**).
- **Only direct substrate-level ATP/GTP** is at **succinyl-CoA synthetase** (Step 5); everything else fuels the ETC.
- The cycle **cannot run anaerobically** — without $\\text{O}_2$, NADH/FADH₂ pile up and **inhibit** it. **Energy products (ATP, NADH) inhibit; ADP/NAD⁺ activate.**
`,
      detail: `
#### Overview
The citric acid cycle takes place in the **mitochondrial matrix**. Acetyl-CoA couples to **oxaloacetate**; carbons are oxidized to $\\text{CO}_2$, and both **energy (GTP)** and **energy carriers (NADH, FADH₂)** are made while the other intermediates are **reused over and over**. Although $\\text{O}_2$ is not a direct reactant, the pathway **will not run anaerobically**: without the ETC to reoxidize them, NADH and FADH₂ accumulate and shut the cycle down.

#### The eight steps
Track the enzyme, the transformation, and the **payoff** at each step.

| Step | Enzyme | Reaction | Payoff |
|---|---|---|---|
| **1** | **Citrate synthase** | Acetyl-CoA + oxaloacetate → **citrate** (via citryl-CoA, then hydrolysis) | — (drives cycle forward) |
| **2** | **Aconitase** (needs **Fe²⁺**) | Citrate → *cis*-aconitate → **isocitrate** (isomerization) | — |
| **3** | **Isocitrate dehydrogenase** ⟵ *rate-limiting* | Isocitrate → oxalosuccinate → **α-ketoglutarate** | **1st NADH**, **1st CO₂** |
| **4** | **α-Ketoglutarate dehydrogenase complex** | α-Ketoglutarate + CoA → **succinyl-CoA** | **2nd NADH**, **2nd CO₂** |
| **5** | **Succinyl-CoA synthetase** | Succinyl-CoA → **succinate** (+ CoA–SH); $\\text{GDP} \\rightarrow \\text{GTP}$ | **1 GTP** (→ ATP) |
| **6** | **Succinate dehydrogenase** (on inner membrane) | Succinate → **fumarate** | **1 FADH₂** |
| **7** | **Fumarase** | Fumarate → **L-malate** (hydration of alkene) | — |
| **8** | **Malate dehydrogenase** | Malate → **oxaloacetate** (regenerated) | **3rd NADH** |

##### Step 1 — Citrate formation
![Figure 10.5 — Citrate formation: citrate synthase condenses acetyl-CoA with oxaloacetate.](${fig(1, 2).src})

**Citrate synthase** condenses acetyl-CoA + oxaloacetate into the intermediate **citryl-CoA**, whose hydrolysis yields **citrate + CoA–SH**. **Synthases** form bonds **without** major energy input; this hydrolysis step strongly favors the forward direction.

##### Step 3 — The rate-limiting, first-CO₂ step
**Isocitrate dehydrogenase** oxidizes isocitrate to **oxalosuccinate**, which is decarboxylated to **α-ketoglutarate + CO₂**. This is the **rate-limiting enzyme** of the cycle and produces the **first NADH and first CO₂** from cycle intermediates.

:::keyconcept
**Dehydrogenases** are **oxidoreductases** that transfer a **hydride ion (H⁻)** to an acceptor (usually **NAD⁺** or **FAD**). Whenever you see a *dehydrogenase* in aerobic metabolism, expect a **high-energy electron carrier (NADH or FADH₂)** to be produced.
:::

##### Steps 4–5 — Succinyl-CoA, the second CO₂, and the only GTP
The **α-ketoglutarate dehydrogenase complex** mirrors PDC in mechanism and cofactors and makes the **second CO₂ (last carbon lost)** and **second NADH**. Then **succinyl-CoA synthetase** hydrolyzes the high-energy **thioester** of succinyl-CoA, coupling that energy to phosphorylate **GDP → GTP** (substrate-level). **Nucleosidediphosphate kinase** then transfers Pᵢ from **GTP → ADP**, making **ATP** — the **only direct ATP** of the entire cycle.

![Figure 10.9 — Succinate formation: succinyl-CoA synthetase couples thioester hydrolysis to GTP synthesis.](${fig(1, 5).src})

:::keyconcept
**Synthase vs. synthetase.** A **synthase** (citrate synthase) forms bonds with **no** energy input. A **synthetase** (succinyl-CoA synthetase) **requires** energy input. One letter, one huge difference — read enzyme names carefully.
:::

##### Step 6 — The only membrane step
**Succinate dehydrogenase** oxidizes succinate → **fumarate**. It is a **flavoprotein** covalently bound to **FAD**, an **integral protein of the inner mitochondrial membrane** (the only cycle step *not* in the matrix). $\\text{FAD} \\rightarrow \\text{FADH}_2$, which yields **~1.5 ATP** (vs. ~2.5 ATP for NADH). FAD is used because succinate's reducing power is **too weak to reduce NAD⁺**.

##### Steps 7–8 — Regenerating oxaloacetate
**Fumarase** hydrates fumarate's alkene to **L-malate**; **malate dehydrogenase** then oxidizes malate to **oxaloacetate**, reducing the **third and final NAD⁺ → NADH**. Oxaloacetate is ready for another turn.

![Figure 10.10 — The final steps: succinate → fumarate → malate → oxaloacetate.](${fig(1, 6).src})

:::mnemonic
**Substrates of the cycle — "Please, Can I Keep Selling Seashells For Money, Officer?"**
**P**yruvate · **C**itrate · **I**socitrate · α-**K**etoglutarate · **S**uccinyl-CoA · **S**uccinate · **F**umarate · **M**alate · **O**xaloacetate.
:::

#### Net results and ATP yield
Adding the **PDC step** (1 NADH per pyruvate) to the cycle:

$$\\text{Acetyl-CoA} + 3\\,\\text{NAD}^+ + \\text{FAD} + \\text{GDP} + \\text{P}_i + 2\\,\\text{H}_2\\text{O} \\rightarrow 2\\,\\text{CO}_2 + \\text{CoA–SH} + 3\\,\\text{NADH} + 3\\,\\text{H}^+ + \\text{FADH}_2 + \\text{GTP}$$

Counting energy **per pyruvate** (1 PDC NADH + 3 cycle NADH = 4 NADH; 1 FADH₂; 1 GTP):

$$4\\,\\text{NADH} \\times 2.5 = 10\\ \\text{ATP} \\qquad 1\\,\\text{FADH}_2 \\times 1.5 = 1.5\\ \\text{ATP} \\qquad 1\\,\\text{GTP} = 1\\ \\text{ATP}$$

$$\\text{Total} = 12.5\\ \\text{ATP per pyruvate} = 25\\ \\text{ATP per glucose}$$

Add **glycolysis** (2 ATP + 2 NADH → ~7 more ATP) and the full aerobic yield is **30–32 ATP per glucose** (the range reflects cell-to-cell efficiency).

#### Regulation — energy products inhibit energy production
The recurring theme: **ATP and NADH (energy markers) inhibit; ADP, NAD⁺, and Ca²⁺ activate.**

##### Upstream: PDC regulation
- **PDH kinase** phosphorylates and **inhibits** PDH when **ATP** is high → less acetyl-CoA.
- **PDH phosphatase** dephosphorylates and **reactivates** PDH when **ADP** is high.
- **Acetyl-CoA** and **NADH** feedback-inhibit PDH (e.g., when fats already supply plenty of acetyl-CoA).

##### Three checkpoints within the cycle
![Figure 10.11 — Checkpoints and regulation of the citric acid cycle.](${fig(1, 7).src})

| Checkpoint enzyme | Inhibitors | Activators |
|---|---|---|
| **Citrate synthase** | **ATP, NADH, succinyl-CoA, citrate** | None |
| **Isocitrate dehydrogenase** *(rate-limiting)* | **ATP, NADH** | **ADP, NAD⁺** |
| **α-Ketoglutarate dehydrogenase complex** | **ATP, NADH, succinyl-CoA** | **ADP, Ca²⁺** |

:::keyconcept
It's the **ATP/ADP** and **NADH/NAD⁺ ratios** that set the cycle's pace. In a metabolically active cell, **ADP and NAD⁺ rise** as ATP and NADH fall → activation at every checkpoint → energy is replenished. Faced with "what inhibits enzyme X?", reason from the big picture: products of energy metabolism brake their own production.
:::
`
    },

    /* ─────────────── 10.3 The Electron Transport Chain ─────────────── */
    {
      id: 's3', num: '10.3', title: 'The Electron Transport Chain',
      goals: [
        'Connect the reactions of the electron transport chain to the generation of ATP',
        'Distinguish between the two shuttle mechanisms for NADH transport into the mitochondrion',
        'Recall the inputs, outputs, and major components of the four complexes of the electron transport chain'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 10.12 — Mitochondrial structure: the inner membrane folds into cristae that house the ETC; protons are pumped into the intermembrane space.' }],
      recap: `
- The **ETC** sits on the **inner mitochondrial membrane** (folded into **cristae**). It is the **proton gradient**, not electron flow itself, that ultimately makes ATP.
- Electrons flow by **increasing reduction potential**, ending at $\\text{O}_2$ (highest potential) → **$\\text{H}_2\\text{O}$**.
- **Complex I** (from **NADH**) and **Complex III** each pump **4 H⁺**; **Complex IV** pumps **2 H⁺**; **Complex II** (from **FADH₂/succinate**) pumps **none**.
- **Mobile carriers**: **CoQ (ubiquinone)** ferries electrons I/II → III; **cytochrome c** ferries III → IV.
- **NADH shuttles** move cytosolic NADH's electrons inside: **glycerol-3-phosphate shuttle → FADH₂ (~1.5 ATP)**; **malate–aspartate shuttle → NADH (~2.5 ATP)**.
`,
      detail: `
#### Mitochondrial structure
Eukaryotes run aerobic respiration in **mitochondria**; anaerobic glycolysis/fermentation happen in the **cytosol**. The **citric acid cycle** is in the **matrix**; the **oxidative-phosphorylation machinery** is embedded in the **inner membrane**, whose folds (**cristae**) maximize surface area. That inner membrane generates ATP via the **proton-motive force** — an **electrochemical proton gradient**.

The final stage is really **two coupled processes**: (1) **electron transport** along the inner membrane and (2) **ATP synthesis** by ADP phosphorylation. NADH and FADH₂ hand their electrons to carrier proteins; electrons ultimately reduce $\\text{O}_2$ (as **H⁻**) to **water**, and the energy released **pumps protons** from matrix → intermembrane space at three sites.

#### What sets the direction of electron flow
ATP formation is **endergonic**; electron transport is **exergonic** — coupling lets one drive the other. Electrons move by **reduction potential**: pair two molecules and the one with **higher reduction potential is reduced**. **NADH is a strong donor**; **$\\text{O}_2$ has very high reduction potential**, making it the perfect **final acceptor**. The chain is simply a series of redox handoffs.

![Figure 10.13 — Respiratory complexes on the inner mitochondrial membrane and the path of electrons through the mobile carriers.](${fig(2, 2).src})

#### The four complexes
| Complex | Name | Electron source → acceptor | Key carriers | H⁺ pumped |
|---|---|---|---|---|
| **I** | **NADH-CoQ oxidoreductase** | **NADH** → **CoQ** | **FMN** (flavoprotein), **Fe–S** cluster | **4** |
| **II** | **Succinate-CoQ oxidoreductase** | **Succinate/FADH₂** → **CoQ** | **FAD**, **Fe–S** (succinate dehydrogenase) | **0** |
| **III** | **CoQH₂-cytochrome c oxidoreductase** | **CoQH₂** → **cytochrome c** | **cytochromes** (Fe³⁺/Fe²⁺), **Fe–S**, **Q cycle** | **4** |
| **IV** | **Cytochrome c oxidase** | **cytochrome c** → **O₂** | **cyt a, a₃**, **Cu²⁺** | **2** |

##### Complex I — NADH-CoQ oxidoreductase
NADH transfers electrons to **FMN** (reducing it to FMNH₂); the **flavoprotein reoxidizes** as an **Fe–S** cluster is reduced; the Fe–S cluster then reduces **coenzyme Q (ubiquinone) → CoQH₂**. **Four protons** are pumped. Net:
$$\\text{NADH} + \\text{H}^+ + \\text{CoQ} \\rightarrow \\text{NAD}^+ + \\text{CoQH}_2$$

##### Complex II — Succinate-CoQ oxidoreductase
**Succinate dehydrogenase** (the same enzyme as cycle Step 6) oxidizes **succinate → fumarate**, reducing covalently bound **FAD → FADH₂**, which passes electrons through **Fe–S** to **CoQ**. **No protons are pumped** — the reason FADH₂-derived electrons yield **less ATP**. Net:
$$\\text{succinate} + \\text{CoQ} \\rightarrow \\text{fumarate} + \\text{CoQH}_2$$

:::keyconcept
**CoQ and cytochrome c are *mobile* carriers**, not part of any complex. Their freedom to move within the inner membrane lets them ferry electrons between complexes: **CoQ** shuttles I/II → III; **cytochrome c** shuttles III → IV.
:::

##### Complex III — CoQH₂-cytochrome c oxidoreductase
Also **cytochrome reductase**. Electrons pass from **CoQH₂ → cytochrome c** via the **Q cycle**. **Cytochromes** are heme proteins whose iron cycles **Fe³⁺ ⇌ Fe²⁺**; each transfers **one** electron, so **two cytochrome c** molecules are reduced per CoQH₂. The Q cycle pumps **four protons**. Net:
$$\\text{CoQH}_2 + 2\\ \\text{cyt c (Fe}^{3+}) \\rightarrow \\text{CoQ} + 2\\ \\text{cyt c (Fe}^{2+}) + 2\\,\\text{H}^+$$

##### Complex IV — cytochrome c oxidase
The finale: electrons go from **cytochrome c → O₂**, the **final acceptor**. Subunits **cytochrome a + a₃** (= cytochrome oxidase) plus **Cu²⁺** reduce $\\text{O}_2$ to **water**, pumping **two protons**. Net:
$$4\\ \\text{cyt c (Fe}^{2+}) + 4\\,\\text{H}^+ + \\text{O}_2 \\rightarrow 4\\ \\text{cyt c (Fe}^{3+}) + 2\\,\\text{H}_2\\text{O}$$

:::mnemonic
**Proton pumping per complex — "4-0-4-2":** Complex **I = 4**, **II = 0**, **III = 4**, **IV = 2**. (Complex II is the lone freeloader — it makes no contribution to the gradient.)
:::

:::keyconcept
**Cyanide** poisons **Complex IV** (cytochrome **a/a₃**): the anion binds the iron and blocks electron transfer to $\\text{O}_2$. Tissues most dependent on aerobic respiration — **heart** and **CNS** — are hit hardest.
:::

:::realworld
Unlike the cytochrome irons that cycle Fe²⁺/Fe³⁺, the iron in **hemoglobin's** heme **stays Fe²⁺** during normal oxygen transport.
:::

#### The proton-motive force
As **[H⁺] rises** in the intermembrane space, two things happen at once: **pH drops** and a **voltage difference** builds across the membrane. Together they form an **electrochemical gradient** — the **proton-motive force**. This stored energy is what **ATP synthase** will harness (Section 10.4).

#### NADH shuttles
Cytosolic NADH from glycolysis **cannot cross the inner membrane**, so its electrons need a **shuttle**. Which shuttle is used determines whether **1.5 or 2.5 ATP** results — the reason the per-glucose yield ranges **30–32 ATP**.

| Shuttle | Path | Enters ETC at | ATP / cytosolic NADH |
|---|---|---|---|
| **Glycerol-3-phosphate** | NADH → DHAP → glycerol-3-phosphate → **mitochondrial FAD → FADH₂** | **Complex II** | **~1.5** |
| **Malate–aspartate** | NADH → oxaloacetate → **malate** (crosses) → **mitochondrial NADH** (aspartate recycles OAA back) | **Complex I** | **~2.5** |

![Figure 10.14 — Glycerol-3-phosphate shuttle: electrons end up on mitochondrial FAD, entering at Complex II.](${fig(2, 4).src})

![Figure 10.15 — Malate–aspartate shuttle: electrons regenerate mitochondrial NADH, entering at Complex I.](${fig(2, 5).src})

:::bridge
**Glycerol 3-phosphate** links **lipid metabolism** (Chapter 11) and **glycolysis** (Chapter 9): it interconverts with **DHAP**, so the glycerol backbone of triacylglycerols can be shunted into glycolysis for energy.
:::

:::expertise
**Highly aerobic tissue (cardiac muscle) favors the malate–aspartate shuttle** — it conserves the full **2.5 ATP** per cytosolic NADH, maximizing yield. Less demanding tissue may use the cheaper glycerol-3-phosphate shuttle.
:::
`
    },

    /* ─────────────── 10.4 Oxidative Phosphorylation ─────────────── */
    {
      id: 's4', num: '10.4', title: 'Oxidative Phosphorylation',
      goals: [
        'Compare and contrast the ETC and oxidative phosphorylation',
        'Explain why the ETC generates more ATP than the direct reduction of oxygen by NADH'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 10.16 — ATP synthase: protons flow down their gradient through the F₀ channel; the F₁ portion uses that energy to phosphorylate ADP → ATP.' }],
      recap: `
- **Oxidative phosphorylation** = **ETC + ATP synthesis**, coupled. The ETC builds the proton gradient; **ATP synthase** spends it.
- **ATP synthase** spans the inner membrane: **F₀** is the **proton channel**; **F₁** **phosphorylates ADP → ATP**.
- **Chemiosmotic coupling**: proton flow through F₀ back into the matrix directly powers ATP synthesis ($\\Delta G^{\\circ\\prime} = -220\\ \\text{kJ/mol}$ as the gradient dissipates).
- Splitting electron transfer across complexes lets energy be captured at **many sites** → **more ATP** than one big NADH→O₂ drop.
- **Key regulators = $\\text{O}_2$ and ADP** (*respiratory control*); low $\\text{O}_2$ → NADH builds up → cycle inhibited.
`,
      detail: `
#### ATP synthase
We've reached the **payout site**: **ATP synthesis**. The link between electron transport and ATP is **ATP synthase**, a complex spanning the **inner mitochondrial membrane** and protruding into the **matrix**, with two functional parts:

| Portion | Location | Role |
|---|---|---|
| **F₀** | Spans the membrane | **Ion channel** — protons flow down the gradient (intermembrane space → matrix) |
| **F₁** | Protrudes into matrix | Uses the released energy to **phosphorylate ADP + Pᵢ → ATP** |

#### Chemiosmotic coupling
The **proton-motive force** drives protons through **F₀** back into the matrix; **chemiosmotic coupling** harnesses that chemical energy to **phosphorylate ADP → ATP**. In short: the ETC concentrates protons in the intermembrane space → protons flow through **F₀** → **F₁** makes ATP. As the gradient dissipates through F₀, $\\Delta G^{\\circ\\prime} = -220\\ \\text{kJ/mol}$ (highly exergonic) — neatly coupled to the **endergonic** phosphorylation of ADP.

**Chemiosmotic coupling** (proton gradient *directly* tied to ATP synthesis) is the **accepted model**. An alternative, **conformational coupling**, proposes an *indirect* link: ATP is released by a **conformational change** as the F₁ portion **spins like a turbine** within the gradient.

:::expertise
A classic Test-Day trap: a **pH drop** in the intermembrane space means a **rise** in **[H⁺]**, not a drop. Read mechanism questions actively — the gradient that powers ATP synthase is *more* protons (lower pH) outside the matrix.
:::

#### Why the ETC beats a single NADH→O₂ reduction
Directly reducing $\\text{O}_2$ with NADH would dump a huge amount of energy as **heat** in one step — wasteful. By **dividing electron transfer across multiple complexes**, the chain releases energy in **manageable increments**, building the proton gradient at **three sites**. A bigger gradient = more ATP. The split is the whole point.

:::realworld
**Uncouplers** (e.g., toxic doses of **salicylates/aspirin**) make the inner membrane **leaky to protons**, dissipating the gradient **without** ATP synthesis. ATP falls, ADP rises, and the body burns more fuel and consumes more $\\text{O}_2$ — releasing the energy as **heat** (the fever of salicylate toxicity).
:::

:::realworld
Only **13 of ~100 polypeptides** needed for oxidative phosphorylation are encoded by **mitochondrial DNA** — but mtDNA mutates **~10× faster** than nuclear DNA, so these few genes are a notable source of mitochondrial disease.
:::

#### Regulation — respiratory control
Because the citric acid cycle feeds the ETC, their rates are **tightly coordinated** (*respiratory control*). Think **$\\text{O}_2$ and ADP** as the key regulators:

- **Low $\\text{O}_2$** → oxidative phosphorylation slows → **NADH and FADH₂ accumulate** → **NADH inhibits** the citric acid cycle (at isocitrate dehydrogenase).
- **Adequate $\\text{O}_2$** → rate depends on **ADP**. ADP and ATP are **reciprocal**; rising **ADP signals an energy need** → **ADP activates isocitrate dehydrogenase** → more NADH/FADH₂ → faster electron transport and ATP synthesis.

#### Putting it together — energy yield per glucose
| Source | Carriers / ATP | ATP contribution |
|---|---|---|
| **Glycolysis** | 2 ATP + 2 NADH | 2 ATP (NADH via shuttles, counted below) |
| **PDC (×2 pyruvate)** | 2 NADH | — (in the 10 NADH) |
| **Citric acid cycle (×2)** | 6 NADH, 2 FADH₂, 2 GTP | 2 ATP (from GTP) |
| **10 NADH** | × 2.5 | **25 ATP** |
| **2 FADH₂** | × 1.5 | **3 ATP** |

$$2\\ (\\text{glycolysis}) + 2\\ (\\text{GTP}) + 25\\ (\\text{NADH}) + 3\\ (\\text{FADH}_2) = 32\\ \\text{ATP per glucose (optimal)}$$

Inefficiencies and shuttle choice make **30–32 ATP/glucose** the accepted range.

:::keyconcept
**ETC vs. oxidative phosphorylation are not synonyms.** The **ETC** is the set of inner-membrane redox complexes that transfer electrons to $\\text{O}_2$ and **build the proton gradient**. **Oxidative phosphorylation** is the **ATP synthesis** that **harnesses** that gradient via ATP synthase. The link between them is **NADH-dependent control**: when NADH accumulates, isocitrate dehydrogenase is inhibited, halting **both** the cycle and the ETC.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Acetyl-CoA',
        points: [
          'Acetyl-CoA holds a **high-energy thioester bond** whose hydrolysis can drive other reactions; it is the **common entry point** to the citric acid cycle.',
          'It forms from **pyruvate** via the **pyruvate dehydrogenase complex** — a **5-enzyme** complex in the **mitochondrial matrix** that is also **inhibited** by acetyl-CoA and NADH.',
          '**PDH** oxidizes pyruvate (releasing **CO₂**) using **TPP (vit. B₁)** + **Mg²⁺**; **dihydrolipoyl transacetylase** uses **lipoic acid** to pass the acetyl group to **CoA**; **dihydrolipoyl dehydrogenase** uses **FAD** to regenerate lipoic acid, ultimately forming **NADH**.',
          '**PDH kinase** turns PDH **off** (high ATP/acetyl-CoA); **PDH phosphatase** turns it **on** (high ADP).',
          'Acetyl-CoA can also come from **fatty acids** (carnitine shuttle → β-oxidation), **ketogenic amino acids**, **ketone bodies**, and **alcohol**.'
        ]
      },
      {
        section: 'Reactions of the Citric Acid Cycle',
        points: [
          'Runs in the **mitochondrial matrix**; its purpose is to **oxidize intermediate carbons to CO₂** while generating **NADH, FADH₂, and GTP**.',
          '**Citrate synthase** condenses acetyl-CoA + oxaloacetate → citrate; inhibited by **ATP, NADH, succinyl-CoA, citrate**.',
          '**Isocitrate dehydrogenase** is the **rate-limiting** step and makes the **1st CO₂ and 1st NADH**; inhibited by **ATP/NADH**, activated by **ADP/NAD⁺**.',
          'The **α-ketoglutarate dehydrogenase complex** (PDC-like) makes the **2nd CO₂ and 2nd NADH**; inhibited by **ATP, NADH, succinyl-CoA**, activated by **ADP, Ca²⁺**.',
          '**Succinyl-CoA synthetase** makes the **only GTP**; **succinate dehydrogenase** (inner membrane, **FAD**) makes the **only FADH₂**; **malate dehydrogenase** makes the **3rd NADH**.',
          '**Per turn: 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.**'
        ]
      },
      {
        section: 'The Electron Transport Chain',
        points: [
          'Located on the **inner mitochondrial membrane**; electrons pass complex-to-complex by **rising reduction potential**, ending at **O₂** (highest potential) → **water**.',
          '**Complex I** (NADH → FMN → Fe–S → CoQ) pumps **4 H⁺**.',
          '**Complex II** (succinate → FAD → Fe–S → CoQ) pumps **no** protons.',
          '**Complex III** (CoQH₂ → heme/cytochrome c via the **Q cycle**) pumps **4 H⁺**.',
          '**Complex IV** (cytochrome c → O₂, using **cytochromes a/a₃** + **Cu²⁺**) pumps **2 H⁺**.',
          'Cytosolic NADH must use a **shuttle**: **glycerol-3-phosphate** (→ FADH₂, enters at Complex II, ~1.5 ATP) or **malate–aspartate** (→ NADH, enters at Complex I, ~2.5 ATP).'
        ]
      },
      {
        section: 'Oxidative Phosphorylation',
        points: [
          'The **proton-motive force** is the electrochemical gradient built by the ETC across the inner membrane (more H⁺ in the intermembrane space) — stored energy for ATP synthesis via **chemiosmotic coupling**.',
          '**ATP synthase** makes ATP from **ADP + Pᵢ**: the **F₀** portion is a **proton channel**; the **F₁** portion uses the gradient energy to **phosphorylate ADP**.',
          'Splitting electron transfer across complexes captures energy at **multiple sites**, yielding **more ATP** than a single direct NADH → O₂ reduction.',
          'Regulated by **O₂ and ADP** (*respiratory control*); accumulated **NADH** inhibits the citric acid cycle, coupling the two pathways.'
        ]
      }
    ],
    mnemonics: [
      '**PDC / α-KG dehydrogenase cofactors — "Tender Loving Care For Nobody":** **T**PP, **L**ipoic acid, **C**oA, **F**AD, **N**AD⁺. Both complexes share all five.',
      '**Citric acid cycle substrates — "Please, Can I Keep Selling Seashells For Money, Officer?":** Pyruvate, Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate.',
      '**Proton pumping per complex — "4-0-4-2":** Complex I = **4**, II = **0**, III = **4**, IV = **2**. Complex II never contributes to the gradient.',
      '**Per turn of the cycle — "3-1-1-2":** **3** NADH, **1** FADH₂, **1** GTP, **2** CO₂ (per acetyl-CoA).',
      '**Carrier yields:** **NADH → 2.5 ATP**, **FADH₂ → 1.5 ATP** (the 1-unit gap = the protons skipped by entering at Complex II).',
      '**Synthase vs. synthetase:** a synth**ase** makes bonds with **no** energy (citrate synthase); a synthe**tase** needs energy (succinyl-CoA synthetase).',
      '**Shuttle yields:** **G**lycerol-3-phosphate = **G**ives less (→ FADH₂, ~1.5 ATP, Complex II); **M**alate–aspartate = **M**aximal (→ NADH, ~2.5 ATP, Complex I) — used by the heart.',
      '**Cyanide kills at Complex IV** — it binds cytochrome **a/a₃**, blocking the handoff to oxygen.'
    ],
    keyConcepts: [
      '**Energy products inhibit energy production:** ATP and NADH brake PDH, citrate synthase, isocitrate dehydrogenase, and the α-KG complex; ADP, NAD⁺, and Ca²⁺ activate. It is the **ATP/ADP and NADH/NAD⁺ ratios** that matter.',
      '**It is the proton gradient, not electron flow, that makes ATP.** The ETC builds the proton-motive force; ATP synthase spends it — that is why an uncoupler (leaky membrane) can keep electrons flowing yet stop ATP synthesis.',
      '**The cycle needs oxygen indirectly:** without the ETC to reoxidize NADH/FADH₂, they accumulate and shut the cycle down — so it cannot run anaerobically despite using no O₂ directly.',
      '**Aerobic yield ≈ 30–32 ATP/glucose**, and the *range* comes from which NADH shuttle the cell uses (malate–aspartate keeps the full 2.5 ATP; glycerol-3-phosphate loses a unit).',
      '**Follow the carbons:** glucose → 2 pyruvate (glycolysis) → 2 acetyl-CoA + 2 CO₂ (PDC) → 4 CO₂ (cycle). All six carbons of glucose ultimately leave as CO₂.'
    ],
    equations: [
      { name: 'Pyruvate dehydrogenase complex', tex: '\\text{pyruvate} + \\text{CoA–SH} + \\text{NAD}^+ \\rightarrow \\text{acetyl-CoA} + \\text{NADH} + \\text{CO}_2 + \\text{H}^+', note: 'Irreversible oxidative decarboxylation in the matrix (ΔG°′ = −33.4 kJ/mol). 1 NADH + 1 CO₂ per pyruvate.' },
      { name: 'Citric acid cycle (per acetyl-CoA)', tex: '\\text{acetyl-CoA} + 3\\,\\text{NAD}^+ + \\text{FAD} + \\text{GDP} + \\text{P}_i + 2\\,\\text{H}_2\\text{O} \\rightarrow 2\\,\\text{CO}_2 + \\text{CoA–SH} + 3\\,\\text{NADH} + \\text{FADH}_2 + \\text{GTP} + 3\\,\\text{H}^+', note: 'One turn: 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.' },
      { name: 'ATP per pyruvate (PDC + cycle)', tex: '\\underbrace{4\\,\\text{NADH} \\times 2.5}_{10} + \\underbrace{1\\,\\text{FADH}_2 \\times 1.5}_{1.5} + \\underbrace{1\\,\\text{GTP}}_{1} = 12.5\\ \\text{ATP}', note: '×2 pyruvate = 25 ATP per glucose from PDC + cycle.' },
      { name: 'Total aerobic ATP per glucose', tex: '2_{\\text{glycolysis}} + 2_{\\text{GTP}} + 25_{\\text{NADH}} + 3_{\\text{FADH}_2} = 32\\ \\text{ATP}', note: 'Optimal; 30–32 ATP is the accepted range (varies with NADH shuttle and cell efficiency).' },
      { name: 'P/O ratio (ATP per ½ O₂ reduced)', tex: '\\text{NADH} \\rightarrow \\tfrac{\\text{P}}{\\text{O}} \\approx 2.5 \\qquad \\text{FADH}_2 \\rightarrow \\tfrac{\\text{P}}{\\text{O}} \\approx 1.5', note: 'ATP made per pair of electrons (per oxygen atom reduced). NADH enters at Complex I (more H⁺ pumped) → higher P/O than FADH₂ (Complex II).' }
    ]
  },

  questions: raw.questions
};
