// Chapter 4 — The Nervous System. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch04.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch04.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 4,
  title: 'The Nervous System',
  subtitle: 'Cells of the nervous system · transmission of neural impulses · organization of the human nervous system',

  blocks: [
    /* ───────────────────── 4.1 Cells of the Nervous System ───────────────────── */
    {
      id: 's1', num: '4.1', title: 'Cells of the Nervous System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 4.1 — Structure of a neuron: soma, dendrites, axon hillock, myelinated axon, nodes of Ranvier, and nerve terminals.' }],
      recap: `
- **Neurons** transmit **electrical** impulses (down the axon) and convert them into **chemical** signals (at the synapse).
- Signal flow: **dendrites** (receive) → **soma/cell body** (nucleus, ER, ribosomes) → **axon hillock** (sums input, fires the action potential) → **axon** → **nerve terminal / synaptic bouton** (releases **neurotransmitters**).
- **Myelin** insulates the axon and speeds conduction: made by **oligodendrocytes (CNS)** and **Schwann cells (PNS)**; gaps = **nodes of Ranvier**.
- Cell-body clusters: **ganglia (PNS)** vs **nuclei (CNS)**. Axon bundles: **nerves (PNS, mixed types)** vs **tracts (CNS, one type)**.
- **Glial cells (neuroglia)** support neurons: **astrocytes**, **ependymal**, **microglia**, **oligodendrocytes**, **Schwann cells**.
`,
      detail: `
#### Neurons
Each neuron's shape matches its function. Like all cells (except mature RBCs), neurons have a **nucleus**, housed in the **cell body**, also called the **soma** — also the site of the **endoplasmic reticulum** and **ribosomes**. Signal travels in one direction through the cell:

| Structure | Role (MCAT essentials) |
|---|---|
| **Dendrites** | Many appendages off the soma that **receive** incoming messages from other cells |
| **Soma (cell body)** | Houses the **nucleus, ER, ribosomes**; transmits input toward the axon hillock |
| **Axon hillock** | **Integrates** (sums) all excitatory & inhibitory input; if **threshold** is reached, it **initiates the action potential** |
| **Axon** | Long appendage that conducts the impulse to a target (muscle, gland, or another neuron) |
| **Myelin sheath** | Fatty insulation preventing signal loss/crossing and **speeding conduction** |
| **Nodes of Ranvier** | Periodic **breaks in myelin** with exposed membrane; critical for rapid (saltatory) conduction |
| **Nerve terminal / synaptic bouton (knob)** | Enlarged, flattened axon end that releases **neurotransmitters** to the next cell |

Most mammalian nerve fibers are insulated by **myelin**, much like insulation keeps adjacent wires from discharging each other. Myelin is produced by **oligodendrocytes** in the **central nervous system (CNS)** and by **Schwann cells** in the **peripheral nervous system (PNS)**.

:::mnemonic
**A**xons carry signals **a**way from the soma; **d**endrites carry signals toward it. (And myelin makers: "**O**ligodendrocytes = **O**ur own CNS; **S**chwann = **S**urrounding/peripheral.")
:::

:::realworld
In **multiple sclerosis (MS)**, the body mounts an immune attack on its **own myelin** in the brain and spinal cord (**demyelination**), slowing conduction. Because many neuron types are hit, symptoms vary widely: weakness, loss of balance, vision problems, and incontinence.
:::

##### Synapses, nerves, and tracts
Neurons are **not physically connected**. The terminal releases neurotransmitters into the **synaptic cleft**, where they bind receptors on the **postsynaptic neuron**. The **synapse** = nerve terminal + synaptic cleft + postsynaptic membrane.

Bundles of neuronal fibers are organized — and named — differently in the two divisions:

| | **Nerves (PNS)** | **Tracts (CNS)** |
|---|---|---|
| What is bundled | Multiple neurons | Axons |
| Information carried | **Sensory, motor, or mixed** | **Only one** type |
| Cell bodies cluster in | **Ganglia** | **Nuclei** |

#### Other Cells in the Nervous System

![Glial cells: oligodendrocyte processes wrapping axons, loosely associated with an astrocyte](${fig(0, 1).src})

Neurons are not the only cells in the nervous system — they must be supported and myelinated by **glial cells (neuroglia)**, which play structural and supportive roles. A detailed knowledge of these is *not* required for the MCAT; know their basic jobs:

| Glial cell | Function |
|---|---|
| **Astrocytes** | Nourish neurons and form the **blood–brain barrier**, controlling solute passage from blood into nervous tissue |
| **Ependymal cells** | Line the brain's **ventricles** and produce **cerebrospinal fluid (CSF)** — physical support and shock absorption |
| **Microglia** | **Phagocytic** cells that ingest and break down waste and pathogens in the CNS |
| **Oligodendrocytes** | Produce **myelin** in the **CNS** (one cell myelinates many axons) |
| **Schwann cells** | Produce **myelin** in the **PNS** (one cell per single axon segment) |

:::keyconcept
If an exam stem asks which glial cells defend the CNS, think **astrocytes** (blood–brain barrier) and **microglia** (phagocytosis) — disrupting either raises infection risk. Demyelination in the **PNS** (e.g., Guillain–Barré syndrome) implicates **Schwann cells**; in the **CNS** (e.g., MS), **oligodendrocytes**.
:::
`
    },

    /* ───────────────── 4.2 Transmission of Neural Impulses ───────────────── */
    {
      id: 's2', num: '4.2', title: 'Transmission of Neural Impulses',
      goals: goals(1),
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 4.4 — Action potential: resting (−70 mV) → threshold (≈ −55 mV) → depolarization (Na⁺ in, peak ≈ +35 mV) → repolarization (K⁺ out) → hyperpolarization → return to rest.' }],
      svgs: [{
        title: 'The action potential, phase by phase',
        caption: 'Membrane potential vs. time. Na⁺ influx drives the upstroke; K⁺ efflux drives repolarization and a brief hyperpolarizing undershoot before the Na⁺/K⁺ ATPase restores rest.',
        svg: `<svg viewBox="0 0 640 360" width="640" role="img" aria-label="Action potential curve with labeled phases" font-family="system-ui, sans-serif">
  <!-- axes -->
  <line x1="70" y1="20" x2="70" y2="320" stroke="#475569" stroke-width="2"/>
  <line x1="70" y1="320" x2="620" y2="320" stroke="#475569" stroke-width="2"/>
  <text x="36" y="26" font-size="12" fill="#475569" text-anchor="end">+40</text>
  <text x="36" y="120" font-size="12" fill="#475569" text-anchor="end">0</text>
  <text x="36" y="232" font-size="12" fill="#475569" text-anchor="end">−55</text>
  <text x="36" y="268" font-size="12" fill="#475569" text-anchor="end">−70</text>
  <text x="20" y="180" font-size="12" fill="#0f172a" transform="rotate(-90 20 180)" text-anchor="middle">membrane potential (mV)</text>
  <text x="345" y="350" font-size="12" fill="#0f172a" text-anchor="middle">time →</text>
  <!-- threshold + resting guide lines -->
  <line x1="70" y1="228" x2="620" y2="228" stroke="#f59e0b" stroke-width="1.3" stroke-dasharray="6 4"/>
  <text x="616" y="222" font-size="11" fill="#b45309" text-anchor="end">threshold ≈ −55 mV</text>
  <line x1="70" y1="264" x2="620" y2="264" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="616" y="259" font-size="11" fill="#64748b" text-anchor="end">resting ≈ −70 mV</text>
  <!-- AP trace -->
  <path d="M70,264 L150,260 L195,228 C210,228 220,120 240,40 C252,30 262,40 272,80 C285,135 300,250 320,288 C335,300 360,272 430,266 L620,264"
        fill="none" stroke="#dc2626" stroke-width="3"/>
  <!-- phase labels -->
  <text x="110" y="252" font-size="11.5" fill="#0f172a" text-anchor="middle">① rest</text>
  <text x="232" y="32" font-size="11.5" fill="#dc2626" text-anchor="middle">② depolarization (Na⁺ in)</text>
  <text x="252" y="60" font-size="10.5" fill="#475569" text-anchor="middle">peak ≈ +35 mV</text>
  <text x="318" y="160" font-size="11.5" fill="#2563eb" text-anchor="middle">③ repolarization (K⁺ out)</text>
  <text x="372" y="312" font-size="11.5" fill="#7c3aed" text-anchor="middle">④ hyperpolarization</text>
  <text x="510" y="282" font-size="11" fill="#475569" text-anchor="middle">⑤ Na⁺/K⁺ ATPase restores rest</text>
</svg>`
      }],
      recap: `
- **Resting membrane potential ≈ $-70$ mV** (inside negative). Set by **K⁺ leak** (pulls toward $-90$ mV) vs **Na⁺ leak** (pulls toward $+60$ mV); rest sits near K⁺ because the membrane is more **K⁺-permeable**. Maintained by the **Na⁺/K⁺ ATPase** (3 Na⁺ out / 2 K⁺ in).
- **Threshold ≈ $-55$ mV.** Excitatory input = **depolarization**; inhibitory = **hyperpolarization**; combined input = **summation** (**temporal** = same place over time; **spatial** = many places at once).
- **Action potential:** at threshold, **voltage-gated Na⁺ channels** open → depolarize to ~$+35$ mV → Na⁺ channels **inactivate** + **voltage-gated K⁺ channels** open → **repolarization** → **hyperpolarization** → **refractory period**.
- **All-or-nothing & one-way:** size is fixed; stronger stimulus = higher **frequency**, not bigger spikes. **Myelin** gives **saltatory conduction** (node-to-node hopping).
- **Synapse:** AP → **voltage-gated Ca²⁺ channels** open → **Ca²⁺ influx** → vesicle fusion → **neurotransmitter exocytosis**. Cleared **3 ways: enzymatic breakdown, reuptake, diffusion**.
`,
      detail: `
#### The action potential
Neurons relay **all-or-nothing** messages called **action potentials** down the axon to the synaptic bouton, where they trigger neurotransmitter release.

##### Resting potential

![Na⁺/K⁺ ATPase pumping 3 Na⁺ out and 2 K⁺ in against passive Na⁺ and K⁺ leak channels](${fig(1, 0).src})

The **resting membrane potential** is the net potential difference across the membrane — about $-70$ mV, inside negative. Two ions dominate, each with opposite gradients:

| Ion | Inside | Outside | Concentration gradient drives it… | Equilibrium potential |
|---|---|---|---|---|
| **Potassium (K⁺)** | ~140 mM | ~4 mM | **out** (via **K⁺ leak channels**) | ≈ $-90$ mV |
| **Sodium (Na⁺)** | ~12 mM | ~145 mM | **in** (via **Na⁺ leak channels**) | ≈ $+60$ mV |

Resting potential is a **tug-of-war**: K⁺ efflux pulls the cell toward $-90$ mV while Na⁺ influx pulls it toward $+60$ mV. Neither ion ever "wins," so a balance settles at about $-70$ mV — **closer to K⁺** because the membrane is slightly more **permeable to K⁺**. Because both ions keep leaking, the **Na⁺/K⁺ ATPase** must continually pump them back: **K⁺ in, Na⁺ out** (3 Na⁺ out per 2 K⁺ in). This pump consumes more ATP than any other single process in the body.

:::mnemonic
To recall the pump's direction, think **"pump K in"** — potassium is pumped **in**, sodium is pumped **out**.
:::

:::realworld
Only a *tiny* amount of K⁺ must leave before the electrostatic pull equals the concentration push — so little that the intracellular K⁺ concentration change during an action potential is essentially **unmeasurable**. The action potential depends on **local voltage** at the membrane, which is why potentials are reported in **millivolts**, not concentration change.
:::

:::bridge
The full predictor of resting potential — combining intra-/extracellular concentrations, membrane permeabilities, and ionic charge — is the **Goldman–Hodgkin–Katz voltage equation** (*MCAT Biochemistry Review*, Ch. 8).
:::

##### The axon hillock and summation
Input is summed at the **axon hillock**. **Excitatory** input causes **depolarization** (raises $V_m$, more likely to fire); **inhibitory** input causes **hyperpolarization** (lowers $V_m$, less likely to fire). If the hillock reaches **threshold** (≈ $-55$ to $-40$ mV), an action potential fires. The additive effect of many inputs is **summation**:

- **Temporal summation** — multiple signals integrated over a short *time* window (rapid firing from one source).
- **Spatial summation** — additive effects based on the *number and location* of inputs (e.g., many inhibitory signals on the soma overpower a few excitatory ones on distant dendrites).

##### Ion channels and the voltage trajectory
At threshold, **voltage-gated sodium channels** open. A strong **electrochemical gradient** drives Na⁺ in (interior is negative → electrical pull; Na⁺ is higher outside → chemical push), so the cell **rapidly depolarizes**. These Na⁺ channels have **three states**:

| Na⁺ channel state | When |
|---|---|
| **Closed** | Below threshold (and after inactivation reverses) |
| **Open** | From threshold to ≈ $+35$ mV |
| **Inactive** | From ≈ $+35$ mV back toward rest (must repolarize to **deinactivate**) |

:::keyconcept
**Na⁺ wants in** for *both* reasons: the inside is more **negative** (electrical gradient) and has a **lower** Na⁺ concentration (chemical gradient).
:::

As $V_m$ nears $+35$ mV, Na⁺ channels **inactivate** and **voltage-gated potassium channels** open. K⁺ now flows **out** down its electrochemical gradient, restoring negativity — **repolarization**. K⁺ channels stay open a beat too long, overshooting rest into **hyperpolarization**, which makes the neuron **refractory**:

| Refractory period | Rule |
|---|---|
| **Absolute** | **No** stimulus, however strong, can fire another AP (Na⁺ channels inactivated) |
| **Relative** | A **greater-than-normal** stimulus *can* fire, because the membrane starts more negative than rest |

The **Na⁺/K⁺ ATPase** then restores both the resting potential and the dissipated Na⁺/K⁺ gradients.

:::keyconcept
**One full cycle:** rest ($-70$) → reach **threshold** → **Na⁺ in → depolarize** → Na⁺ channels inactivate, **K⁺ out → repolarize** → **hyperpolarize** (overshoot) → **Na⁺/K⁺ ATPase** resets to rest.
:::

##### Impulse propagation

![Action potential moving left to right, trailed by a refractory segment of axon](${fig(1, 2).src})

Na⁺ rushing into one segment depolarizes neighboring segments to threshold, opening their Na⁺ channels — a **wave** that travels to the nerve terminal (**impulse propagation**). Because the segment just behind is **refractory**, the impulse can move **only one direction**.

Conduction speed depends on the axon's geometry and insulation:

- **Length** ↑ → resistance ↑ → conduction **slower**.
- **Cross-sectional area** ↑ → resistance ↓ → conduction **faster** (a *larger* effect than length).
- **Myelin** is such a good insulator that the membrane is permeable only at the **nodes of Ranvier**, so the signal **hops node to node** — **saltatory conduction**.

:::mnemonic
**Saltatory** ← Spanish *saltar*, "to jump." The signal *jumps* between nodes of Ranvier.
:::

:::realworld
**Tetrodotoxin (TTX)** from pufferfish and **local anesthetics** both block **voltage-gated Na⁺ channels**. TTX can be fatal — the phrenic nerve can't depolarize, so the diaphragm is paralyzed and breathing stops. Anesthetics preferentially hit small-diameter, poorly myelinated **pain** neurons at low doses.
:::

:::realworld
Myelin's insulation is so effective that a finger-thick spinal cord would otherwise need to be nearly as wide as a **telephone pole** to prevent signal loss.
:::

All action potentials in a given neuron type have the **same** depolarization magnitude. A more intense stimulus does **not** make a bigger spike — it raises the **frequency** of firing.

#### The synapse

![Action potential triggers synaptic vesicle fusion, releasing neurotransmitter across the cleft to postsynaptic receptors](${fig(1, 3).src})

Neurons aren't in direct contact; the **synaptic cleft** separates the **presynaptic neuron** from the **postsynaptic neuron** (or, for a gland/muscle target, an **effector**). Most synapses are **chemical**, using **neurotransmitters**.

##### Neurotransmitters: release and clearance
Neurotransmitters are stored in vesicles in the nerve terminal. When the AP arrives, **voltage-gated calcium channels** open; the **Ca²⁺ influx** triggers vesicle **fusion** and **exocytosis** into the cleft. Transmitters diffuse across and bind postsynaptic receptors:

- **Ligand-gated ion channels** → directly depolarize or hyperpolarize the postsynaptic cell.
- **G protein-coupled receptors** → alter **cAMP** levels or cause **Ca²⁺** influx.

Signaling must be terminated. There are **three** clearance mechanisms:

| Mechanism | How | Classic example |
|---|---|---|
| **Enzymatic breakdown** | Enzyme degrades the transmitter in the cleft | **Acetylcholine (ACh)** broken down by **acetylcholinesterase (AChE)** |
| **Reuptake** | Carrier pumps transmitter back into the presynaptic cell | **Serotonin (5-HT)** (also **dopamine, norepinephrine**) |
| **Diffusion** | Transmitter simply diffuses out of the cleft | **Nitric oxide (NO)**, a gaseous signal |

![Acetylcholine removed from its receptor and broken down by acetylcholinesterase](${fig(1, 4).src})

![Serotonin acting on postsynaptic and presynaptic autoreceptors, then taken back via a reuptake transporter](${fig(1, 5).src})

:::keyconcept
**Electrical *within*, chemical *between*.** Electricity (the action potential) carries the signal **down one axon**; **neurotransmitters** carry it **across the synapse** to the next cell, gland, or muscle.
:::

:::realworld
Many drugs act at the synapse: **cocaine** blocks reuptake carriers (prolonging transmitter action); **AChE inhibitors** (used for Alzheimer's, glaucoma, myasthenia gravis) raise synaptic ACh. **Nerve gases** are potent AChE inhibitors — they prevent diaphragm relaxation, causing fatal respiratory arrest.
:::
`
    },

    /* ─────────── 4.3 Organization of the Human Nervous System ─────────── */
    {
      id: 's3', num: '4.3', title: 'Organization of the Human Nervous System',
      goals: goals(2),
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 4.9 — Major divisions of the nervous system: CNS vs PNS → somatic vs autonomic → sympathetic vs parasympathetic.' }],
      recap: `
- **Three neuron types:** **sensory/afferent** (periphery → CNS), **motor/efferent** (CNS → muscles/glands), **interneurons** (most numerous; reflexes, in brain & cord).
- **CNS** = brain + spinal cord; **PNS** = 31 spinal nerve pairs + 10 of 12 cranial nerve pairs. PNS → **somatic (voluntary)** + **autonomic (involuntary)**.
- **White matter** = myelinated axons; **grey matter** = unmyelinated cell bodies/dendrites. Brain: white **deep**. Spinal cord: grey **deep**. Sensory enter **dorsally** (cell bodies in **dorsal root ganglia**); motor exit **ventrally**.
- **Autonomic = 2 neurons** in series (**pre-** then **postganglionic**); somatic motor = **1 neuron** straight to muscle.
- **Sympathetic** = "fight-or-flight"; **parasympathetic** = "rest-and-digest" (antagonists). **Reflex arcs**: **monosynaptic** (sensory → motor, 1 synapse) vs **polysynaptic** (≥1 interneuron).
`,
      detail: `
#### Central and peripheral nervous systems
The nervous system maintains **homeostasis** and runs sensation, motor control, cognition, language, memory, emotion, balance, and regulation of the endocrine system, heart rate, breathing, and glands. Three neuron classes do the work:

| Neuron type | Also called | Direction of signal |
|---|---|---|
| **Sensory neurons** | **Afferent** | Sensory receptors → spinal cord & brain |
| **Motor neurons** | **Efferent** | Brain & spinal cord → muscles & glands |
| **Interneurons** | — | Between neurons; **most numerous**; in brain & cord; tied to **reflexes** |

:::mnemonic
**A**fferent neurons **A**scend toward the brain; **E**fferent neurons **E**xit toward the body. (Or: **SAME** — **S**ensory **A**fferent, **M**otor **E**fferent.)
:::

Simple responses are handled at the **spinal cord** (reflexes need no brain input); complex ones use **supraspinal** circuits in the brainstem or cortex. The system splits into two primary components:

##### The CNS
The **central nervous system (CNS)** = **brain + spinal cord**.

- **White matter** = axons in **myelin** sheaths; **grey matter** = unmyelinated cell bodies & dendrites.
- **Brain:** white matter lies **deeper** than grey matter.
- The **brainstem** at the base runs basic life functions like breathing.

![Spinal cord cross-section: sensory neuron entering dorsally via the dorsal root ganglion, motor neuron exiting ventrally; surrounding white and inner grey matter](${fig(2, 1).src})

The **spinal cord** runs from the brainstem and divides into **cervical, thoracic, lumbar,** and **sacral** regions, protected by the **vertebral column**. Here the matter arrangement **flips**: **white matter on the outside, grey matter deep within**.

- **Sensory (afferent)** neurons enter on the **dorsal (back)** side; their cell bodies sit in the **dorsal root ganglia**.
- **Motor (efferent)** neurons exit on the **ventral (front)** side.

##### The PNS
The **peripheral nervous system (PNS)** is all nerve tissue outside the brain and spinal cord: all **31 pairs of spinal nerves** and **10 of the 12 pairs of cranial nerves** (the **olfactory** and **optic** nerves are CNS outgrowths). The PNS subdivides:

- **Somatic nervous system** — sensory & motor neurons of skin, joints, and muscles; **voluntary**. A somatic motor neuron runs **directly** from the spinal cord to the muscle (one neuron, no synapse en route).
- **Autonomic nervous system (ANS)** — regulates heartbeat, respiration, digestion, glandular secretion, and temperature (sweating/piloerection); **involuntary** ("**autonomic ≈ automatic**"). Uses **two neurons in series**.

:::keyconcept
In the **ANS**, the **preganglionic neuron** (soma in the **CNS**) synapses in a **PNS ganglion** onto the **postganglionic neuron**, which then drives the target tissue. The **somatic** system instead uses a **single** motor neuron straight to the muscle.
:::

#### The Autonomic Nervous System
The ANS has two **antagonistic** branches:

![Parasympathetic effects: constricts pupils, stimulates salivation, constricts bronchi, slows heartbeat, stimulates peristalsis/secretion and bile release, contracts bladder](${fig(2, 2).src})

![Sympathetic effects: dilates pupils, inhibits salivation, relaxes bronchi, accelerates heartbeat, stimulates sweating/piloerection and glucose release, inhibits peristalsis, secretes adrenaline](${fig(2, 3).src})

| Organ / response | **Sympathetic** ("fight-or-flight") | **Parasympathetic** ("rest-and-digest") |
|---|---|---|
| **Heart rate** | **Increases** | **Decreases** |
| **Bronchi** | **Relax** (dilate) | **Constrict** |
| **Pupils** | **Dilate** (more light) | **Constrict** |
| **Digestion / peristalsis** | **Decreases** | **Increases** (+ exocrine secretions) |
| **Blood flow** | **Redistributed to locomotor muscles** | Redistributed to the **gut** |
| **Blood glucose** | **Increases** | — (conserves energy) |
| **Adrenal medulla** | Releases **epinephrine** into blood | — |
| **Bladder** | Inhibits contraction | Contracts |

- **Parasympathetic** conserves energy (rest & sleep). Its neurotransmitter is **acetylcholine** at *both* pre- and postganglionic neurons. The **vagus nerve (CN X)** carries much of the thoracic/abdominal parasympathetic innervation.
- **Sympathetic** responds to stress/fear. Preganglionic neurons release **acetylcholine**, but **most postganglionic** neurons release **norepinephrine**.

:::mnemonic
**Sympathetic = "fight-or-flight"** (pupils dilate, heart races, **S**ugar up, **S**phincters/digestion shut down). **Parasympathetic = "rest-and-digest"** (**SLUDD**: **S**alivation, **L**acrimation, **U**rination, **D**igestion, **D**efecation). Antagonists — when one accelerates, the other brakes.
:::

#### Reflexes
**Reflex arcs** let interneurons in the spinal cord respond to a stimulus *and* relay it to the brain at the same time — the muscles react before the brain even registers the signal.

:::keyconcept
A reflex is a protective **feedback loop**. Stretching the patellar tendon makes the body fear an over-stretch, so the muscle **contracts** to prevent a tear.
:::

##### Monosynaptic

![Knee-jerk reflex: reflex hammer stretches the patellar tendon; sensory neuron signals the spinal cord, synapsing on a motor neuron that contracts the quadriceps](${fig(2, 4).src})

A **monosynaptic reflex arc** has a **single synapse** between the sensory and motor neuron. The classic **knee-jerk reflex**: stretching the patellar tendon sends a signal up the **sensory (afferent, presynaptic)** neuron to the cord, which synapses directly on the **motor (efferent, postsynaptic)** neuron that contracts the quadriceps → the leg extends, relieving tendon tension.

##### Polysynaptic
A **polysynaptic reflex arc** has **at least one interneuron** between the sensory and motor neurons. Example: the **withdrawal reflex** when stepping on a nail — the stepped-on leg flexes to pull away, while **interneurons** simultaneously route signals to **extend the opposite leg**, keeping you balanced.
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Signal direction:** **A**xons carry signals **a**way from the soma; **d**endrites carry signals toward it.',
      '**Na⁺/K⁺ ATPase:** "**pump K in**" — potassium **in**, sodium **out** (3 Na⁺ out / 2 K⁺ in).',
      '**Na⁺ wants IN** for both reasons — inside is more **negative** (electrical) and **lower** in Na⁺ (chemical).',
      '**AP cycle:** rest → **threshold** → **Na⁺ in (depolarize)** → **K⁺ out (repolarize)** → **hyperpolarize** → ATPase resets. (Sodium up, potassium down, pump cleans up.)',
      '**Saltatory** conduction ← *saltar*, "to jump" — the impulse hops node-to-node along myelin.',
      '**Afferent Ascend, Efferent Exit** (or **SAME**: Sensory Afferent, Motor Efferent). Dorsal = sensory in; ventral = motor out.',
      '**Sympathetic = fight-or-flight; Parasympathetic = rest-and-digest** (**SLUDD**: Salivation, Lacrimation, Urination, Digestion, Defecation).',
      '**Myelin makers:** **O**ligodendrocytes = CNS (one cell, many axons); **S**chwann = PNS (one cell per segment).'
    ],
    keyConcepts: [
      '**Electrical within, chemical between:** action potentials carry the signal down a single axon; neurotransmitters carry it across the synapse to the next cell.',
      '**Resting potential is a tug-of-war** between K⁺ (pulls to $-90$ mV) and Na⁺ (pulls to $+60$ mV), settling near $-70$ mV because the membrane is more K⁺-permeable; the Na⁺/K⁺ ATPase maintains the gradients.',
      '**Action potentials are all-or-nothing and unidirectional:** magnitude is fixed (stronger stimulus = higher frequency), and the trailing refractory segment forces one-way travel.',
      '**Ca²⁺ is the synaptic trigger:** the AP opens voltage-gated Ca²⁺ channels at the terminal, and Ca²⁺ influx drives vesicle fusion and neurotransmitter exocytosis.',
      '**Organization nests neatly:** CNS vs PNS → PNS into somatic (voluntary, 1 neuron) vs autonomic (involuntary, 2 neurons) → autonomic into antagonistic sympathetic and parasympathetic branches.'
    ],
    equations: [
      { name: 'Resting membrane potential', tex: 'V_{rest} \\approx -70\\ \\text{mV}', note: 'Neuron at rest; inside negative relative to outside.' },
      { name: 'Threshold potential', tex: 'V_{threshold} \\approx -55\\ \\text{mV}', note: 'Reaching threshold opens voltage-gated Na⁺ channels and triggers the action potential.' },
      { name: 'K⁺ equilibrium potential', tex: 'E_{K^+} \\approx -90\\ \\text{mV}', note: 'Where net K⁺ movement is zero; rest sits close to this because the membrane is most K⁺-permeable.' },
      { name: 'Na⁺ equilibrium potential', tex: 'E_{Na^+} \\approx +60\\ \\text{mV}', note: 'Where net Na⁺ movement is zero; the depolarization target during the AP upstroke.' }
    ]
  },

  questions: raw.questions
};
