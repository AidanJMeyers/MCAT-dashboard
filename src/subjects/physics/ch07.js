// Chapter 7 — Waves and Sound. Authored to the rich-formatting quality bar.
// Figures are pulled from ch07.json; questions are reconstructed from ch07_q.md
// (the JSON `questions` array was empty). All recap/detail markdown is authored here.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 7,
  title: 'Waves and Sound',
  subtitle: 'General wave characteristics · sound, the Doppler effect, intensity & standing waves',

  blocks: [
    /* ──────────────── 7.1 General Wave Characteristics ──────────────── */
    {
      id: 's1', num: '7.1', title: 'General Wave Characteristics',
      goals: [
        'Define key wave terms — frequency, pitch, amplitude, period, wavelength, wave speed',
        'Distinguish transverse from longitudinal waves with common examples',
        'Predict the effect of applying a force at a system\'s natural (resonant) frequency',
        'Predict the amplitude of a resultant wave from two interfering waves (superposition)'
      ],
      images: [{ src: fig(0, 4).src, alt: fig(0, 4).alt, caption: 'Figure 7.2 — Anatomy of a wave: crest, trough, wavelength (λ), and amplitude (A) measured from the equilibrium position.' }],
      recap: `
- **Wave speed** $v = f\\lambda$; **period** is the inverse of frequency, $T = \\dfrac{1}{f}$; **angular frequency** $\\omega = 2\\pi f$.
- **Transverse** waves oscillate **perpendicular** to propagation (light, "The Wave"); **longitudinal** waves oscillate **parallel** to it (sound).
- **Amplitude** = maximum displacement from equilibrium (crest *or* trough), **not** crest-to-trough.
- **Superposition:** in phase → **constructive** (amplitudes add); 180° out of phase → **destructive** (amplitudes subtract).
- **Resonance:** driving a system at its **natural frequency** maximizes amplitude; **damping** caps it in the real world.
`,
      detail: `
#### Transverse vs. longitudinal waves
The MCAT cares mostly about **sinusoidal waves**, in which particles oscillate back and forth following a sine pattern. The distinction is about the *direction* of particle oscillation relative to the wave's travel (energy transfer).

![Figure 7.1 — Transverse vs. longitudinal wave types.](${fig(0, 3).src})

| | **Transverse wave** | **Longitudinal wave** |
|---|---|---|
| Particle oscillation | **Perpendicular** to propagation | **Parallel** to propagation |
| Relation to energy transfer | Perpendicular to energy transfer | Along the direction of energy transfer |
| Classic examples | **Electromagnetic waves** (visible light, microwaves, X-rays); string moved up/down; "The Wave" in a stadium | **Sound waves**; a Slinky tapped on its end |
| Visual feature | Crests and troughs | **Compressions** and **rarefactions** (decompressions) |

:::keyconcept
**Transverse** waves have particle oscillation **perpendicular** to the direction of propagation and energy transfer. **Longitudinal** waves have particle oscillation **parallel** to the direction of propagation and energy transfer.
:::

#### Describing waves
Every point on a wave can be pinned down with a handful of quantities:

- **Wavelength (λ)** — distance from one crest (maximum) to the next.
- **Frequency (f)** — number of wavelengths passing a fixed point per second, in **hertz (Hz)** = cycles per second.
- **Period (T)** — seconds per cycle; the inverse of frequency.
- **Angular frequency (ω)** — frequency in radians per second; used for simple harmonic motion in springs/pendula.
- **Equilibrium position** — the central point about which the wave oscillates (zero displacement).
- **Displacement (x)** — how far a point is from equilibrium (a **vector**).
- **Amplitude (A)** — the **maximum magnitude** of displacement.

Wave speed links the first two:

$$v = f\\lambda$$

and the rest follow directly:

$$f = \\frac{1}{T} \\qquad \\omega = 2\\pi f = \\frac{2\\pi}{T}$$

:::keyconcept
**Amplitude is measured from equilibrium to a crest (or to a trough) — NOT crest-to-trough.** The full crest-to-trough swing is *twice* the amplitude. This is a favorite trap.
:::

:::expertise
Even though simple harmonic motion of springs and pendula is not on the formal MCAT content lists, the **jargon of wave motion** is essential — sound and light (EM radiation) *are* tested, and they speak this language.
:::

#### Phase and the principle of superposition
The **phase difference** describes how "in step" two waves of the same frequency, wavelength, and amplitude are:

- **In phase** — crests and troughs line up → phase difference **0** (or **0°**).
- **Out of phase** — crests of one align with troughs of the other → phase difference of **half a wavelength** (**180°**).
- One full cycle = one wavelength = **360°**; waves can differ by any fraction in between.

![Figure 7.3 — Phase difference: (a) nearly in phase; (b) nearly 180° out of phase.](${fig(0, 5).src})

The **principle of superposition** states that when waves overlap, the displacement of the **resultant wave** at any point is the **sum** of the individual displacements.

| Interference | Phase relation | Resultant amplitude |
|---|---|---|
| **Constructive** | Perfectly **in phase** (0°) | **Sum** of the two amplitudes |
| **Destructive** | Perfectly **out of phase** (180°) | **Difference** of the two amplitudes (zero if equal) |
| **Partially constructive** | Nearly in phase | Slightly **less than the sum** |
| **Partially destructive** | Nearly 180° out of phase | Small, but **greater than the difference** |

:::keyconcept
If two waves are **perfectly in phase**, the resultant amplitude equals the **sum** of the two amplitudes. If two *equal* waves are exactly **180° out of phase**, the resultant amplitude is **zero**.
:::

:::mnemonic
**Constructive = Crests Coincide (Combine).** **Destructive = Don't line up → Diminish.** In phase builds up; out of phase cancels out.
:::

:::realworld
**Noise-canceling headphones** exploit superposition: they capture ambient noise and emit a wave ~**180° out of phase** of similar amplitude, producing **destructive interference**. Cancellation is imperfect because real noise contains many frequencies at once.
:::

#### Traveling and standing waves
- A **traveling wave** propagates through a medium — e.g., a wave running down a string toward a fixed end.
- When the wave hits a **fixed boundary** it is **reflected and inverted**. The incoming and reflected waves then interfere.

![Figure 7.4 — A traveling wave reflects and inverts at a fixed boundary.](${fig(0, 6).src})

- When both ends are fixed and the interference produces a pattern that **appears stationary**, you have a **standing wave**. Only certain frequencies do this.
  - **Nodes** — points that stay at rest (amplitude always zero).
  - **Antinodes** — points midway between nodes that fluctuate at **maximum amplitude**.
- **Strings fixed at both ends** and **pipes open at both ends** support standing waves with similar math; **pipes open at one end** behave differently (closed end = node, open end = antinode). Detailed in 7.2.

#### Resonance
Why is a wine glass "musical" but a pencil is not? It comes down to **natural (resonant) frequencies**.

- Any object that is struck, rubbed, or disturbed begins to **vibrate**; if that frequency falls in the **audible range (20 Hz – 20,000 Hz)**, we hear it.
- **Timbre** = the quality of a sound, set by its natural frequency (or frequencies).
- **Pure tone** = a single frequency. **Noise** = multiple *unrelated* frequencies (pencil tap). **Musical** sounds have a **fundamental pitch + overtones** related by whole-number ratios.
- A system's natural frequency depends on the object (e.g., string length, linear density, and tension).

**Forced oscillation & resonance:**

- A **periodic driving force** drives a system at the **force's** frequency.
- If that frequency is **close** to the system's natural frequency, amplitude grows large (child on a swing pushed in time).
- If the driving frequency **equals** a natural frequency, the system **resonates** — amplitude reaches a **maximum**.
- A frictionless system would grow without bound, but **damping (attenuation)** — a decrease in amplitude from nonconservative forces — always limits it. Push hard enough and a wine glass shatters at its resonant frequency.

:::mnemonic
**Resonance = "Right frequency."** Match the natural frequency and amplitude blows up. Off-frequency (even louder) won't shatter the glass — frequency, not volume, is the key.
:::
`
    },

    /* ───────────────────────────── 7.2 Sound ───────────────────────────── */
    {
      id: 's2', num: '7.2', title: 'Sound',
      goals: [
        'Explain how sound is produced and transmitted through a medium',
        'Connect amplitude and frequency to loudness (sound level) and pitch',
        'Predict changes in apparent frequency from relative motion (the Doppler effect)',
        'Calculate intensity, sound level, apparent frequency, beat frequency, and standing-wave λ for strings and pipes'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 7.5 — The Doppler effect: wave crests bunch up ahead of a moving source (higher pitch) and stretch out behind it (lower pitch).' }],
      recap: `
- **Sound** is a **longitudinal** wave; it needs matter and is **fastest in solids**, slowest in gases. Within a medium, **higher density → slower** sound.
- **Pitch ↔ frequency**; **loudness ↔ intensity ↔ amplitude²**. Doubling amplitude **quadruples** intensity.
- **Doppler:** $f' = f\\dfrac{v \\pm v_o}{v \\mp v_s}$ — **top sign = toward**, bottom = away. Approaching → higher pitch.
- **Sound level** $\\beta = 10\\log\\dfrac{I}{I_0}$ (dB); **intensity** $I = \\dfrac{P}{A}$ falls off as $\\dfrac{1}{r^2}$.
- **Standing waves:** strings & open pipes use **half-wavelengths** ($n$ = 1, 2, 3…); closed pipes use **quarter-wavelengths** (**odd $n$** only).
`,
      detail: `
#### Production and transmission of sound
**Sound** is a longitudinal wave transmitted by oscillating particles in a **deformable medium** — it travels through solids, liquids, and gases but **not a vacuum**. Particles vibrate about equilibrium, producing alternating **compressions** and **rarefactions** that propagate the wave.

The speed of sound depends on the medium:

$$v = \\sqrt{\\frac{B}{\\rho}}$$

where $B$ is the **bulk modulus** (resistance to compression) and $\\rho$ is **density**.

- $B$ increases from **gas → liquid → solid**, and it rises *faster* than density does.
- Therefore sound is **fastest in solids**, slowest in gases.
- Within a single medium, increasing $\\rho$ *decreases* speed.
- In air at 20°C, $v \\approx 343\\ \\text{m/s}$.

:::keyconcept
The speed of sound is **fastest in a low-density solid** and **slowest in a dense gas**. Sound is produced by **mechanical vibration** — strings, bells, vibrating air columns, and the **vocal cords** (pitch set by their tension).
:::

#### Frequency and pitch
Our perception of frequency is **pitch** — low frequency, low pitch; high frequency, high pitch. The audible range is **20 Hz – 20,000 Hz**.

| Category | Frequency range | Example |
|---|---|---|
| **Infrasonic** | Below **20 Hz** | Deep rumbles below hearing |
| **Audible** | **20 Hz – 20,000 Hz** | Normal hearing range |
| **Ultrasonic** | Above **20,000 Hz** | Dog whistles (~20–22 kHz); medical ultrasound |

#### The Doppler effect
The **Doppler effect** is the difference between a sound's **actual** frequency and its **perceived** frequency when source and detector move relative to one another.

- Moving **toward** each other → perceived frequency $f' > f$ (higher pitch).
- Moving **away** from each other → perceived frequency $f' < f$ (lower pitch).

$$f' = f\\,\\frac{v \\pm v_o}{v \\mp v_s}$$

where $f'$ = perceived frequency, $f$ = emitted frequency, $v$ = speed of sound, $v_o$ = detector (observer) speed, $v_s$ = source speed.

:::mnemonic
**Doppler sign convention — "Top toward":**
- **Top** sign (numerator $+$, denominator $-$) when an object moves **toward** the other.
- **Bottom** sign (numerator $-$, denominator $+$) when an object moves **away**.

Pick signs to push $f'$ in the direction physical intuition demands (closing = higher, separating = lower).
:::

The numerator handles the **detector** ($v_o$); the denominator handles the **source** ($v_s$). Choose each sign independently based on whether *that* object moves toward or away.

:::bridge
The Doppler effect applies to **all waves, including light**. A light source moving **toward** you shows **blue shift** (higher frequency); moving **away** gives **red shift** (lower frequency). EM waves are covered in *MCAT Physics and Math Review*, Ch. 8.
:::

**Echolocation** (bats, dolphins): the animal is both **source and detector**. The travel time and frequency shift of the returning echo reveal an object's **position and speed**.

#### Shock waves
When a sound source travels **at or above the speed of sound**, wave fronts pile up at the front of the object, building a high-amplitude **shock wave** — a steep pressure gradient that produces the **sonic boom**.

- The boom is heard **any time** a supersonic object passes a detector — not only at the instant it breaks **Mach 1**.
- Once an object moves **faster** than sound, some shock-wave effects are *mitigated* because all wave fronts trail behind and **destructively interfere**.

#### Intensity and loudness
**Loudness (volume)** is the perception of **intensity**. Intensity is objective: the average power transported per unit area across a perpendicular surface, in $\\text{W/m}^2$.

$$I = \\frac{P}{A}$$

Two key proportionalities:

- **Intensity ∝ amplitude²** → doubling amplitude gives **4×** the intensity.
- **Intensity ∝ 1/r²** → because sound spreads over a sphere ($A = 4\\pi r^2$), doubling the distance gives **¼** the intensity.

Because intensity spans a huge range (threshold of hearing $\\approx 1\\times10^{-12}\\ \\text{W/m}^2$ up to eardrum perforation $\\approx 1\\times10^{4}\\ \\text{W/m}^2$), we use a **logarithmic** scale — the **sound level β** in **decibels (dB)**:

$$\\beta = 10\\log\\frac{I}{I_0} \\qquad I_0 = 1\\times10^{-12}\\ \\text{W/m}^2$$

When intensity changes by a factor, the new level follows:

$$\\beta_f = \\beta_i + 10\\log\\frac{I_f}{I_i}$$

| Source | Sound level (dB) | Intensity (W/m²) |
|---|---|---|
| **Threshold of hearing** | 0 | $1\\times10^{-12}$ |
| Whisper | 20 | $1\\times10^{-10}$ |
| Conversational speech (1 m) | 60 | $1\\times10^{-6}$ |
| Lawn mower (1 m) | 90 | $1\\times10^{-3}$ |
| Loud rock concert | 110 | $1\\times10^{-1}$ |
| **Threshold of pain** | 130 | $1\\times10^{1}$ |
| Jet engine (30 m) | 150 | $1\\times10^{3}$ |
| **Eardrum perforation** | 160 | $1\\times10^{4}$ |

:::bridge
Every **+10 dB = ×10 intensity**. So a +20 dB jump is $10^{2} = 100\\times$ the intensity, and the 90 dB gap between a blender (60 dB) and a jet (150 dB) is $10^{9}$… here, $10^{(150-60)/10}$. Base-ten logs are reviewed in *MCAT Physics and Math Review*, Ch. 10.
:::

:::expertise
Like other nonconservative forces, **attenuation (damping)** is usually negligible on Test Day. Note that damping lowers **amplitude/loudness** but **does not change frequency** — so the **pitch is unaffected**. The MCAT will tell you when to account for it.
:::

#### Beat frequency
When two sounds of **slightly different frequencies** play together, the volume pulses at the **beat frequency**:

$$f_{beat} = |f_1 - f_2|$$

This is how musicians tune instruments to one another — the beats slow and vanish as the pitches match.

#### Standing waves: strings and pipes
A **standing wave** forms whenever two waves of the **same frequency traveling in opposite directions** interfere in the same medium (e.g., a wave and its reflection). The pattern only *appears* stationary — points fluctuate in amplitude.

- **Nodes** — no displacement.
- **Antinodes** — maximum displacement.
- **Closed boundary** (secured string end, closed pipe end) → forces a **node**.
- **Open boundary** (open pipe end, free flag end) → forces an **antinode**.

:::mnemonic
**Nodes = No Displacement.** (And **a**ntinodes = **a**ll the action / maximum amplitude.)
:::

##### Strings and open pipes
A string fixed at both ends has **nodes at both ends**; an open pipe has **antinodes at both ends**. Both follow identical math — the length is a multiple of **half-wavelengths**:

![Figure 7.6c — First, second, and third harmonics of a string (N = node, A = antinode).](${fig(1, 3).src})

$$\\lambda = \\frac{2L}{n} \\qquad f = \\frac{nv}{2L} \\qquad (n = 1, 2, 3, \\dots)$$

![Figure 7.7 — First, second, and third harmonics of an open pipe.](${fig(1, 4).src})

| Harmonic ($n$) | Also called | λ | Frequency |
|---|---|---|---|
| **1st** | **Fundamental** | $2L$ | $\\dfrac{v}{2L}$ |
| **2nd** | First overtone | $L$ | $\\dfrac{v}{L}$ |
| **3rd** | Second overtone | $\\dfrac{2L}{3}$ | $\\dfrac{3v}{2L}$ |

:::expertise
**Shortcut:** for a **string** (fixed both ends), count **antinodes** to get the harmonic number. For an **open pipe**, count **nodes**. The whole set of allowed frequencies is the **harmonic series**.
:::

##### Closed pipes
A **closed pipe** (closed at one end, open at the other) has a **node at the closed end** and an **antinode at the open end**. The length is an **odd** multiple of **quarter-wavelengths**, so **only odd harmonics** exist:

![Figure 7.8 — First, third, and fifth harmonics of a closed pipe.](${fig(1, 5).src})

$$\\lambda = \\frac{4L}{n} \\qquad f = \\frac{nv}{4L} \\qquad (n = 1, 3, 5, \\dots)$$

| Harmonic ($n$) | Also called | λ |
|---|---|---|
| **1st** | Fundamental | $4L$ |
| **3rd** | First overtone | $\\dfrac{4L}{3}$ |
| **5th** | Second overtone | $\\dfrac{4L}{5}$ |

:::expertise
For closed pipes you **cannot** just count nodes or antinodes — count the number of **quarter-wavelengths** in the pipe to find the harmonic. Remember the **first overtone of a closed pipe is the 3rd harmonic**, not the 2nd.
:::

| | **String (both ends fixed)** | **Open pipe** | **Closed pipe** |
|---|---|---|---|
| Ends | Node–Node | Antinode–Antinode | Node–Antinode |
| Length built from | Half-wavelengths | Half-wavelengths | **Quarter**-wavelengths |
| Allowed $n$ | 1, 2, 3, … | 1, 2, 3, … | **odd only** (1, 3, 5, …) |
| $\\lambda$ | $\\dfrac{2L}{n}$ | $\\dfrac{2L}{n}$ | $\\dfrac{4L}{n}$ |
| $f$ | $\\dfrac{nv}{2L}$ | $\\dfrac{nv}{2L}$ | $\\dfrac{nv}{4L}$ |

#### Ultrasound — medical sound
**Ultrasound** uses high-frequency sound (above human hearing) to compare tissue densities. A transmitter generates a pressure wave that also acts as a **receiver** for the reflected echo.

![Figure 7.9 — An ultrasound transmitter emits a wave that reflects off an object and returns to be detected.](${fig(1, 6).src})

- Because **wave speed and travel time** are known, the machine computes distance and maps borders and edges — used for prenatal screening, gallstones, breast/thyroid masses, and biopsy needle guidance.
- It relies on **reflection**, so an **interface between two materials** is needed to see anything.
- **Doppler ultrasound** detects frequency shifts to measure **blood flow**.
- **Therapeutic** uses: deep-tissue heating to speed healing, **lithotripsy** (breaking kidney stones), tumor ablation, dental cleaning, and **phacoemulsification** (cataract destruction) — many via focused, constructively interfering waves.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'General Wave Characteristics',
        points: [
          '**Transverse** waves oscillate **perpendicular** to propagation (EM waves, "The Wave"); **longitudinal** waves oscillate **parallel** to it (sound).',
          '**Displacement (x)** is the vector distance from equilibrium; **amplitude (A)** is its maximum magnitude. **Crest** = most positive point, **trough** = most negative.',
          '**Wavelength (λ)** = crest-to-crest distance; **frequency (f)** = cycles per second (Hz); **period (T)** = seconds per cycle ($T = 1/f$); **angular frequency (ω)** = frequency in rad/s.',
          '**Interference:** constructive (in phase → amplitudes **add**), destructive (out of phase → amplitudes **subtract**), and partial cases in between; the resultant displacement is always the **sum** of displacements.',
          '**Traveling waves** have moving maxima/minima; **standing waves** arise from two opposite-traveling same-frequency waves and have fixed **nodes** (no oscillation) and **antinodes** (maximum oscillation).',
          '**Resonance** is the amplitude spike when a periodic force is applied at an object\'s **natural frequency**; **damping** decreases amplitude via nonconservative forces.'
        ]
      },
      {
        section: 'Sound',
        points: [
          'Sound is a **longitudinal** mechanical wave; it cannot travel through a **vacuum** and is **fastest in solids**, slowest in gases. Within a medium, higher density → slower sound.',
          '**Pitch ↔ frequency.** **Loudness (sound level) ↔ intensity ↔ amplitude²;** intensity decreases with distance ($\\propto 1/r^2$) and to attenuation.',
          'The **Doppler effect** shifts perceived frequency: **higher** when source and detector approach, **lower** when they separate; can be higher/lower/equal when moving the same direction.',
          'A source at or above the speed of sound creates **shock waves (sonic booms)**.',
          '**Strings and open pipes** support standing waves whose length is a multiple of **half-wavelengths** (all integers $n$); **closed pipes** use **odd** multiples of **quarter-wavelengths**.',
          'Medical **ultrasound** uses reflected high-frequency sound for both **imaging (diagnostic)** and **therapeutic** purposes.'
        ]
      }
    ],
    mnemonics: [
      '**Doppler — "Top toward":** use the top sign (numerator $+$, denominator $-$) for the object moving *toward* the other; approaching raises pitch, receding lowers it.',
      '**Constructive = Crests Coincide and Combine; Destructive = Don\'t line up, Diminish.** In phase builds, 180° out of phase cancels.',
      '**Nodes = No Displacement; Antinodes = All the Action (max amplitude).**',
      '**Sound speed: Solids > Liquids > Gases** — stiffer (higher bulk modulus) beats denser. "Sound loves a solid."',
      '**+10 dB = ×10 intensity.** Every ten decibels is one power of ten; +20 dB = 100×, +30 dB = 1000×.',
      '**Closed pipe = Odd only.** A closed pipe plays only **odd** harmonics, and its first overtone is the **3rd** harmonic, not the 2nd.',
      '**Resonance is about the right Frequency, not the loudness** — match the natural frequency to shatter the glass.',
      '**Intensity follows the square twice:** $I \\propto A^2$ (double amplitude → 4× intensity) and $I \\propto 1/r^2$ (double distance → ¼ intensity).'
    ],
    keyConcepts: [
      '**$v = f\\lambda$ is the master wave equation.** Speed is set by the medium, so when frequency changes (e.g., covering a pipe end), wavelength changes inversely — and vice versa.',
      '**Amplitude controls loudness; frequency controls pitch — and damping touches only amplitude.** Attenuation lowers volume but never changes pitch.',
      '**Standing-wave math hinges on the boundaries:** nodes at closed/fixed ends, antinodes at open/free ends. Half-wavelengths for strings & open pipes; quarter-wavelengths (odd only) for closed pipes.',
      '**The decibel scale is logarithmic**, compressing a $10^{16}$ range of intensities; a factor change in intensity adds $10\\log(I_f/I_i)$ dB.',
      '**The Doppler sign convention is the whole game:** assign the numerator to the detector and the denominator to the source, choosing each sign by whether that object moves toward (closing) or away.'
    ],
    equations: [
      { name: 'Wave speed', tex: 'v = f\\lambda', note: 'Propagation speed = frequency × wavelength. Speed is fixed by the medium.' },
      { name: 'Period', tex: 'T = \\dfrac{1}{f}', note: 'Seconds per cycle; the inverse of frequency.' },
      { name: 'Angular frequency', tex: '\\omega = 2\\pi f = \\dfrac{2\\pi}{T}', note: 'Frequency in radians per second; ω is always larger in magnitude than f.' },
      { name: 'Speed of sound', tex: 'v = \\sqrt{\\dfrac{B}{\\rho}}', note: 'B = bulk modulus, ρ = density. Stiffer media (solids) are faster; ~343 m/s in air at 20°C.' },
      { name: 'Doppler effect', tex: "f' = f\\,\\dfrac{v \\pm v_o}{v \\mp v_s}", note: 'Top sign = moving toward; bottom = moving away. Numerator = detector, denominator = source.' },
      { name: 'Intensity', tex: 'I = \\dfrac{P}{A}', note: 'Power per area (W/m²). I ∝ amplitude² and I ∝ 1/r².' },
      { name: 'Sound level', tex: '\\beta = 10\\log\\dfrac{I}{I_0}', note: 'In dB; reference I₀ = 1×10⁻¹² W/m² (threshold of hearing).' },
      { name: 'Change in sound level', tex: '\\beta_f = \\beta_i + 10\\log\\dfrac{I_f}{I_i}', note: 'Every +10 dB = ×10 intensity.' },
      { name: 'Beat frequency', tex: 'f_{beat} = |f_1 - f_2|', note: 'Pulsing volume from two nearby frequencies; used for tuning.' },
      { name: 'Standing wave λ — strings & open pipes', tex: '\\lambda = \\dfrac{2L}{n}', note: 'n = 1, 2, 3, … (number of half-wavelengths).' },
      { name: 'Standing wave f — strings & open pipes', tex: 'f = \\dfrac{nv}{2L}', note: 'n = 1, 2, 3, …; fundamental at n = 1.' },
      { name: 'Standing wave λ — closed pipes', tex: '\\lambda = \\dfrac{4L}{n}', note: 'n = 1, 3, 5, … (odd only — quarter-wavelengths).' },
      { name: 'Standing wave f — closed pipes', tex: 'f = \\dfrac{nv}{4L}', note: 'n = 1, 3, 5, …; first overtone is the 3rd harmonic.' }
    ]
  },

  questions: [
    {
      q: 'An opera singer has two precisely identical glasses. The singer produces as pure a tone as possible and shatters the first glass at a frequency of 808 Hz. The singer then sings a frequency of 838 Hz in the presence of the second glass. The second glass will likely:',
      type: 'mcq',
      choices: [
        'shatter after a longer amount of time because the applied frequency is higher.',
        'shatter after a shorter amount of time because the applied frequency is higher.',
        'not shatter because the applied frequency is not equal to the natural frequency of the glass.',
        'not shatter because higher-frequency sounds are associated with more attenuation.'
      ],
      correct: 2,
      explanation: 'Because the glasses are identical, the first shattering at 808 Hz means that is essentially the glass\'s natural (resonant) frequency. At 838 Hz the applied frequency is off-resonance, so the glass will not build the large amplitude needed to shatter. Although attenuation does rise with frequency, that is not the reason it fails to shatter, eliminating (D).'
    },
    {
      q: 'A child is practicing the first overtone on a flute. If the child\'s sibling covers one end of the flute for a brief second, how will the sound change, assuming that the new pitch represents the first overtone in the new setup?',
      type: 'mcq',
      choices: [
        'The pitch of the sound will go up.',
        'The pitch of the sound will go down.',
        'The pitch of the sound will not change.',
        'The change in the pitch depends on the starting pitch.'
      ],
      correct: 1,
      explanation: 'A flute is an open pipe; the first overtone (2nd harmonic) has λ = L. Covering one end makes it a closed pipe, whose first overtone is the 3rd harmonic with λ = 4L/3 — a longer wavelength. Since frequency is inversely proportional to wavelength, a longer wavelength means a lower frequency, so the pitch drops.'
    },
    {
      q: 'Which of the following is necessarily true regarding frequency, angular frequency, and period of a given wave?',
      type: 'mcq',
      choices: [
        'The magnitude of the angular frequency is larger than the magnitude of the period.',
        'The product of the frequency and period is equal to the angular frequency.',
        'The magnitude of the angular frequency is larger than the magnitude of the frequency.',
        'The product of the angular frequency and period is 1.'
      ],
      correct: 2,
      explanation: 'Since ω = 2πf, the angular frequency is always 2π times the frequency, so its magnitude is always larger (C). Angular frequency vs. period varies because they are inversely related, eliminating (A). The product f·T = 1 (they are inverses), not ω, eliminating (B). The product ω·T = 2π, not 1, eliminating (D).'
    },
    {
      q: 'Ultrasound machines calculate distance based upon:',
      type: 'mcq',
      choices: [
        'intensity of the reflected sound.',
        'travel time of the reflected sound.',
        'angle of incidence of the sound.',
        'the detected frequency of the sound.'
      ],
      correct: 1,
      explanation: 'Because the wave speed is known, the round-trip travel time of the reflected sound gives distance most directly and is what ultrasound machines use. Intensity (A) could in principle gauge distance but is not the method used; angle of incidence (C) positions structures but does not give distance; detected frequency (D) is only relevant to Doppler ultrasound.'
    },
    {
      q: 'The period for a certain wave is 34 ms. If there is a Doppler shift that doubles the perceived frequency, which of the following must be true? (I) The detector is moving toward the source at the speed of sound. (II) The source is moving toward the detector at half the speed of sound. (III) The perceived period is 17 ms.',
      type: 'mcq',
      choices: [
        'III only',
        'I and IV only',
        'II and III only',
        'I, II, and IV only'
      ],
      correct: 0,
      explanation: 'Period is inversely related to frequency, so doubling the perceived frequency halves the period from 34 ms to 17 ms — statement III must be true. Although either condition I or II would double the frequency, neither must be true (the opposite could produce the same shift), so only III is necessarily true.'
    },
    {
      q: 'If the speed of a wave is 3 m/s and its wavelength is 10 cm, what is its period?',
      type: 'mcq',
      choices: [
        '0.01 s',
        '0.03 s',
        '0.1 s',
        '0.3 s'
      ],
      correct: 1,
      explanation: 'Using v = fλ with v = 3 m/s and λ = 0.10 m gives f = 3 / 0.10 = 30 Hz. The period is the inverse: T = 1/f = 1/30 ≈ 0.03 s.'
    },
    {
      q: 'What is the angular frequency of the third harmonic in a pipe of length 1.5 m with one closed end? (Note: the speed of sound is approximately 340 m/s.)',
      type: 'mcq',
      choices: [
        '170 radians per second',
        '170π radians per second',
        '340 radians per second',
        '340π radians per second'
      ],
      correct: 3,
      explanation: 'For a closed pipe, λ = 4L/n. At the 3rd harmonic, λ = 4(1.5)/3 = 2 m. Then f = v/λ = 340/2 = 170 Hz. Angular frequency ω = 2πf = 2π(170) = 340π radians per second.'
    },
    {
      q: 'A certain sound level is increased by 20 dB. By what factor does its intensity increase?',
      type: 'mcq',
      choices: [
        '2',
        '20',
        '100',
        'log 2'
      ],
      correct: 2,
      explanation: 'Using β = 10 log(I/I₀), a change of +20 dB means 20 = 10 log(I_f/I_i), so log(I_f/I_i) = 2 and I_f/I_i = 10² = 100. Each +10 dB corresponds to a tenfold increase in intensity.'
    },
    {
      q: 'In some forms of otosclerosis, the stapedial footplate (which transmits vibrations from the middle-ear bones to the cochlear fluid) becomes fixed in position, limiting its displacement during vibration. Which symptom would most likely be seen?',
      type: 'mcq',
      choices: [
        'An increase in the perceived volume of sounds',
        'A decrease in the perceived volume of sounds',
        'An increase in the perceived pitch of sounds',
        'A decrease in the perceived pitch of sounds'
      ],
      correct: 1,
      explanation: 'Limited displacement of the footplate means reduced vibration amplitude. Because intensity is related to amplitude and sound level (volume) is related to intensity, the perceived volume decreases. Pitch (C and D) depends on frequency, not amplitude, so it is unaffected.'
    },
    {
      q: 'If two waves with the same frequency are 180° out of phase, what is the amplitude of the resultant wave if the amplitudes of the original waves are 5 cm and 3 cm?',
      type: 'mcq',
      choices: [
        '2 cm',
        '3 cm',
        '5 cm',
        '8 cm'
      ],
      correct: 0,
      explanation: 'Waves 180° out of phase interfere destructively, so the resultant amplitude is the difference of the two amplitudes: 5 cm − 3 cm = 2 cm.'
    },
    {
      q: 'A student is measuring sound frequencies from the side of a road while walking east. For which situation could the student determine that the difference between perceived and actual emitted frequency is zero?',
      type: 'mcq',
      choices: [
        'A plane flying directly above the student from east to west',
        'A police car passing the student with its siren on',
        'A person playing piano in a house on the street',
        'A dog barking in a car that moves east'
      ],
      correct: 3,
      explanation: 'A zero Doppler shift requires no relative motion between source and detector. If the dog\'s car moves east at the same speed the student walks east, their relative velocity can be zero, producing no shift. In every other choice the source and student are necessarily moving relative to each other.'
    },
    {
      q: 'In which of the following media does sound travel the fastest?',
      type: 'mcq',
      choices: [
        'Vacuum',
        'Air',
        'Water',
        'Glass'
      ],
      correct: 3,
      explanation: 'Sound is a mechanical wave that cannot travel through a vacuum (A is impossible). Among the media, propagation is fastest in solids, then liquids, then gases — so glass (a solid) is fastest, faster than water (liquid) and air (gas).'
    },
    {
      q: 'Shock waves have the greatest impact when the source is traveling:',
      type: 'mcq',
      choices: [
        'just below the speed of sound.',
        'exactly at the speed of sound.',
        'just above the speed of sound.',
        'well above the speed of sound.'
      ],
      correct: 1,
      explanation: 'Shock waves build maximally when wave fronts pile up most tightly, which happens when the source travels exactly at the speed of sound. Once the source exceeds the speed of sound, the fronts trail behind and destructively interfere, mitigating some of the effect.'
    },
    {
      q: 'As a teacher approaches a student studying with the radio playing loudly nearby, the teacher experiences the Doppler effect. Which statements remain true as the teacher moves closer? (I) The apparent frequency of the music is increased. (II) The same apparent frequency would result if the teacher were stationary and the student approached at the same speed. (III) The apparent velocity of the wave is decreased.',
      type: 'mcq',
      choices: [
        'I only',
        'II only',
        'I and III only',
        'I, II, and III'
      ],
      correct: 0,
      explanation: 'The teacher (detector) moves toward a stationary source, so the perceived frequency increases — statement I is true. Statement II is false: a moving source produces a similar but not identical shift compared with a moving detector. Statement III is false because the wave speed is set by the medium and does not change; only the frequency shifts. So only I is true.'
    },
    {
      q: 'Ignoring attenuation, how does the intensity of a sound change as the distance from the source doubles?',
      type: 'mcq',
      choices: [
        'It is four times as intense.',
        'It is twice as intense.',
        'It is half as intense.',
        'It is one-quarter as intense.'
      ],
      correct: 3,
      explanation: 'Intensity equals power divided by area, and the wave spreads over concentric spheres with surface area 4πr². Since intensity ∝ 1/r², doubling the distance increases the area fourfold and reduces the intensity to one-quarter.'
    }
  ]
};
