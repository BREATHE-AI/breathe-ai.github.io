# Contributing to the BREATHE AI Lab Website

Thank you for helping keep the BREATHE AI Lab website accurate and up to date.

## Pull Request Workflow

The `main` branch is protected. Contributors who are not listed in `.github/CODEOWNERS` must submit all changes through a pull request.

Code owners may commit directly to `main` when they are making maintainer-approved updates themselves. This exception exists because code owners approve and maintain the website, so a pull request may be unnecessary for small self-reviewed changes.

Recommended workflow for non-code-owner contributors:

1. Create a new branch from `main`.
2. Make your changes.
3. Run `jekyll build` to check that the site still builds.
4. Commit and push your branch.
5. Open a pull request to merge your branch into `main`.
6. The website maintainer will review the pull request and merge it after checking the changes.

Example branch names:

- `update-profile-yourname`
- `add-news-2025-xx`
- `update-publications`
- `fix-people-page`

## Small Content Updates

For small content updates, such as profile information, news, publications, or project descriptions, please edit the relevant files under `_data/`.

Common files:

| File | What to update |
|---|---|
| `_data/home.yml` | Homepage news and recruiting text |
| `_data/research.yml` | Research themes, publications, and project descriptions |
| `_data/people.yml` | Member profiles, roles, links, and group ordering |
| `_data/join.yml` | Open roles and application/contact copy |
| `_data/site.yml` | Lab-wide metadata, navigation, email, and footer text |

## Files to Avoid Editing Without Discussion

Please avoid editing technical website files unless you have discussed the change with the website maintainer first.

This includes:

- `_layouts/`
- `_includes/`
- `.github/`
- `_config.yml`
- Deployment-related files
- Shared CSS and JavaScript under `assets/`

## Before Opening a Pull Request

Please check that:

- The site builds with `jekyll build`.
- The content is accurate and ready to be public.
- Links work and point to the intended public pages.
- Names, roles, titles, and dates are spelled correctly.
- The change is limited to the files needed for the update.

## Codex / Coding Agent Workflow

If a user asks a coding agent to update the website "following CONTRIBUTING.md", the agent should use this workflow.

1. Read this file before editing.
2. Check `.github/CODEOWNERS`.
3. If the requesting user is listed in `.github/CODEOWNERS` and explicitly asks the agent to commit or push directly, the agent may work on `main`, run `jekyll build`, commit, and push `main`.
4. Otherwise, use the pull request flow: start from the latest `main`, create a focused branch, commit the change, push the branch, and open a pull request targeting `main`.
5. For routine content updates, edit only files under `_data/` unless the user explicitly asks for a technical website change.
6. Do not edit `_layouts/`, `_includes/`, `.github/`, `_config.yml`, deployment files, GitHub Actions workflows, or shared CSS/JavaScript unless explicitly requested by the website maintainer.
7. Keep the diff minimal. Stage only files changed for the requested update.
8. Run `jekyll build`.

Typical pull request flow for non-code-owner users:

```bash
git switch main
git pull --ff-only
git switch -c update-profile-yourname
# make the requested edits
jekyll build
git status --short
git add <changed-files>
git commit -m "Update profile for <Name>"
git push -u origin update-profile-yourname
gh pr create --base main --head update-profile-yourname
```

Typical direct-maintainer flow for code owners:

```bash
git switch main
git pull --ff-only
# make the requested edits
jekyll build
git status --short
git add <changed-files>
git commit -m "Update website content"
git push origin main
```

The pull request description should include:

- A brief summary of the change.
- The files changed, especially any `_data/` files.
- The result of `jekyll build`.

If the GitHub CLI is not available or is not authenticated, push the branch and tell the user exactly which command or URL to use to open the pull request.
