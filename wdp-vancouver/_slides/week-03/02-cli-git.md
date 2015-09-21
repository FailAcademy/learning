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

---
template: inverse

##Basic Git Workflow with Github

---
class: center, middle

Now that you have a git repository set up in your **local** project directory, it's time to add your repository to github and learn the basics of version control with Git & Github!

Lets visit .red[www.github.com] and create your first Github **repository**.

---
class: center, middle

After you've created your Github repository and copied the `.git` url, run the following command:

.medium[
   `git remote add origin [your github repository url]`
]
<br>
Obviously, replace `[your github repository url]` with the actual url of your new Github **repo**! 

(Let's examine the `.git` url)

---
template: inverse

##Send your project files to Github

---
class: center, middle

OK now that your **local repository** is linked to your **remote repository**, via the `origin` we set, we can send the project files. Run the following command:

.large[
   `git push -u origin --all`
]
---
template: inverse

 ##Branch, edit, commit, merge

---
class: center, middle

"Git is  is incredibly good at making **branches**, which are effectively copies of a
**repository** where we can make (possibly experimental) changes without modifying
the parent files. In most cases, the parent repository is the **master branch**,
and we can create a new topic branch by using the command <br> `git checkout -b [new_branch_name]`"

---
template: inverse

 ##Create a new git branch

---
class: center, middle

To view all of the branches you've created in your project, run the following command: 

.large[
   `git branch`
]

---
template: inverse

 ##Edit a file in your new branch

---
class: center, middle

 .large[**Use what you know**: check the `status` of your changes and `commit` them!]

You can `add` and `commit` your files with one command: <br>
 `git commit -a -m "file has changed"`

---

##Writing good commit messages

Commit messages are the key to understanding the changes you've made to your code, and the best commit messages follow these simple rules: 

- Present tense
- Less than 50 chars

Most importantly: The commit message should explain what the commit **does**.

---
template: inverse

 ##Merge new code changes into the master branch

---
class: center, middle

When we're happy with the changes we've made in our new branch, we'll merge those changes back into the `master` branch.
The `master` branch should only contiain code we're comitted to using in our projects!

To switch  back inot the `master` branch, run the following command: <br>
.large[`git checkout master`]

---
class: center, middle

Now that we're back in our master branch, we'll merge the changes from our new branch. Run the following command: 

.medium[`git merge [new_branch_name]`]

Obviously, replace `[new_branch_name]` with the name of the branch you created.

---
template: inverse

## Success!

---
class: center, middle

We'll want to remove our new branch, since we're done with it. Run the following command to do this: 

.medium[`git checkout -d [new_branch_name]`]

This step is optional, but we'll want to keep our **repository** free from unused / finished branches as a matter of organization.

---
class: center, middle

## One last last thing

Let's push our code to Github!

.large[`git push`]

---
template: inverse

# DONE!

{% endhighlight %}
