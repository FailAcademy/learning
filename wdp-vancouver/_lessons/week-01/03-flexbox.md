---
layout: lesson
title: Flexbox
slides: ['_slides/week-01/03-flexbox.md']
lesson_date: 2018-01-11
---

## Pre-Work

_There is no pre-work for this lesson._

---

## Learning Objectives

* Distinguish the major differences between traditional CSS layout techniques and flexbox.
* Describe the most significant challenges in creating layouts with CSS that flexbox was designed to overcome.
* Use the following flexbox CSS properties: `flex-direction`, `flex`, `justify-content`, `order`, and `align-items`.

---

## Keywords

* Flex container
* Flex item
* Main axis
* Cross axis
* [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
* [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
* [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
* [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
* [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
* [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
* [`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
* [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
* [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
* [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
* [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
* [`order`](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

---

## Exercise 1

Let's apply these flexbox concepts to Project 1.

We'll start adding flexbox properties into the `<footer>` with following these steps:

1. Apply `display: flex` to the appropriate element
2. Figure out how to get the address and the social links aligned to the left and right sides of the footer

---

## Exercise 2

Let's use some of the flex-item related properties in our project, within the site `<header>`. Follow these steps:

1. Apply `display: flex` to the appropriate container in your `<header>`
2. Use a combination of flex item properties to set the logo back to the left edge and the cart icon set to right edge of the page (and make sure they are the right size!)

---

## Exercise 3

Go back to your [Codepen flexbox demo](http://codepen.io/redacademy/pen/eJyXPy?editors=1100) and see if you can get the text (e.g. Item 1, etc.) centered vertically and horizontally inside of the coloured boxes.

Think about whether you need to make any adjustments to the mark-up to make this happen...

**Bonus challenge!** Can you figure out how to use nested `display: flex` parent/child elements to lock each coloured box in a corner of the browser window?

---

## Lab Activity

See the [CSS3 & Responsive Web Design lesson](/lesson/css3-responsive-web-design/) for additional lab activity details.

If you'd like to get more practice on flexbox before you begin incorporating it into your project, take what you've learned today and apply it to solving the 24 challenges in **[Flexbox Froggy](http://flexboxfroggy.com/)**.

Then you can spend any remaining time today continuing to build out the layout Project 1.

---

## Additional Resources

This is a concise and authoritative summary of the various flexbox properties and how they work:

* [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Get a sense of why flexbox is a substantial improvement over traditional layout methods and hacks in CSS:

* [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

Another great flexbox reference page:

* [The Ultimate Flexbox Cheat Sheet](http://www.sketchingwithcss.com/samplechapter/cheatsheet.html)

Try out flexbox properties using this point-and-click interface:

* [Flexbox playground](http://codepen.io/enxaneta/full/adLPwv/)

How to add flexbox support to really old versions of IE:

* [Flexibility](https://github.com/10up/flexibility)

Want to play tower defence but need to learn flexbox...

* [Flexbox defence](http://www.flexboxdefense.com/)
