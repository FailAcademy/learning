---
layout: lesson
title: React and Redux I
slides: ['_slides/month-05/03-react-and-redux-I.md']
lesson_date: 2019-05-21
---

## Pre-Work

You'll need to complete the lab activity from the previous lesson (Intro to Redux).

---

## Learning Objectives

- Review how React components interact with pros and state.
- Identify the roles of React and Redux when used together to display views and store state.
- Use Redux to write state-free code in React.

---

## Keywords

- `mapStateToProps`
- `mapDispatchToProps`

---

## Exercise 1

**Redux** and **React** serve different roles. Discuss with a partner the role of each in terms of handling:

- Data
- Views
- Logic
- Events

---

## Exercise 2

Before we install `react-redux`, install Redux and Redux dev tools in Boomtown just like we did in the earlier exercises this week.

Create a `redux` directory, and rough out the file and sub-directory structure. Set up your `store.js` just as we did for the grocery store exercise.

What kind of modules (i.e. action and reducer combos) do you think we'll need for this Boomtown?

---

## Exercise 3

Let's build the `shareItemPreview` module together so we can grab this state from the Redux store in our `ShareItemPreview` component instead once we add `react-redux`.

---

## Additional Resources

- [React-Redux Docs](https://github.com/reactjs/react-redux)
- [Quick Guide to React & Redux](https://www.reax.io/blog/2016/07/07/quick-guide-to-react-and-redux/)
