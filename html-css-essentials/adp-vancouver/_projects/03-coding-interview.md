---
layout: project
title: Project 3 - Coding Interview
due: Monday, May 29th (beginning of class)
class: gh-check
---

The task for your coding interview is to implement a vending machine in JavaScript.

The vending machine itself should be a Javascript class. You do not need to write an interface for using the vending machine, just tests to prove that it works.

## Requirements

### Common

Your project must:

- [ ] Be pushed to Github
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)

### Development

Your project must:

- [ ] Have at least 10 well-formed, passing tests
- [ ] Contain a reasonably DRY (Don't Repeat Yourself) implementation, though the tests can be verbose
- [ ] Have a screenshot (or screenshots) in its README of the test output in your terminal
- [ ] Use `codebase-review` to create a pull request of the entire codebase

### Functionality

Your project must:

- [ ] Have functionality for printing inventory
- [ ] Have functionality for refilling inventory
- [ ] Have functionality for re-supplying change
- [ ] Have functionality for dispensing inventory based on payment
- [ ] Have functionality for returning change as coins (eg. $0.35 is 1 quarter and 1 dime)


### Quality

- [ ] Correctly use `describe` and `it` so that the test ouput specifically describes the behaviour of your code
- [ ] The vending machine must be a JS class

### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Dispense the smallest amount of coins when returning change
- [ ] Allow variable products in any slot

## Submission Instructions

When you’re ready to submit your project, use `codebase-review` to create a pull request of your entire repo,
then **email a link to your pull request** to blake.turner@redacademy.com.
