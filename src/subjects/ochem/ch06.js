// Chapter 6 — Aldehydes and Ketones I: Electrophilicity and Oxidation–Reduction.
// Authored to the rich-formatting quality bar. Figures and questions are reused
// from ch06.json; the recap/detail markdown, goals, tables, and mnemonics are
// authored here from scratch_ochem/ch06.md.
import raw from './ch06.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 6,
  title: 'Aldehydes & Ketones I',
  subtitle: 'Description & properties · nucleophilic addition reactions · oxidation–reduction reactions',

  blocks: [
    /* ─────────────────── 6.1 Description and Properties ─────────────────── */
    {
      id: 's1', num: '6.1', title: 'Description and Properties',
      goals: [
        'Name aldehydes and ketones using the proper suffixes',
        'Describe the reactivity of the carbonyl carbon',
        'Recognize common reactions used to form aldehydes and ketones',
        'Predict the boiling point of a compound based on its oxidation level'
      ],
      images: [{ src: fig(0, 5).src, alt: fig(0, 5).alt, caption: 'Figure 6.4 — Polarity of the carbonyl group: O pulls electron density off C, leaving the carbon partially positive (electrophilic).' }],
      recap: `
- A **carbonyl** is $\\text{C=O}$. An **aldehyde** has the carbonyl bonded to **≥1 H** → always **terminal**; a **ketone** has it bonded to **two alkyl groups** → always **internal**.
- The $\\text{C=O}$ dipole makes the **carbonyl carbon electrophilic** (partial $+$) — *the* most common MCAT electrophile.
- **Boiling point:** alkane $<$ aldehyde/ketone $<$ alcohol. Carbonyl dipoles raise BP above alkanes, but **no H-bonding** keeps it below alcohols.
- **Formation:** **1° alcohol $\\xrightarrow{\\text{PCC}}$ aldehyde** (PCC only — stronger oxidants overshoot to carboxylic acid); **2° alcohol $\\xrightarrow{\\text{[O]}}$ ketone** (any oxidant; can't overshoot).
- **Aldehydes are more reactive** toward nucleophiles than ketones (less steric hindrance, fewer electron-donating alkyls).
`,
      detail: `
#### Structure: aldehyde vs. ketone
Both are built on the **carbonyl group**, $\\text{C=O}$. The difference is what flanks that carbon.

| Feature | **Aldehyde** | **Ketone** |
|---|---|---|
| Groups on carbonyl C | **1 alkyl + 1 H** (or 2 H for formaldehyde) | **2 alkyl groups** |
| Position | **Terminal** (always at chain end) | **Internal** (never terminal) |
| Suffix (IUPAC) | **–al** | **–one** |
| Suffix (on a ring) | **–carbaldehyde** | — |
| As a substituent | prefix **oxo–** | prefix **oxo–** or **keto–** |
| Reactivity to nucleophiles | **Higher** | Lower |

:::keyconcept
An **aldehyde is a terminal functional group**. A **ketone is always internal** and can never be terminal.
:::

#### Nomenclature
- **Aldehydes:** drop the **–e** of the alkane, add **–al**. The first five common names (Figure 6.1): **formaldehyde, acetaldehyde, propionaldehyde, butyraldehyde, valeraldehyde**.
- **Cyclic aldehydes:** carbonyl attached to a ring uses **–carbaldehyde** (Figure 6.2).
- **Ketones:** drop the **–e**, add **–one**. Common names list the two alkyl groups **alphabetically** + "ketone" (e.g., ethyl methyl ketone).

![Figure 6.1 — Naming aldehydes](${fig(0, 2).src})

![Figure 6.3 — Naming ketones](${fig(0, 4).src})

:::expertise
The common-name prefixes encode carbon count: **form–** = **1 C** (also formic acid, the one-carbon acid); **acet–** = **2 C** (acetylene, acetic acid, acetyl-CoA). Recognizing these saves time on Test Day.
:::

:::realworld
Volatile carbonyls give many spices their smell: **cinnamaldehyde** (cinnamon), **vanillin** (vanilla), **cuminaldehyde** (cumin), **carvone** (dill), **zingerone** (ginger).
:::

#### Physical properties
The **carbonyl dipole** governs everything. The $\\text{C=O}$ dipole is **stronger than an alcohol's** $\\text{O-H}$ dipole because a *double* bond to oxygen withdraws more electron density than a single bond.

- Polar carbonyls increase **intermolecular attractions** → **boiling point higher than the parent alkane**.
- **But** carbonyls **cannot hydrogen-bond** (no $\\text{O-H}$ or $\\text{N-H}$), so their BP rise is **smaller than that of alcohols**, which *do* H-bond.

| Compound (equal chain length) | Dominant IMF | Relative boiling point |
|---|---|---|
| **Alkane** (e.g., butane) | London dispersion only | **Lowest** |
| **Aldehyde / ketone** (e.g., butanal, butanone) | **Dipole–dipole** (strong $\\text{C=O}$) | Middle |
| **Alcohol** (e.g., butanol) | **Hydrogen bonding** | **Highest** |

:::keyconcept
The carbonyl dipole raises IMFs (and BP) above alkanes — but this is **not as significant as the hydrogen bonding** seen in alcohols. So: **alkane $<$ carbonyl $<$ alcohol.**
:::

#### Carbonyl reactivity — the electrophilic carbon

![Figure 6.4 — Polarity of the carbonyl group](${fig(0, 5).src})

Oxygen is far more **electronegative** than carbon, so it pulls the $\\text{C=O}$ bonding electrons toward itself. This leaves a **partial positive charge** ($\\delta^+$) on the carbon and a **partial negative charge** ($\\delta^-$) on the oxygen:

$$\\overset{\\delta^+}{\\text{C}}\\!=\\!\\overset{\\delta^-}{\\text{O}}$$

- The $\\delta^+$ **carbonyl carbon is an electrophile** → a prime **target for nucleophiles**.
- **Aldehydes $>$ ketones** in reactivity: an aldehyde's lone H means **less steric hindrance** and **fewer electron-donating alkyl groups** (which would stabilize/neutralize the $\\delta^+$).

:::expertise
The **carbonyl carbon is the most common electrophile on Test Day.** Always trace it back to electronegativity: O pulls electrons away → C is $\\delta^+$ → C is the nucleophile's target.
:::

#### Formation by oxidation of alcohols
Aldehydes and ketones sit on the **oxidation ladder** between alcohols and carboxylic acids.

| Starting material | Reagent | Product | Watch out for |
|---|---|---|---|
| **1° alcohol** | **PCC** ($\\text{C}_5\\text{H}_5\\text{NH[CrO}_3\\text{Cl]}$) | **Aldehyde** | **Only PCC** stops here; stronger oxidants overshoot to a **carboxylic acid** |
| **2° alcohol** | $\\text{Na}_2\\text{Cr}_2\\text{O}_7$, $\\text{K}_2\\text{Cr}_2\\text{O}_7$, $\\text{CrO}_3$, or PCC | **Ketone** | No risk of overshoot — a ketone is the most-oxidized 2° carbon |

$$\\text{1° alcohol} \\xrightarrow{\\;\\text{PCC}\\;} \\text{aldehyde} \\xrightarrow{\\;\\text{stronger [O]}\\;} \\text{carboxylic acid}$$
$$\\text{2° alcohol} \\xrightarrow{\\;\\text{[O]}\\;} \\text{ketone (stops here)}$$

:::mnemonic
**"PCC = Partial, Can't Continue."** **P**CC gives the **P**artial oxidation (alcohol → aldehyde) and **C**an't **C**ontinue to the acid because it is **anhydrous** (no water to form the hydrate intermediate that gets over-oxidized).
:::
`
    },

    /* ───────────────── 6.2 Nucleophilic Addition Reactions ──────────────── */
    {
      id: 's2', num: '6.2', title: 'Nucleophilic Addition Reactions',
      goals: [
        'Predict the products of reacting aldehydes or ketones with alcohols, in the presence or absence of acidic conditions',
        'Recall the functional group formed when nitrogen-containing derivatives react with aldehydes or ketones',
        'Predict the product of the reaction of HCN with aldehydes or ketones, including the reactivity of the product'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 6.5 — Nucleophilic addition: the nucleophile attacks the carbonyl carbon, the π electrons go to O, and (with no leaving group) the alkoxide is protonated to an alcohol.' }],
      recap: `
- **One mechanism rules this section:** a nucleophile attacks the $\\delta^+$ carbonyl carbon → breaks the $\\pi$ bond → **tetrahedral intermediate**. **No leaving group** (aldehydes/ketones) → $\\text{O}^-$ grabs a proton → **alcohol**.
- **Water** adds → **geminal diol** (1,1-diol).
- **1 equiv alcohol** → **hemiacetal / hemiketal** (keeps an –OH); **2 equiv alcohol + acid** → **acetal / ketal** (used as **protecting groups**).
- **Ammonia / N-derivatives** → **imine** ($\\text{C=N}$) + water lost (**condensation**); HO–NH₂, H₂N–NH₂, semicarbazide give **oximes, hydrazones, semicarbazones**. Imines tautomerize → **enamines**.
- **HCN** → **cyanohydrin** (stable, new C–C bond).
`,
      detail: `
#### The master mechanism: nucleophilic addition

![Figure 6.5 — Nucleophilic addition reaction mechanism](${fig(1, 1).src})

The $\\text{C=O}$ bond is polarized ($\\delta^+$ on C, $\\delta^-$ on O), so the carbon is an electrophile **ripe for attack**. Every reaction in this section is the same four ideas:

1. **Nucleophile attacks** the carbonyl carbon, forming a new covalent bond.
2. The **$\\pi$ bond breaks**; its electrons are pushed onto the oxygen (which happily holds the negative charge — it is electronegative).
3. This creates a **tetrahedral intermediate** (the flat $sp^2$ carbon becomes pyramidal $sp^3$).
4. **Ask: can the carbonyl reform?** If there is **no good leaving group** (aldehydes & ketones), it **cannot** — so $\\text{O}^-$ is protonated by solvent to give an **alcohol**. If there **is** a good leaving group (carboxylic acids and derivatives, Ch. 9), the $\\text{C=O}$ **reforms** and kicks off the leaving group (nucleophilic *acyl substitution*, not addition).

:::expertise
Don't memorize each reaction in isolation. **Learn the pattern** (nucleophile → carbonyl C → tetrahedral intermediate → reform or protonate) and then slot each specific reaction into it. The carbonyl carbon is the target every time.
:::

#### Reaction reference table
Same mechanism, different nucleophile:

| Reaction | Nucleophile | Conditions | Product | Notes |
|---|---|---|---|---|
| **Hydration** | $\\text{H}_2\\text{O}$ | catalytic acid **or** base (speeds a slow rxn) | **Geminal diol** (1,1-diol) | Two –OH on the **same** carbon |
| **Hemiacetal / hemiketal** | **1 equiv** alcohol (R–OH) | acid or base; endpoint in **base** | **Hemiacetal** (from aldehyde) / **hemiketal** (from ketone) | Retains **–OH**; has one **–OR** |
| **Acetal / ketal** | **2 equiv** alcohol | **anhydrous acid** (SN1) | **Acetal** / **ketal** | Two **–OR**, no –OH; **protecting group** |
| **Imine formation** | $\\text{NH}_3$ | $\\text{H}_2\\text{O}$ lost | **Imine** ($\\text{C=N}$) | Condensation **and** substitution |
| **Imine derivatives** | $\\text{H}_2\\text{N-OH}$, $\\text{H}_2\\text{N-NH}_2$, $\\text{H}_2\\text{N-NH-C(O)NH}_2$ | $\\text{H}_2\\text{O}$ lost | **Oxime · hydrazone · semicarbazone** | All have a $\\text{C=N}$ core |
| **Cyanohydrin** | $^-\\!:\\!\\text{C}\\!\\equiv\\!\\text{N}$ (from HCN) | — | **Cyanohydrin** | Stable; new **C–C bond** |

#### Hydration → geminal diols

![Figure 6.6 — Hydration reaction forming a geminal diol](${fig(1, 2).src})

In water, the carbonyl is attacked by the **nucleophilic oxygen of $\\text{H}_2\\text{O}$**, then protonated, giving a **geminal diol (1,1-diol)** — two hydroxyls on one carbon.

$$\\text{R}_2\\text{C=O} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{R}_2\\text{C(OH)}_2$$

The reaction is normally **slow**, but a little **catalytic acid or base** speeds it up.

#### Acetals and hemiacetals (the highest-yield pair)

![Figure 6.7 — Hemiacetal formation (one equivalent of alcohol)](${fig(1, 3).src})

**Step 1 — add 1 equivalent of alcohol → hemiacetal / hemiketal.** The alcohol's oxygen is the nucleophile. The product still carries the original **–OH** ("halfway," hence **hemi–**) plus a new **–OR**. **This is the endpoint under basic conditions.**

![Figure 6.8 — Acetal and ketal formation (second equivalent of alcohol)](${fig(1, 4).src})

**Step 2 — add a 2nd equivalent of alcohol under anhydrous acid → acetal / ketal.** Now the mechanism is a **nucleophilic substitution (SN1)**:

- The hemiacetal's **–OH is protonated** and leaves as **water**.
- A **carbocation** forms.
- A **second alcohol attacks** the carbocation → **acetal** (from aldehyde) or **ketal** (from ketone).

Acetals/ketals are **comparatively inert**, so they are used as **protecting groups** for carbonyls; aqueous acid + heat converts them back.

:::keyconcept
- **Hemiacetal/hemiketal step:** **alcohol is the nucleophile**, the **carbonyl carbon is the electrophile**.
- **Acetal/ketal step:** **alcohol is the nucleophile**, the **carbocation carbon** (formerly the carbonyl carbon) is the electrophile.
:::

##### Central-carbon bonding cheat sheet
A favorite MCAT trap — what's bonded to the central carbon?

| Species | Bonded to central C |
|---|---|
| **Hemiacetal** | –OH, **–OR**, –H, –R |
| **Hemiketal** | –OH, **–OR**, –R, –R |
| **Acetal** | **–OR**, **–OR**, –H, –R |
| **Ketal** | **–OR**, **–OR**, –R, –R |

:::mnemonic
**"Hemi = Half-done, keeps the OH."** A **hemi**acetal still has its **–OH** (one alcohol added). A full **acetal** has traded that –OH for a second **–OR** (two alcohols added, no –OH left). *Half an OR vs. a full pair of ORs.* Acetals/ketals = **A**ll **O**xygens are **O**R (no free OH).
:::

#### Imines and enamines

![Figure 6.9 — Imine formation (ammonia adds, water is eliminated)](${fig(1, 5).src})

Nitrogen has a **lone pair**, making $\\text{NH}_3$ and its derivatives **good nucleophiles**. Ammonia adds to the carbonyl carbon and **water is eliminated**, giving an **imine** — a carbon **double-bonded to nitrogen** ($\\text{C=N}$).

$$\\text{R}_2\\text{C=O} + \\text{NH}_3 \\rightarrow \\text{R}_2\\text{C=NH} + \\text{H}_2\\text{O}$$

This is both:
- a **condensation reaction** (a small molecule — water — is lost when two molecules join), and
- a **nucleophilic substitution** (N replaces the carbonyl O).

Common ammonia derivatives swap in for $\\text{NH}_3$ and give named products (all share the $\\text{C=N}$ core):

| Reagent | Structure | Product |
|---|---|---|
| **Hydroxylamine** | $\\text{H}_2\\text{N-OH}$ | **Oxime** |
| **Hydrazine** | $\\text{H}_2\\text{N-NH}_2$ | **Hydrazone** |
| **Semicarbazide** | $\\text{H}_2\\text{N-NH-C(O)NH}_2$ | **Semicarbazone** |

**Enamines:** imines can **tautomerize** to **enamines**, which have both a **C=C double bond** and a **nitrogen group** (an *en*e + *amine*). This parallels **keto–enol tautomerization** (Ch. 7).

#### Cyanohydrins

![Figure 6.10 — Cyanohydrin formation (cyanide attacks the carbonyl)](${fig(1, 6).src})

**HCN** is a classic MCAT nucleophile. With a triple bond and an electronegative N, it is fairly acidic ($pK_a = 9.2$). Once H⁺ dissociates, the **cyanide anion** $^-\\!:\\!\\text{C}\\!\\equiv\\!\\text{N}$ attacks the carbonyl carbon; reprotonation of the oxygen gives a **cyanohydrin**.

$$\\text{R}_2\\text{C=O} + \\text{HCN} \\rightarrow \\text{R}_2\\text{C(OH)(CN)}$$

The cyanohydrin is **stable** thanks to the newly formed **C–C bond**.

:::keyconcept
In the HCN reaction, **$^-\\!:\\!\\text{C}\\!\\equiv\\!\\text{N}$ is the nucleophile** and the **carbonyl carbon is the electrophile** — same pattern as every other reaction in 6.2.
:::

:::mnemonic
**"Nucleophilic addition = Nu hits the +C."** The **Nu**cleophile always slams the **partially positive carbonyl Carbon**; the only question is whether you protonate (no LG) or kick off a leaving group. For aldehydes/ketones — **no LG, so you always protonate to an alcohol-type product.**
:::
`
    },

    /* ───────────────── 6.3 Oxidation–Reduction Reactions ────────────────── */
    {
      id: 's3', num: '6.3', title: 'Oxidation–Reduction Reactions',
      goals: [
        'Recall common oxidizing and reducing agents used on aldehydes and ketones',
        'Predict the products of redox reactions involving aldehydes and ketones'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 6.11 — Aldehyde oxidation: any oxidant stronger than PCC drives an aldehyde to a carboxylic acid.' }],
      recap: `
- **Oxidation ladder:** alcohol $<$ **aldehyde** $<$ carboxylic acid. **Ketones are maxed out** — a 2° carbon can't be oxidized further (no C–H to lose without breaking C–C).
- **Aldehyde $\\xrightarrow{[O]}$ carboxylic acid** with any oxidant **stronger than PCC**: $\\text{KMnO}_4$, $\\text{CrO}_3$, $\\text{Ag}_2\\text{O}$, $\\text{H}_2\\text{O}_2$.
- **Reduction:** aldehyde/ketone $\\xrightarrow{\\text{hydride}}$ alcohol. **$\\text{LiAlH}_4$** (strong) and **$\\text{NaBH}_4$** (milder) are the MCAT hydride reagents.
- **PCC is the gatekeeper:** mild + anhydrous → stops at the aldehyde; won't touch ketones (nothing to oxidize).
`,
      detail: `
#### Where aldehydes and ketones sit on the redox ladder
**Aldehydes are in the middle** — more oxidized than alcohols, less than carboxylic acids. **Ketones are fully oxidized** for a secondary carbon (you'd have to break a C–C bond to oxidize further, which common reagents won't do).

$$\\underset{\\text{most reduced}}{\\text{alcohol}} \\;\\xrightarrow{[O]}\\; \\text{aldehyde} \\;\\xrightarrow{[O]}\\; \\underset{\\text{most oxidized}}{\\text{carboxylic acid}}$$

#### Oxidation of aldehydes

![Figure 6.11 — Aldehyde oxidation to a carboxylic acid](${fig(2, 0).src})

Aldehydes are easily oxidized to **carboxylic acids** by **any oxidant stronger than PCC**:

| Oxidizing agent | Formula |
|---|---|
| Potassium permanganate | $\\text{KMnO}_4$ |
| Chromium trioxide | $\\text{CrO}_3$ |
| Silver(I) oxide | $\\text{Ag}_2\\text{O}$ |
| Hydrogen peroxide | $\\text{H}_2\\text{O}_2$ |

$$\\text{RCHO} \\xrightarrow{\\;\\text{KMnO}_4 / \\text{CrO}_3 / \\text{Ag}_2\\text{O} / \\text{H}_2\\text{O}_2\\;} \\text{RCOOH}$$

:::keyconcept
**PCC is anhydrous and mild**, so it **stops at the aldehyde**. It cannot push a 1° alcohol past the aldehyde, nor oxidize an aldehyde to an acid. Everything stronger goes all the way to the carboxylic acid.
:::

#### Reduction by hydride reagents

![Figure 6.12 — Ketone reduction to a secondary alcohol by a hydride reagent](${fig(2, 1).src})

Aldehydes and ketones are **reduced to alcohols** by **hydride ($\\text{H}^-$) reagents**:

| Reducing agent | Formula | Strength |
|---|---|---|
| **Lithium aluminum hydride** | $\\text{LiAlH}_4$ | Strong |
| **Sodium borohydride** | $\\text{NaBH}_4$ | Milder (when gentler conditions are needed) |

- **Aldehyde $\\xrightarrow{\\text{LiAlH}_4 \\text{ or NaBH}_4}$ 1° alcohol**
- **Ketone $\\xrightarrow{\\text{LiAlH}_4 \\text{ or NaBH}_4}$ 2° alcohol**

$$\\text{RCHO} \\xrightarrow{\\text{H}^-} \\text{RCH}_2\\text{OH} \\qquad \\text{R}_2\\text{CO} \\xrightarrow{\\text{H}^-} \\text{R}_2\\text{CHOH}$$

:::expertise
Classic discrimination question: react **butanone** and **butanal** with **PCC** and with **$\\text{KMnO}_4$**. **Butanone (a ketone) does nothing** with either — ketones can't be oxidized by reagents that don't break C–C bonds. **Butanal** is oxidized by **$\\text{KMnO}_4$** → **butanoic acid**, but is **not** touched by **PCC** (too weak).
:::

:::mnemonic
**"OIL RIG" + hydride helpers.** Oxidation Is Loss / Reduction Is Gain (of electrons; here, gain/loss of H and O). For reagents: **"LAH is a Lion, NaBH₄ is a kitten"** — $\\text{LiAlH}_4$ is the strong reducer; $\\text{NaBH}_4$ is mild. To remember oxidants overshoot: **"everything but PCC pushes to the acid."**
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '6.1 Description and Properties',
        points: [
          '**Aldehydes** = carbonyl bonded to **≥1 H**, always **terminal**; suffix **–al**, prefix **oxo–**, ring suffix **–carbaldehyde**.',
          '**Ketones** = carbonyl bonded to **two alkyl chains**, always **internal**; suffix **–one**, prefix **oxo–** or **keto–**.',
          'Carbonyl reactivity comes from the **polar $\\text{C=O}$**: the carbon is **partially positive → electrophilic**.',
          'Carbonyls boil **higher than alkanes** (dipole) but **lower than alcohols** (no H-bonding).',
          'Aldehydes form from **oxidation of 1° alcohols** (PCC only, else overshoot to acid); ketones from **oxidation of 2° alcohols** (any oxidant — they can\'t over-oxidize).'
        ]
      },
      {
        section: '6.2 Nucleophilic Addition Reactions',
        points: [
          'A nucleophile attacks the carbonyl carbon; $\\pi$ electrons go to oxygen, giving a **tetrahedral intermediate**.',
          '**No leaving group** (aldehydes/ketones) → the open carbonyl is **protonated to an alcohol**; **good leaving group** (acids & derivatives) → the **carbonyl reforms** and ejects the leaving group.',
          '**Water + carbonyl → geminal diol.**',
          '**1 equiv alcohol → hemiacetal** (aldehyde) / **hemiketal** (ketone, retains –OH); a **2nd equiv alcohol → acetal / ketal** via SN1.',
          'Nitrogen derivatives give **imines, oximes, hydrazones, semicarbazones**; **imines tautomerize to enamines**.',
          '**HCN + carbonyl → cyanohydrin** (stable, new C–C bond).'
        ]
      },
      {
        section: '6.3 Oxidation–Reduction Reactions',
        points: [
          'Aldehydes are oxidized to **carboxylic acids** by **$\\text{KMnO}_4$, $\\text{CrO}_3$, $\\text{Ag}_2\\text{O}$, $\\text{H}_2\\text{O}_2$** (anything stronger than PCC).',
          'Aldehydes and ketones are reduced to **alcohols** by **hydride reagents ($\\text{LiAlH}_4$, $\\text{NaBH}_4$)**.',
          '**Ketones cannot be further oxidized** but reduce to **2° alcohols**; aldehydes reduce to **1° alcohols**.'
        ]
      }
    ],
    mnemonics: [
      '**Aldehyde vs. ketone:** **Ald**ehyde is **A**t the end (terminal, ≥1 H); **K**etone is **K**ept inside (internal, 2 alkyls).',
      '**"Hemi = Half-done, keeps the OH."** A hemiacetal/hemiketal still has its **–OH** (1 alcohol added); a full **acetal/ketal** swapped that –OH for a second **–OR** (2 alcohols, no free OH).',
      '**Nucleophilic addition:** the **Nu hits the +C** — every reaction sends the nucleophile to the partially positive carbonyl carbon; with no leaving group you just protonate to an alcohol-type product.',
      '**"PCC = Partial, Can\'t Continue."** PCC (mild, anhydrous) gives the partial oxidation (1° alcohol → aldehyde) and can\'t push on to the acid.',
      '**"Everything but PCC pushes to the acid."** $\\text{KMnO}_4$, $\\text{CrO}_3$, $\\text{Ag}_2\\text{O}$, $\\text{H}_2\\text{O}_2$ all drive aldehydes to carboxylic acids.',
      '**"LAH is a Lion, NaBH₄ is a kitten":** $\\text{LiAlH}_4$ is the strong reducer; $\\text{NaBH}_4$ is the mild one.',
      '**N-derivative products** — **O**xime, **H**ydrazone, **S**emicarbazone from hydroxyl**amine**, hydra**zine**, semicarba**zide**; all share a **C=N** core, and a plain imine tautomerizes to an **enamine**.'
    ],
    keyConcepts: [
      '**The carbonyl carbon is the universal electrophile.** Oxygen\'s electronegativity makes C partial-positive; everything in this chapter is a nucleophile attacking that carbon.',
      '**One mechanism, many reactions:** nucleophilic addition (no leaving group → protonate to alcohol) vs. nucleophilic acyl substitution (good leaving group → carbonyl reforms). Aldehydes/ketones always take the addition path.',
      '**Aldehydes > ketones in reactivity** — less steric hindrance and fewer electron-donating alkyl groups leave the aldehyde carbon more electrophilic.',
      '**Oxidation state determines both reactivity and reagents:** PCC for the gentle stop at an aldehyde; stronger oxidants overshoot to acids; hydrides run the reaction backward to alcohols.',
      '**Acetals/ketals are protecting groups** — inert under basic/neutral conditions, but reverted to the carbonyl with aqueous acid and heat.'
    ],
    equations: [
      { name: 'Carbonyl polarity', tex: '\\overset{\\delta^+}{\\text{C}}\\!=\\!\\overset{\\delta^-}{\\text{O}}', note: 'Electronegative O withdraws electron density → electrophilic carbonyl carbon.' },
      { name: 'Hydration → geminal diol', tex: '\\text{R}_2\\text{C=O} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{R}_2\\text{C(OH)}_2', note: 'Acid- or base-catalyzed addition of water to the carbonyl.' },
      { name: 'Imine formation', tex: '\\text{R}_2\\text{C=O} + \\text{NH}_3 \\rightarrow \\text{R}_2\\text{C=NH} + \\text{H}_2\\text{O}', note: 'Condensation + nucleophilic substitution; water is lost as N replaces O.' },
      { name: 'Cyanohydrin formation', tex: '\\text{R}_2\\text{C=O} + \\text{HCN} \\rightarrow \\text{R}_2\\text{C(OH)(CN)}', note: 'Cyanide adds; stable product from the new C–C bond.' },
      { name: 'Oxidation ladder', tex: '\\text{alcohol} \\xrightarrow{[O]} \\text{aldehyde} \\xrightarrow{[O]} \\text{carboxylic acid}', note: 'PCC stops at the aldehyde; stronger oxidants reach the acid. Ketones are already maxed out.' }
    ]
  },

  questions: raw.questions
};
