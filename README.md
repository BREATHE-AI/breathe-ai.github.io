# BreatheAI Lab Website

Static GitHub Pages site for a new NTU frontier AI / NLP lab.

The visual layout is intentionally kept separate from the editable content. Most future updates should happen in `_data/*.yml`, not in the HTML, CSS, or JavaScript.

## Edit Content

Start with the page you want to edit:

| File | What to edit |
|---|---|
| `_data/home.yml` | Home hero, homepage news, and homepage recruiting strip |
| `_data/research.yml` | Research statement, research themes, publications, and projects |
| `_data/people.yml` | People page heading and member groups |
| `_data/join.yml` | Join page intro, open roles, and application/contact copy |
| `_data/site.yml` | Global lab name, email, GitHub URL, navigation, footer, and brand subtitle |
| `_data/logo_options.yml` | Internal logo preview/review page copy |

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
- Keep the brand spelling as `BREATHE AI Lab`.
- Do not keep legacy data files that are not rendered by the current templates.
- Update `_data/site.yml` first when changing global identity, email, GitHub, navigation, or footer text.
