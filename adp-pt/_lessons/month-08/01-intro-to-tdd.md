---
layout: lesson
title: Intro to TDD
slides: ['_slides/month-08/01-intro-to-tdd.md']
lesson_date: 2020-01-14
---

## Pre-Work

Prior to class, please read:

- [How to Impress in a Junior Developer Job Interview
  ](https://www.codementor.io/learn-programming/junior-developer-interview-tips-to-success)
- [I pity the fool who doesn't write unit tests](https://blog.codinghorror.com/i-pity-the-fool-who-doesnt-write-unit-tests/) and be prepared to explain why writing unit tests is an essential part of application development.
- [5 Whiteboard Coding Tips for Interviews](http://product.hubspot.com/blog/5-whiteboard-coding-tips-for-interviews)

---

## Learning Objectives

- Identify the general structure and goals of coding interviews.
- Identify when code is _complete_ and _working_.
- Take an interview question and break it into test scenarios.
- Identify common edge-cases associated with algorithms.
- Convert scenarios into unit tests using [Jest](https://github.com/facebook/jest).
- Run tests using npm scripts.
- Use Test Driven Development (TDD) to write code that passes tests.

---

## Keywords

- Coding interview
- Edge Cases
- Unit test
- Red/Green/Refactor
- TDD
- Regression Test
- Code Specifications (aka Code Examples)

---

## Exercise 1

In groups:

- Use the whiteboard to draw out some examples of the jumping frog algorithm
- Write out a specification for the `frogJumps` function **in plain English**. Use the format:

```
[Function name]

When [given some input(s)] it should [return something].
When [given some other input(s)] it should [return something else].
...etc
```

---

## Exercise 2

Implement unit tests for each of the specifications you wrote for `frogJumps`.

Think about the **Edge Cases**

- Zero Arguments
- Perfect match
- Maximum Match
- No Match

---

## Exercise 3

A palindrome is a string that is the same when written forwards and backwards.
**Mom**, **racecar**, and **never odd or even** are all palindromes.

Write a function that takes a string and returns whether it is a palindrome. Take these steps to do so:

- Whiteboard the algorithm
- Write out plain English specs
- Convert specs to tests
- Implement your algorithm

---

## Lab Activity (Next Class)

**String Compression:**

Write a function that takes a string and returns a new string that numerically indicates any repeated characters.

Examples:

- `'aaabbbccc'` => `'a3b3c3'`
- `'ghjff'` => `'g1h1j2f2'`

To complete this lab, you will need to:

- Break the problem into test scenarios
- Implement the tests using Jest
- Write code to make your tests pass

---

## Additional Resources

Some JavaScript testing frameworks to explore:

- [Jest](https://facebook.github.io/jest/)
- [Jasmine](https://jasmine.github.io/)
