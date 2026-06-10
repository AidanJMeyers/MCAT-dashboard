// Chapter 12 — Electrochemistry. Re-authored to the rich-formatting quality bar.
// Figures and questions are reused from ch12.json (already-correct extraction);
// the recap/detail markdown, tables, callouts, and keyReview are authored here.
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 12,
  title: 'Electrochemistry',
  subtitle: 'Electrochemical cells · cell potentials · electromotive force and thermodynamics',

  blocks: [
    /* ───────────────────── 12.1 Electrochemical Cells ───────────────────── */
    {
      id: 's1', num: '12.1', title: 'Electrochemical Cells',
      goals: [
        'Distinguish between electrolytic and galvanic (voltaic) cells',
        'Describe the components of electrolytic and galvanic cells',
        'Predict which electrode acts as the cathode or anode in a galvanic or electrolytic cell',
        'Calculate $\\Delta G$ and emf values for a given galvanic or electrolytic cell',
        'Apply Faraday\'s laws to electrodeposition problems'
      ],
      images: [{ src: fig(0, 2).src, alt: fig(0, 2).alt, caption: 'Figure 12.1 — The Daniell cell: a zinc anode and a copper cathode, each bathed in an electrolyte of its own cation, joined by a salt bridge.' }],
      recap: `
- **Electrochemical cell** = any contained system housing a **redox reaction**. Three core types: **galvanic (voltaic)**, **electrolytic**, **concentration**.
- **Galvanic & concentration cells** = **spontaneous** ($\\Delta G < 0$, $E_{cell} > 0$); **electrolytic cells** = **nonspontaneous** ($\\Delta G > 0$, $E_{cell} < 0$, need an external power source).
- **AN OX / RED CAT** — **an**ode = **ox**idation, **red**uction = **cat**hode. True in **every** cell type.
- **Electrons flow anode → cathode** ($A \\rightarrow C$, alphabetical); **conventional current flows cathode → anode** (opposite to the electrons).
- **Charge signs flip:** galvanic anode is **(–)**; electrolytic anode is **(+)**. But anode always attracts **an**ions, cathode always attracts **cat**ions.
`,
      detail: `
#### What an electrochemical cell is
An **electrochemical cell** is a contained system in which an **oxidation–reduction (redox) reaction** takes place. Three fundamental types — plus commercial **rechargeable** batteries that switch between modes:

| Cell type | Reaction | $\\Delta G$ | $E_{cell}$ | Energy |
|---|---|---|---|---|
| **Galvanic (voltaic)** | **Spontaneous** | $< 0$ | $> 0$ | **Releases** energy (a battery) |
| **Concentration** | **Spontaneous** (special galvanic) | $< 0$ | $> 0$ | Driven by a concentration gradient |
| **Electrolytic** | **Nonspontaneous** | $> 0$ | $< 0$ | **Absorbs** energy from an external source |

Every cell has two **electrodes** dipped in **electrolyte** solution. The **electromotive force (emf)** is the cell's voltage. A **positive emf** means the cell can release energy ($\\Delta G < 0$, spontaneous); a **negative emf** means it must absorb energy ($\\Delta G > 0$, nonspontaneous).

:::mnemonic
**AN OX and a RED CAT** — the **AN**ode is the site of **OX**idation; **RED**uction occurs at the **CAT**hode. This holds for **all** electrochemical cells, no exceptions.
:::

#### Electron flow vs. current
- **Electrons** always travel from **anode → cathode** through the wire.
- **Conventional current** ($I$, the theoretical flow of positive charge — Ben Franklin's convention) runs the opposite way: **cathode → anode**.
- The two have **equal magnitude, opposite direction**.

:::keyconcept
Electrons move through an electrochemical cell **opposite** to the flow of conventional current ($I$).
:::

:::mnemonic
**Electron direction: $A \\rightarrow C$** — anode to cathode, the same order they appear in the **alphabet**. Current does the reverse.
:::

#### Galvanic (voltaic) cells
Every **nonrechargeable battery** you own is a **galvanic cell** (also called a **voltaic cell**). To do useful work it must be **spontaneous**: free energy decreases ($\\Delta G < 0$) as the cell releases energy, so its emf ($E_{cell}$) must be **positive** — $\\Delta G$ and $E_{cell}$ always have **opposite signs**.

:::realworld
Galvanic cells are used as batteries; to be worthwhile (powering a device), they **must be spontaneous**. Like most galvanic cells, lead–acid car batteries fail most in **cold weather** for thermodynamic reasons.
:::

##### Anatomy of a galvanic cell — the Daniell cell
Two electrodes of **distinct chemical identity** sit in separate compartments called **half-cells**, connected by a conductive wire. Each electrode is bathed in an **aqueous electrolyte** of cations and anions. In the **Daniell cell**:

| Electrode | Half-reaction | Role |
|---|---|---|
| **Zinc** in $\\text{ZnSO}_4$ | $\\text{Zn}(s) \\rightarrow \\text{Zn}^{2+}(aq) + 2e^-$ | **Anode** (oxidation) |
| **Copper** in $\\text{CuSO}_4$ | $\\text{Cu}^{2+}(aq) + 2e^- \\rightarrow \\text{Cu}(s)$ | **Cathode** (reduction) |

Net reaction: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. The deposition of $\\text{Cu}$ onto the cathode is called **plating** or **galvanization**.

If the half-cells weren't separated, $\\text{Cu}^{2+}$ would react directly with the zinc bar and **no useful electrical work** would be done.

##### The salt bridge
With only a wire, the reaction would stall: positive charge would pile up on the anode side and negative charge on the cathode side, building a **countervoltage** that halts the redox reaction. A **salt bridge** of inert electrolyte (usually $\\text{KCl}$ or $\\text{NH}_4\\text{NO}_3$) prevents this:

- **Anions** ($\\text{Cl}^-$) diffuse into the **anode** compartment to balance the newly formed $\\text{Zn}^{2+}$.
- **Cations** ($\\text{K}^+$) diffuse into the **cathode** compartment to balance the leftover $\\text{SO}_4^{2-}$.

:::keyconcept
The purpose of the **salt bridge** is to exchange anions and cations to **balance (dissipate) the newly generated charges**, keeping the circuit running.
:::

##### Cell diagram (shorthand notation)
The Daniell cell is written:

$$\\text{Zn}(s)\\ |\\ \\text{Zn}^{2+}(1\\text{ M})\\ ||\\ \\text{Cu}^{2+}(1\\text{ M})\\ |\\ \\text{Cu}(s)$$

Rules: written **anode → cathode**, left to right, as *anode | anode solution (conc.) || cathode solution (conc.) | cathode*. A **single line** $|$ = a phase boundary; a **double line** $||$ = a salt bridge / barrier.

:::expertise
Recognize the **shorthand cell notation** on Test Day. Passages often use this format rather than spelling out the anode and cathode reactions.
:::

#### Electrolytic cells
Electrolytic cells are the **opposite** of galvanic cells in almost every behavior, but they share the constants: reduction at the cathode, oxidation at the anode, electrons anode→cathode, current cathode→anode. The difference: they house **nonspontaneous** reactions ($\\Delta G > 0$) driven by an **external voltage source**. This driven decomposition is called **electrolysis**.

![Figure 12.2 — Electrolysis of molten NaCl](${fig(0, 3).src})

In the **electrolysis of molten $\\text{NaCl}$**, a battery forces the thermodynamically unfavorable reaction:

- $\\text{Na}^+$ migrates to the **cathode** and is **reduced** to $\\text{Na}(l)$ (liquid sodium floats off the top).
- $\\text{Cl}^-$ migrates to the **anode** and is **oxidized** to $\\text{Cl}_2(g)$.

The half-reactions need **not** be separated into compartments — the reaction is nonspontaneous anyway. This is the major industrial source of elemental sodium and chlorine (too reactive to occur naturally in elemental form).

:::keyconcept
Because electrolysis is nonspontaneous, the electrode (anode or cathode) can be made of **any material** so long as it resists the high temperatures and corrosion of the process.
:::

#### Faraday's laws and electrodeposition
**Michael Faraday** showed that the **amount of chemical change** in an electrolytic cell is **directly proportional to the moles of electrons** exchanged. For a metal $M$ gaining $n$ electrons:

$$M^{n+} + n\\,e^- \\rightarrow M(s) \\quad \\text{(Equation 12.1)}$$

One electron carries $1.6 \\times 10^{-19}\\ \\text{C}$; one mole of electrons carries the **Faraday constant**:

$$1\\ F = (1.6 \\times 10^{-19}\\ \\text{C})(6.022 \\times 10^{23}) = 96{,}485\\ \\text{C/mol}\\ e^-$$

:::keyconcept
**One faraday ($F$)** = the charge in **one mole of electrons** = $96{,}485\\ \\text{C}$. On the MCAT, round to $\\approx 10^5\\ \\text{C/mol}\\ e^-$ to keep arithmetic manageable.
:::

The **electrodeposition equation** gives moles of element plated:

$$\\text{mol }M = \\dfrac{It}{nF}$$

where $I$ = current (A), $t$ = time (s), $n$ = electron equivalents per ion, $F$ = Faraday constant.

:::mnemonic
**Electrodeposition equation:** "**C**alculating **M**oles of **M**etal, **I**t is **N**ot **F**un" → $\\text{mol }M = \\dfrac{It}{nF}$.
:::

> **Worked example.** A $2\\ \\text{A}$ current runs through a Daniell cell for $3\\ \\text{h}$. Mass of $\\text{Cu}$ plated?
> $t = 3 \\times 3600 = 10{,}800\\ \\text{s}$, $n = 2$ (for $\\text{Cu}^{2+}$), $F \\approx 96{,}485$.
> $\\text{mol Cu} = \\dfrac{(2)(10{,}800)}{(2)(96{,}485)} \\approx 0.1\\ \\text{mol}$ → $0.1 \\times 63.5 \\approx 6.35\\ \\text{g}$.

#### Concentration cells
A **concentration cell** is a special **galvanic** cell whose two electrodes are **chemically identical** (e.g., both copper → identical reduction potentials). Current is driven not by different materials but by a **concentration gradient** between the two electrolyte solutions.

- The cell drives ions toward **equilibration** of the gradient.
- Current **stops** — and voltage = $0$ — when the two concentrations become **equal**.
- The voltage at any moment is found with the **Nernst equation** (see 12.3).

![Figure 12.3 — The cell membrane as a concentration cell](${fig(0, 5).src})

The biological archetype is a **neuron's cell membrane**: $\\text{Na}^+$, $\\text{K}^+$, and $\\text{Cl}^-$ are exchanged to set up the **resting membrane potential** ($V_m$). A large enough disturbance triggers an **action potential**.

:::bridge
The **resting membrane potential** is covered in *MCAT Biochemistry Review* Ch. 8; **action potential** conduction in *MCAT Biology Review* Ch. 4. Ion/electron transfer during an action potential performs biochemical work.
:::

#### Rechargeable cells
A **rechargeable cell** functions as **both** a galvanic cell (discharging) and an electrolytic cell (charging).

![Figure 12.4 — Lead–acid battery](${fig(0, 6).src})

##### Lead–acid (lead storage) battery
- **Discharging (galvanic):** a **$\\text{Pb}$ anode** and a porous **$\\text{PbO}_2$ cathode** in concentrated ($4\\ \\text{M}$) $\\text{H}_2\\text{SO}_4$. Both electrodes plate with **$\\text{PbSO}_4$** and the acid is diluted.
- **Charging (electrolytic):** an external source reverses the electroplating and re-concentrates the acid (think jumper cables restarting a car).
- **Low energy density** — needs heavy electrode mass per unit output.

![Figure 12.5 — A nickel–cadmium battery](${fig(0, 7).src})

##### Nickel–cadmium (Ni–Cd) battery
- A **$\\text{Cd}$ anode** and a **$\\text{NiO(OH)}$ cathode** in $\\text{KOH}$ electrolyte, layered in a cylinder.
- **Higher energy density** and **higher surge current** (a large early-discharge current burst — good for remotes) than lead–acid.
- Largely replaced by **nickel–metal hydride (NiMH)**: more energy density, cheaper, far less toxic — using a **metal hydride** anode in place of pure metal.

#### Electrode charge designations — THE key table
In a galvanic cell the anode is the **electron source** → it is **negative**; the cathode is **positive**, so electrons move from low potential (–) to high potential (+). An electrolytic cell wires its anode to the external source's **positive** pole, flipping the signs. But oxidation/reduction sites and ion attraction **never** change:

| Property | **Galvanic (voltaic)** | **Electrolytic** |
|---|---|---|
| Spontaneous? | **Yes** ($\\Delta G < 0$, $E_{cell} > 0$) | **No** ($\\Delta G > 0$, $E_{cell} < 0$) |
| Energy | **Releases** energy | **Requires** an external source |
| **Anode** (oxidation) | **(–) negative** | **(+) positive** |
| **Cathode** (reduction) | **(+) positive** | **(–) negative** |
| Site of oxidation | Anode | Anode |
| Site of reduction | Cathode | Cathode |
| Electron flow | Anode → cathode | Anode → cathode |
| Current flow ($I$) | Cathode → anode | Cathode → anode |
| Cathode attracts | **Cat**ions | **Cat**ions |
| Anode attracts | **An**ions | **An**ions |

:::keyconcept
In a **galvanic** cell the anode is **negative** and the cathode **positive**; in an **electrolytic** cell the anode is **positive** and the cathode **negative** (the external source reverses the signs). In **both**, oxidation is at the anode, reduction at the cathode; cathode attracts cations, anode attracts anions.
:::

:::mnemonic
**In a galvanic cell, the anode is negative.** (Then just flip every sign for an electrolytic cell.)
:::

:::mnemonic
**An**ions → **an**ode; **cat**ions → **cat**hode. Always — galvanic, electrolytic, or concentration cell.
:::

:::realworld
Lining up **(+)/(–)** matters whenever you place batteries — jumper cables, TV remotes, watch button cells. The same anode/cathode logic governs **isoelectric focusing**: positively charged amino acids migrate toward the **cathode**, negatively charged ones toward the **anode** (*MCAT Biochemistry Review* Ch. 3).
:::
`
    },

    /* ─────────────────────── 12.2 Cell Potentials ─────────────────────── */
    {
      id: 's2', num: '12.2', title: 'Cell Potentials',
      goals: [
        'Describe how standard reduction potentials are measured',
        'Explain the importance of the sign of the electromotive force',
        'Determine whether a cell using a given reaction is galvanic or electrolytic',
        'Calculate the net $E^\\circ_{cell}$ for a redox reaction between two species'
      ],
      recap: `
- **Reduction potential** = tendency of a species to **gain electrons (be reduced)**. **More positive = wants reduction more.**
- **Standard reduction potential** ($E^\\circ_{red}$) is measured vs. the **standard hydrogen electrode (SHE)**, defined as **0 V**, at $25^\\circ\\text{C}$, $1\\text{ atm}$, $1\\text{ M}$.
- **Galvanic:** the electrode with the **more positive** $E^\\circ_{red}$ is the **cathode**; the less positive is the **anode**. (Electrolytic forces the reverse.)
- **Standard emf:** $E^\\circ_{cell} = E^\\circ_{red,cathode} - E^\\circ_{red,anode}$. **Positive** → galvanic; **negative** → electrolytic.
- **Never multiply** $E^\\circ_{red}$ by stoichiometric coefficients — potential depends on the electrode's **identity**, not its amount.
`,
      detail: `
#### Reduction potentials
For a galvanic cell, charge moves spontaneously from anode (oxidation) to cathode (reduction). But **which species gets oxidized and which gets reduced?** Answer: compare their **reduction potentials**, measured experimentally against the **standard hydrogen electrode (SHE)**, arbitrarily assigned **0 V**.

- A **reduction potential** (in volts) = the tendency of a species to **gain electrons and be reduced**.
- The **more positive** the $E_{red}$, the **greater the tendency to be reduced**; less positive → greater tendency to be **oxidized**.
- **Standard reduction potential** ($E^\\circ_{red}$) is measured under **standard conditions**: $25^\\circ\\text{C}$ ($298\\text{ K}$), $1\\text{ atm}$, $1\\text{ M}$ concentrations.

:::keyconcept
A **reduction potential** is exactly what it sounds like — how badly a species **wants to be reduced**. The more positive the value, the more it wants to gain electrons.
:::

##### Assigning anode and cathode

| | **More positive** $E^\\circ_{red}$ | **Less positive** $E^\\circ_{red}$ |
|---|---|---|
| **Galvanic** (spontaneous, $\\Delta G < 0$) | **Cathode** — reduced (gets its wish) | **Anode** — oxidized |
| **Electrolytic** (nonspontaneous, $\\Delta G > 0$) | **Anode** — *forced* to oxidize | **Cathode** — *forced* to reduce |

In a galvanic cell each species does what it "wants," so the reaction is spontaneous. In an electrolytic cell the external source **forces** species against their tendencies, so it is nonspontaneous.

> **Worked example.** $\\text{Ag}^+$ has a more positive $E^\\circ_{red}$ than $\\text{Tl}^+$. In a galvanic cell, $\\text{Ag}^+$ is reduced and $\\text{Tl}(s)$ is oxidized:
> $$\\text{Ag}^+ + \\text{Tl}(s) \\rightarrow \\text{Tl}^+ + \\text{Ag}(s)$$

##### Oxidation potential
To get an **oxidation potential**, reverse **both** the half-reaction **and** the sign of the reduction potential. They have **equal magnitude, opposite sign**. On the MCAT, **reduction** potentials are given by default.

#### The electromotive force
The **standard emf** ($E^\\circ_{cell}$) is the difference in potential between the two half-cells under standard conditions:

$$E^\\circ_{cell} = E^\\circ_{red,cathode} - E^\\circ_{red,anode} \\quad \\text{(Equation 12.3)}$$

:::keyconcept
If you scale a half-reaction by a coefficient to cancel electrons in the net equation, **do not** multiply $E^\\circ_{red}$ by that coefficient. Potential depends on the electrode's **chemical identity**, not the amount of material — so it doesn't change.
:::

> **Worked example.** $E^\\circ_{red}(\\text{Sm}^{3+}) = -2.41\\ \\text{V}$; $E^\\circ_{red}([\\text{RhCl}_6]^{3-}) = +0.44\\ \\text{V}$. For
> $$\\text{Sm}^{3+} + \\text{Rh} + 6\\,\\text{Cl}^- \\rightarrow [\\text{RhCl}_6]^{3-} + \\text{Sm}$$
> Rh is oxidized (anode), $\\text{Sm}^{3+}$ is reduced (cathode):
> $$E^\\circ_{cell} = -2.41 - (+0.44) = -2.85\\ \\text{V}$$
> Negative emf → **electrolytic**. Run in reverse it would be galvanic with $E^\\circ_{cell} = +2.85\\ \\text{V}$.

:::keyconcept
The **sign of $E^\\circ_{cell}$ tells you the cell type**: positive → **galvanic** (spontaneous); negative → **electrolytic** (nonspontaneous). This is the single fastest classification on Test Day.
:::
`
    },

    /* ──────────── 12.3 Electromotive Force and Thermodynamics ──────────── */
    {
      id: 's3', num: '12.3', title: 'Electromotive Force and Thermodynamics',
      goals: [
        'Apply $\\Delta G^\\circ = -RT \\ln K_{eq}$ to calculations of Gibbs free energy or electromotive force',
        'Relate $E^\\circ_{cell}$ to $\\Delta G^\\circ$ via $\\Delta G^\\circ = -nFE^\\circ_{cell}$',
        'Predict $E_{cell}$ given reaction quotients and equilibrium constants using the Nernst equation'
      ],
      recap: `
- **$\\Delta G^\\circ = -nFE^\\circ_{cell}$** — $\\Delta G$ and $E_{cell}$ **always have opposite signs** (note the minus sign).
- **Galvanic:** $E^\\circ_{cell} > 0$, $\\Delta G^\\circ < 0$, $K_{eq} > 1$. **Electrolytic:** $E^\\circ_{cell} < 0$, $\\Delta G^\\circ > 0$, $K_{eq} < 1$. **Concentration (at equilibrium):** $E^\\circ_{cell} = 0$, $K_{eq} = 1$.
- **Nernst equation** corrects emf for **nonstandard** conditions: $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$ (use the $\\log_{10}$ form on Test Day).
- **$\\Delta G^\\circ = -RT \\ln K_{eq}$** links free energy to the equilibrium constant; **$\\Delta G = \\Delta G^\\circ + RT \\ln Q$** gives free energy off standard.
- $Q$ includes **only species in solution** (not pure solids/liquids).
`,
      detail: `
#### Gibbs free energy and emf
The spontaneity criterion is $\\Delta G$. In a cell, the work done depends on the **charge transferred** ($nF$) and the **potential** ($E$). They relate by:

$$\\Delta G^\\circ = -nFE^\\circ_{cell} \\quad \\text{(Equation 12.4)}$$

where $n$ = moles of electrons exchanged, $F$ = Faraday constant, $E^\\circ_{cell}$ = standard emf. Compare to the physics work formula $W = q\\,\\Delta V$: here $nF$ is the charge and $E^\\circ_{cell}$ is the voltage. **If $F$ is in coulombs, $\\Delta G^\\circ$ comes out in joules** (not kJ).

:::bridge
From *MCAT General Chemistry Review* Ch. 6: $\\Delta G > 0$ → **nonspontaneous**; $\\Delta G < 0$ → **spontaneous**. The electrostatic analogy ($W = q\\,\\Delta V$) is in *MCAT Physics and Math Review* Ch. 5.
:::

The minus sign means $\\Delta G^\\circ$ and $E^\\circ_{cell}$ **always have opposite signs**:

| Cell type | $E^\\circ_{cell}$ | $\\Delta G^\\circ$ | Spontaneous? |
|---|---|---|---|
| **Galvanic** | **+** | **–** | Yes |
| **Electrolytic** | **–** | **+** | No |
| **Concentration** (equimolar) | **0** | **0** | At equilibrium |

> **Worked example.** $2\\,\\text{Fe}^{3+} + 2\\,\\text{Cl}^- \\rightarrow 2\\,\\text{Fe}^{2+} + \\text{Cl}_2(g)$ with $E^\\circ_{red}(\\text{Fe}^{3+}) = +0.77\\ \\text{V}$, $E^\\circ_{red}(\\text{Cl}_2) = +1.36\\ \\text{V}$. Here $\\text{Fe}^{3+}$ is reduced (cathode), $\\text{Cl}^-$ oxidized (anode):
> $$E^\\circ_{cell} = 0.77 - 1.36 = -0.59\\ \\text{V} \\quad (\\text{electrolytic})$$
> With $n = 2$: $\\Delta G^\\circ = -nFE^\\circ_{cell} = -(2)(96{,}485)(-0.59) \\approx +120\\ \\text{kJ}$ → nonspontaneous, as expected.

#### Reaction quotients — the Nernst equation
Real cells often deviate from $1\\text{ M}$. The **Nernst equation** corrects emf for **nonstandard** conditions:

$$E_{cell} = E^\\circ_{cell} - \\dfrac{RT}{nF}\\ln Q \\quad \\text{(Equation 12.5)}$$

At $T = 298\\text{ K}$, the constants collapse and the natural log converts to base-ten:

$$E_{cell} = E^\\circ_{cell} - \\dfrac{0.0592}{n}\\log_{10} Q \\quad \\text{(Equation 12.6)}$$

:::expertise
If the Nernst equation appears on Test Day, **use the $\\log_{10}$ version** — natural-log arithmetic by hand is brutal.
:::

The **reaction quotient** for $aA + bB \\rightarrow cC + dD$:

$$Q = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b} \\quad \\text{(Equation 12.7)}$$

Include **only species in solution** — pure solids and liquids (and the electrodes) are omitted. For the Daniell cell, only $\\text{Zn}^{2+}$ and $\\text{Cu}^{2+}$ appear. The emf is read with a **voltmeter**; a **potentiometer** draws no current for a more accurate reading.

> **Worked example (Nernst).** A galvanic cell at $25^\\circ\\text{C}$: $\\text{Cl}_2$ ($E^\\circ_{red} = +1.36\\ \\text{V}$, cathode) vs. $\\text{Fe}$ ($E^\\circ_{red} = -0.44\\ \\text{V}$, anode), with $[\\text{Fe}^{2+}] = 0.01\\ \\text{M}$, $[\\text{Cl}^-] = 0.1\\ \\text{M}$.
> $$E^\\circ_{cell} = 1.36 - (-0.44) = +1.80\\ \\text{V}$$
> Net: $\\text{Fe} + \\text{Cl}_2 \\rightarrow \\text{Fe}^{2+} + 2\\,\\text{Cl}^-$, so $Q = [\\text{Fe}^{2+}][\\text{Cl}^-]^2 = (0.01)(0.1)^2 = 10^{-4}$.
> With $n = 2$: $E = 1.80 - \\dfrac{0.0592}{2}\\log_{10}(10^{-4}) = 1.80 - (0.0296)(-4) \\approx +1.92\\ \\text{V}$ — higher than standard because dilute products favor the forward reaction.

:::bridge
The Nernst equation underlies **resting and depolarized membrane potentials** in biochemistry. Its extension, the **Goldman–Hodgkin–Katz equation** (*MCAT Biochemistry Review* Ch. 8), uses $310\\text{ K}$ and mV, so it looks slightly different from Equation 12.6.
:::

#### Equilibria
From *MCAT General Chemistry Review* Ch. 7, free energy also relates to the equilibrium constant:

$$\\Delta G^\\circ = -RT \\ln K_{eq} \\quad \\text{(Equation 12.8)}$$

Combining the two free-energy expressions:

$$\\Delta G^\\circ = -nFE^\\circ_{cell} = -RT \\ln K_{eq} \\quad\\Longrightarrow\\quad nFE^\\circ_{cell} = RT \\ln K_{eq}$$

So if $n$, $T$, and $K_{eq}$ are known, $E^\\circ_{cell}$ follows directly.

:::expertise
Whether $\\log$ or $\\ln$: a logarithm is **positive when $K > 1$**, **negative when $K < 1$**, and **zero when $K = 1$**.
:::

| $K_{eq}$ | $\\ln K_{eq}$ | $\\Delta G^\\circ$ | $E^\\circ_{cell}$ | Cell type |
|---|---|---|---|---|
| **$> 1$** (products favored) | $> 0$ | **–** | **+** | **Galvanic** (spontaneous) |
| **$< 1$** (reactants favored) | $< 0$ | **+** | **–** | **Electrolytic** (nonspontaneous) |
| **$= 1$** | $0$ | $0$ | $0$ | Equilibrium / concentration cell |

:::keyconcept
If $E^\\circ_{cell}$ is **positive**, $\\ln K_{eq}$ is positive → $K_{eq} > 1$ → equilibrium lies to the **right** (products favored). A concentration cell with equimolar half-cells has $E^\\circ_{cell} = 0$ because there is **no net ionic equation** (both half-cells hold the same ions).
:::

#### Free energy under nonstandard conditions
Finally, $\\Delta G$ off standard conditions:

$$\\Delta G = \\Delta G^\\circ + RT \\ln Q \\quad \\text{(Equation 12.9)}$$

where $\\Delta G^\\circ$ comes from Equation 12.4 or 12.8 and $Q$ is the reaction quotient.
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Electrochemical Cells',
        points: [
          '**Electrochemical cell** = any cell housing a **redox** reaction. **Electrodes** are conductive strips in an electrolyte. The **anode** is always oxidation (attracts **an**ions); the **cathode** is always reduction (attracts **cat**ions).',
          '**Electrons flow anode → cathode**; **current flows cathode → anode** — in every cell type.',
          '**Cell diagram** shorthand: written anode → cathode, e.g. $\\text{Zn}(s)\\,|\\,\\text{Zn}^{2+}\\,||\\,\\text{Cu}^{2+}\\,|\\,\\text{Cu}(s)$. Single line $|$ = phase boundary; double line $||$ = salt bridge.',
          '**Galvanic (voltaic)** cells = **spontaneous** ($\\Delta G < 0$, $E_{cell} > 0$). **Electrolytic** cells = **nonspontaneous** ($\\Delta G > 0$, $E_{cell} < 0$), driven by an external source via **electrolysis**.',
          '**Concentration cells** are galvanic cells with **identical electrodes**; current is driven by a **concentration gradient**, and $E = 0$ once concentrations equalize.',
          '**Charge signs:** galvanic anode **(–)**, cathode **(+)**; electrolytic anode **(+)**, cathode **(–)**.',
          '**Rechargeable batteries** switch between galvanic (discharge) and electrolytic (charge). **Lead–acid** ($\\text{Pb}$ anode / $\\text{PbO}_2$ cathode in $\\text{H}_2\\text{SO}_4$) has **low energy density**; **Ni–Cd** ($\\text{Cd}$ / $\\text{NiO(OH)}$ in $\\text{KOH}$) has higher density and surge current; **NiMH** has largely replaced Ni–Cd (more density, cheaper, less toxic).',
          '**Faraday\'s laws:** chemical change is proportional to moles of electrons. Electrodeposition: $\\text{mol }M = \\dfrac{It}{nF}$, with $1\\ F = 96{,}485\\ \\text{C/mol}\\ e^-$.'
        ]
      },
      {
        section: 'Cell Potentials',
        points: [
          'A **reduction potential** quantifies how badly a species wants to **gain electrons** — the higher, the more it wants to be reduced.',
          '**Standard reduction potentials** ($E^\\circ_{red}$) are measured vs. the **standard hydrogen electrode (SHE)** (defined as $0\\ \\text{V}$) at $298\\ \\text{K}$, $1\\ \\text{atm}$, $1\\ \\text{M}$.',
          '**Standard emf** = difference of reduction potentials: $E^\\circ_{cell} = E^\\circ_{red,cathode} - E^\\circ_{red,anode}$. **Positive → galvanic**; **negative → electrolytic**.',
          'Galvanic: the **more positive** $E^\\circ_{red}$ is the **cathode**. Never multiply $E^\\circ_{red}$ by stoichiometric coefficients — it depends on electrode identity, not amount.'
        ]
      },
      {
        section: 'Electromotive Force and Thermodynamics',
        points: [
          '**$\\Delta G^\\circ$ and $E^\\circ_{cell}$ always have opposite signs:** $\\Delta G^\\circ = -nFE^\\circ_{cell}$. Galvanic → $E^\\circ_{cell} > 0$, $\\Delta G^\\circ < 0$; electrolytic → $E^\\circ_{cell} < 0$, $\\Delta G^\\circ > 0$; concentration cell → both $0$.',
          'The **Nernst equation** relates emf to nonstandard concentrations: $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$ (use the $\\log_{10}$ form at $298\\ \\text{K}$).',
          'Relationship to $K_{eq}$: $nFE^\\circ_{cell} = RT \\ln K_{eq}$. $K_{eq} > 1 \\Rightarrow E^\\circ_{cell} > 0$; $K_{eq} < 1 \\Rightarrow E^\\circ_{cell} < 0$; $K_{eq} = 1 \\Rightarrow E^\\circ_{cell} = 0$.'
        ]
      }
    ],
    mnemonics: [
      '**AN OX / RED CAT:** the **AN**ode is the site of **OX**idation; **RED**uction happens at the **CAT**hode. True for every cell type.',
      '**Electron direction $A \\rightarrow C$:** electrons flow **anode → cathode** (alphabetical order). Conventional current $I$ runs the opposite way, cathode → anode.',
      '**An**ions to the **an**ode, **cat**ions to the **cat**hode — regardless of galvanic, electrolytic, or concentration cell.',
      '**Galvanic vs. electrolytic signs:** "**G**alvanic anode is **negative**" — then flip *every* sign for an electrolytic cell (anode +, cathode –). The external source reverses the charges.',
      '**Galvanic = Good/spontaneous** ($+E_{cell}$, $-\\Delta G$, $K_{eq}>1$); **Electrolytic = Effort needed** ($-E_{cell}$, $+\\Delta G$, $K_{eq}<1$, external source).',
      '**Electrodeposition:** "**C**alculating **M**oles of **M**etal, **I**t is **N**ot **F**un" → $\\text{mol }M = \\dfrac{It}{nF}$.',
      '**Sign-flip rule:** $\\Delta G$ and $E_{cell}$ are **always opposite signs** (remember the minus in $\\Delta G = -nFE$). In a galvanic cell, the "more positive $E^\\circ_{red}$ wins the cathode."'
    ],
    keyConcepts: [
      '**Cell type from sign alone:** $E_{cell} > 0$ / $\\Delta G < 0$ / $K_{eq} > 1$ → **galvanic** (spontaneous, releases energy). The reverse triplet → **electrolytic** (nonspontaneous, needs an external source). Fastest classification on Test Day.',
      '**What stays constant vs. what flips between galvanic and electrolytic:** oxidation@anode, reduction@cathode, electrons anode→cathode, current cathode→anode, anions→anode, cations→cathode are **invariant**; only the **charge signs** of the electrodes flip.',
      '**$E^\\circ_{cell}$ is intensive** — it depends on electrode **identity**, not size or amount. Tripling surface area triples the **current**, not $E^\\circ_{cell}$ or $K_{eq}$. Never scale $E^\\circ_{red}$ by stoichiometric coefficients.',
      '**Three master equations tie it together:** $\\Delta G^\\circ = -nFE^\\circ_{cell} = -RT \\ln K_{eq}$, and the **Nernst** equation $E = E^\\circ - \\dfrac{RT}{nF}\\ln Q$ corrects for nonstandard concentrations (the basis of concentration cells and membrane potentials).'
    ],
    equations: [
      { name: 'Moles of electrons transferred', tex: 'M^{n+} + n\\,e^- \\rightarrow M(s)', note: 'Eq. 12.1 — n electrons reduce one ion to one atom of metal M.' },
      { name: 'Electrodeposition (Faraday)', tex: '\\text{mol }M = \\dfrac{It}{nF}', note: 'Eq. 12.2 — amount plated from current I, time t, electron equivalents n; F = 96,485 C/mol e⁻.' },
      { name: 'Standard cell emf', tex: 'E^\\circ_{cell} = E^\\circ_{red,cathode} - E^\\circ_{red,anode}', note: 'Eq. 12.3 — positive → galvanic, negative → electrolytic. Do NOT scale by coefficients.' },
      { name: 'Free energy from emf', tex: '\\Delta G^\\circ = -nFE^\\circ_{cell}', note: 'Eq. 12.4 — ΔG° and E°cell always have opposite signs.' },
      { name: 'Nernst equation (full)', tex: 'E_{cell} = E^\\circ_{cell} - \\dfrac{RT}{nF}\\ln Q', note: 'Eq. 12.5 — emf under nonstandard conditions.' },
      { name: 'Nernst equation (298 K)', tex: 'E_{cell} = E^\\circ_{cell} - \\dfrac{0.0592}{n}\\log_{10} Q', note: 'Eq. 12.6 — simplified base-10 form; use this on Test Day.' },
      { name: 'Reaction quotient', tex: 'Q = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}', note: 'Eq. 12.7 — include only species in solution.' },
      { name: 'Free energy from K_eq', tex: '\\Delta G^\\circ = -RT \\ln K_{eq}', note: 'Eq. 12.8 — links standard free energy to the equilibrium constant.' },
      { name: 'Free energy (nonstandard)', tex: '\\Delta G = \\Delta G^\\circ + RT \\ln Q', note: 'Eq. 12.9 — ΔG away from standard conditions.' }
    ]
  },

  questions: raw.questions
};
