---
layout: lesson
title: Two-way Data-Binding & Forms
slides: ['_slides/week-05/02-2-way-data-binding.md']
date: 2015-10-20
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

In today's lab we'll continue working on Project 4 and complete this exercise:

### JS Exercise

#### Sum of a Range

Write a `range` function that takes two arguments, `start` and `end`, and returns an array containing all the numbers from `start` up to (and including) `end`.

Next, write a `sum` function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your `range` function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call `range(1, 10, 2)` should return `[1, 3, 5, 7, 9]`. Make sure it also works with negative step values so that `range(5, 2, -1)` produces `[5, 4, 3, 2]`.

```js
// Your code here.

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
```

**Hints:**

Building up an array is most easily done by first initializing a variable to `[]` (a fresh, empty array) and repeatedly calling its push method to add a value. Don’t forget to return the array at the end of the function.

Since the end boundary is inclusive, you’ll need to use the `<=` operator rather than simply `<` to check for the end of your loop.

To check whether the optional step argument was given, either check `arguments.length` or compare the value of the argument to `undefined`. If it wasn’t given, simply set it to its default value (1) at the top of the function.

Having range understand negative step values is probably best done by writing two separate loops—one for counting up and one for counting down—because the comparison that checks whether the loop is finished needs to be `>=` rather than `<=` when counting downward.

It might also be worthwhile to use a different default step, namely, -1, when the end of the range is smaller than the start. That way, `range(5, 2)` returns something meaningful, rather than getting stuck in an infinite loop.

---

## Additional Resources

*Resources TBA...*
