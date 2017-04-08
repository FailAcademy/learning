---
layout: lesson
title: The Command Line Interface and Git
slides: ['_slides/week-01/03b-cli-git.md']
lesson_date: 2017-04-13
---

## Pre-Work

### Tutorials

Complete the following Codeacademy course prior to class:

- [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)

Also complete the following Code School Git tutorial before class:

- [Try Git](https://try.github.io/)

### Software Installation

You'll also need to install an appropriate **CLI app** and **Git**.

**Mac users:**

Please ensure that you have the Terminal app installed on your computer (this app comes pre-installed on every Mac, but make sure you verify that it's there).

Next, to install Git:

1. [Download the latest version of git.](https://git-scm.com/downloads)
2. Open the `.dmg` file you downloaded and double-click the `.pkg` file to install it. If you get a notice saying that the package is from and “unidentified developer”, close out this warning message and instead right-click on the `.pkg` file and choose “Open”, then choose “Open” again in the dialogue box that pops up.
3. Open your Terminal app and type `git --version` and press return. If you see a *prompt that says The ‘git’ command requires command line developer tools. Would you like to install the tools?*, then go ahead and install it (this will take up ~150MB of hard drive space).

**Windows users:**

To install Git:

1. [Download Git for Windows.](https://git-scm.com/download/win)
2. Double-click the `.exe` file you just downloaded to install Git on your system.

The installation process will also install Git BASH on your computer, which you can use to run most of the commands in the lesson.

---

## Learning Objectives

- Explore computer's command-line interface (CLI) and how to use basic built-in commands to navigate and manipulate files and folders on your computer.
- Use the Git CLI to perform common Git tasks.
- Explore GitHub and the Git workflows we'll be using for the remainder of the course.
- Create a Git repo locally, commit code, and push the code to remote repo on GitHub.
- Deploy a website on GitHub Pages using a `gh-pages` branch.

---

## Keywords

- Command-line interface (CLI)
- Graphical user interface (GUI)
- Directory
- Working directory
- Command flag/option
- Git
- Distributed version control system (DVCS)
- GitHub
- Repository (repo)
- Staging area
- Commit
- Branch
- Push/Pull
- Remote
- Merge
- Merge conflict
- Revert

**Command line instructions:**

- `pwd`
- `cd`
- `ls`
- `touch`
- `mkdir`
- `rm`

**Git commands:**

- `status`
- `add`
- `commit`
- `push`
- `pull`
- `merge`
- `log`

---

## Exercise 1

Time to roll up your sleeves and try out some commands!

You're going to do the following using the CLI only:

1. Try out the the `pwd` and `ls` commands
2. Navigate to your Desktop and create a directory called `my_site`
3. Rename the `my_site` directory `website`
4. Create an `index.html` file inside of your new directory (using the CLI!)
5. Create an `assets` sub-directory in there too
6. Add a `style.css` file to `assets`
7. Delete the `assets` folder and its contents
8. Delete the `index.html` in the root of your `website` directory
9. Delete the `website` directory

---

## Exercise 2

Now let's visualize what we just did on the CLI using humans and Fatboys...

---

## Lab Activity

See the [HTML Forms](/lesson/html-forms/) for lab activity details.

If you're not 100% comfortable, take time to get more practice with Git-based version control by completing Codeacademy's [Learn Git](https://www.codecademy.com/learn/learn-git).

---

## Additional Resources

Handy command line resources for beginners:

- [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
- [Command Line Cheat Sheet](http://www.git-tower.com/blog/command-line-cheat-sheet/)
- [Explain Shell](https://explainshell.com/)

Some commands you'll want to steer clear of on the CLI:

- [9 Lethal Linux Commands You Should Never Run](http://www.makeuseof.com/tag/9-lethal-linux-commands-never-run/)

Some Git resources and tutorials:

- [Visualizing Git Concepts with D3](https://onlywei.github.io/explain-git-with-d3/)
- [Getting Git Right](https://www.atlassian.com/git/)
- [Pro Git ebook](http://git-scm.com/book/en/v2)
- [Learn Git Branching](http://pcottle.github.io/learnGitBranching/)

Need help with a Git problem? Try:

- [First Aid Git](http://firstaidgit.io/#/)

Tips for writing great Git commit messages:

- [The Art of the Commit](http://alistapart.com/article/the-art-of-the-commit)

Make your command prompt Git-aware:

- [Git Aware Prompt](https://github.com/jimeh/git-aware-prompt)
- [Snippet for customizing your bash profile](https://gist.github.com/mandiwise/8112fb0668f4801cc3f9)

Different ways to undo things using Git:

- [How to undo (almost) anything with Git](https://github.com/blog/2019-how-to-undo-almost-anything-with-git)

Some GitHub Pages resources:

- [GitHub Pages](https://pages.github.com/)
- [GitHub Help - GitHub Pages Basics](https://help.github.com/categories/github-pages-basics/)
- [Using GitHub Pages To Host Your Website](http://blog.teamtreehouse.com/using-github-pages-to-host-your-website)
