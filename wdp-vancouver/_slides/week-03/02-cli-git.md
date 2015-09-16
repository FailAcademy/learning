---
layout: slidedeck
title: The Command Line and Version Control with Git Slides
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

---

# Work with Folders

If a directory is empty, you can also use `rmdir <folder>` to remove it.

This will only work if the directory does not contain any files (including hidden files).

---
class: center, middle

### Danger Will Robinson!

Never run `rm -rf /` or `rm -rf *` unless you want to delete everything on your computer!

---
template: inverse
#Files are people too 

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

# What We've Learned

- What the command line is
- How to navigate the file system from the CLI
- What version control is
- The difference between Git and GitHub

---
template: inverse

# Let's dive in

---
### First time post-install setup:

Once you have Git installed on your computer, you'll need to run the following commands, one after the other from the command line, to ensure that Git knows how to publish information about the code you write.

`git config --global user.name "Your Name"`<br>
`git config --global user.email you@email.com`<br>
`git config --global push.default matching`<br>
`git config --global alias.co checkout`<br>


---

class: center, middle

Initialize a new Git **repository** *('repo' for short)* using this command. `cd` into your project directory and type:

.large[
   `git init`
]

---
template: inverse

##Welcome to the world of Version Control with Git!

---

class: center, middle

Now that you've initialized a Git repository in your project directory, let's `add` your project files to the new **repository**. Run the following command:

.large[
   `git add -A`
]

---
class: center, middle

What happenned? Let's find out.  Check the `status` of your new **repository**. Run the following command:

.large[
   `git status`
]

---
class: center, middle

Once we've added all of the files, we need to `commit` them to our **repository**. Be sure to leave a message about wjhat you're `commit`ting, so others will know what you've changed or added. Run the following command:

.medium[
   `git commit -m "Initialize new repository!"`
]

---
class: center, middle

#Awesome
Let's check the `log` and take a look at your first `commit`. Run the following command: 

.large[
   `git log`
]

---
template: inverse

##So, umm what?

---
template: inverse

##Delete a folder in your project. Go Ahead, I'll wait.
(hint: use `ls` to list the folders in your project directory, and then `rm -rf` one of them)

.red[DANGER: Don't use `rm -rf` outside your project directory, you wont be able to recover your files!]

---
class: center, middle

Let's check the `log` and see what Git says about what we've done. Run the `log` command again.

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
template: inverse

##Phew.

{% endhighlight %}
