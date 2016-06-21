---
layout: lesson
title: Intro to ECMAScript 2015
slides: ['_slides/week-05/01-intro-to-es2015.md']
lesson_date: 2016-08-02
---

## Pre-Work

Visit the [Learn ES2105](https://babeljs.io/docs/learn-es2015/) page and review the list of new features of javascript that are a part of ECMAScript 6!

See [ES2015](http://kangax.github.io/compat-table/es6/) support differences in browsers.

Read this [excellent overview](https://github.com/bevacqua/es6) of ES2015 on github.

---

## Learning Objectives

- Illustrate the major differences between ES2015 over ES5
- Build a basic JavaScript application using ES2015 & Gulp.
- Refactor an ES5 app to use ES2015

---

## Learning Objectives

### JavaScript is Changing
- Demonstrate that JavaScript is changing and evolving
- Understand the meaning of `'use strict';`
- Define compilation and compilation options such as Babel & TypeScript

### Setting up ES2015
- Set up an environment to target ES2015 -> ES5 using Gulp

### ES2015 Improvements
- Describe and use modules using `import` and `export`
- Describe when to use `let` or `const` to declare variables
- Describe and use the `=>` as opposed to a function

### ES2015 Shorthands
- Describe and use 'template strings'
- Describe and use 'object literals'
- Describe and use 'default parameters'
- Describe and use 'destructuring'
- Describe and use 'spread'

### * ES2015 Promises
- Describe and use `Promise`
- Describe and use `then`
- Describe and use `resolve` & `reject` to return a promise

---

## Keywords

- `import`
- `export`
- `let`
- `const`
- template strings '`'
- Object literal
- Lexical scoping (`=>`)
- Destructuring
- Default parameters
- `Promise`

---

## Exercise 1 - Dev Environment Setup

Set up an ES2015 development environment using Gulp.

- Install the gulp-babel plugin. [https://www.npmjs.com/package/gulp-babel](https://www.npmjs.com/package/gulp-babel)
- See an [example gulp-babel setup](https://github.com/redacademy/red-gulp-babel)
---

## Exercise 2 - Modules
Practice using `import` & `export`
- `> git clone https://github.com/redacademy/red-es2015`
- Follow the README in "import-export" to get setup.
- Follow the instructions in "import-export/src/index.js".

---

## Exercise 3 - Declarations: Let & Const
- Fix the hoisting problem in [this CodePen](http://codepen.io/redacademy/pen/pyZpqV).
- Make the variable unable to be redeclared in [this CodePen](http://codepen.io/redacademy/pen/jqpYoz).

---

## Exercise 4 - Arrow Function
- Use arrow functions to fix [this CodePen](http://codepen.io/redacademy/pen/mPjXVW).

---

## Exercise 5 - Template Literals
- Change [this CodePen](http://codepen.io/redacademy/pen/PNBQvB) to use template literals.

---

## Exercise 6 - Object Literals, Default Parameters & Destructuring
Write an example using:
 - object literal
 - default parameter
 - destructuring an objects
 - destructuring an array

If time, try writing an example using other ES2015 features.

---

## Exercise 7 - Promises
Create a class that returns a promise, and take some action asynchronously!
*Promise, Arrow-functions (setTimeout/this)*

---

## Additional Resources

This line describes the resource:

- [Best things about ES2015!](https://kadira.io/blog/other/top-es2015-features-in-15-minutes)
- [Interactive Practice](http://learnharmony.org/)
- [Babel homepage](https://babeljs.io/docs/learn-es2015/)
- [List of ES6 Resources](https://github.com/ericdouglas/ES6-Learning)
- [The official ES2015 Specification!](http://www.ecma-international.org/ecma-262/6.0/)
