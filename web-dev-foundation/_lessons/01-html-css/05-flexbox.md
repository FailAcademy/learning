---
layout: lesson
title: Flexbox
slides: ['_slides/01-html-css/05-flexbox-slides.md']
---

## Recommended Reading

Get a sense of why flexbox is a substantial improvement over traditional CSS for layouts:

- [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

---

## Learning Objectives

- Distinguish the major differences between traditional CSS layout techniques and flexbox.
- Gain an awareness of the major difficulties in creating layouts with CSS that flexbox was designed to overcome.
- Use the following flexbox CSS properties: `flex-direction`, `flex`, `justify-content`, `order`, and `align-items`.
- Refactor floats and positioning on a website to use flexbox-based layouts instead.

---

## Keywords

- Box model
- Flex container
- Flex item
- Main axis
- Cross axis
- [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
- [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
- [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)
- [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
- [flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
- [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
- [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
- [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
- [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [order](https://developer.mozilla.org/en-US/docs/Web/CSS/order)

---

## Exercise 1

In your [exercise Codepen](http://codepen.io/redacademy/pen/GoYLaG?editors=1100), try to reproduce this layout using what you just learned about flex container and item properties:

![Flexbox E1 screencap](/public/files/exercises/flexbox-e1.png)


View the [solution](http://codepen.io/redacademy/pen/vLVMwd).

---

## Exercise 2

Go back to your [Codepen flexbox demo](http://codepen.io/redacademy/pen/GoYLaG?editors=1100) and see if you can get the text (e.g. Item 1, etc.) centered **vertically and horizontally** inside of the coloured boxes.

Think about whether you need to make any adjustments to the mark-up to make this happen...

View the [solution](http://codepen.io/redacademy/pen/XXxwmN).

---

## Exercise 3

This is a tough one!

Can you figure out how to use nested `display: flex` parent/child elements to lock each colored box in a corner of the browser window?

You may want to start with a fresh copy of the [exercise Codepen](Codepen flexbox demo](http://codepen.io/redacademy/pen/GoYLaG?editors=1100)).

![Flexbox E3 screencap](/public/files/exercises/flexbox-e3.png)

View the [solution](http://codepen.io/redacademy/pen/JGmqGy).

---

## Lab Activity

Today's lab time is all about getting comfortable with flexbox...

First, code along with the videos in the **[What the Flexbox?!](http://flexbox.io/#/)** series.

Once you finish those, take what you've learned about flexbox and apply it to solving the 24 challenges in **[Flexbox Froggy](http://flexboxfroggy.com/)**.

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
