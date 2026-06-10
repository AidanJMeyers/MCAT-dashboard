// Biochem Chapter 8 — Biological Membranes. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are sourced from ch08.json / ch08.md;
// the recap/detail markdown is authored here.
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 8,
  title: 'Biological Membranes',
  subtitle: 'Fluid mosaic model · membrane components · membrane transport · specialized membranes',

  blocks: [
    /* ───────────────────────── 8.1 Fluid Mosaic Model ───────────────────────── */
    {
      id: 's1', num: '8.1', title: 'Fluid Mosaic Model',
      goals: [
        'Describe the functions of flippases and lipid rafts',
        'Order a given list of membrane components from least to most abundant'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 8.1 — The plasma membrane is a semipermeable phospholipid bilayer that regulates movement of solutes into and out of the cell.' }],
      recap: `
- The **cell (plasma) membrane** is a **semipermeable phospholipid bilayer** — its structure (two lipid layers) *is* its function (selective barrier).
- The **fluid mosaic model**: a *fluid* lipid bilayer studded with a *mosaic* of proteins, cholesterol, and carbohydrates that move within the plane of the membrane.
- **Fat-soluble** compounds cross easily; **large / water-soluble** compounds need channels or carriers.
- **Abundance (most → least): lipids > proteins > carbohydrates > nucleic acids** (nucleic acids essentially absent).
- **Flippases** flip phospholipids between the two leaflets (energetically costly); **lipid rafts** are signaling-rich lipid clusters.
`,
      detail: `
#### Structure = function
The plasma membrane is best summarized as a **semipermeable phospholipid bilayer**. That single phrase captures both halves of the story:

- **Structure** — two layers of **phospholipids** with embedded **proteins** and signaling **lipid rafts**; **carbohydrates** on membrane proteins form a **glycoprotein coat**.
- **Function** — a **selective barrier** that decides what enters and leaves. **Fat-soluble** compounds cross the nonpolar core easily, while **larger or water-soluble** compounds must use channels and carriers.

The theory underlying this architecture is the **fluid mosaic model**: the membrane is a two-dimensional **fluid** in which a **mosaic** of components is suspended and free to drift.

:::keyconcept
The **main function** of the cell membrane is to **protect the cell interior** from the external environment while selectively regulating traffic. Embedded **receptor proteins** also drive **signal transduction**, so the membrane is central to both **intracellular and intercellular communication**.
:::

#### Membrane dynamics
Although the membrane is a stable, semisolid barrier, on the molecular level it is in **constant flux**. Components move at different rates depending on size:

| Component | Movement | Speed |
|---|---|---|
| **Phospholipids** | Lateral, within the plane (simple diffusion) | **Fastest** (small) |
| **Lipid rafts & proteins** | Lateral, within the plane | **Slower** (bulkier) |
| **Lipids between leaflets** | Transverse "flip" across the bilayer | **Slowest** — energetically unfavorable |

- Lateral diffusion is so fast that **fusing two differently-tagged membranes** lets the tags **rapidly intermix**.
- Moving a lipid **between layers** is hard: the **polar head group** must be forced through the **nonpolar tail core**. Specialized enzymes called **flippases** catalyze this "flip."
- **Lipid rafts** are collections of similar lipids (± associated proteins) that serve as **attachment points** for other biomolecules and as **signaling** platforms.

##### Regulating membrane protein levels
The amount of each membrane protein is dynamic, controlled by **gene regulation**, **endocytotic activity**, and **protein insertion**. Signaling cells in particular **up- or downregulate receptors** to match cellular demand.

:::realworld
Many **antidepressants** raise neurotransmitter levels quickly, yet the clinical effect is **delayed by weeks**. The lag exists because the nervous system must still **upregulate postsynaptic receptors** to respond to the new neurotransmitter levels.
:::

:::mnemonic
**Membrane abundance — "Lots People Crave Naps":** **L**ipids > **P**roteins > **C**arbohydrates > **N**ucleic acids (most → least). Nucleic acids are essentially **absent** from the membrane.
:::
`
    },

    /* ─────────────────────── 8.2 Membrane Components ────────────────────── */
    {
      id: 's2', num: '8.2', title: 'Membrane Components',
      goals: [
        'Describe the role of cholesterol in cell membranes',
        'Define the three classes of membrane proteins: transmembrane, embedded, and membrane-associated proteins',
        'Differentiate between gap junctions, tight junctions, desmosomes, and hemidesmosomes',
        'Identify level of saturation, as well as the hydrophilic and hydrophobic portions of a phospholipid'
      ],
      images: [{ src: fig(1, 3).src, alt: fig(1, 3).alt, caption: 'Figure 8.4 — Plasma membrane proteins: transmembrane proteins span the bilayer; embedded proteins associate with one leaflet; membrane-associated (peripheral) proteins bind the surface.' }],
      recap: `
- **Lipids dominate** the membrane (by mass *and* mole fraction): mostly **phospholipids**, plus **cholesterol**, with very few free fatty acids; **waxes** are rare in animals.
- **Saturation = fluidity:** **unsaturated** fatty acids (kinks, double bonds) → *more* fluid; **saturated** and **trans** fats → *less* fluid.
- **Cholesterol is a fluidity buffer:** at **low temp** it *increases* fluidity (blocks crystallization); at **high temp** it *decreases* fluidity (restrains lipids).
- **3 protein classes:** **transmembrane** (span bilayer; channels/receptors) and **embedded** (one leaflet) are **integral**; **membrane-associated (peripheral)** bind the surface.
- **Carbohydrates** sit on the **extracellular** face → cell **recognition & signaling** (e.g., **ABO blood antigens**).
- **4 cell–cell junctions:** **gap** (communication), **tight** (watertight seal), **desmosome** & **hemidesmosome** (anchoring).
`,
      detail: `
#### Lipids — the primary component
The membrane is mostly **lipids** with some associated proteins and carbohydrates — hence the name **phospholipid bilayer**. The lineup: abundant **phospholipids**, very few **free fatty acids**, plus **cholesterol/steroids** (fluidity) and **waxes** (stability).

##### Fatty acids and triacylglycerols
- **Fatty acids** = a **hydrocarbon chain** + terminal **carboxyl group**.
- **Triacylglycerols (triglycerides)** = **three fatty acids esterified to glycerol**; storage lipids and **phospholipid precursors**.
- Chains are **saturated** or **unsaturated**:

| | **Saturated FA** | **Unsaturated FA** |
|---|---|---|
| Double bonds | None | One or more |
| Shape | Straight, packs tightly | **Kinked** at the double bond |
| State at room temp | **Solid** (e.g., animal fat) | **Liquid** (oils) |
| Effect on membrane | **↓ fluidity** | **↑ fluidity** |
| "Health" reputation | Less healthy | "Healthier" |

- Humans synthesize only a few unsaturated fatty acids; the rest are **essential fatty acids** from the diet (e.g., **α-linolenic acid**, **linoleic acid**), transported from the intestine inside **chylomicrons**.

:::realworld
**Trans fats** (from partial hydrogenation of unsaturated fats) are banned in some places. They **lower membrane fluidity** and tend to **accumulate as plaques** in blood vessels.
:::

##### Phospholipids
Replace **one fatty-acid tail** of a triacylglycerol with a **phosphate group** and you get a **glycerophospholipid** (a "phospholipid") — a **polar head** joined to **nonpolar tails**.

- Spontaneously assemble into **micelles** (monolayer) or **liposomes** (bilayer) via **hydrophobic interactions**.
- The phosphate provides an attachment point for water-soluble groups: **choline → phosphatidylcholine (lecithin)**; **inositol → phosphatidylinositol**.
- Roles: **membrane synthesis**, the hydrophilic surface of lipoproteins like **VLDL**, and **second messengers** in signal transduction.

![Figure 8.2 — Triacylglycerol vs. glycerophospholipid (phosphatidylinositol).](${fig(1, 1).src})

##### Sphingolipids
**Sphingolipids** are major membrane lipids that **lack glycerol** but still have a **hydrophilic region + two hydrophobic tails**. The classes differ in their **hydrophilic head group**.

![Figure 8.3 — The sphingolipids are built sequentially from a common backbone.](${fig(1, 2).src})

| Sphingolipid | Note |
|---|---|
| **Ceramide** | The simplest; precursor to the others |
| **Sphingomyelins** | Phosphodiester-linked head; in myelin |
| **Cerebrosides** | Single-sugar head group |
| **Gangliosides** | Complex oligosaccharide head group |

:::mnemonic
**Sphingolipids — "Cer Sphinx Cerebrates Gangs":** **Cer**amide, **Sphing**omyelin, **Cere**broside, **Gang**lioside. **ABO blood antigens** are sphingolipids that differ only in their **carbohydrate** sequence.
:::

:::expertise
The exact **sphingolipid-to-glycerophospholipid ratio** can identify a membrane, but **memorizing it is unnecessary** — if such a detail matters, a passage will provide it.
:::

#### Cholesterol and steroids
**Cholesterol** is both a fluidity regulator and the **precursor of all steroids**. Like phospholipids it has a **hydrophilic** and a **hydrophobic** region, letting it nestle among the bilayer lipids.

| Condition | Cholesterol's effect | Why |
|---|---|---|
| **Low temperature** | **↑ fluidity** | Occupies space between phospholipids → **prevents crystallization** |
| **High temperature** | **↓ fluidity** | **Restrains** phospholipid movement → holds membrane intact |

- It also **stabilizes** the membrane by interacting with both the **polar heads** and **fatty-acid tails** of adjacent phospholipids.
- By **mass**, cholesterol is ~**20%** of the membrane; by **mole fraction**, ~**50%** — a high ratio that keeps the membrane fluid.

:::keyconcept
Think of cholesterol as a **temperature buffer / fluidity stabilizer**: it pushes fluidity *up* when cold and *down* when hot, keeping the membrane in a workable range either way.
:::

##### Waxes
**Waxes** = a **long-chain fatty acid** + **long-chain alcohol** → very **hydrophobic**, **high melting point**. Rare in animal membranes (more common in plants), where they add **stability/rigidity in the tail region**; most waxes serve **extracellular** protection/waterproofing.

#### Proteins — three classes
The mosaic includes three protein types:

| Class | Location | Integral? | Typical function |
|---|---|---|---|
| **Transmembrane** | **Spans** the entire bilayer | **Integral** | **Transporters, channels, receptors** |
| **Embedded** | One leaflet only (cytoplasmic *or* extracellular) | **Integral** | Catalytic complexes; communication |
| **Membrane-associated (peripheral)** | Bound to the **surface** (electrostatic, often at lipid rafts) or to other proteins | **Peripheral** | Recognition molecules; signaling (e.g., **G proteins**) |

- **Transmembrane + embedded = integral proteins** (associate with the membrane interior via partially hydrophobic domains).
- **Membrane-associated** proteins may bind the bilayer electrostatically or latch onto integral proteins — e.g., the **G proteins** of **G protein–coupled receptors**.

##### Membrane receptors
- Often **transmembrane** proteins that activate/deactivate transporters or trigger signaling.
- **Ligand-gated ion channels** open a channel when a specific ligand binds.
- **G protein–coupled receptors (GPCRs)** drive many signal cascades.
- Most receptors are proteins, though some **carbohydrate/lipid** receptors exist (especially in viruses).

:::bridge
**Biosignaling** is a major membrane function — receptors and signal cascades are detailed in *MCAT Biochemistry Review*, Ch. 3.
:::

#### Carbohydrates
**Carbohydrates** attach to proteins on the **extracellular** surface.

![Figure 8.5 — Extracellular membrane-associated carbohydrates: *S. aureus* embedded in a biofilm of polysaccharides and glycolipids.](${fig(1, 4).src})

- Being **hydrophilic**, glycoprotein–water interactions form a **coat** around the cell.
- Act as **signaling and recognition** molecules; e.g., **ABO blood-group antigens** on RBCs differ only in carbohydrate sequence.
- The immune system *and* some **pathogens** exploit these carbohydrates to target specific cells.

#### Cell–cell junctions
Cells in a tissue join via **intercellular junctions**, generally built from **cell adhesion molecules (CAMs)** — proteins for recognition, differentiation, and development.

![Figure 8.6 — A gap junction (connexon): six connexin monomers form a pore for solute exchange between cells.](${fig(1, 5).src})

| Junction | Also called | Function | Structure / location |
|---|---|---|---|
| **Gap junction** | **Connexon** | **Direct cell–cell communication** — passes water & small solutes (not proteins) | **6 connexins** per pore; in **discontinuous bunches** |
| **Tight junction** | — | **Watertight seal** preventing **paracellular** transport; can sustain a **transepithelial voltage** | **Continuous band** around epithelial cells |
| **Desmosome** | — | **Anchors** adjacent cells together | Transmembrane proteins tied to **intermediate filaments**; between epithelial layers |
| **Hemidesmosome** | — | Anchors epithelial cells to the **basement membrane** | Like a "half" desmosome, attaching cell to matrix |

![Figure 8.7 — Desmosomes anchor adjacent cells by linking to their intermediate filaments.](${fig(1, 6).src})

:::mnemonic
**Junction jobs:** **G**ap = **G**ossip (communication) · **T**ight = wa**T**ertight seal (no leaks) · **Desmo**some = **"desmos" = bond** (anchors cells to each other) · **Hemi**desmosome = **half** a desmosome → anchors cell **down** to the basement membrane.
:::

:::bridge
**Tight junctions** line the **renal tubules**, restricting solute/water passage without cellular control. Nephrons are covered in *MCAT Biology Review*, Ch. 10.
:::
`
    },

    /* ───────────────────────── 8.3 Membrane Transport ───────────────────────── */
    {
      id: 's3', num: '8.3', title: 'Membrane Transport',
      goals: [
        'Explain the driving factors behind passive transport mechanisms',
        'Contrast symport and antiport mechanisms for active transport',
        'Relate osmotic pressure to the direction of osmosis'
      ],
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 8.10 — Membrane transport processes: solute movement across the membrane is governed by concentration gradients (passive) or by energy input (active).' }],
      recap: `
- **Passive transport** (no energy, **−ΔG**): moves **down** the gradient — driven mainly by **entropy (↑ΔS)**. Includes **simple diffusion, osmosis, facilitated diffusion**.
- **Active transport** (energy required, **+ΔG**): moves **against** the gradient. **Primary** = direct **ATP** (ATPase); **secondary** = uses an existing **ion gradient** (no direct ATP).
- **Facilitated diffusion** is passive but needs **channels/carriers** for large, polar, or charged solutes.
- **Osmosis** = diffusion of **water** toward **higher solute** concentration. **Osmotic pressure** $\\Pi = iMRT$ — a **colligative** property; a "sucking" pressure pulling water in.
- **Tonicity:** **hypertonic** (cell shrinks) · **hypotonic** (cell swells/lyses → "O") · **isotonic** (no *net* movement).
- **Secondary active transport: symport** = same direction; **antiport** = opposite directions.
- **Endocytosis** brings material **in** (pinocytosis = fluid, phagocytosis = solids); **exocytosis** secretes material **out**.
`,
      detail: `
#### Concentration gradients drive everything
The membrane controls traffic but varies in selectivity. **Small nonpolar molecules** diffuse rapidly; **ions and large molecules** need help. All transport is classified by **thermodynamics**:

| | **Passive transport** | **Active transport** |
|---|---|---|
| Spontaneous? | **Yes** (negative ΔG) | **No** (positive ΔG) |
| Energy needed? | **No** | **Yes** |
| Direction vs. gradient | **Down** the gradient | **Against** the gradient |
| Main driver | Increase in **entropy (ΔS)** | ATP or an ion gradient |
| Temperature | Rate **rises** with temp | May or may not depend on temp (depends on **ΔH**) |

:::expertise
**All transmembrane movement is based on concentration gradients** — an MCAT favorite. The gradient tells you whether a process is **passive** (with the gradient) or **active** (against it).
:::

#### Passive transport
Passive processes use the **concentration gradient itself** as the energy source — no intracellular ATP.

##### Simple diffusion
- **Simple diffusion** = freely permeable particles move **down** their gradient **directly across** the membrane.
- Analogy: a **ball rolling downhill** — potential energy in the gradient is dissipated as it equalizes.

##### Osmosis
**Osmosis** is simple diffusion of **water**: water moves from **low solute** (high water) to **high solute** (low water) concentration. It matters most when the **solute is impermeable**, so water moves to equalize concentrations instead.

![Figure 8.8 — Osmosis: water moves from low-solute (high-water) to high-solute (low-water) regions.](${fig(2, 1).src})

| Solution (relative to cell) | Solute outside | Water movement | Effect on cell |
|---|---|---|---|
| **Hypotonic** | **Lower** than cell | **Into** the cell | **Swells**, may **lyse** |
| **Hypertonic** | **Higher** than cell | **Out of** the cell | **Shrinks** |
| **Isotonic** | **Equal** | No **net** movement | No net size change |

*Isotonicity prevents **net** movement, not all movement* — water still crosses both ways, but the cell neither gains nor loses water overall.

:::mnemonic
**hyp-O-tonic → O:** a cell in a **hypOtonic** solution swells into a giant letter **"O"** as water rushes in. (Hyp**ER**tonic → water **EXits**.)
:::

:::realworld
**Never give pure water IV.** RBCs sit near **300 mOsm/L**; pure water is **0 mOsm/L**, so water would rush in and **lyse** the cells. Clinicians use **saline** or **dextrose** solutions instead.
:::

###### Osmotic pressure
**Osmotic pressure (Π)** quantifies the driving force of osmosis. Across a semipermeable membrane, water flows toward the solute side, raising its level until **hydrostatic pressure** balances the inflow. That balancing pressure is the osmotic pressure:

$$\\Pi = iMRT$$

| Symbol | Meaning |
|---|---|
| $i$ | **van 't Hoff factor** — particles per dissolved molecule ($i_{\\text{glucose}}=1$; $i_{\\text{NaCl}}=2$) |
| $M$ | **Molarity** of the solution |
| $R$ | Ideal gas constant |
| $T$ | Absolute **temperature** (K) |

![Figure 8.9 — Net water flow into the solute compartment raises its level until osmotic pressure balances the influx.](${fig(2, 2).src})

- Osmotic pressure is a **colligative property** — it depends on the **number** of dissolved particles, **not** their identity. (Others: **vapor-pressure depression**, **boiling-point elevation**, **freezing-point depression**.)
- In cells, this pressure pushes on the **membrane** rather than against gravity; if it exceeds what the membrane can withstand, the cell **lyses**.
- Best pictured as a **"sucking" pressure** drawing water *in*, proportional to solute concentration.

:::keyconcept
Unless stated otherwise, a **semipermeable membrane** follows biological rules: **small, nonpolar, lipid-soluble particles (and water) pass freely**; **large, polar, or charged particles cannot**.
:::

##### Facilitated diffusion
**Facilitated diffusion** is simple diffusion for molecules that **can't cross alone** (large, polar, or charged) — the energy barrier is too high. It requires **integral membrane proteins**:

| Transporter | Behavior | Analogy / kinetics |
|---|---|---|
| **Carrier** | Open to **one side at a time**; binding triggers a **conformational change** through an **occluded state** | **Revolving door** — slower |
| **Channel** | In **open** form, exposed to **both sides** at once | **Tunnel** — much faster transport |

Still **passive** — no energy needed; the solute moves **down** its gradient.

#### Active transport
**Active transport** moves a solute **against** its gradient — "rolling the ball **uphill**." It always needs energy, but the source differs:

| | **Primary active transport** | **Secondary active transport** (coupled) |
|---|---|---|
| Energy source | **Directly hydrolyzes ATP** | An existing **electrochemical gradient** (no direct ATP) |
| Machinery | **Transmembrane ATPase** | Coupled carrier |
| How it works | ATP powers transport directly | One particle going **down** its gradient drives another **up** its gradient |
| Example | **Na⁺/K⁺ ATPase** → neuron membrane potential | **Na⁺-driven** kidney reabsorption/secretion |

Secondary active transport has two flavors based on **direction**:

| Type | Direction of the two particles |
|---|---|
| **Symport** | **Same** direction across the membrane |
| **Antiport** | **Opposite** directions |

:::mnemonic
**Sym = Same; Anti = Against.** **Sym**port → both solutes travel the **same** way; **anti**port → they go **opposite** ways.
:::

##### Summary of transport processes (Table 8.1)
| Process | Gradient of solute | Membrane protein? | Energy? | Example solute |
|---|---|---|---|---|
| **Simple diffusion** | High → Low | **No** | **No** (passive) | Small nonpolar (**O₂, CO₂**) |
| **Osmosis** | Low → High (water) | **No** | **No** (passive) | **H₂O** |
| **Facilitated diffusion** | High → Low | **Yes** | **No** (passive) | Polar (**glucose**) or ions (**Na⁺, Cl⁻**) |
| **Active transport** | Low → High | **Yes** | **Yes** (active) | Ions (**Na⁺, Cl⁻, K⁺**) |

#### Endocytosis and exocytosis
For bulk material, the membrane itself moves:

| Process | Direction | Detail |
|---|---|---|
| **Endocytosis** | **Into** the cell | Membrane **invaginates** and engulfs material into a **vesicle** |
| → **Pinocytosis** | In | Endocytosis of **fluids** and dissolved particles ("cell drinking") |
| → **Phagocytosis** | In | Ingestion of **large solids** (e.g., bacteria) ("cell eating") |
| **Exocytosis** | **Out of** the cell | **Secretory vesicles fuse** with the membrane, releasing contents |

- Endocytosis often starts with **substrate binding to specific receptors**; invagination is then carried out by vesicle-coating proteins, notably **clathrin**.
- **Exocytosis** is vital in the **nervous system** — e.g., release of **neurotransmitters** from **synaptic vesicles**.

![Figure 8.11 — Endocytosis brings material into the cell in a vesicle; exocytosis fuses a vesicle with the membrane to release contents.](${fig(2, 4).src})

:::mnemonic
**"phaGo = Go big" (solids); "pino = pinot/drink" (fluids).** **Endo** = **enter** the cell; **exo** = **exit**.
:::
`
    },

    /* ───────────────────────── 8.4 Specialized Membranes ───────────────────────── */
    {
      id: 's4', num: '8.4', title: 'Specialized Membranes',
      goals: [
        'Identify the channels involved in maintenance of the resting membrane potential',
        'Calculate resting membrane potential using the Nernst equation',
        'Distinguish between the different regions of the mitochondrion'
      ],
      recap: `
- Most organelle membranes resemble the plasma membrane, but some are **specialized** (e.g., the muscle **sarcolemma**, the **mitochondrion**).
- **Membrane potential ($V_m$)** = electrical difference across the membrane; **rest ≈ −40 to −80 mV**, up to **+35 mV** during depolarization.
- The **Na⁺/K⁺ ATPase** pumps **3 Na⁺ out / 2 K⁺ in** → net **−1 charge** out → maintains the **negative resting potential**; **leak channels** (more K⁺ than Na⁺) let ions drift back.
- **Nernst equation** gives one ion's equilibrium potential; **Goldman–Hodgkin–Katz** combines all major ions (Cl⁻ inverted).
- **Mitochondrion:** **outer membrane** = very permeable (large pores); **inner membrane** = restricted, folded into **cristae**, rich in **cardiolipin**, and **lacks cholesterol**.
`,
      detail: `
#### Specialized membranes
Most organelle membranes match the plasma membrane in composition, but some are tuned for a job:

- The **sarcolemma** of muscle cells must hold a **membrane potential** so contraction can occur.
- The **mitochondria** alter composition substantially (see below).

#### Membrane potential
Selective ion impermeability + selective ion channels create an **electrochemical gradient** across the membrane. The voltage difference is the **membrane potential ($V_m$)**.

- **Resting potential** for most cells: **−40 to −80 mV**; can spike to **+35 mV** during **depolarization**.
- Maintaining it **costs energy**, because ions slowly **leak** back through **leak channels** — so a pump (the **Na⁺/K⁺ ATPase**) must keep restoring the gradient. **Cl⁻** also contributes.

##### The Nernst equation
The **Nernst equation** gives the equilibrium potential set by a **single ion's** gradient:

$$E = \\frac{RT}{zF}\\ln\\frac{[\\text{ion}]_{\\text{outside}}}{[\\text{ion}]_{\\text{inside}}} = \\frac{61.5}{z}\\log\\frac{[\\text{ion}]_{\\text{outside}}}{[\\text{ion}]_{\\text{inside}}}$$

- $z$ = ion charge; $F$ = Faraday constant ($\\approx 96{,}485\\ \\text{C/mol}$).
- The shortcut to **61.5** assumes **body temperature (310 K)**.

##### Goldman–Hodgkin–Katz equation
The **GHK voltage equation** extends Nernst to **all major ions at once**, weighting each by its **permeability ($P$)**:

$$V_m = 61.5\\log\\frac{P_{\\text{Na}^+}[\\text{Na}^+]_{\\text{out}} + P_{\\text{K}^+}[\\text{K}^+]_{\\text{out}} + P_{\\text{Cl}^-}[\\text{Cl}^-]_{\\text{in}}}{P_{\\text{Na}^+}[\\text{Na}^+]_{\\text{in}} + P_{\\text{K}^+}[\\text{K}^+]_{\\text{in}} + P_{\\text{Cl}^-}[\\text{Cl}^-]_{\\text{out}}}$$

:::keyconcept
**Chloride is inverted** relative to Na⁺ and K⁺ in the GHK equation because it carries a **negative charge** — its "outside" term sits in the **denominator** and its "inside" term in the **numerator**.
:::

:::bridge
The membrane behaves like a **capacitor**: opposite charges held on either side. Capacitance is discussed in *MCAT Physics and Math Review*, Ch. 6.
:::

#### The sodium–potassium pump
At rest there is a **steady state** between ion leak and the **Na⁺/K⁺ ATPase**:

- The pump moves **3 Na⁺ out** for every **2 K⁺ in**, keeping **intracellular Na⁺ low** and **K⁺ high**.
- Net export of **one positive charge** per cycle → sustains the **negative resting potential**.
- **Leak channels** let Na⁺ and K⁺ drift down their gradients; membranes are **more permeable to K⁺** (more K⁺ leak channels).
- **Pump + leak channels together** → a stable resting membrane potential.

:::mnemonic
**"3 out, 2 in — pump's a thief":** the Na⁺/K⁺ ATPase ejects **3 Na⁺** and admits **2 K⁺**, stealing **one net positive charge** from the cell each cycle to keep the inside **negative**.
:::

#### Mitochondrial membranes
Mitochondria (the **"powerhouse"**) make ATP by oxidative respiration and have **two membranes** with very different properties:

| Feature | **Outer membrane** | **Inner membrane** |
|---|---|---|
| Permeability | **High** — large pores pass ions & small proteins | **Restricted** |
| Surface area | Smooth | Folded into **cristae** (↑ surface area) |
| Key proteins | — | **Electron transport chain** & **ATP synthase** |
| Encloses | The **intermembrane space** | The **mitochondrial matrix** (citric acid cycle) |
| Special lipids | — | High **cardiolipin**; **no cholesterol** |

- The **outer membrane** surrounds the inner, with the **intermembrane space** between them.
- The **inner membrane** encloses the **matrix**, where the **citric acid cycle** generates the high-energy electron carriers used by the ETC.

:::keyconcept
The **inner mitochondrial membrane lacks cholesterol** — unusual among biological membranes. Note also there is **no pH gradient between the cytoplasm and the intermembrane space**, because the highly permeable **outer membrane** lets protons equilibrate; the **proton-motive force** sits across the **inner** membrane.
:::

:::bridge
The inner-membrane proteins of the **electron transport chain** and **ATP synthesis** are detailed in *MCAT Biochemistry Review*, Ch. 10.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Fluid Mosaic Model',
        points: [
          'The **fluid mosaic model** describes a **dynamic, semisolid** plasma membrane of **lipids, proteins, and carbohydrates** surrounding the cell.',
          'Proteins are **embedded within the phospholipid bilayer**; the membrane is **not static**.',
          'Lipids move **freely in the plane** of the membrane and can assemble into **lipid rafts**.',
          '**Flippases** maintain **bidirectional transport of lipids between the two leaflets** (otherwise energetically unfavorable).',
          'Proteins and carbohydrates also move within the membrane but are **slowed by their larger size**.'
        ]
      },
      {
        section: 'Membrane Components',
        points: [
          '**Lipids are the primary component** (by mass *and* mole fraction); **triacylglycerols/free fatty acids** are minor and act as **phospholipid precursors**.',
          '**Glycerophospholipids** swap one fatty acid for a **phosphate** + hydrophilic group; **cholesterol** is abundant and tunes **fluidity & stability**; **waxes** are minimal (mostly plants).',
          'Three protein classes: **transmembrane** (receptors/channels), **embedded** (catalytic), **membrane-associated/peripheral** (recognition/enzymes).',
          '**Carbohydrates** form a protective **glycoprotein coat** and mediate **cell recognition**; membrane **receptors** bind extracellular ligands.',
          'Junctions: **gap** (rapid ion/small-molecule exchange), **tight** (block paracellular transport), **desmosomes/hemidesmosomes** (anchor epithelial layers).'
        ]
      },
      {
        section: 'Membrane Transport',
        points: [
          '**Concentration gradients** determine the appropriate transport mechanism; **osmotic pressure** (a colligative "sucking" pressure) expresses solution concentration.',
          '**Passive transport** needs no energy — solute moves **down** its gradient: **simple diffusion** (no protein), **osmosis** (water), **facilitated diffusion** (transport proteins for impermeable solutes).',
          '**Active transport** needs energy — **primary** (ATP) or **secondary** (existing ion gradient); secondary is **symport** (same direction) or **antiport** (opposite).',
          '**Endocytosis** engulfs material in (**pinocytosis** = liquid, **phagocytosis** = solids); **exocytosis** releases material out — all via the membrane.'
        ]
      },
      {
        section: 'Specialized Membranes',
        points: [
          'Membrane composition is fairly consistent, but some cells have **specialized membranes**.',
          '**Membrane potential** is maintained by the **Na⁺/K⁺ pump** and **leak channels**.',
          'A single ion\'s potential is found with the **Nernst equation**; the full resting potential uses the **Goldman–Hodgkin–Katz equation** (derived from Nernst).',
          'The **outer mitochondrial membrane** is highly permeable; the **inner membrane** encloses the **matrix** (citric acid cycle / ETC) and **lacks cholesterol**.'
        ]
      }
    ],
    mnemonics: [
      '**Membrane abundance — "Lots People Crave Naps":** **L**ipids > **P**roteins > **C**arbohydrates > **N**ucleic acids (most → least; nucleic acids essentially absent).',
      '**Sphingolipids — "Cer-Sphing-Cere-Gang":** **Cer**amide → **Sphing**omyelin → **Cere**broside → **Gang**lioside (increasing head-group complexity).',
      '**Junction jobs:** **G**ap = **G**ossip (communication) · **T**ight = wa**T**ertight seal · **Desmo**some = bond (cell-to-cell anchor) · **Hemi**desmosome = anchors cell down to the basement membrane.',
      '**hyp-O-tonic → O:** a cell in **hypOtonic** solution swells into a big "**O**" as water enters; **hypERtonic** → water **EXits** and the cell shrinks.',
      '**Sym = Same, Anti = Against:** in secondary active transport, **sym**port moves both solutes the **same** way; **anti**port moves them **opposite** ways.',
      '**Endo/exo + cyto-:** **endo**cytosis = in (**phaGo** = solids, **pino** = fluids); **exo**cytosis = out.',
      '**Na⁺/K⁺ ATPase — "3 out, 2 in":** pumps **3 Na⁺ out / 2 K⁺ in**, exporting **one net + charge** to keep the cell interior **negative**.'
    ],
    keyConcepts: [
      '**Structure = function:** a *semipermeable phospholipid bilayer* both **defines** the cell and **selects** what crosses — fat-soluble in freely, large/polar via channels & carriers.',
      '**Cholesterol is a fluidity buffer:** it **raises** fluidity in the cold (blocks crystallization) and **lowers** it in the heat (restrains lipids), keeping the membrane workable across temperatures.',
      '**Passive vs. active hinges on the gradient & ΔG:** down-gradient = passive (−ΔG, entropy-driven); against-gradient = active (+ΔG, needs ATP or an ion gradient).',
      '**Osmosis follows solute:** water moves toward **higher solute** concentration; **osmotic pressure $\\Pi = iMRT$** is colligative — it depends on particle **number**, not identity.',
      '**The inner mitochondrial membrane is the oddball:** **cristae**, high **cardiolipin**, **no cholesterol**, and low permeability — it, not the porous outer membrane, holds the proton-motive force.'
    ],
    equations: [
      { name: 'Osmotic pressure', tex: '\\Pi = iMRT', note: 'Colligative property; i = van ’t Hoff factor (particles per molecule), M = molarity, R = gas constant, T = absolute temperature.' },
      { name: 'Nernst equation', tex: 'E = \\dfrac{RT}{zF}\\ln\\dfrac{[\\text{ion}]_{\\text{out}}}{[\\text{ion}]_{\\text{in}}} = \\dfrac{61.5}{z}\\log\\dfrac{[\\text{ion}]_{\\text{out}}}{[\\text{ion}]_{\\text{in}}}', note: 'Equilibrium potential from a single ion’s gradient; the 61.5 shortcut assumes body temperature (310 K). z = ion charge, F = Faraday constant.' },
      { name: 'Goldman–Hodgkin–Katz', tex: 'V_m = 61.5\\log\\dfrac{P_{\\text{Na}^+}[\\text{Na}^+]_{\\text{out}} + P_{\\text{K}^+}[\\text{K}^+]_{\\text{out}} + P_{\\text{Cl}^-}[\\text{Cl}^-]_{\\text{in}}}{P_{\\text{Na}^+}[\\text{Na}^+]_{\\text{in}} + P_{\\text{K}^+}[\\text{K}^+]_{\\text{in}} + P_{\\text{Cl}^-}[\\text{Cl}^-]_{\\text{out}}}', note: 'Resting potential from all major ions weighted by permeability P; chloride is inverted because it is negatively charged.' }
    ]
  },

  questions: raw.questions
};
