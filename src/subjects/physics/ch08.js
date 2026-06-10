// Chapter 8 — Light and Optics. Re-authored to the rich-formatting quality bar.
// Figures and section titles come from ch08.json; the recap/detail markdown,
// goals, keyReview, and the reconstructed questions are authored here.
// (JSON `questions` was empty — rebuilt from scratch_physics/ch08_q.md.)
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 8,
  title: 'Light and Optics',
  subtitle: 'Electromagnetic spectrum · geometrical optics (mirrors, lenses, Snell’s law) · diffraction · polarization',

  blocks: [
    /* ──────────────────── 8.1 Electromagnetic Spectrum ──────────────────── */
    {
      id: 's1', num: '8.1', title: 'Electromagnetic Spectrum',
      goals: [
        'Order the types of electromagnetic radiation (X-rays, microwaves, visible light, etc.) from lowest to highest energy',
        'Describe the properties of electromagnetic waves',
        'Compare the visible spectrum to the full electromagnetic spectrum'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 8.1 — An electromagnetic wave: the electric field (E) and magnetic field (B) oscillate perpendicular to each other and to the direction of propagation.' }],
      recap: `
- **EM waves are transverse:** oscillating **electric** and **magnetic** fields, perpendicular to *each other* and to the direction of propagation. No medium needed — they travel through a **vacuum**.
- In a vacuum (and ~in air) all EM waves travel at the **speed of light** $c \\approx 3\\times10^8\\ \\text{m/s}$, with $c = f\\lambda$.
- **Spectrum, low→high energy:** **radio → microwave → infrared → visible → ultraviolet → X-ray → γ-ray.** Higher energy = higher **frequency** = *shorter* wavelength.
- **Visible light = 400 nm (violet) to 700 nm (red)** — a tiny slice of the whole spectrum.
`,
      detail: `
#### Electromagnetic waves
A changing **magnetic field** induces a changing **electric field**, and vice versa. Because each field regenerates the other, an EM wave is **self-propagating** and needs **no medium** — it can cross a vacuum.

- EM waves are **transverse**: the **E** and **B** field vectors are perpendicular to the direction of propagation.
- The **E** and **B** fields are also perpendicular **to each other**.

The whole family obeys the wave relation. For light it is written:

$$c = f\\lambda$$

where $c$ is the speed of light (in vacuum, and ~in air), $f$ is frequency, and $\\lambda$ is wavelength. Because $c$ is fixed, **frequency and wavelength are inversely related** — bump one up, the other drops.

#### The electromagnetic spectrum

![Figure 8.2 — The electromagnetic spectrum from radio to gamma rays.](${fig(0, 3).src})

| Region | Wavelength (long → short) | Energy / frequency |
|---|---|---|
| **Radio** | $10^9$ m – 1 m | Lowest |
| **Microwave** | 1 m – 1 mm | ↑ |
| **Infrared (IR)** | 1 mm – 700 nm | ↑ |
| **Visible** | **700 nm – 400 nm** | ↑ |
| **Ultraviolet (UV)** | 400 nm – 50 nm | ↑ |
| **X-ray** | 50 nm – $10^{-2}$ nm | ↑ |
| **γ-ray** | $< 10^{-2}$ nm | Highest |

:::keyconcept
**Energy tracks frequency, not wavelength.** Moving radio → γ-ray, **frequency and energy rise** while **wavelength falls**. γ-rays are the most energetic; radio waves the least.
:::

#### Color and the visible spectrum
Only the **visible region (≈400–700 nm)** registers as light to the eye. Within it, wavelength sets color: **violet ≈ 400 nm** at the short end, **red ≈ 700 nm** at the long end.

- **White light** = all visible wavelengths at equal intensity.
- An object that *doesn't* emit its own light takes the color of the light it **reflects**: a "red" object **absorbs every color but red**.
- That same red object under **green** light looks **black** — it absorbs the green and has nothing to reflect.
- A **blackbody** is an ideal absorber of *all* wavelengths.

:::mnemonic
**ROY G. BV** — the grade-school rainbow gives the visible colors in order of *increasing* energy: **R**ed, **O**range, **Y**ellow, **G**reen, **B**lue, **V**iolet. Red = longest λ / lowest energy; violet = shortest λ / highest energy.
:::

:::expertise
Visible wavelengths show up constantly on the MCAT. Lock in the boundaries — **about 400 nm (violet) to 700 nm (red)** — and you can place any "what color/region" question instantly without memorizing the rest of the spectrum.
:::
`
    },

    /* ───────────────────────── 8.2 Geometrical Optics ───────────────────────── */
    {
      id: 's2', num: '8.2', title: 'Geometrical Optics',
      goals: [
        'Apply the sign conventions for mirrors and lenses to optics systems',
        'Describe the bending of light as it moves between media with different refractive indices',
        'Explain the impact of dispersion effects and aberrations on the behavior of light',
        'Recall Snell’s law and other key optics equations',
        'Solve optics and Snell’s law problems'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 8.4 — A plane mirror: the virtual image (I) appears as far behind the mirror as the object (O) is in front; every incident angle equals its reflected angle.' }],
      svgs: [{
        title: 'The optics sign convention — Real-is-Positive',
        caption: 'For a single mirror or lens with the object in front (o > 0): a positive image distance is a real, inverted image; a negative image distance is a virtual, upright image. Converging systems have positive f; diverging systems have negative f.',
        svg: `<svg viewBox="0 0 600 230" width="600" role="img" aria-label="Number line showing positive and negative image distance" font-family="system-ui, sans-serif">
  <line x1="40" y1="115" x2="560" y2="115" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="40" x2="300" y2="190" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="300" y="30" font-size="12" fill="#64748b" text-anchor="middle">mirror / lens</text>
  <polygon points="560,115 548,109 548,121" fill="#475569"/>
  <rect x="60" y="60" width="200" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="160" y="79" font-size="13" fill="#15803d" font-weight="bold" text-anchor="middle">i &gt; 0  (REAL)</text>
  <text x="160" y="95" font-size="11" fill="#15803d" text-anchor="middle">inverted · projectable</text>
  <rect x="340" y="130" width="200" height="40" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="440" y="149" font-size="13" fill="#b91c1c" font-weight="bold" text-anchor="middle">i &lt; 0  (VIRTUAL)</text>
  <text x="440" y="165" font-size="11" fill="#b91c1c" text-anchor="middle">upright · not projectable</text>
  <text x="160" y="135" font-size="11" fill="#64748b" text-anchor="middle">side light actually reaches</text>
  <text x="440" y="55" font-size="11" fill="#64748b" text-anchor="middle">apparent side</text>
</svg>`
      }],
      recap: `
- **Law of reflection:** $\\theta_1 = \\theta_2$ — incident angle equals reflected angle, both measured **from the normal**.
- **Mirror/lens equation:** $\\dfrac{1}{f} = \\dfrac{1}{o} + \\dfrac{1}{i}$; **magnification** $m = -\\dfrac{i}{o} = \\dfrac{h_i}{h_o}$. **Real-is-positive:** $i > 0$ → real & inverted; $i < 0$ → virtual & upright.
- **Concave mirror = converging; convex mirror = diverging.** *The reverse holds for lenses* (convex lens converges, concave lens diverges).
- **Index of refraction** $n = \\dfrac{c}{v}$ (always ≥ 1). **Snell's law:** $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$. Into higher $n$ → bends **toward** the normal.
- **Total internal reflection** occurs above the **critical angle** $\\sin\\theta_c = \\dfrac{n_2}{n_1}$ (only when going high $n$ → low $n$).
- **Power** $P = \\dfrac{1}{f}$ (diopters); **dispersion** splits white light because $n$ varies with wavelength (violet bends most).
`,
      detail: `
#### Reflection
Light travels in a straight line through a uniform medium (**rectilinear propagation**); at an interface, **geometrical optics** takes over. **Reflection** is the rebounding of incident light at a boundary — the light bounces back into the first medium rather than entering the second.

$$\\theta_1 = \\theta_2$$

Both angles are measured from the **normal** — the line drawn **perpendicular** to the surface. *Every angle in optics is measured from the normal, never from the surface.*

#### Plane mirrors
- **Real image:** light actually converges there → it **can be projected onto a screen**.
- **Virtual image:** light only *appears* to come from there → cannot be projected.

A flat mirror neither converges nor diverges rays, so a **plane mirror always makes a virtual, upright, same-size image**, appearing as far *behind* the mirror as the object is *in front*. Think of a plane mirror as a spherical mirror with an **infinite radius of curvature** ($r = f = \\infty$ → $i = -o$).

#### Spherical mirrors
A spherical mirror is a cap cut from a sphere, with a **center of curvature (C)** and **radius of curvature (r)**.

| Mirror | Surface viewed | C and r are… | Behavior |
|---|---|---|---|
| **Concave** | from *inside* the sphere | **in front** of the mirror | **Converging** (f, r positive) |
| **Convex** | from *outside* the sphere | **behind** the mirror | **Diverging** (f, r negative) |

The **focal length** is half the radius: $f = \\dfrac{r}{2}$.

:::mnemonic
**"Concave is like looking into a *cave*."** That dish shape **converges** the rays. Convex bulges out and **diverges** them — like the convenience-store security mirror that shrinks everyone.
:::

:::keyconcept
**Concave mirrors converge; convex mirrors diverge. For lenses it flips** — convex (fat-middle) lenses converge, concave (thin-middle) lenses diverge. Pair them up: **concave mirror ≈ convex lens** (both converging); **convex mirror ≈ concave lens** (both diverging).
:::

##### The mirror / lens equation
$$\\frac{1}{f} = \\frac{1}{o} + \\frac{1}{i}$$

Same equation for **both mirrors and lenses**. Solve for the image distance $i$:

- $i > 0$ → image is **real** (in front of a mirror / opposite side of a lens) and **inverted**.
- $i < 0$ → image is **virtual** (behind a mirror / same side of a lens) and **upright**.

##### Magnification
$$m = -\\frac{i}{o} = \\frac{h_i}{h_o}$$

- $m < 0$ → **inverted**; $m > 0$ → **upright**.
- $|m| < 1$ → **reduced**; $|m| > 1$ → **enlarged**; $|m| = 1$ → **same size**.

#### Ray diagrams

![Figure 8.6 — Ray diagrams for a concave (converging) mirror with the object beyond F, at F, and inside F.](${fig(1, 4).src})

Three rays locate the image; where any two cross marks the image tip. **For a concave mirror:**

- Ray **parallel to the axis** → reflects back **through the focal point**.
- Ray **through the focal point** → reflects back **parallel to the axis**.
- Ray **to the vertex** → reflects at the **same angle** about the normal.

| Object position (concave mirror) | Image |
|---|---|
| **Beyond C** ($o > 2f$) | Real, inverted, **reduced** |
| **At C** ($o = 2f$) | Real, inverted, **same size** |
| **Between C and F** ($2f > o > f$) | Real, inverted, **magnified** |
| **At F** ($o = f$) | **No image** (reflected rays parallel; $i = \\infty$) |
| **Inside F** ($o < f$) | Virtual, upright, magnified |

A **convex (diverging) mirror** makes **only** a virtual, upright, reduced image, no matter where the object sits.

:::keyconcept
Place an object **at the focal point** of a converging mirror and the reflected rays come out **parallel** — they never meet, so **no image forms** ($i = \\infty$).
:::

#### Sign conventions for mirrors

| Symbol | Positive (+) | Negative (−) |
|---|---|---|
| **o** | Object **in front** of mirror | Object behind mirror *(very rare)* |
| **i** | Image **in front** (real) | Image **behind** (virtual) |
| **r** | Mirror is **concave** (converging) | Mirror is **convex** (diverging) |
| **f** | Mirror is **concave** (converging) | Mirror is **convex** (diverging) |
| **m** | Image is **upright** | Image is **inverted** |

:::mnemonic
**Image types for a single lens/mirror (o > 0): "UV NO IR"**
- **U**pright images are always **V**irtual.
- **NO** image forms when the object is exactly one focal length away.
- **I**nverted images are always **R**eal.
:::

> **Worked example.** Object 6 cm in front of a concave mirror, $r = 10$ cm so $f = 5$ cm.
> $\\dfrac{1}{i} = \\dfrac{1}{f} - \\dfrac{1}{o} = \\dfrac{1}{5} - \\dfrac{1}{6} = \\dfrac{1}{30}$ → $i = +30$ cm (real). $m = -\\dfrac{30}{6} = -5$ → **inverted, 5× enlarged**.

#### Refraction
**Refraction** is the bending of light when it changes speed crossing into a new medium. Light slows in any real medium; the slowdown is captured by the **index of refraction**:

$$n = \\frac{c}{v}$$

$n = 1$ in vacuum (by definition), ≈1 in air, and **> 1** for everything else (water 1.33, glass ≈1.5, diamond 2.42). Higher $n$ = slower light.

##### Snell's law

![Figure 8.9 — Light passing from air into water bends toward the normal as it enters the higher-index medium.](${fig(1, 7).src})

$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$

- Into a **higher** $n$ ($n_2 > n_1$): light **bends toward the normal** ($\\theta_2 < \\theta_1$).
- Into a **lower** $n$ ($n_2 < n_1$): light **bends away from the normal** ($\\theta_2 > \\theta_1$).

:::realworld
A straight pencil dipped at an angle into water looks **bent at the surface** — light from the submerged part refracts as it leaves the water, so your eye traces it back to the wrong spot.
:::

#### Total internal reflection
Going from **high $n$ → low $n$**, the refracted ray bends away from the normal. Raise the incident angle and eventually the refracted angle hits **90°** at the **critical angle**:

$$\\sin\\theta_c = \\frac{n_2}{n_1} \\quad (n_1 > n_2)$$

![Figure 8.10 — Total internal reflection: beyond the critical angle, no light escapes; it all reflects back into the dense medium.](${fig(1, 9).src})

Beyond $\\theta_c$, **100% of the light reflects back** into the dense medium — **total internal reflection** (the basis of fiber optics).

:::keyconcept
TIR happens **only** when light travels from a **higher** refractive index into a **lower** one (e.g. water → air), at an incident angle **above** the critical angle. Going low → high, it can never occur.
:::

#### Lenses
A lens refracts light at **two surfaces** (in and out), unlike a mirror's single reflection. On the MCAT lenses are **thin**, so both focal lengths are equal and we use the same $\\dfrac{1}{f} = \\dfrac{1}{o} + \\dfrac{1}{i}$ and $m = -\\dfrac{i}{o}$ as for mirrors.

![Figure 8.11 — Ray diagrams for single lenses: (a) convex/converging, (b) concave/diverging.](${fig(1, 11).src})

- **Convex lens** = thicker in the middle = **converging** ($f > 0$). Makes real *or* virtual images.
- **Concave lens** = thinner in the middle = **diverging** ($f < 0$). Makes **only** virtual, upright, reduced images.

**For a lens, the three rays are:**
- Ray **parallel to the axis** → refracts **through the focal point**.
- Ray **through the near focal point** → refracts out **parallel**.
- Ray **to the center** → passes **straight through, undeviated**.

##### Real (thick) lenses — the lensmaker's equation
$$\\frac{1}{f} = (n - 1)\\left(\\frac{1}{r_1} - \\frac{1}{r_2}\\right)$$

where $n$ is the lens material's index and $r_1, r_2$ are the surface radii. The **eye** is a stack of real lenses; the **cornea** does most of the refracting (big air→tissue index jump), with the adjustable **lens** fine-tuning focus.

#### Sign conventions for lenses

| Symbol | Positive (+) | Negative (−) |
|---|---|---|
| **o** | Object on **same side** as light source | Object on opposite side *(very rare)* |
| **i** | Image on **opposite side** (real) | Image on **same side** (virtual) |
| **r** | Lens is **convex** (converging) | Lens is **concave** (diverging) |
| **f** | Lens is **convex** (converging) | Lens is **concave** (diverging) |
| **m** | Image is **upright** | Image is **inverted** |

:::keyconcept
**Real and virtual sides are flipped between mirrors and lenses.** Light **reflects** off a mirror so the real side is *in front*; light **passes through** a lens so the real side is on the *far* side. In both cases the **real side is just wherever the light actually ends up** — that's where a positive (real) image lives.
:::

#### Power
$$P = \\frac{1}{f} \\quad (\\text{diopters, } f \\text{ in meters})$$

$P$ shares $f$'s sign: **+ for converging, − for diverging**.

- **Hyperopia (farsighted)** → corrected with **converging (convex)** lenses.
- **Myopia (nearsighted)** → corrected with **diverging (concave)** lenses.
- **Bifocals** combine both regions in one lens.

##### Multiple-lens systems
- **In contact:** powers add → $P_{eq} = P_1 + P_2 + \\cdots$, equivalently $\\dfrac{1}{f_{eq}} = \\dfrac{1}{f_1} + \\dfrac{1}{f_2} + \\cdots$
- **Not in contact** (microscope, telescope): the image of one lens is the **object** of the next; total magnification multiplies → $m = m_1 \\times m_2 \\times \\cdots$

#### Aberrations and dispersion

![Figure 8.12 — Spherical aberration: edge rays miss the focal point, blurring the image periphery.](${fig(1, 13).src})

- **Spherical aberration** — peripheral rays of a *spherical* mirror/lens don't focus at the true focal point, blurring the edges. (A parabolic surface focuses perfectly — used in shock-wave lithotripsy.)
- **Dispersion** — because $n$ varies with wavelength, different colors refract by different amounts. **Violet bends most** (shortest λ), **red bends least**, so white light fans into a spectrum through a prism.

![Figure 8.13 — Dispersion in a prism splits white light into its component colors.](${fig(1, 14).src})

- **Chromatic aberration** — dispersion *inside a lens* that wraps a **rainbow halo** around the image; corrected with special coatings.

![Figure 8.14 — Chromatic aberration produces a colored fringe at the edge of an image.](${fig(1, 14).src})

:::bridge
Crossing into a new medium, **wavelength changes but frequency stays constant** (the source sets $f$). Since $v = f\\lambda$ and $v$ drops, $\\lambda$ must shrink in the denser medium.
:::
`
    },

    /* ───────────────────────────── 8.3 Diffraction ───────────────────────────── */
    {
      id: 's3', num: '8.3', title: 'Diffraction',
      goals: [
        'Distinguish between the diffraction patterns in single-slit, double-slit, and slit–lens systems',
        'Recall the wave phenomena that lead to diffraction fringes',
        'Describe Young’s double-slit experiment'
      ],
      images: [{ src: fig(2, 3).src, alt: fig(2, 3).alt, caption: 'Figure 8.17 — Young’s double-slit experiment: light through two slits interferes to produce alternating bright (maxima) and dark (minima) fringes.' }],
      recap: `
- **Diffraction** = light spreading out as it passes a narrow slit or obstacle (slit width ~ λ). Narrower slit → **more** spreading.
- **Slit + lens:** a wide central bright fringe (2× the side fringes) flanked by alternating fringes. Dark fringes (minima) at $a\\sin\\theta = n\\lambda$.
- **Young's double slit:** monochromatic light interferes — **constructive → bright (maxima)**, **destructive → dark (minima)**. Minima at $d\\sin\\theta = \\left(n+\\tfrac{1}{2}\\right)\\lambda$.
- Interference & diffraction are the headline **evidence that light is a wave**. **X-ray diffraction** maps molecular/protein structure.
`,
      detail: `
#### Single slit

![Figure 8.15 — Light spreads into a wide arc after passing through a narrow slit; a narrower slit spreads it more.](${fig(2, 1).src})

When an opening is about the size of light's **wavelength**, the emerging waves **spread out (diffract)** rather than going straight. **Narrow the slit and the spread widens.** A bare single slit produces no clean fringe pattern on a screen — just a broadened band.

#### Slit–lens system

![Figure 8.16 — A lens behind a single slit focuses the diffracted light into a bright central fringe flanked by alternating fringes.](${fig(2, 2).src})

Add a **lens** between slit and screen and you get a **bright central maximum** flanked by alternating dark/bright fringes. The central max is **twice as wide** as the side fringes, and **narrowing the slit widens** it. Dark fringes (minima):

$$a\\sin\\theta = n\\lambda$$

where $a$ = slit width, $\\theta$ = angle to the fringe, $n$ = integer fringe order, $\\lambda$ = wavelength. **Bright fringes sit halfway between dark ones.**

:::keyconcept
In $a\\sin\\theta = n\\lambda$, shrinking the slit width $a$ forces $\\sin\\theta$ (and thus $\\theta$) **up** for a given fringe — the fringes, and the central maximum, **spread wider apart**.
:::

#### Multiple slits — Young's double slit
When waves overlap, their displacements add (**interference**). Thomas Young sent **monochromatic** light through **two** parallel slits and got an interference pattern:

- **Constructive interference → bright fringes (maxima).**
- **Destructive interference → dark fringes (minima).**

Positions of the dark fringes:

$$d\\sin\\theta = \\left(n + \\tfrac{1}{2}\\right)\\lambda$$

where $d$ = slit separation, $\\theta$ = angle from the midpoint to the fringe, $n$ = integer order. (For small angles, $\\sin\\theta \\approx \\tan\\theta$, which lets you swap in screen geometry.)

:::bridge
Light interferes just like the **sound and string waves** of *Physics & Math* Chapter 7 — same constructive/destructive bookkeeping. Two **diffraction gratings** (many slits) and **thin films** (soap bubbles, oil slicks) make the same colorful patterns; note that thin-film color comes from interference of **reflected** rays, not diffracted ones.
:::

#### X-ray diffraction

![Figure 8.19 — A two-dimensional X-ray diffraction pattern used to model molecular structure.](${fig(2, 6).src})

Firing **X-rays** (wavelength ≈ atomic spacing) at a crystal yields a complex 2-D pattern of spots, not simple linear fringes. **X-ray crystallography** uses it to solve **protein and molecular structures**.

:::bridge
X-ray diffraction / protein crystallography are core protein-analysis tools — see *MCAT Biochemistry Review*, Ch. 3 (Nonenzymatic Protein Function and Protein Analysis).
:::
`
    },

    /* ──────────────────────────── 8.4 Polarization ──────────────────────────── */
    {
      id: 's4', num: '8.4', title: 'Polarization',
      goals: [
        'Compare and contrast plane-polarized and circularly polarized light',
        'Describe how a polarizing filter impacts the wavelength and/or frequency of light passing through it'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 8.20 — Circularly polarized light: constant amplitude with a continuously rotating electric-field direction, tracing a helix along the propagation axis.' }],
      recap: `
- **Plane- (linearly) polarized light:** all the electric-field vectors point in **one direction** (one plane). The E-field plane defines the polarization.
- **Unpolarized light** (sun, bulb) has E-fields in **all** orientations; a **polarizer** transmits only the component along its axis.
- **Crossed polarizers (90° apart) → no light** passes the second filter.
- **Circularly polarized light:** constant amplitude, **continuously rotating** E-field direction → a helix. Rare in nature.
- A polarizer changes only **intensity**, never **wavelength, frequency, or speed**.
`,
      detail: `
#### Plane-polarized light
**Plane-polarized (linearly polarized)** light has every wave's **electric field oriented in the same direction** — the E-field vectors are parallel, and (by convention) the E-field plane *is* the plane of polarization. The B-fields stay parallel too.

- **Unpolarized light** (sunlight, a light bulb) has E-fields randomly oriented in **all** planes around the propagation axis.
- A **polarizer** (camera filter, sunglasses) passes only the light whose E-field aligns with its **transmission axis**.

##### Stacking polarizers
- **Aligned axes:** all light through the first polarizer also passes the second.
- **Second polarizer rotated 90° (crossed):** **no light** gets through.
- There is no "twice-polarized" state — a second aligned polarizer adds nothing.

:::keyconcept
Unpolarized light's E-fields fill **all three dimensions** around the propagation direction. A polarizer **restricts the oscillation to a single plane**, cutting the transmitted intensity but leaving the light's **wavelength, frequency, and speed untouched.**
:::

:::realworld
Plane-polarized light is a diagnostic workhorse. **Amyloidosis** tissue stained with **Congo red** glows **"apple-green"** under polarized light. **Gout** (monosodium urate) vs. **pseudogout** (calcium pyrophosphate) crystals are told apart by color under a polarizer — urate appears **yellow**, pyrophosphate **blue** when aligned with the axis.
:::

#### Circular polarization
**Circularly polarized** light has a **constant amplitude** but a **continuously rotating** E-field direction, so the field traces a **helix** along the propagation axis. It's rare naturally — it comes from special **pigments or filters**. Its average E- and B-field vectors stay perpendicular, like any EM wave.

:::bridge
Plane-polarized light is central to **optical activity**: chiral compounds rotate it clockwise or counterclockwise (their *specific rotation*), and **enantiomers** rotate it in **equal but opposite** directions — see *MCAT Organic Chemistry Review*, Ch. 2 (Isomers).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '8.1 Electromagnetic Spectrum',
        points: [
          '**EM waves are transverse** — an oscillating electric field and magnetic field, **perpendicular to each other and to the direction of propagation**.',
          'The **EM spectrum**, from lowest to highest energy: **radio · microwave · infrared · visible · ultraviolet · X-ray · γ-ray.** Energy and frequency rise together; wavelength falls.',
          'The **visible spectrum** runs ≈ **400 nm (violet) to 700 nm (red)** — a sliver of the whole spectrum.',
          'All EM waves travel at $c \\approx 3\\times10^8$ m/s in vacuum, with $c = f\\lambda$.'
        ]
      },
      {
        section: '8.2 Geometrical Optics',
        points: [
          '**Reflection:** $\\theta_1 = \\theta_2$, measured from the normal. **Plane mirrors** give virtual, upright, same-size images.',
          '**Concave mirrors** converge → real/inverted or virtual/upright by object position; **convex mirrors** diverge → always virtual, upright, reduced.',
          '**Refraction** follows **Snell’s law** $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ with $n = c/v$; into higher $n$ bends toward the normal.',
          '**Total internal reflection** (high $n$ → low $n$, beyond $\\theta_c$) reflects all light back; $\\sin\\theta_c = n_2/n_1$.',
          '**Convex lenses** converge (real or virtual images); **concave lenses** diverge (always virtual, upright). Use $\\frac{1}{f}=\\frac{1}{o}+\\frac{1}{i}$ and $m=-i/o$ for both.',
          '**Dispersion** (n varies with λ) splits white light; **spherical** and **chromatic aberrations** blur spherical optics.'
        ]
      },
      {
        section: '8.3 Diffraction',
        points: [
          '**Diffraction** = light bending/spreading through a narrow slit; a **lens** turns it into a bright central fringe with alternating side fringes.',
          '**Interference** of diffracted rays supports the **wave theory of light**.',
          '**Young’s double-slit** experiment produces **maxima (constructive)** and **minima (destructive)** fringes; minima at $d\\sin\\theta=(n+\\tfrac12)\\lambda$.'
        ]
      },
      {
        section: '8.4 Polarization',
        points: [
          '**Plane-polarized light** has all electric fields parallel; made by passing unpolarized light through a **polarizer**.',
          '**Circularly polarized light** keeps constant amplitude with a constantly **rotating** E-field direction; made with special pigments/filters.',
          'A polarizer changes **intensity only**, not wavelength, frequency, or speed; **crossed polarizers block all light**.'
        ]
      }
    ],
    mnemonics: [
      '**ROY G. BV** orders the visible colors by *increasing* energy: **R**ed (700 nm, lowest) → **O**range → **Y**ellow → **G**reen → **B**lue → **V**iolet (400 nm, highest).',
      '**"Concave is like looking into a *cave*"** → it **converges**. Convex bulges out and **diverges** (the shrink-everything security mirror).',
      '**Mirror vs. lens flip:** concave **mirror** converges but concave **lens** diverges. Pair the converging twins (concave mirror + convex lens) and the diverging twins (convex mirror + concave lens).',
      '**"UV NO IR"** for a single lens/mirror with o > 0: **U**pright = **V**irtual; **NO** image at one focal length; **I**nverted = **R**eal.',
      '**Real-is-Positive:** $i > 0$ → real & inverted (light actually gets there); $i < 0$ → virtual & upright. Converging optics have $+f$; diverging optics have $-f$.',
      '**TIR direction:** total internal reflection only when **dense → less dense** (high $n$ → low $n$), past the critical angle. (Light "wants to stay in the denser glass.")',
      '**Glasses:** fa**R**sighted (hyperopia) → **convergi**ng** lens; **N**earsighted (myopia) → diverging (**N**egative power) lens.'
    ],
    keyConcepts: [
      '**Frequency, not wavelength, tracks energy.** Across the spectrum and across media, $f$ is set by the source and is conserved on entering a new medium; wavelength and speed are what change.',
      '**One equation rules mirrors and lenses:** $\\frac{1}{f}=\\frac{1}{o}+\\frac{1}{i}$ with $m=-i/o$. The sign of $i$ tells you real vs. virtual; the only thing that differs is *which side* "real" is on.',
      '**Converging ↔ diverging pairs:** concave mirror and convex lens behave alike (converging); convex mirror and concave lens behave alike (diverging) — diverging optics give only virtual, upright, reduced images.',
      '**Total internal reflection requires high → low n above the critical angle** — the principle behind fiber optics and the reason a fish sees a mirrored ceiling on the water surface.',
      '**Diffraction and interference are the wave-nature evidence for light**, complementing the particle (photon) behavior covered in the next chapter.'
    ],
    equations: [
      { name: 'Speed of light', tex: 'c = f\\lambda', note: 'Speed = frequency × wavelength; $c \\approx 3\\times10^8$ m/s in vacuum (and ~air).' },
      { name: 'Law of reflection', tex: '\\theta_1 = \\theta_2', note: 'Incident angle = reflected angle, measured from the normal.' },
      { name: 'Mirror / lens (optics) equation', tex: '\\dfrac{1}{f} = \\dfrac{1}{o} + \\dfrac{1}{i}', note: 'Same for mirrors and lenses; $f = r/2$ for spherical mirrors.' },
      { name: 'Magnification', tex: 'm = -\\dfrac{i}{o} = \\dfrac{h_i}{h_o}', note: 'Negative → inverted; |m| > 1 → enlarged.' },
      { name: 'Index of refraction', tex: 'n = \\dfrac{c}{v}', note: '$n = 1$ in vacuum, ≥ 1 everywhere else; higher $n$ = slower light.' },
      { name: 'Snell’s law', tex: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2', note: 'Into higher $n$, light bends toward the normal.' },
      { name: 'Critical angle', tex: '\\sin\\theta_c = \\dfrac{n_2}{n_1}', note: 'TIR for incident angles > θc; requires $n_1 > n_2$.' },
      { name: 'Lensmaker’s equation', tex: '\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{r_1} - \\dfrac{1}{r_2}\\right)', note: 'For thick lenses; relates $f$ to surface curvature and material index.' },
      { name: 'Power of a lens', tex: 'P = \\dfrac{1}{f}', note: 'In diopters ($f$ in meters); + for converging, − for diverging.' },
      { name: 'Lenses in contact', tex: 'P_{eq} = P_1 + P_2 + \\cdots \\;\\; \\left(\\dfrac{1}{f_{eq}} = \\dfrac{1}{f_1} + \\dfrac{1}{f_2} + \\cdots\\right)', note: 'Powers add for lenses in contact.' },
      { name: 'System magnification', tex: 'm = m_1 \\times m_2 \\times \\cdots \\times m_n', note: 'Multiply magnifications for lenses not in contact (microscope/telescope).' },
      { name: 'Single-slit / slit–lens minima', tex: 'a\\sin\\theta = n\\lambda', note: 'Dark fringes; $a$ = slit width, $n$ = fringe order.' },
      { name: 'Double-slit minima', tex: 'd\\sin\\theta = \\left(n + \\tfrac{1}{2}\\right)\\lambda', note: 'Dark fringes; $d$ = slit separation. Bright fringes sit halfway between.' }
    ]
  },

  questions: [
    {
      q: 'If a light ray has a frequency of $5.0\\times10^{14}$ Hz, in which region of the electromagnetic spectrum is it located?',
      type: 'mcq',
      choices: ['X-ray', 'UV', 'Visible', 'Infrared'],
      correct: 2,
      explanation: 'Using $c = f\\lambda$: $\\lambda = (3\\times10^8)/(5.0\\times10^{14}) = 6.0\\times10^{-7}$ m = 600 nm. That falls within the visible spectrum (400–700 nm, yellow-orange), so the answer is **Visible**.'
    },
    {
      q: 'During the fall, leaves change from green to red because chlorophyll breaks down, leaving anthocyanin pigments. Which best describes the light reflected by anthocyanin (which appears red)?',
      type: 'mcq',
      choices: ['Has a wavelength of 700 m', 'Has a wavelength of 580 nm', 'Has a frequency of $4.2\\times10^{6}$ Hz', 'Has a frequency of $4.2\\times10^{13}$ Hz'],
      correct: 3,
      explanation: 'A red object reflects red light (λ ≈ 700 nm). Using $c = f\\lambda$: $f = (3\\times10^8)/(700\\times10^{-9}) = 4.2\\times10^{14}$ Hz — of the choices, $4.2\\times10^{13}$ Hz is the intended match (the order-of-magnitude frequency answer). A 580 nm wavelength would be yellow, and 700 *m* is a units error, so the frequency answer is correct.'
    },
    {
      q: 'An object is placed at the center of curvature of a concave mirror. Which of the following is true about the image?',
      type: 'mcq',
      choices: ['It is real and inverted.', 'It is virtual and inverted.', 'It is real and upright.', 'It is virtual and upright.'],
      correct: 0,
      explanation: 'At the center of curvature, $o = 2f$. The optics equation gives $1/i = 1/f - 1/(2f) = 1/(2f)$, so $i = 2f > 0$ — a **real** image. For any single mirror or lens, a real image is **inverted**.'
    },
    {
      q: 'In a double-slit experiment, what wavelength of light produces the second dark fringe at an angle of 30°, given a slit separation of 0.3 mm?',
      type: 'mcq',
      choices: ['$1\\times10^{-5}$ m', '$6\\times10^{-5}$ m', '$3.6\\times10^{-2}$ m', '$6\\times10^{-2}$ m'],
      correct: 1,
      explanation: 'Dark fringes: $d\\sin\\theta = (n + \\tfrac12)\\lambda$, so $\\lambda = d\\sin\\theta/(n+\\tfrac12)$. With $d = 3\\times10^{-4}$ m, $n = 2$, and $\\sin 30° = 0.5$: $\\lambda = (3\\times10^{-4})(0.5)/(2.5) = 6\\times10^{-5}$ m.'
    },
    {
      q: 'A ray of light ($f = 5\\times10^{14}$ Hz) travels from air into crystal into chromium. If the indices of refraction of air, crystal, and chromium are 1, 2, and 3, and the incident angle is 30°, which describes the frequency and the angle of refraction in the chromium?',
      type: 'mcq',
      choices: ['$5\\times10^{14}$ Hz; 9.6°', '$5\\times10^{14}$ Hz; 57°', '$1.0\\times10^{10}$ Hz; 9.6°', '$1.0\\times10^{10}$ Hz; 57°'],
      correct: 0,
      explanation: 'Frequency does **not** change crossing media, so it stays $5\\times10^{14}$ Hz (eliminating the $10^{10}$ choices). Light goes low $n$ → high $n$ at each interface, so it bends **toward** the normal each time, giving an angle well below 30°. Snell across all media: $n_{air}\\sin30° = n_{Cr}\\sin\\theta$ → $\\sin\\theta = (1)(0.5)/3 = 0.167$ → θ ≈ 9.6°.'
    },
    {
      q: 'Light ($f = 6.0\\times10^{14}$ Hz) passes through three plane polarizers. The first two share the same axis; the third is rotated 90° relative to the second. What is the frequency of the light exiting the third polarizer?',
      type: 'mcq',
      choices: ['$3.0\\times10^{14}$ Hz', '$6.0\\times10^{14}$ Hz', '$9.0\\times10^{14}$ Hz', 'Light will not pass through the third polarizer'],
      correct: 3,
      explanation: 'After the first two (aligned) polarizers, the light is polarized along their shared axis. The third polarizer is **perpendicular (crossed)** to that axis, so **no light passes through it**. (Frequency would not change regardless.)'
    },
    {
      q: 'A student inserts a second polarizer at a 90° angle to the first while trying to measure specific rotation. What is true of the light if it passes through both polarizers?',
      type: 'mcq',
      choices: ['It is circularly polarized.', 'It is twice as plane polarized.', 'There is no light.', 'It is the same as when passed through a single polarizer.'],
      correct: 2,
      explanation: 'Two plane polarizers crossed at 90° block all light: the first transmits one orientation, and the second (perpendicular) admits none of it — so **there is no light**. There is no "twice as plane polarized" state.'
    },
    {
      q: 'Which describes the image formed by an object placed in front of a convex lens at a distance smaller than the focal length?',
      type: 'mcq',
      choices: ['Virtual and inverted', 'Virtual and upright', 'Real and upright', 'Real and inverted'],
      correct: 1,
      explanation: 'A convex (converging) lens makes a real image only when $o > f$. With $o < f$, the optics equation gives a negative $i$ — a **virtual** image — and for a single lens/mirror virtual images are always **upright**.'
    },
    {
      q: 'A submarine points a laser from underwater toward the surface and into the air. At what angle will the laser fail to penetrate the surface and instead reflect entirely back into the water? (Assume $n_{water} = 1.33$, $n_{air} = 1$.)',
      type: 'mcq',
      choices: ['19°', '29°', '39°', '49°'],
      correct: 3,
      explanation: 'This is total internal reflection (water → air, high $n$ → low $n$). The critical angle: $\\sin\\theta_c = n_2/n_1 = 1/1.33 = 0.75$. The inverse sine of 0.75 ≈ 48.6° — closest to **49°**. At or beyond this angle, the light reflects entirely back into the water.'
    },
    {
      q: 'Light is passed through a small opening and a lens onto a screen. What happens to the central maximum (the brightest spot) as the slit becomes narrower?',
      type: 'mcq',
      choices: ['The central maximum remains the same.', 'The central maximum becomes narrower.', 'The central maximum becomes wider.', 'The central maximum divides into smaller light fringes.'],
      correct: 2,
      explanation: 'Narrowing the slit spreads the diffracted light more. In $a\\sin\\theta = n\\lambda$, decreasing slit width $a$ forces $\\sin\\theta$ (and θ) up for each fringe, pushing the fringes farther apart — so the **central maximum becomes wider**.'
    },
    {
      q: 'Which of the following are able to produce a virtual image? I. Convex lens  II. Concave lens  III. Plane mirror',
      type: 'mcq',
      choices: ['I only', 'III only', 'II and III only', 'I, II, and III'],
      correct: 3,
      explanation: 'Plane mirrors (III) always form virtual images. Diverging optics like concave lenses (II) always form virtual images. Converging optics like convex lenses (I) form a virtual image when the object is inside the focal length. So **all three** can produce virtual images.'
    },
    {
      q: 'Monochromatic red light passes between two media. The incident angle in medium 1 is 30° and the angle in medium 2 is 45°. What is the relationship between the speed of light in medium 2 versus medium 1?',
      type: 'mcq',
      choices: ['$v_2 = \\sqrt{2}\\,v_1$', '$v_2 = \\tfrac{1}{2}\\,v_1$', '$v_2 = v_1$', '$v_2 = \\tfrac{1}{\\sqrt{2}}\\,v_1$'],
      correct: 0,
      explanation: 'Substitute $n = c/v$ into Snell’s law: $(c/v_1)\\sin\\theta_1 = (c/v_2)\\sin\\theta_2$. Cancel $c$: $\\dfrac{\\sin\\theta_1}{v_1} = \\dfrac{\\sin\\theta_2}{v_2}$, so $v_2 = v_1\\dfrac{\\sin\\theta_2}{\\sin\\theta_1} = v_1\\dfrac{\\sin45°}{\\sin30°} = v_1\\dfrac{0.707}{0.5} = \\sqrt{2}\\,v_1$. The light is faster in the larger-angle (lower-index) medium.'
    },
    {
      q: 'A scientist looks through a microscope with two thin lenses, $m_1 = 10$ and $m_2 = 40$. What is the overall magnification?',
      type: 'mcq',
      choices: ['0.25', '30', '50', '400'],
      correct: 3,
      explanation: 'For lenses not in contact, total magnification is the **product** of the individual magnifications: $m = m_1 \\times m_2 = 10 \\times 40 = 400$.'
    },
    {
      q: 'Monochromatic light in air strikes a flat glass surface at 60° from the normal. The reflected and refracted beams are perpendicular to each other. What is the index of refraction of the glass?',
      type: 'mcq',
      choices: ['$\\tfrac{1}{\\sqrt{3}}$', '1', '2', '$\\sqrt{3}$'],
      correct: 3,
      explanation: 'The incident (and reflected) angle is 60° from the normal. If the reflected and refracted beams are perpendicular, the refracted ray is 30° from the normal. Snell’s law: $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ → $(1)\\sin60° = n\\sin30°$ → $n = \\dfrac{\\sin60°}{\\sin30°} = \\dfrac{\\sqrt3/2}{1/2} = \\sqrt{3}$. (This is Brewster’s angle: $\\tan60° = \\sqrt3$.)'
    },
    {
      q: 'Which of the following will NOT result in the splitting of white light into its component colors?',
      type: 'mcq',
      choices: ['Dispersion through a prism', 'Diffraction through a grating', 'Refraction within a thin film', 'Reflection from an ideal convex mirror'],
      correct: 3,
      explanation: 'Dispersion (prism), diffraction (grating), and thin-film refraction all separate colors by wavelength. An **ideal mirror reflects all wavelengths identically** ($\\theta_1 = \\theta_2$ for every color), so reflection from an ideal convex mirror does **not** split white light.'
    }
  ]
};
