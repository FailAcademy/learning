---
layout: lesson
title: React and Redux
slides: ['_slides/week-04/02-react-and-redux.md']
lesson_date: 2018-07-24
---

## Pre-Work

- Read the [Redux docs on React](http://redux.js.org/docs/basics/UsageWithReact.html)

---

## Learning Objectives

- Identify the roles of React and Redux when used together to display views and store state.
- Use Redux to write state-free code in React that relies largely on props.
- Use `react-redux`, with `<Provider>` and `connect` to map state to props.
- Use the `dispatch` prop to send actions to the Redux store from a React component.
- Use `react-router-redux` to preserve application routes in state.

---

## Keywords

- Container component
- Presentational component
- `Provider`
- `connect`
- `mapStateToProps`

---

## Exercise 1

**Redux** and **React** serve different roles. Discuss with a partner the role of each in terms of handling:

- Data
- Views
- Logic
- Events

---

## Exercise 2

Before we install `react-redux`, install Redux and Redux dev tools in Boomtown just like we did in the earlier exercises this week. You will want to install `redux-thunk` too.

Create a `redux` directory, and rough out the file and sub-directory structure. Set up your `store.js` just as we did for the grocery store exercise.

What kind of modules (i.e. action and reducer combos) do you think we'll need for this Boomtown?

---

## Exercise 3

Let's build the `items` modules together so we can grab this state from the Redux store in our `ItemContainer` component instead once we add `react-redux`.

---

## Exercise 4

Based on what you know about `<Provider>`, `connect`, `mapStateToProps`, and the `dispatch` prop, finish wiring up your `ItemsContainer.js` component with Redux.

Be sure to factor out all locally managed state within the component (you actually won't need a constructor function at all anymore for this component!).

---

## Lab Activity

### Task 1

Your primary task is to finish refactoring Boomtown to use Redux to manage all state. To do that, you will need to add a `user` module now too. You should have no need for any constructors in your class-based components when you're done.

### Task 2

Optionally, add

When you're finished, add [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux) to Boomtown to keep your router in sync with your state. This can be helpful for debugging! Follow the instructions in the README to implement this.

---

## Additional Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Egghead.io React-Redux Tutorial](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [Quick Guide to React & Redux](https://www.reax.io/blog/2016/07/07/quick-guide-to-react-and-redux/)
