---
layout: lesson
title: Redux
slides: ['_slides/month-05/01-redux-I.md']
lesson_date: 2019-05-15
---

## Pre-Work

Read through the sections of the [Redux Docs Introduction](http://redux.js.org/docs/introduction/index.html). Be prepared to explain the problem Redux is trying to solve.

---

## Learning Objectives

- Setup a basic project using Redux in raw JavaScript.
- Explain the benefits of using Redux to model state.

## Keywords

- [Redux](http://redux.js.org/index.html)
- [Store](http://redux.js.org/docs/basics/Store.html)
- [Reducer](http://redux.js.org/docs/basics/Reducers.html)

---

## Exercise 1

Create an action for decrementing the count, as well as its corresponding action creator.

---

## Exercise 2

Write the case for `DECREMENT_COUNT` in your reducer.

---

## Exercise 3

Now that you have your actions, reducers, and store created, you can actually dispatch actions to your store and get state from your store.

Head over to `src/main.js` in the root of your app, import the `store`, import the action creator functions, then try dispatching the actions and get something from the store:

```js
store.dispatch(incrementCount());
store.dispatch(decrementCount());
// try console-logging something from the store with store.getState()
```

---

## Additional Resources

A Redux tutorial its creator, Dan Abramov:

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

Some helpful resources for learning more about Redux:

- [Scotch.io: Getting Started with Redux](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [Learn Redux](https://learnredux.com/)
