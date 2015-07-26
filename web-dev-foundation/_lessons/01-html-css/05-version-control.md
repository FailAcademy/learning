---
layout: lesson
title: Version Control with Git
slides: ['_slides/01-html-css/05-version-control-slides.md']
---

## Recommended Reading

A quick intro to the command line:

- [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)

This fun tutorial will introduce you to its basic functions:

- [Try Git](https://try.github.io/)

## Learning Objectives

- Understand what version control is and why it’s important
- Run basic commands such as navigating the file system, and viewing and deleting files
- Create a Git repo locally, commit code, and push the code to remote repo on GitHub
- Level-up in Git by creating and merging branches

## Keywords

- Command-line interface (CLI)
- Graphical user interface (GUI)
- Directory
- Working directory
- Command flag/option
- Distributed version control system (DVCS)
- Repository
- Commit
- Branch
- Push/Pull
- Remote

## Exercise 1

Let's install Git, GitHub for Windows/Mac, and Git Shell (Windows only) to get our command line ready for use throughout the lesson:

### Windows

1. Download [GitHub for Windows](https://windows.github.com/)
2. Double-click the **GitHubSetup** installer you just downloaded and follow the steps to install the application (this will also install the latest version of Git on your system)
3. Once installed, click on the **GitHub** shortcut icon to open the application
4. Once open, walk through the configuration steps:
	- Enter you GitHub username and password to log in
	- The GitHub app should automatically populate your full name and email address, but if it doesn't, add them manually and click "Continue"
	- Go to the Dashboard when prompted and wait for the command line tools to be extracted

The **Git Shell** is what we will use to practice our CLI-based Git skills, so keep this handy on your Desktop too!

### Mac

1. Download the [latest version of Git](https://git-scm.com/downloads)
2. Open the `.dmg` file you downloaded and double-click the `.pkg` file to install it
   - If you get a notice saying that the package is from and "unidentified developer", close out this warning message and instead right-click on the `.pkg` file and choose "Open", then choose "Open" again in the dialogue box that pops up to install Git
3. Open your Terminal application and type `git --version` and press return. If you see a prompt that says *The 'git' command requires command line developer tools. Would you like to install the tools?*, then you have **two options**:
   - Click "Install" if you would like to install Apple's command line developer tools (it will take up ~150MB of hard drive space)
   - If you prefer not to install command line developer tools, you can "trick" you computer into running Git commands without the command line developer tools installed by doing the following:
      1. Open your Terminal application and type: `nano ~/.bash_profile` then press return
      2. You have just opened a text file inside of a command line-based text editor known as **nano**. Now you must edit your `.bash_profile` file so it includes an alias for your Git commands.
      3. Add this line to the open file: `alias git="/usr/local/git/bin/git"`
      4. Press `Control + O` and press return to save your changes to the file
      5. Press `Command + X` to exit nano and go back to the command line
      6. Quit the Terminal and re-launch it to see your changes
      7. Type `git --version` and you should now see what version of Git is installed on your system
4. Download and install [GitHub for Mac](https://mac.github.com/)
5. Double-click on the downloaded file to begin installation. When prompted, choose **Move to Application Folder**.
6. Once the application is installed, walk through the configuration steps:
   - Enter you GitHub username and password to log in
   - The GitHub app should automatically populate your full name and email address, but if it doesn't, add them manually and click "Continue"

**Optional, but recommended:**

Want to clean up your shell prompt to just show the name of the current directory (and the active branch of any initialized Git repo)?

Open your `.bash_profile` using nano (as instructed in Step 3 above), add these lines to the file, and save it (as instructed above):

```bash
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\W\$(parse_git_branch) \$ "
```

You will need to restart Terminal to see the changed prompt.

## Exercise 2

Time to roll up your sleeves and try out some commands!

You're going to do the following using the CLI only:

1. Make sure you have Terminal (Mac) or Git Shell (Windows) installed
2. Try out the the `pwd` and `ls` commands
3. Navigate to your Desktop and create a directory called `website`
4. Create an `index.html` file inside of your new directory (using the CLI!)
5. Create an `assets` sub-directory in there too
6. Add a `style.css` file to `assets`
7. Delete the `assets` folder and its contents
8. Delete the `index.html` in the root of your `website` directory
9. Delete the `website` directory

## Exercise 3

Let's put some real code up on GitHub using the skills we just learned.

You're going to turn your Week 1 Project into a Git repo, and push it to GitHub.

You can use a GUI-based app to accomplish this, or if you're brave, try doing it entirely from the command line.

## Lab Activity

The only way to get more comfortable with the command line is to keeping practicing!

Try out Code Academy's (beta) tutorial for learning how to navigate the file system:

- [Learn the Command Line](https://www.codecademy.com/en/courses/learn-the-command-line)

This tutorial will be a great review of `cd` and `ls`, and you'll get even more practice using `mv` and `cp` in various ways not covered in class. Consider the portion of this tutorial on "Redirection" to be extra credit, as it is quite advanced.

The remainder of the lab activity time will be dedicated to working on [Project 1](/project/project-1/). Be sure to **commit your changes** to your new Git repo as you work from now on.

## Additional Resources

A handy cheat sheet of basic commands:

- [Command Line Cheat Sheet](http://www.git-tower.com/blog/command-line-cheat-sheet)

Some commands you'll want to steer clear of the CLI:

- [9 Lethal Linux Commands You Should Never Run](http://www.makeuseof.com/tag/9-lethal-linux-commands-never-run/)

A helpful visual guide to Git from Atlassian:

- [Getting Git Right](https://www.atlassian.com/git/)

Need help with a Git problem? Try:

- [First Aid Git](http://firstaidgit.io/#/)

A free ebook on Git:

- [Pro Git ebook](http://git-scm.com/book/en/v2)

Interested in the legacy of the command line vs. GUI interfaces? Check out:

- [In the Beginning was the Command Line](http://cristal.inria.fr/~weis/info/commandline.html)
