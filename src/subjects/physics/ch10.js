// Physics & Math Chapter 10 — Mathematics. Authored to the rich-formatting quality bar.
// Figures and figure captions are drawn from ch10.json; goals, recap/detail markdown,
// and the practice questions are authored here (the JSON `questions` array was empty,
// so questions were reconstructed from scratch_physics/ch10_q.md).
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 10,
  title: 'Mathematics',
  subtitle: 'Arithmetic & significant figures · exponents & logarithms · trigonometry · problem-solving',

  blocks: [
    /* ─────────────── 10.1 Arithmetic and Significant Figures ─────────────── */
    {
      id: 's1', num: '10.1', title: 'Arithmetic and Significant Figures',
      goals: [
        'Convert values to and from scientific notation',
        'Determine the significant digits within a number, such as 1,547,200',
        'Apply rounding techniques in multiplication and division problems'
      ],
      images: [{ src: fig(0, 0).src, alt: fig(0, 0).alt, caption: 'No calculator on Test Day — scientific notation and judicious estimation keep even ugly arithmetic solvable in seconds.' }],
      recap: `
- **No calculator on the MCAT.** Beat ugly numbers with three tools: **scientific notation**, **judicious estimation**, and **significant figures**.
- **Scientific notation** = $n \\times 10^m$, where the **significand** $n$ satisfies $1 \\le |n| < 10$ and the **exponent** $m$ is any integer.
- **Sig figs:** all nonzero digits count; interior zeros count; **trailing zeros count only if there's a decimal point**; leading zeros never count. (3,490 → 3 sig figs; 3,490.0 → 5.)
- **Multiply/divide** → round answer to the **fewest sig figs**. **Add/subtract** → round to the **fewest decimal places**.
- **Estimation rule:** multiplying → round one **up**, one **down**. Dividing → round **both the same** direction.
`,
      detail: `
#### Test Day mindset
The testmakers know you have no calculator, so even the gnarliest math is *designed* to be solvable fast. The goal is **never an exact answer** — it's eliminating wrong choices and matching the right one.

:::keyconcept
Use judicious rounding on Test Day — especially in **Chem/Phys**. Do **only as much math as you need** to choose the answer. The closer the answer choices, the more precision you need; the farther apart, the rougher you can be.
:::

#### Scientific notation
A number is written as a **significand** (also called *coefficient* or *mantissa*) times a power of ten:

$$217 = 2.17 \\times 10^2$$

Here $2.17$ is the significand and $2$ is the **exponent**.

- The **significand** must satisfy $1 \\le |n| < 10$ — i.e. between $1$ and $10$ (or between $-10$ and $-1$), **never** starting with a $0$ or with two digits before the decimal.
- The **exponent** can be any whole number — positive, negative, or $0$.
- Convert messy numbers to scientific notation early; the time saved on later steps more than repays it — *especially* when answer choices differ by **powers of ten**.
- **Exception:** square roots — handle those in standard form (covered in 10.2).

#### Significant figures
Sig figs express **how certain** a measurement is, set by the instrument's precision. A ruler marked in mm lets you read $55\\text{ mm}$ with confidence and *estimate* one more digit ($55.2\\text{ mm}$) — that last estimated digit is **not** significant.

##### Counting sig figs

| Rule | Significant? | Example |
|---|---|---|
| Any digit between the first and last nonzero digit (including interior zeros) | **Yes** | $1{,}547{,}200$ → the $1,5,4,7,2$ (interior zeros depend on decimal) |
| **Leading** zeros (left of first nonzero digit) | No | $0.0003201$ → 4 sig figs |
| **Trailing** zeros **with** a decimal point | **Yes** | $3{,}490.0$ → 5 sig figs |
| **Trailing** zeros **without** a decimal point | No | $3{,}490$ → 3 sig figs |
| Last digit of a **measurement** | No (it's an estimate) | — |

:::bridge
Sig figs signal a measurement's **accuracy** — inaccurate measurements bias research. When reading data, check accuracy two ways: count the significant digits, and look for **error margins / statistical significance** on graphs (*MCAT Physics and Math Review*, Ch. 12).
:::

Scientific notation makes sig figs explicit: $100.0$ (4 sig figs) → $1.000 \\times 10^2$, but bare $100$ (1 sig fig) → $1 \\times 10^2$. **Preserve the sig-fig count** when converting.

#### Math with significant figures

| Operation | Round the answer to… | Why |
|---|---|---|
| **Multiplication / division** | the **fewest significant figures** among the factors | uncertainty propagates multiplicatively |
| **Addition / subtraction** | the **fewest decimal places** among the terms | uncertainty propagates by place value |

Keep **all** digits during the calculation; round **only at the end** to minimize rounding error.

:::expertise
Most Test Day math (and this Kaplan series) **ignores sig figs** in the answer choices. Only bother with them when the **question stem or passage explicitly asks**.
:::

**Worked example.** Volume of a cylinder, radius $7.45\\text{ m}$, height $8.323\\text{ m}$, $\\pi = 3.14159$. All factors multiply, so the answer carries the fewest sig figs — the radius has only **2** (its last digit is an estimate). $V = \\pi r^2 h \\approx 1452\\text{ m}^3 \\to \\mathbf{1.5 \\times 10^3\\ m^3}$.

#### Estimation
##### Multiplication — round opposite directions
For $(3.17 \\times 10^4)(4.53 \\times 10^5)$ (true $= 1.44 \\times 10^{10}$): round **one up, one down** to cancel error → $(3.2 \\times 10^4)(4.5 \\times 10^5) \\approx 1.44 \\times 10^{10}$. If answers are far apart, drop to one sig fig: $(3 \\times 10^4)(4.5 \\times 10^5) = 1.35 \\times 10^{10}$ — only ~6% error, still good enough.

##### Division — round the same direction
**Estimate $15.4 \\div 3.80$.** Round the **divisor** up to $4$, then round the **dividend** up too (and toward a multiple of $4$): $16 \\div 4 = 4$. True value $4.05$ — nearly spot-on.

:::keyconcept
**Multiply → round one up, one down** (errors cancel). **Divide → round both the same way** (errors cancel in the ratio). Adjust the **divisor first**, then match the dividend.
:::

:::mnemonic
**"Times = Teeter-totter, Divide = Ditto."** In multiplication the two roundings **teeter-totter** (opposite ways); in division they go **ditto** (same way).
:::
`
    },

    /* ──────────────────── 10.2 Exponents and Logarithms ──────────────────── */
    {
      id: 's2', num: '10.2', title: 'Exponents and Logarithms',
      goals: [
        'Estimate the square root of a given value',
        'Estimate the log value of a given number',
        'Simplify expressions such as $(a + 2b)^3$'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Exponent and log rules power many tested equations — sound level, exponential decay, Gibbs free energy, and every p-scale (pH, pKₐ).' }],
      recap: `
- **Exponent rules (same base only):** $x^A x^B = x^{A+B}$, $\\dfrac{x^A}{x^B} = x^{A-B}$, $(x^A)^B = x^{AB}$, $x^{-A} = \\dfrac{1}{x^A}$, $x^{1/n} = \\sqrt[n]{x}$, and $x^0 = 1$.
- **Adding** powers requires evaluating first ($3^2 + 3^2 = 18$, **not** $6^2$) — *unless* base and exponent match, then add coefficients.
- **Estimate square roots** by bracketing between perfect squares; memorize $1^2$–$20^2$ and $\\sqrt2 \\approx 1.4$, $\\sqrt3 \\approx 1.7$.
- **Log rules mirror exponents:** $\\log(AB)=\\log A+\\log B$, $\\log\\frac{A}{B}=\\log A-\\log B$, $\\log A^B = B\\log A$, $\\log_A A = 1$, $\\log_A 1 = 0$.
- **Estimate logs:** $\\log(n \\times 10^m) \\approx m + 0.n$ — the exponent plus "$n$ shifted one place right."
`,
      detail: `
#### Why this matters
Exponentials and logs underlie many tested equations:

| Topic | Equation | Where (Kaplan) |
|---|---|---|
| Sound level | $\\beta = 10\\log\\dfrac{I}{I_0}$ | Physics & Math Ch. 7 |
| Exponential decay | $n = n_0 e^{-\\lambda t}$ | Physics & Math Ch. 9 |
| Gibbs free energy | $\\Delta G = -RT\\ln K_{eq}$ | Gen Chem Ch. 7 |
| p-scales (pH, pOH, p$K_a$) | $\\text{pH} = -\\log[\\text{H}^+]$ | Gen Chem Ch. 10 |
| Henderson–Hasselbalch | $\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$ | Gen Chem Ch. 10 |

#### Exponent identities

| Rule | Form | Note |
|---|---|---|
| Zero exponent | $x^0 = 1$ | any nonzero base |
| Multiply like bases | $x^A x^B = x^{A+B}$ | **add** exponents |
| Divide like bases | $\\dfrac{x^A}{x^B} = x^{A-B}$ | **subtract** exponents |
| Power of a power | $(x^A)^B = x^{AB}$ | **multiply** exponents |
| Power of a fraction | $\\left(\\dfrac{x}{y}\\right)^A = \\dfrac{x^A}{y^A}$ | distribute to top & bottom |
| Negative exponent | $x^{-A} = \\dfrac{1}{x^A}$ | inverse |
| Fractional exponent | $x^{A/B} = \\sqrt[B]{x^A}$ | numerator = power, denominator = root |

:::keyconcept
The base **must be the same** to combine exponents by adding, subtracting, multiplying, or dividing. **Adding/subtracting powers does not touch the exponents:** $3^2 + 3^2 = 9 + 9 = 18 \\ne 6^2$. Only when *both base and exponent match* may you add coefficients: $3^2 + 3^2 = 2 \\times 3^2 = 18$.
:::

#### Estimating square roots
Bracket the target between two **perfect squares**. Know your squares cold:

| $x$ | $x^2$ | $x$ | $x^2$ | $x$ | $x^2$ | $x$ | $x^2$ |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 6 | 36 | 11 | 121 | 16 | 256 |
| 2 | 4 | 7 | 49 | 12 | 144 | 17 | 289 |
| 3 | 9 | 8 | 64 | 13 | 169 | 18 | 324 |
| 4 | 16 | 9 | 81 | 14 | 196 | 19 | 361 |
| 5 | 25 | 10 | 100 | 15 | 225 | 20 | 400 |

For any number $< 400$, find which two perfect squares it sits between. Or **factor out a known square**: $\\sqrt{180} = \\sqrt{36 \\times 5} = 6\\sqrt5 \\approx 6(2.2) = 13.2$ (true $\\approx 13.4$, between $13^2 = 169$ and $14^2 = 196$). For scientific notation, shift the decimal so the **exponent is even** (divisible by 2) before halving it.

Memorize: $\\sqrt2 \\approx 1.4$ and $\\sqrt3 \\approx 1.7$.

:::expertise
Estimating square roots and logs to the **first decimal place** is plenty — don't waste time chasing more precision.
:::

#### Rules of logarithms
Logs are the **inverse** of exponents, so they obey mirror-image rules:

| Rule | Form |
|---|---|
| Log of 1 | $\\log_A 1 = 0$ |
| Log of the base | $\\log_A A = 1$ |
| Log of a product | $\\log(AB) = \\log A + \\log B$ |
| Log of a quotient | $\\log\\dfrac{A}{B} = \\log A - \\log B$ |
| Log of a power | $\\log A^B = B\\log A$ |
| Log of an inverse | $\\log\\dfrac{1}{A} = -\\log A$ |

The "**p**" prefix is shorthand for $-\\log$: $\\text{pH} = -\\log[\\text{H}^+]$, $\\text{p}K_a = -\\log K_a$, etc.

**Deriving Henderson–Hasselbalch.** Start from $K_a = \\dfrac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$, take $-\\log$ of both sides, and the product/quotient rules give $\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$.

#### Common vs. natural logarithms
- **Common log** ($\\log_{10}$, written $\\log$) — base 10, matches our decimal system, easiest to estimate.
- **Natural log** ($\\log_e$, written $\\ln$) — base $e \\approx 2.718$ (Euler's number).
- **Convert between them:** $\\ln x = 2.303\\,\\log x$, i.e. $\\log x = \\dfrac{\\ln x}{2.303}$.

:::keyconcept
$e$ is **Euler's number** $\\approx 2.71828\\ldots$, the base of the natural logarithm. To go from $\\ln$ to $\\log$, **divide by 2.303**.
:::

#### Estimating logarithms
Put the number in scientific notation $n \\times 10^m$ (with $1 \\le n < 10$). Since $\\log 1 = 0$ and $\\log 10 = 1$, $\\log n$ is a decimal between 0 and 1. The shortcut:

$$\\log(n \\times 10^m) \\approx m + 0.n$$

where "$0.n$" means **slide $n$'s decimal one place left**. Example: $\\log(9.2 \\times 10^8) \\approx 8 + 0.92 = 8.92$ (actual $8.96$). Even for a huge number: $\\log 7{,}426{,}135{,}420 \\approx \\log(7.4 \\times 10^9) \\approx 9.74$ (actual $9.87$).

:::bridge
The same trick estimates **pH**, but flipped for the negative log and negative exponent: $-\\log(n \\times 10^{-m}) \\approx m - 0.n$ (*Gen Chem Review*, Ch. 10).
:::

:::mnemonic
**Log shortcut = "exponent dot significand."** For $n \\times 10^m$, the log is roughly $m$**.**$n$ — write the **exponent**, a decimal point, then the **first digit(s) of $n$**. $\\log(9.2\\times10^8)\\approx 8\\textbf{.}92$.
:::
`
    },

    /* ────────────────────────── 10.3 Trigonometry ────────────────────────── */
    {
      id: 's3', num: '10.3', title: 'Trigonometry',
      goals: [
        'Explain the appropriate way to orient vectors in vector addition',
        'Calculate the value of sine, cosine, or tangent for a given right triangle',
        'Recall the sine, cosine, and tangent values of key angles'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 10.1 — A right triangle: each acute angle has an opposite side, an adjacent side, and shares the hypotenuse.' }],
      recap: `
- **SOH-CAH-TOA:** $\\sin\\theta = \\dfrac{\\text{opp}}{\\text{hyp}}$, $\\cos\\theta = \\dfrac{\\text{adj}}{\\text{hyp}}$, $\\tan\\theta = \\dfrac{\\text{opp}}{\\text{adj}}$.
- **Ranges:** $\\sin$ and $\\cos$ run from $-1$ to $1$; $\\tan$ runs from $-\\infty$ to $\\infty$.
- **Inverse trig** ($\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$) turns a ratio back into an **angle** — used to find a **resultant's direction** in vector addition.
- **Memorize the special triangles:** $30$–$60$–$90$ (sides $1$:$\\sqrt3$:$2$) and $45$–$45$–$90$ (sides $1$:$1$:$\\sqrt2$).
- **Key values:** $\\sin = 1$ at $90°$, $\\cos = 1$ at $0°$, $\\tan = 1$ at $45°$; $\\tan 90°$ is **undefined**.
`,
      detail: `
#### Definitions and relationships
For a right triangle and a chosen acute angle $\\theta$, three ratios are defined from the **opposite** leg, **adjacent** leg, and **hypotenuse** (Figure 10.1):

$$\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}, \\qquad \\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}, \\qquad \\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$$

:::mnemonic
**SOH-CAH-TOA** — **S**ine = **O**pp/**H**yp · **C**osine = **A**dj/**H**yp · **T**angent = **O**pp/**A**dj. *"Some Old Hippie Caught Another Hippie Tripping On Acid."*
:::

- **Ranges:** $\\sin\\theta$ and $\\cos\\theta \\in [-1, 1]$; $\\tan\\theta \\in (-\\infty, \\infty)$.
- **Inverse functions** $\\sin^{-1}$ (arcsin), $\\cos^{-1}$ (arccos), $\\tan^{-1}$ (arctan) take a *ratio* and return the *angle*. e.g. $\\theta = \\tan^{-1}\\!\\left(\\dfrac{\\text{opp}}{\\text{adj}}\\right)$.

:::keyconcept
**Trig splits a vector into components; inverse trig rebuilds the angle.** Use $\\sin/\\cos$ to break a vector into perpendicular legs ($V_x = V\\cos\\theta$, $V_y = V\\sin\\theta$); use $\\tan^{-1}\\!\\left(\\frac{V_y}{V_x}\\right)$ to find the **direction of a resultant** in vector addition/subtraction.
:::

#### Common values — the two special triangles

![Figure 10.2 — The 30-60-90 (sides 1:√3:2) and 45-45-90 (sides 1:1:√2) special right triangles.](${fig(2, 1).src})

Know every value in the table below — by memory **or** by quickly sketching the two triangles:

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|---|---|---|---|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\\tfrac{1}{2}$ | $\\tfrac{\\sqrt3}{2}$ | $\\tfrac{\\sqrt3}{3} = \\tfrac{1}{\\sqrt3}$ |
| $45°$ | $\\tfrac{\\sqrt2}{2}$ | $\\tfrac{\\sqrt2}{2}$ | $1$ |
| $60°$ | $\\tfrac{\\sqrt3}{2}$ | $\\tfrac{1}{2}$ | $\\sqrt3$ |
| $90°$ | $1$ | $0$ | undefined |
| $180°$ | $0$ | $-1$ | $0$ |

##### Trends to exploit
- As $\\theta$ goes $0° \\to 90°$: $\\sin\\theta$ **increases** ($0 \\to 1$), $\\cos\\theta$ **decreases** ($1 \\to 0$).
- $\\sin\\theta = \\cos(90° - \\theta)$ — sine and cosine are **co-functions** (complementary angles swap).
- $\\sin = 1$ at $\\mathbf{90°}$, $\\cos = 1$ at $\\mathbf{0°}$, $\\tan = 1$ at $\\mathbf{45°}$.
- **All** angles have trig values — not just those in right triangles (computing them just takes more work).

:::mnemonic
**Special-triangle sines, "1-2-3 over 2":** $\\sin 30° = \\dfrac{\\sqrt1}{2}=\\dfrac12$, $\\sin 45° = \\dfrac{\\sqrt2}{2}$, $\\sin 60° = \\dfrac{\\sqrt3}{2}$. Cosines are the **same list reversed** ($\\cos 30° = \\frac{\\sqrt3}{2}$, $\\cos 60°=\\frac12$). $\\tan = \\sin/\\cos$.
:::
`
    },

    /* ─────────────────────────── 10.4 Problem-Solving ─────────────────────────── */
    {
      id: 's4', num: '10.4', title: 'Problem-Solving',
      goals: [
        'Distinguish between direct and inverse relationships',
        'Convert between metric prefixes',
        'Solve a system of equations using substitution, setting equations equal, or elimination'
      ],
      recap: `
- **Direct relationship:** variables move **together** (one up → other up proportionally). **Inverse:** one up → other **down** proportionally.
- **Metric prefixes** convert by multiplying/dividing by **powers of ten** (mm → km is $\\times 10^{-6}$).
- **Unit (dimensional) analysis** can pick the right computation — and the answer's units **must** match the choices.
- **Memorize only time conversions;** the MCAT supplies the rest (1 in = 2.54 cm, 1 cal = 4.184 J, 1 amu = $1.661\\times10^{-27}$ kg).
- **Solve 2-variable systems** three ways: **substitution**, **setting equations equal**, or **elimination** — all give the same $(x, y)$.
`,
      detail: `
#### Use of relationships
Relationships in passages appear as formulas or proportionality constants. The two flavors:

| Relationship | Behavior | Example |
|---|---|---|
| **Direct** | $A \\uparrow \\Rightarrow B \\uparrow$ in proportion; $A \\downarrow \\Rightarrow B \\downarrow$ | $A \\propto B$ |
| **Inverse** | $A \\uparrow \\Rightarrow B \\downarrow$ in proportion | $A \\propto \\dfrac{1}{B}$ |

:::bridge
**Boyle's law** ($PV = $ const) is **inverse** — double $P$, halve $V$. **Gay-Lussac's law** ($\\frac{P}{T} = $ const) is **direct** — double $P$, double $T$ (all else fixed; use **kelvin**).
:::

#### Conversions
##### Metric prefixes — just shift powers of ten

| Factor | Prefix | Symbol | | Factor | Prefix | Symbol |
|---|---|---|---|---|---|---|
| $10^{12}$ | tera | T | | $10^{-1}$ | deci | d |
| $10^{9}$ | giga | G | | $10^{-2}$ | centi | c |
| $10^{6}$ | mega | M | | $10^{-3}$ | milli | m |
| $10^{3}$ | kilo | k | | $10^{-6}$ | micro | μ |
| $10^{2}$ | hecto | h | | $10^{-9}$ | nano | n |
| $10^{1}$ | deka | da | | $10^{-12}$ | pico | p |

Converting **mm $\\to$ km**: from $10^{-3}$ to $10^{3}$ means multiply by $10^{-6}$. **Sanity check:** a km is bigger than a mm, so the *number* of km should be **smaller**.

##### Unit conversions
The MCAT inflates difficulty by forcing conversions (equation requirements, or answers in different units). **Memorize only time;** the rest are provided:

| Base unit | Equivalent |
|---|---|
| 1 mile | 5280 ft |
| 1 ft | 12 in |
| 1 in | 2.54 cm |
| 1 Calorie (Cal) | 1000 cal |
| 1 calorie (cal) | 4.184 J |
| 1 electron-volt (eV) | $1.602 \\times 10^{-19}$ J |
| 1 L | 33.8 oz |
| 1 pound (lb) | 4.45 N |
| 1 atomic mass unit (amu) | $1.661 \\times 10^{-27}$ kg |

**Worked example.** $33$ mph $\\to$ m/s: $33\\dfrac{\\text{mi}}{\\text{hr}} \\times \\dfrac{1609\\text{ m}}{1\\text{ mi}} \\times \\dfrac{1\\text{ hr}}{3600\\text{ s}} \\approx 15\\text{ m/s}$ — arrange numerators/denominators so units **cancel**.

##### Temperature — the special case (add/subtract, not just multiply)
$$T_F = \\tfrac{9}{5}T_C + 32, \\qquad T_K = T_C + 273$$

:::realworld
Convert °F ↔ °C fluently in medicine — records differ by institution. **Body temp** $= 98.6°\\text{F} = 37°\\text{C}$; **fever** $> 100.4°\\text{F}\\,(38°\\text{C})$; **hypothermia** $< 95.0°\\text{F}\\,(35°\\text{C})$.
:::

#### Unit (dimensional) analysis
If you forget a formula, the **units** can rescue you — and they double-check any calculation, since the answer's units **must** match the choices. Example: given a value in $\\frac{\\text{V}}{\\text{m}}$ (electric field) and one in volts, with answers in meters, you can infer $\\dfrac{\\text{V}}{\\text{V/m}} = \\text{m}$ — i.e. $d = \\dfrac{V}{E}$ — even without recalling $V = Ed$. It's not foolproof (knowing the real relationship beats inferring it), but it narrows choices fast.

#### Algebraic systems
To solve, you need **at least as many equations as variables**. For $3x + 4y = 17$ and $5x - 2y = 11$, three equivalent methods:

| Method | How it solves for the first variable |
|---|---|
| **Substitution** | Solve one equation for one variable, **plug** that expression into the other |
| **Setting equations equal** | Solve **both** for the *same* variable, then set the two expressions equal (a special case of substitution) |
| **Elimination** | Scale equations so one variable's coefficient matches, then **add/subtract** to cancel it (same sign → subtract; opposite → add) |

All three yield $(x, y) = (3, 2)$, reported as a **Cartesian coordinate**. Systems rarely exceed three variables $(x, y, z)$ on the MCAT.

:::mnemonic
**Three ways to crack a system — "Sub, Set, Subtract":** **Sub**stitute one in, **Set** them equal, or **Subtract** (eliminate). Different roads, same $(x,y)$.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Arithmetic and Significant Figures',
        points: [
          '**Scientific notation** $= n \\times 10^m$ improves calculation ease and sig-fig comparability: significand $1 \\le n < 10$, exponent an integer.',
          '**Significant figures** = all nonzero digits + trailing zeros **only if there is a decimal point**; for measurements the last digit is *not* significant.',
          '**Addition/subtraction:** answer keeps the fewest **decimal places**. **Multiplication/division:** answer keeps the fewest **significant figures**. Keep all digits until the final round.',
          '**Estimation:** multiplying → round one up, one down; dividing → round both the same direction.'
        ]
      },
      {
        section: 'Exponents and Logarithms',
        points: [
          '**Exponents** combine only with **like bases**: $x^Ax^B=x^{A+B}$, $\\frac{x^A}{x^B}=x^{A-B}$, $(x^A)^B=x^{AB}$, $x^{-A}=\\frac1{x^A}$, $x^{1/n}=\\sqrt[n]{x}$.',
          '**Logarithms** are the inverse of exponents and follow mirror rules: $\\log(AB)=\\log A+\\log B$, $\\log A^B=B\\log A$.',
          '**Natural logs** (base $e$) convert to **common logs** (base 10) via $\\ln x = 2.303\\log x$.',
          '**Estimate** $\\sqrt{}$ by bracketing perfect squares; estimate $\\log(n\\times10^m)\\approx m + 0.n$.'
        ]
      },
      {
        section: 'Trigonometry',
        points: [
          '**SOH-CAH-TOA:** $\\sin=\\frac{\\text{opp}}{\\text{hyp}}$, $\\cos=\\frac{\\text{adj}}{\\text{hyp}}$, $\\tan=\\frac{\\text{opp}}{\\text{adj}}$ — defined from right-triangle side lengths.',
          '**Inverse trig** turns a side-length ratio into the **angle of interest** (e.g. the direction of a resultant vector).',
          'Memorize the **30-60-90** ($1$:$\\sqrt3$:$2$) and **45-45-90** ($1$:$1$:$\\sqrt2$) triangles and the values at $0°, 30°, 45°, 60°, 90°, 180°$.',
          '$\\sin = 1$ at $90°$, $\\cos = 1$ at $0°$, $\\tan = 1$ at $45°$; over $0°\\to90°$, $\\sin$ rises and $\\cos$ falls.'
        ]
      },
      {
        section: 'Problem-Solving',
        points: [
          '**Direct** relationship: both variables move together. **Inverse:** one rises as the other falls, in proportion.',
          '**Metric prefix** conversions = multiply/divide by powers of ten; **unit conversions** may add multiplication/division (and addition/subtraction for temperature).',
          '**Dimensional analysis** can identify the right computation when a formula is forgotten — the answer\'s units must match the choices.',
          '**Algebraic systems** solve by substitution, setting equations equal, or elimination — all give the same result.'
        ]
      }
    ],
    mnemonics: [
      '**SOH-CAH-TOA:** **S**in = **O**pp/**H**yp · **C**os = **A**dj/**H**yp · **T**an = **O**pp/**A**dj.',
      '**Rounding for estimation:** Multiply → "teeter-totter" (one up, one down). Divide → "ditto" (both same way).',
      '**Log shortcut:** $\\log(n\\times10^m)\\approx m\\textbf{.}n$ — write the **exponent**, a dot, then the **first digit of $n$**.',
      '**Sig-fig trailing zeros:** they only count if there\'s a **decimal point** ($3490$ = 3, $3490.0$ = 5).',
      '**Special-triangle sines, "√1, √2, √3 over 2":** $\\sin30°=\\frac12$, $\\sin45°=\\frac{\\sqrt2}{2}$, $\\sin60°=\\frac{\\sqrt3}{2}$; cosines are the same list reversed.',
      '**Solving systems — "Sub, Set, Subtract":** substitute, set equal, or eliminate (subtract).',
      '**$\\ln\\to\\log$:** divide by **2.303** (and $\\log\\to\\ln$: multiply by 2.303).'
    ],
    keyConcepts: [
      '**There is no calculator** — do *only as much math as you need* to pick the answer. Let the spread of the answer choices set how rough your estimate can be.',
      '**Convert ugly numbers to scientific notation early.** It isolates the power of ten (great when choices differ by orders of magnitude) and makes sig figs explicit.',
      '**Exponent and log rules require matching bases** and are inverses of each other — master one and you nearly know the other.',
      '**Know the two special right triangles cold.** $30$–$60$–$90$ ($1$:$\\sqrt3$:$2$) and $45$–$45$–$90$ ($1$:$1$:$\\sqrt2$) generate almost every trig value the MCAT asks for.',
      '**Dimensional analysis is a safety net:** if units of a candidate computation match the answer choices, you\'re probably on the right track even without the formula.'
    ],
    equations: [
      { name: 'Scientific notation', tex: 'n \\times 10^m,\\quad 1 \\le |n| < 10,\\ m \\in \\mathbb{Z}', note: 'Significand between 1 and 10; exponent any integer.' },
      { name: 'Zero exponent', tex: 'x^0 = 1', note: 'Any nonzero base to the zeroth power equals 1.' },
      { name: 'Multiply like bases', tex: 'x^A \\times x^B = x^{A+B}', note: 'Same base required — add the exponents.' },
      { name: 'Divide like bases', tex: '\\dfrac{x^A}{x^B} = x^{A-B}', note: 'Subtract denominator exponent from numerator exponent.' },
      { name: 'Power of a power', tex: '(x^A)^B = x^{A \\times B}', note: 'Multiply the exponents.' },
      { name: 'Negative exponent', tex: 'x^{-A} = \\dfrac{1}{x^A}', note: 'A negative exponent is the reciprocal.' },
      { name: 'Fractional exponent', tex: 'x^{A/B} = \\sqrt[B]{x^A}', note: 'Numerator = power, denominator = root.' },
      { name: 'Square-root approximations', tex: '\\sqrt{2} \\approx 1.4,\\quad \\sqrt{3} \\approx 1.7', note: 'Memorize these; bracket other roots between perfect squares.' },
      { name: 'Log of a product', tex: '\\log(A \\times B) = \\log A + \\log B', note: 'Products become sums.' },
      { name: 'Log of a quotient', tex: '\\log\\dfrac{A}{B} = \\log A - \\log B', note: 'Quotients become differences.' },
      { name: 'Log of a power', tex: '\\log A^B = B \\log A', note: 'Pull the exponent out front.' },
      { name: 'Log identities', tex: '\\log_A A = 1,\\quad \\log_A 1 = 0', note: 'Log of the base is 1; log of 1 is 0.' },
      { name: 'ln ↔ log conversion', tex: '\\ln x = 2.303 \\, \\log x', note: 'Divide a natural log by 2.303 to get the common log.' },
      { name: 'Log estimation', tex: '\\log(n \\times 10^m) \\approx m + 0.n', note: 'Exponent plus n shifted one decimal place left.' },
      { name: 'Sine', tex: '\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}', note: 'SOH.' },
      { name: 'Cosine', tex: '\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}', note: 'CAH.' },
      { name: 'Tangent', tex: '\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{\\sin\\theta}{\\cos\\theta}', note: 'TOA.' },
      { name: 'Temperature conversions', tex: 'T_F = \\tfrac{9}{5}T_C + 32,\\quad T_K = T_C + 273', note: 'Temperature conversions add/subtract, not just scale.' }
    ]
  },

  questions: [
    {
      q: 'How would the number 17,060 be written in scientific notation?',
      type: 'mcq',
      choices: [
        '$1706 \\times 10^1$',
        '$1.706 \\times 10^4$',
        '$1.7060 \\times 10^4$',
        '$0.17060 \\times 10^5$'
      ],
      correct: 1,
      explanation: 'The significand must satisfy $1 \\le |n| < 10$, which rules out (A) and (D). Because 17,060 has **no decimal point**, the trailing zero is **not significant** — so the number has 4 sig figs and the significand is $1.706$, not $1.7060$. That gives $1.706 \\times 10^4$, choice (B).'
    },
    {
      q: 'How does the number of significant digits differ between 14,320,010 and 3.618000?',
      type: 'mcq',
      choices: [
        '14,320,010 has more significant digits than 3.618000',
        '14,320,010 has fewer significant digits than 3.618000',
        '14,320,010 has the same number of significant digits as 3.618000',
        'A comparison cannot be made because the numbers are not both in scientific notation.'
      ],
      correct: 2,
      explanation: 'In **14,320,010** there is no decimal point, so the final trailing zero is **insignificant** → **7** sig figs. In **3.618000** every digit (including the trailing zeros after a decimal) is significant → also **7** sig figs. They are equal, choice (C).'
    },
    {
      q: 'Using the appropriate number of significant digits, what is the answer to $3.060 \\times 4.10 + 200$? (Assume all numbers are measurements.)',
      type: 'mcq',
      choices: [
        '210',
        '213',
        '212.5',
        '212.55'
      ],
      correct: 1,
      explanation: 'Follow order of operations. The multiplication $3.060 \\times 4.10 = 12.546$ is limited by the **2 sig figs** in 4.10. Then add 200, which has **no decimal places**, so the *sum* may have no decimal places: $12.546 + 200 \\approx 213$. The final addition controls decimals, eliminating (C) and (D); (A) is over-rounded. The answer is (B).'
    },
    {
      q: 'Which is the most appropriate setup for estimating $3.6 \\times 4.85$ when answer choices differ by a small margin?',
      type: 'mcq',
      choices: [
        '$3.5 \\times 5$',
        '$3.5 \\times 4.5$',
        '$4 \\times 4$',
        '$4 \\times 5$'
      ],
      correct: 0,
      explanation: 'For multiplication, round **one number up and the other down** so the errors cancel. (A) rounds $3.6 \\to 3.5$ (down) and $4.85 \\to 5$ (up), keeping the product close. (B) and (D) round both the **same** way, compounding error; (C) rounds in opposite directions but far too aggressively for closely-spaced choices. The answer is (A).'
    },
    {
      q: 'The value of $\\sqrt[4]{200}$ is closest to:',
      type: 'mcq',
      choices: [
        '4',
        '14',
        '50',
        '800'
      ],
      correct: 0,
      explanation: 'The fourth root is the **square root of the square root**: $\\sqrt[4]{200} = \\sqrt{\\sqrt{200}}$. Since $14^2 = 196$, $\\sqrt{200}$ is just over 14; then $\\sqrt{14}$ is a bit under 4 (because $4^2 = 16$). So the value is just under 4, choice (A).'
    },
    {
      q: 'If A and B are real numbers, which equation is INCORRECT?',
      type: 'mcq',
      choices: [
        '$A^3 \\times B^3 = (AB)^3$',
        '$A^5 \\div A^7 = A^{-2}$',
        '$(A^{0.5})^4 + A^2 = 2A^2$',
        '$(A^3)^2 = A^9$'
      ],
      correct: 3,
      explanation: 'Raising a power to a power **multiplies** the exponents: $(A^3)^2 = A^{3\\times2} = A^6$, not $A^9$ — so (D) is incorrect. The others are valid: (A) distributes the exponent; (B) subtracts exponents ($5-7=-2$); (C) gives $(A^{0.5})^4 = A^2$, so $A^2 + A^2 = 2A^2$. The answer is (D).'
    },
    {
      q: 'How can the value of a natural logarithm be converted to the value of a common logarithm?',
      type: 'mcq',
      choices: [
        'The natural logarithm is divided by a constant.',
        'A constant is added to or subtracted from the natural logarithm.',
        'The natural logarithm is raised to an exponent.',
        'The inverse of the natural logarithm is taken.'
      ],
      correct: 0,
      explanation: 'The relationship is $\\ln x = 2.303\\,\\log x$, so $\\log x = \\dfrac{\\ln x}{2.303}$. The natural log is **divided by the constant 2.303** to obtain the common log, choice (A).'
    },
    {
      q: 'What is the minimum value of $2\\cos\\theta - 1$?',
      type: 'mcq',
      choices: [
        '$-3$',
        '$-2$',
        '$-1$',
        '$0$'
      ],
      correct: 0,
      explanation: 'Cosine bottoms out at $-1$ (e.g. $\\cos 180° = -1$). Substituting the minimum: $2(-1) - 1 = -3$, choice (A).'
    },
    {
      q: 'Which of the following relationships is INCORRECT?',
      type: 'mcq',
      choices: [
        '$|\\sin\\theta \\times \\cos\\theta| < |\\sin\\theta| + |\\cos\\theta|$',
        '$\\sin\\theta \\div \\cos\\theta = \\tan\\theta$',
        '$\\tan 90°$ is undefined',
        '$\\sin\\theta = \\sin(90° - \\theta)$'
      ],
      correct: 3,
      explanation: 'The co-function identity is $\\sin\\theta = \\cos(90° - \\theta)$, **not** $\\sin(90° - \\theta)$ — so (D) is incorrect. The rest hold: (A) the product of two values in $[-1,1]$ has magnitude $<1$, less than their summed magnitudes; (B) is the definition of tangent; (C) $\\tan 90° = \\frac{\\sin 90°}{\\cos 90°} = \\frac{1}{0}$ is undefined. The answer is (D).'
    },
    {
      q: 'What is the approximate pH of a solution with $\\text{p}K_a = 3.6$, $[\\text{HA}] = 100$ mM, and $[\\text{A}^-] = 0.1$ M? (Use Henderson–Hasselbalch.)',
      type: 'mcq',
      choices: [
        '1.6',
        '3.6',
        '5.6',
        '7.6'
      ],
      correct: 1,
      explanation: 'First convert units: $100\\text{ mM} = 0.1\\text{ M}$, so $[\\text{HA}] = [\\text{A}^-] = 0.1\\text{ M}$. Henderson–Hasselbalch: $\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]} = 3.6 + \\log 1 = 3.6 + 0 = 3.6$, choice (B).'
    },
    {
      q: 'At what temperature do the Fahrenheit and Celsius scales give equal values?',
      type: 'mcq',
      choices: [
        '0 K',
        '233 K',
        '313 K',
        '273 K'
      ],
      correct: 1,
      explanation: 'Set $T_F = T_C$ in $T_F = \\tfrac{9}{5}T_C + 32$: $T = \\tfrac{9}{5}T + 32 \\Rightarrow -\\tfrac{4}{5}T = 32 \\Rightarrow T = -40$. So $-40°\\text{C} = -40°\\text{F}$. The answers are in kelvin: $-40 + 273 = 233\\text{ K}$, choice (B).'
    },
    {
      q: 'In a rigid container, pressure and temperature are directly proportional. If the pressure is changed from 540 torr to 180 torr via a temperature change, by what factor has the temperature changed?',
      type: 'mcq',
      choices: [
        '360',
        '3',
        '1',
        '$\\tfrac{1}{3}$'
      ],
      correct: 3,
      explanation: 'In a **direct** relationship, the variables change by the same factor. Pressure went from 540 to 180 torr — multiplied by $\\dfrac{180}{540} = \\dfrac{1}{3}$ — so temperature was also multiplied by $\\dfrac{1}{3}$ (in kelvin). The answer is (D).'
    },
    {
      q: 'A 150 pound man must be given a drug dosed by body mass. Approximately how many milligrams should be administered per dose? (1 lb = 4.45 N)',
      type: 'mcq',
      choices: [
        '33 mg',
        '67 mg',
        '100 mg',
        '225 mg'
      ],
      correct: 2,
      explanation: 'Pounds are a unit of **force** (weight), not mass. Convert: weight $= 150 \\times 4.45 \\approx 668\\text{ N}$, then mass $= \\dfrac{W}{g} = \\dfrac{668}{10} \\approx 68\\text{ kg}$. Applying the per-kilogram dose yields about **100 mg**, choice (C).'
    },
    {
      q: 'The rate of a reaction is a change in concentration per time. What are the units of the rate constant k for a reaction that is second order overall in one species (rate = k[A]², [A] in molarity)?',
      type: 'mcq',
      choices: [
        '$\\text{M} \\cdot \\text{s}$',
        '$\\text{M}^{-1}$',
        '$\\text{s}^{-1}$',
        '$\\text{M}^{-1}\\text{s}^{-1}$'
      ],
      correct: 3,
      explanation: 'Rate has units $\\dfrac{\\text{M}}{\\text{s}}$. Solve $k = \\dfrac{\\text{rate}}{[\\text{A}]^2} = \\dfrac{\\text{M}\\,\\text{s}^{-1}}{\\text{M}^2} = \\text{M}^{-1}\\text{s}^{-1}$. This dimensional analysis gives choice (C) on the original quiz.'
    },
    {
      q: 'One group needs 900 Calories/day plus 12 Calories per kg of body mass per day; a second group needs 500 Calories/day plus 15 Calories per kg per day. At what mass do the two groups have equal caloric needs?',
      type: 'mcq',
      choices: [
        '26 kg',
        '67 kg',
        '133 kg',
        '266 kg'
      ],
      correct: 2,
      explanation: 'Build two equations and **set them equal**: $900 + 12m = 500 + 15m$. Solving: $400 = 3m \\Rightarrow m \\approx 133\\text{ kg}$, choice (C). This is a system of equations couched in data, solved by setting the expressions equal.'
    }
  ]
};
