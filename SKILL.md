---
name: breathai-design
description: Use this skill to generate well-branded interfaces and assets for BreathAI, an emerging NTU-based NLP / LLM / agents research lab. Contains essential design guidelines (paper/ink editorial palette, restrained motion, serif headlines), colors and type tokens, brand assets (mark + lockups), and a high-fidelity UI kit recreation of the lab website. Use for production code, slides, recruiting pages, paper-page designs, or any throwaway prototype that should feel on-brand.
user-invocable: true
---

Read the README.md in this skill, then explore the other files: `colors_and_type.css` for tokens, `assets/` for logos and the OG image, `preview/` for spec cards, and `ui_kits/website/` for the live recreation of the lab home page.

When creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files. When working on production code, copy `colors_and_type.css` and the relevant assets, then read the rules in README.md to write CSS that respects the system.

If invoked without specific guidance, ask the user what surface they want to design (lab home page, recruiting page, paper landing, conference slide deck, repo README badge, etc.), confirm whether they want to stay close to the website's editorial register or push into a different mode (e.g. talk slides), and ask what content to populate. Then act as an expert designer producing HTML or production code, depending on the need.
