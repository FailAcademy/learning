---
layout: lesson
title: Flexbox
slides: ['_slides/week-03/01-flexbox-slides.md']
---

## Pre-work

Get a sense of why flexbox is a substantial improvement over traditional CSS for layouts:

- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

Also, take the exercises in Flexbox Froggy for a spin before class:

- [Flexbox Froggy](http://flexboxfroggy.com/)

---

## Learning Objectives

- Distinguish the major differences between traditional CSS layout techniques and flexbox.
- Gain an awareness of the major difficulties in creating layouts with CSS that flexbox was designed to overcome.
- Use the following flexbox CSS properties: `flex-direction`, `flex`, `justify-content`, `order`, and `align-items`.
- Refactor floats and positioning on a website to use flexbox-based layouts instead.
- Understand what vendor prefixes are and where they are needed.

---

## Keywords

- Box model
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

Let's apply these flexbox concepts to Project 1.

We'll start by refactoring the floats in the site `<footer>` into flexbox properties following these steps:

1. Remove your floats
2. Apply `display: flex` to the appropriate element
3. Figure out how to get the address and the social links aligned to the left and right sides as they were with your floats

---

## Exercise 2

Apply `display: flex` to your project's image gallery (in the About section). Make sure that the images are flexed so the left edge of the first image touches the left side of the container, and the right edge of the last image touches the right side of the container.

Now figure out how to use the `flex` property shorthand on the individual images to ensure they only occupy `32%` of the screen's width each.

---

## Exercise 3

This is a tough one!

Can you figure out how to use nested `display: flex` parent/child elements to lock each colored box in a corner of the browser window?

You may want to start with a fresh copy of the [exercise Codepen](http://codepen.io/redacademy/pen/GoYLaG?editors=1100)).

![Flexbox E3 screencap](/public/files/exercises/flexbox-e3.png)

---

## Homework

Today's lab time is all about getting comfortable with flexbox...

First, code along with the videos in the **[What the Flexbox?!](http://flexbox.io/#/)** series.

Once you finish those, take what you've learned about flexbox and apply it to refactoring the rest of the floats from your project (e.g. in the `header` and the Rentals `section`).

---

## Additional Resources

This is a concise and authoritative summary of the various flexbox properties and how they work:

- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Get a sense of why flexbox is a substantial improvement over traditional CSS for layouts:

- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

Another great flexbox reference page:

- [The Ultimate Flexbox Cheat Sheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)

How to add flexbox support to really old versions of IE:

- [Flexibility](https://github.com/10up/flexibility)
