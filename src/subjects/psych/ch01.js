// Behavioral Sciences Chapter 1 — Sensation & Perception.
// Self-contained module (no JSON import): markdown authored inline.

export default {
  id: 1,
  title: 'Sensation & Perception',
  subtitle: 'Sensation vs. perception · thresholds & signal detection · vision · audition & the vestibular system · the other senses · processing, Gestalt & perceptual cues',

  blocks: [
    /* ──────────────── 1.1 Sensation, Perception & Thresholds ──────────────── */
    {
      id: 's1', num: '1.1', title: 'Sensation, Perception & Thresholds',
      recap: `
- **Sensation** = receptors detecting a stimulus and **transducing** it into a neural signal; **perception** = the brain's *organization and interpretation* of those signals.
- **Absolute threshold** = the minimum stimulus intensity detected **50%** of the time; the **just-noticeable difference (JND / difference threshold)** = the smallest *change* detectable 50% of the time.
- **Weber's law:** the JND is a **constant proportion** of the original stimulus, $\\dfrac{\\Delta I}{I} = k$ — so a heavier baseline needs a bigger change to be noticed.
- **Signal detection theory** describes detecting signal vs. **noise** under uncertainty: outcomes are **hit, miss, false alarm, correct rejection**.
- **Subliminal stimuli** fall *below* the absolute threshold; thresholds shift with expectation, experience, motivation, and alertness.
`,
      detail: `
#### Sensation vs. perception
These two words bookend the same pathway and are constantly contrasted on the MCAT.

| | **Sensation** | **Perception** |
|---|---|---|
| What it is | Detection of a physical stimulus by **sensory receptors** | The brain's **organization & interpretation** of sensory input |
| Where | Peripheral receptors → afferent neurons | Central processing in the brain |
| Process | **Transduction** (stimulus → electrochemical signal) | Assembling signals into a meaningful experience |
| Example | Light hitting photoreceptors | *Recognizing* the image as your friend's face |

:::keyconcept
**Sensation is bottom-up data capture; perception is the meaning the brain assigns to it.** You can sense without perceiving (a sound you don't notice) and perceive things sensation alone can't explain (filling in a blind spot).
:::

#### Thresholds
- **Absolute threshold** — the **minimum intensity** of a stimulus needed to detect it **50% of the time**. At low intensities, some trials (and some people) register the stimulus and some don't, so we define detection probabilistically.
- **Threshold of conscious perception** — a stimulus may reach receptors and travel toward the brain yet never reach awareness.
- **Subliminal stimuli** — stimuli *below* the absolute threshold of conscious perception.
- **Difference threshold = just-noticeable difference (JND)** — the **smallest difference** between two stimuli that can be detected **50% of the time**. This is *change* detection, distinct from the absolute (presence) threshold.

The absolute threshold is not fixed; it shifts with **psychological state**, including:

- **Expectations**
- **Experience** (familiarity with the stimulus)
- **Motivation**
- **Alertness**

#### Weber's law
The JND is **not constant** — it grows in proportion to the baseline stimulus.

- Lift a **2 lb** weight: replacing it with **2.05 lb** feels identical, but **2.2 lb** is noticeably heavier.
- Now start from **5 lb**: **5.2 lb** may feel the same, while **5.5 lb** is clearly heavier.
- Here the JND (\\\`$\\Delta I$\\\`) is **0.2 lb** at a baseline (\\\`$I$\\\`) of **2 lb**, and **0.5 lb** at **5 lb**.

The ratio is constant:

$$\\dfrac{\\Delta I}{I} = k \\qquad \\left(\\dfrac{0.2}{2} = \\dfrac{0.5}{5} = 0.1\\right)$$

Rearranged, $\\Delta I = kI$ — the **incremental threshold is a linear function of background intensity**. Plotting baseline intensity against the JND gives a straight line whose slope is the **Weber fraction** \\\`$k$\\\`.

:::mnemonic
**Weber = "the richer you are, the bigger the raise you notice."** A \\\`$1\\\` raise matters on a \\\`$10\\\` salary but is invisible on a \\\`$100{,}000\\\` one. The *fraction* you need is what stays constant.
:::

#### Signal detection theory (SDT)
SDT examines how we decide whether a stimulus is present when conditions are **uncertain** — separating a real **signal** from background **noise**.

- Origins in **radar** (is the blip a small fish or a large whale?).
- In psychology: which words on a second list also appeared on the first?
- Real-world: reacting to a **traffic light** — the red signal is either present or absent.

Every trial has two truths (present/absent) and two responses (yes/no), giving four outcomes:

| | Response: **"Yes"** | Response: **"No"** |
|---|---|---|
| Signal **present** | **Hit** | **Miss** |
| Signal **absent** | **False alarm** | **Correct rejection** |

##### Sensitivity ($d'$) and response bias ($c$)
SDT models a **noise distribution** and a **signal distribution** on a shared intensity axis. Two parameters describe performance:

- **$d'$ (d-prime) = sensitivity** — the **separation between the two distribution means**. A large $d'$ means a strong, easily detected signal (many hits, few misses); a small $d'$ means a weak, overlapping signal that is hard to detect.
- **$c$ = response criterion / strategy** — where the observer places the **decision threshold**:
  - **Conservative** — say "yes" only when nearly certain a signal is present → few false alarms but **more misses**.
  - **Liberal** — say "yes" readily → catches most signals but generates **more false alarms**.

Different texts label the threshold with different symbols ($B$, $D$, $C$, $\\beta$). An **ideal observer** sets the criterion to minimize both misses and false alarms; relative to that ideal point a **liberal** observer sits lower (more "yes" responses) and a **conservative** observer sits higher.

:::keyconcept
**$d'$ is about the stimulus + your senses; the criterion $c$ is about your *strategy*.** Two people can have identical sensitivity yet very different hit and false-alarm rates simply because one is trigger-happy and the other cautious. SDT separates *can you detect it* from *how willing are you to say so*.
:::

:::realworld
A radiologist scanning mammograms illustrates SDT: a **liberal** criterion catches more tumors (high hit rate) but flags many healthy scans (false alarms → unnecessary biopsies); a **conservative** criterion spares healthy patients but risks **missing** real cancers. The optimal criterion weighs the cost of each error.
:::
`
    },

    /* ──────────────── 1.2 Sensory Receptors & Transduction ──────────────── */
    {
      id: 's2', num: '1.2', title: 'Sensory Receptors, Transduction & Adaptation',
      recap: `
- A **sensory receptor** detects a specific stimulus and performs **transduction** — converting it into an electrochemical (neural) signal.
- Receptors are specialized by stimulus: **photoreceptors** (light), **hair cells / mechanoreceptors** (pressure & sound), **chemoreceptors** (smell/taste), **thermoreceptors** (temperature), **nociceptors** (pain).
- **Sensory adaptation** = the receptor's response **diminishes over time** to a constant stimulus (down-regulation); **amplification** is up-regulation that boosts a weak signal.
- A stimulus carries four pieces of information: **type (modality), intensity, timing, and location**.
`,
      detail: `
#### Receptors and transduction
A **sensory receptor** is a specialized neuron (or accessory cell) that responds to a particular form of energy and carries out **transduction**: turning a physical stimulus into the electrochemical language of the nervous system. Afferent neurons then relay the signal toward the central nervous system.

Each receptor class is tuned to one stimulus type:

| Receptor type | Detects | Found in |
|---|---|---|
| **Photoreceptors** | Light (electromagnetic) | Retina (rods & cones) |
| **Hair cells** (mechanoreceptors) | Movement of fluid / pressure waves | Cochlea, vestibular organs |
| **Mechanoreceptors** | Pressure, vibration, stretch | Skin, muscles |
| **Thermoreceptors** | Temperature | Skin (TRPV1 and related channels) |
| **Nociceptors** | Painful / damaging stimuli | Skin, viscera |
| **Chemoreceptors** | Dissolved or airborne molecules | Taste buds, olfactory epithelium |

#### What a stimulus encodes
A single sensory event conveys four kinds of information to the brain:

- **Type (modality)** — which receptor/pathway is active (light vs. sound vs. touch).
- **Intensity** — encoded by firing **frequency** and the **number** of receptors recruited.
- **Timing** — when the stimulus occurs (steady, slow, or fast onset).
- **Location** — labeled-line, location-specific nerves carry "where" information to the brain.

#### Sensory adaptation
**Adaptation** is the change over time in a receptor's response to a **constant** stimulus — generally a **down-regulation** (the receptor stops firing even though the stimulus continues).

- **Touch:** press steadily with your hand and the pressure receptors fall silent after a few seconds.
- **Hearing:** loud noise makes a tiny **inner-ear muscle contract**, damping the ossicles.
- **Smell:** receptors desensitize to a persistent odor molecule.
- **Sight:** **light adaptation** (pupils constrict; rods and cones desensitize in bright light) and the slower **dark adaptation** (pupils dilate; photoreceptors re-sensitize).
- **Proprioception:** classic experiments showed animals raised in inverted environments eventually re-calibrated their sense of body position.

:::keyconcept
**Adaptation is protective.** An over-excited receptor can be damaged or die — e.g., excess pain signaling at a nociceptor (as with **capsaicin**) can be harmful. Dialing the response down prevents this and frees attention for *new* or *changing* stimuli.
:::

#### Amplification
**Amplification** is **up-regulation** — boosting a faint signal so it can be perceived. A single photon striking one photoreceptor triggers an action potential that can excite several downstream cells, each exciting more, so a tiny input produces a detectable cascade.

:::mnemonic
**Adaptation = "you stop feeling your socks."** You sense them when you put them on, then the steady pressure fades from awareness even though they're still there.
:::
`
    },

    /* ──────────────── 1.3 Vision ──────────────── */
    {
      id: 's3', num: '1.3', title: 'The Visual System',
      recap: `
- Light path: **cornea → pupil (iris) → lens → vitreous → retina**; the **lens** focuses the image onto the retina.
- **Retina** holds two photoreceptors: **rods** (~120 million; high light sensitivity, black-and-white, peripheral, slow recovery) and **cones** (~6 million; color, fovea, fast recovery).
- **Phototransduction:** light isomerizes **retinal** in **rhodopsin** → activates **transducin → phosphodiesterase** → cGMP falls → Na⁺ channels close → rod **hyperpolarizes** → bipolar then ganglion cells fire into the **optic nerve**.
- Pathways: the **right visual field projects to the left hemisphere** (and vice versa) after the **optic chiasm**.
- **Feature detection / parallel processing:** color (cones, **trichromatic theory**), form (**parvocellular** pathway), motion (**magnocellular** pathway) processed simultaneously.
`,
      detail: `
#### Anatomy of the eye
Light passes through several structures before reaching the photoreceptors:

| Structure | Role |
|---|---|
| **Conjunctiva** | First layer light contacts; thin membrane over the front of the eye |
| **Cornea** | Transparent anterior ⅙; bends (refracts) entering light |
| **Anterior chamber** | Filled with **aqueous humor**, which maintains pressure and eyeball shape |
| **Iris** | Pigmented muscle (determines eye color); its central hole is the **pupil** |
| **Pupil** | Opening that lets light in; size set by the iris |
| **Lens** | Bends light to focus it onto the **back** of the eye |
| **Ciliary body** | **Ciliary muscle** + **suspensory ligaments**; secretes aqueous humor and changes lens shape (accommodation) |
| **Posterior chamber** | Behind the ciliary muscle; also holds aqueous humor |
| **Vitreous chamber** | Filled with jelly-like **vitreous humor** for pressure/shape |
| **Retina** | Light-sensitive layer of **photoreceptors** |
| **Choroid** | Pigmented (black) vascular layer; absorbs stray light to prevent reflection |
| **Sclera** | White, tough fibrous outer coat (posterior ⅚); anchors the extraocular muscles |

Within the retina:

- **Macula** — central region **rich in cones**.
- **Fovea** — center of the macula, **entirely cones, no rods** → sharpest vision.
- **Blind spot** — where the **optic nerve** exits; **no rods or cones**, so no light is detected here.

#### Rods and cones
Light is electromagnetic radiation; the **visible spectrum** runs roughly **violet (~400 nm) to red (~700 nm)**, a narrow band within the full EM spectrum. Two photoreceptor types convert it to neural signals.

| | **Rods** | **Cones** |
|---|---|---|
| Number | **~120 million** | **~6–7 million** |
| Pigment | **Rhodopsin** | **Photopsin** (3 types) |
| Sensitivity | **~1000× more** light-sensitive | Less sensitive |
| Detects | Light/dark, **black-and-white**, night vision | **Color** (red ~60%, green ~30%, blue ~10%) |
| Location | Mostly **peripheral** retina | Concentrated in the **fovea** |
| Recovery | **Slow** (dark adaptation is gradual) | **Fast** |

Because cones sit in the fovea with **no overlying axons in the light path**, foveal vision has the highest resolution; light striking the periphery must pass through a bundle of axons first, scattering some energy.

#### The phototransduction cascade
Counterintuitively, a rod is **"on" (depolarized) in the dark** and **turns off in the light**:

1. A rod contains stacked **discs** packed with **rhodopsin** — a 7-pass protein holding the chromophore **11-*cis* retinal**.
2. Light isomerizes retinal from **bent (cis) to straight (trans)**, changing rhodopsin's shape.
3. Activated rhodopsin activates **transducin** (a G protein, α/β/γ); its **α subunit** activates **phosphodiesterase (PDE)**.
4. PDE converts **cGMP → GMP**. Because the rod's **Na⁺ channels need cGMP to stay open**, falling cGMP **closes** them.
5. Less Na⁺ entry → the rod **hyperpolarizes** and stops releasing **glutamate**.
6. Glutamate normally **inhibited** ON-bipolar cells, so its loss lets **bipolar cells fire**, which excite **retinal ganglion cells**, whose axons form the **optic nerve** to the brain.

:::keyconcept
**Light turns a rod OFF.** The signal the brain receives is *the rod going quiet*. Cones use the identical cascade with **photopsin** instead of rhodopsin.
:::

#### Visual pathways
The right side of the body is controlled by the left brain and vice versa — vision follows the same crossed logic, but organized by **visual field**, not by eye:

- The **entire right visual field** (seen by the nasal retina of the right eye and temporal retina of the left) projects to the **left hemisphere**.
- The **entire left visual field** projects to the **right hemisphere**.
- Fibers from the nasal halves cross at the **optic chiasm**; signals travel via the optic tract to the **thalamus (LGN)** and on to the **visual cortex**.

#### Feature detection and parallel processing
Different attributes of a scene are extracted **simultaneously** by dedicated systems — **parallel processing** — and only later bound into one percept:

| Feature | Pathway / theory | Strength | Weakness |
|---|---|---|---|
| **Color** | **Cones** — **trichromatic theory** (red/green/blue) | Color discrimination | — |
| **Form / shape** | **Parvocellular pathway** | High **spatial** resolution | Poor **temporal** resolution (slow stimuli only) |
| **Motion** | **Magnocellular pathway** | High **temporal** resolution | Poor **spatial** resolution; **no color** |

:::mnemonic
**Parvo = small & Precise (form/detail); Magno = big & Movement (motion).** "Parvo" sounds like *parva* (small) → fine spatial detail; "Magno" → magnitude/motion.
:::
`
    },

    /* ──────────────── 1.4 Audition & the Vestibular System ──────────────── */
    {
      id: 's4', num: '1.4', title: 'The Auditory & Vestibular Systems',
      recap: `
- Sound path: **pinna → auditory canal → tympanic membrane → malleus, incus, stapes → oval window → cochlea (organ of Corti) → round window**.
- **Hair cells** in the cochlea transduce sound: fluid movement bends stereocilia, **tip links** open **K⁺** channels → **Ca²⁺** influx → action potential in the **spiral ganglion → auditory nerve**.
- **Place/basilar tuning (tonotopy):** the cochlear **base** responds to **high** frequencies, the **apex** to **low**; humans hear ~**20–20,000 Hz**.
- The **vestibular system** (inner ear) governs balance: **semicircular canals** (rotational/angular acceleration via **endolymph**) and **otolithic organs — utricle & saccule** (linear acceleration & head position).
- Endolymph's lag after spinning underlies **dizziness/vertigo**.
`,
      detail: `
#### What sound is
Sound is a **pressurized wave** — alternating regions of high and low air pressure. The closeness of the pressure peaks is the **frequency** (pitch). Several frequencies can arrive at once as a complex wave; the ear must separate them, which the cochlea accomplishes because different frequencies travel different distances along its length.

Two ingredients are required to hear: **(1) a pressurized sound wave** and **(2) a hair cell** to transduce it.

#### The conduction pathway
| Region | Structures | Function |
|---|---|---|
| **Outer ear** | **Pinna → external auditory canal (meatus) → tympanic membrane (eardrum)** | Funnels & channels sound; eardrum vibrates |
| **Middle ear** | **Malleus → incus → stapes** (ossicles) | Amplify and transmit vibration to the **oval window** |
| **Inner ear** | **Cochlea** + **semicircular canals** | Transduction (hearing) and balance |

Vibration of the eardrum rocks the three ossicles; the **stapes** pushes on the **oval window**, sending a pressure wave through cochlear fluid. The wave travels to the cochlear tip and returns, finally pushing out the **round window**. The **organ of Corti** (containing the **basilar** and **tectorial** membranes) runs down the middle of the coiled cochlea and divides it.

#### Transduction by hair cells
Within the organ of Corti, **hair cells** carry bundles of filaments (**stereocilia/kinocilia**) tipped by **tip links**:

1. Fluid movement bends the hair bundle back and forth.
2. The stretching **tip links** pull open **K⁺ channels**, letting K⁺ flow in.
3. K⁺ entry opens **Ca²⁺** channels; Ca²⁺ influx triggers an action potential in a **spiral ganglion** cell.
4. The spiral ganglion feeds the **auditory (vestibulocochlear) nerve** to the **primary auditory cortex**.

#### Pitch perception — place/basilar tuning
The cochlea sorts frequencies by **location** (a tonotopic map):

- Hair cells at the **base** of the cochlea respond to **high-frequency** sounds.
- Hair cells at the **apex** respond to **low-frequency** sounds.
- Humans hear roughly **20–20,000 Hz**; only the hair cells tuned to the incoming frequency fire.
- The **primary auditory cortex** preserves this layout — **tonotopic mapping** — so different locations encode different pitches.

:::realworld
A **cochlear implant** treats **sensorineural ("nerve") deafness**, where sound can't be conducted from the cochlea to the brain. A microphone → speech processor → transmitter (outside the skull) → receiver → stimulator delivers electrical signals directly to the cochlea, which the auditory nerve relays to the brain.
:::

#### The vestibular system
Also housed in the inner ear, the vestibular apparatus provides **balance and spatial orientation**.

| Structure | Detects | How |
|---|---|---|
| **Semicircular canals** (anterior, posterior, lateral) | **Rotational / angular** acceleration | Filled with **endolymph**; head rotation shifts the fluid, bending hair cells to signal *direction* and *strength* of rotation |
| **Otolithic organs — utricle & saccule** | **Linear** acceleration & **head position** relative to gravity | **Calcium carbonate crystals (otoliths)** in viscous gel sit on hair cells; tilting/standing shifts them, pulling hair cells and triggering action potentials |

:::keyconcept
**Three near-perpendicular semicircular canals = rotation in all planes; the utricle and saccule = straight-line motion and gravity.** Together they tell the brain how the head is moving and where "down" is.
:::

:::realworld
**Dizziness and vertigo** arise because **endolymph keeps moving after you stop spinning** — the fluid's inertia signals continued rotation, so the brain perceives motion that no longer exists.
:::
`
    },

    /* ──────────────── 1.5 The Other Senses ──────────────── */
    {
      id: 's5', num: '1.5', title: 'Smell, Taste, Touch & Proprioception',
      recap: `
- **Olfaction (smell):** odorants bind **GPCR** receptors in the **olfactory epithelium**; like-tuned neurons converge on a **glomerulus** in the **olfactory bulb** → mitral/tufted cells → brain (axons pass the **cribriform plate**).
- **Pheromones** are detected by the **vomeronasal organ**; in animals this routes to the **accessory olfactory bulb → amygdala**, but humans **lack a functional accessory olfactory bulb**.
- **Gustation (taste):** five tastes — **sweet, sour, salty, bitter, umami**; sweet/umami/bitter use **GPCRs**, sour/salty use **ion channels**. Each line stays separate to the cortex (**labeled-lines model**).
- **Somatosensation:** **thermoception** (temp), **mechanoception** (pressure), **nociception** (pain), **proprioception** (position); the body maps onto the **somatosensory homunculus**.
- **Proprioception** (awareness of body position, includes balance) vs. **kinesthesia** (sense of body *movement*, excludes balance).
`,
      detail: `
#### Olfaction (smell)
Smell is **chemoreception** of airborne molecules. The **olfactory epithelium** in the upper nasal cavity is separated from the brain by the **cribriform plate**. The **olfactory bulb** (a forward extension of the brain) sends fine projections through that plate into the epithelium.

1. An odorant molecule enters the nose and binds a **G-protein-coupled receptor (GPCR)** on an olfactory neuron — each neuron expresses **one receptor type** (e.g., sensitive to benzene rings).
2. The G protein dissociates and triggers a cascade that opens an ion channel → **action potential**.
3. All neurons tuned to the **same** molecule converge on a single **glomerulus** in the olfactory bulb.
4. They synapse onto **mitral/tufted cells**, which project to the brain.

Smell and taste are linked: when you eat, molecules drift up the back of the throat into the nose, so a head cold (blocked smell) blunts flavor.

##### Pheromones
A **pheromone** is a chemical released by one member of a species and sensed by **another member of the same species** to trigger an **innate response** (mating, aggression, communication) — especially important in insects.

- Detected by the **vomeronasal organ (VNO)** within the **accessory olfactory epithelium**, containing **basal** and **apical** cells with tip receptors.
- In animals, the VNO projects through the **accessory olfactory bulb** to the **amygdala** (emotion, aggression, mating).
- **Humans have a vomeronasal organ but no functional accessory olfactory bulb**, so human pheromone signaling is debated.

#### Gustation (taste)
There are **five basic tastes**: **sweet, sour, salty, bitter,** and **umami** (the taste of glutamate). **Taste buds** sit in papillae across the tongue — **fungiform** (anterior), **foliate** (sides), and **circumvallate** (back) — and each bud contains receptor cells for **all five** tastes (any taste can be sensed anywhere, though buds cluster anteriorly).

| Taste | Receptor mechanism |
|---|---|
| **Sweet** | **GPCR** |
| **Umami** | **GPCR** |
| **Bitter** | **GPCR** |
| **Salty** | **Ion channel** (e.g., Na⁺ enters directly) |
| **Sour** | **Ion channel** (H⁺) |

For GPCR tastes, the ligand binds → G protein dissociates → ion channels open → cell **depolarizes** → action potential. For salty/sour, ions bind/enter directly and depolarize the cell. Each receptor cell keeps a **separate axon** to its own region of the **gustatory cortex** — the **labeled-lines model** (taste identity = *which line* fires, set by the receptor, not the cell).

:::keyconcept
**Labeled lines:** if you put a salt receptor into a "sweet" cell, salt would now activate that cell — and the brain would still read its line as **sweet**, because perceived taste depends on *which line* signals the cortex, not the molecule itself.
:::

#### Somatosensation (touch)
The skin and body report several submodalities, each with its own timing profile:

| Submodality | Sense | Notes |
|---|---|---|
| **Thermoception** | Temperature | Via **TRPV1** and related channels |
| **Mechanoception** | Pressure / touch | Mechanoreceptors |
| **Nociception** | Pain | Free nerve endings |
| **Proprioception** | Body position | Muscle/joint receptors |

Receptors also differ in **timing** — **non-adapting, slow-adapting, fast-adapting** — and in **location** (location-specific labeled nerves to the brain).

##### Pain and temperature
The **TRPV1** receptor senses both **heat and pain** (it is also activated by **capsaicin**, why chili "burns"). Heat or tissue damage changes the receptor's conformation, opening it and signaling the brain. Pain travels on three fiber types:

| Fiber | Diameter / myelin | Speed |
|---|---|---|
| **A-β** | Thick, **heavily myelinated** | **Fast** (low resistance, high conduction) |
| **A-δ** | Smaller, **lightly myelinated** | Medium |
| **C** | Small, **unmyelinated** | **Slow** — the lingering, dull ache |

##### The somatosensory homunculus
All body touch information converges on the **somatosensory cortex**, which holds a **topographic map** of the body — the **homunculus**. Body regions with denser innervation (hands, lips) occupy disproportionately large cortical areas. Neurosurgeons exploit this: stimulating a cortical point makes the patient feel a specific body part, helping avoid sensory areas during surgery.

#### Proprioception vs. kinesthesia
Both let you move in the dark, but the MCAT distinguishes them:

| | **Proprioception** | **Kinesthesia** |
|---|---|---|
| Sense of | **Position** of the body in space (static awareness) | **Movement** of the body (dynamic) |
| Flavor | More **cognitive** awareness | More **behavioral** |
| Includes balance? | **Yes** | **No** |
| Receptors | Stretch-sensitive sensors in **muscles** → spinal cord → brain | Same muscle/joint receptors, focused on motion |

:::mnemonic
**Proprioception = "POSition" (and includes balance); Kinesthesia = "KINetic / motion" (no balance).**
:::
`
    },

    /* ──────────────── 1.6 Processing, Gestalt & Perceptual Cues ──────────────── */
    {
      id: 's6', num: '1.6', title: 'Processing, Gestalt & Perceptual Cues',
      recap: `
- **Bottom-up (data-driven) processing:** the **stimulus** itself builds the percept; **top-down (conceptually driven):** **prior knowledge/expectation** guides interpretation (e.g., *Where's Waldo?*).
- **Gestalt principles** describe how we organize parts into wholes: **similarity, proximity, continuity, closure, prägnanz**.
- **Depth cues** split into **binocular** (need both eyes — **retinal disparity, convergence**) and **monocular** (one eye — **relative size, interposition, relative height, motion parallax, shading/contour**).
- **Perceptual constancy:** objects are perceived as stable in **size, shape, and color** despite changing retinal images.
`,
      detail: `
#### Bottom-up vs. top-down processing
| | **Bottom-up** | **Top-down** |
|---|---|---|
| Driven by | The incoming **stimulus** (data) | **Background knowledge & expectations** (concepts) |
| Direction | Parts → whole | Whole/expectation → parts |
| Example | Assembling edges and colors into a shape you've never seen | Spotting a familiar face fast in a crowd; finding **Waldo** because you know what he looks like |

:::keyconcept
**Real perception blends both.** Sensory data flows up while expectations flow down; reading a sloppy word from context (top-down) while still decoding the letters (bottom-up) shows the two operating together.
:::

#### Gestalt principles
**Gestalt** psychology holds that the **whole is perceived as more than the sum of its parts** — the brain imposes organization.

| Principle | What it states |
|---|---|
| **Similarity** | Items that look alike are grouped together |
| **Proximity** | Objects that are **close together** are grouped together |
| **Continuity** | Lines/patterns are seen as following the **smoothest, continuous path** |
| **Closure** | Incomplete figures are perceived as **complete wholes** (the brain fills gaps) |
| **Prägnanz** (good figure) | Reality is organized into the **simplest, most regular form** possible (e.g., the **Olympic rings** seen as five circles) |

:::mnemonic
**Gestalt = "the whole is greater than the sum of its parts."** Remember the principles as **"Some People Continue Closing Patterns"** → **S**imilarity · **P**roximity · **C**ontinuity · **C**losure · **P**rägnanz.
:::

#### Depth, form & motion cues
We reconstruct a 3-D world from 2-D retinal images using **depth cues**, divided by how many eyes are needed.

| Type | Cue | How it signals depth |
|---|---|---|
| **Binocular** (two eyes) | **Retinal disparity** | The eyes sit ~**2.5 inches** apart, so each sees a slightly different image; the brain compares them — larger disparity = closer object |
| **Binocular** | **Convergence** | Eyes **rotate inward** for near objects (muscles contract) and relax for far ones; the brain reads the muscle effort |
| **Monocular** (one eye) | **Relative size** | Closer objects project a **larger** retinal image |
| **Monocular** | **Interposition (overlap)** | An object that **blocks** another is perceived as nearer |
| **Monocular** | **Relative height** | Objects **higher** in the visual field are seen as farther away |
| **Monocular** | **Shading & contour** | Light/shadow gradients imply 3-D form |
| **Monocular** | **Motion parallax** | When moving, **near objects appear to move faster**; far objects move slowly |

:::mnemonic
**Binocular cues = "Bi = 2 eyes": retinal Disparity and Convergence both need both eyes.** Everything else (size, overlap, height, shading, parallax) works with **one** eye → monocular.
:::

#### Perceptual constancy
**Constancy** is the perception that an object stays the **same** even though its **retinal image changes** with distance, angle, or lighting:

- **Size constancy** — a car looks the same size whether near or far, despite a shrinking retinal image.
- **Shape constancy** — a door is seen as rectangular even when the retinal image is a trapezoid as it opens.
- **Color constancy** — an apple looks red under sunlight or dim indoor light.

:::keyconcept
**Constancy is top-down stabilization.** The brain uses prior knowledge of objects to hold size, shape, and color steady against a constantly shifting raw retinal image.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Sensation, Perception & Thresholds',
        points: [
          '**Sensation** = receptors transducing a stimulus; **perception** = the brain interpreting it.',
          '**Absolute threshold** = detected 50% of the time; **JND/difference threshold** = smallest *change* detected 50% of the time.',
          '**Weber\'s law:** $\\dfrac{\\Delta I}{I} = k$ — the JND is a constant *fraction* of the baseline stimulus.',
          '**Signal detection theory:** hit / miss / false alarm / correct rejection; **$d\'$** = sensitivity, **$c$** = response criterion (conservative vs. liberal).'
        ]
      },
      {
        section: 'Sensory Receptors, Transduction & Adaptation',
        points: [
          'Receptors **transduce** stimuli into neural signals; each class is tuned (photo-, mechano-, chemo-, thermo-, nociceptors).',
          'A stimulus encodes **type, intensity, timing, and location**.',
          '**Adaptation** = down-regulation to a constant stimulus (protective); **amplification** = up-regulation of a weak signal.'
        ]
      },
      {
        section: 'The Visual System',
        points: [
          'Path: **cornea → pupil → lens → vitreous → retina**; **fovea** is all cones (sharpest vision); **blind spot** has no receptors.',
          '**Rods** (~120M, B&W, peripheral, sensitive, slow) vs. **cones** (~6M, color, foveal, fast).',
          '**Phototransduction:** light → retinal isomerizes → rhodopsin → transducin → PDE → cGMP falls → Na⁺ channels close → rod hyperpolarizes (turns OFF).',
          '**Right visual field → left hemisphere** (and vice versa) after the optic chiasm; **parallel processing** of color, form (**parvo**), and motion (**magno**).'
        ]
      },
      {
        section: 'The Auditory & Vestibular Systems',
        points: [
          'Path: **pinna → canal → eardrum → malleus/incus/stapes → oval window → cochlea → round window**.',
          '**Hair cells** transduce: bending opens **K⁺** channels (tip links) → **Ca²⁺** influx → spiral ganglion → auditory nerve.',
          '**Tonotopy:** cochlear **base = high** frequency, **apex = low**; humans hear ~**20–20,000 Hz**.',
          '**Vestibular:** semicircular canals (**rotation**, endolymph) + utricle/saccule (**linear acceleration & head position**, otoliths).'
        ]
      },
      {
        section: 'Smell, Taste, Touch & Proprioception',
        points: [
          '**Smell:** odorants → GPCRs in olfactory epithelium → converge on a **glomerulus** → mitral/tufted cells → brain.',
          '**Pheromones** via the **vomeronasal organ**; routes to the **amygdala** in animals (humans lack a functional accessory olfactory bulb).',
          '**Taste:** sweet/umami/bitter = GPCRs; salty/sour = ion channels; **labeled-lines model**.',
          '**Somatosensation** = thermo-/mechano-/noci-/proprioception; **homunculus** maps the body onto the somatosensory cortex.',
          '**Proprioception** (position, includes balance) vs. **kinesthesia** (movement, no balance).'
        ]
      },
      {
        section: 'Processing, Gestalt & Perceptual Cues',
        points: [
          '**Bottom-up** = stimulus-driven; **top-down** = knowledge/expectation-driven.',
          '**Gestalt:** similarity, proximity, continuity, closure, prägnanz.',
          '**Binocular cues** (retinal disparity, convergence) need both eyes; **monocular cues** (relative size, interposition, relative height, motion parallax, shading) need one.',
          '**Constancy:** size, shape, and color are perceived as stable despite a changing retinal image.'
        ]
      }
    ],
    mnemonics: [
      '**Gestalt principles — "Some People Continue Closing Patterns":** **S**imilarity · **P**roximity · **C**ontinuity · **C**losure · **P**rägnanz.',
      '**Binocular = "Bi = 2 eyes":** only **retinal Disparity** and **Convergence** need both eyes; every other depth cue is **monocular**.',
      '**Weber\'s law = "the richer you are, the bigger the raise you notice."** The constant is the *fraction* ($\\Delta I / I = k$), not the absolute change.',
      '**Light turns a rod OFF.** In the dark a rod is depolarized and releasing glutamate; light triggers the cascade that hyperpolarizes it.',
      '**Parvo = small & Precise (form/spatial detail); Magno = magnitude & Movement (motion, no color).**',
      '**Tonotopy — "high at the base, low at the apex":** the stiff cochlear base catches high frequencies, the floppy apex low frequencies.',
      '**Proprioception = POSition (includes balance); Kinesthesia = KINetic motion (no balance).**',
      '**SDT outcomes:** **Hit / Miss** when the signal is present; **False alarm / Correct rejection** when it is absent — $d\'$ is your *sensitivity*, $c$ your *bias*.',
      '**Adaptation = "you stop feeling your socks":** a constant stimulus fades from awareness even though the receptor is still being stimulated.'
    ],
    keyConcepts: [
      '**Sensation vs. perception:** sensation is bottom-up receptor transduction; perception is the brain organizing and interpreting it — and perception blends bottom-up data with top-down expectation.',
      '**Thresholds are probabilistic (50% detection), and the JND scales with the baseline** ($\\Delta I / I = k$) — Weber\'s law. Signal detection theory adds a decision criterion separating *sensitivity* ($d\'$) from *response bias* ($c$).',
      '**Phototransduction is counterintuitive:** light *hyperpolarizes* (turns off) the photoreceptor by lowering cGMP and closing Na⁺ channels; this loss of glutamate then activates downstream bipolar and ganglion cells.',
      '**Both hearing pitch and balance rely on hair cells in the inner ear:** the cochlea maps frequency by place (tonotopy), while the semicircular canals and otolithic organs sense rotation and linear acceleration.',
      '**Depth perception combines binocular cues (retinal disparity, convergence) with monocular cues,** and perceptual constancies keep objects stable in size, shape, and color despite a shifting retinal image.'
    ],
    equations: [
      { name: 'Weber\'s law', formula: '\\dfrac{\\Delta I}{I} = k', note: 'The just-noticeable difference ($\\Delta I$) is a constant fraction ($k$, the Weber fraction) of the baseline stimulus intensity ($I$). Rearranged: $\\Delta I = kI$.' }
    ]
  },

  questions: []
};
