---
layout: slidedeck
title: The Command Line Interface Slides
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Command Line Interface

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---

layout: false

# Agenda

1. What is the CLI?
2. Navigating the file system
3. Working with files
4. Working with folders
5. Customizing your prompt

---

template: inverse

# What is the Command Line Interface (CLI)?

???

Lead a discussion about CLI. Talking points:

* How the CLI relates to the GUI
* How some commands make perfect sense in GUI, but others make way more sense in the Terminal

Optional:

* History of the "Terminal" as the way we were able to access supercomputers

---

class: center, middle

> "The command line is the ultimate seat of power on your computer...Unfortunately, the price of this power is complexity: nobody ever said that ruling your computer would be easy."

&mdash;David Baumgold

---

# Command Line Apps

* On OSX we will be using iTerm2
* On Windows, we will be using Git Bash. If you'd like, you can use the built-in Cmd.exe, or install PowerShell, or Cygwin.

---

class: center, middle

.large[
Let's try out some basic commands...
]

---

# Navigate the File System

`ls` to the list files in the current directory:

![ls command](../../public/img/slide-assets/cli-ls.gif)

???

Let them know about the useful options for `ls`:

* `ls -l` (list all files alphabetically in long format)
* `ls -al` (same as `-l` but also shows hidden files)

---

# Navigate the File System

`pwd` to figure out where you are:

![pwd command](../../public/img/slide-assets/cli-pwd.gif)

`pwd` stands for Print Working Directory, and tells us the **full path** of the directory we are currently working in.

???

Get them to think/pair/share on what a `working directory` actually is.

---

class: center, middle

.large[
What is a __path__?
]

???

Steer the discussion so that they end up relating paths to the mental model of a file tree.

In a path, each `/` represents one level of hierarchy in the tree.

If necessary, draw a file tree on the whiteboard, point at a file, and get them to tell you the path, starting with the root directory.

---

# Exercise 1

There are two types of paths: **absolute** and **relative**.

Find a partner. One of you will research **absolute paths**, and the other will research **relative paths**. Once you understand them, explain them to each other.

???

They've already seen relative paths when they referenced external JS and CSS files for their prework. They likely will have used them for images as well.

**Optional:**

Talk about how the filesystem locally and the filesystem on a server differ - it's one of the big reasons we use relative paths.

---

# Change Directories

`cd <path>` to move (change your working directory) to another folder:

![cd command](../../public/img/slide-assets/cli-cd.gif)

Practice `cd` using both relative and absolute paths.

---

# Exercise 2

There are three common aliases that we use to navigate our file tree:

* `.`
* `..`
* `~`

Research the aliases above, what is the difference and an example situation where you would use them.

???

* Make sure they understand that `~` represents an absolute path
* Make sure they firmly associate `..` with the term `parent`
* Use cases for `.` aren't obvious, but you can show them `open .` to open a directory using Finder

You can also show them that `.` and `..` are actually _in_ every folder using `ls -al`.

---

# Change Directories

Pro tip! You can `cd <drag/drop>` to populate the a path and `cd ~` to get all the way back to your home directory:

![cd drag and drop command](../../public/img/slide-assets/cli-cd-drag.gif)

???

Make it known that this can be handy for getting a directory path that is deep in the file tree, but it shouldn't be used as a crutch!

---

# Exercise 3

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

* How would you `cd` from `Users` to `Music`?
* How would you `cd` from `Documents` to `Root`?

???

* Consider taking multiple steps, ie `cd Inhye`, `cd Music`
* And one-liners, ie `cd Inhye/Music`
* Consider absolute paths, ie `cd /Root/Users/Inhye/Music`

Bonus:

When there are two users, what does `~` represent?

---

# Work with Files

`touch <desired/path/to/file>` to add a file and `rm <path/to/file>` to remove it:

![cd drag and drop command](../../public/img/slide-assets/cli-touch-rm.gif)

???

Why `touch`?

Talk about the actual use-case for `touch`, which is to update the last modified date of a file. If the file doesn't exist, touch will create one just to show that it was modified.

---

# Work with Files

You can also copy and move files within the file system:

* `cp <path/to/file> <new/path>` to copy a file
* `mv <path/to/file> <new/path>` to move a file

You can also rename a file using the `mv` command:

* `mv <path/to/old-file-name> <path/to/new-file-name>`

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

???

It might be useful to show the file tree slide and show them how recursive delete works. (Visit each node, depth first, and delete).

---

# Work with Folders

If a directory is empty, you can also use `rmdir <folder>` to remove it.

This will only work if the directory does not contain any files (including hidden files).

---

class: center, middle

### Danger Will Robinson!

Never run `rm -rf /` or `rm -rf *` unless you want to delete everything on your computer!

---

# Exercise 4

.condensed[

1. Navigate to your Desktop
2. Create a directory called `my_site`
3. Rename the `my_site` directory `website`
4. Create an `index.html` file inside of your new directory
5. Create an `assets` sub-directory in there too
6. Add a `style.css` file to `assets`
7. Delete the `assets` folder and its contents
8. Delete the `index.html` in the root of your `website` directory
9. Delete the `website` directory
   ]

???

* Get everyone on their feet.
* Split the class in to those who are "confident" and "less confident" about the CLI.
* Ask the "less confident" people to provide the command for each step. If they can't figure it out, get someone "confident" to answer.

* Replicate this on Fatboys for a live action version!

---

# Customize your Prompt

Add the following to `~/.bash_profile`

```sh
txtcyn=$'\e[0;36m'  # Cyan
txtrst=$'\e[0m'     # Text Reset

function parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="⚡️  \W\[$txtcyn\]\$(parse_git_branch) \[$txtrst\]\$ "
```

Once that's saved, run the following:

```sh
source ~/.bash_profile
```

---

# What We've Learned

* What the command line interface is
* How to use the CLI to navigate your file systen
* How to customize your command prompt

???

If there's some time at the end, you work through this demo of CLI tips and tricks:

`mkdir mysite && cd mysite`

* Use the double ampersand to run one command after another

`touch index.html`

`vim index.html`

* We can use text editors directly in our terminal (Mac only)
* From days where we would enter “modes”
* Type `i` to insert, type something, type `ESC`, and then `:q!` to quit without saving or `:wq` to write and quit

`cat index.html`

* View the file contents from the Terminal!

`say -f index.html`

* Have your file read to you

Curl is a command line script for transferring data via URLs to or from a server (HTTP, FTP…):

`curl https://redacademy.github.io/aloha-apparel-pt2/`
`curl ipecho.net/plain; echo` (get your external IP address)

`curl -s https://baconipsum.com/api/?type=all-meat |say`

* The pipe command takes the output of one command and uses it as the input for another

`nano index.html`

* Also this!
* Let’s check out our website now…

`open index.html` (in the default app for this file)
`open -a "Google Chrome" index.html` (use Google Chrome)

* You can also use this to open an URL instead

`grep "html" index.html`
`grep -i "<\!doctype" index.html`

CTRL + L to jump to top
Also … `clear`

A web server is a system that process HTTP requests…what we’re doing with Aloha doesn’t involve a server (yet), we’re

`python -m SimpleHTTPServer 8000`

* Port #s are a 16 bit integer…so 0 to 65535
* By default, HTTP uses port 80 and HTTPS uses port 443
* Why use a server? Access to the file system…security…e.g. certain Google Chrome extensions won’t work directly accessing file system.

**Grand finale:** `telnet towel.blinkenlights.nl`

---

template: inverse

# Questions?

{% endhighlight %}
