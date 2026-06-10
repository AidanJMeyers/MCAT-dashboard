// Biochem Chapter 4 — Carbohydrate Structure and Function.
// Re-authored to the rich-formatting quality bar.
// Figures, questions are reused from ch04.json (already-correct extraction);
// the goals/recap/detail/keyReview markdown is authored here from the source text.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 4,
  title: 'Carbohydrate Structure and Function',
  subtitle: 'Carbohydrate classification · cyclic sugar molecules · monosaccharides · complex carbohydrates',

  blocks: [
    /* ─────────────────── 4.1 Carbohydrate Classification ─────────────────── */
    {
      id: 's1', num: '4.1', title: 'Carbohydrate Classification',
      goals: [
        'Recognize common features of sugar nomenclature',
        'Apply principles of stereoisomerism to sugar nomenclature and structure',
        'Distinguish enantiomers from epimers',
        'Classify and name a simple sugar based on its structure'
      ],
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 4.1 — Glyceraldehyde, the simplest aldose (an aldotriose): a polyhydroxylated aldehyde with the carbonyl at C-1.' }],
      recap: `
- **Carbohydrates** are classified by **number of sugar units**, **number of carbons** (triose → hexose), **functional group** (aldose vs. ketose), and **stereochemistry**.
- **Aldoses** have an **aldehyde** (carbonyl at **C-1**); **ketoses** have a **ketone** (carbonyl usually at **C-2**). Every other carbon bears an **−OH**.
- **D vs. L** is set by the **highest-numbered chiral carbon**: −OH on the **right** in a Fischer projection = **D**; on the **left** = **L**. D/L is *not* the same as $(R)/(S)$ or $(+)/(-)$.
- Number of stereoisomers $= 2^n$, where $n$ = chiral carbons.
- **Enantiomers** = nonsuperimposable mirror images (all chiral centers flipped). **Diastereomers** differ at ≥1 (not all) centers. **Epimers** differ at **exactly one** center.
`,
      detail: `
#### Why the old definition fails
Carbohydrates were once defined by the empirical formula $\\text{C}_n(\\text{H}_2\\text{O})_n$, but this applies only to simple **monosaccharides**. As simple sugars link into complex sugars, **water is lost**, shifting the formula to $\\text{C}_n(\\text{H}_2\\text{O})_m$.

:::expertise
The MCAT loves to present a complex, novel sugar and then test the *most basic* idea about it. Spot the familiar functional groups — **aldehydes, ketones, alcohols** — and remember they keep the same chemistry you already know.
:::

#### Nomenclature: count the carbons, name the carbonyl
The most basic structural units are **monosaccharides**. Classify them on two axes:

##### Axis 1 — number of carbons
| Carbons | Name |
|---|---|
| 3 | **Triose** |
| 4 | **Tetrose** |
| 5 | **Pentose** |
| 6 | **Hexose** |

##### Axis 2 — most-oxidized functional group
| Carbonyl group | Class | Carbonyl position |
|---|---|---|
| **Aldehyde** | **Aldose** | **C-1** (lowest possible number) |
| **Ketone** | **Ketose** | **C-2** (typical on the MCAT) |

Combine the two axes to get the full name:

- A six-carbon sugar with an aldehyde → **aldohexose**.
- A five-carbon sugar with a ketone → **ketopentose**.

The simplest aldose is **glyceraldehyde** (an **aldotriose**, Figure 4.1) — a *polyhydroxylated aldehyde*. The carbonyl carbon is the most oxidized, so it gets the **lowest** number; in an aldose this is always **C-1**. That C-1 aldehyde can join **glycosidic linkages**; sugars acting as substituents through such a linkage are **glycosyl residues**.

The simplest ketose is **dihydroxyacetone** (a **ketotriose**). Its carbonyl carbon is **C-2**.

![Figure 4.2 — Dihydroxyacetone, the simplest ketose](${fig(0, 9).src})

:::keyconcept
On every monosaccharide, **every carbon except the carbonyl carbon carries a hydroxyl group**. Find the carbonyl, name its position, count the carbons — that is the whole classification game.
:::

#### Common names you must know
A handful of sugars are tested by **common name** rather than systematic name. Be fluent in the frequently tested monosaccharides: **glucose**, **fructose**, **galactose**, **ribose**, **mannose**.

:::mnemonic
**"Glu, Fru, Gal" are the big three.** **Fru**ctose is the only common **keto**se (a **ketohexose**); **glu**cose and **gal**actose are **aldo**hexoses. Galactose is glucose's **C-4 epimer** ("**Gal**actose differs at the **4**th").
:::

:::bridge
Isomerism is covered in *MCAT Organic Chemistry Review*, Ch. 2. Carbohydrate isomerism is just an extension — most sugars relate to one another as **enantiomers** or **diastereomers**.
:::

#### Stereochemistry
**Optical isomers (stereoisomers)** share the same chemical formula but differ in the **spatial arrangement** of atoms.

- **Enantiomers** — nonidentical, **nonsuperimposable mirror images**.
- A **chiral carbon** has **four different groups** attached; a molecule with chiral carbons and **no internal plane of symmetry** has an enantiomer.

##### D and L: the biochemist's system
The 3-D arrangement around the chiral carbon sets the **absolute configuration**. Organic chemists use the newer $(R)/(S)$ system; **biochemists use the older D and L system**.

![Figure 4.4 — The two enantiomers of glyceraldehyde: D- and L-glyceraldehyde](${fig(0, 12).src})

D- and L-glyceraldehyde are **mirror images** with **opposite** absolute configurations → enantiomers. Glyceraldehyde has **one** chiral carbon, so these are its **only** two stereoisomers.

:::keyconcept
The two naming systems are **not interchangeable!** Some **D**-isomers are $(R)$, others are $(S)$. For biomolecules like sugars, default to the biochemists' **D / L**. Likewise, **D / L** are **not** the same as the **$(+)/(-)$** designations for optical rotation — direction of rotation must be measured experimentally.
:::

##### Counting stereoisomers
$$\\text{Number of stereoisomers} = 2^n$$
where $n$ = number of chiral carbons. For example, $2^1 = 2$ and $2^2 = 4$. (This is **Equation 4.1**.)

##### Fischer projections
A **Fischer projection** is a 2-D drawing of stereoisomers:

- **Horizontal lines = wedges** (toward you, out of the page).
- **Vertical lines = dashes** (away from you, into the page).

![Figure 4.5 — Fischer projection convention: horizontal = out of page, vertical = into page](${fig(0, 13).src})

Using this system, **all D-sugars** have the −OH on the **highest-numbered chiral center** on the **right**; **all L-sugars** have it on the **left**. Because **D-glucose** and **L-glucose** are enantiomers, *every* chiral center is inverted between them.

#### The three relationships to know cold
| Relationship | Definition | Example |
|---|---|---|
| **Enantiomers** | Same sugar, opposite optical family; **all** chiral centers flipped (mirror images) | **D-glucose** vs. **L-glucose** |
| **Diastereomers** | Same family (both aldoses or both ketoses, same # carbons), **not** mirror images, differ at ≥1 but not all centers | D-glucose vs. D-galactose |
| **Epimers** | A **subtype of diastereomers** differing at **exactly one** chiral center | **D-ribose** vs. **D-arabinose** (differ at **C-2**) |

![Figure 4.7 — D-ribose and D-arabinose are C-2 epimers](${fig(0, 15).src})

Figure 4.8 summarizes these using the four stereoisomers of an **aldotetrose**: two optical forms of **erythrose** and two of **threose**.

- **D-erythrose** and **L-erythrose** are nonsuperimposable mirror images → **enantiomers**.
- **D-erythrose** and **D-threose** are not mirror images but are nonsuperimposable → **diastereomers**; because they differ at only one chiral center they are also **epimers**.

:::mnemonic
**"ED & ME" — Enantiomers = Everything flipped (Mirror, Every center); Epimers = Exactly one."** A compound has **only one** enantiomer (its mirror image) but can have **many** diastereomers, depending on how many centers are inverted.
:::
`
    },

    /* ───────────────────── 4.2 Cyclic Sugar Molecules ────────────────────── */
    {
      id: 's2', num: '4.2', title: 'Cyclic Sugar Molecules',
      goals: [
        'Convert between Haworth and Fischer projections',
        'Define and explain sugar-related concepts, including hemiacetal, hemiketal, pyranose, furanose, and anomeric carbon',
        'Predict the impact of mutarotation on conformation',
        'Identify the more stable anomer of a given sugar'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 4.9 — Cyclic sugar formation: D-glucose closes into a six-membered ring with two anomeric forms, α (left) and β (right).' }],
      recap: `
- A sugar's **−OH** (nucleophile) attacks its own **carbonyl** (electrophile) → an intramolecular **cyclic hemiacetal** (from aldoses) or **hemiketal** (from ketoses). The **ring oxygen comes from the hydroxyl**.
- Only stable rings survive in solution: **6-membered pyranose** or **5-membered furanose**.
- The old carbonyl carbon becomes a **new chiral center** → the **anomeric carbon**. Its two configurations are **anomers**: **α** (−OH **trans** to $\\text{CH}_2\\text{OH}$, **axial/down**) and **β** (−OH **cis**, **equatorial/up**).
- **Haworth projection**: groups on the **right** in Fischer point **down**.
- **Mutarotation** = spontaneous interconversion of α ⇌ β through the open chain. For glucose, equilibrium ≈ **36% α, 64% β** (β favored — equatorial −OH).
`,
      detail: `
#### Ring formation: an intramolecular reaction
Monosaccharides carry both a **hydroxyl group** (a nucleophile) and a **carbonyl group** (the MCAT's favorite electrophile). They can react **with themselves** to form:

- a cyclic **hemiacetal** — from an **aldose**;
- a cyclic **hemiketal** — from a **ketose**.

The **hydroxyl oxygen** acts as the nucleophile, so **oxygen becomes a ring member**. Because of ring strain, only two ring sizes are stable in solution — and sugars exist *predominantly* in cyclic form:

| Ring | Members | Named after |
|---|---|---|
| **Pyranose** | **6**-membered | pyran |
| **Furanose** | **5**-membered | furan |

##### The anomeric carbon
Whether a hemiacetal or hemiketal forms, the **carbonyl carbon becomes chiral** during cyclization. This new stereocenter is the **anomeric carbon**. Figure 4.9 shows C-1 (carbonyl) and the C-5 hydroxyl of **D-glucose** undergoing intramolecular hemiacetal formation.

Two ring forms emerge — they differ only at the anomeric carbon, so they are **anomers**:

| Anomer | −OH at anomeric C, relative to $\\text{CH}_2\\text{OH}$ | Position |
|---|---|---|
| **α** | **trans** | **axial, down** |
| **β** | **cis** | **equatorial, up** |

:::keyconcept
**Carbonyl → anomeric:** the carbon that was the carbonyl in the open chain *becomes* the anomeric carbon after cyclization. The orientation of its new −OH (α vs. β) is the *only* difference between the two anomers.
:::

#### Hexose conformations: Haworth vs. Fischer
The **Haworth projection** depicts cyclic sugars as planar 5- or 6-membered rings, with the top and bottom faces nearly perpendicular to the page.

- Five-membered (furanose) rings are nearly **planar**.
- Six-membered (pyranose) rings actually adopt a **chair** conformation, with substituents **axial** or **equatorial** to minimize steric hindrance.

:::mnemonic
**Fischer → Haworth: "right goes down."** Any group on the **right** in the Fischer projection points **down** in the Haworth projection (and anything on the **left** points **up**).
:::

#### Mutarotation
Exposing hemiacetal rings to **water** makes them spontaneously **open and re-close**. Because the C-1–C-2 single bond can rotate freely, either the **α-** or **β-anomer** can re-form. This spontaneous change at C-1 is **mutarotation**.

![Figure 4.10 — Mutarotation: α ⇌ β anomers interconvert via ring opening and reclosing](${fig(1, 2).src})

- It is **acid- or base-catalyzed** (faster) but occurs spontaneously in water.
- Result: an **equilibrium mixture** of both anomers. For **glucose**: **36% α** and **64% β**.
- The **α-anomer is less favored** in solution because its anomeric −OH is **axial**, adding steric strain.
- In the **solid state** (not in solution), the **anomeric effect** can stabilize the α-anomer — *beyond MCAT scope*.

:::expertise
A straight-chain **aldehyde reactant** that interconverts between two ring forms is the signature of **mutarotation** — not a glycosidic-bond or hemiketal question. The open-chain form is just the **intermediate**.
:::
`
    },

    /* ─────────────────────────── 4.3 Monosaccharides ─────────────────────────── */
    {
      id: 's3', num: '4.3', title: 'Monosaccharides',
      goals: [
        'Predict the products of sugar reactions, including oxidation, reduction, esterification, and glycosidic linkage formation',
        'Contrast Tollens’ reagent and Benedict’s reagent',
        'Apply reactions of sugars to biological contexts'
      ],
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 4.15 — Glycosidic linkage formation: a hemiacetal (or hemiketal) reacts with an alcohol under acidic conditions to form an acetal (or ketal).' }],
      recap: `
- Monosaccharides carry **alcohols + aldehydes/ketones**, so they undergo familiar reactions: **oxidation–reduction**, **esterification**, and **glycoside formation**.
- **Oxidation:** an aldose → **aldonic acid** (open chain) or a **lactone** (cyclic ester) in ring form. Sugars that can be oxidized are **reducing sugars**.
- **Any sugar with a hemiacetal/hemiketal is a reducing sugar** — including **ketoses**, which **tautomerize** (keto–enol) to an aldose first.
- **Tollens'** → **silver mirror**; **Benedict's** → **red $\\text{Cu}_2\\text{O}$ precipitate**. **Glucose oxidase** is glucose-specific.
- **Reduction** of an aldose → **alditol**. **Deoxy sugars** replace an −OH with −H (e.g., **2-deoxyribose** in DNA).
- **Glycoside formation** (hemiacetal + alcohol → acetal) is a **dehydration**; the **C−O glycosidic bond** is broken only by **hydrolysis**.
`,
      detail: `
Monosaccharides contain **alcohols** plus either **aldehydes** or **ketones**, so these groups undergo the **same reactions** they do in any other molecule: **oxidation/reduction**, **esterification**, and **nucleophilic attack** (forming glycosides).

#### Oxidation and reduction
Oxidizing carbohydrates for **energy** is one of the body's most important reactions. As a sugar mutarotates, its hemiacetal ring spends brief time in the **open-chain aldehyde** form, which — like any aldehyde — can be oxidized to a **carboxylic acid**:

- Open-chain oxidation product → **aldonic acid**.
- Because aldoses *can* be oxidized, they act as **reducing agents** → any monosaccharide with a **hemiacetal ring is a reducing sugar**.
- In **ring form**, oxidation instead yields a **lactone** — a **cyclic ester** with the carbonyl persisting on the anomeric carbon. (**Vitamin C** is a biologically essential lactone.)

![Figure 4.11 — A lactone contains a cyclic ester](${fig(2, 0).src})

##### Detecting reducing sugars
| Reagent | Composition / key point | Positive result |
|---|---|---|
| **Tollens' reagent** | Freshly made: $\\text{AgNO}_3 + \\text{NaOH} \\rightarrow \\text{Ag}_2\\text{O}$, dissolved in ammonia → $[\\text{Ag(NH}_3)_2]^+$ | **Silvery mirror** (Ag⁰ deposited) |
| **Benedict's reagent** | Copper-based | **Red precipitate of $\\text{Cu}_2\\text{O}$** |
| **Glucose oxidase** | Enzyme, **glucose-specific** | Detects glucose only (no other reducing sugars) |
| **Dilute $\\text{HNO}_3$** | Stronger oxidant | Oxidizes **both** the aldehyde **and** the C-6 primary alcohol to carboxylic acids |

![Figure 4.14 — Phosphorylation of glucose by hexokinase: a phosphate ester forms as ATP → ADP](${fig(2, 2).src})

:::keyconcept
**Ketoses are reducing sugars too.** A ketone can't be oxidized to a carboxylic acid *directly*, but under **basic conditions** it **tautomerizes** via a **keto–enol shift** into an **aldose**, which then reacts with Tollens' or Benedict's. **Tautomerization** moves a hydrogen and shifts a double bond, passing through an **enol** (a C=C with an −OH).
:::

##### Reduced sugars
| Reduction event | Product |
|---|---|
| Aldehyde of an aldose **reduced** to an alcohol | **Alditol** |
| An −OH **replaced** by an −H | **Deoxy sugar** (e.g., **D-2-deoxyribose**, the sugar of **DNA**) |

#### Esterification
Because carbohydrates have **hydroxyl groups**, they react with **carboxylic acids and their derivatives** to form **esters**.

- In the body, esterification mirrors the **phosphorylation of glucose**, which forms a **phosphate ester**.
- **Phosphorylation** transfers a phosphate from **ATP** to glucose (forming **ADP**) — a key first step of **glycolysis**, catalyzed by **hexokinase** (or **glucokinase** in liver and pancreatic β-islet cells).

:::bridge
Hexokinase, glucokinase, and the other glycolytic enzymes are detailed in *MCAT Biochemistry Review*, Ch. 9.
:::

#### Glycoside formation
A **hemiacetal reacts with an alcohol to form an acetal** (and a hemiketal → a **ketal**):

- The anomeric −OH is converted to an **alkoxy (−OR) group**, giving a mixture of **α- and β-acetals**, with **water** as the leaving group.
- The new **C−O bonds** are **glycosidic bonds**; the acetals formed are **glycosides**.

| Parent ring | Glycoside name |
|---|---|
| **Furanose** | **Furanoside** |
| **Pyranose** | **Pyranoside** |

:::keyconcept
**Glycoside formation is a dehydration reaction** (water leaves) — so it's the *basis for building disaccharides and polysaccharides*. Breaking a glycosidic bond therefore requires **hydrolysis** (adding water back).
:::

:::mnemonic
**Hemi = half-made.** A **hemi**acetal still has a free −OH (one −OR, one −OH) — it's "half" an acetal and **can still reduce** Tollens'/Benedict's. Add an alcohol and lose water → a **full acetal** (**glycoside**, two −OR groups) that is **non-reducing** at that carbon.
:::
`
    },

    /* ───────────────────── 4.4 Complex Carbohydrates ─────────────────────── */
    {
      id: 's4', num: '4.4', title: 'Complex Carbohydrates',
      goals: [
        'Compare starches, glycogen, and cellulose',
        'Predict the comparative solubility of different starch forms based on structure',
        'Recognize important biologically relevant disaccharides'
      ],
      images: [{ src: fig(3, 2).src, alt: fig(3, 2).alt, caption: 'Figure 4.18 — The three high-yield disaccharides: sucrose (glucose-α-1,2-fructose), lactose (galactose-β-1,4-glucose), and maltose (glucose-α-1,4-glucose).' }],
      recap: `
- **Complex carbohydrates** = ≥2 sugars linked by **glycosidic bonds**: disaccharides, oligosaccharides, polysaccharides.
- Linkages are named by the **anomeric configuration (α/β)** and the **two carbon numbers** joined (e.g., **α-1,4**). Bonds between **two anomeric carbons** get both numbers (e.g., **α,α-1,1** in **trehalose**).
- **High-yield disaccharides:** **sucrose** (Glc-α-1,2-Fru), **lactose** (Gal-β-1,4-Glc), **maltose** (Glc-α-1,4-Glc); **cellobiose** = Glc-**β**-1,4-Glc.
- **Cellulose** (β-1,4, structural, indigestible fiber), **starch** = amylose (α-1,4 linear) + amylopectin (α-1,4 with α-1,6 branches), **glycogen** (like amylopectin but **more branched**).
- **More branching → more soluble + more enzyme access.** Glycogen (~1 branch / 10) > amylopectin (~1 / 25).
`,
      detail: `
**Complex carbohydrates** include everything with **at least two** sugars linked together: **disaccharides**, **oligosaccharides**, and **polysaccharides**.

#### Disaccharides
**Glycosidic bonds** between the hydroxyl groups of two monosaccharides form a **disaccharide**.

![Figure 4.16 — Disaccharide formation: the anomeric −OH reacts with another sugar's −OH to form an acetal with a 1,2; 1,4; or 1,6 linkage](${fig(3, 0).src})

##### Naming the linkage
Glycosidic-bond formation is **nonspecific** — the anomeric carbon of one sugar can react with **any −OH** on another. The name encodes two things:

1. the **configuration of the anomeric carbon** (α or β), and
2. the **numbers of the two carbons** joined.

| Example | Linkage | Meaning |
|---|---|---|
| Two D-glucose | **α-1,6** | α-anomeric C-1 of sugar 1 → C-6 of sugar 2 |
| Two α-D-glucose (anomeric–anomeric) | **α,α-1,1** | both anomeric carbons joined → **both** configs named (**trehalose**) |
| Two D-glucose | **α-1,4** | → **maltose** |
| Two D-glucose | **β-1,4** | → **cellobiose** |

![Figure 4.17 — Trehalose: an α,α-1,1 linkage between the anomeric carbons of two glucose molecules](${fig(3, 1).src})

##### The three important disaccharides
| Disaccharide | Monosaccharides | Linkage |
|---|---|---|
| **Sucrose** | glucose + fructose | **glucose-α-1,2-fructose** |
| **Lactose** | galactose + glucose | **galactose-β-1,4-glucose** |
| **Maltose** | glucose + glucose | **glucose-α-1,4-glucose** |

:::mnemonic
**"Su-Glu-Fru, La-Gal-Glu, Malt-Glu-Glu."** **Suc**rose = **Glu**cose + **Fru**ctose; **Lac**tose has the milk sugar **Gal**actose; **Malt**ose = two **Glu**coses (α-1,4). Swap maltose's α for **β** and you get **cellobiose** — same parts, indigestible.
:::

#### Polysaccharides
**Polysaccharides** are long chains of monosaccharides joined by glycosidic bonds.

- A **homopolysaccharide** is built from **one** kind of monosaccharide; a **heteropolysaccharide** from **more than one**.
- The three biggest players — **cellulose, starch, glycogen** — are *all* polymers of **D-glucose**; they differ only in **anomeric configuration** and **linkage positions**.
- Polymers can be **linear** or **branched**. **Branching** occurs when an internal sugar forms **≥2 glycosidic bonds**.

##### Cellulose — structure & fiber
**Cellulose** is the main **structural** component of plants:

- A **homopolysaccharide** of **β-D-glucose** linked **β-1,4**, with **hydrogen bonds** holding chains together for support.
- **Humans cannot digest it** — we lack **cellulase**. So dietary cellulose (fruits, vegetables) is **fiber** that draws water into the gut.
- Some gut bacteria in **termites, cows, and goats** make cellulase, enabling those animals to digest it.

![Figure 4.19 — Cellulose: a polymer of β-1,4-linked D-glucose](${fig(3, 3).src})

##### Starch — plant energy storage
**Starch** is more digestible because it uses **α-D-glucose**:

| Form | Linkages | Shape | Note |
|---|---|---|---|
| **Amylose** | **α-1,4** only | **linear** | forms a helix; **iodine** fits inside → **starch–iodine complex** test |
| **Amylopectin** | α-1,4 backbone **+ α-1,6 branches** | **branched** | ~1 branch per **25** glucoses |

![Figure 4.20 — Starch (amylose): a polymer of α-1,4-linked D-glucose](${fig(3, 4).src})

Degradation of starch:

- **β-amylase** cleaves at the **nonreducing end** → **maltose** exclusively.
- **α-amylase** cleaves **randomly** along the chain → shorter polysaccharides, maltose, and glucose.
- **Debranching enzymes** are needed because amylopectin is branched.

:::bridge
Cellulose vs. starch digestibility is the classic demonstration of **enzyme specificity**: a mere **109.5° rotation** at the anomeric carbon (β instead of α) makes the polymer indigestible to *every* human enzyme — even though both are D-glucose polymers. See *MCAT Biochemistry Review*, Ch. 2.
:::

##### Glycogen — animal energy storage
**Glycogen** is the animal storage form of glucose — like amylopectin but **more highly branched**:

- ~**1 α-1,6 branch per 10** glucoses (vs. ~1 per 25 in amylopectin).
- More branching → **more soluble** and **more energy-efficient** → more glucose stored.
- Branch ends give cleaving enzymes (e.g., **glycogen phosphorylase**) **many simultaneous sites**.
- **Glycogen phosphorylase** cleaves glucose from the **nonreducing end** and phosphorylates it → **glucose-1-phosphate**.

| Polysaccharide | Monomer | Linkages | Branched? | Role |
|---|---|---|---|---|
| **Cellulose** | β-D-glucose | **β-1,4** | No | Plant structure / dietary fiber |
| **Amylose** | α-D-glucose | **α-1,4** | No | Plant energy storage |
| **Amylopectin** | α-D-glucose | α-1,4 **+ α-1,6** | Yes (~1/25) | Plant energy storage |
| **Glycogen** | α-D-glucose | α-1,4 **+ α-1,6** | Yes (~1/10) | Animal energy storage |

:::mnemonic
**"Beta = barrier, Alpha = ATP."** **β**-linkages (cellulose, cellobiose) are structural and **indigestible** to us; **α**-linkages (starch, glycogen, maltose) are **energy** we can break down. **Glycogen is the most branched** → most soluble, fastest to mobilize.
:::

:::realworld
**Hers disease** (glycogen storage disease type VI) is a deficiency of **liver glycogen phosphorylase**. Patients can't break down liver glycogen → **hepatomegaly** (swollen liver) and **hypoglycemia** between meals, since they can't release glucose from glycogen.
:::

:::expertise
The body's two energy stores trade off: **glycogen** mobilizes **rapidly** but needs **water of hydration** (heavy); **triacylglycerols** are a compact long-term reservoir but **slow** to access. That contrast sets up the next chapter on lipids.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Carbohydrate Classification',
        points: [
          'Carbohydrates are organized by their **number of carbon atoms** (triose, tetrose, pentose, hexose) and **functional groups**.',
          '**Common names** are frequently used: glucose, fructose, galactose.',
          'Sugars with an **aldehyde** as the most oxidized group are **aldoses**; those with a **ketone** are **ketoses**.',
          'All sugar nomenclature is based on **D-/L-glyceraldehyde**: −OH on the **right** of the highest-numbered chiral carbon (Fischer) = **D**; on the **left** = **L**. D and L of the same sugar are **enantiomers**.',
          '**Diastereomers** are nonsuperimposable, same-connectivity molecules differing at ≥1 but not all chiral carbons — this includes **epimers** (differ at **exactly one** carbon) and **anomers** (differ at the **anomeric** carbon).'
        ]
      },
      {
        section: 'Cyclic Sugar Molecules',
        points: [
          '**Cyclization** is ring formation from the straight-chain sugar: an −OH attacks the carbonyl to form a **hemiacetal** (aldose) or **hemiketal** (ketose).',
          'Only **6-membered pyranose** and **5-membered furanose** rings are stable in solution.',
          'The **anomeric carbon** is the new chiral center formed on ring closure — it was the **carbonyl** carbon in the straight chain.',
          '**α-anomers** have the anomeric −OH **trans** to the free $\\text{CH}_2\\text{OH}$ (axial/down); **β-anomers** have it **cis** (equatorial/up).',
          '**Haworth projections** represent 3-D ring structure; groups on the **right** in Fischer point **down**.',
          '**Mutarotation** interconverts α and β anomers through the open-chain intermediate; for glucose, equilibrium ≈ 36% α / 64% β.'
        ]
      },
      {
        section: 'Monosaccharides',
        points: [
          'Monosaccharides (glucose is most common) undergo three main reactions: **oxidation–reduction**, **esterification**, and **glycoside formation**.',
          'Aldoses are oxidized to **aldonic acids** (or **lactones** in ring form) and reduced to **alditols**.',
          'Sugars that can be oxidized are **reducing sugars**, detected by **Tollens’** (silver mirror) or **Benedict’s** ($\\text{Cu}_2\\text{O}$ precipitate). Ketoses qualify via **tautomerization**.',
          'Sugars with an −H replacing an −OH are **deoxy sugars** (e.g., 2-deoxyribose in DNA).',
          '**Esterification** forms esters with carboxylic acids/derivatives; **phosphorylation** transfers a phosphate from ATP to a sugar.',
          '**Glycoside formation** (anomeric C + alcohol → acetal) is the basis for complex carbohydrates and is a **dehydration**.'
        ]
      },
      {
        section: 'Complex Carbohydrates',
        points: [
          '**Disaccharides** form from glycosidic bonding of two monosaccharides; **polysaccharides** from repeated bonding.',
          'Common disaccharides: **sucrose** (glucose-α-1,2-fructose), **lactose** (galactose-β-1,4-glucose), **maltose** (glucose-α-1,4-glucose).',
          '**Cellulose** is the main structural component of plant cell walls and a key dietary **fiber** (β-1,4, indigestible to humans).',
          '**Starches** (amylose + amylopectin) are the main energy-storage form for **plants** (α-linkages).',
          '**Glycogen** is the main energy-storage form for **animals**; its heavy branching maximizes solubility and rapid mobilization.'
        ]
      }
    ],
    mnemonics: [
      '**Classify a sugar in two moves:** count carbons (tri-, tetr-, pent-, hex-ose) + name the carbonyl (**ald**ehyde→aldose, **ket**one→ketose). A 6-C ketone = **ketohexose**.',
      '**"D = right, L = left":** in a Fischer projection, the −OH on the highest-numbered chiral carbon is on the **right** for **D**-sugars. Stereoisomer count $= 2^n$.',
      '**"ED & ME":** **E**nantiomers = **E**verything flipped (mirror, **M**any... no — only one mirror image); **E**pimers = **E**xactly one center. Diastereomers sit in between.',
      '**Carbonyl → anomeric:** ring closure turns the old carbonyl carbon into the new **anomeric** carbon. **α = axial/trans/down**, **β = equatorial/cis/up** (β is more stable for glucose).',
      '**Hemi = half-made & still reducing.** A free anomeric −OH (hemiacetal/hemiketal) reduces Tollens’/Benedict’s; convert it to an −OR (acetal/glycoside) and that carbon goes non-reducing.',
      '**Tollens’ = silver mirror; Benedict’s = red brick** ($\\text{Cu}_2\\text{O}$). Ketoses still test positive — they **tautomerize** to an aldose first.',
      '**"Su-Glu-Fru, La-Gal-Glu, Malt-Glu-Glu":** sucrose = glucose+fructose, lactose = galactose+glucose, maltose = glucose+glucose. Maltose with a **β** bond → **cellobiose** (indigestible).',
      '**"Beta = barrier, Alpha = ATP":** β-1,4 (cellulose) = structural/indigestible; α-linkages (starch, glycogen) = digestible energy. **Glycogen is the most branched** → most soluble, fastest to mobilize.'
    ],
    keyConcepts: [
      '**Functional groups drive the chemistry:** sugars are just polyhydroxy aldehydes/ketones, so they do aldehyde/ketone/alcohol reactions you already know — oxidation, reduction, esterification, acetal (glycoside) formation.',
      '**Stereochemistry hierarchy:** enantiomers (all centers flipped) ⊃ diastereomers (≥1 but not all) ⊃ epimers (exactly one) ⊃ anomers (the one at the anomeric carbon). A molecule has only one enantiomer but many diastereomers.',
      '**Reducing sugar = free anomeric −OH:** any hemiacetal/hemiketal can open to an aldehyde and reduce Tollens’/Benedict’s. Even ketoses qualify by tautomerizing to an aldose.',
      '**One bond, huge consequence:** α- vs. β-glycosidic linkage (a ~109.5° flip) is why starch is food and cellulose is fiber — the cleanest example of enzyme specificity on the MCAT.',
      '**Branching = solubility + speed:** glycogen’s frequent α-1,6 branches (~1/10) give more nonreducing ends for phosphorylase and better aqueous interaction than amylopectin (~1/25) or linear amylose.'
    ],
    equations: [
      { name: 'Number of stereoisomers', tex: '2^n', note: 'n = number of chiral carbons in the molecule (Equation 4.1). E.g., glucose has 4 chiral centers → 2⁴ = 16 stereoisomers.' },
      { name: 'Glucose anomer equilibrium', tex: '\\alpha \\rightleftharpoons \\beta', note: 'Mutarotation in water settles at ≈36% α / 64% β for glucose; β is favored (equatorial anomeric −OH).' }
    ]
  },

  questions: raw.questions
};
