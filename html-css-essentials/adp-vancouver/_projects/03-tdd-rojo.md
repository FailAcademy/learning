---
layout: project
title: Project 3 - TDD (Rojo)
due: Monday, May 29th (beginning of class)
class: gh-check
---

You're going to write version 0.0.1 of __Rojo__, the RED Academy personal assistant.
You can ask Rojo any question, and it will give you an appropriate response.
Example:

```
You: What time can I start drinking beer on Friday?
Rojo: 4:30pm, amigo!
```

Writing Rojo is a perfect use-case for TDD. You can define question/response pairs in your tests.

You will likely find it helpful to focus on a _type_ of question, for example 'Questions about time and date',
or 'Questions about locations'.


## Requirements

### Common

Your project must:

- [ ] Be pushed to Github 
- [ ] Use [descriptive Git commits](http://chris.beams.io/posts/git-commit/)
- [ ] Use small, single purpose Git commits
- [ ] Contain `README.md` with project summary and setup
- [ ] Contain a valid [`package.json`](http://browsenpm.org/package.json) file with all appropriate fields completed
- [ ] Contain `.gitignore` file (ignoring `node_modules` and system files)

### Development

Your project must:

- [ ] Have at least 10 well-formed, passing tests
- [ ] Contain a reasonably DRY (Don't Repeat Yourself) implementation, though the tests can be verbose
- [ ] Have a screenshot (or screenshots) in its README of the test output in your terminal
- [ ] Use `codebase-review` to create a pull request of the entire codebase.

### Quality

Your project must:

- [ ] Pass all tests without any errors
- [ ] Correctly use `describe` and `it` so that the test ouput specifically describes the behaviour of your code
- [ ] Use regex to interpret strings


### Stretch Goals

Want to challenge yourself? Your project could also:

- [ ] Separate parsing and response logic into two seperate modules, each with their own tests
- [ ] Mock dependencies using `jest.mock` and `jest.fn`

## Submission Instructions

When you’re ready to submit your project, use `codebase-review` to create a pull request of your entire repo,
then **email a link to your pull request** to blake.turner@redacademy.com.
