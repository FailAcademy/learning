---
layout: lesson
title: Git and GitHub
slides: ['_slides/week-04/02a-git-and-github-slides.md']
---

## Recommended Reading

Read up on the basics of GitHub Desktop before the lesson:

- [Contributing to Projects with GitHub Desktop](https://help.github.com/desktop/guides/contributing/)

Browse through this interactive step-by-step guide to familiarize yourself with how GitHub pages works:

- [A guide to using GitHub pages](https://www.thinkful.com/learn/a-guide-to-using-github-pages/)

---

## Learning Objectives

- Understand what version control is and why it’s important
- Create a Git repo locally, commit code, and push the code to remote repo on GitHub
- Level-up in Git by creating and merging branches
- Deploy a project website on GitHub Pages using either a command line or a GUI.

---

## Keywords

- Working directory
- Distributed version control system (DVCS)
- Repository
- Commit
- Branch
- Push/Pull
- Remote
- Project vs. user page
- Merge conflict
- Revert

---

## Exercise 1

Let's install Git, GitHub Desktop, and Git Shell (Windows only) so we can use them during the lesson:

### Windows

1. Download [GitHub Desktop for Windows](https://desktop.github.com/)
2. Double-click the **GitHubSetup** installer you just downloaded and follow the steps to install the application (this will also install the latest version of Git on your system)
3. Once installed, click on the **GitHub** shortcut icon to open the application
4. Once open, walk through the configuration steps:
	- Enter your GitHub username and password to log in
	- The GitHub app should automatically populate your full name and email address, but if it doesn't, add them manually and click "Continue"
	- Go to the Dashboard when prompted and wait for the command line tools to be extracted

The **Git Shell** is what we will use to practice our CLI-based Git skills, so keep this handy on your Desktop too!

### Mac

1. Download the [latest version of Git](https://git-scm.com/downloads)
2. Open the `.dmg` file you downloaded and double-click the `.pkg` file to install it
   - If you get a notice saying that the package is from and "unidentified developer", close out this warning message and instead right-click on the `.pkg` file and choose "Open", then choose "Open" again in the dialogue box that pops up to install Git
3. Open your Terminal application and type `git --version` and press return. If you see a prompt that says *The 'git' command requires command line developer tools. Would you like to install the tools?*, then you have **two options**:
   - Click "Install" if you would like to install Apple's command line developer tools (it will take up ~150MB of hard drive space)
   - If you prefer not to install command line developer tools, you can "trick" your computer into running Git commands without the command line developer tools installed by doing the following:
      1. Open your Terminal application and type: `nano ~/.bash_profile` then press return
      2. You have just opened a text file inside of a command line-based text editor known as **nano**. Now you must edit your `.bash_profile` file so it includes an alias for your Git commands.
      3. Add this line to the open file: `alias git="/usr/local/git/bin/git"`
      4. Press `Control + O` and press return to save your changes to the file
      5. Press `Command + X` to exit nano and go back to the command line
      6. Quit the Terminal and re-launch it to see your changes
      7. Type `git --version` and you should now see what version of Git is installed on your system
4. Download and install [GitHub Desktop for Mac](https://desktop.github.com/)
5. Double-click on the downloaded file to begin installation. When prompted, choose **Move to Application Folder**.
6. Once the application is installed, walk through the configuration steps:
   - Enter your GitHub username and password to log in
   - The GitHub app should automatically populate your full name and email address, but if it doesn't, add them manually and click "Continue"

---

## Exercise 2

Let's put some real code up on GitHub using the skills we just learned.

You're going to turn your Week 1 Project into a Git repo, and push it to GitHub.

You can use a GUI-based app to accomplish this, or if you're brave, try doing it entirely from the command line.

---

## Exercise 3

Your turn! Take GitHub Pages for a spin by deploying the source files for your Project 1 on a `gh-pages` branch.

---

## Lab Activity

Please see the [Custom Web Fonts lesson](/lesson/custom-web-fonts/) for lab activity details.

---

## Additional Resources

A top-level guide to GitHub pages:

- [GitHub Pages](https://pages.github.com/)

More technical documentation on how GitHub Pages works:

- [GitHub Help - GitHub Pages Basics](https://help.github.com/categories/github-pages-basics/)

Another quick how-to guide for creating a GitHub Pages site:

- [Using GitHub Pages To Host Your Website](http://blog.teamtreehouse.com/using-github-pages-to-host-your-website)
