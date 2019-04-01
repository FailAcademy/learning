---
layout: lesson
title: Animation with jQuery
slides: ["_slides/week-06/03-jquery-animation-slides.md"]
lesson_date: 2019-05-16
---

## Pre-Work

Provided you finished the readings and tutorials assigned in the previous lesson, there is no pre-work for this lesson.

---

## Learning Objectives

- Use jQuery animation methods to add dynamic behaviours to a webpage.

---

## Keywords

- Effect methods
- Form methods
- Select menu

---

## Exercise 1

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

1. The user must click the question to show the answer, and manually click it again to hide the answer (so multiple answers can be viewed at once)
2. When the user clicks on a particular question to reveal the answer, all of the other questions' answers will be automatically re-hidden.

**Hint:** You'll want to use CSS to initially hide all of the answers.

---

## Homework

Continue working on Project 3 based on what you've learned.

You'll need to learn a bit more about Ajax before you can write much JavaScript for this project, so continue to focus on the CSS for now.

---

## Additional Resources

Another great jQuery resource to read through:

- [jQuery Fundamentals](http://jqfundamentals.com/)

More on custom animation with jQuery:

- [A Guide to the jQuery animate() Method](http://www.sitepoint.com/guide-jquery-animate-method/)

Feeling ambitious? Try creating your own jQuery plugin:

- [Writing Your Own jQuery Plugins](http://blog.teamtreehouse.com/writing-your-own-jquery-plugins)
