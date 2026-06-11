# BreatheAI Lab Website

Static GitHub Pages site for a new NTU frontier AI / NLP lab.

The visual layout is intentionally kept separate from the editable content. Most future updates should happen in `_data/*.yml`, not in the HTML, CSS, or JavaScript.

## Edit Content

Start here:

| File | What to edit |
|---|---|
| `_data/site.yml` | Lab name, email, GitHub URL, homepage text, page intros, footer, join-page copy |
| `_data/research.yml` | Homepage research agenda and research-area cards |
| `_data/news.yml` | Homepage news items |
| `_data/people.yml` | PI, students, researchers, collaborators, open-role cards |
| `_data/positions.yml` | Join-page positions, statuses, deadlines, closed/open state |
| `_data/projects.yml` | Research projects, datasets, repositories, software |
| `_data/publications.yml` | Papers and artifacts |

The page layouts live in `index.html`, `research.html`, `people.html`, and `join.html`. They should usually not need editing unless the layout itself changes.

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

## GitHub Pages

This repo uses GitHub Pages' built-in Jekyll support. Do not add `.nojekyll`; the site needs Jekyll so YAML files in `_data/` can be rendered into the HTML pages.

## Content Rules

- Do not publish PI names, positions, deadlines, funding, or official NTU details until confirmed.
- Keep placeholders honest: use "to be confirmed" instead of invented details.
- Prefer clear research questions over buzzwords.
- Keep the brand spelling as `BreatheAI`.
- Update `_data/site.yml` first when changing global identity, email, GitHub, or footer text.
