---
layout: slidedeck
title: Git and GitHub Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Git & GitHub

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is Git and version control?
2. Git vs. GitHub
3. Using Git with a GUI
4. Hosting with GitHub Pages
5. Let's deploy!

---

# Exercise 1

Let's install Git, GitHub Desktop, and Git Shell (Windows only) to get our command line ready for use throughout the lesson.

Check out the steps for this exercise on the [learning materials page](/lesson/git-and-github/) for this lesson.

---
template: inverse

# Now Let's Demystify Version Control

---
class: center, middle

### What is Version Control?

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions and revert to previous states later on, if needed.

---

# What is Git?

- Traditional version control system are "centralized" where a single central copy of a project lives on server, and developers **commit** their changes to it
- But there are some downsides to this approach...

---

# What is Git?

- Git is a **distributed version control system (DVCS)**
- Developers **clone** copies of the **repository** locally with all of its previous history intact
- There can still be an "authoritative" repository that team members push to and pull from

---

# Other Key Terms

- Working directory
- Repository
- Commit
- Branch
- Push/Pull
- Remote

---

# Git vs. GitHub

- Git is the **version control system**
- GitHub is a **web-based app** where you can create and account and then store and share your Git repositories
- This website is an example of a private GitHub repository

.inline-images[
   ![Git logo](/public/img/slide-assets/git-logo.png)
   ![GitHub logo](/public/img/slide-assets/octocat-logo.png)
]

---
class: center, middle

.large[
   GitHub tour...
]

---
template: inverse

# Let's Use Some Git!

---
class: center, middle

### To GUI or not to GUI?

We can use the CLI to run Git commands or a GUI-based app.

We'll use the **[GitHub Desktop](https://desktop.github.com/)** GUI app for our version control work in this class.

---

# Add a Repository:

.inline-images[
   ![Add a repo](/public/img/slide-assets/gh-01-add-repo.png)
]

---

# Repo Created!

.inline-images[
   ![Repo created](/public/img/slide-assets/gh-02-created-not-commited.png)
]

---

# Make the Commit:

.inline-images[
   ![Write commit message](/public/img/slide-assets/gh-03-write-commit-message.png)
]

---

# Commit Made:

.inline-images[
   ![Make the commit](/public/img/slide-assets/gh-04-make-commmit.png)
]

---

# Put Repo on GitHub

Once you have added your local repository, you can click the **Publish** button to send your files to GitHub:

.inline-images-border[
   ![Publish button](/public/img/slide-assets/gh-05a-push-to-gh.png)
]

---

# Prepare to Publish:

.inline-images[
   ![Push to GitHub](/public/img/slide-assets/gh-05b-push-to-gh.png)
]

---

# Push to GitHub:

.inline-images[
   ![Push to GitHub](/public/img/slide-assets/gh-05c-pushed.png)
]

---

# Check It Out!

If you go to your GitHub account in a web browser now, you should be able to see your project listed as one of your **repositories**.

Now that you've made your first commit, you can make additional commits as you make changes to your project by following the same steps.

---

# Prepare New Commit:

.inline-images[
   ![Add repo with GitHub app](/public/img/slide-assets/gh-06-prepare-new-commit.png)
]

---

# Make the New Commit:

.inline-images[
   ![Add repo with GitHub app](/public/img/slide-assets/gh-07-make-commit-and-sync.png)
]

---

# Sync with GitHub

To **push** your new changes to your repo on GitHub, you need to sync your changes by clicking the **Sync** button.

.inline-images-border[
   ![Sync button](/public/img/slide-assets/gh-sync-button.png)
]

And if you are collaborating on a project with others, you can click the **Sync** button to **pull** in their changes from GitHub.

---

# Exercise 2

Let's put some real code up on GitHub using the skills we just learned.

You're going to turn your project into a Git repo, and push it to GitHub. Use GitHub Desktop to do this.

---
template: inverse

# Undoing Our Work

---
class: center, middle

### Turning back time...

We can **revert** an individual commit using GitHub Desktop.

---
class: center, middle

**How to revert:**

.inline-images-border[
   ![Revert a commit in GitHub for Mac](/public/img/slide-assets/gh-revert.png)
]

---
class: center, middle

**Reverts make new commits...so they are revertable too!**

.inline-images[
   ![Reverts result in new commits](/public/img/slide-assets/gh-revert-commit.png)
]

---
template: inverse

# Hosting 101

---

# Getting Your Website on the Web

So far we have built and viewed our websites locally on our own computers, but eventually you're probably going to want to share what you've built with a bigger audience.

To do that, you need to **host** your website on a web server.

---

# Hosting 101

We're going to dedicate an entire lesson to web hosting and domain names later in the course.

For now, just know that in order to get your website online you'll need the following two things...

---
class: center, middle

.large[
   A domain name

   .red[**AND**]

   Space on a web server to host your website files
]

---
class: center, middle

![Diagram of HTTP request](/public/img/slide-assets/http-request-diagram.svg)

---
template: inverse

# Why Use GitHub Pages?

---

# Why Use GitHub Pages?

It's an easy way to get our projects online (for free!) right now, and a great way to practice our Git skills too.

GitHub Pages takes care of hosting your website files and gives a domain name so people can find your website.

.inline-images[
   ![GitHub logo](/public/img/slide-assets/octocat-logo.png)
]

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
template: inverse

# Using GitHub Pages

---

# Branching and Merging

**Branches** are a cool feature of Git that allow you to make a copy of your code to which you can make separate commits without affecting the `master` branch.

Branches are helpful when you're working on a new feature for your project and you want to keep it separate from your main code base until it's fully built-out.

We'll need to use a branch to deploy our site as a GitHub Page.

---

# Getting Started

To begin creating your project site, we'll start by creating and checking out a new branch in an existing repo that we have on GitHub.

**Important:** This branch must be called `gh-pages`.

---
class: center, middle

### Using a GUI

We can easily set up and maintain a GitHub Pages website using GitHub Desktop...

---
class: center, middle

**Step 1: Create a `gh-pages` branch in your repo**

.inline-images[
   ![Create a gh-pages branch](/public/img/slide-assets/gh-pages-branch.png)
]

---
class: center, middle

**Step 2: Publish your `gh-pages` branch**

.inline-images[
   ![Publish your gh-pages branch](/public/img/slide-assets/gh-pages-publish.png)
]

---

# Congrats!

And that's it&mdash;you've deployed a website to the web! In 10 minutes or less, you'll be able to see your project live on the web at:

`http://<username>.github.io/<project_name>/`

After deploying, you'll want to **switch back** to your `master `branch (or other current working branch).

---

# Updating Your Site

Let's say we've deployed our site and we're back working on our master branch locally.

Once we're happy with our changes and we're ready to deploy to GitHub, we need to think about where we send our code.

---

# Updating Your Site

First, we want to make sure we update to our master branch (as a good habit, and to make sure that other collaborators can pull in our most recent commits).

Next, we'll want to make sure we merge the current version of the master branch into our `gh-pages` branch too.

In doing so, we'll be **deploying** our new code live on the web.

---
class: center, middle

**Step 1: Make updates on your `master` branch**

.inline-images[
   ![Make updates on your master branch](/public/img/slide-assets/gh-pages-update-master.png)
]

---
class: center, middle

**Step 2: Switch to `gh-pages` branch to merge changes**

.inline-images[
   ![Take a look at your branches](/public/img/slide-assets/gh-pages-check-branches.png)
]

---
class: center, middle

**Step 3: Merge `master` into the `gh-pages` branch**

.inline-images[
   ![Merge master into the gh-pages branch](/public/img/slide-assets/gh-pages-merge.png)
]

---
class: center, middle

**Step 4: Check out your new merge commit**

.inline-images[
   ![Check out your new merge commit](/public/img/slide-assets/gh-pages-commit-update.png)
]

---
class: center, middle

**Step 5: Sync new commits to `gh-pages` branch**

.inline-images[
   ![Sync new commit to gh-pages](/public/img/slide-assets/gh-pages-sync-update.png)
]

---
template: inverse

# Merge Conflicts!!!

---

# Resolving Conflicts

If you attempt a merge and are told you have a conflict...

1. **Don't panic!**
2. Open the files that have conflicts
3. Edit the files and save your changes
4. Proceed with your merge in CLI or the GitHub GUI

**Tip:** You can back out of the merge (before completing it) by running `git merge --abort` from the command line.

---

# Exercise 3

Your turn! Take GitHub Pages for a spin by deploying the source files for your project on a `gh-pages` branch.

---

# What We've Learned

- What version control is
- The difference between Git and GitHub
- How to use a GUI-based Git app
- How to create a `gh-pages` branch and keep it updated
- How to deal with merge conflicts
- How to revert commits in our repositories

---
template: inverse

# Questions?

{% endhighlight %}
