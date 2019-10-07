---
layout: lesson
title: Intro to jQuery
slides: ["_slides/week-06/02-intro-to-jquery-slides.md"]
lesson_date: 2019-11-16
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

---

## Keywords

- Document Object Model (DOM)
- Method
- Traverse
- Chaining
- Events

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

## Homework

Continue working on Project 3 based on what you've learned.

You'll need to learn a bit more about Ajax before you can write much JavaScript for this project, so continue to focus on the CSS for now.

---

## Additional Resources

A bookmark-worthy jQuery cheatsheet:

- [jQuery API Quick Reference](http://oscarotero.com/jquery/)
