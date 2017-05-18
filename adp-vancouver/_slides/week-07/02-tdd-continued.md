---
layout: slidedeck
title: Coding Interview - TDD Continued
---

{% highlight html %}
name: inverse
layout: true
class: center, middle, inverse

---

# The Coding Interview
## (TDD Continued)

.title-logo[![Red logo](/public/img/red-logo-white.svg)]

---
layout: false

# Agenda

1. Review of yesterday's lab
1. More TDD Practice
1. Time complexity
1. Big O
1. Using data structures to increase performance
1. MORE TDD Practice

---
template: inverse

## Review: String Compression Lab

---
class: middle

## Exercise: First Unique Character

Write a function that returns the first unique character in a string.

Examples:

```js
'dddeeefggghhh' => 'f'
'terfg' => 't'
'frof' => 'r'
'ttttt' => undefined
```
---
template: inverse

# Time Complexity
#### How long did your algorithm take to execute?
---

## Time Complexity

Counts the (worst case) number of operations

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.length; // 7

// 1 operation
return numbers[0];

// n (7) operations
numbers.forEach(number => {
  console.log(number);
});

//  n^2 (49) operations
numbers.forEach(number => {
  console.log(`outer: ${number}`);

  numbers.forEach(number => {
    console.log(`inner: ${number}`);
  });
});

```
---
## Time Complexity

Grouped by orders of magnitude. Defined using Big O Notation.

.condensed[
- Constant __O(1)__
- N Operations __O(n)__
- N*N Operations __O(n^2)__
- N^N Operations __O(n^n)__
- N! Operations __O(n!)__
]

We read O(1) as "has an O of 1", O(n) as "has an O of n", etc.

---
class: middle

## Exercise: First Unique Character

What's the time complexity of your solution?

---
class: middle

## Exercise: First Unique Character

Refactor for O(n).
---
class: middle

## Exercise: Missing Integer

Write a function that, given an array of `n` integers, returns the minimal positive integer (greater than 0) that does not occur in the array.

For example, given:

```
[1, 3, 6, 4, 1, 2]
```

The function should return 5.

What's your time complexity?

---
class: middle

## Strategies for Handling Time Complexity

__Using data structures for counting__

What if the first thing you do when iterating over an array is to 'count' the elements within it? How could this apply to the __Missing Integer__ problem?

---
class: middle

## Code Along: Missing Integer

__Using data structures for counting__

.condensed[
- Iterate over array, counting the occurence of each integer
- Store the count in an array
- The index of the array element is the number being counted
]

What's our new time complexity?

---

## Lab Activity: One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if that are one (or zero) edits away.

Example:
```
pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false
face, facts => false
```

What is the time complexity of your solution? Could it be better?


{% endhighlight %}
