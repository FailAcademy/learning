# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## How To Use

---

### Cloning the LMS you need

```bash
 git remote add origin https://github.com/redacademy/LMS.git
 git config core.sparsecheckout true
 echo "adp-london/*" >> .git/info/sparse-checkout # <- Edit this line with the LMS subfolder you need from this repo.
 git pull --depth=1 origin master
```
⚠️ Need more than one LMS? **Create a new folder** and repeat the steps above. ⚠️

### Submitting updates

**Step 1:**

Ensure you have the latest code from master; create a branch for your proposed updates, and commit code as usual. 

**Step 2:**

When finished, push your update branch to `origin`, eg. `git push origin adp-london-update-slides` and create a pull request against `master`. After your code has been reviewed and approved, it will be merged into `master`.

⚠️ If you receive the `(shallow update not allowed)` error, run `git fetch` to update all refs, and try pushing again. ⚠️

### Deploying your LMS

Deploys will be done manually. Once the changes have been merged into master, create a second pull-request against `[your-lms]-production`. For example: `adp-london-production`. A merge into this branch will trigger a deploy. Merging will be restricted to deployers only.

---
