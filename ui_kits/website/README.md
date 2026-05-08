# BreathAI Website — UI Kit

A high-fidelity, click-thru recreation of the lab home page using the BreathAI design tokens. Faithful to the structure of `lab_website/index.html` and refined toward a frontier-lab editorial feel: real serif headlines, the new mark + lockup, tightened spacing, more believable publication / news / people content.

## Structure

| File | What it covers |
|---|---|
| `index.html` | Main entry. Loads React + Babel, mounts `<App/>`. Open this. |
| `data.js` | Sample news, people, publications, projects. Edit to repopulate. |
| `App.jsx` | Root composition. Owns the publications-filter state and section assembly. |
| `Chrome.jsx` | `<Header/>`, `<Footer/>`, sticky-nav active-link sync. |
| `Hero.jsx` | `<Hero/>` — headline, lede, agenda. |
| `Sections.jsx` | `<SignalBand/>`, `<ResearchGrid/>`, `<NewsList/>`, `<People/>`, `<Publications/>`, `<Projects/>`, `<JoinCTA/>`. |

## What's interactive

- Sticky header with smooth-scroll anchors.
- Publication-filter chips switch the visible papers (All / Models / Agents / Evaluation).
- Hover states on buttons + nav links.
- A demo "subscribe" input on the join section that flips to a confirmation chip.

## What's intentionally not built

- Mobile nav drawer (the original CSS handles it; we focus on the desktop reading view).
- Real backend, real fetch, real auth.
- Detail pages for individual papers / projects.

## How to use as reference

Pull single components into your prototype. They're small and read top-to-bottom. The whole kit is < 500 LoC.
