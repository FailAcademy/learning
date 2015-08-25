---
layout: slidedeck
title: HTML & CSS Review Slides [Part 1]
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# HTML & CSS Review: Part 1

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Strategies for converting prototypes/comps to HTML5
2. HTML concept review
3. Setting up your project (with version control!)
4. Developer tools and other resources

---
template: inverse

# Prototypes to HTML5

---

# All Shapes and Sizes

Prototypes and comps may come to us in many forms:

- PSD files
- Illustrator or Sketch files
- Web app-based prototypes (e.g [InVision](http://invisionapp.com) or [Marvel](https://marvelapp.com/))
- Design pattern libraries (e.g. [Pattern Lab](http://patternlab.io/))

One of our main roles as front-end developers is figure out how to best **translate these design concepts into reality**.

---

# Plan of Attack

Before we open a code editor, we need to think about:

- **What HTML elements** are semantically suited to build out the various components?
- What components will require **interactivity**?
- What **fonts** were used? How will we include them?
- Are there elements not included in the page that we may need to think about styling for **future-friendliness**?
- Are there any **third-party integrations or frameworks** we need to think about?

---

# Exercise 1

Let's dive right in and start thinking about how we might tackle the first project's design comp to convert it into semantic HTML elements.

Jot some idea out on your own, then you'll team up to discuss your approach with a partner. Based on this discussion, is there anything you'd revise in your approach?

Finally, you and your partner will share your insights with the class.

---
template: inverse

# HTML5 Review

---

# HTML5 Elements

HTML5 gave use many new, semantically-designed elements to use in our mark-up:

- `<header>`
- `<nav>`
- `<article>`
- `<section>`
- `<aside>`
- `<footer>`

---
class: center, middle

.inline-images[
   ![HTML5 example layout](/public/img/slide-assets/html5-semantic-tags.png)
]

---
class: center, middle

.large[
	Why are these elements <br />better than divs?
]

---

# Exercise 2

Let's explore what these HTML5 elements are good for.

In teams of two, research your assigned element and report back to the class:

- What the semantically appropriate usage of the element is
- Any potential sources of confusions about this element's usage
- Where you think this element may be used in the project (if at all)

---
template: inverse

# Setting Up Your Project

---
class: center, middle

.large[
   What three things do we need to make a webpage?
]

---

# What We Need

1. A code editor (Atom, Sublime Text, etc.)
2. A file with an HTML extension
3. An handful of HTML elements that are common to all webpages

---
class: center, middle

.large[
   What are those elements?
]

---

# Keep It Organized

We want to keep our project files organized in a **root folder**:

- Stick to lowercase names consistently
- Don't use spaces in your file names, instead use hyphens or underscores to separate words
- Don't use special characters in your file names
- Choose logical and descriptive names for files and folders

---

# Version Control

- Version control is very important part of any web developers workflow
- Records changes to a file or set of files over time
- **Git** is one the most popular version control systems today

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
   Great Git resource:

   **[try.github.io](https://try.github.io/)**
]

---

# Exercise 3

Let's get our first projects set up and ready to go!

Your tasks:

- Create your project directory
- Create an `index.html` file
- Add all of the essential HTML elements we discussed
- Initialize a Git repository in its root, and push it to GitHub

---
template: inverse

# Developer Tools & Resources

---
class: center, middle

.large[
   As a developer, what's the most important feature of your browser?
]

---
class: center, middle

.large[
   Learn your dev tools:

   **[discover-devtools.codeschool.com](http://discover-devtools.codeschool.com/)**
]

---
class: center, middle

.large[
   I still need help!<br />Where do I go?
]

---

# Go-to Resources

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
- [Stack Overflow](http://stackoverflow.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Smashing Magazine](http://www.smashingmagazine.com/)
- Each other!

---

# What We've Learned

- How to analyze a prototype and devise our dev plan of attack for the project
- What HTML5 elements can be used for
- How to set up our project with version control
- How to use our browser developer tools and get help

---
template: inverse

# Questions?

{% endhighlight %}
