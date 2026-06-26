# AGENTS.md

## Contribution and Deployment Notes

The `main` branch is protected. Do not commit or push directly to `main` for
ordinary website changes unless you are the user listed in `.github/CODEOWNERS`
and are intentionally doing maintainer work. Otherwise, create a branch, make
the change, run `jekyll build`, push the branch, and open a pull request.

For small content updates, prefer editing `_data/*.yml`. Avoid changing
technical website files such as `_layouts/`, `_includes/`, `.github/`,
`_config.yml`, and deployment-related files unless the maintainer has asked for
that change.

## Maintainer Deployment Notes

This repository has two remotes:

- `breathe`: official site repository, deployed at `https://breathelab.ai/`
- `origin`: preview repository, deployed at `https://zimingyou01.github.io/breathai-lab-preview/`

The preview site is served from `origin/gh-pages`, so pushing only to `origin/main`
is not enough.

Before merging or deploying a site update, run:

```sh
jekyll build
```

After the change is merged by the maintainer, sync the deployment refs as
needed:

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
