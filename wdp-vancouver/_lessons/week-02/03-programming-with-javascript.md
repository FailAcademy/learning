---
layout: lesson
title: Programming with JavaScript
slides: ['_slides/week-02/03-programming-with-javascript.md']
lesson_date: 2017-04-20
---

## Pre-Work

Before the first JS class, be sure to work through all of the free modules in Codeacademy's [JavaScript](https://www.codecademy.com/learn/javascript) tutorial.

Also read through the following page to reinforce some JS programming concepts before class:

- [JavaScript for Cats](http://jsforcats.com/)

---

## Learning Objectives

- Define basic programming concepts such as statements, booleans, conditionals, loops, and variables (in relation to JavaScript).
- Distinguish how JavaScript differs from other "server-side" programming languages.
- Use the development tools essential for writing and debugging JavaScript code.
- Create and use basic JavaScript functions.
- Build basic JavaScript objects and manipulate their properties and methods.
- Create JavaScript arrays and iterate over them.

---

## Keywords

- Syntax
- Variable
- Concatenation
- Comments
- [`document`](https://developer.mozilla.org/en-US/docs/Web/API/document)
- [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- Operators
- Conditionals
- Loops
- [`console`](https://developer.mozilla.org/en-US/docs/Tools/Web_Console)

---

## Exercise 1

Open a new browser tab and open the console, and type in each line one at a time:

```js

alert('Hello World!');
var yourName = prompt('What\'s your name?');
console.log(yourName);

```

If we wanted to store the value inputted into the `prompt` and print it out in an `alert` afterward, how might we do that?

And what would we do if wanted to output the value that was entered in the `prompt` with the string `Hello, ` in front of it in the subsequent `alert`?

---

## Exercise 2

Using what you just learned about conditional statements and loops, write a program that uses `console.log()` to print all the numbers from 1 to 100, with two exceptions.

For numbers divisible by 3, print **Fizz** instead of the number, and for numbers divisible by 5 (and not 3), print **Buzz** instead.

When you have that working, modify your program to print **FizzBuzz**, for numbers that are divisible by both 3 and 5 (and still print **Fizz** or **Buzz** for numbers divisible by only one of those).

---

## Exercise 3

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

## Lab Activity

With any remaining time after the lesson today, spend some time working through the "Basic JavaScript" tutorials on [Free Code Camp](http://www.freecodecamp.com/map).

---

## Additional Resources

Free JS-related books online:

- [JSbooks](http://jsbooks.revolunet.com/)

A popular JS styleguide:

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
