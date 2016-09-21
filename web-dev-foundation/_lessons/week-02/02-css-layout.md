---
layout: lesson
title: CSS Layouts
slides: ['_slides/week-02/02-css-layout-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/)

An article unpacking the nuances of the "clearfix" hack:

- [Understanding the Humble Clearfix](http://fuseinteractive.ca/blog/understanding-humble-clearfix#.V3wi6ZMrKCQ)

---

## Learning Objectives

- Use HTML5 elements to structure the mark-up on a webpage.
- Use CSS positioning (static, relative, absolute, and fixed) to move elements around a webpage.
- Use CSS floats to manipulate elements, including list-based navigation menus.
- Understand what CSS resets are and why they are needed.
- Use online tools to validate HTML and CSS code.

---

## Keywords

- [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- CSS reset

---

## Exercise 1

Let's cure our project sites of div-itis now...

Look at at your mark-up and decide which of the HTML5 elements should be used to replace the various `<div>` elements you have already added to your code.

The tricky part will be deciding how (and if) you should use the `<section>` or `<article>` element.

Remember that if you have added any classes to your existing `<div>` elements you will need to transfer those over or your CSS will break.

---

## Exercise 2

Let's try out different kinds of positioning in CSS:

<iframe height='268' scrolling='no' src='//codepen.io/redacademy/embed/mJwRxG/?height=268&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/redacademy/pen/mJwRxG/'>mJwRxG</a> by RED Academy (<a href='http://codepen.io/redacademy'>@redacademy</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

View the [solution](http://codepen.io/redacademy/pen/waegmZ)

---

## Exercise 3

Time to add some floats to our project. First, work with a partner to determine where floats will need to be used in the project to build out the layout.

Next, work together to figure out how to add those floats in your CSS.

Don't forget to add a clearfix! 

---

## Exercise 4

Add a CSS reset to your project (your best bet for Project 1 will be the Eric Meyer reset).

You may need to adjust some of your existing CSS rules once you do this (esp. rules related to typography and box model properties).

---

## Homework

We'll be doing more work on Project 1 for homework, but before you get started you should watch this video to reinforce the concepts learned in class:

- [Don't Fear Layout](http://www.dontfeartheinternet.com/08-layout/)

Based on what you've learned in the last first four classes, you've covered most of what you need to know to rough-out the layout for the entire site. Be sure to work on getting the desktop layout as close as possible to the design comp before next class (when we'll tackle the reponsive component of the project). Be sure to check to make sure your HTML and CSS is valid!

We still need to tackle the custom fonts, the social media icons, and a few CSS3 properties (such as `box-shadow`), but we'll get to those in the coming weeks.

---

## Additional Resources

More on the new semantically-named structural elements in HTML5:

- [HTML5 for Web Designers - Semantics](http://html5forwebdesigners.com/semantics/)

Some great CSS Tricks resources to further explain layout concepts:

- [All About Floats](https://css-tricks.com/all-about-floats/)
- [Quick Overview of CSS Position Values](https://css-tricks.com/video-screencasts/110-quick-overview-of-css-position-values/)
- [z-index](https://css-tricks.com/almanac/properties/z/z-index/)

And some CSS reset resources:

- [Eric Meyer Reset](http://meyerweb.com/eric/tools/css/reset/index.html)
- [normalize.css](http://necolas.github.io/normalize.css/)
- [Box Model Reset](https://sunnyis.me/blog/box-model-reset)
- [Pure CSS](http://purecss.io/)

A HTML validation tool:

- [W3C Mark-up Validation Service](https://validator.w3.org/)

A CSS validation tool:

- [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)
