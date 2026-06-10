# MCAT Study Dashboard

An interactive, content-complete study dashboard covering all seven MCAT disciplines, built from Kaplan MCAT Review materials. One centralized app with a landing page linking to each subject; per-block **reviewed / confidence (1–5) / note** tracking that saves automatically, plus a global **Review Later** view.

**Live site:** https://aidanjmeyers.github.io/MCAT-dashboard/

## Subjects
| Subject | Status |
|---|---|
| 🧬 Biology | ✅ Built — 12 chapters, 38 sections, 130 figures, 180 practice Qs |
| 🧪 Biochemistry | 🔜 Queued |
| ⚗️ General Chemistry | 🔜 Queued |
| 🔬 Organic Chemistry | 🔜 Queued |
| 📐 Physics & Math | 🔜 Queued |
| 🧠 Behavioral Sciences (Psych/Soc) | 🔜 Queued |
| 📖 CARS | 🔜 Queued |

## Per chapter
- **Study Guide** — every section as a block: original textbook figure → high-yield recap → expandable full detail (paragraphs, the book's own Key Concept / Mnemonic / Bridge / Real-World callouts, tables, KaTeX equations). Reviewed checkbox + 1–5 confidence + note on every block.
- **Key Review** — fast recall: equations, mnemonics, key concepts, and the full concept summary.
- **Practice Questions** — Kaplan's discrete practice questions with answers + explanations.

## Stack
Vite + React 18 + Tailwind CSS + KaTeX. Progress persists via `window.storage` (falls back to `localStorage`). Deploys to GitHub Pages via GitHub Actions on every push to `main`.

## Local dev
```bash
npm install
npm run dev
```
