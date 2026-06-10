// Chapter 5 — Alcohols. Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch05.json (already-correct extraction);
// goals, recap/detail markdown, and the concept summary are authored here.
import raw from './ch05.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 5,
  title: 'Alcohols',
  subtitle: 'Description & properties (pKa, boiling point, H-bonding) · reactions of alcohols (oxidation, mesylates/tosylates, protection) · reactions of phenols (quinones, ubiquinone)',

  blocks: [
    /* ─────────────────── 5.1 Description and Properties ─────────────────── */
    {
      id: 's1', num: '5.1', title: 'Description and Properties',
      goals: [
        'Predict the relative pKa values of two given alcohols',
        'Order alcohols based on boiling point'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 5.1 — IUPAC names of alcohols: the alkane –e ending is replaced with –ol, and the hydroxyl-bearing carbon gets the lowest locant.' }],
      recap: `
- **Alcohols** = general formula **ROH**, functional group **–OH** (hydroxyl). IUPAC: drop alkane **–e**, add **–ol**; lowest-priority → prefix **hydroxy–**.
- **Phenols** = –OH on an **aromatic ring**; resonance makes their H **much more acidic** (lowest pKa).
- **Hydrogen bonding** raises **boiling/melting points** and **water solubility** vs. analogous hydrocarbons; **more –OH groups → more H-bonding → higher b.p.**
- **Acidity ↑** with **electron-withdrawing** groups/resonance; **acidity ↓** with **electron-donating** alkyl groups (more substituted = less acidic).
`,
      detail: `
#### What is an alcohol?
An **alcohol** has the general formula **ROH**, where the **hydroxyl group (–OH)** is the defining functional group.

:::expertise
Alcohols are a high-yield class on the MCAT. Expect them as **protic solvents**, **reactants**, **products**, and the prime example of **hydrogen bonding**.
:::

#### Nomenclature
- **IUPAC:** replace the **–e** ending of the parent alkane with **–ol** (e.g., ethane → ethan**ol**).
- If the alcohol is the **highest-priority** functional group, its carbon gets the **lowest possible locant**.
- **Common naming:** name the **alkyl group**, then the word **alcohol** (e.g., *isopropyl alcohol*).
- When the alcohol is **not** the highest-priority group, name it as a substituent with the prefix **hydroxy–**.
- **Diols** (two –OH groups) are named off the parent alkane with both positions indicated and the suffix **–diol** (e.g., **ethane-1,2-diol**).

##### Phenols and ring positions
A hydroxyl group attached to an **aromatic ring** gives a **phenol**.

![Phenols: aromatic alcohols](${fig(0, 4).src})

When a benzene ring carries **two substituents**, their relative positions are specified:

| Relationship | Carbons apart | Prefix |
|---|---|---|
| Adjacent carbons | 1,2 | **ortho–** (*o–*) |
| Separated by one carbon | 1,3 | **meta–** (*m–*) |
| Opposite sides of the ring | 1,4 | **para–** (*p–*) |

:::keyconcept
Aromatic alcohols are **phenols**. **Resonance** between the ring and the oxygen lone pairs delocalizes the negative charge of the conjugate base, making the phenol **–OH hydrogen more acidic** than that of other alcohols.
:::

#### Physical properties: hydrogen bonding
The hydroxyl group lets alcohols engage in **intermolecular hydrogen bonding**, giving them **significantly higher melting and boiling points** than analogous hydrocarbons.

![Intermolecular hydrogen bonding in alcohols](${fig(0, 5).src})

How a hydrogen bond forms:

1. The electronegative **oxygen** pulls electron density away from the bonded **hydrogen**.
2. This leaves a **partial positive (δ⁺)** charge on H and a **partial negative (δ⁻)** charge on O.
3. The δ⁺ hydrogen of one molecule **electrostatically attracts** the δ⁻ oxygen of another → a **hydrogen bond**.

- Hydrogen bonding requires **H bonded to N, O, or F** (the most electronegative atoms).
- **More hydroxyl groups → more hydrogen bonding → higher boiling point.** (A diol out-boils a comparable mono-ol.)
- Longer hydrocarbon chains add **van der Waals forces**, also raising boiling point.

![Boiling points for various alcohols](${fig(0, 6).src})

:::expertise
Hydrogen bonding increases **melting points, boiling points, and water solubility**. To rank boiling points: count **–OH groups first** (more H-bonding wins), then break ties by **chain length** (more van der Waals).
:::

#### Acidity of alcohols
The hydroxyl hydrogen is **weakly acidic**: alcohols dissociate into a **proton** and an **alkoxide ion**, just as water dissociates into a proton and hydroxide.

$$\\text{ROH} \\rightleftharpoons \\text{RO}^- + \\text{H}^+$$

| Compound | Dissociation | $pK_a$ |
|---|---|---|
| **PhOH** (phenol) | $\\text{PhO}^- + \\text{H}^+$ | **~10.0** (most acidic) |
| **CF₃CH₂OH** | $\\text{CF}_3\\text{CH}_2\\text{O}^- + \\text{H}^+$ | 12.5 |
| **H₂O** (water) | $\\text{HO}^- + \\text{H}^+$ | 14.0 |
| **CH₃OH** (methanol) | $\\text{CH}_3\\text{O}^- + \\text{H}^+$ | 15.5 |
| **C₂H₅OH** (ethanol) | $\\text{C}_2\\text{H}_5\\text{O}^- + \\text{H}^+$ | 15.9 |
| **i-PrOH** (isopropanol) | $\\text{i-PrO}^- + \\text{H}^+$ | 16.5 |
| **t-BuOH** (*tert*-butanol) | $\\text{t-BuO}^- + \\text{H}^+$ | 17.0 (least acidic) |

:::bridge
Recall that $pK_a = -\\log K_a$. **Strong acids** have **high $K_a$** and **low $pK_a$**. Phenol's small $pK_a$ (~10) makes it the **most acidic** alcohol in the table.
:::

##### Why the trends?
- **Phenols are most acidic:** the aromatic ring **resonance-stabilizes** the negative charge on oxygen, stabilizing the **phenoxide** anion. Phenols are acidic enough to form **salts with inorganic bases** like NaOH.
- **Electron-withdrawing groups (EWG)** (e.g., the F atoms in CF₃CH₂OH, or the aromatic ring) **stabilize** the alkoxide → **increase acidity**.
- **Electron-donating groups (EDG)** (alkyl groups) **destabilize** the negative charge → **decrease acidity**. So **more alkyl substitution = less acidic** (t-BuOH < i-PrOH < EtOH < MeOH in acidity).
- Ring substituents matter too: **EWG on a phenol increase** acidity; **EDG decrease** it.

:::keyconcept
**Charge likes to spread out.** Anything that **delocalizes/stabilizes** the negative charge of the conjugate base (resonance, electron-withdrawing groups) makes the alcohol **more acidic**. Electron-**donating** alkyl groups do the opposite. The same logic explains why **more-substituted carbocations are more stable** — alkyl groups stabilize *positive* charge.
:::

:::mnemonic
**"PEW! — Phenols & EWGs Win the acid contest."** **P**henol (resonance) and **E**lectron-**W**ithdrawing groups → more acidic. Pile on alkyl groups and acidity drops — *fat tert-butyl is the weakest acid here.*
:::
`
    },

    /* ───────────────────── 5.2 Reactions of Alcohols ────────────────────── */
    {
      id: 's2', num: '5.2', title: 'Reactions of Alcohols',
      goals: [
        'Predict the reaction of primary and secondary alcohols with strong oxidizing agents',
        'Recall the reagent(s) used to oxidize primary alcohols to aldehydes',
        'Explain the purpose of a mesylate or tosylate group',
        'Describe the process for protecting an aldehyde or ketone'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 5.6 — Oxidation of a primary alcohol to an aldehyde by pyridinium chlorochromate (PCC); the mild, anhydrous oxidant stops at the aldehyde.' }],
      recap: `
- **Oxidation depends on the alcohol class:** **1°** → aldehyde (PCC only) → carboxylic acid (strong oxidants); **2°** → ketone; **3°** → **no reaction**.
- **PCC** = mild, **anhydrous** → stops 1° alcohols at the **aldehyde**. Any **stronger** oxidant (chromic acid, $\\text{Cr}_2\\text{O}_7^{2-}$ salts, $\\text{CrO}_3$/**Jones**) drives 1° all the way to the **carboxylic acid**.
- **Mesylates (–OMs)** and **tosylates (–OTs)** turn the poor –OH leaving group into a **great leaving group** (and can act as **protecting groups**).
- **Acetals/ketals** protect **aldehydes/ketones** from reducing agents (LiAlH₄); **aqueous acid** reverses it (**deprotection**).
`,
      detail: `
The three MCAT-relevant alcohol reactions: **oxidation**, formation of **mesylates/tosylates**, and **protection of carbonyls**.

#### Oxidation reactions
The oxidation product is set by **how substituted** the carbinol carbon is and **how strong** the oxidant is.

| Alcohol class | Mild oxidant (**PCC**) | Strong oxidant ($\\text{CrO}_3$, $\\text{Cr}_2\\text{O}_7^{2-}$, chromic acid) |
|---|---|---|
| **Primary (1°)** | **Aldehyde** (stops here) | **Carboxylic acid** |
| **Secondary (2°)** | **Ketone** | **Ketone** |
| **Tertiary (3°)** | **No reaction** | **No reaction** |

##### Primary alcohols and the role of water
- **PCC (pyridinium chlorochromate)** is a **mild, anhydrous** oxidant. Because there is **no water**, the aldehyde is **not hydrated**, so oxidation **stops at the aldehyde**.
- With other (aqueous) oxidants, aldehydes are rapidly **hydrated to geminal diols (1,1-diols)**, which are easily oxidized onward to the **carboxylic acid**.

$$\\text{RCH}_2\\text{OH} \\xrightarrow{\\text{PCC}} \\text{RCHO} \\xrightarrow[\\text{(strong oxidant)}]{\\text{H}_2\\text{O}} \\text{RCOOH}$$

##### Secondary and tertiary alcohols
- **Secondary alcohols** → **ketones** with **PCC or any stronger oxidant**.
- **Tertiary alcohols cannot be oxidized** (without breaking a C–C bond): the carbinol carbon has **no H to remove**.

$$\\text{R}_2\\text{CHOH} \\xrightarrow{\\text{[O]}} \\text{R}_2\\text{C{=}O}$$

##### Strong chromium oxidants
- **Dichromate salts** — sodium and potassium dichromate ($\\text{Na}_2\\text{Cr}_2\\text{O}_7$, $\\text{K}_2\\text{Cr}_2\\text{O}_7$). $\\text{Cr(VI)}$ is reduced to $\\text{Cr(III)}$ as it oxidizes 1° → carboxylic acid and 2° → ketone.
- **Chromium trioxide ($\\text{CrO}_3$)** — even stronger. Dissolved in **dilute sulfuric acid + acetone**, this is the **Jones oxidation**: 1° → **carboxylic acid**, 2° → **ketone**. (Acidic, **aqueous** conditions are required.)

![Jones oxidation](${fig(1, 1).src})

:::keyconcept
Alcohols are oxidized **all the way to carboxylic acids** by essentially **any oxidizing agent except PCC** — and PCC will only take **primary** alcohols to the **aldehyde**.
:::

:::mnemonic
**Oxidation ladder — "1° climbs two rungs, 2° climbs one, 3° can't climb."**
**1°:** alcohol → aldehyde → carboxylic acid. **2°:** alcohol → ketone (dead end). **3°:** stuck (no H to lose).
**Reagent rule: "PCC = Please Cease at Carbonyl"** — PCC's missing water makes it stop a 1° alcohol at the aldehyde; every stronger chromium reagent goes the distance.
:::

#### Mesylates and tosylates
The –OH group is a **poor leaving group** for nucleophilic substitution. Converting it to a **mesylate** or **tosylate** makes a **much better leaving group**.

| Group | Functional group | Derived from | Made by reacting alcohol with |
|---|---|---|---|
| **Mesylate (–OMs)** | $-\\text{SO}_3\\text{CH}_3$ | methanesulfonic acid | **methylsulfonyl chloride** + base |
| **Tosylate (–OTs)** | $-\\text{SO}_3\\text{C}_6\\text{H}_4\\text{CH}_3$ | toluenesulfonic acid | **p-toluenesulfonyl chloride** |

![Structure of the mesylate anion](${fig(1, 2).src})

![Structure of a tosylate](${fig(1, 3).src})

- **Dual purpose:** besides being excellent **leaving groups** for substitution, mesyl/tosyl groups serve as **protecting groups**.
- They **do not react** with reagents that would otherwise attack an alcohol — **especially oxidizing agents** — so an alcohol can be "parked" as a mesylate/tosylate during a multistep synthesis, then restored.

#### Protecting groups (acetals & ketals)
Alcohols can themselves **protect** aldehydes and ketones.

- React an **aldehyde or ketone** with **two equivalents of alcohol** (or a single **diol/dialcohol**) to form an **acetal** or **ketal**:
  - **Acetal** — a **primary** carbon bearing **two –OR groups + one H**.
  - **Ketal** — a **secondary** carbon bearing **two –OR groups**.
- **Carbonyls** are very reactive toward strong reducing agents like **lithium aluminum hydride (LiAlH₄)**; **acetals and ketals do NOT react with LiAlH₄**.
- The acetal/ketal therefore **shields** the carbonyl while other functional groups are reduced.
- **Deprotection:** treat with **aqueous (catalytic) acid** to convert the acetal/ketal back to the carbonyl.

![Protection of a ketone by ketal formation using a dialcohol](${fig(1, 4).src})

$$\\text{R}_2\\text{C{=}O} + \\text{HO{-}R'{-}OH} \\;\\underset{\\text{aqueous acid (deprotect)}}{\\overset{\\text{H}^+}{\\rightleftharpoons}}\\; \\text{ketal}$$

:::mnemonic
**"AldehydAcetal, KetonKetal."** An **A**ldehyde (with its **A** spare H) makes an **A**cetal; a **K**etone makes a **K**etal. To **protect**, **add alcohol**; to **deprotect**, **add water (acid)** — protection is just a reversible acetal/ketal handshake.
:::
`
    },

    /* ───────────────────── 5.3 Reactions of Phenols ─────────────────────── */
    {
      id: 's3', num: '5.3', title: 'Reactions of Phenols',
      goals: [
        'Recall the process for production of quinones and hydroxyquinones',
        'Identify the properties of ubiquinone that allow it to function as an electron carrier'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 5.12 — Oxidation of p-benzenediol (a hydroquinone) to a quinone; phenols are oxidized to resonance-stabilized quinones.' }],
      recap: `
- Phenols react like alcohols, but their **–OH is far more acidic** (ring resonance stabilizes the anion).
- **Oxidation of phenols → quinones** (2,5-cyclohexadiene-1,4-diones): **resonance-stabilized electrophiles**, key **electron acceptors** in the ETC and photosynthesis.
- **Further oxidation of quinones → hydroxyquinones** (same diketone backbone + extra **–OH** groups).
- **Ubiquinone (Coenzyme Q)** carries electrons in **Complexes I, II, III**; its **conjugated rings** allow reversible reduction to **ubiquinol**, and its **long lipid tail** keeps it mobile in the membrane.
`,
      detail: `
Reactions of phenols mirror those of alcohols. The difference: the phenol **hydroxyl hydrogen is especially acidic** because the oxygen-bearing anion is **resonance-stabilized by the ring**.

#### Quinones and hydroxyquinones
Treating **phenols with oxidizing agents** produces **quinones** (**2,5-cyclohexadiene-1,4-diones**).

- Named by giving the **carbonyl positions** numerically + **quinone** appended to the parent phenol name.
- The conjugated ring system makes quinones **resonance-stabilized electrophiles**.
- **Not necessarily aromatic** — some quinones contain an aromatic ring, but quinones lack the classic fully-conjugated aromatic ring by definition.
- **Biological role:** quinones act as **electron acceptors** in the **electron transport chain** of both **aerobic respiration** and **photosynthesis**.

![Phylloquinone (Vitamin K1)](${fig(2, 2).src})

:::bridge
**Phylloquinone (Vitamin K1)** and the **menaquinones (Vitamin K2)** are biochemically important quinones. These **fat-soluble vitamins** drive the **carboxylation of clotting factors II, VII, IX, and X** (plus proteins C and S). See *MCAT Biochemistry Review*, Ch. 5.
:::

Quinones can be **oxidized further** to **hydroxyquinones** — same ring + carbonyl backbone, plus **one or more added hydroxyl groups**. Many are biologically active or used in drug synthesis.

![2-Hydroxy-1,4-benzoquinone, a hydroxyquinone](${fig(2, 3).src})

| Compound | Structure | How it's made |
|---|---|---|
| **Hydroquinone** | benzene ring + **two –OH** groups | (the *reduced* phenol precursor) |
| **Quinone** | ring + **two carbonyls** | **oxidation** of a phenol/hydroquinone |
| **Hydroxyquinone** | two carbonyls + **variable # of –OH** | **further oxidation** of a quinone |

:::expertise
Mind the terminology: a **hydro*quinone*** is a benzene ring with **two –OH groups**; a **hydroxy*quinone*** has **two carbonyls plus a variable number of –OH groups**. Converting a phenol → hydroxyquinone takes **two oxidation steps** (phenol → quinone → hydroxyquinone).
:::

- Because of **resonance**, hydroxyquinones behave like quinones bearing **electron-donating groups** → slightly **less electrophilic** (still reactive).
- **Naming:** number each hydroxyl position; use a prefix (**di–, tri–**) for multiple –OH groups with the substituent name **hydroxy–**.

![Three examples of hydroxyquinones](${fig(2, 4).src})

#### Ubiquinone (Coenzyme Q)
**Ubiquinone**, a.k.a. **coenzyme Q**, is a biologically active quinone and a vital **electron carrier** in the electron transport chain.

- Associated with **Complexes I, II, and III** of the ETC.
- **Ubiquinone** = most **oxidized** physiological form; accepting electrons **reduces** it to **ubiquinol**.

![Ubiquinone (Coenzyme Q) and ubiquinol](${fig(2, 5).src})

$$\\text{ubiquinone} + 2\\,\\text{e}^- + 2\\,\\text{H}^+ \\rightleftharpoons \\text{ubiquinol}$$

Two structural features let ubiquinone do its job:

1. **Conjugated rings** — provide reversible **oxidation–reduction** capacity (cycles between ubiquinone ⇌ ubiquinol).
2. **Long alkyl chain** — makes it **lipid soluble**, so it shuttles electrons **within the phospholipid bilayer**.

:::bridge
Coenzyme Q is central to the **Q cycle** in **Complex III**, contributing to the **proton-motive force** across the inner mitochondrial membrane. Other redox-active biomolecules — **NADH, FADH₂, NADPH** — behave similarly. See *MCAT Biochemistry Review*, Chs. 9–10.
:::

:::mnemonic
**"Q is ubiquitous and quenches electrons."** **Ubiquinone** (oxidized) gains 2 e⁻ → **ubiquinol** (reduced, the *–ol* = alcohol/reduced form). Its **fatty tail floats in the membrane**; its **conjugated ring catches and releases electrons.** Phenol → quinone → hydroxyquinone is just **oxidize, oxidize again.**
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Description and Properties',
        points: [
          'Alcohols have the general form **ROH** and take the suffix **–ol**; when not the highest-priority group they take the prefix **hydroxy–**.',
          '**Phenols** are benzene rings bearing –OH; ring positions are **ortho–** (adjacent), **meta–** (one carbon apart), or **para–** (opposite sides).',
          'Alcohols **hydrogen bond**, raising boiling/melting points and water solubility relative to analogous alkanes; **more –OH groups = more H-bonding = higher b.p.**',
          '**Phenols are more acidic** than other alcohols because the aromatic ring **delocalizes the conjugate-base charge**.',
          '**Electron-donating** alkyl groups **decrease** acidity (destabilize negative charge); **electron-withdrawing** groups and resonance **increase** acidity.'
        ]
      },
      {
        section: 'Reactions of Alcohols',
        points: [
          'Primary alcohols → **aldehyde** only with **PCC**; **any stronger oxidant** takes them to the **carboxylic acid**.',
          'Secondary alcohols → **ketone** with any common oxidant; **tertiary alcohols are not oxidized**.',
          'Alcohols can be converted to **mesylates** ($-\\text{SO}_3\\text{CH}_3$, from methanesulfonic acid) or **tosylates** ($-\\text{SO}_3\\text{C}_6\\text{H}_4\\text{CH}_3$, from toluenesulfonic acid) to become **better leaving groups** (and protecting groups).',
          'Aldehydes/ketones are protected as **acetals/ketals** by reaction with **two equivalents of alcohol or a diol**; they resist reduction (e.g., LiAlH₄).',
          '**Deprotection** back to the carbonyl uses **catalytic (aqueous) acid**.'
        ]
      },
      {
        section: 'Reactions of Phenols',
        points: [
          'Phenols are **oxidized to quinones**, which are **resonance-stabilized electrophiles**.',
          '**Vitamin K1 (phylloquinone)** and **Vitamin K2 (menaquinones)** are biochemically relevant quinones.',
          '**Hydroxyquinones** form by **further oxidation of quinones**, adding a variable number of hydroxyl groups (phenol → quinone → hydroxyquinone = two oxidations).',
          '**Ubiquinone (coenzyme Q)** is an electron acceptor in **Complexes I, II, and III** of the ETC; it is reduced to **ubiquinol**.',
          'Ubiquinone works because its **conjugated rings** allow reversible redox and its **long alkyl chain** confers lipid solubility within the membrane.'
        ]
      }
    ],
    mnemonics: [
      '**Oxidation ladder:** **1°** alcohol → aldehyde → carboxylic acid (climbs two rungs); **2°** → ketone (one rung); **3°** = stuck (no H to lose).',
      '**"PCC = Please Cease at Carbonyl":** anhydrous PCC stops a **primary** alcohol at the **aldehyde**; every stronger chromium reagent ($\\text{CrO}_3$/Jones, dichromate salts) goes all the way to the **carboxylic acid**.',
      '**"AldehydAcetal, KetonKetal":** aldehyde + 2 ROH → **acetal**; ketone + 2 ROH → **ketal**. **Add alcohol** to protect, **add aqueous acid** to deprotect.',
      '**"PEW! — Phenols & EWGs Win the acidity contest":** resonance (phenol) and electron-**withdrawing** groups raise acidity; electron-**donating** alkyl groups lower it (t-BuOH is the weakest acid).',
      '**Boiling-point ranking:** count **–OH groups first** (more H-bonding wins), then break ties by **chain length** (van der Waals). So 1,6-hexanediol > 1-hexanol > 1-pentanol.',
      '**Phenol → quinone → hydroxyquinone = "oxidize, oxidize again"** — two oxidation steps; the reverse (ubiquinone → ubiquinol) is a **reduction** (the *–ol* is the reduced form).'
    ],
    keyConcepts: [
      '**Oxidation product depends on substitution AND oxidant strength:** 1° gives an aldehyde only under mild, anhydrous PCC, but a carboxylic acid under any stronger (aqueous) oxidant; 2° always gives a ketone; 3° is inert.',
      '**Acidity tracks conjugate-base stability:** phenols (resonance) and electron-withdrawing groups stabilize the alkoxide/phenoxide → more acidic; electron-donating alkyl groups destabilize it → less acidic.',
      '**Hydrogen bonding governs physical properties:** it raises boiling point, melting point, and water solubility, and scales with the number of –OH groups.',
      '**Protecting groups are reversible disguises:** mesylates/tosylates shield (and activate) alcohols; acetals/ketals shield carbonyls from reducing agents, removable with aqueous acid.',
      '**Quinones are biological electron carriers:** ubiquinone (coenzyme Q) cycles between oxidized (quinone) and reduced (ubiquinol) forms in the ETC, enabled by its conjugated ring and lipid-soluble tail.'
    ],
    equations: [
      { name: 'Acid dissociation of an alcohol', tex: '\\text{ROH} \\rightleftharpoons \\text{RO}^- + \\text{H}^+', note: 'Alkoxide + proton; stabilizing the alkoxide (resonance/EWG) increases acidity (lower pKa).' },
      { name: 'pKa definition', tex: 'pK_a = -\\log K_a', note: 'Low pKa = high Ka = strong acid. Phenol pKa ≈ 10 (most acidic alcohol); t-BuOH ≈ 17 (least).' },
      { name: 'Primary alcohol oxidation', tex: '\\text{RCH}_2\\text{OH} \\xrightarrow{\\text{PCC}} \\text{RCHO} \\xrightarrow{\\text{strong [O]}} \\text{RCOOH}', note: 'PCC stops at the aldehyde; stronger oxidants (CrO₃/Jones, dichromate) give the carboxylic acid.' },
      { name: 'Ubiquinone ⇌ ubiquinol', tex: '\\text{ubiquinone} + 2\\,\\text{e}^- + 2\\,\\text{H}^+ \\rightleftharpoons \\text{ubiquinol}', note: 'Reversible 2-electron reduction lets coenzyme Q carry electrons in the ETC.' }
    ]
  },

  questions: raw.questions
};
