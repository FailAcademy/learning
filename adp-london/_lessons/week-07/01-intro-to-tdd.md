---
layout: lesson
title: Intro to TDD
slides: ['_slides/week-07/01-intro-to-tdd.md']
lesson_date: 2017-05-23
---

## Pre-Work

Read:

- [How to Impress in a Junior Developer Job Interview
](https://www.codementor.io/learn-programming/junior-developer-interview-tips-to-success)
- [I pity the fool who doesn't write unit tests](https://blog.codinghorror.com/i-pity-the-fool-who-doesnt-write-unit-tests/) and be prepared to explain why writing unit tests is an essential part of application development.
- [5 Whiteboard Coding Tips for Interviews](http://product.hubspot.com/blog/5-whiteboard-coding-tips-for-interviews)


---

## Learning Objectives
- Understand the general structure and goals of coding interviews
- Identify when code is 'complete' and 'working'
- Take an interview question and break it into test scenarios
- Identify common edge-cases associated with algorithms
- Convert scenarios into unit tests using [Jest](https://github.com/facebook/jest).
- Run tests using NPM scripts
- Use Test Driven Development (TDD) to write code that makes the tests pass

---

## Keywords

- Coding interview
- Edge Cases
- Unit test
- Red/Green/Refactor
- TDD
- Regression Test
- Code Specifications AKA Code Examples

---

## Exercise 1: Frog Jump

A small frog wants to get to the other side of the road.
The frog is currently located at position X and wants to get to a
position greater than or equal to Y.
The small frog always jumps a fixed distance, D.

Write a function to count the minimal number of jumps that the small frog must perform to reach its target.

- Break the problem into test scenarios
- Implement the tests using Jest
- Write code to make your tests pass

---

## Exercise 2: Palindrome

A palindrome is a string that is equal when written forwards and backwards.
__Mom__, __racecar__, and __never odd or even__ are all palindromes.

Write a function that takes a string an returns whether it is a palindrome.

- Break the problem into test scenarios
- Implement the tests using Jest
- Write code to make your tests pass

---

## Lab Activity: String Compression

Write a function that takes a string and returns a new string that numerically indicates any repeated characters.

Examples:
- `'aaabbbccc'` => `'a3b3c3'`
- `'ghjff'` => `'g1h1j2f2'`

- Break the problem into test scenarios
- Implement the tests using Jest
- Write code to make your tests pass

---

## Additional Resources

- [Jest](https://facebook.github.io/jest/)
- [Jasmine](https://jasmine.github.io/)
