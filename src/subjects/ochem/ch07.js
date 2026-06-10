// Chapter 7 — Aldehydes and Ketones II: Enolates. Authored to the rich-formatting quality bar.
// Figures, questions are reused from ch07.json (already-correct extraction);
// the goals / recap / detail markdown and keyReview are authored here from the source.
import raw from './ch07.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 7,
  title: 'Aldehydes and Ketones II: Enolates',
  subtitle: 'General principles (α-hydrogen acidity) · enolate chemistry & keto–enol tautomerism · aldol condensation & retro-aldol',

  blocks: [
    /* ─────────────────────── 7.1 General Principles ─────────────────────── */
    {
      id: 's1', num: '7.1', title: 'General Principles',
      goals: [
        'Explain the acidic nature of α-hydrogens on aldehydes and ketones',
        'Compare the acidity of the α-hydrogens of aldehydes to those of ketones',
        'Describe the relationship between steric hindrance and reactivity'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 7.1 — Deprotonation of an α-carbon by base forms a resonance-stabilized carbanion (enolate).' }],
      recap: `
- The **α-carbon** is the carbon *adjacent* to the carbonyl; the hydrogens on it are **α-hydrogens** and are unusually **acidic**.
- Acidity comes from **two effects**: the carbonyl oxygen **withdraws electron density** by induction (weakening the C–H bond) **and** the conjugate base is **resonance-stabilized** as an **enolate**.
- **Aldehyde α-H > ketone α-H in acidity** — a ketone's extra **electron-donating alkyl group** destabilizes the carbanion → ketone has the **higher** $pK_a$.
- That same alkyl group makes **ketones less reactive** toward nucleophiles (steric hindrance + carbanion destabilization); **aldehydes are more reactive**.
`,
      detail: `
#### What is an α-carbon?
The **α-carbon** is the carbon **directly adjacent to the carbonyl carbon**, and any hydrogen bound to it is an **α-hydrogen**. Last chapter we cared about the partially positive carbonyl *carbon*; here we push the electron-withdrawing power of oxygen **one bond further** onto the α-carbon.

#### Why α-hydrogens are acidic
Two cooperating effects make α-hydrogens far more acidic than ordinary C–H bonds:

| Effect | What it does |
|---|---|
| **Induction** | The electronegative carbonyl **oxygen pulls electron density out of the C–H bonds** on the α-carbon, weakening them so they deprotonate easily. |
| **Resonance** | After deprotonation, the lone pair on the α-carbon **delocalizes across the α-carbon, the carbonyl carbon, and the carbonyl oxygen**, dumping negative charge onto the electronegative oxygen → a stabilized **enolate**. |

So a **strong base easily removes an α-hydrogen** of an aldehyde or ketone, generating a **carbanion** (a molecule with a negatively charged carbon) that is stabilized as the enolate (detailed in 7.2).

:::keyconcept
**Electron-withdrawing** groups like the carbonyl **oxygen stabilize** organic anions; **electron-donating** groups like **alkyl groups destabilize** organic anions. This single rule explains both the acidity ranking *and* the reactivity ranking in this chapter.
:::

#### Aldehyde vs. ketone acidity
The α-hydrogens of **ketones are slightly *less* acidic** than those of **aldehydes**. A ketone carries an **extra alkyl group**, which is **electron-donating** — the very property that stabilizes *carbocations* here **destabilizes the carbanion**.

| Compound | α-substituent | α-H acidity | $pK_a$ |
|---|---|---|---|
| **Aldehyde** (e.g., pentanal) | one H + one R | **Higher** (more acidic) | **Lower** |
| **Ketone** (e.g., 3-pentanone) | two R groups | Lower | Higher |

> *Concept Check:* **pentanal has the lower $pK_a$** (stronger acid) than 3-pentanone, because the second alkyl group of the ketone destabilizes the carbanion.

#### Steric hindrance and reactivity
In **nucleophilic addition**, **aldehydes are slightly more reactive than ketones**. Two reasons, both tracing back to the ketone's extra alkyl group:

- **Sterics** — when a nucleophile approaches, the ketone's two **alkyl groups get in the way** (vs. the aldehyde's single small H), creating a **higher-energy, more crowded transition state**.
- **Electronics** — the alkyl group **donates electron density**, destabilizing the developing carbanion/alkoxide intermediate.

Higher-energy intermediates mean the reaction is **less likely to proceed**.

:::keyconcept
**Ketones are slightly less reactive toward nucleophiles than aldehydes** because the extra alkyl group both **destabilizes the carbanion** and **increases steric hindrance**.
:::

:::mnemonic
**"Aldehydes are Ahead."** With only one little **H** on the carbonyl, aldehydes are both **more acidic** at the α-carbon *and* **more reactive** toward nucleophiles. Ketones, dragging two bulky electron-pushing alkyl groups, lose on both counts.
:::
`
    },

    /* ─────────────────────── 7.2 Enolate Chemistry ─────────────────────── */
    {
      id: 's2', num: '7.2', title: 'Enolate Chemistry',
      goals: [
        'Define tautomerization',
        'Predict the role of an enolate carbanion in a reaction',
        'Describe the conditions that favor keto and enol forms',
        'Identify the thermodynamically favored tautomer of an aldehyde or ketone'
      ],
      images: [{ src: fig(1, 1).src, alt: fig(1, 1).alt, caption: 'Figure 7.2 — Enolization (tautomerization): the keto form (left) interconverts with the less-stable enol form (right).' }],
      recap: `
- **Tautomers** = isomers that interconvert by **moving a proton and a double bond** — they differ in **connectivity**, so they are **NOT resonance structures**.
- Carbonyls exist as a **keto ⇌ enol** mixture; equilibrium lies **far toward keto** (more thermodynamically stable). **Enol = ene + ol** (C=C + OH).
- Deprotonating the α-carbon gives the **enolate**, a strong **nucleophile** (more nucleophilic than the neutral enol because it is negatively charged).
- **Michael addition**: an enolate attacks an **α,β-unsaturated carbonyl**, forming a C–C bond.
- **Kinetic enolate** = less-substituted C=C, fast, low T, strong bulky base; **thermodynamic enolate** = more-substituted C=C, high T, weak small base, reversible.
- **Enamines** are the less-common tautomer of **imines** (C=N).
`,
      detail: `
#### Keto–enol tautomerization
Because the α-hydrogen is acidic, aldehydes and ketones exist in solution as a **mixture of two isomers**:

- **Keto form** — the familiar **C=O** structure.
- **Enol form** — named for a **carbon–carbon double bond** (*en–*) bearing an **alcohol** (*–ol*); the proton has shifted from the α-carbon onto the oxygen.

These two isomers, differing only in the **placement of a proton and a double bond**, are **tautomers**. Their interconversion is called **enolization** (more generally, **tautomerization**).

![Figure 7.2 — keto–enol tautomerization](${fig(1, 1).src})

- The equilibrium lies **far to the keto side** — keto is much more **thermodynamically stable** (oxygen, being more electronegative than carbon, prefers the keto form's higher electron density on O).
- Any aldehyde/ketone with a **chiral α-carbon** rapidly becomes a **racemic mixture** as the forms interconvert — **α-racemization**.

:::keyconcept
Aldehydes and ketones exist in the traditional **keto form (C=O)** and the less common **enol tautomer** (**enol = ene + ol**). The deprotonated **enolate** can act as a **nucleophile**. Tautomers are **not** resonance structures — they have **different connectivity of atoms** (a real bond is broken/made), whereas resonance structures differ only in electron position.
:::

:::mnemonic
**"Keto Keeps the crown."** The **k**eto form is the **k**ing — thermodynamically favored, so most molecules sit there at equilibrium. The **enol** is the rare, reactive guest. (And **enol = ene + ol** = double bond + alcohol.)
:::

#### The enolate as a nucleophile
Deprotonating the α-carbon with a **strong base** gives the **enolate carbanion**. Common strong bases:

- **Hydroxide ion** ($\\text{OH}^-$)
- **Lithium diisopropylamide (LDA)** — bulky, very strong
- **Potassium hydride (KH)**

A **1,3-dicarbonyl** is **especially acidic**: the carbanion is flanked by **two carbonyls** that *both* delocalize the negative charge, so 1,3-dicarbonyls are frequently used to generate enolates. Once formed, the **nucleophilic carbanion reacts readily with electrophiles**.

#### Michael addition
A **Michael addition** is one such enolate reaction: the carbanion attacks an **α,β-unsaturated carbonyl** — a compound with a C=C **between the α- and β-carbons next to a carbonyl**.

![Figure 7.3 — Michael addition](${fig(1, 2).src})

1. **Base deprotonates** the α-carbon, generating the nucleophilic enolate.
2. The carbanion **attacks the C=C** of the α,β-unsaturated carbonyl, forming a new C–C bond.

The reaction works because the **intermediates are resonance-stabilized**.

:::bridge
Recognizing the **resonance forms** of a molecule lets you predict *exactly where* it will react — the enolate's negative charge sits where the resonance structures put it. Resonance and reaction-site prediction are developed in *Analyzing Organic Reactions* (Organic Chemistry Ch. 4).
:::

#### Kinetic vs. thermodynamic enolates
When a ketone has **two different α-carbons** (each with α-hydrogens), the C=C of the enolate can form toward the **more** or **less** substituted carbon, giving two possible enolates.

![Figure 7.4 — kinetic vs. thermodynamic enolates](${fig(1, 3).src})

| | **Kinetic enolate** | **Thermodynamic enolate** |
|---|---|---|
| C=C is to the… | **less** substituted α-carbon | **more** substituted α-carbon |
| Forms… | **faster** | **slower** |
| Stability | **less** stable | **more** stable |
| Why | less steric hindrance to remove that α-H | more substituted alkene is more stable |
| Favored by | **low temperature**; **fast, irreversible** reaction; **strong, sterically hindered base** | **high temperature**; **slow, reversible** reaction; **weak, small base** |

If the reaction is **reversible**, a kinetic enolate can **revert** to the starting ketone and re-form as the more stable **thermodynamic** product.

:::mnemonic
**Kinetic = "Quick & Less" ; Thermo = "Slow & More."** The **K**inetic enolate forms **K**winck (fast), at **K**old (low T), with a big bulky base, and points to the **less** crowded carbon. The **thermo**dynamic one takes its time (high T, reversible, small base) and lands on the **more** substituted, more stable alkene.
:::

#### Enamines
Just as **enols are tautomers of carbonyls**, **enamines are tautomers of imines**. An **imine** contains a **C=N** bond (the N may or may not carry an alkyl substituent). Moving a hydrogen and the double bond (tautomerization) converts an **imine ⇌ enamine**.

![Figure 7.5 — imine ⇌ enamine tautomerization](${fig(1, 4).src})

- The **imine** form is **thermodynamically favored** over the enamine (parallel to keto over enol).
- Among nitrogen functional groups (cyanohydrin, hydrazone, semicarbazone, enamine), only the **enamine** is a tautomer of the imine.

> *Concept Check:* the enolate carbanion always plays the role of **nucleophile** — not electrophile, oxidizing, or reducing agent.
`
    },

    /* ─────────────────────── 7.3 Aldol Condensation ─────────────────────── */
    {
      id: 's3', num: '7.3', title: 'Aldol Condensation',
      goals: [
        'Identify the species that act as nucleophiles and electrophiles in aldol condensations',
        'Describe the conditions, reactants, and products involved in a retro-aldol reaction',
        'List the reaction types associated with aldol condensation'
      ],
      images: [{ src: fig(2, 0).src, alt: fig(2, 0).alt, caption: 'Figure 7.6 — Aldol condensation, Step 1: an enolate attacks a second carbonyl, forming the aldol (a β-hydroxy carbonyl).' }],
      recap: `
- In the **aldol reaction** a single aldehyde/ketone plays **both roles**: its **enolate** is the **nucleophile** and its **keto form** is the **electrophile** → a new **C–C bond**.
- **Step 1 (addition)** → the **aldol**, a molecule with **both aldehyde and alcohol** groups (a **β-hydroxy carbonyl**). E.g. two acetaldehydes → **3-hydroxybutanal**.
- **Step 2 (dehydration, strong base + heat)** → loses **water** (E1/E2) → **α,β-unsaturated carbonyl**. Addition + dehydration = **aldol condensation**.
- It is simultaneously a **nucleophilic addition**, a **condensation**, *and* a **dehydration** reaction.
- **Retro-aldol** (aqueous **base + heat**) reverses it, **cleaving the Cα–Cβ bond** into two carbonyl fragments.
- Use **one** carbonyl type, or pair an enolizable partner with one that has **no α-H** (e.g., **benzaldehyde**), to avoid product mixtures.
`,
      detail: `
#### The aldol reaction
The **aldol condensation** is a high-yield MCAT reaction. It is the **same nucleophilic addition to a carbonyl** seen before — except the carbonyl compound acts as **both** the **nucleophile (enolate form)** and the **electrophile (keto form)**, and the result is a new **carbon–carbon bond**.

:::keyconcept
In aldol condensations it's the **same nucleophilic addition** you already know — just with the carbonyl-containing compound serving as **both** the **nucleophile** *and* the **electrophile**.
:::

##### Step 1 — forming the aldol (addition)
Treating **acetaldehyde (ethanal)** with a **catalytic base** generates an **enolate ion**. The enolate is **more nucleophilic than the neutral enol** because it is **negatively charged**.

![Figure 7.6 — aldol step 1: enolate attacks a carbonyl](${fig(2, 0).src})

- The nucleophilic enolate attacks the **electrophilic carbonyl carbon** of *another* acetaldehyde (both partners are in the **same flask**).
- Product = **3-hydroxybutanal**, an **aldol** — a molecule containing **both an aldehyde and an alcohol** group (a **β-hydroxy carbonyl**).
- The mechanism is still called an **aldol reaction** even when the reactants are **ketones**.

> Stopping *here* (quench the strong base with acid before dehydration) isolates the aldol itself — e.g., **two ethanals in base, then acid → 3-hydroxybutanal**.

##### Step 2 — dehydration (condensation)
With a **strong base and high temperature**, the aldol **dehydrates** by an **E1 or E2** mechanism: a **water molecule is kicked off** and a **double bond** forms, producing an **α,β-unsaturated carbonyl**.

![Figure 7.7 — aldol step 2: dehydration to an α,β-unsaturated carbonyl](${fig(2, 1).src})

#### Reaction summary table

| Stage | Conditions | Nucleophile | Electrophile | Product |
|---|---|---|---|---|
| **Aldol (addition)** | catalytic base | **enolate** (deprotonated α-C) | **keto** carbonyl carbon | **aldol** = β-hydroxy aldehyde/ketone |
| **Condensation (dehydration)** | **strong base + heat** (E1/E2) | — | — | **α,β-unsaturated carbonyl** + $\\text{H}_2\\text{O}$ |
| **Retro-aldol** | aqueous **base + heat** | — | — | **two carbonyl fragments** (Cα–Cβ bond cleaved) |

#### Why it has so many names
The aldol condensation can be classified under several reaction types at once:

- **Condensation** — two molecules **join with loss of a small molecule**.
- **Dehydration** — the small molecule lost is specifically **water**.
- **Nucleophilic addition** — the nucleophilic enolate **adds to** the carbonyl carbon.

> *Concept Check:* the aldol condensation is **dehydration + nucleophilic addition** (it is *not* a cleavage — that's the retro-aldol). Its final product is an **α,β-unsaturated carbonyl**.

#### Controlling the product (crossed aldols)
Aldol reactions are cleanest with **one** type of aldehyde or ketone. With **multiple** carbonyls you can't control which is the nucleophile vs. electrophile → a **mixture of products**. The fix: pair an enolizable carbonyl with one that has **no α-hydrogens** (its α-carbon is effectively blocked), such as **benzaldehyde**.

:::realworld
When **benzaldehyde reacts with acetone**, benzaldehyde **has no α-proton** and **cannot** form an enolate — so **acetone** (after reaction with a **strong base**) is necessarily the **nucleophile**, and benzaldehyde is the electrophile. This is how chemists force a single, predictable crossed-aldol product.
:::

#### The retro-aldol reaction
The **reverse** of the aldol is the **retro-aldol reaction**. Adding **aqueous base** and applying **heat** pushes the equilibrium backward.

![Figure 7.8 — retro-aldol: cleaving the Cα–Cβ bond](${fig(2, 2).src})

- It **breaks the bond between the α- and β-carbons** of a carbonyl.
- It is favored when the intermediate can be **stabilized as an enolate** (same as the forward direction).

:::keyconcept
In a **retro-aldol** reaction, the **Cα–Cβ bond is cleaved**, forming **two aldehydes, two ketones, or one of each**. Conditions: **base + heat**. (Biochemical example: aldolase cleaves **fructose-1,6-bisphosphate** into DHAP + glyceraldehyde-3-phosphate — a retro-aldol.)
:::

:::mnemonic
**"ALDOL = ALDehyde + alcohOL."** The product literally contains an **ald**ehyde and an alcoh**ol** — a β-hydroxy carbonyl. Add **heat + strong base** and it **condenses** (loses water) to the α,β-unsaturated carbonyl; reverse it with **base + heat in water** and you **retro** all the way back, snapping the **α–β bond**.
:::

:::bridge
The **kinetic vs. thermodynamic** logic governing which enolate forms is an application of **chemical kinetics** (General Chemistry Ch. 5) — fast/low-T pathways trap the less-stable product; slow/high-T/reversible pathways reach the thermodynamic minimum.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'General Principles',
        points: [
          'The carbon adjacent to a carbonyl is the **α-carbon**; its hydrogens are **α-hydrogens** and are relatively **acidic**.',
          'Acidity has two sources: the carbonyl oxygen **withdraws electron density** (induction), weakening the α C–H bonds, and the resulting carbanion is **resonance-stabilized** with the carbonyl as an **enolate**.',
          '**Ketones are less acidic and less reactive** toward nucleophiles than aldehydes — the extra alkyl group adds **steric hindrance** and **donates electron density**, destabilizing the carbanion (higher $pK_a$).'
        ]
      },
      {
        section: 'Enolate Chemistry',
        points: [
          '**Tautomers** interconvert by moving a **hydrogen and a double bond**; the **keto** and **enol** forms are tautomers (enol = **ene + ol**), with keto strongly favored.',
          'The enol can be deprotonated to the **enolate**, a **good nucleophile**; in a **Michael addition** the enolate attacks an **α,β-unsaturated carbonyl**.',
          'The **kinetic enolate** (less-substituted C=C) is favored by **fast, irreversible, low-T** reactions with **strong, bulky bases**; the **thermodynamic enolate** (more-substituted C=C) by **slow, reversible, high-T** reactions with **weak, small bases**.',
          '**Enamines** are tautomers of **imines** (C=N), and like enols are the less common tautomer.'
        ]
      },
      {
        section: 'Aldol Condensation',
        points: [
          'In the aldol condensation the carbonyl compound is **both nucleophile and electrophile**, forming a new **C–C bond**; the **nucleophile is the enolate** and the **electrophile is the keto tautomer**.',
          'An **aldol** contains **both aldehyde and alcohol** groups; first a **condensation/addition** joins the molecules, then **dehydration** (loss of $\\text{H}_2\\text{O}$) gives an **α,β-unsaturated carbonyl**.',
          '**Retro-aldol** reactions are the reverse, **catalyzed by heat and base**, cleaving the bond between an **α- and β-carbon**.'
        ]
      }
    ],
    mnemonics: [
      '**"Aldehydes are Ahead":** with one small H, aldehydes are **more acidic** at the α-carbon AND **more reactive** to nucleophiles than ketones (whose two alkyl groups push electrons in and crowd the carbonyl).',
      '**Electron rule:** electron-**withdrawing** groups (carbonyl O) **stabilize** anions; electron-**donating** groups (alkyl) **destabilize** anions — this one rule explains both acidity and reactivity.',
      '**"Keto Keeps the crown":** the keto tautomer is thermodynamically favored, so equilibrium sits far on the keto side; the enol (**ene + ol**) is the rare, reactive form.',
      '**Kinetic = "Quick, Kold, Less"; Thermo = "Slow, Hot, More":** kinetic enolate = fast/low-T/bulky base → less-substituted alkene; thermodynamic = slow/high-T/small base/reversible → more-substituted alkene.',
      '**"ALDOL = ALDehyde + alcohOL":** the aldol product is a β-hydroxy carbonyl. Heat + strong base → condensation (lose water) → α,β-unsaturated carbonyl.',
      '**Tautomers ≠ resonance:** tautomers move a real **atom (H) and a bond** (different connectivity); resonance moves only **electrons**. Don\'t confuse them on Test Day.',
      '**Crossed-aldol control:** pick a partner with **no α-H** (e.g., **benzaldehyde**) so only one species can be the enolate nucleophile.'
    ],
    keyConcepts: [
      '**α-Hydrogen acidity is induction + resonance.** Both effects route negative charge onto the electronegative carbonyl oxygen, so a strong base (OH⁻, LDA, KH) readily makes the enolate. **1,3-dicarbonyls** are the most acidic (two carbonyls share the charge).',
      '**The enolate is the workhorse nucleophile** of this chapter — it drives the Michael addition and the aldol condensation. It is more nucleophilic than the neutral enol because it carries a full negative charge.',
      '**Addition vs. condensation:** stopping after Step 1 (quench with acid) gives the **aldol** (β-hydroxy carbonyl); adding **heat + strong base** dehydrates it to the **α,β-unsaturated carbonyl** — the full aldol *condensation*.',
      '**Retro-aldol cleaves Cα–Cβ** under base + heat, splitting one molecule into two carbonyls — recognizing "one big molecule → two carbonyl fragments" is enough to name it (e.g., aldolase on fructose-1,6-bisphosphate).'
    ],
    equations: []
  },

  questions: raw.questions
};
