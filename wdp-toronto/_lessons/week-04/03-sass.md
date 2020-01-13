---
layout: lesson
title: Sass / CSS Preprocessors
slides: ["_slides/week-04/04-sass.md"]
lesson_date: 2020-02-05
---

## Pre-Work

Visit the Sass homepage and take a look around:

- [Sass Homepage](http://sass-lang.com/guide)

Please read through this introductory article on Sass before the lesson:

- [Intro to Sass | SCSS101](https://codepen.io/sasstantrum/post/intro-to-sass)

---

## Learning Objectives

- Define what a CSS preprocessor is, and how it can speed up development.
- Structure Sass files according to best practices.
- Implement basic Sass techniques like nesting, variables, mixins, and operations.
- Apply Sass language skills to writing Sass for responsive websites.
- Install Sass locally and compile it into plain vanilla CSS.
- Create and use source maps to assist with Sass debugging.
- Distinguish between different CSS preprocessors such as Sass, SCSS, and Less.

---

## Keywords

- Preprocessor
- Compiler
- Sass/SCSS
- Directives
- Variable
- Nesting
- Operation
- Partial
- `@mixin`
- `@extend`
- `@content`

---

## Exercise 1

In this exercise, we'll refactor some CSS into SCSS, using the basic functionality we've learned.

To do that, fork this Codepen:

**https://codepen.io/redacademy/pen/JNbrxQ**

Take a look at the code in the Codepen, and refactor it as SCSS by doing the following:

- **Nest** selectors where appropriate (but be careful not to over-nest them!)
- Abstract repeated styles (colours, spacing units, etc.) into **variables** (hint: make these go at the top of the stylesheet)
- Use a **math operator** to adjust the size of the base spacing unit on elements where applicable

Be sure to take a look at the compiled CSS as you go! You can toggle the SCSS/CSS view using the arrow in the top-right corner of the CSS panel.

You'll know you're done when the compiled CSS looks exactly the same as when you started.

---

## Exercise 2

In this exercise we'll create media query helpers using Sass mixins and the `@content` directive, for common breakpoints.

We'll then discuss, how this techniques saves time when developing responsive websites.

---

## Lab Activity

This afternoon, we’ll implement the following Sass enhancements in your Project 2 websites:

- Media query helpers
- Basic theme-ability, using Sass variables
- Separating your styles into Sass partials
- Sass compilation, minification, and auto-prefixing using Gulp

---

## Additional Resources

Excellent online SASS Tutorials:

- [The SASS way](http://thesassway.com/)

Get to know the other major CSS pre-processor, LESS:

- [LESS (CSS preprocessor)](http://lesscss.org/)

Challenge yourself with this Sass tutorial:

- [Fun with Sass and Icon Fonts](http://jaydenseric.com/blog/fun-with-sass-and-font-icons)
