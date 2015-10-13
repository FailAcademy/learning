---
layout: lesson
title: AngularJS Directives
slides: ['_slides/week-05/01-angular-directives.md']
date: 2015-10-19
---

## Pre-Work

*Pre-work TBA...*

---

## Learning Objectives

- *Learning objectives TBA...*

---

## Keywords

- *Keywords TBA...*

---

## Exercise 1

*Exercise TBA...*

---

## Exercise 2

*Exercise TBA...*

---

## Exercise 3

*Exercise TBA...*

---

## Lab Activity

During week 5, in addition to spending lab time working on Project 4, we'll also be doing some practice drills to beef up our JS skills...

### JS Exercise

#### Bean Counting

You can get the Nth character, or letter, from a string by writing `"string".charAt(N)`, similar to how you get its length with `"s".length`. The returned value will be a string containing only one character (for example, `"b"`). The first character has position zero, which causes the last one to be found at position `string.length - 1`. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called `countChar` that behaves like `countBs`, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite `countBs` to make use of this new function.

```js
// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```

**Hints:**

A loop in your function will have to look at every character in the string by running an index from zero to one below its length (`< string.length`). If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop has finished, the counter can be returned.

Take care to make all the variables used in the function local to the function by using the `var` keyword.

---

## Additional Resources

*Resources TBA...*
