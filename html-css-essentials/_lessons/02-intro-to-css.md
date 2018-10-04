---
layout: lesson
title: Intro to CSS
slides: ['_slides/02-intro-to-css-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Getting to Know CSS](http://learn.shayhowe.com/html-css/getting-to-know-css/)
- [Opening the Box Model](http://learn.shayhowe.com/html-css/opening-the-box-model/)
- [Working with Typography](http://learn.shayhowe.com/html-css/working-with-typography/)
- [Creating Lists](http://learn.shayhowe.com/html-css/creating-lists/) (the CSS section now)
- [Setting Backgrounds and Gradients](http://learn.shayhowe.com/html-css/setting-backgrounds-and-gradients/)

And from CSS Tricks:

- [A Nerd’s Guide to Color on the Web](https://css-tricks.com/nerds-guide-color-web/)

---

## Learning Objectives

- Understand what CSS is in relation to HTML.
- Understand how inheritance and specificity function in CSS.
- Distinguish between uses of CSS as inline styles, internal stylesheets, or referencing external stylesheets.
- Learn what the CSS box model is (including margin, padding, and borders).
- Manipulate styles of basic HTML elements using selectors, including classes, pseudo-classes, and IDs.
- Use hexadecimal and RGBa to set the colours and background colours of HTML elements.
- Use CSS background properties to set background colors and images.
- Understand what CSS resets are and why they are needed.
- Use browser development tools to view and change styles on webpage.

---

## Keywords

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
- [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [Box model](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
- Hexadecimal
- RGBa
- HSLa
- [Background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- CSS reset
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

Try adding some color to your site. Referencing the design specification on the Project 1 page, change the colour of:

- The `body` font
- The medium grey `headings`
- The orange links (including the hover state)
- The black header background and the white text inside it
- The dark grey footer background and the white text inside it

---

## Exercise 5

Add the hero image to your banner area using the `background` property shorthand.

Note that your background should "cover" the available area, it should **not** repeat, and it should be fixed in place so that content below it scrolls over top of it. 

---

## Exercise 6

Add a CSS reset to your project (your best bet for this project will be the Eric Meyer reset).

You may need to adjust some of your existing CSS rules once you do this (esp. rules related to typography and box model properties).

---

## Exercise 7

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
- Class and pseudo-class selectors (e.g. `.title` and `:hover`)

Good luck and have fun :)

---

## Additional Resources

One of the best websites on CSS out there...bookmark this one!

- [CSS Tricks](https://css-tricks.com/)

A quick reference guide for understanding CSS:

- [Syntax - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

Some CSS FAQs:

- [Common CSS questions](https://developer.mozilla.org/en-US/docs/Web/CSS/Common_CSS_Questions)

A list of predefined web colours:

- [Web colors](http://en.wikipedia.org/wiki/Web_colors)

And some CSS reset resources:

- [Eric Meyer Reset](http://meyerweb.com/eric/tools/css/reset/index.html)
- [normalize.css](http://necolas.github.io/normalize.css/)
- [Box Model Reset](https://sunnyis.me/blog/box-model-reset)
- [Pure CSS](http://purecss.io/)

Master your browser's dev tools:

- [discover-devtools.codeschool.com](http://discover-devtools.codeschool.com/)
- [DevTools Digest: DevTools in 2016 and Beyond
](https://developers.google.com/web/updates/2016/06/devtools-digest)
