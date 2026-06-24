# AGENTS.md

## Deployment and Push Notes

This repository has two remotes:

- `breathe`: official site repository, deployed at `https://breathelab.ai/`
- `origin`: preview repository, deployed at `https://zimingyou01.github.io/breathai-lab-preview/`

The preview site is served from `origin/gh-pages`, so pushing only to `origin/main`
is not enough.

Before committing, run:

```sh
jekyll build
```

After committing a site update, push all three targets:

```sh
git push breathe main
git push origin main
git push origin main:gh-pages
```

Then verify the remote refs:

```sh
git ls-remote breathe refs/heads/main
git ls-remote origin refs/heads/main refs/heads/gh-pages
```

All three refs should point to the same commit. If a browser still shows old
content, check the page with a cache-busting query such as:

```text
https://breathelab.ai/research.html?v=<commit>
https://zimingyou01.github.io/breathai-lab-preview/research.html?v=<commit>
```

GitHub Pages may cache HTML for several minutes.
