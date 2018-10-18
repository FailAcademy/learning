---
layout: lesson
title: Intro to ES.next
slides: ["_slides/week-05/02-intro-to-esnext.md"]
lesson_date: 2018-10-31
---

## Pre-Work

Watch these videos from Laracast's [ES2015 Crash Course](https://laracasts.com/series/es6-cliffsnotes):

- [01: Babel Setup](https://laracasts.com/series/es6-cliffsnotes/episodes/1)
- [03: To Var, Let, or Const](https://laracasts.com/series/es6-cliffsnotes/episodes/3)
- [04: Arrows](https://laracasts.com/series/es6-cliffsnotes/episodes/4)
- [05: Default Parameters](https://laracasts.com/series/es6-cliffsnotes/episodes/5)
- [06: Rest and Spread](https://laracasts.com/series/es6-cliffsnotes/episodes/6)
- [07: Template Strings](https://laracasts.com/series/es6-cliffsnotes/episodes/7)
- [08: Awesome Object Enhancements](https://laracasts.com/series/es6-cliffsnotes/episodes/8)

Optional (but worthwhile!) additional viewing:

- [14: Useful String Additions](https://laracasts.com/series/es6-cliffsnotes/episodes/14)
- [15: Array#find and Array#includes](https://laracasts.com/series/es6-cliffsnotes/episodes/15)

While watching each video, open the the **[Babel online REPL](http://babeljs.io/repl/)** and try writing out each ES.next code example into it to see how it would be implemented in ES5 syntax.

---

## Learning Objectives

- Distinguish the major differences between ES.next and ES5 syntax.
- Distinguish the difference between compiling and transpiling code, and identify how use tools such as Babel and TypeScript enable more effective, modern JavaScript code.
- Set up a basic development environment for an ES.next application using Gulp.
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
  return first + " " + last + ",\nage: " + 2016 - birthYear + ".";
}

fullName("Emma", "Morano", 1900);
```

---

## Exercise 4

Create a simple function called `cashRegister` that uses `for...of` loop to calculate the total cost of any number of items a person wishes to purchase.

Because the number of purchased items may vary, you'll want to set up your function to accept as many (or as few) grocery items as need to be passed in.

The function also needs to accept an argument for the tax rate (assume the tax is 5%, but could change if necessary).

The tax amount will needed to be added to the subtotal of the summed item prices, with the total cost logged to the console.

---

## Lab Activity

In today's lab, you're going to refactor your Instanews project to use ES.next syntax.

To do this, start by creating a new branch on your project's repo called `esnext` and complete the lab tasks entirely on the new branch.

Specifically, you will need to:

- Add a **[`gulp-babel`](https://www.npmjs.com/package/gulp-babel)** to your project so you can transpile your JS to ES5
- You will also need to add `"parser": "babel-eslint",` to your `.eslintrc` config file, and then `npm install --save-dev babel-eslint` to use the parser when linting
- Replace all instances of `var` with `let` or `const` (whichever is most appropriate)
- Use a template literal to replace any string concatenation
- Use arrow functions where appropriate
- Use object destructuring to save data from the article object into variables

---

## Additional Resources

A great Codepen blog post series:

- [ES6 Sampler #1: (Let & Const)](http://codepen.io/k3no/post/es6-sampler-plate)
- [ES6 Sampler #2: Fat Arrows](http://codepen.io/k3no/post/es6-sampler-2-fat-arrows)
- [ES6 Sampler #3: Classes](http://codepen.io/k3no/post/es6-sampler-3-classes-prototypes)
- [ES6 Sampler #4: Spread](http://codepen.io/k3no/post/es6-sampler-4-spread)
- [ES6 Sampler #5: Promises (were made)](http://codepen.io/k3no/post/es6-sampler-5-promises-were-made)
- [ES6 Sampler #6 Odds & Ends](https://codepen.io/k3no/post/es6-sampler-6-odds-ends)

See ES2015 support differences in browsers:

- [ECMAScript 6 compatibility table](http://kangax.github.io/compat-table/es6/)

The official ES2015 Specification:

- [ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)

An excellent, concise summary of the new ES2015 features:

- [ES6 Overview in 350 Bullet Points](https://github.com/bevacqua/es6)

Understanding `var` versus `let` versus `const`:

- [Variable and Function Hoisting in ES2015](https://bitsofco.de/variable-and-function-hoisting-in-es2015/)

Extra reading on ES2015 basics:

- [Top ES2015 Features in 15 Minutes](https://kadira.io/blog/other/top-es2015-features-in-15-minutes)
- [Learn ES2015 (ES6/Harmony) Now!](http://learnharmony.org/)
- [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)
- [ECMAScript 2015: Let's talk about ES6](https://medium.com/ecmascript-2015)
- [ES6 for Humans](https://github.com/metagrover/ES6-for-humans)
