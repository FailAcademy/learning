---
layout: lesson
title: Intro to ECMAScript 2015
slides: ['_slides/week-05/01-intro-to-es2015.md']
lesson_date: 2016-10-25
---

## Pre-Work

Visit the **[Learn ES2015](https://babeljs.io/docs/learn-es2015/)** page and review the list of new features of JavaScript that are a part of ES2015. Pay attention to these sections in particular:

- [Let + Const](https://babeljs.io/docs/learn-es2015/#let--const)
- [Arrows and Lexical This](https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this)
- [Enhanced Object Literals](https://babeljs.io/docs/learn-es2015/#enhanced-object-literals)
- [Template Strings](https://babeljs.io/docs/learn-es2015/#template-strings)
- [Destructuring](https://babeljs.io/docs/learn-es2015/#destructuring)
- [Default + Rest + Spread](https://babeljs.io/docs/learn-es2015/#default--rest--spread)
- [Iterators + For..Of](https://babeljs.io/docs/learn-es2015/#iterators--forof)

While reviewing each section, open the the [Babel online REPL](http://babeljs.io/repl/) and try pasting each ES2015 code example into it to see how it would be implemented in ES5 syntax.

Also read through this excellent summary of the new ES2015 features before class:

- [ES6 Overview in 350 Bullet Points](https://github.com/bevacqua/es6)

---

## Learning Objectives

- Distinguish the major differences between ES2015 (ES6) and ES5 syntax.
- Distinguish the difference between compiling and transpiling code, and identify how use tools such as Babel and TypeScript enable more effective, modern JavaScript code.
- Set up a basic development environment for an ES2015 application using Gulp.
- Use the block-scoped binding constructs `let` and `const` in lieu of `var` to define variables where appropriate.
- Use arrow syntax to write functions that share the same lexical `this` as their surrounding code.
- Use template literals, enhanced object literals, default parameters, destructuring, rest parameters, and spread operators as shorthand for writing less redundant code.
- Use `for...of` to loop over iterable objects.

---

## Keywords

- [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)
- [Lexical scoping](https://developer.mozilla.org/en/docs/Web/JavaScript/Closures)
- [Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Spread operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

---

## Exercise 1

[Refactor the previous CodePen example](http://codepen.io/redacademy/pen/pyZpqV) with `let` to fix the issue previously cause by `var`.

---

## Exercise 2

Use arrow functions to fix [this CodePen](http://codepen.io/redacademy/pen/mPjXVW).

---

## Exercise 3

Use a template literal to refactor the following code.

```js
function fullName(first, last, birthYear) {
  return first + ' ' + last + ',\nage: ' + 2016 - birthYear + '.';
}

fullName('Emma', 'Morano', 1900);
```

---

## Exercise 4

Create a simple function called `cashRegister` that uses `for...of` loop to calculate the total cost of any number of items a person wishes to purchase.

Because the number of purchased items may vary, you'll want to set up your function to accept as many (or as few) grocery items as need to be passed in.

The function also needs to accept an argument for the tax rate (with it's default set to 5%).

The tax amount will needed to be added to the subtotal of the summed item prices, with the total cost logged to the console.

---

## Lab Activity

In today's lab, you're going to refactor your Instanews project to use ES2015 syntax.

To do this, start by creating a new branch on your project's repo called `es2015` and complete the lab tasks entirely on the new branch.

Specifically, you will need to:

- Add a Gulp Babel to your project so you can transpile your JS to ES5
- Replace all instances of `var` with `let` or `const` where appropriate
- Use a template literal to replace any string concatenation

#### Challenge yourself:

- Refactor out your API call into a separate function and use `import` and `export` to load this function from another file. **Babel** alone does not compile modules into a format that your browser will recognize. Look at tomorrow's lesson for clues.
- If you figure this out, next try removing the `<script>` element from your project's `index.html` file that loads jQuery, install jQuery from npm as a project dependency (but **not** a development dependency this time!), and `import` jQuery in your main project JS file instead

---

## Additional Resources

See ES2015 support differences in browsers:

- [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/)

The official ES2015 Specification:

- [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)

Understanding `var` versus `let` versus `const`:

- [Variable and Function Hoisting in ES2015](https://bitsofco.de/variable-and-function-hoisting-in-es2015/)

Extra reading on ES2015 basics:

- [Top ES2015 Features in 15 Minutes](https://kadira.io/blog/other/top-es2015-features-in-15-minutes)
- [Learn ES2015 (ES6/Harmony) Now!](http://learnharmony.org/)
- [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)
- [ECMAScript 2015: Let's talk about ES6](https://medium.com/ecmascript-2015)
- [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)
