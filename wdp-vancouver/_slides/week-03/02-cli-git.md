---
layout: slidedeck
title: The Command Line and Version Control Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# Version Control from the Command Line with Git

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Introduce the command line interface (CLI)
1. Introduce Git
2. Install and setup Git
3. How does Git help coders?
4. Introduction to Github
5. Adding a repository and pushing up code
6. Use Git: branch, edit, commit, merge

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

- On a Mac you can use the built-in Terminal app
- On Windows, you'll want to use Windows PowerShell

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
class: center, middle

.large[
   Files are people too...
]

---

#Exercise 1
Folders are people too.
<br>
Write the appropriate command line commands for these written instructions:

- Create 2 folders, one named `Folder1` and one named `Folder2`, in your home directory
- Inside `Folder1` create 2 files with the extension `.txt`
- Copy the two files from `Folder1` into `Folder2`
- Delete one of the files in `Folder1`
- Delete `Folder2`
- Rename `Folder1` to `SuperFolder1`

<br>

When we're done, we'll do a group challenge to make sure we have an understanding of these commands.

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

# Git vs. GitHub

- Git is the **version control system**
- GitHub is a **web-based app** where you can create and account and then store and share your Git repositories
- This website is an example of a private GitHub repository

.inline-images[
   ![Git logo](../../public/img/slide-assets/git-logo.png)
   ![GitHub logo](../../public/img/slide-assets/octocat-logo.png)
]

---
class: center, middle

.large[
   Let's dive in...
]

---

# Post-Install Set-up

Once you have Git installed on your computer, you'll need to run the following commands, one after the other from the command line, to ensure that Git knows how to publish information about the code you write:

```bash
git config --global user.name "Your Name"
git config --global user.email you@email.com
git config --global push.default matching
git config --global alias.co checkout
```

---
class: center, middle

Now let's initialize a new Git **repository** ("repo" for short).

`cd` into your project directory and type:

.large[
   `git init`
]

---
class: center, middle

.large[
   Welcome to the world of version control with Git!
]

---
class: center, middle

Now that you've initialized a Git repository in your project directory, let's `add` your project files to the new **repository**.

Run the following command:

.large[
   `git add -A`
]

---
class: center, middle

What happenned? Let's find out...

Check the `status` of your new **repository**.

Run the following command:

.large[
   `git status`
]

---
class: center, middle

Once we've added our files, we then need to `commit` them to our repository.

Be sure to leave a message about what you're committing, so others will know what you've changed or added.

Run the following command:

.medium[
   `git commit -m "Initialize new repository!"`
]

---
class: center, middle

### Awesome!

Let's check the `log` and take a look at your first `commit`.

Run the following command:

.large[
   `git log`
]

---
class: center, middle

.large[
   So, umm what?
]

---
class: center, middle

### Delete a folder in your project.<br> Go ahead, I'll wait.

**Hint:** use `ls` to list the folders in your project directory, and then `rm -rf` one of them.

.red[
   **DANGER:** Don't use `rm -rf` outside your project directory, you wont be able to recover your files!
]

---
class: center, middle

Check the `log` and see what Git says about what we did.

Run the `log` command again:

.large[
   `git log`
]

---
class: center, middle

Fear not, we can undo our changes using the following command:

.large[
   `git checkout -f`
]

---
class: center, middle

.large[
   Phew.
]

---
template: inverse

# Basic Git Workflow with Github

---

# Now Add GitHub

Now that you have a git repository set up in your **local** project directory, it's time to add your repository to github and learn the basics of version control with Git & Github.

Lets visit [github.com](https://github.com/) and create your first Github **repo**.

---

# Add A Remote

After you've created your Github repository and copied the `.git` URL, run the following command:

```bash
git remote add origin [your github repository url]
```

Obviously, replace `[your github repository url]` with the actual URL of your new Github **repo**!

Let's examine the `.git` URL...

---

# Push to Github

OK now that your **local repository** is linked to your **remote repository** via the `origin` we set, we can send your project files to GitHub.

Run the following command:

```bash
git push -u origin --all
```

---
template: inverse

# Branch, Edit, Commit & Merge

---

# Branches

Git is incredibly good at making **branches**, which are effectively copies of a **repository** where we can make (possibly experimental) changes without modifying the parent files.

In most cases, the parent repository is the **master branch**, and we can create a new topic branch by using the following command:

```bash
git checkout -b [new_branch_name]
```

---

# Viewing Branches

To view all of the branches you've created in your project, run the following command:

```bash
git branch
```

---
class: center, middle

.large[
   Let's try editing a file while checked out on the new branch...
]

---

# Commit on the Branch

**Use what you know**: Check the `status` of your changes and `commit` them.

Shortcut! You can `add` and `commit` your files with one command:

```bash
git commit -a -m "file has changed"
```

(Just be sure this is what you want to do...)

---

# On Writing Good Commit Messages

Commit messages are the key to understanding the changes you've made to your code, and the best commit messages follow these simple rules:

- Present tense
- Less than 50 characters

**Most importantly:** The commit message should explain what the committed code *does*.

---
class: center, middle

.large[
   Now how do we update our `master` branch?
]

---

# Merging onto master

When we're happy with the changes we've made in our new branch, we'll merge those changes back into the `master` branch.

The `master` branch should only contain code we're committed to using in our projects!

To switch back into the `master` branch, run the following command:

```bash
git checkout master
```

---

# Merging onto master

Now that we're back in our master branch, we'll merge the changes from our new branch. Run the following command:

```bash
git merge [new_branch_name]
```

Obviously, replace `[new_branch_name]` with the name of the branch you created.

---
class: center, middle

.large[
   Success!
]

---

# Cleaning Up

We'll want to remove our new branch, since we're done with it.

Run the following command to do this:

```bash
git checkout -d [new_branch_name]
```

This step is optional, but we'll want to keep our **repository** free from unused / finished branches as a matter of organization.

---
class: center, middle

### One last last thing...

Let's push our code to Github!

.large[
   `git push`
]

---

# What We've Learned

- What the command line is
- How to navigate the file system from the CLI
- What version control is
- The difference between Git and GitHub
- How to push code to Github
- How to manage workflows with branching and merging

---

#Exercise 2
Visit the learn git branching site and complete as many of the tutorials as possible!
- [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)

---
template: inverse

# Questions?

{% endhighlight %}
