// Chapter 11 — The Musculoskeletal System. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch11.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 11,
  title: 'The Musculoskeletal System',
  subtitle: 'The muscular system · the skeletal system',

  blocks: [
    /* ───────────────────────── 11.1 The Muscular System ───────────────────────── */
    {
      id: 's1', num: '11.1', title: 'The Muscular System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 11.1 — The Sarcomere: the functional unit of striated muscle (Z-line, M-line, I-band, A-band, H-zone).' }],
      recap: `
- **Three muscle types**: **skeletal** (striated, voluntary/**somatic**, multinucleated), **cardiac** (striated, involuntary/**autonomic**, 1–2 nuclei, **intercalated discs**), **smooth** (nonstriated, involuntary/autonomic, 1 nucleus). **All require Ca²⁺** to contract.
- **Skeletal fibers**: **red/slow-twitch** = myoglobin-rich, mitochondria-rich, **aerobic**; **white/fast-twitch** = low myoglobin, **anaerobic**, fatigues fast.
- **Sarcomere** = contractile unit; **thick = myosin**, **thin = actin + troponin + tropomyosin** (+ **titin** spring). During contraction the **H-zone, I-band, and Z–Z distance shrink; the A-band stays constant**.
- **Contraction cascade**: NMJ → **ACh** → depolarize sarcolemma → **T-tubules** → **SR releases Ca²⁺** → Ca²⁺ binds **troponin** → tropomyosin shifts → myosin binds actin → **sliding filament** powerstroke.
- **Powerstroke** = release of **ADP + Pᵢ** (not ATP hydrolysis); **ATP binding detaches** the myosin head. **Myogenic** activity (no neural input) occurs in **smooth & cardiac** muscle.
- **Simple twitch → frequency summation → tetanus.** Energy reserves: **creatine phosphate** + **myoglobin** offset the **oxygen debt**.
`,
      detail: `
#### Three types of muscle
All muscle contracts via **actin and myosin** and **all require calcium**, but the three subtypes differ in striation, control, nuclei, and where they live.

| Feature | **Skeletal** | **Cardiac** | **Smooth** |
|---|---|---|---|
| Striated? | **Striated** | **Striated** | **Nonstriated** |
| Control | **Voluntary** | Involuntary | Involuntary |
| Innervation | **Somatic** | **Autonomic** | **Autonomic** |
| Nuclei per cell | **Many** (multinucleated) | **1–2** (central) | **1** (central) |
| Myogenic activity? | No | **Yes** | **Yes** |
| Ca²⁺ for contraction? | Yes | Yes | Yes |
| Where | Attached to bone | Heart only | GI tract, vessels, bladder, uterus, airways |

##### Skeletal muscle
**Skeletal muscle** drives **voluntary movement** and is innervated by the **somatic nervous system**. The ordered arrangement of **actin** and **myosin** into repeating **sarcomeres** makes it appear **striated**. It is **multinucleated** because many muscle cells fuse into long rods during development. Beyond movement, skeletal muscle compresses **veins** to drive venous return, propels **lymph**, and generates heat by **shivering** (thermoregulation).

Two fiber types — a classic MCAT discrimination:

| Fiber type | Myoglobin / mitochondria | Metabolism | Behavior | Example |
|---|---|---|---|---|
| **Red (slow-twitch)** | **High** (red color from heme iron) | **Oxidative phosphorylation** (aerobic) | Slow, **sustained** (postural) | Thigh / dark meat |
| **White (fast-twitch)** | **Low** (lighter color) | **Glycolysis & fermentation** (anaerobic) | Fast but **fatigues quickly** | Breast / white meat |

- **Myoglobin** is an oxygen carrier that uses **iron in a heme group** to bind O₂, giving red fibers their color.
- Most muscles are a **mix** of both fiber types.

:::realworld
Poultry illustrates this perfectly. **Support muscles** like the thigh are **dark meat** (red fibers). The **pectoral "breast" muscles**, used for brief bursts of flight, are **white meat** (white fibers).
:::

##### Smooth muscle
**Smooth muscle** produces **involuntary** movement under **autonomic** control. It lines the **respiratory tree, digestive tract, bladder, uterus, and blood vessels**. Each cell has **one central nucleus**; actin and myosin are present but **disorganized**, so there are **no visible striations**.

- Capable of **more sustained contraction** than skeletal muscle.
- A constant low-level contraction (as in blood vessels) is called **tonus**.
- **Myogenic activity**: smooth muscle can contract **without nervous input**, responding directly to stretch or other stimuli.

:::expertise
The MCAT loves to test that **both smooth and cardiac muscle exhibit myogenic activity** — they *respond* to neural input but **do not require** it to contract.
:::

##### Cardiac muscle
**Cardiac muscle** blends features of both: it is **striated** like skeletal but **involuntary/autonomic** like smooth, and is usually **uninucleated** (sometimes binucleated).

- Cells connect via **intercalated discs** packed with **gap junctions** — direct cytoplasmic channels that let **ions flow cell-to-cell** for rapid, coordinated depolarization.
- **Myogenic** conduction pathway: **SA node → AV node → bundle of His → Purkinje fibers**.
- Modulated, not driven, by extrinsic signals: the **vagus nerve** (parasympathetic) **slows** rate; **norepinephrine/epinephrine** at **adrenergic receptors** raise rate and contractility (partly by **increasing intracellular Ca²⁺**).

:::keyconcept
Across **all** muscle types, contraction ultimately depends on **calcium**. What differs is the *source of the trigger* — somatic neurons (skeletal) vs. intrinsic pacemaking ± autonomic modulation (cardiac, smooth).
:::

#### Microscopic structure of skeletal muscle
The MCAT focuses on the **contractile architecture of skeletal muscle**, so know it cold.

##### The sarcomere
The **sarcomere** is the **basic contractile unit**, built from **thick** and **thin filaments**:

- **Thick filaments** = bundles of **myosin**.
- **Thin filaments** = **actin** plus two regulatory proteins, **troponin** and **tropomyosin**.
- **Titin** acts as a **spring**, anchoring actin and myosin and preventing overstretching.

:::mnemonic
Which filament carries **t**roponin and **t**ropomyosin? **ac*t*in has a *T* in it** → the regulatory proteins ride on the **thin (actin)** filament.
:::

:::mnemonic
Thin vs. thick — remember **"ac*thin*"**: **actin** filaments are **thin**; **myosin** filaments are **thick**.
:::

Each sarcomere is divided into lines, zones, and bands (Figure 11.1):

| Region | Contains | During contraction |
|---|---|---|
| **Z-line** | Boundary of the sarcomere; anchors thin filaments | Z-lines move **closer** |
| **M-line** | Center of the sarcomere, through middle of myosin | M-lines move **closer** |
| **I-band** | **Thin filaments only** | **Shrinks** |
| **H-zone** | **Thick filaments only** | **Shrinks** |
| **A-band** | **Entire thick filament** (incl. overlap with thin) | **Unchanged** (constant) |

:::mnemonic
**Parts of the sarcomere**, letter by letter:
- **Z** — **Z** is the end of the alphabet, and the **end** of the sarcomere.
- **M** — **M**iddle of the **m**yosin filaments.
- **I** — **I** is a *thin* letter → **thin** filaments only.
- **H** — **H** is a *thick* letter → **thick** filaments only.
- **A** — **A**ll of the thick filament, overlapping or not (and the only band that **doesn't change** length).
:::

:::mnemonic
**What shrinks during contraction?** Everything **except the A-band**. Memory hook: the **A-band is "Always" the same length** — the filaments *slide*, they don't shorten, so the full myosin span (A-band) never changes.
:::

##### Gross structure of myocytes
The naming ladder is a favorite MCAT trap — work from smallest to largest:

- **Sarcomeres** attach **end-to-end (in series)** → form a **myofibril**.
- Many **myofibrils** run **in parallel** inside one **myocyte** (= **muscle cell** = **muscle fiber**); nuclei sit at the **periphery**.
- Many **myocytes in parallel** → form a **muscle**.

![Figure 11.2 — Architecture of skeletal muscle: muscle → muscle fibers (myocytes) → myofibrils.](${fig(0, 1).src})

Supporting structures:

| Structure | What it is |
|---|---|
| **Sarcoplasmic reticulum (SR)** | Modified **endoplasmic reticulum**; stores a high concentration of **Ca²⁺** |
| **Sarcoplasm** | Modified **cytoplasm** outside the SR |
| **Sarcolemma** | The myocyte **cell membrane**; propagates the action potential |
| **T-tubules (transverse tubules)** | Invaginations of the sarcolemma, **perpendicular** to myofibrils; carry the action potential **deep** into the fiber to reach every sarcomere |

:::keyconcept
The **sarcoplasmic reticulum** is just a fancy name for the **specialized ER of muscle cells** — its job is to **sequester and release Ca²⁺**.
:::

:::keyconcept
Mind the near-identical terms: a **myofibril** = many **sarcomeres in series**; a **muscle fiber (myocyte)** = many **myofibrils in parallel**; a **muscle** = many **muscle fibers in parallel**. Read muscle anatomy slowly.
:::

#### Muscle contraction
Contraction is a repeated, coordinated cycle requiring **both ATP and calcium**.

##### Initiation
Contraction begins at the **neuromuscular junction (NMJ)**, where a **motor (efferent) neuron** meets the muscle:

1. The signal reaches the **nerve terminal** (**synaptic bouton**); at the NMJ this is the **motor end plate**.
2. **Acetylcholine (ACh)** is released into the synapse and binds receptors on the **sarcolemma** → **depolarization**.
3. The action potential spreads down the sarcolemma and into the **T-tubules**, reaching the **sarcoplasmic reticulum**.
4. The SR releases **Ca²⁺**.
5. **Ca²⁺ binds a regulatory subunit of troponin** → **tropomyosin shifts** → **myosin-binding sites on actin are exposed** (Figure 11.3).

A motor neuron's terminal plus all the myocytes it controls = a **motor unit**.

![Figure 11.3 — Regulation of contraction with calcium: Ca²⁺ binds troponin, shifting tropomyosin to expose myosin-binding sites on actin.](${fig(0, 2).src})

##### Shortening of the sarcomere (cross-bridge cycle)
Myosin heads bind the exposed actin sites, forming **cross-bridges**, and pull the thin filaments **toward the M-line** — the **sliding filament model**.

![Figure 11.4 — The Actin–Myosin Cross-Bridge Cycle: calcium and ATP are essential for contraction and relaxation.](${fig(0, 3).src})

| Step | Event | Energy detail |
|---|---|---|
| 1 | Myosin head (carrying **ADP + Pᵢ** from prior hydrolysis) **binds** the exposed actin site | Cross-bridge forms |
| 2 | **Release of Pᵢ then ADP** drives the **powerstroke** → thin filament slides over thick | **Powerstroke is the dissociation of ADP + Pᵢ** |
| 3 | A new **ATP binds** the myosin head → head **detaches** from actin | **ATP binding = release** |
| 4 | ATP is **hydrolyzed to ADP + Pᵢ** → **"recocks"** the head for another cycle | Resets the head |

Repeating this cycle ratchets the thin filament along the thick filament, progressively shortening the sarcomere.

:::keyconcept
It is the **dissociation of ADP and Pᵢ** from myosin that powers the **powerstroke** — **not** the hydrolysis of ATP. The **binding of a new ATP** is what **releases** the myosin head from actin. (No ATP → no release → stuck cross-bridges.)
:::

:::mnemonic
**ATP does two opposite-seeming jobs**: think **"Bind to Break, Split to Stick."** A new **ATP *bind*ing breaks** the cross-bridge (detaches myosin); **hydrolysis (splitting) re-cocks** the head so it can **stick** again. The actual *pull* is paid for earlier, by **letting ADP + Pᵢ go**.
:::

The result of repeated cycles is visible at the sarcomere level — overlap increases as the filaments slide:

![Figure 11.5 — Sarcomere contraction: relaxed vs. contracted; the H-zone and I-band shorten while the A-band is unchanged.](${fig(0, 4).src})

##### Relaxation
- **Acetylcholinesterase** degrades ACh in the synapse → the signal terminates and the sarcolemma **repolarizes**.
- Ca²⁺ release stops; the **SR re-uptakes Ca²⁺**, tightly lowering cytosolic calcium.
- **ATP binds** the myosin heads → they **release** from actin → the sarcomere returns to resting width.
- Without Ca²⁺, **tropomyosin re-covers** the myosin-binding sites → contraction is **prevented**.

:::realworld
After death, **ATP production ceases**, so myosin heads **cannot detach** from actin — muscles can't relax. This is **rigor mortis**.
:::

#### Stimulation, summation, and muscle fatigue
Like neurons, muscle fibers fire **all-or-nothing**: a stimulus must reach **threshold**, and a single fiber's response strength is fixed. The nervous system grades **overall force** by **recruiting more motor units**; **maximal** force = **all** fibers firing together.

:::bridge
Why all-or-nothing? Because muscle fibers are driven by **neurons using action potentials**, which are themselves all-or-nothing — see *MCAT Biology Review*, Ch. 4.
:::

##### Simple twitch → summation → tetanus
- **Simple twitch** — one fiber's response to a single threshold stimulus, in three phases: **latent period** (threshold → contraction; AP spreads, SR releases Ca²⁺) → **contraction** → **relaxation** (Figure 11.6a).
- **Frequency summation** — frequent, prolonged stimulation gives the fiber **no time to fully relax**, so contractions **combine** into a stronger, longer one (Figure 11.6b).
- **Tetanus** — contractions so frequent the muscle **cannot relax at all**; prolonged tetanus → **fatigue**.

![Figure 11.6 — Force of contraction: (a) a simple twitch; (b) summation of frequent twitches leading to tetanus.](${fig(0, 5).src})

:::realworld
The **disease** tetanus is caused by *Clostridium tetani*, whose toxin **tetanospasmin** blocks **GABA** release from inhibitory neurons. The motor neurons become **overexcitable**, causing sustained contractions strong enough to **fracture bones**. A **tetanus immunoglobulin** can prevent it after exposure.
:::

##### Oxygen debt and fatigue
Muscles run on **ATP**. Two supplemental reserves buy time when O₂ runs short:

- **Creatine phosphate** — at rest, a phosphate is transferred from ATP to **creatine**; during activity the reaction reverses to **regenerate ATP** fast.
- **Myoglobin** — binds O₂ with **high affinity** and releases it to sustain aerobic metabolism as muscle O₂ falls.

When demand still outstrips supply, even red fibers switch to **anaerobic metabolism**, producing **lactic acid** → fatigue. The **oxygen debt** is the **gap between O₂ needed and O₂ available**; afterward, the body uses O₂ to convert lactic acid back to **pyruvate** (into the citric acid cycle), and the O₂ required to recover **equals the oxygen debt**.

:::bridge
During exercise the **oxyhemoglobin dissociation curve right-shifts** with rising CO₂, rising H⁺ (falling pH), and rising temperature — unloading more O₂ to working muscle (the **Bohr effect**; *MCAT Biology Review*, Ch. 7).
:::
`
    },

    /* ───────────────────────── 11.2 The Skeletal System ───────────────────────── */
    {
      id: 's2', num: '11.2', title: 'The Skeletal System',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 11.7 — Anatomy of the Human Skeleton (axial vs. appendicular).' }],
      recap: `
- **Endoskeleton** (vertebrates) vs. **exoskeleton** (arthropods, must be molted). Human skeleton = **axial** (skull, vertebral column, ribcage, hyoid) + **appendicular** (limbs, pectoral girdle, pelvis).
- Bone = **connective tissue from mesoderm**. **Compact bone** = dense, strong (outer); **spongy/cancellous bone** = **trabeculae** lattice holding **marrow** (red = hematopoietic, yellow = fat).
- **Long-bone parts**: **diaphysis** (shaft) → **metaphysis** → **epiphysis**; the **epiphyseal (growth) plate** drives **linear growth** then closes at puberty. **Periosteum** = fibrous sheath (muscle attachment, repair).
- **Bone matrix**: organic (**collagen**) + inorganic (**hydroxyapatite**, Ca₁₀(PO₄)₆(OH)₂). Microstructure = **osteons (Haversian systems)**: **lamellae** around **Haversian/Volkmann's canals**; **osteocytes** in **lacunae** linked by **canaliculi**.
- **Remodeling**: **osteoBlasts Build**, **osteoClasts Chew (resorb)**. **PTH** + **vitamin D** ↑ resorption (↑ blood Ca²⁺); **calcitonin** ↑ formation (↓ blood Ca²⁺).
- **Cartilage** = **chondrin** secreted by **chondrocytes**; **avascular & non-innervated**. Bone forms via **endochondral** (from cartilage; long bones) or **intramembranous** (from mesenchyme; skull) ossification.
- **Joints**: **immovable** (sutures) vs. **movable** (**synovial capsule**, **synovium** secretes **synovial fluid**, **articular cartilage** cushions). Muscles act in **antagonistic pairs** (origin vs. insertion).
`,
      detail: `
#### Skeletons: endo vs. exo
There are two skeleton plans:

- **Exoskeletons** — encase the whole organism; typical of **arthropods** (crustaceans, insects). Protect well, but must be **shed and regrown** to allow growth.
- **Endoskeletons** — internal, as in **vertebrates** (including humans). Protect soft tissue less completely but **accommodate growth** of a large organism far better.

#### Skeletal structure
The human skeleton divides into two parts:

| Division | Components | Role |
|---|---|---|
| **Axial skeleton** | **Skull**, **vertebral column**, **ribcage**, **hyoid** (swallowing) | Central framework / midline |
| **Appendicular skeleton** | **Limb bones** (humerus, radius/ulna, carpals, metacarpals, phalanges; femur, tibia/fibula, tarsals, metatarsals, phalanges), **pectoral girdle** (scapula + clavicle), **pelvis** | The appendages and their attachment |

The skeleton is built from two materials: **bone** and **cartilage**.

:::realworld
An adult human has **206 bones** — over **100 of them in the hands and feet**.
:::

#### Bone composition
Bone is a **connective tissue derived from embryonic mesoderm** — much **harder** than cartilage yet relatively **lightweight**.

##### Macroscopic structure
There are two architectural forms of bone:

| | **Compact bone** | **Spongy (cancellous) bone** |
|---|---|---|
| Density | **Dense, strong** | Lattice of **trabeculae** (bony spicules) |
| Location | **Outer** layers | **Internal** core |
| Contents | Solid matrix | Cavities filled with **bone marrow** |
| Function | **Strength** | Houses marrow; **disperses force** at joints |

The two marrow types:

- **Red marrow** — **hematopoietic stem cells** → generates all blood cells.
- **Yellow marrow** — mostly **fat**; relatively **inactive**.

**Long bones** (typical of the appendicular skeleton) have a defined regional anatomy (Figure 11.8):

![Figure 11.8 — Anatomy of a Long Bone (Humerus): epiphysis, epiphyseal plate, metaphysis, diaphysis, periosteum.](${fig(1, 1).src})

| Part | Description | Growth role |
|---|---|---|
| **Diaphysis** | Cylindrical **shaft**; full of marrow | — |
| **Metaphysis** | Flared region between shaft and end; full of marrow | — |
| **Epiphysis** | Terminal end; **spongy core** disperses joint forces | Contains the growth plate |
| **Epiphyseal (growth) plate** | **Cartilaginous** disc at the inner edge of the epiphysis | **Site of longitudinal growth**; **closes at puberty** |
| **Periosteum** | Fibrous outer sheath | **Muscle attachment**; cells can become **bone-forming**; needed for **growth & repair** |

Two dense connective tissues tie the system together:

- **Tendons** — attach **muscle to bone**.
- **Ligaments** — hold **bone to bone** at joints.

:::bridge
The root *lig–* is Latin for **"to tie / bind"** — the same root as **DNA ligase** (*MCAT Biochemistry Review*, Ch. 6) and **ligands** in complex ions (*MCAT General Chemistry Review*, Ch. 9). **Ligaments** tie bones together to stabilize joints.
:::

##### Microscopic structure
Compact bone's strength comes from the **bone matrix**, which is part organic, part mineral:

| Component | Includes |
|---|---|
| **Organic** | **Collagen**, glycoproteins, other peptides |
| **Inorganic** | **Hydroxyapatite** crystals — Ca₁₀(PO₄)₆(OH)₂ (calcium, phosphate, hydroxide); also stores Na, Mg, K |

The matrix is organized into repeating units called **osteons (Haversian systems)** (Figure 11.9):

![Figure 11.9 — Bone Matrix: osteon with lamellae, lacunae, canaliculi, and Haversian/Volkmann's canals.](${fig(1, 2).src})

| Structure | What it is |
|---|---|
| **Osteon (Haversian system)** | The repeating structural unit of compact bone |
| **Lamellae** | Concentric rings of bony matrix around a central channel |
| **Haversian canals** | **Longitudinal** channels (parallel to bone) carrying vessels, nerves, lymph |
| **Volkmann's canals** | **Transverse** channels (perpendicular to bone) connecting Haversian canals |
| **Lacunae** | Small spaces between lamellae housing **osteocytes** (mature bone cells) |
| **Canaliculi** | Tiny channels linking lacunae for **nutrient/waste exchange** |

:::keyconcept
Bone looks static but is highly **dynamic** — both **vascular and innervated** (hence the pain of a fracture) and in constant **remodeling equilibrium** between building and breakdown.
:::

##### Bone remodeling
Three bone cell types do the work. The two remodeling cells push in opposite directions:

| Cell | Job | Mnemonic |
|---|---|---|
| **Osteoblast** | **Builds** bone; deposits matrix using blood Ca²⁺ + phosphate | osteo**B**last = **B**uild |
| **Osteoclast** | **Resorbs** bone (a polynucleated resident **macrophage**); releases Ca²⁺/phosphate to blood | osteo**C**last = **C**hew / **C**arve |
| **Osteocyte** | **Mature** cell trapped in a **lacuna**; **maintains** bone | (the retired osteoblast) |

![Figure 11.10 — Bone Remodeling: osteoclasts dissolve bone (releasing Ca²⁺ to blood); osteoblasts build new bone from collagen + hydroxyapatite.](${fig(1, 3).src})

Remodeling responds to **mechanical stress** (bone reshapes to handle repetitive loads) and to **endocrine hormones**:

| Hormone | Source | Effect on bone | Effect on blood Ca²⁺ |
|---|---|---|---|
| **Parathyroid hormone (PTH)** | Parathyroid glands (when blood Ca²⁺ **low**) | ↑ **Resorption** | ↑ Ca²⁺ & phosphate |
| **Vitamin D** (activated by PTH) | — | ↑ **Resorption** (→ turnover → **stronger** new bone) | ↑ Ca²⁺ |
| **Calcitonin** | Parafollicular (C) cells of thyroid (when blood Ca²⁺ **high**) | ↑ **Formation** | ↓ Ca²⁺ |

:::mnemonic
**osteo*B*last *B*uilds bone; osteo*C*last *C*hews (Carves) bone.** And for the hormone direction: **PTH "P**ulls" calcium out of bone into blood; **calci*tonin* "tones down"** blood calcium by putting it back.
:::

:::realworld
**Osteoporosis** — the most common U.S. bone disease — results from **increased osteoclast resorption** plus slowed formation → lost bone mass. **Estrogen** helps prevent it by **stimulating osteoblasts**.
:::

#### Cartilage
**Cartilage** is **softer and more flexible** than bone. Its firm-but-elastic matrix, **chondrin**, is secreted by **chondrocytes**.

- **Fetal skeletons** are largely cartilage — useful for growing in a confined space and passing through the birth canal.
- **Adults** retain cartilage only where extra flexibility/cushioning is needed: **external ear, nose, larynx/trachea walls, intervertebral discs, joints**.
- Cartilage is **avascular** (no blood/lymph vessels) and **not innervated** — a key contrast with bone.

| | **Bone** | **Cartilage** |
|---|---|---|
| Hardness | Hard, rigid | Soft, flexible |
| Matrix | Bone matrix (collagen + **hydroxyapatite**) | **Chondrin** |
| Cells | Osteoblasts / osteoclasts / osteocytes | **Chondrocytes** |
| Vascular? | **Yes** (and innervated) | **No** (avascular, non-innervated) |
| Source tissue | Mesoderm | — |

Bone forms by two routes:

- **Endochondral ossification** — **cartilage hardens into bone**; forms most **long bones**.
- **Intramembranous ossification** — undifferentiated **mesenchymal tissue** becomes bone directly; forms **skull** bones.

:::mnemonic
**"Endo-*chondral*" contains "*chondr*"** (cartilage) → bone **from cartilage**. **Intra*membranous*** → bone **from membranous mesenchyme** (the **skull/fontanelles**).
:::

#### Joints and movement
Joints are connective tissue in two varieties:

| Joint type | Structure | Example |
|---|---|---|
| **Immovable** | Bones **fused** into **sutures**/fibrous joints | Skull |
| **Movable** | **Synovial capsule** enclosing a **joint (articular) cavity** | Elbow, knee, shoulder, hip |

**Movable joints** (Figure 11.11) are strengthened by **ligaments** and include **hinge** (elbow, knee) and **ball-and-socket** (shoulder, hip) types. Their components:

- **Synovial capsule** — encloses the **joint cavity (articular cavity)**.
- **Synovium** — soft-tissue layer that **secretes synovial fluid** (the **lubricant**).
- **Articular cartilage** — coats the bone surfaces so impact is borne by **lubricated cartilage**, not bare bone.

![Figure 11.11 — Structures in a Movable Joint: articular cartilage, synovial capsule, synovium, joint cavity with synovial fluid.](${fig(1, 4).src})

:::realworld
Degradation of **articular cartilage** causes **osteoarthritis** — painful because, without cartilage, **bone rubs directly on bone**.
:::

##### Muscles acting on joints
When a muscle spans two bones, contraction moves one of them:

- **Origin** — the **larger / proximal** attachment (stays relatively fixed).
- **Insertion** — the **smaller / distal** attachment (the part that moves).
- **Antagonistic pairs** — one contracts while the other relaxes (e.g., **biceps vs. triceps brachii**: biceps contracts → elbow **flexes**; triceps contracts → elbow **extends**).
- **Synergistic** muscles work **together** toward the same motion.

![Figure 11.12 — Antagonistic Muscle Pairs: contraction of the biceps brachii elongates the triceps brachii (and vice versa).](${fig(1, 5).src})

Muscles are also named by the motion they produce:

| Class | Action | Example |
|---|---|---|
| **Flexor** | **Decreases** the joint angle | Biceps brachii |
| **Extensor** | **Increases / straightens** the angle | Triceps brachii |
| **Abductor** | Moves a part **away** from the midline | Deltoid |
| **Adductor** | Moves a part **toward** the midline | Pectoralis major |
| **Medial rotator** | Rotates a limb's axis **toward** the midline | Subscapularis |
| **Lateral rotator** | Rotates a limb's axis **away** from the midline | Infraspinatus |

:::mnemonic
**ABduct = move Away** (think *abduction* — taken away from the body's midline); **ADDuct = ADD back** toward the midline. And **"flex" bends, "extend" straightens.**
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Muscle types:** **Skeletal** = striated, voluntary, *many* nuclei (somatic). **Smooth** = smooth/nonstriated, involuntary, *one* nucleus. **Cardiac** = striated but involuntary, *1–2* nuclei, intercalated discs. **All need Ca²⁺.**',
      '**Filaments:** ac*t*in has a *T* → carries *t*roponin + *t*ropomyosin (thin); **"ac*thin*"** = actin is thin, myosin is thick.',
      '**Sarcomere bands** — only the **A-band stays constant** ("A is Always the same"); H-zone, I-band, and Z–Z distance all **shrink** as filaments *slide* (they never shorten).',
      '**Cross-bridge ATP:** **"Bind to Break, Split to Stick"** — ATP *binding* breaks (detaches) the bridge; *hydrolysis* re-cocks the head. The **powerstroke** is the release of **ADP + Pᵢ**, not hydrolysis.',
      '**Myogenic** muscle (contracts without nerves) = **smooth + cardiac** (the involuntary two).',
      '**osteo*B*last *B*uilds; osteo*C*last *C*hews (Carves).** Osteocyte = the mature, matrix-trapped maintainer.',
      '**Calcium hormones:** **PTH "P**ulls" Ca²⁺ out of bone (↑ blood Ca²⁺); **vitamin D** also resorbs (→ stronger new bone); **calci*tonin* "tones down"** blood Ca²⁺ (↑ formation).',
      '**Ossification:** **endo*chondral*** has "*chondr*" → bone **from cartilage** (long bones); **intramembranous** → bone from **mesenchyme** (skull/fontanelles).',
      '**ABduct = Away from midline; ADDuct = ADD back toward midline.**'
    ],
    keyConcepts: [
      '**All muscle contraction is calcium-dependent;** what differs across types is the *trigger* — somatic neurons for skeletal vs. intrinsic **myogenic** pacing (± autonomic modulation) for cardiac and smooth.',
      '**The filaments slide, they do not shorten.** This is why the **A-band** (full myosin length) is invariant during contraction while the **H-zone and I-band** shrink — a near-guaranteed MCAT question.',
      '**ATP plays two roles in the cross-bridge cycle:** its *binding* detaches myosin from actin (no ATP → rigor mortis), while the *powerstroke* is fueled by the **dissociation of ADP + Pᵢ** — not by hydrolysis itself.',
      '**Bone is a dynamic Ca²⁺ reservoir,** continuously remodeled by **osteoblasts** (build) and **osteoclasts** (resorb) under **PTH/vitamin D** (resorb, raise blood Ca²⁺) and **calcitonin** (build, lower blood Ca²⁺).',
      '**Linear growth happens at the epiphyseal (growth) plate** — cartilaginous, mitotic in childhood, closed at puberty; damage here is the classic cause of a short or unequal-length long bone.',
      '**Cartilage is avascular and non-innervated** (nourished by diffusion), distinguishing it from vascular, innervated bone and explaining its poor healing.'
    ],
    equations: [
      { name: 'Creatine phosphate energy reserve', tex: 'Creatine\\ phosphate + ADP \\rightleftharpoons Creatine + ATP', note: 'At rest, ATP phosphorylates creatine; during activity the reaction reverses to rapidly regenerate ATP for contraction.' },
      { name: 'Hydroxyapatite (inorganic bone matrix)', tex: 'Ca_{10}(PO_4)_6(OH)_2', note: 'The mineral crystal that hardens bone matrix; main inorganic component, storing calcium and phosphate.' }
    ]
  },

  questions: raw.questions
};
