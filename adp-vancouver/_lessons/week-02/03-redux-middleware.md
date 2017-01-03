---
layout: lesson
title: Redux Middleware
slides: ['_slides/week-02/03-redux-middleware.md']
lesson_date: 2017-01-18
---

## Pre-Work

Prior to class, please read the Redux docs on [middleware](http://redux.js.org/docs/advanced/Middleware.html).

---

## Learning Objectives

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

Setup [redux-logger](https://github.com/evgenyrodionov/redux-logger) middleware in your "Worst Pokemon" app.

---

## Exercise 2

Setup [redux-thunk](https://github.com/gaearon/redux-thunk) in your "Worst Pokemon" app.

---

# Exercise 3

Setup an "async action" that sorts Pokemon by their number of votes (highest to least). Call this action `SORT_BY_POPULARITY`.

The sorting action should be called every time you dispatch `VOTE_UP`.

**Hint:** Use `redux-thunk` to complete this exercise.

---

## Exercise 4

With a partner, choose an additional middleware to implement in your "Worst Pokemon" app.

Some middleware suggestions:

- [Redux LocalStorage](https://github.com/elgerlambert/redux-localstorage)
- [Toast Error Messages](See the bottom of https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware)
- Redux-Debounce / Redux-Throttle
- Redux-Authentication (https://github.com/Jackong/redux-authentication)
- [Other suggestions found here](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces)

---

## Lab Activity

*Lab activity detail TBA.*

---

## Additional Resources

- [Egghead.io: Redux Middleware Chain](https://egghead.io/lessons/javascript-redux-the-middleware-chain?course=building-react-applications-with-idiomatic-redux)
- [Stack Overflow: How to Dispatch Async Actions](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
