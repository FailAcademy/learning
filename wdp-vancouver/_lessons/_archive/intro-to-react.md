---
layout: lesson
title: Intro to React 1
slides: ['_slides/week-05/01-intro-to-react.md']
lesson_date: 2016-05-09
---

## Pre-Work

- Please install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension for Google Chrome.
- Review the `.bind()` method and the syntax for creating `switch` statements.
- We'll be coding React in the browser, so please set up a new folder to contain the files for this lesson.
This folder should be set up with git and a package.json file (npm init).

---

## Learning Objectives

- Demonstrate uses of the JavaScript Array Methods `.map()` and `.filter()`
- Review scope of `this` and the `.bind()` method
- Explain `components` and `props` & `state`
- Create a React component
- Use `props` & `state` to update a React component's UI.

---

## Keywords

- Component
- `attribute`
- `props`
- `state`

---

## Exercise 1

1. Create an Array of 5 Todo objects. The objects should have a `name` and `completed` property.
2. Set some of the Todos completed property to `true` and others to `false`.
3. Use the `.filter()` method to search for and eliminate all item with a completed status set to true.
4. Use the `.map()` method to change all of the Todos to completed.

Use `console.log()` to print the resulting Arrays.

---

## Exercise 2

Take a close look at [this image](/public/img/slide-assets/airbnb-components.png) and
create named React components for the UI elements in it. (Remember that components can be nested and have parent components).
How many components you create, and what you name them is up to you.

---

## Exercise 3

Create a complete page using the React components you created in **exercise 2**. Take all of the individual components and nest them where
where appropriate, creating parent components if necessary.

---

## Lab Activity

In today's lab we'll start coding our first React mini-project: A Tweet Box Component!
We'll compare React and jQuery by coding the Component using each library simultaneously!

---

## Additional Resources

### React

Visit the [React Homepage](https://facebook.github.io/react/)

Here is a great boilerplate for getting started with React Apps:
[https://github.com/coryhouse/react-slingshot](https://github.com/coryhouse/react-slingshot)


### JavaScript

[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/array/map) - MDN Page <br>
[Array.prototype.filter()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/array/filter) - MDN Page <br>
[Function.prototype.bind()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind) - MDN Page <br>
React Homepage: [https://facebook.github.io/react/](https://facebook.github.io/react/)

---
