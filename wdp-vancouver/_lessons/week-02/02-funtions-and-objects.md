---
layout: lesson
title: Javascript Functions, Objects and Arrays
slides: ['_slides/week-02/02-functions-and-objects.md']
---

## Pre-Work

Provided you finished the [JavaScript for Cats](http://jsforcats.com/) reading yesterday, there is no pre-reading for this class.

You may wish to review the sections on **functions**, **arrays**, and **objects** for good measure before class.

---

## Learning Objectives

- Create and use basic JavaScript functions.
- Build basic JavaScript objects and manipulate their properties and methods.
- Create JavaScript arrays and iterate over them.

---

## Keywords

- [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)
- [Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object)
- Method
- Property
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)
- [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

---

## Exercise 1

Create an `index.html` file with and externally linked JS file included in it. Load that file in your browser window.

In your JS file, declare a function called `min` that compares to two numbers and logs out the lower number to the console:

```js
// Inside your JS file, first create your function declaration...

// Then run:

console.log(min(0, 10));
// should log out 0 in the console

console.log(min(0, -10));
// should log out -10 in the console
```

---

## Exercise 2

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

## Lab Activity

Today's lab time will be dedicated to Project 2.

We will continue building out the HTML and CSS for this project today, and begin adding the interactive components when we learn about jQuery tomorrow.

---

## Additional Resources

An excellent free e-book on JavaScript that's worth bookmarking:

- [Eloquent JavaScript](http://eloquentjavascript.net/)
