// Chapter 9 — The Digestive System. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch09.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 9,
  title: 'The Digestive System',
  subtitle: 'Anatomy of the digestive tract · ingestion & digestion · accessory organs (pancreas, liver, gallbladder) · absorption & defecation',

  blocks: [
    /* ──────────────── 9.1 Anatomy of the Digestive System ──────────────── */
    {
      id: 's1', num: '9.1', title: 'Anatomy of the Digestive System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 9.1 — Anatomy of the Digestive System: the alimentary canal plus its accessory organs.' }],
      recap: `
- **Two kinds of digestion: intracellular** (oxidizing glucose/fatty acids for energy — part of metabolism) vs. **extracellular** (in the lumen of the **alimentary canal**, technically "outside" the body).
- **Digestion** = breaking food into monomers; **absorption** = moving those products into the circulation. Digestion is split into **mechanical** (physical, no bonds broken) and **chemical** (enzymatic bond cleavage).
- **GI path:** **mouth → pharynx → esophagus → stomach → small intestine → large intestine → rectum → anus**, compartmentalized by **sphincters**.
- **Accessory organs** (salivary glands, pancreas, liver, gallbladder) add enzymes & lubrication.
- **Enteric nervous system** drives **peristalsis**: **parasympathetic = "rest & digest"** (↑secretions, ↑motility); **sympathetic = "fight or flight"** (↓blood flow, ↓motility).
`,
      detail: `
#### Two types of digestion
- **Intracellular digestion** — part of **metabolism**: the oxidation of glucose and fatty acids for energy. But our diet isn't pure glucose/fat, so first those nutrients must be extracted.
- **Extracellular digestion** — happens in the lumen of the **alimentary canal**. Because the GI lumen communicates with the outside world, this is technically **"outside" the body**. The canal runs **mouth → anus** and is partitioned by **sphincters** (circular smooth muscle that contracts to compartmentalize function).

#### Digestion vs. absorption
The most basic functional split in the gut:

| Process | What it does |
|---|---|
| **Digestion** | Breaks food into its building blocks: **carbohydrates → monosaccharides**, **lipids → free fatty acids + glycerol**, **proteins → amino acids**. |
| **Absorption** | Transports the products of digestion **out of the gut and into the circulatory system** for delivery to tissues. |

Digestion itself comes in two flavors:

- **Mechanical digestion** — *physical* breakdown of large particles into smaller ones; **no chemical bonds broken**.
- **Chemical digestion** — *enzymatic* cleavage of bonds (peptide bonds of proteins, glycosidic bonds of starches).

#### The path of food
Trace it cold — this is a guaranteed point:

| # | Structure | Role |
|---|---|---|
| 1 | **Oral cavity (mouth)** | Mechanical + chemical digestion begins |
| 2 | **Pharynx** | Shared pathway for **food and air** |
| 3 | **Esophagus** | Propels food to the stomach via peristalsis |
| 4 | **Stomach** | Acid + enzyme digestion → chyme |
| 5 | **Small intestine** (duodenum → jejunum → ileum) | Most chemical digestion **and** most absorption |
| 6 | **Large intestine** (cecum → colon → rectum) | Water & salt absorption; forms feces |
| 7 | **Rectum → anus** | Stores then eliminates feces |

**Accessory organs** — **salivary glands, pancreas, liver, gallbladder** — sit alongside the tract and contribute enzymes and lubrication without food passing through them.

:::mnemonic
**GI tract, top to bottom:** "**M**y **P**iano **E**ats **S**oft **S**erve **L**ike **R**oyalty **A**lways" → **M**outh · **P**harynx · **E**sophagus · **S**tomach · **S**mall intestine · **L**arge intestine · **R**ectum · **A**nus.
:::

#### The enteric nervous system & autonomic control
The **enteric nervous system** is ~**100 million neurons** in the walls of the gut tube. It triggers **peristalsis** (rhythmic contractions that push material along) and can run **independently of the brain and spinal cord**, though the autonomic system heavily regulates it.

| Division | Effect on the gut | Memory hook |
|---|---|---|
| **Parasympathetic** | **Stimulates** digestion: ↑ exocrine secretions, ↑ peristalsis | "Rest & digest" — the post-meal **food coma** |
| **Sympathetic** | **Inhibits** digestion: ↓ blood flow to gut, ↓ motility | "Fight or flight" — no time to digest |

:::keyconcept
**All of the glands of the body (except sweat glands) are innervated by the parasympathetic nervous system.** This is why anticholinergic ("anti-parasympathetic") drugs cause **dry mouth** and slowed gut motility.
:::
`
    },

    /* ───────────────────── 9.2 Ingestion and Digestion ───────────────────── */
    {
      id: 's2', num: '9.2', title: 'Ingestion and Digestion',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 9.2 — Anatomy of the Stomach: fundus, body, antrum, pylorus, curvatures, and rugae.' }],
      recap: `
- **Feeding hormones:** **ADH & aldosterone** → thirst; **glucagon & ghrelin** → hunger; **leptin & CCK** → satiety.
- **Oral cavity:** **mastication** (mechanical) + **salivary amylase (ptyalin)** and **lipase** (chemical). Tongue forms a **bolus**.
- **Pharynx** routes food past the larynx (the **epiglottis** covers the airway); **esophagus** uses **peristalsis**, food enters via the **lower esophageal / cardiac sphincter**.
- **Stomach (4 cell types):** **mucous** (protective bicarb mucus), **chief** (pepsinogen), **parietal** (HCl + intrinsic factor), **G-cells** (gastrin). Output = **chyme**.
- **Duodenum:** **brush-border enzymes** (disaccharidases + peptidases) + **enteropeptidase**, and hormones **secretin** (↑bicarbonate, ↓HCl, slows motility) and **CCK** (↑bile + pancreatic juice; satiety). **Bile emulsifies, lipase hydrolyzes.**
`,
      detail: `
#### Ingestion & the hunger/satiety hormones
To get nutrients we first **ingest** food. Several hormones tune feeding behavior:

| Signal | Hormones | Source / note |
|---|---|---|
| **Thirst** | **ADH (vasopressin)**, **aldosterone** | Drive fluid consumption |
| **Hunger** ↑ | **Glucagon**, **ghrelin** | Glucagon from pancreas; ghrelin from stomach & pancreas |
| **Satiety** (fullness) ↑ | **Leptin**, **cholecystokinin (CCK)** | "Stop eating" signals |

:::mnemonic
**"Ghrelin = Growling stomach"** (hunger); **"Leptin = Leaves you full"** (satiety). Ghrelin and leptin pull in opposite directions.
:::

#### Oral cavity
The **oral cavity** does **both** mechanical and chemical digestion.

- **Mechanical:** **mastication** (chewing) with teeth, tongue, and lips. Increases the **surface-area-to-volume ratio** for enzymes and prevents large obstruction-risk particles.
- **Chemical:** enzymes in **saliva** from the **three pairs of salivary glands** (parasympathetically driven; even the *sight/smell* of food triggers it):
  - **Salivary amylase (ptyalin)** — hydrolyzes **starch → maltose + dextrins**.
  - **Lipase** — catalyzes hydrolysis of **lipids**.
- The tongue rolls food into a **bolus**, forced back to the pharynx and swallowed. Net chemical digestion here is **minimal** (food doesn't linger).

:::keyconcept
Carbohydrate chemical digestion is **initiated in the mouth but completed in the small intestine.** **Salivary amylase** (mouth) and **pancreatic amylase** (small intestine) do the **same job** in different places.
:::

:::realworld
The three major salivary gland pairs are the **parotid, submandibular, and sublingual** glands. The **parasympathetic** system promotes watery salivation; the **sympathetic** system makes saliva **more viscous** — hence the dry, tacky mouth of a fight-or-flight response.
:::

#### Pharynx
The **pharynx** connects the mouth and posterior nasal cavity to the esophagus — **and** to the larynx (respiratory tract). Three regions:

- **Nasopharynx** — behind the nasal cavity
- **Oropharynx** — back of the mouth
- **Laryngopharynx** — above the vocal cords

During swallowing the **epiglottis** (a cartilage flap) folds down over the laryngeal inlet so food can't enter the airway. Failure → **aspiration** and choking.

#### Esophagus
The **esophagus** is a muscular tube from pharynx to stomach with a telling muscle gradient:

| Segment | Muscle type | Control |
|---|---|---|
| **Top third** | Skeletal | **Somatic** (voluntary) |
| **Middle third** | Mixed | Transitional |
| **Bottom third** | Smooth | **Autonomic** (involuntary) |

- **Peristalsis** — rhythmic smooth-muscle contraction that propels food toward the stomach. Reversal of peristalsis = **emesis (vomiting)**, triggered by chemicals, infection, pharyngeal stimulation, or even thoughts.
- Swallowing starts at the **upper esophageal sphincter** (oropharynx muscles); the bolus then reaches the **lower esophageal sphincter (cardiac sphincter)**, which relaxes to admit food to the stomach.

:::realworld
A weak **lower esophageal sphincter** underlies **GERD** — acid refluxes into the poorly protected lower esophagus, irritating pain receptors that localize poorly, producing the burning chest sensation we call **heartburn**.
:::

#### Stomach
The **stomach** is a ~**2-liter** muscular organ in the **upper left quadrant**, beneath the diaphragm. It uses **HCl** and enzymes (pH ≈ 2), so a **thick mucosa** prevents **autodigestion**. Four anatomical divisions:

| Region | Gland type |
|---|---|
| **Fundus** + **Body** | Mostly **gastric glands** |
| **Antrum** + **Pylorus** | Mostly **pyloric glands** |

Curvatures: **lesser** (internal) and **greater** (external). The lining folds into **rugae**.

##### Gastric & pyloric gland cells
The **gastric glands** respond to the **vagus nerve** (parasympathetic), triggered by the sight/taste/smell of food. Know the four secretory cells cold:

| Cell | Secretion | Function |
|---|---|---|
| **Mucous cells** | Bicarbonate-rich **mucus** | Protects the wall from acid & proteases |
| **Chief cells** | **Pepsinogen** (a **zymogen**) | Cleaved by H⁺ → **pepsin**, which digests proteins near **aromatic** residues; **most active at low pH (~2)** — unusual for a human enzyme |
| **Parietal cells** | **HCl** + **intrinsic factor** | HCl kills microbes, denatures proteins, activates pepsin; intrinsic factor is needed for **vitamin B₁₂** absorption |
| **G-cells** (pyloric) | **Gastrin** (peptide hormone) | ↑ HCl secretion by parietal cells; ↑ gastric motility/mixing |

The stomach's churning + acid + pepsin turns food into **chyme**, an acidic semifluid. A few things (alcohol, aspirin) absorb directly here, but the stomach is **mainly a digestive organ**.

:::keyconcept
**The stomach secretes six products:** (1) **HCl** — kills microbes, denatures proteins, activates pepsinogen; (2) **pepsinogen** → pepsin; (3) **mucus** — protects mucosa; (4) **bicarbonate** — protects mucosa; (5) **water** — dissolves/dilutes; (6) **intrinsic factor** — needed for **B₁₂** absorption.
:::

:::mnemonic
**Gastric cells & their secretions:** "**G**astrin from **G**-cells; **P**arietal makes the **P**rotons (HCl); **Chief** is the **Chef** (cooks proteins → pepsinogen); **M**ucous makes **M**ucus."
:::

:::realworld
**NSAIDs** (ibuprofen, naproxen, aspirin) disrupt mucus production → unprotected mucosa → **gastritis** or **gastric ulcers**. Separately, **Zollinger–Ellison syndrome** is a **gastrin-secreting tumor (gastrinoma)** → excess HCl → intractable ulcers.
:::

#### Duodenum
The **small intestine** has three segments — **duodenum, jejunum, ileum** — up to **7 meters** long. The **duodenum** does the **majority of chemical digestion** (minor absorption); the **jejunum and ileum** do most **absorption**.

Food exits the stomach through the **pyloric sphincter** into the duodenum. Chyme arriving here triggers **brush-border enzymes** (on the luminal cell surface, breaking dimers/trimers into absorbable monomers), plus **enteropeptidase** and the hormones **secretin** and **CCK**.

##### Brush-border enzymes
| Class | Enzymes | Action |
|---|---|---|
| **Disaccharidases** | **Maltase** | maltose → 2 glucose |
| | **Isomaltase** | isomaltose → 2 glucose |
| | **Lactase** | lactose → glucose + galactose |
| | **Sucrase** | sucrose → glucose + fructose |
| **Peptidases** | **Aminopeptidase** | removes the **N-terminal** amino acid |
| | **Dipeptidases** | cleave **dipeptides** → free amino acids |

- Missing a disaccharidase → that sugar isn't broken down; gut bacteria ferment it (releasing **methane**) and the undigested sugar pulls water osmotically → **diarrhea** (e.g., **lactose intolerance**: bloating, flatulence, diarrhea).
- Unlike carbs (which must be **monosaccharides** to absorb), proteins can be absorbed as **di- and tripeptides**, not just single amino acids.

##### Enteropeptidase — the master switch
**Enteropeptidase** (formerly **enterokinase**) activates **trypsinogen → trypsin**. Trypsin then triggers an **activation cascade** (activating other pancreatic zymogens). Enteropeptidase also activates **procarboxypeptidases A and B**.

:::realworld
**Celiac disease** is an **immune** reaction to **gluten** (esp. wheat): antibodies cross-react with the small-intestine mucosa, causing damage, diarrhea, and **malabsorption** (including fat and fat-soluble vitamins). It is an immune condition — **not** a true allergy.
:::

##### Duodenal hormones: secretin & CCK
| Hormone | Stimulus | Actions |
|---|---|---|
| **Secretin** | Acidic chyme in the duodenum | ↑ **bicarbonate** from pancreas; ↓ **HCl** from parietal cells; an **enterogastrone** → **slows motility** (more time for enzymes, esp. on fats) |
| **CCK (cholecystokinin)** | **Amino acids + fat** in chyme | ↑ **bile** release (gallbladder) + ↑ **pancreatic juice**; acts in the brain to promote **satiety** |

![Figure 9.3 — Hormonal control of the exocrine pancreas: CCK triggers enzyme release; secretin triggers bicarbonate.](${fig(1, 1).src})

##### Bile + lipase: the fat-digestion duo
**Bile** = bile salts + pigments + cholesterol. **Bile salts** (derived from cholesterol) are **not enzymes** — they're amphipathic, bridging aqueous and lipid environments like a soap. Their job is **mechanical**:

1. **Bile** **emulsifies** fats and cholesterol into **micelles**, getting fat into solution and hugely increasing surface area.
2. **Pancreatic lipase** (water-soluble) can then **hydrolyze the ester bonds** of the now-accessible fats (chemical digestion).

Without bile, fats would separate out of the watery duodenal mixture and lipase couldn't reach them. **CCK** also drives **pancreatic juice** secretion — a bicarbonate-rich **alkaline** mix (enzymes work best near **pH 8.5**) that can digest **all three** macronutrients (enzymes detailed in 9.3).

:::bridge
The stomach's acidic and the duodenum's basic environments illustrate the **pH–enzyme activity** relationship: **pepsin** peaks at **pH 2**, **pancreatic enzymes** at **pH 8.5**. pH, temperature, and salinity all affect enzyme function — *MCAT Biochemistry Review*, Ch. 2.
:::
`
    },

    /* ─────────────── 9.3 Accessory Organs of Digestion ─────────────── */
    {
      id: 's3', num: '9.3', title: 'Accessory Organs of Digestion',
      goals: goals(2),
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 9.4 — Anatomy of the Pancreas: ducts draining into the duodenum via the duodenal papillae.' }],
      recap: `
- **Accessory organs** = **pancreas, liver, gallbladder** — all arise as outgrowths of **endoderm** from the gut tube.
- **Pancreas:** **endocrine** (islets of Langerhans → insulin, glucagon, somatostatin) + **exocrine** (**acinar cells** → pancreatic juice). Enzymes: **amylase** (carbs), **trypsinogen/chymotrypsinogen/(pro)carboxypeptidases A&B** (proteins, as zymogens), **lipase** (fats). **Enteropeptidase is the master switch.**
- **Liver:** makes **bile**; processes nutrients (**glycogenesis/-olysis, gluconeogenesis**, fat storage/mobilization); makes **urea** from ammonia; **detoxifies** drugs/toxins; synthesizes **albumin** and **clotting factors**.
- **Bile** = **bile salts** (emulsify fat) + **pigments** (esp. **bilirubin**, from hemoglobin breakdown) + **cholesterol**. Failure to clear bilirubin → **jaundice**.
- **Gallbladder:** **stores & concentrates** bile; **CCK** triggers its release into the **biliary tree**.
`,
      detail: `
#### Accessory organs at a glance
Digestion needs enzymes not only from the gut lining but from the **pancreas, liver, and gallbladder**. All three develop as **outgrowths of endoderm** from the gut tube, so they're called the **accessory organs of digestion**.

#### Pancreas
The pancreas is a **dual-function** organ:

| Function | Cells | Products |
|---|---|---|
| **Endocrine** | **Islets of Langerhans** | **Insulin, glucagon, somatostatin** (blood-sugar control) |
| **Exocrine** (bulk of organ) | **Acinar cells** | **Pancreatic juice** — bicarbonate-rich, with enzymes for all 3 macronutrients |

##### Pancreatic enzymes
| Nutrient | Enzyme(s) | Note |
|---|---|---|
| **Carbohydrates** | **Pancreatic amylase** | polysaccharides → disaccharides |
| **Proteins** | **Trypsinogen, chymotrypsinogen, (pro)carboxypeptidases A & B** | released as **zymogens** (prevent autodigestion); activated in the duodenum |
| **Lipids** | **Pancreatic lipase** | fats → free fatty acids + glycerol |

**Activation cascade:** **enteropeptidase** (from the duodenum) is the **master switch** → converts **trypsinogen → trypsin** → trypsin then activates the **other zymogens**; enteropeptidase also activates **procarboxypeptidases A & B**.

Like all exocrine cells, acinar cells secrete into **ducts** that run down the middle of the pancreas and empty into the duodenum through the **major** and **minor duodenal papillae**.

:::mnemonic
**Pancreatic enzymes, one per macronutrient:** "**A**ll **P**eople **L**ift" → **A**mylase (carbs) · **P**roteases/peptidases (protein) · **L**ipase (fat). The proteases ship as inactive **-ogen** zymogens so the pancreas doesn't digest itself.
:::

:::realworld
**Pancreatitis** (usually from gallstones or alcohol) is **premature activation** of pancreatic enzymes → **autodigestion** of the pancreas. Very painful; long-term it can cause diabetes and impaired protein/fat digestion.
:::

#### Liver
The **liver** sits in the **upper right quadrant** and links to the gut two ways: **bile ducts** (to gallbladder and small intestine) and the **hepatic portal vein** (receives all blood draining the abdominal GI tract — nutrient-rich blood it processes before that blood reaches the inferior vena cava and right heart).

##### What the liver does
- **Nutrient processing:** stores excess sugar as **glycogen**; stores fat as **triacylglycerols**; reverses these via **glycogenolysis**, **gluconeogenesis**, and mobilizing fat in **lipoproteins**.
- **Detoxification:** converts toxic **ammonia → urea** (excreted by kidneys); metabolizes alcohol and **drugs** (some drugs are *activated* by the liver; others are inactivated, so they can't be taken orally).
- **Bile production** (its key digestive role — see below).
- **Protein synthesis:** **albumin** (maintains plasma **oncotic pressure**; carries drugs/hormones) and **clotting factors**.

:::keyconcept
**Liver functions (memorize the list):** processing/synthesis of nutrients (**glycogenesis & glycogenolysis**, fat storage/mobilization, **gluconeogenesis**), **urea** production, **detoxification** of chemicals, **bile** production, and synthesis of **albumin** and **clotting factors**.
:::

##### Bile
**Bile** is composed of three things:

| Component | Note |
|---|---|
| **Bile salts** | Amphipathic; **emulsify fat** (mechanical digestion) |
| **Pigments** | Especially **bilirubin**, a byproduct of **hemoglobin** breakdown |
| **Cholesterol** | — |

**Bilirubin** travels to the liver, is **conjugated** (attached to a protein), and secreted into bile for excretion. If the liver can't process/excrete it (liver damage, excess RBC destruction, or a blocked bile duct), **jaundice** (yellowing of the skin) results.

:::keyconcept
**The major components of bile** are **bile salts** (emulsify fats), **pigments** (especially **bilirubin**, from hemoglobin breakdown), and **cholesterol**.
:::

:::realworld
**Cirrhosis** (alcohol, hepatitis C, autoimmune hepatitis, fatty liver) is liver scarring → **portal hypertension** → swollen esophageal veins that can rupture (**hematemesis**, vomiting blood). It also causes **bleeding disorders** (↓ clotting factors), **hyperammonemia** (affecting mentation), and **hepatocellular carcinoma**.
:::

#### Gallbladder
The **gallbladder** sits just beneath the liver and **stores and concentrates bile**. On **CCK** release it contracts, pushing bile into the **biliary tree**; the bile duct merges with the **pancreatic duct** before emptying into the duodenum.

Because bile is **concentrated** here, it's a common site of **cholesterol or bilirubin stones** (gallstones). Stones can lodge in the biliary tree; one stuck just before the duodenum can block **both** the biliary tree and the pancreatic duct → **pancreatitis**.

:::bridge
A gallstone is just **precipitation** of a solid once its concentration exceeds the compound's **Kₛₚ** — favored in the gallbladder because bile is concentrated there. Solubility and Kₛₚ — *MCAT General Chemistry Review*, Ch. 9.
:::

#### Table 9.1 — Digestive enzymes (and bile)
The functions of every digestive enzyme (and bile) summarized. *Bile is **not** an enzyme but performs mechanical digestion of fats.*

| Nutrient | Enzyme | Site of production | Site of function | Function |
|---|---|---|---|---|
| **Carbs** | **Salivary amylase (ptyalin)** | Salivary glands | Mouth | Starch → maltose + dextrins |
| | **Pancreatic amylase** | Pancreas (acinar) | Duodenum | Starch → maltose + dextrins |
| | **Maltase** | Intestinal glands | Duodenum | Maltose → 2 glucose |
| | **Isomaltase** | Intestinal glands | Duodenum | Isomaltose → 2 glucose |
| | **Sucrase** | Intestinal glands | Duodenum | Sucrose → glucose + fructose |
| | **Lactase** | Intestinal glands | Duodenum | Lactose → glucose + galactose |
| **Proteins** | **Pepsin(ogen)** | Gastric glands (chief) | Stomach | Cleaves specific peptide bonds; activated by **HCl** |
| | **Trypsin(ogen)** | Pancreas (acinar) | Duodenum | Cleaves peptide bonds; activates chymotrypsinogen; activated by **enteropeptidase** |
| | **Chymotrypsin(ogen)** | Pancreas (acinar) | Duodenum | Cleaves peptide bonds; activated by **trypsin** |
| | **(Pro)carboxypeptidases A & B** | Pancreas (acinar) | Duodenum | Cleaves terminal bond at **carboxy** end; activated by **enteropeptidase** |
| | **Aminopeptidase** | Intestinal glands | Duodenum | Cleaves terminal bond at **amino** end |
| | **Dipeptidases** | Intestinal glands | Duodenum | Cleaves pairs of amino acids |
| | **Enteropeptidase** | Intestinal glands | Duodenum | Activates trypsinogen + procarboxypeptidases A & B |
| **Lipids** | **Bile** (not an enzyme) | Liver (stored in gallbladder) | Duodenum | **Emulsifies** fat |
| | **Lipase** | Pancreas (acinar) | Duodenum | Hydrolyzes lipids |

A visual summary of how each macromolecule class is digested:

![Figure 9.5 — Summary of digestive processes for fats, carbohydrates, and proteins.](${fig(2, 1).src})
`
    },

    /* ──────────────── 9.4 Absorption and Defecation ──────────────── */
    {
      id: 's4', num: '9.4', title: 'Absorption and Defecation',
      goals: goals(3),
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 9.6 — Structure of a Villus: microvilli, a capillary bed, and a lacteal.' }],
      recap: `
- **Most absorption is in the small intestine** (**jejunum + ileum**); the **large intestine** mainly absorbs **water**.
- **Villi** (with **microvilli**) maximize surface area; each holds a **capillary bed** (water-soluble nutrients) and a **lacteal** (fats → lymph).
- **Water-soluble** (monosaccharides, amino acids, water-soluble vitamins, short-chain fatty acids, water) → **capillaries → hepatic portal vein → liver**. **Fat-soluble** (fats, cholesterol, **vitamins A, D, E, K**) → packaged as **chylomicrons** → **lacteals → thoracic duct → left subclavian vein** (bypassing the liver).
- **Large intestine** = **cecum (+appendix via ileocecal valve) → colon (ascending, transverse, descending, sigmoid) → rectum → anus** (internal sphincter autonomic, external somatic).
- **Gut bacteria** make **vitamin K** and **biotin (B₇)**; ~**30%** of stool dry mass is bacteria.
`,
      detail: `
#### Where absorption happens
Nutrient absorption is concentrated in the **small intestine** (especially **jejunum + ileum**). The **large intestine** largely absorbs **water**.

#### Jejunum & ileum
The **duodenum** is mainly **digestion**; the **jejunum** and **ileum** handle **absorption**. The lining is folded into **villi** (fingerlike projections of epithelium), each carrying many **microvilli** — together drastically increasing surface area. Inside each villus:

- a **capillary bed** — absorbs **water-soluble** nutrients
- a **lacteal** — a lymphatic channel that takes up **fats**

:::mnemonic
**Segments of the small intestine — "Dow Jones Industrial":** **D**uodenum → **J**ejunum → **I**leum (in order, top to bottom).
:::

##### Absorption of carbohydrates & amino acids
Simple sugars (**glucose, fructose, galactose**) and **amino acids** enter epithelial cells by **secondary active transport** and **facilitated diffusion**. Blood flowing past keeps their concentration lower in the capillary than in the cell, so they **diffuse into the intestinal capillaries** and travel to the **liver via hepatic portal circulation**.

![Figure 9.7 — Absorption of carbohydrates and amino acids: coupled to Na⁺/H⁺, then facilitated diffusion into blood.](${fig(3, 1).src})

##### Absorption of fats
| Fat type | Route |
|---|---|
| **Short-chain fatty acids** | Nonpolar → **diffuse directly** into intestinal **capillaries** (no transporter), like carbs/amino acids |
| **Larger fats, glycerol, cholesterol** | Enter cells separately → re-form **triglycerides** → packaged with esterified cholesterol into **chylomicrons** |

**Chylomicrons** do **not** enter the blood directly — they enter the **lacteals** (start of the lymphatic system), which converge and drain at the **thoracic duct** in the base of the neck → **left subclavian vein**.

![Figure 9.8 — Absorption of lipids: micelle contents packaged into chylomicrons that enter lymph; short-chain fatty acids go to blood.](${fig(3, 2).src})

##### Vitamins
| Type | Examples | Absorption route |
|---|---|---|
| **Fat-soluble** | **A, D, E, K** (only four!) | Dissolve into **chylomicrons** → **lymphatic** circulation |
| **Water-soluble** | **B-complex, C** | Taken up with water/amino acids/carbs → directly into **plasma** |

Failure to digest/absorb fat (liver, gallbladder, pancreas, or small-intestine pathology) → **fat-soluble vitamin deficiency**.

:::mnemonic
**Fat-soluble vitamins:** "**A**ll **D**ogs **E**at **K**ibble" → **A, D, E, K**. Everything else (B-complex, C) is water-soluble.
:::

##### Water absorption
The small intestine also absorbs **water**. You might drink ~2 L/day, but **upper-GI secretions can total ~7 L/day** — most must be reabsorbed by **osmosis** as solutes are absorbed and water follows. Water crosses:

- **Transcellularly** — across the cell membrane
- **Paracellularly** — squeezing **between** cells

:::keyconcept
**Two vessels in a villus, two destinations.** **Capillary** → water-soluble nutrients (monosaccharides, amino acids, water-soluble vitamins, short-chain FAs, water) → **hepatic portal vein → liver**. **Lacteal** → fat-soluble nutrients (fats, cholesterol, vitamins A/D/E/K) → **lymph → thoracic duct**, **bypassing the liver**.
:::

#### Large intestine
The **large intestine** is **wider but shorter** than the small intestine and is primarily about **water absorption**. Three sections:

| Section | Key features |
|---|---|
| **Cecum** | Outpocketing accepting fluid via the **ileocecal valve**; site of the **appendix** |
| **Colon** | **Ascending → transverse → descending → sigmoid**; absorbs **water + salts (NaCl)**, concentrating material into **feces** |
| **Rectum** | Stores feces until elimination through the **anus** |

- The **appendix** was thought **vestigial** but may help fight bacterial infection and **repopulate normal flora** after diarrhea. **Appendicitis** is a surgical emergency — the most common reason for unscheduled surgery in the U.S.
- The small intestine actually absorbs **more** water than the colon — so massive **watery diarrhea** points to a **small-intestine** problem.
- Too little water absorption → **diarrhea**; too much → **constipation**.
- The **anus** has two sphincters: the **external anal sphincter** (somatic, voluntary) and the **internal anal sphincter** (autonomic, involuntary).

Feces = indigestible material, water, **bacteria** (*E. coli* and others), and unreabsorbed secretions (enzymes, some bile). About **30% of stool dry mass is bacteria** — mostly anaerobes (the cecum also hosts aerobes). This is a **symbiosis**: gut bacteria produce **vitamin K** (for clotting factors) and **biotin (vitamin B₇)** (a metabolic coenzyme).

:::bridge
The muscles controlling defecation mirror those for urination: an **internal sphincter** under **autonomic** control and an **external sphincter** under **somatic** control in both systems. Urination — *MCAT Biology Review*, Ch. 10.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**GI tract, top to bottom:** "**M**y **P**iano **E**ats **S**oft **S**erve **L**ike **R**oyalty **A**lways" → **M**outh · **P**harynx · **E**sophagus · **S**tomach · **S**mall intestine · **L**arge intestine · **R**ectum · **A**nus.',
      '**Small-intestine segments — "Dow Jones Industrial":** **D**uodenum → **J**ejunum → **I**leum.',
      '**Fat-soluble vitamins — "All Dogs Eat Kibble":** **A, D, E, K** (everything else is water-soluble).',
      '**Gastric cells:** **G**astrin from **G**-cells · **P**arietal makes the **P**rotons (HCl) + intrinsic factor · **Chief** = the **Chef** (pepsinogen) · **M**ucous makes protective **M**ucus.',
      '**Hunger vs. satiety:** **Ghrelin** = **G**rowling stomach (hunger); **Leptin** = **L**eaves you full (satiety). **CCK** = full + dumps bile/pancreatic juice.',
      '**Pancreatic enzymes — "All People Lift":** **A**mylase (carbs) · **P**roteases (protein, shipped as -ogen zymogens) · **L**ipase (fat).',
      '**Fat digestion duo:** **Bile emulsifies** (mechanical) → **lipase hydrolyzes** (chemical). Bile is **not** an enzyme.',
      '**Two villus vessels:** **C**apillary = water-soluble → liver; **L**acteal = fat-soluble (chylomicrons) → lymph, bypassing the liver.'
    ],
    keyConcepts: [
      '**Digestion vs. absorption, mechanical vs. chemical:** digestion breaks food into monomers (mechanical = physical, chemical = enzymatic bond cleavage); absorption moves products into the circulation — mostly in the **jejunum & ileum**.',
      '**Parasympathetic "rest & digest" turns the gut ON; sympathetic "fight or flight" turns it OFF.** All glands except sweat glands are parasympathetically innervated.',
      '**Zymogens prevent autodigestion:** pepsinogen (→ pepsin via HCl) and the pancreatic proteases (trypsinogen, chymotrypsinogen, procarboxypeptidases) are inactive until **enteropeptidase** flips the master switch in the duodenum.',
      '**Pepsin works at pH 2 (stomach); pancreatic enzymes at pH 8.5 (duodenum)** — a clean illustration of pH-dependent enzyme activity.',
      '**Liver = metabolic hub:** glycogen handling, gluconeogenesis, urea from ammonia, drug detox, bile production, and synthesis of albumin & clotting factors. Liver failure → ↑ammonia, ↓urea, ↓albumin, ↓clotting factors.',
      '**Absorption routing:** water-soluble nutrients → capillaries → **hepatic portal vein → liver**; fat-soluble nutrients (in chylomicrons) → **lacteals → thoracic duct**, bypassing the liver.'
    ],
    equations: []
  },

  questions: raw.questions
};
