---
layout: lesson
title: Redux
slides: ['_slides/week-02/02-redux.md']
lesson_date: 2017-07-11
---

## Pre-Work

Do your own personal research and be prepared tomorrow to explain:

- the MVC pattern
- the Flux pattern
- the differences between MVC & Flux

Read the [Redux Introduction](http://redux.js.org/docs/introduction/index.html). 
Be prepared to explain the problem Redux is trying to solve.

Read [You might not need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367).
Be prepared to give an example of:
  - an app that doesn't need Redux
  - an app that would benefit from using Redux

---

## Learning Objectives

- Distinguish between MVC and Redux patterns.
- Identify the benefits of using Redux to model state.
- Identify the roles of Redux store, reducers, actions, action-creators and action-types.
- Setup a basic project using Redux in raw JavaScript.
- Create structured actions following [Flux Standard Actions](https://github.com/acdlite/flux-standard-action).
- Explain the results of calling `dispatch(action)` and `getState()`.

---

## Keywords

- [Flux](http://redux.js.org/index.html)
- [Redux](http://redux.js.org/index.html)
- [store](http://redux.js.org/docs/basics/Store.html)
- [dispatch](http://redux.js.org/docs/api/Store.html#dispatch)
- [reducer](http://redux.js.org/docs/basics/Reducers.html)
- [action](http://redux.js.org/docs/basics/Actions.html)

---

## Lab Activity

1. Setup Redux in your REDit app. Your app should include:
  - store
  - `combineReducers` with a "posts" reducer passed in
  - a VOTE_UP action that increments the vote on a post

---

## Additional Resources

- [Scotch.io: Getting Started with Redux](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [Redux without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
- [Cartoon guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
- [Egghead Tutorial](https://egghead.io/courses/getting-started-with-redux)
- [Learn Redux](https://learnredux.com/)
