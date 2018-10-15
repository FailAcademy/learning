# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

## Rationale

More attention = better quality.

Sharing changes between repos is cumbersome and error prone. Strict sharing is unrealistic and highly restrictive. Using the monorepo and github's code review tools will help us share code and ideas with the whole team, and manage divergence in a sane way (multiple code-reviews) without being restrictive.

## How To Use

---

### Cloning the LMS Monorepo

```bash
 git init
 git remote add origin https://github.com/redacademy/LMS.git
 git pull origin master
```

### Submitting updates

**Step 1:**

Get the latest code from `master` branch; **create a branch for your proposed updates**, and commit code as usual.

**Step 2:**

When finished, push your update branch to `origin` and create a pull request against `master`.
The PR is where we can see changes and review / discuss.

**Step 3: (Deploying)**

Heroku is watching specific branches for changes, and will deploy your LMS when it's specific branch is updated. Here are the branches:

adp-london-production <br/>
adp-toronto-production<br/>
adp-vancouver-production<br/>
wdp-london-production<br/>
wdp-toronto-production<br/>
wdp-vancouver-production<br/>
web-dev-foundation-production<br/>

To deploy, after your changes are merged into master:

`git pull origin master` to update your local master branch.<br/>
`git checkout [your production branch]`<br/>
`git merge master`<br/>
`git push origin [your production branch]`<br/>

✌️
