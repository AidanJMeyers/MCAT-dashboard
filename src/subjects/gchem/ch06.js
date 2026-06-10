// Chapter 6 — Equilibrium. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions, and concept summary are reused from ch06.json
// (already-correct extraction); the recap/detail markdown is authored here.
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 6,
  title: 'Equilibrium',
  subtitle: 'Equilibrium, the law of mass action & the reaction quotient · Le Châtelier’s principle · kinetic and thermodynamic control',

  blocks: [
    /* ───────────────────────── 6.1 Equilibrium ───────────────────────── */
    {
      id: 's1', num: '6.1', title: 'Equilibrium',
      goals: [
        'Determine the sign of $\\Delta G$ and the direction of a reaction given its $K_{eq}$',
        'Calculate $K_{eq}$ for a reaction',
        'Write the equilibrium constant expression for a reaction'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 6.1 — Dynamic equilibrium: the forward and reverse rates become equal, so concentrations stop changing (but the reactions never stop).' }],
      recap: `
- A **reversible reaction** reaches **dynamic equilibrium** when **rate$_f$ = rate$_r$** — concentrations stay constant but both reactions keep running.
- At equilibrium **entropy is maximized** and **Gibbs free energy is minimized** (this links thermodynamics to kinetics).
- The **law of mass action** gives $K_{eq} = \\dfrac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$ — products over reactants, each raised to its **stoichiometric coefficient**. **Pure solids and liquids are excluded.**
- The **reaction quotient $Q$** has the *same form* but uses **any** (non-equilibrium) concentrations: compare $Q$ to $K_{eq}$ to find the direction.
- **$Q < K_{eq}$ → forward** ($\\Delta G < 0$); **$Q = K_{eq}$ → at equilibrium** ($\\Delta G = 0$); **$Q > K_{eq}$ → reverse** ($\\Delta G > 0$).
- **Large $K_{eq}$ → products favored**; **small $K_{eq}$ → reactants favored**; $K_{eq}$ is **temperature-dependent**.
`,
      detail: `
#### Dynamic equilibria and reversibility
Most reactions covered so far are **irreversible** — they proceed in one direction, go to completion, and the maximum product is set by the **limiting reagent**. **Reversible reactions** can run **forward** (toward products, "to the right") *or* **reverse** (toward reactants, "to the left"), so they usually **do not go to completion**: products react to re-form reactants.

In a closed system (nothing added or removed), the system settles into a state where the **forward rate equals the reverse rate** and concentrations stop changing. This is **dynamic equilibrium** — distinct from a **static equilibrium**, the forward and reverse reactions are *still occurring*, just at equal rates, so there is **no net change**.

For the generic reaction $\\text{A} \\rightleftharpoons \\text{B}$, at equilibrium $[\\text{A}]$ and $[\\text{B}]$ are constant (**not necessarily equal**), and $\\text{A} \\rightarrow \\text{B}$ and $\\text{B} \\rightarrow \\text{A}$ continue at equal rates.

:::keyconcept
At equilibrium: the **rate of the forward reaction = rate of the reverse reaction**, **entropy is at a maximum**, and **Gibbs free energy is at a minimum**. This single statement links **thermodynamics** and **kinetics**.
:::

:::bridge
Many biochemical reactions are reversible, with activation energies lowered by **enzymes**. Irreversible steps are termed **"committed"** steps — they tend to be the **rate-limiting steps** of metabolic pathways (*MCAT Biochemistry Review*, Ch. 9–11).
:::

#### The law of mass action
For the generic reversible reaction $a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$ at a constant temperature, the **law of mass action** states this ratio is constant:

$$K_{eq} = \\dfrac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$

This is rooted in the **rate expressions**. For a one-step reaction $2\\,\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$:

- $\\text{rate}_f = k_f[\\text{A}]^2$ and $\\text{rate}_r = k_r[\\text{B}][\\text{C}]$
- At equilibrium $\\text{rate}_f = \\text{rate}_r$, so $k_f[\\text{A}]^2 = k_r[\\text{B}][\\text{C}]$
- Rearranging, $K_c = \\dfrac{k_f}{k_r} = \\dfrac{[\\text{B}][\\text{C}]}{[\\text{A}]^2}$

The equal forward and reverse **rates** do **not** mean equal **concentrations** — so $k_f \\neq k_r$ in general, and their ratio **is** $K_c$.

##### The many faces of the equilibrium constant
| Symbol | Used for | Built from |
|---|---|---|
| **$K_c$** | General reactions | **Concentrations** (molarity) |
| **$K_p$** | Gas-phase reactions | **Partial pressures** |
| **$K_{eq}$** | Dilute solutions | Used interchangeably with $K_c$ |
| **$K_{sp}$** | Dissolving solids (solubility) | Ion concentrations (no denominator) |
| **$K_a$, $K_b$, $K_w$** | Acids / bases / water | Concentrations |

:::keyconcept
For most purposes you need **not** distinguish among $K$ values. For dilute solutions, **$K_{eq} = K_c$**, and both are calculated in units of concentration.
:::

For a **multi-step** reaction, the overall equilibrium constant is the **product** of the step constants — and it still reduces to products-over-reactants with each term raised to its overall stoichiometric coefficient.

##### Worked example — writing $K_p$
For $3\\,\\text{H}_2(g) + \\text{N}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$, the gas-phase constant is:

$$K_p = \\dfrac{(P_{\\text{NH}_3})^2}{(P_{\\text{H}_2})^3 (P_{\\text{N}_2})}$$

:::expertise
Remember the Chapter 5 warning: **equilibrium expressions vs. rate laws** are *not* the same. In **equilibrium** expressions the exponents **equal the balanced coefficients**. In **rate laws** the exponents are determined **experimentally** and often do *not* match the coefficients.
:::

#### The reaction quotient, $Q$
The law of mass action defines *where* equilibrium sits; **$Q$ tells you how far the reaction has progressed** toward it. $Q$ has the **identical form** to $K_{eq}$:

$$Q = \\dfrac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}$$

The difference: $K_{eq}$ uses **equilibrium** concentrations, while $Q$ uses the **actual concentrations at any moment**. Its value alone is not useful — its **comparison to $K_{eq}$** is.

![Figure 6.2 — Gibbs free energy vs. reaction quotient: G is minimized at Q = Keq.](${fig(0, 3).src})

| Comparison | Meaning | Direction of net reaction | $\\Delta G$ |
|---|---|---|---|
| **$Q < K_{eq}$** | Too many reactants, too few products | **Forward** (→ products) | $\\Delta G < 0$ (spontaneous fwd) |
| **$Q = K_{eq}$** | Equilibrium proportions | **No net change** (dynamic equilibrium) | $\\Delta G = 0$ |
| **$Q > K_{eq}$** | Too many products, too few reactants | **Reverse** (→ reactants) | $\\Delta G > 0$ |

Once a reaction is **at** equilibrium, any further movement in *either* direction is **nonspontaneous**.

:::mnemonic
**"Q before K, go forward; Q past K, go back."** If **Q is less than K**, the reaction is "behind" — it runs **forward** to catch up. If **Q is greater than K**, it has "overshot" — it runs **reverse**. Tie it to sign: small $Q$ → small ratio → **negative $\\Delta G$** → forward.
:::

#### Properties of the law of mass action
- **Pure solids and pure liquids do not appear** in the expression — their **activity is defined as 1**. (The expression is technically based on activities, but for the MCAT activity ≈ concentration.)
- $K_{eq}$ is **characteristic of a reaction at a given temperature** — it is **temperature-dependent**.
- The **larger** the $K_{eq}$, the **farther right** the equilibrium position.
- For the **reverse** reaction, $K_{eq}^{\\text{rev}} = \\dfrac{1}{K_{eq}}$ (reciprocal).

##### Interpreting the magnitude of $K_{eq}$
| Value of $K_{eq}$ | At equilibrium… | Fraction is… |
|---|---|---|
| **$K_{eq} > 1$** | **Products** favored | "top-heavy" |
| **$K_{eq} \\approx 1$** | Products and reactants comparable | balanced |
| **$K_{eq} < 1$** | **Reactants** favored | "bottom-heavy" |
| **$K_{eq} \\lll 1$** (large negative exponent) | Reaction barely proceeds | amount reacted is **negligible** |

A **large positive exponent** ($K_{eq}$ like $10^{12}$) → reaction goes **almost to completion**; a **large negative exponent** ($K_{eq}$ like $10^{-12}$) → reaction **strongly favors reactants**.

#### Equilibrium calculations — the "x is negligible" shortcut
When $K_{eq}$ has a **large negative exponent**, the amount of reactant that converts to product is tiny, so you can **treat $x$ as negligible** and skip a messy polynomial.

Consider $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$ with $K_{eq} = 10^{-12}$ and $[\\text{A}]_0 = 1\\text{ M}$. If $x$ mol of A reacts:

$$K_{eq} = \\dfrac{[\\text{B}][\\text{C}]}{[\\text{A}]} = \\dfrac{x \\cdot x}{1 - x} = 10^{-12}$$

Because $x \\ll 1$, approximate $1 - x \\approx 1$:

$$x^2 \\approx 10^{-12} \\;\\Rightarrow\\; x \\approx 10^{-6}\\text{ M}$$

Since $x = 0.000001$, indeed $1 - x \\approx 1$ — the approximation is **self-consistent**.

:::expertise
You may have learned to solve these with an **ICE box** table. On Test Day, building a full ICE box wastes time — practice solving by **logic alone** using the negligible-$x$ shortcut for speed.
:::

:::keyconcept
**When the shortcut is valid:** the approximation holds only if $K_{eq}$ is **very small** (large negative exponent) *and* the amount that reacts is **two or more orders of magnitude** below the starting concentration. If $K_{eq}$ is within ~1–2 orders of magnitude of 1 (or larger than 1), the amount reacted is **significant** — don't approximate. (These cases are unlikely to be tested.)
:::

:::bridge
The same equilibrium math reappears under different names: **$K_{sp}$** for solubility (Ch. 9), **$K_a$ / $K_b$ / $K_w$** for acids and bases (Ch. 10), and **$K_d$** in enzyme kinetics (*MCAT Biochemistry Review*, Ch. 2).
:::
`
    },

    /* ─────────────────── 6.2 Le Châtelier's Principle ─────────────────── */
    {
      id: 's2', num: '6.2', title: 'Le Châtelier’s Principle',
      goals: [
        'Use Le Châtelier’s principle to determine how changing conditions — pH, temperature, pressure, and concentration — affect a reaction previously at equilibrium'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 6.3 — A reversible endothermic reaction, N₂O₄(g) ⇌ 2 NO₂(g): heating shifts right (reddish-brown NO₂); cooling shifts left (colorless N₂O₄).' }],
      recap: `
- **Le Châtelier's principle:** apply a **stress** to a system at equilibrium and it **shifts to relieve that stress**.
- **Concentration:** the system shifts **away from** an added species and **toward** a removed one (changes $Q$, not $K_{eq}$).
- **Pressure/volume** (gases only): **↑ pressure / ↓ volume → shift toward the side with *fewer* moles of gas** (and vice versa).
- **Temperature** is the only stress that **changes $K_{eq}$**. Treat **heat as a reactant** (endothermic) or **product** (exothermic) and apply the concentration logic.
- Solids and pure liquids are unaffected by pressure changes; **catalysts never shift equilibrium**.
`,
      detail: `
#### What the principle says
**Le Châtelier's principle:** if a **stress** is applied to a system at equilibrium, the system **shifts to relieve the stress**, re-establishing equilibrium. The stress temporarily moves the system out of equilibrium — either because concentrations/partial pressures are no longer in the equilibrium ratio, *or* because **$K_{eq}$ itself changed** (temperature). The system then reacts **forward or reverse** to restore equilibrium.

:::expertise
Le Châtelier's principle is **fundamental across all three MCAT science sections** — chemistry, biology, and biochemistry all rely on it.
:::

#### Stress 1 — Changes in concentration
Adding or removing a reactant or product makes $Q_c \\neq K_{eq}$, so the system shifts to restore it:

- **Add reactants** (or **remove products**) → $Q_c < K_{eq}$ → shifts **forward** until $Q_c = K_{eq}$.
- **Remove reactants** (or **add products**) → $Q_c > K_{eq}$ → shifts **reverse** until $Q_c = K_{eq}$.

> **Rule of thumb:** the system always shifts **away from what you add** and **toward what you remove**.

Industry exploits this: continuously **removing product** (and **replenishing reactant**) keeps a reaction running forward, boosting **yield**.

:::bridge
The **bicarbonate buffer** is Le Châtelier in physiology:
$$\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{CO}_3(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{HCO}_3^-(aq)$$
In **tissues** (high $\\text{CO}_2$) the reaction shifts **right**; in the **lungs** $\\text{CO}_2$ is blown off and it shifts **left**. **Hyperventilation** blows off $\\text{CO}_2$ to counter **acidemia** (*MCAT Biology Review*, Ch. 6, 7, 10).
:::

#### Stress 2 — Changes in pressure and volume
Only reactions with **at least one gaseous species** respond (liquids and solids are essentially incompressible).

- **Compress** the system → volume ↓, total (and partial) pressure ↑ → $Q_p \\neq K_{eq}$ → system shifts toward the side with **fewer moles of gas** (lowering pressure).
- **Expand** the system → pressure ↓ → system shifts toward the side with **more moles of gas** (raising pressure).

This follows from the ideal gas law: $P \\propto n$ at fixed $T$ and $V$.

**Example:** $\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$ — left side has **4 mol** gas, right side **2 mol**.

| Stress | Shift direction | Result |
|---|---|---|
| **Increase pressure** (decrease volume) | **Right** (toward fewer moles) | More $\\text{NH}_3$ |
| **Decrease pressure** (increase volume) | **Left** (toward more moles) | More $\\text{N}_2 + \\text{H}_2$ |

:::keyconcept
Only the **net change in moles of gas** ($\\Delta n_{gas}$) matters. If both sides have **equal** moles of gas, **pressure/volume changes do not shift** the equilibrium. Changing volume at **constant pressure** also does not disturb equilibrium.
:::

#### Stress 3 — Changes in temperature
Temperature is special: it changes **$K_{eq}$ itself**, not $Q$. Right after a temperature change, concentrations (and thus $Q$) are unchanged, but **$K_{eq}$ is now a different value**, so $Q \\neq K_{eq}$ and the system shifts to its **new** equilibrium.

The direction depends on **enthalpy** — treat **heat as a species**:

- **Endothermic** ($\\Delta H > 0$): **heat is a reactant** → $\\text{reactants} + \\text{heat} \\rightleftharpoons \\text{products}$.
- **Exothermic** ($\\Delta H < 0$): **heat is a product** → $\\text{reactants} \\rightleftharpoons \\text{products} + \\text{heat}$.

Then apply the concentration logic — **adding heat** pushes away from the heat side; **removing heat** pulls toward it.

**Example (endothermic):** $\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\,\\text{NO}_2(g)$. **Heating** shifts **right** → flask turns **reddish-brown** (more $\\text{NO}_2$). **Cooling** shifts **left** → flask turns **colorless** (more $\\text{N}_2\\text{O}_4$). The equilibrium shifts in the direction that **consumes the added energy**.

##### Master summary table
For the reaction $\\text{A}(aq) + 2\\,\\text{B}(g) \\rightleftharpoons \\text{C}(g) + \\text{heat}$ (exothermic):

| Will shift **right** (→ C) if… | Will shift **left** (→ A + B) if… |
|---|---|
| A or B is **added** | A or B is **removed** |
| C is **removed** | C is **added** |
| pressure **increased** / volume **reduced** | pressure **reduced** / volume **increased** |
| temperature **reduced** (heat removed) | temperature **increased** (heat added) |

*(Pressure here favors the right: left has 2 mol gas, B; right has 1 mol gas, C.)*

:::mnemonic
**"Stress relief":** the system always moves to **undo** what you did. **Add → it leaves; remove → it returns; squeeze → fewer gas moles; heat → away from the heat side.** A **catalyst** does **nothing** to position — it only speeds *both* directions to reach equilibrium faster.
:::
`
    },

    /* ───────────── 6.3 Kinetic and Thermodynamic Control ───────────── */
    {
      id: 's3', num: '6.3', title: 'Kinetic and Thermodynamic Control',
      goals: [
        'Identify the conditions that cause a reaction to favor the kinetic or the thermodynamic product',
        'Distinguish a kinetic from a thermodynamic pathway on a reaction coordinate diagram'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 6.4 — Kinetic vs. thermodynamic control: the kinetic pathway has the lower activation energy (faster) but a higher-energy, less stable product; the thermodynamic pathway is slower but yields the more stable product.' }],
      recap: `
- A reaction can give **two products**: the **kinetic** (fast-forming, less stable) or the **thermodynamic** (slow-forming, more stable).
- **Kinetic product:** **lower activation energy** → forms faster; favored at **low temperature** (little heat). Higher in free energy, less stable — the **"fast" product**.
- **Thermodynamic product:** **lower free energy** (more negative $\\Delta G$) → more stable; favored at **high temperature** (more heat available to clear the larger barrier).
- On a **reaction coordinate diagram**: kinetic = **smaller hill, higher valley**; thermodynamic = **bigger hill, deeper valley**.
`,
      detail: `
#### Why control matters
Reactants at a given energy can follow **two different pathways** to **two different products**. Which one dominates is set by **temperature** (and sometimes a **catalyst**). This "control of a reaction" bridges kinetics and thermodynamics, and biochemical pathways regulate it tightly.

#### Kinetic vs. thermodynamic products
| Property | **Kinetic product** | **Thermodynamic product** |
|---|---|---|
| Activation energy ($E_a$) | **Lower** — smaller barrier | **Higher** — larger barrier |
| Speed of formation | **Faster** ("fast" product) | Slower |
| Product free energy | **Higher** (less negative $\\Delta G$) | **Lower** (more negative $\\Delta G$) |
| Stability | **Less** stable | **More** stable |
| Favored by | **Low temperature** (little heat) | **High temperature** (more heat) |

At **lower temperatures** there isn't enough energy to clear the larger thermodynamic barrier, so the **kinetic** product (smaller barrier) dominates. At **higher temperatures**, enough molecules surmount the larger barrier and the system settles into the **more stable thermodynamic** product.

:::keyconcept
**Kinetic = fast but flimsy; thermodynamic = slow but stable.** The kinetic pathway has the **lower $E_a$** (reaches its transition state with less free energy) but a **higher-energy product**. The thermodynamic pathway has the **higher $E_a$** but the **lower-energy, more stable product** (more negative $\\Delta G$).
:::

#### Worked example — 2-methylcyclohexanone
A base ($\\text{B}^-$) catalyzes conversion of **2-methylcyclohexanone** into two different enolates:

![Figure 6.5 — Conversion of 2-methylcyclohexanone to its thermodynamic product (more substituted, more stable) and kinetic product (less substituted, forms faster).](${fig(2, 1).src})

- **Thermodynamic pathway (1):** double bond between **C-1 and the methyl group**. The base must overcome **steric hindrance** from the methyl group to abstract that proton → **higher $E_a$**. But the resulting **more-substituted** double bond is **more stable** and less reactive.
- **Kinetic pathway (2):** double bond between **C-1 and C-6**. The base reaches the less-hindered **C-6** proton easily → **lower $E_a$**, forms fast. The **less-substituted** double bond is **less stable**, leaving the ring open to further attack.

:::bridge
Alkene stability (more substituted = more stable) and the strain concepts behind it — **torsional, angle, and nonbonded strain** — are covered in *MCAT Organic Chemistry Review*, Ch. 2. The same kinetic/thermodynamic logic governs **enolate** chemistry.
:::

:::mnemonic
**"Cold and fast vs. hot and stable."** Run it **cold** → you trap the **kinetic** product (it forms first). Heat it up and give it time → the system relaxes into the **thermodynamic** (most stable) product. **Higher temperature = thermodynamic; lower temperature = kinetic.**
:::

#### On the reaction coordinate diagram
- The **kinetic** product sits behind a **lower activation-energy hill** but rests in a **shallower (higher-energy) well**.
- The **thermodynamic** product sits behind a **higher activation-energy hill** but rests in a **deeper (lower-energy) well**.
- A reversible system can climb back out of the shallow kinetic well at high temperature and fall into the deeper thermodynamic well — which is why **heat favors the thermodynamic product**.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Equilibrium',
        points: [
          'Reversible reactions reach a state where **energy is minimized and entropy is maximized**; equilibria are **dynamic** (reactions continue at equal forward and reverse rates).',
          'Concentrations stay constant at equilibrium because **rate$_f$ = rate$_r$**.',
          'The **law of mass action** gives $K_{eq}$; the **reaction quotient $Q$** has the same form but can be evaluated at *any* concentrations.',
          '**$K_{eq}$** = products/reactants at equilibrium, each raised to its **stoichiometric coefficient**, and is **constant at constant temperature**.',
          '**Pure solids and liquids are excluded** from the expression — only gases and aqueous species appear.',
          'Comparing **$Q$ to $K_{eq}$** tells you where the reaction stands: $Q<K_{eq}$ favors products forming, $Q>K_{eq}$ favors reactants reforming.',
          '$K_{eq} > 1$ → products favored; $K_{eq} \\approx 1$ → comparable; $K_{eq} < 1$ → reactants favored; $K_{eq} \\lll 1$ → amount reacted is **negligible**.'
        ]
      },
      {
        section: 'Le Châtelier’s Principle',
        points: [
          '$Q<K_{eq}$ → $\\Delta G<0$ → **forward**; $Q=K_{eq}$ → $\\Delta G=0$ → **equilibrium**; $Q>K_{eq}$ → $\\Delta G>0$ → **reverse**.',
          'Le Châtelier: a system under **stress reacts to restore equilibrium**. Three stresses: **concentration, pressure/volume, temperature**.',
          'Adding reactants (or removing products) shifts **right**; adding products (or removing reactants) shifts **left**.',
          '**↑ pressure / ↓ volume** shifts toward **fewer moles of gas**; **↓ pressure / ↑ volume** shifts toward **more moles of gas**.',
          'Heating an **endothermic** reaction (or cooling an **exothermic** one) shifts **right**; cooling endothermic (or heating exothermic) shifts **left**. Temperature is the only stress that changes **$K_{eq}$**.'
        ]
      },
      {
        section: 'Kinetic and Thermodynamic Control',
        points: [
          'Reactions can have **both** kinetic and thermodynamic products, regulated by **temperature** and the presence of a **catalyst**.',
          '**Kinetic products** are **higher in free energy** (less stable) but form at **lower temperatures** via a **lower activation energy** — the "fast" products.',
          '**Thermodynamic products** are **lower in free energy** (more stable, more negative $\\Delta G$); the pathway is slower but more spontaneous.'
        ]
      }
    ],
    mnemonics: [
      '**Q vs. K:** "**Q before K, go forward; Q past K, go back.**" $Q<K$ → forward ($\\Delta G<0$); $Q=K$ → equilibrium; $Q>K$ → reverse ($\\Delta G>0$).',
      '**Le Châtelier "stress relief":** the system always **undoes** the stress — add → it leaves, remove → it returns, squeeze → fewer gas moles, heat → away from the heat side.',
      '**Heat as a species:** **endo**thermic = heat is a **reactant** (add heat → shift right); **exo**thermic = heat is a **product** (add heat → shift left).',
      '**Pressure rule:** **squeeze toward the small side** — ↑ pressure / ↓ volume favors the side with **fewer moles of gas**.',
      '**Top-heavy vs. bottom-heavy:** $K_{eq}>1$ is a **top-heavy** fraction (products win); $K_{eq}<1$ is **bottom-heavy** (reactants win); $K_{eq}=1$ is balanced.',
      '**Kinetic vs. thermodynamic:** "**cold and fast vs. hot and stable**" — low T traps the fast **kinetic** product; high T relaxes to the stable **thermodynamic** product.',
      '**Catalysts are neutral:** a catalyst speeds **both** directions equally — it changes *how fast* equilibrium is reached, **never where it lies** or the value of $K_{eq}$.',
      '**Solids & liquids sit out:** pure solids and pure liquids (activity = 1) **never appear** in $K_{eq}$, $Q$, or $K_{sp}$ expressions.'
    ],
    keyConcepts: [
      '**Equilibrium is dynamic, not static:** forward and reverse reactions never stop — they just run at equal rates, so net concentrations hold constant while entropy is maxed and $G$ is minimized.',
      '**$Q$ is the "timer," $K_{eq}$ is the "destination":** they share a formula but $Q$ uses live concentrations. Their comparison sets both the **direction** of reaction and the **sign of $\\Delta G$**.',
      '**Temperature alone moves $K_{eq}$:** concentration and pressure stresses change $Q$ and let the system return to the *same* $K_{eq}$; temperature changes the constant itself.',
      '**The negligible-$x$ shortcut** works only when $K_{eq}$ is very small (large negative exponent) and the amount reacting is $\\geq$ 2 orders of magnitude below the starting concentration — beating the ICE box on speed.',
      '**Kinetic vs. thermodynamic control** is set by temperature: low T → faster-forming, less-stable kinetic product (lower $E_a$); high T → more-stable thermodynamic product (more negative $\\Delta G$).'
    ],
    equations: [
      { name: 'Equilibrium constant (law of mass action)', tex: 'K_{eq} = \\dfrac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}', note: 'Products over reactants, each raised to its stoichiometric coefficient (for $a\\text{A}+b\\text{B}\\rightleftharpoons c\\text{C}+d\\text{D}$). Pure solids and liquids are omitted. Temperature-dependent.' },
      { name: 'Reaction quotient', tex: 'Q = \\dfrac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}', note: 'Identical form to $K_{eq}$ but evaluated at any (non-equilibrium) concentrations. Compare to $K_{eq}$ to find direction.' },
      { name: 'Q–K direction relationship', tex: '\\Delta G = -RT\\ln\\!\\left(\\dfrac{K_{eq}}{Q}\\right)', note: '$Q<K_{eq}\\Rightarrow\\Delta G<0$ (forward); $Q=K_{eq}\\Rightarrow\\Delta G=0$ (equilibrium); $Q>K_{eq}\\Rightarrow\\Delta G>0$ (reverse).' },
      { name: 'Standard free energy and $K_{eq}$', tex: '\\Delta G^{\\circ} = -RT\\ln K_{eq}', note: 'Links thermodynamics to equilibrium: a large $K_{eq}$ (products favored) gives a more negative $\\Delta G^{\\circ}$.' },
      { name: 'Reverse-reaction constant', tex: 'K_{eq}^{\\text{rev}} = \\dfrac{1}{K_{eq}}', note: 'Reversing a reaction inverts its equilibrium constant.' },
      { name: 'Gas-phase constant ($K_p$)', tex: 'K_p = \\dfrac{(P_{\\text{C}})^c (P_{\\text{D}})^d}{(P_{\\text{A}})^a (P_{\\text{B}})^b}', note: 'Same form as $K_c$ but written in partial pressures for gaseous species.' }
    ]
  },

  questions: raw.questions
};
