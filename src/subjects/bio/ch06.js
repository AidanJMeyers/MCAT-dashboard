// Chapter 6 — The Respiratory System. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch06.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 6,
  title: 'The Respiratory System',
  subtitle: 'Anatomy & mechanism of breathing · functions of the respiratory system (gas exchange, thermoregulation, immunity, pH)',

  blocks: [
    /* ───────────── 6.1 Anatomy and Mechanism of Breathing ───────────── */
    {
      id: 's1', num: '6.1', title: 'Anatomy and Mechanism of Breathing',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 6.1 — Anatomy of the Respiratory System (nasal cavity → pharynx → larynx → trachea → bronchi → lungs).' }],
      recap: `
- **Airway path:** **nares → nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.** Air is filtered, warmed, and humidified on the way down.
- **Alveoli** are one-cell-thick gas-exchange sacs (~**100 m²** total); **surfactant** lowers surface tension to keep them from collapsing.
- **Inhalation is active:** **diaphragm + external intercostals** expand the chest → intrapleural volume ↑ → pressure ↓ (**Boyle's law**) → **negative-pressure breathing** pulls air in.
- **Exhalation is usually passive** (elastic recoil); forced exhalation adds **internal intercostals + abdominals**.
- **Lung volumes:** $VC = IRV + ERV + TV$ and $TLC = VC + RV$. A **spirometer** measures everything *except* **residual volume**.
- The **ventilation center** (medulla) drives breathing via **chemoreceptors** that mostly sense **rising CO₂** (hypercapnia).
`,
      detail: `
#### Anatomy
The lungs sit in the **thoracic cavity**, a structure built specifically to perform breathing. Gas exchange itself occurs deep in the lungs, but air takes a long, filtered journey to get there.

##### The airway path — from nares to alveoli
Air enters through the external **nares** (nostrils) and crosses the **nasal cavity**, where **mucous membranes** and nasal hairs (**vibrissae**) filter it. From there it threads through the upper airway and into the lungs.

| # | Structure | What it does (MCAT essentials) |
|---|---|---|
| 1 | **Nares / nasal cavity** | Entry point; **vibrissae** + mucus filter, while the vasculature **warms & humidifies** incoming air |
| 2 | **Pharynx** | **Shared** pathway for air (→ lungs) and food (→ esophagus) |
| 3 | **Larynx** | **Air only**; holds two **vocal cords** (skeletal muscle + cartilage). Its opening, the **glottis**, is capped by the **epiglottis** during swallowing |
| 4 | **Trachea** | Cartilaginous tube; **ciliated epithelium** traps debris that slipped past the nose/mouth |
| 5 | **Bronchi** | Two **mainstem bronchi** (one per lung), also ciliated |
| 6 | **Bronchioles** | Bronchi branch into progressively smaller tubes |
| 7 | **Alveoli** | Tiny balloon-like sacs; **site of gas exchange**, wrapped in capillaries |

:::keyconcept
The nose and mouth do more than admit air: they **remove dirt and particulate matter** and **warm and humidify** the air before it ever reaches the delicate alveoli.
:::

Each **alveolus** is coated with **surfactant**, a detergent that lowers surface tension and prevents the sac from collapsing on itself. A capillary network surrounds every alveolus. Branching down to this minute scale gives a colossal gas-exchange surface area — roughly **100 m²** total.

:::realworld
The **left lung** has a small indentation (the **cardiac notch**) and only **two lobes**, while the **right lung** has **three** — because the **heart** occupies space on the left side of the thoracic cavity.
:::

##### The pleurae
The lungs are wrapped in membranes called **pleurae**, which form a closed sac the lung expands into.

![Figure 6.2 — Lung membranes: visceral and parietal pleurae and the intrapleural space.](${fig(0, 1).src})

| Layer | Location |
|---|---|
| **Visceral pleura** | Surface **adjacent to the lung** itself |
| **Parietal pleura** | **Outer** layer, associated with the **chest wall** |
| **Intrapleural space** | Between the two layers; holds a thin film of **pleural fluid** that lubricates the surfaces |

Think of pushing your **fist** (the lung) into a partly deflated **balloon** (both pleural layers): the side touching your fist is the *visceral* pleura, the outer wrap is the *parietal* pleura. The **pressure differentials** built across this sac are what ultimately drive breathing.

The lungs **do not fill passively** — they need skeletal muscle to generate the negative pressure for expansion. The chief muscle is the **diaphragm**, a thin sheet dividing the thoracic cavity from the abdominal cavity. The diaphragm is under **somatic control** even though breathing overall is **autonomic**. The chest wall, back, and neck muscles can pitch in during **labored** breathing.

:::realworld
The intrapleural space is a **potential space** — normally empty/collapsed. In a **pleural effusion**, fluid fills it; in a **pneumothorax**, air does. Either can cause **atelectasis** (lung collapse).
:::

#### Breathing
Ventilation is grounded in physics: we exploit **pressure differentials between the intrapleural space and the lungs** to move air.

![Figure 6.3 — Stages of ventilation: the diaphragm contracts during inhalation and relaxes during exhalation.](${fig(0, 2).src})

##### Inhalation (active)
1. The **diaphragm** flattens and the **external intercostal muscles** pull the rib cage **up and out** → **intrathoracic volume increases**.
2. The **intrapleural space** abuts the chest wall, so its volume rises first → by **Boyle's law**, its **pressure drops**.
3. Lungs (still near atmospheric pressure) now sit at higher pressure than the intrapleural space, so they **expand** into it → **lung pressure falls below atmospheric**.
4. Air is **sucked in** from the higher-pressure outside world. This is **negative-pressure breathing**.

:::bridge
**Boyle's law:** at constant temperature, pressure and volume are inversely related, $P_1V_1 = P_2V_2$. Expanding the chest drops lung pressure, and air flows in — the physical basis of negative-pressure breathing.
:::

##### Exhalation (usually passive)
- At rest, simply **relaxing the diaphragm and external intercostals** shrinks the chest cavity → intrapleural pressure **rises** (Boyle's law again) → now higher than lung pressure → air is **pushed out**.
- **Elastic recoil** of the lungs plus alveolar **surface tension** accentuates this passive collapse; **surfactant** and the pleural attachment to the chest wall keep the alveoli from collapsing *completely*.
- During **active/forced** exhalation, the **internal intercostal muscles** and **abdominal muscles** contract — opposing the external intercostals, pulling the rib cage **down**, and forcing volume out faster.

| | **Inhalation** | **Passive exhalation** | **Active exhalation** |
|---|---|---|---|
| Energy | **Active** (muscle work) | **Passive** (elastic recoil) | **Active** (muscle work) |
| Diaphragm | **Contracts** (flattens) | Relaxes | Relaxes |
| External intercostals | **Contract** (ribs up/out) | Relax | Relax |
| Internal intercostals / abdominals | — | — | **Contract** (ribs down) |
| Intrathoracic volume | **↑** | ↓ | ↓↓ |
| Intrapleural pressure | **↓** | ↑ | ↑↑ |
| Net airflow | **In** | Out | Out |

:::keyconcept
**Inhalation always costs energy; exhalation usually doesn't.** Muscle contraction is required to create the negative pressure of inspiration. Calm expiration is **entirely elastic recoil**; only during active states do muscles force air out to speed ventilation.
:::

:::realworld
**Emphysema** destroys the **alveolar walls**, reducing **elastic recoil**. Without recoil, **exhalation** becomes extremely difficult. Most cases are caused by **cigarette smoking**.
:::

#### Lung Capacities and Volumes
A **spirometer** measures lung volumes — but it **cannot measure residual volume** (the air left after a complete exhale), because that air never leaves the lungs.

![Figure 6.4 — Lung volumes and capacities.](${fig(0, 3).src})

| Term | Symbol | Definition |
|---|---|---|
| **Tidal volume** | **TV** | Air inhaled or exhaled in a **normal** breath |
| **Inspiratory reserve volume** | **IRV** | **Extra** air that can be **forcibly inhaled** *after* a normal inhalation |
| **Expiratory reserve volume** | **ERV** | **Extra** air that can be **forcibly exhaled** *after* a normal exhalation |
| **Residual volume** | **RV** | Air **remaining** after a complete exhalation (cannot be exhaled; *not* measurable by spirometry) |
| **Vital capacity** | **VC** | Difference between min and max lung volume; $VC = IRV + ERV + TV$ |
| **Total lung capacity** | **TLC** | Max air on a full inhale (~**6–7 L**); $TLC = VC + RV$ |

The two key relationships to memorize:

$$VC = IRV + ERV + TV$$

$$TLC = VC + RV$$

:::mnemonic
**"Volumes are simple; Capacities are sums."** A **capacity** is two or more **volumes** added together — so **VC** and **TLC** are capacities, while **TV, IRV, ERV, RV** are the four indivisible volumes.

**To remember $TLC = VC + RV$:** "**T**otal **L**ung **C**apacity = the part you can move (**V**ital **C**apacity) + the part stuck inside (**R**esidual **V**olume)." Because **spirometers can't see RV**, they also **can't report true TLC**.
:::

#### Regulation of Breathing
Breathing is driven by the **ventilation center** — rhythmically firing neurons in the **medulla oblongata** that trigger respiratory-muscle contraction. These neurons hold **chemoreceptors** that are **primarily sensitive to CO₂**.

- **Rising CO₂** (**hypercarbia** / **hypercapnia**) → respiratory **rate increases** → more CO₂ exhaled → blood CO₂ falls. *This is the main driver.*
- **Low O₂** (**hypoxemia**) also raises ventilation, but only becomes significant during *severe* oxygen deprivation.
- We can **consciously** override breathing (via the cerebrum) only to a limit: prolonged **hypoventilation** lets CO₂ climb until the medulla **overrides** and restarts breathing; prolonged **hyperventilation** blows off so much CO₂ that ventilation is **inhibited**.

:::mnemonic
**"You breathe to dump CO₂, not to chase O₂."** The primary stimulus to breathe is **rising carbon dioxide**, not falling oxygen. Oxygen only takes over the controls in serious **hypoxemia**.
:::
`
    },

    /* ─────────────── 6.2 Functions of the Respiratory System ─────────────── */
    {
      id: 's2', num: '6.2', title: 'Functions of the Respiratory System',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 6.5 — Gas exchange in the alveolus: deoxygenated blood arrives via the pulmonary arteriole and leaves oxygenated via the pulmonary venule.' }],
      recap: `
- The lungs do **four** jobs: **gas exchange, thermoregulation, immune defense, and pH control.**
- **Gas exchange** = **passive diffusion** down partial-pressure gradients across **one-cell-thick** alveolar walls — **no energy** required. Deoxygenated blood in via **pulmonary arteries**; oxygenated blood out via **pulmonary veins**.
- **Thermoregulation:** the highly vascular tract dissipates/conserves heat via **vasodilation / vasoconstriction** (think dogs **panting**).
- **Immune defense:** **vibrissae → mucus → mucociliary escalator**, plus **lysozyme**, **macrophages**, **IgA**, and **mast cells** (allergy).
- **pH control** via the **bicarbonate buffer system:** breathe **faster** → blow off CO₂ → less acid; breathe **slower** → trap CO₂ → more acid.
`,
      detail: `
#### The lungs are more than "bags of air"
No organ system works alone. Beyond gas exchange, the lung's enormous vascular surface supports **thermoregulation**, its interface with the outside world demands **immune defense**, and its control of CO₂ lets it regulate **blood pH**. This ties the respiratory system to the **cardiovascular, immune, renal, and nervous** systems.

#### Gas Exchange
Gas exchange is the lung's primary function. Every alveolus is wrapped in capillaries:

- **Pulmonary arteries** (from the **right ventricle**) bring **deoxygenated**, high-CO₂ blood to the alveoli.
- Across **one-cell-thick** alveolar walls, **O₂ diffuses in** and **CO₂ diffuses out**.
- **Pulmonary veins** return **oxygenated** blood to the **left atrium**.

The driving force is purely the **partial-pressure gradient**: arriving blood is **low in O₂, high in CO₂**, so each gas slides down its own gradient. Because the gradient already exists, **no energy** is needed for transfer.

:::keyconcept
**O₂** flows down its partial-pressure gradient from **alveoli → capillaries**, where it binds **hemoglobin**. Simultaneously **CO₂** flows from **capillaries → alveoli** to be exhaled.
:::

:::realworld
Diffusion crosses a very thin alveolar–capillary membrane. **Fibrosis** (scarring) thickens it; other diseases limit **ventilation** (airflow) or **perfusion** (blood flow). All can produce **hypoxia** (low blood O₂) by different routes.
:::

##### Adapting to high altitude
At altitude (less available O₂) the body: (1) **breathes faster** to fend off hypoxia; (2) **shifts hemoglobin binding** to unload more O₂ at the tissues; (3) **short term**, makes more **red blood cells**; (4) **long term**, grows more **blood vessels** (**vascularization**).

#### Thermoregulation
The same vast, **highly vascular** surface that maximizes gas exchange can move heat. Heat transfer is tuned by:

- **Vasodilation** — capillaries widen → more blood flows → more thermal energy **dissipated**.
- **Vasoconstriction** — capillaries narrow → less blood flows → thermal energy **conserved**.

**Nasal and tracheal** capillaries are the respiratory players, though humans rely mostly on **skin capillaries + sweat glands** (and **shivering** to generate heat). The tract can also shed heat by **evaporating** water in mucus — the mechanism dogs exploit by **panting**.

#### Immune Function
The lung's huge interface with the outside world is a liability: bacteria, viruses, and fungi can infect it or slip into the bloodstream through the alveolar membranes. Layered defenses guard the airway:

| Defense | Location | Mechanism |
|---|---|---|
| **Vibrissae** (nasal hairs) | Nasal cavity | Physically **trap** particulate / infectious matter |
| **Lysozyme** | Nasal cavity (also tears & saliva) | Enzyme that **attacks peptidoglycan** walls of **gram-positive** bacteria |
| **Mucus + cilia (mucociliary escalator)** | Internal airways | Mucus traps invaders; cilia **sweep it up** to the oral cavity to be expelled or swallowed |
| **Macrophages** | Alveoli | **Engulf and digest** pathogens; **signal** the immune system |
| **IgA antibodies** | Mucosal surfaces | Neutralize pathogens contacting the mucosa |
| **Mast cells** | Lungs | Surface antibodies trigger release of **inflammatory chemicals** → immune response (and **allergic reactions**) |

:::realworld
**Atypical ("walking") pneumonia** is often caused by *Mycoplasma pneumoniae*, which **paralyzes the cilia** and damages respiratory epithelium. With the **mucociliary escalator** down, mucus can't clear — producing a prolonged cough that lasts until the cilia recover.
:::

:::mnemonic
**Climb the mucociliary escalator from outside in:** **V**ibrissae catch the big stuff → **L**ysozyme dissolves gram-positive walls → **M**ucus + cilia sweep the rest up and out → **M**acrophages eat what's left → **IgA** and **mast cells** mount the antibody/allergy response. ("**Very Little Mucus Makes It Möbius**" — V-L-M-M-I-M.)
:::

#### Control of pH
The lungs adjust blood pH fast by controlling CO₂ through the **bicarbonate buffer system**:

$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$

This is an **MCAT favorite** — a chance to test **Le Châtelier's principle** alongside physiology. The body holds pH between **7.35 and 7.45**.

##### When blood is too acidic (acidemia, pH ↓)
- **Acid-sensing chemoreceptors** just outside the blood–brain barrier signal the brain to **raise respiratory rate**.
- Excess **H⁺** also shifts the buffer **right→** then generates more **CO₂**, which the medullary centers detect and respond to by raising rate further.
- Breathing **faster blows off CO₂**, pulling the equation **←left**, which lets **H⁺ drop back to normal**.

##### When blood is too basic (alkalemia, pH ↑)
- The body **slows** the respiratory rate → **CO₂ is retained** → buffer shifts **right→** → more **H⁺ and HCO₃⁻** generated → **pH falls** back toward normal.

| Disturbance | Respiratory response | CO₂ effect | Buffer shift | pH effect |
|---|---|---|---|---|
| **Acidemia** (pH ↓) | Rate **increases** | Blown off | **← left** | H⁺ ↓ → pH **rises** |
| **Alkalemia** (pH ↑) | Rate **decreases** | Retained | **right →** | H⁺ ↑ → pH **falls** |

:::bridge
Both **H⁺** and **HCO₃⁻** appear on the right, so why doesn't adding both leave pH unchanged? Because **H⁺ is a strong acid** while **HCO₃⁻ is a weak base** — as in a **titration** (*MCAT General Chemistry Review*, Ch. 10), the net effect pushes pH toward the acidic side.
:::

:::realworld
**Metabolic acidosis** (excess acid from any cause besides hypoventilation) — e.g., **lactic acid** from anaerobic respiration, **ketoacids** in untreated type 1 diabetes, or organic acids from **methanol/formaldehyde** poisoning — is commonly compensated by **increasing respiratory rate** to blow off CO₂.
:::

:::keyconcept
The lungs give **immediate, short-term** pH control by adjusting CO₂. The **kidneys** provide **slow, long-term** compensation by modulating acid/base handling in the **nephron** (*MCAT Biology Review*, Ch. 10). This equation is testable in **both** the *Biological/Biochemical* and *Chemical/Physical* sections.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**Airway path (top → bottom):** "**N**aughty **N**urses **P**robe **L**ungs, **T**hen **B**ronchi **B**ranch to **A**lveoli" → **N**ares · **N**asal cavity · **P**harynx · **L**arynx · **T**rachea · **B**ronchi · **B**ronchioles · **A**lveoli.',
      '**Pharynx vs. larynx:** the **phar**ynx is the **shared** food+air **fork**; the **lar**ynx is **air-only** and holds the **voca**l cords. The **epiglottis** flaps over the **glottis** so food skips the airway.',
      '**Volumes vs. capacities:** a **capacity** is a **sum of volumes**. The four base volumes are **TV, IRV, ERV, RV**; the capacities are **VC = IRV + ERV + TV** and **TLC = VC + RV**.',
      '**Spirometer blind spot:** it measures everything **except residual volume** (that air never leaves), so it also can\'t give you true **TLC**.',
      '**Inhale = work, exhale = free:** **I**nhalation is **active** (diaphragm + **external** intercostals contract); calm exhalation is passive recoil; forced exhalation adds **internal** intercostals + abdominals.',
      '**You breathe to dump CO₂, not to chase O₂:** the medullary **ventilation center** is driven mainly by **rising CO₂** (hypercapnia); O₂ only takes over in severe **hypoxemia**.',
      '**Buffer direction:** breathe **F**aster → blow oFF CO₂ → shift **left** → **less acid** (treats acidemia). Breathe **S**lower → **S**tore CO₂ → shift **right** → **more acid** (treats alkalemia).',
      '**Pulmonary plumbing is "backwards":** pulmonary **arteries** carry **deoxygenated** blood (from the right ventricle), pulmonary **veins** carry **oxygenated** blood (to the left atrium).'
    ],
    keyConcepts: [
      '**Negative-pressure breathing is all Boyle\'s law:** expand the chest → intrapleural volume ↑ → pressure ↓ → lungs expand → lung pressure drops below atmospheric → air rushes in.',
      '**Surfactant** lowers alveolar surface tension to prevent collapse; its absence (e.g., in premature infants) causes respiratory distress and atelectasis.',
      '**Gas exchange is passive diffusion** down partial-pressure gradients across one-cell-thick alveolar walls — requiring no ATP and no active transporters.',
      '**One surface, four functions:** the lung\'s vast, thin, vascular alveolar interface enables gas exchange, thermoregulation, immune surveillance, and rapid pH buffering simultaneously.',
      '**Lung pH control is fast but partial:** CO₂ adjustments shift the bicarbonate buffer within minutes, while the kidneys handle slow, long-term acid–base compensation.'
    ],
    equations: [
      { name: 'Vital capacity', tex: 'VC = IRV + ERV + TV', note: 'The total air you can move — the sum of the three "usable" volumes. Measurable by spirometry.' },
      { name: 'Total lung capacity', tex: 'TLC = VC + RV', note: 'All the air the lungs hold at full inflation (~6–7 L). Includes residual volume, so a spirometer cannot measure true TLC.' },
      { name: 'Bicarbonate buffer system', tex: 'CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-', note: 'Lungs shift this equilibrium by adjusting CO₂: faster breathing → left shift (less H⁺); slower breathing → right shift (more H⁺). An MCAT favorite via Le Châtelier.' },
      { name: "Boyle's law", tex: 'P_1 V_1 = P_2 V_2', note: 'At constant temperature, pressure and volume are inversely related — the physical basis of negative-pressure breathing.' }
    ]
  },

  questions: raw.questions
};
