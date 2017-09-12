---
layout: lesson
title: Redux Middleware
slides: ['_slides/week-02/03-redux-middleware.md']
lesson_date: 2017-07-12
---

## Pre-Work

Prior to class, please read the Redux docs on [middleware](http://redux.js.org/docs/advanced/Middleware.html).

Optional reading, but recommended:

- [Chapter 4: Currying](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch4.md)
- [Chapter 5: Coding by Composing](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md)

---

## Learning Objectives

- Explain what function currying and function composition are, and how they can be used to make code more reusable and readable.
- Define what middleware is in relation to Redux, and its role in an application.
- Apply Redux middleware, including `redux-logger` and `redux-thunk`.
- Use `redux-thunk` to dispatch multiple actions from an action creator.
- Learn how to setup middleware in your project.

---

## Keywords

- Middleware
- Logger
- Thunk

---

## Exercise 1

Setup [redux-logger](https://github.com/evgenyrodionov/redux-logger) middleware in a React app.

---

## Exercise 4

With a partner, choose an additional middleware to implement.

Some middleware suggestions:

- [Redux LocalStorage](https://github.com/elgerlambert/redux-localstorage)
- [Toast Error Messages](See the bottom of https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware)
- [Other suggestions found here](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces)

---

## Lab Activity

In todays lab we'll continue to work on our Boomtown project. Add Redux logger and any other useful Middleware you discover!

---

## Additional Resources

- [Egghead.io: Redux Middleware Chain](https://egghead.io/lessons/javascript-redux-the-middleware-chain?course=building-react-applications-with-idiomatic-redux)
- [Stack Overflow: How to Dispatch Async Actions](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
