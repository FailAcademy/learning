---
layout: lesson
title: Intro to CSS
slides: ['_slides/week-01/02-intro-to-css.md']
date: 2016-01-19
---

## Pre-Work

Readings from *Learn to Code HTML & CSS*:

- [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
- [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
- [Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/)
- [Working with Typography](http://learn.shayhowe.com/html-css/working-with-typography/)
- [Setting Backgrounds and Gradients](http://learn.shayhowe.com/html-css/setting-backgrounds-and-gradients/)
- [Creating Lists](http://learn.shayhowe.com/html-css/creating-lists/) (the CSS section now)

---

## Learning Objectives

- Distinguish what CSS is in relation to HTML.
- Demonstrate competency with CSS layout principles and box model properties.
- Adjust the default appearance of HTML elements using a variety of selectors, including classes, IDs, pseudo-elements, and pseudo-classes.
- Leverage how inheritance and specificity function in CSS.
- Use CSS positioning and float to layout elements on a webpage.
- Use hexadecimal and RGBa to set the colours of HTML elements.
- Use CSS background properties to set background colors or images.
- Define what a CSS "reset" is, why it's needed, and demonstrate how to use one.
- Use code validators and browser developer tools to assist with debugging.

---

## Keywords

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
- [Web/Page Inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector)

---

## Exercise 1

Let's add a CSS file to your Project 1 webpage now.

To do that, create a `style.css` file in the root folder of your website.

Next, just like in the last example, add a `<link>` tag to the `<head>` of your HTML file so it knows to apply the styles that we add to this file to your webpage.

---

## Exercise 2

Let's start styling our project website using what we just learned about CSS text properties and the box model.

If you haven't done so already, wrap hero image banner area in a `<section>` element. Your goal is to then write CSS that will:

- **center** the text
- adjust the **size of the text**
- add adequate **margin** above and below it

Don't worry about the background image yet, we'll get to that.

---

## Exercise 3

Let's get the width of our website under control.

One common way to do that is to create a `container` class and strategically apply to that to various elements to keep their widths in check.

We want our `container` class to keep everything inside of it at a width of `1240px`. Create that class in your CSS and begin apply it where you think it's needed.

Is there anywhere that you may need to create an extra wrapping `<div>` around some of your content to contain it without conflicting with the background treatment later?

---

# Exercise 4

Time to start floating some content!

Team up with a partner and go through the comp to figure out where you'll need to apply floats to execute the design.

Work together to rough out the CSS that will float these elements. We'll reconvene as a class and share our solutions.

And don't forget to add a clearfix class!

---

# Exercise 5

There are two components to this exercise&mdash;adding some colour, and beginning to add background images.

Change the colour of the links and the orange headings to `#e2574c`.

Also add the floral background image to the banner area.

Challenge! How could we get the partially transparent background layer and the photo of the girl to sit on top of this image (also as backgrounds)?

---

## Lab Activity

Today's lab time will be dedicated to Project 1.

Before you get started, you should watch these videos to reinforce the concepts learned in class:

- [Don't Fear the Browser](http://www.dontfeartheinternet.com/03-the-browser/)
- [Don't Fear Starting from Scratch - Part 2: CSS](http://www.dontfeartheinternet.com/05-from-scratch/)
- [Don't Fear Layout](http://www.dontfeartheinternet.com/08-layout/)

By the end of the second day you'll should have a enough CSS written to begin approximating the rough layout of the website.

---

## Additional Resources

One of the best websites on CSS out there...bookmark this one!

- [CSS Tricks](https://css-tricks.com/)

A quick reference guide for understanding CSS:

- [Syntax - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

Some CSS FAQs:

- [Common CSS questions](https://developer.mozilla.org/en-US/docs/Web/CSS/Common_CSS_Questions)

Master your browser's dev tools:

- [discover-devtools.codeschool.com](http://discover-devtools.codeschool.com/)

Tools to help you validate and optimize your code:

- [W3C Mark-up Validation Service](https://validator.w3.org/)
- [W3C Mark-up CSS Service](https://jigsaw.w3.org/css-validator/)
