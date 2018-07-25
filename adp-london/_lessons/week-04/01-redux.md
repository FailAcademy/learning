---
layout: lesson
title: Redux
slides: ['_slides/week-04/01-redux.md']
lesson_date: 2018-07-23
---

## Pre-Work

Read through the sections of the [Redux Docs Introduction](http://redux.js.org/docs/introduction/index.html). Be prepared to explain the problem Redux is trying to solve.

Read [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). Be prepared to give an example of:

- An app that doesn't need Redux
- An app that would benefit from using Redux

---

## Learning Objectives

- Explain the benefits of using Redux to model state.
- Identify the different roles of the Redux store, reducers, actions, action-creators, and action-types.
- Setup a basic project using Redux in raw JavaScript.
- Explain the results of calling `dispatch(action)` and `getState()`.

---

## Keywords

- [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#content)
- [Redux](http://redux.js.org/index.html)
- [Store](http://redux.js.org/docs/basics/Store.html)
- [Dispatch](http://redux.js.org/docs/api/Store.html#dispatch)
- [Reducer](http://redux.js.org/docs/basics/Reducers.html)
- [Action](http://redux.js.org/docs/basics/Actions.html)

---

## Exercise 1

Now create an action for decrementing the count, as well as its corresponding action creator.

Note that the action creator for stocking up fruit will need to be set-up with a parameter of `count` so we can pass some information along in the action's payload about how much to update the inventory in the grocery store state.

You can set the value of `count` on a `payload` property in this action object.

---

## Exercise 2

Now that you've take care of the `GET_FRUIT_COUNT` action in the produce reducer, finish off building out the cases for the `UPDATE_FRUIT_STOCK` and `EXPLAIN_FRUIT_STOCK` action types.

How will you ensure that the original and current lists of fruit stocks are added to the store even if the user doesn't fire off the `GET_FRUIT_COUNT` action first?

---

## Exercise 3

Now that you have your actions, reducers, and store created, you can actually dispatch actions to your store and get state from your store.

Head over to `index.js` in the root of your app, import the store, import the action creator functions, then try dispatching the three actions and get something from the store:

```js
store.dispatch(getFruitCount());
store.dispatch(updateFruitStock(10));
store.dispatch(explainFruitStock());
// try console-logging something from the store with store.getState()
```

---

## Exercise 4

Console logs are fine, but there's a better way! Integrate your store with the [Redux Dev Tools extension now](https://github.com/zalmoxisus/redux-devtools-extension).

To do that you'll need to import `devToolsEnhancer` from `redux-devtools-extension` into `store.js` and then pass `devToolsEnhancer()` as a second argument to `createStore`.

You'll know it's working when you can see the contents of your store in your browser's Redux dev tools.

---

## Lab Activity

If you're still a bit fuzzy on Redux when the lab starts, take some time to watch Dan Abramov's [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) video series.

Following that, try adding a second module to the grocery store app. Add a module for the bakery or deli department, along with some corresponding actions for reconciling, adjusting, and explaining the stock for that department. Be creative!

After you complete the lab activity, keep working on Boomtown. We'll be adding Redux to it shortly.

---

## Additional Resources

A Redux tutorial its creator, Dan Abramov:

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

Some helpful resources for learning more about Redux:

- [Scotch.io: Getting Started with Redux](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [Redux Without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
- [Cartoon Guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
- [Learn Redux](https://learnredux.com/)
