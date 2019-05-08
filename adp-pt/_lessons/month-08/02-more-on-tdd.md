---
layout: lesson
title: More on TDD
slides: ['_slides/month-08/02-more-on-tdd.md']
lesson_date: 2020-01-21
---

## Pre-Work

Prior to class, please read:

- [Big-O notation explained by a self-taught programmer](https://justin.abrah.ms/computer-science/big-o-notation-explained.html)
- [Counting elements during iteration](https://codility.com/media/train/2-CountingElements.pdf)

---

## Learning Objectives

- Practice white-boarding interviews.
- Practice writing test cases.
- Identify the time complexity of a simple algorithm using Big O Notation.
- Use arrays and hash tables to solve counting problems.

---

## Keywords

- Time complexity
- Brute Force
- Big O

---

## Exercise 1

Using TDD, write a function that **returns the first unique character** in a string.

Examples:

- `'dddeeefggghhh'` => `'f'`
- `'terfg'` => `'t'`
- `'frof'` => `'r'`
- `'ttttt'` => `undefined`

---

## Exercise 2

Figure out the time complexity of your solution to Exercise 1.

---

## Exercise 3

Refactor your Exercise 1 solution for O(n).

---

## Exercise 4

Write a function that, given an array of `n` integers, returns the minimal positive integer (greater than 0) that does not occur in the array.

For example, given:

```
[1, 3, 6, 4, 1, 2]
```

The function should return `5`.

---

## Exercise 5

**One Away:**

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if that are one (or zero) edits away.

Example:

```
pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false
face, facts => false
```

- Break the problem into test scenarios
- Implement the tests using Jest
- Write code to make your tests pass

What is the time complexity of your solution? Could it be better?

---

## Additional Resources

More resources about Big O Notation:

- [Big-O Explained](https://dev.to/imjacobclark/big-o-explained)
- [Know Thy Complexities!](http://bigocheatsheet.com/)

A course on basic algorithms from Khan Academy:

- [Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
