// Chapter 12 — Data-Based and Statistical Reasoning.
// Re-authored to the rich-formatting quality bar from the source PDF text.
// Figures referenced from ch12.json; questions resolve to [] (JSON has 0 questions).
// recap/detail markdown authored here.
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 12,
  title: 'Data-Based & Statistical Reasoning',
  subtitle: 'Measures of central tendency · distributions · measures of distribution · probability · statistical testing · charts, graphs & tables · applying data',

  blocks: [
    /* ─────────────────────── 12.1 Measures of Central Tendency ─────────────────────── */
    {
      id: 's1', num: '12.1', title: 'Measures of Central Tendency',
      goals: [
        'Calculate mean, median, and mode for a data set',
        'Predict the best measure of central tendency for a given data set'
      ],
      recap: `
- **Measures of central tendency** describe the *middle* of a sample: **mean**, **median**, **mode**.
- **Mean** = arithmetic average; best when values cluster, but it is **most sensitive to outliers**.
- **Median** = the midpoint (50% above, 50% below); **least susceptible to outliers** — order the data first.
- **Mode** = most frequent value; a set can have **multiple modes** or **none**. Peaks on a distribution = modes.
- **Mean ≫ median or mean ≪ median** signals **outliers / skew**; mean ≈ median signals a **symmetrical** distribution.
`,
      detail: `
#### What "central tendency" means
**Measures of central tendency** give a **single value** that represents the **middle** of a group of data. "Middle" can be defined three ways — the average, the midpoint, or the most common value — and the **gap between them** reveals the shape of a distribution.

| Measure | Definition | Outlier sensitivity | Best used when |
|---|---|---|---|
| **Mean** (arithmetic average) | Sum of values ÷ number of values; weighs every value equally | **Most affected** | Values cluster close together (roughly normal) |
| **Median** | Midpoint of an ordered set — 50% above, 50% below | **Least affected** | Outliers present; not ideal for huge ranges or multiple modes |
| **Mode** | The value that appears **most often** | Unaffected | Identifying peaks; categorical data |

#### Mean
The **mean** (more precisely the **arithmetic mean**) is the sum of all values divided by the count:

$$\\bar{x}=\\dfrac{\\sum_{i=1}^{n} x_i}{n}=\\dfrac{x_1+x_2+\\cdots+x_n}{n}$$

where $x_1$ to $x_n$ are the data points and $n$ is the number of points. Like all measures of central tendency, the mean can be a **parameter** (population) or a **statistic** (sample).

- A single **outlier** — an extremely large or small value — can drag the mean toward one end of the range.
- *Example:* U.S. average income ≈ \\$70,000, yet half the population earns under \\$50,000 — a few very high earners shift the **mean** upward.

##### Worked example — Ray's birthday party
Ages of attendees: **23, 22, 25, 22, 22, 24, 36, 20**.

$$\\bar{x}=\\dfrac{23+22+25+22+22+24+36+20}{8}=\\dfrac{194}{8}=24.25$$

The mean (24.25) is greater than **all but two** values — the **outlier (36)** has shifted it high. A single outlier does **not invalidate** the mean, but it makes interpreting in context necessary.

#### Median
The **median** is the midpoint of an ordered data set.

- **Odd $n$:** the median is an actual data point.
- **Even $n$:** the median is the **mean of the two central points**.
- **Always sort the data first** (ascending). The median's position is:

$$\\text{median position}=\\dfrac{n+1}{2}$$

For even $n$ this gives a non-integer (e.g. $n=18 \\rightarrow 9.5$), meaning the median is the **mean of the 9th and 10th** values.

##### Same party, the median
Reordered: **20, 22, 22, 22, 23, 24, 25, 36** — with $n=8$, the median is the average of the 4th and 5th values:

$$\\text{median}=\\dfrac{22+23}{2}=22.5$$

The median (22.5) sits near most values and **ignores the outlier**, so it is a **better** indicator of central tendency here than the mean (24.25).

:::keyconcept
The **median divides the data set into two equal halves** — **50%** of values lie **above** it and **50%** lie **below** it.
:::

#### Mode
The **mode** is simply the value that appears **most often**.

- A set may have **several modes** or — if every value appears equally — **no mode**.
- On a distribution, **peaks are modes**. The mode is rarely used *as* the central tendency, but the **number** of modes and their **separation** is informative (a two-peak set may be worth splitting into two analyses).

#### Reading the mean–median gap
- **Mean and median far apart** → **outliers** or a **skewed** distribution.
- **Mean and median very close** → a **symmetrical** distribution.

:::expertise
The presence of **outliers** is the key to deciding whether the **mean** is an appropriate measure of central tendency — and may signal a **measurement error** by the investigators. When you see a question contrasting mean vs. median, check for an outlier first.
:::
`
    },

    /* ─────────────────────── 12.2 Distributions ─────────────────────── */
    {
      id: 's2', num: '12.2', title: 'Distributions',
      goals: [
        'Assess whether data without a normal distribution can be analyzed with measures of central tendency and distribution',
        'Distinguish between normal, skewed, and bimodal distributions',
        'Describe the relationship between mean, median, and mode in different types of distributions'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 12.1 — The normal distribution: mean = median = mode at the center. ~68% of data lie within 1 SD of the mean, ~95% within 2 SD, ~99% within 3 SD.' }],
      recap: `
- The **normal distribution** is symmetrical: **mean = median = mode**, and the **68–95–99% rule** (within 1/2/3 SD) governs most MCAT stats.
- The **standard distribution** = a normal distribution with **mean 0, SD 1**; any normal curve can be transformed to it.
- **Skewed** = a **tail** on one side. **Skew direction = direction of the TAIL** (not the bulk). Negative/left skew → **mean < median**; positive/right skew → **mean > median**.
- **Bimodal** = **two peaks** with a valley; may have only one strict mode, but is still called bimodal. Can be split into two analyses.
- Non-normal data can **still** be analyzed with measures of central tendency and distribution.
`,
      detail: `
#### Why shape matters
A single statistic is often not enough — the **overall shape** of a distribution affects every measure of central tendency *and* the measures of spread (range, SD) covered next.

#### Normal distributions
We most often work with a **normal distribution** — a symmetric bell curve.

![The normal distribution](${fig(1, 1).src})

- Any normal distribution can be transformed into the **standard distribution** (**mean = 0, SD = 1**), which has been "solved" so we can read off probabilities and population percentages.
- It is the basis of the **bell curve** — including **MCAT scores**.
- In a normal distribution, **mean = median = mode**, all at the center.

##### The 68–95–99 rule
| Within… | of the mean | Contains |
|---|---|---|
| **±1 SD** | one standard deviation | **≈ 68%** of data |
| **±2 SD** | two standard deviations | **≈ 95%** of data |
| **±3 SD** | three standard deviations | **≈ 99%** of data |

:::keyconcept
The **normal distribution** and its counterpart the **standard distribution** underlie nearly all statistical testing on the MCAT. In the normal distribution, **all three measures of central tendency are identical**.
:::

#### Skewed distributions
A **skewed** distribution has a **tail** on one side. The classic student trap: the visual *shift* of the bulk looks **opposite** to the named direction.

![Skewed distributions](${fig(2, 0).src})

| Skew | Tail is on the… | Mean vs. median | Order (low → high) |
|---|---|---|---|
| **Negative (left) skew** | **left** / negative side | **mean < median** | mean < median < mode |
| **Positive (right) skew** | **right** / positive side | **mean > median** | mode < median < mean |

Because the **mean** is more sensitive to outliers than the median, the long tail **pulls the mean toward it**.

:::keyconcept
The **direction of skew is set by the TAIL**, *not* by where the bulk of the data sits. A long tail on the **right** = **positive (right) skew**, even though the hump is on the left.
:::

:::mnemonic
**"The tail tells the tale."** The skew is named for the side the **thin tail** points to. And **the mean chases the tail** — it gets dragged toward the outliers, so right-skew → mean is highest, left-skew → mean is lowest.
:::

#### Bimodal distributions
A distribution with **two peaks separated by a valley** is **bimodal**.

![Bimodal distribution](${fig(2, 0).src})

- Strictly, a bimodal shape might have only **one** true mode if one peak is slightly higher — but we still call it **bimodal**.
- If the peaks are well separated (or the valley has little data), it can be analyzed as **two separate distributions** — but it does **not have to be**; the same central-tendency and spread measures still apply.

:::keyconcept
**Non-normal data are still analyzable.** By the **central limit theorem** (beyond MCAT scope), any distribution can be transformed toward normal — and even untransformed, skewed and bimodal data can be described with measures of central tendency and distribution.
:::
`
    },

    /* ─────────────────────── 12.3 Measures of Distribution ─────────────────────── */
    {
      id: 's3', num: '12.3', title: 'Measures of Distribution',
      goals: [
        'Identify outliers using interquartile range or standard deviation',
        'Describe the relationship between range and standard deviation',
        'Justify whether certain measures of distribution are or are not appropriate for a given situation'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 12.3 — A bimodal distribution: two peaks with a central valley, often worth analyzing as two separate sub-distributions.' }],
      recap: `
- **Spread** measures: **range** (max − min, ignores everything else), **IQR** ($Q_3-Q_1$), and **standard deviation** (spread about the mean).
- **IQR outlier rule:** any value **> 1.5·IQR below $Q_1$** or **above $Q_3$** is an outlier.
- **SD outlier rule:** any value **more than 3 SD** from the mean is an outlier. SD uses **$n-1$** in the denominator.
- **Range ≈ 4·SD** for a normal distribution (so **SD ≈ ¼·range** when the full data set is unavailable).
- **Outliers** arise from a **true anomaly**, a **measurement error** (→ exclude), or a **non-normal distribution**; handling rules must be set **before** the study.
`,
      detail: `
#### Describing spread
Beyond the "center," distributions are characterized by the **spread** of their data. **Range** is an absolute spread; **IQR** and **standard deviation** describe distance from a measure of central tendency and let us flag **outliers**.

#### Range
$$\\text{range} = x_{max} - x_{min}$$

- Ignores the **number** of data points and the location of any central measure.
- Therefore **heavily affected by outliers**.
- When the full data set isn't available for a normal distribution, **estimate** $\\sigma \\approx \\tfrac{1}{4}\\,\\text{range}$.

#### Interquartile range (IQR)
**Quartiles** divide ordered data into four equal parts; the median is $Q_2$. The MCAT uses the simplest method:

- **$Q_1$ position:** multiply $n$ by $\\tfrac{1}{4}$. Whole number → average that value with the next; decimal → **round up** and take that position.
- **$Q_3$ position:** multiply $n$ by $\\tfrac{3}{4}$, then apply the same rule.

$$\\text{IQR} = Q_3 - Q_1$$

:::keyconcept
**IQR outlier rule:** a value is an outlier if it lies **more than $1.5 \\times \\text{IQR}$ below $Q_1$** or **more than $1.5 \\times \\text{IQR}$ above $Q_3$**.
:::

##### Worked example — is the 36-year-old an outlier?
Ordered ages: **20, 22, 22, 22, 23, 24, 25, 36** ($n=8$).

- $8 \\times \\tfrac{1}{4}=2 \\rightarrow Q_1=\\dfrac{22+22}{2}=22$
- $8 \\times \\tfrac{3}{4}=6 \\rightarrow Q_3=\\dfrac{24+25}{2}=24.5$
- $\\text{IQR}=24.5-22=2.5$
- **Upper fence:** $24.5 + 1.5(2.5) = 28.25$; **lower fence:** $22 - 1.5(2.5) = 18.25$.
- **36 > 28.25**, so **36 is an outlier**.

#### Standard deviation
**Standard deviation** is the most informative (and most laborious) spread measure, computed relative to the **mean**:

$$\\sigma = \\sqrt{\\dfrac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}$$

The recipe: take each value's **difference from the mean**, **square** it, **sum**, divide by **$n-1$**, then take the **square root**. Using $n-1$ (not $n$) is mathematically — not practically — important and its justification is beyond MCAT scope.

##### Worked example — SD of 1, 2, 3, 9, 10
$\\bar{x}=\\dfrac{1+2+3+9+10}{5}=5$. Tabulate squared deviations:

| $x_i$ | $x_i-\\bar{x}$ | $(x_i-\\bar{x})^2$ |
|---|---|---|
| 1 | −4 | 16 |
| 2 | −3 | 9 |
| 3 | −2 | 4 |
| 9 | +4 | 16 |
| 10 | +5 | 25 |

$$\\sigma=\\sqrt{\\dfrac{16+9+4+16+25}{5-1}}=\\sqrt{\\dfrac{70}{4}}=\\sqrt{17.5}\\approx 4.18$$

:::keyconcept
**SD outlier rule:** any value **more than three standard deviations** from the mean is an outlier. On a normal distribution, **68% / 95% / 99%** of data fall within **1 / 2 / 3 SD** of the mean.
:::

##### Range vs. SD
- For a **normal** distribution, **range ≈ 4σ** (hence $\\sigma \\approx \\tfrac{1}{4}\\,\\text{range}$).
- This **fails for non-normal data**: in the set above, range = 9 but $4\\sigma \\approx 16.7$ — because the data are **not normally distributed**.

#### Handling outliers
Outliers come from one of **three** causes:

1. A **true statistical anomaly** (e.g., a person over seven feet tall).
2. A **measurement error** (e.g., reading centimeters instead of inches) — **exclude** these points.
3. A **non-normal distribution** (e.g., a long tail) — repeated or larger samples clarify this.

:::expertise
Finding an outlier should **trigger an investigation** into which cause applies. A measurement-error point is **dropped**; a true-but-unrepresentative value may be **weighted, kept, or excluded** — but the **protocol for handling outliers must be set before the study begins**, never after one appears.
:::

:::keyconcept
The **average raw deviation from the mean is always zero** (positives and negatives cancel). That is *why* SD **squares** the deviations before summing and takes the square root at the end — so the spread doesn't cancel out.
:::
`
    },

    /* ─────────────────────── 12.4 Probability ─────────────────────── */
    {
      id: 's4', num: '12.4', title: 'Probability',
      goals: [
        'Define independence, mutual exclusivity, and exhaustiveness',
        'Calculate the probability of an event, or of co-occurrence of multiple independent events'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 12.4 — Two independent events co-occurring: P(A and B) = P(A) × P(B), the overlap of the two probabilities.' }],
      recap: `
- **Independent events** don't affect each other → probabilities never change. **Dependent events** do (order matters).
- **Mutually exclusive outcomes** can't happen together → P(both) = **0**. **Exhaustive** outcomes = no other possibilities exist.
- **"AND" → multiply:** $P(A \\cap B) = P(A)\\times P(B)$ (for independent events).
- **"OR" → add (then subtract the overlap):** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.
- Probability on the MCAT usually rides inside a **science** question — especially **genetics** (Punnett squares, Hardy–Weinberg).
`,
      detail: `
#### Where probability shows up
Probability is rarely tested alone on the MCAT — it appears inside **science questions**, most often **genetics** (**Punnett squares**, **Hardy–Weinberg equilibrium**). It also underlies **statistical testing** (next section).

#### Independence, mutual exclusivity, exhaustiveness
| Term | Applies to | Meaning |
|---|---|---|
| **Independence** | **Events** | One event has **no effect** on another (roll a die, re-roll — still $\\tfrac{1}{6}$). Order doesn't matter. |
| **Dependence** | **Events** | One outcome **changes** the next probability (drawing balls without replacement). Order matters. |
| **Mutual exclusivity** | **Outcomes** | Two outcomes **cannot co-occur** (heads *and* tails on one flip); P(both) = **0**. |
| **Exhaustiveness** | **Outcomes** | The set covers **every** possibility (heads or tails on a coin). |

- **Dependent example:** a jar with 5 red + 5 blue balls. First draw red = $\\tfrac{5}{10}$. After removing a red, drawing red again = $\\tfrac{4}{9}$; if a blue was removed, red = $\\tfrac{5}{9}$. The **second probability depends on the first outcome**.

:::keyconcept
**Independent events never change each other's probabilities.** A "fresh" die or coin has no memory of prior results — a common MCAT trap (the "gambler's fallacy").
:::

#### Calculations
For **independent** events, co-occurrence is the **product**:

$$P(A \\cap B) = P(A \\text{ and } B) = P(A)\\times P(B)$$

![Two independent events co-occurring](${fig(3, 0).src})

- *Two heads in a row:* $0.5 \\times 0.5 = 0.25$.

The probability of **at least one** of two events is the **sum minus the overlap**:

$$P(A \\cup B) = P(A \\text{ or } B) = P(A) + P(B) - P(A \\cap B)$$

:::mnemonic
**AND = ×, OR = + (then subtract the both).** "And" narrows possibilities, so you **multiply**; "or" widens them, so you **add** — but subtract the overlap once so it isn't double-counted.
:::

##### Worked example — diabetes & obesity
A population: 10% have diabetes, 30% are obese, **7%** have both.

- **Independent?** If so, $P(\\text{both}) = 0.10 \\times 0.30 = 0.03$. The actual value is **0.07 ≠ 0.03**, so the events are **not independent**.
- **At least one condition:** $P(A \\cup B) = 0.10 + 0.30 - 0.07 = 0.33 = \\textbf{33\\%}$.

:::expertise
A classic probability item: "at least one" is easiest as the **complement**. The chance of **at least one male** in 10 births = $1 - P(\\text{all female}) = 1 - (0.5)^{10} \\approx 99.90\\%$ — reword "at least one" as "1 minus none."
:::
`
    },

    /* ─────────────────────── 12.5 Statistical Testing ─────────────────────── */
    {
      id: 's5', num: '12.5', title: 'Statistical Testing',
      goals: [
        'Distinguish between hypothesis tests and confidence intervals',
        'Recall how p-values are calculated during a hypothesis test',
        'Predict the outcome of a test given its p- and α-values',
        'Explain the importance of power in statistical testing'
      ],
      recap: `
- **Null hypothesis ($H_0$)** = always a hypothesis of **equivalence** (no difference). The **alternative ($H_a$)** can be directional or nondirectional.
- A **test statistic** (z- or t-test) yields a **p-value** = probability the result arose by **chance if $H_0$ is true**.
- **Compare p to α** (commonly 0.05): **p < α → reject $H_0$** (statistically significant); **p > α → fail to reject $H_0$**.
- **Type I error (α)** = false positive (report a difference that isn't real); **Type II error (β)** = false negative. **Power = 1 − β**; **confidence** = correctly failing to reject a true $H_0$.
- **Confidence intervals** are the *reverse*: start with a confidence level (95%) → build a **range** around the sample mean (**mean ± z·SD**).
`,
      detail: `
#### Hypothesis testing
Both hypothesis tests and confidence intervals let us draw conclusions about **populations** from **sample** data, interpreted through **probability** and an accepted **risk of error**.

- The **null hypothesis ($H_0$)** is **always** a statement of **equivalence** — two populations are equal, or one population equals a given parameter.
- The **alternative hypothesis ($H_a$)** can be:
  - **Nondirectional** — the populations are simply *not equal*.
  - **Directional** — e.g., mean of A is *greater than* mean of B.

##### p-values and significance
- The most common tests — **z-tests** and **t-tests** — use the **standard distribution** or the related **t-distribution**.
- A **test statistic** is computed and compared to a table to find the **p-value**: the likelihood of obtaining that statistic by **random chance, assuming $H_0$ is true**.
- Compare the p-value to the **significance level $\\alpha$** (commonly **0.05**):

| Comparison | Decision | Interpretation |
|---|---|---|
| **$p > \\alpha$** | **Fail to reject $H_0$** | **No** statistically significant difference |
| **$p < \\alpha$** | **Reject $H_0$** | A **statistically significant** difference exists |

##### Errors, power, and confidence
$\\alpha$ is the risk we accept of **incorrectly rejecting** $H_0$ — a **Type I error**. A **Type II error** is incorrectly **failing to reject** $H_0$.

| | $H_0$ **true** (no difference) | $H_a$ **true** (difference exists) |
|---|---|---|
| **Reject $H_0$** | **Type I error ($\\alpha$)** — false positive | **Power ($1-\\beta$)** — correct |
| **Fail to reject $H_0$** | **Confidence** — correct | **Type II error ($\\beta$)** — false negative |

- **Type I error (α):** report a difference that **does not exist** (false positive).
- **Type II error (β):** report **no difference** when one **does exist** (false negative).
- **Power = $1-\\beta$:** probability of **correctly rejecting** a false $H_0$.
- **Confidence:** probability of **correctly failing to reject** a true $H_0$.

:::mnemonic
**Type I = "I see something that isn't there"** (false positive, α). **Type II = "I miss something that is there"** (false negative, β). **Power** = the test's ability to **catch a real difference** (1 − β).
:::

#### Confidence intervals
A **confidence interval** is essentially the **reverse** of a hypothesis test: instead of finding a p-value, you start with a **desired confidence level** (95% is standard), look up the matching **z- or t-score**, and build a **range** around the sample mean:

$$\\text{CI} = \\bar{x} \\pm (z)(\\sigma)$$

##### Worked example — mean age
Sample mean = 30, SD = 3, 95% confidence ($z = 1.96$, provided on Test Day):

$$30 \\pm (1.96)(3) \\;\\Rightarrow\\; 30 - 5.88 \\text{ to } 30 + 5.88 = 24.12 \\text{ to } 35.88$$

We are **95% confident** the true population mean age lies between **24.12 and 35.88**.

:::keyconcept
A **wider interval** corresponds to a **higher confidence level**. To be *more* sure the true mean is captured, you must widen the range — 99% confidence gives a wider interval than 95%.
:::

:::expertise
On the MCAT, **error bars** on a graph usually represent a **95% confidence interval**. Two groups differ **significantly** when their error bars **do not overlap** — and to support an intervention, the CI of the treated group should sit on the "better" side of a clinically meaningful cutoff.
:::
`
    },

    /* ─────────────────────── 12.6 Charts, Graphs, and Tables ─────────────────────── */
    {
      id: 's6', num: '12.6', title: 'Charts, Graphs, and Tables',
      goals: [
        'Recognize when data relationships call for transformation into semilog or log–log plots',
        'Recall the pros and cons of different types of visual data representation (pie charts, bar graphs, box plots, maps, graphs, tables)',
        'Distinguish between exponential and parabolic curves'
      ],
      images: [{ src: fig(5, 4).src, alt: fig(5, 4).alt, caption: 'Figure 12.9 — The four curve shapes to recognize on a linear graph: (a) linear, (b) parabolic, (c) exponential, (d) logarithmic.' }],
      recap: `
- **Categorical data → pie charts & bar charts; numerical data → histograms & box plots.** Maps display ≤ 2 demographic indicators.
- **Box-and-whisker:** box spans $Q_1$–$Q_3$, line = median ($Q_2$), whiskers reach min/max (or to 1.5·IQR with outliers as points).
- **Look at the AXES first.** **Linear, semilog, and log–log** plots differ *only* by axis labeling; semilog/log–log **linearize** exponential/log data.
- **Recognize 4 curve shapes:** **linear, parabolic, exponential, logarithmic.** Exponential has a **horizontal asymptote** (flat on one side); parabolic is **symmetric** with steep sides both ways.
- **Slope** ($m = \\Delta y/\\Delta x$) is read most easily from a **linear** plot. **Be wary of broken axes** — they distort scale.
`,
      detail: `
#### Why visual literacy matters
Most MCAT science passages include a **chart, graph, or table**. Draw **rough conclusions immediately**, but don't over-analyze details unless a question asks.

#### Types of charts
| Visual aid | Data type | Pros | Cons |
|---|---|---|---|
| **Pie / circle chart** | Categorical | Easy to build; great for **few** categories; shows relative amounts | **Overwhelmed by many categories**; hard to estimate exact values |
| **Bar chart** | Categorical | Holds more info than a pie; sortable by length | **Broken/misleading axes** can distort differences |
| **Histogram** | **Numerical** | Shows a **distribution**; great for finding the **mode** | Only numerical data |
| **Box plot** (box-and-whisker) | **Numerical** | Information-dense; easy **side-by-side comparison** | May hide the mean/outliers; numerical only |
| **Map** | Geographic | Shows **clustering**; integrates geography + demographics | **≤ 2 variables** before it gets cluttered |
| **Table** | Categorical / results | No estimation needed; presents data without forcing comparison | Unrelated/disjointed data may sit together |

##### Pie charts
- Show **relative amounts**; popular in **demographics**.
- Lose impact as categories grow (e.g., all 50 states on one pie is incoherent).

![Pie chart of U.S. population by state](${fig(5, 0).src})

:::expertise
Pie-chart questions are usually **qualitative** — largest/smallest slice, or combined percentage of a few groups. They rarely demand calculation, since pie charts aren't dense with data.
:::

:::bridge
Pie charts dominate **demographic** displays. Demographics is the statistical arm of sociology — see *MCAT Behavioral Sciences Review*, Ch. 11.
:::

##### Bar charts & histograms
- **Bar charts** = **categorical** data, bars sortable by length; **avoid breaks** in the axis.
- **Histograms** = **numerical** data; show the **distribution** and are excellent for spotting the **mode**.

![Bar chart of cancer-death causes](${fig(5, 1).src})

##### Box plots
- The **box** runs from **$Q_1$ to $Q_3$**; the line inside is the **median ($Q_2$)**.
- **Whiskers** reach the **min and max** — or, when outliers are drawn as points, to the largest/smallest values **within 1.5·IQR**.
- Pack lots of data into little space → ideal for **comparing** multiple groups on one axis.

![Box plot of speed-of-light measurements](${fig(5, 2).src})

##### Maps
- Display data **geographically** (health conditions, population density, ethnicity) and reveal **clustering**.
- Best with **one or two** variables at most.

![Population density by country](${fig(5, 3).src})

#### Graphs and axes
**Always look at the axes first.** Each unit must occupy equal space on a true linear axis. Beware **breaks** and **scale tricks**.

##### Four curve shapes to recognize
| Shape | Key feature |
|---|---|
| **Linear** | Straight line; constant slope |
| **Parabolic** | **Symmetric** about a center; steep on **both** sides |
| **Exponential** | **Horizontal asymptote** — flat on one side, then steep |
| **Logarithmic** | Steep then flattening (inverse of exponential) |

:::keyconcept
**Exponential vs. parabolic:** both have a steep region, but an **exponential** curve has a **horizontal asymptote** (flattens on one side), while a **parabola is symmetric** and steep on **both** sides of its vertex.
:::

##### Slope
On a linear plot you can compute the slope:

$$m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$$

The **intercepts** are good points to use (one coordinate is zero).

:::mnemonic
**Slope = rise over run** — like waking up: you have to **rise** (vertical) from bed before you **run** (horizontal). $m = \\Delta y/\\Delta x$, never the reverse.
:::

##### Semilog & log–log graphs
- A **semilog** plot keeps **one axis linear** (usually x) and the other on a **ratio scale** (10, 100, 1000…), which **linearizes** logarithmic data.
- A **log–log** plot puts **both** axes on a ratio scale.
- The **only** difference among linear, semilog, and log–log is the **axis labeling** — so read the axes carefully.

![A semilog plot](${fig(5, 6).src})

:::keyconcept
The **axes determine the plot type** and reveal the underlying relationship. A **linear** relationship needs **no transformation**; exponential/logarithmic data are best **linearized** by a semilog or log–log scale.
:::

#### Interpreting tables
- Glance only at the **title** before reading questions; tables often hold **disjointed** categorical data or raw results.
- **Unusual values** (zeros, outliers, a broken trend) and any deliberate **ordering** are likely **relevant** to the questions.
- Be ready to **convert a table into a rough graph or linear equation** — the MCAT may test **slope** without giving you a graph.
`
    },

    /* ─────────────────────── 12.7 Applying Data ─────────────────────── */
    {
      id: 's7', num: '12.7', title: 'Applying Data',
      goals: [
        'Distinguish between correlation and causation',
        'Relate the statistical results of a study to the impact of those findings on scientific knowledge and policy change'
      ],
      recap: `
- **Correlation** = any connection between variables (positive = trend together; negative = opposite directions); quantified by a **correlation coefficient** from **−1 to +1**.
- **Correlation ≠ causation.** Without an experiment, lean on **Hill's criteria** — and **temporality** is the *only* one that is **always necessary**.
- **Causation implies correlation, but correlation does not imply causation.**
- Data must be read **in the context of existing scientific knowledge** — assess impact on the hypothesis, build a plausible rationale, then judge real-world impact.
- **Statistical significance alone is NOT enough** to change policy — you also need **clinical/practical significance**.
`,
      detail: `
#### Correlation and causation
**Correlation** is a connection between variables — direct, inverse, or otherwise.

- **Positive correlation:** variables **trend together** (both rise).
- **Negative correlation:** variables trend in **opposite** directions.
- Quantified by the **correlation coefficient $r$**, a number between **−1 and +1**:

| $r$ value | Meaning |
|---|---|
| **+1** | Strong **positive** relationship |
| **0** | **No** apparent relationship |
| **−1** | Strong **negative** relationship |

:::keyconcept
**Correlation does not necessarily imply causation.** When an experiment can't be run, use **Hill's criteria** (Ch. 11) to argue for causality — and remember the **only uniformly necessary** criterion is **temporality** (cause must precede effect).
:::

:::mnemonic
**Causation ⇒ correlation, but correlation ⇏ causation.** Two causally linked variables are **always** correlated in some way; but two correlated variables may share a **confounder** with no direct link. (Think ice-cream sales vs. assaults — both ride on summer heat.)
:::

#### In the context of scientific knowledge
Interpreting data is more than stating relationships — connect findings to existing science:

1. Consider the **impact of the new data on the current hypothesis** (and integrate it into future work).
2. Develop a **plausible rationale** for the results.
3. Judge whether the evidence is **substantial and impactful enough** to change **understanding or policy**.

:::expertise
To **justify a policy or treatment change**, a finding must be **both statistically AND clinically (practically) significant**. A statistically significant result that barely moves an outcome (e.g., extending pregnancy by a few hours, or dropping systolic BP by ~1 mmHg) is **not** sufficient grounds for action.
:::

:::realworld
In the AP-study-aide trial, **error bars showing the 95% CI** were the key: the years that supported the aide were those where the two groups' intervals **did not overlap** *and* the treated group's true score sat **above the passing line**. "Statistically different" + "clinically meaningful (passing)" together made the case.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Measures of Central Tendency',
        points: [
          'Central tendency gives a **single value** for the middle of a data set.',
          'The **mean (average)** weighs all values equally and is **most affected by outliers**.',
          'The **median** is the middle value (50% above, 50% below) and is **least affected by outliers**.',
          'The **mode** is the most frequent value; a set may have **multiple modes or none**.'
        ]
      },
      {
        section: 'Distributions',
        points: [
          'The **normal distribution** is symmetrical, with **mean = median = mode**.',
          'The **standard distribution** is normal with **mean 0, SD 1**, used for most calculations.',
          '**68% / 95% / 99%** of data fall within **1 / 2 / 3 SD** of the mean.',
          '**Skew direction = the direction of the tail**; the **mean is pulled toward the tail**.',
          '**Bimodal** distributions have **two peaks** (not necessarily two strict modes) and may be analyzed as two groups.'
        ]
      },
      {
        section: 'Measures of Distribution',
        points: [
          '**Range** = max − min; **IQR** = $Q_3-Q_1$; **standard deviation** measures variability about the mean.',
          'Outliers: **> 1.5·IQR** beyond $Q_1$/$Q_3$, **or > 3 SD** from the mean.',
          'Outliers stem from **true variability, measurement error, or a non-normal distribution**.',
          'Outlier-handling procedures must be **set before the study begins**.'
        ]
      },
      {
        section: 'Probability',
        points: [
          '**Independent** events do not change with other outcomes; **dependent** events do.',
          '**Mutually exclusive** outcomes cannot co-occur; **exhaustive** sets cover every possibility.',
          '**AND → multiply** probabilities; **OR → add** them and subtract the overlap.'
        ]
      },
      {
        section: 'Statistical Testing',
        points: [
          '**Hypothesis tests** use a known distribution to decide whether the **null (no-difference) hypothesis** can be rejected.',
          'Significance is judged by comparing the **p-value to α** (commonly 0.05).',
          '**Confidence intervals** estimate the population mean as a range about the sample mean; a **wider interval = higher confidence**.'
        ]
      },
      {
        section: 'Charts, Graphs, and Tables',
        points: [
          '**Pie and bar charts** compare **categorical** data; **histograms and box plots** compare **numerical** data.',
          '**Maps** compare up to **two** demographic indicators.',
          '**Linear, semilog, and log–log** plots are distinguished by their **axes**; **slope** is easiest from a linear plot.',
          'Tables may hold related or unrelated categorical data.'
        ]
      },
      {
        section: 'Applying Data',
        points: [
          '**Correlation and causation are distinct**, linked by **Hill\'s criteria** (temporality is necessary).',
          'Data must be interpreted in the **context of the current hypothesis and existing knowledge**.',
          '**Statistical and practical (clinical) significance are distinct** — both are needed to justify action.'
        ]
      }
    ],
    mnemonics: [
      '**Central tendency outlier sensitivity:** **Mean** is the diva (most dragged by outliers) → **Median** shrugs them off (least affected) → **Mode** just counts.',
      '**Skew:** **"The tail tells the tale"** — skew is named for the thin tail, and **the mean chases the tail** (right-skew → mean highest, left-skew → mean lowest).',
      '**68–95–99:** within **1 / 2 / 3 SD** of the mean on a normal curve. (95% within 2 SD = the basis of the 95% confidence interval.)',
      '**Outlier fences:** **1.5 × IQR** beyond the quartiles, **or 3 SD** from the mean.',
      '**Probability words:** **AND = multiply**, **OR = add (minus the both)**. For "at least one," use **1 − P(none)**.',
      '**Hypothesis errors:** **Type I = "see a ghost"** (false positive, α); **Type II = "miss the real thing"** (false negative, β). **Power = 1 − β**.',
      '**Slope = rise over run** — get up (rise) before you get moving (run): $m=\\Delta y/\\Delta x$.',
      '**Causation ⇒ correlation, but correlation ⇏ causation** — and you need **statistical *and* clinical** significance to act.'
    ],
    keyConcepts: [
      '**Mean vs. median tells you the shape:** mean ≈ median → symmetric; mean far from median → outliers/skew, with the mean pulled toward the long tail.',
      '**Two outlier rules:** more than **1.5 × IQR** beyond $Q_1$/$Q_3$, **or** more than **3 standard deviations** from the mean. Set the handling rule *before* collecting data.',
      '**p-value logic:** the p-value is P(result | $H_0$ true). **p < α → reject $H_0$** (significant); **p > α → fail to reject**. α is your Type I error rate; power (1 − β) is the ability to detect a real effect.',
      '**Read the axes first:** linear, semilog, and log–log differ only by axis scaling; semilog/log–log linearize exponential and logarithmic data. Exponentials asymptote; parabolas are symmetric.',
      '**Significance ≠ importance:** statistical significance says "probably not chance"; clinical/practical significance says "actually matters." Policy change requires **both**.'
    ],
    equations: [
      { name: 'Arithmetic mean', tex: '\\bar{x}=\\dfrac{\\sum x_i}{n}', note: 'Sum of all values ÷ number of values. Most sensitive of the central-tendency measures to outliers.' },
      { name: 'Median position', tex: '\\text{position}=\\dfrac{n+1}{2}', note: 'Order data first. Even n → average the two central points; least sensitive to outliers.' },
      { name: 'Range', tex: '\\text{range}=x_{max}-x_{min}', note: 'Absolute spread; ignores all interior points → heavily skewed by outliers. For a normal set, range ≈ 4σ.' },
      { name: 'Interquartile range', tex: '\\text{IQR}=Q_3-Q_1', note: 'Spread of the middle 50%. Outlier = value > 1.5·IQR beyond Q1 or Q3.' },
      { name: 'Standard deviation', tex: '\\sigma=\\sqrt{\\dfrac{\\sum (x_i-\\bar{x})^2}{n-1}}', note: 'Variability about the mean; uses n − 1. Outlier = more than 3σ from the mean.' },
      { name: 'Probability — AND (independent)', tex: 'P(A \\cap B)=P(A)\\times P(B)', note: 'Co-occurrence of independent events; "and" → multiply.' },
      { name: 'Probability — OR', tex: 'P(A \\cup B)=P(A)+P(B)-P(A \\cap B)', note: 'At least one of two events; "or" → add, then subtract the overlap.' },
      { name: 'Confidence interval', tex: '\\text{CI}=\\bar{x}\\pm (z)(\\sigma)', note: 'Range about the sample mean; 95% CI uses z = 1.96. Wider interval = higher confidence.' },
      { name: 'Slope', tex: 'm=\\dfrac{\\Delta y}{\\Delta x}=\\dfrac{y_2-y_1}{x_2-x_1}', note: 'Rise over run; computed most easily from a linear plot.' }
    ]
  },

  questions: raw.questions
};
