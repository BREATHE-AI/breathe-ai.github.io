# BREATHE AI Lab Website

This repository contains the source code and editable content for the BREATHE AI Lab website at Nanyang Technological University.

- Official site: https://breathelab.ai/
- Lab GitHub organization: https://github.com/BREATHE-AI

BREATHE AI Lab is an AI research lab at NTU building responsible and efficient AI technologies for humanity and equity, towards truly capable intelligence.

## Updating Website Content

Most routine website updates should be made in the YAML files under `_data/`. These files hold the public page content separately from the HTML, CSS, and JavaScript layout code.

| File | What it controls |
|---|---|
| `_data/home.yml` | Home hero text, news, and recruiting strip |
| `_data/research.yml` | Research statement, research themes, publications, and project descriptions |
| `_data/people.yml` | People page heading, groups, member profiles, and profile links |
| `_data/join.yml` | Join page intro, open roles, and application/contact copy |
| `_data/site.yml` | Global lab name, email, GitHub URL, navigation, footer, and metadata |

For contribution rules and the pull request workflow, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Local Preview

Install Jekyll if needed, then run:

```bash
jekyll serve
```

Open the local URL printed by Jekyll.

For a one-time build check:

```bash
jekyll build
```

The generated `_site/` folder is ignored by git.

## Repository Structure

| Path | Purpose |
|---|---|
| `_data/` | Editable website content |
| `_layouts/` | Shared page layout templates |
| `_includes/` | Header, footer, and reusable template fragments |
| `assets/` | CSS, JavaScript, images, logos, and other static assets |
| `index.html`, `research.html`, `people.html`, `join.html` | Main site pages rendered by Jekyll |

## Content Guidelines

- Keep the brand spelling as `BREATHE AI Lab`.
- Prefer concise, verified public information over placeholders or guesses.
- Do not publish names, positions, deadlines, funding, or official NTU details until confirmed.
- Use "to be confirmed" when information is not ready for public release.
- Keep research descriptions clear and specific.
