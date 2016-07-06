---
layout: slidedeck
title: The Command Line Interface and Git
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Command Line Interface and Git

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Using the command line interface (CLI)
2. What is version control?
3. Git vs. GitHub
4. Initializing a repo and making commits
5. Working with remotes
6. Branching and merging (and using GitHub Pages)
7. Collaborating with others

---
template: inverse

# What is the Command Line Interface (CLI)?

---
class: center, middle

> "The command line is the ultimate seat of power on your computer...Unfortunately, the price of this power is complexity: nobody ever said that ruling your computer would be easy."

&mdash;David Baumgold

---
class: center, middle

.large[
   With great power also comes great responsibility...
]

---
class: center, middle

.large[
   But where do I find the command line?
]

---

# Command Line Apps

- On a Mac you can use the built-in Terminal app (or iTerm2)
- On Windows, you can use the built-in Cmd.exe, or install PowerShell, Cygwin, or Git BASH

---
template: inverse

# Let's Try Out Some Basic Commands

---
# Navigate the File System

`pwd` to figure out where you are:

![pwd command](../../public/img/slide-assets/cli-pwd.gif)

---

# Navigate the File System

`ls` to the list files in the current directory:

![ls command](../../public/img/slide-assets/cli-ls.gif)

---

# Change Directories

`cd <path>` to get to a sub-folder, and `cd ..` back:

![cd command](../../public/img/slide-assets/cli-cd.gif)

You can also `cd ../..` to go up two levels (and so on).

---

# Change Directories

Pro tip! You can `cd <drag/drop>` to populate the a path and `cd ~` to get all the way back to your home directory:

![cd drag and drop command](../../public/img/slide-assets/cli-cd-drag.gif)

---

# Work with Files

`touch <file>` to add a file and `rm <file>` to remove it:

![cd drag and drop command](../../public/img/slide-assets/cli-touch-rm.gif)

---

# Work with Files

You can also copy and move files within the file system:

- `cp <file> <location>` to copy a file
- `mv <file> <location>` to move a file

You can also rename a file using the `mv` command:

- `mv <old-file-name> <new-file-name>`

---

# Work with Folders

`mkdir <folder>` to create a new directory:

![cd drag and drop command](../../public/img/slide-assets/cli-mkdir-rmr.gif)

Then `rm -r <folder>` to delete it and all of its files.

---

# Work with Folders

Note the structure of the command we use to delete a folder and all of its files: `rm -r <folder>`

The `-r` is known as a **flag** or **option** for the command.

In this case, the `-r` roughly translates to "recursively delete all of the folder's files too."

**This does NOT send the folder/files to the Trash or Recycle Bin. They will be gone forever!**

---

# Work with Folders

If a directory is empty, you can also use `rmdir <folder>` to remove it.

This will only work if the directory does not contain any files (including hidden files).

---
class: center, middle

### Danger Will Robinson!

Never run `rm -rf /` or `rm -rf *` unless you want to delete everything on your computer!

---

# Exercise 1

Let's take the command line for a spin.

[See the lesson page](/lesson/the-command-line-interface-and-version-control/) for further instructions.

---

# Exercise 2

Now let's visualize what we just did on the CLI using humans and Fatboys...


---
template: inverse

# Version Control:<br /> Whys and Hows

---
class: center, middle

### What is Version Control?

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions and revert to previous states later on, if needed.

---

# What is Git?

- Traditional version control system are **centralized** where a single central copy of a project lives on server, and developers **commit** their changes to it
- But there are some downsides to this approach...

---

# What is Git?

- Git is a **distributed version control system (DVCS)**
- Developers **clone** copies of the **repository** locally with all of its previous history intact
- There can still be an "authoritative" repository that team members push to and pull from

---

# Git vs. GitHub

- Git is the **version control system**
- GitHub is a **web-based app** where you can create and account and then store and share your Git repositories
- This website is an example of a private GitHub repository!

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

*Save this file and return to your command line...*

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

- `git add index.html` will stage that file only
- `git add .` stages new and modified, without deleted
- `git add -u` stages modified and deleted, without new

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

**Most importantly:** The commit message should explain what the committed code *does*.

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
`git reset --hard HEAD`
```

This will return our **working directory** to the state it was in at the time of our last commit, and remove all the local changes we made.

Read more on **[undoing various types of changes](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)** with Git.

---
class: center, middle

.large[
   Phew.
]

---
class: center, middle

.large[
   But wait, there's more!
]

---
template: inverse

# Branching and Merging

---

# Branching

**Branches** are a cool feature of Git that allow you to make a copy of your code to which you can make separate commits without affecting the `master` branch.

Branches are helpful when you're working on a new feature for your project and you want to keep it separate from your main codebase until it's fully built-out.

---

# Branching

To create a new branch, check it out, and begin working on it, you simply run `git checkout -b <branch name> master`:

![git branch command](/public/img/slide-assets/git-branch.gif)

---

# Branching

To view all of the branches you've created in your project, run the following command:

```bash
git branch
```

---

# Merging Branches

Once you're done working on your branch, you'll need to **merge** your branch back into the master branch:

![git branch command](/public/img/slide-assets/git-merge.gif)

---

# Merging Branches

A typical branching workflow may work like this:

```bash
# Start a new feature
git checkout -b new-feature master

# Edit some files
git add <file>
git commit -m "Start a feature"

# Edit some files
git add <file>
git commit -m "Finish a feature"

# Merge in the new-feature branch, then delete it
git checkout master
git merge new-feature
```

**Tip:** You can back out of the merge (before completing it) by running `git merge --abort` from the command line.

---

# Cleaning Up

We'll want to remove our new branch, since we're done with it.

Run the following command to do this:

```bash
git branch -d [branch_name]
```

This step is optional, but we'll want to keep our **repository** free from unused / finished branches as a matter of organization.

---

# Rebase vs. Merge

Some people choose to use `git rebase [branch_name]` instead of `git merge [branch_name]`.

Rebasing is like merging, but it rewrites the history of the branch so that it looks like all of the changes on the branch being merged in actually happened on the destination branch.

---
class: center, middle

.large[
   Merging<br /><br />
]

.inline-images[
   ![git merge diagram](/public/img/slide-assets/git-merge-diagram.svg)
]

Image credit: [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/using-branches)

---
class: center, middle

.large[
   Rebasing
]

.inline-images[
   ![git rebase diagram](/public/img/slide-assets/git-rebase-diagram.svg)
]

Image credit: [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)

---
class: center, middle

### A Word of Caution!

Rebasing can be dangerous if you don't know what you're doing, and you never want to rebase commits on a branch that has been pushed to public, shared repository.

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

# Adding a Readme

A **readme** file is an important part of every repo on GitHub.

Your readme will provide a basic description of the code in your repo, and possibly also installation instructions, a list of contributors, license information, and other documentation related to the project.

GitHub will display the contents of your readme file below the list of files on the main page of your repo.

---

# Adding a Readme

GitHub supports supports [Markdown-formatting in readme files](https://help.github.com/articles/basic-writing-and-formatting-syntax/) if we save them as `README.md`, so add a file with this name and extension to project repo, then open it:

```bash
touch README.md
atom README.md
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

# All Together Now!<br /> Using GitHub Pages

---
class: center, middle

.large[
   Let's combine what we just learned about branching and remotes in Git...
]

---

# Why Use GitHub Pages?

It's an easy way to get our projects online (for free!) right now, and a great way to practice our Git skills too.

GitHub Page takes care of hosting your website files and gives a domain name so people can find your website.

---

# Types of GitHub Pages

It's important to note that there are two different kinds of sites you can deploy on GitHub Pages:

1. A user or organization site
2. A project site

---

# Some Limitations

GitHub pages have a few limitations:

- Static sites only (no database!)
- Form submissions are tricky
- Size limitations (1GB for a repo, 100MB max. per file)
- Bandwidth, up-time, support (you get what you pay for...)

---

# Deploying Your Site

To begin creating your project site, we'll start by creating and checking out a new branch in an existing repo that we have on GitHub.

This new branch must be called `gh-pages`.

```bash
cd my-project-folder
git checkout -b gh-pages master
```

Now let's push our files to the **gh-pages** branch on GitHub:

```bash
git push origin gh-pages
```

---

# Congrats!

And that's it&mdash;you've deployed a website to the web!

In 10 minutes or less, you'll be able to see your project live at:

`http://<username>.github.io/<project_name>/`

**Important!**

After deploying, you'll want to **switch back** to your `master `branch (or other current working branch).

---

# Updating Your Site

In plain English, we'd want to follow these steps:

1. Make and commit our changes on **master**
2. Push those changes to GitHub
3. Switch over to our **gh-pages** branch
4. Merge **master** into **gh-pages** to bring it up to date
5. Push the **gh-pages** branch to GitHub
6. Switch back to **master**

---

# Updating Your Site

A sample deployment workflow might look like this:

```bash
# make and commit our changes on master
git status
git add -A
git commit -m "Some descriptive commit message."

# update the master branch on GitHub
git push origin master

# switch to the gh-pages branch
git checkout gh-pages
git merge master

# commit the changes
git push origin gh-pages

# return to the master branch
git checkout master
```

---
template: inverse

# Collaborating with Others in Git

---
class: center, middle

.large[
   Git makes collaborating with other developers very easy!
]

---

# Cloning a Repo

You can `git clone <repo address>` to copy an existing repo to your computer:

![git clone command](/public/img/slide-assets/git-clone.gif)

Now you can make changes to your **local version** of the repo.

---

# Pulling Updates

You can stay up to date with changes others are pushing to the remote repo by running `git pull`.

This command will pull in changes from the remote and prompt you to merge them into your local version.

If you prefer to `pull` without a merge commit, you can run `git pull --rebase` instead.

---

# Pull via Rebase

The `--rebase` option can be used to ensure a linear history by preventing unnecessary merge commits.

Many developers prefer rebasing over merging, since it’s like saying, “I want to put my changes on top of what everybody else has done.”

---
class: center, middle

.inline-images[
   ![Git pull humour](/public/img/slide-assets/git-pull-meme.jpg)
]

---

# Pushing Your Changes

Once you make a commit, if you have write access for the repo on GitHub you can push your changes back to the repo on GitHub:

```bash
git push origin master
```

*But what if you don't have write access to the repo...?*

---

# Forking a Repo

If you don't have write access for the remote repo on GitHub, you can **fork** the repo, which makes a copy of the repo in your GitHub profile.

This is what you'll be doing when you peer-review each other projects. You'll then send a **pull request** to the original repo owner to incorporate your changes.

Read more on **[forking workflows](https://help.github.com/articles/fork-a-repo/)** and submitting **[pull requests](https://help.github.com/articles/using-pull-requests/)**.

---

# What We've Learned

- What the command line is and how to use it to navigate your file system
- What version control is
- The difference between Git and GitHub
- How to push code to GitHub
- How to manage workflows with branching and merging
- How to host a site as a GitHub page
- What collaborative workflows look like in Git

---
template: inverse

# Questions?

{% endhighlight %}
