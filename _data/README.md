# Website Content Update Guide

This guide is for suggesting website content updates by email. You do not need a GitHub account or any publishing tools.

Most visible website text is stored in YAML files in this folder. A YAML file is a plain text file that works like a structured form: it contains names, dates, paragraphs, links, and file paths. For normal content updates, edit the relevant YAML file and email it back to the website maintainer.

## Quick Workflow

1. Open the official `_data` folder:
   [https://github.com/BREATHE-AI/breathe-ai.github.io/tree/main/_data](https://github.com/BREATHE-AI/breathe-ai.github.io/tree/main/_data)
2. Click the file you want to update.
3. Click **Raw** or **Download raw file**, then save the file to your computer.
4. Edit the file in a plain text editor.
   - macOS: TextEdit in plain-text mode.
   - Windows: Notepad.
   - Avoid Microsoft Word, because it may add hidden formatting.
5. Email the full edited YAML file back. Attach any new or replacement photos, PDFs, or CV files in the same email.

Please send the full edited file, not screenshots or copied snippets. If something is hard to edit, explain it briefly in the email.

## Which File To Edit

| File | Website content it controls |
|---|---|
| [site.yml](site.yml) | Shared lab information, navigation, footer, email, metadata, and common labels |
| [home.yml](home.yml) | Home page main text, news preview, and recruiting strip |
| [research.yml](research.yml) | Research page statement, research themes, publications, and projects |
| [people.yml](people.yml) | People page groups, names, photos, roles, education, and profile links |
| [join.yml](join.yml) | Join page roles, application text, and contact text |
| [homepage_luwei.yaml](homepage_luwei.yaml) | Personal homepage content: biography, news, services, publications, group members, grants, awards, and teaching |

If you are not sure which file to edit, describe the website section in the email.

## Personal Homepage Updates

For Prof. Wei Lu's personal homepage, edit:

```text
homepage_luwei.yaml
```

Common places to edit:

| To update | Look for |
|---|---|
| Name, role, office, email, website, CV | `profile:` |
| Research tags | `focus:` |
| Biography | `bio:` |
| News | `news:` then `items:` |
| Services | `services:` then `items:` |
| Publications | `publications:` then `items:` |
| Current group members | `group:` then `current:` |
| Alumni sections | `group:` then `alumni_sections:` |
| Research grants | `grants:` then `items:` |
| Awards | `awards:` then `items:` |
| Teaching | `teaching:` then `items:` |

The YAML controls text, links, and file references. The website maintainer will handle layout, formatting, preview, and publishing.

## Editing Tips

- Keep the same indentation as the original file. Spaces at the beginning of a line matter.
- Use spaces, not tabs.
- Lines beginning with `#` are notes and are not shown on the website.
- To add a new item, copy a similar existing item and edit the copy.
- If formatting feels uncertain, leave a note in the email. The maintainer can clean it up.

Example:

```yaml
    - date: Jul 2026
      text: New announcement text goes here.
```

## Adding Links In Text

Some text fields support clickable links. Use this format:

```yaml
text: "See [Google Scholar](https://scholar.google.com/) for more publications."
```

`Google Scholar` is the visible text. `https://scholar.google.com/` is the web address.

If this format feels inconvenient, write the URL plainly in the email and say which words should be clickable.

## Photos, PDFs, CVs, And Other Files

The YAML file does not contain the actual photo or PDF. It only records the file path used by the website:

```yaml
image:
  src: assets/img/people/wei-lu.png

cv:
  url: assets/docs/wei-lu-cv.pdf
```

For replacement files:

1. Check the file name already written in the YAML, such as `wei-lu-cv.pdf`.
2. Rename the updated file to that same file name.
3. Attach it in the email and mention that it should replace the existing file.

For new files:

1. Write the new file name or path in the YAML.
2. Attach a file with the same name in the email.
3. Mention where it should appear on the website.

Do not paste images or PDFs into the YAML file. Send them as normal email attachments.

If the website does not currently have a suitable place for the new file, describe the request in the email and attach the file. The maintainer can decide whether a layout change is needed.

## Before Sending

Please check:

- The edited YAML file is attached.
- The file name has not changed.
- New or replacement files are attached.
- Any uncertain edits are explained briefly in the email.
