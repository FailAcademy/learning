---
layout: lesson
title: UI Animations in Angular
slides: ['_slides/week-06/04b-angular-animations.md']
date: 2016-02-25
---

## Pre-Work

Install the ngAnimate module in your application:
- [https://docs.angularjs.org/api/ngAnimate](https://docs.angularjs.org/api/ngAnimate)

Review the angular documentation for ngAnimate:
- [https://docs.angularjs.org/api/ngAnimate](https://docs.angularjs.org/api/ngAnimate)
- [https://docs.angularjs.org/guide/animations](https://docs.angularjs.org/api/ngAnimate)

Review this exellent article on animations in Angular:
- [https://css-tricks.com/animations-the-angular-way/](https://css-tricks.com/animations-the-angular-way/)

---

## Learning Objectives

Today we'll finish adding routes to our application and begin to add animations on page transitions using `ng-view` and  CSS `@keyframes`!
Animations will be achieved via SCSS and Angular's ngAnimate module, which we'll install in our application.
(We will not be covering JavaScript based animations).

---

## Keywords

- `ng-view`
- `ng-enter`
- `ng-leave`
- `@keyframes`

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

The essence of this example lies in grouping the elements of a collection by some aspect of splitting the array of ancestors into smaller arrays with the ancestors for each century.

During the grouping process, keep an object that associates century names (numbers) with arrays of either person objects or ages. Since we do not know in advance what categories we will find, we’ll have to create them on the fly. For each person, after computing their century, we test whether that century was already known. If not, add an array for it. Then add the person (or age) to the array for the proper century.

Finally, a `for/in` loop can be used to print the average ages for the individual centuries.

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

---

## Additional Resources

Check out this CSS generator built to create CSS animations for use in your Angular projects:
- [http://www.nganimate.org/pell](http://www.nganimate.org/pell)
