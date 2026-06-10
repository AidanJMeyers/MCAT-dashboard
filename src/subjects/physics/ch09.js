// Physics & Math Chapter 9 — Atomic and Nuclear Phenomena. Authored to the rich-formatting quality bar.
// Figures and figure captions are drawn from ch09.json; goals, recap/detail markdown,
// and the practice questions are authored here. The JSON `questions` array was empty,
// so the 15 questions were reconstructed from scratch_physics/ch09_q.md (stems + 4 choices,
// the answer-letter key C B D B B B A C C C C B C A D, and the book's explanations).
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 9,
  title: 'Atomic and Nuclear Phenomena',
  subtitle: 'The photoelectric effect · absorption & emission of light · nuclear binding energy & mass defect · nuclear reactions',

  blocks: [
    /* ─────────────────────── 9.1 The Photoelectric Effect ─────────────────────── */
    {
      id: 's1', num: '9.1', title: 'The Photoelectric Effect',
      goals: [
        'Relate the work function to the energy needed to emit an electron from a metal',
        'Recall the factor(s) that the threshold frequency depends on',
        'Recognize the electrical phenomena that result from the application of the photoelectric effect'
      ],
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'Figure 9.1 — The photoelectric effect: photons above the threshold frequency strike a metal and eject electrons, producing a current.' }],
      recap: `
- The **photoelectric effect** = ejection of electrons from a metal surface when light of **high enough frequency** strikes it (discovered by **Hertz**, explained by **Einstein** — his Nobel Prize, *not* relativity).
- **Photon energy** is set by **frequency, not intensity**: $E = hf$ (Planck's constant $h = 6.626\\times10^{-34}\\text{ J}\\cdot\\text{s}$).
- **Threshold frequency** $f_T$ depends **only on the identity of the metal**. It is **all-or-nothing**: $f < f_T \\Rightarrow$ no ejection; $f > f_T \\Rightarrow$ ejection.
- **Work function** $W = hf_T$ = minimum energy to free an electron. Excess energy becomes electron kinetic energy: $K_{max} = hf - W$.
- **Intensity sets the *current* (number of electrons/time); frequency sets the *kinetic energy* per electron.** Above $f_T$, current $\\propto$ intensity.
`,
      detail: `
#### What the photoelectric effect is
When light of **sufficiently high frequency** (typically blue to ultraviolet) strikes a metal in a vacuum, the metal **emits electrons**. This is the **photoelectric effect**, discovered by **Heinrich Hertz** (1887) and explained by **Albert Einstein** (1905) — the work that earned Einstein the **Nobel Prize**.

The liberated electrons constitute a flow of charge per unit time — a **current**. As long as the light's frequency is **above the threshold frequency**:

- **Higher intensity** = more photons per unit time = more electrons ejected per unit time.
- So the **photocurrent is directly proportional to the intensity (amplitude)** of the light beam.

:::realworld
All of life depends on the photoelectric effect. A photon entering a chloroplast ejects an electron from a magnesium-containing chlorophyll dye, feeding the pathways that build glucose. We also harness it industrially in **solar panels**.
:::

#### Photon energy: $E = hf$
Einstein's key insight: a light beam is an integer number of discrete quanta called **photons**, each carrying energy proportional to **frequency**:

$$E = hf$$

where $E$ is the photon energy, $h$ is **Planck's constant** ($6.626\\times10^{-34}\\text{ J}\\cdot\\text{s}$, or $4.14\\times10^{-15}\\text{ eV}\\cdot\\text{s}$), and $f$ is the frequency.

- Pair with $c = f\\lambda$ to convert to wavelength.
- **Higher frequency → shorter wavelength → higher energy** (toward blue/UV); **lower frequency → longer wavelength → lower energy** (toward red/IR).
- In nuclear physics, wavelength is often given in **nanometers** ($1\\text{ nm} = 10^{-9}\\text{ m}$) and **ångströms** ($1\\text{ Å} = 10^{-10}\\text{ m}$).

:::keyconcept
The energy of a photon increases with **increasing frequency**. We discuss electrons (not protons or neutrons) being ejected because metals hold their **valence electrons** weakly — they have **low ionization energies**.
:::

#### Threshold frequency $f_T$
The **threshold frequency** $f_T$ is the **minimum frequency** that ejects electrons. It depends **only on the type of metal**. The effect is essentially **all-or-nothing**:

| Condition | Outcome |
|---|---|
| $f < f_T$ | **No electron ejected** — the photon lacks enough energy to free the electron |
| $f = f_T$ | Electron **barely escapes** with $K \\approx 0$ |
| $f > f_T$ | Electron ejected; **excess energy** becomes kinetic energy |

#### Work function and ejected-electron kinetic energy
The **work function** $W$ is the **minimum energy** to eject an electron, tied to the threshold frequency:

$$W = hf_T$$

When $f > f_T$, the photon delivers more than enough energy; the surplus appears as the electron's kinetic energy:

$$K_{max} = hf - W$$

- This is a **maximum** because the actual energy can be anywhere from $0$ to $K_{max}$, depending on the specific photon–atom interaction. $K_{max}$ is reached only when **all** the photon's energy transfers to the electron.

:::bridge
Think of the work function like an **activation energy**: it must be **matched or exceeded** for the "reaction" (electron escape) to occur. Activation energy is discussed in *MCAT General Chemistry Review*, Ch. 5.
:::

:::expertise
The photoelectric effect is **not heavily tested**, but the logic is simple: light energy raises an atom's electrical potential energy enough to free an electron, and any "left-over" energy cannot vanish — it is conserved as **kinetic energy** of the ejected electron.
:::

> **Worked example — does blue light eject electrons from rubidium?**
> Blue light at $f = 6.00\\times10^{14}\\text{ Hz}$ hits rubidium ($W = 2.26\\text{ eV}$). Each photon carries $E = hf = (4.14\\times10^{-15})(6.00\\times10^{14}) = 2.48\\text{ eV}$. Since $2.48 > 2.26$, electrons **are** ejected, with $K_{max} = hf - W = 2.48 - 2.26 = 0.22\\text{ eV}$.

The photoelectric effect is strong support for the **particle theory of light** — light behaves as discrete energy bundles (**photons**), not a continuous wave.

:::mnemonic
**"Frequency frees, intensity floods."** A photon's **f**requency decides *whether* (and how energetically) an electron escapes; the beam's **i**ntensity decides *how many* escape (the current). A weak high-frequency beam beats an intense low-frequency one.
:::
`
    },

    /* ─────────────────────── 9.2 Absorption and Emission of Light ─────────────────────── */
    {
      id: 's2', num: '9.2', title: 'Absorption and Emission of Light',
      goals: [
        'Describe how the absorption spectrum of a single atom is determined',
        'Recall when photon emissions are most common during electronic transitions',
        'Explain the phenomenon of fluorescence'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 9.2 — Bohr model: an electron absorbs a photon to jump up an energy level and emits a photon when it falls back down.' }],
      recap: `
- The **Bohr model**: electron energy levels are **stable and discrete** (specific orbits). Transitions require a photon whose energy *exactly* matches the gap, $E = hf$.
- **Absorption** = electron jumps **up** (absorbs a photon of the right frequency); **emission** = electron falls **down** (emits a photon of that frequency). **Emission is most common when electrons drop to a lower level.**
- An atom's **absorption spectrum** is set by its discrete energy-level gaps; small changes in **molecular structure** (protonation, oxidation state, bond order) can shift it dramatically.
- **We see the colors that are *not* absorbed** (e.g., the sky is blue because blue is least absorbed by air).
- **Fluorescence**: a substance absorbs **high-frequency (UV)** light, then returns to the ground state in **two or more steps**, each emitting a **lower-frequency (longer-wavelength)** visible photon.
`,
      detail: `
#### The Bohr model — discrete energy levels
From the **Bohr model** (*MCAT General Chemistry Review*, Ch. 1): electron energy levels are **stable and discrete**, each corresponding to a specific orbit. To change levels an electron must absorb or emit a photon whose energy *exactly* matches the difference between orbits, $E = hf$:

| Process | Electron motion | Photon | Frequency requirement |
|---|---|---|---|
| **Absorption** | Lower → **higher** level | Photon **absorbed** | $hf$ must **equal** the energy gap; too little energy → no jump |
| **Emission** | Higher → **lower** level | Photon **emitted** | Emitted $hf$ **equals** the energy gap |

- A photon that doesn't carry **enough** energy cannot push the electron up at all (it's not a "partial" jump — the gap is fixed).
- **Photon emission is most common when electrons transition from a higher-energy state down to a lower-energy state.**

#### Absorption spectra
A single atom's **absorption spectrum** is determined by the **energy differences** between its ground-state and higher orbits — only photons matching those gaps are absorbed. Spectra can be shown as:

- a **color bar** with black lines at the absorbed wavelengths, or
- a **graph** of absorbance vs. wavelength.

![Figure 9.3 — Absorption spectrum of the atmosphere across the electromagnetic spectrum.](${fig(1, 1).src})

The atmosphere's absorption across the EM spectrum is shown above. The **sky is blue** because **blue light is the least absorbed** by atmospheric gases — remember, **we see the colors that are *not* absorbed**.

:::keyconcept
Small changes in **molecular structure** cause **dramatic** shifts in absorption. **Phenolphthalein** is colorless when acidic (absorbs no visible light) but bright pink when basic (absorbs all but the longest visible wavelengths). Indicators are large organic molecules whose absorption flips with **protonation state**; **conjugated double bonds** and **aromatic rings** let them absorb visible photons.
:::

:::bridge
Different bonds absorb different wavelengths — the basis of **IR spectroscopy** (structure) and **UV–Vis spectroscopy** (visible/UV absorption). Spectroscopy is covered in *MCAT Organic Chemistry Review*, Ch. 11.
:::

#### Fluorescence
**Fluorescence** is stepwise emission of visible light after high-frequency excitation:

1. A fluorescent substance (ruby, emerald, fluorescent-lamp phosphors) absorbs **high-frequency UV** light → electron excited to a high level.
2. The electron returns to the ground state in **two or more steps**.
3. Each step releases **less energy** than the absorbed photon → each emitted photon has a **lower frequency / longer wavelength**.
4. If an emitted photon lands in the **visible range**, we see its color.

The range of colors in fluorescent lighting (office whitish-green to neon-sign glares) reflects the distinct **multi-step emission spectra** of different phosphors.

:::mnemonic
**Fluorescence = "high in, low(s) out."** One high-energy UV photon goes **in**; several lower-energy visible photons come **out** as the electron cascades down in steps. Energy is conserved — it's just split across multiple smaller emissions.
:::
`
    },

    /* ─────────────────────── 9.3 Nuclear Binding Energy and Mass Defect ─────────────────────── */
    {
      id: 's3', num: '9.3', title: 'Nuclear Binding Energy and Mass Defect',
      goals: [
        'Describe key concepts in nuclear binding energy, including the strong nuclear force, mass defect, and binding energy',
        'Recall the four fundamental forces of nature',
        'Apply the equation $E = mc^2$'
      ],
      recap: `
- **Mass defect** = the actual nuclear mass is **slightly *less*** than the summed masses of its free protons and neutrons. The "missing" mass was converted to energy.
- **Mass–energy equivalence**: $E = mc^2$. Because $c$ is squared, a tiny mass yields **enormous** energy (1 g → 89.9 TJ).
- The **strong nuclear force** binds nucleons; it is the **strongest** of the four forces but acts only over **very short range** (a few nucleon diameters).
- **Binding energy** = energy released when nucleons bind (radiated away as the mass defect appears). **More binding energy per nucleon = more stable nucleus**; it **peaks at iron**.
- **Four fundamental forces**: **strong nuclear, weak nuclear** (~$10^{-6}$ as strong), **electrostatic**, and **gravitation**.
`,
      detail: `
#### Mass defect
You might expect a nucleus to weigh exactly the sum of its protons and neutrons. But every nucleus heavier than hydrogen is **slightly lighter** than that sum. This difference is the **mass defect** — matter that has been **converted to energy**.

#### Mass–energy equivalence: $E = mc^2$
Einstein resolved the puzzle with the equivalence of matter and energy:

$$E = mc^2$$

where $E$ is energy, $m$ is mass, and $c$ is the speed of light.

- Because $c$ is **squared**, a **tiny** amount of mass releases a **huge** amount of energy.
- Converting just **1 gram** of mass yields **89.9 terajoules** ($1\\text{ TJ} = 10^{12}\\text{ J}$) — about **21.5 billion kilocalories**.

#### The strong nuclear force and binding energy
When **nucleons** (protons + neutrons) come together, the **strong nuclear force** attracts them — strongly enough to **overcome the electromagnetic repulsion** between the protons.

- The strong force is the **strongest** of the four fundamental forces...
- ...but it acts only over **extremely short distances** (a few nucleon diameters), so nucleons must be **very close** to bind.
- The bound system sits at a **lower energy** than the free constituents. That energy difference is **radiated away** (heat, light, EM radiation) — and *that* is when the mass defect appears.

The energy released on binding (equivalently, the energy needed to pull the nucleus apart) is the **binding energy**:

| Quantity | Definition |
|---|---|
| **Strong nuclear force** | Short-range attractive force binding nucleons; overpowers proton–proton repulsion |
| **Mass defect** | Difference between mass of **free** nucleons and mass of the **bound** nucleus |
| **Binding energy** | Energy released when nucleons bind ($= \\Delta m\\,c^2$); the missing mass in energy form |

- **More binding energy per nucleon ⇒ more stable nucleus.** Binding energy per nucleon **peaks at iron (Fe)** → iron has the **most stable** nucleus.
- In general, **intermediate-sized nuclei are more stable** than very large or very small ones — the driving force behind both fission and fusion.

#### The four fundamental forces
The **weak nuclear force** also stabilizes the nucleus but is only ~**one-millionth** as strong as the strong force. Together the strong and weak nuclear forces are two of the **four fundamental forces of nature**:

1. **Strong nuclear force** (strongest, very short range)
2. **Weak nuclear force** (~$10^{-6}\\times$ the strong force)
3. **Electrostatic (electromagnetic) force**
4. **Gravitation** (weakest)

:::keyconcept
The mass defect *is* the binding energy, just expressed as mass. They are linked by $E = mc^2$: the missing mass was radiated away as the binding energy when the nucleus formed.
:::

> **Worked example — helium-4 binding energy.** Free nucleons: $2\\times1.00728 + 2\\times1.00867 = 4.03190\\text{ amu}$. True $^4\\text{He}$ nucleus mass $= 4.00260\\text{ amu}$. **Mass defect** $= 4.03190 - 4.00260 = 0.02930\\text{ amu}$ — and this is the mass that became the nucleus's **binding energy** via $E = mc^2$.

:::mnemonic
**"Iron is the floor."** Binding energy per nucleon bottoms out (most negative total energy → most stable) at **iron**. Lighter nuclei fuse *toward* iron; heavier nuclei fission *toward* iron — both downhill, both release energy.
:::
`
    },

    /* ─────────────────────── 9.4 Nuclear Reactions ─────────────────────── */
    {
      id: 's4', num: '9.4', title: 'Nuclear Reactions',
      goals: [
        'Compare and contrast nuclear fission and nuclear fusion reactions',
        'Recall the emissions, ΔZ, and ΔA of the different radioactive decay processes',
        'Recall the type of decay that could be detected in an atomic absorption spectrum',
        'Predict the number of half-lives necessary for decay of a portion of a radioactive sample'
      ],
      images: [{ src: fig(3, 1).src, alt: fig(3, 1).alt, caption: 'Figure 9.4 — Hydrogen fusion in the Sun: four hydrogen nuclei combine to form one helium nucleus, releasing energy.' }],
      recap: `
- **Isotopic notation** $^{A}_{Z}X$: $Z$ = atomic number (protons), $A$ = mass number (protons + neutrons). **Balance both $A$ and $Z$** on each side.
- **Fusion** = small nuclei combine into a larger one (the Sun); **fission** = a large nucleus splits into smaller ones (often neutron-induced, can chain-react). **Both release energy** because products are more stable (closer to iron).
- **Decay types** (memorize emission, $\\Delta Z$, $\\Delta A$): **alpha** ($-2,-4$), **β⁻** ($+1,0$), **β⁺/positron** ($-1,0$), **gamma** ($0,0$), **electron capture** ($-1,0$).
- **Half-life** $t_{1/2}$: time for half the sample to decay. Fraction remaining $= (\\tfrac{1}{2})^{t/t_{1/2}}$. A sample is "fully" decayed after ~**7–8 half-lives**.
- **Exponential decay**: $n = n_0 e^{-\\lambda t}$, with decay constant $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$. Only **gamma** decay (EM radiation) shows up in an **atomic absorption spectrum**.
`,
      detail: `
#### Isotopic notation and conservation
Nuclear reactions — **fusion, fission, radioactive decay** — combine or split nuclei. Because binding energy per nucleon is greatest for **intermediate-sized** atoms, **small atoms fusing** or **large atoms splitting** releases large energy.

Elements are written with the **atomic number $Z$** as a subscript and **mass number $A$** as a superscript, $^{A}_{Z}X$:

- **$Z$ (atomic number)** = number of **protons**.
- **$A$ (mass number)** = **protons + neutrons**.
- **Balance rule**: the sum of $A$ and the sum of $Z$ must each be **equal on both sides** of every arrow (nucleon-number conservation).

#### Fusion vs. fission

![Figure 9.5 — A typical exponential decay curve: the amount remaining halves each half-life, approaching zero asymptotically.](${fig(3, 2).src})

| | **Fusion** | **Fission** |
|---|---|---|
| Process | **Small nuclei combine** into a larger one | **Large nucleus splits** into smaller nuclei |
| Reactant size | **Small** (hydrogen, helium) | **Large** (actinides, lanthanides) |
| Change in nuclear mass | **Increase** (nucleus gets bigger) | **Decrease** (nucleus gets smaller) |
| Energy released? | **Yes** (products more stable) | **Yes** (products more stable) |
| Where it happens | Stars/Sun (4 H → He); developmental fusion plants use **deuterium** $^2_1\\text{H}$ + **lithium** | Most commercial **nuclear power plants** |
| Trigger | Extreme temperature/pressure | Absorption of a **low-energy neutron**; can **chain-react** |

- The **Sun** fuses four hydrogen nuclei into one helium nucleus, producing $3.85\\times10^{26}\\text{ J/s}$ (385 yottawatts) from the helium mass defect.
- **Fission** rarely happens spontaneously, but a **low-energy neutron** can induce it. Reactions that **release extra neutrons** can drive a **chain reaction**, as nearby atoms then fission too.

> **Worked example — neutrons from U-235 fission.** $^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\rightarrow {}^{140}_{54}\\text{Xe} + ^{94}_{38}\\text{Sr} + ?\\,^{1}_{0}\\text{n}$. Mass numbers: $235 + 1 = 236$; products $140 + 94 = 234$, so $236 - 234 = 2$ extra **neutrons**. Protons already balance ($92 = 54 + 38$), confirming the 2 leftover nucleons are neutrons that can induce further fission.

#### Radioactive decay
**Radioactive decay** is the spontaneous decay of unstable nuclei with emission of specific particles. The MCAT tests three problem types: (1) **isotope/particle arithmetic**, (2) **half-life** problems, and (3) **exponential decay curves / decay constants**.

:::expertise
On any decay problem, **start by balancing protons** ($Z$). Many wrong answers simply have the wrong proton count and can be eliminated before you even check mass numbers.
:::

##### The five decay processes
Memorize what each emits and how it changes $A$ and $Z$:

| Decay type | Emits… | $\\Delta Z$ (protons) | $\\Delta A$ (mass) | What's happening |
|---|---|:---:|:---:|---|
| **Alpha (α)** | $\\alpha$-particle ($^4_2\\text{He}$ nucleus: 2 p, 2 n, charge **+2**) | **−2** | **−4** | Big, easily stopped (won't penetrate lead); doubly charged |
| **Beta-negative (β⁻)** | electron ($e^-$, $\\beta^-$) + antineutrino | **+1** | **0** | A **neutron → proton**; more penetrating than α |
| **Beta-positive (β⁺) / positron** | positron ($e^+$, $\\beta^+$) + neutrino | **−1** | **0** | A **proton → neutron**; positron = electron's antiparticle |
| **Gamma (γ)** | $\\gamma$-ray (high-energy photon, no charge) | **0** | **0** | De-excites the nucleus; **only EM radiation emitted** |
| **Electron capture** | nothing emitted (**absorbs** an inner electron) + neutrino | **−1** | **0** | Inner $e^-$ + **proton → neutron**; reverse of β⁻ |

**Alpha decay** — $^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + ^{4}_{2}\\alpha$. The α-particle is **massive** and **+2 charged** (it has *no electrons*), so it interacts with matter readily and **does not penetrate** shielding.

:::keyconcept
Because an alpha particle contains **no electrons**, it carries a charge of **+2**. Its large mass and high charge make it the **least penetrating** form of radiation.
:::

**Beta decay** — an electron isn't stored in the nucleus; it appears when a **neutron decays into a proton + β⁻ + antineutrino**. The β-particle is **1836× lighter** than a proton, so **beta radiation penetrates more** than alpha. In **β⁺ (positron emission)**, a **proton converts to a neutron** and a positively charged positron is emitted.

:::keyconcept
**Conserve charge in beta decay.** Produce a **negative** β⁻ → a **neutron becomes a proton**. Produce a **positive** β⁺ → a **proton becomes a neutron**. Negative beta decay emits a negative particle; positive beta decay emits a positive particle.
:::

**Gamma decay** — emission of a high-energy, high-frequency **photon** (γ-ray) with **no charge**. It lowers the nucleus's energy **without changing $A$ or $Z$** (the excited parent is often marked with an asterisk, e.g., $^{A}_{Z}X^*$).

:::keyconcept
Gamma-decay questions are the **easiest** on the MCAT: no change to mass number or atomic number — only a γ-ray leaves.
:::

**Electron capture** — a rare process: the nucleus **captures an inner-shell electron**, which combines with a proton to form a neutron (a neutrino is released). $Z$ drops by 1, $A$ is unchanged. It's essentially the **reverse of β⁻ decay** (a particle is *absorbed*, not emitted, distinguishing it from β⁺).

:::mnemonic
**Decay cheat — "α takes 2 & 4; betas swap a nucleon; γ changes nothing; capture eats an electron."**
- **α**: $\\Delta Z=-2$, $\\Delta A=-4$ (loses a helium nucleus).
- **β⁻**: $\\Delta Z=+1$ (n→p), **β⁺**: $\\Delta Z=-1$ (p→n) — betas never change $A$.
- **γ**: $\\Delta Z=0$, $\\Delta A=0$ (just photon).
- **e⁻ capture**: $\\Delta Z=-1$, $\\Delta A=0$ — like β⁺ but the electron comes *in*.
:::

> **Worked example — working a decay chain backward.** Given an alpha decay produces **americium-241** ($Z=95$), the parent had $Z = 95+2 = 97$ and $A = 241+4 = 245$ → **berkelium-245**. The positron emission before it had $Z = 97+1 = 98$ → **californium-245**; the gamma decay before *that* leaves $Z=98$, $A=245$ → an excited **californium-245**. Always balance $Z$ first, then $A$.

#### Half-life
The **half-life** $t_{1/2}$ is the time for **half** of a radioactive sample to decay. Each subsequent half-life removes half of what *remains*, so the amount approaches zero asymptotically:

$$n = n_0\\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}$$

| Half-lives elapsed | Fraction remaining |
|:---:|:---:|
| 0 | 1 |
| 1 | $\\tfrac{1}{2}$ |
| 2 | $\\tfrac{1}{4}$ |
| 3 | $\\tfrac{1}{8}$ |
| 4 | $\\tfrac{1}{16}$ |

- A sample never *truly* hits zero, but it is considered **completely decayed after ~7–8 half-lives**.

:::expertise
Half-life problems are **common** — **write them out** half-life by half-life rather than doing them in your head; it's easy to lose your place.
:::

> **Worked example.** If $t_{1/2} = 4$ years, what fraction remains after **12 years**? $12/4 = 3$ half-lives → $1 \\rightarrow \\tfrac{1}{2} \\rightarrow \\tfrac{1}{4} \\rightarrow \\tfrac{1}{8}$. **One-eighth** remains.

#### Exponential decay
The decay **rate** is proportional to the number of intact nuclei ($n$), which gives an **exponential decay**:

$$n = n_0 e^{-\\lambda t}$$

where $n_0$ is the count at $t = 0$ and $\\lambda$ is the **decay constant**, related to the half-life by:

$$\\lambda = \\frac{\\ln 2}{t_{1/2}}$$

Taking $\\ln$ of both sides linearizes it: $\\ln\\!\\left(\\dfrac{n}{n_0}\\right) = -\\lambda t$, so a plot of $\\ln(n/n_0)$ vs. $t$ is a **straight line with slope $-\\lambda$**.

> **Worked example.** A 2 mol sample, $\\lambda = 2\\text{ hr}^{-1}$, after 45 min ($t = 0.75\\text{ hr}$): $e^{-\\lambda t} = e^{-1.5} \\approx 0.22$, so **22% remains** ($\\approx 0.44\\text{ mol}$, times Avogadro's number for the nuclei count).

:::keyconcept
**Only gamma decay can be detected in an atomic absorption spectrum.** It produces **electromagnetic radiation** (photons) rather than nuclear fragments (α, β particles), so it interacts with an absorption/emission spectrum the way light does.
:::

:::bridge
The straight line from $\\ln(n/n_0) = -\\lambda t$ is a **semilog plot** — exponential processes become linear on a log axis. See graphical analysis in *MCAT Physics and Math Review*, Ch. 12.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'The Photoelectric Effect',
        points: [
          'The **photoelectric effect** is the ejection of an electron from a metal surface in response to light.',
          'The **threshold frequency** is the minimum light frequency needed to eject an electron from a given metal.',
          'The **work function** is the minimum energy needed to eject an electron; it depends on the metal and equals **threshold frequency × Planck\'s constant** ($W = hf_T$).',
          'The greater the incident photon\'s energy **above the work function**, the more kinetic energy the ejected electron can have ($K_{max} = hf - W$).',
          'Ejected electrons create a **current** whose magnitude is **proportional to the intensity** of the incident light.'
        ]
      },
      {
        section: 'Absorption and Emission of Light',
        points: [
          'The **Bohr model** states that electron energy levels are **stable and discrete**, corresponding to specific orbits.',
          'An electron jumps to a **higher** orbit by **absorbing** a photon whose frequency matches the energy gap.',
          'An electron falling to a **lower** orbit **emits** a photon whose frequency matches the energy gap.',
          'Absorption spectra can be **dramatically shifted** by small changes in molecular structure.',
          '**Fluorescence**: a species absorbs high-frequency light and returns to ground state in **multiple steps**, each emitting a lower-energy (often visible) photon.'
        ]
      },
      {
        section: 'Nuclear Binding Energy and Mass Defect',
        points: [
          '**Binding energy** is the energy released when nucleons (protons + neutrons) bind together.',
          'The **more binding energy per nucleon**, the **more stable** the nucleus (peaks at iron).',
          'The **four fundamental forces** are the **strong** and **weak** nuclear forces, the **electrostatic** force, and **gravitation**.',
          'The **mass defect** is the difference between the mass of the **unbound** nucleons and the **bound** nucleus.',
          'Unbound constituents have **more energy and more mass**; the mass defect is the mass converted to energy ($E = mc^2$).'
        ]
      },
      {
        section: 'Nuclear Reactions',
        points: [
          '**Fusion** combines small nuclei into larger ones; **fission** splits a large nucleus into smaller ones — both **release energy** because the products are more stable.',
          '**Alpha (α) decay** emits a helium nucleus ($^4_2\\text{He}$): $\\Delta Z = -2$, $\\Delta A = -4$.',
          '**Beta-negative (β⁻) decay** = neutron → proton, emitting an electron (and antineutrino): $\\Delta Z = +1$, $\\Delta A = 0$.',
          '**Beta-positive (β⁺) / positron decay** = proton → neutron, emitting a positron (and neutrino): $\\Delta Z = -1$, $\\Delta A = 0$.',
          '**Gamma (γ) decay** emits a photon, de-exciting the nucleus: $\\Delta Z = 0$, $\\Delta A = 0$. **Electron capture** absorbs an inner electron (p → n): $\\Delta Z = -1$, $\\Delta A = 0$.',
          '**Half-life** is the time for half a sample to decay; in **exponential decay** the decay rate is proportional to the number of nuclei remaining ($n = n_0 e^{-\\lambda t}$).'
        ]
      }
    ],
    mnemonics: [
      '**"Frequency frees, intensity floods":** a photon\'s **frequency** decides *whether* an electron escapes and *how energetic* it is; the beam\'s **intensity** decides *how many* escape (the current).',
      '**Photon energy ladder:** $E = hf$ and $c = f\\lambda$ → **high frequency = short wavelength = high energy** (blue/UV); low frequency = long wavelength = low energy (red/IR).',
      '**Fluorescence = "high in, low(s) out":** one high-energy UV photon in; several lower-energy visible photons out as the electron cascades down in steps.',
      '**"Iron is the floor":** binding energy per nucleon is greatest at **iron** — light nuclei fuse *toward* iron, heavy nuclei fission *toward* iron, both releasing energy.',
      '**Decay $\\Delta$ table:** **α** = $(-2,-4)$ · **β⁻** = $(+1,0)$ · **β⁺** = $(-1,0)$ · **γ** = $(0,0)$ · **e⁻ capture** = $(-1,0)$. Betas/γ/capture never change $A$; only α does.',
      '**Beta charge swap:** make a **negative** β⁻ → a **neutron becomes a proton** ($Z+1$); make a **positive** β⁺ → a **proton becomes a neutron** ($Z-1$). Charge is always conserved.',
      '**Electron capture = β⁺ in reverse:** instead of emitting a positron, the nucleus *eats* an inner electron — same $(-1,0)$ result, but a particle goes **in**, not out.',
      '**Half-life halving:** fraction left $= (\\tfrac{1}{2})^{\\,t/t_{1/2}}$ → 1, ½, ¼, ⅛, … A sample is "all gone" after **~7–8 half-lives**.'
    ],
    keyConcepts: [
      '**Light is quantized:** the photoelectric effect proves light comes in discrete photons of energy $E = hf$ — frequency (not intensity) sets per-photon energy, and there is a hard **threshold frequency**.',
      '**$E = mc^2$ underlies all nuclear energy:** the **mass defect** is missing mass converted to **binding energy**; because $c$ is squared, tiny masses yield enormous energy.',
      '**Stability tracks binding energy per nucleon (peaks at iron):** that\'s *why* both fusion of light nuclei and fission of heavy nuclei release energy.',
      '**Decay is bookkeeping:** balance $Z$ (protons) first, then $A$ (mass number). Memorize the emission, $\\Delta Z$, and $\\Delta A$ of each decay type cold.',
      '**Radioactive decay is exponential, not linear:** the rate $\\propto$ nuclei remaining, so $n = n_0 e^{-\\lambda t}$ with $\\lambda = \\ln 2 / t_{1/2}$; only **gamma** (EM radiation) shows in an absorption spectrum.'
    ],
    equations: [
      { name: 'Energy of a photon', tex: 'E = hf', note: 'Eq. 9.1. Photon energy is set by frequency; $h = 6.626\\times10^{-34}\\text{ J·s}$.' },
      { name: 'Max kinetic energy (photoelectric effect)', tex: 'K_{max} = hf - W', note: 'Eq. 9.2. Excess of photon energy over the work function becomes electron KE.' },
      { name: 'Work function', tex: 'W = hf_T', note: 'Eq. 9.3. Minimum energy to eject an electron; depends only on the metal.' },
      { name: 'Mass–energy equivalence', tex: 'E = mc^2', note: 'Eq. 9.4. Mass defect converted to binding energy; $c$ is squared.' },
      { name: 'Wave relation (with $E=hf$)', tex: 'c = f\\lambda', note: 'Links frequency and wavelength; combine with $E = hf$ to find wavelength from energy.' },
      { name: 'Alpha (α) decay', tex: '^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\alpha', note: 'Eq. 9.6. Emits a helium nucleus: $\\Delta Z = -2$, $\\Delta A = -4$.' },
      { name: 'Beta-negative (β⁻) decay', tex: '^{A}_{Z}X \\rightarrow {}^{A}_{Z+1}Y + {}^{0}_{-1}\\beta^-', note: 'Eq. 9.7. Neutron → proton: $\\Delta Z = +1$, $\\Delta A = 0$.' },
      { name: 'Beta-positive (β⁺) decay', tex: '^{A}_{Z}X \\rightarrow {}^{A}_{Z-1}Y + {}^{0}_{+1}\\beta^+', note: 'Eq. 9.8. Proton → neutron (positron emission): $\\Delta Z = -1$, $\\Delta A = 0$.' },
      { name: 'Gamma (γ) decay', tex: '^{A}_{Z}X^{*} \\rightarrow {}^{A}_{Z}X + \\gamma', note: 'Eq. 9.9. De-excitation photon: $\\Delta Z = 0$, $\\Delta A = 0$.' },
      { name: 'Electron capture', tex: '^{A}_{Z}X + {}^{0}_{-1}e^- \\rightarrow {}^{A}_{Z-1}Y', note: 'Eq. 9.10. Absorbs an inner electron (p → n): $\\Delta Z = -1$, $\\Delta A = 0$.' },
      { name: 'Half-life (fraction remaining)', tex: 'n = n_0\\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}', note: 'Amount left after a whole number (or fraction) of half-lives.' },
      { name: 'Exponential decay', tex: 'n = n_0 e^{-\\lambda t}', note: 'Eq. 9.12. Decay rate is proportional to nuclei remaining.' },
      { name: 'Decay constant', tex: '\\lambda = \\dfrac{\\ln 2}{t_{1/2}}', note: 'Eq. 9.13. Relates the decay constant to half-life; slope of $\\ln(n/n_0)$ vs. $t$ is $-\\lambda$.' }
    ]
  },

  questions: [
    {
      q: 'If the work function of a metal is $6.622\\times10^{-20}\\text{ J}$ and a ray of electromagnetic radiation with a frequency of $1.0\\times10^{14}\\text{ Hz}$ is incident on the metal, what will be the speed of the electrons ejected from the metal? (Note: $h = 6.626\\times10^{-34}\\text{ J·s}$ and $m_{e^-} = 9.1\\times10^{-31}\\text{ kg}$)',
      type: 'mcq',
      choices: [
        '$\\approx 8.5\\times10^{3}\\text{ m/s}$',
        '$\\approx 8.5\\times10^{4}\\text{ m/s}$',
        '$\\approx 8.5\\times10^{5}\\text{ m/s}$',
        '$\\approx 8.5\\times10^{6}\\text{ m/s}$'
      ],
      correct: 2,
      explanation: 'First find the ejected electron\'s kinetic energy: $K = hf - W = (6.626\\times10^{-34})(1.0\\times10^{14}) - 6.622\\times10^{-20} \\approx 6.626\\times10^{-20} - 6.622\\times10^{-20} \\approx 3\\times10^{-22}\\text{ J}$. Then from $K = \\tfrac{1}{2}mv^2$, $v = \\sqrt{2K/m} = \\sqrt{2(3\\times10^{-22})/(9.1\\times10^{-31})} \\approx 8.5\\times10^{5}\\text{ m/s}$. The wide spread of exponents in the choices allows heavy rounding. This matches (C).'
    },
    {
      q: 'What is the wavelength of a photon that causes an electron to be emitted from a metal with a kinetic energy of $50\\text{ J}$? (Note: the work function of the metal is $16\\text{ J}$, and $h = 6.626\\times10^{-34}\\text{ J·s}$)',
      type: 'mcq',
      choices: [
        '$1.0\\times10^{-34}\\text{ m}$',
        '$3.0\\times10^{-27}\\text{ m}$',
        '$3.0\\times10^{-26}\\text{ m}$',
        '$1.0\\times10^{35}\\text{ m}$'
      ],
      correct: 1,
      explanation: 'The photon energy is $E = K_{max} + W = 50 + 16 = 66\\text{ J}$. The frequency is $f = E/h = 66/(6.626\\times10^{-34}) \\approx 1.0\\times10^{35}\\text{ Hz}$. Then $\\lambda = c/f = (3\\times10^{8})/(1.0\\times10^{35}) \\approx 3.0\\times10^{-27}\\text{ m}$. This matches (B).'
    },
    {
      q: 'Which of the following statements is INCONSISTENT with the Bohr model of the atom?',
      type: 'mcq',
      choices: [
        'Energy levels of the electron are stable and discrete.',
        'An electron emits or absorbs radiation only when making a transition from one energy level to another.',
        'To jump from a lower energy to a higher energy orbit, an electron must absorb a photon of precisely the right frequency such that the photon\'s energy equals the energy difference between the two orbits.',
        'To jump from a higher energy to a lower energy orbit, an electron absorbs a photon of a frequency such that the photon\'s energy is exactly the energy difference between the two orbits.'
      ],
      correct: 3,
      explanation: 'Choices (A), (B), and (C) are all true Bohr-model postulates. (D) is the inconsistent statement: when an electron falls from a **higher** to a **lower** energy orbit, it **emits** (not absorbs) a photon. (D) reverses the actual behavior, making it the right answer.'
    },
    {
      q: 'When a hydrogen-atom electron falls to the ground state from the $n = 2$ state, $10.2\\text{ eV}$ of energy is emitted. What is the wavelength of this radiation? (Note: $1\\text{ eV} = 1.60\\times10^{-19}\\text{ J}$, and $h = 6.626\\times10^{-34}\\text{ J·s}$)',
      type: 'mcq',
      choices: [
        '$5.76\\times10^{-9}\\text{ m}$',
        '$1.22\\times10^{-7}\\text{ m}$',
        '$3.45\\times10^{-7}\\text{ m}$',
        '$2.5\\times10^{15}\\text{ m}$'
      ],
      correct: 1,
      explanation: 'Convert the energy: $E = 10.2\\text{ eV}\\times1.60\\times10^{-19} \\approx 1.63\\times10^{-18}\\text{ J}$. Combine $E = hf$ and $c = f\\lambda$ to get $\\lambda = \\dfrac{hc}{E} = \\dfrac{(6.626\\times10^{-34})(3\\times10^{8})}{1.63\\times10^{-18}} \\approx 1.22\\times10^{-7}\\text{ m}$. This matches (B).'
    },
    {
      q: 'A figure illustrates an electron with initial energy of $-10\\text{ eV}$ moving from point A (a higher energy level) to point B (a lower energy level). What change accompanies the movement of the electron?',
      type: 'mcq',
      choices: [
        'Absorption of a photon',
        'Emission of a photon',
        'Decrease in the atom\'s work function',
        'Increase in the atom\'s total energy'
      ],
      correct: 1,
      explanation: 'Moving from a **higher** to a **lower** energy level requires the extra energy to be released as an **emitted photon**. Moving B→A would *absorb* a photon and *increase* total energy, so (A) and (D) are eliminated. The work function (energy to free the electron) actually *increases* as the electron drops to a lower (more bound) level, eliminating (C). This matches (B).'
    },
    {
      q: 'Which of the four fundamental forces is primarily responsible for holding the nucleons together?',
      type: 'mcq',
      choices: [
        'Binding energy',
        'Strong nuclear force',
        'Electrostatic force',
        'Gravitational force'
      ],
      correct: 1,
      explanation: 'The **strong nuclear force** is the attractive force that holds protons and neutrons together, overpowering the electrostatic repulsion between protons. Binding energy (A) is an energy, **not** one of the four fundamental forces. This matches (B).'
    },
    {
      q: 'All of the following statements about the photoelectric effect are true EXCEPT:',
      type: 'mcq',
      choices: [
        'the intensity of the light beam does not affect the photocurrent.',
        'the kinetic energies of the emitted electrons do not depend on the light intensity.',
        'a weak beam of light of frequency greater than the threshold frequency yields more current than an intense beam of light of frequency lower than the threshold frequency.',
        'for light of a given frequency, the kinetic energy of emitted electrons increases as the value of the work function decreases.'
      ],
      correct: 0,
      explanation: 'The intensity **does** affect the photocurrent: greater intensity = more incident photons = more ejected electrons = larger current (as long as $f > f_T$). So (A) is false and is the EXCEPT answer. (B), (C), and (D) are all true — intensity sets the *number* of electrons (current), while frequency and work function set the *kinetic energy* per electron. This matches (A).'
    },
    {
      q: 'What is the binding energy of the argon-40 isotope in MeV? (Note: $m_{proton} = 1.0073\\text{ amu}$, $m_{neutron} = 1.0087\\text{ amu}$, $m_{\\text{Ar-40 nucleus}} = 39.9132\\text{ amu}$, and $1\\text{ amu} = 932\\text{ MeV}$)',
      type: 'mcq',
      choices: [
        '$0.4096\\text{ MeV}$',
        '$40.3228\\text{ MeV}$',
        '$381.7\\text{ MeV}$',
        '$643.8\\text{ MeV}$'
      ],
      correct: 2,
      explanation: 'Argon-40 has 18 protons and $40 - 18 = 22$ neutrons. Free-nucleon mass $= 18(1.0073) + 22(1.0087) = 18.1314 + 22.1914 = 40.3228\\text{ amu}$. Mass defect $= 40.3228 - 39.9132 = 0.4096\\text{ amu}$. Binding energy $= 0.4096\\times932 \\approx 382\\text{ MeV}$. This matches (C). (Choice B is the trap of forgetting to subtract the nucleus mass.)'
    },
    {
      q: 'A process is described in which an unstable nucleus captures an inner-shell electron that combines with a proton to form a neutron; the atomic number decreases by one and the mass number is unchanged. Which process is this?',
      type: 'mcq',
      choices: [
        '$\\beta^-$ decay',
        '$\\beta^+$ decay',
        '$e^-$ capture',
        '$\\gamma$ decay'
      ],
      correct: 2,
      explanation: 'This is **electron capture**: an unstable radionuclide captures an inner electron that combines with a proton to form a neutron, so $Z$ drops by 1 while $A$ is unchanged. It resembles $\\beta^+$ decay in its $(\\Delta Z=-1,\\Delta A=0)$ result, but a particle is **absorbed**, not emitted — making it the reverse of $\\beta^-$ decay. This matches (C).'
    },
    {
      q: 'In a fission reaction, the masses of the species are given in atomic mass units, and $1\\text{ amu}$ creates $932\\text{ MeV}$ of energy. If balancing the equation shows that $0.003\\text{ amu}$ of mass is converted, what is the energy liberated due to the transformation of mass into energy?',
      type: 'mcq',
      choices: [
        '$0.003\\text{ MeV}$',
        '$1.4\\text{ MeV}$',
        '$2.8\\text{ MeV}$',
        '$5.6\\text{ MeV}$'
      ],
      correct: 2,
      explanation: 'Balancing the reaction gives the mass converted ($\\approx 0.003\\text{ amu}$). Multiply by the conversion factor: $E = 0.003\\times932 \\approx 0.003\\times900 = 2.7\\text{ MeV}$, which rounds to about $2.8\\text{ MeV}$. This matches (C).'
    },
    {
      q: 'Element X is radioactive and decays via α decay with a half-life of four days. If $12.5\\%$ of an original sample of element X remains after $n$ days, what is the value of $n$?',
      type: 'mcq',
      choices: [
        '4',
        '8',
        '12',
        '16'
      ],
      correct: 2,
      explanation: '$12.5\\% = \\tfrac{1}{8} = (\\tfrac{1}{2})^3$, so **3 half-lives** have elapsed. After 4 days $50\\%$ remains, after 8 days $25\\%$, and after 12 days $12.5\\%$. With each half-life equal to 4 days, $n = 3\\times4 = 12$ days. This matches (C).'
    },
    {
      q: 'A graph of an exponential decay process plots the natural logarithm of the ratio of intact nuclei at time $t$ to intact nuclei at $t = 0$ on the y-axis, versus time on the x-axis. What does the slope of such a graph represent?',
      type: 'mcq',
      choices: [
        '$\\lambda$',
        '$-\\lambda$',
        '$e^{-\\lambda t}$',
        '$t_{1/2}$'
      ],
      correct: 1,
      explanation: 'Starting from $n = n_0 e^{-\\lambda t}$, divide and take the natural log: $\\ln\\!\\left(\\dfrac{n}{n_0}\\right) = -\\lambda t$. Plotting $\\ln(n/n_0)$ vs. $t$ gives a straight line whose slope is $-\\lambda$ (the negative of the decay constant). This matches (B).'
    },
    {
      q: 'A certain carbon nucleus dissociates completely into α-particles. How many particles are formed?',
      type: 'mcq',
      choices: [
        '1',
        '2',
        '3',
        '4'
      ],
      correct: 2,
      explanation: 'A typical carbon nucleus ($^{12}_{6}\\text{C}$) has 6 protons and 6 neutrons. Each α-particle is $^4_2\\text{He}$ (2 protons, 2 neutrons). $12$ nucleons $\\div 4$ nucleons per α $= 3$ α-particles (and $6$ protons $\\div 2 = 3$ checks out). This matches (C).'
    },
    {
      q: 'The half-life of carbon-14 is approximately $5{,}730$ years, while the half-life of carbon-12 is essentially infinite. If the ratio of carbon-14 to carbon-12 in a sample is $25\\%$ less than the normal ratio in nature, how old is the sample?',
      type: 'mcq',
      choices: [
        'Less than 5,730 years',
        'Approximately 5,730 years',
        'Significantly greater than 5,730 years, but less than 11,460 years',
        'Approximately 11,460 years'
      ],
      correct: 0,
      explanation: 'Because carbon-12 is effectively stable, a $25\\%$ *decrease* in the C-14/C-12 ratio means C-14 itself has dropped by $25\\%$. Since less than half ($50\\%$) of the C-14 has decayed, **less than one half-life** has elapsed → the sample is **less than 5,730 years** old. Note the wording: $25\\%$ *less than* the natural ratio, not $25\\%$ *of* it (which would be 2 half-lives). This matches (A).'
    },
    {
      q: 'A nuclide undergoes two alpha decays, two positron decays, and two gamma decays. What is the difference between the atomic number of the parent nuclide and the atomic number of the daughter nuclide?',
      type: 'mcq',
      choices: [
        '0',
        '2',
        '4',
        '6'
      ],
      correct: 3,
      explanation: 'Each **alpha** decay removes 2 protons ($2\\times-2 = -4$). Each **positron (β⁺)** decay converts a proton to a neutron ($2\\times-1 = -2$). **Gamma** decay does not change $Z$ ($0$). Total change in atomic number $= -4 + -2 + 0 = -6$, so the daughter has **6 fewer protons** than the parent — a difference of 6. This matches (D).'
    }
  ]
};
