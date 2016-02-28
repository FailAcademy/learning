---
layout: lesson
title: The Command Line Interface and Development Environments
slides: ['_slides/week-01/05-cli-vagrant.md']
lesson_date: 2016-01-22
---

## Pre-Work

### Learning Activities

Complete the following Codeacademy course prior to class:

- [Learn the Command Line](https://www.codecademy.com/learn/learn-the-command-line)

### Software Installation

You'll also need to install an appropriate **CLI app** and **git**. (We won't be learning git until Week 3,  but you'll need to run one git-related command to install Scotch Box this weekend).

**Mac users:**

Please ensure you have the Terminal app installed on your computer (this app comes pre-installed on every Mac, but make sure you verify that it's there).

Next, to install git:

1. [Download the latest version of git.](https://git-scm.com/downloads)
2. Open the `.dmg` file you downloaded and double-click the `.pkg` file to install it. If you get a notice saying that the package is from and “unidentified developer”, close out this warning message and instead right-click on the `.pkg` file and choose “Open”, then choose “Open” again in the dialogue box that pops up.
3. Open your Terminal app and type `git --version` and press return. If you see a *prompt that says The ‘git’ command requires command line developer tools. Would you like to install the tools?*, then go ahead and install it (this will take up ~150MB of hard drive space).

**Windows users:**

Please install **[Cygwin](https://www.cygwin.com/)** before class so you can run Linux-style commands on your Windows machine during the lesson.

[This video](https://www.youtube.com/watch?v=TjxEH_tr7e0) will run-through the Cygwin installation process. You will want to make sure you install the **openssh package** when installing Cygwin ([another video](https://www.youtube.com/watch?v=CwYSvvGaiWU) to help you with that).

Next, to install git:

1. [Download git for Windows.](https://git-scm.com/download/win)
2. Double-click the `.exe` file you just downloaded to install git on your system.

---

## Learning Objectives

- Explore computer's command-line interface (CLI) and how to use basic built-in commands to navigate and manipulate files and folders on your computer.
- Identify the purpose and value of working in portable development environments using Vagrant and a virutal machine provider like VirtualBox.
- Install VirtualBox and Vagrant, and prepare to install a popular LAMP stack Vagrant box.

---

## Keywords

- Command-line interface (CLI)
- Graphical user interface (GUI)
- Directory
- Working directory
- Command flag/option
- Virtual machine
- SSH (Secure Shell)

**Command line instructions:**

- `pwd`
- `cd`
- `ls`
- `touch`
- `mkdir`
- `rm`

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

## Exercise 3

Let's get ready to install our first Vagrant box:

- Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- Install [Vagrant](https://www.vagrantup.com/downloads.html)

Once Vagrant is installed, run `vagrant -v` to make sure it was installed correctly. (If it was, you'll see the Vagrant version number you're running.)

---

## Lab Activity

Today's lab activity time will be dedicated to continuing to work on Project 1.

And be sure to finish setting up [Scotch Box](https://box.scotch.io/) before Monday!

---

## Additional Resources

A quick intro to the command line:

- [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)

A handy cheat sheet of basic commands:

- [Command Line Cheat Sheet](http://www.git-tower.com/blog/command-line-cheat-sheet/)

Some commands you'll want to steer clear of on the CLI:

- [9 Lethal Linux Commands You Should Never Run](http://www.makeuseof.com/tag/9-lethal-linux-commands-never-run/)

Some helpful Vagrant resources:

- [An Introduction to Vagrant](https://css-tricks.com/an-introduction-to-vagrant/)
- [Vagrant Docs - Command Line Interface](https://docs.vagrantup.com/v2/cli/index.html)
- [Getting Started with Vagrant on Windows](http://www.sitepoint.com/getting-started-vagrant-windows/)
- [Re-introducing Vagrant: The Right Way to Start with PHP](http://www.sitepoint.com/re-introducing-vagrant-right-way-start-php/)
- [Vagrantbox.es](http://www.vagrantbox.es/)

More about SSH:

- [How SSH Works](https://www.youtube.com/watch?v=zlv9dI-9g1U)
- [SSH Essentials: Working with SSH Servers, Clients, and Keys](https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys)
