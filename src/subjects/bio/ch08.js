// Chapter 8 — The Immune System. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch08.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 8,
  title: 'The Immune System',
  subtitle: 'Structure of the immune system · innate (nonspecific) immunity · adaptive (specific) immunity · the lymphatic system',

  blocks: [
    /* ─────────────── 8.1 Structure of the Immune System ─────────────── */
    {
      id: 's1', num: '8.1', title: 'Structure of the Immune System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 8.1 — Divisions of the Immune System: innate (nonspecific) vs. adaptive (specific).' }],
      recap: `
- The immune system has **two divisions**: **innate (nonspecific)** immunity — *always active, no specific targeting, no memory* — and **adaptive (specific)** immunity — *slower, targets a specific pathogen, keeps immunologic memory*.
- Adaptive immunity splits into **humoral immunity** (**B-cells** → antibodies, act in blood) and **cell-mediated immunity** (**T-cells**, kill infected cells & coordinate).
- **Organs:** **bone marrow** makes immune cells; **thymus** matures **T-cells**; **spleen** + **lymph nodes** activate **B-cells**; **GALT** (tonsils, adenoids, Peyer's patches, appendix) guards the gut.
- **Leukocytes** divide into **granulocytes** (neutrophils, eosinophils, basophils) and **agranulocytes** (lymphocytes, monocytes/macrophages) — all from a **hematopoietic stem cell**.
`,
      detail: `
#### Innate vs. adaptive immunity
The body has two cooperating defense systems. **Innate immunity** is hard-wired and instant but blunt; **adaptive immunity** is custom-built, slow to start, but precise and remembered.

| Feature | **Innate (nonspecific)** | **Adaptive (specific)** |
|---|---|---|
| Speed | **Immediate** — always on | **Slow** (days to a week to build) |
| Specificity | **None** — can't target a particular invader | **High** — targets a specific antigen |
| Memory | **No** immunologic memory | **Yes** — memory cells → faster second response |
| Key players | Skin, complement, interferons, macrophages, NK cells, granulocytes | **B-cells** (humoral) and **T-cells** (cell-mediated) |

:::expertise
The immune system is where **cell biology, biochemistry, anatomy, and physiology** all intersect, so the MCAT loves to ask integrated questions here. Build the **big picture** first — innate vs. adaptive, who does what — then plug in details. Associating **structure with function** is the whole game on Test Day.
:::

##### Two arms of the adaptive response
- **Humoral immunity** — driven by **B-cells** and the **antibodies** they secrete; antibodies dissolve and act *in the blood* (Latin *humor* = body fluid).
- **Cell-mediated immunity** — driven by **T-cells**, which coordinate the response and *directly kill* virally infected cells.

#### Anatomy
The immune system is **not housed in a single organ** — it is dispersed, and many of its structures double as parts of other organ systems.

![Anatomy of the immune and lymphatic systems](${fig(0, 1).src})

| Organ | Role in immunity |
|---|---|
| **Bone marrow** | Produces *all* **leukocytes** via **hematopoiesis**; site of **B-cell maturation** |
| **Thymus** | Site of **T-cell maturation** (gland just in front of the pericardium) |
| **Spleen** | Blood storage; filters blood/lymph; **activates B-cells** → plasma cells |
| **Lymph nodes** | Place for immune cells to communicate and mount an attack; **B-cells activated** here |
| **GALT** (gut-associated lymphoid tissue) | Guards the digestive tract: **tonsils** & **adenoids** (head), **Peyer's patches** (small intestine), lymphoid aggregates in the **appendix** |

When B-cells leave the bone marrow they are **mature but naïve** — fully developed but not yet exposed to an antigen.

:::realworld
Lay people say their "glands" are swollen when their throat feels full. But **lymph nodes are not glands** — they don't secrete into blood (endocrine) or ducts (exocrine). What they're feeling is **lymphadenopathy**: swelling of lymph nodes during immune activation.
:::

:::keyconcept
**Organs of the immune system, four facts:** **Lymph nodes** filter lymph and mount responses. **Bone marrow** produces immune cells. **Thymus** matures T-cells. **Spleen** stores blood, filters blood/lymph, and mounts responses.
:::

#### Leukocytes: granulocytes vs. agranulocytes
All **leukocytes** (white blood cells) arise from a common precursor, the **hematopoietic stem cell** — the same cell that gives rise to **red blood cells** and **platelets**.

![Hematopoiesis: a hematopoietic stem cell gives rise to all blood cell lines](${fig(0, 2).src})

Leukocytes split into two groups by the presence of cytoplasmic **granules** (which hold toxic enzymes/chemicals released by exocytosis, effective against bacterial, fungal, and parasitic pathogens):

| Group | Members | Notes |
|---|---|---|
| **Granulocytes** | **Neutrophils**, **eosinophils**, **basophils** | Names reflect how they stain |
| **Agranulocytes** | **Lymphocytes** (B-, T-, NK); **monocytes** → **macrophages** | Lymphocytes do antibody production, immune modulation, targeted killing |

**Monocytes** are phagocytic agranulocytes in the bloodstream that become **macrophages** in tissues. Many tissues keep resident macrophage populations under special names: **microglia** (CNS), **Langerhans cells** (skin), **osteoclasts** (bone).

:::mnemonic
**Granulocytes = "Never Eat Burritos"** → **N**eutrophils, **E**osinophils, **B**asophils (the three classic granulocytes; **mast cells** are close cousins). Everything else immune — lymphocytes and monocytes/macrophages — is **a**granular.
:::

:::realworld
A **complete blood count (CBC)** counts RBCs, platelets, and WBCs. Ordered **with a differential**, each WBC type is counted separately. **90% neutrophils** suggests a **bacterial** infection; **20% eosinophils** suggests an invasive **parasitic** infection.
:::

##### Naming the divisions, one more time
- **Innate** = **nonspecific immune response** — carried out *without learning*.
- **Adaptive** = **specific immune response** — *learned* recognition of particular antigens.
- Adaptive splits into **humoral immunity** (B-cells + antibodies) and **cell-mediated immunity** (T-cells).
`
    },

    /* ───────────────────── 8.2 The Innate Immune System ───────────────────── */
    {
      id: 's2', num: '8.2', title: 'The Innate Immune System',
      goals: goals(1),
      images: [{ src: fig(1, 2).src, alt: fig(1, 2).alt, caption: 'Figure 8.6 — Cells of the Immune System: innate (macrophage, mast cell, granulocytes, dendritic cell, NK cell) and adaptive (B-cell, T-cell).' }],
      recap: `
- **Noncellular defenses:** **skin** (barrier + **defensins**), **mucus** + **cilia**, **lysozyme** (tears/saliva), **stomach acid**, **gut flora** competition, **complement** (punches holes in bacteria), **interferons** (block viral spread).
- **Macrophages** phagocytize invaders and **present antigen** on **MHC**, then release **cytokines** to recruit more cells.
- **MHC-I = endogenous = all nucleated cells → CD8⁺** T-cells; **MHC-II = exogenous = antigen-presenting cells → CD4⁺** T-cells.
- **NK cells** kill cells that **downregulate MHC** (viruses, cancer).
- **Granulocytes:** **neutrophils** (phagocytose bacteria, follow **chemotaxis**, attack **opsonized** targets), **eosinophils** (parasites/allergy, release **histamine**), **basophils** + **mast cells** (allergy, histamine).
`,
      detail: `
#### Noncellular nonspecific defenses
Before any cell acts, several **barriers and chemicals** keep pathogens out.

| Defense | How it protects |
|---|---|
| **Skin (integument)** | Physical barrier; secretes antibacterial enzymes (**defensins**); sweat is antimicrobial |
| **Mucous membranes + cilia** | **Mucus** traps particulates/microbes; respiratory **cilia** sweep it toward the oropharynx to be swallowed or expelled |
| **Lysozyme** | Antibacterial enzyme in **tears** and **saliva** |
| **Stomach acid** | Kills most ingested pathogens |
| **Normal gut flora** | Out-competes invaders for space and nutrients |
| **Complement** | Blood proteins that lyse bacteria |
| **Interferons** | Block viral replication and spread |

##### The gastrointestinal tract
The **stomach secretes acid** that eliminates most pathogens, and the gut is **colonized by harmless bacteria**. Because that resident population is so large, would-be invaders can't compete. **Antibiotics** that wipe out gut flora open the door for resistant pathogens to overgrow.

:::realworld
A newborn's GI tract is especially vulnerable — its immune system is immature and the gut isn't yet colonized. **Breast milk** supplies antibodies that work especially well on **mucosal surfaces**, defending against GI infections.
:::

##### Complement
The **complement system** is a set of blood proteins that act nonspecifically against bacteria. It is triggered two ways:

- **Classical pathway** — *requires* an **antibody** bound to a pathogen.
- **Alternative pathway** — does *not* require antibodies.

Complement proteins **punch holes in bacterial cell walls**, making them **osmotically unstable**. Despite the antibody link, complement is still **nonspecific** — it can't be tuned to one organism over another.

##### Interferons
Virally infected cells secrete **interferons**, proteins that **prevent viral replication and dispersion**. They:

- make **nearby cells decrease** production of viral *and* cellular proteins;
- **decrease cell permeability**, making infection harder;
- **upregulate MHC class I and II**, boosting antigen presentation and detection.

Interferons cause the classic **flu-like symptoms** — malaise, tiredness, muscle soreness, fever.

#### Cells of the innate immune system
When pathogens breach the noncellular defenses, innate cells are already poised to attack.

##### Macrophages
**Macrophages** are tissue-resident **agranulocytes** derived from blood-borne **monocytes** (resident forms: **microglia**, **Langerhans cells**, **osteoclasts**). On meeting a bacterial invader, an activated macrophage does **three things**:

1. **Phagocytizes** the invader by endocytosis.
2. **Digests** it with enzymes.
3. **Presents** peptide fragments (an **antigen**) on **MHC** at the cell surface for the adaptive system to read.

It also releases **cytokines** — signaling chemicals that stimulate inflammation and recruit more immune cells.

##### MHC class I — the endogenous pathway

![Endogenous pathway: antigen loaded onto MHC-I and presented at the cell surface](${fig(1, 0).src})

**All nucleated cells** display **MHC class I**. Any protein made *inside* the cell can be loaded onto MHC-I and shown at the surface, letting the immune system monitor cell health. An infected cell will present a **nonself** protein — flagging it for destruction by **cytotoxic T-cells (CD8⁺)**. Because the antigen comes from *inside*, MHC-I is the **endogenous pathway**.

:::realworld
**MHC molecules are highly variable** between people but fall into subtypes. Certain subtypes carry higher susceptibility to **autoimmune disease**, and **MHC matching** of donor and recipient is critical to avoid **graft rejection** in transplants.
:::

##### MHC class II — the exogenous pathway

![Exogenous pathway: antigen taken up, loaded onto MHC-II, and presented at the cell surface](${fig(1, 1).src})

**MHC class II** is displayed mainly by **professional antigen-presenting cells (APCs)**: **macrophages**, **dendritic cells** (in skin), **some B-cells**, and **certain activated epithelial cells**. APCs ingest pathogens from the environment, process them, and present them on MHC-II. Because the antigen comes from *outside* the cell, MHC-II is the **exogenous pathway**, and it activates **helper T-cells (CD4⁺)**.

| | **MHC class I** | **MHC class II** |
|---|---|---|
| Found on | **All nucleated cells** | **Professional APCs** (macrophages, dendritic cells, some B-cells, some epithelial cells) |
| Antigen source | **Endogenous** (made inside the cell) | **Exogenous** (engulfed from outside) |
| Presents to | **Cytotoxic T-cells (CD8⁺)** | **Helper T-cells (CD4⁺)** |
| Best against | Viral / intracellular pathogens | Bacterial, fungal, parasitic (extracellular) |

:::mnemonic
**Rule of 8:** **MHC-I × CD8 = 8** (1 × 8); **MHC-II × CD4 = 8** (2 × 4). So **MHC-I → CD8⁺**, **MHC-II → CD4⁺**. Also: **MHC-**O**ne = **O**ne's **O**wn proteins (end**o**genous); **MHC-Tw**o** = stuff from **outsi**de** (exogenous).
:::

:::keyconcept
**MHC + antigen** travel to the cell surface to display the antigen, letting the immune system monitor cell health. **MHC-I** is on **all nucleated cells** and presents **endogenous** antigens. **MHC-II** is on **APCs** and presents **exogenous** antigens.
:::

Macrophages and dendritic cells also carry **pattern recognition receptors (PRRs)** — best known are the **toll-like receptors (TLRs)** — which identify the *category* of invader (bacterium, virus, fungus, parasite) so the right cytokines recruit the right cells.

##### Natural killer cells
Some pathogens **downregulate MHC** so T-cells can't see them. **Natural killer (NK) cells**, nonspecific **lymphocytes**, detect *missing* MHC and induce **apoptosis** in those cells. Because **cancer cells** also downregulate MHC, NK cells guard against tumor growth too.

##### Granulocytes
The granulocytes — **neutrophils, eosinophils, basophils** (and related **mast cells**) — round out nonspecific defense.

| Cell | Granule color | Primary role |
|---|---|---|
| **Neutrophil** | Neutral | **Most populous** WBC; short-lived (~5 days); **phagocytizes bacteria**; follows **chemotaxis**; attacks **opsonized** targets; dead ones form **pus** |
| **Eosinophil** | Bright red-orange | **Allergic reactions** & invasive **parasites**; releases **histamine** |
| **Basophil** | Large purple | **Allergic** responses; **least populous** WBC; releases histamine |
| **Mast cell** | Smaller granules | Like basophils but reside in **tissue/mucosa/epithelium**; release histamine to allergens |

**Neutrophils** find bacteria by **chemotaxis** (moving up a chemical gradient toward bacterial products) and can recognize bacteria once they have been **opsonized** (marked with an antibody from a B-cell). Other cells — NK cells, macrophages, monocytes, eosinophils — also carry **antibody receptors** and attack opsonized targets.

**Eosinophils** release **histamine**, an inflammatory mediator that causes **vasodilation** and increased vessel leakiness, letting macrophages and neutrophils exit the bloodstream into tissue. **Inflammation** is especially useful against extracellular pathogens (bacteria, fungi, parasites).

:::keyconcept
**Histamine** causes inflammation by inducing **vasodilation** and the movement of **fluid and cells from the bloodstream into the tissues**.
:::

:::mnemonic
**"Eosinophils fight Eels and allergens."** Eosinophils target invasive parasitic worms (and allergies). **Basophils & mast cells = the allergy/histamine bombs.** Neutrophils are the bacteria-eating first responders (and the gunk in pus).
:::
`
    },

    /* ──────────────────── 8.3 The Adaptive Immune System ──────────────────── */
    {
      id: 's3', num: '8.3', title: 'The Adaptive Immune System',
      goals: goals(2),
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 8.8 — Lymphocytes of Specific Immunity: T-cells (memory, cytotoxic, suppressor, helper) and B-cells (memory, plasma → IgM/IgD/IgG/IgE/IgA).' }],
      recap: `
- Adaptive immunity = **humoral** (B-cells/antibodies) + **cell-mediated** (T-cells). **B-cells mature in the bone marrow; T-cells mature in the thymus.**
- **Antibodies** (immunoglobulins, **Ig**) = 2 **heavy** + 2 **light** chains; **variable region** binds antigen, **constant region** binds effector cells/complement. **Hypermutation + clonal selection** → specificity; **isotype switching** among **IgG, IgA, IgM, IgE, IgD**.
- **Circulating antibodies, 3 effects:** **opsonization**, **agglutination**, **neutralization**.
- **T-cells:** **helper (CD4⁺, MHC-II)** coordinate; **cytotoxic (CD8⁺, MHC-I)** kill infected cells; **regulatory/suppressor (Treg, Foxp3)** quiet the response & enforce **self-tolerance**; **memory** speed the next response.
- **Memory cells** drive the rapid **secondary response** (basis of **vaccination**). **Active immunity** = you make antibodies; **passive immunity** = antibodies are handed to you (transient).
`,
      detail: `
#### Cells of the adaptive immune system
The adaptive system runs on two **lymphocytes**: **B-cells** (humoral response) and **T-cells** (cell-mediated response). All immune cells are *born* in the bone marrow, but the two lymphocytes **mature in different places**.

:::keyconcept
**B**-cells mature in the **b**one marrow. **T**-cells mature in the **t**hymus. *(The "B" historically came from the **bursa of Fabricius** in birds.)*
:::

Because the adaptive response must build specific defenses from scratch, it **takes a few days** before symptoms ease after a new infection.

#### Humoral immunity
**Humoral immunity** centers on **antibody** production and can take up to a **week** to become fully effective. Antibodies are made by **B-cells** — lymphocytes that originate and mature in the **bone marrow** and are **activated in the spleen and lymph nodes**.

##### What antibodies do
**Antibodies** (also called **immunoglobulins**, **Ig**) bind antigens whether the antibody is **secreted into body fluids** or **anchored on a cell surface**. The outcome depends on location.

**Secreted antibodies — three main effects:**

1. **Opsonization** — coat the antigen to attract leukocytes for immediate phagocytosis.
2. **Agglutination** — clump pathogens into large **insoluble complexes** that get phagocytized.
3. **Neutralization** — block the pathogen's ability to invade tissues.

**Cell-surface antibodies:**
- On a **B-cell**, antigen binding **activates** the cell → proliferation into **plasma** and **memory** cells.
- On a **mast cell**, antigen binding triggers **degranulation** (exocytosis of granules) → **histamine** release → inflammatory **allergic reaction**.

##### Antibody structure

![Antibody structure: two heavy chains and two light chains with variable and constant regions](${fig(2, 0).src})

Antibodies are **Y-shaped**, built from **two identical heavy chains** and **two identical light chains** held together by **disulfide linkages** and noncovalent interactions.

| Region | Location | Function |
|---|---|---|
| **Variable region (domain)** | **Tips of the Y** (antigen-binding region) | Binds **one, and only one**, specific antigenic sequence |
| **Constant region (domain)** | Stem of the Y | Recognized by **NK cells, macrophages, monocytes, eosinophils**; can trigger the **complement cascade** |

Specificity is generated by **hypermutation** of the antigen-binding region: each B-cell mutates rapidly, and only those binding the antigen with **high affinity** survive — a mechanism called **clonal selection**. Each B-cell makes only **one** type of antibody, but with many B-cells the immune system covers many antigens.

Antibodies come in **five isotypes** — **IgG, IgA, IgM, IgE, IgD** — used at different times, against different pathogens, or in different body locations. Cytokine signals can make a cell change isotype via **isotype switching**.

| Isotype | High-yield association |
|---|---|
| **IgG** | Most abundant in blood; crosses the **placenta** (passive immunity to fetus) |
| **IgA** | Mucosal surfaces and secretions (tears, saliva, **breast milk**) |
| **IgM** | First antibody made in a primary response |
| **IgE** | **Allergy** and antiparasitic responses (binds mast cells/basophils) |
| **IgD** | Bound on naïve B-cell surfaces; role least defined |

:::mnemonic
**Five isotypes = "GAMED"** → Ig**G, A, M, E, D**. Hooks: Ig**G** crosses the placenta (**G**estation); Ig**A** is in secretions (s**A**liva, tears, breast milk); Ig**M** is **M**ade first (**M** = **M**onster pentamer); Ig**E** = all**E**rgy & **E**els (parasites); Ig**D** = **D**oing... not much we test.
:::

##### Primary vs. secondary response
Making antibodies is **energetically expensive**, so **naïve B-cells** wait in the lymph nodes for their antigen. On exposure to the correct antigen, a B-cell proliferates into two daughters:

- **Plasma cells** — pump out large amounts of antibody (then **die**).
- **Memory B-cells** — stay in the lymph node, awaiting re-exposure (may last a **lifetime**).

The first activation, the **primary response**, takes about **7–10 days**. On re-exposure, memory cells launch the **secondary response** — far **faster and more robust**. This lasting memory is the **basis of vaccination**.

#### Cytotoxic (cell-mediated) immunity
Where humoral immunity rides on B-cells, **cell-mediated immunity** rides on **T-cells**, which mature in the **thymus** under two selection steps:

- **Positive selection** — only T-cells that **can respond to antigen on MHC** survive; those that can't undergo **apoptosis**.
- **Negative selection** — T-cells that are **self-reactive** (respond to the body's own proteins) undergo **apoptosis**.

Maturation is driven by **thymosin**, a peptide hormone from thymic cells. A T-cell leaving the thymus is **mature but naïve**; on antigen exposure it undergoes **clonal selection** so only the highest-affinity cells proliferate.

##### Types of T-cells

| T-cell type | Marker / name | MHC | Function |
|---|---|---|---|
| **Helper (Tₕ)** | **CD4⁺** | **MHC-II** | Coordinate the response by secreting **lymphokines** that recruit/activate other cells; best vs. **extracellular** infections |
| **Cytotoxic (T𝒸 / CTL)** | **CD8⁺** | **MHC-I** | **Directly kill** virally infected cells by injecting apoptosis-promoting toxins; best vs. **intracellular** infections |
| **Suppressor / regulatory (Tᵣₑ𝓰)** | CD4⁺ + **Foxp3** | — | **Tone down** the response after containment; enforce **self-tolerance** to prevent autoimmunity |
| **Memory** | — | — | Lie in wait; mount a faster, more robust response on re-exposure |

**Helper T-cells (CD4⁺)** are the conductors: their **lymphokines** recruit plasma cells, cytotoxic T-cells, and macrophages. Their loss in **HIV** infection — advancing to **AIDS** — leaves the body open to **opportunistic infections**. Because they read **MHC-II** (exogenous antigen), CD4⁺ cells are most effective against **bacterial, fungal, and parasitic** infections.

**Cytotoxic T-cells (CD8⁺)** read **MHC-I** (endogenous antigen) and kill infected cells directly, so they are most effective against **viral** (and intracellular bacterial/fungal) infections.

**Regulatory/suppressor T-cells (Tᵣₑ𝓰)** express CD4 but are distinguished by **Foxp3**. They quiet the response once an infection is contained and shut off self-reactive lymphocytes — the basis of **self-tolerance**.

:::keyconcept
**CD4⁺** T-cells are better at **extracellular** infections; **CD8⁺** T-cells are better at **intracellular** infections.
:::

:::mnemonic
**CD × MHC = 8:** **CD4⁺** cells respond to **MHC-II** (4 × 2 = 8); **CD8⁺** cells respond to **MHC-I** (8 × 1 = 8).
:::

:::realworld
"**CD**" stands for **cluster of differentiation** — cell-surface markers detected by **flow cytometry**, indicating which leukocytes are present, how many, and how mature they are.
:::

:::realworld
Many suppressor T-cells were *formerly self-reactive* T-cells that got switched off. When a suppressor T-cell inactivates another lymphocyte, it can either mark it for destruction or convert it into another suppressor T-cell.
:::

#### Activation of the adaptive immune system
The innate and adaptive systems are **not separate** — proper immunity depends on their interaction. There are **five types of infectious pathogens**: **bacteria, viruses, fungi, parasites** (protozoa, worms, insects), and **prions** (no immune defense exists). Two classic walkthroughs follow.

:::expertise
The bacterial-vs-viral split (extracellular vs. intracellular) is a useful frame but **imperfect** — some bacteria, like *Mycobacterium tuberculosis* and *Listeria monocytogenes*, are actually **intracellular** pathogens.
:::

##### Bacterial (extracellular) infection
1. **Macrophages/APCs engulf** the bacteria and release inflammatory mediators.
2. They **digest** the bacteria and present antigen on **MHC-II**.
3. **Cytokines** recruit **neutrophils** and more macrophages; **mast cells** degranulate → **histamine** → leaky capillaries → easier immune-cell exit.
4. A **dendritic cell** carries antigen to the nearest **lymph node** and presents it to **B-cells**; the matching B-cells undergo **clonal selection** → **plasma** + **memory** cells. **Antibodies** then tag the bacteria for destruction.
5. Simultaneously, dendritic cells present to **T-cells**, activating **CD4⁺** cells:
   - **Tₕ1** release **interferon gamma (IFN-γ)** → activate macrophages to kill bacteria better.
   - **Tₕ2** help activate **B-cells** and dominate in **parasitic** infections.
6. After clearance, plasma cells die but **memory B- and T-cells remain** for a faster secondary response.

##### Viral (intracellular) infection
1. The infected cell secretes **interferons** → reduce neighbors' permeability, slow their transcription/translation, and cause systemic symptoms (malaise, aching, fever).
2. The infected cell presents intracellular (now partly **viral**) proteins on **MHC-I**.
3. **CD8⁺ T-cells** recognize the MHC-I–antigen complex as foreign and **inject toxins** → **apoptosis**, shutting down infection before spread.
4. If the virus **downregulates MHC-I**, **NK cells** detect the missing MHC and induce apoptosis instead.
5. Again, **memory T-cells** persist for a rapid second response.

#### Recognition of self and nonself
**Self-antigens** are surface proteins/carbohydrates on every body cell that signal "do not attack." Two failures can occur:

- **Autoimmunity** — the system attacks cells bearing certain **self-antigens**.
- **Allergy** — the system over-responds to harmless foreign antigens (pet dander, pollen, peanuts).

Both belong to a family called **hypersensitivity reactions**.

The body prevents self-attack early in maturation: T-cells are "educated" in the thymus and self-reactive ones are removed by **negative selection**; self-reactive immature B-cells are eliminated **before leaving the bone marrow**. The process isn't perfect, so some self-reactive cells survive. Many autoimmune diseases are treated with **glucocorticoids** (modified **cortisol**), which are potently immunosuppressive.

:::realworld
Autoimmune destruction of tissue causes specific deficiencies. **Type I diabetes mellitus** results from autoimmune destruction of the pancreatic **β-cells** → no insulin → high blood sugar and excess fat/protein use for energy. Other examples: **multiple sclerosis, myasthenia gravis, psoriasis, systemic lupus erythematosus, rheumatoid arthritis, Graves' disease, Guillain–Barré syndrome**.
:::

#### Immunization
**Immunization** can be **active** or **passive**.

| | **Active immunity** | **Passive immunity** |
|---|---|---|
| Mechanism | Immune system is **stimulated to make its own antibodies** | **Antibodies are transferred** in from elsewhere |
| Routes | **Natural** (infection) or **artificial** (**vaccine** — weakened/killed microbe or protein fragment) | **Natural** (placenta, breast milk) or **artificial** (IV immunoglobulin, e.g. **rabies**, **tetanus**) |
| Onset | **Slow** (weeks to build) | **Immediate** |
| Duration | **Long-lived** (memory cells form) | **Transient** — only antibodies given, not the plasma cells |

:::mnemonic
**Active = you Act** (your B-cells make the antibodies → slow but lasting). **Passive = Passed to you** (ready-made antibodies → instant but fades). Vaccines build **active** immunity; placenta/breast milk and IV Ig give **passive** immunity.
:::

:::realworld
A fraudulent 1998 *Lancet* paper falsely linking **vaccines to autism** was **retracted**; no sound study supports the link. Sensationalist coverage drove down vaccination rates, and **measles and mumps** outbreaks have since resurged. Vaccines carry rare risks (encephalitis, Guillain–Barré syndrome) — but far less than the diseases they prevent.
:::
`
    },

    /* ───────────────────────── 8.4 The Lymphatic System ───────────────────────── */
    {
      id: 's4', num: '8.4', title: 'The Lymphatic System',
      goals: goals(3),
      recap: `
- The **lymphatic system** is a **one-way** circulatory system of vessels (growing larger toward the body's center) carrying **lymph**, draining into the **thoracic duct** → **left subclavian vein**.
- **Lymph nodes** are bean-shaped stations where immune cells meet pathogens; **B-cells** proliferate/mature here in **germinal centers**.
- **Three functions:** (1) **equalize fluid distribution** (drain tissue fluid back to blood; failure → **edema**), (2) **transport fats** as **chylomicrons** via **lacteals** → milky **chyle**, (3) **immunity**.
- Low blood **albumin** → low oncotic pressure → fluid pools in tissue; lymphatics rescue it until **overwhelmed → edema**.
`,
      detail: `
The immune and lymphatic systems are intimately linked: **B-cells proliferate and develop** within the lymphatic system, especially the **lymph nodes**.

#### Structure
The **lymphatic system** is a **circulatory system** (alongside the cardiovascular system) made of **one-way vessels** that grow larger toward the body's center. They carry **lymph** and mostly join into a large **thoracic duct** in the posterior chest, which empties into the **left subclavian vein** near the heart.

**Lymph nodes** are small, **bean-shaped** structures along the vessels. Each node contains a **lymphatic channel** plus an **artery** and a **vein**, giving immune cells a place to meet possible pathogens.

:::realworld
Some cancers — especially **breast cancer** — spread via lymphatic channels. **Mastectomy** often removes **local lymph nodes** along with the breast to ensure all cancer is removed.
:::

#### Function
The lymphatic system serves the body as a **secondary circulatory system** with three main jobs.

##### 1 · Equalization of fluid distribution
At the capillaries, fluid leaves the blood and enters tissue, governed by hydrostatic and oncotic pressures (**Starling forces**). At the venule end, blood **oncotic pressure** draws water back — but because the inward pull is slightly **less** than the outward push at the arterial end, a little fluid stays in the tissue. **Lymphatic vessels drain this fluid** and return it to the bloodstream.

This offers protection: if blood **albumin** is low, oncotic pressure drops and less water returns to the blood, so fluid pools in tissue. As long as lymphatics aren't blocked, much of it returns via the lymphatics. Only when the lymphatics are **overwhelmed** does **edema** occur — swelling from fluid collecting in tissue.

:::keyconcept
A **blockage of lymphatic flow** (e.g., a parasite or removed nodes) prevents tissue fluid from returning to the blood → it accumulates → **edema** distal to the blockage.
:::

##### 2 · Transportation of biomolecules
The lymphatic system also moves **fats** from the gut into the blood. **Lacteals** — small lymphatic vessels at the center of each intestinal **villus** — take up **fats packaged as chylomicrons** by intestinal mucosal cells. Lymph full of chylomicrons looks milky white and is called **chyle**.

##### 3 · Immunity
**Lymph nodes** are where **antigen-presenting cells and lymphocytes interact**. **B-cells** proliferate and mature in the nodes within collections called **germinal centers**.
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Innate vs. adaptive:** Innate = **i**nstant, **i**nspecific, no memory; Adaptive = **a**ccurate but slow, **a**dapts, keeps memory.',
      '**Rule of 8 (CD × MHC = 8):** CD**4**⁺ → MHC-**II** (4 × 2 = 8); CD**8**⁺ → MHC-**I** (8 × 1 = 8). And **MHC-I = endogenous = One\'s Own proteins → CD8 → viruses**; **MHC-II = exogenous → CD4 → bacteria/fungi/parasites**.',
      '**B**-cells mature in the **b**one marrow; **T**-cells mature in the **t**hymus.',
      '**Granulocytes = "Never Eat Burritos":** **N**eutrophils, **E**osinophils, **B**asophils (mast cells are cousins). Lymphocytes & monocytes/macrophages are **a**granular.',
      '**Antibody effects (secreted) — "ANO":** **A**gglutination, **N**eutralization, **O**psonization.',
      '**Five isotypes = "GAMED":** Ig**G** (placenta/most abundant), Ig**A** (secretions: saliva, tears, breast milk), Ig**M** (made first, pentamer), Ig**E** (allergy & parasites), Ig**D** (naïve B-cell surface).',
      '**Active = you Act** (make your own antibodies → slow, lasting; vaccines). **Passive = Passed to you** (ready-made antibodies → instant, transient; placenta, breast milk, IV Ig).',
      '**"Eosinophils fight Eels"** (parasitic worms) and allergies; **basophils & mast cells = histamine/allergy bombs**; **neutrophils = bacteria-eating first responders** (and pus).'
    ],
    keyConcepts: [
      '**Innate is fast but blind; adaptive is slow but smart.** Only the adaptive system targets a specific pathogen and forms **memory** — the basis of the rapid **secondary response** and of **vaccination**.',
      '**Antigen presentation links the two systems.** **MHC-I** (all nucleated cells, endogenous antigen) reports to **CD8⁺** cells; **MHC-II** (professional APCs, exogenous antigen) reports to **CD4⁺** cells.',
      '**Specificity is built, not born.** B-cells generate antibody specificity through **hypermutation** + **clonal selection**; T-cells are shaped in the thymus by **positive** (keep MHC-responsive) and **negative** (delete self-reactive) selection — failures cause **autoimmunity**.',
      '**Humoral = B-cells/antibodies in the blood; cell-mediated = T-cells killing & coordinating.** Helper (CD4⁺) conduct, cytotoxic (CD8⁺) kill, regulatory (Treg/Foxp3) enforce self-tolerance, memory cells remember.',
      '**The lymphatic system is a one-way drain to the blood:** it equalizes fluid (failure → **edema**), ferries dietary fat as **chyle**, and hosts immune responses in lymph-node **germinal centers**, emptying via the **thoracic duct** into the **left subclavian vein**.'
    ],
    equations: []
  },

  questions: raw.questions
};
