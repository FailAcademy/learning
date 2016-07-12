# Installation

## Initial Set-up & Configuraiton

### Step 0: Install Dependencies

**Some helpful background reading:**

The site is based on [Poole/Lanyon](https://github.com/poole/lanyon) for Jekyll by [Mark Otto](https://github.com/mdo), and is designed to use [Jekyll Auth](https://github.com/benbalter/jekyll-auth) by [Ben Balter](https://github.com/benbalter) for authentication.

If you're interested in how Jekyll Auth works, please see:

- <https://github.com/benbalter/jekyll-auth/blob/master/README.md>
- <http://fabian-kostadinov.github.io/2014/11/13/installation-of-jekyll-auth/>

**Dependencies:**

To run a learning materials app locally for development purposes, you'll need to have Xcode or Xcode Command Line Tools installed, and [Jekyll](http://jekyllrb.com/docs/installation/) installed. Jekyll is a Ruby gem, so you'll need to make sure you have [RubyGems](https://rubygems.org/pages/download) installed first. Once you have RubyGems installed, you can run the following command to install Jekyll:

```bash
gem install jekyll
```

Next, you'll also need to have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed to log into Heroku and deploy the production-ready site.

Please note that you can install the Heroku Toolbelt package directly from the link above, or use [Homebrew](http://brew.sh) to install it with the following command:

```bash
brew install heroku-toolbelt
```

Once the Heroku Toolbelt is installed, you can log into RED Academy's Heroku account using `heroku login` provided you have the appropriate credentials.

### Step 1: GitHub Configuration

- Set-up a GitHub team for the course learners if one hasn't been set-up already. **Be sure to add yourself to the team!**
- To configure Jekyll Auth to only allow members of that team to view the learning materials site, you'll need the team ID. To get the team's ID, generate [a personal access token](https://github.com/settings/tokens/new) with "read:org" privileges only and run:
```bash
curl -H "Authorization: token <very-long-access-token>" https://api.github.com/orgs/redacademy/teams
```
- Go to RED Academy's GitHub account and follow [these 5 steps](https://github.com/benbalter/jekyll-auth#create-a-github-application) to set up the GitHub application that we will use for authentication purposes.

*Note: If you mistakenly create the app under your personal account, be sure to transfer ownership of the app to RED Academy.*

### Step 2: Local & GitHub Repo Set-up

Get set-up locally:

- Download RED's base learning materials and unzip it wherever you would like this directory to live on your local computer.
- Be sure to change the name of the directory to the name of the course, of course!
- Open up your Terminal and `cd` into the directory you just renamed.
- Run `git init` and make an initial commit to master in your local repo.

If you like, at this point you can now run `jekyll serve` if you want to see what the base learning materials site looks like running locally in your browser.

Meanwhile on GitHub, create a new private repo under the RED Academy organization account (give the repo the same name as course directory you just named locally). Grab the URL of the remote to use below.

Finally, add the GitHub repo as a remote and push to master:

```bash
git remote add origin https://github.com/redacademy/<COURSE-NAME>.git
git push -u origin master
```

### Step 3: Jekyll Auth Configuration

We're going to set up a special branch of this repo which we will use strictly for deployment purposes to Heroku.

To do that, create and checkout a new orphan branch called `production` by running:

```bash
git checkout --orphan production
```

Make sure you're checked out on the new `production` orphan branch (although keep in mind that you won't be able to see the branch name in the list if you run `git branch` until you've actually committed something there).

**Finally, follow [steps 1-3](https://github.com/benbalter/jekyll-auth#add-jekyll-auth-to-your-site) to install Jekyll Auth for this site.**

### Step 4: Heroku Set-up

Next, we're going to manually configure our `production` branch for deployment and finally deploy our Heroku site (note: do not use the "auto configure" command that Jekyll Auth provides).

- First we need to make an initial commit to the production branch of our repo, and we also need to force add some files that are ignored on `master` but need to included on the `production` branch. Run the following commands:
```bash
git status
git add -A
git add -f Gemfile
git add -f Gemfile.lock
git add -f config.ru
git add -f Rakefile
git commit -m "Added necessary deployment files." # or another descriptive message
```
- Next, create your Heroku app by running the following command from your local repo's directory:
```bash
heroku create COURSE-NAME
```
*Note: The course name must match the name of the GitHub application you previously created*
- Using the team ID and GitHub app credentials you previously acquired, run:
```bash
heroku config:set GITHUB_CLIENT_ID=XXX GITHUB_CLIENT_SECRET=XXX GITHUB_TEAM_ID=XXX
```
- Push the content of your local `production` branch to the Heroku `master` branch:
```bash
git push heroku production:master
```
- Finally, push the content of the `production` branch to GitHub to keep things in sync, and switch back to your `master` branch:
```bash
git push origin production
git checkout master
```

You can now run `heroku open` to authorize your GitHub account to access the site. If you're not logged into GitHub, you will need to authenticate with your login credentials.

Please note that if you've forgotten to add yourself to the GitHub team that has access to this learning materials site, or you've made a typo configuring the team ID in `heroku config`, all you'll see is the [Octocat Bouncer](https://octodex.github.com/bouncer/) when you try to access the site URL.

## Ongoing Deployment

Changes are you're going to want to make some changes to the site after you deploy it initially, or incorporate other contributors' pull requests.

To do that, follow these steps:

- Make sure you are logged into Heroku via the command line.
- On the `master` branch in your local repo, make sure you have no uncommitted changes, then run the following command to make sure you are up-to-date with the origin:
```bash
git checkout master
git pull origin master
```
- Make your own changes, if necessary (if you do it on a local feature branch, make sure you merge them to the `master` branch):
```bash
git status
git add  -A
git commit -m "Some descriptive message."
git push origin master
```
- Checkout the production branch:
```bash
git checkout production
```
- Merge the production branch to bring it up to date with master:
```bash
git merge master
```
- **Heroku Deploy Option 1:** Set-up [automatic GitHub-based deploys](https://devcenter.heroku.com/articles/github-integration) in Heroku (based on the production branch only!), push the GitHub production branch, and then return to the master branch:
```bash
git push origin production # this push will auto-deploy to Heroku
git checkout master
```
- **Heroku Deploy Option 2:** Manually push the changes to the Heroku App master branch and the GitHub production branch, and then return to the master branch:
```bash
git push heroku production:master
git push origin production
git checkout master
```

If something weird happens the first time you try to t changes, follow these steps then re-add `jekyll-auth` and all of the necessary deployment files:

http://superuser.com/questions/716818/git-overwrite-branch-with-master

*Possible future feature: Set up automatic deploys to Heroku when "production" branch is pushed to GitHub*

## Configuring Multiple Heroku Committers for a Site

You'll need to have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed to log into Heroku and deploy the production-ready site.

Add the Heroku remote to your local repo:
```bash
  git remote add heroku git@heroku.com:red-wdp.git
```

The email you use to authorize with github must be added to the Heroku application. This can be done via the "Access" tab in the Heroku dashboard.

Once this is complete, log in to Heroku from the command line:
```bash
  heroku login
```
Once logged in, follow the steps above for comitting and pushing code to Heroku!
