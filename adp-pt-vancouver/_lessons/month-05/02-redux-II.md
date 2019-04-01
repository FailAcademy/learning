---
layout: lesson
title: Redux
slides: ['_slides/month-05/02-redux-II.md']
lesson_date: 2019-05-15
---

## Pre-Work

Read [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367). Be prepared to give an example of:

- An app that doesn't need Redux
- An app that would benefit from using Redux

---

## Learning Objectives

- Identify the different roles of the Redux store, reducers, actions, action-creators, and action-types.
- Explain the results of calling `dispatch(action)` and `getState()`.

---

## Keywords

- [Dispatch](http://redux.js.org/docs/api/Store.html#dispatch)
- [Action](http://redux.js.org/docs/basics/Actions.html)

---

## Exercise 1

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

## Exercise 2

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

## Lab Activity (Next Class)

If you're still a bit fuzzy on Redux when the lab starts, take some time to watch Dan Abramov's [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) video series.

Finish mark up for the shareItemForm and `shareItemPreview`. From your `Share.js` file call these two components to render on the share page.

Read the [Redux docs on React](http://redux.js.org/docs/basics/UsageWithReact.html)

---

## Additional Resources

Some helpful resources for learning more about Redux:

- [Redux Without Profanity](https://tonyhb.gitbooks.io/redux-without-profanity/content/index.html)
- [Cartoon Guide to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
