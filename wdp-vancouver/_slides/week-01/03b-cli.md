---
layout: slidedeck
title: The Command Line Interface
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Command Line Interface (CLI)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. What is the CLI?
1. Navigating the File System
1. Working with Files
1. Working with Folders
1. Customizing your Prompt
1. Tooling

---
template: inverse

# What is the Command Line Interface (CLI)?

???

Lead a discussion about CLI. Talking points:

- How the CLI relates to the GUI
- How some commands make perfect sense in GUI, but others make way more sense in the Terminal

Optional:

- History of the "Terminal" as the way we were able to access supercomputers

---
class: center, middle

> "The command line is the ultimate seat of power on your computer...Unfortunately, the price of this power is complexity: nobody ever said that ruling your computer would be easy."

&mdash;David Baumgold

---
class: middle

# Command Line Apps

- On OSX we will be using iTerm2
- On Windows, we will be using Git BASH. If you'd like, you can use the built-in Cmd.exe, or install PowerShell, or Cygwin.

---
template: inverse

# Let's try out some basic commands

---

# Navigate the File System

`ls` to the list files in the current directory:

![ls command](../../public/img/slide-assets/cli-ls.gif)

???

Let them know about the useful options for `ls`:

- `ls -l` (list all files alphabetically in long format)
- `ls -al` (same as `-l` but also shows hidden files)

---

# Navigate the File System

`pwd` to figure out where you are:

![pwd command](../../public/img/slide-assets/cli-pwd.gif)

`pwd` stands for Print Working Directory, and tells us the __full path__ of the directory we are currently working in.

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
class: middle

## Exercise: Path

There are two types of paths: __absolute__ and __relative__.

Find a partner. One of you will research __absolute paths__, and the other will research __relative paths__. Once you uderstand them, explain them to each other.

???

They've already seen relative paths when they referenced external JS and CSS files for their prework. They likely will have used them for images as well.

Optional:

Talk about how the filesystem locally and the filesystem on a server differ - it's one of the big reasons we use relative paths.

---

# Change Directories

`cd <path>` to move (change your working directory) to another folder:

![cd command](../../public/img/slide-assets/cli-cd.gif)

Practice `cd` using both relative and absolute paths.

---

## Exercise: Directory Aliases

There are three common aliases that we use to navigate our file tree:

- `.`
- `..`
- `~`

Split into three groups - one per alias. Research the alias, and describe a situation where you would use it.

???

- Make sure they understand that `~` represents an absolute path
- Make sure they firmly associate `..` with the term `parent`
- Use cases for `.` aren't obvious, but you can show them `open .` to open a directory using Finder

You can also show them that `.` and `..` are actually _in_ every folder using `ls -al`.

---

## Exercise: Changing directories

Given the following file tree:

```
                           Root
                            |
                          Users
                            |
             |----------------------------|
             |                            |
          Sharifa                       InHye
             |                            |
    |------------------|           |----------------|
    |        |         |           |      |         |
Desktop  Documents  Pictures    Movies  Music  Applications
```

.condensed[
- How would you `cd` from `Users` to `Music`?
- How would you `cd` from  `Documents` to `Root`?
]

???

- Consider taking multiple steps, ie `cd Inhye`, `cd Music`
- And one-liners, ie `cd Inhye/Music`
- Consider absolute paths, ie `cd /Root/Users/Inhye/Music`

Bonus:

When there are two users, what does `~` represent?

---

# Change Directories

Pro tip! You can `cd <drag/drop>` to populate the a path and `cd ~` to get all the way back to your home directory:

![cd drag and drop command](../../public/img/slide-assets/cli-cd-drag.gif)

???

Make it known that this can be handy for getting a directory path that is deep in the file tree, but it shouldn't be used as a crutch!

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

- `cp <path/to/file> <new/path>` to copy a file
- `mv <path/to/file> <new/path>` to move a file

You can also rename a file using the `mv` command:

- `mv <path/to/old-file-name> <path/to/new-file-name>`

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
class: middle

## Exercise: Analog CLI

.condensed[
1. Navigate to your Desktop
1. Create a directory called `my_site`
1. Rename the `my_site` directory `website`
1. Create an `index.html` file inside of your new directory
1. Create an `assets` sub-directory in there too
1. Add a `style.css` file to `assets`
1. Delete the `assets` folder and its contents
1. Delete the `index.html` in the root of your `website` directory
1. Delete the `website` directory
]

???

- Get everyone on their feet.
- Split the class in to those who are "confident" and "less confident" about the CLI.
- Ask the "less confident" people to provide the command for each step. If they can't figure it out, get someone "confident" to answer.

---
class: middle

## Exercise: Live-Action CLI

Now let's visualize what we just did on the CLI using humans and Fatboys...

???

- Pick one of the quiet, "less confident" students to be the CLI
- Get someone else to be the working directory
- Fatboys (bean bag chairs) are directories, students are files
- The CLI executes each command by adding files and folders and moving the working directory

---

class: middle

## Customize your Prompt

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

# CLI Tooling

Use [Homebrew](https://brew.sh/) to install `git` and `node`

```sh
brew install git
brew install node
```

Test that this worked:

```sh
which git  # /usr/local/bin/git
which node # /usr/local/bin/node
```
---
class: middle

## Exercise: RED CLI Tooling

Visit the [codebase-review](https://www.npmjs.com/package/codebase-review) npm page, and follow the installation instructions.

__OSX Only:__
Visit the [Coality](https://www.npmjs.com/package/coality) npm page, and follow the installation instructions.

---

# Using a command-line tool

We wrote Coality to help validate your code. Here's how:

```bash
cd /path/to/project-01
touch .coafile
code .
```

Add the following to your .coafile:

```
[CSS]
bears = CSSLintBear, SpaceConsistencyBear
files = css_dir/*.css
use_spaces = True
```

Return to iTerm, and run `coality`.

???

If they don't have the VScode `code` tool installed, they can do so through the command pallet.

- `Cmd+Shift+P`
- Type 'code'
- Choose "Shell Command: install '__code__' command in PATH"

---
template: inverse

# Questions?

{% endhighlight %}
