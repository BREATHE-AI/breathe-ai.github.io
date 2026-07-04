# Data Editing Guide

Most routine website content lives in YAML files in this folder. Comments in YAML start with `#` and are not shown on the website.

## Main Files

| File | Controls |
|---|---|
| [site.yml](site.yml) | Global lab name, navigation, metadata, footer, and shared links |
| [home.yml](home.yml) | Home page hero, news preview, and recruiting content |
| [research.yml](research.yml) | Research page statement, themes, publications, and projects |
| [people.yml](people.yml) | People page groups, names, portraits, roles, and profile links |
| [join.yml](join.yml) | Join page roles, application copy, and contact text |
| [homepage_luwei.yaml](homepage_luwei.yaml) | Wei Lu PI homepage content for `wei-lu-homepage-a.html` |

## Markdown Links

Many text fields support Markdown links:

```yaml
text: "See [Google Scholar](https://scholar.google.com/) for more publications."
```

Use this format for news, service venues, publication titles/notes, grants, awards, teaching rows, and PI homepage text fields that already contain links.

## Assets

Images, PDFs, logos, and other static files live outside `_data/`, under [../assets/](../assets/).

Common paths:

| Asset type | Folder | Example |
|---|---|---|
| People portraits | [../assets/img/people/](../assets/img/people/) | `assets/img/people/wei-lu.png` |
| PDFs and documents | [../assets/docs/](../assets/docs/) | `assets/docs/wei-lu-cv.pdf` |
| Logos | [../assets/logo/](../assets/logo/) | `assets/logo/breathe-infinity.svg` |
| News/research images | [../assets/img/](../assets/img/) | `assets/img/news/example.webp` |

When referencing an asset from YAML, use a site-relative path without `../`:

```yaml
image:
  src: assets/img/people/wei-lu.png

cv:
  url: assets/docs/wei-lu-cv.pdf
```

## PI Homepage Notes

[homepage_luwei.yaml](homepage_luwei.yaml) is the single content source for the Wei Lu PI homepage:

- `wei-lu-homepage-a.html`

To add an alumni subsection, edit `group.alumni_sections`:

```yaml
alumni_sections:
  - title: Visiting Students
    collapsible: true
    open: false
    entries:
      - Name (role; current destination)
```

Use `collapsible: false` for short important subsections, and `collapsible: true` for longer lists.

## Check Changes

After editing YAML, run:

```sh
jekyll build
```

If the build passes, the YAML is valid and the site can render the content.
