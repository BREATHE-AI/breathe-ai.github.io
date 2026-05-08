# BreathAI Design System

Visual + content system for **BreathAI**, an emerging NLP / LLM / agents research lab forming at **Nanyang Technological University (NTU), Singapore**. Three members at the time of writing, growing fast.

This system exists to make the lab's surfaces — the public website, recruiting pages, papers, decks, repo READMEs, talks — feel like one cohesive, frontier-grade research outfit, while staying lightweight enough that a small team can keep it consistent without a designer in the loop.

> **Positioning, in one line.** A serious, open NLP lab — language models that reason, agents that work, evaluation with teeth, and language beyond English.

---

## Sources used to build this system

- **`lab_website/` (mounted, read-only)** — initial website draft. Static HTML / CSS / JS, no build step. The honest baseline for the lab's voice and visual instincts.
  - `lab_website/index.html` — full page markup
  - `lab_website/assets/css/styles.css` — original token list (`--paper`, `--ink`, `--signal`, `--coral`, `--violet`, `--amber`)
  - `lab_website/assets/js/site.js` — content-rendering helpers
  - `lab_website/assets/data/*.json` — news, people, publications, projects
  - `lab_website/README.md` — deploy + content workflow
- **External research** — visual conventions of public, frontier-lab home pages (no copying, just shape: editorial typography, restrained color, big serif display, numbered research agendas, paper-feed layouts).

---

## What's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent-Skill manifest so this folder works as a portable skill. |
| `colors_and_type.css` | Design tokens — color, type scale, spacing, radii, shadows, semantic CSS classes. |
| `fonts/` | (none — system uses Google Fonts via CDN; see Type section) |
| `assets/` | Logos, marks, sample backgrounds, sample portraits. |
| `preview/` | Spec cards rendered for the Design System tab. Not for production. |
| `ui_kits/website/` | High-fidelity React-in-HTML recreation of the lab website. |

---

## Content fundamentals

The lab's voice is **first-person plural, plain English, low buzzword density, mildly editorial**. It reads like a serious senior researcher who has nothing to prove — confident sentences, no hedging, no hype.

### Tone

- **Confident, not boastful.** "A new research lab for language intelligence, reasoning systems, and useful agents." Not "the next-generation revolutionary AI lab redefining intelligence."
- **Concrete, not abstract.** "Models with stronger planning, evidence use, and verifiable traces." Not "cutting-edge cognitive architectures."
- **Measured.** No exclamation marks. No "🚀". No "supercharge", "unleash", "redefine", "revolutionize", "next-gen".
- **First-person plural** when speaking as the lab ("we are interested in students who…"). **Third-person** in marketing copy ("BreathAI is being formed at NTU…").

### Casing

- **Sentence case** for most headings: "Built around questions, not buzzwords."
- **Title Case** is reserved for proper nouns and product names: "BreathAI", "Lab Notes", "Open Work".
- **ALL-CAPS with letterspacing (~0.12em)** is reserved for eyebrows, kickers, and tiny metadata labels: `RESEARCH`, `NOW`, `JOIN`.
- The brand is always **`BreathAI`** — one word, capital B, capital A, capital I. Never `BreathAi`, `Breath AI`, `BREATHAI`, `breath.ai`.

### Punctuation + casing micro-rules

- **Periods on sentence-style headings** are fine when the heading is a complete thought: "A lab designed to compound talent." Headlines that are noun phrases get no period: "Papers and artifacts".
- **Em dashes** with no surrounding spaces: `language—and the systems built on it`.
- **Middle dot (·)** to chain metadata: `Nanyang Technological University · NLP · LLM Agents`.
- **Numbered agendas use `01–04`** (zero-padded two digits), not `1–4`.
- **Letters `A–D`** index the four research pillars in card grids.

### Vibe

Imagine the home page of a small, well-funded research lab where the PI cares about typography. Imagine a printed annual report from a university press. Imagine `arxiv` if it had been designed by someone with taste. That's the room we're aiming for.

### What we don't do

- **No emoji.** Anywhere. Replace with numerals (`01`), letters (`A`), or icon glyphs.
- **No "AI-slop" gradient blobs**, glassy purple cards, or "supercharge your workflow" copy.
- **No stock photos of confident people in glass meeting rooms.** Portraits are real lab members or initials-on-paper placeholders.
- **No "Get started"-style CTA buttons.** We say "Explore work", "Read the paper", "Join the lab", "Contact BreathAI".
- **No corporate "Our Mission" panels.** The four-pillar agenda does that work.

### Sample copy

Use these as drop-in if you're stuck:

- Eyebrow → `Nanyang Technological University · NLP · LLM Agents`
- Lede → `A new research lab for language intelligence, reasoning systems, and useful agents.`
- Body → `BreathAI is being formed at NTU to pursue rigorous, open, and ambitious NLP research: from foundation models and evaluation to agentic systems that can collaborate, learn, and act with care.`
- Empty-state → `Papers will be added as they are released.`
- Recruiting → `We are interested in students and collaborators who care about clear thinking, strong systems, and research taste.`

---

## Visual foundations

A paper-and-ink editorial system. Generous whitespace, hairline 1px rules, big confident serif headlines, restrained accent color used as a single signal at a time.

### Color

The palette is built around a **near-white paper** background and a **near-black ink** foreground, with one **signal teal** for live/positive elements, one **coral** as the secondary accent, plus **violet** and **amber** held in reserve for taxonomy use (e.g. tags, status pips).

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBFBFB` | Page background. Always the dominant surface. |
| `--paper-soft` | `#F1F3F2` | Section backgrounds for visual rhythm (research, publications). |
| `--paper-ivory` | `#F6F2EA` | Optional warmer alt surface for editorial blocks (decks, hero variants). |
| `--ink` | `#111113` | Primary type, primary buttons, hard rules at scale. |
| `--ink-soft` | `#3F4247` | Body copy and de-emphasized type. |
| `--muted` | `#72777F` | Eyebrow metadata, captions, dates. |
| `--line` | `#DEDFDD` | All hairline rules, card borders, 1px dividers. |
| `--signal` | `#00A887` | Live elements: brand mark, link underlines on dark, eyebrow color (mid). |
| `--signal-dark` | `#006D5B` | Eyebrow color on light, accessible link text on paper. |
| `--coral` | `#E4583F` | Numbered indices (01, 02), dates / years in publications. Secondary accent. |
| `--violet` | `#6157D8` | Reserved — agent/tooling taxonomy tags. |
| `--amber` | `#B47700` | Reserved — status labels (`PLANNED`, `DRAFT`). |

**Rules.**
- One signal at a time per region. Don't pile teal + coral + violet on a single card.
- Body copy is `--ink-soft`, not `--ink`. Reserve `--ink` for headings, buttons, and high-emphasis labels.
- The dark band (`.join-section`) inverts: `--ink` becomes the surface, white becomes the foreground, signal teal stays as the eyebrow color (lightened to `#7DF0D0` for contrast).
- No tonal gradients except the brand mark itself. No drop-shadow color outside the shadow tokens below.

### Typography

| Token | Stack | Use |
|---|---|---|
| `--font-sans` | `"Geist"`, system | Body, UI, navigation, buttons, captions. |
| `--font-serif` | `"Source Serif 4"`, fallback `"Iowan Old Style"`, Georgia | Display headlines, hero H1, section H2, person photo initials, publication years. |
| `--font-mono` | `"Geist Mono"`, ui-monospace | Code, tokens, deploy snippets, citations. |

**Substitutions flagged.** The original draft used `"Iowan Old Style"` (Apple-only) and `system-ui`. We've substituted **Source Serif 4** and **Geist** as licensed Google Fonts with similar visual character. If the lab has access to a paid display family (e.g. Söhne, Tiempos, GT America), drop those in by editing only the `--font-*` variables in `colors_and_type.css`.

**Type rules.**
- Display H1 / H2 are **serif**, weight 600–650, line-height 0.86–0.95, letter-spacing 0.
- All other text is **sans**, weight 400–760.
- Eyebrow / kicker / metadata: 0.72rem, weight 800–850, letter-spacing 0.12em, uppercase.
- `text-wrap: balance` on H1 / H2; `text-wrap: pretty` on body paragraphs.

### Spacing + layout

- **Page gutters**: `4vw` (responsive). Never less than `1rem` on mobile.
- **Section padding-y**: `clamp(5rem, 8vw, 8.5rem)`. Big.
- **Hero is two-column** on desktop (`1fr 280–430px`) and collapses on `1100px`.
- **Card grids**: 4-up on desktop, 2-up on tablet, 1-up on mobile.
- **Gaps inside cards**: 1.0–1.3rem padding. Cards are deliberately roomy.

### Borders + radii

- **Hairline 1px lines** are the system's primary structural device. They appear on cards, hero agenda, signal-band, filter bar, footer, and section dividers.
- **Card radius** is `8px` everywhere. Pills (filter buttons, tag chips, person-photo init capsule) are `999px`.
- **No 16px+ pillowy cards**. No 4px sharp cards. Just 8.

### Shadow + elevation

The system is mostly flat. There is exactly **one** elevation token, used sparingly (sticky overlays, modal-equivalents):

```
--shadow: 0 24px 80px rgba(17, 17, 19, 0.12);
```

Cards use a 1px border, never a shadow. Buttons lift on hover with `transform: translateY(-1px)` — no shadow change.

### Backgrounds

- **Default**: flat `--paper`. No noise, no texture, no gradient.
- **Section variant**: flat `--paper-soft` for `research-section` and `publication-section` to create a stripe rhythm down the page.
- **Inverted band**: flat `--ink` for the join-section / CTA.
- **No full-bleed photography** in the baseline. If photography is added later (lab portraits, conference shots), it sits inside a 1px-bordered card, color-graded warm-neutral to match the paper tone.
- **Brand mark** is the *only* place tonal gradients appear, and even there it is small (28×28).

### Animation + motion

Restrained. The lab is not a SaaS landing page.

- **Duration**: 160–200ms for state changes (hover, focus). 220ms for nav-toggle.
- **Easing**: `ease` (default) or `cubic-bezier(0.2, 0.8, 0.2, 1)` for subtle entrances. No bounces.
- **Hover**: buttons translate `-1px` Y; nav links draw a 2px teal underline left-to-right.
- **No fades on page load.** No parallax. No scroll-jacking. `prefers-reduced-motion` disables all transitions.

### Hover + press states

| Element | Hover | Press |
|---|---|---|
| Primary button (`--ink` bg) | bg lightens to `#2B2D30` | translate Y 0 (settle) |
| Quiet button (border) | border darkens to `--ink` | same |
| Link in body | underline appears | n/a |
| Nav link | teal underline grows L→R | n/a |
| Card | no hover by default — these are content, not affordances | n/a |
| Filter chip | none on inactive; active is `--ink` bg / white fg | n/a |

### Transparency + blur

- **Sticky header** uses `backdrop-filter: blur(18px)` over `rgba(251,251,251,0.86)`. This is the *only* blur in the system.
- No glassmorphism cards. No frosted modals.

### Imagery vibe

When real imagery is added, it should read as **warm-neutral, slightly desaturated, ambient natural light**. No high-contrast tech-stock photography. No purple-cyan AI-art renders. Conference photography, lab interiors, hands-on-keyboard close-ups, books, whiteboards — that register.

### Layout rules

- **Sticky header** (74px) at top. Always.
- **Skip link** is required for accessibility.
- **No floating action buttons.** No scroll-to-top arrow. The nav suffices.
- **Footer is one row**, brand on the left, link list on the right.

---

## Iconography

The baseline website uses **zero icons**. That is deliberate and we are keeping that posture as the default. Information density is carried by typography, hairline rules, and numerals (01–04, A–D), not by glyphs.

When icons are needed (UI affordances inside larger surfaces, tag rails, person-card link rows that go beyond text), use:

- **[Lucide](https://lucide.dev) via CDN** — 1.5px stroke, `currentColor` fill, 16/20/24 sized. Lucide's restrained, monoline geometry matches the editorial tone better than filled or duotone sets.
- Loaded inline as raw SVG for static surfaces, or via the Lucide `<i>` web component for prototypes.
- **Stroke width**: always 1.5. Never 2.0 (too heavy) or 1.0 (too wispy).
- **Color**: always `currentColor` so the icon inherits text color.
- **Size**: 16px in body text runs, 20px on chip/button rows, 24px in section headers.

### What's available in `assets/`

- `assets/breathai-mark.svg` — The brand mark on its own (28px design size, scales).
- `assets/breathai-mark-square.svg` — Mark on a paper-tone tile, for favicons and og-image generation.
- `assets/breathai-lockup.svg` — Mark + wordmark side by side, for headers.
- `assets/breathai-lockup-stacked.svg` — Mark above wordmark, for square contexts (slide title cards).
- `assets/ntu-association.svg` — Lockup variant with "Nanyang Technological University · Singapore" beneath.
- `assets/og-cover.svg` — Default Open Graph image (1200×630, paper background).

### Emoji

Never. The brand has no emoji. If a designer reaches for 🚀 to represent "fast", we have failed; use a numeric, letter, or restrained icon instead.

### Unicode

Allowed and encouraged for editorial flourish: `·` (middle dot), `–` (en dash), `—` (em dash), `→` (right arrow for forward navigation), `↗` (up-right for external links).

---

## Index of files in this folder

- `README.md` — this file.
- `SKILL.md` — agent-skill manifest.
- `colors_and_type.css` — the canonical token sheet. Import this and you have the system.
- `assets/` — logos, marks, OG images.
- `preview/` — design-system spec cards.
- `ui_kits/website/` — pixel-faithful website recreation.

---

## How to use this in your work

```html
<link rel="stylesheet" href="path/to/colors_and_type.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
  rel="stylesheet"
/>
```

Then write to the semantic classes (`.h1`, `.eyebrow`, `.button-primary`, `.card`, `.tag`) or to the raw tokens (`--ink`, `--paper-soft`).

---

## Open questions / caveats

- **Fonts are substituted.** Iowan Old Style → Source Serif 4. system-ui → Geist. If the lab has paid font licenses, swap in `colors_and_type.css`.
- **The brand mark is provisional.** Built from the existing 28×28 CSS-drawn idea (a teal/violet/coral gradient tile with an inset circle). It should be replaced by a real wordmark designed by a brand specialist before any printed material goes out.
- **The lab is 3 people.** The system intentionally has empty-state coverage (`"No publications in this category yet."`, `"Papers will be added as they are released."`) so the site does not feel hollow before papers exist.
