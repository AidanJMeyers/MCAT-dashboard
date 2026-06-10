// Biochem Chapter 5 — Lipid Structure and Function. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are sourced from ch05.json / ch05.md;
// the recap/detail markdown is authored here.
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 5,
  title: 'Lipid Structure and Function',
  subtitle: 'Structural lipids · signaling lipids · energy storage',

  blocks: [
    /* ───────────────────────── 5.1 Structural Lipids ───────────────────────── */
    {
      id: 's1', num: '5.1', title: 'Structural Lipids',
      goals: [
        'Recall the major structural traits of phospholipids, glycerophospholipids, and sphingolipids',
        'Recognize how membrane lipid structure contributes to overall membrane structure and function',
        'Distinguish between the three types of sphingolipids',
        'Identify the polar and nonpolar regions of lipids'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 5.1 — Amphipathic membrane lipids self-assemble into liposomes, micelles, and the phospholipid bilayer in aqueous solution.' }],
      recap: `
- **Membrane lipids are amphipathic**: a **hydrophilic (polar) head** + **hydrophobic (nonpolar) fatty-acid tails** → spontaneously form **micelles, liposomes, and bilayers** in water.
- **Phospholipids** = polar **phosphate + alcohol** head joined to fatty-acid tail(s) by a **phosphodiester linkage**; classified by backbone (**glycerol** → glycerophospholipids; **sphingosine** → sphingolipids).
- **Saturation drives behavior**: **saturated** tails (single bonds) pack tightly → **solid, less fluid**; **unsaturated** tails (kinked double bonds) → **liquid, more fluid**.
- **Head group = function** (recognition, signaling, binding); **fatty-acid tails = structure** (bulk of the bilayer).
- **4 sphingolipids** (sphingosine backbone): **ceramide → sphingomyelin → cerebroside/globoside → ganglioside** (increasing complexity).
- **Waxes** = long-chain fatty acid **esterified** to long-chain alcohol; protective coating in plants/animals.
`,
      detail: `
#### Amphipathic membrane lipids
Lipids are the major component of the **phospholipid bilayer**, the structure that separates the cell interior from its environment. Each membrane component is **amphipathic** — it has both a **hydrophilic** and a **hydrophobic** region:

- **Polar head** = the **hydrophilic** region (interacts with water).
- **Fatty-acid tails** = the **hydrophobic** region (excluded from water).

In aqueous solution these molecules spontaneously arrange so the hydrophobic regions cluster internally while the hydrophilic regions face the water, producing **liposomes**, **micelles**, and the **phospholipid bilayer**.

:::bridge
Although phospholipids are the largest component of the bilayer, **nonphospholipids like glycolipids** also matter — they participate in **cell recognition and signaling** (*MCAT Biochemistry Review*, Ch. 3).
:::

#### Phospholipids
**Phospholipids** contain a **phosphate** and an **alcohol** that make up the **polar head group**, joined to a hydrophobic fatty-acid tail by **phosphodiester linkages**. They are classified by the **backbone** on which they are built:

| Class | Backbone | Phospholipid? |
|---|---|---|
| **Glycerophospholipids** (phosphoglycerides) | **Glycerol** (3-carbon alcohol) | Always |
| **Sphingolipids** | **Sphingosine** / sphingoid | Only *some* (those with a phosphodiester bond) |

*One key catch:* **not all sphingolipids are phospholipids** — only those containing a phosphodiester linkage.

##### Saturation and chain length
Every membrane lipid shares a tail of **long-chain fatty acids**. Two properties — **degree of saturation** and **length** — dictate how the molecule behaves:

| Property | **Saturated fatty acid** | **Unsaturated fatty acid** |
|---|---|---|
| Bonds | **Only single bonds** (each carbon bonded to 4 atoms, no π bonds) | **≥1 double bond** |
| Shape | Straight, stacks tightly | **Kinked** — cannot stack |
| Van der Waals forces | **Greater**, more stable | Weaker |
| State at room temp | **Solid** (e.g., butter) | **Liquid** (e.g., olive oil) |
| Effect on bilayer | Less fluid, rigid regions | **More fluid** regions |

:::keyconcept
**Lipid properties — for every category of lipid — are set by (1) the degree of saturation of the fatty-acid chains and (2) the functional groups bonded to those chains.**
:::

:::mnemonic
**Saturated = Solid, Straight, Stacks** (think **s**tick of butter). Double bonds put a *kink* in the hose so the chains can't line up — unsaturated fats stay *liquid*.
:::

#### Glycerophospholipids
**Glycerophospholipids** (phosphoglycerides) are **all phospholipids**, yet not all phospholipids are glycerophospholipids. They specifically contain:

- a **glycerol backbone**,
- bonded by **ester linkages** to **two fatty acids**,
- and by a **phosphodiester linkage** to a highly polar **head group**.

![Figure 5.2 — Glycerophospholipid: glycerol backbone, two fatty-acid tails, phosphodiester-linked head group (X).](${fig(0, 4).src})

Because the **head group determines membrane surface properties**, glycerophospholipids are **named for their head group**:

| Glycerophospholipid | Head group |
|---|---|
| **Phosphatidylcholine** | Choline |
| **Phosphatidylethanolamine** | Ethanolamine |

The head group may be **positively charged, negatively charged, or neutral**. These surface properties make glycerophospholipids vital to **cell recognition, signaling, and binding**.

:::realworld
The **ABO** and **Rh** blood-typing systems, developed in the 20th century, are built on **cell-surface antigens**. Their discovery made safe **blood transfusions** possible for surgery, trauma, and clotting disorders like **hemophilia**.
:::

#### Sphingolipids
**Sphingolipids** have a **sphingosine** (or sphingoid) backbone instead of glycerol, plus long nonpolar tails and polar head groups. Many are **phospholipids** (they contain a phosphodiester linkage); others contain **glycosidic linkages to sugars** — *any lipid linked to a sugar is a* **glycolipid**. They split into **four subclasses by head group**:

![Figure 5.3 — The four sphingolipids by head group: ceramide (H), sphingomyelin (phosphodiester), cerebroside (one sugar), ganglioside (oligosaccharide + sialic acid).](${fig(0, 5).src})

| Sphingolipid | Head group | Phospholipid or glycolipid? | Charge / notes |
|---|---|---|---|
| **Ceramide** | Single **hydrogen** atom | — (simplest) | The base sphingolipid |
| **Sphingomyelin** | **Phosphocholine** or **phosphoethanolamine** | **Phospholipid** (sphingophospholipid) | **No net charge**; major in **myelin** (oligodendrocytes, Schwann cells) |
| **Glycosphingolipid** (cerebroside = 1 sugar; globoside = ≥2) | **Sugar(s)** via glycosidic bond | **Glycolipid** | **Neutral** at physiological pH; outer membrane surface |
| **Ganglioside** | **Oligosaccharide** + ≥1 terminal **NANA (sialic acid)** | **Glycolipid** | **Negative** charge; cell interaction/recognition/signaling |

:::mnemonic
**Gangliosides are the "gangly" sphingolipids** — the most complex, with functional groups (**oligosaccharides + NANA**) sticking out in all directions.
:::

:::realworld
**Sphingolipid accumulation** underlies several diseases: loss of **sphingomyelinase** lets sphingomyelin build up → **Niemann–Pick disease** (intellectual disability, seizures). **Sulfatides** (sulfated cerebrosides) are linked to **Alzheimer's disease**.
:::

#### Waxes
**Waxes** are **esters of long-chain fatty acids with long-chain alcohols**. They form **pliable solids** at room temperature and serve a **protective** role:

- **Plants** — surface coating that prevents **evaporation** and guards against **parasites** (e.g., **carnauba wax**).
- **Animals** — prevent **dehydration**, repel water (skin, feathers), and lubricate (e.g., **cerumen / earwax**; **beeswax** for honeycomb).

![Figure 5.4 — Beeswax honeycomb: long-alkyl-chain wax esters are solid and plastic enough to build structures.](${fig(0, 6).src})
`
    },

    /* ─────────────────────────── 5.2 Signaling Lipids ─────────────────────────── */
    {
      id: 's2', num: '5.2', title: 'Signaling Lipids',
      goals: [
        'Recall the structural features of terpenes, steroids, and prostaglandins',
        'Differentiate steroids from steroid hormones',
        'Connect prostaglandins to symptoms such as pain and inflammation',
        'Explain the importance of the fat-soluble vitamins A, D, E, and K'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 5.6 — Common steroid nucleus: three fused cyclohexane rings + one cyclopentane ring.' }],
      recap: `
- **Terpenes** = odiferous **steroid precursors** built from **isoprene** ($\\text{C}_5\\text{H}_8$); counted in isoprene units (**1 terpene unit = 2 isoprenes**).
- **Steroids** = **3 cyclohexane + 1 cyclopentane** fused rings (nonpolar). **Steroid hormones** are the subset that act as hormones (bloodstream, high-affinity receptors, alter gene expression at low concentration).
- **Cholesterol** = amphipathic steroid that **buffers membrane fluidity**; precursor to **steroid hormones, bile acids, vitamin D**.
- **Prostaglandins** = 20-carbon unsaturated acids from **arachidonic acid**; **autocrine/paracrine**; regulate **cAMP** → pain, fever, inflammation, smooth muscle. **NSAIDs block COX**.
- **Fat-soluble vitamins = A, D, E, K**; stored in fat (excess water-soluble vitamins are excreted in urine).
`,
      detail: `
#### Signaling roles of lipids
Beyond passive structure, lipids perform **active signaling**: they act as **coenzymes** (electron transport chain, glycosylation), as **hormones** that travel long distances, as **intracellular messengers**, and as **light-absorbing pigments** (vital for vision). This section covers **steroids, prostaglandins, and fat-soluble vitamins**, plus their precursors, the **terpenes**.

:::bridge
A **coenzyme** is an organic, nonprotein factor bound to an enzyme and required for its normal activity (*MCAT Biochemistry Review*, Ch. 2).
:::

#### Terpenes and terpenoids
**Terpenes** are a class of lipids built from **isoprene** ($\\text{C}_5\\text{H}_8$) units, with carbons grouped in **multiples of five**. They are the **metabolic precursors to steroids** and other signaling lipids, are produced mainly by **plants** (and some insects), and are **strongly scented** (terpenes are named after **turpentine**).

Terpenes are grouped by isoprene count — remember **one terpene unit = two isoprene units**:

| Terpene | Isoprene units | Carbons | Example |
|---|---|---|---|
| **Monoterpene** | 2 | $\\text{C}_{10}$ | Essential oils, turpentine |
| **Sesquiterpene** | 3 | $\\text{C}_{15}$ | (*sesqui-* = one-and-a-half) |
| **Diterpene** | 4 | $\\text{C}_{20}$ | **Vitamin A** → retinal |
| **Triterpene** | 6 | $\\text{C}_{30}$ | → **cholesterol** & steroids |
| **Tetraterpene** | 8 | $\\text{C}_{40}$ | Carotenoids (β-carotene, lutein) |
| **Polyterpene** | 1000–5000 | — | Natural rubber |

**Terpenoids** (isoprenoids) are terpenes that have undergone **oxygenation** or **carbon-skeleton rearrangement**. They share precursor and aromatic roles, contributing to **steroid biosynthesis** and to scents like cinnamon, eucalyptus, camphor, and turmeric.

:::mnemonic
**Count by twos:** the prefix tells you isoprene units, but each terpene *unit* is **two** isoprenes — so **di**terpene (4 isoprene) = $\\text{C}_{20}$ and **tri**terpene (6 isoprene) = $\\text{C}_{30}$. Multiply isoprene count × 5 to get carbons.
:::

#### Steroids
**Steroids** are metabolic derivatives of terpenes, defined by a shared structure: **four fused rings — three cyclohexane and one cyclopentane**. The large number of carbons and hydrogens makes steroids **nonpolar**. Steroid functionality is set by the **oxidation status** of the rings and the **functional groups** they carry.

##### Steroids vs. steroid hormones
| | **Steroid** | **Steroid hormone** |
|---|---|---|
| Defined by | **Structure** (3 cyclohexane + 1 cyclopentane) | **Function** (acts as a hormone) |
| Behavior | A structural class | Secreted into **bloodstream** → travels on **protein carriers** → binds **high-affinity receptors** → **alters gene expression** |
| Potency | — | Potent even at **low concentrations** |
| Examples | Cholesterol | **Testosterone, estrogens, cortisol, aldosterone** |

:::bridge
Hormone types, including steroid hormones, are detailed in *MCAT Biology Review*, Ch. 5 (The Endocrine System).
:::

##### Cholesterol
**Cholesterol** is a steroid of primary importance and an **amphipathic** molecule (both hydrophilic and hydrophobic parts):

![Figure 5.7 — Cholesterol: a steroid that mediates membrane fluidity and is a precursor to steroid hormones, bile acids, and vitamin D.](${fig(1, 1).src})

- **Mediates membrane fluidity**: at **low temperature** it keeps the membrane from **solidifying**; at **high temperature** it holds the membrane intact and **prevents excess permeability**.
- Serves as a **precursor** to **steroid hormones, bile acids, and vitamin D**.

:::realworld
Cholesterol comes from **diet** and **de novo synthesis**. **Hypercholesterolemia** correlates strongly with heart disease — cholesterol accumulating in arterial walls causes **atherosclerosis** (hardening of the wall).
:::

#### Prostaglandins
**Prostaglandins** (first thought to come from the prostate, but made by nearly **all cells**) are:

- **20-carbon** unsaturated carboxylic acids derived from **arachidonic acid**, containing **one five-carbon ring**;
- **autocrine / paracrine** signaling molecules (act **locally**, *not* endocrine);
- regulators of **cyclic AMP (cAMP)** synthesis, the ubiquitous intracellular messenger that mediates many other hormones.

**Downstream effects:** powerful action on **smooth muscle**, influence over the **sleep–wake cycle**, and **fever/pain** (elevated body temperature). **NSAIDs like aspirin inhibit cyclooxygenase (COX)**, the enzyme that produces prostaglandins.

#### Fat-soluble vitamins
A **vitamin** is an essential nutrient the body cannot adequately synthesize, so it must be **consumed**. **Lipid-soluble** vitamins **accumulate in stored fat**, whereas excess **water-soluble** vitamins are **excreted in urine**. The fat-soluble vitamins are **A, D, E, and K**:

| Vitamin | Other name | Active metabolite(s) | Function |
|---|---|---|---|
| **A** | Carotene | **Retinal**; **retinoic acid** | **Vision** (retinal); **gene expression** in epithelial development (retinoic acid); growth & immunity |
| **D** | Cholecalciferol | **Calcitriol** $\\text{(1,25-(OH)}_2\\text{D}_3)$ | ↑ **calcium & phosphate** uptake in intestines → **bone production**; deficiency → **rickets** |
| **E** | Tocopherols / tocotrienols | — | **Biological antioxidant** — aromatic ring destroys **free radicals**, preventing oxidative damage |
| **K** | Phylloquinone (K₁), menaquinones (K₂) | — | Posttranslational formation of **prothrombin** (clotting); adds **calcium-binding sites** to proteins |

:::mnemonic
**Fat-soluble vitamins spell "A, D, E, K."** Hooks: **carrots** are high in **vitamin A** → "eat carrots to see in the dark." **Vitamin D** is added to **milk** → think **D for Dairy / calcium**. **Vitamin K is for Koagulation** (clotting).
:::

:::realworld
The anticoagulant **warfarin** blocks **vitamin K recycling**, lowering active vitamin K. Patients on warfarin are told to limit **vitamin-K-rich** foods like **green leafy vegetables** to keep dosing stable.
:::
`
    },

    /* ─────────────────────────── 5.3 Energy Storage ─────────────────────────── */
    {
      id: 's3', num: '5.3', title: 'Energy Storage',
      goals: [
        'Explain why energy is more optimally stored as fat than as sugar',
        'Recall the structure and function of triacylglycerols',
        'Predict the products of saponification reactions'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 5.8 — Triacylglycerol: glycerol esterified to three (usually different) fatty acids — here palmitic, oleic, and α-linolenic acid.' }],
      recap: `
- **Triacylglycerols (triglycerides)** = **glycerol + 3 fatty acids** via **ester bonds**; the body's main **long-term energy store**.
- **Fat beats sugar** for storage: fatty-acid carbons are **more reduced** → **~2× the energy per gram** of carbohydrate; and fats are **hydrophobic** → carry **no water weight** (plus **insulation**).
- **Adipocytes** store triacylglycerols; **free fatty acids** circulate bound to **serum albumin**.
- **Saponification** = **ester hydrolysis of triacylglycerols by a strong base** (lye, NaOH/KOH) → **glycerol + fatty-acid salts (soap)**.
- **Soaps are surfactants** that form **micelles** (tails in, heads out) → dissolve grease and wash it away.
`,
      detail: `
#### Why store energy as fat?
**Triacylglycerols** are lipids specialized for **energy storage**, and fat is a superior depot for two main reasons:

1. **More reduced carbons** — fatty-acid carbons are far more reduced than the alcohol-rich carbons of sugars, so oxidizing triacylglycerols yields **twice the energy per gram** as carbohydrates (e.g., glycogen).
2. **Hydrophobic** — fats do **not** draw in water and need no hydration shell, so they carry **no extra water weight** (unlike hydrophilic polysaccharides).

A bonus in cold climates (penguins, polar bears, arctic explorers): the lipid layer provides **insulation** as well as fuel.

:::realworld
The body stores energy two ways: **triacylglycerols** in **adipose tissue** and **carbohydrates** as **glycogen**. Glycogen is **water-soluble** and fast to mobilize but low in energy density — only ~1 day of fuel. A moderately obese person's **15–20 kg** of triacylglycerols could last **months**, but mobilizes more slowly.
:::

#### Triacylglycerols
**Triacylglycerols** (triglycerides) are **three fatty acids bonded by ester linkages to glycerol**. In most natural triacylglycerols, the **three fatty acids differ** from one another.

- Overall **nonpolar and hydrophobic** → **insoluble in water** (the polar hydroxyls of glycerol and the polar carboxylates of the fatty acids are tied up in the ester bonds).
- Stored as **oily droplets** in the cytosol of **adipocytes** (under skin, around mammary glands, in the abdominal cavity); in plants, as **seed oils**.
- Travel **bidirectionally** in blood between **liver** and **adipose tissue**.
- Physical properties are set by **fatty-acid saturation**, just like phospholipids.

#### Free fatty acids and saponification
**Free fatty acids** are **unesterified** fatty acids with a **free carboxylate group**; in the body they circulate **noncovalently bound to serum albumin**.

**Saponification** is the **ester hydrolysis of triacylglycerols using a strong base** — traditionally **lye** (sodium or potassium hydroxide). It cleaves the fatty acids off, leaving the **sodium salt of the fatty acid** (soap) plus **glycerol**:

$$\\text{Triacylglycerol} + 3\\,\\text{NaOH} \\rightarrow \\text{glycerol} + 3\\,\\text{fatty acid salt (soap)}$$

![Figure 5.9 — Saponification: lye (NaOH) hydrolyzes a triacylglycerol's ester bonds into glycerol + fatty-acid salts.](${fig(2, 2).src})

:::realworld
Saponification happens **naturally** (slowly) in **corpses** and **oil paintings** as bases hydrolyze the triacylglycerols. In corpses the waxy product is **adipocere**, or "grave wax."
:::

##### Soaps, surfactants, and micelles
A **surfactant** lowers the **surface tension** of a liquid, acting as a **detergent or emulsifier**. Soaps (fatty-acid salts) are surfactants. Add soap to oil + water and the phases merge into a **colloid** because of **micelle** formation:

![Figure 5.10 — Micelle cross-section: hydrophobic tails turn inward, hydrophilic carboxylate heads face the water.](${fig(2, 3).src})

- **Micelle** = a tiny aggregate of soap with **hydrophobic tails inward** and **hydrophilic heads outward**.
- The shielded core dissolves **nonpolar grease**; the carboxylate shell lets the whole thing **wash away in water**.
- Micelles are also key in the body for absorbing **fat-soluble vitamins (A, D, E, K)** and complex lipids — **bile salts** + fatty acids form micelles that boost the surface area for **lipolytic enzymes**.

:::keyconcept
A **micelle** is a *single layer* (tails in, heads out) that traps a nonpolar core — perfect for dissolving fats. A **bilayer** (two leaflets, tails meeting in the middle) is what **membranes** use. Same amphipathic principle, two different geometries.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Structural Lipids',
        points: [
          'Lipids are **insoluble in water**, soluble in **nonpolar organic solvents**.',
          '**Phospholipids** are **amphipathic** (hydrophilic head + hydrophobic tails) and form the **bilayer** of biological membranes.',
          'The head group attaches via a **phosphodiester linkage** and, because it faces the environment, **determines function**; **fatty-acid tails** form most of the bilayer\'s structural thickness.',
          '**Saturation** of the tails sets membrane **fluidity** — saturated tails are **less fluid** than unsaturated.',
          '**Glycerophospholipids** have a **glycerol** backbone; **sphingolipids** have a **sphingosine/sphingoid** backbone.',
          'Many (not all) sphingolipids are **phospholipids** (have a phosphodiester bond) → **sphingophospholipids**; **sphingomyelins** are the major class and build the **myelin sheath**.',
          '**Glycosphingolipids** attach to sugars instead of phosphate: **cerebrosides** (1 sugar) and **globosides** (≥2). **Gangliosides** carry oligosaccharides + terminal **NANA (sialic acid)**.',
          '**Waxes** are long-chain fatty acids esterified to long-chain alcohols; they protect against evaporation and parasites.'
        ]
      },
      {
        section: 'Signaling Lipids',
        points: [
          '**Terpenes** are odiferous **steroid precursors** made from **isoprene** (5-carbon); one terpene unit = **two** isoprene units.',
          '**Terpenoids** derive from terpenes via **oxygenation** or backbone rearrangement and share their scents.',
          '**Steroids** = **three cyclohexane + one cyclopentane** rings; oxidation state and functional groups vary.',
          '**Steroid hormones** have **high-affinity receptors**, work at **low concentrations**, and affect **gene expression and metabolism**.',
          '**Cholesterol** is a steroid that buffers **membrane fluidity/stability** and is a **precursor** to many molecules (steroid hormones, bile acids, vitamin D).',
          '**Prostaglandins** are **autocrine/paracrine** molecules that regulate **cAMP**; they drive **smooth-muscle contraction, body temperature, sleep–wake cycle, fever, and pain**.',
          'Fat-soluble vitamins = **A, D, E, K**: **A (carotene)** → retinal (vision) & retinoic acid (epithelial gene expression); **D (cholecalciferol)** → calcitriol (Ca²⁺/phosphate, bone; deficiency = rickets); **E (tocopherols)** = antioxidants; **K** = prothrombin formation + calcium-binding sites.'
        ]
      },
      {
        section: 'Energy Storage',
        points: [
          '**Triacylglycerols (triglycerides)** are the preferred form for **long-term** energy storage.',
          'They are **one glycerol + three fatty acids** via **ester bonds**; the fatty acids usually **vary** within one triacylglycerol.',
          'Lipid carbons are **more reduced** than carbohydrate carbons → **~2× energy per gram** on oxidation.',
          'Triacylglycerols are **very hydrophobic**, so they carry **no extra water weight**.',
          'Animal storage cells are **adipocytes**; **free fatty acids** travel in blood (bound to albumin).',
          '**Saponification** = **ester hydrolysis** of triacylglycerols by a **strong base** (NaOH/KOH) → **glycerol + fatty-acid salts (soap)**.',
          '**Soaps act as surfactants**, forming **micelles** that dissolve a lipid core and wash away in water.'
        ]
      }
    ],
    mnemonics: [
      '**Saturated = Solid, Straight, Stacks** (stick of butter); unsaturated double bonds *kink* the chain → stays *liquid* (olive oil).',
      '**Sphingolipid complexity:** **C**eramide → **S**phingomyelin → **C**erebroside/globoside → **G**anglioside. **Gangliosides are "gangly"** — most complex, with oligosaccharides + NANA.',
      '**Phospho- = phospholipid:** if a sphingolipid\'s head is attached by a **phospho**diester bond it\'s a phospholipid; a **sugar** (glycosidic) link makes it a **glyco**lipid.',
      '**Terpene carbons:** isoprene units × 5 = carbons; remember **1 terpene unit = 2 isoprenes**, so **di**terpene (4) = C₂₀, **tri**terpene (6) = C₃₀.',
      '**Fat-soluble vitamins spell "A, D, E, K."** A = carrots (vision); D = dairy/milk (calcium); E = antioxidant (think "**E**raser" of free radicals); **K = Koagulation**.',
      '**Steroid rings: "3 hexes + 1 pent."** Three cyclohexane rings fused to one cyclopentane ring — structure never changes, only the oxidation/functional groups do.',
      '**Saponification → Soap:** strong **base** + fat → **glycerol + fatty-acid salt**. Micelle = **tails in, heads out** (one layer); bilayer = two leaflets (membranes).'
    ],
    keyConcepts: [
      '**Amphipathy is the master theme:** a polar head + nonpolar tail explains bilayers (membranes), micelles (soap/digestion), and liposomes — same molecule, geometry set by the solvent.',
      '**Structure vs. function split:** fatty-acid **tails + saturation** govern membrane *structure/fluidity*; the **head group** governs *function* (recognition, signaling, binding).',
      '**Steroid vs. steroid hormone:** all steroid hormones are steroids, but a steroid is defined by **structure** while a steroid hormone is defined by **function** (bloodstream, receptor, gene expression).',
      '**Fat is the better fuel:** more-reduced carbons (2× energy/gram) and no hydration weight make triacylglycerols ideal for long-term storage; glycogen wins only on speed of mobilization.',
      '**Cholesterol is a fluidity buffer:** it *raises* fluidity at low temperature and *lowers* it at high temperature — it does not simply increase or decrease fluidity.'
    ],
    equations: [
      { name: 'Saponification', tex: '\\text{Triacylglycerol} + 3\\,\\text{NaOH} \\rightarrow \\text{glycerol} + 3\\,\\text{R-COO}^-\\text{Na}^+', note: 'Base-catalyzed ester hydrolysis of a triacylglycerol yields glycerol plus three fatty-acid salts (soap).' },
      { name: 'Isoprene unit', tex: '\\text{C}_5\\text{H}_8', note: 'The 5-carbon building block of all terpenes; one terpene unit = two isoprene units.' }
    ]
  },

  questions: raw.questions
};
