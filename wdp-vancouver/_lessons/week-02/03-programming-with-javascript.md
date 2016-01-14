---
layout: lesson
title: Programming with Javascript
slides: ['_slides/week-02/03-programming-with-javascript.md']
date:  2016-01-27
---

## Pre-Work

A good read to brush up your JS skills before class:

- [JavaScript for Cats](http://jsforcats.com/)

---

## Learning Objectives

- Define basic programming concepts such as statements, booleans, conditionals, loops, and variables (in relation to JavaScript).
- Distinguish how JavaScript differs from other "server-side" programming languages.
- Become familiar with the tools used for developing and debugging javascript code.
- Create and use basic JavaScript functions.
- Build basic JavaScript objects and manipulate their properties and methods.
- Create JavaScript arrays and iterate over them.

---

- Statement
- Variable
- Declaration
- Assignment
- Boolean
- Loop
- Conditional
- Operator
- Concatenate
- [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)
- [Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object)
- Method
- Property
- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array)
- [Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

---

## Exercise 1

Open a new browser tab and open the console, and type in each line one at a time:

```js
alert('Hello World!');
prompt('What\'s your name?');
document.write('<h1>Hi There!</h1>');
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

Let's add an external JS file to our Project 2 directory, and include it in our `index.html` file for the project.

To make sure you've done it correctly, `console.log()` any string in the JS file, and make sure that it shows up in the console when you open the HTML file in your browser window.

We won't be adding any other JS to this file today, but will be later in the week when we learn about jQuery.

---

## Exercise 4

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

## Exercise 5

In this exercise, you're going to build a JS object of your own to represent a **hotel**.

Properties of the hotel object should include the **name** of the hotel (The Quay), the **total number of rooms** (40), the current number of **rooms booked** (25), an array of the **types of rooms** (twin, double, suite), and function to **check the availability**.

One you've created your object, **create a loop** to log to the console all of the room types one-by-one. Then, **update the booked rooms** to 30, check the new availability, and display that in an **alert box**.

---

## Lab Activity


---

## Additional Resources

More resources and online tutorials for learning JavaScript:

- [JavaScript.com - Free Resources](https://www.javascript.com/resources)

Free JS-related books online:

- [JSbooks](http://jsbooks.revolunet.com/)

A tool for helping you detect errors or other problems in your JavaScript:

- [JSHint](http://jshint.com/)

Some "reserved words" that should not be used for variable or function names in JS:

- [Keywords and reserved words in JavaScript](http://javascriptbook.com/extras/keywords-and-reserved-words/)
