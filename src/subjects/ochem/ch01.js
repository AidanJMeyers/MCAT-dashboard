// Organic Chemistry Chapter 1 — Nomenclature. Re-authored to the rich-formatting quality bar.
// Figures, goals, and questions are grounded in ch01.json + scratch_ochem/ch01.md;
// the recap/detail markdown is authored here.
import raw from './ch01.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 1,
  title: 'Nomenclature',
  subtitle: 'IUPAC naming conventions · hydrocarbons & alcohols · aldehydes & ketones · carboxylic acids & derivatives · summary of functional groups',

  blocks: [
    /* ─────────────────── 1.1 IUPAC Naming Conventions ─────────────────── */
    {
      id: 's1', num: '1.1', title: 'IUPAC Naming Conventions',
      goals: [
        'Identify the parent carbon chain in a complex molecule',
        'Describe how numbers are integrated into chemical nomenclature',
        'Apply the five steps of IUPAC nomenclature and name a molecule'
      ],
      images: [{ src: fig(0, 3).src, alt: fig(0, 3).alt, caption: 'Figure 1.1 — Finding the longest carbon chain: the parent chain is the longest continuous chain containing the highest-priority functional group.' }],
      recap: `
- **IUPAC** gives every compound **one unambiguous name** — no two distinct compounds share a name.
- **Five steps:** (1) find the **longest chain** with the highest-order group, (2) **number** it, (3) **name** substituents, (4) **assign numbers** to substituents, (5) **complete** the name (alphabetical).
- The **highest-priority** (most oxidized) functional group sets the **suffix**; everything else becomes a **prefix** substituent.
- Number so the **highest-priority group gets the lowest locant**; ties → lowest set of numbers overall.
- More **bonds to heteroatoms** (O, N, halogens) = more oxidized = higher priority. Ties between double/triple bonds go to the **double bond**.
`,
      detail: `
#### Why nomenclature matters
The **International Union of Pure and Applied Chemistry (IUPAC)** system exists to create an **unambiguous one-to-one relationship between name and structure** — no two distinct compounds get the same name. On Test Day, if you can't translate the name in the stem into a structure, you can't answer the question.

:::expertise
Nomenclature is often tested by giving the stem and answer choices in **different formats** — e.g., the stem names the reactant (IUPAC), and the choices show **product structures**. You must reconstruct both the reactant structure *and* the reaction.
:::

#### The five steps of IUPAC nomenclature

| Step | Action | Key rule |
|---|---|---|
| **1** | **Identify the longest carbon chain** containing the highest-order functional group | This is the **parent chain** → sets the **root**. Ties in length → the **more substituted** chain wins. |
| **2** | **Number the chain** | C-1 is closest to the **highest-priority** group → it gets the **lowest locant**. If groups tie, make all substituent numbers **as low as possible**. |
| **3** | **Name the substituents** | Anything not in the parent chain becomes a **prefix**. Alkyl substituents use **–yl** (replacing **–ane**). |
| **4** | **Assign a number to each substituent** | Pair each substituent with its carbon. Repeats get **di–/tri–/tetra–** *and* a locant for each — even on the same carbon. |
| **5** | **Complete the name** | Substituents listed **alphabetically**, each with its number; numbers separated by **commas**, separated from words by **hyphens**; finish with the **parent + suffix**. |

:::mnemonic
**Five steps:** "**L**ong **N**umber **N**ame **A**ssign **C**omplete" → **L**ongest chain · **N**umber it · **N**ame substituents · **A**ssign numbers · **C**omplete the name. *("Long Numbers Name All Compounds.")*
:::

##### Step 1 — finding the parent chain
The parent chain is the **longest continuous carbon chain that contains the highest-priority functional group**. Two traps:
- The molecule may be **drawn** so the longest chain isn't obvious (it can bend around corners).
- If two chains are **equal length**, choose the **more substituted** one.

##### Step 2 — numbering the chain

![Figure 1.2 — numbering the longest carbon chain](${fig(0, 4).src})

- C-1 is the end **closest to the highest-priority functional group**, so that group gets the **lowest possible locant**.
- If all groups are the **same priority**, number to make the set of substituent locants **as low as possible**.
- **Rings** are numbered starting at the **point of greatest substitution**, continuing in the direction giving the lowest locants to the highest-priority groups.
- **Tie-breaker:** if a double bond and a triple bond would get the same number, the **double bond takes precedence** (gets the lower number).

:::keyconcept
**Oxidation state drives priority.** A carbon's oxidation state **rises** with more bonds to **heteroatoms** (O, N, P, halogens) and **falls** with more bonds to **hydrogen**. The more oxidized carbon → the higher-priority group → the suffix.
:::

##### Steps 3–4 — naming and numbering substituents
- Carbon-chain substituents are named like alkanes with **–yl** replacing **–ane** (e.g., **methyl, ethyl, propyl**).
- The prefix **n–** ("normal") just means a **straight-chain** substituent (e.g., *n*-propyl). Assume normal unless told otherwise.
- Repeated identical substituents get **di–, tri–, tetra–** placed directly before the substituent name — and **every copy still gets its own locant**, even two on the same carbon.

![Figure 1.4 — common alternative alkyl substituents (iso-, sec-, tert-, neo-)](${fig(0, 5).src})

##### Step 5 — completing the name
- List substituents in **alphabetical order**, each preceded by its locant.
- **Ignored** when alphabetizing: multiplying prefixes (**di–, tri–, tetra–**) and **hyphenated** prefixes (**n–, tert–/t–**).
- **Included** when alphabetizing: nonhyphenated roots that are part of the name (**iso–, neo–, cyclo–**).
- Numbers are separated from each other by **commas** and from words by **hyphens**; end with the **parent name + suffix** of the highest-priority group.

![Figure 1.5 — an example of a complete IUPAC name](${fig(0, 6).src})

:::expertise
A worked example: a fully alkyl seven-carbon chain with an ethyl on one carbon and two methyls becomes **4-ethyl-2,3-dimethylheptane** — note **di–** is ignored when alphabetizing (so "ethyl" comes before "dimethyl").
:::
`
    },

    /* ─────────────────── 1.2 Hydrocarbons and Alcohols ─────────────────── */
    {
      id: 's2', num: '1.2', title: 'Hydrocarbons and Alcohols',
      goals: [
        'Predict the structure of a hydrocarbon or alcohol when given a simple molecular formula (e.g., C₉H₂₀)',
        'Differentiate between geminal and vicinal diols',
        'Recall common names of key compounds (e.g., 2-propanol)',
        'Apply priority rules when naming molecules with multiple functional groups'
      ],
      images: [{ src: fig(1, 8).src, alt: fig(1, 8).alt, caption: 'Figure 1.6 — Naming alcohols: replace the –e of the parent alkane with –ol and give the hydroxyl carbon the lowest locant.' }],
      recap: `
- **Hydrocarbons** = C and H only. **Alkanes** are saturated: $\\text{C}_n\\text{H}_{2n+2}$.
- **Memorize the chain roots:** meth(1) · eth(2) · prop(3) · but(4) · pent(5) · hex(6) · hept(7) · oct(8) · non(9) · dec(10).
- **Alkenes (–ene)** = double bonds; **alkynes (–yne)** = triple bonds; number by the **lower-numbered** carbon of the bond.
- **Alcohols (–ol)** carry **–OH**; they **outrank** double/triple bonds (more oxidized), so the **–OH carbon gets the lowest locant**.
- **Diols:** **geminal** = both –OH on the **same** carbon; **vicinal** = on **adjacent** carbons.
`,
      detail: `
#### Alkanes — the backbone roots
**Hydrocarbons** contain only carbon and hydrogen. **Alkanes** are the saturated hydrocarbons (no double/triple bonds) with the general formula:

$$\\text{C}_n\\text{H}_{2n+2}$$

The first four have classic names; from five carbons on, the name is the **Greek root for the carbon count + –ane**.

| # C | Name | # C | Name |
|---|---|---|---|
| 1 | **meth**ane | 7 | **hept**ane |
| 2 | **eth**ane | 8 | **oct**ane |
| 3 | **prop**ane | 9 | **non**ane |
| 4 | **but**ane | 10 | **dec**ane |
| 5 | **pent**ane | 11 | **undec**ane |
| 6 | **hex**ane | 12 | **dodec**ane |

:::mnemonic
**Chain roots 1–10:** "**M**y **E**xtremely **P**recise **B**rother **P**refers **H**onest **H**ealthy **O**rganized **N**ew **D**iet" → **Meth · Eth · Prop · But · Pent · Hex · Hept · Oct · Non · Dec.** (Or the classic: "**Monkeys Eat Peanut Butter, Person Have Heaping Of New Dimes.**")
:::

**Halogens** are common substituents and are named as prefixes: **fluoro–, chloro–, bromo–, iodo–** (alkyl halides).

#### Alkenes and alkynes
The MCAT doesn't test alkene/alkyne *reactions*, but you must recognize the suffixes:

| Bond | Suffix | Numbering |
|---|---|---|
| **Double bond** | **–ene** | by the **lower-numbered** carbon of the bond |
| **Triple bond** | **–yne** | by the **lower-numbered** carbon of the bond |

- The locant may **precede** the name (**2-butene**) or sit **next to the suffix** (**but-2-ene**) — both are correct.
- Multiple bonds separate the number from the suffix: **1,3-butadiene**.
- You'll most often meet double bonds in **unsaturated fatty acids** and other biochemistry.

#### Alcohols
**Alcohols** contain a **hydroxyl (–OH)** group. They are named by replacing the **–e** of the parent alkane with **–ol**.

- Number so the **–OH carbon gets the lowest locant** — *even if a multiple bond is present*.
- **Alcohols outrank double/triple bonds** because the hydroxyl carbon is **more oxidized**.
- If the alcohol is **not** the highest-priority group, name it as a **hydroxy–** prefix substituent.

:::keyconcept
Alcohols have **higher priority** than alkenes, alkynes, and alkanes. When an –OH competes with a double bond for the low number, the **–OH wins** (higher oxidation state).
:::

##### Common names of alcohols
The common form is **alkyl group + "alcohol."**

| IUPAC name | Common name |
|---|---|
| Ethanol | **ethyl alcohol** |
| 2-Propanol | **isopropyl alcohol** |

:::expertise
The MCAT freely uses common names. For alcohols, **know ethyl alcohol (ethanol) and isopropyl alcohol (2-propanol)** cold.
:::

##### Diols (glycols)
Alcohols with **two hydroxyl groups** are **diols** (or **glycols**), suffix **–diol**. The full hydrocarbon name is kept and each –OH gets a number, e.g., **ethane-1,2-diol** (common name **ethylene glycol**).

| Diol type | –OH placement | Note |
|---|---|---|
| **Geminal diol** (hydrate) | both –OH on the **same** carbon | Rarely seen — spontaneously **dehydrates** to a carbonyl ($\\text{C=O}$) |
| **Vicinal diol** | –OH on **adjacent** carbons | Stable; common |

:::mnemonic
**Vicinal** diols are in the **vicinity** of each other (neighboring carbons). **Geminal** diols — like the **Gemini twins** — are paired on the **same** carbon.
:::
`
    },

    /* ───────────────────── 1.3 Aldehydes and Ketones ───────────────────── */
    {
      id: 's3', num: '1.3', title: 'Aldehydes and Ketones',
      goals: [
        'Distinguish aldehydes from ketones',
        'Recall common names for methanal, ethanal, propanal, and propanone',
        'Determine the highest-priority functional group in a complex molecule',
        'Apply appropriate prefixes and suffixes when naming aldehyde- and ketone-containing molecules'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 1.7 — Naming aldehydes: replace –e with –al; the terminal carbonyl is carbon 1 and usually needs no number.' }],
      recap: `
- Both contain a **carbonyl** ($\\text{C=O}$). **Aldehydes** are **terminal** (chain end + an H); **ketones** are **internal** (carbonyl flanked by two carbons).
- Suffixes: **aldehyde = –al**, **ketone = –one**. As a substituent, both use **oxo–** (ketones may also use **keto–**).
- Aldehyde C is **C-1** → usually no locant; ketones **always** get a locant (except propanone).
- Common names to memorize: **formaldehyde** (methanal), **acetaldehyde** (ethanal), **propionaldehyde** (propanal), **acetone** (propanone).
- The carbon next to the carbonyl is the **α-carbon**; then **β, γ, δ** moving outward (both sides).
`,
      detail: `
#### The carbonyl group
Both **aldehydes** and **ketones** contain a **carbonyl group** — a carbon **double-bonded to oxygen** ($\\text{C=O}$). The difference is **position**:

| Feature | **Aldehyde** | **Ketone** |
|---|---|---|
| Carbonyl position | **Terminal** (end of chain) | **Internal** (middle of chain) |
| Carbonyl carbon bonded to | ≥ 1 **hydrogen** + alkyl | **two carbons** |
| Suffix | **–al** | **–one** |
| Substituent prefix | **oxo–** | **oxo–** or **keto–** |
| Locant needed? | Usually **no** (it's C-1) | **Yes** (except propanone) |

Neither has a **leaving group** on the carbonyl carbon — that's what distinguishes them from carboxylic acids and their derivatives (Section 1.4).

#### Aldehydes
The carbonyl sits at a **chain-terminating** position, so it's almost always **carbon 1** and the **"1" is omitted** from the name. Name by replacing the parent alkane's **–e with –al**.

**Common names dominate** for the small aldehydes:

| IUPAC name | Common name |
|---|---|
| Methanal | **formaldehyde** |
| Ethanal | **acetaldehyde** |
| Propanal | **propionaldehyde** |

#### Ketones

![Figure 1.9 — naming ketones (IUPAC and common names in parentheses)](${fig(2, 2).src})

The carbonyl is **internal**, so a ketone **always needs a locant** — except **propanone**, whose carbonyl can only be on C-2. Name by replacing **–e with –one**, giving the carbonyl the **lowest possible number** if it's the highest-priority group.

**Common ketone names** = alkyl groups (alphabetical) + "ketone":
- **2-butanone → ethyl methyl ketone**
- **Acetone** is the smallest ketone (IUPAC **propanone**); it breaks the pattern because **acet–** here refers to **three** carbons, not two.

:::expertise
Know both naming systems for the small carbonyls. Make sure you can instantly recognize **formaldehyde, acetaldehyde, and acetone**.
:::

:::bridge
Sugars are classed as **aldoses** (aldehyde sugars) or **ketoses** (ketone sugars). Reading the nomenclature reveals the structure — see *MCAT Biochemistry Review*, Ch. 4.
:::

#### Naming carbonyls as substituents
When a **higher-priority** group takes the suffix, the aldehyde/ketone becomes an **oxo–** prefix (referring to the carbonyl oxygen; ketones can also be **keto–**).

#### α, β, γ, δ lettering
Carbons are also labeled **relative to the carbonyl**:

- **α-carbon** — adjacent to the carbonyl carbon
- then **β (γ, δ)** moving outward — *on both sides* of a ketone

:::bridge
This lettering matters for **α-hydrogen acidity** — see *MCAT Organic Chemistry Review*, Ch. 7.
:::
`
    },

    /* ─────────────── 1.4 Carboxylic Acids and Derivatives ─────────────── */
    {
      id: 's4', num: '1.4', title: 'Carboxylic Acids and Derivatives',
      goals: [
        'Name common carboxylic acid derivatives, including esters, amides, and anhydrides',
        'Differentiate between common carboxylic acid derivatives'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 1.10 — Naming carboxylic acids: replace –e with –oic acid; the terminal carboxyl carbon is C-1 and takes no number.' }],
      recap: `
- **Carboxylic acid** = **carbonyl + hydroxyl on a terminal carbon** ($\\text{–COOH}$); **three bonds to O** → the **most oxidized**, **highest-priority** group on the MCAT. Suffix **–oic acid**.
- Because carboxylic acids always win, **everything else is named as a prefix** when one is present.
- **Three derivatives** (replace the –OH): **ester** (–OR, suffix **–oate**), **amide** (–NR, suffix **–amide**), **anhydride** (two acids minus water, suffix **anhydride**).
- Common acid names follow the aldehydes: **formic** (methanoic), **acetic** (ethanoic), **propionic** (propanoic).
- Amide N-substituents are flagged with a capital **N–** prefix.
`,
      detail: `
#### Carboxylic acids — the top of the priority ladder
A **carboxylic acid** has both a **carbonyl** ($\\text{C=O}$) and a **hydroxyl** ($\\text{–OH}$) on a **terminal** carbon ($\\text{–COOH}$).

- It carries **three bonds to oxygen** — the **most oxidized** functional group on the MCAT (only $\\text{CO}_2$, with four, is more oxidized).
- It is therefore the **highest-priority** group: it **always provides the suffix**, and all other groups become **prefixes**.
- Like aldehydes, it's **terminal** → its carbon is **C-1** and takes **no locant**.
- Name by replacing **–e with –oic acid**.

| IUPAC name | Common name |
|---|---|
| Methanoic acid | **formic acid** |
| Ethanoic acid | **acetic acid** |
| Propanoic acid | **propionic acid** |

:::expertise
The common acid names mirror the aldehydes: **form**aldehyde / **form**ic acid both come from **meth**ane; **acet**aldehyde / **acet**ic acid both come from **eth**ane. Linking them consolidates the memorization.
:::

#### The carboxylic acid derivatives
Each derivative **replaces the –OH** of the acid. Here is the full comparison:

| Derivative | What replaces –OH | Suffix | Notes |
|---|---|---|---|
| **Ester** | **alkoxy** ($\\text{–OR}$) | **–oate** | Named "**alkyl** ...**oate**": alkyl of the esterifying group + parent acid as –oate (e.g., **butyl methanoate**). |
| **Amide** | **amino** ($\\text{–NR}$) | **–amide** | N can bear 0, 1, or 2 alkyl groups; N-substituents get a capital **N–** prefix and **no number**. |
| **Anhydride** | a second **acyl–O** (two acids − $\\text{H}_2\\text{O}$) | **anhydride** | Often **cyclic** (from a diacid). Symmetric → "...**anhydride**"; asymmetric → **both** acids named. |

##### Esters

![Figure 1.11 — naming esters (alkyl ...oate)](${fig(3, 1).src})

The **–OH is replaced by an alkoxy group ($\\text{–OR}$).** Two-term name:
1. **First term** = the **alkyl** name of the esterifying (R) group — think of it as an adjective.
2. **Second term** = the parent acid with **–oate** replacing **–oic acid**.

Groups bonded directly to the **ester oxygen are substituents** and are **not numbered**. Example: **methanoic acid + butanol → butyl methanoate**.

##### Amides

![Figure 1.12 — naming amides (N– prefix for nitrogen substituents)](${fig(3, 2).src})

The **–OH is replaced by an amino group**. Named like esters but with the suffix **–amide**. Substituents on the **nitrogen** carry a capital **N–** prefix (showing attachment via N) and are **not numbered**.

##### Anhydrides

![Figure 1.13 — naming anhydrides (including cyclic phthalic & succinic anhydride)](${fig(3, 3).src})

Formed when **two carboxylic acids lose one water molecule** between them; many are **cyclic** (intramolecular dehydration of a **dicarboxylic acid**).

- **Symmetric** (one type of acid) → replace **acid** with **anhydride** (e.g., propanoic → **propanoic anhydride**).
- **Asymmetric** → name **both** acids (without "acid"), alphabetically, before "anhydride."

:::mnemonic
**hydro–** = water, **an–** = without → **anhydride** = "without water." It's literally two acids that have had a **water molecule removed**.
:::
`
    },

    /* ────────────────── 1.5 Summary of Functional Groups ────────────────── */
    {
      id: 's5', num: '1.5', title: 'Summary of Functional Groups',
      goals: [
        'Apply appropriate prefixes and suffixes for common organic functional groups'
      ],
      recap: `
- **Master priority list (high → low):** **carboxylic acid > anhydride > ester > amide > aldehyde > ketone > alcohol > alkene/alkyne > alkane.**
- Priority **tracks oxidation state**: carboxylic acid (3 bonds to O) is highest; alkane (all C–H) is lowest.
- Use the **suffix** if the group is the molecule's **highest priority**; otherwise name it as a **prefix** substituent.
- **Alkenes and alkynes tie** — except in **rings**, where the alkene wins.
- This is a **high-yield** table: know every prefix/suffix pair.
`,
      detail: `
#### The master functional-group priority table
This is the single most important table in the chapter. **Carboxylic acids are highest priority; alkanes are lowest.** Use the **suffix** when the group is the molecule's top priority; otherwise use its **prefix** as a substituent.

| Priority | Functional group | Prefix | Suffix |
|---|---|---|---|
| **1 (highest)** | **Carboxylic acid** | carboxy– | **–oic acid** |
| 2 | **Anhydride** | alkanoyloxycarbonyl– | **anhydride** |
| 3 | **Ester** | alkoxycarbonyl– | **–oate** |
| 4 | **Amide** | carbamoyl– / amido– | **–amide** |
| 5 | **Aldehyde** | oxo– | **–al** |
| 6 | **Ketone** | oxo– / keto– | **–one** |
| 7 | **Alcohol** | hydroxy– | **–ol** |
| 8* | **Alkene** | alkenyl– | **–ene** |
| 8* | **Alkyne** | alkynyl– | **–yne** |
| **9 (lowest)** | **Alkane** | alkyl– | **–ane** |

*\\*Alkenes and alkynes are **tied** for priority — **except in cyclic compounds**, where alkenes outrank alkynes.*

:::keyconcept
**Priority = oxidation state.** Carboxylic acids have the **most** bonds to oxygen (highest oxidation state, highest priority); alkanes have **only C–H bonds** (lowest oxidation state, lowest priority). The ladder simply walks down the oxidation state of the functional carbon.
:::

:::mnemonic
**Priority order, top to bottom:** "**C**arboxylic **A**cids **E**at **A**ll **A**ldehydes, **K**eeping **A**lcohols **E**xtremely **A**ngry" → **C**arboxylic acid · **A**nhydride · **E**ster · **A**mide · **A**ldehyde · **K**etone · **A**lcohol · alk**E**ne/alkyne · **A**lkane. *(Crude backup: "Carboxylic Acids Eat Aldehydes/Amides; Keto, Alcohol, Ene, Ane bring up the rear.")*
:::

:::expertise
This section carries a **High-Yield** badge — meaning the MCAT tests it frequently. Drill the table until you can produce **both** the prefix and the suffix for every group from memory.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: '1.1 IUPAC Naming Conventions',
        points: [
          '**IUPAC** sets unambiguous naming standards — one name ⇄ one structure.',
          '**Five steps:** (1) find the **longest chain** with the highest-priority group (the **parent chain**); (2) **number** so that group gets the **lowest locant** (it sets the suffix); (3) **name substituents** as prefixes (repeats → di–/tri–/tetra–); (4) **assign a number** to each substituent; (5) **complete** the name — substituents **alphabetized**, numbers split by commas, separated from words by hyphens.',
          'Priority follows **oxidation state**: more bonds to heteroatoms = higher priority. Double bonds beat triple bonds in a tie.'
        ]
      },
      {
        section: '1.2 Hydrocarbons and Alcohols',
        points: [
          '**Alkanes** are saturated hydrocarbons, $\\text{C}_n\\text{H}_{2n+2}$, named by carbon-count root + **–ane** (meth, eth, prop, but, pent, hex, hept, oct, non, dec...).',
          '**Alkenes (–ene)** and **alkynes (–yne)** carry double/triple bonds, numbered by the lower-numbered carbon.',
          '**Alcohols** carry **–OH**; suffix **–ol** or prefix **hydroxy–**; they outrank double/triple bonds and alkanes (higher oxidation state).',
          '**Diols** have two –OH: **geminal** (same carbon) or **vicinal** (adjacent carbons). Common name for ethane-1,2-diol = **ethylene glycol**; ethanol = **ethyl alcohol**; 2-propanol = **isopropyl alcohol**.'
        ]
      },
      {
        section: '1.3 Aldehydes and Ketones',
        points: [
          'Both contain a **carbonyl** ($\\text{C=O}$). **Aldehydes** sit on a **terminal** carbon (also bonded to H); **ketones** are **internal**.',
          'Suffixes: aldehyde **–al**, ketone **–one**; both use **oxo–** as a prefix (ketones also **keto–**).',
          'Common names: **formaldehyde** (methanal), **acetaldehyde** (ethanal), **propionaldehyde** (propanal); **acetone** (propanone). 2-butanone = **ethyl methyl ketone**.',
          'The carbon adjacent to the carbonyl is the **α-carbon** (then β, γ, δ outward, on both sides).'
        ]
      },
      {
        section: '1.4 Carboxylic Acids and Derivatives',
        points: [
          '**Carboxylic acids** are the **highest-priority** group (three bonds to O); always terminal; suffix **–oic acid**. Common names: **formic, acetic, propionic**.',
          '**Esters** replace –OH with **–OR** (alkoxy); named "**alkyl ...oate**".',
          '**Amides** replace –OH with an **amino** group; suffix **–amide**; N-substituents flagged with capital **N–**.',
          '**Anhydrides** form from **two acids minus water**; may be symmetric, asymmetric, or cyclic; suffix **anhydride**.'
        ]
      },
      {
        section: '1.5 Summary of Functional Groups',
        points: [
          'Priority order (high → low): **carboxylic acid > anhydride > ester > amide > aldehyde > ketone > alcohol > alkene/alkyne > alkane**.',
          'Priority **correlates with oxidation state** — carboxylic acid highest, alkane lowest.',
          'Use the **suffix** for the highest-priority group; name all others as **prefix** substituents.'
        ]
      }
    ],
    mnemonics: [
      '**Five IUPAC steps:** "**L**ong **N**umbers **N**ame **A**ll **C**ompounds" → **L**ongest chain · **N**umber · **N**ame substituents · **A**ssign numbers · **C**omplete.',
      '**Chain roots 1–10:** "**M**onkeys **E**at **P**eanut **B**utter, **P**ersons **H**ave **H**eaping **O**f **N**ew **D**imes" → Meth · Eth · Prop · But · Pent · Hex · Hept · Oct · Non · Dec.',
      '**Functional-group priority (high→low):** "**C**arboxylic **A**cids **E**at **A**ll **A**ldehydes, **K**eeping **A**lcohols **E**xtremely **A**ngry" → Carboxylic acid · Anhydride · Ester · Amide · Aldehyde · Ketone · Alcohol · alkEne/alkyne · Alkane.',
      '**Diols:** **Vicinal** = in the **vicinity** (adjacent carbons); **Geminal** = **Gemini twins** (same carbon).',
      '**Anhydride** = **an–** (without) + **hydro–** (water) → two acids that lost a water molecule.',
      '**Common-name link:** **form**aldehyde ↔ **form**ic acid (both methane-based); **acet**aldehyde ↔ **acet**ic acid (both ethane-based).',
      '**Suffix vs. prefix:** highest-priority group → **suffix**; everything else → **prefix** substituent. Priority just walks **down the oxidation state**.'
    ],
    keyConcepts: [
      '**Oxidation state IS priority.** The functional carbon with the most bonds to heteroatoms wins the suffix; carboxylic acid (3 bonds to O) tops the list, alkane (all C–H) sits at the bottom.',
      '**Terminal vs. internal carbonyls:** aldehydes and carboxylic acids are **terminal** (C-1, often no locant); ketones are **internal** (always need a locant, except propanone).',
      '**Carboxylic acid derivatives all replace the –OH:** ester (–OR), amide (–NR), anhydride (second acyl group). Recognizing the swap tells you the suffix.',
      '**Know the common names cold** — the MCAT mixes IUPAC and common names freely: formaldehyde/acetone/acetaldehyde, formic/acetic/propionic acid, ethyl & isopropyl alcohol, ethylene glycol.'
    ],
    equations: [
      { name: 'Alkane general formula', tex: '\\text{C}_n\\text{H}_{2n+2}', note: 'Saturated hydrocarbons (no rings or multiple bonds). Each degree of unsaturation removes one $\\text{H}_2$.' }
    ]
  },

  questions: raw.questions
};
