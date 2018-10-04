---
layout: lesson
title: Intro to CSS
slides: ['_slides/week-01/02-intro-to-css-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
- [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
- [Working with Typography](http://learn.shayhowe.com/html-css/working-with-typography/)
- [Creating Lists](http://learn.shayhowe.com/html-css/creating-lists/) (the CSS section now)

---

## Learning Objectives

- Understand what CSS is in relation to HTML.
- Understand how inheritance and specificity function in CSS.
- Distinguish between uses of CSS as inline styles, internal stylesheets, or referencing external stylesheets.
- Learn what the CSS box model is (including margin, padding, and borders).
- Manipulate styles of basic HTML elements using selectors, including classes, pseudo-classes, and IDs.
- Use browser development tools to view and change styles on webpage.

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

Now try adding a style declaration for the `p` selector (e.g. change the `font-size`), and see if it works.

---

## Exercise 2

Let's start styling our project website using what we just learned about CSS text properties and the box model.

If you haven't done so already, wrap the hero image banner area in a `<div>` element. Next, write CSS that will:

- **center** the text
- adjust the **size of the text**
- add adequate **margin** above and below it

Don't worry about the background image yet or the custom fonts, we'll get to that...

---

## Exercise 3

Let's get the width of our website under control.

One common way to do that is to create a `container` class and strategically apply that to various elements to keep their widths in check.

We want our `container` class to keep everything inside of it at a width of `1140px`. Create that class in your CSS and apply it where you think it's needed.

Is there anywhere that you may need to create an extra wrapping `<div>` around some of your content to contain it without conflicting with a full-width background treatment?

---

## Exercise 4

Time to explore the developer tools built into your browser.

Go to a website of your choice, open the web inspector, and try altering some of the styles to see what happens.

Also try "forcing element states", editing the content of some of the HTML elements on the screen, and deleting some elements too.

*Remember that you will lose all of the changes you've made inside the web inspector as soon as you refresh the page.*

---

## Homework

For homework, continue working on Project 1.

Before you get started, you should watch these videos to reinforce the concepts learned in class:

- [Don't Fear the Browser](http://www.dontfeartheinternet.com/03-the-browser/)
- [Don't Fear Starting from Scratch - Part 2: CSS](http://www.dontfeartheinternet.com/05-from-scratch/)

After watching the videos, experiment with different CSS properties to override the default styles applied by the browser to your project site. For instance, you may try:

- Changing the font size, font family, or colour of the text
- Adjusting the line height
- Changing the colour of links when they are hovered
- Using box model properties to adjust the space between headings and paragraphs

Be sure to keep your design comp for the desktop version of the project for reference, and try to approximate these styles as closely as possible. We'll learn more about adding background images and building layouts with CSS, but feel free to read ahead and try adding these styles to your project too!

Also be sure apply your styles using the appropriate type of **selector**:

- Type selectors (e.g. `p`, `h1`)
- Descendant selectors (e.g. `article p`)
- Class and ID selectors (e.g. `.title`, `#masthead`)

Good luck and have fun :)

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
- [DevTools Digest: DevTools in 2016 and Beyond
](https://developers.google.com/web/updates/2016/06/devtools-digest)
