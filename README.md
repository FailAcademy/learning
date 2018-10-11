# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## Rationale

More attention = better quality.

Sharing changes between repos is cumbersome and error prone. Strict sharing is unrealistic and highly restrictive. Using the monorepo and github's code review tools will help us share code and ideas with the whole team, and manage divergence in a sane way (multiple code-reviews) without being restrictive.

## How To Use

---

### Cloning the LMS you need

```bash
 git init
 git remote add origin https://github.com/redacademy/LMS.git
 git config core.sparsecheckout true
 echo "adp-london/*" >> .git/info/sparse-checkout # <- Edit this line with the LMS subfolder you need from this repo.
 git pull --depth=1 origin master
```

⚠️ Need more than one LMS? **Create a new folder** and repeat the steps above. ⚠️

### Submitting updates

**Step 1:**

Get the latest code from `master` branch; create a branch for your proposed updates, and commit code as usual.

**Done?**

When finished, push your update branch to `origin` and create a pull request against `master`.
The PR is where we can see changes and review / discuss.

⚠️ If you receive the `(shallow update not allowed)` error, run `git fetch` to update all refs. ⚠️

### Deploying an LMS

Deploys are done manually. Once the changes are merged into `master`, create a _second pull-request_ against `[your-lms]-production`. For example: `adp-london-production`. A merge into this branch will trigger a deploy and merging PRs here will eventually be restricted, and this step should probabaly be automated somehow...

✌️
