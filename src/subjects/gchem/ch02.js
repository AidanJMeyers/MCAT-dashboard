// GChem Chapter 2 — The Periodic Table. Re-authored to the rich-formatting quality bar.
// Figures, goals, questions are reused from ch02.json (already-correct extraction);
// the recap/detail markdown is authored here from the Kaplan source text.
import raw from './ch02.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 2,
  title: 'The Periodic Table',
  subtitle: 'Organization of the periodic table · types of elements · periodic trends (high-yield) · the chemistry of groups',

  blocks: [
    /* ─────────────────────── 2.1 The Periodic Table ─────────────────────── */
    {
      id: 's1', num: '2.1', title: 'The Periodic Table',
      goals: [
        'Explain how the modern periodic table is organized',
        'Differentiate between representative and nonrepresentative elements'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Periods (rows) run left→right; groups (families, columns) run top→bottom. Elements in a group share a valence configuration and so share chemical properties.' }],
      recap: `
- The **periodic law**: the chemical and physical properties of elements depend, **periodically**, on their **atomic number** (protons) — Moseley's fix to Mendeleev's atomic-weight ordering.
- **Periods = rows** (the principal quantum number **n = 1–7**); **groups = columns** (same **valence electron configuration** → similar chemistry).
- The **Roman numeral** over a group = its number of **valence electrons**; **A = representative** (s/p valence), **B = nonrepresentative** (transition + lanthanide/actinide).
- **Valence electrons** are farthest out, highest in potential energy, and held loosely → they drive **reactivity and bonding**.
`,
      detail: `
#### From atomic weight to atomic number
- **1869 — Dmitri Mendeleev** published the first **Periodic Table of the Elements**, ordering the known elements by **atomic weight** and revealing periodically recurring properties.
- **Henry Moseley** later re-ordered the table by **atomic number** (number of **protons**) rather than atomic weight.
- This made the table predictive: properties of *undiscovered* elements could be forecast from their position.

The table is a visual statement of the **periodic law**: *the chemical and physical properties of the elements are a periodic function of their atomic numbers.*

#### Periods vs. groups — the two axes
The modern table arranges elements by atomic number into **periods (rows)** and **groups / families (columns)**.

| Axis | Name | What it represents | MCAT meaning |
|---|---|---|---|
| **Rows** | **Periods** | Principal quantum number **n = 1 → 7** (for s- and p-block) | Each step **right** adds one proton + one electron (neutral atoms) |
| **Columns** | **Groups / families** | Same **valence electron configuration** | Same number of valence electrons → **similar chemical properties** |

:::bridge
From Chapter 1 of *MCAT General Chemistry Review*: **periods** graphically represent the **principal quantum number**, and **groups** determine the **valence electron configuration**. Two elements in the same group behave alike *because* they share that configuration.
:::

#### Why valence electrons matter
- **Valence electrons** sit in the **valence shell** — farthest from the nucleus, with the **greatest potential energy**.
- Because they are held **least tightly**, they are the electrons that engage in **chemical bonds**.
- Therefore the valence configuration **largely determines an element's reactivity and chemical properties.**

:::expertise
Elements with **similar valence configurations** generally behave similarly — *as long as they are the same type* (metal, nonmetal, or metalloid). That qualifier is the trap on many group-comparison questions.
:::

#### Representative (A) vs. nonrepresentative (B) elements
The Roman numeral above each group tells you the number of valence electrons; the **A / B** letter splits the table into two big classes.

| Class | Groups | Valence subshells | Notes |
|---|---|---|---|
| **Representative elements (A)** | **IA–VIIIA** | **s or p** | Numeral + letter *fully predict* the configuration — e.g. **Group VA = 5 valence e⁻**, configuration $s^2p^3$ |
| **Nonrepresentative — transition (B)** | **IB–VIIIB** | **s and d** | May show **unexpected configurations**: chromium $4s^1 3d^5$, copper $4s^1 3d^{10}$ |
| **Nonrepresentative — lanthanides/actinides** | inner transition | **s and f** | Bottom two detached rows |

:::keyconcept
In the modern **IUPAC** system the groups are simply numbered **1 to 18** with **no A/B subdivision**. So "Group VIIA" = "Group 17," "Group VIIIA" = "Group 18," and the transition block is "Groups 3–12." Know both naming systems.
:::

:::mnemonic
**"A is for Apparent."** For the **A** (representative) elements, the valence configuration is *apparent* straight from the group number — VA has 5 valence electrons, VIA has 6, and so on. The **B** (transition) block is the troublemaker that *breaks the pattern* (Cr, Cu).
:::
`
    },

    /* ─────────────────────── 2.2 Types of Elements ─────────────────────── */
    {
      id: 's2', num: '2.2', title: 'Types of Elements',
      goals: [
        'Classify elements as metal, nonmetal, or metalloid',
        'Predict the traits of an element given its location on the periodic table'
      ],
      images: [{ src: fig(1, 0).src, alt: fig(1, 0).alt, caption: 'Figure 2.3 — Periodic table color-coded by element type: metals (left & middle), nonmetals (upper right), and the metalloid "staircase" dividing them.' }],
      recap: `
- Three element types: **metals** (left + middle), **nonmetals** (upper right), and **metalloids / semimetals** (the **staircase** starting at boron).
- **Metals** = lustrous, **malleable** (hammered), **ductile** (drawn to wire), good conductors — because valence electrons are **loosely held and free to move**; atomic-level signature: **low Zeff, low electronegativity, large atomic radius, low ionization energy, low electron affinity.**
- **Nonmetals** = brittle, dull, poor conductors; **high ionization energy, electron affinity, and electronegativity**, small atomic radius.
- **Metalloids** (B, Si, Ge, As, Sb, Te, Po, At) have **intermediate** properties → make good **semiconductors**; behavior depends on the reacting partner.
`,
      detail: `
#### Three categories of elements
When trends in reactivity and physical properties are combined, the elements sort into **metals**, **nonmetals**, and **metalloids** (a.k.a. **semimetals**) — separated by the diagonal **staircase**.

#### Metals
Found on the **left side and middle** of the table — the **active metals**, the **transition metals**, and the **lanthanide/actinide** series.

**Physical properties**
- **Lustrous (shiny) solids** — *except mercury*, a liquid at standard conditions.
- Generally **high melting points and densities** — *but* lithium's density is about **half that of water**.
- **Malleability** — can be hammered into shapes.
- **Ductility** — can be drawn into wires.
- Good conductors of **heat and electricity**.

**Atomic-level signature** — every property traces back to *easily giving up electrons*:

| Property | Metals | Why it matters |
|---|---|---|
| Effective nuclear charge ($Z_{eff}$) | **Low** | Weak hold on valence e⁻ |
| Electronegativity | **Low** (high *electropositivity*) | Donates rather than attracts e⁻ |
| Atomic radius | **Large** | — |
| Ionic radius | **Small** | Loses e⁻ → shrinks |
| Ionization energy | **Low** | Easy to remove an electron |
| Electron affinity | **Low** | Little drive to gain electrons |

- **Transition metals (Group B)** often have **two or more oxidation states**.
- Valence electrons live in the **s** subshell (active metals), **s + d** (transition metals), or **s + f** (lanthanides/actinides).
- **Cu, Ni, Ag, Au, Pd, Pt** are relatively **nonreactive** → ideal for **coins and jewelry**.

![Figure 2.1 — copper wire showing luster, malleability, ductility, and conductivity](${fig(1, 1).src})

:::keyconcept
**Alkali and alkaline earth metals** are metallic precisely because they easily **lose** electrons from the **s subshell** of their valence shell.
:::

#### Nonmetals
Found predominantly on the **upper right**.

- Generally **brittle** as solids, little/no **metallic luster**.
- **High** ionization energies, electron affinities, and electronegativities; **small atomic radii, large ionic radii**.
- **Poor conductors** of heat and electricity.
- Every property reflects the *inability* to easily give up electrons.
- **Less unified** in their properties than metals are.

![Figure 2.2 — charcoal (carbon): a brittle, nonlustrous, poorly conducting nonmetal](${fig(1, 2).src})

#### Metalloids (semimetals)
The **staircase** of elements separating metals from nonmetals.

- **Electronegativities and ionization energies lie *between* metals and nonmetals.**
- Physical properties (density, melting/boiling point) **vary widely** and can blend metallic + nonmetallic traits — e.g. **silicon** has metallic luster but is **brittle** and a poor conductor.
- Reactivity depends on the **partner**: **boron** acts like a **nonmetal** with sodium but like a **metal** with fluorine.
- The eight: **B, Si, Ge, As, Sb, Te, Po, At** (Po and At are debated, but usually included).

:::realworld
Their *partial* conductivity is exactly what makes metalloids excellent **semiconductors** — the backbone of computing (silicon chips).
:::

:::mnemonic
**Metalloid staircase:** *"**B**oron **Si**ts **Ge**tting **As** **S**leepy **Te**a, **Po**ssibly **At** noon"* → **B, Si, Ge, As, Sb, Te, Po, At.** They start at **boron** and step diagonally down toward astatine.
:::
`
    },

    /* ───────────── 2.3 Periodic Properties of the Elements ───────────── */
    {
      id: 's3', num: '2.3', title: 'Periodic Properties of the Elements',
      goals: [
        'Compare the atomic radius of neutral atoms to their ions',
        'Rank elements by ionization energy, electron affinity, electronegativity, or atomic radius'
      ],
      images: [{ src: fig(2, 1).src, alt: fig(2, 1).alt, caption: 'Figure 2.4 — Effective nuclear charge (Zeff): inner ("between") electrons cancel some of the nuclear charge (shielding); electrons outside the electron of interest do not affect it.' }],
      recap: `
- **Effective nuclear charge ($Z_{eff}$)** — the net positive pull felt by valence electrons — is the **engine behind every trend**. It **increases left→right** across a period and is roughly **constant down a group** (added shielding cancels added protons).
- **THE high-yield table:** going **left→right**, atomic radius **↓** while ionization energy, electron affinity, and electronegativity **all ↑**. Going **top→bottom**, atomic radius **↑** while the other three **↓**.
- **Atomic radius is the odd one out** — it runs *opposite* the others (largest at bottom-left: **Cs**; smallest at top-right: **He / F**).
- **Ions:** cations are **smaller** than the neutral atom; anions are **larger**. Largest nonmetal and smallest metal ionic radii sit near the **metalloid line**.
`,
      detail: `
:::expertise
This section carries a **High-Yield** badge. You will *not* memorize the periodic table — you get it on Test Day — but you **must** know the *trends* cold so you can read predictions straight off the table.
:::

#### Three governing rules
Every trend below derives from just three facts about valence electrons:

1. **Across a period (left→right):** protons and electrons are added one at a time. The growing nuclear charge pulls the electron cloud **inward and tighter** → **$Z_{eff}$ increases left→right.** Inner (nonvalence) electrons partly **shield** that pull.
2. **Down a group (top→bottom):** the principal quantum number **n** rises by one each step, so valence electrons sit behind **more filled inner shells**. The added **shielding cancels** the added nuclear charge → **$Z_{eff}$ is roughly constant down a group**, but valence electrons are still held **less tightly** (they are farther out).
3. **Octet drive:** elements gain or lose electrons to reach the stable **noble-gas octet** (Group VIIIA / 18).

$Z_{eff}$ is the **net positive charge experienced by the outermost electrons** — the foundation of all four trends.

:::bridge
$Z_{eff}$ is just **Coulomb's law** at work (*MCAT Physics and Math Review*, Ch. 5): $q_1$ and $q_2$ are the nuclear charge and the valence-shell charge. Bigger charges (moving right) → larger force → higher $Z_{eff}$.
:::

#### Atomic radius
The **atomic radius** = **half the distance** between the nuclei of two atoms of an element briefly in contact. (You cannot measure a single atom — its electron cloud has no fixed edge.)

- **Across a period (→):** $Z_{eff}$ rises, electrons are pulled in → **atomic radius decreases left→right.**
- **Down a group (↓):** more inner shells push the valence shell out → **atomic radius increases top→bottom.**
- **Extremes:** largest = **cesium (Cs, 260 pm)**; smallest = **helium (He, 25 pm)**. Within a period the biggest atom is in **Group IA**.

![Figure 2.5 — atomic radius (pm) vs. atomic number: peaks recur at the Group IA elements](${fig(2, 2).src})

:::expertise
**Atomic radius is essentially the *opposite* of every other periodic trend.** The others increase **up and to the right**; atomic radius increases **down and to the left.** If you forget a direction, anchor on this one and flip it.
:::

#### Ionic radius
Ionic radius takes "periodic table geography." Two generalizations:
- **Metals lose electrons → become positive (cations).**
- **Nonmetals gain electrons → become negative (anions).**
- **Metalloids** go either way depending on their partner (e.g. **Si** acts nonmetal-like, **Ge** metal-like).

| Species | vs. neutral atom | Why |
|---|---|---|
| **Cation** (metal lost e⁻) | **Smaller** | Fewer electrons; same nuclear pull on fewer e⁻ → tighter |
| **Anion** (nonmetal gained e⁻) | **Larger** | Extra e⁻, same nuclear charge → cloud expands |

- **Nonmetals near the metalloid line** must gain *more* electrons to reach the octet → their anions are **especially large**.
- **Metals near the metalloid line** must lose *more* electrons → their cations shrink **dramatically**; metals near Group IA shrink less.
- **Extremes sit at the metalloid boundary:** the **largest nonmetal** and **smallest metal** ionic radii.

![Figure 2.6 — ionic radii (pm): neutral atoms (purple), cations (black, shrunken), anions (green, enlarged)](${fig(2, 3).src})

#### Ionization energy (IE)
**Ionization energy** (ionization potential) = energy to **remove an electron from a gaseous species**. Always **endothermic** (you fight the nuclear pull).

- Higher **$Z_{eff}$** or closer valence electrons → tighter binding → **higher IE**.
- **IE increases left→right** across a period and **bottom→top** up a group (i.e. highest at top-right).
- Each successive removal costs **more**: **1st IE < 2nd IE < 3rd IE**, because you are stripping electrons from an increasingly **positive** ion.

$$\\text{Mg}^{2+}(g) \\rightarrow \\text{Mg}^{3+}(g) + e^-$$

![Figure 2.7 — first ionization energies (eV): low for the alkali metals, high for the noble gases](${fig(2, 4).src})

:::expertise
The *jump* between successive IEs reveals an element's identity. Removing an electron that leaves a **noble-gas configuration** costs little; the **next** removal (breaking the octet) costs a huge amount.
- **Group IA** (e.g. Na): the **2nd IE is disproportionately large** — Na⁺ already has a noble-gas core.
- **Group IIA** (e.g. Mg): the **2nd IE is only modestly larger** than the 1st — both s-electrons come off before hitting the core.
:::

#### Electron affinity (EA)
**Electron affinity** = energy **released** when a gaseous species **gains** an electron. **Exothermic** ($\\Delta H_{rxn}$ negative), but EA is **reported as a positive number** (it's the magnitude of energy dissipated).

- **Halogens** are the most "**greedy**" — one electron completes their octet → very **high EA**.
- Stronger nuclear pull (**higher $Z_{eff}$**) → more energy released → **EA increases left→right.**
- Farther valence shell down a group → **EA decreases top→bottom.**
- **Groups IA/IIA** have **very low** EA (they'd rather *donate*).
- **Noble gases:** trend predicts high EA, but they're actually **~0** — a full octet won't accept an electron.

![Figure 2.8 — electron affinities (eV): highest for the halogens, near zero for metals and noble gases](${fig(2, 5).src})

#### Electronegativity
**Electronegativity** = the **attractive force an atom exerts on the electrons in a chemical bond.**

- Tracks **ionization energy**: low IE → low electronegativity; high IE → high electronegativity.
- **Pauling scale**: **0.7 (Cs, least)** to **4.0 (F, most)**.
- **Increases left→right**, **decreases top→bottom.**
- **Exception:** the first three noble gases (He, Ne, Ar) have high IE but **negligible electronegativity** because they rarely bond.

![Figure 2.9 — Pauling electronegativity values: rising toward fluorine](${fig(2, 6).src})

#### Putting it together — the master trend table
This is the single most testable summary in the chapter.

![Figure 2.10 — periodic trends: electronegativity, ionization energy, and electron affinity all increase up-and-to-the-right; atomic radius increases down-and-to-the-left](${fig(2, 7).src})

| Property | **Left → Right** (across period) | **Top → Bottom** (down group) | Driver |
|---|---|---|---|
| **Atomic radius** | **Decreases ↓** | **Increases ↑** | More $Z_{eff}$ across; more inner shells down |
| **Ionization energy** | **Increases ↑** | **Decreases ↓** | Tighter hold = harder to remove e⁻ |
| **Electron affinity** | **Increases ↑** | **Decreases ↓** | Stronger pull = more energy on gaining e⁻ |
| **Electronegativity** | **Increases ↑** | **Decreases ↓** | Stronger pull on bonding e⁻ |

*Atomic radius is always **opposite** the other three. Ionic radius is variable.*

:::keyconcept
The two corner anchors do all the work:
- **Cesium (Cs)** = **largest** radius, **least** electronegative, **lowest** ionization energy, **lowest** (least exothermic) electron affinity.
- **Fluorine (F)** = **smallest** radius (among reactive elements), **most** electronegative, **highest** ionization energy, **highest** (most exothermic) electron affinity.
:::

:::mnemonic
**Three go to the top-right corner; radius runs to the bottom-left.** Picture **F** in the top-right hoarding everything (electronegativity, IE, EA all peak there) while the atom itself stays tiny, while the *biggest, laziest* atom (**Cs**) sulks in the bottom-left. Memorize **"corner trio up-right, radius down-left."**
:::
`
    },

    /* ─────────────────────── 2.4 The Chemistry of Groups ─────────────────────── */
    {
      id: 's4', num: '2.4', title: 'The Chemistry of Groups',
      goals: [
        'Identify the groups on the periodic table by the properties they exhibit',
        'Connect periodic table groups 1, 2, 16, 17, 18, and 3–12 to their common names'
      ],
      images: [{ src: fig(3, 0).src, alt: fig(3, 0).alt, caption: 'Figure 2.11 — Sodium (an alkali metal) reacting violently with water, forming a strong base. Alkali metals are stored under mineral oil for this reason.' }],
      recap: `
- **Alkali metals (IA):** one loose s-electron → **+1 cations**; lowest Zeff in their period → **largest radii, lowest IE/EA/electronegativity**; react **violently with water**.
- **Alkaline earth metals (IIA):** two s-electrons → **+2 cations**; with the alkali metals they form the **active metals** (never found neutral in nature).
- **Chalcogens (VIA/16):** six valence e⁻ → typically **−2** (or +6 if metallic); **oxygen and sulfur** are biologically vital.
- **Halogens (VIIA/17):** seven valence e⁻, **highest electronegativities/EA** → grab one electron to form **−1 halides**; **fluorine is the most electronegative element.**
- **Noble gases (VIIIA/18):** full octet → **inert**, **highest IE**, negligible electronegativity.
- **Transition metals (B / 3–12):** **multiple oxidation states** → colorful complexes; act as enzyme **cofactors**.
`,
      detail: `
#### Alkali metals — Group IA (1)
- Most classic **metallic** properties, but **lower densities** (Li floats on water by mass).
- Only **one loosely bound** valence electron → **very low $Z_{eff}$** → **largest atomic radii** in their period, plus **low** ionization energy, electron affinity, and electronegativity.
- Easily lose that electron to form **univalent (+1) cations**; react readily with nonmetals — especially **halogens** (e.g. **NaCl**).

:::realworld
Because they react explosively with **water and air**, most alkali metals are stored under **mineral oil**.
:::

#### Alkaline earth metals — Group IIA (2)
- Share most alkali-metal traits but with **slightly higher $Z_{eff}$** → **slightly smaller** atomic radii.
- **Two** valence electrons, both easily removed → **divalent (+2) cations**.
- Together, **Groups IA + IIA = the active metals** — so reactive they are **never found in their neutral elemental state**.

#### Chalcogens — Group VIA (16)
- An **eclectic** mix of nonmetals and metalloids; less reactive than halogens but **biologically crucial**.
- **Six valence electrons**; near the metalloids → generally **small atomic radii, large ionic radii**.
- **Oxygen** — water, carbohydrates, biomolecules. **Sulfur** — certain amino acids and vitamins. **Selenium** — protects against oxidative stress.
- Heavier members are mostly **metallic and toxic**; even useful ones are **toxic at high concentration**.

:::bridge
Metabolism (*MCAT Biochemistry Review*, Ch. 9–12) relies on the **light, nontoxic chalcogens** (O and S). The **heavier** chalcogens are toxic metals.
:::

#### Halogens — Group VIIA (17)
- Highly reactive **nonmetals** with **seven valence electrons** — *desperate* for one more to complete the octet.
- **Physical** state varies: $\\text{F}_2$ and $\\text{Cl}_2$ (gas) → $\\text{Br}_2$ (liquid) → $\\text{I}_2$ (solid) at standard conditions.
- Very **high electronegativity and electron affinity** → especially reactive toward **alkali and alkaline earth metals**.
- **Fluorine has the highest electronegativity of all elements.**
- Too reactive to exist as free elements → found as **halide ions (−1)** or **diatomic molecules**.

![Figure 2.12 — diatomic iodine in its standard (solid) state](${fig(3, 1).src})

:::expertise
Halogens are **heavily tested**. The hook to remember: they need only **one** electron to reach a noble-gas configuration, which explains their high EA, high electronegativity, and tendency to form **−1** ions and **ionic bonds** with the active metals.
:::

#### Noble gases — Group VIIIA (18)
- "**Inert gases**" — **filled valence shell** → minimal reactivity.
- **High ionization energies**, little tendency to gain or lose electrons; **He, Ne, Ar** have **no measurable electronegativity**.
- **Extremely low boiling points** → gases at room temperature.

![Figure 2.13 — noble gases as commercial lighting ("neon" signs), exploiting their lack of reactivity](${fig(3, 2).src})

#### Transition metals — Groups IB–VIIIB (3–12)
- True **metals**: **low** electron affinity, ionization energy, and electronegativity.
- **Hard**, with **high melting/boiling points**; **malleable** and good conductors (loosely held electrons fill the **d-orbitals**).
- **Signature trait — multiple oxidation states**, from losing different numbers of s- and d-electrons:
  - **Copper (Cu):** +1 or +2
  - **Manganese (Mn):** +2, +3, +4, +6, or +7

##### Complex ions and color

![Figure 2.14 — vibrantly colored solutions of transition-metal compounds, reflecting d-orbital splitting](${fig(3, 3).src})

- Transition-metal ions form **complex ions** with **water** (hydration complexes, e.g. $\\text{CuSO}_4 \\cdot 5\\,\\text{H}_2\\text{O}$) or with nonmetal ligands (e.g. $[\\text{Co(NH}_3)_6]\\text{Cl}$).
- Complex formation changes **solubility**: **AgCl** is insoluble in water but dissolves in aqueous ammonia by forming $[\\text{Ag(NH}_3)_2]^+$.
- Forming a complex **splits the d-orbitals** into two energy sublevels. The complex absorbs the **light frequency** matching that energy gap; the **un-absorbed (subtraction) frequencies** are what we see → the characteristic **color**.

:::keyconcept
**We see the color that is *reflected*, not absorbed.** If a substance absorbs blue light, your brain perceives the **complementary** color (here, yellow). Carotene absorbs blue and so appears **yellow**. The MCAT won't ask you to name complements, but the absorb-vs-reflect logic is fair game.
:::

:::bridge
Many transition metals serve as **enzyme cofactors** — V, Cr, Mn, Fe, Co, Ni, Cu, Zn (*MCAT Biochemistry Review*, Ch. 2). Their variable oxidation states are exactly what make them useful in redox biology.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'The Periodic Table & Types of Elements',
        points: [
          'The periodic table organizes elements by **atomic number**, revealing a periodic pattern of chemical and physical properties.',
          '**Periods** (rows) share the same principal energy level **n**; **groups** (columns) share the same **valence configuration** → similar chemistry.',
          '**Metals** (left + middle) are lustrous, conductive, malleable, ductile; **nonmetals** (right) are dull, brittle, poor conductors; **metalloids** form a **staircase from boron** with intermediate properties.'
        ]
      },
      {
        section: 'Periodic Properties of the Elements',
        points: [
          '**Effective nuclear charge ($Z_{eff}$)** is the net positive charge felt by valence electrons and is the **foundation of every trend** — it rises **left→right** and is roughly constant **down a group**.',
          '**Atomic radius** decreases left→right and increases top→bottom (opposite the other trends). **Cations < neutral atom < anions**; largest nonmetal and smallest metal ionic radii sit at the **metalloid boundary**.',
          '**Ionization energy, electron affinity, and electronegativity** all **increase left→right and decrease top→bottom.** IE is the energy to remove an electron; EA is the energy released on gaining one; electronegativity is the pull on bonded electrons.'
        ]
      },
      {
        section: 'The Chemistry of Groups',
        points: [
          '**Alkali metals (IA)** → **+1**; **alkaline earth metals (IIA)** → **+2**; together they are the most reactive (**active**) metals.',
          '**Chalcogens (VIA/16)** → **−2** (or +6 if metallic), biologically vital; **halogens (VIIA/17)** → **−1**, highest electronegativities; **noble gases (VIIIA/18)** are inert with full octets and very high IE.',
          '**Transition metals (B / 3–12)** take on **multiple oxidation states**, forming **colorful complex ions** and serving as **biological cofactors**.'
        ]
      }
    ],
    mnemonics: [
      '**Corner trio up-right, radius down-left:** electronegativity, ionization energy, and electron affinity all peak at the **top-right** (fluorine\'s corner); **atomic radius** runs the opposite way, biggest at the **bottom-left** (cesium).',
      '**Atomic radius is the rebel** — it is the *one* trend that increases **down and to the left**, opposite the other three. Memorize it once and flip everything else.',
      '**Cs vs. F bookends:** **Cs** = largest, least electronegative, lowest IE, lowest EA. **F** = smallest, most electronegative, highest IE, highest EA.',
      '**Metalloid staircase:** *Boron Sits Getting As Sleepy Tea, Possibly At noon* → **B, Si, Ge, As, Sb, Te, Po, At.**',
      '**Group charges:** **IA → +1**, **IIA → +2**, **VIA → −2**, **VIIA → −1** — each group grabs or dumps electrons to reach the nearest **noble-gas octet**.',
      '**"A is for Apparent":** for the **A** (representative) groups, the Roman numeral *is* the valence-electron count (VA = 5, VIA = 6). The **B** (transition) block breaks the pattern (Cr $4s^1 3d^5$, Cu $4s^1 3d^{10}$).',
      '**Halogens are greedy, alkalis are generous:** halogens need just **one** electron (high EA) so they snatch it; alkali metals want to **dump one** (low IE) — together they make ionic salts like **NaCl**.',
      '**2nd IE tells you the group:** a *huge* jump after the 1st IE (e.g. **Na⁺**) means you just exposed a noble-gas core → it was **Group IA**.'
    ],
    keyConcepts: [
      '**$Z_{eff}$ explains everything.** A stronger net pull on valence electrons simultaneously **shrinks the atom** and **raises** ionization energy, electron affinity, and electronegativity — so all four trends are really one trend in disguise.',
      '**Groups, not periods, predict chemistry.** Same column = same valence configuration = similar behavior (Li and Na both form +1 ions and bond with Cl). Same row tells you nothing about shared reactivity.',
      '**Ions resize predictably:** losing electrons (cation) tightens and **shrinks** the atom; gaining electrons (anion) **expands** it. The most extreme ionic radii cluster at the **metalloid line**.',
      '**Transition metals are special** because of **variable oxidation states** — the source of their colored complex ions (d-orbital splitting) and their role as enzyme cofactors.',
      '**Color is what is reflected, not absorbed** — a complex that absorbs one frequency appears as its **complementary** color.'
    ],
    equations: [
      { name: 'Successive ionization energies', tex: '\\text{1st IE} < \\text{2nd IE} < \\text{3rd IE}', note: 'Each electron is pulled from an increasingly positive ion, so IE always rises. A disproportionate jump signals exposure of a noble-gas core.' },
      { name: 'Effective nuclear charge (conceptual)', tex: 'Z_{eff} = Z - S', note: 'Net nuclear charge felt by a valence electron = protons (Z) minus shielding (S) from inner electrons. Rises left→right; ~constant down a group.' },
      { name: 'Second ionization of magnesium', tex: '\\text{Mg}^{2+}(g) \\rightarrow \\text{Mg}^{3+}(g) + e^-', note: 'Removing an electron from an already-divalent cation is strongly endothermic — illustrates why each successive IE is larger.' }
    ]
  },

  questions: raw.questions
};
