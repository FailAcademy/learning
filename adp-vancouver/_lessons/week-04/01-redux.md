---
layout: lesson
title: Redux
slides: ['_slides/week-04/01-redux.md']
lesson_date: 2019-04-29
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

- [Redux](http://redux.js.org/index.html)
- [Store](http://redux.js.org/docs/basics/Store.html)
- [Dispatch](http://redux.js.org/docs/api/Store.html#dispatch)
- [Reducer](http://redux.js.org/docs/basics/Reducers.html)
- [Action](http://redux.js.org/docs/basics/Actions.html)

---

## Exercise 1

Now create an action for decrementing the count, as well as its corresponding action creator.

---

## Exercise 2

Now write the case for `DECREMENT_COUNT` in your reducer.

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

## Exercise 4

Let's add information from the store to the UI. Add the following code to `src/main.js` and fill in the blanks:

```js
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const count = document.getElementById('count');

// How will we initially populate this span with content?
count.textContent = null;

incrementButton.addEventListener('click', () => {
  // Dispatch an action
  // Update the count span text
});

decrementButton.addEventListener('click', () => {
  // Dispatch an action
  // Update the count span text
});
```

---

## Exercise 5

Time to finish the counter app! You will need to:

1.  Add your name reducer to `src/redux/modules/name.js`
2.  Combine that reducer in `src/redux/reducers.js`
3.  Update the UI by adding/completing this in `src/main.js`:

```js
// Import the appropriate action creator

const nameInput = document.getElementById('name');
const countedName = document.getElementById('counted-name');

nameInput.addEventListener('input', event => {
  // Dispatch an action (with the input value as an argument)
  // Update the name span text
});
```

---

## Lab Activity

If you're still a bit fuzzy on Redux when the lab starts, take some time to watch Dan Abramov's [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) video series.

Once you comfortable with Redux's foundational concepts, keep working on Boomtown. We'll be adding Redux to it shortly.

---

## Additional Resources

A Redux tutorial its creator, Dan Abramov:

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)

Some helpful resources for learning more about Redux:

- [Scotch.io: Getting Started with Redux](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [Redux Without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
- [Cartoon Guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
- [Learn Redux](https://learnredux.com/)
