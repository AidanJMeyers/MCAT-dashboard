// Chapter 8 — Carboxylic Acids. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch08.json; the recap/detail markdown,
// goals, tables, and mnemonics are authored here from scratch_ochem/ch08.md.
import raw from './ch08.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 8,
  title: 'Carboxylic Acids',
  subtitle: 'Description & properties · reactions of carboxylic acids',

  blocks: [
    /* ─────────────────── 8.1 Description and Properties ─────────────────── */
    {
      id: 's1', num: '8.1', title: 'Description and Properties',
      goals: [
        'Explain the underlying cause of the relatively high acidity of carboxylic acids',
        'Predict the effects of additional substituents on the acidity of a carboxylic acid',
        'Rank the acidity of comparable carboxylic acids based on their structure'
      ],
      images: [{ src: fig(0, 6).src, alt: fig(0, 6).alt, caption: 'Figure 8.5 — Carboxylate anion stability: after deprotonation, the negative charge is delocalized by resonance over both electronegative oxygens.' }],
      recap: `
- A **carboxylic acid** = a **carbonyl** ($\\text{C=O}$) + a **hydroxyl** ($\\text{–OH}$) on the *same* carbon. One of the **most oxidized** carbon functional groups; **always terminal** (carbonyl C = **C-1**).
- IUPAC suffix **–oic acid**; **salts** end in **–oate**; **diacids** end in **–dioic acid**.
- **Two** oxygens that H-bond → carboxylic acids form **dimers** → **higher boiling points** than the corresponding alcohols.
- **Acidic** because the **carboxylate anion** is **resonance-stabilized** over two oxygens ($pK_a \\approx 4.8$ for acetic acid).
- **Electron-withdrawing** substituents (–$\\text{NO}_2$, halides) **increase** acidity; **electron-donating** ones (–$\\text{NH}_2$, –$\\text{OCH}_3$) **decrease** it. **Closer = stronger effect.**
`,
      detail: `
#### Structure
A **carboxylic acid** carries both a **carbonyl group** and a **hydroxyl group** bonded to the **same carbon**. With **three bonds to oxygen**, it is one of the **most oxidized** functional groups in organic chemistry. Carboxylic acids are **always terminal** groups.

:::keyconcept
Carboxylic acids are **polar** and can **form hydrogen bonds**. Their acidity is due to **resonance stabilization** and can be enhanced by adding **electronegative groups** or by a greater ability to **delocalize charge**.
:::

#### Nomenclature
- **IUPAC:** add the suffix **–oic acid** to the parent root when the carboxylic acid is the **highest-priority** group. The **carbonyl carbon becomes carbon 1**.
- **Common names** are extremely frequent — memorize the small-chain prefixes.
- **Cyclic** carboxylic acids: name the cycloalkane + suffix **carboxylic acid**.
- **Salts:** name the **cation first**, then the acid with **–oate** replacing **–oic acid** (e.g., sodium ethanoate / sodium acetate).
- **Dicarboxylic acids** (a –COOH on *each* end) take the suffix **–dioic acid**.

![Figure 8.1 — IUPAC names of carboxylic acids](${fig(0, 3).src})

##### Common names worth memorizing

| Carbons | Common name | IUPAC name |
|---|---|---|
| 1 | **Formic** acid | Methanoic acid |
| 2 | **Acetic** acid | Ethanoic acid |
| 3 | **Propionic** acid | Propanoic acid |

##### Straight-chain dicarboxylic acids (smallest → larger)

| Carbons | Common name | IUPAC name |
|---|---|---|
| 2 | **Oxalic** | Ethanedioic acid |
| 3 | **Malonic** | Propanedioic acid |
| 4 | **Succinic** | Butanedioic acid |
| 5 | **Glutaric** | Pentanedioic acid |
| 6 | **Adipic** | Hexanedioic acid |
| 7 | **Pimelic** | Heptanedioic acid |

![Figure 8.3 — Cyclic carboxylic acid and a carboxylic acid salt](${fig(0, 5).src})

:::expertise
The **same common-name prefixes** are used for both **aldehydes and carboxylic acids**: **form–** for one carbon, **acet–** for two, **propion–** for three.
:::

:::mnemonic
Dicarboxylic acids in order of size: **"Oh My Such Good Apple Pie"** → **O**xalic (2) · **M**alonic (3) · **S**uccinic (4) · **G**lutaric (5) · **A**dipic (6) · **P**imelic (7).
:::

#### Physical properties
Carboxylic acids share much with aldehydes and ketones (both have carbonyls), but the **extra hydroxyl** lets them **hydrogen bond** and provides a **second acidic hydrogen** for reactions.

##### Hydrogen bonding & dimers
- Carboxylic acids are **polar** (carbonyl) **and** can **H-bond** (an H on the very electronegative hydroxyl O).
- Attractions are **especially strong** because **both** the hydroxyl O **and** the carbonyl O participate in hydrogen bonding.
- As a result they tend to form **dimers**: pairs of molecules joined by **two** hydrogen bonds.
- Multiple H-bonds push **boiling and melting points** *above* those of the corresponding **alcohols**; BP also **rises with molecular weight**.

:::keyconcept
**Boiling point ladder:** alkane $<$ aldehyde/ketone $<$ alcohol $<$ **carboxylic acid**. Carboxylic acids win because *both* oxygens H-bond and they pair into **dimers**.
:::

#### Acidity
The **hydroxyl hydrogen** is quite acidic. After it leaves, the negative charge is **resonance-stabilized** between the two electronegative oxygens, giving a very stable **carboxylate anion**.

- **More stable conjugate base → easier proton loss → stronger acid.**
- Representative values: **acetic acid** $pK_a \\approx 4.8$; **propanoic acid** $pK_a \\approx 4.9$.
- These are acidic *for organic compounds*, but far weaker than strong acids: **HCl** $pK_a = -8.0$; $\\text{H}_2\\text{SO}_4$ (first proton) $pK_a \\approx 1.99$.
- **Lower $pK_a$ = stronger acid.**

##### Substituent effects on acidity
Groups on nearby carbons change anion stability, and therefore acidity:

| Substituent type | Examples | Effect on anion | Effect on acidity |
|---|---|---|---|
| **Electron-withdrawing** | –$\\text{NO}_2$, halides (–Cl, –Br) | **Stabilizes** negative charge | **Increases** acidity ($\\downarrow pK_a$) |
| **Electron-donating** | –$\\text{NH}_2$, –$\\text{OCH}_3$ | **Destabilizes** negative charge | **Decreases** acidity ($\\uparrow pK_a$) |

- **Distance matters:** the **closer** the substituent to the carboxyl group, the **greater** the effect.
- **More** electron-withdrawing groups → **more** acidic.

:::mnemonic
**"Withdraw to win (acidity)."** Electron-**W**ithdrawing groups pull charge away → stabilize the anion → stronger acid. Electron-**D**onating groups **D**ampen acidity. And **closer counts** — a Cl one carbon away beats a Cl three carbons away.
:::

##### Dicarboxylic acids
Each –COOH is itself **electron-withdrawing** (electronegative oxygens), so each one stabilizes loss of the other's proton.

- **Diacid > monoacid** in acidity (the second –COOH withdraws electrons, stabilizing the first carboxylate).
- **But** once the **first** proton leaves, you have a **carboxylate anion**, which is now **electron-donating** — it *destabilizes* a second deprotonation (two adjacent negative charges would repel).
- So the **second proton is *less* acidic** than the analogous proton of a monocarboxylic acid.

:::keyconcept
Acidity ranking for the first proton: **dicarboxylic acid > monocarboxylic acid > once-deprotonated dicarboxylic acid.** Pulling off a *second* proton from a diacid is hard because you'd force two negative charges next to each other.
:::

##### β-Dicarboxylic acids and the acidic α-hydrogen
**β-Dicarboxylic acids** have two carboxyl groups separated by a **single carbon** (each acid sits on the **β-carbon** of the other).

- The **α-hydrogens** on the carbon *between* the two carboxyls are unusually acidic ($pK_a \\approx 9\\text{–}14$).
- Losing that α-H makes a **carbanion** stabilized by the **electron-withdrawing** pull of **both** carboxyl groups.

![Figure 8.6 — Acidity of the α-hydrogen in β-dicarboxylic acids](${fig(0, 7).src})

:::keyconcept
The **hydroxyl hydrogen is the most acidic** proton on a carboxylic acid. **But** in **1,3-dicarbonyls** the **α-hydrogen** is *also* quite acidic — just not as acidic as the –OH.
:::

This applies to **any 1,3-dicarbonyl**: β-diketones, β-ketoacids, β-dialdehydes, etc.

![Figure 8.7 — General structure of 1,3-dicarbonyl compounds](${fig(0, 8).src})
`
    },

    /* ─────────────────── 8.2 Reactions of Carboxylic Acids ─────────────────── */
    {
      id: 's2', num: '8.2', title: 'Reactions of Carboxylic Acids',
      goals: [
        'Recall the reactant types used in acyl substitution reactions to form the major carboxylic acid derivatives (amides and esters)',
        'Describe the mechanism of nucleophilic acyl substitution reactions',
        'Identify the conditions that lead to spontaneous decarboxylation of a carboxylic acid',
        'Predict the products of an acyl substitution reaction'
      ],
      images: [{ src: fig(1, 2).src, alt: fig(1, 2).alt, caption: 'Figure 8.9 — Nucleophilic acyl substitution: a nucleophile opens the carbonyl to a tetrahedral intermediate, then the carbonyl reforms and kicks out the leaving group.' }],
      recap: `
- **Synthesis:** oxidize **1° alcohols or aldehydes** (KMnO₄, $\\text{Na}_2\\text{Cr}_2\\text{O}_7$/$\\text{K}_2\\text{Cr}_2\\text{O}_7$, $\\text{CrO}_3$). 2°/3° alcohols **cannot** oxidize to acids.
- **Nucleophilic acyl substitution** is the master mechanism: Nu attacks → **tetrahedral intermediate** → carbonyl reforms → **leaving group** leaves.
- Nu = **amine/$\\text{NH}_3$** → **amide**; **alcohol** → **ester**; **another acid** → **anhydride**. Cyclic forms: **lactam · lactone · anhydride**.
- **Reduction:** **LiAlH₄** reduces an acid → **1° alcohol**; **NaBH₄ is too weak** (no reaction).
- **Decarboxylation:** **β-keto acids / 1,3-diacids** lose **CO₂** when **heated** via a **6-membered ring** transition state.
- **Saponification:** fatty acid + strong base (lye) → **soap**; soaps form **micelles** (polar heads out, nonpolar tails in).
`,
      detail: `
#### Synthesis of carboxylic acids
- Prepared by **oxidation of aldehydes and primary alcohols**.
- Common oxidants: **dichromate salts** ($\\text{Na}_2\\text{Cr}_2\\text{O}_7$ or $\\text{K}_2\\text{Cr}_2\\text{O}_7$), **chromium trioxide** ($\\text{CrO}_3$), or **potassium permanganate** ($\\text{KMnO}_4$).
- **2° and 3° alcohols cannot** be oxidized to carboxylic acids (they already have ≥2 bonds to other carbons).
- Other routes (**Grignard reagents**, **nitrile hydrolysis**) exist but are **outside MCAT scope**.

![Figure 8.8 — Synthesis of a carboxylic acid via oxidation of a primary alcohol](${fig(1, 1).src})

#### Nucleophilic acyl substitution — the master mechanism
Most carboxylic-acid (and derivative) reactions run through **nucleophilic acyl substitution**. It resembles nucleophilic *addition* to an aldehyde/ketone, but the key difference is the presence of a **leaving group**.

1. **Step 1 — Nucleophilic addition:** the nucleophile attacks the **electrophilic carbonyl carbon**, opening the $\\text{C=O}$ and forming a **tetrahedral intermediate**.
2. **Step 2 — Elimination:** the carbonyl **reforms**, **kicking off the leaving group**.

Conditions that favor it:
- A **good leaving group** — i.e., a **weak base** (often the conjugate base of a strong acid).
- **Acidic** conditions (more electrophilic carbonyl carbon) **or** **basic** conditions (more reactive nucleophile).

:::expertise
The MCAT restricts acyl derivatives to **carboxylic acids, amides, esters, and anhydrides**. You may have learned about acyl halides and nitriles in class, but they are **off the official content list**.
:::

##### The major derivatives at a glance

| Derivative | Formed by reaction with | Reaction notes | Cyclic form |
|---|---|---|---|
| **Amide** | **Ammonia ($\\text{NH}_3$) or an amine** | Acidic *or* basic conditions; suffix **–amide**; N-alkyls get **N–** prefix | **Lactam** |
| **Ester** | **Alcohol** (acidic conditions) | **Condensation** (loses $\\text{H}_2\\text{O}$); fastest with **1° alcohols**; named like a salt | **Lactone** |
| **Anhydride** | **Another carboxylic acid** | **Condensation** of two acids; name replaces *acid* → *anhydride* | (cyclic) **anhydride** |

#### Amides
- Nucleophile = **$\\text{NH}_3$ or an amine**; can be driven in **acidic or basic** solution.
- Named by replacing **–oic acid** with **–amide**; **N-alkyl** groups carry the prefix **N–**.
- **Amide resonance:** lone pair on **N** delocalizes toward the carbonyl **O**, stabilizing and **restricting rotation** about the C–N bond.

![Figure 8.10 — Formation of an amide by nucleophilic acyl substitution](${fig(1, 3).src})

![Figure 8.11 — Resonance of amides](${fig(1, 4).src})

- **Cyclic amides = lactams** (named by replacing –oic acid with –lactam, or by the bonded carbon).

#### Esters
- A **hybrid of a carboxylic acid and an ether**; made by reacting an acid with an **alcohol** under **acidic** conditions (**Fischer esterification**).
- A **condensation** reaction → **water** as the side product.
- In acid, the **carbonyl O is protonated**, increasing positive charge on the carbonyl carbon and making it **more electrophilic**. **Fastest with 1° alcohols.**

![Figure 8.13 — Esterification: reaction of a carboxylic acid with an alcohol](${fig(1, 6).src})

:::keyconcept
**Protonating the $\\text{C=O}$ makes the electrophilic carbon even riper for nucleophilic attack** — this is why Fischer esterification needs an acid catalyst.
:::

- Esters are named **like salts** of carboxylic acids (e.g., **ethyl acetate** = ethyl ethanoate).
- **Cyclic esters = lactones** (replace –oic acid with –lactone).

![Figure 8.14 — Examples of lactones](${fig(1, 7).src})

:::mnemonic
**Cyclic = "L" for the first two:** cyclic amide → **Lactam**, cyclic ester → **Lactone**. (A cyclic anhydride is just still called an **anhydride**.) Remember **amid**e ↔ **am**ine source; **est**er ↔ alcohol source.
:::

#### Anhydrides
- Formed by **condensation of two carboxylic acids** (loses water), via the **same nucleophilic acyl substitution**.
- Named by replacing the *acid* at the end of the parent name with **anhydride** (e.g., two ethanoic acids → **ethanoic anhydride**), whether **cyclic or linear**.

![Figure 8.15 — Synthesis of an anhydride via carboxylic acid condensation](${fig(1, 8).src})

#### Reduction
- **Lithium aluminum hydride ($\\text{LiAlH}_4$, "LAH")** reduces a carboxylic acid all the way to a **primary alcohol** by **nucleophilic addition of hydride** to the carbonyl.
- An **aldehyde intermediate** forms but is *also* reduced to the alcohol.
- **Sodium borohydride ($\\text{NaBH}_4$)** is a **gentler** reducing agent — **not strong enough** to reduce carboxylic acids (**no reaction**).

![Figure 8.16 — Reduction of a carboxylic acid to a primary alcohol](${fig(1, 9).src})

:::keyconcept
**Carboxylic acids are reduced by $\\text{LiAlH}_4$, but NOT by the weaker $\\text{NaBH}_4$.** $\\text{LiAlH}_4$ = strong (works); $\\text{NaBH}_4$ = mild (no reaction on an acid).
:::

:::mnemonic
**"$\\text{LiAlH}_4$ = Like A Lot of Hydride"** — strong enough to drive an acid all the way to a 1° alcohol. **$\\text{NaBH}_4$ = "Not Brawny enough"** for carboxylic acids.
:::

#### Decarboxylation
**Decarboxylation** = complete loss of the carboxyl group as **carbon dioxide** ($\\text{CO}_2$) — a handy way to delete a carbon from the chain.

- **1,3-dicarboxylic acids and other β-keto acids** can **spontaneously decarboxylate when heated**.
- The carboxyl group is lost and **replaced with hydrogen**.
- Because electrophile and nucleophile are in the **same molecule**, it proceeds through a **six-membered ring transition state**.
- The **enol** first formed **tautomerizes** to the more stable **keto** form.

![Figure 8.17 — Decarboxylation: loss of CO₂ via a six-membered ring transition state](${fig(1, 11).src})

:::bridge
Decarboxylation is everywhere in biochemistry. The **pyruvate dehydrogenase complex** decarboxylates **pyruvate** to help form **acetyl-CoA**, which feeds the **citric acid cycle** — *MCAT Biochemistry Review*, Ch. 10.
:::

:::mnemonic
**Decarboxylation needs the "β" setup + heat.** Picture the **six-membered ring** (the carboxyl O reaching back to grab an H): only **β-keto acids / 1,3-diacids** can close that ring, so only they decarboxylate easily.
:::

#### Saponification (soap formation)
- **Long-chain carboxylic acids (fatty acids) + NaOH or KOH (lye)** → a **salt** = **soap**. This process is **saponification**.
- Soaps have a **nonpolar tail** and a **polar carboxylate head**, so they can solvate nonpolar organics in water.

##### Micelles
In aqueous solution, soap molecules self-assemble into spherical **micelles**:
- **Polar heads face outward** (solvated by water).
- **Nonpolar hydrocarbon tails point inward** (shielded from water).
- **Nonpolar molecules (grease)** dissolve in the **hydrocarbon interior**; the whole micelle then dissolves because its **exterior is polar**.

![Figure 8.19 — Soap micelle: polar heads out, nonpolar tails in](${fig(1, 12).src})

:::bridge
The **phospholipid bilayer**, **micelles**, and **liposomes** all depend on the **bipolar (amphipathic)** nature of long-chain carboxylic acids — *MCAT Biochemistry Review*, Ch. 5.
:::

:::mnemonic
**"Sapon → soap."** Fatty acid **+ base** = soap (think **lye** in old soap-making). In a micelle: **heads out, tails in** — "**oily inside, watery outside**."
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Description and Properties',
        points: [
          'Carboxylic acids contain a **carbonyl and a hydroxyl** group on the **same carbon** and are **always terminal**.',
          'Suffix **–oic acid**; **salts** are **–oate**; **dicarboxylic acids** are **–dioic** acids.',
          'They are **polar** and **hydrogen bond** very well (often as **dimers**) → **high boiling points**, above the corresponding alcohols.',
          'Acidity comes from **resonance** stabilization of the carboxylate over two oxygens.',
          '**Electron-withdrawing** substituents **increase** acidity; **electron-donating** ones **decrease** it. **Closer = stronger** effect.',
          '**β-dicarboxylic acids** (and other **1,3-dicarbonyls**) have an **α-hydrogen** that is also highly acidic.'
        ]
      },
      {
        section: 'Reactions of Carboxylic Acids',
        points: [
          'Made by **oxidation of primary alcohols or aldehydes** (KMnO₄, dichromate salts, or CrO₃).',
          '**Nucleophilic acyl substitution**: Nu attacks the electrophilic carbonyl C → **tetrahedral intermediate** → carbonyl reforms, **expelling the leaving group**.',
          'Nu = **$\\text{NH}_3$/amine → amide** (cyclic = **lactam**); **alcohol → ester** (cyclic = **lactone**); **another acid → anhydride**.',
          '**$\\text{LiAlH}_4$** reduces an acid to a **1° alcohol** (through an aldehyde intermediate); **$\\text{NaBH}_4$** is **too weak**.',
          '**β-keto acids / 1,3-diacids** **decarboxylate** on heating, losing **$\\text{CO}_2$** via a **six-membered** cyclic transition state.',
          '**Saponification**: long-chain fatty acid + strong base → **soap**; soaps form **micelles** (hydrophilic heads out, hydrophobic tails in).'
        ]
      }
    ],
    mnemonics: [
      '**Dicarboxylic acids by size:** "**Oh My Such Good Apple Pie**" → **O**xalic · **M**alonic · **S**uccinic · **G**lutaric · **A**dipic · **P**imelic (2→7 carbons).',
      '**Acidity:** electron-**W**ithdrawing groups **W**in (stronger acid); electron-**D**onating groups **D**ampen it. **Closer to –COOH = bigger effect.**',
      '**Cyclic derivatives:** cyclic amide = **Lactam**, cyclic ester = **Lactone** (both start with **L**); cyclic anhydride is still just **anhydride**.',
      '**Reduction strength:** **$\\text{LiAlH}_4$ = "Like A Lot of Hydride"** (reduces acids → 1° alcohol); **$\\text{NaBH}_4$ = "Not Brawny enough"** (no reaction on acids).',
      '**Decarboxylation:** only **β-keto acids / 1,3-diacids** can close the **6-membered ring**, so only they lose **$\\text{CO}_2$** easily — and only **when heated**.',
      '**Micelle:** **heads out, tails in** — "oily inside, watery outside." Soap = **fatty acid + base** (saponification).',
      '**Boiling-point ladder:** alkane < aldehyde/ketone < alcohol < **carboxylic acid** (two H-bonding oxygens + dimers).'
    ],
    keyConcepts: [
      '**Acidity = conjugate-base stability.** A carboxylic acid is acidic because the **carboxylate** is **resonance-stabilized** over two oxygens; anything that further stabilizes that anion (EWGs) raises acidity, anything that destabilizes it (EDGs, an adjacent negative charge) lowers it.',
      '**One mechanism rules them all.** Amide, ester, and anhydride formation are all **nucleophilic acyl substitution** — only the **nucleophile** (and hence the leaving group / product) changes.',
      '**Reducing-agent selectivity is high-yield:** **$\\text{LiAlH}_4$** reduces carboxylic acids to **primary alcohols**; **$\\text{NaBH}_4$** is too mild to touch them.',
      '**Decarboxylation requires the right substrate + heat:** a **β-keto acid or 1,3-diacid** that can form a **six-membered cyclic transition state**, losing **$\\text{CO}_2$** and tautomerizing enol → keto.',
      '**Amphipathic acids build biology:** the **polar head / nonpolar tail** structure underlies **soaps, micelles, liposomes, and the phospholipid bilayer**.'
    ],
    equations: [
      { name: 'Acidity scale (pKa)', tex: 'pK_a = -\\log_{10} K_a', note: 'Lower pKa = stronger acid. Acetic acid ≈ 4.8; HCl = −8.0; H₂SO₄ (first proton) ≈ 1.99.' },
      { name: 'Esterification (Fischer)', tex: '\\text{RCOOH} + \\text{R}\'\\text{OH} \\rightleftharpoons \\text{RCOOR}\' + \\text{H}_2\\text{O}', note: 'Acid-catalyzed condensation; reversible; fastest with primary alcohols.' },
      { name: 'Amide formation', tex: '\\text{RCOOH} + \\text{NH}_3 \\rightarrow \\text{RCONH}_2 + \\text{H}_2\\text{O}', note: 'Nucleophilic acyl substitution; water is the leaving group (condensation).' },
      { name: 'Decarboxylation', tex: '\\text{R-CO-CH}_2\\text{-COOH} \\xrightarrow{\\Delta} \\text{R-CO-CH}_3 + \\text{CO}_2', note: 'β-keto acid loses CO₂ on heating via a six-membered ring transition state.' }
    ]
  },

  questions: raw.questions
};
