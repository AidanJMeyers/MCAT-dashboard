// Chapter 7 — The Cardiovascular System. Authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch07.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt }
const goals = (si) => S[si].goals || [];

export default {
  id: 7,
  title: 'The Cardiovascular System',
  subtitle: 'Anatomy of the cardiovascular system · blood · physiology of the cardiovascular system',

  blocks: [
    /* ───────────── 7.1 Anatomy of the Cardiovascular System ───────────── */
    {
      id: 's1', num: '7.1', title: 'Anatomy of the Cardiovascular System',
      goals: goals(0),
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 7.1 — Anatomy of the Cardiovascular System: two pumps in series (pulmonary + systemic).' }],
      recap: `
- The system = a four-chambered **heart**, **blood vessels**, and **blood**. The heart is **two pumps in series**: the **right heart** drives **pulmonary circulation** (to the lungs), the **left heart** drives **systemic circulation** (to the body).
- **Atria** (thin) receive blood; **ventricles** (thick) pump it out. The **left ventricle is more muscular** because it pumps against the high-resistance systemic circuit.
- **Valves:** AV valves = **tricuspid** (right) & **mitral/bicuspid** (left); semilunar valves = **pulmonary** (right) & **aortic** (left). All prevent **backflow**.
- **Conduction (myogenic):** **SA node → AV node → bundle of His → Purkinje fibers.** SA node fires **60–100/min** with no neural input.
- **Vessels (away→back):** **arteries → arterioles → capillaries → venules → veins.** Arteries = muscular/elastic; capillaries = one cell thick; veins = thin, valved, hold ~¾ of blood volume.
- **Cardiac output:** $CO = HR \\times SV$ (~5 L/min). Sympathetic ↑ rate & contractility; parasympathetic (**vagus nerve**) ↓ rate.
`,
      detail: `
#### Overview: two pumps, two circulations
The **cardiovascular system** consists of a muscular four-chambered **heart**, **blood vessels**, and **blood**. We speak of the heart as one pump, but it is really **two pumps supporting two circulations in series**:

- **Right heart** → accepts **deoxygenated** blood from the body, sends it to the lungs via the **pulmonary arteries** (**pulmonary circulation**).
- **Left heart** → receives **oxygenated** blood from the lungs via the **pulmonary veins**, forces it to the body through the **aorta** (**systemic circulation**).

Because the two pumps are in **series**, the volume passing through each per unit time (**cardiac output**) must be identical — just like current through resistors in series.

#### The heart: chambers and valves
Each side has an **atrium** and a **ventricle**:

- **Atria** — thin-walled receiving chambers. The right atrium fills from the **venae cavae** (deoxygenated); the left atrium fills from the **pulmonary veins** (oxygenated). Atria contract to push blood into the ventricles.
- **Ventricles** — far more muscular; they generate the pressure to eject blood to the lungs (right) and body (left).

Valves enforce one-way flow and let the ventricles build pressure without backflow:

| Valve | Type | Location | Leaflets |
|---|---|---|---|
| **Tricuspid** | Atrioventricular (AV) | Right atrium → right ventricle | 3 |
| **Mitral (bicuspid)** | Atrioventricular (AV) | Left atrium → left ventricle | 2 |
| **Pulmonary** | Semilunar | Right ventricle → pulmonary arteries | 3 |
| **Aortic** | Semilunar | Left ventricle → aorta | 3 |

:::mnemonic
**Atrioventricular valves — "LAB RAT":** **L**eft **A**trium = **B**icuspid · **R**ight **A**trium = **T**ricuspid.
:::

:::keyconcept
**Structure follows function.** Blood leaving the left heart must reach as far as the feet, so the **left ventricle is much more muscular** than the right. If the right heart pumped as forcefully, it would **damage the lungs** — the low-resistance pulmonary circuit needs only a gentle pump.
:::

#### Electrical conduction in the heart

![Figure 7.2 — Electrical conduction system of the heart](${fig(0, 1).src})

A coordinated heartbeat originates in **four electrically excitable structures**, in order of excitation:

1. **SA (sinoatrial) node** — pacemaker in the wall of the **right atrium**; generates **60–100 signals/min** with no neural input. The depolarization wave makes both atria contract simultaneously.
2. **AV (atrioventricular) node** — sits at the atria–ventricle junction; **delays** the signal so the ventricles can finish filling.
3. **Bundle of His (AV bundle)** and its branches — embedded in the **interventricular septum**.
4. **Purkinje fibers** — distribute the impulse through ventricular muscle.

The muscle cells are joined by **intercalated discs** (packed with **gap junctions**) that link adjacent cytoplasm, allowing coordinated ventricular contraction. Most ventricular filling is **passive**; atrial **systole** adds a final **atrial kick** (~5–30% of cardiac output).

:::keyconcept
Cardiac muscle has **myogenic activity** — it contracts without neural input. The SA node fires **60–100 bpm even if all innervation is cut**. Neural input only **speeds up or slows** the rate; it does not generate it.
:::

The system is under **autonomic control**: **sympathetic** ("fight-or-flight") signals **speed the rate and increase contractility**, while **parasympathetic** signals via the **vagus nerve** **slow the rate**. Conditioned athletes may rest at 40–50 bpm; stress can push rate well above 100.

:::realworld
The heart's currents can be recorded on the skin as an **electrocardiogram (ECG/EKG)** — the *K* is the German spelling. Depolarization precedes contraction, so each spike comes just before a contractile event: the **P-wave** precedes atrial contraction, the **QRS complex** precedes ventricular contraction, and the **T-wave** is ventricular repolarization.

![EKG tracing — P wave, QRS complex, T wave](${fig(0, 2).src})
:::

#### Contraction: systole, diastole, and cardiac output

![Figure 7.3 — The cardiac cycle: pressures, volume, heart sounds, and EKG](${fig(0, 3).src})

Each heartbeat has two phases:

| Phase | Ventricles | AV valves | Semilunar valves | Pressure |
|---|---|---|---|---|
| **Systole** | **Contract** (eject blood) | **Closed** | Open | High |
| **Diastole** | **Relax** (fill) | Open | **Closed** | Low |

The **elasticity of the large arteries** maintains pressure during diastole — without it, **diastolic pressure would fall to zero**.

**Cardiac output (CO)** is the total blood volume pumped by a ventricle per minute — the product of **heart rate (HR)** and **stroke volume (SV)**:

$$CO = HR \\times SV$$

Typical human CO is **~5 L/min**; the autonomic system raises it (sympathetic) or lowers it (parasympathetic) as needed.

:::realworld
A **heart attack (myocardial infarction)** is loss of bloodflow through the **coronary arteries**, starving cardiac muscle of oxygen; anaerobic metabolism cannot keep up and tissue dies. A **β-blocker** blocks sympathetic stimulation → lower rate and contractility → less oxygen demand → less further damage.
:::

:::realworld
The **"lub-dub"** heard through a stethoscope are the **heart sounds**: **S₁** = the two AV valves closing at the **start of systole**; **S₂** = the two semilunar valves closing at the **end of systole**. Extra sounds (S₃, S₄) suggest stiff muscle or high pressure; **murmurs** arise from stiff/narrow or floppy/wide valves.
:::

:::realworld
There is a limit to useful heart rate: the heart fills during **diastole**, so the faster it beats, the less filling time. In **ventricular tachycardia (v-tach)**, the ventricles beat so fast they cannot fill and — paradoxically — stop pumping effective blood; pressures crash and death follows unless the rhythm is broken.
:::

#### The vasculature

![Figure 7.4 — Structure of blood vessels (cross-sections)](${fig(0, 4).src})

Blood travels **away from the heart in arteries → arterioles → capillaries**, then back via **venules → veins**. All vessels are lined with **endothelial cells**, which release vasodilators/vasoconstrictors, let white blood cells exit during inflammation, and trigger clotting when damaged.

:::mnemonic
**A**rteries carry blood **a**way from the heart.
:::

| Vessel | Direction | Wall | Smooth muscle | Valves | Notes |
|---|---|---|---|---|---|
| **Artery** | Away from heart | Thick, muscular, elastic | **A lot** | No | High resistance; elastic recoil propels blood. Mostly **oxygenated** (except pulmonary & umbilical arteries) |
| **Arteriole** | Away from heart | Muscular | Yes | No | Controls flow into capillary beds |
| **Capillary** | Arterioles → venules | **One endothelial cell thick** | No | No | RBCs pass **single file**; site of gas/solute exchange |
| **Venule** | Toward heart | Thin | A little | No | Connects capillaries to veins |
| **Vein** | Toward heart | Thin, inelastic | **A little** | **Yes** | Stretchy; holds **~¾ of total blood volume** |

##### Arteries
Highly **muscular and elastic**, creating tremendous **resistance** — a key reason the left heart must generate high pressure. After filling, **elastic recoil** maintains pressure and pushes blood forward.

##### Capillaries
A single endothelial layer so thin that RBCs pass **single file**. The thin wall allows easy **diffusion** of gases (O₂, CO₂), nutrients (glucose), wastes (ammonia, urea), and **hormones** — the interface between blood and tissue. Damaged capillaries leak blood into a closed space → a **bruise**.

##### Veins
Thin-walled and **inelastic**; carry **deoxygenated** blood (except pulmonary & umbilical veins). With little smooth muscle and little recoil, veins rely on external forces:

- **Valves** open with forward flow and **slam shut** against backflow (failure → **varicose veins**).
- **Skeletal-muscle pumps** squeeze veins to push blood up against gravity (like squeezing a toothpaste tube).

Venous pressure at the bottom of the leg column can exceed systolic pressure (>120 mmHg, up to ~200 mmHg).

:::realworld
Prolonged immobility (cramped flights, post-surgery) lets blood pool and coagulate, forming a **deep vein thrombosis (DVT)**. A dislodged clot travels through the right heart to the lungs → a life-threatening **pulmonary embolus**. Hospitals use rhythmic leg wraps plus **heparin** or **warfarin** to prevent this.
:::

#### Circulation: tracing the path

![Figure 7.5 — Bloodflow through the heart](${fig(0, 5).src})

Circulation is, by definition, **circular**. Starting from venous return:

| Step | Structure | Blood |
|---|---|---|
| 1 | **Venae cavae** (SVC = above heart, IVC = below) → **right atrium** | Deoxygenated |
| 2 | Through **tricuspid valve** → **right ventricle** | Deoxygenated |
| 3 | Through **pulmonary valve** → **pulmonary arteries** → **lungs** | Deoxygenated |
| 4 | Gas exchange at alveolar capillaries; **pulmonary veins** → **left atrium** | Oxygenated |
| 5 | Through **mitral valve** → **left ventricle** | Oxygenated |
| 6 | Through **aortic valve** → **aorta** → arteries → arterioles → capillaries | Oxygenated |
| 7 | Capillary exchange → venules → veins → **SVC/IVC** → back to right atrium | Deoxygenated |

Shorthand: **RA → (tricuspid) → RV → (pulmonary) → lungs → LA → (mitral) → LV → (aortic) → aorta → body → RA.**

:::mnemonic
Valve order on the path: **"Try Pulling My Aorta"** → **Tr**icuspid · **P**ulmonary · **M**itral · **A**ortic, in the order blood hits them from the right atrium onward.
:::

:::realworld
**Mitral** is preferred over *bicuspid* in medicine (abbreviated **M**). The name comes from the **miter** — the pointed hat worn by bishops and the pope — which the valve's two leaflets resemble.
:::

##### Portal systems
Usually blood passes **one** capillary bed before returning to the heart. The **three portal systems** pass through **two beds in series**:

- **Hepatic portal system** — gut capillaries → **hepatic portal vein** → liver capillaries.
- **Hypophyseal portal system** — hypothalamus capillaries → anterior pituitary capillaries (delivers releasing hormones).
- **Renal portal system** — glomerulus → **efferent arteriole** → peritubular capillaries / **vasa recta** around the nephron.
`
    },

    /* ─────────────────────────── 7.2 Blood ─────────────────────────── */
    {
      id: 's2', num: '7.2', title: 'Blood',
      goals: goals(1),
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 7.6 — The composition of blood: ~55% plasma, ~45% cells.' }],
      recap: `
- By volume, blood is **~55% plasma** + **~45% cells**. **Plasma** = water + nutrients, salts, gases, hormones, blood proteins; remove clotting factors → **serum**.
- **Erythrocytes (RBCs):** **biconcave**, **no nucleus/mitochondria/organelles** (room for **hemoglobin**); ~250 M Hb/cell × 4 O₂ each ≈ **1 billion O₂/cell**. Rely on **glycolysis** only; live **~120 days**.
- **Leukocytes (WBCs):** **granulocytes** (neutrophils, eosinophils, basophils) + **agranulocytes** (lymphocytes, monocytes). **Lymphocytes** = specific immunity; **B-cells** (bone marrow) make antibodies, **T-cells** (thymus) kill infected cells. Monocytes → **macrophages**.
- **Thrombocytes (platelets):** cell fragments from **megakaryocytes**; drive clotting. All blood cells arise in **bone marrow** via **hematopoiesis** (driven by **erythropoietin**, **thrombopoietin**).
- **Blood typing:** **A & B alleles codominant**, **O recessive**; **Rh (D) dominant**. **O⁻ = universal donor**, **AB⁺ = universal recipient**.
`,
      detail: `
#### Composition
Spinning blood in a **centrifuge** separates it by density: **~55% liquid plasma**, **~45% cells**.

- **Plasma** — aqueous mixture of **nutrients, salts, respiratory gases, hormones, and blood proteins**. Remove the clotting factors and you get **serum**.
- **Cellular portion** — three categories: **erythrocytes**, **leukocytes**, and **platelets**, all derived from **hematopoietic stem cells** in the **bone marrow**.

:::realworld
**Serum** (clotting factors and fibrinogen removed) is preferred over plasma for many tests — antibody testing, blood typing — precisely because it lacks those proteins.
:::

#### Erythrocytes — red blood cells
The **erythrocyte (RBC)** is specialized for **oxygen transport**. Because O₂ is nonpolar and barely dissolves in cytoplasm, each RBC packs **~250 million hemoglobin** molecules, each binding **4 O₂** → **~1 billion O₂ molecules per cell**.

RBC modifications all serve oxygen delivery:

- **Biconcave shape** — squeezes through capillaries *and* increases surface area for gas exchange.
- **No nucleus, mitochondria, or organelles** at maturity — makes room for hemoglobin and prevents the cell from **consuming the O₂ it carries**.
- **Glycolysis only** — RBCs make ATP by glycolysis with **lactic acid** as byproduct (no oxidative phosphorylation).
- **No nucleus → cannot divide**; they live **~120 days**, then are phagocytized in the **liver and spleen**.

A **complete blood count** reports **hemoglobin** (g/dL) and **hematocrit** (% of blood that is RBCs). Normal hematocrit ≈ **41–53% (males)**, **36–46% (females)**.

:::keyconcept
RBCs are **anaerobic by design**: lacking mitochondria, they rely solely on **glycolysis**. This guarantees they deliver — rather than burn — the oxygen they carry.
:::

#### Leukocytes — white blood cells
**Leukocytes** are <1% of blood volume (~**4,500–11,000/µL**), rising sharply during infection. They defend against pathogens, foreign cells, and cancer. Two classes:

| Class | Cells | Granules? | Role |
|---|---|---|---|
| **Granulocytes** | **Neutrophils, eosinophils, basophils** | **Yes** (visible, exocytosed) | Inflammation, allergy, pus, killing bacteria & parasites |
| **Agranulocytes** | **Lymphocytes, monocytes** | No | Lymphocytes → **specific immunity**; monocytes → phagocytosis |

##### Lymphocytes and the specific immune response
**Lymphocytes** drive the body's targeted response and form a long-term **memory bank** (the basis of vaccination). Maturation site defines them:

- **B-cells** — mature in **bone marrow**; generate **antibodies**.
- **T-cells** — mature in the **thymus**; kill virally infected cells and activate other immune cells.

##### Monocytes → macrophages
**Monocytes** phagocytize foreign matter. Once they leave the blood and enter tissue, they become **macrophages**, with tissue-specific names:

| Location | Macrophage name |
|---|---|
| Central nervous system | **Microglia** |
| Skin | **Langerhans cells** |
| Bone | **Osteoclasts** |

:::mnemonic
Granulocytes — **"Never Eat Bananas"**: **N**eutrophils, **E**osinophils, **B**asophils.
:::

#### Thrombocytes — platelets and hematopoiesis

![Figure 7.7 — Hematopoiesis: one stem cell gives rise to all blood cells](${fig(1, 1).src})

**Thrombocytes (platelets)** are **cell fragments shed by megakaryocytes** in bone marrow (~150,000–400,000/µL); they drive **clotting**. All cellular blood elements arise via **hematopoiesis**, triggered by hormones and cytokines — most notably:

- **Erythropoietin** — from the **kidney**; stimulates **RBC** production.
- **Thrombopoietin** — from the **liver and kidney**; stimulates **platelet** production.

:::keyconcept
**Nuclei present vs. absent.** Only **leukocytes** (neutrophils, eosinophils, basophils, monocytes/macrophages, lymphocytes) contain nuclei. **Erythrocytes and platelets do not** — platelets aren't even whole cells.
:::

#### Blood antigens
RBCs express surface proteins called **antigens** — any target the immune system can react to. Two families matter for blood groups: the **ABO antigens** and the **Rh factor**.

##### ABO antigens
Three alleles; the **A and B alleles are codominant**, and the **O allele (i) is recessive**:

- **Type A** = $I^A I^A$ or $I^A i$
- **Type B** = $I^B I^B$ or $I^B i$
- **Type AB** = $I^A I^B$ (both expressed)
- **Type O** = $ii$ (neither expressed)

You make **antibodies against any antigen you lack**. So a type A person makes **anti-B** antibodies. **Type O** (no antigens) → **universal donor**; **type AB** (no antibodies) → **universal recipient**.

| Blood Type | Genotype(s) | Antigens | Antibodies | Can Donate to… | Can Receive from… |
|---|---|---|---|---|---|
| **A** | $I^A I^A$, $I^A i$ | A | anti-B | A, AB | A, O |
| **B** | $I^B I^B$, $I^B i$ | B | anti-A | B, AB | B, O |
| **AB** | $I^A I^B$ | A and B | none | AB only | A, B, AB, O **(universal recipient)** |
| **O** | $ii$ | none | anti-A and anti-B | A, B, AB, O **(universal donor)** | O only |

Only the **donor's RBC antigens** matter for transfusion, since packed red cells (not whole blood) are usually given.

:::expertise
You are **almost guaranteed** a blood-group question on Test Day. Master the rule: $I^A$ and $I^B$ are **codominant**, $i$ is **recessive**. Be fluent in both notations — $I^A, I^B, i$ **and** $A, B, O$.
:::

:::keyconcept
Antigens are the **stimulus for B-cells to make antibodies**. Once a B-cell meets its specific antigen, it becomes an antibody-producing factory. (Curiously, gut **E. coli** carry A/B-like proteins, which is why you have anti-A/anti-B antibodies *without* a prior transfusion.)
:::

:::realworld
The most common U.S. blood type is **O⁺**; the rarest is **AB⁻**.
:::

##### Rh factor
The **Rh factor** (named for rhesus monkeys) is another RBC surface protein. **Rh⁺/Rh⁻** refers to presence/absence of the **D allele**, shown as a superscript (e.g., **O⁺**, **AB⁻**). **Rh-positivity is autosomal dominant** — one D allele suffices.

Unlike ABO, you do **not** have anti-Rh antibodies until **exposed** to Rh⁺ blood.

:::realworld
Beyond A, B, and D, dozens of antigens (**C, E, Kell, Lewis, Duffy**…) can be matched. The more matched, the lower the risk of **hemolysis**.
:::

:::realworld
**Erythroblastosis fetalis:** an **Rh⁻ mother** exposed to her **Rh⁺ fetus's** blood at delivery becomes **sensitized**. The *first* baby is fine, but in a later Rh⁺ pregnancy maternal **anti-Rh IgG crosses the placenta** and hemolyzes fetal cells. **RhoGAM** (Rh-immunoglobulin) given during/after pregnancy prevents sensitization. ABO mismatch is less dangerous because anti-A/anti-B are **IgM**, which does not cross the placenta.
:::
`
    },

    /* ──────────── 7.3 Physiology of the Cardiovascular System ──────────── */
    {
      id: 's3', num: '7.3', title: 'Physiology of the Cardiovascular System',
      goals: goals(2),
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 7.10 — Shifts in the oxyhemoglobin dissociation curve (left = higher affinity, right = lower affinity).' }],
      recap: `
- **Blood pressure** = force/area on vessel walls (**sphygmomanometer**, gauge pressure). Normal **90/60–120/80**. Largest pressure **drop is across the arterioles**.
- **Ohm's-law analogy:** $\\Delta P = CO \\times TPR$. Arterioles are adjustable **resistors**; capillary beds in **parallel** (opening beds ↓ resistance).
- **Regulation:** **baroreceptors** & **chemoreceptors**. Low BP → **ADH** + **aldosterone**; high osmolarity → **ADH**; high BP → **ANP** (weak diuretic).
- **O₂** rides **hemoglobin** (4 cooperative subunits) → **sigmoidal** curve via **cooperative binding**. **CO₂** travels mostly as **bicarbonate** (made by **carbonic anhydrase**).
- **Bohr effect:** ↑CO₂, ↑[H⁺]/↓pH, ↑temp, ↑2,3-BPG → **right shift** (lower affinity, more unloading). **Fetal Hb (HbF)** is **left-shifted** (higher affinity than HbA).
- **Starling forces:** **hydrostatic** pushes fluid *out* (wins at arteriole end), **oncotic** pulls fluid *in* (wins at venule end); imbalance → **edema**.
- **Coagulation:** exposed **collagen + tissue factor** → cascade → **prothrombin → thrombin → fibrinogen → fibrin** net. **Plasmin** breaks clots down.
`,
      detail: `
#### Blood pressure

![Figure 7.8 — Mean arterial pressure at different locations](${fig(2, 0).src})

For the system to push blood forward, **blood pressure** must stay sufficiently high. It is the **force per unit area** on vessel walls, measured with a **sphygmomanometer** as **gauge pressure** (above atmospheric, 760 mmHg). Reported as **systolic/diastolic**; normal is **90/60 to 120/80**. Pressure drops gradually from arterial to venous side, with the **largest drop across the arterioles**.

:::keyconcept
The **largest pressure drop occurs across the arterioles** — critical, because the thin-walled **capillaries** downstream could not withstand full arterial pressure.
:::

##### Circulation as a circuit
Just as **Ohm's law** ($V = IR$) governs current, the pressure gradient drives cardiac output through vascular resistance:

$$\\Delta P = CO \\times TPR$$

where **ΔP** is the pressure differential, **CO** is cardiac output, and **TPR** is total peripheral (vascular) resistance. Resistance depends on **length** (longer vessel → more resistance) and **cross-sectional area** (wider → less resistance). Systemic capillary beds are in **parallel**, so **opening more beds lowers total resistance** (like adding parallel resistors) and tends to raise CO.

:::realworld
**Vital signs** = temperature, heart rate, respiratory rate, and blood pressure. High BP may signal hypertension, anxiety, catecholamine tumors, or stimulants; low BP may signal hemorrhage, heart attack, **sepsis**, or neurological damage.
:::

##### Pressure regulation
- **Baroreceptors** (stretch sensors in vessel walls): low BP → stimulate the **sympathetic** system → **vasoconstriction** → BP rises.
- **Chemoreceptors**: high blood **osmolarity** (dehydration) → release **ADH (vasopressin)** from the posterior pituitary → water reabsorption → ↑ volume and pressure.
- **Aldosterone** (renin–angiotensin–aldosterone system): low renal perfusion → ↑ Na⁺ (and water) reabsorption → ↑ volume and pressure.
- **Atrial natriuretic peptide (ANP)**: high BP → atrial cells release ANP → salt loss in the nephron (a **weak** natural diuretic).

The body has **many ways to raise BP, but few to lower it**.

#### Gas and solute exchange
At the capillaries, **concentration gradients** drive diffusion: O₂ and nutrients leave the blood; CO₂, H⁺, urea, and ammonia enter it; hormones are secreted in and diffuse out at target tissue.

##### Oxygen

![Figure 7.9 — The sigmoidal oxyhemoglobin dissociation curve](${fig(2, 1).src})

O₂ rides **hemoglobin** — four **cooperative subunits**, each with a **heme** group whose central **iron** binds O₂ (a redox event). Negligible O₂ dissolves in plasma. Oxygen status is read as **P_aO₂** (~70–100 mmHg, requires an arterial stick) or, more conveniently, **oxygen saturation** (finger probe; normally >97%).

**Cooperative binding:** the first O₂ shifts hemoglobin from **taut → relaxed**, raising affinity so subsequent O₂ bind more easily; losing one O₂ lowers affinity so the rest unload more easily. This positive-feedback behavior gives the classic **sigmoidal (S-shaped)** curve.

- **In the lungs** (~100 mmHg O₂): hemoglobin is **~100% saturated**.
- **At resting tissue** (~40 mmHg): **~80% saturated** → ~20% O₂ delivered.
- **At exercising tissue** (~20 mmHg): **~30% saturated** → ~70% O₂ delivered.

##### Carbon dioxide
CO₂ is also nonpolar and poorly soluble; only a little dissolves in plasma, and hemoglobin binds it weakly. The **vast majority travels as bicarbonate**. Inside the RBC, **carbonic anhydrase** catalyzes:

$$CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-$$

The soluble **H⁺** and **bicarbonate** ferry waste to the lungs, where the reaction reverses and CO₂ is exhaled. This links to pH and to the oxyhemoglobin curve.

##### Shifts in the curve — the Bohr effect

![Figure 7.10 — Right shift (lower affinity) unloads more oxygen to exercising muscle](${fig(2, 2).src})

Raising CO₂ pushes the bicarbonate reaction right → ↑[H⁺] (↓pH). Protons bind hemoglobin and **lower its O₂ affinity** — a **right shift**, the **Bohr effect**. Because these triggers accompany high metabolism, the right shift conveniently **unloads more O₂** right where tissue needs it.

| Shift | Affinity | Causes |
|---|---|---|
| **Right shift** (Bohr effect) | **Lower** (more unloading) | ↑ P_aCO₂ · ↑ [H⁺] / ↓ pH · ↑ temperature · ↑ **2,3-BPG** |
| **Left shift** | **Higher** (more loading) | ↓ P_aCO₂ · ↓ [H⁺] / ↑ pH · ↓ temperature · ↓ 2,3-BPG · **fetal hemoglobin (HbF)** |

:::mnemonic
**Causes of a RIGHT shift — "exercise is the RIGHT thing to do."** During exercise: ↑ P_aCO₂, ↑ [H⁺] (↓ pH), and ↑ temperature — all reduce affinity so muscle gets more oxygen.
:::

:::keyconcept
**Fetal hemoglobin (HbF)** has a **higher O₂ affinity** than adult hemoglobin (HbA) — a **left-shifted** curve. It must, in order to pull oxygen *off* maternal hemoglobin across the placenta.
:::

The **bicarbonate buffer system** links the respiratory and renal systems: **hyperventilation** blows off CO₂ → buffer shifts left → ↑ pH (**respiratory alkalosis**), which the kidney offsets by excreting bicarbonate. In **renal tubular acidosis type I**, failure to excrete acid causes **metabolic acidosis**, partly offset by faster breathing.

##### Nutrients, waste, and hormones
- **Carbohydrates and amino acids** → absorbed into small-intestine capillaries → **hepatic portal system**.
- **Fats** → absorbed into **lacteals**, packaged as **lipoproteins**, bypass the liver via the **thoracic duct**.
- **Wastes** (CO₂, ammonia, urea) → diffuse down gradients into blood → **kidney** for elimination.
- **Hormones** → secreted (usually by **exocytosis**) near their source; activate **cell-surface receptors** (peptide hormones) or **intracellular/intranuclear receptors** (steroid hormones).

##### Fluid balance — Starling forces

![Figure 7.11 — Starling forces at a capillary bed](${fig(2, 3).src})

Two opposing pressures govern fluid movement between blood and the **interstitium**:

| Pressure | Direction | Source | Behavior across the bed |
|---|---|---|---|
| **Hydrostatic pressure** | Pushes fluid **OUT** | Heart contraction + arterial elasticity | High at arteriole end, **drops** by venule end |
| **Osmotic (oncotic) pressure** | Pulls fluid **IN** | Plasma **proteins** | Stays roughly **constant** |

- **Arteriole end:** hydrostatic > oncotic → **net efflux** of water out of the vessel.
- **Venule end:** hydrostatic has dropped < oncotic → **net influx** back into the vessel.

:::keyconcept
**Hydrostatic pushes out** (depends on heart-generated BP); **oncotic pulls in** (depends on plasma proteins). Their balance — the **Starling forces** — keeps tissue fluid in check.
:::

Imbalance causes **edema** (excess interstitial fluid). Some interstitial fluid (**lymph**) is returned to circulation via the **thoracic duct**; blocked lymph nodes also cause edema. (You do *not* need the Starling equation — just the pressure logic.)

#### Coagulation

![Figure 7.12 — Thrombus (clot) formation: a fibrin net captures platelets and RBCs](${fig(2, 4).src})

When the **endothelium** is damaged, it exposes underlying **collagen** and **tissue factor**:

1. **Platelets** contact exposed **collagen**, sense injury, release their contents, and **aggregate**.
2. **Coagulation factors** (mostly from the **liver**) sense **tissue factor** and trigger a cascade.
3. Endpoint: **prothrombin → thrombin** (via **thromboplastin**); **thrombin** converts **fibrinogen → fibrin**.
4. **Fibrin** cross-links into a woven **net** that traps RBCs and platelets → a **stable clot** (a surface clot = a **scab**).

Later, the clot is dissolved by **plasmin**, generated from **plasminogen**.

:::mnemonic
Clotting endpoint chain — **"Pro-Thrombin Fights Fibrin":** **Pro**thrombin → **Thrombin** → **Fib**rinogen → **Fib**rin (the net). **Plasmin** later cuts it down.
:::

:::realworld
**Hemophilia** disrupts the clotting cascade, risking life-threatening bleeding from minor injuries. **Hemophilia A** is the most common form and, being **sex-linked**, far more common in males.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [],
    mnemonics: [
      '**AV valves — "LAB RAT":** **L**eft **A**trium = **B**icuspid; **R**ight **A**trium = **T**ricuspid.',
      '**Conduction order:** **S**A node → **A**V node → **B**undle of His → **P**urkinje fibers ("**S**ome **A**thletes **B**eat **P**ulses").',
      '**Valve order along the bloodflow path — "Try Pulling My Aorta":** **Tr**icuspid → **P**ulmonary → **M**itral → **A**ortic.',
      '**Granulocytes — "Never Eat Bananas":** **N**eutrophils, **E**osinophils, **B**asophils.',
      '**Blood donors/recipients:** **O⁻ = universal donor** (no antigens); **AB⁺ = universal recipient** (no antibodies).',
      '**Oxyhemoglobin RIGHT shift — "exercise is the RIGHT thing to do":** ↑ CO₂, ↑ [H⁺] (↓ pH), ↑ temperature, ↑ 2,3-BPG → lower affinity, more O₂ unloaded.',
      '**Starling forces:** **H**ydrostatic pushes **OUT** (wins at the arteriole end); **O**ncotic pulls back **IN** (wins at the venule end).',
      '**Clot chain — "Pro-Thrombin Fights Fibrin":** prothrombin → thrombin → fibrinogen → fibrin; **plasmin** dissolves it.'
    ],
    keyConcepts: [
      '**Two pumps in series:** the right heart serves low-resistance **pulmonary** circulation, the left heart serves high-resistance **systemic** circulation — which is why the **left ventricle is more muscular**. Equal cardiac output passes through both.',
      '**The heart is myogenic:** the SA node fires 60–100 bpm with no neural input; the autonomic system only modulates rate (sympathetic ↑, parasympathetic/vagus ↓) and contractility.',
      '**Cooperative binding** gives hemoglobin its sigmoidal curve; the **Bohr effect** (↑CO₂/↑H⁺/↑temp) right-shifts it to **unload O₂ at active tissue**, while **fetal HbF** is left-shifted to pull O₂ from the mother.',
      '**CO₂ is transported mainly as bicarbonate** via **carbonic anhydrase**, linking respiratory and renal control of blood pH.',
      '**Capillary fluid exchange is a tug-of-war:** hydrostatic pressure pushes fluid out at the arteriole end, oncotic (protein) pressure draws it back at the venule end; protein loss (e.g., albumin) drops oncotic pressure → **edema**.',
      '**Blood typing rule:** A & B antigens are **codominant**, O is **recessive**, Rh(D) is **dominant**; you make antibodies against any antigen you lack.'
    ],
    equations: [
      { name: 'Cardiac output', tex: 'CO = HR \\times SV', note: 'Total blood volume pumped by a ventricle per minute (~5 L/min) = heart rate × stroke volume.' },
      { name: 'Stroke volume', tex: 'SV = EDV - ESV', note: 'Volume ejected per beat = end-diastolic volume minus end-systolic volume.' },
      { name: 'Ohm\'s law for circulation', tex: '\\Delta P = CO \\times TPR', note: 'Pressure differential = cardiac output × total peripheral resistance (Equation 7.2; analogous to V = IR).' },
      { name: 'Bicarbonate buffer', tex: 'CO_2 + H_2O \\rightleftharpoons H_2CO_3 \\rightleftharpoons H^+ + HCO_3^-', note: 'Catalyzed by carbonic anhydrase; the main route of CO₂ transport and a key blood buffer.' }
    ]
  },

  questions: raw.questions
};
