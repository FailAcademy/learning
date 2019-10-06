---
layout: lesson
title: Intro to CSS - Box Model and Selectors
slides: ["_slides/week-01/02-intro-to-css-1-slides.md"]
lesson_date: 2019-10-09
---

## Pre-Work

Readings from _Learn to Code HTML & CSS_:

- [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
- [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)

Also ensure that you have completed yesterday's lab activity before class&mdash;you will need the draft mark-up for your project to work on today's exercises.

---

## Learning Objectives

- Define what CSS is in relation to HTML.
- Demonstrate competency with CSS box model properties.
- Adjust the default appearance of HTML elements using a variety of selectors, including classes, IDs, pseudo-elements, and pseudo-classes.
- Leverage how inheritance and specificity function in CSS.
- Define what a CSS "reset" is, why it's needed, and demonstrate how to use one.

---

## Keywords

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
- [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)

---

## Exercise 1

Let's add a CSS file to your Project 1 webpage now.

To do that, create a `style.css` file in the root folder of your website.

Next, just like in the last example, add a `<link>` tag to the `<head>` of your HTML file so it knows to apply the styles that we add to this file to your webpage.

Now try adding a style declaration for the `p` selector (e.g. change the `font-size`), and see if it works.

---

## Exercise 2

Let's start styling our project website using what we just learned about CSS text properties and the box model.

If you haven't done so already, wrap the hero image banner area in a `<section>` element. Your goal is to then write CSS that will:

- **center** the text
- adjust the **size of the text**
- add adequate **margin** above and below it

Don't worry about the background image yet, we'll get to that.

---

## Exercise 3

Let's get the width of our website under control.

One common way to do that is to create a `container` class and strategically apply that to various elements to keep their widths in check.

We want our `container` class to keep everything inside of it at a width of `1240px`. Create that class in your CSS and apply it where you think it's needed.

Is there anywhere that you may need to create an extra wrapping `<div>` around some of your content to contain it without conflicting with a full-width background treatment?

---

## Homework

Continue working on your Project 1 based on what you've learned so far.

Before you get started, you should watch these videos to reinforce the concepts learned in class:

- [Don't Fear the Browser](http://www.dontfeartheinternet.com/03-the-browser/)
- [Don't Fear Starting from Scratch - Part 2: CSS](http://www.dontfeartheinternet.com/05-from-scratch/)

---

## Additional Resources

One of the best websites on CSS out there...bookmark this one!

- [CSS Tricks](https://css-tricks.com/)

A quick reference guide for understanding CSS:

- [Syntax - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

Some CSS FAQs:

- [Common CSS questions](https://developer.mozilla.org/en-US/docs/Web/CSS/Common_CSS_Questions)
