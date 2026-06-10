// Chapter 9 — Carboxylic Acid Derivatives. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch09.json (already-correct extraction);
// the recap/detail markdown, goals, and concept summary are authored here.
import raw from './ch09.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 9,
  title: 'Carboxylic Acid Derivatives',
  subtitle: 'Amides, esters & anhydrides · reactivity principles · nucleophilic acyl substitution',

  blocks: [
    /* ─────────────────── 9.1 Amides, Esters, and Anhydrides ─────────────────── */
    {
      id: 's1', num: '9.1', title: 'Amides, Esters, and Anhydrides',
      goals: [
        'Apply the rules for naming carboxylic acid derivatives, including the nomenclature for the cyclic version of the molecule',
        'Describe a condensation reaction'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 9.1 — Naming amides: the –oic acid suffix becomes –amide; N-substituents are listed as prefixes.' }],
      recap: `
- **Carboxylic acid derivatives** (amides, esters, anhydrides) all form by a **condensation reaction** with a carboxylic acid — two molecules combine into one with loss of a **small molecule (water)**.
- **Amide** (RCONR₂): from **ammonia or an amine**; suffix **–amide**; cyclic form = **lactam**.
- **Ester** (RCOOR'): from an **alcohol**; suffix **–oate**; cyclic form = **lactone**.
- **Anhydride** (RCOOCOR): condensation **dimer of two carboxylic acids**; named with **anhydride**; cyclic forms arise from **diacids**.
- **Saponification** = base hydrolysis of **triacylglycerols** (ester storage fat) → **soap** (fatty-acid salts) + **glycerol**.
`,
      detail: `
#### Condensation: the unifying theme
Amides, esters, and anhydrides are all **carboxylic acid derivatives**. Each forms by a **condensation reaction** with a carboxylic acid.

- A condensation reaction **combines two molecules into one** while **losing a small molecule**.
- Here that small molecule is **water** ($\\text{H}_2\\text{O}$): the **hydroxyl** of the carboxylic acid plus a **hydrogen** from the incoming nucleophile.

$$\\text{R–COOH} + \\text{H–Nu} \\rightarrow \\text{R–CO–Nu} + \\text{H}_2\\text{O}$$

:::keyconcept
In a **condensation reaction**, two molecules combine to form one, with the **loss of a small molecule** — water, in our case. Carboxylic acid derivatives are formed by this mechanism.
:::

For each derivative below, focus on the **nucleophile** that forms it and the **nomenclature** of the functional group.

| Derivative | Formed from –COOH by… | Suffix | Cyclic form |
|---|---|---|---|
| **Amide** | **Ammonia or an amine** | **–amide** | **Lactam** |
| **Ester** | **An alcohol** | **–oate** | **Lactone** |
| **Anhydride** | **Another carboxylic acid** | **anhydride** | **Anhydride** (cyclic) |

#### Amides
**Amides** have the general formula $\\text{RCONR}_2$. They are named by replacing the **–oic acid** suffix with **–amide**. Alkyl substituents on the nitrogen are listed as prefixes with the locant **N–**.

- Synthesized by reacting **other carboxylic acid derivatives** with **ammonia or an amine**.
- **Loss of a hydrogen** from the nucleophile is required → only **primary and secondary amines** undergo the reaction (tertiary amines have no N–H to lose).

:::keyconcept
Amides are formed by the **condensation reaction** of other carboxylic acid derivatives and **ammonia or an amine**.
:::

##### Lactams (cyclic amides)

![Figure 9.2 — Examples of lactams](${fig(0, 3).src})

**Cyclic amides** are called **lactams**, named by the carbon bonded to the nitrogen:

- **β-lactam** — bond between the **β-carbon** and the nitrogen (four-membered ring)
- **γ-lactam** — bond between the **γ-carbon** and the nitrogen (five-membered ring), and so forth.

Amides **may or may not hydrogen bond** depending on how many alkyl groups sit on nitrogen, so their boiling points may be **lower than or equal to** those of the parent carboxylic acids.

#### Esters
**Esters** are the **dehydration (condensation) products** of carboxylic acid derivatives with **alcohols**. Naming:

- The **esterifying group** (the substituent bonded to oxygen) is written as a **prefix**.
- The suffix **–oate** replaces **–oic acid**.
- Example: **ethyl acetate** (from acetic acid + ethanol) = **ethyl ethanoate** in IUPAC.

![Figure 9.3 — Naming esters](${fig(0, 4).src})

##### Fischer esterification

![Figure 9.4 — Fischer esterification: acid-catalyzed condensation of a carboxylic acid and an alcohol](${fig(0, 5).src})

Under **acidic conditions**, a carboxylic acid + alcohol condense into an ester. This is the **Fischer esterification**:

$$\\text{R–COOH} + \\text{R'–OH} \\;\\underset{\\text{H}^+}{\\rightleftharpoons}\\; \\text{R–COOR'} + \\text{H}_2\\text{O}$$

Esters can **also** be made from **anhydrides + alcohols**.

##### Lactones (cyclic esters)

![Figure 9.5 — Examples of lactones](${fig(0, 7).src})

**Cyclic esters** are called **lactones**, named like lactams but with the **precursor acid name** included (e.g., β-propiolactone, γ-butyrolactone). Lacking hydrogen bonding, esters usually have **lower boiling points** than their parent carboxylic acids.

##### Triacylglycerols and saponification
**Triacylglycerols** — the body's fat-storage form — are **esters of long-chain fatty acids and glycerol** (1,2,3-propanetriol).

- **Saponification** = base-catalyzed **hydrolysis of fats** → **soap**.
- Treating a triacylglycerol with **NaOH** yields **fatty acid salts (soap)** + **glycerol**.
- Subsequent **acidification** of the soap regenerates the free **fatty acids**.

:::keyconcept
Esters are formed by the **condensation reaction** of carboxylic acids or anhydrides with **alcohols**. **Saponification** reverses this under base, splitting fats into soap and glycerol.
:::

#### Anhydrides
**Anhydrides** (acid anhydrides) are the **condensation dimers of carboxylic acids**, general formula $\\text{RC(O)OC(O)R}$.

| Anhydride type | Naming rule |
|---|---|
| **Symmetrical** | Substitute the word **anhydride** for **acid** (e.g., acetic acid → **acetic anhydride**) |
| **Asymmetrical** | Name the two chains **alphabetically**, then **anhydride** |
| **Cyclic** (e.g., **phthalic**, **succinic**) | Recognize as cyclic anhydrides from **intramolecular dehydration of diacids** |

![Figure 9.7 — Naming anhydrides; phthalic and succinic are cyclic anhydrides from diacids](${fig(0, 8).src})

##### Synthesis from two carboxylic acids

![Figure 9.8 — Synthesis of an anhydride via condensation of two carboxylic acids](${fig(0, 9).src})

Two molecules of carboxylic acid come together and lose **one water** in forming the anhydride:

$$2\\,\\text{R–COOH} \\rightarrow \\text{R–CO–O–CO–R} + \\text{H}_2\\text{O}$$

:::keyconcept
Anhydrides are usually formed by the **condensation reaction of two carboxylic acids**.
:::

##### Intramolecular (cyclic) anhydride formation

![Figure 9.9 — Intramolecular anhydride formation driven by heat and ring stability](${fig(0, 10).src})

- Certain cyclic anhydrides form simply by **heating** carboxylic (di)acids.
- The reaction is driven by the **increased stability of the new ring**, so only **five- or six-membered rings** are easily made.
- As in every anhydride formation, the **–COOH hydroxyl acts as the nucleophile**, attacking the carbonyl on the other –COOH.

Anhydrides often have **higher boiling points** than their parent carboxylic acids, owing mainly to their **much greater molecular weight**.

:::mnemonic
**Naming map:** **a**mide → **a**mmonia/**a**mine; **e**ster → alcoh**ol** (–o**ate**); **anhydride** → **a**nother **a**cid. The cyclic versions all swap "open chain" for a ring word: **lactam** (amide), **lactone** (ester), **cyclic anhydride**.
:::
`
    },

    /* ───────────────────────── 9.2 Reactivity Principles ───────────────────────── */
    {
      id: 's2', num: '9.2', title: 'Reactivity Principles',
      goals: [
        'Order carboxylic acid derivatives — anhydrides, esters, and amides — based on their reactivity',
        'Explain the relatively high rate of hydrolysis in β-lactams',
        'Identify the properties of the carboxylic acid derivatives that cause their reactivities to differ'
      ],
      images: [{ src: fig(1, 2).src, alt: fig(1, 2).alt, caption: 'Figure 9.12 — Penicillin, a β-lactam antibiotic; the strained four-membered ring makes it highly reactive to hydrolysis.' }],
      recap: `
- **Reactivity to nucleophiles:** **anhydride > ester ≈ carboxylic acid > amide**. Acyl halides (not detailed here) are the **most reactive** of all.
- The order tracks **electron-withdrawing power** of the substituents: anhydrides (2 EWG O atoms) are **most electrophilic**; amides (electron-**donating** N) are **least reactive**.
- **Steric hindrance** slows nucleophilic access to the carbonyl carbon; **protecting groups** (e.g., acetals) exploit this.
- **Induction** (charge across σ bonds) is weak; **conjugation/resonance** (alternating single/multiple bonds, delocalized π) is far stronger and stabilizes the transition state.
- **β-lactams** hydrolyze fast: a strained four-membered ring (torsional + angle strain) that also **forces a non-planar N**, killing resonance.
`,
      detail: `
#### Relative reactivity of derivatives
In **nucleophilic substitution**, the reactivity of a carbonyl is set by its **substituents**.

$$\\underbrace{\\text{acyl halide}}_{\\text{most reactive}} > \\text{anhydride} > \\text{ester} \\approx \\text{carboxylic acid} > \\underbrace{\\text{amide}}_{\\text{least reactive}}$$

| Derivative | Substituent effect | Reactivity |
|---|---|---|
| **Anhydride** | Resonance stabilization + **three electron-withdrawing O atoms** → most electrophilic carbon | **Highest** |
| **Ester** | Lacks one electron-withdrawing carbonyl oxygen vs. anhydride | High (≈ carboxylic acid) |
| **Carboxylic acid** | Extra leaving-group oxygen raises dipole character | High |
| **Amide** | **Electron-donating amino group** lowers the carbonyl's partial positive charge | **Lowest** |

:::keyconcept
For reactivity toward **nucleophilic attack**: **anhydrides** are most reactive, followed by **esters and carboxylic acids**, then **amides**.
:::

#### Steric effects
**Steric hindrance** = a reaction is slowed or blocked by the **size of the substituents** crowding the reactive site.

- Classic example: **SN2 reactions do not occur at tertiary carbons.**
- Can be exploited: a **tertiary substrate** pushes a reaction toward **SN1** rather than SN2.
- Used to build **protecting groups** — e.g., aldehydes/ketones react with **strong reducing agents** like $\\text{LiAlH}_4$, but reacting first with **two equivalents of alcohol** makes a nonreactive **acetal/ketal**; the carbonyl is later regenerated with **aqueous acid**.
- For derivatives: the **size and substitution of the leaving group** controls nucleophile access to the carbonyl carbon, tuning the rate of **nucleophilic acyl substitution**.

:::keyconcept
**Steric hindrance** controls *where* a reaction occurs. **Protecting groups** can make it too hard for a nucleophile, oxidizing agent, or reducing agent to reach part of a molecule.
:::

#### Electronic effects
##### Induction
**Induction** = distribution of charge **across σ bonds**.

- Electrons shift toward the **more electronegative** atom → a **dipole** across the σ bond (slightly + on the less electronegative atom, slightly − on the more electronegative atom).
- **Weak**, and **weakens with distance** from the electronegative atom.
- Explains the **carbonyl dipole**, the heightened reactivity of **carboxylic acids** (extra leaving-group oxygen), and the **anhydride > ester > amide** order: anhydrides have **two EWGs** leaving a large partial positive on the carbon; amides are weaker because **nitrogen is less electronegative than oxygen**.

##### Conjugation and resonance

![Figure 9.10 — Conjugation in benzene: parallel p-orbitals form delocalized π clouds above and below the ring](${fig(1, 0).src})

**Conjugation** = alternating **single and multiple bonds**.

- Implies all involved atoms are **sp²- or sp-hybridized** → have **unhybridized p-orbitals**.
- Aligned p-orbitals **delocalize π electrons** through resonance, forming electron clouds above and below the molecular plane (classically shown with **benzene**).

In carbonyl compounds, conjugation can involve the carbonyl itself — e.g., **α,β-unsaturated carbonyls (enones)**.

![Figure 9.11 — Conjugation in a carbonyl-containing compound (an enone)](${fig(1, 1).src})

:::keyconcept
**Induction** is charge distributed across σ bonds (weak). **Conjugation and resonance** are far more powerful and occur in systems with **alternating single and multiple bonds**.
:::

Conjugated compounds are **very stable** (multiple resonance structures) and can **stabilize the positive charge** that develops once a nucleophile bonds — making them **more susceptible to nucleophilic attack**.

#### Strain in cyclic derivatives
**Lactams** and **lactones** are cyclic amides and esters. Smaller rings carry more **strain**, raising reactivity to hydrolysis.

**β-lactams** (four-membered cyclic amides) are highly reactive because:

- **Torsional strain** from eclipsing interactions.
- **Angle strain** from compressing the normal sp³ angle of **109.5°**.
- A four-membered ring forces a **trigonal-pyramidal (non-planar) nitrogen**, which **reduces resonance** and makes hydrolysis more likely.
- Ring strain (and reactivity) **increases with fusion to a second ring**.

:::realworld
Many antibiotic families contain **β-lactams**: the **penicillins**, **cephalosporins**, **carbapenems**, and **monobactams**. Many bacteria evolved **β-lactamases** that cleave the β-lactam ring as a resistance mechanism — so β-lactams are often co-administered with **β-lactamase inhibitors**.
:::

:::mnemonic
**Reactivity order — "Anhydrides Eat Carboxylic Acids, Murder Amides":** **A**nhydride > **E**ster ≈ **C**arboxylic **A**cid > **M**ide (amide). (Add **acyl halides** on top as the most reactive.) Stack the rule: **more electron-withdrawing groups = more reactive; electron-donating N (amide) = least reactive.**
:::
`
    },

    /* ──────────────── 9.3 Nucleophilic Acyl Substitution Reactions ──────────────── */
    {
      id: 's3', num: '9.3', title: 'Nucleophilic Acyl Substitution Reactions',
      goals: [
        'Describe the mechanism for transesterification reactions',
        'Explain how strong acid and strong base conditions would impact the mechanism of hydrolysis of an amide',
        'Identify the nucleophile and electrophile within nucleophilic acyl substitution reactions'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 9.13 — Nucleophilic acyl substitution: ammonia cleaves an anhydride into an amide and a carboxylic acid.' }],
      recap: `
- **Nucleophilic acyl substitution** = nucleophile attacks the **carbonyl carbon (electrophile)** and a **leaving group** is displaced; all derivatives react, at rates set by reactivity (**anhydride > ester > amide**).
- **Anhydride cleavage**: + **ammonia/amine** → **amide + carboxylic acid**; + **alcohol** → **ester + carboxylic acid**; + **water** → **two carboxylic acids** (use symmetric anhydrides to avoid mixtures).
- **Transesterification**: an **alcohol** swaps the esterifying group of an ester → a **different ester**.
- **Amide hydrolysis** needs **strong acid** (protonate carbonyl O → water attacks → carboxylic acid + ammonia) **or strong base** (OH⁻ attacks → **carboxylate anion**).
`,
      detail: `
#### The general mechanism
**Nucleophilic acyl substitution** mirrors the chemistry of carboxylic acids and other carbonyls:

- A **nucleophile** attacks the **carbonyl carbon** (the **electrophile**).
- A **tetrahedral intermediate** forms, then collapses, **displacing a leaving group**.
- **All** carboxylic acid derivatives participate, at relative rates **anhydride > ester > amide**.

$$\\text{Nu}^- + \\text{R–CO–LG} \\rightarrow \\text{R–CO–Nu} + \\text{LG}^-$$

#### Anhydride cleavage
A nucleophile attacking an anhydride **splits it in two** (a cleavage reaction). The general pattern:

| Nucleophile added | Products |
|---|---|
| **Ammonia / amine** | **Amide** + **carboxylic acid** |
| **Alcohol** | **Ester** + **carboxylic acid** |
| **Water** | **Two carboxylic acids** |

##### Anhydride → amide
Here **ammonia is the nucleophile**, one **carbonyl carbon is the electrophile**, and a **carboxylic acid is the leaving group**.

![Figure 9.13 — Nucleophilic acyl substitution: anhydride to amide and carboxylic acid](${fig(2, 1).src})

##### Anhydride → ester

![Figure 9.14 — Nucleophilic acyl substitution: anhydride + alcohol → ester and carboxylic acid](${fig(2, 2).src})

Alcohols act as nucleophiles toward anhydrides, giving an **ester + carboxylic acid**.

##### Anhydride → carboxylic acids

![Figure 9.15 — Nucleophilic acyl substitution: anhydride + water → two carboxylic acids](${fig(2, 3).src})

Water reverts an anhydride to carboxylic acids. To be useful the anhydride should be **symmetric**; otherwise a **mixture of products** results.

#### Transesterification

![Figure 9.16 — Nucleophilic acyl substitution: transesterification swaps one esterifying group for another](${fig(2, 4).src})

In **transesterification**, an **alcohol** acts as the nucleophile and **displaces the esterifying group** of an ester → **one ester is converted into another**.

$$\\text{R–COOR'} + \\text{R''–OH} \\;\\underset{\\text{H}^+}{\\rightleftharpoons}\\; \\text{R–COOR''} + \\text{R'–OH}$$

- Example: **isopropyl butanoate + ethanol → ethyl butanoate + 2-propanol** (the ethyl group replaces the isopropyl group).

#### Hydrolysis of amides

![Figure 9.17 — Nucleophilic acyl substitution: amide hydrolysis to a carboxylic acid](${fig(2, 5).src})

Amides are **normally quite stable**; hydrolysis requires **strong acid or strong base**.

| Conditions | Mechanism | Product |
|---|---|---|
| **Strongly acidic** | **Protonates the carbonyl oxygen** → carbon more electrophilic → **water** attacks | **Carboxylic acid + ammonia** (reverse of amide formation) |
| **Strongly basic** | High $\\text{OH}^-$ concentration; **hydroxide** is the nucleophile (carbonyl O not protonated) | **Deprotonated carboxylate anion** |

:::keyconcept
**Strong acid OR strong base** is needed to hydrolyze an amide. Acid works by **protonating the carbonyl oxygen** (raising electrophilicity); base works by **supplying $\\text{OH}^-$** as a strong nucleophile.
:::

:::mnemonic
**Anhydride cleavage products — match the nucleophile's element:** **N**ucleophile = amine → a**N**ide (amide). **O–H** of alcohol → est**O**r (ester). **Water** → back to acids. In every case you always get **a carboxylic acid as the second product**.
:::

:::bridge
Amide hydrolysis is exactly how **proteases break peptide bonds** during digestion — the polypeptide backbone is a chain of amide (peptide) bonds. See *MCAT Biochemistry Review*, Ch. 1 (Amino Acids, Peptides, Proteins).
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Amides, Esters, and Anhydrides',
        points: [
          '**Amides** are the condensation products of carboxylic acids and **ammonia or amines**; suffix **–amide**, with N-alkyl groups written as **N–** prefixes. Cyclic amides = **lactams** (named by the Greek letter of the carbon bonded to N: β-lactam, γ-lactam…).',
          '**Esters** are the condensation products of carboxylic acids with **alcohols** (**Fischer esterification**); suffix **–oate**, esterifying group written as a substituent. Cyclic esters = **lactones**.',
          '**Triacylglycerols** (fat storage) contain three ester bonds between glycerol and fatty acids; **saponification** breaks fat with strong base to make **soap** (long-chain carboxylate salts) + glycerol.',
          '**Anhydrides** are the condensation **dimers** of carboxylic acids; symmetric ones named for the parent acid + **anhydride**, asymmetric ones list both acids alphabetically. Some **cyclic anhydrides** form by **heating diacids** (five-/six-membered rings are stable).'
        ]
      },
      {
        section: 'Reactivity Principles',
        points: [
          'In nucleophilic substitution, **anhydrides > esters > amides** in reactivity.',
          '**Steric hindrance** slows reactions when substituents crowd the reactive site; **protecting groups** (e.g., acetals) exploit this to reduce reactivity of part of a molecule.',
          '**Induction** = uneven charge across a σ bond from electronegativity differences; **more electron-withdrawing groups → greater reactivity**.',
          '**Conjugation/resonance** (alternating single & multiple bonds → delocalized π clouds) strongly stabilizes; conjugated carbonyls are **more reactive** because they stabilize the transition state.',
          '**Ring strain** raises reactivity: **β-lactams** hydrolyze readily because of **torsional + angle strain** (bond angles compressed below 109.5°) and a non-planar nitrogen that limits resonance.'
        ]
      },
      {
        section: 'Nucleophilic Acyl Substitution Reactions',
        points: [
          'All derivatives undergo **nucleophilic acyl substitution** at rates set by their relative reactivities.',
          '**Anhydride cleavage:** + ammonia/amine → **amide + carboxylic acid**; + alcohol → **ester + carboxylic acid**; + water → **two carboxylic acids**.',
          '**Transesterification** exchanges one esterifying group for another; the nucleophile is an **alcohol**.',
          '**Amides hydrolyze** to carboxylic acids only under **strongly acidic or basic** conditions; the nucleophile is **water** (acid) or **hydroxide** (base, giving the carboxylate anion).'
        ]
      }
    ],
    mnemonics: [
      '**Reactivity order — "Anhydrides Eat Carboxylic Acids, Murder Amides":** **A**nhydride > **E**ster ≈ **C**arboxylic **A**cid > a**M**ide. (Acyl halides sit on top as most reactive.)',
      '**Why that order:** more **electron-withdrawing groups → more reactive** (anhydride has the most); an **electron-donating amino group makes amides least reactive**.',
      '**Naming the nucleophile:** **a**mide ← **a**mmonia/**a**mine · est**er** ← alcoh**ol** (–o**ate**) · **a**nhydride ← **a**nother **a**cid.',
      '**Cyclic = "lact-":** **lactam** (cyclic amide), **lactone** (cyclic ester); both named by the **Greek letter** of the ring-closing carbon (β, γ, δ…).',
      '**β-lactam = Big strain:** four-membered ring → torsional + angle strain + non-planar N (no resonance) → fast hydrolysis. β-lactamases cut it; β-lactamase inhibitors protect it.',
      '**Anhydride cleavage always spits out a carboxylic acid** as the second product, no matter the nucleophile (amine→amide, alcohol→ester, water→2 acids).',
      '**Amide hydrolysis needs muscle:** only **strong acid** (protonate the C=O oxygen) **or strong base** (deliver OH⁻) breaks the stable amide bond.'
    ],
    keyConcepts: [
      '**One mechanism, many reactions:** nearly every reaction in this chapter is **nucleophilic acyl substitution** — Nu attacks the carbonyl carbon, a tetrahedral intermediate forms, and a leaving group departs.',
      '**Reactivity = electronics + sterics:** electron-withdrawing substituents and a good leaving group raise reactivity (anhydride high), while electron donation (amide N) and steric crowding lower it.',
      '**Make the less reactive from the more reactive:** to build an ester, start from something **more reactive than an ester** (anhydride or acid + alcohol) — an amide (less reactive) will not work.',
      '**Condensation forms them, hydrolysis breaks them:** derivatives are made by losing water and reversed by adding water; this is the same logic behind **saponification** of fats and **protease cleavage** of peptide bonds.'
    ],
    equations: [
      { name: 'Condensation (general)', tex: '\\text{R–COOH} + \\text{H–Nu} \\rightarrow \\text{R–CO–Nu} + \\text{H}_2\\text{O}', note: 'Forms amide, ester, or anhydride; loses water.' },
      { name: 'Fischer esterification', tex: '\\text{R–COOH} + \\text{R\'–OH} \\underset{\\text{H}^+}{\\rightleftharpoons} \\text{R–COOR\'} + \\text{H}_2\\text{O}', note: 'Acid-catalyzed, reversible; drive forward by removing water.' },
      { name: 'Anhydride synthesis', tex: '2\\,\\text{R–COOH} \\rightarrow \\text{R–CO–O–CO–R} + \\text{H}_2\\text{O}', note: 'Condensation dimer of two carboxylic acids.' },
      { name: 'Transesterification', tex: '\\text{R–COOR\'} + \\text{R\'\'–OH} \\underset{\\text{H}^+}{\\rightleftharpoons} \\text{R–COOR\'\'} + \\text{R\'–OH}', note: 'Alcohol swaps the esterifying group.' }
    ]
  },

  questions: raw.questions
};
