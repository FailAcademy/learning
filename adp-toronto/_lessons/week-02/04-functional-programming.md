---
layout: lesson
title: Functional Programming
slides: ["_slides/week-02/04-functional-programming.md"]
lesson_date: 2019-01-21
---

## Pre-Work

Complete the following reading from Eloquent JavaScript before class:

- [Higher Order Functions](http://eloquentjavascript.net/05_higher_order.html)

Also read the following chapters from "Professor Frisby's Mostly Adequate Guide to Functional Programming":

- [Chapter 1: What ever are we doing?](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch01.md)
- [Chapter 2: First Class Functions](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch02.md)
- [Chapter 3: Pure Happiness with Pure Functions](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch03.md)
- [Chapter 4: Currying](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch4.md)
- [Chapter 5: Coding by Composing](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md)

---

## Learning Objectives

- Explain the origins of functional programming and how it differs from object-oriented programming.
- Distinguish between imperative and declarative programming, and their relative pros and cons.
- Explain what it means to have "first-class functions" in JavaScript.
- Explain what higher-order functions are and create them.
- Identify the differences between pure and impure functions, and write code that avoids side effects.
- Explain the difference between mutable and immutable objects.
- Demonstrate the different outcomes from calling methods such as `.forEach()` and `.map()`, `.push()` and `.concat()`, and `.splice()` and `.slice()`
- Practice using common array methods (such as `.map()`, `.filter()`, and `.reduce()`) to transform data.
- Use the spread operator `...` and `Object.assign()` to avoid array mutation.
- Explain what function currying and function composition are, and how they can be used to make code more reusable and readable.

---

## Keywords

- Imperative
- Declarative
- First class function
- Higher-order function
- Pure function
- Side effect
- Mutability
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- Currying
- Composition

---

## Exercise 1

Create examples of pure functions in JavaScript for each of the following cases:

1.  A function that uses a function as an input parameter
2.  A function created as an output from another function
3.  A function that calls itself

Be prepared to demo your functions for the class.

---

## Exercise 2

With a partner, **compare** and **categorize** the following array methods. How are they different? When should each be used?

- `forEach`
- `map`
- `concat`
- `push`
- `slice`
- `splice`

---

## Exercise 3

Turn this list:

```js
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Into `[8, 6, 4, 2]` using array methods and **only one line of code**. Do not mutate the original `list` array!

Add `.sort()` to the end of your array method chain.

Now add `10` to the original list. What happens when you sort it now? Why do you think this happens?

---

## Exercise 4

Flatten then add together this array using `.reduce()`, so:

`[[0, 1], [2, 3], [4, 5]]`

Becomes this:

`[0, 1, 2, 3, 4, 5]`

Then this:

`15`

---

## Exercise 5

In small groups, you'll have 15 minutes to understand your assigned topic (in relation to avoiding mutating object data) and teach it to the class using examples:

1.  `Object.assign`
2.  `...` spread operator
3.  `Object.freeze`

---

## Exercise 6

Re-write this function as a curried function:

```js
const greeting = (greeting, name) => {
  return `${greeting}, ${name}`;
};
```

Try using partial application with your curried function too.

---

## Exercise 7

Create a `compose` function that accepts any number of functions as arguments to compose these functions together. Try emoting multiple times and see what happens.

```js
const greet = name => {
  return `Hello ${name}`;
};

const emote = sentence => {
  return `${sentence}!!!`;
};
```

---

## Lab Activity

### Functional Produce

Today we're going to automate grocery store fruit management.

The task is to write three functions that can be chained together.

The first, `countFruit` takes shipping company's poorly structured fruit data and converts it into usable form.

```js
// Before:

const data = [
  ['apples', 73],
  ['pears', 12],
  ['oranges', 97],
  ['grapes', 387],
  ['grapes', 88],
  ['pears', 33],
  ['apples', 75],
  ['grapes', 23],
  ['oranges', 86],
  ['kiwis', 201]
];

// After:

{ apples: 148, pears: 45, oranges: 183, grapes: 498, kiwis: 201 }
```

The second function, `stockUp`, adds an identical amount of fruit to each category.

```js
// Before:

const fruit = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
};

// stockUp is called with '5'

// After:

const fruit = {
  apples: 153,
  pears: 50,
  oranges: 188,
  grapes: 503,
  kiwis: 206
};
```

The third function, `explain` will give a human readable output of the fruit inventory.

```js
// Data:

const fruit = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
};
```

Ouput:

```
148 apples, 45 pears, 183 oranges, 498 grapes, 201 kiwis
```

These methods should be designed to be chained in order:

```js
data
  .countFruit()
  .stockUp(7)
  .explain();
```

In order to chain these functions, you will need to extend both the `Array` and `Object` prototypes.

Example:

```js
Array.prototype.countFruit = function() {
  console.log(this); // Array available as 'this'
  return {};
};
```

These functions must be **pure**. In order to assure purity, use [Deep Freeze](https://github.com/substack/deep-freeze) to freeze `this` in each function. Deep Freeze will throw an error if you try to mutate anything it has frozen.

```js
// Make sure to run in strict mode
"use strict";

Object.prototype.stockUp = function(count) {
  deepFreeze(this);
  console.log(this); // Object available as 'this'
  return {};
};
```

---

## Additional Resources

A great video on series on functional programming in JS:

- [Fun Fun Function: Functional programming in JavaScript (playlist)](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

The full-text of this lesson's pre-work readings:

- [Eloquent JavaScript - Second Edition](http://eloquentjavascript.net/)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide#readme)

Helpful resource for understanding the difference between `.map()`, `.filter()`, and `.reduce()`:

- [Array Map, Filter and Reduce in JS](http://atendesigngroup.com/blog/array-map-filter-and-reduce-js)

Other helpful JS functional programming readings:

- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Lambda Calculus - Computerphile](https://youtu.be/eis11j_iGMs)
- [Array Map, Filter and Reduce in JS](https://atendesigngroup.com/blog/array-map-filter-and-reduce-js)
- [Functional Programming Jargon](https://functional.works-hub.com/learn/Functional-Programming-Jargon)
