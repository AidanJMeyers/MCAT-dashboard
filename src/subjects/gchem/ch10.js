// Chapter 10 — Acids and Bases. Authored to the rich-formatting quality bar.
// Figures, goals, questions are reused from ch10.json (already-correct extraction);
// the recap/detail markdown and keyReview are authored here from the source text.
import raw from './ch10.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 10,
  title: 'Acids and Bases',
  subtitle: 'Definitions (Arrhenius · Brønsted–Lowry · Lewis) · properties, Kw, pH/pOH, Ka & Kb · polyvalence & normality · titration & buffers',

  blocks: [
    /* ───────────────────────── 10.1 Definitions ───────────────────────── */
    {
      id: 's1', num: '10.1', title: 'Definitions',
      goals: [
        'Compare and contrast the Arrhenius, Brønsted–Lowry, and Lewis definitions for acids and bases.',
        'Predict the acid formula and name for an anion using Arrhenius acid-naming trends.',
        'Identify amphoteric species, and determine whether they are amphiprotic as well.'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 10.1 — Autoionization of water: one $\\text{H}_2\\text{O}$ donates a proton to another, forming the hydronium (conjugate acid) and hydroxide (conjugate base) ions.' }],
      recap: `
- **Three nested definitions**, each broader than the last: **Arrhenius** ⊂ **Brønsted–Lowry** ⊂ **Lewis**. Every Arrhenius acid/base is also Brønsted–Lowry, and every Brønsted–Lowry acid/base is also Lewis — but **not the converse**.
- **Arrhenius:** acid → excess $\\text{H}^+$; base → excess $\\text{OH}^-$ (aqueous only). **Brønsted–Lowry:** acid = **proton donor**, base = **proton acceptor**. **Lewis:** acid = **electron-pair acceptor**, base = **electron-pair donor**.
- **Lewis is most inclusive:** $\\text{BF}_3$ and $\\text{AlCl}_3$ are Lewis acids (accept a lone pair) but have **no proton to donate** → not Arrhenius/Brønsted–Lowry acids.
- **Amphoteric** = acts as acid or base depending on environment; **amphiprotic** = amphoteric *and* can specifically donate/accept a proton (e.g., $\\text{H}_2\\text{O}$, $\\text{HCO}_3^-$, $\\text{HSO}_4^-$).
- **Nomenclature:** –ide anion → **hydro__ic** acid; –ite → **__ous** acid; –ate → **__ic** acid.
`,
      detail: `
#### Three definitions, increasing in scope
Over the last century chemists used progressively broader definitions. Each is **more inclusive** than the one before it.

| Definition | **Acid** | **Base** | Scope / catch |
|---|---|---|---|
| **Arrhenius** | Dissociates to give excess $\\text{H}^+$ | Dissociates to give excess $\\text{OH}^-$ | **Aqueous only**; most restrictive. Acids start with **H** ($\\text{HCl}$, $\\text{HNO}_3$); bases end in **OH** ($\\text{NaOH}$, $\\text{Ca(OH)}_2$). |
| **Brønsted–Lowry** | **Proton ($\\text{H}^+$) donor** | **Proton acceptor** | Not limited to water. $\\text{OH}^-$, $\\text{NH}_3$, $\\text{F}^-$ are B–L bases even though $\\text{NH}_3$/$\\text{F}^-$ aren't Arrhenius bases. |
| **Lewis** | **Electron-pair acceptor** | **Electron-pair donor** | Most inclusive. Captures $\\text{BF}_3$, $\\text{AlCl}_3$ (no $\\text{H}^+$ to donate). |

:::expertise
The **Arrhenius definition is by far the most restrictive** and rarely tested alone — it shows up mainly *in comparison* to the others. **Brønsted–Lowry and Lewis predominate on the MCAT.** Most acid–base reactions you'll see are simple **proton transfers** (Brønsted–Lowry).
:::

##### The inclusion hierarchy
- Every **Arrhenius** acid/base is also a **Brønsted–Lowry** acid/base.
- Every **Brønsted–Lowry** acid/base is also a **Lewis** acid/base.
- The logic does **not** run backwards: $\\text{NH}_3$ is a Brønsted–Lowry base but **not** an Arrhenius base; $\\text{BF}_3$ is a Lewis acid but **not** a Brønsted–Lowry acid.

A key distinction between Arrhenius and Brønsted–Lowry is **water itself**: water is *not* an Arrhenius acid (it doesn't produce excess $\\text{H}^+$), but it *is* a Brønsted–Lowry acid because it can **donate a proton**.

#### The Brønsted–Lowry picture: conjugate pairs
B–L acids and bases **always occur in pairs**, because the definition requires a proton to move from acid to base. In the autoionization of water, $\\text{H}_3\\text{O}^+$ is the **conjugate acid** and $\\text{OH}^-$ is the **conjugate base**:

$$\\text{H}_2\\text{O}\\,(l) + \\text{H}_2\\text{O}\\,(l) \\rightleftharpoons \\text{H}_3\\text{O}^+\\,(aq) + \\text{OH}^-\\,(aq)$$

#### The Lewis picture: lone pairs and arrows

![Figure 10.2 — Lewis acid–base reaction: ammonia donates a lone pair to boron trifluoride.](${fig(0, 3).src})

A **Lewis base** donates a **lone pair** (not involved in any other bond) to a **Lewis acid**, which accepts it. In $\\text{BF}_3 + \\text{NH}_3$, boron trifluoride is the **Lewis acid** and ammonia is the **Lewis base**.

:::mnemonic
**Brø**nsted–Lowry revolves around **pro**tons; **Lewis** revolves around the **L**one-pair / e**L**ectrons. (B for "Brønsted = Bare proton"; L for "Lewis = Lone pair.")
:::

The same chemistry is called many things on Test Day — all are Lewis acid–base events:

- **Coordinate covalent bond formation** (Gen Chem Ch. 3)
- **Complex ion formation** (Gen Chem Ch. 9)
- **Nucleophile–electrophile interactions** (Org Chem Ch. 4)

The difference between Brønsted–Lowry and Lewis is just **where you look**: B–L tracks the migrating **proton**; Lewis tracks the **electrons** forming the coordinate covalent bond.

![Figure 10.3 — Brønsted–Lowry tracks the proton transfer; Lewis tracks the lone-pair attack of the base (nucleophile) on the acid (electrophile).](${fig(0, 4).src})

:::realworld
On the MCAT, **Lewis acids appear in organic chemistry** as **catalysts** (e.g., $\\text{AlCl}_3$ in Friedel–Crafts reactions) — they accept electron density to activate a substrate.
:::

#### Amphoteric and amphiprotic species
- **Amphoteric** — reacts like an **acid in a basic** environment and like a **base in an acidic** environment.
- **Amphiprotic** — an amphoteric species that specifically can **gain *or* lose a proton** (Brønsted–Lowry sense). Every amphiprotic species is amphoteric; not every amphoteric species is amphiprotic.

**Water** is the classic example:

$$\\text{H}_2\\text{O} + \\text{B}^- \\rightleftharpoons \\text{HB} + \\text{OH}^- \\quad(\\text{water acts as an acid})$$
$$\\text{HA} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{A}^- \\quad(\\text{water acts as a base})$$

Other amphoteric/amphiprotic species:

- **Partially dissociated conjugates of polyprotic acids** — e.g., $\\text{HSO}_4^-$ can gain $\\text{H}^+$ → $\\text{H}_2\\text{SO}_4$ or lose $\\text{H}^+$ → $\\text{SO}_4^{2-}$; likewise $\\text{HCO}_3^-$ (bicarbonate).
- **Metal hydroxides/oxides** of $\\text{Al}$, $\\text{Zn}$, $\\text{Pb}$, $\\text{Cr}$ — amphoteric but **not amphiprotic** (they don't give off protons).
- **Amino acids** form **zwitterions** with both cationic and anionic character.

![Figure 10.4 — Amino-acid zwitterion: the protonated amino group can release a proton (acid) and the carboxylate can accept a proton (base).](${fig(0, 5).src})

:::keyconcept
**Amphoteric vs. amphiprotic:** water, amino acids, and partially deprotonated polyprotic acids (**bicarbonate, bisulfate**) are amphoteric **and** amphiprotic. **Metal oxides/hydroxides** are amphoteric but **not** amphiprotic — they don't release protons.
:::

#### Acid–base nomenclature
Acid names come from the **parent anion** (the anion that combines with $\\text{H}^+$).

**Rule 1 — anion ends in –ide** → prefix **hydro–**, suffix **–ic acid**:

| Anion | Acid |
|---|---|
| $\\text{F}^-$ Fluoride | $\\text{HF}$ — **Hydrofluoric** acid |
| $\\text{Cl}^-$ Chloride | $\\text{HCl}$ — **Hydrochloric** acid |
| $\\text{Br}^-$ Bromide | $\\text{HBr}$ — **Hydrobromic** acid |

**Rule 2 — oxyanions** → **–ite gives –ous acid** (less O); **–ate gives –ic acid** (more O); keep prefixes:

| Anion | Acid | Anion | Acid |
|---|---|---|---|
| $\\text{ClO}^-$ Hypochlor**ite** | $\\text{HClO}$ Hypochlor**ous** | $\\text{NO}_2^-$ Nitr**ite** | $\\text{HNO}_2$ Nitr**ous** |
| $\\text{ClO}_2^-$ Chlor**ite** | $\\text{HClO}_2$ Chlor**ous** | $\\text{NO}_3^-$ Nitr**ate** | $\\text{HNO}_3$ Nitr**ic** |
| $\\text{ClO}_3^-$ Chlor**ate** | $\\text{HClO}_3$ Chlor**ic** | $\\text{CO}_3^{2-}$ Carbon**ate** | $\\text{H}_2\\text{CO}_3$ Carbon**ic** |
| $\\text{ClO}_4^-$ Perchlor**ate** | $\\text{HClO}_4$ Perchlor**ic** | $\\text{SO}_4^{2-}$ Sulf**ate** | $\\text{H}_2\\text{SO}_4$ Sulfur**ic** |
| $\\text{PO}_4^{3-}$ Phosph**ate** | $\\text{H}_3\\text{PO}_4$ Phosphor**ic** | $\\text{CH}_3\\text{COO}^-$ Acet**ate** | $\\text{CH}_3\\text{COOH}$ Acet**ic** |

:::mnemonic
**"-ate ➜ -ic, -ite ➜ -ous."** Memory hook: "**I ate** something **ic**ky" (–ate → –ic), and "the dynam**ite** is danger**ous**" (–ite → –ous). More oxygen = **ate/ic**; less oxygen = **ite/ous**.
:::

:::expertise
Watch for **exceptions**: $\\text{MnO}_4^-$ is **permanganate** even though no $\\text{MnO}_3^-$ or $\\text{MnO}_2^-$ "manganate" ion is commonly used. Apply the rules, then check for a named exception.
:::
`
    },

    /* ───────────────────────── 10.2 Properties ───────────────────────── */
    {
      id: 's2', num: '10.2', title: 'Properties',
      goals: [
        'Predict the behavior of an acid or base in water given its Ka or Kb value, respectively.',
        'Apply the mathematical relationships between pH, pOH, and ion concentration.',
        'Recall the mathematical relationship between Ka, Kb, and Kw.',
        'Determine the concentration of hydrogen ions given molarity and Ka or Kb of a solution.',
        'Identify acids, bases, conjugate acids, and conjugate bases in a reaction.'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 10.5 — The pH and pOH scales. For aqueous solutions at 298 K, $\\text{pH} + \\text{pOH} = 14$; as one rises the other falls by the same amount.' }],
      recap: `
- **Autoionization of water:** $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ at 298 K. Like any $K$, $K_w$ depends **only on temperature** (rises above 298 K because autoionization is **endothermic**).
- **p-scales:** $\\text{pH} = -\\log[\\text{H}^+]$, $\\text{pOH} = -\\log[\\text{OH}^-]$, and $\\text{pH} + \\text{pOH} = 14$ (at 298 K). Neutral = 7 **only at 25 °C**.
- **Strong** acids/bases **fully dissociate** (single arrow). Memorize the strong-acid and strong-base lists. **Weak** acids/bases partially dissociate → $K_a$ / $K_b$; weaker = smaller $K$.
- **Conjugates:** $K_a \\times K_b = K_w$. **Strong** acid/base ⇒ **inert (very weak) conjugate**; **weak** acid/base ⇒ weak conjugate.
- **Neutralization** → salt (± water); the four strong/weak combinations give acidic, basic, or neutral salt solutions via **hydrolysis**.
`,
      detail: `
#### Autoionization of water and $K_w$
Water is amphoteric, so it reacts with **itself** — **autoionization**:

$$\\text{H}_2\\text{O}\\,(l) + \\text{H}_2\\text{O}\\,(l) \\rightleftharpoons \\text{H}_3\\text{O}^+\\,(aq) + \\text{OH}^-\\,(aq)$$

For pure water at 298 K the **water dissociation constant** is:

$$K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-] = 10^{-14} \\quad(25\\,^\\circ\\text{C})$$

- Each autoionization makes **one** $\\text{H}^+$ and **one** $\\text{OH}^-$, so in pure water $[\\text{H}^+] = [\\text{OH}^-] = 10^{-7}\\ \\text{M}$.
- The two are equal **only when neutral**, but their **product is always** $10^{-14}$ at 298 K (Le Châtelier: add $\\text{H}^+$ → $[\\text{OH}^-]$ drops to keep the product fixed).

:::expertise
**$K_w$ is an equilibrium constant — it depends only on temperature.** Changes in concentration, pressure, or volume do **not** change $K_w$. Above 298 K, $K_w$ **increases** (autoionization is endothermic), so "$\\text{pH} = 7 =$ neutral" is **only valid at 25 °C**.
:::

#### pH and pOH scales
A **p-scale** is the **negative log** of a quantity. Concentrations span many orders of magnitude, so logs make them manageable:

$$\\text{pH} = -\\log[\\text{H}^+] \\qquad \\text{pOH} = -\\log[\\text{OH}^-]$$

Taking $-\\log$ of $K_w$ gives, for all aqueous solutions at 298 K:

$$\\text{pH} + \\text{pOH} = 14$$

| Condition (298 K) | $[\\text{H}^+]$ vs $[\\text{OH}^-]$ | pH |
|---|---|---|
| **Acidic** | $[\\text{H}^+] > [\\text{OH}^-]$ | $< 7$ |
| **Neutral** | $[\\text{H}^+] = [\\text{OH}^-]$ | $= 7$ |
| **Basic** | $[\\text{H}^+] < [\\text{OH}^-]$ | $> 7$ |

:::bridge
$\\text{pH} + \\text{pOH} = 14$ falls out of the **log of a product = sum of logs**: $\\log(xy) = \\log x + \\log y$. Logarithmic scales (also used for sound in **dB**) compress large absolute differences — *MCAT Physics and Math Review*, Ch. 7 & 10.
:::

##### Estimating p-values without a calculator
When the value is an exact power of ten, just flip the exponent's sign: $[\\text{H}^+] = 10^{-3} \\Rightarrow \\text{pH} = 3$, $\\text{pOH} = 11$.

For $n \\times 10^{-m}$ (with $1 < n < 10$), use the shortcut:

$$\\text{p value} \\approx m - 0.n$$

where $0.n$ is $n$ with its decimal slid one place left. **Example:** $K_a = 1.8 \\times 10^{-5} \\Rightarrow \\text{p}K_a \\approx 5 - 0.18 \\approx 4.8$.

:::expertise
The MCAT is **not a math test** — exact logs of non-powers-of-ten are unnecessary. Practice the $m - 0.n$ estimate to save time on Test Day.
:::

#### Strong acids and bases — MEMORIZE these
**Strong** acids and bases **completely dissociate** (written with a **single arrow**). For $1\\ \\text{M}$ $\\text{NaOH}$: $[\\text{OH}^-] = 1\\ \\text{M}$, so $\\text{pOH} = 0$ and $\\text{pH} = 14$.

| **Strong acids** (6) | **Strong bases** |
|---|---|
| $\\text{HCl}$ — hydrochloric | $\\text{NaOH}$ — sodium hydroxide |
| $\\text{HBr}$ — hydrobromic | $\\text{KOH}$ — potassium hydroxide |
| $\\text{HI}$ — hydroiodic | Soluble hydroxides of **Group IA** metals (Li, Na, K, Rb, Cs) |
| $\\text{H}_2\\text{SO}_4$ — sulfuric | (and heavier **Group IIA**: Ca, Sr, Ba hydroxides) |
| $\\text{HNO}_3$ — nitric | |
| $\\text{HClO}_4$ — perchloric | |

:::mnemonic
**Strong acids (the 6):** $\\text{HCl}$, $\\text{HBr}$, $\\text{HI}$, $\\text{H}_2\\text{SO}_4$, $\\text{HNO}_3$, $\\text{HClO}_4$. Hook: the three **hydro**halics **HCl / HBr / HI** (note **HF is WEAK!**), plus **"So I Need a Perch"** → **S**ulfuric, (hydro)**I**odic, **N**itric, **Perch**loric. If an acid is **not** on this list, treat it as **weak**.
:::

:::expertise
A **single-headed arrow** ($\\rightarrow$) signals a **strong** acid/base (complete dissociation, no reversibility). The autoionization contribution of water is **negligible** unless the acid/base concentration is near $10^{-7}\\ \\text{M}$ — then you cannot ignore it (a $10^{-8}\\ \\text{M}$ HCl solution has pH ≈ 6.98, **not** 8!). The pH scale has **no hard limits**: $10\\ \\text{M}\\ \\text{HClO}_4$ gives $\\text{pH} = -1$.
:::

#### Weak acids and bases — $K_a$ and $K_b$
**Weak** acids/bases only **partially** dissociate, reaching equilibrium:

$$\\text{HA}\\,(aq) + \\text{H}_2\\text{O}\\,(l) \\rightleftharpoons \\text{H}_3\\text{O}^+\\,(aq) + \\text{A}^-\\,(aq) \\qquad K_a = \\dfrac{[\\text{H}_3\\text{O}^+][\\text{A}^-]}{[\\text{HA}]}$$
$$\\text{BOH}\\,(aq) \\rightleftharpoons \\text{B}^+\\,(aq) + \\text{OH}^-\\,(aq) \\qquad K_b = \\dfrac{[\\text{B}^+][\\text{OH}^-]}{[\\text{BOH}]}$$

- Water (pure liquid) is **not** in the expression.
- **Smaller $K_a$ → weaker acid** (less dissociation); **smaller $K_b$ → weaker base**.
- Rule of thumb: **weak acid** if $K_a < 1$; **weak base** if $K_b < 1$.
- Molecular (non-ionic) **weak bases are almost exclusively amines** on the MCAT.

#### Conjugate acid–base pairs
A **conjugate acid** forms when a base gains a proton; a **conjugate base** forms when an acid loses one. Example:

$$\\text{HCO}_3^-\\,(aq) + \\text{H}_2\\text{O}\\,(l) \\rightleftharpoons \\text{CO}_3^{2-}\\,(aq) + \\text{H}_3\\text{O}^+\\,(aq)$$

Here $\\text{CO}_3^{2-}$ is the conjugate base of $\\text{HCO}_3^-$, and $\\text{H}_3\\text{O}^+$ is the conjugate acid of $\\text{H}_2\\text{O}$. Adding the forward and reverse equilibria yields just the autoionization of water, so:

$$K_a \\times K_b = K_w = 10^{-14} \\qquad \\Rightarrow \\qquad \\text{p}K_a + \\text{p}K_b = 14$$

| Species | Conjugate behaves as | Why |
|---|---|---|
| **Strong acid** ($K_a \\to \\infty$) | **Very weak ("inert") base** | $\\text{Cl}^-$ from $\\text{HCl}$ is essentially unreactive |
| **Strong base** | **Very weak conjugate acid** | $\\text{H}_2\\text{O}$ from $\\text{NaOH}$ is a very weak acid |
| **Weak acid** | **Weak base** | $\\text{HCO}_3^-$ ⇄ $\\text{CO}_3^{2-}$ |

:::keyconcept
**Remove a proton → conjugate base; add a proton → conjugate acid.** $K_a$ and $K_b$ are **inversely related** ($K_a K_b = K_w$): a strong acid has a near-inert conjugate base, and vice versa.
:::

##### Inductive effects on acid strength

![Figure 10.6 — Electronegative atoms near an acidic proton pull electron density away, weakening the X–H bond and increasing acid strength.](${fig(1, 3).src})

**Electronegative atoms** near an acidic proton **withdraw electron density**, weakening the bond to the proton and making dissociation easier → **stronger acid**. The closer/more numerous the electronegative atoms, the stronger the acid.

#### Applications of $K_a$ and $K_b$
The most common use is finding an equilibrium concentration. For a **weak acid**, set the dissociated amount to $x$ and approximate $[\\text{HA}] \\approx [\\text{HA}]_0$:

> **Example.** $2.0\\ \\text{M}$ acetic acid, $K_a = 1.8 \\times 10^{-5}$.
> $K_a = \\dfrac{x^2}{2.0 - x} \\approx \\dfrac{x^2}{2.0}$ → $x^2 = 3.6 \\times 10^{-5}$ → $x = [\\text{H}_3\\text{O}^+] \\approx 6 \\times 10^{-3}\\ \\text{M}$.

:::expertise
The **$x$ is negligible** approximation ($[\\text{HA}]_0 - x \\approx [\\text{HA}]_0$) is valid when $x < 5\\%$ of the initial concentration — generally true when $K_a$ is **at least 100×** smaller than the starting concentration. When taking a square root, **adjust the coefficient** so the power of 10 is **even** (then just halve the exponent).
:::

#### Salt formation, neutralization, and hydrolysis
Acids and bases react in a **neutralization reaction** to form a **salt** (+ often water):

$$\\text{HA}\\,(aq) + \\text{BOH}\\,(aq) \\rightarrow \\text{BA} + \\text{H}_2\\text{O}\\,(l)$$

The reverse, where salt ions react with water to regenerate acid/base, is **hydrolysis**. Four combinations:

| Combination | Example | Resulting pH | Why |
|---|---|---|---|
| **Strong acid + strong base** | $\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$ | **Neutral (7)** | Both ions are **inert conjugates** |
| **Strong acid + weak base** | $\\text{HCl} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{Cl}$ | **Acidic (< 7)** | Cation ($\\text{NH}_4^+$) hydrolyzes → $\\text{H}_3\\text{O}^+$; often **no water** formed |
| **Weak acid + strong base** | $\\text{HClO} + \\text{NaOH} \\rightarrow \\text{NaClO} + \\text{H}_2\\text{O}$ | **Basic (> 7)** | Anion hydrolyzes → $\\text{OH}^-$ |
| **Weak acid + weak base** | $\\text{HClO} + \\text{NH}_3 \\rightarrow \\text{NH}_4\\text{ClO}$ | **Depends on $K_a$ vs $K_b$** | Larger constant wins (e.g., $K_b\\,\\text{NH}_3 > K_a\\,\\text{HClO}$ → basic) |

:::bridge
In biochemistry, neutralizations are often **condensation reactions**: a **peptide bond** forms from a carboxyl group (acid) and an amino group (base), releasing **water**. The "salt" is the polypeptide; **hydrolysis** breaks it apart — *MCAT Biochemistry Review*, Ch. 1.
:::

![Figure 10.7 — Peptide-bond formation: a carboxyl group (acid) reacts with an amino group (base), expelling water.](${fig(1, 5).src})
`
    },

    /* ───────────────── 10.3 Polyvalence and Normality ───────────────── */
    {
      id: 's3', num: '10.3', title: 'Polyvalence and Normality',
      goals: [
        'Describe how equivalents of acid or base are calculated.',
        'Calculate the normality of a solution given its formula and molarity.'
      ],
      recap: `
- **Equivalent:** for acids, **one mole of $\\text{H}^+$**; for bases, **one mole of $\\text{OH}^-$**.
- **Polyvalent (polyprotic)** species liberate **more than one** equivalent per mole (e.g., $\\text{H}_2\\text{SO}_4$ → 2; $\\text{H}_3\\text{PO}_4$ → 3).
- **Normality** $N = M \\times (\\text{equivalents per mole})$. So $2\\ \\text{M}\\ \\text{H}_3\\text{PO}_4 = 6\\ \\text{N}$.
- **Gram equivalent weight** = molar mass ÷ number of equivalents (e.g., $\\text{H}_2\\text{SO}_4$: $98 \\div 2 = 49\\ \\text{g}$).
`,
      detail: `
#### Equivalents
Acidity/basicity tracks the concentration of **equivalents**, not just molecules:

- **Acid equivalent** = one mole of $\\text{H}^+$ (more properly $\\text{H}_3\\text{O}^+$).
- **Base equivalent** = one mole of $\\text{OH}^-$.

**Polyvalent** (Brønsted–Lowry: **polyprotic**) acids/bases give **more than one** equivalent per mole. For the divalent diprotic acid $\\text{H}_2\\text{SO}_4$:

$$\\text{H}_2\\text{SO}_4 \\rightarrow \\text{H}^+ + \\text{HSO}_4^- \\rightleftharpoons 2\\,\\text{H}^+ + \\text{SO}_4^{2-}$$

The **first** dissociation goes to **completion**; the **second** reaches **equilibrium**. One mole of $\\text{H}_2\\text{SO}_4$ yields **2 acid equivalents**.

| Common polyvalent acids | Equiv./mol | Common polyvalent bases | Equiv./mol |
|---|---|---|---|
| $\\text{H}_2\\text{SO}_4$ | 2 | $\\text{Ca(OH)}_2$ | 2 |
| $\\text{H}_2\\text{CO}_3$ | 2 | $\\text{Mg(OH)}_2$ | 2 |
| $\\text{H}_3\\text{PO}_4$ | 3 | $\\text{Al(OH)}_3$ | 3 |

#### Normality
**Normality ($N$)** is the concentration of **acid or base equivalents**:

$$N = M \\times (\\text{number of equivalents per mole})$$

- Each mole of $\\text{H}_3\\text{PO}_4$ yields **3** equivalents → a $2\\ \\text{M}$ solution is $\\mathbf{6\\ N}$.
- Each mole of $\\text{Al(OH)}_3$ yields **3** equivalents → a $2\\ \\text{M}$ solution is $\\mathbf{6\\ N}$.

#### Gram equivalent weight
The **gram equivalent weight** is the mass that produces **one equivalent** (one mole of charge):

$$\\text{gram equivalent weight} = \\dfrac{\\text{molar mass}}{\\text{equivalents per mole}}$$

**Example:** $\\text{H}_2\\text{SO}_4$ (molar mass $\\approx 98\\ \\text{g/mol}$, divalent) → $98 \\div 2 = \\mathbf{49\\ g}$ releases one acid equivalent.

:::keyconcept
**Normality scales molarity by valence.** For a monovalent species $N = M$. For polyprotic species, **multiply by the number of donatable protons (or hydroxides)** — this is exactly what makes $N_a V_a = N_b V_b$ work in titrations (Section 10.4).
:::

:::bridge
Normality and gram equivalent weight are revisited from **Gen Chem Ch. 4 & 9** (stoichiometry and solutions) — review them if these calculations feel unfamiliar.
:::
`
    },

    /* ───────────────────── 10.4 Titration and Buffers ───────────────────── */
    {
      id: 's4', num: '10.4', title: 'Titration and Buffers',
      goals: [
        'Select an appropriate indicator for a given acid–base reaction.',
        'Explain the purpose of a buffer solution.',
        'Identify the pH range of the equivalence point for different acid/base combinations.',
        'Calculate the pH or pOH of a known solution.',
        'Identify the buffering region, half-equivalence point, equivalence point, and endpoint of a titration.'
      ],
      images: [{ src: fig(3, 2).src, alt: fig(3, 2).alt, caption: 'Figure 10.9 — Strong acid / strong base titration (HCl titrated with NaOH): a sharp, steep jump through an equivalence point at pH = 7.' }],
      recap: `
- **Titration** finds an unknown concentration: add **titrant** (known $N$) to **titrand** (known $V$) until the **equivalence point** ($N_a V_a = N_b V_b$).
- **Equivalence point pH depends on the pair:** SA+SB = **7**; SA + weak base **< 7**; weak acid + SB **> 7**; weak + weak ≈ near neutral. *Tug-of-war: the stronger species pulls the equivalence point into its territory.*
- **Indicators** = weak acids/bases that change color between protonated/deprotonated forms. Pick one whose **$\\text{p}K_a \\approx$ equivalence-point pH**. The **endpoint** (color change) ≈ the equivalence point.
- **Half-equivalence point:** $[\\text{HA}] = [\\text{A}^-]$, so $\\text{pH} = \\text{p}K_a$ — the **center of the buffering region** (flattest, optimal buffering). Polyprotic species show **multiple** equivalence/buffer regions.
- **Buffer** = weak acid + its conjugate base salt (or weak base + its salt); resists pH change. **Henderson–Hasselbalch:** $\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$.
`,
      detail: `
#### General principles
A **titration** determines the concentration of a known reactant. Types: **acid–base**, **oxidation–reduction** (both MCAT-tested), and **complexometric** (metal ion, off the MCAT).

- **Titrant** — known concentration, added slowly.
- **Titrand** — unknown concentration, known volume.
- **Equivalence point** — acid equivalents = base equivalents:

$$N_a V_a = N_b V_b$$

(Any consistent volume units work.) The equivalence point is found **graphically** (pH meter → steepest slope) or by an **indicator** color change.

:::keyconcept
The equivalence point is **not always pH 7**. It's pH 7 **only for monovalent strong-acid/strong-base** titrations. Polyprotic titrations have **multiple** equivalence points — each conjugate is titrated separately.
:::

#### Indicators
**Indicators** are weak organic acids/bases that show **different colors** when protonated vs. deprotonated (a structural change shifts the absorption spectrum). They:

- Are used in **low concentration** so they don't shift the equivalence point.
- Must be a **weaker** acid/base than the analyte (else the indicator titrates first!).
- Mark the **endpoint** (final color), which — if chosen well — is **negligibly different** from the equivalence point.

:::expertise
To choose an indicator: **determine the equivalence-point pH first** (graphically or by reasoning about the pair), then pick the indicator whose **$\\text{p}K_a$ is closest** to that pH. E.g., a weak-acid + strong-base equivalence point is basic → **phenolphthalein ($\\text{p}K_a \\approx 9.7$)**.
:::

#### Equivalence-point pH by combination

| Titration | Equivalence-point pH | Reason |
|---|---|---|
| **Strong acid + strong base** | **= 7** | Inert conjugates, neutral salt |
| **Weak acid + strong base** | **> 7 (basic)** | Produces a weak conjugate base + even weaker conjugate acid ($\\text{H}_2\\text{O}$) → excess $\\text{OH}^-$ |
| **Strong acid + weak base** | **< 7 (acidic)** | Produces a weak conjugate acid → excess $\\text{H}^+$ |
| **Weak acid + weak base** | **≈ 7 (depends)** | Shallow curve; near neutral, slightly toward the stronger partner |

:::mnemonic
**Titration tug-of-war:** the **stronger** species **pulls** the equivalence point into **its** pH territory. Strong base wins → basic equivalence point; strong acid wins → acidic equivalence point; evenly matched → near neutral.
:::

##### Reading the starting pH
To identify a curve, read its **starting** point and locate the equivalence point:

- $\\text{pH} \\gg 7$ at start → titrand is a **strong base**
- $\\text{pH} > 7$ (slightly) → **weak base**
- $\\text{pH} < 7$ (slightly) → **weak acid**
- $\\text{pH} \\ll 7$ → **strong acid**

#### Strong acid + strong base
Titrating $\\text{HCl}$ with $\\text{NaOH}$ gives a curve that is flat at the extremes and **rises sharply** through the **equivalence point at pH 7**. Small base additions barely move the pH except **near the equivalence point**, where the slope is steepest (locate the equivalence point at the **midpoint of the steepest region**).

#### Weak acid + strong base

![Figure 10.10 — Weak acid (CH₃COOH) titrated with strong base (NaOH): higher starting pH, a gentle buffering plateau, and an equivalence point above 7.](${fig(3, 3).src})

Compared with strong acid/strong base:

1. **Higher initial pH** (weak acid dissociates less → lower $[\\text{H}^+]$).
2. **Gentler rise** with a buffering plateau early on.
3. **Equivalence point > 7** (basic), because the products are a weak conjugate base + even weaker conjugate acid (water).

#### Strong acid + weak base

![Figure 10.11 — Strong acid (HCl) titrated into a weak base (NH₃): an inversion of the weak-acid curve, with an equivalence point below 7.](${fig(3, 4).src})

This curve is the **inversion** of weak-acid/strong-base: it **starts basic** (typically pH 10–12) and **drops** as acid is added, with an **equivalence point < 7** (acidic) because the products favor a stronger conjugate acid.

#### Weak acid + weak base
An **intermediate** of the above: initial pH typically **3–11**, with a **very shallow** change at the equivalence point (near neutral). Indicators are **less useful** here — the pH change is too gradual to mark sharply, so these titrations are **rarely performed**.

#### Polyvalent acids and bases

![Figure 10.12 — Polyvalent titration of Na₂CO₃ with HCl: two buffering plateaus and two equivalence points, one per dissociable proton.](${fig(3, 5).src})

A polyprotic titration shows **multiple equivalence points and buffer regions** — one set per dissociable proton. For $\\text{Na}_2\\text{CO}_3$ titrated with $\\text{HCl}$:

| Region | Predominant species | Feature |
|---|---|---|
| **I** | $\\text{CO}_3^{2-}$ | Little acid added |
| **I → II boundary** | $\\text{CO}_3^{2-} \\approx \\text{HCO}_3^-$ | **First buffer region**, center = **half-equivalence point**, $\\text{p}K_a = 10.25$ |
| **II → III boundary** | — | **First equivalence point** (steep), all $\\text{CO}_3^{2-} \\to \\text{HCO}_3^-$ |
| **III → IV boundary** | $\\text{HCO}_3^- \\approx \\text{H}_2\\text{CO}_3$ | **Second buffer region** / half-equivalence point, $\\text{p}K_a = 6.37$ |
| **IV → V boundary** | — | **Second equivalence point**, all $\\text{HCO}_3^- \\to \\text{H}_2\\text{CO}_3$ |

The **speciation plot** (Figure 10.8) makes the same point: at any pH **only two forms coexist**, so each conjugate is titrated separately.

![Figure 10.8 — Speciation plot of phosphoric acid: at any given pH only two species are present, so each conjugate is titrated in turn.](${fig(3, 1).src})

Acidic/basic **amino acids** titrate similarly but with **three** equivalence points (carboxyl, amino, and the ionizable side chain).

#### Buffers
A **buffer** = a **weak acid + its conjugate-base salt** (acid buffer) **or** a **weak base + its conjugate-acid salt** (base buffer). It **resists pH change** on adding small amounts of acid or base.

| Buffer | Components | Type |
|---|---|---|
| Acetic acid / sodium acetate | $\\text{CH}_3\\text{COOH}$ / $\\text{CH}_3\\text{COO}^-\\text{Na}^+$ | **Acid buffer** |
| Ammonia / ammonium chloride | $\\text{NH}_3$ / $\\text{NH}_4^+\\text{Cl}^-$ | **Base buffer** |

How it resists change (acetate buffer):

$$\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{CH}_3\\text{COO}^-$$

- **Add strong base ($\\text{OH}^-$):** reacts with $\\text{H}_3\\text{O}^+$; more acetic acid dissociates (shift **right**) to restore $[\\text{H}_3\\text{O}^+]$ → pH barely moves.
- **Add strong acid ($\\text{H}^+$):** reacts with acetate to form weak acetic acid (shift **left**) → $[\\text{H}^+]$ barely rises.

##### The bicarbonate buffer system

$$\\text{CO}_2\\,(g) + \\text{H}_2\\text{O}\\,(l) \\rightleftharpoons \\text{H}_2\\text{CO}_3\\,(aq) \\rightleftharpoons \\text{H}^+\\,(aq) + \\text{HCO}_3^-\\,(aq)$$

The body's key blood buffer is the $\\text{H}_2\\text{CO}_3 / \\text{HCO}_3^-$ pair ($\\text{p}K_a = 6.37$), holding blood pH near **7.4** — just outside the optimal $\\text{p}K_a \\pm 1$ window, which actually helps because **acidemia** is the more common threat.

:::realworld
The bicarbonate buffer is tied to **breathing**. In **metabolic acidosis** (excess $\\text{H}^+$), the respiratory rate **rises** to blow off $\\text{CO}_2$, shifting the equilibrium **left** and lowering $[\\text{H}^+]$. Conditions stressing this balance: COPD, renal tubular acidosis, diabetic ketoacidosis, lactic acidosis, hyperventilation — *MCAT Biology Review*, Ch. 6.
:::

##### Henderson–Hasselbalch equation
For an **acid buffer**:

$$\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$$

For a **base buffer**:

$$\\text{pOH} = \\text{p}K_b + \\log\\dfrac{[\\text{B}^+]}{[\\text{BOH}]}$$

- When $[\\text{A}^-] = [\\text{HA}]$, $\\log(1) = 0$ → **$\\text{pH} = \\text{p}K_a$**. This is the **half-equivalence point**, where buffering capacity is **optimal**.
- Doubling **both** concentrations (same ratio) leaves pH unchanged but **doubles buffering capacity** — the system absorbs more added acid/base before the pH budges.
- Optimal buffering range: **$\\text{p}K_a \\pm 1$**.

:::keyconcept
At the **half-equivalence point**, $[\\text{HA}] = [\\text{A}^-]$ so $\\text{pH} = \\text{p}K_a$ — the single most useful titration shortcut. Henderson–Hasselbalch is just a **rearrangement of the $K_a$ expression** after taking $-\\log$ of both sides.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Definitions',
        points: [
          '**Arrhenius:** acids dissociate to give excess $\\text{H}^+$; bases give excess $\\text{OH}^-$ (aqueous only).',
          '**Brønsted–Lowry:** acids donate $\\text{H}^+$; bases accept $\\text{H}^+$. **Lewis:** acids accept an electron pair; bases donate one.',
          'All Arrhenius ⊂ Brønsted–Lowry ⊂ Lewis — but the **converse is not true** (e.g., $\\text{BF}_3$ is a Lewis acid but not a B–L acid).',
          '**Amphoteric** species act as acid *or* base; **amphiprotic** ones can specifically donate/accept a proton (water, amino acids, $\\text{HCO}_3^-$, $\\text{HSO}_4^-$). Metal oxides/hydroxides are amphoteric but **not** amphiprotic.'
        ]
      },
      {
        section: 'Properties',
        points: [
          '$K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$ at 298 K; like all $K$, it depends **only on temperature**.',
          '$\\text{pH} = -\\log[\\text{H}^+]$, $\\text{pOH} = -\\log[\\text{OH}^-]$, and $\\text{pH} + \\text{pOH} = 14$ at 298 K.',
          '**Strong** acids/bases dissociate completely; **weak** ones partially, with $K_a$/$K_b$ (smaller $K$ = weaker).',
          'Conjugates: $K_a \\times K_b = K_w$. Strong acid/base ⇒ **inert** conjugate; weak ⇒ weak conjugate.',
          '**Neutralization** forms a salt (± water); salt hydrolysis sets the final pH by the strong/weak combination.'
        ]
      },
      {
        section: 'Polyvalence and Normality',
        points: [
          'An **equivalent** = one mole of $\\text{H}^+$ (acid) or one mole of $\\text{OH}^-$ (base).',
          '**Polyvalent/polyprotic** species give multiple equivalents per mole ($\\text{H}_2\\text{SO}_4 \\to 2$, $\\text{H}_3\\text{PO}_4 \\to 3$).',
          '**Normality** $N = M \\times (\\text{equiv/mol})$; **gram equivalent weight** = molar mass ÷ equiv/mol.'
        ]
      },
      {
        section: 'Titration and Buffers',
        points: [
          '**Titrant** (known $N$) is added to **titrand** (known $V$) until $N_a V_a = N_b V_b$ at the equivalence point.',
          'Equivalence-point pH: SA+SB = 7; weak acid+SB > 7; SA+weak base < 7; weak+weak ≈ near neutral.',
          'The **half-equivalence point** is the buffer-region center where $[\\text{HA}] = [\\text{A}^-]$ and $\\text{pH} = \\text{p}K_a$; the **endpoint** is the indicator color change.',
          'Choose an indicator with **$\\text{p}K_a$ near the equivalence-point pH**. Polyprotic species show multiple equivalence/buffer regions.',
          'A **buffer** (weak acid + conjugate salt, or weak base + conjugate salt) resists pH change; **Henderson–Hasselbalch:** $\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}$.'
        ]
      }
    ],
    mnemonics: [
      '**The three definitions nest:** **A**rrhenius ⊂ **B**rønsted–Lowry ⊂ **L**ewis ("ABL", narrow → broad). One-way only — Lewis catches species the others miss.',
      '**Brønsted = Bare proton; Lewis = Lone pair.** B–L tracks the moving $\\text{H}^+$; Lewis tracks the electrons forming the bond.',
      '**Strong acids (the 6):** $\\text{HCl}$, $\\text{HBr}$, $\\text{HI}$, $\\text{H}_2\\text{SO}_4$, $\\text{HNO}_3$, $\\text{HClO}_4$. The three hydrohalics **HCl/HBr/HI** (but **HF is WEAK**), plus **sulfuric, nitric, perchloric** ("So I Need a Perch"). If not on this list, treat it as weak.',
      '**Strong bases:** $\\text{NaOH}$, $\\text{KOH}$, and soluble **Group IA** (and heavy IIA: Ca, Sr, Ba) hydroxides. Molecular **weak bases are almost always amines.**',
      '**Nomenclature:** "-**ate** ➜ -**ic**, -**ite** ➜ -**ous**" (more O = ate/ic; less O = ite/ous); -**ide** ➜ **hydro__ic**. Hook: "I **ate** something **ic**ky; the dynam**ite** is danger**ous**."',
      '**Titration tug-of-war:** the stronger partner drags the equivalence point into its pH zone — strong base ⇒ basic, strong acid ⇒ acidic, evenly matched ⇒ near 7.',
      '**Half-equivalence ⇒ $\\text{pH} = \\text{p}K_a$** (because $[\\text{HA}] = [\\text{A}^-]$, $\\log 1 = 0$). Best buffering sits within $\\text{p}K_a \\pm 1$.',
      '**Endpoint ≠ equivalence point:** the **endpoint** is when the *indicator* changes color; pick an indicator whose $\\text{p}K_a$ matches the *equivalence-point* pH so the two nearly coincide.'
    ],
    keyConcepts: [
      '**$K_w$ is temperature-only.** $[\\text{H}^+][\\text{OH}^-] = 10^{-14}$ holds at 298 K; concentration, pressure, and volume changes never alter $K_w$. "pH 7 = neutral" is a 25 °C statement.',
      '**$K_a$ and $K_b$ are inversely linked through $K_w$:** $K_a \\times K_b = K_w$, so a strong acid necessarily has a near-inert (very weak) conjugate base.',
      '**Equivalence-point pH is set by the conjugates produced**, not by "halfway" — weak acid + strong base lands basic (> 7) because the products favor $\\text{OH}^-$.',
      '**Buffers work by Le Châtelier:** the weak-acid/conjugate-base pair shifts to consume added $\\text{H}^+$ or $\\text{OH}^-$; buffering is strongest at $\\text{pH} = \\text{p}K_a$.',
      '**Don\'t blindly trust $\\text{pH} = -\\log C$ for ultra-dilute solutions:** near $10^{-7}\\ \\text{M}$ the autoionization of water dominates (a $10^{-8}\\ \\text{M}$ HCl is pH ≈ 6.98, not 8).'
    ],
    equations: [
      { name: 'Autoionization constant of water', tex: 'K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}', note: 'At 298 K (25 °C). Depends only on temperature; increases above 298 K (endothermic).' },
      { name: 'pH and pOH', tex: '\\text{pH} = -\\log[\\text{H}^+] \\quad\\quad \\text{pOH} = -\\log[\\text{OH}^-]', note: 'p-scale = negative log. Acidic pH < 7, neutral = 7 (25 °C), basic > 7.' },
      { name: 'pH–pOH relationship', tex: '\\text{pH} + \\text{pOH} = 14', note: 'For aqueous solutions at 298 K; from log(xy) = log x + log y applied to Kw.' },
      { name: 'p-scale estimate', tex: '\\text{p value} \\approx m - 0.n', note: 'For a value n × 10⁻ᵐ (1 < n < 10); 0.n = n shifted one decimal left. Calculator-free shortcut.' },
      { name: 'Acid dissociation constant', tex: 'K_a = \\dfrac{[\\text{H}_3\\text{O}^+][\\text{A}^-]}{[\\text{HA}]}', note: 'Weak acid HA + H₂O ⇌ H₃O⁺ + A⁻. Smaller Kₐ = weaker acid. Water omitted (pure liquid).' },
      { name: 'Base dissociation constant', tex: 'K_b = \\dfrac{[\\text{B}^+][\\text{OH}^-]}{[\\text{BOH}]}', note: 'Weak base BOH ⇌ B⁺ + OH⁻. Smaller K_b = weaker base.' },
      { name: 'Ka–Kb–Kw relationship', tex: 'K_a \\times K_b = K_w \\quad\\Rightarrow\\quad \\text{p}K_a + \\text{p}K_b = 14', note: 'For a conjugate acid–base pair at 298 K; Kₐ and K_b are inversely related.' },
      { name: 'Equivalence point (normality)', tex: 'N_a V_a = N_b V_b', note: 'At the equivalence point, acid equivalents = base equivalents. Any consistent volume unit works.' },
      { name: 'Henderson–Hasselbalch (acid buffer)', tex: '\\text{pH} = \\text{p}K_a + \\log\\dfrac{[\\text{A}^-]}{[\\text{HA}]}', note: 'When [A⁻] = [HA], pH = pKₐ (half-equivalence point, optimal buffering).' },
      { name: 'Henderson–Hasselbalch (base buffer)', tex: '\\text{pOH} = \\text{p}K_b + \\log\\dfrac{[\\text{B}^+]}{[\\text{BOH}]}', note: 'When [B⁺] = [BOH], pOH = pK_b.' },
      { name: 'Normality', tex: 'N = M \\times (\\text{equivalents per mole})', note: 'e.g., 2 M H₃PO₄ = 6 N; gram equivalent weight = molar mass ÷ equivalents per mole.' }
    ]
  },

  questions: raw.questions
};
