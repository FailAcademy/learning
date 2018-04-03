---
layout: lesson
title: Object Oriented Programming in JS
slides: ['_slides/week-05/04a-oop-with-esnext.md', '_slides/week-05/04b-pong.md']
lesson_date: 2018-05-10
---

## Pre-Work

Watch these videos from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes):

* [09: Classes](https://laracasts.com/series/es6-cliffsnotes/episodes/9)
* [10: ES6 Modules](https://laracasts.com/series/es6-cliffsnotes/episodes/10)

We'll be creating SVGs to build the Pong game in Project 3, so you'll want to take a look through this guide before class:

* [Pocket Guide to Writing SVG](http://svgpocketguide.com/book/)

---

## Learning Objectives

* Explain what object-oriented programming is in the JavaScript context.
* Describe and instantiate objects using the new `class` syntax.
* Describe and use the elements of a `class`, including the `constructor` and 'methods'.
* Describe how the scope of `this` works within classes.
  {% comment %}
* Describe and use `extends` and `super` for inheritance purposes.
  {% endcomment %}
* Use `import` and `export` to import and export ES.next classes to modules (as `default` or named exports).
* Code scalable vector graphics (SVGs) and add them inline to the DOM with JavaScript using OOP code.

---

## Keywords

* [`class`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
* [`constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
* [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
* [`extends`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
* [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
* [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)

---

## Exercise 1

Imagine you want to create an **object-oriented model of a soccer game**&mdash;what kind of class "blueprints" would you need to create to represent all of the elements of the game as objects (e.g. a player, the ball, etc.)?

What kinds of **properties** (i.e. adjectives/traits) would be needed to describe each object, and what kinds of **methods** (i.e. verbs/actions) would be available to each object?

Work in groups to create a **poster-based representation** your object-oriented soccer game, and present your work to the class.

---

## Exercise 2

Pick one of the classes your group modeled in the previous soccer game exercise, and use that to **write your first ES.next class**.

Ensure that you set all the appropriate **properties** in the `constructor` and create all the required **methods** for your class.

## {% comment %}

## Exercise 3

Now model our own classroom using the following classes. Note that `WebDevStudent` should be a subclass of `Student` and `Student` should be a subclass of `Person`. Create at least **three properties** and **one method** on each class.

* Clazz \*
* Person
* Student
* WebDevStudent

_(note: class is a keyword in JavaScript, and thus cannot be a valid name)_<br />

_Instantiate your classmates using_ `new WebDevStudent()`.
{% endcomment %}

---

## Lab Activity

In today's lab, you'll commence work on Project 3 using what you've now learned about ES.next syntactical features and Webpack to build a Pong game.

Clone the "Pong Starter" to get started.

```bash
git clone https://github.com/redacademy/pong-starter
cd pong-starter
npm install
webpack
npm start
```

Refer to the [project requirements page](/project/project-3-pong-game/) and the [building a Pong game slide deck](/slides/building-a-pong-game/) for further instructions.

---

## Additional Resources

More reading on classes in ES.next:

* [Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

A CSS Tricks video tutorial on SVGs:

* [Everything You Need To Know About SVG](https://css-tricks.com/lodge/svg/)
