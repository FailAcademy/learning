# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## Rationale

Sharing changes between repos is cumbersome, error prone and highly restrictive. The monorepo and the code review tools that come with gihub replace restriction.


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

Deploys are done manually. Once the changes are merged into `master`, create a *second pull-request* against `[your-lms]-production`. For example: `adp-london-production`. A merge into this branch will trigger a deploy and merging PRs here will eventually be restricted, and this step should probabaly be automated somehow...

✌️
