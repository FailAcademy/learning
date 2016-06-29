---
layout: lesson
title: Object Oriented Programming in JS
slides: ['_slides/week-05/03a-oop-with-es2015.md', '_slides/week-05/03b-pong.md']
lesson_date: 2016-08-04
---

## Pre-Work

Complete the following readings on ES2015 classes before class:

- [An Introduction to ES6 Classes](https://strongloop.com/strongblog/an-introduction-to-javascript-es6-classes/)
- [Learn ES2015: Classes](https://babeljs.io/docs/learn-es2015/#classes)

We'll be using HTML Canvas to build the Pong game in Project 3, so you'll want to work through this tutorial before class:

- [HTML5 Canvas Tutorial: An Introduction](https://www.sitepoint.com/html5-canvas-tutorial-introduction/)

---

## Learning Objectives

- Explain what object-oriented programming is in the JavaScript context.
- Describe and instantiate objects using the new `class` syntax.
- Describe and use the elements of a `class`, including the `constructor` and 'methods'.
- Describe how `this` functions within classes.
- Describe and use `extends` and `super` for inheritance purposes.
- `import` and `export` ES2015 classes as modules (as `default` or named exports).

---

## Keywords

- [`class`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
- [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
- [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
- [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

## Exercise 1

Imagine you want to create an **object-oriented model of a soccer game**&mdash;what kind of class "blueprints" would you need to create to represent all of the elements of the game as objects (e.g. a player, the ball, etc.)?

What kinds of **properties** (i.e. adjectives/traits) would be needed to describe each object, and what kinds of **methods** (i.e. verbs/actions) would be available to each object?

Work in groups to create a **poster-based representation** your object-oriented soccer game, and present your work to the class.

---

## Exercise 2

Pick one of the classes your group modeled in the previous soccer game exercise, and use that to **write your first ES2015 class**.

Ensure that you set all the appropriate **properties** in the `constructor` and create all the required **methods** for your class.

---

## Exercise 3

Now model our own classroom using the following classes. Note that `WebDevStudent` should be a subclass of `Student` and `Student` should be a subclass of `Person`. Create at least **three properties** and **one method** on each class.

- Clazz *
- Person
- Student
- WebDevStudent

*(note: class is a keyword in JavaScript, and thus cannot be a valid name)*<br />

*Instantiate your classmates using* `new WebDevStudent()`.

---

## Lab Activity

In today's lab, you'll commence work on Project 3 using what you've now learned about ES2015 syntactical features and Webpack to build a Pong game.

---

## Additional Resources

More reading on classes in ES2015:

- [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

An extended MDN tutorial on HTML Canvas:

- [Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
