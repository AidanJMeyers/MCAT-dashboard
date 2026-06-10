// Chapter 11 — Spectroscopy. Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch11.json (already-correct extraction);
// the recap/detail markdown, goals, tables, callouts, and keyReview are authored here.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 11,
  title: 'Spectroscopy',
  subtitle: 'Infrared (IR) spectroscopy · ultraviolet (UV–Vis) spectroscopy · nuclear magnetic resonance (NMR) spectroscopy',

  blocks: [
    /* ───────────────────── 11.1 Infrared Spectroscopy ───────────────────── */
    {
      id: 's1', num: '11.1', title: 'Infrared Spectroscopy',
      goals: [
        'Predict the IR peaks for common organic functional groups, including ketones, carboxylic acids, and alcohols',
        'Recall the conditions in which IR spectroscopy is generally used, and what it is used to measure'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 11.2 — IR spectrum of an aliphatic alcohol: a broad O–H peak near 3300 cm⁻¹ and sharper C–H peaks near 3000 cm⁻¹. Peaks read as valleys because the y-axis is percent transmittance.' }],
      recap: `
- **IR spectroscopy measures molecular vibrations** (bond **stretching, bending, twisting, folding**) → infers **functional groups**, not full structure.
- A bond is **IR-silent** unless its vibration **changes the dipole moment** (so $\\text{O}_2$, $\\text{Br}_2$, and symmetric stretches show nothing).
- Memorize **three peaks**: **O–H** broad ~3300 cm⁻¹ (carboxylic-acid O–H drops to ~3000), **N–H** sharp ~3300 cm⁻¹, **C=O** sharp ~1700–1750 cm⁻¹.
- Useful range is **~1400–4000 cm⁻¹**; everything below (1500–400 cm⁻¹) is the **fingerprint region** — out of scope for the MCAT.
- Plotted as **percent transmittance vs. wavenumber**, so absorptions appear as **downward valleys**.
`,
      detail: `
#### What IR spectroscopy measures
**Infrared (IR) spectroscopy** passes infrared light through a sample and measures **absorbance**. Absorbed photons promote the molecule into **excited vibrational states** — bonds **stretch, bend, twist, and fold**. By identifying which bonds are present, we **infer the functional groups** in the molecule.

- The full IR light range is **λ = 700 nm to 1 mm**, but useful absorptions occur at **2500–25,000 nm**.
- IR spectra use **wavenumber** (an analog of frequency) instead of wavelength; the standard window is **4000–400 cm⁻¹**.

:::keyconcept
**Wavenumbers (cm⁻¹) are an analog of frequency.** Wavenumber is **directly proportional to frequency** and **inversely proportional to wavelength**: $\\tilde{\\nu} = \\dfrac{1}{\\lambda}$. Higher wavenumber = higher frequency = higher-energy vibration.
:::

#### The dipole-moment requirement
For a vibration to be recorded, **the bond's dipole moment must change**. Bonds between atoms of **equal electronegativity** or in **symmetric molecules** produce **no net dipole change** → **no absorption**.

- **IR-silent:** $\\text{O}_2$, $\\text{Br}_2$, and the symmetric triple bond of **acetylene** ($\\text{C}_2\\text{H}_2$).
- **IR-active:** **HCl** and **CO** (heteronuclear → dipole change on vibration).

:::keyconcept
**Symmetric stretches are invisible in IR** because they involve **no net change in dipole moment**. This is why homonuclear diatomics like $\\text{O}_2$ never give an IR signal.
:::

#### The fingerprint region
Complex vibrations of the molecule **as a whole** appear from **1500–400 cm⁻¹** — the **fingerprint region**. The pattern is unique to each compound (experts use it for ID), but it is **out of scope on the MCAT**. All testable information lives between **~1400 and 4000 cm⁻¹**.

#### Characteristic absorptions — the high-yield table
The MCAT expects only a handful of absorptions. Note the two trends: **bonds to hydrogen** sit at **high wavenumber**, and **adding bond order between carbons** (single → double → triple) **raises** the wavenumber.

| Functional group | Wavenumber (cm⁻¹) | Vibration |
|---|---|---|
| **Alkanes** | 2800–3000 / 1200 | C–H / C–C |
| **Alkenes** | 3080–3140 / 1645 | =C–H / C=C |
| **Alkynes** | 3300 / 2200 | ≡C–H / C≡C |
| **Aromatic** | 2900–3100 / 1475–1625 | C–H / C–C |
| **Alcohols** | 3100–3500 | **O–H (broad)** |
| **Ethers** | 1050–1150 | C–O |
| **Aldehydes** | 2700–2900 / 1700–1750 | (O)C–H / **C=O** |
| **Ketones** | 1700–1750 | **C=O** |
| **Carboxylic acids** | 1700–1750 / 2800–3200 | **C=O** / **O–H (broad)** |
| **Amines** | 3100–3500 | **N–H (sharp)** |

##### The three peaks you must know cold
- **O–H** — **broad** peak around **3300 cm⁻¹** for **alcohols**; shifts down to **~3000 cm⁻¹** for **carboxylic acids** (the carbonyl pulls electron density out of the O–H bond).
- **N–H** — same region as O–H (**~3300 cm⁻¹**) but **sharp**, not broad.
- **C=O** — **sharp**, **deep** peak around **1700–1750 cm⁻¹**.

:::expertise
IR is best for **identifying functional groups**. The three peaks worth memorizing:
- **O–H** — broad, ~3300 cm⁻¹
- **N–H** — sharp, ~3300 cm⁻¹
- **C=O** — sharp, ~1700–1750 cm⁻¹

Any other peak you need on Test Day will be given to you in a reference table.
:::

:::mnemonic
**Carbonyl ~1700 = "C=O at 17."** The C=O double bond sits near **1700–1750 cm⁻¹**, the lone heavy-hitter low in the testable range. Picture it: *"a sharp deep valley at seventeen-hundred is a carbonyl."* And **broad = O–H, sharp = N–H** ("**N**arrow for **N**–H").
:::

#### Reading the spectrum
IR spectra plot **percent transmittance** (light reaching the detector) **vs. wavenumber**.

:::keyconcept
Absorbance and percent transmittance are related by $A = 2 - \\log(\\%T)$. Because high absorption = low transmittance, **maximum absorptions appear as the bottoms of valleys** on an IR spectrum.
:::

The spectrum above (Figure 11.2) is an aliphatic alcohol: the **large broad peak at 3300 cm⁻¹** is the **hydroxyl O–H**, while the **sharper peak near 3000 cm⁻¹** is the alkane **C–H** bonds.

:::realworld
To watch the **oxidation of an alcohol to a carbonyl** in real time, follow the IR: the **broad O–H near 3300 cm⁻¹ disappears** and a **sharp C=O appears at ~1750 cm⁻¹**. That C=O appearance is the cleanest evidence the desired reaction occurred.
:::
`
    },

    /* ──────────────────── 11.2 Ultraviolet Spectroscopy ──────────────────── */
    {
      id: 's2', num: '11.2', title: 'Ultraviolet Spectroscopy',
      goals: [
        'Predict whether a given molecule can be detected via UV spectroscopy',
        'Describe the relationship between HOMO, LUMO, and absorption wavelength'
      ],
      svgs: [{
        title: 'HOMO → LUMO transition and the effect of conjugation',
        caption: 'UV light excites an electron from the HOMO to the LUMO. More conjugation shrinks the HOMO–LUMO gap, so the molecule absorbs longer (lower-energy) wavelengths.',
        svg: `<svg viewBox="0 0 560 280" width="560" role="img" aria-label="Energy diagram of HOMO to LUMO transition shrinking with conjugation" font-family="system-ui, sans-serif">
  <text x="280" y="22" font-size="14" fill="#0f172a" font-weight="bold" text-anchor="middle">Energy gap shrinks as conjugation increases</text>
  <text x="14" y="150" font-size="12" fill="#475569" font-weight="bold" transform="rotate(-90 14 150)" text-anchor="middle">Energy ↑</text>
  ${[
    { cx: 150, lumo: 70, homo: 210, label: 'Less conjugated', sub: 'large gap · absorbs short λ' },
    { cx: 410, lumo: 120, homo: 190, label: 'More conjugated', sub: 'small gap · absorbs long λ' }
  ].map(t => `
    <line x1="${t.cx - 80}" y1="${t.lumo}" x2="${t.cx + 80}" y2="${t.lumo}" stroke="#0369a1" stroke-width="3"/>
    <text x="${t.cx + 88}" y="${t.lumo + 4}" font-size="12" fill="#0369a1" font-weight="bold">LUMO</text>
    <line x1="${t.cx - 80}" y1="${t.homo}" x2="${t.cx + 80}" y2="${t.homo}" stroke="#b45309" stroke-width="3"/>
    <text x="${t.cx + 88}" y="${t.homo + 4}" font-size="12" fill="#b45309" font-weight="bold">HOMO</text>
    <line x1="${t.cx}" y1="${t.homo - 6}" x2="${t.cx}" y2="${t.lumo + 6}" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arr)"/>
    <text x="${t.cx}" y="248" font-size="12.5" fill="#0f172a" font-weight="bold" text-anchor="middle">${t.label}</text>
    <text x="${t.cx}" y="265" font-size="10.5" fill="#64748b" text-anchor="middle">${t.sub}</text>
  `).join('')}
  <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed"/></marker></defs>
</svg>`
      }],
      recap: `
- **UV spectroscopy** measures **electronic transitions** — electrons jump from the **HOMO → LUMO** when UV light is absorbed.
- You **never interpret UV data** on the MCAT — just know **what it detects** and **how the gap maps to wavelength**.
- Detectable molecules have **π-electrons or lone pairs** (double bonds, heteroatoms); **saturated alkanes are invisible**.
- **Smaller HOMO–LUMO gap → longer wavelength (lower energy)** absorbed. **More conjugation → smaller gap → longer λ.**
- Heavily conjugated systems absorb in the **visible** range (→ color), so the method is often called **UV–Vis**.
`,
      detail: `
#### What UV spectroscopy measures
**Ultraviolet (UV) spectroscopy** passes UV light through a sample (usually dissolved in an **inert, nonabsorbing solvent**) and records **absorbance vs. wavelength**. Absorption comes from **electronic transitions between molecular orbitals**.

- The headline data point is the **wavelength of maximum absorbance**.
- It reports the **extent of conjugation**: *more conjugated → lower transition energy → greater λ of maximum absorbance.*

:::expertise
You will **never interpret a UV spectrum** on the MCAT — but it is **fair game for discussion**. UV is most useful for compounds with **double bonds or heteroatoms with lone pairs** that build **conjugated systems**. That is all you need.
:::

#### HOMO, LUMO, and the energy gap
UV works because molecules with **π-electrons** or **nonbonding (lone-pair) electrons** can be excited to higher-energy **antibonding orbitals**.

- **HOMO** = **H**ighest **O**ccupied **M**olecular **O**rbital (where the electron starts).
- **LUMO** = **L**owest **U**noccupied **M**olecular **O**rbital (where it lands).
- A **smaller HOMO–LUMO gap** is **more easily excited** → absorbs **longer wavelengths** (lower frequency, lower energy).

| HOMO–LUMO gap | Energy of transition | Wavelength absorbed |
|---|---|---|
| **Large** (little/no conjugation) | High | **Short** (deep UV) |
| **Small** (extended conjugation) | Low | **Long** (toward visible) |

:::keyconcept
Before absorbing a photon, the electron sits in the **HOMO**. UV light then promotes it to the **LUMO**. The energy of the absorbed photon equals the **HOMO–LUMO gap** ($\\Delta E = \\dfrac{hc}{\\lambda}$), so a **smaller gap** means a **longer wavelength**.
:::

#### Conjugated systems and color
Molecules with **unhybridized p-orbitals** (conjugation) are readily excited by UV light. **Conjugation shifts absorption to higher maximum wavelengths** (lower frequencies).

- **Benzene** shows three broad absorbances at **180, 200, and 255 nm**.
- Large conjugated systems may absorb in the **visible** range → the compound appears **colored**.
- Because the same instrument works at visible wavelengths, the technique is called **UV–Vis spectroscopy**.

:::mnemonic
**"More π, longer λ."** Each added conjugated double bond shrinks the HOMO–LUMO gap and **stretches** the absorbed wavelength toward the red/visible. Enough conjugation and the molecule literally turns a color (think β-carotene).
:::

:::realworld
Worked example: of **propane, propene, propanone**, only **propene** (C=C) and **propanone** (C=O lone pairs + π) are UV-detectable. **Propane** is fully saturated with no π-electrons or lone pairs → **invisible** to UV.
:::
`
    },

    /* ──────────── 11.3 Nuclear Magnetic Resonance Spectroscopy ──────────── */
    {
      id: 's3', num: '11.3', title: 'Nuclear Magnetic Resonance Spectroscopy',
      goals: [
        'Describe what NMR spectroscopy measures and what it is generally used for',
        'Recall the units for chemical shift on standardized NMR',
        'Identify what deshielding and spin–spin coupling are, and how they impact NMR spectra',
        'Recognize key regions and peaks within an NMR spectrum, and match a compound to its spectrum'
      ],
      images: [{ src: fig(2, 2).src, alt: fig(2, 2).alt, caption: 'Figure 11.4 — ¹H-NMR of dichloromethyl methyl ether: two proton environments (Ha, Hb) give two peaks with a 1:3 integration ratio.' }],
      recap: `
- **NMR is the most important spectroscopy technique on the MCAT** — it reveals **structure / connectivity** of a molecule.
- A magnetic field splits nuclei into the **α-state** (aligned, lower energy) and **β-state** (against, higher energy); a radiofrequency pulse flips α → β.
- The MCAT tests only **¹H-NMR** (protons). Useful nuclei have an **odd mass number, odd atomic number, or both** (so **¹²C is silent**).
- **Chemical shift (δ)** in **ppm** is plotted on the x-axis; **TMS = 0 ppm**; left = **downfield (deshielded)**, right = **upfield (shielded)**.
- **Three readouts:** number of **peaks** = unique proton environments; **integration** (area) = relative proton count; **splitting** (n + 1 rule) = number of adjacent protons.
`,
      detail: `
#### What NMR measures
**Nuclear magnetic resonance (NMR) spectroscopy** is the **most important spectroscopic technique for the MCAT**. Certain nuclei have **magnetic moments** with random orientation. In an applied **magnetic field** they align **with** or **against** it:

- **α-state** — aligned **with** the field → **lower energy**.
- **β-state** — aligned **against** the field → **higher energy**.

A **radiofrequency pulse** matching the energy gap flips some nuclei **α → β**. The absorbed frequency depends on each atom's **magnetic environment** (and on neighboring magnetic nuclei) — that environment-dependence is what makes NMR a structural tool.

:::realworld
**MRI** is medical proton NMR. Cross-sectional scans translate the chemical shifts of tissue protons into grayscale: on a **T1-weighted MRI**, **water is dark** and **fatty tissue is light**. The MCAT won't test MRI mechanics — just know the connection.
:::

#### Which nuclei are NMR-active
NMR needs a **nuclear spin**, which exists for nuclei with an **odd atomic number, odd mass number, or both** — e.g. **¹H, ¹³C, ¹⁹F, ¹⁷O, ³¹P**. The MCAT tests **only ¹H-NMR**.

:::bridge
Nuclei with **odd mass number, odd atomic number, or both** have a magnetic moment. **¹²C has none** (even/even) → NMR-silent, which is why ¹²C cannot be used for NMR. Atomic and mass numbers are reviewed in *MCAT General Chemistry Review*, Ch. 1.
:::

#### Chemical shift, TMS, and the axis
Because spectrometers run at different field strengths, results are standardized using **chemical shift (δ)** in **parts per million (ppm)** of spectrometer frequency.

- δ is on the **x-axis** and **increases to the left** = **downfield**; the right side is **upfield**.
- **Tetramethylsilane (TMS)** is the calibration standard set to **δ = 0 ppm**. Silicon is **electron-donating**, so it shields its protons far upfield — everything else is more deshielded.
- **Skip the TMS peak** when counting signals.

:::keyconcept
**TMS provides the reference peak.** Its ¹H signal is assigned **δ = 0 ppm**. Don't count it as one of your molecule's peaks.
:::

#### Proton (¹H) NMR: three pieces of information

##### 1) Number of peaks = number of unique proton environments
Most ¹H nuclei resonate **0–10 ppm** downfield of TMS. **Chemically equivalent protons** (identical magnetic environment) share **one peak**.

![Figure 11.4 — ¹H-NMR of dichloromethyl methyl ether](${fig(2, 2).src})

In **dichloromethyl methyl ether** (Figure 11.4) there are **two** environments: the single **dichloromethyl proton (Ha)** and the three equivalent **methyl protons (Hb)** (a freely rotating methyl averages to one environment).

:::expertise
**Counting peaks trick:** if you can describe two protons **differently in words**, they are distinct environments. You can call Ha *"the H on the carbon with two Cl"* and Hb *"the methyl H's,"* but you **cannot** distinguish the three methyl H's from one another — they rotate freely, so they're one peak.
:::

##### 2) Integration = relative number of protons
The **area under a peak**, called the **integration**, is **proportional to the number of protons** it represents. In Figure 11.4 the ratio of Ha : Hb is **1 : 3**, exactly the proton ratio.

##### 3) Position = shielding vs. deshielding
A proton's δ reflects its electron environment:

| Effect | Cause | Peak moves… |
|---|---|---|
| **Deshielding** | Electron-**withdrawing** groups (e.g., Cl, O) pull electron density away | **Downfield** (left, higher δ) |
| **Shielding** | Electron-**donating** groups (e.g., Si in TMS) add electron density | **Upfield** (right, lower δ) |

Ha sits far **downfield** because its carbon bears two electronegative **Cl** atoms and an **O** that **deshield** it; with less shielding electron density, the nucleus feels more of the applied field.

:::mnemonic
**"Deshield → Downfield."** Picture each proton wrapped in a **shield of electrons**. Electronegative atoms (or electron-pulling resonance) **strip the shield**, so the proton **Deshields** and moves **Downfield** (to the left). Both start with **D**.
:::

#### Spin–spin coupling (splitting) and the n + 1 rule
When two non-equivalent protons sit **within three bonds** (i.e., on **adjacent atoms**), each one's magnetic environment is perturbed by whether its neighbor is in the **α- or β-state** — this is **spin–spin coupling (splitting)**.

![Figure 11.6 — 1,1-dibromo-2-chloroethane](${fig(2, 4).src})

- **One neighbor (Figure 11.5, 1,1-dibromo-2,2-dichloroethane):** Hb can be α or β with ~50% probability each → Ha appears as a **doublet** (two equal peaks straddling the true shift). Ha and Hb each split the other into doublets.
- **Two neighbors (Figure 11.6, 1,1-dibromo-2-chloroethane):** the two Hb's give states **αα, αβ, βα, ββ**; since **αβ = βα**, there are **three** unique frequencies → Ha is a **triplet** with a **1 : 2 : 1** area ratio. The two Hb's (one neighbor: Ha) appear as a **doublet** with larger integration (two protons).
- The **magnitude** of splitting (in **hertz**) is the **coupling constant, J**.

:::keyconcept
**The n + 1 rule.** A proton with **n** equivalent protons **three bonds away** is split into **n + 1** subpeaks. **Caveat:** do **not** count protons attached to **oxygen or nitrogen** (–OH, –NH typically don't couple). J (the splitting magnitude) is measured in **Hz**, *not* ppm, and is unaffected by TMS calibration.
:::

##### Peak area (Pascal's triangle)
Split-peak intensity ratios follow Pascal's triangle. You **do not** need to memorize this — just apply n + 1 for the proton of interest. Anything past four shifts is called a **multiplet**.

| Adjacent H's (n) | Peaks (n + 1) | Area ratio |
|---|---|---|
| 0 | 1 (singlet) | 1 |
| 1 | 2 (doublet) | 1 : 1 |
| 2 | 3 (triplet) | 1 : 2 : 1 |
| 3 | 4 (quartet) | 1 : 3 : 3 : 1 |
| 4 | 5 (quintet) | 1 : 4 : 6 : 4 : 1 |
| 5 | 6 (sextet) | 1 : 5 : 10 : 10 : 5 : 1 |
| 6 | 7 (septet) | 1 : 6 : 15 : 20 : 15 : 6 : 1 |

:::mnemonic
**n + 1, every time.** Count the protons **on the neighboring carbon(s)**, add one, that's your peak count. *Ethanol's* –CH₂– (next to a CH₃, n = 3) is a **quartet**; its CH₃ (next to CH₂, n = 2) is a **triplet**. *Isopropanol's* lone CH (next to two CH₃ = 6 H) is a **septet**; its CH₃'s are a **doublet**.
:::

#### Chemical-shift ranges (high-yield outliers)
You do **not** need the full shift table — but know the **outliers** and a few common ranges. Deshielding by electronegative or π systems pushes protons downfield.

| Proton type | δ (ppm) | Note |
|---|---|---|
| **Alkyl** (sp³ C–H) | **0–3** | Higher if electron-withdrawing groups nearby |
| **Alkynes** (sp C≡C–H) | **2–3** | — |
| **Alkenes** (sp² C=C–H) | **4.6–6** | — |
| **Aromatic** (Ar–H) | **6–8.5** | Popular MCAT peak |
| **Aldehyde** (R–CHO) | **9–10** | **Deshielded outlier** |
| **Carboxylic acid** (R–COOH) | **10.5–12** | **Most deshielded** common proton |

:::expertise
On Test Day, **just counting peaks and unique hydrogens** (minus TMS!) is often enough. If shifts matter, the ones to know are: **alkyl 0–3, alkynes 2–3, alkenes 4.6–6, aromatics 6–8.5, aldehydes 9–10, carboxylic acids 10.5–12 ppm.**
:::

#### What ¹H-NMR is good for
- Determining the **relative number** of protons and their **relative chemical environments** (integration + peak count).
- Counting **adjacent protons** via **splitting patterns** (n + 1).
- **Inferring functional groups** from characteristic shifts (e.g., a peak at 9–10 ppm screams **aldehyde**).
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Infrared (IR) Spectroscopy',
        points: [
          'IR measures **absorption of infrared light** that drives **molecular vibration** (stretching, bending, twisting, folding).',
          'Plotted as **percent transmittance vs. wavenumber**; standard range **4000–400 cm⁻¹**. The **fingerprint region (1500–400 cm⁻¹)** IDs a compound but is **out of MCAT scope**.',
          'A bond must **change its dipole moment** to absorb — symmetric/homonuclear bonds (e.g., $\\text{O}_2$) are **silent**.',
          '**O–H** = broad ~3300 cm⁻¹ (carboxylic-acid O–H shifts to ~3000); **N–H** = sharp ~3300 cm⁻¹; **C=O** = sharp ~1700–1750 cm⁻¹ (aldehydes, ketones, carboxylic acids, amides, esters, anhydrides).'
        ]
      },
      {
        section: 'Ultraviolet (UV) Spectroscopy',
        points: [
          'UV measures **absorption of UV light** that moves electrons **between molecular orbitals (HOMO → LUMO)**; plotted as absorbance vs. wavelength.',
          'A molecule absorbs only if the **HOMO–LUMO gap** is small enough to permit the transition.',
          'The **smaller the HOMO–LUMO gap, the longer the wavelength** the molecule can absorb.',
          '**Conjugation** (unhybridized p-orbitals) **shrinks the gap** → shifts absorption to **higher wavelengths**; enough conjugation reaches the **visible** range (color) → **UV–Vis**.'
        ]
      },
      {
        section: 'Nuclear Magnetic Resonance (NMR) Spectroscopy',
        points: [
          'NMR measures **alignment of nuclear spin** with an applied field; nuclei flip from the lower-energy **α-state** to the higher-energy **β-state**. Best tool for **structure/connectivity**. **MRI** is its medical application.',
          'Standardized by **chemical shift (δ) in ppm**, calibrated to **TMS = 0 ppm**. **Downfield = left (higher δ); upfield = right.** Only **¹H-NMR** is tested.',
          '**Each unique proton group = one peak**; **integration (area) ∝ number of protons**.',
          '**Deshielding** (electron-withdrawing groups) moves a peak **downfield**.',
          '**Spin–spin coupling** splits a peak into **n + 1** subpeaks (n = protons three bonds away); patterns are doublets, triplets, multiplets.',
          'Shift ranges: sp³ C–H **0–3**, sp² C–H **4.6–6**, sp C–H **2–3**, aromatic **6–8.5**, aldehyde **9–10**, carboxylic acid **10.5–12 ppm**.'
        ]
      }
    ],
    mnemonics: [
      '**IR carbonyl ~1700:** the **C=O** stretch is the lone heavy-hitter low in the testable range — a **sharp, deep valley at ~1700–1750 cm⁻¹** = carbonyl.',
      '**Broad = O–H, sharp = N–H:** both sit near 3300 cm⁻¹; remember "**N**arrow for **N**–H." A carboxylic-acid O–H drifts down to ~3000.',
      '**IR-silent = no dipole change:** homonuclear ($\\text{O}_2$, $\\text{Br}_2$) and symmetric stretches absorb nothing.',
      '**"More π, longer λ":** each conjugated double bond shrinks the HOMO–LUMO gap and stretches the absorbed wavelength toward the visible.',
      '**"Deshield → Downfield":** electronegative atoms strip a proton\'s electron shield, pushing its NMR peak left (higher δ). Both start with **D**.',
      '**n + 1 splitting:** count the protons on the *neighboring* carbon, add one — that\'s the number of subpeaks (don\'t count –OH/–NH).',
      '**Downfield outliers (NMR):** aldehyde **9–10**, carboxylic acid **10.5–12 ppm** — the most deshielded common protons.',
      '**Skip TMS:** it\'s the 0-ppm reference, not one of your molecule\'s signals.'
    ],
    keyConcepts: [
      '**Each technique answers a different question:** IR → which **functional groups**; UV → degree of **conjugation / π-systems**; NMR → **connectivity / structure** (the most powerful, most tested).',
      '**IR\'s gatekeeper is the dipole moment:** only vibrations that change the dipole show up, so symmetric bonds are invisible.',
      '**The HOMO–LUMO gap sets the UV wavelength:** smaller gap (more conjugation) → longer wavelength absorbed; large enough conjugation gives visible color.',
      '**¹H-NMR delivers three readouts at once:** peak count (unique environments), integration (relative # of protons), and splitting (n + 1 = adjacent protons).',
      '**Enantiomers share identical IR spectra** (same functional groups, same bonds) — spectroscopy here can\'t tell mirror images apart.'
    ],
    equations: [
      { name: 'Wavenumber', tex: '\\tilde{\\nu} = \\dfrac{1}{\\lambda}', note: 'IR x-axis (cm⁻¹); directly proportional to frequency, inversely to wavelength.' },
      { name: 'Absorbance vs. % transmittance', tex: 'A = 2 - \\log(\\%T)', note: 'Why IR maxima appear as the bottoms of valleys.' },
      { name: 'Transition energy (UV)', tex: '\\Delta E = \\dfrac{hc}{\\lambda}', note: 'Smaller HOMO–LUMO gap (ΔE) → longer wavelength absorbed.' },
      { name: 'Splitting (n + 1 rule)', tex: '\\text{peaks} = n + 1', note: 'n = equivalent protons three bonds away; excludes O/N protons.' }
    ]
  },

  questions: raw.questions
};
