---
layout: lesson
title: Functional Programming
slides: ['_slides/week-02/02-functional-programming.md']
lesson_date: 2017-04-18
---

## Pre-Work

Complete the following readings before class:

- [Eloquent JavaScript - Higher Order Functions](http://eloquentjavascript.net/05_higher_order.html)
- Chapters 1-3 of [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch1.md)

---

## Learning Objectives

- Identify the differences between pure and impure functions, and write code that avoids side effects.
- Practice common array methods (`.map`, `.filter`, `.sort`, `.reduce`).
- Distinguish between `.forEach` and `.map`.
- Distinguish between `.push` and `.concat`.
- Use the spread operator (`...`) to avoid array mutation.
- Use `Object.assign` to avoid object mutation.
- Distinguish between **imperative** & **declarative** programming

---

## Keywords

- Pure
- Impure
- Side effects
- Mutation
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- imperative
- declarative
- Spread operator

---

## Lab Activity: Functional Produce

Today we're going to automate grocery store fruit management.

The task is to write three functions that can be chained together.

The first, `countFruit` takes shipping company's poorly structured fruit data and converts it into usable form.

```js
// Before
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

// After
{ apples: 148, pears: 45, oranges: 183, grapes: 498, kiwis: 201 }
```

The second function, `stockUp`, adds an identical amount of fruit to each category.

```js
// Before
const fruit = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
};

// stockUp is called with '5'

// After
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
// Data
const fruit = {
  apples: 148,
  pears: 45,
  oranges: 183,
  grapes: 498,
  kiwis: 201
}
```

Ouput:

```
148 apples, 45 pears, 183 oranges, 498 grapes, 201 kiwis
```

These methods should be designed to be chained in order:

```js
data.countFruit().stockUp(7).explain();
```

In order to chain these functions, you will need to extend both the `Array` and `Object` prototypes.

Example:

```js
Array.prototype.countFruit = function() {
  console.log(this); // Array available as 'this'
  return {};
};
```

These functions must be __pure__. In order to assure purity, use [Deep Freeze](https://github.com/substack/deep-freeze) to freeze `this` in each function.
Deep Freeze will throw an error if you try to mutate anything it has frozen.

```js
// Make sure to run in strict mode
'use strict';

Object.prototype.stockUp = function(count) {
  deepFreeze(this);
  console.log(this); // Object available as 'this'
  return {};
}
```

---

## Additional Resources

- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide)
