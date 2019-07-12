# LMS Monorepo

This is the official RED Academy LMS Monorepo.

Heavy-lifting done to create this repo thanks to [https://github.com/redacademy/monorepo-tools](https://github.com/redacademy/monorepo-tools)

**Contents:**

- [Rationale](https://github.com/redacademy/lms#rationale)
- [How to Use](https://github.com/redacademy/lms#how-to-use)
- [Add New Course Repos to the Monorepo](https://github.com/redacademy/lms#add-new-course-repos-to-the-monorepo)
- [Configure Production Branches and Deploys](https://github.com/redacademy/lms#configure-production-branches-and-deploys)

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

**Step 4 (Distributing Changes to Other LMSes - Optional):**

From `master` run `git format-patch -1 HEAD` to create a patch file containing changes from the last commit **(your squashed PR)**.

`git checkout [your production branch]`

`git apply -p2 < ~/patch --directory=[dir containing your lms] --3way`

Solve conflicts and commit!

For maximum flexibility, there are no checks on your production branches. For this to work smoothly, we'll all need to agree to keep things sane by following this workflow.

## Add New Course Repos to the Monorepo

When a course repo is ready to be merged into the monorepo, use the bash script in this repo as a guide:

**[monorepo-tools/monorepo_add.sh](https://github.com/redacademy/monorepo-tools/blob/master/monorepo_add.sh)**

## Configure Production Branches and Deploys

_Note: These instructions are still a draft and require additional testing!_

Because sites must be deployed from sub-directories of this monorepo, some extra configuration is required up-front to set required buildpacks and environment variables on Heroku before automated deploys can be used.

For reference, we use [timanovsky/subdir-heroku-buildpack](https://github.com/timanovsky/subdir-heroku-buildpack) to simplify the process of deploying to multiple different Heroku apps from this repo.

To complete these steps, you must have the Heroku Toolbelt installed locally:

```bash
brew install heroku-toolbelt
```

Once the Heroku Toolbelt is installed, you can log into RED Academy's Heroku account using heroku login provided you have the appropriate credentials.

**Step 1: GitHub Configuration**

Set-up a GitHub team for the course learners if one hasn't been set-up already. **Be sure to add yourself to the team and follow existing team naming conventions!**

To configure Jekyll Auth to only allow members of that team to view the learning materials site, you'll need the team ID. To get the team's ID, generate [a personal access token](https://github.com/settings/tokens/new) with "read:org" privileges only and run:

```bash
curl -H "Authorization: token <very-long-access-token>" https://api.github.com/orgs/redacademy/teams
```

Go to RED Academy's GitHub account and follow [these 5 steps](https://github.com/benbalter/jekyll-auth/blob/master/docs/getting-started.md#create-a-github-application) to set up the GitHub application that we will use for authentication purposes.

Be sure to follow the established naming conventions (e.g. `red-course-code-city`)!

_Note: If you mistakenly create the app under your personal account, be sure to transfer ownership of the app to RED Academy._

**Step 2: Production Branch Configuration**

First, create a new branch the site. Name the branch the same as the site sub-directory with `-production` suffix. For example, if your were setting up deployment for the `wdp-toronto` site, you would:

```bash
git checkout --orphan wdp-toronto-production
```

Make sure you're checked out on the new orphan branch (although keep in mind that you won't be able to see the branch name in the list if you run `git branch` until you've actually committed something there).

**Finally, follow [steps 1-3](https://github.com/benbalter/jekyll-auth/blob/master/docs/getting-started.md#add-jekyll-auth-to-your-site) to install Jekyll Auth for this site.**

You will also need to add a few additional gems to your Gemfile before running `bundler install`. Ensure your Gemfile looks like this before attempting to deploy to Heroku:

```ruby
source "https://rubygems.org"
ruby "2.5.5"

gem 'jekyll-auth'
gem 'jekyll-paginate'
gem 'redcarpet'
```

Next, edit the `.gitignore` file as follows, so only the `wdp-toronto` sub-directory is included in this branch:

```
/*
!wdp-toronto
!.gitignore
```

Next, we're going to manually configure our `wdp-toronto-production` branch for deployment and finally deploy our Heroku site (note: do not use the "auto configure" command that Jekyll Auth provides).

First we need to make an initial commit to the production branch of our repo, and we also need to force add some files that are ignored on `master` but need to included on the production branch. Run the following commands:

```bash
git status
git add -A
git add -f Gemfile
git add -f Gemfile.lock
git add -f config.ru
git add -f Rakefile
git commit -m "Added necessary deployment files." # or another descriptive message
git push origin wdp-toronto-production
```

**Step 3: Heroku App Configuration**

Next, create your Heroku app by running the following command from your local site's directory while following the established naming conventions (e.g. `red-course-code-city`). For example:

```bash
heroku create red-wdp-to
```

_Note: The course name must match the name of the GitHub application you previously created!_

Using the team ID and GitHub app credentials you previously acquired, run:

```bash
heroku config:set GITHUB_CLIENT_ID=XXX GITHUB_CLIENT_SECRET=XXX GITHUB_TEAM_ID=XXX --app red-to-wpd
```

Now go into the new app on the Heroku dashboard, and under the Deploy menu item, set the "Deployment method" to GitHub.

Select the `redacademy/LMS` repo, and choose the production branch you just created as the deploy branch.

Now head over to your CLI, and run the following commands to set up the appropriate Heroku buildpacks (again, this uses WDP Toronto as an example, so update the commands as needed):

```bash
heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack --app red-to-wdp
heroku buildpacks:add heroku/ruby --app red-to-wdp
heroku config:set PROJECT_PATH=wdp-toronto --app red-to-wdp
```

This will allow you to deploy code from a specified sub-directory, rather than from the root of this repo.

Head back over to your local repo (while still checked out on your new production branch) and make and empty commit so you can deploy with the new buildpacks on Heroku:

```bash
git commit --allow-empty -m "Set Heroku buildpacks."
git push origin wdp-toronto-production
```

Once this is configured, you can simply `git push origin wdp-toronto-production` after cherry-picking to continue deploying changes up to the site.

✌️
