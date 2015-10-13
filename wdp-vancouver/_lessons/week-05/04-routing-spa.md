---
layout: lesson
title: Single Page Applications & Routing
slides: ['_slides/week-05/04-routing-spa.md']
date: 2015-10-22
---

## Pre-Work

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

#### Historical Life Expectancy

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in `Math.ceil(person.died / 100)`.

```js
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
```

**Hints:**

The essence of this example lies in grouping the elements of a collection by some aspect of theirs—splitting the array of ancestors into smaller arrays with the ancestors for each century.

During the grouping process, keep an object that associates century names (numbers) with arrays of either person objects or ages. Since we do not know in advance what categories we will find, we’ll have to create them on the fly. For each person, after computing their century, we test whether that century was already known. If not, add an array for it. Then add the person (or age) to the array for the proper century.

Finally, a `for/in` loop can be used to print the average ages for the individual centuries.

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

---

## Additional Resources

*Resources TBA...*
