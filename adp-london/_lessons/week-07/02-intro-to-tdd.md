---
layout: lesson
title: Intro to TDD
slides: ['_slides/week-07/02-intro-to-tdd.md']
lesson_date: 2017-02-21
---

## Pre-Work

Read [I pity the fool who doesn't write unit tests](https://blog.codinghorror.com/i-pity-the-fool-who-doesnt-write-unit-tests/) and be prepared to explain why writing unit tests is an essential part of application development.

---

## Learning Objectives

- Identify when code is 'complete'
- Explain the importance of writing unit tests.
- Set-up and write unit tests using [Jest](https://github.com/facebook/jest).
- Run tests using NPM scripts.
- Write new code using TDD
- Specify the behaviour of code before implementing

---

## Keywords

- Unit test
- Red/Green/Refactor
- TDD
- Regression Test
- Mocks, Stubs, and Fakes
- Test Spies
- Code specifications AKA Code Examples

---

## Lab Activity: Rojo

You're going to write version 0.0.1 of __Rojo__, the RED Academy personal assistant.
You can ask Rojo any question, and it will give you an appropriate response.
Example:

```
You: What time can I start drinking beer on Friday?
Rojo: 4:30pm, amigo!
```

Writing Rojo is a perfect use-case for TDD. You can define question/response pairs in your tests.

It will help to keep your code modular.
__Rojo__ itself will likely have dependencies on other modules that you will write.
Use what you learned about mocking dependencies to make it work!

---

## Additional Resources

- [Jest](https://facebook.github.io/jest/)
- [Jasmine](https://jasmine.github.io/)
