---
layout: lesson
title: JavaScript & jQuery Review
slides: ['_slides/week-01/03-js-review.md']
---

## Pre-Work

Brush up your jQuery skills with this Codeacademy tutorial:

- [jQuery - Codeacademy](https://www.codecademy.com/en/tracks/jquery)

---

## Learning Objectives

- Define basic programming concepts such as statements, booleans, conditionals, loops, and variables (in relation to JavaScript).
- Build basic JavaScript functions, objects, and arrays.
- Distinguish what jQuery is in relation to JavaScript.
- Define what the DOM is and traverse it using jQuery methods.
- Manipulate the appearance of DOM elements using jQuery.
- Create jQuery event listeners with event delegation.

---

## Keywords

- Document Object Model (DOM)
- Statement
- Variable
- Boolean
- Loop
- Conditional
- Function
- Object
- Array
- Method
- Traverse
- Chaining
- Events

---

## Exercise 1

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

## Exercise 2

In this exercise, you're going to use jQuery to create an accordian-style show/hide effect for a basic FAQ list.

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
2. When the user clicks on a particular question to reveal the answer, all of the other questions' answers will automatically be re-hidden.

**Hint:** You'll want to use CSS to initially hide all of the answers.

---

## Lab Activity

We’ll continue to work on our Week 1 Project in today’s lab.

You goal for today is to implement the client's requests to add certain interactive elements to the website using jQuery.

---

## Additional Resources

Get extra practice with jQuery basics by completing this free Code School course:

- [Try jQuery](http://try.jquery.com/)

A bookmark-worthy jQuery cheatsheet:

- [jQuery API Quick Reference](http://oscarotero.com/jquery/)
