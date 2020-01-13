---
layout: lesson
title: Intro to jQuery
slides: ["_slides/week-04/02-intro-to-jquery.md"]
lesson_date: 2020-02-03
---

## Pre-Work

Follow this jQuery lesson from _Learn to Code Advanced HTML & CSS_:

- [jQuery](http://learn.shayhowe.com/advanced-html-css/jquery/)

Also before class, try to familiarize yourself with jQuery by completing the [jQuery introduction lesson](https://www.codecademy.com/learn/learn-jquery/modules/learn-jquery-introduction) on Codeacademy.

---

## Learning Objectives

- Distinguish what jQuery is in relation to JavaScript.
- Define what the browser’s Document Object Model (DOM) is, and traverse it using jQuery methods.
- Manipulate the appearance of DOM elements using jQuery.
- Use jQuery animation methods to add dynamic behaviours to a webpage.

---

## Keywords

- Document Object Model (DOM)
- Method
- Traverse
- Chaining
- Events
- Effect methods
- Form methods
- Select menu

---

## Exercise 1

Using what you just learned about traversing the DOM and jQuery methods, come up with at least three unique solutions for changing the color of the text to red in the second `<p>` inside the `<article>` using jQuery only (no CSS!).

```html
<article>
  <p class="opening-line">The first line.</p>
  <p>The second line.</p>
</article>
<p>A line outside the article.</p>
```

You can complete this activity in a basic HTML file in a text editor of your choice (don't forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library).

---

## Exercise 2

In this exercise, you're going create two click events&mdash;one that **adds another list item** to the list below, and one that **crosses off an item** in the list when its "done" link is clicked:

```html
<div class="list-editor">
  <ul class="my-list">
    <li><span>My to-do</span> <a href="#" class="delete">[done]</a></li>
  </ul>
  <input type="text" name="new-item" /> <button>Add an item</button>
</div>
```

You'll need to think about traversing the DOM, and which of jQuery's methods you'll need to update the `<ul>` element's content.

You can complete this activity in a basic HTML file in a text editor of your choice (don't forget to include the jQuery library in the footer of your file), or in Codepen (be sure to go into the Settings for your pen and check off the box to add the jQuery library).

---

## Exercise 3

In this exercise, you're going to use jQuery to create an accordion-style show/hide effect for a basic FAQ list.

You're welcome to use either **Codepen** or a **code editor** to complete this exercise.

Using the mark-up below, write a jQuery script to selectively show or hide a particular answer when the question is clicked:

```html
<ul class="faq-list">
  <li>
    <a href="#" rel="acc-1">First question?</a>
    <p id="acc-1">This is the first answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-2">Second question?</a>
    <p id="acc-2">This is the second answer.</p>
  </li>
  <li>
    <a href="#" rel="acc-3">Third question?</a>
    <p id="acc-3">This is the third answer.</p>
  </li>
</ul>
```

Try executing this effect in **two different ways**:

1.  The user must click the question to show the answer, and manually click it again to hide the answer (so multiple answers can be viewed at once)
2.  When the user clicks on a particular question to reveal the answer, all of the other questions' answers will be automatically re-hidden.

**Hint:** You'll want to use CSS to initially hide all of the answers.

---

## Lab Activity

We’ll continue to work on Project 3 in today’s lab.

You'll need to learn a bit more about Ajax before you can write much JavaScript for this project, so continue to focus on the CSS for now.

---

## Additional Resources

A bookmark-worthy jQuery cheatsheet:

- [jQuery API Quick Reference](http://oscarotero.com/jquery/)

Another great jQuery resource to read through:

- [jQuery Fundamentals](http://jqfundamentals.com/)

More on custom animation with jQuery:

- [A Guide to the jQuery animate() Method](http://www.sitepoint.com/guide-jquery-animate-method/)

Feeling ambitious? Try creating your own jQuery plugin:

- [Writing Your Own jQuery Plugins](http://blog.teamtreehouse.com/writing-your-own-jquery-plugins)

A more powerful animation tool which is almost identical to jQuery in terms of how you use it:

- [Velocity.js](http://velocityjs.org/)

Another animation tool worth bookmarking:

- [Greensock or GSAP](https://greensock.com/)
