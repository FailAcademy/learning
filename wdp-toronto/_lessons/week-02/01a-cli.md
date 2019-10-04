---
layout: lesson
title: The Command Line Interface
slides: ["_slides/week-02/01a-cli.md"]
lesson_date: 2019-07-08
---

## Pre-Work

### Tutorials

Complete the following Udacity bash shell tutorial:

- [Shell Workshop](https://www.udacity.com/course/shell-workshop--ud206)

### Software Installation

**Mac users:**

Download iTerm2, which is a much better app than the default Terminal app.

- [Download iTerm2](https://www.iterm2.com/downloads.html) (Make sure you download the _stable_ version)

We will be using Homebrew to install some command-line tools. If you're feeling adventurous, you can install it before class.

- [Install Homebrew](https://brew.sh/)

**Windows users:**

Install Git and Git Bash:

1.  [Download Git for Windows.](https://git-scm.com/download/win)
2.  Double-click the `.exe` file you just downloaded to install Git on your system.

The installation process will also install Git Bash on your computer, which you can use to run most of the commands in the lesson.

---

## Learning Objectives

- Explore computer's command-line interface (CLI).
- Use basic built-in commands to navigate and manipulate files and folders on your computer.

---

## Keywords

- Command-Line Interface (CLI)
- Graphical User Interface (GUI)
- Directory
- Working directory
- Command flag/option

**Command line instructions:**

- `pwd`
- `cd`
- `ls`
- `touch`
- `mkdir`
- `rm`

---

## Exericse 1

There are two types of paths: **absolute** and **relative**.

Find a partner. One of you will research **absolute paths**, and the other will research **relative paths**. Once you understand them, explain them to each other.

---

## Exercise 2

There are three common aliases that we use to navigate our file tree:

- `.`
- `..`
- `~`

Split into three groups (one per alias). Research the alias, and describe a situation where you would use it.

---

## Exercise 3

Given the following file tree:

```
                          Root
                            |
                          Users
                            |
             |----------------------------|
             |                            |
           Annie                        Bobby
             |                            |
    |------------------|           |----------------|
    |        |         |           |      |         |
Desktop  Documents  Pictures    Movies  Music  Applications
```

- How would you `cd` from `Users` to `Music`?
- How would you `cd` from `Documents` to `Root`?

---

## Exercise 4

1.  Navigate to your Desktop
2.  Create a directory called `my_site`
3.  Rename the `my_site` directory `website`
4.  Create an `index.html` file inside of your new directory
5.  Create an `assets` sub-directory in there too
6.  Add a `style.css` file to `assets`
7.  Delete the `assets` folder and its contents
8.  Delete the `index.html` in the root of your `website` directory
9.  Delete the `website` directory

---

## Lab Activity

Continue work on Project 1 based on what you've learned so far.

---

## Additional Resources

Handy command line resources for beginners:

- [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)
- [Command Line Cheat Sheet](http://www.git-tower.com/blog/command-line-cheat-sheet/)
- [Explain Shell](https://explainshell.com/)
- [The Bash Guide](http://www.bash.academy/)

Generate your bash prompt easily using this drop-and-drop interface:

- [PS1 Generator](http://bashrcgenerator.com/)

Some commands you'll want to steer clear of on the CLI:

- [9 Lethal Linux Commands You Should Never Run](http://www.makeuseof.com/tag/9-lethal-linux-commands-never-run/)

Have some fun with the CLI:

- [Fun at the UNIX Terminal Part 1](https://blog.regehr.org/archives/1483)
