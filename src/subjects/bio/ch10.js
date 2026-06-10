// Chapter 10 — Homeostasis. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch10.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 10,
  title: 'Homeostasis',
  subtitle: 'The excretory system · skin',

  blocks: [
    /* ───────────────────── 10.1 The Excretory System ───────────────────── */
    {
      id: 's1', num: '10.1', title: 'The Excretory System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 10.1 — The Excretory System: urine leaves the kidneys via the ureters, is stored in the bladder, and exits through the urethra.' }],
      svgs: [{
        title: 'The nephron at a glance — what each segment does',
        caption: 'Horizontal segments (Bowman\'s capsule, PCT, DCT) control solute *identity*; vertical segments (loop of Henle, collecting duct) control *volume/concentration*. Medullary osmolarity rises with depth (cortex ≈ blood → inner medulla up to 4×).',
        svg: `<svg viewBox="0 0 640 360" width="640" role="img" aria-label="Schematic of a nephron labeling the glomerulus, proximal convoluted tubule, loop of Henle, distal convoluted tubule, and collecting duct" font-family="system-ui, sans-serif">
  <defs>
    <linearGradient id="medgrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f1f5f9"/><stop offset="100%" stop-color="#fbcfe8"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="640" height="120" fill="#eff6ff"/>
  <rect x="0" y="120" width="640" height="240" fill="url(#medgrad)"/>
  <text x="10" y="22" font-size="12.5" fill="#1d4ed8" font-weight="bold">CORTEX (osmolarity ≈ blood)</text>
  <text x="10" y="142" font-size="12.5" fill="#9d174d" font-weight="bold">MEDULLA (osmolarity ↑ with depth → up to 4×)</text>
  <text x="10" y="346" font-size="11" fill="#9d174d" font-weight="bold">↓ inner medulla — most concentrated ↓</text>

  <!-- Glomerulus / Bowman's capsule -->
  <circle cx="70" cy="70" r="22" fill="none" stroke="#b91c1c" stroke-width="3"/>
  <circle cx="70" cy="70" r="11" fill="#fca5a5"/>
  <text x="70" y="34" font-size="11.5" fill="#0f172a" font-weight="bold" text-anchor="middle">Glomerulus +</text>
  <text x="70" y="108" font-size="11.5" fill="#0f172a" font-weight="bold" text-anchor="middle">Bowman's capsule</text>

  <!-- PCT -->
  <path d="M92 70 q24 -14 44 0 q24 14 44 0" fill="none" stroke="#0f766e" stroke-width="6"/>
  <text x="138" y="50" font-size="11.5" fill="#0f766e" font-weight="bold" text-anchor="middle">PCT</text>

  <!-- Loop of Henle: descending + ascending -->
  <path d="M180 70 L210 70 L210 320 L250 320 L250 70 L290 70" fill="none" stroke="#1d4ed8" stroke-width="6"/>
  <text x="196" y="200" font-size="11" fill="#1d4ed8" font-weight="bold" text-anchor="middle" transform="rotate(90 196 200)">descending (H₂O out)</text>
  <text x="266" y="200" font-size="11" fill="#7c3aed" font-weight="bold" text-anchor="middle" transform="rotate(-90 266 200)">ascending (salt out)</text>
  <text x="232" y="340" font-size="11" fill="#0f172a" font-weight="bold" text-anchor="middle">Loop of Henle</text>

  <!-- DCT -->
  <path d="M290 70 q24 -14 44 0 q24 14 44 0" fill="none" stroke="#0f766e" stroke-width="6"/>
  <text x="334" y="50" font-size="11.5" fill="#0f766e" font-weight="bold" text-anchor="middle">DCT</text>

  <!-- Collecting duct -->
  <path d="M378 70 L420 70 L420 340" fill="none" stroke="#b45309" stroke-width="7"/>
  <text x="470" y="74" font-size="11.5" fill="#b45309" font-weight="bold">Collecting duct</text>
  <text x="470" y="92" font-size="10.5" fill="#64748b">(ADH + aldosterone →</text>
  <text x="470" y="106" font-size="10.5" fill="#64748b">variable H₂O reabsorption)</text>
  <text x="420" y="356" font-size="10.5" fill="#b45309" text-anchor="middle">→ to renal pelvis (point of no return)</text>

  <text x="470" y="150" font-size="11" fill="#0f172a" font-weight="bold">Horizontal = identity</text>
  <text x="470" y="166" font-size="10.5" fill="#64748b">(keep what body needs)</text>
  <text x="470" y="190" font-size="11" fill="#0f172a" font-weight="bold">Vertical = volume</text>
  <text x="470" y="206" font-size="10.5" fill="#64748b">(concentrate the urine)</text>
</svg>`
      }],
      recap: `
- The **excretory system** regulates **blood pressure**, **blood osmolarity**, **acid–base balance**, and removes **nitrogenous wastes**. Pathway of urine: **kidney → renal pelvis → ureter → bladder → urethra**.
- The kidney is a **portal system** — two capillary beds in series: **renal artery → afferent arteriole → glomerulus → efferent arteriole → vasa recta → renal vein.**
- **Three processes:** **filtration** (blood → filtrate at Bowman's capsule, driven by **Starling forces**), **secretion** (blood → filtrate *elsewhere*), **reabsorption** (filtrate → blood). *Anything filtered and not reabsorbed is lost in urine.*
- Each **nephron segment** has a job: **PCT** (bulk reabsorption + waste secretion), **descending loop** (H₂O out), **ascending loop** (salt out, impermeable to H₂O), **DCT** (aldosterone-driven Na⁺), **collecting duct** (ADH/aldosterone-tuned H₂O — the point of no return).
- **Two BP hormones:** **aldosterone** (steroid; RAAS; ↑Na⁺ reabsorption → ↑volume, *no* osmolarity change) and **ADH/vasopressin** (peptide; ↑collecting-duct H₂O permeability → ↑volume, *↓* osmolarity).
`,
      detail: `
#### Anatomy of the excretory system
The **excretory system** consists of the **kidneys, ureters, bladder, and urethra**. The kidneys are two **bean-shaped** organs behind the digestive organs at the level of the bottom rib. The **functional unit** of the kidney is the **nephron** — each kidney has roughly **1 million** of them. All nephrons empty into the **renal pelvis**, which narrows into the **ureter**; urine then travels to the **bladder** and out through the **urethra**.

##### Kidney structure

![Figure 10.2 — Gross anatomy of the kidney: cortex, medulla, renal pelvis.](${fig(0, 1).src})

- The **cortex** is the outermost layer; the **medulla** sits within it.
- The **renal hilum** is a deep slit in the medial surface; the **renal pelvis** (widest part of the ureter) spans nearly its full width.
- The **renal artery**, **renal vein**, and **ureter** enter/exit at the hilum.

The kidney contains one of the body's few **portal systems** — **two capillary beds in series** that blood must cross before returning to the heart.

![Figure 10.3 — Microanatomy of the renal vascular system and the nephron.](${fig(0, 2).src})

| Step | Vessel / structure | Note |
|---|---|---|
| 1 | **Renal artery** | Branches through the medulla into the cortex |
| 2 | **Afferent arterioles** | Carry blood *toward* the glomerulus |
| 3 | **Glomeruli** | **First capillary bed** — convoluted capillary tufts |
| 4 | **Efferent arterioles** | Carry blood *away* from the glomerulus |
| 5 | **Vasa recta** | **Second capillary bed** — surrounds the loop of Henle |
| 6 | **Renal vein** | Blood leaves the kidney |

Around each glomerulus is a cuplike **Bowman's capsule**, which leads into a long tubule with distinct regions — in order: **proximal convoluted tubule → descending & ascending limbs of the loop of Henle → distal convoluted tubule → collecting duct.**

:::bridge
The renal portal system is one of **three major portal systems** in the body. The others are the **hypophyseal portal system** (hypothalamus → anterior pituitary) and the **hepatic portal system** (gut tube → liver). In each, blood crosses **two capillary beds** before returning to the heart.
:::

:::bridge
The vessel names borrow neuron vocabulary. **Afferent** arterioles carry blood *toward* the glomeruli, just as **afferent neurons** carry sensory information *toward* the CNS; **efferent** arterioles carry blood *away*, like **efferent neurons** relaying signals *away* from the CNS.
:::

##### Bladder structure
The bladder's muscular lining is the **detrusor muscle**; **parasympathetic** activity makes it contract. Urine exits through **two sphincters**:

| Sphincter | Muscle type | Control |
|---|---|---|
| **Internal urethral sphincter** | **Smooth** muscle | **Involuntary** (contracted at rest) |
| **External urethral sphincter** | **Skeletal** muscle | **Voluntary** |

When the bladder fills, **stretch receptors** trigger **parasympathetic** firing → the detrusor contracts and the **internal sphincter relaxes**: the **micturition reflex**. The individual then chooses to relax the **external sphincter** (urinate) or hold it (delay). Urination is aided by **abdominal muscle** contraction, which raises abdominal pressure and compresses the bladder.

#### Osmoregulation
The kidney filters blood to form **urine**, whose composition and volume track the body's current state. Low blood volume + high osmolarity → **low-volume, concentrated** urine (retain water); excess IV fluids → **high-volume, dilute** urine. The kidney's core job — regulate **blood volume and osmolarity** — is accomplished through **three processes**.

##### Filtration

![Figure 10.4 — Starling forces: relative hydrostatic and oncotic pressure gradients set the direction and rate of filtration.](${fig(0, 3).src})

**Filtration** is the nephron's first function: about **20%** of the blood passing through the glomerulus is forced as fluid into Bowman's space, forming the **filtrate**. Movement is governed by **Starling forces** — the balance of **hydrostatic** and **oncotic** pressures between blood and Bowman's space:

- **Hydrostatic pressure** in the glomerulus ≫ that in Bowman's space → pushes fluid **into** the nephron.
- **Oncotic pressure** (blood osmolarity > Bowman's space) → opposes fluid movement into the nephron.
- Hydrostatic dominates → **net flow is from blood into the nephron**.

The filtrate resembles blood **minus cells and proteins** (too large for the glomerular pores) and is **isotonic** to blood. The kidneys filter ~**180 L/day** (~36× blood volume) — the entire blood volume about every **40 minutes**. A **kidney stone** obstructing the ureter backs urine up, raising **hydrostatic pressure in Bowman's space** until filtration halts.

:::bridge
Like the *electromotive* force, **Starling "forces"** are a misnomer — it is a **pressure differential**, not a force, that drives net fluid movement from the glomerulus into Bowman's space.
:::

:::keyconcept
Picture the glomerulus as a **sieve or colander**: small dissolved molecules (e.g., **glucose**, later reabsorbed) pass through the pores; **proteins and blood cells** cannot. **Cells or protein in the urine** signal a problem at the level of the **glomerulus**.
:::

##### Secretion
Nephrons also **secrete** salts, acids, bases, and **urea** directly into the tubule by active or passive transport, tuned to the body's needs. A protein-heavy diet floods the body with nitrogen; **ammonia (NH₃)**, a toxic base, is converted by the **liver** into neutral **urea**, which the kidney secretes for excretion. Secretion also clears **excess K⁺, H⁺**, and drug metabolites, and is the route for wastes **too large** to cross glomerular pores.

##### Reabsorption
**Reabsorption** takes filtered/secreted compounds back up for reuse. **Glucose, amino acids, and vitamins** are almost always reabsorbed; hormones (**ADH/vasopressin**, **aldosterone**) tune how much **water** is reabsorbed to defend blood pressure.

:::keyconcept
The three processes, by direction of solute movement:
- **Filtration** — blood → filtrate, **at Bowman's capsule**
- **Secretion** — blood → filtrate, **anywhere besides** Bowman's capsule
- **Reabsorption** — filtrate → blood
:::

#### Nephron function
The kidney has **two goals**: *keep what the body needs and lose what it doesn't*, and *concentrate the urine to conserve water*. Glucose and amino acids are reabsorbed (rarely in urine); wastes like **H⁺, K⁺, ammonia, and urea** stay in the filtrate and are excreted; **water** is reabsorbed in bulk to maintain pressure and hydration.

:::keyconcept
**Anything that makes it into the filtrate and is not reabsorbed will be lost from the body in the urine.**
:::

![Figure 10.5 — Reabsorption and secretion in the nephron: movement of ions and water along each segment.](${fig(0, 4).src})

As a theme: **horizontal** segments (Bowman's capsule, PCT, DCT) focus on the **identity** of particles (*keep what the body needs*); **vertical** segments (loop of Henle, collecting duct) focus on **volume and concentration** (*concentrate the urine*).

The segment-by-segment summary — the single highest-yield table in the chapter:

| Segment | Permeable / acts on | Reabsorbs | Secretes | Net effect |
|---|---|---|---|---|
| **Bowman's capsule** | Glomerular filter | — | — | **Filtration**: water, ions, glucose, amino acids, vitamins (no cells/proteins) |
| **Proximal convoluted tubule (PCT)** | Bulk transport | **Amino acids, glucose, water-soluble vitamins, ~70% of Na⁺, salts, H₂O** | **H⁺, K⁺, ammonia, urea** | Filtrate stays **isotonic**; controls solute **identity** |
| **Descending limb (loop of Henle)** | **Water only** | **Water** (out into hyper­tonic medulla → vasa recta) | — | Concentrates filtrate; conserves **water** |
| **Ascending limb (loop of Henle)** | **Salt only** (impermeable to H₂O) | **Na⁺, Cl⁻** (passive in thin segment; active in thick **diluting segment**) | — | Filtrate becomes **hypotonic**; only site that **dilutes** below blood |
| **Distal convoluted tubule (DCT)** | Responds to **aldosterone** | **Na⁺** (water follows) | **H⁺, K⁺**, wastes (like PCT) | Concentrates urine, ↓ volume; controls **identity** |
| **Collecting duct** | Responds to **aldosterone + ADH** | **Water** (variable permeability) | — | Final concentration; **point of no return** |

##### Proximal convoluted tubule
The filtrate first enters the **PCT**, where **amino acids, glucose, water-soluble vitamins, and most salts** are reabsorbed with water. Nearly **70% of filtered Na⁺** is reabsorbed here, yet the filtrate stays **isotonic** because solutes and a large volume of water leave together. Solutes entering the **interstitium** (connective tissue around the nephron) are picked up by the **vasa recta**. The PCT also **secretes** H⁺, K⁺, ammonia, and urea.

:::mnemonic
Major waste products excreted in the urine — **"Dump the HUNK":**
**H**⁺ · **U**rea · ammonia (**N**H₃) · **K**⁺
:::

##### Loop of Henle
Filtrate enters the **descending limb**, which dives into the medulla and is **permeable only to water**. Because medullary osmolarity **rises with depth**, water flows *out* of the descending limb into the increasingly concentrated interstitium and is picked up by the **vasa recta**.

The kidney actively sets up this **medullary osmolarity gradient**: in the cortex, osmolarity ≈ blood; deep in the medulla it ranges from **isotonic** (excreting water) to **4× concentrated** (conserving water). No gradient → no driving force → water lost in urine. A more concentrated interstitium → water leaves the tubule, into the interstitium, back to blood.

The vasa recta and nephron form a **countercurrent multiplier system** — filtrate in the loop flows **opposite** to blood in the vasa recta. If they flowed the *same* direction they would quickly equilibrate; flowing **opposite** keeps filtrate exposed to **hypertonic blood**, maximizing water reabsorption.

At the turn, permeability flips: the **ascending limb** is **permeable to salt, impermeable to water**. The descending limb maximizes **water** reabsorption (rising medullary osmolarity); the ascending limb maximizes **salt** reabsorption (*falling* medullary osmolarity). At the inner-to-outer medulla transition, the tube thickens into the **diluting segment** — not a wider lumen but **larger, mitochondria-rich cells** that **actively** reabsorb Na⁺ and Cl⁻. So much salt leaves while water is trapped that the filtrate becomes **hypotonic** to the interstitium; this is the **only** nephron segment that can make urine **more dilute than blood** (key during **overhydration**). Across the whole loop the filtrate is slightly diluted, but far more importantly its **volume is greatly reduced** — a large net water reabsorption.

##### Distal convoluted tubule
The filtrate then enters the **DCT**, which responds to **aldosterone** by promoting **Na⁺ reabsorption**. Because Na⁺ is **osmotically active**, water follows, **concentrating** the urine and decreasing its volume. Like the PCT, the DCT is a site of **waste secretion**.

:::realworld
In conditions like **congestive heart failure**, excess fluid collects in the lungs or tissues (**edema**). A **diuretic** inhibits Na⁺ reabsorption in one or more nephron regions, raising Na⁺ excretion; as an osmotically active particle, Na⁺ **pulls water with it**, relieving the body of excess fluid.
:::

##### Collecting duct
The final urine concentration depends on the **collecting duct's permeability**, which responds to **both aldosterone and ADH (vasopressin)**. More permeability → more **water reabsorption** → more concentrated urine; reabsorbed water enters the interstitium → vasa recta → plasma. The collecting duct **almost always reabsorbs water**, but the amount is **variable**: well-hydrated → fairly impermeable to salt and water; conservation mode → ADH + aldosterone **raise** water reabsorption for concentrated urine.

The collecting duct is the **point of no return** — anything not reabsorbed by its end is **excreted**. The fluid (mostly **urea, uric acid, and excess Na⁺/K⁺/Mg²⁺/Ca²⁺**) collects in the **renal pelvis** and flows through the ureter to the bladder.

#### Functions of the excretory system
By filtering, secreting, and reabsorbing with osmolarity gradients and selective permeability, the kidneys — working with the **endocrine, cardiovascular, and respiratory** systems — control **blood pressure, blood osmolarity, and acid–base balance**.

##### Blood pressure
Two hormones dominate blood-pressure control: **aldosterone** and **ADH (vasopressin)**.

**Aldosterone** is a **steroid** from the **adrenal cortex**, released when blood pressure falls. The cascade — the **renin–angiotensin–aldosterone system (RAAS)**:

1. Low BP → **juxtaglomerular cells** release **renin**.
2. Renin cleaves **angiotensinogen** (a liver protein) → **angiotensin I**.
3. **Angiotensin-converting enzyme (ACE)** in the lungs → **angiotensin II**.
4. Angiotensin II → **aldosterone** release from the adrenal cortex.

Aldosterone makes the **DCT and collecting duct** reabsorb more **Na⁺**; water follows, so **isotonic fluid** is reabsorbed → ↑ **blood volume** and **pressure**. Aldosterone also **increases K⁺ and H⁺ excretion**.

:::realworld
We exploit this pathway pharmacologically. **ACE inhibitors** (mostly ending in **–*pril***) block the conversion of angiotensin I → II. **Angiotensin II receptor blockers** (**–*sartan***: losartan, valsartan, irbesartan) block the receptor. Both limit aldosterone, reducing salt/water reabsorption → **lower blood pressure**.
:::

**ADH (antidiuretic hormone / vasopressin)** is a **peptide** made by the **hypothalamus** and released by the **posterior pituitary** in response to **high blood osmolarity**. It makes the **collecting duct's cell junctions leaky**, so the hypertonic interstitium pulls **water** out of the tubule. **Alcohol and caffeine inhibit ADH** → frequent, dilute urine.

| | **Aldosterone** | **ADH (vasopressin)** |
|---|---|---|
| Class | **Steroid** | **Peptide** |
| Source | **Adrenal cortex** | Made in **hypothalamus**, released by **posterior pituitary** |
| Trigger | Low blood pressure (via **RAAS**) | **High blood osmolarity** (also low volume) |
| Acts on | **DCT + collecting duct** | **Collecting duct** permeability |
| Reabsorbs | **Na⁺** (water follows) | **Water** only |
| Effect on volume | ↑ | ↑ |
| Effect on osmolarity | **No change** | **↓ (decreases)** |

:::keyconcept
**ADH** governs *water only* → it **lowers** blood osmolarity. **Aldosterone** drives *both salt and water* reabsorption → **no change** in blood osmolarity.
:::

The cardiovascular system also tunes BP by **vasoconstriction/vasodilation**. Constricting the **afferent arteriole** lowers pressure at the glomeruli (adjacent to juxtaglomerular cells) → **renin release** → further raises BP.

##### Osmoregulation
Blood osmolarity must be tightly held (~**290 mOsm/L**) to keep oncotic pressures correct. A terminology note: **osmotic pressure** is the "sucking" pressure from **all** dissolved particles; **oncotic pressure** is the portion attributable to **dissolved proteins** specifically. When osmolarity is **low**, excess water is excreted and solutes reabsorbed; when **high**, water reabsorption and solute excretion both increase.

##### Acid–base balance
The **bicarbonate buffer system** is the major regulator of blood pH:

$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$

The **respiratory** system adjusts pH **quickly** by changing respiratory rate (↑ rate blows off **CO₂**, shifting the equilibrium left and raising pH; ↓ rate does the opposite). The **kidneys** act more **slowly** but powerfully: when pH is **too low**, they **excrete more H⁺** and **reabsorb more bicarbonate** (raising pH); when pH is **too high**, they **excrete more bicarbonate** and **reabsorb more H⁺**.
`
    },

    /* ───────────────────────────── 10.2 Skin ───────────────────────────── */
    {
      id: 's2', num: '10.2', title: 'Skin',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 10.6 — Anatomy of the skin and subcutaneous tissue: epidermis, dermis, and hypodermis with their glands, vessels, and sensory receptors.' }],
      recap: `
- The **skin (integument)** is the **largest organ** (~16% of body weight), a key **nonspecific immune barrier**, and is derived from **ectoderm**.
- **Three layers (deep → superficial): hypodermis (subcutaneous) → dermis → epidermis.** The **epidermis** has **five strata** (deep → superficial): **basale, spinosum, granulosum, lucidum, corneum** — *"Come, Let's Get Sun Burned."*
- **Keratinocytes** (make **keratin**) are the predominant epidermal cell; **melanocytes** make **melanin** (UV/DNA protection, passed to keratinocytes); **Langerhans cells** are antigen-presenting **macrophages**.
- The **dermis** has a **papillary layer** (loose CT) and **reticular layer** (dense CT) and houses most **sensory receptors**.
- **Thermoregulation:** cooling via **sweating + vasodilation**; warming via **piloerection, vasoconstriction, shivering, and fat insulation**.
`,
      detail: `
#### Structure
By weight and size the **skin (integument)** is the body's **largest organ** — about **16%** of body weight — and a major component of **nonspecific immune defense**, shielding us from the elements and pathogens. From **deepest to most superficial**, the layers are the **hypodermis (subcutaneous layer) → dermis → epidermis**. Skin is derived from the **ectoderm**.

#### The epidermis

![Figure 10.7 — Layers of the epidermis (deep to superficial): basale, spinosum, granulosum, lucidum, corneum.](${fig(1, 1).src})

The **epidermis** is subdivided into layers called **strata**. From deepest outward:

| Stratum (deep → superficial) | What happens here |
|---|---|
| **Stratum basale** | **Stem cells** proliferate into **keratinocytes** (the predominant skin cell, producing **keratin**); contains **melanocytes** |
| **Stratum spinosum** | Keratinocytes become connected to one another; site of **Langerhans cells** |
| **Stratum granulosum** | Keratinocytes **die and lose their nuclei** |
| **Stratum lucidum** | Present **only in thick, hairless skin** (soles, palms); nearly **transparent** |
| **Stratum corneum** | Up to several dozen layers of **flattened keratinocytes** → barrier against pathogens and fluid/salt loss |

Hair projects above the skin, and there are openings for **sweat and sebaceous glands**.

:::mnemonic
**Layers of the epidermis (superficial → deep): "Come, Let's Get Sun Burned."**
Stratum **C**orneum · stratum **L**ucidum · stratum **G**ranulosum · stratum **S**pinosum · stratum **B**asale.
:::

##### Other cells of the epidermis
The main cells are **keratinocytes**; the **keratin** they make resists damage and protects against injury, water, and pathogens. **Calluses** are excess keratin deposited where friction recurs; **fingernails** and **hair** are also keratin-based.

| Cell | Origin | Location | Function |
|---|---|---|---|
| **Keratinocyte** | Stratum basale stem cells | Throughout epidermis | Produce **keratin**; barrier |
| **Melanocyte** | **Neural crest** cells | Stratum basale | Produce **melanin** → protect DNA from **UV**; pigment passed to keratinocytes |
| **Langerhans cell** | Macrophage lineage | Stratum spinosum | **Antigen-presenting** cell; activates **T cells** |

**Melanocytes** produce **melanin**, a pigment that protects skin from **UV-induced DNA damage**; once made, it is transferred to keratinocytes. All humans have **comparable numbers** of melanocytes — skin tone reflects melanocyte **activity** (more active → darker), and **UV exposure** increases activity (tanning). **Langerhans cells** are special **macrophages** in the stratum spinosum that **present antigens to T cells**.

:::realworld
**Albinism** is a genetic metabolic disorder (typically **autosomal recessive**) marked by an inability to synthesize **melanin**; affected individuals are extremely **sun-sensitive**. Depigmentation also occurs in **vitiligo**, an **autoimmune** disorder in which melanocytes are destroyed by the immune system.
:::

#### The dermis
The **dermis** has two layers:

- **Papillary layer** — upper, just below the epidermis; **loose connective tissue**.
- **Reticular layer** — deeper, **denser connective tissue**.

**Sweat glands, blood vessels, and hair follicles** originate in the dermis, as do **most sensory receptors**:

| Receptor | Stimulus |
|---|---|
| **Merkel cells (discs)** | **Deep pressure and texture** (at the epidermal–dermal junction) |
| **Free nerve endings** | **Pain** |
| **Meissner's corpuscles** | **Light touch** |
| **Ruffini endings** | **Stretch** |
| **Pacinian corpuscles** | **Deep pressure and vibration** |

#### The hypodermis
The **hypodermis** is a layer of **connective tissue** containing **fat and fibrous tissue** that connects the skin to the rest of the body.

#### Thermoregulation
Beyond protection, UV defense (melanin), and sensation, the skin handles **thermoregulation** — keeping internal temperature constant via **sweating, piloerection, vasodilation, and vasoconstriction**, all referenced to the **hypothalamic** set point.

| Goal | Mechanisms |
|---|---|
| **Cool down** (temp **above** set point) | **Sweating** (evaporation absorbs heat) + **arteriolar vasodilation** (brings blood to skin, speeds evaporation) |
| **Warm up / retain heat** (cold) | **Piloerection** (arrector pili contract → hairs stand, trapping warm air) · **vasoconstriction** · **shivering** (ATP → heat) · **fat insulation** (white fat; **brown fat** in infants) |

When temperature rises above the hypothalamic set point, **postganglionic sympathetic neurons that release acetylcholine** stimulate **sweat glands** to secrete water and ions. Cooling comes not from sweat itself but from the **evaporation** of water (a phase change that absorbs body heat); simultaneous **vasodilation** floods the skin with blood to accelerate it.

:::bridge
**Evaporation is endothermic** — water absorbs heat from its surroundings to vaporize. Dissolved solutes in sweat slightly **raise its boiling point** (a colligative property: **boiling-point elevation**), letting it absorb even more heat.
:::

:::bridge
The neurons innervating sweat glands are **unusual**: unlike all other **postganglionic sympathetic** neurons (which are noradrenergic), they are **cholinergic** (release **acetylcholine**, not norepinephrine) — like all preganglionic autonomic neurons and all postganglionic parasympathetic neurons.
:::

In the cold, **arrector pili** muscles contract → **piloerection** traps a layer of warm air; skin arterioles **constrict** to limit blood (and heat) reaching the surface; skeletal muscle may contract rapidly (**shivering**), converting much ATP energy into heat. Beneath the skin, **white fat** insulates; **brown fat** (especially in infants) has a **less efficient electron transport chain**, releasing more heat as fuel burns.

Finally, because skin is **relatively impermeable to water**, it helps maintain body **osmolarity** — blocking both water entry and water loss. This matters acutely in **burns** or large skin loss, where **dehydration** becomes a real threat to survival.
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Wastes dumped in urine — "Dump the HUNK":** **H**⁺ · **U**rea · ammonia (**N**H₃) · **K**⁺. These stay in the filtrate and are excreted.',
      '**Epidermis (superficial → deep) — "Come, Let\'s Get Sun Burned":** stratum **C**orneum · **L**ucidum · **G**ranulosum · **S**pinosum · **B**asale.',
      '**ADH vs. aldosterone:** **A**DH = **A**qua only (water → lowers osmolarity). **Aldo**sterone = sod**i**um *and* water (no osmolarity change). Both raise blood volume/pressure.',
      '**Renal vascular pathway:** "**A** **F**at **G**lob **E**ats **V**ery **R**arely" → renal **A**rtery → a**F**ferent arteriole → **G**lomerulus → **E**fferent arteriole → **V**asa recta → renal vein.',
      '**Loop of Henle permeability:** **D**escending = **D**ehydrates (water out); **A**scending = **A**ctively pumps salt (water can\'t follow). "Down the water, up the salt."',
      '**Filter vs. secrete vs. reabsorb:** **Filtration** = blood→filtrate *at Bowman\'s*; **Secretion** = blood→filtrate *everywhere else*; **Reabsorption** = filtrate→blood.',
      '**ACE-inhibitor / ARB drug endings:** ACE inhibitors end in **–pril**; angiotensin II receptor blockers end in **–sartan**. Both lower BP by limiting aldosterone.',
      '**Sweat-gland neurons are the sympathetic oddball:** postganglionic **sympathetic** but **cholinergic** (ACh), not noradrenergic.'
    ],
    keyConcepts: [
      '**Anything filtered and not reabsorbed is lost in urine** — the unifying rule of nephron function. The kidney *keeps what the body needs* (glucose, amino acids, water) and *loses what it doesn\'t* (H⁺, K⁺, ammonia, urea).',
      '**Geometry encodes function:** horizontal segments (Bowman\'s capsule, PCT, DCT) control solute *identity*; vertical segments (loop of Henle, collecting duct) control urine *volume/concentration*. The collecting duct is the **point of no return**.',
      '**Countercurrent multiplier:** filtrate and vasa-recta blood flow in **opposite** directions so the filtrate is always exposed to hypertonic blood — maximizing water reabsorption. The **ascending limb / diluting segment** is the only place urine can become *more dilute* than blood.',
      '**Two BP hormones, one goal, different osmolarity outcomes:** aldosterone (steroid, RAAS, Na⁺) raises volume with **no osmolarity change**; ADH (peptide, posterior pituitary) raises volume and **lowers osmolarity** by reabsorbing water alone.',
      '**Skin is an integrative organ:** a single barrier doing immune defense (Langerhans cells, keratin), UV protection (melanin), sensation (dermal receptors), thermoregulation (sweat/vasomotor/piloerection), and osmotic protection (water-impermeable barrier).'
    ],
    equations: [
      { name: 'Renal clearance', tex: 'C = \\dfrac{U \\times V}{P}', note: 'Volume of plasma cleared of a substance per unit time. U = urine concentration, V = urine flow rate, P = plasma concentration of the substance.' },
      { name: 'Bicarbonate buffer', tex: 'CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-', note: 'Major regulator of blood pH; the respiratory system tunes it fast (CO₂), the kidneys slowly (H⁺/bicarbonate handling).' }
    ]
  },

  questions: raw.questions
};
