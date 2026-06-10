// Chapter 11 — Oxidation–Reduction Reactions. Authored to the rich-formatting quality bar.
// Figures and questions are reused from ch11.json (already-correct extraction);
// the recap/detail markdown, goals, tables, callouts, and keyReview are authored here.
import raw from './ch11.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 11,
  title: 'Oxidation–Reduction Reactions',
  subtitle: 'Oxidation–reduction reactions · net ionic equations',

  blocks: [
    /* ─────────────── 11.1 Oxidation–Reduction Reactions ─────────────── */
    {
      id: 's1', num: '11.1', title: 'Oxidation–Reduction Reactions',
      goals: [
        'Separate a redox reaction into oxidation and reduction half-reactions',
        'Balance a redox reaction',
        'Identify the oxidizing agent, reducing agent, and relevant oxidation states for a given reaction (e.g., $\\text{SnCl}_2 + \\text{PbCl}_4 \\rightarrow \\text{SnCl}_4 + \\text{PbCl}_2$)'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 11.1 — Oxidation and reduction of biochemical compounds (e.g., NAD⁺/NADH) serve as a method of energy transfer in metabolism.' }],
      recap: `
- **Redox = paired electron transfer.** Charge can't be created or destroyed, so **oxidation (loss of e⁻)** and **reduction (gain of e⁻)** *always* happen together.
- **OIL RIG:** **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (of electrons).
- The **oxidizing agent** is *itself reduced*; the **reducing agent** is *itself oxidized*. Oxidizers ≈ O₂ / electronegative elements; reducers ≈ metals / hydrides (H⁻).
- **Oxidation numbers** track electrons: free element = 0, monatomic ion = its charge, the sum = the species' overall charge.
- **Balance redox** with the **half-reaction (ion–electron) method**: split → balance atoms (H₂O + H⁺ in acid; OH⁻ + H₂O in base) → balance charge with e⁻ → equalize e⁻ → add.
`,
      detail: `
#### Oxidation and reduction
The **law of conservation of charge** states that electrical charge can be neither created nor destroyed. Therefore an isolated loss or gain of electrons cannot occur — **oxidation (loss of electrons)** and **reduction (gain of electrons)** must occur *simultaneously*, producing an electron transfer called a **redox reaction**.

- An **oxidizing agent** causes another atom to undergo **oxidation** and is **itself reduced**.
- A **reducing agent** causes another atom to undergo **reduction** and is **itself oxidized**.

:::mnemonic
**OIL RIG** — **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (of electrons).

**LEO the lion says GER** — **L**oss of **E**lectrons is **O**xidation; **G**ain of **E**lectrons is **R**eduction.

**LEORA / GEROA** (adds the agents): **L**oss of **E**lectrons is **O**xidation → **R**educing **A**gent; **G**ain of **E**lectrons is **R**eduction → **O**xidizing **A**gent. *Pick one and stick with it.*
:::

##### Oxidizing vs. reducing agents at a glance

| | **Oxidizing agent** | **Reducing agent** |
|---|---|---|
| Causes the *other* species to be... | **Oxidized** | **Reduced** |
| What happens to *it*? | Is **reduced** (gains e⁻) | Is **oxidized** (loses e⁻) |
| Typically contains | **O₂** or another strongly **electronegative** element (e.g., a halogen) | **Metal ions** or **hydrides (H⁻)** |
| MCAT examples | O₂, H₂O₂, F₂/Cl₂/Br₂/I₂, H₂SO₄, HNO₃, NaClO, KMnO₄, CrO₃, Na₂Cr₂O₇, **PCC**, NAD⁺/FAD | CO, C, B₂H₆, Sn²⁺ & pure metals, hydrazine, Zn(Hg), Lindlar's catalyst, **NaBH₄**, **LiAlH₄**, NADH/FADH₂ |

:::keyconcept
**Oxidizing agents oxidize other molecules but are themselves reduced; reducing agents reduce other molecules but are themselves oxidized.** If you've identified one ion as the oxidizing agent, the other *must* be the reducing agent.
:::

:::expertise
Strictly, "oxidizing agent" / "reducing agent" names the *atom* that gains or loses electrons. Many texts instead name the whole compound (**CrO₃** rather than **Cr⁶⁺**) — either is acceptable on Test Day.
:::

:::realworld
Biochemical reagents such as **NAD⁺** act as *both* oxidizing and reducing agents at different points in a pathway, ferrying electrons (energy) between metabolic steps — the basis of energy transfer shown in Figure 11.1 above.
:::

#### Assigning oxidation numbers
**Oxidation numbers** are assigned to keep track of the redistribution of electrons. Comparing the oxidation number of an atom in the reactants vs. products tells you how many electrons it gained or lost.

| Rule | Oxidation number | Example |
|---|---|---|
| **Free element** (incl. diatomics) | **0** | N₂, P₄, S₈, He → all $0$ |
| **Monatomic ion** | = its **charge** | Na⁺ $= +1$; Cu²⁺ $= +2$; Fe³⁺ $= +3$; Cl⁻ $= -1$; N³⁻ $= -3$ |
| **Group IA** metal in a compound | **+1** | K in KCl |
| **Group IIA** metal in a compound | **+2** | Ca in CaO |
| **Group VIIA** (halogen) in a compound | **−1** *(unless bonded to something more electronegative)* | Cl in HCl $= -1$; **but** Cl in HOCl $= +1$ |
| **Hydrogen** | usually **+1**; **−1** with less electronegative elements (Groups IA/IIA) | H in HCl $= +1$; H in NaH $= -1$ |
| **Oxygen** | usually **−2**; **−1** in **peroxides** ($\\text{O}_2^{2-}$); **+2** with more electronegative elements (OF₂) | O in H₂O $= -2$; O in H₂O₂ $= -1$ |
| **Sum** of all atoms | = **0** (neutral compound) or = **the ion's charge** (polyatomic ion) | In $\\text{SO}_4^{2-}$ the sum $= -2$ |

:::keyconcept
**Formula-writing convention puts the cation first, anion second.** So HCl implies H⁺, while NaH implies H⁻. Read the way a compound is *written* (plus the periodic table) to deduce oxidation states.
:::

:::expertise
Treat the oxidation number as the *typical charge* an element takes based on its group number, metallicity, and position in the periodic table. **Start with the atoms you know** (Group I & II, halides, oxygen) and solve for the rest. **Transition metals** take **multiple oxidation states**, so determine them *last* — a change in their oxidation state usually produces a **color change** (different light absorbed/emitted).
:::

:::bridge
Metals form cations (they *lose* electrons), so metals like to be **oxidized** → they make good **reducing agents**. Nonmetals form anions (they *gain* electrons), so they like to be **reduced** → good **oxidizing agents**. *(MCAT General Chemistry Review, Ch. 3.)*
:::

:::expertise
Don't confuse **oxidation number** with **formal charge**. Oxidation number assumes *unequal* sharing — it awards both bonding electrons to the *more electronegative* atom. Formal charge assumes *equal* sharing — one electron to each atom. Reality lies between the two.
:::

![Figure 11.2 — Assigning oxidation numbers to carbon dioxide.](${fig(0, 3).src})

##### Worked example — find the agents
Assign oxidation numbers in $\\text{SnCl}_2 + \\text{PbCl}_4 \\rightarrow \\text{SnCl}_4 + \\text{PbCl}_2$.

- Every species is neutral, so oxidation numbers must sum to $0$. Each Cl is $-1$.
- **Sn:** $+2$ in SnCl₂ → $+4$ in SnCl₄ → *loses* electrons → **oxidized** → the **reducing agent**.
- **Pb:** $+4$ in PbCl₄ → $+2$ in PbCl₂ → *gains* electrons → **reduced** → the **oxidizing agent**.
- Charge is conserved (net $0$ on both sides). *(Nomenclature note: the reactants are tin(II) chloride and lead(IV) chloride.)*

#### Balancing redox reactions
To balance a redox reaction, **both net charge and atom counts must match on each side**. The standard tool is the **half-reaction method** (a.k.a. the **ion–electron method**): split the reaction into an **oxidation half-reaction** and a **reduction half-reaction**, balance each separately, then add them.

| Step | What to do |
|---|---|
| **1. Separate** | Split into the oxidation and reduction **half-reactions**. |
| **2. Balance atoms** | First balance all atoms **except H and O**. Then balance O and H: **acidic** → add **H₂O** to balance O, then **H⁺** to balance H; **basic** → use **OH⁻ and H₂O**. |
| **3. Balance charge** | Add **electrons (e⁻)** to one side so the net charge is equal on both sides. |
| **4. Equalize electrons** | Multiply each half-reaction so both have the **same number of e⁻** (so they cancel). |
| **5. Add** | Add the half-reactions; cancel species appearing on **both** sides of the arrow. |
| **6. Confirm** | Verify both **mass** and **charge** are balanced. |

:::mnemonic
**Acid vs. base balancing:** in **A**cid you add **A**queous protons (**H⁺**) after the water; in **B**ase you balance with the **B**ase ion (**OH⁻**). Always do H and O *last*.
:::

##### Worked example — half-reaction method
Balance $\\text{MnO}_4^- + \\text{I}^- \\rightarrow \\text{I}_2 + \\text{Mn}^{2+}$ in acidic solution.

- **Oxidation half-reaction (×5):**
$$2\\,\\text{I}^- \\rightarrow \\text{I}_2 + 2\\,e^-$$
- **Reduction half-reaction (×2):**
$$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- \\rightarrow \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$$
- Multiply to share **10 e⁻**, add, and cancel:
$$2\\,\\text{MnO}_4^- + 16\\,\\text{H}^+ + 10\\,\\text{I}^- \\rightarrow 2\\,\\text{Mn}^{2+} + 5\\,\\text{I}_2 + 8\\,\\text{H}_2\\text{O}$$
- **Check:** net charge is $+4$ on each side and every atom balances. Done.

:::expertise
Methodical, step-by-step approaches like the half-reaction method are perfect for the MCAT — but you can often **eliminate answer choices partway through** (e.g., once you know the electron count) without finishing every step.
:::
`
    },

    /* ───────────────────── 11.2 Net Ionic Equations ───────────────────── */
    {
      id: 's2', num: '11.2', title: 'Net Ionic Equations',
      goals: [
        'Identify the element undergoing disproportionation and the oxidation state of the products for a given reaction',
        'Apply redox principles to balance and solve application problems such as redox titrations',
        'Determine the net ionic equation for a reaction (e.g., $\\text{Zn (s)} + \\text{CuSO}_4\\text{(aq)} \\rightarrow \\text{Cu (s)} + \\text{ZnSO}_4\\text{(aq)}$)'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 11.3 — Active site of superoxide dismutase: Cu and Zn act as reducing agents (lose electrons during catalysis), held in place by histidine residues.' }],
      recap: `
- **Complete ionic equation** splits *all aqueous* compounds into ions (solids stay intact); the **net ionic equation** drops the **spectator ions** that appear unchanged on both sides.
- **Polyatomic ions that keep their charge** across the reaction (e.g., $\\text{SO}_4^{2-}$, $\\text{NO}_3^-$) are usually spectators.
- The gain/loss of electrons underlies **combination, decomposition, and combustion** redox reactions; **double-displacement (metathesis)** is usually *not* redox.
- **Disproportionation (dismutation):** *one* element is **both oxidized and reduced** (e.g., catalase, superoxide dismutase).
- **Redox titrations** track **transfer of charge (electrons)**, using voltage-sensitive indicators or, in **potentiometric titration**, a voltmeter (emf) and **no indicator**.
`,
      detail: `
#### From overall reaction to net ionic equation
In redox chemistry the focus is on the **shifting of electrons**, not the identities of every ion. Take the single-displacement reaction:
$$\\text{Zn (s)} + \\text{CuSO}_4\\text{ (aq)} \\rightarrow \\text{Cu (s)} + \\text{ZnSO}_4\\text{ (aq)}$$

Splitting aqueous species into ions gives the **complete ionic equation**:
$$\\text{Zn (s)} + \\text{Cu}^{2+} + \\text{SO}_4^{2-} \\rightarrow \\text{Cu (s)} + \\text{Zn}^{2+} + \\text{SO}_4^{2-}$$

The **sulfate ion is unchanged on both sides** — it's a **spectator ion**. Dropping it yields the **net ionic equation**:
$$\\text{Zn (s)} + \\text{Cu}^{2+} \\rightarrow \\text{Cu (s)} + \\text{Zn}^{2+}$$

**Rules for net ionic equations:**
- **Split all aqueous compounds** into their constituent ions.
- **Keep solid salts intact** (do not split them).
- **Subtract spectator ions** — anything appearing identically on both sides.

:::expertise
Look for **polyatomic anions that retain their charge** before and after the reaction (e.g., sulfate, nitrate). These are almost always **spectator ions** and won't appear in the net ionic equation.
:::

#### Reaction types revisited

| Reaction type | Example net ionic equation | Redox? | Spectators? |
|---|---|---|---|
| **Combination** | $\\text{H}_2 + \\text{F}_2 \\rightarrow 2\\,\\text{H}^+ + 2\\,\\text{F}^-$ | **Yes** — H: $0 \\rightarrow +1$ (reducing agent); F: $0 \\rightarrow -1$ (oxidizing agent) | None |
| **Decomposition** | $2\\,\\text{NH}_4^+ + \\text{Cr}_2\\text{O}_7^{2-} \\rightarrow \\text{N}_2 + \\text{Cr}_2\\text{O}_3 + 4\\,\\text{H}_2\\text{O}$ | **Yes** — N: $-3 \\rightarrow 0$ (reducing agent); Cr: $+6 \\rightarrow +3$ (oxidizing agent) | None |
| **Combustion** | $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$ | **Yes** — C: $-4 \\rightarrow +4$ (reducing agent); O: $0 \\rightarrow -2$ (oxidizing agent) | None (no aqueous species) |
| **Double-displacement, salt forms** | $\\text{Ag}^+ + \\text{Cl}^- \\rightarrow \\text{AgCl}$ | **No** — oxidation states unchanged | $\\text{NO}_3^-$, H⁺ |
| **Double-displacement, all aqueous** | *(no net reaction)* | **No** | All ions are spectators |

:::keyconcept
**No solid salt and no oxidation-state change → no net ionic reaction.** If every species stays aqueous in a metathesis reaction (e.g., NaNO₃ + HCl), all ions cancel and nothing "happens" on paper.
:::

#### Disproportionation (dismutation)
A **disproportionation** (or **dismutation**) reaction is a redox reaction in which **a single element is *both* oxidized *and* reduced**, ending up in *at least two* products with different oxidation states.

- **Catalase** (in peroxisomes) decomposes hydrogen peroxide — the fizzing you see when H₂O₂ hits a wound:
$$2\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O} + \\text{O}_2$$
Oxygen starts at **−1** in H₂O₂, then is **reduced to −2** (in H₂O) *and* **oxidized to 0** (in O₂).
- **Superoxide dismutase (SOD)** disproportionates superoxide radicals into peroxide (O reduced to **−1**) and molecular oxygen (O oxidized to **0**).

Biological redox reactions are usually run by **enzymes** whose active sites hold metals such as **Cu and Zn** that act as reducing agents (Figure 11.3 above).

:::realworld
**Catalase and superoxide dismutase protect cells from reactive oxygen species (free radicals).** Both rely on disproportionation — turning a dangerous radical partly into harmless water/oxygen.
:::

:::mnemonic
**Dis-PRO-portionation = one element goes "pro and con"** — the *same* element both gains and loses electrons, landing in two products with different oxidation states.
:::

#### Redox titrations
Like acid–base titrations in setup, but redox titrations follow the **transfer of charge (electrons)** to the equivalence point rather than the movement of protons.

- **Indicators** change color at a particular **voltage (emf)**, e.g., bipyridine metal complexes (~+1 V), diphenylamine (+0.76 V), safranin (~+0.24/−0.29 V; also pH-dependent).
- **Iodimetric titration** uses a **starch indicator** to track free iodine: a **dark** solution (iodine present) titrates to **colorless** at the endpoint — used to standardize thiosulfate solutions.
- **Potentiometric titration** uses **no indicator**; a **voltmeter** measures emf, and the equivalence point is a **sharp change in voltage** — analogous to using a **pH meter** instead of a color indicator in acid–base titrations.

:::expertise
You don't need to memorize the redox indicators (Table 11.2) — just understand that each flips color at a specific voltage, and that **potentiometry** swaps the indicator for a voltmeter, exactly as a **pH meter** replaces an acid–base indicator.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Oxidation–Reduction Reactions',
        points: [
          '**Oxidation is loss of electrons; reduction is gain of electrons.** The two are always paired in a redox reaction (OIL RIG).',
          'An **oxidizing agent** facilitates the oxidation of another species and is **itself reduced**; a **reducing agent** facilitates reduction of another species and is **itself oxidized**.',
          'Common **oxidizing agents** almost all contain **oxygen** or a similarly electronegative element; common **reducing agents** often contain **metal ions or hydrides (H⁻)**.',
          '**Oxidation number rules:** free element/diatomic $= 0$; monatomic ion $=$ its charge; Group IA $= +1$, Group IIA $= +2$; Group VIIA $= -1$ (unless bonded to something more electronegative).',
          'Hydrogen is **+1** (or **−1** with a less electronegative element); oxygen is **−2** (or **−1** in peroxides, positive with more electronegative elements). The sum of oxidation numbers equals the species\' overall charge.',
          'Balance redox with the **half-reaction (ion–electron) method**: separate → balance atoms (acid: H₂O + H⁺; base: OH⁻ + H₂O) → balance charge with e⁻ → equalize e⁻ → add → confirm mass and charge.'
        ]
      },
      {
        section: 'Net Ionic Equations',
        points: [
          'A **complete ionic equation** splits all **aqueous** compounds into ions while keeping **solid salts** intact.',
          '**Net ionic equations** drop **spectator ions** (those identical on both sides), showing only species that actually participate.',
          'Reactions with **no aqueous salts** (e.g., combustion) have a net ionic equation identical to the overall balanced reaction.',
          '**Double-displacement (metathesis)** reactions that form no solid salt and change no oxidation states have **no net ionic reaction**.',
          '**Disproportionation (dismutation):** one element is **both oxidized and reduced**, ending in ≥2 products with different oxidation states.',
          '**Redox titrations** follow the **transfer of charge**; indicators flip at set voltages, while **potentiometric titration** uses a **voltmeter (emf)** and no indicator.'
        ]
      }
    ],
    mnemonics: [
      '**OIL RIG:** **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain (of electrons).',
      '**LEO the lion says GER:** **L**oss of **E**lectrons = **O**xidation; **G**ain of **E**lectrons = **R**eduction.',
      '**LEORA / GEROA** ties in the agents: Loss → **R**educing **A**gent; Gain → **O**xidizing **A**gent. The agent is named for what it does to *the other* species, not to itself.',
      '**Agents get the opposite:** the **oxidizing** agent is *reduced*; the **reducing** agent is *oxidized*. Identify one and the other is automatic.',
      '**Acid vs. base balancing:** in **A**cid, add aqueous **H⁺** (after H₂O); in **B**ase, use **OH⁻** + H₂O. Always balance H and O *last*.',
      '**Dis-PRO-portionation = "pro and con":** the *same* element is both oxidized and reduced into two different products.',
      '**Metals reduce, nonmetals oxidize:** metals lose e⁻ (good reducing agents); electronegative nonmetals gain e⁻ (good oxidizing agents).',
      '**Spectators sit out:** an ion (often a polyatomic like SO₄²⁻ or NO₃⁻) that is unchanged on both sides never appears in the net ionic equation.'
    ],
    keyConcepts: [
      '**Redox is conservation of charge in action** — electrons are never truly "lost," only transferred, so oxidation and reduction are inseparable.',
      '**Assign oxidation numbers from the known atoms outward** (Group I/II, halides, oxygen first); leave **transition metals last** because they take multiple states (often signaled by a color change).',
      '**The half-reaction method scales to any redox problem**, including stoichiometry questions where the answer is a sum of balanced coefficients — balance for *both* mass and charge.',
      '**Net ionic equations strip a reaction to its electron-transfer core** by removing spectator ions; recognizing spectators (unchanged polyatomic ions) is the key skill.',
      '**Disproportionation is biologically vital** — catalase and superoxide dismutase use it to neutralize reactive oxygen species.'
    ],
    equations: [
      { name: 'Oxidation half-reaction (example)', tex: '2\\,\\text{I}^- \\rightarrow \\text{I}_2 + 2\\,e^-', note: 'A species loses electrons; e⁻ appear on the product side.' },
      { name: 'Reduction half-reaction (example)', tex: '\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- \\rightarrow \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}', note: 'Acidic balancing: H₂O balances O, H⁺ balances H, e⁻ balance charge.' },
      { name: 'Balanced overall redox (example)', tex: '2\\,\\text{MnO}_4^- + 16\\,\\text{H}^+ + 10\\,\\text{I}^- \\rightarrow 2\\,\\text{Mn}^{2+} + 5\\,\\text{I}_2 + 8\\,\\text{H}_2\\text{O}', note: 'Half-reactions scaled to share 10 e⁻, then added; net +4 charge each side.' },
      { name: 'Net ionic equation (spectators removed)', tex: '\\text{Zn (s)} + \\text{Cu}^{2+} \\rightarrow \\text{Cu (s)} + \\text{Zn}^{2+}', note: 'Sulfate (SO₄²⁻) is a spectator and is dropped from the complete ionic equation.' },
      { name: 'Disproportionation (catalase)', tex: '2\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O} + \\text{O}_2', note: 'Oxygen (−1) is simultaneously reduced to −2 (H₂O) and oxidized to 0 (O₂).' }
    ]
  },

  questions: raw.questions
};
