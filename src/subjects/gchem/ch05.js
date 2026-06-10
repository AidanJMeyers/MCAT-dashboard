// Chapter 5 — Chemical Kinetics. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch05.json (already-correct extraction);
// goals, recap/detail markdown, and keyReview are authored here from ch05.md.
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 5,
  title: 'Chemical Kinetics',
  subtitle: 'Reaction mechanisms, collision & transition state theory, factors affecting rate · reaction rates, rate laws, and reaction orders',

  blocks: [
    /* ─────────────────────── 5.1 Chemical Kinetics ─────────────────────── */
    {
      id: 's1', num: '5.1', title: 'Chemical Kinetics',
      goals: [
        'Describe the series of events within a multistep mechanism',
        'Explain the meaning and importance of a rate-determining step',
        'Describe activation energy',
        'Compare and contrast transition state theory and collision theory'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 5.1 — Enzymes are biological catalysts that can be saturated: high substrate fills every active site, capping turnover at a maximal rate.' }],
      recap: `
- **Kinetics ≠ thermodynamics.** A reaction can be **spontaneous** ($\\Delta G < 0$) yet proceed *immeasurably slowly*; kinetics asks **how fast**, not **whether**.
- A **mechanism** is the actual step-by-step path; the **slowest step is the rate-determining step** and caps the overall rate.
- **Activation energy ($E_a$)** is the minimum collision energy needed to react — the **energy barrier** at the top of the reaction coordinate.
- **Collision theory:** rate ∝ effective collisions (correct **orientation** + energy $\\ge E_a$). **Transition state theory:** molecules pass through a high-energy **activated complex (‡)**.
- **Five rate factors:** **concentration, temperature, medium, catalysts**, and (for solids) **surface area**. Catalysts lower $E_a$ for *both* directions, never touching $\\Delta G$ or $K_{eq}$.
`,
      detail: `
#### Kinetics vs. thermodynamics
The change in **Gibbs free energy ($\\Delta G$)** tells you *whether* a reaction is **spontaneous** — but says **nothing about speed**. Nearly every biochemical reaction that sustains life is spontaneous yet so slow that, without **enzymes and catalysts**, measurable progress might never occur in a human lifetime. **Kinetics** is the study of *reaction rates*.

:::bridge
Enzymes accelerate select reactions by a factor of **$10^2$ to $10^{12}$**. Like all catalyzed reactions, they can be **saturated** — once every active site is full, turnover hits a maximum. Enzyme function is covered in *MCAT Biochemistry Review*, Ch. 2.
:::

#### Reaction mechanisms
The balanced equation rarely reflects the *actual* steps. The series of elementary steps is the **mechanism**; summing them gives the overall reaction. Consider:

$$\\text{A}_2 + 2\\,\\text{B} \\rightarrow 2\\,\\text{AB}$$

This *looks* like two B colliding with one $\\text{A}_2$ at once — but the real path may be two steps:

| Step | Reaction | Speed |
|---|---|---|
| **Step 1** | $\\text{A}_2 + \\text{B} \\rightarrow \\text{A}_2\\text{B}$ | **slow** |
| **Step 2** | $\\text{A}_2\\text{B} + \\text{B} \\rightarrow 2\\,\\text{AB}$ | fast |

- The steps **sum** to the overall net reaction.
- $\\text{A}_2\\text{B}$ appears then disappears — it is a reaction **intermediate** (produced in one step, consumed in another; *not* in the overall equation).
- Intermediates are hard to detect (consumed almost immediately) but a proposed mechanism with intermediates can be confirmed by **kinetic experiments**.
- The **slowest step is the rate-determining step** — a kinetic bottleneck that the overall reaction can never outrun.

:::keyconcept
The rate of the whole reaction is only as fast as the **rate-determining step** (the slowest step).
:::

:::bridge
A proposed mechanism must agree with experimental **rate data**. Mechanisms dominate *MCAT Organic Chemistry Review* (Chs. 5–10) and *MCAT Biochemistry Review* (Chs. 9–11).
:::

#### Collision theory
For a reaction to occur, molecules **must collide** — but not every collision works.

- An **effective collision** (one that forms product) needs **(1) correct orientation** and **(2) energy $\\ge E_a$**.
- The **activation energy ($E_a$)** is the minimum collision energy — the **energy barrier**.
- Only a fraction of collisions are effective, so:

$$\\text{rate} = Z \\times f$$

where $Z$ = total collisions per second and $f$ = fraction that are effective.

##### The Arrhenius equation
A quantitative form of collision theory:

$$k = Ae^{-E_a/RT}$$

| Symbol | Meaning |
|---|---|
| $k$ | rate constant |
| $A$ | **frequency factor** (attempt frequency, unit $\\text{s}^{-1}$) |
| $E_a$ | activation energy |
| $R$ | ideal gas constant |
| $T$ | temperature (**kelvins**) |

- **Higher $A$ → higher $k$** (direct relationship). $A$ rises when there are **more molecules** in the vessel → more collision opportunities.
- **Higher $T$ → higher $k$.** As $T$ rises, the exponent $-E_a/RT$ shrinks in magnitude, moving from very negative *toward zero* → less negative → $k$ increases.
- **Lower $E_a$ → higher $k$**, by the same logic.

:::expertise
**Low $E_a$ and high $T$ make the negative exponent of the Arrhenius equation smaller in magnitude → larger $k$.** The MCAT rarely wants you to *calculate* with $e$ and $\\ln$ — it wants the **variable relationships** ($A\\uparrow$, $T\\uparrow$, $E_a\\downarrow$ all raise $k$).
:::

![Figure 5.2 — Increasing concentration raises the frequency factor A (more molecules → more collisions).](${fig(0, 4).src})

#### Transition state theory
When molecules collide with energy $\\ge E_a$, they form a **transition state** in which old bonds weaken as new bonds begin to form. It then dissociates to products (or reverts to reactants).

- Also called the **activated complex**; symbol **‡**.
- It sits at the **peak** of the reaction coordinate — **higher energy than both reactants and products**.
- It is a **theoretical construct** at the point of maximum energy — *cannot be isolated* (unlike an intermediate, which has a finite lifetime).

:::keyconcept
Relative to reactants and products, the **transition state has the highest energy**. It is only a theoretical structure and **cannot be isolated** — yet its proposed structure still helps us understand the reaction.
:::

##### Reading a free energy diagram

![Figure 5.4 — Reaction diagram for the exergonic formation of HCl, showing forward and reverse activation energies.](${fig(0, 5).src})

- The **free energy change ($\\Delta G_{rxn}$)** = $G_{products} - G_{reactants}$.
- **$-\\Delta G$ = exergonic** (energy given off); **$+\\Delta G$ = endergonic** (energy absorbed).
- **Forward $E_a$** = (transition state) − (reactants); **reverse $E_a$** = (transition state) − (products).
- Example: $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightleftharpoons 2\\,\\text{HCl}(g)$ is **exergonic** — products lie below reactants, so $\\Delta G < 0$.

:::expertise
**Kinetics and thermodynamics are separate.** Raising or lowering the **product** free energy changes $\\Delta G$ **without changing the forward $E_a$**. The barrier (kinetics) and the net drop (thermodynamics) are independent.
:::

#### Factors affecting reaction rate

| Factor | Effect on rate | Why |
|---|---|---|
| **Concentration** $\\uparrow$ | Rate $\\uparrow$ (*except zero-order*) | More molecules → more effective collisions → higher $A$ |
| **Temperature** $\\uparrow$ | Rate $\\uparrow$ (until a catalyst denatures) | More molecules exceed $E_a$ (higher avg. kinetic energy) |
| **Medium / solvent** | $\\uparrow$ or $\\downarrow$ | **Polar solvents** polarize & weaken reactant bonds → often faster; physical state matters too |
| **Catalyst added** | Rate $\\uparrow$ | Lowers $E_a$ → raises $k$ for forward *and* reverse |
| **Surface area** $\\uparrow$ (solids) | Rate $\\uparrow$ | More exposed particles available to collide |

##### Concentration
Greater reactant concentration → more **effective collisions per unit time** → higher frequency factor $A$ → faster rate, for **all but zero-order** reactions. For gases, **partial pressure** stands in for concentration.

##### Temperature

![Figure 5.5 — All reactions are temperature-dependent; even nuclear fusion has a temperature dependence.](${fig(0, 6).src})

- Higher $T$ → higher average kinetic energy → larger fraction of molecules exceed $E_a$ → faster.
- **Rule of thumb:** a **+10 °C** rise roughly **doubles** the biological reaction rate — but this is *not* universal across all systems.
- Push $T$ too high and a biological **catalyst denatures** → rate plummets.

![Figure 5.6 — A generic human enzyme's activity peaks near body temperature (35–40 °C), then collapses as denaturation sets in past 40 °C.](${fig(0, 7).src})

##### Medium
The solvent/phase matters. Some reactions favor **aqueous** environments, others **nonaqueous** (DMSO, ethanol). **Polar solvents** are generally preferred — their dipoles polarize, lengthen, and weaken reactant bonds, speeding the reaction.

##### Catalysts

![Figure 5.7 — Energy profiles of a catalyzed vs. uncatalyzed reaction: the catalyst lowers Ea for both directions but leaves ΔG unchanged.](${fig(0, 8).src})

**Catalysts** speed reactions **without being consumed**. They interact with reactants (adsorption or intermediate formation), then return to their original state. They may:

- increase the **frequency** of collisions;
- improve **orientation** so more collisions are effective;
- **donate electron density** to reactants;
- **reduce intramolecular bonding** within reactants.

| | **Homogeneous catalysis** | **Heterogeneous catalysis** |
|---|---|---|
| Phase of catalyst | **Same** phase as reactants | **Different** phase from reactants |
| Example | Acid catalyst dissolved in aqueous reactants | Solid metal catalyst in a gas-phase reaction |

**Critical catalyst facts:**

- A catalyst lowers $E_a$ for the **forward and reverse** directions by the **same factor**.
- It does **not** change $\\Delta G$, the free energies of reactants/products, **or $K_{eq}$** — only the *rate*.
- It **cannot** make a nonspontaneous reaction spontaneous; it only speeds a spontaneous reaction toward equilibrium.

:::mnemonic
**Catalysts Lower the bar, not the destination.** They **L**ower $E_a$ (forward *and* reverse equally) and just help the reaction get to equilibrium **faster** — they never move where equilibrium *is* ($K_{eq}$ and $\\Delta G$ are untouched).
:::

:::bridge
Equilibrium — like biological homeostasis — is **dynamic**: it changes but its *net* change is zero. This balance concept recurs across all seven basic sciences on the MCAT.
:::
`
    },

    /* ──────────────────────── 5.2 Reaction Rates ───────────────────────── */
    {
      id: 's2', num: '5.2', title: 'Reaction Rates',
      goals: [
        'Predict the impact of changing temperature, concentration, and catalyst presence on rate of reaction for a zero-, first-, or second-order reaction',
        'Determine the rate law and rate order for a reaction, given experimental reaction rate data'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 5.8 — Kinetics of a zero-order reaction: concentration falls linearly with time, and the slope equals −k.' }],
      recap: `
- **Rate** = change in concentration per time, in $\\text{M}\\,\\text{s}^{-1}$. Divide each species' rate by its **stoichiometric coefficient** for one standard rate.
- **Rate law** $\\text{rate} = k[A]^x[B]^y$: orders $x, y$ are **experimental**, **never** read off stoichiometric coefficients, and **products never appear**.
- **Find orders from data:** pick two trials where only one reactant changes; if doubling $[B]$ multiplies rate by $2^y$, solve for $y$.
- **Overall order** = sum of individual orders. Memorize each order's **rate law, units of $k$, and linear plot**.
- **Zero-order:** rate $= k$, changed *only* by **temperature** or a **catalyst** (not concentration).
`,
      detail: `
#### Defining the rate
Reactions have no speedometer — we track **concentration vs. time**. For $2\\,\\text{A} + \\text{B} \\rightarrow \\text{C}$:

- Reactants are **consumed** → their rate expressions carry a **negative sign**.
- Stoichiometry sets the relative speeds: A is consumed **twice** as fast as B, and B disappears at the **same** rate C appears.
- To get one **standard rate** equal for every species, divide each by its coefficient. For $a\\text{A} + b\\text{B} \\rightarrow c\\text{C} + d\\text{D}$:

$$\\text{rate} = -\\frac{1}{a}\\frac{\\Delta[\\text{A}]}{\\Delta t} = -\\frac{1}{b}\\frac{\\Delta[\\text{B}]}{\\Delta t} = \\frac{1}{c}\\frac{\\Delta[\\text{C}]}{\\Delta t} = \\frac{1}{d}\\frac{\\Delta[\\text{D}]}{\\Delta t}$$

Rate units are **moles per liter per second** ($\\text{M}\\,\\text{s}^{-1}$).

#### Determining the rate law
For most forward, irreversible reactions, rate is proportional to reactant concentrations raised to experimental exponents:

$$\\text{rate} = k[\\text{A}]^x[\\text{B}]^y$$

- $k$ = **rate constant**; $x$ = order in A, $y$ = order in B.
- **Overall order** = $x + y$ ($+z$ if three reactants). Usually integers; can be fractions.
- The MCAT focuses on **zero-, first-, second-, and third-order** reactions.

:::expertise
Whenever a question asks for a rate law, **look for experimental data first** — you almost never can write it by inspection.
:::

##### Four classic kinetics traps

| Trap | The truth |
|---|---|
| **1. Orders = coefficients** | **No** — orders are experimental. They match coefficients *only* for a single-step mechanism, or for the reactants of a *given* rate-determining step. |
| **2. Rate law = equilibrium expression** | The **rate law uses reactants only**; the equilibrium expression ($K_{eq}$) uses **all** species. Rate = *how fast*; $K_{eq}$ = *where* equilibrium lies. |
| **3. $k$ is a true constant** | $k$ depends on $E_a$ and $T$ — constant only at a **fixed temperature**. For a reversible reaction, $K_{eq} = k_{forward}/k_{reverse}$. |
| **4. Equilibrium rules apply throughout** | They apply only **after** equilibrium is reached. Rate is best measured **early** (near $t=0$) to minimize the reverse reaction. |

:::expertise
**Product concentrations never appear in a rate law.** Don't confuse the rate law with the equilibrium (law of mass action) expression — they look alike but mean opposite things.
:::

##### Worked example — extracting a rate law
Find the rate law for $\\text{A} + \\text{B} \\rightarrow \\text{C} + \\text{D}$ at 300 K:

| Trial | $[\\text{A}]_0$ (M) | $[\\text{B}]_0$ (M) | Initial rate (M/s) |
|---|---|---|---|
| 1 | 1.00 | 1.00 | 2.0 |
| 2 | 1.00 | 2.00 | 8.1 |
| 3 | 2.00 | 2.00 | 15.9 |

- **Trials 1 → 2:** $[\\text{A}]$ fixed, $[\\text{B}]$ doubles, rate ×4. Since $2^y = 4$, **$y = 2$**.
- **Trials 2 → 3:** $[\\text{B}]$ fixed, $[\\text{A}]$ doubles, rate ×2. Since $2^x = 2$, **$x = 1$**.
- So $\\text{rate} = k[\\text{A}]^1[\\text{B}]^2 = k[\\text{A}][\\text{B}]^2$; **overall order $= 1 + 2 = 3$**.
- Solve for $k$ with Trial 1: $2.0 = k(1.00)(1.00)^2 \\Rightarrow k = 2.0\\ \\text{M}^{-2}\\,\\text{s}^{-1}$.

$$\\text{rate} = 2.0\\ \\text{M}^{-2}\\text{s}^{-1}\\,[\\text{A}][\\text{B}]^2$$

:::expertise
The testmakers **love** rate problems because they test proportionality and variable relationships. Always hunt for the **pair of trials where only one reactant changes** — with practice you'll do these in your head.
:::

#### Reaction orders
Reactions are classified as zero-, first-, second-, higher-, or mixed-order. The master table:

| Order | Rate law | Units of $k$ | Linear plot (slope) |
|---|---|---|---|
| **Zero** | $\\text{rate} = k$ | $\\text{M}\\,\\text{s}^{-1}$ | $[\\text{A}]$ vs. $t$ (slope $=-k$) |
| **First** | $\\text{rate} = k[\\text{A}]$ | $\\text{s}^{-1}$ | $\\ln[\\text{A}]$ vs. $t$ (slope $=-k$) |
| **Second** | $\\text{rate} = k[\\text{A}]^2$ or $k[\\text{A}][\\text{B}]$ | $\\text{M}^{-1}\\,\\text{s}^{-1}$ | $\\dfrac{1}{[\\text{A}]}$ vs. $t$ (slope $=+k$) |

##### Zero-order reactions
Rate is **independent of all reactant concentrations** — constant and equal to $k$:

$$\\text{rate} = k[\\text{A}]^0[\\text{B}]^0 = k \\qquad (k \\text{ in } \\text{M}\\,\\text{s}^{-1})$$

- A **concentration vs. time** plot is a **straight line**; the **slope is $-k$**.
- Because $k$ depends on temperature, the **only** ways to change a zero-order rate are **changing $T$** or **adding a catalyst** (both raise $k$).

:::expertise
**Temperature and a catalyst are the ONLY factors that change the rate of a zero-order reaction.** Concentration does nothing.
:::

##### First-order reactions

![Figure 5.9 — Kinetics of a first-order reaction: [A] vs. t is curved, but ln[A] vs. t is linear with slope −k.](${fig(1, 2).src})

Rate is **directly proportional to one reactant** — double it, double the rate:

$$\\text{rate} = k[\\text{A}]^1 \\qquad (k \\text{ in } \\text{s}^{-1})$$

The integrated form gives concentration at any time $t$:

$$[\\text{A}]_t = [\\text{A}]_0\\,e^{-kt}$$

- A **$[\\text{A}]$ vs. $t$** plot is **nonlinear**; a **$\\ln[\\text{A}]$ vs. $t$** plot is **linear** with slope $-k$.
- **Radioactive decay** is the classic first-order process — a molecule changes **by itself**, with no collision required.

##### Second-order reactions

![Figure 5.10 — Kinetics of a second-order reaction: [A] vs. t is curved, but 1/[A] vs. t is linear with slope +k.](${fig(1, 3).src})

Rate is proportional to **two reactants** or the **square of one**:

$$\\text{rate} = k[\\text{A}][\\text{B}] \\quad\\text{or}\\quad k[\\text{A}]^2 \\quad\\text{or}\\quad k[\\text{B}]^2 \\qquad (k \\text{ in } \\text{M}^{-1}\\text{s}^{-1})$$

- A **$\\dfrac{1}{[\\text{A}]}$ vs. $t$** plot is **linear** with slope **$+k$** (note: positive).
- A second-order law (especially first-order in each of two reactants) often implies a **physical collision** between two molecules.

##### Higher- and mixed-order reactions
- **Third-order (termolecular)** reactions are **rare** — three particles colliding simultaneously with correct orientation and energy is unlikely.
- **Broken-order** = **non-integer (fractional)** orders.
- **Mixed-order** = order that **changes over the course of the reaction** (e.g., appears first-order while $[\\text{A}]$ is high, second-order once $[\\text{A}]$ is low). You won't derive these, but you must **recognize how order shifts with concentration**.

:::mnemonic
**Order → which plot is straight:** **Z**ero is already straight ($[\\text{A}]$ vs. $t$). **F**irst needs the **L**og ($\\ln[\\text{A}]$). **S**econd needs the **R**eciprocal ($1/[\\text{A}]$). *"Zero–Concentration, First–Log, Second–1/x."* All three have slope $\\pm k$ — only **second-order is positive**.
:::

:::mnemonic
**Units of $k$ climb as order drops:** zero-order $\\text{M}\\,\\text{s}^{-1}$ → first-order $\\text{s}^{-1}$ → second-order $\\text{M}^{-1}\\text{s}^{-1}$. Each step up in order **subtracts one power of M**. If you forget a rate law, the **units of $k$ give it away**.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Chemical Kinetics',
        points: [
          '**$\\Delta G$ determines spontaneity**, not speed — kinetics is a separate question from thermodynamics.',
          'A **mechanism** is a proposed series of steps that sum to the overall reaction; **intermediates** exist mid-reaction but are neither reactant nor product.',
          'The **slowest step is the rate-determining step** and caps the overall rate.',
          '**Collision theory:** rate ∝ effective collisions — molecules need correct **orientation** and energy $\\ge E_a$. The **Arrhenius equation** $k = Ae^{-E_a/RT}$ is its mathematical form.',
          '**Transition state theory:** molecules pass through a high-energy **activated complex (‡)** at the diagram\'s peak, from which they go to products or revert to reactants.',
          '**Rate factors:** $\\uparrow$ concentration (except zero-order) and $\\uparrow$ temperature speed reactions; the medium can help or hurt; a **catalyst lowers $E_a$** for forward and reverse equally without changing $K_{eq}$.',
          '**Homogeneous** catalysts share the reactants\' phase; **heterogeneous** catalysts are a different phase.'
        ]
      },
      {
        section: 'Reaction Rates',
        points: [
          'Rate is measured as **disappearance of reactant** or **appearance of product** per time, normalized by stoichiometric coefficients.',
          '**Rate laws** take the form $\\text{rate} = k[\\text{A}]^x[\\text{B}]^y$; orders usually **do not** match stoichiometric coefficients and **must be found experimentally**. Products never appear.',
          '**Overall order** = sum of all individual orders.',
          '**Zero-order:** constant rate $= k$, independent of concentration; $[\\text{A}]$ vs. $t$ is linear with slope $-k$. Only **temperature** or a **catalyst** changes the rate.',
          '**First-order:** rate depends on one reactant; $[\\text{A}]$ vs. $t$ is nonlinear but $\\ln[\\text{A}]$ vs. $t$ is linear with slope $-k$.',
          '**Second-order:** rate depends on concentration; $1/[\\text{A}]$ vs. $t$ is linear with slope $+k$.',
          '**Broken-order** = non-integer orders; **mixed-order** = order that changes over time.'
        ]
      }
    ],
    mnemonics: [
      '**Catalysts Lower the bar, not the destination:** they cut $E_a$ for the forward *and* reverse directions equally, so they speed the trip to equilibrium but never move $K_{eq}$ or $\\Delta G$.',
      '**Order → straight-line plot:** **Z**ero = plain $[\\text{A}]$ vs. $t$ · **F**irst = **L**og ($\\ln[\\text{A}]$) · **S**econd = reciprocal ($1/[\\text{A}]$). Only second-order has a **positive** slope ($+k$).',
      '**Units of $k$ climb as order drops:** $\\text{M}\\,\\text{s}^{-1}$ (zero) → $\\text{s}^{-1}$ (first) → $\\text{M}^{-1}\\text{s}^{-1}$ (second). Each higher order strips one power of M — the units alone reveal the order.',
      '**Arrhenius "fast" combo:** low $E_a$ + high $T$ (+ big $A$) all shrink the negative exponent → bigger $k$ → faster reaction.',
      '**"Rate law = Reactants only."** If a product or a stoichiometric coefficient sneaks into your exponents, you\'ve confused the rate law with $K_{eq}$.',
      '**"Slow = boss."** In any mechanism, the **slowest** step rules the overall rate — the rate-determining bottleneck.',
      '**Zero-order zeroes out concentration:** only **T**emperature and a **C**atalyst (the two things that touch $k$) can change a zero-order rate.'
    ],
    keyConcepts: [
      '**Kinetics and thermodynamics are independent:** a catalyst or a change in product energy can alter the barrier/rate without touching $\\Delta G$, and vice versa.',
      '**Orders are experimental, not stoichiometric** — the single most-tested trap. They equal coefficients only for a single-step mechanism or the reactants of a stated rate-determining step.',
      '**A catalyst lowers $E_a$ for both directions and leaves $K_{eq}$ unchanged** — it speeds the approach to equilibrium but never shifts its position.',
      'For data problems, isolate one reactant: change only its concentration between two trials and read the rate ratio as $2^{order}$ to solve for each exponent.',
      'Each reaction order has a signature **linear plot and units of $k$** — recognizing the straight-line transformation ($[\\text{A}]$, $\\ln[\\text{A}]$, or $1/[\\text{A}]$) identifies the order instantly.'
    ],
    equations: [
      { name: 'Collision theory (rate)', tex: '\\text{rate} = Z \\times f', note: '$Z$ = collisions/sec, $f$ = fraction effective (correct orientation + energy $\\ge E_a$).' },
      { name: 'Arrhenius equation', tex: 'k = Ae^{-E_a/RT}', note: 'Low $E_a$ and high $T$ raise $k$; $A$ = frequency factor, $R$ = gas constant, $T$ in K.' },
      { name: 'Standard reaction rate', tex: '\\text{rate} = -\\frac{1}{a}\\frac{\\Delta[\\text{A}]}{\\Delta t} = \\frac{1}{c}\\frac{\\Delta[\\text{C}]}{\\Delta t}', note: 'For $a\\text{A} + b\\text{B} \\rightarrow c\\text{C} + d\\text{D}$; divide each species by its coefficient. Units $\\text{M}\\,\\text{s}^{-1}$.' },
      { name: 'Rate law', tex: '\\text{rate} = k[\\text{A}]^x[\\text{B}]^y', note: 'Orders $x,y$ are experimental; overall order $= x+y$. Products never appear.' },
      { name: 'First-order integrated law (decay)', tex: '[\\text{A}]_t = [\\text{A}]_0\\,e^{-kt}', note: 'Concentration at time $t$; classic for radioactive decay. $\\ln[\\text{A}]$ vs. $t$ is linear, slope $-k$.' }
    ]
  },

  questions: raw.questions
};
