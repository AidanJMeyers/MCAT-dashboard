// Chapter 12 — Separations and Purifications. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch12.json (already-correct extraction);
// the goals/recap/detail markdown and keyReview are authored here from the source text.
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 12,
  title: 'Separations and Purifications',
  subtitle: 'Solubility-based methods (extraction · filtration · recrystallization) · distillation · chromatography',

  blocks: [
    /* ─────────────────── 12.1 Solubility-Based Methods ─────────────────── */
    {
      id: 's1', num: '12.1', title: 'Solubility-Based Methods',
      goals: [
        'Recall the conditions required for two solvents to be used together in an extraction',
        'Explain why repetition is important in extraction procedures',
        'Predict whether a given solute is more likely to dissolve in the aqueous or organic layer within a separatory funnel'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 12.2 — Separatory funnel: the denser layer sinks and is drained first through the stopcock.' }],
      recap: `
- **Extraction** moves a dissolved compound from one solvent into a second, **immiscible** solvent in which it is more soluble — driven by **"like dissolves like."**
- **Aqueous (polar) layer** holds H-bonding/polar/charged species; **organic (nonpolar) layer** holds nonpolar species. Layer position is set by **density**, not polarity.
- **Acid–base trick:** add base to pull an **acid** into the aqueous layer (as its charged conjugate base); add acid to pull a **base** in.
- **Many small extractions beat one big one** for total recovery.
- **Filtration** splits solid (**residue**) from liquid (**filtrate**); **recrystallization** purifies by dissolving in *minimum hot* solvent and cooling.
`,
      detail: `
#### Extraction
**Extraction** is one of the simplest ways to isolate a desired product: it is the **transfer of a dissolved compound from a starting solvent into a second solvent in which the product is more soluble.** It rests entirely on the principle that **like dissolves like**:

- **Polar** solutes dissolve best in **polar** solvents.
- **Nonpolar** solutes dissolve best in **nonpolar** solvents.
- By choosing the right second solvent, the desired product migrates out while most impurities stay behind.

:::keyconcept
**Like dissolves like** is a fundamental MCAT concept. **Polar** substances associate with other polar substances; **nonpolar** with nonpolar.
:::

##### The two solvents must be immiscible
The two solvents must be **immiscible** — they form two distinct layers that do not mix, like oil and water. They are **temporarily mixed by shaking** so solute can pass between them, then allowed to re-separate.

![Figure 12.1 — Isobutyric acid and diethyl ether](${fig(0, 2).src})

- Example: **isobutyric acid** dissolved in **diethyl ether**, extracted with **water**.
- Isobutyric acid has a **polar carboxyl group** and can **hydrogen bond**, so it is more soluble in polar water than in nonpolar ether.
- On mixing, isobutyric acid transfers into the **aqueous phase (layer)** = the water layer.
- The nonpolar ether layer is the **organic phase (layer)**.

##### Aqueous vs. organic layer

| Feature | **Aqueous (water) layer** | **Organic (ether, etc.) layer** |
|---|---|---|
| Polarity | **Polar** | **Nonpolar** |
| Dissolves | H-bonding & polar species; **charged** ions | Nonpolar species |
| Typical position | Often **bottom** (here, denser) | Often **top** — but *not always* |
| Set by | **Relative density**, not polarity | **Relative density** |

:::expertise
Think of the organic and aqueous layers like the **oil and water in salad dressing**: shaking increases their interaction, but they ultimately separate again.
:::

##### Isolating the layers — the separatory funnel
After mixing, the two phases separate on their own given time. To isolate them, use a **separatory funnel**:

- **Gravity** pulls the **denser** layer to the bottom.
- The bottom layer is drained off by turning the **stopcock**; the **denser solvent is always drained first**.
- The **organic layer is more commonly on top**, but the opposite can occur — **layer order is decided by relative densities.**

##### Why repeat the extraction?
Once the aqueous layer is drained, the extraction is **repeated several times** with fresh solvent (add fresh water, shake, settle, drain again).

- The solute does **not** completely transfer in a single extraction.
- **Multiple extractions with fresh, smaller volumes** recover more product than one extraction with a large volume.
- *Laundry analogy:* washing dirty clothes several times in clean water removes more dirt than one wash in a big tub — each fresh, cleaner volume strips out more.

Once the product is isolated in a solvent, the **solvent is evaporated** — usually with a **rotary evaporator (rotovap)** — to leave the product alone.

##### Acid–base extraction
Solubility can be tuned with **acid–base chemistry**:

$$\\text{HA} + \\text{base} \\rightarrow \\text{A}^- + \\text{H–base}^+$$

- When an **acid dissociates**, the resulting **anion is charged** → far more soluble in the aqueous layer than the neutral protonated acid.
- **Adding a base** therefore drives an **acid into the aqueous phase.**
- The reverse (adding acid) drives a **base into the aqueous phase.**

:::bridge
Use acid–base properties to your advantage. The three intermolecular forces, ranked by how readily a compound enters the aqueous layer: **hydrogen bonding** (e.g., alcohols, acids — moves most easily) > **dipole–dipole** (less likely) > **van der Waals / London** (least likely). Creating a **charge** beats all three. See *MCAT General Chemistry Review*, Ch. 10.
:::

##### Wash
A **wash** is the **reverse of an extraction**: a small amount of solute is used to extract and remove **unwanted impurities** rather than the compound of interest. The product of interest stays put; the impurities leave.

#### Other solubility-based methods

##### Filtration
**Filtration** isolates a **solid from a liquid.** A liquid–solid mixture is poured onto a paper filter (like a coffee filter) that lets only solvent through:

- **Residue** = the solid left on the filter.
- **Filtrate** = the liquid that passes through.

| Type | Driving force | Used when… | Notes |
|---|---|---|---|
| **Gravity filtration** | Solvent's own **weight** | Product of interest is in the **filtrate** | **Hot solvent** keeps product dissolved |
| **Vacuum filtration** | **Vacuum** pulls solvent through | **Solid** is the desired product | Faster; forces solvent through the filter |

##### Recrystallization
**Recrystallization** further **purifies crystals** in solution:

1. Dissolve the product in a **minimum amount of hot solvent.**
2. Choose a solvent in which the product is **soluble only at high temperature.**
3. **Cool** the solution — only the **desired product recrystallizes**, leaving more-soluble **impurities in solution.**

:::mnemonic
**Recrystallization = "hot in, cold out."** Dissolve in *minimum hot* solvent, then *cool* so only your product crashes back out; impurities, being more soluble, stay dissolved.
:::
`
    },

    /* ──────────────────────── 12.2 Distillation ───────────────────────── */
    {
      id: 's2', num: '12.2', title: 'Distillation',
      goals: [
        'Differentiate between the separatory capabilities of simple, vacuum, and fractional distillation',
        'Recall the conditions in which distillation is a helpful separatory technique',
        'Select the best distillation technique for a given solute mixture'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 12.3 — Distillation apparatus: the lower-boiling component vaporizes, condenses in the water-cooled condenser, and drips into the receiving flask as distillate.' }],
      recap: `
- **Distillation** separates **miscible liquids** by **differences in boiling point** via evaporation + condensation; the **lower-boiling** liquid vaporizes first and is collected as the **distillate**.
- **Simple distillation:** both BPs **< 150 °C** *and* **≥ 25 °C apart.**
- **Vacuum distillation:** BPs **> 150 °C** — lower the pressure so liquids boil cooler and don't degrade.
- **Fractional distillation:** BPs **< 25 °C apart** — added surface area gives repeated condense/evaporate cycles for finer separation.
`,
      detail: `
#### What distillation does
Extraction needs **two immiscible** solvents. But when the **product itself is a liquid soluble in the solvent**, extraction fails — use **distillation** instead.

**Distillation** exploits **differences in boiling point** to separate two liquids by **evaporation and condensation**:

- The liquid with the **lower boiling point vaporizes first.**
- Vapors rise up the **distillation column** and condense in a **water-cooled condenser.**
- The condensate drips into a receiving vessel; the collected product is the **distillate.**
- Heating is kept **low** so the **higher-boiling** liquid does **not** boil and stays in the original flask.
- *(This is how a distillery makes liquor: ethanol boils below water, so distillation concentrates ethanol.)*

#### The three techniques

| Technique | Use when boiling points are… | Why / how |
|---|---|---|
| **Simple distillation** | **Both < 150 °C** *and* **≥ 25 °C apart** | Basic setup; gap is large enough that the second liquid won't co-distill, and temperature stays low enough to avoid degradation |
| **Vacuum distillation** | **> 150 °C** | Lower ambient pressure → liquids boil at **lower temperature** → no thermal degradation |
| **Fractional distillation** | **< 25 °C apart** | Fractionation column gives repeated condense/reflux/evaporate cycles → **finer separation** of close boiling points |

##### Simple distillation
The **least complex** version, proceeding exactly as described above.

- Restrictions: liquids must boil **below 150 °C** and differ by **at least 25 °C.**
- These limits keep the temperature low enough to **prevent compound degradation** and ensure the second compound **won't accidentally boil off** into the distillate.
- **Apparatus:** a **distilling flask** (the combined solution), a **distillation column** (thermometer + condenser), and a **receiving flask** for the distillate — the Figure 12.3 setup **minus the vacuum adaptor.**
- A **boiling chip, ebulliator, or magnetic stirrer** may be added to break surface tension and prevent **superheating** (a liquid heated above its boiling point without vaporizing, because gas bubbles can't overcome atmospheric pressure + surface tension).

##### Vacuum distillation
Used to distill a liquid with a **boiling point over 150 °C.**

- A **vacuum lowers the ambient pressure**, which **decreases the temperature** the liquid must reach to have enough vapor pressure to boil.
- This lets **high-boiling compounds distill at lower temperatures**, avoiding degradation.
- Apparatus is the Figure 12.3 setup **with** the vacuum adaptor.

:::bridge
Liquids boil when their **vapor pressure equals ambient pressure** (*MCAT General Chemistry Review*, Ch. 7). In vacuum distillation we **lower ambient pressure** so the liquid boils at a lower temperature.
:::

##### Fractional distillation
Used to separate two liquids with **similar boiling points (< 25 °C apart).**

![Figure 12.4 — Fractional distillation](${fig(1, 1).src})

- A **fractionation column** connects the distillation flask to the condenser.
- The column is packed with **inert objects** (glass beads, steel wool) to **increase surface area.**
- As vapor rises, it **condenses, refluxes down, then re-evaporates** higher up — repeatedly.
- **Each evaporation enriches the vapor in the lower-boiling component**, so by the top of the column only the desired product drips into the receiving flask.

:::keyconcept
**Boiling-point gap → technique.** ≥ 25 °C apart and both < 150 °C → **simple**. Either above 150 °C → **vacuum** (to avoid degradation). < 25 °C apart → **fractional** (extra surface area for finer cuts).
:::
`
    },

    /* ─────────────────────── 12.3 Chromatography ──────────────────────── */
    {
      id: 's3', num: '12.3', title: 'Chromatography',
      goals: [
        'Identify the properties that can be used to separate compounds through chromatography',
        'Differentiate between thin-layer, paper, column, gas, and high-performance liquid chromatography',
        'Describe the three main specialized types of columns used in column chromatography, and their methods for separation',
        'Predict the best chromatography method for a given mixture'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 12.5 — Thin-layer chromatography: as the nonpolar solvent climbs the polar plate, nonpolar samples travel furthest while polar samples lag.' }],
      recap: `
- **All chromatography** partitions compounds between a **stationary phase (adsorbent)** and a **mobile phase** — *the more like its surroundings, the slower it moves.*
- **Stationary phase** is usually **polar** (silica/alumina); **mobile phase** is usually a **nonpolar** liquid (or a **gas** in GC). High affinity for stationary phase → **low $R_f$**, slow.
- **TLC / paper:** identify samples; nonpolar moves furthest up a polar plate. **Reverse-phase** flips this (nonpolar plate, polar solvent).
- **Column:** separates by **polarity, size, or charge** — specialized as **ion-exchange** (charge), **size-exclusion** (size; *small molecules retained*), **affinity** (specific binding).
- **GC:** mobile phase is a **gas**, for **volatile** compounds. **HPLC:** computer-controlled solvent/temperature gradients under pressure.
`,
      detail: `
#### The unifying principle
**Chromatography** uses physical and chemical properties to **separate and identify** compounds from a complex mixture. In every form, the concept is identical:

> The **more similar a compound is to its surroundings** (in polarity, charge, etc.), the **more it sticks** and the **more slowly it moves** through them.

- Sample is placed on a solid **stationary phase** (the **adsorbent**).
- The **mobile phase** — usually a **liquid** (a **gas** in GC) — runs through and **elutes** (carries) the sample.
- Compounds **adhere with different strengths**, so they **migrate at different speeds** → **partitioning**, an equilibrium between the two phases.
- Different **partition coefficients** → different **elution rates** → separation.

:::keyconcept
Chromatography separates compounds by **how strongly they adhere to the stationary (solid) phase** — i.e., how easily they come off into the mobile phase.
:::

- **Polarity** is the property most often exploited on the MCAT. **Silica gel** and **cellulose** are highly polar stationary phases → polar compounds adhere and elute slowly.
- **Column** chromatography can also separate by **size and charge.**
- Even very strong interactions (e.g., **antibody–ligand binding**) can be used.
- We measure either **how far a substance travels** in a set time (TLC) or **how long it takes to elute** (column, GC).

:::mnemonic
**"TLC PoCkets GHosts" — the 5 methods:** **T**hin-layer, **P**aper, **C**olumn, **G**as, **H**PLC. And for the column subtypes: **"I See A column" → I**on-exchange (charge), **S**ize-exclusion (size), **A**ffinity (specific binding).
:::

#### Thin-layer & paper chromatography
Nearly identical techniques, differing only in the **stationary-phase medium**:

| | **Thin-layer (TLC)** | **Paper** |
|---|---|---|
| Stationary phase | **Silica gel** or **alumina** on an inert carrier sheet | **Paper** (cellulose) |
| Both are | Polar, hydrophilic | Polar |

Procedure:

- **Spotting:** apply a small, well-defined spot of sample directly onto the plate.
- **Developing:** stand the plate upright in a **developing chamber** holding a shallow pool of solvent (**eluent**); spots must sit **above** the solvent line (or they'd dissolve into the pool).
- Solvent climbs by **capillary action**, carrying compounds up at different rates.
- Remove and dry when the **solvent front** nears the top.

##### Polarity and travel distance
TLC silica gel is **polar/hydrophilic**; the **mobile phase is a weak-to-moderate-polarity organic solvent**, so it doesn't bind the gel.

- **Nonpolar compounds** dissolve in the organic solvent and **move quickly / far** up the plate.
- **Polar compounds stick to the gel** and **lag behind.**
- **The more nonpolar the sample, the further it travels.**

**Reverse-phase chromatography** flips this: the **stationary phase is nonpolar**, so **polar molecules move fast** while nonpolar ones stick.

##### Visualizing & quantifying spots
Spots are usually **white** and hard to see, so:

- View under **ultraviolet light** (shows UV-sensitive compounds — **non-destructive**), or
- Stain with **iodine, phosphomolybdic acid, or vanillin** (**destroys** the compound — not recoverable).

Compounds are identified by the **retardation factor ($R_f$)**, roughly constant for a given compound in a given solvent:

$$R_f = \\dfrac{\\text{distance traveled by compound}}{\\text{distance traveled by solvent front}}$$

- Because $R_f$ is constant, it can **identify unknown compounds.**
- A **higher $R_f$** = traveled further = **more like the mobile phase** (more nonpolar, in normal-phase TLC).
- **Preparative TLC** scales this up for **purification**: bands are scraped off and washed to yield pure compounds.

#### Column chromatography
Same principles as TLC, with key differences:

![Figure 12.6 — Column chromatography](${fig(2, 1).src})

- Uses an entire **column packed with silica or alumina beads** → much greater separation.
- Solvent and compounds move **down** the column by **gravity** (vs. capillary action *up* a TLC plate).
- **Flash column chromatography** forces solvent through with **gas pressure** to speed things up.
- **Solvent polarity can be changed** to help elute the desired compound.
- Solvent drips out the bottom; **fractions** are collected over time (each holds different compounds), then the solvent is evaporated.
- Especially useful in **biochemistry** for separating macromolecules like **proteins and nucleic acids.**

##### The three specialized columns

| Type | Basis of separation | What happens | What elutes faster |
|---|---|---|---|
| **Ion-exchange** | **Charge** | Beads coated with **charged groups** bind **oppositely charged** molecules (e.g., a + column holds DNA's − backbone); a **salt gradient** later elutes them | Like/neutral charge passes first; bound ions elute last (with salt) |
| **Size-exclusion** | **Size** | Beads have **tiny pores**; **small molecules enter pores and are slowed**, large molecules go around and pass quickly | **Large molecules elute first** (counterintuitive!) |
| **Affinity** | **Specific binding** | Beads coated with a **receptor / antibody / substrate analog** retain a specific protein; elute by **competing free ligand** or by **changing pH/salinity** | Everything else passes; the target is retained until specifically released |

- **Ion-exchange:** a positively charged column holds the negatively charged backbone of DNA or protein, increasing retention; a **salt gradient** then elutes the stuck molecules.
- **Size-exclusion:** *remember* — **small compounds are retained longer**, large ones move faster. Pore size can be varied to fractionate by molecular weight. A common protein-purification combo is **ion-exchange followed by size-exclusion.**
- **Affinity:** common stationary-phase ligands include **nickel** (binds **histidine-tagged** engineered proteins), **antibodies/antigens**, and **enzyme–substrate analogues.** Drawback: the eluent can **stay bound** to the recovered protein (e.g., an enzyme inhibitor is hard to remove).

:::expertise
**Size-exclusion is the classic trap:** smaller molecules get **stuck in the pores** and elute **last**; larger molecules can't fit, route around the beads, and elute **first.** Don't reverse this.
:::

#### Gas chromatography (GC)
Also called **vapor-phase chromatography (VPC)** — used for **qualitative separation.**

![Figure 12.7 — Gas chromatography](${fig(2, 2).src})

- The key difference: the **eluent (mobile phase) is a gas**, usually **helium or nitrogen.**
- **Adsorbent** = crushed metal or polymer inside a coiled **~30-foot column**, kept in a **temperature-controlled oven.**
- Sample is **injected and vaporized**; gaseous compounds travel at different rates by **adhering to the adsorbent to different degrees**, separating in space.
- Compounds **must be volatile** — low-melting/sublimable solids or vaporizable liquids.
- A **detector** records each compound as a **peak** on a chart.

:::realworld
GC is often coupled to a **mass spectrometer (GC-MS):** purified molecules are ionized and fragmented, the fragments are passed through a **magnetic field** that separates them by **mass-to-charge ratio**, and the pattern reveals molecular weight or identity.
:::

#### High-performance liquid chromatography (HPLC)
Formerly **high-pressure** liquid chromatography.

- The **eluent is a liquid** traveling through a column of defined composition — similar to column chromatography.
- A **small sample** is injected; separation occurs as it flows under **pressure** through the column; compounds pass a **detector** and are collected.
- **Computer-controlled solvent gradients and temperature** finely resolve the components — the source of its "high performance."
- The name changed because modern HPLC uses **much lower pressures** than the original technique.

| | **Column chromatography** | **HPLC** |
|---|---|---|
| Mobile phase moves by | **Gravity** | **Pressure** (computer-controlled) |
| Historical distinction | — | Originally **high pressure** |
| Current distinction | Basic gravity elution | **Sophisticated, variable solvent + temperature gradients** → finer separation |
| Best for | General separations | **Small samples** or where capillary forces would affect results |
`
    }
  ],

  keyReview: {
    conceptSummary: raw.conceptSummary || [
      {
        section: 'Solubility-Based Methods',
        points: [
          '**Extraction** combines two **immiscible** liquids; the compound of interest dissolves more easily in one. The **polar (aqueous) layer** holds H-bonding/polar species; the **nonpolar (organic) layer** holds nonpolar species.',
          'Extraction is done in a **separatory funnel**; one phase is collected and its solvent evaporated. **Layer order is set by density.**',
          '**Acid–base properties** increase solubility (charged species favor the aqueous layer). A **wash** is the reverse of extraction — a small amount of solute removes impurities.',
          '**Filtration** isolates a solid (**residue**) from a liquid (**filtrate**): **gravity** filtration (hot solvent) when product is in the filtrate; **vacuum** filtration when the product is the solid.',
          '**Recrystallization** dissolves product in a **minimum of hot solvent**; on cooling, the product reforms crystals while more-soluble impurities stay in solution.'
        ]
      },
      {
        section: 'Distillation',
        points: [
          '**Distillation** separates liquids by **boiling-point differences**; the **lowest-boiling** liquid vaporizes first and is collected as the **distillate**.',
          '**Simple distillation:** boiling points **< 150 °C** and **≥ 25 °C apart.**',
          '**Vacuum distillation:** boiling points **> 150 °C** — reduced pressure prevents thermal degradation.',
          '**Fractional distillation:** boiling points **< 25 °C apart** — a packed fractionation column gives finer separation.'
        ]
      },
      {
        section: 'Chromatography',
        points: [
          'All chromatography uses **two phases**: a **stationary phase (adsorbent**, usually a polar solid) and a **mobile phase** (liquid or gas) that **elutes** the sample. High stationary-phase affinity → **smaller $R_f$**, slower; high mobile-phase affinity → faster. This separation is **partitioning**.',
          '**TLC/paper** identify samples: polar stationary phase (silica/alumina/paper), nonpolar mobile phase climbing by **capillary action**; spot, develop, compute **$R_f$**. **Reverse-phase** uses a nonpolar card + polar solvent.',
          '**Column** chromatography uses **polarity, size, or charge**: **ion-exchange** (charged beads bind opposite charges), **size-exclusion** (small molecules trapped in pores, large ones pass faster), **affinity** (receptor/antibody traps a specific target).',
          '**Gas chromatography** separates **vaporizable** compounds with a **nonreactive gas** mobile phase over a crushed-metal/polymer stationary phase; can be combined with **mass spectrometry**.',
          '**HPLC** resembles column chromatography but adds **computer-controlled solvent/temperature gradients** under pressure; formerly called **high-pressure** LC.'
        ]
      }
    ],
    mnemonics: [
      '**"Like dissolves like":** polar→polar, nonpolar→nonpolar. The whole basis of extraction and of why TLC samples sort by polarity.',
      '**Acid–base extraction — "charge it to move it":** add **base** to drag an **acid** into the aqueous layer (as its charged conjugate base); add **acid** to drag a **base** in. A charge beats any neutral intermolecular force.',
      '**Extraction efficiency — "many small > one big":** three 10 mL extractions recover more than one 30 mL extraction. Like laundering clothes in several fresh tubs of water.',
      '**Distillation by the numbers:** **≥ 25 °C apart & < 150 °C → simple** · **> 150 °C → vacuum** (don\'t cook your product) · **< 25 °C apart → fractional** (extra surface area).',
      '**5 chromatography methods — "TLC PoCkets GHosts":** **T**hin-layer, **P**aper, **C**olumn, **G**as, **H**PLC.',
      '**Column subtypes — "I See A column": I**on-exchange (charge), **S**ize-exclusion (size), **A**ffinity (specific binding).',
      '**Size-exclusion trap:** **S**mall = **S**tuck (in the pores, elutes last); large molecules route around and elute first.',
      '**Recrystallization — "hot in, cold out":** dissolve in minimum *hot* solvent, *cool* to crash out pure product; impurities stay dissolved.'
    ],
    keyConcepts: [
      '**Choose the technique by what differs:** different **solubility/polarity** → extraction; different **boiling point** (miscible liquids) → distillation; subtle differences in polarity/charge/size/binding → chromatography. Real problems chain them (e.g., **filter sand → basic extraction → evaporate**).',
      '**In a separatory funnel, density — not polarity — decides which layer is on top.** Predict the phase a solute enters from polarity/charge, but predict *position* from relative density (the denser layer drains first).',
      '**Chromatography is a race against the stationary phase:** the more a compound resembles the stationary phase, the slower it moves and the longer it is retained (smaller $R_f$); the more it resembles the mobile phase, the faster it elutes.',
      '**Match the column to the molecule:** charge → ion-exchange · size difference → size-exclusion · a specific protein/biological effector → affinity. For close boiling points (distillation) → fractional; for high boiling points → vacuum.'
    ],
    equations: [
      {
        name: 'Retardation factor (Rf)',
        tex: 'R_f = \\dfrac{\\text{distance traveled by compound}}{\\text{distance traveled by solvent front}}',
        note: 'TLC/paper. Roughly constant for a given compound–solvent pair, so it identifies unknowns. Higher Rf = more like the mobile phase (more nonpolar in normal-phase).'
      }
    ]
  },

  questions: raw.questions
};
