# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## Rationale

More attention = better quality.

Sharing changes between repos is cumbersome and error prone. Strict sharing is unrealistic and highly restrictive. Using the monorepo and GitHub's code review tools will help us share code and ideas with the whole team, and manage divergence in a sane way (multiple code-reviews) without being restrictive.

## How To Use

### Cloning the LMS Monorepo

```bash
 git init
 git remote add origin https://github.com/redacademy/LMS.git
 git pull origin master
```

### Submitting Updates

**Step 1:**

Get the latest code from `master` branch; **create a branch for your proposed updates**, and commit code as usual.

**Step 2:**

When finished, push your update branch to `origin` and create a pull request against `master`.
The PR is where we can see changes and review / discuss.

⚠️ Squash all commits in your update branch before creating a PR. If you forget to squash, use the "Squash and Merge" option when merging a PR, from the Github UI. If not squashed, updating production becomes more difficult. ⚠️

**Step 3 (Deploying):**

Heroku is watching specific branches for changes, and will deploy your LMS when it's specific branch is updated. Here are the active production branches:

[adp-london-production](https://github.com/redacademy/LMS/tree/adp-london-production)<br/>
[adp-toronto-production](https://github.com/redacademy/LMS/tree/adp-toronto-production)<br/>
[adp-vancouver-production](https://github.com/redacademy/LMS/tree/adp-vancouver-production)<br/>
[adp-ws-vancouver-production](https://github.com/redacademy/LMS/tree/adp-ws-vancouver-production)<br />
[wdp-london-production](https://github.com/redacademy/LMS/tree/wdp-london-production)<br/>
[wdp-toronto-production](https://github.com/redacademy/LMS/tree/wdp-toronto-production)<br/>
[wdp-vancouver-production](https://github.com/redacademy/LMS/tree/wdp-vancouver-production)<br/>
[wdp-ws-vancouver-production](https://github.com/redacademy/LMS/tree/wdp-ws-vancouver-production)<br />

To deploy, after your changes are merged into master:

`git fetch --all` Do this every time for sanity.

`git pull origin master` To update your local master branch with the merged code.

`git log --oneline` To find the _commit hash_ of the squashed commit (From your apporved PR).

⚠️ Don't use the merge commit hash, use the hash of the squashed commit from your PR, or you'll have a bad time. ⚠️

`git checkout [your production branch]`

`git cherry-pick [commit hash]`

(If you do want to merge a _merge commit_ you can use `git cherry-pick -m 1 [merge commit hash]`, but don't.)

`git push origin [your production branch]`

**Distributing Changes to Other LMSes:**

from `master` run `git format-patch -1 HEAD` to create a patch file containing changes from the last commit. <br/>
**(your squashed PR)**

`git checkout [your production branch]`

`git apply -p2 < ~/patch --directory=[dir containing your lms] --3way`

Solve conflicts and commit!

---

For maximum flexibility, there are no checks on your production branches. For this to work smoothly, we'll all need to agree to keep things sane by following this workflow.

✌️
