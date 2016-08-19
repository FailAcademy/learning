---
layout: lesson
title: Redux Middleware
slides: ['_slides/week-02/03-redux-middleware.md']
lesson_date: 2016-10-05
---

## Objectives

- Apply Redux middleware, including "redux-logger" and "redux-thunk"
- Use "redux-thunk" to dispatch multiple actions from an action creator
- Get introduced to concepts of "curry" and "compose"
- Distinguish the advantages of using "immutable" data structures

## Keywords

- middleware
- thunk
- curry
- compose
- immutable

## Pre-Work

- Read the Redux docs on [middleware](http://redux.js.org/docs/advanced/Middleware.html).

## Active Learning

1. Setup [redux-logger](https://github.com/evgenyrodionov/redux-logger) middleware in your "Worst Pokemon" app.

2. Use [redux-thunk](https://github.com/gaearon/redux-thunk) in your "Worst Pokemon" app.

3. With a partner, choose an additional middleware to implement in your "Worst Pokemon" app. Some suggestions:

- [Redux LocalStorage](https://github.com/elgerlambert/redux-localstorage)
- [Toast Error Messages](See the bottom of https://www.codementor.io/reactjs/tutorial/beginner-s-guide-to-redux-middleware)
- Redux-Debounce / Redux-Throttle
- Redux-Authentication (https://github.com/Jackong/redux-authentication)

[Other suggestions found here](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces)

## Resources

- [egghead.io middleware chain](https://egghead.io/lessons/javascript-redux-the-middleware-chain?course=building-react-applications-with-idiomatic-redux)
