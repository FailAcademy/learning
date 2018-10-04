---
layout: lesson
title: CSS Layouts and Flexbox
slides: ['_slides/04-css-layouts-slides.md']
---

## Pre-work

Readings from *Learn to Code HTML & CSS*:

- [Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/)

Get a sense of why flexbox is a substantial improvement over traditional CSS for creating page layouts:

- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

---

## Learning Objectives

- Use CSS positioning (static, relative, absolute, and fixed) to move elements around a webpage.
- Use CSS floats to position elements on a webpage.
- Distinguish the major differences between traditional CSS layout techniques and flexbox, and explore the difficulties in creating layouts with CSS that flexbox was designed to overcome.
- Use the following flexbox CSS properties: `flex-direction`, `flex`, `justify-content`, `order`, and `align-items`.
- Understand what vendor prefixes are and where they are needed.
- Use online tools to validate HTML and CSS code.

---

## Keywords

- [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- Flex container
- Flex item
- Main axis
- Cross axis
- [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
- [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
- [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
- [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
- [`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
- [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
- [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

---

## Exercise 1

Now that you've learned about CSS positioning using `relative`, `absolute`, and `fixed`, determine what type of positioning you'll need to use on the project `header` element. 

Implement it now!

---

## Exercise 2

Let's apply these flexbox concepts to your project.

We'll start styling the site `<footer>` with flexbox properties following these steps:

1. Apply `display: flex` to the appropriate element
2. Figure out how to get the address and the social links aligned to the left and right sides of their parent element

---

## Exercise 3

Apply `display: flex` to your project's image gallery (in the About section). Make sure that the images are flexed so the left edge of the first image touches the left side of the container, and the right edge of the last image touches the right side of the container.

Now figure out how to use the `flex` property shorthand on the individual images to ensure they only occupy `32%` of the screen's width each.

---

## Homework

Based on what you've learned in the last first few classes, you've covered most of what you need to know to rough-out the layout for the entire site. Be sure to work on getting the desktop layout as close as possible to the design comp before next class (when we'll tackle the reponsive component of the project). Be sure to check to make sure your HTML and CSS is valid!

We still need to tackle the custom fonts, the social media icons, and a few CSS3 properties (such as `box-shadow`), but we'll get to those in the coming weeks.

Also, keep practicing your flexbox skills by completing the exercises in this tutorial:

- [Flexbox Froggy](http://flexboxfroggy.com/)

Once you finish those, take what you've learned about flexbox and apply it to styling the `header` and the Rentals `section`.

---

## Additional Resources

More on the new semantically-named structural elements in HTML5:

- [HTML5 for Web Designers - Semantics](http://html5forwebdesigners.com/semantics/)

Some great CSS Tricks resources to further explain layout concepts:

- [All About Floats](https://css-tricks.com/all-about-floats/)
- [Quick Overview of CSS Position Values](https://css-tricks.com/video-screencasts/110-quick-overview-of-css-position-values/)
- [z-index](https://css-tricks.com/almanac/properties/z/z-index/)

An article unpacking the nuances of the "clearfix" hack:

- [Understanding the Humble Clearfix](http://fuseinteractive.ca/blog/understanding-humble-clearfix#.V3wi6ZMrKCQ)

This is a concise and authoritative summary of the various flexbox properties and how they work:

- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Get a sense of why flexbox is a substantial improvement over traditional CSS for layouts:

- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

Another great flexbox reference page:

- [The Ultimate Flexbox Cheat Sheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)

A HTML validation tool:

- [W3C Mark-up Validation Service](https://validator.w3.org/)

A CSS validation tool:

- [W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)
