// CARS Chapter 12 — Effective Review of CARS. Strategy chapter (not science content).
// Figures, section titles, and (empty) questions come from ch12.json; the
// recap/detail markdown is authored here. CARS = strategy: questions: [].
import raw from './ch12.json';

const S = raw.sections;
const fig = (si, fi) => S[si].figures[fi];     // -> { src, alt, caption }

export default {
  id: 12,
  title: 'Effective Review of CARS',
  subtitle: 'Learning from your mistakes · post-phrasing (thinking like the testmaker) · improving timing · building endurance · enhancing vocabulary',

  blocks: [
    /* ───────────────── 12.1 Learning from Your Mistakes ───────────────── */
    {
      id: 's1', num: '12.1', title: 'Learning from Your Mistakes',
      goals: [
        'Build and maintain a Why I Missed It Sheet (WIMIS) to log every incorrect question',
        'Write "Why I Missed It" reasons that are both specific and generalizable',
        'Cross-reference question type against topic/discipline to find patterns and target your study plan',
        'Use Wrong Answer Pathologies to recognize and avoid the traps that repeatedly sway you'
      ],
      recap: `
- **Review is where the score gets built.** After practice and Full-Lengths, analyze **each missed question** — not the section as a whole.
- Keep a **Why I Missed It Sheet (WIMIS)**: four columns — **question number · question type · topic/discipline · Why I Missed It.**
- The **"Why I Missed It"** entry must be both **specific** (names the exact thinking flaw) *and* **generalizable** (transfers to future questions).
- **Cross-reference** the question-type column against the topic/discipline column to spot **patterns** (e.g., always missing *Reasoning Within the Text*, or only in *Anthropology*).
- Note the **Wrong Answer Pathologies** you keep falling for — knowing your traps is half the fix.
`,
      detail: `
#### Why review matters
By this point you have read about how to approach CARS, practiced, and maybe finished one or more **Full-Length Exams**. Now you reflect on performance and adjust your plan around your **personal test-taking pathologies** — identifiable patterns in past errors that guide future studying.

Looking at an entire CARS section at once is overwhelming. Instead, **analyze each question you answered incorrectly, one at a time.**

#### Why I Missed It Sheets (WIMIS)
A **Why I Missed It Sheet (WIMIS)** is a running document that manages the review process and keeps a clear record of performance over time. Build it with **four columns**:

1. **Question number** — list every item you missed on the test.
2. **Question type** — classify by the Kaplan question types (from the three preceding question-type chapters).
3. **Topic / discipline** — the academic discipline of the passage (e.g., Music, Art, Psychology).
4. **Why I Missed It** — the *specific* reason you lost the points.

| Question Number | Question Type | Topic / Discipline | Why I Missed It |
|---|---|---|---|
| Full-Length X, #12 | **Detail** | Music | Misinterpreted the question stem, leading me to the wrong paragraph for information. |
| Full-Length X, #21 | **Strengthen–Weaken (Within)** | Art | Chose evidence that would strengthen the *critics'* point of view, but the question wanted the *author's*. |
| Full-Length X, #38 | **Inference** | Population Health | Chose an answer that *may* be true but doesn't *have* to be — Inference answers must be true based on the passage. |
| Full-Length X, #53 | **Main Idea** | Psychology | Answer was too narrow — described only two paragraphs, not the whole passage. |

*Table 12.1 — Sample Why I Missed It Sheet (WIMIS).*

:::bridge
Need help identifying the **question type** for your WIMIS? Review the question-type chapters of *MCAT CARS Review* (Chapters 9, 10, and 11) for thorough coverage of each of the eight major types.
:::

#### Make the "Why I Missed It" specific AND generalizable
The **fourth column is the most important.** Do **not** write generic excuses like *"I didn't understand"* or *"careless mistake"* — they give zero insight. Diagnose the exact thinking flaw, then phrase it so it **transfers to future questions.** Ask yourself:

- Did I **read the question wrong**?
- Did I **miss a major point** in the passage?
- Did I fail to see the **relevance** of a detail, or how new information pertained to the passage?

| ❌ Bad (too specific, won't transfer) | ✅ Good (specific *and* generalizable) |
|---|---|
| Missed it because the choice said *Beowulf* was written by an aristocrat, but the passage said the author was only *"probably"* a member of the royal court. | Missed it because the answer choice **stated something as fact that the author did not.** |
| Thought the question asked for the author's opinion on Mendelssohn's work, but it asked for his opinion on the *critics* of that work. | **Confused which opinion the question stem was asking for.** |
| Recognized *"unmoved mover"* from paragraph 3, but the answer came from the *"Central Headquarters"* sentence in paragraph 4. | **Failed to see how paragraphs fit together** before moving to the questions. |

#### Use patterns to build the plan
When reviewing your WIMIS, **compare the question-type column to the topic/discipline column** to narrow your future study scope. Look for a recognizable pattern:

- Are you repeatedly missing **Reasoning Within the Text** questions?
- Or only missing them in **Anthropology** passages?

Use that pattern to decide **which passage varieties to drill** and **which chapters to reread.** Move forward with a plan that specifically supports your **areas of opportunity.**

##### If you keep misreading questions
Misreading or misinterpreting stems is **extremely common** and a frequent cause of wrong answers. On review, if you find yourself shaking your head because you simply *misread* what was asked, you are likely racing through stems and starting to answer before you know the question. The fix: **force yourself to reword a difficult stem** until it's crystal clear what it asks. This is **not wasted time** — clarity on *the question behind the question* lets you Plan faster, Execute more efficiently, and Answer more accurately in **less** time overall.

:::expertise
Establishing the **question type** and finding clues about *where to research* are core to the **Assess and Plan** steps of the Kaplan Method for CARS Questions. Slow down on the stem; the time spent there is repaid many times over.
:::

##### Triage repeated question types and track your traps
If your WIMIS shows you keep missing the **same question type**, **triage** it:

1. **Reread the appropriate chapter** so you recognize the type faster.
2. Recall that **each question type has an associated strategy** for the task it demands.
3. Note the **Wrong Answer Pathologies** of the wrong choices you picked — simply knowing your favorite traps helps you sidestep them. *(E.g., if you often pick **Out of Scope** answers on Main Idea questions, ask "Is this truly within the passage, or does it bring in something else?" before finalizing.)*

:::bridge
Knowing your **personal test-taking pathologies** is essential to improving your score. Beyond question types, topics, and how you read stems, review Kaplan's **Wrong Answer Pathologies** — **Faulty Use of Detail, Out of Scope, Opposite, and Distortion** (Chapter 8 of *MCAT CARS Review*).
:::

:::realworld
In medical school you'll attend **morbidity and mortality (M&M) conferences**, where physicians review clinical errors and patient complications to find the **root cause** and fix it. A WIMIS is the same discipline applied to your exam: **you can only improve if you know what you're doing wrong.**
:::
`
    },

    /* ─────────── 12.2 Thinking Like the Testmaker: Post-Phrasing ─────────── */
    {
      id: 's2', num: '12.2', title: 'Thinking Like the Testmaker: Post-Phrasing',
      goals: [
        'Use post-phrasing to articulate why correct answers are right AND why wrong answers are wrong',
        'Reword question stems in your own words to decode what each is truly asking',
        'Write out explicit predictions before evaluating answer choices',
        'Practice post-phrasing on fresh passages to sharpen recognition of Wrong Answer Pathologies'
      ],
      recap: `
- **Post-phrasing** = explaining *both* why the correct answer is right *and* why every wrong answer is wrong.
- It is the cure for the classic trap: *"I narrow it to two choices and always pick the wrong one."*
- Start from your **WIMIS**: note the correct answer, then **reword the stem in your own words** and write a focused **prediction**.
- Then flip focus to the **wrong answers** — name the **Wrong Answer Pathology** or logical flaw in each.
- Can also be run on **fresh passages** (answers known in advance) to train pattern recognition before Test Day.
`,
      detail: `
#### What post-phrasing is
With **post-phrasing**, you go over **both** why incorrect answers are wrong **and** why correct answers are right. It is especially powerful for the classic dilemma:

> *"I can usually narrow it down to two answer choices — and then I always go for the wrong one!"*

#### The post-phrasing process (starts from your WIMIS)
1. From your completed **WIMIS**, identify each question you missed and **note the correct answer.**
2. **Reword the stem in your own words** — write it on scratch paper or in a word processor. The goal of this first step is **decoding what the stem is actually asking you to do.**
3. **Determine the question type** and state (out loud or in writing) the appropriate **Plan** for that type.
4. **Execute the Plan** and **write out your prediction** for the correct response.

:::expertise
Writing the prediction down is essential. Many students find that a **nebulous, poorly focused prediction** is exactly what keeps them from Answering the question. The more you practice writing predictions during post-phrasing, the more **automatic** predicting becomes on Test Day.
:::

So far this is just a **deliberate, regimented run of the Kaplan Method for CARS Questions.** But because you already know the correct answer, the end goal shifts.

#### Turn your attention to the wrong answers
Once the prediction is on paper, stop trying to match it and instead **diagnose every incorrect choice.** For each wrong answer, ask:

- Does it **fail to match my prediction**?
- Does it carry a common **Wrong Answer Pathology**?
- Are there **subtle flaws in logic or reasoning** that misrepresent the author's argument?

Writing an explanation for each wrong answer reveals the **correlation between questions and correct answers**, and builds your **reasons for eliminating wrong answers** on future questions.

#### Post-phrasing on fresh passages
Post-phrasing also works as a drill to sharpen **Wrong Answer Pathology** recognition on passages you haven't seen. Follow these steps:

1. **Find a fresh CARS passage** from your Kaplan resources, along with its explanations.
2. **Pre-select all the correct answers** — circle them and set them aside. Do **not** read the explanations yet.
3. **Outline the passage** as you normally would.
4. Work the questions **in a fundamentally different way**: the goal is **not** to find the right answer (you already have it) but to **reason why each wrong answer is wrong.** Read the correct answer to confirm you understand it, then spend most of your time **classifying the wrong-answer types.**
5. **Compare your reasoning to the official explanations** for each incorrect choice. Note any **major omissions or discrepancies** prominently.

#### The payoff
It won't take long before you recognize the correct answer and think *"this one just feels right."* Having concentrated on **identifying wrong answers**, the patterns and subtle flaws become more pronounced. Post-phrasing **expands your awareness of how the test is written**, refines your approach to passages and questions, and makes you better prepared for Test Day. The more you practice, the **closer the correspondence** between your post-phrasing notes and Kaplan's explanations.

:::bridge
Alongside **Wrong Answer Pathologies**, review the **Signs of a Healthy Answer** (Chapter 8 of *MCAT CARS Review*): appropriate **scope**, **agreement with the author**, and **"hedging"** language that creates weaker, safer claims.
:::

:::mnemonic
**Post-phrasing = "two-sided" review.** Don't just confirm the **right** answer — prosecute the **wrong** ones. If you can't say *why* each distractor dies, you haven't finished reviewing the question.
:::
`
    },

    /* ─────────────────── 12.3 Improving Your Timing ─────────────────── */
    {
      id: 's3', num: '12.3', title: 'Improving Your Timing',
      goals: [
        'Apply the CARS arithmetic: 90 minutes · 9 passages · 53 questions',
        'Aim for ~4 minutes reading/Outlining and ~1 minute per question (≈9–11 min per passage set)',
        'Pace by checking the clock at predetermined checkpoints rather than after every question',
        'Use per-question timing data to guide now-or-later triage decisions'
      ],
      recap: `
- **The CARS arithmetic:** **90 minutes · 9 passages · 53 questions** → ~**10 min/passage**, ~**1 min/question.**
- Target ~**4 minutes** to **Read + Outline** a passage; that leaves ~54 minutes for the 53 questions.
- A passage set runs **9–11 minutes** (most passages have **5–7** questions; rarely 4 or 8).
- **Don't clock-watch every question.** Check the clock at **fixed checkpoints** — start of passages **3, 5, 7, 9** (≥ **70, 50, 30, 10** min remaining).
- **Commit to a passage once you start it**; skip *before* beginning, never mid-passage.
`,
      detail: `
#### The CARS arithmetic
Clock management matters in every section, but CARS timing is its own beast. Three basic facts:

- The section **lasts 90 minutes.**
- There are **9 passages.**
- There are **53 questions.**

All points come from **answering questions**, so protect question time. As a rule of thumb:

| Activity | Target time | Reasoning |
|---|---|---|
| **Read + Outline one passage** | **~4 minutes** | 9 passages × 4 min = **36 min** of reading |
| **Each question** | **~1 minute** | 90 − 36 = 54 min ÷ 53 questions ≈ **1 min each** |
| **Whole passage set** | **9–11 minutes** | Varies because sets have **5–7 questions** |

:::expertise
Most passages carry **five to seven** questions, but there have been passages with as **few as four** or as **many as eight.** This shouldn't change your approach — though, all else equal, an **eight-question passage gives more points for the same reading**, a nice efficiency.
:::

#### Pacing guidelines — check the clock at fixed points
Forcing *exactly* 4 minutes per passage and 1 minute per question is **counterproductive**: you'd waste time glancing at the clock and **spike your anxiety** on any question that runs long. Instead, **check your timing only at a few predetermined points.**

**Recommendation: check the clock after every *other* passage.** If each passage set takes ~10 minutes, you should be no more than ~20 minutes deeper each checkpoint. Jot down the time remaining as you **start passages 3, 5, 7, and 9:**

| Starting passage | Time remaining should be **at least** |
|---|---|
| **Passage 3** | **70 minutes** |
| **Passage 5** | **50 minutes** |
| **Passage 7** | **30 minutes** |
| **Passage 9** | **10 minutes** |

If timing drifts off-course, note **which passages** caused trouble during review — *could you have triaged them for later and answered more questions correctly in the time left?*

##### Don't jump between passages
This approach leaves **little cushion** for returning to earlier passages, and that's intentional: jumping around is far less viable in CARS than in the science sections. Each CARS passage is **500–600 words** (science passages can be under half that), so re-reading to re-orient is expensive.

- **Skip** a passage you decide in the **Scan** step will take too long — *before* you start it.
- **Never** abandon a passage **mid-stream** to come back later. **Once you commit to a passage, finish it.**

#### Managing question timing
Splitting time between reading and answering is tricky. Online resources **record time spent per question** (click into each question when you start it for accurate data). Note that the **first question of each passage absorbs the Reading + Outlining time:**

| Question within the set | Target |
|---|---|
| **First question** (includes Read + Outline) | within **5 minutes (300 seconds)** |
| **Every subsequent question** | close to the **~1-minute** mark |

:::expertise
If a ticking countdown spikes your anxiety, **"time up"** instead — count *upward* from zero with a phone/stopwatch to see how long each passage and question takes. **Lap functions** are great for logging per-question time. This method works best with **only one or two passages at a time.**
:::

#### Turn timing data into triage
Once you know **which passage and question types take you longest**, combine that with your **WIMIS** to guide **now-or-later** decisions in the first step of each method (**Scan** for passages, **Assess** for questions):

- **Do your easiest passages first** to get *ahead* on the timing curve.
- **Save the toughest questions for the end** of each set — added familiarity with the passage makes them easier, and because questions often repeat a theme, you may **find a hard question's answer while working an easier one** later in the set.

:::mnemonic
**Checkpoints, not the second hand:** memorize **"70-50-30-10"** at passages **3-5-7-9.** Glance at the clock four times, not fifty.
:::
`
    },

    /* ──────────────────── 12.4 Building Endurance ──────────────────── */
    {
      id: 's4', num: '12.4', title: 'Building Endurance',
      goals: [
        'Treat MCAT prep like marathon training — build study stamina progressively',
        'Practice in long sessions that simulate the 6 hour 15 minute Test Day experience',
        'Use 90-minute CARS blocks to mirror the real section length'
      ],
      recap: `
- **MCAT prep is a marathon, not a sprint** — you can't cram short sessions and expect to last on Test Day.
- Studying only in **30- or 60-minute** chunks won't build the stamina a Full-Length demands.
- Periodically hold **long study/practice sessions** to simulate **6 hours 15 minutes** of testing.
- For CARS specifically, practice in **90-minute increments** to mirror the real section length.
`,
      detail: `
#### Prep is a marathon
Preparing for the MCAT is like **training for a marathon.** You can't run 1–2 miles a day for two months and then succeed at a **26.2-mile** race. Marathoners **vary their distance and build up**, routinely running long in preparation for race day. Your studying should do the same.

#### Build stamina deliberately
Ask yourself: **how often and for how long are you studying?**

- If you only ever study in **30- or 60-minute increments**, you may **not have built the endurance** needed when you sit down for a full Full-Length.
- Beyond regular practice, you must **simulate the Test Day experience** of concentrating for **6 hours and 15 minutes** of testing time.
- **Gear up** for practice tests — and Test Day — by **periodically holding long study and practice sessions.**

:::expertise
When working on CARS, study in **90-minute increments** to mimic the exact amount of time you'll have for the section. Training at the real duration makes the real thing feel routine.
:::

:::mnemonic
**Train the distance, not just the steps.** Short daily reps build skill; **long sessions build the stamina** that keeps that skill sharp into hour six of Test Day.
:::
`
    },

    /* ─────────────────── 12.5 Enhancing Your Vocabulary ─────────────────── */
    {
      id: 's5', num: '12.5', title: 'Enhancing Your Vocabulary',
      goals: [
        'Build a strong academic vocabulary across the humanities and social sciences',
        'Set up a regimented daily reading plan using academic sources',
        'Keep a personal vocabulary list of unfamiliar words defined in your own words',
        'Use academic reading to practice Outlining and critical analysis of arguments'
      ],
      recap: `
- CARS needs **no outside content**, but a **strong vocabulary** and comfort with **academic writing** are major assets.
- **Read consistently** to widen sight-vocabulary, raise reading speed, and become a more efficient reader.
- A **regimented reading plan** — ~**20 minutes/day** (about two passages' worth) — builds skill in spare time.
- **Mix humanities + social sciences**; use your **WIMIS** to target the disciplines that slow you down.
- **Look up unfamiliar words**, define them **in your own words**, and review your list periodically.
`,
      detail: `
#### Does CARS really need vocabulary?
The AAMC says there's **no outside content required** for CARS — but that's not 100% accurate. You may meet a question with an element of **common knowledge** (e.g., the number of days in a week). Very few questions hinge on **jargon definitions**, yet a **strong vocabulary** is a tremendous asset, and growing comfortable with **academic writing** across disciplines helps regardless.

:::bridge
You won't be expected to define jargon from outside knowledge, but **Definition-in-Context** questions hinge on determining a word's meaning **from the passage itself** (Chapter 9 of *MCAT CARS Review*).
:::

The **Kaplan and AAMC Full-Length Exams** are the best source of CARS-style passages. Students who want to go further can practice with **outside reading.**

#### A regimented reading plan
The **more you read, the stronger your comprehension** and the **faster and more efficient** a reader you become — you recognize more words by sight and spend less time deciphering. Read on a **consistent basis** to build reading speed and maneuver swiftly through passages.

- Set a **regimented schedule** of **at least 20 minutes a day** — just enough for about **two passages** at the pacing targets above.
- Or keep a **mini-library** of reading handy (a list of links on your phone) for the surprising amount of time spent **waiting** — for a friend, before class, in a hallway — that can be used to sharpen reading.

##### Choose materials like Test Day
Simulate the variety of Test Day with a **blend of humanities and social sciences.** Use your **WIMIS** to find the passage types that cause the most confusion or slow you down, and **read those types in particular** — familiarity with their **jargon and conventions** makes them less intimidating. Good sources for academic journal articles:

| Source | URL |
|---|---|
| **JSTOR** | jstor.org |
| **Oxford Journals** | academic.oup.com/journals |
| **Google Scholar** | scholar.google.com |
| **Project MUSE** | muse.jhu.edu |
| **Directory of Open Access Journals** | doaj.org |
| **Sage Journals** | journals.sagepub.com |

#### Keep a vocabulary list
Whenever you hit a word you don't recognize, **stop, look it up, and write its definition in your own words.** Keep a **running list** and review it periodically. As your vocabulary expands, you **recognize or infer meanings faster**, improving efficiency both in **Reading/Outlining** the passage and in **tackling stems and answer choices.**

##### Learn themes, not just words
Beyond definitions, get acquainted with the **major themes and concepts distinctive to each humanity and social science** on CARS. Familiarity lets you **glean more** from a passage and **read faster** when the text repeats something you already know.

:::keyconcept
**Don't over-import.** Never bring in ideas the passage doesn't include — that's exactly how **Out of Scope** wrong answers trap you. Background familiarity is for *speed and comfort*, not for supplying facts the passage never states. With only nine passages, you're unlikely to have read the exact scenario, but **very likely** to have read about **similar topics.**
:::

#### Reading builds reasoning, too
Any academic reading forces you to **think critically** about the author's ideas. Just as in CARS, try **Outlining a few paragraphs** of an academic article and focus on the **argument's structure**:

- **What conclusion** does the author want the audience to reach?
- **What evidence** supports that conclusion?
- **Are there flaws** in the author's logic?

**Focused, regular reading** bolsters reading comprehension, reasoning skills, and comfort with academic texts — preparing you for the challenges CARS brings.

:::mnemonic
**Read wide, read daily, read your weak spots.** Twenty minutes a day across **humanities + social sciences** — and lean into the disciplines your **WIMIS** says you fear most.
:::
`
    }
  ],

  keyReview: {
    conceptSummary: [
      {
        section: 'Learning from Your Mistakes',
        points: [
          'Reflect on practice and Full-Length performance to identify your **personal test-taking pathologies** — patterns in past errors.',
          'Keep a **Why I Missed It Sheet (WIMIS)** with four columns: **question number · question type · topic/discipline · Why I Missed It.**',
          'Make each "Why I Missed It" reason both **specific** (the exact flaw) and **generalizable** (transfers to future questions) — never "careless mistake."',
          'Cross-reference **question type vs. topic/discipline** to find patterns; use them to choose passages to drill and chapters to reread.',
          'Track the **Wrong Answer Pathologies** (Faulty Use of Detail, Out of Scope, Opposite, Distortion) you repeatedly fall for.'
        ]
      },
      {
        section: 'Thinking Like the Testmaker: Post-Phrasing',
        points: [
          '**Post-phrasing** = explaining both why the right answer is right and why each wrong answer is wrong.',
          'Cures the "narrow it to two and pick the wrong one" trap by training **why distractors die.**',
          'Process: from the WIMIS, note the correct answer → **reword the stem** → determine type and Plan → **write a prediction** → diagnose each wrong choice.',
          'Run it on **fresh passages** (pre-select correct answers, then reason out the wrong ones) to build pathology recognition, and compare against official explanations.'
        ]
      },
      {
        section: 'Improving Your Timing',
        points: [
          'CARS arithmetic: **90 min · 9 passages · 53 questions** → ~**4 min** to Read/Outline, ~**1 min/question**, **9–11 min** per set.',
          'Pace with **fixed checkpoints**, not constant clock-watching: at passages **3-5-7-9**, expect ≥ **70-50-30-10** minutes left.',
          'Aim to finish the **first question of a set within 5 minutes** (it absorbs the reading time); subsequent questions ~1 min.',
          '**Skip before starting, never mid-passage**; use per-question timing + WIMIS to triage easy passages first and tough questions last.'
        ]
      },
      {
        section: 'Building Endurance',
        points: [
          'MCAT prep is a **marathon** — build stamina progressively, don\'t cram short sessions.',
          'Periodically hold **long sessions** simulating the **6 hour 15 minute** Test Day.',
          'For CARS, practice in **90-minute increments** to match the real section length.'
        ]
      },
      {
        section: 'Enhancing Your Vocabulary',
        points: [
          'CARS needs **no outside content**, but a strong vocabulary and comfort with academic writing are major assets.',
          'Follow a **regimented reading plan** (~20 min/day) blending **humanities and social sciences**; target weak disciplines via your WIMIS.',
          'Keep a **vocabulary list** — define new words in your own words and review periodically.',
          'Use academic reading to practice **Outlining** and analyzing argument structure (conclusion, evidence, logical flaws) — but never import Out-of-Scope ideas.'
        ]
      }
    ],
    mnemonics: [
      '**WIMIS = 4 columns:** **N**umber · **T**ype · **T**opic · **W**hy I Missed It. The "Why" must be **specific *and* generalizable** — never "careless mistake."',
      '**Post-phrasing is two-sided:** confirm why the **right** answer is right, then **prosecute** why each **wrong** answer is wrong. If you can\'t kill every distractor, you haven\'t finished reviewing.',
      '**Timing checkpoints "70-50-30-10":** at the start of passages **3, 5, 7, 9** you should have at least 70, 50, 30, 10 minutes left.',
      '**"4 + 1":** ~**4 minutes** to Read/Outline a passage, ~**1 minute** per question; first question of a set ≤ **5 minutes (300 s)**.',
      '**Skip before, never during:** triage a passage out in the **Scan** step, but once you **commit, finish it** — no mid-passage jumping.',
      '**Train the distance:** short daily reps build skill; **long 90-minute CARS blocks** build the endurance to keep it sharp on Test Day.',
      '**Read wide, daily, weak-spots-first:** ~20 min/day across humanities + social sciences, leaning into the disciplines your WIMIS flags.'
    ],
    keyConcepts: [
      '**Review, not just volume, builds the score.** Analyze every missed question with a WIMIS; patterns across question type and discipline turn errors into a targeted study plan.',
      '**Post-phrasing rewires how you read answers** — by forcing you to articulate why distractors are wrong (their Wrong Answer Pathologies), the correct answer starts to "feel right" faster.',
      '**Master pacing through checkpoints and triage, not clock-watching.** Know the 4+1 targets and the 70-50-30-10 checkpoints; commit to passages once started and save hard questions for the end.',
      '**Stamina and vocabulary are trainable.** Long simulated sessions build endurance; consistent, varied academic reading builds the sight-vocabulary and comfort that make CARS faster — without importing Out-of-Scope content.'
    ],
    equations: []
  },

  questions: []
};
