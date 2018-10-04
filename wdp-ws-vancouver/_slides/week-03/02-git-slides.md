---
layout: slidedeck
title: Git Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Git

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

2. What is version control?
3. Git vs. GitHub
4. Initializing a repo and making commits
5. Working with remotes
6. Deploying with GitHub Pages
7. Collaborating with others

---

template: inverse

# Version Control:<br /> Whys and Hows

---

class: center, middle

### What is Version Control?

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions and revert to previous states later on, if needed.

---

# What is Git?

* Traditional version control system are **centralized** where a single central copy of a project lives on server, and developers **commit** their changes to it
* But there are some downsides to this approach...

---

# What is Git?

* Git is a **distributed version control system (DVCS)**
* Developers **clone** copies of the **repository** locally with all of its previous history intact
* There can still be an "authoritative" repository that team members push to and pull from

---

# Git vs. GitHub

* Git is the **version control system**
* GitHub is a **web-based app** where you can create and account and then store and share your Git repositories
* This website is an example of a private GitHub repository!

.inline-images[
![Git logo](/public/img/slide-assets/git-logo.png)
![GitHub logo](/public/img/slide-assets/octocat-logo.png)
]

---

class: center, middle

.large[
Let's dive in! Open your CLI...
]

---

# Post-Install Set-up

Once you have Git installed, you'll need to run the following commands&mdash;one after the other&mdash;to ensure that Git knows how to publish information about the code you write:

```bash
git config --global user.name "Your Name"
git config --global user.email you@email.com
git config --global push.default matching
git config --global alias.co checkout
```

---

# First Steps with Git

Creating a new Git **repository** (or **repo** for short) for a project only requires running `git init` in the root of your project:

![git init command](/public/img/slide-assets/git-init.gif)

---

# First Steps with Git

If you view the hidden files in the directory where you just ran `git init`, you would now see an `.git` sub-directory there.

.inline-images[
![hidden git folder](/public/img/slide-assets/git-hidden-folder.png)
]

---

class: center, middle

.large[
Welcome to the world of version control with Git!
]

---

# Checking for Changes

As we make changes to our working directory where we initialized Git, we can check on the current state of our project by running `git status`:

![git status command](/public/img/slide-assets/git-status.gif)

---

# Ignoring Files

When you ran `git status` did you see any weird system files there that you'd prefer not to track in your repo?

Let's create a `.gitignore` file in the same directory that we initialized our Git repo to stop Git from tracking these files.

From the command line, run:

```bash
touch .gitignore
atom .gitignore # open the new file in Atom
```

---

# Ignoring Files

A typical list of files and directories to add to your `.gitignore` may include:

```bash
# Ignore system files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
*[Tt]humbs.db
*.Trashes

# Ignore npm packages
node_modules/
```

_Save this file and return to your command line..._

---

class: center, middle

### The Staging Area

Now that we've ignored files we don't want to track, we're ready to add the files we do want to track to the **staging area**.

The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit. It’s sometimes referred to as the **index**, but it’s also common to refer to it as the staging area.

---

# Adding Changes

Let's tell Git that we want to keep track of the files that are currently untracked. To do that, run `git add -A` to add them to the **staging area**:

![git add command](/public/img/slide-assets/git-add.gif)

---

# Ways to Add

The `git add -A` command we just saw will stage all files that have been **added**, **updated** and **deleted**. However, we can be more nuanced about the changes we choose to add to a given commit:

* `git add index.html` will stage that file only
* `git add .` stages new and modified, without deleted
* `git add -u` stages modified and deleted, without new

But in most cases, you'll likely use `git add -A`.

---

# Committing Changes

Now it's actually time to **commit** our changes. To do that, run `git commit -m "Your message here."`

![git commit command](/public/img/slide-assets/git-commit.gif)

---

class: center, middle

.large[
Congrats! You've now made your first commit :)
]

---

# Saving vs. Committing

Saving a file and committing its changes to the repository are **not** the same thing!

You can save a files many times before you commit it.

When you make a commit you're effectively **creating a snapshot** of your project **at a particular moment in time**.

---

# Commit Pro Tips

Commits should be **atomic** so you can revert changes with minimal impact to the rest of the project.

Make sure your commit messages are **short** (50 characters max.) and **descriptive**.

Most developers start their commit messages with **present tense** verbs.

**Most importantly:** The commit message should explain what the committed code _does_.

---

class: center, middle

### Awesome!

Let's check the `log` and take a look at your first `commit`.

Run the following command: `git log`

---

class: center, middle

.large[
So, umm what?
]

---

class: center, middle

### Delete a folder in your project. <br />Go ahead, I'll wait.

**Hint:** use `ls` to list the folders in your project directory, and then `rm -r` one of them.

.red[
**DANGER:** Don't use `rm -r` outside your project directory, you won't be able to recover your files!
]

---

# Undoing Changes

Fear not, we can undo our local (uncommitted) changes using the following command:

```bash
git reset --hard HEAD
```

This will return our **working directory** to the state it was in at the time of our last commit, and remove all the local changes we made.

Read more on **[undoing various types of changes](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)** with Git.

---

class: center, middle

.large[
Phew.
]

---

# Exercise 1

Init a repo in your Project 1, make a `.gitignore` file, and make you first commit.

---

template: inverse

# A Basic Git Workflow with GitHub

---

# Now Add GitHub

When you work with a team you'll likely want to designate one copy of the repository as the "authoritative" place where everyone can **push** their own local changes and **pull** in other collaborators' changes.

A service such as GitHub or Bitbucket is a handy place for storing these repositories.

Now that you have a Git repository set up in your **local** project directory, it's time to add your repository to GitHub.

Let's visit [github.com](https://github.com/) and create your first GitHub **repo**.

---

# Add A Remote

After you've created your GitHub repository and copied the `.git` URL, run the following command:

```bash
git remote add origin [your github repository url]
```

Obviously, replace `[your github repository url]` with the actual URL of your new GitHub repo!

You can see the URLs of any existing remote repositories in your local repo by running `git remote -v` at any time.

---

# Push to GitHub

Now that your **local repository** is linked to your **remote repository** via the `origin` we set, we can send your project files to GitHub.

Run the following command:

```bash
git push -u origin master
```

You will likely need to authenticate with your GH credentials to complete this.

---

# Exercise 2

Create a repo on GitHub for your Project 1, add the remote to your local repo as instructed, and push your project up to GitHub.

---

# Adding a Readme

A **README** file is an important part of every repo on GitHub.

Your readme will provide a basic description of the code in your repo, and possibly also installation instructions, a list of contributors, license information, and other documentation related to the project.

GitHub will display the contents of your readme file below the list of files on the main page of your repo.

---

# Adding a Readme

GitHub supports supports [Markdown-formatting in readme files](https://help.github.com/articles/basic-writing-and-formatting-syntax/) if we save them as `README.md`, so add a file with this name and extension to project repo, then open it:

```bash
touch README.md
```

Now add some markdown to your `README.md` file and save:

```markdown
# Project 1

This is a thoughtful write-up about my project...
```

---

# Commit/Push Workflow

We want to send our new `README.md` file to GitHub now, so let's run through a typical committing/pushing workflow:

```bash
# Check for untracked/modified files
git status

# Stage the README for committing
git add -A

# Make a commit adding the README
git commit -m "Add readme to repo."

# Push your changes to GitHub
git push origin master
```

Now check your repo on GitHub to make sure your readme file is in your repo and that it displays there!

---

template: inverse

# Deploying your site with GitHub Pages

---

# Why Use GitHub Pages?

It's an easy way to get our projects online (for free!), and a great way to practice our Git skills too.

GitHub Page takes care of hosting your website files and gives a domain name so people can find your website.

---

# Types of GitHub Pages

It's important to note that there are two different kinds of sites you can deploy on GitHub Pages:

1. A user or organization site
2. A project site

---

# Some Limitations

GitHub pages have a few limitations:

* Static sites only (no database!)
* Form submissions are tricky
* Size limitations (1GB for a repo, 100MB max. per file)
* Bandwidth, up-time, support (you get what you pay for...)

---

# Deploying Your Site

Github does most of the work for us! Here's how to get it working:

* Visit your Repo Settings
* Scroll down to the **Github Pages** section
* In **Source**, choose `master branch`

---

# Congrats!

And that's it&mdash;you've deployed a website to the web!

In 10 minutes or less, you'll be able to see your project live at:

`http://<username>.github.io/<project_name>/`

---

# Updating Your Site

Whenever you make a push to `master`, your Github Pages site will update!

---

# Pulling Updates

You can stay up to date with changes others are pushing to the remote repo by running `git pull`.

This command will pull in changes from the remote and prompt you to merge them into your local version.

If you prefer to `pull` without a merge commit, you can run `git pull --rebase` instead.

---

# What We've Learned

* What the command line is and how to use it to navigate your file system
* What version control is
* The difference between Git and GitHub
* How to push code to GitHub
* How to host a site as a GitHub page

---

template: inverse

# Questions?

{% endhighlight %}
